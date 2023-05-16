(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_plugins_plugin-stylus_mdx"],{54525:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return i},toc:function(){return c},default:function(){return t}});var l=s("9880"),d=s("23169"),r={},i="Stylus 插件",c=[{text:"快速开始",depth:2,id:"快速开始"},{text:"安装插件",depth:3,id:"安装插件"},{text:"注册插件",depth:3,id:"注册插件"},{text:"示例",depth:2,id:"示例"},{text:"配置",depth:2,id:"配置"},{text:"stylusOptions",depth:3,id:"stylusoptions"},{text:"sourceMap",depth:3,id:"sourcemap"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",div:"div",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"stylus-插件",children:["Stylus 插件",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylus-插件",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"Stylus 是一个富于表现力、动态的、健壮的 CSS 预处理器，本章节介绍如何在 Builder 中使用 Stylus。"}),"\n",(0,l.jsxs)(n.h2,{id:"快速开始",children:["快速开始",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,l.jsxs)(n.h3,{id:"安装插件",children:["安装插件",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装插件",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"你可以通过如下的命令安装插件:"}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-stylus -D\n\n# yarn\nyarn add @modern-js/builder-plugin-stylus -D\n\n# pnpm\npnpm install @modern-js/builder-plugin-stylus -D\n"})})})}),"\n",(0,l.jsxs)(n.h3,{id:"注册插件",children:["注册插件",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["在 Modern.js 等上层框架中，你可以通过 ",(0,l.jsx)(n.code,{children:"builderPlugins"})," 配置项来注册 Stylus 插件："]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { builderPluginStylus } from '@modern-js/builder-plugin-stylus';\n\nexport default {\n  builderPlugins: [builderPluginStylus()],\n};\n"})})})}),"\n",(0,l.jsxs)(n.p,{children:["当你直接调用 Builder 的 Node API 时，可以通过 ",(0,l.jsx)(n.code,{children:"addPlugins"})," 方法来注册 Stylus 插件："]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-js",children:"import { builderPluginStylus } from '@modern-js/builder-plugin-stylus';\n\n// 往 builder 实例上添加插件\nbuilder.addPlugins([builderPluginStylus()]);\n"})})})}),"\n",(0,l.jsxs)(n.h2,{id:"示例",children:["示例",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["安装完插件后，你可以直接在代码中引入 ",(0,l.jsx)(n.code,{children:"*.styl"})," 或 ",(0,l.jsx)(n.code,{children:"*.module.styl"})," 文件，无须添加其他配置。"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"normalize.styl"}),":"]}),"\n"]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-styl",children:"body\n  color #000\n  font 14px Arial, sans-serif\n"})})})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"title.module.styl"}),":"]}),"\n"]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-styl",children:".title\n  font-size: 14px;\n"})})})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"index.js"}),":"]}),"\n"]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-js",children:"import './normalize.styl';\nimport style from './title.module.styl';\n\nconsole.log(style.title);\n"})})})}),"\n",(0,l.jsxs)(n.h2,{id:"配置",children:["配置",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"如果你需要自定义 Stylus 的编译行为，可以使用以下配置项。"}),"\n",(0,l.jsxs)(n.h3,{id:"stylusoptions",children:["stylusOptions",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylusoptions",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-ts",children:"type StylusOptions = {\n  use?: string[];\n  include?: string;\n  import?: string;\n  resolveURL?: boolean;\n  lineNumbers?: boolean;\n  hoistAtrules?: boolean;\n};\n"})})})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"默认值："})," ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["传递给 Stylus 的选项，请查阅 ",(0,l.jsx)(n.a,{href:"https://stylus-lang.com/docs/js.html",target:"_blank",rel:"noopener noreferrer",children:"Stylus 文档"})," 来了解具体用法。"]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-ts",children:"builderPluginStylus({\n  stylusOptions: {\n    lineNumbers: false,\n  },\n});\n"})})})}),"\n",(0,l.jsxs)(n.h3,{id:"sourcemap",children:["sourceMap",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcemap",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"默认值："})," ",(0,l.jsx)(n.code,{children:"isDev"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"是否生成 Source Map，默认在开发环境下启用。"}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-ts",children:"builderPluginStylus({\n  sourceMap: false,\n});\n"})})})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(a,e)})):a(e)}}}]);