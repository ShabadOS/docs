(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{129:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,O=s["".concat(c,".").concat(m)]||s[m]||d[m]||b;return a?r.a.createElement(O,i(i({ref:t},o),{},{components:a})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),b=(a(0),a(129)),c={title:"Sections"},i={unversionedId:"schema/sections",id:"schema/sections",isDocsHomePage:!1,title:"Sections",description:"The Sections table contains a list of all the different sections, per composition. Every section must have a single composition.",source:"@site/content/database/schema/sections.md",slug:"/schema/sections",permalink:"/database/schema/sections",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/schema/sections.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1616778309,sidebar:"databaseSidebar",previous:{title:"Writers",permalink:"/database/schema/writers"},next:{title:"Subsections",permalink:"/database/schema/subsections"}},l=[{value:"Columns",id:"columns",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>name_english</code>",id:"name_english",children:[]},{value:"<code>name_gurmukhi</code>",id:"name_gurmukhi",children:[]},{value:"<code>description</code>",id:"description",children:[]},{value:"<code>start_page</code>",id:"start_page",children:[]},{value:"<code>end_page</code>",id:"end_page",children:[]},{value:"<code>composition_id</code>",id:"composition_id",children:[]}]}],o={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"Sections")," table contains a list of all the different sections, per ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/compositions"}),"composition"),". Every section must have a single ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/compositions"}),"composition"),"."),Object(b.b)("h2",{id:"columns"},"Columns"),Object(b.b)("h3",{id:"id"},Object(b.b)("inlineCode",{parentName:"h3"},"id")),Object(b.b)("p",null,"The unique identifier of the section."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Primary Key")))),Object(b.b)("h3",{id:"name_english"},Object(b.b)("inlineCode",{parentName:"h3"},"name_english")),Object(b.b)("p",null,"The name of the section, in English."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"name_gurmukhi"},Object(b.b)("inlineCode",{parentName:"h3"},"name_gurmukhi")),Object(b.b)("p",null,"The name of the section, in Gurmukhi, ASCII representation."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"description"},Object(b.b)("inlineCode",{parentName:"h3"},"description")),Object(b.b)("p",null,"The description of the section."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"start_page"},Object(b.b)("inlineCode",{parentName:"h3"},"start_page")),Object(b.b)("p",null,'The physical "page" from the source that this section begins on.'),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"end_page"},Object(b.b)("inlineCode",{parentName:"h3"},"end_page")),Object(b.b)("p",null,'The physical "page" from the source that this section ends on.'),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"composition_id"},Object(b.b)("inlineCode",{parentName:"h3"},"composition_id")),Object(b.b)("p",null,"The unique identifier of the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/compositions"}),"composition")," that this section belongs to."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Foreign Key (",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/database/schema/compositions#id"}),"Compositions.id"),"), ",Object(b.b)("br",null)," Not Null")))))}p.isMDXComponent=!0}}]);