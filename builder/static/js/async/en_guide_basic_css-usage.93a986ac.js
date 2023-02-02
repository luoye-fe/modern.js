"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[6472],{92112:function(s,e,n){n.r(e),n.d(e,{content:function(){return t},frontmatter:function(){return o},title:function(){return r},toc:function(){return i}});var l=n(39980);const o=void 0,i=[{id:"using-less-sass-and-stylus",text:"Using Less, Sass and Stylus",depth:2},{id:"using-postcss",text:"Using PostCSS",depth:2},{id:"using-css-modules",text:"Using CSS Modules",depth:2},{id:"css-minify",text:"CSS Minify",depth:2},{id:"inline-css-files",text:"Inline CSS Files",depth:2},{id:"import-css-in-node_modules",text:"Import CSS in node_modules",depth:2}],r="CSS Usage",t="\"# CSS Usage\\n\\nBuilder has built-in multiple style resource processing capabilities, including Less / Sass preprocessor, PostCSS, CSS Modules, CSS inline and CSS compression.\\n\\nIn addition, Builder also provides multiple configs to customize the compile rules of style resources.\\n\\n## Using Less, Sass and Stylus\\n\\nThe Builder has built-in community popular CSS preprocessors such as Less, Sass.\\n\\nBy default, you don't need to configure anything for Less and Sass. If you need to customize loader config, you can configure [tools.less](/en/api/config-tools.html#tools-less), [tools.sass](/en/api/config-tools.html#tools-sass) to set it up.\\n\\nYou can also use Stylus in Builder, just install the Stylus plugin provided by Builder, please refer to [Stylus Plugin](/plugins/plugin-stylus.html) for usage.\\n\\n## Using PostCSS\\n\\nBuilder has built-in [PostCSS](https://postcss.org/) to transform the CSS code. You can configure the postcss-loader via [tools.postcss](/en/api/config-tools.html#tools-postcss).\\n\\n```ts\\nexport default {\\n  tools: {\\n    postcss: opts => {\\n      const viewportPlugin = require('postcss-px-to-viewport')({\\n        viewportWidth: 375,\\n      });\\n      opts.postcssOptions.plugins.push(viewportPlugin);\\n    },\\n  },\\n};\\n```\\n\\nBy default, we have enabled [autoprefixer](https://github.com/postcss/autoprefixer) to add vendor prefixes to CSS rules.\\nIf you want to configure the target browser, you can use [output.overrideBrowserslist](/en/api/config-output.html#output-overridebrowserslist) config.\\n\\n## Using CSS Modules\\n\\nPlease read the [Using CSS Modules](/guide/basic/css-modules.html) chapter for a complete usage of CSS Modules.\\n\\n## CSS Minify\\n\\nUsually, in production environments we compress static resources such as CSS, JS, etc. to achieve better transfer efficiency.\\n\\nBuilder automatically compresses CSS code at production build time with [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) (The compression tool used at the bottom is [cssnano](https://cssnano.co/)).\\n\\nYou can configure [tools.minifyCss](/en/api/config-tools.html#tools-minifycss) to make it more customizable.\\n\\n:::tip About cssnano\\ncssnano is a tool for optimizing and minifying CSS files. It reduces the size of CSS files by removing unused rules, merging similar rules, removing comments and whitespace, and converting length units, among other techniques, to improve the loading speed of websites.\\n:::\\n\\n## Inline CSS Files\\n\\nBy default, Builder will extract CSS into a separate `.css` file and output it to the dist directory.\\n\\nIf you want to inline styles into your JS file, you can set [output.disableCssExtract](/en/api/config-output.html#output-disablecssextract) to true to disable CSS extraction logic.When the JS file is requested by the browser, JS dynamically inserts the `<style>` tag into the Html to load the CSS styles.\\n\\n```ts\\nexport default {\\n  output: {\\n    disableCssExtract: true,\\n  },\\n};\\n```\\n\\nThis will increase the size of your JS Bundle, so it is usually not recommended to disable the CSS extraction.\\n\\n## Import CSS in node_modules\\n\\nYou can directly import CSS files in node_modules.\\n\\n- Import in a component:\\n\\n```ts\\n// src/App.tsx\\n// Import the Arco Design style:\\nimport '@arco-design/web-react/dist/css/arco.css';\\n```\\n\\n- Import in a style file:\\n\\n```css\\n/* src/App.css */\\n/* reference normalize.css */\\n/* https://github.com/necolas/normalize.css */\\n@import 'normalize.css';\\n\\nbody {\\n  /* */\\n}\\n```\\n\"";function c(s){const e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"css-usage",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#css-usage",children:"#"}),"CSS Usage"]}),"\n",(0,l.jsx)(e.p,{children:"Builder has built-in multiple style resource processing capabilities, including Less / Sass preprocessor, PostCSS, CSS Modules, CSS inline and CSS compression."}),"\n",(0,l.jsx)(e.p,{children:"In addition, Builder also provides multiple configs to customize the compile rules of style resources."}),"\n",(0,l.jsxs)(e.h2,{id:"using-less-sass-and-stylus",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-less-sass-and-stylus",children:"#"}),"Using Less, Sass and Stylus"]}),"\n",(0,l.jsx)(e.p,{children:"The Builder has built-in community popular CSS preprocessors such as Less, Sass."}),"\n",(0,l.jsxs)(e.p,{children:["By default, you don't need to configure anything for Less and Sass. If you need to customize loader config, you can configure ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-tools.html#tools-less",children:"tools.less"}),", ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-tools.html#tools-sass",children:"tools.sass"})," to set it up."]}),"\n",(0,l.jsxs)(e.p,{children:["You can also use Stylus in Builder, just install the Stylus plugin provided by Builder, please refer to ",(0,l.jsx)(e.a,{href:"/builder/en/plugins/plugin-stylus.html",children:"Stylus Plugin"})," for usage."]}),"\n",(0,l.jsxs)(e.h2,{id:"using-postcss",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-postcss",children:"#"}),"Using PostCSS"]}),"\n",(0,l.jsxs)(e.p,{children:["Builder has built-in ",(0,l.jsx)(e.a,{href:"https://postcss.org/",target:"_blank",rel:"nofollow",children:"PostCSS"})," to transform the CSS code. You can configure the postcss-loader via ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-tools.html#tools-postcss",children:"tools.postcss"}),"."]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"tools"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"postcss"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"opts"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"viewportPlugin"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"require"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"postcss-px-to-viewport"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")("}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"viewportWidth"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#B48EAD"},children:"375"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"opts"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"postcssOptions"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"plugins"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"push"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"viewportPlugin"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["By default, we have enabled ",(0,l.jsx)(e.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"nofollow",children:"autoprefixer"})," to add vendor prefixes to CSS rules.\nIf you want to configure the target browser, you can use ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-output.html#output-overridebrowserslist",children:"output.overrideBrowserslist"})," config."]}),"\n",(0,l.jsxs)(e.h2,{id:"using-css-modules",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-modules",children:"#"}),"Using CSS Modules"]}),"\n",(0,l.jsxs)(e.p,{children:["Please read the ",(0,l.jsx)(e.a,{href:"/builder/en/guide/basic/css-modules.html",children:"Using CSS Modules"})," chapter for a complete usage of CSS Modules."]}),"\n",(0,l.jsxs)(e.h2,{id:"css-minify",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#css-minify",children:"#"}),"CSS Minify"]}),"\n",(0,l.jsx)(e.p,{children:"Usually, in production environments we compress static resources such as CSS, JS, etc. to achieve better transfer efficiency."}),"\n",(0,l.jsxs)(e.p,{children:["Builder automatically compresses CSS code at production build time with ",(0,l.jsx)(e.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"nofollow",children:"css-minimizer-webpack-plugin"})," (The compression tool used at the bottom is ",(0,l.jsx)(e.a,{href:"https://cssnano.co/",target:"_blank",rel:"nofollow",children:"cssnano"}),")."]}),"\n",(0,l.jsxs)(e.p,{children:["You can configure ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-tools.html#tools-minifycss",children:"tools.minifyCss"})," to make it more customizable."]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"About cssnano"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsx)(e.p,{children:"\ncssnano is a tool for optimizing and minifying CSS files. It reduces the size of CSS files by removing unused rules, merging similar rules, removing comments and whitespace, and converting length units, among other techniques, to improve the loading speed of websites."})})]}),"\n",(0,l.jsxs)(e.h2,{id:"inline-css-files",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#inline-css-files",children:"#"}),"Inline CSS Files"]}),"\n",(0,l.jsxs)(e.p,{children:["By default, Builder will extract CSS into a separate ",(0,l.jsx)(e.code,{children:".css"})," file and output it to the dist directory."]}),"\n",(0,l.jsxs)(e.p,{children:["If you want to inline styles into your JS file, you can set ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-output.html#output-disablecssextract",children:"output.disableCssExtract"})," to true to disable CSS extraction logic.When the JS file is requested by the browser, JS dynamically inserts the ",(0,l.jsx)(e.code,{children:"<style>"})," tag into the Html to load the CSS styles."]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"output"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"disableCssExtract"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"This will increase the size of your JS Bundle, so it is usually not recommended to disable the CSS extraction."}),"\n",(0,l.jsxs)(e.h2,{id:"import-css-in-node_modules",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import-css-in-node_modules",children:"#"}),"Import CSS in node_modules"]}),"\n",(0,l.jsx)(e.p,{children:"You can directly import CSS files in node_modules."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Import in a component:"}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"// src/App.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"// Import the Arco Design style:"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"@arco-design/web-react/dist/css/arco.css"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Import in a style file:"}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-css",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"/* src/App.css */"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"/* reference normalize.css */"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"/* https://github.com/necolas/normalize.css */"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"@import"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"normalize.css"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"body"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"/* */"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(c,s)})):c(s)}}}]);