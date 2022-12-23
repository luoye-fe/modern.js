"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1092],{44993:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(k,o(o({ref:n},d),{},{components:t})):r.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=t(18249),a=(t(52983),t(44993)),i=t(67903);const o={title:"Quick Start",sidebar_position:1},l=void 0,p={unversionedId:"guides/get-started/quick-start",id:"guides/get-started/quick-start",title:"Quick Start",description:"Environment",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/get-started/quick-start.md",sourceDirName:"guides/get-started",slug:"/guides/get-started/quick-start",permalink:"/v2/en/docs/guides/get-started/quick-start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start",sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Overview",permalink:"/v2/en/docs/guides/overview"},next:{title:"Upgrade",permalink:"/v2/en/docs/guides/get-started/upgrade"}},s={},d=[{value:"Environment",id:"environment",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"pnpm",id:"pnpm",level:3},{value:"Installation",id:"installation",level:2},{value:"Initialize",id:"initialize",level:2},{value:"Development",id:"development",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Build",id:"build",level:2},{value:"Verify",id:"verify",level:2},{value:"Deploy",id:"deploy",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("h3",{id:"nodejs"},"Node.js"),(0,a.kt)("p",null,"Requires ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release"},"Node.js LTS")," and ensures that the Node version is greater than or equal to 14.19.0, 16.x version is recommended."),(0,a.kt)("p",null,"Modern.js recommend installing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#install--update-script"},"nvm")," in the development environment and integrating ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#deeper-shell-integration"},"script to automatically switch node versions")," in the shell."),(0,a.kt)("p",null,"Then there is a ",(0,a.kt)("inlineCode",{parentName:"p"},".nvmrc")," file with the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"lts/fermium")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"lts/gallium")," in the root directory of the repository, it will automatically install or switch to the correct Node.js version when entering the repository."),(0,a.kt)("h3",{id:"pnpm"},"pnpm"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pnpm.io/installation"},"pnpm")," is recommended for package management."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g pnpm\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Modern.js also supports package management with ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),".")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Modern.js provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," tool to create projects. Don't install globally, use ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," to run on demand."),(0,a.kt)("p",null,"Projects can be created using an existing empty directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir myapp && cd myapp\nnpx @modern-js/create\n")),(0,a.kt)("p",null,"Projects can also be created directly from the new directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @modern-js/create myapp\n")),(0,a.kt)("h2",{id:"initialize"},"Initialize"),(0,a.kt)(i.ZP,{mdxType:"InitApp"}),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," in the project to start the project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm run dev\n\n> modern dev\n\ninfo    Starting dev server...\ninfo    App running at:\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n\n Client \u2714 done in 76.10ms\n")),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/")," in your browser and you will see the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/dev.png",alt:"dev"})),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," files exist in Modern.js projects created by the generator."),(0,a.kt)("p",null,"Features can be enabled through the configuration file, or the default behavior of the coverage Modern.js. For example, add the following configuration to enable SSR:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig } from '@modern-js/app-tools';\n\n// https://modernjs.dev/docs/apis/app/config\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  server: {\n    ssr: true,\n  },\n});\n")),(0,a.kt)("p",null,"Re-execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),", in the browser Network menu, you can find that the project has completed page rendering at the server level."),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("p",null,"Execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run build")," in the project to build the project production environment product:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm run build\n\n> modern build\n\ninfo    Create a production build...\n\ninfo    File sizes after production build:\n\n  File                                      Size         Gzipped\n  dist/static/js/lib-corejs.ffeb7fb8.js     214.96 kB    67.23 kB\n  dist/static/js/lib-react.09721b5c.js      152.61 kB    49.02 kB\n  dist/static/js/218.102e2f39.js            85.45 kB     28.5 kB\n  dist/static/js/lib-babel.a7bba875.js      11.93 kB     3.95 kB\n  dist/html/main/index.html                 5.84 kB      2.57 kB\n  dist/static/js/main.3568a38e.js           3.57 kB      1.44 kB\n  dist/static/css/async/304.c3c481a5.css    2.62 kB      874 B\n  dist/asset-manifest.json                  1.48 kB      349 B\n  dist/static/js/async/304.c45706bc.js      1.4 kB       575 B\n  dist/static/js/async/509.fcb06e14.js      283 B        230 B\n\n Client \u2714 done in 3.57s\n")),(0,a.kt)("p",null,"The bundle is generated to ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/")," by default, and the directory structure is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 asset-manifest.json\n\u251c\u2500\u2500 html\n\u2502\xa0\xa0 \u2514\u2500\u2500 main\n\u251c\u2500\u2500 loader-routes\n\u2502\xa0\xa0 \u2514\u2500\u2500 main\n\u251c\u2500\u2500 modern.config.json\n\u251c\u2500\u2500 route.json\n\u2514\u2500\u2500 static\n    \u251c\u2500\u2500 css\n    \u2514\u2500\u2500 js\n")),(0,a.kt)("h2",{id:"verify"},"Verify"),(0,a.kt)("p",null,"Execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run serve")," in the project to verify locally that the bundle is running correctly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm run serve\n\n> modern serve\n\nStarting the modern server...\ninfo    App running at:\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n")),(0,a.kt)("p",null,"Open http://localhost:8000/ in the browser and the content should be the same as when ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"."),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"After the local verification is completed, the products under ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/")," can be organized into the structure required by the server for deployment."))}u.isMDXComponent=!0},67903:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(18249),a=(t(52983),t(44993));const i={toc:[]};function o(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modern.js \u751f\u6210\u5668\u4f1a\u63d0\u4f9b\u4e00\u4e2a\u53ef\u4ea4\u4e92\u7684\u95ee\u7b54\u754c\u9762\uff0c\u6839\u636e\u7ed3\u679c\u521d\u59cb\u5316\u9879\u76ee\uff0c\u6309\u7167\u9ed8\u8ba4\u7684\u9009\u62e9\u8fdb\u884c\u521d\u59cb\u5316\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u5e94\u7528\n? \u8bf7\u9009\u62e9\u5f00\u53d1\u8bed\u8a00 TS\n? \u8bf7\u9009\u62e9\u5305\u7ba1\u7406\u5de5\u5177 pnpm\n")),(0,a.kt)("p",null,"\u5728\u751f\u6210\u9879\u76ee\u540e\uff0cModern.js \u4f1a\u81ea\u52a8\u5b89\u88c5\u4f9d\u8d56\u3001\u521b\u5efa git \u4ed3\u5e93\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[INFO] \u4f9d\u8d56\u81ea\u52a8\u5b89\u88c5\u6210\u529f\n[INFO] git \u4ed3\u5e93\u521d\u59cb\u5316\u6210\u529f\n[INFO] \u521b\u5efa\u6210\u529f\uff01\n\u53ef\u5728\u65b0\u9879\u76ee\u7684\u76ee\u5f55\u4e0b\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\npnpm run dev          # \u6309\u5f00\u53d1\u73af\u5883\u7684\u8981\u6c42\uff0c\u8fd0\u884c\u548c\u8c03\u8bd5\u9879\u76ee\npnpm run build        # \u6309\u751f\u4ea7\u73af\u5883\u7684\u8981\u6c42\uff0c\u6784\u5efa\u9879\u76ee\npnpm run serve        # \u6309\u751f\u4ea7\u73af\u5883\u7684\u8981\u6c42\uff0c\u8fd0\u884c\u9879\u76ee\npnpm run lint         # \u68c0\u67e5\u548c\u4fee\u590d\u6240\u6709\u4ee3\u7801\npnpm run new          # \u7ee7\u7eed\u521b\u5efa\u66f4\u591a\u9879\u76ee\u8981\u7d20\uff0c\u6bd4\u5982\u5e94\u7528\u5165\u53e3\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Modern.js \u751f\u6210\u5668\u9664\u4e86\u5728\u9879\u76ee\u521d\u59cb\u5316\u65f6\u5de5\u4f5c\u5916\uff0c\u4e5f\u80fd\u5728\u540e\u7eed\u7814\u53d1\u4e2d\u751f\u6210\u9879\u76ee\u5404\u79cd\u7c92\u5ea6\u7684\u6a21\u5757\uff0c\u5e76\u975e\u4e00\u7528\u5373\u629b\u5f00\u3002")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u9879\u76ee\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 modern-app-env.d.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 routes\n\u2502\xa0\xa0     \u251c\u2500\u2500 index.css\n\u2502\xa0\xa0     \u251c\u2500\u2500 layout.tsx\n\u2502\xa0\xa0     \u2514\u2500\u2500 page.tsx\n\u251c\u2500\u2500 modern.config.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json\n")))}o.isMDXComponent=!0}}]);