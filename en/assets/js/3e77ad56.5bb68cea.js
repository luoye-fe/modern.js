"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[900],{54852:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,g=m["".concat(p,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73283:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(26260),i=n(23157),o=(n(49231),n(54852)),a=["components"],c={sidebar_position:3},p="gitAddAndCommit",u={unversionedId:"apis/generator/plugin/git/gitAddAndCommit",id:"apis/generator/plugin/git/gitAddAndCommit",isDocsHomePage:!1,title:"gitAddAndCommit",description:"\u63d0\u4ea4\u5f53\u524d\u4ed3\u5e93\u53d8\u66f4\u3002",source:"@site/docs/apis/generator/plugin/git/gitAddAndCommit.md",sourceDirName:"apis/generator/plugin/git",slug:"/apis/generator/plugin/git/gitAddAndCommit",permalink:"/en/docs/apis/generator/plugin/git/gitAddAndCommit",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisSidebar",previous:{title:"initGitRepo",permalink:"/en/docs/apis/generator/plugin/git/initGitRepo"}},s=[{value:"commitMessage",id:"commitmessage",children:[]}],l={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gitaddandcommit"},"gitAddAndCommit"),(0,o.kt)("p",null,"\u63d0\u4ea4\u5f53\u524d\u4ed3\u5e93\u53d8\u66f4\u3002"),(0,o.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type AfterForgedAPI = {\n  gitAddAndCommit: (commitMessage: string) => Promise<void>;\n  ...\n};\n")),(0,o.kt)("h2",{id:"commitmessage"},"commitMessage"),(0,o.kt)("p",null,"\u63d0\u4ea4\u4fe1\u606f\u3002"))}m.isMDXComponent=!0}}]);