(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_basic-features_css_mdx"],{1519:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return d},default:function(){return l}});var r=s("9880"),i=s("23169"),o={sidebar_position:2},t="CSS Solutions",d=[{text:"Using Less, Sass and Stylus",depth:2,id:"using-less,-sass-and-stylus"},{text:"Using PostCSS",depth:2,id:"using-postcss"},{text:"Using CSS Modules",depth:2,id:"using-css-modules"},{text:"Using CSS-in-JS",depth:2,id:"using-css-in-js"},{text:"Using Tailwind CSS",depth:2,id:"using-tailwind-css"},{text:"Tailwind CSS version",depth:3,id:"tailwind-css-version"},{text:"Browser Compatibility",depth:3,id:"browser-compatibility"},{text:"Theme config",depth:3,id:"theme-config"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",pre:"pre",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"css-solutions",children:["CSS Solutions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#css-solutions",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js has built-in multiple CSS solutions, including Less / Sass / Stylus preprocessor, PostCSS, CSS Modules, CSS-in-JS and Tailwind CSS."}),"\n",(0,r.jsxs)(n.h2,{id:"using-less,-sass-and-stylus",children:["Using Less, Sass and Stylus",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-less,-sass-and-stylus",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js has built-in community popular CSS preprocessors such as Less, Sass."}),"\n",(0,r.jsxs)(n.p,{children:["By default, you don't need to configure anything for Less and Sass. If you need to customize loader config, you can configure ",(0,r.jsx)(n.a,{href:"/configure/app/tools/less",children:"tools.less"}),", ",(0,r.jsx)(n.a,{href:"/configure/app/tools/sass",children:"tools.sass"})," to set it up."]}),"\n",(0,r.jsxs)(n.p,{children:["You can also use Stylus in Modern.js, just install the Stylus plugin provided by Modern.js Builder, please refer to ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/plugins/plugin-stylus.html",target:"_blank",rel:"noopener noreferrer",children:"Stylus Plugin"})," for usage."]}),"\n",(0,r.jsxs)(n.h2,{id:"using-postcss",children:["Using PostCSS",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-postcss",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js has built-in ",(0,r.jsx)(n.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"})," to transform the CSS code."]}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/basic/css-usage.html#using-postcss",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - Using PostCSS"})," for detailed usage."]}),"\n",(0,r.jsxs)(n.h2,{id:"using-css-modules",children:["Using CSS Modules",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-modules",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Please read the ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/basic/css-modules.html",target:"_blank",rel:"noopener noreferrer",children:"Using CSS Modules"})," chapter for a complete usage of CSS Modules."]}),"\n",(0,r.jsxs)(n.h2,{id:"using-css-in-js",children:["Using CSS-in-JS",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-in-js",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"CSS-in-JS is a technology that can write CSS styles in JS files."}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js integrates the CSS-in-JS library ",(0,r.jsx)(n.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components"})," commonly used in the community, which uses the new feature of JavaScript ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates",target:"_blank",rel:"noopener noreferrer",children:"Tagged template"})," to write CSS styles for components. You can use the ",(0,r.jsx)(n.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components"})," API directly from ",(0,r.jsx)(n.code,{children:"@modern-js/runtime/styled"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When you need to write a ",(0,r.jsx)(n.code,{children:"div"})," component with an internal font in red, you can do the following implementation:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import styled from '@modern-js/runtime/styled';\n\nconst RedDiv = styled.div`\n  color: red;\n`;\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["When you need to dynamically set the component style according to the ",(0,r.jsx)(n.code,{children:"props"})," of the component, for example, when the attribute ",(0,r.jsx)(n.code,{children:"primary"})," of ",(0,r.jsx)(n.code,{children:"props"})," is ",(0,r.jsx)(n.code,{children:"true"}),", the color of the button is white, and otherwise it is red. The implementation code is as follows:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import styled from '@modern-js/runtime/styled';\n\nconst Button = styled.button`\n  color: ${props => (props.primary ? 'white' : 'red')};\n  font-size: 1em;\n`;\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["For more usage of styled-components, please refer to [",(0,r.jsx)(n.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components official website"})," ]."]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js uses the Babel plugin ",(0,r.jsx)(n.a,{href:"https://github.com/styled-components/babel-plugin-styled-components",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-styled-components"})," internally, and the plugin can be configured through ",(0,r.jsx)(n.a,{href:"/configure/app/tools/styled-components",children:"tools.styledComponents"}),"."]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["If you need to use ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/styled-jsx",target:"_blank",rel:"noopener noreferrer",children:"styled-jsx"}),", ",(0,r.jsx)(n.a,{href:"https://emotion.sh/",target:"_blank",rel:"noopener noreferrer",children:"Emotion"})," and other CSS-in-JS libraries, you need to install the dependency of the corresponding library first. For specific usage, please refer to the official website of the corresponding library.\n"]})})]}),"\n",(0,r.jsxs)(n.h2,{id:"using-tailwind-css",children:["Using Tailwind CSS",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-tailwind-css",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," is a CSS framework and design system based on Utility Class, which can quickly add common styles to components, and support flexible extension of theme styles. To use ",(0,r.jsx)(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," in the Modern.js, just execute ",(0,r.jsx)(n.code,{children:"pnpm run new"})," in the project root directory and turn it on."]}),"\n",(0,r.jsx)(n.p,{children:"Choose as follows:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"? Action: Enable features\n? Enable features: Enable Tailwind CSS\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["When using, add the following code to the root component of the entry (such as ",(0,r.jsx)(n.code,{children:"src/App.jsx"}),"):"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"You can then use the Utility Class provided by Tailwind CSS in each component:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-tsx",children:'const App = () => (\n  <div className="h-12 w-48">\n    <p className="text-xl font-medium text-black">hello world</p>\n  </div>\n);\n'})})})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"Additional"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["According to different needs, you can optionally import the CSS files provided by Tailwind CSS. Since the use of ",(0,r.jsx)(n.code,{children:"@taiwind"})," is equivalent to directly importing CSS files, you can refer to the content in the annotate in the ",(0,r.jsxs)(n.a,{href:"https://tailwindcss.com/docs/functions-and-directives#tailwind",target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)(n.code,{children:"@tailwind"})," usage"]})," document for the purpose of the CSS files provided by Tailwind CSS."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"tailwind-css-version",children:["Tailwind CSS version",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css-version",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js supports both Tailwind CSS v2 and v3. The framework will recognize the version of ",(0,r.jsx)(n.code,{children:"tailwindcss"})," in the project ",(0,r.jsx)(n.code,{children:"package.json"})," and apply the corresponding configuration. By default, we install Tailwind CSS v3 for you."]}),"\n",(0,r.jsx)(n.p,{children:"If your project is still using Tailwind CSS v2, we recommend that you upgrade to v3 to support JIT and other capabilities. For the differences between Tailwind CSS v2 and v3 versions, please refer to the following articles:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://tailwindcss.com/blog/tailwindcss-v3",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v3.0"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://tailwindcss.com/docs/upgrade-guide",target:"_blank",rel:"noopener noreferrer",children:"Upgrade Guide"})}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"browser-compatibility",children:["Browser Compatibility",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#browser-compatibility",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Both Tailwind CSS v2 and v3 do not support IE 11 browsers. For background, please refer to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://tailwindcss.com/docs/browser-support",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v3 - Browser Support"}),"."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://v2.tailwindcss.com/docs/browser-support",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v2 - Browser Support"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you use Tailwind CSS on IE 11 browser, some styles may not be available, please pay attention."}),"\n",(0,r.jsxs)(n.h3,{id:"theme-config",children:["Theme config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#theme-config",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When you need to customize the ",(0,r.jsx)(n.a,{href:"https://tailwindcss.com/docs/theme",target:"_blank",rel:"noopener noreferrer",children:"theme"})," configuration of Tailwind CSS, you can modify it in the configuration ",(0,r.jsx)(n.a,{href:"/configure/app/source/design-system",children:(0,r.jsx)(n.code,{children:"source.designSystem"})}),", for example, add a color theme ",(0,r.jsx)(n.code,{children:"primary"}),":"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    designSystem: {\n      extend: {\n        colors: {\n          primary: '#5c6ac4',\n        },\n      },\n    },\n  },\n});\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["When you need special configuration for Tailwind CSS other than ",(0,r.jsx)(n.a,{href:"https://tailwindcss.com/docs/theme",target:"_blank",rel:"noopener noreferrer",children:"theme"}),", you can configure it in ",(0,r.jsx)(n.a,{href:"/configure/app/tools/tailwindcss",children:(0,r.jsx)(n.code,{children:"tools.tailwindcss"})}),", for example setting ",(0,r.jsx)(n.code,{children:"variants"}),":"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  tools: {\n    tailwindcss: {\n      variants: {\n        extend: {\n          backgroundColor: ['active'],\n        },\n      },\n    },\n  },\n});\n"})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["When configuring Tailwind CSS for a project, the combination of the two configurations ",(0,r.jsx)(n.a,{href:"/configure/app/source/design-system",children:"source.designSystem"})," and ",(0,r.jsx)(n.a,{href:"/configure/app/tools/tailwindcss",children:"tools.tailwindcss"})," is equivalent to a separate configuration ",(0,r.jsx)(n.code,{children:"tailwindcss.config.js"})," file. Where ",(0,r.jsx)(n.a,{href:"/configure/app/source/design-system",children:"source.designSystem"})," is equivalent to the ",(0,r.jsx)(n.a,{href:"https://v2.tailwindcss.com/docs/configuration#theme",target:"_blank",rel:"noopener noreferrer",children:"theme"})," configuration of Tailwind CSS."]}),"\n"]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);