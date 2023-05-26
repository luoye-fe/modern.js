(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_disable-entry-dirs_mdx"],{1806:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return d},toc:function(){return t},default:function(){return l}});var s=r("9880"),c=r("23169"),i={sidebar_label:"disableEntryDirs"},d="source.disableEntryDirs",t=[];function o(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourcedisableentrydirs",children:["source.disableEntryDirs",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcedisableentrydirs",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string[]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js 默认会根据 ",(0,s.jsx)(n.code,{children:"src"})," 目录识别应用入口，你可以通过该选项禁止某些目录被识别为应用入口。"]}),"\n",(0,s.jsx)(n.p,{children:"例如，当配置与目录结构如下时："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    disableEntryDirs: ['./src/one'],\n  },\n});\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",meta:'title="项目目录结构"',children:"└── src/\n    ├── one/\n    |    └── App.tsx\n    ├── two/\n    |    └── routes/\n    └── env.d.ts\n"})}),"\n",(0,s.jsx)(n.p,{children:"在未设置该配置项时，Modern.js 会根据项目目录产出两个 entry:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"one"}),"\n",(0,s.jsx)(n.li,{children:"two"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["当设置该配置项后，",(0,s.jsx)(n.code,{children:"src/one"})," 不会作为 entry 目录被识别。"]}),"\n",(0,s.jsxs)(n.p,{children:["常见的用法是，将 ",(0,s.jsx)(n.code,{children:"src/common"}),"、",(0,s.jsx)(n.code,{children:"src/components"})," 目录配置到该选项中，避免这些目录被识别为应用入口。"]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);