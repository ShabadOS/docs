(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?r.a.createElement(d,l(l({ref:t},o),{},{components:n})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(129)),c={title:"Line_Types"},l={unversionedId:"schema/line_types",id:"schema/line_types",isDocsHomePage:!1,title:"Line_Types",description:"The Line_Types table contains the possible classifications of each line.",source:"@site/content/database/schema/line_types.md",slug:"/schema/line_types",permalink:"/database/schema/line_types",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/schema/line_types.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1614610723,sidebar:"databaseSidebar",previous:{title:"Line_Content",permalink:"/database/schema/line_content"},next:{title:"Shabads",permalink:"/database/schema/shabads"}},b=[{value:"Columns",id:"columns",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>name_english</code>",id:"name_english",children:[]},{value:"<code>name_gurmukhi</code>",id:"name_gurmukhi",children:[]}]}],o={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Line_Types")," table contains the possible classifications of each ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/database/schema/lines"}),"line"),"."),Object(i.b)("p",null,"This can be useful for filtering out ",Object(i.b)("em",{parentName:"p"},"rahao")," lines from searches, or reordering the ",Object(i.b)("em",{parentName:"p"},"manglacharan")," if desired."),Object(i.b)("h2",{id:"columns"},"Columns"),Object(i.b)("h3",{id:"id"},Object(i.b)("inlineCode",{parentName:"h3"},"id")),Object(i.b)("p",null,"The unique identifier of the line type."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Primary Key")))),Object(i.b)("h3",{id:"name_english"},Object(i.b)("inlineCode",{parentName:"h3"},"name_english")),Object(i.b)("p",null,"The name of the line type, in English."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(i.b)("h3",{id:"name_gurmukhi"},Object(i.b)("inlineCode",{parentName:"h3"},"name_gurmukhi")),Object(i.b)("p",null,"The name of the line type, in Gurmukhi, ASCII representation."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not Null")))))}p.isMDXComponent=!0}}]);