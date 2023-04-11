(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_resolve-extension-prefix_mdx"],{13482:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var r=s("12151"),o=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre",h4:"h4"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string | Record<BuilderTarget, string>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Add a prefix to ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolveextensions",target:"_blank",rel:"noopener noreferrer",children:"resolve.extensions"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If multiple files share the same name but have different extensions, Builder will resolve the one with the extension listed first in the array and skip the rest."}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    resolveExtensionPrefix: '.web',\n  },\n};\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"With the configuration above, the extensions array will become:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"// before\nconst extensions = ['.js', '.ts', ...];\n\n// after\nconst extensions = ['.web.js', '.js', '.web.ts' , '.ts', ...];\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"import './foo'"})," in the code, the ",(0,r.jsx)(n.code,{children:"foo.web.js"})," file will be resolved first, then the ",(0,r.jsx)(n.code,{children:"foo.js"})," file."]}),"\n",(0,r.jsxs)(n.h4,{id:"set-according-to-targets",children:["Set according to Targets",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-according-to-targets",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When you build multiple targets at the same time, you can set different extension prefix for different targets. At this point, you need to set ",(0,r.jsx)(n.code,{children:"resolveExtensionPrefix"})," to an object whose key is the corresponding build target."]}),"\n",(0,r.jsxs)(n.p,{children:["For example to set different extension prefix for ",(0,r.jsx)(n.code,{children:"web"})," and ",(0,r.jsx)(n.code,{children:"node"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    source: {\n      resolveExtensionPrefix: {\n        web: '.web',\n        node: '.node',\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"import './foo'"})," in the code, the ",(0,r.jsx)(n.code,{children:"foo.node.js"})," file will be resolved for node target, and the ",(0,r.jsx)(n.code,{children:"foo.web.js"})," file will be resolved for web target."]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},61402:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return c},toc:function(){return d},default:function(){return a}});var r=s("12151"),o=s("23169"),i=s.ir(s("13482")),t={sidebar_label:"resolveExtensionPrefix"},c="source.resolveExtensionPrefix",d=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"source.resolveextensionprefix",children:["source.resolveExtensionPrefix",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source.resolveextensionprefix",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourceresolveextensionprefix",target:"_blank",rel:"noopener noreferrer",children:"source.resolveExtensionPrefix"}),".\n"]})]}),"\n","\n",(0,r.jsx)(i.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);