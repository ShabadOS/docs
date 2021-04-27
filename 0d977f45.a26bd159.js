(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{125:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,h=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return r?a.a.createElement(h,c(c({ref:t},s),{},{components:r})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),i=(r(0),r(125)),o={title:"Viewer",slug:"/"},c={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Viewer",description:"An online viewer of the Shabad OS Database.",source:"@site/content/viewer/index.md",slug:"/",permalink:"/viewer/",editUrl:"https://github.com/shabados/docs/edit/dev/content/viewer/index.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1619556793,sidebar:"viewerSidebar",next:{title:"Proofreading",permalink:"/viewer/guides/proofreading"}},l=[{value:"Using the Viewer",id:"using-the-viewer",children:[]},{value:"Proofreading with the Viewer",id:"proofreading-with-the-viewer",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",{class:"lead"},"An online viewer of the Shabad OS Database."),Object(i.b)("p",null,"The Shabad OS Viewer makes it easier to see what is available in the Shabad OS Database. It is designed to be used for proofreading and research purposes."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://viewer.shabados.com/"}),"Discover what the Shabad OS Database has inside >")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/viewer/guides/proofreading"}),"Learn how to proofread the Database for improved accuracy >")),Object(i.b)("h2",{id:"using-the-viewer"},"Using the Viewer"),Object(i.b)("p",null,"When first visiting the website, you will be shown a list of compositions that can be read. After choosing a composition, it is possible to navigate by clicking the arrows or dragging the trackbar/seekbar at the bottom of the screen. It is also possible to change lines using the ",Object(i.b)("inlineCode",{parentName:"p"},"<Tab>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<Shift>+<Tab>")," hotkeys or they left and right arrow keys on the keyboard."),Object(i.b)("p",null,"Clicking on a line (or hitting ",Object(i.b)("inlineCode",{parentName:"p"},"<Enter>")," on your keyboard) will open an in-depth view containing information from the Database and using the ",Object(i.b)("inlineCode",{parentName:"p"},"gurmukhi-utils")," library for that line. The information includes punjabi translations and their English counterparts (courtesy of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://translate.google.com/"}),"Google Translate"),")."),Object(i.b)("p",null,"When viewing a line, it is also possible to click on any of the individual words (indicated with a blue underline) to open a new tab/window pointing at a dictionary result (courtesy of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.srigranth.org/servlet/gurbani.dictionary?Param="}),"Sri Granth"),")."),Object(i.b)("p",null,"Lastly, it is possible to submit proofreading differences for any line by clicking on the ",Object(i.b)("strong",{parentName:"p"},"More")," menu (\u22ee) in the top right corner."),Object(i.b)("h2",{id:"proofreading-with-the-viewer"},"Proofreading with the Viewer"),Object(i.b)("p",null,"The Viewer is actually used internally by the Shabad OS team to improve the accuracy of the Database. See the video below to get an idea of how easy it is. If you're interested in learning more, please check out our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/viewer/guides/proofreading"}),"Proofreading")," article."),Object(i.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/5ZI8nYS6jVY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);