import type CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

export type {
  CSSLoaderOptions,
  StyleLoaderOptions,
  //   CSSExtractOptions,
  PostCSSLoaderOptions,
  PostCSSPlugin,
  //   MiniCSSExtractPluginOptions,
  //   MiniCSSExtractLoaderOptions,
} from './css';

export type CssMinimizerPluginOptions = CssMinimizerPlugin.BasePluginOptions &
  CssMinimizerPlugin.DefinedDefaultMinimizerAndOptions<CssMinimizerPlugin.CssNanoOptionsExtended>;
