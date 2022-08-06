"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3584:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},u="Frequently Asked Questions",s={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"Q: What is Teledrive?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/mgilangjanuar/teledrive/edit/staging/docs/docs/faq.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/docs/intro"}},c={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,i.kt)("p",null,"Q: What is Teledrive?"),(0,i.kt)("p",null,"A: Teledrive is a free cloud storage program that allows you to have free unlimited cloud using the Telegram API"),(0,i.kt)("p",null,"Q: Bandwidth limits are there any?"),(0,i.kt)("p",null,"A: No, Teledrive allows you to upload as much as you want without any bandwidth limit within the program.\n",(0,i.kt)("em",{parentName:"p"},"Free Heroku deployments do have a 2TB per month bandwidth limit"),"."),(0,i.kt)("p",null,"Q: File size limits are any?"),(0,i.kt)("p",null,"A: No, Teledrive automatically splits up your files for your upload to Telegram.\n",(0,i.kt)("em",{parentName:"p"},"This way Teledrive doesn't have any file size limits.")),(0,i.kt)("p",null,"Q: How long will my files be on Teledrive?"),(0,i.kt)("p",null,"A: Telegram has automatic self-destruction if you don't use it in 6 months by default but you can set it to 1 year.\nKeep your Telegram account active that way your files don't get deleted."),(0,i.kt)("h1",{id:"docker-frequently-asked-questions"},(0,i.kt)("strong",{parentName:"h1"},"Docker Frequently Asked Questions")),(0,i.kt)("p",null,"Q: How do I start containers?"),(0,i.kt)("p",null,"A: You will need to run this command\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ cd teledrive/docker"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ docker-compose up -d")),(0,i.kt)("p",null,"Q: How much RAM do I need to host?"),(0,i.kt)("p",null,"A: Minimum of 2.5GB of RAM (building requirement)"),(0,i.kt)("h1",{id:"manual-installation-frequently-asked-questions"},(0,i.kt)("strong",{parentName:"h1"},"Manual installation Frequently Asked Questions")),(0,i.kt)("p",null,"Q: How much RAM do I need to host?"),(0,i.kt)("p",null,"A: Minimum of 2.5GB of RAM (building requirement)"),(0,i.kt)("h1",{id:"heroku-deployment-frequently-asked-questions"},(0,i.kt)("strong",{parentName:"h1"},"Heroku Deployment Frequently Asked Questions")),(0,i.kt)("p",null,"Q: How much bandwidth can I use for Heroku deployment?"),(0,i.kt)("p",null,"A: Heroku provides 2TB per month for free deployment."))}m.isMDXComponent=!0}}]);