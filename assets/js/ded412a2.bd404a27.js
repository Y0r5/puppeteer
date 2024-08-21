/*! For license information please see ded412a2.bd404a27.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42993],{70113:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=t(85893),s=t(11151);const i={sidebar_label:"Page.pdf"},a="Page.pdf() method",p={id:"api/puppeteer.page.pdf",title:"Page.pdf() method",description:"Generates a PDF of the page with the print CSS media type.",source:"@site/versioned_docs/version-23.1.1/api/puppeteer.page.pdf.md",sourceDirName:"api",slug:"/api/puppeteer.page.pdf",permalink:"/api/puppeteer.page.pdf",draft:!1,unlisted:!1,tags:[],version:"23.1.1",frontMatter:{sidebar_label:"Page.pdf"},sidebar:"api",previous:{title:"Page.metrics",permalink:"/api/puppeteer.page.metrics"},next:{title:"Page.queryObjects",permalink:"/api/puppeteer.page.queryobjects"}},o={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"pagepdf-method",children:"Page.pdf() method"})}),"\n",(0,n.jsxs)(r.p,{children:["Generates a PDF of the page with the ",(0,n.jsx)(r.code,{children:"print"})," CSS media type."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  abstract pdf(options?: PDFOptions): Promise<Uint8Array>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.pdfoptions",children:"PDFOptions"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," options for generating the PDF."]})})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<Uint8Array>"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["To generate a PDF with the ",(0,n.jsx)(r.code,{children:"screen"})," media type, call ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page.emulatemediatype",children:"`page.emulateMediaType('screen')`"})," before calling ",(0,n.jsx)(r.code,{children:"page.pdf()"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["By default, ",(0,n.jsx)(r.code,{children:"page.pdf()"})," generates a pdf with modified colors for printing. Use the ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust",children:"`-webkit-print-color-adjust`"})," property to force rendering of exact colors."]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,i={},d=null,c=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,n)&&!o.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:p.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>p,a:()=>a});var n=t(67294);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);