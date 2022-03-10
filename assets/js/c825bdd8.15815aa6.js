"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[752],{54852:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22505:function(e,t,n){var a=n(49231);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},15175:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(49231),r=n(13529);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(1506),s="tabItem_LOdV",c="tabItemActive_XMHB";var l=function(e){var t,n=e.lazy,r=e.block,l=e.defaultValue,p=e.values,m=e.groupId,u=e.className,d=a.Children.toArray(e.children),f=null!=p?p:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=l?l:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),h=k.tabGroupChoices,g=k.setTabGroupChoices,b=(0,a.useState)(v),N=b[0],y=b[1],C=[];if(null!=m){var w=h[m];null!=w&&w!==N&&f.some((function(e){return e.value===w}))&&y(w)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;y(a),null!=m&&(g(m,a),setTimeout((function(){var e,n,a,r,o,i,s,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},u)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:A,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},13529:function(e,t,n){var a=(0,n(49231).createContext)(void 0);t.Z=a},24163:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return f}});var a=n(26260),r=n(23157),o=(n(49231),n(54852)),i=n(15175),s=n(22505),c=["components"],l={title:"\u4ece BFF \u83b7\u53d6\u6570\u636e"},p=void 0,m={unversionedId:"guides/tutorials/c09-bff/9.3-fetch-bff",id:"guides/tutorials/c09-bff/9.3-fetch-bff",isDocsHomePage:!1,title:"\u4ece BFF \u83b7\u53d6\u6570\u636e",description:"\u4e0a\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u3010 \u51fd\u6570\u5199\u6cd5 \u3011\u7684 BFF\uff0c\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u7528\u8be5\u6a21\u5f0f\u4e3a\u8054\u7cfb\u4eba\u5217\u8868\u5b9e\u73b0\u4e00\u4e2a\u6570\u636e\u63a5\u53e3\u3002",source:"@site/docs/guides/tutorials/c09-bff/9.3-fetch-bff.md",sourceDirName:"guides/tutorials/c09-bff",slug:"/guides/tutorials/c09-bff/9.3-fetch-bff",permalink:"/docs/guides/tutorials/c09-bff/9.3-fetch-bff",tags:[],version:"current",frontMatter:{title:"\u4ece BFF \u83b7\u53d6\u6570\u636e"},sidebar:"guidesSidebar",previous:{title:"\u542f\u7528 BFF",permalink:"/docs/guides/tutorials/c09-bff/9.2-enable-bff"},next:{title:"\u5e94\u7528\u67b6\u6784",permalink:"/docs/guides/tutorials/c10-model/10.1-application-architecture"}},u=[],d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u3010 \u51fd\u6570\u5199\u6cd5 \u3011\u7684 BFF\uff0c\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u7528\u8be5\u6a21\u5f0f\u4e3a\u8054\u7cfb\u4eba\u5217\u8868\u5b9e\u73b0\u4e00\u4e2a\u6570\u636e\u63a5\u53e3\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u9996\u5148\u628a\u4e0d\u9700\u8981\u7684\u6837\u677f\u6587\u4ef6\u6e05\u7406\u6389\uff0c\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," \u91cd\u547d\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"contacts.ts"),"\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -r api/info api/_app.ts\nmv api/index.ts api/contacts.ts\n"))),(0,o.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"rm -r api/info\nrm api/_app.ts\nmv api/index.ts api/contacts.ts\n")))),(0,o.kt)("p",null,"\u6b64\u65f6 API \u8def\u7531\u5c06\u53d8\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/contacts"),"\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Marak/Faker.js"},"faker")," \u6765 mock \u9700\u8981\u7684\u6570\u636e\uff0c\u9996\u5148\u5b89\u88c5\u4f9d\u8d56\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add faker\n")),(0,o.kt)("p",null,"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"api/contacts.ts")," \u5185\u5bb9\u6539\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { name, internet } from 'faker';\n\nexport const get = async () => {\n  const mockData = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n    };\n  });\n\n  return { code: 200, data: mockData };\n};\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6570\u636e\u540c\u6837\u53ef\u4ee5\u4ece\u8fdc\u7aef\u63a5\u53e3\u83b7\u53d6\uff0c\u6b64\u5904\u4ec5\u4e3a\u4e86\u6f14\u793a\u3002"))),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/contacts"),"\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/api-result.png",alt:"browser-result"})),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/contacts/App.tsx")," \u91cc\u786c\u7f16\u7801\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"mockData")," \u6539\u6210\u4ece BFF \u52a0\u8f7d\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5c06\u4e1a\u52a1\u903b\u8f91\u8fc1\u79fb\u5230\u7ec4\u4ef6\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u53ea\u4fdd\u7559\u7b80\u5355\u7684\u8def\u7531\u90e8\u5206\uff0c\u6267\u884c\uff1a"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/contacts/components/AllContacts/\nmkdir -p src/contacts/components/ArchivedContacts/\ntouch src/contacts/components/AllContacts/index.tsx\ntouch src/contacts/components/ArchivedContacts/index.tsx\n"))),(0,o.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/contacts/components/AllContacts/\nmkdir -p src/contacts/components/ArchivedContacts/\nni src/contacts/components/AllContacts/index.tsx\nni src/contacts/components/ArchivedContacts/index.tsx\n")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ArchivedContacts/index.tsx")," \u7684\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { List } from 'antd';\nimport Item from '../Item';\n\nconst getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockArchivedData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n]);\n\nconst ArchivedContacts = () => (\n  <List\n    dataSource={mockArchivedData}\n    renderItem={info => <Item key={info.name} info={info} />}\n  />\n);\n\nexport default ArchivedContacts;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AllContacts/index.tsx")," \u7684\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState, useEffect } from 'react';\nimport { List } from 'antd';\nimport { get as concats } from '@api/contacts';\nimport Item from '../Item';\n\nconst AllContacts = () => {\n  const [list, setList] = useState(\n    [] as Array<{ name: string; email: string; avatar: string }>,\n  );\n  const loadMockData = async () => {\n    const { data } = await concats();\n    setList(data);\n  };\n  useEffect(() => {\n    if (!list.length) {\n      loadMockData();\n    }\n  });\n  return (\n    (list.length && (\n      <List\n        dataSource={list}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    )) || (\n      <div className=\"p-4 items-center border-gray-200 border-b border-t custom-text-gray\">\n        Pending...\n      </div>\n    )\n  );\n};\n\nexport default AllContacts;\n")),(0,o.kt)("p",null,"\u5728 Modern.js \u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u51fd\u6570\uff08\u524d\u540e\u7aef\u4e00\u4f53\u5316\uff09\u7684\u65b9\u5f0f\uff0c\u76f4\u63a5\u8c03\u7528 BFF \u63a5\u53e3\uff0c\u8c03\u7528\u65f6\u65e0\u9700\u5173\u5fc3\u57df\u540d\u3001\u8def\u5f84\u7b49\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u521b\u5efa BFF \u65f6\uff0cModern.js \u5df2\u7ecf\u9ed8\u8ba4\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconig.json")," \u4e2d\u6ce8\u5165\u4e86\u522b\u540d\u3002\u8fd9\u4e5f\u662f\u4e4b\u524d\u63d0\u5230\u7684\uff0c\u751f\u6210\u5668\u5728\u9879\u76ee\u521b\u5efa\u4e4b\u540e\u5e76\u4e0d\u4f1a\u88ab\u629b\u5f03\uff0c\u4ecd\u65e7\u53ef\u4ee5\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4e0d\u65ad\u4e3a\u9879\u76ee\u63d0\u4f9b\u65b0\u7684\u5185\u5bb9\u3002"))),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/contacts/App.tsx"),"\uff0c\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," \u7ec4\u4ef6\u7684\u8c03\u7528\u4ee3\u7801\u66ff\u6362\u6210\u4e0a\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"AllContacts")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"ArchivedContacts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<Route path="/" exact={true}>\n  <Helmet>\n    <title>All</title>\n  </Helmet>\n  <AllContacts />\n</Route>\n<Route path="/archives" exact={true}>\n  <Helmet>\n    <title>Archives</title>\n  </Helmet>\n  <ArchivedContacts />\n</Route>\n')),(0,o.kt)("p",null,"\u5220\u9664 ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u91cc\u7684 mock \u6570\u636e\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," \u7ec4\u4ef6\uff0c\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," \u7ec4\u4ef6\u66ff\u6362\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"ContactList"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { Radio, RadioChangeEvent } from 'antd';\nimport { Route, Switch, useHistory } from '@modern-js/runtime/router';\nimport { Helmet } from '@modern-js/runtime/head';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport './styles/utils.css';\nimport AllContacts from './components/AllContacts';\nimport ArchivedContacts from './components/ArchivedContacts';\n")),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u518d\u6253\u5f00\u9875\u9762",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/contacts"),"\uff0c\u53ef\u4ee5\u770b\u5230\u9875\u9762\u52a0\u8f7d\u540e\uff0c\u4f1a\u5148\u521d\u59cb\u5316\u8054\u7cfb\u4eba\u6570\u636e\uff08\u663e\u793a pending\uff09\uff0c\u4e4b\u540e\u6bcf\u6b21\u5207\u6362\u5230 All \u5217\u8868\uff0c\u4e5f\u4f1a\u91cd\u65b0\u8bf7\u6c42\u8054\u7cfb\u4eba\u6570\u636e\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/browser-result.png",alt:"browser-result"})),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c09/hello-modern-3"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}f.isMDXComponent=!0},1506:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);