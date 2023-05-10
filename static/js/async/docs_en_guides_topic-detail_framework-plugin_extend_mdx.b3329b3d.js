(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_framework-plugin_extend_mdx"],{74441:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return l},toc:function(){return c},default:function(){return r}});var o=s("9880"),i=s("23169"),a={title:"Extending",sidebar_position:5},l="Extending Plugin Hooks",c=[{text:"Example",depth:2,id:"example"},{text:"Creating Hooks",depth:3,id:"creating-hooks"},{text:"Using Hooks",depth:3,id:"using-hooks"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"extending-plugin-hooks",children:["Extending Plugin Hooks",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extending-plugin-hooks",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["This section describes how to extend plugin Hooks by dynamically registering ",(0,o.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/hook",children:"Hook models"}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"example",children:["Example",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Here is a simple example to demonstrate how to extend plugin Hooks by adding Hooks that manage console output."}),"\n",(0,o.jsx)(n.p,{children:"First, we initialize an empty project file and add basic dependencies:"}),"\n",(0,o.jsx)(n.div,{className:"language-",children:(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ npx @modern-js/create modern-js-demo\n"})})]})}),"\n",(0,o.jsxs)(n.h3,{id:"creating-hooks",children:["Creating Hooks",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#creating-hooks",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"First, let's create a Hook model:"}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"config/plugin/myPlugin.ts"}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import { createWaterfall } from '@modern-js/plugin';\n\nconst message = createWaterfall<string[]>();\n"})})]})]}),"\n",(0,o.jsx)(n.p,{children:"then register:"}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"config/plugin/myPlugin.ts"}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  registerHook: {\n    message,\n  },\n});\n"})})]})]}),"\n",(0,o.jsx)(n.p,{children:"add Hook types:"}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"config/plugin/myPlugin.ts"}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"declare module '@modern-js/core' {\n  export interface Hooks {\n    message: typeof message;\n  }\n}\n"})})]})]}),"\n",(0,o.jsxs)(n.h3,{id:"using-hooks",children:["Using Hooks",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-hooks",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Create a plugin and add command handling logic through the ",(0,o.jsx)(n.code,{children:"commands"})," Hook function:"]}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"config/plugin/myPlugin.ts"}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    return {\n      commands({ program }) {\n        program.command('message').action(async () => {\n          const hookRunners = api.useHookRunners();\n          const messages = hookRunners.message([]);\n          console.log(messages.join('\\n'));\n        });\n      },\n    };\n  },\n});\n"})})]})]}),"\n",(0,o.jsxs)(n.p,{children:["now ",(0,o.jsx)(n.code,{children:"config/plugin/myPlugin.ts"})," is:"]}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"config/plugin/myPlugin.ts"}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import { createWaterfall } from '@modern-js/plugin';\nimport type { CliPlugin } from '@modern-js/core';\n\nconst message = createWaterfall<string[]>();\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  registerHook: {\n    message,\n  },\n\n  setup(api) {\n    return {\n      commands({ program }) {\n        program.command('message').action(async () => {\n          const hookRunners = api.useHookRunners();\n          const messages = hookRunners.message([]);\n          console.log(messages.join('\\n'));\n        });\n      },\n    };\n  },\n});\n\ndeclare module '@modern-js/core' {\n  export interface Hooks {\n    message: typeof message;\n  }\n}\n"})})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Then add this plugin in ",(0,o.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\nimport myPlugin from './config/plugin/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Now, run ",(0,o.jsx)(n.code,{children:"npx modern message"}),", and the related logic will be executed, but no information is collected, so the console output is empty."]}),"\n",(0,o.jsx)(n.p,{children:"add:"}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"config/plugin/otherPlugin.ts"}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=config/plugin/otherPlugin.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'other-plugin',\n\n  setup(api) {\n    return {\n      message(list) {\n        return [...list, '[foo] line 0', '[foo] line 1'];\n      },\n    };\n  },\n});\n"})})]})]}),"\n",(0,o.jsx)(n.p,{children:"add to config:"}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\nimport myPlugin from './config/plugin/myPlugin';\nimport otherPlugin from './config/plugin/otherPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin(), otherPlugin()],\n});\n"})})]})]}),"\n",(0,o.jsxs)(n.p,{children:["run ",(0,o.jsx)(n.code,{children:"npx modern message"}),", then we can get follow in console:"]}),"\n",(0,o.jsx)(n.div,{className:"language-",children:(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ modern message\n[foo] line 0\n[foo] line 1\n"})})]})}),"\n",(0,o.jsx)(n.p,{children:"By using the above approach, you can extend plugin Hooks with various capabilities."})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(t,e)})):t(e)}}}]);