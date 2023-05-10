(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_api_git_mdx"],{1532:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});!function(e,i){for(var n in i)Object.defineProperty(e,n,{enumerable:!0,get:i[n]})}(i,{frontmatter:function(){return d},title:function(){return s},toc:function(){return c},default:function(){return o}});var t=n("9880"),r=n("23169"),d={sidebar_position:4},s="@modern-js/codesmith-api-git",c=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"API",depth:2,id:"api"},{text:"isInGitRepo",depth:3,id:"isingitrepo"},{text:"initGitRepo",depth:3,id:"initgitrepo"},{text:"addAndCommit",depth:3,id:"addandcommit"}];function a(e){var i=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.h1,{id:"@modern-js/codesmith-api-git",children:["@modern-js/codesmith-api-git",(0,t.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#@modern-js/codesmith-api-git",children:"#"})]}),"\n",(0,t.jsx)(i.p,{children:"微生成器中使用 git 相关操作的 API 封装，提供判断 git 仓库，初始化及提交代码等方法。"}),"\n",(0,t.jsxs)(i.h2,{id:"使用姿势",children:["使用姿势",(0,t.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,t.jsx)(i.div,{className:"language-",children:(0,t.jsx)(i.div,{className:"modern-code-content",children:(0,t.jsx)(i.pre,{className:"code",children:(0,t.jsx)(i.code,{className:"language-ts",children:"import { GitAPI } from '@modern-js/codesmith-api-git';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const gitApi = new GitAPI(generatorCore, generatorContext);\n  await gitApi.initGitRepo();\n};\n"})})})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"创建 GitAPI 实例，参数和微生成器函数参数一致，为 context 和 generator，具体介绍请看微生成器项目组成"}),"\n",(0,t.jsx)(i.li,{children:"调用其实例上 API 即可。"}),"\n"]}),"\n",(0,t.jsxs)(i.h2,{id:"api",children:["API",(0,t.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,t.jsxs)(i.h3,{id:"isingitrepo",children:["isInGitRepo",(0,t.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#isingitrepo",children:"#"})]}),"\n",(0,t.jsx)(i.p,{children:"当前目录是否为 git 仓库。"}),"\n",(0,t.jsx)(i.p,{children:"参数："}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["cwd?: ",(0,t.jsx)(i.code,{children:"string"})," git 命令的执行目录，默认为微生成器 ",(0,t.jsx)(i.code,{children:"outputPath"}),"。"]}),"\n"]}),"\n",(0,t.jsxs)(i.h3,{id:"initgitrepo",children:["initGitRepo",(0,t.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#initgitrepo",children:"#"})]}),"\n",(0,t.jsx)(i.p,{children:"初始化为 git 仓库。init 的默认分支名可通过生成器 config 中的 defaultBranch 进行配置。"}),"\n",(0,t.jsx)(i.p,{children:"参数："}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["cwd?: ",(0,t.jsx)(i.code,{children:"string"})," git 命令的执行目录，默认为微生成器 ",(0,t.jsx)(i.code,{children:"outputPath"}),"。"]}),"\n",(0,t.jsxs)(i.li,{children:["force?: ",(0,t.jsx)(i.code,{children:"boolean"})," 当前目录已经为 git 仓库时使用该参数会强制执行 git init。"]}),"\n"]}),"\n",(0,t.jsxs)(i.h3,{id:"addandcommit",children:["addAndCommit",(0,t.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#addandcommit",children:"#"})]}),"\n",(0,t.jsxs)(i.p,{children:["执行 ",(0,t.jsx)(i.code,{children:"git add ."})," 和 ",(0,t.jsx)(i.code,{children:"git commit"})," 提交当前变更。"]}),"\n",(0,t.jsx)(i.p,{children:"参数："}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["commitMessage: ",(0,t.jsx)(i.code,{children:"string"})," commit 信息。"]}),"\n",(0,t.jsxs)(i.li,{children:["cwd?: ",(0,t.jsx)(i.code,{children:"string"})," git 命令的执行目录，默认为微生成器 ",(0,t.jsx)(i.code,{children:"outputPath"}),"。"]}),"\n"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}}}]);