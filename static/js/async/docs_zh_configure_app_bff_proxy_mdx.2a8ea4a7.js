(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_bff_proxy_mdx"],{87307:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return o},default:function(){return a}});var s=r("9880"),i=r("23169"),d={sidebar_label:"proxy"},c="bff.proxy",o=[{text:"常见用法",depth:2,id:"常见用法"},{text:"解决接口跨域问题",depth:3,id:"解决接口跨域问题"}];function t(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",pre:"pre",h2:"h2",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"bffproxy",children:["bff.proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bffproxy",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Record<string, string>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["请先在当前应用项目根目录使用【",(0,s.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new"}),"】 启用 BFF 功能。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["通过简单配置，无需编写代码，Modern.js 会自动转发请求。发送给 Modern.js BFF server 的请求，会代理到指定的服务上。\nBFF Proxy 使用了强大的 ",(0,s.jsx)(n.a,{href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer",children:"http-proxy-middleware"}),"，如果需要更多高级的用法， 可以查看它的",(0,s.jsx)(n.a,{href:"https://github.com/chimurai/http-proxy-middleware#options",target:"_blank",rel:"noopener noreferrer",children:"文档"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["在 ",(0,s.jsx)(n.code,{children:"modern.server-runtime.config.js"})," 中加入以下配置；即可开启代理："]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.server-runtime.config.js"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.server-runtime.config.js"',children:"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api': 'https://cnodejs.org',\n    },\n  },\n});\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["假设启动的 Modern.js BFF server 的服务地址是 ",(0,s.jsx)(n.code,{children:"localhost:8080"}),"，所有 path 以 ",(0,s.jsx)(n.code,{children:"api"})," 开头的请求都会被拦截，如发送到 ",(0,s.jsx)(n.code,{children:"localhost:8080/api/v1/topics"})," 的请求会被代理到 ",(0,s.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["你可以做路径的重写，如将发送到 ",(0,s.jsx)(n.code,{children:"localhost:8080/api/topics"})," 的请求代理到 ",(0,s.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"。"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.server-runtime.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.server-runtime.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api': {\n        target: 'https://cnodejs.org',\n        pathRewrite: { '/api/topics': '/api/v1/topics' },\n        changeOrigin: true,\n      },\n    },\n  },\n});\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["与 ",(0,s.jsx)(n.a,{href:"/configure/app/dev/proxy",children:"dev.proxy"})," 不同，本节所介绍的代理只作用于进入 BFF/API 服务的请求；同时，这一配置不但可以在开发环境中使用，在生产环境中也会代理相应的请求。"]}),"\n",(0,s.jsxs)(n.h2,{id:"常见用法",children:["常见用法",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常见用法",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"解决接口跨域问题",children:["解决接口跨域问题",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#解决接口跨域问题",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["在项目开发过程中，因为 web 页面和接口服务不是部署在同一个域名下，常常会遇到跨域问题。\n解决跨域问题的方式有很多，在这里我们使用 ",(0,s.jsx)(n.code,{children:"bff.proxy"})," 可以轻松解决跨域问题。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"BFF proxy 模式下，如果不需要写 BFF 的接口， API 目录可以删除；此时 BFF proxy 仍会开启。"}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["如下所示，在 ",(0,s.jsx)(n.code,{children:"modern.server-runtime.config.ts"})," 中，写入如下配置；我们将所有 web 页面发送到同域的以 ",(0,s.jsx)(n.code,{children:"/api"})," 开头的请求代理到另一个域名的服务上。"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.server-runtime.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.server-runtime.config.ts"',children:"export default defineServerConfig({\n  bff: {\n    proxy: {\n      '/api': 'https://cnodejs.org',\n    },\n  },\n};\n"})})})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);