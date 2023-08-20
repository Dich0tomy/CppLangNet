"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[61715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55684:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// prism-push-types:Car\n#include <iostream>\n\nstruct Car\n{\n    // car information\n    std::string brand;\n    std::string model;\n    int         yearOfProduction;\n\n    // movement\n    float       topSpeed = 200;     // (km/h)\n    float       acceleration = 50;  // (km/h per second)\n    float       speed = 0;          // current one (km/h)\n};\n\nvoid accelerate(Car& car)\n{\n    car.speed += car.acceleration;\n}\n\nint main()\n{\n\n    Car car;\n    car.brand = "Ford";\n    car.model = "Mustang";\n    car.yearOfProduction = 1969;\n    car.topSpeed = 250;\n    car.acceleration = 60;\n    // initial values...\n\n    // calling for the first time\n    accelerate(car);\n    std::cout << "Current speed: " << car.speed << " km/h\\n";\n    \n    // calling for the second time\n    accelerate(car);\n    std::cout << "Current speed: " << car.speed << " km/h\\n";\n}\n')))}l.isMDXComponent=!0},18089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var a=n(87462),r=(n(67294),n(3905)),o=n(22307),l=n(61667),i=n(74866),s=n(85162),c=(n(56693),n(42677)),u=n(55684);const d={title:"Methods",description:"Lesson: methods basics in C++",tags:["method","constructor","destructor","structure","struct","class","object-oriented","oop"],hide_title:!0},p=void 0,m={unversionedId:"course/basics/methods/methods",id:"course/basics/methods/methods",title:"Methods",description:"Lesson: methods basics in C++",source:"@site/content/learn/course/basics/methods/methods.mdx",sourceDirName:"course/basics/methods",slug:"/course/basics/methods/",permalink:"/CppLangNet/learn/course/basics/methods/",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/learn/course/basics/methods/methods.mdx",tags:[{label:"method",permalink:"/CppLangNet/learn/tags/method"},{label:"constructor",permalink:"/CppLangNet/learn/tags/constructor"},{label:"destructor",permalink:"/CppLangNet/learn/tags/destructor"},{label:"structure",permalink:"/CppLangNet/learn/tags/structure"},{label:"struct",permalink:"/CppLangNet/learn/tags/struct"},{label:"class",permalink:"/CppLangNet/learn/tags/class"},{label:"object-oriented",permalink:"/CppLangNet/learn/tags/object-oriented"},{label:"oop",permalink:"/CppLangNet/learn/tags/oop"}],version:"current",frontMatter:{title:"Methods",description:"Lesson: methods basics in C++",tags:["method","constructor","destructor","structure","struct","class","object-oriented","oop"],hide_title:!0},sidebar:"defaultSidebar",previous:{title:"References (I)",permalink:"/CppLangNet/learn/course/basics/references"},next:{title:"Methods",permalink:"/CppLangNet/learn/course/basics/methods/"}},h={},f=[{value:"Motivation",id:"motivation",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Creating and using methods",id:"creating-and-using-methods",level:2},{value:"Differences between functions and methods",id:"differences-between-functions-and-methods",level:3},{value:"Definition order",id:"definition-order",level:3},{value:"Declaration and definition",id:"declaration-and-definition",level:3},{value:"Examples",id:"examples",level:2},{value:"Potential errors",id:"potential-errors",level:2}],g={toc:f};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"methods"},"Methods"),(0,r.kt)("p",null,"This lesson will show you how to make use of functions inside a structure creating so-called ",(0,r.kt)("strong",{parentName:"p"},"methods"),"."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"In programming, objects from real life are often mirrored, for example when creating a racing game \ud83c\udfce\nwe will want to have vehicles that are defined by their"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"traits"),", such as:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"brand"),(0,r.kt)("li",{parentName:"ul"},"model \ud83d\ude98"),(0,r.kt)("li",{parentName:"ul"},"max. speed \ud83d\ude80"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"behaviour"),", e.g:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"acceleration \ud83d\udca8"),(0,r.kt)("li",{parentName:"ul"},"braking \ud83d\uded1")))),(0,r.kt)("p",null,"This way of describing objects, separating features and behaviors, is very common.\nIn the lesson on ",(0,r.kt)("a",{parentName:"p",href:"../structures"},"structures")," we learned how to contain different information\nabout objects within a single type that we created ourselves. By doing so, we described\nits ",(0,r.kt)("strong",{parentName:"p"},"traits"),'. Now we\'re going to move on to methods that will allow us to "teach" the object to\nperform a specific task - that is, to define its ',(0,r.kt)("strong",{parentName:"p"},"behaviour"),". "),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"For the purposes of this lesson, let's create a structure that contains the following features of a car:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Car\n{\n    // car information\n    std::string brand;\n    std::string model;\n    int         yearOfProduction;\n\n    // movement\n    float       topSpeed = 200;     // (km/h)\n    float       acceleration = 50;  // (km/h per second)\n    float       speed = 0;          // current one (km/h)\n};\n")),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function, let's create an object of this structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// prism-push-types:Car\nint main()\n{\n    Car car;\n    car.brand = "Ford";\n    car.model = "Focus";\n    car.yearOfProduction = 2010;\n\n}\n')),(0,r.kt)("p",null,"Now we will move on to how to make it (",(0,r.kt)("inlineCode",{parentName:"p"},"car"),") work."),(0,r.kt)("h2",{id:"creating-and-using-methods"},"Creating and using methods"),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Car")," structure, at its end, let's put a function, named ",(0,r.kt)("inlineCode",{parentName:"p"},"accelerate"),",\nwhich will increase the ",(0,r.kt)("inlineCode",{parentName:"p"},"speed")," by the acceleration value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"acceleration"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Car\n{\n    // ...\n    float acceleration = 50;\n    float speed = 0;\n    // ...\n\n    // increases the speed\n    // highlight-next-line\n    void accelerate()\n    {\n        speed += acceleration;\n    }\n};\n")),(0,r.kt)("admonition",{title:"Definition",type:"important"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Methods")," are functions that are members of a structure (or a class - more on that later in the course).\nThey operate on other structure members and/or provide some functionality for instances of it.")),(0,r.kt)("p",null,"Now we can call ",(0,r.kt)("inlineCode",{parentName:"p"},"accelerate")," on an object, like this:"),(0,r.kt)(o.Z,{columns:["2fr","1fr"],mdxType:"Columns"},(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="\ud83d\udd39 Calling the accelerate()"',title:'"\ud83d\udd39',Calling:!0,the:!0,'accelerate()"':!0},'// prism-push-types:Car\n// ...\n\nint main()\n{\n    Car car;\n    // initial values...\n\n    // calling for the first time\n    // highlight-next-line\n    car.accelerate();\n    std::cout << "Current speed: " << car.speed << " km/h\\n";\n    // calling for the second time\n    // highlight-next-line\n    car.accelerate();\n    std::cout << "Current speed: " << car.speed << " km/h\\n";\n}\n'))),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="Result"',title:'"Result"'},"Current speed: 50 km/h\nCurrent speed: 100 km/h\n")))),(0,r.kt)("p",null,"We use the dot operator (",(0,r.kt)("inlineCode",{parentName:"p"},"car.accelerate"),") to access the method we want to call and then inside the parentheses",(0,r.kt)("inlineCode",{parentName:"p"},"()"),"\nwe pass any required arguments as necessary."),(0,r.kt)(o.Z,{columns:["1fr","1fr"],mdxType:"Columns"},(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="\ud83d\udd38 Calling a method"',title:'"\ud83d\udd38',Calling:!0,a:!0,'method"':!0},"object.methodName(arguments);\n"))),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="\ud83d\udd39 Calling a function"',title:'"\ud83d\udd39',Calling:!0,a:!0,'function"':!0},"functionName(arguments);\n")))),(0,r.kt)("h3",{id:"differences-between-functions-and-methods"},"Differences between functions and methods"),(0,r.kt)("p",null,"Most methods could be rewritten as regular ",(0,r.kt)("strong",{parentName:"p"},"free functions")," (outside of any structure).\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"accelerate")," method we created above could be rewritten as a function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// prism-push-types:Car\nvoid accelerate(Car& car)\n{\n    car.speed += car.acceleration;\n}\n")),(0,r.kt)("p",null,"and called like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// prism-push-types:Car\nCar car;\n// initial values...\n\n// calling for the first time\n// highlight-next-line\naccelerate(car);\nstd::cout << "Current speed: " << car.speed << " km/h\\n";\n// calling for the second time\n// highlight-next-line\naccelerate(car);\nstd::cout << "Current speed: " << car.speed << " km/h\\n";\n')),(0,r.kt)(l.Z,{content:(0,r.kt)(u.ZP,{mdxType:"FullCode_MethodsAsFreeFunctions"}),mdxType:"FullCode"}),(0,r.kt)("p",null,"As you can see, the main difference is that we need to pass the object as an argument\nwhen calling a function, but we do not need to do this for a method."),(0,r.kt)("h3",{id:"definition-order"},"Definition order"),(0,r.kt)("p",null,"Inside a structure, methods need not be defined before declaring a variable or another method,\nwhich also belongs to this structure:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"good1",label:"\u2714 Good",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note the order in which the methods are defined: ",(0,r.kt)("inlineCode",{parentName:"p"},"limitSpeed")," was used in ",(0,r.kt)("inlineCode",{parentName:"p"},"accelerate"),",\neven though its definition is below. Similarly, the ",(0,r.kt)("inlineCode",{parentName:"p"},"speed")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"acceleration")," fields\nhave been used before their declaration, because it is in the code ",(0,r.kt)("strong",{parentName:"p"},"under")," this usage.\nThis is allowed within the structure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Car\n{\n    // function that increases the speed\n    void accelerate()\n    {\n        speed += acceleration;\n        limitSpeed();\n    }\n\n    void limitSpeed() {\n        if (speed > topSpeed)\n            speed = topSpeed;\n    }\n\n    // class data members\n    float topSpeed = 200;\n    float acceleration = 50;\n    float speed = 0;\n    // the rest...\n};\n"))),(0,r.kt)(s.Z,{value:"good2",label:"\u2714 Good (order kept)",mdxType:"TabItem"},(0,r.kt)("p",null,"The order of functions and variables is set according to their usage - also correct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Car\n{\n    // class data members\n    float topSpeed = 200;\n    float acceleration = 50;\n    float speed = 0;\n    // the rest...\n\n    void limitSpeed() {\n        if (speed > topSpeed)\n            speed = topSpeed;\n    }\n\n    // function that increases the speed\n    void accelerate()\n    {\n        speed += acceleration;\n        limitSpeed();\n    }\n};\n"))),(0,r.kt)(s.Z,{value:"bad",label:"\u274c Bad",mdxType:"TabItem"},(0,r.kt)("p",null,"Outside of a structure, such reordering is not allowed without using a separate declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'void printHelloWorld()\n{\n    // \u274c Error, using `world` function before definition\n    // error-next-line\n    std::cout << "Hello, " << world();\n}\n\n// Return the "World!" string\nstd::string world()\n{\n    return "World!";\n}\n')))),(0,r.kt)("h3",{id:"declaration-and-definition"},"Declaration and definition"),(0,r.kt)("p",null,"As with functions, we can separate the method declaration and definition.\nThis way we are able to move their definitions outside of the structure body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Car\n{\n    // class data members\n    float topSpeed = 200;\n    float acceleration = 50;\n    float speed = 0;\n    // the rest...\n\n    // Methods declarations:\n    // highlight-start\n    void limitSpeed();\n    void accelerate();\n    // highlight-end\n};\n\n// highlight-next-line\nvoid Car::limitSpeed()\n{\n    if (speed > topSpeed)\n        speed = topSpeed;\n}\n\n// highlight-next-line\nvoid Car::accelerate()\n{\n    speed += acceleration;\n    limitSpeed();\n}\n")),(0,r.kt)("p",null,"Note that in this case, we precede the method name with the structure name ",(0,r.kt)("inlineCode",{parentName:"p"},"Car"),",\nand a double colon ",(0,r.kt)("inlineCode",{parentName:"p"},"::"),", the so-called ",(0,r.kt)("em",{parentName:"p"},"scope resolution operator"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="\ud83d\udd39 Definition outside the structure body scheme"',title:'"\ud83d\udd39',Definition:!0,outside:!0,the:!0,structure:!0,body:!0,'scheme"':!0},"// prism-push-types:type\ntype StructureName::methodName(parameters)\n{\n    // ...\n}\n")),(0,r.kt)("p",null,"One of the advantages of this notation is the ability to separate the ",(0,r.kt)("em",{parentName:"p"},"interface"),"\nof the structure from its ",(0,r.kt)("em",{parentName:"p"},"implementation"),". This way, once you've implemented\nmethods, each time you look at the structure, you will only see the set of\nvariable and method names that you will use, without getting distracted by the\nimplementation details."),(0,r.kt)("p",null,"This notation is also crucial when splitting the code into multiple files - we'll tell\nabout it further on in the course."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(c.ZP,{mdxType:"ImproveSection"}),(0,r.kt)("h2",{id:"potential-errors"},"Potential errors"),(0,r.kt)(c.ZP,{mdxType:"ImproveSection"}))}k.isMDXComponent=!0},42677:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"This section requires improvement. You can help by editing this doc page.")))}l.isMDXComponent=!0},56693:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note, this article is not finished! You can help by editing this doc page.")))}l.isMDXComponent=!0},34673:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(86043);const s="details_lb9f",c="isBrowser_bmU9",u="collapsibleContent_i85q";function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function m(e){let{summary:t,children:n,...m}=e;const h=(0,l.Z)(),f=(0,r.useRef)(null),{collapsed:g,setCollapsed:k}=(0,i.u)({initialState:!m.open}),[b,v]=(0,r.useState)(m.open),y=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,a.Z)({},m,{ref:f,open:b,"data-collapsed":g,className:(0,o.Z)(s,h&&c,m.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&p(t,f.current)&&(e.preventDefault(),g?(k(!1),v(!0)):k(!0))}}),y,r.createElement(i.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{k(e),v(!e)}},r.createElement("div",{className:u},n)))}const h="details_b_Ee";function f(e){let{...t}=e;return r.createElement(m,(0,a.Z)({},t,{className:(0,o.Z)("alert alert--info",h,t.className)}))}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(76775),s=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=n(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},22307:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(87462),r=n(67294);const o="columns_Terr";function l(e){const t=e.style||{};t.gap=e.spacing||20,e.columns?t.gridTemplateColumns=e.columns.map((e=>`${e}`)).join(" "):t.gridTemplateColumns="repeat(2, 1fr)";const n={...e};return delete n.columns,delete n.spacing,delete n.breakAt,r.createElement("div",(0,a.Z)({className:o,"data-break-at":e.breakAt??"md"},n,{style:t}),e.children)}l.isMDXComponent=!0},61667:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(95999),o=n(24654);function l(e){let{content:t}=e;return a.createElement(o.Z,{summary:a.createElement("summary",null,a.createElement(r.Z,null,"See full code"))},a.createElement("div",null,t))}l.isMDXComponent=!0},24654:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(87462),r=n(67294),o=n(34673);function l(e){return r.createElement(r.Fragment,null,r.createElement(o.Z,(0,a.Z)({},e,{"data-size":e.size||"normal"})))}}}]);