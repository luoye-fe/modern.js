(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_model_Provider_mdx"],{72708:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},title:function(){return c},toc:function(){return s},default:function(){return h}});var t=r("9880"),i=r("23169"),a=r.ir(r("31501")),o={sidebar_position:8,title:"Provider"},c="Provider",s=[{text:"Function Signature",depth:2,id:"function-signature"},{text:"Input",depth:3,id:"input"},{text:"Example",depth:2,id:"example"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"provider",children:["Provider",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#provider",children:"#"})]}),"\n","\n",(0,t.jsx)(a.default,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Provider"})," is a component that injects Reduck's Store into the application's component tree, making the Model accessible to components inside the component tree. Normally, ",(0,t.jsx)(n.code,{children:"Provider"})," is defined at the top level of the component tree."]}),"\n",(0,t.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ProviderProps {\n  store?: ReduckStore;\n  config?: AppConfig;\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"input",children:["Input",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["store: the Store object created by ",(0,t.jsx)(n.a,{href:"/en/apis/app/runtime/model/create-store",children:(0,t.jsx)(n.code,{children:"createStore"})}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["config: this config to create Reduck Store, same as ",(0,t.jsx)(n.code,{children:"config"})," param in ",(0,t.jsx)(n.a,{href:"/en/apis/app/runtime/model/create-app",children:(0,t.jsx)(n.code,{children:"createApp"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="App entry file"',children:"ReactDOM.render(\n  <Provider>\n    <App />\n  </Provider>,\n  document.getElementById('root'),\n);\n"})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);