/*! For license information please see 193f538a.17e96760.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13463],{24801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var s=r(85893),n=r(11151);const a={sidebar_label:"Page.tap"},i="Page.tap() method",p={id:"api/puppeteer.page.tap",title:"Page.tap() method",description:"This method fetches an element with selector, scrolls it into view if needed, and then uses Page.touchscreen to tap in the center of the element. If there's no element matching selector, the method throws an error.",source:"@site/versioned_docs/version-23.0.0/api/puppeteer.page.tap.md",sourceDirName:"api",slug:"/api/puppeteer.page.tap",permalink:"/api/puppeteer.page.tap",draft:!1,unlisted:!1,tags:[],version:"23.0.0",frontMatter:{sidebar_label:"Page.tap"},sidebar:"api",previous:{title:"Page.setViewport",permalink:"/api/puppeteer.page.setviewport"},next:{title:"Page.target",permalink:"/api/puppeteer.page.target"}},o={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pagetap-method",children:"Page.tap() method"}),"\n",(0,s.jsxs)(t.p,{children:["This method fetches an element with ",(0,s.jsx)(t.code,{children:"selector"}),", scrolls it into view if needed, and then uses ",(0,s.jsx)(t.a,{href:"/api/puppeteer.page#touchscreen",children:"Page.touchscreen"})," to tap in the center of the element. If there's no element matching ",(0,s.jsx)(t.code,{children:"selector"}),", the method throws an error."]}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  tap(selector: string): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),". If there are multiple elements satisfying the selector, the first will be tapped."]})})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["Shortcut for ",(0,s.jsx)(t.a,{href:"/api/puppeteer.frame.tap",children:"page.mainFrame().tap(selector)"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},75251:(e,t,r)=>{var s=r(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var s,a={},c=null,l=null;for(s in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:c,ref:l,props:a,_owner:p.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>p,a:()=>i});var s=r(67294);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);