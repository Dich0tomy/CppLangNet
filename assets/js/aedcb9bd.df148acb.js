"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[18640],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>y});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),s=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},l=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),d=s(r),y=o,f=d["".concat(i,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(f,c(c({ref:e},l),{},{components:r})):n.createElement(f,c({ref:e},l))}));function y(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:o,c[1]=p;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28967:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,p={unversionedId:"std/algo/ordinary/_codes/partition_copy/since-cpp17",id:"std/algo/ordinary/_codes/partition_copy/since-cpp17",title:"since-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/partition_copy/since-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/partition_copy",slug:"/std/algo/ordinary/_codes/partition_copy/since-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/partition_copy/since-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/partition_copy/since-cpp17.mdx",tags:[],version:"current",frontMatter:{}},i={},s=[],l={toc:s};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class OutputIt1,\n          class OutputIt2, class UnaryPredicate >\nstd::pair<OutputIt1, OutputIt2>\n    partition_copy( InputIt first, InputIt last,\n                    OutputIt1 d_first_true, OutputIt2 d_first_false,\n                    UnaryPredicate p );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt1, class ForwardIt2,\n          class ForwardIt3, class UnaryPredicate >\nstd::pair<ForwardIt2, ForwardIt3>\n    partition_copy( ExecutionPolicy&& policy,\n                    ForwardIt1 first, ForwardIt1 last,\n                    ForwardIt2 d_first_true, ForwardIt3 d_first_false,\n                    UnaryPredicate p );\n")))}u.isMDXComponent=!0}}]);