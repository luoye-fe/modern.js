(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_bff_enable-handle-web_mdx"],{15843:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return d},default:function(){return c}});var r=s("9880"),t=s("23169"),i={title:"enableHandleWeb"},a="bff.enableHandleWeb",d=[];function l(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"bffenablehandleweb",children:["bff.enableHandleWeb",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bffenablehandleweb",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive caution",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:['First you need to enable the "BFF" function using ',(0,r.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new"})," command.\n"]})})]}),"\n",(0,r.jsx)(n.p,{children:"By default, the BFF service can only handle requests from the BFF API."}),"\n",(0,r.jsxs)(n.p,{children:["When this value is set to ",(0,r.jsx)(n.code,{children:"true"}),", page request traffic also goes through the BFF, and the logic built into Modern.js for page rendering defaults to running as the last middleware for the BFF service."]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  bff: {\n    enableHandleWeb: true,\n  },\n});\n"})})})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);