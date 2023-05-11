(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_api_plugin-hooks_mdx"],{34072:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return u},title:function(){return m},toc:function(){return j},default:function(){return g}});var r=i("9880"),s=i("23169"),d=i.ir(i("66269")),l=i.ir(i("66947")),a=i.ir(i("64868")),c=i.ir(i("19917")),o=i.ir(i("45091")),t=i.ir(i("21096")),h=i.ir(i("32805")),x=i.ir(i("39926")),p=i.ir(i("8714")),u={extractApiHeaders:[2]},m="Plugin Hooks",j=[{text:"概览",depth:2,id:"概览"},{text:"通用钩子",depth:2,id:"通用钩子"},{text:"modifyBuilderConfig",depth:3,id:"modifybuilderconfig"},{text:"modifyBundlerChain 实验性",depth:3,id:"modifybundlerchain-实验性"},{text:"modifyWebpackChain",depth:3,id:"modifywebpackchain"},{text:"modifyWebpackConfig",depth:3,id:"modifywebpackconfig"},{text:"modifyRspackConfig",depth:3,id:"modifyrspackconfig"},{text:"onBeforeCreateCompiler",depth:3,id:"onbeforecreatecompiler"},{text:"onAfterCreateCompiler",depth:3,id:"onaftercreatecompiler"},{text:"构建钩子",depth:2,id:"构建钩子"},{text:"onBeforeBuild",depth:3,id:"onbeforebuild"},{text:"onAfterBuild",depth:3,id:"onafterbuild"},{text:"开发服务钩子",depth:2,id:"开发服务钩子"},{text:"onBeforeStartDevServer",depth:3,id:"onbeforestartdevserver"},{text:"onAfterStartDevServer",depth:3,id:"onafterstartdevserver"},{text:"onDevCompileDone",depth:3,id:"ondevcompiledone"},{text:"其他钩子",depth:2,id:"其他钩子"},{text:"onExit",depth:3,id:"onexit"}];function f(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",ul:"ul",li:"li",code:"code",h3:"h3",div:"div",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"plugin-hooks",children:["Plugin Hooks",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-hooks",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"本章节描述了 Builder 插件提供的生命周期钩子。"}),"\n",(0,r.jsxs)(n.h2,{id:"概览",children:["概览",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#概览",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"通用钩子"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyBuilderConfig"}),"：修改传递给 Builder 的配置项。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyBundlerChain"})," (实验性)：通过 chain api 修改 webpack / Rspack 配置。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyWebpackChain"}),"：修改 webpack chain 配置。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyWebpackConfig"}),"：修改最终的 webpack 配置对象。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyRspackConfig"}),"：修改最终的 Rspack 配置对象。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onBeforeCreateCompiler"}),"：在创建 compiler 实例前调用。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onAfterCreateCompiler"}),"：在创建 compiler 实例后、执行构建前调用。"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"构建钩子"}),"：仅在执行 build 方法构建生产环境产物时调用。"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onBeforeBuild"}),"：在执行生产环境构建前调用。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onAfterBuild"}),"：在执行生产环境构建后调用，可以获取到构建结果信息。"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"开发服务钩子"}),"：仅在执行 startDevServer 方法运行开发服务器时调用。"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onBeforeStartDevServer"}),"：在启动开发服务器前调用。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onAfterStartDevServer"}),"：在启动开发服务器后调用。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onDevCompileDone"}),"：在每次开发环境构建结束后调用。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"其他钩子"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onExit"}),"：在进程即将退出时调用。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"通用钩子",children:["通用钩子",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通用钩子",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"modifybuilderconfig",children:["modifyBuilderConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifybuilderconfig",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"修改传递给 Builder 的配置项，你可以直接修改传入的 config 对象，也可以返回一个新的对象来替换传入的对象。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyWebpackChainUtils = {\n  mergeBuilderConfig: typeof mergeBuilderConfig;\n};\n\nfunction ModifyBuilderConfig(\n  callback: (\n    config: BuilderConfig,\n    utils: ModifyWebpackChainUtils,\n  ) => PromiseOrNot<BuilderConfig | void>,\n): void;\n"})})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyBuilderConfig((config, { mergeBuilderConfig }) => {\n      config.html = config.html || {};\n      config.html.title = 'Hello World!';\n      return mergeBuilderConfig(config, {\n        source: { preEntry: 'foo.js' },\n      });\n    });\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"modifybundlerchain-实验性",children:["modifyBundlerChain ",(0,r.jsx)(n.code,{children:"实验性"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifybundlerchain-实验性",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"什么是 BundlerChain"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["\n","\n",(0,r.jsx)(d.default,{}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"modifyBundlerChain"})," 用于调用 bundler chain 来修改 webpack / Rspack 的配置。你在使用 webpack-provider 或 rspack-provider 时都可以使用该 hook。"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyBunlderChainUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  isServer: boolean;\n  isWebWorker: boolean;\n  CHAIN_ID: ChainIdentifier;\n  HtmlPlugin: typeof import('html-webpack-plugin');\n};\n\nfunction ModifyBundlerChain(\n  callback: (\n    chain: BundlerChain,\n    utils: ModifyBunlderChainUtils,\n  ) => Promise<void> | void,\n): void;\n"})})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';\n\nexport default () => ({\n  setup: api => {\n    api.modifyBundlerChain((chain, utils) => {\n      if (utils.env === 'development') {\n        chain.devtool('eval');\n      }\n\n      chain.plugin('bundle-analyze').use(BundleAnalyzerPlugin);\n    });\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"modifywebpackchain",children:["modifyWebpackChain",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifywebpackchain",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"通过 webpack chain 来修改 webpack 配置。该方法仅在使用 webpack-provider 时调用。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyWebpackChainUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  webpack: typeof import('webpack');\n  isServer: boolean;\n  isWebWorker: boolean;\n  CHAIN_ID: ChainIdentifier;\n  getCompiledPath: (name: string) => string;\n  HtmlWebpackPlugin: typeof import('html-webpack-plugin');\n};\n\nfunction ModifyWebpackChain(\n  callback: (\n    chain: WebpackChain,\n    utils: ModifyWebpackChainUtils,\n  ) => Promise<void> | void,\n): void;\n"})})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyWebpackChain((chain, utils) => {\n      if (utils.env === 'development') {\n        chain.devtool('eval');\n      }\n    });\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"modifywebpackconfig",children:["modifyWebpackConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifywebpackconfig",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"修改最终的 webpack 配置对象，你可以直接修改传入的 config 对象，也可以返回一个新的对象来替换传入的对象。该方法仅在使用 webpack-provider 时调用。"}),"\n",(0,r.jsxs)(n.p,{children:["该方法的调用时机晚于 ",(0,r.jsx)(n.code,{children:"modifyWebpackChain"})," 钩子。"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyWebpackConfigUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  webpack: typeof import('webpack');\n  isServer: boolean;\n  isWebWorker: boolean;\n  CHAIN_ID: ChainIdentifier;\n  getCompiledPath: (name: string) => string;\n  HtmlWebpackPlugin: typeof import('html-webpack-plugin');\n  addRules: (rules: RuleSetRule | RuleSetRule[]) => void;\n  prependPlugins: (\n    plugins: WebpackPluginInstance | WebpackPluginInstance[],\n  ) => void;\n  appendPlugins: (\n    plugins: WebpackPluginInstance | WebpackPluginInstance[],\n  ) => void;\n  removePlugin: (pluginName: string) => void;\n};\n\nfunction ModifyWebpackConfig(\n  callback: (\n    config: WebpackConfig,\n    utils: ModifyWebpackConfigUtils,\n  ) => Promise<WebpackConfig | void> | WebpackConfig | void,\n): void;\n"})})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyWebpackConfig((config, utils) => {\n      if (utils.env === 'development') {\n        config.devtool = 'eval';\n      }\n    });\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"modifyrspackconfig",children:["modifyRspackConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyrspackconfig",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"修改最终的 Rspack 配置对象，你可以直接修改传入的 config 对象，也可以返回一个新的对象来替换传入的对象。该方法仅在使用 rspack-provider 时调用。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyRspackConfigUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  isServer: boolean;\n  isWebWorker: boolean;\n  getCompiledPath: (name: string) => string;\n};\n\nfunction ModifyRspackConfig(\n  callback: (\n    config: RspackConfig,\n    utils: ModifyRspackConfigUtils,\n  ) => Promise<RspackConfig | void> | RspackConfig | void,\n): void;\n"})})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyRspackConfig((config, utils) => {\n      if (utils.env === 'development') {\n        config.devtool = 'eval';\n      }\n    });\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"onbeforecreatecompiler",children:["onBeforeCreateCompiler",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbeforecreatecompiler",children:"#"})]}),"\n","\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onBeforeCreateCompiler(({ bundlerConfigs }) => {\n      console.log('the bundler config is ', bundlerConfigs);\n    });\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"onaftercreatecompiler",children:["onAfterCreateCompiler",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onaftercreatecompiler",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onAfterCreateCompiler(({ compiler }) => {\n      console.log('the compiler is ', compiler);\n    });\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"构建钩子",children:["构建钩子",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建钩子",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"onbeforebuild",children:["onBeforeBuild",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbeforebuild",children:"#"})]}),"\n","\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onBeforeBuild(({ bundlerConfigs }) => {\n      console.log('the bundler config is ', bundlerConfigs);\n    });\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"onafterbuild",children:["onAfterBuild",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onafterbuild",children:"#"})]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onAfterBuild(({ stats }) => {\n      console.log(stats?.toJson());\n    });\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"开发服务钩子",children:["开发服务钩子",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开发服务钩子",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"onbeforestartdevserver",children:["onBeforeStartDevServer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbeforestartdevserver",children:"#"})]}),"\n","\n",(0,r.jsx)(t.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onBeforeStartDevServer(() => {\n      console.log('before start!');\n    });\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"onafterstartdevserver",children:["onAfterStartDevServer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onafterstartdevserver",children:"#"})]}),"\n","\n",(0,r.jsx)(h.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onAfterStartDevServer(({ port }) => {\n      console.log('this port is: ', port);\n    });\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"ondevcompiledone",children:["onDevCompileDone",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ondevcompiledone",children:"#"})]}),"\n","\n",(0,r.jsx)(x.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onDevCompileDone(({ isFirstCompile }) => {\n      if (isFirstCompile) {\n        console.log('first compile!');\n      } else {\n        console.log('re-compile!');\n      }\n    });\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"其他钩子",children:["其他钩子",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#其他钩子",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"onexit",children:["onExit",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onexit",children:"#"})]}),"\n","\n",(0,r.jsx)(p.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onExit(() => {\n      console.log('exit!');\n    });\n  },\n});\n"})})})})]})}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}}}]);