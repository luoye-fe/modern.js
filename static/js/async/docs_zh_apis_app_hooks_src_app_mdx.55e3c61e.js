(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_src_app_mdx"],{43020:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var r in e)Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return p},title:function(){return i},toc:function(){return o},default:function(){return a}});var t=r("9880"),s=r("23169"),p={title:"App.[tj]sx",sidebar_position:1},i="App.[tj]sx",o=[];function c(n){var e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div"},(0,s.useMDXComponents)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.h1,{id:"app[tj]sx",children:["App.[tj]sx",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#app[tj]sx",children:"#"})]}),"\n",(0,t.jsx)(e.p,{children:"应用使用自控路由时的入口标识符。"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"App.[tj]sx"})," 并不是实际的应用入口，Modern.js 会自动生成真正的构建打包的入口文件, 内容大致如下："]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"import React from 'react';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n// App.[jt]sx\nimport App from '@_modern_js_src/App';\nimport { state } from '@modern-js/runtime/plugins';\nimport {\n  immer,\n  effects,\n  autoActions,\n  devtools,\n} from '@modern-js/runtime/model';\n\nconst createStatePlugins = config => {\n  const plugins = [];\n  plugins.push(immer(config['immer']));\n  plugins.push(effects(config['effects']));\n  plugins.push(autoActions(config['autoActions']));\n  plugins.push(devtools(config['devtools']));\n  return plugins;\n};\nlet AppWrapper = null;\nfunction render() {\n  AppWrapper = createApp({\n    plugins: [\n      state({\n        ...{ plugins: createStatePlugins(true) },\n        ...App?.config?.state,\n      }),\n    ],\n  })(App);\n  if (IS_BROWSER) {\n    bootstrap(AppWrapper, MOUNT_ID);\n  }\n  return AppWrapper;\n}\nAppWrapper = render();\nexport default AppWrapper;\n"})}),"\n",(0,t.jsxs)(e.div,{className:"modern-directive note",children:[(0,t.jsx)(e.div,{className:"modern-directive-title",children:"NOTE"}),(0,t.jsxs)(e.div,{className:"modern-directive-content",children:[(0,t.jsxs)(e.p,{children:["在多入口的场景下，每个入口都可以拥有独立的 ",(0,t.jsx)(e.code,{children:"App.[jt]sx"}),"，详见",(0,t.jsx)(e.a,{href:"/guides/concept/entries",children:"入口"}),"。"]}),"\n"]})]})]})}var a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,s.useMDXComponents)(),n.components).wrapper;return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(c,n)})):c(n)}}}]);