(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{126:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(b,".").concat(d)]||p[d]||s[d]||l;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),l=(a(0),a(126)),b={title:"Languages"},c={unversionedId:"schema/languages",id:"schema/languages",isDocsHomePage:!1,title:"Languages",description:"The Languages table provides a list of all the translation languages that the database currently supports.",source:"@site/content/database/schema/languages.md",slug:"/schema/languages",permalink:"/database/schema/languages",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/schema/languages.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1623365801,sidebar:"databaseSidebar",previous:{title:"Compositions",permalink:"/database/schema/compositions"},next:{title:"Transliterations",permalink:"/database/schema/transliterations"}},i=[{value:"Columns",id:"columns",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>name_english</code>",id:"name_english",children:[]},{value:"<code>name_gurmukhi</code>",id:"name_gurmukhi",children:[]},{value:"<code>name_international</code>",id:"name_international",children:[]}]}],o={toc:i};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Languages")," table provides a list of all the translation languages that the database currently supports."),Object(l.b)("h2",{id:"columns"},"Columns"),Object(l.b)("h3",{id:"id"},Object(l.b)("inlineCode",{parentName:"h3"},"id")),Object(l.b)("p",null,"The unique identifier of the language."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Primary Key")))),Object(l.b)("h3",{id:"name_english"},Object(l.b)("inlineCode",{parentName:"h3"},"name_english")),Object(l.b)("p",null,"The name of the language, in English."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(l.b)("h3",{id:"name_gurmukhi"},Object(l.b)("inlineCode",{parentName:"h3"},"name_gurmukhi")),Object(l.b)("p",null,"The name of the language, in Gurmukhi, ASCII representation."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(l.b)("h3",{id:"name_international"},Object(l.b)("inlineCode",{parentName:"h3"},"name_international")),Object(l.b)("p",null,"The name of the language, as written in the language itself."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))))}u.isMDXComponent=!0}}]);