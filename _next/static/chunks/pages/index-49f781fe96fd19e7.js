(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6577)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},u=n(6273),l=n(387),c=n(7190);var s={};function f(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?u.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,h=e.children,y=e.replace,v=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,j=o(c.useIntersection({rootMargin:"200px"}),2),_=j[0],x=j[1],w=i.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);i.default.useEffect((function(){var e=x&&n&&u.isLocalURL(d),t="undefined"!==typeof g?g:r&&r.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,x,g,n,r]);var E={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i}))}(e,r,d,p,y,v,m,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof g?g:r&&r.locale,O=r&&r.isLocaleDomain&&u.getDomainLocale(p,k,r&&r.locales,r&&r.domainLocales);E.href=O||u.addBasePath(u.addLocale(p,k,r&&r.defaultLocale))}return i.default.cloneElement(t,E)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!u,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],h=o(a.useState(t?t.current:null),2),y=h[0],v=h[1],m=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),c.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:n}))}),[r,y,n,d]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[m,d]};var a=n(7294),i=n(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},6577:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return m}});var r=n(5893),o=n(7045),a=n(2183),i=n.n(a),u=function(){return(0,r.jsx)("nav",{className:i().nav,children:(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"The Sh*t Blog"})})})},l=n(9416),c=n.n(l),s=function(e){var t=e.children;return(0,r.jsx)("div",{className:c().content,children:t})},f=n(1966),d=n.n(f),p=n(1664),h=function(e){var t=e.title,n=e.slug,o=e.date,a=e.tags;return(0,r.jsxs)("div",{className:d().post,children:[(0,r.jsxs)("div",{children:[o," ",a.join(", ")]}),(0,r.jsx)(p.default,{href:{pathname:"/posts/[slug]",query:{slug:n}},children:(0,r.jsx)("a",{children:t})})]})};function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=!0;function m(e){var t=e.allPosts.map((function(e,t){return(0,r.jsx)(h,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}({},e),t)}));return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(s,{children:t})]})}},7045:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),o=n(9008),a="Hungkieu's blog",i=n(9357),u=n.n(i),l=function(e){var t=e.title,n=e.description,i=e.children;return(0,r.jsxs)("div",{className:u().layout,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:t===a?t:"".concat(t," | ").concat(a)}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap",rel:"stylesheet"})]}),(0,r.jsx)("main",{className:u().main,children:i})]})};l.defaultProps={title:a,description:"100 Push ups. 100 sit ups. And 100 squats. Then a 10 kilometer run. Do it every single day! Oke!"};var c=l},9357:function(e){e.exports={layout:"styles_layout__uw121",main:"styles_main__ZTqbU"}},2183:function(e){e.exports={nav:"styles_nav__uEL1g"}},9416:function(e){e.exports={content:"styles_content__o5kl9"}},1966:function(e){e.exports={post:"styles_post__2Az41"}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);