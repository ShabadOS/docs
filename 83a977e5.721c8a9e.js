(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(h,i(i({ref:t},l),{},{components:n})):o.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(8),a=(n(0),n(126)),c={title:"Using Google Chrome to Chromecast Shabad OS"},i={unversionedId:"guides/using-google-chrome-to-chromecast-shabad-os",id:"guides/using-google-chrome-to-chromecast-shabad-os",isDocsHomePage:!1,title:"Using Google Chrome to Chromecast Shabad OS",description:"Learn how to cast to any Chromecast on the same network.",source:"@site/content/presenter/guides/using-google-chrome-to-chromecast-shabad-os.md",slug:"/guides/using-google-chrome-to-chromecast-shabad-os",permalink:"/presenter/guides/using-google-chrome-to-chromecast-shabad-os",editUrl:"https://github.com/shabados/docs/edit/dev/content/presenter/guides/using-google-chrome-to-chromecast-shabad-os.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1623365801,sidebar:"presenterSidebar",previous:{title:"Importing an overlay theme",permalink:"/presenter/guides/importing-an-overlay-theme"},next:{title:"URL Endpoints",permalink:"/presenter/reference/url-endpoints"}},s=[{value:"Casting with Google Chrome",id:"casting-with-google-chrome",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",{class:"lead"},"Learn how to cast to any Chromecast on the same network."),Object(a.b)("h2",{id:"casting-with-google-chrome"},"Casting with Google Chrome"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"In the Shabad OS controller, click the cog/gear to open the ",Object(a.b)("strong",{parentName:"li"},"Settings")," window."),Object(a.b)("li",{parentName:"ol"},"Select ",Object(a.b)("strong",{parentName:"li"},"About")," in the left pane."),Object(a.b)("li",{parentName:"ol"},"Click on ",Object(a.b)("strong",{parentName:"li"},"Server Address")," to copy the URL to the system clipboard."),Object(a.b)("li",{parentName:"ol"},"Open Google Chrome and paste the Server Address into the browser's address bar."),Object(a.b)("li",{parentName:"ol"},"At the top right, open the ",Object(a.b)("strong",{parentName:"li"},"More")," menu (\u22ee)."),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("strong",{parentName:"li"},"Cast"),"."),Object(a.b)("li",{parentName:"ol"},"Choose the Chromecast device where you want to see the Shabad OS Presenter."),Object(a.b)("li",{parentName:"ol"},"When you're done, to the right of the address bar, click the ",Object(a.b)("strong",{parentName:"li"},"Cast")," icon (a rectangle with the wifi symbol on the bottom left), then ",Object(a.b)("strong",{parentName:"li"},"Stop casting"),".")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The ratio and resolution of the Google Chrome tab's window will be used on the Chromecasted device."))),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Full screen the Google Chrome browser tab by opening the ",Object(a.b)("strong",{parentName:"p"},"More")," menu (\u22ee), then selecting the ",Object(a.b)("strong",{parentName:"p"},"Fullscreen")," icon (\u26f6). Or simply use the F11 button on your keyboard."))))}b.isMDXComponent=!0}}]);