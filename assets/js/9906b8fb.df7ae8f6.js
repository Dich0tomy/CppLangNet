"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[42147],{14064:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aspects and semantics that are ",(0,r.kt)("strong",{parentName:"p"},"implementation-defined")," are not guaranteed by\nthe standard in any way, rather they are left out to the implementation (compiler vendor standard library, most of the times).\nFor example, most mathematical functions incur some ",(0,r.kt)("strong",{parentName:"p"},"implementation-defined")," behaviour."))}l.isMDXComponent=!0},98088:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"Undefined behaviour")," is a property of a program that's incorrect, but likely compiles. It is incorrect in a way, that the error is only invoked in certain conditions at runtime.",(0,r.kt)("p",null,"Common cases include: ",(0,r.kt)("strong",{parentName:"p"},"out of bounds access"),", ",(0,r.kt)("strong",{parentName:"p"},"reading uninitialized objects"),", ",(0,r.kt)("strong",{parentName:"p"},"dangling pointers/references")," or ",(0,r.kt)("strong",{parentName:"p"},"signed overflow"),"."))}l.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(76775),s=n(91980),c=n(67392),d=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=s??p;return u({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var k=n(72389);const h="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==i&&(p(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:u,onClick:m},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(87462),r=n(67294);const o="columns_Terr";function l(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:o,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}l.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(74866),o=n(85162),l=n(99372),i=n(72412);const s={};function c(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?a.createElement(o.Z,{value:n,label:l.gJ.get(n),default:c.default||0==t},c.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:s.smallTabs},a.createElement(o.Z,{value:"simplified",label:"Simplified",default:!0},(0,i.Z)(c.simplified)),a.createElement(o.Z,{value:"detailed",label:"Detailed"},(0,i.Z)(c.detailed)))):c.value):a.createElement(o.Z,{value:n,label:l.gJ.get(n),default:0==t},(0,i.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>d,ZP:()=>c});var a=n(67294),r=n(72412);const o={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var l=n(98839);const i={None:{Order:0,ShortName:"",FullName:"",Style:o.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:o.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:o.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:o.accessPrivate}},s=e=>e.none?i.None:e.pub||e.public?i.Public:e.prot||e.protected?i.Protected:e.priv||e.private?i.Private:i.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>s(e).Order<s(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:o.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function d(e){a.useContext(l.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const i=e.linkName||e.autoLink;!e.noLink&&i&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?a.createElement("span",{className:o[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:o.symbolProp},(e=>{const t=s(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:o.symbolName},t),a.createElement("td",{className:o.symbolDesc},(0,r.Z)(n)))}d.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=d},18510:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(44996),o=n(34386),l=n(72412);const i="TooltipContent_Lvru",s="TooltipTitle_ukF2";function c(e){let{url:t,title:n,maxWidth:c,children:d}=e;let p=c||"clamp(250px, 25vw, 800px)";"string"==typeof p&&p.endsWith("vw")&&(p=`clamp(250px, ${p}, 800px)`);const m="function"==typeof n?a.createElement(n):n,u=(t||"").startsWith("/")?(0,r.Z)(t):t,f=t?a.createElement("a",{href:u,target:"_blank",rel:"noreferrer"},d):d;return a.createElement(o.Z,{componentsProps:{tooltip:{style:{maxWidth:p}}},title:a.createElement("span",{className:s},(0,l.Z)(m)),placement:"top",arrow:!0},a.createElement("span",{className:i},f))}c.isMDXComponent=!0},99372:(e,t,n)=>{n.d(t,{gJ:()=>d,eH:()=>f,U6:()=>m,OS:()=>u});var a=n(67294),r=n(95999);const o="markedText_c6kK",l="since_c1Q3",i="until_jXK6",s="removed_A_Kf",c="versionNumber_BiUX",d=new Map;function p(e){let{children:t,className:n}=e;return a.createElement("span",{className:o+(n?" "+n:"")},t)}function m(e){let{children:t,v:n}=e;return a.createElement(p,{className:l},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",d.get(`since-${n}`),")")))}function u(e){let{children:t,v:n}=e;return a.createElement(p,{className:i},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",d.get(`until-${n}`),")")))}function f(e){let{children:t,v:n}=e;return a.createElement(p,{className:s},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",d.get(`removed-${n}`),")")))}d.set("cpp98","C++98"),d.set("cpp03","C++03"),d.set("cpp11","C++11"),d.set("cpp14","C++14"),d.set("cpp17","C++17"),d.set("cpp20","C++20"),d.set("cpp23","C++23"),d.set("deprecated-",a.createElement(r.Z,null,"deprecated")),d.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),d.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),d.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),d.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),d.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),d.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),d.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),d.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),d.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),d.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),d.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),d.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),d.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),d.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),d.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),d.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),d.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),d.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),d.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),d.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),d.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),d.set("removed-",a.createElement(r.Z,null,"deleted")),d.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),d.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),d.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),d.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),d.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),d.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),d.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},96204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"std/algo/ordinary/_codes/rotate/since-cpp17",id:"std/algo/ordinary/_codes/rotate/since-cpp17",title:"since-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/rotate/since-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/rotate",slug:"/std/algo/ordinary/_codes/rotate/since-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/rotate/since-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/rotate/since-cpp17.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class ForwardIt >\nForwardIt rotate( ForwardIt first, ForwardIt middle, ForwardIt last );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt >\nForwardIt rotate( ExecutionPolicy&& policy,\n                  ForwardIt first, ForwardIt middle, ForwardIt last );\n")))}p.isMDXComponent=!0},14530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"std/algo/ordinary/_codes/rotate/since-cpp20",id:"std/algo/ordinary/_codes/rotate/since-cpp20",title:"since-cpp20",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/rotate/since-cpp20.mdx",sourceDirName:"std/algo/ordinary/_codes/rotate",slug:"/std/algo/ordinary/_codes/rotate/since-cpp20",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/rotate/since-cpp20",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/rotate/since-cpp20.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class ForwardIt >\nconstexpr ForwardIt rotate( ForwardIt first, ForwardIt middle, ForwardIt last );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt >\nForwardIt rotate( ExecutionPolicy&& policy,\n                  ForwardIt first, ForwardIt middle, ForwardIt last );\n")))}p.isMDXComponent=!0},43112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"std/algo/ordinary/_codes/rotate/until-cpp17",id:"std/algo/ordinary/_codes/rotate/until-cpp17",title:"until-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/rotate/until-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/rotate",slug:"/std/algo/ordinary/_codes/rotate/until-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/rotate/until-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/rotate/until-cpp17.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class ForwardIt >\nForwardIt rotate( ForwardIt first, ForwardIt middle, ForwardIt last );\n")))}p.isMDXComponent=!0},59745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>C,frontMatter:()=>k,metadata:()=>y,toc:()=>b});var a=n(87462),r=n(67294),o=n(3905),l=n(55059),i=n(22307),s=n(99801),c=n(18510),d=n(99372),p=n(98088),m=n(14064),u=n(43112),f=n(96204),g=n(14530);const k={title:"rotate algorithm",sidebar_label:"rotate(  )",description:"rotate algorithm C++ documentation",hide_title:!0,tags:["algorithm","rotate","erase","delete"],cppreference_origin_rel:"w/cpp/algorithm/rotate"},h=void 0,y={unversionedId:"std/algo/ordinary/rotate",id:"std/algo/ordinary/rotate",title:"rotate algorithm",description:"rotate algorithm C++ documentation",source:"@site/content/docs/std/algo/ordinary/rotate.mdx",sourceDirName:"std/algo/ordinary",slug:"/std/algo/ordinary/rotate",permalink:"/CppLangNet/docs/std/algo/ordinary/rotate",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/rotate.mdx",tags:[{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"rotate",permalink:"/CppLangNet/docs/tags/rotate"},{label:"erase",permalink:"/CppLangNet/docs/tags/erase"},{label:"delete",permalink:"/CppLangNet/docs/tags/delete"}],version:"current",frontMatter:{title:"rotate algorithm",sidebar_label:"rotate(  )",description:"rotate algorithm C++ documentation",hide_title:!0,tags:["algorithm","rotate","erase","delete"],cppreference_origin_rel:"w/cpp/algorithm/rotate"},sidebar:"defaultSidebar",previous:{title:"iter_swap(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/iter_swap"},next:{title:"rotate_copy(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/rotate_copy"}},v={},b=[{value:"Parameters",id:"parameters",level:3},{value:"Type requirements",id:"type-requirements",level:4},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Notes",id:"notes",level:3},{value:"Examples",id:"examples",level:3}],N={toc:b};function C(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stdrotate-algorithm"},"std::rotate() algorithm"),(0,o.kt)(s.Z,{content:{"since-cpp20":(0,o.kt)(g.default,{mdxType:"Signature_SinceCpp20"}),"since-cpp17":(0,o.kt)(f.default,{mdxType:"Signature_SinceCpp17"}),"until-cpp17":(0,o.kt)(u.default,{mdxType:"Signature_UntilCpp17"})},mdxType:"SwitchView"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"(1)")," Performs a left rotation on a range of elements."),(0,o.kt)("p",{parentName:"li"},"Specifically, swaps the elements in the range [",(0,o.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"last"),") in such a way that the elements in [",(0,o.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"middle"),") are placed after the elements in [",(0,o.kt)("inlineCode",{parentName:"p"},"middle"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"last"),") while the orders of the elements in both ranges are preserved.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,o.kt)("strong",{parentName:"p"},"(1)"),", but executed according to ",(0,o.kt)("inlineCode",{parentName:"p"},"policy"),"."),(0,o.kt)("admonition",{parentName:"li",title:"Overload Resolution",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"These overloads participate in overload resolution only if"),(0,o.kt)(d.OS,{v:"cpp20",mdxType:"Until"}," ",(0,o.kt)("code",null,"std::is_execution_policy_v<std::decay_t<ExecutionPolicy>>")," ")," ",(0,o.kt)(d.U6,{v:"cpp20",mdxType:"Since"}," ",(0,o.kt)("code",null,"std::is_execution_policy_v<std::rotate_cvref_t<ExecutionPolicy>>")," ")," is ",(0,o.kt)("code",null,"true"),"."))),(0,o.kt)("admonition",{title:"Undefined Behaviour",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"If [",(0,o.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"middle"),") or [",(0,o.kt)("inlineCode",{parentName:"p"},"middle"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"last"),") is not a valid range, the ",(0,o.kt)(c.Z,{title:(0,o.kt)(p.ZP,{mdxType:"Term_UndefinedBehaviour"}),mdxType:"Tooltip"},"behavior is undefined."))),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)(l.ZP,{mdxType:"SymbolTable"},(0,o.kt)(l.mN,{none:!0,noLink:!0,name:(0,o.kt)("code",null,"first"),mdxType:"Symbol"},"The beginning of the original range."),(0,o.kt)(l.mN,{none:!0,noLink:!0,name:(0,o.kt)("code",null,"middle"),mdxType:"Symbol"},"Iterator to the element that should appear at the beginning of the rotated range."),(0,o.kt)(l.mN,{none:!0,noLink:!0,name:(0,o.kt)("code",null,"last"),mdxType:"Symbol"},"The end of the original range."),(0,o.kt)(l.mN,{none:!0,noLink:!0,name:(0,o.kt)("code",null,"policy"),mdxType:"Symbol"},"The execution policy to use. See ",(0,o.kt)("a",{href:"#"},"execution policy")," for details.")),(0,o.kt)("h4",{id:"type-requirements"},"Type requirements"),(0,o.kt)(l.ZP,{mdxType:"SymbolTable"},(0,o.kt)(l.mN,{none:!0,noLink:!0,name:(0,o.kt)("code",null,"ForwardIt"),mdxType:"Symbol"},(0,o.kt)("a",{href:"/docs/named_req/LegacyForwardIterator"},"LegacyForwardIterator")," ",(0,o.kt)("br",null),(0,o.kt)("a",{href:"/docs/named_req/ValueSwappable"},"ValueSwappable")," ",(0,o.kt)("br",null)),(0,o.kt)(l.mN,{none:!0,noLink:!0,name:(0,o.kt)(r.Fragment,null," >",(0,o.kt)("code",null,"*first")," ",(0,o.kt)("br",null)," ",(0,o.kt)("code",null,"*middle")," ",(0,o.kt)("br",null)," ",(0,o.kt)("code",null,"last")," "),mdxType:"Symbol"},(0,o.kt)("a",{href:"/docs/named_req/MoveAssignable"},"MoveAssignable")," ",(0,o.kt)("br",null),(0,o.kt)("a",{href:"/docs/named_req/MoveConstructible"},"MoveConstructible"))),(0,o.kt)("h3",{id:"return-value"},"Return value"),(0,o.kt)("p",null,"An iterator that is equal to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"last"),", if ",(0,o.kt)("inlineCode",{parentName:"li"},"first == middle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"first"),", if ",(0,o.kt)("inlineCode",{parentName:"li"},"middle == last")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"first + (last - middle)")," otherwise (the new location of the element pointed by ",(0,o.kt)("inlineCode",{parentName:"li"},"first"),")",(0,o.kt)("br",{parentName:"li"}),"(the + and - operations are not required to be supported, they are only used to represent to position of the returned iterator).")),(0,o.kt)("h3",{id:"complexity"},"Complexity"),(0,o.kt)("p",null,"Linear in the distance between ",(0,o.kt)("inlineCode",{parentName:"p"},"first")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"last"),"."),(0,o.kt)("h3",{id:"exceptions"},"Exceptions"),(0,o.kt)("p",null,"The overloads with a template parameter named ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecutionPolicy")," report errors as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If execution of a function invoked as part of the algorithm throws an exception and ",(0,o.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy")," is one of the ",(0,o.kt)("a",{parentName:"li",href:"#"},(0,o.kt)("strong",{parentName:"a"},"standard policies")),", ",(0,o.kt)("a",{parentName:"li",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"std::terminate"))," is called.\nFor any other ",(0,o.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy"),", the behavior is ",(0,o.kt)(c.Z,{title:(0,o.kt)(m.ZP,{mdxType:"Term_ImplementationDefined"}),mdxType:"Tooltip"},(0,o.kt)("strong",{parentName:"li"},"implementation-defined")),"."),(0,o.kt)("li",{parentName:"ul"},"If the algorithm fails to allocate memory, ",(0,o.kt)("inlineCode",{parentName:"li"},"std::bad_alloc")," is thrown.")),(0,o.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"rotate (1)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'template<class ForwardIt>\nconstexpr // since C++20\nForwardIt rotate(ForwardIt first, ForwardIt middle, ForwardIt last)\n{\n    if (first == middle)\n        return last;\n\n    if (middle == last)\n        return first;\n\n    ForwardIt write = first;\n    ForwardIt next_read = first; // read position for when "read" hits "last"\n\n    for (ForwardIt read = middle; read != last; ++write, ++read)\n    {\n        if (write == next_read)\n            next_read = read; // track where "first" went\n        std::iter_swap(write, read);\n    }\n\n    // rotate the remaining sequence into place\n    rotate(write, next_read, last);\n    return write;\n}\n'))),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"std::rotate"))," has better efficiency on common implementations if\n",(0,o.kt)("inlineCode",{parentName:"p"},"ForwardIt")," satisfies ",(0,o.kt)("a",{parentName:"p",href:"/docs/named_req/LegacyBidirectionalIterator"},"LegacyBidirectionalIterator")," or (better) ",(0,o.kt)("a",{parentName:"p",href:"/docs/named_req/LegacyRandomAccessIterator"},"LegacyRandomAccessIterator"),"."),(0,o.kt)("p",null,"Implementations (e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp"},(0,o.kt)("strong",{parentName:"a"},"MSVC STL")),") may enable vectorization w\nhen the iterator type satisfies ",(0,o.kt)("a",{parentName:"p",href:"/docs/named_req/LegacyContiguousIterator"},"LegacyContiguousIterator")," and swapping its value type calls neither non-trivial special member function nor ",(0,o.kt)("a",{parentName:"p",href:"#"},"ADL"),"-found swap."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"std::rotate"))," is a common building block in many algorithms. This example demonstrates insertion sort."),(0,o.kt)(i.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <algorithm>\n#include <iostream>\n#include <vector>\n\nauto print = [](auto const remark, auto const& v)\n{\n    std::cout << remark;\n    for (auto n : v)\n        std::cout << n << \' \';\n    std::cout << \'\\n\';\n};\n\nint main()\n{\n    std::vector<int> v {2, 4, 2, 0, 5, 10, 7, 3, 7, 1};\n    print("before sort:\\t\\t", v);\n\n    // insertion sort\n    for (auto i = v.begin(); i != v.end(); ++i)\n        std::rotate(std::upper_bound(v.begin(), i, *i), i, i + 1);\n    print("after sort:\\t\\t", v);\n\n    // simple rotation to the left\n    std::rotate(v.begin(), v.begin() + 1, v.end());\n    print("simple rotate left:\\t", v);\n\n    // simple rotation to the right\n    std::rotate(v.rbegin(), v.rbegin() + 1, v.rend());\n    print("simple rotate right:\\t", v);\n}\n'))),(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},"before sort:        2 4 2 0 5 10 7 3 7 1\nafter sort:     0 1 2 2 3 4 5 7 7 10\nsimple rotate left: 1 2 2 3 4 5 7 7 10 0\nsimple rotate right:    0 1 2 2 3 4 5 7 7 10\n")))))}C.isMDXComponent=!0}}]);