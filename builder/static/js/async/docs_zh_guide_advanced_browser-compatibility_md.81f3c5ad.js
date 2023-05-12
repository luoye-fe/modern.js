(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_advanced_browser-compatibility_md"],{1546:function(e,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var l in n)Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return i},default:function(){return o}});var r=l("9880"),s=l("23169"),c={},d="浏览器兼容性",i=[{text:"设置浏览器范围",depth:2,id:"设置浏览器范围"},{text:"背景知识",depth:2,id:"背景知识"},{text:"语法降级和 API 降级",depth:3,id:"语法降级和-api-降级"},{text:"语法转译",depth:3,id:"语法转译"},{text:"API Polyfill",depth:3,id:"api-polyfill"},{text:"降级方式",depth:2,id:"降级方式"},{text:"降级当前项目代码",depth:3,id:"降级当前项目代码"},{text:"降级第三方依赖",depth:3,id:"降级第三方依赖"},{text:"降级非当前项目的代码",depth:3,id:"降级非当前项目的代码"},{text:"Polyfill 方案",depth:2,id:"polyfill-方案"},{text:"entry 方案",depth:3,id:"entry-方案"},{text:"usage 方案",depth:3,id:"usage-方案"},{text:"不注入 Polyfill",depth:3,id:"不注入-polyfill"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",strong:"strong",blockquote:"blockquote",code:"code",div:"div",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"浏览器兼容性",children:["浏览器兼容性",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#浏览器兼容性",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"本章节介绍如何使用 Builder 提供的能力来处理浏览器兼容性问题。"}),"\n",(0,r.jsxs)(n.h2,{id:"设置浏览器范围",children:["设置浏览器范围",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#设置浏览器范围",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在处理兼容性问题之前，首先需要明确你的项目需要支持的浏览器范围，并添加相应的 browserslist 配置。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["如果你还没有设置浏览器范围，请先阅读 ",(0,r.jsx)(n.a,{href:"/guide/advanced/browserslist",children:"设置浏览器范围"})," 章节。"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"如果你已经设置了浏览器范围，那么 Builder 会自动根据该范围进行编译，对 JavaScript 语法和 CSS 语法进行降级处理，并注入所需的 polyfill 代码。大部分情况下，你可以放心地使用现代 ECMAScript 特性，无须担心兼容性问题。"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在设置浏览器范围之后，如果你依然在开发中遇到了一些兼容性问题，请继续阅读下面的内容来寻找解决方案。"}),"\n",(0,r.jsxs)(n.h2,{id:"背景知识",children:["背景知识",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#背景知识",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在处理兼容性问题之前，建议你了解以下背景知识，以更好地处理相关问题。"}),"\n",(0,r.jsxs)(n.h3,{id:"语法降级和-api-降级",children:["语法降级和 API 降级",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#语法降级和-api-降级",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"当你在项目中使用高版本语法和 API 时，为了让编译后的代码能稳定运行在低版本浏览器中，需要完成两部分降级：语法降级和 API 降级。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Builder 通过语法转译来对语法进行降级，通过 polyfill 来对 API 进行进行降级。"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"语法和 API 并不是强绑定的，浏览器厂商在实现引擎的时候，会根据规范或者自身需要提前支持一些语法或者提前实现一些 API。因此，同一时期的不同厂商的浏览器，对语法和 API 的兼容都不一定相同。所以在一般的实践中，语法和 API 是分成两个部分进行处理的。"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"语法转译",children:["语法转译",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#语法转译",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"语法是编程语言如何组织代码的一系列规则"}),"，不遵守这些规则的代码无法被编程语言的引擎正确识别，因此无法被运行。在 JavaScript 中，以下几个示例都是语法规则："]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["在 ",(0,r.jsx)(n.code,{children:"const foo = 1"})," 中，",(0,r.jsx)(n.code,{children:"const"})," 表示声明一个不可变的常量。"]}),"\n",(0,r.jsxs)(n.li,{children:["在 ",(0,r.jsx)(n.code,{children:"foo?.bar?.baz"})," 中，",(0,r.jsx)(n.code,{children:"?."})," 表示可选链访问属性。"]}),"\n",(0,r.jsxs)(n.li,{children:["在 ",(0,r.jsx)(n.code,{children:"async function () {}"})," 中，",(0,r.jsx)(n.code,{children:"async"})," 表示声明一个异步函数。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"由于不同浏览器的解析器所能支持的语法不同，尤其是旧版本浏览器引擎所能支持的语法较少，因此一些语法在低版本浏览器引擎中运行时，就会在解析 AST 的阶段报错。"}),"\n",(0,r.jsx)(n.p,{children:"比如下面这段代码在 IE 浏览器或低版本 Node.js 下会报错："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"const foo = {};\nfoo?.bar();\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"我们在低版本 Node.js 中运行这段代码，会出现以下错误信息："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"SyntaxError: Unexpected token .\n  at Object.exports.runInThisContext (vm.js:73:16)\n  at Object.<anonymous> ([eval]-wrapper:6:22)\n  at Module._compile (module.js:460:26)\n  at evalScript (node.js:431:25)\n  at startup (node.js:90:7)\n  at node.js:814:3\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"从错误信息里可以明显看到，这是一个语法错误（SyntaxError）。这说明这个语法在低版本的引擎中是不受支持的。"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"语法是不能通过 polyfill 或者 shim 进行支持的"}),"。如果想在低版本浏览器中运行一些它原本不支持的语法，那么就需要对代码进行转译，转译成低版本引擎所能支持的语法。"]}),"\n",(0,r.jsx)(n.p,{children:"将上述代码转译为以下代码即可在低版本引擎中运行："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"var foo = {};\nfoo === null || foo === void 0 ? void 0 : foo.bar();\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["转译后，代码的语法变了，把一些低版本引擎无法理解的语法用其可理解的语法替代，",(0,r.jsx)(n.strong,{children:"但代码本身的意义没有变"}),"。"]}),"\n",(0,r.jsx)(n.p,{children:"如果引擎在转换为 AST 的时候遇到了无法识别的语法，就会报语法错误，并中止代码执行流程。在这种情况下，如果你的项目没有使用 SSR 或 SSG 等能力的话，页面将会直接白屏，导致页面不可用。"}),"\n",(0,r.jsx)(n.p,{children:"如果代码被转换为 AST 成功，引擎会将 AST 转为可执行代码，并在引擎内部正常执行。"}),"\n",(0,r.jsxs)(n.h3,{id:"api-polyfill",children:["API Polyfill",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api-polyfill",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"JavaScript 是解释型脚本语言，不同于 Rust 等编译型语言。Rust 会在编译阶段对代码中的调用进行检查，而 JavaScript 在真正运行到某一行代码之前，并不知道这一行代码所调用的函数是否存在，因此一些错误只有在运行时才会出现。"}),"\n",(0,r.jsx)(n.p,{children:"举个例子，下面这段代码："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"var str = 'Hello world!';\nconsole.log(str.notExistedMethod());\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["上面这段代码有着正确的语法，在引擎运行时的第一个阶段也能正确转换为 AST，但是在真正运行的时候，由于 ",(0,r.jsx)(n.code,{children:"String.prototype"})," 上不存在 ",(0,r.jsx)(n.code,{children:"notExistedMethod"})," 这个方法，所以在实际运行的时候会报错："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"Uncaught TypeError: str.notExistedMethod is not a function\n  at <anonymous>:2:17\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["随着 ECMAScript 的迭代，一些内置对象也会迎来新的方法。比如 ",(0,r.jsx)(n.code,{children:"String.prototype.replaceAll"})," 是在 ES2021 中被引入的，那么在大部分 2021 年前的浏览器的引擎的内置对象 ",(0,r.jsx)(n.code,{children:"String.prototype"})," 中是不存在 ",(0,r.jsx)(n.code,{children:"replaceAll"})," 方法的，因此下面这段代码在最新的 Chrome 里可以运行，但是在较早的版本里无法运行："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"'abc'.replaceAll('abc', 'xyz');\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["为了解决在旧版浏览器中的 ",(0,r.jsx)(n.code,{children:"String.prototype"})," 缺少 ",(0,r.jsx)(n.code,{children:"replaceAll"})," 的问题，我们可以在老版本的浏览器里扩展 ",(0,r.jsx)(n.code,{children:"String.prototype"})," 对象，给它加上 ",(0,r.jsx)(n.code,{children:"replaceAll"})," 方法，例如："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"// 该 polyfill 的实现并不一定符合标准，仅作为示例。\nif (!String.prototype.replaceAll) {\n  String.prototype.replaceAll = function (str, newStr) {\n    // If a regex pattern\n    if (\n      Object.prototype.toString.call(str).toLowerCase() === '[object regexp]'\n    ) {\n      return this.replace(str, newStr);\n    }\n    // If a string\n    return this.replace(new RegExp(str, 'g'), newStr);\n  };\n}\n"})})})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"这种为旧环境提供实现来对齐新 API 的技术被称作 polyfill。"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"降级方式",children:["降级方式",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#降级方式",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在 Builder 中，我们将代码分为三类："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"第一类是当前项目中的源代码。"}),"\n",(0,r.jsx)(n.li,{children:"第二类是通过 npm 安装的第三方依赖代码。"}),"\n",(0,r.jsx)(n.li,{children:"第三类是非当前项目的代码，比如 monorepo 中其他目录下的代码。"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"默认情况下，Builder 只会对第一类代码进行编译和降级，而其他类型的代码默认是不进行降级处理的。"}),"\n",(0,r.jsx)(n.p,{children:"之所以这样处理，主要有几个考虑："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["将所有第三方依赖代码都进行降级的话会",(0,r.jsx)(n.strong,{children:"导致构建性能显著下降"}),"。"]}),"\n",(0,r.jsx)(n.li,{children:"大部分第三方依赖在发布前已经进行了降级处理，二次降级可能会引入新问题。"}),"\n",(0,r.jsx)(n.li,{children:"非当前项目的代码可能已经经过了编译处理，或者编译所需的配置与当前项目并不相同。"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"降级当前项目代码",children:["降级当前项目代码",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#降级当前项目代码",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"当前项目的代码会被默认降级，因此你不需要添加额外的配置，只需要保证正确设置了浏览器范围即可。"}),"\n",(0,r.jsxs)(n.h3,{id:"降级第三方依赖",children:["降级第三方依赖",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#降级第三方依赖",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["当你发现某个第三方依赖的代码导致了兼容性问题时，你可以将这个依赖添加到 Builder 的 ",(0,r.jsx)(n.a,{href:"/api/config-source",children:"source.include"})," 配置中，使 Builder 对该依赖进行额外的编译。"]}),"\n",(0,r.jsxs)(n.p,{children:["以 ",(0,r.jsx)(n.code,{children:"query-string"})," 这个 npm 包为例，你可以做如下的配置："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [/\\/query-string\\//],\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["请查看 ",(0,r.jsx)(n.a,{href:"/api/config-source",children:"source.include"})," 文档来查看更详细的用法说明。"]}),"\n",(0,r.jsxs)(n.h3,{id:"降级非当前项目的代码",children:["降级非当前项目的代码",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#降级非当前项目的代码",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["当你引用非当前项目的代码时，如果该代码未经过编译处理，那么你也需要配置 ",(0,r.jsx)(n.a,{href:"/api/config-source",children:"source.include"})," 来对它进行编译。"]}),"\n",(0,r.jsxs)(n.p,{children:["比如，你需要引用 monorepo 中 ",(0,r.jsx)(n.code,{children:"packages"})," 目录下的某个模块，可以添加如下的配置："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [\n      // 方法一:\n      // 编译 Monorepo 的 package 目录下的所有文件\n      path.resolve(__dirname, '../../packages'),\n\n      // 方法二:\n      // 编译 Monorepo 的 package 目录里某个包的源代码\n      // 这种写法匹配的范围更加精准，对整体编译性能的影响更小\n      path.resolve(__dirname, '../../packages/xxx/src'),\n    ],\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"polyfill-方案",children:["Polyfill 方案",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-方案",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Builder 底层通过 babel 或 SWC 编译 JavaScript 代码，并注入 ",(0,r.jsx)(n.a,{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer",children:"core-js"}),"、",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@babel/runtime",target:"_blank",rel:"noopener noreferrer",children:"@babel/runtime"}),"、",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@swc/helpers",target:"_blank",rel:"noopener noreferrer",children:"@swc/helpers"})," 等 polyfill 库。"]}),"\n",(0,r.jsxs)(n.p,{children:["在不同的使用场景下，你可能会需要不同的 polyfill 方案。Builder 提供了 ",(0,r.jsx)(n.a,{href:"/api/config-output",children:"output.polyfill"})," 配置项来切换不同的 polyfill 方案。"]}),"\n",(0,r.jsxs)(n.h3,{id:"entry-方案",children:["entry 方案",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entry-方案",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"entry 为默认方案，无须手动设置。"}),"\n",(0,r.jsxs)(n.p,{children:["在使用 entry 方案时，Builder 会根据当前项目设置的浏览器范围来计算需要注入哪些 ",(0,r.jsx)(n.code,{children:"core-js"})," 方法，并在每个页面的入口文件中进行注入。这种方式注入的 polyfill 较为全面，不需要再担心项目源码和第三方依赖的 polyfill 问题，但是因为包含了一些没有用到的 polyfill 代码，所以最终的包大小可能会有所增加。"]}),"\n",(0,r.jsx)(n.p,{children:"entry 方案对应的配置为："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    polyfill: 'entry',\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"usage-方案",children:["usage 方案",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage-方案",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"usage 方案可以更精确地控制需要注入哪些 core-js polyfill。"}),"\n",(0,r.jsx)(n.p,{children:"当你开启 usage 方案时，Builder 会分析项目中的源代码，并判断需要注入哪些 polyfill。"}),"\n",(0,r.jsxs)(n.p,{children:["比如代码中使用了 ",(0,r.jsx)(n.code,{children:"Map"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"var b = new Map();\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["编译后，只会在该文件中注入 ",(0,r.jsx)(n.code,{children:"Map"})," 所需的 polyfill："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import 'core-js/modules/es.map';\nvar b = new Map();\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["这种方式的优点是注入的 polyfill 体积更小，适合对包体积有较高要求的项目使用。缺点是 polyfill 可能注入不全，因为第三方依赖默认不会被编译和降级处理，因此第三方依赖所需的 polyfill 不会被分析到，如果需要分析某个第三方依赖，也需要将其加入到 ",(0,r.jsx)(n.a,{href:"/api/config-source",children:"source.include"})," 配置中。"]}),"\n",(0,r.jsx)(n.p,{children:"usage 方案对应的配置为："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    polyfill: 'usage',\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"不注入-polyfill",children:["不注入 Polyfill",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#不注入-polyfill",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["你可以将 ",(0,r.jsx)(n.code,{children:"output.polyfill"})," 设置为 ",(0,r.jsx)(n.code,{children:"'off'"})," 来禁用 polyfill 注入的行为。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    polyfill: 'off',\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["使用此选项时，你需要自行保证代码的兼容性，比如通过 ",(0,r.jsx)(n.a,{href:"/api/config-source",children:"source.preEntry"})," 来手动引用所需的 polyfill 代码。"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);