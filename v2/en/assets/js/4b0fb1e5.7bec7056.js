"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1086],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(52983);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),k=l,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||r;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=t(18249),l=(t(52983),t(44993));const r={toc:[{value:"Object Type",id:"object-type",level:3},{value:"Function Type",id:"function-type",level:3},{value:"Utils",id:"utils",level:3},{value:"env",id:"env",level:4},{value:"isProd",id:"isprod",level:4},{value:"target",id:"target",level:4},{value:"isServer",id:"isserver",level:4},{value:"isWebWorker",id:"iswebworker",level:4},{value:"webpack",id:"webpack",level:4},{value:"HtmlWebpackPlugin",id:"htmlwebpackplugin",level:3},{value:"addRules",id:"addrules",level:3},{value:"prependPlugins",id:"prependplugins",level:3},{value:"appendPlugins",id:"appendplugins",level:3},{value:"removePlugin",id:"removeplugin",level:3}]};function o(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Object")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Function")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpack")," is used to configure ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"#tools-webpackchain"},"tools.webpackChain")," is also used to modify the webpack configuration, and the function is more powerful. It is recommended to use ",(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpackChain")," first.")),(0,l.kt)("h3",{id:"object-type"},"Object Type"),(0,l.kt)("p",null,"You can configure it as an object, which will be merged with the original webpack configuration through ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack-merge"),". For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: {\n      resolve: {\n        alias: {\n          '@util': 'src/util',\n        },\n      },\n    },\n  },\n};\n")),(0,l.kt)("h3",{id:"function-type"},"Function Type"),(0,l.kt)("p",null,"You can also configure it as a function, which accepts one parameter, the original webpack configuration, you can modify this configuration, and then return a new configuration. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: config => {\n      config.resolve.alias['@util'] = 'src/util';\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("p",null,"The second parameter of this function is an object that contains some information about the tool collection. Details are as follows:"),(0,l.kt)("h3",{id:"utils"},"Utils"),(0,l.kt)("h4",{id:"env"},"env"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"'development' | 'production' | 'test'"))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"env")," parameter can be used to determine whether the current environment is development, production or test. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"isprod"},"isProd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"isProd")," parameter can be used to determine whether the current environment is production. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: (config, { isProd }) => {\n      if (isProd) {\n        config.devtool = 'source-map';\n      }\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"target"},"target"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"'web' | 'node' | 'modern-web' | 'web-worker'"))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," parameter can be used to determine the current target. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: (config, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"isserver"},"isServer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"Determines whether the target environment is ",(0,l.kt)("inlineCode",{parentName:"p"},"node"),", equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"target === 'node'"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: (config, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"iswebworker"},"isWebWorker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"Determines whether the target environment is ",(0,l.kt)("inlineCode",{parentName:"p"},"web-worker"),", equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"target === 'web-worker'"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: (config, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"webpack"},"webpack"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"typeof import('webpack')"))),(0,l.kt)("p",null,"The webpack instance. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    webpack: (config, { webpack }) => {\n      config.plugins.push(new webpack.ProgressPlugin());\n      return config;\n    },\n  },\n};\n")),(0,l.kt)("h3",{id:"htmlwebpackplugin"},"HtmlWebpackPlugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"typeof import('html-webpack-plugin')"))),(0,l.kt)("p",null,"The HtmlWebpackPlugin instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  tools: {\n    webpackChain: (chain, { HtmlWebpackPlugin }) => {\n      console.log(HtmlWebpackPlugin);\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"addrules"},"addRules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"(rules: RuleSetRule | RuleSetRule[]) => void"))),(0,l.kt)("p",null,"Add additional ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/module/#modulerules"},"webpack rules"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  tools: {\n    webpack: (config, { addRules }) => {\n      // add a single rule\n      addRules({\n        test: /\\.foo/,\n        loader: require.resolve('foo-loader'),\n      });\n\n      // Add multiple rules as an array\n      addRules([\n        {\n          test: /\\.foo/,\n          loader: require.resolve('foo-loader'),\n        },\n        {\n          test: /\\.bar/,\n          loader: require.resolve('bar-loader'),\n        },\n      ]);\n    },\n  },\n};\n")),(0,l.kt)("h3",{id:"prependplugins"},"prependPlugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"(plugins: WebpackPluginInstance | WebpackPluginInstance[]) => void"))),(0,l.kt)("p",null,"Add additional plugins to the head of the internal webpack plugins array, and the plugin will be executed first."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  tools: {\n    webpack: (config, { prependPlugins, webpack }) => {\n      // add a single plugin\n      prependPlugins(\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      );\n\n      // Add multiple plugins\n      prependPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n")),(0,l.kt)("h3",{id:"appendplugins"},"appendPlugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"(plugins: WebpackPluginInstance | WebpackPluginInstance[]) => void"))),(0,l.kt)("p",null,"Add additional plugins at the end of the internal webpack plugins array, the plugin will be executed last."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  tools: {\n    webpack: (config, { appendPlugins, webpack }) => {\n      // add a single plugin\n      appendPlugins([\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      ]);\n\n      // Add multiple plugins\n      appendPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n")),(0,l.kt)("h3",{id:"removeplugin"},"removePlugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"(name: string) => void"))),(0,l.kt)("p",null,"Remove the internal webpack plugin, the parameter is the ",(0,l.kt)("inlineCode",{parentName:"p"},"constructor.name")," of the plugin."),(0,l.kt)("p",null,"For example, remove the internal ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin"},"fork-ts-checker-webpack-plugin"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  tools: {\n    webpack: (config, { removePlugin }) => {\n      removePlugin('ForkTsCheckerWebpackPlugin');\n    },\n  },\n};\n")))}o.isMDXComponent=!0;const i={title:"tools.webpack",sidebar_label:"webpack",sidebar_position:1},p=void 0,u={unversionedId:"configure/app/tools/webpack",id:"configure/app/tools/webpack",title:"tools.webpack",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to tools.webpack\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/configure/app/tools/webpack.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/webpack",permalink:"/v2/en/docs/configure/app/tools/webpack",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"tools.webpack",sidebar_label:"webpack",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"webpackChain",permalink:"/v2/en/docs/configure/app/tools/webpack-chain"},next:{title:"esbuild",permalink:"/v2/en/docs/configure/app/tools/esbuild"}},c={},s=[],d={toc:s};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"BUILDER",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-webpack"},"tools.webpack"),"\u3002")),(0,l.kt)(o,{mdxType:"Main"}))}k.isMDXComponent=!0}}]);