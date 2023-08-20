"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[52849],{14064:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aspects and semantics that are ",(0,r.kt)("strong",{parentName:"p"},"implementation-defined")," are not guaranteed by\nthe standard in any way, rather they are left out to the implementation (compiler vendor standard library, most of the times).\nFor example, most mathematical functions incur some ",(0,r.kt)("strong",{parentName:"p"},"implementation-defined")," behaviour."))}o.isMDXComponent=!0},98088:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"Undefined behaviour")," is a property of a program that's incorrect, but likely compiles. It is incorrect in a way, that the error is only invoked in certain conditions at runtime.",(0,r.kt)("p",null,"Common cases include: ",(0,r.kt)("strong",{parentName:"p"},"out of bounds access"),", ",(0,r.kt)("strong",{parentName:"p"},"reading uninitialized objects"),", ",(0,r.kt)("strong",{parentName:"p"},"dangling pointers/references")," or ",(0,r.kt)("strong",{parentName:"p"},"signed overflow"),"."))}o.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),i=n(76775),s=n(91980),c=n(67392),p=n(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,c]=y({queryString:n,groupId:a}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=s??u;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var k=n(72389);const g="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(u(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",h,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function _(e){const t=(0,k.Z)();return r.createElement(b,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(87462),r=n(67294);const l="columns_Terr";function o(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}o.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(74866),l=n(85162),o=n(99372),i=n(72412);const s={};function c(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?a.createElement(l.Z,{value:n,label:o.gJ.get(n),default:c.default||0==t},c.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:s.smallTabs},a.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,i.Z)(c.simplified)),a.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,i.Z)(c.detailed)))):c.value):a.createElement(l.Z,{value:n,label:o.gJ.get(n),default:0==t},(0,i.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>p,ZP:()=>c});var a=n(67294),r=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var o=n(98839);const i={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},s=e=>e.none?i.None:e.pub||e.public?i.Public:e.prot||e.protected?i.Protected:e.priv||e.private?i.Private:i.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>s(e).Order<s(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function p(e){a.useContext(o.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const i=e.linkName||e.autoLink;!e.noLink&&i&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?a.createElement("span",{className:l[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:l.symbolProp},(e=>{const t=s(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:l.symbolName},t),a.createElement("td",{className:l.symbolDesc},(0,r.Z)(n)))}p.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=p},18510:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(44996),l=n(34386),o=n(72412);const i="TooltipContent_Lvru",s="TooltipTitle_ukF2";function c(e){let{url:t,title:n,maxWidth:c,children:p}=e;let u=c||"clamp(250px, 25vw, 800px)";"string"==typeof u&&u.endsWith("vw")&&(u=`clamp(250px, ${u}, 800px)`);const d="function"==typeof n?a.createElement(n):n,m=(t||"").startsWith("/")?(0,r.Z)(t):t,y=t?a.createElement("a",{href:m,target:"_blank",rel:"noreferrer"},p):p;return a.createElement(l.Z,{componentsProps:{tooltip:{style:{maxWidth:u}}},title:a.createElement("span",{className:s},(0,o.Z)(d)),placement:"top",arrow:!0},a.createElement("span",{className:i},y))}c.isMDXComponent=!0},99372:(e,t,n)=>{n.d(t,{gJ:()=>p,eH:()=>y,U6:()=>d,OS:()=>m});var a=n(67294),r=n(95999);const l="markedText_c6kK",o="since_c1Q3",i="until_jXK6",s="removed_A_Kf",c="versionNumber_BiUX",p=new Map;function u(e){let{children:t,className:n}=e;return a.createElement("span",{className:l+(n?" "+n:"")},t)}function d(e){let{children:t,v:n}=e;return a.createElement(u,{className:o},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return a.createElement(u,{className:i},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`until-${n}`),")")))}function y(e){let{children:t,v:n}=e;return a.createElement(u,{className:s},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`removed-${n}`),")")))}p.set("cpp98","C++98"),p.set("cpp03","C++03"),p.set("cpp11","C++11"),p.set("cpp14","C++14"),p.set("cpp17","C++17"),p.set("cpp20","C++20"),p.set("cpp23","C++23"),p.set("deprecated-",a.createElement(r.Z,null,"deprecated")),p.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),p.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),p.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),p.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),p.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),p.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),p.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),p.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),p.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),p.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),p.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),p.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),p.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),p.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),p.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),p.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),p.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),p.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),p.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),p.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),p.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),p.set("removed-",a.createElement(r.Z,null,"deleted")),p.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),p.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),p.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),p.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),p.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),p.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),p.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},55226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"std/algo/ordinary/_codes/unique_copy/since-cpp17",id:"std/algo/ordinary/_codes/unique_copy/since-cpp17",title:"since-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/unique_copy/since-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/unique_copy",slug:"/std/algo/ordinary/_codes/unique_copy/since-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/unique_copy/since-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/unique_copy/since-cpp17.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class OutputIt >\nOutputIt unique_copy( InputIt first, InputIt last, OutputIt d_first );\n\n// (2)\ntemplate< class InputIt, class OutputIt, class BinaryPredicate >\nOutputIt unique_copy( InputIt first, InputIt last,\n                      OutputIt d_first, BinaryPredicate p );\n\n// (3)\ntemplate< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >\nForwardIt2 unique_copy( ExecutionPolicy&& policy, ForwardIt1 first,\n                        ForwardIt1 last, ForwardIt2 d_first );\n\n// (4)\ntemplate< class ExecutionPolicy, class ForwardIt1,\n          class ForwardIt2, class BinaryPredicate >\nForwardIt2 unique_copy( ExecutionPolicy&& policy,\n                        ForwardIt1 first, ForwardIt1 last,\n                        ForwardIt2 d_first, BinaryPredicate p );\n")))}u.isMDXComponent=!0},49750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"std/algo/ordinary/_codes/unique_copy/since-cpp20",id:"std/algo/ordinary/_codes/unique_copy/since-cpp20",title:"since-cpp20",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/unique_copy/since-cpp20.mdx",sourceDirName:"std/algo/ordinary/_codes/unique_copy",slug:"/std/algo/ordinary/_codes/unique_copy/since-cpp20",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/unique_copy/since-cpp20",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/unique_copy/since-cpp20.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class OutputIt >\nconstexpr OutputIt unique_copy( InputIt first, InputIt last, OutputIt d_first );\n\n// (2)\ntemplate< class InputIt, class OutputIt, class BinaryPredicate >\nconstexpr OutputIt unique_copy( InputIt first, InputIt last,\n                      OutputIt d_first, BinaryPredicate p );\n\n// (3)\ntemplate< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >\nForwardIt2 unique_copy( ExecutionPolicy&& policy, ForwardIt1 first,\n                        ForwardIt1 last, ForwardIt2 d_first );\n\n// (4)\ntemplate< class ExecutionPolicy, class ForwardIt1,\n          class ForwardIt2, class BinaryPredicate >\nForwardIt2 unique_copy( ExecutionPolicy&& policy,\n                        ForwardIt1 first, ForwardIt1 last,\n                        ForwardIt2 d_first, BinaryPredicate p );\n")))}u.isMDXComponent=!0},16889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"std/algo/ordinary/_codes/unique_copy/until-cpp17",id:"std/algo/ordinary/_codes/unique_copy/until-cpp17",title:"until-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/unique_copy/until-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/unique_copy",slug:"/std/algo/ordinary/_codes/unique_copy/until-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/unique_copy/until-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/unique_copy/until-cpp17.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class OutputIt >\nOutputIt unique_copy( InputIt first, InputIt last, OutputIt d_first );\n\n// (2)\ntemplate< class InputIt, class OutputIt, class BinaryPredicate >\nOutputIt unique_copy( InputIt first, InputIt last,\n                      OutputIt d_first, BinaryPredicate p );\n")))}u.isMDXComponent=!0},88483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>_,frontMatter:()=>k,metadata:()=>h,toc:()=>N});var a=n(87462),r=n(67294),l=n(3905),o=n(55059),i=n(22307),s=n(99801),c=n(18510),p=n(99372),u=n(98088),d=n(14064),m=n(16889),y=n(55226),f=n(49750);const k={title:"unique_copy algorithm",sidebar_label:"unique_copy(  )",description:"unique_copy algorithm C++ documentation",hide_title:!0,tags:["algorithm","unique","unique_copy"],cppreference_origin_rel:"w/cpp/algorithm/unique_copy"},g=void 0,h={unversionedId:"std/algo/ordinary/unique_copy",id:"std/algo/ordinary/unique_copy",title:"unique_copy algorithm",description:"unique_copy algorithm C++ documentation",source:"@site/content/docs/std/algo/ordinary/unique_copy.mdx",sourceDirName:"std/algo/ordinary",slug:"/std/algo/ordinary/unique_copy",permalink:"/CppLangNet/docs/std/algo/ordinary/unique_copy",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/unique_copy.mdx",tags:[{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"unique",permalink:"/CppLangNet/docs/tags/unique"},{label:"unique_copy",permalink:"/CppLangNet/docs/tags/unique-copy"}],version:"current",frontMatter:{title:"unique_copy algorithm",sidebar_label:"unique_copy(  )",description:"unique_copy algorithm C++ documentation",hide_title:!0,tags:["algorithm","unique","unique_copy"],cppreference_origin_rel:"w/cpp/algorithm/unique_copy"},sidebar:"defaultSidebar",previous:{title:"unique(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/unique"},next:{title:"ranges::is_partitioned(  )",permalink:"/CppLangNet/docs/std/algo/ranges/is_partitioned"}},v={},N=[{value:"Parameters",id:"parameters",level:3},{value:"Type requirements",id:"type-requirements",level:4},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Notes",id:"notes",level:3},{value:"Examples",id:"examples",level:3}],b={toc:N};function _(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdunique_copy-algorithm"},"std::unique_copy() algorithm"),(0,l.kt)(s.Z,{content:{"since-cpp20":(0,l.kt)(f.default,{mdxType:"Signature_SinceCpp20"}),"since-cpp17":(0,l.kt)(y.default,{mdxType:"Signature_SinceCpp17"}),"until-cpp17":(0,l.kt)(m.default,{mdxType:"Signature_UntilCpp17"})},mdxType:"SwitchView"}),(0,l.kt)("p",null,"Copies the elements from the range [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),"), to another range beginning at ",(0,l.kt)("inlineCode",{parentName:"p"},"d_first")," in such a way that there are no consecutive equal elements."),(0,l.kt)("p",null,"Only the first element of each group of equal elements is copied."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," Elements are compared using ",(0,l.kt)("inlineCode",{parentName:"p"},"operator=="),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," Elements are compared using the given binary predicate ",(0,l.kt)("inlineCode",{parentName:"p"},"p"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(3 - 4)")," Same as ",(0,l.kt)("strong",{parentName:"p"},"(1 - 2)"),", but executed according to ",(0,l.kt)("inlineCode",{parentName:"p"},"policy"),"."),(0,l.kt)("admonition",{parentName:"li",title:"Overload Resolution",type:"important"},(0,l.kt)("p",{parentName:"admonition"},"These overloads participate in overload resolution only if"),(0,l.kt)(p.OS,{v:"cpp20",mdxType:"Until"}," ",(0,l.kt)("code",null,"std::is_execution_policy_v<std::decay_t<ExecutionPolicy>>")," ")," ",(0,l.kt)(p.U6,{v:"cpp20",mdxType:"Since"}," ",(0,l.kt)("code",null,"std::is_execution_policy_v<std::remove_cvref_t<ExecutionPolicy>>")," ")," is ",(0,l.kt)("code",null,"true"),"."))),(0,l.kt)("admonition",{title:"Undefined Behaviour",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)(c.Z,{title:(0,l.kt)(u.ZP,{mdxType:"Term_UndefinedBehaviour"}),mdxType:"Tooltip"},"behavior is undefined")," if it is not an equivalence relation.")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(o.ZP,{mdxType:"SymbolTable"},(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)(r.Fragment,null," ",(0,l.kt)("code",null,"first")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last")," "),mdxType:"Symbol"},"The range of elements to process."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"d_first"),mdxType:"Symbol"},"The beginning of the destination range."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"policy"),mdxType:"Symbol"},"The execution policy to use. See ",(0,l.kt)("a",{href:"#"},"execution policy")," for details."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"p"),mdxType:"Symbol"},(0,l.kt)("p",null,"Binary predicate which returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the elements should be treated as equal."),(0,l.kt)("p",null,"The signature of the function should be equivalent to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"bool fun(const Type1& a, const Type2& b);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The signature does not need to have ",(0,l.kt)("inlineCode",{parentName:"li"},"const&"),"."),(0,l.kt)("li",{parentName:"ul"},"The function ",(0,l.kt)("strong",{parentName:"li"},"must not")," modify the objects passed to it."),(0,l.kt)("li",{parentName:"ul"},"Must accept all values of type (possibly const) ",(0,l.kt)("inlineCode",{parentName:"li"},"Type1")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Type2"),", regardless of ",(0,l.kt)("a",{parentName:"li",href:"#"},"value category")," (so ",(0,l.kt)("inlineCode",{parentName:"li"},"Type1&")," is not allowed, ",(0,l.kt)(p.U6,{v:"cpp11",mdxType:"Since"},"nor is ",(0,l.kt)("code",null,"Type1")," unless for ",(0,l.kt)("code",null,"Type1")," a move is equivalent to a copy"),")"),(0,l.kt)("li",{parentName:"ul"},"The types ",(0,l.kt)("inlineCode",{parentName:"li"},"Type1")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Type2")," must be such that an object of type ",(0,l.kt)("inlineCode",{parentName:"li"},"InputIt")," can be dereferenced and then implicitly converted to them.")))),(0,l.kt)("h4",{id:"type-requirements"},"Type requirements"),(0,l.kt)(o.ZP,{mdxType:"SymbolTable"},(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"InputIt"),mdxType:"Symbol"},(0,l.kt)("a",{href:"/docs/named_req/LegacyInputIterator"},"LegacyInputIterator")),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"OutputIt"),mdxType:"Symbol"},(0,l.kt)("a",{href:"/docs/named_req/LegacyOutputIterator"},"LegacyOutputIterator")),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)(r.Fragment,null," ",(0,l.kt)("code",null,"ForwardIt1")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"ForwardIt2")," "),mdxType:"Symbol"},(0,l.kt)("a",{href:"/docs/named_req/LegacyForwardIterator"},"LegacyForwardIterator"))),(0,l.kt)("p",null,"The type of dereferenced ",(0,l.kt)("inlineCode",{parentName:"p"},"InputIt")," must meet the requirements of ",(0,l.kt)("a",{parentName:"p",href:"/docs/named_req/CopyConstructible"},"CopyConstructible"),", if:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"neither ",(0,l.kt)("inlineCode",{parentName:"li"},"InputIt"),", nor ",(0,l.kt)("inlineCode",{parentName:"li"},"OutputIt")," satisfies ",(0,l.kt)("a",{parentName:"li",href:"/docs/named_req/LegacyForwardIterator"},"LegacyForwardIterator"),", or"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"InputIt")," doesn't satisfy ",(0,l.kt)("a",{parentName:"li",href:"/docs/named_req/LegacyForwardIterator"},"LegacyForwardIterator")," and the value type of ",(0,l.kt)("inlineCode",{parentName:"li"},"InputIt")," differs from that of ",(0,l.kt)("inlineCode",{parentName:"li"},"OutputIt"))),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("p",null,"Output iterator to the element past the last written element."),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"For nonempty ranges, exactly ",(0,l.kt)("inlineCode",{parentName:"p"},"std::distance(first, last) - 1")," applications of the corresponding predicate."),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,"The overloads with a template parameter named ",(0,l.kt)("inlineCode",{parentName:"p"},"ExecutionPolicy")," report errors as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If execution of a function invoked as part of the algorithm throws an exception and ",(0,l.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy")," is one of the ",(0,l.kt)("a",{parentName:"li",href:"#"},(0,l.kt)("strong",{parentName:"a"},"standard policies")),", ",(0,l.kt)("a",{parentName:"li",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"std::terminate"))," is called.\nFor any other ",(0,l.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy"),", the behavior is ",(0,l.kt)(c.Z,{title:(0,l.kt)(d.ZP,{mdxType:"Term_ImplementationDefined"}),mdxType:"Tooltip"},(0,l.kt)("strong",{parentName:"li"},"implementation-defined")),"."),(0,l.kt)("li",{parentName:"ul"},"If the algorithm fails to allocate memory, ",(0,l.kt)("inlineCode",{parentName:"li"},"std::bad_alloc")," is thrown.")),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"InputIt")," satisfies ",(0,l.kt)("a",{parentName:"p",href:"/docs/named_req/LegacyForwardIterator"},"LegacyForwardIterator"),", this function rereads the input in order to detect duplicates."),(0,l.kt)("p",null,"Otherwise, if ",(0,l.kt)("inlineCode",{parentName:"p"},"OutputIt")," satisfies ",(0,l.kt)("a",{parentName:"p",href:"/docs/named_req/LegacyForwardIterator"},"LegacyForwardIterator"),", and the value type of ",(0,l.kt)("inlineCode",{parentName:"p"},"InputIt")," is the same as that of ",(0,l.kt)("inlineCode",{parentName:"p"},"OutputIt"),", this function compare ",(0,l.kt)("inlineCode",{parentName:"p"},"*d_first")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"*first"),"."),(0,l.kt)("p",null,"Otherwise, this function compares ",(0,l.kt)("inlineCode",{parentName:"p"},"*first")," to a local element copy."),(0,l.kt)("p",null,"For the overloads with an ",(0,l.kt)("inlineCode",{parentName:"p"},"ExecutionPolicy"),", there may be a performance cost if the value type of ",(0,l.kt)("inlineCode",{parentName:"p"},"ForwardIt1")," is not both ",(0,l.kt)("a",{parentName:"p",href:"/docs/named_req/CopyConstructible"},"CopyConstructible")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/named_req/CopyAssignable"},"CopyAssignable"),"."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The following copy-prints a vector, replacing all values over ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"99")," on the fly."),(0,l.kt)(i.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},"#include <algorithm>\n#include <iostream>\n#include <iterator>\n#include <string>\n\nint main()\n{\n    std::string s1 {\"The      string    with many       spaces!\"};\n    std::cout << \"before: \" << s1 << '\\n';\n\n    std::string s2;\n    std::unique_copy(s1.begin(), s1.end(), std::back_inserter(s2),\n                     [](char c1, char c2) { return c1 == ' ' && c2 == ' '; });\n\n    std::cout << \"after:  \" << s2 << '\\n';\n}\n"))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},"before: The      string    with many       spaces!\nafter:  The string with many spaces!\n")))))}_.isMDXComponent=!0}}]);