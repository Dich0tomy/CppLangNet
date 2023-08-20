"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[22546],{14064:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aspects and semantics that are ",(0,r.kt)("strong",{parentName:"p"},"implementation-defined")," are not guaranteed by\nthe standard in any way, rather they are left out to the implementation (compiler vendor standard library, most of the times).\nFor example, most mathematical functions incur some ",(0,r.kt)("strong",{parentName:"p"},"implementation-defined")," behaviour."))}o.isMDXComponent=!0},98088:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"Undefined behaviour")," is a property of a program that's incorrect, but likely compiles. It is incorrect in a way, that the error is only invoked in certain conditions at runtime.",(0,r.kt)("p",null,"Common cases include: ",(0,r.kt)("strong",{parentName:"p"},"out of bounds access"),", ",(0,r.kt)("strong",{parentName:"p"},"reading uninitialized objects"),", ",(0,r.kt)("strong",{parentName:"p"},"dangling pointers/references")," or ",(0,r.kt)("strong",{parentName:"p"},"signed overflow"),"."))}o.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),i=n(76775),c=n(91980),s=n(67392),p=n(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,s]=f({queryString:n,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),y=(()=>{const e=c??u;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var y=n(72389);const k="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==i&&(u(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",g,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function _(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(_,(0,a.Z)({},e,t)))}function N(e){const t=(0,y.Z)();return r.createElement(b,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(87462),r=n(67294);const l="columns_Terr";function o(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}o.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(74866),l=n(85162),o=n(99372),i=n(72412);const c={};function s(e){const t=e.content||{};return a.createElement(r.Z,null,Object.entries(t).map(((e,t)=>{let[n,s]=e;return s.value||s.simplified||s.detailed?a.createElement(l.Z,{value:n,label:o.gJ.get(n),default:s.default||0==t},s.simplified?a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"view_mode",className:c.smallTabs},a.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,i.Z)(s.simplified)),a.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,i.Z)(s.detailed)))):s.value):a.createElement(l.Z,{value:n,label:o.gJ.get(n),default:0==t},(0,i.Z)(s))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>p,ZP:()=>s});var a=n(67294),r=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var o=n(98839);const i={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},c=e=>e.none?i.None:e.pub||e.public?i.Public:e.prot||e.protected?i.Protected:e.priv||e.private?i.Private:i.Public;function s(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>c(e).Order<c(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function p(e){a.useContext(o.z);let t=(0,r.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const i=e.linkName||e.autoLink;!e.noLink&&i&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const s=(e,t,n)=>!0===e?a.createElement("span",{className:l[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:l.symbolProp},(e=>{const t=c(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),s(e.static,"modStatic","static"),s(e.constexpr,"modConstexpr","constexpr"),s(e.const,"modConst","const"),s(e.volatile,"modVolatile","volatile"),s(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:l.symbolName},t),a.createElement("td",{className:l.symbolDesc},(0,r.Z)(n)))}p.isMDXComponent=!0,s.isMDXComponent=!0,s.Symbol=p},18510:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(44996),l=n(34386),o=n(72412);const i="TooltipContent_Lvru",c="TooltipTitle_ukF2";function s(e){let{url:t,title:n,maxWidth:s,children:p}=e;let u=s||"clamp(250px, 25vw, 800px)";"string"==typeof u&&u.endsWith("vw")&&(u=`clamp(250px, ${u}, 800px)`);const d="function"==typeof n?a.createElement(n):n,m=(t||"").startsWith("/")?(0,r.Z)(t):t,f=t?a.createElement("a",{href:m,target:"_blank",rel:"noreferrer"},p):p;return a.createElement(l.Z,{componentsProps:{tooltip:{style:{maxWidth:u}}},title:a.createElement("span",{className:c},(0,o.Z)(d)),placement:"top",arrow:!0},a.createElement("span",{className:i},f))}s.isMDXComponent=!0},99372:(e,t,n)=>{n.d(t,{gJ:()=>p,eH:()=>f,U6:()=>d,OS:()=>m});var a=n(67294),r=n(95999);const l="markedText_c6kK",o="since_c1Q3",i="until_jXK6",c="removed_A_Kf",s="versionNumber_BiUX",p=new Map;function u(e){let{children:t,className:n}=e;return a.createElement("span",{className:l+(n?" "+n:"")},t)}function d(e){let{children:t,v:n}=e;return a.createElement(u,{className:o},t,"\xa0",a.createElement("span",{className:s},a.createElement("small",null,"(",p.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return a.createElement(u,{className:i},t,"\xa0",a.createElement("span",{className:s},a.createElement("small",null,"(",p.get(`until-${n}`),")")))}function f(e){let{children:t,v:n}=e;return a.createElement(u,{className:c},t,"\xa0",a.createElement("span",{className:s},a.createElement("small",null,"(",p.get(`removed-${n}`),")")))}p.set("cpp98","C++98"),p.set("cpp03","C++03"),p.set("cpp11","C++11"),p.set("cpp14","C++14"),p.set("cpp17","C++17"),p.set("cpp20","C++20"),p.set("cpp23","C++23"),p.set("deprecated-",a.createElement(r.Z,null,"deprecated")),p.set("deprecated-cpp98",a.createElement(r.Z,null,"deprecated in C++98")),p.set("deprecated-cpp03",a.createElement(r.Z,null,"deprecated in C++03")),p.set("deprecated-cpp11",a.createElement(r.Z,null,"deprecated in C++11")),p.set("deprecated-cpp14",a.createElement(r.Z,null,"deprecated in C++14")),p.set("deprecated-cpp17",a.createElement(r.Z,null,"deprecated in C++17")),p.set("deprecated-cpp20",a.createElement(r.Z,null,"deprecated in C++20")),p.set("deprecated-cpp23",a.createElement(r.Z,null,"deprecated in C++23")),p.set("until-cpp98",a.createElement(r.Z,null,"until C++98")),p.set("until-cpp03",a.createElement(r.Z,null,"until C++03")),p.set("until-cpp11",a.createElement(r.Z,null,"until C++11")),p.set("until-cpp14",a.createElement(r.Z,null,"until C++14")),p.set("until-cpp17",a.createElement(r.Z,null,"until C++17")),p.set("until-cpp20",a.createElement(r.Z,null,"until C++20")),p.set("until-cpp23",a.createElement(r.Z,null,"until C++23")),p.set("since-cpp98",a.createElement(r.Z,null,"since C++98")),p.set("since-cpp03",a.createElement(r.Z,null,"since C++03")),p.set("since-cpp11",a.createElement(r.Z,null,"since C++11")),p.set("since-cpp14",a.createElement(r.Z,null,"since C++14")),p.set("since-cpp17",a.createElement(r.Z,null,"since C++17")),p.set("since-cpp20",a.createElement(r.Z,null,"since C++20")),p.set("since-cpp23",a.createElement(r.Z,null,"since C++23")),p.set("removed-",a.createElement(r.Z,null,"deleted")),p.set("removed-cpp98",a.createElement(r.Z,null,"removed in C++98")),p.set("removed-cpp03",a.createElement(r.Z,null,"removed in C++03")),p.set("removed-cpp11",a.createElement(r.Z,null,"removed in C++11")),p.set("removed-cpp14",a.createElement(r.Z,null,"removed in C++14")),p.set("removed-cpp17",a.createElement(r.Z,null,"removed in C++17")),p.set("removed-cpp20",a.createElement(r.Z,null,"removed in C++20")),p.set("removed-cpp23",a.createElement(r.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},68349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"std/algo/ordinary/_codes/for_each_n/since-cpp17",id:"std/algo/ordinary/_codes/for_each_n/since-cpp17",title:"since-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/for_each_n/since-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/for_each_n",slug:"/std/algo/ordinary/_codes/for_each_n/since-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/for_each_n/since-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/for_each_n/since-cpp17.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class Size, class UnaryFunction >\nInputIt for_each_n( InputIt first, Size n, UnaryFunction f );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt, class Size, class UnaryFunction2 >\nForwardIt for_each_n( ExecutionPolicy&& policy,\n                      ForwardIt first, Size n, UnaryFunction2 f );\n")))}u.isMDXComponent=!0},37883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"std/algo/ordinary/_codes/for_each_n/since-cpp20",id:"std/algo/ordinary/_codes/for_each_n/since-cpp20",title:"since-cpp20",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/for_each_n/since-cpp20.mdx",sourceDirName:"std/algo/ordinary/_codes/for_each_n",slug:"/std/algo/ordinary/_codes/for_each_n/since-cpp20",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/for_each_n/since-cpp20",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/for_each_n/since-cpp20.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class InputIt, class Size, class UnaryFunction >\nconstexpr InputIt for_each_n( InputIt first, Size n, UnaryFunction f );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt, class Size, class UnaryFunction2 >\nForwardIt for_each_n( ExecutionPolicy&& policy,\n                      ForwardIt first, Size n, UnaryFunction2 f );\n")))}u.isMDXComponent=!0},79422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>_,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var a=n(87462),r=(n(67294),n(3905)),l=n(55059),o=n(22307),i=n(99801),c=n(18510),s=n(99372),p=n(14064),u=n(98088),d=n(68349),m=n(37883);const f={title:"for_each_n algorithm",sidebar_label:"for_each_n(  )",description:"for_each_n algorithm C++ documentation",hide_title:!0,tags:["algorithm","for_each_n","each","every","foreach"],cppreference_origin_rel:"w/cpp/algorithm/for_each_n"},h=void 0,y={unversionedId:"std/algo/ordinary/for_each_n",id:"std/algo/ordinary/for_each_n",title:"for_each_n algorithm",description:"for_each_n algorithm C++ documentation",source:"@site/content/docs/std/algo/ordinary/for_each_n.mdx",sourceDirName:"std/algo/ordinary",slug:"/std/algo/ordinary/for_each_n",permalink:"/CppLangNet/docs/std/algo/ordinary/for_each_n",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/for_each_n.mdx",tags:[{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"for_each_n",permalink:"/CppLangNet/docs/tags/for-each-n"},{label:"each",permalink:"/CppLangNet/docs/tags/each"},{label:"every",permalink:"/CppLangNet/docs/tags/every"},{label:"foreach",permalink:"/CppLangNet/docs/tags/foreach"}],version:"current",frontMatter:{title:"for_each_n algorithm",sidebar_label:"for_each_n(  )",description:"for_each_n algorithm C++ documentation",hide_title:!0,tags:["algorithm","for_each_n","each","every","foreach"],cppreference_origin_rel:"w/cpp/algorithm/for_each_n"},sidebar:"defaultSidebar",previous:{title:"for_each(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/for_each"},next:{title:"ranges::shuffle(  )",permalink:"/CppLangNet/docs/std/algo/ranges/shuffle"}},k={},g=[{value:"Parameters",id:"parameters",level:3},{value:"Type requirements",id:"type-requirements",level:4},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Examples",id:"examples",level:3}],v={toc:g};function _(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stdfor_each_n-algorithm"},"std::for_each_n() algorithm"),(0,r.kt)(i.Z,{content:{"since-cpp20":(0,r.kt)(m.default,{mdxType:"Signature_SinceCpp20"}),"since-cpp17":(0,r.kt)(d.default,{mdxType:"Signature_SinceCpp17"})},mdxType:"SwitchView"}),(0,r.kt)("p",null,"Applies the given function to all elements in in range defined by an iterator and a size."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"(1)")," Applies the given function object ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," to the result of dereferencing every iterator in the range [",(0,r.kt)("inlineCode",{parentName:"p"},"first"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"first + n"),"), ",(0,r.kt)("strong",{parentName:"p"},"in order"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,r.kt)("strong",{parentName:"p"},"(1)"),", but executed according to policy."),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"There is no guarantee the function will be applied to elements in order.")),(0,r.kt)("admonition",{parentName:"li",title:"Overload Resolution",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"These overloads participate in overload resolution only if"),(0,r.kt)(s.OS,{v:"cpp20",mdxType:"Until"}," ",(0,r.kt)("code",null,"std::is_execution_policy_v<std::decay_t<ExecutionPolicy>>")," ")," ",(0,r.kt)(s.U6,{v:"cpp20",mdxType:"Since"}," ",(0,r.kt)("code",null,"std::is_execution_policy_v<std::remove_cvref_t<ExecutionPolicy>>")," ")," is ",(0,r.kt)("code",null,"true"),"."))),(0,r.kt)("p",null,"For both overloads, if the iterator type (InputIt/ForwardIt) is mutable, ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," may modify the elements of the range.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," returns a result, the result is ignored."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Unlike the rest of the parallel algorithms, ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"for_each_n"))," is ",(0,r.kt)("strong",{parentName:"p"},"not")," allowed to make copies of the elements in the sequence even if they are ",(0,r.kt)("a",{parentName:"p",href:"/docs/named_req/TriviallyCopyable"},"TriviallyCopyable"),".")),(0,r.kt)("admonition",{title:"Undefined Behaviour",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," is less than zero, the ",(0,r.kt)(c.Z,{title:u.ZP,mdxType:"Tooltip"},"behavior is undefined"),".")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)(l.ZP,{mdxType:"SymbolTable"},(0,r.kt)(l.mN,{none:!0,noLink:!0,name:(0,r.kt)("code",null,"first"),mdxType:"Symbol"},"The beginning of the range to apply the function to."),(0,r.kt)(l.mN,{none:!0,noLink:!0,name:(0,r.kt)("code",null,"n"),mdxType:"Symbol"},"The number of elements to apply the function to."),(0,r.kt)(l.mN,{none:!0,noLink:!0,name:(0,r.kt)("code",null,"policy"),mdxType:"Symbol"},"The execution policy to use. See ",(0,r.kt)("a",{href:"#"},"execution policy")," for details."),(0,r.kt)(l.mN,{none:!0,noLink:!0,name:(0,r.kt)("code",null,"f"),mdxType:"Symbol"},(0,r.kt)("p",null,"Function object, to be applied to every element of the range."),(0,r.kt)("p",null,"The signature of the function should be equivalent to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void fun(const Type& a);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The signature does not need to have ",(0,r.kt)("inlineCode",{parentName:"li"},"const&"),"."),(0,r.kt)("li",{parentName:"ul"},"The type ",(0,r.kt)("inlineCode",{parentName:"li"},"Type")," must be such that an object of type ",(0,r.kt)("inlineCode",{parentName:"li"},"InputIt")," can be dereferenced and then implicitly converted to ",(0,r.kt)("inlineCode",{parentName:"li"},"Type"),".")))),(0,r.kt)("h4",{id:"type-requirements"},"Type requirements"),(0,r.kt)(l.ZP,{mdxType:"SymbolTable"},(0,r.kt)(l.mN,{none:!0,noLink:!0,name:(0,r.kt)("code",null,"InputIt"),mdxType:"Symbol"},(0,r.kt)("a",{href:"/docs/named_req/LegacyInputIterator"},"LegacyInputIterator")),(0,r.kt)(l.mN,{none:!0,noLink:!0,name:(0,r.kt)("code",null,"ForwardIt"),mdxType:"Symbol"},(0,r.kt)("a",{href:"/docs/named_req/LegacyForwardIterator"},"LegacyForwardIterator")),(0,r.kt)(l.mN,{none:!0,noLink:!0,name:(0,r.kt)("code",null,"UnaryFunction"),mdxType:"Symbol"},(0,r.kt)("a",{href:"/docs/named_req/MoveConstructible"},"MoveConstructible")),(0,r.kt)(l.mN,{none:!0,noLink:!0,name:(0,r.kt)("code",null,"UnaryFunction2"),mdxType:"Symbol"},(0,r.kt)("a",{href:"/docs/named_req/CopyConstructible"},"CopyConstructible"))),(0,r.kt)("h3",{id:"return-value"},"Return value"),(0,r.kt)("p",null,"An iterator equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"first + n"),", or more formally, to ",(0,r.kt)("inlineCode",{parentName:"p"},"std::advance(first, n)"),"."),(0,r.kt)("h3",{id:"complexity"},"Complexity"),(0,r.kt)("p",null,"Exactly ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," applications of ",(0,r.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,r.kt)("h3",{id:"exceptions"},"Exceptions"),(0,r.kt)("p",null,"The overloads with a template parameter named ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionPolicy")," report errors as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If execution of a function invoked as part of the algorithm throws an exception and ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy")," is one of the ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("strong",{parentName:"a"},"standard policies")),", ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"std::terminate"))," is called.\nFor any other ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy"),", the behavior is ",(0,r.kt)(c.Z,{title:(0,r.kt)(p.ZP,{mdxType:"Term_ImplementationDefined"}),mdxType:"Tooltip"},(0,r.kt)("strong",{parentName:"li"},"implementation-defined")),"."),(0,r.kt)("li",{parentName:"ul"},"If the algorithm fails to allocate memory, ",(0,r.kt)("inlineCode",{parentName:"li"},"std::bad_alloc")," is thrown.")),(0,r.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"for_each_n (1)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"template<class InputIt, class Size, class UnaryFunction>\nInputIt for_each_n(InputIt first, Size n, UnaryFunction f)\n{\n    for (Size i = 0; i < n; ++first, (void) ++i)\n        f(*first);\n\n    return first;\n}\n"))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <algorithm>\n#include <iostream>\n#include <vector>\n\nvoid println(auto const& v)\n{\n    for (auto count{v.size()}; auto const& e : v)\n        std::cout << e << (--count ? ", " : "\\n");\n}\n\nint main()\n{\n    std::vector<int> vi {1, 2, 3, 4, 5};\n    println(vi);\n\n    std::for_each_n(vi.begin(), 3, [](auto& n) { n *= 2; });\n    println(vi);\n}\n'))),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},"1, 2, 3, 4, 5\n2, 4, 6, 4, 5\n")))))}_.isMDXComponent=!0}}]);