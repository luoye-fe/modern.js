(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_input_setInputValue_mdx"],{6972:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return a},default:function(){return o}});var r=t("9880"),s=t("23169"),i={sidebar_position:7},c="setInputValue",a=[{text:"示例",depth:2,id:"示例"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",h2:"h2",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"setinputvalue",children:["setInputValue",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setinputvalue",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"设置输入默认值。"}),"\n",(0,r.jsx)(n.p,{children:"该方法可直接在 context 上获取。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export interface IPluginContext {\n    setInputValue: (value: Record<string, unknown>) => void;\n  ...\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"示例",children:["示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"context.setInputValue({\n  moduleRunWay: 'no',\n});\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive warning",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["该方法只支持设置生成器插件集成的工程方案对应的配置参数值，不支持设置工程方案类型(solution)和项目场景(scenes)，这两个配置可以通过执行时的 ",(0,r.jsx)(n.code,{children:"--config"})," 参数设置默认值。"]}),"\n"]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);