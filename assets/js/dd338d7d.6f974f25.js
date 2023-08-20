"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[48731],{98088:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"Undefined behaviour")," is a property of a program that's incorrect, but likely compiles. It is incorrect in a way, that the error is only invoked in certain conditions at runtime.",(0,r.kt)("p",null,"Common cases include: ",(0,r.kt)("strong",{parentName:"p"},"out of bounds access"),", ",(0,r.kt)("strong",{parentName:"p"},"reading uninitialized objects"),", ",(0,r.kt)("strong",{parentName:"p"},"dangling pointers/references")," or ",(0,r.kt)("strong",{parentName:"p"},"signed overflow"),"."))}s.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),l=n(86010),s=n(12466),i=n(76775),o=n(91980),c=n(67392),p=n(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,c]=g({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),_=(()=>{const e=o??m;return u({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{_&&i(_)}),[_]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var _=n(72389);const k="tabList__CuJ",b="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(m(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:u,onClick:d},s,{className:(0,l.Z)("tabs__item",b,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function y(e){const t=(0,_.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462),r=n(67294);const l="columns_Terr";function s(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}s.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(74866),l=n(85162),s=n(99372),i=n(72412);const o={};function c(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?a.createElement(l.Z,{value:n,label:s.gJ.get(n),default:c.default||0==t},c.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:o.smallTabs},a.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,i.Z)(c.simplified)),a.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,i.Z)(c.detailed)))):c.value):a.createElement(l.Z,{value:n,label:s.gJ.get(n),default:0==t},(0,i.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>p,ZP:()=>c});var a=n(67294),r=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var s=n(98839);const i={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},o=e=>e.none?i.None:e.pub||e.public?i.Public:e.prot||e.protected?i.Protected:e.priv||e.private?i.Private:i.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>o(e).Order<o(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function p(e){a.useContext(s.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const i=e.linkName||e.autoLink;!e.noLink&&i&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?a.createElement("span",{className:l[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:l.symbolProp},(e=>{const t=o(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:l.symbolName},t),a.createElement("td",{className:l.symbolDesc},(0,r.Z)(n)))}p.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=p},18510:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(44996),l=n(34386),s=n(72412);const i="TooltipContent_Lvru",o="TooltipTitle_ukF2";function c(e){let{url:t,title:n,maxWidth:c,children:p}=e;let m=c||"clamp(250px, 25vw, 800px)";"string"==typeof m&&m.endsWith("vw")&&(m=`clamp(250px, ${m}, 800px)`);const d="function"==typeof n?a.createElement(n):n,u=(t||"").startsWith("/")?(0,r.Z)(t):t,g=t?a.createElement("a",{href:u,target:"_blank",rel:"noreferrer"},p):p;return a.createElement(l.Z,{componentsProps:{tooltip:{style:{maxWidth:m}}},title:a.createElement("span",{className:o},(0,s.Z)(d)),placement:"top",arrow:!0},a.createElement("span",{className:i},g))}c.isMDXComponent=!0},99372:(e,t,n)=>{n.d(t,{gJ:()=>p,eH:()=>g,U6:()=>d,OS:()=>u});var a=n(67294),r=n(95999);const l="markedText_c6kK",s="since_c1Q3",i="until_jXK6",o="removed_A_Kf",c="versionNumber_BiUX",p=new Map;function m(e){let{children:t,className:n}=e;return a.createElement("span",{className:l+(n?" "+n:"")},t)}function d(e){let{children:t,v:n}=e;return a.createElement(m,{className:s},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`since-${n}`),")")))}function u(e){let{children:t,v:n}=e;return a.createElement(m,{className:i},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`until-${n}`),")")))}function g(e){let{children:t,v:n}=e;return a.createElement(m,{className:o},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`removed-${n}`),")")))}p.set("cpp98","C++98"),p.set("cpp03","C++03"),p.set("cpp11","C++11"),p.set("cpp14","C++14"),p.set("cpp17","C++17"),p.set("cpp20","C++20"),p.set("cpp23","C++23"),p.set("deprecated-",a.createElement(r.Z,null,"deprecated")),p.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),p.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),p.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),p.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),p.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),p.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),p.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),p.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),p.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),p.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),p.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),p.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),p.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),p.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),p.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),p.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),p.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),p.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),p.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),p.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),p.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),p.set("removed-",a.createElement(r.Z,null,"deleted")),p.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),p.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),p.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),p.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),p.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),p.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),p.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},84098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},s=void 0,i={unversionedId:"std/algo/ranges/_codes/sample/since-cpp20-detailed",id:"std/algo/ranges/_codes/sample/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/sample/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/sample",slug:"/std/algo/ranges/_codes/sample/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/sample/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/sample/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},o={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate<\n  std::input_iterator I,\n  std::sentinel_for<I> S,\n  std::weakly_incrementable O,\n  class Gen\n>\n  requires (std::forward_iterator<I> || std::random_access_iterator<O>) &&\n            std::indirectly_copyable<I, O> &&\n            std::uniform_random_bit_generator<std::remove_reference_t<Gen>>\nO sample( I first, S last, O out, std::iter_difference_t<I> n, Gen&& gen );\n\n// (2)\ntemplate<\n  ranges::input_range R,\n  std::weakly_incrementable O,\n  class Gen\n>\n  requires (ranges::forward_range<R> || std::random_access_iterator<O>) &&\n            std::indirectly_copyable<ranges::iterator_t<R>, O> &&\n            std::uniform_random_bit_generator<std::remove_reference_t<Gen>>\nO sample( R&& r, O out, ranges::range_difference_t<R> n, Gen&& gen );\n")))}m.isMDXComponent=!0},70206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},s=void 0,i={unversionedId:"std/algo/ranges/_codes/sample/since-cpp20-simplified",id:"std/algo/ranges/_codes/sample/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/sample/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/sample",slug:"/std/algo/ranges/_codes/sample/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/sample/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/sample/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},o={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nO sample( I first, S last, O out, std::iter_difference_t<I> n, Gen&& gen );\n\n// (2)\nO sample( R&& r, O out, ranges::range_difference_t<R> n, Gen&& gen );\n")),(0,r.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::input_iterator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"S")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"O")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::weakly_incrementable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"R")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::ranges::input_range")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Gen")," - ",(0,r.kt)("strong",{parentName:"li"},"(none)"))),(0,r.kt)("p",null,"Additionally, each overload has the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(1)"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"(forward_iterator<I> || random_access_iterator<O>)\n&& indirectly_copyable<I, O>\n&& uniform_random_bit_generator<remove_reference_t<Gen>>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(2)"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"(ranges::forward_range<R> || random_access_iterator<O>)\n&& indirectly_copyable<ranges::iterator_t<R>, O>\n&& uniform_random_bit_generator<remove_reference_t<Gen>>\n")))),(0,r.kt)("p",null,"(The ",(0,r.kt)("inlineCode",{parentName:"p"},"std::")," namespace was omitted for readability)"))}m.isMDXComponent=!0},39573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>_,contentTitle:()=>g,default:()=>h,frontMatter:()=>u,metadata:()=>f,toc:()=>k});var a=n(87462),r=n(67294),l=n(3905),s=n(55059),i=n(22307),o=n(99801),c=n(18510),p=n(98088),m=n(84098),d=n(70206);const u={title:"ranges::sample algorithm",sidebar_label:"ranges::sample(  )",description:"ranges::sample algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","sample","random"],cppreference_origin_rel:"w/cpp/algorithm/ranges/sample"},g=void 0,f={unversionedId:"std/algo/ranges/sample",id:"std/algo/ranges/sample",title:"ranges::sample algorithm",description:"ranges::sample algorithm C++ documentation",source:"@site/content/docs/std/algo/ranges/sample.mdx",sourceDirName:"std/algo/ranges",slug:"/std/algo/ranges/sample",permalink:"/CppLangNet/docs/std/algo/ranges/sample",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/sample.mdx",tags:[{label:"ranges",permalink:"/CppLangNet/docs/tags/ranges"},{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"sample",permalink:"/CppLangNet/docs/tags/sample"},{label:"random",permalink:"/CppLangNet/docs/tags/random"}],version:"current",frontMatter:{title:"ranges::sample algorithm",sidebar_label:"ranges::sample(  )",description:"ranges::sample algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","sample","random"],cppreference_origin_rel:"w/cpp/algorithm/ranges/sample"},sidebar:"defaultSidebar",previous:{title:"ranges::shuffle(  )",permalink:"/CppLangNet/docs/std/algo/ranges/shuffle"},next:{title:"random_shuffle(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/random_shuffle"}},_={},k=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Examples",id:"examples",level:3}],b={toc:k};function h(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdrangessample-algorithm"},"std::ranges::sample() algorithm"),(0,l.kt)(o.Z,{content:{"since-cpp20":{simplified:(0,l.kt)(d.default,{mdxType:"Signature_SinceCpp20_Simplified"}),detailed:(0,l.kt)(m.default,{mdxType:"Signature_SinceCpp20_Detailed"})}},mdxType:"SwitchView"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," Selects ",(0,l.kt)("inlineCode",{parentName:"p"},"M = min(n, last - first)")," elements from the sequence [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),") (without replacement) such that each possible sample has equal probability of appearance, and writes those selected elements into the range beginning at ",(0,l.kt)("inlineCode",{parentName:"p"},"out"),"."),(0,l.kt)("p",{parentName:"li"},"The algorithm is stable (preserves the relative order of the selected elements) only if ",(0,l.kt)("inlineCode",{parentName:"p"},"I")," models ",(0,l.kt)("a",{parentName:"p",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"std::forward_iterator")),"."),(0,l.kt)("admonition",{parentName:"li",title:"Undefined Behaviour",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)(c.Z,{title:(0,l.kt)(p.ZP,{mdxType:"Term_UndefinedBehaviour"}),mdxType:"Tooltip"},"behavior is undefined")," if out is in [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),")."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,l.kt)("strong",{parentName:"p"},"(1)"),", but uses ",(0,l.kt)("inlineCode",{parentName:"p"},"r")," as the range, as if using ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::begin(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"first")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::end(r)")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),"."))),(0,l.kt)("p",null,"The function-like entities described on this page are ",(0,l.kt)("a",{parentName:"p",href:"/docs/std/algo/niebloids"},(0,l.kt)("strong",{parentName:"a"},"niebloids")),"."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(s.ZP,{mdxType:"SymbolTable"},(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)(r.Fragment,null," ",(0,l.kt)("code",null,"first")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last")," "),mdxType:"Symbol"},"The range of elements from which to make the sampling (the population)."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"r"),mdxType:"Symbol"},"The range of elements from which to make the sampling (the population)."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"out"),mdxType:"Symbol"},"The output iterator to which the samples are written."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"n"),mdxType:"Symbol"},"The number of samples to take."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"gen"),mdxType:"Symbol"},"The random number generator used as the source of randomness.")),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("p",null,"With ",(0,l.kt)("inlineCode",{parentName:"p"},"M")," defined as ",(0,l.kt)("inlineCode",{parentName:"p"},"min(n, last - first)"),"."),(0,l.kt)("p",null,"An iterator equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"out + M"),", that is the end of the resulting sample range."),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"Linear in ",(0,l.kt)("inlineCode",{parentName:"p"},"(last - first)"),"."),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(none)")),(0,l.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"sample(1) and sample(2)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'\nstruct sample_fn\n{\n    template<std::input_iterator I, std::sentinel_for<I> S,\n             std::weakly_incrementable O, class Gen>\n    requires (std::forward_iterator<I> or\n              std::random_access_iterator<O>) &&\n              std::indirectly_copyable<I, O> &&\n              std::uniform_random_bit_generator<std::remove_reference_t<Gen>>\n    O operator()(I first, S last, O out, std::iter_difference_t<I> n, Gen&& gen) const\n    {\n        using diff_t = std::iter_difference_t<I>;\n        using distrib_t = std::uniform_int_distribution<diff_t>;\n        using param_t = typename distrib_t::param_type;\n        distrib_t D {};\n\n        if constexpr (std::forward_iterator<I>)\n        {\n            // this branch preserves "stability" of the sample elements\n            auto rest {ranges::distance(first, last)};\n            for (n = ranges::min(n, rest); n != 0; ++first)\n            {\n                if (D(gen, param_t(0, --rest)) < n)\n                {\n                    *out++ = *first;\n                    --n;\n                }\n            }\n            return out;\n        }\n        else\n        {\n            // O is a random_access_iterator\n            diff_t sample_size {};\n            // copy [first, first + M) elements to "random access" output\n            for (; first != last && sample_size != n; ++first)\n                out[sample_size++] = *first;\n            // overwrite some of the copied elements with randomly selected ones\n            for (auto pop_size {sample_size}; first != last; ++first, ++pop_size)\n            {\n                const auto i {D(gen, param_t{0, pop_size})};\n                if (i < n)\n                    out[i] = *first;\n            }\n            return out + sample_size;\n        }\n    }\n\n    template<ranges::input_range R, std::weakly_incrementable O, class Gen>\n    requires (ranges::forward_range<R> or std::random_access_iterator<O>) &&\n              std::indirectly_copyable<ranges::iterator_t<R>, O> &&\n              std::uniform_random_bit_generator<std::remove_reference_t<Gen>>\n    O operator()(R&& r, O out, ranges::range_difference_t<R> n, Gen&& gen) const\n    {\n        return (*this)(ranges::begin(r), ranges::end(r), std::move(out), n,\n                       std::forward<Gen>(gen));\n    }\n};\n\ninline constexpr sample_fn sample {};\n'))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <algorithm>\n#include <iomanip>\n#include <iostream>\n#include <iterator>\n#include <random>\n#include <vector>\n\nvoid print(auto const& rem, auto const& v)\n{\n    std::cout << rem << " = [" << std::size(v) << "] { ";\n    for (auto const& e : v)\n        std::cout << e << \' \';\n    std::cout << "}\\n";\n}\n\nint main()\n{\n    const auto in = {1, 2, 3, 4, 5, 6};\n    print("in", in);\n\n    std::vector<int> out;\n    const int max = in.size() + 2;\n    auto gen = std::mt19937 {std::random_device {}()};\n\n    for (int n {}; n != max; ++n)\n    {\n        out.clear();\n        std::ranges::sample(in, std::back_inserter(out), n, gen);\n        std::cout << "n = " << n;\n        print(", out", out);\n    }\n}\n'))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Possible Output"',title:'"Possible','Output"':!0},"in = [6] { 1 2 3 4 5 6 }\nn = 0, out = [0] { }\nn = 1, out = [1] { 5 }\nn = 2, out = [2] { 4 5 }\nn = 3, out = [3] { 2 3 5 }\nn = 4, out = [4] { 2 4 5 6 }\nn = 5, out = [5] { 1 2 3 5 6 }\nn = 6, out = [6] { 1 2 3 4 5 6 }\nn = 7, out = [6] { 1 2 3 4 5 6 }\n")))))}h.isMDXComponent=!0}}]);