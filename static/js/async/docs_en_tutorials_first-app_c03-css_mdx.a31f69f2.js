(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_tutorials_first-app_c03-css_mdx"],{90242:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return i},title:function(){return r},toc:function(){return o},default:function(){return d}});var t=n("9880"),a=n("23169"),c=n("78955"),i={title:"Add Style"},r="Add Style",o=[{text:"JS components using CSS",depth:2,id:"js-components-using-css"},{text:"Utility",depth:2,id:"utility"},{text:"Customized Utility Class",depth:2,id:"customized-utility-class"}];function l(e){var s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",img:"img",code:"code",div:"div",button:"button",pre:"pre",strong:"strong"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"add-style",children:["Add Style",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-style",children:"#"})]}),"\n","\n",(0,t.jsx)(s.p,{children:"In the previous chapter, we learned how to use components from the three-way library."}),"\n",(0,t.jsx)(s.p,{children:"In this chapter, we will learn how to implement UI components."}),"\n",(0,t.jsxs)(s.h2,{id:"js-components-using-css",children:["JS components using CSS",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#js-components-using-css",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"First of all, we want to control the display of contact avatars by ourselves, and implement this design draft:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c03-css-expect.jpg",alt:"design"})}),"\n",(0,t.jsxs)(s.p,{children:["Hypothesis has no ready-made components to implement, so you need to write some CSS yourself. Here we use [styled-components] (",(0,t.jsx)(s.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"https://styled-components.com/"}),") to implement similar requirements. Modern.js out of the box supports styled-components, which requires neither dependency nor configuration."]}),"\n",(0,t.jsx)(s.p,{children:"Style-components avoids many problems of traditional CSS writing through modularization. For example, writing styles directly on the style attribute of elements, the visual details of UI will also be mixed with the details of UI structure and business logic. Or classname needs to avoid global space renaming, which requires the use of naming conventions."}),"\n",(0,t.jsxs)(s.p,{children:["Modify the code at the top in ",(0,t.jsx)(s.code,{children:"src/routes/page.tsx"}),":"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"import styled from '@modern-js/runtime/styled';\n"})})]})}),"\n",(0,t.jsx)(s.p,{children:"Add the following code:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"const Avatar = styled.img`\n  width: 50px;\n  height: 50px;\n  border: 4px solid #0ef;\n  border-radius: 50%;\n`;\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["Modify the code of ",(0,t.jsx)(s.code,{children:"List.Item.Meta"}),":"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-tsx",children:"<List.Item.Meta\n  avatar={<Avatar src={avatar} />}\n  title={name}\n  description={email}\n/>\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["Execute ",(0,t.jsx)(s.code,{children:"pnpm run dev"})," to see the expected running result:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c03-css-result1.png",alt:"result"})}),"\n",(0,t.jsx)(s.p,{children:"Next we do a little refactoring. To enhance legibility and make the code easier to maintain, we can split the Avatar component. We execute the following command at the end point to create a new file:"}),"\n",(0,t.jsxs)(c.Tabs,{children:[(0,t.jsx)(c.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-bash",children:"mkdir -p src/components/Avatar\ntouch src/components/Avatar/index.tsx\n"})})]})})}),(0,t.jsx)(c.Tab,{value:"Windows",label:"Windows",children:(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-powershell",children:"mkdir -p src/components/Avatar\nni src/components/Avatar/index.tsx\n"})})]})})})]}),"\n",(0,t.jsxs)(s.p,{children:["Delete the ",(0,t.jsx)(s.code,{children:"<Avatar>"})," implementation in ",(0,t.jsx)(s.code,{children:"src/routes/page.tsx"})," and change it to:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-ts",children:"import Avatar from '../components/Avatar';\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["The content of ",(0,t.jsx)(s.code,{children:"src/components/Avatar/index.tsx"})," is modified to:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-ts",children:"import styled from '@modern-js/runtime/styled';\n\nconst Avatar = styled.img`\n  width: 50px;\n  height: 50px;\n  border: 4px solid #0ef;\n  border-radius: 50%;\n`;\n\nexport default Avatar;\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["Execute ",(0,t.jsx)(s.code,{children:"pnpm run dev"}),", the result should be the same."]}),"\n",(0,t.jsxs)(s.div,{className:"modern-directive info",children:[(0,t.jsx)(s.div,{className:"modern-directive-title",children:"note"}),(0,t.jsxs)(s.div,{className:"modern-directive-content",children:[(0,t.jsxs)(s.p,{children:["The reason for using the directory form ",(0,t.jsx)(s.code,{children:"Avatar/index.tsx"})," instead of the single-file form ",(0,t.jsx)(s.code,{children:"Avatar.tsx"})," is that you can easily add sub-files inside the directory later, including dedicated resources (pictures, etc.), dedicated sub-components, CSS files, etc."]}),"\n"]})]}),"\n",(0,t.jsxs)(s.h2,{id:"utility",children:["Utility",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#utility",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["We have used the style-components implementation ",(0,t.jsx)(s.code,{children:"<Avatar>"})," component, but the current UI is still unsatisfactory and lacks professionalism, such as the list item inhouse layout is a bit rough and misaligned in many places."]}),"\n",(0,t.jsxs)(s.p,{children:["Now, let's implement a better ",(0,t.jsx)(s.code,{children:"Item"})," component ourselves, implementing a design draft like this:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/design2.png",alt:"design"})}),"\n",(0,t.jsxs)(s.p,{children:["The UI to be implemented this time is more complex and has an internal structure, but on the other hand, there is no very thick bright blue border of the ",(0,t.jsx)(s.code,{children:"<Avatar>"})," component such a very special UI, which is a very conventional horizontal and vertical layout, centering, font style, etc. In this case, there is actually no need to write CSS at all. There is a more efficient implementation method that complements styled-components: ",(0,t.jsx)(s.strong,{children:"Utility Class"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Modern.js integrates the mainstream, light, general-purpose Utility Class library ",(0,t.jsx)(s.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Execute ",(0,t.jsx)(s.code,{children:"pnpm run new"})," and select the following to start Tailwind CSS:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-bash",children:"? Action: Enable features\n? Enable features: Enable Tailwind CSS\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["Register the Tailwind plugin in ",(0,t.jsx)(s.code,{children:"modern.config.ts"}),":"]}),"\n",(0,t.jsxs)(s.div,{className:"language-",children:[(0,t.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport tailwindcssPlugin from '@modern-js/plugin-tailwindcss';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  server: {\n    ssr: true,\n  },\n  plugins: [appTools(), tailwindcssPlugin()],\n});\n"})})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Import the Tailwind CSS css file at the top of ",(0,t.jsx)(s.code,{children:"src/routes/page.tsx"})," to start a quick implementation of the professional UI:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\n"})})]})}),"\n",(0,t.jsx)(s.p,{children:"Create the Item component first:"}),"\n",(0,t.jsxs)(c.Tabs,{children:[(0,t.jsx)(c.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-bash",children:"mkdir -p src/components/Item\ntouch src/components/Item/index.tsx\n"})})]})})}),(0,t.jsx)(c.Tab,{value:"Windows",label:"Windows",children:(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-powershell",children:"mkdir -p src/components/Item\nni src/components/Item/index.tsx\n"})})]})})})]}),"\n",(0,t.jsxs)(s.p,{children:["Modify ",(0,t.jsx)(s.code,{children:"src/routes/page.tsx"})," to pass the ",(0,t.jsx)(s.code,{children:"render"})," implementation of ",(0,t.jsx)(s.code,{children:"List"})," to ",(0,t.jsx)(s.code,{children:"Item"})," component:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"import { List } from 'antd';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport Item from '../components/Item';\n\nconst getAvatar = (users: Array<{ name: string, email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nfunction Index() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <List\n        dataSource={mockData}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["Utility Class(",(0,t.jsx)(s.a,{href:"https://tailwindcss.com/docs/container",target:"_blank",rel:"noopener noreferrer",children:"https://tailwindcss.com/docs/container"}),") is used on the parent container for a quick implementation of the most basic maximum width, center, and other styles."]}),"\n",(0,t.jsxs)(s.p,{children:["Next implementation ",(0,t.jsx)(s.code,{children:"src/components/Item/index.tsx"}),":"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-tsx",children:'import Avatar from \'../Avatar\';\n\ntype InfoProps = {\n  avatar: string;\n  name: string;\n  email: string;\n  archived?: boolean;\n};\n\nconst Item = ({ info }: { info: InfoProps }) => {\n  const { avatar, name, email, archived } = info;\n  return (\n    <div className="flex p-4 items-center border-gray-200 border-b">\n      <Avatar src={avatar} />\n      <div className="ml-4 flex-1 flex justify-between">\n        <div className="flex-1">\n          <p>{name}</p>\n          <p>{email}</p>\n        </div>\n        <button\n          type="button"\n          disabled={archived}\n          className={`bg-blue-500  text-white font-bold\n            py-2 px-4 rounded-full hover:bg-blue-700`}\n        >\n          Archive\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default Item;\n'})})]})}),"\n",(0,t.jsxs)(s.p,{children:["Execute ",(0,t.jsx)(s.code,{children:"pnpm run dev"})," to see the expected running result:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result2.png",alt:"result"})}),"\n",(0,t.jsxs)(s.p,{children:["We only use a few Utility Classes, such as ",(0,t.jsx)(s.a,{href:"https://tailwindcss.com/docs/display/",target:"_blank",rel:"noopener noreferrer",children:"Flex"}),", ",(0,t.jsx)(s.a,{href:"https://tailwindcss.com/docs/padding/",target:"_blank",rel:"noopener noreferrer",children:"Padding"}),", ",(0,t.jsx)(s.a,{href:"https://tailwindcss.com/docs/margin/",target:"_blank",rel:"noopener noreferrer",children:"Margin"}),", ",(0,t.jsx)(s.a,{href:"https://tailwindcss.com/docs/text-color/",target:"_blank",rel:"noopener noreferrer",children:"Text"}),", ",(0,t.jsx)(s.a,{href:"https://tailwindcss.com/docs/font-weight/",target:"_blank",rel:"noopener noreferrer",children:"Font"}),", ",(0,t.jsx)(s.a,{href:"https://tailwindcss.com/docs/border-width",target:"_blank",rel:"noopener noreferrer",children:"Border"}),", without writing a single CSS implementation Professional UI that conforms to the design draft."]}),"\n",(0,t.jsxs)(s.h2,{id:"customized-utility-class",children:["Customized Utility Class",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#customized-utility-class",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"We can also implement the new Utility Class ourselves to facilitate reuse between codes."}),"\n",(0,t.jsxs)(s.p,{children:["Utility Class itself is also a ",(0,t.jsx)(s.strong,{children:"component-oriented"})," technology (using different classes on a component is equivalent to setting some attributes from the base class for this component), but the classname of Utility Class is global (because it is used on arbitrary components/elements), it is very suitable for implementation with separate CSS files."]}),"\n",(0,t.jsx)(s.p,{children:"Create a new CSS file:"}),"\n",(0,t.jsxs)(c.Tabs,{children:[(0,t.jsx)(c.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-bash",children:"mkdir -p src/styles\ntouch src/styles/utils.css\n"})})]})})}),(0,t.jsx)(c.Tab,{value:"Windows",label:"Windows",children:(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-powershell",children:"mkdir -p src/styles\nni src/styles/utils.css\n"})})]})})})]}),"\n",(0,t.jsxs)(s.p,{children:["Import ",(0,t.jsx)(s.code,{children:"utils.css"})," in ",(0,t.jsx)(s.code,{children:"src/routes/page.tsx"}),":"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"import '../styles/utils.css';\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["A Utility Class named ",(0,t.jsx)(s.code,{children:"custom-text-gray"})," is implemented in ",(0,t.jsx)(s.code,{children:"src/routes/styles/utils.css"}),"."]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-css",children:":root {\n  --custom-text-color: rgb(113, 128, 150);\n}\n\n.custom-text-gray {\n  color: var(--custom-text-color);\n}\n"})})]})}),"\n",(0,t.jsxs)(s.div,{className:"modern-directive info",children:[(0,t.jsx)(s.div,{className:"modern-directive-title",children:"note"}),(0,t.jsxs)(s.div,{className:"modern-directive-content",children:[(0,t.jsxs)(s.p,{children:["Modern.js integrates with ",(0,t.jsx)(s.a,{href:"/guides/basic-features/css",children:"PostCSS"})," and supports modern CSS syntax features such as ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer",children:"custom properties"}),"."]}),"\n"]})]}),"\n",(0,t.jsxs)(s.p,{children:["Use in ",(0,t.jsx)(s.code,{children:"src/routes/components/Item/index.tsx"}),":"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:'<div className="ml-4 flex-1 flex justify-between">\n'})})]})}),"\n",(0,t.jsx)(s.p,{children:"Change to:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:'<div className="ml-4 custom-text-gray flex-1 flex justify-between">\n'})})]})}),"\n",(0,t.jsxs)(s.p,{children:["Execute ",(0,t.jsx)(s.code,{children:"pnpm run dev"}),", you can see that the font color has changed:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result3.png",alt:"design2"})}),"\n",(0,t.jsxs)(s.div,{className:"modern-directive info",children:[(0,t.jsx)(s.div,{className:"modern-directive-title",children:"note"}),(0,t.jsxs)(s.div,{className:"modern-directive-content",children:[(0,t.jsxs)(s.p,{children:["This is just to demonstrate Utility Class usage. In a real project, with Tailwind CSS, this Utility Class is of little value and should be added to the font color through the ",(0,t.jsx)(s.a,{href:"https://tailwindcss.com/docs/customizing-colors",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(s.strong,{children:"theme"})})," of the configuration Design System."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"utils.css"})," can also be written as ",(0,t.jsx)(s.code,{children:"utils.scss"})," or ",(0,t.jsx)(s.code,{children:"utils.less"}),", Modern.js out of the box support for SCSS and Less."]}),"\n",(0,t.jsxs)(s.p,{children:["However, with the support of PostCSS, modern CSS should be sufficient to meet these development needs, and the performance is also better than that of the preprocessor. It is recommended to use ",(0,t.jsx)(s.code,{children:".css"})," files first."]}),"\n"]})]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);