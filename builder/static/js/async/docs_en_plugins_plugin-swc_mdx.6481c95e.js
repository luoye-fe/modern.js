(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_plugins_plugin-swc_mdx"],{22912:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return t},toc:function(){return o},default:function(){return d}});var r=s("9880"),i=s("23169"),a=s.ir(s("27681")),l={},t="SWC Plugin",o=[{text:"Usage Scenarios",depth:2,id:"usage-scenarios"},{text:"Rspack Scenario",depth:3,id:"rspack-scenario"},{text:"Babel Plugins",depth:3,id:"babel-plugins"},{text:"Bundle Size",depth:3,id:"bundle-size"},{text:"Quick Start",depth:2,id:"quick-start"},{text:"Install",depth:3,id:"install"},{text:"Register",depth:3,id:"register"},{text:"Config",depth:2,id:"config"},{text:"presetReact",depth:3,id:"presetreact"},{text:"presetEnv",depth:3,id:"presetenv"},{text:"jsMinify",depth:3,id:"jsminify"},{text:"cssMinify",depth:3,id:"cssminify"},{text:"extensions",depth:3,id:"extensions"},{text:"extensions.reactUtils",depth:4,id:"extensionsreactutils"},{text:"extensions.lodash",depth:4,id:"extensionslodash"},{text:"extensions.styledComponent",depth:4,id:"extensionsstyledcomponent"},{text:"extensions.emotion",depth:4,id:"extensionsemotion"},{text:"extensions.pluginImport",depth:4,id:"extensionspluginimport"},{text:"Limitation",depth:2,id:"limitation"}];function c(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",code:"code",div:"div",pre:"pre",strong:"strong",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"swc-plugin",children:["SWC Plugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#swc-plugin",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"usage-scenarios",children:["Usage Scenarios",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage-scenarios",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Before using the SWC plugin, please understand the scenarios and limitations of the SWC plugin to determine whether your project is suitable for using it."}),"\n",(0,r.jsxs)(n.h3,{id:"rspack-scenario",children:["Rspack Scenario",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack-scenario",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"If you are already using Rspack as the bundler in your project, then you do not need to use the SWC plugin, because Rspack uses SWC for transpiler and minifier by default, and the SWC compilation capabilities are available out of the box."}),"\n",(0,r.jsxs)(n.h3,{id:"babel-plugins",children:["Babel Plugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#babel-plugins",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"If your project requires the registration of some custom Babel plugins, you will not be able to register and use Babel plugins after using SWC, since it replaces Babel as the transpiler."}),"\n",(0,r.jsx)(n.p,{children:"For most common Babel plugins, you can find corresponding replacements in SWC, such as:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@babel/preset-env"}),": use ",(0,r.jsx)(n.a,{href:"#presetenv",children:"presetEnv"})," instead."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@babel/preset-react"}),": use ",(0,r.jsx)(n.a,{href:"#presetreact",children:"presetReact"})," instead."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"babel-plugin-import"}),": use ",(0,r.jsx)(n.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"})," instead."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"babel-plugin-lodash"}),": use ",(0,r.jsx)(n.a,{href:"#extensionslodash",children:"extensions.lodash"})," instead."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@emotion/babel-plugin"}),": use ",(0,r.jsx)(n.a,{href:"#extensionsemotion",children:"extensions.emotion"})," instead."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"babel-plugin-styled-components"}),": use ",(0,r.jsx)(n.a,{href:"#extensionsstyledcomponent",children:"extensions.styledComponent"})," instead."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@babel/plugin-react-transform-remove-prop-types"}),": use ",(0,r.jsx)(n.a,{href:"#extensionsreactutils",children:"reactUtils.removePropTypes"})," instead."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you use Babel plugin capabilities that are not yet supported by SWC, you will no longer be able to use them after switching to SWC compilation. You can give feedback via issues under the ",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/swc-plugins",target:"_blank",rel:"noopener noreferrer",children:"swc-plugins"})," repository and we will evaluate if built-in support is needed."]}),"\n",(0,r.jsxs)(n.h3,{id:"bundle-size",children:["Bundle Size",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundle-size",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When using SWC for code minification instead of ",(0,r.jsx)(n.a,{href:"https://github.com/terser/terser",target:"_blank",rel:"noopener noreferrer",children:"terser"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/cssnano/cssnano",target:"_blank",rel:"noopener noreferrer",children:"cssnano"}),", there may be a small change in the bundle size. SWC outperforms terser for JavaScript code compression and slightly underperforms cssnano for CSS code compression."]}),"\n",(0,r.jsxs)(n.p,{children:["For a detailed comparison between minifiers, see ",(0,r.jsx)(n.a,{href:"https://github.com/privatenumber/minification-benchmarks",target:"_blank",rel:"noopener noreferrer",children:"minification-benchmarks"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"install",children:["Install",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-swc -D\n\n# yarn\nyarn add @modern-js/builder-plugin-swc -D\n\n# pnpm\npnpm add @modern-js/builder-plugin-swc -D\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"register",children:["Register",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In upper-level frameworks such as Modern.js, you can register SWC plugin through the ",(0,r.jsx)(n.code,{children:"builderPlugins"})," config:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { builderPluginSwc } from '@modern-js/builder-plugin-swc';\n\nexport default {\n  builderPlugins: [builderPluginSwc()],\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["If you are using the Builder's Node API, you can register SWC plugin through the ",(0,r.jsx)(n.code,{children:"addPlugins"})," method:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import { builderPluginSwc } from '@modern-js/builder-plugin-swc';\n\n// add the plugin to the builder instance\nbuilder.addPlugins([builderPluginSwc()]);\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"That's it !"}),"\n",(0,r.jsx)(n.p,{children:"Now you can use SWC transformation and minification in your project."}),"\n",(0,r.jsxs)(n.h2,{id:"config",children:["Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type PluginConfig = {\n  presetReact?: ReactConfig;\n  presetEnv?: EnvConfig;\n  jsMinify?: boolean | JsMinifyOptions;\n  cssMinify?: boolean | CssMinifyOptions;\n  extensions?: Extensions;\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"presetreact",children:["presetReact",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#presetreact",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.a,{href:"https://swc.rs/docs/configuration/compilation#jsctransformreact",target:"_blank",rel:"noopener noreferrer",children:"presetReact"})," in SWC."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Ported from ",(0,r.jsx)(n.code,{children:"@babel/preset-react"}),". The value you passed will be merged with default option."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, the plugin will set ",(0,r.jsx)(n.code,{children:"runtime"})," field based on your ",(0,r.jsx)(n.code,{children:"react"})," version, if ",(0,r.jsx)(n.code,{children:"react"})," version is newer than 17.0.0, it will be set to ",(0,r.jsx)(n.code,{children:"automatic"}),", otherwish ",(0,r.jsx)(n.code,{children:"classic"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"presetenv",children:["presetEnv",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#presetenv",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.a,{href:"https://swc.rs/docs/configuration/supported-browsers#options",target:"_blank",rel:"noopener noreferrer",children:"presetEnv"})," in SWC."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Ported from ",(0,r.jsx)(n.code,{children:"@babel/preset-env"}),". The value you passed will be merged with default option."]}),"\n",(0,r.jsx)(n.p,{children:"Default option is:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"{\n  targets: '', // automatic get browserslist from your project, so you don't have to set this field\n  mode: 'usage',\n}\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"jsminify",children:["jsMinify",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#jsminify",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})," or ",(0,r.jsx)(n.a,{href:"https://terser.org/docs/api-reference.html#compress-options",target:"_blank",rel:"noopener noreferrer",children:"compress configuration"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"{ compress: {}, mangle: true }"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If set it to ",(0,r.jsx)(n.code,{children:"false"}),", then SWC minification will be disabled, if set it to ",(0,r.jsx)(n.code,{children:"true"})," then will it applies default option. If you pass an object, then this object will be merged with default option."]}),"\n",(0,r.jsxs)(n.h3,{id:"cssminify",children:["cssMinify",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cssminify",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"}),": ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Whether enable to compress CSS files by SWC. If enabled, it will improve the performance of CSS compression, but the compression ratio will be slightly reduced."}),"\n",(0,r.jsxs)(n.h3,{id:"extensions",children:["extensions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensions",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Some plugins ported from Babel."}),"\n",(0,r.jsxs)(n.h4,{id:"extensionsreactutils",children:["extensions.reactUtils",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensionsreactutils",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ReactUtilsOptions = {\n  autoImportReact?: boolean;\n  removeEffect?: boolean;\n  removePropTypes?: {\n    mode?: 'remove' | 'unwrap' | 'unsafe-wrap';\n    removeImport?: boolean;\n    ignoreFilenames?: string[];\n    additionalLibraries?: string[];\n    classNameMatchers?: string[];\n  };\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["Some little help utils for ",(0,r.jsx)(n.code,{children:"React"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"reactUtils.autoImportReact"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Automatically import ",(0,r.jsx)(n.code,{children:"React"})," as global variable, eg: ",(0,r.jsx)(n.code,{children:"import React from 'react'"}),".\nMostly used for generated ",(0,r.jsx)(n.code,{children:"React.createElement"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"reactUtils.removeEffect"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Remove ",(0,r.jsx)(n.code,{children:"useEffect"})," call."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"reactUtils.removePropTypes"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type RemovePropTypesOptions = {\n  mode?: 'remove' | 'unwrap' | 'unsafe-wrap';\n  removeImport?: boolean;\n  ignoreFilenames?: string[];\n  additionalLibraries?: string[];\n  classNameMatchers?: string[];\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["Remove ",(0,r.jsx)(n.code,{children:"React"})," runtime type checking. This is ported from ",(0,r.jsx)(n.a,{href:"https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types",target:"_blank",rel:"noopener noreferrer",children:"@babel/plugin-react-transform-remove-prop-types"}),", All the configurations remain the same."]}),"\n",(0,r.jsxs)(n.h4,{id:"extensionslodash",children:["extensions.lodash",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensionslodash",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"{ cwd?: string; ids?: string;}"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"{ cwd: process.cwd(), ids: [] }"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Ported from ",(0,r.jsx)(n.a,{href:"https://github.com/lodash/babel-plugin-lodash",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-lodash"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"extensionsstyledcomponent",children:["extensions.styledComponent",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensionsstyledcomponent",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:'boolean | {\n  // Enabled by default in development, disabled in production to reduce file size,\n  // setting this will override the default for all environments.\n  displayName?: boolean,\n  // Enabled by default.\n  ssr?: boolean,\n  // Enabled by default.\n  fileName?: boolean,\n  // Empty by default.\n  topLevelImportPaths?: string[],\n  // Defaults to ["index"].\n  meaninglessFileNames?: string[],\n  // Enabled by default.\n  cssProp?: boolean,\n  // Empty by default.\n  namespace?: string,\n};\n'})})})}),"\n",(0,r.jsxs)(n.p,{children:["This is ported by Next.js team from ",(0,r.jsx)(n.a,{href:"https://github.com/styled-components/babel-plugin-styled-components",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-styled-components"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"extensionsemotion",children:["extensions.emotion",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensionsemotion",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"boolean | {\n  // default is true. It will be disabled when build type is production.\n  sourceMap?: boolean,\n  // default is 'dev-only'.\n  autoLabel?: 'never' | 'dev-only' | 'always',\n  // default is '[local]'.\n  // Allowed values: `[local]` `[filename]` and `[dirname]`\n  // This option only works when autoLabel is set to 'dev-only' or 'always'.\n  // It allows you to define the format of the resulting label.\n  // The format is defined via string where variable parts are enclosed in square brackets [].\n  // For example labelFormat: \"my-classname--[local]\", where [local] will be replaced with the name of the variable the result is assigned to.\n  labelFormat?: string,\n  // default is undefined.\n  // This option allows you to tell the compiler what imports it should\n  // look at to determine what it should transform so if you re-export\n  // Emotion's exports, you can still use transforms.\n  importMap?: {\n    [packageName: string]: {\n      [exportName: string]: {\n        canonicalImport?: [string, string],\n        styledBaseImport?: [string, string],\n      }\n    }\n  },\n}\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["This is ported by Next.js team from ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@emotion/babel-plugin",target:"_blank",rel:"noopener noreferrer",children:"@emotion/babel-plugin"})]}),"\n",(0,r.jsxs)(n.h4,{id:"extensionspluginimport",children:["extensions.pluginImport",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensionspluginimport",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["Builder provides the ",(0,r.jsx)(n.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"})," config, so you don't need to configure ",(0,r.jsx)(n.code,{children:"extensions.pluginImport"})," manually.\n"]})})]}),"\n",(0,r.jsxs)(n.p,{children:["Ported from ",(0,r.jsx)(n.a,{href:"https://github.com/umijs/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),", configurations are the same."]}),"\n",(0,r.jsxs)(n.p,{children:["Some configurations can be passed in functions, such as ",(0,r.jsx)(n.code,{children:"customName"}),", ",(0,r.jsx)(n.code,{children:"customStyleName"}),". These JavaScript functions will be called by Rust through Node-API, which will cause some performance overhead."]}),"\n",(0,r.jsxs)(n.p,{children:["Some simple function logic can be replaced by template language. Therefore, the configuration of function items such as ",(0,r.jsx)(n.code,{children:"customName"}),", ",(0,r.jsx)(n.code,{children:"customStyleName"})," can also be passed in strings as templates to replace functions and improve performance."]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { MyButton as Btn } from 'foo';\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"Apply following configurations:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"PluginSWC({\n  extensions: {\n    pluginImport: [\n      {\n        libraryName: 'foo',\n        customName: 'foo/es/{{ member }}',\n      },\n    ],\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"{{ member }}"})," will be replaced by the imported specifier:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import Btn from 'foo/es/MyButton';\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["Template ",(0,r.jsx)(n.code,{children:"customName: 'foo/es/{{ member }}'"})," is the same as ",(0,r.jsx)(n.code,{children:" customName: (member) => `foo/es/${member}`  "}),", but template value has no performance overhead of Node-API."]}),"\n",(0,r.jsxs)(n.p,{children:["The template used here is ",(0,r.jsx)(n.a,{href:"https://handlebarsjs.com",target:"_blank",rel:"noopener noreferrer",children:"handlebars"}),". There are some useful builtin tools, Take the above import statement as an example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"PluginSWC({\n  extensions: {\n    pluginImport: [\n      {\n        libraryName: 'foo',\n        customName: 'foo/es/{{ kebabCase member }}',\n      },\n    ],\n  },\n});\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"Transformed to:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import Btn from 'foo/es/my-button';\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["In addition to ",(0,r.jsx)(n.code,{children:"kebabCase"}),", there are ",(0,r.jsx)(n.code,{children:"cameraCase"}),", ",(0,r.jsx)(n.code,{children:"snakeCase"}),", ",(0,r.jsx)(n.code,{children:"upperCase"})," and ",(0,r.jsx)(n.code,{children:"lowerCase"})," can be used as well."]}),"\n",(0,r.jsxs)(n.h2,{id:"limitation",children:["Limitation",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#limitation",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Do not support ",(0,r.jsx)(n.code,{children:"@babel/plugin-transform-runtime"})," and other custom Babel plugins."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);