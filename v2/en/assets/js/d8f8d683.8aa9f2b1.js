"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7237],{44993:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(18249),a=(t(52983),t(44993));const o={sidebar_position:2},i="createElement",l={unversionedId:"apis/generator/plugin/new/createElement",id:"apis/generator/plugin/new/createElement",title:"createElement",description:"\u521b\u5efa\u5de5\u7a0b\u5143\u7d20\uff0c\u53ea\u652f\u6301\u5e94\u7528\u5de5\u7a0b\u65b9\u6848\u3002",source:"@site/docs/apis/generator/plugin/new/createElement.md",sourceDirName:"apis/generator/plugin/new",slug:"/apis/generator/plugin/new/createElement",permalink:"/v2/en/docs/apis/generator/plugin/new/createElement",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apisGeneratorSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/v2/en/docs/apis/generator/plugin/new/introduce"},next:{title:"enableFunc",permalink:"/v2/en/docs/apis/generator/plugin/new/enableFunc"}},p={},c=[{value:"element",id:"element",level:2},{value:"params",id:"params",level:2}],s={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"createelement"},"createElement"),(0,a.kt)("p",null,"\u521b\u5efa\u5de5\u7a0b\u5143\u7d20\uff0c\u53ea\u652f\u6301\u5e94\u7528\u5de5\u7a0b\u65b9\u6848\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ActionElement {\n  Entry = 'entry',\n  Server = 'server',\n}\nexport type ForgedAPI = {\n  createElement: (\n    element: ActionElement,\n    params: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n")),(0,a.kt)("h2",{id:"element"},"element"),(0,a.kt)("p",null,"\u5de5\u7a0b\u5143\u7d20\u7c7b\u578b\uff0c\u652f\u6301 entry \u548c server\u3002"),(0,a.kt)("h2",{id:"params"},"params"),(0,a.kt)("p",null,"\u521b\u5efa\u5143\u7d20\u7684\u5176\u4ed6\u53c2\u6570\uff0c\u8be6\u7ec6\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/generator/mwa#new-%E5%91%BD%E4%BB%A4"},"\u5e94\u7528 New \u547d\u4ee4"),"\u3002"))}u.isMDXComponent=!0}}]);