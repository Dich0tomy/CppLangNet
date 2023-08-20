"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[35964],{14064:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aspects and semantics that are ",(0,r.kt)("strong",{parentName:"p"},"implementation-defined")," are not guaranteed by\nthe standard in any way, rather they are left out to the implementation (compiler vendor standard library, most of the times).\nFor example, most mathematical functions incur some ",(0,r.kt)("strong",{parentName:"p"},"implementation-defined")," behaviour."))}l.isMDXComponent=!0},98088:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"Undefined behaviour")," is a property of a program that's incorrect, but likely compiles. It is incorrect in a way, that the error is only invoked in certain conditions at runtime.",(0,r.kt)("p",null,"Common cases include: ",(0,r.kt)("strong",{parentName:"p"},"out of bounds access"),", ",(0,r.kt)("strong",{parentName:"p"},"reading uninitialized objects"),", ",(0,r.kt)("strong",{parentName:"p"},"dangling pointers/references")," or ",(0,r.kt)("strong",{parentName:"p"},"signed overflow"),"."))}l.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(76775),s=n(91980),c=n(67392),p=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:n,groupId:a}),[d,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??d;return u({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),v(e)}),[c,v,o]),tabValues:o}}var h=n(72389);const y="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(d(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:u,onClick:m},l,{className:(0,o.Z)("tabs__item",g,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(_,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(87462),r=n(67294);const o="columns_Terr";function l(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:o,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}l.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(74866),o=n(85162),l=n(99372),i=n(72412);const s={};function c(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?a.createElement(o.Z,{value:n,label:l.gJ.get(n),default:c.default||0==t},c.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:s.smallTabs},a.createElement(o.Z,{value:"simplified",label:"Simplified",default:!0},(0,i.Z)(c.simplified)),a.createElement(o.Z,{value:"detailed",label:"Detailed"},(0,i.Z)(c.detailed)))):c.value):a.createElement(o.Z,{value:n,label:l.gJ.get(n),default:0==t},(0,i.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>p,ZP:()=>c});var a=n(67294),r=n(72412);const o={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var l=n(98839);const i={None:{Order:0,ShortName:"",FullName:"",Style:o.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:o.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:o.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:o.accessPrivate}},s=e=>e.none?i.None:e.pub||e.public?i.Public:e.prot||e.protected?i.Protected:e.priv||e.private?i.Private:i.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>s(e).Order<s(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:o.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function p(e){a.useContext(l.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const i=e.linkName||e.autoLink;!e.noLink&&i&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?a.createElement("span",{className:o[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:o.symbolProp},(e=>{const t=s(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:o.symbolName},t),a.createElement("td",{className:o.symbolDesc},(0,r.Z)(n)))}p.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=p},18510:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(44996),o=n(34386),l=n(72412);const i="TooltipContent_Lvru",s="TooltipTitle_ukF2";function c(e){let{url:t,title:n,maxWidth:c,children:p}=e;let d=c||"clamp(250px, 25vw, 800px)";"string"==typeof d&&d.endsWith("vw")&&(d=`clamp(250px, ${d}, 800px)`);const m="function"==typeof n?a.createElement(n):n,u=(t||"").startsWith("/")?(0,r.Z)(t):t,f=t?a.createElement("a",{href:u,target:"_blank",rel:"noreferrer"},p):p;return a.createElement(o.Z,{componentsProps:{tooltip:{style:{maxWidth:d}}},title:a.createElement("span",{className:s},(0,l.Z)(m)),placement:"top",arrow:!0},a.createElement("span",{className:i},f))}c.isMDXComponent=!0},99372:(e,t,n)=>{n.d(t,{gJ:()=>p,eH:()=>f,U6:()=>m,OS:()=>u});var a=n(67294),r=n(95999);const o="markedText_c6kK",l="since_c1Q3",i="until_jXK6",s="removed_A_Kf",c="versionNumber_BiUX",p=new Map;function d(e){let{children:t,className:n}=e;return a.createElement("span",{className:o+(n?" "+n:"")},t)}function m(e){let{children:t,v:n}=e;return a.createElement(d,{className:l},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`since-${n}`),")")))}function u(e){let{children:t,v:n}=e;return a.createElement(d,{className:i},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`until-${n}`),")")))}function f(e){let{children:t,v:n}=e;return a.createElement(d,{className:s},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",p.get(`removed-${n}`),")")))}p.set("cpp98","C++98"),p.set("cpp03","C++03"),p.set("cpp11","C++11"),p.set("cpp14","C++14"),p.set("cpp17","C++17"),p.set("cpp20","C++20"),p.set("cpp23","C++23"),p.set("deprecated-",a.createElement(r.Z,null,"deprecated")),p.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),p.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),p.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),p.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),p.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),p.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),p.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),p.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),p.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),p.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),p.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),p.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),p.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),p.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),p.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),p.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),p.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),p.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),p.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),p.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),p.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),p.set("removed-",a.createElement(r.Z,null,"deleted")),p.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),p.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),p.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),p.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),p.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),p.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),p.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},70811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"std/algo/ordinary/_codes/remove_if/since-cpp17",id:"std/algo/ordinary/_codes/remove_if/since-cpp17",title:"since-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/remove_if/since-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/remove_if",slug:"/std/algo/ordinary/_codes/remove_if/since-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/remove_if/since-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/remove_if/since-cpp17.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class ForwardIt, class UnaryPredicate >\nForwardIt remove_if( ForwardIt first, ForwardIt last, UnaryPredicate p );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt, class UnaryPredicate >\nForwardIt remove_if( ExecutionPolicy&& policy,\n                     ForwardIt first, ForwardIt last, UnaryPredicate p );\n")))}d.isMDXComponent=!0},21217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"std/algo/ordinary/_codes/remove_if/since-cpp20",id:"std/algo/ordinary/_codes/remove_if/since-cpp20",title:"since-cpp20",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/remove_if/since-cpp20.mdx",sourceDirName:"std/algo/ordinary/_codes/remove_if",slug:"/std/algo/ordinary/_codes/remove_if/since-cpp20",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/remove_if/since-cpp20",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/remove_if/since-cpp20.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class ForwardIt, class UnaryPredicate >\nconstexpr ForwardIt remove_if( ForwardIt first, ForwardIt last, UnaryPredicate p );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt, class UnaryPredicate >\nForwardIt remove_if( ExecutionPolicy&& policy,\n                     ForwardIt first, ForwardIt last, UnaryPredicate p );\n")))}d.isMDXComponent=!0},26870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"std/algo/ordinary/_codes/remove_if/until-cpp17",id:"std/algo/ordinary/_codes/remove_if/until-cpp17",title:"until-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/remove_if/until-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/remove_if",slug:"/std/algo/ordinary/_codes/remove_if/until-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/remove_if/until-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/remove_if/until-cpp17.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class ForwardIt, class UnaryPredicate >\nForwardIt remove_if( ForwardIt first, ForwardIt last, UnaryPredicate p );\n")))}d.isMDXComponent=!0},91917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>N,frontMatter:()=>h,metadata:()=>g,toc:()=>b});var a=n(87462),r=n(67294),o=n(3905),l=n(55059),i=n(22307),s=n(99801),c=n(18510),p=n(99372),d=n(98088),m=n(14064),u=n(26870),f=n(70811),v=n(21217);const h={title:"remove_if algorithm",sidebar_label:"remove_if(  )",description:"remove_if algorithm C++ documentation",hide_title:!0,tags:["algorithm","remove","remove_if","erase","delete"],cppreference_origin_rel:"w/cpp/algorithm/remove"},y=void 0,g={unversionedId:"std/algo/ordinary/remove_if",id:"std/algo/ordinary/remove_if",title:"remove_if algorithm",description:"remove_if algorithm C++ documentation",source:"@site/content/docs/std/algo/ordinary/remove_if.mdx",sourceDirName:"std/algo/ordinary",slug:"/std/algo/ordinary/remove_if",permalink:"/CppLangNet/docs/std/algo/ordinary/remove_if",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/remove_if.mdx",tags:[{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"remove",permalink:"/CppLangNet/docs/tags/remove"},{label:"remove_if",permalink:"/CppLangNet/docs/tags/remove-if"},{label:"erase",permalink:"/CppLangNet/docs/tags/erase"},{label:"delete",permalink:"/CppLangNet/docs/tags/delete"}],version:"current",frontMatter:{title:"remove_if algorithm",sidebar_label:"remove_if(  )",description:"remove_if algorithm C++ documentation",hide_title:!0,tags:["algorithm","remove","remove_if","erase","delete"],cppreference_origin_rel:"w/cpp/algorithm/remove"},sidebar:"defaultSidebar",previous:{title:"remove(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/remove"},next:{title:"remove_copy(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/remove_copy"}},k={},b=[{value:"Parameters",id:"parameters",level:3},{value:"Type requirements",id:"type-requirements",level:4},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Notes",id:"notes",level:3},{value:"Examples",id:"examples",level:3}],_={toc:b};function N(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stdremove_if-algorithm"},"std::remove_if() algorithm"),(0,o.kt)(s.Z,{content:{"since-cpp20":(0,o.kt)(v.default,{mdxType:"Signature_SinceCpp20"}),"since-cpp17":(0,o.kt)(f.default,{mdxType:"Signature_SinceCpp17"}),"until-cpp17":(0,o.kt)(u.default,{mdxType:"Signature_UntilCpp17"})},mdxType:"SwitchView"}),(0,o.kt)("p",null,"Removes all elements satisfying specific criteria from the range [",(0,o.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"last"),") and returns a past-the-end iterator for the new end of the range."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"(1)")," Removes all elements for which predicate ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,o.kt)("strong",{parentName:"p"},"(1)"),", but executed according to ",(0,o.kt)("inlineCode",{parentName:"p"},"policy"),"."),(0,o.kt)("admonition",{parentName:"li",title:"Overload Resolution",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"These overloads participate in overload resolution only if"),(0,o.kt)(p.OS,{v:"cpp20",mdxType:"Until"}," ",(0,o.kt)("code",null,"std::is_execution_policy_v<std::decay_t<ExecutionPolicy>>")," ")," ",(0,o.kt)(p.U6,{v:"cpp20",mdxType:"Since"}," ",(0,o.kt)("code",null,"std::is_execution_policy_v<std::remove_cvref_t<ExecutionPolicy>>")," ")," is ",(0,o.kt)("code",null,"true"),"."))),(0,o.kt)(s.Z,{content:{"since-cpp11":(0,o.kt)(r.Fragment,null,"If the type of ",(0,o.kt)("code",null,"*first")," is not ",(0,o.kt)("a",{href:"/docs/named_req/MoveAssignable"},"MoveAssignable"),", the ",(0,o.kt)(c.Z,{title:(0,o.kt)(d.ZP,{mdxType:"Term_UndefinedBehaviour"}),mdxType:"Tooltip"},"behaviour is undefined"),"."),"until-cpp11":(0,o.kt)(r.Fragment,null,"If the ",(0,o.kt)("a",{href:"#"},"value type")," of ",(0,o.kt)("code",null,"ForwardIt")," is not ",(0,o.kt)("a",{href:"/docs/named_req/CopyAssignable"},"CopyAssignable"),", the ",(0,o.kt)(c.Z,{title:(0,o.kt)(d.ZP,{mdxType:"Term_UndefinedBehaviour"}),mdxType:"Tooltip"},"behaviour is undefined"),".")},mdxType:"SwitchView"}),(0,o.kt)("p",null,"Removing is done by shifting (by means of ",(0,o.kt)(p.U6,{v:"cpp11",mdxType:"Since"},"move assignment"),(0,o.kt)(p.OS,{v:"cpp11",mdxType:"Until"},"copy assignment"),") the elements in the range in such a way that the elements that are not to be removed appear in the beginning of the range."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Relative order of the elements that remain is preserved and the physical size of the container is unchanged.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Iterators pointing to an element between the new ",(0,o.kt)("em",{parentName:"p"},"logical")," end and the ",(0,o.kt)("em",{parentName:"p"},"physical")," end of the range are still ",(0,o.kt)("a",{href:"#"},"dereferenceable"),", ",(0,o.kt)(p.U6,{v:"cpp11",mdxType:"Since"},"but the elements themselves have unspecified values (as per ",(0,o.kt)("a",{href:"/docs/named_req/MoveAssignable"},"MoveAssignable")," post-condition)."))),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)(l.ZP,{mdxType:"SymbolTable"},(0,o.kt)(l.mN,{none:!0,noLink:!0,name:(0,o.kt)(r.Fragment,null," ",(0,o.kt)("code",null,"first")," ",(0,o.kt)("br",null)," ",(0,o.kt)("code",null,"last")," "),mdxType:"Symbol"},"The range of elements to process."),(0,o.kt)(l.mN,{none:!0,noLink:!0,name:(0,o.kt)("code",null,"policy"),mdxType:"Symbol"},"The execution policy to use. See ",(0,o.kt)("a",{href:"#"},"execution policy")," for details."),(0,o.kt)(l.mN,{none:!0,noLink:!0,name:(0,o.kt)("code",null,"p"),mdxType:"Symbol"},(0,o.kt)("p",null,"Unary predicate which returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the element should be removed."),(0,o.kt)("p",null,"The expression ",(0,o.kt)("inlineCode",{parentName:"p"},"p(v)")," must be convertible to ",(0,o.kt)("inlineCode",{parentName:"p"},"bool")," for every argument ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," of type (possibly const) ",(0,o.kt)("inlineCode",{parentName:"p"},"VT"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"VT")," is the value type of ",(0,o.kt)("inlineCode",{parentName:"p"},"InputIt"),", regardless of value category, and must not modify ",(0,o.kt)("inlineCode",{parentName:"p"},"v"),". Thus, a parameter type of ",(0,o.kt)("inlineCode",{parentName:"p"},"VT&")," is not allowed ",(0,o.kt)(p.U6,{v:"cpp11",mdxType:"Since"},", nor is ",(0,o.kt)("code",null,"VT")," unless for ",(0,o.kt)("code",null,"VT")," a move is equivalent to a copy."),"."))),(0,o.kt)("h4",{id:"type-requirements"},"Type requirements"),(0,o.kt)(l.ZP,{mdxType:"SymbolTable"},(0,o.kt)(l.mN,{none:!0,noLink:!0,name:(0,o.kt)("code",null,"ForwardIt"),mdxType:"Symbol"},(0,o.kt)("a",{href:"/docs/named_req/LegacyForwardIterator"},"LegacyForwardIterator")),(0,o.kt)(l.mN,{none:!0,noLink:!0,name:(0,o.kt)("code",null,"UnaryPredicate"),mdxType:"Symbol"},(0,o.kt)("a",{href:"/docs/named_req/Predicate"},"Predicate"))),(0,o.kt)("h3",{id:"return-value"},"Return value"),(0,o.kt)("p",null,"Past-the-end iterator for the new range of values (if this is not ",(0,o.kt)("inlineCode",{parentName:"p"},"end"),", then it points to an unspecified value, and so do iterators to any values between this iterator and ",(0,o.kt)("inlineCode",{parentName:"p"},"end"),")."),(0,o.kt)("h3",{id:"complexity"},"Complexity"),(0,o.kt)("p",null,"Given ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"std::distance(first, last)"),":"),(0,o.kt)("p",null,"At most N applications of predicate ",(0,o.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,o.kt)("h3",{id:"exceptions"},"Exceptions"),(0,o.kt)("p",null,"The overloads with a template parameter named ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecutionPolicy")," report errors as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If execution of a function invoked as part of the algorithm throws an exception and ",(0,o.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy")," is one of the ",(0,o.kt)("a",{parentName:"li",href:"#"},(0,o.kt)("strong",{parentName:"a"},"standard policies")),", ",(0,o.kt)("a",{parentName:"li",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"std::terminate"))," is called.\nFor any other ",(0,o.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy"),", the behavior is ",(0,o.kt)(c.Z,{title:(0,o.kt)(m.ZP,{mdxType:"Term_ImplementationDefined"}),mdxType:"Tooltip"},(0,o.kt)("strong",{parentName:"li"},"implementation-defined")),"."),(0,o.kt)("li",{parentName:"ul"},"If the algorithm fails to allocate memory, ",(0,o.kt)("inlineCode",{parentName:"li"},"std::bad_alloc")," is thrown.")),(0,o.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"remove_if (1)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"template<class ForwardIt, class UnaryPredicate>\nForwardIt remove_if(ForwardIt first, ForwardIt last, UnaryPredicate p)\n{\n    first = std::find_if(first, last, p);\n    if (first != last)\n        for (ForwardIt i = first; ++i != last;)\n            if (!p(*i))\n                *first++ = std::move(*i);\n    return first;\n}\n"))),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("p",null,"A call to remove_if is typically followed by a call to a container's erase member function, which erases the unspecified values and reduces the ",(0,o.kt)("em",{parentName:"p"},"physical size")," of the container to match its new ",(0,o.kt)("em",{parentName:"p"},"logical size"),".\nThese two invocations together constitute a so-called ",(0,o.kt)("a",{parentName:"p",href:"#"},"Erase\u2013remove_if idiom"),(0,o.kt)(p.U6,{v:"cpp20",mdxType:"Since"},", which can be achieved by the free function std::erase that has overloads for all standard sequence containers, or std::erase_if that has overloads for all standard containers")),(0,o.kt)("p",null,"The similarly-named container member functions ",(0,o.kt)("a",{parentName:"p",href:"#"},"list::remove_if"),", ",(0,o.kt)("a",{parentName:"p",href:"#"},"list::remove_if_if"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/std/containers/lists/forward-list/remove_if"},"forward_list::remove_if"),", and ",(0,o.kt)("a",{parentName:"p",href:"/docs/std/containers/lists/forward-list/remove_if"},"forward_list::remove_if_if")," erase the remove_ifd elements."),(0,o.kt)("p",null,"These algorithms cannot be used with associative containers such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/std/containers/sets/set"},"std::set")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/std/containers/maps/map"},"std::map")," because their iterator types do not dereference to ",(0,o.kt)("a",{parentName:"p",href:"/docs/named_req/MoveAssignable"},"MoveAssignable")," types (the keys in these containers are not modifiable)."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"The following code remove_ifs all spaces from a string by shifting all non-space characters to the left and then erasing the extra.\nThis is an example of ",(0,o.kt)("a",{parentName:"p",href:"#"},"Erase-remove idiom"),"."),(0,o.kt)(i.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},"#include <algorithm>\n#include <cctype>\n#include <iostream>\n#include <string>\n#include <string_view>\n\nint main()\n{\n    std::string str1 {\"Text with some   spaces\"};\n\n    auto noSpaceEnd = std::remove_if(str1.begin(), str1.end(), ' ');\n\n    // The spaces are remove_ifd from the string only logically.\n    // Note, we use view, the original string is still not shrunk:\n    std::cout << std::string_view(str1.begin(), noSpaceEnd)\n              << \" size: \" << str1.size() << '\\n';\n\n    str1.erase(noSpaceEnd, str1.end());\n\n    // The spaces are remove_ifd from the string physically.\n    std::cout << str1 << \" size: \" << str1.size() << '\\n';\n\n    std::string str2 = \"Text\\n with\\tsome \\t  whitespaces\\n\\n\";\n    str2.erase(std::remove_if_if(str2.begin(),\n                              str2.end(),\n                              [](unsigned char x) { return std::isspace(x); }),\n               str2.end());\n    std::cout << str2 << '\\n';\n}\n"))),(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},"Textwithsomespaces size: 23\nTextwithsomespaces size: 18\nTextwithsomewhitespaces\n")))))}N.isMDXComponent=!0}}]);