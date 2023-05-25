(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["lib-router"],{57402:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{AbortedDeferredError:function(){return I},Action:function(){return o},UNSAFE_getPathContributingMatches:function(){return F},UNSAFE_invariant:function(){return w},createBrowserHistory:function(){return P},createPath:function(){return j},isRouteErrorResponse:function(){return T},joinPaths:function(){return $},matchPath:function(){return x},matchRoutes:function(){return C},normalizePathname:function(){return B},parsePath:function(){return U},resolvePath:function(){return N},resolveTo:function(){return D},stripBasename:function(){return A}});var n,a,o,i,u=r("61078"),c=r("20469"),s=r("89393"),l=r("37599"),h=r("36380"),f=r("20891"),d=r("28003"),v=r("17419"),p=r("93160"),m=r("4293"),g=r("4494"),y=r("73706");function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r("86605"),(n=o||(o={})).Pop="POP",n.Push="PUSH",n.Replace="REPLACE";var _="popstate";function P(e){return void 0===e&&(e={}),function(e,t,r,n){var a=function(){return(f.state||{idx:null}).idx},i=function(){d=o.Pop;var e=a(),t=null==e?null:e-p;p=e,v&&v({action:d,location:m.location,delta:t})},u=function(e){var t="null"!==s.location.origin?s.location.origin:s.location.href,r="string"==typeof e?e:j(e);return w(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)};void 0===n&&(n={});var c=n.window,s=void 0===c?document.defaultView:c,l=n.v5Compat,h=void 0!==l&&l,f=s.history,d=o.Pop,v=null,p=a();null==p&&(p=0,f.replaceState(b({},f.state,{idx:p}),""));var m={get action(){return d},get location(){return e(s,f)},listen:function(e){if(v)throw Error("A history only accepts one active listener");return s.addEventListener(_,i),v=e,function(){s.removeEventListener(_,i),v=null}},createHref:function(e){return t(s,e)},createURL:u,encodeLocation:function(e){var t=u(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){d=o.Push;var n=E(m.location,e,t);r&&r(n,e);var i=R(n,p=a()+1),u=m.createHref(n);try{f.pushState(i,"",u)}catch(e){s.location.assign(u)}h&&v&&v({action:d,location:m.location,delta:1})},replace:function(e,t){d=o.Replace;var n=E(m.location,e,t);r&&r(n,e);var i=R(n,p=a()),u=m.createHref(n);f.replaceState(i,"",u),h&&v&&v({action:d,location:m.location,delta:0})},go:function(e){return f.go(e)}};return m}(function(e,t){var r=e.location;return E("",{pathname:r.pathname,search:r.search,hash:r.hash},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:j(t)},null,e)}function w(e,t){if(!1===e||null==e)throw Error(t)}function S(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function R(e,t){return{usr:e.state,key:e.key,idx:t}}function E(e,t,r,n){return void 0===r&&(r=null),b({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?U(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function j(e){var t=e.pathname,r=void 0===t?"/":t,n=e.search,a=void 0===n?"":n,o=e.hash,i=void 0===o?"":o;return a&&"?"!==a&&(r+="?"===a.charAt(0)?a:"?"+a),i&&"#"!==i&&(r+="#"===i.charAt(0)?i:"#"+i),r}function U(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function C(e,t,r){void 0===r&&(r="/");var n=A(("string"==typeof t?U(t):t).pathname||"/",r);if(null==n)return null;var a=function e(t,r,n,a){void 0===r&&(r=[]),void 0===n&&(n=[]),void 0===a&&(a="");var o=function(t,o,i){var u={relativePath:void 0===i?t.path||"":i,caseSensitive:!0===t.caseSensitive,childrenIndex:o,route:t};u.relativePath.startsWith("/")&&(w(u.relativePath.startsWith(a),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+a)+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),u.relativePath=u.relativePath.slice(a.length));var c=$([a,u.relativePath]),s=n.concat(u);t.children&&t.children.length>0&&(w(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+c+'".'),e(t.children,r,s,c)),(null!=t.path||t.index)&&r.push({path:c,score:function(e,t){var r=e.split("/"),n=r.length;return r.some(O)&&(n+=-2),t&&(n+=2),r.filter(function(e){return!O(e)}).reduce(function(e,t){return e+(k.test(t)?3:""===t?1:10)},n)}(c,t.index),routesMeta:s})};return t.forEach(function(e,t){var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?")){var n=!0,a=!1,i=void 0;try{for(var u,c=(function e(t){var r=t.split("/");if(0===r.length)return[];var n=v._(r),a=n[0],o=n.slice(1),i=a.endsWith("?"),u=a.replace(/\?$/,"");if(0===o.length)return i?[u,""]:[u];var c=e(o.join("/")),s=[];return s.push.apply(s,p._(c.map(function(e){return""===e?u:[u,e].join("/")}))),i&&s.push.apply(s,p._(c)),s.map(function(e){return t.startsWith("/")&&""===e?"/":e})})(e.path)[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){var s=u.value;o(e,t,s)}}catch(e){a=!0,i=e}finally{try{!n&&null!=c.return&&c.return()}finally{if(a)throw i}}}else o(e,t)}),r}(e);(function(e){e.sort(function(e,t){return e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(function(e,r){return e===t[r]})?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(function(e){return e.childrenIndex}),t.routesMeta.map(function(e){return e.childrenIndex}))})})(a);for(var o=null,i=0;null==o&&i<a.length;++i)o=function(e,t){for(var r=e.routesMeta,n={},a="/",o=[],i=0;i<r.length;++i){var u=r[i],c=i===r.length-1,s="/"===a?t:t.slice(a.length)||"/",l=x({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},s);if(!l)return null;Object.assign(n,l.params);var h=u.route;o.push({params:n,pathname:$([a,l.pathname]),pathnameBase:B($([a,l.pathnameBase])),route:h}),"/"!==l.pathnameBase&&(a=$([a,l.pathnameBase]))}return o}(a[i],function(e){try{return decodeURI(e)}catch(t){return S(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t)+")."),e}}(n));return o}(a=i||(i={})).data="data",a.deferred="deferred",a.redirect="redirect",a.error="error";var k=/^:\w+$/,O=function(e){return"*"===e};function x(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});var r=d._(function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!0),S("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*"))+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, '+('please change the route path to "'+e.replace(/\*$/,"/*"))+'".');var n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,function(e,t){return n.push(t),"/([^\\/]+)"});return e.endsWith("*")?(n.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),2),n=r[0],a=r[1],o=t.match(n);if(!o)return null;var i=o[0],u=i.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:a.reduce(function(e,t,r){if("*"===t){var n=c[r]||"";u=i.slice(0,i.length-n.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return S(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e)+'" is a malformed URL segment. This is probably'+(" due to a bad percent encoding ("+r)+")."),e}}(c[r]||"",t),e},{}),pathname:i,pathnameBase:u,pattern:e}}function A(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;var r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function N(e,t){void 0===t&&(t="/");var r="string"==typeof e?U(e):e,n=r.pathname,a=r.search,o=r.hash;return{pathname:n?n.startsWith("/")?n:function(e,t){var r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(function(e){".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)}),r.length>1?r.join("/"):"/"}(n,t):t,search:M(void 0===a?"":a),hash:W(void 0===o?"":o)}}function L(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n))+"].  Please separate it out to the "+("`to."+r)+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function F(e){return e.filter(function(e,t){return 0===t||e.route.path&&e.route.path.length>0})}function D(e,t,r,n){void 0===n&&(n=!1),"string"==typeof e?a=U(e):(w(!(a=b({},e)).pathname||!a.pathname.includes("?"),L("?","pathname","search",a)),w(!a.pathname||!a.pathname.includes("#"),L("#","pathname","hash",a)),w(!a.search||!a.search.includes("#"),L("#","search","hash",a)));var a,o,i=""===e||""===a.pathname,u=i?"/":a.pathname;if(n||null==u)o=r;else{var c=t.length-1;if(u.startsWith("..")){for(var s=u.split("/");".."===s[0];)s.shift(),c-=1;a.pathname=s.join("/")}o=c>=0?t[c]:"/"}var l=N(a,o),h=u&&"/"!==u&&u.endsWith("/"),f=(i||"."===u)&&r.endsWith("/");return!l.pathname.endsWith("/")&&(h||f)&&(l.pathname+="/"),l}var $=function(e){return e.join("/").replace(/\/\/+/g,"/")},B=function(e){return e.replace(/\/+$/,"").replace(/^\/*/,"/")},M=function(e){return e&&"?"!==e?e.startsWith("?")?e:"?"+e:""},W=function(e){return e&&"#"!==e?e.startsWith("#")?e:"#"+e:""},I=function(e){h._(r,e);var t=g._(r);function r(){return c._(this,r),t.apply(this,arguments)}return r}(m._(Error));s._(function e(t,r){var n,a=this;c._(this,e),this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],w(t&&"object"==typeof t&&!Array.isArray(t),"defer() only accepts plain objects"),this.abortPromise=new Promise(function(e,t){return n=t}),this.controller=new AbortController;var o=function(){return n(new I("Deferred data aborted"))};this.unlistenAbortSignal=function(){return a.controller.signal.removeEventListener("abort",o)},this.controller.signal.addEventListener("abort",o),this.data=Object.entries(t).reduce(function(e,t){var r=d._(t,2),n=r[0],o=r[1];return Object.assign(e,l._({},n,a.trackPromise(n,o)))},{}),this.done&&this.unlistenAbortSignal(),this.init=r},[{key:"trackPromise",value:function(e,t){var r=this;if(!f._(t,Promise))return t;this.deferredKeys.push(e),this.pendingKeysSet.add(e);var n=Promise.race([t,this.abortPromise]).then(function(t){return r.onSettle(n,e,null,t)},function(t){return r.onSettle(n,e,t)});return n.catch(function(){}),Object.defineProperty(n,"_tracked",{get:function(){return!0}}),n}},{key:"onSettle",value:function(e,t,r,n){return this.controller.signal.aborted&&f._(r,I)?(this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:function(){return r}}),Promise.reject(r)):(this.pendingKeysSet.delete(t),this.done&&this.unlistenAbortSignal(),r)?(Object.defineProperty(e,"_error",{get:function(){return r}}),this.emit(!1,t),Promise.reject(r)):(Object.defineProperty(e,"_data",{get:function(){return n}}),this.emit(!1,t),n)}},{key:"emit",value:function(e,t){this.subscribers.forEach(function(r){return r(e,t)})}},{key:"subscribe",value:function(e){var t=this;return this.subscribers.add(e),function(){return t.subscribers.delete(e)}}},{key:"cancel",value:function(){var e=this;this.controller.abort(),this.pendingKeysSet.forEach(function(t,r){return e.pendingKeysSet.delete(r)}),this.emit(!0)}},{key:"resolveData",value:function(e){var t=this;return u._(function(){var r,n;return y._(this,function(a){switch(a.label){case 0:if(r=!1,t.done)return[3,2];return n=function(){return t.cancel()},e.addEventListener("abort",n),[4,new Promise(function(r){t.subscribe(function(a){e.removeEventListener("abort",n),(a||t.done)&&r(a)})})];case 1:r=a.sent(),a.label=2;case 2:return[2,r]}})})()}},{key:"done",get:function(){return 0===this.pendingKeysSet.size}},{key:"unwrappedData",get:function(){return w(null!==this.data&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce(function(e,t){var r=d._(t,2),n=r[0],a=r[1];return Object.assign(e,l._({},n,function(e){var t;if(t=e,!f._(t,Promise)||!0!==t._tracked)return e;if(e._error)throw e._error;return e._data}(a)))},{})}},{key:"pendingKeys",get:function(){return Array.from(this.pendingKeysSet)}}]);function T(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}["get"].concat(p._(["post","put","patch","delete"])),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,Symbol("deferred")},10848:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{matchRoutes:function(){return l.matchRoutes},useLocation:function(){return l.useLocation},useNavigate:function(){return l.useNavigate},BrowserRouter:function(){return y}});var n,a,o,i,u=r("20891"),c=r("28003"),s=r.ir(r("6171")),l=r("44870"),h=r("57402");function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}var v="application/x-www-form-urlencoded";function p(e){return null!=e&&"string"==typeof e.tagName}var m=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],g=["reloadDocument","replace","method","action","onSubmit","fetcherKey","routeId","relative","preventScrollReset"];function y(e){var t=e.basename,r=e.children,n=e.window,a=s.useRef();null==a.current&&(a.current=(0,h.createBrowserHistory)({window:n,v5Compat:!0}));var o=a.current,i=c._(s.useState({action:o.action,location:o.location}),2),u=i[0],f=i[1];return s.useLayoutEffect(function(){return o.listen(f)},[o]),s.createElement(l.Router,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:o})}var b="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;(n=o||(o={})).UseScrollRestoration="useScrollRestoration",n.UseSubmitImpl="useSubmitImpl",n.UseFetcher="useFetcher",(a=i||(i={})).UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"},44870:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{createPath:function(){return p.createPath},matchRoutes:function(){return p.matchRoutes},Router:function(){return A},UNSAFE_DataRouterContext:function(){return g},UNSAFE_DataRouterStateContext:function(){return y},UNSAFE_NavigationContext:function(){return _},UNSAFE_RouteContext:function(){return w},UNSAFE_useRouteId:function(){return x},useHref:function(){return R},useInRouterContext:function(){return E},useLocation:function(){return j},useNavigate:function(){return C},useResolvedPath:function(){return k}});var n,a,o,i,u,c,s=r("20469"),l=r("89393"),h=r("36380"),f=r("20891"),d=r("4494"),v=r.ir(r("6171")),p=r("57402");function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g=v.createContext(null),y=v.createContext(null),b=v.createContext(null),_=v.createContext(null),P=v.createContext(null),w=v.createContext({outlet:null,matches:[],isDataRoute:!1}),S=v.createContext(null);function R(e,t){var r=(void 0===t?{}:t).relative;E()||(0,p.UNSAFE_invariant)(!1);var n=v.useContext(_),a=n.basename,o=n.navigator,i=k(e,{relative:r}),u=i.hash,c=i.pathname,s=i.search,l=c;return"/"!==a&&(l="/"===c?a:(0,p.joinPaths)([a,c])),o.createHref({pathname:l,search:s,hash:u})}function E(){return null!=v.useContext(P)}function j(){return E()||(0,p.UNSAFE_invariant)(!1),v.useContext(P).location}function U(e){!v.useContext(_).static&&v.useLayoutEffect(e)}function C(){return v.useContext(w).isDataRoute?function(){var e,t,r=(e=i.UseNavigateStable,(t=v.useContext(g))||(0,p.UNSAFE_invariant)(!1),t).router,n=O(u.UseNavigateStable),a=v.useRef(!1);return U(function(){a.current=!0}),v.useCallback(function(e,t){void 0===t&&(t={}),a.current&&("number"==typeof e?r.navigate(e):r.navigate(e,m({fromRouteId:n},t)))},[r,n])}():function(){E()||(0,p.UNSAFE_invariant)(!1);var e=v.useContext(g),t=v.useContext(_),r=t.basename,n=t.navigator,a=v.useContext(w).matches,o=j().pathname,i=JSON.stringify((0,p.UNSAFE_getPathContributingMatches)(a).map(function(e){return e.pathnameBase})),u=v.useRef(!1);return U(function(){u.current=!0}),v.useCallback(function(t,a){if(void 0===a&&(a={}),u.current){if("number"==typeof t){n.go(t);return}var c=(0,p.resolveTo)(t,JSON.parse(i),o,"path"===a.relative);null==e&&"/"!==r&&(c.pathname="/"===c.pathname?r:(0,p.joinPaths)([r,c.pathname])),(a.replace?n.replace:n.push)(c,a.state,a)}},[r,n,i,o,e])}()}function k(e,t){var r=(void 0===t?{}:t).relative,n=v.useContext(w).matches,a=j().pathname,o=JSON.stringify((0,p.UNSAFE_getPathContributingMatches)(n).map(function(e){return e.pathnameBase}));return v.useMemo(function(){return(0,p.resolveTo)(e,JSON.parse(o),a,"path"===r)},[e,o,a,r])}!function(e){h._(r,e);var t=d._(r);function r(e){var n;return s._(this,r),(n=t.call(this,e)).state={location:e.location,revalidation:e.revalidation,error:e.error},n}l._(r,[{key:"componentDidCatch",value:function(e,t){console.error("React Router caught the following error during render",e,t)}},{key:"render",value:function(){return this.state.error?v.createElement(w.Provider,{value:this.props.routeContext},v.createElement(S.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}},{key:"getDerivedStateFromProps",value:function(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}}])}(v.Component),(n=i||(i={})).UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",(a=u||(u={})).UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId";function O(e){var t,r,n=(t=0,(r=v.useContext(w))||(0,p.UNSAFE_invariant)(!1),r),a=n.matches[n.matches.length-1];return a.route.id||(0,p.UNSAFE_invariant)(!1),a.route.id}function x(){return O(u.UseRouteId)}function A(e){var t=e.basename,r=e.children,n=e.location,a=e.navigationType,o=void 0===a?p.Action.Pop:a,i=e.navigator,u=e.static,c=void 0!==u&&u;E()&&(0,p.UNSAFE_invariant)(!1);var s=(void 0===t?"/":t).replace(/^\/*/,"/"),l=v.useMemo(function(){return{basename:s,navigator:i,static:c}},[s,i,c]);"string"==typeof n&&(n=(0,p.parsePath)(n));var h=n.pathname,f=void 0===h?"/":h,d=n.search,m=void 0===d?"":d,g=n.hash,y=void 0===g?"":g,b=n.state,w=void 0===b?null:b,S=n.key,R=void 0===S?"default":S,j=v.useMemo(function(){var e=(0,p.stripBasename)(f,s);return null==e?null:{location:{pathname:e,search:m,hash:y,state:w,key:R},navigationType:o}},[s,f,m,y,w,R,o]);return null==j?null:v.createElement(_.Provider,{value:l},v.createElement(P.Provider,{children:void 0===r?null:r,value:j}))}(o=c||(c={}))[o.pending=0]="pending",o[o.success=1]="success",o[o.error=2]="error";var N=new Promise(function(){});!function(e){h._(r,e);var t=d._(r);function r(e){var n;return s._(this,r),(n=t.call(this,e)).state={error:null},n}l._(r,[{key:"componentDidCatch",value:function(e,t){console.error("<Await> caught the following error during render",e,t)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.errorElement,n=e.resolve,a=null,o=c.pending;if(f._(n,Promise)){if(this.state.error){o=c.error;var i=this.state.error;Object.defineProperty(a=Promise.reject().catch(function(){}),"_tracked",{get:function(){return!0}}),Object.defineProperty(a,"_error",{get:function(){return i}})}else n._tracked?o=void 0!==(a=n)._error?c.error:void 0!==a._data?c.success:c.pending:(o=c.pending,Object.defineProperty(n,"_tracked",{get:function(){return!0}}),a=n.then(function(e){return Object.defineProperty(n,"_data",{get:function(){return e}})},function(e){return Object.defineProperty(n,"_error",{get:function(){return e}})}))}else o=c.success,Object.defineProperty(a=Promise.resolve(),"_tracked",{get:function(){return!0}}),Object.defineProperty(a,"_data",{get:function(){return n}});if(o===c.error&&f._(a._error,p.AbortedDeferredError))throw N;if(o===c.error&&!r)throw a._error;if(o===c.error)return v.createElement(b.Provider,{value:a,children:r});if(o===c.success)return v.createElement(b.Provider,{value:a,children:t});throw a}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}])}(v.Component)}}]);