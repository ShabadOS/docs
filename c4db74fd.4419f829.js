(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(128)),b={title:"Bani_Lines"},c={unversionedId:"schema/bani_lines",id:"schema/bani_lines",isDocsHomePage:!1,title:"Bani_Lines",description:"The Bani_Lines table connects one Bani to many Lines.",source:"@site/content/database/schema/bani_lines.md",slug:"/schema/bani_lines",permalink:"/database/schema/bani_lines",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/schema/bani_lines.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1613855861,sidebar:"databaseSidebar",previous:{title:"Banis",permalink:"/database/schema/banis"},next:{title:"Overview",permalink:"/database/usage"}},l=[{value:"Columns",id:"columns",children:[{value:"<code>line_id</code>",id:"line_id",children:[]},{value:"<code>bani_id</code>",id:"bani_id",children:[]},{value:"<code>line_group</code>",id:"line_group",children:[]}]}],o={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Bani_Lines")," table connects one ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"banis"}),"Bani")," to many ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"lines"}),"Lines"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"line_group")," field is slightly more complicated, as it orders collections of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"lines"}),"lines"),", but not the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"lines"}),"lines")," themselves."))),Object(i.b)("h2",{id:"columns"},"Columns"),Object(i.b)("h3",{id:"line_id"},Object(i.b)("inlineCode",{parentName:"h3"},"line_id")),Object(i.b)("p",null,"The 4 letter unique identifier of a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"lines"}),"Line"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"char(4)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Primary Key, ",Object(i.b)("br",null)," Foreign Key (",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"lines#id"}),"Lines.id"),")")))),Object(i.b)("h3",{id:"bani_id"},Object(i.b)("inlineCode",{parentName:"h3"},"bani_id")),Object(i.b)("p",null,"The unique identifier of the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"banis"}),"Bani")," that contains this line."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Primary Key, ",Object(i.b)("br",null)," Foreign Key (",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"banis#id"}),"Banis.id"),")")))),Object(i.b)("h3",{id:"line_group"},Object(i.b)("inlineCode",{parentName:"h3"},"line_group")),Object(i.b)("p",null,"A partition within the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"banis"}),"Bani")," to group ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"lines"}),"Lines"),". Order by this field, (and the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"lines#order_id"}),"Lines.order_id"),", if joining) to get the correct order of the groups (and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"lines"}),"Lines")," within the groups)."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Primary Key")))))}p.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=p(n),O=a,m=s["".concat(b,".").concat(O)]||s[O]||d[O]||i;return n?r.a.createElement(m,c(c({ref:t},o),{},{components:n})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var o=2;o<i;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);