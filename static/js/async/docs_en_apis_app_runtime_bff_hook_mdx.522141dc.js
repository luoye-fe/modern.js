(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_bff_hook_mdx"],{15777:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var a in n)Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}(n,{frontmatter:function(){return i},title:function(){return s},toc:function(){return o},default:function(){return c}});var r=a("9880"),d=a("23169"),i={title:"hook"},s="hook",o=[{text:"Usage",depth:2,id:"usage"},{text:"Function Signature",depth:2,id:"function-signature"},{text:"Input",depth:3,id:"input"},{text:"Example",depth:2,id:"example"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"hook",children:["hook",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Used to add framework middleware under BFF function mode, the middleware will execute before BFF function."}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"according to the framework extend plugin, export from the corresponding namespace:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { hook } from '@modern-js/runtime/{namespace}';\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type HookOptions = {\n  addMiddleware: string | function;\n};\n\nfunction hook(options: HookOptions): void;\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"input",children:["Input",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"options"}),": a range of hooks provided by Modern.js.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"addMiddleware"}),": add middlewares for BFF."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"middleware for different frameworks should be different(an example is when using the koa framework):"}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"api/_app.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=api/_app.ts",children:"import { hook } from '@modern-js/runtime/koa';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (ctx, next) => {\n    ctx.req.query.id = 'koa';\n    await next();\n  });\n});\n"})})})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);