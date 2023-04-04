(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guide_getting-started_mdx"],{80173:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return l},toc:function(){return o},default:function(){return t}});var c=s("12151"),d=s("21447"),a=s("76851");let r={},l="快速开始",o=[{text:"1. 初始化项目",depth:2,id:"1.-初始化项目"},{text:"2. 启动 Dev Server",depth:2,id:"2.-启动-dev-server"},{text:"3. 生产环境构建",depth:2,id:"3.-生产环境构建"},{text:"4. 本地预览产物",depth:2,id:"4.-本地预览产物"}];function i(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",button:"button",pre:"pre",code:"code"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"快速开始",children:["快速开始",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,c.jsxs)(n.h2,{id:"1.-初始化项目",children:["1. 初始化项目",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1.-初始化项目",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"首先，你可以通过以下命令创建一个新目录："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-bash",children:"mkdir modern-doc-app && cd modern-doc-app\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["执行 ",(0,c.jsx)(n.code,{children:"npm init -y"})," 来初始化一个项目。你可以使用 npm、yarn 或 pnpm 安装 Modern.js Doc:"]}),"\n","\n",(0,c.jsxs)(a.Tabs,{values:[{label:"npm"},{label:"yarn"},{label:"pnpm"}],children:[(0,c.jsx)(a.Tab,{children:(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-sh",children:"npm install @modern-js/doc-tools typescript -D\n"})})]})})}),(0,c.jsx)(a.Tab,{children:(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-sh",children:"yarn add @modern-js/doc-tools typescript -D\n"})})]})})}),(0,c.jsx)(a.Tab,{children:(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-sh",children:"pnpm install @modern-js/doc-tools typescript -D\n"})})]})})})]}),"\n",(0,c.jsx)(n.p,{children:"然后通过如下命令创建文件:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-bash",children:"mkdir docs && echo '# Hello World' > docs/index.md\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["在",(0,c.jsx)(n.code,{children:"package.json"}),"中加上如下的脚本:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "dev": "modern dev",\n    "build": "modern build",\n    "preview": "modern preview"\n  }\n}\n'})})]})}),"\n",(0,c.jsxs)(n.p,{children:["然后初始化一个配置文件 ",(0,c.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\n\nexport default defineConfig({\n  doc: {\n    root: path.join(__dirname, 'docs'),\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,c.jsxs)(n.p,{children:["同时新建 ",(0,c.jsx)(n.code,{children:"tsconfig.json"}),"，内容如下:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:'{\n  "compilerOptions": {\n    "esModuleInterop": true,\n    "jsx": "react-jsx"\n  }\n}\n'})})]})}),"\n",(0,c.jsxs)(n.h2,{id:"2.-启动-dev-server",children:["2. 启动 Dev Server",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2.-启动-dev-server",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"通过如下命令启动本地开发服务:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"这样 Modern.js Doc 将启动开发服务。"}),"\n",(0,c.jsxs)(n.h2,{id:"3.-生产环境构建",children:["3. 生产环境构建",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3.-生产环境构建",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"通过如下命令构建生产环境的产物:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["默认情况下，Modern.js Doc 将会把产物打包到 ",(0,c.jsx)(n.code,{children:"doc_build"})," 目录。"]}),"\n",(0,c.jsxs)(n.h2,{id:"4.-本地预览产物",children:["4. 本地预览产物",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4.-本地预览产物",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"通过如下命令启动本地预览服务:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm run preview\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"这样 Modern.js Doc 将启动产物预览服务。"})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)}}}]);