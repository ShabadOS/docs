(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(8),o=(n(0),n(129)),r={title:"Coding Guidelines"},c={unversionedId:"coding-guidelines",id:"coding-guidelines",isDocsHomePage:!1,title:"Coding Guidelines",description:"We use spaces, not tabs.",source:"@site/content/community/coding-guidelines.md",slug:"/coding-guidelines",permalink:"/community/coding-guidelines",editUrl:"https://github.com/shabados/docs/edit/dev/content/community/coding-guidelines.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1614209390,sidebar:"communitySidebar",previous:{title:"Contributing",permalink:"/community/how-to-contribute"},next:{title:"Project Management",permalink:"/community/project-management"}},l=[{value:"Names",id:"names",children:[]},{value:"Comments",id:"comments",children:[]},{value:"Style",id:"style",children:[]},{value:"Linting",id:"linting",children:[]},{value:"Commit Messages",id:"commit-messages",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We use spaces, not tabs."),Object(o.b)("h3",{id:"names"},"Names"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use PascalCase for ",Object(o.b)("inlineCode",{parentName:"li"},"type")," names"),Object(o.b)("li",{parentName:"ul"},"Use PascalCase for ",Object(o.b)("inlineCode",{parentName:"li"},"enum")," values"),Object(o.b)("li",{parentName:"ul"},"Use camelCase for ",Object(o.b)("inlineCode",{parentName:"li"},"function")," and ",Object(o.b)("inlineCode",{parentName:"li"},"method")," names"),Object(o.b)("li",{parentName:"ul"},"Use camelCase for ",Object(o.b)("inlineCode",{parentName:"li"},"property")," names and ",Object(o.b)("inlineCode",{parentName:"li"},"local variables")),Object(o.b)("li",{parentName:"ul"},"Use UPPER_SNAKE_CASE for ",Object(o.b)("inlineCode",{parentName:"li"},"true constants")," (hardcoded string or env variable)"),Object(o.b)("li",{parentName:"ul"},"Use whole words in names when possible")),Object(o.b)("h3",{id:"comments"},"Comments"),Object(o.b)("p",null,"Use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://jsdoc.app/index.html"}),"JSDoc")," style comments for ",Object(o.b)("inlineCode",{parentName:"p"},"functions"),", ",Object(o.b)("inlineCode",{parentName:"p"},"interfaces"),", ",Object(o.b)("inlineCode",{parentName:"p"},"enums"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"classes")),Object(o.b)("h3",{id:"style"},"Style"),Object(o.b)("p",null,"Our style guide is very similar to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/airbnb/javascript"}),"Airbnb's Javascript Style Guide"),", apart from a few minor modifications. Notably, spaces should be included inside parentheses and brackets."),Object(o.b)("h3",{id:"linting"},"Linting"),Object(o.b)("p",null,"Many of our repos contain an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://eslint.org/"}),"ESLint")," configuration file. You can run ESLint on any file or directory by running ",Object(o.b)("inlineCode",{parentName:"p"},"npx eslint yourfile.js")," in a terminal or command prompt."),Object(o.b)("p",null,"It is recommended to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://eslint.org/docs/user-guide/"}),"integrate ESLint")," with your editor so you can receive linter suggestions as you type. We recommend ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}),"VSCode's ESLint extension"),"."),Object(o.b)("p",null,"In addition to linting, code will automatically be checked by GitHub Actions for style."),Object(o.b)("h3",{id:"commit-messages"},"Commit Messages"),Object(o.b)("p",null,"Our git commit messages consist of three sections separated by blank lines in the following format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"<type>(<scope>): <subject>\n\n<body>\n\n<footer>\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type and subject is mandatory. Scope is optionally added in parentheses. See one of our repo's commit history for examples."),Object(o.b)("li",{parentName:"ul"},"Use the footer to reference GitHub issues, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"Close #128")," or ",Object(o.b)("inlineCode",{parentName:"li"},"Related #128"),". We use this for tracking issues.")),Object(o.b)("h4",{id:"type"},"Type"),Object(o.b)("p",null,"A majority of our commits tend to be one of the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"feat"),": Changes that introduce a new feature or enhancement; Always an addition or improvement."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"fix"),": Changes related to unexpected behavior; Usually bug related, but also for correcting typos/content."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"perf"),": Changes that improve performance."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"refactor"),": Changes that don't alter behavior, don't add features/enhancements, don't affect performance, and don't change anything for the user.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Typos are always mistakes, and therefore type ",Object(o.b)("em",{parentName:"p"},"fix"),". Additions/enhancements to content are type ",Object(o.b)("em",{parentName:"p"},"feat"),"."))),Object(o.b)("p",null,"We have some target level types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"build"),": Changes to our build system or external dependencies (e.g. with scopes: gulp, broccoli, npm)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"ci"),": Changes to our CI configuration files and scripts (e.g. with scopes: Circle, BrowserStack, SauceLabs)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"docs"),": Changes to our documentation"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"test"),": Changes to our tests; Adding missing tests or correcting existing tests")),Object(o.b)("p",null,"And, the last type:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"style"),": Changes to code that are superficial and do not affect anything in a meaningful way (e.g. white-space, formatting, missing semi-colons)")),Object(o.b)("h4",{id:"scope"},"Scope"),Object(o.b)("p",null,"Most types should have a scopes, as defined by the repo. See the ",Object(o.b)("inlineCode",{parentName:"p"},"CONTRIBUTING.md")," file in a project repo for scopes."),Object(o.b)("p",null,"Some types do not require scopes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"style"),", ",Object(o.b)("inlineCode",{parentName:"li"},"test"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"refactor")," changes to multiple scopes (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"style: add missing semicolons"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"docs")," changes (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"docs: fix typo in readme"),").")),Object(o.b)("h4",{id:"subject"},"Subject"),Object(o.b)("p",null,"We begin our subjects in lowercase and remove any trailing punctuation (e.g. period or exclamation mark)."),Object(o.b)("p",null,"The subject line must be no more than 72 characters. If you're unable to succinctly summarize what you've done, then perhaps too many changes are being committed at once. Aim for smaller commits which can be explained better."),Object(o.b)("p",null,'Our subjects are written imperatively. The imperative is the same as if giving a command or instruction. It can be easily tested by substituting the subject for blank in the line "this commit will ',Object(o.b)("u",null,"FILL IN THE BLANK"),'". Examples: refactor, update, show, hide, add, remove, allow, prevent, open, close.'),Object(o.b)("h4",{id:"body"},"Body"),Object(o.b)("p",null,"Code is generally self-explanatory. Not every commit requires a body. Some changes are so simple that no further explanation is necessary. Even complex code should have comments for explanations."),Object(o.b)("p",null,"Focus on using the body to explain ",Object(o.b)("em",{parentName:"p"},"why")," you made the changes. Explain how it worked before the change, why it required changing, and why you resolved it the way you did."),Object(o.b)("p",null,"If the subject is the command, then the body is the purpose."),Object(o.b)("h4",{id:"footer"},"Footer"),Object(o.b)("p",null,'If your commit relates to a GitHub issue, then use the footer to link it (e.g. "Related #128"). If your commit would close a GitHub issue when merged, then use the footer to automate it (e.g. "Close #128"). One commit should almost never reference multiple issues, but if need be the commands can be comma-separated (e.g. "Close #128, Close #64, Related #32").'),Object(o.b)("h4",{id:"revert"},"Revert"),Object(o.b)("p",null,"When reverting single commits, modify the header of the commit being reverted by beginning it with ",Object(o.b)("inlineCode",{parentName:"p"},"revert: ")," and use the body of the commit to reference the SHA hash of the commit being reverted."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example commit with SHA abc123")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"docs: add contributing guidelines\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example of reverting commit with SHA abc123")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"revert: docs: add contributing guidelines\n\nReverting commit abc123.\n")))}b.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(n),u=a,d=m["".concat(r,".").concat(u)]||m[u]||p[u]||o;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);