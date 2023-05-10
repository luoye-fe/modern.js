(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_bundler-chain_mdx"],{63682:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s=r("9880"),d=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",pre:"pre",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Function | undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can modify the webpack and Rspack configuration by configuring ",(0,s.jsx)(n.code,{children:"tools.bundlerChain"})," which is type of ",(0,s.jsx)(n.code,{children:"Function"}),". The function receives two parameters, the first is the original bundler chain object, and the second is an object containing some utils."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"What is BundlerChain"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,s.jsx)(n.p,{children:"Bundler chain is a subset of webpack chain, which contains part of the webpack chain API that you can use to modify both webpack and Rspack configuration."}),"\n",(0,s.jsxs)(n.p,{children:["Configurations modified via bundler chain will work on both webpack and Rspack builds. Note that the bundler chain only supports modifying the configuration of the non-differentiated parts of webpack and Rspack. For example, modifying the devtool configuration item (webpack and Rspack have the same devtool property value type), or adding an ",(0,s.jsx)(n.a,{href:"https://www.rspack.dev/guide/plugin-compat.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack-compatible"})," webpack plugin."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tools.bundlerChain"})," is executed earlier than tools.webpackChain / tools.webpack / tools.rspack and thus will be overridden by changes in others."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"utils",children:["Utils",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#utils",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"env",children:["env",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"env"})," parameter can be used to determine whether the current environment is development, production or test. For example:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.h4,{id:"isprod",children:["isProd",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"isProd"})," parameter can be used to determine whether the current environment is production. For example:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isProd }) => {\n      if (isProd) {\n        chain.devtool('source-map');\n      }\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.h4,{id:"target",children:["target",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"'web' | 'node' | 'modern-web' | 'web-worker'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"target"})," parameter can be used to determine the current environment. For example:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.h4,{id:"isserver",children:["isServer",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,s.jsx)(n.code,{children:"node"}),", equivalent to ",(0,s.jsx)(n.code,{children:"target === 'node'"}),"."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.h4,{id:"iswebworker",children:["isWebWorker",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,s.jsx)(n.code,{children:"web-worker"}),", equivalent to ",(0,s.jsx)(n.code,{children:"target === 'web-worker'"}),"."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.h3,{id:"htmlplugin",children:["HtmlPlugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlplugin",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"typeof import('html-webpack-plugin') | import('@rspack/plugin-html') "})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The HtmlPlugin instance in webpack or Rspack:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { HtmlPlugin }) => {\n      console.log(HtmlPlugin);\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.h4,{id:"chain_id",children:["CHAIN_ID",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Some common Chain IDs are predefined in the Builder, and you can use these IDs to locate the built-in Rule or Plugin."}),"\n",(0,s.jsxs)(n.h5,{id:"chain_idrule",children:["CHAIN_ID.RULE",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idrule",children:"#"})]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.MJS"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"mjs"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.CSS"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"css"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.LESS"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"less"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.SASS"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"sass"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.TOML"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"toml"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.YAML"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"yaml"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"chain_idone_of",children:["CHAIN_ID.ONE_OF",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idone_of",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ONE_OF.XXX"})," can match a certain type of rule in the rule array."]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ONE_OF.SVG"})}),"\n",(0,s.jsx)(n.td,{children:"Rules for SVG, automatic choice between data URI and separate file"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ONE_OF.SVG_URL"})}),"\n",(0,s.jsx)(n.td,{children:"Rules for SVG, output as a separate file"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ONE_OF.SVG_INLINE"})}),"\n",(0,s.jsx)(n.td,{children:"Rules for SVG, inlined into bundles as data URIs"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ONE_OF.SVG_ASSETS"})}),"\n",(0,s.jsx)(n.td,{children:"Rules for SVG, automatic choice between data URI and separate file"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"chain_iduse",children:["CHAIN_ID.USE",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_iduse",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"USE.XXX"})," can match a certain loader."]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.LESS"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"less-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.SASS"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"sass-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.TOML"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"toml-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.YAML"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"yaml-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.SVGR"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"@svgr/webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.POSTCSS"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"postcss-loader"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"chain_idplugin",children:["CHAIN_ID.PLUGIN",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idplugin",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PLUGIN.XXX"})," can match a certain webpack plugin."]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.HTML"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"HtmlPlugin"}),", you need to splice the entry name when using: ",(0,s.jsx)(n.code,{children:"${PLUGIN.HTML}-${entryName}"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.APP_ICON"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"AppIconPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.INLINE_HTML"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"InlineChunkHtmlPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.BUNDLE_ANALYZER"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"WebpackBundleAnalyzer"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.BOTTOM_TEMPLATE"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"BottomTemplatePlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.AUTO_SET_ROOT_SIZE"})}),"\n",(0,s.jsx)(n.td,{children:"correspond to automatically set root font size plugin in Builder"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"examples",children:["Examples",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#examples",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The usage of BundlerChain can reference: ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/advanced/custom-webpack-config.html#webpack-chain-basics",target:"_blank",rel:"noopener noreferrer",children:"WebpackChain Examples"}),"."]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},56637:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return l},toc:function(){return h},default:function(){return a}});var s=r("9880"),d=r("23169"),i=r.ir(r("63682")),c={sidebar_label:"bundlerChain"},l="tools.bundlerChain",h=[];function t(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolsbundlerchain",children:["tools.bundlerChain",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsbundlerchain",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolsbundlerchain",target:"_blank",rel:"noopener noreferrer",children:"tools.bundlerChain"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);