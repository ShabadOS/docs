(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var p=b.a.createContext({}),o=function(e){var t=b.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=o(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=o(a),j=n,m=O["".concat(l,".").concat(j)]||O[j]||d[j]||r;return a?b.a.createElement(m,c(c({ref:t},p),{},{components:a})):b.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<r;p++)l[p]=a[p];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},186:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/schema-1f9c22ce6bbab249851dfb89bf208548.png"},65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),b=a(8),r=(a(0),a(128)),l={title:"Overview"},c={unversionedId:"schema/overview",id:"schema/overview",isDocsHomePage:!1,title:"Overview",description:"Shabad OS Database was engineered to provide relational structures for better consistency and flexibility.",source:"@site/content/database/schema/overview.md",slug:"/schema/overview",permalink:"/database/schema/overview",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/schema/overview.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1613850890,sidebar:"databaseSidebar",previous:{title:"Installing or accessing Shabad OS Database",permalink:"/database/installing-or-accessing"},next:{title:"Lines",permalink:"/database/schema/lines"}},i=[{value:"Tables",id:"tables",children:[{value:"Lines",id:"lines",children:[]},{value:"Line_Content",id:"line_content",children:[]},{value:"Line_Types",id:"line_types",children:[]},{value:"Shabads",id:"shabads",children:[]},{value:"Writers",id:"writers",children:[]},{value:"Compositions",id:"compositions",children:[]},{value:"Sources",id:"sources",children:[]},{value:"Sections",id:"sections",children:[]},{value:"Subsections",id:"subsections",children:[]},{value:"Languages",id:"languages",children:[]},{value:"Transliterations",id:"transliterations",children:[]},{value:"Translation_Sources",id:"translation_sources",children:[]},{value:"Translations",id:"translations",children:[]},{value:"Banis",id:"banis",children:[]},{value:"Bani_Lines",id:"bani_lines",children:[]}]}],p={toc:i};function o(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",{class:"lead"},"Shabad OS Database was engineered to provide relational structures for better consistency and flexibility."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Schema",src:a(186).default})),Object(r.b)("h2",{id:"tables"},"Tables"),Object(r.b)("h3",{id:"lines"},"Lines"),Object(r.b)("p",null,"Gurbani lines, linked to a ",Object(r.b)("inlineCode",{parentName:"p"},"Shabad"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"lines"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"source_page: 10, Line_Content")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Shabads"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Line_Types"))))),Object(r.b)("h3",{id:"line_content"},"Line_Content"),Object(r.b)("p",null,"Corresponding Gurmukhi related to the ",Object(r.b)("inlineCode",{parentName:"p"},"source")," of a ",Object(r.b)("inlineCode",{parentName:"p"},"line"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"line_content"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"SGPC: nmsqM mhMqy ]"),", ",Object(r.b)("inlineCode",{parentName:"td"},"source2: nmsqM mhMqy ]")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Sources"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Lines"))))),Object(r.b)("h3",{id:"line_types"},"Line_Types"),Object(r.b)("p",null,"List of possible line classifications. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"line_types"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"rahao"),", ",Object(r.b)("inlineCode",{parentName:"td"},"tuk")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))),Object(r.b)("h3",{id:"shabads"},"Shabads"),Object(r.b)("p",null,"Grouping of Gurbani ",Object(r.b)("inlineCode",{parentName:"p"},"Lines"),", with additional metadata. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"shabads"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Writer, Section, Subsection, Lines")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Lines"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Writers"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Sections"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Subsections"))))),Object(r.b)("h3",{id:"writers"},"Writers"),Object(r.b)("p",null,"Composers of ",Object(r.b)("inlineCode",{parentName:"p"},"Shabads"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"writers"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Guru Angad Dev Ji")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))),Object(r.b)("h3",{id:"compositions"},"Compositions"),Object(r.b)("p",null,"A composition of Gurbani ",Object(r.b)("inlineCode",{parentName:"p"},"Shabads"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"compositions"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Sri Guru Granth Sahib Ji")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))),Object(r.b)("h3",{id:"sources"},"Sources"),Object(r.b)("p",null,"A source of Gurbani . ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"sources"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"SGPC"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Budha Dal Mehron")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))),Object(r.b)("h3",{id:"sections"},"Sections"),Object(r.b)("p",null,"Grouping of ",Object(r.b)("inlineCode",{parentName:"p"},"Shabads")," within a single composition. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"sections"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Raag Gujri"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Siree Raag")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Compositions"))))),Object(r.b)("h3",{id:"subsections"},"Subsections"),Object(r.b)("p",null,"Sub-groupings within a single section. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"subsections"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Mahalaa 1")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Sections"))))),Object(r.b)("h3",{id:"languages"},"Languages"),Object(r.b)("p",null,"Available translation languages. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"languages"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"English")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))),Object(r.b)("h3",{id:"transliterations"},"Transliterations"),Object(r.b)("p",null,"Transliterations for Gurbani ",Object(r.b)("inlineCode",{parentName:"p"},"Lines")," in a given ",Object(r.b)("inlineCode",{parentName:"p"},"Language")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Source"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"transliterations"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"SGPC: har har har gun gaavo")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Lines"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Languages"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Sources"))))),Object(r.b)("h3",{id:"translation_sources"},"Translation_Sources"),Object(r.b)("p",null,"Translation source authors and languages for a single ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"translation_sources"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Language: English, Author: Sant Singh Khalsa")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Languages"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Sources"))))),Object(r.b)("h3",{id:"translations"},"Translations"),Object(r.b)("p",null,"Translations for Gurbani ",Object(r.b)("inlineCode",{parentName:"p"},"Lines")," from a translation source. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"translations"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"The Lord is One")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Lines"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Translation_Sources"))))),Object(r.b)("h3",{id:"banis"},"Banis"),Object(r.b)("p",null,"Named of available Banis. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"banis"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Jap Ji Sahib")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))),Object(r.b)("h3",{id:"bani_lines"},"Bani_Lines"),Object(r.b)("p",null,"Groupings of ",Object(r.b)("inlineCode",{parentName:"p"},"Lines")," to ",Object(r.b)("inlineCode",{parentName:"p"},"Banis"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"bani_lines"}),"Read more >")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dependency"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Banis"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Lines"))))))}o.isMDXComponent=!0}}]);