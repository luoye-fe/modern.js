"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6650,6178],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(18249),o=(n(52983),n(44993)),a=n(67242);const i={sidebar_position:9,title:"useStore"},p=void 0,s={unversionedId:"apis/app/runtime/model/use-store",id:"apis/app/runtime/model/use-store",title:"useStore",description:"useStore \u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u7ec4\u4ef6\u6811\u5171\u4eab\u7684 Store\u3002\u5e38\u7528\u4e8e\u5728\u7ec4\u4ef6\u5916\u8bbf\u95ee Model \u7684\u573a\u666f\u3002\u6ce8\u610f\uff0cuseStore \u662f\u4e00\u4e2a React Hook\uff0c\u53ea\u80fd\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528\u3002",source:"@site/docs/apis/app/runtime/model/use-store.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/use-store",permalink:"/v2/en/docs/apis/app/runtime/model/use-store",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"useStore"},sidebar:"apisAppSidebar",previous:{title:"Provider",permalink:"/v2/en/docs/apis/app/runtime/model/Provider"},next:{title:"createStore",permalink:"/v2/en/docs/apis/app/runtime/model/create-store"}},c={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.default,{mdxType:"ReduckTip"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useStore")," \u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u7ec4\u4ef6\u6811\u5171\u4eab\u7684 Store\u3002\u5e38\u7528\u4e8e\u5728\u7ec4\u4ef6\u5916\u8bbf\u95ee Model \u7684\u573a\u666f\u3002\u6ce8\u610f\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"useStore")," \u662f\u4e00\u4e2a React Hook\uff0c\u53ea\u80fd\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function useStore(): ReduckStore;\n")),(0,o.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ReduckStore\uff1aReduck Store\uff0c\u7c7b\u578b\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"/v2/en/docs/apis/app/runtime/model/create-store"},"createStore")," \u8fd4\u56de\u503c\u3002")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \u4fdd\u8bc1 getStore \u5728\u7ec4\u4ef6\u6811\u6302\u8f7d\u5b8c\u6210\u540e\u6267\u884c\nsetTimeout(() => {\n  const store = getStore();\n  const [, actions] = store.use(countModel);\n  setInterval(() => {\n    actions.add();\n  }, 1000);\n}, 1000);\n\nfunction Counter() {\n  const [state] = useModel(countModel);\n\n  return (\n    <div>\n      <div>counter: {state.value}</div>\n    </div>\n  );\n}\n")),(0,o.kt)("admonition",{title:"\u66f4\u591a\u53c2\u8003",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/model/use-model"},"\u4f7f\u7528 Model"))))}d.isMDXComponent=!0},67242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(18249),o=(n(52983),n(44993));const a={},i=void 0,p={unversionedId:"components/reduck-tip",id:"components/reduck-tip",title:"reduck-tip",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a@modern-js/runtime/model\u3002",source:"@site/docs/components/reduck-tip.md",sourceDirName:"components",slug:"/components/reduck-tip",permalink:"/v2/en/docs/components/reduck-tip",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/model"),"\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u662f\u5728 Modern.js \u4ee5\u5916\u5355\u72ec\u96c6\u6210 Reduck\uff0c\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/react"),"\u3002")))}l.isMDXComponent=!0}}]);