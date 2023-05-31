(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_afterForged_md"],{22516:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});!function(e,i){for(var n in i)Object.defineProperty(e,n,{enumerable:!0,get:i[n]})}(i,{frontmatter:function(){return d},title:function(){return s},toc:function(){return a},default:function(){return c}});var r=n("9880"),t=n("23169"),d={sidebar_position:3},s="afterForged",a=[{text:"Types",depth:2,id:"types"},{text:"API",depth:2,id:"api"},{text:"isInGitRepo",depth:3,id:"isingitrepo"},{text:"initGitRepo",depth:3,id:"initgitrepo"},{text:"gitAddAndCommit",depth:3,id:"gitaddandcommit"},{text:"install",depth:3,id:"install"}];function o(e){var i=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.h1,{id:"afterforged",children:["afterForged",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#afterforged",children:"#"})]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"afterForged"})," is a lifecycle function used for other step operations after file operations in generator plugin."]}),"\n",(0,r.jsxs)(i.h2,{id:"types",children:["Types",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#types",children:"#"})]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-ts",children:"export type AfterForgedAPI = {\n  isInGitRepo: () => Promise<boolean>;\n  initGitRepo: () => Promise<void>;\n  gitAddAndCommit: (commitMessage: string) => Promise<void>;\n  install: () => Promise<void>;\n};\n\nexport type PluginAfterForgedFunc = (api: AfterForgedAPI, inputData: Record<string, unknown>) => Promise<void>;\n\nexport interface IPluginContext {\n   afterForged: (func: PluginAfterForgedFunc) => void;\n  ...\n}\n"})}),"\n",(0,r.jsxs)(i.h2,{id:"api",children:["API",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,r.jsxs)(i.p,{children:["The APIs provided by the ",(0,r.jsx)(i.code,{children:"api"})," parameter will be introduced below."]}),"\n",(0,r.jsxs)(i.h3,{id:"isingitrepo",children:["isInGitRepo",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#isingitrepo",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"Checks whether the current project is a git repository."}),"\n",(0,r.jsxs)(i.h3,{id:"initgitrepo",children:["initGitRepo",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#initgitrepo",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"Initializes the current project as a git repository."}),"\n",(0,r.jsxs)(i.h3,{id:"gitaddandcommit",children:["gitAddAndCommit",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#gitaddandcommit",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"Commits changes to the current repository."}),"\n",(0,r.jsx)(i.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"commitMessage"}),": commit message."]}),"\n"]}),"\n",(0,r.jsxs)(i.h3,{id:"install",children:["install",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,r.jsxs)(i.p,{children:["Installs dependencies in the root directory of the project. The ",(0,r.jsx)(i.code,{children:"install"})," function will use the corresponding package management tool according to the value of ",(0,r.jsx)(i.code,{children:"packageManager"})," to install dependencies."]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return i?(0,r.jsx)(i,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);