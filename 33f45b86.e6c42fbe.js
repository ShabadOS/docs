(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return v}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,v=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(v,c(c({ref:t},s),{},{components:r})):o.a.createElement(v,c({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),a=(r(0),r(112)),i={title:"Overlay",slug:"/overlay",sidebar_label:"Introduction"},c={unversionedId:"overlay/index",id:"overlay/index",isDocsHomePage:!1,title:"Overlay",description:"Overlays provide a convenient second screen for projectors, live streaming broadcasts, and vision impaired monitors.",source:"@site/content/tutorials/overlay/index.md",slug:"/overlay",permalink:"/tutorials/overlay",editUrl:"https://github.com/shabados/docs/edit/dev/content/tutorials/overlay/index.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1613831536,sidebar_label:"Introduction",sidebar:"tutorialsSidebar",previous:{title:"Proofreading",permalink:"/tutorials/viewer/proofreading"},next:{title:"Get started with Overlays",permalink:"/tutorials/overlay/get-started"}},l=[],s={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Overlays provide a convenient second screen for projectors, live streaming broadcasts, and vision impaired monitors."),Object(a.b)("p",null,"When a line is activated in the controller and seen on the presenter, the same information is used to generate the overlay."),Object(a.b)("p",null,"Currently only one overlay configuration is available through the GUI, but advanced users can set up multiple overlays with in-depth knowledge of custom CSS."))}u.isMDXComponent=!0}}]);