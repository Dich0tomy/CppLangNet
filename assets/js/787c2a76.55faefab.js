"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[28192],{3905:(t,r,e)=>{e.d(r,{Zo:()=>p,kt:()=>u});var n=e(67294);function o(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){o(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function c(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)e=a[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)e=a[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var i=n.createContext({}),l=function(t){var r=n.useContext(i),e=r;return t&&(e="function"==typeof t?t(r):s(s({},r),t)),e},p=function(t){var r=l(t.components);return n.createElement(i.Provider,{value:r},t.children)},d={inlineCode:"code",wrapper:function(t){var r=t.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(t,r){var e=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),f=l(e),u=o,y=f["".concat(i,".").concat(u)]||f[u]||d[u]||a;return e?n.createElement(y,s(s({ref:r},p),{},{components:e})):n.createElement(y,s({ref:r},p))}));function u(t,r){var e=arguments,o=r&&r.mdxType;if("string"==typeof t||o){var a=e.length,s=new Array(a);s[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,s[1]=c;for(var l=2;l<a;l++)s[l]=e[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,e)}f.displayName="MDXCreateElement"},84624:(t,r,e)=>{e.r(r),e.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=e(87462),o=(e(67294),e(3905));const a={},s=void 0,c={unversionedId:"std/algo/ordinary/_codes/find_first_of/since-cpp17",id:"std/algo/ordinary/_codes/find_first_of/since-cpp17",title:"since-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/find_first_of/since-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/find_first_of",slug:"/std/algo/ordinary/_codes/find_first_of/since-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/find_first_of/since-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/find_first_of/since-cpp17.mdx",tags:[],version:"current",frontMatter:{}},i={},l=[],p={toc:l};function d(t){let{components:r,...e}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,e,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class ForwardIt >\nInputIt find_first_of( InputIt first, InputIt last, ForwardIt s_first, ForwardIt s_last );\n\n// (2)\ntemplate< class ForwardIt1, class ForwardIt2 >\nForwardIt1 find_end( ForwardIt1 first, ForwardIt1 last, ForwardIt2 s_first, ForwardIt2 s_last );\n\n// (3)\ntemplate< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >\nForwardIt1 find_first_of( ExecutionPolicy&& policy,\n                          ForwardIt1 first, ForwardIt1 last,\n                          ForwardIt2 s_first, ForwardIt2 s_last );\n\n// (4)\ntemplate< class ExecutionPolicy, class ForwardIt1, class ForwardIt2, class BinaryPredicate >\nForwardIt1 find_first_of( ExecutionPolicy&& policy,\n                          ForwardIt1 first, ForwardIt last,\n                          ForwardIt2 s_first, ForwardIt2 s_last,\n                          BinaryPredicate p );\n")))}d.isMDXComponent=!0}}]);