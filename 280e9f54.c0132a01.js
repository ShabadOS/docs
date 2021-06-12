(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return h}));var r=n(3),a=n(8),o=(n(0),n(125)),i=n(132),c=n(133),l=n.p+"assets/images/shabados-about-url-48c4c652ea3e2e7178ced89f5d3530a3.png",s=n.p+"assets/images/ip-address-windows-task-manager-530df12ad364a5744bd4b921ec4fc4fa.png",b={title:"URL Endpoints"},u={unversionedId:"reference/url-endpoints",id:"reference/url-endpoints",isDocsHomePage:!1,title:"URL Endpoints",description:"Shabad OS has a web URL for each page in the desktop app. You can view the display, controller, settings, and more through web URLs anywhere on the same network.",source:"@site/content/presenter/reference/url-endpoints.md",slug:"/reference/url-endpoints",permalink:"/presenter/reference/url-endpoints",editUrl:"https://github.com/shabados/docs/edit/dev/content/presenter/reference/url-endpoints.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1616867098,sidebar:"presenterSidebar",previous:{title:"Using Google Chrome to Chromecast Shabad OS",permalink:"/presenter/guides/using-google-chrome-to-chromecast-shabad-os"}},d=[{value:"Finding the URL of the server",id:"finding-the-url-of-the-server",children:[]},{value:"Imagining an example scenario",id:"imagining-an-example-scenario",children:[]},{value:"Troubleshooting the IP address",id:"troubleshooting-the-ip-address",children:[]}],p={toc:d};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",{class:"lead"},"Shabad OS has a web URL for each page in the desktop app. You can view the display, controller, settings, and more through web URLs anywhere on the same network."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Endpoint"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"/"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The empty endpoint points to the default Shabad OS Presenter page (Users can get a controller from this page using the plus sign in the bottom right and then fullscreening the controller)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"/controller/search?controllerOnly=true"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A fullscreened controller in the search activity")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"/overlay"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"HTML file showing all relevant fields of currently activated line. Can be styled/customized by CSS. See the ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/presenter/guides/configuring-live-stream-captions"}),"Overlay")," article for more information.")))),Object(o.b)("h2",{id:"finding-the-url-of-the-server"},"Finding the URL of the server"),Object(o.b)("p",null,"The device running Shabad OS has an IP address. If the same device is running Shabad OS, you may simply use ",Object(o.b)("inlineCode",{parentName:"p"},"localhost")," or ",Object(o.b)("inlineCode",{parentName:"p"},"127.0.0.1")," for the IP address (i.e. with port: ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:1699/")," or ",Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:1699/"),")."),Object(o.b)("p",null,"If you'd like to connect through the same network on a different device, you may find the IP address of the Shabad OS server's device by clicking ",Object(o.b)("strong",{parentName:"p"},"About")," in the Shabad OS Presenter's Settings window."),Object(o.b)("img",{src:l,alt:"Settings About URL",width:500}),Object(o.b)("h2",{id:"imagining-an-example-scenario"},"Imagining an example scenario"),Object(o.b)("p",null,"For example, if the device running Shabad OS has an IP address of ",Object(o.b)("inlineCode",{parentName:"p"},"192.168.0.128"),", then the url for the overlay endpoint would be ",Object(o.b)("inlineCode",{parentName:"p"},"http://192.168.0.128:1699/overlay"),". This could be used in a browser by any device on the same network. Allowing someone to use Shabad OS from one device and live stream from another."),Object(o.b)("h2",{id:"troubleshooting-the-ip-address"},"Troubleshooting the IP address"),Object(o.b)("p",null,"In case you cannot find the IP address using the Shabad OS desktop app, use the built-in system tools for your OS."),Object(o.b)(i.a,{defaultValue:"win",values:[{label:"Windows 10",value:"win"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"win",mdxType:"TabItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the ",Object(o.b)("strong",{parentName:"li"},"Task Manager")," by either right-clicking the taskbar or using the hotkey ",Object(o.b)("inlineCode",{parentName:"li"},"ctrl+shift+esc"),"."),Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("strong",{parentName:"li"},"Performance")," tab, then select the Ethernet/Wi-Fi being used to connect to the network.")),Object(o.b)("img",{src:s,alt:"Task Manager",width:500})),Object(o.b)(c.a,{value:"mac",mdxType:"TabItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("strong",{parentName:"li"},"System Preferences")," from the Apple icon in the menubar."),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"Network"),", then select the Ethernet/Wi-Fi being used to connect to the network.")))))}h.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,h=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},126:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},128:function(e,t,n){"use strict";var r=n(0),a=n(129);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},129:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},132:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(128),i=n(126),c=n(55),l=n.n(c),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,d=e.groupId,p=e.className,h=Object(o.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,O=Object(r.useState)(c),g=O[0],j=O[1],y=r.Children.toArray(e.children);if(null!=d){var v=m[d];null!=v&&v!==g&&u.some((function(e){return e.value===v}))&&j(v)}var w=function(e){j(e),null!=d&&f(d,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},133:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);