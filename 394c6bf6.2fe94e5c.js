(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{126:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||b;return a?r.a.createElement(m,i(i({ref:t},o),{},{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),b=(a(0),a(126)),c={title:"Translation_Sources"},i={unversionedId:"schema/translation_sources",id:"schema/translation_sources",isDocsHomePage:!1,title:"Translation_Sources",description:"The Translation_Sources table contains all the sources of translations that the database contains, used by the Translations.",source:"@site/content/database/schema/translation_sources.md",slug:"/schema/translation_sources",permalink:"/database/schema/translation_sources",editUrl:"https://github.com/shabados/docs/edit/main/content/database/schema/translation_sources.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1623523110,sidebar:"databaseSidebar",previous:{title:"Transliterations",permalink:"/database/schema/transliterations"},next:{title:"Translations",permalink:"/database/schema/translations"}},l=[{value:"Columns",id:"columns",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>name_english</code>",id:"name_english",children:[]},{value:"<code>name_gurmukhi</code>",id:"name_gurmukhi",children:[]},{value:"<code>composition_id</code>",id:"composition_id",children:[]},{value:"<code>language_id</code>",id:"language_id",children:[]}]}],o={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"Translation_Sources")," table contains all the sources of translations that the database contains, used by the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/translations"}),"Translations"),"."),Object(b.b)("p",null,"A translation source is a combination of the Gurbani ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/sources"}),"source"),", the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/languages"}),"language"),", and the author details."),Object(b.b)("p",null,"To retrieve the actual ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/translations"}),"Translations")," for a translation source, use the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/translations"}),"Translations")," table."),Object(b.b)("h2",{id:"columns"},"Columns"),Object(b.b)("h3",{id:"id"},Object(b.b)("inlineCode",{parentName:"h3"},"id")),Object(b.b)("p",null,"The unique identifier of the translation source."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Primary Key")))),Object(b.b)("h3",{id:"name_english"},Object(b.b)("inlineCode",{parentName:"h3"},"name_english")),Object(b.b)("p",null,"The name of the translation source, in English."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"name_gurmukhi"},Object(b.b)("inlineCode",{parentName:"h3"},"name_gurmukhi")),Object(b.b)("p",null,"The name of the translation source, in Gurmukhi, ASCII representation."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"composition_id"},Object(b.b)("inlineCode",{parentName:"h3"},"composition_id")),Object(b.b)("p",null,"The unique identifier of the Gurbani ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/compositions"}),"composition")," that the translation source corresponds to."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Foreign Key (",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/database/schema/compositions#id"}),"Compositions.id"),"), ",Object(b.b)("br",null)," Not Null")))),Object(b.b)("h3",{id:"language_id"},Object(b.b)("inlineCode",{parentName:"h3"},"language_id")),Object(b.b)("p",null,"The unique identifier of the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/languages"}),"language")," that the translation source is translated into."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Foreign Key (",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/database/schema/languages#id"}),"Languages.id"),"), ",Object(b.b)("br",null)," Not Null")))))}s.isMDXComponent=!0}}]);