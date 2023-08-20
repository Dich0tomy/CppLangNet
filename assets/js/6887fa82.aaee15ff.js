"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[27726,95282,8263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(87462),r=n(67294),l=n(86010),s=n(12466),o=n(76775),i=n(91980),c=n(67392),p=n(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,c]=g({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=i??m;return u({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var b=n(72389);const k="tabList__CuJ",v="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==o&&(m(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:u,onClick:d},s,{className:(0,l.Z)("tabs__item",v,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462),r=n(67294);const l="columns_Terr";function s(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}s.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(74866),l=n(85162),s=n(99372),o=n(72412);const i={};function c(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?a.createElement(l.Z,{value:n,label:s.gJ.get(n),default:c.default||0==t},c.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:i.smallTabs},a.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,o.Z)(c.simplified)),a.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,o.Z)(c.detailed)))):c.value):a.createElement(l.Z,{value:n,label:s.gJ.get(n),default:0==t},(0,o.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>p,ZP:()=>c});var a=n(67294),r=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var s=n(98839);const o={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},i=e=>e.none?o.None:e.pub||e.public?o.Public:e.prot||e.protected?o.Protected:e.priv||e.private?o.Private:o.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>i(e).Order<i(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function p(e){a.useContext(s.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const o=e.linkName||e.autoLink;!e.noLink&&o&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?a.createElement("span",{className:l[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:l.symbolProp},(e=>{const t=i(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:l.symbolName},t),a.createElement("td",{className:l.symbolDesc},(0,r.Z)(n)))}p.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=p},99372:(e,t,n)=>{n.d(t,{gJ:()=>p,eH:()=>g,U6:()=>d,OS:()=>u});var a=n(67294),r=n(95999);const l="markedText_c6kK",s="since_c1Q3",o="until_jXK6",i="removed_A_Kf",c="versionNumber_BiUX",p=new Map;function m(e){let{children:t,className:n}=e;return a.createElement("span",{className:l+(n?" "+n:"")},t)}function d(e){let{children:t,v:n}=e;return a.createElement(m,{className:s},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`since-${n}`),")")))}function u(e){let{children:t,v:n}=e;return a.createElement(m,{className:o},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`until-${n}`),")")))}function g(e){let{children:t,v:n}=e;return a.createElement(m,{className:i},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`removed-${n}`),")")))}p.set("cpp98","C++98"),p.set("cpp03","C++03"),p.set("cpp11","C++11"),p.set("cpp14","C++14"),p.set("cpp17","C++17"),p.set("cpp20","C++20"),p.set("cpp23","C++23"),p.set("deprecated-",a.createElement(r.Z,null,"deprecated")),p.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),p.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),p.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),p.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),p.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),p.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),p.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),p.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),p.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),p.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),p.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),p.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),p.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),p.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),p.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),p.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),p.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),p.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),p.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),p.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),p.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),p.set("removed-",a.createElement(r.Z,null,"deleted")),p.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),p.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),p.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),p.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),p.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),p.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),p.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},54694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},s=void 0,o={unversionedId:"std/algo/ranges/_codes/max/since-cpp20-detailed",id:"std/algo/ranges/_codes/max/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/max/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/max",slug:"/std/algo/ranges/_codes/max/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/max/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/max/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n    class T,\n    class Proj = std::identity,\n    class Comp = ranges::less\n>\n    requires std::indirect_strict_weak_order<Comp, std::projected<const T*, Proj>>\nconstexpr const T&\n    max( const T& a, const T& b, Comp comp = {}, Proj proj = {} );\n\n// (2)\ntemplate<\n    std::copyable T,\n    class Proj = std::identity,\n    class Comp = ranges::less\n>\n    requires std::indirect_strict_weak_order<Comp, std::projected<const T*, Proj>>\nconstexpr const T\n    max( std::initializer_list<T> r, Comp comp = {}, Proj proj = {} );\n\n// (3)\ntemplate<\n    ranges::input_range R,\n    class Proj = std::identity,\n    class Comp = ranges::less\n>\n    requires\n        std::indirectly_copyable_storable<ranges::iterator_t<R>, ranges::range_value_t<R>*>\n        && std::indirect_strict_weak_order<Comp, std::projected<ranges::iterator_t<R>, Proj>>\nconstexpr ranges::range_value_t<R> max( R&& r, Comp comp = {}, Proj proj = {} );\n")))}m.isMDXComponent=!0},75940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},s=void 0,o={unversionedId:"std/algo/ranges/_codes/max/since-cpp20-simplified",id:"std/algo/ranges/_codes/max/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/max/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/max",slug:"/std/algo/ranges/_codes/max/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/max/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/max/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr const T&\n    max( const T& a, const T& b, Comp comp = {}, Proj proj = {} );\n\n// (2)\nconstexpr const T\n    max( std::initializer_list<T> r, Comp comp = {}, Proj proj = {} );\n\n// (3)\nconstexpr ranges::range_value_t<R> max( R&& r, Comp comp = {}, Proj proj = {} );\n")),(0,r.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"T")," - ",(0,r.kt)("strong",{parentName:"li"},"(none)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Proj")," - ",(0,r.kt)("strong",{parentName:"li"},"(none)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Comp")," - ",(0,r.kt)("strong",{parentName:"li"},"(none)"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Proj")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Comp")," template arguments have, the following default types for all overloads: ",(0,r.kt)("inlineCode",{parentName:"p"},"std::identity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ranges::less"),"."),(0,r.kt)("p",null,"Additionally, each overload has the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(1)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"indirect_strict_weak_order<Comp, projected<const T*, Proj>>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(2)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"indirect_strict_weak_order<Comp, projected<const T*, Proj>>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(3)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"indirectly_copyable_storable<ranges::iterator_t<R>, ranges::range_value_t<R>*> && indirect_strict_weak_order<Comp, projected<ranges::iterator_t<R>, Proj>>"))),(0,r.kt)("p",null,"(The ",(0,r.kt)("inlineCode",{parentName:"p"},"std::")," namespace was ommitted here for readability)"))}m.isMDXComponent=!0},91381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>f});var a=n(87462),r=n(67294),l=n(3905),s=n(55059),o=n(22307),i=n(99801),c=n(54694),p=n(75940);const m={title:"ranges::max algorithm",sidebar_label:"ranges::max(  )",description:"ranges::max algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","max","maximum","biggest","greatest","bigger","greater"],cppreference_origin_rel:"w/cpp/algorithm/ranges/max"},d=void 0,u={unversionedId:"std/algo/ranges/max",id:"std/algo/ranges/max",title:"ranges::max algorithm",description:"ranges::max algorithm C++ documentation",source:"@site/content/docs/std/algo/ranges/max.mdx",sourceDirName:"std/algo/ranges",slug:"/std/algo/ranges/max",permalink:"/CppLangNet/docs/std/algo/ranges/max",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/max.mdx",tags:[{label:"ranges",permalink:"/CppLangNet/docs/tags/ranges"},{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"max",permalink:"/CppLangNet/docs/tags/max"},{label:"maximum",permalink:"/CppLangNet/docs/tags/maximum"},{label:"biggest",permalink:"/CppLangNet/docs/tags/biggest"},{label:"greatest",permalink:"/CppLangNet/docs/tags/greatest"},{label:"bigger",permalink:"/CppLangNet/docs/tags/bigger"},{label:"greater",permalink:"/CppLangNet/docs/tags/greater"}],version:"current",frontMatter:{title:"ranges::max algorithm",sidebar_label:"ranges::max(  )",description:"ranges::max algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","max","maximum","biggest","greatest","bigger","greater"],cppreference_origin_rel:"w/cpp/algorithm/ranges/max"},sidebar:"defaultSidebar",previous:{title:"ranges::min(  )",permalink:"/CppLangNet/docs/std/algo/ranges/min"},next:{title:"ranges::minmax(  )",permalink:"/CppLangNet/docs/std/algo/ranges/minmax"}},g={},f=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Notes",id:"notes",level:3},{value:"Examples",id:"examples",level:3}],b={toc:f};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdrangesmax-algorithm"},"std::ranges::max() algorithm"),(0,l.kt)(i.Z,{content:{"since-cpp20":{simplified:(0,l.kt)(p.default,{mdxType:"Signature_SinceCpp20_Simplified"}),detailed:(0,l.kt)(c.default,{mdxType:"Signature_SinceCpp20_Detailed"})}},mdxType:"SwitchView"}),(0,l.kt)("p",null,"Returns the greater of the given projected elements."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," Returns the greatest of ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," Returns the first greatest element in the initializer list ",(0,l.kt)("inlineCode",{parentName:"p"},"r"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(3)")," Returns the first greatest value in the range ",(0,l.kt)("inlineCode",{parentName:"p"},"r"),"."))),(0,l.kt)("p",null,"The function-like entities described on this page are ",(0,l.kt)("a",{parentName:"p",href:"/docs/std/algo/niebloids"},(0,l.kt)("strong",{parentName:"a"},"niebloids")),"."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(s.ZP,{mdxType:"SymbolTable"},(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)(r.Fragment,null," ",(0,l.kt)("code",null,"a")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"b")," "),mdxType:"Symbol"},"The values to compare."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"r"),mdxType:"Symbol"},"The range of values to compare."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"comp"),mdxType:"Symbol"},"Comparison to apply to the projected elements."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"proj"),mdxType:"Symbol"},"Projection to apply to the elements.")),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(1)")," The greater of ",(0,l.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"b"),", according to the projection. If they are equivalent, returns ",(0,l.kt)("inlineCode",{parentName:"li"},"a"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(3 - 4)")," The greatest element in ",(0,l.kt)("inlineCode",{parentName:"li"},"r"),", according to the projection.\nIf several values are equivalent to the smallest, returns the leftmost one.",(0,l.kt)("admonition",{parentName:"li",title:"Undefined Behavior",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"If the range is empty (as determined by ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::distance(r)"),"), the behavior is undefined.")))),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(1)")," Exactly one comparison."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(3 - 4)")," Exactly ",(0,l.kt)("inlineCode",{parentName:"li"},"ranges::distance(r) - 1")," comparisons.")),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(none)")),(0,l.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"max(1) and max(2)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"struct max_fn\n{\n    template<class T, class Proj = std::identity,\n             std::indirect_strict_weak_order<\n                 std::projected<const T*, Proj>> Comp = ranges::less>\n    constexpr\n    const T& operator()(const T& a, const T& b, Comp comp = {}, Proj proj = {}) const\n    {\n        return std::invoke(comp, std::invoke(proj, a), std::invoke(proj, b)) ? b : a;\n    }\n\n    template<std::copyable T, class Proj = std::identity,\n             std::indirect_strict_weak_order<\n                 std::projected<const T*, Proj>> Comp = ranges::less>\n    constexpr\n    const T operator()(std::initializer_list<T> r, Comp comp = {}, Proj proj = {}) const\n    {\n        return *ranges::max_element(r, std::ref(comp), std::ref(proj));\n    }\n\n    template<ranges::input_range R, class Proj = std::identity,\n             std::indirect_strict_weak_order<\n                  std::projected<ranges::iterator_t<R>, Proj>> Comp = ranges::less>\n    requires std::indirectly_copyable_storable<ranges::iterator_t<R>,\n                                               ranges::range_value_t<R>*>\n    constexpr\n    ranges::range_value_t<R> operator()(R&& r, Comp comp = {}, Proj proj = {}) const\n    {\n        using V = ranges::range_value_t<R>;\n        if constexpr (ranges::forward_range<R>)\n            return\n                static_cast<V>(*ranges::max_element(r, std::ref(comp), std::ref(proj)));\n        else\n        {\n            auto i = ranges::begin(r);\n            auto s = ranges::end(r);\n            V m(*i);\n            while (++i != s)\n                if (std::invoke(comp, std::invoke(proj, m), std::invoke(proj, *i)))\n                    m = *i;\n            return m;\n        }\n    }\n};\n\ninline constexpr max_fn max;\n"))),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("admonition",{title:"Undefined Behavior",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Capturing the result of ",(0,l.kt)("inlineCode",{parentName:"p"},"std::ranges::max")," by reference produces a dangling reference if one of the parameters is a temporary and that parameter is returned:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int n = 1;\nconst int& r = std::ranges::max(n - 1, n + 1); // r is dangling\n"))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(o.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <algorithm>\n#include <iostream>\n#include <string>\n\nint main()\n{\n    namespace ranges = std::ranges;\n    using namespace std::string_view_literals;\n\n    std::cout << "smaller of 1 and 9999: " << ranges::min(1, 9999) << \'\\n\'\n              << "smaller of \'a\', and \'b\': \'" << ranges::min(\'a\', \'b\') << "\'\\n"\n              << "shortest of \\"foo\\", \\"bar\\", and \\"hello\\": \\""\n              << ranges::min({ "foo"sv, "bar"sv, "hello"sv }, {},\n                             &std::string_view::size) << "\\"\\n";\n}\n'))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},'smaller of 1 and 9999: 1\nsmaller of \'a\', and \'b\': \'a\'\nshortest of "foo", "bar", and "hello": "foo"\n')))))}k.isMDXComponent=!0}}]);