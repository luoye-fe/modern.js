(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_structure_mdx"],{27194:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return i},toc:function(){return c},default:function(){return o}});var t=r("9880"),a=r("23169"),s={sidebar_position:2},i="微生成器的组成",c=[{text:"package.json",depth:2,id:"packagejson"},{text:"入口文件",depth:2,id:"入口文件"},{text:"context",depth:3,id:"context"},{text:"generator",depth:3,id:"generator"},{text:"Template 文件",depth:2,id:"template-文件"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"微生成器的组成",children:["微生成器的组成",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#微生成器的组成",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"一个微生成器项目为一个模块项目或者一个 Npm 包，包中包含几个基本部分："}),"\n",(0,t.jsxs)(n.h2,{id:"packagejson",children:["package.json",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"npm 包描述信息，包含 name、version、main 等字段。"}),"\n",(0,t.jsxs)(n.h2,{id:"入口文件",children:["入口文件",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#入口文件",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"上述 main 字段对应的 js 文件。文件为默认导出一个生成器函数，函数格式如下："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default async (\n  context: GeneratorContext,\n  generator: GeneratorCore,\n) => {};\n"})}),"\n",(0,t.jsx)(n.p,{children:"该函数参数为 context 和 generator："}),"\n",(0,t.jsxs)(n.h3,{id:"context",children:["context",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#context",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"context 提供 codesmith 运行时维护的上下文信息。其类型定义为："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface GeneratorContext {\n  materials: Record<string, FsMaterial>; // 资源\n  config: Record<string, any>; // 用户 config 配置\n  data?: Record<string, any>; // 用户 data 配置\n  current: { material: FsMaterial } | null; //  当前生成器运行可获取的文件资源\n  [key: string]: any; // 其他补充字段\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"materials 是 codesmith 的抽象文件系统，维护这生成器名称和可操作文件的映射关系。"}),"\n",(0,t.jsx)(n.p,{children:"materials 中还维护这一个 default 的映射关系，用于维护当前生成器执行目录的资源信息，通过该字段可以对目标项目资源进行操作。"}),"\n",(0,t.jsxs)(n.p,{children:["例如当需要修改当前项目的 ",(0,t.jsx)(n.code,{children:"package.json"})," 中的字段:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const resource = context.materials.default.get(\n  path.join(appDir, 'package.json'),\n);\n"})}),"\n",(0,t.jsx)(n.p,{children:"将获取到的 resource 传递给 codesmith 提供的 JSON API 即可实现 json 操作。"}),"\n",(0,t.jsxs)(n.p,{children:["GeneratorContext 的 current 字段上维护这当前运行的生成器文件资源，可以通过 ",(0,t.jsx)(n.code,{children:"current.material"})," 获取到当前的 ",(0,t.jsx)(n.code,{children:"FsMaterial"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"FsMaterial 中提供了 get 方法用于获取资源文件并将资源文件传给生成器支持的 API 即可对模板文件进行处理。"}),"\n",(0,t.jsx)(n.p,{children:"例如："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const resourceMap = await material.find('templates/**/*');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["通过上述方式可以获取到生成器中符合 ",(0,t.jsx)(n.code,{children:"templates/**/*"})," 规则的所有模板文件，遍历该对象即可对资源文件进行操作。"]}),"\n",(0,t.jsxs)(n.h3,{id:"generator",children:["generator",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#generator",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"generator 提供 codesmith 运行时的函数方法。其类型定义为："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface GeneratorCore {\n    logger: Logger; // log 函数，支持 info、warning、debug、error、verbose、stream\n    outputPath: string; // 输出文件路径\n    output: {\n        fs: (file: string | number, data: any, options?: string | fs.WriteFileOptions | undefined) => Promise<void>\n    }; // 写文件方法\n    runSubGenerator: (subGenerator: string, relativePwdPath?: string | undefined, config?: Record<string, any> | undefined): Promise<void> // 运行子生成器\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["其中 outputPath 和 context 中的 ",(0,t.jsx)(n.code,{children:"materials.default"})," 指向相同的目录，outputPath 用于直接计算目标路径并操作，",(0,t.jsx)(n.code,{children:"materials.default"})," 用于获取资源文件。"]}),"\n",(0,t.jsx)(n.p,{children:"runSubGenerator 提供了在一个微生成器中去运行其他微生成器的方法，该方法将自动更新和维护新的 context 上下文信息。"}),"\n",(0,t.jsxs)(n.h2,{id:"template-文件",children:["Template 文件",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#template-文件",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"生成器模板文件。"}),"\n",(0,t.jsx)(n.p,{children:"推荐在项目根目录创建一个 templates 目录，用于维护该微生成器的模板文件，微生成器执行过程中只能使用自身的模板文件，对于需要共用的模板文件，建议通过共用子生成器实现。"})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);