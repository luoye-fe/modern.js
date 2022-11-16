"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7377],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,p(p({ref:t},s),{},{components:n})):r.createElement(m,p({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<i;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(18249),a=(n(52983),n(44993));const i={sidebar_position:4},p="setInput",o={unversionedId:"apis/generator/plugin/input/setInput",id:"apis/generator/plugin/input/setInput",title:"setInput",description:"\u8bbe\u7f6e\u95ee\u9898\u5c5e\u6027\u3002",source:"@site/docs/apis/generator/plugin/input/setInput.md",sourceDirName:"apis/generator/plugin/input",slug:"/apis/generator/plugin/input/setInput",permalink:"/v2/en/docs/apis/generator/plugin/input/setInput",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"apisGeneratorSidebar",previous:{title:"addInputAfter",permalink:"/v2/en/docs/apis/generator/plugin/input/addInputAfter"},next:{title:"addOptionBefore",permalink:"/v2/en/docs/apis/generator/plugin/input/addOptionBefore"}},l={},u=[{value:"key",id:"key",level:2},{value:"filed",id:"filed",level:2},{value:"value",id:"value",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setinput"},"setInput"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u95ee\u9898\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n  setInput: (key: string, field: string, value: unknown) => void;\n  ...\n}\n")),(0,a.kt)("h2",{id:"key"},"key"),(0,a.kt)("p",null,"\u95ee\u9898\u5173\u952e\u5b57\uff0c\u53ef\u4ee5\u4e3a Modern.js \u5de5\u7a0b\u65b9\u6848\u7684\u95ee\u9898\u5173\u952e\u5b57\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u751f\u6210\u5668\u63d2\u4ef6\u4e2d\u65b0\u589e\u95ee\u9898\u7684\u5173\u952e\u5b57\u3002"),(0,a.kt)("h2",{id:"filed"},"filed"),(0,a.kt)("p",null,"\u9700\u8bbe\u7f6e\u7684\u95ee\u9898\u5b57\u6bb5\uff0c\u53ef\u4fee\u6539\u9664\u4e86\u5f53\u524d Input \u9664 key \u4ee5\u5916\u7684\u5176\u4ed6\u5b57\u6bb5\uff0cInput \u5177\u4f53\u7c7b\u578b\u5b9a\u4e49\u53ef\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/generator/plugin/input/type"},"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49"),"\u3002"),(0,a.kt)("h2",{id:"value"},"value"),(0,a.kt)("p",null,"\u9700\u8bbe\u7f6e\u7684\u95ee\u9898\u5b57\u6bb5\u503c\u3002value \u652f\u6301\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u4e3a\u5f53\u524d\u5b57\u6bb5\u503c\uff0c\u8fd4\u56de\u503c\u9700\u8981\u4e3a\u5b8c\u6574\u7684\u65b0\u7684\u5b57\u6bb5\u503c\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e Modern.js \u5de5\u7a0b\u7c7b\u578b\u63d0\u4f9b\u7684\u8f93\u5165\u9009\u9879\uff0c\u6682\u65f6\u53ea\u652f\u6301\u5220\u9664\uff0c\u4e0d\u652f\u6301\u589e\u52a0\uff0c\u589e\u52a0\u4f1a\u9020\u6210\u4ee3\u7801\u4e2d\u7684\u903b\u8f91\u5224\u65ad\u5b58\u5728\u95ee\u9898\u3002")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u4fee\u6539 packageName \u7684\u5c55\u793a\u540d\u79f0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"context.setInput('packageName', 'name', \"\u5c55\u793a\u540d\u79f0\");\n")))}c.isMDXComponent=!0}}]);