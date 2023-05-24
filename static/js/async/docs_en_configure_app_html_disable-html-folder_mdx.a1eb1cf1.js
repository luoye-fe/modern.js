(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_disable-html-folder_mdx"],{86714:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=r("9880"),s=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",blockquote:"blockquote"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Remove the folder of the HTML files. When this option is enabled, the generated HTML file path will change from ",(0,t.jsx)(n.code,{children:"[name]/index.html"})," to ",(0,t.jsx)(n.code,{children:"[name].html"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, the structure of HTML files in the ",(0,t.jsx)(n.code,{children:"dist"})," directory is:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"/dist\n└── html\n    └── main\n        └── index.html\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Enable the ",(0,t.jsx)(n.code,{children:"html.disableHtmlFolder"})," config:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    disableHtmlFolder: true,\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"After recompiling, the directory structure of the HTML files in dist is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"/dist\n└── html\n    └── main.html\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If you want to set the path of the HTML files, use the ",(0,t.jsx)(n.code,{children:"output.distPath.html"})," config."]}),"\n"]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},6653:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return d},toc:function(){return o},default:function(){return a}});var t=r("9880"),s=r("23169"),l=r.ir(r("86714")),i={sidebar_label:"disableHtmlFolder"},d="html.disableHtmlFolder",o=[];function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"htmldisablehtmlfolder",children:["html.disableHtmlFolder",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmldisablehtmlfolder",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmldisablehtmlfolder",target:"_blank",rel:"noopener noreferrer",children:"html.disableHtmlFolder"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(l.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);