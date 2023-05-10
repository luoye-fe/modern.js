(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_runtime_state_mdx"],{86824:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return t},toc:function(){return l},default:function(){return h}});var r=s("9880"),i=s("23169"),d={sidebar_label:"state"},t="runtime.state",l=[{text:"models",depth:2,id:"models"},{text:"initialState",depth:2,id:"initialstate"},{text:"immer",depth:2,id:"immer"},{text:"effects",depth:2,id:"effects"},{text:"autoActions",depth:2,id:"autoactions"},{text:"devtools",depth:2,id:"devtools"}];function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"runtimestate",children:["runtime.state",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimestate",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean | object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["开启 ",(0,r.jsx)(n.code,{children:"state"})," 后就可以使用 ",(0,r.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"Model"})," 来做状态管理。"]}),"\n",(0,r.jsx)(n.p,{children:"具体配置项如下："}),"\n",(0,r.jsxs)(n.h2,{id:"models",children:["models",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#models",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Array<Model>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"注册提前挂载的 model 对象，这些 model 会在 Reduck store 创建完成后立即执行挂载。一般使用无需提前挂载。"}),"\n",(0,r.jsxs)(n.h2,{id:"initialstate",children:["initialState",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialstate",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"用于设置全局 store 的初始状态。一般用于 SSR 在 hydration 阶段初始化数据。"}),"\n",(0,r.jsxs)(n.h2,{id:"immer",children:["immer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#immer",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["是否启用以 mutable 更新 state 的方式，默认启用，若想禁用则设置为 ",(0,r.jsx)(n.code,{children:"false"}),"。"]}),"\n",(0,r.jsxs)(n.h2,{id:"effects",children:["effects",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#effects",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["是否启用副作用管理特性，默认启用，若想禁用则设置为 ",(0,r.jsx)(n.code,{children:"false"}),"。"]}),"\n",(0,r.jsxs)(n.h2,{id:"autoactions",children:["autoActions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#autoactions",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["是否启用自动生成 actions 特性，默认启用，若想禁用则设置为 ",(0,r.jsx)(n.code,{children:"false"}),"。"]}),"\n",(0,r.jsxs)(n.h2,{id:"devtools",children:["devtools",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devtools",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean | EnhancerOptions"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["是否启用 devtools，默认启用，同时支持 ",(0,r.jsx)(n.a,{href:"https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md",target:"_blank",rel:"noopener noreferrer",children:"redux-devtools-extension"})," 的所有参数，若想禁用则设置为 ",(0,r.jsx)(n.code,{children:"false"}),"。"]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);