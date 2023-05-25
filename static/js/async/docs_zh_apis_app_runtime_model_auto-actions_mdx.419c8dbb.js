(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_model_auto-actions_mdx"],{24403:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return d},title:function(){return r},toc:function(){return a},default:function(){return l}});var s=t("9880"),i=t("23169"),c=t.ir(t("4711")),d={sidebar_position:6,title:"Auto actions"},r="Auto actions",a=[{text:"示例",depth:2,id:"示例"},{text:"基础数据类型",depth:3,id:"基础数据类型"},{text:"数组 Array",depth:3,id:"数组-array"},{text:"简单对象 PlainObject",depth:3,id:"简单对象-plainobject"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"auto-actions",children:["Auto actions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#auto-actions",children:"#"})]}),"\n","\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsx)(n.p,{children:"Reduck 可以根据 State 的类型，自动生成相应的 Actions，为修改 State 提供便利。"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"提示"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["可通过 ",(0,s.jsx)(n.a,{href:"/configure/app/runtime/state#autoactions",children:(0,s.jsx)(n.code,{children:"runtime.state.autoActions"})})," 关闭 auto actions 功能。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"基础数据类型",children:["基础数据类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基础数据类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["State 类型为 ",(0,s.jsx)(n.code,{children:"string"}),"、",(0,s.jsx)(n.code,{children:"number"}),"、",(0,s.jsx)(n.code,{children:"boolean"}),"、",(0,s.jsx)(n.code,{children:"null"})," 时，生成 ",(0,s.jsx)(n.code,{children:"setState"})," Action。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="示例"',children:"const fooModel = model('foo').define({\n  state: 1,\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n      <button\n        type=\"button\"\n        onClick={() => {\n          // 调用自动生成的 setState Action\n          actions.setState(state + 1);\n        }}\n      >\n        add\n      </button>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"数组-array",children:["数组 Array",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#数组-array",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"State 类型为 Array 时，生成下列 Actions："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"push"}),"：将一个或多个元素添加到数组的末尾。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pop"}),"：从数组中删除最后一个元素。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shift"}),"：从数组中删除第一个元素。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"unshift"}),"：将一个或多个元素添加到数组的开头。","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["语法：",(0,s.jsx)(n.code,{children:"arr.unshift(element1, ..., elementN)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"elementN"}),"：要添加到数组开头的元素或多个元素。"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"filter"}),"：过滤元素。"]}),"\n"]}),"\n","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"concat"}),"：拼接数组。"]}),"\n"]}),"\n","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"splice"}),"：通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回修改后的数组（注意和原生 ",(0,s.jsx)(n.code,{children:"splice"})," 返回值不同）。","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["语法：",(0,s.jsx)(n.code,{children:"splice(start[, deleteCount[, item1[, item2[, ...]]]])"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"start"}),"：指定修改的开始位置（从 0 计数）。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"deleteCount"}),"：可选，整数，表示要移除的数组元素的个数。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"item, item2, ..."}),"：可选，要添加进数组的元素，从 start 位置开始。如果不指定，则 ",(0,s.jsx)(n.code,{children:"splice"})," 将只删除数组元素。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="示例"',children:"const fooModel = model('foo').define({\n  state: [1, 2, 3],\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.push(4);\n    actions.pop();\n    actions.shift(0);\n    actions.unshift();\n    actions.filter(val => val <= 2);\n    actions.splice(0, 1, 1, 2);\n  }, []);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"简单对象-plainobject",children:["简单对象 PlainObject",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#简单对象-plainobject",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["State 类型为 PlainObject 时，根据 State 包含的属性名，生成 ",(0,s.jsx)(n.code,{children:"set${key}"}),"（小驼峰命名）Actions。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="示例"',children:"const fooModel = model('foo').define({\n  state: {\n    a: 1,\n    b: { value: 1 },\n    c: 'c',\n  },\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.setA(2);\n    actions.setB({ value: 2 });\n    actions.setC('d');\n  }, []);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n    </div>\n  );\n}\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);