"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[18681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),y=o,f=d["".concat(i,".").concat(y)]||d[y]||s[y]||c;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,p=new Array(c);p[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var l=2;l<c;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const c={},p=void 0,a={unversionedId:"std/algo/ordinary/_codes/copy/until-cpp17",id:"std/algo/ordinary/_codes/copy/until-cpp17",title:"until-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/copy/until-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/copy",slug:"/std/algo/ordinary/_codes/copy/until-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/copy/until-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/copy/until-cpp17.mdx",tags:[],version:"current",frontMatter:{}},i={},l=[],u={toc:l};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class OutputIt >\nOutputIt copy( InputIt first, InputIt last, OutputIt d_first );\n")))}s.isMDXComponent=!0}}]);