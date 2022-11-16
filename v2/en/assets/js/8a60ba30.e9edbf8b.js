"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5152],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=f(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var f=2;f<i;f++)o[f]=n[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>f});var r=n(18249),a=(n(52983),n(44993));const i={sidebar_label:"prefix",sidebar_position:1},o="bff.prefix",p={unversionedId:"configure/app/bff/prefix",id:"configure/app/bff/prefix",title:"bff.prefix",description:"* \u7c7b\u578b\uff1astring",source:"@site/docs/configure/app/bff/prefix.md",sourceDirName:"configure/app/bff",slug:"/configure/app/bff/prefix",permalink:"/v2/en/docs/configure/app/bff/prefix",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"prefix",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"port",permalink:"/v2/en/docs/configure/app/server/port"},next:{title:"proxy",permalink:"/v2/en/docs/configure/app/bff/proxy"}},l={},f=[],c={toc:f};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bffprefix"},"bff.prefix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"/api"))),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5e94\u7528\u5de5\u7a0b\u9700\u8981\u8bf7\u786e\u4fdd\u4f7f\u7528\u3010",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/commands/new"},"new"),"\u3011 \u542f\u7528\u4e86 BFF \u529f\u80fd\u3002")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cBFF API \u76ee\u5f55\u4e0b\u7684\u8def\u7531\u8bbf\u95ee\u524d\u7f00\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"/api"),", \u5982\u4e0b\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"api\n\u2514\u2500\u2500 hello.ts\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"api/hello.ts")," \u8bbf\u95ee\u65f6\u5bf9\u5e94\u7684\u8def\u7531\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8080/api/hello"),"\u3002"),(0,a.kt)("p",null,"\u8be5\u914d\u7f6e\u9009\u9879\u53ef\u4ee5\u4fee\u6539\u9ed8\u8ba4\u7684\u8def\u7531\u524d\u7f00\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  bff: {\n    prefix: '/api-demo'\n  }\n})\n")),(0,a.kt)("p",null,"\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"api/hello.ts")," \u8bbf\u95ee\u8def\u7531\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8080/api-demo/hello"),"\u3002"))}s.isMDXComponent=!0}}]);