(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_model_use-local-model_mdx"],{46125:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return l},title:function(){return t},toc:function(){return c},default:function(){return r}});var o=n("9880"),a=n("23169"),d=n.ir(n("47541")),l={sidebar_position:4,title:"useLocalModel"},t="useLocalModel",c=[{text:"Example",depth:2,id:"example"}];function i(e){var s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{id:"uselocalmodel",children:["useLocalModel",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#uselocalmodel",children:"#"})]}),"\n","\n",(0,o.jsx)(d.default,{}),"\n",(0,o.jsxs)(s.p,{children:["To use the State in the Model as a local state, the effect is similar to React's ",(0,o.jsx)(s.code,{children:"useState"}),". ",(0,o.jsx)(s.code,{children:"useLocalModel"})," API same as ",(0,o.jsx)(s.code,{children:"useModel"}),". For detail, see ",(0,o.jsx)(s.a,{href:"/en/apis/app/runtime/model/use-model",children:(0,o.jsx)(s.code,{children:"useModel"})}),"."]}),"\n",(0,o.jsxs)(s.h2,{id:"example",children:["Example",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-tsx",children:"function Container() {\n  const [state, actions] = useLocalModel(modelA);\n  const [state1, actions1] = useLocalModel(modelA);\n\n  // ...\n}\n"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"modelA"})," was loaded twice with useLocalModel above, because useLocalModel consumes local state, so state and state1 are also completely isolated."]}),"\n",(0,o.jsxs)(s.div,{className:"modern-directive info",children:[(0,o.jsx)(s.div,{className:"modern-directive-title",children:"More"}),(0,o.jsxs)(s.div,{className:"modern-directive-content",children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/guides/topic-detail/model/use-model",children:"Use Model"}),"."]}),"\n"]})]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(i,e)})):i(e)}}}]);