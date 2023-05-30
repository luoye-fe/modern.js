(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_hooks_config_upload_mdx"],{70070:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return c},title:function(){return o},toc:function(){return d},default:function(){return a}});var i=n("9880"),r=n("23169"),c={title:"upload/",sidebar_position:4},o="upload/",d=[{text:"Description",depth:2,id:"description"},{text:"Scenarios",depth:2,id:"scenarios"},{text:"Code Compression",depth:2,id:"code-compression"},{text:"More Usage",depth:2,id:"more-usage"}];function t(e){var s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"upload/",children:["upload/",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#upload/",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Any static resource files can be placed in the ",(0,i.jsx)(s.code,{children:"upload/"})," directory."]}),"\n",(0,i.jsxs)(s.h2,{id:"description",children:["Description",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["In the development environment, the static resource files in this directory will be hosted under the ",(0,i.jsx)(s.code,{children:"/upload"})," path. After building the application, the files in this directory will be copied to the dist directory."]}),"\n",(0,i.jsx)(s.p,{children:"This file convention is mainly used for developers to use plugins to proactively upload static resource files to the CDN."}),"\n",(0,i.jsxs)(s.h2,{id:"scenarios",children:["Scenarios",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#scenarios",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["For example, SDKs for project use only, such as ",(0,i.jsx)(s.code,{children:"google-analysis.js"})," (usually requires HTTP caching)."]}),"\n",(0,i.jsx)(s.p,{children:"Pictures, font files, common CSS, etc."}),"\n",(0,i.jsxs)(s.h2,{id:"code-compression",children:["Code Compression",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#code-compression",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["If the file in the directory is a ",(0,i.jsx)(s.code,{children:".js"})," file, it will be automatically compressed during production environment construction."]}),"\n",(0,i.jsxs)(s.p,{children:["If the file ends with ",(0,i.jsx)(s.code,{children:".min.js"}),", it will not be compressed."]}),"\n",(0,i.jsxs)(s.h2,{id:"more-usage",children:["More Usage",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#more-usage",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["In React components, you can add this prefix through ",(0,i.jsx)(s.a,{href:"/guides/basic-features/env-vars#asset_prefix",children:"Environment Variables"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"export default () => {\n  return (\n    <img src={`${process.env.ASSET_PREFIX}/upload/banner.png`}></img>\n  );\n};\n"})}),"\n",(0,i.jsxs)(s.p,{children:["In addition, whether it is in ",(0,i.jsx)(s.a,{href:"/guides/basic-features/html",children:"Custom HTML"})," or any HTML file under ",(0,i.jsx)(s.a,{href:"/apis/app/hooks/config/public",children:(0,i.jsx)(s.code,{children:"config/public/"})}),", you can directly use HTML tags to reference resources in the ",(0,i.jsx)(s.code,{children:"config/upload/"})," directory:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<script src="/upload/index.js"></script>\n'})}),"\n",(0,i.jsxs)(s.p,{children:["If you set the ",(0,i.jsx)(s.a,{href:"/configure/app/dev/asset-prefix",children:(0,i.jsx)(s.code,{children:"dev.assetPrefix"})})," or ",(0,i.jsx)(s.a,{href:"/configure/app/output/asset-prefix",children:(0,i.jsx)(s.code,{children:"output.assetPrefix"})})," prefix, you can also use template syntax to add the prefix directly:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<script src="<%=assetPrefix %>/upload/index.js"></script>\n'})}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive info",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(s.div,{className:"modern-directive-content",children:[(0,i.jsxs)(s.p,{children:["Modern.js does not support using files under ",(0,i.jsx)(s.code,{children:"config/upload/"})," through URLs in ",(0,i.jsx)(s.code,{children:"config/public/*.css"})," (such as background-image)."]}),"\n"]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);