(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_hook_onForged_mdx"],{7060:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return a},title:function(){return o},toc:function(){return d},default:function(){return s}});var t=i("9880"),r=i("23169"),a={sidebar_position:1},o="OnForged",d=[{text:"func",depth:2,id:"func"},{text:"api",depth:3,id:"api"},{text:"inputData",depth:3,id:"inputdata"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",h2:"h2",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"onforged",children:["OnForged",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onforged",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"onForged"})," function is the generator plugin time to live function, which is usually used to define file type operations that will be performed after the completion of the base project solution file operation."]}),"\n",(0,t.jsx)(n.p,{children:"The method is available directly on the context."}),"\n",(0,t.jsx)(n.p,{children:"Its type is defined as:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export type PluginForgedFunc = (\n  api: ForgedAPI,\n  inputData: Record<string, unknown>,\n) => void | Promise<void>;\n\nexport interface IPluginContext {\n  onForged: (func: PluginForgedFunc) => void;\n  ...\n}\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"func",children:["func",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#func",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The onForged parameter is a callback function, and the function parameters are ",(0,t.jsx)(n.code,{children:"api"})," and ",(0,t.jsx)(n.code,{children:"inputData"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"api",children:["api",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["A list of supported functions in ",(0,t.jsx)(n.code,{children:"onForged"})," time to live, specifically viewable ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/file/introduce",children:"File API"})," and ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/new/introduce",children:"Enable function API"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"inputdata",children:["inputData",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#inputdata",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Current user input, the user can be used to obtain the current input information and configuration information."})]})}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);