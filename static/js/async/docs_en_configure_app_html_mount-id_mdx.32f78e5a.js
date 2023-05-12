(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_mount-id_mdx"],{5890:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=d("9880"),s=d("23169");function r(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre",h3:"h3",a:"a",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"'root'"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["By default, the ",(0,t.jsx)(n.code,{children:"root"})," element is included in the HTML template for component mounting, and the element id can be modified through ",(0,t.jsx)(n.code,{children:"mountId"}),"."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="root"></div>\n</body>\n'})})})}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"id"})," to ",(0,t.jsx)(n.code,{children:"app"}),":"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    mountId: 'app',\n  },\n};\n"})})})}),"\n",(0,t.jsx)(n.p,{children:"After compilation:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="app"></div>\n</body>\n'})})})}),"\n",(0,t.jsxs)(n.h3,{id:"notes",children:["Notes",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,t.jsxs)(n.h4,{id:"update-relevant-code",children:["Update Relevant Code",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#update-relevant-code",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["After modifying ",(0,t.jsx)(n.code,{children:"mountId"}),", if there is logic in your code to obtain the ",(0,t.jsx)(n.code,{children:"root"})," root node, please update the corresponding value:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-diff",children:"- const domNode = document.getElementById('root');\n+ const domNode = document.getElementById('app');\n\nReactDOM.createRoot(domNode).render(<App />);\n"})})})}),"\n",(0,t.jsxs)(n.h4,{id:"custom-templates",children:["Custom Templates",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-templates",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you customized the HTML template, please make sure that the template contains ",(0,t.jsx)(n.code,{children:'<div id="<%= mountId %>"></div>'}),", otherwise the ",(0,t.jsx)(n.code,{children:"mountId"})," config will not take effect."]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}},65522:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return o},default:function(){return l}});var t=d("9880"),s=d("23169"),r=d.ir(d("5890")),i={sidebar_label:"mountId"},c="html.mountId",o=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"htmlmountid",children:["html.mountId",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlmountid",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlmountid",target:"_blank",rel:"noopener noreferrer",children:"html.mountId"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(r.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}}}]);