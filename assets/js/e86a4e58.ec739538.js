"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[86846],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(r),y=o,f=d["".concat(i,".").concat(y)]||d[y]||u[y]||c;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32491:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const c={},a=void 0,p={unversionedId:"std/algo/ordinary/_codes/copy/since-cpp20",id:"std/algo/ordinary/_codes/copy/since-cpp20",title:"since-cpp20",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/copy/since-cpp20.mdx",sourceDirName:"std/algo/ordinary/_codes/copy",slug:"/std/algo/ordinary/_codes/copy/since-cpp20",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/copy/since-cpp20",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/copy/since-cpp20.mdx",tags:[],version:"current",frontMatter:{}},i={},s=[],l={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class OutputIt >\nconstexpr OutputIt copy( InputIt first, InputIt last, OutputIt d_first );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >\nForwardIt2 copy( ExecutionPolicy&& policy,\n                 ForwardIt1 first, ForwardIt1 last, ForwardIt2 d_first );\n")))}u.isMDXComponent=!0}}]);