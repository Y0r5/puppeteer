/*! For license information please see 87f725ba.cf5e3de7.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61237],{53243:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=r(74848),t=r(28453);const i={sidebar_label:"ElementHandle.screenshot"},l="ElementHandle.screenshot() method",o={id:"api/puppeteer.elementhandle.screenshot",title:"ElementHandle.screenshot() method",description:"screenshot(): Promise&lt;string&gt;",source:"@site/versioned_docs/version-23.4.0/api/puppeteer.elementhandle.screenshot.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.screenshot",permalink:"/api/puppeteer.elementhandle.screenshot",draft:!1,unlisted:!1,tags:[],version:"23.4.0",frontMatter:{sidebar_label:"ElementHandle.screenshot"},sidebar:"api",previous:{title:"ElementHandle.press",permalink:"/api/puppeteer.elementhandle.press"},next:{title:"ElementHandle.scrollIntoView",permalink:"/api/puppeteer.elementhandle.scrollintoview"}},d={},a=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Signature",id:"signature-1",level:3},{value:"Parameters",id:"parameters-1",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"elementhandlescreenshot-method",children:"ElementHandle.screenshot() method"})}),"\n",(0,s.jsx)("h2",{id:"screenshot",children:"screenshot(): Promise<string>"}),"\n",(0,s.jsxs)(n.p,{children:["This method scrolls element into view if needed, and then uses ",(0,s.jsx)(n.a,{href:"/api/puppeteer.page.screenshot",children:"Page.screenshot()"})," to take a screenshot of the element. If the element is detached from DOM, the method throws an error."]}),"\n",(0,s.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  screenshot(\n    options: Readonly<ScreenshotOptions> & {\n      encoding: 'base64';\n    }\n  ): Promise<string>;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Readonly<",(0,s.jsx)(n.a,{href:"/api/puppeteer.screenshotoptions",children:"ScreenshotOptions"}),"> & { encoding: 'base64'; }"]})}),(0,s.jsx)("td",{})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(n.p,{children:"Promise<string>"}),"\n",(0,s.jsx)("h2",{id:"screenshot-1",children:"screenshot(): Promise<Uint8Array>"}),"\n",(0,s.jsx)(n.h3,{id:"signature-1",children:"Signature"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  screenshot(options?: Readonly<ScreenshotOptions>): Promise<Uint8Array>;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Readonly<",(0,s.jsx)(n.a,{href:"/api/puppeteer.screenshotoptions",children:"ScreenshotOptions"}),">"]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(Optional)"})})})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(n.p,{children:"Promise<Uint8Array>"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,n,r)=>{var s=r(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var s,i={},a=null,c=null;for(s in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,s)&&!d.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:a,ref:c,props:i,_owner:o.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var s=r(96540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);