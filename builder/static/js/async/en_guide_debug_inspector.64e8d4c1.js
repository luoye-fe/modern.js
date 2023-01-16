"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[6093],{17723:function(e,n,s){s.r(n),s.d(n,{content:function(){return i},frontmatter:function(){return o},title:function(){return c},toc:function(){return t}});var l=s(39980);const o=void 0,t=[{id:"introduce",text:"Introduce",depth:2},{id:"enable",text:"Enable",depth:2},{id:"debug-panel",text:"Debug Panel",depth:2},{id:"config-preview-mode",text:"Config Preview Mode",depth:3},{id:"list-mode",text:"List Mode",depth:3},{id:"loader-statistics",text:"Loader Statistics",depth:3},{id:"dependency-graph-mode",text:"Dependency Graph Mode",depth:3}],c="Using Webpack Inspector",i="\"# Using Webpack Inspector\\n\\nBuilder has a built-in [webpack inspector](https://github.com/modern-js-dev/webpack-inspector) to debug webpack.\\n\\n## Introduce\\n\\nThe internal workflow of webpack is relatively black box, when using webpack, we often encounter the following problems:\\n\\n- When using some upper-level frameworks, I don't know what the final generated webpack config contains.\\n- Each module will be processed by different loaders, and the compilation results of each loader are difficult to perceive.\\n- It is difficult to analyze the time cost of each webpack loader (such as babel-loader, ts-loader).\\n\\nIn order to make performance analysis, error investigation and loader development more convenient, we provide the [webpack inspector](https://github.com/modern-js-dev/webpack-inspector) tool in the Builder.\\n\\n## Enable\\n\\nYou can enable webpack inspector through [tools.inspector](/en/api/config-tools.html#tools-inspector) config:\\n\\n```ts\\nexport default {\\n  tools: {\\n    inspector: {},\\n  },\\n};\\n```\\n\\nIn order to prevent the inspector from affecting normal development, it is recommended to enable the inspector only in DEBUG mode:\\n\\n```ts\\nexport default {\\n  tools: {\\n    inspector: process.env.DEBUG ? {} : undefined,\\n  },\\n};\\n```\\n\\nAfter adding the above config, when you execute `DEBUG=true pnpm dev`, Builder will start the inspector after the compilation is complete. At this time, you can see the following information in the Shell:\\n\\n```shell\\ninfo    Starting dev server...\\n\\n\u3010Webpack Inspector\u3011\ud83d\udd25 started at http://localhost:3333\\n```\\n\\nOpen the `http://localhost:3333` address to access the debug panel of the inspector.\\n\\n## Debug Panel\\n\\nThe Inspector's debugging panel provides multiple modes, which you can switch through the buttons in the upper right corner.\\n\\n### Config Preview Mode\\n\\nThe default mode of the panel is config preview mode. In this mode, you can view all config information inside webpack, and the config object can be expanded or collapsed:\\n\\n![](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/39248c0f-b1cd-4ea5-b522-3ebba7569497.png)\\n\\n### List Mode\\n\\nIn this mode, all module information will be displayed:\\n\\n![](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/8ff3bba0-7824-43b3-996f-7a3b5d2c4f59.png)\\n\\nClicking on the list item will display the compilation details of the module:\\n\\n![](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/output.png)\\n\\n### Loader Statistics\\n\\nClick the following switch to view loader statistics:\\n\\n![](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/c0697cd6-963f-4169-8dc3-dc178641a861.png)\\n\\n### Dependency Graph Mode\\n\\nIn this mode, the dependencies of all modules will be displayed:\\n\\n![](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/9ee30176-e993-4638-83d0-add14484b1b2.png)\\n\\nClicking on a node in the graph will also display the compilation details of the specific module:\\n\\n![](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/6f4b6cc7-94c8-446a-8b64-86ca98fbdca7.png)\\n\\n:::tip\\nFor performance reasons, the dependency graph is not displayed when the number of modules is > 100.\\n:::\\n\"";function a(e){const n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",div:"div",button:"button",pre:"pre",code:"code",span:"span",h3:"h3",img:"img"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"using-webpack-inspector",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-webpack-inspector",children:"#"}),"Using Webpack Inspector"]}),"\n",(0,l.jsxs)(n.p,{children:["Builder has a built-in ",(0,l.jsx)(n.a,{href:"https://github.com/modern-js-dev/webpack-inspector",target:"_blank",rel:"nofollow",children:"webpack inspector"})," to debug webpack."]}),"\n",(0,l.jsxs)(n.h2,{id:"introduce",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduce",children:"#"}),"Introduce"]}),"\n",(0,l.jsx)(n.p,{children:"The internal workflow of webpack is relatively black box, when using webpack, we often encounter the following problems:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"When using some upper-level frameworks, I don't know what the final generated webpack config contains."}),"\n",(0,l.jsx)(n.li,{children:"Each module will be processed by different loaders, and the compilation results of each loader are difficult to perceive."}),"\n",(0,l.jsx)(n.li,{children:"It is difficult to analyze the time cost of each webpack loader (such as babel-loader, ts-loader)."}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["In order to make performance analysis, error investigation and loader development more convenient, we provide the ",(0,l.jsx)(n.a,{href:"https://github.com/modern-js-dev/webpack-inspector",target:"_blank",rel:"nofollow",children:"webpack inspector"})," tool in the Builder."]}),"\n",(0,l.jsxs)(n.h2,{id:"enable",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable",children:"#"}),"Enable"]}),"\n",(0,l.jsxs)(n.p,{children:["You can enable webpack inspector through ",(0,l.jsx)(n.a,{href:"/builder/en/api/config-tools.html#tools-inspector-3",children:"tools.inspector"})," config:"]}),"\n",(0,l.jsxs)(n.div,{className:"language-ts",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"tools"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"inspector"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{},"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(n.p,{children:"In order to prevent the inspector from affecting normal development, it is recommended to enable the inspector only in DEBUG mode:"}),"\n",(0,l.jsxs)(n.div,{className:"language-ts",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"tools"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"inspector"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"process"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"env"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"DEBUG"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"?"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{}"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"undefined"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(n.p,{children:["After adding the above config, when you execute ",(0,l.jsx)(n.code,{children:"DEBUG=true pnpm dev"}),", Builder will start the inspector after the compilation is complete. At this time, you can see the following information in the Shell:"]}),"\n",(0,l.jsxs)(n.div,{className:"language-shell",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"info    Starting dev server..."})}),"\n",(0,l.jsx)(n.span,{className:"line"}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"\u3010Webpack Inspector\u3011\ud83d\udd25 started at http://localhost:3333"})}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(n.p,{children:["Open the ",(0,l.jsx)(n.code,{children:"http://localhost:3333"})," address to access the debug panel of the inspector."]}),"\n",(0,l.jsxs)(n.h2,{id:"debug-panel",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debug-panel",children:"#"}),"Debug Panel"]}),"\n",(0,l.jsx)(n.p,{children:"The Inspector's debugging panel provides multiple modes, which you can switch through the buttons in the upper right corner."}),"\n",(0,l.jsxs)(n.h3,{id:"config-preview-mode",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-preview-mode",children:"#"}),"Config Preview Mode"]}),"\n",(0,l.jsx)(n.p,{children:"The default mode of the panel is config preview mode. In this mode, you can view all config information inside webpack, and the config object can be expanded or collapsed:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/39248c0f-b1cd-4ea5-b522-3ebba7569497.png",alt:""})}),"\n",(0,l.jsxs)(n.h3,{id:"list-mode",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#list-mode",children:"#"}),"List Mode"]}),"\n",(0,l.jsx)(n.p,{children:"In this mode, all module information will be displayed:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/8ff3bba0-7824-43b3-996f-7a3b5d2c4f59.png",alt:""})}),"\n",(0,l.jsx)(n.p,{children:"Clicking on the list item will display the compilation details of the module:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/output.png",alt:""})}),"\n",(0,l.jsxs)(n.h3,{id:"loader-statistics",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loader-statistics",children:"#"}),"Loader Statistics"]}),"\n",(0,l.jsx)(n.p,{children:"Click the following switch to view loader statistics:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/c0697cd6-963f-4169-8dc3-dc178641a861.png",alt:""})}),"\n",(0,l.jsxs)(n.h3,{id:"dependency-graph-mode",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dependency-graph-mode",children:"#"}),"Dependency Graph Mode"]}),"\n",(0,l.jsx)(n.p,{children:"In this mode, the dependencies of all modules will be displayed:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/9ee30176-e993-4638-83d0-add14484b1b2.png",alt:""})}),"\n",(0,l.jsx)(n.p,{children:"Clicking on a node in the graph will also display the compilation details of the specific module:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/6f4b6cc7-94c8-446a-8b64-86ca98fbdca7.png",alt:""})}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsx)(n.p,{children:"\nFor performance reasons, the dependency graph is not displayed when the number of modules is > 100."})})]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(a,e)})):a(e)}}}]);