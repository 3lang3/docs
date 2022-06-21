"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1124],{9613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(9496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),g=p(n),m=o,c=g["".concat(s,".").concat(m)]||g[m]||k[m]||i;return n?r.createElement(c,l(l({ref:e},d),{},{components:n})):r.createElement(c,l({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,l=new Array(i);l[0]=g;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5379:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return k}});var r=n(5443),o=n(3010),i=(n(9496),n(9613)),l=["components"],a={},s="Core",p={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core/-core/index",id:"sdk/Kotlin/kotlin/io.logto.sdk.core/-core/index",title:"Core",description:"object Core",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core/-core/index.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core/-core",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core/-core/",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core/-core/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/kotlin/io.logto.sdk.core/-core/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"io.logto.sdk.core",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core/"},next:{title:"io.logto.sdk.core.constant",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.constant/"}},d={},k=[{value:"Functions",id:"functions",level:2}],g={toc:k};function m(t){var e=t.components,n=(0,o.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"core"},"Core"),(0,i.kt)("p",null,"object Core"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fetchJwksJson"),(0,i.kt)("td",{parentName:"tr",align:null},"fun fetchJwksJson(jwksUri: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,i.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-completion/"},"HttpCompletion"),"<",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">",")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fetchOidcConfig"),(0,i.kt)("td",{parentName:"tr",align:null},"fun fetchOidcConfig(endpoint: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,i.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-completion/"},"HttpCompletion"),"<",(0,i.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response/"},"OidcConfigResponse"),">",")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fetchTokenByAuthorizationCode"),(0,i.kt)("td",{parentName:"tr",align:null},"fun fetchTokenByAuthorizationCode(tokenEndpoint: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", clientId: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", redirectUri: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", codeVerifier: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", code: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", resource: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?, completion: ",(0,i.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-completion/"},"HttpCompletion"),"<",(0,i.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response/"},"CodeTokenResponse"),">",")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fetchTokenByRefreshToken"),(0,i.kt)("td",{parentName:"tr",align:null},"fun fetchTokenByRefreshToken(tokenEndpoint: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", clientId: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", refreshToken: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", resource: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?, scopes: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","?, completion: ",(0,i.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-completion/"},"HttpCompletion"),"<",(0,i.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-refresh-token-token-response/"},"RefreshTokenTokenResponse"),">",")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fetchUserInfo"),(0,i.kt)("td",{parentName:"tr",align:null},"fun fetchUserInfo(userInfoEndpoint: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", accessToken: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,i.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-completion/"},"HttpCompletion"),"<",(0,i.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-user-info-response/"},"UserInfoResponse"),">",")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"generateSignInUri"),(0,i.kt)("td",{parentName:"tr",align:null},"fun generateSignInUri(authorizationEndpoint: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", clientId: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", redirectUri: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", codeChallenge: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", state: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", scopes: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","?, resources: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","?): ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"generateSignOutUri"),(0,i.kt)("td",{parentName:"tr",align:null},"fun generateSignOutUri(endSessionEndpoint: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", idToken: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", postLogoutRedirectUri: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"? = null): ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"revoke"),(0,i.kt)("td",{parentName:"tr",align:null},"fun revoke(revocationEndpoint: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", clientId: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", token: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,i.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-empty-completion/"},"HttpEmptyCompletion"),")")))))}m.isMDXComponent=!0}}]);