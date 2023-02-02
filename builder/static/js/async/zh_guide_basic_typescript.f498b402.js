"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[2642],{5195:function(e,s,n){n.r(s),n.d(s,{content:function(){return a},frontmatter:function(){return r},title:function(){return t},toc:function(){return c}});var l=n(39980);const r=void 0,c=[{id:"typescript-\u8f6c\u8bd1",text:"TypeScript \u8f6c\u8bd1",depth:2},{id:"\u4e3a\u4ec0\u4e48\u9ed8\u8ba4\u4f7f\u7528-babel",text:"\u4e3a\u4ec0\u4e48\u9ed8\u8ba4\u4f7f\u7528 Babel",depth:3},{id:"\u7c7b\u578b\u68c0\u67e5",text:"\u7c7b\u578b\u68c0\u67e5",depth:2}],t="\u4f7f\u7528 TypeScript",a='"# \u4f7f\u7528 TypeScript\\n\\nBuilder \u5bf9 TypeScript \u7684\u8f6c\u8bd1\u548c\u7c7b\u578b\u68c0\u67e5\u505a\u4e86\u9ed8\u8ba4\u652f\u6301\uff0c\u65e0\u9700\u4efb\u4f55\u914d\u7f6e\u5373\u53ef\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 `.ts` \u548c `.tsx` \u6587\u4ef6\u3002\\n\\n## TypeScript \u8f6c\u8bd1\\n\\nBuilder \u6709\u4e09\u79cd\u53ef\u9009\u65b9\u5f0f\u5904\u7406 TypeScript \u6587\u4ef6\u3002\\n\\n**Babel**\\n\\n\u5728\u9ed8\u8ba4\u914d\u7f6e\u4e0b\uff0c\u6e90\u7801\u4e2d\u6240\u6709\u7684 TypeScript \u6587\u4ef6\u4f1a\u7ecf\u8fc7 Babel \u8f6c\u8bd1\u3002\\n\u53ef\u80fd\u4f60\u5728\u67e5\u9605\u8f83\u8001\u65e7\u7684\u8d44\u6599\u65f6\u4f1a\u53d1\u73b0\uff0cBabel \u65e0\u6cd5\u5904\u7406 `const enum` \u4ee5\u53ca `namespace alias` \u8bed\u6cd5\uff0c\u4f46\u662f\u5176\u5b9e\u5728 [7.15](https://babeljs.io/blog/2021/07/26/7.15.0) \u7248\u672c\u5df2\u7ecf\u5f97\u5230\u4e86\u652f\u6301\u3002Babel \u65e0\u9700\u624b\u52a8\u5f00\u542f\uff0c\u76f4\u63a5\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 TypeScript \u6587\u4ef6\u5373\u53ef\u3002\\n\\n**ts-loader**\\n\\nts-loader \u4f7f\u7528 TypeScript \u5b98\u65b9\u7684 TSC \u8f6c\u8bd1\u3002\u5f53\u5f00\u542f ts-loader \u540e TypeScript \u6587\u4ef6\u4e0d\u4f1a\u518d\u7ecf\u8fc7 Babel \u7f16\u8bd1\u5904\u7406\uff0c\u4f46\u5904\u7406\u540e\u7684 JavaScript \u4ea7\u7269\u4ecd\u7136\u4f1a\u7531 Babel \u8fdb\u884c\u8bed\u6cd5\u964d\u7ea7\u4ee5\u53ca Polyfill \u6ce8\u5165\u3002\\n\\n\u5f00\u542f ts-loader(\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e):\\n\\n```ts\\nexport default {\\n  tools: {\\n    tsLoader: {},\\n  },\\n};\\n```\\n\\n\u66f4\u8be6\u7ec6\u914d\u7f6e\u53ef\u89c1 [tools.tsLoader](/api/config-tools.html#tools-tsloader)\u3002\\n\u5982\u679c\u5f00\u542f ts-loader\uff0c\u9ed8\u8ba4\u4e0d\u4f1a\u542f\u7528\u7c7b\u578b\u68c0\u67e5\uff0c\u53ea\u4f1a\u8fdb\u884c\u8f6c\u8bd1\u3002\\n\\n**SWC**\\n\\n\u5982\u679c\u60f3\u8981\u66f4\u5feb\u7684\u9879\u76ee\u6784\u5efa\u901f\u5ea6\uff0c\u5e76\u4e14\u9879\u76ee\u6ca1\u6709\u4f9d\u8d56\u67d0\u4e9b\u81ea\u5b9a\u4e49\u7684 Babel \u63d2\u4ef6\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u9009\u62e9 SWC \u6765\u5bf9 JavaScript \u548c TypeScript \u8fdb\u884c\u8f6c\u8bd1\u548c\u538b\u7f29\u3002Builder \u7684 SWC \u63d2\u4ef6\u9ed8\u8ba4\u652f\u6301 TypeScript, TSX, Decorator\uff0c\u4f7f\u7528\u65b9\u5f0f\u53ef\u89c1 [SWC \u63d2\u4ef6](/plugins/plugin-swc.html)\u3002\\n\\n### \u4e3a\u4ec0\u4e48\u9ed8\u8ba4\u4f7f\u7528 Babel\\n\\nBabel \u9664\u4e86\u6ca1\u6709\u7c7b\u578b\u68c0\u67e5\u4ee5\u5916\uff0c\u5bf9 TypeScript \u8bed\u6cd5\u652f\u6301\u5df2\u7ecf\u975e\u5e38\u5b8c\u5584\uff0c\u800c\u7c7b\u578b\u68c0\u67e5\u53ef\u4ee5\u501f\u52a9\u53e6\u5916\u7684\u5de5\u5177\u66f4\u597d\u5730\u8fdb\u884c\u3002\u8f6c\u8bd1\u5230\u4f4e\u7248\u672c\u7684 JavaScript \u65f6\uff0c\u67d0\u4e9b\u8bed\u6cd5 Babel \u4f1a\u5904\u7406\u5f97\u66f4\u7b26\u5408\u6807\u51c6\uff0c\u4f8b\u5982 Babel \u4f1a\u5c06\u7c7b\u6210\u5458\u521d\u59cb\u5316\u4e3a undefined\uff0c\u5c06\u7c7b\u65b9\u6cd5\u6807\u8bb0\u4e0d\u53ef\u679a\u4e3e\u7b49\u884c\u4e3a\u3002\u5982\u679c\u542f\u7528 ts-loader\uff0c\u4e3a\u4e86\u66f4\u7cbe\u786e\u7684\u8bed\u6cd5\u964d\u7ea7\u548c Polyfill\uff0c\u6700\u540e\u8fd8\u662f\u4f1a\u5c06\u5904\u7406\u540e\u7684\u4ea7\u7269\u518d\u6b21\u7ecf\u8fc7 Babel \u5904\u7406\uff0c\u4ea7\u751f\u4e0d\u5fc5\u8981\u7684\u6027\u80fd\u5f00\u9500\u3002\\n\\n## \u7c7b\u578b\u68c0\u67e5\\n\\n\u76ee\u524d\u751f\u4ea7\u53ef\u7528\u7684\u7c7b\u578b\u68c0\u67e5\u5de5\u5177\u53ea\u6709\u5b98\u65b9\u7684 TSC\uff0cTSC \u7c7b\u578b\u68c0\u67e5\u8017\u65f6\u5728\u5927\u9879\u76ee\u4e2d\u5f80\u5f80\u662f\u5f88\u6162\u7684\u8fc7\u7a0b\uff0cBuilder \u4e2d\u9ed8\u8ba4\u4f7f\u7528 tsChecker([fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)) \u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u5f02\u6b65\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\uff0c\u4e0d\u963b\u585e\u9879\u76ee\u7684\u542f\u52a8\u3002\\n\\n\u914d\u7f6e tsChecker(\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e):\\n\\n```ts\\nexport default {\\n  tools: {\\n    tsChecker: {},\\n  },\\n};\\n```\\n\\n\u66f4\u591a\u914d\u7f6e\u53ef\u89c1 [tsChecker \u914d\u7f6e](/api/config-tools.html#tools-tschecker)\u3002\\n\u5982\u679c\u5f00\u542f ts-loader \u5e76\u4e14\u624b\u52a8\u914d\u7f6e\u4e86 `compileOnly: false`\uff0c\u8bf7\u5173\u95ed tsChecker\uff0c\u907f\u514d\u91cd\u590d\u7c7b\u578b\u68c0\u67e5\u3002\\n\\n:::tip STC\\nSWC \u4f5c\u8005\u65b0\u5f00\u6e90\u7684\u57fa\u4e8e Rust \u7684\u7c7b\u578b\u68c0\u67e5\u5de5\u5177 [STC](https://github.com/dudykr/stc) \u76ee\u524d\u8fd8\u4e0d\u53ef\u7528\u4e8e\u751f\u4ea7\uff0c\u8fd8\u5728\u8d77\u6b65\u9636\u6bb5\uff0c\u4e0d\u63a8\u8350\u7528\u4e8e\u9879\u76ee\u4e2d\uff0c\u7b49\u5f85\u4e4b\u540e\u66f4\u6210\u719f\uff0c\u4f1a\u96c6\u6210\u5230 Builder \u7684 SWC \u63d2\u4ef6\u4e2d\u4f5c\u4e3a\u5b9e\u9a8c\u529f\u80fd\uff0c\u656c\u8bf7\u671f\u5f85\u3002\\n:::\\n"';function i(e){const s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",strong:"strong",div:"div",button:"button",pre:"pre",span:"span",h3:"h3"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"\u4f7f\u7528-typescript",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4f7f\u7528-typescript",children:"#"}),"\u4f7f\u7528 TypeScript"]}),"\n",(0,l.jsxs)(s.p,{children:["Builder \u5bf9 TypeScript \u7684\u8f6c\u8bd1\u548c\u7c7b\u578b\u68c0\u67e5\u505a\u4e86\u9ed8\u8ba4\u652f\u6301\uff0c\u65e0\u9700\u4efb\u4f55\u914d\u7f6e\u5373\u53ef\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 ",(0,l.jsx)(s.code,{children:".ts"})," \u548c ",(0,l.jsx)(s.code,{children:".tsx"})," \u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(s.h2,{id:"typescript-\u8f6c\u8bd1",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#typescript-\u8f6c\u8bd1",children:"#"}),"TypeScript \u8f6c\u8bd1"]}),"\n",(0,l.jsx)(s.p,{children:"Builder \u6709\u4e09\u79cd\u53ef\u9009\u65b9\u5f0f\u5904\u7406 TypeScript \u6587\u4ef6\u3002"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Babel"})}),"\n",(0,l.jsxs)(s.p,{children:["\u5728\u9ed8\u8ba4\u914d\u7f6e\u4e0b\uff0c\u6e90\u7801\u4e2d\u6240\u6709\u7684 TypeScript \u6587\u4ef6\u4f1a\u7ecf\u8fc7 Babel \u8f6c\u8bd1\u3002\n\u53ef\u80fd\u4f60\u5728\u67e5\u9605\u8f83\u8001\u65e7\u7684\u8d44\u6599\u65f6\u4f1a\u53d1\u73b0\uff0cBabel \u65e0\u6cd5\u5904\u7406 ",(0,l.jsx)(s.code,{children:"const enum"})," \u4ee5\u53ca ",(0,l.jsx)(s.code,{children:"namespace alias"})," \u8bed\u6cd5\uff0c\u4f46\u662f\u5176\u5b9e\u5728 ",(0,l.jsx)(s.a,{href:"https://babeljs.io/blog/2021/07/26/7.15.0",target:"_blank",rel:"nofollow",children:"7.15"})," \u7248\u672c\u5df2\u7ecf\u5f97\u5230\u4e86\u652f\u6301\u3002Babel \u65e0\u9700\u624b\u52a8\u5f00\u542f\uff0c\u76f4\u63a5\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 TypeScript \u6587\u4ef6\u5373\u53ef\u3002"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"ts-loader"})}),"\n",(0,l.jsx)(s.p,{children:"ts-loader \u4f7f\u7528 TypeScript \u5b98\u65b9\u7684 TSC \u8f6c\u8bd1\u3002\u5f53\u5f00\u542f ts-loader \u540e TypeScript \u6587\u4ef6\u4e0d\u4f1a\u518d\u7ecf\u8fc7 Babel \u7f16\u8bd1\u5904\u7406\uff0c\u4f46\u5904\u7406\u540e\u7684 JavaScript \u4ea7\u7269\u4ecd\u7136\u4f1a\u7531 Babel \u8fdb\u884c\u8bed\u6cd5\u964d\u7ea7\u4ee5\u53ca Polyfill \u6ce8\u5165\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u5f00\u542f ts-loader(\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e):"}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"tools"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"tsLoader"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["\u66f4\u8be6\u7ec6\u914d\u7f6e\u53ef\u89c1 ",(0,l.jsx)(s.a,{href:"/builder/api/config-tools.html#tools-tsloader",children:"tools.tsLoader"}),"\u3002\n\u5982\u679c\u5f00\u542f ts-loader\uff0c\u9ed8\u8ba4\u4e0d\u4f1a\u542f\u7528\u7c7b\u578b\u68c0\u67e5\uff0c\u53ea\u4f1a\u8fdb\u884c\u8f6c\u8bd1\u3002"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"SWC"})}),"\n",(0,l.jsxs)(s.p,{children:["\u5982\u679c\u60f3\u8981\u66f4\u5feb\u7684\u9879\u76ee\u6784\u5efa\u901f\u5ea6\uff0c\u5e76\u4e14\u9879\u76ee\u6ca1\u6709\u4f9d\u8d56\u67d0\u4e9b\u81ea\u5b9a\u4e49\u7684 Babel \u63d2\u4ef6\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u9009\u62e9 SWC \u6765\u5bf9 JavaScript \u548c TypeScript \u8fdb\u884c\u8f6c\u8bd1\u548c\u538b\u7f29\u3002Builder \u7684 SWC \u63d2\u4ef6\u9ed8\u8ba4\u652f\u6301 TypeScript, TSX, Decorator\uff0c\u4f7f\u7528\u65b9\u5f0f\u53ef\u89c1 ",(0,l.jsx)(s.a,{href:"/builder/plugins/plugin-swc.html",children:"SWC \u63d2\u4ef6"}),"\u3002"]}),"\n",(0,l.jsxs)(s.h3,{id:"\u4e3a\u4ec0\u4e48\u9ed8\u8ba4\u4f7f\u7528-babel",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4e3a\u4ec0\u4e48\u9ed8\u8ba4\u4f7f\u7528-babel",children:"#"}),"\u4e3a\u4ec0\u4e48\u9ed8\u8ba4\u4f7f\u7528 Babel"]}),"\n",(0,l.jsx)(s.p,{children:"Babel \u9664\u4e86\u6ca1\u6709\u7c7b\u578b\u68c0\u67e5\u4ee5\u5916\uff0c\u5bf9 TypeScript \u8bed\u6cd5\u652f\u6301\u5df2\u7ecf\u975e\u5e38\u5b8c\u5584\uff0c\u800c\u7c7b\u578b\u68c0\u67e5\u53ef\u4ee5\u501f\u52a9\u53e6\u5916\u7684\u5de5\u5177\u66f4\u597d\u5730\u8fdb\u884c\u3002\u8f6c\u8bd1\u5230\u4f4e\u7248\u672c\u7684 JavaScript \u65f6\uff0c\u67d0\u4e9b\u8bed\u6cd5 Babel \u4f1a\u5904\u7406\u5f97\u66f4\u7b26\u5408\u6807\u51c6\uff0c\u4f8b\u5982 Babel \u4f1a\u5c06\u7c7b\u6210\u5458\u521d\u59cb\u5316\u4e3a undefined\uff0c\u5c06\u7c7b\u65b9\u6cd5\u6807\u8bb0\u4e0d\u53ef\u679a\u4e3e\u7b49\u884c\u4e3a\u3002\u5982\u679c\u542f\u7528 ts-loader\uff0c\u4e3a\u4e86\u66f4\u7cbe\u786e\u7684\u8bed\u6cd5\u964d\u7ea7\u548c Polyfill\uff0c\u6700\u540e\u8fd8\u662f\u4f1a\u5c06\u5904\u7406\u540e\u7684\u4ea7\u7269\u518d\u6b21\u7ecf\u8fc7 Babel \u5904\u7406\uff0c\u4ea7\u751f\u4e0d\u5fc5\u8981\u7684\u6027\u80fd\u5f00\u9500\u3002"}),"\n",(0,l.jsxs)(s.h2,{id:"\u7c7b\u578b\u68c0\u67e5",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7c7b\u578b\u68c0\u67e5",children:"#"}),"\u7c7b\u578b\u68c0\u67e5"]}),"\n",(0,l.jsxs)(s.p,{children:["\u76ee\u524d\u751f\u4ea7\u53ef\u7528\u7684\u7c7b\u578b\u68c0\u67e5\u5de5\u5177\u53ea\u6709\u5b98\u65b9\u7684 TSC\uff0cTSC \u7c7b\u578b\u68c0\u67e5\u8017\u65f6\u5728\u5927\u9879\u76ee\u4e2d\u5f80\u5f80\u662f\u5f88\u6162\u7684\u8fc7\u7a0b\uff0cBuilder \u4e2d\u9ed8\u8ba4\u4f7f\u7528 tsChecker(",(0,l.jsx)(s.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"nofollow",children:"fork-ts-checker-webpack-plugin"}),") \u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u5f02\u6b65\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\uff0c\u4e0d\u963b\u585e\u9879\u76ee\u7684\u542f\u52a8\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u914d\u7f6e tsChecker(\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e):"}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"tools"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"tsChecker"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["\u66f4\u591a\u914d\u7f6e\u53ef\u89c1 ",(0,l.jsx)(s.a,{href:"/builder/api/config-tools.html#tools-tschecker",children:"tsChecker \u914d\u7f6e"}),"\u3002\n\u5982\u679c\u5f00\u542f ts-loader \u5e76\u4e14\u624b\u52a8\u914d\u7f6e\u4e86 ",(0,l.jsx)(s.code,{children:"compileOnly: false"}),"\uff0c\u8bf7\u5173\u95ed tsChecker\uff0c\u907f\u514d\u91cd\u590d\u7c7b\u578b\u68c0\u67e5\u3002"]}),"\n",(0,l.jsxs)(s.div,{className:"modern-directive tip",children:[(0,l.jsx)(s.p,{className:"modern-directive-title",children:"STC"}),(0,l.jsx)(s.div,{className:"modern-directive-content",children:(0,l.jsxs)(s.p,{children:["\nSWC \u4f5c\u8005\u65b0\u5f00\u6e90\u7684\u57fa\u4e8e Rust \u7684\u7c7b\u578b\u68c0\u67e5\u5de5\u5177 ",(0,l.jsx)(s.a,{href:"https://github.com/dudykr/stc",target:"_blank",rel:"nofollow",children:"STC"}),"\u76ee\u524d\u8fd8\u4e0d\u53ef\u7528\u4e8e\u751f\u4ea7\uff0c\u8fd8\u5728\u8d77\u6b65\u9636\u6bb5\uff0c\u4e0d\u63a8\u8350\u7528\u4e8e\u9879\u76ee\u4e2d\uff0c\u7b49\u5f85\u4e4b\u540e\u66f4\u6210\u719f\uff0c\u4f1a\u96c6\u6210\u5230 Builder \u7684 SWC \u63d2\u4ef6\u4e2d\u4f5c\u4e3a\u5b9e\u9a8c\u529f\u80fd\uff0c\u656c\u8bf7\u671f\u5f85\u3002"]})})]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}}}]);