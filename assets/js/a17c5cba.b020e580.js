"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[72104,89024,21201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),s=n(76775),o=n(91980),c=n(67392),d=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=u(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,c]=f({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var b=n(72389);const k="tabList__CuJ",v="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==s&&(p(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},i,{className:(0,l.Z)("tabs__item",v,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function _(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(_,(0,a.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294);const l="columns_Terr";function i(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}i.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(74866),l=n(85162),i=n(99372),s=n(72412);const o={};function c(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?a.createElement(l.Z,{value:n,label:i.gJ.get(n),default:c.default||0==t},c.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:o.smallTabs},a.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,s.Z)(c.simplified)),a.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,s.Z)(c.detailed)))):c.value):a.createElement(l.Z,{value:n,label:i.gJ.get(n),default:0==t},(0,s.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>d,ZP:()=>c});var a=n(67294),r=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var i=n(98839);const s={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},o=e=>e.none?s.None:e.pub||e.public?s.Public:e.prot||e.protected?s.Protected:e.priv||e.private?s.Private:s.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>o(e).Order<o(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function d(e){a.useContext(i.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const s=e.linkName||e.autoLink;!e.noLink&&s&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?a.createElement("span",{className:l[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:l.symbolProp},(e=>{const t=o(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:l.symbolName},t),a.createElement("td",{className:l.symbolDesc},(0,r.Z)(n)))}d.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=d},99372:(e,t,n)=>{n.d(t,{gJ:()=>d,eH:()=>f,U6:()=>u,OS:()=>m});var a=n(67294),r=n(95999);const l="markedText_c6kK",i="since_c1Q3",s="until_jXK6",o="removed_A_Kf",c="versionNumber_BiUX",d=new Map;function p(e){let{children:t,className:n}=e;return a.createElement("span",{className:l+(n?" "+n:"")},t)}function u(e){let{children:t,v:n}=e;return a.createElement(p,{className:i},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",d.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return a.createElement(p,{className:s},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",d.get(`until-${n}`),")")))}function f(e){let{children:t,v:n}=e;return a.createElement(p,{className:o},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",d.get(`removed-${n}`),")")))}d.set("cpp98","C++98"),d.set("cpp03","C++03"),d.set("cpp11","C++11"),d.set("cpp14","C++14"),d.set("cpp17","C++17"),d.set("cpp20","C++20"),d.set("cpp23","C++23"),d.set("deprecated-",a.createElement(r.Z,null,"deprecated")),d.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),d.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),d.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),d.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),d.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),d.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),d.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),d.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),d.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),d.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),d.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),d.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),d.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),d.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),d.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),d.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),d.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),d.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),d.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),d.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),d.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),d.set("removed-",a.createElement(r.Z,null,"deleted")),d.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),d.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),d.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),d.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),d.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),d.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),d.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},98811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},i=void 0,s={unversionedId:"std/algo/ranges/_codes/adjacent_find/since-cpp20-detailed",id:"std/algo/ranges/_codes/adjacent_find/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/adjacent_find/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/adjacent_find",slug:"/std/algo/ranges/_codes/adjacent_find/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/adjacent_find/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/adjacent_find/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n  std::forward_iterator I,\n  std::sentinel_for<I> S,\n  class Proj = std::identity,\n  std::indirect_binary_predicate<\n  std::projected<I, Proj>,\n  std::projected<I, Proj>> Pred = ranges::equal_to\n>\nconstexpr I adjacent_find( I first, S last, Pred pred = {}, Proj proj = {} );\n\n// (2)\ntemplate<\n  ranges::forward_range R,\n  class Proj = std::identity,\n  std::indirect_binary_predicate<\n  std::projected<ranges::iterator_t<R>, Proj>,\n  std::projected<ranges::iterator_t<R>, Proj>> Pred = ranges::equal_to\n>\nconstexpr ranges::borrowed_iterator_t<R> adjacent_find( R&& r, Pred pred = {}, Proj proj = {} );\n")))}p.isMDXComponent=!0},78301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},i=void 0,s={unversionedId:"std/algo/ranges/_codes/adjacent_find/since-cpp20-simplified",id:"std/algo/ranges/_codes/adjacent_find/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/adjacent_find/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/adjacent_find",slug:"/std/algo/ranges/_codes/adjacent_find/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/adjacent_find/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/adjacent_find/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr I\n    adjacent_find( I first, S last, Pred pred = {}, Proj proj = {} );\n\n// (2)\nconstexpr ranges::borrowed_iterator_t<R>\n    adjacent_find( R&& r, Pred pred = {}, Proj proj = {} );\n")),(0,r.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"I")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"std::forward_iterator"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"S")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"std::sentinel_for<I>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Proj")," - ",(0,r.kt)("strong",{parentName:"p"},"(none)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Pred"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(1)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"indirect_binary_predicate<projected<I, Proj>, projected<I, Proj>>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(2)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"indirect_binary_predicate<projected<ranges::iterator_t<R>, Proj>, projected<ranges::iterator_t<R>, Proj>>"))),(0,r.kt)("p",{parentName:"li"},"(The ",(0,r.kt)("inlineCode",{parentName:"p"},"std::")," namespace was ommitted here for readability)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"(2)")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ranges::input_range")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Proj")," template argument has a default type of ",(0,r.kt)("inlineCode",{parentName:"p"},"std::identity")," for all overloads."))}p.isMDXComponent=!0},63201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>g});var a=n(87462),r=n(67294),l=n(3905),i=n(55059),s=n(22307),o=n(99801),c=n(98811),d=n(78301);const p={title:"ranges::adjacent_find algorithm",sidebar_label:"ranges::adjacent_find(  )",description:"ranges::adjacent_find algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","adjacent_find","find","search","look","predicate","adjacent","condition"],cppreference_origin_rel:"w/cpp/algorithm/ranges/adjacent_find"},u=void 0,m={unversionedId:"std/algo/ranges/adjacent_find",id:"std/algo/ranges/adjacent_find",title:"ranges::adjacent_find algorithm",description:"ranges::adjacent_find algorithm C++ documentation",source:"@site/content/docs/std/algo/ranges/adjacent_find.mdx",sourceDirName:"std/algo/ranges",slug:"/std/algo/ranges/adjacent_find",permalink:"/CppLangNet/docs/std/algo/ranges/adjacent_find",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/adjacent_find.mdx",tags:[{label:"ranges",permalink:"/CppLangNet/docs/tags/ranges"},{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"adjacent_find",permalink:"/CppLangNet/docs/tags/adjacent-find"},{label:"find",permalink:"/CppLangNet/docs/tags/find"},{label:"search",permalink:"/CppLangNet/docs/tags/search"},{label:"look",permalink:"/CppLangNet/docs/tags/look"},{label:"predicate",permalink:"/CppLangNet/docs/tags/predicate"},{label:"adjacent",permalink:"/CppLangNet/docs/tags/adjacent"},{label:"condition",permalink:"/CppLangNet/docs/tags/condition"}],version:"current",frontMatter:{title:"ranges::adjacent_find algorithm",sidebar_label:"ranges::adjacent_find(  )",description:"ranges::adjacent_find algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","adjacent_find","find","search","look","predicate","adjacent","condition"],cppreference_origin_rel:"w/cpp/algorithm/ranges/adjacent_find"},sidebar:"defaultSidebar",previous:{title:"ranges::find_first_of(  )",permalink:"/CppLangNet/docs/std/algo/ranges/find_first_of"},next:{title:"ranges::find(  )",permalink:"/CppLangNet/docs/std/algo/ranges/find_last"}},f={},g=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Examples",id:"examples",level:3}],b={toc:g};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdrangesadjacent_find-algorithm"},"std::ranges::adjacent_find() algorithm"),(0,l.kt)(o.Z,{content:{"since-cpp20":{simplified:(0,l.kt)(d.default,{mdxType:"Signature_SinceCpp20_Simplified"}),detailed:(0,l.kt)(c.default,{mdxType:"Signature_SinceCpp20_Detailed"})}},mdxType:"SwitchView"}),(0,l.kt)("p",null,"Searches the range [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),") for two consecutive equal elements."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," Elements are compared using ",(0,l.kt)("inlineCode",{parentName:"p"},"pred")," (after projecting with the projection ",(0,l.kt)("inlineCode",{parentName:"p"},"proj"),").")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,l.kt)("strong",{parentName:"p"},"(1)"),", but uses ",(0,l.kt)("inlineCode",{parentName:"p"},"r")," as the source range, as if using ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::begin(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"first")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::end(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),"."))),(0,l.kt)("p",null,"The function-like entities described on this page are ",(0,l.kt)("a",{parentName:"p",href:"/docs/std/algo/niebloids"},(0,l.kt)("strong",{parentName:"a"},"niebloids")),"."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(i.ZP,{mdxType:"SymbolTable"},(0,l.kt)(i.mN,{none:!0,noLink:!0,name:(0,l.kt)(r.Fragment,null," ",(0,l.kt)("code",null,"first")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last")," "),mdxType:"Symbol"},"The range of elements to examine."),(0,l.kt)(i.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"r"),mdxType:"Symbol"},"The range of elements to examine."),(0,l.kt)(i.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"pred"),mdxType:"Symbol"},"Predicate to apply to the projected elements."),(0,l.kt)(i.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"proj"),mdxType:"Symbol"},"Projection to apply to the elements.")),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("p",null,"An iterator to the first of the first pair of identical elements, that is, the first iterator it such that ",(0,l.kt)("inlineCode",{parentName:"p"},"bool(std::invoke(pred, std::invoke(proj1, *it), std::invoke(proj, *(it + 1))))")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"If no such elements are found, an iterator equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"last")," is returned."),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"Exactly ",(0,l.kt)("inlineCode",{parentName:"p"},"min((result - first) + 1, (last - first) - 1)")," applications of the predicate and projection where result is the return value."),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(none)")),(0,l.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"adjacent_find(1) and adjacent_find(2)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"struct adjacent_find_fn\n{\n    template<std::forward_iterator I, std::sentinel_for<I> S, class Proj = std::identity,\n             std::indirect_binary_predicate<\n                 std::projected<I, Proj>,\n                 std::projected<I, Proj>> Pred = ranges::equal_to>\n    constexpr I operator()(I first, S last, Pred pred = {}, Proj proj = {}) const\n    {\n        if (first == last)\n            return first;\n        auto next = ranges::next(first);\n        for (; next != last; ++next, ++first)\n            if (std::invoke(pred, std::invoke(proj, *first), std::invoke(proj, *next)))\n                return first;\n        return next;\n    }\n\n    template<ranges::forward_range R, class Proj = std::identity,\n             std::indirect_binary_predicate<\n                 std::projected<ranges::iterator_t<R>, Proj>,\n                 std::projected<ranges::iterator_t<R>, Proj>> Pred = ranges::equal_to>\n    constexpr ranges::borrowed_iterator_t<R>\n        operator()(R&& r, Pred pred = {}, Proj proj = {}) const\n    {\n        return (*this)(ranges::begin(r), ranges::end(r), std::ref(pred), std::ref(proj));\n    }\n};\n\ninline constexpr adjacent_find_fn adjacent_find;\n"))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(s.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <algorithm>\n#include <functional>\n#include <iostream>\n\nint main()\n{\n    const auto v = {0, 1, 2, 3, 40, 40, 41, 41, 5}; /*\n                                ^^          ^^       */\n    namespace ranges = std::ranges;\n\n    if (auto it = ranges::adjacent_find(v.begin(), v.end()); it == v.end())\n        std::cout << "No matching adjacent elements\\n";\n    else\n        std::cout << "The first adjacent pair of equal elements is at ["\n                  << ranges::distance(v.begin(), it) << "] == " << *it << \'\\n\';\n\n    if (auto it = ranges::adjacent_find(v, ranges::greater()); it == v.end())\n        std::cout << "The entire vector is sorted in ascending order\\n";\n    else\n        std::cout << "The last element in the non-decreasing subsequence is at ["\n                  << ranges::distance(v.begin(), it) << "] == " << *it << \'\\n\';\n}\n'))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},"The first adjacent pair of equal elements is at [4] == 40\nThe last element in the non-decreasing subsequence is at [7] == 41\n")))))}k.isMDXComponent=!0}}]);