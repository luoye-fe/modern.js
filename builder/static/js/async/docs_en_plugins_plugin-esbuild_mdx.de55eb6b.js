(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_plugins_plugin-esbuild_mdx"],{81764:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return r},title:function(){return a},toc:function(){return d},default:function(){return o}});var s=i("12151"),t=i("23169"),r={},a="Esbuild Plugin",d=[{text:"Quick Start",depth:2,id:"quick-start"},{text:"Used in Modern.js framework",depth:3,id:"used-in-modern-js-framework"},{text:"Use via the Node API",depth:3,id:"use-via-the-node-api"},{text:"Install",depth:4,id:"install"},{text:"Register",depth:4,id:"register"},{text:"Config",depth:2,id:"config"},{text:"loader",depth:3,id:"loader"},{text:"Set JSX Format",depth:4,id:"set-jsx-format"},{text:"Set the target environment",depth:4,id:"set-the-target-environment"},{text:"Disable transformation",depth:4,id:"disable-transformation"},{text:"minimize",depth:3,id:"minimize"},{text:"Set the target environment",depth:4,id:"set-the-target-environment-1"},{text:"Disable minification",depth:4,id:"disable-minification"},{text:"Limitations",depth:2,id:"limitations"},{text:"Compatibility",depth:3,id:"compatibility"},{text:"Not support Babel plugins",depth:3,id:"not-support-babel-plugins"},{text:"Bundle Size",depth:3,id:"bundle-size"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",h2:"h2",h3:"h3",button:"button",pre:"pre",code:"code",h4:"h4",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"esbuild-plugin",children:["Esbuild Plugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#esbuild-plugin",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer",children:"esbuild"})," is a front-end build tool based on Golang. It has the functions of bundling, compiling and minimizing JavaScript code. Compared with traditional tools, the performance is significantly improved. When minimizing code, compared to webpack's built-in terser minimizer, esbuild has dozens of times better performance."]}),"\n",(0,s.jsxs)(n.p,{children:["Builder provides esbuild plugin that allow you to use esbuild instead of babel-loader, ts-loader and terser for transformation and minification process. When you enable esbuild in a large project, ",(0,s.jsx)(n.strong,{children:"it can greatly reduce the time required for code compilation and compression, while effectively avoiding OOM (heap out of memory) problems"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"Recommend using SWC"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"We recommend using SWC to transform and minify code rather than esbuild, because SWC supports more syntaxes, provides better code compression, and the compiled code has better compatibility."}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, we recommend that you use SWC instead of esbuild, please refer to ",(0,s.jsx)(n.a,{href:"/plugins/plugin-swc",children:"SWC Plugin"})," for usage."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"used-in-modern-js-framework",children:["Used in Modern.js framework",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#used-in-modern-js-framework",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The Modern.js framework integrates the Builder's esbuild plugin by default, so you don't need to manually install and register the plugin, just use the ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/tools/esbuild.html",target:"_blank",rel:"noopener noreferrer",children:"tools.esbuild"})," configuration:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  tools: {\n    esbuild: {\n      loader: {\n        target: 'chrome61',\n      },\n      minimize: {\n        target: 'chrome61',\n      },\n    },\n  },\n});\n"})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"use-via-the-node-api",children:["Use via the Node API",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-via-the-node-api",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"If you use the Builder's Node API, you need to manually install and register the esbuild plugin."}),"\n",(0,s.jsxs)(n.h4,{id:"install",children:["Install",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-esbuild -D\n\n# yarn\nyarn add @modern-js/builder-plugin-esbuild -D\n\n# pnpm\npnpm add @modern-js/builder-plugin-esbuild -D\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"register",children:["Register",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Register esbuild plugins through the ",(0,s.jsx)(n.code,{children:"addPlugins"})," method:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"import { builderPluginEsbuild } from '@modern-js/builder-plugin-esbuild';\n\n// add the plugin to the builder instance\nbuilder.addPlugins([builderPluginEsbuild()]);\n"})})]})}),"\n",(0,s.jsxs)(n.h2,{id:"config",children:["Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The plugin will enable code transformation and minification by default. You can also customize the behavior of the plugin through configuration."}),"\n",(0,s.jsxs)(n.h3,{id:"loader",children:["loader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loader",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type LoaderOptions = EsbuildLoaderOptions | false | undefined;\n"})})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"const defaultOptions = {\n  target: 'es2015',\n  charset: builderConfig.output.charset,\n};\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"This config is used to enable JavaScript/TypeScript transformation, which will replace babel-loader and ts-loader with esbuild-loader."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to modify the options, you can check the ",(0,s.jsx)(n.a,{href:"https://github.com/privatenumber/esbuild-loader#loader",target:"_blank",rel:"noopener noreferrer",children:"esbuild-loader documentation"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"set-jsx-format",children:["Set JSX Format",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-jsx-format",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When using esbuild for transformation, esbuild will read the ",(0,s.jsx)(n.code,{children:"compilerOptions.jsx"})," field in ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," to determine which JSX syntax to use."]}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, you need to set the correct JSX syntax in ",(0,s.jsx)(n.code,{children:"tsconfig.json"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, React projects need to set ",(0,s.jsx)(n.code,{children:"compilerOptions.jsx"})," to ",(0,s.jsx)(n.code,{children:"react-jsx"}),":"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "jsx": "react-jsx"\n  }\n}\n'})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"set-the-target-environment",children:["Set the target environment",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-the-target-environment",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"target"})," option to set the target environment for transformation. ",(0,s.jsx)(n.code,{children:"target"})," can be set directly to the JavaScript language version, such as ",(0,s.jsx)(n.code,{children:"es6"}),", ",(0,s.jsx)(n.code,{children:"es2020"}),"; it can also be set to several target environments, each target environment is an environment name followed by a version number, such as ",(0,s.jsx)(n.code,{children:"['chrome58', 'edge16' ,'firefox57']"}),". For a detailed introduction of the ",(0,s.jsx)(n.code,{children:"target"})," option, please refer to ",(0,s.jsx)(n.a,{href:"https://esbuild.github.io/api/#target",target:"_blank",rel:"noopener noreferrer",children:"esbuild - target"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"target supports setting to the following environments:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"chrome"}),"\n",(0,s.jsx)(n.li,{children:"edge"}),"\n",(0,s.jsx)(n.li,{children:"firefox"}),"\n",(0,s.jsx)(n.li,{children:"ie"}),"\n",(0,s.jsx)(n.li,{children:"ios"}),"\n",(0,s.jsx)(n.li,{children:"node"}),"\n",(0,s.jsx)(n.li,{children:"opera"}),"\n",(0,s.jsx)(n.li,{children:"safari"}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"builderPluginEsbuild({\n  loader: {\n    target: 'chrome61',\n  },\n});\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"disable-transformation",children:["Disable transformation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-transformation",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:"loader"})," to ",(0,s.jsx)(n.code,{children:"false"})," to disable esbuild transformation, and Builder will continue to use Babel to transform the code."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"builderPluginEsbuild({\n  loader: false,\n});\n"})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"minimize",children:["minimize",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#minimize",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type MinimizeOptions = EsbuildMinifyOptions | false | undefined;\n"})})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"const defaultOptions = {\n  css: true,\n  target: 'es2015',\n};\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"This option is used to enable minification for JavaScript and CSS."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to modify the options, you can check the ",(0,s.jsx)(n.a,{href:"https://github.com/privatenumber/esbuild-loader#minifyplugin",target:"_blank",rel:"noopener noreferrer",children:"esbuild-loader documentation"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"set-the-target-environment-1",children:["Set the target environment",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-the-target-environment-1",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"target"})," option to set the target environment for minification."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"builderPluginEsbuild({\n  minimize: {\n    target: 'chrome61',\n  },\n});\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"disable-minification",children:["Disable minification",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-minification",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:"minimize"})," to ",(0,s.jsx)(n.code,{children:"false"})," to disable esbuild minification, and Builder will continue to use Terser to minify the code."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"builderPluginEsbuild({\n  minimize: false,\n});\n"})})]})}),"\n",(0,s.jsxs)(n.h2,{id:"limitations",children:["Limitations",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#limitations",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Although esbuild can significantly improve the build performance of existing webpack projects, it still has certain limitations that require special attention."}),"\n",(0,s.jsxs)(n.h3,{id:"compatibility",children:["Compatibility",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compatibility",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["As a compiler (i.e. ",(0,s.jsx)(n.code,{children:"loader"})," capability), esbuild usually supports at least ES2015 (that is, ES6) syntax, and does not have the ability to automatically inject Polyfill.. If the production environment needs to downgrade to ES5 and below syntax, it is recommended to use SWC compilation."]}),"\n",(0,s.jsx)(n.p,{children:"You can specify the target syntax version by following config:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"builderPluginEsbuild({\n  loader: {\n    target: 'es2015',\n  },\n});\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["As a code minify tool (i.e. ",(0,s.jsx)(n.code,{children:"minimize"})," capability), esbuild can minify the code in production environment, and usually supports ES2015 syntax at least."]}),"\n",(0,s.jsxs)(n.p,{children:["If you set the compressed ",(0,s.jsx)(n.code,{children:"target"})," to ",(0,s.jsx)(n.code,{children:"es5"}),", you need to ensure that all codes have been compiled to ES5 codes, otherwise it will cause esbuild compilation error: ",(0,s.jsx)(n.code,{children:"Transforming 'xxx' to the configured target environment (\"es5\") is not supported yet "}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Therefore, for projects that need to be compatible with ES5 and below syntax in the production environment, please be careful to enable the minimize capability, and it is recommended to use SWC compression."}),"\n",(0,s.jsx)(n.p,{children:"You can specify the target syntax version by following config:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"builderPluginEsbuild({\n  minimize: {\n    target: 'es2015',\n  },\n});\n"})})]})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive danger",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"Caution"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"Projects that need to be compatible with ES5 and below syntax in the production environment need to be careful to turn on the minimize config."})})]}),"\n",(0,s.jsxs)(n.h3,{id:"not-support-babel-plugins",children:["Not support Babel plugins",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#not-support-babel-plugins",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["As a compiler, the syntax transformation function of the original Babel plugins such as ",(0,s.jsx)(n.code,{children:"babel-plugin-import"})," is not available after esbuild is turned on. And since the bottom layer of the plugin uses esbuild's ",(0,s.jsx)(n.code,{children:"Transform API"}),", it does not support esbuild plugins to customize the compilation process."]}),"\n",(0,s.jsxs)(n.p,{children:["If you have requirements related to Babel plugins such as ",(0,s.jsx)(n.code,{children:"babel-plugin-import"}),", you can use the SWC plugin."]}),"\n",(0,s.jsxs)(n.h3,{id:"bundle-size",children:["Bundle Size",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundle-size",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Although the compression speed of esbuild is faster, the compression ratio of esbuild is lower than that of terser, so the bundle size will increase, please use it according to the scenes. Generally speaking, esbuild is more suitable for scenes that are not sensitive to bundle size."}),"\n",(0,s.jsxs)(n.p,{children:["You can refer to ",(0,s.jsx)(n.a,{href:"https://github.com/privatenumber/minification-benchmarks",target:"_blank",rel:"noopener noreferrer",children:"minification-benchmarks"})," for a detailed comparison between minimizers."]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);