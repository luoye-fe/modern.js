(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_model_use-out-of-modernjs_mdx"],{3770:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return i},toc:function(){return d},default:function(){return a}});var o=r("9880"),s=r("23169"),t={sidebar_position:12,title:"Using Reduck Separately"},i="Using Reduck Separately",d=[];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ol:"ol",li:"li",code:"code",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"using-reduck-separately",children:["Using Reduck Separately",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-reduck-separately",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"When integrating Reduck separately from Modern.js, the following modifications need to be made:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Install the Reduck related packages"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Install the Reduck package in the project: ",(0,o.jsx)(n.code,{children:"@modern-js-reduck/react"}),"."]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Import package names for API"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["When used in Modern.js, the package name for exporting Reduck API is: ",(0,o.jsx)(n.code,{children:"@modern-js/runtime/model"}),". When using Reduck separately, the package name for exporting is: ",(0,o.jsx)(n.code,{children:"@modern-js-reduck/react"}),"."]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Wrap the ",(0,o.jsx)(n.code,{children:"Provider"})," component"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Modern.js automatically wraps the ",(0,o.jsx)(n.a,{href:"/apis/app/runtime/model/Provider",children:(0,o.jsx)(n.code,{children:"Provider"})})," component used to inject the Reduck global Store on the entry component of the application. When using Reduck separately, this needs to be done manually."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// Root Component\nconst Root = () => {\n  return (\n    <Provider>\n      {/* Entry App */}\n      <App />\n    </Provider>\n  );\n};\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Feature configuration"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["When used in Modern.js, Reduck features can be configured through ",(0,o.jsx)(n.a,{href:"/configure/app/runtime/state",children:(0,o.jsx)(n.code,{children:"runtime.state"})}),". When used separately, configuration needs to be done through the ",(0,o.jsx)(n.code,{children:"config"})," or ",(0,o.jsx)(n.code,{children:"store"})," parameter of ",(0,o.jsx)(n.a,{href:"/apis/app/runtime/model/Provider",children:(0,o.jsx)(n.code,{children:"Provider"})}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const Root = () => {\n  return (\n    {/* Close Redux DevTools */}\n    <Provider config={{ devTools: false }}>\n      <App />\n    </Provider>\n  )\n}\n"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}]);