"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9734],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(18249),o=(n(52983),n(44993));const a={toc:[{value:"Object \u7c7b\u578b",id:"object-\u7c7b\u578b",level:3},{value:"Function \u7c7b\u578b",id:"function-\u7c7b\u578b",level:3},{value:"\u5de5\u5177\u51fd\u6570",id:"\u5de5\u5177\u51fd\u6570",level:3},{value:"addExcludes",id:"addexcludes",level:4}]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,o.kt)("li",{parentName:"ul"},"Default")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  sourceMap: false,\n}\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.sass")," \u4fee\u6539 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/sass-loader"},"sass-loader")," \u7684\u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"object-\u7c7b\u578b"},"Object \u7c7b\u578b"),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.sass")," \u7684\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u65f6\uff0c\u4f1a\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 Object.assign \u5408\u5e76\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    sass: {\n      sourceMap: true,\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"function-\u7c7b\u578b"},"Function \u7c7b\u578b"),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.sass")," \u4e3a Function \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u503c\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u63d0\u4f9b\u4e86\u4e00\u4e9b\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u7684\u5de5\u5177\u51fd\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    sass(config) {\n      // \u4fee\u6539 sourceMap \u914d\u7f6e\n      config.additionalData = async (content, loaderContext) => {\n        // ...\n      };\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"\u5de5\u5177\u51fd\u6570"},"\u5de5\u5177\u51fd\u6570"),(0,o.kt)("h4",{id:"addexcludes"},"addExcludes"),(0,o.kt)("p",null,"\u7528\u6765\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"sass-loader")," \u4e0d\u7f16\u8bd1\u54ea\u4e9b\u6587\u4ef6\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    sass(config, { addExcludes }) {\n      addExcludes(/node_modules/);\n    },\n  },\n};\n")))}s.isMDXComponent=!0;const l={title:"tools.sass",sidebar_label:"sass",sidebar_position:1},i=void 0,p={unversionedId:"configure/app/tools/sass",id:"configure/app/tools/sass",title:"tools.sass",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 tools.sass\u3002",source:"@site/docs/configure/app/tools/sass.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/sass",permalink:"/v2/docs/configure/app/tools/sass",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"tools.sass",sidebar_label:"sass",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"pug",permalink:"/v2/docs/configure/app/tools/pug"},next:{title:"styleLoader",permalink:"/v2/docs/configure/app/tools/style-loader"}},c={},u=[],d={toc:u};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-sass"},"tools.sass"),"\u3002")),(0,o.kt)(s,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);