"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9901],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(18249),r=(n(52983),n(44993));const l={toc:[{value:"Default Value",id:"default-value",level:3},{value:"Template String",id:"template-string",level:3},{value:"Example",id:"example",level:3}]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"Default:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// isProd indicates that the production build\nconst localIdentName = isProd\n  ? '[hash:base64:5]'\n  : '[path][name]__[local]--[hash:base64:5]';\n")),(0,r.kt)("p",null,"Sets the format of the className generated by CSS Modules after compilation."),(0,r.kt)("h3",{id:"default-value"},"Default Value"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cssModuleLocalIdentName")," has different default values in development and production."),(0,r.kt)("p",null,"In a production, Builder will generate shorter class names to reduce the bundle size."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import styles from './index.module.scss';\n\n// In development, the value is `.src-index-module__header--xxxxx`\n// In production, the value is `.xxxxx`\nconsole.log(styles.header);\n")),(0,r.kt)("h3",{id:"template-string"},"Template String"),(0,r.kt)("p",null,"You can use the following template strings in ",(0,r.kt)("inlineCode",{parentName:"p"},"cssModuleLocalIdentName"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[name]")," - the basename of the resource."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[local]")," - original class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[hash]")," - the hash of the string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[folder]")," - the folder relative path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[path]")," - the relative path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[file]")," - filename and path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[ext]")," - extension with leading dot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[hash:<hashDigest>:<hashDigestLength>]"),": hash with hash settings.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"cssModuleLocalIdentName")," to other value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  output: {\n    cssModuleLocalIdentName: '[hash:base64:4]',\n  },\n};\n")))}o.isMDXComponent=!0;const i={title:"output.cssModuleLocalIdentName",sidebar_label:"cssModuleLocalIdentName",sidebar_position:1},u=void 0,s={unversionedId:"configure/app/output/css-module-local-ident-name",id:"configure/app/output/css-module-local-ident-name",title:"output.cssModuleLocalIdentName",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to output.cssModuleLocalIdentName\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/configure/app/output/css-module-local-ident-name.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/css-module-local-ident-name",permalink:"/v2/en/docs/configure/app/output/css-module-local-ident-name",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"output.cssModuleLocalIdentName",sidebar_label:"cssModuleLocalIdentName",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"copy",permalink:"/v2/en/docs/configure/app/output/copy"},next:{title:"dataUriLimit",permalink:"/v2/en/docs/configure/app/output/data-uri-limit"}},p={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"BUILDER",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-cssmodulelocalidentname"},"output.cssModuleLocalIdentName"),"\u3002")),(0,r.kt)(o,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);