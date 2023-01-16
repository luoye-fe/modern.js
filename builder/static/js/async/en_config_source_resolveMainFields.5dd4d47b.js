"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[1743],{16240:function(s,e,l){l.r(e),l.d(e,{content:function(){return o},frontmatter:function(){return r},toc:function(){return c}});var n=l(39980);const r=void 0,c=[{id:"example",text:"Example",depth:4},{id:"set-according-to-targets",text:"Set according to Targets",depth:4}],o="\"- Type:\\n\\n```ts\\ntype Fields = (string | string[])[];\\n\\ntype ResolveMainFields = Fields | Record<BuilderTarget, Fields>;\\n```\\n\\n- Default: `undefined`\\n\\nThis config will determine which field of `package.json` you use to import the `npm` module. Same as the [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolvemainfields) config of webpack.\\n\\n#### Example\\n\\n```js\\nexport default {\\n  source: {\\n    resolveMainFields: ['main', 'browser', 'exports'],\\n  },\\n};\\n```\\n\\n#### Set according to Targets\\n\\nWhen you build multiple targets at the same time, you can set different mainFields for different targets. At this point, you need to set `resolveMainFields` to an object whose key is the corresponding build target.\\n\\nFor example to set different mainFields for `web` and `node`:\\n\\n```js\\nexport default {\\n  output: {\\n    source: {\\n      resolveMainFields: {\\n        web: ['main', 'browser', 'exports'],\\n        node: ['main', 'node', 'exports'],\\n      },\\n    },\\n  },\\n};\\n```\\n\"";function a(s){const e=Object.assign({ul:"ul",li:"li",div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p",a:"a",h4:"h4"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Type:"}),"\n"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"type"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"Fields"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"|"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"[])[]"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"type"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"ResolveMainFields"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"Fields"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"|"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"Record"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"BuilderTarget"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"Fields"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:">"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Default: ",(0,n.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["This config will determine which field of ",(0,n.jsx)(e.code,{children:"package.json"})," you use to import the ",(0,n.jsx)(e.code,{children:"npm"})," module. Same as the ",(0,n.jsx)(e.a,{href:"https://webpack.js.org/configuration/resolve/#resolvemainfields-3",target:"_blank",rel:"nofollow",children:"resolve.mainFields"})," config of webpack."]}),"\n",(0,n.jsxs)(e.h4,{id:"example",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"source"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"resolveMainFields"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"main"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"browser"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"exports"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h4,{id:"set-according-to-targets",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#set-according-to-targets",children:"#"}),"Set according to Targets"]}),"\n",(0,n.jsxs)(e.p,{children:["When you build multiple targets at the same time, you can set different mainFields for different targets. At this point, you need to set ",(0,n.jsx)(e.code,{children:"resolveMainFields"})," to an object whose key is the corresponding build target."]}),"\n",(0,n.jsxs)(e.p,{children:["For example to set different mainFields for ",(0,n.jsx)(e.code,{children:"web"})," and ",(0,n.jsx)(e.code,{children:"node"}),":"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"output"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"source"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"resolveMainFields"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"web"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"main"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"browser"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"exports"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"node"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"main"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"node"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"exports"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(a,s)})):a(s)}}}]);