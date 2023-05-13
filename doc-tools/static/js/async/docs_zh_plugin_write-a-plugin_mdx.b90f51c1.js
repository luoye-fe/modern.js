(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_plugin_write-a-plugin_mdx"],{52031:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},toc:function(){return l},title:function(){return o},default:function(){return a}});var c=s("9880"),r=s("23169"),d=void 0,l=[{id:"1-定义插件",text:"1. 定义插件",depth:3},{id:"2-使用插件",text:"2. 使用插件",depth:3}],o="编写一个插件";function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h3:"h3",div:"div",pre:"pre",code:"code"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"编写一个插件",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#编写一个插件",children:"#"}),"编写一个插件"]}),"\n",(0,c.jsx)(n.p,{children:"我们以注入一个全局组件为例，来看看如何定义和使用插件。"}),"\n",(0,c.jsxs)(n.h3,{id:"1-定义插件",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-定义插件",children:"#"}),"1. 定义插件"]}),"\n",(0,c.jsxs)(n.div,{className:"language-tsx",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginExample(slug: string): DocPlugin {\n  // 组件路径，组件的内容你需要自己实现\n  const componentPath = path.join(__dirname, 'Example.tsx');\n  return {\n    // 插件名称\n    name: 'plugin-example',\n    // 全局组件的路径\n    globalUIComponents: [componentPath],\n    // 构建阶段的全局变量定义\n    builderConfig: {\n      source: {\n        define: {\n          'process.env.slug': JSON.stringify(slug),\n        },\n      },\n    },\n  };\n}\n"})})})]}),"\n",(0,c.jsxs)(n.div,{className:"language-tsx",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"Example.tsx"}),(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\n\nconst Example = () => {\n  console.log(process.env.SLUG);\n  return <div>Example</div>;\n};\n\nexport default Example;\n"})})})]}),"\n",(0,c.jsxs)(n.p,{children:["插件一般为一个函数，接收一些插件参数(可选)，返回一个对象，对象中包含插件的名称以及其它配置。在上面的例子中，我们定义了一个插件，它的名称为",(0,c.jsx)(n.code,{children:"plugin-example"}),"，它会在构建阶段定义一个全局变量",(0,c.jsx)(n.code,{children:"slug"}),"，并且在文档中注入一个全局组件",(0,c.jsx)(n.code,{children:"Example.tsx"}),"。"]}),"\n",(0,c.jsxs)(n.h3,{id:"2-使用插件",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-使用插件",children:"#"}),"2. 使用插件"]}),"\n",(0,c.jsxs)(n.p,{children:["在 ",(0,c.jsx)(n.code,{children:"modern.config.ts"})," 中通过 ",(0,c.jsx)(n.code,{children:"doc.plugins"})," 注册插件:"]}),"\n",(0,c.jsxs)(n.div,{className:"language-tsx",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { pluginExample } from './plugin';\n\nexport default {\n  doc: {\n    plugins: [pluginExample('test')],\n  },\n};\n"})})})]}),"\n",(0,c.jsxs)(n.p,{children:["这样，Example 组件会自动在页面中渲染，并且我们可以在 Example 组件中访问到",(0,c.jsx)(n.code,{children:"process.env.slug"}),"。"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)}}}]);