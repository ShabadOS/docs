(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(8),i=(a(0),a(114)),r={title:"Create a Custom Overlay Theme",sidebar_label:"Create a Custom Theme"},c={unversionedId:"overlay/create-custom-theme",id:"overlay/create-custom-theme",isDocsHomePage:!1,title:"Create a Custom Overlay Theme",description:"This tutorial is for users wishing to customize the appearance of the overlay. This tutorial will go through an example of copying and modifying an existing theme.",source:"@site/content/tutorials/overlay/create-custom-theme.md",slug:"/overlay/create-custom-theme",permalink:"/tutorials/overlay/create-custom-theme",editUrl:"https://github.com/shabados/docs/edit/dev/content/tutorials/overlay/create-custom-theme.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1613686556,sidebar_label:"Create a Custom Theme",sidebar:"tutorialsSidebar",previous:{title:"Add Live Streaming Captioning",permalink:"/tutorials/overlay/add-livestream-captioning"}},l=[{value:"Concept",id:"concept",children:[]},{value:"Practical",id:"practical",children:[{value:"Step 1: Open an existing CSS file",id:"step-1-open-an-existing-css-file",children:[]},{value:"Step 2: Modifying CSS files",id:"step-2-modifying-css-files",children:[]},{value:"Step 3: Inspect the Overlay URL",id:"step-3-inspect-the-overlay-url",children:[]}]}],s={toc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"This tutorial is for users wishing to customize the appearance of the overlay. This tutorial will go through an example of copying and modifying an existing theme."),Object(i.a)("h2",{id:"concept"},"Concept"),Object(i.a)("p",null,"The overlay endpoint can be manipulated by styling the html with CSS. This customization is done in a markup language similar to HTML. The layout, colors, and fonts can all be described in various ways using CSS. With advanced mastery of CSS, one could even add content to the HTML using CSS."),Object(i.a)("h2",{id:"practical"},"Practical"),Object(i.a)("p",null,"The style files end in extension ",Object(i.a)("inlineCode",{parentName:"p"},".css")," (e.g. ",Object(i.a)("inlineCode",{parentName:"p"},"default.css"),"). These files are located in the ",Object(i.a)("inlineCode",{parentName:"p"},"overlay")," folder based on the operating system of the device running Shabad OS:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Windows: ",Object(i.a)("inlineCode",{parentName:"li"},"%appdata%\\Shabad OS\\overlay")),Object(i.a)("li",{parentName:"ul"},"macOS: ",Object(i.a)("inlineCode",{parentName:"li"},"~/Library/Application Support/Shabad OS/overlay"))),Object(i.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"Use a file manager to see the ",Object(i.a)("inlineCode",{parentName:"p"},".css")," files. For Windows type in the address bar of File Explorer. For macOS use the global menu item ",Object(i.a)("em",{parentName:"p"},"Go > Go To Folder")," (",Object(i.a)("em",{parentName:"p"},"cmd+shift+g"),") in the Finder."))),Object(i.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"By default the OS hides file extensions like ",Object(i.a)("inlineCode",{parentName:"p"},".txt"),", ",Object(i.a)("inlineCode",{parentName:"p"},".exe"),", and ",Object(i.a)("inlineCode",{parentName:"p"},".css"),". It is helpful to see these file extensions when working with CSS files, especially on macOS which will sometimes change the file extension to something like ",Object(i.a)("inlineCode",{parentName:"p"},".txt")," or ",Object(i.a)("inlineCode",{parentName:"p"},".html")," on it's own."))),Object(i.a)("h3",{id:"step-1-open-an-existing-css-file"},"Step 1: Open an existing CSS file"),Object(i.a)("p",null,"Any plain text editor can open CSS files. On Windows there is ",Object(i.a)("em",{parentName:"p"},"Notepad")," and on macOS there is ",Object(i.a)("em",{parentName:"p"},"Text Edit"),". Once you've opened one of the Shabad OS Overlay Theme CSS files, you will see lines of code such as:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),":root {\n  --background-color: #19203c;\n}\n\n.app {\n  width: 100vw;\n  text-align: center;\n}\n\n.overlay {\n  padding: 1vh 1vw;\n  background-color: var(--background-color);\n  min-height: 9vh;\n}\n")),Object(i.a)("p",null,'At a higher level there are descriptions for root, app, and overlay. Inside root there is a variable defined as "background-color". Inside the overlay class we\'ve given it this background color via the variable. There are units of measure for width and padding in percentages of viewport (i.e. 100% viewport width, 1% viewport height, 1% viewport width), where the viewport is the usable space of the browser window.'),Object(i.a)("h3",{id:"step-2-modifying-css-files"},"Step 2: Modifying CSS files"),Object(i.a)("p",null,"First copy any of the existing themes that you would like to modify. The file name will be used as the name of the theme in Shabad OS. Select the newly copied overlay theme from the dropdown in ",Object(i.a)("em",{parentName:"p"},"Shabad OS > Settings > Overlay"),"."),Object(i.a)("p",null,"Open the CSS file in a text editor. Colors and their opacity are defined by values outlined ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"}),"here"),"."),Object(i.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"Try using a color picker or a website like ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://duckduckgo.com/?q=color+picker&t=ffab&ia=answer"}),"DuckDuckGo")," to change the background color of the overlay theme."))),Object(i.a)("p",null,"There are tutorials to learn CSS without any prior experience from Mozilla's handy developer docs: ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS"}),"https://developer.mozilla.org/en-US/docs/Web/CSS"),"."),Object(i.a)("h3",{id:"step-3-inspect-the-overlay-url"},"Step 3: Inspect the Overlay URL"),Object(i.a)("p",null,"Open the overlay url in Google Chrome or Mozilla Firefox (see ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"/tutorials/url-endpoints"}),"endpoints")," for help). Both browsers have an inspect tool that lets you see the html and modify the CSS in a sandbox. If you've found something you like, you can add it to your CSS file for persistence. Otherwise if you've made a mistake and need to start over, simply refresh the page."),Object(i.a)("p",null,"See how to inspect the overlay url in your browser:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},'"',Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://developers.google.com/web/tools/chrome-devtools/"}),"Chrome DevTools"),'" for Google Chrome'),Object(i.a)("li",{parentName:"ul"},'"',Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Open_the_Inspector"}),"Open the Inspector"),'" for Mozilla Firefox')),Object(i.a)("p",null,"This inspector can show you what your CSS theme file is changing. Choosing a color from within the inspect tool can show how it impacts the rest of the theme."))}p.isMDXComponent=!0},114:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,u=h["".concat(r,".").concat(m)]||h[m]||d[m]||i;return a?o.a.createElement(u,c(c({ref:t},s),{},{components:a})):o.a.createElement(u,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);