"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8599],{54852:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55311:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(26260),a=t(23157),i=(t(49231),t(54852)),o=["components"],p={sidebar_position:2},l="\u5982\u4f55\u7f16\u5199\u63d2\u4ef6",s={unversionedId:"guides/features/custom/framework-plugin/implement",id:"guides/features/custom/framework-plugin/implement",isDocsHomePage:!1,title:"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6",description:"\u5728 Modern.js \u4e2d\u652f\u6301\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u4e0d\u540c\u7684\u5de5\u7a0b\u65b9\u6848\u4e2d\u652f\u6301\u7684\u63d2\u4ef6\u4e0d\u540c\u3002\u5177\u4f53\u53ef\u4ee5\u770b\u3010Hook API\u3011\u3002",source:"@site/docs/guides/features/custom/framework-plugin/implement.md",sourceDirName:"guides/features/custom/framework-plugin",slug:"/guides/features/custom/framework-plugin/implement",permalink:"/docs/guides/features/custom/framework-plugin/implement",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u63d2\u4ef6\u53ef\u4ee5\u505a\u4ec0\u4e48",permalink:"/docs/guides/features/custom/framework-plugin/abstruct"},next:{title:"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb",permalink:"/docs/guides/features/custom/framework-plugin/relationship"}},u=[{value:"\u5b9e\u73b0\u63d2\u4ef6",id:"\u5b9e\u73b0\u63d2\u4ef6",children:[]},{value:"\u6dfb\u52a0\u63d2\u4ef6",id:"\u6dfb\u52a0\u63d2\u4ef6",children:[{value:"\u5f00\u53d1\u672c\u5730\u63d2\u4ef6",id:"\u5f00\u53d1\u672c\u5730\u63d2\u4ef6",children:[]},{value:"\u5728 npm \u4e0a\u53d1\u5e03\u63d2\u4ef6",id:"\u5728-npm-\u4e0a\u53d1\u5e03\u63d2\u4ef6",children:[]}]}],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6"},"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5728 Modern.js \u4e2d\u652f\u6301\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u4e0d\u540c\u7684\u5de5\u7a0b\u65b9\u6848\u4e2d\u652f\u6301\u7684\u63d2\u4ef6\u4e0d\u540c\u3002\u5177\u4f53\u53ef\u4ee5\u770b\u3010",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/runtime/plugin/abstruct"},"Hook API"),"\u3011\u3002"),(0,i.kt)("h2",{id:"\u5b9e\u73b0\u63d2\u4ef6"},"\u5b9e\u73b0\u63d2\u4ef6"),(0,i.kt)("p",null,"\u521b\u5efa\u63d2\u4ef6\u90fd\u662f\u901a\u8fc7\u5404\u4e2a Manager \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"createPlugin")," \u65b9\u6cd5\u6765\u521b\u5efa\u7684\uff0c\u5f62\u5f0f\u662f\uff1a"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5173\u4e8e Manager \u662f\u4ec0\u4e48\uff0c\u53ef\u4ee5\u9605\u8bfb \u3010",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/runtime/plugin/abstruct"},"\u63d2\u4ef6 API - \u6982\u89c8"),"\u3011\u4ee5\u53ca\u3010",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/runtime/plugin/manager"},"Manager"),"\u3011\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const plugin = createPlugin(() => {\n  // do somethings in plugin initialization\n\n  return {\n    prepare: () => {\n      // do somethings in prepare progress\n    },\n  };\n});\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"prepare")," \u662f Hook \u6a21\u578b\u7684\u4e2d\u95f4\u4ef6\u51fd\u6570\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6240\u6709\u7684\u63d2\u4ef6 Hook \u90fd\u662f\u51fd\u6570\uff0c\u4f46\u7ba1\u7406\u5b83\u4eec\u7684\u6a21\u578b\u4e0d\u4e00\u6837\uff0c\u5bfc\u81f4\u4ed6\u4eec\u7684\u8fd0\u884c\u89c4\u5219\u4e5f\u4e0d\u4e00\u6837\uff0c\u5177\u4f53\u770b\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/runtime/plugin/hook"},"Hook \u6a21\u578b")," API\u3002"))),(0,i.kt)("h2",{id:"\u6dfb\u52a0\u63d2\u4ef6"},"\u6dfb\u52a0\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u6dfb\u52a0\u65b9\u5f0f\u53ef\u4ee5\u67e5\u770b\uff1a\u3010",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/plugins"},"plugins (\u6846\u67b6\u63d2\u4ef6)"),"\u3011\u3002\u8fd9\u91cc\u4f1a\u4ecb\u7ecd\u5173\u4e8e Modern.js \u4e2d\u63a8\u8350\u7684\u63d2\u4ef6\u7684\u5b9e\u73b0\u548c\u6dfb\u52a0\u6d41\u7a0b\u3002"),(0,i.kt)("h3",{id:"\u5f00\u53d1\u672c\u5730\u63d2\u4ef6"},"\u5f00\u53d1\u672c\u5730\u63d2\u4ef6"),(0,i.kt)("p",null,"\u672c\u5730\u63d2\u4ef6 Modern.js \u4e2d\u63a8\u8350\u5199\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"config/plugin")," \u76ee\u5f55\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=config/plugin/foo.ts",title:"config/plugin/foo.ts"},"import { createPlugin } from '@modern-js/core'\n\nexport default createPlugin(() => {\n  return {\n    /** some hook middleware */\n  };\n});\n")),(0,i.kt)("p",null,"\u7136\u540e\u5c06\u5b83\u7684\u6587\u4ef6\u5730\u5740\u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  plugins: [\n    {\n      cli: require.resolve('./config/plugin/foo.ts'),\n    },\n  ],\n});\n")),(0,i.kt)("h3",{id:"\u5728-npm-\u4e0a\u53d1\u5e03\u63d2\u4ef6"},"\u5728 npm \u4e0a\u53d1\u5e03\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u5f00\u53d1 Modern.js \u63d2\u4ef6\u5e76\u5c06\u5176\u53d1\u5e03\u5230 npm\uff0c\u63a8\u8350\u4f7f\u7528 Modern.js \u4e2d\u7684\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u6765\u7ba1\u7406\u548c\u6784\u5efa\uff0c\u5982\u679c\u9700\u8981\u5c06\u5b83\u548c\u4f7f\u7528\u9879\u76ee\u7ba1\u7406\u5728\u4e00\u8d77\uff0c\u5219\u63a8\u8350\u4f7f\u7528 Modern.js \u4e2d\u7684 Monorepo \u5de5\u7a0b\u65b9\u6848\u7ba1\u7406\u3002\u8fd9\u91cc\u5c31\u7b80\u5355\u7684\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u6f14\u793a\u4e00\u4e0b\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u6839\u636e\u3010",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/features/modules/create-project"},"\u9879\u76ee\u521b\u5efa"),"\u3011\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u9879\u76ee\uff0c\u8c03\u6574\u9879\u76ee\u540d\u79f0\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "custom-plugin"\n  ...\n}\n')),(0,i.kt)("p",null,"\u7136\u540e\u65b0\u5efa\u5bf9\u5e94\u7684\u63d2\u4ef6\u6587\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=config/plugin/index.ts",title:"config/plugin/index.ts"},"import { createPlugin } from '@modern-js/core'\n\nexport default createPlugin(() => {\n  return {\n    /** some hook middleware */\n  };\n});\n")),(0,i.kt)("p",null,"\u53d1\u5e03\u4e4b\u540e\uff0c\u5b89\u88c5\u5230\u9700\u8981\u4f7f\u7528\u7684\u9879\u76ee ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add custom-plugin"),"\uff0c\u8fd9\u91cc\u4ee5\u4e00\u4e2a\u5e94\u7528\u9879\u76ee\u4e3a\u4f8b\uff0c\u7136\u540e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\u6dfb\u52a0\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  plugins: [\n    {\n      cli: require.resolve('custom-plugin'),\n    },\n  ],\n});\n")),(0,i.kt)("p",null,"\u5f53\u5f00\u53d1\u8005\u53d1\u73b0\u63d2\u4ef6\u65b9\u9762\u7684\u7a7a\u7f3a\uff0c\u6b22\u8fce\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u6765\u4e00\u8d77\u5efa\u8bbe Modern.js \u63d2\u4ef6\u751f\u6001\u3002"))}m.isMDXComponent=!0}}]);