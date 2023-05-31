(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_input_md"],{92495:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return d},default:function(){return h}});var t=r("9880"),s=r("23169"),i={sidebar_position:4},a="Input",d=[{text:"type",depth:2,id:"type"},{text:"title",depth:2,id:"title"},{text:"default",depth:2,id:"default"},{text:"enum",depth:2,id:"enum"},{text:"x-validator",depth:2,id:"x-validator"},{text:"x-reactions",depth:2,id:"x-reactions"},{text:"properties",depth:2,id:"properties"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",h2:"h2"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"input",children:["Input",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Generator plugin provides a way to interact with users through Input, which is defined using JSON Schema:"}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const schema = {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: 'Please select the programming language:',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["JSON Schema format is based on the open source ",(0,t.jsx)(n.a,{href:"https://formilyjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Formily"})," Schema format. The following are the supported fields:"]}),"\n",(0,t.jsxs)(n.h2,{id:"type",children:["type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Defines the type of the current schema. Currently supported types are ",(0,t.jsx)(n.code,{children:"string"}),", ",(0,t.jsx)(n.code,{children:"number"}),", and ",(0,t.jsx)(n.code,{children:"object"}),". ",(0,t.jsx)(n.code,{children:"string"})," type is used for string inputs and dropdown options. ",(0,t.jsx)(n.code,{children:"object"})," type is used for nesting schemas and needs to be used with the ",(0,t.jsx)(n.code,{children:"properties"})," attribute."]}),"\n",(0,t.jsxs)(n.h2,{id:"title",children:["title",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Defines the display name of the current schema."}),"\n",(0,t.jsxs)(n.h2,{id:"default",children:["default",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Defines the default value of the current schema."}),"\n",(0,t.jsxs)(n.h2,{id:"enum",children:["enum",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enum",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Defines the options when the current schema is a dropdown selection."}),"\n",(0,t.jsxs)(n.p,{children:["The sub-items support ",(0,t.jsx)(n.code,{children:"string"})," or ",(0,t.jsx)(n.code,{children:"{ label: string; value: string}"})," types. When the value and display value are the same in the dropdown options, ",(0,t.jsx)(n.code,{children:"string"})," can be used directly to define the options."]}),"\n",(0,t.jsxs)(n.p,{children:["When representing multiple selection options, set the ",(0,t.jsx)(n.code,{children:"default"})," field to ",(0,t.jsx)(n.code,{children:"[]"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"x-validator",children:["x-validator",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#x-validator",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Defines the validation rules for the current schema. When the schema is an input type, validation will be automatically performed after input completion."}),"\n",(0,t.jsxs)(n.p,{children:["The validation rules supported here are provided by ",(0,t.jsx)(n.a,{href:"https://formilyjs.org/zh-CN/guide/advanced/validate",target:"_blank",rel:"noopener noreferrer",children:"Formily"}),", for example, the maximum value is 5:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const schema = {\n  type: 'object',\n  properties: {\n    max_5: {\n      type: 'number',\n      title: 'Maximum value (>5 will cause an error)',\n      'x-validator': {\n        maximum: 5,\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"It also supports using validation functions directly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const schema = {\n  type: 'object',\n  properties: {\n    path: {\n      type: 'string',\n      title: 'Can only contain numbers and letters',\n      'x-validator': value => {\n        if (!/^[0-9a-zA-Z]*$/g.test(value)) {\n          return 'Incorrect format';\n        }\n        return '';\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"x-reactions",children:["x-reactions",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#x-reactions",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Use linkage between schemas. This is exactly the same as ",(0,t.jsx)(n.a,{href:"https://formilyjs.org/zh-CN/guide/advanced/linkages",target:"_blank",rel:"noopener noreferrer",children:"Formily linkage rules"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const schema = {\n  type: 'object',\n  properties: {\n    name: {\n      type: 'string',\n      title: 'Name',\n    },\n    path: {\n      type: 'string',\n      title: 'Path',\n      'x-reactions': [\n        {\n          dependencies: ['name'],\n          fulfill: {\n            state: {\n              value: '{{$deps[0]}}',\n            },\n          },\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"properties",children:["properties",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#properties",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Organize the structure of the current schema and define sub-forms. ",(0,t.jsx)(n.code,{children:"properties"})," is an object, where the ",(0,t.jsx)(n.code,{children:"key"})," is the schema keyword and the ",(0,t.jsx)(n.code,{children:"value"})," is a schema object as described above."]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);