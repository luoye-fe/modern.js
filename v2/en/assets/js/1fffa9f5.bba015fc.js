"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8729],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(52983);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=p,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(18249),p=(n(52983),n(44993));const a={title:"useModuleApps",sidebar_position:7},o=void 0,i={unversionedId:"apis/app/runtime/app/use-module-apps",id:"apis/app/runtime/app/use-module-apps",title:"useModuleApps",description:"\u8fd4\u56de\u6240\u6709\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u7684 React \u7ec4\u4ef6\uff0c\u7528\u4e8e\u53ef\u81ea\u7531\u63a7\u5236\u8def\u7531\u3002",source:"@site/docs/apis/app/runtime/app/use-module-apps.md",sourceDirName:"apis/app/runtime/app",slug:"/apis/app/runtime/app/use-module-apps",permalink:"/v2/en/docs/apis/app/runtime/app/use-module-apps",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"useModuleApps",sidebar_position:7},sidebar:"apisAppSidebar",previous:{title:"useModuleApp",permalink:"/v2/en/docs/apis/app/runtime/app/use-module-app"},next:{title:"bootstrap",permalink:"/v2/en/docs/apis/app/runtime/app/bootstrap"}},s={},l=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,p.kt)("p",{parentName:"admonition"},"\u8fd4\u56de\u6240\u6709\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u7684 React \u7ec4\u4ef6\uff0c\u7528\u4e8e\u53ef\u81ea\u7531\u63a7\u5236\u8def\u7531\u3002"),(0,p.kt)("pre",{parentName:"admonition"},(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"import { useModuleApps } from '@modern-js/plugin-garfish';\n"))),(0,p.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,p.kt)("p",{parentName:"admonition"},"\u8be5 API \u5728\u5fae\u524d\u7aef\u4e3b\u5e94\u7528\u4e2d\u4f7f\u7528\uff0c\u9700\u8981\u5148\u5f00\u542f\u5fae\u524d\u7aef\u3002")),(0,p.kt)("h2",{id:"api"},"API"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"useModuleApps() => Record<string, React.FC<any>>")),(0,p.kt)("p",null,"\u5206\u522b\u8fd4\u56de\u5305\u88f9\u6bcf\u4e2a\u5b50\u5e94\u7528\u540e\u7684 React \u7ec4\u4ef6\u3002"),(0,p.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,p.kt)("p",null,"\u9700\u8981\u5148\u914d\u7f6e\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u4fe1\u606f\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=modern.config.js",title:"modern.config.js"},"defineConfig({\n  runtime: {\n    masterApp: {\n      manifest: {\n        modules: [\n          {\n            name: 'Home',\n            entry: 'http://www.home.com'\n          },\n          {\n            name: 'Contact',\n            entry: 'http://www.contact.com'\n          },\n        ]\n      }\n    }\n  }\n})\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=App.tsx",title:"App.tsx"},"function App() {\n  const { Home, Contact } = useModuleApps();\n\n  return <div>\n    Master APP\n    <Route exact path='/home'>\n      <Home />\n    </Route>\n    <Route exact path='/home'>\n      <Contact />\n    </Route>\n  </div>;\n}\n")),(0,p.kt)("p",null,"\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"useModuleApps()")," \u83b7\u53d6\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"Home")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"Contact")," \u5b50\u5e94\u7528\u7ec4\u4ef6\uff08\u540d\u79f0\u548c\u914d\u7f6e\u91cc\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\u5bf9\u5e94\uff09\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u50cf\u4f7f\u7528\u666e\u901a\u7684 React \u7ec4\u4ef6\u4e00\u6837\u53bb\u52a0\u8f7d\u5b50\u5e94\u7528\u3002"))}c.isMDXComponent=!0}}]);