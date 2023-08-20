"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[75968],{98088:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"Undefined behaviour")," is a property of a program that's incorrect, but likely compiles. It is incorrect in a way, that the error is only invoked in certain conditions at runtime.",(0,r.kt)("p",null,"Common cases include: ",(0,r.kt)("strong",{parentName:"p"},"out of bounds access"),", ",(0,r.kt)("strong",{parentName:"p"},"reading uninitialized objects"),", ",(0,r.kt)("strong",{parentName:"p"},"dangling pointers/references")," or ",(0,r.kt)("strong",{parentName:"p"},"signed overflow"),"."))}s.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),r=n(67294),l=n(86010),s=n(12466),i=n(76775),o=n(91980),c=n(67392),d=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,c]=g({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=o??p;return u({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var k=n(72389);const b="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==i&&(p(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:u,onClick:m},s,{className:(0,l.Z)("tabs__item",h,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function C(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function _(e){const t=(0,k.Z)();return r.createElement(C,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462),r=n(67294);const l="columns_Terr";function s(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}s.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(74866),l=n(85162),s=n(99372),i=n(72412);const o={};function c(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?a.createElement(l.Z,{value:n,label:s.gJ.get(n),default:c.default||0==t},c.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:o.smallTabs},a.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,i.Z)(c.simplified)),a.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,i.Z)(c.detailed)))):c.value):a.createElement(l.Z,{value:n,label:s.gJ.get(n),default:0==t},(0,i.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>d,ZP:()=>c});var a=n(67294),r=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var s=n(98839);const i={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},o=e=>e.none?i.None:e.pub||e.public?i.Public:e.prot||e.protected?i.Protected:e.priv||e.private?i.Private:i.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>o(e).Order<o(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function d(e){a.useContext(s.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const i=e.linkName||e.autoLink;!e.noLink&&i&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?a.createElement("span",{className:l[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:l.symbolProp},(e=>{const t=o(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:l.symbolName},t),a.createElement("td",{className:l.symbolDesc},(0,r.Z)(n)))}d.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=d},18510:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(44996),l=n(34386),s=n(72412);const i="TooltipContent_Lvru",o="TooltipTitle_ukF2";function c(e){let{url:t,title:n,maxWidth:c,children:d}=e;let p=c||"clamp(250px, 25vw, 800px)";"string"==typeof p&&p.endsWith("vw")&&(p=`clamp(250px, ${p}, 800px)`);const m="function"==typeof n?a.createElement(n):n,u=(t||"").startsWith("/")?(0,r.Z)(t):t,g=t?a.createElement("a",{href:u,target:"_blank",rel:"noreferrer"},d):d;return a.createElement(l.Z,{componentsProps:{tooltip:{style:{maxWidth:p}}},title:a.createElement("span",{className:o},(0,s.Z)(m)),placement:"top",arrow:!0},a.createElement("span",{className:i},g))}c.isMDXComponent=!0},99372:(e,t,n)=>{n.d(t,{gJ:()=>d,eH:()=>g,U6:()=>m,OS:()=>u});var a=n(67294),r=n(95999);const l="markedText_c6kK",s="since_c1Q3",i="until_jXK6",o="removed_A_Kf",c="versionNumber_BiUX",d=new Map;function p(e){let{children:t,className:n}=e;return a.createElement("span",{className:l+(n?" "+n:"")},t)}function m(e){let{children:t,v:n}=e;return a.createElement(p,{className:s},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",d.get(`since-${n}`),")")))}function u(e){let{children:t,v:n}=e;return a.createElement(p,{className:i},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",d.get(`until-${n}`),")")))}function g(e){let{children:t,v:n}=e;return a.createElement(p,{className:o},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",d.get(`removed-${n}`),")")))}d.set("cpp98","C++98"),d.set("cpp03","C++03"),d.set("cpp11","C++11"),d.set("cpp14","C++14"),d.set("cpp17","C++17"),d.set("cpp20","C++20"),d.set("cpp23","C++23"),d.set("deprecated-",a.createElement(r.Z,null,"deprecated")),d.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),d.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),d.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),d.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),d.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),d.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),d.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),d.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),d.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),d.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),d.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),d.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),d.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),d.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),d.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),d.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),d.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),d.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),d.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),d.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),d.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),d.set("removed-",a.createElement(r.Z,null,"deleted")),d.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),d.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),d.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),d.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),d.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),d.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),d.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},48825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},s=void 0,i={unversionedId:"std/algo/ranges/_codes/rotate/since-cpp20-detailed",id:"std/algo/ranges/_codes/rotate/since-cpp20-detailed",title:"since-cpp20-detailed",description:"",source:"@site/content/docs/std/algo/ranges/_codes/rotate/since-cpp20-detailed.mdx",sourceDirName:"std/algo/ranges/_codes/rotate",slug:"/std/algo/ranges/_codes/rotate/since-cpp20-detailed",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/rotate/since-cpp20-detailed",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/rotate/since-cpp20-detailed.mdx",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< std::permutable I, std::sentinel_for<I> S >\nconstexpr ranges::subrange<I>\n    rotate( I first, I middle, S last );\n\n// (2)\ntemplate< ranges::forward_range R >\nrequires std::permutable<ranges::iterator_t<R>>\nconstexpr ranges::borrowed_subrange_t<R>\n    rotate( R&& r, ranges::iterator_t<R> middle );\n")))}p.isMDXComponent=!0},37111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},s=void 0,i={unversionedId:"std/algo/ranges/_codes/rotate/since-cpp20-simplified",id:"std/algo/ranges/_codes/rotate/since-cpp20-simplified",title:"since-cpp20-simplified",description:"The type of arguments are generic and have the following constraints:",source:"@site/content/docs/std/algo/ranges/_codes/rotate/since-cpp20-simplified.mdx",sourceDirName:"std/algo/ranges/_codes/rotate",slug:"/std/algo/ranges/_codes/rotate/since-cpp20-simplified",permalink:"/CppLangNet/docs/std/algo/ranges/_codes/rotate/since-cpp20-simplified",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/_codes/rotate/since-cpp20-simplified.mdx",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\nconstexpr ranges::subrange<I>\n    rotate( I first, I middle, S last );\n\n// (2)\nconstexpr ranges::borrowed_subrange_t<R>\n    rotate( R&& r, ranges::iterator_t<R> middle );\n")),(0,r.kt)("p",null,"The type of arguments are generic and have the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::permutable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"S")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::sentinel_for<I>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"R")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::ranges::forward_range"))),(0,r.kt)("p",null,"Additionally, each overload has the following constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(2)")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"std::permutable<ranges::iterator_t<R>>"))))}p.isMDXComponent=!0},68310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>v,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var a=n(87462),r=n(67294),l=n(3905),s=n(55059),i=n(22307),o=n(99801),c=n(18510),d=(n(74866),n(98088)),p=n(48825),m=n(37111);const u={title:"ranges::rotate algorithm",sidebar_label:"ranges::rotate(  )",description:"ranges::rotate algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","rotate","order","backwards"],cppreference_origin_rel:"w/cpp/algorithm/ranges/rotate"},g=void 0,f={unversionedId:"std/algo/ranges/rotate",id:"std/algo/ranges/rotate",title:"ranges::rotate algorithm",description:"ranges::rotate algorithm C++ documentation",source:"@site/content/docs/std/algo/ranges/rotate.mdx",sourceDirName:"std/algo/ranges",slug:"/std/algo/ranges/rotate",permalink:"/CppLangNet/docs/std/algo/ranges/rotate",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ranges/rotate.mdx",tags:[{label:"ranges",permalink:"/CppLangNet/docs/tags/ranges"},{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"rotate",permalink:"/CppLangNet/docs/tags/rotate"},{label:"order",permalink:"/CppLangNet/docs/tags/order"},{label:"backwards",permalink:"/CppLangNet/docs/tags/backwards"}],version:"current",frontMatter:{title:"ranges::rotate algorithm",sidebar_label:"ranges::rotate(  )",description:"ranges::rotate algorithm C++ documentation",hide_title:!0,tags:["ranges","algorithm","rotate","order","backwards"],cppreference_origin_rel:"w/cpp/algorithm/ranges/rotate"},sidebar:"defaultSidebar",previous:{title:"ranges::swap_ranges(  )",permalink:"/CppLangNet/docs/std/algo/ranges/swap_ranges"},next:{title:"ranges::rotate_copy(  )",permalink:"/CppLangNet/docs/std/algo/ranges/rotate_copy"}},k={},b=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Notes",id:"notes",level:3},{value:"Examples",id:"examples",level:3}],h={toc:b};function v(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdrangesrotate-algorithm"},"std::ranges::rotate() algorithm"),(0,l.kt)(o.Z,{content:{"since-cpp20":{simplified:(0,l.kt)(m.default,{mdxType:"Signature_SinceCpp20_Simplified"}),detailed:(0,l.kt)(p.default,{mdxType:"Signature_SinceCpp20_Detailed"})}},mdxType:"SwitchView"}),(0,l.kt)("p",null,"Reverses the order of elements."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(1)")," Performs a left rotation on a range of elements. Specifically, ",(0,l.kt)("a",{parentName:"li",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"ranges::rotate"))," swaps the elements in the range [",(0,l.kt)("inlineCode",{parentName:"li"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"li"},"last"),") in such a way that the element ",(0,l.kt)("inlineCode",{parentName:"li"},"*middle")," becomes the first element of the new range and ",(0,l.kt)("inlineCode",{parentName:"li"},"*(middle - 1)")," becomes the last element.")),(0,l.kt)("admonition",{title:"undefined Behaviour",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)(c.Z,{title:(0,l.kt)(d.ZP,{mdxType:"Term_UndefinedBehaviour"}),mdxType:"Tooltip"},"behavior is undefined")," if [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),") is not a valid range or ",(0,l.kt)("inlineCode",{parentName:"p"},"middle")," is not in [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),").")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"}," (2)")," Same as ",(0,l.kt)("strong",{parentName:"li"},"(1)"),", but uses ",(0,l.kt)("inlineCode",{parentName:"li"},"r")," as the range, as if using ",(0,l.kt)("inlineCode",{parentName:"li"},"ranges::begin(r)")," as ",(0,l.kt)("inlineCode",{parentName:"li"},"first")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"ranges::end(r)")," as ",(0,l.kt)("inlineCode",{parentName:"li"},"last"),".")),(0,l.kt)("p",null,"The function-like entities described on this page are ",(0,l.kt)("a",{parentName:"p",href:"/docs/std/algo/niebloids"},(0,l.kt)("strong",{parentName:"a"},"niebloids")),"."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(s.ZP,{mdxType:"SymbolTable"},(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)(r.Fragment,null," ",(0,l.kt)("code",null,"first")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last")," "),mdxType:"Symbol"},"The range of elements to rotate."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"r"),mdxType:"Symbol"},"The range of elements to rotate."),(0,l.kt)(s.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"middle"),mdxType:"Symbol"},"The iterator to the element that should appear at the beginning of the rotated range.")),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"{\n  new_first,\n  last\n}\n")),(0,l.kt)("p",null,"Where ",(0,l.kt)("inlineCode",{parentName:"p"},"new_first")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::next(first, ranges::distance(middle, last))")," and designates a new location of the element pointed by ",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"."),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"Linear at worst: ",(0,l.kt)("inlineCode",{parentName:"p"},"ranges::distance(first, last)")," swaps."),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(none)")),(0,l.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"rotate(1) and rotate(2)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"struct rotate_fn\n{\n    template<std::permutable I, std::sentinel_for<I> S>\n    constexpr ranges::subrange<I>\n        operator()(I first, I middle, S last) const\n    {\n        if (first == middle)\n        {\n            auto last_it = ranges::next(first, last);\n            return {last_it, last_it};\n        }\n        if (middle == last)\n            return {std::move(first), std::move(middle)};\n\n        if constexpr (std::bidirectional_iterator<I>)\n        {\n            ranges::reverse(first, middle);\n            auto last_it = ranges::next(first, last);\n            ranges::reverse(middle, last_it);\n\n            if constexpr (std::random_access_iterator<I>)\n            {\n                ranges::reverse(first, last_it);\n                return {first + (last_it - middle), std::move(last_it)};\n            }\n            else\n            {\n                auto mid_last = last_it;\n                do\n                {\n                    ranges::iter_swap(first, --mid_last);\n                    ++first;\n                }\n                while (first != middle && mid_last != middle);\n                ranges::reverse(first, mid_last);\n\n                if (first == middle)\n                    return {std::move(mid_last), std::move(last_it)};\n                else\n                    return {std::move(first), std::move(last_it)};\n            }\n        }\n        else\n        { // I is merely a forward_iterator\n            auto next_it = middle;\n            do\n            { // rotate the first cycle\n                ranges::iter_swap(first, next_it);\n                ++first;\n                ++next_it;\n                if (first == middle)\n                    middle = next_it;\n            }\n            while (next_it != last);\n\n            auto new_first = first;\n            while (middle != last)\n            { // rotate subsequent cycles\n                next_it = middle;\n                do\n                {\n                    ranges::iter_swap(first, next_it);\n                    ++first;\n                    ++next_it;\n                    if (first == middle)\n                        middle = next_it;\n                }\n                while (next_it != last);\n            }\n\n            return {std::move(new_first), std::move(middle)};\n        }\n    }\n\n    template<ranges::forward_range R>\n    requires std::permutable<ranges::iterator_t<R>>\n    constexpr ranges::borrowed_subrange_t<R>\n        operator()(R&& r, ranges::iterator_t<R> middle) const\n    {\n        return (*this)(ranges::begin(r), std::move(middle), ranges::end(r));\n    }\n};\n\ninline constexpr rotate_fn rotate {};\n"))),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"ranges::rotate"))," has better efficiency on common implementations if I models ",(0,l.kt)("a",{parentName:"p",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"bidirectional_iterator"))," or (better) ",(0,l.kt)("a",{parentName:"p",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"random_access_iterator")),"."),(0,l.kt)("p",null,"Implementations (e.g. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp"},(0,l.kt)("strong",{parentName:"a"},"MSVC STL")),") may enable vectorization when the iterator type models ",(0,l.kt)("a",{parentName:"p",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"contiguous_iterator"))," and swapping its value type calls neither non-trivial special member function nor ADL-found swap."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"ranges::rotate"))," is a common building block in many algorithms. This example demonstrates insertion sort."),(0,l.kt)(i.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},"#include <algorithm>\n#include <iostream>\n#include <numeric>\n#include <string>\n#include <vector>\n\nint main()\n{\n    std::string s(16, ' ');\n\n    for (int k {}; k != 5; ++k)\n    {\n        std::iota(s.begin(), s.end(), 'A');\n        std::ranges::rotate(s, s.begin() + k);\n        std::cout << \"Rotate left (\" << k << \"): \" << s << '\\n';\n    }\n    std::cout << '\\n';\n\n    for (int k {}; k != 5; ++k)\n    {\n        std::iota(s.begin(), s.end(), 'A');\n        std::ranges::rotate(s, s.end() - k);\n        std::cout << \"Rotate right (\" << k << \"): \" << s << '\\n';\n    }\n\n    std::cout << \"\\nInsertion sort using `rotate`, step-by-step:\\n\";\n\n    s = {'2', '4', '2', '0', '5', '9', '7', '3', '7', '1'};\n\n    for (auto i = s.begin(); i != s.end(); ++i)\n    {\n        std::cout << \"i = \" << std::ranges::distance(s.begin(), i) << \": \";\n        std::ranges::rotate(std::ranges::upper_bound(s.begin(), i, *i), i, i + 1);\n        std::cout << s << '\\n';\n    }\n    std::cout << (std::ranges::is_sorted(s) ? \"Sorted!\" : \"Not sorted.\") << '\\n';\n}\n"))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},"Rotate left (0): ABCDEFGHIJKLMNOP\nRotate left (1): BCDEFGHIJKLMNOPA\nRotate left (2): CDEFGHIJKLMNOPAB\nRotate left (3): DEFGHIJKLMNOPABC\nRotate left (4): EFGHIJKLMNOPABCD\n\nRotate right (0): ABCDEFGHIJKLMNOP\nRotate right (1): PABCDEFGHIJKLMNO\nRotate right (2): OPABCDEFGHIJKLMN\nRotate right (3): NOPABCDEFGHIJKLM\nRotate right (4): MNOPABCDEFGHIJKL\n\nInsertion sort using `rotate`, step-by-step:\ni = 0: 2420597371\ni = 1: 2420597371\ni = 2: 2240597371\ni = 3: 0224597371\ni = 4: 0224597371\ni = 5: 0224597371\ni = 6: 0224579371\ni = 7: 0223457971\ni = 8: 0223457791\ni = 9: 0122345779\nSorted!\n")))))}v.isMDXComponent=!0}}]);