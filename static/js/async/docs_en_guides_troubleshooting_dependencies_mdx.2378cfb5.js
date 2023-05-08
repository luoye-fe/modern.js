(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_troubleshooting_dependencies_mdx"],{2907:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return a},toc:function(){return i},default:function(){return c}});var r=s("12151"),t=s("23169"),o={sidebar_position:1},a="Dependencies FAQ",i=[{text:"How to check the actual installed version of a dependency in the project?",depth:3,id:"how-to-check-the-actual-installed-version-of-a-dependency-in-the-project?"},{text:'The engine "node" is incompatible when installing dependencies?',depth:3,id:'the-engine-"node"-is-incompatible-when-installing-dependencies?'},{text:"ReactNode type error after upgrading dependencies?",depth:3,id:"reactnode-type-error-after-upgrading-dependencies?"},{text:"After pnpm install, there are some peer dependencies warnings in the console?",depth:3,id:"after-pnpm-install,-there-are-some-peer-dependencies-warnings-in-the-console?"},{text:"What is the minimum React version supported by the Modern.js framework?",depth:3,id:"what-is-the-minimum-react-version-supported-by-the-modern-js-framework?"}];function d(e){var n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",code:"code",strong:"strong",div:"div",button:"button",pre:"pre",hr:"hr",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"dependencies-faq",children:["Dependencies FAQ",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dependencies-faq",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"how-to-check-the-actual-installed-version-of-a-dependency-in-the-project?",children:["How to check the actual installed version of a dependency in the project?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-check-the-actual-installed-version-of-a-dependency-in-the-project?",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"ls"})," command that provided by the package manager to view the dependencies version."]}),"\n",(0,r.jsx)(n.p,{children:"The following are some basic examples, please refer to the documentation of each package manager for detailed usage."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"npm / yarn"})}),"\n",(0,r.jsxs)(n.p,{children:["For projects using npm or yarn, the ",(0,r.jsx)(n.code,{children:"npm ls"})," command can be used."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, execute ",(0,r.jsx)(n.code,{children:"npm ls @modern-js/core"}),", you can see the following results:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:"project\n└─┬ @modern-js/app-tools@2.0.0\n  └── @modern-js/core@2.0.0\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"pnpm"})}),"\n",(0,r.jsxs)(n.p,{children:["For projects using pnpm, you can use ",(0,r.jsx)(n.code,{children:"pnpm ls"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, execute ",(0,r.jsx)(n.code,{children:"pnpm ls @modern-js/core --depth Infinity"}),", you can see the following results:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:"devDependencies:\n@modern-js/app-tools 2.0.0\n└── @modern-js/core 2.0.0\n"})})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:'the-engine-\\"node\\"-is-incompatible-when-installing-dependencies?',children:['The engine "node" is incompatible when installing dependencies?',(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:'#the-engine-\\"node\\"-is-incompatible-when-installing-dependencies?',children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"If the following error message appears when installing dependencies, it means that the version of Node.js used in the current environment is too low, and Node.js needs to be upgraded to a higher version."}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:'The engine "node" is incompatible with this module.\n\nExpected version ">=14.17.6". Got "12.20.1"\n'})})]})}),"\n",(0,r.jsxs)(n.p,{children:["When using Modern.js, it is recommended to use ",(0,r.jsx)(n.a,{href:"https://nodejs.org/download/release/latest-v14.x/",target:"_blank",rel:"noopener noreferrer",children:"Node.js 14.x"})," or ",(0,r.jsx)(n.a,{href:"https://nodejs.org/download/release/latest-v16.x/",target:"_blank",rel:"noopener noreferrer",children:"Node.js 16.x"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the Node.js version in the current environment is lower than the required version, you can use ",(0,r.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," or [fnm](",(0,r.jsx)(n.a,{href:"https://github.com/Schniz",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/Schniz"})," /fnm) and other tools for version switching."]}),"\n",(0,r.jsx)(n.p,{children:"Here's an example using nvm:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:"# Install Node.js v14\nnvm install 14\n\n# Switch to Node 14\nnvm use 14\n\n# Set Node 14 as the default version\nnvm default 14\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["It is recommended to use ",(0,r.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," in the local development environment. Its usage is similar to nvm, but it has better performance than nvm."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"reactnode-type-error-after-upgrading-dependencies?",children:["ReactNode type error after upgrading dependencies?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#reactnode-type-error-after-upgrading-dependencies?",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If the following types of errors are reported after upgrading the project's dependencies, it means that the wrong ",(0,r.jsx)(n.code,{children:"@types/react"})," version is installed in the project."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"The types returned by 'render()' are incompatible between these types.\nType 'React.ReactNode' is not assignable to type 'import(\"/node_modules/@types/react/index\").ReactNode'.\nType '{}' is not assignable to type 'ReactNode'.\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["The reason for this problem is that the ReactNode type definitions in React 18 and React 16/17 are different. If there are multiple different ",(0,r.jsx)(n.code,{children:"@types/react"})," versions in the project, there will be a ReactNode type conflict, resulting in the above error."]}),"\n",(0,r.jsxs)(n.p,{children:["The solution is to lock ",(0,r.jsx)(n.code,{children:"@types/react"})," and ",(0,r.jsx)(n.code,{children:"@types/react-dom"})," in the project to a unified version, such as ",(0,r.jsx)(n.code,{children:"v17"}),"."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@types/react": "^17",\n  "@types/react-dom": "^17"\n}\n'})})]})}),"\n",(0,r.jsxs)(n.p,{children:["For the method of locking the dependency version, please refer to ",(0,r.jsx)(n.a,{href:"/guides/get-started/upgrade",children:"Lock nested dependency"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"after-pnpm-install,-there-are-some-peer-dependencies-warnings-in-the-console?",children:["After pnpm install, there are some peer dependencies warnings in the console?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#after-pnpm-install,-there-are-some-peer-dependencies-warnings-in-the-console?",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The reason for this warning is that the version range of peer dependencies declared by some third-party npm packages does not match the version range installed in Modern.js."}),"\n",(0,r.jsx)(n.p,{children:"In most cases, you can ignore the peer dependency warnings because it will not affect the use of Modern.js."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"what-is-the-minimum-react-version-supported-by-the-modern-js-framework?",children:["What is the minimum React version supported by the Modern.js framework?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-the-minimum-react-version-supported-by-the-modern-js-framework?",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The recommended React version for ",(0,r.jsx)(n.strong,{children:"Modern.js framework is >= 18.0.0"}),", and different features have different React version requirements."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If you are using React 17, some framework features, such as Steaming SSR, will not be available as they rely on new features provided by React 18."}),"\n",(0,r.jsx)(n.li,{children:"If you're still using React 16, you won't be able to use Modern.js's runtime or server-side featurs. You can consider using Modern.js's build mode, that is, only use Modern.js as a builder. In this case, you can still use React 16."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In a future major release of Modern.js, we will remove support for React 16 and React 17. Please upgrade to React 18+ as soon as possible."})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);