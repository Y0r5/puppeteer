/*! For license information please see 7b19cdc3.f0c4c77b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40430],{41717:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=n(85893),s=n(11151);const a={sidebar_label:"JSHandle"},d="JSHandle class",i={id:"api/puppeteer.jshandle",title:"JSHandle class",description:"Represents a reference to a JavaScript object. Instances can be created using Page.evaluateHandle().",source:"@site/../docs/api/puppeteer.jshandle.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle",permalink:"/next/api/puppeteer.jshandle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"JSHandle"},sidebar:"api",previous:{title:"Frame.waitForSelector",permalink:"/next/api/puppeteer.frame.waitforselector"},next:{title:"JSHandle.asElement",permalink:"/next/api/puppeteer.jshandle.aselement"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"jshandle-class",children:"JSHandle class"}),"\n",(0,t.jsxs)(r.p,{children:["Represents a reference to a JavaScript object. Instances can be created using ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Handles prevent the referenced JavaScript object from being garbage-collected unless the handle is purposely ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle.dispose",children:"disposed"}),". JSHandles are auto-disposed when their associated frame is navigated away or the parent context gets destroyed."]}),"\n",(0,t.jsxs)(r.p,{children:["Handles can be used as arguments for any evaluation function such as ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.page._eval",children:"Page.$eval()"}),", ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.page.evaluate",children:"Page.evaluate()"}),", and ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"}),". They are resolved to their referenced object."]}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class JSHandle<T = unknown>\n"})}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(r.code,{children:"JSHandle"})," class."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const windowHandle = await page.evaluateHandle(() => window);\n"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"_",children:"_"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"T"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Used for nominally typing ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle",children:"JSHandle"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"move",children:"move"})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"() => this"})}),(0,t.jsx)("td",{})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"aselement",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle.aselement",children:"asElement()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Either ",(0,t.jsx)(r.code,{children:"null"})," or the handle itself if the handle is an instance of ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.elementhandle",children:"ElementHandle"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"dispose",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle.dispose",children:"dispose()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Releases the object referenced by the handle for garbage collection."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"evaluate",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle.evaluate",children:"evaluate(pageFunction, args)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Evaluates the given function with the current handle as its first argument."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"evaluatehandle",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle.evaluatehandle",children:"evaluateHandle(pageFunction, args)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Evaluates the given function with the current handle as its first argument."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"getproperties",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle.getproperties",children:"getProperties()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Gets a map of handles representing the properties of the current handle."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"getproperty",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle.getproperty",children:"getProperty(propertyName)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Fetches a single property from the referenced object."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"getproperty",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle.getproperty_1",children:"getProperty(propertyName)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"jsonvalue",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle.jsonvalue",children:"jsonValue()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"A vanilla object representing the serializable portions of the referenced object."}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.p,{children:["If the object has a ",(0,t.jsx)(r.code,{children:"toJSON"})," function, it ",(0,t.jsx)(r.strong,{children:"will not"})," be called."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"remoteobject",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle.remoteobject",children:"remoteObject()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Provides access to the ",(0,t.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/tot/Runtime/#type-RemoteObject",children:"Protocol.Runtime.RemoteObject"})," backing this handle."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"tostring",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle.tostring",children:"toString()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Returns a string representation of the JSHandle."}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsx)(r.p,{children:"Useful during debugging."})]})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,a={},c=null,h=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)d.call(r,t)&&!l.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:s,type:e,key:c,ref:h,props:a,_owner:i.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>d});var t=n(67294);const s={},a=t.createContext(s);function d(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);