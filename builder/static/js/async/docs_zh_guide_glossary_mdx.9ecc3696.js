(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guide_glossary_mdx"],{57432:function(e,r,d){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var d in r)Object.defineProperty(e,d,{enumerable:!0,get:r[d]})}(r,{frontmatter:function(){return s},toc:function(){return l},title:function(){return c},default:function(){return h}});var n=d("12151"),i=d("21447");let s=void 0,l=[{id:"bundler",text:"Bundler",depth:2},{id:"rspack",text:"Rspack",depth:2},{id:"builder",text:"Builder",depth:2},{id:"builder-provider",text:"Builder Provider",depth:2},{id:"modern_js",text:"MODERN_JS",depth:2},{id:"edenx",text:"EdenX",depth:2}],c="名词解释";function a(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",img:"img",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"名词解释",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#名词解释",children:"#"}),"名词解释"]}),"\n",(0,n.jsxs)(r.h2,{id:"bundler",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#bundler",children:"#"}),"Bundler"]}),"\n",(0,n.jsxs)(r.p,{children:["指 ",(0,n.jsx)(r.code,{children:"webpack"}),"、",(0,n.jsx)(r.code,{children:"Rspack"})," 等模块打包工具。"]}),"\n",(0,n.jsx)(r.p,{children:"打包工具的主要目标是将 JavaScript、CSS 等文件打包在一起，打包后的文件可以在浏览器、Node.js 等环境中使用。当 Bundler 处理 Web 应用时，它会构建一个依赖关系图，其中包含应用需要的各个模块，然后将所有模块打包成一个或多个 bundle。"}),"\n",(0,n.jsxs)(r.h2,{id:"rspack",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"}),"Rspack"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"nofollow",children:"Rspack"})," 是一个基于 Rust 的高性能 Web 构建工具，具备与 Webpack 生态系统的互操作性，可以被 Webpack 项目低成本集成，并提供更好的构建性能。"]}),"\n",(0,n.jsxs)(r.h2,{id:"builder",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder",children:"#"}),"Builder"]}),"\n",(0,n.jsx)(r.p,{children:"Builder 可以翻译为「构建引擎」，Builder 的目标是「复用构建工具的最佳实践」。"}),"\n",(0,n.jsx)(r.p,{children:"因为 webpack 等 Bundler 是比较底层的，如果我们基于 webpack 来构建一个项目，需要充分理解 webpack 的各个配置项和三方插件，并进行大量的配置组装和性能调优等工作。"}),"\n",(0,n.jsx)(r.p,{children:"Builder 比 Bundler 的封装程度更高，默认集成代码转换、代码压缩等能力。通过接入 Builder，可以快速获得构建 Web 应用的能力。"}),"\n",(0,n.jsx)(r.p,{children:"Builder 内部的分层如下："}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-struct-10092.png",alt:""})}),"\n",(0,n.jsxs)(r.h2,{id:"builder-provider",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-provider",children:"#"}),"Builder Provider"]}),"\n",(0,n.jsx)(r.p,{children:"Builder Provider 是 Builder 的组成部分之一，Provider 基于特定 bundler 实现了对应的构建能力。"}),"\n",(0,n.jsx)(r.p,{children:"目前 Builder 提供了两个 Provider："}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"@modern-js/builder-webpack-provider"}),"：底层基于 webpack 来实现。"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"@modern-js/builder-rspack-provider"}),"：底层基于 Rspack 来实现。"]}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#",children:"#"}),"Modern.js"]}),"\n",(0,n.jsx)(r.p,{children:"Modern.js 是字节跳动 Web 工程体系的开源版本，它提供多个解决方案，来帮助开发者解决不同研发场景下的问题。"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.a,{href:"https://github.com/web-infra-dev/modern.js",target:"_blank",rel:"nofollow",children:["Modern.js"," 代码仓库"]}),"。"]}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"edenx",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#edenx",children:"#"}),"EdenX"]}),"\n",(0,n.jsxs)(r.p,{children:["字节跳动内部的 Web 工程方案，基于 ","Modern.js"," 实现。"]})]})}var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.useMDXComponents)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}}}]);