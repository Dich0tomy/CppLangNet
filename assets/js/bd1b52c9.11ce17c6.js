"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[16718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,p={unversionedId:"std/algo/ranges/_codes/includes/since-cpp20-simplified",id:"std/algo/ranges/_codes/includes/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/includes/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/includes",slug:"/std/algo/ranges/_codes/includes/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/includes/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/includes/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},l={},s=[],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr bool\n    includes( I1 first1, S1 last1, I2 first2, S2 last2,\n              Comp comp = {}, Proj1 proj1 = {}, Proj2 proj2 = {} )\n\n// (2)\nconstexpr bool\n    includes( R1&& r1, R2&& r2, Comp comp = {}, Proj1 proj1 = {}, Proj2 proj2 = {} )\n")),(0,a.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"I1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"I2")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"std::input_iterator"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"S1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"S2")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"std::sentinel_for<I1>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"std::sentinel_for<I2>"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"R1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"R2")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"std::ranges::input_range"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"O")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"std::weakly_incrementable"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Comp"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(1)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"indirect_strict_weak_order<projected<I1, Proj1>, projected<I2, Proj2>>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(2)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"indirect_strict_weak_order<projected<ranges::iterator_t<R1> Proj1>, projected<ranges::iterator_t<R2> Proj2>>"))),(0,a.kt)("p",{parentName:"li"},"(The ",(0,a.kt)("inlineCode",{parentName:"p"},"std::")," namespace was ommited here for readability)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Proj1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Proj2")," - ",(0,a.kt)("strong",{parentName:"p"},"(none)")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Proj")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Comp")," template arguments have the following default types: ",(0,a.kt)("inlineCode",{parentName:"p"},"std::identity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ranges::less")," for all overloads."),(0,a.kt)("p",null,"(The ",(0,a.kt)("inlineCode",{parentName:"p"},"std::")," namespace was ommited here for readability)"))}d.isMDXComponent=!0}}]);