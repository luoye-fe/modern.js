(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_file_addPartial_mdx"],{24624:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return i},title:function(){return s},toc:function(){return d},default:function(){return l}});var a=n("9880"),t=n("23169"),i={sidebar_position:3},s="addPartial",d=[{text:"name",depth:2,id:"name"},{text:"str",depth:2,id:"str"}];function c(e){var r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.h1,{id:"addpartial",children:["addPartial",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#addpartial",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:["针对于文本类型文件，增加 Handlebars 的自定义 Partial 片段，具体可查看文档",(0,a.jsx)(r.a,{href:"https://handlebarsjs.com/guide/#partials",target:"_blank",rel:"noopener noreferrer",children:"Partials"}),"。"]}),"\n",(0,a.jsxs)(r.p,{children:["该方法可在 ",(0,a.jsx)(r.code,{children:"onForged"})," 生命周期的 api 参数上获取。"]}),"\n",(0,a.jsx)(r.p,{children:"其类型定义为："}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"export type ForgedAPI = {\n  addPartial: (name: string, str: Handlebars.Template) => void;\n  ...\n};\n"})}),"\n",(0,a.jsxs)(r.h2,{id:"name",children:["name",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"})]}),"\n",(0,a.jsx)(r.p,{children:"partial 名称。"}),"\n",(0,a.jsxs)(r.h2,{id:"str",children:["str",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#str",children:"#"})]}),"\n",(0,a.jsx)(r.p,{children:"partial 模板字符串。"})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return r?(0,a.jsx)(r,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}}}]);