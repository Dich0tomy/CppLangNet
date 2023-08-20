"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[14202,44566,24403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),s=n(76775),i=n(91980),p=n(67392),c=n(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,p]=g({queryString:n,groupId:a}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=i??u;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),f(e)}),[p,f,l]),tabValues:l}}var b=n(72389);const k="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==s&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",h,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return r.createElement(_,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(87462),r=n(67294);const l="columns_Terr";function o(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}o.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(74866),l=n(85162),o=n(99372),s=n(72412);const i={};function p(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,p]=e;return p.value||p.simplified||p.detailed?a.createElement(l.Z,{value:n,label:o.gJ.get(n),default:p.default||0==t},p.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:i.smallTabs},a.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,s.Z)(p.simplified)),a.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,s.Z)(p.detailed)))):p.value):a.createElement(l.Z,{value:n,label:o.gJ.get(n),default:0==t},(0,s.Z)(p))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>c,ZP:()=>p});var a=n(67294),r=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var o=n(98839);const s={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},i=e=>e.none?s.None:e.pub||e.public?s.Public:e.prot||e.protected?s.Protected:e.priv||e.private?s.Private:s.Public;function p(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>i(e).Order<i(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function c(e){a.useContext(o.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const s=e.linkName||e.autoLink;!e.noLink&&s&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const p=(e,t,n)=>!0===e?a.createElement("span",{className:l[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:l.symbolProp},(e=>{const t=i(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),p(e.static,"modStatic","static"),p(e.constexpr,"modConstexpr","constexpr"),p(e.const,"modConst","const"),p(e.volatile,"modVolatile","volatile"),p(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:l.symbolName},t),a.createElement("td",{className:l.symbolDesc},(0,r.Z)(n)))}c.isMDXComponent=!0,p.isMDXComponent=!0,p.Symbol=c},99372:(e,t,n)=>{n.d(t,{gJ:()=>c,eH:()=>g,U6:()=>m,OS:()=>d});var a=n(67294),r=n(95999);const l="markedText_c6kK",o="since_c1Q3",s="until_jXK6",i="removed_A_Kf",p="versionNumber_BiUX",c=new Map;function u(e){let{children:t,className:n}=e;return a.createElement("span",{className:l+(n?" "+n:"")},t)}function m(e){let{children:t,v:n}=e;return a.createElement(u,{className:o},t,"\xa0",a.createElement("span",{className:p},a.createElement("small",null,"(",c.get(`since-${n}`),")")))}function d(e){let{children:t,v:n}=e;return a.createElement(u,{className:s},t,"\xa0",a.createElement("span",{className:p},a.createElement("small",null,"(",c.get(`until-${n}`),")")))}function g(e){let{children:t,v:n}=e;return a.createElement(u,{className:i},t,"\xa0",a.createElement("span",{className:p},a.createElement("small",null,"(",c.get(`removed-${n}`),")")))}c.set("cpp98","C++98"),c.set("cpp03","C++03"),c.set("cpp11","C++11"),c.set("cpp14","C++14"),c.set("cpp17","C++17"),c.set("cpp20","C++20"),c.set("cpp23","C++23"),c.set("deprecated-",a.createElement(r.Z,null,"deprecated")),c.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),c.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),c.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),c.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),c.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),c.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),c.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),c.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),c.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),c.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),c.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),c.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),c.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),c.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),c.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),c.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),c.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),c.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),c.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),c.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),c.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),c.set("removed-",a.createElement(r.Z,null,"deleted")),c.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),c.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),c.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),c.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),c.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),c.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),c.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},59600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,s={unversionedId:"std/algo/ranges/_codes/next_permutation/since-cpp20-detailed",id:"std/algo/ranges/_codes/next_permutation/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/next_permutation/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/next_permutation",slug:"/std/algo/ranges/_codes/next_permutation/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/next_permutation/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/next_permutation/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},i={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n  std::bidirectional_iterator I,\n  std::sentinel_for<I> S,\n  class Comp = ranges::less,\n  class Proj = std::identity\n>\n  requires std::sortable<I, Comp, Proj>\nconstexpr next_permutation_result<I>\n    next_permutation( I first, S last, Comp comp = {}, Proj proj = {} );\n\n// (2)\ntemplate<\n  ranges::bidirectional_range R,\n  class Comp = ranges::less,\n  class Proj = std::identity\n>\n  requires std::sortable<ranges::iterator_t<R>, Comp, Proj>\nconstexpr next_permutation_result<ranges::borrowed_iterator_t<R>>\n    next_permutation( R&& r, Comp comp = {}, Proj proj = {} );\n")))}u.isMDXComponent=!0},27334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,s={unversionedId:"std/algo/ranges/_codes/next_permutation/since-cpp20-simplified",id:"std/algo/ranges/_codes/next_permutation/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/next_permutation/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/next_permutation",slug:"/std/algo/ranges/_codes/next_permutation/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/next_permutation/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/next_permutation/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},i={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr next_permutation_result<I>\n    next_permutation( I first, S last, Comp comp = {}, Proj proj = {} );\n\n// (2)\nconstexpr next_permutation_result<ranges::borrowed_iterator_t<R>>\n    next_permutation( R&& r, Comp comp = {}, Proj proj = {} );\n")),(0,r.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::bidirectional_iterator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"S")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"R")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::bidirectional_range")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Comp"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(1)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::sortable<I, Comp, Proj>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(2)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::sortable<ranges::iterator_t<R>, Comp, Proj>")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Proj")," - ",(0,r.kt)("strong",{parentName:"li"},"(none)"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Proj")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Comp")," template arguments have default types of ",(0,r.kt)("inlineCode",{parentName:"p"},"std::identity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ranges::less")," for all overloads."))}u.isMDXComponent=!0},99304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>f});var a=n(87462),r=n(67294),l=n(3905),o=n(55059),s=n(22307),i=n(99801),p=n(59600),c=n(27334);const u={title:"ranges::next_permutation algorithm",sidebar_label:"ranges::next_permutation(  )",description:"ranges::next_permutation algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","next_permutation","permutation"],cppreference_origin_rel:"w/cpp/algorithm/ranges/next_permutation"},m=void 0,d={unversionedId:"std/algo/ranges/next_permutation",id:"std/algo/ranges/next_permutation",title:"ranges::next_permutation algorithm",description:"ranges::next_permutation algorithm C++ documentation",source:"@site/content/docs/std/algo/ranges/next_permutation.mdx",sourceDirName:"std/algo/ranges",slug:"/std/algo/ranges/next_permutation",permalink:"/CppLangNet/docs/std/algo/ranges/next_permutation",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/next_permutation.mdx",tags:[{label:"ranges",permalink:"/CppLangNet/docs/tags/ranges"},{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"next_permutation",permalink:"/CppLangNet/docs/tags/next-permutation"},{label:"permutation",permalink:"/CppLangNet/docs/tags/permutation"}],version:"current",frontMatter:{title:"ranges::next_permutation algorithm",sidebar_label:"ranges::next_permutation(  )",description:"ranges::next_permutation algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","next_permutation","permutation"],cppreference_origin_rel:"w/cpp/algorithm/ranges/next_permutation"},sidebar:"defaultSidebar",previous:{title:"ranges::is_permutation(  )",permalink:"/CppLangNet/docs/std/algo/ranges/is_permutation"},next:{title:"ranges::prev_permutation(  )",permalink:"/CppLangNet/docs/std/algo/ranges/prev_permutation"}},g={},f=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Examples",id:"examples",level:3}],b={toc:f};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdrangesnext_permutation-algorithm"},"std::ranges::next_permutation() algorithm"),(0,l.kt)(i.Z,{content:{"since-cpp20":{simplified:(0,l.kt)(c.default,{mdxType:"Signature_SinceCpp20_Simplified"}),detailed:(0,l.kt)(p.default,{mdxType:"Signature_SinceCpp20_Detailed"})}},mdxType:"SwitchView"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," Transforms the range [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),") into the next permutation, where the set of all permutations is ordered lexicographically with respect to binary comparison function object comp and projection function object ",(0,l.kt)("inlineCode",{parentName:"p"},"proj"),".\nReturns:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{ last, true }"),' if such a "next permutation" exists'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{ last, false }")," and transforms the range into the lexicographically first permutation as if by:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"ranges::sort(first, last, comp, proj);\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,l.kt)("strong",{parentName:"p"},"(1)"),", but uses ",(0,l.kt)("inlineCode",{parentName:"p"},"r1")," as the first source range and ",(0,l.kt)("inlineCode",{parentName:"p"},"r2")," as the second source range, as if using ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::begin(r1)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"first1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::end(r1)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"last1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::begin(r2)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"first2"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::end(r2)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"last2"),"."))),(0,l.kt)("p",null,"The function-like entities described on this page are ",(0,l.kt)("a",{parentName:"p",href:"/docs/std/algo/niebloids"},(0,l.kt)("strong",{parentName:"a"},"niebloids")),"."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(o.ZP,{mdxType:"SymbolTable"},(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)(r.Fragment,null," ",(0,l.kt)("code",null,"first1")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last1")," "),mdxType:"Symbol"},"The range of elements to permute."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"r"),mdxType:"Symbol"},"The range of elements to permute."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"comp"),mdxType:"Symbol"},"Comparison function object which returns ",(0,l.kt)("cod",null,"true")," if the first argument is less than the second."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"proj"),mdxType:"Symbol"},"The projection to apply to the elements.")),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::next_permutation_result<I>{ last, true }")," if the new permutation is lexicographically ",(0,l.kt)("em",{parentName:"p"},"greater")," than the old one. ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::next_permutation_result<I>{ last, false }")," if the last permutation was reached and the range was reset to the first permutation.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," same as ",(0,l.kt)("strong",{parentName:"p"},"(1)")," except that the return type is ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::next_permutation_result<ranges::borrowed_iterator_t<R>>"),"."))),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"Given ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::distance(first, last)"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(1)")," At most ",(0,l.kt)("inlineCode",{parentName:"li"},"N / 2")," swaps."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(2)")," At most ",(0,l.kt)("inlineCode",{parentName:"li"},"ranges::distance(r)")," swaps.")),(0,l.kt)("p",null,"Averaged over the entire sequence of permutations, typical implementations use about ",(0,l.kt)("inlineCode",{parentName:"p"},"3")," comparisons and ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5")," swaps per call."),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,"Any exceptions thrown from iterator operations or the element swap."),(0,l.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,l.kt)("p",null,"Implementations (e.g. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp"},(0,l.kt)("strong",{parentName:"a"},"MSVC STL"))," may enable vectorization when the iterator type satisfies\n",(0,l.kt)("a",{parentName:"p",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"contiguous_iterator"))," and swapping its value type calls neither non-trivial special member function nor ",(0,l.kt)("a",{parentName:"p",href:"#"},"ADL"),"-found swap."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"next_permutation(1) and next_permutation(2)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'struct next_permutation_fn\n{\n    template<std::bidirectional_iterator I, std::sentinel_for<I> S,\n             class Comp = ranges::less, class Proj = std::identity>\n    requires std::sortable<I, Comp, Proj>\n    constexpr ranges::next_permutation_result<I>\n        operator()(I first, S last, Comp comp = {}, Proj proj = {}) const\n    {\n        // check that the sequence has at least two elements\n        if (first == last)\n            return {std::move(first), false};\n        I i_last {ranges::next(first, last)};\n        I i {i_last};\n        if (first == --i)\n            return {std::move(i_last), false};\n        // main "permutating" loop\n        for (;;)\n        {\n            I i1 {i};\n            if (std::invoke(comp, std::invoke(proj, *--i), std::invoke(proj, *i1)))\n            {\n                I j {i_last};\n                while (!std::invoke(comp, std::invoke(proj, *i), std::invoke(proj, *--j)))\n                { }\n                std::iter_swap(i, j);\n                std::reverse(i1, i_last);\n                return {std::move(i_last), true};\n            }\n            // permutation "space" is exhausted\n            if (i == first)\n            {\n                std::reverse(first, i_last);\n                return {std::move(i_last), false};\n            }\n        }\n    }\n\n    template<ranges::bidirectional_range R, class Comp = ranges::less,\n             class Proj = std::identity>\n    requires std::sortable<ranges::iterator_t<R>, Comp, Proj>\n    constexpr ranges::next_permutation_result<ranges::borrowed_iterator_t<R>>\n        operator()(R&& r, Comp comp = {}, Proj proj = {}) const\n    {\n        return (*this)(ranges::begin(r), ranges::end(r),\n                       std::move(comp), std::move(proj));\n    }\n};\n\ninline constexpr next_permutation_fn next_permutation {};\n'))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(s.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <algorithm>\n#include <array>\n#include <compare>\n#include <functional>\n#include <iostream>\n#include <string>\n\nstruct S\n{\n    char c;\n    int i;\n    auto operator<=>(const S&) const = default;\n    friend std::ostream& operator<<(std::ostream& os, const S& s)\n    {\n        return os << "{\'" << s.c << "\', " << s.i << "}";\n    }\n};\n\nauto print = [](auto const& v, char term = \' \')\n{\n    std::cout << "{ ";\n    for (const auto& e : v) { std::cout << e << \' \'; }\n    std::cout << \'}\' << term;\n};\n\nint main()\n{\n    std::cout << "Generate all permutations (iterators case):\\n";\n    std::string s {"abc"};\n    do { print(s); } while (std::ranges::next_permutation(s.begin(), s.end()).found);\n\n    std::cout << "\\n" "Generate all permutations (range case):\\n";\n    std::array a {\'a\', \'b\', \'c\'};\n    do { print(a); } while (std::ranges::next_permutation(a).found);\n\n    std::cout << "\\n" "Generate all permutations using comparator:\\n";\n    using namespace std::literals;\n    std::array z { "\u2588"s, "\u2584"s, "\u2581"s };\n    do { print(z); } while (std::ranges::next_permutation(z, std::greater()).found);\n\n    std::cout << "\\n" "Generate all permutations using projection:\\n";\n    std::array<S, 3> r { S{\'A\',3}, S{\'B\',2}, S{\'C\',1} };\n    do { print(r, \'\\n\'); } while (std::ranges::next_permutation(r, {}, &S::c).found);\n}\n'))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Possible Output"',title:'"Possible','Output"':!0},"Generate all permutations (iterators case):\n{ a b c } { a c b } { b a c } { b c a } { c a b } { c b a }\nGenerate all permutations (range case):\n{ a b c } { a c b } { b a c } { b c a } { c a b } { c b a }\nGenerate all permutations using comparator:\n{ \u2588 \u2584 \u2581 } { \u2588 \u2581 \u2584 } { \u2584 \u2588 \u2581 } { \u2584 \u2581 \u2588 } { \u2581 \u2588 \u2584 } { \u2581 \u2584 \u2588 }\nGenerate all permutations using projection:\n{ {'A', 3} {'B', 2} {'C', 1} }\n{ {'A', 3} {'C', 1} {'B', 2} }\n{ {'B', 2} {'A', 3} {'C', 1} }\n{ {'B', 2} {'C', 1} {'A', 3} }\n{ {'C', 1} {'A', 3} {'B', 2} }\n{ {'C', 1} {'B', 2} {'A', 3} }\n")))))}k.isMDXComponent=!0}}]);