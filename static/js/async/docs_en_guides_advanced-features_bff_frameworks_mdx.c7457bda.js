(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_bff_frameworks_mdx"],{619:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return a},default:function(){return c}});var t=r("9880"),s=r("23169"),i={sidebar_position:3,title:"Frameworks"},o="Frameworks",a=[{text:"Function Writing",depth:2,id:"function-writing"},{text:"Framework Writing",depth:2,id:"framework-writing"},{text:"Express",depth:3,id:"express"},{text:"Koa",depth:3,id:"koa"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",img:"img",h3:"h3",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"frameworks",children:["Frameworks",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#frameworks",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js's BFF supports different runtime frameworks, currently Modern.js's BFF supports two runtime frameworks",(0,t.jsx)(n.a,{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer",children:"Express.js"})," 和 ",(0,t.jsx)(n.a,{href:"https://koajs.com/",target:"_blank",rel:"noopener noreferrer",children:"Koa.js"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"function-writing",children:["Function Writing",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-writing",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Under the function writing, only the middleware writing method of various runtime frameworks is different, and other implementations are basically the same. Take Express as an example to introduce how to write a middleware by hand in the ",(0,t.jsx)(n.code,{children:"api/_ app.ts"})," and add permission verification:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { hook } from '@modern-js/runtime/server';\nimport { Request, Response, NextFunction } from 'express';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (req: Request, res: Response, next: NextFunction) => {\n    if (req.url !== '/api/login') {\n      const sid = req?.cookies?.sid;\n      if (!sid) {\n        res.status(400);\n        res.json({ code: -1, message: 'need login' });\n      } else {\n        next();\n      }\n    } else {\n      next();\n    }\n  });\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then add a normal BFF function ",(0,t.jsx)(n.code,{children:"/api/hello.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default async () => {\n  return 'Hello Modern.js';\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Finally, add the access code of the interface in the front-end ",(0,t.jsx)(n.code,{children:"src/App.tsx"}),", and call it directly in an integrated way:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    async function fetchMyApi() {\n      const { message } = await hello();\n      setText(message);\n    }\n\n    fetchMyApi();\n  }, []);\n\n  return <p>{text}</p>;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then exec ",(0,t.jsx)(n.code,{children:"pnpm run dev"})," starts the project, and accessing ",(0,t.jsx)(n.code,{children:"http://localhost:8080/"})," will find that the request for'/api/hello 'is blocked:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/network2.png",alt:"Network"})}),"\n",(0,t.jsxs)(n.p,{children:["Finally, modify the front-end code ",(0,t.jsx)(n.code,{children:"src/App.tsx"})," to call the login interface before accessing ",(0,t.jsx)(n.code,{children:"/api/hello"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\nimport { post as login } from '@api/login';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    async function fetchAfterLogin() {\n      const { code } = await login();\n      if (code === 0) {\n        const { message } = await hello();\n        setText(message);\n      }\n    }\n    fetchAfterLogin();\n  }, []);\n\n  return <p>{text}</p>;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Refresh the page and you can see that ",(0,t.jsx)(n.code,{children:"/api/hello"})," was accessed successfully:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/network3.png",alt:"Network"})}),"\n",(0,t.jsxs)(n.p,{children:["The above code simulates the way to add middleware to the ",(0,t.jsx)(n.code,{children:"/api/_app.ts"})," to achieve an easy login function. Also, other functions can be implemented in this hook file to extend BFF Server."]}),"\n",(0,t.jsxs)(n.h2,{id:"framework-writing",children:["Framework Writing",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#framework-writing",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Under the framework writing, Modern.js does not collect middleware in the ",(0,t.jsx)(n.code,{children:"api/_app.ts"}),", and the running process is controlled by the plugin itself."]}),"\n",(0,t.jsxs)(n.h3,{id:"express",children:["Express",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#express",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The framework writing of Express supports defining the startup logic of API Server in ",(0,t.jsx)(n.code,{children:"api/app.[tj]s"}),". performing the initialization work of the application, adding global middleware, declaring routes, and even extending the original framework."]}),"\n",(0,t.jsxs)(n.p,{children:["The route defined by the BFF function will be registered after the route defined by the ",(0,t.jsx)(n.code,{children:"app.ts"})," file, so here you can also intercept the route defined by the BFF function, preprocess or respond in advance."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="api/app.ts"',children:"import express from 'express';\n\nconst app = express();\n\napp.put('/user', function (req, res) {\n  res.send('Got a PUT request at /user');\n});\n\napp.use(async (req, res, next) => {\n  console.info(`access url: ${req.url}`);\n  next();\n});\n\nexport default app;\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"koa",children:["Koa",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#koa",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The Koa framework is written in a similar way to Express. It supports defining the startup logic of API Server in ",(0,t.jsx)(n.code,{children:"app.[tj]s"}),", performing the initialization work of the application, adding global middleware, declaring routes, extending the original framework, etc."]}),"\n",(0,t.jsxs)(n.p,{children:["The route defined by the BFF function will be registered after the route defined by the ",(0,t.jsx)(n.code,{children:"app.ts"})," file, so here you can also intercept the route defined by the BFF function, preprocess or respond in advance."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive caution",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["Use the framework writing, when there is no ",(0,t.jsx)(n.code,{children:"app.ts"}),", Modern.js will add koa-body by default. When there is ",(0,t.jsx)(n.code,{children:"app.ts"}),", if the developer wants to use the BFF function with Body, he needs to ensure that the koa-body middleware has been added."]}),"\n"]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:"title=api/app.ts",children:"import koa from 'koa';\n\nconst app = new Koa();\n\napp.put('/user', function (req, res) {\n  res.send('Got a PUT request at /user');\n});\n\napp.use(async (ctx, next) => {\n  console.info(`access url: ${ctx.url}`);\n  await next();\n});\n\nexport default app;\n"})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);