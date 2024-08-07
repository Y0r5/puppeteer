/*! For license information please see c6847419.91d078ca.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51798],{85014:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>h,toc:()=>l});var r=s(85893),n=s(11151);const i={sidebar_label:"HTTPRequest"},d="HTTPRequest class",h={id:"api/puppeteer.httprequest",title:"HTTPRequest class",description:"Represents an HTTP request sent by a page.",source:"@site/versioned_docs/version-23.0.0/api/puppeteer.httprequest.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest",permalink:"/api/puppeteer.httprequest",draft:!1,unlisted:!1,tags:[],version:"23.0.0",frontMatter:{sidebar_label:"HTTPRequest"},sidebar:"api",previous:{title:"ElementHandle.waitForSelector",permalink:"/api/puppeteer.elementhandle.waitforselector"},next:{title:"HTTPRequest.abort",permalink:"/api/puppeteer.httprequest.abort"}},c={},l=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"httprequest-class",children:"HTTPRequest class"}),"\n",(0,r.jsx)(t.p,{children:"Represents an HTTP request sent by a page."}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class HTTPRequest\n"})}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["Whenever the page sends a request, such as for a network resource, the following events are emitted by Puppeteer's ",(0,r.jsx)(t.code,{children:"page"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"request"}),": emitted when the request is issued by the page. - ",(0,r.jsx)(t.code,{children:"requestfinished"})," - emitted when the response body is downloaded and the request is complete."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If request fails at some point, then instead of ",(0,r.jsx)(t.code,{children:"requestfinished"})," event the ",(0,r.jsx)(t.code,{children:"requestfailed"})," event is emitted."]}),"\n",(0,r.jsxs)(t.p,{children:["All of these events provide an instance of ",(0,r.jsx)(t.code,{children:"HTTPRequest"})," representing the request that occurred:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"page.on('request', request => ...)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["NOTE: HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,r.jsx)(t.code,{children:"requestfinished"})," event."]}),"\n",(0,r.jsxs)(t.p,{children:["If request gets a 'redirect' response, the request is successfully finished with the ",(0,r.jsx)(t.code,{children:"requestfinished"})," event, and a new request is issued to a redirected url."]}),"\n",(0,r.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.jsx)(t.code,{children:"HTTPRequest"})," class."]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Property"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"client",children:"client"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"readonly"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.cdpsession",children:"CDPSession"})})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.em,{children:"(Experimental)"})})," Warning! Using this client can break Puppeteer. Use with caution."]})})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Method"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"abort",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.abort",children:"abort(errorCode, priority)"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.p,{children:"Aborts a request."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Remarks:"})}),(0,r.jsxs)(t.p,{children:["To use this, request interception should be enabled with ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.setrequestinterception",children:"Page.setRequestInterception()"}),". If it is not enabled, this method will throw an exception immediately."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"aborterrorreason",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.aborterrorreason",children:"abortErrorReason()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"The most recent reason for aborting the request"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"continue",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.continue",children:"continue(overrides, priority)"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.p,{children:"Continues request with optional request overrides."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Remarks:"})}),(0,r.jsxs)(t.p,{children:["To use this, request interception should be enabled with ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.setrequestinterception",children:"Page.setRequestInterception()"}),"."]}),(0,r.jsx)(t.p,{children:"Exception is immediately thrown if the request interception is not enabled."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"continuerequestoverrides",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.continuerequestoverrides",children:"continueRequestOverrides()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ContinueRequestOverrides"})," that will be used if the interception is allowed to continue (ie, ",(0,r.jsx)(t.code,{children:"abort()"})," and ",(0,r.jsx)(t.code,{children:"respond()"})," aren't called)."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"enqueueinterceptaction",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.enqueueinterceptaction",children:"enqueueInterceptAction(pendingHandler)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Adds an async request handler to the processing queue. Deferred handlers are not guaranteed to execute in any particular order, but they are guaranteed to resolve before the request interception is finalized."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"failure",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.failure",children:"failure()"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.p,{children:"Access information about the request's failure."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Remarks:"})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"fetchpostdata",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.fetchpostdata",children:"fetchPostData()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Fetches the POST data for the request from the browser."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"finalizeinterceptions",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.finalizeinterceptions",children:"finalizeInterceptions()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Awaits pending interception handlers and then decides how to fulfill the request interception."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"frame",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.frame",children:"frame()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"The frame that initiated the request, or null if navigating to error pages."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"haspostdata",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.haspostdata",children:"hasPostData()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["True when the request has POST data. Note that ",(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.postdata",children:"HTTPRequest.postData()"})," might still be undefined when this flag is true when the data is too long or not readily available in the decoded form. In that case, use ",(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.fetchpostdata",children:"HTTPRequest.fetchPostData()"}),"."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"headers",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.headers",children:"headers()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"An object with HTTP headers associated with the request. All header names are lower-case."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"initiator",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.initiator",children:"initiator()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"The initiator of the request."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"interceptresolutionstate",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.interceptresolutionstate",children:"interceptResolutionState()"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.p,{children:"An InterceptResolutionState object describing the current resolution action and priority."}),(0,r.jsx)(t.p,{children:"InterceptResolutionState contains: action: InterceptResolutionAction priority?: number"}),(0,r.jsxs)(t.p,{children:["InterceptResolutionAction is one of: ",(0,r.jsx)(t.code,{children:"abort"}),", ",(0,r.jsx)(t.code,{children:"respond"}),", ",(0,r.jsx)(t.code,{children:"continue"}),", ",(0,r.jsx)(t.code,{children:"disabled"}),", ",(0,r.jsx)(t.code,{children:"none"}),", or ",(0,r.jsx)(t.code,{children:"already-handled"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"isinterceptresolutionhandled",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.isinterceptresolutionhandled",children:"isInterceptResolutionHandled()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Is ",(0,r.jsx)(t.code,{children:"true"})," if the intercept resolution has already been handled, ",(0,r.jsx)(t.code,{children:"false"})," otherwise."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"isnavigationrequest",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.isnavigationrequest",children:"isNavigationRequest()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"True if the request is the driver of the current frame's navigation."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"method",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.method",children:"method()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["The method used (",(0,r.jsx)(t.code,{children:"GET"}),", ",(0,r.jsx)(t.code,{children:"POST"}),", etc.)"]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"postdata",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.postdata",children:"postData()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"The request's post body, if any."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"redirectchain",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.redirectchain",children:"redirectChain()"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"redirectChain"})," is a chain of requests initiated to fetch a resource."]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Remarks:"})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"redirectChain"})," is shared between all the requests of the same chain."]}),(0,r.jsxs)(t.p,{children:["For example, if the website ",(0,r.jsx)(t.code,{children:"http://example.com"})," has a single redirect to ",(0,r.jsx)(t.code,{children:"https://example.com"}),", then the chain will contain one request:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const response = await page.goto('http://example.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 1\nconsole.log(chain[0].url()); // 'http://example.com'\n"})}),(0,r.jsxs)(t.p,{children:["If the website ",(0,r.jsx)(t.code,{children:"https://google.com"})," has no redirects, then the chain will be empty:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const response = await page.goto('https://google.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 0\n"})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"resourcetype",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.resourcetype",children:"resourceType()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Contains the request's resource type as it was perceived by the rendering engine."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"respond",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.respond",children:"respond(response, priority)"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.p,{children:"Fulfills a request with the given response."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Remarks:"})}),(0,r.jsxs)(t.p,{children:["To use this, request interception should be enabled with ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.setrequestinterception",children:"Page.setRequestInterception()"}),"."]}),(0,r.jsx)(t.p,{children:"Exception is immediately thrown if the request interception is not enabled."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"response",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.response",children:"response()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["A matching ",(0,r.jsx)(t.code,{children:"HTTPResponse"})," object, or null if the response has not been received yet."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"responseforrequest",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.responseforrequest",children:"responseForRequest()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ResponseForRequest"})," that gets used if the interception is allowed to respond (ie, ",(0,r.jsx)(t.code,{children:"abort()"})," is not called)."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"url",children:(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.url",children:"url()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"The URL of the request"})})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},75251:(e,t,s)=>{var r=s(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,h=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var r,i={},l=null,a=null;for(r in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)d.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:n,type:e,key:l,ref:a,props:i,_owner:h.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},85893:(e,t,s)=>{e.exports=s(75251)},11151:(e,t,s)=>{s.d(t,{Z:()=>h,a:()=>d});var r=s(67294);const n={},i=r.createContext(n);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);