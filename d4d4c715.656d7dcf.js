(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{114:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var a=i.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},b=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),d=n,h=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return t?i.a.createElement(h,l(l({ref:a},s),{},{components:t})):i.a.createElement(h,l({ref:a},s))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=b;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},97:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return p}));var n=t(3),i=t(8),r=(t(0),t(114)),o={title:"Overview",slug:"/usage"},l={unversionedId:"usage/index",id:"usage/index",isDocsHomePage:!1,title:"Overview",description:"This section outlines methods of using of the database, and goes through some examples.",source:"@site/content/database/usage/index.md",slug:"/usage",permalink:"/database/usage",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/usage/index.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1613686556,sidebar:"databaseSidebar",previous:{title:"Schema",permalink:"/database/schema"},next:{title:"Common SQL Query Examples",permalink:"/database/usage/queries"}},c=[{value:"General Browsing/Querying",id:"general-browsingquerying",children:[]},{value:"Offline Applications - SQLite",id:"offline-applications---sqlite",children:[]},{value:"Offline Applications - JavaScript",id:"offline-applications---javascript",children:[]},{value:"Online Applications - GurbaniNow API",id:"online-applications---gurbaninow-api",children:[]}],s={toc:c};function p(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("p",null,"This section outlines methods of using of the database, and goes through some examples."),Object(r.a)("p",null,"There are several methods of using the database, depending on your purpose:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#general-browsingquerying"}),"General Browsing/Querying")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#offline-applications---sqlite"}),"Offline Applications - SQLite")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#offline-applications---javascript"}),"Offline Applications - JavaScript")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#online-applications---gurbaninow-api"}),"Online Applications - GurbaniNow API"))),Object(r.a)("h2",{id:"general-browsingquerying"},"General Browsing/Querying"),Object(r.a)("p",null,"If you're interested in the contents of the database, start by downloading the latest\n",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShabadOS/database/releases"}),"SQLite database release"),", and an SQLite browser such as ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://dbeaver.io/"}),"DBeaver"),"."),Object(r.a)("p",null,"Once installed, open the ",Object(r.a)("inlineCode",{parentName:"p"},"Database > New Connection")," dialog. Select the ",Object(r.a)("inlineCode",{parentName:"p"},"SQLite")," type from the list, and press ",Object(r.a)("inlineCode",{parentName:"p"},"Next"),". On the following screen, press the ",Object(r.a)("inlineCode",{parentName:"p"},"Browse")," button and select the Shabad OS database file that you previously downloaded, and proceed through the next screens until wizard is complete."),Object(r.a)("p",null,"A new database entry will appear under the ",Object(r.a)("inlineCode",{parentName:"p"},"Database Navigator")," tab, and double-clicking this will open the database. Expand the ",Object(r.a)("inlineCode",{parentName:"p"},"tables")," option to view all the tables in the database, and double-click on any of the tables to view the data. You may also run some of the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#Offline-Applications-SQLite"}),"SQL queries")," and explore the dataset further."),Object(r.a)("p",null,"Some common query examples can be seen at ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"usage/queries"}),"SQLite Querying"),"."),Object(r.a)("h2",{id:"offline-applications---sqlite"},"Offline Applications - SQLite"),Object(r.a)("p",null,"If you're building a mobile app or desktop application, you'll likely want an offline copy of the database, unless you're certain your users will always be connected to the internet."),Object(r.a)("p",null,"You can download the latest ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShabadOS/database/releases"}),"SQLite database release")," and query against it using your language's SQLite library."),Object(r.a)("div",{className:"admonition admonition-info alert alert--info"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"This option will mean that you will have to check the Shabad OS Database release page for updates yourself. If you are building an application in JavaScript, please see the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#Offline-Applications-JavaScript"}),"Offline Applications - JavaScript")," section below."))),Object(r.a)("p",null,"Some common query examples can be seen at ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"usage/queries"}),"SQLite Querying"),"."),Object(r.a)("h2",{id:"offline-applications---javascript"},"Offline Applications - JavaScript"),Object(r.a)("p",null,"The offline JavaScript API is perfect for ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org"}),"Node")," applications. Once installed using ",Object(r.a)("inlineCode",{parentName:"p"},"npm install @shabados/database"),", the module can be used to query the database using the fluid interface that ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"http://vincit.github.io/objection.js/"}),"Objection.js")," and ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://knexjs.org/"}),"Knex")," provide."),Object(r.a)("p",null,"The module exposes an ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"http://vincit.github.io/objection.js/#models"}),"Objection.js Model")," for each table in the database, and can automatically fetch any relations."),Object(r.a)("p",null,"A quick example of querying an ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"http://vincit.github.io/objection.js/#models"}),"Objection.js Model")," can be seen below. Each query must begin with a ",Object(r.a)("inlineCode",{parentName:"p"},".query()")," method call, which will return a ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://knexjs.org/#Builder"}),"Knex Query Builder object")," that can be used to build up the query by chaining method calls."),Object(r.a)("p",null,"This kicks off a jQuery-like chain, with which you can call additional query builder methods as needed to construct the query, eventually calling any of the interface methods, to either convert toString, or execute the query, returning the results as a promise, callback, or stream."),Object(r.a)("p",null,"Let's start by fetching all the Gurbani sources that the database has:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Import the Sources Model from the module\nconst { Sources } = require('@shabados/database')\n\nSources.query() // Returns a Knex Query Builder\n  .then((results) => console.log(results)) // Results are returned as a promise\n")),Object(r.a)("p",null,"ES7 async/await can also be used with the results: ",Object(r.a)("inlineCode",{parentName:"p"},"await Sources.query()"),"."),Object(r.a)("h2",{id:"online-applications---gurbaninow-api"},"Online Applications - GurbaniNow API"),Object(r.a)("p",null,"The ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gurbaninow/api"}),"GurbaniNow API")," is a fast and powerful JSON API for querying Gurbani content. GurbaniNow and Shabad OS have teamed up to provide the Shabad OS database through GurbaniNow's popular API."),Object(r.a)("p",null,"The ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gurbaninow/api"}),"GurbaniNow API")," is perfect for online applications and websites that wish to integrate Gurbani, without needing writing their own queries and code around the Shabad OS database."),Object(r.a)("p",null,"Visit ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gurbaninow/api"}),"their repository")," for more information."))}p.isMDXComponent=!0}}]);