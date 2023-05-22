(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_micro-frontend_c04-communicate_mdx"],{46498:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return o},default:function(){return t}});var r=s("9880"),c=s("23169"),a={sidebar_position:4,title:"主子应用通信"},i="主子应用通信",o=[{text:"props 通信",depth:2,id:"props-通信"},{text:"channel 通信",depth:2,id:"channel-通信"}];function d(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"主子应用通信",children:["主子应用通信",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#主子应用通信",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"props-通信",children:["props 通信",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#props-通信",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js 中，会将子应用包裹成一个 React 组件，直接通过给 React 组件传递 ",(0,r.jsx)(n.code,{children:"props"})," 即可实现主应用和子应用通信的目的。"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"主应用：App.tsx"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-tsx",meta:"title=主应用：App.tsx",children:"function App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp count={100} />\n    </div>\n  );\n}\n"})})})]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"子应用：App.tsx"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-tsx",meta:"title=子应用：App.tsx",children:"function App(props) {\n  console.log(props);\n  return ...\n}\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["子应用将会打印 ",(0,r.jsx)(n.code,{children:"{count: 0}"}),"，目前尚未支持子应用渲染响应式，及时在主应用上更改 ",(0,r.jsx)(n.code,{children:"count"})," 的数据也不会触发视图更新"]}),"\n",(0,r.jsxs)(n.h2,{id:"channel-通信",children:["channel 通信",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#channel-通信",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.garfishjs.org/api/channel",target:"_blank",rel:"noopener noreferrer",children:"Garfish.channel"})," 用于应用间的通信。它是 ",(0,r.jsx)(n.code,{children:"EventEmitter2"})," 的实例"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"// 子应用监听登录事件\nconst App = () => {\n  const handleLogin = userInfo => {\n    console.log(`${userInfo.name} has login`);\n  };\n\n  useEffect(() => {\n    window?.Garfish.channel.on('login', handleLogin);\n    return () => {\n      window?.Garfish.channel.removeListener('login', handleLogin);\n    };\n  });\n};\n\n// 主应用触发监听事件\napi.getLoginInfo.then(res => {\n  if (res.code === 0) {\n    window.Garfish.channel.emit('login', res.data);\n  }\n});\n"})})})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);