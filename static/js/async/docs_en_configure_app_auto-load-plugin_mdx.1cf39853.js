(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_auto-load-plugin_mdx"],{26980:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return t},toc:function(){return l},default:function(){return d}});var i=s("9880"),o=s("23169"),a={title:"autoLoadPlugins",sidebar_position:11},t="autoLoadPlugins",l=[{text:"Manual Registration Plugin",depth:3,id:"manual-registration-plugin"},{text:"Auto Registration plugin",depth:3,id:"auto-registration-plugin"}];function r(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",div:"div",button:"button",pre:"pre",ol:"ol"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"autoloadplugins",children:["autoLoadPlugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#autoloadplugins",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Used to configure whether Modern.js enables auto-registration of plugins."}),"\n",(0,i.jsxs)(n.h3,{id:"manual-registration-plugin",children:["Manual Registration Plugin",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manual-registration-plugin",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, installing the plugin requires you to register the plugin manually in the ",(0,i.jsx)(n.code,{children:"modern.config.ts"}),"."]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport i18nPlugin from '@modern-js/plugin-i18n';\n\nexport default defineConfig({\n  plugins: [appTools(), i18nPlugin()],\n});\n"})})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"auto-registration-plugin",children:["Auto Registration plugin",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#auto-registration-plugin",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In addition to means registration, Modern.js also provides a way to automatically register plugins: set the ",(0,i.jsx)(n.code,{children:"autoLoadPlugin"})," configuration item to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  autoLoadPlugins: true,\n});\n"})})]})]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js will help you automatically register the plugin by following these steps"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Modern.js maintains an official list of plugins internally."}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"const InternalPlugins = ['@modern-js/app-tools', '@modern-js/plugin-i18n', ...];\n"})})]})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Modern.js will read your ",(0,i.jsx)(n.code,{children:"package.json"})," and collect the dependency information."]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'"dependencies": {\n  "@modern-js/plugin-i18n": "x.x.x"\n  ...\n},\n"devDependencies": {\n  "@modern-js/app-tools": "x.x.x"\n  ...\n}\n'})})]})]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Modern.js observes that when you install dependencies such as ",(0,i.jsx)(n.code,{children:"@modern-js/plugin-i18n"})," and ",(0,i.jsx)(n.code,{children:"@modern-js/app-tools"}),", automatic plugin registration will be imported."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You can notice that this approach is relatively black-box and you are not even aware of the process of loading the plugin. We want to expose more details to the developer and be able to let the developer control the process."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Therefore we recommend you to register the plugin manually."})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(r,e)})):r(e)}}}]);