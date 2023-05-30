(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_api_plugin-core_mdx"],{95274:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return p},toc:function(){return t},default:function(){return u}});var r=i("9880"),d=i("23169"),l=i.ir(i("59458")),s=i.ir(i("38168")),a=i.ir(i("4022")),c=i.ir(i("50885")),o={extractApiHeaders:[2]},p="Plugin Core",t=[{text:"BuilderPlugin",depth:2,id:"builderplugin"},{text:"BuilderPluginAPI",depth:2,id:"builderpluginapi"},{text:"适用于 webpack-provider 的插件",depth:3,id:"适用于-webpack-provider-的插件"},{text:"适用于 rspack-provider 的插件",depth:3,id:"适用于-rspack-provider-的插件"},{text:"同时适用于 webpack-provider 和 rspack-provider 的插件",depth:3,id:"同时适用于-webpack-provider-和-rspack-provider-的插件"},{text:"api.context",depth:2,id:"apicontext"},{text:"api.getBuilderConfig",depth:2,id:"apigetbuilderconfig"},{text:"api.getNormalizedConfig",depth:2,id:"apigetnormalizedconfig"},{text:"api.isPluginExists",depth:2,id:"apiispluginexists"},{text:"api.getHTMLPaths",depth:2,id:"apigethtmlpaths"}];function h(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3",strong:"strong"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"plugin-core",children:["Plugin Core",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-core",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"本章节描述了 Builder 插件核心的类型定义和 API。"}),"\n",(0,r.jsxs)(n.h2,{id:"builderplugin",children:["BuilderPlugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderplugin",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"插件对象的类型，插件对象包含以下属性："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"}),"：插件的名称，唯一标识符。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"setup"}),"：插件逻辑的主入口函数，可以是一个异步函数。该函数仅会在初始化插件时执行一次。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pre"}),"：指定当前插件的前置插件有哪些，当前插件会被调整到这些插件之后执行。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"post"}),"：指定当前插件的后置插件有哪些，当前插件会被调整到这些插件之前执行。"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type BuilderPlugin<API = BuilderPluginAPI> = {\n  name: string;\n  pre?: string[];\n  post?: string[];\n  setup: (api: API) => Promise<void> | void;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["你可以从 ",(0,r.jsx)(n.code,{children:"@modern-js/builder"})," 中导入该类型："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\n\nexport default (): BuilderPlugin => ({\n  name: 'builder-plugin-foo',\n\n  pre: ['builder-plugin-bar'],\n\n  setup: api => {\n    api.onAfterBuild(() => {\n      console.log('after build!');\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"builderpluginapi",children:["BuilderPluginAPI",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderpluginapi",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"插件 API 对象的类型。插件 API 对象上挂载了提供给插件使用的上下文数据、工具函数和注册生命周期钩子的函数。"}),"\n",(0,r.jsxs)(n.p,{children:["关于生命周期钩子的完整介绍，请阅读 ",(0,r.jsx)(n.a,{href:"/api/plugin-hooks",children:"Plugin Hooks"})," 章节。"]}),"\n",(0,r.jsxs)(n.p,{children:["在使用 webpack-provider 或 rspack-provider 时，",(0,r.jsx)(n.code,{children:"BuilderPluginAPI"})," 的类型定义有一定不同，你可以根据插件的使用场景来引入对应的类型。"]}),"\n",(0,r.jsxs)(n.h3,{id:"适用于-webpack-provider-的插件",children:["适用于 webpack-provider 的插件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#适用于-webpack-provider-的插件",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["开发适用于 webpack-provider 的插件时，请从 ",(0,r.jsx)(n.code,{children:"@modern-js/builder-webpack-provider"})," 中引入 ",(0,r.jsx)(n.code,{children:"BuilderPluginAPI"}),"。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { BuilderPluginAPI } from '@modern-js/builder-webpack-provider';\n\nexport default (): BuilderPlugin<BuilderPluginAPI> => ({\n  name: 'builder-plugin-foo',\n\n  setup: api => {\n    api.modifyWebpackConfig(config => {\n      config.devtool = false;\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"适用于-rspack-provider-的插件",children:["适用于 rspack-provider 的插件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#适用于-rspack-provider-的插件",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["开发适用于 rspack-provider 的插件时，请从 ",(0,r.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"})," 中引入 ",(0,r.jsx)(n.code,{children:"BuilderPluginAPI"}),"。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { BuilderPluginAPI } from '@modern-js/builder-rspack-provider';\n\nexport default (): BuilderPlugin<BuilderPluginAPI> => ({\n  name: 'builder-plugin-foo',\n\n  setup: api => {\n    api.modifyRspackConfig(config => {\n      config.devtool = false;\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"同时适用于-webpack-provider-和-rspack-provider-的插件",children:["同时适用于 webpack-provider 和 rspack-provider 的插件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#同时适用于-webpack-provider-和-rspack-provider-的插件",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["想要开发同时适用于 webpack-provider 和 rspack-provider 的插件时，请从 ",(0,r.jsx)(n.code,{children:"@modern-js/builder-shared"})," 中引入 ",(0,r.jsx)(n.code,{children:"DefaultBuilderPlugin"}),"。"]}),"\n",(0,r.jsxs)(n.p,{children:["需要注意的是，开发 webpack 和 Rspack 同时支持的插件，意味着不能使用任何带有 webpack 或 Rspack 标识的 api，如 ",(0,r.jsx)(n.code,{children:"modifyWebpackConfig"})," 或 ",(0,r.jsx)(n.code,{children:"modifyRspackConfig"}),"。"]}),"\n",(0,r.jsxs)(n.p,{children:["可通过 ",(0,r.jsx)(n.a,{href:"/api/plugin-hooks#modifybundlerchain-experimental",children:"modifyBundlerChain"})," 修改同时适用于 webpack 和 Rspack 的配置。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { DefaultBuilderPlugin } from '@modern-js/builder-shared';\n\nexport default (): BuilderPlugin<DefaultBuilderPlugin> => ({\n  name: 'builder-plugin-foo',\n\n  setup: api => {\n    api.modifyBundlerChain(chain => {\n      chain.devtool(false);\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apicontext",children:["api.context",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apicontext",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"api.context"})," 是一个只读对象，提供一些上下文信息。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"api.context"})," 的内容与 ",(0,r.jsx)(n.code,{children:"builder.context"})," 完全一致，请参考 ",(0,r.jsx)(n.a,{href:"/api/builder-instance#builder-context",children:"builder.context"}),"。"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n  setup(api) {\n    console.log(api.context.distPath);\n  }\n);\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apigetbuilderconfig",children:["api.getBuilderConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apigetbuilderconfig",children:"#"})]}),"\n","\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n  setup(api) {\n    const config = api.getBuilderConfig();\n    console.log(config.html?.title);\n  }\n);\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apigetnormalizedconfig",children:["api.getNormalizedConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apigetnormalizedconfig",children:"#"})]}),"\n","\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n  setup(api) {\n    const config = api.getNormalizedConfig();\n    console.log(config.html.title);\n  }\n);\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apiispluginexists",children:["api.isPluginExists",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apiispluginexists",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    console.log(api.isPluginExists('builder-plugin-foo'));\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apigethtmlpaths",children:["api.getHTMLPaths",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apigethtmlpaths",children:"#"})]}),"\n","\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n  setup(api) {\n    api.modifyWebpackChain(() => {\n      const htmlPaths = api.getHTMLPaths();\n      console.log(htmlPaths); // { main: 'html/main/index.html' };\n    });\n  }\n);\n"})})]})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}}}]);