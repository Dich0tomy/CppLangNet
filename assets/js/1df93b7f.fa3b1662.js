"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[53237],{32431:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var r=n(67294),a=n(95999),l=n(22126),o=n(44996);const i="container_ksaW",s="supportersList_jCtV",c="supporterCard_avcc",m="supporterCardInner_lVN3",u=[{name:"PJAIT",tagline:"Polish-Japanese Academy of Information Technology",logo:"img/supporters/pjait.png",alt:"PJATK logo",siteLink:"https://pja.edu.pl/en/"}];function p(){return r.createElement("div",{className:i},r.createElement("h2",null,"Supporters"),r.createElement("div",{className:s},u.map((e=>r.createElement(d,{key:e.name,name:e.name,tagline:e.tagline,logo:(0,o.Z)(e.logo),alt:e.alt,siteLink:e.siteLink})))))}function d(e){return r.createElement("a",{className:c,href:e.siteLink,target:"_blank",rel:"noreferrer"},r.createElement("div",{className:m},r.createElement("figure",null,r.createElement("img",{src:e.logo,alt:e.alt})),r.createElement("div",null,r.createElement("h3",null,e.name),r.createElement("p",null,e.tagline))))}var g=n(87462);const h="features_n5oe",E="pageCardSvg_MbJ1",f="pageCard_XScE",v="pageCardInner_HqFf",b="normalIcon_P3dL",k="hoverIcon_Gqw4",w="pageCardText_DgSD";var y=n(50941);const _=function(e,t){return void 0===t&&(t=e),{default:{light:`img/icons/vscode/light/${e}.svg`,dark:`img/icons/vscode/dark/${t}.svg`},color:{light:`img/icons/vscode/light/${e}-color.svg`,dark:`img/icons/vscode/dark/${t}-color.svg`}}},N=[{title:(0,a.I)({message:"Learn",id:"langFeature.Learn"}),url:"learn/",svgPath:_("book"),description:r.createElement(r.Fragment,null,"None yet.")},{title:(0,a.I)({message:"Docs",id:"langFeature.Docs"}),svgPath:_("repo"),url:"docs/",description:r.createElement(r.Fragment,null,"None yet.")},{title:(0,a.I)({message:"Tools",id:"langFeature.Tools"}),url:"tools/",svgPath:_("tools"),description:r.createElement(r.Fragment,null,"None yet.")},{title:(0,a.I)({message:"Community",id:"langFeature.Community"}),url:"community/",svgPath:_("community"),description:r.createElement(r.Fragment,null,"None yet.")}];function C(e){let{svgPath:t,title:n,url:a,description:l}=e;return r.createElement("div",{className:f},r.createElement("a",{href:a,className:v},r.createElement("div",{className:E},"object"==typeof t&&r.createElement(y.Z,{className:b,sources:t.default}),"string"==typeof t&&r.createElement("img",{src:t,alt:n}),"object"==typeof t&&"object"==typeof t.color&&r.createElement(y.Z,{className:k,sources:t.color})),r.createElement("div",{className:w},r.createElement("p",null,n))))}function x(){return r.createElement("section",{className:h},N.map(((e,t)=>r.createElement(C,(0,g.Z)({key:t},e)))))}const P={textPart:"textPart_wgve",bringHeroBannerIn:"bringHeroBannerIn_dg4g","background-strip":"background-strip_tUUl","background-circle":"background-circle_LQq1","main-part":"main-part_wmZ_","supporters-part":"supporters-part_MegI","features-part":"features-part_Xaif","links-part":"links-part_lO9N",title:"title_spfF","title-verb":"title-verb_Jzvm",outlined:"outlined_zheR",subtitle:"subtitle_HUvt",btnGrad:"btnGrad_oaw3",interactiveEditor:"interactiveEditor_luFf",content:"content_jvMX"},I="https://www.linkedin.com/in/pawe%C5%82-syska-b00155227/",T="https://discord.gg/NvBNvpgUHZ";function F(){const e=r.createElement("a",{href:I,target:"_blank"},"LinkedIn"),t=r.createElement("a",{href:T},"Discord");return r.createElement("section",{className:"homepage-section homepage-contact-section"},r.createElement("header",null,r.createElement("h2",null,"Contact")),r.createElement("main",null,r.createElement("figure",null,r.createElement("img",{src:"https://i.imgur.com/31E5neo.jpg",alt:"Pawe\u0142's profile picture"})),r.createElement("p",null,"Hi, my name is Pawe\u0142 Syska and I'm the maintainer of the Cpp-Lang.net website.",r.createElement("br",null),"You can contact me via ",e," or our ",t," server.")))}var L=n(17419),U=n(35545),Z=n(19602),z=n(23370),j=n.n(z),H=n(11447),S=n.n(H),W=n(60614);function B(e){let{onChange:t}=e;return r.createElement(U.Z,{id:"example-selection",sx:{width:400,display:"block",margin:"0 auto"},size:"small",options:q,onChange:(e,n)=>{"object"==typeof n&&n&&t?.(e,n)},defaultValue:q[0],getOptionLabel:e=>"string"==typeof e?e:e.title,renderInput:e=>r.createElement(L.Z,(0,g.Z)({},e,{label:"Choose example",margin:"normal"})),renderOption:(e,t,n)=>{let{inputValue:a}=n;const l=S()(t.title,a,{insideWords:!0}),o=j()(t.title,l),i="object"==typeof t&&void 0!==t.runUrl;return r.createElement("li",e,r.createElement("div",null,o.map(((e,t)=>r.createElement("span",{key:t,style:{fontWeight:e.highlight?700:400}},e.text)))),r.createElement("span",{style:{marginLeft:"auto",color:i?"green":"gray"}},r.createElement(Z.Z,null)))}})}const q=[{title:"Hello, World (C++23)",code:'import std;\n\nauto main() -> int {\n  std::println("Hello, {}", "World");\n}',codeTitle:'A classic "Hello, World" program (C++23)'},{title:"Hello, World",code:'#include <iostream>\n\nauto main() -> int {\n  std::cout << "Hello, World!\\n";\n}',codeTitle:'A classic "Hello, World" program (C++11)',runUrl:"https://compiler-explorer.com/z/WT8qMqM1K"},{title:"Sort array (C++20)",code:"#include <iostream>\n#include <array>\n#include <algorithm>\n\nauto main() -> int {\n  auto arr = std::array{ 3, 1, 2 };\n  std::ranges::sort(arr);\n  for (auto elem : arr) {\n    std::cout << elem << ' ';\n  }\n}",codeTitle:"Sort an array of integers (C++20)",runUrl:"https://compiler-explorer.com/z/TxP4W5ccs"},{title:"Reverse words in string (C++23)",code:"#include <iostream>\n#include <string_view>\n#include <ranges>\n\nauto main() -> int {\n  auto text = std::string_view(\"How I wish I could recollect pi easily today!\");\n\n  auto reversed_words = text\n    | std::views::reverse\n    | std::views::split(' ')\n    | std::views::transform(std::views::reverse)\n    | std::views::join_with(' ');\n\n  for (auto w : reversed_words)\n    std::cout << w;\n}",codeTitle:"Reverse words in string (C++23)",runUrl:"https://compiler-explorer.com/z/Pxbf86dM6"},{title:"Simple structure (C++20)",code:'// prism-push-types:Player\n#include <iostream>\n#include <format>\n\nstruct Player {\n  std::string name;\n  float max_health = 50;\n  float health = 50;\n\n  auto level_up() -> void {\n    max_health += 20;\n    health += 20;\n  }\n};\n\nauto display(Player const& p) -> void {\n  std::cout << std::format("{}\\n- hp: {:.1f}/{:.1f}", p.name, p.health, p.max_health);\n}\n\nauto main() -> int {\n  auto p = Player();\n  p.name = "Bezi";\n  for (int i = 0; i < 3; ++i)\n    p.level_up();\n\n  display(p);\n}',codeTitle:"A simple structure of a player (C++20)",runUrl:"https://compiler-explorer.com/z/EPcfEa4E6"}];function A(e){let{runUrl:t}=e;const n=void 0===t,a="Run in Compiler Explorer";return r.createElement("div",{className:"homepage-code-run-button","data-disabled":n?"true":"false"},n&&r.createElement("span",{title:"This example doesn't have a run link. This is most likely because none of the major compilers currently support this code."},a),!n&&r.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},a))}function M(){const[e,t]=r.useState(q[0]);return r.createElement("section",{className:"homepage-section homepage-browse-section"},r.createElement("header",null,r.createElement("h2",null,"Overview"),r.createElement("p",{className:"homepage-section-subtitle"},"C++ is a general-purpose programming language that compiles to a native code, created by ",r.createElement("a",{href:"https://en.wikipedia.org/wiki/Bjarne_Stroustrup"},"Bjarne Stroustrup"),". Here are a few examples of code written in modern C++.")),r.createElement("main",null,r.createElement(B,{onChange:(e,n)=>{t(n)}}),r.createElement(A,{runUrl:e.runUrl}),r.createElement(W.Z,{language:"cpp",title:e.codeTitle},e.code)))}const D=[{title:"Standard: latest draft",url:"https://eel.is/c++draft/"},{title:"Papers: browse",url:"https://isocpp.org/std/status"},{title:"Books: show listing",url:"https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list"},{title:"Cpp Quiz: test yourself",url:"https://cppquiz.org/"}],J=[{title:"Compiler Explorer",url:"https://compiler-explorer.com/"},{title:"Cpp Insights",url:"https://cppinsights.io/"}],$=[];function O(){const e=e=>r.createElement("ul",null,e.map((e=>r.createElement("li",{key:e.url+e.title},r.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer"},e.title)))));return r.createElement("div",{className:"homepage-links-container"},r.createElement("h2",null,"Links"),e(D),e(J),e($))}const Q=[{title:"Up-to-date",imageUrl:"img/homepage/Modern.webp",description:r.createElement(r.Fragment,null,"We aim to provide the ",r.createElement("a",{href:"#",target:"_blank"},"latest knowledge")," about C++ with focus on modern practices.")},{title:"Quizzes",imageUrl:"img/homepage/Quiz.webp",description:r.createElement(r.Fragment,null,"You can test your knowledge with our ",r.createElement("a",{href:"#",target:"_blank"},"quizzes"),".")},{title:"Blog posts",imageUrl:"img/homepage/Blog.webp",description:r.createElement(r.Fragment,null,"We have a ",r.createElement("a",{href:"blog",target:"_blank"},"blog")," where we post interesting stuff about the language. Feel free to ",r.createElement("a",{href:"contributing",target:"_blank"},"post your own")," stuff.")}];function R(e){return r.createElement(r.Fragment,null,r.createElement("div",{className:"homepage-slider-dots"},Array.from({length:e.numFeatures},((t,n)=>r.createElement("span",{key:n,"data-active":`${n===e.currentIndex}`})))),r.createElement("div",{className:"homepage-slider-controls"},r.createElement("button",{onClick:e.onPrev},"<"),r.createElement("span",{className:"slider-feature-name"},e.featureName),r.createElement("button",{onClick:e.onNext},">")))}function V(){const[e,t]=r.useState(0),n=Q.length,a=r.useCallback((()=>{t((e+1)%n)}),[e]),l=r.useCallback((()=>{t((e-1+n)%n)}),[e]);return r.useEffect((()=>{const e=setTimeout(a,5e3);return()=>clearTimeout(e)}),[e]),r.createElement("div",{className:"homepage-slider-container"},r.createElement("figure",null,r.createElement("img",{src:(0,o.Z)(Q[e].imageUrl),alt:Q[e].title})),r.createElement("p",null,Q[e].description),r.createElement(R,{currentIndex:e,onNext:a,onPrev:l,featureName:Q[e].title,numFeatures:n}))}function Y(){return r.createElement("div",{className:"site-hero-banner"},r.createElement("section",{className:"site-hero-text-part "+P["main-part"]},r.createElement("div",{className:P["main-part-container"]},r.createElement("h1",{className:P.title},r.createElement("span",{className:P["title-verb"]},"Learn")," ",r.createElement("span",{className:P.outlined},"C++")," on",r.createElement("br",null),"Cpp-Lang.Net"),r.createElement("p",{className:P.subtitle},r.createElement(a.Z,null,"Your completely free, "),r.createElement("a",{href:"https://github.com/Cpp4You/CppLangNet",target:"_blank",rel:"noreferrer"},r.createElement(a.Z,null,"open source")),", ",r.createElement(a.Z,null,"all-in-one website about C++.")),r.createElement(x,null))),r.createElement("section",{className:P["supporters-part"]},r.createElement(p,null)),r.createElement("section",{className:P["features-part"]},r.createElement(V,null),r.createElement("div",{className:P["background-circle"]},r.createElement("div",null))),r.createElement("section",{className:P["links-part"]},r.createElement(O,null)),r.createElement("div",{className:P["background-strip"]}))}function G(){return r.createElement(l.Z,{description:"The modern website for C++ language to improve its accessibility."},r.createElement("main",{className:"homepage-main-wrapper"},r.createElement(Y,null),r.createElement(M,null),r.createElement(F,null)))}}}]);