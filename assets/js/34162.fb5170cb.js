"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[34162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,g=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return r?n.createElement(g,o(o({ref:t},m),{},{components:r})):n.createElement(g,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},39058:(e,t,r)=>{r.d(t,{Z:()=>P});var n=r(67294),a=r(86010),l=r(22126),o=r(87524),c=r(39960),s=r(95999);const i="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",p="sidebarItem__DBe",d="sidebarItemLink_mo7H",g="sidebarItemLinkActive_I1ZP";function f(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,a.Z)(i,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,a.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,a.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:p},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title)))))))}var h=r(13102);function b(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function E(e){return n.createElement(h.Zo,{component:b,props:e})}function v(e){let{sidebar:t}=e;const r=(0,o.i)();return t?.items.length?"mobile"===r?n.createElement(E,{sidebar:t}):n.createElement(f,{sidebar:t}):null}function P(e){const{sidebar:t,toc:r,children:o,...c}=e,s=t&&t.items.length>0;return n.createElement(l.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,a.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),r&&n.createElement("div",{className:"col col--2"},r))))}},30390:(e,t,r)=>{r.d(t,{Z:()=>M});var n=r(67294),a=r(86010),l=r(9460),o=r(44996);function c(e){let{children:t,className:r}=e;const{frontMatter:a,assets:c}=(0,l.C)(),{withBaseUrl:s}=(0,o.C)(),i=c.image??a.image;return n.createElement("article",{className:r,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&n.createElement("meta",{itemProp:"image",content:s(i,{absolute:!0})}),t)}var s=r(39960);const i="title_f1Hy";function m(e){let{className:t}=e;const{metadata:r,isBlogPostPage:o}=(0,l.C)(),{permalink:c,title:m}=r,u=o?"h1":"h2";return n.createElement(u,{className:(0,a.Z)(i,t),itemProp:"headline"},o?m:n.createElement(s.Z,{itemProp:"url",to:c},m))}var u=r(95999),p=r(88824);const d="container_mt6G";function g(e){let{readingTime:t}=e;const r=function(){const{selectMessage:e}=(0,p.c)();return t=>{const r=Math.ceil(t);return e(r,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}}();return n.createElement(n.Fragment,null,r(t))}function f(e){let{date:t,formattedDate:r}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},r)}function h(){return n.createElement(n.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:r}=(0,l.C)(),{date:o,formattedDate:c,readingTime:s}=r;return n.createElement("div",{className:(0,a.Z)(d,"margin-vert--md",t)},n.createElement(f,{date:o,formattedDate:c}),void 0!==s&&n.createElement(n.Fragment,null,n.createElement(h,null),n.createElement(g,{readingTime:s})))}function E(e){return e.href?n.createElement(s.Z,e):n.createElement(n.Fragment,null,e.children)}function v(e){let{author:t,className:r}=e;const{name:l,title:o,url:c,imageURL:s,email:i}=t,m=c||i&&`mailto:${i}`||void 0;return n.createElement("div",{className:(0,a.Z)("avatar margin-bottom--sm",r)},s&&n.createElement(E,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:s,alt:l})),l&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(E,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},l))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const P="authorCol_Hf19",y="imageOnlyAuthorRow_pa_O",N="imageOnlyAuthorCol_G86a";function _(e){let{className:t}=e;const{metadata:{authors:r},assets:o}=(0,l.C)();if(0===r.length)return null;const c=r.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",c?y:"row",t)},r.map(((e,t)=>n.createElement("div",{className:(0,a.Z)(!c&&"col col--6",c?N:P),key:t},n.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function O(){return n.createElement("header",null,n.createElement(m,null),n.createElement(b,null),n.createElement(_,null))}var w=r(18780),Z=r(53470);function k(e){let{children:t,className:r}=e;const{isBlogPostPage:o}=(0,l.C)();return n.createElement("div",{id:o?w.blogPostContainerID:void 0,className:(0,a.Z)("markdown",r),itemProp:"articleBody"},n.createElement(Z.Z,null,t))}var T=r(84881),C=r(71526),x=r(87462);function j(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function I(e){const{blogPostTitle:t,...r}=e;return n.createElement(s.Z,(0,x.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},r),n.createElement(j,null))}const B="blogPostFooterDetailsFull_mRVl";function F(){const{metadata:e,isBlogPostPage:t}=(0,l.C)(),{tags:r,title:o,editUrl:c,hasTruncateMarker:s}=e,i=!t&&s,m=r.length>0;return m||i||c?n.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",t&&B)},m&&n.createElement("div",{className:(0,a.Z)("col",{"col--9":i})},n.createElement(C.Z,{tags:r})),t&&c&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(T.Z,{editUrl:c})),i&&n.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":m})},n.createElement(I,{blogPostTitle:o,to:e.permalink}))):null}function M(e){let{children:t,className:r}=e;const o=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(c,{className:(0,a.Z)(o,r)},n.createElement(O,null),n.createElement(k,null,t),n.createElement(F,null))}},9460:(e,t,r)=>{r.d(t,{C:()=>c,n:()=>o});var n=r(67294),a=r(902);const l=n.createContext(null);function o(e){let{children:t,content:r,isBlogPostPage:a=!1}=e;const o=function(e){let{content:t,isBlogPostPage:r}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:r})),[t,r])}({content:r,isBlogPostPage:a});return n.createElement(l.Provider,{value:o},t)}function c(){const e=(0,n.useContext)(l);if(null===e)throw new a.i6("BlogPostProvider");return e}},88824:(e,t,r)=>{r.d(t,{c:()=>i});var n=r(67294),a=r(52263);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function i(){const e=s();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const a=r.select(t),l=r.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(r,t,e)}}}}]);