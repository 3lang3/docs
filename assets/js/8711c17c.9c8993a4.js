"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2006],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8397:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(5443),o=r(3010),a=(r(9496),r(9613)),i=["components"],c={},l=void 0,u={unversionedId:"sdk/Swift/Logto/Structs/JwtHeader",id:"sdk/Swift/Logto/Structs/JwtHeader",title:"JwtHeader",description:"STRUCT",source:"@site/docs/sdk/Swift/Logto/Structs/JwtHeader.md",sourceDirName:"sdk/Swift/Logto/Structs",slug:"/sdk/Swift/Logto/Structs/JwtHeader",permalink:"/sdk/Swift/Logto/Structs/JwtHeader",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Swift/Logto/Structs/JwtHeader.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"IdTokenClaims",permalink:"/sdk/Swift/Logto/Structs/IdTokenClaims"},next:{title:"LogtoCore.CodeTokenResponse",permalink:"/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"<code>alg</code>",id:"alg",level:3},{value:"<code>typ</code>",id:"typ",level:3}],d={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STRUCT")),(0,a.kt)("h1",{id:"jwtheader"},(0,a.kt)("inlineCode",{parentName:"h1"},"JwtHeader")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public struct JwtHeader: Codable\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"alg"},(0,a.kt)("inlineCode",{parentName:"h3"},"alg")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public let alg: SignatureAlgorithm\n")),(0,a.kt)("h3",{id:"typ"},(0,a.kt)("inlineCode",{parentName:"h3"},"typ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public let typ: TokenType\n")))}f.isMDXComponent=!0}}]);