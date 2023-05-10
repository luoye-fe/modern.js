(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_framework-plugin_extend_mdx"],{77547:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return r},toc:function(){return a},default:function(){return d}});var o=s("9880"),i=s("23169"),l={title:"扩展插件 Hook",sidebar_position:5},r="扩展插件 Hook",a=[{text:"示例",depth:2,id:"示例"},{text:"创建 Hook",depth:3,id:"创建-hook"},{text:"使用 Hook",depth:3,id:"使用-hook"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"扩展插件-hook",children:["扩展插件 Hook",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展插件-hook",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["本小节介绍如何通过动态注册 ",(0,o.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/hook",children:"Hook 模型"})," 的方式来扩展插件 Hook。"]}),"\n",(0,o.jsxs)(n.h2,{id:"示例",children:["示例",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"这里我们用一个简单的例子演示一下。假设我们要添加一些管理控制台输出信息的 Hook。"}),"\n",(0,o.jsx)(n.p,{children:"首先我们初始化一个空的项目文件，并添加基础依赖："}),"\n",(0,o.jsx)(n.div,{className:"language-",children:(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ npx @modern-js/create modern-js-demo\n"})})})}),"\n",(0,o.jsxs)(n.h3,{id:"创建-hook",children:["创建 Hook",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建-hook",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"我们先创建一个 Hook 模型："}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"config/plugin/myPlugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import { createWaterfall } from '@modern-js/plugin';\n\nconst message = createWaterfall<string[]>();\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"然后注册它："}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"config/plugin/myPlugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  registerHook: {\n    message,\n  },\n});\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"添加 Hook 类型："}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"config/plugin/myPlugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"declare module '@modern-js/core' {\n  export interface Hooks {\n    message: typeof message;\n  }\n}\n"})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"使用-hook",children:["使用 Hook",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-hook",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["创建插件，通过 ",(0,o.jsx)(n.code,{children:"commands"})," Hook 函数，添加命令处理逻辑："]}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"config/plugin/myPlugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    return {\n      commands({ program }) {\n        program.command('message').action(async () => {\n          const hookRunners = api.useHookRunners();\n          const messages = hookRunners.message([]);\n          console.log(messages.join('\\n'));\n        });\n      },\n    };\n  },\n});\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["最后 ",(0,o.jsx)(n.code,{children:"config/plugin/myPlugin.ts"})," 的状态是："]}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"config/plugin/myPlugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import { createWaterfall } from '@modern-js/plugin';\nimport type { CliPlugin } from '@modern-js/core';\n\nconst message = createWaterfall<string[]>();\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  registerHook: {\n    message,\n  },\n\n  setup(api) {\n    return {\n      commands({ program }) {\n        program.command('message').action(async () => {\n          const hookRunners = api.useHookRunners();\n          const messages = hookRunners.message([]);\n          console.log(messages.join('\\n'));\n        });\n      },\n    };\n  },\n});\n\ndeclare module '@modern-js/core' {\n  export interface Hooks {\n    message: typeof message;\n  }\n}\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["然后在 ",(0,o.jsx)(n.code,{children:"modern.config.ts"})," 中添加这个插件："]}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\nimport myPlugin from './config/plugin/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["这时运行 ",(0,o.jsx)(n.code,{children:"npx modern message"})," 就会执行相关逻辑，但由于没有收集到任何信息，所以控制台输出为空。"]}),"\n",(0,o.jsx)(n.p,{children:"那这里我们添加一个："}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"config/plugin/otherPlugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=config/plugin/otherPlugin.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'other-plugin',\n\n  setup(api) {\n    return {\n      message(list) {\n        return [...list, '[foo] line 0', '[foo] line 1'];\n      },\n    };\n  },\n});\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"将它添加到配置中："}),"\n",(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\nimport myPlugin from './config/plugin/myPlugin';\nimport otherPlugin from './config/plugin/otherPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin(), otherPlugin()],\n});\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["这时运行 ",(0,o.jsx)(n.code,{children:"npx modern message"})," 就可以在控制台看到信息了："]}),"\n",(0,o.jsx)(n.div,{className:"language-",children:(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ modern message\n[foo] line 0\n[foo] line 1\n"})})})}),"\n",(0,o.jsx)(n.p,{children:"以上面这种方式就可以扩展出拥有各种能力的插件 Hook。"})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}]);