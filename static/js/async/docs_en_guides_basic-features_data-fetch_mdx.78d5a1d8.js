(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_basic-features_data-fetch_mdx"],{22665:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return o},toc:function(){return d},default:function(){return c}});var s=r("9880"),t=r("23169"),a={title:"Fetch Data",sidebar_position:3},o="Fetch Data",d=[{text:"Data loader(recommend)",depth:2,id:"data-loader(recommend)"},{text:"Basic example",depth:3,id:"basic-example"},{text:"loader function",depth:3,id:"loader-function"},{text:"request",depth:4,id:"request"},{text:"Return value",depth:4,id:"return-value"},{text:"Request API",depth:3,id:"request-api"},{text:"Error handling",depth:3,id:"error-handling"},{text:"Get data from upper level components",depth:3,id:"get-data-from-upper-level-components"},{text:"(WIP)Loading UI",depth:3,id:"(wip)loading-ui"},{text:"Wrong usage",depth:3,id:"wrong-usage"},{text:"FAQ",depth:3,id:"faq"},{text:"useLoader(Old)",depth:2,id:"useloader(old)"},{text:"Route Loader",depth:2,id:"route-loader"}];function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",h3:"h3",pre:"pre",h5:"h5",h4:"h4",ol:"ol",li:"li",strong:"strong"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"fetch-data",children:["Fetch Data",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fetch-data",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js provides out of the box fetching data capabilities, developers can use these APIs to develop in CSR and SSR environments isomorphic."}),"\n",(0,s.jsx)(n.p,{children:"It should be noted that these APIs do not help applications to initiate requests, but help developers better manage the relationship between data and routing."}),"\n",(0,s.jsxs)(n.h2,{id:"data-loader(recommend)",children:["Data loader(recommend)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#data-loader(recommend)",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js recommends the use of conventional routing for route management. With Modern.js' ",(0,s.jsx)(n.a,{href:"/guides/basic-features/routes#conventional-routing",children:"conventional (nested) routing"}),", each routing component (",(0,s.jsx)(n.code,{children:"layout.ts"})," or ",(0,s.jsx)(n.code,{children:"page.ts"}),") can have a ",(0,s.jsx)(n.code,{children:"loader"})," file with the same name that can be executed before the component renders, providing data to the routing component."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["Modern.js v1 supports getting data by ",(0,s.jsx)(n.a,{href:"#useloaderold",children:"useLoader"}),", which is no longer the recommended usage and it is not recommended to mix both except for migration process."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"basic-example",children:["Basic example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["A routing component such as ",(0,s.jsx)(n.code,{children:"layout.ts"})," or ",(0,s.jsx)(n.code,{children:"page.ts"})," can define a ",(0,s.jsx)(n.code,{children:"loader"})," file with the same name. The ",(0,s.jsx)(n.code,{children:"loader"})," file exports a function that provides the data required by the component, which is then get data by the ",(0,s.jsx)(n.code,{children:"useLoaderData"})," function in the routing component, as in the following example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:".\n└── routes\n    ├── layout.tsx\n    └── user\n        ├── layout.tsx\n        ├── layout.loader.ts\n        ├── page.tsx\n        └── page.loader.ts\n"})}),"\n",(0,s.jsx)(n.p,{children:"Define the following code in the file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="routes/user/page.tsx"',children:"import { useLoaderData } from '@modern-js/runtime/router';\nimport type { ProfileData } from './page.loader.ts';\n\nexport default function UserPage() {\n  const profileData = useLoaderData() as ProfileData;\n  return <div>{profileData}</div>;\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="routes/user/page.loader.ts"',children:"export type ProfileData = {\n  /*  some types */\n};\n\nexport default async (): Promise<ProfileData> => {\n  const res = await fetch('https://api/user/profile');\n  return await res.json();\n};\n"})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive caution",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["Here the routing component and the ",(0,s.jsx)(n.code,{children:"loader"})," file share a type, should use the ",(0,s.jsx)(n.code,{children:"import type"})," syntax."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["In a CSR environment, the ",(0,s.jsx)(n.code,{children:"loader"})," function is executed on the client side, and the browser API can be used within the ",(0,s.jsx)(n.code,{children:"loader"})," function (but it is usually not needed and not recommended)."]}),"\n",(0,s.jsxs)(n.p,{children:["In an SSR environment, the ",(0,s.jsx)(n.code,{children:"loader"})," function will only be executed on the server side, regardless of the first screen or the navigation on the client side, where any Node.js API can be called, and any dependencies and code used here will not be included in the client bundle."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["In later versions, Modern.js may support ",(0,s.jsx)(n.code,{children:"loader"})," functions running on the server side as well in CSR environments to improve performance and security, so here it is recommended to keep the loader as pure as possible and only do data fetching scenarios."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["When navigating on the client side, all loader functions under ",(0,s.jsx)(n.code,{children:"/user"})," and ",(0,s.jsx)(n.code,{children:"/user/profile"})," are executed (requested) in parallel based on Modern.js's ",(0,s.jsx)(n.a,{href:"/guides/basic-features/routes",children:"conventional routing"}),", i.e. when accessing ",(0,s.jsx)(n.code,{children:"/user/profile"}),", the loader functions under ",(0,s.jsx)(n.code,{children:"/user"})," and ",(0,s.jsx)(n.code,{children:"/user/profile"})," are executed (requested) in parallel to improve client-side performance."]}),"\n",(0,s.jsxs)(n.h3,{id:"loader-function",children:[(0,s.jsx)(n.code,{children:"loader"})," function",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loader-function",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"loader"})," function has two input parameters:"]}),"\n",(0,s.jsxs)(n.h5,{id:"params",children:[(0,s.jsx)(n.code,{children:"Params"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When a routing file is passed through ",(0,s.jsx)(n.code,{children:"[]"}),", it is passed as a ",(0,s.jsx)(n.a,{href:"/guides/basic-features/routes#dynamic-route",children:"dynamic route"})," and the dynamic route fragment is passed as an argument to the loader function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// routes/user/[id]/page.loader.tsx\nimport { LoaderFunctionArgs } from '@modern-js/runtime/router';\n\nexport default async ({ params }: LoaderFunctionArgs) => {\n  const { id } = params;\n  const res = await fetch(`https://api/user/${id}`);\n  return res.json();\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When accessing ",(0,s.jsx)(n.code,{children:"/user/123"}),", the parameters of the ",(0,s.jsx)(n.code,{children:"loader"})," function are ",(0,s.jsx)(n.code,{children:"{ params: { id: '123' } }"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"request",children:[(0,s.jsx)(n.code,{children:"request"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#request",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"request"})," is a ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request",target:"_blank",rel:"noopener noreferrer",children:"Fetch Request"})," instance."]}),"\n",(0,s.jsxs)(n.p,{children:["A common usage scenario is to obtain query parameters via ",(0,s.jsx)(n.code,{children:"request"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// routes/user/[id]/page.loader.ts\nimport { LoaderFunctionArgs } from '@modern-js/runtime/router';\n\nexport default async ({ request }: LoaderFunctionArgs) => {\n  const url = new URL(request.url);\n  const userId = url.searchParams.get('id');\n  return queryUser(userId);\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"return-value",children:["Return value",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The return value of the ",(0,s.jsx)(n.code,{children:"loader"})," function can be anything serializable, or it can be a ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Response",target:"_blank",rel:"noopener noreferrer",children:"Fetch Response"})," instance:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const loader = async (): Promise<ProfileData> => {\n  return {\n    message: 'hello world',\n  };\n};\nexport default loader;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, the response ",(0,s.jsx)(n.code,{children:"Content-type"})," returned by ",(0,s.jsx)(n.code,{children:"loader"})," is ",(0,s.jsx)(n.code,{children:"application/json"})," and ",(0,s.jsx)(n.code,{children:"status"})," is 200, which you can set by customizing ",(0,s.jsx)(n.code,{children:"Response"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const loader = async (): Promise<ProfileData> => {\n  const data = { message: 'hello world' };\n  return new Response(JSON.stringify(data), {\n    status: 200,\n    headers: {\n      'Content-Type': 'application/json; utf-8',\n    },\n  });\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"request-api",children:["Request API",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#request-api",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js does a polyfill of the ",(0,s.jsx)(n.code,{children:"fetch"})," API to initiate requests, which is consistent with the browser's ",(0,s.jsx)(n.code,{children:"fetch"})," API, but can also be used on the server side to initiate requests, meaning that both CSRs and SSRs can use the unified ",(0,s.jsx)(n.code,{children:"fetch"})," API for data fetching:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function loader() {\n  const res = await fetch('https://api/user/profile');\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"error-handling",children:["Error handling",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#error-handling",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"loader"})," function, errors can be handled by ",(0,s.jsx)(n.code,{children:"throw error"})," or ",(0,s.jsx)(n.code,{children:"throw response"}),". When an error is thrown in the ",(0,s.jsx)(n.code,{children:"loader"})," function, Modern.js will stop executing the code in the current loader and switch the front-end UI to the defined ",(0,s.jsx)(n.a,{href:"/guides/basic-features/routes#errorboundary",children:(0,s.jsx)(n.code,{children:"ErrorBoundary"})})," component."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// routes/user/profile/page.loader.tsx\nexport default async function loader() {\n  const res = await fetch('https://api/user/profile');\n  if (!res.ok) {\n    throw res;\n  }\n  return res.json();\n}\n\n// routes/user/profile/error.tsx\nimport { useRouteError } from '@modern-js/runtime/router';\nconst ErrorBoundary = () => {\n  const error = useRouteError() as Response;\n  return (\n    <div>\n      <h1>{error.status}</h1>\n      <h2>{error.statusText}</h2>\n    </div>\n  );\n};\n\nexport default ErrorBoundary;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"get-data-from-upper-level-components",children:["Get data from upper level components",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#get-data-from-upper-level-components",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In many cases, the child component needs to access the data in the ancestor's loader, and you can easily access the ancestor's data with ",(0,s.jsx)(n.code,{children:"useRouteLoaderData"}),": ",(0,s.jsx)(n.code,{children:"useRouteLoaderData"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// routes/user/profile/page.tsx\nimport { useRouteLoaderData } from '@modern-js/runtime/router';\n\nexport default function UserLayout() {\n  // Get the data returned by the loader in routes/user/layout.loader.ts\n  const data = useRouteLoaderData('user/layout');\n  return (\n    <div>\n      <h1>{data.name}</h1>\n      <h2>{data.age}</h2>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"userRouteLoaderData"})," takes one parameter ",(0,s.jsx)(n.code,{children:"routeId"}),",When using conventional routing, Modern.js will automatically generate ",(0,s.jsx)(n.code,{children:"routeId"})," for you. The value of ",(0,s.jsx)(n.code,{children:"routeId"})," is the path of the corresponding component relative to ",(0,s.jsx)(n.code,{children:"src/routes"}),", as in the example above, the child component wants to get the data returned by the loader in ",(0,s.jsx)(n.code,{children:"routes/user/layout.tsx"}),", the value of ",(0,s.jsx)(n.code,{children:"routeId"})," is ",(0,s.jsx)(n.code,{children:"user/layout"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In a multi-entry (MPA) scenario, the value of ",(0,s.jsx)(n.code,{children:"routeId"})," needs to be added to the name of the corresponding entry, and the entry name is usually the entry directory name if not specified, such as the following directory structure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n└── src\n    ├── entry1\n    │     └── routes\n    │           └── layout.tsx\n    └── entry2\n          └── routes\n                └── layout.tsx\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to get the data returned by the loader in ",(0,s.jsx)(n.code,{children:"entry1/routes/layout.tsx"}),", the value of ",(0,s.jsx)(n.code,{children:"routeId"})," is ",(0,s.jsx)(n.code,{children:"entry1_layout"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"(wip)loading-ui",children:["(WIP)Loading UI",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#(wip)loading-ui",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"This feature is currently experimental and the API may be adjusted in the future."}),(0,s.jsx)(n.p,{children:"Currently, only CSR is supported, so stay tuned for Streaming SSR."}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Add the following code to ",(0,s.jsx)(n.code,{children:"user/layout.loader.ts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="routes/user/layout.loader.ts"',children:"import { defer } from \"@modern-js/runtime/router\"\n\nconst loader = () =>\ndefer({\n  userInfo: new Promise((resolve) => {\n      setTimeout(() => {\n        resolve({\n          age: 1,\n          name: 'user layout'\n        })\n      }, 1000)\n    })\n  })\n\nexport default loader;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Add the following code to ",(0,s.jsx)(n.code,{children:"user/layout.tsx"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="routes/user/layout.tsx"',children:"import {\n  Await,\n  defer,\n  useLoaderData,\n  Outlet\n} from '@modern-js/runtime/router';\n\nexport default function UserLayout() {\n  const { userInfo } = useLoaderData() as {userInfo: Promise<UserInfo>};\n  return (\n    <div>\n      <React.Suspense\n        fallback={<p>Loading...</p>}\n      >\n        <Await resolve={userInfo} children={userInfo => (\n          <div>\n            <span>{userInfo.name}</span>\n            <span>{userInfo.age}</span>\n            <Outlet>\n          </div>\n        )}>\n        </Await>\n      </React.Suspense>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["For specific usage of the Await component, see ",(0,s.jsx)(n.a,{href:"/guides/basic-features/routes#await",children:"Await"})]}),"\n",(0,s.jsxs)(n.p,{children:["For specific usage of the defer function, see",(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/guides/deferred",target:"_blank",rel:"noopener noreferrer",children:"defer"})]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"wrong-usage",children:["Wrong usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#wrong-usage",children:"#"})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Only serializable data can be returned in ",(0,s.jsx)(n.code,{children:"loader"}),". In SSR environments, the return value of the ",(0,s.jsx)(n.code,{children:"loader"})," function is serialized to a JSON string, which is then deserialized to an object on the client side. Therefore, no non-serializable data (such as functions) can be returned in the ",(0,s.jsx)(n.code,{children:"loader"})," function."]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive warning",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"This restriction is not currently in place under CSR, but we strongly recommend that you follow it, and we may add it under CSR in the future."}),"\n"]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// This won't work!\nexport default () => {\n  return {\n    user: {},\n    method: () => {},\n  };\n};\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Modern.js will call the ",(0,s.jsx)(n.code,{children:"loader"})," function for you, you shouldn't call it yourself in the component."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// This won't work!\nexport default async () => {\n  const res = fetch('https://api/user/profile');\n  return res.json();\n};\n\nimport loader from './page.loader.ts';\nexport default function RouteComp() {\n  const data = loader();\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["You cannot import a ",(0,s.jsx)(n.code,{children:"loader"})," file from a routing component, nor can you import variables in a routing component from a ",(0,s.jsx)(n.code,{children:"loader"})," file:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Not allowed\n// routes/layout.tsx\nimport { useLoaderData } from '@modern-js/runtime/router';\nimport { ProfileData } from './page.loader.ts'; // should use \"import type\" instead\n\nexport const fetch = wrapFetch(fetch);\n\nexport default function UserPage() {\n  const profileData = useLoaderData() as ProfileData;\n  return <div>{profileData}</div>;\n}\n\n// routes/layout.loader.ts\nimport { fetch } from './layout.tsx'; // should not be imported from the routing component\nexport type ProfileData = {\n  /*  some types */\n};\n\nexport default async (): Promise<ProfileData> => {\n  const res = await fetch('https://api/user/profile');\n  return await res.json();\n};\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["When run on the server side, the ",(0,s.jsx)(n.code,{children:"loader"})," functions are packaged into a single bundle, so we do not recommend using ",(0,s.jsx)(n.code,{children:"__filename"})," and ",(0,s.jsx)(n.code,{children:"__dirname"})," for server-side code."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"faq",children:["FAQ",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#faq",children:"#"})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Relationship between loader and BFF functions"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In a CSR project, the loader is executed on the client side and the bff function can be called directly in the loader to make a request."}),"\n",(0,s.jsxs)(n.p,{children:["In an SSR project, each loader is also a server-side API, and we recommend using loader instead of the BFF function which http method is ",(0,s.jsx)(n.code,{children:"get"})," to avoid one more layer of forwarding and execution."]}),"\n",(0,s.jsxs)(n.h2,{id:"useloader(old)",children:["useLoader(Old)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useloader(old)",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"useLoader"})})," is an API in Modern.js old version. The API is a React Hook specially provided for SSR applications, allowing developers to fetch data in components."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["CSR don't need to use ",(0,s.jsx)(n.code,{children:"useLoader"})," to fetch data."]}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"Here is the simplest example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useLoader } from '@modern-js/runtime';\n\nexport default () => {\n  const { data } = useLoader(async () => {\n    console.log('fetch in useLoader');\n\n    // No real request is sent here, just a hard coding data is returned.\n    // In a real project, the data obtained from the remote end should be returned.\n    return {\n      name: 'Modern.js',\n    };\n  });\n\n  return <div>Hello, {data?.name}</div>;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"After the above code starts, visit the page. You can see that the log is printed at terminal, but not at console in browser."}),"\n",(0,s.jsxs)(n.p,{children:["This is because Modern.js server-side rendering, the data returned by the ",(0,s.jsx)(n.code,{children:"useLoader"})," is collected and injected into the HTML of the response. If SSR rendering succeeds, the following code snippet can be seen in the HTML:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<script>\n  window._SSR_DATA = {};\n</script>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this global variable, every piece of data is recorded, and this data will be used first in the process of rendering on the browser side. If the data does not exist, the ",(0,s.jsx)(n.code,{children:"useLoader"})," function will be re-executed."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["During the build phase, Modern.js will automatically generate a Loader ID for each ",(0,s.jsx)(n.code,{children:"useLoader"})," and inject it into the JS bundle of SSR and CSR, which is used to associate Loader and data."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Compared with ",(0,s.jsx)(n.code,{children:"getServerSideProps"})," in the Next.js, get data in advance before rendering. Using ",(0,s.jsx)(n.code,{children:"useLoader"}),", you can get the data required by the local UI in the component without passing the data layer by layer. Similarly, it will not add redundant logic to the outermost data acquisition function because different routes require different data requests. Of course, ",(0,s.jsx)(n.code,{children:"useLoader"})," also has some problems, such as the difficulty of Treeshaking server-level code, and the need for one more pre-render at the server level."]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js in the new version, a new Loader solution is designed. The new solution solves these problems and can cooperate with ",(0,s.jsx)(n.strong,{children:"nested routing"})," to optimize page performance."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["Detailed APIs can be found at ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/core/use-loader",children:"useLoader"}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"route-loader",children:["Route Loader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#route-loader",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"Stay tuned."}),"\n"]})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);