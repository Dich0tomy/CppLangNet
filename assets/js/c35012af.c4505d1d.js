"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[29832],{98088:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("b",null,"Undefined behaviour")," is a property of a program that's incorrect, but likely compiles. It is incorrect in a way, that the error is only invoked in certain conditions at runtime.",(0,a.kt)("p",null,"Common cases include: ",(0,a.kt)("strong",{parentName:"p"},"out of bounds access"),", ",(0,a.kt)("strong",{parentName:"p"},"reading uninitialized objects"),", ",(0,a.kt)("strong",{parentName:"p"},"dangling pointers/references")," or ",(0,a.kt)("strong",{parentName:"p"},"signed overflow"),"."))}o.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(87462),a=n(67294),l=n(86010),o=n(12466),s=n(76775),i=n(91980),c=n(67392),d=n(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,c]=y({queryString:n,groupId:r}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=i??u;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var v=n(72389);const g="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==s&&(u(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function C(e){const t=(0,v.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>r});const r=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(87462),a=n(67294);const l="columns_Terr";function o(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,a.createElement("div",(0,r.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}o.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(74866),l=n(85162),o=n(99372),s=n(72412);const i={};function c(e){const t=e.content||{};return r.createElement(a.Z,null,Object.entries(t).map(((e,t)=>{let[n,c]=e;return c.value||c.simplified||c.detailed?r.createElement(l.Z,{value:n,label:o.gJ.get(n),default:c.default||0==t},c.simplified?r.createElement(r.Fragment,null,r.createElement(a.Z,{groupId:"view_mode",className:i.smallTabs},r.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,s.Z)(c.simplified)),r.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,s.Z)(c.detailed)))):c.value):r.createElement(l.Z,{value:n,label:o.gJ.get(n),default:0==t},(0,s.Z)(c))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>d,ZP:()=>c});var r=n(67294),a=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var o=n(98839);const s={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},i=e=>e.none?s.None:e.pub||e.public?s.Public:e.prot||e.protected?s.Protected:e.priv||e.private?s.Private:s.Public;function c(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>i(e).Order<i(t).Order));return r.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},r.createElement("tbody",null,n))})(r.Children.toArray(e.children))}function d(e){r.useContext(o.z);let t=(0,a.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const s=e.linkName||e.autoLink;!e.noLink&&s&&(t=r.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const c=(e,t,n)=>!0===e?r.createElement("span",{className:l[t]},n):null;return r.createElement("tr",null,!e.none&&r.createElement("td",{className:l.symbolProp},(e=>{const t=i(e);return r.createElement("span",{className:t.Style},t.ShortName)})(e),c(e.static,"modStatic","static"),c(e.constexpr,"modConstexpr","constexpr"),c(e.const,"modConst","const"),c(e.volatile,"modVolatile","volatile"),c(e.virtual,"modVirtual","virtual")),r.createElement("td",{className:l.symbolName},t),r.createElement("td",{className:l.symbolDesc},(0,a.Z)(n)))}d.isMDXComponent=!0,c.isMDXComponent=!0,c.Symbol=d},18510:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(44996),l=n(34386),o=n(72412);const s="TooltipContent_Lvru",i="TooltipTitle_ukF2";function c(e){let{url:t,title:n,maxWidth:c,children:d}=e;let u=c||"clamp(250px, 25vw, 800px)";"string"==typeof u&&u.endsWith("vw")&&(u=`clamp(250px, ${u}, 800px)`);const p="function"==typeof n?r.createElement(n):n,m=(t||"").startsWith("/")?(0,a.Z)(t):t,y=t?r.createElement("a",{href:m,target:"_blank",rel:"noreferrer"},d):d;return r.createElement(l.Z,{componentsProps:{tooltip:{style:{maxWidth:u}}},title:r.createElement("span",{className:i},(0,o.Z)(p)),placement:"top",arrow:!0},r.createElement("span",{className:s},y))}c.isMDXComponent=!0},99372:(e,t,n)=>{n.d(t,{gJ:()=>d,eH:()=>y,U6:()=>p,OS:()=>m});var r=n(67294),a=n(95999);const l="markedText_c6kK",o="since_c1Q3",s="until_jXK6",i="removed_A_Kf",c="versionNumber_BiUX",d=new Map;function u(e){let{children:t,className:n}=e;return r.createElement("span",{className:l+(n?" "+n:"")},t)}function p(e){let{children:t,v:n}=e;return r.createElement(u,{className:o},t,"\xa0",r.createElement("span",{className:c},r.createElement("small",null,"(",d.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return r.createElement(u,{className:s},t,"\xa0",r.createElement("span",{className:c},r.createElement("small",null,"(",d.get(`until-${n}`),")")))}function y(e){let{children:t,v:n}=e;return r.createElement(u,{className:i},t,"\xa0",r.createElement("span",{className:c},r.createElement("small",null,"(",d.get(`removed-${n}`),")")))}d.set("cpp98","C++98"),d.set("cpp03","C++03"),d.set("cpp11","C++11"),d.set("cpp14","C++14"),d.set("cpp17","C++17"),d.set("cpp20","C++20"),d.set("cpp23","C++23"),d.set("deprecated-",r.createElement(a.Z,null,"deprecated")),d.set("deprecated-cpp98",r.createElement(a.Z,null,"deprecated in C++98")),d.set("deprecated-cpp03",r.createElement(a.Z,null,"deprecated in C++03")),d.set("deprecated-cpp11",r.createElement(a.Z,null,"deprecated in C++11")),d.set("deprecated-cpp14",r.createElement(a.Z,null,"deprecated in C++14")),d.set("deprecated-cpp17",r.createElement(a.Z,null,"deprecated in C++17")),d.set("deprecated-cpp20",r.createElement(a.Z,null,"deprecated in C++20")),d.set("deprecated-cpp23",r.createElement(a.Z,null,"deprecated in C++23")),d.set("until-cpp98",r.createElement(a.Z,null,"until C++98")),d.set("until-cpp03",r.createElement(a.Z,null,"until C++03")),d.set("until-cpp11",r.createElement(a.Z,null,"until C++11")),d.set("until-cpp14",r.createElement(a.Z,null,"until C++14")),d.set("until-cpp17",r.createElement(a.Z,null,"until C++17")),d.set("until-cpp20",r.createElement(a.Z,null,"until C++20")),d.set("until-cpp23",r.createElement(a.Z,null,"until C++23")),d.set("since-cpp98",r.createElement(a.Z,null,"since C++98")),d.set("since-cpp03",r.createElement(a.Z,null,"since C++03")),d.set("since-cpp11",r.createElement(a.Z,null,"since C++11")),d.set("since-cpp14",r.createElement(a.Z,null,"since C++14")),d.set("since-cpp17",r.createElement(a.Z,null,"since C++17")),d.set("since-cpp20",r.createElement(a.Z,null,"since C++20")),d.set("since-cpp23",r.createElement(a.Z,null,"since C++23")),d.set("removed-",r.createElement(a.Z,null,"deleted")),d.set("removed-cpp98",r.createElement(a.Z,null,"removed in C++98")),d.set("removed-cpp03",r.createElement(a.Z,null,"removed in C++03")),d.set("removed-cpp11",r.createElement(a.Z,null,"removed in C++11")),d.set("removed-cpp14",r.createElement(a.Z,null,"removed in C++14")),d.set("removed-cpp17",r.createElement(a.Z,null,"removed in C++17")),d.set("removed-cpp20",r.createElement(a.Z,null,"removed in C++20")),d.set("removed-cpp23",r.createElement(a.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function r(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>r})},5865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},o=void 0,s={unversionedId:"std/algo/ordinary/_codes/destroy/since-cpp17",id:"std/algo/ordinary/_codes/destroy/since-cpp17",title:"since-cpp17",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/destroy/since-cpp17.mdx",sourceDirName:"std/algo/ordinary/_codes/destroy",slug:"/std/algo/ordinary/_codes/destroy/since-cpp17",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/destroy/since-cpp17",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/destroy/since-cpp17.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class ForwardIt >\nvoid destroy( ForwardIt first, ForwardIt last );\n\n// (2)\ntemplate< class ExecutionPolicy, class ForwardIt >\nvoid destroy( ExecutionPolicy&& policy, ForwardIt first, ForwardIt last );\n")))}u.isMDXComponent=!0},94009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>y,toc:()=>v});var r=n(87462),a=n(67294),l=n(3905),o=n(55059),s=n(22307),i=n(99801),c=n(18510),d=n(99372),u=(n(98088),n(5865));const p={title:"destroy algorithm",sidebar_label:"destroy(  )",description:"destroy algorithm C++ documentation",hide_title:!0,tags:["algorithm","destroy"],cppreference_origin_rel:"w/cpp/algorithm/destroy"},m=void 0,y={unversionedId:"std/algo/ordinary/destroy",id:"std/algo/ordinary/destroy",title:"destroy algorithm",description:"destroy algorithm C++ documentation",source:"@site/content/docs/std/algo/ordinary/destroy.mdx",sourceDirName:"std/algo/ordinary",slug:"/std/algo/ordinary/destroy",permalink:"/CppLangNet/docs/std/algo/ordinary/destroy",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/destroy.mdx",tags:[{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"destroy",permalink:"/CppLangNet/docs/tags/destroy"}],version:"current",frontMatter:{title:"destroy algorithm",sidebar_label:"destroy(  )",description:"destroy algorithm C++ documentation",hide_title:!0,tags:["algorithm","destroy"],cppreference_origin_rel:"w/cpp/algorithm/destroy"},sidebar:"defaultSidebar",previous:{title:"uninitialized_value_construct_n(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/uninitialized_value_construct_n"},next:{title:"destroy_n(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/destroy_n"}},f={},v=[{value:"Parameters",id:"parameters",level:3},{value:"Type requirements",id:"type-requirements",level:4},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Possible implementation",id:"possible-implementation",level:3},{value:"Examples",id:"examples",level:3}],g=(b="Term_ImplementationDefined",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var b;const k={toc:v};function h(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stddestroy-algorithm"},"std::destroy() algorithm"),(0,l.kt)(i.Z,{content:{"since-cpp17":(0,l.kt)(u.default,{mdxType:"Signature_SinceCpp17"})},mdxType:"SwitchView"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(1)")," Destroys the objects in the range [",(0,l.kt)("inlineCode",{parentName:"p"},"first"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),"), as if by:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"for (; first != last; ++first)\n    std::destroy_at(std::addressof(*first));\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"(2)")," Same as ",(0,l.kt)("strong",{parentName:"p"},"(1)"),", but executed according to ",(0,l.kt)("inlineCode",{parentName:"p"},"policy"),"."),(0,l.kt)("admonition",{parentName:"li",title:"Overload Resolution",type:"important"},(0,l.kt)("p",{parentName:"admonition"},"These overloads participate in overload resolution only if"),(0,l.kt)(d.OS,{v:"cpp20",mdxType:"Until"}," ",(0,l.kt)("code",null,"std::is_execution_policy_v<std::decay_t<ExecutionPolicy>>")," ")," ",(0,l.kt)(d.U6,{v:"cpp20",mdxType:"Since"}," ",(0,l.kt)("code",null,"std::is_execution_policy_v<std::remove_cvref_t<ExecutionPolicy>>")," ")," is ",(0,l.kt)("code",null,"true"),"."))),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)(o.ZP,{mdxType:"SymbolTable"},(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)(a.Fragment,null," ",(0,l.kt)("code",null,"first")," ",(0,l.kt)("br",null)," ",(0,l.kt)("code",null,"last")," "),mdxType:"Symbol"},"The range of elements to destroy."),(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"policy"),mdxType:"Symbol"},"The execution policy to use. See ",(0,l.kt)("a",{href:""},"execution policy")," for details.")),(0,l.kt)("h4",{id:"type-requirements"},"Type requirements"),(0,l.kt)(o.ZP,{mdxType:"SymbolTable"},(0,l.kt)(o.mN,{none:!0,noLink:!0,name:(0,l.kt)("code",null,"ForwardIt"),mdxType:"Symbol"},(0,l.kt)("a",{href:"/docs/named_req/LegacyForwardIterator"},"LegacyForwardIterator"))),(0,l.kt)("p",null,"No increment, assignment, comparison, or indirection through valid instances of ",(0,l.kt)("inlineCode",{parentName:"p"},"NoThrowForwardIt")," may throw exceptions."),(0,l.kt)("h3",{id:"return-value"},"Return value"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(none)")),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"Linear in the distance between ",(0,l.kt)("inlineCode",{parentName:"p"},"first")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),"."),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("p",null,"The overloads with a template parameter named ",(0,l.kt)("inlineCode",{parentName:"p"},"ExecutionPolicy")," report errors as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If execution of a function invoked as part of the algorithm throws an exception and ",(0,l.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy")," is one of the ",(0,l.kt)("a",{parentName:"li",href:"#"},(0,l.kt)("strong",{parentName:"a"},"standard policies")),", ",(0,l.kt)("a",{parentName:"li",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"std::terminate"))," is called.\nFor none other ",(0,l.kt)("inlineCode",{parentName:"li"},"ExecutionPolicy"),", the behavior is ",(0,l.kt)(c.Z,{title:(0,l.kt)(g,{mdxType:"Term_ImplementationDefined"}),mdxType:"Tooltip"},(0,l.kt)("strong",{parentName:"li"},"implementation-defined")),"."),(0,l.kt)("li",{parentName:"ul"},"If the algorithm fails to allocate memory, ",(0,l.kt)("inlineCode",{parentName:"li"},"std::bad_alloc")," is thrown.")),(0,l.kt)("h3",{id:"possible-implementation"},"Possible implementation"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"destroy(1)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"\ntemplate<class ForwardIt>\nconstexpr // since C++20\nvoid destroy(ForwardIt first, ForwardIt last)\n{\n    for (; first != last; ++first)\n        std::destroy_at(std::addressof(*first));\n}\n"))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(s.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <iostream>\n#include <memory>\n#include <new>\n\nstruct Tracer\n{\n    int value;\n    ~Tracer() { std::cout << value << " destructed\\n"; }\n};\n\nint main()\n{\n    alignas(Tracer) unsigned char buffer[sizeof(Tracer) * 8];\n\n    for (int i = 0; i < 8; ++i)\n        new(buffer + sizeof(Tracer) * i) Tracer{i}; //manually construct objects\n\n    auto ptr = std::launder(reinterpret_cast<Tracer*>(buffer));\n\n    std::destroy(ptr, ptr + 8);\n}\n'))),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},"0 destructed\n1 destructed\n2 destructed\n3 destructed\n4 destructed\n5 destructed\n6 destructed\n7 destructed\n")))))}h.isMDXComponent=!0}}]);