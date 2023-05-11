(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_basic_output-files_md"],{30688:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{frontmatter:function(){return r},title:function(){return d},toc:function(){return a},default:function(){return c}});var n=t("9880"),i=t("23169"),r={},d="Output Files",a=[{text:"Default Directory Structure",depth:2,id:"default-directory-structure"},{text:"Modify the Directory",depth:2,id:"modify-the-directory"},{text:"Static Assets",depth:2,id:"static-assets"},{text:"Node.js Output Directory",depth:2,id:"nodejs-output-directory"},{text:"Flatten the Directory",depth:2,id:"flatten-the-directory"},{text:"Not Written to Disk",depth:2,id:"not-written-to-disk"}];function o(e){var s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",pre:"pre",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"output-files",children:["Output Files",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#output-files",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"This chapter will introduces the directory structure of output files and how to control the output directory of different types of files."}),"\n",(0,n.jsxs)(s.h2,{id:"default-directory-structure",children:["Default Directory Structure",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#default-directory-structure",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["The following is a basic directory for output files. By default, the compiled files will be output in the ",(0,n.jsx)(s.code,{children:"dist"})," directory of current project."]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsx)(s.div,{className:"modern-code-content",children:(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-bash",children:"dist\n├── static\n│   ├── css\n│   │   ├── [name].[hash].css\n│   │   └── [name].[hash].css.map\n│   │\n│   └── js\n│       ├── [name].[hash].js\n│       ├── [name].[hash].js.LICENSE.txt\n│       └── [name].[hash].js.map\n│\n└── html\n    └── [name]\n        └── index.html\n"})})})}),"\n",(0,n.jsx)(s.p,{children:"The most common output files are HTML files, JS files, and CSS files:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["HTML files: default output to the ",(0,n.jsx)(s.code,{children:"html"})," directory."]}),"\n",(0,n.jsxs)(s.li,{children:["JS files: default output to ",(0,n.jsx)(s.code,{children:"static/js"})," directory,"]}),"\n",(0,n.jsxs)(s.li,{children:["CSS files: default output to the ",(0,n.jsx)(s.code,{children:"static/css"})," directory."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In addition, JS files and CSS files sometimes generate some related files:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["License files: contains open source license, which is output to the same level directory of the JS file, and adds ",(0,n.jsx)(s.code,{children:".LICENSE.txt"})," suffix."]}),"\n",(0,n.jsxs)(s.li,{children:["Source Map files: contains the source code mappings, which is output to the same level directory of JS files and CSS files, and adds a ",(0,n.jsx)(s.code,{children:".map"})," suffix."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["In the filename, ",(0,n.jsx)(s.code,{children:"[name]"})," represents the entry name corresponding to this file, such as ",(0,n.jsx)(s.code,{children:"index"}),", ",(0,n.jsx)(s.code,{children:"main"}),". ",(0,n.jsx)(s.code,{children:"[hash]"})," is the hash value generated based on the content of the file."]}),"\n",(0,n.jsxs)(s.h2,{id:"modify-the-directory",children:["Modify the Directory",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-directory",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Builder provides some configs to modify the directory or filename, you can:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Modify the filename through ",(0,n.jsx)(s.a,{href:"/en/api/config-output",children:"output.filename"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Modify the output path of through ",(0,n.jsx)(s.a,{href:"/en/api/config-output",children:"output.distPath"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Modify the license file through ",(0,n.jsx)(s.a,{href:"/en/api/config-output",children:"output.legalComments"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Remove Source Map file through ",(0,n.jsx)(s.a,{href:"/en/api/config-output",children:"output.disableSourceMap"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Remove the folder corresponding to the HTML files through ",(0,n.jsx)(s.a,{href:"/en/api/config-html",children:"html.disableHtmlFolder"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"static-assets",children:["Static Assets",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#static-assets",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["When you import static assets such as images, SVG, fonts, media, etc. in the code, they will also be output to the ",(0,n.jsx)(s.code,{children:"dist/static"})," directory, and automatically assigned to the corresponding subdirectories according to the file type:"]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsx)(s.div,{className:"modern-code-content",children:(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-bash",children:"dist\n└── static\n    ├── image\n    │   └── foo.[hash].png\n    │\n    ├── svg\n    │   └── bar.[hash].svg\n    │\n    ├── font\n    │   └── baz.[hash].woff2\n    │\n    └── media\n        └── qux.[hash].mp4\n"})})})}),"\n",(0,n.jsxs)(s.p,{children:["You can use the ",(0,n.jsx)(s.a,{href:"/en/api/config-output",children:"output.distPath"})," config to uniformly input these static assets into a directory, for example, output to the ",(0,n.jsx)(s.code,{children:"assets"})," directory:"]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsx)(s.div,{className:"modern-code-content",children:(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      image: 'assets',\n      svg: 'assets',\n      font: 'assets',\n      media: 'assets',\n    },\n  },\n};\n"})})})}),"\n",(0,n.jsx)(s.p,{children:"The above config produces the following directory structure:"}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsx)(s.div,{className:"modern-code-content",children:(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-bash",children:"dist\n└── assets\n    ├── foo.[hash].png\n    ├── bar.[hash].svg\n    ├── baz.[hash].woff2\n    └── qux.[hash].mp4\n"})})})}),"\n",(0,n.jsxs)(s.h2,{id:"nodejs-output-directory",children:["Node.js Output Directory",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs-output-directory",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["When the ",(0,n.jsx)(s.a,{href:"/guide/basic/build-target",children:"Build Target"})," of Builder contains ",(0,n.jsx)(s.code,{children:"'node'"}),", or you have enabled server-side features such as SSR in the upper framework, Builder will generate some output files for Node.js and output them to the ",(0,n.jsx)(s.code,{children:"bundles"})," directory:"]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsx)(s.div,{className:"modern-code-content",children:(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-bash",children:"dist\n├── bundles\n│   └── [name].js\n├── static\n└── html\n"})})})}),"\n",(0,n.jsx)(s.p,{children:"Node.js files usually only contain JS files, no HTML or CSS. Also, JS file names will not contain hash."}),"\n",(0,n.jsxs)(s.p,{children:["You can modify the output path of Node.js files through the ",(0,n.jsx)(s.a,{href:"/en/api/config-output",children:"output.distPath.server"})," config."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, output Node.js files to the ",(0,n.jsx)(s.code,{children:"server"})," directory:"]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsx)(s.div,{className:"modern-code-content",children:(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      server: 'server',\n    },\n  },\n};\n"})})})}),"\n",(0,n.jsxs)(s.h2,{id:"flatten-the-directory",children:["Flatten the Directory",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#flatten-the-directory",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Sometimes you don't want the dist directory to have too many levels, you can set the directory to an empty string to flatten the generated directory."}),"\n",(0,n.jsx)(s.p,{children:"See the example below:"}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsx)(s.div,{className:"modern-code-content",children:(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      js: '',\n      css: '',\n      html: '',\n    },\n    disableHtmlFolder: true,\n  },\n};\n"})})})}),"\n",(0,n.jsx)(s.p,{children:"The above config produces the following directory structure:"}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsx)(s.div,{className:"modern-code-content",children:(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-bash",children:"dist\n├── [name].[hash].css\n├── [name].[hash].css.map\n├── [name].[hash].js\n├── [name].[hash].js.map\n└── [name].html\n"})})})}),"\n",(0,n.jsxs)(s.h2,{id:"not-written-to-disk",children:["Not Written to Disk",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#not-written-to-disk",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"By default, Builder will write the generated files to disk, so developers can view the file content or configure proxy rules for static assets."}),"\n",(0,n.jsx)(s.p,{children:"In development, you can choose to keep the generated files in the Dev Server's memory to reduce the overhead of file operations."}),"\n",(0,n.jsxs)(s.p,{children:["Just set the ",(0,n.jsx)(s.code,{children:"dev.writeToDisk"})," config to ",(0,n.jsx)(s.code,{children:"false"}),":"]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsx)(s.div,{className:"modern-code-content",children:(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-ts",children:"export default {\n  dev: {\n    writeToDisk: false,\n  },\n};\n"})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}}}]);