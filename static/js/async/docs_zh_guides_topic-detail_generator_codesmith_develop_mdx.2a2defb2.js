(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_develop_mdx"],{699:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return c},default:function(){return h}});var d=r("9880"),s=r("23169"),i={sidebar_position:3},a="开发微生成器项目",c=[{text:"创建项目",depth:2,id:"创建项目"},{text:"添加模板文件",depth:2,id:"添加模板文件"},{text:"开发生成器核心逻辑",depth:2,id:"开发生成器核心逻辑"},{text:"测试微生成器",depth:2,id:"测试微生成器"},{text:"运行微生成器",depth:2,id:"运行微生成器"}];function t(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"开发微生成器项目",children:["开发微生成器项目",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开发微生成器项目",children:"#"})]}),"\n",(0,d.jsxs)(n.h2,{id:"创建项目",children:["创建项目",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建项目",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modern.js 提供了创建微生成器项目的微生成器，可以直接通过以下命令创建微生成器项目："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mkdir <projectDir>\n$ npx @modern-js/codesmith-cli @modern-js/generator-generator\n\n? 请填写项目名称 <generatorName>\n? 请选择包管理工具 pnpm\n? 请选择开发语言 TS\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"添加模板文件",children:["添加模板文件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加模板文件",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"在项目目录的 templates 文件夹，用于存放生成器需要的模板文件，如果没有模板文件，该步骤可跳过。"}),"\n",(0,d.jsxs)(n.h2,{id:"开发生成器核心逻辑",children:["开发生成器核心逻辑",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开发生成器核心逻辑",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["默认生成的的项目中，已经实现直接拷贝 templates 目录文件至目标项目，可直接在 ",(0,d.jsx)(n.code,{children:"handleTemplateFile"})," 函数中完成生成器的核心逻辑开发。"]}),"\n",(0,d.jsxs)(n.h2,{id:"测试微生成器",children:["测试微生成器",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#测试微生成器",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["微生成器开发完成后，需要执行 ",(0,d.jsx)(n.code,{children:"pnpm run build"})," 对代码进行编译，在开发模式下可以使用 ",(0,d.jsx)(n.code,{children:"pnpm run build --watch"})]}),"\n",(0,d.jsx)(n.p,{children:"codesmith 提供了 cli 工具用于运行和测试微生成器，在目标目录执行使用如下命令执行即可："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/codesmith-cli <generatorPath>\n"})}),"\n",(0,d.jsx)(n.p,{children:"其中 generatorPath 为上述生成器项目的绝对路径。"}),"\n",(0,d.jsxs)(n.h2,{id:"运行微生成器",children:["运行微生成器",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#运行微生成器",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"生成器发布 npm 包之后，使用如下命令执行："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/codesmith-cli <generatorName>\n"})}),"\n",(0,d.jsx)(n.p,{children:"其中 generatorName 为生成器包名。"}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"@modern-js/create"})," 也支持运行微生成器，可以使用 ",(0,d.jsx)(n.code,{children:"npx @modern-js/create@latest --generator <generatorName>"})," 运行自定义的微生成器。"]}),"\n"]})]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(t,e)})):t(e)}}}]);