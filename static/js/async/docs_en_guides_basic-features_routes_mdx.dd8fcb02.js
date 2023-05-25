(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_basic-features_routes_mdx"],{51238:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var r=t("9880"),o=t("23169");function s(e){return(0,r.jsx)(r.Fragment,{})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},10702:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var r=t("9880"),o=t("23169");function s(e){return(0,r.jsx)(r.Fragment,{})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},34653:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return d},title:function(){return a},toc:function(){return c},default:function(){return h}});var r=t("9880"),o=t("23169"),s=t.ir(t("51238")),i=t.ir(t("10702")),d={title:"Routes",sidebar_position:1},a="Routes",c=[{text:"Conventional Routing",depth:2,id:"conventional-routing"},{text:"Routing File Convention",depth:3,id:"routing-file-convention"},{text:"Layout",depth:4,id:"layout"},{text:"Page",depth:4,id:"page"},{text:"Dynamic Routing",depth:3,id:"dynamic-routing"},{text:"Dynamic Optional Routing",depth:3,id:"dynamic-optional-routing"},{text:"Catch-all Routing",depth:3,id:"catch-all-routing"},{text:"No-path Layout",depth:3,id:"no-path-layout"},{text:"No Layout",depth:3,id:"no-layout"},{text:"(WIP)Loading",depth:3,id:"(wip)loading"},{text:"Redirect",depth:3,id:"redirect"},{text:"ErrorBoundary",depth:3,id:"errorboundary"},{text:"Runtime Configuration",depth:3,id:"runtime-configuration"},{text:"Hooks Before Rendering",depth:3,id:"hooks-before-rendering"},{text:"Preloading",depth:3,id:"preloading"},{text:"FAQ",depth:4,id:"faq"},{text:"Self-controlled Routing",depth:2,id:"self-controlled-routing"},{text:"Other",depth:2,id:"other"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",h2:"h2",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li",h4:"h4",ol:"ol"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"routes",children:["Routes",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#routes",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js's routing is based on ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/main",target:"_blank",rel:"noopener noreferrer",children:"React Router 6"})," and provides multiple types of routing modes. According to different ",(0,r.jsx)(n.a,{href:"/guides/concept/entries",children:"entry"})," types, routing is divided into three modes: ",(0,r.jsx)(n.strong,{children:"Conventional Routing"}),", ",(0,r.jsx)(n.strong,{children:"Self-controlled Routing"}),", and ",(0,r.jsx)(n.strong,{children:"Other"}),"."]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"The routing mentioned in this section refers to client-side routing, i.e., SPA routing."})})]}),"\n",(0,r.jsxs)(n.h2,{id:"conventional-routing",children:["Conventional Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#conventional-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["With ",(0,r.jsx)(n.code,{children:"routes/"})," as the convention for entry points, Modern.js automatically generates the corresponding routing structure based on the file system."]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js supports the popular conventional routing mode in the industry: ",(0,r.jsx)(n.strong,{children:"Nested Routing"}),". When using nested routing, the page's routing corresponds to the UI structure, and we will introduce this routing mode in detail."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"/user/johnny/profile                  /user/johnny/posts\n+------------------+                  +-----------------+\n| User             |                  | User            |\n| +--------------+ |                  | +-------------+ |\n| | Profile      | |  +------------>  | | Posts       | |\n| |              | |                  | |             | |\n| +--------------+ |                  | +-------------+ |\n+------------------+                  +-----------------+\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"routing-file-convention",children:["Routing File Convention",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#routing-file-convention",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Under the ",(0,r.jsx)(n.code,{children:"routes/"})," directory, the directory name is mapped to the route URL. Modern.js has two file conventions, ",(0,r.jsx)(n.code,{children:"layout.[jt]sx"})," and ",(0,r.jsx)(n.code,{children:"page.[jt]sx"})," (abbreviated as",(0,r.jsx)(n.code,{children:".tsx"}),"). These two files determine the layout structure of the application. ",(0,r.jsx)(n.code,{children:"layout.tsx"})," is used as the layout component, and ",(0,r.jsx)(n.code,{children:"page.tsx"})," acts as the content component, which is the leaf node of the entire route (a route has only one leaf node and must end with a leaf node)."]}),"\n",(0,r.jsx)(n.p,{children:"For example, the following directory structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── page.tsx\n    └── user\n        └── page.tsx\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will generate the following two routes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/user"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"layout.tsx"})," is added, assuming the following directory:"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["Here, ",(0,r.jsx)(n.code,{children:"routes/layout.tsx"})," will be used as the layout component for all components under the ",(0,r.jsx)(n.code,{children:"/"})," route, and ",(0,r.jsx)(n.code,{children:"routes/user/layout.tsx"})," will be used as the layout component for all route components under the ",(0,r.jsx)(n.code,{children:"/user"})," route.\n"]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When the route is ",(0,r.jsx)(n.code,{children:"/"}),", the following UI layout will be displayed:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <Page />\n</Layout>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Similarly, ",(0,r.jsx)(n.code,{children:"routes/user/layout.tsx"})," will be used as the layout component for all components under the ",(0,r.jsx)(n.code,{children:"/user"})," route. When the route is ",(0,r.jsx)(n.code,{children:"/user"}),", the following UI layout will be displayed:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <UserLayout>\n    <UserPage />\n  </UserLayout>\n</Layout>\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"layout",children:["Layout",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#layout",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"<Layout>"})," component refers to all ",(0,r.jsx)(n.code,{children:"layout.tsx"})," files under the ",(0,r.jsx)(n.code,{children:"routes/"})," directory. They represent the layout of the corresponding route segment and use ",(0,r.jsx)(n.code,{children:"<Outlet>"})," to represent child components."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:"title=routes/layout.tsx",children:"import { Link, Outlet, useLoaderData } from '@modern-js/runtime/router';\n\nexport default () => {\n  return (\n    <>\n      <Outlet></Outlet>\n    </>\n  );\n};\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"<Outlet>"})," is a new API in React Router 6. For more details, please refer to ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/outlet#outlet",target:"_blank",rel:"noopener noreferrer",children:"Outlet"}),"."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["To simplify the introduction of the relationship between ",(0,r.jsx)(n.code,{children:"<Layout>"})," and ",(0,r.jsx)(n.code,{children:"<Outlet>"}),", the following file directory is used as an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── blog\n    │   └── page.tsx\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["When the route is ",(0,r.jsx)(n.code,{children:"/"}),", the ",(0,r.jsx)(n.code,{children:"<Outlet>"})," in ",(0,r.jsx)(n.code,{children:"routes/layout.tsx"})," represents the component exported in ",(0,r.jsx)(n.code,{children:"routes/page.tsx"}),", generating the following UI structure:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <Page />\n</Layout>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["When the route is ",(0,r.jsx)(n.code,{children:"/blog"}),", the ",(0,r.jsx)(n.code,{children:"<Outlet>"})," in ",(0,r.jsx)(n.code,{children:"routes/layout.tsx"})," represents the component exported in ",(0,r.jsx)(n.code,{children:"routes/blog/page.tsx"}),", generating the following UI structure:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <BlogPage />\n</Layout>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["When the route is ",(0,r.jsx)(n.code,{children:"/user"}),", the ",(0,r.jsx)(n.code,{children:"<Outlet>"})," in ",(0,r.jsx)(n.code,{children:"routes/layout.tsx"})," represents the component exported in ",(0,r.jsx)(n.code,{children:"routes/user/layout.tsx"}),". The ",(0,r.jsx)(n.code,{children:"<Outlet>"})," in ",(0,r.jsx)(n.code,{children:"routes/user/layout.tsx"})," represents the component exported in ",(0,r.jsx)(n.code,{children:"routes/user/page.tsx"}),", generating the following UI structure:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <UserLayout>\n    <UserPage />\n  </UserLayout>\n</Layout>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In summary, if there is a ",(0,r.jsx)(n.code,{children:"layout.tsx"})," file under the sub-route's file directory, the ",(0,r.jsx)(n.code,{children:"<Outlet>"})," in the parent ",(0,r.jsx)(n.code,{children:"layout.tsx"})," will represent the ",(0,r.jsx)(n.code,{children:"layout.tsx"})," in the sub-route file directory. Otherwise, it will represent the ",(0,r.jsx)(n.code,{children:"page.tsx"})," in the sub-route file directory."]}),"\n",(0,r.jsxs)(n.h4,{id:"page",children:["Page",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#page",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["All routes should end with the ",(0,r.jsx)(n.code,{children:"<Page>"})," component. If the developer introduces the ",(0,r.jsx)(n.code,{children:"<Outlet>"})," component in the ",(0,r.jsx)(n.code,{children:"page.tsx"})," file, there will be no effect."]}),"\n",(0,r.jsxs)(n.h3,{id:"dynamic-routing",children:["Dynamic Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Routes generated from file directories named with ",(0,r.jsx)(n.code,{children:"[]"})," will be handled as dynamic routes. For example, the following file directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"└── routes\n    ├── [id]\n    │   └── page.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"routes/[id]/page.tsx"})," file will be converted to the ",(0,r.jsx)(n.code,{children:"/:id"})," route. Except for the exact matching ",(0,r.jsx)(n.code,{children:"/blog"})," route, all other ",(0,r.jsx)(n.code,{children:"/xxx"})," routes will match this route."]}),"\n",(0,r.jsxs)(n.p,{children:["In the component, you can use ",(0,r.jsx)(n.a,{href:"/apis/app/runtime/router/router#useparams",children:"useParams"})," to get the corresponding named parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["In the loader, params will be passed as the input parameter of the ",(0,r.jsx)(n.a,{href:"/guides/basic-features/data-fetch#loader-function",children:"loader function"}),", and you can get the parameter value through ",(0,r.jsx)(n.code,{children:"params.xxx"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"dynamic-optional-routing",children:["Dynamic Optional Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-optional-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Routes generated from file directories named with ",(0,r.jsx)(n.code,{children:"[$]"})," will be treated as dynamic optional routes. For example, the following file directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"└── routes\n    ├── user\n    │   └── [id$]\n    │       └── page.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"routes/user/[id$]/page.tsx"})," file will be converted to the ",(0,r.jsx)(n.code,{children:"/user/:id?"})," route. All routes under ",(0,r.jsx)(n.code,{children:"/user"})," will match this route, and the ",(0,r.jsx)(n.code,{children:"id"})," parameter is optional. This route is usually used to distinguish between ",(0,r.jsx)(n.strong,{children:"creation"})," and ",(0,r.jsx)(n.strong,{children:"editing"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In the component, you can use ",(0,r.jsx)(n.a,{href:"/apis/app/runtime/router/router#useparams",children:"useParams"})," to obtain the corresponding named parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["In the loader, params will be passed as the input parameter of the ",(0,r.jsx)(n.a,{href:"/guides/basic-features/data-fetch#loader-function",children:"loader function"}),", and you can get the parameter value through ",(0,r.jsx)(n.code,{children:"params.xxx"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"catch-all-routing",children:["Catch-all Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#catch-all-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you create a ",(0,r.jsx)(n.code,{children:"$.tsx"})," file under the routes directory, it will be treated as the catch-all routing component. When there is no matching route, this component will be rendered."]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$.tsx"})," can be considered as a special ",(0,r.jsx)(n.code,{children:"page"})," route component. When there is a ",(0,r.jsx)(n.code,{children:"layout"})," component in the current directory, ",(0,r.jsx)(n.code,{children:"$.tsx"})," will be rendered as a child component of ",(0,r.jsx)(n.code,{children:"layout"}),".\n"]})})]}),"\n",(0,r.jsx)(n.p,{children:"For example, the following directory structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"└── routes\n    ├── $.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When accessing any path that does not match, the ",(0,r.jsx)(n.code,{children:"routes/$.tsx"})," component will be rendered. Similarly, you can use ",(0,r.jsx)(n.a,{href:"/apis/app/runtime/router/router#useparams",children:"useParams"})," in ",(0,r.jsx)(n.code,{children:"$.tsx"})," to capture the remaining parts of the URL."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="$.tsx"',children:"import { useParams } from '@modern-js/runtime/router';\n// When the path is `/aaa/bbb`\nconst params = useParams();\nparams['*']; // => 'aaa/bbb'\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"no-path-layout",children:["No-path Layout",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#no-path-layout",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When the directory name starts with ",(0,r.jsx)(n.code,{children:"__"}),", the corresponding directory name will not be converted to an actual route path. For example, the following file directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── __auth\n    │   ├── layout.tsx\n    │   ├── login\n    │   │   └── page.tsx\n    │   └── signup\n    │       └── page.tsx\n    ├── layout.tsx\n    └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js will generate two routes, ",(0,r.jsx)(n.code,{children:"/login"})," and ",(0,r.jsx)(n.code,{children:"/signup"}),". The ",(0,r.jsx)(n.code,{children:"__auth/layout.tsx"})," component will serve as the layout component for ",(0,r.jsx)(n.code,{children:"login/page.tsx"})," and ",(0,r.jsx)(n.code,{children:"signup/page.tsx"}),", but ",(0,r.jsx)(n.code,{children:"__auth"})," will not be a route path segment."]}),"\n",(0,r.jsx)(n.p,{children:"This feature is very useful when you need to create independent layouts for certain types of routes or want to classify routes."}),"\n",(0,r.jsxs)(n.h3,{id:"no-layout",children:["No Layout",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#no-layout",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"In some cases, the project requires complex routing, but these routes do not have independent UI layouts. If you create routes like ordinary file directories, it will result in deep directory levels."}),"\n",(0,r.jsxs)(n.p,{children:["Therefore, Modern.js supports using ",(0,r.jsx)(n.code,{children:"."})," to separate route segments instead of file directories. For example, when you need ",(0,r.jsx)(n.code,{children:"/user/profile/2022/edit"}),", you can directly create the following files:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"└── routes\n    ├── user.profile.[id].edit\n    │      └── page.tsx\n    ├── layout.tsx\n    └── page.tsx\n"})}),"\n",(0,r.jsx)(n.p,{children:"When accessing the route, you will get the following UI layout:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"<RootLayout>\n  <UserProfileEdit /> // routes/user.profile.[id].edit/page.tsx\n</RootLayout>\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"(wip)loading",children:["(WIP)Loading",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#(wip)loading",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In each directory under ",(0,r.jsx)(n.code,{children:"routes/"}),", developers can create a ",(0,r.jsx)(n.code,{children:"loading.tsx"})," file that exports a ",(0,r.jsx)(n.code,{children:"<Loading>"})," component by default."]}),"\n",(0,r.jsxs)(n.p,{children:["When this component and the ",(0,r.jsx)(n.code,{children:"layout"})," component exist in the route directory, the ",(0,r.jsx)(n.code,{children:"<Loading>"})," component will be used as the fallback UI when switching routes in this sub-route. For example, the following file directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── blog\n    │   ├── [id]\n    │   │   └── page.tsx\n    │   └── page.tsx\n    ├── layout.tsx\n    ├── loading.tsx\n    └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When defining ",(0,r.jsx)(n.code,{children:"loading.tsx"}),", it is equivalent to the following layout:"]}),"\n",(0,r.jsxs)(n.p,{children:["When the route is ",(0,r.jsx)(n.code,{children:"/"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <Suspense fallback={<Loading />}>\n    <Page />\n  </Suspense>\n</Layout>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When the route is ",(0,r.jsx)(n.code,{children:"/blog"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <Suspense fallback={<Loading />}>\n    <BlogPage />\n  </Suspense>\n</Layout>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When the route is ",(0,r.jsx)(n.code,{children:"/blog/123"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <Suspense fallback={<Loading />}>\n    <BlogIdPage />\n  </Suspense>\n</Layout>\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"When the Layout component does not exist in the directory, the Loading component in that directory will not take effect. Modern.js recommends having a root Layout and root Loading."}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["When the route jumps from ",(0,r.jsx)(n.code,{children:"/"})," to ",(0,r.jsx)(n.code,{children:"/blog"}),", if the JS Chunk of the ",(0,r.jsx)(n.code,{children:"blog/page"})," component has not been loaded yet, the UI of the component exported in ",(0,r.jsx)(n.code,{children:"loading.tsx"})," will be displayed first."]}),"\n",(0,r.jsxs)(n.p,{children:["Similarly, when the route jumps from ",(0,r.jsx)(n.code,{children:"/"})," or ",(0,r.jsx)(n.code,{children:"/blog"})," to ",(0,r.jsx)(n.code,{children:"/blog/123"}),", if the JS Chunk of the ",(0,r.jsx)(n.code,{children:"blog/[id]/page"})," component has not been loaded yet, the UI of the component exported in ",(0,r.jsx)(n.code,{children:"loading.tsx"})," will be displayed first."]}),"\n",(0,r.jsxs)(n.h3,{id:"redirect",children:["Redirect",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#redirect",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can use a ",(0,r.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"Data Loader"})," file to redirect a route. For example, if you have a ",(0,r.jsx)(n.code,{children:"routes/user/page.tsx"})," file and want to redirect the corresponding route, you can create a ",(0,r.jsx)(n.code,{children:"routes/user/page.loader.ts"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="routes/user/page.loader.ts"',children:"import { redirect } from '@modern-js/runtime/router';\n\nexport default () => {\n  const user = await getUser();\n  if (!user) {\n    return redirect('/login');\n  }\n  return null;\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"errorboundary",children:["ErrorBoundary",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#errorboundary",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In each directory under ",(0,r.jsx)(n.code,{children:"routes/"}),", developers can also define an ",(0,r.jsx)(n.code,{children:"error.tsx"})," file that exports an ",(0,r.jsx)(n.code,{children:"<ErrorBoundary>"})," component by default."]}),"\n",(0,r.jsxs)(n.p,{children:["When this component exists in the routes directory, any rendering errors will be caught by the ",(0,r.jsx)(n.code,{children:"ErrorBoundary"})," component. When the ",(0,r.jsx)(n.code,{children:"layout.tsx"})," file is not defined in the directory, the ",(0,r.jsx)(n.code,{children:"<ErrorBoundary>"})," component will not take effect."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"<ErrorBoundary>"})," can return the UI view when an error occurs. When the ",(0,r.jsx)(n.code,{children:"<ErrorBoundary>"})," component is not declared in the current level, the error will bubble up to a higher-level component until it is caught or thrown. At the same time, when a component has an error, it will only affect the route component and its child components that catch the error. The status and view of other components are not affected and can continue to interact."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"<ErrorBoundary>"})," component, you can use ",(0,r.jsx)(n.a,{href:"/apis/app/runtime/router/router#userouteerror",children:"useRouteError"})," to get specific information about the error:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useRouteError } from '@modern-js/runtime/router';\nexport const ErrorBoundary = () => {\n  const error = useRouteError();\n  return (\n    <div>\n      <h1>{error.status}</h1>\n      <h2>{error.message}</h2>\n    </div>\n  );\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"runtime-configuration",children:["Runtime Configuration",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtime-configuration",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In each root ",(0,r.jsx)(n.code,{children:"Layout"})," component (",(0,r.jsx)(n.code,{children:"routes/layout.ts"}),"), you can dynamically define runtime configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"// Define runtime config\nimport type { AppConfig } from '@modern-js/runtime';\n\nexport const config = (): AppConfig => {\n  return {\n    router: {\n      createRoutes() {\n        return [\n          {\n            path: 'modern',\n            element: <div>modern</div>,\n          },\n        ];\n      },\n    },\n  };\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"hooks-before-rendering",children:["Hooks Before Rendering",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hooks-before-rendering",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In some scenarios, you may need to perform some operations before rendering the application. You can define an ",(0,r.jsx)(n.code,{children:"init"})," hook in ",(0,r.jsx)(n.code,{children:"routes/layout.tsx"}),". The ",(0,r.jsx)(n.code,{children:"init"})," hook will be executed on both the client and server side. A basic example of usage is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/layout.tsx"',children:"import type { RuntimeContext } from '@modern-js/runtime';\n\nexport const init = (context: RuntimeContext) => {\n  // do something\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By using the ",(0,r.jsx)(n.code,{children:"init"})," hook, you can mount some global data, and the ",(0,r.jsx)(n.code,{children:"runtimeContext"})," variable can be accessed in other parts of the application:"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"This feature is very useful when the application needs pre-rendered data, custom data injection, or framework migration (such as Next.js)."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/layout.tsx"',children:"import { RuntimeContext } from '@modern-js/runtime';\n\nexport const init = (context: RuntimeContext) => {\n  return {\n    message: 'Hello World',\n  };\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:"import { useRuntimeContext } from '@modern-js/runtime';\n\nexport default () => {\n  const { context } = useRuntimeContext();\n  const { message } = context.getInitData();\n\n  return <div>{message}</div>;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When used with the SSR feature, the data returned by the ",(0,r.jsx)(n.code,{children:"init"})," hook during SSR can be obtained on the client side. Developers can decide whether to re-fetch data on the client side to overwrite the SSR data. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import { RuntimeContext } from '@modern-js/runtime';\n\nexport const init = (context: RuntimeContext) => {\n  if (process.env.MODERN_TARGET === 'node') {\n    return {\n      message: 'Hello World By Server',\n    };\n  } else {\n    const { context } = runtimeContext;\n    const data = context.getInitData();\n    // If do not get the expected data\n    if (!data.message) {\n      return {\n        message: 'Hello World By Client',\n      };\n    }\n  }\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"preloading",children:["Preloading",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#preloading",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"In conventional routing, Modern.js automatically splits routes into chunks based on the route. When a user visits a specific route, the corresponding chunk will be loaded automatically, effectively reducing the loading time of the initial screen."}),"\n",(0,r.jsx)(n.p,{children:"However, this also brings a problem: if the chunk corresponding to the route has not finished loading when the user visits the route, a white screen will appear."}),"\n",(0,r.jsxs)(n.p,{children:["In this case, you can define a ",(0,r.jsx)(n.code,{children:"Loading"})," component to display a custom ",(0,r.jsx)(n.code,{children:"Loading"})," component before the static resources are loaded."]}),"\n",(0,r.jsxs)(n.p,{children:["To further improve the user experience and reduce loading time, Modern.js supports defining the ",(0,r.jsx)(n.code,{children:"prefetch"})," attribute on the Link component to preload static resources and data. The ",(0,r.jsx)(n.code,{children:"prefetch"})," attribute has three optional values:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'<Link prefetch="intent" to="page">\n'})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This feature is currently only supported in Webpack projects and not yet supported in Rspack projects."}),"\n",(0,r.jsxs)(n.li,{children:["Preloading data currently only preloads the data returned by the ",(0,r.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"Data Loader"})," in SSR projects."]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"none"}),": default value, no prefetching, no additional behavior."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"intent"}),": This is the value we recommend for most scenarios. When you hover over the Link, the corresponding chunk and data defined in the data loader will be loaded automatically. When you move the mouse away, the loading will be cancelled automatically. In our tests, even fast clicks can reduce loading time by about 200ms."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"render"}),": The corresponding chunk and data defined in the Data Loader will be loaded when the Link component is rendered."]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"faq",children:["FAQ",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#faq",children:"#"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["What is the difference between using ",(0,r.jsx)(n.code,{children:"render"})," and not splitting static resources based on the route?"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["By using ",(0,r.jsx)(n.code,{children:"render"}),", you can specify which routes to load during the initial screen, and you can control the rendering so that only when the ",(0,r.jsx)(n.code,{children:"Link"})," component enters the visible area, the ",(0,r.jsx)(n.code,{children:"Link"})," component will be rendered."]}),"\n",(0,r.jsxs)(n.li,{children:["By using ",(0,r.jsx)(n.code,{children:"render"}),", static resources will only be loaded when the system is idle, and will not compete with the static resources of the initial screen for network resources."]}),"\n",(0,r.jsx)(n.li,{children:"In the SSR scenario, data will also be pre-fetched."}),"\n"]}),"\n","\n",(0,r.jsx)(s.default,{}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"self-controlled-routing",children:["Self-controlled Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#self-controlled-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["With ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," as the convention for entry points, Modern.js will not perform any additional routing operations. Developers can use the API of ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/main",target:"_blank",rel:"noopener noreferrer",children:"React Router 6"})," for development, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/App.tsx"',children:"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\n\nexport default () => {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route index element={<div>index</div>} />\n        <Route path=\"about\" element={<div>about</div>} />\n      </Routes>\n    </BrowserRouter>\n  );\n};\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"Modern.js provides a series of optimizations for resource loading and rendering for conventional routing by default, and provides out-of-the-box SSR capabilities. When using self-controlled routing, developers need to encapsulate these capabilities themselves. It is recommended to use conventional routing."})})]}),"\n",(0,r.jsxs)(n.p,{children:["When using self-controlled routing, if the developer turns off the ",(0,r.jsx)(n.a,{href:"/configure/app/runtime/router",children:(0,r.jsx)(n.code,{children:"runtime.router"})})," configuration and uses ",(0,r.jsx)(n.code,{children:"react-router-dom"})," directly, they also need to wrap it according to the React Router documentation."]}),"\n",(0,r.jsxs)(n.h2,{id:"other",children:["Other",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#other",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"By default, Modern.js will enable the built-in routing scheme, which is React Router."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  runtime: {\n    router: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js exposes the API of React Router from the ",(0,r.jsx)(n.code,{children:"@modern-js/runtime/router"})," namespace for developers to use, ensuring that developers and Modern.js use the same code. In addition, in this case, the React Router code will be bundled into the JS output. If the project already has its own routing scheme or does not need to use client-side routing, this feature can be turned off."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  runtime: {\n    router: false,\n  },\n});\n"})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);