(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_testing_render_mdx"],{3018:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return i},toc:function(){return t},default:function(){return a}});var d=r("9880"),c=r("23169"),s={title:"render"},i="render",t=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"函数签名",depth:2,id:"函数签名"},{text:"参数",depth:3,id:"参数"},{text:"返回值",depth:3,id:"返回值"},{text:"示例",depth:2,id:"示例"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"render",children:["render",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"用于在测试用例中渲染组件，完成测试。"}),"\n",(0,d.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { render } from '@modern-js/runtime/testing';\n"})})})}),"\n",(0,d.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  container: DOMElement;\n  baseElement: DOMElement;\n  hydrate: boolean;\n  warpper: React.ComponentType<{children: ReactNode}>;\n  queries: any;\n};\n\ntype RenderResult = {\n  {...queries}: any;\n  container: DOMElement;\n  baseElement: DOMElement;\n  debug: function;\n  rerender: function;\n  unmount: function;\n  asFragment: function;\n}\n\nfunction render(ui: React.ReactElement<any>, options: Options): RenderResult;\n"})})})}),"\n",(0,d.jsxs)(n.h3,{id:"参数",children:["参数",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"ui"}),"：需要被渲染的 React 组件。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"options"}),"：render 可选配置。","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"container"}),"：表示组件所要挂载到的 DOM 节点，默认是会创建一个 ",(0,d.jsx)(n.code,{children:"div"})," 元素，并自动添加到 ",(0,d.jsx)(n.code,{children:"document.body"})," 上。这个 ",(0,d.jsx)(n.code,{children:"div"})," 元素就是组件要挂载的节点。默认值是 ",(0,d.jsx)(n.code,{children:"document.body.append(document.createElement('div'))"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"baseElement"}),"：用于指定 ",(0,d.jsx)(n.code,{children:"queries"})," 中使用到的 ",(0,d.jsx)(n.code,{children:"basename"}),"。如果指定了 ",(0,d.jsx)(n.code,{children:"container"}),", 则默认值为 ",(0,d.jsx)(n.code,{children:"container"})," 的值，否则就是 ",(0,d.jsx)(n.code,{children:"document.body"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"hydrate"}),"：如果设置为 ",(0,d.jsx)(n.code,{children:"true"}),"，则会使用 ",(0,d.jsx)(n.a,{href:"https://reactjs.org/docs/react-dom.html#hydrate",target:"_blank",rel:"noopener noreferrer",children:"ReactDOM.hydrate"})," 渲染组件。默认值为 ",(0,d.jsx)(n.code,{children:"false"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"wrapper"}),"：是一个 react 组件，可用于自定义渲染逻辑。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"queries"}),"：自定义一些自己的 ",(0,d.jsx)(n.code,{children:"queries"}),"。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"返回值",children:["返回值",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"{...queries}"}),"：所有可用的 ",(0,d.jsx)(n.a,{href:"https://testing-library.com/docs/queries/about/",target:"_blank",rel:"noopener noreferrer",children:"queries"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"container"}),"：挂载 React 组件的 DOM 节点。"]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"baseElement"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"debug"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"rerender"}),"：如果想测试一个已渲染的组件在其 props 更新时的一些场景，可以使用 rerender 来现实。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"unmount"}),"：会卸载掉已渲染的组件。如果想测试组件卸载后的情况（如，绑定的事件是否在 unmount 阶段被卸载掉），那么这个 API 是很帮助的。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"asFragment"}),"：返回当前渲染的组件的 ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment",target:"_blank",rel:"noopener noreferrer",children:"DocumentFragment"})," 对象。可用于测试 react 事件触发后 DOM 结构的响应。"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"示例",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { render } from '@modern-js/runtime/testing';\nimport App from './App';\n\ntest('renders a message', () => {\n  const { container, getByText } = render(<App />);\n  expect(getByText('Hello, world!')).toBeInTheDocument();\n  expect(container.firstChild).toMatchInlineSnapshot(`\n    <h1>Hello, World!</h1>\n  `);\n});\n"})})})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}}}]);