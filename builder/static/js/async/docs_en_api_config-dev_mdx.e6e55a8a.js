(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_api_config-dev_mdx"],{50211:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return u},title:function(){return j},toc:function(){return x},default:function(){return g}});var r=s("9880"),t=s("23169"),d=s.ir(s("73825")),c=s.ir(s("56494")),a=s.ir(s("10658")),i=s.ir(s("12411")),l=s.ir(s("72894")),o=s.ir(s("35962")),h=s.ir(s("15475")),p=s.ir(s("18742")),u={extractApiHeaders:[2]},j="Dev Config",x=[{text:"dev.assetPrefix",depth:2,id:"devassetprefix"},{text:"dev.beforeStartUrl",depth:2,id:"devbeforestarturl"},{text:"dev.hmr",depth:2,id:"devhmr"},{text:"dev.host",depth:2,id:"devhost"},{text:"dev.https",depth:2,id:"devhttps"},{text:"dev.port",depth:2,id:"devport"},{text:"dev.progressBar",depth:2,id:"devprogressbar"},{text:"dev.startUrl",depth:2,id:"devstarturl"}];function m(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"dev-config",children:["Dev Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-config",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"This section describes some dev configurations in Modern.js Builder."}),"\n",(0,r.jsxs)(n.h2,{id:"devassetprefix",children:["dev.assetPrefix",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devassetprefix",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"devbeforestarturl",children:["dev.beforeStartUrl",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devbeforestarturl",children:"#"})]}),"\n","\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"devhmr",children:["dev.hmr",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devhmr",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"devhost",children:["dev.host",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devhost",children:"#"})]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"devhttps",children:["dev.https",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devhttps",children:"#"})]}),"\n","\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"devport",children:["dev.port",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devport",children:"#"})]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"devprogressbar",children:["dev.progressBar",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devprogressbar",children:"#"})]}),"\n","\n",(0,r.jsx)(h.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"devstarturl",children:["dev.startUrl",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devstarturl",children:"#"})]}),"\n","\n",(0,r.jsx)(p.default,{})]})}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}},73825:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("9880"),t=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h4:"h4",div:"div",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean | string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"'/'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Set the URL prefix of static assets in the development environment, similar to the ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," config of webpack."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"assetPrefix"})," will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you'll receive 404 errors while loading these resources."]}),"\n",(0,r.jsxs)(n.p,{children:["This config is only used in the development environment. In the production environment, please use the ",(0,r.jsx)(n.code,{children:"output.assetPrefix"})," to set the URL prefix."]}),"\n",(0,r.jsxs)(n.h4,{id:"boolean-type",children:["Boolean Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"assetPrefix"})," is set to ",(0,r.jsx)(n.code,{children:"true"}),", the URL prefix will be ",(0,r.jsx)(n.code,{children:"http://localhost:port/"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: true,\n  },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"The script URL will be:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:'<script defer src="http://localhost:8080/static/js/main.js"></script>\n'})})})}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"assetPrefix"})," is set to ",(0,r.jsx)(n.code,{children:"false"})," or not set, ",(0,r.jsx)(n.code,{children:"/"})," is used as the default value."]}),"\n",(0,r.jsxs)(n.h4,{id:"string-type",children:["String type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When the value of ",(0,r.jsx)(n.code,{children:"assetPrefix"})," is ",(0,r.jsx)(n.code,{children:"string"})," type, the string will be used as the URL prefix:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: 'http://example.com/assets/',\n  },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"The script URL will be:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:'<script defer src="http://example.com/assets/static/js/main.js"></script>\n'})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},56494:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("9880"),t=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"() => Promise<void> | void"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"dev.beforeStartUrl"})," is used to execute a callback function before opening the ",(0,r.jsx)(n.code,{children:"startUrl"}),", this config needs to be used together with ",(0,r.jsx)(n.code,{children:"dev.startUrl"}),"."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    startUrl: true,\n    beforeStartUrl: async () => {\n      await doSomeThing();\n    },\n  },\n};\n"})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},10658:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("9880"),t=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Whether to enable Hot Module Replacement."}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"hmr"})," is set to ",(0,r.jsx)(n.code,{children:"false"}),", the HMR and react-refresh will no longer work."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    hmr: false,\n  },\n};\n"})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},12411:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("9880"),t=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"0.0.0.0"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Specify the host that the dev server listens to."}),"\n",(0,r.jsxs)(n.p,{children:["By default, the dev server will listen to ",(0,r.jsx)(n.code,{children:"0.0.0.0"}),", which means listening to all network interfaces, including ",(0,r.jsx)(n.code,{children:"localhost"})," and public network addresses."]}),"\n",(0,r.jsxs)(n.p,{children:["If you want the dev server to listen only on ",(0,r.jsx)(n.code,{children:"localhost"}),", you can set it to:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    host: 'localhost',\n  },\n};\n"})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},72894:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("9880"),t=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre",h4:"h4",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"After configuring this option, you can enable HTTPS Dev Server, and disabling the HTTP Dev Server."}),"\n",(0,r.jsx)(n.p,{children:"HTTP:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"  > Local: http://localhost:8080/\n  > Network: http://192.168.0.1:8080/\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"HTTPS:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"  > Local: https://localhost:8080/\n  > Network: https://192.168.0.1:8080/\n"})})})}),"\n",(0,r.jsxs)(n.h4,{id:"automatically-generate-certificates",children:["Automatically generate certificates",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#automatically-generate-certificates",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can directly set ",(0,r.jsx)(n.code,{children:"https"})," to ",(0,r.jsx)(n.code,{children:"true"}),", Builder will automatically generate the HTTPS certificate based on ",(0,r.jsx)(n.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When using this method, you need to manually install the ",(0,r.jsx)(n.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"})," dependency in your project:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install devcert@1.2.2 -D\n\n#yarn\nyarn add devcert@1.2.2 -D\n\n#pnpm\npnpm add devcert@1.2.2 -D\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["Then configure ",(0,r.jsx)(n.code,{children:"dev.https"})," to ",(0,r.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    https: true,\n  },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"The devcert has some limitations, it does not currently support IP addresses yet."}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["The https proxy automatically installs the certificate and needs root authority, please enter the password according to the prompt.",(0,r.jsx)(n.strong,{children:"The password is only used to trust the certificate, and will not be leaked or be used elsewhere"}),".\n"]})})]}),"\n",(0,r.jsxs)(n.h4,{id:"manually-set-the-certificate",children:["Manually set the certificate",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manually-set-the-certificate",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can also manually pass in the certificate and the private key required in the ",(0,r.jsx)(n.code,{children:"dev.https"})," option. This parameter will be directly passed to the createServer method of the https module in Node.js."]}),"\n",(0,r.jsxs)(n.p,{children:["For details, please refer to ",(0,r.jsx)(n.a,{href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener",target:"_blank",rel:"noopener noreferrer",children:"https.createServer"}),"."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import fs from 'fs';\n\nexport default {\n  dev: {\n    https: {\n      key: fs.readFileSync('certificates/private.pem'),\n      cert: fs.readFileSync('certificates/public.pem'),\n    },\n  },\n};\n"})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},35962:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("9880"),t=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"8080"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Specify a port number for Dev Server to listen."}),"\n",(0,r.jsxs)(n.p,{children:["By default, Dev Server listens on port ",(0,r.jsx)(n.code,{children:"8080"})," and automatically increments the port number when the port is occupied."]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Set the port to ",(0,r.jsx)(n.code,{children:"3000"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    port: 3000,\n  },\n};\n"})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},15475:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("9880"),t=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",pre:"pre",code:"code",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ProgressBar =\n  | boolean\n  | {\n      id?: string;\n    };\n"})})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Whether to display progress bar during compilation."}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    progressBar: false,\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["If you need to modify the text displayed on the left side of the progress bar, you can set the ",(0,r.jsx)(n.code,{children:"id"})," option:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    progressBar: {\n      id: 'Some Text',\n    },\n  },\n};\n"})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},18742:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("9880"),t=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre",h3:"h3",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean | string | string[] | undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"dev.startUrl"})," is used to set the URL of the page that automatically opens in the browser when Dev Server starts."]}),"\n",(0,r.jsx)(n.p,{children:"By default, no page will be opened."}),"\n",(0,r.jsx)(n.p,{children:"You can set it to the following values:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    // Open the project's default preview page, equivalent to `http://localhost:<port>`\n    startUrl: true,\n    // Open the specified page\n    startUrl: 'http://localhost:8080',\n    // Open multiple pages\n    startUrl: ['http://localhost:8080', 'http://localhost:8080/about'],\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"port-placeholder",children:["Port placeholder",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#port-placeholder",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Since the port number may change, you can use the ",(0,r.jsx)(n.code,{children:"<port>"})," placeholder to refer to the current port number, and Builder will automatically replace the placeholder with the actual listening port number."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    startUrl: 'http://localhost:<port>/home',\n  },\n};\n"})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);