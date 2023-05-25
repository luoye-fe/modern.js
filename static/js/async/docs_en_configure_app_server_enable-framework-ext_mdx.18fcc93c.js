(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_server_enable-framework-ext_mdx"],{8995:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return o},default:function(){return l}});var s=r("9880"),t=r("23169"),a={sidebar_label:"enableFrameworkExt"},d="server.enableFrameworkExt",o=[{text:"Example",depth:2,id:"example"}];function i(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h2:"h2",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"serverenableframeworkext",children:["server.enableFrameworkExt",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverenableframeworkext",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["By default, with ",(0,s.jsx)(n.a,{href:"/guides/advanced-features/web-server",children:"Custom Web Server"})," enabled, Middleware uses the syntax of the Modern.js itself."]}),"\n",(0,s.jsxs)(n.p,{children:["Enable ",(0,s.jsx)(n.code,{children:"server.enableFrameworkExt"})," to use the syntax of framework extensions."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    enableFrameworkExt: true,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Default usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="server/index.ts"',children:"import { Middleware } from '@modern-js/runtime/server';\n\nexport const middleware: Middleware = (ctx, next) => {\n  console.log(ctx.request.url);\n  next();\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"When enabled, Middleware types will be exported from other namespaces and can the syntax of framework extensions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="server/index.ts"',children:"import { SomeType } from '@modern-js/runtime/{namespace}';\n\nexport const middleware: SomeType = (...args) => {\n  console.log(args[0].url);\n  next();\n};\n"})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"The above code is pseudo-code, and the specific usage needs to refer to the corresponding framework extension."}),"\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);