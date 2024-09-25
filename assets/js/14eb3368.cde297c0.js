"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46969],{9596:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(34164),i=n(23891),l=n(37960),c=n(93989),o=n(28618),s=n(15418),u=n(92469);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return r.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function p(){const e=(0,u.Ay)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.A,{"aria-label":(0,s.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(d,{className:b.breadcrumbHomeIcon})))}const f={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function v({children:e,href:t,isLast:n}){const a="breadcrumbs__link";return n?r.createElement("span",{className:a,itemProp:"name"},e):t?r.createElement(o.A,{className:a,href:t,itemProp:"item"},r.createElement("span",{itemProp:"name"},e)):r.createElement("span",{className:a},e)}function E({children:e,active:t,index:n,addMicrodata:i}){return r.createElement("li",h(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"}),{className:(0,a.A)("breadcrumbs__item",{"breadcrumbs__item--active":t})}),e,r.createElement("meta",{itemProp:"position",content:String(n+1)}))}function y(){const e=(0,l.OF)(),t=(0,c.Dt)();return e?r.createElement("nav",{className:(0,a.A)(i.G.docs.docBreadcrumbs,f.breadcrumbsContainer),"aria-label":(0,s.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(p,null),e.map(((t,n)=>{const a=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return r.createElement(E,{key:n,active:a,index:n,addMicrodata:!!i},r.createElement(v,{href:i,isLast:a},t.label))})))):null}},63088:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n(96540),a=n(92341),i=n(37960),l=n(92469),c=n(34164),o=n(28618),s=n(83477),u=n(11410),m=n(15418),d=n(61917);const b={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p({href:e,children:t}){return r.createElement(o.A,{href:e,className:(0,c.A)("card padding--lg",b.cardContainer)},t)}function f({href:e,icon:t,title:n,description:a}){return r.createElement(p,{href:e},r.createElement(d.A,{as:"h2",className:(0,c.A)("text--truncate",b.cardTitle),title:n},t," ",n),a&&r.createElement("p",{className:(0,c.A)("text--truncate",b.cardDescription),title:a},a))}function g({item:e}){const t=(0,i.Nr)(e),n=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,m.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return t?r.createElement(f,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(a=e.description)&&void 0!==a?a:n(e.items.length)}):null;var a}function h({item:e}){const t=(0,u.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const a=(0,i.cC)(null!==(n=e.docId)&&void 0!==n?n:void 0);var l;return r.createElement(f,{href:e.href,icon:t,title:e.label,description:null!==(l=e.description)&&void 0!==l?l:null==a?void 0:a.description})}function v({item:e}){switch(e.type){case"link":return r.createElement(h,{item:e});case"category":return r.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function E({className:e}){const t=(0,i.$S)();return r.createElement(y,{items:t.items,className:e})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(E,e);const a=(0,i.d1)(t);return r.createElement("section",{className:(0,c.A)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e})))))}var O=n(97054),w=n(12498),A=n(94287),N=n(9596);const P={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function j({categoryGeneratedIndex:e}){return r.createElement(a.be,{title:e.title,description:e.description,keywords:e.keywords,image:(0,l.Ay)(e.image)})}function k({categoryGeneratedIndex:e}){const t=(0,i.$S)();return r.createElement("div",{className:P.generatedIndexPage},r.createElement(w.A,null),r.createElement(N.A,null),r.createElement(A.A,null),r.createElement("header",null,r.createElement(d.A,{as:"h1",className:P.title},e.title),e.description&&r.createElement("p",null,e.description)),r.createElement("article",{className:"margin-top--lg"},r.createElement(y,{items:t.items,className:P.list})),r.createElement("footer",{className:"margin-top--lg"},r.createElement(O.A,{previous:e.navigation.previous,next:e.navigation.next})))}function T(e){return r.createElement(r.Fragment,null,r.createElement(j,e),r.createElement(k,e))}},97054:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(96540),a=n(15418),i=n(34164),l=n(28618);function c(e){const{permalink:t,title:n,subLabel:a,isNext:c}=e;return r.createElement(l.A,{className:(0,i.A)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&r.createElement("div",{className:"pagination-nav__sublabel"},a),r.createElement("div",{className:"pagination-nav__label"},n))}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function m(e){const{previous:t,next:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,u(s({},t),{subLabel:r.createElement(a.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(c,u(s({},n),{subLabel:r.createElement(a.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},94287:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(96540),a=n(34164),i=n(15418),l=n(23891),c=n(58965);function o({className:e}){const t=(0,c.r)();return t.badge?r.createElement("span",{className:(0,a.A)(e,l.G.docs.docVersionBadge,"badge badge--secondary")},r.createElement(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}},12498:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(96540),a=n(34164),i=n(90062),l=n(28618),c=n(15418),o=n(3654),s=n(23891),u=n(47362),m=n(58965);const d={unreleased:function({siteTitle:e,versionMetadata:t}){return r.createElement(c.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:r.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return r.createElement(c.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:r.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=d[e.versionMetadata.banner];return r.createElement(t,e)}function p({versionLabel:e,to:t,onClick:n}){return r.createElement(c.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:r.createElement("b",null,r.createElement(l.A,{to:t,onClick:n},r.createElement(c.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f({className:e,versionMetadata:t}){const{siteConfig:{title:n}}=(0,i.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:c}=(0,u.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:d}=(0,o.HW)(l),f=null!=m?m:(g=d).docs.find((e=>e.id===g.mainDocId));var g;return r.createElement("div",{className:(0,a.A)(e,s.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},r.createElement("div",null,r.createElement(b,{siteTitle:n,versionMetadata:t})),r.createElement("div",{className:"margin-top--md"},r.createElement(p,{versionLabel:d.label,to:f.path,onClick:()=>c(d.name)})))}function g({className:e}){const t=(0,m.r)();return t.banner?r.createElement(f,{className:e,versionMetadata:t}):null}},83477:(e,t,n)=>{n.d(t,{W:()=>s});var r=n(96540),a=n(90062);const i=["zero","one","two","few","many","other"];function l(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function s(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),i=n.pluralForms.indexOf(a);return r[Math.min(i,r.length-1)]}(n,t,e)}}}}]);