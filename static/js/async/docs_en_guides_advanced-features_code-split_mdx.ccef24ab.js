(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_code-split_mdx"],{86695:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return d},toc:function(){return s},default:function(){return l}});var t=i("9880"),r=i("23169"),o={title:"Code Split",sidebar_position:6},d="Code Split",s=[{text:"import",depth:2,id:"import"},{text:"React.lazy",depth:2,id:"reactlazy"},{text:"loadable",depth:2,id:"loadable"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",ul:"ul",li:"li",h2:"h2",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"code-split",children:["Code Split",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#code-split",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Code Split is a common way to optimizing front-end resource loading. This doc will introduce three methods supported by Modern.js:"}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["When you use Modern.js ",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes#conventional-routing",children:"Conventional routing"}),", by default it will do code splitting based on routing components, wrapping ",(0,t.jsx)(n.code,{children:"Suspense"})," components, no need to do code splitting by yourself."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"import"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"React.lazy"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"loadable"})}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"import",children:["import",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#import",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["use dynamic ",(0,t.jsx)(n.code,{children:"import()"}),", ",(0,t.jsx)(n.code,{children:"import"})," The JS modules pass to this API will be packaged into a separate JS file as a new packaging entry, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import('./math').then(math => {\n  console.log(math.add(16, 26));\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"The JS modules corresponding to the './math' path will be packaged in a separate JS file."}),"\n",(0,t.jsxs)(n.h2,{id:"reactlazy",children:["React.lazy",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#reactlazy",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"The officially way provides by React to split component code."}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive caution",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsx)(n.p,{children:"SSR is not supported in React 17 and below, and it is recommended that SSR applications for React 17 use loadable."}),"\n"]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import React, { Suspense } from 'react';\n\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\nconst AnotherComponent = React.lazy(() => import('./AnotherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <section>\n          <OtherComponent />\n          <AnotherComponent />\n        </section>\n      </Suspense>\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For detail, see ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/code-splitting.html#reactlazy",target:"_blank",rel:"noopener noreferrer",children:"React lazy"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"loadable",children:["loadable",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadable",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["use ",(0,t.jsx)(n.code,{children:"loadable"})," API, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n\nconst OtherComponent = loadable(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return <OtherComponent />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For detail, see ",(0,t.jsx)(n.a,{href:"/apis/app/runtime/utility/loadable",children:"loadable API"}),"."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["SSR is supported out of the box by ",(0,t.jsx)(n.code,{children:"loadable"}),"."]}),"\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}}}]);