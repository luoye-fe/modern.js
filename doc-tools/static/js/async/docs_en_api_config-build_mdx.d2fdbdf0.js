(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_api_config-build_mdx"],{76518:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return o},title:function(){return s},toc:function(){return c},default:function(){return a}});var r=d("12151"),i=d("23169"),o={},s="Build Config",c=[{text:"builderConfig",depth:2,id:"builderconfig"},{text:"Default Config",depth:3,id:"default-config"},{text:"markdown",depth:2,id:"markdown"},{text:"markdown.remarkPlugins",depth:3,id:"markdown-remarkplugins"},{text:"markdown.rehypePlugins",depth:3,id:"markdown-rehypeplugins"},{text:"markdown.checkDeadLinks",depth:3,id:"markdown-checkdeadlinks"}];function l(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3",blockquote:"blockquote"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"build-config",children:["Build Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-config",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"builderconfig",children:["builderConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderconfig",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Used to customize the configurations of Modern.js Builder. For complete configurations, please refer to ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - API"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, change the output directory to ",(0,r.jsx)(n.code,{children:"doc_dist"}),":"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  doc: {\n    builderConfig: {\n      output: {\n        distPath: {\n          root: 'doc_dist',\n        },\n      },\n    },\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"default-config",children:["Default Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-config",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you need to see the default ",(0,r.jsx)(n.code,{children:"builderConfig"}),", you can add the ",(0,r.jsx)(n.code,{children:"DEBUG=builder"})," parameter when running the ",(0,r.jsx)(n.code,{children:"modern dev"})," or ",(0,r.jsx)(n.code,{children:"modern build"})," command:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"DEBUG=builder modern dev\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["After execution, the ",(0,r.jsx)(n.code,{children:"builder.config.js"})," file is created in the ",(0,r.jsx)(n.code,{children:"doc_build"})," directory, which contains the complete ",(0,r.jsx)(n.code,{children:"builderConfig"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/debug/debug-mode.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - Debug Mode"})," for more information on how to debug the Builder."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"markdown",children:["markdown",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Configure MDX-related compilation abilities."}),"\n",(0,r.jsxs)(n.h3,{id:"markdown-remarkplugins",children:["markdown.remarkPlugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown-remarkplugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"Array"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Configure the remark plugins. for example:"}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      remarkPlugins: [\n        [\n          require('remark-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"markdown-rehypeplugins",children:["markdown.rehypePlugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown-rehypeplugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"Array"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Configure the rehype plugin. for example:"}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      rehypePlugins: [\n        [\n          require('rehype-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"markdown-checkdeadlinks",children:["markdown.checkDeadLinks",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown-checkdeadlinks",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Whether to check for dead links. for example:"}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      checkDeadLinks: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,r.jsx)(n.p,{children:"After enabling this config, the framework will check the links in the document based on the conventional routing table. If there is an unreachable link, the build will throw an error and exit."}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive warning",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"However, we do not recommend using this feature during the development environment, because it will disable the physical cache of the build tool webpack, resulting in slower project startup."})})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);