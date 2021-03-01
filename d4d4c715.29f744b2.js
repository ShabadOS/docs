(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(8),r=(a(0),a(129)),o={title:"Overview",slug:"/usage"},l={unversionedId:"usage/index",id:"usage/index",isDocsHomePage:!1,title:"Overview",description:"This section outlines methods of using of the database, and goes through some examples.",source:"@site/content/database/usage/index.md",slug:"/usage",permalink:"/database/usage",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/usage/index.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1614610723,sidebar:"databaseSidebar",previous:{title:"Bani_Lines",permalink:"/database/schema/bani_lines"},next:{title:"Common SQL Query Examples",permalink:"/database/usage/queries"}},c=[{value:"General Browsing/Querying",id:"general-browsingquerying",children:[]},{value:"Offline Applications - SQLite",id:"offline-applications---sqlite",children:[]},{value:"Offline Applications - JavaScript",id:"offline-applications---javascript",children:[]},{value:"Online Applications - GurbaniNow API",id:"online-applications---gurbaninow-api",children:[]}],s={toc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section outlines methods of using of the database, and goes through some examples."),Object(r.b)("p",null,"There are several methods of using the database, depending on your purpose:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#general-browsingquerying"}),"General Browsing/Querying")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#offline-applications---sqlite"}),"Offline Applications - SQLite")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#offline-applications---javascript"}),"Offline Applications - JavaScript")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#online-applications---gurbaninow-api"}),"Online Applications - GurbaniNow API"))),Object(r.b)("h2",{id:"general-browsingquerying"},"General Browsing/Querying"),Object(r.b)("p",null,"If you're interested in the contents of the database, start by downloading the latest\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShabadOS/database/releases"}),"SQLite database release"),", and an SQLite browser such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://dbeaver.io/"}),"DBeaver"),"."),Object(r.b)("p",null,"Once installed, open the ",Object(r.b)("inlineCode",{parentName:"p"},"Database > New Connection")," dialog. Select the ",Object(r.b)("inlineCode",{parentName:"p"},"SQLite")," type from the list, and press ",Object(r.b)("inlineCode",{parentName:"p"},"Next"),". On the following screen, press the ",Object(r.b)("inlineCode",{parentName:"p"},"Browse")," button and select the Shabad OS database file that you previously downloaded, and proceed through the next screens until wizard is complete."),Object(r.b)("p",null,"A new database entry will appear under the ",Object(r.b)("inlineCode",{parentName:"p"},"Database Navigator")," tab, and double-clicking this will open the database. Expand the ",Object(r.b)("inlineCode",{parentName:"p"},"tables")," option to view all the tables in the database, and double-click on any of the tables to view the data. You may also run some of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#Offline-Applications-SQLite"}),"SQL queries")," and explore the dataset further."),Object(r.b)("p",null,"Some common query examples can be seen at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/database/usage/queries"}),"SQLite Querying"),"."),Object(r.b)("h2",{id:"offline-applications---sqlite"},"Offline Applications - SQLite"),Object(r.b)("p",null,"If you're building a mobile app or desktop application, you'll likely want an offline copy of the database, unless you're certain your users will always be connected to the internet."),Object(r.b)("p",null,"You can download the latest ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShabadOS/database/releases"}),"SQLite database release")," and query against it using your language's SQLite library."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This option will mean that you will have to check the Shabad OS Database release page for updates yourself. If you are building an application in JavaScript, please see the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#Offline-Applications-JavaScript"}),"Offline Applications - JavaScript")," section below."))),Object(r.b)("p",null,"Some common query examples can be seen at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/database/usage/queries"}),"SQLite Querying"),"."),Object(r.b)("h2",{id:"offline-applications---javascript"},"Offline Applications - JavaScript"),Object(r.b)("p",null,"The offline JavaScript API is perfect for ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org"}),"Node")," applications. Once installed using ",Object(r.b)("inlineCode",{parentName:"p"},"npm install @shabados/database"),", the module can be used to query the database using the fluid interface that ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://vincit.github.io/objection.js/"}),"Objection.js")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://knexjs.org/"}),"Knex")," provide."),Object(r.b)("p",null,"The module exposes an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://vincit.github.io/objection.js/#models"}),"Objection.js Model")," for each table in the database, and can automatically fetch any relations."),Object(r.b)("p",null,"A quick example of querying an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://vincit.github.io/objection.js/#models"}),"Objection.js Model")," can be seen below. Each query must begin with a ",Object(r.b)("inlineCode",{parentName:"p"},".query()")," method call, which will return a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://knexjs.org/#Builder"}),"Knex Query Builder object")," that can be used to build up the query by chaining method calls."),Object(r.b)("p",null,"This kicks off a jQuery-like chain, with which you can call additional query builder methods as needed to construct the query, eventually calling any of the interface methods, to either convert toString, or execute the query, returning the results as a promise, callback, or stream."),Object(r.b)("p",null,"Let's start by fetching all the Gurbani sources that the database has:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Import the Sources Model from the module\nconst { Sources } = require('@shabados/database')\n\nSources.query() // Returns a Knex Query Builder\n  .then((results) => console.log(results)) // Results are returned as a promise\n")),Object(r.b)("p",null,"ES7 async/await can also be used with the results: ",Object(r.b)("inlineCode",{parentName:"p"},"await Sources.query()"),"."),Object(r.b)("h2",{id:"online-applications---gurbaninow-api"},"Online Applications - GurbaniNow API"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gurbaninow/api"}),"GurbaniNow API")," is a fast and powerful JSON API for querying Gurbani content. GurbaniNow and Shabad OS have teamed up to provide the Shabad OS database through GurbaniNow's popular API."),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gurbaninow/api"}),"GurbaniNow API")," is perfect for online applications and websites that wish to integrate Gurbani, without needing writing their own queries and code around the Shabad OS database."),Object(r.b)("p",null,"Visit ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gurbaninow/api"}),"their repository")," for more information."))}b.isMDXComponent=!0},129:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return a?i.a.createElement(h,l(l({ref:t},s),{},{components:a})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);