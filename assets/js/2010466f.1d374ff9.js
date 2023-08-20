"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[41720],{3905:(t,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},i=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),d=l(n),f=a,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(y,c(c({ref:e},i),{},{components:n})):r.createElement(y,c({ref:e},i))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:a,c[1]=p;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1777:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},c=void 0,p={unversionedId:"std/algo/ordinary/_codes/equal/since-cpp14",id:"std/algo/ordinary/_codes/equal/since-cpp14",title:"since-cpp14",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/equal/since-cpp14.mdx",sourceDirName:"std/algo/ordinary/_codes/equal",slug:"/std/algo/ordinary/_codes/equal/since-cpp14",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/equal/since-cpp14",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/equal/since-cpp14.mdx",tags:[],version:"current",frontMatter:{}},s={},l=[],i={toc:l};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt1, class InputIt2 >\nbool equal( InputIt1 first1, InputIt1 last1, InputIt2 first2 );\n\n// (2)\ntemplate< class InputIt1, class InputIt2, class BinaryPredicate >\nbool equal( InputIt1 first1, InputIt1 last1, InputIt2 first2, BinaryPredicate p );\n\n// (3)\ntemplate< class InputIt1, class InputIt2 >\nbool equal( InputIt1 first1, InputIt1 last1, InputIt2 first2, InputIt2 last2 );\n\n// (4)\ntemplate< class InputIt1, class InputIt2, class BinaryPredicate >\nbool equal( InputIt1 first1, InputIt1 last1, InputIt2 first2, InputIt2 last2, BinaryPredicate p );\n")))}u.isMDXComponent=!0}}]);