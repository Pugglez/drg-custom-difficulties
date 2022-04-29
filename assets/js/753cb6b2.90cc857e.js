"use strict";(self.webpackChunkcustom_difficulty_docs=self.webpackChunkcustom_difficulty_docs||[]).push([[8538],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2729:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},l="Introduction",c={unversionedId:"overview/intro",id:"overview/intro",title:"Introduction",description:"Modio Page//drg.mod.io/custom-difficulty",source:"@site/docs/overview/intro.md",sourceDirName:"overview",slug:"/overview/intro",permalink:"/docs/overview/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/overview/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/overview/getting-started"}},u={},d=[],p={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Modio Page: ",(0,o.kt)("a",{parentName:"strong",href:"https://drg.mod.io/custom-difficulty"},"https://drg.mod.io/custom-difficulty"))),(0,o.kt)("p",null,"Custom Difficulty is a comprehensive mod that allows you to set your own difficulty experience, made\neasily configurable in JSON format. You can create, edit, and save different difficulty presets that can be\naccessed and enabled on the fly. This makes it possible to save a preset for Hazard 5, Hazard 6x2,\nHazard 7, and Starship Troopers then be able to switch between these presets without ever having to\nreload any mods or remake your lobby!"),(0,o.kt)("p",null,"For most properties, such as enemy movement speed or enemy count, it's even possible to edit these\nvalues in the middle of the mission."),(0,o.kt)("p",null,"Custom Difficulty can also be paired with ",(0,o.kt)("a",{parentName:"p",href:"https://drg.mod.io/all-deep-dives-hazard-5"},"All Deep Dives Hazard 5"),"\nmod to have your customized difficulties be applied to all three stages of both the Regular and Elite\nDeep Dives."),(0,o.kt)("p",null,"Here is a broad list of configurable properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Most values found in a Hazard file (Enemy Health, Move Speed, Enemy Count, Attack Damage, etc...)"),(0,o.kt)("li",{parentName:"ul"},"Enemy Spawn Cap (how many max enemies can be present in a mission at any given time)"),(0,o.kt)("li",{parentName:"ul"},"Resupply Pod Nitra Cost"),(0,o.kt)("li",{parentName:"ul"},"Doretta Damage Resistance"),(0,o.kt)("li",{parentName:"ul"},"Adding or removing enemy descriptors from the spawn pools"),(0,o.kt)("li",{parentName:"ul"},"Modifying or defining new enemy descriptors"),(0,o.kt)("li",{parentName:"ul"},"Attaching pawn stats to enemy descriptors (movement speed/weaknesses/etc.)"),(0,o.kt)("li",{parentName:"ul"},"Apply modifiers to enemies spawned from descriptors (size/time dilation/elite state)"),(0,o.kt)("li",{parentName:"ul"},"Disabling disruptive seasonal events (prospector, data deposit, etc...)")),(0,o.kt)("p",null,"drg-custom-difficulties is a repository of difficulties to be used with this mod. It contains the vanilla difficulties, Hazard 6 and 7 by Ike, as well as some other experimental difficulties. It also contains a JSON schema with descriptions for all properties which can be used in VS Code for auto completion."),(0,o.kt)("p",null,"Difficulties can also be imported from the base game and enabled mods (ONLY allowed when it's the first time in the space rig after starting the game). To import Hazard 6, for example, install and enable both Custom Difficulty and Hazard 6, restart the game, then it will be available at the bottom of the difficulties menu and can be saved as a regular difficulty. Imported difficulties will have the default spawn cap, resupply cost, escort mule health, etc. so be sure to update those if necessary."),(0,o.kt)("p",null,"When importing difficulties, I recommend enabling ONLY Custom Difficulty (+ModHub and DRGLib) and the difficulty mod to import. Having a lot of mods makes it easy to accidentally install conflicts and/or cause mod loading issues."),(0,o.kt)("p",null,"Special thanks to:"),(0,o.kt)("p",null,"The Brain for diving into the spawning mechanics and figuring out how they work as well as developing some great tools for building difficulties\nVirryn for constantly breaking things and making me fix them\n...and everyone else who helped test! :D"))}f.isMDXComponent=!0}}]);