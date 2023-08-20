"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[51955,53498,68541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(87462),a=n(67294),l=n(86010),s=n(12466),o=n(76775),i=n(91980),c=n(67392),p=n(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=u(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,c]=g({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),k=(()=>{const e=i??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var k=n(72389);const b="tabList__CuJ",v="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=p.indexOf(t),r=c[n].value;r!==o&&(d(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:u},s,{className:(0,l.Z)("tabs__item",v,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(N,(0,r.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>r});const r=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(87462),a=n(67294);const l="columns_Terr";function s(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,a.createElement("div",(0,r.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}s.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(74866),l=n(85162),s=n(99372),o=n(72412);const i={};function c(e){const t=e.content||{};return r.createElement(a.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?r.createElement(l.Z,{value:n,label:s.gJ.get(n),default:c.default||0==t},c.simplified?r.createElement(r.Fragment,null,r.createElement(a.Z,{groupId:"view_mode",className:i.smallTabs},r.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,o.Z)(c.simplified)),r.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,o.Z)(c.detailed)))):c.value):r.createElement(l.Z,{value:n,label:s.gJ.get(n),default:0==t},(0,o.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>p,ZP:()=>c});var r=n(67294),a=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var s=n(98839);const o={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},i=e=>e.none?o.None:e.pub||e.public?o.Public:e.prot||e.protected?o.Protected:e.priv||e.private?o.Private:o.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>i(e).Order<i(t).Order));return r.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},r.createElement("tbody",null,n))})(r.Children.toArray(e.children))}function p(e){r.useContext(s.z);let t=(0,a.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const o=e.linkName||e.autoLink;!e.noLink&&o&&(t=r.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?r.createElement("span",{className:l[t]},n):null;return r.createElement("tr",null,!e.none&&r.createElement("td",{className:l.symbolProp},(e=>{const t=i(e);return r.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),r.createElement("td",{className:l.symbolName},t),r.createElement("td",{className:l.symbolDesc},(0,a.Z)(n)))}p.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=p},99372:(e,t,n)=>{n.d(t,{gJ:()=>p,eH:()=>g,U6:()=>u,OS:()=>m});var r=n(67294),a=n(95999);const l="markedText_c6kK",s="since_c1Q3",o="until_jXK6",i="removed_A_Kf",c="versionNumber_BiUX",p=new Map;function d(e){let{children:t,className:n}=e;return r.createElement("span",{className:l+(n?" "+n:"")},t)}function u(e){let{children:t,v:n}=e;return r.createElement(d,{className:s},t,"\xa0",r.createElement("span",{className:c},r.createElement("small",null,"(",p.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return r.createElement(d,{className:o},t,"\xa0",r.createElement("span",{className:c},r.createElement("small",null,"(",p.get(`until-${n}`),")")))}function g(e){let{children:t,v:n}=e;return r.createElement(d,{className:i},t,"\xa0",r.createElement("span",{className:c},r.createElement("small",null,"(",p.get(`removed-${n}`),")")))}p.set("cpp98","C++98"),p.set("cpp03","C++03"),p.set("cpp11","C++11"),p.set("cpp14","C++14"),p.set("cpp17","C++17"),p.set("cpp20","C++20"),p.set("cpp23","C++23"),p.set("deprecated-",r.createElement(a.Z,null,"deprecated")),p.set("deprecated-cpp98",r.createElement(a.Z,null,"deprecated in C++98")),p.set("deprecated-cpp03",r.createElement(a.Z,null,"deprecated in C++03")),p.set("deprecated-cpp11",r.createElement(a.Z,null,"deprecated in C++11")),p.set("deprecated-cpp14",r.createElement(a.Z,null,"deprecated in C++14")),p.set("deprecated-cpp17",r.createElement(a.Z,null,"deprecated in C++17")),p.set("deprecated-cpp20",r.createElement(a.Z,null,"deprecated in C++20")),p.set("deprecated-cpp23",r.createElement(a.Z,null,"deprecated in C++23")),p.set("until-cpp98",r.createElement(a.Z,null,"until C++98")),p.set("until-cpp03",r.createElement(a.Z,null,"until C++03")),p.set("until-cpp11",r.createElement(a.Z,null,"until C++11")),p.set("until-cpp14",r.createElement(a.Z,null,"until C++14")),p.set("until-cpp17",r.createElement(a.Z,null,"until C++17")),p.set("until-cpp20",r.createElement(a.Z,null,"until C++20")),p.set("until-cpp23",r.createElement(a.Z,null,"until C++23")),p.set("since-cpp98",r.createElement(a.Z,null,"since C++98")),p.set("since-cpp03",r.createElement(a.Z,null,"since C++03")),p.set("since-cpp11",r.createElement(a.Z,null,"since C++11")),p.set("since-cpp14",r.createElement(a.Z,null,"since C++14")),p.set("since-cpp17",r.createElement(a.Z,null,"since C++17")),p.set("since-cpp20",r.createElement(a.Z,null,"since C++20")),p.set("since-cpp23",r.createElement(a.Z,null,"since C++23")),p.set("removed-",r.createElement(a.Z,null,"deleted")),p.set("removed-cpp98",r.createElement(a.Z,null,"removed in C++98")),p.set("removed-cpp03",r.createElement(a.Z,null,"removed in C++03")),p.set("removed-cpp11",r.createElement(a.Z,null,"removed in C++11")),p.set("removed-cpp14",r.createElement(a.Z,null,"removed in C++14")),p.set("removed-cpp17",r.createElement(a.Z,null,"removed in C++17")),p.set("removed-cpp20",r.createElement(a.Z,null,"removed in C++20")),p.set("removed-cpp23",r.createElement(a.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function r(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>r})},79466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},s=void 0,o={unversionedId:"std/algo/ranges/_codes/equal/since-cpp20-detailed",id:"std/algo/ranges/_codes/equal/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/equal/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/equal",slug:"/std/algo/ranges/_codes/equal/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/equal/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/equal/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n  std::input_iterator I1,\n  std::sentinel_for<I1> S1,\n  std::input_iterator I2,\n  std::sentinel_for<I2> S2,\n  class Pred = ranges::equal_to,\n  class Proj1 = std::identity,\n  class Proj2 = std::identity\n>\n  requires std::indirectly_comparable<I1, I2, Pred, Proj1, Proj2>\nconstexpr bool equal( I1 first1, S1 last1, I2 first2, S2 last2,\n                      Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );\n\n// (2)\ntemplate<\n  ranges::input_range R1,\n  ranges::input_range R2,\n  class Pred = ranges::equal_to,\n  class Proj1 = std::identity,\n  class Proj2 = std::identity\n>\n  requires std::indirectly_comparable<ranges::iterator_t<R1>, ranges::iterator_t<R2>,\n                                      Pred, Proj1, Proj2>\nconstexpr bool equal( R1&& r1, R2&& r2, Pred pred = {},\n                      Proj1 proj1 = {}, Proj2 proj2 = {} );\n")))}d.isMDXComponent=!0},45973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},s=void 0,o={unversionedId:"std/algo/ranges/_codes/equal/since-cpp20-simplified",id:"std/algo/ranges/_codes/equal/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/equal/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/equal",slug:"/std/algo/ranges/_codes/equal/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/equal/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/equal/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr bool equal( I1 first1, S1 last1, I2 first2, S2 last2,\n                      Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );\n\n// (2)\nconstexpr bool equal( R1&& r1, R2&& r2, Pred pred = {},\n                      Proj1 proj1 = {}, Proj2 proj2 = {} );\n")),(0,a.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"I1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"I2")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::input_iterator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"S1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"S2")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I1>"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I2>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"R1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"R2")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::ranges::input_range")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Pred")," - ",(0,a.kt)("strong",{parentName:"li"},"(none)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Proj1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Proj2")," - ",(0,a.kt)("strong",{parentName:"li"},"(none)"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Proj1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Proj2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Pred")," template arguments have the following default types: ",(0,a.kt)("inlineCode",{parentName:"p"},"std::identity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ranges::less")," for all overloads."),(0,a.kt)("p",null,"Additionally, each overload has the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(1)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::indirectly_comparable<I1, I2, Pred, Proj1, Proj2>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(2)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"std::indirectly_comparable<ranges::iterator_t<R1>, ranges::iterator_t<R2>, Pred, Proj1, Proj2>"))))}d.isMDXComponent=!0},65840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var r=n(87462),a=n(67294),l=n(3905),s=n(55059),o=n(22307),i=n(99801),c=(n(99372),n(79466)),p=n(45973);const d={title:"ranges::equal algorithm",sidebar_label:"ranges::equal(  )",description:"ranges::equal algorithm C++ documentation",hide_title:!0,tags:["algorithm","equal"],cppreference_origin_rel:"w/cpp/algorithm/ranges/equal"},u=void 0,m={unversionedId:"std/algo/ranges/equal",id:"std/algo/ranges/equal",title:"ranges::equal algorithm",description:"ranges::equal algorithm C++ documentation",source:"@site/content/docs/std/algo/ranges/equal.mdx",sourceDirName:"std/algo/ranges",slug:"/std/algo/ranges/equal",permalink:"/CppLangNet/docs/std/algo/ranges/equal",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/equal.mdx",tags:[{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"equal",permalink:"/CppLangNet/docs/tags/equal"}],version:"current",frontMatter:{title:"ranges::equal algorithm",sidebar_label:"ranges::equal(  )",description:"ranges::equal algorithm C++ documentation",hide_title:!0,tags:["algorithm","equal"],cppreference_origin_rel:"w/cpp/algorithm/ranges/equal"},sidebar:"defaultSidebar",previous:{title:"clamp(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/clamp"},next:{title:"ranges::lexicographical_compare(  )",permalink:"/CppLangNet/docs/std/algo/ranges/lexicographical_compare"}},g={},f=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Examples",id:"examples",level:3}],k={toc:f};function b(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdrangesequal-algorithm"},"std::ranges::equal() algorithm"),(0,l.kt)(i.Z,{content:{"since-cpp20":{simplified:(0,l.kt)(p.default,{mdxType:"Signature_SinceCpp20_Simplified"}),detailed:(0,l.kt)(c.default,{mdxType:"Signature_SinceCpp20_Detailed"})}},mdxType:"SwitchView"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the projected values of the range [",(0,l.kt)("inlineCode",{parentName:"p"},"first1"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last1"),") are equal to the projected values of the range [",(0,l.kt)("inlineCode",{parentName:"p"},"first2"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last2"),"), and ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,l.kt)("strong",{parentName:"p"},"(1)"),", but uses ",(0,l.kt)("inlineCode",{parentName:"p"},"r")," as the source range, as if using ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::begin(r)")," as first and ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::end(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),"."))),(0,l.kt)("p",null,"Two ranges are considered equal if they have the same number of elements and every pair of corresponding projected elements satisfies ",(0,l.kt)("inlineCode",{parentName:"p"},"pred"),". That is, ",(0,l.kt)("inlineCode",{parentName:"p"},"std::invoke(pred, std::invoke(proj1, *first1), std::invoke(proj2, *first2))")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," for all pairs of corresponding elements in both ranges."),(0,l.kt)("p",null,"The function-like entities described on this page are ",(0,l.kt)("a",{parentName:"p",href:"/docs/std/algo/niebloids"},(0,l.kt)("strong",{parentName:"a"},"niebloids")),"."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(s.ZP,{mdxType:"SymbolTable"},(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)(a.Fragment,null," ",(0,l.kt)("code",null,"first1")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last1")," "),mdxType:"Symbol"},"The first range of elements to compare."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"r1"),mdxType:"Symbol"},"The first range of elements to compare."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)(a.Fragment,null," ",(0,l.kt)("code",null,"first2")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last2")," "),mdxType:"Symbol"},"The second range of elements to compare."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"r2"),mdxType:"Symbol"},"The first range of elements to compare."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"pred"),mdxType:"Symbol"},"Predicate to apply to the projected elements."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"proj1"),mdxType:"Symbol"},"Projection to apply to the elements of the first range."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"proj2"),mdxType:"Symbol"},"Projection to apply to the elements of the first range.")),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("p",null,"If the length of the range [",(0,l.kt)("inlineCode",{parentName:"p"},"first1"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last1"),") does not equal the length of the range [",(0,l.kt)("inlineCode",{parentName:"p"},"first2"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last2"),"), returns ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"If the elements in the two ranges are equal after projection, returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"Otherwise, returns ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"At most ",(0,l.kt)("inlineCode",{parentName:"p"},"min(last1 - first1, last2 - first2)")," applications of the predicate and corresponding projections."),(0,l.kt)("p",null,"However, if ",(0,l.kt)("inlineCode",{parentName:"p"},"S1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"S2")," both model ",(0,l.kt)("a",{parentName:"p",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"std::sized_sentinel_for"))," their respective iterators,\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"last1 - first1 != last2 - first2")," then no applications of the predicate are made (size mismatch is detected without looking at any elements)."),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(none)")),(0,l.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"ranges::equal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"struct equal_fn\n{\n  template<std::input_iterator I1, std::sentinel_for<I1> S1,\n           std::input_iterator I2, std::sentinel_for<I2> S2,\n           class Pred = ranges::equal_to,\n           class Proj1 = std::identity, class Proj2 = std::identity>\n  requires std::indirectly_comparable<I1, I2, Pred, Proj1, Proj2>\n  constexpr bool\n      operator()(I1 first1, S1 last1, I2 first2, S2 last2,\n                 Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {}) const\n  {\n      if constexpr (std::sized_sentinel_for<S1, I1> and std::sized_sentinel_for<S2, I2>)\n          if (std::ranges::distance(first1, last1) != std::ranges::distance(first2, last2))\n              return false;\n\n      for (; first1 != last1; ++first1, (void)++first2)\n          if (!std::invoke(pred, std::invoke(proj1, *first1), std::invoke(proj2, *first2)))\n              return false;\n      return true;\n  }\n\n  template<ranges::input_range R1, ranges::input_range R2,\n           class Pred = ranges::equal_to,\n           class Proj1 = std::identity, class Proj2 = std::identity>\n  requires std::indirectly_comparable<ranges::iterator_t<R1>, ranges::iterator_t<R2>,\n                                      Pred, Proj1, Proj2>\n  constexpr bool\n      operator()(R1&& r1, R2&& r2, Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {}) const\n  {\n      return (*this)(ranges::begin(r1), ranges::end(r1),\n                     ranges::begin(r2), ranges::end(r2),\n                     std::ref(pred), std::ref(proj1), std::ref(proj2));\n  }\n};\n\ninline constexpr equal_fn equal;\n"))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The following code uses ",(0,l.kt)("a",{parentName:"p",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"ranges::equal"))," to test if a string is a palindrome."),(0,l.kt)(o.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <algorithm>\n#include <iomanip>\n#include <iostream>\n#include <ranges>\n#include <string_view>\n\nconstexpr bool is_palindrome(const std::string_view s)\n{\n    namespace views = std::views;\n    auto forward = s | views::take(s.size() / 2);\n    auto backward = s | views::reverse | views::take(s.size() / 2);\n    return std::ranges::equal(forward, backward);\n}\n\nvoid test(const std::string_view s)\n{\n    std::cout << quoted(s) << " is "\n              << (is_palindrome(s) ? "" : "not ")\n              << "a palindrome\\n";\n}\n\nint main()\n{\n    test("radar");\n    test("hello");\n    static_assert(is_palindrome("ABBA") and not is_palindrome("AC/DC"));\n}\n'))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},'"radar" is a palindrome\n"hello" is not a palindrome\n')))))}b.isMDXComponent=!0}}]);