"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8225],{44993:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>d});var t=n(52983);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?t.createElement(m,o(o({ref:r},l),{},{components:n})):t.createElement(m,o({ref:r},l))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1409:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var t=n(18249),a=(n(52983),n(44993));const i={title:"source.entriesDir",sidebar_label:"entriesDir"},o=void 0,p={unversionedId:"configure/app/source/entries-dir",id:"configure/app/source/entries-dir",title:"source.entriesDir",description:"* \u7c7b\u578b\uff1a string",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/configure/app/source/entries-dir.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/entries-dir",permalink:"/v2/en/docs/configure/app/source/entries-dir",draft:!1,tags:[],version:"current",frontMatter:{title:"source.entriesDir",sidebar_label:"entriesDir"},sidebar:"configsAppSidebar",previous:{title:"enableAsyncEntry",permalink:"/v2/en/docs/configure/app/source/enable-async-entry"},next:{title:"entries",permalink:"/v2/en/docs/configure/app/source/entries"}},c={},s=[],l={toc:s};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"./src"))),(0,a.kt)("p",null,"\u9ed8\u8ba4\u4f1a\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u8bc6\u522b\u5e94\u7528\u5165\u53e3\uff0c\u53ef\u901a\u8fc7\u8be5\u9009\u9879\u81ea\u5b9a\u4e49\u5e94\u7528\u5165\u53e3\u7684\u8bc6\u522b\u76ee\u5f55\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5f53\u914d\u7f6e\u4e0e\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u65f6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    entriesDir: './src/pages'\n  }\n})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:'language-title="\u9879\u76ee\u76ee\u5f55\u7ed3\u6784"'},".\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 pages\n        \u251c\u2500\u2500 a\n        \u2502\xa0\xa0 \u2514\u2500\u2500 App.jsx\n        \u2514\u2500\u2500 b\n            \u2514\u2500\u2500 App.jsx\n")),(0,a.kt)("p",null,"Modern.js \u4f1a\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/pages")," \u76ee\u5f55\u7ed3\u6784\u751f\u6210\u6784\u5efa\u5165\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," \u548c\u5165\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),"\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," {\n   a: './src/pages/a/App.jsx',\n   b: './src/pages/b/App.jsx'\n }\n")))}u.isMDXComponent=!0}}]);