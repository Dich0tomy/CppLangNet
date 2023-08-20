"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[73427],{14064:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),l=(n(67294),n(3905));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aspects and semantics that are ",(0,l.kt)("strong",{parentName:"p"},"implementation-defined")," are not guaranteed by\nthe standard in any way, rather they are left out to the implementation (compiler vendor standard library, most of the times).\nFor example, most mathematical functions incur some ",(0,l.kt)("strong",{parentName:"p"},"implementation-defined")," behaviour."))}i.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),l=n(67294),r=n(86010),i=n(12466),o=n(76775),s=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function p(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,c]=v({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),_=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{_&&o(_)}),[_]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var _=n(72389);const y="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==o&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",g,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",y)},l.createElement(h,(0,a.Z)({},e,t)),l.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,_.Z)();return l.createElement(k,(0,a.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>a});const a=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),l=n(67294);const r="columns_Terr";function i(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,l.createElement("div",(0,a.Z)({className:r,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}i.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),l=n(74866),r=n(85162),i=n(99372),o=n(72412);const s={};function c(e){const t=e.content||{};return a.createElement(l.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?a.createElement(r.Z,{value:n,label:i.gJ.get(n),default:c.default||0==t},c.simplified?a.createElement(a.Fragment,null,a.createElement(l.Z,{groupId:"view_mode",className:s.smallTabs},a.createElement(r.Z,{value:"simplified",label:"Simplified",default:!0},(0,o.Z)(c.simplified)),a.createElement(r.Z,{value:"detailed",label:"Detailed"},(0,o.Z)(c.detailed)))):c.value):a.createElement(r.Z,{value:n,label:i.gJ.get(n),default:0==t},(0,o.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>u,ZP:()=>c});var a=n(67294),l=n(72412);const r={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var i=n(98839);const o={None:{Order:0,ShortName:"",FullName:"",Style:r.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:r.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:r.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:r.accessPrivate}},s=e=>e.none?o.None:e.pub||e.public?o.Public:e.prot||e.protected?o.Protected:e.priv||e.private?o.Private:o.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>s(e).Order<s(t).Order));return a.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:r.symbolTable},a.createElement("tbody",null,n))})(a.Children.toArray(e.children))}function u(e){a.useContext(i.z);let t=(0,l.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const o=e.linkName||e.autoLink;!e.noLink&&o&&(t=a.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?a.createElement("span",{className:r[t]},n):null;return a.createElement("tr",null,!e.none&&a.createElement("td",{className:r.symbolProp},(e=>{const t=s(e);return a.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),a.createElement("td",{className:r.symbolName},t),a.createElement("td",{className:r.symbolDesc},(0,l.Z)(n)))}u.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=u},18510:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),l=n(44996),r=n(34386),i=n(72412);const o="TooltipContent_Lvru",s="TooltipTitle_ukF2";function c(e){let{url:t,title:n,maxWidth:c,children:u}=e;let d=c||"clamp(250px, 25vw, 800px)";"string"==typeof d&&d.endsWith("vw")&&(d=`clamp(250px, ${d}, 800px)`);const p="function"==typeof n?a.createElement(n):n,m=(t||"").startsWith("/")?(0,l.Z)(t):t,v=t?a.createElement("a",{href:m,target:"_blank",rel:"noreferrer"},u):u;return a.createElement(r.Z,{componentsProps:{tooltip:{style:{maxWidth:d}}},title:a.createElement("span",{className:s},(0,i.Z)(p)),placement:"top",arrow:!0},a.createElement("span",{className:o},v))}c.isMDXComponent=!0},99372:(e,t,n)=>{n.d(t,{gJ:()=>u,eH:()=>v,U6:()=>p,OS:()=>m});var a=n(67294),l=n(95999);const r="markedText_c6kK",i="since_c1Q3",o="until_jXK6",s="removed_A_Kf",c="versionNumber_BiUX",u=new Map;function d(e){let{children:t,className:n}=e;return a.createElement("span",{className:r+(n?" "+n:"")},t)}function p(e){let{children:t,v:n}=e;return a.createElement(d,{className:i},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",u.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return a.createElement(d,{className:o},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",u.get(`until-${n}`),")")))}function v(e){let{children:t,v:n}=e;return a.createElement(d,{className:s},t,"\xa0",a.createElement("span",{className:c},a.createElement("small",null,"(",u.get(`removed-${n}`),")")))}u.set("cpp98","C++98"),u.set("cpp03","C++03"),u.set("cpp11","C++11"),u.set("cpp14","C++14"),u.set("cpp17","C++17"),u.set("cpp20","C++20"),u.set("cpp23","C++23"),u.set("deprecated-",a.createElement(l.Z,null,"deprecated")),u.set("deprecated-cpp98",a.createElement(l.Z,null,"deprecated in C++98")),u.set("deprecated-cpp03",a.createElement(l.Z,null,"deprecated in C++03")),u.set("deprecated-cpp11",a.createElement(l.Z,null,"deprecated in C++11")),u.set("deprecated-cpp14",a.createElement(l.Z,null,"deprecated in C++14")),u.set("deprecated-cpp17",a.createElement(l.Z,null,"deprecated in C++17")),u.set("deprecated-cpp20",a.createElement(l.Z,null,"deprecated in C++20")),u.set("deprecated-cpp23",a.createElement(l.Z,null,"deprecated in C++23")),u.set("until-cpp98",a.createElement(l.Z,null,"until C++98")),u.set("until-cpp03",a.createElement(l.Z,null,"until C++03")),u.set("until-cpp11",a.createElement(l.Z,null,"until C++11")),u.set("until-cpp14",a.createElement(l.Z,null,"until C++14")),u.set("until-cpp17",a.createElement(l.Z,null,"until C++17")),u.set("until-cpp20",a.createElement(l.Z,null,"until C++20")),u.set("until-cpp23",a.createElement(l.Z,null,"until C++23")),u.set("since-cpp98",a.createElement(l.Z,null,"since C++98")),u.set("since-cpp03",a.createElement(l.Z,null,"since C++03")),u.set("since-cpp11",a.createElement(l.Z,null,"since C++11")),u.set("since-cpp14",a.createElement(l.Z,null,"since C++14")),u.set("since-cpp17",a.createElement(l.Z,null,"since C++17")),u.set("since-cpp20",a.createElement(l.Z,null,"since C++20")),u.set("since-cpp23",a.createElement(l.Z,null,"since C++23")),u.set("removed-",a.createElement(l.Z,null,"deleted")),u.set("removed-cpp98",a.createElement(l.Z,null,"removed in C++98")),u.set("removed-cpp03",a.createElement(l.Z,null,"removed in C++03")),u.set("removed-cpp11",a.createElement(l.Z,null,"removed in C++11")),u.set("removed-cpp14",a.createElement(l.Z,null,"removed in C++14")),u.set("removed-cpp17",a.createElement(l.Z,null,"removed in C++17")),u.set("removed-cpp20",a.createElement(l.Z,null,"removed in C++20")),u.set("removed-cpp23",a.createElement(l.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})},16991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={},i=void 0,o={unversionedId:"std/algo/ordinary/_codes/uninitialized_value_construct/since-cpp17",id:"std/algo/ordinary/_codes/uninitialized_value_construct/since-cpp17",title:"since-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/uninitialized_value_construct/since-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/uninitialized_value_construct",slug:"/std/algo/ordinary/_codes/uninitialized_value_construct/since-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/uninitialized_value_construct/since-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/uninitialized_value_construct/since-cpp17.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class ForwardIt >\nvoid uninitialized_value_construct( ForwardIt first, ForwardIt last );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt >\nvoid uninitialized_value_construct( ExecutionPolicy&& policy, ForwardIt first, ForwardIt last );\n")))}d.isMDXComponent=!0},56293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>_,contentTitle:()=>v,default:()=>h,frontMatter:()=>m,metadata:()=>f,toc:()=>y});var a=n(87462),l=n(67294),r=n(3905),i=n(55059),o=n(22307),s=n(99801),c=n(18510),u=n(99372),d=n(14064),p=n(16991);const m={title:"uninitialized_value_construct algorithm",sidebar_label:"uninitialized_value_construct(  )",description:"uninitialized_value_construct algorithm C++ documentation",hide_title:!0,tags:["algorithm","uninitialized_value_construct"],cppreference_origin_rel:"w/cpp/algorithm/uninitialized_value_construct"},v=void 0,f={unversionedId:"std/algo/ordinary/uninitialized_value_construct",id:"std/algo/ordinary/uninitialized_value_construct",title:"uninitialized_value_construct algorithm",description:"uninitialized_value_construct algorithm C++ documentation",source:"@site/content/docs/std/algo/ordinary/uninitialized_value_construct.mdx",sourceDirName:"std/algo/ordinary",slug:"/std/algo/ordinary/uninitialized_value_construct",permalink:"/CppLangNet/docs/std/algo/ordinary/uninitialized_value_construct",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/uninitialized_value_construct.mdx",tags:[{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"uninitialized_value_construct",permalink:"/CppLangNet/docs/tags/uninitialized-value-construct"}],version:"current",frontMatter:{title:"uninitialized_value_construct algorithm",sidebar_label:"uninitialized_value_construct(  )",description:"uninitialized_value_construct algorithm C++ documentation",hide_title:!0,tags:["algorithm","uninitialized_value_construct"],cppreference_origin_rel:"w/cpp/algorithm/uninitialized_value_construct"},sidebar:"defaultSidebar",previous:{title:"uninitialized_default_construct_n(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/uninitialized_default_construct_n"},next:{title:"uninitialized_value_construct_n(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/uninitialized_value_construct_n"}},_={},y=[{value:"Parameters",id:"parameters",level:3},{value:"Type requirements",id:"type-requirements",level:4},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Examples",id:"examples",level:3}],g={toc:y};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stduninitialized_value_construct-algorithm"},"std::uninitialized_value_construct() algorithm"),(0,r.kt)(s.Z,{content:{"since-cpp17":(0,r.kt)(p.default,{mdxType:"Signature_SinceCpp17"})},mdxType:"SwitchView"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"(1)")," Constructs objects of type typename ",(0,r.kt)("inlineCode",{parentName:"p"},"iterator_traits<ForwardIt>::value_type")," in the uninitialized storage\ndesignated by the range [",(0,r.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,r.kt)("inlineCode",{parentName:"p"},"last"),") by ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"value-initialization")),", as if by:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"for (; first != last; ++first)\n    ::new (static_cast<void*>(std::addressof(*first)))\n        typename std::iterator_traits<ForwardIt>::value_type();\n")),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If an exception is thrown during the initialization, the objects already constructed are destroyed in an unspecified order."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,r.kt)("strong",{parentName:"p"},"(1)"),", but executed according to ",(0,r.kt)("inlineCode",{parentName:"p"},"policy"),"."),(0,r.kt)("admonition",{parentName:"li",title:"Overload Resolution",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"These overloads participate in overload resolution only if"),(0,r.kt)(u.OS,{v:"cpp20",mdxType:"Until"}," ",(0,r.kt)("code",null,"std::is_execution_policy_v<std::decay_t<ExecutionPolicy>>")," ")," ",(0,r.kt)(u.U6,{v:"cpp20",mdxType:"Since"}," ",(0,r.kt)("code",null,"std::is_execution_policy_v<std::remove_cvref_t<ExecutionPolicy>>")," ")," is ",(0,r.kt)("code",null,"true"),"."))),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)(i.ZP,{mdxType:"SymbolTable"},(0,r.kt)(i.mN,{none:!0,noLink:!0,name:(0,r.kt)(l.Fragment,null," ",(0,r.kt)("code",null,"first")," ",(0,r.kt)("br",null)," ",(0,r.kt)("code",null,"last")," "),mdxType:"Symbol"},"The range of elements to initialize."),(0,r.kt)(i.mN,{none:!0,noLink:!0,name:(0,r.kt)("code",null,"policy"),mdxType:"Symbol"},"The execution policy to use. See ",(0,r.kt)("a",{href:""},"execution policy")," for details.")),(0,r.kt)("h4",{id:"type-requirements"},"Type requirements"),(0,r.kt)(i.ZP,{mdxType:"SymbolTable"},(0,r.kt)(i.mN,{none:!0,noLink:!0,name:(0,r.kt)("code",null,"ForwardIt"),mdxType:"Symbol"},(0,r.kt)("a",{href:"/docs/named_req/LegacyForwardIterator"},"LegacyForwardIterator"))),(0,r.kt)("p",null,"No increment, assignment, comparison, or indirection through valid instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"NoThrowForwardIt")," may throw exceptions."),(0,r.kt)("h3",{id:"return-value"},"Return value"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"(none)")),(0,r.kt)("h3",{id:"complexity"},"Complexity"),(0,r.kt)("p",null,"Linear in the distance between ",(0,r.kt)("inlineCode",{parentName:"p"},"first")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"last"),"."),(0,r.kt)("h3",{id:"exceptions"},"Exceptions"),(0,r.kt)("p",null,"The overloads with a template parameter named ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionPolicy")," report errors as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If execution of a function invoked as part of the algorithm throws an exception and ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy")," is one of the ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("strong",{parentName:"a"},"standard policies")),", ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"std::terminate"))," is called.\nFor none other ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy"),", the behavior is ",(0,r.kt)(c.Z,{title:(0,r.kt)(d.ZP,{mdxType:"Term_ImplementationDefined"}),mdxType:"Tooltip"},(0,r.kt)("strong",{parentName:"li"},"implementation-defined")),"."),(0,r.kt)("li",{parentName:"ul"},"If the algorithm fails to allocate memory, ",(0,r.kt)("inlineCode",{parentName:"li"},"std::bad_alloc")," is thrown.")),(0,r.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"uninitialized_value_construct(1)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"\ntemplate<class ForwardIt>\nvoid uninitialized_value_construct(ForwardIt first, ForwardIt last)\n{\n    using Value = typename std::iterator_traits<ForwardIt>::value_type;\n    ForwardIt current = first;\n    try\n    {\n        for (; current != last; ++current)\n            ::new (const_cast<void*>(static_cast<const volatile void*>(\n                std::addressof(*current)))) Value();\n    }\n    catch (...)\n    {\n        std::destroy(first, current);\n        throw;\n    }\n}\n"))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},"#include <iostream>\n#include <memory>\n#include <string>\n\nint main()\n{\n    struct S { std::string m{\"Default value\"}; };\n\n    constexpr int n{3};\n    alignas(alignof(S)) unsigned char mem[n * sizeof(S)];\ng\n    try\n    {\n        auto first{reinterpret_cast<S*>(mem)};\n        auto last{first + n};\ng\n        std::uninitialized_value_construct(first, last);\ng\n        for (auto it{first}; it != last; ++it)\n            std::cout << it->m << '\\n';\ng\n        std::destroy(first, last);\n    }\n    catch (...)\n    {\n        std::cout << \"Exception!\\n\";\n    }\ng\n    // Notice that for \"trivial types\" the uninitialized_value_construct\n    // zero-fills the given uninitialized memory area.\n    int v[]{1, 2, 3, 4};\n    for (const int i : v)\n        std::cout << i << ' ';\n    std::cout << '\\n';\n    std::uninitialized_value_construct(std::begin(v), std::end(v));\n    for (const int i : v)\n        std::cout << i << ' ';\n    std::cout << '\\n';\n}\n"))),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},"Default value\nDefault value\nDefault value\n1 2 3 4\n0 0 0 0\n")))))}h.isMDXComponent=!0}}]);