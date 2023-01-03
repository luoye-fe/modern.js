"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[887,3508,3856],{44993:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(52983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(18249),o=(t(52983),t(44993)),a=t(41362),p=t(98592);const i={title:"useModuleApps"},s=void 0,l={unversionedId:"apis/app/runtime/core/use-module-apps",id:"apis/app/runtime/core/use-module-apps",title:"useModuleApps",description:"\u8fd4\u56de\u6240\u6709\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u7684 React \u7ec4\u4ef6\uff0c\u7528\u4e8e\u53ef\u81ea\u7531\u63a7\u5236\u8def\u7531\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/core/use-module-apps.md",sourceDirName:"apis/app/runtime/core",slug:"/apis/app/runtime/core/use-module-apps",permalink:"/v2/docs/apis/app/runtime/core/use-module-apps",draft:!1,tags:[],version:"current",frontMatter:{title:"useModuleApps"},sidebar:"apisAppSidebar",previous:{title:"useLoader",permalink:"/v2/docs/apis/app/runtime/core/use-loader"},next:{title:"useRuntimeContext",permalink:"/v2/docs/apis/app/runtime/core/use-runtime-context"}},u={},c=[{value:"\u4f7f\u7528\u59ff\u52bf",id:"\u4f7f\u7528\u59ff\u52bf",level:2},{value:"\u51fd\u6570\u7b7e\u540d",id:"\u51fd\u6570\u7b7e\u540d",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u96c6\u4e2d\u5f0f\u8def\u7531",id:"\u96c6\u4e2d\u5f0f\u8def\u7531",level:3},{value:"\u52a0\u8f7d\u52a8\u753b",id:"\u52a0\u8f7d\u52a8\u753b",level:2}],m={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd4\u56de\u6240\u6709\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u7684 React \u7ec4\u4ef6\uff0c\u7528\u4e8e\u53ef\u81ea\u7531\u63a7\u5236\u8def\u7531\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u59ff\u52bf"},"\u4f7f\u7528\u59ff\u52bf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n")),(0,o.kt)("h2",{id:"\u51fd\u6570\u7b7e\u540d"},"\u51fd\u6570\u7b7e\u540d"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"function useModuleApps(): Record<string, React.FC<any>>")),(0,o.kt)("p",null,"\u5206\u522b\u8fd4\u56de\u5305\u88f9\u6bcf\u4e2a\u5b50\u5e94\u7528\u540e\u7684 React \u7ec4\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u9700\u8981\u5148\u914d\u7f6e\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u4fe1\u606f\u3002"),(0,o.kt)(a.default,{mdxType:"EnableMicroFrontend"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=App.tsx",title:"App.tsx"},'function App() {\n  const { Home, Contact } = useModuleApps();\n\n  return <div>\n    Master APP\n    <Route exact path=\'/home\'>\n      <Home />\n    </Route>\n    <Route exact path=\'/home\'>\n      <Contact />\n    </Route>\n  </div>;\n}\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        // name \u533a\u5206\u5927\u5c0f\u5199\uff0cname \u63d0\u4f9b\u7684\u662f\u4ec0\u4e48 useModuleApps \u8fd4\u56de\u7684\u5c31\u662f\u4ec0\u4e48\n        name: "Home",\n        entry: "http://127.0.0.1:8081/"\n      },\n      {\n          name: "Contact",\n          entry: "http://localhost:8082"\n      }\n    ]\n  }\n})\n')),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"useModuleApps()")," \u83b7\u53d6\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," \u5b50\u5e94\u7528\u7ec4\u4ef6\uff08\u540d\u79f0\u548c\u914d\u7f6e\u91cc\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\u5bf9\u5e94\uff09\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u50cf\u4f7f\u7528\u666e\u901a\u7684 React \u7ec4\u4ef6\u4e00\u6837\u53bb\u52a0\u8f7d\u5b50\u5e94\u7528\u3002"),(0,o.kt)("h3",{id:"\u96c6\u4e2d\u5f0f\u8def\u7531"},"\u96c6\u4e2d\u5f0f\u8def\u7531"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u96c6\u4e2d\u5f0f\u8def\u7531")," \u662f\u5c06\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u8def\u7531\u96c6\u4e2d\u914d\u7f6e\u7684\u65b9\u5f0f\u3002\u6211\u4eec\u7ed9\u5b50\u5e94\u7528\u5217\u8868\u4fe1\u606f\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"activeWhen")," \u5b57\u6bb5\u6765\u542f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u4e2d\u5f0f\u8def\u7531"),"\u3002"),(0,o.kt)(p.default,{mdxType:"MicroRuntimeConfig"}),(0,o.kt)("p",null,"\u7136\u540e\u5728\u4e3b\u5e94\u7528\u4e2d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useModuleApp")," \u65b9\u6cd5\u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"MApp")," \u7ec4\u4ef6, \u5e76\u5728\u4e3b\u5e94\u7528\u6e32\u67d3 ",(0,o.kt)("inlineCode",{parentName:"p"},"MApp"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u4e3b\u5e94\u7528\uff1aApp.tsx",title:"\u4e3b\u5e94\u7528\uff1aApp.tsx"},'import { useModuleApp } from \'@modern-js/plugin-runtime\';\n\nfunction App() {\n  const { MApp } = useModuleApps();\n\n  return <div>\n    <MApp />\n  </div>\n}\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        // name \u533a\u5206\u5927\u5c0f\u5199\uff0cname \u63d0\u4f9b\u7684\u662f\u4ec0\u4e48 useModuleApps \u8fd4\u56de\u7684\u5c31\u662f\u4ec0\u4e48\n        name: "Dashboard",\n        activeWhen: \'/dashboard\',\n        entry: "http://127.0.0.1:8081/"\n      },\n      {\n        name: "TableList",\n        activeWhen: \'/table\',\n        entry: "http://localhost:8082"\n      }\n    ]\n  }\n})\n')),(0,o.kt)("p",null,"\u8fd9\u6837\u542f\u52a8\u5e94\u7528\u540e\uff0c\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"/dashboard")," \u8def\u7531\uff0c\u4f1a\u6e32\u67d3 ",(0,o.kt)("inlineCode",{parentName:"p"},"Dashboard")," \u5b50\u5e94\u7528\uff0c\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"/table")," \u8def\u7531\uff0c\u4f1a\u6e32\u67d3 ",(0,o.kt)("inlineCode",{parentName:"p"},"TableList")," \u5b50\u5e94\u7528\u3002"),(0,o.kt)("h2",{id:"\u52a0\u8f7d\u52a8\u753b"},"\u52a0\u8f7d\u52a8\u753b"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u52a0\u8f7d\u8fc7\u7a0b\u7684\u8fc7\u6e21\u52a8\u753b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=App.tsx",title:"App.tsx"},"function App() {\n  const { Home } = useModuleApps();\n\n  return <div>\n    Master APP\n    <Route exact path='/home'>\n      <Home\n        loadable={{\n          loading: ({ pastDelay, error }: any) => {\n            if (error) {\n              console.error(error);\n              return <div>error: {error?.message}</div>;\n            } else if (pastDelay) {\n              return <div>loading</div>;\n            } else {\n              return null;\n            }\n          },\n        }}\n      />\n    </Route>\n  </div>;\n}\n")))}d.isMDXComponent=!0},41362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(18249),o=(t(52983),t(44993));const a={},p=void 0,i={unversionedId:"components/enable-micro-frontend",id:"components/enable-micro-frontend",title:"enable-micro-frontend",description:"",source:"@site/../../packages/toolkit/main-doc/zh/components/enable-micro-frontend.md",sourceDirName:"components",slug:"/components/enable-micro-frontend",permalink:"/v2/docs/components/enable-micro-frontend",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[],u={toc:l};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import AppToolPlugin, { defineConfig } from '@modern-js/app-tools';\nimport GarfishPlugin from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n    masterApp: true,\n  },\n  plugins: [AppToolPlugin(), GarfishPlugin()],\n});\n")))}c.isMDXComponent=!0},98592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(18249),o=(t(52983),t(44993));const a={},p=void 0,i={unversionedId:"components/micro-runtime-config",id:"components/micro-runtime-config",title:"micro-runtime-config",description:"",source:"@site/../../packages/toolkit/main-doc/zh/components/micro-runtime-config.md",sourceDirName:"components",slug:"/components/micro-runtime-config",permalink:"/v2/docs/components/micro-runtime-config",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[],u={toc:l};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import { defineConfig } from '@modern-js/runtime';\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        name: 'DashBoard',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'TableList',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n")))}c.isMDXComponent=!0}}]);