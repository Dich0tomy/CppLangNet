"use strict";(self.webpackChunkcpp_lang_net=self.webpackChunkcpp_lang_net||[]).push([[44592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),l=n(11687);const o={sidebar_position:5,title:"Emacs setup",description:"Learn how to setup Emacs for coding in C++ Compiler easily.",tags:["editor","tool","emacs","lsp-mode","linux"],hide_title:!0},r="Emacs setup",s={unversionedId:"standalone/editors/setup-emacs",id:"standalone/editors/setup-emacs",title:"Emacs setup",description:"Learn how to setup Emacs for coding in C++ Compiler easily.",source:"@site/content/tools/standalone/editors/setup-emacs.mdx",sourceDirName:"standalone/editors",slug:"/standalone/editors/setup-emacs",permalink:"/CppLangNet/tools/standalone/editors/setup-emacs",draft:!1,editUrl:"https://github.com/Cpp4You/CppLangNet/edit/main/content/tools/standalone/editors/setup-emacs.mdx",tags:[{label:"editor",permalink:"/CppLangNet/tools/tags/editor"},{label:"tool",permalink:"/CppLangNet/tools/tags/tool"},{label:"emacs",permalink:"/CppLangNet/tools/tags/emacs"},{label:"lsp-mode",permalink:"/CppLangNet/tools/tags/lsp-mode"},{label:"linux",permalink:"/CppLangNet/tools/tags/linux"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Emacs setup",description:"Learn how to setup Emacs for coding in C++ Compiler easily.",tags:["editor","tool","emacs","lsp-mode","linux"],hide_title:!0},sidebar:"defaultSidebar",previous:{title:"Managing projects",permalink:"/CppLangNet/tools/standalone/editors/vs2022/managing-projects"},next:{title:"CLion setup",permalink:"/CppLangNet/tools/standalone/editors/setup-clion"}},p={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Downloading and Installing",id:"downloading-and-installing",level:2},{value:"Setting up MELPA and <code>use-package</code>",id:"setting-up-melpa-and-use-package",level:2},{value:"Setting up MELPA",id:"setting-up-melpa",level:3},{value:"Setting up <code>use-package</code>",id:"setting-up-use-package",level:3},{value:"General Customization of Emacs",id:"general-customization-of-emacs",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"emacs-setup"},"Emacs setup"),(0,i.kt)("p",null,"In this article, we will discuss how to setup Emacs for C++ development on Linux easily."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Emacs is one of the oldest and most versatile text editors available for Linux and\nUNIX-based systems. It\u2019s been around for a long time (more than twenty years for GNU emacs)\nand is well known for its powerful and rich editing features. Emacs is also more than just\na text editor; it can be customized and extended with different \u201cmodes\u201d, enabling it to be\nused like an Integrated Development Environment (IDE) for programming languages like C++, Java,\nC or Python."),(0,i.kt)("p",null,"In this article, we will be configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp-mode")," (Language Server Protocol) of emacs for\nC++ development. It is advised to learn the basic keybinds like saving a file, searchin a file,\nsearching in a file, etc of Emacs before satrting using it."),(0,i.kt)("admonition",{title:"Note",type:"important"},(0,i.kt)("p",{parentName:"admonition"},"This article for setting up Emacs is deicated to novice programmers who want to do C++ development\nin Emacs. After configuring Emacs according to this article, user will be able to get basic\nfunctionality like Code-Completion, Real-time Syntax checking, Code Navigation etc.\nFor advance configuration of ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp-mode")," for C++ development, refer ",(0,i.kt)("a",{parentName:"p",href:"https://emacs-lsp.github.io/lsp-mode/tutorials/CPP-guide/"},"here"))),(0,i.kt)("h2",{id:"downloading-and-installing"},"Downloading and Installing"),(0,i.kt)("p",null,"We will be installing Emacs from terminal in Linux."),(0,i.kt)("p",null,"First, we have to open up the terminal; we can use the shortcut\n",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"Alt")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," or we can manually open it up by searching it in\nthe menu"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Command 1:")," To begin, update the packages list using the below command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get update\n")),(0,i.kt)("p",null,"This command is used to download package information from all configured\nsources and to get the info of the updated versions of the packages."),(0,i.kt)("admonition",{title:"Note",type:"important"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"sudo")," ",(0,i.kt)("em",{parentName:"p"},"(Super User DO)")," enables a permitted user to run a command as\nthe ",(0,i.kt)("em",{parentName:"p"},"superuser")," or another user, depending on the security policy. So,\nif required, enter your system password to proceed.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Command 2:")," Now we will download Emacs by the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get install emacs\n")),(0,i.kt)("p",null,"If required enter your system ",(0,i.kt)("em",{parentName:"p"},"password")," to proceed.\nAfter download, you can check if Emacs is successfully installed in your\nsystem"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"emacs --version\n")),(0,i.kt)("p",null,"If installed successfully, output would be like this"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)(l.Z,{center:!0,alt:"Output for `emacs --version`",src:"/img/tutorials/tools/emacs-version.jpg",mdxType:"Image"}),(0,i.kt)("p",null,"Now we're good to customize Emacs, just open the ",(0,i.kt)("em",{parentName:"p"},"intitialization")," file of Emacs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ~/.emacs.d && emacs init.el\n")),(0,i.kt)("p",null,"All the customizing code for Emacs will be written in ",(0,i.kt)("inlineCode",{parentName:"p"},"init.el")," file."),(0,i.kt)("admonition",{title:"Note",type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Every time when it is mentioned here to save the file, it is meant to execute\n",(0,i.kt)("inlineCode",{parentName:"p"},"C-x``C-s")," (",(0,i.kt)("inlineCode",{parentName:"p"},"Control + x"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"Control + s"),") keybind and every time when it is\nmentioned here to execute the latest command/code from Emacs, it is meant to\nexecute ",(0,i.kt)("inlineCode",{parentName:"p"},"C-x``C-e")," (",(0,i.kt)("inlineCode",{parentName:"p"},"Control + x"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"Control + e"),") with cursor at the very end of the command/code.")),(0,i.kt)("h2",{id:"setting-up-melpa-and-use-package"},"Setting up MELPA and ",(0,i.kt)("inlineCode",{parentName:"h2"},"use-package")),(0,i.kt)("h3",{id:"setting-up-melpa"},"Setting up MELPA"),(0,i.kt)("p",null,"MELPA (Milkypostman's Emacs Lisp Package Archive) is an ELPA-compatible package repository\nthat contains an enormous amount of useful Emacs packages.\nAdd the following code and execute it in order to download other packages required to configure\nEmacs for C++ Development."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lisp",metastring:'title="init.el"',title:'"init.el"'},'(require \'package)\n(setq package-enable-at-startup nil)\n(add-to-list \'package-archives\n         \'("melpa" . "https://melpa.org/packages/")\n         \'("melpa-stable" . "https://stable.melpa.org/packages/"))\n(package-initialize)\n')),(0,i.kt)("p",null,"After executing the above lines of code, 5000+ packages will be available to you for downloading\ninside emacs. You can see them by running following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"M-x package-list-packages RET\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)(l.Z,{center:!0,alt:"List of packages in Emacs",src:"/img/tutorials/tools/package-list.jpg",mdxType:"Image"}),(0,i.kt)("h3",{id:"setting-up-use-package"},"Setting up ",(0,i.kt)("inlineCode",{parentName:"h3"},"use-package")),(0,i.kt)("p",null,"Add following code in ",(0,i.kt)("inlineCode",{parentName:"p"},"init.el")," and execute it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lisp",metastring:'title="init.el"',title:'"init.el"'},"(unless (package-installed-p 'use-package)\n  (package-refresh-contents)\n  (package-install 'use-package))\n")),(0,i.kt)("p",null,"Now we will be using ",(0,i.kt)("inlineCode",{parentName:"p"},"use-package")," to download and install any other package for emacs. ",(0,i.kt)("inlineCode",{parentName:"p"},"use-package"),"\nis a very popular package to organize the Emacs configuration and load the installed packages efficiently."),(0,i.kt)("p",null,"Copy the following code inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"inti.el")," file for downloading and installing the required packages for\nC++ development inside Emacs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lisp",metastring:'title="init.el"',title:'"init.el"'},'(use-package lsp-mode\n  :ensure t\n  :hook ((lsp-mode . lsp-enable-which-key-integration))\n  :config (setq lsp-completion-enable-additional-text-edit nil))\n(use-package lsp-ui\n  :commands lsp-ui-mode\n  :ensure t)\n(use-package ccls\n  :ensure t\n  :config\n  (setq ccls-executable "ccls")\n  (setq lsp-prefer-flymake nil)\n  (setq-default flycheck-disabled-checkers \'(c/c++-clang c/c++-cppcheck c/c++-gcc))\n  :hook ((c-mode c++-mode objc-mode) .\n         (lambda () (require \'ccls) (lsp))))\n(use-package flycheck\n  :ensure t)\n(use-package yasnippet\n  :ensure t\n  :config (yas-global-mode))\n(use-package which-key\n  :ensure t\n  :config (which-key-mode))\n(use-package helm-lsp\n  :ensure t)\n(use-package helm\n  :ensure t\n  :config (helm-mode))\n(use-package lsp-treemacs\n  :ensure t)\n\n;;; This will enable emacs to compile a simple cpp single file without any makefile by just pressing [f9] key\n(defun code-compile()\n  (interactive)\n  (unless (file-exists-p "Makefile")\n    (set (make-local-variable \'compile-command)\n     (let ((file (file-name-nondirectory buffer-file-name)))\n       (format "%s -o %s %s"\n           (if (equal (file-name-extension file) "cpp") "g++" "gcc")\n           (file-name-sans-extension file)\n           file)))\n    (compile compile-command)))\n(global-set-key [f9] \'code-compile)\n')),(0,i.kt)("p",null,"For properly identing the whole file hit ",(0,i.kt)("inlineCode",{parentName:"p"},"C-x h"),", this will select whole file and then hit ",(0,i.kt)("inlineCode",{parentName:"p"},"TAB"),".\nNow save the file and exit the emacs (",(0,i.kt)("inlineCode",{parentName:"p"},"C-x C-c"),")."),(0,i.kt)("p",null,"Now make a ",(0,i.kt)("inlineCode",{parentName:"p"},".cpp")," file (like ",(0,i.kt)("inlineCode",{parentName:"p"},"a.cpp")," but not in ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs.d/")," directory). I recommend to create a directory\ndedicated to programming only and there create the file. First on opening the Emacs, many packages will get\ndownloaded and get installed which can take some time. After that, ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp-mode")," will seek the language server\nfor cpp development and since this is the first time startup of the emacs after ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp-mode")," installation,\nit will ask to download the required language server for cpp, that is, ",(0,i.kt)("inlineCode",{parentName:"p"},"clangd"),". Below is the snapshot of\nEmacs asking to download ",(0,i.kt)("inlineCode",{parentName:"p"},"clangd")," server."),(0,i.kt)(l.Z,{center:!0,alt:"Prompt for downloading clangd inside Emacs",src:"/img/tutorials/tools/emacs-clangd-server.jpg",mdxType:"Image"}),(0,i.kt)("p",null,"After downloading ",(0,i.kt)("inlineCode",{parentName:"p"},"clangd")," server, run treemacs command by entering minibuffer (",(0,i.kt)("inlineCode",{parentName:"p"},"M-x treemacs"),")\n(",(0,i.kt)("inlineCode",{parentName:"p"},"M-x")," means ",(0,i.kt)("inlineCode",{parentName:"p"},"Alt + x")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ESC + x"),")."),(0,i.kt)("p",null,"When the command is run from minibuffer, output would be like this:-"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)(l.Z,{center:!0,alt:"Before initializing treemacs",src:"/img/tutorials/tools/before-treemacs-init.jpg",mdxType:"Image"}),(0,i.kt)("p",null,"Select the required directory from the provided options. In my case, my directory name is ",(0,i.kt)("inlineCode",{parentName:"p"},"Coding/")," which\ncontains ",(0,i.kt)("inlineCode",{parentName:"p"},"Java/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SFML/")," as sub directories. After selecting the rightful directory, output would be\nlike this:-"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)(l.Z,{center:!0,alt:"After initializing treemacs",src:"/img/tutorials/tools/after-treemacs-init.jpg",mdxType:"Image"}),(0,i.kt)("p",null,"Now let us make our first program by selecting the ",(0,i.kt)("inlineCode",{parentName:"p"},"a.cpp")," buffer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="a.cpp"',title:'"a.cpp"'},'#include <iostream>\n\nint main() {\n    std::cout << "Wassup World\\n";\n    \n    return 0;\n}\n')),(0,i.kt)("p",null,"We had already defined a function in our ",(0,i.kt)("inlineCode",{parentName:"p"},"init.el")," file for compiling a simple cpp file by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"[f9]"),"\nkey (See function ",(0,i.kt)("inlineCode",{parentName:"p"},"code-compile()")," in the last of ",(0,i.kt)("inlineCode",{parentName:"p"},"init.el")," file). So by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"[f9]")," key, this\nsimple code will get compiled without exiting emacs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)(l.Z,{center:!0,alt:"Compiling Code by hitting [f9] key",src:"/img/tutorials/tools/emacs-compile.jpg",mdxType:"Image"}),(0,i.kt)("p",null,"We can run the program inside the Emacs from Emacs shell, also known as ",(0,i.kt)("inlineCode",{parentName:"p"},"eshell"),".\nHit ",(0,i.kt)("inlineCode",{parentName:"p"},"C-x o")," to change buffer, then hit ",(0,i.kt)("inlineCode",{parentName:"p"},"C-x 2")," to split the current buffer into two buffers\nand then again hit ",(0,i.kt)("inlineCode",{parentName:"p"},"C-x o")," to change buffer. Changing the buffer can also be done by selecting\nthe buffer by mouse until you are using the GUI version of Emacs. Now for starting ",(0,i.kt)("inlineCode",{parentName:"p"},"eshell"),", run\n",(0,i.kt)("inlineCode",{parentName:"p"},"eshell")," command from minibuffer (",(0,i.kt)("inlineCode",{parentName:"p"},"M-x eshell"),"). Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"eshell")," is opened run your executable\nfile."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)(l.Z,{center:!0,alt:"Compiling Code by hitting [f9] key",src:"/img/tutorials/tools/emacs-eshell.jpg",mdxType:"Image"}),(0,i.kt)("p",null,"This is the basic guide for setting up Emacs for CPP development. For enabling and discovering\nmore features of ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp-mode")," refer ",(0,i.kt)("a",{parentName:"p",href:"https://emacs-lsp.github.io/lsp-mode/tutorials/CPP-guide/"},"here"),"."),(0,i.kt)("h2",{id:"general-customization-of-emacs"},"General Customization of Emacs"),(0,i.kt)("admonition",{title:"Note",type:"important"},(0,i.kt)("p",{parentName:"admonition"},"This section is completely ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"optional")),". This section doesn't contribute towards\nC++ development. In this section, we will just configuring looks of Emacs.")),(0,i.kt)("p",null,"When emacs is opened, it generally start with a startup message. If you want to disable it,\nenter this in your ",(0,i.kt)("inlineCode",{parentName:"p"},"init.el")," file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lisp",metastring:'title="init.el"',title:'"init.el"'},"(setq inhibit-startup-message t)\n")),(0,i.kt)("p",null,"For making scroll bar invisible"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lisp",metastring:'title="init.el"',title:'"init.el"'},"(toggle-scroll-bar -1)\n")),(0,i.kt)("p",null,"Save the file and execute this line.\nFor making it visibe again, just replace ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,i.kt)("p",null,"For making menu bar invisible"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lisp",metastring:'title="init.el"',title:'"init.el"'},"(menu-bar-mode -1)\n")),(0,i.kt)("p",null,"Save the file and execute this line.\nFor making it visibe again, just replace ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,i.kt)("p",null,"For making tool bar invisible"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lisp",metastring:'title="init.el"',title:'"init.el"'},"(tool-bar-mode -1)\n")),(0,i.kt)("p",null,"Save the file and execute this line.\nFor making it visibe again, just replace ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,i.kt)("p",null,"For making line number visible in front of every new line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lisp",metastring:'title="init.el"',title:'"init.el"'},"(global-linum-mode t)\n")),(0,i.kt)("p",null,"Save the file and execute this line.\nFor making it invisibe again, just replace ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,i.kt)("p",null,"Emacs also provides variety of built-in themes. User can see and enable the theme which suites them the most.\nFor viewing the built-in themes, run command ",(0,i.kt)("inlineCode",{parentName:"p"},"M-x customize-themes")," from minibuffer and select the required\ntheme. Emacs used in the snapshots provided in this guide uses material theme which can be downloaded by\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"use-package"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lisp",metastring:'title="init.el"',title:'"init.el"'},"(use-package material-theme\n  :ensure t)\n(load-theme 'material t)\n")),(0,i.kt)("p",null,"Restart the Emacs and the material theme will be loaded."))}d.isMDXComponent=!0},11687:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(87462),i=n(67294),l=n(44996),o=n(72412);function r(e){let t=null;if(e.desc){const n=e.center?{textAlign:"center",display:"block"}:{};t=i.createElement("small",{style:n},(0,o.Z)(e.desc))}const n=e.fullwidth||e.center,r={border:e.border?"1px solid gray":void 0,display:n?"block":"inline-block"},s=e.style||{};s.borderRadius=e.borderRadius||void 0,s.minWidth=e.minwidth||void 0,s.width=e.width||void 0,s.maxWidth=e.maxwidth||void 0,s.minHeight=e.minheight||void 0,s.height=e.height||void 0,s.maxHeight=e.maxheight||void 0,s.display="block",s.imageRendering="-webkit-optimize-contrast",e.center&&(s.margin="0 auto");const p={...e};return"string"==typeof e.src&&(p.src=e.src.startsWith("/img/")?(0,l.Z)(e.src):e.src),delete p.border,delete p.borderRadius,delete p.center,delete p.fullwidth,delete p.style,delete p.minwidth,delete p.width,delete p.maxwidth,delete p.minheight,delete p.height,delete p.maxheight,delete p.desc,i.createElement(i.Fragment,null,i.createElement("div",{style:r},i.createElement("img",(0,a.Z)({},p,{style:s}))),t)}r.isMDXComponent=!0},72412:(e,t,n)=>{function a(e){return"object"!=typeof e||Array.isArray(e)||void 0!==e.type?e:e.props.children}n.d(t,{Z:()=>a})}}]);