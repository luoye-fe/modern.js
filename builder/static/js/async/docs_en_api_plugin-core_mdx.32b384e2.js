(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_api_plugin-core_mdx"],{92259:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return t},title:function(){return c},toc:function(){return p},default:function(){return u}});var r=i("9880"),l=i("23169"),d=i.ir(i("96771")),s=i.ir(i("84975")),o=i.ir(i("17422")),a=i.ir(i("34069")),t={extractApiHeaders:[2]},c="Plugin Core",p=[{text:"BuilderPlugin",depth:2,id:"builderplugin"},{text:"BuilderPluginAPI",depth:2,id:"builderpluginapi"},{text:"Plugin for webpack-provider",depth:3,id:"plugin-for-webpack-provider"},{text:"Plugins for rspack-provider",depth:3,id:"plugins-for-rspack-provider"},{text:"Plugins for both webpack-provider and rspack-provider",depth:3,id:"plugins-for-both-webpack-provider-and-rspack-provider"},{text:"api.context",depth:2,id:"apicontext"},{text:"api.getBuilderConfig",depth:2,id:"apigetbuilderconfig"},{text:"api.getNormalizedConfig",depth:2,id:"apigetnormalizedconfig"},{text:"api.isPluginExists",depth:2,id:"apiispluginexists"},{text:"api.getHTMLPaths",depth:2,id:"apigethtmlpaths"}];function h(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3",strong:"strong"},(0,l.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"plugin-core",children:["Plugin Core",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-core",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"This section describes the core plugin types and APIs."}),"\n",(0,r.jsxs)(n.h2,{id:"builderplugin",children:["BuilderPlugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderplugin",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The type of the plugin object. The plugin object contains the following properties:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"}),": The name of the plugin, a unique identifier."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"setup"}),": The setup function of the plugin, which can be an asynchronous function. This function will only be executed once when the plugin is initialized."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pre"}),"：Specify which plugins precede the current plugin, and the current plugin will be adjusted to execute after these plugins."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"post"}),"：Specify which post-plugins are available for the current plugin, and the current plugin will be adjusted to execute before these plugins."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export type BuilderPlugin<API = BuilderPluginAPI> = {\n  name: string;\n  pre?: string[];\n  post?: string[];\n  setup: (api: API) => Promise<void> | void;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can import this type from ",(0,r.jsx)(n.code,{children:"@modern-js/builder"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\n\nexport default (): BuilderPlugin => ({\n  name: 'builder-plugin-foo',\n\n  pre: ['builder-plugin-bar'],\n\n  setup: api => {\n    api.onAfterBuild(() => {\n      console.log('after build!');\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"builderpluginapi",children:["BuilderPluginAPI",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderpluginapi",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The type of plugin API. The plugin API provides the context info, utility functions and lifecycle hooks."}),"\n",(0,r.jsxs)(n.p,{children:["For a complete introduction to lifecycle hooks, please read the ",(0,r.jsx)(n.a,{href:"/api/plugin-hooks",children:"Plugin Hooks"})," chapter."]}),"\n",(0,r.jsxs)(n.p,{children:["When using webpack-provider or rspack-provider, the type definition of ",(0,r.jsx)(n.code,{children:"BuilderPluginAPI"})," is somewhat different, and you can introduce the corresponding type according to the usage scenario of the plugin."]}),"\n",(0,r.jsxs)(n.h3,{id:"plugin-for-webpack-provider",children:["Plugin for webpack-provider",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-for-webpack-provider",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When developing plugins for webpack-provider, please import ",(0,r.jsx)(n.code,{children:"BuilderPluginAPI"})," from ",(0,r.jsx)(n.code,{children:"@modern-js/builder-webpack-provider"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { BuilderPluginAPI } from '@modern-js/builder-webpack-provider';\n\nexport default (): BuilderPlugin<BuilderPluginAPI> => ({\n  name: 'builder-plugin-foo',\n\n  setup: api => {\n    api.modifyWebpackConfig(config => {\n      config.devtool = false;\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"plugins-for-rspack-provider",children:["Plugins for rspack-provider",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugins-for-rspack-provider",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When developing plugins for rspack-provider, please import ",(0,r.jsx)(n.code,{children:"BuilderPluginAPI"})," from ",(0,r.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { BuilderPluginAPI } from '@modern-js/builder-rspack-provider';\n\nexport default (): BuilderPlugin<BuilderPluginAPI> => ({\n  name: 'builder-plugin-foo',\n\n  setup: api => {\n    api.modifyRspackConfig(config => {\n      config.devtool = false;\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"plugins-for-both-webpack-provider-and-rspack-provider",children:["Plugins for both webpack-provider and rspack-provider",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugins-for-both-webpack-provider-and-rspack-provider",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When developing plugins for both webpack-provider and rspack-provider, please import ",(0,r.jsx)(n.code,{children:"DefaultBuilderPlugin"})," from ",(0,r.jsx)(n.code,{children:"@modern-js/builder-shared"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that developing plugins that can support both webpack and Rspack at the same time means that you cannot use any APIs with webpack / Rspack identifiers, such as ",(0,r.jsx)(n.code,{children:"modifyWebpackConfig"})," or ",(0,r.jsx)(n.code,{children:"modifyRspackConfig"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.a,{href:"/api/plugin-hooks#modifybundlerchain-experimental",children:"modifyBundlerChain"})," to modify the configuration that applies to both webpack and Rspack."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { DefaultBuilderPlugin } from '@modern-js/builder-shared';\n\nexport default (): BuilderPlugin<DefaultBuilderPlugin> => ({\n  name: 'builder-plugin-foo',\n\n  setup: api => {\n    api.modifyBundlerChain(chain => {\n      chain.devtool(false);\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apicontext",children:["api.context",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apicontext",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"api.context"})," is a read-only object that provides some context information."]}),"\n",(0,r.jsxs)(n.p,{children:["The content of ",(0,r.jsx)(n.code,{children:"api.context"})," is exactly the same as ",(0,r.jsx)(n.code,{children:"builder.context"}),", please refer to ",(0,r.jsx)(n.a,{href:"/api/builder-instance#builder-context",children:"builder.context"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n   setup(api) {\n     console.log(api.context.distPath);\n   }\n);\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apigetbuilderconfig",children:["api.getBuilderConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apigetbuilderconfig",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n   setup(api) {\n     const config = api.getBuilderConfig();\n     console.log(config.html?.title);\n   }\n);\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apigetnormalizedconfig",children:["api.getNormalizedConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apigetnormalizedconfig",children:"#"})]}),"\n","\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n   setup(api) {\n     const config = api.getNormalizedConfig();\n     console.log(config.html.title);\n   }\n);\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apiispluginexists",children:["api.isPluginExists",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apiispluginexists",children:"#"})]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    console.log(api.isPluginExists('builder-plugin-foo'));\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apigethtmlpaths",children:["api.getHTMLPaths",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apigethtmlpaths",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n   setup(api) {\n     api.modifyWebpackChain(() => {\n       const htmlPaths = api.getHTMLPaths();\n       console.log(htmlPaths); // { main: 'html/main/index.html' };\n     });\n   }\n);\n"})})]})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}}}]);