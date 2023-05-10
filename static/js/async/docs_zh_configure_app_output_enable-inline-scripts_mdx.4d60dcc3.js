(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_enable-inline-scripts_mdx"],{70742:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var i=s("9880"),c=s("23169");function r(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",h3:"h3",button:"button",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"boolean | RegExp"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"打包工具："})," ",(0,i.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["用来控制生产环境中是否用 ",(0,i.jsx)(n.code,{children:"<script>"})," 标签将产物中的 script 文件（.js 文件）inline 到 HTML 中。"]}),"\n",(0,i.jsx)(n.p,{children:"注意，如果开启了这个选项，那么 script 文件将不会被写入产物目录中，而只会以 inline 脚本的形式存在于 HTML 文件中。"}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["当使用约定式路由时，如果开启了这个选项，需要将 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/configure/app/output/splitRouteChunks.html",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.code,{children:"output.splitRouteChunks"})})," 设置为 false。\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"示例",children:["示例",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"默认情况下，我们有这样的产物文件："}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\ndist/static/js/main.js\n"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["开启 ",(0,i.jsx)(n.code,{children:"output.enableInlineScripts"})," 选项后："]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineScripts: true,\n  },\n};\n"})})]})}),"\n",(0,i.jsx)(n.p,{children:"产物文件将变成："}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\n"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["同时，",(0,i.jsx)(n.code,{children:"dist/static/js/main.js"})," 文件将被 inline 到 ",(0,i.jsx)(n.code,{children:"index.html"})," 中："]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-html",children:"<html>\n  <body>\n    <script>\n      // content of dist/static/js/main.js\n    </script>\n  </body>\n</html>\n"})})]})}),"\n",(0,i.jsxs)(n.h3,{id:"通过正则匹配",children:["通过正则匹配",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过正则匹配",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["当你需要内联产物中的一部分 JS 文件时，你可以将 ",(0,i.jsx)(n.code,{children:"enableInlineScripts"})," 设置为一个正则表达式，匹配需要内联的 JS 文件的 URL。"]}),"\n",(0,i.jsxs)(n.p,{children:["比如，将产物中的 ",(0,i.jsx)(n.code,{children:"main.js"})," 内联到 HTML 中，你可以添加如下配置："]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineScripts: /\\/main\\.\\w+\\.js$/,\n  },\n};\n"})})]})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["生产环境的文件名中默认包含了一个 hash 值，比如 ",(0,i.jsx)(n.code,{children:"/main.18a568e5.js"}),"。\n"]})})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(r,e)})):r(e)}},45984:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return l},toc:function(){return d},default:function(){return o}});var i=s("9880"),c=s("23169"),r=s.ir(s("70742")),t={sidebar_label:"enableInlineScripts"},l="output.enableInlineScripts",d=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"output-enableinlinescripts",children:["output.enableInlineScripts",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output-enableinlinescripts",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputenableinlinescripts",target:"_blank",rel:"noopener noreferrer",children:"output.enableInlineScripts"}),"。\n"]})})]}),"\n","\n",(0,i.jsx)(r.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);