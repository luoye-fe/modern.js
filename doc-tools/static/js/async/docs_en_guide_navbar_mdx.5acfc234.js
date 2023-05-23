(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_navbar_mdx"],{99602:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return a},title:function(){return r},toc:function(){return o},default:function(){return d}});var t=i("9880"),s=i("23169"),a={},r="Navbar",o=[{text:"Custom Navigation Menu",depth:2,id:"custom-navigation-menu"},{text:"NavItemWithLink",depth:3,id:"navitemwithlink"},{text:"NavItemWithChildren",depth:3,id:"navitemwithchildren"},{text:"Example",depth:3,id:"example"},{text:"Light/Dark Mode",depth:2,id:"light/dark-mode"},{text:"Related Links",depth:2,id:"related-links"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"navbar",children:["Navbar",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#navbar",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"The navbar is very important to a website. It allows users to quickly jump between different pages of the website, and also allows users to quickly find some important information of the website."}),"\n",(0,t.jsxs)(n.h2,{id:"custom-navigation-menu",children:["Custom Navigation Menu",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-navigation-menu",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can add a custom navigation menu in ",(0,t.jsx)(n.code,{children:"themeConfig.nav"}),", configured as an array, as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      nav: [],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The nav bar is configured as an array, and each item in the array is a ",(0,t.jsx)(n.code,{children:"NavItem"})," object, which has the following types:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export type NavItem = NavItemWithLink | NavItemWithChildren;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["That is, each navbar element ( ",(0,t.jsx)(n.code,{children:"NavItem"})," ) can be a link ( ",(0,t.jsx)(n.code,{children:"NavItemWithLink"})," ), or a navbar group containing child elements ( ",(0,t.jsx)(n.code,{children:"NavItemWithChildren"})," )."]}),"\n",(0,t.jsxs)(n.h3,{id:"navitemwithlink",children:["NavItemWithLink",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#navitemwithlink",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface NavItemWithLink {\n  text: string;\n  link: string;\n  activeMatch?: string;\n  position?: 'left' | 'right';\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The meanings of the attributes are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"text"})," - Navbar text"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"link"})," - Navbar link"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"activeMatch"})," - Activation rule for navbar links"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"position"})," - Navbar menu item position"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Attribute details:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"activeMatch"})," is used to match the current route, when the route matches the ",(0,t.jsx)(n.code,{children:"activeMatch"})," rule, the nav item will be highlighted."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"activeMatch"})," is the ",(0,t.jsx)(n.code,{children:"link"})," attribute of NavItem."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"position"})," is used to configure independent positioning of top menu items, with the following options available:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"left"})," placed in the left menu bar at the top of the menu item;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"right"})," pplaced in the right menu bar at the top of the menu item."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"position"})," is not configured, it will be placed on the right menu bar by default, which is equivalent to configuring ",(0,t.jsx)(n.code,{children:"right"})," ."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"navitemwithchildren",children:["NavItemWithChildren",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#navitemwithchildren",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface NavItemWithChildren {\n  text: string;\n  items: NavItem[];\n  position?: 'left' | 'right';\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The meanings of the attributes are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"text"})," - Navbar text"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"items"})," - Subnavbar elements"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"position"})," - Navbar menu item position with child navbar elements"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      nav: [\n        {\n          text: 'Home',\n          link: '/',\n          position: 'left',\n        },\n        {\n          text: 'Links',\n          items: [\n            {\n              text: 'Github',\n              link: 'http://github.com/',\n            },\n            {\n              text: 'Twitter',\n              link: 'http://twitter.com/',\n            },\n          ],\n          position: 'left',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"light/dark-mode",children:["Light/Dark Mode",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#light/dark-mode",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, the navbar will have a toggle button for ",(0,t.jsx)(n.code,{children:"Light/Dark"})," mode, you can disable it with the following config:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      darkMode: false,\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"related-links",children:["Related Links",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#related-links",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Social Links to the Site. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      socialLinks: [\n        {\n          icon: 'github',\n          link: 'github.com/web-infra-dev/modern.js',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more configurations, please refer to ",(0,t.jsx)(n.a,{href:"/en/api/config-theme#sociallinks",children:"links"}),"."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);