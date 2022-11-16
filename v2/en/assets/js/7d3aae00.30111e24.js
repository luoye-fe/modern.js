"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[397],{44993:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(52983);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,g=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},75945:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(18249),o=(t(52983),t(44993));const a={sidebar_position:4},i="Monorepo",c={unversionedId:"configure/generator/monorepo",id:"configure/generator/monorepo",title:"Monorepo",description:"Monorepo \u9879\u76ee\u9ed8\u8ba4\u53ea\u9700\u8981 PackageManager \u914d\u7f6e\u3002",source:"@site/docs/configure/generator/monorepo.md",sourceDirName:"configure/generator",slug:"/configure/generator/monorepo",permalink:"/v2/en/docs/configure/generator/monorepo",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"configsGeneratorSidebar",previous:{title:"\u6a21\u5757",permalink:"/v2/en/docs/configure/generator/module"}},l={},p=[{value:"\u521b\u5efa\u5b50\u9879\u76ee",id:"\u521b\u5efa\u5b50\u9879\u76ee",level:2},{value:"Solution",id:"solution",level:3},{value:"Package-Name",id:"package-name",level:3},{value:"Package-Path",id:"package-path",level:3}],u={toc:p};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monorepo"},"Monorepo"),(0,o.kt)("p",null,"Monorepo \u9879\u76ee\u9ed8\u8ba4\u53ea\u9700\u8981 ",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/generator/introduce#package-manager"},"PackageManager \u914d\u7f6e"),"\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa\u5b50\u9879\u76ee"},"\u521b\u5efa\u5b50\u9879\u76ee"),(0,o.kt)("p",null,"Monorepo \u9879\u76ee\u652f\u6301\u901a\u8fc7\u4f7f\u7528 new \u547d\u4ee4\u521b\u5efa\u5b50\u9879\u76ee\uff0c\u5b50\u9879\u76ee\u7c7b\u578b\u652f\u6301\u5e94\u7528\u3001\u6d4b\u8bd5\u5e94\u7528\u3001\u6a21\u5757\u3001\u5185\u90e8\u6a21\u5757\uff0c\u9664\u4e86\u5e94\u7528\u548c\u6a21\u5757\u5404\u81ea\u7684\u914d\u7f6e\u5916\uff0c\u8fd9\u91cc\u8fd8\u9700\u8981\u4e00\u4e9b\u901a\u7528\u7684\u5b50\u9879\u76ee\u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"\u5b50\u9879\u76ee\u7c7b\u578b(solution)\uff0c\u4e0d\u540c\u5b50\u9879\u76ee\u7c7b\u578b\u5b57\u6bb5\u4e3a:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528(mwa)"),(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528\uff08\u6d4b\u8bd5\uff09(mwa_test)"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u5757(module)"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u5757\uff08\u5185\u90e8\uff09(inner_module)")),(0,o.kt)("h3",{id:"package-name"},"Package-Name"),(0,o.kt)("p",null,"\u5b50\u9879\u76ee\u540d\u79f0(packageName)\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\u3002"),(0,o.kt)("h3",{id:"package-path"},"Package-Path"),(0,o.kt)("p",null,"\u5b50\u9879\u76ee\u8def\u5f84(packagePath)\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\u3002"))}s.isMDXComponent=!0}}]);