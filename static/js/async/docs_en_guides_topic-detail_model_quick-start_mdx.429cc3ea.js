(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_topic-detail_model_quick-start_mdx"],{92002:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return i},toc:function(){return t},title:function(){return c},default:function(){return h}});var o=n("12151"),r=n("21447"),l=n.ir(n("47500"));let i={sidebar_position:1,title:"Quick Start"},t=[{id:"core-concepts",text:"Core Concepts",depth:2},{id:"basic-usage",text:"Basic Usage",depth:2}],c="Quick Start";function a(e){let s=Object.assign({h1:"h1",a:"a",p:"p",div:"div",ol:"ol",li:"li",h2:"h2",strong:"strong",img:"img",code:"code",button:"button",pre:"pre",span:"span"},(0,r.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{id:"quick-start",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"}),"Quick Start"]}),"\n","\n",(0,o.jsx)(l.default,{}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://github.com/web-infra-dev/reduck",target:"_blank",rel:"noopener noreferrer",children:"Reduck"})," is a state management library developed by the Modern.js team that follows the MVC pattern. Its underlying state storage is based on ",(0,o.jsx)(s.a,{href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux"})," implementation, while providing a higher level of abstraction and full compatibility with the Redux ecosystem."]}),"\n",(0,o.jsx)(s.p,{children:"The goal of Reduck is to organize the development structure of React applications in the MVC pattern, maintain business logic in the Model layer, decoupling business logic from UI, making it easier for developers to focus on business logic, and reducing duplicated work (boilerplate code) through higher level of abstraction."}),"\n",(0,o.jsx)(s.p,{children:"In the MVC pattern, Reduck plays the role of M(Model), React UI Component corresponds to V(View), and gets the Model from Reduck and modifies the Model's React Container Component, which corresponds to C(View Controller/Container)."}),"\n",(0,o.jsx)(s.p,{children:"The state management solution of Modern.js is implemented through built-in Reduck. Using Reduck in Modern.js not only eliminates the manual integration process, but also allows all Reduck APIs to be imported and used directly from the Modern.js Runtime package, providing a better consistency experience."}),"\n",(0,o.jsxs)(s.div,{className:"modern-directive info",children:[(0,o.jsx)(s.p,{className:"modern-directive-title",children:"INFO"}),(0,o.jsx)(s.div,{className:"modern-directive-content",children:(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["To use Reduck APIs in Modern.js, you need to set ",(0,o.jsx)(s.a,{href:"/en/configure/app/runtime/state.html",children:"runtime.state"})," to enable the state management plugin."]}),"\n",(0,o.jsxs)(s.li,{children:["Reduck can also be used separately as a state management library ",(0,o.jsx)(s.a,{href:"/en/guides/topic-detail/model/use-out-of-modernjs.html",children:"outside of Modern.js"}),"."]}),"\n"]})})]}),"\n",(0,o.jsxs)(s.h2,{id:"core-concepts",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#core-concepts",children:"#"}),"Core Concepts"]}),"\n",(0,o.jsx)(s.p,{children:"There are only four core concepts in Reduck: Model, State, Actions, and Effects."}),"\n",(0,o.jsx)(s.p,{children:"Model: Encapsulates the logic and required state of an independent module, consisting of State, Actions, and Effects."}),"\n",(0,o.jsx)(s.p,{children:"State: The state stored in the Model."}),"\n",(0,o.jsxs)(s.p,{children:["Actions: Pure functions used to modify State, functions must be ",(0,o.jsx)(s.strong,{children:"Synchronous"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Effects: Functions with side effects used to modify State, functions can be ",(0,o.jsx)(s.strong,{children:"Asynchronous"}),". Effects can call their own Actions and Effects or those of other Models."]}),"\n",(0,o.jsx)(s.p,{children:"The Reduck data flow is shown in the following figure:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/reduck-concept.svg",alt:"Reduck Data Flow"})}),"\n",(0,o.jsxs)(s.h2,{id:"basic-usage",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-usage",children:"#"}),"Basic Usage"]}),"\n",(0,o.jsxs)(s.p,{children:["Next, let's take a simple ",(0,o.jsx)(s.strong,{children:"Counter"})," application as an example to demonstrate the basic usage of Reduck."]}),"\n",(0,o.jsxs)(s.p,{children:["First, we define a Model named ",(0,o.jsx)(s.code,{children:"count"}),":"]}),"\n",(0,o.jsxs)(s.div,{className:"language-js",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { model } "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/model'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line"}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"countModel"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"model"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'count'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".define"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  state"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    value"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,o.jsx)(s.span,{className:"line"}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" countModel;"})]}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(s.p,{children:["We use the API ",(0,o.jsx)(s.code,{children:"model"})," to create ",(0,o.jsx)(s.code,{children:"countModel"}),", which currently only contains the state that stores the counter ",(0,o.jsx)(s.code,{children:"value"}),", that is, value in the code."]}),"\n",(0,o.jsx)(s.p,{children:"We define an action to increase the counter by 1:"}),"\n",(0,o.jsxs)(s.div,{className:"language-js",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { model } "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/model'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line"}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"countModel"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"model"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'count'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".define"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  state"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    value"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  actions"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"add"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(state) {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".value "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,o.jsx)(s.span,{className:"line"}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" countModel;"})]}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(s.p,{children:["In the ",(0,o.jsx)(s.code,{children:"add"})," action, we can directly modify the value of the state and perform the increment operation without treating the state as an immutable object. This is because Reduck integrates ",(0,o.jsx)(s.a,{href:"https://github.com/immerjs/immer",target:"_blank",rel:"noopener noreferrer",children:"immer"}),", which can directly modify the original state object."]}),"\n",(0,o.jsx)(s.p,{children:"Next, we will demonstrate how to use the Model in a component."}),"\n",(0,o.jsxs)(s.p,{children:["Create a new component called ",(0,o.jsx)(s.code,{children:"Counter"}),", and use the ",(0,o.jsx)(s.code,{children:"countModel"})," via the ",(0,o.jsx)(s.code,{children:"useModel"})," API inside the component:"]}),"\n",(0,o.jsxs)(s.div,{className:"language-js",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { useModel } "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/model'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" countModel "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./models/count'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line"}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Counter"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(countModel);"})]}),"\n",(0,o.jsx)(s.span,{className:"line"}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">counter: {"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".value}</"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"onClick"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{() "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".add"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()}>add</"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"useModel"})," gets the ",(0,o.jsx)(s.code,{children:"state"})," and ",(0,o.jsx)(s.code,{children:"actions"})," of ",(0,o.jsx)(s.code,{children:"countModel"}),". The component displays the current value of the counter, and clicking the ",(0,o.jsx)(s.code,{children:"add"})," button increments the counter by 1."]}),"\n",(0,o.jsxs)(s.div,{className:"modern-directive info",children:[(0,o.jsx)(s.p,{className:"modern-directive-title",children:"INFO"}),(0,o.jsx)(s.div,{className:"modern-directive-content",children:(0,o.jsxs)(s.p,{children:["\nDue to the simplicity of the example used here, the layering of the MVC pattern is not strictly followed. The ",(0,o.jsx)(s.code,{children:"Counter"})," component acts as both the V and C layers."]})})]}),"\n",(0,o.jsx)(s.p,{children:"The final demonstration effect is as follows:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/eueh7vhojuh/modern/simple-count-model.gif",alt:"countModel"})}),"\n",(0,o.jsxs)(s.p,{children:["That completes a simple counter application. You can view the complete example code for this section ",(0,o.jsx)(s.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/counter-model",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]})]})}var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},47500:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return i}});var o=n("12151"),r=n("21447");function l(e){return(0,o.jsx)(o.Fragment,{})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}]);