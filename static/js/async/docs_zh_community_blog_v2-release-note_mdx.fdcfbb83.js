(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_community_blog_v2-release-note_mdx"],{8209:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return i},toc:function(){return c},default:function(){return o}});var r=s("9880"),l=s("23169"),d={sidebar_label:"Modern.js v2 发布",sidebar_position:97},i="Modern.js v2 发布：支持 Rspack 构建",c=[{text:"背景",depth:2,id:"背景"},{text:"定位",depth:2,id:"定位"},{text:"Modern.js 框架",depth:2,id:"modernjs-框架"},{text:"Rspack 构建模式",depth:3,id:"rspack-构建模式"},{text:"渐进式设计",depth:3,id:"渐进式设计"},{text:"插件系统",depth:3,id:"插件系统"},{text:"嵌套路由",depth:3,id:"嵌套路由"},{text:"流式渲染",depth:3,id:"流式渲染"},{text:"Modern.js Module",depth:2,id:"modernjs-module"},{text:"基于 esbuild 构建",depth:3,id:"基于-esbuild-构建"},{text:"Modern.js Doc",depth:2,id:"modernjs-doc"},{text:"致谢",depth:2,id:"致谢"},{text:"最后",depth:2,id:"最后"}];function t(e){var n=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",strong:"strong",img:"img",div:"div",h2:"h2",ol:"ol",li:"li",ul:"ul",h3:"h3",code:"code"},(0,l.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"modernjs-v2-发布：支持-rspack-构建",children:["Modern.js v2 发布：支持 Rspack 构建",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-v2-发布：支持-rspack-构建",children:"#"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"发表于 2023.03.16"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"大家好，很高兴地向大家宣布，Modern.js v2 版本已经正式发布了！"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Modern.js 是字节跳动 Web Infra 团队开源的一套 Web 工程体系"}),"。在开源以来的一年多时间里，Modern.js 保持稳定的迭代节奏，数十位贡献者参与了开发，累计提交 2000+ 个 Pull Request，并支持了 Rspack 构建、嵌套路由、流式渲染等新特性。"]}),"\n",(0,r.jsx)(n.p,{children:"在这篇文章里，我们会和大家一起聊一聊 Modern.js 在过去一年多时间里的变化。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/Framework-Home.png",alt:"Modern.js v2 官网"})}),"\n",(0,r.jsx)("div",{style:{textAlign:"center",fontStyle:"italic"},children:(0,r.jsx)(n.p,{children:"Modern.js v2 官网"})}),"\n",(0,r.jsxs)(n.h2,{id:"背景",children:["背景",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#背景",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"首先介绍一下我们为什么要做 Modern.js v2 版本，主要有以下几个原因："}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"下沉更多能力"}),"：在字节跳动内部，Web Infra 团队整合了多个 Web 开发框架和解决方案，收敛技术栈，将通用能力下沉到底层的 Modern.js 工程体系中。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"拥抱 Rust 生态"}),"：随着社区中更多的前端工具链基于 Rust 重写，Modern.js 正在积极拥抱这一变化，将底层工具逐步替换为 Rust 实现。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"底层依赖升级"}),"：为了对 Modern.js 的底层依赖进行大版本升级，包括 React v18、React Router v6 等，从而引入流式渲染、嵌套路由等新能力。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"定位调整"}),"：从 2021 年开源以来，社区中的伙伴们给予我们很多有价值的反馈，这帮助我们对 Modern.js 的定位和架构进行更多地思考（详见下文）。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"以上因素促使我们完成了 Modern.js v2 版本。"}),"\n",(0,r.jsxs)(n.h2,{id:"定位",children:["定位",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#定位",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在 v2 版本中，我们重新明确了 Modern.js 的定位：",(0,r.jsx)(n.strong,{children:"Modern.js 是字节跳动 Web 工程体系的开源版本，它提供多个解决方案，来帮助开发者解决不同研发场景下的问题。"})]}),"\n",(0,r.jsx)(n.p,{children:"目前我们开源了三个解决方案，分别面向 Web 应用开发场景、npm 包开发场景和文档站开发场景："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/Solutions.png",alt:"Modern.js 解决方案"})}),"\n",(0,r.jsx)("div",{style:{textAlign:"center",fontStyle:"italic"},children:(0,r.jsx)(n.p,{children:"Modern.js 解决方案"})}),"\n",(0,r.jsx)(n.p,{children:"作为 Modern.js 工程体系的一部分，以上每个解决方案都可以被单独使用，并且各自部署了独立的文档站点。开发者可以按需选择其中的一个或多个解决方案来使用。"}),"\n",(0,r.jsxs)(n.p,{children:["在代码层面，这三个解决方案按照统一的研发规范迭代，并复用同一套插件机制，因此，它们提供的研发体验也较为一致。大家如果对内部实现感兴趣，可以在 GitHub 上的 ",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js",target:"_blank",rel:"noopener noreferrer",children:"Modern.js 仓库"})," 中找到它们的源代码。"]}),"\n",(0,r.jsx)(n.p,{children:"下面让我们来了解一下这三个解决方案提供的最新能力。"}),"\n",(0,r.jsxs)(n.h2,{id:"modernjs-框架",children:["Modern.js 框架",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-框架",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Modern.js 框架是一个基于 React 的渐进式 Web 开发框架"}),"。在字节跳动内部，我们将 Modern.js 封装为上层框架，并支撑了数千个 Web 应用的研发。"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"由于 Modern.js 框架的使用最为广泛，在下文中，我们会省略「框架」，直接称其为 Modern.js。"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在 Modern.js 落地的过程中，我们收到很多业务同学提出的诉求，包括构建性能、框架的灵活性和可扩展性、页面加载性能等方面，相信社区中的开发者也会面临相似的问题。"}),"\n",(0,r.jsx)(n.p,{children:"为了更好地满足这些诉求，Modern.js v2 提供了以下特性："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"通过引入 Rust 构建工具 —— Rspack 来提升构建性能。"}),"\n",(0,r.jsx)(n.li,{children:"通过渐进式设计来保证框架的灵活性。"}),"\n",(0,r.jsx)(n.li,{children:"通过插件系统来提供更好的可扩展性。"}),"\n",(0,r.jsx)(n.li,{children:"通过嵌套路由来改善开发效率、优化加载性能。"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"rspack-构建模式",children:["Rspack 构建模式",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack-构建模式",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Modern.js v2 提供开箱即用的双构建工具支持"}),"，开发者可以在成熟的 Webpack 和更快的 Rspack 之间进行切换。大家对 Rspack 可能还不太了解，Rspack 是由字节跳动开源的 Web 构建工具，基于 Rust 语言开发，具有高性能、可定制、兼容 Webpack 生态等特性。"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/rspack-logo.png",alt:""})}),"\n",(0,r.jsx)("div",{style:{textAlign:"center",fontStyle:"italic"},children:"Rspack Logo"}),"\n",(0,r.jsxs)(n.p,{children:["相较于 Webpack，Rspack 的构建性能有明显提升，除了 Rust 带来的语言优势，这也来自于它的并行架构和增量编译等特性。经过 benchmark 验证，",(0,r.jsx)(n.strong,{children:"Rspack 可以给 Modern.js 项目带来 5 ～ 10 倍编译性能的提升。"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/rspack-benchmark.png",alt:""})}),"\n",(0,r.jsx)("div",{style:{textAlign:"center",fontStyle:"italic"},children:"Rspack Benchmark"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Modern.js 已支持在 Rspack 模式下使用框架的 70% 功能和配置项"}),"，包括服务器端渲染（SSR），静态站点生成（SSG）、嵌套路由、CSS Modules 和 Tailwind CSS 等功能。除了功能，Modern.js 在 Rspack 模式下的配置项也与 Webpack 模式基本一致，在我们的实际验证中，一个小型项目花几分钟就可以平滑切换到 Rspack 模式。"]}),"\n",(0,r.jsx)(n.p,{children:"目前，Rspack 项目以及 Modern.js 的 Rspack 模式仍在快速迭代中。在未来几个月内，我们将逐步对齐 Webpack 模式和 Rspack 模式的绝大多数功能和配置，使更多项目能从 Webpack 平滑地过渡到 Rspack。"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Rspack 已于 2023.03.10 号正式开源，你也可以在非 Modern.js 的项目中直接使用 Rspack 进行构建。如果你对 Rspack 感兴趣，请阅读 ",(0,r.jsx)(n.a,{href:"https://www.rspack.dev/zh/blog/announcement.html",target:"_blank",rel:"noopener noreferrer",children:"「Rspack 正式发布了」"}),"来了解更多。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"渐进式设计",children:["渐进式设计",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#渐进式设计",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["大家对 Modern.js 框架的第一印象可能是「一个大而全的框架」，但事实上，为了避免变得臃肿，",(0,r.jsx)(n.strong,{children:"Modern.js 采取了渐进式设计"}),"，将所有功能建立在灵活的插件系统之上，因此具备按需启用和可插拔的能力。"]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js 期望能支持不同规模的项目研发，考虑到中大型项目和小型项目对功能的诉求存在差异，",(0,r.jsx)(n.strong,{children:"Modern.js 的大多数功能都是按需启用的"}),"。在创建项目时，Modern.js 默认只安装核心模块，使 npm 依赖保持轻量；当需要用到额外功能时，你可以通过 modern new 命令一键开启，并自动安装相关依赖。"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/modern-new-code.png",alt:"modern new 命令"})}),"\n",(0,r.jsx)("div",{style:{textAlign:"center",fontStyle:"italic"},children:"modern new 命令"}),"\n",(0,r.jsx)(n.p,{children:"比如："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["对于基础的开发场景，项目中只需安装 Modern.js 的 CLI 工具 ",(0,r.jsx)(n.code,{children:"@modern-js/app-tools"}),"，即具备了开发调试、生产构建的能力。"]}),"\n",(0,r.jsx)(n.li,{children:"当你需要在应用中增加一些 BFF 接口时，可以执行 modern new 命令来启用 BFF 功能。启用后，Modern.js 会自动安装所需的 BFF 插件，以及某个 Node.js 框架对应的插件（如 Koa / Express）："}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/bff-plugins.png",alt:""})}),"\n",(0,r.jsxs)(n.p,{children:["目前，你可以通过 ",(0,r.jsx)(n.code,{children:"modern new"})," 命令来按需开启以下功能，未来我们也会将更多功能加入到 ",(0,r.jsx)(n.code,{children:"new"})," 命令中，使其能够被便捷地集成。"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/modern-new.png",alt:""})}),"\n",(0,r.jsxs)(n.h3,{id:"插件系统",children:["插件系统",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#插件系统",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"开发者在实际项目中使用 Web 研发框架时，除了使用开箱即用的能力，也会有很强的定制化诉求。因此，Modern.js 设计了一套灵活的插件系统来满足这一点。"}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js 可以划分为三个核心部分：",(0,r.jsx)(n.strong,{children:"CLI 工具、服务端和运行时"}),"。其中，CLI 工具负责提供 CLI 命令和打包构建能力；服务端提供 SSR、BFF 等能力；运行时提供状态管理、路由等能力。"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/modern-parts.png",alt:"Modern.js 核心模块"})}),"\n",(0,r.jsx)("div",{style:{textAlign:"center",fontStyle:"italic"},children:(0,r.jsx)(n.p,{children:"Modern.js 核心模块"})}),"\n",(0,r.jsx)(n.p,{children:"我们为这三者分别设计了插件："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CLI 插件"}),"：对应 CLI 工具，负责控制 CLI 命令、打包构建流程。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Server 插件"}),"：对应服务端，用于处理服务端的生命周期以及客户端请求。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Runtime 插件"}),"：对应运行时，用于处理 React 组件渲染逻辑。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"这三种插件使用统一的 Hook 模型，并提供丰富的插件 API。比如，你可以使用插件做到："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"注册自定义的 CLI 命令"}),"\n",(0,r.jsx)(n.li,{children:"修改 Rspack、PostCSS、Less、Sass 等基础工具的配置"}),"\n",(0,r.jsx)(n.li,{children:"修改运行时需要渲染的 React 组件"}),"\n",(0,r.jsx)(n.li,{children:"自定义控制台日志"}),"\n",(0,r.jsx)(n.li,{children:"自定义 Node.js 服务器框架"}),"\n",(0,r.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在字节跳动内部，我们借助这些插件 API，结合公司内的基建和平台，封装出内部的企业级框架。如果你需要对 Modern.js 框架进行深度定制，也可以借助这些插件 API 来完成。"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["如果你对 Modern.js 的插件系统感兴趣，请阅读 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/guides/topic-detail/framework-plugin/introduction.html",target:"_blank",rel:"noopener noreferrer",children:"「Modern.js - 自定义插件」"}),"文档。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"嵌套路由",children:["嵌套路由",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#嵌套路由",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Modern.js v2 基于 React Router v6 提供了新的路由方式 —— 嵌套路由（Nested Routes）。"})}),"\n",(0,r.jsx)(n.p,{children:"如果大家了解过 Remix 或 Next.js 13，应该对嵌套路由不陌生了。嵌套路由与 Modern.js v1 提供的约定式路由相似，也是一种基于文件系统的路由。"}),"\n",(0,r.jsxs)(n.p,{children:["在 Modern.js v2 中，我们约定在 ",(0,r.jsx)(n.code,{children:"src/routes"})," 目录下的文件，在应用启动时会自动生成对应的路由结构，页面的路由与文件结构是相呼应的，并且可以为资源加载带来一些性能优化。"]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 的嵌套路由包含以下功能："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"资源加载"}),"：基于路由结构，并行加载多级路由资源，子组件资源加载不再受父组件渲染影响。并且将路由资源进一步细分，保证路由跳转时的最小资源加载。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"共享布局"}),"：在路由之间轻松共享 UI，同时保持状态，并避免多余的重新渲染。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"数据获取"}),"：基于路由结构完成多级路由的数据并行获取。"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["在 Modern.js v2 中，只需要配置 ",(0,r.jsx)(n.code,{children:"runtime.router"}),"，即可开启嵌套路由："]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/runtime-router.png",alt:""})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["如果你对嵌套路由的细节感兴趣，请阅读",(0,r.jsx)(n.a,{href:"https://modernjs.dev/guides/basic-features/routes.html#%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer",children:"「Modern.js - 路由」"}),"文档。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"流式渲染",children:["流式渲染",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#流式渲染",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Modern.js v2 基于 React v18 的全新 API 支持了流式渲染（Streaming SSR）。"})}),"\n",(0,r.jsx)(n.p,{children:"如果大家关注去年 React v18 的版本更新，可能会注意到它提供了新的 Server Side APIs，并对 Suspense 做了完整支持。在 Modern.js v2 中，我们通过 React Router v6 暴露的能力，在框架层面支持了流式渲染。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/suspense.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"流式渲染利用 HTTP 的能力，允许将页面的 HTML 分割成较小的块，并逐步将这些块从服务器发送到客户端。页面无需等待所有数据加载完成，即可呈现完整用户界面，因此与数据无关的局部内容能够更早地显示出来。"}),"\n",(0,r.jsxs)(n.p,{children:["在 Modern.js v2 中，只需要配置 ",(0,r.jsx)(n.code,{children:"server.ssr.mode"}),"，即可开启流式渲染："]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/enable-streaming.png",alt:""})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["如果你想在 Modern.js 中使用 SSR 和流式渲染，请阅读",(0,r.jsx)(n.a,{href:"https://modernjs.dev/guides/advanced-features/ssr.html",target:"_blank",rel:"noopener noreferrer",children:"「 Modern.js 服务端渲染（SSR）」"}),"文档。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"modernjs-module",children:["Modern.js Module",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-module",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js Module 是我们针对 npm 包开发场景提供的解决方案，它为开发者提供了专业的 npm 包开发工具，能够更轻松地构建、调试和发布一个 npm 包。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/module-home.png",alt:"Modern.js Module 首页"})}),"\n",(0,r.jsx)("div",{style:{textAlign:"center",fontStyle:"italic"},children:(0,r.jsx)(n.p,{children:"Modern.js Module 首页"})}),"\n",(0,r.jsx)(n.p,{children:"Modern.js Module 的核心能力包括："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"构建能力"}),"：基于 esbuild 实现的构建工具，提供类型生成能力，能够高度定制构建产物。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"调试能力"}),"：基于 Storybook 调试项目，可以测试代码功能、验证构建产物可用性。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"测试能力"}),"：集成 Jest 测试能力，能够开箱即用地编写你的测试代码。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"版本管理能力"}),"：基于 Changeset 提供版本管理命令，涵盖从开发到发布的过程。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"扩展能力"}),"：提供包含丰富 Hooks 的插件机制，支持扩展调试能力，或对流程进行自定义。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"基于-esbuild-构建",children:["基于 esbuild 构建",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基于-esbuild-构建",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在 v2 版本中，我们以 esbuild 为核心，扩展其插件机制，并结合 SWC 实现了一个通用的模块构建工具，它的特性包括："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"支持 bundle 和 bundleless 两种模式的构建"}),"。你可以选择构建产物的形式 —— 是打包处理后的 bundle 产物，还是直接通过 transform 处理的 bundleless 产物。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"相较于 esbuild，提供更丰富的构建能力和插件 Hook"}),"。例如，在样式方面，默认支持 Less、Sass、PostCSS 和 CSS Modules，并支持静态资源处理、SVGR 等常用能力。这些能力在 bundle 和 bundleless 模式下均可使用。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在生成 TS 类型文件上，Modern.js Module v2 也支持新的方式："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型文件的 bundle 处理"}),"：对生成的类型文件进行打包处理，生成一个单独的类型文件。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型文件里的别名处理"}),"：对生成的类型文件里包含的别名路径进行转换。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"总的来说，相较于 v1 版本，Modern.js Module v2 提供了更完整的构建能力，同时构建效率也有明显提升。"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["如果你对 Modern.js Module 感兴趣，请移步",(0,r.jsx)(n.a,{href:"https://modernjs.dev/module-tools",target:"_blank",rel:"noopener noreferrer",children:"「Modern.js Module 文档」"}),"来了解更多。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"modernjs-doc",children:["Modern.js Doc",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-doc",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js Doc 是一个面向文档站场景的框架，它的目标是给开发者提供一个简单、高效、可扩展的文档站解决方案。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/v2-release/doc-tools.png",alt:"Modern.js Doc 官网介绍页"})}),"\n",(0,r.jsx)("div",{style:{textAlign:"center",fontStyle:"italic"},children:(0,r.jsx)(n.p,{children:"Modern.js Doc 官网介绍页"})}),"\n",(0,r.jsx)(n.p,{children:"目前，Modern.js Doc 包含如下能力："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"基于 Rspack 构建"}),"：项目构建和 HMR 速度飞快，提供愉悦的开发和生产部署体验。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"支持 MDX 语法"}),"：在普通 Markdown 语法的基础上可以嵌入 React 组件和 JSX 语法。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"全文搜索"}),"：内置开箱即用的全文搜索能力，基于 FlexSearch 实现。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"支持国际化"}),"：提供多语言文档切换功能，且支持多语言内容搜索。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"自定义主题"}),"：内置一套默认主题，你可以基于这套主题进行扩展，也可以从零定制一套自定义主题。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"插件机制"}),"：提供丰富的插件钩子能力，让你能够充分自定义扩展框架功能。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"我们做 Modern.js Doc 的初心，是为了解决我们团队内的文档站搭建需求。随着 Modern.js Doc 的功能逐渐完整，我们也将它开放给社区使用，使它能发挥更大的价值。"}),"\n",(0,r.jsxs)(n.p,{children:["目前，Modern.js Doc 仍处于 beta 测试状态，相关源代码已经开放在 ",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js",target:"_blank",rel:"noopener noreferrer",children:"Modern.js 仓库"})," 中，并提供了基础的 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/doc-tools",target:"_blank",rel:"noopener noreferrer",children:"使用文档"}),"。在未来，我们将继续投入，使之成为一个完成度更高的文档解决方案。"]}),"\n",(0,r.jsxs)(n.h2,{id:"致谢",children:["致谢",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#致谢",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 中的部分代码实现参考了社区中的开源项目，我们对这些项目表示衷心的感谢："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@modern-js/bundle-require"}),": 修改自 ",(0,r.jsx)(n.a,{href:"https://github.com/egoist/bundle-require",target:"_blank",rel:"noopener noreferrer",children:"bundle-require"}),"。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@modern-js/plugin"}),": hook API 的实现参考了 ",(0,r.jsx)(n.a,{href:"https://github.com/farrow-js/farrow/tree/master/packages/farrow-pipeline",target:"_blank",rel:"noopener noreferrer",children:"farrow-pipeline"}),"。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@modern-js/builder"}),": moduleScope 和 fileSize 插件参考了 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/create-react-app",target:"_blank",rel:"noopener noreferrer",children:"create-react-app"}),"，TsConfigPathsPlugin 参考了 ",(0,r.jsx)(n.a,{href:"https://github.com/dividab/tsconfig-paths-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"tsconfig-paths-webpack-plugin"}),"，generateMetaTags 函数参考了 ",(0,r.jsx)(n.a,{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-webpack-plugin"}),"。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@modern-js/plugin-testing"}),": jest runner 参考了 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/jest/blob/fdc74af37235354e077edeeee8aa2d1a4a863032/packages/jest-cli/src/cli/index.ts#L21",target:"_blank",rel:"noopener noreferrer",children:"jest-cli"}),"。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@modern-js/doc-tools"}),": 部分样式参考了 ",(0,r.jsx)(n.a,{href:"https://github.com/vuejs/vitepress",target:"_blank",rel:"noopener noreferrer",children:"vitepress"}),"。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@modern-js/plugin-data-loader"}),": 部分实现参考了 ",(0,r.jsx)(n.a,{href:"https://github.com/remix-run/remix",target:"_blank",rel:"noopener noreferrer",children:"remix"}),"。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"最后",children:["最后",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#最后",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"现阶段 Modern.js 仍是一个很年轻的开源项目，在未来，我们将继续拥抱长期主义，持续打磨功能和文档，并以更透明的方式与社区共同协作。"}),"\n",(0,r.jsx)(n.p,{children:"如果你有兴趣尝试一下 Modern.js，欢迎试用并留下你的反馈意见~"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["官网：",(0,r.jsx)(n.a,{href:"https://modernjs.dev",target:"_blank",rel:"noopener noreferrer",children:"modernjs.dev"})]}),"\n",(0,r.jsxs)(n.li,{children:["GitHub 仓库：",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js",target:"_blank",rel:"noopener noreferrer",children:"github.com/web-infra-dev/modern.js"})]}),"\n"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);