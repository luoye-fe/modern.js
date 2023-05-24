(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_ts-checker_mdx"],{44217:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s=r("9880"),t=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  typescript: {\n    // avoid OOM issue\n    memoryLimit: 8192,\n    // use tsconfig of user project\n    configFile: tsconfigPath,\n    // use typescript of user project\n    typescriptPath: require.resolve('typescript'),\n  },\n  issue: {\n    exclude: [\n      { file: '**/*.(spec|test).ts' },\n      { file: '**/node_modules/**/*' },\n    ],\n  },\n  logger: {\n    log() {\n      // do nothing\n      // we only want to display error messages\n    },\n    error(message: string) {\n      console.error(message.replace(/ERROR/g, 'Type Error'));\n    },\n  },\n},\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bundler:"})," ",(0,s.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the ",(0,s.jsx)(n.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"})," is enabled for type checking. You can use ",(0,s.jsx)(n.code,{children:"output.disableTsChecker"})," config to disable it."]}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When this value is an Object, it is merged with the default config via Object.assign."}),"\n",(0,s.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When the value is a Function, the default config is passed in as the first parameter. You can modify the config object directly, or return an object as the final config."})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},94139:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return a},default:function(){return d}});var s=r("9880"),t=r("23169"),i=r.ir(r("44217")),c={sidebar_label:"tsChecker"},o="tools.tsChecker",a=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolstschecker",children:["tools.tsChecker",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstschecker",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolstschecker",target:"_blank",rel:"noopener noreferrer",children:"tools.tsChecker"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);