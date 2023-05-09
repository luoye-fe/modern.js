(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_model_use-model_mdx"],{58977:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{frontmatter:function(){return o},title:function(){return c},toc:function(){return l},default:function(){return r}});var n=s("12151"),d=s("23169"),i=s.ir(s("48911")),o={sidebar_position:2,title:"useModel"},c="useModel",l=[{text:"函数签名",depth:2,id:"函数签名"},{text:"参数",depth:3,id:"参数"},{text:"返回值",depth:3,id:"返回值"},{text:"示例",depth:2,id:"示例"},{text:"基本用法",depth:3,id:"基本用法"},{text:"selector 用法",depth:3,id:"selector-用法"}];function a(e){var t=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",button:"button",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"usemodel",children:["useModel",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#usemodel",children:"#"})]}),"\n","\n",(0,n.jsx)(i.default,{}),"\n",(0,n.jsxs)(t.div,{className:"modern-directive tip",children:[(0,n.jsx)(t.div,{className:"modern-directive-title",children:"提示"}),(0,n.jsxs)(t.div,{className:"modern-directive-content",children:[(0,n.jsxs)(t.p,{children:["Reduck 原始类型较为复杂，以下涉及类型定义的地方，展示的是简化后的类型信息。原始类型见 ",(0,n.jsx)(t.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/store/src/model/useModel.ts",target:"_blank",rel:"noopener noreferrer",children:"model"}),"。"]}),"\n"]})]}),"\n",(0,n.jsxs)(t.h2,{id:"函数签名",children:["函数签名",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,n.jsx)(t.div,{className:"language-",children:(0,n.jsxs)(t.div,{className:"modern-code-content",children:[(0,n.jsx)(t.button,{className:"copy"}),(0,n.jsx)(t.pre,{className:"code",children:(0,n.jsx)(t.code,{className:"language-ts",children:"function useModel(\n  models: Models[],\n  stateSelector?: StateSelector,\n  actionSelector?: ActionSelector,\n): [state, actions, subscribe];\nfunction useModel(\n  ...models: Models[],\n  stateSelector?: (...args: State[]) => any,\n  actionSelector?: (...args: Actions[]) => any,\n): [state, actions, subscribe];\n"})})]})}),"\n",(0,n.jsxs)(t.h3,{id:"参数",children:["参数",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"models：Model 对象数组，可以作为一个数组类型的参数传入，也可以所有 Model 逐个作为参数传入。"}),"\n",(0,n.jsxs)(t.li,{children:["stateSelector：可选参数，用于筛选 State 计算。前 n 个参数为 n 个 Model 对应的 State，返回的数据作为 ",(0,n.jsx)(t.code,{children:"useModel"})," 返回值数组的第一个元素。"]}),"\n",(0,n.jsxs)(t.li,{children:["actionSelector：可选参数，用于筛选 Actions 计算。前 n 个参数为 n 个 Model 对应的 Actions，返回的数据作为 ",(0,n.jsx)(t.code,{children:"useModel"})," 返回值数组的第二个元素。"]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"返回值",children:["返回值",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,n.jsx)(t.p,{children:"返回一个数组，每一项元素分别为："}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["state：",(0,n.jsx)(t.code,{children:"stateSelector"})," 的返回值。如果未传 ",(0,n.jsx)(t.code,{children:"stateSelector"}),"，会把传入的所有 Model 的 State (包含衍生状态)合并后返回。如果不同 Model 的 State 中存在同名属性，后面的 State 会覆盖前面的 State。当 ",(0,n.jsx)(t.code,{children:"state"})," 发生变化时，调用 ",(0,n.jsx)(t.code,{children:"useModel"})," 的组件会重新渲染。"]}),"\n",(0,n.jsxs)(t.li,{children:["actions：第二个元素为 ",(0,n.jsx)(t.code,{children:"actionSelector"})," 的返回值。如果未传 ",(0,n.jsx)(t.code,{children:"actionSelector"}),"，会把传入的所有 Model 的 Actions (包含 Effects) 合并后返回。如果不同 Model 的 Actions 中存在同名属性，后面的 Actions 会覆盖前面的 Actions。"]}),"\n",(0,n.jsx)(t.li,{children:"subscribe：订阅 State 变化的函数。当传入的任意 Model 的 State 发生改变时，该函数会被调用。"}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"示例",children:["示例",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,n.jsxs)(t.h3,{id:"基本用法",children:["基本用法",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#基本用法",children:"#"})]}),"\n",(0,n.jsx)(t.div,{className:"language-",children:(0,n.jsxs)(t.div,{className:"modern-code-content",children:[(0,n.jsx)(t.button,{className:"copy"}),(0,n.jsx)(t.pre,{className:"code",children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import todoModel from 'models/todo';\nimport filterModel from 'models/filter';\n\nfunction Test(props) {\n  const [state, actions] = useModel([todoModel, filterModel]);\n  actions.add(); // 调用 todoModel add action\n  actions.setVisibleStatus(); // 调用 filterModel filterModel action\n\n  state.items; // 获取 todoModel state items\n  state.visibleStatus; // 获取 filterModel state visibleStatus\n}\n"})})]})}),"\n",(0,n.jsxs)(t.h3,{id:"selector-用法",children:["selector 用法",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#selector-用法",children:"#"})]}),"\n",(0,n.jsx)(t.div,{className:"language-",children:(0,n.jsxs)(t.div,{className:"modern-code-content",children:[(0,n.jsx)(t.button,{className:"copy"}),(0,n.jsx)(t.pre,{className:"code",children:(0,n.jsx)(t.code,{className:"language-js",children:"function Test(props) {\n  const [state, actions] = useModel(\n    [todoModel, filterModel],\n    (todoState, filterState) => ({\n      items: todoState.items,\n      visibleStatus: `${props.prefix}-${filterState.visibleStatus}`,\n    }),\n    (todoActions, filterActions) => ({\n      ...todoActions,\n      ...filterActions,\n    }),\n  );\n  actions.add(); // 调用 todoModel add action\n  actions.setVisibleStatus(); // 调用 filterModel filterModel action\n\n  state.items; // 获取 todoModel state items\n  state.visibleStatus; // 获取 filterModel state visibleStatus\n}\n"})})]})}),"\n",(0,n.jsxs)(t.div,{className:"modern-directive info",children:[(0,n.jsx)(t.div,{className:"modern-directive-title",children:"更多参考"}),(0,n.jsxs)(t.div,{className:"modern-directive-content",children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/guides/topic-detail/model/use-model",children:"使用 Model"})}),"\n"]})]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}}}]);