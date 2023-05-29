(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_template-parameters_mdx"],{57870:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var r=t("9880"),a=t("23169");function s(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type DefaultParameters = {\n  meta: string; // corresponding to html.meta config\n  title: string; // corresponding to html.title config\n  mountId: string; // corresponding to html.mountId config\n  entryName: string; // entry name\n  assetPrefix: string; // corresponding to output.assetPrefix config\n  compilation: webpack.Compilation; // Compilation object corresponding to webpack\n  webpackConfig: config; // webpack config\n  // htmlWebpackPlugin built-in parameters\n  // See https://github.com/jantimon/html-webpack-plugin for details\n  htmlWebpackPlugin: {\n    tags: object;\n    files: object;\n    options: object;\n  };\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Define the parameters in the HTML template, corresponding to the ",(0,r.jsx)(n.code,{children:"templateParameters"})," config of ",(0,r.jsx)(n.a,{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-webpack-plugin"}),". You can use the config as an object or a function."]}),"\n",(0,r.jsx)(n.p,{children:"If it is an object, it will be merged with the default parameters. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    templateParameters: {\n      title: 'My App',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"If it is a function, the default parameters will be passed in, and you can return an object to override the default parameters. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    templateParameters: defaultParameters => {\n      console.log(defaultParameters.compilation);\n      console.log(defaultParameters.title);\n      return {\n        title: 'My App',\n      };\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["To use the ",(0,r.jsx)(n.code,{children:"foo"})," parameter in the HTML template, you can add the following config:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    templateParameters: {\n      foo: 'bar',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or you can use a function to dynamically generate the parameters:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    templateParameters: defaultParameters => {\n      return {\n        foo: 'bar',\n      };\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then you can use the ",(0,r.jsx)(n.code,{children:"foo"})," parameter in the HTML template by ",(0,r.jsx)(n.code,{children:"<%= foo %>"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<script>\n  window.foo = '<%= foo %>';\n</script>\n"})}),"\n",(0,r.jsx)(n.p,{children:"The compiled HTML is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<script>window.foo = 'bar'</script>\n"})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},25407:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return l},default:function(){return d}});var r=t("9880"),a=t("23169"),s=t.ir(t("57870")),i={sidebar_label:"templateParameters"},o="html.templateParameters",l=[];function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"htmltemplateparameters",children:["html.templateParameters",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltemplateparameters",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmltemplateparameters",target:"_blank",rel:"noopener noreferrer",children:"html.templateParameters"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(s.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);