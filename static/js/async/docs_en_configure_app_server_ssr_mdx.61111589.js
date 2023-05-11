(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_server_ssr_mdx"],{16686:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return l},default:function(){return o}});var s=r("9880"),i=r("23169"),d={sidebar_label:"ssr"},c="server.ssr",l=[{text:"Boolean Type",depth:3,id:"boolean-type"},{text:"Object Type",depth:3,id:"object-type"}];function t(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",div:"div",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"serverssr",children:["server.ssr",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverssr",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Enalbe SSR configuration."}),"\n",(0,s.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When the value type is ",(0,s.jsx)(n.code,{children:"boolean"}),", it indicates whether to enable SSR deployment mode, and ",(0,s.jsx)(n.code,{children:"false"})," is not enabled by default."]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: true,\n  },\n});\n"})})})]}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When the value type is ",(0,s.jsx)(n.code,{children:"Object"}),", The following properties can be configured:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mode"}),": ",(0,s.jsx)(n.code,{children:"string = 'string'"}),", use ",(0,s.jsx)(n.code,{children:"renderToString"})," rendering default. onfigure 'stream' to enable streaming rendering."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"forceCSR"}),": ",(0,s.jsx)(n.code,{children:"boolean = false"}),", forced CSR rendering is disable by default. When configured as ",(0,s.jsx)(n.code,{children:"true"}),", add ",(0,s.jsx)(n.code,{children:"?csr=true"})," in URL to force CSR."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inlineScript"}),"：",(0,s.jsx)(n.code,{children:"boolean = true"}),", by default SSR data will be injected into HTML as inline scripts and directly assigned to global variables. Configure as ",(0,s.jsx)(n.code,{children:"false"})," to inject JSON instead of directly assigning."]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    forceCSR: true,\n    mode: 'stream',\n    inlineScript: false,\n  },\n});\n"})})})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);