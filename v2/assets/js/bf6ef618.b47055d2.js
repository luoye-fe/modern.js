"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9047],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(18249),i=(n(52983),n(44993));const a={sidebar_position:4,title:"lint"},o=void 0,p={unversionedId:"apis/app/commands/lint",id:"apis/app/commands/lint",title:"lint",description:"\u8fd0\u884c ESLint \u68c0\u67e5\u4ee3\u7801\u8bed\u6cd5\u60c5\u51b5\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728 git commit \u9636\u6bb5\u901a\u8fc7 lint-staged \u68c0\u67e5\u672c\u6b21\u63d0\u4ea4\u4fee\u6539\u7684\u90e8\u5206\u4ee3\u7801\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/commands/lint.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/lint",permalink:"/v2/docs/apis/app/commands/lint",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"lint"},sidebar:"apisAppSidebar",previous:{title:"test",permalink:"/v2/docs/apis/app/commands/test"},next:{title:"build",permalink:"/v2/docs/apis/app/commands/build"}},l={},c=[],s={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern lint [options] [...files]\n\nlint and fix source files\n\nOptions:\n  --no-fix    disable auto fix source file\n  -h, --help  display help for command\n")),(0,i.kt)("p",null,"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"ESLint")," \u68c0\u67e5\u4ee3\u7801\u8bed\u6cd5\u60c5\u51b5\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," \u9636\u6bb5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"lint-staged")," \u68c0\u67e5\u672c\u6b21\u63d0\u4ea4\u4fee\u6539\u7684\u90e8\u5206\u4ee3\u7801\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--no-fix")," \u53c2\u6570\u8bbe\u7f6e\u540e\u53ef\u4ee5\u5173\u95ed\u81ea\u52a8\u4fee\u590d lint \u9519\u8bef\u4ee3\u7801\u7684\u80fd\u529b\u3002")))}m.isMDXComponent=!0}}]);