/*! For license information please see 74711161.48f4d90a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44795],{16456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var o=t(85893),r=t(11151);const l={sidebar_label:"ElementHandle.boxModel"},s="ElementHandle.boxModel() method",a={id:"api/puppeteer.elementhandle.boxmodel",title:"ElementHandle.boxModel() method",description:"This method returns boxes of the element, or null if the element is not part of the layout (example none).",source:"@site/versioned_docs/version-22.2.0/api/puppeteer.elementhandle.boxmodel.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.boxmodel",permalink:"/api/puppeteer.elementhandle.boxmodel",draft:!1,unlisted:!1,tags:[],version:"22.2.0",frontMatter:{sidebar_label:"ElementHandle.boxModel"},sidebar:"api",previous:{title:"ElementHandle.boundingBox",permalink:"/api/puppeteer.elementhandle.boundingbox"},next:{title:"ElementHandle.click",permalink:"/api/puppeteer.elementhandle.click"}},i={},d=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"elementhandleboxmodel-method",children:"ElementHandle.boxModel() method"}),"\n",(0,o.jsxs)(n.p,{children:["This method returns boxes of the element, or ",(0,o.jsx)(n.code,{children:"null"})," if the element is ",(0,o.jsx)(n.a,{href:"https://drafts.csswg.org/css-display-4/#box-generation",children:"not part of the layout"})," (example: ",(0,o.jsx)(n.code,{children:"display: none"}),")."]}),"\n",(0,o.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  boxModel(): Promise<BoxModel | null>;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,o.jsxs)(n.p,{children:["Promise<",(0,o.jsx)(n.a,{href:"/api/puppeteer.boxmodel",children:"BoxModel"})," | null>"]}),"\n",(0,o.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsxs)(n.p,{children:["Boxes are represented as an array of points; Each Point is an object ",(0,o.jsx)(n.code,{children:"{x, y}"}),". Box points are sorted clock-wise."]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},75251:(e,n,t)=>{var o=t(67294),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,l={},d=null,p=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,o)&&!i.hasOwnProperty(o)&&(l[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===l[o]&&(l[o]=n[o]);return{$$typeof:r,type:e,key:d,ref:p,props:l,_owner:a.current}}n.Fragment=l,n.jsx=d,n.jsxs=d},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(67294);const r={},l=o.createContext(r);function s(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);