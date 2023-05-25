(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_model_use-local-model_mdx"],{26042:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return l},toc:function(){return i},default:function(){return a}});var d=s("9880"),o=s("23169"),c=s.ir(s("51886")),r={sidebar_position:4,title:"useLocalModel"},l="useLocalModel",i=[{text:"示例",depth:4,id:"示例"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h4:"h4",pre:"pre",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"uselocalmodel",children:["useLocalModel",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#uselocalmodel",children:"#"})]}),"\n","\n",(0,d.jsx)(c.default,{}),"\n",(0,d.jsxs)(n.p,{children:["用于把 Model 中的 State 作为局部状态使用，效果类似 React 的 ",(0,d.jsx)(n.code,{children:"useState"}),"。",(0,d.jsx)(n.code,{children:"useLocalModel"})," API 形式上与 ",(0,d.jsx)(n.code,{children:"useModel"})," 完全一致。具体使用请参考 ",(0,d.jsx)(n.a,{href:"/zh/apis/app/runtime/model/use-model",children:(0,d.jsx)(n.code,{children:"useModel"})}),"。"]}),"\n",(0,d.jsxs)(n.h4,{id:"示例",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"function Container() {\n  const [state, actions] = useLocalModel(modelA);\n  const [state1, actions1] = useLocalModel(modelA);\n\n  // ...\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["上面通过 ",(0,d.jsx)(n.code,{children:"useLocalModel"})," 加载了两次 ",(0,d.jsx)(n.code,{children:"modelA"}),"，因为 ",(0,d.jsx)(n.code,{children:"useLocalModel"})," 消费的是局部状态，所以 ",(0,d.jsx)(n.code,{children:"state"})," 和 ",(0,d.jsx)(n.code,{children:"state1"})," 也是完全隔离的。"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"更多参考"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/use-model",children:"使用 Model"})}),"\n"]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(t,e)})):t(e)}}}]);