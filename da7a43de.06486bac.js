(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(a),h=n,u=b["".concat(i,".").concat(h)]||b[h]||p[h]||o;return a?r.a.createElement(u,s(s({ref:t},l),{},{components:a})):r.a.createElement(u,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},132:function(e,t,a){"use strict";t.a=a.p+"assets/images/shabados-about-url-48c4c652ea3e2e7178ced89f5d3530a3.png"},133:function(e,t,a){"use strict";t.a=a.p+"assets/images/ip-address-windows-task-manager-530df12ad364a5744bd4b921ec4fc4fa.png"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(8),o=(a(0),a(114)),i=a(132),s=a(133),c={title:"URL Endpoints"},l={unversionedId:"url-endpoints",id:"url-endpoints",isDocsHomePage:!1,title:"URL Endpoints",description:"This tutorial is for users wishing to know about Shabad OS being accessed through a web browser. This tutorial will show which pages are available as well as how to find the correct address to use in most modern web browsers.",source:"@site/content/tutorials/url-endpoints.md",slug:"/url-endpoints",permalink:"/tutorials/url-endpoints",editUrl:"https://github.com/shabados/docs/edit/dev/content/tutorials/url-endpoints.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1609867904,sidebar:"tutorialsSidebar",previous:{title:"Install ShabadOS for Desktop",permalink:"/tutorials/install"},next:{title:"Chromecast",permalink:"/tutorials/chromecast"}},d=[{value:"Concept",id:"concept",children:[]},{value:"Practical",id:"practical",children:[{value:"URL of the Host Device",id:"url-of-the-host-device",children:[]},{value:"Table of Endpoints",id:"table-of-endpoints",children:[]},{value:"Shabad OS URL Endpoints",id:"shabad-os-url-endpoints",children:[]}]},{value:"Example",id:"example",children:[]}],p={toc:d};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"This tutorial is for users wishing to know about Shabad OS being accessed through a web browser. This tutorial will show which pages are available as well as how to find the correct address to use in most modern web browsers."),Object(o.a)("h2",{id:"concept"},"Concept"),Object(o.a)("p",null,"Most of Shabad OS is actually a website with different URLs. The presenter/display, controller, overlay, and settings/configuration are all accessible by most modern web browsers. This lets users connect to Shabad OS from other devices like another laptop or smartphone. For example, it allows users to control projectors in a gurdwara with their smartphone. For another example, it allows users to use Shabad OS on one device and livestream the captions with a different computer."),Object(o.a)("h2",{id:"practical"},"Practical"),Object(o.a)("h3",{id:"url-of-the-host-device"},"URL of the Host Device"),Object(o.a)("p",null,"The device running Shabad OS has an IP address. In production, Shabad OS is available from port 1699 of this IP address. This combination of IP address and port can be used in most web browsers."),Object(o.a)("p",null,"If the same device is running Shabad OS, you may simply use ",Object(o.a)("inlineCode",{parentName:"p"},"localhost")," or ",Object(o.a)("inlineCode",{parentName:"p"},"127.0.0.1")," for the IP address (i.e. with port: ",Object(o.a)("inlineCode",{parentName:"p"},"http://localhost:1699/")," or ",Object(o.a)("inlineCode",{parentName:"p"},"http://127.0.0.1:1699/"),"). If this is the case, you do not need to find the device's IP address on the network."),Object(o.a)("p",null,"Otherwise, if you'd like to connect through the same network to Shabad OS being used on a different device, you may find the IP address of that device from ",Object(o.a)("em",{parentName:"p"},"Shabad OS > Settings > About")," or ",Object(o.a)("em",{parentName:"p"},"Shabad OS > Settings > Overlay"),"."),Object(o.a)("img",{src:i.a,alt:"Settings About URL",width:500}),Object(o.a)("p",null,"Find the IP Address in Shabad OS"),Object(o.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"Windows 10 users can view the ",Object(o.a)("em",{parentName:"p"},"Task Manager")," (either right click the taskbar or use the hotkey ctrl+shift+esc) to find the IP address. Use the ",Object(o.a)("em",{parentName:"p"},"Performance")," tab and select the Ethernet/Wi-Fi being used to connect to the network in the Task Manager."),Object(o.a)("img",{src:s.a,alt:"Task Manager",width:500}),Object(o.a)("p",{parentName:"div"},"Finding the IP Address on Windows 10"))),Object(o.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"macOS users can view ",Object(o.a)("em",{parentName:"p"},"System Preferences > Network")," (found from the apple icon in the menubar). Then select the Ethernet/Wi-Fi being used to connect to the network."))),Object(o.a)("h3",{id:"table-of-endpoints"},"Table of Endpoints"),Object(o.a)("p",null,"A breakdown of the terminology used for Shabad OS URLs tends to follow the pattern: ",Object(o.a)("inlineCode",{parentName:"p"},"http:// [IP ADDRESS] : [PORT] / [ENDPOINT]"),". In production, Shabad OS uses the port 1699 for stable and beta releases. For instance the base url (empty endpoint) could be ",Object(o.a)("inlineCode",{parentName:"p"},"http://localhost:1699/")," and the overlay url (overlay endpoint) could be ",Object(o.a)("inlineCode",{parentName:"p"},"http://localhost:1699/overlay"),". Users can test these endpoints, on the same machine running Shabad OS, with a web browser like Google Chrome or Mozilla Firefox."),Object(o.a)("h3",{id:"shabad-os-url-endpoints"},"Shabad OS URL Endpoints"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Endpoint"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"/"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The empty endpoint points to the default Shabad OS Presenter page (Users can get a controller from this page using the plus sign in the bottom right and then fullscreening the controller)")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"/controller/search?controllerOnly=true"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"A fullscreened controller in the search activity")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"/overlay"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"HTML file showing all relevant fields of currently activated line. Can be styled/customized by CSS. See xref:overlay:overlay.adoc","[Overlay]"," for an outline.")))),Object(o.a)("h2",{id:"example"},"Example"),Object(o.a)("p",null,"For example, if the device running Shabad OS has an IP address of ",Object(o.a)("inlineCode",{parentName:"p"},"192.168.0.128"),", then the url for the overlay endpoint would be ",Object(o.a)("inlineCode",{parentName:"p"},"http://192.168.0.128:1699/overlay"),". This could be used in a browser by any device on the same network. For example, allowing you to use Shabad OS from one device and livestream software from a second device. (Again, if the livestream software and Shabad OS were both running on the same device, you could have simply used ",Object(o.a)("inlineCode",{parentName:"p"},"http://localhost:1699/overlay")," as the URL)."))}b.isMDXComponent=!0}}]);