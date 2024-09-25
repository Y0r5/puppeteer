/*! For license information please see 6f7ded95.a24a20b7.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38911],{19955:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=s(74848),t=s(28453);const i={sidebar_label:"ChromeHeadlessShellSettings"},l="ChromeHeadlessShellSettings interface",d={id:"api/puppeteer.chromeheadlessshellsettings",title:"ChromeHeadlessShellSettings interface",description:"Signature",source:"@site/versioned_docs/version-23.4.0/api/puppeteer.chromeheadlessshellsettings.md",sourceDirName:"api",slug:"/api/puppeteer.chromeheadlessshellsettings",permalink:"/api/puppeteer.chromeheadlessshellsettings",draft:!1,unlisted:!1,tags:[],version:"23.4.0",frontMatter:{sidebar_label:"ChromeHeadlessShellSettings"},sidebar:"api",previous:{title:"CDPSessionEvents",permalink:"/api/puppeteer.cdpsessionevents"},next:{title:"ChromeReleaseChannel",permalink:"/api/puppeteer.chromereleasechannel"}},o={},c=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"chromeheadlessshellsettings-interface",children:"ChromeHeadlessShellSettings interface"})}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export interface ChromeHeadlessShellSettings\n"})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Property"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Default"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"downloadbaseurl",children:"downloadBaseUrl"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:"Specifies the URL prefix that is used to download the browser."}),(0,n.jsxs)(r.p,{children:["Can be overridden by ",(0,n.jsx)(r.code,{children:"PUPPETEER_CHROME_HEADLESS_SHELL_DOWNLOAD_BASE_URL"}),"."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsxs)(r.p,{children:["This must include the protocol and may even need a path prefix. This must ",(0,n.jsx)(r.strong,{children:"not"})," include a trailing slash similar to the default."]})]}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://storage.googleapis.com/chrome-for-testing-public",children:"https://storage.googleapis.com/chrome-for-testing-public"})})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"skipdownload",children:"skipDownload"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"boolean"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:"Tells Puppeteer to not download the browser during installation."}),(0,n.jsxs)(r.p,{children:["Can be overridden by ",(0,n.jsx)(r.code,{children:"PUPPETEER_CHROME_HEADLESS_SHELL_SKIP_DOWNLOAD"})," or ",(0,n.jsx)(r.code,{children:"PUPPETEER_SKIP_CHROME_HEADLESS_SHELL_DOWNLOAD"}),"."]})]}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"false"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"version",children:"version"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:"Specifies a certain version of the browser you'd like Puppeteer to use."}),(0,n.jsxs)(r.p,{children:["Can be overridden by ",(0,n.jsx)(r.code,{children:"PUPPETEER_CHROME_HEADLESS_SHELL_VERSION"}),"."]}),(0,n.jsxs)(r.p,{children:["See ",(0,n.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.launch",children:"puppeteer.launch"})," on how executable path is inferred."]})]}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"The pinned browser version supported by the current Puppeteer version."})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,r,s)=>{var n=s(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,s){var n,i={},c=null,h=null;for(n in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)l.call(r,n)&&!o.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:t,type:e,key:c,ref:h,props:i,_owner:d.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>d});var n=s(96540);const t={},i=n.createContext(t);function l(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);