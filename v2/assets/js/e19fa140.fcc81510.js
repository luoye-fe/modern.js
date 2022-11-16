"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3102],{44993:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var a=n(52983);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),N=o(n),u=l,c=N["".concat(d,".").concat(u)]||N[u]||m[u]||r;return n?a.createElement(c,i(i({ref:t},k),{},{components:n})):a.createElement(c,i({ref:t},k))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=N;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},71226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=n(18249),l=(n(52983),n(44993));const r={toc:[{value:"\u5de5\u5177\u96c6\u5408",id:"\u5de5\u5177\u96c6\u5408",level:3},{value:"env",id:"env",level:4},{value:"isProd",id:"isprod",level:4},{value:"target",id:"target",level:4},{value:"isServer",id:"isserver",level:4},{value:"isWebWorker",id:"iswebworker",level:4},{value:"webpack",id:"webpack",level:4},{value:"HtmlWebpackPlugin",id:"htmlwebpackplugin",level:3},{value:"CHAIN_ID",id:"chain_id",level:4},{value:"CHAIN_ID.RULE",id:"chain_idrule",level:5},{value:"CHAIN_ID.ONE_OF",id:"chain_idone_of",level:3},{value:"CHAIN_ID.USE",id:"chain_iduse",level:3},{value:"CHAIN_ID.PLUGIN",id:"chain_idplugin",level:3},{value:"CHAIN_ID.MINIMIZER",id:"chain_idminimizer",level:3},{value:"\u5e38\u7528 WebpackChain \u4f7f\u7528\u793a\u4f8b",id:"\u5e38\u7528-webpackchain-\u4f7f\u7528\u793a\u4f8b",level:3},{value:"\u65b0\u589e/\u4fee\u6539/\u5220\u9664 loader",id:"\u65b0\u589e\u4fee\u6539\u5220\u9664-loader",level:4},{value:"\u65b0\u589e/\u4fee\u6539/\u5220\u9664 plugin",id:"\u65b0\u589e\u4fee\u6539\u5220\u9664-plugin",level:4}]};function i(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Function | undefined")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpackChain")," \u6765\u4fee\u6539\u9ed8\u8ba4\u7684 webpack \u914d\u7f6e\uff0c\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Function")," \u7c7b\u578b\uff0c\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"webpack-chain")," \u5bf9\u8c61\u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u5b9e\u4f8b\u6765\u4fee\u6539\u9ed8\u8ba4\u7684 webpack \u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u4e00\u4e2a\u5de5\u5177\u96c6\u5408\uff0c\u5305\u62ec",(0,l.kt)("inlineCode",{parentName:"li"},"env"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"isProd"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"CHAIN_ID")," \u7b49\u3002")),(0,l.kt)("p",null,"\u76f8\u6bd4\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpack"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"webpack-chain \u4e0d\u4ec5\u652f\u6301\u94fe\u5f0f\u8c03\u7528\uff0c\u800c\u4e14\u80fd\u591f\u57fa\u4e8e\u522b\u540d\u6765\u5b9a\u4f4d\u5230\u5185\u7f6e\u7684 Rule \u6216 Plugin\uff0c\u4ece\u800c\u5b9e\u73b0\u7cbe\u51c6\u7684\u914d\u7f6e\u4fee\u6539"),"\u3002\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpackChain")," \u6765\u4ee3\u66ff ",(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpack"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpackChain")," \u7684\u6267\u884c\u65f6\u673a\u65e9\u4e8e tools.webpack\uff0c\u56e0\u6b64\u4f1a\u88ab ",(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpack")," \u4e2d\u7684\u4fee\u6539\u6240\u8986\u76d6\u3002")),(0,l.kt)("h3",{id:"\u5de5\u5177\u96c6\u5408"},"\u5de5\u5177\u96c6\u5408"),(0,l.kt)("h4",{id:"env"},"env"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"'development' | 'production' | 'test'"))),(0,l.kt)("p",null,"\u901a\u8fc7 env \u53c2\u6570\u53ef\u4ee5\u5224\u65ad\u5f53\u524d\u73af\u5883\u4e3a development\u3001production \u8fd8\u662f test\u3002\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"isprod"},"isProd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"\u901a\u8fc7 isProd \u53c2\u6570\u53ef\u4ee5\u5224\u65ad\u5f53\u524d\u73af\u5883\u662f\u5426\u4e3a production\u3002\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: (config, { isProd }) => {\n      if (isProd) {\n        config.devtool = 'source-map';\n      }\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"target"},"target"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"'web' | 'node' | 'modern-web' | 'web-worker'"))),(0,l.kt)("p",null,"\u901a\u8fc7 target \u53c2\u6570\u53ef\u4ee5\u5224\u65ad\u5f53\u524d\u6784\u5efa\u7684\u76ee\u6807\u8fd0\u884c\u65f6\u73af\u5883\u3002\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: (config, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"isserver"},"isServer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"\u5224\u65ad\u5f53\u524d\u6784\u5efa\u7684\u76ee\u6807\u8fd0\u884c\u65f6\u73af\u5883\u662f\u5426\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"node"),"\uff0c\u7b49\u4ef7\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"target === 'node'"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: (config, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"iswebworker"},"isWebWorker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"\u5224\u65ad\u5f53\u524d\u6784\u5efa\u7684\u76ee\u6807\u8fd0\u884c\u65f6\u73af\u5883\u662f\u5426\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"web-worker"),"\uff0c\u7b49\u4ef7\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"target === 'web-worker'"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: (config, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"webpack"},"webpack"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"typeof import('webpack')"))),(0,l.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u53c2\u6570\u4f60\u53ef\u4ee5\u62ff\u5230 webpack \u5b9e\u4f8b\u3002\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: (config, { webpack }) => {\n      config.plugins.push(new webpack.ProgressPlugin());\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("h3",{id:"htmlwebpackplugin"},"HtmlWebpackPlugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"typeof import('html-webpack-plugin')"))),(0,l.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u53c2\u6570\u4f60\u53ef\u4ee5\u62ff\u5230 HtmlWebpackPlugin \u5b9e\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  tools: {\n    webpackChain: (chain, { HtmlWebpackPlugin }) => {\n      console.log(HtmlWebpackPlugin);\n    },\n  },\n});\n")),(0,l.kt)("h4",{id:"chain_id"},"CHAIN_ID"),(0,l.kt)("p",null,"builder \u4e2d\u9884\u5148\u5b9a\u4e49\u4e86\u4e00\u4e9b\u5e38\u7528\u7684 Chain ID\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e9b ID \u6765\u5b9a\u4f4d\u5230\u5185\u7f6e\u7684 Rule \u6216 Plugin\u3002"),(0,l.kt)("h5",{id:"chain_idrule"},"CHAIN_ID.RULE"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RULE.MJS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"td"},"mjs")," \u7684\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RULE.JS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"td"},"js")," \u7684\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RULE.TS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"td"},"ts")," \u7684\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RULE.CSS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"td"},"css")," \u7684\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RULE.LESS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"td"},"less")," \u7684\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RULE.SASS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"td"},"sass")," \u7684\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RULE.PUG")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"td"},"pug")," \u7684\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RULE.TOML")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"td"},"toml")," \u7684\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RULE.YAML")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"td"},"yaml")," \u7684\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RULE.FONT")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u5b57\u4f53\u7684\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RULE.IMAGE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u56fe\u7247\u7684\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RULE.MEDIA")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u5a92\u4f53\u8d44\u6e90\u7684\u89c4\u5219")))),(0,l.kt)("h3",{id:"chain_idone_of"},"CHAIN_ID.ONE_OF"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"ONE_OF.XXX")," \u53ef\u4ee5\u5339\u914d\u5230\u89c4\u5219\u6570\u7ec4\u4e2d\u7684\u67d0\u4e00\u7c7b\u89c4\u5219\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ONE_OF.SVG")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 SVG \u7684\u89c4\u5219\uff0c\u5728 data URI \u548c\u5355\u72ec\u6587\u4ef6\u4e4b\u95f4\u81ea\u52a8\u9009\u62e9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ONE_OF.SVG_URL")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 SVG \u7684\u89c4\u5219\uff0c\u8f93\u51fa\u4e3a\u5355\u72ec\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ONE_OF.SVG_INLINE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 SVG \u7684\u89c4\u5219\uff0c\u4f5c\u4e3a data URI \u5185\u8054\u5230 bundle \u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ONE_OF.SVG_ASSETS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406 SVG \u7684\u89c4\u5219\uff0c\u5728 data URI \u548c\u5355\u72ec\u6587\u4ef6\u4e4b\u95f4\u81ea\u52a8\u9009\u62e9")))),(0,l.kt)("h3",{id:"chain_iduse"},"CHAIN_ID.USE"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"USE.XXX")," \u53ef\u4ee5\u5339\u914d\u5230\u5bf9\u5e94\u7684 loader\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.TS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"ts-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.CSS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"css-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.LESS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"less-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.SASS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"sass-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.PUG")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"pug-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.TOML")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"toml-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.YAML")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"yaml-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.FILE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"file-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.URL")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"url-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.SVGR")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"@svgr/webpack"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.BABEL")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"babel-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.STYLE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"style-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.POSTCSS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"postcss-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.MARKDOWN")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"markdown-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.CSS_MODULES_TS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"css-modules-typescript-loader"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE.MINI_CSS_EXTRACT")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"mini-css-extract-plugin.loader"))))),(0,l.kt)("h3",{id:"chain_idplugin"},"CHAIN_ID.PLUGIN"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"PLUGIN.XXX")," \u53ef\u4ee5\u5339\u914d\u5230\u5bf9\u5e94\u7684 plugin\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.HMR")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"HotModuleReplacementPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.COPY")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"CopyWebpackPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.HTML")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"HtmlWebpackPlugin"),"\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u62fc\u63a5 entry \u540d\u79f0\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"${PLUGIN.HTML}-${entryName}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.DEFINE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"DefinePlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.IGNORE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"IgnorePlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.BANNER")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"BannerPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.PROGRESS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"Webpackbar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.APP_ICON")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"AppIconPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.LOADABLE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"LoadableWebpackPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.MANIFEST")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"WebpackManifestPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.TS_CHECKER")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"ForkTsCheckerWebpackPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.INLINE_HTML")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"InlineChunkHtmlPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.BUNDLE_ANALYZER")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"WebpackBundleAnalyzer"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.BOTTOM_TEMPLATE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"BottomTemplatePlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.MINI_CSS_EXTRACT")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"MiniCssExtractPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.REACT_FAST_REFRESH")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"ReactFastRefreshPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.NODE_POLYFILL_PROVIDE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u5904\u7406 node polyfill \u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"ProvidePlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.INSPECTOR")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"@modern-js/inspector-webpack-plugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.SUBRESOURCE_INTEGRITY")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"webpack-subresource-integrity"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PLUGIN.ASSETS_RETRY")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 Builder \u4e2d\u7684 webpack \u9759\u6001\u8d44\u6e90\u91cd\u8bd5\u63d2\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"td"},"WebpackAssetsRetryPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AUTO_SET_ROOT_SIZE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 Builder \u4e2d\u7684\u81ea\u52a8\u8bbe\u7f6e\u6839\u5b57\u4f53\u5927\u5c0f\u63d2\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"td"},"AutoSetRootSizePlugin"))))),(0,l.kt)("h3",{id:"chain_idminimizer"},"CHAIN_ID.MINIMIZER"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"MINIMIZER.XXX")," \u53ef\u4ee5\u5339\u914d\u5230\u5bf9\u5e94\u7684\u538b\u7f29\u5de5\u5177\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MINIMIZER.JS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"TerserWebpackPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MINIMIZER.CSS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"CssMinimizerWebpackPlugin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MINIMIZER.ESBUILD")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"ESBuildPlugin"))))),(0,l.kt)("h3",{id:"\u5e38\u7528-webpackchain-\u4f7f\u7528\u793a\u4f8b"},"\u5e38\u7528 WebpackChain \u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684\u914d\u7f6e\u793a\u4f8b\uff0c\u5b8c\u6574\u7684 webpack-chain API \u8bf7\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/neutrinojs/webpack-chain"},"webpack-chain \u6587\u6863"),"\u3002"),(0,l.kt)("h4",{id:"\u65b0\u589e\u4fee\u6539\u5220\u9664-loader"},"\u65b0\u589e/\u4fee\u6539/\u5220\u9664 loader"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpackChain: (chain, { CHAIN_ID }) => {\n      // \u65b0\u589e loader\n      chain.module\n        .rule('md')\n        .test(/\\.md$/)\n        .use('md-loader')\n        .loader('md-loader');\n      // \u4fee\u6539 loader\n      chain.module\n        .rule(CHAIN_ID.RULE.JS)\n        .use(CHAIN_ID.USE.BABEL)\n        .tap(options => {\n          options.plugins.push('babel-plugin-xxx');\n          return options;\n        });\n      // \u5220\u9664 loader\n      chain.module.rule(CHAIN_ID.RULE.JS).uses.delete(CHAIN_ID.USE.BABEL);\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"\u65b0\u589e\u4fee\u6539\u5220\u9664-plugin"},"\u65b0\u589e/\u4fee\u6539/\u5220\u9664 plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpackChain: (chain, { webpack, CHAIN_ID }) => {\n      // \u65b0\u589e\u63d2\u4ef6\n      chain.plugin('define').use(webpack.DefinePlugin, [\n        {\n          'process.env': {\n            NODE_ENV: JSON.stringify(process.env.NODE_ENV),\n          },\n        },\n      ]);\n      // \u4fee\u6539\u63d2\u4ef6\n      chain.plugin(CHAIN_ID.PLUGIN.HMR).tap(options => {\n        options[0].fullBuildTimeout = 200;\n        return options;\n      });\n      // \u5220\u9664\u63d2\u4ef6\n      chain.plugins.delete(CHAIN_ID.PLUGIN.HMR);\n    },\n  },\n};\n")))}i.isMDXComponent=!0;const p={title:"tools.webpackChain",sidebar_label:"webpackChain",sidebar_position:1},d=void 0,o={unversionedId:"configure/app/tools/webpack-chain",id:"configure/app/tools/webpack-chain",title:"tools.webpackChain",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 tools.webpackChain\u3002",source:"@site/docs/configure/app/tools/webpack-chain.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/webpack-chain",permalink:"/v2/docs/configure/app/tools/webpack-chain",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"tools.webpackChain",sidebar_label:"webpackChain",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"tsLoader",permalink:"/v2/docs/configure/app/tools/ts-loader"},next:{title:"webpack",permalink:"/v2/docs/configure/app/tools/webpack"}},k={},m=[],N={toc:m};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"BUILDER",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-webpackchain"},"tools.webpackChain"),"\u3002")),(0,l.kt)(i,{mdxType:"Main"}))}u.isMDXComponent=!0}}]);