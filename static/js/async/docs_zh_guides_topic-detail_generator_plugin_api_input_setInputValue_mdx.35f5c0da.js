(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_input_setInputValue_mdx"],{96737:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return r},toc:function(){return i},default:function(){return o}});var t=s("12151"),c=s("23169"),a={sidebar_position:7},r="setInputValue",i=[{text:"示例",depth:2,id:"示例"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",button:"button",pre:"pre",code:"code",h2:"h2"},(0,c.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"setinputvalue",children:["setInputValue",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setinputvalue",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"设置输入默认值。"}),"\n",(0,t.jsx)(n.p,{children:"该方法可直接在 context 上获取。"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface IPluginContext {\n    setInputValue: (value: Record<string, unknown>) => void;\n  ...\n}\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"示例",children:["示例",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"context.setInputValue({\n  moduleRunWay: 'no',\n});\n"})})]})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive warning",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["该方法只支持设置生成器插件集成的工程方案对应的配置参数值，不支持设置工程方案类型(solution)和项目场景(scenes)，这两个配置可以通过执行时的 ",(0,t.jsx)(n.code,{children:"--config"})," 参数设置默认值。"]}),"\n"]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);