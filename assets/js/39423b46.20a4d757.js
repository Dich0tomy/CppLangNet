"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[91811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Writing a lesson",s={unversionedId:"guidelines/lesson",id:"guidelines/lesson",title:"Writing a lesson",description:"When writing a course lesson, it is important to be clear and detailed, but also to start simple",source:"@site/content/contributing/guidelines/lesson.mdx",sourceDirName:"guidelines",slug:"/guidelines/lesson",permalink:"/CppLangNet/contributing/guidelines/lesson",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/contributing/guidelines/lesson.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Translating documents",permalink:"/CppLangNet/contributing/writing-guide/translating"}},l={},c=[{value:"Document structure",id:"document-structure",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Building up",id:"building-up",level:3},{value:"Exploring a broader context",id:"exploring-a-broader-context",level:3},{value:"Common problems",id:"common-problems",level:3},{value:"Exercises",id:"exercises",level:3},{value:"Summary",id:"summary",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-a-lesson"},"Writing a lesson"),(0,r.kt)("p",null,"When writing a ",(0,r.kt)("a",{parentName:"p",href:"/learn/course/"},"course lesson"),", it is important to be clear and detailed, but also to start simple\nand gradually build on complexity."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"We must assume that the reader has no previous experience with the topic.")),(0,r.kt)("p",null,"Learning C++ is a complex process. Note that when starting out, it is easy to pick up a topic\nthat may be out of reach for the current state of the learner's knowledge. This is why the order and structure\nof the lessons are crucial in providing a smooth and incremental learning experience. It helps to avoid confusion\nand frustration by introducing new concepts in a logical and organized manner. Properly structured learning process\nwill result in a solid understanding of the language and its capabilities, which is the goal of our project."),(0,r.kt)("h2",{id:"document-structure"},"Document structure"),(0,r.kt)("p",null,"Each lesson should start with a brief description of what will be covered."),(0,r.kt)("h3",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"After the introduction we immediately proceed with the motivation. It's crucial to show the reader the importance of what they are about to learn.\nOne effective way to do this is by providing examples of code that fail or have problems when the concept being taught in the lesson is not applied.\nThis helps the learner understand how it can be used to solve common issues in C++ programming.\nBy seeing the tangible benefits and real-world problems that the concept can help solve, the reader is\nmore likely to be engaged and motivated to learn."),(0,r.kt)("h3",{id:"building-up"},"Building up"),(0,r.kt)("p",null,"After the motivation, we should start building up the concept. When teaching a new concept, it's essential to start with\nthe simplest example possible and then gradually increase complexity. This approach is important in any topic you could learn.\nWe will use lambdas as an example. A good starting point would be to demonstrate a simple lambda that adds two numbers,\ndefined locally as an alternative to a regular function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"auto add = [](int a, int b) {\n    return a + b;\n};\n\nstd::cout << add(2, 3) << '\\n';\n")),(0,r.kt)("p",null,"This allows the learner to understand the basic syntax and usage of lambdas before moving on to more complex examples.\nAs we progress, we can cover more specific examples, such as adding an explicit return type and capturing one or two variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Example: using an explicit return type"',title:'"Example:',using:!0,an:!0,explicit:!0,return:!0,'type"':!0},"//explicit return type\nauto add = [](int a, int b) -> int {\n    return a + b;\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Example: capturing variables"',title:'"Example:',capturing:!0,'variables"':!0},"int x = 10;\nauto addToX = [x](int a) {\n    return x + a;\n};\n\n// ...\nint y = 5;\nauto sumWithXAndY = [x, y](int a, int b) {\n    return a + b + x + y;\n};\n\nstd::cout << sumWithXAndY(2, 3) << '\\n';\n")),(0,r.kt)("p",null,"By starting with a simple example and gradually building upon it, learners are able to fully grasp the concept and understand\nhow it can be applied in more advanced scenarios."),(0,r.kt)("h3",{id:"exploring-a-broader-context"},"Exploring a broader context"),(0,r.kt)("p",null,"As learners begin to understand and master a new concept, it is important to introduce them to a broader range of usage.\nThis includes identifying areas where the concept should and shouldn't be applied as well as relating it to other, already known topics.\nFor example, when learning about lambdas in C++, it may be good to demonstrate how they can be used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"std::transform")," algorithm\nfor efficient data manipulation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Example: using lambdas in std::transform"',title:'"Example:',using:!0,lambdas:!0,in:!0,'std::transform"':!0},"// transforming numbers to their squares\nstd::vector<int> data{1, 2, 3, 4, 5};\nstd::transform(data.begin(), data.end(), data.begin(), [](int x) { return x*x; });\n")),(0,r.kt)("p",null,"It's important to keep in mind that some topics may be very complex and it's reasonable to leave the more advanced usage for\nanother document that readers can refer to later in the course. This allows them to focus on mastering the basics before\ndiving into more complex usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Example: using lambdas in a more advanced context"',title:'"Example:',using:!0,lambdas:!0,in:!0,a:!0,more:!0,advanced:!0,'context"':!0},"struct Student {\n    std::string name;\n    double grade;\n    //other fields\n};\nstd::vector<Student> students = ...;\nstd::ranges::sort(students,\n    [](const Student& a, const Student& b) {\n        return a.grade > b.grade;\n    }\n);\n")),(0,r.kt)("h3",{id:"common-problems"},"Common problems"),(0,r.kt)("p",null,"It's essential to make reader aware of the most common problems that can occur. This includes understanding what can go wrong when\nnot paying enough attention. Beginners in particular tend to forget about simple things, and then they spend a lot of time trying to fix it.\nThis is why it is crucial to sensitize learners to the most common problems early on, so they can avoid them and focus on mastering the concept."),(0,r.kt)("p",null,"For example, when working with lambdas, one common mistake is a missing semicolon, which can lead to compilation errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Example: missing semicolon"',title:'"Example:',missing:!0,'semicolon"':!0},"auto add = [](int a, int b) {\n// error-next-line\n    return a + b\n}\n")),(0,r.kt)("p",null,"Another common problem is forgetting to capture a variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Example: forgetting to capture a variable"',title:'"Example:',forgetting:!0,to:!0,capture:!0,a:!0,'variable"':!0},"int x = 10;\nauto addToX = [](int a) {\n// error-next-line\n    return x + a;\n};\n")),(0,r.kt)("p",null,"We could also mention forgetting the square brackets:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Example: forgetting the square brackets"',title:'"Example:',forgetting:!0,the:!0,square:!0,'brackets"':!0},"int x = 10;\n// error-next-line\nauto add = (int a, int b) {\n    return a + b;\n};\n")),(0,r.kt)("h3",{id:"exercises"},"Exercises"),(0,r.kt)("p",null,"One effective way to help learners master a new concept is by providing them with meaningful and challenging exercises.\nThese exercises should be designed to push learners to think critically and apply what they've learned in new and varied ways."),(0,r.kt)("p",null,"We're already working on a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Cpp4You/react-quizaurus"},"Quiz component")," to help with this, but for now we have\nto stick with a casual list of exercises."),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this section, we will review key takeaways and main concepts covered in the course.\nIt will help learners to reinforce their understanding and provide an overview of the course content."))}u.isMDXComponent=!0}}]);