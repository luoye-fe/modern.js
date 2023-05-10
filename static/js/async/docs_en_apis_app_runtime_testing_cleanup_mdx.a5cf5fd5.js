(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_testing_cleanup_mdx"],{10337:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return r},title:function(){return i},toc:function(){return c},default:function(){return o}});var a=t("9880"),s=t("23169"),r={title:"cleanup",sidebar_position:3},i="cleanup",c=[{text:"Usage",depth:2,id:"usage"},{text:"Function Signature",depth:2,id:"function-signature"},{text:"Example",depth:2,id:"example"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",strong:"strong"},(0,s.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"cleanup",children:["cleanup",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cleanup",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Used to uninstall all currently rendered components."}),"\n",(0,a.jsxs)(n.h2,{id:"usage",children:["Usage",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { cleanup } from '@modenr-js/runtime/testing';\n"})})]})}),"\n",(0,a.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"function cleanup(): void"})}),"\n",(0,a.jsxs)(n.h2,{id:"example",children:["Example",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive info",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,a.jsxs)(n.div,{className:"modern-directive-content",children:[(0,a.jsxs)(n.p,{children:["Note that if you are using a testing framework that supports afterEach and it is injected into your testing environment (such as mocha, Jest, and Jasmine), ",(0,a.jsxs)(n.strong,{children:["will execute ",(0,a.jsx)(n.code,{children:"cleanup"})]})," in the afterEach hook by default. Otherwise, you will need to do manual cleanup after each test."]}),"\n"]})]}),"\n",(0,a.jsxs)(n.p,{children:["For example, if you use the ",(0,a.jsx)(n.a,{href:"https://github.com/avajs/ava",target:"_blank",rel:"noopener noreferrer",children:"ava"})," test framework, then you need to use the ",(0,a.jsx)(n.code,{children:"test.after Each"})," hook like this."]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { cleanup, render } from '@modern-js/runtime/testing';\nimport test from 'ava';\n\ntest.afterEach(cleanup);\n\ntest('renders into document', () => {\n  render(<div />);\n  // ...\n});\n\n// ... more tests ...\n"})})]})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}}}]);