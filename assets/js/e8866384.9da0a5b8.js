"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[82451,49756,98536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),s=n(76775),o=n(91980),p=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=u(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,p]=g({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),h(e)}),[p,h,l]),tabValues:l}}var f=n(72389);const _="tabList__CuJ",k="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==s&&(d(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:u},i,{className:(0,l.Z)("tabs__item",k,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",_)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294);const l="columns_Terr";function i(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}i.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(74866),l=n(85162),i=n(99372),s=n(72412);const o={};function p(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,p]=e;return p.value||p.simplified||p.detailed?a.createElement(l.Z,{value:n,label:i.gJ.get(n),default:p.default||0==t},p.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:o.smallTabs},a.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,s.Z)(p.simplified)),a.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,s.Z)(p.detailed)))):p.value):a.createElement(l.Z,{value:n,label:i.gJ.get(n),default:0==t},(0,s.Z)(p))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>c,ZP:()=>p});var a=n(67294),r=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var i=n(98839);const s={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},o=e=>e.none?s.None:e.pub||e.public?s.Public:e.prot||e.protected?s.Protected:e.priv||e.private?s.Private:s.Public;function p(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>o(e).Order<o(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function c(e){a.useContext(i.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const s=e.linkName||e.autoLink;!e.noLink&&s&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const p=(e,t,n)=>!0===e?a.createElement("span",{className:l[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:l.symbolProp},(e=>{const t=o(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),p(e.static,"modStatic","static"),p(e.constexpr,"modConstexpr","constexpr"),p(e.const,"modConst","const"),p(e.volatile,"modVolatile","volatile"),p(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:l.symbolName},t),a.createElement("td",{className:l.symbolDesc},(0,r.Z)(n)))}c.isMDXComponent=!0,p.isMDXComponent=!0,p.Symbol=c},99372:(e,t,n)=>{n.d(t,{gJ:()=>c,eH:()=>g,U6:()=>u,OS:()=>m});var a=n(67294),r=n(95999);const l="markedText_c6kK",i="since_c1Q3",s="until_jXK6",o="removed_A_Kf",p="versionNumber_BiUX",c=new Map;function d(e){let{children:t,className:n}=e;return a.createElement("span",{className:l+(n?" "+n:"")},t)}function u(e){let{children:t,v:n}=e;return a.createElement(d,{className:i},t,"\xa0",a.createElement("span",{className:p},a.createElement("small",null,"(",c.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return a.createElement(d,{className:s},t,"\xa0",a.createElement("span",{className:p},a.createElement("small",null,"(",c.get(`until-${n}`),")")))}function g(e){let{children:t,v:n}=e;return a.createElement(d,{className:o},t,"\xa0",a.createElement("span",{className:p},a.createElement("small",null,"(",c.get(`removed-${n}`),")")))}c.set("cpp98","C++98"),c.set("cpp03","C++03"),c.set("cpp11","C++11"),c.set("cpp14","C++14"),c.set("cpp17","C++17"),c.set("cpp20","C++20"),c.set("cpp23","C++23"),c.set("deprecated-",a.createElement(r.Z,null,"deprecated")),c.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),c.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),c.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),c.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),c.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),c.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),c.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),c.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),c.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),c.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),c.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),c.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),c.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),c.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),c.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),c.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),c.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),c.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),c.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),c.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),c.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),c.set("removed-",a.createElement(r.Z,null,"deleted")),c.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),c.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),c.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),c.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),c.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),c.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),c.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},56081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},i=void 0,s={unversionedId:"std/algo/ranges/_codes/is_heap_until/since-cpp20-detailed",id:"std/algo/ranges/_codes/is_heap_until/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/is_heap_until/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/is_heap_until",slug:"/std/algo/ranges/_codes/is_heap_until/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/is_heap_until/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/is_heap_until/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},o={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n  std::random_access_iterator I,\n  std::sentinel_for<I> S,\n  class Proj = std::identity,\n  std::indirect_strict_weak_order<std::projected<I, Proj>> Comp = ranges::less\n>\nconstexpr I is_heap_until( I first, S last, Comp comp = {}, Proj proj = {} );\n\n// (2)\ntemplate<\n  ranges::random_access_range R,\n  class Proj = std::identity,\n  std::indirect_strict_weak_order<std::projected<ranges::iterator_t<R>, Proj>> Comp = ranges::less\n>\nconstexpr ranges::borrowed_iterator_t<R>\n    is_heap_until( R&& r, Comp comp = {}, Proj proj = {} );\n")))}d.isMDXComponent=!0},94200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},i=void 0,s={unversionedId:"std/algo/ranges/_codes/is_heap_until/since-cpp20-simplified",id:"std/algo/ranges/_codes/is_heap_until/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/is_heap_until/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/is_heap_until",slug:"/std/algo/ranges/_codes/is_heap_until/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/is_heap_until/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/is_heap_until/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},o={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr I is_heap_until( I first, S last, Comp comp = {}, Proj proj = {} );\n\n// (2)\nconstexpr ranges::borrowed_iterator_t<R>\n    is_heap_until( R&& r, Comp comp = {}, Proj proj = {} );\n")),(0,r.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::random_access_iterator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"S")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"R")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::ranges::random_access_range")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Comp"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(1)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::indirect_strict_weak_order<std::projected<I, Proj>>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(2)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::indirect_strict_weak_order<std::projected<ranges::iterator_t<R>, Proj>>")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Proj")," - ",(0,r.kt)("strong",{parentName:"li"},"(none)"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Proj")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Comp")," template arguments have the following default types: ",(0,r.kt)("inlineCode",{parentName:"p"},"std::identity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ranges::less")," for all overloads."))}d.isMDXComponent=!0},68354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>_,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var a=n(87462),r=n(67294),l=n(3905),i=n(55059),s=n(22307),o=n(99801),p=n(56081),c=n(94200);const d={title:"ranges::is_heap_until algorithm",sidebar_label:"ranges::is_heap_until(  )",description:"ranges::is_heap_until algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","heap","is_heap_until"],cppreference_origin_rel:"w/cpp/algorithm/ranges/is_heap_until"},u=void 0,m={unversionedId:"std/algo/ranges/is_heap_until",id:"std/algo/ranges/is_heap_until",title:"ranges::is_heap_until algorithm",description:"ranges::is_heap_until algorithm C++ documentation",source:"@site/content/docs/std/algo/ranges/is_heap_until.mdx",sourceDirName:"std/algo/ranges",slug:"/std/algo/ranges/is_heap_until",permalink:"/CppLangNet/docs/std/algo/ranges/is_heap_until",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/is_heap_until.mdx",tags:[{label:"ranges",permalink:"/CppLangNet/docs/tags/ranges"},{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"heap",permalink:"/CppLangNet/docs/tags/heap"},{label:"is_heap_until",permalink:"/CppLangNet/docs/tags/is-heap-until"}],version:"current",frontMatter:{title:"ranges::is_heap_until algorithm",sidebar_label:"ranges::is_heap_until(  )",description:"ranges::is_heap_until algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","heap","is_heap_until"],cppreference_origin_rel:"w/cpp/algorithm/ranges/is_heap_until"},sidebar:"defaultSidebar",previous:{title:"ranges::is_heap(  )",permalink:"/CppLangNet/docs/std/algo/ranges/is_heap"},next:{title:"ranges::make_heap(  )",permalink:"/CppLangNet/docs/std/algo/ranges/make_heap"}},g={},h=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Notes",id:"notes",level:3},{value:"Examples",id:"examples",level:3}],f={toc:h};function _(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdrangesis_heap_until-algorithm"},"std::ranges::is_heap_until() algorithm"),(0,l.kt)(o.Z,{content:{"since-cpp20":{simplified:(0,l.kt)(c.default,{mdxType:"Signature_SinceCpp20_Simplified"}),detailed:(0,l.kt)(p.default,{mdxType:"Signature_SinceCpp20_Detailed"})}},mdxType:"SwitchView"}),(0,l.kt)("p",null,"Examines the range [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),") and finds the largest range beginning at ",(0,l.kt)("inlineCode",{parentName:"p"},"first")," which is a max heap."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," Elements are compared using the given binary comparison function ",(0,l.kt)("inlineCode",{parentName:"p"},"comp")," and projection object ",(0,l.kt)("inlineCode",{parentName:"p"},"proj"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,l.kt)("strong",{parentName:"p"},"(1)"),", but uses ",(0,l.kt)("inlineCode",{parentName:"p"},"r")," as the source range, as if using ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::begin(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"first")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::end(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),"."))),(0,l.kt)("p",null,"The function-like entities described on this page are ",(0,l.kt)("a",{parentName:"p",href:"/docs/std/algo/niebloids"},(0,l.kt)("strong",{parentName:"a"},"niebloids")),"."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(i.ZP,{mdxType:"SymbolTable"},(0,l.kt)(i.mN,{none:!0,noLink:!0,name:(0,l.kt)(r.Fragment,null," ",(0,l.kt)("code",null,"first")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last")," "),mdxType:"Symbol"},"The range of elements to examine."),(0,l.kt)(i.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"r"),mdxType:"Symbol"},"The range of elements to examine."),(0,l.kt)(i.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"pred"),mdxType:"Symbol"},"Predicate to apply to the projected elements."),(0,l.kt)(i.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"proj"),mdxType:"Symbol"},"The projection to apply to the elements.")),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("p",null,"The upper bound of the largest range beginning at ",(0,l.kt)("inlineCode",{parentName:"p"},"first")," which is a max heap.\nThat is, the last iterator it for which range [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"it"),") is a max heap with respect to ",(0,l.kt)("inlineCode",{parentName:"p"},"comp")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"proj"),"."),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"Linear in the distance between ",(0,l.kt)("inlineCode",{parentName:"p"},"first")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),"."),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(none)")),(0,l.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"is_heap_until(1) and is_heap(2)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"\nstruct is_heap_until_fn\n{\n    template<std::random_access_iterator I, std::sentinel_for<I> S,\n             class Proj = std::identity, std::indirect_strict_weak_order<\n             std::projected<I, Proj>> Comp = ranges::less>\n    constexpr I\n        operator()(I first, S last, Comp comp = {}, Proj proj = {}) const\n    {\n        std::iter_difference_t<I> n {ranges::distance(first, last)}, dad {0}, son {1};\n        for (; son != n; ++son)\n        {\n            if (std::invoke(comp, std::invoke(proj, *(first + dad)),\n                                  std::invoke(proj, *(first + son))))\n                return first + son;\n            else if ((son % 2) == 0)\n                ++dad;\n        }\n        return first + n;\n    }\n\n    template<ranges::random_access_range R, class Proj = std::identity,\n             std::indirect_strict_weak_order<std::projected<ranges::iterator_t<R>, Proj>>\n             Comp = ranges::less>\n    constexpr ranges::borrowed_iterator_t<R>\n        operator()(R&& r, Comp comp = {}, Proj proj = {}) const\n    {\n        return (*this)(ranges::begin(r), ranges::end(r), std::move(comp), std::move(proj));\n    }\n};\n\ninline constexpr is_heap_until_fn is_heap_until {};\n"))),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("p",null,"A max heap is a range of elements [",(0,l.kt)("inlineCode",{parentName:"p"},"f"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"l"),"), arranged with respect to comparator ",(0,l.kt)("inlineCode",{parentName:"p"},"comp")," and projection ",(0,l.kt)("inlineCode",{parentName:"p"},"proj"),", that has the following properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Given ",(0,l.kt)("inlineCode",{parentName:"li"},"N")," as ",(0,l.kt)("inlineCode",{parentName:"li"},"l - f"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"p = f[(i - 1) / 2]"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"q = f[i]"),", for all ",(0,l.kt)("inlineCode",{parentName:"li"},"0 < i < N"),", the expression ",(0,l.kt)("inlineCode",{parentName:"li"},"std::invoke(comp, std::invoke(proj, p), std::invoke(proj, q))")," evaluates to ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},"A new element can be added using ",(0,l.kt)("a",{parentName:"li",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"ranges::push_heap")),", in ",(0,l.kt)("strong",{parentName:"li"},"O(log(N))")," time."),(0,l.kt)("li",{parentName:"ul"},"The first element can be removed using ",(0,l.kt)("a",{parentName:"li",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"ranges::pop_heap")),", in ",(0,l.kt)("strong",{parentName:"li"},"O(log(N))")," time.")),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(s.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <algorithm>\n#include <cmath>\n#include <iostream>\n#include <iterator>\n#include <vector>\n\nvoid out(const auto& what, int n = 1)\n{\n    while (n-- > 0)\n        std::cout << what;\n}\n\nvoid draw_bin_tree(auto first, auto last);\n\nint main()\n{\n    std::vector<int> v {3, 1, 4, 1, 5, 9};\n    std::ranges::make_heap(v);\n\n    // probably mess up the heap\n    v.push_back(2);\n    v.push_back(6);\n\n    out("v after make_heap and push_back: \\n");\n    draw_bin_tree(v.begin(), v.end());\n\n    out("the max-heap prefix of v: \\n");\n    const auto heap_end = std::ranges::is_heap_until(v);\n    draw_bin_tree(v.begin(), heap_end);\n}\n\nvoid draw_bin_tree(auto first, auto last)\n{\n    auto bails = [](int n, int w)\n    {\n        auto b = [](int w) { out("\u250c"), out("\u2500", w), out("\u2534"), out("\u2500", w), out("\u2510"); };\n        n /= 2;\n        if (!n)\n            return;\n        for (out(\' \', w); n-- > 0; )\n            b(w), out(\' \', w + w + 1);\n        out(\'\\n\');\n    };\n    auto data = [](int n, int w, auto& first, auto last)\n    {\n        for(out(\' \', w); n-- > 0 && first != last; ++first)\n            out(*first), out(\' \', w + w + 1);\n        out(\'\\n\');\n    };\n    auto tier = [&](int t, int m, auto& first, auto last)\n    {\n        const int n {1 << t};\n        const int w {(1 << (m - t - 1)) - 1};\n        bails(n, w), data(n, w, first, last);\n    };\n    const auto size {std::ranges::distance(first, last)};\n    const int m {static_cast<int>(std::ceil(std::log2(1 + size)))};\n    for (int i {}; i != m; ++i)\n        tier(i, m, first, last);\n}\n'))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Possible Output"',title:'"Possible','Output"':!0},"v after make_heap and push_back: \n       9               \n   \u250c\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2510       \n   5       4       \n \u250c\u2500\u2534\u2500\u2510   \u250c\u2500\u2534\u2500\u2510   \n 1   1   3   2   \n\u250c\u2534\u2510 \u250c\u2534\u2510 \u250c\u2534\u2510 \u250c\u2534\u2510 \n6 \nthe max-heap prefix of v: \n   9       \n \u250c\u2500\u2534\u2500\u2510   \n 5   4   \n\u250c\u2534\u2510 \u250c\u2534\u2510 \n1 1 3 2\n")))))}_.isMDXComponent=!0}}]);