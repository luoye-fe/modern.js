(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_micro-frontend_c02-development_mdx"],{124:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s=r("9880"),d=r("23169");function i(e){var n=Object.assign({pre:"pre",code:"code"},(0,d.useMDXComponents)(),e.components);return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? 请选择你想创建的工程类型：Web 应用\n? 请选择开发语言：TS\n? 请选择包管理工具：pnpm\n"})})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},25227:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return h},toc:function(){return t},default:function(){return j}});var s=r("9880"),d=r("23169"),i=r.ir(r("124")),c=r.ir(r("19511")),l=r.ir(r("59497")),a={sidebar_position:2,title:"体验微前端"},h="体验微前端",t=[{text:"创建应用",depth:2,id:"创建应用"},{text:"创建约定式路由主应用",depth:3,id:"创建约定式路由主应用"},{text:"加载约定式路由子应用",depth:4,id:"加载约定式路由子应用"},{text:"加载自控式路由子应用",depth:4,id:"加载自控式路由子应用"},{text:"路由跳转",depth:4,id:"路由跳转"},{text:"创建自控式路由主应用",depth:3,id:"创建自控式路由主应用"},{text:"加载子应用",depth:4,id:"加载子应用"},{text:"创建约定式路由子应用",depth:3,id:"创建约定式路由子应用"},{text:"创建自控式路由子应用",depth:3,id:"创建自控式路由子应用"},{text:"调试",depth:2,id:"调试"},{text:"Modern.js 微前端和直接使用 Garfish 的区别",depth:2,id:"modernjs-微前端和直接使用-garfish-的区别"},{text:"常见问题",depth:2,id:"常见问题"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre",code:"code",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"体验微前端",children:["体验微前端",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#体验微前端",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"通过本章你可以了解到："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"如何创建微前端项目的主应用、子应用。"}),"\n",(0,s.jsx)(n.li,{children:"微前端项目开发的基本流程。"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"创建应用",children:["创建应用",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建应用",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"目前支持两种路由模式"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"自控式路由"}),"\n",(0,s.jsx)(n.li,{children:"约定式路由"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["首先明确主应用的路由模式 ",(0,s.jsx)(n.a,{href:"#%E5%88%9B%E5%BB%BA%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1%E4%B8%BB%E5%BA%94%E7%94%A8",children:"创建约定式路由主应用"})," 或 ",(0,s.jsx)(n.a,{href:"#%E5%88%9B%E5%BB%BA%E8%87%AA%E6%8E%A7%E5%BC%8F%E8%B7%AF%E7%94%B1%E4%B8%BB%E5%BA%94%E7%94%A8",children:"创建自控式路由主应用"})]}),"\n",(0,s.jsx)(n.p,{children:"在本次体验中我们会为主应用创建两个子应用 Table 和 Dashboard (Table 为约定式路由，Dashboard 为自控式路由)"}),"\n",(0,s.jsxs)(n.h3,{id:"创建约定式路由主应用",children:["创建约定式路由主应用",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建约定式路由主应用",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"通过命令行工具初始化项目："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir masterApp && cd masterApp\nnpx @modern-js/create@latest\n"})}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.p,{children:["完成项目创建后我们可以通过 ",(0,s.jsx)(n.code,{children:"pnpm run new"})," 来开启 ",(0,s.jsx)(n.code,{children:"微前端"})," 功能："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 启用可选功能 启用「微前端」模式\n"})}),"\n",(0,s.jsx)(n.p,{children:"接下来，让我们注册微前端插件并添加开启微前端主应用，并增加子应用列表："}),"\n","\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsx)(n.p,{children:"然后我们在 routes 文件夹下新建两个目录"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"table (用于加载约定式路由子应用)"}),"\n",(0,s.jsx)(n.li,{children:"dashboard (用于加载自控式路由子应用)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["在这两个目录下我们需要新建一个 ",(0,s.jsx)(n.code,{children:"$.tsx"})," 文件作为主应用约定式路由的入口($ 代表模糊匹配，即 ",(0,s.jsx)(n.code,{children:"/table"})," 和 ",(0,s.jsx)(n.code,{children:"/table/test"})," 都会匹配到这个 ",(0,s.jsx)(n.code,{children:"$.tsx"})," 作为该路由的入口文件，这会保证在微前端场景下正确加载子应用路由)"]}),"\n",(0,s.jsxs)(n.h4,{id:"加载约定式路由子应用",children:["加载约定式路由子应用",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#加载约定式路由子应用",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="src/routes/table/$.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nconst Index = () => {\n  const { Table } = useModuleApps();\n\n  return (\n    <div>\n      <Table />\n    </div>\n  )\n}\n\nexport default Index;\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"加载自控式路由子应用",children:["加载自控式路由子应用",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#加载自控式路由子应用",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="src/routes/dashboard/$.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nconst Index = () => {\n  const { Dashboard } = useModuleApps();\n\n  return (\n    <div>\n      <Dashboard />\n    </div>\n  )\n}\n\nexport default Index;\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"路由跳转",children:["路由跳转",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#路由跳转",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["此时主应用配置已经完成，通过路由即可加载子应用，修改主应用的 ",(0,s.jsx)(n.code,{children:"layout.tsx"})," 来跳转路由"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="src/route/layout.tsx"',children:"import { Outlet, Link } from '@modern-js/runtime/router';\n\nconst Layout = () => (\n  <div>\n    <div><Link to={'/table'}>加载约定式路由子应用</Link></div>\n    <div><Link to={'/dashboard'}>加载自控式路由子应用</Link></div>\n    <div><Link to={'/'}>卸载子应用</Link></div>\n    <Outlet />\n  </div>\n);\n\nexport default Layout;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"创建自控式路由主应用",children:["创建自控式路由主应用",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建自控式路由主应用",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"通过命令行工具初始化项目："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir masterApp && cd masterApp\nnpx @modern-js/create@latest\n"})}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.p,{children:["完成项目创建后我们可以通过 ",(0,s.jsx)(n.code,{children:"pnpm run new"})," 来开启 ",(0,s.jsx)(n.code,{children:"微前端"})," 功能："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 启用可选功能 启用「微前端」模式\n"})}),"\n",(0,s.jsx)(n.p,{children:"接下来，让我们注册微前端插件并添加开启微前端主应用，并增加子应用列表："}),"\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsxs)(n.p,{children:["由于是自控式路由，我们删除掉 ",(0,s.jsx)(n.code,{children:"routes"})," 文件夹并在 ",(0,s.jsx)(n.code,{children:"src"})," 目录下增加 ",(0,s.jsx)(n.code,{children:"App.tsx"})," 文件，此处如果使用的 ",(0,s.jsx)(n.code,{children:"非 MApp"})," 组件，需要通过 ",(0,s.jsx)(n.code,{children:"React Router v6"})," 的 ",(0,s.jsx)(n.code,{children:"createBrowserRouter"})," API 来创建路由"]}),"\n",(0,s.jsxs)(n.h4,{id:"加载子应用",children:["加载子应用",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#加载子应用",children:"#"})]}),"\n","\n",(0,s.jsx)(l.default,{}),"\n",(0,s.jsxs)(n.h3,{id:"创建约定式路由子应用",children:["创建约定式路由子应用",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建约定式路由子应用",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"通过命令行工具初始化项目："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir table && cd table\nnpx @modern-js/create@latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"按照如下选择，生成项目："}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.p,{children:["我们执行 ",(0,s.jsx)(n.code,{children:"pnpm run new"})," 来开启 ",(0,s.jsx)(n.code,{children:"微前端"})," 功能："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 启用可选功能 启用「微前端」模式\n"})}),"\n",(0,s.jsxs)(n.p,{children:["接下来，让我们注册微前端插件并修改 ",(0,s.jsx)(n.code,{children:"modern.config.ts"}),"，添加微前端子应用的配置 ",(0,s.jsx)(n.code,{children:"deploy.microFrontend"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport garfishPlugin from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  dev: {\n    port: 8081\n  },\n  runtime: {\n    router: true,\n    state: true,\n  },\n  deploy: {\n    microFrontend: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["添加 ",(0,s.jsx)(n.code,{children:"src/routes/page.tsx"})," 代码"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="src/routes/page.tsx"',children:'const Index = () => {\n  return (\n    <div className="container-box">subApp: 约定式路由的子应用的根路由</div>\n  )\n}\n\nexport default Index;\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"创建自控式路由子应用",children:["创建自控式路由子应用",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建自控式路由子应用",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"通过命令行工具初始化项目："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir dashboard && cd dashboard\nnpx @modern-js/create@latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"按照如下选择，生成项目："}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.p,{children:["我们执行 ",(0,s.jsx)(n.code,{children:"pnpm run new"})," 来开启 ",(0,s.jsx)(n.code,{children:"微前端"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 启用可选功能 启用「微前端」模式\n"})}),"\n",(0,s.jsxs)(n.p,{children:["接下来，让我们注册微前端插件并修改 ",(0,s.jsx)(n.code,{children:"modern.config.ts"}),"，添加微前端子应用的配置 ",(0,s.jsx)(n.code,{children:"deploy.microFrontend"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport garfishPlugin from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  dev: {\n    port: 8082\n  },\n  runtime: {\n    router: true,\n    state: true,\n  },\n  deploy: {\n    microFrontend: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["自控式路由需要删除掉 ",(0,s.jsx)(n.code,{children:"routes"})," 文件夹并在 ",(0,s.jsx)(n.code,{children:"src"})," 目录下新建 ",(0,s.jsx)(n.code,{children:"App.tsx"})]}),"\n",(0,s.jsxs)(n.p,{children:["并在 ",(0,s.jsx)(n.code,{children:"src/App.tsx"})," 添加代码，注意需要从 ",(0,s.jsx)(n.code,{children:"props"})," 中解析并传递 ",(0,s.jsx)(n.code,{children:"basename"})," 给 ",(0,s.jsx)(n.code,{children:"BrowserRouter"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="src/App.tsx"',children:"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\n\nexport default (props: {basename: string}) => {\n  const { basename } = props;\n\n  return (\n    <BrowserRouter basename={basename}>\n      <Routes>\n        <Route index element={<div>自控式路由子应用根路由</div>} />\n        <Route path={'path'} element={<div>自控式路由子应用子路由</div>} />\n      </Routes>\n    </BrowserRouter>\n  );\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"调试",children:["调试",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#调试",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["按顺序在目录执行 ",(0,s.jsx)(n.code,{children:"pnpm run dev"})," 命令启动应用："]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["masterApp 主应用 ",(0,s.jsx)(n.code,{children:"http://localhost:8080"})]}),"\n",(0,s.jsxs)(n.li,{children:["table 子应用(约定式路由) ",(0,s.jsx)(n.code,{children:"http://localhost:8081"})]}),"\n",(0,s.jsxs)(n.li,{children:["dashboard 子应用(自控式路由) ",(0,s.jsx)(n.code,{children:"http://localhost:8082"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["访问主应用地址 ",(0,s.jsx)(n.code,{children:"http://localhost:8080"})]}),"\n",(0,s.jsxs)(n.p,{children:["在完成了微前端整体开发流程的体验后，你可以进一步了解如何 ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/micro-frontend/c03-main-app",children:"开发主应用"})]}),"\n",(0,s.jsxs)(n.h2,{id:"modernjs-微前端和直接使用-garfish-的区别",children:["Modern.js 微前端和直接使用 Garfish 的区别",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-微前端和直接使用-garfish-的区别",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["使用纯 ",(0,s.jsx)(n.code,{children:"Garfish"})," API 开发微前端应用时"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["主应用：","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["安装 Garfish 依赖并使用 ",(0,s.jsx)(n.code,{children:"Garfish.run"})," 注册子应用 ",(0,s.jsx)(n.a,{href:"https://www.garfishjs.org/api/run",target:"_blank",rel:"noopener noreferrer",children:"参考"})]}),"\n",(0,s.jsxs)(n.li,{children:["提供一个常驻的 ",(0,s.jsx)(n.code,{children:"DOM"})," 节点供子应用挂载 ",(0,s.jsx)(n.a,{href:"https://www.garfishjs.org/api/registerApp#domgetter",target:"_blank",rel:"noopener noreferrer",children:"参考"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["子应用：","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["导出 ",(0,s.jsx)(n.code,{children:"provider"})," ",(0,s.jsx)(n.a,{href:"https://www.garfishjs.org/guide/start#2%E5%AF%BC%E5%87%BA-provider-%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer",children:"参考"})]}),"\n",(0,s.jsxs)(n.li,{children:["设置应用的 ",(0,s.jsx)(n.code,{children:"basename"})," ",(0,s.jsx)(n.a,{href:"https://www.garfishjs.org/guide/start#3-%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E8%B7%AF%E7%94%B1-basename",target:"_blank",rel:"noopener noreferrer",children:"参考"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["区别于直接使用 ",(0,s.jsx)(n.code,{children:"Garfish"})," 运行时 API 开发微前端项目，",(0,s.jsx)(n.code,{children:"Modern.js"})," 的微前端方案更加开箱即用。\n使用 ",(0,s.jsx)(n.code,{children:"pnpm new"})," 启用微前端模式后会自动在 ",(0,s.jsx)(n.code,{children:"Modern.js"})," 应用中集成 ",(0,s.jsx)(n.code,{children:"Garfish"})," 插件，在 ",(0,s.jsx)(n.code,{children:"Garfish"}),"\n插件的加持下，你只需要"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["主应用：","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["配置 ",(0,s.jsx)(n.code,{children:"runtime.masterApp.apps"})," 参数注册子应用"]}),"\n",(0,s.jsxs)(n.li,{children:["使用 ",(0,s.jsx)(n.code,{children:"useModuleApps"})," API 获取子应用实例并在组件中完成渲染"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["子应用：","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["配置 ",(0,s.jsx)(n.code,{children:"deploy.microFrontend"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"所以插件中为你做了如下事情"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["帮助你通过 ",(0,s.jsx)(n.code,{children:"Garfish"})," 运行时 API 自动注册子应用（主应用）"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"useModulesApps"})," 函数的返回值提供了一个常驻的 ",(0,s.jsx)(n.code,{children:"DOM"})," 节点供子应用挂载（主应用）"]}),"\n",(0,s.jsxs)(n.li,{children:["帮助你正确导出了 ",(0,s.jsx)(n.code,{children:"provider"}),"（子应用）"]}),"\n",(0,s.jsxs)(n.li,{children:["帮助你正确设置了 ",(0,s.jsx)(n.code,{children:"basename"})," 给 ",(0,s.jsx)(n.code,{children:"Modern.js"})," 运行时提供 ",(0,s.jsx)(n.code,{children:"Router"})," 实例，如果是",(0,s.jsx)(n.code,{children:"自控式路由"}),"或",(0,s.jsx)(n.code,{children:"手动引入的 react-router-dom"})," 那么需要从 ",(0,s.jsx)(n.code,{children:"App.tsx"})," 的 ",(0,s.jsx)(n.code,{children:"props"})," 中获取 ",(0,s.jsx)(n.code,{children:"basename"})," 手动传递给引入的 ",(0,s.jsx)(n.code,{children:"Router 实例"}),"（子应用）"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"常见问题",children:["常见问题",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常见问题",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["自查手册: ",(0,s.jsx)(n.a,{href:"https://www.garfishjs.org/issues/",target:"_blank",rel:"noopener noreferrer",children:"https://www.garfishjs.org/issues/"})]})]})}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);