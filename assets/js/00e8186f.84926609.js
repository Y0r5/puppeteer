/*! For license information please see 00e8186f.84926609.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53750],{30572:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=r(85893),i=r(11151);const a={sidebar_label:"Frame.waitForFunction"},o="Frame.waitForFunction() method",s={id:"api/puppeteer.frame.waitforfunction",title:"Frame.waitForFunction() method",description:"Signature",source:"@site/versioned_docs/version-23.0.0/api/puppeteer.frame.waitforfunction.md",sourceDirName:"api",slug:"/api/puppeteer.frame.waitforfunction",permalink:"/api/puppeteer.frame.waitforfunction",draft:!1,unlisted:!1,tags:[],version:"23.0.0",frontMatter:{sidebar_label:"Frame.waitForFunction"},sidebar:"api",previous:{title:"Frame.url",permalink:"/api/puppeteer.frame.url"},next:{title:"Frame.waitForNavigation",permalink:"/api/puppeteer.frame.waitfornavigation"}},c={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"framewaitforfunction-method",children:"Frame.waitForFunction() method"}),"\n",(0,t.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Frame {\n  waitForFunction<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    options?: FrameWaitForFunctionOptions,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"pageFunction"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Func | string"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"the function to evaluate in the frame context."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/puppeteer.framewaitforfunctionoptions",children:"FrameWaitForFunctionOptions"})})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"(Optional)"})," options to configure the polling method and timeout."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"args"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Params"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["arguments to pass to the ",(0,t.jsx)(n.code,{children:"pageFunction"}),"."]})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.p,{children:["Promise<",(0,t.jsx)(n.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]}),"\n",(0,t.jsxs)(n.p,{children:["the promise which resolve when the ",(0,t.jsx)(n.code,{children:"pageFunction"})," returns a truthy value."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"waitForFunction"})," can be used to observe viewport size change:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n.  const browser = await puppeteer.launch();\n.  const page = await browser.newPage();\n.  const watchDog = page.mainFrame().waitForFunction('window.innerWidth < 100');\n.  page.setViewport({width: 50, height: 50});\n.  await watchDog;\n.  await browser.close();\n})();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To pass arguments from Node.js to the predicate of ",(0,t.jsx)(n.code,{children:"page.waitForFunction"})," function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const selector = '.foo';\nawait frame.waitForFunction(\n  selector => !!document.querySelector(selector),\n  {}, // empty options object\n  selector\n);\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},75251:(e,n,r)=>{var t=r(67294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,r){var t,a={},p=null,l=null;for(t in void 0!==r&&(p=""+r),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:i,type:e,key:p,ref:l,props:a,_owner:s.current}}n.Fragment=a,n.jsx=p,n.jsxs=p},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(67294);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);