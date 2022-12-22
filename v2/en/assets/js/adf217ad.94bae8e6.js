"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[420],{44993:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(52983);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,v=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(v,o(o({ref:n},d),{},{components:t})):a.createElement(v,o({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},40446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(18249),i=(t(52983),t(44993));const r={title:"Environment Variable",sidebar_position:7},o=void 0,l={unversionedId:"guides/basic-features/env-vars",id:"guides/basic-features/env-vars",title:"Environment Variable",description:"Modern.js provides support for environment variables, including built-in environment variables and custom environment variables.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/basic-features/env-vars.md",sourceDirName:"guides/basic-features",slug:"/guides/basic-features/env-vars",permalink:"/v2/en/docs/guides/basic-features/env-vars",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Environment Variable",sidebar_position:7},sidebar:"guidesSidebar",previous:{title:"Mock",permalink:"/v2/en/docs/guides/basic-features/mock"},next:{title:"Alias",permalink:"/v2/en/docs/guides/basic-features/alias"}},s={},p=[{value:"Built-in Environment",id:"built-in-environment",level:2},{value:"NODE_ENV",id:"node_env",level:3},{value:"MODERN_ENV",id:"modern_env",level:3},{value:"MODERN_TARGET",id:"modern_target",level:3},{value:"Custom Environment Variables",id:"custom-environment-variables",level:2},{value:"Specify via <code>shell</code>",id:"specify-via-shell",level:3},{value:"Specify via <code>.env</code> file",id:"specify-via-env-file",level:3},{value:"Using Environment Variables",id:"using-environment-variables",level:2},{value:"Convention Names",id:"convention-names",level:3},{value:"Any Other Names",id:"any-other-names",level:3},{value:"Use Global Replacement",id:"use-global-replacement",level:2}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Modern.js provides support for environment variables, including built-in environment variables and custom environment variables."),(0,i.kt)("h2",{id:"built-in-environment"},"Built-in Environment"),(0,i.kt)("h3",{id:"node_env"},"NODE_ENV"),(0,i.kt)("p",null,"The current execution environment and is a ",(0,i.kt)("strong",{parentName:"p"},"read-only")," environment variable whose have different values under different execution commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"production"),"\uff1athe default value when exec ",(0,i.kt)("inlineCode",{parentName:"li"},"modern build")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"modern serve"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test"),"\uff1athe default value when exec ",(0,i.kt)("inlineCode",{parentName:"li"},"modern test"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"development"),"\uff1athe default value when exec ",(0,i.kt)("inlineCode",{parentName:"li"},"modern dev"),", alse the default value of other case.")),(0,i.kt)("h3",{id:"modern_env"},"MODERN_ENV"),(0,i.kt)("p",null,"Set the current execution environment manually. In addition to the values in the NODE_ENV, custom environment names are supported here, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"staging"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"boe"),", etc."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"MODERN_ENV priority is higher than NODE_ENV.")),(0,i.kt)("h3",{id:"modern_target"},"MODERN_TARGET"),(0,i.kt)("p",null,"Auto inject when use ",(0,i.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime"),"\uff0cUsed to distinguish between SSR and CSR environments. Developers can judge by themselves in the code, and dead code will be removed by default when building."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},"function App() {\n  if (process.env.MODERN_TARGET === 'browser') {\n    console.log(window.innerHeight);\n  };\n};\n")),(0,i.kt)("p",null,"In the development environment, you can see that the SSR and CSR bundles as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="dist/bundles/main.js"',title:'"dist/bundles/main.js"'},"function App() {\n  if (false) {}\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="dist/static/main.js"',title:'"dist/static/main.js"'},"function App() {\n  if (true) {\n    console.log(window.innerHeight);\n  }\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In a production environment, dead code is removed, such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement above.")),(0,i.kt)("p",null,"This can provide different products for different client sides to ensure that the bundle size is minimized. It can also be convenient to deal with some side effects in the code in different environments."),(0,i.kt)("h2",{id:"custom-environment-variables"},"Custom Environment Variables"),(0,i.kt)("p",null,"Custom environment variables can be specified in both ",(0,i.kt)("inlineCode",{parentName:"p"},"shell")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," files."),(0,i.kt)("h3",{id:"specify-via-shell"},"Specify via ",(0,i.kt)("inlineCode",{parentName:"h3"},"shell")),(0,i.kt)("p",null,"Add custom environment variables before the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"REACT_APP_FOO=123 BAR=456 pnpm run dev\n")),(0,i.kt)("h3",{id:"specify-via-env-file"},"Specify via ",(0,i.kt)("inlineCode",{parentName:"h3"},".env")," file"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the project root and add custom environment variables, which are added to the Node.js process by default, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env"},"REACT_APP_FOO=123\nBAR=456\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file follows the following loading rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".env"),"\uff1adefault."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".env.{ MODERN_ENV | NODE_ENV }"),"\uff1aSetting environment variables for a specific environment overrides the same in ",(0,i.kt)("inlineCode",{parentName:"li"},".env"),".")),(0,i.kt)("p",null,"When you need to use different config according to the environment, you can define environment variables in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file corresponding to the environment name, and manually set the execution environment when starting the project."),(0,i.kt)("p",null,"For example, when starting a project with the following command\uff0cthe ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".env.staging")," will load:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"MODERN_ENV=staging pnpm run dev\n")),(0,i.kt)("h2",{id:"using-environment-variables"},"Using Environment Variables"),(0,i.kt)("h3",{id:"convention-names"},"Convention Names"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," can be used directly in front-end code. In addition, custom environment variables starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"MODERN_")," can also be used directly in code."),(0,i.kt)("p",null,"For Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"if (process.env.NODE_ENV === 'development') {\n  // do something\n}\n")),(0,i.kt)("p",null,"After executing the ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),", you can see the following bundle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"if (true) {\n  // do something\n}\n")),(0,i.kt)("p",null,"In custom HTML templates, you can also use such environment variables directly. For example, in ",(0,i.kt)("inlineCode",{parentName:"p"},"config/html/head.html"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="test" content="<process.env.NODE_ENV>">\n')),(0,i.kt)("h3",{id:"any-other-names"},"Any Other Names"),(0,i.kt)("p",null,"If you need to use environment variables with any other names in your code\uff0cyou can config ",(0,i.kt)("a",{parentName:"p",href:"/docs/configure/app/source/global-vars"},(0,i.kt)("inlineCode",{parentName:"a"},"source.globalVars")),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  source: {\n    globalVars: {\n      'process.env.VERSION': process.env.VERSION,\n    }.\n  },\n});\n")),(0,i.kt)("p",null,"At this point, the ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.VERSION")," in the code will be replaced with the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"VERSION")," in the environment variables."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"source.globalVars")," also supports replacing other expressions or strings with specified values, not limited to environment variables.")),(0,i.kt)("h2",{id:"use-global-replacement"},"Use Global Replacement"),(0,i.kt)("p",null,"In addition to environment variables, Modern.js also supports replacing variables in code with other values or expressions, which can be used like distinguish development environment and production environment in code."),(0,i.kt)("p",null,"For example, converts the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"TWO")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"1 + 1"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  source: {\n    define: {\n      TWO: '1 + 1',\n    },\n  },\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const foo = TWO;\n\n// \u2b07\ufe0f Turn into being...\nconst foo = 1 + 1;\n")),(0,i.kt)("p",null,"In most cases, ",(0,i.kt)("inlineCode",{parentName:"p"},"source.globalVars")," is already sufficient to replace variables. But the values passed in by ",(0,i.kt)("inlineCode",{parentName:"p"},"source.globalVars")," will be serialized by JSON by default. So it cannot be replaced like ",(0,i.kt)("inlineCode",{parentName:"p"},"1 + 1")," in the example above\uff0cat this time, we need use ",(0,i.kt)("a",{parentName:"p",href:"/docs/configure/app/source/define"},(0,i.kt)("inlineCode",{parentName:"a"},"source.define")),"\u3002"))}u.isMDXComponent=!0}}]);