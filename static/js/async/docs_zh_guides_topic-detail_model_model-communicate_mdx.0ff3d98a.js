(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_model_model-communicate_mdx"],{5807:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return t},toc:function(){return l},default:function(){return r}});var d=s("9880"),o=s("23169"),c={sidebar_position:7,title:"Model 通信"},t="Model 通信",l=[{text:"Model 间通信",depth:2,id:"model-间通信"},{text:"Model 内通信",depth:2,id:"model-内通信"}];function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre",div:"div",strong:"strong",ul:"ul",img:"img"},(0,o.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"model-通信",children:["Model 通信",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-通信",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Model 通信，既指不同 Model 间的通信，也指同一个 Model 内部 Effects、Actions 之间的通信。"}),"\n",(0,d.jsxs)(n.h2,{id:"model-间通信",children:["Model 间通信",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-间通信",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Model 之间不是孤立的，是可以进行通信的。主要分为两种场景："}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"在 Model 中访问其它 Model 的 State 和 Actions。"}),"\n",(0,d.jsx)(n.li,{children:"在 Model 中监听其它 Model 变化。"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["这里将 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"快速上手"})," 一节的简单计数器应用改造成一个可设置步频的计数器应用。可以通过设置步频，从而影响每次计数器增加的幅度。"]}),"\n",(0,d.jsxs)(n.p,{children:["我们抽象出两个 Model，分别为 ",(0,d.jsx)(n.code,{children:"stepModel"}),"（步频）、",(0,d.jsx)(n.code,{children:"counterModel"}),"（计数器）："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { model } from '@modern-js/runtime/model';\n\nconst stepModel = model('step').define({\n  state: 1,\n});\n\nconst counterModel = model('count').define((context, { use, onMount }) => {\n  const [, , subscribeStep] = use(stepModel);\n\n  onMount(() => {\n    return subscribeStep(() => {\n      console.log(\n        `Subscribe in counterModel: stepModel change to ${use(stepModel)[0]}`,\n      );\n    });\n  });\n\n  return {\n    state: {\n      value: 1,\n    },\n    actions: {\n      add(state) {\n        const step = use(stepModel)[0];\n        state.value += step;\n      },\n    },\n  };\n});\n\nexport { stepModel, counterModel };\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"stepModel"})," 只声明一个 ",(0,d.jsx)(n.code,{children:"state"}),"，初始值为 1。"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"counterModel"})," 通过 ",(0,d.jsx)(n.code,{children:"use"})," 函数加载 ",(0,d.jsx)(n.code,{children:"stepModel"}),"，拿到返回的 ",(0,d.jsx)(n.code,{children:"subscribeStep"})," 函数，用来监听 ",(0,d.jsx)(n.code,{children:"stepModel"})," 状态的变更。 ",(0,d.jsx)(n.code,{children:"onMount"})," 是 Model 挂载完成后的钩子函数，",(0,d.jsx)(n.code,{children:"counterModel"})," 挂载完成后开始订阅 ",(0,d.jsx)(n.code,{children:"stepModel"})," 状态的变更，打印出 ",(0,d.jsx)(n.code,{children:"stepModel"})," 的最新值。"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"counterModel"})," 通过 ",(0,d.jsx)(n.code,{children:"use"})," 函数访问 ",(0,d.jsx)(n.code,{children:"stepModel"}),"，在 ",(0,d.jsx)(n.code,{children:"add"})," 里可以获取到当前 ",(0,d.jsx)(n.code,{children:"stepModel"})," 的值（步频），以此值来做自增。"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive caution",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["当需要访问其他 Model 的 State 时，必须要在当前 Actions 或 Effects 函数（本例中对应 ",(0,d.jsx)(n.code,{children:"add"})," 函数 ）真正执行的阶段调用 ",(0,d.jsx)(n.code,{children:"use"}),"，以保证获取的 State 是最新值。因此，我们虽然在 ",(0,d.jsx)(n.code,{children:"define"})," 的回调函数中也调用了 ",(0,d.jsx)(n.code,{children:"use(stepModel)"}),"，但是我们并没有解构 ",(0,d.jsx)(n.code,{children:"stepModel"})," 的 ",(0,d.jsx)(n.code,{children:"state"})," 值，因为 ",(0,d.jsx)(n.code,{children:"define"})," 的回调函数是在 Model 的挂载阶段执行的，这个时候获取到的 ",(0,d.jsx)(n.code,{children:"stepModel"})," 的 ",(0,d.jsx)(n.code,{children:"state"})," 可能和 ",(0,d.jsx)(n.code,{children:"add"})," 执行时获取到的值是不同的。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.p,{children:["修改 ",(0,d.jsx)(n.strong,{children:"App.tsx"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"import { useModel } from '@modern-js/runtime/model';\nimport { counterModel, stepModel } from './models/count';\n\nfunction Counter() {\n  const [state, actions] = useModel(counterModel);\n  const [step, stepActions] = useModel(stepModel);\n\n  return (\n    <div>\n      <div>step: {step}</div>\n      <button onClick={() => stepActions.setState(step + 1)}>add step</button>\n      <div>counter: {state.value}</div>\n      <button onClick={() => actions.add()}>add counter</button>\n    </div>\n  );\n}\n\nexport default function App() {\n  return <Counter />;\n}\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["Modern.js 默认开启 ",(0,d.jsx)(n.a,{href:"/zh/guides/topic-detail/model/auto-actions",children:"自动生成 actions"}),"，所以 ",(0,d.jsx)(n.code,{children:"stepModel"})," 中虽然没有手动定义 Actions，但可以使用自动生成的 ",(0,d.jsx)(n.code,{children:"setState"}),"。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["点击 ",(0,d.jsx)(n.strong,{children:"add step"})," 增加步频。"]}),"\n",(0,d.jsxs)(n.li,{children:["点击 ",(0,d.jsx)(n.strong,{children:"add counter"})," 触发计数器增加。"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"最终效果如下："}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/models-communicate.gif",alt:"communicate-models"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["本节完整的",(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/models-communication",target:"_blank",rel:"noopener noreferrer",children:"示例代码"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:["相关 API 的更多介绍，请参考：",(0,d.jsx)(n.a,{href:"/apis/app/runtime/model/model_#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B",children:"model"}),"。"]}),"\n"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.p,{children:["前面 ",(0,d.jsx)(n.code,{children:"counterModel"})," 的例子，我们是在 Actions 的函数内部调用 ",(0,d.jsx)(n.code,{children:"use"})," 获取其他 Model 对象的。如果只需要调用其它 Model 的 Actions，因为 Actions 都是函数，不存在值过期问题，所以也可以在 ",(0,d.jsx)(n.code,{children:"define"})," 的回调函数中调用 ",(0,d.jsx)(n.code,{children:"use"})," 获取 Model 的 Actions。例如："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const barModel = model('bar').define({\n  // 省略\n});\n\nconst fooModel = model('foo').define((context, utils) => {\n  // 获取 barModel 的 actions\n  const [, actions] = utils.use(barModel);\n  return {\n    // 省略 state、actions\n    effects: {\n      async loadA() {\n        // 省略副作用逻辑\n        // 调用 barModel 的 action\n        barModel.actionA();\n      },\n      async loadB() {\n        // 省略副作用逻辑\n        // 调用 barModel 的 action\n        barModel.actionB();\n      },\n    },\n  };\n});\n"})}),"\n",(0,d.jsxs)(n.p,{children:["这样，我们不需要在 ",(0,d.jsx)(n.code,{children:"loadA"}),"、",(0,d.jsx)(n.code,{children:"loadB"})," 中重复获取 ",(0,d.jsx)(n.code,{children:"barModel"})," 对象，简化了代码逻辑。"]}),"\n",(0,d.jsxs)(n.h2,{id:"model-内通信",children:["Model 内通信",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-内通信",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Model 内通信，也主要分为两种场景："}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"Effects 函数调用自身 Model 的 Actions 函数、或其他 Effects 函数。"}),"\n",(0,d.jsx)(n.li,{children:"Actions 函数调用自身 Model 的 其他 Actions 函数。"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["在 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/manage-effects",children:"副作用管理"})," 一节，我们演示过 Effects 函数如何调用 Actions 函数。"]}),"\n",(0,d.jsx)(n.p,{children:"这里我们再来举一个例子："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define((context, { use, onMount }) => ({\n  state: {\n    a: '',\n    b: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n    setB(state, payload) {\n      state.a = payload;\n    },\n  },\n  effects: {\n    async loadA() {\n      // 通过 use 获取当前 Model 的 actions\n      const [, actions] = use(fooModel);\n      const res = await mockFetchA();\n      actions.setA(res);\n    },\n    async loadB() {\n      // 通过 use 获取当前 Model 的 actions\n      const [, actions] = use(fooModel);\n      const res = await mockFetchB();\n      actions.setB(res);\n    },\n  },\n}));\n"})}),"\n",(0,d.jsxs)(n.p,{children:["这个例子中，",(0,d.jsx)(n.code,{children:"fooModel"})," 的两个 Effects 函数，需要调用自身的 Actions 函数。这里我们在每个 Effects 函数中，都调用了一次 ",(0,d.jsx)(n.code,{children:"use"}),"，为什么不能像 Model 间通信的例子中，在 ",(0,d.jsx)(n.code,{children:"define"})," 的回调函数中，统一调用 ",(0,d.jsx)(n.code,{children:"use"})," 获取 Model 自身的 Actions 呢？这是因为调用 ",(0,d.jsx)(n.code,{children:"use"})," 获取 Model 时，会先检查这个 Model 是否已经挂载，如果还没有挂载，会先执行挂载逻辑，而 ",(0,d.jsx)(n.code,{children:"define"})," 的回调函数又是在 Model 的挂载阶段执行的，这样一来，在挂载阶段调用 ",(0,d.jsx)(n.code,{children:"use"})," 获取 Model 自身，会出现死循环（代码实际执行过程会抛出错误）。所以，",(0,d.jsxs)(n.strong,{children:["一定不能在 ",(0,d.jsx)(n.code,{children:"define"})," 的回调函数中，调用 ",(0,d.jsx)(n.code,{children:"use"})," 获取 Model 自身对象。"]})]}),"\n",(0,d.jsxs)(n.p,{children:["不过，我们可以利用 ",(0,d.jsx)(n.code,{children:"onMount"})," 这个钩子函数，在 Model 挂载完成后，再通过 ",(0,d.jsx)(n.code,{children:"use"})," 获取 Model 自身对象："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define((context, { use, onMount }) => {\n  let actions;\n\n  onMount(() => {\n    // fooModel 挂载完成后，通过 use 获取当前 Model 的 actions\n    [, actions] = use(fooModel);\n  });\n\n  return {\n    state: {\n      a: '',\n      b: '',\n    },\n    actions: {\n      setA(state, payload) {\n        state.a = payload;\n      },\n      setB(state, payload) {\n        state.a = payload;\n      },\n    },\n    effects: {\n      async loadA() {\n        const res = await mockFetchA();\n        actions.setA(res);\n      },\n      async loadB() {\n        const res = await mockFetchB();\n        actions.setB(res);\n      },\n    },\n  };\n});\n"})}),"\n",(0,d.jsx)(n.p,{children:"这样，我们也可以实现代码的简化。"})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(i,e)})):i(e)}}}]);