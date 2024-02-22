/*! For license information please see a2e5caa3.c1553416.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93325],{1378:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var n=t(85893),s=t(11151);const i={},o="FAQ",p={id:"faq",title:"FAQ",description:"Q: Who maintains Puppeteer?",source:"@site/versioned_docs/version-22.2.0/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,unlisted:!1,tags:[],version:"22.2.0",frontMatter:{},sidebar:"docs",previous:{title:"Contributing",permalink:"/contributing"}},a={},h=[{value:"Q: Who maintains Puppeteer?",id:"q-who-maintains-puppeteer",level:2},{value:"Q: What is the status of cross-browser support?",id:"q-what-is-the-status-of-cross-browser-support",level:2},{value:"Q: Does Puppeteer support WebDriver BiDi?",id:"q-does-puppeteer-support-webdriver-bidi",level:2},{value:"Q: What are Puppeteer\u2019s goals and principles?",id:"q-what-are-puppeteers-goals-and-principles",level:2},{value:"Q: Is Puppeteer a replacement for Selenium WebDriver?",id:"q-is-puppeteer-a-replacement-for-selenium-webdriver",level:2},{value:"Q: Why doesn\u2019t Puppeteer v.XXX work with Chromium v.YYY?",id:"q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy",level:2},{value:"Q: Which Chrome version does Puppeteer use?",id:"q-which-chrome-version-does-puppeteer-use",level:2},{value:"Q: Which Firefox version does Puppeteer use?",id:"q-which-firefox-version-does-puppeteer-use",level:2},{value:"Q: What\u2019s considered a \u201cNavigation\u201d?",id:"q-whats-considered-a-navigation",level:2},{value:"Q: What\u2019s the difference between a \u201ctrusted&quot; and &quot;untrusted&quot; input event?",id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event",level:2},{value:"Q: Does Puppeteer support media and audio playback?",id:"q-does-puppeteer-support-media-and-audio-playback",level:2},{value:"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?",id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help",level:2},{value:"Q: I have more questions! Where do I ask?",id:"q-i-have-more-questions-where-do-i-ask",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"faq",children:"FAQ"}),"\n",(0,n.jsx)(r.h2,{id:"q-who-maintains-puppeteer",children:"Q: Who maintains Puppeteer?"}),"\n",(0,n.jsxs)(r.p,{children:["The Chrome Browser Automation team maintains the library, but we'd love your help and\nexpertise on the project! See our\n",(0,n.jsx)(r.a,{href:"https://pptr.dev/contributing",children:"contributing guide"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"q-what-is-the-status-of-cross-browser-support",children:"Q: What is the status of cross-browser support?"}),"\n",(0,n.jsx)(r.p,{children:"Official Firefox support is currently experimental. The ongoing collaboration\nwith Mozilla aims to support common end-to-end testing use cases, for which\ndevelopers expect cross-browser coverage. The Puppeteer team needs input from\nusers to stabilize Firefox support and to bring missing APIs to our attention."}),"\n",(0,n.jsxs)(r.p,{children:["From Puppeteer v2.1.0 onwards you can specify\n",(0,n.jsx)(r.a,{href:"./api/puppeteer.puppeteernode.launch",children:(0,n.jsx)(r.code,{children:"puppeteer.launch({product: 'firefox'})"})}),"\nto run your Puppeteer scripts in Firefox Nightly, without any additional custom\npatches. While\n",(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/puppeteer-firefox",children:"an older experiment"})," required\na patched version of Firefox,\n",(0,n.jsx)(r.a,{href:"https://wiki.mozilla.org/Remote",children:"the current approach"})," works with \u201cstock\u201d\nFirefox."]}),"\n",(0,n.jsx)(r.p,{children:"We will continue to collaborate with other browser vendors to bring Puppeteer\nsupport to browsers such as Safari. This effort includes exploration of a\nstandard for executing cross-browser commands (instead of relying on the\nnon-standard DevTools Protocol used by Chrome)."}),"\n",(0,n.jsxs)(r.p,{children:["Update 2023-11-17: Puppeteer has experimental support for the new\n",(0,n.jsx)(r.a,{href:"https://w3c.github.io/webdriver-bidi/",children:"WebDriverBiDi"})," protocol that can be used\nto automate Firefox. The WebDriver BiDi implementation in Firefox will replace\nthe current CDP implementation in Firefox in the future. See\n",(0,n.jsx)(r.a,{href:"https://pptr.dev/webdriver-bidi",children:"https://pptr.dev/webdriver-bidi"})," for more details."]}),"\n",(0,n.jsx)(r.h2,{id:"q-does-puppeteer-support-webdriver-bidi",children:"Q: Does Puppeteer support WebDriver BiDi?"}),"\n",(0,n.jsxs)(r.p,{children:["Puppeteer has experimental support for WebDriver BiDi. See ",(0,n.jsx)(r.a,{href:"https://pptr.dev/webdriver-bidi",children:"https://pptr.dev/webdriver-bidi"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"q-what-are-puppeteers-goals-and-principles",children:"Q: What are Puppeteer\u2019s goals and principles?"}),"\n",(0,n.jsx)(r.p,{children:"The goals of the project are:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Provide a reference implementation that highlights the capabilities of the\n",(0,n.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"Chrome DevTools"}),"\nand ",(0,n.jsx)(r.a,{href:"https://w3c.github.io/webdriver-bidi/",children:"WebDriver BiDi"})," protocols."]}),"\n",(0,n.jsx)(r.li,{children:"Grow the adoption of automated cross-browser testing."}),"\n",(0,n.jsx)(r.li,{children:"Help dogfood new DevTools Protocol and WebDriver BiDi features...and catch bugs!"}),"\n",(0,n.jsx)(r.li,{children:"Learn more about the pain points of automated browser testing and help fill\nthose gaps."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["We adapt\n",(0,n.jsx)(r.a,{href:"https://www.chromium.org/developers/core-principles",children:"Chromium principles"})," to\nhelp us drive product decisions:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Speed"}),": Puppeteer has almost zero performance overhead over an automated\npage."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Security"}),": Puppeteer operates off-process with respect to the browser, making\nit safe to automate potentially malicious pages."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Stability"}),": Puppeteer should not be flaky and should not leak memory."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Simplicity"}),": Puppeteer provides a high-level API that\u2019s easy to use,\nunderstand, and debug."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"q-is-puppeteer-a-replacement-for-selenium-webdriver",children:"Q: Is Puppeteer a replacement for Selenium WebDriver?"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"No"}),". Both projects are valuable for very different reasons:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Selenium WebDriver focuses on cross-browser automation and provides bindings for\nmultiple languages; Puppeteer is only for JavaScript."}),"\n",(0,n.jsx)(r.li,{children:"Puppeteer focuses on Chromium; its value proposition is richer functionality\nfor Chromium-based browsers."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["That said, you ",(0,n.jsx)(r.strong,{children:"can"})," use Puppeteer to run tests against Chromium, e.g. using\nthe community-driven\n",(0,n.jsx)(r.a,{href:"https://github.com/smooth-code/jest-puppeteer",children:"jest-puppeteer"})," or\n",(0,n.jsx)(r.a,{href:"https://pptr.dev/integrations/ng-schematics",children:"Puppeteer's Angular integration"}),". While this\nprobably shouldn\u2019t be your only testing solution, it does have a few good points\ncompared to WebDriver classic:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Puppeteer requires zero setup and comes bundled with the Chrome version it\nworks best with, making it\n",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/#getting-started",children:"very easy to start with"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Puppeteer has event-driven architecture, which removes a lot of potential\nflakiness. There\u2019s no need for \u201csleep(1000)\u201d calls in puppeteer scripts."}),"\n",(0,n.jsx)(r.li,{children:"Puppeteer exposes browser contexts, making it possible to efficiently\nparallelize test execution."}),"\n",(0,n.jsx)(r.li,{children:"Puppeteer shines when it comes to debugging: flip the \u201cheadless\u201d bit to false,\nadd \u201cslowMo\u201d, and you\u2019ll see what the browser is doing. You can even open\nChrome DevTools to inspect the test environment."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy",children:"Q: Why doesn\u2019t Puppeteer v.XXX work with Chromium v.YYY?"}),"\n",(0,n.jsxs)(r.p,{children:["We see Puppeteer as an ",(0,n.jsx)(r.strong,{children:"indivisible entity"})," with Chromium. Each version of\nPuppeteer bundles a specific version of Chromium \u2013 ",(0,n.jsx)(r.strong,{children:"the only"})," version it is\nguaranteed to work with."]}),"\n",(0,n.jsx)(r.p,{children:"This is not an artificial constraint: A lot of work on Puppeteer is actually\ntaking place in the Chromium repository. Here\u2019s a typical story:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["A Puppeteer bug is reported:\n",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/issues/2709",children:"https://github.com/puppeteer/puppeteer/issues/2709"})]}),"\n",(0,n.jsxs)(r.li,{children:["It turned out this is an issue with the DevTools protocol, so we\u2019re fixing it\nin Chromium: ",(0,n.jsx)(r.a,{href:"https://chromium-review.googlesource.com/c/chromium/src/+/1102154",children:"https://chromium-review.googlesource.com/c/chromium/src/+/1102154"})]}),"\n",(0,n.jsxs)(r.li,{children:["Once the upstream fix is landed, we roll updated Chromium into Puppeteer:\n",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/pull/2769",children:"https://github.com/puppeteer/puppeteer/pull/2769"})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"q-which-chrome-version-does-puppeteer-use",children:"Q: Which Chrome version does Puppeteer use?"}),"\n",(0,n.jsxs)(r.p,{children:["Look for the ",(0,n.jsx)(r.code,{children:"chrome"})," entry in\n",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/packages/puppeteer-core/src/revisions.ts",children:"revisions.ts"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"q-which-firefox-version-does-puppeteer-use",children:"Q: Which Firefox version does Puppeteer use?"}),"\n",(0,n.jsxs)(r.p,{children:["Since Firefox support is experimental, Puppeteer downloads the latest\n",(0,n.jsx)(r.a,{href:"https://wiki.mozilla.org/Nightly",children:"Firefox Nightly"})," when the ",(0,n.jsx)(r.code,{children:"PUPPETEER_PRODUCT"}),"\nenvironment variable is set to ",(0,n.jsx)(r.code,{children:"firefox"}),". That's also why the value of ",(0,n.jsx)(r.code,{children:"firefox"}),"\nin\n",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/packages/puppeteer-core/src/revisions.ts",children:"revisions.ts"}),"\nis ",(0,n.jsx)(r.code,{children:"latest"})," -- Puppeteer isn't tied to a particular Firefox version."]}),"\n",(0,n.jsx)(r.p,{children:"To fetch Firefox Nightly as part of Puppeteer installation:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"PUPPETEER_PRODUCT=firefox npm i puppeteer\n"})}),"\n",(0,n.jsx)(r.p,{children:"To download Firefox Nightly into an existing Puppeteer project:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npx puppeteer browsers install firefox\n"})}),"\n",(0,n.jsx)(r.h2,{id:"q-whats-considered-a-navigation",children:"Q: What\u2019s considered a \u201cNavigation\u201d?"}),"\n",(0,n.jsxs)(r.p,{children:["From Puppeteer\u2019s standpoint, ",(0,n.jsx)(r.strong,{children:"\u201cnavigation\u201d is anything that changes a page\u2019s\nURL"}),". Aside from regular navigation where the browser hits the network to fetch\na new document from the web server, this includes\n",(0,n.jsx)(r.a,{href:"https://www.w3.org/TR/html5/single-page.html#scroll-to-fragid",children:"anchor navigations"}),"\nand ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",children:"History API"}),"\nusage."]}),"\n",(0,n.jsxs)(r.p,{children:["With this definition of \u201cnavigation,\u201d ",(0,n.jsx)(r.strong,{children:"Puppeteer works seamlessly with\nsingle-page applications."})]}),"\n",(0,n.jsx)(r.h2,{id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event",children:'Q: What\u2019s the difference between a \u201ctrusted" and "untrusted" input event?'}),"\n",(0,n.jsx)(r.p,{children:"In browsers, input events could be divided into two big groups: trusted vs.\nuntrusted."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Trusted events"}),": events generated by users interacting with the page, e.g.\nusing a mouse or keyboard."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Untrusted event"}),": events generated by Web APIs, e.g. ",(0,n.jsx)(r.code,{children:"document.createEvent"}),"\nor ",(0,n.jsx)(r.code,{children:"element.click()"})," methods."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Websites can distinguish between these two groups:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["using an\n",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted",children:(0,n.jsx)(r.code,{children:"Event.isTrusted"})}),"\nevent flag"]}),"\n",(0,n.jsxs)(r.li,{children:["sniffing for accompanying events. For example, every trusted ",(0,n.jsx)(r.code,{children:"'click'"})," event\nis preceded by ",(0,n.jsx)(r.code,{children:"'mousedown'"})," and ",(0,n.jsx)(r.code,{children:"'mouseup'"})," events."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["For automation purposes it\u2019s important to generate trusted events. ",(0,n.jsx)(r.strong,{children:"All input\nevents generated with Puppeteer are trusted and fire proper accompanying\nevents."})," If, for some reason, one needs an untrusted event, it\u2019s always\npossible to hop into a page context with ",(0,n.jsx)(r.code,{children:"page.evaluate"})," and generate a fake\nevent:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"await page.evaluate(() => {\n  document.querySelector('button[type=submit]').click();\n});\n"})}),"\n",(0,n.jsx)(r.h2,{id:"q-does-puppeteer-support-media-and-audio-playback",children:"Q: Does Puppeteer support media and audio playback?"}),"\n",(0,n.jsxs)(r.p,{children:["Puppeteer uses ",(0,n.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"Chrome for Testing"})," binaries\nby default which ship with properietary codecs support starting from\n",(0,n.jsx)(r.a,{href:"https://chromiumdash.appspot.com/commit/12d607016c31ea13579e897740c765be189ed6eb",children:"M120"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help",children:"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?"}),"\n",(0,n.jsxs)(r.p,{children:["We have a\n",(0,n.jsx)(r.a,{href:"https://pptr.dev/troubleshooting",children:"troubleshooting"}),"\nguide for various operating systems that lists the required dependencies."]}),"\n",(0,n.jsx)(r.h2,{id:"q-i-have-more-questions-where-do-i-ask",children:"Q: I have more questions! Where do I ask?"}),"\n",(0,n.jsx)(r.p,{children:"There are many ways to get help on Puppeteer:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["For questions: ",(0,n.jsx)(r.a,{href:"https://stackoverflow.com/questions/tagged/puppeteer",children:"Stack Overflow"})]}),"\n",(0,n.jsxs)(r.li,{children:["For bug reports: ",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/issues",children:"GitHub Issues"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Make sure to search these channels before posting your question."})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,t){var n,i={},h=null,l=null;for(n in void 0!==t&&(h=""+t),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,n)&&!a.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:h,ref:l,props:i,_owner:p.current}}r.Fragment=i,r.jsx=h,r.jsxs=h},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>p,a:()=>o});var n=t(67294);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);