(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_eslint_mdx"],{6932:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return r},title:function(){return o},toc:function(){return a},default:function(){return c}});var t=i("9880"),s=i("23169"),r={title:"ESLint",sidebar_position:8},o="ESLint",a=[{text:"Q: How To Deal With Lint",depth:2,id:"q:-how-to-deal-with-lint"},{text:"Automatic Fix",depth:3,id:"automatic-fix"},{text:"Batch Automatic Fix",depth:3,id:"batch-automatic-fix"},{text:"Manual Fix",depth:3,id:"manual-fix"},{text:"Claim Exceptions",depth:3,id:"claim-exceptions"},{text:"Q: How to customize ESLint rules",depth:2,id:"q:-how-to-customize-eslint-rules"},{text:"The eslintConfig field in package.json in the root directory",depth:3,id:"the-eslintconfig-field-in-packagejson-in-the-root-directory"},{text:"src/.eslintrc.js",depth:3,id:"src/eslintrcjs"},{text:"eslintIgnore field in package.json",depth:3,id:"eslintignore-field-in-packagejson"},{text:"Q: How to upgrade the version of the ESLint plugin",depth:2,id:"q:-how-to-upgrade-the-version-of-the-eslint-plugin"},{text:"Q: WebStorm sometimes reports ESLint errors",depth:2,id:"q:-webstorm-sometimes-reports-eslint-errors"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",h2:"h2",h3:"h3",div:"div",pre:"pre",ul:"ul",li:"li",img:"img"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"eslint",children:["ESLint",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eslint",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Modern.js ESLint Rules"})," is the full set of ",(0,t.jsx)(n.strong,{children:"ESLint"})," rules, includes ",(0,t.jsx)(n.code,{children:"@modern-js"})," (Lint rules for Node.js projects) and ",(0,t.jsx)(n.code,{children:"@modern-js-app"})," (Lint rules for web projects)."]}),"\n",(0,t.jsx)(n.p,{children:"More ESLint usage is described below with specific questions."}),"\n",(0,t.jsxs)(n.h2,{id:"q:-how-to-deal-with-lint",children:["Q: How To Deal With Lint",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#q:-how-to-deal-with-lint",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"automatic-fix",children:["Automatic Fix",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#automatic-fix",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Most problems will be solved by the automatic fix of ESLint rules or the code formatting of ",(0,t.jsx)(n.a,{href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer",children:"Prettier"})," (which has been integrated into ESLint), and the developer does not need to care about the details of the problem and how to solve it."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsx)(n.p,{children:"This kind of automatic fix is mainly performed when the IDE saves the file, and a few will be automatically fix on submit."})})]}),"\n",(0,t.jsxs)(n.h3,{id:"batch-automatic-fix",children:["Batch Automatic Fix",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#batch-automatic-fix",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"In rare cases, such as when an old project is migrated, the following commands can be executed to repair and inspect all files in bulk:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run lint:error\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"manual-fix",children:["Manual Fix",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manual-fix",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"For problems that cannot be automatically fixed, you can click the rule link in the problem prompt box in the IDE to open the document of this rule to view the explanation and solution of the problem."}),"\n",(0,t.jsxs)(n.h3,{id:"claim-exceptions",children:["Claim Exceptions",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#claim-exceptions",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"At this stage, some rules are not smart enough, and in most cases there will be great benefits, and in a few cases it may not apply. But if the entire rule is turned off or changed for these few cases, the gain is not worth the loss."}),"\n",(0,t.jsxs)(n.p,{children:["In this case, you can use the ",(0,t.jsx)(n.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"noopener noreferrer",children:"eslint-disable"})," comment to mark the code blocks that meet the ",(0,t.jsx)(n.strong,{children:"rare case"}),", stating that this is an exception and should be ignored. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"/* eslint-disable filenames/match-exported */\n...\n/* eslint-enable filenames/match-exported */\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["Enter eslint in the VS Code editor, a prompt box about ",(0,t.jsx)(n.code,{children:"eslint-disable"})," will automatically appear, select the prompt option to generate the corresponding comment pair.\n"]})})]}),"\n",(0,t.jsxs)(n.p,{children:["[Modern.js ESLint Rule Set] requires that ",(0,t.jsx)(n.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"noopener noreferrer",children:"eslint-disable"})," must be used in pairs, the scope to be affected must be clearly expressed, and what rules to disable within this scope must be clearly expressed, the purpose is to make ",(0,t.jsx)(n.strong,{children:"exceptions"})," Clear, minimized scope to avoid abuse of ",(0,t.jsx)(n.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"noopener noreferrer",children:"eslint-disable"}),", resulting in code that does not belong to the exception being disabled by the rule."]}),"\n",(0,t.jsxs)(n.h2,{id:"q:-how-to-customize-eslint-rules",children:["Q: How to customize ESLint rules",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#q:-how-to-customize-eslint-rules",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"the-eslintconfig-field-in-packagejson-in-the-root-directory",children:["The ",(0,t.jsx)(n.code,{children:"eslintConfig"})," field in ",(0,t.jsx)(n.code,{children:"package.json"})," in the root directory",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#the-eslintconfig-field-in-packagejson-in-the-root-directory",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"This place is the default ESLint configuration for the entire repository and is designed for pure Node.js code (which can only run in Node.js)."}),"\n",(0,t.jsx)(n.p,{children:"If the project does have special requirements or inevitable compatibility issues with some rules (not exceptions), you can add rule configuration here. This configuration will take precedence over the default [Modern.js ESLint ruleset], such as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:' "eslintConfig": {\n    "extends": [\n      "@modern-js"\n    ],\n    "rules": {\n      "filenames/match-exported": "off"\n    }\n  },\n\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"src/eslintrcjs",children:[(0,t.jsx)(n.code,{children:"src/.eslintrc.js"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#src/eslintrcjs",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"The application project and module project of Modern.js will have this configuration file by default in the source code directory, which is designed for Universal JS code."}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsx)(n.p,{children:"Universal JS code is code that can run on both the browser side and the server side."})})]}),"\n",(0,t.jsx)(n.p,{children:"If the project does have special requirements or inevitable compatibility issues with some rules (not exceptions), you can add a rule configuration here, which will take precedence over the default [Modern.js ESLint ruleset], such as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// eslint-disable-next-line import/no-commonjs\nmodule.exports = {\n  root: true,\n  extends: ['@modern-js-app'],\n  parserOptions: {\n    tsconfigRootDir: __dirname,\n    project: ['../tsconfig.json'],\n  },\n  rules: {\n    'filenames/match-exported': 'off',\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If necessary, you can continue to add the ",(0,t.jsx)(n.code,{children:".eslintrc.js"})," file in different subdirectories, and make special configuration for the code in this subdirectory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  rules: {\n    'filenames/match-exported': 'off',\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["Note: It is not necessary to use the ",(0,t.jsx)(n.code,{children:"extends"})," field, it will automatically inherit the configuration of the parent directory."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h3,{id:"eslintignore-field-in-packagejson",children:[(0,t.jsx)(n.code,{children:"eslintIgnore"})," field in ",(0,t.jsx)(n.code,{children:"package.json"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eslintignore-field-in-packagejson",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Adding directories that contain ",(0,t.jsx)(n.code,{children:".js"}),", ",(0,t.jsx)(n.code,{children:".jsx"}),", ",(0,t.jsx)(n.code,{children:".ts"}),", ",(0,t.jsx)(n.code,{children:".tsx"})," files, but do not require code inspection and automatic repair, to ",(0,t.jsx)(n.code,{children:"eslintIgnore"})," can optimize the speed of ESLint inspection, such as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:' "eslintIgnore": [\n    "node_modules",\n    "dist",\n    "output"\n  ],\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"q:-how-to-upgrade-the-version-of-the-eslint-plugin",children:["Q: How to upgrade the version of the ESLint plugin",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#q:-how-to-upgrade-the-version-of-the-eslint-plugin",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:['As long as it is not a change in the Major version (the "^" symbol that does not comply with the ',(0,t.jsx)(n.a,{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer",children:"Semver"})," rule), you can specify this dependency directly in the ",(0,t.jsx)(n.code,{children:"package.json"})," of the business project, delete the Lock file (or try to manually delete the Lock file). the contents of this package name in the file), execute ",(0,t.jsx)(n.code,{children:"pnpm install"})," to reinstall the dependency and generate a new Lock file."]}),"\n",(0,t.jsxs)(n.p,{children:["After doing this, the plugin should only exist in the ",(0,t.jsx)(n.code,{children:"./node_modules"})," directory of the business project and be upgraded to the version you specified."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Major version is the major version number. For more information, please read [",(0,t.jsx)(n.a,{href:"https://semver.org/#summary",target:"_blank",rel:"noopener noreferrer",children:"Semantic Versioning"})," ]."]}),"\n",(0,t.jsxs)(n.li,{children:["All upstream projects encapsulated by Modern.js (such as ESLint, ",(0,t.jsx)(n.a,{href:"https://eslint.org/docs/user-guide/configuring/plugins#plugins",target:"_blank",rel:"noopener noreferrer",children:"ESLint plugin"}),", ",(0,t.jsx)(n.a,{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"React Router"}),", etc.) can also be upgraded in this way."]}),"\n",(0,t.jsx)(n.li,{children:"Modern.js will also try to upgrade these upstream dependencies as timely as possible in each release."}),"\n",(0,t.jsx)(n.li,{children:"Major version upgrades need to be published by Modern.js."}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"q:-webstorm-sometimes-reports-eslint-errors",children:["Q: WebStorm sometimes reports ESLint errors",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#q:-webstorm-sometimes-reports-eslint-errors",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Since WebStorm believes that the ESLint execution directory is determined based on the ",(0,t.jsx)(n.code,{children:".eslintrc'"})," file. Therefore, the placement of the ",(0,t.jsx)(n.code,{children:"src/.eslintrc"})," file location will cause the location specified by the ",(0,t.jsx)(n.code,{children:"tsconfig.json"})," file (in the project root directory) to not be found in the'src/'directory."]}),"\n",(0,t.jsx)(n.p,{children:"you need to configure it manually:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"--parser-options=project:../tsconfig.json\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/webstorm-lint-error.png",alt:"webstorm-lint-error"})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);