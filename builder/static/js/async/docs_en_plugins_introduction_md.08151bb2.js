(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_plugins_introduction_md"],{10:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return r},title:function(){return l},toc:function(){return a},default:function(){return t}});var s=i("9880"),o=i("23169"),r={},l="Introduce to Plugin",a=[{text:"Write a plugin",depth:2,id:"write-a-plugin"},{text:"Lifetime Hooks",depth:2,id:"lifetime-hooks"},{text:"Use Builder Config",depth:2,id:"use-builder-config"},{text:"Modify webpack Config",depth:2,id:"modify-webpack-config"},{text:"Examples",depth:2,id:"examples"},{text:"Modify Loaders",depth:3,id:"modify-loaders"},{text:"Add Entry Points",depth:3,id:"add-entry-points"},{text:"Integrate webpack Plugins",depth:3,id:"integrate-webpack-plugins"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",div:"div",pre:"pre",strong:"strong",h3:"h3"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"introduce-to-plugin",children:["Introduce to Plugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduce-to-plugin",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Builder provides developers with a lightweight but powerful plugin system to build itself and any other plugins.\nDeveloping plugins to change the Builder's behavior and introduce extra features. such as:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Modify config of bundlers."}),"\n",(0,s.jsx)(n.li,{children:"Resolve and handle new file types."}),"\n",(0,s.jsx)(n.li,{children:"Modify and compile file modules."}),"\n",(0,s.jsx)(n.li,{children:"Deploy your application."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Builder can use webpack or Rspack as the bundler, expose unified Node.js API, and integrate into different frameworks. Users can painlessly switch between bundlers."}),"\n",(0,s.jsxs)(n.h2,{id:"write-a-plugin",children:["Write a plugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#write-a-plugin",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Plugin module should export an entry function just like ",(0,s.jsx)(n.code,{children:"(options?: PluginOptions) => BuilderPlugin"}),", It is recommended to name plugin functions ",(0,s.jsx)(n.code,{children:"builderPluginXXX"}),"."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';\n\nexport interface PluginFooOptions {\n  message?: string;\n}\n\nexport const builderPluginFoo = (\n  options?: PluginFooOptions,\n): BuilderPlugin => ({\n  name: 'plugin-foo',\n  setup(api) {\n    api.onExit(() => {\n      const msg = options.message || 'finish.';\n      console.log(msg);\n    });\n  },\n});\n\nbuilder.addPlugins([builderPluginFoo('some other message.')]);\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["The function usually ",(0,s.jsx)(n.strong,{children:"takes an options object"})," and ",(0,s.jsx)(n.strong,{children:"returns the plugin instance"}),", which manages state through closures."]}),"\n",(0,s.jsx)(n.p,{children:"Let's look at each part:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," is used to label the plugin"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"setup"})," as the main entry point of plugins"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api"})," provides context object, lifetime hooks and utils."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The package name of the plugin needs to contain the conventional ",(0,s.jsx)(n.code,{children:"builder-plugin"})," prefix for identification, just like ",(0,s.jsx)(n.code,{children:"builder-plugin-foo"}),", ",(0,s.jsx)(n.code,{children:"@scope/builder-plugin-bar"}),", etc."]}),"\n",(0,s.jsxs)(n.h2,{id:"lifetime-hooks",children:["Lifetime Hooks",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lifetime-hooks",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Builder uses lifetime planning work internally, and plugins can also register hooks to take part in any stage of the workflow and implement their own features."}),"\n",(0,s.jsxs)(n.p,{children:["The full list of Builder's lifetime hooks can be found in the ",(0,s.jsx)(n.a,{href:"/api/plugin-hooks",children:"API References"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The Builder does not take over the hooks of the underlying bundlers, whose documents can be found here: ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/api/compiler-hooks/",target:"_blank",rel:"noopener noreferrer",children:"webpack hooks"})]}),"\n",(0,s.jsxs)(n.h2,{id:"use-builder-config",children:["Use Builder Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-builder-config",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Custom plugins can usually get config from function parameters,\njust define and use it at your pleasure."}),"\n",(0,s.jsx)(n.p,{children:"But sometimes you may need to read and change the public config of the Builder. To begin with, you should understand how the Builder generates and uses its config:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Read, parse config and merge with default values."}),"\n",(0,s.jsxs)(n.li,{children:["Plugins modify the config by ",(0,s.jsx)(n.code,{children:"api.modifyBuilderConfig(...)"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Normalize the config and provide it to consume, then the config can no longer be modified."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Refer to this tiny example:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export const builderPluginUploadDist = (): BuilderPlugin => ({\n  name: 'plugin-upload-dist',\n  setup(api) {\n    api.modifyBuilderConfig(config => {\n      // try to disable minimize.\n      // should deal with optional value by self.\n      config.output ||= {};\n      config.output.disableMinimize = true;\n      // but also can be enable by other plugins...\n    });\n    api.onBeforeBuild(() => {\n      // use the normalized config.\n      const config = api.getNormalizedConfig();\n      if (!config.output.disableMinimize) {\n        // let it crash when enable minimize.\n        throw new Error(\n          'You must disable minimize to upload readable dist files.',\n        );\n      }\n    });\n    api.onAfterBuild(() => {\n      const config = api.getNormalizedConfig();\n      const distRoot = config.output.distPath.root;\n      // TODO: upload all files in `distRoot`.\n    });\n  },\n});\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"There are 3 ways to use Builder config:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["register callback with ",(0,s.jsx)(n.code,{children:"api.modifyBuilderConfig(config => {})"})," to modify config."]}),"\n",(0,s.jsxs)(n.li,{children:["use ",(0,s.jsx)(n.code,{children:"api.getBuilderConfig()"})," to get Builder config."]}),"\n",(0,s.jsxs)(n.li,{children:["use ",(0,s.jsx)(n.code,{children:"api.getNormalizedConfig()"})," to get finally normalized config."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When normalized, it will again merge the config object with the default values\nand make sure the optional properties exist.\nSo for PluginUploadDist, part of its type looks like:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"api.modifyBuilderConfig((config: BuilderConfig) => {});\napi.getBuilderConfig() as BuilderConfig;\ntype BuilderConfig = {\n  output?: {\n    disableMinimize?: boolean;\n    distPath?: { root?: string };\n  };\n};\n\napi.getNormalizedConfig() as NormalizedConfig;\ntype NormalizedConfig = {\n  output: {\n    disableMinimize: boolean;\n    distPath: { root: string };\n  };\n};\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["The return value type of ",(0,s.jsx)(n.code,{children:"getNormalizedConfig()"})," is slightly different from that of ",(0,s.jsx)(n.code,{children:"BuilderConfig"})," and is narrowed compared to the types described elsewhere in the documentation.\nYou don't need to fill in the defaults when you use it."]}),"\n",(0,s.jsx)(n.p,{children:"Therefore, the best way to use configuration items is to"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Modify the config"})," with ",(0,s.jsx)(n.code,{children:"api.modifyBuilderConfig(config => {})"})]}),"\n",(0,s.jsxs)(n.li,{children:["Read ",(0,s.jsx)(n.code,{children:"api.getNormalizedConfig()"})," as the ",(0,s.jsx)(n.strong,{children:"actual config used by the plugin"})," in the further lifetime."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"modify-webpack-config",children:["Modify webpack Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-webpack-config",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Plugins can handle webpack's config by:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["use ",(0,s.jsx)(n.code,{children:"api.modifyWebpackChain(chain => {})"})," to modify webpack-chain."]}),"\n",(0,s.jsxs)(n.li,{children:["use ",(0,s.jsx)(n.code,{children:"api.modifyWebpackConfig(config => {})"})," to modify raw webpack config."]}),"\n",(0,s.jsxs)(n.li,{children:["use ",(0,s.jsx)(n.code,{children:"api.onAfterCreateCompiler(compiler => {})"})," to handle webpack instance directly."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We recommend that you use ",(0,s.jsx)(n.a,{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"neutrinojs/webpack-chain"}),"'s\nchained api to handle the config of webpack whenever possible."]}),"\n",(0,s.jsxs)(n.p,{children:["Builder integrated a webpack5-compatible version,\nwhich can be found in ",(0,s.jsx)(n.a,{href:"https://github.com/sorrycc/webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"sorrycc/webpack-chain"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"examples",children:["Examples",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#examples",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"modify-loaders",children:["Modify Loaders",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-loaders",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The webpack loaders can be used to load and transform various file types. For more information, see ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/concepts/loaders",target:"_blank",rel:"noopener noreferrer",children:"concepts"})," and ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/loaders/",target:"_blank",rel:"noopener noreferrer",children:"loaders"}),"."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';\n\nexport const builderPluginTypeScriptExt = (): BuilderPlugin => ({\n  name: 'builder-typescript-ext',\n  setup(api) {\n    api.modifyWebpackChain(async chain => {\n      // set ts-loader to recognize more files as typescript modules.\n      chain.module.rule(CHAIN_ID.RULE.TS).test(/\\.(ts|mts|cts|tsx|tss|tsm)$/);\n    });\n  },\n});\n"})})})}),"\n",(0,s.jsxs)(n.h3,{id:"add-entry-points",children:["Add Entry Points",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-entry-points",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';\n\nexport const builderPluginAdminPanel = (): BuilderPlugin => ({\n  name: 'builder-admin-panel',\n  setup(api) {\n    api.modifyWebpackChain(async chain => {\n      config.entry('admin-panel').add('src/admin/panel.js');\n    });\n  },\n});\n"})})})}),"\n",(0,s.jsxs)(n.h3,{id:"integrate-webpack-plugins",children:["Integrate webpack Plugins",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#integrate-webpack-plugins",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Integrate existing webpack plugins to migrate your applications:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';\nimport type { Options } from '@modern-js/inspector-webpack-plugin';\n\nexport const builderPluginInspector = (options?: Options): BuilderPlugin => ({\n  name: 'builder-plugin-inspector',\n  setup(api) {\n    api.modifyWebpackChain(async chain => {\n      // load modules dynamically only when needed\n      // to avoid unnecessary performance cost.\n      const { InspectorWebpackPlugin } = await import(\n        '@modern-js/inspector-webpack-plugin'\n      );\n      // modify webpack-chain to setup webpack plugin.\n      chain\n        .plugin('inspector-webpack-plugin')\n        .use(InspectorWebpackPlugin, [inspectorOptions]);\n    });\n  },\n});\n"})})})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);