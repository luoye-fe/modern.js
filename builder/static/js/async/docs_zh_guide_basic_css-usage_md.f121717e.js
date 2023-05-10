(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_basic_css-usage_md"],{97289:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return a},title:function(){return l},toc:function(){return t},default:function(){return i}});var r=n("9880"),c=n("23169"),a={},l="引用样式资源",t=[{text:"使用 Less、Sass 和 Stylus",depth:2,id:"使用-less、sass-和-stylus"},{text:"使用 PostCSS",depth:2,id:"使用-postcss"},{text:"内置 PostCSS 插件",depth:3,id:"内置-postcss-插件"},{text:"使用 CSS Modules",depth:2,id:"使用-css-modules"},{text:"CSS 压缩",depth:2,id:"css-压缩"},{text:"内联 CSS 文件",depth:2,id:"内联-css-文件"},{text:"引用 node_modules 里的样式",depth:2,id:"引用-node_modules-里的样式"}];function o(e){var s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"引用样式资源",children:["引用样式资源",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#引用样式资源",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Builder 内置多种常用的样式资源处理方式，包括 Less / Sass 预处理器、PostCSS、CSS Modules、CSS 内联和 CSS 压缩。"}),"\n",(0,r.jsx)(s.p,{children:"除此之外，Builder 也提供了多个配置项来自定义样式资源的处理规则。"}),"\n",(0,r.jsxs)(s.h2,{id:"使用-less、sass-和-stylus",children:["使用 Less、Sass 和 Stylus",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-less、sass-和-stylus",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Builder 内置了社区流行的 CSS 预处理器，包括 Less 和 Sass。"}),"\n",(0,r.jsxs)(s.p,{children:["默认情况下，你不需要对 Less 和 Sass 进行任何配置。如果你有自定义 loader 配置的需求，可以通过配置 ",(0,r.jsx)(s.a,{href:"/api/config-tools",children:"tools.less"}),"、",(0,r.jsx)(s.a,{href:"/api/config-tools",children:"tools.sass"})," 来进行设置。"]}),"\n",(0,r.jsxs)(s.p,{children:["你也可以在 Builder 中使用 Stylus，只需要安装 Builder 提供的 Stylus 插件即可，使用方式请参考 ",(0,r.jsx)(s.a,{href:"/plugins/plugin-stylus",children:"Stylus 插件"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"使用-postcss",children:["使用 PostCSS",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-postcss",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Builder 内置了 ",(0,r.jsx)(s.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"})," 来转换 CSS 代码。你可以通过 ",(0,r.jsx)(s.a,{href:"/api/config-tools",children:"tools.postcss"})," 来配置 postcss-loader。"]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-ts",children:"export default {\n  tools: {\n    postcss: opts => {\n      const viewportPlugin = require('postcss-px-to-viewport')({\n        viewportWidth: 375,\n      });\n      opts.postcssOptions.plugins.push(viewportPlugin);\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.h3,{id:"内置-postcss-插件",children:["内置 PostCSS 插件",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#内置-postcss-插件",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Builder 内置了一些 PostCSS 插件，会对 CSS 进行以下转换："}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"}),"：在默认情况下，我们开启了 autoprefixer 来自动补齐 CSS 的浏览器前缀。如果你需要配置目标浏览器，可使用 ",(0,r.jsx)(s.a,{href:"/api/config-output",children:"output.overrideBrowserslist"})," 进行配置。"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-nested",target:"_blank",rel:"noopener noreferrer",children:"postcss-nesting"}),"：提供 ",(0,r.jsx)(s.a,{href:"https://drafts.csswg.org/css-nesting-1/",target:"_blank",rel:"noopener noreferrer",children:"CSS Nesting"})," 支持，可以在 CSS 中使用嵌套写法，如："]}),"\n"]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-css",children:".my-table {\n  & td {\n    text-align: center;\n\n    &.c {\n      text-transform: uppercase;\n    }\n  }\n}\n"})})]})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-flexbugs-fixes",target:"_blank",rel:"noopener noreferrer",children:"postcss-flexbugs-fixes"}),"：用于修复已知的 ",(0,r.jsx)(s.a,{href:"https://github.com/philipwalton/flexbugs",target:"_blank",rel:"noopener noreferrer",children:"Flex Bugs"}),"。"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-initial",target:"_blank",rel:"noopener noreferrer",children:"postcss-initial"}),"：仅在需要兼容低版本浏览器时启用，提供对 ",(0,r.jsxs)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/initial_value",target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)(s.code,{children:"initial"})," 属性值"]})," 的兼容。"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-page-break",target:"_blank",rel:"noopener noreferrer",children:"postcss-page-break"}),"：仅在需要兼容低版本浏览器时启用，提供对 ",(0,r.jsxs)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/break-after",target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)(s.code,{children:"break-"})," 属性"]})," 的兼容。"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-font-variant",target:"_blank",rel:"noopener noreferrer",children:"postcss-font-variant"}),"：仅在需要兼容低版本浏览器时启用，提供对 ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(s.code,{children:"font-variant"})})," 的兼容。"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-media-minmax",target:"_blank",rel:"noopener noreferrer",children:"postcss-media-minmax"}),"：仅在需要兼容低版本浏览器时启用，提供对 ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#syntax_improvements_in_level_4",target:"_blank",rel:"noopener noreferrer",children:"Media Query Ranges"})," 的兼容。"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-custom-properties",target:"_blank",rel:"noopener noreferrer",children:"postcss-custom-properties"}),"：仅在需要兼容低版本浏览器时启用，提供对 ",(0,r.jsx)(s.a,{href:"https://www.w3.org/TR/css-variables-1/",target:"_blank",rel:"noopener noreferrer",children:"Custom Properties"})," 的兼容，你可以在 CSS 中定义和使用自定义变量，如："]}),"\n"]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-css",children:":root {\n  --main-bg-color: pink;\n}\n\nbody {\n  background-color: var(--main-bg-color);\n}\n"})})]})}),"\n",(0,r.jsxs)(s.h2,{id:"使用-css-modules",children:["使用 CSS Modules",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-css-modules",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["请阅读 ",(0,r.jsx)(s.a,{href:"/guide/basic/css-modules",children:"使用 CSS Modules"})," 章节来了解 CSS Modules 的完整用法。"]}),"\n",(0,r.jsxs)(s.h2,{id:"css-压缩",children:["CSS 压缩",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#css-压缩",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"通常情况下，在生产环境我们会将 CSS、JS 等静态资源进行压缩，以达到更好的传输效率。"}),"\n",(0,r.jsxs)(s.p,{children:["Builder 通过 ",(0,r.jsx)(s.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"css-minimizer-webpack-plugin"})," 在生产环境构建时自动压缩 CSS 代码（底层使用的压缩工具为 ",(0,r.jsx)(s.a,{href:"https://cssnano.co/",target:"_blank",rel:"noopener noreferrer",children:"cssnano"}),"）。"]}),"\n",(0,r.jsxs)(s.p,{children:["你可以通过 ",(0,r.jsx)(s.a,{href:"/api/config-tools",children:"tools.minifyCss"})," 配置项来修改 ",(0,r.jsx)(s.code,{children:"css-minimizer-webpack-plugin"}),"的配置。"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"关于 cssnano"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"cssnano 是一个用于优化和压缩 CSS 文件的工具。它通过删除未使用的规则、合并相同的规则、移除注释和空白符以及转换长度单位等方式来减小 CSS 文件的体积，从而提升网站的加载速度。"})})]}),"\n",(0,r.jsxs)(s.h2,{id:"内联-css-文件",children:["内联 CSS 文件",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#内联-css-文件",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["默认情况下，Builder 会把 CSS 提取为独立的 ",(0,r.jsx)(s.code,{children:".css"})," 文件，并输出到构建产物目录。"]}),"\n",(0,r.jsxs)(s.p,{children:["如果你希望将样式内联到 JS 文件中，可以将 ",(0,r.jsx)(s.a,{href:"/api/config-output",children:"output.disableCssExtract"})," 设置为 ",(0,r.jsx)(s.code,{children:"true"})," 来禁用 CSS 提取逻辑。当浏览器请求到 JS 文件后，JS 将动态地向 HTML 插入 ",(0,r.jsx)(s.code,{children:"<style>"})," 标签，以此加载 CSS 样式。"]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    disableCssExtract: true,\n  },\n};\n"})})]})}),"\n",(0,r.jsx)(s.p,{children:"这将会增大你的 JS Bundle 体积，因此通常情况下，不太建议禁用 CSS 提取逻辑。"}),"\n",(0,r.jsxs)(s.h2,{id:"引用-node_modules-里的样式",children:["引用 node_modules 里的样式",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#引用-node_modules-里的样式",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"你可以直接引用 node_modules 里的样式文件。"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"在组件中引用："}),"\n"]}),"\n",(0,r.jsxs)(s.div,{className:"language-",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"src/App.tsx"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-ts",meta:'title="src/App.tsx"',children:"// 引用 Arco Design 样式：\nimport '@arco-design/web-react/dist/css/arco.css';\n"})})]})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"在样式文件中引用："}),"\n"]}),"\n",(0,r.jsxs)(s.div,{className:"language-",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"src/App.css"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-css",meta:'title="src/App.css"',children:"/* 引用 normalize.css */\n/* https://github.com/necolas/normalize.css */\n@import 'normalize.css';\n\nbody {\n  /* */\n}\n"})})]})]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);