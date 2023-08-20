"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[39947],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>y});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,c=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),d=p(n),y=a,f=d["".concat(s,".").concat(y)]||d[y]||u[y]||c;return n?r.createElement(f,o(o({ref:e},l),{},{components:n})):r.createElement(f,o({ref:e},l))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64150:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const c={},o=void 0,i={unversionedId:"std/algo/ordinary/_codes/inclusive_scan/since-cpp17",id:"std/algo/ordinary/_codes/inclusive_scan/since-cpp17",title:"since-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/inclusive_scan/since-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/inclusive_scan",slug:"/std/algo/ordinary/_codes/inclusive_scan/since-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/inclusive_scan/since-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/inclusive_scan/since-cpp17.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[],l={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class OutputIt >\nOutputIt inclusive_scan( InputIt first, InputIt last, OutputIt d_first );\n\n// (2)\ntemplate< class InputIt, class OutputIt, class BinaryOperation >\nOutputIt inclusive_scan( InputIt first, InputIt last, OutputIt d_first, BinaryOperation binary_op );\n\n// (3)\ntemplate< class InputIt, class OutputIt, class BinaryOperation, class T >\nOutputIt inclusive_scan( InputIt first, InputIt last, OutputIt d_first, BinaryOperation binary_op, T init );\n\n// (4)\ntemplate< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >\nForwardtIt2 inclusive_scan( ExecutionPolicy&& policy, ForwardIt1 first, ForwardIt1 last, ForwardIt2 d_first );\n\n// (5)\ntemplate< class ExecutionPolicy, class ForwardIt1, class ForwardIt2, class BinaryOperation >\nForwardIt2 inclusive_scan( ExecutionPolicy&& policy,\n                           ForwardIt1 first, ForwardIt1 last, ForwardIt2 d_first,\n                           BinaryOperation binary_op );\n\n// (6)\ntemplate< class ExecutionPolicy, class ForwardIt1, class ForwardIt2, class BinaryOperation, class T >\nForwardIt2 inclusive_scan( ExecutionPolicy&& policy,\n                           ForwardIt1 first, ForwardIt1 last, ForwardIt2 d_first,\n                           BinaryOperation binary_op, T init );\n")))}u.isMDXComponent=!0}}]);