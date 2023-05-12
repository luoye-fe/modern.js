(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_use_mdx"],{5259:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return s},title:function(){return a},toc:function(){return d},default:function(){return o}});var r=i("9880"),t=i("23169"),s={sidebar_position:2},a="How to use the generator plugin",d=[{text:"Classification",depth:2,id:"classification"},{text:"Type definition",depth:3,id:"type-definition"},{text:"Extended engineering",depth:4,id:"extended-engineering"},{text:"Create engineering scenes",depth:4,id:"create-engineering-scenes"},{text:"Execution timing",depth:3,id:"execution-timing"},{text:"Extended engineering",depth:4,id:"extended-engineering-1"},{text:"Create engineering scenes",depth:4,id:"create-engineering-scenes-1"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2",ol:"ol",li:"li",h3:"h3",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"how-to-use-the-generator-plugin",children:["How to use the generator plugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-use-the-generator-plugin",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@modern-js/create"})," provides the ",(0,r.jsx)(n.code,{children:"--plugin"})," parameter to declare the generator plugin used."]}),"\n",(0,r.jsx)(n.p,{children:"You can use the generator plugin directly by executing the following command:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create --plugin <pluginName>\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"The plugin parameter supports multiple declarations, which means that multiple generator plugins are used at the same time."}),"\n",(0,r.jsxs)(n.h2,{id:"classification",children:["Classification",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#classification",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"There are two types of generator plugins:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Extended engineering: directly customize the three major engineering provided by default."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create engineering scenes: Create corresponding engineering scenes based on the default three major engineering schemes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"type-definition",children:["Type definition",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type-definition",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The classification of the generator plugin is provided by the meta information in the ",(0,r.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"extended-engineering",children:["Extended engineering",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extended-engineering",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "meta": {\n    "extend": "mwa" // The three engineering is mwa, module, monorepo\n  }\n}\n'})})})}),"\n",(0,r.jsxs)(n.h4,{id:"create-engineering-scenes",children:["Create engineering scenes",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-engineering-scenes",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "meta": {\n    "key": "new_solution",\n    "name": "New Solution",\n    "type": "mwa" // In addition to the three major engineering solutions, the type here also supports the customize (custom) type\n  }\n}\n'})})})}),"\n",(0,r.jsxs)(n.h3,{id:"execution-timing",children:["Execution timing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#execution-timing",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The execution timing of different types of custom engineering solutions is different."}),"\n",(0,r.jsxs)(n.h4,{id:"extended-engineering-1",children:["Extended engineering",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extended-engineering-1",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The generator plugin of the extended engineering type will execute in sequence according to the declaration order of the plugin parameter after selecting the corresponding extended project scheme."}),"\n",(0,r.jsxs)(n.h4,{id:"create-engineering-scenes-1",children:["Create engineering scenes",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-engineering-scenes-1",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The generator plugin that create engineering scenes will have the option to select the scene after selecting the project solution type. The option list includes the current default project scenes and the project scenes defined by the plugin. If you select the corresponding scene, the corresponding generator will be executed plugin."})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);