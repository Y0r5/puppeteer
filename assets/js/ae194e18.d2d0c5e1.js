/*! For license information please see ae194e18.d2d0c5e1.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53308],{85608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(85893),s=t(11151);const o={sidebar_label:"JSHandle.jsonValue"},a="JSHandle.jsonValue() method",i={id:"api/puppeteer.jshandle.jsonvalue",title:"JSHandle.jsonValue() method",description:"A vanilla object representing the serializable portions of the referenced object.",source:"@site/versioned_docs/version-23.0.0/api/puppeteer.jshandle.jsonvalue.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle.jsonvalue",permalink:"/api/puppeteer.jshandle.jsonvalue",draft:!1,unlisted:!1,tags:[],version:"23.0.0",frontMatter:{sidebar_label:"JSHandle.jsonValue"},sidebar:"api",previous:{title:"JSHandle.getProperty",permalink:"/api/puppeteer.jshandle.getproperty"},next:{title:"JSHandle.remoteObject",permalink:"/api/puppeteer.jshandle.remoteobject"}},l={},c=[{value:"Signature",id:"signature",level:3},{value:"Exceptions",id:"exceptions",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"jshandlejsonvalue-method",children:"JSHandle.jsonValue() method"}),"\n",(0,r.jsx)(n.p,{children:"A vanilla object representing the serializable portions of the referenced object."}),"\n",(0,r.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class JSHandle {\n  abstract jsonValue(): Promise<T>;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"Promise<T>"}),"\n",(0,r.jsx)(n.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,r.jsx)(n.p,{children:"Throws if the object cannot be serialized due to circularity."}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["If the object has a ",(0,r.jsx)(n.code,{children:"toJSON"})," function, it ",(0,r.jsx)(n.strong,{children:"will not"})," be called."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},75251:(e,n,t)=>{var r=t(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,p=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)a.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:p,props:o,_owner:i.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(67294);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);