(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_ssr_no-ssr_mdx"],{40963:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return o},toc:function(){return d},default:function(){return c}});var t=r("9880"),i=r("23169"),s={title:"NoSSR"},o="NoSSR",d=[{text:"Usage",depth:2,id:"usage"},{text:"Example",depth:2,id:"example"},{text:"Scene",depth:2,id:"scene"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"nossr",children:["NoSSR",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nossr",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"The content wrapped by NoSSR will not be rendered at the server, nor will it be rendered during the client side hydrate. it will only be rendered immediately after the entire app is rendered."}),"\n",(0,t.jsxs)(n.h2,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { NoSSR } from '@modern-js/runtime';\n\nexport default () => <NoSSR>...</NoSSR>;\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["In the following code, the ",(0,t.jsx)(n.code,{children:"Time"})," component is used to display the current time. Since the time obtained by server-side rendering and client side hydrate are diff, React will throw an exception. For this case, you can use ",(0,t.jsx)(n.code,{children:"NoSSR"})," to optimize:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { NoSSR } from '@modern-js/runtime';\n\nfunction Time() {\n  return (\n    <NoSSR>\n      <div>Time: {Date.now()}</div>\n    </NoSSR>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"scene",children:["Scene",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#scene",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"In CSR, it is often necessary to render different content according to the browser UA, or a parameter of the current page URL. If the application switches directly to SSR at this time, it is very likely that the results will not meet the expectations."}),"\n",(0,t.jsx)(n.p,{children:"Modern.js provides complete browser side information in the SSR context, which can be used to determine the rendering result of the component on the server side."}),"\n",(0,t.jsx)(n.p,{children:"Even so, if there is too much logic in the application, or the developer wants to use the context later, or does not want some content to be rendered at the server side. developer can use the NoSSR component to exclude this part from server-side rendering."})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}}}]);