(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_disable-source-map_mdx"],{60732:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s=r("9880"),i=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type DisableSourceMap =\n  | boolean\n  | {\n      js?: boolean;\n      css?: boolean;\n    };\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const defaultDisableSourceMap = {\n  js: false,\n  css: process.env.NODE_ENV === 'production',\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Whether to disable Source Map generation."}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"What is a Source Map"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"Source Map is an information file that saves the source code mapping relationship. It records each location of the compiled code and the corresponding pre-compilation location. With Source Map, you can directly view the source code when debugging the compiled code."})})]}),"\n",(0,s.jsx)(n.p,{children:"By default, Builder's Source Map generation rules are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In development build, SourceMap of JS files and CSS files will be generated, which is convenient for debugging."}),"\n",(0,s.jsx)(n.li,{children:"In production build, the Source Map of JS files will be generated for debugging and troubleshooting online problems; the Source Map of CSS files will not be generated."}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"When using Rspack as the bundler, disable css sourcemap alone is not currently supported."})})]}),"\n",(0,s.jsx)(n.p,{children:"If the project does not need Source Map, you can turned off it to speed up the compile speed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: true,\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you want to enable Source Map in development and disable it in the production, you can set to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: process.env.NODE_ENV === 'production',\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you need to individually control the Source Map of JS files or CSS files, you can refer to the following settings:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: {\n      js: false,\n      css: true,\n    },\n  },\n};\n"})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},32389:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return c},toc:function(){return a},default:function(){return l}});var s=r("9880"),i=r("23169"),o=r.ir(r("60732")),t={sidebar_label:"disableSourceMap"},c="output.disableSourceMap",a=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"outputdisablesourcemap",children:["output.disableSourceMap",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisablesourcemap",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdisablesourcemap",target:"_blank",rel:"noopener noreferrer",children:"output.disableSourceMap"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(o.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);