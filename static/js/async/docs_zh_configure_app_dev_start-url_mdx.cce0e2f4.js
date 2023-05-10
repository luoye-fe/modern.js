(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_dev_start-url_mdx"],{3797:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s=r("9880"),t=r("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre",h3:"h3",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean | string | string[] | undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dev.startUrl"})," 用于设置 Dev Server 启动时自动在浏览器中打开的页面 URL。"]}),"\n",(0,s.jsx)(n.p,{children:"默认情况下，Dev Server 启动时不会打开任何页面。"}),"\n",(0,s.jsx)(n.p,{children:"你可以设置为如下的值："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    // 打开项目的默认页面，等价于 `http://localhost:<port>`\n    startUrl: true,\n    // 打开指定的页面\n    startUrl: 'http://localhost:8080',\n    // 打开多个页面\n    startUrl: ['http://localhost:8080', 'http://localhost:8080/about'],\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.h3,{id:"端口号占位符",children:["端口号占位符",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#端口号占位符",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["由于端口号可能会发生变动，你可以使用 ",(0,s.jsx)(n.code,{children:"<port>"})," 占位符来指代当前端口号，Builder 会自动将占位符替换为实际监听的端口号。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    startUrl: 'http://localhost:<port>/home',\n  },\n};\n"})})})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},72465:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return c},toc:function(){return l},default:function(){return o}});var s=r("9880"),t=r("23169"),d=r.ir(r("3797")),a={sidebar_label:"startUrl"},c="dev.startUrl",l=[];function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"devstarturl",children:["dev.startUrl",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devstarturl",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-dev.html#devstarturl",target:"_blank",rel:"noopener noreferrer",children:"dev.startUrl"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(d.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);