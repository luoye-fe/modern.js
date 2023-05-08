(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_rspack-start_mdx"],{31615:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s=r("12151"),t=r("23169"),a=r.ir(r("41822"));function i(e){var n=Object.assign({div:"div"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"What is Rspack"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["\n","\n",(0,s.jsx)(a.default,{}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},41822:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var s=r("12151"),t=r("23169");function a(e){var n=Object.assign({p:"p",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," is a high performance Rust-based JavaScript bundler that offers strong interoperability with the webpack ecosystem, enabling faster development cycles and efficient collaboration between the two tools."]}),"\n",(0,s.jsx)(n.p,{children:"Rspack's build performance is significantly better than Webpack, not only due to the language benefits of Rust, but also due to its parallel architecture and incremental compilation features. Benchmarking has shown that Rspack can deliver a 5-10x improvement in compilation performance."})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},21846:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var s=r("12151"),t=r("23169");function a(e){var n=Object.assign({div:"div",button:"button",pre:"pre",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npx @modern-js/create myapp\n? Please select the solution you want to create: Web App\n? Development Language: TS\n? Package Manager: pnpm\n? Bundler: Rspack\n"})})]})})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},42766:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return d},default:function(){return p}});var s=r("12151"),t=r("23169"),a=r.ir(r("31615")),i=r.ir(r("21846")),c={sidebar_position:1},o="Using Rspack",d=[{text:"Initializing an Rspack project",depth:2,id:"initializing-an-rspack-project"},{text:"Migrating from webpack to Rspack",depth:2,id:"migrating-from-webpack-to-rspack"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",div:"div",ul:"ul",li:"li",button:"button",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"using-rspack",children:["Using Rspack",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rspack",children:"#"})]}),"\n","\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Modern.js provides out-of-the-box Rspack support"}),", so you can switch between the stable Webpack and the faster Rspack."]}),"\n",(0,s.jsx)(n.p,{children:"This document will show you how to enable Rspack build mode in Modern.js."}),"\n",(0,s.jsxs)(n.h2,{id:"initializing-an-rspack-project",children:["Initializing an Rspack project",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initializing-an-rspack-project",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The Modern.js generator provides an interactive question-and-answer interface to initialize a project. To create an Rspack project, simply select the ",(0,s.jsx)(n.strong,{children:"Rspack"})," build tool by running:"]}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.p,{children:["After the project is created, you can experience the project by running ",(0,s.jsx)(n.code,{children:"pnpm run dev"}),". For more project information, please refer to ",(0,s.jsx)(n.a,{href:"/guides/get-started/quick-start",children:"Quick Start"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"When using Rspack as the bundler, the following Features are temporarily unavailable as some of the capabilities are still under development and we will provide support in the future."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Micro Frontend"}),"\n",(0,s.jsx)(n.li,{children:"Storybook Devtool"}),"\n",(0,s.jsxs)(n.li,{children:["The usage of ",(0,s.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"useLoader"})," in Client Side Rendering"]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"migrating-from-webpack-to-rspack",children:["Migrating from webpack to Rspack",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#migrating-from-webpack-to-rspack",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can enable Rspack build by running ",(0,s.jsx)(n.code,{children:"pnpm run new"}),":"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ pnpm run new\n? Action: Enable features\n? Enable features: Enable Rspack Build\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["After executing the command, enable the Rspack build in ",(0,s.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-diff",meta:"title=modern.config.ts",children:"import appTools, { defineConfig } from '@modern-js/app-tools';\n\n+ export default defineConfig<'rspack'>({\n  plugins: [\n    appTools({\n+     bundler: 'experimental-rspack',\n    }),\n  ],\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["When migrating from webpack to Rspack, there may have some differences in build and configuration capabilities. For more details, please refer to ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/advanced/rspack-start.html#migrating-from-webpack-to-rspack",target:"_blank",rel:"noopener noreferrer",children:"Configuration Differences"}),".\n"]})})]})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);