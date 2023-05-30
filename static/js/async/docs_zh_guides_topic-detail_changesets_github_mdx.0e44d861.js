(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_changesets_github_mdx"],{95324:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return r},toc:function(){return h},default:function(){return i}});var t=s("9880"),l=s("23169"),a={sidebar_position:9},r="使用 Github 相关工具",h=[{text:"BOT",depth:2,id:"bot"},{text:"安装",depth:3,id:"安装"},{text:"配置",depth:3,id:"配置"},{text:"使用",depth:3,id:"使用"},{text:"未添加 changeset",depth:4,id:"未添加-changeset"},{text:"已添加 changeset",depth:4,id:"已添加-changeset"},{text:"不需要 changeset",depth:4,id:"不需要-changeset"},{text:"Action",depth:2,id:"action"},{text:"自动创建 Release Pull Request",depth:3,id:"自动创建-release-pull-request"},{text:"使用",depth:3,id:"使用-1"},{text:"自动 Release",depth:3,id:"自动-release"},{text:"使用",depth:4,id:"使用-2"}];function c(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",img:"img",h4:"h4",code:"code",pre:"pre"},(0,l.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"使用-github-相关工具",children:["使用 Github 相关工具",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-github-相关工具",children:"#"})]}),"\n",(0,t.jsxs)(n.h2,{id:"bot",children:["BOT",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bot",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"在 Github 上，Changesets 提供了机器人用于检测当前 Pull Request 是否存在 changeset，并提供了 UI 界面添加和修改 changeset。"}),"\n",(0,t.jsxs)(n.h3,{id:"安装",children:["安装",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["点击进入",(0,t.jsx)(n.a,{href:"https://github.com/apps/changeset-bot",target:"_blank",rel:"noopener noreferrer",children:"链接"}),"，右上角选择安装，确认即可安装成功。"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-install-bot.png",alt:"安装机器人"})}),"\n",(0,t.jsxs)(n.h3,{id:"配置",children:["配置",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"安装成功后，即可进入配置页面，根据需求选择应用仓库即可。"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-config-bot.png",alt:"配置机器人"})}),"\n",(0,t.jsxs)(n.h3,{id:"使用",children:["使用",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"配置完成后，该机器人将会自动 check 每个 Pull Request 是否添加了 changeset，并通过回复的方式给到提示信息。"}),"\n",(0,t.jsxs)(n.h4,{id:"未添加-changeset",children:["未添加 changeset",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#未添加-changeset",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-bot-no-changeset.png",alt:"未添加 changeset 状态"})}),"\n",(0,t.jsxs)(n.p,{children:["可在仓库执行 ",(0,t.jsx)(n.code,{children:"pnpm run change"})," 添加 changeset，也可直接点击下方第二个链接填写 changeset。"]}),"\n",(0,t.jsxs)(n.h4,{id:"已添加-changeset",children:["已添加 changeset",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#已添加-changeset",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-bot-exist-changeset.png",alt:"已添加 changeset 状态"})}),"\n",(0,t.jsx)(n.p,{children:"可点击下方链接修改和添加新的 changeset。"}),"\n",(0,t.jsxs)(n.h4,{id:"不需要-changeset",children:["不需要 changeset",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#不需要-changeset",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"可直接忽略未添加时的提示信息，它不会造成 Pull Request 不能合并的问题。"}),"\n",(0,t.jsxs)(n.h2,{id:"action",children:["Action",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#action",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"自动创建-release-pull-request",children:["自动创建 Release Pull Request",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自动创建-release-pull-request",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js 提供了自动创建发版 Pull Request 的 Github Action，提供基于选择的分支自动执行 bump 操作，更新 lock 文件及创建 Pull Request 操作。"}),"\n",(0,t.jsxs)(n.h3,{id:"使用-1",children:["使用",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-1",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["在仓库中创建 ",(0,t.jsx)(n.code,{children:".github/workflows/release-pull-request.yml"})," 文件，填入以下内容："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"name: Release Pull Request\n\non:\n  workflow_dispatch:\n    inputs:\n      version:\n        description: 'Release Version(v1.0.0)'\n        required: true\n\njobs:\n  release:\n    name: Create Release Pull Request\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout Repo\n        uses: actions/checkout@master\n        with:\n          # This makes Actions fetch only one branch to release\n          fetch-depth: 100\n\n      - name: Create Release Pull Request\n        uses: web-infra-dev/actions@main\n        with:\n          # this expects you to have a script called release which does a build for your packages and calls changeset publish\n          versionNumber: ${{ github.event.inputs.version }}\n          type: 'pull request'\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          REPOSITORY: ${{ github.repository }}\n          REF: ${{ github.ref }}\n"})}),"\n",(0,t.jsx)(n.p,{children:"将 Workflow 合并到主分支后，进入 Github 仓库对应的 Action 页面，选择 Release Pull Request："}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/action-pull-request.png",alt:"Release Pull Request Action"})}),"\n",(0,t.jsx)(n.p,{children:"选择本次发布的分支并填入版本号，版本号格式推荐 v1.0.0，点击 Run workflow 按钮："}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/run-pull-request-action.png",alt:"Run Release Pull Request"})}),"\n",(0,t.jsxs)(n.p,{children:["workflow 运行完成后将自动创建 ",(0,t.jsx)(n.code,{children:"Release-${version}"})," 的 Pull Request，自动完成 ",(0,t.jsx)(n.code,{children:"bump"})," changeset 相关版本号并更新 lock 文件，Pull Request 的内容为执行 ",(0,t.jsx)(n.code,{children:"gen-release-note"})," 命令自动生成的 Release Note。"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/release-pull-request.png",alt:"Release Pull Request"})}),"\n",(0,t.jsxs)(n.h3,{id:"自动-release",children:["自动 Release",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自动-release",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js 提供了自动创建发版 Pull Request 的 Github Action，提供基于选择的分支自动执行 release 操作，将包发布到 NPM 上。"}),"\n",(0,t.jsxs)(n.h4,{id:"使用-2",children:["使用",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-2",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["在仓库中创建 ",(0,t.jsx)(n.code,{children:".github/workflows/release.yml"})," 文件，填入以下内容："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"name: Release\n\non:\n  workflow_dispatch:\n    inputs:\n      version:\n        type: choice\n        description: 'Release Version(canary, alpha, pre, latest)'\n        required: true\n        default: 'canary'\n        options:\n          - canary\n          - alpha\n          - pre\n          - latest\n      branch:\n        description: 'Release Branch(confirm release branch)'\n        required: true\n        default: 'main'\n\njobs:\n  release:\n    name: Release\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout Repo\n        uses: actions/checkout@master\n        with:\n          # This makes Actions fetch only one branch to release\n          fetch-depth: 1\n\n      - name: Release\n        uses: web-infra-dev/actions@main\n        with:\n          # this expects you to have a script called release which does a build for your packages and calls changeset publish\n          version: ${{ github.event.inputs.version }}\n          branch: ${{ github.event.inputs.branch }}\n          type: 'release'\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n          REPOSITORY: ${{ github.repository }}\n          REF: ${{ github.ref }}\n"})}),"\n",(0,t.jsx)(n.p,{children:"配置仓库的 NPM_TOKEN:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/github-set-npm-token.png",alt:"配置 Token"})}),"\n",(0,t.jsx)(n.p,{children:"将 Workflow 合并到主分支后，进入 Github 仓库对应的 Action 页面，选择 Release："}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/release-action.png",alt:"Release Action"})}),"\n",(0,t.jsx)(n.p,{children:"选择分支名称和发布版本类型，点击 Run workflow 按钮："}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/run-release-workflow.png",alt:"Run Release Action"})}),"\n",(0,t.jsx)(n.p,{children:"Workflow 将自动完成仓库 build 和发布到 NPM 流程。"})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);