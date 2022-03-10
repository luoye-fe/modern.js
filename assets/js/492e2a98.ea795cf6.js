"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8610],{54852:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return g}});var r=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(t),g=o,f=p["".concat(l,".").concat(g)]||p[g]||c[g]||a;return t?r.createElement(f,s(s({ref:n},m),{},{components:t})):r.createElement(f,s({ref:n},m))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},23529:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var r=t(26260),o=t(23157),a=(t(49231),t(54852)),s=["components"],i={sidebar_position:6},l="\u6269\u5c55\u63d2\u4ef6 Hook",u={unversionedId:"guides/features/custom/framework-plugin/extend",id:"guides/features/custom/framework-plugin/extend",isDocsHomePage:!1,title:"\u6269\u5c55\u63d2\u4ef6 Hook",description:"\u8fd9\u4e00\u90e8\u5206\u4e3b\u8981\u662f\u901a\u8fc7\u3010\u52a8\u6001\u6ce8\u518c Hook \u6a21\u578b\u3011\u7684\u65b9\u5f0f\u6765\u6269\u5c55\u3002",source:"@site/docs/guides/features/custom/framework-plugin/extend.md",sourceDirName:"guides/features/custom/framework-plugin",slug:"/guides/features/custom/framework-plugin/extend",permalink:"/docs/guides/features/custom/framework-plugin/extend",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"\u63d2\u4ef6\u4e0e\u914d\u7f6e",permalink:"/docs/guides/features/custom/framework-plugin/config"},next:{title:"\u4e3a\u4ec0\u4e48\u9700\u8981\u751f\u6210\u5668\u63d2\u4ef6",permalink:"/docs/guides/features/custom/generator-plugin/abstruct"}},m=[],c={toc:m};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6269\u5c55\u63d2\u4ef6-hook"},"\u6269\u5c55\u63d2\u4ef6 Hook"),(0,a.kt)("p",null,"\u8fd9\u4e00\u90e8\u5206\u4e3b\u8981\u662f\u901a\u8fc7\u3010",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/runtime/plugin/manager#%E5%8A%A8%E6%80%81%E6%B3%A8%E5%86%8C-hook-%E6%A8%A1%E5%9E%8B"},"\u52a8\u6001\u6ce8\u518c Hook \u6a21\u578b"),"\u3011\u7684\u65b9\u5f0f\u6765\u6269\u5c55\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u6f14\u793a\u4e00\u4e0b\u3002\u5047\u8bbe\u6211\u4eec\u8981\u6dfb\u52a0\u4e00\u4e9b\u7ba1\u7406\u63a7\u5236\u53f0\u8f93\u51fa\u4fe1\u606f\u7684 Hook\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u521d\u59cb\u5316\u4e00\u4e2a\u7a7a\u7684\u9879\u76ee\u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0\u57fa\u7840\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ npx @modern-js/create modern-js-demo\n")),(0,a.kt)("p",null,"\u6211\u4eec\u5148\u521b\u5efa\u4e00\u4e2a Hook \u6a21\u578b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=config/plugin/message.ts",title:"config/plugin/message.ts"},"import { createWaterfall } from '@modern-js/plugin'\n\nconst message = createWaterfall<string[]>()\n")),(0,a.kt)("p",null,"\u7136\u540e\u6ce8\u518c\u5b83\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=config/plugin/message.ts",title:"config/plugin/message.ts"},"import { registerHook } from '@modern-js/core'\n\nregisterHook({\n  message\n})\n")),(0,a.kt)("p",null,"\u6dfb\u52a0 Hook \u7c7b\u578b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=config/plugin/message.ts",title:"config/plugin/message.ts"},"declare module '@modern-js/core' {\n  export interface Hooks {\n    message: typeof message;\n  }\n}\n")),(0,a.kt)("p",null,"\u521b\u5efa\u63d2\u4ef6\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"commands")," Hook \u51fd\u6570\uff0c\u6dfb\u52a0\u547d\u4ee4\u5904\u7406\u903b\u8f91\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=config/plugin/message.ts",title:"config/plugin/message.ts"},"import { createPlugin, mountHook } from '@modern-js/core'\n\nexport default createPlugin(() => {\n  return {\n    commands({ program }) {\n      program\n        .command('message')\n        .action(async () => {\n          const messages = mountHook().message([]);\n          console.log(messages.join('\\n'))\n        });\n    }\n  }\n})\n")),(0,a.kt)("p",null,"\u6700\u540e ",(0,a.kt)("inlineCode",{parentName:"p"},"config/plugin/message.ts")," \u7684\u72b6\u6001\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=config/plugin/message.ts",title:"config/plugin/message.ts"},"import { createPlugin, registerHook, mountHook } from '@modern-js/core'\nimport { createWaterfall } from '@modern-js/plugin'\n\nconst message = createWaterfall<string[]>()\n\nregisterHook({\n  message\n})\n\ndeclare module '@modern-js/core' {\n  export interface Hooks {\n    message: typeof message;\n  }\n}\n\nexport default createPlugin(() => {\n  return {\n    commands({ program }) {\n      program\n        .command('message')\n        .action(async () => {\n          const messages = mountHook().message([]);\n          console.log(messages.join('\\n'))\n        });\n    }\n  }\n});\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\u6dfb\u52a0\u8fd9\u4e2a\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/runtime'\n\nexport default defineConfig({\n  plugins: [{\n    cli: require.resolve('./config/plugin/message.ts')\n  }]\n})\n")),(0,a.kt)("p",null,"\u8fd9\u65f6\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npx modern message")," \u5c31\u4f1a\u6267\u884c\u76f8\u5173\u903b\u8f91\uff0c\u4f46\u7531\u4e8e\u6ca1\u6709\u6536\u96c6\u5230\u4efb\u4f55\u4fe1\u606f\uff0c\u6240\u4ee5\u63a7\u5236\u53f0\u8f93\u51fa\u4e3a\u7a7a\u3002"),(0,a.kt)("p",null,"\u90a3\u8fd9\u91cc\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=config/plugin/foo.ts",title:"config/plugin/foo.ts"},"import { createPlugin } from '@modern-js/core'\n\nexport default createPlugin(() => {\n  return {\n    message(list) {\n      return [\n        ...list,\n        '[foo] line 0',\n        '[foo] line 1',\n      ]\n    }\n  }\n})\n")),(0,a.kt)("p",null,"\u5c06\u5b83\u6dfb\u52a0\u5230\u914d\u7f6e\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/runtime'\n\nexport default defineConfig({\n  plugins: [\n    require.resolve('./plugin'),\n    require.resolve('./fooPlugin'),\n  ]\n})\n")),(0,a.kt)("p",null,"\u8fd9\u65f6\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npx modern message")," \u5c31\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u770b\u5230\u4fe1\u606f\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ modern message\n[foo] line 0\n[foo] line 1\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u9762\u8fd9\u79cd\u65b9\u5f0f\u5c31\u53ef\u4ee5\u6269\u5c55\u51fa\u62e5\u6709\u5404\u79cd\u80fd\u529b\u7684\u63d2\u4ef6 Hook\u3002"))}p.isMDXComponent=!0}}]);