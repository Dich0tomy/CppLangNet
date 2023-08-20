"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[3720,10377,34229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),l=n(86010),o=n(12466),s=n(76775),i=n(91980),c=n(67392),p=n(50012);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=u(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,c]=g({queryString:n,groupId:r}),[m,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),y=(()=>{const e=i??m;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),v(e)}),[c,v,l]),tabValues:l}}var y=n(72389);const f="tabList__CuJ",b="tabItem_LNqP";function _(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=p.indexOf(t),r=c[n].value;r!==s&&(m(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:u},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function h(e){const t=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",f)},a.createElement(_,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,y.Z)();return a.createElement(h,(0,r.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>r});const r=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(87462),a=n(67294);const l="columns_Terr";function o(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,a.createElement("div",(0,r.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}o.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(74866),l=n(85162),o=n(99372),s=n(72412);const i={};function c(e){const t=e.content||{};return r.createElement(a.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?r.createElement(l.Z,{value:n,label:o.gJ.get(n),default:c.default||0==t},c.simplified?r.createElement(r.Fragment,null,r.createElement(a.Z,{groupId:"view_mode",className:i.smallTabs},r.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,s.Z)(c.simplified)),r.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,s.Z)(c.detailed)))):c.value):r.createElement(l.Z,{value:n,label:o.gJ.get(n),default:0==t},(0,s.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>p,ZP:()=>c});var r=n(67294),a=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var o=n(98839);const s={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},i=e=>e.none?s.None:e.pub||e.public?s.Public:e.prot||e.protected?s.Protected:e.priv||e.private?s.Private:s.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>i(e).Order<i(t).Order));return r.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},r.createElement("tbody",null,n))})(r.Children.toArray(e.children))}function p(e){r.useContext(o.z);let t=(0,a.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const s=e.linkName||e.autoLink;!e.noLink&&s&&(t=r.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?r.createElement("span",{className:l[t]},n):null;return r.createElement("tr",null,!e.none&&r.createElement("td",{className:l.symbolProp},(e=>{const t=i(e);return r.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),r.createElement("td",{className:l.symbolName},t),r.createElement("td",{className:l.symbolDesc},(0,a.Z)(n)))}p.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=p},99372:(e,t,n)=>{n.d(t,{gJ:()=>p,eH:()=>g,U6:()=>u,OS:()=>d});var r=n(67294),a=n(95999);const l="markedText_c6kK",o="since_c1Q3",s="until_jXK6",i="removed_A_Kf",c="versionNumber_BiUX",p=new Map;function m(e){let{children:t,className:n}=e;return r.createElement("span",{className:l+(n?" "+n:"")},t)}function u(e){let{children:t,v:n}=e;return r.createElement(m,{className:o},t,"\xa0",r.createElement("span",{className:c},r.createElement("small",null,"(",p.get(`since-${n}`),")")))}function d(e){let{children:t,v:n}=e;return r.createElement(m,{className:s},t,"\xa0",r.createElement("span",{className:c},r.createElement("small",null,"(",p.get(`until-${n}`),")")))}function g(e){let{children:t,v:n}=e;return r.createElement(m,{className:i},t,"\xa0",r.createElement("span",{className:c},r.createElement("small",null,"(",p.get(`removed-${n}`),")")))}p.set("cpp98","C++98"),p.set("cpp03","C++03"),p.set("cpp11","C++11"),p.set("cpp14","C++14"),p.set("cpp17","C++17"),p.set("cpp20","C++20"),p.set("cpp23","C++23"),p.set("deprecated-",r.createElement(a.Z,null,"deprecated")),p.set("deprecated-cpp98",r.createElement(a.Z,null,"deprecated in C++98")),p.set("deprecated-cpp03",r.createElement(a.Z,null,"deprecated in C++03")),p.set("deprecated-cpp11",r.createElement(a.Z,null,"deprecated in C++11")),p.set("deprecated-cpp14",r.createElement(a.Z,null,"deprecated in C++14")),p.set("deprecated-cpp17",r.createElement(a.Z,null,"deprecated in C++17")),p.set("deprecated-cpp20",r.createElement(a.Z,null,"deprecated in C++20")),p.set("deprecated-cpp23",r.createElement(a.Z,null,"deprecated in C++23")),p.set("until-cpp98",r.createElement(a.Z,null,"until C++98")),p.set("until-cpp03",r.createElement(a.Z,null,"until C++03")),p.set("until-cpp11",r.createElement(a.Z,null,"until C++11")),p.set("until-cpp14",r.createElement(a.Z,null,"until C++14")),p.set("until-cpp17",r.createElement(a.Z,null,"until C++17")),p.set("until-cpp20",r.createElement(a.Z,null,"until C++20")),p.set("until-cpp23",r.createElement(a.Z,null,"until C++23")),p.set("since-cpp98",r.createElement(a.Z,null,"since C++98")),p.set("since-cpp03",r.createElement(a.Z,null,"since C++03")),p.set("since-cpp11",r.createElement(a.Z,null,"since C++11")),p.set("since-cpp14",r.createElement(a.Z,null,"since C++14")),p.set("since-cpp17",r.createElement(a.Z,null,"since C++17")),p.set("since-cpp20",r.createElement(a.Z,null,"since C++20")),p.set("since-cpp23",r.createElement(a.Z,null,"since C++23")),p.set("removed-",r.createElement(a.Z,null,"deleted")),p.set("removed-cpp98",r.createElement(a.Z,null,"removed in C++98")),p.set("removed-cpp03",r.createElement(a.Z,null,"removed in C++03")),p.set("removed-cpp11",r.createElement(a.Z,null,"removed in C++11")),p.set("removed-cpp14",r.createElement(a.Z,null,"removed in C++14")),p.set("removed-cpp17",r.createElement(a.Z,null,"removed in C++17")),p.set("removed-cpp20",r.createElement(a.Z,null,"removed in C++20")),p.set("removed-cpp23",r.createElement(a.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function r(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>r})},75366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},o=void 0,s={unversionedId:"std/algo/ranges/_codes/remove_copy/since-cpp20-detailed",id:"std/algo/ranges/_codes/remove_copy/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/remove_copy/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/remove_copy",slug:"/std/algo/ranges/_codes/remove_copy/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/remove_copy/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/remove_copy/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n  std::input_iterator I,\n  std::sentinel_for<I> S,\n  std::weakly_incrementable O,\n  class T,\n  class Proj = std::identity\n>\nrequires std::indirectly_copyable<I, O> &&\n         std::indirect_binary_predicate<ranges::equal_to,\n             std::projected<I, Proj>, const T*>\nconstexpr remove_copy_result<I, O>\n    remove_copy( I first, S last, O result, const T& value, Proj proj = {} );\n\n// (2)\ntemplate<\n  ranges::input_range R,\n  std::weakly_incrementable O, class T,\n  class Proj = std::identity\n>\nrequires std::indirectly_copyable<ranges::iterator_t<R>, O> &&\n         std::indirect_binary_predicate<ranges::equal_to,\n             std::projected<ranges::iterator_t<R>, Proj>, const T*>\nconstexpr remove_copy_result<ranges::borrowed_iterator_t<R>, O>\n    remove_copy( R&& r, O result, const T& value, Proj proj = {} );\n")))}m.isMDXComponent=!0},60930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},o=void 0,s={unversionedId:"std/algo/ranges/_codes/remove_copy/since-cpp20-simplified",id:"std/algo/ranges/_codes/remove_copy/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/remove_copy/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/remove_copy",slug:"/std/algo/ranges/_codes/remove_copy/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/remove_copy/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/remove_copy/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nrequires constexpr remove_copy_result<I, O>\n    remove_copy( I first, S last, O result, const T& value, Proj proj = {} );\n\n// (2)\nrequires constexpr remove_copy_result<ranges::borrowed_iterator_t<R>, O>\n    remove_copy( R&& r, O result, const T& value, Proj proj = {} );\n")),(0,a.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"I")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::input_iterator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"S")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"O")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::weakly_incrementable")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"R")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::input_range")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"T")," - ",(0,a.kt)("strong",{parentName:"li"},"(none)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Proj")," - ",(0,a.kt)("strong",{parentName:"li"},"(none)"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Proj")," template argument has a default type of ",(0,a.kt)("inlineCode",{parentName:"p"},"std::identity")," for all overloads."),(0,a.kt)("p",null,"Additionally, each overload has the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(1)"),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"indirectly_copyable<I, O>\n&& indirect_binary_predicate<ranges::equal_to, projected<I, Proj>, const T*>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(2)"),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"indirectly_copyable<ranges::iterator_t<R>, O>\n&& indirect_binary_predicate<ranges::equal_to, projected<ranges::iterator_t<R>, Proj>, const T*>\n")))),(0,a.kt)("p",null,"(The ",(0,a.kt)("inlineCode",{parentName:"p"},"std::")," namespace was ommitted here for readability)"))}m.isMDXComponent=!0},94756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>_,frontMatter:()=>m,metadata:()=>d,toc:()=>v});var r=n(87462),a=n(67294),l=n(3905),o=n(55059),s=n(22307),i=n(99801),c=n(75366),p=n(60930);const m={title:"ranges::remove_copy algorithm",sidebar_label:"ranges::remove_copy(  )",description:"ranges::remove_copy algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","remove_copy","remove","erase"],cppreference_origin_rel:"w/cpp/algorithm/ranges/remove_copy"},u=void 0,d={unversionedId:"std/algo/ranges/remove_copy",id:"std/algo/ranges/remove_copy",title:"ranges::remove_copy algorithm",description:"ranges::remove_copy algorithm C++ documentation",source:"@site/content/docs/std/algo/ranges/remove_copy.mdx",sourceDirName:"std/algo/ranges",slug:"/std/algo/ranges/remove_copy",permalink:"/CppLangNet/docs/std/algo/ranges/remove_copy",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/remove_copy.mdx",tags:[{label:"ranges",permalink:"/CppLangNet/docs/tags/ranges"},{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"remove_copy",permalink:"/CppLangNet/docs/tags/remove-copy"},{label:"remove",permalink:"/CppLangNet/docs/tags/remove"},{label:"erase",permalink:"/CppLangNet/docs/tags/erase"}],version:"current",frontMatter:{title:"ranges::remove_copy algorithm",sidebar_label:"ranges::remove_copy(  )",description:"ranges::remove_copy algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","remove_copy","remove","erase"],cppreference_origin_rel:"w/cpp/algorithm/ranges/remove_copy"},sidebar:"defaultSidebar",previous:{title:"ranges::remove(  )",permalink:"/CppLangNet/docs/std/algo/ranges/remove"},next:{title:"ranges::remove_copy_if(  )",permalink:"/CppLangNet/docs/std/algo/ranges/remove_copy_if"}},g={},v=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Notes",id:"notes",level:3},{value:"Examples",id:"examples",level:3}],y=(f="Since",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var f;const b={toc:v};function _(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdrangesremove_copy-algorithm"},"std::ranges::remove_copy() algorithm"),(0,l.kt)(i.Z,{content:{"since-cpp20":{simplified:(0,l.kt)(p.default,{mdxType:"Signature_SinceCpp20_Simplified"}),detailed:(0,l.kt)(c.default,{mdxType:"Signature_SinceCpp20_Detailed"})}},mdxType:"SwitchView"}),(0,l.kt)("p",null,"With the helper types defined as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"template< class I, class O >\nusing remove_copy_result = ranges::in_out_result<I, O>;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," Removes all elements that are equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", using ",(0,l.kt)("inlineCode",{parentName:"p"},"std::invoke(proj, *i) == value")," to compare.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,l.kt)("strong",{parentName:"p"},"(1)"),", but uses ",(0,l.kt)("inlineCode",{parentName:"p"},"r")," as the source range, as if using ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::begin(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"first")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::end(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),"."))),(0,l.kt)("p",null,"Removing is done by shifting (by means of move assignment) the elements in the range in such a way that the elements that are not to be removed appear in the beginning of the range."),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"Relative order of the elements that remain is preserved and the physical size of the container is unchanged.")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Iterators pointing to an element between the new ",(0,l.kt)("em",{parentName:"p"},"logical")," end and the ",(0,l.kt)("em",{parentName:"p"},"physical")," end of the range are still ",(0,l.kt)("a",{href:"#"},"dereferenceable"),", ",(0,l.kt)(y,{v:"cpp11",mdxType:"Since"},"but the elements themselves have unspecified values (as per ",(0,l.kt)("a",{href:"/docs/named_req/MoveAssignable"},"MoveAssignable")," post-condition)."))),(0,l.kt)("p",null,"The function-like entities described on this page are ",(0,l.kt)("a",{parentName:"p",href:"/docs/std/algo/niebloids"},(0,l.kt)("strong",{parentName:"a"},"niebloids")),"."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(o.ZP,{mdxType:"SymbolTable"},(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)(a.Fragment,null," ",(0,l.kt)("code",null,"first")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last")," "),mdxType:"Symbol"},"The range of elements to copy."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"r"),mdxType:"Symbol"},"The range of elements to copy."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"result"),mdxType:"Symbol"},"The beginning of the destination range."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"value"),mdxType:"Symbol"},"The value of elements ",(0,l.kt)("b",null,">not")," to copy."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"proj"),mdxType:"Symbol"},"The projection to apply to the elements.")),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"{\n  last,\n  result + N\n}\n")),(0,l.kt)("p",null,"Where ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," is the number of elements copied."),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"Exactly ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::distance(first, last)")," applications of projection ",(0,l.kt)("inlineCode",{parentName:"p"},"proj"),"."),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(none)")),(0,l.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"remove_copy(1)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"struct remove_copy_fn\n{\n    template<std::input_iterator I, std::sentinel_for<I> S, std::weakly_incrementable O,\n             class T, class Proj = std::identity>\n    requires std::indirectly_copyable<I, O> &&\n             std::indirect_binary_predicate<ranges::equal_to,\n                                            std::projected<I, Proj>, const T*>\n    constexpr ranges::remove_copy_result<I, O>\n        operator()(I first, S last, O result, const T& value, Proj proj = {}) const\n    {\n        for (; !(first == last); ++first)\n        {\n            if (value != std::invoke(proj, *first))\n            {\n                *result = *first;\n                ++result;\n            }\n        }\n        return {std::move(first), std::move(result)};\n    }\n\n    template<ranges::input_range R, std::weakly_incrementable O, class T,\n             class Proj = std::identity>\n    requires std::indirectly_copyable<ranges::iterator_t<R>, O> &&\n             std::indirect_binary_predicate<ranges::equal_to,\n             std::projected<ranges::iterator_t<R>, Proj>, const T*>\n    constexpr ranges::remove_copy_result<ranges::borrowed_iterator_t<R>, O>\n        operator()(R&& r, O result, const T& value, Proj proj = {}) const\n    {\n        return (*this)(ranges::begin(r), ranges::end(r), std::move(result), value,\n                       std::move(proj));\n    }\n};\n\ninline constexpr remove_copy_fn remove_copy {};\n"))),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("p",null,"The algorithm is ",(0,l.kt)("em",{parentName:"p"},"stable"),", that is, preserves the relative order of the copied elements."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(s.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <algorithm>\n#include <array>\n#include <complex>\n#include <iomanip>\n#include <iostream>\n#include <iterator>\n#include <string_view>\n#include <vector>\n\nvoid print(const auto rem, const auto& v)\n{\n    std::cout << rem << \' \';\n    for (const auto& e : v)\n        std::cout << e << \' \';\n    std::cout << \'\\n\';\n}\n\nint main()\n{\n    // Filter out the hash symbol from the given string.\n    const std::string_view str {"#Small #Buffer #Optimization"};\n    std::cout << "before: " << std::quoted(str) << \'\\n\';\n\n    std::cout << "after:  \\"";\n    std::ranges::remove_copy(str.begin(), str.end(),\n                             std::ostream_iterator<char>(std::cout), \'#\');\n    std::cout << "\\"\\n";\n\n    // Copy only the complex numbers with positive imaginary part.\n    using Ci = std::complex<int>;\n    constexpr std::array<Ci, 5> source\n    {\n        Ci {1, 0}, Ci {0, 1}, Ci {2, -1}, Ci {3, 2}, Ci {4, -3}\n    };\n    std::vector<std::complex<int>> target;\n\n    std::ranges::remove_copy_if(\n        source,\n        std::back_inserter(target),\n        [](int imag) { return imag <= 0; },\n        [](Ci z) { return z.imag(); }\n    );\n\n    print("source:", source);\n    print("target:", target);\n}\n'))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},'before: "#Small #Buffer #Optimization"\nafter:  "Small Buffer Optimization"\nsource: (1,0) (0,1) (2,-1) (3,2) (4,-3)\ntarget: (0,1) (3,2)\n')))))}_.isMDXComponent=!0}}]);