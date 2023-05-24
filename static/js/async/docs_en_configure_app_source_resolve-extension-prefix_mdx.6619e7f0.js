(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_resolve-extension-prefix_mdx"],{29399:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s=r("9880"),i=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string | Record<BuilderTarget, string>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Add a prefix to ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolveextensions",target:"_blank",rel:"noopener noreferrer",children:"resolve.extensions"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If multiple files share the same name but have different extensions, Builder will resolve the one with the extension listed first in the array and skip the rest."}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    resolveExtensionPrefix: '.web',\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"With the configuration above, the extensions array will become:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// before\nconst extensions = ['.js', '.ts', ...];\n\n// after\nconst extensions = ['.web.js', '.js', '.web.ts' , '.ts', ...];\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"import './foo'"})," in the code, the ",(0,s.jsx)(n.code,{children:"foo.web.js"})," file will be resolved first, then the ",(0,s.jsx)(n.code,{children:"foo.js"})," file."]}),"\n",(0,s.jsxs)(n.h4,{id:"set-according-to-targets",children:["Set according to Targets",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-according-to-targets",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When you build multiple targets at the same time, you can set different extension prefix for different targets. At this point, you need to set ",(0,s.jsx)(n.code,{children:"resolveExtensionPrefix"})," to an object whose key is the corresponding build target."]}),"\n",(0,s.jsxs)(n.p,{children:["For example to set different extension prefix for ",(0,s.jsx)(n.code,{children:"web"})," and ",(0,s.jsx)(n.code,{children:"node"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    source: {\n      resolveExtensionPrefix: {\n        web: '.web',\n        node: '.node',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"import './foo'"})," in the code, the ",(0,s.jsx)(n.code,{children:"foo.node.js"})," file will be resolved for node target, and the ",(0,s.jsx)(n.code,{children:"foo.web.js"})," file will be resolved for web target."]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},42189:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return d},toc:function(){return c},default:function(){return a}});var s=r("9880"),i=r("23169"),o=r.ir(r("29399")),t={sidebar_label:"resolveExtensionPrefix"},d="source.resolveExtensionPrefix",c=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourceresolveextensionprefix",children:["source.resolveExtensionPrefix",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceresolveextensionprefix",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourceresolveextensionprefix",target:"_blank",rel:"noopener noreferrer",children:"source.resolveExtensionPrefix"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(o.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);