"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[66050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"std/algo/ranges/_codes/find/since-cpp20-simplified",id:"std/algo/ranges/_codes/find/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/find/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/find",slug:"/std/algo/ranges/_codes/find/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/find/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/find/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},p={},c=[],s={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr I\n    find( I first, S last, const T& value, Proj proj = {} );\n\n// (2)\nconstexpr ranges::borrowed_iterator_t<R>\n    find( R&& r, const T& value, Proj proj = {} );\n")),(0,a.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"I")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::input_iterator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"S")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"T")," - ",(0,a.kt)("strong",{parentName:"li"},"(none)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Proj")," - ",(0,a.kt)("strong",{parentName:"li"},"(none)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(2)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"R")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::ranges::input_range"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Proj")," template argument has a default type of ",(0,a.kt)("inlineCode",{parentName:"p"},"std::identity")," for all overloads."),(0,a.kt)("p",null,"Additionally, each overload has the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(1)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"indirect_binary_predicate<ranges::equal_to, projected<I, Proj>, const T*>>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(2)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"indirect_binary_predicate<ranges::equal_to, projected<ranges::iterator_t<R>, Proj>, const T*>"))),(0,a.kt)("p",null,"(The ",(0,a.kt)("inlineCode",{parentName:"p"},"std::")," namespace was ommitted here for readability)"))}d.isMDXComponent=!0}}]);