(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_core_use-module-apps_mdx"],{10321:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return o},title:function(){return c},toc:function(){return d},default:function(){return p}});var s=t("9880"),a=t("23169"),i=t.ir(t("31751")),r=t.ir(t("26625")),o={title:"useModuleApps"},c="useModuleApps",d=[{text:"Usage",depth:2,id:"usage"},{text:"Function Signature",depth:2,id:"function-signature"},{text:"Example",depth:2,id:"example"},{text:"Centralized Routing",depth:3,id:"centralized-routing"},{text:"Load Animation",depth:2,id:"load-animation"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",h3:"h3",strong:"strong"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"usemoduleapps",children:["useModuleApps",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usemoduleapps",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the React components of all micro-front-end sub-applications for freely controlled routing."}),"\n",(0,s.jsxs)(n.h2,{id:"usage",children:["Usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n"})})]})}),"\n",(0,s.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"function useModuleApps(): Record<string, React.FC<any>>"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the React components wrapped around each subapp."}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"You need to configure the micro-front-end sub-application information first."}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"App.tsx"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:"title=App.tsx",children:"function App() {\n  const { Home, Contact } = useModuleApps();\n\n  return (\n    <div>\n      Master APP\n      <Route exact path=\"/home\">\n        <Home />\n      </Route>\n      <Route exact path=\"/home\">\n        <Contact />\n      </Route>\n    </div>\n  );\n}\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        // name is case-sensitive, what name provides is what useModuleApps returns\n        name: 'Home',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'Contact',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Get the ",(0,s.jsx)(n.code,{children:"Home"})," and ",(0,s.jsx)(n.code,{children:"Contact"})," sub-application components(the same as name in the config) through ",(0,s.jsx)(n.code,{children:"useModuleApps()"}),". After that, you can load the child application just like a normal React component."]}),"\n",(0,s.jsxs)(n.h3,{id:"centralized-routing",children:["Centralized Routing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#centralized-routing",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Centralized Routing"})," is a way to centrally configure the activation routes of sub-applications. Add ",(0,s.jsx)(n.code,{children:"activeWhen"})," config to enable ",(0,s.jsx)(n.strong,{children:"Centralized Routing"}),"."]}),"\n","\n",(0,s.jsx)(r.default,{}),"\n",(0,s.jsxs)(n.p,{children:["Then use the ",(0,s.jsx)(n.code,{children:"useModuleApp"})," method to get the ",(0,s.jsx)(n.code,{children:"MApp"})," component in the main application, and render the ",(0,s.jsx)(n.code,{children:"MApp"})," in the main application."]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"main:"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:"title=main: App.tsx",children:"import { useModuleApp } from '@modern-js/plugin-runtime';\n\nfunction App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp />\n    </div>\n  );\n}\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        // name is case sensitive, what name provides is what useModuleApps returns\n        name: 'Dashboard',\n        activeWhen: '/dashboard',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'TableList',\n        activeWhen: '/table',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["After starting the application in this way, accessing the ",(0,s.jsx)(n.code,{children:"/dashboard"})," route will render the ",(0,s.jsx)(n.code,{children:"Dashboard"}),", and accessing the ",(0,s.jsx)(n.code,{children:"/table"})," route will render the ",(0,s.jsx)(n.code,{children:"TableList"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"load-animation",children:["Load Animation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#load-animation",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The transition animation of the component loading process can be customized in the following ways."}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"App.tsx"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:"title=App.tsx",children:'function App() {\n  const {\n    Components: { Home },\n  } = useModuleApps();\n\n  return (\n    <div>\n      Master APP\n      <Route exact path="/home">\n        <Home\n          loadable={{\n            loading: ({ pastDelay, error }: any) => {\n              if (error) {\n                console.error(error);\n                return <div>error: {error?.message}</div>;\n              } else if (pastDelay) {\n                return <div>loading</div>;\n              } else {\n                return null;\n              }\n            },\n          }}\n        />\n      </Route>\n    </div>\n  );\n}\n'})})]})]})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},26625:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r}});var s=t("9880"),a=t("23169");function i(e){var n=Object.assign({div:"div",button:"button",pre:"pre",code:"code"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/App.tsx"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="src/App.tsx"',children:"import { defineConfig } from '@modern-js/runtime';\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        name: 'DashBoard',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'TableList',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n"})})]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);