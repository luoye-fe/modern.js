(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_micro-frontend_c03-main-app_mdx"],{85811:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return l},title:function(){return t},toc:function(){return o},default:function(){return h}});var d=r("9880"),s=r("23169"),i=r.ir(r("58627")),a=r.ir(r("73052")),l={sidebar_position:3,title:"开发主应用"},t="开发主应用",o=[{text:"注册子应用信息",depth:2,id:"注册子应用信息"},{text:"直接注册子应用信息",depth:3,id:"直接注册子应用信息"},{text:"自定义远程应用列表",depth:3,id:"自定义远程应用列表"},{text:"渲染子应用",depth:2,id:"渲染子应用"},{text:"子应用组件",depth:3,id:"子应用组件"},{text:"集中式路由",depth:3,id:"集中式路由"},{text:"两种模式混用",depth:3,id:"两种模式混用"},{text:"添加 loading",depth:3,id:"添加-loading"},{text:"增加错误状态",depth:4,id:"增加错误状态"},{text:"避免 loading 闪退",depth:4,id:"避免-loading-闪退"},{text:"增加超时状态",depth:4,id:"增加超时状态"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",div:"div",pre:"pre",ol:"ol",li:"li",strong:"strong",ul:"ul",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"开发主应用",children:["开发主应用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开发主应用",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["在上一章 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/micro-frontend/c02-development",children:"体验微前端"})," 通过一个示例演示了如何创建和配置微前端子应用，通过本章你可以进一步了解如何开发主应用，以及它的常见配置。"]}),"\n",(0,d.jsxs)(n.p,{children:["在通过 ",(0,d.jsx)(n.code,{children:"@modern-js/create"})," 命令创建应用工程后，可以在项目中执行 ",(0,d.jsx)(n.code,{children:"pnpm run new"}),"（实际执行了 ",(0,d.jsx)(n.code,{children:"modern new"})," 命令），在选择了「微前端」模式后，会安装微前端依赖依赖，只需手动注册插件即可。"]}),"\n","\n",(0,d.jsx)(i.default,{}),"\n",(0,d.jsxs)(n.h2,{id:"注册子应用信息",children:["注册子应用信息",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注册子应用信息",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["当在 ",(0,d.jsx)(n.code,{children:"masterApp"})," 配置上提供了信息后，将会认为该应用为主应用，目前存在两种子应用信息的配置方式，这两种方式分别应用于不同的场景。"]}),"\n",(0,d.jsxs)(n.h3,{id:"直接注册子应用信息",children:["直接注册子应用信息",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#直接注册子应用信息",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"可以直接通过配置注册子应用信息："}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"提示"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["可以通过 API ",(0,d.jsx)(n.a,{href:"/apis/app/runtime/app/define-config",children:"defineConfig"})," 在运行时进行配置。\n当参数为函数时无法被序列化到产物代码，所以在涉及到函数之类的配置时请通过 defineConfig 来进行配置"]}),"\n"]})]}),"\n","\n",(0,d.jsx)(a.default,{}),"\n",(0,d.jsxs)(n.h3,{id:"自定义远程应用列表",children:["自定义远程应用列表",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义远程应用列表",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"通过该函数可以拉取远程的子应用列表，并将其注册至运行时框架："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"defineConfig(App, {\n  masterApp: {\n    manifest: {\n      getAppList: async () => {\n        // 可以从其他远程接口获取\n        return [{\n          name: 'Table',\n          entry: 'http://localhost:8001',\n          // activeWhen: '/table'\n        }, {\n          name: 'Dashboard',\n          entry: 'http://localhost:8002'\n          // activeWhen: '/dashboard'\n        }];\n      },\n    },\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"渲染子应用",children:["渲染子应用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#渲染子应用",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"在微前端中分为两种加载子应用的方式："}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"子应用组件"})," 获取到每个子应用的组件，之后就可以像使用普通的 ",(0,d.jsx)(n.code,{children:"React"})," 组件一样渲染微前端的子应用。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"集中式路由"})," 通过集中式的路由配置，自动根据当前页面 ",(0,d.jsx)(n.code,{children:"pathname"})," 激活渲染对应的子应用。"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"子应用组件",children:["子应用组件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#子应用组件",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["开发者使用 ",(0,d.jsx)(n.code,{children:"useModuleApps"})," 方法可以获取到各个子应用的组件。"]}),"\n",(0,d.jsxs)(n.p,{children:["再通过 ",(0,d.jsx)(n.code,{children:"router"})," 组件的结合运用，开发者可以自控式的根据不同的路由渲染不同的子应用。"]}),"\n",(0,d.jsx)(n.p,{children:"假设我们的子应用列表配置如下："}),"\n",(0,d.jsx)(i.default,{}),"\n",(0,d.jsxs)(n.p,{children:["编辑主应用 ",(0,d.jsx)(n.code,{children:"App.tsx"})," 文件如下："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="App.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nimport { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, BrowserRouter, Link, Outlet } from '@modern-js/runtime/router';\n\nconst AppLayout = () => (\n  <>\n    <div><Link to={'/table'}>加载约定式路由子应用</Link></div>\n    <div><Link to={'/dashboard'}>加载自控式路由子应用</Link></div>\n    <div><Link to={'/'}>卸载子应用</Link></div>\n    <Outlet />\n  </>\n)\n\nexport default () => {\n  const { apps, MApp } = useModuleApps();\n\n  // 使用的不是 MApp 组件，需要使用 createBrowserRouter 来创建路由\n  const router = createBrowserRouter(\n    createRoutesFromElements(\n      <Route path=\"/\" element={<AppLayout />}>\n        {apps.map(app => {\n          const { Component } = app;\n          // 模糊匹配，path 需要写成类似 abc/* 的模式\n          return (\n            <Route\n              key={app.name}\n              path={`${app.name.toLowerCase()}/*`}\n              element={\n              <Component\n                loadable={{\n                  loading: ({ pastDelay, error }: any) => {\n                    if (error) {\n                      return <div>error: {error?.message}</div>;\n                    } else if (pastDelay) {\n                      return <div>loading</div>;\n                    } else {\n                      return null;\n                    }\n                  },\n                }}\n              />\n              }\n            />\n          )\n        })}\n      </Route>\n    )\n  );\n\n  return (\n    // 方法一：使用 MApp 自动根据配置的 activeWhen 参数加载子应用(本项目配置在 modern.config.ts 中)\n    // <BrowserRouter>\n    //   <MApp />\n    // </BrowserRouter>\n\n    // 方法二：手动写 Route 组件方式加载子应用，方便于需要鉴权等需要前置操作的场景\n    <>\n      <RouterProvider router={router} />\n    </>\n  );\n};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["这里通过 ",(0,d.jsx)(n.code,{children:"Route"})," 组件自定义了 ",(0,d.jsx)(n.strong,{children:"Table"})," 的激活路由为 ",(0,d.jsx)(n.strong,{children:"/table"}),"， ",(0,d.jsx)(n.strong,{children:"Dashboard"})," 的激活路由为 ",(0,d.jsx)(n.strong,{children:"/dashboard"}),"。"]}),"\n",(0,d.jsxs)(n.h3,{id:"集中式路由",children:["集中式路由",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#集中式路由",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"集中式路由"})," 是将子应用的激活路由集中配置的方式。我们给子应用列表信息添加 ",(0,d.jsx)(n.code,{children:"activeWhen"})," 字段来启用 ",(0,d.jsx)(n.strong,{children:"集中式路由"}),"。"]}),"\n",(0,d.jsx)(a.default,{}),"\n",(0,d.jsxs)(n.p,{children:["然后在主应用中使用 ",(0,d.jsx)(n.code,{children:"useModuleApp"})," 方法获取 ",(0,d.jsx)(n.code,{children:"MApp"})," 组件, 并在主应用渲染 ",(0,d.jsx)(n.code,{children:"MApp"}),"。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",meta:"title=主应用：App.tsx",children:"import { useModuleApp } from '@modern-js/plugin-garfish/runtime';\n\nfunction App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp />\n    </div>\n  );\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["这样启动应用后，访问 ",(0,d.jsx)(n.code,{children:"/table"})," 路由，会渲染 ",(0,d.jsx)(n.code,{children:"Table"})," 子应用，访问 ",(0,d.jsx)(n.code,{children:"/dashboard"})," 路由，会渲染 ",(0,d.jsx)(n.code,{children:"Dashboard"})," 子应用。"]}),"\n",(0,d.jsxs)(n.h3,{id:"两种模式混用",children:["两种模式混用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#两种模式混用",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["当然 ",(0,d.jsx)(n.strong,{children:"子应用组件"})," 和 ",(0,d.jsx)(n.strong,{children:"集中式路由"})," 是可以混合使用的。"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["一部分子应用作为 ",(0,d.jsx)(n.strong,{children:"子应用组件"})," 激活，另外一部分作为 ",(0,d.jsx)(n.strong,{children:"集中式路由"})," 激活。"]}),"\n",(0,d.jsxs)(n.li,{children:["一部分子应用既可以作为 ",(0,d.jsx)(n.strong,{children:"集中式路由"})," 激活，也可以作为 ",(0,d.jsx)(n.strong,{children:"子应用组件"})," 激活。"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"添加-loading",children:["添加 loading",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加-loading",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["通过配置 ",(0,d.jsx)(n.code,{children:"loadable"})," 配置，可以为「集中式路由」、「子应用」添加 loading 组件，并可以考虑错误、超时、闪烁等情况的出现，从而为用户提供更好的用户体验。该功能的设计与实现参考至 ",(0,d.jsx)(n.a,{href:"https://github.com/jamiebuilds/react-loadable",target:"_blank",rel:"noopener noreferrer",children:"react-loadable"}),"，基本功能较为相似。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"function Loading() {\n  return <div>Loading...</div>;\n}\n\nfunction App(){\n  return <>\n    <Table\n      loadable={{\n        loading: Loading,\n      }}\n    />\n  <>\n}\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"增加错误状态",children:["增加错误状态",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#增加错误状态",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["当微前端子应用加载失败或渲染失败时，",(0,d.jsx)(n.code,{children:"loading component"})," 将会接收 ",(0,d.jsx)(n.code,{children:"error"})," 参数（若没有错误时 error 是 null）"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"function Loading({ error }) {\n  if (error) {\n    return <div>Error msg {error?.message}</div>;\n  } else {\n    return <div>Loading...</div>;\n  }\n}\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"避免-loading-闪退",children:["避免 loading 闪退",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#避免-loading-闪退",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"有时 loading 组件的显示时间可能小于 200ms，这个时候会出现 loading 组件闪退的情况。许多用户研究证明，loading 闪退的情况会导致用户感知加载内容的耗时比实际耗时更长，在 loading 小于 200ms 时，不展示内容，用户会认为它更快。"}),"\n",(0,d.jsxs)(n.p,{children:["所以 loading 组件还提供了 ",(0,d.jsx)(n.code,{children:"pastDelay"})," 参数，超过设置的延迟展示时才会为 true，可以通过 ",(0,d.jsx)(n.code,{children:"delay"})," 参数设置延迟的时长"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"function Loading({ error, pastDelay }) {\n  if (error) {\n    return <div>Error! {error?.message}</div>;\n  } else if (pastDelay) {\n    return <div>Loading...</div>;\n  } else {\n    return null;\n  }\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"delay"})," 的默认值为 ",(0,d.jsx)(n.code,{children:"200ms"}),"，可以通过 ",(0,d.jsx)(n.code,{children:"loadable"})," 中的 ",(0,d.jsx)(n.code,{children:"delay"})," 来设置延迟展示的时间"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"\nfunction App(){\n  return <>\n    <Table\n      loadable={{\n        loading: Loading,\n        delay: 300 // 0.3 seconds\n      }}\n    />\n  <>\n}\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"增加超时状态",children:["增加超时状态",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#增加超时状态",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"有时因为网络的原因，从而导致微前端子应用加载失败，从而导致一直展示 loading 的状态，这对于用户而言非常糟糕，因为他们不知道合适才会获得具体的响应，他们是否需要刷新页面，通过增加超时状态可以很好的解决该问题。"}),"\n",(0,d.jsxs)(n.p,{children:["loading 组件在超时时会获得 ",(0,d.jsx)(n.code,{children:"timeOut"})," 参数，当微前端应用加载超时时将会获得 ",(0,d.jsx)(n.code,{children:"timeOut"})," 属性值为 true"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"function Loading({ error, timeOut, pastDelay }) {\n  if (error) {\n    return <div>Error! {error?.message}</div>;\n  } else if (timeOut) {\n    return <div>Loading timed out, please refresh the page... </div>;\n  } else if (pastDelay) {\n    return <div>Loading...</div>;\n  } else {\n    return null;\n  }\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["超时状态是关闭的，可以通过在 ",(0,d.jsx)(n.code,{children:"loadable"})," 中设置 ",(0,d.jsx)(n.code,{children:"timeout"})," 参数开启"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"\nfunction App(){\n  return <>\n    <Table\n      loadable={{\n        loading: Loading,\n        timeOut: 10000 // 10s\n      }}\n    />\n  <>\n}\n"})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}}}]);