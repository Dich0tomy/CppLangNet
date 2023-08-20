"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[2981],{14064:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aspects and semantics that are ",(0,r.kt)("strong",{parentName:"p"},"implementation-defined")," are not guaranteed by\nthe standard in any way, rather they are left out to the implementation (compiler vendor standard library, most of the times).\nFor example, most mathematical functions incur some ",(0,r.kt)("strong",{parentName:"p"},"implementation-defined")," behaviour."))}o.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),i=n(76775),c=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,s]=f({queryString:n,groupId:a}),[p,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=c??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),y(e)}),[s,y,l]),tabValues:l}}var g=n(72389);const v="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==i&&(p(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=y(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function C(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(87462),r=n(67294);const l="columns_Terr";function o(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}o.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(74866),l=n(85162),o=n(99372),i=n(72412);const c={};function s(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,s]=e;return s.value||s.simplified||s.detailed?a.createElement(l.Z,{value:n,label:o.gJ.get(n),default:s.default||0==t},s.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:c.smallTabs},a.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,i.Z)(s.simplified)),a.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,i.Z)(s.detailed)))):s.value):a.createElement(l.Z,{value:n,label:o.gJ.get(n),default:0==t},(0,i.Z)(s))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>u,ZP:()=>s});var a=n(67294),r=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var o=n(98839);const i={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},c=e=>e.none?i.None:e.pub||e.public?i.Public:e.prot||e.protected?i.Protected:e.priv||e.private?i.Private:i.Public;function s(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>c(e).Order<c(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function u(e){a.useContext(o.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const i=e.linkName||e.autoLink;!e.noLink&&i&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const s=(e,t,n)=>!0===e?a.createElement("span",{className:l[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:l.symbolProp},(e=>{const t=c(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),s(e.static,"modStatic","static"),s(e.constexpr,"modConstexpr","constexpr"),s(e.const,"modConst","const"),s(e.volatile,"modVolatile","volatile"),s(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:l.symbolName},t),a.createElement("td",{className:l.symbolDesc},(0,r.Z)(n)))}u.isMDXComponent=!0,s.isMDXComponent=!0,s.Symbol=u},18510:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(44996),l=n(34386),o=n(72412);const i="TooltipContent_Lvru",c="TooltipTitle_ukF2";function s(e){let{url:t,title:n,maxWidth:s,children:u}=e;let p=s||"clamp(250px, 25vw, 800px)";"string"==typeof p&&p.endsWith("vw")&&(p=`clamp(250px, ${p}, 800px)`);const d="function"==typeof n?a.createElement(n):n,m=(t||"").startsWith("/")?(0,r.Z)(t):t,f=t?a.createElement("a",{href:m,target:"_blank",rel:"noreferrer"},u):u;return a.createElement(l.Z,{componentsProps:{tooltip:{style:{maxWidth:p}}},title:a.createElement("span",{className:c},(0,o.Z)(d)),placement:"top",arrow:!0},a.createElement("span",{className:i},f))}s.isMDXComponent=!0},99372:(e,t,n)=>{n.d(t,{gJ:()=>u,eH:()=>f,U6:()=>d,OS:()=>m});var a=n(67294),r=n(95999);const l="markedText_c6kK",o="since_c1Q3",i="until_jXK6",c="removed_A_Kf",s="versionNumber_BiUX",u=new Map;function p(e){let{children:t,className:n}=e;return a.createElement("span",{className:l+(n?" "+n:"")},t)}function d(e){let{children:t,v:n}=e;return a.createElement(p,{className:o},t,"\xa0",a.createElement("span",{className:s},a.createElement("small",null,"(",u.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return a.createElement(p,{className:i},t,"\xa0",a.createElement("span",{className:s},a.createElement("small",null,"(",u.get(`until-${n}`),")")))}function f(e){let{children:t,v:n}=e;return a.createElement(p,{className:c},t,"\xa0",a.createElement("span",{className:s},a.createElement("small",null,"(",u.get(`removed-${n}`),")")))}u.set("cpp98","C++98"),u.set("cpp03","C++03"),u.set("cpp11","C++11"),u.set("cpp14","C++14"),u.set("cpp17","C++17"),u.set("cpp20","C++20"),u.set("cpp23","C++23"),u.set("deprecated-",a.createElement(r.Z,null,"deprecated")),u.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),u.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),u.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),u.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),u.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),u.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),u.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),u.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),u.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),u.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),u.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),u.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),u.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),u.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),u.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),u.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),u.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),u.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),u.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),u.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),u.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),u.set("removed-",a.createElement(r.Z,null,"deleted")),u.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),u.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),u.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),u.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),u.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),u.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),u.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},48775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"std/algo/ordinary/_codes/count/since-cpp17",id:"std/algo/ordinary/_codes/count/since-cpp17",title:"since-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/count/since-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/count",slug:"/std/algo/ordinary/_codes/count/since-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/count/since-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/count/since-cpp17.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class T >\ntypename iterator_traits<InputIt>::difference_type\n    count( InputIt first, InputIt last, const T& value );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt, class T >\ntypename iterator_traits<ForwardIt>::difference_type\n    count( ExecutionPolicy&& policy,\n           ForwardIt first, ForwardIt last, const T& value );\n")))}p.isMDXComponent=!0},48201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"std/algo/ordinary/_codes/count/since-cpp20",id:"std/algo/ordinary/_codes/count/since-cpp20",title:"since-cpp20",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/count/since-cpp20.mdx",sourceDirName:"std/algo/ordinary/_codes/count",slug:"/std/algo/ordinary/_codes/count/since-cpp20",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/count/since-cpp20",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/count/since-cpp20.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class T >\nconstexpr typename iterator_traits<InputIt>::difference_type\n    count( InputIt first, InputIt last, const T& value );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt, class T >\ntypename iterator_traits<ForwardIt>::difference_type\n    count( ExecutionPolicy&& policy,\n           ForwardIt first, ForwardIt last, const T& value );\n")))}p.isMDXComponent=!0},33739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"std/algo/ordinary/_codes/count/until-cpp17",id:"std/algo/ordinary/_codes/count/until-cpp17",title:"until-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/count/until-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/count",slug:"/std/algo/ordinary/_codes/count/until-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/count/until-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/count/until-cpp17.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class T >\ntypename iterator_traits<InputIt>::difference_type\n    count( InputIt first, InputIt last, const T& value );\n")))}p.isMDXComponent=!0},64033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>y,metadata:()=>v,toc:()=>k});var a=n(87462),r=n(67294),l=n(3905),o=n(55059),i=n(22307),c=n(99801),s=n(18510),u=n(99372),p=n(14064),d=n(33739),m=n(48775),f=n(48201);const y={title:"count algorithm",sidebar_label:"count(  )",description:"count algorithm C++ documentation",hide_title:!0,tags:["algorithm","count","number","quantity"],cppreference_origin_rel:"w/cpp/algorithm/count"},g=void 0,v={unversionedId:"std/algo/ordinary/count",id:"std/algo/ordinary/count",title:"count algorithm",description:"count algorithm C++ documentation",source:"@site/content/docs/std/algo/ordinary/count.mdx",sourceDirName:"std/algo/ordinary",slug:"/std/algo/ordinary/count",permalink:"/CppLangNet/docs/std/algo/ordinary/count",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/count.mdx",tags:[{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"count",permalink:"/CppLangNet/docs/tags/count"},{label:"number",permalink:"/CppLangNet/docs/tags/number"},{label:"quantity",permalink:"/CppLangNet/docs/tags/quantity"}],version:"current",frontMatter:{title:"count algorithm",sidebar_label:"count(  )",description:"count algorithm C++ documentation",hide_title:!0,tags:["algorithm","count","number","quantity"],cppreference_origin_rel:"w/cpp/algorithm/count"},sidebar:"defaultSidebar",previous:{title:"none_of(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/none_of"},next:{title:"count_if(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/count_if"}},b={},k=[{value:"Parameters",id:"parameters",level:3},{value:"Type requirements",id:"type-requirements",level:4},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Notes",id:"notes",level:3},{value:"Examples",id:"examples",level:3}],h={toc:k};function N(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdcount-algorithm"},"std::count() algorithm"),(0,l.kt)(c.Z,{content:{"since-cpp20":(0,l.kt)(f.default,{mdxType:"Signature_SinceCpp20"}),"since-cpp17":(0,l.kt)(m.default,{mdxType:"Signature_SinceCpp17"}),"until-cpp17":(0,l.kt)(d.default,{mdxType:"Signature_UntilCpp17"})},mdxType:"SwitchView"}),(0,l.kt)("p",null,"Returns the number of elements equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," in the range [",(0,l.kt)("inlineCode",{parentName:"p"},"first1"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last1"),")."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(1)")," Counts the elements that are equal to value (using ",(0,l.kt)("inlineCode",{parentName:"li"},"operator=="),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(2)")," Same as ",(0,l.kt)("strong",{parentName:"li"},"(1)"),", but executed according to policy.",(0,l.kt)("admonition",{parentName:"li",title:"Overload Resolution",type:"important"},(0,l.kt)("p",{parentName:"admonition"},"These overloads participate in overload resolution only if"),(0,l.kt)(u.OS,{v:"cpp20",mdxType:"Until"}," ",(0,l.kt)("code",null,"std::is_execution_policy_v<std::decay_t<ExecutionPolicy>>")," ")," ",(0,l.kt)(u.U6,{v:"cpp20",mdxType:"Since"}," ",(0,l.kt)("code",null,"std::is_execution_policy_v<std::remove_cvref_t<ExecutionPolicy>>")," ")," is ",(0,l.kt)("code",null,"true"),"."))),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(o.ZP,{mdxType:"SymbolTable"},(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)(r.Fragment,null," ",(0,l.kt)("code",null,"first")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last")," "),mdxType:"Symbol"},"The range of elements to examine."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"value"),mdxType:"Symbol"},"The value to search for."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"policy"),mdxType:"Symbol"},"The execution policy to use. See ",(0,l.kt)("a",{href:"#"},"execution policy")," for details.")),(0,l.kt)("h4",{id:"type-requirements"},"Type requirements"),(0,l.kt)(o.ZP,{mdxType:"SymbolTable"},(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"InputIt"),mdxType:"Symbol"},(0,l.kt)("a",{href:"/docs/named_req/LegacyInputIterator"},"LegacyInputIterator")),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"ForwardIt"),mdxType:"Symbol"},(0,l.kt)("a",{href:"/docs/named_req/LegacyForwardIterator"},"LegacyForwardIterator"))),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(1 - 2)")," The number of elements that are equal to ",(0,l.kt)("inlineCode",{parentName:"li"},"value"),".")),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"Given ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"std::distance(first, last)"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(1 - 2)")," exactly N comparisons with ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," using ",(0,l.kt)("inlineCode",{parentName:"li"},"operator=="))),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,"The overloads with a template parameter named ",(0,l.kt)("inlineCode",{parentName:"p"},"ExecutionPolicy")," report errors as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If execution of a function invoked as part of the algorithm throws an exception and ",(0,l.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy")," is one of the ",(0,l.kt)("a",{parentName:"li",href:"#"},(0,l.kt)("strong",{parentName:"a"},"standard policies")),", ",(0,l.kt)("a",{parentName:"li",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"std::terminate"))," is called.\nFor any other ",(0,l.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy"),", the behavior is ",(0,l.kt)(s.Z,{title:(0,l.kt)(p.ZP,{mdxType:"Term_ImplementationDefined"}),mdxType:"Tooltip"},(0,l.kt)("strong",{parentName:"li"},"implementation-defined")),"."),(0,l.kt)("li",{parentName:"ul"},"If the algorithm fails to allocate memory, ",(0,l.kt)("inlineCode",{parentName:"li"},"std::bad_alloc")," is thrown.")),(0,l.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"count (1)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"template<class InputIt, class T>\ntypename iterator_traits<InputIt>::difference_type\n    count(InputIt first, InputIt last, const T& value)\n{\n    typename iterator_traits<InputIt>::difference_type ret = 0;\n    for (; first != last; ++first)\n        if (*first == value)\n            ++ret;\n    return ret;\n}\n"))),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("p",null,"If you want to obtain the number of elements in range [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),") without any additional criteria, use ",(0,l.kt)("a",{parentName:"p",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"std::distance"))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <algorithm>\n#include <array>\n#include <iostream>\n#include <iterator>\n\nint main()\n{\n    constexpr std::array v {1, 2, 3, 4, 4, 3, 7, 8, 9, 10};\n    std::cout << "v: ";\n    std::copy(v.cbegin(), v.cend(), std::ostream_iterator<int>(std::cout, " "));\n    std::cout << \'\\n\';\n\n    // determine how many integers match a target value.\n    for (const int target: {3, 4, 5})\n    {\n        const int num_items = std::count(v.cbegin(), v.cend(), target);\n        std::cout << "number: " << target << ", count: " << num_items << \'\\n\';\n    }\n\n    // use a lambda expression to count elements divisible by 4.\n    int count_div4 = std::count_if(v.begin(), v.end(), [](int i) { return i % 4 == 0; });\n    std::cout << "numbers divisible by four: " << count_div4 << \'\\n\';\n\n    // A simplified version of `distance` with O(N) complexity:\n    auto distance = [](auto first, auto last)\n    {\n        return std::count_if(first, last, [](auto) { return true; });\n    };\n    static_assert(distance(v.begin(), v.end()) == 10);\n}\n'))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},"v: 1 2 3 4 4 3 7 8 9 10\nnumber: 3, count: 2\nnumber: 4, count: 2\nnumber: 5, count: 0\nnumbers divisible by four: 3\n")))))}N.isMDXComponent=!0}}]);