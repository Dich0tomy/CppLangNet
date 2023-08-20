"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[75875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));n(42677);const r={sidebar_label:"\u2795 New documents"},i="New documents",s={unversionedId:"new-documents",id:"new-documents",title:"New documents",description:"Its highly recommended to view the source code of other existing files before adding a new document.",source:"@site/content/contributing/new-documents.mdx",sourceDirName:".",slug:"/new-documents",permalink:"/CppLangNet/contributing/new-documents",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/contributing/new-documents.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"\u2795 New documents"},sidebar:"defaultSidebar",previous:{title:"\ud83d\udcc2 Folder structure",permalink:"/CppLangNet/contributing/folder-structure"},next:{title:"\u2630 Editing sidebar",permalink:"/CppLangNet/contributing/editing-sidebar"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Guidelines",id:"guidelines",level:3},{value:"Document metadata",id:"document-metadata",level:3},{value:"Adding to the sidebar",id:"adding-to-the-sidebar",level:3},{value:"Adding the content",id:"adding-the-content",level:3},{value:"Templates",id:"templates",level:4}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"new-documents"},"New documents"),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Its highly recommended to view the source code of other existing files before adding a new document.\nThis allows you to become familiar with the convention and ensure that your new file fits the criteria.\nBefore doing so, however, we ask that you consult with us first by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Cpp4You/CppLangNet/issues"},"filing an issue"),".")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We're using ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus")," to write documents. This tool uses an extended markdown format (MDX).\nIt is a combination of Markdown and JSX, which allows us to write custom components in ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org"},"React"),".\nWe use our ",(0,o.kt)("a",{parentName:"p",href:"writing-guide/using-components/"},"component library")," to extend the capabilities of what we can put inside a document.\nWith MDX, we can create documents that are more interactive and engaging for our users than a typical site."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/create-doc"},"this link")," to learn how to create docs in Docusaurus.")),(0,o.kt)("h3",{id:"guidelines"},"Guidelines"),(0,o.kt)("p",null,"Depending on what type of document you're looking to write, the content of the document will have to follow certain guidelines."),(0,o.kt)("p",null,"Let's say that you want to write a lesson (within the course) about class constructors."),(0,o.kt)("p",null,"First, you have to create an English version of the document, even if you want to write in other language.\nThis is because it's our ",(0,o.kt)("em",{parentName:"p"},"fallback language"),", therefore all locales that doesn't provide translation for\ncertain documents will fallback to the English one.\n",(0,o.kt)("strong",{parentName:"p"},"Pick a lowercase name without spaces, separated by hyphens"),", for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class-constructors.mdx\n")),(0,o.kt)("p",null,"Since we already have a ",(0,o.kt)("inlineCode",{parentName:"p"},"classes")," directory, we can skip the ",(0,o.kt)("inlineCode",{parentName:"p"},"class-")," prefix, and finally end up with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"classes/constructors.mdx\n")),(0,o.kt)("h3",{id:"document-metadata"},"Document metadata"),(0,o.kt)("p",null,"You'll have to fill the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter"},"metadata of the document"),".\nOpen it, and at the very top create a ",(0,o.kt)("strong",{parentName:"p"},"document metadata section"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\nsidebar_label:      "1. Class constructors"\ntitle:              "Class constructors"\ndescription:        "Lesson: basics of class constructors in C++ language"\ntags:               [class, constructor, method, object, object-oriented-programming, object-oriented, oop]\nhide_title:         true\n---\n')),(0,o.kt)("admonition",{title:"Legacy field",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar_position")," field was mandatory, but it's not used now. Feel free to remove it from documents that\nstill contain it. The position is now strictly managed through order in ",(0,o.kt)("inlineCode",{parentName:"p"},"/sidebars/<section>.js")," file.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"hide_title: true")," should be only used when there is something between metadata and the Markdown H1 heading,\nfor example:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\n...\nhide_title:         true\n---\n\n\x3c!-- Components --\x3e\nimport Columns          from "@site-comps/Columns";\n\n\x3c!-- Presets --\x3e\nimport NotFinished      from "@site/i18n/en/presetsNotFinished";\n\n# The title of the document\n')),(0,o.kt)("p",{parentName:"admonition"},"Do not use it if metadata is directly above ",(0,o.kt)("inlineCode",{parentName:"p"},"# The title of the document"),", because\nDocusaurus will generate an additional H1 heading.")),(0,o.kt)("p",null,"For complete metadata list, please visit ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter"},"this page"),"."),(0,o.kt)("h3",{id:"adding-to-the-sidebar"},"Adding to the sidebar"),(0,o.kt)("p",null,"Your document won't be visible in the sidebar at first. Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/sidebars")," directory,\nand find appropriate file (",(0,o.kt)("inlineCode",{parentName:"p"},"learn.js")," for ",(0,o.kt)("a",{parentName:"p",href:"https://cpp-lang.net/learn/"},"Learn")," section, ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.js")," for ",(0,o.kt)("a",{parentName:"p",href:"https://cpp-lang.net/tools/"},"Tools")," section, etc.)\nthen add ",(0,o.kt)("inlineCode",{parentName:"p"},"constructors")," to the list."),(0,o.kt)("p",null,"Sidebars are configured using JavaScript, but most of the their configuration is done with simple\narrays and objects so it will be easy for you to use, even if you don't know the language.\nThe document we created should be added to the sidebar like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// ...\n{\n    type: 'category',\n    label: '9. Classes',\n    items: [\n        'course/intermediate/classes/intro',\n        // highlight-next-line\n        'course/intermediate/classes/constructors',\n        'course/intermediate/classes/destructors',\n        // ...\n    ]\n}\n")),(0,o.kt)("h3",{id:"adding-the-content"},"Adding the content"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please read our ",(0,o.kt)("a",{parentName:"p",href:"../writing-guide/general-rules"},"General editing rules and tips"))),(0,o.kt)("h4",{id:"templates"},"Templates"),(0,o.kt)("p",null,"Right now we don't have doc templates. We will create them in the future, once we establish\nsome kind of a standard."),(0,o.kt)("p",null,"We have examples of good docs that you should visit and possibly use them as a temporary template:"),(0,o.kt)("p",null,"Documentation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/std/containers/arrays/array/"},"std::array reference")," - a good template for class summary page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/std/containers/strings/string/constructor/"},"std::basic_string constructors")," - a good template for constructors or other methods"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/std/containers/strings/string/at/"},"std::basic_string::at")," - a good (?) template for class methods")),(0,o.kt)("p",null,"Learning:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/learn/course/basics/first-program/"},"First program (Basics)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/learn/course/basics/functions/"},"Functions (Basics)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/learn/course/basics/structures/"},"Structures (Basics)"))))}u.isMDXComponent=!0},42677:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),o=(n(67294),n(3905));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"This section requires improvement. You can help by editing this doc page.")))}i.isMDXComponent=!0}}]);