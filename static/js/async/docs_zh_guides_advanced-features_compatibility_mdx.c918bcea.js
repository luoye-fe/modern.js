(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_compatibility_mdx"],{50555:function(e,l,s){"use strict";Object.defineProperty(l,"__esModule",{value:!0});!function(e,l){for(var s in l)Object.defineProperty(e,s,{enumerable:!0,get:l[s]})}(l,{frontmatter:function(){return i},title:function(){return o},toc:function(){return d},default:function(){return t}});var r=s("9880"),n=s("23169"),i={title:"客户端兼容性",sidebar_position:5},o="客户端兼容性",d=[{text:"Browserslist 配置",depth:2,id:"browserslist-配置"},{text:"Polyfill",depth:2,id:"polyfill"},{text:"编译时 Polyfill",depth:3,id:"编译时-polyfill"},{text:"运行时按需 Polyfill",depth:3,id:"运行时按需-polyfill"}];function c(e){var l=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",button:"button",pre:"pre",h3:"h3",ul:"ul",li:"li",img:"img"},(0,n.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.h1,{id:"客户端兼容性",children:["客户端兼容性",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#客户端兼容性",children:"#"})]}),"\n",(0,r.jsxs)(l.h2,{id:"browserslist-配置",children:["Browserslist 配置",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist-配置",children:"#"})]}),"\n",(0,r.jsxs)(l.p,{children:["Modern.js 支持在项目根目录 ",(0,r.jsx)(l.code,{children:"package.json"})," 文件中的 ",(0,r.jsx)(l.code,{children:"browserslist"})," 字段（或单独的 ",(0,r.jsx)(l.code,{children:".browserslistrc"})," 文件）指定项目覆盖的目标浏览器范围。该值会被 ",(0,r.jsx)(l.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(l.code,{children:"@babel/preset-env"})})," 和 ",(0,r.jsx)(l.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(l.code,{children:"autoprefixer"})})," 用来确定需要转换的 JavaScript 语法特性和需要添加的 CSS 浏览器前缀。"]}),"\n",(0,r.jsx)(l.p,{children:"Modern.js 中默认值如下:"}),"\n",(0,r.jsx)(l.div,{className:"language-",children:(0,r.jsxs)(l.div,{className:"modern-code-content",children:[(0,r.jsx)(l.button,{className:"copy"}),(0,r.jsx)(l.pre,{className:"code",children:(0,r.jsx)(l.code,{className:"language-js",children:"['> 0.01%', 'not dead', 'not op_mini all'];\n"})})]})}),"\n",(0,r.jsxs)(l.p,{children:["可以在",(0,r.jsx)(l.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer",children:"这里"}),"了解如何自定义浏览器范围。"]}),"\n",(0,r.jsxs)(l.p,{children:["查看 Modern.js Builder 文档了解更多 ",(0,r.jsx)(l.a,{href:"https://modernjs.dev/builder/guide/advanced/browserslist.html",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"})," 相关内容。"]}),"\n",(0,r.jsxs)(l.div,{className:"modern-directive note",children:[(0,r.jsx)(l.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsxs)(l.div,{className:"modern-directive-content",children:[(0,r.jsxs)(l.p,{children:["Modern.js 支持配置 ",(0,r.jsx)(l.a,{href:"/configure/app/output/override-browserslist",children:"output.overrideBrowserslist"})," 覆盖默认 browserslist 值。"]}),"\n"]})]}),"\n",(0,r.jsxs)(l.h2,{id:"polyfill",children:["Polyfill",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill",children:"#"})]}),"\n",(0,r.jsxs)(l.h3,{id:"编译时-polyfill",children:["编译时 Polyfill",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#编译时-polyfill",children:"#"})]}),"\n",(0,r.jsxs)(l.p,{children:["Modern.js 在编译时默认通过 ",(0,r.jsx)(l.a,{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer",children:"core-js"})," 引入对应的 Polyfill 代码。"]}),"\n",(0,r.jsx)(l.p,{children:"默认情况下会根据项目 Browserslist 的设置情况引入所需的 Polyfill 代码， 这样基本不用再担心项目源码和第三方依赖的 Polyfill 问题了，但是因为包含了一些没有用到的 Polyfill 代码，所以最终的包大小可能会有所增加。"}),"\n",(0,r.jsxs)(l.div,{className:"modern-directive info",children:[(0,r.jsx)(l.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(l.div,{className:"modern-directive-content",children:[(0,r.jsxs)(l.p,{children:["对于明确第三方依赖不需要 Polyfill 的场景，可以设置 ",(0,r.jsx)(l.a,{href:"/configure/app/output/polyfill",children:(0,r.jsx)(l.code,{children:"output.polyfill"})})," 为 ",(0,r.jsx)(l.code,{children:"usage"}),", 这样 Babel 编译时只会根据代码中使用到的语法引入 Polyfill 代码。"]}),"\n"]})]}),"\n",(0,r.jsxs)(l.h3,{id:"运行时按需-polyfill",children:["运行时按需 Polyfill",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#运行时按需-polyfill",children:"#"})]}),"\n",(0,r.jsxs)(l.p,{children:["Modern.js 中还提供了基于浏览器 ",(0,r.jsx)(l.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent",target:"_blank",rel:"noopener noreferrer",children:"UA"})," 信息的运行时按需 Polyfill 方案，相比于 Babel 优势如下："]}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:"不会插入到代码中，只根据访问页面的设备，按需下发 Polyfill 代码 ，减少整体代码体积。"}),"\n",(0,r.jsx)(l.li,{children:"相同浏览器会公用一份 Polyfill 代码。因此，随着项目越来越多，基于 UA 的 Polyfill 代码下发速度会越来越快，综合速度超过常规方案。"}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"可以通过微生成器开启该功能："}),"\n",(0,r.jsx)(l.div,{className:"language-",children:(0,r.jsxs)(l.div,{className:"modern-code-content",children:[(0,r.jsx)(l.button,{className:"copy"}),(0,r.jsx)(l.pre,{className:"code",children:(0,r.jsx)(l.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 启用可选功能 启用「基于 UA 的 Polyfill」功能\n"})})]})}),"\n",(0,r.jsxs)(l.p,{children:["执行命令后，在 ",(0,r.jsx)(l.code,{children:"modern.config.ts"})," 中注册 Polyfill 插件:"]}),"\n",(0,r.jsxs)(l.div,{className:"language-",children:[(0,r.jsx)(l.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(l.div,{className:"modern-code-content",children:[(0,r.jsx)(l.button,{className:"copy"}),(0,r.jsx)(l.pre,{className:"code",children:(0,r.jsx)(l.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import polyfillPlugin from '@modern-js/plugin-polyfill';\n\nexport default defineConfig({\n  plugins: [..., polyfillPlugin()],\n});\n"})})]})]}),"\n",(0,r.jsxs)(l.p,{children:["配置 ",(0,r.jsx)(l.code,{children:"output.polyfill"})," 为 ",(0,r.jsx)(l.code,{children:"ua"})," 并且执行 ",(0,r.jsx)(l.code,{children:"pnpm run build && pnpm run serve"})," 启动服务器后，访问页面可以看到 HTML 产物中包含如下脚本:"]}),"\n",(0,r.jsx)(l.div,{className:"language-",children:(0,r.jsxs)(l.div,{className:"modern-code-content",children:[(0,r.jsx)(l.button,{className:"copy"}),(0,r.jsx)(l.pre,{className:"code",children:(0,r.jsx)(l.code,{className:"language-js",children:'<script src="/__polyfill__" crossorigin></script>\n'})})]})}),"\n",(0,r.jsxs)(l.p,{children:["在 Chrome 51 下访问页面可以看到 ",(0,r.jsx)(l.code,{children:"http://localhost:8080/__polyfill__"})," 返回内容如下:"]}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/ua-polyfill.png",alt:"ua-polyfill"})}),"\n",(0,r.jsxs)(l.div,{className:"modern-directive caution",children:[(0,r.jsx)(l.div,{className:"modern-directive-title",children:"注意"}),(0,r.jsxs)(l.div,{className:"modern-directive-content",children:[(0,r.jsx)(l.p,{children:"该功能只有在使用 Modern.js 内置的 Web Server 时才会生效。"}),"\n",(0,r.jsxs)(l.p,{children:["如果有自定义模版的需求，请参考 ",(0,r.jsx)(l.a,{href:"/guides/basic-features/html",children:"HTML 模板"}),"。通过 ",(0,r.jsx)(l.code,{children:"html.template"})," 或 ",(0,r.jsx)(l.code,{children:"tools.html"})," 手动修改模版时，可能会导致该功能无法正确生效。\n"]})]})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=Object.assign({},(0,n.useMDXComponents)(),e.components).wrapper;return l?(0,r.jsx)(l,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);