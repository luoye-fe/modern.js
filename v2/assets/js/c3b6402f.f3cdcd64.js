"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4189],{44993:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var r=n(52983);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,y=s["".concat(a,".").concat(d)]||s[d]||c[d]||o;return n?r.createElement(y,i(i({ref:t},f),{},{components:n})):r.createElement(y,i({ref:t},f))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},15273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>c});var r=n(18249),l=(n(52983),n(44993));const o={toc:[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:3},{value:"entry",id:"entry",level:4},{value:"usage",id:"usage",level:4},{value:"ua",id:"ua",level:4},{value:"off",id:"off",level:4}]};function i(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"'entry' | 'usage' | 'ua' | 'off'")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'entry'"))),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"output.polyfill")," \u4f60\u53ef\u4ee5\u914d\u7f6e Polyfill \u7684\u6ce8\u5165\u65b9\u5f0f\u3002"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,l.kt)("h4",{id:"entry"},"entry"),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"output.polyfill")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"'entry'")," \u65f6\uff0c\u4f1a\u5728\u6bcf\u4e2a\u5165\u53e3\u6587\u4ef6\u4e2d\u6ce8\u5165 Polyfill\u3002"),(0,l.kt)("p",null,"\u7b49\u4ef7\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"useBuiltIns: 'entry'")," \u914d\u7f6e\u3002"),(0,l.kt)("h4",{id:"usage"},"usage"),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"output.polyfill")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"'usage'")," \u65f6\uff0c\u4f1a\u5728\u6bcf\u4e2a\u6587\u4ef6\u4e2d\u6839\u636e\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684 API \u6ce8\u5165 Polyfill\u3002"),(0,l.kt)("p",null,"\u7b49\u4ef7\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"useBuiltIns: 'usage'")," \u914d\u7f6e\u3002"),(0,l.kt)("h4",{id:"ua"},"ua"),(0,l.kt)("p",null,"\u6839\u636e\u5f53\u524d\u8bf7\u6c42\u7684 UA \u4fe1\u606f\uff0c\u52a8\u6001\u4e0b\u53d1 Polyfill \u4ee3\u7801\u3002"),(0,l.kt)("h4",{id:"off"},"off"),(0,l.kt)("p",null,"\u4e0d\u6ce8\u5165 Polyfill\u3002\u4f7f\u7528\u6b64\u9009\u9879\u65f6\uff0c\u9700\u8981\u81ea\u884c\u4fdd\u8bc1\u4ee3\u7801\u7684\u517c\u5bb9\u6027\u3002"))}i.isMDXComponent=!0;const p={title:"output.polyfill",sidebar_label:"polyfill",sidebar_position:1},a=void 0,u={unversionedId:"configure/app/output/polyfill",id:"configure/app/output/polyfill",title:"output.polyfill",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 output.polyfill\u3002",source:"@site/docs/configure/app/output/polyfill.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/polyfill",permalink:"/v2/docs/configure/app/output/polyfill",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"output.polyfill",sidebar_label:"polyfill",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"overrideBrowserslist",permalink:"/v2/docs/configure/app/output/override-browserslist"},next:{title:"svgDefaultExport",permalink:"/v2/docs/configure/app/output/svg-default-export"}},f={},c=[],s={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"BUILDER",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-polyfill"},"output.polyfill"),"\u3002")),(0,l.kt)(i,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);