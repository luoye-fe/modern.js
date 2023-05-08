(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_performance_chunk-split_mdx"],{9292:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var c=s("12151"),i=s("23169");function r(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3",a:"a",blockquote:"blockquote"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"Object"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"{ strategy: 'split-by-experience' }"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"performance.chunkSplit"})," 用于配置 Builder 的拆包策略。配置项的类型 ",(0,c.jsx)(n.code,{children:"ChunkSplit"})," 如下:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"type ForceSplitting = RegExp[] | Record<string, RegExp>;\n\ninterface BaseChunkSplit {\n  strategy?:\n    | 'split-by-module'\n    | 'split-by-experience'\n    | 'all-in-one'\n    | 'single-vendor';\n  override?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\ninterface SplitBySize {\n  strategy?: 'split-by-size';\n  minSize?: number;\n  maxSize?: number;\n  override?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\ninterface SplitCustom {\n  strategy?: 'custom';\n  splitChunks?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\nexport type ChunkSplit = BaseChunkSplit | SplitBySize | SplitCustom;\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"chunksplit-strategy",children:["chunkSplit.strategy",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit-strategy",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Builder 支持设置以下几种拆包策略："}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"split-by-experience"}),": 根据经验制定的拆分策略，自动将一些常用的 npm 包拆分为体积适中的 chunk。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"split-by-module"}),": 按 NPM 包的粒度拆分，每个 NPM 包对应一个 chunk。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"split-by-size"}),"：根据模块大小自动进行拆分。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"all-in-one"}),": 将所有代码全部打包到一个 chunk 中。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"single-vendor"}),": 将所有 NPM 包的代码打包到一个单独的 chunk 中。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"custom"}),": 自定义拆包配置。"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"默认拆包策略",children:["默认拆包策略",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认拆包策略",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Builder 默认采用 ",(0,c.jsx)(n.code,{children:"split-by-experience"})," 策略，这是我们根据经验制定的策略。具体来说，当你的项目中引用了以下 npm 包时，它们会自动被拆分为单独的 chunk："]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-polyfill.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"core-js"}),"，",(0,c.jsx)(n.code,{children:"@babel/runtime"}),"，",(0,c.jsx)(n.code,{children:"@swc/helpers"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-react.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"react"}),"，",(0,c.jsx)(n.code,{children:"react-dom"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-router.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"react-router"}),"，",(0,c.jsx)(n.code,{children:"react-router-dom"}),"，",(0,c.jsx)(n.code,{children:"history"}),"，",(0,c.jsx)(n.code,{children:"@remix-run/router"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-lodash.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"lodash"}),"，",(0,c.jsx)(n.code,{children:"lodash-es"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-antd.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"antd"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-arco.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"@arco-design/web-react"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-semi.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"@douyinfe/semi-ui"}),"。"]}),"\n"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsx)(n.p,{children:"如果项目中没有安装或引用以上 npm 包，则不会生成相应的 chunk。"})})]}),"\n",(0,c.jsxs)(n.p,{children:["如果你想使用其他拆包策略，可以通过 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 配置项来指定。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["在使用 Rspack 作为打包工具时，暂时不支持采用 ",(0,c.jsx)(n.code,{children:"split-by-module"})," 策略。\n"]})})]}),"\n",(0,c.jsxs)(n.h3,{id:"chunksplit-minsize",children:["chunkSplit.minSize",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit-minsize",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"number"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"10000"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 为 ",(0,c.jsx)(n.code,{children:"split-by-size"})," 时，可以通过 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.minSize"})," 配置项来指定 chunk 的最小大小，单位为字节。默认值为 10000。比如:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      minSize: 20000,\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"chunksplit-maxsize",children:["chunkSplit.maxSize",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit-maxsize",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"number"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"Infinity"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 为 ",(0,c.jsx)(n.code,{children:"split-by-size"})," 时，可以通过 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.maxSize"})," 配置项来指定 chunk 的最大大小，单位为字节。默认值为 ",(0,c.jsx)(n.code,{children:"Infinity"}),"。比如:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      maxSize: 50000,\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"chunksplit-forcesplitting",children:["chunkSplit.forceSplitting",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit-forcesplitting",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"RegExp[] | Record<string, RegExp>"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["通过 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.forceSplitting"})," 配置项可以将指定的模块强制拆分为一个独立的 chunk。"]}),"\n",(0,c.jsxs)(n.p,{children:["比如将 node_modules 下的 ",(0,c.jsx)(n.code,{children:"axios"})," 库拆分到 ",(0,c.jsx)(n.code,{children:"axios.js"})," 中："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      forceSplitting: {\n        axios: /node_modules\\/axios/,\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"相比直接配置 webpack 的 splitChunks，这是一个更加简便的方式。"}),"\n",(0,c.jsxs)(n.h3,{id:"chunksplit-splitchunks",children:["chunkSplit.splitChunks",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit-splitchunks",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 为 ",(0,c.jsx)(n.code,{children:"custom"})," 时，可以通过 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.splitChunks"})," 配置项来指定自定义的 webpack 拆包配置。此配置会和 webpack 的 splitChunks 配置进行合并（cacheGroups 配置也会合并）。比如:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'custom',\n      splitChunks: {\n        cacheGroups: {\n          react: {\n            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,\n            name: 'react',\n            chunks: 'all',\n          },\n        },\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"chunksplit-override",children:["chunkSplit.override",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit-override",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 为 ",(0,c.jsx)(n.code,{children:"split-by-experience"}),"、",(0,c.jsx)(n.code,{children:"split-by-module"}),"、",(0,c.jsx)(n.code,{children:"split-by-size"})," 或 ",(0,c.jsx)(n.code,{children:"single-vendor"})," 时，可以通过 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.override"})," 配置项来自定义 webpack 拆包配置，此配置会和 webpack 的 splitChunks 配置进行合并（cacheGroups 配置也会合并）。比如:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      override: {\n        cacheGroups: {\n          react: {\n            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,\n            name: 'react',\n            chunks: 'all',\n          },\n        },\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:'当 Builder 构建 "node" 类型的产物时，由于 Node Bundles 不需要通过拆包来优化加载性能，因此 chunkSplit 规则不会生效。'}),"\n"]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(r,e)})):r(e)}},47487:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return d},toc:function(){return t},default:function(){return h}});var c=s("12151"),i=s("23169"),r=s.ir(s("9292")),l={sidebar_label:"chunkSplit"},d="performance.chunkSplit",t=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"performance-chunksplit",children:["performance.chunkSplit",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-chunksplit",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-performance.html#performancechunksplit",target:"_blank",rel:"noopener noreferrer",children:"performance.chunkSplit"}),"。\n"]})})]}),"\n","\n",(0,c.jsx)(r.default,{})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}}}]);