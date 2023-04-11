(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_inspector_mdx"],{7787:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("12151"),t=s("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bundler:"})," ",(0,r.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can enable or configure the ",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"})," through ",(0,r.jsx)(n.code,{children:"tools.inspector"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When the configuration is not ",(0,r.jsx)(n.code,{children:"undefined"}),", it means that ",(0,r.jsx)(n.code,{children:"webpack-inspector"})," is enabled, and the type of ",(0,r.jsx)(n.code,{children:"tools.inspector"})," can be ",(0,r.jsx)(n.code,{children:"Object"})," or ",(0,r.jsx)(n.code,{children:"Function"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"tools.inspector"})," is configured with type ",(0,r.jsx)(n.code,{children:"Object"}),", it is merged with the default configuration via Object.assign. For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    inspector: {\n      // The default port is 3333\n      port: 3334,\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"tools.inspector"})," is a Function, the default configuration is passed as the first parameter and can be directly modified or returned as the final result. For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    inspector(config) {\n      config.port = 3334;\n    },\n  },\n};\n"})})]})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},21536:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return d},default:function(){return l}});var r=s("12151"),t=s("23169"),o=s.ir(s("7787")),c={sidebar_label:"inspector"},i="tools.inspector",d=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"tools.inspector",children:["tools.inspector",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools.inspector",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolsinspector",target:"_blank",rel:"noopener noreferrer",children:"tools.inspector"}),".\n"]})]}),"\n","\n",(0,r.jsx)(o.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);