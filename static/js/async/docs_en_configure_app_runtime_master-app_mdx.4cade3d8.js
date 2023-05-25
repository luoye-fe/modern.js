(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_runtime_master-app_mdx"],{10687:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s=r("9880"),i=r("23169");function t(e){var n=Object.assign({h2:"h2",a:"a",pre:"pre",code:"code",h3:"h3",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"manifest",children:["manifest",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifest",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Manifest {\n  getAppList?: () => Array<AppInfo>;\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"getapplist?",children:["getAppList?",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getapplist?",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Through the ",(0,s.jsx)(n.code,{children:"getAppList"})," configuration, you can customize how to get remote list data"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type GetAppList = () => Promise<Array<AppInfo>>;\n"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}},34488:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return o},default:function(){return p}});var s=r("9880"),i=r("23169"),t=r.ir(r("2327")),a=r.ir(r("10687")),c={sidebar_label:"masterApp"},d="runtime.masterApp",o=[{text:"Example",depth:2,id:"example"},{text:"apps",depth:3,id:"apps"},{text:"Other Config",depth:3,id:"other-config"}];function h(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",h2:"h2",h3:"h3",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"runtimemasterapp",children:["runtime.masterApp",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimemasterapp",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:['First you need to enable the "micro frontend" function using ',(0,s.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new command"}),".\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n","\n",(0,s.jsx)(t.default,{}),"\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsxs)(n.h3,{id:"apps",children:["apps",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apps",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"apps"})," is an object, it represents the information of the child application module ",(0,s.jsx)(n.code,{children:"Array<AppInfo>"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface AppInfo {\n  name: string;\n  entry: string;\n  activeWhen?: string | ()=> boolean;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"name: The name of the module."}),"\n",(0,s.jsx)(n.li,{children:"entry: The entry of the module."}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"other-config",children:["Other Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#other-config",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Under the ",(0,s.jsx)(n.code,{children:"masterApp"})," configuration, developers can pass through the configuration items of Garfish."]}),"\n",(0,s.jsxs)(n.p,{children:["All supported configuration items ",(0,s.jsx)(n.a,{href:"https://garfishjs.org/api/run/#%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer",children:"see here"}),"."]})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}}}]);