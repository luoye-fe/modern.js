"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8015],{44993:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(18249),a=(n(52983),n(44993));const o={sidebar_position:1},p="dev / start",i={unversionedId:"apis/app/commands/dev",id:"apis/app/commands/dev",title:"dev / start",description:"modern dev \u547d\u4ee4\u7528\u4e8e\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u5bf9\u6e90\u4ee3\u7801\u8fdb\u884c\u5f00\u53d1\u73af\u5883\u7f16\u8bd1\uff0c\u540c\u65f6\u76d1\u542c\u6e90\u6587\u4ef6\u53d8\u5316\uff0c\u9ed8\u8ba4\u652f\u6301\u6a21\u5757\u70ed\u66f4\u65b0\u548c React Fast Refresh\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/commands/dev.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/dev",permalink:"/v2/docs/apis/app/commands/dev",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"\u547d\u4ee4",permalink:"/v2/docs/apis/app/commands/"},next:{title:"new",permalink:"/v2/docs/apis/app/commands/new"}},s={},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dev--start"},"dev / start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern dev / modern start [options]\n\n\u672c\u5730\u5f00\u53d1\u547d\u4ee4\n\nOptions:\n  -e --entry <entry>    \u6307\u5b9a\u5165\u53e3\uff0c\u7f16\u8bd1\u7279\u5b9a\u7684\u9875\u9762\n  -c --config <config>  \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u4e3a\u76f8\u5bf9\u8def\u5f84\u6216\u7edd\u5bf9\u8def\u5f84\n  -h, --help            \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\n  --analyze             \u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef\uff0c\u67e5\u770b\u5404\u4e2a\u6a21\u5757\u6253\u5305\u540e\u7684\u5927\u5c0f\n  --api-only            \u4ec5\u542f\u52a8 API \u63a5\u53e3\u670d\u52a1\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modern dev")," \u547d\u4ee4\u7528\u4e8e\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u5bf9\u6e90\u4ee3\u7801\u8fdb\u884c\u5f00\u53d1\u73af\u5883\u7f16\u8bd1\uff0c\u540c\u65f6\u76d1\u542c\u6e90\u6587\u4ef6\u53d8\u5316\uff0c\u9ed8\u8ba4\u652f\u6301\u6a21\u5757\u70ed\u66f4\u65b0\u548c React Fast Refresh\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modern start")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"modern dev")," \u547d\u4ee4\u7684\u522b\u540d\uff0c\u4e24\u8005\u7684\u529f\u80fd\u548c\u7528\u6cd5\u5b8c\u5168\u4e00\u81f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ modern dev\n\ninfo    Starting dev server...\ninfo    App running at:\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n")))}d.isMDXComponent=!0}}]);