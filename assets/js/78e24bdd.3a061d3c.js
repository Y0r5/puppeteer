/*! For license information please see 78e24bdd.3a061d3c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65395],{73659:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=t(85893),a=t(11151);const s={sidebar_label:"WebWorker.evaluate"},i="WebWorker.evaluate() method",l={id:"api/puppeteer.webworker.evaluate",title:"WebWorker.evaluate() method",description:"Evaluates a given function in the worker.",source:"@site/versioned_docs/version-23.1.1/api/puppeteer.webworker.evaluate.md",sourceDirName:"api",slug:"/api/puppeteer.webworker.evaluate",permalink:"/api/puppeteer.webworker.evaluate",draft:!1,unlisted:!1,tags:[],version:"23.1.1",frontMatter:{sidebar_label:"WebWorker.evaluate"},sidebar:"api",previous:{title:"WebWorker.close",permalink:"/api/puppeteer.webworker.close"},next:{title:"WebWorker.evaluateHandle",permalink:"/api/puppeteer.webworker.evaluatehandle"}},o={},u=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"webworkerevaluate-method",children:"WebWorker.evaluate() method"})}),"\n",(0,n.jsxs)(r.p,{children:["Evaluates a given function in the ",(0,n.jsx)(r.a,{href:"/api/puppeteer.webworker",children:"worker"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class WebWorker {\n  evaluate<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(func: Func | string, ...args: Params): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"func"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Func | string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Function to be evaluated."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"args"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Params"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Arguments to pass into ",(0,n.jsx)(r.code,{children:"func"}),"."]})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,n.jsxs)(r.p,{children:["The result of ",(0,n.jsx)(r.code,{children:"func"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["If the given function returns a promise, ",(0,n.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluate",children:"evaluate"})," will wait for the promise to resolve."]}),"\n",(0,n.jsxs)(r.p,{children:["As a rule of thumb, if the return value of the given function is more complicated than a JSON object (e.g. most classes), then ",(0,n.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluate",children:"evaluate"})," will _likely_ return some truncated value (or ",(0,n.jsx)(r.code,{children:"{}"}),"). This is because we are not returning the actual return value, but a deserialized version as a result of transferring the return value through a protocol to Puppeteer."]}),"\n",(0,n.jsxs)(r.p,{children:["In general, you should use ",(0,n.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluatehandle",children:"evaluateHandle"})," if ",(0,n.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluate",children:"evaluate"})," cannot serialize the return value properly or you need a mutable ",(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle",children:"handle"})," to the return object."]})]})}function d(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,r,t)=>{var n=t(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,s={},u=null,c=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,n)&&!o.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:a,type:e,key:u,ref:c,props:s,_owner:l.current}}r.Fragment=s,r.jsx=u,r.jsxs=u},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>i});var n=t(67294);const a={},s=n.createContext(a);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);