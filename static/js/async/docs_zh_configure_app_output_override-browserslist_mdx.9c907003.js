(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_override-browserslist_mdx"],{1426:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});var s=n("9880"),i=n("23169");function d(e){var r=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h4:"h4",div:"div",pre:"pre",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"类型："})," ",(0,s.jsx)(r.code,{children:"string[] | Record<BuilderTarget, string[]>"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"默认值："})," ",(0,s.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["指定项目兼容的目标浏览器范围。该值会被 ",(0,s.jsx)(r.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-env"})," 和 ",(0,s.jsx)(r.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"})," 用来确定需要转换的 JavaScript 语法特性和需要添加的 CSS 浏览器前缀。"]}),"\n",(0,s.jsxs)(r.h4,{id:"优先级",children:["优先级",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#优先级",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," 配置的优先级高于项目中的 ",(0,s.jsx)(r.code,{children:".browserslistrc"})," 配置文件和 package.json 中的 ",(0,s.jsx)(r.code,{children:"browserslist"})," 字段。"]}),"\n",(0,s.jsxs)(r.p,{children:["大多数场景下，推荐优先使用 ",(0,s.jsx)(r.code,{children:".browserslistrc"})," 文件，而不是使用 ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," 配置。因为 ",(0,s.jsx)(r.code,{children:".browserslistrc"})," 文件是官方定义的配置文件，通用性更强，可以被社区中的其他库识别。"]}),"\n",(0,s.jsxs)(r.h4,{id:"默认值",children:["默认值",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#默认值",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["如果项目中没有定义任何 ",(0,s.jsx)(r.code,{children:"browserslist"})," 相关的配置，也没有定义 ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"}),"，那么 Builder 会设置默认值为："]}),"\n",(0,s.jsx)(r.div,{className:"language-",children:(0,s.jsx)(r.div,{className:"modern-code-content",children:(0,s.jsx)(r.pre,{className:"code",children:(0,s.jsx)(r.code,{className:"language-js",children:"['> 0.01%', 'not dead', 'not op_mini all'];\n"})})})}),"\n",(0,s.jsxs)(r.h3,{id:"示例",children:["示例",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"下面是兼容移动端 H5 场景的示例："}),"\n",(0,s.jsx)(r.div,{className:"language-",children:(0,s.jsx)(r.div,{className:"modern-code-content",children:(0,s.jsx)(r.pre,{className:"code",children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: [\n      'iOS >= 9',\n      'Android >= 4.4',\n      'last 2 versions',\n      '> 0.2%',\n      'not dead',\n    ],\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(r.p,{children:["可以查看 ",(0,s.jsx)(r.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer",children:"browserslist 文档"})," 来了解如何自定义浏览器范围。"]}),"\n",(0,s.jsxs)(r.h4,{id:"根据产物类型设置",children:["根据产物类型设置",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#根据产物类型设置",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["当你同时构建多种类型的产物时，你可以为不同的产物类型设置不同的目标浏览器范围。此时，你需要把 ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," 设置为一个对象，对象的 key 为对应的产物类型。"]}),"\n",(0,s.jsxs)(r.p,{children:["比如为 ",(0,s.jsx)(r.code,{children:"web"})," 和 ",(0,s.jsx)(r.code,{children:"node"})," 设置不同的范围："]}),"\n",(0,s.jsx)(r.div,{className:"language-",children:(0,s.jsx)(r.div,{className:"modern-code-content",children:(0,s.jsx)(r.pre,{className:"code",children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: {\n      web: [\n        'iOS >= 9',\n        'Android >= 4.4',\n        'last 2 versions',\n        '> 0.2%',\n        'not dead',\n      ],\n      node: ['node >= 14'],\n    },\n  },\n};\n"})})})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},44881:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return o},title:function(){return t},toc:function(){return c},default:function(){return a}});var s=n("9880"),i=n("23169"),d=n.ir(n("1426")),o={sidebar_label:"overrideBrowserslist"},t="output.overrideBrowserslist",c=[];function l(e){var r=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"outputoverridebrowserslist",children:["output.overrideBrowserslist",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#outputoverridebrowserslist",children:"#"})]}),"\n",(0,s.jsxs)(r.div,{className:"modern-directive tip",children:[(0,s.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(r.div,{className:"modern-directive-content",children:(0,s.jsxs)(r.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(r.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputoverridebrowserslist",target:"_blank",rel:"noopener noreferrer",children:"output.overrideBrowserslist"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(d.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);