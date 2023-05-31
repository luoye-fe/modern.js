(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_css-loader_mdx"],{1622:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s=r("9880"),o=r("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",pre:"pre",h3:"h3"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"tools.cssLoader"})," 可以修改 ",(0,s.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer",children:"css-loader"})," 的配置项。默认配置如下:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  importLoaders: 1,\n  modules: {\n    auto: true,\n    exportLocalsConvention: 'camelCase',\n    localIdentName: config.output.cssModuleLocalIdentName,\n    // isServer 表示 node (SSR) 构建\n    // isWebWorker 表示 web worker 构建\n    exportOnlyLocals: isServer || isWebWorker,\n  },\n  // 默认在开发环境下启用 CSS 的 Source Map\n  sourceMap: isDev,\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"打包工具："})," ",(0,s.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"当此值为 Object 类型时，会与默认配置进行深层合并 (deep merge)。比如："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssLoader: {\n      modules: {\n        exportOnlyLocals: true,\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"当此值为 Function 类型时，默认配置作为第一个参数传入，你可以直接修改配置对象，也可以返回一个对象作为最终配置。比如："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssLoader: config => {\n      config.modules.exportOnlyLocals = true;\n      return config;\n    },\n  },\n};\n"})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},32409:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return i},toc:function(){return d},default:function(){return a}});var s=r("9880"),o=r("23169"),c=r.ir(r("1622")),t={sidebar_label:"cssLoader"},i="tools.cssLoader",d=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolscssloader",children:["tools.cssLoader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolscssloader",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolscssloader",target:"_blank",rel:"noopener noreferrer",children:"tools.cssLoader"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(c.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);