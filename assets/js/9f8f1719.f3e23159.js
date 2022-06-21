"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1528],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,g=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5929:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(9496),r="container_WYEs",i=function(e){var t=e.columns,n=e.justifyContent,i=void 0===n?"flex-start":n;return a.createElement("div",{className:r,style:{justifyContent:i}},t.map((function(e){var t=e.title,n=e.items;return a.createElement("div",{key:t},a.createElement("h4",null,t),a.createElement("ul",null,n.map((function(e){var t=e.key,n=e.node;return a.createElement("li",{key:t},null!=n?n:t)}))))})))}},1427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var a=n(5443),r=n(3010),i=(n(9496),n(9613)),o=n(5929),l=["components"],p={sidebar_position:2},c="Create and integrate the first application",s={unversionedId:"docs/tutorials/get-started/create-and-integrate-the-first-app",id:"docs/tutorials/get-started/create-and-integrate-the-first-app",title:"Create and integrate the first application",description:'In the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab. Then click the "Create Application" button on this page.',source:"@site/docs/docs/tutorials/get-started/create-and-integrate-the-first-app.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/create-and-integrate-the-first-app",permalink:"/docs/tutorials/get-started/create-and-integrate-the-first-app",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/get-started/create-and-integrate-the-first-app.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Check out the demo app",permalink:"/docs/tutorials/get-started/check-out-demo"},next:{title:"Customize sign-in experience",permalink:"/docs/tutorials/get-started/customize-sign-in-experience"}},u={},d=[{value:"Choose your application type",id:"choose-your-application-type",level:2},{value:"Enter application name",id:"enter-application-name",level:2},{value:"Integrate Logto",id:"integrate-logto",level:2},{value:"Integration guides",id:"integration-guides",level:3},{value:"What&#39;s next",id:"whats-next",level:2}],h={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-and-integrate-the-first-application"},"Create and integrate the first application"),(0,i.kt)("p",null,'In the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab. Then click the "Create Application" button on this page.'),(0,i.kt)("h2",{id:"choose-your-application-type"},"Choose your application type"),(0,i.kt)("p",null,"In the opening modal, choose which type of application you'd like to integrate:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Native App")," is an app that runs in a native environment. E.g., iOS app, Android app."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Single Page App")," is an app that runs in a web browser, which updates the page with the new data from the server without loading entire new pages. E.g., React DOM app, Vue app."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Traditional Web App")," is an app that renders and updates pages by the web server alone. E.g., JSP, PHP.")),(0,i.kt)("p",null,"We prepared different tutorials for each application type, and it'll be helpful if you choose the type properly."),(0,i.kt)("h2",{id:"enter-application-name"},"Enter application name"),(0,i.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,i.kt)("h2",{id:"integrate-logto"},"Integrate Logto"),(0,i.kt)("p",null,"Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'If you skip the guide in Admin Console by accident, you can also pick the guide from the list below or click "Check Help Guide" in the application details page.'))),(0,i.kt)("h3",{id:"integration-guides"},"Integration guides"),(0,i.kt)(o.Z,{columns:[{title:"Native App",items:[{key:"iOS"},{key:"Android"}]},{title:"Single Page App",items:[{key:"Vanilla JS"},{key:"React"},{key:"Vue"}]},{title:"Tranditional Web App",items:[{key:"ExpressJS"},{key:"Other Web Servers"}]}],mdxType:"Columns"}),(0,i.kt)("h2",{id:"whats-next"},"What's next"),(0,i.kt)("p",null,"Let's add some branding elements by customizing Sign-in Experience via Admin Console."))}g.isMDXComponent=!0}}]);