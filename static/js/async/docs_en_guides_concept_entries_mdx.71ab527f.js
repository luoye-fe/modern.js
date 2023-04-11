(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_concept_entries_mdx"],{39592:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return a},default:function(){return c}});var r=t("12151"),s=t("23169"),i={sidebar_position:1},o="Entries",a=[{text:"What is an Entry",depth:2,id:"what-is-an-entry"},{text:"Single Entry and Multiple Entries",depth:2,id:"single-entry-and-multiple-entries"},{text:"Entry Type",depth:2,id:"entry-type"},{text:"Framework Mode Entry",depth:3,id:"framework-mode-entry"},{text:"Conventional Routing",depth:4,id:"conventional-routing"},{text:"Custom Routing",depth:4,id:"custom-routing"},{text:"Custom App",depth:4,id:"custom-app"},{text:"Build Mode Entry",depth:3,id:"build-mode-entry"},{text:"Custom Entry",depth:2,id:"custom-entry"},{text:"Disable Default Entries",depth:3,id:"disable-default-entries"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",ol:"ol",li:"li",h3:"h3",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"entries",children:["Entries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entries",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Through this chapter, you can learn about the entry convention in Modern.js and how to customize the entry."}),"\n",(0,r.jsxs)(n.h2,{id:"what-is-an-entry",children:["What is an Entry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-an-entry",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Entry is the starting module of a page."})}),"\n",(0,r.jsx)(n.p,{children:"In the Modern.js project, each entry corresponds to an independent page, and also corresponds to a server route. By default, Modern.js will automatically determine the entry of the page based on the directory convention, and also supports customizing the entry through configuration items."}),"\n",(0,r.jsx)(n.p,{children:"Many configuration items provided by Modern.js are divided by entry, such as page title, HTML template, page Meta information, whether to enable SSR/SSG, server-side routing rules, etc."}),"\n",(0,r.jsxs)(n.h2,{id:"single-entry-and-multiple-entries",children:["Single Entry and Multiple Entries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#single-entry-and-multiple-entries",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The project initialized by Modern.js is single-entry (SPA), and the project structure is as follows:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:".\n├── src\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n├── package.json\n├── modern.config.ts\n└── tsconfig.json\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js can easily switch from single entry to multiple entry. You can execute ",(0,r.jsx)(n.code,{children:"pnpm run new"})," under the project to create entry through generator:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:'? Action: Create project element\n? Create project element: New "entry"\n? Entry name: new-entry\n'})})]})}),"\n",(0,r.jsxs)(n.p,{children:["After execution, Modern.js will automatically generate a new entry directory, and you can see that the ",(0,r.jsx)(n.code,{children:"src/"})," directory has the following structure:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── myapp     # Original entry\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n└── new-entry  # New entry\n    └── routes\n        ├── index.css\n        ├── layout.tsx\n        └── page.tsx\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["The original code was moved to the directory with the same name as the ",(0,r.jsx)(n.code,{children:"name"})," in the ",(0,r.jsx)(n.code,{children:"package.json"}),", and a new directory was created."]}),"\n",(0,r.jsxs)(n.p,{children:["After executing ",(0,r.jsx)(n.code,{children:"pnpm run dev"}),", you can see that a ",(0,r.jsx)(n.code,{children:"/new-entry"})," route has been added, and the migrated code route has not changed."]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["Modern.js will use the entry with the same name as the ",(0,r.jsx)(n.code,{children:"name"})," field in the package.json file as the main entry, the route of the main entry is ",(0,r.jsx)(n.code,{children:"/"}),", and the route of other entries is ",(0,r.jsx)(n.code,{children:"/{entryName}"}),".","\n",(0,r.jsxs)(n.p,{children:["For example, when ",(0,r.jsx)(n.code,{children:"name"})," in package.json is ",(0,r.jsx)(n.code,{children:"myapp"}),", ",(0,r.jsx)(n.code,{children:"src/myapp"})," will be used as the main entry of the project."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"entry-type",children:["Entry Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entry-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Different entry types have different compile and run-time behaviors. When creating a project in Modern.js, developers can manually choose to create a project in ",(0,r.jsx)(n.strong,{children:"framework mode"})," or ",(0,r.jsx)(n.strong,{children:"build mode"}),". After the creation is complete, you can see that the project template files for different modes are different."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, Modern.js will scan the files under ",(0,r.jsx)(n.code,{children:"src/"})," before starting the project, identify the entry, and generate the corresponding server-side route."]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["You can change the entry directory to another directory through ",(0,r.jsx)(n.a,{href:"/en/configure/app/source/entries-dir",children:"source.entriesDir"}),".","\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["Not all first-level directories under ",(0,r.jsx)(n.code,{children:"src/"})," will become project entries, and the directory where the entry is located must meet one of the following four conditions:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Have a ",(0,r.jsx)(n.code,{children:"routes/"})," directory"]}),"\n",(0,r.jsxs)(n.li,{children:["Has ",(0,r.jsx)(n.code,{children:"App.[jt]sx?"})," file"]}),"\n",(0,r.jsxs)(n.li,{children:["Has ",(0,r.jsx)(n.code,{children:"index.[jt]sx?"})," file"]}),"\n",(0,r.jsxs)(n.li,{children:["Has a ",(0,r.jsx)(n.code,{children:"pages/"})," directory (Modern.js 1.0 compatible)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.code,{children:"src/"})," directory meets the entry characteristics, Modern.js will consider the current project as a single-entry application."]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["In single-entry applications, the default entry is named ",(0,r.jsx)(n.code,{children:"main"}),".","\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["When the project is not a single-entry application, Modern.js will further check the first-level directory under ",(0,r.jsx)(n.code,{children:"src/"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"framework-mode-entry",children:["Framework Mode Entry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#framework-mode-entry",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Framework mode refers to the need to use the capabilities of the Modern.js framework, such as Router, SSR, integrated calls, etc. Under this kind of entry agreement, the entry defined by the developer is not the real Webpack compilation entry. Modern.js will generate an encapsulated entry when it starts, and the real entry can be found in ",(0,r.jsx)(n.code,{children:"node_modules/.modern/{entryName}/index.js"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"conventional-routing",children:["Conventional Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#conventional-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If there is a ",(0,r.jsx)(n.code,{children:"routes/"})," directory in the entry, Modern.js will scan the files under ",(0,r.jsx)(n.code,{children:"routes/"})," at startup, and automatically generate client-side routes (react-router) based on file conventions."]}),"\n",(0,r.jsxs)(n.p,{children:["For details, please refer to ",(0,r.jsx)(n.a,{href:"/en/guides/basic-features/routes",children:"routing"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"custom-routing",children:["Custom Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If there is an ",(0,r.jsx)(n.code,{children:"App.[jt]sx?"})," file in the entry, the developer can freely set the client route in this file, or not set the client route."]}),"\n",(0,r.jsxs)(n.p,{children:["For details, please refer to ",(0,r.jsx)(n.a,{href:"/en/guides/basic-features/routes",children:"routing"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"custom-app",children:["Custom App",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-app",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If there is an ",(0,r.jsx)(n.code,{children:"index.[jt]sx"})," file in the entry, and when the file exports functions by default, Modern.js will still generate the code wrapped by createApp according to the runtime settings. In the rendering process, the component wrapped by createApp is passed as a parameter to the function exported by the index file, so that developers can customize the component to be mounted on the DOM node, or add custom behavior before mounting. For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import ReactDOM from 'react-dom/client';\nimport { bootstrap } from '@modern-js/runtime';\n\nexport default (App: React.ComponentType) => {\n  // do something before bootstrap...\n  bootstrap(App, 'root', undefined, ReactDOM);\n};\n"})})]})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive warning",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["Since the bootstrap function needs to be compatible with React17 and React18, you need to manually pass in ReactDOM parameters when calling the bootstrap function.","\n"]})]}),"\n",(0,r.jsx)(n.p,{children:"The content of the file generated by Modern.js is as follows:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport customBootstrap from '@_modern_js_src/index.tsx';\nimport App from '@_modern_js_src/App';\nimport { router, state } from '@modern-js/runtime/plugins';\n\nconst IS_BROWSER = typeof window !== 'undefined' && window.name !== 'nodejs';\nconst MOUNT_ID = 'root';\n\nlet AppWrapper = null;\n\nfunction render() {\n  AppWrapper = createApp({\n    // plugin parameters for runtime...\n  })(App);\n  if (IS_BROWSER) {\n    customBootstrap(AppWrapper);\n  }\n  return AppWrapper;\n}\n\nAppWrapper = render();\n\nexport default AppWrapper;\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"build-mode-entry",children:["Build Mode Entry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-mode-entry",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Build mode refers to the ability not to use any Modern.js runtime, and the developer defines the entry of the project Webpack completely by himself."}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"index.[jt]sx"})," exists in the entry and there is no default export function, then this file is the real Webpack entry file. This is similar to ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/create-react-app",target:"_blank",rel:"noopener noreferrer",children:"Create React App"}),", you need to mount components to DOM nodes, add hot update code, etc. For example:"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"src/index.jsx"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",meta:"title=src/index.jsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\n"})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js ",(0,r.jsx)(n.strong,{children:"not recommended"})," to use this method, this method loses some capabilities of the framework, such as the ",(0,r.jsx)(n.code,{children:"runtime"})," configuration in the ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"modern.config.js"})," file will no longer take effect"]}),". But this method will be very useful when the project is migrated from other frameworks to Modern.js, such as CRA, or webpack that is manually built by yourself."]}),"\n",(0,r.jsxs)(n.h2,{id:"custom-entry",children:["Custom Entry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-entry",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Most existing projects are not built according to the directory convention of Modern.js. If you want to change to the directory structure agreed by Modern.js, there will be a certain migration cost."}),"\n",(0,r.jsxs)(n.p,{children:["In this case, instead of generating the entry using file conventions, you can manually configure the entry in ",(0,r.jsx)(n.code,{children:"modern.config.[jt]s"}),"."]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entries: {\n      // Specify a new entry named entry_customize\n      entry_customize: './src/home/test/index.ts',\n    },\n    // Disable default ingress scanning\n    disableDefaultEntries: true,\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"disable-default-entries",children:["Disable Default Entries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-default-entries",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"When using a custom entry, part of the project structure may happen to hit the directory convention of Modern.js, but in fact this part of the directory is not the real entry."}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js provides ",(0,r.jsx)(n.code,{children:"disableDefaultEntries"})," config to disable default entry scanning rules. When you need to customize the entry, you generally need to use ",(0,r.jsx)(n.code,{children:"disableDefaultEntries"})," with ",(0,r.jsx)(n.code,{children:"entries"}),". In this way, some existing projects can be quickly migrated without modifying the directory structure."]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    disableDefaultEntries: true,\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["For detailed usage, please refer to ",(0,r.jsx)(n.a,{href:"/en/configure/app/source/entries",children:"source.entries"})," and ",(0,r.jsx)(n.a,{href:"/en/configure/app/source/disable-default-entries",children:"source.disableDefaultEntries"}),".","\n"]})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);