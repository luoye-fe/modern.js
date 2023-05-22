(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_performance_remove-moment-locale_mdx"],{1621:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var o=r("9880"),c=r("23169");function s(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"类型："})," ",(0,o.jsx)(n.code,{children:"boolean"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"默认值："})," ",(0,o.jsx)(n.code,{children:"false"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"打包工具："})," ",(0,o.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["是否移除 ",(0,o.jsx)(n.a,{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer",children:"moment.js"})," 的语言包文件。"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"moment.js"})," 默认包含了大量的语言包文件，会导致打包后的包体积增大。"]}),"\n",(0,o.jsxs)(n.p,{children:["当项目中使用了 ",(0,o.jsx)(n.code,{children:"moment.js"})," 时，推荐开启此选项，自动排除所有的语言包文件："]}),"\n",(0,o.jsx)(n.div,{className:"language-",children:(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    removeMomentLocale: true,\n  },\n};\n"})})})}),"\n",(0,o.jsx)(n.p,{children:"开启后，可以通过以下方式来加载语言包文件："}),"\n",(0,o.jsx)(n.div,{className:"language-",children:(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-js",children:"import moment from 'moment';\nimport 'moment/locale/zh-cn';\n\nmoment.locale('zh-cn');\n"})})})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(s,e)})):s(e)}},63197:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return a},toc:function(){return l},default:function(){return d}});var o=r("9880"),c=r("23169"),s=r.ir(r("1621")),t={sidebar_label:"removeMomentLocale"},a="performance.removeMomentLocale",l=[];function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"performanceremovemomentlocale",children:["performance.removeMomentLocale",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremovemomentlocale",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-performance.html#performanceremovemomentlocale",target:"_blank",rel:"noopener noreferrer",children:"performance.removeMomentLocale"}),"。\n"]})})]}),"\n","\n",(0,o.jsx)(s.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(i,e)})):i(e)}}}]);