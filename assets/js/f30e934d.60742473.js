"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3069],{54852:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(49231);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,g=s["".concat(u,".").concat(f)]||s[f]||d[f]||i;return r?t.createElement(g,a(a({ref:n},l),{},{components:r})):t.createElement(g,a({ref:n},l))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},43607:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var t=r(26260),o=r(23157),i=(r(49231),r(54852)),a=["components"],p={sidebar_position:1},u="OnForged",c={unversionedId:"apis/generator/plugin/hook/onForged",id:"apis/generator/plugin/hook/onForged",isDocsHomePage:!1,title:"OnForged",description:"onForged \u51fd\u6570\u4e3a\u751f\u6210\u5668\u63d2\u4ef6\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u5176\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u6587\u4ef6\u7c7b\u578b\u64cd\u4f5c\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u5c06\u5728 base \u7684\u5de5\u7a0b\u65b9\u6848\u6587\u4ef6\u64cd\u4f5c\u5b8c\u6210\u540e\u8fdb\u884c\u3002",source:"@site/docs/apis/generator/plugin/hook/onForged.md",sourceDirName:"apis/generator/plugin/hook",slug:"/apis/generator/plugin/hook/onForged",permalink:"/docs/apis/generator/plugin/hook/onForged",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisSidebar",previous:{title:"readDir",permalink:"/docs/apis/generator/plugin/info/readDir"},next:{title:"AfterForged",permalink:"/docs/apis/generator/plugin/hook/afterForged"}},l=[{value:"func",id:"func",children:[{value:"api",id:"api",children:[]},{value:"inputData",id:"inputdata",children:[]}]}],d={toc:l};function s(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"onforged"},"OnForged"),(0,i.kt)("p",null,"onForged \u51fd\u6570\u4e3a\u751f\u6210\u5668\u63d2\u4ef6\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u5176\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u6587\u4ef6\u7c7b\u578b\u64cd\u4f5c\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u5c06\u5728 base \u7684\u5de5\u7a0b\u65b9\u6848\u6587\u4ef6\u64cd\u4f5c\u5b8c\u6210\u540e\u8fdb\u884c\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type PluginForgedFunc = (\n  api: ForgedAPI,\n  inputData: Record<string, unknown>,\n) => void | Promise<void>;\n\nexport interface IPluginContext {\n  onForged: (func: PluginForgedFunc) => void;\n  ...\n}\n")),(0,i.kt)("h2",{id:"func"},"func"),(0,i.kt)("p",null,"onForged \u53c2\u6570\u662f\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u4e3a api \u548c inputData\u3002"),(0,i.kt)("h3",{id:"api"},"api"),(0,i.kt)("p",null,"\u5728 onForged \u751f\u547d\u5468\u671f\u4e2d\u652f\u6301\u7684\u51fd\u6570\u5217\u8868\uff0c\u5177\u4f53\u53ef\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/generator/plugin/file/introduce"},"\u6587\u4ef6\u64cd\u4f5c API")," \u548c",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/generator/plugin/new/introduce"},"\u542f\u7528\u529f\u80fd API"),"\u3002"),(0,i.kt)("h3",{id:"inputdata"},"inputData"),(0,i.kt)("p",null,"\u5f53\u524d\u7528\u6237\u8f93\u5165\uff0c\u53ef\u7528\u4e8e\u83b7\u53d6\u7528\u6237\u5f53\u524d\u7684\u8f93\u5165\u4fe1\u606f\u53ca\u914d\u7f6e\u4fe1\u606f\u3002"))}s.isMDXComponent=!0}}]);