(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{123:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),i=a.n(r),o=a(126),l=a(138),c=a(22),s=a(131),u=a(25),d=a(201),m=a(147),h=a(177);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(c){r=!0,i=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function g(e){var t=i.a.useRef(null),a=b(i.a.useState(!1),2),n=a[0],r=a[1],o=b(i.a.useState(void 0),2),l=o[0],c=o[1],s=i.a.useCallback((function(){r(!0)}),[r]),f=i.a.useCallback((function(){r(!1)}),[r]),g=i.a.useCallback((function(e){r(!0),c(e.key)}),[r,c]);return Object(h.a)({isOpen:n,onOpen:s,onClose:f,onInput:g,searchButtonRef:t}),i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{onClick:s,ref:t}),n&&Object(u.createPortal)(i.a.createElement(m.a,p({},e,{initialScrollY:window.scrollY,initialQuery:l,onClose:f})),document.body))}var v=a(103),y=a.n(v),k=[{title:"Database",description:"A digital representation of Sikh Bani and other Panthic texts with a public logbook of sangat-sourced corrections.",link:"database"},{title:"Viewer",description:"An online viewer of the Shabad OS Database. Can be used for issuing inaccuracies between source material and digital content.",link:"viewer"},{title:"Presenter",description:"Desktop app for presenting the Shabad OS Database on projectors, TVs, and live streams.",link:"presenter"},{title:"Mobile",description:"Android and iOS app for searching, navigating, and presenting the Shabad OS database. Currently a work in progress.",link:"mobile"},{title:"Gurmukhi Utils",description:"General utilities for working with Gurmukhi text data.",link:"gurmukhi-utils"},{title:"Theme Tool",description:"Web app that generates Overlays for Shabad OS Presenter",link:"theme-tool"}],w=[{title:"Learn more about the Database",description:"At the heart of Shabad OS is an open source database containing the Sikh philosophy. Learning more about this philosophy and sharing it with others is our mission at Shabad OS.",link:"database"},{title:"Discover the Database online through your browser",description:"You can view the contents, translations, and other notes in the Database using our Viewer. In addition, each individual line has it's metre calculated. The Viewer may also be used to share discrepancies between the source material and digital data.",link:"viewer"},{title:"Installing the Presenter on Windows / macOS",description:"You can present the Database at gurdwaras, camps/retreats, and virtually through live captions on platforms like YouTube.",link:"/presenter/guides/installing-shabad-os-presenter"}],E=[{title:"Check out Gurmukhi Utils",description:"Gurmukhi Utils is a library for converting, analyzing, and testing gurmukhi strings.",link:"gurmukhi-utils"},{title:"Meet our community",description:"Ongoing development, project management, and marketing is made possible by the support and dedication of volunteers.",link:"community"},{title:"Get comfortable with contributing",description:"This document caters to developers or programmers that wish to write code and directly contribute to the source code of Shabad OS.",link:"community/how-to-contribute"},{title:"Learn about our coding guidelines",description:"We choose to use spaces, not tabs.",link:"community/coding-guidelines"},{title:"Get support & feedback",description:"Shabad OS is an open, community-driven, and volunteer project.",link:"community/support-and-feedback"}],S=function(e){var t=e.title,a=e.description,n=e.link;return i.a.createElement("div",{className:Object(o.a)("col col--12",y.a.feature)},i.a.createElement(s.a,{to:n,className:"product_card"},i.a.createElement("div",{className:"card_content"},i.a.createElement("h3",null,t),i.a.createElement("p",null,a)),i.a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",className:"svg-icon chevron-rounded-icon",viewBox:"0 0 14 25"},i.a.createElement("path",{"data-v-a76e93d8":"",d:"M1,24.4a.9.9,0,0,0,.7-.3L13.4,13a1,1,0,0,0,0-1.6L1.7.3A.9.9,0,0,0,1,0,.9.9,0,0,0,0,1a.9.9,0,0,0,.3.7l11,10.5L.3,22.7a.9.9,0,0,0-.3.7A.9.9,0,0,0,1,24.4Z"}))))},O=function(e){var t=e.title,a=e.description,n=e.link;return i.a.createElement("div",null,i.a.createElement("p",null,a,i.a.createElement("br",null),i.a.createElement(s.a,{to:n},t," >")))};t.default=function(){var e=Object(c.default)().siteConfig,t=void 0===e?{}:e;return i.a.createElement(l.a,{title:"Products",description:"User guides, quick-reference guides, developer/contributor best practices for ShabadOS"},i.a.createElement("header",{className:Object(o.a)("hero hero--primary",y.a.heroBanner)},i.a.createElement("div",{className:"home container"},i.a.createElement("h1",{className:"hero__title"},t.title),i.a.createElement("p",{className:"hero__subtitle"},t.tagline),i.a.createElement("div",null,i.a.createElement(g,{apiKey:"008a4ddf459e4f41ceddc60d6baebc6f",indexName:"shabados"})))),i.a.createElement("main",null,i.a.createElement("div",{className:"home container padding-vert--lg"},i.a.createElement("h1",null,"Product Directory"),i.a.createElement("p",{className:"lead"},"Explore our guides and articles by product."),i.a.createElement("div",{className:"row"},k.map((function(e){return i.a.createElement(S,Object(n.a)({key:e.title},e))}))),i.a.createElement("div",{className:"row padding-vert--lg"},i.a.createElement("div",{className:"col col--6"},i.a.createElement("h2",null,"Getting Started"),w.map((function(e){return i.a.createElement(O,Object(n.a)({key:e.title},e))}))),i.a.createElement("div",{className:"col col--6"},i.a.createElement("h2",null,"Featured Articles"),E.map((function(e){return i.a.createElement(O,Object(n.a)({key:e.title},e))})))))))}}}]);