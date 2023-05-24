(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_hooks_config_upload_mdx"],{4986:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return t},toc:function(){return d},default:function(){return o}});var i=s("9880"),r=s("23169"),c={title:"upload/",sidebar_position:4},t="upload/",d=[{text:"Description",depth:2,id:"description"},{text:"Scene",depth:2,id:"scene"},{text:"Compression",depth:2,id:"compression"},{text:"More Usage",depth:2,id:"more-usage"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"upload/",children:["upload/",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upload/",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Static resource files in any format can be placed in the ",(0,i.jsx)(n.code,{children:"upload/"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"description",children:["Description",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In the development environment, the static resource files in this directory will be hosted in the '/upload' path. After building the application product, the files in this directory will be copied to the dist path."}),"\n",(0,i.jsx)(n.p,{children:"This file convention is mainly used for developers to use plugins to upload static resource files to the CDN."}),"\n",(0,i.jsxs)(n.h2,{id:"scene",children:["Scene",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#scene",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["For example, the SDK used by the project such as ",(0,i.jsx)(n.code,{children:"google-analysis.js"})," (usually requires http caching)."]}),"\n",(0,i.jsx)(n.p,{children:"Images, font files, generic CSS, etc."}),"\n",(0,i.jsxs)(n.h2,{id:"compression",children:["Compression",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compression",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["If the file is a ",(0,i.jsx)(n.code,{children:".js"})," file, it will be automatically compressed when the production environment is built."]}),"\n",(0,i.jsxs)(n.p,{children:["If the file ends with ",(0,i.jsx)(n.code,{children:".min.js"}),", it will not compression."]}),"\n",(0,i.jsxs)(n.h2,{id:"more-usage",children:["More Usage",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#more-usage",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In React components, this prefix can be added via ",(0,i.jsx)(n.a,{href:"/guides/basic-features/env-vars#asset_prefix",children:"built-in environment variables"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"export default () => {\n  return (\n    <img src={`${process.env.ASSET_PREFIX}/upload/banner.png`}></img>\n  );\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Whether in ",(0,i.jsx)(n.a,{href:"/guides/basic-features/html",children:"custom HTML"}),", or in any HTML file under ",(0,i.jsx)(n.a,{href:"/apis/app/hooks/config/public",children:"'config/public/'"}),", you can directly use the HTML tag to refer to the resources in the ",(0,i.jsx)(n.code,{children:"config/upload/"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script src="/upload/index.js"></script>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["if ",(0,i.jsx)(n.a,{href:"/configure/app/output/asset-prefix",children:(0,i.jsx)(n.code,{children:"output.assetPrefix"})})," is configured, add this prefix directly using template syntax:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script src="<%=assetPrefix %>/upload/index.js"></script>\n'})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["Modern.js does not support the use files under ",(0,i.jsx)(n.code,{children:"upload/"})," in ",(0,i.jsx)(n.code,{children:"config/public/*.css"})," via URL."]}),"\n"]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);