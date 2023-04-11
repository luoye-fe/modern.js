(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_micro-frontend_c04-communicate_mdx"],{82966:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var a in e)Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}(e,{frontmatter:function(){return t},title:function(){return c},toc:function(){return o},default:function(){return d}});var i=a("12151"),s=a("23169"),t={sidebar_position:4,title:"Communicate"},c="Communicate",o=[{text:"Props",depth:2,id:"props"},{text:"channel",depth:2,id:"channel"}];function r(n){var e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",button:"button",pre:"pre",code:"code"},(0,s.useMDXComponents)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"communicate",children:["Communicate",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#communicate",children:"#"})]}),"\n",(0,i.jsxs)(e.h2,{id:"props",children:["Props",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#props",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"In Modern.js, the sub-application will be wrapped into a React component, and the purpose of communicating between the main application and the sub-application can be achieved directly by passing'props' to the React component."}),"\n",(0,i.jsxs)(e.div,{className:"language-",children:[(0,i.jsx)(e.div,{className:"modern-code-title",children:"Main:"}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"code",children:(0,i.jsx)(e.code,{className:"language-tsx",meta:"title=Main: App.tsx",children:"function App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp count={100} />\n    </div>\n  );\n}\n"})})]})]}),"\n",(0,i.jsxs)(e.div,{className:"language-",children:[(0,i.jsx)(e.div,{className:"modern-code-title",children:"Main:"}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"code",children:(0,i.jsx)(e.code,{className:"language-tsx",meta:"title=Main: App.tsx",children:"function App(props) {\n  console.log(props);\n  return ...\n}\n"})})]})]}),"\n",(0,i.jsxs)(e.p,{children:["The child application will print ",(0,i.jsx)(e.code,{children:"{count: 0}"}),". Currently, child application rendering responsiveness is not supported. Changing the data of'count 'on the main application in time will not trigger a view update"]}),"\n",(0,i.jsxs)(e.h2,{id:"channel",children:["channel",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#channel",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["[Garfish.channel] (",(0,i.jsx)(e.a,{href:"https://www.garfishjs.org/api/channel",target:"_blank",rel:"noopener noreferrer",children:"https://www.garfishjs.org/api/channel"}),") Used for communication between applications. It is an instance of ",(0,i.jsx)(e.code,{children:"EventEmitter2"}),"."]}),"\n",(0,i.jsx)(e.div,{className:"language-",children:(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"code",children:(0,i.jsx)(e.code,{className:"language-ts",children:"// sub app listen login event\nconst App = () => {\n  const handleLogin = userInfo => {\n    console.log(`${userInfo.name} has login`);\n  };\n\n  useEffect(() => {\n    window?.Garfish.channel.on('login', handleLogin);\n    return () => {\n      window?.Garfish.channel.removeListener('login', handleLogin);\n    };\n  });\n};\n\n// main app emit login event\napi.getLoginInfo.then(res => {\n  if (res.code === 0) {\n    window.Garfish.channel.emit('login', res.data);\n  }\n});\n"})})]})})]})}var d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,s.useMDXComponents)(),n.components).wrapper;return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(r,n)})):r(n)}}}]);