(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_basic-features_mock_mdx"],{89411:function(e,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var c in n)Object.defineProperty(e,c,{enumerable:!0,get:n[c]})}(n,{frontmatter:function(){return d},title:function(){return i},toc:function(){return o},default:function(){return t}});var r=c("9880"),s=c("23169"),d={title:"数据模拟",sidebar_position:6},i="数据模拟",o=[{text:"Mock 文件",depth:2,id:"mock-文件"},{text:"编写 Mock 文件",depth:2,id:"编写-mock-文件"},{text:"返回随机数据",depth:2,id:"返回随机数据"},{text:"延迟返回",depth:2,id:"延迟返回"},{text:"按需使用 Mock 服务",depth:2,id:"按需使用-mock-服务"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",div:"div",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"数据模拟",children:["数据模拟",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#数据模拟",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 提供了快速生成 Mock 数据的功能，能够让前端独立自主开发，不被后端接口阻塞。"}),"\n",(0,r.jsxs)(n.h2,{id:"mock-文件",children:["Mock 文件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mock-文件",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["约定当 ",(0,r.jsx)(n.code,{children:"config/mock"})," 目录下存在 ",(0,r.jsx)(n.code,{children:"index.[jt]s"})," 时，会自动开启 Mock 功能，如下："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── config\n│   └── mock\n│       └── index.ts\n├── src\n│   └── App.tsx\n└── modern.config.ts\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"编写-mock-文件",children:["编写 Mock 文件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#编写-mock-文件",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"config/mock/index.ts"})," 文件只需要导出一个包含所有 Mock API 的对象，对象的属性由请求配置 ",(0,r.jsx)(n.code,{children:"method"})," 和 ",(0,r.jsx)(n.code,{children:"url"})," 组成，对应的属性值可以为 ",(0,r.jsx)(n.code,{children:"Object"}),"、",(0,r.jsx)(n.code,{children:"Array"}),"、",(0,r.jsx)(n.code,{children:"Function"}),"："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  /* 属性为具体的 method 和 请求 url，值为 object 或 array 作为请求的结果 */\n  'GET /api/getInfo': { data: [1, 2, 3, 4] },\n\n  /* method 默认为 GET */\n  '/api/getExample': { id: 1 },\n\n  /* 可以使用自定义函数根据请求动态返回数据，返回值参考 express middleware */\n  'POST /api/addInfo': (req, res, next) => {\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    res.end('200');\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["代码中访问 ",(0,r.jsx)(n.code,{children:"http://localhost:8080/api/getInfo"})," 时，接口会返回 JSON 格式数据：",(0,r.jsx)(n.code,{children:'{ "data": [1, 2, 3, 4] }'}),"。"]}),"\n",(0,r.jsxs)(n.h2,{id:"返回随机数据",children:["返回随机数据",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回随机数据",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["可以在 ",(0,r.jsx)(n.code,{children:"config/mock/index.js"})," 中自主引入 ",(0,r.jsx)(n.a,{href:"https://github.com/nuysoft/Mock/wiki/Getting-Started",target:"_blank",rel:"noopener noreferrer",children:"Mock.js"})," 等库生成随机数据，例如："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Mock = require('mockjs');\n\nmodule.exports = {\n  '/api/getInfo': Mock.mock({\n    'data|1-10': [{ name: '@cname' }],\n  }) /* => {data: [{name: \"董霞\"}, {name: \"魏敏\"},  {name: \"石磊\"}} */,\n};\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"更多随机数据生成库"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/chancejs/chancejs",target:"_blank",rel:"noopener noreferrer",children:"Chancejs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/nuysoft/Mock/wiki/Getting-Started",target:"_blank",rel:"noopener noreferrer",children:"Mock"})}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"延迟返回",children:["延迟返回",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#延迟返回",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"可以使用浏览器「 弱网模拟 」的功能实现。"}),"\n",(0,r.jsxs)(n.li,{children:["可以通过 ",(0,r.jsx)(n.code,{children:"setTimeout"})," 为单个接口设置延迟，例如："]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  'api/getInfo': (req, res) => {\n    setTimeout(() => {\n      res.end('delay 2000ms');\n    }, 2000);\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"按需使用-mock-服务",children:["按需使用 Mock 服务",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#按需使用-mock-服务",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"config/mock/index.ts"})," 下还可以到处 ",(0,r.jsx)(n.code,{children:"config"})," 对象，更精细的控制 Mock 服务。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type MockConfig = {\n  enable: ((req: IncomingMessage, res: ServerResponse) => boolean) | boolean;\n};\n\nexport const config = {\n  enable: false\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["目前仅支持 ",(0,r.jsx)(n.code,{children:"enable"})," 配置，开发者可以通过该配置控制是否执行 Mock。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["修改 ",(0,r.jsx)(n.code,{children:"config"})," 后无需重启服务，即刻生效。\n"]})})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);