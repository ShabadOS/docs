(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),j=n,O=u["".concat(l,".").concat(j)]||u[j]||o[j]||b;return a?r.a.createElement(O,c(c({ref:t},p),{},{components:a})):r.a.createElement(O,c({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<b;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),b=(a(0),a(128)),l={title:"Gurmukhi Utils",slug:"/"},c={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Gurmukhi Utils",description:"Gurmukhi Utils is a library for converting, analyzing, and testing gurmukhi strings. Try gurmukhi-utils in your browser.",source:"@site/content/gurmukhi-utils/index.md",slug:"/",permalink:"/gurmukhi-utils/",editUrl:"https://github.com/shabados/docs/edit/dev/content/gurmukhi-utils/index.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1613853649},i=[{value:"Usage",id:"usage",children:[]},{value:"People",id:"people",children:[]},{value:"API",id:"api",children:[{value:"countSyllables(text) \u21d2 <code>number</code>",id:"countsyllablestext-\u21d2-number",children:[]},{value:"firstLetters(line) \u21d2 <code>String</code>",id:"firstlettersline-\u21d2-string",children:[]},{value:"isGurmukhi(text, exhaustive) \u21d2 <code>boolean</code>",id:"isgurmukhitext-exhaustive-\u21d2-boolean",children:[]},{value:"stripAccents(text) \u21d2 <code>String</code>",id:"stripaccentstext-\u21d2-string",children:[]},{value:"stripEndings(text) \u21d2 <code>String</code>",id:"stripendingstext-\u21d2-string",children:[]},{value:"stripVishraams(text, options) \u21d2 <code>String</code>",id:"stripvishraamstext-options-\u21d2-string",children:[]},{value:"toAscii(text) \u21d2 <code>String</code>",id:"toasciitext-\u21d2-string",children:[]},{value:"toEnglish(line) \u21d2 <code>String</code>",id:"toenglishline-\u21d2-string",children:[]},{value:"toHindi(text) \u21d2 <code>String</code>",id:"tohinditext-\u21d2-string",children:[]},{value:"toShahmukhi(text) \u21d2 <code>String</code>",id:"toshahmukhitext-\u21d2-string",children:[]},{value:"toSyllabicSymbols(text) \u21d2 <code>String</code>",id:"tosyllabicsymbolstext-\u21d2-string",children:[]},{value:"toUnicode(text) \u21d2 <code>String</code>",id:"tounicodetext-\u21d2-string",children:[]}]}],p={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Gurmukhi Utils is a library for converting, analyzing, and testing gurmukhi strings. ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://npm.runkit.com/gurmukhi-utils"}),"Try ",Object(b.b)("inlineCode",{parentName:"a"},"gurmukhi-utils")," in your browser.")),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("p",null,"Gurmukhi Utils is available as the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://npmjs.org/package/gurmukhi-utils"}),Object(b.b)("inlineCode",{parentName:"a"},"gurmukhi-utils")," package")," on ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm"),"."),Object(b.b)("p",null,"Additionally, the package is available for web use via ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://unpkg.com/"}),"unpkg CDN"),":"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),'<script src="https://unpkg.com/gurmukhi-utils"><\/script>\n')),Object(b.b)("h2",{id:"people"},"People"),Object(b.b)("p",null,"The original author and current lead maintainer of Gurmukhi Utils is Harjot Singh (",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/harjot1singh"}),"@harjot1singh"),")."),Object(b.b)("p",null,'"Thank you!" to ',Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/shabados/gurmukhi-utils/graphs/contributors"}),"all the volunteers")," who've already contributed to Gurmukhi Utils. Additional thanks to:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Preetcharan S (",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.instagram.com/nerdsingh/"}),"@NerdSingh"),") and Basics of Sikhi for english pronunciation guidelines"),Object(b.b)("li",{parentName:"ul"},"Dr. Gurpreet S Lehal (Punjabi University, Patiala) for his work in Gurmukhi-Hindi (Devanagri) and Gurmukhi-Shahmukhi (Urdu) transliteration")),Object(b.b)("h2",{id:"api"},"API"),Object(b.b)("h3",{id:"countsyllablestext-\u21d2-number"},"countSyllables(text) \u21d2 ",Object(b.b)("code",null,"number")),Object(b.b)("p",null,"Calculates the number of syllables according to Sanskrit prosody, Pingala, Matra/Meter/Morae"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("code",null,"number")," - An integer adding up all the 1's (laghu/light/short) and 2's (guru/heavy/long)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The string to analyze")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"countSyllables('\u0a2a\u0a4d\u0a30\u0a2d\u0a42 \u0a2a\u0a4d\u0a30\u0a47\u0a2e\u0a40 \u0a2a\u0a5c\u0a4d\u0a39 \u0a1a\u0a5c\u0a4d\u0a39 \u0a26\u0a4d\u0a35\u0a48\u0a24')\n// expected output: 14\n")),Object(b.b)("h3",{id:"firstlettersline-\u21d2-string"},"firstLetters(line) \u21d2 ",Object(b.b)("code",null,"String")),Object(b.b)("p",null,"Generates the first letters for a unicode Gurmukhi,\nHindi transliteration, or English transliteration string.\nIncludes any end-word vishraams, and line-end characters."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("code",null,"String")," - The first letters of each word in the provided Gurmukhi line."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"line"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The line to generate the first letters for.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")," ",Object(b.b)("em",{parentName:"p"},"(Gurmukhi first letters)")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"firstLetters('\u0a38\u0a2c\u0a26\u0a3f \u0a2e\u0a30\u0a48. \u0a38\u0a4b \u0a2e\u0a30\u0a3f \u0a30\u0a39\u0a48; \u0a2b\u0a3f\u0a30\u0a3f. \u0a2e\u0a30\u0a48 \u0a28, \u0a26\u0a42\u0a1c\u0a40 \u0a35\u0a3e\u0a30 \u0965') // => \u0a38\u0a2e.\u0a38\u0a2e\u0a30;\u0a2b.\u0a2e\u0a28,\u0a26\u0a35\u0965\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")," ",Object(b.b)("em",{parentName:"p"},"(Hindi first letters)")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"firstLetters('\u0917\u0941\u0930\u092e\u0941\u0916\u093f \u0932\u093e\u0927\u093e \u092e\u0928\u092e\u0941\u0916\u093f \u0917\u0935\u093e\u0907\u0906 \u0965') // => \u0917\u0932\u092e\u0917\u0965\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")," ",Object(b.b)("em",{parentName:"p"},"(English first letters)")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"firstLetters('sabad marai. so mar rahai; fir. marai na, doojee vaar |') // => sm.smr;f.mn,dv|\n")),Object(b.b)("h3",{id:"isgurmukhitext-exhaustive-\u21d2-boolean"},"isGurmukhi(text, ","[exhaustive]",") \u21d2 ",Object(b.b)("code",null,"boolean")),Object(b.b)("p",null,"Checks if first char in string is part of the Gurmukhi Unicode block."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("code",null,"boolean")," - True if Unicode Gurmukhi, false if other."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The text to check.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[exhaustive]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", checks if the whole string is Unicode Gurmukhi.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"isGurmukhi('\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40') // => true\nisGurmukhi('gurmuKI') // => false\n")),Object(b.b)("h3",{id:"stripaccentstext-\u21d2-string"},"stripAccents(text) \u21d2 ",Object(b.b)("code",null,"String")),Object(b.b)("p",null,"Removes accents from ASCII/Unicode Gumrukhi letters with their base letter.\nUseful for generalising search queries."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("code",null,"String")," - A simplified version of the provided Gurmukhi string."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The text to convert.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"stripAccents('\u0a5b\u0a5e\u0a48\u0a36\u0a38\u0a13') // => \u0a1c\u0a2b\u0a48\u0a38\u0a38\u0a73\nstripAccents('Z^Svb') // => gKsvb\n")),Object(b.b)("h3",{id:"stripendingstext-\u21d2-string"},"stripEndings(text) \u21d2 ",Object(b.b)("code",null,"String")),Object(b.b)("p",null,"Strips line endings from any Gurmukhi or translation string.\nAccepts both Unicode and ASCII input.\nUseful for generating accurate first letters or modifying non-Gurbani for better display.\n",Object(b.b)("em",{parentName:"p"},"Not")," designed for headings or Sirlekhs."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("code",null,"String")," - A ending-less version of the text."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The text to stip endings from.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")," ",Object(b.b)("em",{parentName:"p"},"(Line ending phrases)")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"stripEndings('\u0a38\u0a4b \u0a18\u0a30\u0a41 \u0a30\u0a3e\u0a16\u0a41; \u0a35\u0a21\u0a3e\u0a08 \u0a24\u0a4b\u0a07 \u0965\u0a67\u0965 \u0a30\u0a39\u0a3e\u0a09 \u0965') // => \u0a38\u0a4b \u0a18\u0a30\u0a41 \u0a30\u0a3e\u0a16\u0a41; \u0a35\u0a21\u0a3e\u0a08 \u0a24\u0a4b\u0a07\nstripEndings('\u0a39\u0a41\u0a15\u0a2e\u0a41 \u0a2a\u0a1b\u0a3e\u0a23\u0a3f; \u0a24\u0a3e \u0a16\u0a38\u0a2e\u0a48 \u0a2e\u0a3f\u0a32\u0a23\u0a3e \u0965\u0a67\u0965 \u0a30\u0a39\u0a3e\u0a09 \u0a26\u0a42\u0a1c\u0a3e \u0965') // => \u0a39\u0a41\u0a15\u0a2e\u0a41 \u0a2a\u0a1b\u0a3e\u0a23\u0a3f; \u0a24\u0a3e \u0a16\u0a38\u0a2e\u0a48 \u0a2e\u0a3f\u0a32\u0a23\u0a3e\nstripEndings('\u0a1c\u0a28 \u0a28\u0a3e\u0a28\u0a15. \u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a3f \u0a1c\u0a3e\u0a24\u0a3e \u0a30\u0a3e\u0a2e \u0965\u0a6a\u0965\u0a6c\u0965 \u0a1b\u0a15\u0a3e \u0a67 \u0965') // => \u0a1c\u0a28 \u0a28\u0a3e\u0a28\u0a15. \u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a3f \u0a1c\u0a3e\u0a24\u0a3e \u0a30\u0a3e\u0a2e\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")," ",Object(b.b)("em",{parentName:"p"},"(English Translations)")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"stripEndings('O Nanak, Forever And Ever True. ||1||') // => O Nanak, Forever And Ever True.\nstripEndings('lush greenery. ||1||Pause||') // => lush greenery.\nstripEndings('always I live within the Khalsa. 519') // => always I live within the Khalsa.\nstripEndings('without your reminiscence.(1) (3)') // => without your reminiscence.\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")," ",Object(b.b)("em",{parentName:"p"},"(Spanish Translations)")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"stripEndings('ofrece su ser en sacrificio a Ti. (4-2-9)') // => ofrece su ser en sacrificio a Ti.\n")),Object(b.b)("h3",{id:"stripvishraamstext-options-\u21d2-string"},"stripVishraams(text, options) \u21d2 ",Object(b.b)("code",null,"String")),Object(b.b)("p",null,"Removes the specified vishraams from a string."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("code",null,"String")," - A vishraam-less Gurmukhi string."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The text to remove vishraams from.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The vishraams to remove. Defaults to all.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")," ",Object(b.b)("em",{parentName:"p"},"(Text only, default options)")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"stripVishraams('\u0a38\u0a2c\u0a26\u0a3f \u0a2e\u0a30\u0a48. \u0a38\u0a4b \u0a2e\u0a30\u0a3f \u0a30\u0a39\u0a48;') // => '\u0a38\u0a2c\u0a26\u0a3f \u0a2e\u0a30\u0a48 \u0a38\u0a4b \u0a2e\u0a30\u0a3f \u0a30\u0a39\u0a48\nstripVishraams('sbid mrY. so mir rhY; iPir.') // => sbid mrY so mir rhY iPir\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")," ",Object(b.b)("em",{parentName:"p"},"(Heavy vishraams only)")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"stripVishraams('sbid mrY. so mir rhY; iPir.', { heavy: true }) // => sbid mrY. so mir rhY iPir.\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")," ",Object(b.b)("em",{parentName:"p"},"(Medium vishrams only)")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"stripVishraams('Anhd sbd vjwey,', { medium: true }) // => Anhd sbd vjwey\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")," ",Object(b.b)("em",{parentName:"p"},"(Light vishrams only)")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"stripVishraams('sbid mrY. so mir rhY; iPir.', { light: true }) // => sbid mrY so mir rhY; iPir\n")),Object(b.b)("h3",{id:"toasciitext-\u21d2-string"},"toAscii(text) \u21d2 ",Object(b.b)("code",null,"String")),Object(b.b)("p",null,"Converts Gurmukhi unicode text to ASCII, used GurmukhiAkhar font."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("code",null,"String")," - An ASCII representation of the provided unicode Gurmukhi string."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The unicode text to convert.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"toAscii('\u0a39\u0a2e\u0a3e \u0a38\u0a3e\u0a07\u0a32\u0a3f \u0a32\u0a41\u0a24\u0a5e\u0a3f \u0a39\u0a15 \u0a2a\u0a30\u0a35\u0a30\u0a36 \u0965') // => hmw swieil luqi& hk prvrS ]\ntoAscii('\u0a38\u0a41 \u0a2c\u0a48\u0a20\u0a3f \u0a07\u0a15\u0a70\u0a24\u0a4d\u0a30 \u0965\u0a6b\u0a6d\u0a6e\u0965') // => su bYiT iekMqR ]578]\n")),Object(b.b)("h3",{id:"toenglishline-\u21d2-string"},"toEnglish(line) \u21d2 ",Object(b.b)("code",null,"String")),Object(b.b)("p",null,"Transliterates a line from Unicode Gurmukhi to english.\nCurrently supports the ",Object(b.b)("inlineCode",{parentName:"p"},","),", ",Object(b.b)("inlineCode",{parentName:"p"},";"),", ",Object(b.b)("inlineCode",{parentName:"p"},".")," vishraam characters."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("code",null,"String")," - The English transliteration of the provided Gurmukhi line."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"line"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Gurmukhi Unicode line to transliterate.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"toEnglish('\u0a39\u0a41\u0a15\u0a2e\u0a40 \u0a39\u0a41\u0a15\u0a2e\u0a41 \u0a1a\u0a32\u0a3e\u0a0f \u0a30\u0a3e\u0a39\u0a41 \u0965') // => hukamee hukam chalaae raahu ||\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"toEnglish('\u0a2d\u0a3e\u0a02\u0a21\u0a3e \u0a2d\u0a3e\u0a09 \u0a05\u0a70\u0a2e\u0a4d\u0a30\u0a3f\u0a24\u0a41 \u0a24\u0a3f\u0a24\u0a41 \u0a22\u0a3e\u0a32\u0a3f \u0965') // => bhaa(n)ddaa bhaou anmrit tit dtaal ||\n")),Object(b.b)("h3",{id:"tohinditext-\u21d2-string"},"toHindi(text) \u21d2 ",Object(b.b)("code",null,"String")),Object(b.b)("p",null,"Transliterates Unicode Gurmukhi text to Hindi (Devanagari script)."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("code",null,"String")," - A Hindi transliteration of the provided Unicode Gurmukhi string."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Unicode Gurmukhi text to convert.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"toHindi('\u0a15\u0a41\u0a32 \u0a1c\u0a28 \u0a2e\u0a27\u0a47 \u0a2e\u0a3f\u0a32\u0a75\u0a4b\u0a3f \u0a38\u0a3e\u0a30\u0a17 \u0a2a\u0a3e\u0a28 \u0a30\u0a47 \u0965') // => \u0915\u0941\u0932 \u091c\u0928 \u092e\u0927\u0947 \u092e\u093f\u0932\u094d\u092f\u094b \u0938\u093e\u0930\u0917 \u092a\u093e\u0928 \u0930\u0947 \u0965\ntoHindi('\u0a38\u0a41 \u0a2c\u0a48\u0a20\u0a3f \u0a07\u0a15\u0a70\u0a24\u0a4d\u0a30 \u0965\u0a6b\u0a6d\u0a6e\u0965') // => \u0938\u0941 \u092c\u0948\u0920 \u0907\u0915\u0902\u0924\u094d\u0930 \u0965\u096b\u096d\u096e\u0965\n")),Object(b.b)("h3",{id:"toshahmukhitext-\u21d2-string"},"toShahmukhi(text) \u21d2 ",Object(b.b)("code",null,"String")),Object(b.b)("p",null,"Transliterates Unicode Gurmukhi text to the Shahmukhi script."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("code",null,"String")," - A Shahmukhi transliteration of the provided Unicode Gurmukhi string."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Unicode Gurmukhi text to convert.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"toShahmukhi('\u0a39\u0a2e\u0a3e \u0a38\u0a3e\u0a07\u0a32\u0a3f \u0a32\u0a41\u0a24\u0a5e\u0a3f \u0a39\u0a15 \u0a2a\u0a30\u0a35\u0a30\u0a36 \u0965') // => \u0647\u0645\u0627 \u0633\u0627\u0650\u0627\u0644 \u0644\u064f\u062a\u0641 \u0647\u06a9 \u067e\u0631\u0648\u0631\u0634 \u06d4\u06d4\ntoShahmukhi('\u0a38\u0a41 \u0a2c\u0a48\u0a20\u0a3f \u0a07\u0a15\u0a70\u0a24\u0a4d\u0a30 \u0965\u0a6b\u0a6d\u0a6e\u0965') // => \u0633\u064f \u0628\u064e\u06d2\u0679\u06be \u0650\u0627\u06a9\u06ba\u062a\u0631 \u06d4\u06d4\u06f5\u06f7\u06f8\u06d4\u06d4\n")),Object(b.b)("h3",{id:"tosyllabicsymbolstext-\u21d2-string"},"toSyllabicSymbols(text) \u21d2 ",Object(b.b)("code",null,"String")),Object(b.b)("p",null,"Represents text in syllables according to Sanskrit prosody, Pingala, Matra/Meter/Morae"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("code",null,"String")," - A syllabic representation of 1's (laghu/light/short) and 2's (guru/heavy/long)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The string to convert")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"toSyllabicSymbols('\u0a2a\u0a4d\u0a30\u0a2d\u0a42 \u0a2a\u0a4d\u0a30\u0a47\u0a2e\u0a40 \u0a2a\u0a5c\u0a4d\u0a39 \u0a1a\u0a5c\u0a4d\u0a39 \u0a26\u0a4d\u0a35\u0a48\u0a24')\n// expected output: '12 22 11 11 21'\n")),Object(b.b)("h3",{id:"tounicodetext-\u21d2-string"},"toUnicode(text) \u21d2 ",Object(b.b)("code",null,"String")),Object(b.b)("p",null,"Converts ASCII text used in the GurmukhiAkhar font to Unicode."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("code",null,"String")," - A unicode representation of the provided ASCII Gurmukhi string."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ASCII text to convert.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"toUnicode('kul jn mDy imil\xb4o swrg pwn ry ]') // => \u0a15\u0a41\u0a32 \u0a1c\u0a28 \u0a2e\u0a27\u0a47 \u0a2e\u0a3f\u0a32\u0a75\u0a4b\u0a3f \u0a38\u0a3e\u0a30\u0a17 \u0a2a\u0a3e\u0a28 \u0a30\u0a47 \u0965\ntoUnicode('su bYiT iekMqR ]578]') // => \u0a38\u0a41 \u0a2c\u0a48\u0a20\u0a3f \u0a07\u0a15\u0a70\u0a24\u0a4d\u0a30 \u0965\u0a6b\u0a6d\u0a6e\u0965\n")))}s.isMDXComponent=!0}}]);