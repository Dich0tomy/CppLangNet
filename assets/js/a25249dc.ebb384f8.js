"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[26278],{98088:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"Undefined behaviour")," is a property of a program that's incorrect, but likely compiles. It is incorrect in a way, that the error is only invoked in certain conditions at runtime.",(0,r.kt)("p",null,"Common cases include: ",(0,r.kt)("strong",{parentName:"p"},"out of bounds access"),", ",(0,r.kt)("strong",{parentName:"p"},"reading uninitialized objects"),", ",(0,r.kt)("strong",{parentName:"p"},"dangling pointers/references")," or ",(0,r.kt)("strong",{parentName:"p"},"signed overflow"),"."))}o.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),i=n(76775),s=n(91980),p=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=u(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,p]=g({queryString:n,groupId:a}),[d,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),_=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{_&&i(_)}),[_]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),y(e)}),[p,y,l]),tabValues:l}}var _=n(72389);const f="tabList__CuJ",k="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==i&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:u},o,{className:(0,l.Z)("tabs__item",k,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=y(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function v(e){const t=(0,_.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(87462),r=n(67294);const l="columns_Terr";function o(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}o.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(74866),l=n(85162),o=n(99372),i=n(72412);const s={};function p(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,p]=e;return p.value||p.simplified||p.detailed?a.createElement(l.Z,{value:n,label:o.gJ.get(n),default:p.default||0==t},p.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:s.smallTabs},a.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,i.Z)(p.simplified)),a.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,i.Z)(p.detailed)))):p.value):a.createElement(l.Z,{value:n,label:o.gJ.get(n),default:0==t},(0,i.Z)(p))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>c,ZP:()=>p});var a=n(67294),r=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var o=n(98839);const i={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},s=e=>e.none?i.None:e.pub||e.public?i.Public:e.prot||e.protected?i.Protected:e.priv||e.private?i.Private:i.Public;function p(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>s(e).Order<s(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function c(e){a.useContext(o.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const i=e.linkName||e.autoLink;!e.noLink&&i&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const p=(e,t,n)=>!0===e?a.createElement("span",{className:l[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:l.symbolProp},(e=>{const t=s(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),p(e.static,"modStatic","static"),p(e.constexpr,"modConstexpr","constexpr"),p(e.const,"modConst","const"),p(e.volatile,"modVolatile","volatile"),p(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:l.symbolName},t),a.createElement("td",{className:l.symbolDesc},(0,r.Z)(n)))}c.isMDXComponent=!0,p.isMDXComponent=!0,p.Symbol=c},18510:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(44996),l=n(34386),o=n(72412);const i="TooltipContent_Lvru",s="TooltipTitle_ukF2";function p(e){let{url:t,title:n,maxWidth:p,children:c}=e;let d=p||"clamp(250px, 25vw, 800px)";"string"==typeof d&&d.endsWith("vw")&&(d=`clamp(250px, ${d}, 800px)`);const u="function"==typeof n?a.createElement(n):n,m=(t||"").startsWith("/")?(0,r.Z)(t):t,g=t?a.createElement("a",{href:m,target:"_blank",rel:"noreferrer"},c):c;return a.createElement(l.Z,{componentsProps:{tooltip:{style:{maxWidth:d}}},title:a.createElement("span",{className:s},(0,o.Z)(u)),placement:"top",arrow:!0},a.createElement("span",{className:i},g))}p.isMDXComponent=!0},99372:(e,t,n)=>{n.d(t,{gJ:()=>c,eH:()=>g,U6:()=>u,OS:()=>m});var a=n(67294),r=n(95999);const l="markedText_c6kK",o="since_c1Q3",i="until_jXK6",s="removed_A_Kf",p="versionNumber_BiUX",c=new Map;function d(e){let{children:t,className:n}=e;return a.createElement("span",{className:l+(n?" "+n:"")},t)}function u(e){let{children:t,v:n}=e;return a.createElement(d,{className:o},t,"\xa0",a.createElement("span",{className:p},a.createElement("small",null,"(",c.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return a.createElement(d,{className:i},t,"\xa0",a.createElement("span",{className:p},a.createElement("small",null,"(",c.get(`until-${n}`),")")))}function g(e){let{children:t,v:n}=e;return a.createElement(d,{className:s},t,"\xa0",a.createElement("span",{className:p},a.createElement("small",null,"(",c.get(`removed-${n}`),")")))}c.set("cpp98","C++98"),c.set("cpp03","C++03"),c.set("cpp11","C++11"),c.set("cpp14","C++14"),c.set("cpp17","C++17"),c.set("cpp20","C++20"),c.set("cpp23","C++23"),c.set("deprecated-",a.createElement(r.Z,null,"deprecated")),c.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),c.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),c.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),c.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),c.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),c.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),c.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),c.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),c.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),c.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),c.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),c.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),c.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),c.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),c.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),c.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),c.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),c.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),c.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),c.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),c.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),c.set("removed-",a.createElement(r.Z,null,"deleted")),c.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),c.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),c.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),c.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),c.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),c.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),c.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},65288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"std/algo/ranges/_codes/partition_copy/since-cpp20-detailed",id:"std/algo/ranges/_codes/partition_copy/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/partition_copy/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/partition_copy",slug:"/std/algo/ranges/_codes/partition_copy/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/partition_copy/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/partition_copy/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n  std::input_iterator I,\n  std::sentinel_for<I> S,\n  std::weakly_incrementable O1,\n  std::weakly_incrementable O2,\n  class Proj = std::identity,\n  std::indirect_unary_predicate<std::projected<I, Proj>> Pred\n>\n  requires std::indirectly_copyable<I, O1>\n           && std::indirectly_copyable<I, O2>\nconstexpr partition_copy_result<I, O1, O2>\n    partition_copy( I first, S last, O1 out_true, O2 out_false,\n                    Pred pred, Proj proj = {} );\n\n// (2)\ntemplate<\n  ranges::input_range R,\n  std::weakly_incrementable O1,\n  std::weakly_incrementable O2,\n  class Proj = std::identity,\n  std::indirect_unary_predicate<std::projected<iterator_t<R>, Proj>> Pred\n>\n  requires std::indirectly_copyable<ranges::iterator_t<R>, O1>\n           && std::indirectly_copyable<ranges::iterator_t<R>, O2>\nconstexpr partition_copy_result<ranges::borrowed_iterator_t<R>, O1, O2>\n    partition_copy( R&& r, O1 out_true, O2 out_false,\n                    Pred pred, Proj proj = {} );\n")))}d.isMDXComponent=!0},49706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"std/algo/ranges/_codes/partition_copy/since-cpp20-simplified",id:"std/algo/ranges/_codes/partition_copy/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/partition_copy/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/partition_copy",slug:"/std/algo/ranges/_codes/partition_copy/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/partition_copy/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/partition_copy/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr partition_copy_result<I, O1, O2>\n    partition_copy( I first, S last, O1 out_true, O2 out_false,\n                    Pred pred, Proj proj = {} );\n\n// (2)\nconstexpr partition_copy_result<ranges::borrowed_iterator_t<R>, O1, O2>\n    partition_copy( R&& r, O1 out_true, O2 out_false,\n                    Pred pred, Proj proj = {} );\n")),(0,r.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::input_iterator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"S")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"O1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"O2")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::weakly_incrementable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"R")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::ranges::forward_range")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Pred"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(1)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::indirect_unary_predicate<std::projected<I, Proj>>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(2)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::indirect_unary_predicate<std::projected<ranges::iterator_t<R>, Proj>>")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Proj")," - ",(0,r.kt)("strong",{parentName:"li"},"(none)"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Proj"),"  template argument has the following default type ",(0,r.kt)("inlineCode",{parentName:"p"},"std::identity")," for all overloads."),(0,r.kt)("p",null,"Additionally, each overload has the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(1)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"indirectly_copyable<I, O1> && indirectly_copyable<I, O2>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(2)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"indirectly_copyable<ranges::iterator_t<R>, O1> && indirectly_copyable<ranges::iterator_t<R>, O2>"))),(0,r.kt)("p",null,"(The ",(0,r.kt)("inlineCode",{parentName:"p"},"std::")," namespace was omitted here for readability)"))}d.isMDXComponent=!0},66154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>_,contentTitle:()=>g,default:()=>b,frontMatter:()=>m,metadata:()=>y,toc:()=>f});var a=n(87462),r=n(67294),l=n(3905),o=n(55059),i=n(22307),s=n(99801),p=n(18510),c=n(98088),d=n(65288),u=n(49706);const m={title:"ranges::partition_copy algorithm",sidebar_label:"ranges::partition_copy(  )",description:"ranges::partition_copy algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","partition","partition_copy"],cppreference_origin_rel:"w/cpp/algorithm/ranges/partition_copy"},g=void 0,y={unversionedId:"std/algo/ranges/partition_copy",id:"std/algo/ranges/partition_copy",title:"ranges::partition_copy algorithm",description:"ranges::partition_copy algorithm C++ documentation",source:"@site/content/docs/std/algo/ranges/partition_copy.mdx",sourceDirName:"std/algo/ranges",slug:"/std/algo/ranges/partition_copy",permalink:"/CppLangNet/docs/std/algo/ranges/partition_copy",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/partition_copy.mdx",tags:[{label:"ranges",permalink:"/CppLangNet/docs/tags/ranges"},{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"partition",permalink:"/CppLangNet/docs/tags/partition"},{label:"partition_copy",permalink:"/CppLangNet/docs/tags/partition-copy"}],version:"current",frontMatter:{title:"ranges::partition_copy algorithm",sidebar_label:"ranges::partition_copy(  )",description:"ranges::partition_copy algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","partition","partition_copy"],cppreference_origin_rel:"w/cpp/algorithm/ranges/partition_copy"},sidebar:"defaultSidebar",previous:{title:"ranges::partition(  )",permalink:"/CppLangNet/docs/std/algo/ranges/partition"},next:{title:"ranges::stable_partition(  )",permalink:"/CppLangNet/docs/std/algo/ranges/stable_partition"}},_={},f=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Examples",id:"examples",level:3}],k={toc:f};function b(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdrangespartition_copy-algorithm"},"std::ranges::partition_copy() algorithm"),(0,l.kt)(s.Z,{content:{"since-cpp20":{simplified:(0,l.kt)(u.default,{mdxType:"Signature_SinceCpp20_Simplified"}),detailed:(0,l.kt)(d.default,{mdxType:"Signature_SinceCpp20_Detailed"})}},mdxType:"SwitchView"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," Copies the elements from the input range [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),") to two different output ranges depending on the value returned by the predicate ",(0,l.kt)("inlineCode",{parentName:"p"},"pred"),"."),(0,l.kt)("p",{parentName:"li"},"The elements that satisfy the predicate ",(0,l.kt)("inlineCode",{parentName:"p"},"pred")," after projection by ",(0,l.kt)("inlineCode",{parentName:"p"},"proj")," are copied to the range beginning at ",(0,l.kt)("inlineCode",{parentName:"p"},"out_true"),".",(0,l.kt)("br",{parentName:"p"}),"\n","The rest of the elements are copied to the range beginning at ",(0,l.kt)("inlineCode",{parentName:"p"},"out_false"),"."),(0,l.kt)("admonition",{parentName:"li",title:"Undefined Behaviour",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)(p.Z,{title:(0,l.kt)(c.ZP,{mdxType:"Term_UndefinedBehaviour"}),mdxType:"Tooltip"},"behavior is undefined")," if the input range overlaps either of the output ranges."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,l.kt)("strong",{parentName:"p"},"(1)"),", but uses ",(0,l.kt)("inlineCode",{parentName:"p"},"r")," as the range, as if using ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::begin(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"first")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::end(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),"."))),(0,l.kt)("p",null,"The function-like entities described on this page are ",(0,l.kt)("a",{parentName:"p",href:"/docs/std/algo/niebloids"},(0,l.kt)("strong",{parentName:"a"},"niebloids")),"."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(o.ZP,{mdxType:"SymbolTable"},(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)(r.Fragment,null," ",(0,l.kt)("code",null,"first")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last")," "),mdxType:"Symbol"},"The input range of elements to copy from."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"r"),mdxType:"Symbol"},"The input range of elements to copy from."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"out_true"),mdxType:"Symbol"},"The beginning of the output range for the elements that satisfy ",(0,l.kt)("code",null,"pred"),"."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"out_false"),mdxType:"Symbol"},"The beginning of the output range for the elements that ",(0,l.kt)("b",null,"don't")," satisfy ",(0,l.kt)("code",null,"pred"),"."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"pred"),mdxType:"Symbol"},"The predicate to apply to the projected elements."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"proj"),mdxType:"Symbol"},"The projection to apply to the elements.")),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"{\n  last,\n  o1,\n  o2\n}\n")),(0,l.kt)("p",null,"Where ",(0,l.kt)("inlineCode",{parentName:"p"},"o1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"o2")," are the ends of the output ranges respectively, after the copying is complete."),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"Exactly ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::distance(first, last)")," applications of the corresponding predicate ",(0,l.kt)("inlineCode",{parentName:"p"},"pred")," and any projection ",(0,l.kt)("inlineCode",{parentName:"p"},"proj"),"."),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(none)")),(0,l.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"partition_copy(1) and partition_copy(2)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"struct partition_copy_fn\n{\n    template<std::input_iterator I, std::sentinel_for<I> S,\n             std::weakly_incrementable O1, std::weakly_incrementable O2,\n             class Proj = std::identity, std::indirect_unary_predicate<\n             std::projected<I, Proj>> Pred>\n    requires std::indirectly_copyable<I, O1> && std::indirectly_copyable<I, O2>\n    constexpr ranges::partition_copy_result<I, O1, O2>\n        operator()(I first, S last, O1 out_true, O2 out_false, Pred pred, Proj proj = {}) const\n    {\n        for (; first != last; ++first)\n            if (!!std::invoke(pred, std::invoke(proj, *first)))\n                *out_true = *first, ++out_true;\n            else\n                *out_false = *first, ++out_false;\n        return {std::move(first), std::move(out_true), std::move(out_false)};\n    }\n\n    template<ranges::input_range R,\n             std::weakly_incrementable O1, std::weakly_incrementable O2,\n             class Proj = std::identity,\n             std::indirect_unary_predicate<std::projected<iterator_t<R>, Proj>> Pred>\n    requires std::indirectly_copyable<ranges::iterator_t<R>, O1> &&\n             std::indirectly_copyable<ranges::iterator_t<R>, O2>\n    constexpr ranges::partition_copy_result<ranges::borrowed_iterator_t<R>, O1, O2>\n        operator()(R&& r, O1 out_true, O2 out_false, Pred pred, Proj proj = {}) const\n    {\n        return (*this)(ranges::begin(r), ranges::end(r), std::move(out_true),\n                       std::move(out_false), std::move(pred), std::move(proj));\n    }\n};\n\ninline constexpr partition_copy_fn partition_copy {};\n"))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},"#include <algorithm>\n#include <cctype>\n#include <iostream>\n#include <iterator>\n#include <vector>\n\nint main()\n{\n    const auto in = {'N', '3', 'U', 'M', '1', 'B', '4', 'E', '1', '5', 'R', '9'};\n\n    std::vector<int> o1(size(in)), o2(size(in));\n\n    auto pred = [](char c) { return std::isalpha(c); };\n\n    auto ret = std::ranges::partition_copy(in, o1.begin(), o2.begin(), pred);\n\n    std::ostream_iterator<char> cout {std::cout, \" \"};\n    std::cout << \"in = \";\n    std::ranges::copy(in, cout);\n    std::cout << \"\\no1 = \";\n    std::copy(o1.begin(), ret.out1, cout);\n    std::cout << \"\\no2 = \";\n    std::copy(o2.begin(), ret.out2, cout);\n    std::cout << '\\n';\n}\n"))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Possible Output"',title:'"Possible','Output"':!0},"in = N 3 U M 1 B 4 E 1 5 R 9\no1 = N U M B E R\no2 = 3 1 4 1 5 9\n")))))}b.isMDXComponent=!0}}]);