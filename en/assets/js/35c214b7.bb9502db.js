"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4245],{54852:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39691:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(26260),o=n(23157),i=(n(49231),n(54852)),a=["components"],s={title:"CSS-In-JS API",sidebar_position:2},p=void 0,c={unversionedId:"apis/runtime/utility/css-in-js",id:"apis/runtime/utility/css-in-js",isDocsHomePage:!1,title:"CSS-In-JS API",description:"\u901a\u8fc7 Style Component \u5728\u9875\u9762\u4e0a\u4f7f\u7528 CSS\u3002",source:"@site/docs/apis/runtime/utility/css-in-js.md",sourceDirName:"apis/runtime/utility",slug:"/apis/runtime/utility/css-in-js",permalink:"/en/docs/apis/runtime/utility/css-in-js",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"CSS-In-JS API",sidebar_position:2},sidebar:"apisSidebar",previous:{title:"hook",permalink:"/en/docs/apis/runtime/web-server/hook"},next:{title:"loadable",permalink:"/en/docs/apis/runtime/utility/loadable/loadable"}},l=[{value:"API",id:"api",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u901a\u8fc7 Style Component \u5728\u9875\u9762\u4e0a\u4f7f\u7528 CSS\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import styled from '@modern-js/runtime/styled';\n")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"styled")," \u5177\u4f53API\uff0c\u8bf7\u770b\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/api"},"styled-component api"),"\u3002"),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"\u8bf7\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/api"},"styled-component API"),"\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import styled from \'@modern-js/runtime/styled\';\n\nconst Button = styled.button`\n  background: palevioletred;\n  border-radius: 3px;\n  border: none;\n  color: white;\n`\n\nconst TomatoButton = styled(Button)`\n  background: tomato;\n`\n\nrender(\n  <>\n    <Button>I\'m purple.</Button>\n    <br />\n    <TomatoButton>I\'m red.</TomatoButton>\n  </>\n)\n`\n\nrender(\n  <div>\n    <Button\n      href="https://github.com/styled-components/styled-components"\n      target="_blank"\n      rel="noopener"\n      primary\n    >\n      GitHub\n    </Button>\n\n    <Button as={Link} href="/docs">\n      Documentation\n    </Button>\n  </div>\n)\n')))}m.isMDXComponent=!0}}]);