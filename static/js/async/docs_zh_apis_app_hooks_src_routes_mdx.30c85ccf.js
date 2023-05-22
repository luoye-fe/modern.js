(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_src_routes_mdx"],{91495:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return c},title:function(){return a},toc:function(){return t},default:function(){return l}});var r=n("9880"),d=n("23169"),c={title:"routes/",sidebar_position:2},a="routes/",t=[{text:"基本示例",depth:2,id:"基本示例"},{text:"动态路由",depth:2,id:"动态路由"},{text:"布局组件",depth:2,id:"布局组件"}];function i(e){var s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"routes/",children:["routes/",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#routes/",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"应用使用基于文件系统路由时的入口标识。"}),"\n",(0,r.jsxs)(s.p,{children:["当项目结构为 ",(0,r.jsx)(s.code,{children:"Routes 入口"})," 类型时， 会分析 ",(0,r.jsx)(s.code,{children:"src/routes"})," 目录下的文件得到客户端路由配置。具体用法请查看",(0,r.jsx)(s.a,{href:"/guides/basic-features/routes",children:"约定式路由"})]}),"\n",(0,r.jsxs)(s.p,{children:["任何在 ",(0,r.jsx)(s.code,{children:"src/routes"})," 下的 ",(0,r.jsx)(s.code,{children:"layout.[tj]sx"})," 和 ",(0,r.jsx)(s.code,{children:"page.[tj]sx"})," 都会作为应用的路由："]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsx)(s.div,{className:"modern-code-content",children:(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-bash",meta:"{3}",children:".\n└── routes\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})})})}),"\n",(0,r.jsxs)(s.h2,{id:"基本示例",children:["基本示例",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#基本示例",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"routes"})," 目录下的目录名会作为路由 url 的映射，其中 ",(0,r.jsx)(s.code,{children:"layout.tsx"})," 中作为布局组件，",(0,r.jsx)(s.code,{children:"page.tsx"})," 作为内容组件，是整条路由的叶子节点，例如以下目录结构："]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsx)(s.div,{className:"modern-code-content",children:(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-bash",children:".\n└── routes\n    ├── page.tsx\n    └── user\n        └── page.tsx\n"})})})}),"\n",(0,r.jsx)(s.p,{children:"会产出下面两条路由："}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"/"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"/user"})}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"动态路由",children:["动态路由",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#动态路由",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["如果路由文件的目录名以 ",(0,r.jsx)(s.code,{children:"[]"})," 命名，生成的路由会作为动态路由。例如以下文件目录："]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsx)(s.div,{className:"modern-code-content",children:(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{children:"└── routes\n    ├── [id]\n    │   └── page.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})})})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"routes/[id]/page.tsx"})," 文件会转为 ",(0,r.jsx)(s.code,{children:"/:id"})," 路由。除了可以确切匹配的 ",(0,r.jsx)(s.code,{children:"/blog"})," 路由，其他所有 ",(0,r.jsx)(s.code,{children:"/xxx"})," 都会匹配到该路由。"]}),"\n",(0,r.jsxs)(s.p,{children:["在组件中，可以通过 ",(0,r.jsx)(s.a,{href:"/apis/app/runtime/router/router#useparams",children:"useParams"})," 获取对应命名的参数。"]}),"\n",(0,r.jsxs)(s.p,{children:["在 loader 中，params 会作为 ",(0,r.jsx)(s.a,{href:"/guides/basic-features/data-fetch#loader-%E5%87%BD%E6%95%B0",children:"loader"})," 的入参，通过 ",(0,r.jsx)(s.code,{children:"params"})," 的属性可以获取到对应的参数。"]}),"\n",(0,r.jsxs)(s.h2,{id:"布局组件",children:["布局组件",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#布局组件",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["如下面的例子，可以通过添加 ",(0,r.jsx)(s.code,{children:"layout.tsx"}),"，为所有路由组件添加公共的布局组件："]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsx)(s.div,{className:"modern-code-content",children:(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-bash",children:".\n└── routes\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})})})}),"\n",(0,r.jsxs)(s.p,{children:["在布局组件中可以通过使用 ",(0,r.jsx)(s.code,{children:"<Outlet>"})," 表示子组件："]}),"\n",(0,r.jsxs)(s.div,{className:"language-",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"routes/layout.tsx"}),(0,r.jsx)(s.div,{className:"modern-code-content",children:(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-tsx",meta:"title=routes/layout.tsx",children:"import { Link, Outlet, useLoaderData } from '@modern-js/runtime/router';\n\nexport default () => {\n  return (\n    <>\n      <Outlet></Outlet>\n    </>\n  );\n};\n"})})})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive note",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsxs)(s.div,{className:"modern-directive-content",children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"<Outlet>"})," 是 React Router 6 中新的 API，详情可以查看 ",(0,r.jsx)(s.a,{href:"https://reactrouter.com/en/main/components/outlet#outlet",target:"_blank",rel:"noopener noreferrer",children:"Outlet"}),"."]}),"\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}}}]);