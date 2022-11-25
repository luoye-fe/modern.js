"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6900],{44993:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},30049:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(18249),a=(t(52983),t(44993));const l={title:"\u73af\u5883\u53d8\u91cf",sidebar_position:7},i=void 0,o={unversionedId:"guides/basic-features/env-vars",id:"guides/basic-features/env-vars",title:"\u73af\u5883\u53d8\u91cf",description:"Modern.js \u63d0\u4f9b\u4e86\u5bf9\u73af\u5883\u53d8\u91cf\u7684\u652f\u6301\uff0c\u5305\u542b\u5185\u7f6e\u7684\u73af\u5883\u53d8\u91cf\u548c\u81ea\u5b9a\u4e49\u7684\u73af\u5883\u53d8\u91cf\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/basic-features/env-vars.md",sourceDirName:"guides/basic-features",slug:"/guides/basic-features/env-vars",permalink:"/v2/en/docs/guides/basic-features/env-vars",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u73af\u5883\u53d8\u91cf",sidebar_position:7},sidebar:"guidesSidebar",previous:{title:"\u6570\u636e\u6a21\u62df",permalink:"/v2/en/docs/guides/basic-features/mock"},next:{title:"\u522b\u540d",permalink:"/v2/en/docs/guides/basic-features/alias"}},p={},s=[{value:"\u5185\u7f6e\u7684\u73af\u5883\u53d8\u91cf",id:"\u5185\u7f6e\u7684\u73af\u5883\u53d8\u91cf",level:2},{value:"NODE_ENV",id:"node_env",level:3},{value:"MODERN_ENV",id:"modern_env",level:3},{value:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",id:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",level:2},{value:"\u901a\u8fc7 <code>shell</code> \u6307\u5b9a",id:"\u901a\u8fc7-shell-\u6307\u5b9a",level:3},{value:"\u901a\u8fc7 <code>.env</code> \u6587\u4ef6\u6307\u5b9a",id:"\u901a\u8fc7-env-\u6587\u4ef6\u6307\u5b9a",level:3},{value:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf",id:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf",level:2},{value:"\u7ea6\u5b9a\u547d\u540d",id:"\u7ea6\u5b9a\u547d\u540d",level:3},{value:"\u4efb\u610f\u547d\u540d",id:"\u4efb\u610f\u547d\u540d",level:3}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86\u5bf9\u73af\u5883\u53d8\u91cf\u7684\u652f\u6301\uff0c\u5305\u542b\u5185\u7f6e\u7684\u73af\u5883\u53d8\u91cf\u548c\u81ea\u5b9a\u4e49\u7684\u73af\u5883\u53d8\u91cf\u3002"),(0,a.kt)("h2",{id:"\u5185\u7f6e\u7684\u73af\u5883\u53d8\u91cf"},"\u5185\u7f6e\u7684\u73af\u5883\u53d8\u91cf"),(0,a.kt)("h3",{id:"node_env"},"NODE_ENV"),(0,a.kt)("p",null,"\u8868\u793a\u5f53\u524d\u7684\u6267\u884c\u73af\u5883\uff0c\u662f",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u8bfb\u7684"),"\u7684\u73af\u5883\u53d8\u91cf\uff0c\u5176\u503c\u5728\u4e0d\u540c\u7684\u6267\u884c\u547d\u4ee4\u4e0b\u5177\u6709\u4e0d\u540c\u7684\u503c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"production"),"\uff1a\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"modern build"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"modern preview")," \u547d\u4ee4\u65f6\u7684\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test"),"\uff1a\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"modern test")," \u547d\u4ee4\u65f6\u7684\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"development"),"\uff1a\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"modern dev")," \u547d\u4ee4\u65f6\u7684\u9ed8\u8ba4\u503c\uff0c\u540c\u65f6\u4e5f\u662f\u5176\u4ed6\u6240\u6709\u60c5\u51b5\u4e0b\u7684\u9ed8\u8ba4\u503c\u3002")),(0,a.kt)("h3",{id:"modern_env"},"MODERN_ENV"),(0,a.kt)("p",null,"\u624b\u52a8\u8bbe\u7f6e\u5f53\u524d\u7684\u6267\u884c\u73af\u5883\u3002\u9664\u4e86\u4e0a\u8ff0 NODE_ENV \u5bf9\u5e94\u7684\u503c\u4e4b\u5916\uff0c\u8fd9\u91cc\u652f\u6301\u81ea\u5b9a\u4e49\u73af\u5883\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"staging"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"boe")," \u7b49\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"MODERN_ENV \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e NODE_ENV\u3002")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf"},"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u73af\u5883\u53d8\u91cf\u652f\u6301\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"shell")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e24\u79cd\u65b9\u5f0f\u6307\u5b9a\u3002"),(0,a.kt)("h3",{id:"\u901a\u8fc7-shell-\u6307\u5b9a"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"h3"},"shell")," \u6307\u5b9a"),(0,a.kt)("p",null,"\u5728\u547d\u4ee4\u524d\u6dfb\u52a0\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"REACT_APP_FOO=123 BAR=456 pnpm run dev\n")),(0,a.kt)("h3",{id:"\u901a\u8fc7-env-\u6587\u4ef6\u6307\u5b9a"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"h3"},".env")," \u6587\u4ef6\u6307\u5b9a"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\uff0c\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u4f1a\u9ed8\u8ba4\u6dfb\u52a0\u5230\u542f\u52a8\u9879\u76ee\u7684 Node.js \u8fdb\u7a0b\u4e2d\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-env"},"REACT_APP_FOO=123\nBAR=456\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\u52a0\u8f7d\u89c4\u5219\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".env"),"\uff1a\u9ed8\u8ba4\u52a0\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".env.{ MODERN_ENV | NODE_ENV }"),"\uff1a\u9488\u5bf9\u5177\u4f53\u73af\u5883\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u4f1a\u8986\u76d6 ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," \u4e2d\u7684\u8bbe\u7f6e\u3002")),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u6839\u636e\u73af\u5883\u4f7f\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u65f6\uff0c\u53ef\u4ee5\u628a\u73af\u5883\u53d8\u91cf\u5b9a\u4e49\u5230\u5bf9\u5e94\u73af\u5883\u540d\u79f0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e2d\uff0c\u5e76\u5728\u542f\u52a8\u9879\u76ee\u65f6\u624b\u52a8\u8bbe\u7f6e\u6267\u884c\u73af\u5883\u3002\u4f8b\u5982\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u9879\u76ee\u65f6\uff0c\u5c06\u4f1a\u52a0\u8f7d ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},".env.staging"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"MODERN_ENV=staging pnpm run dev\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf"},"\u4f7f\u7528\u73af\u5883\u53d8\u91cf"),(0,a.kt)("h3",{id:"\u7ea6\u5b9a\u547d\u540d"},"\u7ea6\u5b9a\u547d\u540d"),(0,a.kt)("p",null,"\u5728\u524d\u7aef\u4ee3\u7801\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u73af\u5883\u53d8\u91cf\u3002\u53e6\u5916\uff0c\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"MODERN_")," \u5f00\u5934\u7684\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\uff0c\u4e5f\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u76f4\u63a5\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (process.env.NODE_ENV === 'development') {\n  // do something\n}\n")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," \u547d\u4ee4\u4e4b\u540e\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u6784\u5efa\u4ea7\u7269:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (true) {\n  // do something\n}\n")),(0,a.kt)("p",null,"\u540c\u6837\u5728\u81ea\u5b9a\u4e49\u7684 HTML \u6a21\u677f\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u7c7b\u73af\u5883\u53d8\u91cf\u3002\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"config/html/head.html"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<meta name="test" content="<process.env.NODE_ENV>">\n')),(0,a.kt)("h3",{id:"\u4efb\u610f\u547d\u540d"},"\u4efb\u610f\u547d\u540d"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u4efb\u610f\u540d\u79f0\u7684\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/source/global-vars"},(0,a.kt)("inlineCode",{parentName:"a"},"source.globalVars"))," \u914d\u7f6e\u6307\u5b9a, \u4f8b\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  source: {\n    globalVars: {\n      'process.env.VERSION': process.env.VERSION,\n    }.\n  },\n});\n")),(0,a.kt)("p",null,"\u6b64\u65f6\uff0c\u5728\u4ee3\u7801\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.VERSION"),"\uff0c\u5c06\u4f1a\u88ab\u66ff\u6362\u4e3a\u73af\u5883\u53d8\u91cf\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"VERSION")," \u7684\u503c\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"source.globalVar")," \u4e5f\u652f\u6301\u5c06\u5176\u4ed6\u8868\u8fbe\u5f0f\u6216\u5b57\u7b26\u4e32\u66ff\u6362\u4e3a\u6307\u5b9a\u7684\u503c\uff0c\u4e0d\u4ec5\u9650\u4e8e\u73af\u5883\u53d8\u91cf\u3002")))}u.isMDXComponent=!0}}]);