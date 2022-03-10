"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3432],{54852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(n),f=a,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},56832:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(26260),a=n(23157),i=(n(49231),n(54852)),o=["components"],p={sidebar_position:3},u="AddInputAfter",l={unversionedId:"apis/generator/plugin/input/addInputAfter",id:"apis/generator/plugin/input/addInputAfter",isDocsHomePage:!1,title:"AddInputAfter",description:"\u5728\u9ed8\u8ba4\u8f93\u5165\u540e\u6dfb\u52a0\u8f93\u5165\u95ee\u9898\u3002",source:"@site/docs/apis/generator/plugin/input/addInputAfter.md",sourceDirName:"apis/generator/plugin/input",slug:"/apis/generator/plugin/input/addInputAfter",permalink:"/en/docs/apis/generator/plugin/input/addInputAfter",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisSidebar",previous:{title:"AddInputBefore",permalink:"/en/docs/apis/generator/plugin/input/addInputBefore"},next:{title:"SetInput",permalink:"/en/docs/apis/generator/plugin/input/setInput"}},c=[{value:"key",id:"key",children:[]},{value:"input",id:"input",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"addinputafter"},"AddInputAfter"),(0,i.kt)("p",null,"\u5728\u9ed8\u8ba4\u8f93\u5165\u540e\u6dfb\u52a0\u8f93\u5165\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n  addInputAfter: (key: string, input: IInput) => void;\n  ...\n}\n")),(0,i.kt)("h2",{id:"key"},"key"),(0,i.kt)("p",null,"Modern.js \u5de5\u7a0b\u65b9\u6848\u7684\u914d\u7f6e\u7684\u95ee\u9898\u5173\u952e\u5b57\uff0c\u5177\u4f53\u914d\u7f6e\u53ef\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/generator/config/introduce"},"\u751f\u6210\u5668\u914d\u7f6e"),"\u3002"),(0,i.kt)("h2",{id:"input"},"input"),(0,i.kt)("p",null,"\u9700\u8981\u6dfb\u52a0\u7684\u95ee\u9898\uff0c\u5177\u4f53\u7c7b\u578b\u5b9a\u4e49\u53ef\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/generator/plugin/input/type"},"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49"),"\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("p",null,"\u5728\u5305\u7ba1\u7406\u5de5\u5177\u540e\u9762\u6dfb\u52a0\u8f93\u5165\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"context.addInputAfter('packageManager', {\n    key: 'test',\n    name: '\u6d4b\u8bd5\u8f93\u5165',\n    type: 'input'\n})\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u95ee\u9898\u7684 key \u4e0d\u80fd\u548c Modern.js \u63d0\u4f9b\u7684\u9879\u76ee\u7c7b\u578b\u81ea\u8eab\u7684\u95ee\u9898\u7684 key \u91cd\u590d")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u95ee\u9898 ",(0,i.kt)("inlineCode",{parentName:"p"},"addInputAfter")," \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"addInputBefore"),"\uff0c\u5f53\u540c\u65f6\u5bf9\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," \u6dfb\u52a0 After \u95ee\u9898\u548c\u5bf9\u5176\u540e\u4e00\u4e2akey \u6dfb\u52a0 Before \u95ee\u9898\u65f6\uff0cAfter \u95ee\u9898\u4f1a\u5728 Before \u4e4b\u524d\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5f53\u9700\u8981\u5728\u76f8\u540c ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," \u524d\u9762\u6216\u8005\u540e\u9762\u6dfb\u52a0\u591a\u4e2a\u95ee\u9898\u65f6\uff0c\u53ef\u591a\u6b21\u8c03\u7528\u8be5\u65b9\u6cd5\uff0c\u95ee\u9898\u7684\u987a\u5e8f\u4f1a\u6309\u7167\u8c03\u7528\u987a\u5e8f\u8fdb\u884c\u6392\u5217\u3002"))))))}s.isMDXComponent=!0}}]);