"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9968],{44993:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(52983);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35736:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(18249),a=(n(52983),n(44993));const i={toc:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}]};function o(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type DistPathConfig = {\n  root?: string;\n  js?: string;\n  css?: string;\n  svg?: string;\n  font?: string;\n  html?: string;\n  image?: string;\n  media?: string;\n  server?: string;\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const defaultDistPath = {\n  root: 'dist',\n  html: 'html',\n  js: 'static/js',\n  css: 'static/css',\n  svg: 'static/svg',\n  font: 'static/font',\n  image: 'static/image',\n  media: 'static/media',\n  server: 'bundles',\n};\n")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u6784\u5efa\u4ea7\u7269\u7684\u8f93\u51fa\u76ee\u5f55\uff0cBuilder \u4f1a\u6839\u636e\u4ea7\u7269\u7684\u7c7b\u578b\u8f93\u51fa\u5230\u5bf9\u5e94\u7684\u5b50\u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root"),": \u8868\u793a\u6240\u6709\u6784\u5efa\u4ea7\u7269\u8f93\u51fa\u7684\u6839\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"html"),"\uff1a\u8868\u793a HTML \u6587\u4ef6\u7684\u8f93\u51fa\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"js"),"\uff1a\u8868\u793a JavaScript \u6587\u4ef6\u7684\u8f93\u51fa\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"css"),"\uff1a\u8868\u793a CSS \u6837\u5f0f\u6587\u4ef6\u7684\u8f93\u51fa\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"svg"),"\uff1a\u8868\u793a SVG \u56fe\u7247\u7684\u8f93\u51fa\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"font"),"\uff1a\u8868\u793a\u5b57\u4f53\u6587\u4ef6\u7684\u8f93\u51fa\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"image"),"\uff1a\u8868\u793a\u975e SVG \u56fe\u7247\u7684\u8f93\u51fa\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"media"),"\uff1a\u8868\u793a\u89c6\u9891\u7b49\u5a92\u4f53\u8d44\u6e90\u7684\u8f93\u51fa\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server"),": \u8868\u793a\u670d\u52a1\u7aef\u4ea7\u7269\u7684\u8f93\u51fa\u76ee\u5f55\uff0c\u4ec5\u5728 target \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"node")," \u65f6\u6709\u6548\u3002")),(0,a.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u4ee5 JavaScript \u6587\u4ef6\u4e3a\u4f8b\uff0c\u4f1a\u8f93\u51fa\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"distPath.root")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"distPath.js")," \u76ee\u5f55\uff0c\u5373\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/static/js"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u5c06 JavaScript \u6587\u4ef6\u8f93\u51fa\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"build/resource/js")," \u76ee\u5f55\uff0c\u53ef\u4ee5\u8fd9\u6837\u8bbe\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    distPath: {\n      root: 'build',\n      js: 'resource/js',\n    },\n  },\n};\n")))}o.isMDXComponent=!0;const l={title:"output.distPath",sidebar_label:"distPath",sidebar_position:1},p=void 0,s={unversionedId:"configure/app/output/dist-path",id:"configure/app/output/dist-path",title:"output.distPath",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 output.distPath\u3002",source:"@site/docs/configure/app/output/dist-path.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/dist-path",permalink:"/v2/docs/configure/app/output/dist-path",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"output.distPath",sidebar_label:"distPath",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"disableSourceMap",permalink:"/v2/docs/configure/app/output/disable-source-map"},next:{title:"enableAssetFallback",permalink:"/v2/docs/configure/app/output/enable-asset-fallback"}},u={},c=[],d={toc:c};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-distpath"},"output.distPath"),"\u3002")),(0,a.kt)(o,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);