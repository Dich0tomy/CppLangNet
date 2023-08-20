"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[40478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"std/algo/ranges/_codes/starts_with/since-cpp20-simplified",id:"std/algo/ranges/_codes/starts_with/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/starts_with/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/starts_with",slug:"/std/algo/ranges/_codes/starts_with/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/starts_with/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/starts_with/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},p={},s=[],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr bool starts_with( I1 first1, S1 last1, I2 first2, S2 last2,\n                            Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );\n\n// (2)\nconstexpr bool starts_with( R1&& r1, R2&& r2,\n                            Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );\n")),(0,a.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"I1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"I2")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::input_iterator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"S1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"S2")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I1>"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I2>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Pred")," - ",(0,a.kt)("strong",{parentName:"li"},"(none)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Proj1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Proj2")," - ",(0,a.kt)("strong",{parentName:"li"},"(none)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(2)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"R1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"R2")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::ranges::input_range"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Pred")," template argumenth as a default type of ",(0,a.kt)("inlineCode",{parentName:"p"},"ranges::equal_to")," for all overloads.",(0,a.kt)("br",{parentName:"p"}),"\n","The ",(0,a.kt)("inlineCode",{parentName:"p"},"Proj1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Proj2")," template arguments have a default type of ",(0,a.kt)("inlineCode",{parentName:"p"},"std::identity")," for all overloads."),(0,a.kt)("p",null,"Additionally, each overload has the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(1)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"indirectly_comparable<I1, I2, Pred, Proj1, Proj2>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(2)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"indirectly_comparable<ranges::iterator_t<R1>, ranges::iterator_t<R2>, Pred, Proj1, Proj2>"))),(0,a.kt)("p",null,"(The ",(0,a.kt)("inlineCode",{parentName:"p"},"std::")," namespace was ommitted here for readability)"))}d.isMDXComponent=!0}}]);