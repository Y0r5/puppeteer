/*! For license information please see fc1d8ca9.bb6ef295.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61732],{49478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(74848),a=r(28453);const l={sidebar_label:"Page.emulateCPUThrottling"},s="Page.emulateCPUThrottling() method",i={id:"api/puppeteer.page.emulatecputhrottling",title:"Page.emulateCPUThrottling() method",description:"Enables CPU throttling to emulate slow CPUs.",source:"@site/versioned_docs/version-23.4.0/api/puppeteer.page.emulatecputhrottling.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatecputhrottling",permalink:"/api/puppeteer.page.emulatecputhrottling",draft:!1,unlisted:!1,tags:[],version:"23.4.0",frontMatter:{sidebar_label:"Page.emulateCPUThrottling"},sidebar:"api",previous:{title:"Page.emulate",permalink:"/api/puppeteer.page.emulate"},next:{title:"Page.emulateIdleState",permalink:"/api/puppeteer.page.emulateidlestate"}},o={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"pageemulatecputhrottling-method",children:"Page.emulateCPUThrottling() method"})}),"\n",(0,n.jsx)(t.p,{children:"Enables CPU throttling to emulate slow CPUs."}),"\n",(0,n.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract emulateCPUThrottling(factor: number | null): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"factor"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"number | null"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"slowdown factor (1 is no throttle, 2 is 2x slowdown, etc)."})})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,t,r)=>{var n=r(96540),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var n,l={},p=null,c=null;for(n in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,n)&&!o.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:a,type:e,key:p,ref:c,props:l,_owner:i.current}}t.Fragment=l,t.jsx=p,t.jsxs=p},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const a={},l=n.createContext(a);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);