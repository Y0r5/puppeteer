/*! For license information please see aa21b755.6fca2806.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73409],{13953:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>a});var t=s(85893),i=s(11151);const o={sidebar_label:"FileChooser"},l="FileChooser class",n={id:"api/puppeteer.filechooser",title:"FileChooser class",description:"File choosers let you react to the page requesting for a file.",source:"@site/versioned_docs/version-23.0.0/api/puppeteer.filechooser.md",sourceDirName:"api",slug:"/api/puppeteer.filechooser",permalink:"/api/puppeteer.filechooser",draft:!1,unlisted:!1,tags:[],version:"23.0.0",frontMatter:{sidebar_label:"FileChooser"},sidebar:"api",previous:{title:"Tracing.stop",permalink:"/api/puppeteer.tracing.stop"},next:{title:"FileChooser.accept",permalink:"/api/puppeteer.filechooser.accept"}},c={},a=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"filechooser-class",children:"FileChooser class"}),"\n",(0,t.jsx)(r.p,{children:"File choosers let you react to the page requesting for a file."}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export declare class FileChooser\n"})}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"FileChooser"})," instances are returned via the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page.waitforfilechooser",children:"Page.waitForFileChooser()"})," method."]}),"\n",(0,t.jsx)(r.p,{children:"In browsers, only one file chooser can be opened at a time. All file choosers must be accepted or canceled. Not doing so will prevent subsequent file choosers from appearing."}),"\n",(0,t.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(r.code,{children:"FileChooser"})," class."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const [fileChooser] = await Promise.all([\n  page.waitForFileChooser(),\n  page.click('#upload-file-button'), // some button that triggers file selection\n]);\nawait fileChooser.accept(['/tmp/myfile.pdf']);\n"})}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"accept",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.filechooser.accept",children:"accept(paths)"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Accept the file chooser request with the given file paths."}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.p,{children:["This will not validate whether the file paths exists. Also, if a path is relative, then it is resolved against the ",(0,t.jsx)(r.a,{href:"https://nodejs.org/api/process.html#process_process_cwd",children:"current working directory"}),". For locals script connecting to remote chrome environments, paths must be absolute."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"cancel",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.filechooser.cancel",children:"cancel()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Closes the file chooser without selecting any files."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"ismultiple",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.filechooser.ismultiple",children:"isMultiple()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Whether file chooser allow for ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-multiple",children:"multiple"})," file selection."]})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},75251:(e,r,s)=>{var t=s(67294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,s){var t,o={},a=null,h=null;for(t in void 0!==s&&(a=""+s),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(h=r.ref),r)l.call(r,t)&&!c.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:i,type:e,key:a,ref:h,props:o,_owner:n.current}}r.Fragment=o,r.jsx=a,r.jsxs=a},85893:(e,r,s)=>{e.exports=s(75251)},11151:(e,r,s)=>{s.d(r,{Z:()=>n,a:()=>l});var t=s(67294);const i={},o=t.createContext(i);function l(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);