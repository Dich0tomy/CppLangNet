"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[39666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,g=u["".concat(c,".").concat(f)]||u[f]||l[f]||a;return r?n.createElement(g,s(s({ref:t},d),{},{components:r})):n.createElement(g,s({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,i={unversionedId:"std/algo/ranges/_codes/is_permutation/since-cpp20-detailed",id:"std/algo/ranges/_codes/is_permutation/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/is_permutation/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/is_permutation",slug:"/std/algo/ranges/_codes/is_permutation/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/is_permutation/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/is_permutation/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],d={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n  std::forward_iterator I1,\n  std::sentinel_for<I1> S1,\n  std::forward_iterator I2,\n  std::sentinel_for<I2> S2,\n  class Proj1 = std::identity,\n  class Proj2 = std::identity,\n  std::indirect_equivalence_relation< std::projected<I1, Proj1>,\n                                      std::projected<I2, Proj2> > Pred = ranges::equal_to\n>\nconstexpr bool is_permutation( I1 first1, S1 last1, I2 first2, S2 last2,\n                               Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );\n\n// (2)\ntemplate<\n  ranges::forward_range R1,\n  ranges::forward_range R2,\n  class Proj1 = std::identity,\n  class Proj2 = std::identity,\n  std::indirect_equivalence_relation< std::projected<ranges::iterator_t<R1>, Proj1>,\n                                      std::projected<ranges::iterator_t<R2>, Proj2> > Pred = ranges::equal_to\n>\nconstexpr bool is_permutation( R1&& r1, R2&& r2, Pred pred = {},\n                               Proj1 proj1 = {}, Proj2 proj2 = {} );\n")))}l.isMDXComponent=!0}}]);