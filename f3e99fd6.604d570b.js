(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return h})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return O})),a.d(t,"default",(function(){return j}));var n=a(3),r=a(8),i=(a(0),a(125)),o=a(132),l=a(133),s=a.p+"assets/images/settings-overlay-url-d6aeb5ba50d07e445d4e8254911d3e3a.png",b=a.p+"assets/images/add-browser-obs-studio-c9da629002a3f9287081c0b239a7d077.png",c=a.p+"assets/images/add-browser-vmix-53f9bf5f962809f9dd4bbb8e178d9952.png",p=a.p+"assets/images/wirecast-add-web-page-520b2617709d4d8dee56e04e653d469d.png",m=a.p+"assets/images/wirecast-source-properties-d24e9cb7a013567e615ea0d9858bbdd8.png",d=a.p+"assets/images/wirecast-shot-layer-properties-e773bf61530fd96862d74f7439192733.png",h={title:"Configuring Live Stream Captions"},u={unversionedId:"guides/configuring-live-stream-captions",id:"guides/configuring-live-stream-captions",isDocsHomePage:!1,title:"Configuring Live Stream Captions",description:"Learn how to set up popular live stream software with captions using Shabad OS's Overlays.",source:"@site/content/presenter/guides/configuring-live-stream-captions.md",slug:"/guides/configuring-live-stream-captions",permalink:"/presenter/guides/configuring-live-stream-captions",editUrl:"https://github.com/shabados/docs/edit/dev/content/presenter/guides/configuring-live-stream-captions.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1619556793,sidebar:"presenterSidebar",previous:{title:"Installing Shabad OS Presenter",permalink:"/presenter/guides/installing-shabad-os-presenter"},next:{title:"Integrating closed captioning in Zoom Meetings",permalink:"/presenter/guides/integrating-closed-captioning-in-zoom-meetings"}},O=[{value:"Finding the Overlay URL for Shabad OS",id:"finding-the-overlay-url-for-shabad-os",children:[]},{value:"Adding a browser to the live stream",id:"adding-a-browser-to-the-live-stream",children:[]},{value:"Troubleshoot",id:"troubleshoot",children:[]}],g={toc:O};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",{class:"lead"},"Learn how to set up popular live stream software with captions using Shabad OS's Overlays."),Object(i.b)("h2",{id:"finding-the-overlay-url-for-shabad-os"},"Finding the Overlay URL for Shabad OS"),Object(i.b)("p",null,"In ",Object(i.b)("strong",{parentName:"p"},"Shabad OS"),", use the cog/gear icon in the controller to open ",Object(i.b)("strong",{parentName:"p"},"Settings"),". Choose ",Object(i.b)("strong",{parentName:"p"},"Overlay")," in the left pane, then click the ",Object(i.b)("strong",{parentName:"p"},"Overlay URL")," to copy the URL to your system clipboard."),Object(i.b)("img",{src:s,width:500}),Object(i.b)("h2",{id:"adding-a-browser-to-the-live-stream"},"Adding a browser to the live stream"),Object(i.b)("p",null,"In the live stream software, add a browser to the scene. If the browser is not sized to match the live stream's resolution correctly, it may result in blurry text."),Object(i.b)(o.a,{defaultValue:"obs-studio",values:[{label:"OBS Studio",value:"obs-studio"},{label:"vMix",value:"vmix"},{label:"Wirecast",value:"wirecast"},{label:"Streamlabs (iOS)",value:"streamlabs"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"obs-studio",mdxType:"TabItem"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Finding the Base (Canvas) Resolution")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Use the ",Object(i.b)("strong",{parentName:"li"},"File")," menu, then click ",Object(i.b)("strong",{parentName:"li"},"Settings"),"."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Video")," in the left pane."),Object(i.b)("li",{parentName:"ol"},"Note down the ",Object(i.b)("strong",{parentName:"li"},"Base (Canvas) Resolution"),"."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"OK")," or ",Object(i.b)("strong",{parentName:"li"},"Cancel")," to close the window.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Adding a browser to the scene")),Object(i.b)("img",{src:b,alt:"OBS Studio",width:500}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Click the ",Object(i.b)("strong",{parentName:"li"},"+")," button in ",Object(i.b)("strong",{parentName:"li"},"Sources")," to add a ",Object(i.b)("strong",{parentName:"li"},"Browser")," to the scene."),Object(i.b)("li",{parentName:"ol"},"Fill in the ",Object(i.b)("strong",{parentName:"li"},"URL")," with the Overlay URL from Shabad OS."),Object(i.b)("li",{parentName:"ol"},"Fill the ",Object(i.b)("strong",{parentName:"li"},"Width")," and ",Object(i.b)("strong",{parentName:"li"},"Height"),' to match the Base (Canvas) Resolution. The resolution is displayed width first, height second. E.g. "1920x1080" means width=1920 and height=1080.'),Object(i.b)("li",{parentName:"ol"},"Delete any text in ",Object(i.b)("strong",{parentName:"li"},"Custom CSS"),"."))),Object(i.b)(l.a,{value:"vmix",mdxType:"TabItem"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Finding the Output Size")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open ",Object(i.b)("strong",{parentName:"li"},"Settings"),", then click on ",Object(i.b)("strong",{parentName:"li"},"Display")),Object(i.b)("li",{parentName:"ol"},"Note down the ",Object(i.b)("strong",{parentName:"li"},"Output Size")),Object(i.b)("li",{parentName:"ol"},"Close the window.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Adding a web browser to the input bar")),Object(i.b)("img",{src:c,alt:"vMix",width:500}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In the Main Window, use the ",Object(i.b)("strong",{parentName:"li"},"Add Input")," menu, then click ",Object(i.b)("strong",{parentName:"li"},"More"),"."),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("strong",{parentName:"li"},"Web Browser")," in the left pane."),Object(i.b)("li",{parentName:"ol"},"Fill in the ",Object(i.b)("strong",{parentName:"li"},"URL")," with the Overlay URL from Shabad OS."),Object(i.b)("li",{parentName:"ol"},"Fill the ",Object(i.b)("strong",{parentName:"li"},"Width")," and ",Object(i.b)("strong",{parentName:"li"},"Height"),' to match the Output Size. The resolution is displayed width first, height second. E.g. "1920x1080" means width=1920 and height=1080.'))),Object(i.b)(l.a,{value:"wirecast",mdxType:"TabItem"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Finding the Canvas Size")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Use the ",Object(i.b)("strong",{parentName:"li"},"Output")," menu, then select the ",Object(i.b)("strong",{parentName:"li"},"Canvas Size")," sub-menu."),Object(i.b)("li",{parentName:"ol"},"Note down the ",Object(i.b)("strong",{parentName:"li"},"Canvas Size"),".")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Adding a web page shot layer to the master layer")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click the ",Object(i.b)("strong",{parentName:"p"},"Plus Button")," (+) on the first-most/top-most layer in the shot list to open the Add Shot menu. There may be a prompt to install Flash -- it is not required for Shabad OS."),Object(i.b)("img",{src:p,alt:"Wirecast add web page",width:500})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the ",Object(i.b)("strong",{parentName:"p"},"Network")," shot category from the left pane.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("strong",{parentName:"p"},"Web Page"),", then click ",Object(i.b)("strong",{parentName:"p"},"Add"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("strong",{parentName:"p"},"Edit Shot"),", select the ",Object(i.b)("strong",{parentName:"p"},"Source Properties")," tab."),Object(i.b)("img",{src:m,alt:"Wirecast source properties",width:500})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Fill in the ",Object(i.b)("strong",{parentName:"p"},"Address")," with the Overlay URL from Shabad OS.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Fill the ",Object(i.b)("strong",{parentName:"p"},"Video Width")," and ",Object(i.b)("strong",{parentName:"p"},"Video Height"),' fields to match the Canvas Size. The resolution is displayed width first, height second. E.g. "1920x1080" means width=1920 and height=1080.')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("strong",{parentName:"p"},"Edit Shot"),", select the ",Object(i.b)("strong",{parentName:"p"},"Shot Layer Properties")," tab."),Object(i.b)("img",{src:d,alt:"Wirecast shot layer properties",width:500})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Set the ",Object(i.b)("strong",{parentName:"p"},"Scale")," slider to 100%.")))),Object(i.b)(l.a,{value:"streamlabs",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},'This only works on the iOS version of Streamlabs until the developers fix an issue requiring "https" links on their Android app. This requires an iPhone or iPad in addition to the laptop or desktop that is running the Presenter app.'))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Adding a URL layer to the Streamlabs Editor")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Tap the ",Object(i.b)("strong",{parentName:"li"},"Menu Button")," (=) on the top left."),Object(i.b)("li",{parentName:"ol"},"In ",Object(i.b)("strong",{parentName:"li"},"Advanced Mode"),", tap ",Object(i.b)("strong",{parentName:"li"},"Editor"),"."),Object(i.b)("li",{parentName:"ol"},"Tap ",Object(i.b)("strong",{parentName:"li"},"Layers")," on the top right."),Object(i.b)("li",{parentName:"ol"},"Tap the ",Object(i.b)("strong",{parentName:"li"},"Plus Button")," (+) on the top right."),Object(i.b)("li",{parentName:"ol"},"Tap ",Object(i.b)("strong",{parentName:"li"},"Add a custom item"),"."),Object(i.b)("li",{parentName:"ol"},"Tap ",Object(i.b)("strong",{parentName:"li"},"Add a URL"),"."),Object(i.b)("li",{parentName:"ol"},"Fill in the ",Object(i.b)("strong",{parentName:"li"},"URL")," with the Overlay URL from Shabad OS.")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Though the hint text in Streamlabs mentions ",Object(i.b)("inlineCode",{parentName:"p"},"https")," be sure to use ",Object(i.b)("inlineCode",{parentName:"p"},"http")," instead for the URL from the Shabad OS Presenter. For example, if the Shabad OS Presenter says the URL is ",Object(i.b)("inlineCode",{parentName:"p"},"192.168.1.50:1699/overlay"),", then type ",Object(i.b)("inlineCode",{parentName:"p"},"http://192.168.1.50:1699/overlay")," into Streamlabs."))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Tap ",Object(i.b)("strong",{parentName:"li"},"Add"),"."),Object(i.b)("li",{parentName:"ol"},"Resize the layer. See ",Object(i.b)("strong",{parentName:"li"},"Tips for resizing")," below."),Object(i.b)("li",{parentName:"ol"},"Tap ",Object(i.b)("strong",{parentName:"li"},"Save")," in the top left corner.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tips for resizing the layer")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Move the layer by tapping and dragging the center of the layer."),Object(i.b)("li",{parentName:"ul"},"Resize the layer in the Streamlabs Editor by tapping and dragging either the squares in the corners or the lines on each side of the layer."),Object(i.b)("li",{parentName:"ul"},"An easy way to full screen a layer is to move the layer to the bottom left and then use the top right corner to resize it all the way to the top right."),Object(i.b)("li",{parentName:"ul"},"When switching from landscape to portrait mode, it is possible to reset all the layers to their original size by tapping ",Object(i.b)("strong",{parentName:"li"},"Reset")," in the top right corner. If the ",Object(i.b)("strong",{parentName:"li"},"Reset")," button is being covered by the Overlay layer, it might be easier to simply delete and recreate the Overlay layer."),Object(i.b)("li",{parentName:"ul"},"Play with different heights to control the font size. Decreasing the height of the Shabad OS Overlay will make the font sizes smaller. This is especially helpful for portrait mode.")))),Object(i.b)("h2",{id:"troubleshoot"},"Troubleshoot"),Object(i.b)("p",null,"If there is no Overlay URL in Shabad OS settings, please read ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/presenter/reference/url-endpoints"}),"URL Endpoints"),"."))}j.isMDXComponent=!0},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,h=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return a?r.a.createElement(h,l(l({ref:t},b),{},{components:a})):r.a.createElement(h,l({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},126:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},128:function(e,t,a){"use strict";var n=a(0),r=a(129);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},129:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},132:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(128),o=a(126),l=a(55),s=a.n(l),b=37,c=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,p=e.values,m=e.groupId,d=e.className,h=Object(i.a)(),u=h.tabGroupChoices,O=h.setTabGroupChoices,g=Object(n.useState)(l),j=g[0],f=g[1],N=n.Children.toArray(e.children);if(null!=m){var v=u[m];null!=v&&v!==j&&p.some((function(e){return e.value===v}))&&f(v)}var y=function(e){f(e),null!=m&&O(m,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case c:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(N.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},133:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);