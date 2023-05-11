(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_hooks_api_framework_lambda_mdx"],{5359:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});!function(e,i){for(var n in i)Object.defineProperty(e,n,{enumerable:!0,get:i[n]})}(i,{frontmatter:function(){return d},title:function(){return r},toc:function(){return t},default:function(){return c}});var s=n("9880"),l=n("23169"),d={title:"lambda/*.[tj]s",sidebar_position:1},r="lambda/*.[tj]s",t=[{text:"Routing Rule",depth:2,id:"routing-rule"},{text:"Default Route",depth:3,id:"default-route"},{text:"Multi Level Route",depth:3,id:"multi-level-route"},{text:"Dynamic Route",depth:3,id:"dynamic-route"},{text:"Allow List",depth:3,id:"allow-list"},{text:"Define Function",depth:2,id:"define-function"}];function a(e){var i=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",h3:"h3",ul:"ul",li:"li"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.h1,{id:"lambda/*[tj]s",children:["lambda/*.[tj]s",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#lambda/*[tj]s",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["Declaring API routing in BFF framework mode. Except ",(0,s.jsx)(i.a,{href:"/apis/app/hooks/api/framework/lambda#allow-list",children:"some files"}),", files in ",(0,s.jsx)(i.code,{children:"api/"})," are registered as routes."]}),"\n",(0,s.jsxs)(i.div,{className:"modern-directive info",children:[(0,s.jsx)(i.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(i.div,{className:"modern-directive-content",children:[(0,s.jsxs)(i.p,{children:["use ",(0,s.jsx)(i.code,{children:"api/"})," need execute new command to enable the 「BFF」 feature."]}),"\n"]})]}),"\n",(0,s.jsxs)(i.div,{className:"modern-directive tip",children:[(0,s.jsx)(i.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsxs)(i.div,{className:"modern-directive-content",children:[(0,s.jsxs)(i.p,{children:["this file supports the use ",(0,s.jsx)(i.code,{children:"js"})," or ",(0,s.jsx)(i.code,{children:"ts"}),", but the functions must be exported using the ESM syntax."]}),"\n"]})]}),"\n",(0,s.jsxs)(i.h2,{id:"routing-rule",children:["Routing Rule",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#routing-rule",children:"#"})]}),"\n",(0,s.jsxs)(i.h3,{id:"default-route",children:["Default Route",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#default-route",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["The files named ",(0,s.jsx)(i.code,{children:"index"})," will be upper level routing:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/index.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/user/index.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/user"})]}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"multi-level-route",children:["Multi Level Route",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#multi-level-route",children:"#"})]}),"\n",(0,s.jsx)(i.p,{children:"The routing system also supports parsing multiple levels of files. and if you create a folder, the files will still be automatically parsed in the same way."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/hello.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/hello"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/user/list.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/user/list"})]}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"dynamic-route",children:["Dynamic Route",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-route",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["Dynamic named routing parameters can be supported by creating folders or files with ",(0,s.jsx)(i.code,{children:"[xxx]"}),"."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/user/[username]/info.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/user/:username/info"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/user/[username]/delete.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/user/:username/delete"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/article/[id]/info.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/article/:id/info"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["the ",(0,s.jsx)(i.code,{children:"$BASENAME"})," can be configured in ",(0,s.jsx)(i.code,{children:"modern.config.js"}),", the default value is ",(0,s.jsx)(i.code,{children:"/api"}),"."]}),"\n",(0,s.jsxs)(i.h3,{id:"allow-list",children:["Allow List",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#allow-list",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["By default, all files in the ",(0,s.jsx)(i.code,{children:"api/"})," will be parsed as BFF function. but we also set a allow list, and these files will not be parsed:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["file name start with ",(0,s.jsx)(i.code,{children:"_"}),", for example: ",(0,s.jsx)(i.code,{children:"_utils.ts"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["files in directory that name start with ",(0,s.jsx)(i.code,{children:"_"}),", for example: ",(0,s.jsx)(i.code,{children:"_utils/index.ts"}),"、",(0,s.jsx)(i.code,{children:"_utils/cp.ts"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["test files, for example: ",(0,s.jsx)(i.code,{children:"foo.test.ts"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["TypeScript define files, for example: ",(0,s.jsx)(i.code,{children:"hello.d.ts"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["files in ",(0,s.jsx)(i.code,{children:"node_module"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"define-function",children:["Define Function",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#define-function",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["the same as ",(0,s.jsx)(i.a,{href:"/apis/app/hooks/api/functions/api#define-function",children:"Define Function"}),"."]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return i?(0,s.jsx)(i,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);