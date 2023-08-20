"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[46693,24358,35853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),s=n(76775),i=n(91980),c=n(67392),p=n(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,c]=g({queryString:n,groupId:a}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=i??u;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var k=n(72389);const b="tabList__CuJ",v="tabItem_LNqP";function N(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==s&&(u(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return r.createElement(_,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(87462),r=n(67294);const l="columns_Terr";function o(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}o.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(74866),l=n(85162),o=n(99372),s=n(72412);const i={};function c(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?a.createElement(l.Z,{value:n,label:o.gJ.get(n),default:c.default||0==t},c.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:i.smallTabs},a.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,s.Z)(c.simplified)),a.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,s.Z)(c.detailed)))):c.value):a.createElement(l.Z,{value:n,label:o.gJ.get(n),default:0==t},(0,s.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>p,ZP:()=>c});var a=n(67294),r=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var o=n(98839);const s={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},i=e=>e.none?s.None:e.pub||e.public?s.Public:e.prot||e.protected?s.Protected:e.priv||e.private?s.Private:s.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>i(e).Order<i(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function p(e){a.useContext(o.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const s=e.linkName||e.autoLink;!e.noLink&&s&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?a.createElement("span",{className:l[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:l.symbolProp},(e=>{const t=i(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:l.symbolName},t),a.createElement("td",{className:l.symbolDesc},(0,r.Z)(n)))}p.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=p},99372:(e,t,n)=>{n.d(t,{gJ:()=>p,eH:()=>g,U6:()=>d,OS:()=>m});var a=n(67294),r=n(95999);const l="markedText_c6kK",o="since_c1Q3",s="until_jXK6",i="removed_A_Kf",c="versionNumber_BiUX",p=new Map;function u(e){let{children:t,className:n}=e;return a.createElement("span",{className:l+(n?" "+n:"")},t)}function d(e){let{children:t,v:n}=e;return a.createElement(u,{className:o},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return a.createElement(u,{className:s},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`until-${n}`),")")))}function g(e){let{children:t,v:n}=e;return a.createElement(u,{className:i},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`removed-${n}`),")")))}p.set("cpp98","C++98"),p.set("cpp03","C++03"),p.set("cpp11","C++11"),p.set("cpp14","C++14"),p.set("cpp17","C++17"),p.set("cpp20","C++20"),p.set("cpp23","C++23"),p.set("deprecated-",a.createElement(r.Z,null,"deprecated")),p.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),p.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),p.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),p.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),p.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),p.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),p.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),p.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),p.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),p.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),p.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),p.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),p.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),p.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),p.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),p.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),p.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),p.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),p.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),p.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),p.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),p.set("removed-",a.createElement(r.Z,null,"deleted")),p.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),p.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),p.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),p.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),p.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),p.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),p.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},30372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,s={unversionedId:"std/algo/ranges/_codes/equal_range/since-cpp20-detailed",id:"std/algo/ranges/_codes/equal_range/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/equal_range/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/equal_range",slug:"/std/algo/ranges/_codes/equal_range/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/equal_range/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/equal_range/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n  std::forward_iterator I,\n  std::sentinel_for<I> S,\n  class T, class Proj = std::identity,\n  std::indirect_strict_weak_order< const T*, std::projected<I, Proj>> Comp = ranges::less\n>\nconstexpr ranges::subrange<I>\n  equal_range( I first, S last, const T& value, Comp comp = {}, Proj proj = {} );\n\n// (2)\ntemplate<\n  ranges::forward_range R,\n  class T,\n  class Proj = std::identity,\n  std::indirect_strict_weak_order< const T*, std::projected<ranges::iterator_t<R>, Proj>> Comp = ranges::less\n>\nconstexpr ranges::borrowed_subrange_t<R>\n  equal_range( R&& r, const T& value, Comp comp = {}, Proj proj = {} );\n")))}u.isMDXComponent=!0},7773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,s={unversionedId:"std/algo/ranges/_codes/equal_range/since-cpp20-simplified",id:"std/algo/ranges/_codes/equal_range/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/equal_range/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/equal_range",slug:"/std/algo/ranges/_codes/equal_range/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/equal_range/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/equal_range/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr ranges::subrange<I>\n  equal_range( I first, S last, const T& value, Comp comp = {}, Proj proj = {} );\n\n// (2)\nconstexpr ranges::borrowed_subrange_t<R>\n  equal_range( R&& r, const T& value, Comp comp = {}, Proj proj = {} );\n")),(0,r.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"I")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"std::forward_iterator"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"S")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"std::sentinel_for<I>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"R")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ranges::forward_range"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Comp"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(1)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"indirect_strict_weak_order< const T*, projected<I, Proj>>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(2)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"indirect_strict_weak_order< const T*, projected<ranges::iterator_t<R>, Proj>>"))),(0,r.kt)("p",{parentName:"li"},"(The ",(0,r.kt)("inlineCode",{parentName:"p"},"std::")," namespace was ommitted here for readability)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"T")," - ",(0,r.kt)("strong",{parentName:"p"},"(none)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Proj")," - ",(0,r.kt)("strong",{parentName:"p"},"(none)")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Proj")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Comp")," template arguments have the following default types: ",(0,r.kt)("inlineCode",{parentName:"p"},"std::identity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ranges::less")," for all overloads."))}u.isMDXComponent=!0},67449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var a=n(87462),r=n(67294),l=n(3905),o=n(55059),s=n(22307),i=n(99801),c=n(30372),p=n(7773);const u={title:"ranges::equal_range algorithm",sidebar_label:"ranges::equal_range(  )",description:"ranges::equal_range algorithm C++ documentation",hide_title:!0,tags:["algorithm","equal_range","bound","binary_search"],cppreference_origin_rel:"w/cpp/algorithm/ranges/equal_range"},d=void 0,m={unversionedId:"std/algo/ranges/equal_range",id:"std/algo/ranges/equal_range",title:"ranges::equal_range algorithm",description:"ranges::equal_range algorithm C++ documentation",source:"@site/content/docs/std/algo/ranges/equal_range.mdx",sourceDirName:"std/algo/ranges",slug:"/std/algo/ranges/equal_range",permalink:"/CppLangNet/docs/std/algo/ranges/equal_range",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/equal_range.mdx",tags:[{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"equal_range",permalink:"/CppLangNet/docs/tags/equal-range"},{label:"bound",permalink:"/CppLangNet/docs/tags/bound"},{label:"binary_search",permalink:"/CppLangNet/docs/tags/binary-search"}],version:"current",frontMatter:{title:"ranges::equal_range algorithm",sidebar_label:"ranges::equal_range(  )",description:"ranges::equal_range algorithm C++ documentation",hide_title:!0,tags:["algorithm","equal_range","bound","binary_search"],cppreference_origin_rel:"w/cpp/algorithm/ranges/equal_range"},sidebar:"defaultSidebar",previous:{title:"ranges::upper_bound(  )",permalink:"/CppLangNet/docs/std/algo/ranges/upper_bound"},next:{title:"binary_search(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/binary_search"}},g={},f=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Examples",id:"examples",level:3}],k={toc:f};function b(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdrangesequal_range-algorithm"},"std::ranges::equal_range() algorithm"),(0,l.kt)(i.Z,{content:{"since-cpp20":{simplified:(0,l.kt)(p.default,{mdxType:"Signature_SinceCpp20_Simplified"}),detailed:(0,l.kt)(c.default,{mdxType:"Signature_SinceCpp20_Detailed"})}},mdxType:"SwitchView"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," Returns a view containing all elements equivalent to value in the range [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),")."),(0,l.kt)("p",{parentName:"li"},"The range [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),") must be at least partially ordered with respect to ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", i.e. it must satisfy all of the following requirements:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Partitioned with respect to ",(0,l.kt)("inlineCode",{parentName:"li"},"element < value")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"comp(element, value)")," (that is, all elements for which the expression is ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," precedes all elements for which the expression is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),")."),(0,l.kt)("li",{parentName:"ul"},"Partitioned with respect to ",(0,l.kt)("inlineCode",{parentName:"li"},"!(value < element)")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"!comp(value, element)"),"."),(0,l.kt)("li",{parentName:"ul"},"For all elements, if ",(0,l.kt)("inlineCode",{parentName:"li"},"element < value")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"comp(element, value)")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," then ",(0,l.kt)("inlineCode",{parentName:"li"},"!(value < element)")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"!comp(value, element)")," is also ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,l.kt)("p",{parentName:"li"},"A fully-sorted range meets these criteria."),(0,l.kt)("p",{parentName:"li"},"The returned view is constructed from two iterators:"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Pointing to the first element that is ",(0,l.kt)("strong",{parentName:"li"},"not less")," than ",(0,l.kt)("inlineCode",{parentName:"li"},"value"),"."),(0,l.kt)("li",{parentName:"ol"},"Pointing to the first element ",(0,l.kt)("strong",{parentName:"li"},"greater")," than ",(0,l.kt)("inlineCode",{parentName:"li"},"value"),".")),(0,l.kt)("p",{parentName:"li"},"The first iterator may be alternatively obtained with ",(0,l.kt)("inlineCode",{parentName:"p"},"std::ranges::lower_bound()"),", the second - with ",(0,l.kt)("inlineCode",{parentName:"p"},"std::ranges::upper_bound()"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,l.kt)("strong",{parentName:"p"},"(1)"),", but uses ",(0,l.kt)("inlineCode",{parentName:"p"},"r")," as the source range, as if using ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::begin(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"first")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::end(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),"."))),(0,l.kt)("p",null,"The function-like entities described on this page are ",(0,l.kt)("a",{parentName:"p",href:"/docs/std/algo/niebloids"},(0,l.kt)("strong",{parentName:"a"},"niebloids")),"."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(o.ZP,{mdxType:"SymbolTable"},(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)(r.Fragment,null," ",(0,l.kt)("code",null,"first")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last")," "),mdxType:"Symbol"},"The partially-ordered range of elements to examine."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"r"),mdxType:"Symbol"},"The partially-ordered range of elements to examine."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"value"),mdxType:"Symbol"},"The value to compare the elements to."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"comp"),mdxType:"Symbol"},"Comparison predicate to apply to the projected elements."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"proj"),mdxType:"Symbol"},"Projection to apply to the elements.")),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"std::ranges::subrange"))," containing a pair of iterators defining the wanted range:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Pointing to the first element that is ",(0,l.kt)("strong",{parentName:"li"},"not less")," than ",(0,l.kt)("inlineCode",{parentName:"li"},"value"),"."),(0,l.kt)("li",{parentName:"ol"},"Pointing to the first element ",(0,l.kt)("strong",{parentName:"li"},"greater")," than ",(0,l.kt)("inlineCode",{parentName:"li"},"value"),".")),(0,l.kt)("p",null,"If there are no elements ",(0,l.kt)("strong",{parentName:"p"},"not less")," than ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"last")," is returned as the first element.",(0,l.kt)("br",{parentName:"p"}),"\n","Similarly if there are no elements ",(0,l.kt)("strong",{parentName:"p"},"greater")," than ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"last")," is returned as the second element."),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"At most ",(0,l.kt)("strong",{parentName:"p"},"log2(last - first) + O(1)")," comparisons and applications of the projection."),(0,l.kt)("p",null,"However, for an iterator that does not model ",(0,l.kt)("a",{parentName:"p",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"random_access_iterator")),", the number of iterator increments is ",(0,l.kt)("strong",{parentName:"p"},"linear"),"."),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(none)")),(0,l.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"ranges::equal_range"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"struct equal_range_fn\n{\n    template<std::forward_iterator I, std::sentinel_for<I> S,\n             class T, class Proj = std::identity,\n             std::indirect_strict_weak_order<\n                 const T*,\n                 std::projected<I, Proj>> Comp = ranges::less>\n    constexpr ranges::subrange<I>\n        operator()(I first, S last, const T& value, Comp comp = {}, Proj proj = {}) const\n    {\n        return ranges::subrange(\n            ranges::lower_bound(first, last, value, std::ref(comp), std::ref(proj)),\n            ranges::upper_bound(first, last, value, std::ref(comp), std::ref(proj)));\n    }\n\n    template<ranges::forward_range R, class T, class Proj = std::identity,\n             std::indirect_strict_weak_order<\n                 const T*,\n                 std::projected<std::ranges::iterator_t<R>, Proj>> Comp = ranges::less>\n    constexpr ranges::borrowed_subrange_t<R>\n        operator()(R&& r, const T& value, Comp comp = {}, Proj proj = {}) const\n    {\n        return (*this)(ranges::begin(r), ranges::end(r), value,\n                       std::ref(comp), std::ref(proj));\n    }\n};\n\ninline constexpr equal_range_fn equal_range;\n"))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(s.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},"#include <algorithm>\n#include <compare>\n#include <iostream>\n#include <vector>\n\nstruct S\n{\n    int number {};\n    char name {};\n    // note: name is ignored by these comparison operators\n    friend bool operator== (const S s1, const S s2) { return s1.number == s2.number; }\n    friend auto operator<=>(const S s1, const S s2) { return s1.number <=> s2.number; }\n    friend std::ostream& operator<<(std::ostream& os, S o)\n    {\n        return os << '{' << o.number << \", '\" << o.name << \"'}\";\n    }\n};\n\nvoid println(auto rem, auto const& v)\n{\n    for (std::cout << rem; auto const& e : v)\n        std::cout << e << ' ';\n    std::cout << '\\n';\n}\n\nint main()\n{\n    // note: not ordered, only partitioned w.r.t. S defined below\n    std::vector<S> vec\n    {\n        {1,'A'}, {2,'B'}, {2,'C'}, {2,'D'}, {4, 'D'}, {4,'G'}, {3,'F'}\n    };\n\n    const S value {2, '?'};\n\n    namespace ranges = std::ranges;\n\n    auto a = ranges::equal_range(vec, value);\n    println(\"1. \", a);\n\n    auto b = ranges::equal_range(vec.begin(), vec.end(), value);\n    println(\"2. \", b);\n\n    auto c = ranges::equal_range(vec, 'D', ranges::less {}, &S::name);\n    println(\"3. \", c);\n\n    auto d = ranges::equal_range(vec.begin(), vec.end(), 'D', ranges::less {}, &S::name);\n    println(\"4. \", d);\n}\n"))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},"1. {2, 'B'} {2, 'C'} {2, 'D'}\n2. {2, 'B'} {2, 'C'} {2, 'D'}\n3. {2, 'D'} {4, 'D'}\n4. {2, 'D'} {4, 'D'}\n")))))}b.isMDXComponent=!0}}]);