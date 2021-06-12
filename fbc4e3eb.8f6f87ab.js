(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),b=(a(0),a(126)),i={title:"Shabads"},c={unversionedId:"schema/shabads",id:"schema/shabads",isDocsHomePage:!1,title:"Shabads",description:"The Shabads table is used to group the Lines together, and provide additional metadata about those Lines.",source:"@site/content/database/schema/shabads.md",slug:"/schema/shabads",permalink:"/database/schema/shabads",editUrl:"https://github.com/shabados/docs/edit/main/content/database/schema/shabads.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1623531374,sidebar:"databaseSidebar",previous:{title:"Line_Types",permalink:"/database/schema/line_types"},next:{title:"Writers",permalink:"/database/schema/writers"}},l=[{value:"Columns",id:"columns",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>writer_id</code>",id:"writer_id",children:[]},{value:"<code>section_id</code>",id:"section_id",children:[]},{value:"<code>subsection_id</code>",id:"subsection_id",children:[]},{value:"<code>sttm_id</code>",id:"sttm_id",children:[]},{value:"<code>composition_id</code>",id:"composition_id",children:[]},{value:"<code>order_id</code>",id:"order_id",children:[]}]}],d={toc:l};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"Shabads")," table is used to group the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/lines"}),Object(b.b)("inlineCode",{parentName:"a"},"Lines"))," together, and provide additional metadata about those ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/lines"}),Object(b.b)("inlineCode",{parentName:"a"},"Lines")),"."),Object(b.b)("p",null,"Every Shabad must have a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/compositions"}),Object(b.b)("inlineCode",{parentName:"a"},"composition")),", ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/writers"}),Object(b.b)("inlineCode",{parentName:"a"},"writer")),", and ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/sections"}),Object(b.b)("inlineCode",{parentName:"a"},"section")),"."),Object(b.b)("p",null,"The content is unordered by default, and must be ordered by ",Object(b.b)("inlineCode",{parentName:"p"},"order_id"),"."),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"id")," is a three-letter, immutable identifier that will refer to the same Shabad across database versions."),Object(b.b)("h2",{id:"columns"},"Columns"),Object(b.b)("h3",{id:"id"},Object(b.b)("inlineCode",{parentName:"h3"},"id")),Object(b.b)("p",null,"A unique identifier for the Shabad. Permanent and will never change."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"char(3)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Primary Key")))),Object(b.b)("h3",{id:"writer_id"},Object(b.b)("inlineCode",{parentName:"h3"},"writer_id")),Object(b.b)("p",null,"The unique identifier of the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/writers"}),"writer")," of the Shabad."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Foreign Key (",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/database/schema/writers#id"}),"Writers.id"),"), ",Object(b.b)("br",null)," Not Null")))),Object(b.b)("h3",{id:"section_id"},Object(b.b)("inlineCode",{parentName:"h3"},"section_id")),Object(b.b)("p",null,"The unique identifier of the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/sections"}),"section")," that the Shabad belongs to."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Foreign Key (",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/database/schema/sections#id"}),"Sections.id"),"), ",Object(b.b)("br",null)," Not Null")))),Object(b.b)("h3",{id:"subsection_id"},Object(b.b)("inlineCode",{parentName:"h3"},"subsection_id")),Object(b.b)("p",null,"The unique identifier of the subsection that the Shabad belongs to."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Foreign Key (",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/database/schema/subsections#id"}),"Subsections.id"),")")))),Object(b.b)("h3",{id:"sttm_id"},Object(b.b)("inlineCode",{parentName:"h3"},"sttm_id")),Object(b.b)("p",null,"The unique identifier of the equivalent Shabad within the SikhiToTheMax 2 database."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))),Object(b.b)("h3",{id:"composition_id"},Object(b.b)("inlineCode",{parentName:"h3"},"composition_id")),Object(b.b)("p",null,"The Gurbani ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/database/schema/compositions"}),"composition")," that the Shabad belongs to."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Foreign Key (",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/database/schema/sources#id"}),"Sources.id"),"), ",Object(b.b)("br",null)," Not Null")))),Object(b.b)("h3",{id:"order_id"},Object(b.b)("inlineCode",{parentName:"h3"},"order_id")),Object(b.b)("p",null,"The correct order of Shabads. Order by this field to fetch shabads in the correct order."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))))}o.isMDXComponent=!0},126:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),o=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=o(a),O=n,j=s["".concat(i,".").concat(O)]||s[O]||p[O]||b;return a?r.a.createElement(j,c(c({ref:t},d),{},{components:a})):r.a.createElement(j,c({ref:t},d))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<b;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);