"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5190],{54852:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(49231);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?t.createElement(d,i(i({ref:n},l),{},{components:r})):t.createElement(d,i({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69745:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var t=r(26260),o=r(23157),a=(r(49231),r(54852)),i=["components"],u={sidebar_position:4},c="createSubProject",p={unversionedId:"apis/generator/plugin/new/createSubProject",id:"apis/generator/plugin/new/createSubProject",isDocsHomePage:!1,title:"createSubProject",description:"\u521b\u5efa\u5b50\u9879\u76ee\uff0c\u53ea\u652f\u6301\u9879\u76ee\u7ec4\u5de5\u7a0b\u65b9\u6848\u3002",source:"@site/docs/apis/generator/plugin/new/createSubProject.md",sourceDirName:"apis/generator/plugin/new",slug:"/apis/generator/plugin/new/createSubProject",permalink:"/docs/apis/generator/plugin/new/createSubProject",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"apisSidebar",previous:{title:"enableFunc",permalink:"/docs/apis/generator/plugin/new/enableFunc"},next:{title:"install",permalink:"/docs/apis/generator/plugin/npm/install"}},l=[{value:"solution",id:"solution",children:[]},{value:"params",id:"params",children:[]}],s={toc:l};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"createsubproject"},"createSubProject"),(0,a.kt)("p",null,"\u521b\u5efa\u5b50\u9879\u76ee\uff0c\u53ea\u652f\u6301\u9879\u76ee\u7ec4\u5de5\u7a0b\u65b9\u6848\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export enum SubSolution {\n  MWA = 'mwa',\n  MWATest = 'mwa_test',\n  Module = 'module',\n  InnerModule = 'inner_module',\n}\nexport type ForgedAPI = {\n  createSubProject: (\n    solution: SubSolution,\n    params: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n")),(0,a.kt)("h2",{id:"solution"},"solution"),(0,a.kt)("p",null,"\u5b50\u9879\u76ee\u5de5\u7a0b\u65b9\u6848\u540d\u79f0\u3002"),(0,a.kt)("h2",{id:"params"},"params"),(0,a.kt)("p",null,"\u521b\u5efa\u5b50\u9879\u76ee\u7684\u5176\u4ed6\u53c2\u6570\uff0c\u8be6\u7ec6\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/generator/config/monorepo#%E5%88%9B%E5%BB%BA%E5%AD%90%E9%A1%B9%E7%9B%AE"},"\u9879\u76ee\u7ec4\u521b\u5efa\u5b50\u9879\u76ee"),"\u3002"))}f.isMDXComponent=!0}}]);