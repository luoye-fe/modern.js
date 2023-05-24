(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_entries-dir_mdx"],{81654:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return o},default:function(){return d}});var s=r("9880"),t=r("23169"),i={sidebar_label:"entriesDir"},c="source.entriesDir",o=[];function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourceentriesdir",children:["source.entriesDir",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceentriesdir",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"./src"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js will scan the ",(0,s.jsx)(n.code,{children:"src"})," directory by default to identify the page entries, you can customize the identification directory of the page entries through this option."]}),"\n",(0,s.jsx)(n.p,{children:"For example, when the configuration and directory structure are as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entriesDir: './src/pages',\n  },\n});\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",meta:'title="Project directory structure"',children:".\n└── src\n    └── pages\n        ├── a\n        │   └── App.tsx\n        └── b\n            └── App.tsx\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js will generate the build entry ",(0,s.jsx)(n.code,{children:"a"})," and ",(0,s.jsx)(n.code,{children:"b"})," according to the ",(0,s.jsx)(n.code,{children:"./src/pages"})," directory structure, the result is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const entry = {\n  a: './src/pages/a/App.tsx',\n  b: './src/pages/b/App.tsx',\n};\n"})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);