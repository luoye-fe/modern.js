import type {
  ChainedConfig,
  SharedToolsConfig,
  ToolsLessConfig,
  ToolsSassConfig,
} from '@modern-js/builder-shared';
import type { Options as HTMLPluginOptions } from '@rspack/plugin-html';
import type {
  PostCSSLoaderOptions,
  PostCSSPlugin,
  CSSLoaderOptions,
  StyleLoaderOptions,
  CssMinimizerPluginOptions,
} from '../thirdParty';
import type { RspackConfig } from '../rspack';
import type { ModifyRspackConfigUtils } from '../hooks';

export type ToolsPostCSSLoaderConfig = ChainedConfig<
  PostCSSLoaderOptions,
  {
    addPlugins: (plugins: PostCSSPlugin | PostCSSPlugin[]) => void;
  }
>;

type ToolsHtmlPluginConfig = ChainedConfig<
  HTMLPluginOptions,
  {
    entryName: string;
    entryValue: string | string[];
  }
>;

export type ToolsRspackConfig = ChainedConfig<
  RspackConfig,
  ModifyRspackConfigUtils
>;

export type ToolsCSSLoaderConfig = ChainedConfig<CSSLoaderOptions>;

export type ToolsStyleLoaderConfig = ChainedConfig<StyleLoaderOptions>;

export type ToolsMinifyCssConfig = ChainedConfig<CssMinimizerPluginOptions>;

export interface ToolsConfig extends SharedToolsConfig {
  htmlPlugin?: false | ToolsHtmlPluginConfig;
  postcss?: ToolsPostCSSLoaderConfig;
  rspack?: ToolsRspackConfig;
  less?: ToolsLessConfig;
  sass?: ToolsSassConfig;
  /**
   * Modify the options of [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin).
   */
  minifyCss?: ToolsMinifyCssConfig;
  /**
   * Modify the options of [css-loader](https://github.com/webpack-contrib/css-loader).
   */
  cssLoader?: ToolsCSSLoaderConfig;
  /**
   * Modify the options of [style-loader](https://github.com/webpack-contrib/style-loader).
   */
  styleLoader?: ToolsStyleLoaderConfig;
}

export type NormalizedToolsConfig = ToolsConfig;
