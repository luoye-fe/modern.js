(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_model_use-local-model_mdx"],{18783:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return l},title:function(){return c},toc:function(){return t},default:function(){return r}});var a=n("9880"),o=n("23169"),d=n.ir(n("1541")),l={sidebar_position:4,title:"useLocalModel"},c="useLocalModel",t=[{text:"Example",depth:2,id:"example"}];function i(e){var s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.h1,{id:"uselocalmodel",children:["useLocalModel",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#uselocalmodel",children:"#"})]}),"\n","\n",(0,a.jsx)(d.default,{}),"\n",(0,a.jsxs)(s.p,{children:["To use the State in the Model as a local state, the effect is similar to React's ",(0,a.jsx)(s.code,{children:"useState"}),". ",(0,a.jsx)(s.code,{children:"useLocalModel"})," API same as ",(0,a.jsx)(s.code,{children:"useModel"}),". For detail, see ",(0,a.jsx)(s.a,{href:"/en/apis/app/runtime/model/use-model",children:(0,a.jsx)(s.code,{children:"useModel"})}),"."]}),"\n",(0,a.jsxs)(s.h2,{id:"example",children:["Example",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,a.jsx)(s.div,{className:"language-",children:(0,a.jsx)(s.div,{className:"modern-code-content",children:(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-tsx",children:"function Container() {\n  const [state, actions] = useLocalModel(modelA);\n  const [state1, actions1] = useLocalModel(modelA);\n\n  // ...\n}\n"})})})}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"modelA"})," was loaded twice with useLocalModel above, because useLocalModel consumes local state, so state and state1 are also completely isolated."]}),"\n",(0,a.jsxs)(s.div,{className:"modern-directive info",children:[(0,a.jsx)(s.div,{className:"modern-directive-title",children:"More"}),(0,a.jsxs)(s.div,{className:"modern-directive-content",children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/guides/topic-detail/model/use-model",children:"Use Model"}),"."]}),"\n"]})]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}}}]);