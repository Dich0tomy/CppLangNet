"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[16028],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(r),f=s,u=m["".concat(i,".").concat(f)]||m[f]||d[f]||o;return r?n.createElement(u,c(c({ref:t},l),{},{components:r})):n.createElement(u,c({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,c=new Array(o);c[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:s,c[1]=a;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const o={},c=void 0,a={unversionedId:"std/algo/ranges/_codes/set_symmetric_difference/since-cpp20-detailed",id:"std/algo/ranges/_codes/set_symmetric_difference/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/set_symmetric_difference/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/set_symmetric_difference",slug:"/std/algo/ranges/_codes/set_symmetric_difference/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/set_symmetric_difference/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/set_symmetric_difference/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},i={},p=[],l={toc:p};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n  std::input_iterator I1,\n  std::sentinel_for<I1> S1,\n  std::input_iterator I2,\n  std::sentinel_for<I2> S2,\n  std::weakly_incrementable O,\n  class Comp = ranges::less,\n  class Proj1 = std::identity,\n  class Proj2 = std::identity\n>\n  requires std::mergeable<I1, I2, O, Comp, Proj1, Proj2>\nconstexpr set_symmetric_difference_result<I1, I2, O>\n    set_symmetric_difference( I1 first1, S1 last1, I2 first2, S2 last2,\n                              O result, Comp comp = {},\n                              Proj1 proj1 = {}, Proj2 proj2 = {} );\n\n// (2)\ntemplate<\n  ranges::input_range R1,\n  ranges::input_range R2,\n  std::weakly_incrementable O,\n  class Comp = ranges::less,\n  class Proj1 = std::identity,\n  class Proj2 = std::identity\n>\n  requires std::mergeable<ranges::iterator_t<R1>, ranges::iterator_t<R2>,\n                          O, Comp, Proj1, Proj2>\nconstexpr set_symmetric_difference_result<ranges::borrowed_iterator_t<R1>,\n                                          ranges::borrowed_iterator_t<R2>, O>\n    set_symmetric_difference( R1&& r1, R2&& r2, O result, Comp comp = {},\n                              Proj1 proj1 = {}, Proj2 proj2 = {} );\n")))}d.isMDXComponent=!0}}]);