(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_deploy_microFrontend_mdx"],{5734:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return c},toc:function(){return l},default:function(){return d}});var t=r("12151"),i=r("23169"),s={sidebar_label:"microFrontend"},c="deploy.microFrontend",l=[{text:"Example",depth:2,id:"example"},{text:"Configuration",depth:2,id:"configuration"},{text:"enableHtmlEntry",depth:3,id:"enablehtmlentry"},{text:"externalBasicLibrary",depth:3,id:"externalbasiclibrary"}];function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",h2:"h2",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"deploy-microfrontend",children:["deploy.microFrontend",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#deploy-microfrontend",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"{ enableHtmlEntry: true, externalBasicLibrary: false }"})]}),"\n"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface MicroFrontend {\n  enableHtmlEntry?: boolean;\n  externalBasicLibrary?: boolean;\n  moduleApp?: string;\n}\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["Developers can use the ",(0,t.jsx)(n.code,{children:"deploy.microFrontend"})," to configure micro-frontend sub-application information."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive caution",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:['Enable the "Micro Frontend" features through ',(0,t.jsx)(n.code,{children:"pnpm run new"})," first."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  deploy: {\n    microFrontend: {\n      enableHtmlEntry: true,\n    },\n  },\n});\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"enablehtmlentry",children:["enableHtmlEntry",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enablehtmlentry",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to enable the html entry, the default is ",(0,t.jsx)(n.code,{children:"true"}),", the sub-application is built into the ",(0,t.jsx)(n.code,{children:"HTML"})," mode, Garfish supports the ",(0,t.jsx)(n.code,{children:"html"})," entry, you can turn on the open option, experience the corresponding features, and directly point the sub-application entry to the HTML entry when it is the HTML entry. Just point to the html of the sub-application"]}),"\n",(0,t.jsxs)(n.p,{children:["Set it to ",(0,t.jsx)(n.code,{children:"false"})," to indicate that the sub-application is built as ",(0,t.jsx)(n.code,{children:"js"}),". After the sub-application is built as ",(0,t.jsx)(n.code,{children:"js"}),", it cannot run independently. When it is a ",(0,t.jsx)(n.code,{children:"JS"})," entry, point the entry file of the sub-application to the ",(0,t.jsx)(n.code,{children:"JS"})," of the sub-application."]}),"\n",(0,t.jsxs)(n.h3,{id:"externalbasiclibrary",children:["externalBasicLibrary",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#externalbasiclibrary",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Whether the ",(0,t.jsx)(n.code,{children:"external"})," base library, when set to ",(0,t.jsx)(n.code,{children:"true"}),", the current child application will be ",(0,t.jsx)(n.code,{children:"external"}),": ",(0,t.jsx)(n.code,{children:"react"}),", ",(0,t.jsx)(n.code,{children:"react-dom"}),", Modern.js main application will automatically ",(0,t.jsx)(n.code,{children:"setExternal"})," these two base libraries, if other types of frameworks Please add ",(0,t.jsx)(n.code,{children:"react"}),", ",(0,t.jsx)(n.code,{children:"react-dom"})," dependencies through ",(0,t.jsx)(n.code,{children:"Garfish.setExternal"}),"."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}}}]);