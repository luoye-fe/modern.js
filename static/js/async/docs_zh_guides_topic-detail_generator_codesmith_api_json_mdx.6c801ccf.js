(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_api_json_mdx"],{68747:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return i},toc:function(){return a},default:function(){return o}});var s=r("9880"),d=r("23169"),t={sidebar_position:2},i="@modern-js/codesmith-api-json",a=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"API",depth:2,id:"api"},{text:"get",depth:3,id:"get"},{text:"extend",depth:3,id:"extend"},{text:"update",depth:3,id:"update"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"@modern-js/codesmith-api-json",children:["@modern-js/codesmith-api-json",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#@modern-js/codesmith-api-json",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"微生成器中 JSON API 封装，提供常见的 JSON 文件操作方法。"}),"\n",(0,s.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { JsonAPI } from '@modern-js/codesmith-api-json';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const jsonAPI = new JsonAPI(generator);\n  await jsonAPI.update(context.materials.default.get('package.json'), {\n    query: {},\n    update: {\n      $set: {\n        'dependencies.@modern-js/plugin-bff': `^2.0.0`,\n      },\n    },\n  });\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["创建 JsonAPI 实例，参数为微生成器函数参数的 generator，具体介绍请看",(0,s.jsx)(n.a,{href:"/guides/topic-detail/generator/codesmith/structure",children:"微生成器项目组成"}),"。"]}),"\n",(0,s.jsx)(n.li,{children:"调用其实例上 API 即可。"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"api",children:["API",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"get",children:["get",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#get",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"获取 JSON 文件内容。"}),"\n",(0,s.jsx)(n.p,{children:"参数："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["resource: ",(0,s.jsx)(n.code,{children:"FsResource"}),"，文件资源，通过 ",(0,s.jsx)(n.code,{children:"context.materials.default.get(<filename>)"})," 获取。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"extend",children:["extend",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extend",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"合并对象至 JSON 文件。"}),"\n",(0,s.jsx)(n.p,{children:"参数："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["resource: ",(0,s.jsx)(n.code,{children:"FsResource"})," 通过 ",(0,s.jsx)(n.code,{children:"context.materials.default.get(<filename>)"})," 获取。"]}),"\n",(0,s.jsxs)(n.li,{children:["obj: ",(0,s.jsx)(n.code,{children:"Record<string, any>"})," 需合并对象。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"update",children:["update",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#update",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"更新对象字段至 JSON 文件。"}),"\n",(0,s.jsx)(n.p,{children:"参数："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["resource: ",(0,s.jsx)(n.code,{children:"FsResource"})," 通过 ",(0,s.jsx)(n.code,{children:"context.materials.default.get(<filename>)"})," 获取。"]}),"\n",(0,s.jsxs)(n.li,{children:["operation: ",(0,s.jsx)(n.code,{children:"{ query: Record<string, any>; update: Record<string, any> }"})," 更新操作，详细使用姿势查看 ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/declaration-update",target:"_blank",rel:"noopener noreferrer",children:"declaration-update"}),"。"]}),"\n"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);