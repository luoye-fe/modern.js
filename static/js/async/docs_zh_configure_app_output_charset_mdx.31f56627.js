(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_charset_mdx"],{18068:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=r("9880"),s=r("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"类型："})," ",(0,t.jsx)(n.code,{children:"'ascii' | 'utf8'"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"默认值："})," ",(0,t.jsx)(n.code,{children:"'ascii'"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"默认情况下，Builder 的产物内容是纯 ASCII 的，并且会转义所有非 ASCII 字符。"}),"\n",(0,t.jsxs)(n.p,{children:["如果不希望进行转义，而是输出所有原始字符，可以将 ",(0,t.jsx)(n.code,{children:"output.charset"})," 设置为 ",(0,t.jsx)(n.code,{children:"utf8"}),"。"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    charset: 'utf8',\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["当 ",(0,t.jsx)(n.code,{children:"output.charset"})," 为 ",(0,t.jsx)(n.code,{children:"utf8"})," 时，Builder 会自动将 ",(0,t.jsx)(n.code,{children:'<meta charset="utf-8">'})," 添加到生成的 HTML 文件中。"]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},35859:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return d},default:function(){return a}});var t=r("9880"),s=r("23169"),c=r.ir(r("18068")),i={sidebar_label:"charset"},o="output.charset",d=[];function u(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"outputcharset",children:["output.charset",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputcharset",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputcharset",target:"_blank",rel:"noopener noreferrer",children:"output.charset"}),"。\n"]})})]}),"\n","\n",(0,t.jsx)(c.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}}}]);