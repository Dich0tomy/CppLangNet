"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[22567],{14064:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aspects and semantics that are ",(0,r.kt)("strong",{parentName:"p"},"implementation-defined")," are not guaranteed by\nthe standard in any way, rather they are left out to the implementation (compiler vendor standard library, most of the times).\nFor example, most mathematical functions incur some ",(0,r.kt)("strong",{parentName:"p"},"implementation-defined")," behaviour."))}i.isMDXComponent=!0},98088:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"Undefined behaviour")," is a property of a program that's incorrect, but likely compiles. It is incorrect in a way, that the error is only invoked in certain conditions at runtime.",(0,r.kt)("p",null,"Common cases include: ",(0,r.kt)("strong",{parentName:"p"},"out of bounds access"),", ",(0,r.kt)("strong",{parentName:"p"},"reading uninitialized objects"),", ",(0,r.kt)("strong",{parentName:"p"},"dangling pointers/references")," or ",(0,r.kt)("strong",{parentName:"p"},"signed overflow"),"."))}i.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),s=n(76775),o=n(91980),c=n(67392),d=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=u(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,c]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var g=n(72389);const v="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==s&&(p(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},i,{className:(0,l.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function _(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294);const l="columns_Terr";function i(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}i.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(74866),l=n(85162),i=n(99372),s=n(72412);const o={};function c(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?a.createElement(l.Z,{value:n,label:i.gJ.get(n),default:c.default||0==t},c.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:o.smallTabs},a.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,s.Z)(c.simplified)),a.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,s.Z)(c.detailed)))):c.value):a.createElement(l.Z,{value:n,label:i.gJ.get(n),default:0==t},(0,s.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>d,ZP:()=>c});var a=n(67294),r=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var i=n(98839);const s={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},o=e=>e.none?s.None:e.pub||e.public?s.Public:e.prot||e.protected?s.Protected:e.priv||e.private?s.Private:s.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>o(e).Order<o(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function d(e){a.useContext(i.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const s=e.linkName||e.autoLink;!e.noLink&&s&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?a.createElement("span",{className:l[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:l.symbolProp},(e=>{const t=o(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:l.symbolName},t),a.createElement("td",{className:l.symbolDesc},(0,r.Z)(n)))}d.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=d},18510:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(44996),l=n(34386),i=n(72412);const s="TooltipContent_Lvru",o="TooltipTitle_ukF2";function c(e){let{url:t,title:n,maxWidth:c,children:d}=e;let p=c||"clamp(250px, 25vw, 800px)";"string"==typeof p&&p.endsWith("vw")&&(p=`clamp(250px, ${p}, 800px)`);const u="function"==typeof n?a.createElement(n):n,m=(t||"").startsWith("/")?(0,r.Z)(t):t,f=t?a.createElement("a",{href:m,target:"_blank",rel:"noreferrer"},d):d;return a.createElement(l.Z,{componentsProps:{tooltip:{style:{maxWidth:p}}},title:a.createElement("span",{className:o},(0,i.Z)(u)),placement:"top",arrow:!0},a.createElement("span",{className:s},f))}c.isMDXComponent=!0},99372:(e,t,n)=>{n.d(t,{gJ:()=>d,eH:()=>f,U6:()=>u,OS:()=>m});var a=n(67294),r=n(95999);const l="markedText_c6kK",i="since_c1Q3",s="until_jXK6",o="removed_A_Kf",c="versionNumber_BiUX",d=new Map;function p(e){let{children:t,className:n}=e;return a.createElement("span",{className:l+(n?" "+n:"")},t)}function u(e){let{children:t,v:n}=e;return a.createElement(p,{className:i},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",d.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return a.createElement(p,{className:s},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",d.get(`until-${n}`),")")))}function f(e){let{children:t,v:n}=e;return a.createElement(p,{className:o},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",d.get(`removed-${n}`),")")))}d.set("cpp98","C++98"),d.set("cpp03","C++03"),d.set("cpp11","C++11"),d.set("cpp14","C++14"),d.set("cpp17","C++17"),d.set("cpp20","C++20"),d.set("cpp23","C++23"),d.set("deprecated-",a.createElement(r.Z,null,"deprecated")),d.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),d.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),d.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),d.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),d.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),d.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),d.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),d.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),d.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),d.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),d.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),d.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),d.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),d.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),d.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),d.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),d.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),d.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),d.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),d.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),d.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),d.set("removed-",a.createElement(r.Z,null,"deleted")),d.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),d.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),d.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),d.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),d.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),d.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),d.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},80028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},i=void 0,s={unversionedId:"std/algo/ordinary/_codes/shift_right/since-cpp20",id:"std/algo/ordinary/_codes/shift_right/since-cpp20",title:"since-cpp20",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/shift_right/since-cpp20.mdx",sourceDirName:"std/algo/ordinary/_codes/shift_right",slug:"/std/algo/ordinary/_codes/shift_right/since-cpp20",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/shift_right/since-cpp20",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/shift_right/since-cpp20.mdx",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class ForwardIt >\nconstexpr ForwardIt\n    shift_right( ForwardIt first, ForwardIt last,\n                typename std::iterator_traits<ForwardIt>::difference_type n );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt >\nForwardIt\n    shift_right( ExecutionPolicy&& policy, ForwardIt first, ForwardIt last,\n                typename std::iterator_traits<ForwardIt>::difference_type n );\n")))}p.isMDXComponent=!0},58397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>k,frontMatter:()=>m,metadata:()=>h,toc:()=>v});var a=n(87462),r=n(67294),l=n(3905),i=n(55059),s=n(22307),o=n(99801),c=n(18510),d=n(14064),p=n(98088),u=n(80028);const m={title:"shift_right algorithm",sidebar_label:"shift_right(  )",description:"shift_right algorithm C++ documentation",hide_title:!0,tags:["algorithm","shift","shift_right"],cppreference_origin_rel:"w/cpp/algorithm/shift"},f=void 0,h={unversionedId:"std/algo/ordinary/shift_right",id:"std/algo/ordinary/shift_right",title:"shift_right algorithm",description:"shift_right algorithm C++ documentation",source:"@site/content/docs/std/algo/ordinary/shift_right.mdx",sourceDirName:"std/algo/ordinary",slug:"/std/algo/ordinary/shift_right",permalink:"/CppLangNet/docs/std/algo/ordinary/shift_right",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/shift_right.mdx",tags:[{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"shift",permalink:"/CppLangNet/docs/tags/shift"},{label:"shift_right",permalink:"/CppLangNet/docs/tags/shift-right"}],version:"current",frontMatter:{title:"shift_right algorithm",sidebar_label:"shift_right(  )",description:"shift_right algorithm C++ documentation",hide_title:!0,tags:["algorithm","shift","shift_right"],cppreference_origin_rel:"w/cpp/algorithm/shift"},sidebar:"defaultSidebar",previous:{title:"shift_left(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/shift_left"},next:{title:"unique(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/unique"}},g={},v=[{value:"Parameters",id:"parameters",level:3},{value:"Type requirements",id:"type-requirements",level:4},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Examples",id:"examples",level:3}],b={toc:v};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdshift_right-algorithm"},"std::shift_right() algorithm"),(0,l.kt)(o.Z,{content:{"since-cpp20":(0,l.kt)(u.default,{mdxType:"Signature_SinceCpp20"})},mdxType:"SwitchView"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," Shifts the elements towards the end of the range:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"if ",(0,l.kt)("inlineCode",{parentName:"li"},"n == 0 || n >= last - first"),", there are no effects."),(0,l.kt)("li",{parentName:"ul"},"if ",(0,l.kt)("inlineCode",{parentName:"li"},"n < 0"),", the ",(0,l.kt)(c.Z,{title:(0,l.kt)(p.ZP,{mdxType:"Term_UndefinedBehaviour"}),mdxType:"Tooltip"},"behavior is undefined"),".")),(0,l.kt)("p",{parentName:"li"},"Otherwise, for every integer ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," in [",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last - first - n"),"), moves the element originally at position ",(0,l.kt)("inlineCode",{parentName:"p"},"first + i")," to position ",(0,l.kt)("inlineCode",{parentName:"p"},"first + n + i"),". The moves are performed in increasing order of ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," starting from ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,l.kt)("p",{parentName:"li"},"If ",(0,l.kt)("inlineCode",{parentName:"p"},"ForwardIt")," meets the ",(0,l.kt)("a",{parentName:"p",href:"/docs/named_req/LegacyBidirectionalIterator"},"LegacyBidirectionalIterator")," requirements, then the moves are performed in decreasing order of ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," starting from ",(0,l.kt)("inlineCode",{parentName:"p"},"last - first - n - 1"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,l.kt)("strong",{parentName:"p"},"(1)"),", but executed according to ",(0,l.kt)("inlineCode",{parentName:"p"},"policy"),"."),(0,l.kt)("admonition",{parentName:"li",title:"Overload Resolution",type:"important"},(0,l.kt)("p",{parentName:"admonition"},"These overloads participate in overload resolution only if ",(0,l.kt)("inlineCode",{parentName:"p"},"std::is_execution_policy_v<std::remove_cvref_t<ExecutionPolicy>>")," is ",(0,l.kt)("code",null,"true"),".")))),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(i.ZP,{mdxType:"SymbolTable"},(0,l.kt)(i.mN,{none:!0,noLink:!0,name:(0,l.kt)(r.Fragment,null," ",(0,l.kt)("code",null,"first")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last")," "),mdxType:"Symbol"},"The original range."),(0,l.kt)(i.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"n"),mdxType:"Symbol"},"The number of positions to shift."),(0,l.kt)(i.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"policy"),mdxType:"Symbol"},"The execution policy to use. See ",(0,l.kt)("a",{href:"#"},"execution policy")," for details.")),(0,l.kt)("h4",{id:"type-requirements"},"Type requirements"),(0,l.kt)(i.ZP,{mdxType:"SymbolTable"},(0,l.kt)(i.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"ForwardIt"),mdxType:"Symbol"},(0,l.kt)("a",{href:"/docs/named_req/LegacyBidirectionalIterator"},"LegacyBidirectionalIterator")," ",(0,l.kt)("br",null),(0,l.kt)("b",null,"OR")," ",(0,l.kt)("br",null),(0,l.kt)("a",{href:"/docs/named_req/ValueSwappable"},"ValueSwappable"))),(0,l.kt)("p",null,"The type of dereferenced ",(0,l.kt)("inlineCode",{parentName:"p"},"ForwardIt")," must meet the requirements of ",(0,l.kt)("a",{parentName:"p",href:"/docs/named_req/MoveAssignable"},"MoveAssignable"),"."),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("p",null,"The beginning of the resulting range:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"n")," is less than ",(0,l.kt)("inlineCode",{parentName:"li"},"last - first"),", returns ",(0,l.kt)("inlineCode",{parentName:"li"},"first + n"),"."),(0,l.kt)("li",{parentName:"ul"},"Otherwise, returns ",(0,l.kt)("inlineCode",{parentName:"li"},"last"),".")),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"At most ",(0,l.kt)("inlineCode",{parentName:"p"},"std::distance(first, last) - n")," assignments or swaps."),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,"The overloads with a template parameter named ",(0,l.kt)("inlineCode",{parentName:"p"},"ExecutionPolicy")," report errors as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If execution of a function invoked as part of the algorithm throws an exception and ",(0,l.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy")," is one of the ",(0,l.kt)("a",{parentName:"li",href:"#"},(0,l.kt)("strong",{parentName:"a"},"standard policies")),", ",(0,l.kt)("a",{parentName:"li",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"std::terminate"))," is called.\nFor none other ",(0,l.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy"),", the behavior is ",(0,l.kt)(c.Z,{title:(0,l.kt)(d.ZP,{mdxType:"Term_ImplementationDefined"}),mdxType:"Tooltip"},(0,l.kt)("strong",{parentName:"li"},"implementation-defined")),"."),(0,l.kt)("li",{parentName:"ul"},"If the algorithm fails to allocate memory, ",(0,l.kt)("inlineCode",{parentName:"li"},"std::bad_alloc")," is thrown.")),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(s.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <algorithm>\n#include <iostream>\n#include <string>\n#include <type_traits>\n#include <vector>\n\nstruct S\n{\n    int value {0};\n    bool specified_state {true};\n\n    S(int v = 0) : value {v} {}\n    S(S const& rhs) = default;\n    S(S&& rhs) { *this = std::move(rhs); }\n    S& operator=(S const& rhs) = default;\n    S& operator=(S&& rhs)\n    {\n        if (this != &rhs)\n        {\n            value = rhs.value;\n            specified_state = rhs.specified_state;\n            rhs.specified_state = false;\n        }\n        return *this;\n    }\n};\n\ntemplate<typename T>\nstd::ostream& operator<<(std::ostream& os, std::vector<T> const& v)\n{\n    for (const auto& s : v)\n    {\n        if constexpr (std::is_same_v<T, S>)\n            s.specified_state ? os << s.value << \' \' : os << ". ";\n        else if constexpr (std::is_same_v<T, std::string>)\n            os << (s.empty() ? "." : s) << \' \';\n        else\n            os << s << \' \';\n    }\n    return os;\n}\n\nint main()\n{\n    std::cout << std::left;\n\n    std::vector<S>            a {1, 2, 3, 4, 5, 6, 7};\n    std::vector<int>          b {1, 2, 3, 4, 5, 6, 7};\n    std::vector<std::string>  c {"\u03b1", "\u03b2", "\u03b3", "\u03b4", "\u03b5", "\u03b6", "\u03b7"};\n\n    std::cout << "vector<S> \\tvector<int> \\tvector<string>\\n";\n    std::cout << a << "  " << b << "  " << c << \'\\n\';\n\n    std::shift_left(begin(a), end(a), 3);\n    std::shift_left(begin(b), end(b), 3);\n    std::shift_left(begin(c), end(c), 3);\n    std::cout << a << "  " << b << "  " << c << \'\\n\';\n\n    std::shift_right(begin(a), end(a), 2);\n    std::shift_right(begin(b), end(b), 2);\n    std::shift_right(begin(c), end(c), 2);\n    std::cout << a << "  " << b << "  " << c << \'\\n\';\n\n    std::shift_left(begin(a), end(a), 8);  // has no effect: n >= last - first\n    std::shift_left(begin(b), end(b), 8);  // ditto\n    std::shift_left(begin(c), end(c), 8);  // ditto\n    std::cout << a << "  " << b << "  " << c << \'\\n\';\n\n//  std::shift_left(begin(a), end(a), -3); // UB, e.g. segfault.)\n}\n'))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},"vector<S>       vector<int>     vector<string>\n1 2 3 4 5 6 7   1 2 3 4 5 6 7   \u03b1 \u03b2 \u03b3 \u03b4 \u03b5 \u03b6 \u03b7\n4 5 6 7 . . .   4 5 6 7 5 6 7   \u03b4 \u03b5 \u03b6 \u03b7 . . .\n. . 4 5 6 7 .   4 5 4 5 6 7 5   . . \u03b4 \u03b5 \u03b6 \u03b7 .\n. . 4 5 6 7 .   4 5 4 5 6 7 5   . . \u03b4 \u03b5 \u03b6 \u03b7 .\n")))))}k.isMDXComponent=!0}}]);