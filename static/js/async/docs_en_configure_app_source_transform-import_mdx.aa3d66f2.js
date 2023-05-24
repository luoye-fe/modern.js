(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_transform-import_mdx"],{54919:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var s=r("9880"),i=r("23169");function t(e){var n=Object.assign({p:"p",a:"a",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre",h3:"h3",h4:"h4",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Used to import the code and style of the component library on demand, which is equivalent to ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The difference from ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"})," is that ",(0,s.jsx)(n.code,{children:"source.transformImport"})," is not coupled with Babel. The Builder will automatically identify whether the currently used tools is Babel, SWC or Rspack, and apply the corresponding on-demand import configuration."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Config = false | Array<{\n  libraryName: string;\n  libraryDirectory?: string;\n  style?: string | boolean;\n  styleLibraryDirectory?: string;\n  camelToDashComponentName?: boolean;\n  transformToDefaultImport?: boolean;\n  customName?: ((member: string) => string | undefined) | string;\n  customStyleName?: ((member: string) => string | undefined) | string;\n}>;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/antd",target:"_blank",rel:"noopener noreferrer",children:"antd component library"})," <= 4.x version is installed in the project, Builder will automatically add the corresponding on-demand import configuration. The default configuration is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  libraryName: 'antd',\n  libraryDirectory: target === 'node' ? 'lib' : 'es',\n  style: true,\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can manually set ",(0,s.jsx)(n.code,{children:"transformImport: false"})," to turn off the default behavior of transformImport."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, when you use ",(0,s.jsx)(n.code,{children:"externals"})," to avoid bundling antd, because ",(0,s.jsx)(n.code,{children:"transformImport"})," will convert the imported path of antd by default, the matching path changes and externals cannot take effect. At this time, you can set ",(0,s.jsx)(n.code,{children:"transformImport: false"})," to avoid this problem."]}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When using the above antd default configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  libraryName: 'antd',\n  libraryDirectory: 'es',\n  style: true,\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The source code is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { Button } from 'antd';\n"})}),"\n",(0,s.jsx)(n.p,{children:"It will be transformed into:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import Button from 'antd/es/button';\nimport 'antd/es/button/style';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"configuration",children:["Configuration",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"libraryname",children:["libraryName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#libraryname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The original import path that needs to be transformed."}),"\n",(0,s.jsxs)(n.h4,{id:"librarydirectory",children:["libraryDirectory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#librarydirectory",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"'lib'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Used to splice the transformed path, the splicing rule is ",(0,s.jsx)(n.code,{children:"${libraryName}/${libraryDirectory}/${member}"}),", where member is the imported member."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"style",children:["style",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#style",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Determines whether to import related styles. If it is ",(0,s.jsx)(n.code,{children:"true"}),", the path ",(0,s.jsx)(n.code,{children:"${libraryName}/${libraryDirectory}/${member}/style"})," will be imported. If it is ",(0,s.jsx)(n.code,{children:"false"})," or ",(0,s.jsx)(n.code,{children:"undefined"}),", the style will not be imported."]}),"\n",(0,s.jsxs)(n.p,{children:["When it is set to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\nimport 'foo/lib/button/style';\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"stylelibrarydirectory",children:["styleLibraryDirectory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylelibrarydirectory",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This configuration is used to splice the import path when importing styles. If this configuration is specified, the ",(0,s.jsx)(n.code,{children:"style"})," configuration item will be ignored. The spliced import path is ",(0,s.jsx)(n.code,{children:"${libraryName}/${styleLibraryDirectory}/${member}"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When it is set to ",(0,s.jsx)(n.code,{children:"styles"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\nimport 'foo/styles/button';\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"cameltodashcomponentname",children:["camelToDashComponentName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cameltodashcomponentname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether to convert camelCase imports to kebab-case."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { ButtonGroup } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// set to true:\nimport ButtonGroup from 'foo/button-group';\n// set to false:\nimport ButtonGroup from 'foo/ButtonGroup';\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"transformtodefaultimport",children:["transformToDefaultImport",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#transformtodefaultimport",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether to convert import statements to default imports."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// set to true:\nimport Button from 'foo/button';\n// set to false:\nimport { Button } from 'foo/button';\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"customname",children:["customName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"((member: string) => string | undefined) | string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"Note"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Function-type configurations can only be used in Webpack builds."}),"\n",(0,s.jsx)(n.li,{children:"Template-type configurations can only be used in Rspack builds or Webpack builds that use SWC."}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Customize the imported path after conversion. The input is the imported member. For example, configure it as ",(0,s.jsx)(n.code,{children:" (member) => `my-lib/${member}` "}),", which will convert ",(0,s.jsx)(n.code,{children:"import { foo } from 'bar'"})," to ",(0,s.jsx)(n.code,{children:"import foo from 'my-lib/foo'"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When using Rspack to build, function configurations cannot be used, but you can use ",(0,s.jsx)(n.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"handlebars"})," template strings. For the above function configuration, you can use the following template instead of ",(0,s.jsx)(n.code,{children:"my-lib/{{ member }}"}),", or use some built-in helper methods, such as ",(0,s.jsx)(n.code,{children:"my-lib/{{ kebabCase member }}"})," to convert it to kebab-case format. In addition to kebabCase, there are also camelCase, snakeCase, upperCase, and lowerCase that can be used."]}),"\n",(0,s.jsxs)(n.h4,{id:"customstylename",children:["customStyleName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customstylename",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"((member: string) => string | undefined) | string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"Note"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Function-type configurations can only be used in Webpack builds."}),"\n",(0,s.jsx)(n.li,{children:"Template-type configurations can only be used in Rspack builds or Webpack builds that use SWC."}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Customize the imported style path after conversion. The input is the imported member. For example, configure it as ",(0,s.jsx)(n.code,{children:" (member) => `my-lib/${member}` "}),", which will convert ",(0,s.jsx)(n.code,{children:"import { foo } from 'bar'"})," to ",(0,s.jsx)(n.code,{children:"import foo from 'my-lib/foo'"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When using Rspack to build, function configurations cannot be used, but you can use ",(0,s.jsx)(n.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"handlebars"})," template strings. For the above function configuration, you can use the following template instead of ",(0,s.jsx)(n.code,{children:"my-lib/{{ member }}"}),", or use some built-in helper methods, such as ",(0,s.jsx)(n.code,{children:"my-lib/{{ kebabCase member }}"})," to convert it to kebab-case format. In addition to kebabCase, there are also camelCase, snakeCase, upperCase, and lowerCase that can be used."]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}},28833:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},title:function(){return l},toc:function(){return a},default:function(){return d}});var s=r("9880"),i=r("23169"),t=r.ir(r("54919")),o={sidebar_label:"transformImport"},l="source.transformImport",a=[];function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourcetransformimport",children:["source.transformImport",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcetransformimport",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcetransformimport",target:"_blank",rel:"noopener noreferrer",children:"source.transformImport"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(t.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);