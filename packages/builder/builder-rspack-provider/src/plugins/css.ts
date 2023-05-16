import {
  CSS_REGEX,
  BundlerChainRule,
  BuilderContext,
  ModifyChainUtils,
  setConfig,
  logger,
} from '@modern-js/builder-shared';
import type { RspackConfig, BuilderPlugin, NormalizedConfig } from '../types';
import {
  applyNativeCssModulesConfig,
  applyBaseCSSRule as applyNativeCSSRule,
} from './css-native';
import { applyBaseCSSRule as applyCommunityCSSRule } from './css-community';

export const enableNativeCss = (config: NormalizedConfig) =>
  !config.output.disableCssExtract;

export const applyBaseCSSRule = async (
  rule: BundlerChainRule,
  config: NormalizedConfig,
  context: BuilderContext,
  utils: ModifyChainUtils,
) => {
  if (enableNativeCss(config)) {
    await applyNativeCSSRule(rule, config, context, utils);
  } else {
    await applyCommunityCSSRule(rule, config, context, utils);
  }
};

export const applyCSSModuleRule = (
  rspackConfig: RspackConfig,
  config: NormalizedConfig,
  ruleTest: RegExp,
) => {
  if (enableNativeCss(config)) {
    applyNativeCssModulesConfig(rspackConfig, config, ruleTest);
  }
};

export const builderPluginCss = (): BuilderPlugin => {
  return {
    name: 'builder-plugin-css',
    setup(api) {
      api.modifyBundlerChain(async (chain, utils) => {
        const config = api.getNormalizedConfig();

        const rule = chain.module.rule(utils.CHAIN_ID.RULE.CSS);
        rule.test(CSS_REGEX);

        await applyBaseCSSRule(rule, config, api.context, utils);
      });

      api.modifyRspackConfig(
        async (rspackConfig, { isProd, isServer, isWebWorker }) => {
          const config = api.getNormalizedConfig();

          if (enableNativeCss(config)) {
            let localIdentName =
              config.output.cssModuleLocalIdentName ||
              // Using shorter classname in production to reduce bundle size
              (isProd ? '[hash:5]' : '[path][name]__[local]--[hash:5]');

            if (localIdentName.includes(':base64')) {
              logger.warn(
                `Custom hashDigest in output.cssModuleLocalIdentName is currently not supported when using Rspack, the 'base64' will be ignored.`,
              );
              localIdentName = localIdentName.replace(':base64', '');
            }

            // need use type: "css/module" rule instead of modules.auto config
            setConfig(rspackConfig, 'builtins.css.modules', {
              localsConvention: 'camelCase',
              localIdentName,
              exportsOnly: isServer || isWebWorker,
            });
          } else {
            setConfig(rspackConfig, 'experiments.css', false);
          }

          applyCSSModuleRule(rspackConfig, config, CSS_REGEX);
        },
      );
    },
  };
};
