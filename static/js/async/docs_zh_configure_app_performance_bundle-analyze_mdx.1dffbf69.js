(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_performance_bundle-analyze_mdx"],{44674:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var s=r("9880"),a=r("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Object | undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["你有两种方式开启 ",(0,s.jsx)(n.code,{children:"webpack-bundle-analyzer"})," 来分析构建产物的体积:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["添加环境变量 ",(0,s.jsx)(n.code,{children:"BUNDLE_ANALYZE=true"}),"；"]}),"\n",(0,s.jsxs)(n.li,{children:["配置 ",(0,s.jsx)(n.code,{children:"performance.bundleAnalyze"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，不会开启 ",(0,s.jsx)(n.code,{children:"webpack-bundle-analyzer"}),"，当开启之后它的配置如下:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  analyzerMode: 'static',\n  openAnalyzer: false,\n  // target 为编译目标，如 `web`、`node` 等\n  reportFilename: `report-${target}.html`,\n}\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["你可以通过 ",(0,s.jsx)(n.code,{children:"performance.bundleAnalyze"})," 来覆盖默认配置，比如："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: {\n      analyzerMode: 'server',\n      openAnalyzer: true,\n    },\n  },\n};\n"})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},20054:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return l},title:function(){return d},toc:function(){return t},default:function(){return i}});var s=r("9880"),a=r("23169"),c=r.ir(r("44674")),l={sidebar_label:"bundleAnalyze"},d="performance.bundleAnalyze",t=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"performance-bundleanalyze",children:["performance.bundleAnalyze",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-bundleanalyze",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-performance.html#performancebundleanalyze",target:"_blank",rel:"noopener noreferrer",children:"performance.bundleAnalyze"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(c.default,{})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);