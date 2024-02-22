/*! For license information please see c7569d64.ef0672f0.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6249],{64809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(85893),a=n(11151);const l={sidebar_label:"ElementHandle.autofill"},i="ElementHandle.autofill() method",o={id:"api/puppeteer.elementhandle.autofill",title:"ElementHandle.autofill() method",description:"If the element is a form input, you can use ElementHandle.autofill() to test if the form is compatible with the browser's autofill implementation. Throws an error if the form cannot be autofilled.",source:"@site/versioned_docs/version-22.2.0/api/puppeteer.elementhandle.autofill.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.autofill",permalink:"/api/puppeteer.elementhandle.autofill",draft:!1,unlisted:!1,tags:[],version:"22.2.0",frontMatter:{sidebar_label:"ElementHandle.autofill"},sidebar:"api",previous:{title:"ElementHandle.$eval",permalink:"/api/puppeteer.elementhandle._eval"},next:{title:"ElementHandle.boundingBox",permalink:"/api/puppeteer.elementhandle.boundingbox"}},s={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elementhandleautofill-method",children:"ElementHandle.autofill() method"}),"\n",(0,r.jsxs)(t.p,{children:["If the element is a form input, you can use ",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.autofill",children:"ElementHandle.autofill()"})," to test if the form is compatible with the browser's autofill implementation. Throws an error if the form cannot be autofilled."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  abstract autofill(data: AutofillData): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.autofilldata",children:"AutofillData"})}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"Currently, Puppeteer supports auto-filling credit card information only and in Chrome in the new headless and headful modes only."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// Select an input on the credit card form.\nconst name = await page.waitForSelector('form #name');\n// Trigger autofill with the desired data.\nawait name.autofill({\n  creditCard: {\n    number: '4444444444444444',\n    name: 'John Smith',\n    expiryMonth: '01',\n    expiryYear: '2030',\n    cvc: '123',\n  },\n});\n"})})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},75251:(e,t,n)=>{var r=n(67294),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,l={},d=null,p=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:p,props:l,_owner:o.current}}t.Fragment=l,t.jsx=d,t.jsxs=d},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(67294);const a={},l=r.createContext(a);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);