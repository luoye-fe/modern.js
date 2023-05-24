(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_api_framework_lambda_mdx"],{24276:function(e,d,s){"use strict";Object.defineProperty(d,"__esModule",{value:!0});!function(e,d){for(var s in d)Object.defineProperty(e,s,{enumerable:!0,get:d[s]})}(d,{frontmatter:function(){return r},title:function(){return c},toc:function(){return l},default:function(){return a}});var n=s("9880"),i=s("23169"),r={title:"lambda/*.[tj]s",sidebar_position:1},c="lambda/*.[tj]s",l=[{text:"路由规则",depth:2,id:"路由规则"},{text:"默认路由",depth:3,id:"默认路由"},{text:"多级路由",depth:3,id:"多级路由"},{text:"动态路由",depth:3,id:"动态路由"},{text:"白名单",depth:3,id:"白名单"},{text:"函数定义",depth:2,id:"函数定义"}];function h(e){var d=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",h3:"h3",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.h1,{id:"lambda/*[tj]s",children:["lambda/*.[tj]s",(0,n.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#lambda/*[tj]s",children:"#"})]}),"\n",(0,n.jsxs)(d.p,{children:["在 BFF 框架写法下，声明 API 路由的文件。除了",(0,n.jsx)(d.a,{href:"/apis/app/hooks/api/framework/lambda#%E7%99%BD%E5%90%8D%E5%8D%95",children:"某些约定文件"}),"外，",(0,n.jsx)(d.code,{children:"api/"})," 目录下的文件会被注册为接口的路由。"]}),"\n",(0,n.jsxs)(d.div,{className:"modern-directive info",children:[(0,n.jsx)(d.div,{className:"modern-directive-title",children:"INFO"}),(0,n.jsxs)(d.div,{className:"modern-directive-content",children:[(0,n.jsxs)(d.p,{children:["使用 ",(0,n.jsx)(d.code,{children:"api"})," 目录需要开启 BFF 功能，需要在项目下执行 new 命令启用「BFF」功能。"]}),"\n"]})]}),"\n",(0,n.jsxs)(d.div,{className:"modern-directive tip",children:[(0,n.jsx)(d.div,{className:"modern-directive-title",children:"TIP"}),(0,n.jsxs)(d.div,{className:"modern-directive-content",children:[(0,n.jsxs)(d.p,{children:["该文件支持使用 ",(0,n.jsx)(d.code,{children:"js"})," 或 ",(0,n.jsx)(d.code,{children:"ts"})," 语言，但必须使用 ",(0,n.jsx)(d.code,{children:"esm"})," 语法导出函数。"]}),"\n"]})]}),"\n",(0,n.jsxs)(d.h2,{id:"路由规则",children:["路由规则",(0,n.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#路由规则",children:"#"})]}),"\n",(0,n.jsxs)(d.h3,{id:"默认路由",children:["默认路由",(0,n.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#默认路由",children:"#"})]}),"\n",(0,n.jsxs)(d.p,{children:["路由系统会将以 ",(0,n.jsx)(d.code,{children:"index"})," 命名的文件会被映射到上一层目录。"]}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"api/lambda/index.ts"})," -> ",(0,n.jsx)(d.code,{children:"$BASENAME/"})]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"api/lambda/user/index.ts"})," -> ",(0,n.jsx)(d.code,{children:"$BASENAME/user"})]}),"\n"]}),"\n",(0,n.jsxs)(d.h3,{id:"多级路由",children:["多级路由",(0,n.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#多级路由",children:"#"})]}),"\n",(0,n.jsx)(d.p,{children:"路由系统也支持解析多级的文件，如果创建文件夹结构，文件仍会以相同方式自动解析路由。"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"api/lambda/hello.ts"})," -> ",(0,n.jsx)(d.code,{children:"$BASENAME/hello"})]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"api/lambda/user/list.ts"})," -> ",(0,n.jsx)(d.code,{children:"$BASENAME/user/list"})]}),"\n"]}),"\n",(0,n.jsxs)(d.h3,{id:"动态路由",children:["动态路由",(0,n.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#动态路由",children:"#"})]}),"\n",(0,n.jsxs)(d.p,{children:["同样的，你可以通过创建带有 ",(0,n.jsx)(d.code,{children:"[xxx]"})," 的文件夹或者文件来支持动态的命名路由参数。"]}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"api/lambda/user/[username]/info.ts"})," -> ",(0,n.jsx)(d.code,{children:"$BASENAME/user/:username/info"})]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"api/lambda/user/[username]/delete.ts"})," -> ",(0,n.jsx)(d.code,{children:"$BASENAME/user/:username/delete"})]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"api/lambda/article/[id]/info.ts"})," -> ",(0,n.jsx)(d.code,{children:"$BASENAME/article/:id/info"})]}),"\n"]}),"\n",(0,n.jsxs)(d.p,{children:["其中的 ",(0,n.jsx)(d.code,{children:"$BASENAME"})," 可以在 ",(0,n.jsx)(d.code,{children:"modern.config.js"})," 中进行配置，默认值为 ",(0,n.jsx)(d.code,{children:"/api"}),"。"]}),"\n",(0,n.jsxs)(d.h3,{id:"白名单",children:["白名单",(0,n.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#白名单",children:"#"})]}),"\n",(0,n.jsxs)(d.p,{children:["默认 ",(0,n.jsx)(d.code,{children:"api"})," 目录下所有文件都会当作 BFF 函数文件去解析，但同样我们也设置了白名单，这些文件不被被解析："]}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["命名以 ",(0,n.jsx)(d.code,{children:"_"})," 开头的文件。例如：",(0,n.jsx)(d.code,{children:"_utils.ts"}),"。"]}),"\n",(0,n.jsxs)(d.li,{children:["命名以 ",(0,n.jsx)(d.code,{children:"_"})," 开头的文件夹下所有文件。例如：",(0,n.jsx)(d.code,{children:"_utils/index.ts"}),"、",(0,n.jsx)(d.code,{children:"_utils/cp.ts"}),"。"]}),"\n",(0,n.jsxs)(d.li,{children:["测试文件。例如：",(0,n.jsx)(d.code,{children:"foo.test.ts"}),"。"]}),"\n",(0,n.jsxs)(d.li,{children:["TypeScript 类型文件。例如：",(0,n.jsx)(d.code,{children:"hello.d.ts"}),"。"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"node_module"})," 下的文件。"]}),"\n"]}),"\n",(0,n.jsxs)(d.h2,{id:"函数定义",children:["函数定义",(0,n.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#函数定义",children:"#"})]}),"\n",(0,n.jsxs)(d.p,{children:["和函数写法下",(0,n.jsx)(d.a,{href:"/apis/app/hooks/api/functions/api#define-function",children:"函数定义"}),"完全一致。"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return d?(0,n.jsx)(d,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}}}]);