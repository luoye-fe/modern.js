(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_advanced_extend-build_mdx"],{72338:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},toc:function(){return i},title:function(){return c},default:function(){return t}});var d=r("9880"),s=r("23169"),o=void 0,i=[{id:"modernjs-builder",text:"Modern.js Builder",depth:2},{id:"mdx-编译插件",text:"MDX 编译插件",depth:2}],c="构建能力扩展";function l(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"构建能力扩展",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建能力扩展",children:"#"}),"构建能力扩展"]}),"\n",(0,d.jsxs)(n.h2,{id:"modernjs-builder",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-builder",children:"#"}),"Modern.js Builder"]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js Doc 底层基于 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"})," 的 Rspack 模式来进行文档构建。"]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js Builder 提供了丰富的构建配置，你可以使用 ",(0,d.jsx)(n.a,{href:"/doc-tools/zh/api/config-build.html#builderconfig",children:"doc.builderConfig"})," 来自定义这些配置项。比如，将产物目录修改为 ",(0,d.jsx)(n.code,{children:"doc_dist"}),"："]}),"\n",(0,d.jsxs)(n.div,{className:"language-ts",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    builderConfig: {\n      output: {\n        distPath: {\n          root: 'doc_dist',\n        },\n      },\n      tools: {\n        rspack(options) {\n          // 修改 rspack 的配置\n        },\n      },\n    },\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["你可以通过 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - API"})," 的文档来了解更多的配置项。"]}),(0,d.jsxs)(n.p,{children:["注意，Modern.js Doc 仅支持 Rspack 打包工具，因此一些与 webpack 相关的配置项将无法生效，比如 ",(0,d.jsx)(n.code,{children:"tools.webpack"}),"。当然，你可以通过 ",(0,d.jsx)(n.code,{children:"tools.rspack"})," 来修改 Rspack 的配置。"]})]})]}),"\n",(0,d.jsxs)(n.h2,{id:"mdx-编译插件",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mdx-编译插件",children:"#"}),"MDX 编译插件"]}),"\n",(0,d.jsxs)(n.p,{children:["在框架中 MDX 的编译基于 ",(0,d.jsx)(n.a,{href:"https://github.com/unifiedjs/unified",target:"_blank",rel:"noopener noreferrer",children:"unified"})," 完成，你可以通过 ",(0,d.jsx)(n.code,{children:"markdown"})," 配置来添加相关的编译插件。比如"]}),"\n",(0,d.jsxs)(n.div,{className:"language-ts",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      remarkPlugins: [\n        [\n          require('remark-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n      rehypePlugins: [require('rehype-slug')],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}}}]);