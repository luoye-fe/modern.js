(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_model_use-local-model_mdx"],{31457:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return r},toc:function(){return i},default:function(){return t}});var d=s("9880"),c=s("23169"),o=s.ir(s("89517")),l={sidebar_position:4,title:"useLocalModel"},r="useLocalModel",i=[{text:"示例",depth:4,id:"示例"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h4:"h4",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"uselocalmodel",children:["useLocalModel",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#uselocalmodel",children:"#"})]}),"\n","\n",(0,d.jsx)(o.default,{}),"\n",(0,d.jsxs)(n.p,{children:["用于把 Model 中的 State 作为局部状态使用，效果类似 React 的 ",(0,d.jsx)(n.code,{children:"useState"}),"。",(0,d.jsx)(n.code,{children:"useLocalModel"})," API 形式上与 ",(0,d.jsx)(n.code,{children:"useModel"})," 完全一致。具体使用请参考 ",(0,d.jsx)(n.a,{href:"/zh/apis/app/runtime/model/use-model",children:(0,d.jsx)(n.code,{children:"useModel"})}),"。"]}),"\n",(0,d.jsxs)(n.h4,{id:"示例",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-tsx",children:"function Container() {\n  const [state, actions] = useLocalModel(modelA);\n  const [state1, actions1] = useLocalModel(modelA);\n\n  // ...\n}\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["上面通过 ",(0,d.jsx)(n.code,{children:"useLocalModel"})," 加载了两次 ",(0,d.jsx)(n.code,{children:"modelA"}),"，因为 ",(0,d.jsx)(n.code,{children:"useLocalModel"})," 消费的是局部状态，所以 ",(0,d.jsx)(n.code,{children:"state"})," 和 ",(0,d.jsx)(n.code,{children:"state1"})," 也是完全隔离的。"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"更多参考"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/use-model",children:"使用 Model"})}),"\n"]})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);