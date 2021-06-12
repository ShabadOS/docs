(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{126:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return a?r.a.createElement(m,b(b({ref:t},l),{},{components:a})):r.a.createElement(m,b({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),i=(a(0),a(126)),o={title:"Translations"},b={unversionedId:"schema/translations",id:"schema/translations",isDocsHomePage:!1,title:"Translations",description:"The Translations table contains the corresponding translation of a single line from a translation source.",source:"@site/content/database/schema/translations.md",slug:"/schema/translations",permalink:"/database/schema/translations",editUrl:"https://github.com/shabados/docs/edit/main/content/database/schema/translations.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1623523110,sidebar:"databaseSidebar",previous:{title:"Translation_Sources",permalink:"/database/schema/translation_sources"},next:{title:"Banis",permalink:"/database/schema/banis"}},c=[{value:"Columns",id:"columns",children:[{value:"<code>line_id</code>",id:"line_id",children:[]},{value:"<code>translation_source_id</code>",id:"translation_source_id",children:[]},{value:"<code>translation</code>",id:"translation",children:[]},{value:"<code>additional_information</code>",id:"additional_information",children:[]}]}],l={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Translations")," table contains the corresponding translation of a single line from a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/translation_sources"}),"translation source"),"."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"translation")," can be nullable."))),Object(i.b)("p",null,"If used, the ",Object(i.b)("inlineCode",{parentName:"p"},"additional_information")," is a serialized JSON string that must be deserialized with a ",Object(i.b)("inlineCode",{parentName:"p"},"JSON.parse()")," or equivalent, to support non-standard fields universally across different translation sources."),Object(i.b)("h2",{id:"columns"},"Columns"),Object(i.b)("h3",{id:"line_id"},Object(i.b)("inlineCode",{parentName:"h3"},"line_id")),Object(i.b)("p",null,"The unique identifier of the Gurbani line that the translation corresponds with."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"char(4)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Primary Key, ",Object(i.b)("br",null)," Foreign Key (",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/database/schema/lines#id"}),"Lines.id"),")")))),Object(i.b)("h3",{id:"translation_source_id"},Object(i.b)("inlineCode",{parentName:"h3"},"translation_source_id")),Object(i.b)("p",null,"The unique identifier of the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/translation_sources"}),"translation source")," that the translation originates from."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Primary Key, ",Object(i.b)("br",null)," Foreign Key (",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/database/schema/translation_sources#id"}),"Translation_Sources.id"),")")))),Object(i.b)("h3",{id:"translation"},Object(i.b)("inlineCode",{parentName:"h3"},"translation")),Object(i.b)("p",null,"The translation of the Gurbani line."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))),Object(i.b)("h3",{id:"additional_information"},Object(i.b)("inlineCode",{parentName:"h3"},"additional_information")),Object(i.b)("p",null,"Any additional, non-standard data about the translation. Stored as a serialized JSON object."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text/json"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))))}s.isMDXComponent=!0}}]);