(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{126:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),c=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return a?i.a.createElement(u,l(l({ref:t},b),{},{components:a})):i.a.createElement(u,l({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(3),i=a(8),r=(a(0),a(126)),o={title:"Project Management"},l={unversionedId:"project-management",id:"project-management",isDocsHomePage:!1,title:"Project Management",description:"Thank you for your interest in project management. This document is primarily intended for two audiences:",source:"@site/content/community/project-management.md",slug:"/project-management",permalink:"/community/project-management",editUrl:"https://github.com/shabados/docs/edit/main/content/community/project-management.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1623531374,sidebar:"communitySidebar",previous:{title:"Coding Guidelines",permalink:"/community/coding-guidelines"},next:{title:"Support & Feedback",permalink:"/community/support-and-feedback"}},s=[{value:"Roadmap",id:"roadmap",children:[]},{value:"Development iteration",id:"development-iteration",children:[]},{value:"Triage",id:"triage",children:[{value:"Issue Tracking",id:"issue-tracking",children:[]},{value:"Closing of issues",id:"closing-of-issues",children:[]}]},{value:"Maintain",id:"maintain",children:[{value:"Release Process",id:"release-process",children:[]},{value:"Updating release notes",id:"updating-release-notes",children:[]}]}],b={toc:s};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Thank you for your interest in project management. This document is primarily intended for two audiences:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Developers seeking to understand the planning of Shabad OS projects"),Object(r.b)("li",{parentName:"ol"},"Future maintainers seeking to help initiate, execute, and control the work of Shabad OS projects. The second group includes triage and administrative roles.")),Object(r.b)("h2",{id:"roadmap"},"Roadmap"),Object(r.b)("p",null,"Our roadmap consists of high-level objectives which are done on an organization level, not the project/repo level. These goals are established for the long-term (6-12 months). The roadmap is developed based on the previous roadmap and topics we've heard from the community (see how to provide ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"community/support-and-feedback"}),"feedback"),")."),Object(r.b)("p",null,"These high-level objectives are decided by the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/orgs/ShabadOS/people"}),"project owners")," and steer our development iterations."),Object(r.b)("h2",{id:"development-iteration"},"Development iteration"),Object(r.b)("p",null,"Many of our volunteers already have professional and student commitments. Some participate in the Shabad OS project as a labor of love or as a part of their ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Selfless_service"}),Object(r.b)("em",{parentName:"a"},"sewa"))," or selfless service to benefit other human beings or society. It is, therefore, difficult to constrain our community's efforts within professional scheduling deadlines."),Object(r.b)("p",null,"We follow a hybridized model which focuses on prioritizing issues that need to be completed on a weekly iteration. Our goal is to release a stable build no more than once a month."),Object(r.b)("p",null,"Issues"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Issue is assigned an impact level depending on how many users it affects"),Object(r.b)("li",{parentName:"ol"},"Issue completion is estimated on a point scale (1 point = 1 hour)"),Object(r.b)("li",{parentName:"ol"},"Issue is prioritized to a ",Object(r.b)("em",{parentName:"li"},"queue"))),Object(r.b)("p",null,"Queue"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Queue is a list of issues that require resolution most immediately"),Object(r.b)("li",{parentName:"ol"},"Queue is resolvable in one work week (assuming all expectations of volunteer work is met)"),Object(r.b)("li",{parentName:"ol"},"Queue is prioritized to resolve any bugs introduced from any previous queue"),Object(r.b)("li",{parentName:"ol"},"Queue is comprised of varying difficulty issues which include issues that are good for newcomers")),Object(r.b)("p",null,"This model affords our project flexibility around changing volunteer availability. Our queue does not have a completion deadline."),Object(r.b)("h2",{id:"triage"},"Triage"),Object(r.b)("p",null,"Our development iteration all begins with issue tracking. Proper processing of issues and ranking of issues in terms of importance and priority is essential for planning. All of our project repos have the following labels for issues:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Difficulty - Ranging from 0 to over 100 points. Used to estimate how long an issue's resolution would take."),Object(r.b)("li",{parentName:"ul"},"Impact - Ranging from 0 to 100%. Used to estimate the percentage of users this issue or it's resolution affects."),Object(r.b)("li",{parentName:"ul"},"Status - Used to track progress of an issue."),Object(r.b)("li",{parentName:"ul"},"Type - Used to help prioritize issues that are features or fixes (with fixes often getting the higher priority).")),Object(r.b)("p",null,"NOTE: Issues with a difficulty over 10 points should always be re-examined to see if they can be broken down into smaller tasks"),Object(r.b)("h3",{id:"issue-tracking"},"Issue Tracking"),Object(r.b)("p",null,"Issue tracking is the heart of project management. From this standpoint, the most important label is the ",Object(r.b)("inlineCode",{parentName:"p"},"status"),". Our status labels are as follows:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Role"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Hold")," + ",Object(r.b)("inlineCode",{parentName:"td"},"no:assignee")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PM doesn't want to evaluate")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"? ? ?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PM unsure of significance")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Score")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PM wants estimation details to triage further")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"To Do")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PM wants it done and knows assignee can resolve")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Either"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Vague")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Assignee can't resolve without further details")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Assignee"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"3hard5me")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Assignee can't resolve, but knows PM wants it done")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Either"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Hold")," (with assignee)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Work blocked by another issue's resolution")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Assignee"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"WIP")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Work is in progress")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Assignee"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Merge")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Issue is linked to PR that will resolve it")))),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShabadOS/actions/issues/3#issuecomment-627035194"}),"https://github.com/ShabadOS/actions/issues/3#issuecomment-627035194")," for more details."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"WARNING")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The assignee of the issue should the one estimating difficulty. This may or may not be the person who is triaging the issue."))),Object(r.b)("h3",{id:"closing-of-issues"},"Closing of issues"),Object(r.b)("p",null,"Issues that are duplicates of others can be linked and closed. Vague issues requiring more info from the user without a reply for 14 days or bugs that can't be reproduced can be closed. From time to time it is good to go through and see if there are any particularly old issues still around and whether they need to be re-assessed or closed."),Object(r.b)("h2",{id:"maintain"},"Maintain"),Object(r.b)("p",null,"Maintainers, Admins, and Owners of Shabad OS are responsible for handling pull requests to the code base, building master and releases of the repo, updating the release notes for any possible SemVer changes, and being generally knowledgeable about the security of the Shabad OS repo in terms of source code, build pipeline, and code/server related topics."),Object(r.b)("h3",{id:"release-process"},"Release Process"),Object(r.b)("p",null,"We should have no more than two builds for end users:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ShabadOS/desktop/releases"}),"Next")," - triggered on each PR / commit to main branch."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ShabadOS/desktop/releases/latest"}),"Latest")," - built on manual workflow run of main branch, versioning based on commit history")),Object(r.b)("p",null,"When merging a PR into ",Object(r.b)("inlineCode",{parentName:"p"},"main"),", provided that the PR does not have a ",Object(r.b)("inlineCode",{parentName:"p"},"skip-next-release")," tag, CI will:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Read commit history after latest ",Object(r.b)("inlineCode",{parentName:"li"},"tag")),Object(r.b)("li",{parentName:"ul"},"Choose either a SemVer or next bump (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"2.5.0-next.1")," => ",Object(r.b)("inlineCode",{parentName:"li"},"2.6.0-next.1")," or ",Object(r.b)("inlineCode",{parentName:"li"},"2.5.0-next.2"),")"),Object(r.b)("li",{parentName:"ul"},"Update changelog file"),Object(r.b)("li",{parentName:"ul"},"Build and publish to GitHub the next release")),Object(r.b)("p",null,"When manually releasing latest off ",Object(r.b)("inlineCode",{parentName:"p"},"main"),", the workflow named ",Object(r.b)("inlineCode",{parentName:"p"},"release"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Update next release to semver of release in changelog header"),Object(r.b)("li",{parentName:"ul"},"Push updated release notes: rename next release folder as SemVer of release, create new folder for next release"),Object(r.b)("li",{parentName:"ul"},"Remove any next components (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"2.5.0-next.1")," => ",Object(r.b)("inlineCode",{parentName:"li"},"2.5.0"),")"),Object(r.b)("li",{parentName:"ul"},"Build and publish to GitHub releases")),Object(r.b)("h4",{id:"how-ci-chooses-semver-bump"},"How CI chooses SemVer bump"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),'"BREAKING CHANGE" is on it\'s own line'),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Major bump (e.g. 2.5.6 => 3.0.0)"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Commit message begins with "feat"'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minor bump (e.g. 2.5.6 => 2.6.0)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Commit message begins with "fix" or "perf"'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Patch bump (e.g. 2.5.6 => 2.5.7)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None of the above criteria"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No bump (e.g. 2.5.6 => 2.5.6)")))),Object(r.b)("h3",{id:"updating-release-notes"},"Updating release notes"),Object(r.b)("p",null,"Maintainers and Admins are responsible to show what changes were made, and when they were made, for releases. It is important to include breaking changes (incompatible API changes) or habit-reforming behaviors (UX) for both contributors and end-users."),Object(r.b)("p",null,"Future release notes should be added as asciidoc files in the corresponding folder (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"./release-notes/latest.adoc"),"). Linked images/animations should be placed in a folder (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"./release-notes/assets/latest/"),")."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When merging into ",Object(r.b)("inlineCode",{parentName:"p"},"master"),", CI will automatically rename ",Object(r.b)("inlineCode",{parentName:"p"},"latest.adoc")," to sub-SemVer format (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"3.0.adoc"),"). The ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch should not have a ",Object(r.b)("inlineCode",{parentName:"p"},"latest.adoc")," file. Patches should be included as bullet-lists under a header of bold text for their relevant ",Object(r.b)("inlineCode",{parentName:"p"},"major.minor.adoc")," release note."))),Object(r.b)("p",null,"Begin your release notes with a section for key highlights and their short descriptions. Since we use asciidoc, a table of contents will automatically be generated from the headers. It is unnecessary to include every header in the key highlights section."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"While working on prerelease notes in ",Object(r.b)("inlineCode",{parentName:"p"},"dev")," branch, keep editing the ",Object(r.b)("inlineCode",{parentName:"p"},"latest.adoc")," file. Do not create new files for each prerelease."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It is necessary to explain in each release note that we are following ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://semver.org/"}),"Semantic Versioning")," for version labelling."))),Object(r.b)("p",null,"2",Object(r.b)("sup",null,"nd")," level headers should be friendly ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShabadOS/.github/blob/master/CONTRIBUTING.md#scope"}),"scope names"),". 3",Object(r.b)("sup",null,"rd")," level headers can be the notes for what was added, changed, deprecated, fixed, removed, or secured."),Object(r.b)("p",null,"End the release notes with the following 2",Object(r.b)("sup",null,"nd")," level headers: (1, optional) Preview, (2, optional) Notable Changes, and (3, required) Thank You:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"It is helpful to prepare users with experimental features that may have been introduced and a short-duration peek towards our next releases."),Object(r.b)("li",{parentName:"ol"},"It is important to include a dedicated way for users to see changes that a user needs to prepare for (adapting to a different UX) or avoid upgrading to (breaking changes). Does not have to include all key highlights from the beginning of the release notes."),Object(r.b)("li",{parentName:"ol"},"It is humbling to thank our community for their participation. This should include not only those contributing pull requests but also those helping to triage issues for tracking purposes or any other project management related work. Use GitHub handles when possible.")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"IMPORTANT")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The maintainer/admin writing the release notes must not be excluded from the thank you section as it could be used by other team members for tracking purposes or future maintainers/admins."))))}c.isMDXComponent=!0}}]);