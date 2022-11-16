"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3678],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(18249),a=(n(52983),n(44993));const i={sidebar_position:6,title:"\u81ea\u52a8\u751f\u6210 Actions"},r=void 0,l={unversionedId:"guides/topic-detail/model/auto-actions",id:"guides/topic-detail/model/auto-actions",title:"\u81ea\u52a8\u751f\u6210 Actions",description:"\u5728 \u5feb\u901f\u4e0a\u624b \u4e2d\uff0c\u6211\u4eec\u5b9e\u73b0\u6700\u7b80\u5355\u7684\u8ba1\u6570\u5668 Model \u4e5f\u9700\u8981 10 \u884c\u4ee3\u7801\u3002",source:"@site/docs/guides/topic-detail/model/auto-actions.md",sourceDirName:"guides/topic-detail/model",slug:"/guides/topic-detail/model/auto-actions",permalink:"/v2/en/docs/guides/topic-detail/model/auto-actions",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u81ea\u52a8\u751f\u6210 Actions"},sidebar:"guidesSidebar",previous:{title:"\u526f\u4f5c\u7528\u7ba1\u7406",permalink:"/v2/en/docs/guides/topic-detail/model/manage-effects"},next:{title:"Model \u901a\u4fe1",permalink:"/v2/en/docs/guides/topic-detail/model/model-communicate"}},c={},s=[{value:"\u539f\u59cb\u6570\u636e\u7c7b\u578b",id:"\u539f\u59cb\u6570\u636e\u7c7b\u578b",level:2},{value:"\u6570\u7ec4\u7c7b\u578b",id:"\u6570\u7ec4\u7c7b\u578b",level:2},{value:"\u7b80\u5355\u5bf9\u8c61\u7c7b\u578b",id:"\u7b80\u5355\u5bf9\u8c61\u7c7b\u578b",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/model/quick-start"},"\u5feb\u901f\u4e0a\u624b")," \u4e2d\uff0c\u6211\u4eec\u5b9e\u73b0\u6700\u7b80\u5355\u7684\u8ba1\u6570\u5668 Model \u4e5f\u9700\u8981 10 \u884c\u4ee3\u7801\u3002\n\u5b9e\u9645\u4e0a\uff0cModern.js \u652f\u6301\u6839\u636e\u58f0\u660e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u7c7b\u578b\uff0c\u81ea\u52a8\u751f\u6210\u5e38\u7528\u7684 Actions\uff0c\u4ece\u800c\u7b80\u5316\u6a21\u677f\u4ee3\u7801\u91cf\u3002\u5f53\u524d\u652f\u6301\u7684\u7c7b\u578b\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u539f\u59cb\u6570\u636e\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u7b80\u5355\u5bf9\u8c61\u7c7b\u578b\uff08Plain Object\uff09")),(0,a.kt)("h2",{id:"\u539f\u59cb\u6570\u636e\u7c7b\u578b"},"\u539f\u59cb\u6570\u636e\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const countModel = model('count').define({ state: 1 });\n")),(0,a.kt)("p",null,"\u5982\u4e0a\u6211\u4eec\u4ec5\u7528\u4e00\u884c\u5c31\u5b8c\u6210\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"countModel"),"\u3002\u4f7f\u7528 Model \u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    // \u589e\u52a0 1\n    actions.setState(state + 1);\n  }, []);\n}\n")),(0,a.kt)("h2",{id:"\u6570\u7ec4\u7c7b\u578b"},"\u6570\u7ec4\u7c7b\u578b"),(0,a.kt)("p",null,"\u5f53 State \u4e3a\u6570\u7ec4\u7c7b\u578b\u65f6\uff0c\u81ea\u52a8\u751f\u6210 Actions \u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const countModel = model('count').define({ state: [] });\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    actions.push(1);\n    actions.pop();\n    actions.shift();\n    actions.unshift(1);\n    actions.concat([1]);\n    actions.splice(0, 1, 2);\n    actions.filter(value => value > 1);\n  }, []);\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 JavaScript Array \u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u4fee\u6539 State\u3002"),(0,a.kt)("h2",{id:"\u7b80\u5355\u5bf9\u8c61\u7c7b\u578b"},"\u7b80\u5355\u5bf9\u8c61\u7c7b\u578b"),(0,a.kt)("p",null,"\u5f53 State \u4e3a\u7b80\u5355\u5bf9\u8c61\u7c7b\u578b\u65f6\uff0c\u81ea\u52a8\u751f\u6210 Actions \u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const countModel = model('count').define({\n  state: {\n    a: 1,\n    b: [],\n    c: {},\n  },\n});\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    actions.setA(2);\n    actions.setB([1]);\n    actions.setC({ a: 1 });\n  }, []);\n}\n")),(0,a.kt)("p",null,"\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"b"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"c")," \u4e09\u4e2a\u4e0d\u540c\u7684\u5b57\u6bb5\u5206\u522b\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"setA"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"setB"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"setC")," \u4e09\u4e2a Actions\u3002"),(0,a.kt)("admonition",{title:"\u6ce8",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u7528\u6237\u81ea\u5b9a\u4e49\u7684 Action \u548c Modern.js \u81ea\u52a8\u751f\u6210\u7684 Action \u540d\u5b57\u4e00\u81f4\u65f6\uff0c\u7528\u6237\u81ea\u5b9a\u4e49\u7684 Action \u4f18\u5148\u7ea7\u66f4\u9ad8\u3002\u4f8b\u5982\uff0c\n\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"countModel")," \u4e2d\u5df2\u7ecf\u81ea\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"setA")," \u8fd9\u4e2a Action\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"actions.setA()")," \u65f6\uff0c\u6700\u7ec8\u6267\u884c\u7684\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"setA"),"\u3002")),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u76f8\u5173 API \u7684\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/model/auto-actions"},"\u8fd9\u91cc"),"\u3002")))}u.isMDXComponent=!0}}]);