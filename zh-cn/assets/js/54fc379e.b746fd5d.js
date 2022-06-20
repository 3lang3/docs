"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[98],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2900:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(5443),o=n(3010),a=(n(9496),n(9613)),i=["components"],c={sidebar_position:7},s="\ud83c\udf10 Localization",l={unversionedId:"docs/recipes/localization/README",id:"docs/recipes/localization/README",title:"\ud83c\udf10 Localization",description:"This page is a temporary solution and greatly simplified since it's not ideal. We're working in progress on an easy way of doing localization for the upcoming version.",source:"@site/docs/docs/recipes/localization/README.md",sourceDirName:"docs/recipes/localization",slug:"/docs/recipes/localization/",permalink:"/zh-cn/docs/recipes/localization/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docs/recipes/localization/README.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users",permalink:"/zh-cn/docs/recipes/manage-users/"},next:{title:"\ud83d\ude80 Deployment",permalink:"/zh-cn/docs/recipes/deployment/"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-localization"},"\ud83c\udf10 Localization"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This page is a temporary solution and greatly simplified since it's not ideal. We're working in progress on an easy way of doing localization for the upcoming version."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set up a Logto dev environment."),(0,a.kt)("li",{parentName:"ol"},"Add your language code to ",(0,a.kt)("inlineCode",{parentName:"li"},"enum Language")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"packages/phrases/src/types.ts"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},".ts")," file using your language code in lowercase (",(0,a.kt)("inlineCode",{parentName:"li"},"packages/phrases/src/locales/fr.ts"),"), and mimic ",(0,a.kt)("inlineCode",{parentName:"li"},"zh-cn.ts"),"."),(0,a.kt)("li",{parentName:"ol"},"Add your locale to ",(0,a.kt)("inlineCode",{parentName:"li"},"const resource")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"packages/phrases/src/index.ts"),"."),(0,a.kt)("li",{parentName:"ol"},"Build Logto and try.")))}m.isMDXComponent=!0}}]);