(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_codesmith_run-in-js_mdx"],{1156:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return i},default:function(){return s}});var r=t("9880"),a=t("23169"),c={sidebar_position:4},o="Execute microgenerator with JS code",i=[{text:"install codesmith dependency",depth:2,id:"install-codesmith-dependency"},{text:"Create codesmith instance",depth:2,id:"create-codesmith-instance"},{text:"Call the forge method to execute the generator",depth:2,id:"call-the-forge-method-to-execute-the-generator"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"execute-microgenerator-with-js-code",children:["Execute microgenerator with JS code",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#execute-microgenerator-with-js-code",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"In addition to using the cli method to execute the micro generator, we inevitably need to execute the micro generator in the code. The following describes how to execute the micro generator in the js code."}),"\n",(0,r.jsxs)(n.h2,{id:"install-codesmith-dependency",children:["install codesmith dependency",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install-codesmith-dependency",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @modern-js/codesmith\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"create-codesmith-instance",children:["Create codesmith instance",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-codesmith-instance",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { CodeSmith, Logger } from '@modern-js/codesmith';\n\nconst smith = new CodeSmith({\n  debug: false, //Whether to enable debug mode, if true, the debug information in the generator will be displayed\n});\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"call-the-forge-method-to-execute-the-generator",children:["Call the forge method to execute the generator",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#call-the-forge-method-to-execute-the-generator",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type RunnerTask = Array<{\n  name: string;\n  config: Record<string, any>;\n}>;\n\nconst task: RunnerTask = [\n  {\n    name: 'generator', // generator npm package name\n    config: {}, //The default configuration performed by the generator\n  },\n];\n\nawait smith.forge({\n  tasks: task.map(runner => ({\n    generator: runner.name,\n    config: runner.config,\n  })),\n  pwd: '.', // generator implementation path\n});\n"})})})})]})}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);