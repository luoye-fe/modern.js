(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_file_updateTextRawFile_mdx"],{51724:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return s},default:function(){return o}});var i=t("9880"),r=t("23169"),a={sidebar_position:7},d="updateTextRawFile",s=[{text:"fileName",depth:2,id:"filename"},{text:"update",depth:2,id:"update"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"updatetextrawfile",children:["updateTextRawFile",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatetextrawfile",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Update the text list file content."}),"\n",(0,i.jsx)(n.p,{children:"This method works with the text list file type."}),"\n",(0,i.jsxs)(n.p,{children:["This method is available on the ",(0,i.jsx)(n.code,{children:"onForged"})," time to live API parameter."]}),"\n",(0,i.jsx)(n.p,{children:"Its type is defined as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export type ForgedAPI = {\nupdateTextRawFile: (\n    fileName: string,\n    update: (content: string[]) => string[],\n  ) => Promise<void>;\n  ...\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"filename",children:["fileName",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#filename",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The filename or file path of the text list file."}),"\n",(0,i.jsxs)(n.h2,{id:"update",children:["update",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#update",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Update function."}),"\n",(0,i.jsxs)(n.p,{children:["The function parameter is the current file content. The content will be divided by ",(0,i.jsx)(n.code,{children:"\\n"})," and passed into function in the form of array. The return value of function is also array. The internal will be automatically merged with ",(0,i.jsx)(n.code,{children:"\\n"})," and written to the source file."]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);