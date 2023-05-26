(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_testing_cleanup_mdx"],{23011:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return c},default:function(){return o}});var t=r("9880"),s=r("23169"),a={title:"cleanup",sidebar_position:3},i="cleanup",c=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"函数签名",depth:2,id:"函数签名"},{text:"示例",depth:2,id:"示例"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",div:"div",strong:"strong"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"cleanup",children:["cleanup",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cleanup",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"用于卸载掉当前已渲染的所有组件。"}),"\n",(0,t.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { cleanup } from '@modenr-js/runtime/testing';\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"function cleanup(): void"})}),"\n",(0,t.jsxs)(n.h2,{id:"示例",children:["示例",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["请注意，如果你使用的测试框架支持 afterEach，并且它被注入到你的测试环境中（如 mocha、Jest 和 Jasmine），",(0,t.jsxs)(n.strong,{children:["会默认在 afterEach 钩子里执行 ",(0,t.jsx)(n.code,{children:"cleanup"})]}),"。否则，你将需要在每次测试后进行手动清理。"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["例如，如果你使用",(0,t.jsx)(n.a,{href:"https://github.com/avajs/ava",target:"_blank",rel:"noopener noreferrer",children:"ava"}),"测试框架，那么你需要像这样使用 test.afterEach 钩子。"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { cleanup, render } from '@modern-js/runtime/testing';\nimport test from 'ava';\n\ntest.afterEach(cleanup);\n\ntest('renders into document', () => {\n  render(<div />);\n  // ...\n});\n\n// ... more tests ...\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);