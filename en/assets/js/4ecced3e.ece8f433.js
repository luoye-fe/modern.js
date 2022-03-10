"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7267],{54852:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22505:function(e,t,n){var a=n(49231);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},15175:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(49231),r=n(13529);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(1506),s="tabItem_LOdV",l="tabItemActive_XMHB";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,p=e.values,u=e.groupId,m=e.className,d=a.Children.toArray(e.children),f=null!=p?p:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),g=k.tabGroupChoices,y=k.setTabGroupChoices,b=(0,a.useState)(v),h=b[0],N=b[1],w=[];if(null!=u){var j=g[u];null!=j&&j!==h&&f.some((function(e){return e.value===j}))&&N(j)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),a=f[n].value;N(a),null!=u&&(y(u,a),setTimeout((function(){var e,n,a,r,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},13529:function(e,t,n){var a=(0,n(49231).createContext)(void 0);t.Z=a},39323:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var a=n(26260),r=n(23157),o=(n(49231),n(54852)),i=n(15175),s=n(22505),l=["components"],c={title:"\u4f7f\u7528 TypeScript \u8bed\u6cd5"},p=void 0,u={unversionedId:"guides/tutorials/c04-es6-plus-and-ts/4.2-use-typescript",id:"guides/tutorials/c04-es6-plus-and-ts/4.2-use-typescript",isDocsHomePage:!1,title:"\u4f7f\u7528 TypeScript \u8bed\u6cd5",description:"Modern.js \u540c\u6837\u5bf9 TypeScript \u63d0\u4f9b\u4e86\u4e00\u7b49\u516c\u6c11\u3001\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002",source:"@site/docs/guides/tutorials/c04-es6-plus-and-ts/4.2-use-typescript.md",sourceDirName:"guides/tutorials/c04-es6-plus-and-ts",slug:"/guides/tutorials/c04-es6-plus-and-ts/4.2-use-typescript",permalink:"/en/docs/guides/tutorials/c04-es6-plus-and-ts/4.2-use-typescript",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 TypeScript \u8bed\u6cd5"},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528 ES6+ \u8bed\u6cd5",permalink:"/en/docs/guides/tutorials/c04-es6-plus-and-ts/4.1-use-es6-plus"},next:{title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",permalink:"/en/docs/guides/tutorials/c04-es6-plus-and-ts/4.3-compatibility"}},m=[],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Modern.js \u540c\u6837\u5bf9 TypeScript \u63d0\u4f9b\u4e86\u4e00\u7b49\u516c\u6c11\u3001\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\uff0c\u6211\u4eec\u5c06\u5f53\u524d\u4e3a ES6+ \u8bed\u6cd5\u7684 Demo \u4fee\u6539\u4e3a Typesctipt \u8bed\u6cd5\u3002"),(0,o.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\uff1a"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv src/App.jsx src/App.tsx\n\npnpm add typescript @types/react @types/react-dom @types/node -D\n\ntouch tsconfig.json\n"))),(0,o.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv src/App.jsx src/App.tsx\n\npnpm add typescript @types/react @types/react-dom @types/node -D\n\nni tsconfig.json\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u63a5\u4e0b\u6765\u6240\u6709\u7ae0\u8282\u7684\u9879\u76ee\uff0c\u90fd\u4f1a\u4f7f\u7528 TS \u6765\u8fdb\u884c\u5f00\u53d1\u3002"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "@modern-js/tsconfig/base",\n  "compilerOptions": {\n    "declaration": false,\n    "jsx": "preserve",\n    "baseUrl": "./",\n    "paths": {\n      "@/*": ["./src/*"]\n    }\n  },\n  "include": ["src", "shared", "config"]\n}\n')),(0,o.kt)("p",null,"\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),"\uff0c\u628a\u4ee3\u7801\u6539\u6210\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\n\nconst getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nfunction App() {\n  return (\n    <ul>\n      {mockData.map(({ name, avatar, email }) => (\n        <li key={name}>\n          <img src={avatar} width={60} height={60} /> ---\n          <span>{name}</span> ---\n          <span>{email}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u8ddf ES6+ \u7684\u4ee3\u7801\u76f8\u6bd4\u6709\u4ee5\u4e0b\u4e0d\u540c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7531\u4e8e TS \u8fd8\u4e0d\u652f\u6301 ",(0,o.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator"},"Pipeline Operator")," \u8bed\u6cd5\uff0c\u9700\u8981\u628a mockData \u7684\u751f\u6210\u8fc7\u7a0b\u6539\u6210\u666e\u901a\u7684\u51fd\u6570\u8c03\u7528\u8bed\u6cd5\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9700\u8981\u58f0\u660e ",(0,o.kt)("inlineCode",{parentName:"li"},"getAvatar")," \u53c2\u6570\u7684\u7c7b\u578b\u3002")),(0,o.kt)("p",null,"\u5728 VSCode \u91cc\uff0c\u628a\u9f20\u6807\u60ac\u505c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"mockData")," \u4e0a\uff0c\u53ef\u4ee5\u770b\u5230\u5b83\u7684\u7c7b\u578b\u5df2\u7ecf\u88ab\u81ea\u52a8\u63a8\u5bfc\u51fa\u6765\u3002\u5982\u679c\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"key={name}")," \u6539\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"key={name * 2}"),"\uff0c\u53ef\u4ee5\u770b\u5230 TS \u7684\u62a5\u9519\u3002"),(0,o.kt)("p",null,"\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u53ef\u4ee5\u770b\u5230\u4e00\u6837\u7684\u8fd0\u884c\u7ed3\u679c\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u66f4\u7b80\u5355\u3001\u5f00\u7bb1\u5373\u7528\u7684\u65b9\u5f0f\uff0c\u662f\u5728\u521b\u5efa\u9879\u76ee\u7684\u65f6\u5019\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u8bed\u8a00"),"\u9009\u62e9 TS\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u4e0a\u8ff0\u6837\u677f\u4ee3\u7801\uff0c\u6e90\u4ee3\u7801\u6587\u4ef6\u4e5f\u4f1a\u81ea\u52a8\u9ed8\u8ba4\u91c7\u7528 .ts \u548c .tsx\u3002"))),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c04/hello-modern-2"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}f.isMDXComponent=!0},1506:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);