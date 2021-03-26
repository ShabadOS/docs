(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(8),o=(a(0),a(129)),i={title:"Contributing",sidebar_label:"Introduction"},s={unversionedId:"how-to-contribute",id:"how-to-contribute",isDocsHomePage:!1,title:"Contributing",description:"Thank you for your interest in participating! This document caters to developers or programmers that wish to write code and directly contribute to the source code of Shabad OS. See Feedback for non-developer contributors.",source:"@site/content/community/how-to-contribute.md",slug:"/how-to-contribute",permalink:"/community/how-to-contribute",editUrl:"https://github.com/shabados/docs/edit/dev/content/community/how-to-contribute.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1616722833,sidebar_label:"Introduction",sidebar:"communitySidebar",previous:{title:"Community",permalink:"/community/"},next:{title:"Coding Guidelines",permalink:"/community/coding-guidelines"}},c=[{value:"Feedback",id:"feedback",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Workflow",id:"workflow",children:[{value:"Issues",id:"issues",children:[]},{value:"Branches",id:"branches",children:[]},{value:"Pull Requests",id:"pull-requests",children:[]}]}],b={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Thank you for your interest in participating! This document caters to developers or programmers that wish to write code and directly contribute to the source code of Shabad OS. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#feedback"}),"Feedback")," for non-developer contributors."),Object(o.b)("p",null,"Most of the contributing model for Shabad OS is shared. A few repo-specific topics of note include: Getting Started / Prerequisites and Scope definitions. These repo-specific topics should be referenced on a repo level, and not on the org level."),Object(o.b)("h2",{id:"feedback"},"Feedback"),Object(o.b)("p",null,"There are many ways for people to contribute, beyond writing code or programming:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ask a question via ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://chat.shabados.com"}),"Slack")),Object(o.b)("li",{parentName:"ul"},"Request a new feature or report unexpected bugs by filing an issue"),Object(o.b)("li",{parentName:"ul"},"Upvote popular feature requests using the thumbs-up/+1 reaction on the first post of an issue"),Object(o.b)("li",{parentName:"ul"},"Follow ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.instagram.com/shabad_os/"}),"@shabad_os on Instagram")," and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.twitter.com/shabad_os/"}),"@shabad_os on Twitter")," and let us know what you think!")),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"If you wish to better understand how Shabad OS works or want to debug an issue: get the source, build it, and run it locally. See the contributing doc of the repo for instructions."),Object(o.b)("h2",{id:"workflow"},"Workflow"),Object(o.b)("p",null,"The general workflow of development (or Git Flow) is to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#issue"}),"Issues,choose an issue")," to work on, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#branches"}),"Branches,create a feature branch"),", and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#pull-requests"}),"Pull Requests,submit a pull request"),"."),Object(o.b)("h3",{id:"issues"},"Issues"),Object(o.b)("p",null,"After getting started with the repo, check out the issues list:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Issues labeled with ",Object(o.b)("inlineCode",{parentName:"li"},"Impact: Crit")," or ",Object(o.b)("inlineCode",{parentName:"li"},"Status: 3hard5me")," are good issues to submit a PR for."),Object(o.b)("li",{parentName:"ul"},"Issues labeled ",Object(o.b)("inlineCode",{parentName:"li"},"Effort: 0")," or ",Object(o.b)("inlineCode",{parentName:"li"},"Effort: 1")," are great if you are in the code for the first time."),Object(o.b)("li",{parentName:"ul"},"If you are contributing significant changes, please discuss with the assignee of the issue before beginning your work.")),Object(o.b)("p",null,"There should be a pinned issue tracker in each repo with helpful queries. These queries provide lists of potential areas for contributions. Note that, just because an issue exists, does not mean we will accept a contribution for it."),Object(o.b)("p",null,"There are a few labels worth noting:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Effort: 0-109"),' - The perceived/estimated "points" of effort to resolve the issue'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Impact: {Low, Avg, High, Crit}")," - The perceived percentage of users the issue affects"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Status: 3hard5me")," - Issues the assignee needs help to resolve")),Object(o.b)("p",null,"If an issue is easy to resolve and impacts a majority of users, then its resolution should be prioritized higher."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"IMPORTANT")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Be sure to discuss with the assignee of the issue, before tackling issues. If there are no assignees, ask to be assigned in a comment."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"IMPORTANT")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To avoid multiple pull requests resolving the same issue, let others know you are working on it by saying so in a comment."))),Object(o.b)("h3",{id:"branches"},"Branches"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"main")," branch is used for stable releases. The ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," branch is used for next releases / prereleases and serves as the primary branch of development. Shabad OS follows a ",Object(o.b)("em",{parentName:"p"},"fork and pull model"),". Developers should fork the ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," branch to their personal account. Contributors can create branches off this personal ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," branch and work on them as ",Object(o.b)("inlineCode",{parentName:"p"},"origin"),". Branches should be short-lived and should relate to a single issue from the repo. Avoid updating branches with other branches. Sync your personal branch with ",Object(o.b)("inlineCode",{parentName:"p"},"upstream")," dev with a merge before submitting a PR."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Keep your personal branches separate from each other. Sync your personal branch with upstream ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," using merge.")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"PROTIP")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If using the ",Object(o.b)("inlineCode",{parentName:"p"},"gh")," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cli.github.com"}),"cli tool from GitHub")," to clone your forked repo, you will automatically have ",Object(o.b)("inlineCode",{parentName:"p"},"origin")," and ",Object(o.b)("inlineCode",{parentName:"p"},"upstream")," defined correctly."))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"# Only add upstream if you are not using the gh command to clone your forked repo\n# Replace {repo} with the repo name\ngit remote add upstream https://github.com/ShabadOS/{repo}.git\n\n# Make sure that you are on your personal branch before syncing\ngit checkout your-personal-branch\n\n# Sync your personal branch with upstream dev\ngit fetch upstream\ngit merge upstream/dev\n\n# Avoid force pushing to shared branches (any branch that is open in PR)\n")),Object(o.b)("p",null,"Even if you have push rights on the upstream repository, you should create a personal fork. This keeps the Shabad OS repository clean and your personal workflow out of sight."),Object(o.b)("p",null,"Branches should be named after the issue they are resolving in the format of ",Object(o.b)("inlineCode",{parentName:"p"},"username/issue<issue_number>")," (e.g. issue 128 for user bhajneet would be ",Object(o.b)("inlineCode",{parentName:"p"},"bhajneet/issue128"),"). This is how branches will be named if using the recommended VS Code extension: link:",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github%5BGitHub"}),"https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github[GitHub")," Pull Requests and Issues]."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"PROTIP")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If there is no issue related to the work being done, then create an issue for tracking purposes."))),Object(o.b)("p",null,"See the following GitHub docs for additional guidance:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models"}),"Overview of collaborative development models")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork"}),"Configuring a remote for a fork")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork"}),"Sync a fork of a repository to keep it up-to-date with the upstream repository"))),Object(o.b)("h3",{id:"pull-requests"},"Pull Requests"),Object(o.b)("p",null,"To enable quick code reviews, create one pull request per issue. Avoid resolving multiple issues in one PR unless they share a root cause. Be sure to follow the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#coding-guidelines"}),"Coding Guidelines")," and keep code changes as small as possible. Avoid pure formatting changes to code that has not been modified otherwise. Pull requests should contain tests whenever possible. The pull requests summary should include changes, tests done, visual before and after, time taken to resolve, and linked issues whenever possible."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"PROTIP")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Pull Requests are squashed on merge, so title the PR as if it were a single commit according to the first line of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#commit-messages"}),"Commit Messages"),"."))))}l.isMDXComponent=!0},129:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?r.a.createElement(h,s(s({ref:t},b),{},{components:a})):r.a.createElement(h,s({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);