"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[34140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=i(n),f=o,y=u["".concat(s,".").concat(f)]||u[f]||l[f]||a;return n?r.createElement(y,c(c({ref:t},d),{},{components:n})):r.createElement(y,c({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},c=void 0,p={unversionedId:"std/algo/ranges/_codes/any_of/since-cpp20-detailed",id:"std/algo/ranges/_codes/any_of/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/any_of/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/any_of",slug:"/std/algo/ranges/_codes/any_of/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/any_of/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/any_of/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},s={},i=[],d={toc:i};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n    std::input_iterator I,\n    std::sentinel_for<I> S,\n    class Proj = std::identity,\n    std::indirect_unary_predicate<std::projected<I, Proj>> Pred\n>\nconstexpr bool any_of( I first, S last, Pred pred, Proj proj = {} );\n\n// (2)\ntemplate<\n    ranges::input_range R,\n    class Proj = std::identity,\n    std::indirect_unary_predicate<\n    std::projected<ranges::iterator_t<R>,Proj>> Pred\n>\nconstexpr bool any_of( R&& r, Pred pred, Proj proj = {} );\n")))}l.isMDXComponent=!0}}]);