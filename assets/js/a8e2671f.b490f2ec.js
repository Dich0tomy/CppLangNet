"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[51113,49969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(87462),a=n(67294),l=n(86010),o=n(12466),c=n(76775),s=n(91980),i=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,c.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,i]=f({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),g(e)}),[i,g,l]),tabValues:l}}var b=n(72389);const v="tabList__CuJ",y="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:c,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=i[n].value;r!==c&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",y,o?.className,{"tabs__item--active":c===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function C(e){const t=g(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return a.createElement(C,(0,r.Z)({key:String(t)},e))}},98839:(e,t,n)=>{n.d(t,{z:()=>r});const r=n(67294).createContext({name:"Unknown",folder:"unknown"})},22307:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(87462),a=n(67294);const l="columns_Terr";function o(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,a.createElement("div",(0,r.Z)({className:l,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}o.isMDXComponent=!0},99801:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(74866),l=n(85162),o=n(99372),c=n(72412);const s={};function i(e){const t=e.content||{};return r.createElement(a.Z,null,Object.entries(t).map(((e,t)=>{let[n,i]=e;return i.value||i.simplified||i.detailed?r.createElement(l.Z,{value:n,label:o.gJ.get(n),default:i.default||0==t},i.simplified?r.createElement(r.Fragment,null,r.createElement(a.Z,{groupId:"view_mode",className:s.smallTabs},r.createElement(l.Z,{value:"simplified",label:"Simplified",default:!0},(0,c.Z)(i.simplified)),r.createElement(l.Z,{value:"detailed",label:"Detailed"},(0,c.Z)(i.detailed)))):i.value):r.createElement(l.Z,{value:n,label:o.gJ.get(n),default:0==t},(0,c.Z)(i))})))}},55059:(e,t,n)=>{n.d(t,{mN:()=>u,ZP:()=>i});var r=n(67294),a=n(72412);const l={symbolTable:"symbolTable_yosy",symbolName:"symbolName__gUy",symbolDesc:"symbolDesc_wDaQ",symbolProp:"symbolProp_oAcv",accessPublic:"accessPublic_LfqG",accessProtected:"accessProtected_bDL6",accessPrivate:"accessPrivate_Ab5O",modStatic:"modStatic_ZSC5",modConstexpr:"modConstexpr_iypt",modConst:"modConst_osuL",modVolatile:"modVolatile_ePYM",modVirtual:"modVirtual_jNz7"};var o=n(98839);const c={None:{Order:0,ShortName:"",FullName:"",Style:l.accessPublic},Public:{Order:1,ShortName:"pub",FullName:"public",Style:l.accessPublic},Protected:{Order:2,ShortName:"prot",FullName:"protected",Style:l.accessProtected},Private:{Order:3,ShortName:"priv",FullName:"private",Style:l.accessPrivate}},s=e=>e.none?c.None:e.pub||e.public?c.Public:e.prot||e.protected?c.Protected:e.priv||e.private?c.Private:c.Public;function i(e){return(t=>{if(0===t.length)return null;const n=t.sort(((e,t)=>s(e).Order<s(t).Order));return r.createElement("table",{"data-no-traits":`${e.noTraits||"false"}`,className:l.symbolTable},r.createElement("tbody",null,n))})(r.Children.toArray(e.children))}function u(e){r.useContext(o.z);let t=(0,a.Z)(e.name),n=null;e.desc?n=e.desc:e.children&&(n=e.children);const c=e.linkName||e.autoLink;!e.noLink&&c&&(t=r.createElement("a",{href:e.link||`${e.linkName||e.name}`},t));const i=(e,t,n)=>!0===e?r.createElement("span",{className:l[t]},n):null;return r.createElement("tr",null,!e.none&&r.createElement("td",{className:l.symbolProp},(e=>{const t=s(e);return r.createElement("span",{className:t.Style},t.ShortName)})(e),i(e.static,"modStatic","static"),i(e.constexpr,"modConstexpr","constexpr"),i(e.const,"modConst","const"),i(e.volatile,"modVolatile","volatile"),i(e.virtual,"modVirtual","virtual")),r.createElement("td",{className:l.symbolName},t),r.createElement("td",{className:l.symbolDesc},(0,a.Z)(n)))}u.isMDXComponent=!0,i.isMDXComponent=!0,i.Symbol=u},99372:(e,t,n)=>{n.d(t,{gJ:()=>u,eH:()=>f,U6:()=>d,OS:()=>m});var r=n(67294),a=n(95999);const l="markedText_c6kK",o="since_c1Q3",c="until_jXK6",s="removed_A_Kf",i="versionNumber_BiUX",u=new Map;function p(e){let{children:t,className:n}=e;return r.createElement("span",{className:l+(n?" "+n:"")},t)}function d(e){let{children:t,v:n}=e;return r.createElement(p,{className:o},t,"\xa0",r.createElement("span",{className:i},r.createElement("small",null,"(",u.get(`since-${n}`),")")))}function m(e){let{children:t,v:n}=e;return r.createElement(p,{className:c},t,"\xa0",r.createElement("span",{className:i},r.createElement("small",null,"(",u.get(`until-${n}`),")")))}function f(e){let{children:t,v:n}=e;return r.createElement(p,{className:s},t,"\xa0",r.createElement("span",{className:i},r.createElement("small",null,"(",u.get(`removed-${n}`),")")))}u.set("cpp98","C++98"),u.set("cpp03","C++03"),u.set("cpp11","C++11"),u.set("cpp14","C++14"),u.set("cpp17","C++17"),u.set("cpp20","C++20"),u.set("cpp23","C++23"),u.set("deprecated-",r.createElement(a.Z,null,"deprecated")),u.set("deprecated-cpp98",r.createElement(a.Z,null,"deprecated in C++98")),u.set("deprecated-cpp03",r.createElement(a.Z,null,"deprecated in C++03")),u.set("deprecated-cpp11",r.createElement(a.Z,null,"deprecated in C++11")),u.set("deprecated-cpp14",r.createElement(a.Z,null,"deprecated in C++14")),u.set("deprecated-cpp17",r.createElement(a.Z,null,"deprecated in C++17")),u.set("deprecated-cpp20",r.createElement(a.Z,null,"deprecated in C++20")),u.set("deprecated-cpp23",r.createElement(a.Z,null,"deprecated in C++23")),u.set("until-cpp98",r.createElement(a.Z,null,"until C++98")),u.set("until-cpp03",r.createElement(a.Z,null,"until C++03")),u.set("until-cpp11",r.createElement(a.Z,null,"until C++11")),u.set("until-cpp14",r.createElement(a.Z,null,"until C++14")),u.set("until-cpp17",r.createElement(a.Z,null,"until C++17")),u.set("until-cpp20",r.createElement(a.Z,null,"until C++20")),u.set("until-cpp23",r.createElement(a.Z,null,"until C++23")),u.set("since-cpp98",r.createElement(a.Z,null,"since C++98")),u.set("since-cpp03",r.createElement(a.Z,null,"since C++03")),u.set("since-cpp11",r.createElement(a.Z,null,"since C++11")),u.set("since-cpp14",r.createElement(a.Z,null,"since C++14")),u.set("since-cpp17",r.createElement(a.Z,null,"since C++17")),u.set("since-cpp20",r.createElement(a.Z,null,"since C++20")),u.set("since-cpp23",r.createElement(a.Z,null,"since C++23")),u.set("removed-",r.createElement(a.Z,null,"deleted")),u.set("removed-cpp98",r.createElement(a.Z,null,"removed in C++98")),u.set("removed-cpp03",r.createElement(a.Z,null,"removed in C++03")),u.set("removed-cpp11",r.createElement(a.Z,null,"removed in C++11")),u.set("removed-cpp14",r.createElement(a.Z,null,"removed in C++14")),u.set("removed-cpp17",r.createElement(a.Z,null,"removed in C++17")),u.set("removed-cpp20",r.createElement(a.Z,null,"removed in C++20")),u.set("removed-cpp23",r.createElement(a.Z,null,"removed in C++23"))},72412:(e,t,n)=>{function r(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>r})},10595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={},o=void 0,c={unversionedId:"std/algo/ordinary/_codes/construct_at/since-cpp20",id:"std/algo/ordinary/_codes/construct_at/since-cpp20",title:"since-cpp20",description:"",source:"@site/content/docs/std/algo/ordinary/_codes/construct_at/since-cpp20.mdx",sourceDirName:"std/algo/ordinary/_codes/construct_at",slug:"/std/algo/ordinary/_codes/construct_at/since-cpp20",permalink:"/CppLangNet/docs/std/algo/ordinary/_codes/construct_at/since-cpp20",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/_codes/construct_at/since-cpp20.mdx",tags:[],version:"current",frontMatter:{}},s={},i=[],u={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// (1)\ntemplate< class T, class... Args >\nconstexpr T* construct_at( T* p, Args&&... args );\n")))}p.isMDXComponent=!0},48715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),l=n(55059),o=n(22307),c=n(99801),s=n(10595);const i={title:"construct_at algorithm",sidebar_label:"construct_at(  )",description:"construct_at algorithm C++ documentation",hide_title:!0,tags:["algorithm","construct_at","construct","uninitialized"],cppreference_origin_rel:"w/cpp/algorithm/construct_at"},u=void 0,p={unversionedId:"std/algo/ordinary/construct_at",id:"std/algo/ordinary/construct_at",title:"construct_at algorithm",description:"construct_at algorithm C++ documentation",source:"@site/content/docs/std/algo/ordinary/construct_at.mdx",sourceDirName:"std/algo/ordinary",slug:"/std/algo/ordinary/construct_at",permalink:"/CppLangNet/docs/std/algo/ordinary/construct_at",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/docs/std/algo/ordinary/construct_at.mdx",tags:[{label:"algorithm",permalink:"/CppLangNet/docs/tags/algorithm"},{label:"construct_at",permalink:"/CppLangNet/docs/tags/construct-at"},{label:"construct",permalink:"/CppLangNet/docs/tags/construct"},{label:"uninitialized",permalink:"/CppLangNet/docs/tags/uninitialized"}],version:"current",frontMatter:{title:"construct_at algorithm",sidebar_label:"construct_at(  )",description:"construct_at algorithm C++ documentation",hide_title:!0,tags:["algorithm","construct_at","construct","uninitialized"],cppreference_origin_rel:"w/cpp/algorithm/construct_at"},sidebar:"defaultSidebar",previous:{title:"destroy_at(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/destroy_at"},next:{title:"qsort(  )",permalink:"/CppLangNet/docs/std/algo/ordinary/qsort"}},d={},m=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Examples",id:"examples",level:3}],f={toc:m};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stdconstruct_at-algorithm"},"std::construct_at() algorithm"),(0,a.kt)(c.Z,{content:{"since-cpp20":(0,a.kt)(s.default,{mdxType:"Signature_SinceCpp20"})},mdxType:"SwitchView"}),(0,a.kt)("p",null,"Creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," object initialized with arguments ",(0,a.kt)("inlineCode",{parentName:"p"},"args...")," at given address ",(0,a.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"return ::new (static_cast<void*>(p)) T(std::forward<Args>(args)...);\n")),(0,a.kt)("p",null,"Except that ",(0,a.kt)("a",{parentName:"p",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"construct_at"))," may be used in evaluation of ",(0,a.kt)("a",{parentName:"p",href:"#"},"constant expressions"),"."),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"construct_at"))," is called in the evaluation of some constant expression ",(0,a.kt)("inlineCode",{parentName:"p"},"e"),", the argument ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," must point to either storage obtained by ",(0,a.kt)("inlineCode",{parentName:"p"},"std::allocator<T>::allocate")," or an object whose lifetime began within the evaluation of ",(0,a.kt)("inlineCode",{parentName:"p"},"e"),"."),(0,a.kt)("admonition",{title:"Overload Resolution",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Participates in overload resolution only if ",(0,a.kt)("inlineCode",{parentName:"p"},"::new(std::declval<void*>()) T(std::declval<Args>()...)")," is well-formed in unevaluated context.")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)(l.ZP,{mdxType:"SymbolTable"},(0,a.kt)(l.mN,{none:!0,noLink:!0,name:(0,a.kt)("code",null,"p"),mdxType:"Symbol"},"Pointer to the uninitialized storage on which a ",(0,a.kt)("code",null,"T")," object will be constructed."),(0,a.kt)(l.mN,{none:!0,noLink:!0,name:(0,a.kt)("code",null,"args.."),mdxType:"Symbol"},"Args to initialize the object with.")),(0,a.kt)("h3",{id:"return-value"},"Return value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"p")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(none)")),(0,a.kt)("h3",{id:"complexity"},"Complexity"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"O(1)")),(0,a.kt)("h3",{id:"exceptions"},"Exceptions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(none)")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{columns:["8fr","4fr"],mdxType:"Columns"},(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='Main.cpp' showLineNumbers",title:"'Main.cpp'",showLineNumbers:!0},'#include <iostream>\n#include <memory>\n\nstruct S\n{\n    int x;\n    float y;\n    double z;\n\n    S(int x, float y, double z) : x{x}, y{y}, z{z} { std::cout << "S::S();\\n"; }\n\n    ~S() { std::cout << "S::~S();\\n"; }\n\n    void print() const\n    {\n        std::cout << "S { x=" << x << "; y=" << y << "; z=" << z << "; };\\n";\n    }\n};\n\nint main()\n{\n    alignas(S) unsigned char storage[sizeof(S)];\n\n    S* ptr = std::construct_at(reinterpret_cast<S*>(storage), 42, 2.71828f, 3.1415);\n    ptr->print();\n\n    std::destroy_at(ptr);\n}\n'))),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Output"',title:'"Output"'},"S::S();\nS { x=42; y=2.71828; z=3.1415; };\nS::~S();\n")))))}g.isMDXComponent=!0}}]);