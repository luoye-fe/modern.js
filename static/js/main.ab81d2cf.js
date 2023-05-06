(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["main"],{42456:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{initPageData:function(){return v},App:function(){return g}});var r=n.ir(n("80577")),u=n.ir(n("16725")),i=n.ir(n("31866")),o=n.ir(n("2950")),a=n("12151"),c=n.ir(n("47038")),s=n("58675"),l=n("9134"),f=n("93989"),d=n.ir(n("78955")),h=n("14705"),p=n("72725"),m=n("54967");function v(e){return P.apply(this,arguments)}function P(){return(P=(0,r.default)(function(e){var t,r,a,l,f,d;return(0,o.default)(this,function(o){switch(o.label){case 0:if(t=n("29201").routes,!(r=(0,s.matchRoutes)(t,e)))return[3,2];return[4,r[0].route.preload()];case 1:return l=o.sent(),f=(0,m.cleanUrl)(r[0].route.filePath),d=c.default.pages.find(function(t){var n=function(e){return e.replace(/\/$/,"")};return(0,h.isEqualPath)(n(t.routePath),n(e))}),[2,{siteData:c.default,page:(0,i.default)((0,u.default)({pagePath:f,pageType:(null==l?void 0:null===(a=l.frontmatter)||void 0===a?void 0:a.pageType)||"doc"},d),{title:null==l?void 0:l.title,frontmatter:(null==l?void 0:l.frontmatter)||{},toc:(0,m.isProduction)()?d.toc:l.toc})}];case 2:return[2,{siteData:c.default,page:{pagePath:"",pageType:"404",routePath:"/404",lang:c.default.lang||"",frontmatter:{},title:"404",toc:[]}}];case 3:return[2]}})})).apply(this,arguments)}function g(e){var t=e.helmetContext,n=(0,f.useContext)(p.DataContext).setData,u=(0,s.useLocation)().pathname;return(0,f.useLayoutEffect)(function(){function e(){return(e=(0,r.default)(function(){return(0,o.default)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,v((0,h.normalizeRoutePath)(u))];case 1:return n(e.sent()),[3,3];case 2:return console.log(e.sent()),[3,3];case 3:return[2]}})})).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[u,n]),(0,a.jsx)(l.HelmetProvider,{context:t,children:(0,a.jsx)(d.default.Layout,{})})}},13342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Content",{enumerable:!0,get:function(){return c}});var r=n("12151"),u=n("58675"),i=n("93989"),o=n("14705"),a=n("29201").routes,c=function(){var e=(0,u.useLocation)().pathname,t=(0,u.matchRoutes)(a,(0,o.normalizeRoutePath)(e));if(!t)return(0,r.jsx)("div",{});var n=t[0].route.element;return(0,r.jsx)(i.Suspense,{children:n})}},44433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return o}});var r=n.ir(n("56892")),u=n("12151"),i=n("93989");function o(e){var t=e.children,n=(0,r.default)((0,i.useState)(!1),2),o=n[0],a=n[1];return((0,i.useEffect)(function(){a(!0)},[]),o)?(0,u.jsx)(u.Fragment,{children:t}):null}},11555:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"renderInBrowser",{enumerable:!0,get:function(){return m}});var r=n.ir(n("80577")),u=n.ir(n("56892")),i=n.ir(n("2950")),o=n("12151"),a=n.ir(n("78955")),c=n("93989"),s=n("67189"),l=n("58675"),f=n("42456"),d=n("72725"),h=n("14705"),p=n("54967");function m(){return v.apply(this,arguments)}function v(){return(v=(0,r.default)(function(){var e,t;return(0,i.default)(this,function(n){switch(n.label){case 0:var a;return e=document.getElementById("root"),a=(0,r.default)(function(){var e;return(0,i.default)(this,function(t){switch(t.label){case 0:return[4,(0,f.initPageData)((0,h.normalizeRoutePath)(window.location.pathname))];case 1:return e=t.sent(),[2,function(){var t=(0,u.default)((0,c.useState)(e),2),n=t[0],r=t[1],i=(0,u.default)((0,c.useState)("light"),2),a=i[0],s=i[1];return(0,o.jsx)(d.ThemeContext.Provider,{value:{theme:a,setTheme:s},children:(0,o.jsx)(d.DataContext.Provider,{value:{data:n,setData:r},children:(0,o.jsx)(l.BrowserRouter,{children:(0,o.jsx)(f.App,{})})})})}]}})}),[4,function(){return a.apply(this,arguments)}()];case 1:return t=n.sent(),(0,p.isProduction)()?(0,s.hydrateRoot)(e,(0,o.jsx)(t,{})):(0,s.createRoot)(e).render((0,o.jsx)(t,{})),[2]}})})).apply(this,arguments)}m().then(function(){a.default.setup()})},44110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.es(n("23447"),t)},72725:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DataContext:function(){return u},ThemeContext:function(){return i},usePageData:function(){return o},useLang:function(){return a}});var r=n("93989"),u=(0,r.createContext)({}),i=(0,r.createContext)({});function o(){return(0,r.useContext)(u).data}function a(){return(0,r.useContext)(u).data.page.lang||""}},23447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{normalizeHref:function(){return r.normalizeHref},withBase:function(){return r.withBase},removeBase:function(){return r.removeBase},normalizeSlash:function(){return r.normalizeSlash},isProduction:function(){return r.isProduction},normalizeRoutePath:function(){return r.normalizeRoutePath},isEqualPath:function(){return r.isEqualPath},useLocation:function(){return u.useLocation},Helmet:function(){return i.Helmet},NoSSR:function(){return o.NoSSR}}),n.es(n("72725"),t),n.es(n("13342"),t);var r=n("14705"),u=n("58675"),i=n("9134"),o=n("44433")},14705:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{normalizeRoutePath:function(){return i},withBase:function(){return o},removeBase:function(){return a},isEqualPath:function(){return c},normalizeSlash:function(){return u.normalizeSlash},isProduction:function(){return u.isProduction},normalizeHref:function(){return u.normalizeHref}});var r=n.ir(n("47038")),u=n("54967");function i(e){return decodeURIComponent(e).replace(/\.html$/,"").replace(/\/index$/,"/")}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return(0,u.withBase)(e,r.default.base)}function a(e){return(0,u.removeBase)(e,r.default.base)}function c(e,t){return o((0,u.normalizeHref)(e))===o((0,u.normalizeHref)(t))}},54967:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{QUERY_REGEXP:function(){return u},HASH_REGEXP:function(){return i},isProduction:function(){return o},cleanUrl:function(){return a},addLeadingSlash:function(){return c},removeTrailingSlash:function(){return s},normalizeSlash:function(){return l},isExternalUrl:function(){return f},parseUrl:function(){return d},normalizeHref:function(){return h},withBase:function(){return p},removeBase:function(){return m}}),n.ir(n("16725"));var r=n.ir(n("56892")),u=RegExp("\\?.*$","s"),i=RegExp("#.*$","s"),o=function(){return!0},a=function(e){return e.replace(i,"").replace(u,"")};function c(e){return"/"===e.charAt(0)||e.startsWith("https")?e:"/".concat(e)}function s(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function l(e){return s(c(e))}function f(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("mailto:")||e.startsWith("tel:")}var d=function(e){var t=(0,r.default)(e.split("#"),2),n=t[0],u=t[1];return{url:n,hash:void 0===u?"":u}};function h(e){if(!e)return"/";if(f(e))return e;var t=d(e),n=t.url,r=t.hash;return e.startsWith("mailto:")||e.startsWith("tel:")?e:(!n.endsWith(".html")&&(n.endsWith("/")?n+="index.html":n+=".html"),c(r?"".concat(n,"#").concat(r):n))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=c(e),r=l(t);return n.startsWith(r)?n:"".concat(r).concat(n)}function m(e,t){return c(e).replace(l(t),"")}},12416:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.es(n("44110"),t)}},function(e){e("11555")}]);