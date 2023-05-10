(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_server_routes_mdx"],{60171:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return c},default:function(){return d}});var r=s("9880"),t=s("23169"),a={sidebar_label:"routes"},i="server.routes",c=[{text:"Custom access routing",depth:2,id:"custom-access-routing"},{text:"Custom response header",depth:2,id:"custom-response-header"}];function o(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",div:"div",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"serverroutes",children:["server.routes",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverroutes",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," Automatic generation of server-level routing rules based on file conventions: One routing rule is generated per file of the application,and the default route is the same as the entry name."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This configuration option only applies to server-level routing, and can customize the service access configuration of the application entry."}),"\n",(0,r.jsxs)(n.h2,{id:"custom-access-routing",children:["Custom access routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-access-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"key"})," of the object is the entry name of the current application, and the value can be ",(0,r.jsx)(n.code,{children:"string | Array<string>"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When the value type is ",(0,r.jsx)(n.code,{children:"string"}),", the current value represents the name of the route to access the entry."]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    routes: {\n      // The default route is /entryName1, /p/test1 after customization\n      entryName1: '/p/test1'\n      // Support dynamic server-level routing configuration\n      entryName2: '/detail/:id'\n    }\n  }\n});\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Multiple access routes can also be set for entries using the ",(0,r.jsx)(n.code,{children:"Array<string>"}),":"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    routes: {\n      'page-a': [`/a`, '/b'],\n    },\n  },\n});\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["At this point, the '",(0,r.jsx)(n.code,{children:"page-a"})," entry can be accessed through both ",(0,r.jsx)(n.code,{children:"/a"})," and ",(0,r.jsx)(n.code,{children:"/b"})," routes."]}),"\n",(0,r.jsxs)(n.p,{children:["After executing the ",(0,r.jsx)(n.code,{children:"dev"})," command, you can see in ",(0,r.jsx)(n.code,{children:"dist/route.json"})," that there are two routing records in the entry ",(0,r.jsx)(n.code,{children:"page-a"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "routes": [\n    {\n      "urlPath": "/a",\n      "entryName": "page-a",\n      "entryPath": "html/page-a/index.html",\n      "isSPA": true,\n      "isSSR": false\n    },\n    {\n      "urlPath": "/b",\n      "entryName": "page-a",\n      "entryPath": "html/page-a/index.html",\n      "isSPA": true,\n      "isSSR": false\n    }\n  ]\n}\n'})})})}),"\n",(0,r.jsxs)(n.h2,{id:"custom-response-header",children:["Custom response header",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-response-header",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The response header can be set by configuring the resHeaders of the entry:"}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    routes: {\n      'page-a': {\n        route: ['/a', '/b'],\n        resHeaders: {\n          'x-modern-test': '1',\n        },\n      },\n    },\n  },\n});\n"})})})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["This configuration takes effect in both the production environment and the development environment, and can set different response headers according to the NODE_ENV. But if you only need to set response headers in the development environment, ",(0,r.jsx)(n.code,{children:"tools.devServer.headers"})," is recommended."]}),"\n"]})]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);