(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_code-split_mdx"],{67779:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return t},default:function(){return o}});var s=r("9880"),d=r("23169"),a={title:"代码分割",sidebar_position:6},i="代码分割",t=[{text:"import",depth:2,id:"import"},{text:"React.lazy",depth:2,id:"reactlazy"},{text:"loadable",depth:2,id:"loadable"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",ul:"ul",li:"li",h2:"h2",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"代码分割",children:["代码分割",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码分割",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"代码分割是优化前端资源加载的一种常用手段，本文将介绍 Modern.js 支持的三种代码分割方式："}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["使用 Modern.js ",(0,s.jsx)(n.a,{href:"/guides/basic-features/routes#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1",children:"约定式路由"}),"时，默认会根据路由组件做代码分割，包裹 ",(0,s.jsx)(n.code,{children:"Suspense"})," 组件，无需自行进行代码分割。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"import"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"React.lazy"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"loadable"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"import",children:["import",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#import",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["使用动态 ",(0,s.jsx)(n.code,{children:"import()"})," 语法，",(0,s.jsx)(n.code,{children:"import"})," 接收的 JS 模块将作为一个新的打包入口被打包到单独的 JS 文件中。例如："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import('./math').then(math => {\n  console.log(math.add(16, 26));\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"./math"})," 路径对应的 JS 模块会被打包到单独的 JS 文件中。"]}),"\n",(0,s.jsxs)(n.h2,{id:"reactlazy",children:["React.lazy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#reactlazy",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"React 官方提供的组件代码分割的方式。"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive caution",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"React 17 及以下版本不支持 SSR，建议 React17 的 SSR 应用使用 loadable。"}),"\n"]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import React, { Suspense } from 'react';\n\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\nconst AnotherComponent = React.lazy(() => import('./AnotherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <section>\n          <OtherComponent />\n          <AnotherComponent />\n        </section>\n      </Suspense>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"React.lazy"})," 更多用法请见 ",(0,s.jsx)(n.a,{href:"https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy",target:"_blank",rel:"noopener noreferrer",children:"React lazy"}),"。"]}),"\n",(0,s.jsxs)(n.h2,{id:"loadable",children:["loadable",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadable",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["使用 ",(0,s.jsx)(n.code,{children:"loadable"})," API，示例如下："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n\nconst OtherComponent = loadable(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return <OtherComponent />;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"loadable"})," 更多用法请见 ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/utility/loadable",children:"loadable API"}),"。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"loadable"})," 开箱即用的支持 SSR，但不支持和 Suspense 一起使用，如果是 CSR 项目可以使用 ",(0,s.jsx)(n.a,{href:"https://loadable-components.com/docs/suspense/",target:"_blank",rel:"noopener noreferrer",children:"loadable.lazy"})]}),"\n"]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);