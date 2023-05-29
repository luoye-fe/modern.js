(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_babel_mdx"],{37125:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=s("9880"),d=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",h3:"h3",pre:"pre",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["通过 ",(0,r.jsx)(n.code,{children:"tools.babel"})," 可以修改 ",(0,r.jsx)(n.a,{href:"https://github.com/babel/babel-loader",target:"_blank",rel:"noopener noreferrer",children:"babel-loader"})," 的配置项。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive warning",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"在使用 Rspack 作为打包工具时，使用该配置项将在一定程度上拖慢 Rspack 构建速度。因为 Rspack 默认使用的是 SWC 编译，配置 Babel 时会产生额外的编译开销。"})})]}),"\n",(0,r.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["当 ",(0,r.jsx)(n.code,{children:"tools.babel"})," 为 Function 类型时，默认配置作为第一个参数传入，可以直接修改配置对象，也可以返回一个值作为最终结果，第二个参数提供了一些可以直接调用的工具函数："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config) {\n      // 添加一个插件，比如配置某个组件库的按需引入\n      config.plugins.push([\n        'babel-plugin-import',\n        {\n          libraryName: 'xxx-components',\n          libraryDirectory: 'es',\n          style: true,\n        },\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["以上示例仅作为参考，通常来说，你不需要手动配置 ",(0,r.jsx)(n.code,{children:"babel-plugin-import"}),"，因为 Builder 已经提供了更通用的 ",(0,r.jsx)(n.code,{children:"source.transformImport"})," 配置。\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["当 ",(0,r.jsx)(n.code,{children:"tools.babel"})," 的值为 ",(0,r.jsx)(n.code,{children:"Object"})," 类型时，会与默认配置通过 ",(0,r.jsx)(n.code,{children:"Object.assign"})," 浅合并。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive caution",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Object.assign"})," 是浅拷贝，会完全覆盖内置的 ",(0,r.jsx)(n.code,{children:"presets"})," 或 ",(0,r.jsx)(n.code,{children:"plugins"})," 数组，导致内置的 presets 或 plugins 失效，请在明确影响面的情况下再使用这种方式。\n"]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel: {\n      plugins: [\n        [\n          'babel-plugin-import',\n          {\n            libraryName: 'xxx-components',\n            libraryDirectory: 'es',\n            style: true,\n          },\n        ],\n      ],\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"工具函数",children:["工具函数",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#工具函数",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tools.babel"})," 为 Function 类型时，第二个参数可用的工具函数如下:"]}),"\n",(0,r.jsxs)(n.h4,{id:"addplugins",children:["addPlugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addplugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(plugins: BabelPlugin[]) => void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"添加若干个 Babel 插件。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addPlugins }) {\n      addPlugins([\n        [\n          'babel-plugin-import',\n          {\n            libraryName: 'xxx-components',\n            libraryDirectory: 'es',\n            style: true,\n          },\n        ],\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"addpresets",children:["addPresets",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addpresets",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(presets: BabelPlugin[]) => void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"添加若干个 Babel 预设配置 (大多数情况下不需要增加预设)。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addPresets }) {\n      addPresets(['@babel/preset-env']);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"removeplugins",children:["removePlugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removeplugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(plugins: string | string[]) => void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"移除 Babel 插件，传入需要移除的插件名称即可，你可以传入单个字符串，也可以传入一个字符串数组。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { removePlugins }) {\n      removePlugins('babel-plugin-import');\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"removepresets",children:["removePresets",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removepresets",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(presets: string | string[]) => void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"移除 Babel 预设配置，传入需要移除的预设名称即可，你可以传入单个字符串，也可以传入一个字符串数组。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { removePresets }) {\n      removePresets('@babel/preset-env');\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"addincludes",children:["addIncludes",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(includes: string | RegExp | (string | RegExp)[]) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["默认情况下 Babel 只会编译 src 目录下的业务代码，使用 ",(0,r.jsx)(n.code,{children:"addIncludes"})," 你可以指定 Babel 编译 node_modules 下的一些文件。比如编译 ",(0,r.jsx)(n.code,{children:"query-string"})," 依赖："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addIncludes }) {\n      addIncludes(/\\/query-string\\//);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"addIncludes"})," 函数的用法与 ",(0,r.jsx)(n.code,{children:"source.include"})," 配置项基本一致，请查看 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourceinclude",target:"_blank",rel:"noopener noreferrer",children:"source.include 文档"})," 来查看更详细的用法说明。也可以直接使用 ",(0,r.jsx)(n.code,{children:"source.include"})," 来代替 ",(0,r.jsx)(n.code,{children:"addIncludes"})," 函数。\n"]})})]}),"\n",(0,r.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(excludes: string | RegExp | (string | RegExp)[]) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"addExcludes"})," 和 ",(0,r.jsx)(n.code,{children:"addIncludes"})," 的用处相反，指定 Babel 编译时排除某些文件。"]}),"\n",(0,r.jsxs)(n.p,{children:["比如不编译 ",(0,r.jsx)(n.code,{children:"src/example"})," 目录下的文件:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addExcludes }) {\n      addExcludes('src/example');\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"addExcludes"})," 函数的用法与 ",(0,r.jsx)(n.code,{children:"source.exclude"})," 配置项基本一致，请查看 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourceexclude",target:"_blank",rel:"noopener noreferrer",children:"source.exclude 文档"})," 来查看更详细的用法说明。也可以直接使用 ",(0,r.jsx)(n.code,{children:"source.exclude"})," 来代替 ",(0,r.jsx)(n.code,{children:"addExcludes"})," 函数。\n"]})})]}),"\n",(0,r.jsxs)(n.h4,{id:"modifypresetenvoptions",children:["modifyPresetEnvOptions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifypresetenvoptions",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(options: PresetEnvOptions) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["修改 ",(0,r.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-env"})," 的配置项，传入的配置会与默认配置进行浅层合并，比如:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { modifyPresetEnvOptions }) {\n      modifyPresetEnvOptions({\n        targets: {\n          browsers: ['last 2 versions'],\n        },\n      });\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"modifypresetreactoptions",children:["modifyPresetReactOptions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifypresetreactoptions",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(options: PresetReactOptions) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["修改 ",(0,r.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-react",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-react"})," 的配置项，传入的配置会与默认配置进行浅层合并，比如:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { modifyPresetReactOptions }) {\n      modifyPresetReactOptions({\n        pragma: 'React.createElement',\n      });\n    },\n  },\n};\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},44350:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return c},toc:function(){return a},default:function(){return t}});var r=s("9880"),d=s("23169"),i=s.ir(s("37125")),l={sidebar_label:"babel"},c="tools.babel",a=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolsbabel",children:["tools.babel",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsbabel",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolsbabel",target:"_blank",rel:"noopener noreferrer",children:"tools.babel"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(i.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);