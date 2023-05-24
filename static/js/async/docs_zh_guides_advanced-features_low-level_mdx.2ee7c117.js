(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_low-level_mdx"],{23116:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return i},default:function(){return l}});var s=r("9880"),t=r("23169"),d={title:"配置底层工具",sidebar_position:11},c="配置底层工具",i=[{text:"使用方式",depth:2,id:"使用方式"},{text:"底层配置明细",depth:2,id:"底层配置明细"}];function o(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"配置底层工具",children:["配置底层工具",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置底层工具",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"使用方式",children:["使用方式",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用方式",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js 内部默认集成了 ",(0,s.jsx)(n.a,{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer",children:"Babel"}),"、",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer",children:"TypeScript"}),"、",(0,s.jsx)(n.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Webpack"}),"、",(0,s.jsx)(n.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"}),"、",(0,s.jsx)(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," 等工具。通常情况下，默认配置能够满足大多业务开发需求。当有特殊需求时，可以通过底层配置来实现。"]}),"\n",(0,s.jsxs)(n.p,{children:["以配置 Webpack 为例，只需要在 ",(0,s.jsx)(n.code,{children:"modern.config.ts"})," 中添加 ",(0,s.jsx)(n.a,{href:"/configure/app/tools/webpack",children:(0,s.jsx)(n.code,{children:"tools.webpack"})})," 即可："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  tools: {\n    webpack: config => {},\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tools"})," 命名空间下的配置都可以设置为 ",(0,s.jsx)(n.code,{children:"Object"})," 或者 ",(0,s.jsx)(n.code,{children:"Function"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["值为 ",(0,s.jsx)(n.code,{children:"Object"})," 时，会与内部默认配置进行合并，具体合并策略参考对应的配置选项文档（见下表）。"]}),"\n",(0,s.jsxs)(n.p,{children:["值为 ",(0,s.jsx)(n.code,{children:"Function"})," 时，第一个参数为内部的默认配置对象，可以直接修改这个对象不做返回，也可以返回一个新的对象或者合并后的对象作为最终结果。"]}),"\n",(0,s.jsxs)(n.h2,{id:"底层配置明细",children:["底层配置明细",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#底层配置明细",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"目前提供的底层配置如下表："}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"底层工具"}),"\n",(0,s.jsx)(n.th,{children:"配置"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"DevServer"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/dev-server",children:"tools.devServer"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"Babel"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/babel",children:"tools.babel"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"styled-components"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/styled-components",children:"tools.styledComponents"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"PostCSS"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/postcss",children:"tools.postcss"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"Less"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/less",children:"tools.less"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"Sass"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/sass",children:"tools.sass"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"webpack"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/webpack",children:"tools.webpack"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"Minify CSS"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/minify-css",children:"tools.minifyCss"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"terser"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/terser",children:"tools.terser"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"Tailwind CSS"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/tailwindcss",children:"tools.tailwind"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"Autoprefixer"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/autoprefixer",children:"tools.autoprefixer"})}),"\n"]}),"\n"]}),"\n"]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);