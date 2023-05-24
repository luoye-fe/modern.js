(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_ssr_pre-render_mdx"],{43697:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return a},toc:function(){return l},default:function(){return d}});var t=r("9880"),i=r("23169"),s={title:"PreRender"},a="PreRender",l=[{text:"Usage",depth:2,id:"usage"},{text:"Function Signature",depth:2,id:"function-signature"},{text:"Input",depth:3,id:"input"},{text:"Example",depth:2,id:"example"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"prerender",children:["PreRender",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prerender",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"A Helmet-like HOC without content implements SPA routing-level caching, manner without additional configuration."}),"\n",(0,t.jsxs)(n.h2,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { PreRender } from '@modern-js/runtime/ssr';\n\nexport default () => (\n  <>\n    <PreRender interval={5} />\n  </>\n);\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"PreRender"})," provides a set of configuration for controlling caching rules, expiration times, caching algorithms, and more."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"type Props {\n  interval: number;\n  staleLimit: number;\n  level: number;\n  include: { header?: string[], query?: string[] };\n  matches: { header?: Record<string, any>, query?: Record<string, any> }\n}\n\nfunction PreRender(props: Props): React.Component\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"input",children:["Input",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"interval"}),": set the time the cache keep fresh, seconds. During this time, the cache will be used directly and not invoke asynchronous rendering."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"staleLimit"}),": sets the time when the cache is completely expired, seconds.During this time, The cache can be returned and asynchronous rendering will be invoke, otherwise must wait for the re-rendered result."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"level"}),": sets the calculation rule level for the cache identity, usually used with ",(0,t.jsx)(n.code,{children:"includes"})," and ",(0,t.jsx)(n.code,{children:"matches"}),". The default value is ",(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"0: pathname\n1: pathname + querystring\n2: pathname + headers\n3: pathname + querystring + headers\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"includes"}),": sets the content that needs to be included in the cache identifier, used when the ",(0,t.jsx)(n.code,{children:"level"})," is not ",(0,t.jsx)(n.code,{children:"0"}),". The default value is ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"matches"}),": sets the rewriting rule for the value of query or header in cache identity, usually used in cache category, supports regular expressions. The default value is ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { PreRender } from '@modern-js/runtime/ssr';\n\nexport default function App() {\n  return (\n    <>\n      <PreRender interval={10} />\n      <div>Hello Modern</div>\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following example shows how to add the parameters in the query and header into the cache identifier calculation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"/* calculate cache identifier using channel in query and language in header */\n<PreRender\n  interval={10}\n  level={2}\n  includes={{\n    query: ['channel'],\n    header: ['language'],\n  }}\n/>\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following example shows how not to let the test channel affect the online cache:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'/* rewrite the channel value starting with test_ in the query as "testChannel", otherwise rewrite it as "otherChannel" */\n<PreRender interval={10} level={2} includes={{\n  query: ["channel"],\n  header: ["language"]\n}} matches={{\n  query: {\n    channel: {\n      "testChannel", "^test_",\n      "otherChannel", ".*"\n    }\n  }\n}} />\n'})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);