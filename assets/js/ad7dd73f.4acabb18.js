/*! For license information please see ad7dd73f.4acabb18.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55485],{39045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var n=r(85893),s=r(11151);const a={sidebar_label:"Frame.$eval"},i="Frame.$eval() method",l={id:"api/puppeteer.frame._eval",title:"Frame.$eval() method",description:"Runs the given function on the first element matching the given selector in the frame.",source:"@site/../docs/api/puppeteer.frame._eval.md",sourceDirName:"api",slug:"/api/puppeteer.frame._eval",permalink:"/next/api/puppeteer.frame._eval",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Frame.$eval"},sidebar:"api",previous:{title:"Frame.$$eval",permalink:"/next/api/puppeteer.frame.__eval"},next:{title:"Frame.addScriptTag",permalink:"/next/api/puppeteer.frame.addscripttag"}},c={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"frameeval-method",children:"Frame.$eval() method"}),"\n",(0,n.jsx)(t.p,{children:"Runs the given function on the first element matching the given selector in the frame."}),"\n",(0,n.jsx)(t.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."}),"\n",(0,n.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  $eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<\n      NodeFor<Selector>,\n      Params\n    >,\n  >(\n    selector: Selector,\n    pageFunction: string | Func,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"selector"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Selector"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"pageFunction"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"string | Func"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"The function to be evaluated in the frame's context. The first element matching the selector will be passed to the function as its first argument."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"args"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Params"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["Additional arguments to pass to ",(0,n.jsx)(t.code,{children:"pageFunction"}),"."]})})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,n.jsx)(t.p,{children:"A promise to the result of the function."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const searchValue = await frame.$eval('#search', el => el.value);\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var n=r(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,a={},o=null,d=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:o,ref:d,props:a,_owner:l.current}}t.Fragment=a,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var n=r(67294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);