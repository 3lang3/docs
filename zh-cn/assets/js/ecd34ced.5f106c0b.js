"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3073],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||s;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8853:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var n=r(5443),o=r(3010),s=(r(9496),r(9613)),i=["components"],a={sidebar_position:3.1},p=void 0,c={unversionedId:"sdk/Swift/Logto/Enums/LogtoErrors.Response",id:"sdk/Swift/Logto/Enums/LogtoErrors.Response",title:"LogtoErrors.Response",description:"\u679a\u4e3e",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Swift/Logto/Enums/LogtoErrors.Response.md",sourceDirName:"sdk/Swift/Logto/Enums",slug:"/sdk/Swift/Logto/Enums/LogtoErrors.Response",permalink:"/zh-cn/sdk/Swift/Logto/Enums/LogtoErrors.Response",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Swift/Logto/Enums/LogtoErrors.Response.md",tags:[],version:"current",sidebarPosition:3.1,frontMatter:{sidebar_position:3.1},sidebar:"sdkSidebar",previous:{title:"LogtoErrors",permalink:"/zh-cn/sdk/Swift/Logto/Enums/LogtoErrors"},next:{title:"LogtoErrors.UriVerification",permalink:"/zh-cn/sdk/Swift/Logto/Enums/LogtoErrors.UriVerification"}},u={},l=[{value:"\u679a\u4e3e\u60c5\u51b5",id:"\u679a\u4e3e\u60c5\u51b5",level:2},{value:"<code>notHttpResponse(response:)</code>",id:"nothttpresponseresponse",level:3},{value:"<code>withCode(code:httpResponse:data:)</code>",id:"withcodecodehttpresponsedata",level:3}],d={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u679a\u4e3e")),(0,s.kt)("h1",{id:"logtoerrorsresponse"},(0,s.kt)("inlineCode",{parentName:"h1"},"LogtoErrors.Response")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"public enum Response: LocalizedError, Equatable\n")),(0,s.kt)("h2",{id:"\u679a\u4e3e\u60c5\u51b5"},"\u679a\u4e3e\u60c5\u51b5"),(0,s.kt)("h3",{id:"nothttpresponseresponse"},(0,s.kt)("inlineCode",{parentName:"h3"},"notHttpResponse(response:)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"case notHttpResponse(response: URLResponse?)\n")),(0,s.kt)("h3",{id:"withcodecodehttpresponsedata"},(0,s.kt)("inlineCode",{parentName:"h3"},"withCode(code:httpResponse:data:)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"case withCode(code: Int, httpResponse: HTTPURLResponse, data: Data?)\n")))}f.isMDXComponent=!0}}]);