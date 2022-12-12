"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1034],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70314:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(52983),r=n(14517);const o="tabItem_cygK";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},38005:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(18249),r=n(52983),o=n(14517),s=n(27250),l=n(62209),i=n(61748),c=n(34333);const p="tabList_N6AO",m="tabItem_Wt3n";function u(e){var t;const{lazy:n,block:s,defaultValue:u,values:d,groupId:f,className:v}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,l.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:x}=(0,i.U)(),[y,C]=(0,r.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=f){const e=N[f];null!=e&&e!==y&&g.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,n=I.indexOf(t),a=g[n].value;a!==y&&(w(t),C(a),null!=f&&x(f,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;n=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;n=I[t]??I[I.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},v)},g.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>I.push(e),onKeyDown:O,onClick:j},s,{className:(0,o.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,s.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},49021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(18249),r=(n(52983),n(44993)),o=n(38005),s=n(70314);const l={title:"\u6dfb\u52a0\u5bb9\u5668\u7ec4\u4ef6"},i=void 0,c={unversionedId:"tutorials/first-app/c07-container",id:"tutorials/first-app/c07-container",title:"\u6dfb\u52a0\u5bb9\u5668\u7ec4\u4ef6",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u521d\u6b65\u5f15\u5165\u4e1a\u52a1\u6a21\u578b\uff0c\u4ece UI \u7ec4\u4ef6\u4e2d\u62c6\u5206\u51fa\u8fd9\u90e8\u5206\u903b\u8f91\u3002page.tsx \u4e2d\u4e0d\u518d\u5305\u542b UI \u65e0\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u5b9e\u73b0\u7ec6\u8282\uff0c\u53ea\u9700\u8981\u4f7f\u7528 Model\uff0c\u5c31\u80fd\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c07-container.md",sourceDirName:"tutorials/first-app",slug:"/tutorials/first-app/c07-container",permalink:"/v2/en/docs/tutorials/first-app/c07-container",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6dfb\u52a0\u5bb9\u5668\u7ec4\u4ef6"},sidebar:"tutorialsSidebar",previous:{title:"\u6dfb\u52a0\u4e1a\u52a1\u6a21\u578b\uff08\u72b6\u6001\u7ba1\u7406\uff09",permalink:"/v2/en/docs/tutorials/first-app/c06-model"},next:{title:"\u6dfb\u52a0\u5e94\u7528\u5165\u53e3",permalink:"/v2/en/docs/tutorials/first-app/c08-entries"}},p={},m=[{value:"\u4f7f\u7528\u5b8c\u6574 Model",id:"\u4f7f\u7528\u5b8c\u6574-model",level:2},{value:"\u62bd\u79bb\u5bb9\u5668\u7ec4\u4ef6",id:"\u62bd\u79bb\u5bb9\u5668\u7ec4\u4ef6",level:2}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u521d\u6b65\u5f15\u5165",(0,r.kt)("strong",{parentName:"p"},"\u4e1a\u52a1\u6a21\u578b"),"\uff0c\u4ece UI \u7ec4\u4ef6\u4e2d\u62c6\u5206\u51fa\u8fd9\u90e8\u5206\u903b\u8f91\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"page.tsx")," \u4e2d\u4e0d\u518d\u5305\u542b UI \u65e0\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u5b9e\u73b0\u7ec6\u8282\uff0c\u53ea\u9700\u8981\u4f7f\u7528 Model\uff0c\u5c31\u80fd\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u8981\u8fdb\u4e00\u6b65\u5229\u7528 Model \u4e2d\u5b9e\u73b0\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u8ba9 ",(0,r.kt)("inlineCode",{parentName:"p"},"page.tsx")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"archived/page.tsx")," \u83b7\u53d6\u540c\u4e00\u4efd\u6570\u636e\u3002\u5e76\u5b9e\u73b0 Archive \u6309\u94ae\uff0c\u70b9\u51fb\u6309\u94ae\u80fd\u628a\u8054\u7cfb\u4eba\u5f52\u6863\uff0c\u53ea\u663e\u793a\u5728 Archives \u5217\u8868\u91cc\uff0c\u4e0d\u663e\u793a\u5728 All \u5217\u8868\u91cc\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u5b8c\u6574-model"},"\u4f7f\u7528\u5b8c\u6574 Model"),(0,r.kt)("p",null,"\u56e0\u4e3a\u4e24\u4e2a\u9875\u9762\u9700\u8981\u5171\u7528\u540c\u4e00\u5957\u72b6\u6001\uff08\u8054\u7cfb\u4eba\u5217\u8868\u6570\u636e\u3001\u8054\u7cfb\u4eba\u662f\u5426\u88ab\u5f52\u6863\uff09\uff0c\u90fd\u9700\u8981\u5305\u542b\u52a0\u8f7d\u521d\u59cb\u6570\u636e\u7684\u903b\u8f91\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5728\u66f4\u4e0a\u4e00\u5c42\u5b8c\u6210\u6570\u636e\u83b7\u53d6\u3002"),(0,r.kt)("p",null,"Modern.js \u652f\u6301\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," \u901a\u8fc7 Data Loader \u83b7\u53d6\u6570\u636e\uff0c\u6211\u4eec\u5148\u6570\u636e\u83b7\u53d6\u8fd9\u90e8\u5206\u4ee3\u7801\u79fb\u52a8\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/layout.tsx")," \u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { name, internet } from "faker";\nimport { useModel } from "@modern-js/runtime/model";\nimport contacts from "../models/contacts";\n\ntype LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport const loader = async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n      archived: false,\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n\nexport default function Layout() {\n  const { data } = useLoaderData() as LoaderData;\n  const [{ items }, { setItem }] = useModel(contacts);\n  if (items.length === 0) {\n    setItem(data);\n  }\n\n  const navigate = useNavigate();\n  ...\n}\n')),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx")," \u4e2d\uff0c\u76f4\u63a5\u4f7f\u7528 Model\uff0c\u83b7\u53d6\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Helmet } from "@modern-js/runtime/head";\nimport { useModel } from "@modern-js/runtime/model";\nimport { List } from "antd";\nimport Item from "../components/Item";\nimport contacts from "../models/contacts";\n\nfunction Index() {\n  const [{ items }, { archive }] = useModel(contacts);\n\n  return (\n    <div className="container lg mx-auto">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={items}\n        renderItem={(info) => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n')),(0,r.kt)("p",null,"\u540c\u6837\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"archived/page.tsx")," \u4e2d\uff0c\u5220\u9664\u539f\u672c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"mockData")," \u903b\u8f91\uff0c\u4f7f\u7528 Model \u4e2d computed \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"archived")," \u503c\u4f5c\u4e3a\u6570\u636e\u6e90\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Helmet } from "@modern-js/runtime/head";\nimport { useModel } from "@modern-js/runtime/model";\nimport { List } from "antd";\nimport Item from "../../components/Item";\nimport contacts from "../../models/contacts";\n\nfunction Index() {\n  const [{ archived }, { archive }] = useModel(contacts);\n\n  return (\n    <div className="container lg mx-auto">\n      <Helmet>\n        <title>Archives</title>\n      </Helmet>\n      <List\n        dataSource={archived}\n        renderItem={(info) => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n')),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/"),"\uff0c\u70b9\u51fb Archive \u6309\u94ae\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u6309\u94ae\u7f6e\u7070\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c07-contacts-all.png",alt:"display"})),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u70b9\u51fb\u9876\u90e8\u5bfc\u822a\uff0c\u5207\u6362\u5230 Archives \u5217\u8868\uff0c\u53ef\u4ee5\u53d1\u73b0\u521a\u624d ",(0,r.kt)("strong",{parentName:"p"},"Archive")," \u7684\u8054\u7cfb\u4eba\u5df2\u7ecf\u51fa\u73b0\u5728\u5217\u8868\u5f53\u4e2d\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c07-contacts-archives.png",alt:"display"})),(0,r.kt)("h2",{id:"\u62bd\u79bb\u5bb9\u5668\u7ec4\u4ef6"},"\u62bd\u79bb\u5bb9\u5668\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u524d\u9762\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u628a\u9879\u76ee\u4e2d\u7684\u4e1a\u52a1\u903b\u8f91\u62c6\u5206\u6210\u4e86\u4e24\u4e2a layer\uff0c\u4e00\u4e2a\u662f",(0,r.kt)("strong",{parentName:"p"},"\u89c6\u56fe\u7ec4\u4ef6"),"\uff0c\u53e6\u4e00\u4e2a\u662f",(0,r.kt)("strong",{parentName:"p"},"\u4e1a\u52a1\u6a21\u5757"),"\u3002\u524d\u8005\u8d1f\u8d23 UI \u5c55\u793a\u3001\u4ea4\u4e92\u7b49\uff0c\u540e\u8005\u8d1f\u8d23\u5b9e\u73b0 UI \u65e0\u5173\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u4e13\u95e8\u7ba1\u7406\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/archives/page.tsx")," \u8fd9\u6837\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"useModel")," API \u7684\u7ec4\u4ef6\uff0c\u8d1f\u8d23\u628a View \u548c Model \u8fd9\u4e24\u4e2a layer \u8fde\u63a5\u8d77\u6765\uff0c\u7c7b\u4f3c\u4f20\u7edf MVC \u67b6\u6784\u4e2d Controller \u7684\u89d2\u8272\uff0c\u5728 Modern.js \u91cc\u6211\u4eec\u6cbf\u7528\u4e60\u60ef\uff0c\u628a\u5b83\u4eec\u79f0\u4f5c",(0,r.kt)("strong",{parentName:"p"},"\u5bb9\u5668\u7ec4\u4ef6\uff08Container\uff09"),"\u3002"),(0,r.kt)("p",null,"\u5bb9\u5668\u7ec4\u4ef6\u63a8\u8350\u653e\u5728\u4e13\u95e8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"containers/")," \u76ee\u5f55\u91cc\uff0c\u6211\u4eec\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u521b\u5efa\u65b0\u7684\u6587\u4ef6\uff1a"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/containers\ntouch src/containers/Contacts.tsx\n"))),(0,r.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/containers\nni src/containers/Contacts.tsx\n")))),(0,r.kt)("p",null,"\u6211\u4eec\u5c06\u539f\u672c\u4e24\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"page.tsx")," \u4e2d\u516c\u5171\u7684\u90e8\u5206\u62bd\u79bb\u51fa\u6765\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"src/containers/Contacts.tsx")," \u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Helmet } from "@modern-js/runtime/head";\nimport { useModel } from "@modern-js/runtime/model";\nimport { List } from "antd";\nimport Item from "../components/Item";\nimport contacts from "../models/contacts";\n\nfunction Contacts({\n  title,\n  source,\n}: {\n  title: string;\n  source: "items" | "archived";\n}) {\n  const [state, { archive }] = useModel(contacts);\n\n  return (\n    <div className="container lg mx-auto">\n      <Helmet>\n        <title>{title}</title>\n      </Helmet>\n      <List\n        dataSource={state[source]}\n        renderItem={(info) => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Contacts;\n')),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/archives/page.tsx")," \u7684\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/routes/page.tsx"',title:'"src/routes/page.tsx"'},'import Contacts from "../containers/Contacts";\n\nfunction Index() {\n  return <Contacts title="All" source="items" />;\n}\n\nexport default Index;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/routes/archives/page.tsx"',title:'"src/routes/archives/page.tsx"'},'import Contacts from "../../containers/Contacts";\n\nfunction Index() {\n  return <Contacts title="Archives" source="archived" />;\n}\n\nexport default Index;\n')),(0,r.kt)("p",null,"\u91cd\u6784\u5b8c\u6210\uff0c\u73b0\u5728\u7684\u9879\u76ee\u7ed3\u6784\u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 dist\n\u251c\u2500\u2500 modern.config.ts\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Avatar\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Item\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 index.tsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 containers\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Contacts.tsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 contacts.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 modern-app-env.d.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 routes\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 archives\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 layout.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n\u2502\xa0\xa0 \u2514\u2500\u2500 styles\n\u2502\xa0\xa0     \u2514\u2500\u2500 utils.css\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"components/")," \u91cc\u7684",(0,r.kt)("strong",{parentName:"p"},"\u89c6\u56fe\u7ec4\u4ef6"),"\uff0c\u90fd\u662f\u76ee\u5f55\u5f62\u5f0f\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar/index.tsx"),"\u3002\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"containers/")," \u91cc\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5bb9\u5668\u7ec4\u4ef6"),"\uff0c\u90fd\u662f\u5355\u6587\u4ef6\u5f62\u5f0f\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"contacts.tsx"),"\u3002",(0,r.kt)("strong",{parentName:"p"},"\u8fd9\u662f\u6211\u4eec\u63a8\u8350\u7684\u4e00\u79cd\u6700\u4f73\u5b9e\u8df5"),"\u3002"),(0,r.kt)("p",null,"\u5728\u200b ",(0,r.kt)("a",{parentName:"p",href:"/v2/en/docs/tutorials/first-app/c02-component"},"\u6dfb\u52a0 UI \u7ec4\u4ef6\uff08Component\uff09")," \u7ae0\u8282\u63d0\u5230\u8fc7\uff0c\u89c6\u56fe\u7ec4\u4ef6\u7528\u76ee\u5f55\u5f62\u5f0f\uff0c\u662f\u56e0\u4e3a\u89c6\u56fe\u7ec4\u4ef6\u8d1f\u8d23\u5b9e\u73b0 UI \u5c55\u793a\u548c\u4ea4\u4e92\u7ec6\u8282\uff0c\u53ef\u4ee5\u6f14\u53d8\u7684\u590d\u6742\u3002\u7528\u76ee\u5f55\u5f62\u5f0f\uff0c\u53ef\u4ee5\u65b9\u4fbf\u589e\u52a0\u5b50\u6587\u4ef6\uff0c\u5305\u62ec\u4e13\u7528\u7684\u8d44\u6e90\uff08\u56fe\u7247\u7b49\uff09\u3001\u4e13\u7528\u5b50\u7ec4\u4ef6\u3001CSS \u6587\u4ef6\u7b49\u3002\u5728\u8fd9\u4e2a\u76ee\u5f55\u5185\u90e8\u53ef\u4ee5\u968f\u610f\u91cd\u6784\uff0c\u53ea\u8003\u8651\u6700\u5c0f\u5c40\u90e8\u3002"),(0,r.kt)("p",null,"\u800c\u5bb9\u5668\u7ec4\u4ef6\u53ea\u8d1f\u8d23\u8fde\u63a5\uff0c\u662f\u4e00\u4e2a\u80f6\u6c34\u5c42\uff0c\u590d\u6742\u7684\u4e1a\u52a1\u903b\u8f91\u548c\u5b9e\u73b0\u7ec6\u8282\u90fd\u4ea4\u7ed9 View \u5c42\u548c Model \u5c42\u53bb\u5b9e\u73b0\u3002\u5bb9\u5668\u7ec4\u4ef6\u81ea\u5df1\u5e94\u8be5\u4fdd\u6301\u7b80\u5355\u6e05\u6670\uff0c\u4e0d\u5e94\u8be5\u5305\u542b\u590d\u6742\u5b9e\u73b0\u7ec6\u8282\uff0c\u6240\u4ee5\u4e0d\u5e94\u8be5\u6709\u5185\u90e8\u7ed3\u6784\u3002\u91c7\u7528\u5355\u6587\u4ef6\u5f62\u5f0f\u4e0d\u4f46\u66f4\u7b80\u6d01\uff0c\u4e5f\u80fd\u8d77\u5230\u7ea6\u675f\u4f5c\u7528\uff0c\u63d0\u9192\u5f00\u53d1\u8005\u4e0d\u8981\u628a\u5bb9\u5668\u7ec4\u4ef6\u5199\u590d\u6742\u3002"))}d.isMDXComponent=!0}}]);