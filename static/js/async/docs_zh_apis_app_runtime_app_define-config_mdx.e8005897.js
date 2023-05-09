(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_app_define-config_mdx"],{23839:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return o},default:function(){return l}});var i=s("12151"),r=s("23169"),c={sidebar_position:1,title:"defineConfig"},d="defineConfig",o=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"函数签名",depth:2,id:"函数签名"},{text:"参数",depth:3,id:"参数"},{text:"示例",depth:2,id:"示例"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",strong:"strong",h3:"h3",ul:"ul",li:"li",ol:"ol"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"defineconfig",children:["defineConfig",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#defineconfig",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"用于动态配置应用。"}),"\n",(0,i.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { defineConfig } from '@modern-js/runtime';\n"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["Runtime 配置通常可以在 ",(0,i.jsx)(n.code,{children:"modern.config.js"})," 的 ",(0,i.jsx)(n.code,{children:"runtime"})," 空间下配置，如 ",(0,i.jsx)(n.a,{href:"/configure/app/runtime/router",children:"router"})," 配置。"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"modern.config.js"})," 中的配置是构建时确定的，如果一些配置参数是运行时获取的，或者配置参数是来自于源码中的一个模块（如组件），就需要使用 ",(0,i.jsx)(n.code,{children:"defineConfig"})," API 进行运行时配置。"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@modern-js/app-tools"})," 拥有同名 API，用于为配置",(0,i.jsx)(n.strong,{children:"提供 TS 类型"}),"，请开发者加以区分。"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"function defineConfig(Component, config): any;\n"})})]})}),"\n",(0,i.jsxs)(n.h3,{id:"参数",children:["参数",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Component：",(0,i.jsx)(n.code,{children:"React.ComponentType<any>"}),"，App 根组件。"]}),"\n",(0,i.jsxs)(n.li,{children:["config：",(0,i.jsx)(n.code,{children:"Record<string, any>"}),"，运行时的配置。"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"示例",children:["示例",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function App () {\n  ...\n}\n\ndefineConfig(App, {\n  router: {\n    supportHtml5History: false\n  }\n})\n"})})]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"defineConfig"})," 里可配置 ",(0,i.jsx)(n.a,{href:"/configure/app/runtime/state",children:"runtime.state"}),"、",(0,i.jsx)(n.a,{href:"/configure/app/runtime/router",children:"runtime.router"})," 等运行时配置。"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"defineConfig"})," 在配置某个属性之前，如 ",(0,i.jsx)(n.code,{children:"router"}),"，需要确保 ",(0,i.jsx)(n.code,{children:"modern.config.js"})," 已经配置开启了该功能。"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"defineConfig"})," 传入的配置会和 ",(0,i.jsx)(n.code,{children:"modern.config.js"})," 中的配置浅 merge，以 ",(0,i.jsx)(n.code,{children:"router"})," 为例，最终应用的配置如下："]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-json",children:"{\n  // 来自 `modern.config.js` 配置\n  ...runtime.router\n  // 来自 `defineConfig` 配置\n  ...config.router\n}\n"})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);