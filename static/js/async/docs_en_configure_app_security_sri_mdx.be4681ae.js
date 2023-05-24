(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_security_sri_mdx"],{70666:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var s=r("9880"),t=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",a:"a",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SRIOptions =\n  | {\n      hashFuncNames?: string[];\n      enabled?: 'auto' | boolean;\n      hashLoading?: 'eager' | 'lazy';\n    }\n  | boolean;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bundler:"})," ",(0,s.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Adding an integrity attribute (",(0,s.jsx)(n.code,{children:"integrity"}),") to sub-resources introduced by HTML allows the browser to verify the integrity of the introduced resource, thus preventing tampering with the downloaded resource."]}),"\n",(0,s.jsxs)(n.p,{children:["Enabling this option will set the webpack ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/output/#outputcrossoriginloading",target:"_blank",rel:"noopener noreferrer",children:"output.crossOriginLoading"})," configuration item to ",(0,s.jsx)(n.code,{children:"anonymous"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"introduce-sri",children:["Introduce SRI",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduce-sri",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Subresource Integrity (SRI) is a security feature that enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match."}),"\n",(0,s.jsx)(n.p,{children:"For script tags, the result is to refuse to execute the code; for CSS links, the result is not to load the styles."}),"\n",(0,s.jsxs)(n.p,{children:["For more on subresource integrity, see ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity",target:"_blank",rel:"noopener noreferrer",children:"Subresource Integrity - MDN"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.code,{children:"SRI"})," is not turned on, and when it is, its default configuration is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n  hashFuncNames: [\'sha384\'];\n  enabled: "auto",\n  hashLoading: "eager",\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can customize the configuration items according to your own needs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  security: {\n    sri: {\n      hashFuncNames: ['sha-256'],\n      enabled: true,\n      hashLoading: 'lazy',\n    },\n  },\n};\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},3813:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},title:function(){return a},toc:function(){return c},default:function(){return l}});var s=r("9880"),t=r("23169"),i=r.ir(r("70666")),o={sidebar_label:"sri"},a="security.sri",c=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"securitysri",children:["security.sri",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitysri",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-security.html#securitysri",target:"_blank",rel:"noopener noreferrer",children:"security.sri"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);