(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_file_updateTextRawFile_mdx"],{318:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return s},default:function(){return l}});var t=r("9880"),i=r("23169"),a={sidebar_position:7},d="updateTextRawFile",s=[{text:"fileName",depth:2,id:"filename"},{text:"update",depth:2,id:"update"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"updatetextrawfile",children:["updateTextRawFile",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatetextrawfile",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"更新文本列表文件内容。"}),"\n",(0,t.jsx)(n.p,{children:"该方法适用与文本列表文件类型。"}),"\n",(0,t.jsxs)(n.p,{children:["该方法可在 ",(0,t.jsx)(n.code,{children:"onForged"})," 生命周期的 api 参数上获取。"]}),"\n",(0,t.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export type ForgedAPI = {\nupdateTextRawFile: (\n    fileName: string,\n    update: (content: string[]) => string[],\n  ) => Promise<void>;\n  ...\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"filename",children:["fileName",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#filename",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"文本列表文件的文件名或者文件路径。"}),"\n",(0,t.jsxs)(n.h2,{id:"update",children:["update",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#update",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"更新函数。"}),"\n",(0,t.jsx)(n.p,{children:"该函数参数为当前文件内容，内容将以 '\\n' 分割，以数组的形式传入函数，函数的返回值也是数组，内部将自动以 '\\n' 合并，写入源文件。"})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);