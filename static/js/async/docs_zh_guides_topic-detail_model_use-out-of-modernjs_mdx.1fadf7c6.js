(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_model_use-out-of-modernjs_mdx"],{6319:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return o},default:function(){return l}});var d=r("9880"),s=r("23169"),c={sidebar_position:12,title:"单独使用 Reduck"},i="单独使用 Reduck",o=[];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ol:"ol",li:"li",code:"code",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"单独使用-reduck",children:["单独使用 Reduck",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#单独使用-reduck",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"在 Modern.js 以外，单独集成 Reduck 使用时，主要需要做以下修改："}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"安装 Reduck 相关包"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["在项目中安装 Reduck 包：",(0,d.jsx)(n.code,{children:"@modern-js-reduck/react"}),"。"]}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsx)(n.li,{children:"API 导入包名"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["在 Modern.js 中使用时，Reduck 导出 API 的包名为：",(0,d.jsx)(n.code,{children:"@modern-js/runtime/model"}),"。单独使用 Reduck 时，导出包名为：",(0,d.jsx)(n.code,{children:"@modern-js-reduck/react"}),"。"]}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsxs)(n.li,{children:["包裹 ",(0,d.jsx)(n.code,{children:"Provider"})," 组件"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js 自动在应用的入口组件上，包裹了用于注入 Reduck 全局 Store 的 ",(0,d.jsx)(n.a,{href:"/apis/app/runtime/model/Provider",children:(0,d.jsx)(n.code,{children:"Provider"})})," 组件。单独使用 Reduck 时，需要手动完成。"]}),"\n",(0,d.jsx)(n.p,{children:"示例："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"// 根组件\nconst Root = () => {\n  return (\n    <Provider>\n      {/* 应用入口组件 */}\n      <App />\n    </Provider>\n  );\n};\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"4",children:["\n",(0,d.jsx)(n.li,{children:"功能配置"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["在 Modern.js 中使用时，可以通过 ",(0,d.jsx)(n.a,{href:"/configure/app/runtime/state",children:(0,d.jsx)(n.code,{children:"runtime.state"})})," 对 Reduck 功能进行配置。单独使用时，需要通过 ",(0,d.jsx)(n.a,{href:"/apis/app/runtime/model/Provider",children:(0,d.jsx)(n.code,{children:"Provider"})})," 的 ",(0,d.jsx)(n.code,{children:"config"})," 或 ",(0,d.jsx)(n.code,{children:"store"})," 参数配置。"]}),"\n",(0,d.jsx)(n.p,{children:"示例："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"const Root = () => {\n  return (\n    {/* 关闭 Redux DevTools */}\n    <Provider config={{ devTools: false }}>\n      <App />\n    </Provider>\n  )\n}\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(t,e)})):t(e)}}}]);