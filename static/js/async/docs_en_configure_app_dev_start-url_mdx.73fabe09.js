(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_dev_start-url_mdx"],{17095:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var t=r("9880"),s=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean | string | string[] | undefined"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dev.startUrl"})," is used to set the URL of the page that automatically opens in the browser when Dev Server starts."]}),"\n",(0,t.jsx)(n.p,{children:"By default, no page will be opened."}),"\n",(0,t.jsx)(n.p,{children:"You can set it to the following values:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    // Open the project's default preview page, equivalent to `http://localhost:<port>`\n    startUrl: true,\n    // Open the specified page\n    startUrl: 'http://localhost:8080',\n    // Open multiple pages\n    startUrl: ['http://localhost:8080', 'http://localhost:8080/about'],\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"port-placeholder",children:["Port placeholder",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#port-placeholder",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Since the port number may change, you can use the ",(0,t.jsx)(n.code,{children:"<port>"})," placeholder to refer to the current port number, and Builder will automatically replace the placeholder with the actual listening port number."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    startUrl: 'http://localhost:<port>/home',\n  },\n};\n"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},25227:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return o},toc:function(){return i},default:function(){return c}});var t=r("9880"),s=r("23169"),l=r.ir(r("17095")),a={sidebar_label:"startUrl"},o="dev.startUrl",i=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"devstarturl",children:["dev.startUrl",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devstarturl",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-dev.html#devstarturl",target:"_blank",rel:"noopener noreferrer",children:"dev.startUrl"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(l.default,{})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);