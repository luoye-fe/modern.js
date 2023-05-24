(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_inject-by-entries_mdx"],{37978:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=i("9880"),t=i("23169");function s(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Record<string, boolean | string>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Set different script tag inject positions for different pages."}),"\n",(0,r.jsxs)(n.p,{children:["The usage is same as ",(0,r.jsx)(n.code,{children:"inject"}),', and you can use the "entry name" as the key to set each page individually.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"injectByEntries"})," will overrides the value set in ",(0,r.jsx)(n.code,{children:"inject"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'head',\n    injectByEntries: {\n      foo: 'body',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"After recompiling, you will see:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The script tag of the page ",(0,r.jsx)(n.code,{children:"foo"})," will be injected inside the ",(0,r.jsx)(n.code,{children:"body"})," tag."]}),"\n",(0,r.jsxs)(n.li,{children:["The script tag of other pages will be injected inside the ",(0,r.jsx)(n.code,{children:"head"})," tag."]}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},61245:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return l},default:function(){return a}});var r=i("9880"),t=i("23169"),s=i.ir(i("37978")),c={sidebar_label:"injectByEntries"},d="html.injectByEntries",l=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"htmlinjectbyentries",children:["html.injectByEntries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlinjectbyentries",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlinjectbyentries",target:"_blank",rel:"noopener noreferrer",children:"html.injectByEntries"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(s.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);