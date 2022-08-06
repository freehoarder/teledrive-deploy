"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[871],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5904:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={slug:"upgrade-210",title:"Upgrade to 2.1.0",author:"M Gilang Januar",author_title:"The Creator",author_url:"https://github.com/mgilangjanuar",author_image_url:"https://avatars.githubusercontent.com/u/3146378?v=4",tags:["releases"]},p=void 0,u={permalink:"/blog/upgrade-210",editUrl:"https://github.com/mgilangjanuar/teledrive/edit/staging/blog/blog/2022-04-08-upgrade-210.md",source:"@site/blog/2022-04-08-upgrade-210.md",title:"Upgrade to 2.1.0",description:"What's New?",date:"2022-04-08T00:00:00.000Z",formattedDate:"April 8, 2022",tags:[{label:"releases",permalink:"/blog/tags/releases"}],readingTime:1.665,truncated:!1,authors:[{name:"M Gilang Januar",title:"The Creator",url:"https://github.com/mgilangjanuar",imageURL:"https://avatars.githubusercontent.com/u/3146378?v=4"}],frontMatter:{slug:"upgrade-210",title:"Upgrade to 2.1.0",author:"M Gilang Januar",author_title:"The Creator",author_url:"https://github.com/mgilangjanuar",author_image_url:"https://avatars.githubusercontent.com/u/3146378?v=4",tags:["releases"]}},s={authorsImageUrls:[void 0]},d=[{value:"What&#39;s New?",id:"whats-new",level:2},{value:"Upgrade Guide",id:"upgrade-guide",level:2},{value:"1. Pull from GitHub",id:"1-pull-from-github",level:3},{value:"2. Update variables",id:"2-update-variables",level:3},{value:"3. Update database",id:"3-update-database",level:3},{value:"4. Rebuild and run",id:"4-rebuild-and-run",level:3},{value:"Frequiently Asked Questions",id:"frequiently-asked-questions",level:2}],m={toc:d};function c(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"whats-new"},"What's New?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Users Management (Admin Panel)")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(7389).Z,width:"2498",height:"1270"})),(0,l.kt)("h2",{id:"upgrade-guide"},"Upgrade Guide"),(0,l.kt)("h3",{id:"1-pull-from-github"},"1. Pull from GitHub"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git reset --hard\ngit clean -f\ngit pull origin main\n")),(0,l.kt)("h3",{id:"2-update-variables"},"2. Update variables"),(0,l.kt)("p",null,"There's a new environment variable that you can added to your application:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ADMIN_USERNAME"),": this variable is used for login to the admin panel.")),(0,l.kt)("p",null,"Select how you install your application to update your environment variable:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Manual installation:"),(0,l.kt)("p",{parentName:"li"},"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"ADMIN_USERNAME")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"server/.env")," file:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "ADMIN_USERNAME=your_telegram_username" >> server/.env\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Docker installation:"),(0,l.kt)("p",{parentName:"li"},"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"ADMIN_USERNAME")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"docker/.env")," file:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "ADMIN_USERNAME=your_telegram_username" >> docker/.env\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Heroku:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"heroku config:set ADMIN_USERNAME=your_telegram_username\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Vercel:"),(0,l.kt)("p",{parentName:"li"},"Go to the dashboard, select your project, and go to the ",(0,l.kt)("strong",{parentName:"p"},"Settings > Environment Variables"),". Then, add key: ",(0,l.kt)("inlineCode",{parentName:"p"},"ADMIN_USERNAME")," and value: ",(0,l.kt)("inlineCode",{parentName:"p"},"your_telegram_username"),"."))),(0,l.kt)("h3",{id:"3-update-database"},"3. Update database"),(0,l.kt)("p",null,"There's a new SQL file that you have to migrate to your database:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dump.20220406.sql"))),(0,l.kt)("p",null,"Select how you install your application to update your database schema:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Manual installation:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"psql teledrive < ./server/src/model/migrations/dump.20220406.sql\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Note.")," ",(0,l.kt)("em",{parentName:"p"},"Change ",(0,l.kt)("inlineCode",{parentName:"em"},"teledrive")," with your database name."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Docker installation:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd docker\ndocker container exec -i $(docker-compose ps -q db) psql -U postgres teledrive < ../server/src/model/migrations/dump.20220406.sql\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Heroku:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"heroku pg:psql --app YOUR_APP_NAME -f ./server/src/model/migrations/dump.20220406.sql\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Note.")," ",(0,l.kt)("em",{parentName:"p"},"Change ",(0,l.kt)("inlineCode",{parentName:"em"},"YOUR_APP_NAME")," to your application name.")))),(0,l.kt)("h3",{id:"4-rebuild-and-run"},"4. Rebuild and run"),(0,l.kt)("p",null,"Select how you deploy your application to rebuild the application:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Manual installation:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\nyarn workspaces run build\ncd server && node dist/index.js\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Docker installation:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd docker\ndocker-compose down\ndocker-compose up --build --force-recreate -d\ndocker image prune -f   # remove dangling images\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Heroku:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git push heroku main\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Vercel:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\nyarn workspaces run build\nvercel --prod\n")))),(0,l.kt)("h2",{id:"frequiently-asked-questions"},"Frequiently Asked Questions"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Q: How to change the default port?")),(0,l.kt)("p",null,"A: You can change the default port by update/add ",(0,l.kt)("inlineCode",{parentName:"p"},"PORT=80")," to your ",(0,l.kt)("inlineCode",{parentName:"p"},"server/.env")," file if you installed manually. Or, in ",(0,l.kt)("inlineCode",{parentName:"p"},"docker/.env")," file if you installed with Docker. Then, you need to ",(0,l.kt)("a",{parentName:"p",href:"#4-rebuild-and-run"},"rebuild")," the application to apply the changes."))}c.isMDXComponent=!0},7389:function(e,t,a){t.Z=a.p+"assets/images/SCR-20220408-nvj-a08e276da52cabf119fc34be5bc342b1.png"}}]);