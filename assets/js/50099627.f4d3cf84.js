"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[21157,39666,50928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),i=n(86010),l=n(12466),o=n(76775),s=n(91980),p=n(67392),c=n(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=u(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,p]=g({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),k=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,i]),tabValues:i}}var k=n(72389);const b="tabList__CuJ",_="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),r=p[n].value;r!==o&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:u},l,{className:(0,i.Z)("tabs__item",_,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>r});const r=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(87462),a=n(67294);const i="columns_Terr";function l(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,a.createElement("div",(0,r.Z)({className:i,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}l.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(67294),a=n(74866),i=n(85162),l=n(99372),o=n(72412);const s={};function p(e){const t=e.content||{};return r.createElement(a.Z,null,Object.entries(t).map(((e,t)=>{let[n,p]=e;return p.value||p.simplified||p.detailed?r.createElement(i.Z,{value:n,label:l.gJ.get(n),default:p.default||0==t},p.simplified?r.createElement(r.Fragment,null,r.createElement(a.Z,{groupId:"view_mode",className:s.smallTabs},r.createElement(i.Z,{value:"simplified",label:"Simplified",default:!0},(0,o.Z)(p.simplified)),r.createElement(i.Z,{value:"detailed",label:"Detailed"},(0,o.Z)(p.detailed)))):p.value):r.createElement(i.Z,{value:n,label:l.gJ.get(n),default:0==t},(0,o.Z)(p))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>c,ZP:()=>p});var r=n(67294),a=n(72412);const i={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var l=n(98839);const o={None:{Order:0,ShortName:"",FullName:"",Style:i.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:i.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:i.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:i.accessPrivate}},s=e=>e.none?o.None:e.pub||e.public?o.Public:e.prot||e.protected?o.Protected:e.priv||e.private?o.Private:o.Public;function p(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>s(e).Order<s(t).Order));return r.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:i.symbolTable},r.createElement("tbody",null,n))})(r.Children.toArray(e.children))}function c(e){r.useContext(l.z);let t=(0,a.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const o=e.linkName||e.autoLink;!e.noLink&&o&&(t=r.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const p=(e,t,n)=>!0===e?r.createElement("span",{className:i[t]},n):null;return r.createElement("tr",null,!e.none&&r.createElement("td",{className:i.symbolProp},(e=>{const t=s(e);return r.createElement("span",{className:t.Style},t.ShortName)})(e),p(e.static,"modStatic","static"),p(e.constexpr,"modConstexpr","constexpr"),p(e.const,"modConst","const"),p(e.volatile,"modVolatile","volatile"),p(e.virtual,"modVirtual","virtual")),r.createElement("td",{className:i.symbolName},t),r.createElement("td",{className:i.symbolDesc},(0,a.Z)(n)))}c.isMDXComponent=!0,p.isMDXComponent=!0,p.Symbol=c},99372:(e,t,n)=>{n.d(t,{gJ:()=>c,eH:()=>g,U6:()=>u,OS:()=>m});var r=n(67294),a=n(95999);const i="markedText_c6kK",l="since_c1Q3",o="until_jXK6",s="removed_A_Kf",p="versionNumber_BiUX",c=new Map;function d(e){let{children:t,className:n}=e;return r.createElement("span",{className:i+(n?" "+n:"")},t)}function u(e){let{children:t,v:n}=e;return r.createElement(d,{className:l},t,"\xa0",r.createElement("span",{className:p},r.createElement("small",null,"(",c.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return r.createElement(d,{className:o},t,"\xa0",r.createElement("span",{className:p},r.createElement("small",null,"(",c.get(`until-${n}`),")")))}function g(e){let{children:t,v:n}=e;return r.createElement(d,{className:s},t,"\xa0",r.createElement("span",{className:p},r.createElement("small",null,"(",c.get(`removed-${n}`),")")))}c.set("cpp98","C++98"),c.set("cpp03","C++03"),c.set("cpp11","C++11"),c.set("cpp14","C++14"),c.set("cpp17","C++17"),c.set("cpp20","C++20"),c.set("cpp23","C++23"),c.set("deprecated-",r.createElement(a.Z,null,"deprecated")),c.set("deprecated-cpp98",r.createElement(a.Z,null,"deprecated in C++98")),c.set("deprecated-cpp03",r.createElement(a.Z,null,"deprecated in C++03")),c.set("deprecated-cpp11",r.createElement(a.Z,null,"deprecated in C++11")),c.set("deprecated-cpp14",r.createElement(a.Z,null,"deprecated in C++14")),c.set("deprecated-cpp17",r.createElement(a.Z,null,"deprecated in C++17")),c.set("deprecated-cpp20",r.createElement(a.Z,null,"deprecated in C++20")),c.set("deprecated-cpp23",r.createElement(a.Z,null,"deprecated in C++23")),c.set("until-cpp98",r.createElement(a.Z,null,"until C++98")),c.set("until-cpp03",r.createElement(a.Z,null,"until C++03")),c.set("until-cpp11",r.createElement(a.Z,null,"until C++11")),c.set("until-cpp14",r.createElement(a.Z,null,"until C++14")),c.set("until-cpp17",r.createElement(a.Z,null,"until C++17")),c.set("until-cpp20",r.createElement(a.Z,null,"until C++20")),c.set("until-cpp23",r.createElement(a.Z,null,"until C++23")),c.set("since-cpp98",r.createElement(a.Z,null,"since C++98")),c.set("since-cpp03",r.createElement(a.Z,null,"since C++03")),c.set("since-cpp11",r.createElement(a.Z,null,"since C++11")),c.set("since-cpp14",r.createElement(a.Z,null,"since C++14")),c.set("since-cpp17",r.createElement(a.Z,null,"since C++17")),c.set("since-cpp20",r.createElement(a.Z,null,"since C++20")),c.set("since-cpp23",r.createElement(a.Z,null,"since C++23")),c.set("removed-",r.createElement(a.Z,null,"deleted")),c.set("removed-cpp98",r.createElement(a.Z,null,"removed in C++98")),c.set("removed-cpp03",r.createElement(a.Z,null,"removed in C++03")),c.set("removed-cpp11",r.createElement(a.Z,null,"removed in C++11")),c.set("removed-cpp14",r.createElement(a.Z,null,"removed in C++14")),c.set("removed-cpp17",r.createElement(a.Z,null,"removed in C++17")),c.set("removed-cpp20",r.createElement(a.Z,null,"removed in C++20")),c.set("removed-cpp23",r.createElement(a.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function r(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>r})},33615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l=void 0,o={unversionedId:"std/algo/ranges/_codes/is_permutation/since-cpp20-detailed",id:"std/algo/ranges/_codes/is_permutation/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/is_permutation/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/is_permutation",slug:"/std/algo/ranges/_codes/is_permutation/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/is_permutation/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/is_permutation/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n  std::forward_iterator I1,\n  std::sentinel_for<I1> S1,\n  std::forward_iterator I2,\n  std::sentinel_for<I2> S2,\n  class Proj1 = std::identity,\n  class Proj2 = std::identity,\n  std::indirect_equivalence_relation< std::projected<I1, Proj1>,\n                                      std::projected<I2, Proj2> > Pred = ranges::equal_to\n>\nconstexpr bool is_permutation( I1 first1, S1 last1, I2 first2, S2 last2,\n                               Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );\n\n// (2)\ntemplate<\n  ranges::forward_range R1,\n  ranges::forward_range R2,\n  class Proj1 = std::identity,\n  class Proj2 = std::identity,\n  std::indirect_equivalence_relation< std::projected<ranges::iterator_t<R1>, Proj1>,\n                                      std::projected<ranges::iterator_t<R2>, Proj2> > Pred = ranges::equal_to\n>\nconstexpr bool is_permutation( R1&& r1, R2&& r2, Pred pred = {},\n                               Proj1 proj1 = {}, Proj2 proj2 = {} );\n")))}d.isMDXComponent=!0},57932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l=void 0,o={unversionedId:"std/algo/ranges/_codes/is_permutation/since-cpp20-simplified",id:"std/algo/ranges/_codes/is_permutation/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/is_permutation/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/is_permutation",slug:"/std/algo/ranges/_codes/is_permutation/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/is_permutation/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/is_permutation/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr bool\n    is_partitioned( I first, S last, Pred pred, Proj proj = {} );\n\n// (2)\nconstexpr bool\n    is_partitioned( R&& r, Pred pred, Proj proj = {} );\n")),(0,a.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"I")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::input_iterator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"S")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"R")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::ranges::input_range")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Pred"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(1)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::indirect_unary_predicate<std::projected<I, Proj>>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(2)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::indirect_unary_predicate<std::projected<ranges::iterator_t<R>, Proj>>")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Proj")," - ",(0,a.kt)("strong",{parentName:"li"},"(none)"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Proj")," template argument has a default type ",(0,a.kt)("inlineCode",{parentName:"p"},"std::identity")," for all overloads."))}d.isMDXComponent=!0},48326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var r=n(87462),a=n(67294),i=n(3905),l=n(55059),o=n(22307),s=n(99801),p=n(33615),c=n(57932);const d={title:"ranges::is_permutation algorithm",sidebar_label:"ranges::is_permutation(  )",description:"ranges::is_permutation algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","is_permutation","permutation"],cppreference_origin_rel:"w/cpp/algorithm/ranges/is_permutation"},u=void 0,m={unversionedId:"std/algo/ranges/is_permutation",id:"std/algo/ranges/is_permutation",title:"ranges::is_permutation algorithm",description:"ranges::is_permutation algorithm C++ documentation",source:"@site/content/docs/std/algo/ranges/is_permutation.mdx",sourceDirName:"std/algo/ranges",slug:"/std/algo/ranges/is_permutation",permalink:"/CppLangNet/docs/std/algo/ranges/is_permutation",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/is_permutation.mdx",tags:[{label:"ranges",permalink:"/CppLangNet/docs/tags/ranges"},{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"is_permutation",permalink:"/CppLangNet/docs/tags/is-permutation"},{label:"permutation",permalink:"/CppLangNet/docs/tags/permutation"}],version:"current",frontMatter:{title:"ranges::is_permutation algorithm",sidebar_label:"ranges::is_permutation(  )",description:"ranges::is_permutation algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","is_permutation","permutation"],cppreference_origin_rel:"w/cpp/algorithm/ranges/is_permutation"},sidebar:"defaultSidebar",previous:{title:"lexicographical_compare_three_way(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/lexicographical_compare_three_way"},next:{title:"ranges::next_permutation(  )",permalink:"/CppLangNet/docs/std/algo/ranges/next_permutation"}},g={},f=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Notes",id:"notes",level:3},{value:"Examples",id:"examples",level:3}],k={toc:f};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stdrangesis_permutation-algorithm"},"std::ranges::is_permutation() algorithm"),(0,i.kt)(s.Z,{content:{"since-cpp20":{simplified:(0,i.kt)(c.default,{mdxType:"Signature_SinceCpp20_Simplified"}),detailed:(0,i.kt)(p.default,{mdxType:"Signature_SinceCpp20_Detailed"})}},mdxType:"SwitchView"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"(1)")," Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if there exists a permutation of the elements in range [",(0,i.kt)("inlineCode",{parentName:"p"},"first1"),"; ",(0,i.kt)("inlineCode",{parentName:"p"},"last1"),")\nthat makes the range equal to [",(0,i.kt)("inlineCode",{parentName:"p"},"first2"),"; ",(0,i.kt)("inlineCode",{parentName:"p"},"last2"),") (after application of corresponding projections ",(0,i.kt)("inlineCode",{parentName:"p"},"Proj1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Proj2"),",\nand using the binary predicate ",(0,i.kt)("inlineCode",{parentName:"p"},"Pred")," as a comparator).\nOtherwise, returns ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,i.kt)("strong",{parentName:"p"},"(1)"),", but uses ",(0,i.kt)("inlineCode",{parentName:"p"},"r1")," as the first source range and ",(0,i.kt)("inlineCode",{parentName:"p"},"r2")," as the second source range, as if using ",(0,i.kt)("inlineCode",{parentName:"p"},"ranges::begin(r1)")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"first1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ranges::end(r1)")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"last1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ranges::begin(r2)")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"first2"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ranges::end(r2)")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"last2"),"."))),(0,i.kt)("p",null,"The function-like entities described on this page are ",(0,i.kt)("a",{parentName:"p",href:"/docs/std/algo/niebloids"},(0,i.kt)("strong",{parentName:"a"},"niebloids")),"."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)(l.ZP,{mdxType:"SymbolTable"},(0,i.kt)(l.mN,{none:!0,noLink:!0,name:(0,i.kt)(a.Fragment,null," ",(0,i.kt)("code",null,"first1")," ",(0,i.kt)("br",null)," ",(0,i.kt)("code",null,"last1")," "),mdxType:"Symbol"},"The first range of elements to process."),(0,i.kt)(l.mN,{none:!0,noLink:!0,name:(0,i.kt)("code",null,"r"),mdxType:"Symbol"},"The first range of elements to process."),(0,i.kt)(l.mN,{none:!0,noLink:!0,name:(0,i.kt)(a.Fragment,null," ",(0,i.kt)("code",null,"first2")," ",(0,i.kt)("br",null)," ",(0,i.kt)("code",null,"last2")," "),mdxType:"Symbol"},"The second range of elements to process."),(0,i.kt)(l.mN,{none:!0,noLink:!0,name:(0,i.kt)("code",null,"r"),mdxType:"Symbol"},"The second range of elements to process."),(0,i.kt)(l.mN,{none:!0,noLink:!0,name:(0,i.kt)("code",null,"pred"),mdxType:"Symbol"},"The predicate to apply to the projected elemenets."),(0,i.kt)(l.mN,{none:!0,noLink:!0,name:(0,i.kt)("code",null,"proj"),mdxType:"Symbol"},"The projection to apply to the elements.")),(0,i.kt)("h3",{id:"return-value"},"Return value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the range [",(0,i.kt)("inlineCode",{parentName:"p"},"first1"),"; ",(0,i.kt)("inlineCode",{parentName:"p"},"last1"),") is a permutation of the range [",(0,i.kt)("inlineCode",{parentName:"p"},"first2"),"; ",(0,i.kt)("inlineCode",{parentName:"p"},"last2"),")."),(0,i.kt)("h3",{id:"complexity"},"Complexity"),(0,i.kt)("p",null,"Given ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"ranges::distance(first1, last1)"),"."),(0,i.kt)("p",null,"At most ",(0,i.kt)("strong",{parentName:"p"},"O(N2)")," applications of the predicate and each projection, or exactly ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," if the sequences are already equal,"),(0,i.kt)("p",null,"However if ",(0,i.kt)("inlineCode",{parentName:"p"},"ranges::distance(first1, last1) != ranges::distance(first2, last2)"),", no applications of the predicate and projections are made."),(0,i.kt)("h3",{id:"exceptions"},"Exceptions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(none)")),(0,i.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"is_permutation(1) and is_permutation(2)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"struct is_permutation_fn\n{\n    template<std::forward_iterator I1, std::sentinel_for<I1> S1,\n             std::forward_iterator I2, std::sentinel_for<I2> S2,\n             class Proj1 = std::identity, class Proj2 = std::identity,\n             std::indirect_equivalence_relation<std::projected<I1, Proj1>,\n                                                std::projected<I2, Proj2>>\n                                                    Pred = ranges::equal_to>\n    constexpr bool operator()(I1 first1, S1 last1, I2 first2, S2 last2,\n                              Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {}) const\n    {\n        // skip common prefix\n        auto ret = std::ranges::mismatch(first1, last1, first2, last2,\n                                         std::ref(pred), std::ref(proj1), std::ref(proj2));\n        first1 = ret.in1, first2 = ret.in2;\n\n        // iterate over the rest, counting how many times each element\n        // from [first1, last1) appears in [first2, last2)\n        for (auto i {first1}; i != last1; ++i)\n        {\n            const auto i_proj {std::invoke(proj1, *i)};\n            auto i_cmp = [&]<typename T>(T&& t)\n            {\n                return std::invoke(pred, i_proj, std::forward<T>(t));\n            };\n\n            if (i != ranges::find_if(first1, i, i_cmp, proj1))\n                continue; // this *i has been checked\n\n            if (const auto m {ranges::count_if(first2, last2, i_cmp, proj2)};\n                m == 0 or m != ranges::count_if(i, last1, i_cmp, proj1))\n                return false;\n        }\n        return true;\n    }\n\n    template<ranges::forward_range R1, ranges::forward_range R2,\n             class Proj1 = std::identity, class Proj2 = std::identity,\n             std::indirect_equivalence_relation<std::projected<ranges::iterator_t<R1>, Proj1>,\n                                                std::projected<ranges::iterator_t<R2>, Proj2>>\n                                                    Pred = ranges::equal_to>\n    constexpr bool operator()(R1&& r1, R2&& r2, Pred pred = {},\n                              Proj1 proj1 = {}, Proj2 proj2 = {}) const\n    {\n    return (*this)(ranges::begin(r1), ranges::end(r1),\n                   ranges::begin(r2), ranges::end(r2),\n                   std::move(pred), std::move(proj1), std::move(proj2));\n    }\n};\n\ninline constexpr is_permutation_fn is_permutation {};\n"))),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("p",null,"The permutation relation is an equivalence relation."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"ranges::is_permutation"))," can be used in testing, namely to check the correctness of rearranging algorithms (e.g. sorting, shuffling, partitioning)."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is an original range and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," is a permuted range then ",(0,i.kt)("inlineCode",{parentName:"p"},"ranges::is_permutation(x, y) == true")," means that ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),' consist of "the same" elements, maybe staying at other positions.'),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)(o.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},"#include <algorithm>\n#include <array>\n#include <cmath>\n#include <iostream>\n#include <ranges>\n\nauto& operator<<(auto& os, std::ranges::forward_range auto const& v)\n{\n    os << \"{ \";\n    for (auto const& e : v) os << e << ' ';\n    return os << \"}\";\n}\n\nint main()\n{\n    static constexpr auto r1 = {1, 2, 3, 4, 5};\n    static constexpr auto r2 = {3, 5, 4, 1, 2};\n    static constexpr auto r3 = {3, 5, 4, 1, 1};\n\n    static_assert(\n        std::ranges::is_permutation(r1, r1) &&\n        std::ranges::is_permutation(r1, r2) &&\n        std::ranges::is_permutation(r2, r1) &&\n        std::ranges::is_permutation(r1.begin(), r1.end(), r2.begin(), r2.end()));\n\n    std::cout\n        << std::boolalpha\n        << \"is_permutation( \" << r1 << \", \" << r2 << \" ): \"\n        << std::ranges::is_permutation(r1, r2) << '\\n'\n        << \"is_permutation( \" << r1 << \", \" << r3 << \" ): \"\n        << std::ranges::is_permutation(r1, r3) << '\\n'\n\n        << \"is_permutation with custom predicate and projections: \"\n        << std::ranges::is_permutation(\n            std::array {-14, -11, -13, -15, -12},  // 1st range\n            std::array {'F', 'E', 'C', 'B', 'D'},  // 2nd range\n            [](int x, int y) { return abs(x) == abs(y); }, // predicate\n            [](int x) { return x + 10; },          // projection for 1st range\n            [](char y) { return int(y - 'A'); })   // projection for 2nd range\n        << '\\n';\n}\n"))),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Possible Output"',title:'"Possible','Output"':!0},"is_permutation( { 1 2 3 4 5 }, { 3 5 4 1 2 } ): true\nis_permutation( { 1 2 3 4 5 }, { 3 5 4 1 1 } ): false\nis_permutation with custom predicate and projections: true\n")))))}b.isMDXComponent=!0}}]);