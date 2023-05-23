(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_conventional-route_mdx"],{36441:function(e,d,n){"use strict";Object.defineProperty(d,"__esModule",{value:!0});!function(e,d){for(var n in d)Object.defineProperty(e,n,{enumerable:!0,get:d[n]})}(d,{frontmatter:function(){return r},toc:function(){return o},title:function(){return i},default:function(){return l}});var s=n("9880"),c=n("23169"),r=void 0,o=[{id:"什么是约定式路由",text:"什么是约定式路由",depth:2},{id:"映射规则",text:"映射规则",depth:2},{id:"自定义行为",text:"自定义行为",depth:2},{id:"最佳实践",text:"最佳实践",depth:2}],i="约定式路由";function t(e){var d=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.h1,{id:"约定式路由",children:[(0,s.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#约定式路由",children:"#"}),"约定式路由"]}),"\n",(0,s.jsxs)(d.h2,{id:"什么是约定式路由",children:[(0,s.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#什么是约定式路由",children:"#"}),"什么是约定式路由"]}),"\n",(0,s.jsx)(d.p,{children:"Modern.js Doc 使用的是文件系统路由，页面的文件路径会简单的映射为路由路径，这样会让整个项目的路由非常直观。"}),"\n",(0,s.jsxs)(d.p,{children:["例如，如果在 ",(0,s.jsx)(d.code,{children:"docs"})," 目录中有一个名为 ",(0,s.jsx)(d.code,{children:"foo.md"})," 的文件，则该文件的路由路径将是 ",(0,s.jsx)(d.code,{children:"/foo"}),"。"]}),"\n",(0,s.jsxs)(d.h2,{id:"映射规则",children:[(0,s.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#映射规则",children:"#"}),"映射规则"]}),"\n",(0,s.jsx)(d.p,{children:"Modern.js Doc 会自动扫描根目录和所有子目录，并将文件路径映射到路由路径。例如，如果你有以下的文件结构："}),"\n",(0,s.jsxs)(d.div,{className:"language-bash",children:[(0,s.jsx)(d.div,{className:""}),(0,s.jsx)(d.div,{className:"modern-code-content",children:(0,s.jsx)(d.pre,{className:"code",children:(0,s.jsx)(d.code,{className:"language-bash",children:"docs\n├── foo\n│   └── bar.md\n└── foo.md\n"})})})]}),"\n",(0,s.jsxs)(d.p,{children:["那么 ",(0,s.jsx)(d.code,{children:"bar.md"})," 的路由路径会是 ",(0,s.jsx)(d.code,{children:"/foo/bar"}),"，",(0,s.jsx)(d.code,{children:"foo.md"})," 的路由路径会是 ",(0,s.jsx)(d.code,{children:"/foo"}),"。"]}),"\n",(0,s.jsx)(d.p,{children:"具体映射规则如下："}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"文件路径"}),(0,s.jsx)(d.th,{children:"路由路径"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"index.md"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/foo.md"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/foo"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/foo/bar.md"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/foo/bar"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/zoo/index.md"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/zoo"})})]})]})]}),"\n",(0,s.jsxs)(d.h2,{id:"自定义行为",children:[(0,s.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义行为",children:"#"}),"自定义行为"]}),"\n",(0,s.jsxs)(d.p,{children:["如果要自定义路由行为，可以使用配置文件中的 ",(0,s.jsx)(d.code,{children:"route"})," 字段。例如："]}),"\n",(0,s.jsxs)(d.div,{className:"language-ts",children:[(0,s.jsx)(d.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsx)(d.div,{className:"modern-code-content",children:(0,s.jsx)(d.pre,{className:"code",children:(0,s.jsx)(d.code,{className:"language-ts",children:"import { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  route: {\n    // These files will be excluded from the routing (support glob pattern)\n    exclude: ['custom.tsx', 'component/**/*']\n    // These files will be included in the routing (support glob pattern)\n    include: ['other-dir/**/*'],\n  }\n});\n"})})})]}),"\n",(0,s.jsxs)(d.h2,{id:"最佳实践",children:[(0,s.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#最佳实践",children:"#"}),"最佳实践"]}),"\n",(0,s.jsxs)(d.p,{children:["我们推荐你将文档文件放在 ",(0,s.jsx)(d.code,{children:"docs"})," 目录下，这样可以让你的项目更加清晰。而对于非文档内容，比如自定义组件、工具函数等，可以放到 ",(0,s.jsx)(d.code,{children:"docs"})," 目录之外进行维护。比如："]}),"\n",(0,s.jsxs)(d.div,{className:"language-bash",children:[(0,s.jsx)(d.div,{className:""}),(0,s.jsx)(d.div,{className:"modern-code-content",children:(0,s.jsx)(d.pre,{className:"code",children:(0,s.jsx)(d.code,{className:"language-bash",children:"docs\n└── foo.mdx\nsrc\n├── components\n│   └── CustomComponent.tsx\n└── utils\n    └── utils.ts\n"})})})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return d?(0,s.jsx)(d,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);