"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5275],{54852:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(49231);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=i,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||o;return n?t.createElement(d,a(a({ref:r},u),{},{components:n})):t.createElement(d,a({ref:r},u))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58598:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var t=n(26260),i=n(23157),o=(n(49231),n(54852)),a=["components"],l={sidebar_position:10},p="rmDir",c={unversionedId:"apis/generator/plugin/file/rmDir",id:"apis/generator/plugin/file/rmDir",isDocsHomePage:!1,title:"rmDir",description:"\u5220\u9664\u6587\u4ef6\u5939\u3002\u8be5\u65b9\u6cd5\u4f1a\u9012\u5f52\u7684\u5220\u9664\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u3002",source:"@site/docs/apis/generator/plugin/file/rmDir.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/rmDir",permalink:"/en/docs/apis/generator/plugin/file/rmDir",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"apisSidebar",previous:{title:"rmFile",permalink:"/en/docs/apis/generator/plugin/file/rmFile"},next:{title:"\u4ecb\u7ecd",permalink:"/en/docs/apis/generator/plugin/new/introduce"}},u=[{value:"dirName",id:"dirname",children:[]}],s={toc:u};function f(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rmdir"},"rmDir"),(0,o.kt)("p",null,"\u5220\u9664\u6587\u4ef6\u5939\u3002\u8be5\u65b9\u6cd5\u4f1a\u9012\u5f52\u7684\u5220\u9664\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u7528\u4e8e\u4efb\u4f55\u6587\u4ef6\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,o.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  rmDir: (dirName: string) => Promise<void>;\n  ...\n};\n")),(0,o.kt)("h2",{id:"dirname"},"dirName"),(0,o.kt)("p",null,"\u9700\u5220\u9664\u7684\u6587\u4ef6\u5939\u540d\u79f0\u6216\u6587\u4ef6\u5939\u8def\u5f84\u3002"))}f.isMDXComponent=!0}}]);