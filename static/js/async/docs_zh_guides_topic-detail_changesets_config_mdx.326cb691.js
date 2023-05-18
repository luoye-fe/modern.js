(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_changesets_config_mdx"],{1649:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return i},title:function(){return r},toc:function(){return h},default:function(){return l}});var s=d("9880"),c=d("23169"),i={sidebar_position:5},r="Changesets 配置文件",h=[{text:"配置介绍",depth:2,id:"配置介绍"},{text:"commit",depth:3,id:"commit"},{text:"access",depth:3,id:"access"},{text:"baseBranch",depth:3,id:"basebranch"},{text:"ignore",depth:3,id:"ignore"},{text:"fixed",depth:3,id:"fixed"},{text:"linked",depth:3,id:"linked"},{text:"updateInternalDependencies",depth:3,id:"updateinternaldependencies"},{text:"changelog",depth:3,id:"changelog"},{text:"___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH",depth:3,id:"___experimentalunsafeoptions_will_change_in_patch"},{text:"onlyUpdatePeerDependentsWhenOutOfRange",depth:4,id:"onlyupdatepeerdependentswhenoutofrange"},{text:"updateInternalDependents",depth:4,id:"updateinternaldependents"},{text:"useCalculatedVersionForSnapshots",depth:4,id:"usecalculatedversionforsnapshots"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",img:"img",div:"div",pre:"pre",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"changesets-配置文件",children:["Changesets 配置文件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#changesets-配置文件",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["我们前面了解到，初始化 Modern.js 仓库时，会默认初始化 Changesets 的配置文件，即 ",(0,s.jsx)(n.code,{children:".changeset/config.json"})," 文件，下面我们将详细了解一下该文件中支持哪些配置。"]}),"\n",(0,s.jsxs)(n.h2,{id:"配置介绍",children:["配置介绍",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置介绍",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"commit",children:["commit",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#commit",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["类型： ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认值： ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.p,{children:["当配置该字段为 ",(0,s.jsx)(n.code,{children:"true"})," 时，在执行 ",(0,s.jsx)(n.code,{children:"change"})," 和 ",(0,s.jsx)(n.code,{children:"bump"})," 命令时，将自动执行提交代码操作。"]}),"\n",(0,s.jsx)(n.p,{children:"默认的 commit 信息格式如下："}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-change-commit-info.png",alt:"change commit"}),"\n",(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-bump-commit-info.png",alt:"bump commit"})]}),"\n",(0,s.jsxs)(n.p,{children:["该 commit 信息支持自定义，我们将在",(0,s.jsx)(n.a,{href:"/guides/topic-detail/changesets/commit",children:"自定义提交 commit 信息"}),"章节进行详细介绍。"]}),"\n",(0,s.jsxs)(n.h3,{id:"access",children:["access",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#access",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["类型：",(0,s.jsx)(n.code,{children:"restricted"})," | ",(0,s.jsx)(n.code,{children:"public"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认值：",(0,s.jsx)(n.code,{children:"restricted"})]}),"\n",(0,s.jsxs)(n.p,{children:["用于配置当前包的发布形式，如果配置为 ",(0,s.jsx)(n.code,{children:"restricted"}),"，将作为私有包发布，如果为 ",(0,s.jsx)(n.code,{children:"public"}),"，则发布公共范围包。"]}),"\n",(0,s.jsxs)(n.p,{children:["对于仓库中存在部分包需要配置 access，可以在 ",(0,s.jsx)(n.code,{children:"package.json"})," 中配置 ",(0,s.jsx)(n.code,{children:"publishConfig"}),"，例如："]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-json",meta:"title=package.json",children:'{\n  "publishConfig": {\n    "registry": "https://registry.npmjs.org/",\n    "access": "public"\n  }\n}\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["对于不需要发布的包，可以在 ",(0,s.jsx)(n.code,{children:"package.json"})," 中设置 ",(0,s.jsx)(n.code,{children:"private"})," 为 ",(0,s.jsx)(n.code,{children:"true"}),"，阻止其进行发布。"]}),"\n",(0,s.jsxs)(n.h3,{id:"basebranch",children:["baseBranch",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basebranch",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["类型： ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认值： ",(0,s.jsx)(n.code,{children:"main"})]}),"\n",(0,s.jsx)(n.p,{children:"仓库主分支。该配置用于计算当前分支的变更包并进行分类。"}),"\n",(0,s.jsxs)(n.h3,{id:"ignore",children:["ignore",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ignore",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["类型：",(0,s.jsx)(n.code,{children:"string[]"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认值：",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsxs)(n.p,{children:["用于声明执行 ",(0,s.jsx)(n.code,{children:"bump"})," 命令时忽略的包，和 ",(0,s.jsx)(n.code,{children:"bump"})," 命令的 ",(0,s.jsx)(n.code,{children:"--ignore"})," 参数用法一致，注意两者不能同时使用。"]}),"\n",(0,s.jsxs)(n.h3,{id:"fixed",children:["fixed",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fixed",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["类型： ",(0,s.jsx)(n.code,{children:"string[][]"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认值：",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsxs)(n.p,{children:["用于 monorepo 中对包进行分组，相同分组中的包版本号将进行绑定，每次执行 ",(0,s.jsx)(n.code,{children:"bump"})," 命令时，同一分组中的包只要有一个升级版本号，其他会一起升级。\n支持使用正则匹配包名称。"]}),"\n",(0,s.jsxs)(n.h3,{id:"linked",children:["linked",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#linked",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["类型： ",(0,s.jsx)(n.code,{children:"string[][]"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认值：",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsxs)(n.p,{children:["和 ",(0,s.jsx)(n.code,{children:"fixed"})," 类似，也是对 monorepo 中对包进行分组，但是每次执行 ",(0,s.jsx)(n.code,{children:"bump"})," 命令时，只有和 changeset 声明的变更相关的包才会升级版本号，同一分组的变更包的版本号将保持一致。\n支持使用正则匹配包名称。"]}),"\n",(0,s.jsxs)(n.h3,{id:"updateinternaldependencies",children:["updateInternalDependencies",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updateinternaldependencies",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["类型：",(0,s.jsx)(n.code,{children:"patch"})," | ",(0,s.jsx)(n.code,{children:"minor"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认值：",(0,s.jsx)(n.code,{children:"patch"})]}),"\n",(0,s.jsx)(n.p,{children:"用于声明更新内部依赖的版本号规则。"}),"\n",(0,s.jsxs)(n.p,{children:["当执行 ",(0,s.jsx)(n.code,{children:"bump"})," 命令升级版本号时，默认会自动更新仓库中使用该包的依赖声明。配置该字段为 ",(0,s.jsx)(n.code,{children:"minor"})," 后，如果升级版本号为 ",(0,s.jsx)(n.code,{children:"patch"})," 类型，将不会自动更新引用依赖声明。"]}),"\n",(0,s.jsx)(n.p,{children:"例如："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{children:"pkg-a @ version 1.0.0\npkg-b @ version 1.0.0\n  depends on pkg-a at range `^1.0.0\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，升级 ",(0,s.jsx)(n.code,{children:"pkg-a"})," 至 ",(0,s.jsx)(n.code,{children:"1.0.1"})," 时，会更新 ",(0,s.jsx)(n.code,{children:"pkg-b"})," 中的 ",(0,s.jsx)(n.code,{children:"pkg-a"})," 的依赖版本为 ",(0,s.jsx)(n.code,{children:"^1.0.1"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["当配置 ",(0,s.jsx)(n.code,{children:"updateInternalDependencies"})," 为 ",(0,s.jsx)(n.code,{children:"minor"})," 时，升级 ",(0,s.jsx)(n.code,{children:"pkg-a"})," 至 ",(0,s.jsx)(n.code,{children:"1.0.1"})," 时，",(0,s.jsx)(n.code,{children:"pkg-b"})," 中的 ",(0,s.jsx)(n.code,{children:"pkg-a"})," 的依赖版本将不会更新，只有 ",(0,s.jsx)(n.code,{children:"pkg-a"})," 升级版本号为 ",(0,s.jsx)(n.code,{children:"1.1.0"})," 或者 ",(0,s.jsx)(n.code,{children:"2.0.0"})," 时，才会更新 ",(0,s.jsx)(n.code,{children:"pkg-b"})," 中的 ",(0,s.jsx)(n.code,{children:"pkg-a"})," 的依赖。"]}),"\n",(0,s.jsxs)(n.h3,{id:"changelog",children:["changelog",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#changelog",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["类型：",(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"[string, unknow]"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认值：",(0,s.jsx)(n.code,{children:"@changesets/cli/changelog"})]}),"\n",(0,s.jsx)(n.p,{children:"生成 Changelog 规则。"}),"\n",(0,s.jsxs)(n.p,{children:["配置为 ",(0,s.jsx)(n.code,{children:"false"})," 时，执行 bump 命令时，在 ",(0,s.jsx)(n.code,{children:"CHANGELOG.md"})," 文件中只声明版本号，不声明其他 Changelog 信息。"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-empty-changelog.png",alt:"关闭 changelog 配置"})}),"\n",(0,s.jsxs)(n.p,{children:["配置为 ",(0,s.jsx)(n.code,{children:"@changesets/cli/changelog"})," 将使用官方提供的 Changlog 生成规则，将 changeset 信息转换为 Changlog 内容。"]}),"\n",(0,s.jsxs)(n.p,{children:["配置为数组时，第一个参数为自定义 NPM 包或者路径，第二个参数为需要传入的默认参数配置，自定义格式我们将在后续",(0,s.jsx)(n.a,{href:"/guides/topic-detail/changesets/changelog",children:"自定义 Changelog"})," 章节讲解。"]}),"\n",(0,s.jsxs)(n.h3,{id:"___experimentalunsafeoptions_will_change_in_patch",children:["___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#___experimentalunsafeoptions_will_change_in_patch",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"一些实验性配置。"}),"\n",(0,s.jsxs)(n.h4,{id:"onlyupdatepeerdependentswhenoutofrange",children:["onlyUpdatePeerDependentsWhenOutOfRange",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onlyupdatepeerdependentswhenoutofrange",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["类型：",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认值：",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.p,{children:["针对于 ",(0,s.jsx)(n.code,{children:"peerDependence"})," 依赖的升级策略配置，默认针对 ",(0,s.jsx)(n.code,{children:"peerDependence"})," 在 ",(0,s.jsx)(n.code,{children:"minor"})," 和 ",(0,s.jsx)(n.code,{children:"major"})," 版本升级时，当前包会升级大版本。"]}),"\n",(0,s.jsxs)(n.p,{children:["该配置设置为 true 时，仅当 ",(0,s.jsx)(n.code,{children:"peerDependence"})," 声明包依赖超出声明范围时才更新版本。"]}),"\n",(0,s.jsxs)(n.h4,{id:"updateinternaldependents",children:["updateInternalDependents",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updateinternaldependents",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["类型： ",(0,s.jsx)(n.code,{children:"always"})," | ",(0,s.jsx)(n.code,{children:"out-of-range"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认值：",(0,s.jsx)(n.code,{children:"always"})]}),"\n",(0,s.jsxs)(n.p,{children:["当执行 ",(0,s.jsx)(n.code,{children:"bump"})," 命令升级版本号时，默认会自动更新仓库中使用该包的依赖声明。当设置该参数为 ",(0,s.jsx)(n.code,{children:"out-of-range"})," 时，只有当依赖声明超出范围时才会更新仓库中使用该包的依赖声明。"]}),"\n",(0,s.jsxs)(n.h4,{id:"usecalculatedversionforsnapshots",children:["useCalculatedVersionForSnapshots",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usecalculatedversionforsnapshots",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["类型：",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认值：",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.p,{children:["使用快照发布时，默认会使用 ",(0,s.jsx)(n.code,{children:"0.0.0-timestamp"})," 的版本格式，保证用户可以正常使用预发布版本。当你需要忽略上述问题，使用正常的版本号格式时，即当前版本为 ",(0,s.jsx)(n.code,{children:"1.0.1"})," 快照版本期望使用",(0,s.jsx)(n.code,{children:"1.0.1-timestamp"}),"，可配置该参数为 ",(0,s.jsx)(n.code,{children:"true"}),"。"]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);