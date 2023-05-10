(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_introduce_mdx"],{57310:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return i},toc:function(){return a},default:function(){return l}});var d=s("9880"),c=s("23169"),r={sidebar_position:1},i="介绍",a=[{text:"生成器插件构成",depth:2,id:"生成器插件构成"},{text:"生成器插件分类",depth:2,id:"生成器插件分类"},{text:"类型定义",depth:3,id:"类型定义"},{text:"扩展工程方案",depth:4,id:"扩展工程方案"},{text:"创建工程方案场景",depth:4,id:"创建工程方案场景"},{text:"自定义(custom)类型",depth:3,id:"自定义(custom)类型"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",button:"button",pre:"pre",ol:"ol",li:"li",h3:"h3",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"介绍",children:["介绍",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modern.js 支持通过生成器插件的方式对提供的工程方案进行定制化或针对工程方案进行特定场景的定制化。"}),"\n",(0,d.jsxs)(n.h2,{id:"生成器插件构成",children:["生成器插件构成",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#生成器插件构成",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["生成器插件是一个模块，可以直接使用 Modern.js 的模块工程方案开发。当然，Modern.js 也提供了对应的生成器插件(",(0,d.jsx)(n.code,{children:"@modern-js/generator-plugin-plugin"}),")直接新建生成器插件项目。"]}),"\n",(0,d.jsx)(n.p,{children:"一个生成器插件项目目录如下："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:".\n├── README.md\n├── package.json\n├── src\n│   ├── index.ts\n│   └── modern-app-env.d.ts\n├── templates\n└── tsconfig.json\n"})})]})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"src/index.ts"})," 中为源码目录，用于开发生成器插件逻辑。插件默认导出一个函数，函数参数为 ",(0,d.jsx)(n.code,{children:"context"}),"，",(0,d.jsx)(n.code,{children:"context"})," 上提供一些方法可直接对当前项目进行操作，本章节后续将详细介绍这些方法。"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"templates"})," 目录为模板目录，用于存在生成器插件中需要使用的模板文件。"]}),"\n",(0,d.jsxs)(n.h2,{id:"生成器插件分类",children:["生成器插件分类",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#生成器插件分类",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"生成器插件分为两种："}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"扩展工程方案：直接对默认提供的三大工程方案进行定制化"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"创建工程方案场景：基于默认的三大工程方案创建对应的工程方案场景"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"类型定义",children:["类型定义",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#类型定义",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["生成器插件的分类通过 ",(0,d.jsx)(n.code,{children:"package.json"})," 中的 ",(0,d.jsx)(n.code,{children:"meta"})," 信息提供。"]}),"\n",(0,d.jsxs)(n.h4,{id:"扩展工程方案",children:["扩展工程方案",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展工程方案",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "meta": {\n    "extend": "mwa"\n  }\n}\n'})})]})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"extend"})," 为扩展的工程方案名称，Modern.js 的工程方案名称分别为 ",(0,d.jsx)(n.code,{children:"mwa"}),"、",(0,d.jsx)(n.code,{children:"module"}),"、 ",(0,d.jsx)(n.code,{children:"monorepo"}),"。"]}),"\n",(0,d.jsxs)(n.h4,{id:"创建工程方案场景",children:["创建工程方案场景",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建工程方案场景",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "meta": {\n    "key": "new_solution",\n    "name": "新工程方案",\n    "type": "mwa"\n  }\n}\n'})})]})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"key"})," 为场景方案名称，值为字符串。\n",(0,d.jsx)(n.code,{children:"name"})," 为场景方案展示名称，用与使用时选项的展示，值为字符串。\n",(0,d.jsx)(n.code,{children:"type"})," 为工程方案类型，除了和 ",(0,d.jsx)(n.code,{children:"extend"})," 一样支持三种工程方案之外，还支持自定义(custom)类型。"]}),"\n",(0,d.jsxs)(n.h3,{id:"自定义(custom)类型",children:["自定义(custom)类型",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义(custom)类型",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["自定义类型提供了完全自定义工程方案的实现能力，当使用该类型新建工程方案场景时，只提供了少量的开发层面的最佳实践的代码，比如 ",(0,d.jsx)(n.code,{children:".gitignore"}),"、",(0,d.jsx)(n.code,{children:".editorConfig"})," 等文件，具体为下方目录结构："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{children:".\n├── .editorconfig\n├── .gitignore\n├── .idea\n│   ├── codeStyles\n│   │   ├── Project.xml\n│   │   └── codeStyleConfig.xml\n│   ├── inspectionProfiles\n│   │   └── Project_Default.xml\n│   └── jsLinters\n│       └── eslint.xml\n├── .nvmrc\n└── .vscode\n    ├── extensions.json\n    └── settings.json\n"})})]})}),"\n",(0,d.jsx)(n.p,{children:"自定义类型保证了可根据自身对工程方案的需求灵活进行配置。"})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(o,e)})):o(e)}}}]);