(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_css-module-local-ident-name_mdx"],{87015:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=s("9880"),r=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3",a:"a",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// isProd indicates that the production build\nconst localIdentName = isProd\n  ? '[hash:base64:5]'\n  : '[path][name]__[local]--[hash:base64:5]';\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the format of the className generated by CSS Modules after compilation."}),"\n",(0,t.jsxs)(n.h3,{id:"default-value",children:["Default Value",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-value",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"cssModuleLocalIdentName"})," has different default values in development and production."]}),"\n",(0,t.jsx)(n.p,{children:"In a production, Builder will generate shorter class names to reduce the bundle size."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import styles from './index.module.scss';\n\n// In development, the value is `.src-index-module__header--xxxxx`\n// In production, the value is `.xxxxx`\nconsole.log(styles.header);\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"template-string",children:["Template String",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#template-string",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can use the following template strings in ",(0,t.jsx)(n.code,{children:"cssModuleLocalIdentName"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[name]"})," - the basename of the asset."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[local]"})," - original class."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[hash]"})," - the hash of the string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[folder]"})," - the folder relative path."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[path]"})," - the relative path."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[file]"})," - filename and path."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[ext]"})," - extension with leading dot."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[hash:<hashDigest>:<hashDigestLength>]"}),": hash with hash settings."]}),"\n"]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["When using Rspack as the bundler, currently does not support custom ",(0,t.jsx)(n.code,{children:"<hashDigest>"}),".\n"]})})]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"cssModuleLocalIdentName"})," to other value:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModuleLocalIdentName: '[hash:base64:4]',\n  },\n};\n"})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},42654:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return l},toc:function(){return a},default:function(){return o}});var t=s("9880"),r=s("23169"),d=s.ir(s("87015")),i={sidebar_label:"cssModuleLocalIdentName"},l="output.cssModuleLocalIdentName",a=[];function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"outputcssmodulelocalidentname",children:["output.cssModuleLocalIdentName",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputcssmodulelocalidentname",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputcssmodulelocalidentname",target:"_blank",rel:"noopener noreferrer",children:"output.cssModuleLocalIdentName"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(d.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);