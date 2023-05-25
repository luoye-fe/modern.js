(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_faq_features_md"],{86960:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return t},default:function(){return l}});var s=r("9880"),c=r("23169"),a={},i="功能类问题",t=[{text:"如何配置组件库按需引入？",depth:2,id:"如何配置组件库按需引入？"},{text:"如何在编译过程中进行 ESLint 代码校验？",depth:2,id:"如何在编译过程中进行-eslint-代码校验？"},{text:"如何配置静态资源的 CDN 路径？",depth:2,id:"如何配置静态资源的-cdn-路径？"},{text:"如何清空 webpack 编译缓存？",depth:2,id:"如何清空-webpack-编译缓存？"},{text:"如何移除代码中的 console？",depth:2,id:"如何移除代码中的-console？"}];function o(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code",blockquote:"blockquote"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"功能类问题",children:["功能类问题",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#功能类问题",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"如何配置组件库按需引入？",children:["如何配置组件库按需引入？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何配置组件库按需引入？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果需要配置组件库的按需引入，你可以通过 ",(0,s.jsx)(n.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"})," 配置，这个配置的能力等价于 ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'xxx-components',\n        libraryDirectory: 'es',\n        style: true,\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"如何在编译过程中进行-eslint-代码校验？",children:["如何在编译过程中进行 ESLint 代码校验？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何在编译过程中进行-eslint-代码校验？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["出于编译性能的考虑，Builder 默认不会在编译过程中进行 ESLint 校验，如果需要该功能，可以手动安装并注册社区中的 ",(0,s.jsx)(n.a,{href:"https://github.com/webpack-contrib/eslint-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"eslint-webpack-plugin"}),"。"]}),"\n",(0,s.jsx)(n.p,{children:"注册该插件的示例代码如下："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import ESLintPlugin from 'eslint-webpack-plugin';\n\nexport default {\n  tools: {\n    webpackChain(chain) {\n      chain.plugin('eslint-plugin').use(ESLintPlugin, [\n        {\n          extensions: ['.js', '.ts', '.jsx', 'tsx', '.mjs'],\n        },\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["更详细的用法请参考 ",(0,s.jsx)(n.a,{href:"https://github.com/webpack-contrib/eslint-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"eslint-webpack-plugin"})," 文档。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"如何配置静态资源的-cdn-路径？",children:["如何配置静态资源的 CDN 路径？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何配置静态资源的-cdn-路径？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果需要将 JS、CSS 等静态资源上传到 CDN 使用，那么可以通过 ",(0,s.jsx)(n.a,{href:"/api/config-output#outputassetprefix",children:"output.assetPrefix"})," 配置来设置静态资源的 URL 前缀。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: 'https://cdn.example.com/assets/',\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"如何清空-webpack-编译缓存？",children:["如何清空 webpack 编译缓存？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何清空-webpack-编译缓存？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，Builder 的 webpack 编译缓存生成在 ",(0,s.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," 目录下。"]}),"\n",(0,s.jsx)(n.p,{children:"如果需要清空本地的编译缓存，可以执行以下命令："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rm -rf ./node_modules/.cache\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"如何移除代码中的-console？",children:["如何移除代码中的 console？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何移除代码中的-console？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["在生产环境构建时，我们可以移除代码中的 ",(0,s.jsx)(n.code,{children:"console"}),"，从而避免开发环境的日志被输出到生产环境。"]}),"\n",(0,s.jsxs)(n.p,{children:["Builder 默认提供了移除 console 的配置项，请查看 ",(0,s.jsx)(n.a,{href:"/api/config-performance#performanceremoveconsole",children:"performance.removeConsole"}),"。"]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);