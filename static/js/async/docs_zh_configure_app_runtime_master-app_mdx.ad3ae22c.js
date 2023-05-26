(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_runtime_master-app_mdx"],{68250:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s=r("9880"),i=r("23169");function a(e){var n=Object.assign({h2:"h2",a:"a",pre:"pre",code:"code",h3:"h3",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"manifest",children:["manifest",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifest",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Manifest {\n  getAppList?: () => Array<AppInfo>;\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"getapplist?",children:["getAppList?",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getapplist?",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"getAppList"})," 配置，可以自定义如何获取远程列表数据"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type GetAppList = () => Promise<Array<AppInfo>>;\n"})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},95955:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return h},default:function(){return p}});var s=r("9880"),i=r("23169"),a=r.ir(r("19511")),t=r.ir(r("68250")),c={sidebar_label:"masterApp"},d="runtime.masterApp",h=[{text:"示例",depth:2,id:"示例"},{text:"apps",depth:3,id:"apps"},{text:"其他配置项",depth:3,id:"其他配置项"}];function l(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",h2:"h2",h3:"h3",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"runtimemasterapp",children:["runtime.masterApp",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimemasterapp",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["需要先通过 ",(0,s.jsx)(n.code,{children:"pnpm run new"})," 启用「微前端」 功能。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n","\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsx)(t.default,{}),"\n",(0,s.jsxs)(n.h3,{id:"apps",children:["apps",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apps",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"apps"})," 为对象类型的时候，表示子应用模块的信息 ",(0,s.jsx)(n.code,{children:"Array<AppInfo>"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface AppInfo {\n  name: string;\n  entry: string;\n  activeWhen?: string | ()=> boolean;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"name: 子应用的名称。"}),"\n",(0,s.jsx)(n.li,{children:"entry: 子应用的入口。"}),"\n",(0,s.jsx)(n.li,{children:"activeWhen?: 子应用激活路径。"}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"其他配置项",children:["其他配置项",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#其他配置项",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["在 ",(0,s.jsx)(n.code,{children:"masterApp"})," 配置下，开发者可以透传 Garfish 的配置项。"]}),"\n",(0,s.jsxs)(n.p,{children:["所有支持的配置项",(0,s.jsx)(n.a,{href:"https://garfishjs.org/api/run/#%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer",children:"点此查看"}),"。"]})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);