(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_optimization_build-performance_mdx"],{31884:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return a},title:function(){return t},toc:function(){return d},default:function(){return c}});var s=i("9880"),r=i("23169"),o=i.ir(i("55331")),a={},t="Improve Build Performance",d=[{text:"General optimization strategy",depth:2,id:"general-optimization-strategy"},{text:"Upgrade Node.js version",depth:3,id:"upgrade-node-js-version"},{text:"Using Rspack build",depth:3,id:"using-rspack-build"},{text:"Using SWC or esbuild",depth:3,id:"using-swc-or-esbuild"},{text:"Avoid using ts-loader",depth:3,id:"avoid-using-ts-loader"},{text:"Development optimization strategies",depth:2,id:"development-optimization-strategies"},{text:"Enable Lazy Compilation",depth:3,id:"enable-lazy-compilation"},{text:"Adjust Source Map format",depth:3,id:"adjust-source-map-format"},{text:"Adjust Browserslist for development",depth:3,id:"adjust-browserslist-for-development"},{text:"Production optimization strategies",depth:2,id:"production-optimization-strategies"},{text:"Disable Source Map",depth:3,id:"disable-source-map"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",h3:"h3",strong:"strong",button:"button",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"improve-build-performance",children:["Improve Build Performance",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#improve-build-performance",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js Builder optimizes build performance by default, but as the project becomes larger, you may encounter some build performance problems."}),"\n",(0,s.jsx)(n.p,{children:"This document provides some optional speed-up strategies, developers can choose some of them to improve the build performance."}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"\uD83D\uDCE2 Notice"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["The strategies in ",(0,s.jsx)(n.a,{href:"/en/guide/optimization/optimize-bundle",children:"Bundle Size Optimization"})," can also be used to improve build performance, so we won't repeat them here.\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"general-optimization-strategy",children:["General optimization strategy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#general-optimization-strategy",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The following are some general optimization strategies, which can speed up the development build and production build, and some of them also optimize the bundle size."}),"\n",(0,s.jsxs)(n.h3,{id:"upgrade-node-js-version",children:["Upgrade Node.js version",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade-node-js-version",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In general, updating Node.js to the latest ",(0,s.jsx)(n.a,{href:"https://github.com/nodejs/release#release-schedule",target:"_blank",rel:"noopener noreferrer",children:"LTS release"})," will help improve build performance."]}),"\n",(0,s.jsx)(n.p,{children:"Especially for devices with Apple M1/M2 chips, it is recommended to use Node 16 or Node 18."}),"\n",(0,s.jsxs)(n.p,{children:["Node 16 provides Apple Silicon binaries by default, so the performance on M1/M2 models will be greatly improved than Node 14. According to our tests, ",(0,s.jsx)(n.strong,{children:"After switching from Node 14 to Node 16, the compilation speed can be improved by more than 100%"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can switch to Node 16 by following steps:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Install Node.js v16\nnvm install 16\n\n# switch to Node 16\nnvm use 16\n\n# Set Node 16 as the default version\nnvm default 16\n\n# View Node version\nnode -v\n"})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"using-rspack-build",children:["Using Rspack build",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rspack-build",children:"#"})]}),"\n","\n",(0,s.jsx)(o.default,{}),"\n",(0,s.jsxs)(n.p,{children:["If you have higher build performance requirements, you can easily switch to Rspack build mode, see ",(0,s.jsx)(n.a,{href:"/guide/advanced/rspack-start",children:"Using Rspack"})," for more information."]}),"\n",(0,s.jsxs)(n.h3,{id:"using-swc-or-esbuild",children:["Using SWC or esbuild",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-swc-or-esbuild",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://SWC.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," (Speedy Web Compiler) is a transformer and minimizer for JavaScript and TypeScript based on ",(0,s.jsx)(n.code,{children:"Rust"}),". SWC can provide the same abilities with Babel, and it's more than 10x faster than Babel."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer",children:"esbuild"})," is a front-end build tool based on Golang. It has the functions of bundling, compiling and minimizing JavaScript code. Compared with traditional tools, the performance is significantly improved. When minimizing code, compared to webpack's built-in terser minimizer, esbuild has dozens of times better performance."]}),"\n",(0,s.jsx)(n.p,{children:"Builder provides SWC plugin and esbuild plugin that allow you to use SWC or esbuild instead of babel-loader, ts-loader and terser for transformation and minification process. See:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/plugins/plugin-swc",children:"SWC plugin document"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/plugins/plugin-esbuild",children:"esbuild plugin document"})}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"SWC vs esbuild"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"The SWC compiled outputs has better compatibility, supports polyfills such as core-js, and has more complete features, so it is recommended to use the SWC plugin first."})})]}),"\n",(0,s.jsxs)(n.h3,{id:"avoid-using-ts-loader",children:["Avoid using ts-loader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#avoid-using-ts-loader",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, Builder uses Babel to compile TS files. After enabling the ",(0,s.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.tsLoader"})," option, ",(0,s.jsx)(n.code,{children:"ts-loader"})," will be used to compile TS files."]}),"\n",(0,s.jsxs)(n.p,{children:["Please avoid using ",(0,s.jsx)(n.code,{children:"ts-loader"})," because it requires additional parsing and type checking, which will slow down the build."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    // remove this config\n    tsLoader: {},\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.tsLoader documentation"})," for details."]}),"\n",(0,s.jsxs)(n.h2,{id:"development-optimization-strategies",children:["Development optimization strategies",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#development-optimization-strategies",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The following are strategies for improve build performance in development environment."}),"\n",(0,s.jsxs)(n.h3,{id:"enable-lazy-compilation",children:["Enable Lazy Compilation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-lazy-compilation",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"You can enable the lazy compilation (i.e. on-demand compilation) to improve the compilation startup speed."}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: false,\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["This is an experimental feature and may not work correctly in some scenarios, see ",(0,s.jsx)(n.a,{href:"/en/api/config-experiments",children:"experiments.lazyCompilation"})," for details."]}),"\n",(0,s.jsxs)(n.h3,{id:"adjust-source-map-format",children:["Adjust Source Map format",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#adjust-source-map-format",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In order to provide a good debugging experience, Builder uses the ",(0,s.jsx)(n.code,{children:"cheap-module-source-map"})," format Source Map by default in the development environment, which is a high-quality Source Map format and will bring certain performance overhead."]}),"\n",(0,s.jsx)(n.p,{children:"You can improve build speed by adjusting the source map format of your development environment."}),"\n",(0,s.jsx)(n.p,{children:"For example to disable Source Map:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain(chain, { env }) {\n      if (env === 'development') {\n        chain.devtool(false);\n      }\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["Or set the source map format of the development environment to the cheapest ",(0,s.jsx)(n.code,{children:"eval"})," format:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain(chain, { env }) {\n      if (env === 'development') {\n        chain.devtool('eval');\n      }\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["For detailed differences between different Source Map formats, see ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/devtool/",target:"_blank",rel:"noopener noreferrer",children:"webpack - devtool"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"adjust-browserslist-for-development",children:["Adjust Browserslist for development",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#adjust-browserslist-for-development",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["This strategy is similar to ",(0,s.jsx)(n.a,{href:"/en/guide/optimization/optimize-bundle",children:'"Adjust Browserslist"'}),", the difference is that we can set different browserslist for development and production environment, thereby reducing the compilation overhead in the development environment."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, you can add the following config to ",(0,s.jsx)(n.code,{children:"package.json"}),", which means that only the latest browsers are compatible in the development environment, and the actual browsers are compatible in the production environment:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "browserslist": {\n    "production": [">0.2%", "not dead", "not op_mini all"],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  }\n}\n'})})]})}),"\n",(0,s.jsx)(n.p,{children:"Note that this strategy can lead to some differences in the build result of development production environment."}),"\n",(0,s.jsxs)(n.h2,{id:"production-optimization-strategies",children:["Production optimization strategies",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#production-optimization-strategies",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The following are strategies for improve build performance in production environment."}),"\n",(0,s.jsxs)(n.h3,{id:"disable-source-map",children:["Disable Source Map",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-source-map",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If your project does not need Source Map in the production, you can turn it off through the ",(0,s.jsx)(n.code,{children:"disableSourceMap"})," config to improve the build speed."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: true,\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/en/api/config-output",children:"output.disableSourceMap"})," for details."]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);