"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[4208],{9613:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return p}});var o=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=o.createContext({}),c=function(t){var e=o.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),k=c(n),p=r,m=k["".concat(d,".").concat(p)]||k[p]||s[p]||i;return n?o.createElement(m,l(l({ref:e},u),{},{components:n})):o.createElement(m,l({ref:e},u))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var a={};for(var d in e)hasOwnProperty.call(e,d)&&(a[d]=e[d]);a.originalType=t,a.mdxType="string"==typeof t?t:r,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4036:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var o=n(5443),r=n(3010),i=(n(9496),n(9613)),l=["components"],a={},d="decodeIdToken",c={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/decode-id-token",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/decode-id-token",title:"decodeIdToken",description:"fun decodeIdToken(token IdTokenClaims",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/decode-id-token.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/decode-id-token",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/decode-id-token",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/decode-id-token.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"TokenUtils",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/"},next:{title:"verifyIdToken",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token"}},u={},s=[{value:"Return",id:"return",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Throws",id:"throws",level:2}],k={toc:s};function p(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,o.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"decodeidtoken"},"decodeIdToken"),(0,i.kt)("p",null,"fun decodeIdToken(token: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"): ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/"},"IdTokenClaims")),(0,i.kt)("p",null,"\u5728\u4e0d\u8fdb\u884c\u6821\u9a8c\u7684\u524d\u63d0\u4e0b\u89e3\u7801 ID \u4ee4\u724c"),(0,i.kt)("h4",{id:"return"},"Return"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/"},"IdTokenClaims")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"token"),(0,i.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u8fdb\u884c\u89e3\u7801\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\u8868\u793a\u7684 ID \u4ee4\u724c")))),(0,i.kt)("h2",{id:"throws"},"Throws"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5f02\u5e38"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"org.jose4j.jwt.consumer.InvalidJwtException")))))}p.isMDXComponent=!0}}]);