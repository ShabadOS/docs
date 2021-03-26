(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{129:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,O=d["".concat(i,".").concat(u)]||d[u]||p[u]||b;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<b;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),b=(a(0),a(129)),i={title:"Transliterations"},c={unversionedId:"schema/transliterations",id:"schema/transliterations",isDocsHomePage:!1,title:"Transliterations",description:"The Transliterations table contains the corresponding transliteration of a single line in a given language and source.",source:"@site/content/database/schema/transliterations.md",slug:"/schema/transliterations",permalink:"/database/schema/transliterations",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/schema/transliterations.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1616722833,sidebar:"databaseSidebar",previous:{title:"Languages",permalink:"/database/schema/languages"},next:{title:"Translation_Sources",permalink:"/database/schema/translation_sources"}},l=[{value:"Columns",id:"columns",children:[{value:"<code>line_id</code>",id:"line_id",children:[]},{value:"<code>source_id</code>",id:"source_id",children:[]},{value:"<code>language_id</code>",id:"language_id",children:[]},{value:"<code>transliteration</code>",id:"transliteration",children:[]},{value:"<code>first_letters</code>",id:"first_letters",children:[]},{value:"<code>vishraam_first_letters</code>",id:"vishraam_first_letters",children:[]}]}],o={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"Transliterations")," table contains the corresponding transliteration of a single line in a given ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/languages"}),"language")," and ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/sources"}),"source"),"."),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"The ",Object(b.b)("inlineCode",{parentName:"p"},"transliteration")," can be nullable."))),Object(b.b)("h2",{id:"columns"},"Columns"),Object(b.b)("h3",{id:"line_id"},Object(b.b)("inlineCode",{parentName:"h3"},"line_id")),Object(b.b)("p",null,"The unique identifier of the line that the transliteration corresponds with."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"char(4)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Primary Key, ",Object(b.b)("br",null)," Foreign Key (",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/database/schema/lines#id"}),"Lines.id"),")")))),Object(b.b)("h3",{id:"source_id"},Object(b.b)("inlineCode",{parentName:"h3"},"source_id")),Object(b.b)("p",null,"The unique identifier of the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/sources"}),"Source")," that the transliteration is of."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Primary Key, ",Object(b.b)("br",null)," Foreign Key (",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/database/schema/sources#id"}),"Sources.id"),")")))),Object(b.b)("h3",{id:"language_id"},Object(b.b)("inlineCode",{parentName:"h3"},"language_id")),Object(b.b)("p",null,"The unique identifier of the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/languages"}),"Language")," that the transliteration is in."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Primary Key, ",Object(b.b)("br",null)," Foreign Key (",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/database/schema/languages#id"}),"Languages.id"),")")))),Object(b.b)("h3",{id:"transliteration"},Object(b.b)("inlineCode",{parentName:"h3"},"transliteration")),Object(b.b)("p",null,"The transliteration of the Gurbani line."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))),Object(b.b)("h3",{id:"first_letters"},Object(b.b)("inlineCode",{parentName:"h3"},"first_letters")),Object(b.b)("p",null,"The first letters of each word in the ",Object(b.b)("inlineCode",{parentName:"p"},"transliteration"),", useful for searching the database by first letter."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"vishraam_first_letters"},Object(b.b)("inlineCode",{parentName:"h3"},"vishraam_first_letters")),Object(b.b)("p",null,"Same as ",Object(b.b)("inlineCode",{parentName:"p"},"first_letters"),", but includes heavy vishraams. Useful for prioritizing search results."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))))}s.isMDXComponent=!0}}]);