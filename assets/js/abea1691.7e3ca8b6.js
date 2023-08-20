"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[13856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},o=void 0,l={unversionedId:"std/algo/ranges/_codes/uninitialized_copy_n/since-cpp20-simplified",id:"std/algo/ranges/_codes/uninitialized_copy_n/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/uninitialized_copy_n/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/uninitialized_copy_n",slug:"/std/algo/ranges/_codes/uninitialized_copy_n/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/uninitialized_copy_n/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/uninitialized_copy_n/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],s={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nuninitialized_copy_n_result<I, O>\n  uninitialized_copy_n( I ifirst, std::iter_difference_t<I> count, O ofirst, S olast );\n")),(0,i.kt)("p",null,"The type of arguments are generic and have following constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"I")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"std::input_iterator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"O")," - ",(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"no-throw-forward-iterator"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"S")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"std::no-throw-sentinel-for<O>"))),(0,i.kt)("p",null,"Additionally, each overload has the following constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(1)")," ",(0,i.kt)("inlineCode",{parentName:"li"},"std::constructible_from<std::iter_value_t<O>, std::iter_reference_t<I>>"))))}d.isMDXComponent=!0}}]);