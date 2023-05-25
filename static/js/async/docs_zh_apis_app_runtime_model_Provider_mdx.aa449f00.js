(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_model_Provider_mdx"],{1416:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return t},title:function(){return c},toc:function(){return a},default:function(){return h}});var i=n("9880"),d=n("23169"),s=n.ir(n("83857")),t={sidebar_position:8,title:"Provider"},c="Provider",a=[{text:"函数签名",depth:2,id:"函数签名"},{text:"参数",depth:3,id:"参数"},{text:"示例",depth:2,id:"示例"}];function o(e){var r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"provider",children:["Provider",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#provider",children:"#"})]}),"\n","\n",(0,i.jsx)(s.default,{}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Provider"})," 是一个组件，它将 Reduck 的 Store 注入到应用的组件树中，使组件树内部的组件可以访问 Model。一般情况下，",(0,i.jsx)(r.code,{children:"Provider"})," 会定义在组件树的最顶层。"]}),"\n",(0,i.jsxs)(r.h2,{id:"函数签名",children:["函数签名",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"interface ProviderProps {\n  store?: ReduckStore;\n  config?: AppConfig;\n}\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"参数",children:["参数",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["store：",(0,i.jsx)(r.a,{href:"/zh/apis/app/runtime/model/create-store",children:(0,i.jsx)(r.code,{children:"createStore"})})," 创建的 Store 对象。"]}),"\n",(0,i.jsxs)(r.li,{children:["config：创建 Reduck Store 的配置，同 ",(0,i.jsx)(r.a,{href:"/zh/apis/app/runtime/model/create-app",children:(0,i.jsx)(r.code,{children:"createApp"})})," 的 ",(0,i.jsx)(r.code,{children:"config"})," 参数。"]}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"示例",children:["示例",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",meta:'title="应用入口文件"',children:"ReactDOM.render(\n  <Provider>\n    <App />\n  </Provider>,\n  document.getElementById('root'),\n);\n"})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);