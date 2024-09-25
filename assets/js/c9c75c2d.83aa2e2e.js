/*! For license information please see c9c75c2d.83aa2e2e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90575],{32449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(74848),l=n(28453);const a={sidebar_label:"ElementHandle.autofill"},i="ElementHandle.autofill() method",o={id:"api/puppeteer.elementhandle.autofill",title:"ElementHandle.autofill() method",description:"If the element is a form input, you can use ElementHandle.autofill() to test if the form is compatible with the browser's autofill implementation. Throws an error if the form cannot be autofilled.",source:"@site/versioned_docs/version-23.4.0/api/puppeteer.elementhandle.autofill.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.autofill",permalink:"/api/puppeteer.elementhandle.autofill",draft:!1,unlisted:!1,tags:[],version:"23.4.0",frontMatter:{sidebar_label:"ElementHandle.autofill"},sidebar:"api",previous:{title:"ElementHandle.$eval",permalink:"/api/puppeteer.elementhandle._eval"},next:{title:"ElementHandle.boundingBox",permalink:"/api/puppeteer.elementhandle.boundingbox"}},s={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"elementhandleautofill-method",children:"ElementHandle.autofill() method"})}),"\n",(0,r.jsxs)(t.p,{children:["If the element is a form input, you can use ",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.autofill",children:"ElementHandle.autofill()"})," to test if the form is compatible with the browser's autofill implementation. Throws an error if the form cannot be autofilled."]}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  abstract autofill(data: AutofillData): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"data"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.autofilldata",children:"AutofillData"})})}),(0,r.jsx)("td",{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"Currently, Puppeteer supports auto-filling credit card information only and in Chrome in the new headless and headful modes only."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// Select an input on the credit card form.\nconst name = await page.waitForSelector('form #name');\n// Trigger autofill with the desired data.\nawait name.autofill({\n  creditCard: {\n    number: '4444444444444444',\n    name: 'John Smith',\n    expiryMonth: '01',\n    expiryYear: '2030',\n    cvc: '123',\n  },\n});\n"})})]})}function c(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},21020:(e,t,n)=>{var r=n(96540),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,a={},d=null,p=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:l,type:e,key:d,ref:p,props:a,_owner:o.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const l={},a=r.createContext(l);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);