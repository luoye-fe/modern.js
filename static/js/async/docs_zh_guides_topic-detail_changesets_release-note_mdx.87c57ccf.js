(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_changesets_release-note_mdx"],{74008:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return l},default:function(){return o}});var r=s("9880"),t=s("23169"),a={sidebar_position:8},i="自定义 Release Note 格式",l=[{text:"信息",depth:2,id:"信息"},{text:"自定义 Release Note 所需信息",depth:3,id:"自定义-release-note-所需信息"},{text:"getReleaseInfo",depth:4,id:"getreleaseinfo"},{text:"使用获取的信息生成 Release Note",depth:3,id:"使用获取的信息生成-release-note"},{text:"getReleaseNoteLine",depth:4,id:"getreleasenoteline"},{text:"使用自定义模块",depth:2,id:"使用自定义模块"},{text:"配置相对路径",depth:3,id:"配置相对路径"},{text:"使用模块工程方案",depth:3,id:"使用模块工程方案"},{text:"使用 Monorepo 工程方案",depth:3,id:"使用-monorepo-工程方案"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",h4:"h4",h5:"h5",ul:"ul",li:"li",strong:"strong",ol:"ol"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"自定义-release-note-格式",children:["自定义 Release Note 格式",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-release-note-格式",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js 提供了 ",(0,r.jsx)(n.code,{children:"modern gen-release-note"})," 命令，支持通过当前存在的 changeset 和 git commit 信息自动生成 Release Note 信息，在发布命令执行之前，可以通过执行该命令生成本次发布的 Release Note。"]}),"\n",(0,r.jsx)(n.p,{children:"默认生成的 Release Note 格式为："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"[[#1220](https://github.com/web-infra-dev/modern.js/pull/1220)] feat: support bff operators -- Ming\n"})}),"\n",(0,r.jsx)(n.p,{children:"根据 commit 信息获取 changeset 的 Pull Request ID，并生成 Github 的链接，内容为 changeset 的 changelog 信息和作者信息。"}),"\n",(0,r.jsx)(n.p,{children:"当默认生成 Release Note 逻辑不能满足需求时，支持自定义 Release Note 格式。"}),"\n",(0,r.jsxs)(n.h2,{id:"信息",children:["信息",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#信息",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"自定义-release-note-所需信息",children:["自定义 Release Note 所需信息",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-release-note-所需信息",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"生成 Release Note 信息需要先收集一些信息，比如 commit ID、Pull Request ID、commit message 等等。"}),"\n",(0,r.jsxs)(n.p,{children:["该逻辑可通过 ",(0,r.jsx)(n.code,{children:"getReleaseInfo"})," 函数实现。"]}),"\n",(0,r.jsxs)(n.h4,{id:"getreleaseinfo",children:["getReleaseInfo",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getreleaseinfo",children:"#"})]}),"\n",(0,r.jsxs)(n.h5,{id:"params",children:["Params",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"commit"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"类型： string;"}),"\n",(0,r.jsx)(n.p,{children:"当前 changeset 对应的 commit message 信息。"}),"\n",(0,r.jsxs)(n.p,{children:["执行 ",(0,r.jsx)(n.code,{children:"git log --pretty=format:%h--%s--%an .changeset/${changeset.id}.md"})," 的结果。"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"commitObj"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"初步解析 commit 获取基本信息。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface Commit {\n  id: string; // commit id\n  type: 'feature' | 'fix'; // commit 类型，默认通过开头字符串如果为 fix，类型为 fix，其他为 feature\n  repository?: string; // 参数传入的 repo 信息或者 package.json 中定义的 repository 信息\n  pullRequestId?: string;\n  author?: string;\n  message: string; // commit message\n  summary: string; // changeset summary\n  [key: string]: string | undefined;\n}\n"})}),"\n",(0,r.jsxs)(n.h5,{id:"返回值",children:["返回值",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"commitObj， 补充后完整的 commit 对象。"}),"\n",(0,r.jsxs)(n.h5,{id:"默认实现",children:["默认实现",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认实现",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 的默认实现为：根据 commit 信息拆分出 Pull Request ID 和作者，加入到 commitObj 中。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function getReleaseInfo(commit: string, commitObj: Commit) {\n  const commitRegex = /(.*)\\(#(\\d*)\\)/;\n\n  const [, message, author] = commit.split('--');\n\n  commitObj.author = author;\n\n  if ((message || commitObj.summary).match(commitRegex)) {\n    const [, messageShort, pullRequestId] = (\n      message || commitObj.summary\n    ).match(commitRegex)!;\n    commitObj.pullRequestId = pullRequestId;\n    commitObj.message = messageShort.trim();\n  }\n\n  return commitObj;\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"使用获取的信息生成-release-note",children:["使用获取的信息生成 Release Note",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用获取的信息生成-release-note",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["根据 ",(0,r.jsx)(n.code,{children:"getReleaseInfo"})," 中获取的 commit 对象信息，生成对应的 Release Note。"]}),"\n",(0,r.jsxs)(n.p,{children:["该逻辑可通过 ",(0,r.jsx)(n.code,{children:"getReleaseNoteLine"})," 函数实现。"]}),"\n",(0,r.jsxs)(n.h4,{id:"getreleasenoteline",children:["getReleaseNoteLine",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getreleasenoteline",children:"#"})]}),"\n",(0,r.jsxs)(n.h5,{id:"params-1",children:["Params",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params-1",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"commit"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"类型和上述 commitObj 类型一致。"}),"\n",(0,r.jsxs)(n.h5,{id:"返回值-1",children:["返回值",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值-1",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"生成的 Release Note。"}),"\n",(0,r.jsxs)(n.h5,{id:"默认实现-1",children:["默认实现",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认实现-1",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 的默认实现为："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function formatSummary(summary: string, pullRequestId?: string) {\n  const [firstLine, ...futureLines] = summary\n    .split('\\n')\n    .map(l => l.trimRight());\n\n  let returnVal = firstLine;\n\n  if (futureLines.length > 0) {\n    if (pullRequestId) {\n      returnVal = `\\n\\n  ${returnVal}`;\n    } else {\n      returnVal = `\\n  ${returnVal}`;\n    }\n    returnVal += `\\n\\n  ${futureLines\n      .filter(l => Boolean(l))\n      .map(l => l)\n      .join('\\n\\n')}`;\n  }\n  return returnVal;\n}\n\nexport async function getReleaseNoteLine(\n  commit: Commit,\n  customReleaseNoteFunction?: CustomReleaseNoteFunction,\n) {\n  if (customReleaseNoteFunction?.getReleaseNoteLine) {\n    return customReleaseNoteFunction.getReleaseNoteLine(commit);\n  }\n\n  const { repository, pullRequestId, summary } = commit;\n  if (pullRequestId && repository) {\n    return `- [#${pullRequestId}](https://github.com/${repository}/pull/${pullRequestId}) ${formatSummary(\n      summary,\n      pullRequestId,\n    )}\\n`;\n  }\n  if (pullRequestId) {\n    return `#${pullRequestId} ${formatSummary(summary, pullRequestId)}\\n`;\n  }\n  return `${formatSummary(summary, pullRequestId)}\\n`;\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"使用自定义模块",children:["使用自定义模块",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用自定义模块",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gen-release-note"})," 命令支持 ",(0,r.jsx)(n.code,{children:"--custom"})," 参数，该参数可传入自定义 release note 模块的模块名称或者路径。"]}),"\n",(0,r.jsxs)(n.h3,{id:"配置相对路径",children:["配置相对路径",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置相对路径",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["custom 参数值如果为相对路径为",(0,r.jsx)(n.strong,{children:"项目跟目录"}),"。"]}),"\n",(0,r.jsxs)(n.p,{children:["例如创建 ",(0,r.jsx)(n.code,{children:"scripts/my-release-note-config.js"})," 文件，定义如下内容："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="scripts/my-release-note-config.js"',children:"function getReleaseInfo(commit, commitObj) {\n  return commitObj;\n}\n\nfunction getReleaseNoteLine(commit) {}\n\nmodule.exports = {\n  getReleaseInfo,\n  getReleaseNoteLine,\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"执行下面命令："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run gen-release-note -- --custom ./scripts/my-release-note-config.js\n"})}),"\n",(0,r.jsx)(n.p,{children:"也可以把命令参数直接定义到 package.json 中："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "scripts": {\n        ...\n        "gen-release-note": "modern gen-release-note --custom ./scripts/my-release-note-config.js"\n    },\n    ...\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["直接执行命令 ",(0,r.jsx)(n.code,{children:"pnpm run gen-release-note"})," 即可。"]}),"\n",(0,r.jsxs)(n.h3,{id:"使用模块工程方案",children:["使用模块工程方案",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用模块工程方案",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"custom 参数值还可以使用模块工程方案进行管理，提供通用方案。"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"使用 npx @modern-js/create@latest 创建模块工程方案。"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"? 请选择你想创建的工程类型：Npm 模块\n? 请填写项目名称：custom-release-note\n? 请选择开发语言：TS\n? 请选择包管理工具：pnpm\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"实现自定义内容。"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export function getReleaseInfo() {}\n\nexport function getReleaseNoteLine() {}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"将模块发布到 NPM。"}),"\n",(0,r.jsxs)(n.li,{children:["在目标仓库根目录安装对应模块，例如 ",(0,r.jsx)(n.code,{children:"custom-release-note"}),"。"]}),"\n",(0,r.jsx)(n.li,{children:"执行 gen-release-note 命令添加 custom 参数"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run gen-release-note -- --custom custom-release-note\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"使用-monorepo-工程方案",children:["使用 Monorepo 工程方案",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-monorepo-工程方案",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"如果你当前仓库为 Monorepo 工程方案，可以直接使用模块子项目进行管理。"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["执行 ",(0,r.jsx)(n.code,{children:"pnpm run new"})," 创建模块子项目"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"? 请选择你想创建的工程类型：Npm 模块\n? 请填写子项目名称：custom-release-note\n? 请填写子项目目录名称：custom-release-note\n? 请选择开发语言：TS\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"实现自定义内容。"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export function getReleaseInfo() {}\n\nexport function getReleaseNoteLine() {}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["在 Monorepo 根目录添加子项目模块依赖，例如 ",(0,r.jsx)(n.code,{children:"custom-release-note"}),"。"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "devDependencies": {\n    "custom-release-note": "workspace: *",\n    ...\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["执行 ",(0,r.jsx)(n.code,{children:"gen-release-note"})," 命令添加 ",(0,r.jsx)(n.code,{children:"--custom"})," 参数"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run gen-release-note -- --custom custom-release-note\n"})}),"\n",(0,r.jsx)(n.p,{children:"该模块发布到 NPM 后，依然可以和模块类型一样供其他仓库使用。"})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);