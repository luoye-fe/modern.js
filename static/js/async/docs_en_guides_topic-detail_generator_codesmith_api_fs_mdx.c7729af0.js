(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_codesmith_api_fs_mdx"],{78782:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return a},toc:function(){return d},default:function(){return o}});var i=r("9880"),s=r("23169"),t={sidebar_position:3},a="@modern-js/codesmith-api-fs",d=[{text:"Use",depth:2,id:"use"},{text:"API",depth:2,id:"api"},{text:"renderFile",depth:3,id:"renderfile"},{text:"renderDir",depth:3,id:"renderdir"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"@modern-js/codesmith-api-fs",children:["@modern-js/codesmith-api-fs",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#@modern-js/codesmith-api-fs",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"API wrapper for file operations in microgenerators, providing methods to render individual template files and folders. FsAPI is usually used to handle binaries or template files that cannot be handled with handlebars, ejs."}),"\n",(0,i.jsxs)(n.h2,{id:"use",children:["Use",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use",children:"#"})]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { FsAPI } from '@modern-js/codesmith-api-fs';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const fsApi = new FsAPI(generator);\n  await fsApi.renderFile(\n     material.get('templates/a.js'),\n     target: 'b.js'\n   );\n}\n"})})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create FsAPI instance, the parameter is the generator of the microgenerator function parameter, please see the composition of the microgenerator project for details."}),"\n",(0,i.jsx)(n.li,{children:"Just call the API on its example."}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"api",children:["API",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"renderfile",children:["renderFile",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#renderfile",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Render a single template file."}),"\n",(0,i.jsx)(n.p,{children:"Parameter:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["resource: ",(0,i.jsx)(n.code,{children:"FsResource"}),". Template file resource, used by ",(0,i.jsx)(n.code,{children:"context.materials.get(<filename>)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["target: ",(0,i.jsx)(n.code,{children:"string"}),". Target file path name."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"renderdir",children:["renderDir",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#renderdir",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Render template folder."}),"\n",(0,i.jsx)(n.p,{children:"Parameter:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["material: ",(0,i.jsx)(n.code,{children:"FsMaterial"}),". The material context of the current microgenerator execution."]}),"\n",(0,i.jsxs)(n.li,{children:["findGlob: ",(0,i.jsx)(n.code,{children:"string"}),". Template file matches the regular."]}),"\n",(0,i.jsxs)(n.li,{children:["target: ",(0,i.jsx)(n.code,{children:"(globMatch: string) => string"}),". The target file path generation function, the parameter is ",(0,i.jsx)(n.code,{children:"resourceKey."})]}),"\n",(0,i.jsxs)(n.li,{children:["options?: ",(0,i.jsx)(n.code,{children:"RenderTemplateDirOptions"}),". Glob Find the file configuration, the specific function viewable is here [glob] (",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/glob",target:"_blank",rel:"noopener noreferrer",children:"https://www.npmjs.com/package/glob"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"type RenderTemplateDirOptions = {\n  nodir?: boolean;\n  dot?: boolean;\n  ignore?: string | readonly string[];\n};\n"})})})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);