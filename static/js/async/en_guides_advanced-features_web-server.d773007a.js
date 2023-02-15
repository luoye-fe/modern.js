"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[15814],{30266:function(e,s,r){r.r(s),r.d(s,{frontmatter:function(){return i},title:function(){return l},toc:function(){return o}});var n=r(97458);const i={title:"Custom Web Server",sidebar_position:2},o=[{id:"\u521b\u5efa\u81ea\u5b9a\u4e49-web-server",text:"\u521b\u5efa\u81ea\u5b9a\u4e49 Web Server",depth:2},{id:"\u4f7f\u7528-api-\u6269\u5c55-web-server",text:"\u4f7f\u7528 API \u6269\u5c55 Web Server",depth:2},{id:"hook",text:"Hook",depth:3},{id:"middleware",text:"Middleware",depth:3},{id:"\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684-web-server",text:"\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684 Web Server",depth:2}],l="Custom Web Server";function c(e){const s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",button:"button",pre:"pre",span:"span",strong:"strong",h3:"h3"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"custom-web-server",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-web-server",children:"#"}),"Custom Web Server"]}),"\n",(0,n.jsx)(s.p,{children:"Modern.js \u4f5c\u4e3a\u4ee5\u5ba2\u6237\u7aef\u4e3a\u4e2d\u5fc3\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u5bf9\u670d\u52a1\u7aef\u7684\u5b9a\u5236\u80fd\u529b\u8f83\u5f31\u3002\u800c\u5728\u6709\u4e9b\u5f00\u53d1\u573a\u666f\u4e0b\uff0c\u9700\u8981\u5b9a\u5236\u7279\u6b8a\u7684\u670d\u52a1\u7aef\u903b\u8f91\uff0c\u4f8b\u5982\u7528\u6237\u9274\u6743\u3001\u8bf7\u6c42\u9884\u5904\u7406\u3001\u6dfb\u52a0\u9875\u9762\u6e32\u67d3\u9aa8\u67b6\u7b49\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u56e0\u6b64 Modern.js \u63d0\u4f9b\u4e86\u4e00\u79cd\u529f\u80fd\uff0c\u8ba9\u9879\u76ee\u53ef\u4ee5\u5728\u7ed9\u5b9a\u7684\u8303\u56f4\u5185\u6269\u5c55 Modern.js \u5185\u7f6e\u7684 Web Server\uff0c\u6765\u5b9e\u73b0\u76f8\u5e94\u7684\u9700\u6c42\u3002"}),"\n",(0,n.jsxs)(s.h2,{id:"\u521b\u5efa\u81ea\u5b9a\u4e49-web-server",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521b\u5efa\u81ea\u5b9a\u4e49-web-server",children:"#"}),"\u521b\u5efa\u81ea\u5b9a\u4e49 Web Server"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5728\u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c ",(0,n.jsx)(s.code,{children:"pnpm run new"})," \u547d\u4ee4\uff0c\u6309\u7167\u5982\u4e0b\u9009\u62e9\uff0c\u5f00\u542f\u300c\u81ea\u5b9a\u4e49 Web Serve\u300d\u529f\u80fd\uff1a"]}),"\n",(0,n.jsxs)(s.div,{className:"language-bash",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u521b\u5efa\u5de5\u7a0b\u5143\u7d20"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \u521b\u5efa\u5de5\u7a0b\u5143\u7d20 \u65b0\u5efa\u300c\u81ea\u5b9a\u4e49 Web Server\u300d\u6e90\u7801\u76ee\u5f55"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.p,{children:["\u6267\u884c\u547d\u4ee4\u540e\uff0c\u5728 ",(0,n.jsx)(s.code,{children:"modern.config.ts"})," \u4e2d\u6ce8\u518c Server \u63d2\u4ef6:"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" serverPlugin "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/plugin-server'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"serverPlugin"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.p,{children:["\u9879\u76ee\u76ee\u5f55\u4e0b\u4f1a\u65b0\u5efa ",(0,n.jsx)(s.code,{children:"server/index.ts"})," \u6587\u4ef6\uff0c\u81ea\u5b9a\u4e49\u903b\u8f91\u5728\u8fd9\u4e2a\u6587\u4ef6\u4e2d\u7f16\u5199\u3002"]}),"\n",(0,n.jsxs)(s.h2,{id:"\u4f7f\u7528-api-\u6269\u5c55-web-server",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4f7f\u7528-api-\u6269\u5c55-web-server",children:"#"}),"\u4f7f\u7528 API \u6269\u5c55 Web Server"]}),"\n",(0,n.jsxs)(s.p,{children:["Modern.js \u63d0\u4f9b\u4e86 ",(0,n.jsx)(s.strong,{children:"Hook"})," \u4e0e ",(0,n.jsx)(s.strong,{children:"Middleware"})," \u4e24\u7c7b API \u6765\u6269\u5c55 Web Server\u3002"]}),"\n",(0,n.jsxs)(s.h3,{id:"hook",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"}),"Hook"]}),"\n",(0,n.jsx)(s.p,{children:"Hook \u53ef\u4ee5\u63a7\u5236 Web Server \u5bf9\u8bf7\u6c42\u5904\u7406\u7684\u5185\u7f6e\u903b\u8f91\uff0c\u975e BFF \u8bf7\u6c42\u4f1a\u7ecf\u8fc7 Hook \u7684\u5904\u7406\u3002"}),"\n",(0,n.jsx)(s.p,{children:"Hook \u4e0d\u53ef\u4ee5\u4f7f\u7528\u8fd0\u884c\u65f6\u6846\u67b6\u62d3\u5c55\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u8be6\u7ec6 API \u53ef\u4ee5\u67e5\u770b ",(0,n.jsx)(s.a,{href:"/en/apis/app/runtime/web-server/hook.html",children:"Hook"}),"\u3002"]}),"\n",(0,n.jsxs)(s.h3,{id:"middleware",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#middleware",children:"#"}),"Middleware"]}),"\n",(0,n.jsx)(s.p,{children:"Middleware \u53ef\u4ee5\u4e3a Web Server \u6dfb\u52a0\u524d\u7f6e\u4e2d\u95f4\u4ef6\uff0c\u53ea\u6709 SSR \u8bf7\u6c42\u4f1a\u7ecf\u8fc7 Middleware \u7684\u5904\u7406\u3002"}),"\n",(0,n.jsx)(s.p,{children:"Middleware \u53ef\u4ee5\u4f7f\u7528\u8fd0\u884c\u65f6\u6846\u67b6\u62d3\u5c55\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u8be6\u7ec6 API \u53ef\u4ee5\u67e5\u770b ",(0,n.jsx)(s.a,{href:"/en/apis/app/runtime/web-server/middleware.html",children:"Hook"}),"\u3002"]}),"\n",(0,n.jsxs)(s.h2,{id:"\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684-web-server",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684-web-server",children:"#"}),"\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684 Web Server"]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive note",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsx)(s.p,{children:"\n\u656c\u8bf7\u671f\u5f85"})})]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}}}]);