(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guide_introduction_mdx"],{4446:function(e,r,s){e.exports={"next-steps":"qKm1u ",nextSteps:"qKm1u "}},82173:function(e,r,s){e.exports={description:"_1vcO ",description:"_1vcO ",step:"_2ddq ",step:"_2ddq ",title:"_74tj ",title:"_74tj "}},23333:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var s in r)Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}(r,{frontmatter:function(){return c},toc:function(){return a},title:function(){return h},default:function(){return u}});var n=s("12151"),t=s("21447"),l=s.ir(s("82243")),i=s.ir(s("70792")),d=s.ir(s("69571"));let c=void 0,a=[{id:"rust-化",text:"Rust 化",depth:2},{id:"定位",text:"定位",depth:2},{id:"特性",text:"特性",depth:2},{id:"支持-rspack-打包",text:"支持 Rspack 打包",depth:3},{id:"深度优化构建产物",text:"深度优化构建产物",depth:3},{id:"易于扩展的插件系统",text:"易于扩展的插件系统",depth:3},{id:"npm-包",text:"npm 包",depth:2},{id:"下一步",text:"下一步",depth:2}],h="介绍";function o(e){let r=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img"},(0,t.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"介绍",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"}),"介绍"]}),"\n",(0,n.jsxs)(r.p,{children:["Modern.js Builder 是",(0,n.jsx)(r.strong,{children:"一个面向 Web 开发场景的构建引擎"}),"。"]}),"\n",(0,n.jsx)(r.p,{children:"随着前端生态的发展，社区中出现了多样化的编译工具和插件。对于大部分开发者来说，构建一个 Web 应用所需的配置和依赖已变得十分复杂。在追求最佳实践的过程中，开发者需要付出的成本也在不断上升。"}),"\n",(0,n.jsx)(r.p,{children:"为了减少构建的复杂性，降低上手门槛，我们基于 Modern.js 在 Web 应用构建方面的实践经验，抽象其中的构建能力，打造出 Modern.js Builder 这个开源工具。"}),"\n",(0,n.jsxs)(r.h2,{id:"rust-化",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rust-化",children:"#"}),"Rust 化"]}),"\n",(0,n.jsxs)(r.p,{children:["近年来，前端工具链的发展趋势是使用 Rust 等编程语言重新实现 —— 以获得更好的性能表现。社区中出现 ",(0,n.jsx)(r.a,{href:"https://swc.rs/",target:"_blank",rel:"nofollow",children:"SWC"}),"、",(0,n.jsx)(r.a,{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"nofollow",children:"esbuild"}),"、",(0,n.jsx)(r.a,{href:"/builder/guide/glossary.html#rspack",children:"Rspack"})," 等高性能工具，并且应用领域在逐步扩宽。但这些 Rust 工具与 JavaScript 工具之间存在较多差异，包括功能不完整、配置不一致等，导致使用者需要承担一定的迁移成本。"]}),"\n",(0,n.jsxs)(r.p,{children:["前端工具链 Rust 化的进程还会持续较长一段时间，",(0,n.jsx)(r.strong,{children:"Modern.js Builder 期望能帮助开发者更好地过渡到 Rust 工具"}),"。不管是 JavaScript 工具，还是 Rust 工具，甚至是 webpack 等底层 bundler，在 Modern.js Builder 中都是可替换的零部件。你可以通过开启配置或启用插件的方式，对这些零部件进行渐进式替换，Modern.js Builder 会抹平其中的主要差异，帮助使用者进行低成本迁移。"]}),"\n",(0,n.jsxs)(r.h2,{id:"定位",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#定位",children:"#"}),"定位"]}),"\n",(0,n.jsxs)(r.p,{children:["Modern.js Builder (简称 Builder) 的定位是",(0,n.jsx)(r.strong,{children:"服务于上层框架的构建引擎"}),"，它专注于解决 Web 应用构建面临的各类问题，期望能为前端框架提供开箱即用的构建能力。"]}),"\n",(0,n.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-1117.png",style:{maxWidth:"80%",marginLeft:"10%"}}),"\n",(0,n.jsx)(r.p,{children:"如果你正在开发一个前端框架，或是开发一个前端应用的脚手架，那么 Builder 可以为你完成前端框架中大部分与构建有关的逻辑，让你能够聚焦于实现框架的其他功能。"}),"\n",(0,n.jsx)(r.p,{children:"如果你是一名业务开发者，大部分情况下，你不需要在业务项目中手动接入 Builder，我们推荐你直接使用一些基于 Builder 的上层框架。"}),"\n",(0,n.jsx)(r.p,{children:"目前已经接入 Builder 的前端框架有："}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["开源的 ",(0,n.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern.js",target:"_blank",rel:"nofollow",children:"Modern.js"})," 框架。"]}),"\n",(0,n.jsx)(r.li,{children:"字节跳动内部的 EdenX、PIA 等框架。"}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"特性",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#特性",children:"#"}),"特性"]}),"\n",(0,n.jsxs)(r.h3,{id:"支持-rspack-打包",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#支持-rspack-打包",children:"#"}),"支持 Rspack 打包"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Builder 支持 webpack 和 Rspack 两种打包工具"}),"，你可以在成熟的 Webpack 和更快的 Rspack 之间进行切换。"]}),"\n","\n",(0,n.jsx)(l.default,{}),"\n",(0,n.jsxs)(r.p,{children:["默认情况下，Builder 使用 webpack 5 作为打包工具，尽管 webpack 的编译速度不是很理想，但它依然是社区中功能最完整、生态最丰富的打包工具。Builder 在 webpack 的基础上，集成了 ",(0,n.jsx)(r.a,{href:"https://github.com/babel/babel",target:"_blank",rel:"nofollow",children:"babel"}),"、",(0,n.jsx)(r.a,{href:"https://github.com/postcss/postcss",target:"_blank",rel:"nofollow",children:"postcss"}),"、",(0,n.jsx)(r.a,{href:"https://github.com/terser/terser",target:"_blank",rel:"nofollow",children:"terser"})," 等工具进行代码转义和压缩。Builder 也支持替换部分编译能力为原生工具来提升编译速度，比如将 babel/terser 替换为 ",(0,n.jsx)(r.a,{href:"https://github.com/swc-project/swc",target:"_blank",rel:"nofollow",children:"swc"})," 或 ",(0,n.jsx)(r.a,{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"nofollow",children:"esbuild"}),"。"]}),"\n",(0,n.jsxs)(r.p,{children:["如果你对构建性能有更极致的需求，可以一键切换到 Rspack 构建模式，请参考 ",(0,n.jsx)(r.a,{href:"/builder/guide/advanced/rspack-start.html",children:"使用 Rspack"})," 来进行切换。"]}),"\n",(0,n.jsxs)(r.h3,{id:"深度优化构建产物",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#深度优化构建产物",children:"#"}),"深度优化构建产物"]}),"\n",(0,n.jsxs)(r.p,{children:["Builder ",(0,n.jsx)(r.strong,{children:"充分利用 webpack 生态内的各种优化手段"}),"，保证生产环境的产物性能得到深度优化，并在稳定性上提供保障。"]}),"\n",(0,n.jsxs)(r.p,{children:["以拆包场景为例，webpack 原生的 splitChunks 配置较为复杂，Builder 将其封装为开箱即用的 ",(0,n.jsx)(r.a,{href:"/builder/api/config-performance.html#performancechunksplit",children:"performance.chunkSplit"})," 配置项，默认将常见的三方库拆分为体积适中的 chunk，使页面加载速度达到最优状态。"]}),"\n",(0,n.jsxs)(r.h3,{id:"易于扩展的插件系统",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#易于扩展的插件系统",children:"#"}),"易于扩展的插件系统"]}),"\n",(0,n.jsx)(r.p,{children:"Builder 提供丰富的配置项和可插拔的插件系统，支持对各项能力进行扩展和定制。"}),"\n",(0,n.jsx)(r.p,{children:"对于 Builder 来说，所有的构建能力都是通过插件来实现的："}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"大部分插件较为轻量，被内置在 Builder 内部，开发者可以通过配置项来控制启用。"}),"\n",(0,n.jsx)(r.li,{children:"少部分插件较为复杂，被外置为独立 npm 包，开发者可以按需进行安装和使用。"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Builder 也支持自定义插件，因此框架开发者可以开发自定义的插件，实现定制化的构建需求。"}),"\n",(0,n.jsxs)(r.h2,{id:"npm-包",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-包",children:"#"}),"npm 包"]}),"\n",(0,n.jsx)(r.p,{children:"Builder 已发布的 npm 包有："}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"包名"}),(0,n.jsx)(r.th,{children:"版本"}),(0,n.jsx)(r.th,{children:"描述"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder",target:"_blank",rel:"nofollow",children:"@modern-js/builder"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"Builder 核心包"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-webpack-provider",target:"_blank",rel:"nofollow",children:"@modern-js/builder-webpack-provider"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-webpack-provider?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"提供 webpack 构建能力"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-rspack-provider",target:"_blank",rel:"nofollow",children:"@modern-js/builder-rspack-provider"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-rspack-provider?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"提供 Rspack 构建能力"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-swc",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-swc"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-swc?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"SWC 插件"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-stylus",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-stylus"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-stylus?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"Stylus 插件"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-esbuild",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-esbuild"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-esbuild?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"Esbuild 插件"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-node-polyfill",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-node-polyfill"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-node-polyfill?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"Node Polyfill 插件"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-image-compress",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-image-compress"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-image-compress?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"Image Compress 插件"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-shared",target:"_blank",rel:"nofollow",children:"@modern-js/builder-shared"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-shared?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"Builder 内部的公共模块"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-doc",target:"_blank",rel:"nofollow",children:"@modern-js/builder-doc"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-doc?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"提供可复用的文档片段"})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:["你可以在 modern.js 仓库的 ",(0,n.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern.js/tree/main/packages/builder/",target:"_blank",rel:"nofollow",children:"packages/builder"})," 目录下查看这些包的源代码。"]}),"\n",(0,n.jsxs)(r.h2,{id:"下一步",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#下一步",children:"#"}),"下一步"]}),"\n",(0,n.jsx)(r.p,{children:"你可能想要："}),"\n","\n",(0,n.jsxs)(i.default,{children:[(0,n.jsx)(d.default,{href:"/guide/quick-start.html",title:"快速上手",description:"了解如何使用 Builder"}),(0,n.jsx)(d.default,{href:"/guide/features.html",title:"功能导航",description:"了解 Builder 提供的所有功能"}),(0,n.jsx)(d.default,{href:"/api/index.html",title:"查阅 API",description:"查看详细的 API 文档"})]})]})}var u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,t.useMDXComponents)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},82243:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var s in r)Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}(r,{frontmatter:function(){return l},toc:function(){return i},default:function(){return c}});var n=s("12151"),t=s("21447");let l=void 0,i=[];function d(e){let r=Object.assign({div:"div",p:"p",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,n.jsxs)(r.div,{className:"modern-directive tip",children:[(0,n.jsx)(r.p,{className:"modern-directive-title",children:"什么是 Rspack"}),(0,n.jsxs)(r.div,{className:"modern-directive-content",children:[(0,n.jsxs)(r.p,{children:["\n",(0,n.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"nofollow",children:"Rspack"})," 是一个基于 Rust 的高性能 Web 构建工具，具备与 Webpack 生态系统的互操作性，可以被 Webpack 项目低成本集成，并提供更好的构建性能。"]}),(0,n.jsx)(r.p,{children:"相较于 Webpack，Rspack 的构建性能有明显提升，除了 Rust 带来的语言优势，这也来自于它的并行架构和增量编译等特性。经过 benchmark 验证，Rspack 可以带来 5 ～ 10 倍编译性能的提升。"})]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,t.useMDXComponents)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},70792:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i}});var n=s("12151"),t=s.ir(s("4446"));let l=e=>(0,n.jsx)("div",{className:t.default.nextSteps,children:e.children});var i=l},69571:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return d}});var n=s("12151"),t=s("96924"),l=s.ir(s("82173"));let i=e=>(0,n.jsxs)("a",{className:l.default.step,href:(0,t.useUrl)(e.href),children:[(0,n.jsx)("p",{className:l.default.title,children:e.title}),(0,n.jsx)("p",{className:l.default.description,children:e.description})]});var d=i},44110:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),s.es(s("23447"),r)},96924:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useUrl",{enumerable:!0,get:function(){return t}});var n=s("12416");function t(e){let r=(0,n.useLang)();return(0,n.withBase)("zh"===r?e:"/en".concat(e))}},12416:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),s.es(s("44110"),r)}}]);