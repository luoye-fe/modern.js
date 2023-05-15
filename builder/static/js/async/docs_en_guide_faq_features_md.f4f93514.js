(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_faq_features_md"],{35865:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var o in n)Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return c},default:function(){return d}});var r=o("9880"),t=o("23169"),a={},i="Features",c=[{text:"How to import UI Component library on demand?",depth:2,id:"how-to-import-ui-component-library-on-demand?"},{text:"How to run ESLint during compilation?",depth:2,id:"how-to-run-eslint-during-compilation?"},{text:"How to configure CDN path for static assets?",depth:2,id:"how-to-configure-cdn-path-for-static-assets?"},{text:"How to clear the webpack cache?",depth:2,id:"how-to-clear-the-webpack-cache?"},{text:"How to remove console after production build?",depth:2,id:"how-to-remove-console-after-production-build?"}];function s(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",pre:"pre",code:"code",blockquote:"blockquote"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"features",children:["Features",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"how-to-import-ui-component-library-on-demand?",children:["How to import UI Component library on demand?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-import-ui-component-library-on-demand?",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you need to configure the on-demand import of the component library, you can configure it through ",(0,r.jsx)(n.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"}),", which is equivalent to ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'xxx-components',\n        libraryDirectory: 'es',\n        style: true,\n      },\n    ],\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"how-to-run-eslint-during-compilation?",children:["How to run ESLint during compilation?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-run-eslint-during-compilation?",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["For the sake of compilation performance, Builder will not perform ESLint verification during the compilation process by default. If you need this function, you can manually install and register the ",(0,r.jsx)(n.a,{href:"https://github.com/webpack",target:"_blank",rel:"noopener noreferrer",children:"eslint-webpack-plugin"})," in the community -contrib/eslint-webpack-plugin)."]}),"\n",(0,r.jsx)(n.p,{children:"The sample code to register the plugin is as follows:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import ESLintPlugin from 'eslint-webpack-plugin';\n\nexport default {\n  tools: {\n    webpackChain(chain) {\n      chain.plugin('eslint-plugin').use(ESLintPlugin, [\n        {\n          extensions: ['.js', '.ts', '.jsx', 'tsx', '.mjs'],\n        },\n      ]);\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["For more detailed usage, please refer to the ",(0,r.jsx)(n.a,{href:"https://github.com/webpack-contrib/eslint-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"eslint-webpack-plugin"})," documentation."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"how-to-configure-cdn-path-for-static-assets?",children:["How to configure CDN path for static assets?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-configure-cdn-path-for-static-assets?",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you need to upload static assets such as JS and CSS to CDN for use, you can set the URL prefix of static assets through the ",(0,r.jsx)(n.a,{href:"/api/config-output#outputassetprefix",children:"output.assetPrefix"})," configuration."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: 'https://cdn.example.com/assets/',\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"how-to-clear-the-webpack-cache?",children:["How to clear the webpack cache?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-clear-the-webpack-cache?",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["By default, Builder's webpack cache is generated in the ",(0,r.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," directory."]}),"\n",(0,r.jsx)(n.p,{children:"If you need to clear the local webpack cache, you can execute the following command:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm -rf ./node_modules/.cache\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"how-to-remove-console-after-production-build?",children:["How to remove console after production build?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-remove-console-after-production-build?",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When the production environment is built, we can remove the ",(0,r.jsx)(n.code,{children:"console"})," from the code, so as to avoid the log of the development environment being output to the production environment."]}),"\n",(0,r.jsxs)(n.p,{children:["Builder provides a configuration item to remove console by default, please see ",(0,r.jsx)(n.a,{href:"/en/api/config-performance#performanceremoveconsole",children:"performance.removeConsole"}),"."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}}}]);