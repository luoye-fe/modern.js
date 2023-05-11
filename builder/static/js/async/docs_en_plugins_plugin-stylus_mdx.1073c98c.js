(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_plugins_plugin-stylus_mdx"],{46858:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return d},toc:function(){return a},default:function(){return t}});var l=s("9880"),i=s("23169"),r={},d="Stylus Plugin",a=[{text:"Quick Start",depth:2,id:"quick-start"},{text:"Install",depth:3,id:"install"},{text:"Register",depth:3,id:"register"},{text:"Example",depth:2,id:"example"},{text:"Config",depth:2,id:"config"},{text:"stylusOptions",depth:3,id:"stylusoptions"},{text:"sourceMap",depth:3,id:"sourcemap"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",div:"div",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"stylus-plugin",children:["Stylus Plugin",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylus-plugin",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"Stylus is an Expressive, dynamic and robust CSS preprocessor. This chapter introduces how to use Stylus in Builder."}),"\n",(0,l.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,l.jsxs)(n.h3,{id:"install",children:["Install",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-stylus -D\n\n#yarn\nyarn add @modern-js/builder-plugin-stylus -D\n\n#pnpm\npnpm install @modern-js/builder-plugin-stylus -D\n"})})})}),"\n",(0,l.jsxs)(n.h3,{id:"register",children:["Register",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["In upper-level frameworks such as Modern.js, you can register Stylus plugins through the ",(0,l.jsx)(n.code,{children:"builderPlugins"})," config:"]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { builderPluginStylus } from '@modern-js/builder-plugin-stylus';\n\nexport default {\n  builderPlugins: [builderPluginStylus()],\n};\n"})})})}),"\n",(0,l.jsxs)(n.p,{children:["When you call the Builder's Node API directly, you can register Stylus plugins with the ",(0,l.jsx)(n.code,{children:"addPlugins"})," method:"]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-js",children:"import { builderPluginStylus } from '@modern-js/builder-plugin-stylus';\n\n// add the plugin to the builder instance\nbuilder.addPlugins([builderPluginStylus()]);\n"})})})}),"\n",(0,l.jsxs)(n.h2,{id:"example",children:["Example",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["After installing the plugin, you can directly import ",(0,l.jsx)(n.code,{children:"*.styl"})," or ",(0,l.jsx)(n.code,{children:"*.module.styl"})," files into the code without adding other configs."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"normalize.styl"}),":"]}),"\n"]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-styl",children:"the body\n   color#000\n   font 14px Arial, sans-serif\n"})})})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"title.module.styl"}),":"]}),"\n"]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-styl",children:".title\n   font-size: 14px;\n"})})})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"index.js"}),":"]}),"\n"]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-js",children:"import './normalize.styl';\nimport style from './title.module.styl';\n\nconsole.log(style.title);\n"})})})}),"\n",(0,l.jsxs)(n.h2,{id:"config",children:["Config",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"If you need to customize the compilation behavior of Stylus, you can use the following configs."}),"\n",(0,l.jsxs)(n.h3,{id:"stylusoptions",children:["stylusOptions",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylusoptions",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"-Type:"}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-ts",children:"type StylusOptions = {\n  use?: string[];\n  include?: string;\n  import?: string;\n  resolveURL?: boolean;\n  lineNumbers?: boolean;\n  hoistAtrules?: boolean;\n};\n"})})})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Options passed to Stylus, please refer to the ",(0,l.jsx)(n.a,{href:"https://stylus-lang.com/docs/js.html",target:"_blank",rel:"noopener noreferrer",children:"Stylus documentation"})," for specific usage."]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-ts",children:"builderPluginStylus({\n  stylusOptions: {\n    lineNumbers: false,\n  },\n});\n"})})})}),"\n",(0,l.jsxs)(n.h3,{id:"sourcemap",children:["sourceMap",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcemap",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"isDev"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Whether to generate Source Map, enabled by default in the development environment."}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsx)(n.div,{className:"modern-code-content",children:(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-ts",children:"builderPluginStylus({\n  sourceMap: false,\n});\n"})})})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(c,e)})):c(e)}}}]);