(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_bff_proxy_mdx"],{19740:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return t},toc:function(){return d},default:function(){return a}});var s=r("9880"),o=r("23169"),i={sidebar_label:"proxy"},t="bff.proxy",d=[{text:"Common usage",depth:2,id:"common-usage"},{text:"Solve interface cross-domain problems",depth:3,id:"solve-interface-cross-domain-problems"}];function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",pre:"pre",h2:"h2",h3:"h3"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"bffproxy",children:["bff.proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bffproxy",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Record<string, string>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive caution",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"Caution"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:['First you need to enable the "BFF" function using ',(0,s.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new"})," command."]}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"With simple configuration, no code is required, Modern.js automatically forwards requests. Requests sent to Modern.js BFF server are proxied to the specified service."}),"\n",(0,s.jsxs)(n.p,{children:["BFF Proxy uses the powerful ",(0,s.jsx)(n.a,{href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer",children:"http-proxy-middleware"}),", and if you need more advanced usage, you can check its ",(0,s.jsx)(n.a,{href:"https://github.com/chimurai/http-proxy-middleware#options",target:"_blank",rel:"noopener noreferrer",children:"documentation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Add the following configuration to ",(0,s.jsx)(n.code,{children:"modern.server-runtime.config.ts"}),", you can turn on the proxy:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.server-runtime.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.server-runtime.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api': 'https://cnodejs.org',\n    },\n  },\n});\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Assuming that the starting Modern.js BFF server's service address is ",(0,s.jsx)(n.code,{children:"localhost:8080"}),", all requests whose path starts with ",(0,s.jsx)(n.code,{children:"api"})," will be intercepted, such as requests sent to ",(0,s.jsx)(n.code,{children:"localhost:8080/api/v1/topics"})," will be proxied to ",(0,s.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can do path rewriting, such as proxying requests sent to ",(0,s.jsx)(n.code,{children:"localhost:8080/api/topics"})," to ",(0,s.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.server-runtime.config.js"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.server-runtime.config.js"',children:"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api': {\n        target: 'https://cnodejs.org',\n        pathRewrite: { '/api/topics': '/api/v1/topics' },\n        changeOrigin: true,\n      },\n    },\n  },\n});\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Unlike ",(0,s.jsx)(n.a,{href:"/configure/app/dev/proxy",children:"dev.proxy"}),", the proxy described in this section only works on requests entering the BFF/API service; at the same time, this configuration can be used not only in the development environment, but also in the production environment. The corresponding request will also be proxied in the production environment."]}),"\n",(0,s.jsxs)(n.h2,{id:"common-usage",children:["Common usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#common-usage",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"solve-interface-cross-domain-problems",children:["Solve interface cross-domain problems",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solve-interface-cross-domain-problems",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In the process of project development, because web pages and interface services are not deployed under the same domain name, cross-domain problems are often encountered."}),"\n",(0,s.jsxs)(n.p,{children:["There are many ways to solve cross-domain problems, and here we use ",(0,s.jsx)(n.code,{children:"bff.proxy"})," to easily solve cross-domain problems."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"In BFF proxy mode, if you do not need to write the BFF interface, the API directory can be deleted; at this time, BFF proxy will still be enabled."}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["As shown below, in the ",(0,s.jsx)(n.code,{children:"modern.server-runtime.config.js"}),", write the following configuration; we send all web pages to the same domain that request proxies starting with ",(0,s.jsx)(n.code,{children:"/api"})," to another domain's service."]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.server-runtime.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.server-runtime.config.ts"',children:"export default defineServerConfig({\n  bff: {\n    proxy: {\n      '/api': 'https://cnodejs.org',\n    },\n  },\n};\n"})})})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);