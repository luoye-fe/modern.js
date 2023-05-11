(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_tutorials_first-app_c03-css_mdx"],{39961:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return d},title:function(){return l},toc:function(){return i},default:function(){return o}});var c=n("9880"),r=n("23169"),a=n("78955"),d={title:"添加样式"},l="添加样式",i=[{text:"使用 CSS 写 JS 组件",depth:2,id:"使用-css-写-js-组件"},{text:"使用 Utility",depth:2,id:"使用-utility"},{text:"自定义 Utility Class",depth:2,id:"自定义-utility-class"}];function t(e){var s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",img:"img",code:"code",div:"div",pre:"pre",strong:"strong"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.h1,{id:"添加样式",children:["添加样式",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#添加样式",children:"#"})]}),"\n","\n",(0,c.jsx)(s.p,{children:"上一章节中，我们学习了如何使用使用三方库中的组件。"}),"\n",(0,c.jsx)(s.p,{children:"这一章节中，我们将学习如何实现 UI 组件。"}),"\n",(0,c.jsxs)(s.h2,{id:"使用-css-写-js-组件",children:["使用 CSS 写 JS 组件",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-css-写-js-组件",children:"#"})]}),"\n",(0,c.jsx)(s.p,{children:"首先我们希望自己控制联系人头像的展示，实现这种设计稿："}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c03-css-expect.jpg",alt:"design"})}),"\n",(0,c.jsxs)(s.p,{children:["假设没有现成的组件可以实现，那就需要自己写些 CSS 了，这里我们使用 ",(0,c.jsx)(s.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components"}),"，来实现类似的需求。Modern.js 开箱即用的支持 styled-components，既不需要安装依赖，也不需要做任何配置。"]}),"\n",(0,c.jsx)(s.p,{children:"styled-components 通过模块化的方式，避免了传统 CSS 写法上的诸多问题。例如直接在元素的 style 属性上写样式，UI 视觉上的细节也会跟 UI 结构上的细节和业务逻辑混在一起。或是 classname 需要避免全局空间重名，需要用到命名规范的问题。"}),"\n",(0,c.jsxs)(s.p,{children:["在 ",(0,c.jsx)(s.code,{children:"src/routes/page.tsx"})," 里修改顶部的代码："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:"import styled from '@modern-js/runtime/styled';\n"})})})}),"\n",(0,c.jsx)(s.p,{children:"添加以下代码："}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:"const Avatar = styled.img`\n  width: 50px;\n  height: 50px;\n  border: 4px solid #0ef;\n  border-radius: 50%;\n`;\n"})})})}),"\n",(0,c.jsxs)(s.p,{children:["修改 ",(0,c.jsx)(s.code,{children:"List.Item.Meta"})," 的代码："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-tsx",children:"<List.Item.Meta\n  avatar={<Avatar src={avatar} />}\n  title={name}\n  description={email}\n/>\n"})})})}),"\n",(0,c.jsxs)(s.p,{children:["执行 ",(0,c.jsx)(s.code,{children:"pnpm run dev"}),"，可以看到预期的运行结果："]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c03-css-result1.png",alt:"result"})}),"\n",(0,c.jsx)(s.p,{children:"接下来我们做一点重构，为了增强可读性，让代码更容易维护，可以把 Avatar 组件拆分出去。我们在终端执行以下命令，创建新的文件："}),"\n",(0,c.jsxs)(a.Tabs,{children:[(0,c.jsx)(a.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-bash",children:"mkdir -p src/components/Avatar\ntouch src/components/Avatar/index.tsx\n"})})})})}),(0,c.jsx)(a.Tab,{value:"Windows",label:"Windows",children:(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-powershell",children:"mkdir -p src/components/Avatar\nni src/components/Avatar/index.tsx\n"})})})})})]}),"\n",(0,c.jsxs)(s.p,{children:["把 ",(0,c.jsx)(s.code,{children:"src/routes/page.tsx"})," 里的 ",(0,c.jsx)(s.code,{children:"<Avatar>"})," 实现删掉，修改为："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-ts",children:"import Avatar from '../components/Avatar';\n"})})})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"src/components/Avatar/index.tsx"})," 的内容，修改为："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-ts",children:"import styled from '@modern-js/runtime/styled';\n\nconst Avatar = styled.img`\n  width: 50px;\n  height: 50px;\n  border: 4px solid #0ef;\n  border-radius: 50%;\n`;\n\nexport default Avatar;\n"})})})}),"\n",(0,c.jsxs)(s.p,{children:["执行 ",(0,c.jsx)(s.code,{children:"pnpm run dev"}),"，运行结果应该是一样的。"]}),"\n",(0,c.jsxs)(s.div,{className:"modern-directive info",children:[(0,c.jsx)(s.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(s.div,{className:"modern-directive-content",children:[(0,c.jsxs)(s.p,{children:["采用目录形式 ",(0,c.jsx)(s.code,{children:"Avatar/index.tsx"})," 而不是单文件形式 ",(0,c.jsx)(s.code,{children:"Avatar.tsx"})," 的原因是，之后可以方便的在目录内部增加子文件，包括专用的资源（图片等）、专用子组件、CSS 文件等。"]}),"\n"]})]}),"\n",(0,c.jsxs)(s.h2,{id:"使用-utility",children:["使用 Utility",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-utility",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["我们已经使用 style-components 实现 ",(0,c.jsx)(s.code,{children:"<Avatar>"})," 组件，但当前的 UI 仍然不能让人满意，缺乏专业感，例如列表项内部的布局有点粗糙，很多地方没对齐。"]}),"\n",(0,c.jsxs)(s.p,{children:["现在，我们自己来实现一个更好的 ",(0,c.jsx)(s.code,{children:"Item"})," 组件，实现这样的设计稿："]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/design2.png",alt:"design"})}),"\n",(0,c.jsxs)(s.p,{children:["这次要实现的 UI 更复杂，有内部结构，但另一方面，并没有 ",(0,c.jsx)(s.code,{children:"<Avatar>"})," 组件的",(0,c.jsx)(s.strong,{children:"很粗的亮蓝色边框"}),"这样很特殊的 UI，都是很常规的水平垂直布局、居中、字体样式等。这种情况下，其实根本没必要写 CSS，有更高效的、跟 styled-components 互补的实现方式：",(0,c.jsx)(s.strong,{children:"Utility Class"}),"。"]}),"\n",(0,c.jsxs)(s.p,{children:["Modern.js 集成了主流、轻量、通用的 Utility Class 工具库 ",(0,c.jsx)(s.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"}),"。"]}),"\n",(0,c.jsxs)(s.p,{children:["执行 ",(0,c.jsx)(s.code,{children:"pnpm run new"}),"，进行如下选择，开启 Tailwind CSS："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 启用可选功能 启用 Tailwind CSS 支持\n"})})})}),"\n",(0,c.jsxs)(s.p,{children:["在 ",(0,c.jsx)(s.code,{children:"modern.config.ts"})," 中注册 Tailwind 插件:"]}),"\n",(0,c.jsxs)(s.div,{className:"language-",children:[(0,c.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport tailwindcssPlugin from '@modern-js/plugin-tailwindcss';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  server: {\n    ssr: true,\n  },\n  plugins: [appTools(), tailwindcssPlugin()],\n});\n"})})})]}),"\n",(0,c.jsxs)(s.p,{children:["在 ",(0,c.jsx)(s.code,{children:"src/routes/page.tsx"})," 顶部引入 Tailwind CSS 的 css 文件，就可以开始快速实现专业的 UI："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\n"})})})}),"\n",(0,c.jsx)(s.p,{children:"先创建 Item 组件："}),"\n",(0,c.jsxs)(a.Tabs,{children:[(0,c.jsx)(a.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-bash",children:"mkdir -p src/components/Item\ntouch src/components/Item/index.tsx\n"})})})})}),(0,c.jsx)(a.Tab,{value:"Windows",label:"Windows",children:(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-powershell",children:"mkdir -p src/components/Item\nni src/components/Item/index.tsx\n"})})})})})]}),"\n",(0,c.jsxs)(s.p,{children:["修改 ",(0,c.jsx)(s.code,{children:"src/routes/page.tsx"}),"，把 ",(0,c.jsx)(s.code,{children:"List"})," 的 ",(0,c.jsx)(s.code,{children:"render"})," 实现交给 ",(0,c.jsx)(s.code,{children:"Item"})," 组件："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:"import { List } from 'antd';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport Item from '../components/Item';\n\nconst getAvatar = (users: Array<{ name: string, email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nfunction Index() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <List\n        dataSource={mockData}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})})})}),"\n",(0,c.jsxs)(s.p,{children:["在父容器的上使用了 ",(0,c.jsx)(s.a,{href:"https://tailwindcss.com/docs/container",target:"_blank",rel:"noopener noreferrer",children:"Utility Class"})," ，快速实现了最基本的最大宽度、居中等样式。"]}),"\n",(0,c.jsxs)(s.p,{children:["接下来实现 ",(0,c.jsx)(s.code,{children:"src/components/Item/index.tsx"}),"："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-tsx",children:'import Avatar from \'../Avatar\';\n\ntype InfoProps = {\n  avatar: string;\n  name: string;\n  email: string;\n  archived?: boolean;\n};\n\nconst Item = ({ info }: { info: InfoProps }) => {\n  const { avatar, name, email, archived } = info;\n  return (\n    <div className="flex p-4 items-center border-gray-200 border-b">\n      <Avatar src={avatar} />\n      <div className="ml-4 flex-1 flex justify-between">\n        <div className="flex-1">\n          <p>{name}</p>\n          <p>{email}</p>\n        </div>\n        <button\n          type="button"\n          disabled={archived}\n          className={`bg-blue-500  text-white font-bold\n            py-2 px-4 rounded-full hover:bg-blue-700`}\n        >\n          Archive\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default Item;\n'})})})}),"\n",(0,c.jsxs)(s.p,{children:["执行 ",(0,c.jsx)(s.code,{children:"pnpm run dev"}),"，可以看到预期的运行结果："]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result2.png",alt:"result"})}),"\n",(0,c.jsxs)(s.p,{children:["我们只使用了少量 Utility Class，比如 ",(0,c.jsx)(s.a,{href:"https://tailwindcss.com/docs/display/",target:"_blank",rel:"noopener noreferrer",children:"Flex"}),"、",(0,c.jsx)(s.a,{href:"https://tailwindcss.com/docs/padding/",target:"_blank",rel:"noopener noreferrer",children:"Padding"}),"、",(0,c.jsx)(s.a,{href:"https://tailwindcss.com/docs/margin/",target:"_blank",rel:"noopener noreferrer",children:"Margin"}),"、",(0,c.jsx)(s.a,{href:"https://tailwindcss.com/docs/text-color/",target:"_blank",rel:"noopener noreferrer",children:"Text"}),"、",(0,c.jsx)(s.a,{href:"https://tailwindcss.com/docs/font-weight/",target:"_blank",rel:"noopener noreferrer",children:"Font"}),"、",(0,c.jsx)(s.a,{href:"https://tailwindcss.com/docs/border-width",target:"_blank",rel:"noopener noreferrer",children:"Border"}),"，不写一行 CSS 就实现了符合设计稿的专业 UI。"]}),"\n",(0,c.jsxs)(s.h2,{id:"自定义-utility-class",children:["自定义 Utility Class",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-utility-class",children:"#"})]}),"\n",(0,c.jsx)(s.p,{children:"我们也可以自己实现新的 Utility Class，方便在代码间复用。"}),"\n",(0,c.jsxs)(s.p,{children:["Utility Class 本身也是一种",(0,c.jsx)(s.strong,{children:"面向组件"}),"的技术（将不同 class 用在一个组件上，等价于给这个组件设置了一些来自基类的属性），但 Utility Class 的 classname 是全局的（因为要用在任意组件/元素上），很适合用独立 CSS 文件来实现。"]}),"\n",(0,c.jsx)(s.p,{children:"创建一个新的 CSS 文件："}),"\n",(0,c.jsxs)(a.Tabs,{children:[(0,c.jsx)(a.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-bash",children:"mkdir -p src/styles\ntouch src/styles/utils.css\n"})})})})}),(0,c.jsx)(a.Tab,{value:"Windows",label:"Windows",children:(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-powershell",children:"mkdir -p src/styles\nni src/styles/utils.css\n"})})})})})]}),"\n",(0,c.jsxs)(s.p,{children:["在 ",(0,c.jsx)(s.code,{children:"src/routes/page.tsx"})," 里导入 ",(0,c.jsx)(s.code,{children:"utils.css"}),"："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:"import '../styles/utils.css';\n"})})})}),"\n",(0,c.jsxs)(s.p,{children:["在 ",(0,c.jsx)(s.code,{children:"src/routes/styles/utils.css"})," 里实现一个名为 ",(0,c.jsx)(s.code,{children:"custom-text-gray"})," 的 Utility Class。"]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-css",children:":root {\n  --custom-text-color: rgb(113, 128, 150);\n}\n\n.custom-text-gray {\n  color: var(--custom-text-color);\n}\n"})})})}),"\n",(0,c.jsxs)(s.div,{className:"modern-directive info",children:[(0,c.jsx)(s.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(s.div,{className:"modern-directive-content",children:[(0,c.jsxs)(s.p,{children:["Modern.js 集成了 ",(0,c.jsx)(s.a,{href:"/guides/basic-features/css",children:"PostCSS"}),"，支持现代 CSS 语法特性，比如 ",(0,c.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer",children:"custom properties"}),"。"]}),"\n"]})]}),"\n",(0,c.jsxs)(s.p,{children:["在 ",(0,c.jsx)(s.code,{children:"src/routes/components/Item/index.tsx"})," 里使用，把："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:'<div className="ml-4 flex-1 flex justify-between">\n'})})})}),"\n",(0,c.jsx)(s.p,{children:"改成："}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:'<div className="ml-4 custom-text-gray flex-1 flex justify-between">\n'})})})}),"\n",(0,c.jsxs)(s.p,{children:["执行 ",(0,c.jsx)(s.code,{children:"pnpm run dev"}),"，可以看到字体颜色改变了："]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result3.png",alt:"design2"})}),"\n",(0,c.jsxs)(s.div,{className:"modern-directive info",children:[(0,c.jsx)(s.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(s.div,{className:"modern-directive-content",children:[(0,c.jsxs)(s.p,{children:["此处只是为了演示 Utility Class 用法。真实项目中，在有 Tailwind CSS 的情况下，这种 Utility Class 没什么价值，应该通过配置 Design System 的 ",(0,c.jsx)(s.a,{href:"https://tailwindcss.com/docs/customizing-colors",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(s.strong,{children:"theme"})})," 来增加字体颜色。"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"utils.css"})," 也可以写成 ",(0,c.jsx)(s.code,{children:"utils.scss"})," 或 ",(0,c.jsx)(s.code,{children:"utils.less"}),"，Modern.js 对 SCSS 和 Less 同样提供开箱即用的支持。"]}),"\n",(0,c.jsx)(s.p,{children:"不过在 PostCSS 的支持下，现代 CSS 应该足以满足这些开发需求，性能相较于预处理器也更好，建议优先用 .css 文件。"}),"\n"]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(t,e)})):t(e)}}}]);