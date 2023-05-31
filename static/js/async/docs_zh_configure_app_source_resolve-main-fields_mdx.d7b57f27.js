(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_resolve-main-fields_mdx"],{3388:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var s=r("9880"),i=r("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",a:"a",h3:"h3",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Fields = (string | string[])[];\n\ntype ResolveMainFields = Fields | Record<BuilderTarget, Fields>;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["该配置项将决定你使用 ",(0,s.jsx)(n.code,{children:"package.json"})," 哪个字段导入 ",(0,s.jsx)(n.code,{children:"npm"})," 模块。对应 webpack 的 ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvemainfields",target:"_blank",rel:"noopener noreferrer",children:"resolve.mainFields"})," 配置。"]}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    resolveMainFields: ['main', 'browser', 'exports'],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"根据产物类型设置",children:["根据产物类型设置",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#根据产物类型设置",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当你同时构建多种类型的产物时，你可以为不同的产物类型设置不同的 mainFields。此时，你需要把 ",(0,s.jsx)(n.code,{children:"resolveMainFields"})," 设置为一个对象，对象的 key 为对应的产物类型。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如为 ",(0,s.jsx)(n.code,{children:"web"})," 和 ",(0,s.jsx)(n.code,{children:"node"})," 设置不同的 mainFields："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    source: {\n      resolveMainFields: {\n        web: ['main', 'browser', 'exports'],\n        node: ['main', 'node', 'exports'],\n      },\n    },\n  },\n};\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},18767:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return l},title:function(){return o},toc:function(){return c},default:function(){return t}});var s=r("9880"),i=r("23169"),d=r.ir(r("3388")),l={sidebar_label:"resolveMainFields"},o="source.resolveMainFields",c=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourceresolvemainfields",children:["source.resolveMainFields",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceresolvemainfields",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourceresolvemainfields",target:"_blank",rel:"noopener noreferrer",children:"source.resolveMainFields"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(d.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);