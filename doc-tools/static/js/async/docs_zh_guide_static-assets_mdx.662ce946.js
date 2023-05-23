(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_static-assets_mdx"],{56948:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return o},title:function(){return r},toc:function(){return i},default:function(){return t}});var c=d("9880"),s=d("23169"),o={},r="静态资源处理",i=[];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",blockquote:"blockquote"},(0,s.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"静态资源处理",children:["静态资源处理",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#静态资源处理",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你可以在 ",(0,c.jsx)(n.code,{children:"markdown"}),"（或 ",(0,c.jsx)(n.code,{children:"mdx"}),"）文件中导入静态资源。相对路径和绝对路径都是支持的，例如，如果在 markdown 同级目录有一张图片，你可以像这样引用它："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-mdx",children:"![](./demo.png)\n"})}),"\n",(0,c.jsxs)(n.p,{children:["当然，在 ",(0,c.jsx)(n.code,{children:".mdx"})," 文件中你也可以直接使用 img 标签："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-mdx",children:'<img src="./demo.png" />\n'})}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js Doc 将会根据 ",(0,c.jsx)(n.code,{children:".mdx"})," 文件路径和图片路径，自动找到图片并响应给浏览器。"]}),"\n",(0,c.jsxs)(n.p,{children:["另一方面，也可以使用绝对路径导入静态资源。这样，Modern.js Doc 将会在",(0,c.jsx)(n.code,{children:"项目根目录"}),"下的 ",(0,c.jsx)(n.code,{children:"public"})," 文件夹中寻找资源。"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["项目根目录，即 modern.config.ts 中 ",(0,c.jsx)(n.code,{children:"doc.root"})," 字段指定的目录。"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\nexport default defineConfig({\n  doc: {\n    root: path.join(__dirname, 'docs'),\n  },\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["例如，如果根目录是 ",(0,c.jsx)(n.code,{children:"docs"})," 并且目录结构如下"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docs\n├── public\n│   └── demo.png\n├── index.mdx\n"})}),"\n",(0,c.jsxs)(n.p,{children:["在如上的 ",(0,c.jsx)(n.code,{children:"index.mdx"})," 文件中，你可以像这样引用 ",(0,c.jsx)(n.code,{children:"demo.png"}),"："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-mdx",children:"![](./public/demo.png)\n"})}),"\n",(0,c.jsx)(n.p,{children:"或者用绝对路径来引用："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-mdx",children:"![](/demo.png)\n"})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);