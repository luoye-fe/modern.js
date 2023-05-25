(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_dev_asset-prefix_mdx"],{8588:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("9880"),i=s("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h4:"h4",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean | string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"'/'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["设置开发环境下的静态资源 URL 前缀，对应 webpack 的 ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," 配置。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"assetPrefix"})," 会影响构建产物中绝大部分静态资源的 URL，包括 JavaScript 文件、CSS 文件、图片、视频等。如果指定了一个错误的值，则在加载这些资源时可能会出现 404 错误。"]}),"\n",(0,r.jsxs)(n.p,{children:["该配置项仅用于开发环境。在生产环境下，请使用 ",(0,r.jsx)(n.code,{children:"output.assetPrefix"})," 配置项进行设置。"]}),"\n",(0,r.jsxs)(n.h4,{id:"boolean-类型",children:["Boolean 类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-类型",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["如果设置 ",(0,r.jsx)(n.code,{children:"assetPrefix"})," 为 ",(0,r.jsx)(n.code,{children:"true"}),"，Builder 会使用 ",(0,r.jsx)(n.code,{children:"http://localhost:port/"})," 作为 URL 前缀："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: true,\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"对应 JS 文件在浏览器中加载的地址如下："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<script defer src="http://localhost:8080/static/js/main.js"></script>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["如果设置 ",(0,r.jsx)(n.code,{children:"assetPrefix"})," 为 ",(0,r.jsx)(n.code,{children:"false"})," 或不设置，则默认使用 ",(0,r.jsx)(n.code,{children:"/"})," 作为访问前缀。"]}),"\n",(0,r.jsxs)(n.h4,{id:"string-类型",children:["String 类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string-类型",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["当 ",(0,r.jsx)(n.code,{children:"assetPrefix"})," 的值为 ",(0,r.jsx)(n.code,{children:"string"})," 类型时，字符串会作为前缀，自动拼接到静态资源访问 URL 上："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: 'http://example.com/assets/',\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"对应 JS 文件在浏览器中加载的地址如下："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<script defer src="http://example.com/assets/static/js/main.js"></script>\n'})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}},24827:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return a},default:function(){return o}});var r=s("9880"),i=s("23169"),t=s.ir(s("8588")),c={sidebar_label:"assetPrefix"},d="dev.assetPrefix",a=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"devassetprefix",children:["dev.assetPrefix",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devassetprefix",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-dev.html#devassetprefix",target:"_blank",rel:"noopener noreferrer",children:"dev.assetPrefix"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(t.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);