(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_output_enable-inline-scripts_mdx"],{24396:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var t=s("12151"),i=s("21447");function r(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",h3:"h3",button:"button",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bundler:"})," ",(0,t.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to inline output scripts files (.js files) into HTML with ",(0,t.jsx)(n.code,{children:"<script>"})," tags in production mode."]}),"\n",(0,t.jsx)(n.p,{children:"Note that, with this option on, the scripts files will no longer be written in dist directory, they will only exist inside the HTML file instead."}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["When using convention-based routing, you need to set ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/output/splitRouteChunks.html",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(n.code,{children:"output.splitRouteChunks"})})," to false if this option is turned on.\n"]})]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"By default, we have following output files:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\ndist/static/js/main.js\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["After turn on the ",(0,t.jsx)(n.code,{children:"output.enableInlineScripts"})," option:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineScripts: true,\n  },\n};\n"})})]})}),"\n",(0,t.jsx)(n.p,{children:"The output files will become:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["And ",(0,t.jsx)(n.code,{children:"dist/static/js/main.js"})," will be inlined in ",(0,t.jsx)(n.code,{children:"index.html"}),":"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-html",children:"<html>\n  <body>\n    <script>\n      // content of dist/static/js/main.js\n    </script>\n  </body>\n</html>\n"})})]})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}},21507:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return l},toc:function(){return a},default:function(){return o}});var t=s("12151"),i=s("21447"),r=s.ir(s("24396")),c={sidebar_label:"enableInlineScripts"},l="output.enableInlineScripts",a=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"output.enableinlinescripts",children:["output.enableInlineScripts",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output.enableinlinescripts",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputenableinlinescripts",target:"_blank",rel:"noopener noreferrer",children:"output.enableInlineScripts"}),".\n"]})]}),"\n","\n",(0,t.jsx)(r.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);