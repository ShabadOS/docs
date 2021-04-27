(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),h=l(a),u=n,p=h["".concat(o,".").concat(u)]||h[u]||d[u]||i;return a?r.a.createElement(p,s(s({ref:t},b),{},{components:a})):r.a.createElement(p,s({ref:t},b))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(8),i=(a(0),a(125)),o={title:"Database",slug:"/"},s={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Database",description:"A digital representation of Sikh Bani and other Panthic texts with a public logbook of sangat-sourced corrections",source:"@site/content/database/index.md",slug:"/",permalink:"/database/",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/index.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1619556793,sidebar:"databaseSidebar",next:{title:"Source Material",permalink:"/database/source-material"}},c=[{value:"Partners",id:"partners",children:[]},{value:"Technology",id:"technology",children:[]},{value:"Versioning",id:"versioning",children:[]}],b={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",{class:"lead"},"A digital representation of Sikh Bani and other Panthic texts with a public logbook of sangat-sourced corrections"),Object(i.b)("p",null,"The Shabad OS Database contains published materials from around the world including SGPC published Sri Guru Granth Sahib ji, Taksaal published Sri Dasam Granth ji, and SikhNet published English translations by Dr. Sant Singh Khalsa. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/database/source-material"}),"Read a full list of published sources used in the database >")),Object(i.b)("p",null,"Previous efforts to digitize Sikh banis and panthic texts have mostly been individual efforts. This database being open-source has allowed dozens of individuals to contribute to it's content and accuracy. Thousands of corrections small and large have been made to ensure a continuously accurate database to truly reflect the original published sources. As discrepancies between the originals and digital are found, they can be fixed by anyone editing the plain text files containing the data and opening a pull request to shabados/database (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/viewer/guides/proofreading"}),"learn more here >"),"). Once the PR is accepted into the main branch, database files are automatically generated and can be reflected in online APIs. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/shabados/database/tree/main/data"}),"Check out the plain text json files >")),Object(i.b)("p",null,"Since the project is open-source, it consequently has reduced the need to duplicate efforts among various parties. There is a central place to update all published sources of bani and panthic texts. There is no point of contention on what should be corrected or not. If it is written a certain way in a published source (e.g. a SGPC published Sri Guru Granth Sahib ji from volumes 1-4 of Shabadaarth circa 2009-2012), then it should be reflected that way in the digital database."),Object(i.b)("p",null,"If there are multiple, reputable sources of bani that should be added, they can be. Various sources can be provided for the same bani. For example the gurbani for jaap sahib found in the SGPC published gutka and Damdami Taksaal published nitnem steek can be present simultaneously in the database. Which source is used can be chosen by developers or provided as a choice to the end-user by a developer."),Object(i.b)("p",null,"Furthermore, if any organization were to attempt paath bhed (critical analysis/revision) on any Sikh composition (e.g. Sri Guru Granth Sahib ji), they could import any number of authentic sources (e.g. authenticated hand-written saroops) to the Shabad OS Database for ease of comparison (each hand-written saroop would exist as it's own version of gurbani, across which one could note any variations in lines)."),Object(i.b)("p",null,"In this sense, the Shabad OS Database is providing a single platform, a single point of truth, for all reputable publications of gurbani and panthic texts. All of which is free to be consumed, analyzed, and researched by developers and end-users in variously generated database files and online APIs."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/database/installing-or-accessing"}),"Start using the Shabad OS Database as the source of truth for your applications >")),Object(i.b)("h2",{id:"partners"},"Partners"),Object(i.b)("p",null,"GurbaniNow works on the Shabad OS database to ensure high-accuracy of gurbani. Subsequently they use the database to power their online website and API, serving millions of end-users across the globe. Checkout their ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://gurbaninow.com"}),"website"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.gurbaninow.com"}),"API"),", and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GurbaniNow"}),"GitHub"),"."),Object(i.b)("p",null,"Basics of Sikhi uses the Shabad OS Database for their YouTube / Instagram videos. They are also providing their own English Translations of Sri Guru Granth Sahib ji (with more to come), for everyone utilizing the Database to read. So people viewing the Shabad OS Presenter or GurbaniNow website will be able to read the Basics of Sikhi English translations. Check out their ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/basicsofsikhi"}),"YouTube"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.instagram.com/basicsofsikhi"}),"Instagram"),", and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.basicsofsikhi.com"}),"website"),"."),Object(i.b)("h2",{id:"technology"},"Technology"),Object(i.b)("p",null,"It was paramount to us that we be able to track changes to the database in an easy way. Git provides this for plain text, but not so much for binary database files. It allows any programmer or developer to see changes made by history or author. Git is the most widely used source-code management tool for software developers."),Object(i.b)("p",null,"Since most people don't use the data in plain-text, we need a way to generate the various database files programmers and developers would use (e.g. MySQL, MariaDB, SQLite). We do this with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/knex/knex"}),"knex"),', "a SQL query builder that is flexible, portable, and fun to use!"'),Object(i.b)("p",null,"Since 2017, we have been pioneering a new approach to digitizing Sikh bani and panthic texts. As far as we know this is the first and only of it's kind in the Sikh sphere to leverage these technologies. We believe this will become the de facto standard and are proud to already provide this data to millions of end-users."),Object(i.b)("h2",{id:"versioning"},"Versioning"),Object(i.b)("p",null,"Frequent updates to the database are published according to semantic versioning via ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://npmjs.com/package/@shabados/database"}),"npm")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/shabados/database/releases"}),"GitHub releases"),". This means that you can safely update the database without worrying about the schema changing, according to the version. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://semver.org/"}),"semantic versioning")," for more information."),Object(i.b)("p",null,"We are currently on major version 4, but are actively working on version 5, which will be a breaking change for existing apps. Once version 5 is ready to be released, we will provide documentation on how to migrate from v4."))}l.isMDXComponent=!0}}]);