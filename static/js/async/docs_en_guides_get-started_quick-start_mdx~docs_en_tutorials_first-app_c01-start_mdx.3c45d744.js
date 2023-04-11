(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_get-started_quick-start_mdx~docs_en_tutorials_first-app_c01-start_mdx"],{73407:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=s("12151"),r=s("23169");function a(e){var n=Object.assign({p:"p",a:"a",strong:"strong",div:"div",button:"button",pre:"pre",code:"code"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Before getting started, you will need to install ",(0,t.jsx)(n.a,{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer",children:"Node.js"}),", and ensure that your Node.js version is higher than 14.17.6. ",(0,t.jsx)(n.strong,{children:"We recommend using the LTS version of Node.js 16."})]}),"\n",(0,t.jsx)(n.p,{children:"You can check the currently used Node.js version with the following command:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"node -v\n# v16.19.1\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["If you do not have Node.js installed in your current environment, or the installed version is lower than 14.17.6, you can use ",(0,t.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," to install the required version."]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of how to install the Node.js 16 LTS version via nvm:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Install the long-term support version of Node.js 16\nnvm install 16 --lts\n\n# Make the newly installed Node.js 16 as the default version\nnvm alias default 16\n\n# Switch to the newly installed Node.js 16\nnvm use 16\n"})})]})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"nvm and fnm"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:"Both nvm and fnm are Node.js version management tools. Relatively speaking, nvm is more mature and stable, while fnm is implemented using Rust, which provides better performance than nvm."})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},23878:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=s("12151"),r=s("23169");function a(e){var n=Object.assign({p:"p",div:"div",button:"button",pre:"pre",code:"code"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Modern.js generator will provide an interactive Q & A interface, initialization items according to the result, according to the default selection:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"? Please select the solution you want to create: Web App\n? Development Language: TS\n? Package Manager: pnpm\n"})})]})}),"\n",(0,t.jsx)(n.p,{children:"After create the project, Modern.js automatically installs dependency and creates a git repository."}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"[INFO] dependencies are automatically installed\n[INFO] git repository has been automatically created\n[INFO] Success！\nYou can run the following command in the directory of the new project:\npnpm run dev          # Run and debug the project according to the requirements of the development environment\npnpm run build        # Build the project according to the requirements of the product environment\npnpm run serve        # Run the project according to the requirements of the product environment\npnpm run lint         # Check and fix all codes\npnpm run new          # Create more project elements, such as application portals\n"})})]})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive note",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["In addition to working during project initialization, the Modern.js generator can also generate modules of the project in subsequent development, which is not thrown away as soon as it is used.","\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"Now, the project structure is as follows:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{children:".\n├── src\n│   ├── modern-app-env.d.ts\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n├── modern.config.ts\n├── package.json\n├── pnpm-lock.yaml\n├── README.md\n└── tsconfig.json\n"})})]})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},4845:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=s("12151"),r=s("23169"),a=s.ir(s("73407"));function o(e){var n=Object.assign({h3:"h3",a:"a",p:"p",div:"div",button:"button",pre:"pre",code:"code"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h3,{id:"node.js",children:["Node.js",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#node.js",children:"#"})]}),"\n","\n",(0,t.jsx)(a.default,{}),"\n",(0,t.jsxs)(n.h3,{id:"pnpm",children:["pnpm",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpm",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["It is recommended to use ",(0,t.jsx)(n.a,{href:"https://pnpm.io/installation",target:"_blank",rel:"noopener noreferrer",children:"pnpm"})," to manage dependencies:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -g pnpm@7\n"})})]})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive note",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["Modern.js also supports dependency management with ",(0,t.jsx)(n.code,{children:"yarn"})," and ",(0,t.jsx)(n.code,{children:"npm"}),".","\n"]})]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);