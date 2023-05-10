(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_enable-async-entry_mdx"],{1751:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return c},default:function(){return t}});var r=s("9880"),o=s("23169"),a={sidebar_label:"enableAsyncEntry"},d="source.enableAsyncEntry",c=[{text:"Background knowledge",depth:2,id:"background-knowledge"},{text:"Example",depth:2,id:"example"}];function i(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",div:"div",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourceenableasyncentry",children:["source.enableAsyncEntry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceenableasyncentry",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This option is used in the webpack Module Federation scenario."}),"\n",(0,r.jsx)(n.p,{children:"When this option is turned on, the Modern.js wraps the automatically generated asynchronous boundary via Dynamic Import, allowing the page code to consume remote modules generated by the module federation."}),"\n",(0,r.jsxs)(n.h2,{id:"background-knowledge",children:["Background knowledge",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#background-knowledge",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you don't know webpack module federation, please read the official ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/concepts/module-federation",target:"_blank",rel:"noopener noreferrer",children:"Module Federation documentation"})," first."]}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"First, turn this option on in the configuration file:"}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    enableAsyncEntry: true,\n  },\n});\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Then execute the ",(0,r.jsx)(n.code,{children:"dev"})," or ",(0,r.jsx)(n.code,{children:"build"})," command, and you can see Modern.js automatically generated file becomes the following structure:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"node_modules\n  └─ .modern-js\n     └─ main\n        ├─ bootstrap.jsx  #  real entry code\n        ├─ index.js      # asynchronous entry file\n        └─ index.html\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"index.js"})," reads as follows:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import('./bootstrap.jsx');\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"At this point, you can consume any remote modules in the current page."}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["Modern.js the ModuleFederationPlugin of webpack is not encapsulated, please configure the ModuleFederationPlugin yourself through ",(0,r.jsx)(n.a,{href:"/configure/app/tools/webpack-chain",children:"tools.webpack Chain"}),"."]}),"\n"]})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}}}]);