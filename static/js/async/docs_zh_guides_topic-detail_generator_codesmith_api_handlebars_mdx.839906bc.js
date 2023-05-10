(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_api_handlebars_mdx"],{34507:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return t},toc:function(){return i},default:function(){return c}});var a=r("9880"),s=r("23169"),d={sidebar_position:5},t="@modern-js/codesmith-api-handlebars",i=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"API",depth:2,id:"api"},{text:"renderTemplate",depth:3,id:"rendertemplate"},{text:"renderTemplateDir",depth:3,id:"rendertemplatedir"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"@modern-js/codesmith-api-handlebars",children:["@modern-js/codesmith-api-handlebars",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#@modern-js/codesmith-api-handlebars",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["微生成器中使用 ",(0,a.jsx)(n.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"handlebars"})," 进行文件操作的 API 封装，提供渲染单个模板文件和文件夹的方法。"]}),"\n",(0,a.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { HandlebarsAPI } from '@modern-js/codesmith-api-handlebars';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const handlebarApi = new HandlebarsAPI(generator);\n  await handlebarsAPI.renderTemplate(\n     material.get('templates/a.js'),\n     target: 'b.js',\n     { data: \"data\" }\n   );\n}\n"})})]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"创建 HandlebarsAPI 实例，参数为微生成器函数参数的 generator，具体介绍请看微生成器项目组成 。"}),"\n",(0,a.jsx)(n.li,{children:"调用其实例上 API 即可。"}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"api",children:["API",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"rendertemplate",children:["renderTemplate",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rendertemplate",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"渲染单个模板文件。"}),"\n",(0,a.jsx)(n.p,{children:"参数："}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["templateResource: ",(0,a.jsx)(n.code,{children:"FsResource"})," 模板文件资源，通过 ",(0,a.jsx)(n.code,{children:"context.materials.get(<filename>)"})," 使用。"]}),"\n",(0,a.jsxs)(n.li,{children:["target: ",(0,a.jsx)(n.code,{children:"string"})," 目标文件路径名称。"]}),"\n",(0,a.jsxs)(n.li,{children:["parameters?: ",(0,a.jsx)(n.code,{children:"Record<string, string>"})," 渲染参数。"]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"rendertemplatedir",children:["renderTemplateDir",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rendertemplatedir",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"渲染模板文件夹。"}),"\n",(0,a.jsx)(n.p,{children:"参数："}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["material: ",(0,a.jsx)(n.code,{children:"FsMaterial"})," 当前微生成器执行的 material 上下文。"]}),"\n",(0,a.jsxs)(n.li,{children:["findGlob: ",(0,a.jsx)(n.code,{children:"string"})," 模板文件匹配正则。"]}),"\n",(0,a.jsxs)(n.li,{children:["target: ",(0,a.jsx)(n.code,{children:"(globMatch: string) => string"})," 目标文件路径生成函数，参数为 ",(0,a.jsx)(n.code,{children:"resourceKey。"})]}),"\n",(0,a.jsxs)(n.li,{children:["options?: ",(0,a.jsx)(n.code,{children:"RenderTemplateDirOptions"})," glob 查找文件配置，具体函数可查看这里 ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/glob",target:"_blank",rel:"noopener noreferrer",children:"glob"}),"。"]}),"\n"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"type RenderTemplateDirOptions = {\n  nodir?: boolean;\n  dot?: boolean;\n  ignore?: string | readonly string[];\n};\n"})})]})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}}}]);