/*! For license information please see e083933a.2ead1d1c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6866],{50754:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var o=t(85893),a=t(11151);const n={sidebar_label:"Page.locator"},s="Page.locator() method",c={id:"api/puppeteer.page.locator",title:"Page.locator() method",description:"Creates a locator for the provided selector. See Locator for details and supported actions.",source:"@site/versioned_docs/version-22.2.0/api/puppeteer.page.locator.md",sourceDirName:"api",slug:"/api/puppeteer.page.locator",permalink:"/api/puppeteer.page.locator",draft:!1,unlisted:!1,tags:[],version:"22.2.0",frontMatter:{sidebar_label:"Page.locator"},sidebar:"api",previous:{title:"Page.isServiceWorkerBypassed",permalink:"/api/puppeteer.page.isserviceworkerbypassed"},next:{title:"Page.locator_1",permalink:"/api/puppeteer.page.locator_1"}},i={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"pagelocator-method",children:"Page.locator() method"}),"\n",(0,o.jsxs)(r.p,{children:["Creates a locator for the provided selector. See ",(0,o.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"})," for details and supported actions."]}),"\n",(0,o.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  locator<Selector extends string>(\n    selector: Selector\n  ): Locator<NodeFor<Selector>>;\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Parameter"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"selector"}),(0,o.jsx)(r.td,{children:"Selector"}),(0,o.jsx)(r.td,{})]})})]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"}),"<",(0,o.jsx)(r.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>>"]}),"\n",(0,o.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsx)(r.p,{children:"Locators API is experimental and we will not follow semver for breaking change in the Locators API."})]})}function d(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},75251:(e,r,t)=>{var o=t(67294),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var o,n={},l=null,p=null;for(o in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(p=r.ref),r)s.call(r,o)&&!i.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===n[o]&&(n[o]=r[o]);return{$$typeof:a,type:e,key:l,ref:p,props:n,_owner:c.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>s});var o=t(67294);const a={},n=o.createContext(a);function s(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);