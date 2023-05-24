(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_plugin_introduction_mdx"],{78647:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return o},default:function(){return t}});var s=r("9880"),i=r("23169"),c={},d="介绍",o=[];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",img:"img",strong:"strong",ul:"ul",li:"li",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"介绍",children:["介绍",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"插件机制是 Modern.js Doc 至关重要的部分，它可以让你在搭建站点的过程中，方便地扩展框架的功能。那么，你可以通过插件扩展哪些功能呢？我们先来看看 Modern.js 的整体架构。"}),"\n",(0,s.jsx)(n.p,{children:"Modern.js Doc 的整体架构如下图所示："}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/edenx-doc/arch.png",alt:"Modern.js Doc 架构图"})}),"\n",(0,s.jsxs)(n.p,{children:["框架整体分为",(0,s.jsx)(n.strong,{children:"Node 端"}),"和",(0,s.jsx)(n.strong,{children:"浏览器运行时"}),"两部分。通过插件机制，你可以轻松地扩展这两部分的功能。具体来说，你可以扩展如下的能力:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.a,{href:"/plugin/plugin-api#markdown",children:[(0,s.jsx)(n.strong,{children:"Markdown/MDX"})," 编译功能"]}),"。你可以通过添加 ",(0,s.jsx)(n.a,{href:"https://github.com/remarkjs/remark",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"remark"})}),"/",(0,s.jsx)(n.a,{href:"https://github.com/rehypejs/rehype",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"rehype"})})," 插件，扩展 Markdown/MDX 的语法和功能。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/plugin/plugin-api#addpages",children:(0,s.jsx)(n.strong,{children:"添加自定义页面"})}),"。在框架约定式路由的基础，你也可以通过插件，添加新路由，比如添加一个 ",(0,s.jsx)(n.code,{children:"/blog"})," 路由，用于展示博客列表，内容由你自己定义。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/plugin/plugin-api#builderconfig",children:(0,s.jsx)(n.strong,{children:"定制构建工具的行为"})}),"。在框架插件中，你可以自定义底层构建工具 ",(0,s.jsx)(n.a,{href:"https://rspack.dev",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," 的配置，如 ",(0,s.jsx)(n.code,{children:"define"}),"、",(0,s.jsx)(n.code,{children:"alias"}),"，也可以添加自定义 Rspack 插件。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/plugin/plugin-api#extendpagedata",children:(0,s.jsx)(n.strong,{children:"扩展页面元数据"})}),"。针对每个页面，框架内部会计算出一些元数据，如 ",(0,s.jsx)(n.code,{children:"title"}),"、",(0,s.jsx)(n.code,{children:"description"})," 等等，你可以通过插件，扩展这些元数据的计算逻辑，并在运行时通过 ",(0,s.jsx)(n.a,{href:"/api/api-runtime#usepagedata",children:"usePageData"})," hook 访问到。"]}),"\n",(0,s.jsxs)(n.li,{children:["在构建流程前后插入一些",(0,s.jsx)(n.a,{href:"/plugin/plugin-api#beforebuild/afterbuild",children:(0,s.jsx)(n.strong,{children:"自定义逻辑"})}),"。如在构建流程结束后关闭一些事件监听器。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/plugin/plugin-api#globaluicomponents",children:(0,s.jsx)(n.strong,{children:"添加全局组件"})}),"。Modern.js Doc 内部使用 React 进行渲染，你可以通过定义全局 React 组件来灵活地扩展",(0,s.jsx)(n.code,{children:"页面运行时"}),"的功能，比如",(0,s.jsx)(n.code,{children:"添加全局的 BackToTop(返回顶部) 组件"}),"、",(0,s.jsx)(n.code,{children:"添加全局副作用逻辑"}),"。"]}),"\n"]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);