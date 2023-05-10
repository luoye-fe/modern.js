(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_advanced_custom-webpack-config_md"],{42381:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return s},default:function(){return r}});var c=i("9880"),o=i("23169"),a={},d="Custom webpack config",s=[{text:"Modify the webpack configuration object",depth:2,id:"modify-the-webpack-configuration-object"},{text:"Using webpack-chain",depth:2,id:"using-webpack-chain"},{text:"tools.webpackChain config",depth:3,id:"tools-webpackchain-config"},{text:"webpack-chain Basics",depth:2,id:"webpack-chain-basics"},{text:"How does webpack-chain locate",depth:3,id:"how-does-webpack-chain-locate"},{text:"webpack-chain id type",depth:3,id:"webpack-chain-id-type"},{text:"webpack-chain Demo",depth:2,id:"webpack-chain-demo"},{text:"Add/Modify/Delete loader",depth:3,id:"add/modify/delete-loader"},{text:"Add/Modify/Delete plugin",depth:3,id:"add/modify/delete-plugin"},{text:"Modify the config according to environment",depth:3,id:"modify-the-config-according-to-environment"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"custom-webpack-config",children:["Custom webpack config",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-webpack-config",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Builder supports directly modifying webpack configuration objects, and also supports deep customization of webpack configuration through webpack-chain."}),"\n",(0,c.jsxs)(n.h2,{id:"modify-the-webpack-configuration-object",children:["Modify the webpack configuration object",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-webpack-configuration-object",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["You can use ",(0,c.jsx)(n.a,{href:"/api/config-tools",children:"tools.webpack"})," to modify the webpack configuration object."]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"When to use"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["When you only need to modify a small amount of webpack configuration, you can use ",(0,c.jsx)(n.code,{children:"tools.webpack"}),". But if you need to modify the built-in webpack plugins or loaders of Builder, please use ",(0,c.jsx)(n.code,{children:"tools.webpackChain"})," to modify.\n"]})})]}),"\n",(0,c.jsxs)(n.h2,{id:"using-webpack-chain",children:["Using webpack-chain",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-webpack-chain",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"webpack-chain is a configuration modification tools that is different from modifying webpack configuration objects. Compared with modifying webpack configuration objects, webpack-chain not only supports chain calls, but also can modify built-in Rule or Plugin based on id."}),"\n",(0,c.jsxs)(n.h3,{id:"tools-webpackchain-config",children:["tools.webpackChain config",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-webpackchain-config",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Builder provides ",(0,c.jsx)(n.a,{href:"/api/config-tools",children:"tools.webpackChain"})," config to modify webpack-chain."]}),"\n",(0,c.jsxs)(n.p,{children:["The value of ",(0,c.jsx)(n.code,{children:"tools.webpackChain"})," is ",(0,c.jsx)(n.code,{children:"Function"})," type, which receives two parameters:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["The first parameter is the ",(0,c.jsx)(n.code,{children:"webpack-chain"})," instance, you can use this instance to modify the default webpack config."]}),"\n",(0,c.jsxs)(n.li,{children:["The second parameter is a ",(0,c.jsx)(n.a,{href:"/en/api/config-tools",children:"utils collection"}),", including ",(0,c.jsx)(n.code,{children:"env"}),", ",(0,c.jsx)(n.code,{children:"isProd"}),", ",(0,c.jsx)(n.code,{children:"CHAIN_ID"}),", etc."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Here's a basic example:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpackChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h2,{id:"webpack-chain-basics",children:["webpack-chain Basics",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-basics",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Before you start using webpack-chain to modify your webpack configuration, it is recommended that you understand some basics."}),"\n",(0,c.jsxs)(n.h3,{id:"how-does-webpack-chain-locate",children:["How does webpack-chain locate",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-does-webpack-chain-locate",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Simply put, webpack-chain requires users to set a unique id for each Rule, Loader, Plugin, and Minimizer. Through these ids, you can easily find the desired object from deeply nested webpack configuration object."}),"\n",(0,c.jsxs)(n.p,{children:["Builder exports all internally defined ids through the ",(0,c.jsx)(n.code,{children:"CHAIN_ID"})," object, so you can use these exported ids to locate the Loader or Plugin you want to modify, without having to search through complex traversal in the webpack configuration object."]}),"\n",(0,c.jsxs)(n.p,{children:["For example, to delete the built-in HTML plugin via ",(0,c.jsx)(n.code,{children:"CHAIN_ID.PLUGIN.HTML"}),":"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpackChain: (chain, { webpack, CHAIN_ID }) => {\n      //\n      chain.plugins.delete(CHAIN_ID.PLUGIN.HTML);\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"webpack-chain-id-type",children:["webpack-chain id type",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-id-type",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"CHAIN_ID"})," object contains some ids, which have different meanings:"]}),"\n",(0,c.jsxs)(n.table,{children:["\n",(0,c.jsxs)(n.thead,{children:["\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.th,{children:"CHAIN_ID field"}),"\n",(0,c.jsx)(n.th,{children:"Corresponding configuration"}),"\n",(0,c.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.tbody,{children:["\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"CHAIN_ID.PLUGIN"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"plugins[i]"})}),"\n",(0,c.jsx)(n.td,{children:"corresponds to a plugin in the webpack configuration"}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"CHAIN_ID.RULE"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"module.rules[i]"})}),"\n",(0,c.jsx)(n.td,{children:"corresponds to a Rule in the webpack configuration"}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"CHAIN_ID.USE"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"module.rules[i].loader"})}),"\n",(0,c.jsx)(n.td,{children:"corresponds to a Loader in the webpack configuration"}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"CHAIN_ID.MINIMIZER"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"optimization.minimizer"})}),"\n",(0,c.jsx)(n.td,{children:"corresponds to a compression tool in webpack configuration"}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"CHAIN_ID.RESOLVE_PLUGIN"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"resolve.plugins[i]"})}),"\n",(0,c.jsx)(n.td,{children:"corresponds to a Resolve plugin in the webpack configuration"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"webpack-chain-demo",children:["webpack-chain Demo",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-demo",children:"#"})]}),"\n",(0,c.jsxs)(n.h3,{id:"add/modify/delete-loader",children:["Add/Modify/Delete loader",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add/modify/delete-loader",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { CHAIN_ID }) => {\n      // Add loader\n      chain.module\n        .rule('md')\n        .test(/\\.md$/)\n        .use('md-loader')\n        .loader('md-loader');\n\n      // Modify loader\n      chain.module\n        .rule(CHAIN_ID.RULE.JS)\n        .use(CHAIN_ID.USE.BABEL)\n        .tap(options => {\n          options.plugins.push('babel-plugin-xxx');\n          return options;\n        });\n\n      // Delete loader\n      chain.module.rule(CHAIN_ID.RULE.JS).uses.delete(CHAIN_ID.USE.BABEL);\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"add/modify/delete-plugin",children:["Add/Modify/Delete plugin",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add/modify/delete-plugin",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { webpack, CHAIN_ID }) => {\n      // Add plugin\n      chain.plugin('custom-define').use(webpack.DefinePlugin, [\n        {\n          'process.env': {\n            NODE_ENV: JSON.stringify(process.env.NODE_ENV),\n          },\n        },\n      ]);\n\n      // Modify plugin\n      chain.plugin(CHAIN_ID.PLUGIN.HMR).tap(options => {\n        options[0].fullBuildTimeout = 200;\n        return options;\n      });\n\n      // Delete plugin\n      chain.plugins.delete(CHAIN_ID.PLUGIN.HMR);\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"modify-the-config-according-to-environment",children:["Modify the config according to environment",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-config-according-to-environment",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"In the tool collection, you can get the flag of various environments, such as development/production/test environment, SSR build, and Web Worker build, so as to modify the config in different environments."}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { env, isProd, target, isServer, isWebWorker }) => {\n      if (utils.env === 'development' || utils.env === 'test') {\n        // ...\n      }\n      if (utils.isProd) {\n        // ...\n      }\n      if (utils.target === 'node') {\n        // ...\n      }\n      if (utils.isServer) {\n        // ...\n      }\n      if (utils.isWebWorker) {\n        // ...\n      }\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["The above are some common config examples. For the complete webpack-chain API, please refer to ",(0,c.jsx)(n.a,{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"webpack-chain documentation"}),"."]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(t,e)})):t(e)}}}]);