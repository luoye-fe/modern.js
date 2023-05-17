import assert from 'assert';
import {
  getBrowserslistWithDefault,
  isUseCssSourceMap,
  type BuilderContext,
  BundlerChain,
  ModifyBundlerChainUtils,
  getCssSupport,
  CSS_MODULES_REGEX,
  GLOBAL_CSS_REGEX,
  NODE_MODULES_REGEX,
} from '@modern-js/builder-shared';
import type {
  RspackConfig,
  NormalizedConfig,
  RspackRule,
  RuleSetRule,
} from '../types';
import type { AcceptedPlugin } from 'postcss';
import { isUseCssExtract, getCompiledPath } from '../shared';

type CssNanoOptions = {
  configFile?: string | undefined;
  preset?: [string, object] | string | undefined;
};

export const getCssnanoDefaultOptions = (): CssNanoOptions => ({
  preset: [
    'default',
    {
      // merge longhand will break safe-area-inset-top, so disable it
      // https://github.com/cssnano/cssnano/issues/803
      // https://github.com/cssnano/cssnano/issues/967
      mergeLonghand: false,
    },
  ],
});

export async function applyBaseCSSRule(
  rule: ReturnType<BundlerChain['module']['rule']>,
  config: NormalizedConfig,
  context: BuilderContext,
  { target, isProd, isServer, isWebWorker, CHAIN_ID }: ModifyBundlerChainUtils,
) {
  rule.type('css');

  // 1. Check user config
  const enableExtractCSS = isUseCssExtract(config, target);
  const enableSourceMap = isUseCssSourceMap(config);
  // const enableCSSModuleTS = Boolean(config.output.enableCssModuleTSDeclaration);

  const { applyOptionsChain } = await import('@modern-js/utils');
  const browserslist = await getBrowserslistWithDefault(
    context.rootPath,
    config,
    target,
  );

  const getPostcssConfig = () => {
    const extraPlugins: AcceptedPlugin[] = [];
    const utils = {
      addPlugins(plugins: AcceptedPlugin | AcceptedPlugin[]) {
        if (Array.isArray(plugins)) {
          extraPlugins.push(...plugins);
        } else {
          extraPlugins.push(plugins);
        }
      },
    };
    const enableCssMinify = !enableExtractCSS && isProd;

    const cssSupport = getCssSupport(browserslist);

    const mergedConfig = applyOptionsChain(
      {
        postcssOptions: {
          plugins: [
            require(getCompiledPath('postcss-flexbugs-fixes')),
            !cssSupport.customProperties &&
              require(getCompiledPath('postcss-custom-properties')),
            !cssSupport.initial && require(getCompiledPath('postcss-initial')),
            !cssSupport.pageBreak &&
              require(getCompiledPath('postcss-page-break')),
            !cssSupport.fontVariant &&
              require(getCompiledPath('postcss-font-variant')),
            !cssSupport.mediaMinmax &&
              require(getCompiledPath('postcss-media-minmax')),
            require(getCompiledPath('postcss-nesting')),
            require(getCompiledPath('autoprefixer'))(
              applyOptionsChain(
                {
                  flexbox: 'no-2009',
                  overrideBrowserslist: browserslist,
                },
                config.tools.autoprefixer,
              ),
            ),
            enableCssMinify
              ? require('cssnano')(getCssnanoDefaultOptions())
              : false,
          ].filter(Boolean),
        },
        sourceMap: enableSourceMap,
      },
      // postcss-loader will modify config
      config.tools.postcss || {},
      utils,
    );
    if (extraPlugins.length) {
      assert('postcssOptions' in mergedConfig);
      assert('plugins' in mergedConfig.postcssOptions!);
      mergedConfig.postcssOptions.plugins!.push(...extraPlugins);
    }
    return mergedConfig;
  };

  if (!isServer && !isWebWorker) {
    const postcssLoaderOptions = getPostcssConfig();

    rule
      .use(CHAIN_ID.USE.POSTCSS)
      .loader(require.resolve('@rspack/postcss-loader'))
      .options(postcssLoaderOptions)
      .end();
  }

  // CSS imports should always be treated as sideEffects
  rule.merge({ sideEffects: true });
}

/**
 * Use type: "css/module" rule instead of css-loader modules.auto config
 *
 * applyCSSModuleRule in modifyRspackConfig, so that other plugins can easily adjust css rule in Chain.
 */
export const applyCSSModuleRule = (
  rules: RspackRule[] | undefined,
  ruleTest: RegExp,
  disableCssModuleExtension: boolean | undefined,
) => {
  if (!rules) {
    return;
  }

  const ruleIndex = rules.findIndex(r => r !== '...' && r.test === ruleTest);

  if (ruleIndex === -1) {
    return;
  }

  const rule = rules[ruleIndex] as RuleSetRule;

  const { test, type, ...rest } = rule;

  if (disableCssModuleExtension) {
    // Equivalent to css-loader looseCssModules
    rules[ruleIndex] = {
      test: ruleTest,
      oneOf: [
        {
          ...rest,
          test: CSS_MODULES_REGEX,
          type: 'css/module',
        },
        {
          ...rest,
          test: NODE_MODULES_REGEX,
          type: 'css',
        },
        {
          ...rest,
          test: GLOBAL_CSS_REGEX,
          type: 'css',
        },
        {
          ...rest,
          type: 'css/module',
        },
      ],
    };
  } else {
    // Equivalent to css-loader modules.auto: true
    rules[ruleIndex] = {
      test: ruleTest,
      oneOf: [
        {
          ...rest,
          test: CSS_MODULES_REGEX,
          type: 'css/module',
        },
        {
          ...rest,
          type: 'css',
        },
      ],
    };
  }
};

export const applyNativeCssModulesConfig = (
  rspackConfig: RspackConfig,
  config: NormalizedConfig,
  ruleTest: RegExp,
) => {
  const rules = rspackConfig.module?.rules;

  applyCSSModuleRule(rules, ruleTest, config.output.disableCssModuleExtension);
};
