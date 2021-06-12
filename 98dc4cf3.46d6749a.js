(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,O=u["".concat(c,".").concat(d)]||u[d]||p[d]||b;return n?r.a.createElement(O,i(i({ref:t},o),{},{components:n})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<b;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),b=(n(0),n(126)),c={title:"Subsections"},i={unversionedId:"schema/subsections",id:"schema/subsections",isDocsHomePage:!1,title:"Subsections",description:"The Subsections table contains a list of all the different subsections, per single section. Every subsection must belong to a single section.",source:"@site/content/database/schema/subsections.md",slug:"/schema/subsections",permalink:"/database/schema/subsections",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/schema/subsections.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1623523045,sidebar:"databaseSidebar",previous:{title:"Sections",permalink:"/database/schema/sections"},next:{title:"Compositions",permalink:"/database/schema/compositions"}},l=[{value:"Columns",id:"columns",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>section_id</code>",id:"section_id",children:[]},{value:"<code>name_english</code>",id:"name_english",children:[]},{value:"<code>name_gurmukhi</code>",id:"name_gurmukhi",children:[]},{value:"<code>start_page</code>",id:"start_page",children:[]},{value:"<code>end_page</code>",id:"end_page",children:[]}]}],o={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"Subsections")," table contains a list of all the different subsections, per single ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/database/schema/sections"}),"section"),". Every subsection must belong to a single ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/database/schema/sections"}),"section"),"."),Object(b.b)("p",null,"To determine which ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/database/schema/sources"}),"source")," that a subsection is from, retrieve the source of the section that the subsection belongs to, using ",Object(b.b)("inlineCode",{parentName:"p"},"section_id"),"."),Object(b.b)("h2",{id:"columns"},"Columns"),Object(b.b)("h3",{id:"id"},Object(b.b)("inlineCode",{parentName:"h3"},"id")),Object(b.b)("p",null,"The unique identifier of the subsection."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Primary Key")))),Object(b.b)("h3",{id:"section_id"},Object(b.b)("inlineCode",{parentName:"h3"},"section_id")),Object(b.b)("p",null,"The unique identifier of the ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/database/schema/sections"}),"section")," that the section belongs to."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Foreign Key (",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/database/schema/sections#id"}),"Sections.id"),"), ",Object(b.b)("br",null)," Not Null")))),Object(b.b)("h3",{id:"name_english"},Object(b.b)("inlineCode",{parentName:"h3"},"name_english")),Object(b.b)("p",null,"The name of the subsection, in English."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"name_gurmukhi"},Object(b.b)("inlineCode",{parentName:"h3"},"name_gurmukhi")),Object(b.b)("p",null,"The name of the subsection, in Gurmukhi, ASCII representation."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"start_page"},Object(b.b)("inlineCode",{parentName:"h3"},"start_page")),Object(b.b)("p",null,'The physical "page" from the source that this subsection begins on.'),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"end_page"},Object(b.b)("inlineCode",{parentName:"h3"},"end_page")),Object(b.b)("p",null,'The physical "page" from the source that this subsection ends on.'),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not Null")))))}s.isMDXComponent=!0}}]);