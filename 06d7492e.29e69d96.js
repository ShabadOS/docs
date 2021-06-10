(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(b,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},o),{},{components:n})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var o=2;o<i;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(126)),b={title:"Banis"},c={unversionedId:"schema/banis",id:"schema/banis",isDocsHomePage:!1,title:"Banis",description:"The Banis table provides a list of all the Banis tht the database contains. A Bani is a collection of Lines.",source:"@site/content/database/schema/banis.md",slug:"/schema/banis",permalink:"/database/schema/banis",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/schema/banis.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1623365801,sidebar:"databaseSidebar",previous:{title:"Translations",permalink:"/database/schema/translations"},next:{title:"Bani_Lines",permalink:"/database/schema/bani_lines"}},l=[{value:"Columns",id:"columns",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>name_english</code>",id:"name_english",children:[]},{value:"<code>name_gurmukhi</code>",id:"name_gurmukhi",children:[]}]}],o={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Banis")," table provides a list of all the Banis tht the database contains. A Bani is a collection of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/database/schema/lines"}),"Lines"),"."),Object(i.b)("p",null,"To retrieve the actual ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/database/schema/lines"}),"Lines")," within a Bani, use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/database/schema/bani_lines"}),"Bani_Lines")," table."),Object(i.b)("h2",{id:"columns"},"Columns"),Object(i.b)("h3",{id:"id"},Object(i.b)("inlineCode",{parentName:"h3"},"id")),Object(i.b)("p",null,"The unique identifier of the Bani."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Primary Key")))),Object(i.b)("h3",{id:"name_english"},Object(i.b)("inlineCode",{parentName:"h3"},"name_english")),Object(i.b)("p",null,"The name of the Bani, in English."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(i.b)("h3",{id:"name_gurmukhi"},Object(i.b)("inlineCode",{parentName:"h3"},"name_gurmukhi")),Object(i.b)("p",null,"The name of the Bani, in Gurmukhi, ASCII representation."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not Null")))))}s.isMDXComponent=!0}}]);