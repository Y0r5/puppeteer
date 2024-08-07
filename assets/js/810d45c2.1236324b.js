/*! For license information please see 810d45c2.1236324b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18423],{70356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(85893),i=t(11151);const r={},l="Page interactions",a={id:"guides/page-interactions",title:"Page interactions",description:"Puppeteer allows interacting with elements on the page through mouse, touch",source:"@site/versioned_docs/version-23.0.0/guides/page-interactions.md",sourceDirName:"guides",slug:"/guides/page-interactions",permalink:"/guides/page-interactions",draft:!1,unlisted:!1,tags:[],version:"23.0.0",frontMatter:{},sidebar:"docs",previous:{title:"Browser management",permalink:"/guides/browser-management"},next:{title:"JavaScript execution",permalink:"/guides/javascript-execution"}},s={},c=[{value:"Locators",id:"locators",level:2},{value:"Clicking an element using locators",id:"clicking-an-element-using-locators",level:3},{value:"Filling out an input",id:"filling-out-an-input",level:3},{value:"Hover over an element",id:"hover-over-an-element",level:4},{value:"Scroll an element",id:"scroll-an-element",level:4},{value:"Waiting for element to be visible",id:"waiting-for-element-to-be-visible",level:3},{value:"Waiting for a function",id:"waiting-for-a-function",level:3},{value:"Applying filters on locators",id:"applying-filters-on-locators",level:3},{value:"Returning values from a locator",id:"returning-values-from-a-locator",level:3},{value:"Returning ElementHandles from a locator",id:"returning-elementhandles-from-a-locator",level:3},{value:"Configuring locators",id:"configuring-locators",level:3},{value:"Locator timeouts",id:"locator-timeouts",level:3},{value:"Getting locator events",id:"getting-locator-events",level:3},{value:"waitForSelector",id:"waitforselector",level:2},{value:"Querying without waiting",id:"querying-without-waiting",level:2},{value:"Selectors",id:"selectors",level:2},{value:"Non-CSS selectors",id:"non-css-selectors",level:3},{value:"XPath selectors (<code>-p-xpath</code>)",id:"xpath-selectors--p-xpath",level:4},{value:"Text selectors (<code>-p-text</code>)",id:"text-selectors--p-text",level:4},{value:"ARIA selectors (<code>-p-aria</code>)",id:"aria-selectors--p-aria",level:4},{value:"Pierce selector (<code>pierce/</code>)",id:"pierce-selector-pierce",level:4},{value:"Querying elements in Shadow DOM",id:"querying-elements-in-shadow-dom",level:3},{value:"The <code>&gt;&gt;&gt;</code> combinator",id:"the--combinator",level:4},{value:"The <code>&gt;&gt;&gt;&gt;</code> combinator",id:"the--combinator-1",level:4},{value:"Custom selectors",id:"custom-selectors",level:4},{value:"Prefixed selector syntax",id:"prefixed-selector-syntax",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"page-interactions",children:"Page interactions"}),"\n",(0,o.jsxs)(n.p,{children:["Puppeteer allows interacting with elements on the page through mouse, touch\nevents and keyboard input. Usually you first query a DOM element using a ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",children:"CSS\nselector"})," and\nthen invoke an action on the selected element. All of Puppeteer APIs that accept\na selector, accept a ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",children:"CSS\nselector"})," by\ndefault. Additionally, Puppeteer offers ",(0,o.jsx)(n.a,{href:"#selectors",children:"custom selector syntax"})," that allows\nfinding elements using XPath, Text, Accessibility attributes and accessing\nShadow DOM without the need to execute JavaScript."]}),"\n",(0,o.jsxs)(n.p,{children:["If you want to emit mouse or\nkeyboard events without selecting an element first, use the\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.mouse",children:(0,o.jsx)(n.code,{children:"page.mouse"})}),",\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.keyboard",children:(0,o.jsx)(n.code,{children:"page.keyboard"})})," and\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.touchscreen",children:(0,o.jsx)(n.code,{children:"page.touchscreen"})})," APIs. The rest\nof this guide, gives an overview on how to select DOM elements and invoke\nactions on them."]}),"\n",(0,o.jsx)(n.h2,{id:"locators",children:"Locators"}),"\n",(0,o.jsxs)(n.p,{children:["Locators is the recommended way to select an element and interact with it.\nLocators encapsulate the information on how to select an element and they allow\nPuppeteer to automatically wait for the element to be present in the DOM and to\nbe in the right state for the action. You always instantiate a locator using the\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.locator",children:(0,o.jsx)(n.code,{children:"page.locator()"})})," or\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.frame.locator",children:(0,o.jsx)(n.code,{children:"frame.locator()"})})," function. If\nthe locator API doesn't offer a functionality you need, you can still use lower\nlevel APIs such as\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.waitforselector/",children:(0,o.jsx)(n.code,{children:"page.waitForSelector()"})}),"\nor ",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle/",children:(0,o.jsx)(n.code,{children:"ElementHandle"})}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"clicking-an-element-using-locators",children:"Clicking an element using locators"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// 'button' is a CSS selector.\nawait page.locator('button').click();\n"})}),"\n",(0,o.jsx)(n.p,{children:"The locator automatically checks the following before clicking:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Ensures the element is in the viewport."}),"\n",(0,o.jsxs)(n.li,{children:["Waits for the element to become\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/",children:"visible"})," or hidden."]}),"\n",(0,o.jsx)(n.li,{children:"Waits for the element to become enabled."}),"\n",(0,o.jsx)(n.li,{children:"Waits for the element to have a stable bounding box over two consecutive\nanimation frames."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"filling-out-an-input",children:"Filling out an input"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// 'input' is a CSS selector.\nawait page.locator('input').fill('value');\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Automatically detects the input type and choose an appropriate way to fill it\nout with the provided value. For example, it will fill out ",(0,o.jsx)(n.code,{children:"<select>"})," elements as\nwell as ",(0,o.jsx)(n.code,{children:"<input>"})," elements."]}),"\n",(0,o.jsx)(n.p,{children:"The locator automatically checks the following before typing into the input:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Ensures the element is in the viewport."}),"\n",(0,o.jsxs)(n.li,{children:["Waits for the element to become\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/",children:"visible"})," or hidden."]}),"\n",(0,o.jsx)(n.li,{children:"Waits for the element to become enabled."}),"\n",(0,o.jsx)(n.li,{children:"Waits for the element to have a stable bounding box over two consecutive\nanimation frames."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"hover-over-an-element",children:"Hover over an element"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"await page.locator('div').hover();\n"})}),"\n",(0,o.jsx)(n.p,{children:"The locator automatically checks the following before hovering:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Ensures the element is in the viewport."}),"\n",(0,o.jsxs)(n.li,{children:["Waits for the element to become\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/",children:"visible"})," or hidden."]}),"\n",(0,o.jsx)(n.li,{children:"Waits for the element to have a stable bounding box over two consecutive\nanimation frames."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"scroll-an-element",children:"Scroll an element"}),"\n",(0,o.jsxs)(n.p,{children:["The [",(0,o.jsx)(n.code,{children:".scroll()"}),"] functions uses mouse wheel events to scroll an element."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// Scroll the div element by 10px horizontally\n// and by 20 px vertically.\nawait page.locator('div').scroll({\n  scrollLeft: 10,\n  scrollTop: 20,\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"The locator automatically checks the following before hovering:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Ensures the element is in the viewport."}),"\n",(0,o.jsxs)(n.li,{children:["Waits for the element to become\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/",children:"visible"})," or hidden."]}),"\n",(0,o.jsx)(n.li,{children:"Waits for the element to have a stable bounding box over two consecutive\nanimation frames."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"waiting-for-element-to-be-visible",children:"Waiting for element to be visible"}),"\n",(0,o.jsx)(n.p,{children:"Sometimes you only need to wait for the element to be visible."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// '.loading' is a CSS selector.\nawait page.locator('.loading').wait();\n"})}),"\n",(0,o.jsx)(n.p,{children:"The locator automatically checks the following before returning:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Waits for the element to become\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/",children:"visible"})," or hidden."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"waiting-for-a-function",children:"Waiting for a function"}),"\n",(0,o.jsxs)(n.p,{children:["Sometimes it is useful to wait for an arbitrary condition expressed as a\nJavaScript function. In this case, locator can be defined using a function\ninstead of a selector. The following example waits until the MutationObserver\ndetects a ",(0,o.jsx)(n.code,{children:"HTMLCanvasElement"})," element appearing on the page. You can also call\nother locator functions such as ",(0,o.jsx)(n.code,{children:".click()"})," or ",(0,o.jsx)(n.code,{children:".fill()"})," on the function locator."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"await page\n  .locator(() => {\n    let resolve!: (node: HTMLCanvasElement) => void;\n    const promise = new Promise(res => {\n      return (resolve = res);\n    });\n    const observer = new MutationObserver(records => {\n      for (const record of records) {\n        if (record.target instanceof HTMLCanvasElement) {\n          resolve(record.target);\n        }\n      }\n    });\n    observer.observe(document);\n    return promise;\n  })\n  .wait();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"applying-filters-on-locators",children:"Applying filters on locators"}),"\n",(0,o.jsxs)(n.p,{children:["The following example shows how to add extra conditions to the locator expressed\nas a JavaScript function. The button element will only be clicked if its\n",(0,o.jsx)(n.code,{children:"innerText"})," is 'My button'."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"await page\n  .locator('button')\n  .filter(button => button.innerText === 'My button')\n  .click();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"returning-values-from-a-locator",children:"Returning values from a locator"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.locator.map/",children:(0,o.jsx)(n.code,{children:"map"})})," function allows mapping\nan element to a JavaScript value. In this case, calling ",(0,o.jsx)(n.code,{children:"wait()"})," will return the\ndeserialized JavaScript value."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const enabled = await page\n  .locator('button')\n  .map(button => !button.disabled)\n  .wait();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"returning-elementhandles-from-a-locator",children:"Returning ElementHandles from a locator"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.locator.waithandle/",children:(0,o.jsx)(n.code,{children:"waitHandle"})})," function\nallows returning the\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle/",children:"ElementHandle"}),". It might be\nuseful if there is no corresponding locator API for the action you need."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const buttonHandle = await page.locator('button').waitHandle();\nawait buttonHandle.click();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"configuring-locators",children:"Configuring locators"}),"\n",(0,o.jsx)(n.p,{children:"Locators can be configured to tune configure the preconditions and other options:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// Clicks on a button without waiting for any preconditions.\nawait page\n  .locator('button')\n  .setEnsureElementIsInTheViewport(false)\n  .setVisibility(null)\n  .setWaitForEnabled(false)\n  .setWaitForStableBoundingBox(false)\n  .click();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"locator-timeouts",children:"Locator timeouts"}),"\n",(0,o.jsxs)(n.p,{children:["By default, locators inherit the timeout setting from the page. But it is\npossible to set the timeout on the per-locator basis. A\n",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.timeouterror/",children:"TimeoutError"})," will be thrown if\nthe element is not found or the preconditions are not met within the specified\ntime period."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// Time out after 3 sec.\nawait page.locator('button').setTimeout(3000).click();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"getting-locator-events",children:"Getting locator events"}),"\n",(0,o.jsxs)(n.p,{children:["Currently, locators support ",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.locatorevents/",children:"a single\nevent"})," that notifies you when the\nlocator is about to perform the action indicating that pre-conditions have been\nmet:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"let willClick = false;\nawait page\n  .locator('button')\n  .on(LocatorEvent.Action, () => {\n    willClick = true;\n  })\n  .click();\n"})}),"\n",(0,o.jsx)(n.p,{children:"This event can be used for logging/debugging or other purposes. The event might\nfire multiple times if the locator retries the action."}),"\n",(0,o.jsx)(n.h2,{id:"waitforselector",children:"waitForSelector"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.waitforselector/",children:(0,o.jsx)(n.code,{children:"waitForSelector"})})," is a\nlower-level API compared to locators that allows waiting for an element to be\navailable in DOM. It does not automatically retry the action if it fails and\nrequires manually disposing the resulting ElementHandle to prevent memory leaks.\nThe method exists on the Page, Frame and ElementHandle instances."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// Import puppeteer\nimport puppeteer from 'puppeteer';\n\n// Launch the browser.\nconst browser = await puppeteer.launch();\n\n// Create a page.\nconst page = await browser.newPage();\n\n// Go to your site.\nawait page.goto('YOUR_SITE');\n\n// Query for an element handle.\nconst element = await page.waitForSelector('div > .class-name');\n\n// Do something with element...\nawait element.click(); // Just an example.\n\n// Dispose of handle.\nawait element.dispose();\n\n// Close browser.\nawait browser.close();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Some page level APIs such as ",(0,o.jsx)(n.code,{children:"page.click(selector)"}),", ",(0,o.jsx)(n.code,{children:"page.type(selector)"}),",\n",(0,o.jsx)(n.code,{children:"page.hover(selector)"})," are implemented using ",(0,o.jsx)(n.code,{children:"waitForSelector"})," for\nbackwards-compatibility reasons."]}),"\n",(0,o.jsx)(n.h2,{id:"querying-without-waiting",children:"Querying without waiting"}),"\n",(0,o.jsx)(n.p,{children:"Sometimes you know that the elements are already on the page. In that case,\nPuppeteer offers multiple ways to find an element or multiple elements matching a\nselector. These methods exist on Page, Frame and ElementHandle instances."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page._/",children:(0,o.jsx)(n.code,{children:"page.$()"})})," returns a single element\nmatching a selector."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.__",children:(0,o.jsx)(n.code,{children:"page.$$()"})})," returns all elements matching a selector."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page._eval",children:(0,o.jsx)(n.code,{children:"page.$eval()"})})," returns the result\nof running a JavaScript function on the first element matching a selector."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.__eval",children:(0,o.jsx)(n.code,{children:"page.$$eval()"})})," returns the\nresult of running a JavaScript function on each element matching a selector."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"selectors",children:"Selectors"}),"\n",(0,o.jsxs)(n.p,{children:["Puppeteer accepts ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",children:"CSS\nselectors"})," in\nevery API that accepts a selector. Additionally, you can opt-in into using\nadditional selector syntax to do more than CSS selectors offer."]}),"\n",(0,o.jsx)(n.h3,{id:"non-css-selectors",children:"Non-CSS selectors"}),"\n",(0,o.jsxs)(n.p,{children:["Puppeteer extends the CSS syntax with custom\n",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements",children:"pseudo-elements"}),"\nthat define how to select an element using a non-CSS selector. The Puppeteer\nsupported pseudo-elements are prefixed with a ",(0,o.jsx)(n.code,{children:"-p"})," vendor prefix."]}),"\n",(0,o.jsxs)(n.h4,{id:"xpath-selectors--p-xpath",children:["XPath selectors (",(0,o.jsx)(n.code,{children:"-p-xpath"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["XPath selectors will use the browser's native ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate",children:(0,o.jsx)(n.code,{children:"Document.evaluate"})})," to query for elements."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// Runs the `//h2` as the XPath expression.\nconst element = await page.waitForSelector('::-p-xpath(//h2)');\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"text-selectors--p-text",children:["Text selectors (",(0,o.jsx)(n.code,{children:"-p-text"}),")"]}),"\n",(0,o.jsx)(n.p,{children:'Text selectors will select "minimal" elements containing the given text, even\nwithin (open) shadow roots. Here, "minimum" means the deepest elements that\ncontain a given text, but not their parents (which technically will also contain\nthe given text).'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// Click a button inside a div element that has Checkout as the inner text.\nawait page.locator('div ::-p-text(Checkout)').click();\n// You need to escape CSS selector syntax such '(', ')' if it is part of the your search text ('Checkout (2 items)').\nawait page.locator(':scope >>> ::-p-text(Checkout \\\\(2 items\\\\))').click();\n// or use quotes escaping any quotes that are part of the search text ('He said: \"Hello\"').\nawait page.locator(':scope >>> ::-p-text(\"He said: \\\\\"Hello\\\\\"\")').click();\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"aria-selectors--p-aria",children:["ARIA selectors (",(0,o.jsx)(n.code,{children:"-p-aria"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"ARIA selectors can be used to find elements using the computed accessible name\nand role. These labels are computed using the browsers internal representation\nof the accessibility tree. That means that ARIA relationships such as labeledby\nare resolved before the query is run. The ARIA selectors are useful if you do\nnot want to depend on any particular DOM structure or DOM attributes."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"await page.locator('::-p-aria(Submit)').click();\nawait page.locator('::-p-aria([name=\"Click me\"][role=\"button\"])').click();\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"pierce-selector-pierce",children:["Pierce selector (",(0,o.jsx)(n.code,{children:"pierce/"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["Pierce selector is a selector that returns all elements matching the provided CSS selector in\nall shadow roots in the document. We recommend using ",(0,o.jsx)(n.a,{href:"#querying-elements-in-shadow-dom",children:"deep\ncombinators"})," instead because they offer more\nflexibility in combining difference selectors. ",(0,o.jsx)(n.code,{children:"pierce/"})," is only available in\nthe ",(0,o.jsx)(n.a,{href:"#prefixed-selector-syntax",children:"prefixed notation"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"await page.locator('pierce/div').click();\n// Same query as the pierce/ one using deep combinators.\nawait page.locator('& >>> div').click();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"querying-elements-in-shadow-dom",children:"Querying elements in Shadow DOM"}),"\n",(0,o.jsxs)(n.p,{children:["CSS selectors do not allow descending into Shadow DOM, therefore, Puppeteer adds\ntwo combinators to the CSS selector syntax that allow searching inside ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",children:"shadow\nDOM"}),"."]}),"\n",(0,o.jsxs)(n.h4,{id:"the--combinator",children:["The ",(0,o.jsx)(n.code,{children:">>>"})," combinator"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:">>>"})," is called the ",(0,o.jsx)(n.em,{children:"deep descendent"})," combinator. It is analogous to the\nCSS's descendent combinator (denoted with a single space character ",(0,o.jsx)("code",{children:"\xa0"}),", for\nexample, ",(0,o.jsx)(n.code,{children:"div button"}),") and it selects matching elements under the parent element\nat any depth. For example, ",(0,o.jsx)(n.code,{children:"my-custom-element >>> button"})," would select all\nbutton elements that are available inside shadow DOM of the ",(0,o.jsx)(n.code,{children:"my-custom-element"}),"\n(the shadow host)."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:['Deep combinators only work on the first "depth" of CSS selectors and open shadow\nroots; for example, ',(0,o.jsx)(n.code,{children:":is(div > > a)"})," will not work."]})}),"\n",(0,o.jsxs)(n.h4,{id:"the--combinator-1",children:["The ",(0,o.jsx)(n.code,{children:">>>>"})," combinator"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:">>>>"})," is called the ",(0,o.jsx)(n.em,{children:"deep child"})," combinator. It is analogous to the CSS's\nchild combinator (denoted with ",(0,o.jsx)(n.code,{children:">"}),", for example, ",(0,o.jsx)(n.code,{children:"div > button"}),") and it selects\nmatching elements under the parent element's immediate shadow root, if the\nelement has one. For example,\n",(0,o.jsx)(n.code,{children:"my-custom-element >>>> button"})," would select all button elements that are available\ninside the immediate shadow root of the ",(0,o.jsx)(n.code,{children:"my-custom-element"})," (the shadow host)."]}),"\n",(0,o.jsx)(n.h4,{id:"custom-selectors",children:"Custom selectors"}),"\n",(0,o.jsxs)(n.p,{children:["You can also add your own pseudo element using\n",(0,o.jsx)(n.a,{href:"../api/puppeteer.registercustomqueryhandler.md",children:"Puppeteer.registerCustomQueryHandler"}),".\nThis is useful for creating custom selectors based on framework objects or your application."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, you can write all your selectors using the ",(0,o.jsx)(n.code,{children:"react-component"})," pseudo-element\nand implement a custom logic how to resolve the provided ID."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'Puppeteer.registerCustomQueryHandler(\'react-component\', {\n  queryOne: (elementOrDocument, selector) => {\n    // Dummy example just delegates to querySelector but you can find your\n    // React component because this callback runs in the page context.\n    return elementOrDocument.querySelector(`[id="${CSS.escape(selector)}"]`);\n  },\n  queryAll: (elementOrDocument, selector) => {\n    // Dummy example just delegates to querySelector but you can find your\n    // React component because this callback runs in the page context.\n    return elementOrDocument.querySelectorAll(`[id="${CSS.escape(selector)}"]`);\n  },\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:"In your application you can now write selectors as following."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"await page.locator('::-p-react-component(MyComponent)').click();\n// OR used in conjunction with other selectors.\nawait page.locator('.side-bar ::-p-react-component(MyComponent)').click();\n"})}),"\n",(0,o.jsx)(n.p,{children:"Another example shows how you can define a custom query handler for locating vue\ncomponents:"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Be careful when relying on internal APIs of libraries or frameworks. They can change at any time."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"Puppeteer.registerCustomQueryHandler('vue', {\n  queryOne: (element, name) => {\n    const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT);\n    do {\n      const currentNode = walker.currentNode;\n      if (\n        currentNode.__vnode?.ctx?.type?.name.toLowerCase() ===\n        name.toLocaleLowerCase()\n      ) {\n        return currentNode;\n      }\n    } while (walker.nextNode());\n\n    return null;\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Search for a given view component as following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const element = await page.$('::-p-vue(MyComponent)');\n"})}),"\n",(0,o.jsx)(n.h3,{id:"prefixed-selector-syntax",children:"Prefixed selector syntax"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"While we maintain prefixed selectors, the recommended way is to use the selector syntax documented above."})}),"\n",(0,o.jsxs)(n.p,{children:["The following legacy syntax (",(0,o.jsx)(n.code,{children:"${nonCssSelectorName}/${nonCssSelector}"}),") allows\nrunning a single non-CSS selector at a time is also supported. Note that this\nsyntax does not allow combining multiple selectors."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// Same as ::-p-text(\"My text\").\nawait page.locator('text/My text').click();\n// Same as ::-p-xpath(//h2).\nawait page.locator('xpath///h2').click();\n// Same as ::-p-aria(My label).\nawait page.locator('aria/My label').click();\n\nawait page.locator('pierce/div').click();\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},75251:(e,n,t)=>{var o=t(67294),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var o,r={},c=null,d=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,o)&&!s.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:a.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var o=t(67294);const i={},r=o.createContext(i);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);