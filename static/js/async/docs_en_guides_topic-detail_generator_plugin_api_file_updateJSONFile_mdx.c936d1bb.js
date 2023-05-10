(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_file_updateJSONFile_mdx"],{31615:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return s},title:function(){return t},toc:function(){return r},default:function(){return c}});var d=i("9880"),a=i("23169"),s={sidebar_position:6},t="updateJSONFile",r=[{text:"fileName",depth:2,id:"filename"},{text:"updateInfo",depth:2,id:"updateinfo"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2"},(0,a.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"updatejsonfile",children:["updateJSONFile",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatejsonfile",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Update the JSON file fields."}),"\n",(0,d.jsx)(n.p,{children:"This method is suitable for JSON file types, and can batch update field values in JSON files."}),"\n",(0,d.jsxs)(n.p,{children:["This method is available on the ",(0,d.jsx)(n.code,{children:"onForged"})," time to live API parameter."]}),"\n",(0,d.jsx)(n.p,{children:"Its type is defined as:"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"export type ForgedAPI = {\n  updateJSONFile: (\n    fileName: string,\n    updateInfo: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n"})})})}),"\n",(0,d.jsxs)(n.h2,{id:"filename",children:["fileName",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#filename",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"The filename or file path of the JSON file."}),"\n",(0,d.jsxs)(n.h2,{id:"updateinfo",children:["updateInfo",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updateinfo",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Field update information."}),"\n",(0,d.jsx)(n.p,{children:"This information is represented in Record form."}),"\n",(0,d.jsx)(n.p,{children:"For example, the name field needs to be updated:"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"api.updateJSONFile(file, {\n  name: 'new name',\n});\n"})})})}),"\n",(0,d.jsx)(n.p,{children:"Nested fields need to be updated:"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"api.updateJSONFile(file, {\n  'dependencies.name': 'new name',\n});\n"})})})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive warning",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:"Pay attention to the field name when updating the nested field. If it is not a total volume update, the nested key should also be written into the field name."}),"\n"]})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}}}]);