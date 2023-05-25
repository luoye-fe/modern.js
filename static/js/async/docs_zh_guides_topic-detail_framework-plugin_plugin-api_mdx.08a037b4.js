(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_framework-plugin_plugin-api_mdx"],{80130:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return c},default:function(){return d}});var r=i("9880"),s=i("23169"),o={title:"插件 API",sidebar_position:6},t="插件 API",c=[{text:"API",depth:2,id:"api"},{text:"useConfigContext",depth:3,id:"useconfigcontext"},{text:"useResolvedConfigContext",depth:3,id:"useresolvedconfigcontext"},{text:"useAppContext",depth:3,id:"useappcontext"},{text:"useHookRunners",depth:3,id:"usehookrunners"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"插件-api",children:["插件 API",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#插件-api",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["插件的 ",(0,r.jsx)(n.code,{children:"setup"})," 函数会接收一个 ",(0,r.jsx)(n.code,{children:"api"})," 入参，你可以调用 api 上提供的一些方法来获取到配置、应用上下文等信息。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    // 获取应用原始配置\n    const config = api.useConfigContext();\n    // 获取应用运行上下文\n    const appContext = api.useAppContext();\n    // 获取解析之后的最终配置\n    const resolvedConfig = api.useResolvedConfigContext();\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"api",children:["API",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"useconfigcontext",children:["useConfigContext",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useconfigcontext",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"用于获取应用原始配置。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const useConfigContext: () => UserConfig;\n\ninterface UserConfig {\n  source?: SourceConfig;\n  output?: OutputConfig;\n  server?: ServerConfig;\n  deploy?: DeployConfig;\n  // ...other fields\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["具体配置字段的意义请参考 ",(0,r.jsx)(n.a,{href:"/configure/app/usage",children:"配置"}),"。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该方法获取到的是只读配置，不可修改。如果需要修改配置，请使用 ",(0,r.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/hook-list#config",children:"config hook"}),"。\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"useresolvedconfigcontext",children:["useResolvedConfigContext",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useresolvedconfigcontext",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"用于获取被解析、合并之后的最终配置。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const useResolvedConfigContext: () => NormalizedConfig;\n\ninterface NormalizedConfig {\n  source: NormalizedSourceConfig;\n  output: NormalizedOutputConfig;\n  server: NormalizedServerConfig;\n  deploy: NormalizedDeployConfig;\n  _raw: UserConfig; // 原始配置对象\n  // ...other fields\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["配置字段的完整内容请参考 ",(0,r.jsx)(n.a,{href:"/configure/app/usage",children:"配置"}),"。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该方法获取到的是只读配置，不可修改。如果需要修改配置，请使用 ",(0,r.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/hook-list#config",children:"config hook"}),"。\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"useappcontext",children:["useAppContext",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useappcontext",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"用于获取应用运行上下文。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const useAppContext: () => IAppContext;\n\ninterface IAppContext {\n  appDirectory: string;\n  configFile: string | false;\n  ip?: string;\n  port?: number;\n  distDirectory: string;\n  packageName: string;\n  srcDirectory: string;\n  sharedDirectory: string;\n  nodeModulesDirectory: string;\n  internalDirectory: string;\n  plugins: {\n    cli?: any;\n    server?: any;\n  }[];\n  entrypoints: Entrypoint[];\n  serverRoutes: ServerRoute[];\n  htmlTemplates: HtmlTemplates;\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"usehookrunners",children:["useHookRunners",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usehookrunners",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"用于获取 Hooks 的执行器，并触发特定的 Hook 执行。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    const hookRunners = api.useHookRunners();\n    // 触发 afterBuild Hook\n    await hookRunners.afterBuild();\n  },\n});\n"})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);