(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_ts-loader_mdx"],{56976:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var d=s("9880"),r=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",h4:"h4"},(0,r.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"类型："})," ",(0,d.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"默认值："})," ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"打包工具："})," ",(0,d.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["项目中默认不开启 ts-loader，当 ",(0,d.jsx)(n.code,{children:"tools.tsLoader"})," 不为 undefined 则表示开启 ts-loader，同时禁用 babel-loader 对 TypeScript 的编译。"]}),"\n",(0,d.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"当此值为 Object 类型时，与默认配置通过 Object.assign 合并。"}),"\n",(0,d.jsx)(n.p,{children:"默认配置如下:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "ESNext"\n  },\n  "transpileOnly": true,\n  "allowTsInNodeModules": true\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["你可以通过 ",(0,d.jsx)(n.code,{children:"tools.tsLoader"})," 配置项来覆盖默认配置:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: {\n      allowTsInNodeModules: false,\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["当此值为 Function 类型时，默认配置作为第一参数传入，可以直接修改配置对象，也可以返回一个对象作为最终配置；第二个参数为修改 ",(0,d.jsx)(n.code,{children:"ts-loader"})," 配置工具函数集合："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: opts => {\n      opts.allowTsInNodeModules = false;\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"工具函数",children:["工具函数",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#工具函数",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"tools.tsLoader"})," 的值为 Function 类型时，第二个参数可用的工具函数如下："]}),"\n",(0,d.jsxs)(n.h4,{id:"addincludes",children:["addIncludes",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"类型："})," ",(0,d.jsx)(n.code,{children:"(includes: string | RegExp | Array<string | RegExp>) => void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["默认情况下只会编译 src 目录下的业务代码，使用 addIncludes 可以指定 ts-loader 编译 ",(0,d.jsx)(n.code,{children:"node_modules"})," 下的一些文件。比如:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: (config, { addIncludes }) => {\n      addIncludes([/node_modules\\/react/]);\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"类型："})," ",(0,d.jsx)(n.code,{children:"(excludes: string | RegExp | Array<string | RegExp>) => void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["和 ",(0,d.jsx)(n.code,{children:"addIncludes"})," 相反，指定 ",(0,d.jsx)(n.code,{children:"ts-loader"})," 编译时排除某些文件。"]}),"\n",(0,d.jsx)(n.p,{children:"例如不编译 src/example 目录下的文件："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: (config, { addExcludes }) => {\n      addExcludes([/src\\/example\\//]);\n    },\n  },\n};\n"})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}},99900:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return i},default:function(){return t}});var d=s("9880"),r=s("23169"),l=s.ir(s("56976")),c={sidebar_label:"tsLoader"},o="tools.tsLoader",i=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"toolstsloader",children:["tools.tsLoader",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstsloader",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolstsloader",target:"_blank",rel:"noopener noreferrer",children:"tools.tsLoader"}),"。\n"]})})]}),"\n","\n",(0,d.jsx)(l.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);