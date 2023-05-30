(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_server_public-routes_mdx"],{39946:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return t},toc:function(){return o},default:function(){return u}});var s=r("9880"),c=r("23169"),i={sidebar_label:"publicRoutes"},t="server.publicRoutes",o=[];function l(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"serverpublicroutes",children:["server.publicRoutes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverpublicroutes",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," 根据文件约定自动生成的服务端路由规则：应用的每个文件生成一条路由规则。"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["该配置选项只作用于服务端路由，可以自定义 ",(0,s.jsx)(n.code,{children:"config/public/"})," 下资源的访问路由。"]}),"\n",(0,s.jsxs)(n.p,{children:["对象的 ",(0,s.jsx)(n.code,{children:"key"})," 为当前应用的相对文件路径（不使用 ",(0,s.jsx)(n.code,{children:"./"}),"）, 值可以是 ",(0,s.jsx)(n.code,{children:"string"}),"。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    publicRoutes: {\n      // 设置一个长路由\n      'index.json': '/user-config/card-info/extra/help.json',\n\n      // 设置一个不带后缀的路由\n      'robot.txt': '/app/authentication',\n    },\n  },\n});\n"})})]})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);