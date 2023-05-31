(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_model_use-model_mdx"],{37654:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{frontmatter:function(){return a},title:function(){return o},toc:function(){return l},default:function(){return c}});var s=n("9880"),i=n("23169"),r=n.ir(n("8650")),a={sidebar_position:2,title:"useModel"},o="useModel",l=[{text:"Function Signature",depth:2,id:"function-signature"},{text:"Input",depth:3,id:"input"},{text:"Return Value",depth:3,id:"return-value"},{text:"Example",depth:2,id:"example"},{text:"Basic",depth:3,id:"basic"},{text:"Selector Usage",depth:3,id:"selector-usage"}];function d(e){var t=Object.assign({h1:"h1",a:"a",div:"div",p:"p",strong:"strong",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"usemodel",children:["useModel",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#usemodel",children:"#"})]}),"\n","\n",(0,s.jsx)(r.default,{}),"\n",(0,s.jsxs)(t.div,{className:"modern-directive tip",children:[(0,s.jsx)(t.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsxs)(t.div,{className:"modern-directive-content",children:[(0,s.jsxs)(t.p,{children:["The original type of Reduck is complex. The following type definition shows the simplified type information. For the original type, see ",(0,s.jsx)(t.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/store/src/model/model.ts",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(t.strong,{children:"model"})}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(t.h2,{id:"function-signature",children:["Function Signature",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"function useModel(\n  models: Models[],\n  stateSelector?: StateSelector,\n  actionSelector?: ActionSelector,\n): [state, actions, subscribe];\nfunction useModel(\n  ...models: Models[],\n  stateSelector?: (...args: State[]) => any,\n  actionSelector?: (...args: Actions[]) => any,\n): [state, actions, subscribe];\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"input",children:["Input",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"models: Array of Model objects, which can be passed in as an array type parameter, or all Models can be passed in as parameters one by one."}),"\n",(0,s.jsxs)(t.li,{children:["stateSelector: Optional parameters, used to filter State calculations. The first n parameters are the States corresponding to n Models, and the returned data is used as the first element of the ",(0,s.jsx)(t.code,{children:"useModel"})," return value array."]}),"\n",(0,s.jsxs)(t.li,{children:["actionSelector: Optional parameters, used to filter Action calculations. The first n parameters are the States corresponding to n Models, and the returned data is used as the second element of the ",(0,s.jsx)(t.code,{children:"useModel"})," return value array."]}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"return-value",children:["Return Value",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"Returns an array with each value:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["state: return value of ",(0,s.jsx)(t.code,{children:"stateSelector"}),". if there is no ",(0,s.jsx)(t.code,{children:"stateSelector"}),", will combine all incoming Model States(including derived states) and return them. If there is an attribute of the same name in the State of different Models, the following State will override the previous State. when ",(0,s.jsx)(t.code,{children:"state"})," changes, the component call ",(0,s.jsx)(t.code,{children:"useModel"})," will re-render."]}),"\n",(0,s.jsxs)(t.li,{children:["actions: return value of ",(0,s.jsx)(t.code,{children:"actionSelector"}),". if there is no ",(0,s.jsx)(t.code,{children:"actionSelector"}),", will combine all incoming Model Action(including Effect) and return them. If there is an attribute of the same name in the Action of different Models, the following Action will override the previous Action."]}),"\n",(0,s.jsx)(t.li,{children:"subscribe: A function that subscribes to State changes. This function is called when the State of any Model passed in changes."}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"example",children:["Example",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(t.h3,{id:"basic",children:["Basic",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#basic",children:"#"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import todoModel from 'models/todo';\nimport filterModel from 'models/filter';\n\nfunction Test(props) {\n  const [state, actions] = useModel([todoModel, filterModel]);\n  actions.add(); // call todoModel add action\n  actions.setVisibleStatus(); // call filterModel filterModel action\n\n  state.items; // get todoModel state items\n  state.visibleStatus; // get filterModel state visibleStatus\n}\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"selector-usage",children:["Selector Usage",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#selector-usage",children:"#"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"function Test(props) {\n  const [state, actions] = useModel(\n    [todoModel, filterModel],\n    (todoState, filterState) => ({\n      items: todoState.items,\n      visibleStatus: `${props.prefix}-${filterState.visibleStatus}`,\n    }),\n    (todoActions, filterActions) => ({\n      ...todoActions,\n      ...filterActions,\n    }),\n  );\n  actions.add(); // call todoModel add action\n  actions.setVisibleStatus(); // call filterModel filterModel action\n\n  state.items; // get todoModel state items\n  state.visibleStatus; // get filterModel state visibleStatus\n}\n"})}),"\n",(0,s.jsxs)(t.div,{className:"modern-directive info",children:[(0,s.jsx)(t.div,{className:"modern-directive-title",children:"More"}),(0,s.jsxs)(t.div,{className:"modern-directive-content",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/guides/topic-detail/model/use-model",children:"use Model"}),"."]}),"\n"]})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);