"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3740],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),f=a,d=u["".concat(i,".").concat(f)]||u[f]||c[f]||l;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var r=n(18249),a=(n(52983),n(44993));const l={toc:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,a.kt)("li",{parentName:"ul"},"Default:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type DefaultParameters = {\n  meta: string; // \u5bf9\u5e94 html.meta \u914d\u7f6e\n  title: string; // \u5bf9\u5e94 html.title \u914d\u7f6e\n  mountId: string; // \u5bf9\u5e94 html.mountId \u914d\u7f6e\n  entryName: string; // \u5165\u53e3\u540d\u79f0\n  assetPrefix: string; // \u5bf9\u5e94 output.assetPrefix \u914d\u7f6e\n  compilation: webpack.Compilation; // \u5bf9\u5e94 webpack \u7684 compilation \u5bf9\u8c61\n  webpackConfig: Configuration; // webpack \u914d\u7f6e\n  // htmlWebpackPlugin \u5185\u7f6e\u7684\u53c2\u6570\n  // \u8be6\u89c1 https://github.com/jantimon/html-webpack-plugin\n  htmlWebpackPlugin: {\n    tags: object;\n    files: object;\n    options: object;\n  };\n};\n")),(0,a.kt)("p",null,"\u5b9a\u4e49 HTML \u6a21\u677f\u4e2d\u7684\u53c2\u6570\uff0c\u5bf9\u5e94 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jantimon/html-webpack-plugin"},"html-webpack-plugin")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"templateParameters")," \u914d\u7f6e\u9879\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u914d\u7f6e\u4e3a\u5bf9\u8c61\u6216\u8005\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u662f\u5bf9\u8c61\uff0c\u4f1a\u548c\u9ed8\u8ba4\u53c2\u6570\u5408\u5e76\u3002\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  html: {\n    templateParameters: {\n      title: 'My App',\n    },\n  },\n};\n")),(0,a.kt)("p",null,"\u5982\u679c\u662f\u51fd\u6570\uff0c\u4f1a\u4f20\u5165\u9ed8\u8ba4\u53c2\u6570\uff0c\u4f60\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u4e8e\u8986\u76d6\u9ed8\u8ba4\u53c2\u6570\u3002\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  html: {\n    templateParameters: defaultParameters => {\n      console.log(defaultParameters.compilation);\n      console.log(defaultParameters.title);\n      return {\n        title: 'My App',\n      };\n    },\n  },\n};\n")),(0,a.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u5728 HTML \u6a21\u677f\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u53c2\u6570\uff0c\u53ef\u4ee5\u6dfb\u52a0\u5982\u4e0b\u8bbe\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  html: {\n    templateParameters: {\n      foo: 'bar',\n    },\n  },\n};\n")),(0,a.kt)("p",null,"\u6216\u8005\u4f7f\u7528\u51fd\u6570\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  html: {\n    templateParameters: defaultParameters => {\n      return {\n        foo: 'bar',\n      };\n    },\n  },\n};\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f60\u53ef\u4ee5\u5728 HTML \u6a21\u677f\u4e2d\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"<%= foo %>")," \u6765\u8bfb\u53d6\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<script>window.foo = '<%= foo %>'<\/script>\n")),(0,a.kt)("p",null,"\u7ecf\u8fc7\u7f16\u8bd1\u540e\u7684\u6700\u7ec8 HTML \u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<script>window.foo = 'bar'<\/script>\n")))}p.isMDXComponent=!0;const o={title:"html.templateParameters",sidebar_label:"templateParameters",sidebar_position:1},i=void 0,m={unversionedId:"configure/app/html/template-parameters",id:"configure/app/html/template-parameters",title:"html.templateParameters",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 html.templateParameters\u3002",source:"@site/docs/configure/app/html/template-parameters.md",sourceDirName:"configure/app/html",slug:"/configure/app/html/template-parameters",permalink:"/v2/docs/configure/app/html/template-parameters",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"html.templateParameters",sidebar_label:"templateParameters",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"templateParametersByEntries",permalink:"/v2/docs/configure/app/html/template-parameters-by-entries"},next:{title:"template",permalink:"/v2/docs/configure/app/html/template"}},s={},c=[],u={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-html.html#html-templateparameters"},"html.templateParameters"),"\u3002")),(0,a.kt)(p,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);