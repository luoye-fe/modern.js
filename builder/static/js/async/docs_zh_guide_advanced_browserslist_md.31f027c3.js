(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_advanced_browserslist_md"],{65659:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{frontmatter:function(){return i},title:function(){return c},toc:function(){return l},default:function(){return a}});var n=r("9880"),d=r("23169"),i={},c="设置浏览器范围",l=[{text:"什么是 Browserslist",depth:2,id:"什么是-browserslist"},{text:"设置 Browserslist",depth:2,id:"设置-browserslist"},{text:"示例",depth:3,id:"示例"},{text:"生效范围",depth:3,id:"生效范围"},{text:"使用 output.overrideBrowserslist 配置",depth:3,id:"使用-output-overridebrowserslist-配置"},{text:"常用的浏览器范围",depth:2,id:"常用的浏览器范围"},{text:"移动端 H5 场景",depth:3,id:"移动端-h5-场景"},{text:"桌面端 PC 场景",depth:3,id:"桌面端-pc-场景"},{text:"Browserslist 默认值",depth:2,id:"browserslist-默认值"},{text:"Web 产物",depth:3,id:"web-产物"},{text:"Node 产物",depth:3,id:"node-产物"},{text:"Web Worker 产物",depth:3,id:"web-worker-产物"},{text:"Modern Web 产物",depth:3,id:"modern-web-产物"},{text:"查询浏览器支持情况",depth:2,id:"查询浏览器支持情况"}];function o(e){var s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",code:"code",div:"div",h3:"h3",button:"button",pre:"pre",img:"img"},(0,d.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"设置浏览器范围",children:["设置浏览器范围",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#设置浏览器范围",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Builder 支持通过 ",(0,n.jsx)(s.a,{href:"https://browsersl.ist/",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"})," 来设置 Web 应用需要兼容的浏览器范围。"]}),"\n",(0,n.jsxs)(s.h2,{id:"什么是-browserslist",children:["什么是 Browserslist",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#什么是-browserslist",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"由于各种浏览器对 ECMAScript 和 CSS 的支持程度不同，因此开发者需要根据业务需求，为 Web 应用设置正确的浏览器范围。"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://browsersl.ist/",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"})," 可以指定 Web 应用能够在哪些浏览器中正常运行，它提供了统一的配置格式，并且已经成为了前端社区中的标准。Browserslist 被 Autoprefixer, Babel, ESLint, PostCSS，SWC 和 Webpack 等库所使用。"]}),"\n",(0,n.jsxs)(s.p,{children:["当你通过 Browserslist 指定了一个浏览器范围时，Builder 会将 JavaScript 代码和 CSS 代码编译到指定的语法，并注入相应的 polyfill 代码。",(0,n.jsx)(s.strong,{children:"当你只需要兼容更现代的浏览器时，编译过程会引入更少的兼容代码和 polyfills，页面的性能会更好。"})]}),"\n",(0,n.jsxs)(s.p,{children:["比如，当你需要适配 IE11 浏览器时，Builder 会将代码编译至 ES5，并通过 ",(0,n.jsx)(s.code,{children:"core-js"})," 注入 IE11 所需的 polyfill。"]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive tip",children:[(0,n.jsx)(s.div,{className:"modern-directive-title",children:"什么是 polyfill"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsxs)(s.p,{children:["polyfill 是一种用于解决浏览器兼容问题的技术。它用于模拟某些浏览器不支持的新特性，使得这些特性能在不支持的浏览器中正常工作。例如，如果某个浏览器不支持 ",(0,n.jsx)(s.code,{children:"Array.prototype.flat()"})," 方法，那么我们可以使用 polyfill 来模拟这个方法，从而让代码在这个浏览器中也能正常工作。\n"]})})]}),"\n",(0,n.jsxs)(s.h2,{id:"设置-browserslist",children:["设置 Browserslist",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#设置-browserslist",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["你可以在当前项目根目录的 ",(0,n.jsx)(s.code,{children:"package.json"})," 或 ",(0,n.jsx)(s.code,{children:".browserslistrc"})," 文件里设置 Browserslist 的值。"]}),"\n",(0,n.jsxs)(s.h3,{id:"示例",children:["示例",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["通过 ",(0,n.jsx)(s.code,{children:"package.json"})," 的 ",(0,n.jsx)(s.code,{children:"browserslist"})," 设置："]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "browserslist": [\n    "iOS >= 9",\n    "Android >= 4.4",\n    "last 2 versions",\n    "> 0.2%",\n    "not dead"\n  ]\n}\n'})})]})}),"\n",(0,n.jsxs)(s.p,{children:["通过独立的 ",(0,n.jsx)(s.code,{children:".browserslistrc"})," 文件设置："]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{children:"iOS >= 9\nAndroid >= 4.4\nlast 2 versions\n> 0.2%\nnot dead\n"})})]})}),"\n",(0,n.jsxs)(s.h3,{id:"生效范围",children:["生效范围",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#生效范围",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:".browserslistrc"})," 文件默认只对浏览器端的构建产物生效，包括 ",(0,n.jsx)(s.code,{children:"web"})," 和 ",(0,n.jsx)(s.code,{children:"web-worker"})," 这两种产物类型。"]}),"\n",(0,n.jsxs)(s.p,{children:["当你同时构建多种产物，比如 target 包含 ",(0,n.jsx)(s.code,{children:"web"})," 和 ",(0,n.jsx)(s.code,{children:"node"})," 两种产物时，只有 ",(0,n.jsx)(s.code,{children:"web"})," 产物会受到 ",(0,n.jsx)(s.code,{children:".browserslistrc"})," 文件的影响。如果你希望对 ",(0,n.jsx)(s.code,{children:"node"})," 产物进行修改，可以使用下方的 ",(0,n.jsx)(s.code,{children:"output.overrideBrowserslist"})," 配置。"]}),"\n",(0,n.jsxs)(s.h3,{id:"使用-output-overridebrowserslist-配置",children:["使用 output.overrideBrowserslist 配置",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-output-overridebrowserslist-配置",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["除了上述的标准用法，Builder 还提供了 ",(0,n.jsx)(s.a,{href:"/api/config-output",children:"output.overrideBrowserslist"})," 配置项，同样可以设置 Browserslist 的值。"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"overrideBrowserslist"})," 可以被设置为一个数组，数组的写法与 ",(0,n.jsx)(s.code,{children:"browserslistrc"})," 配置是一样的，但比 ",(0,n.jsx)(s.code,{children:"browserslistrc"})," 拥有更高的优先级。"]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    overrideBrowserslist: [\n      'iOS >= 9',\n      'Android >= 4.4',\n      'last 2 versions',\n      '> 0.2%',\n      'not dead',\n    ],\n  },\n};\n"})})]})}),"\n",(0,n.jsxs)(s.p,{children:["当 ",(0,n.jsx)(s.code,{children:".overrideBrowserslist"})," 被设置为数组时，同样只对浏览器端的构建产物生效。"]}),"\n",(0,n.jsxs)(s.p,{children:["当你同时构建多种类型的产物时，你可以为不同的产物类型设置不同的目标浏览器范围。此时，你需要把 ",(0,n.jsx)(s.code,{children:"overrideBrowserslist"})," 设置为一个对象，对象的 key 为对应的产物类型。"]}),"\n",(0,n.jsxs)(s.p,{children:["比如为 ",(0,n.jsx)(s.code,{children:"web"})," 和 ",(0,n.jsx)(s.code,{children:"node"})," 设置不同的范围："]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: {\n      web: [\n        'iOS >= 9',\n        'Android >= 4.4',\n        'last 2 versions',\n        '> 0.2%',\n        'not dead',\n      ],\n      node: ['node >= 14'],\n    },\n  },\n};\n"})})]})}),"\n",(0,n.jsxs)(s.p,{children:["大多数场景下，推荐优先使用 ",(0,n.jsx)(s.code,{children:".browserslistrc"})," 文件，而不是使用 ",(0,n.jsx)(s.code,{children:"overrideBrowserslist"})," 配置。因为 ",(0,n.jsx)(s.code,{children:".browserslistrc"})," 文件是官方定义的配置文件，通用性更强，可以被社区中的其他库识别。"]}),"\n",(0,n.jsxs)(s.h2,{id:"常用的浏览器范围",children:["常用的浏览器范围",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#常用的浏览器范围",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"以下是一些常用的浏览器范围，你可以根据自己的项目类型进行选择。"}),"\n",(0,n.jsxs)(s.h3,{id:"移动端-h5-场景",children:["移动端 H5 场景",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#移动端-h5-场景",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["移动端 H5 场景主要兼容 ",(0,n.jsx)(s.code,{children:"iOS"})," 和 ",(0,n.jsx)(s.code,{children:"Android"})," 系统，通常我们将 Browserslist 设置为："]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{children:"iOS >= 9\nAndroid >= 4.4\nlast 2 versions\n> 0.2%\nnot dead\n"})})]})}),"\n",(0,n.jsxs)(s.p,{children:["以上浏览器范围会将代码编译至 ES5 规范，可以兼容市面上绝大多数移动端场景，具体对应的浏览器列表可以查看 ",(0,n.jsx)(s.a,{href:"https://browserslist.dev/?q=aU9TID49IDksIEFuZHJvaWQgPj0gNC40LCBsYXN0IDIgdmVyc2lvbnMsID4gMC4yJSwgbm90IGRlYWQ%3D",target:"_blank",rel:"noopener noreferrer",children:"browserslist.dev"}),"。"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/browserslist-dev-1222.png",alt:""})}),"\n",(0,n.jsx)(s.p,{children:"你也可以选择在 H5 场景使用 ES6 规范，这样会让页面的性能表现更好，对应的 Browserslist 如下："}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{children:"iOS >= 10\nChrome >= 51\n> 0.5%\nnot dead\nnot op_mini all\n"})})]})}),"\n",(0,n.jsxs)(s.h3,{id:"桌面端-pc-场景",children:["桌面端 PC 场景",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#桌面端-pc-场景",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"在桌面端 PC 场景下，如果你需要兼容 IE 11 浏览器，则可以将 Browserslist 设置为："}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{children:"> 0.5%\nnot dead\nIE 11\n"})})]})}),"\n",(0,n.jsxs)(s.p,{children:["以上浏览器范围会将代码编译至 ES5 规范，具体对应的浏览器列表可以查看 ",(0,n.jsx)(s.a,{href:"https://browserslist.dev/?q=PiAwLjUlLCBub3QgZGVhZCwgSUUgMTE%3D",target:"_blank",rel:"noopener noreferrer",children:"browserslist.dev"}),"。"]}),"\n",(0,n.jsx)(s.p,{children:"如果你不需要兼容 IE 11 浏览器，那么可以调整 Browserslist 来获得更高性能的产物，比如设置为支持原生 ES Modules 的浏览器："}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{children:"chrome >= 61\nedge >= 16\nfirefox >= 60\nsafari >= 11\nios_saf >= 11\n"})})]})}),"\n",(0,n.jsxs)(s.h2,{id:"browserslist-默认值",children:["Browserslist 默认值",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist-默认值",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Builder 会根据",(0,n.jsx)(s.a,{href:"/guide/basic/build-target",children:"构建产物类型"}),"来设置不同的 Browserslist 默认值，但我们推荐你在项目中显式设置 Browserslist，这会让项目的兼容范围更加明确。"]}),"\n",(0,n.jsxs)(s.h3,{id:"web-产物",children:["Web 产物",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#web-产物",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Web 产物的默认值如下所示："}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{children:"> 0.01%\nnot dead\nnot op_mini all\n"})})]})}),"\n",(0,n.jsx)(s.p,{children:"在该浏览器范围下，JavaScript 代码被会编译到 ES5 语法。"}),"\n",(0,n.jsxs)(s.h3,{id:"node-产物",children:["Node 产物",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#node-产物",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Node 产物默认最低兼容到 Node.js 14.0 版本。"}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{children:"node >= 14\n"})})]})}),"\n",(0,n.jsxs)(s.h3,{id:"web-worker-产物",children:["Web Worker 产物",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#web-worker-产物",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Web Worker 产物默认的浏览器范围与 Web 一致。"}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{children:"> 0.01%\nnot dead\nnot op_mini all\n"})})]})}),"\n",(0,n.jsxs)(s.h3,{id:"modern-web-产物",children:["Modern Web 产物",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-web-产物",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Modern Web 产物默认最低兼容到支持",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer",children:"原生 ES Modules"})," 的浏览器。"]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{children:"chrome >= 61\nedge >= 16\nfirefox >= 60\nsafari >= 11\nios_saf >= 11\n"})})]})}),"\n",(0,n.jsxs)(s.h2,{id:"查询浏览器支持情况",children:["查询浏览器支持情况",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#查询浏览器支持情况",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["在开发时，我们需要了解某些特性或 API 的浏览器支持情况，此时我们可以在 ",(0,n.jsx)(s.a,{href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer",children:"caniuse"})," 网站上进行查询。"]}),"\n",(0,n.jsxs)(s.p,{children:["比如我们需要知道 ",(0,n.jsx)(s.code,{children:"Promise"})," 的浏览器支持情况，只需要在 ",(0,n.jsx)(s.a,{href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer",children:"caniuse"})," 中输入 ",(0,n.jsx)(s.code,{children:"Promise"}),"，就可以看到以下结果："]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/caniuse-demo-1222.png",alt:""})}),"\n",(0,n.jsxs)(s.p,{children:["从上表可以看出，",(0,n.jsx)(s.code,{children:"Promise"})," 在 Chrome 33 和 iOS 8 中得到了原生支持，但是在 IE 11 中不被支持。"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}}}]);