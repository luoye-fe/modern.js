(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_file_addManyFile_mdx"],{66018:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return r},title:function(){return s},toc:function(){return d},default:function(){return h}});var a=t("12151"),i=t("23169"),r={sidebar_position:5},s="addManyFile",d=[{text:"type",depth:2,id:"type"},{text:"destination",depth:2,id:"destination"},{text:"templateFiles",depth:2,id:"templatefiles"},{text:"templateBase",depth:2,id:"templatebase"},{text:"fileNameFunc",depth:2,id:"filenamefunc"},{text:"data",depth:2,id:"data"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",h2:"h2"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"addmanyfile",children:["addManyFile",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addmanyfile",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Import in batches file. Multiple files for adding the ",(0,a.jsx)(n.code,{children:"templates"})," directory."]}),"\n",(0,a.jsx)(n.p,{children:"This method can be used with any file type, for file types other than binary, Handlebars render is performed when files are added."}),"\n",(0,a.jsxs)(n.p,{children:["This method is available on the ",(0,a.jsx)(n.code,{children:"onForged"})," time to live API parameter."]}),"\n",(0,a.jsx)(n.p,{children:"Its type is defined as:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"export interface AddManyFilesParams {\n  type: FileType;\n  destination: string;\n  templateFiles: string[] | (() => string[]);\n  templateBase?: string;\n  fileNameFunc?: (name: string) => string;\n  data?: Record<string, string>; // template data\n}\nexport type ForgedAPI = {\n  addManyFiles: (params: AddManyFilesParams) => Promise<void>;\n  ...\n};\n"})})]})}),"\n",(0,a.jsxs)(n.h2,{id:"type",children:["type",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["File type, specific viewable",(0,a.jsx)(n.a,{href:"/en/guides/topic-detail/generator/plugin/api/file/introduce",children:"File type"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"destination",children:["destination",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#destination",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Create the target folder path. Since it is an import in batches file, fill in the folder path that needs to be written here."}),"\n",(0,a.jsxs)(n.h2,{id:"templatefiles",children:["templateFiles",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#templatefiles",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"List of template files."}),"\n",(0,a.jsxs)(n.p,{children:["This parameter supports the function parameter, as well as ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/globby",target:"_blank",rel:"noopener noreferrer",children:"globby"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"templatebase",children:["templateBase",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#templatebase",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Template base path."}),"\n",(0,a.jsx)(n.p,{children:"The template path is usually the template file in the same directory. If the render result needs to remove the template file prefix directory, this field can be used."}),"\n",(0,a.jsxs)(n.p,{children:["Template render file content will be equal to ",(0,a.jsx)(n.code,{children:"templateFiles - templateBase"})]}),"\n",(0,a.jsxs)(n.h2,{id:"filenamefunc",children:["fileNameFunc",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#filenamefunc",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Rename file function, where the file name of render is passed in once, and can be renamed in this function."}),"\n",(0,a.jsxs)(n.h2,{id:"data",children:["data",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#data",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Handlebars renders data."})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}}}]);