(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_monorepo_commands_deploy_mdx"],{78786:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return i},default:function(){return p}});var r=d("9880"),s=d("23169"),c={sidebar_position:7},o="deploy",i=[];function t(e){var n=Object.assign({h1:"h1",a:"a",pre:"pre",code:"code",p:"p",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"deploy",children:["deploy",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#deploy",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'Usage: modern deploy [options]\n\ndeploy project\n\nOptions:\n  -p, --path [path]  Specify the path of the product output (default: "output")\n  -h, --help         display help for command\n'})}),"\n",(0,r.jsx)(n.p,{children:"对指定的项目进行部署，会通过指定项目分析其依赖的 Monorepo 下的子项目。"}),"\n",(0,r.jsxs)(n.p,{children:["在执行命令之后，会首先生成 ",(0,r.jsx)(n.code,{children:"output"})," 目录，在目录当中包含了指定部署的项目以及其依赖的子项目，形成一个最小集合的 Monorepo。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"output"})," 目录是默认目录，可以通过 ",(0,r.jsx)(n.code,{children:"-p"})," 参数进行自定义。"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["然后会在 ",(0,r.jsx)(n.code,{children:"output"})," 目录下进行依赖的安装以及必要文件的复制。"]}),"\n",(0,r.jsx)(n.p,{children:"最后当依赖安装完成后，便完成了对指定项目的部署任务。"}),"\n",(0,r.jsxs)(n.p,{children:["例如部署项目名称为 ",(0,r.jsx)(n.code,{children:"app"})," 的应用，则可以执行："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pnpm deploy app\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["其中 ",(0,r.jsx)(n.code,{children:"app"})," 为项目的 ",(0,r.jsx)(n.code,{children:"package.json"})," 的 ",(0,r.jsx)(n.code,{children:"name"})," 值。"]}),"\n"]})]})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);