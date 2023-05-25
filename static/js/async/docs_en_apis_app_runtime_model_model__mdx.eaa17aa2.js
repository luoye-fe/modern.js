(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_model_model__mdx"],{19559:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return r},default:function(){return a}});var s=t("9880"),d=t("23169"),o=t.ir(t("55434")),i={sidebar_position:1,title:"model"},c="model",r=[{text:"model",depth:2,id:"model-1"},{text:"define",depth:2,id:"define"},{text:"Object Type",depth:3,id:"object-type"},{text:"Function Type",depth:3,id:"function-type"},{text:"Input",depth:3,id:"input"},{text:"ModelDesc.state",depth:4,id:"modeldescstate"},{text:"ModelDesc.actions",depth:4,id:"modeldescactions"},{text:"ModelDesc.computed",depth:4,id:"modeldesccomputed"},{text:"ModelDesc.effects",depth:4,id:"modeldesceffects"}];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",strong:"strong",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",h3:"h3",h4:"h4",ol:"ol"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"model",children:["model",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model",children:"#"})]}),"\n","\n",(0,s.jsx)(o.default,{}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["The original type of Reduck is complex. The following type definition shows the simplified type information. For the original type, see ",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/store/src/model/model.ts",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.strong,{children:"model"})}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"model-1",children:["model",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Create a Model for managing application state."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"function model(name: string): { define: function }"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["name: ",(0,s.jsx)(n.code,{children:"string"}),", the unique id of the Model created."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="example"',children:"model('foo');\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"define",children:["define",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#define",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Used to define the detailed structure of the Model, supporting passing in an object type or function type parameter."}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"function define(modelDesc: ModelDesc): Model;"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["modelDesc: ",(0,s.jsx)(n.code,{children:"ModelDesc"}),", definition of Model structure, includes ",(0,s.jsx)(n.code,{children:"state"}),"、",(0,s.jsx)(n.code,{children:"computed"}),"、",(0,s.jsx)(n.code,{children:"actions"}),"、",(0,s.jsx)(n.code,{children:"effects"})," etc. props."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="example"',children:"const fooModel = model('foo').define({\n  state: 'foo',\n  computed: {\n    cFoo: state => `c${state}`,\n  },\n  actions: {\n    setState: (state, value) => {\n      return value;\n    },\n  },\n  effects: {\n    loadState: async () => {\n      // get state from remote\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"function define((context: Context, utils: Utils) => ModelDesc): Model;"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"context"}),": Reduck Context, can get underlying ",(0,s.jsx)(n.code,{children:"store"})," object. ",(0,s.jsx)(n.code,{children:"store"})," support all Redux Store ",(0,s.jsx)(n.a,{href:"https://redux.js.org/api/store",target:"_blank",rel:"noopener noreferrer",children:"API"}),", also mounts the ",(0,s.jsx)(n.code,{children:"use"})," method for consuming the Model, and the ",(0,s.jsx)(n.code,{children:"unmount"})," method for unmounting the Model."]}),"\n",(0,s.jsxs)(n.li,{children:["utils: commonly used tool like ",(0,s.jsx)(n.code,{children:"use"}),"、",(0,s.jsx)(n.code,{children:"onMount"}),". ",(0,s.jsx)(n.code,{children:"use"})," is the same as ",(0,s.jsx)(n.code,{children:"store.use"}),", ",(0,s.jsx)(n.code,{children:"onMount"})," is the hook function after the Model is mounted."]}),"\n"]}),"\n","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Utils {\n  use: UseModel;\n  onMount: OnMountHook;\n}\n\ninterface Context {\n  store: ReduxStore & {\n    use: UseModel;\n    unmount: (model: Model) => void;\n  };\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For example, through ",(0,s.jsx)(n.code,{children:"use"}),", you can get the ",(0,s.jsx)(n.code,{children:"state"})," and ",(0,s.jsx)(n.code,{children:"actions"})," of the Model itself and other Models."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="example"',children:"const fooModel = model('foo').define(() => {\n  return {\n    state: 'foo',\n    actions: {\n      setState: (state, value) => {\n        return value;\n      },\n    },\n  };\n});\n\nconst barModel = model('bar').define((_, { use }) => {\n  return {\n    state: 'bar',\n    effects: {\n      syncFoo() {\n        const [state, actions] = use(fooModel);\n        actions.setState(state);\n      },\n    },\n  };\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"input",children:["Input",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"modeldescstate",children:["ModelDesc.state",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldescstate",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Define the state of the Model. Technically, any type of ",(0,s.jsx)(n.strong,{children:"State"})," is supported, but in practice it is recommended to use a JSON serializable type."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  state: any;\n}\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"modeldescactions",children:["ModelDesc.actions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldescactions",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Define the Actions of the Model. The function type of Actions is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  actions: {\n    [actionKey: string]: (state: State, payload: any) => State | void;\n  };\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Reduck internally integrates ",(0,s.jsx)(n.a,{href:"https://github.com/immerjs/immer",target:"_blank",rel:"noopener noreferrer",children:"immer"}),", which can directly return the original ",(0,s.jsx)(n.code,{children:"state"}),". When the Action has no explicit return value, Reduck internally returns a modified new State object."]}),"\n",(0,s.jsxs)(n.h4,{id:"modeldesccomputed",children:["ModelDesc.computed",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldesccomputed",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Defines the derived state of the Model. The definition of derived state supports two types:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Depends only on the state of the Model itself"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  computed: {\n    [computedKey: string]: (state: State) => any;\n  };\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Depends on the state of other Models"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  computed: {\n    [computedKey: string]: [\n      ...models: Model[],\n      (state: State, ...args: ModelState[]) => any,\n    ];\n  };\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="example"',children:"const fooModel = model('foo').define({\n  state: 'foo',\n});\n\nconst barModel = model('bar').define({\n  state: 'bar',\n  computed: {\n    combineFoo: [fooModel, (state, fooState) => state + fooState],\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"modeldesceffects",children:["ModelDesc.effects",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldesceffects",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Defines the Effects of the Model. The function types defined in Effects are:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  effects: {\n    [effectKey: string]: (...args: any[]) => any;\n  };\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="example"',children:"const fooModel = model('foo').define((context, { use }) => ({\n  state: 'foo',\n  effects: {\n    persist() {\n      const [state] = use(fooModel);\n      localStorage.setItem('state', state);\n    },\n  },\n}));\n"})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"More"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/guides/topic-detail/model/define-model",children:"Define Model"}),"."]}),"\n"]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);