(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_postcss_mdx"],{52702:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return r}});var t=n("12151"),o=n("23169");function i(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,o.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"Object | Function"})]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"const defaultOptions = {\n  postcssOptions: {\n    plugins: [\n      require('postcss-flexbugs-fixes'),\n      require('postcss-custom-properties'),\n      require('postcss-initial'),\n      require('postcss-page-break'),\n      require('postcss-font-variant'),\n      require('postcss-media-minmax'),\n      require('postcss-nesting'),\n      require('autoprefixer')({\n        flexbox: 'no-2009',\n      }),\n    ],\n    // CSS Source Map enabled by default in development environment\n    sourceMap: isDev,\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["Builder integrates PostCSS by default, you can configure ",(0,t.jsx)(s.a,{href:"https://github.com/webpack-contrib/postcss-loader",target:"_blank",rel:"noopener noreferrer",children:"postcss-loader"})," through ",(0,t.jsx)(s.code,{children:"tools.postcss"}),"."]}),"\n",(0,t.jsxs)(s.h3,{id:"function-type",children:["Function Type",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"When the value is a Function, the internal default config is passed as the first parameter, and the config object can be modified directly without returning, or an object can be returned as the final result; the second parameter is a set of tool functions for modifying the postcss-loader config."}),"\n",(0,t.jsx)(s.p,{children:"For example, you need to add a PostCSS plugin on the basis of the original plugin, and push a new plugin to the postcssOptions.plugins array:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-ts",children:"export default {\n  tools: {\n    postcss: opts => {\n      opts.postcssOptions.plugins.push(require('postcss-px-to-viewport'));\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsx)(s.p,{children:"When you need to pass parameters to the PostCSS plugin, you can pass them in by function parameters:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: opts => {\n      const viewportPlugin = require('postcss-px-to-viewport')({\n        viewportWidth: 375,\n      });\n      opts.postcssOptions.plugins.push(viewportPlugin);\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"tools.postcss"})," can return a config object and completely replace the default config:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: () => {\n      return {\n        postcssOptions: {\n          plugins: [require('postcss-px-to-viewport')],\n        },\n      };\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"object-type",children:["Object Type",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["When this value is an Object, it is merged with the default config via ",(0,t.jsx)(s.code,{children:"Object.assign"}),". Note that ",(0,t.jsx)(s.code,{children:"Object.assign"})," is a shallow copy and will completely overwrite the built-in ",(0,t.jsx)(s.code,{children:"presets"})," or ",(0,t.jsx)(s.code,{children:"plugins"})," array, please use it with caution."]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: {\n      // Because `Object.assign` is used, the default postcssOptions will be overwritten.\n      postcssOptions: {\n        plugins: [require('postcss-px-to-viewport')],\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"util-functions",children:["Util Functions",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#util-functions",children:"#"})]}),"\n",(0,t.jsxs)(s.h4,{id:"addplugins",children:["addPlugins",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#addplugins",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"(plugins: PostCSSPlugin | PostCSSPlugin[]) => void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"For adding additional PostCSS plugins, You can pass in a single PostCSS plugin, or an array of PostCSS plugins."}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: (config, { addPlugins }) => {\n      // Add a PostCSS Plugin\n      addPlugins(require('postcss-preset-env'));\n      // Add multiple PostCSS Plugins\n      addPlugins([require('postcss-preset-env'), require('postcss-import')]);\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.div,{className:"modern-directive tip",children:[(0,t.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(s.div,{className:"modern-directive-content",children:(0,t.jsx)(s.p,{children:"Builder uses the PostCSS v8 version. When you use third-party PostCSS plugins, please pay attention to whether the PostCSS version is compatible. Some legacy plugins may not work in PostCSS v8."})})]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},21740:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},title:function(){return c},toc:function(){return a},default:function(){return d}});var t=n("12151"),o=n("23169"),i=n.ir(n("52702")),r={sidebar_label:"postcss"},c="tools.postcss",a=[];function l(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"tools-postcss",children:["tools.postcss",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-postcss",children:"#"})]}),"\n",(0,t.jsxs)(s.div,{className:"modern-directive tip",children:[(0,t.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(s.div,{className:"modern-directive-content",children:(0,t.jsxs)(s.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolspostcss",target:"_blank",rel:"noopener noreferrer",children:"tools.postcss"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(i.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);