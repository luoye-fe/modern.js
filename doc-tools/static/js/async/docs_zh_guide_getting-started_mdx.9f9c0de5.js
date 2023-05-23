(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_getting-started_mdx"],{1010:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},toc:function(){return l},title:function(){return i},default:function(){return h}});var d=n("9880"),c=n("23169"),a=n("27385"),r=void 0,l=[{id:"1-初始化项目",text:"1. 初始化项目",depth:2},{id:"方式一通过脚手架创建",text:"方式一：通过脚手架创建",depth:3},{id:"方式二手动创建",text:"方式二：手动创建",depth:3},{id:"2-启动-dev-server",text:"2. 启动 Dev Server",depth:2},{id:"3-生产环境构建",text:"3. 生产环境构建",depth:2},{id:"4-本地预览产物",text:"4. 本地预览产物",depth:2}],i="快速开始";function o(e){var s=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",div:"div",pre:"pre",code:"code"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"快速开始",children:[(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"}),"快速开始"]}),"\n",(0,d.jsxs)(s.h2,{id:"1-初始化项目",children:[(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#1-初始化项目",children:"#"}),"1. 初始化项目"]}),"\n",(0,d.jsxs)(s.h3,{id:"方式一通过脚手架创建",children:[(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#方式一通过脚手架创建",children:"#"}),"方式一：通过脚手架创建"]}),"\n",(0,d.jsx)(s.p,{children:"你可以通过 Modern.js 脚手架命令来创建一个 Modern.js Doc 项目:"}),"\n",(0,d.jsxs)(s.div,{className:"language-bash",children:[(0,d.jsx)(s.div,{className:""}),(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-bash",children:"# `modern-doc-app` 为项目名称\nnpx @modern-js/create@latest modern-doc-app\n"})})})]}),"\n",(0,d.jsxs)(s.p,{children:["选择 ",(0,d.jsx)(s.code,{children:"文档站"})," 类型，然后选择包管理工具即可完成项目创建。"]}),"\n",(0,d.jsxs)(s.h3,{id:"方式二手动创建",children:[(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#方式二手动创建",children:"#"}),"方式二：手动创建"]}),"\n",(0,d.jsx)(s.p,{children:"首先，你可以通过以下命令创建一个新目录："}),"\n",(0,d.jsxs)(s.div,{className:"language-bash",children:[(0,d.jsx)(s.div,{className:""}),(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-bash",children:"mkdir modern-doc-app && cd modern-doc-app\n"})})})]}),"\n",(0,d.jsxs)(s.p,{children:["执行 ",(0,d.jsx)(s.code,{children:"npm init -y"})," 来初始化一个项目。你可以使用 npm、yarn 或 pnpm 安装 Modern.js Doc:"]}),"\n","\n",(0,d.jsxs)(a.Tabs,{values:[{label:"npm"},{label:"yarn"},{label:"pnpm"}],children:[(0,d.jsx)(a.Tab,{children:(0,d.jsxs)(s.div,{className:"language-sh",children:[(0,d.jsx)(s.div,{className:""}),(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-sh",children:"npm install @modern-js/doc-tools typescript -D\n"})})})]})}),(0,d.jsx)(a.Tab,{children:(0,d.jsxs)(s.div,{className:"language-sh",children:[(0,d.jsx)(s.div,{className:""}),(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-sh",children:"yarn add @modern-js/doc-tools typescript -D\n"})})})]})}),(0,d.jsx)(a.Tab,{children:(0,d.jsxs)(s.div,{className:"language-sh",children:[(0,d.jsx)(s.div,{className:""}),(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-sh",children:"pnpm install @modern-js/doc-tools typescript -D\n"})})})]})})]}),"\n",(0,d.jsx)(s.p,{children:"然后通过如下命令创建文件:"}),"\n",(0,d.jsxs)(s.div,{className:"language-bash",children:[(0,d.jsx)(s.div,{className:""}),(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-bash",children:"mkdir docs && echo '# Hello World' > docs/index.md\n"})})})]}),"\n",(0,d.jsxs)(s.p,{children:["在",(0,d.jsx)(s.code,{children:"package.json"}),"中加上如下的脚本:"]}),"\n",(0,d.jsxs)(s.div,{className:"language-json",children:[(0,d.jsx)(s.div,{className:""}),(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-json",children:'{\n  "scripts": {\n    "dev": "modern dev",\n    "build": "modern build",\n    "preview": "modern preview"\n  }\n}\n'})})})]}),"\n",(0,d.jsxs)(s.p,{children:["然后初始化一个配置文件 ",(0,d.jsx)(s.code,{children:"modern.config.ts"}),":"]}),"\n",(0,d.jsxs)(s.div,{className:"language-ts",children:[(0,d.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\n\nexport default defineConfig({\n  doc: {\n    root: path.join(__dirname, 'docs'),\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,d.jsxs)(s.p,{children:["同时新建 ",(0,d.jsx)(s.code,{children:"tsconfig.json"}),"，内容如下:"]}),"\n",(0,d.jsxs)(s.div,{className:"language-ts",children:[(0,d.jsx)(s.div,{className:""}),(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:'{\n  "compilerOptions": {\n    "esModuleInterop": true,\n    "jsx": "react-jsx"\n  }\n}\n'})})})]}),"\n",(0,d.jsxs)(s.h2,{id:"2-启动-dev-server",children:[(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#2-启动-dev-server",children:"#"}),"2. 启动 Dev Server"]}),"\n",(0,d.jsx)(s.p,{children:"通过如下命令启动本地开发服务:"}),"\n",(0,d.jsxs)(s.div,{className:"language-bash",children:[(0,d.jsx)(s.div,{className:""}),(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-bash",children:"npm run dev\n"})})})]}),"\n",(0,d.jsx)(s.p,{children:"这样 Modern.js Doc 将启动开发服务。"}),"\n",(0,d.jsxs)(s.h2,{id:"3-生产环境构建",children:[(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#3-生产环境构建",children:"#"}),"3. 生产环境构建"]}),"\n",(0,d.jsx)(s.p,{children:"通过如下命令构建生产环境的产物:"}),"\n",(0,d.jsxs)(s.div,{className:"language-bash",children:[(0,d.jsx)(s.div,{className:""}),(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-bash",children:"npm run build\n"})})})]}),"\n",(0,d.jsxs)(s.p,{children:["默认情况下，Modern.js Doc 将会把产物打包到 ",(0,d.jsx)(s.code,{children:"doc_build"})," 目录。"]}),"\n",(0,d.jsxs)(s.h2,{id:"4-本地预览产物",children:[(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#4-本地预览产物",children:"#"}),"4. 本地预览产物"]}),"\n",(0,d.jsx)(s.p,{children:"通过如下命令启动本地预览服务:"}),"\n",(0,d.jsxs)(s.div,{className:"language-bash",children:[(0,d.jsx)(s.div,{className:""}),(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-bash",children:"npm run preview\n"})})})]}),"\n",(0,d.jsx)(s.p,{children:"这样 Modern.js Doc 将启动产物预览服务。"})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return s?(0,d.jsx)(s,Object.assign({},e,{children:(0,d.jsx)(o,e)})):o(e)}}}]);