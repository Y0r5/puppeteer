"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72936],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=p,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function f(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9471:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>l});t(67294);var n=t(3905);function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}const a={sidebar_label:"PuppeteerNode.product"},i="PuppeteerNode.product property",u={unversionedId:"api/puppeteer.puppeteernode.product",id:"version-18.0.2/api/puppeteer.puppeteernode.product",title:"PuppeteerNode.product property",description:'The name of the browser that is under automation ("chrome" or "firefox")',source:"@site/versioned_docs/version-18.0.2/api/puppeteer.puppeteernode.product.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode.product",permalink:"/api/puppeteer.puppeteernode.product",draft:!1,tags:[],version:"18.0.2",frontMatter:{sidebar_label:"PuppeteerNode.product"},sidebar:"sidebar",previous:{title:"PuppeteerNode.launch",permalink:"/api/puppeteer.puppeteernode.launch"},next:{title:"Puppeteer",permalink:"/api/puppeteer.puppeteer"}},c={},l=[{value:"Remarks",id:"remarks",level:2}],s={toc:l};function d(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",p({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"puppeteernodeproduct-property"}),"PuppeteerNode.product property"),(0,n.kt)("p",null,"The name of the browser that is under automation (",(0,n.kt)("inlineCode",{parentName:"p"},'"chrome"')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'"firefox"'),")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-typescript"}),"class PuppeteerNode {\n  get product(): string;\n}\n")),(0,n.kt)("h2",p({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"The product is set by the ",(0,n.kt)("inlineCode",{parentName:"p"},"PUPPETEER_PRODUCT")," environment variable or the ",(0,n.kt)("inlineCode",{parentName:"p"},"product")," option in ",(0,n.kt)("inlineCode",{parentName:"p"},"puppeteer.launch([options])")," and defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"chrome"),". Firefox support is experimental."))}d.isMDXComponent=!0}}]);