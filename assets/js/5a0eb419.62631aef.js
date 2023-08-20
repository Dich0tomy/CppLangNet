"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[37295],{85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),r=n(67294),s=n(86010),l=n(12466),o=n(76775),i=n(91980),c=n(67392),p=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,c]=g({queryString:n,groupId:a}),[d,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=i??d;return u({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),v(e)}),[c,v,s]),tabValues:s}}var f=n(72389);const h="tabList__CuJ",k="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==o&&(d(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:u,onClick:m},l,{className:(0,s.Z)("tabs__item",k,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=v(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",h)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(87462),r=n(67294);const s="columns_Terr";function l(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:s,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}l.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(74866),s=n(85162),l=n(99372),o=n(72412);const i={};function c(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?a.createElement(s.Z,{value:n,label:l.gJ.get(n),default:c.default||0==t},c.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:i.smallTabs},a.createElement(s.Z,{value:"simplified",label:"Simplified",default:!0},(0,o.Z)(c.simplified)),a.createElement(s.Z,{value:"detailed",label:"Detailed"},(0,o.Z)(c.detailed)))):c.value):a.createElement(s.Z,{value:n,label:l.gJ.get(n),default:0==t},(0,o.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>p,ZP:()=>c});var a=n(67294),r=n(72412);const s={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var l=n(98839);const o={None:{Order:0,ShortName:"",FullName:"",Style:s.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:s.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:s.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:s.accessPrivate}},i=e=>e.none?o.None:e.pub||e.public?o.Public:e.prot||e.protected?o.Protected:e.priv||e.private?o.Private:o.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>i(e).Order<i(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:s.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function p(e){a.useContext(l.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const o=e.linkName||e.autoLink;!e.noLink&&o&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?a.createElement("span",{className:s[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:s.symbolProp},(e=>{const t=i(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:s.symbolName},t),a.createElement("td",{className:s.symbolDesc},(0,r.Z)(n)))}p.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=p},18510:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(44996),s=n(34386),l=n(72412);const o="TooltipContent_Lvru",i="TooltipTitle_ukF2";function c(e){let{url:t,title:n,maxWidth:c,children:p}=e;let d=c||"clamp(250px, 25vw, 800px)";"string"==typeof d&&d.endsWith("vw")&&(d=`clamp(250px, ${d}, 800px)`);const m="function"==typeof n?a.createElement(n):n,u=(t||"").startsWith("/")?(0,r.Z)(t):t,g=t?a.createElement("a",{href:u,target:"_blank",rel:"noreferrer"},p):p;return a.createElement(s.Z,{componentsProps:{tooltip:{style:{maxWidth:d}}},title:a.createElement("span",{className:i},(0,l.Z)(m)),placement:"top",arrow:!0},a.createElement("span",{className:o},g))}c.isMDXComponent=!0},99372:(e,t,n)=>{n.d(t,{gJ:()=>p,eH:()=>g,U6:()=>m,OS:()=>u});var a=n(67294),r=n(95999);const s="markedText_c6kK",l="since_c1Q3",o="until_jXK6",i="removed_A_Kf",c="versionNumber_BiUX",p=new Map;function d(e){let{children:t,className:n}=e;return a.createElement("span",{className:s+(n?" "+n:"")},t)}function m(e){let{children:t,v:n}=e;return a.createElement(d,{className:l},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`since-${n}`),")")))}function u(e){let{children:t,v:n}=e;return a.createElement(d,{className:o},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`until-${n}`),")")))}function g(e){let{children:t,v:n}=e;return a.createElement(d,{className:i},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`removed-${n}`),")")))}p.set("cpp98","C++98"),p.set("cpp03","C++03"),p.set("cpp11","C++11"),p.set("cpp14","C++14"),p.set("cpp17","C++17"),p.set("cpp20","C++20"),p.set("cpp23","C++23"),p.set("deprecated-",a.createElement(r.Z,null,"deprecated")),p.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),p.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),p.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),p.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),p.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),p.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),p.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),p.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),p.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),p.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),p.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),p.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),p.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),p.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),p.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),p.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),p.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),p.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),p.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),p.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),p.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),p.set("removed-",a.createElement(r.Z,null,"deleted")),p.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),p.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),p.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),p.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),p.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),p.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),p.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},8276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={},l=void 0,o={unversionedId:"std/algo/ranges/_codes/remove/since-cpp20-detailed",id:"std/algo/ranges/_codes/remove/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/remove/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/remove",slug:"/std/algo/ranges/_codes/remove/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/remove/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/remove/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n  std::permutable I,\n  std::sentinel_for<I> S,\n  class T,\n  class Proj = std::identity\n>\nrequires std::indirect_binary_predicate<ranges::equal_to, std::projected<I, Proj>, const T*>\nconstexpr ranges::subrange<I>\n    remove( I first, S last, const T& value, Proj proj = {} );\n\n// (2)\ntemplate<\n  ranges::forward_range R,\n  class T,\n  class Proj = std::identity\n>\nrequires std::permutable<ranges::iterator_t<R>> &&\n         std::indirect_binary_predicate<ranges::equal_to,\n             std::projected<ranges::iterator_t<R>, Proj>, const T*>\nconstexpr ranges::borrowed_subrange_t<R>\n    remove( R&& r, const T& value, Proj proj = {} );\n")))}d.isMDXComponent=!0},35422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={},l=void 0,o={unversionedId:"std/algo/ranges/_codes/remove/since-cpp20-simplified",id:"std/algo/ranges/_codes/remove/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/remove/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/remove",slug:"/std/algo/ranges/_codes/remove/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/remove/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/remove/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr ranges::subrange<I>\n    remove( I first, S last, const T& value, Proj proj = {} );\n\n// (2)\nconstexpr ranges::borrowed_subrange_t<R>\n    remove( R&& r, const T& value, Proj proj = {} );\n")),(0,r.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::permutable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"S")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"R")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::ranges::forward_range")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"T")," - ",(0,r.kt)("strong",{parentName:"li"},"(none)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Proj")," - ",(0,r.kt)("strong",{parentName:"li"},"(none)"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Proj")," template argument has a default type of ",(0,r.kt)("inlineCode",{parentName:"p"},"std::identity")," for all overloads."),(0,r.kt)("p",null,"Additionally, each overload has the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(1)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"indirect_binary_predicate<ranges::equal_to, projected<I, Proj>, const T*>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(2)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"permutable<ranges::iterator_t<R>> && indirect_binary_predicate<ranges::equal_to, projected<ranges::iterator_t<R>, Proj>, const T*>"))),(0,r.kt)("p",null,"(The ",(0,r.kt)("inlineCode",{parentName:"p"},"std::")," namespace was ommitted here for readability)"))}d.isMDXComponent=!0},68688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>v});var a=n(87462),r=n(67294),s=n(3905),l=n(55059),o=n(22307),i=n(99801),c=(n(18510),n(74866),n(8276)),p=n(35422);const d={title:"ranges::remove algorithm",sidebar_label:"ranges::remove(  )",description:"ranges::remove algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","remove","erase","search","look"],cppreference_origin_rel:"w/cpp/algorithm/ranges/remove"},m=void 0,u={unversionedId:"std/algo/ranges/remove",id:"std/algo/ranges/remove",title:"ranges::remove algorithm",description:"ranges::remove algorithm C++ documentation",source:"@site/content/docs/std/algo/ranges/remove.mdx",sourceDirName:"std/algo/ranges",slug:"/std/algo/ranges/remove",permalink:"/CppLangNet/docs/std/algo/ranges/remove",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/remove.mdx",tags:[{label:"ranges",permalink:"/CppLangNet/docs/tags/ranges"},{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"remove",permalink:"/CppLangNet/docs/tags/remove"},{label:"erase",permalink:"/CppLangNet/docs/tags/erase"},{label:"search",permalink:"/CppLangNet/docs/tags/search"},{label:"look",permalink:"/CppLangNet/docs/tags/look"}],version:"current",frontMatter:{title:"ranges::remove algorithm",sidebar_label:"ranges::remove(  )",description:"ranges::remove algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","remove","erase","search","look"],cppreference_origin_rel:"w/cpp/algorithm/ranges/remove"},sidebar:"defaultSidebar",previous:{title:"ranges::generate_n(  )",permalink:"/CppLangNet/docs/std/algo/ranges/generate_n"},next:{title:"ranges::remove_copy(  )",permalink:"/CppLangNet/docs/std/algo/ranges/remove_copy"}},g={},v=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Notes",id:"notes",level:3},{value:"Examples",id:"examples",level:3}],f=(h="Since",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)});var h;const k={toc:v};function b(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"stdrangesremove-algorithm"},"std::ranges::remove() algorithm"),(0,s.kt)(i.Z,{content:{"since-cpp20":{simplified:(0,s.kt)(p.default,{mdxType:"Signature_SinceCpp20_Simplified"}),detailed:(0,s.kt)(c.default,{mdxType:"Signature_SinceCpp20_Detailed"})}},mdxType:"SwitchView"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"(1)")," Removes all elements that are equal to ",(0,s.kt)("inlineCode",{parentName:"p"},"value"),", using ",(0,s.kt)("inlineCode",{parentName:"p"},"std::invoke(proj, *i) == value")," to compare.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,s.kt)("strong",{parentName:"p"},"(1)"),", but uses ",(0,s.kt)("inlineCode",{parentName:"p"},"r")," as the source range, as if using ",(0,s.kt)("inlineCode",{parentName:"p"},"ranges::begin(r)")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"first")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"ranges::end(r)")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"last"),"."))),(0,s.kt)("p",null,"Removing is done by shifting (by means of move assignment) the elements in the range in such a way that the elements that are not to be removed appear in the beginning of the range."),(0,s.kt)("admonition",{type:"important"},(0,s.kt)("p",{parentName:"admonition"},"Relative order of the elements that remain is preserved and the physical size of the container is unchanged.")),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Iterators pointing to an element between the new ",(0,s.kt)("em",{parentName:"p"},"logical")," end and the ",(0,s.kt)("em",{parentName:"p"},"physical")," end of the range are still ",(0,s.kt)("a",{href:"#"},"dereferenceable"),", ",(0,s.kt)(f,{v:"cpp11",mdxType:"Since"},"but the elements themselves have unspecified values (as per ",(0,s.kt)("a",{href:"/docs/named_req/MoveAssignable"},"MoveAssignable")," post-condition)."))),(0,s.kt)("p",null,"The function-like entities described on this page are ",(0,s.kt)("a",{parentName:"p",href:"/docs/std/algo/niebloids"},(0,s.kt)("strong",{parentName:"a"},"niebloids")),"."),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)(l.ZP,{mdxType:"SymbolTable"},(0,s.kt)(l.mN,{none:!0,noLink:!0,name:(0,s.kt)(r.Fragment,null," ",(0,s.kt)("code",null,"first")," ",(0,s.kt)("br",null)," ",(0,s.kt)("code",null,"last")," "),mdxType:"Symbol"},"The range of elements to process."),(0,s.kt)(l.mN,{none:!0,noLink:!0,name:(0,s.kt)("code",null,"r"),mdxType:"Symbol"},"The range of elements to process."),(0,s.kt)(l.mN,{none:!0,noLink:!0,name:(0,s.kt)("code",null,"value"),mdxType:"Symbol"},"The value of elements to remove."),(0,s.kt)(l.mN,{none:!0,noLink:!0,name:(0,s.kt)("code",null,"proj"),mdxType:"Symbol"},"Projection to apply to the elements.")),(0,s.kt)("h3",{id:"return-value"},"Return value"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"{\n  ret,\n  last\n}\n")),(0,s.kt)("p",null,"Where [",(0,s.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,s.kt)("inlineCode",{parentName:"p"},"ret"),") is the resulting subrange after removal, and the elements in subrange [",(0,s.kt)("inlineCode",{parentName:"p"},"ret"),"; ",(0,s.kt)("inlineCode",{parentName:"p"},"last"),") are all in valid but unspecified state."),(0,s.kt)("h3",{id:"complexity"},"Complexity"),(0,s.kt)("p",null,"Given ",(0,s.kt)("strong",{parentName:"p"},"N")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"ranges::distance(first, last)")),(0,s.kt)("p",null,"Exactly ",(0,s.kt)("inlineCode",{parentName:"p"},"N")," applications of the projection, and ",(0,s.kt)("inlineCode",{parentName:"p"},"N - 1")," move operations at worst."),(0,s.kt)("h3",{id:"exceptions"},"Exceptions"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"(none)")),(0,s.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"remove(1)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"struct remove_fn\n{\n    template<std::permutable I, std::sentinel_for<I> S, class T,\n             class Proj = std::identity>\n    requires std::indirect_binary_predicate<\n                 ranges::equal_to, std::projected<I, Proj>, const T*>\n    constexpr ranges::subrange<I>\n        operator()(I first, S last, const T& value, Proj proj = {}) const\n    {\n        first = ranges::find(std::move(first), last, value, proj);\n        if (first != last)\n        {\n            for (I i {std::next(first)}; i != last; ++i)\n            {\n                if (value != std::invoke(proj, *i))\n                {\n                    *first = ranges::iter_move(i);\n                    ++first;\n                }\n            }\n        }\n        return {first, last};\n    }\n\n    template<ranges::forward_range R, class T, class Proj = std::identity>\n    requires std::permutable<ranges::iterator_t<R>> &&\n             std::indirect_binary_predicate<\n                 ranges::equal_to, std::projected<\n                     ranges::iterator_t<R>, Proj>, const T*>\n    constexpr ranges::borrowed_subrange_t<R>\n        operator()(R&& r, const T& value, Proj proj = {}) const\n    {\n        return (*this)(ranges::begin(r), ranges::end(r), value, std::move(proj));\n    }\n};\n\ninline constexpr remove_fn remove {};\n"))),(0,s.kt)("h3",{id:"notes"},"Notes"),(0,s.kt)("p",null,"A call to remove is typically followed by a call to a container's erase member function, which erases the unspecified values and reduces the ",(0,s.kt)("em",{parentName:"p"},"physical size")," of the container to match its new ",(0,s.kt)("em",{parentName:"p"},"logical size"),".\nThese two invocations together constitute a so-called ",(0,s.kt)("a",{parentName:"p",href:"#"},"Erase\u2013remove idiom"),(0,s.kt)(f,{v:"cpp20",mdxType:"Since"},", which can be achieved by the free function std::erase that has overloads for all standard sequence containers, or std::erase_if that has overloads for all standard containers")),(0,s.kt)("p",null,"The similarly-named container member functions ",(0,s.kt)("a",{parentName:"p",href:"#"},"list::remove"),", ",(0,s.kt)("a",{parentName:"p",href:"#"},"list::remove_if"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/std/containers/lists/forward-list/remove"},"forward_list::remove"),", and ",(0,s.kt)("a",{parentName:"p",href:"/docs/std/containers/lists/forward-list/remove"},"forward_list::remove_if")," erase the removed elements."),(0,s.kt)("p",null,"These algorithms cannot be used with associative containers such as ",(0,s.kt)("a",{parentName:"p",href:"/docs/std/containers/sets/set"},"std::set")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/std/containers/maps/map"},"std::map")," because their iterator types do not dereference to ",(0,s.kt)("a",{parentName:"p",href:"/docs/named_req/MoveAssignable"},"MoveAssignable")," types (the keys in these containers are not modifiable)."),(0,s.kt)("p",null,"The standard library also defines an overload of ",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"std::remove"))," in ",(0,s.kt)("inlineCode",{parentName:"p"},"<cstdio>"),", which takes a ",(0,s.kt)("inlineCode",{parentName:"p"},"const char*")," and is used to delete files."),(0,s.kt)("p",null,"Because ",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"std::remove"))," takes ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," by reference, it can have unexpected behavior if it is a reference to an element of the range [",(0,s.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,s.kt)("inlineCode",{parentName:"p"},"last"),")."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)(o.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,s.kt)("div",null,(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <algorithm>\n#include <cctype>\n#include <iomanip>\n#include <iostream>\n#include <string>\n#include <string_view>\n\nint main()\n{\n    std::string v1 {"No - Diagnostic - Required"};\n    std::cout << std::quoted(v1) << " (v1, size: " << v1.size() << ")\\n";\n    const auto ret = std::ranges::remove(v1, \' \');\n    std::cout << std::quoted(v1) << " (v1 after `remove`, size: " << v1.size() << ")\\n";\n    std::cout << \' \' << std::string(std::distance(v1.begin(), ret.begin()), \'^\') << \'\\n\';\n    v1.erase(ret.begin(), ret.end());\n    std::cout << std::quoted(v1) << " (v1 after `erase`, size: " << v1.size() << ")\\n\\n";\n\n    // remove_if with custom unary predicate:\n    auto rm = [](char c) { return !std::isupper(c); };\n    std::string v2 {"Substitution Failure Is Not An Error"};\n    std::cout << std::quoted(v2) << " (v2, size: " << v2.size() << ")\\n";\n    const auto [first, last] = std::ranges::remove_if(v2, rm);\n    std::cout << std::quoted(v2) << " (v2 after `remove_if`, size: " << v2.size() << ")\\n";\n    std::cout << \' \' << std::string(std::distance(v2.begin(), first), \'^\') << \'\\n\';\n    v2.erase(first, last);\n    std::cout << std::quoted(v2) << " (v2 after `erase`, size: " << v2.size() << ")\\n\\n";\n\n    // creating a view into a container that is modified by `remove_if`:\n    for (std::string s : {"Small Object Optimization", "Non-Type Template Parameter"})\n        std::cout << std::quoted(s) << " => "\n                  << std::string_view {begin(s), std::ranges::remove_if(s, rm).begin()}\n                  << \'\\n\';\n}\n'))),(0,s.kt)("div",null,(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},'"No _ Diagnostic _ Required" (v1, size: 26)\n"No_Diagnostic_Requiredired" (v1 after `remove`, size: 26)\n ^^^^^^^^^^^^^^^^^^^^^^\n"No_Diagnostic_Required" (v1 after `erase`, size: 22)\n\n"Substitution Failure Is Not An Error" (v2, size: 36)\n"SFINAEtution Failure Is Not An Error" (v2 after `remove_if`, size: 36)\n ^^^^^^\n"SFINAE" (v2 after `erase`, size: 6)\n\n"Small Object Optimization" => SOO\n"Non-Type Template Parameter" => NTTP\n')))))}b.isMDXComponent=!0}}]);