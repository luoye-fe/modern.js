(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_model_model__mdx"],{4639:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return a},toc:function(){return l},default:function(){return r}});var d=s("9880"),c=s("23169"),t=s.ir(s("72375")),o={sidebar_position:1,title:"model"},a="model",l=[{text:"model",depth:2,id:"model-1"},{text:"define",depth:2,id:"define"},{text:"对象类型",depth:3,id:"对象类型"},{text:"函数类型",depth:3,id:"函数类型"},{text:"参数",depth:3,id:"参数"},{text:"ModelDesc.state",depth:4,id:"modeldesc-state"},{text:"ModelDesc.actions",depth:4,id:"modeldesc-actions"},{text:"ModelDesc.computed",depth:4,id:"modeldesc-computed"},{text:"ModelDesc.effects",depth:4,id:"modeldesc-effects"}];function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",strong:"strong",h2:"h2",code:"code",ul:"ul",li:"li",button:"button",pre:"pre",h3:"h3",h4:"h4",ol:"ol"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"model",children:["model",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model",children:"#"})]}),"\n","\n",(0,d.jsx)(t.default,{}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"提示"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["Reduck 原始类型较为复杂，以下涉及类型定义的地方，展示的是简化后的类型信息。原始类型见 ",(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/store/src/model/model.ts",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(n.strong,{children:"model"})}),"。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"model-1",children:["model",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-1",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"用于创建管理应用状态的 Model。"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"function model(name: string): { define: function }"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["name：",(0,d.jsx)(n.code,{children:"string"}),"，创建的 Model 的唯一标识。"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"示例"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="示例"',children:"model('foo');\n"})})]})]}),"\n",(0,d.jsxs)(n.h2,{id:"define",children:["define",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#define",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"用于定义 Model 的详细结构，支持传入一个对象类型或函数类型的参数。"}),"\n",(0,d.jsxs)(n.h3,{id:"对象类型",children:["对象类型",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#对象类型",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"function define(modelDesc: ModelDesc): Model;"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["modelDesc: ",(0,d.jsx)(n.code,{children:"ModelDesc"}),"，对 Model 结构的定义，包含 ",(0,d.jsx)(n.code,{children:"state"}),"、",(0,d.jsx)(n.code,{children:"computed"}),"、",(0,d.jsx)(n.code,{children:"actions"}),"、",(0,d.jsx)(n.code,{children:"effects"})," 等属性。"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"示例"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-tsx",meta:'title="示例"',children:"const fooModel = model('foo').define({\n  state: 'foo',\n  computed: {\n    cFoo: state => `c${state}`,\n  },\n  actions: {\n    setState: (state, value) => {\n      return value;\n    },\n  },\n  effects: {\n    loadState: async () => {\n      // 从服务端获取 state\n    },\n  },\n});\n"})})]})]}),"\n",(0,d.jsxs)(n.h3,{id:"函数类型",children:["函数类型",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数类型",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"function define((context: Context, utils: Utils) => ModelDesc): Model;"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["context: Context，Reduck 上下文对象，可以获取底层的 ",(0,d.jsx)(n.code,{children:"store"})," 对象。",(0,d.jsx)(n.code,{children:"store"})," 除支持 Redux Store 的所有 ",(0,d.jsx)(n.a,{href:"https://redux.js.org/api/store",target:"_blank",rel:"noopener noreferrer",children:"API"})," 以外，还挂载了用于消费 Model 的 ",(0,d.jsx)(n.code,{children:"use"})," 的方法，和用于卸载 Model 的 ",(0,d.jsx)(n.code,{children:"unmount"})," 方法。"]}),"\n",(0,d.jsxs)(n.li,{children:["utils: Utils，定义 Model 时，常用的工具函数：",(0,d.jsx)(n.code,{children:"use"}),"、",(0,d.jsx)(n.code,{children:"onMount"}),"。",(0,d.jsx)(n.code,{children:"use"})," 作用同 ",(0,d.jsx)(n.code,{children:"store"})," 对象上的 ",(0,d.jsx)(n.code,{children:"use"}),"，",(0,d.jsx)(n.code,{children:"onMount"})," 是 Model 挂载后的钩子函数。"]}),"\n"]}),"\n","\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface Utils {\n  use: UseModel;\n  onMount: OnMountHook;\n}\n\ninterface Context {\n  store: ReduxStore & {\n    use: UseModel;\n    unmount: (model: Model) => void;\n  };\n}\n"})})]})}),"\n",(0,d.jsxs)(n.p,{children:["如通过 ",(0,d.jsx)(n.code,{children:"use"}),"，可以获取 Model 自身及其它 Model 的 ",(0,d.jsx)(n.code,{children:"state"}),"，",(0,d.jsx)(n.code,{children:"actions"}),"。"]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"示例"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-tsx",meta:'title="示例"',children:"const fooModel = model('foo').define(() => {\n  return {\n    state: 'foo',\n    actions: {\n      setState: (state, value) => {\n        return value;\n      },\n    },\n  };\n});\n\nconst barModel = model('bar').define((_, { use }) => {\n  return {\n    state: 'bar',\n    effects: {\n      syncFoo() {\n        const [state, actions] = use(fooModel);\n        actions.setState(state);\n      },\n    },\n  };\n});\n"})})]})]}),"\n",(0,d.jsxs)(n.h3,{id:"参数",children:["参数",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,d.jsxs)(n.h4,{id:"modeldesc-state",children:["ModelDesc.state",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldesc-state",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["定义 Model 的状态。技术上，支持任意类型的 ",(0,d.jsx)(n.strong,{children:"State"}),"，但是实践中建议使用可进行 JSON 序列化的类型。"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  state: any;\n}\n"})})]})}),"\n",(0,d.jsxs)(n.h4,{id:"modeldesc-actions",children:["ModelDesc.actions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldesc-actions",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"定义 Model 的 Actions。Actions 的函数类型为："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  actions: {\n    [actionKey: string]: (state: State, payload: any) => State | void;\n  };\n}\n"})})]})}),"\n",(0,d.jsxs)(n.p,{children:["Reduck 内部集成了 ",(0,d.jsx)(n.a,{href:"https://github.com/immerjs/immer",target:"_blank",rel:"noopener noreferrer",children:"immer"}),"，可以直接原始的 ",(0,d.jsx)(n.code,{children:"state"}),"，当 Action 没有显式返回值时，Reduck 内部会返回修改过的新的 State 对象。"]}),"\n",(0,d.jsxs)(n.h4,{id:"modeldesc-computed",children:["ModelDesc.computed",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldesc-computed",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"定义 Model 的衍生状态。衍生状态的定义支持两种类型："}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"只依赖 Model 自身的状态"}),"\n"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  computed: {\n    [computedKey: string]: (state: State) => any;\n  };\n}\n"})})]})}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsx)(n.li,{children:"依赖其他 Model 的状态"}),"\n"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  computed: {\n    [computedKey: string]: [\n      ...models: Model[],\n      (state: State, ...args: ModelState[]) => any,\n    ];\n  };\n}\n"})})]})}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"示例"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="示例"',children:"const fooModel = model('foo').define({\n  state: 'foo',\n});\n\nconst barModel = model('bar').define({\n  state: 'bar',\n  computed: {\n    combineFoo: [fooModel, (state, fooState) => state + fooState],\n  },\n});\n"})})]})]}),"\n",(0,d.jsxs)(n.h4,{id:"modeldesc-effects",children:["ModelDesc.effects",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldesc-effects",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"定义 Model 的 Effects。Effects 中定义的函数类型为："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  effects: {\n    [effectKey: string]: (...args: any[]) => any;\n  };\n}\n"})})]})}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"示例"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="示例"',children:"const fooModel = model('foo').define((context, { use }) => ({\n  state: 'foo',\n  effects: {\n    persist() {\n      const [state] = use(fooModel);\n      localStorage.setItem('state', state);\n    },\n  },\n}));\n"})})]})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"更多参考"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/define-model",children:"创建 Model"})}),"\n"]})]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(i,e)})):i(e)}}}]);