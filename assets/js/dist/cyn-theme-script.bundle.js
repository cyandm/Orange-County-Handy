(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e10) {
      throw err = [e10], e10;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/htmx.org/dist/htmx.esm.js
  var htmx_esm_exports = {};
  __export(htmx_esm_exports, {
    default: () => htmx_esm_default
  });
  var htmx2, htmx_esm_default;
  var init_htmx_esm = __esm({
    "node_modules/htmx.org/dist/htmx.esm.js"() {
      htmx2 = (function() {
        "use strict";
        const htmx = {
          // Tsc madness here, assigning the functions directly results in an invalid TypeScript output, but reassigning is fine
          /* Event processing */
          /** @type {typeof onLoadHelper} */
          onLoad: null,
          /** @type {typeof processNode} */
          process: null,
          /** @type {typeof addEventListenerImpl} */
          on: null,
          /** @type {typeof removeEventListenerImpl} */
          off: null,
          /** @type {typeof triggerEvent} */
          trigger: null,
          /** @type {typeof ajaxHelper} */
          ajax: null,
          /* DOM querying helpers */
          /** @type {typeof find} */
          find: null,
          /** @type {typeof findAll} */
          findAll: null,
          /** @type {typeof closest} */
          closest: null,
          /**
           * Returns the input values that would resolve for a given element via the htmx value resolution mechanism
           *
           * @see https://htmx.org/api/#values
           *
           * @param {Element} elt the element to resolve values on
           * @param {HttpVerb} type the request type (e.g. **get** or **post**) non-GET's will include the enclosing form of the element. Defaults to **post**
           * @returns {Object}
           */
          values: function(elt, type) {
            const inputValues = getInputValues(elt, type || "post");
            return inputValues.values;
          },
          /* DOM manipulation helpers */
          /** @type {typeof removeElement} */
          remove: null,
          /** @type {typeof addClassToElement} */
          addClass: null,
          /** @type {typeof removeClassFromElement} */
          removeClass: null,
          /** @type {typeof toggleClassOnElement} */
          toggleClass: null,
          /** @type {typeof takeClassForElement} */
          takeClass: null,
          /** @type {typeof swap} */
          swap: null,
          /* Extension entrypoints */
          /** @type {typeof defineExtension} */
          defineExtension: null,
          /** @type {typeof removeExtension} */
          removeExtension: null,
          /* Debugging */
          /** @type {typeof logAll} */
          logAll: null,
          /** @type {typeof logNone} */
          logNone: null,
          /* Debugging */
          /**
           * The logger htmx uses to log with
           *
           * @see https://htmx.org/api/#logger
           */
          logger: null,
          /**
           * A property holding the configuration htmx uses at runtime.
           *
           * Note that using a [meta tag](https://htmx.org/docs/#config) is the preferred mechanism for setting these properties.
           *
           * @see https://htmx.org/api/#config
           */
          config: {
            /**
             * Whether to use history.
             * @type boolean
             * @default true
             */
            historyEnabled: true,
            /**
             * The number of pages to keep in **sessionStorage** for history support.
             * @type number
             * @default 10
             */
            historyCacheSize: 10,
            /**
             * @type boolean
             * @default false
             */
            refreshOnHistoryMiss: false,
            /**
             * The default swap style to use if **[hx-swap](https://htmx.org/attributes/hx-swap)** is omitted.
             * @type HtmxSwapStyle
             * @default 'innerHTML'
             */
            defaultSwapStyle: "innerHTML",
            /**
             * The default delay between receiving a response from the server and doing the swap.
             * @type number
             * @default 0
             */
            defaultSwapDelay: 0,
            /**
             * The default delay between completing the content swap and settling attributes.
             * @type number
             * @default 20
             */
            defaultSettleDelay: 20,
            /**
             * If true, htmx will inject a small amount of CSS into the page to make indicators invisible unless the **htmx-indicator** class is present.
             * @type boolean
             * @default true
             */
            includeIndicatorStyles: true,
            /**
             * The class to place on indicators when a request is in flight.
             * @type string
             * @default 'htmx-indicator'
             */
            indicatorClass: "htmx-indicator",
            /**
             * The class to place on triggering elements when a request is in flight.
             * @type string
             * @default 'htmx-request'
             */
            requestClass: "htmx-request",
            /**
             * The class to temporarily place on elements that htmx has added to the DOM.
             * @type string
             * @default 'htmx-added'
             */
            addedClass: "htmx-added",
            /**
             * The class to place on target elements when htmx is in the settling phase.
             * @type string
             * @default 'htmx-settling'
             */
            settlingClass: "htmx-settling",
            /**
             * The class to place on target elements when htmx is in the swapping phase.
             * @type string
             * @default 'htmx-swapping'
             */
            swappingClass: "htmx-swapping",
            /**
             * Allows the use of eval-like functionality in htmx, to enable **hx-vars**, trigger conditions & script tag evaluation. Can be set to **false** for CSP compatibility.
             * @type boolean
             * @default true
             */
            allowEval: true,
            /**
             * If set to false, disables the interpretation of script tags.
             * @type boolean
             * @default true
             */
            allowScriptTags: true,
            /**
             * If set, the nonce will be added to inline scripts.
             * @type string
             * @default ''
             */
            inlineScriptNonce: "",
            /**
             * If set, the nonce will be added to inline styles.
             * @type string
             * @default ''
             */
            inlineStyleNonce: "",
            /**
             * The attributes to settle during the settling phase.
             * @type string[]
             * @default ['class', 'style', 'width', 'height']
             */
            attributesToSettle: ["class", "style", "width", "height"],
            /**
             * Allow cross-site Access-Control requests using credentials such as cookies, authorization headers or TLS client certificates.
             * @type boolean
             * @default false
             */
            withCredentials: false,
            /**
             * @type number
             * @default 0
             */
            timeout: 0,
            /**
             * The default implementation of **getWebSocketReconnectDelay** for reconnecting after unexpected connection loss by the event code **Abnormal Closure**, **Service Restart** or **Try Again Later**.
             * @type {'full-jitter' | ((retryCount:number) => number)}
             * @default "full-jitter"
             */
            wsReconnectDelay: "full-jitter",
            /**
             * The type of binary data being received over the WebSocket connection
             * @type BinaryType
             * @default 'blob'
             */
            wsBinaryType: "blob",
            /**
             * @type string
             * @default '[hx-disable], [data-hx-disable]'
             */
            disableSelector: "[hx-disable], [data-hx-disable]",
            /**
             * @type {'auto' | 'instant' | 'smooth'}
             * @default 'instant'
             */
            scrollBehavior: "instant",
            /**
             * If the focused element should be scrolled into view.
             * @type boolean
             * @default false
             */
            defaultFocusScroll: false,
            /**
             * If set to true htmx will include a cache-busting parameter in GET requests to avoid caching partial responses by the browser
             * @type boolean
             * @default false
             */
            getCacheBusterParam: false,
            /**
             * If set to true, htmx will use the View Transition API when swapping in new content.
             * @type boolean
             * @default false
             */
            globalViewTransitions: false,
            /**
             * htmx will format requests with these methods by encoding their parameters in the URL, not the request body
             * @type {(HttpVerb)[]}
             * @default ['get', 'delete']
             */
            methodsThatUseUrlParams: ["get", "delete"],
            /**
             * If set to true, disables htmx-based requests to non-origin hosts.
             * @type boolean
             * @default false
             */
            selfRequestsOnly: true,
            /**
             * If set to true htmx will not update the title of the document when a title tag is found in new content
             * @type boolean
             * @default false
             */
            ignoreTitle: false,
            /**
             * Whether the target of a boosted element is scrolled into the viewport.
             * @type boolean
             * @default true
             */
            scrollIntoViewOnBoost: true,
            /**
             * The cache to store evaluated trigger specifications into.
             * You may define a simple object to use a never-clearing cache, or implement your own system using a [proxy object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
             * @type {Object|null}
             * @default null
             */
            triggerSpecsCache: null,
            /** @type boolean */
            disableInheritance: false,
            /** @type HtmxResponseHandlingConfig[] */
            responseHandling: [
              { code: "204", swap: false },
              { code: "[23]..", swap: true },
              { code: "[45]..", swap: false, error: true }
            ],
            /**
             * Whether to process OOB swaps on elements that are nested within the main response element.
             * @type boolean
             * @default true
             */
            allowNestedOobSwaps: true,
            /**
             * Whether to treat history cache miss full page reload requests as a "HX-Request" by returning this response header
             * This should always be disabled when using HX-Request header to optionally return partial responses
             * @type boolean
             * @default true
             */
            historyRestoreAsHxRequest: true,
            /**
             * Whether to report input validation errors to the end user and update focus to the first input that fails validation.
             * This should always be enabled as this matches default browser form submit behaviour
             * @type boolean
             * @default false
             */
            reportValidityOfForms: false
          },
          /** @type {typeof parseInterval} */
          parseInterval: null,
          /**
           * proxy of window.location used for page reload functions
           * @type location
           */
          location,
          /** @type {typeof internalEval} */
          _: null,
          version: "2.0.10"
        };
        htmx.onLoad = onLoadHelper;
        htmx.process = processNode;
        htmx.on = addEventListenerImpl;
        htmx.off = removeEventListenerImpl;
        htmx.trigger = triggerEvent;
        htmx.ajax = ajaxHelper;
        htmx.find = find;
        htmx.findAll = findAll;
        htmx.closest = closest;
        htmx.remove = removeElement;
        htmx.addClass = addClassToElement;
        htmx.removeClass = removeClassFromElement;
        htmx.toggleClass = toggleClassOnElement;
        htmx.takeClass = takeClassForElement;
        htmx.swap = swap;
        htmx.defineExtension = defineExtension;
        htmx.removeExtension = removeExtension;
        htmx.logAll = logAll;
        htmx.logNone = logNone;
        htmx.parseInterval = parseInterval;
        htmx._ = internalEval;
        const internalAPI = {
          addTriggerHandler,
          bodyContains,
          canAccessLocalStorage,
          findThisElement,
          filterValues,
          swap,
          hasAttribute,
          getAttributeValue,
          getClosestAttributeValue,
          getClosestMatch,
          getExpressionVars,
          getHeaders,
          getInputValues,
          getInternalData,
          getSwapSpecification,
          getTriggerSpecs,
          getTarget,
          makeFragment,
          mergeObjects,
          makeSettleInfo,
          oobSwap,
          querySelectorExt,
          settleImmediately,
          shouldCancel,
          triggerEvent,
          triggerErrorEvent,
          withExtensions
        };
        const VERBS = ["get", "post", "put", "delete", "patch"];
        const VERB_SELECTOR = VERBS.map(function(verb) {
          return "[hx-" + verb + "], [data-hx-" + verb + "]";
        }).join(", ");
        function parseInterval(str2) {
          if (str2 == void 0) {
            return void 0;
          }
          let interval = NaN;
          if (str2.slice(-2) == "ms") {
            interval = parseFloat(str2.slice(0, -2));
          } else if (str2.slice(-1) == "s") {
            interval = parseFloat(str2.slice(0, -1)) * 1e3;
          } else if (str2.slice(-1) == "m") {
            interval = parseFloat(str2.slice(0, -1)) * 1e3 * 60;
          } else {
            interval = parseFloat(str2);
          }
          return isNaN(interval) ? void 0 : interval;
        }
        function getRawAttribute(elt, name) {
          return elt instanceof Element && elt.getAttribute(name);
        }
        function hasAttribute(elt, qualifiedName) {
          return !!elt.hasAttribute && (elt.hasAttribute(qualifiedName) || elt.hasAttribute("data-" + qualifiedName));
        }
        function getAttributeValue(elt, qualifiedName) {
          return getRawAttribute(elt, qualifiedName) || getRawAttribute(elt, "data-" + qualifiedName);
        }
        function parentElt(elt) {
          const parent = elt.parentElement;
          if (!parent && elt.parentNode instanceof ShadowRoot) return elt.parentNode;
          return parent;
        }
        function getDocument() {
          return document;
        }
        function getRootNode(elt, global) {
          return elt.getRootNode ? elt.getRootNode({ composed: global }) : getDocument();
        }
        function getClosestMatch(elt, condition) {
          while (elt && !condition(elt)) {
            elt = parentElt(elt);
          }
          return elt || null;
        }
        function getAttributeValueWithDisinheritance(initialElement, ancestor, attributeName) {
          const attributeValue = getAttributeValue(ancestor, attributeName);
          const disinherit = getAttributeValue(ancestor, "hx-disinherit");
          var inherit = getAttributeValue(ancestor, "hx-inherit");
          if (initialElement !== ancestor) {
            if (htmx.config.disableInheritance) {
              if (inherit && (inherit === "*" || inherit.split(" ").indexOf(attributeName) >= 0)) {
                return attributeValue;
              } else {
                return null;
              }
            }
            if (disinherit && (disinherit === "*" || disinherit.split(" ").indexOf(attributeName) >= 0)) {
              return "unset";
            }
          }
          return attributeValue;
        }
        function getClosestAttributeValue(elt, attributeName) {
          let closestAttr = null;
          getClosestMatch(elt, function(e10) {
            return !!(closestAttr = getAttributeValueWithDisinheritance(elt, asElement(e10), attributeName));
          });
          if (closestAttr !== "unset") {
            return closestAttr;
          }
        }
        function matches(elt, selector) {
          return elt instanceof Element && elt.matches(selector);
        }
        function getStartTag(str2) {
          const tagMatcher = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
          const match = tagMatcher.exec(str2);
          if (match) {
            return match[1].toLowerCase();
          } else {
            return "";
          }
        }
        function parseHTML(resp) {
          if ("parseHTMLUnsafe" in Document) {
            return Document.parseHTMLUnsafe(resp);
          }
          const parser = new DOMParser();
          return parser.parseFromString(resp, "text/html");
        }
        function takeChildrenFor(fragment, elt) {
          while (elt.childNodes.length > 0) {
            fragment.append(elt.childNodes[0]);
          }
        }
        function duplicateScript(script) {
          const newScript = getDocument().createElement("script");
          forEach(script.attributes, function(attr) {
            newScript.setAttribute(attr.name, attr.value);
          });
          newScript.textContent = script.textContent;
          newScript.async = false;
          if (htmx.config.inlineScriptNonce) {
            newScript.nonce = htmx.config.inlineScriptNonce;
          }
          return newScript;
        }
        function isJavaScriptScriptNode(script) {
          return script.matches("script") && (script.type === "text/javascript" || script.type === "module" || script.type === "");
        }
        function normalizeScriptTags(fragment) {
          Array.from(fragment.querySelectorAll("script")).forEach(
            /** @param {HTMLScriptElement} script */
            (script) => {
              if (isJavaScriptScriptNode(script)) {
                const newScript = duplicateScript(script);
                const parent = script.parentNode;
                try {
                  parent.insertBefore(newScript, script);
                } catch (e10) {
                  logError(e10);
                } finally {
                  script.remove();
                }
              }
            }
          );
        }
        function makeFragment(response) {
          const responseWithNoHead = response.replace(/<head(\s[^>]*)?>[\s\S]*?<\/head>/i, "");
          const startTag = getStartTag(responseWithNoHead);
          let fragment;
          if (startTag === "html") {
            fragment = /** @type DocumentFragmentWithTitle */
            new DocumentFragment();
            const doc = parseHTML(response);
            takeChildrenFor(fragment, doc.body);
            fragment.title = doc.title;
          } else if (startTag === "body") {
            fragment = /** @type DocumentFragmentWithTitle */
            new DocumentFragment();
            const doc = parseHTML(responseWithNoHead);
            takeChildrenFor(fragment, doc.body);
            fragment.title = doc.title;
          } else {
            const doc = parseHTML('<body><template class="internal-htmx-wrapper">' + responseWithNoHead + "</template></body>");
            fragment = /** @type DocumentFragmentWithTitle */
            doc.querySelector("template").content;
            fragment.title = doc.title;
            var titleElement = fragment.querySelector("title");
            if (titleElement && titleElement.parentNode === fragment) {
              titleElement.remove();
              fragment.title = titleElement.innerText;
            }
          }
          if (fragment) {
            if (htmx.config.allowScriptTags) {
              normalizeScriptTags(fragment);
            } else {
              fragment.querySelectorAll("script").forEach((script) => script.remove());
            }
          }
          return fragment;
        }
        function maybeCall(func) {
          if (func) {
            func();
          }
        }
        function isType(o9, type) {
          return Object.prototype.toString.call(o9) === "[object " + type + "]";
        }
        function isFunction(o9) {
          return typeof o9 === "function";
        }
        function isRawObject(o9) {
          return isType(o9, "Object");
        }
        function getInternalData(elt) {
          const dataProp = "htmx-internal-data";
          let data = elt[dataProp];
          if (!data) {
            data = elt[dataProp] = {};
          }
          return data;
        }
        function toArray(arr) {
          const returnArr = [];
          if (arr) {
            for (let i8 = 0; i8 < arr.length; i8++) {
              returnArr.push(arr[i8]);
            }
          }
          return returnArr;
        }
        function forEach(arr, func) {
          if (arr) {
            for (let i8 = 0; i8 < arr.length; i8++) {
              func(arr[i8]);
            }
          }
        }
        function isScrolledIntoView(el) {
          const rect = el.getBoundingClientRect();
          const elemTop = rect.top;
          const elemBottom = rect.bottom;
          return elemTop < window.innerHeight && elemBottom >= 0;
        }
        function bodyContains(elt) {
          return elt.getRootNode({ composed: true }) === document;
        }
        function splitOnWhitespace(trigger2) {
          return trigger2.trim().split(/\s+/);
        }
        function mergeObjects(obj1, obj2) {
          for (const key in obj2) {
            if (obj2.hasOwnProperty(key)) {
              obj1[key] = obj2[key];
            }
          }
          return obj1;
        }
        function parseJSON(jString) {
          try {
            return JSON.parse(jString);
          } catch (error) {
            logError(error);
            return null;
          }
        }
        function canAccessLocalStorage() {
          const test = "htmx:sessionStorageTest";
          try {
            sessionStorage.setItem(test, test);
            sessionStorage.removeItem(test);
            return true;
          } catch (e10) {
            return false;
          }
        }
        function normalizePath(path) {
          try {
            const url = new URL(path, window.location.href);
            path = url.pathname + url.search;
          } catch (e10) {
          }
          if (path != "/") {
            path = path.replace(/\/+$/, "");
          }
          return path;
        }
        function internalEval(str) {
          return maybeEval(getDocument().body, function() {
            return eval(str);
          });
        }
        function onLoadHelper(callback) {
          const value = htmx.on(
            "htmx:load",
            /** @param {CustomEvent} evt */
            function(evt) {
              callback(evt.detail.elt);
            }
          );
          return value;
        }
        function logAll() {
          htmx.logger = function(elt, event2, data) {
            if (console) {
              console.log(event2, elt, data);
            }
          };
        }
        function logNone() {
          htmx.logger = null;
        }
        function find(eltOrSelector, selector) {
          if (typeof eltOrSelector !== "string") {
            return eltOrSelector.querySelector(selector);
          } else {
            return find(getDocument(), eltOrSelector);
          }
        }
        function findAll(eltOrSelector, selector) {
          if (typeof eltOrSelector !== "string") {
            return eltOrSelector.querySelectorAll(selector);
          } else {
            return findAll(getDocument(), eltOrSelector);
          }
        }
        function getWindow() {
          return window;
        }
        function removeElement(elt, delay) {
          elt = resolveTarget(elt);
          if (delay) {
            getWindow().setTimeout(function() {
              removeElement(elt);
              elt = null;
            }, delay);
          } else {
            parentElt(elt).removeChild(elt);
          }
        }
        function asElement(elt) {
          return elt instanceof Element ? elt : null;
        }
        function asHtmlElement(elt) {
          return elt instanceof HTMLElement ? elt : null;
        }
        function asString(value) {
          return typeof value === "string" ? value : null;
        }
        function asParentNode(elt) {
          return elt instanceof Element || elt instanceof Document || elt instanceof DocumentFragment ? elt : null;
        }
        function addClassToElement(elt, clazz, delay) {
          elt = asElement(resolveTarget(elt));
          if (!elt) {
            return;
          }
          if (delay) {
            getWindow().setTimeout(function() {
              addClassToElement(elt, clazz);
              elt = null;
            }, delay);
          } else {
            elt.classList && elt.classList.add(clazz);
          }
        }
        function removeClassFromElement(node, clazz, delay) {
          let elt = asElement(resolveTarget(node));
          if (!elt) {
            return;
          }
          if (delay) {
            getWindow().setTimeout(function() {
              removeClassFromElement(elt, clazz);
              elt = null;
            }, delay);
          } else {
            if (elt.classList) {
              elt.classList.remove(clazz);
              if (elt.classList.length === 0) {
                elt.removeAttribute("class");
              }
            }
          }
        }
        function toggleClassOnElement(elt, clazz) {
          elt = resolveTarget(elt);
          elt.classList.toggle(clazz);
        }
        function takeClassForElement(elt, clazz) {
          elt = resolveTarget(elt);
          forEach(elt.parentElement.children, function(child) {
            removeClassFromElement(child, clazz);
          });
          addClassToElement(asElement(elt), clazz);
        }
        function closest(elt, selector) {
          elt = asElement(resolveTarget(elt));
          if (elt) {
            return elt.closest(selector);
          }
          return null;
        }
        function startsWith(str2, prefix) {
          return str2.substring(0, prefix.length) === prefix;
        }
        function endsWith(str2, suffix) {
          return str2.substring(str2.length - suffix.length) === suffix;
        }
        function normalizeSelector(selector) {
          const trimmedSelector = selector.trim();
          if (startsWith(trimmedSelector, "<") && endsWith(trimmedSelector, "/>")) {
            return trimmedSelector.substring(1, trimmedSelector.length - 2);
          } else {
            return trimmedSelector;
          }
        }
        function querySelectorAllExt(elt, selector, global) {
          if (selector.indexOf("global ") === 0) {
            return querySelectorAllExt(elt, selector.slice(7), true);
          }
          elt = resolveTarget(elt);
          const parts = [];
          {
            let chevronsCount = 0;
            let offset = 0;
            for (let i8 = 0; i8 < selector.length; i8++) {
              const char = selector[i8];
              if (char === "," && chevronsCount === 0) {
                parts.push(selector.substring(offset, i8));
                offset = i8 + 1;
                continue;
              }
              if (char === "<") {
                chevronsCount++;
              } else if (char === "/" && i8 < selector.length - 1 && selector[i8 + 1] === ">") {
                chevronsCount--;
              }
            }
            if (offset < selector.length) {
              parts.push(selector.substring(offset));
            }
          }
          const result = [];
          const unprocessedParts = [];
          while (parts.length > 0) {
            const selector2 = normalizeSelector(parts.shift());
            let item;
            if (selector2.indexOf("closest ") === 0) {
              item = closest(asElement(elt), normalizeSelector(selector2.slice(8)));
            } else if (selector2.indexOf("find ") === 0) {
              item = find(asParentNode(elt), normalizeSelector(selector2.slice(5)));
            } else if (selector2 === "next" || selector2 === "nextElementSibling") {
              item = asElement(elt).nextElementSibling;
            } else if (selector2.indexOf("next ") === 0) {
              item = scanForwardQuery(elt, normalizeSelector(selector2.slice(5)), !!global);
            } else if (selector2 === "previous" || selector2 === "previousElementSibling") {
              item = asElement(elt).previousElementSibling;
            } else if (selector2.indexOf("previous ") === 0) {
              item = scanBackwardsQuery(elt, normalizeSelector(selector2.slice(9)), !!global);
            } else if (selector2 === "document") {
              item = document;
            } else if (selector2 === "window") {
              item = window;
            } else if (selector2 === "body") {
              item = document.body;
            } else if (selector2 === "root") {
              item = getRootNode(elt, !!global);
            } else if (selector2 === "host") {
              item = /** @type ShadowRoot */
              elt.getRootNode().host;
            } else {
              unprocessedParts.push(selector2);
            }
            if (item) {
              result.push(item);
            }
          }
          if (unprocessedParts.length > 0) {
            const standardSelector = unprocessedParts.join(",");
            const rootNode = asParentNode(getRootNode(elt, !!global));
            result.push(...toArray(rootNode.querySelectorAll(standardSelector)));
          }
          return result;
        }
        var scanForwardQuery = function(start, match, global) {
          const results = asParentNode(getRootNode(start, global)).querySelectorAll(match);
          for (let i8 = 0; i8 < results.length; i8++) {
            const elt = results[i8];
            if (elt.compareDocumentPosition(start) === Node.DOCUMENT_POSITION_PRECEDING) {
              return elt;
            }
          }
        };
        var scanBackwardsQuery = function(start, match, global) {
          const results = asParentNode(getRootNode(start, global)).querySelectorAll(match);
          for (let i8 = results.length - 1; i8 >= 0; i8--) {
            const elt = results[i8];
            if (elt.compareDocumentPosition(start) === Node.DOCUMENT_POSITION_FOLLOWING) {
              return elt;
            }
          }
        };
        function querySelectorExt(eltOrSelector, selector) {
          if (typeof eltOrSelector !== "string") {
            return querySelectorAllExt(eltOrSelector, selector)[0];
          } else {
            return querySelectorAllExt(getDocument().body, eltOrSelector)[0];
          }
        }
        function resolveTarget(eltOrSelector, context) {
          if (typeof eltOrSelector === "string") {
            return find(asParentNode(context) || document, eltOrSelector);
          } else {
            return eltOrSelector;
          }
        }
        function processEventArgs(arg1, arg2, arg3, arg4) {
          if (isFunction(arg2)) {
            return {
              target: getDocument().body,
              event: asString(arg1),
              listener: arg2,
              options: arg3
            };
          } else {
            return {
              target: resolveTarget(arg1),
              event: asString(arg2),
              listener: arg3,
              options: arg4
            };
          }
        }
        function addEventListenerImpl(arg1, arg2, arg3, arg4) {
          ready(function() {
            const eventArgs = processEventArgs(arg1, arg2, arg3, arg4);
            eventArgs.target.addEventListener(eventArgs.event, eventArgs.listener, eventArgs.options);
          });
          const b3 = isFunction(arg2);
          return b3 ? arg2 : arg3;
        }
        function removeEventListenerImpl(arg1, arg2, arg3) {
          ready(function() {
            const eventArgs = processEventArgs(arg1, arg2, arg3);
            eventArgs.target.removeEventListener(eventArgs.event, eventArgs.listener);
          });
          return isFunction(arg2) ? arg2 : arg3;
        }
        const DUMMY_ELT = getDocument().createElement("output");
        function findAttributeTargets(elt, attrName) {
          const attrTarget = getClosestAttributeValue(elt, attrName);
          if (attrTarget) {
            if (attrTarget === "this") {
              return [findThisElement(elt, attrName)];
            } else {
              const result = querySelectorAllExt(elt, attrTarget);
              const shouldInherit = /(^|,)(\s*)inherit(\s*)($|,)/.test(attrTarget);
              if (shouldInherit) {
                const eltToInheritFrom = asElement(getClosestMatch(elt, function(parent) {
                  return parent !== elt && hasAttribute(asElement(parent), attrName);
                }));
                if (eltToInheritFrom) {
                  result.push(...findAttributeTargets(eltToInheritFrom, attrName));
                }
              }
              if (result.length === 0) {
                logError('The selector "' + attrTarget + '" on ' + attrName + " returned no matches!");
                return [DUMMY_ELT];
              } else {
                return result;
              }
            }
          }
        }
        function findThisElement(elt, attribute) {
          return asElement(getClosestMatch(elt, function(elt2) {
            return getAttributeValue(asElement(elt2), attribute) != null;
          }));
        }
        function getTarget(elt) {
          const targetStr = getClosestAttributeValue(elt, "hx-target");
          if (targetStr) {
            if (targetStr === "this") {
              return findThisElement(elt, "hx-target");
            } else {
              return querySelectorExt(elt, targetStr);
            }
          } else {
            const data = getInternalData(elt);
            if (data.boosted) {
              return getDocument().body;
            } else {
              return elt;
            }
          }
        }
        function shouldSettleAttribute(name) {
          return htmx.config.attributesToSettle.includes(name);
        }
        function cloneAttributes(mergeTo, mergeFrom) {
          forEach(Array.from(mergeTo.attributes), function(attr) {
            if (!mergeFrom.hasAttribute(attr.name) && shouldSettleAttribute(attr.name)) {
              mergeTo.removeAttribute(attr.name);
            }
          });
          forEach(mergeFrom.attributes, function(attr) {
            if (shouldSettleAttribute(attr.name)) {
              mergeTo.setAttribute(attr.name, attr.value);
            }
          });
        }
        function isInlineSwap(swapStyle, target) {
          const extensions2 = getExtensions(target);
          for (let i8 = 0; i8 < extensions2.length; i8++) {
            const extension = extensions2[i8];
            try {
              if (extension.isInlineSwap(swapStyle)) {
                return true;
              }
            } catch (e10) {
              logError(e10);
            }
          }
          return swapStyle === "outerHTML";
        }
        function oobSwap(oobValue, oobElement, settleInfo, rootNode) {
          rootNode = rootNode || getDocument();
          let selector = "#" + CSS.escape(getRawAttribute(oobElement, "id"));
          let swapStyle = "outerHTML";
          if (oobValue === "true") {
          } else if (oobValue.indexOf(":") > 0) {
            swapStyle = oobValue.substring(0, oobValue.indexOf(":"));
            selector = oobValue.substring(oobValue.indexOf(":") + 1);
          } else {
            swapStyle = oobValue;
          }
          oobElement.removeAttribute("hx-swap-oob");
          oobElement.removeAttribute("data-hx-swap-oob");
          const targets = querySelectorAllExt(rootNode, selector, false);
          if (targets.length) {
            forEach(
              targets,
              function(target) {
                let fragment;
                const oobElementClone = oobElement.cloneNode(true);
                fragment = getDocument().createDocumentFragment();
                fragment.appendChild(oobElementClone);
                if (!isInlineSwap(swapStyle, target)) {
                  fragment = asParentNode(oobElementClone);
                }
                const beforeSwapDetails = { shouldSwap: true, target, fragment };
                if (!triggerEvent(target, "htmx:oobBeforeSwap", beforeSwapDetails)) return;
                target = beforeSwapDetails.target;
                if (beforeSwapDetails.shouldSwap) {
                  handlePreservedElements(fragment);
                  swapWithStyle(swapStyle, target, target, fragment, settleInfo);
                  restorePreservedElements();
                }
                forEach(settleInfo.elts, function(elt) {
                  triggerEvent(elt, "htmx:oobAfterSwap", beforeSwapDetails);
                });
              }
            );
            oobElement.parentNode.removeChild(oobElement);
          } else {
            oobElement.parentNode.removeChild(oobElement);
            triggerErrorEvent(getDocument().body, "htmx:oobErrorNoTarget", { content: oobElement, target: selector });
          }
          return oobValue;
        }
        function restorePreservedElements() {
          const pantry = find("#--htmx-preserve-pantry--");
          if (pantry) {
            for (const preservedElt of [...pantry.children]) {
              const existingElement = find("#" + preservedElt.id);
              existingElement.parentNode.moveBefore(preservedElt, existingElement);
              existingElement.remove();
            }
            pantry.remove();
          }
        }
        function handlePreservedElements(fragment) {
          forEach(findAll(fragment, "[hx-preserve], [data-hx-preserve]"), function(preservedElt) {
            const id = getAttributeValue(preservedElt, "id");
            const existingElement = getDocument().getElementById(id);
            if (existingElement != null) {
              if (preservedElt.moveBefore) {
                let pantry = find("#--htmx-preserve-pantry--");
                if (pantry == null) {
                  getDocument().body.insertAdjacentHTML("afterend", "<div id='--htmx-preserve-pantry--'></div>");
                  pantry = find("#--htmx-preserve-pantry--");
                }
                pantry.moveBefore(existingElement, null);
              } else {
                preservedElt.parentNode.replaceChild(existingElement, preservedElt);
              }
            }
          });
        }
        function handleAttributes(parentNode, fragment, settleInfo) {
          forEach(fragment.querySelectorAll("[id]"), function(newNode) {
            const id = getRawAttribute(newNode, "id");
            if (id && id.length > 0) {
              const parentElt2 = asParentNode(parentNode);
              const oldNode = parentElt2 && parentElt2.querySelector(CSS.escape(newNode.tagName) + "#" + CSS.escape(id));
              if (oldNode && oldNode !== parentElt2) {
                const newAttributes = newNode.cloneNode();
                cloneAttributes(newNode, oldNode);
                settleInfo.tasks.push(function() {
                  cloneAttributes(newNode, newAttributes);
                });
              }
            }
          });
        }
        function makeAjaxLoadTask(child) {
          return function() {
            removeClassFromElement(child, htmx.config.addedClass);
            processNode(asElement(child));
            processFocus(asParentNode(child));
            triggerEvent(child, "htmx:load");
          };
        }
        function processFocus(child) {
          const autofocus = "[autofocus]";
          const autoFocusedElt = asHtmlElement(matches(child, autofocus) ? child : child.querySelector(autofocus));
          if (autoFocusedElt != null) {
            autoFocusedElt.focus();
          }
        }
        function insertNodesBefore(parentNode, insertBefore, fragment, settleInfo) {
          handleAttributes(parentNode, fragment, settleInfo);
          while (fragment.childNodes.length > 0) {
            const child = fragment.firstChild;
            addClassToElement(asElement(child), htmx.config.addedClass);
            parentNode.insertBefore(child, insertBefore);
            if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
              settleInfo.tasks.push(makeAjaxLoadTask(child));
            }
          }
        }
        function stringHash(string, hash) {
          let char = 0;
          while (char < string.length) {
            hash = (hash << 5) - hash + string.charCodeAt(char++) | 0;
          }
          return hash;
        }
        function attributeHash(elt) {
          let hash = 0;
          for (let i8 = 0; i8 < elt.attributes.length; i8++) {
            const attribute = elt.attributes[i8];
            if (attribute.value) {
              hash = stringHash(attribute.name, hash);
              hash = stringHash(attribute.value, hash);
            }
          }
          return hash;
        }
        function deInitOnHandlers(elt) {
          const internalData = getInternalData(elt);
          if (internalData.onHandlers) {
            for (let i8 = 0; i8 < internalData.onHandlers.length; i8++) {
              const handlerInfo = internalData.onHandlers[i8];
              removeEventListenerImpl(elt, handlerInfo.event, handlerInfo.listener);
            }
            delete internalData.onHandlers;
          }
        }
        function deInitNode(element) {
          const internalData = getInternalData(element);
          if (internalData.timeout) {
            clearTimeout(internalData.timeout);
          }
          if (internalData.listenerInfos) {
            forEach(internalData.listenerInfos, function(info) {
              if (info.on) {
                removeEventListenerImpl(info.on, info.trigger, info.listener);
              }
            });
          }
          deInitOnHandlers(element);
          forEach(Object.keys(internalData), function(key) {
            if (key !== "firstInitCompleted") delete internalData[key];
          });
        }
        function cleanUpElement(element) {
          triggerEvent(element, "htmx:beforeCleanupElement");
          deInitNode(element);
          forEach(element.children, function(child) {
            cleanUpElement(child);
          });
        }
        function swapOuterHTML(target, fragment, settleInfo) {
          if (target.tagName === "BODY") {
            return swapInnerHTML(target, fragment, settleInfo);
          }
          let newElt;
          const eltBeforeNewContent = target.previousSibling;
          const parentNode = parentElt(target);
          if (!parentNode) {
            return;
          }
          insertNodesBefore(parentNode, target, fragment, settleInfo);
          if (eltBeforeNewContent == null) {
            newElt = parentNode.firstChild;
          } else {
            newElt = eltBeforeNewContent.nextSibling;
          }
          settleInfo.elts = settleInfo.elts.filter(function(e10) {
            return e10 !== target;
          });
          while (newElt && newElt !== target) {
            if (newElt instanceof Element) {
              settleInfo.elts.push(newElt);
            }
            newElt = newElt.nextSibling;
          }
          cleanUpElement(target);
          target.remove();
        }
        function swapAfterBegin(target, fragment, settleInfo) {
          return insertNodesBefore(target, target.firstChild, fragment, settleInfo);
        }
        function swapBeforeBegin(target, fragment, settleInfo) {
          return insertNodesBefore(parentElt(target), target, fragment, settleInfo);
        }
        function swapBeforeEnd(target, fragment, settleInfo) {
          return insertNodesBefore(target, null, fragment, settleInfo);
        }
        function swapAfterEnd(target, fragment, settleInfo) {
          return insertNodesBefore(parentElt(target), target.nextSibling, fragment, settleInfo);
        }
        function swapDelete(target) {
          cleanUpElement(target);
          const parent = parentElt(target);
          if (parent) {
            return parent.removeChild(target);
          }
        }
        function swapInnerHTML(target, fragment, settleInfo) {
          const firstChild = target.firstChild;
          insertNodesBefore(target, firstChild, fragment, settleInfo);
          if (firstChild) {
            while (firstChild.nextSibling) {
              cleanUpElement(firstChild.nextSibling);
              target.removeChild(firstChild.nextSibling);
            }
            cleanUpElement(firstChild);
            target.removeChild(firstChild);
          }
        }
        function swapWithStyle(swapStyle, elt, target, fragment, settleInfo) {
          switch (swapStyle) {
            case "none":
              return;
            case "outerHTML":
              swapOuterHTML(target, fragment, settleInfo);
              return;
            case "afterbegin":
              swapAfterBegin(target, fragment, settleInfo);
              return;
            case "beforebegin":
              swapBeforeBegin(target, fragment, settleInfo);
              return;
            case "beforeend":
              swapBeforeEnd(target, fragment, settleInfo);
              return;
            case "afterend":
              swapAfterEnd(target, fragment, settleInfo);
              return;
            case "delete":
              swapDelete(target);
              return;
            default:
              var extensions2 = getExtensions(elt);
              for (let i8 = 0; i8 < extensions2.length; i8++) {
                const ext = extensions2[i8];
                try {
                  const newElements = ext.handleSwap(swapStyle, target, fragment, settleInfo);
                  if (newElements) {
                    if (Array.isArray(newElements)) {
                      for (let j2 = 0; j2 < newElements.length; j2++) {
                        const child = newElements[j2];
                        if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
                          settleInfo.tasks.push(makeAjaxLoadTask(child));
                        }
                      }
                    }
                    return;
                  }
                } catch (e10) {
                  logError(e10);
                }
              }
              if (swapStyle === "innerHTML") {
                swapInnerHTML(target, fragment, settleInfo);
              } else {
                swapWithStyle(htmx.config.defaultSwapStyle, elt, target, fragment, settleInfo);
              }
          }
        }
        function findAndSwapOobElements(fragment, settleInfo, rootNode) {
          var oobElts = findAll(fragment, "[hx-swap-oob], [data-hx-swap-oob]");
          forEach(oobElts, function(oobElement) {
            if (htmx.config.allowNestedOobSwaps || oobElement.parentElement === null) {
              const oobValue = getAttributeValue(oobElement, "hx-swap-oob");
              if (oobValue != null) {
                oobSwap(oobValue, oobElement, settleInfo, rootNode);
              }
            } else {
              oobElement.removeAttribute("hx-swap-oob");
              oobElement.removeAttribute("data-hx-swap-oob");
            }
          });
          return oobElts.length > 0;
        }
        function swap(target, content, swapSpec, swapOptions) {
          if (!swapOptions) {
            swapOptions = {};
          }
          let settleResolve = null;
          let settleReject = null;
          let doSwap = function() {
            maybeCall(swapOptions.beforeSwapCallback);
            target = resolveTarget(target);
            const rootNode = swapOptions.contextElement ? getRootNode(swapOptions.contextElement, false) : getDocument();
            const activeElt = document.activeElement;
            let selectionInfo = {};
            selectionInfo = {
              elt: activeElt,
              // @ts-ignore
              start: activeElt ? activeElt.selectionStart : null,
              // @ts-ignore
              end: activeElt ? activeElt.selectionEnd : null
            };
            const settleInfo = makeSettleInfo(target);
            if (swapSpec.swapStyle === "textContent") {
              target.textContent = content;
            } else {
              let fragment = makeFragment(content);
              settleInfo.title = swapOptions.title || fragment.title;
              if (swapOptions.historyRequest) {
                fragment = fragment.querySelector("[hx-history-elt],[data-hx-history-elt]") || fragment;
              }
              if (swapOptions.selectOOB) {
                const oobSelectValues = swapOptions.selectOOB.split(",");
                for (let i8 = 0; i8 < oobSelectValues.length; i8++) {
                  const oobSelectValue = oobSelectValues[i8].split(":", 2);
                  let id = oobSelectValue[0].trim();
                  if (id.indexOf("#") === 0) {
                    id = id.substring(1);
                  }
                  const oobValue = oobSelectValue[1] || "true";
                  const oobElement = fragment.querySelector("#" + id);
                  if (oobElement) {
                    oobSwap(oobValue, oobElement, settleInfo, rootNode);
                  }
                }
              }
              findAndSwapOobElements(fragment, settleInfo, rootNode);
              forEach(
                findAll(fragment, "template"),
                /** @param {HTMLTemplateElement} template */
                function(template) {
                  if (template.content && findAndSwapOobElements(template.content, settleInfo, rootNode)) {
                    template.remove();
                  }
                }
              );
              if (swapOptions.select) {
                const newFragment = getDocument().createDocumentFragment();
                forEach(fragment.querySelectorAll(swapOptions.select), function(node) {
                  newFragment.appendChild(node);
                });
                fragment = newFragment;
              }
              handlePreservedElements(fragment);
              swapWithStyle(swapSpec.swapStyle, swapOptions.contextElement, target, fragment, settleInfo);
              restorePreservedElements();
            }
            if (selectionInfo.elt && !bodyContains(selectionInfo.elt) && getRawAttribute(selectionInfo.elt, "id")) {
              const newActiveElt = document.getElementById(getRawAttribute(selectionInfo.elt, "id"));
              const focusOptions = { preventScroll: swapSpec.focusScroll !== void 0 ? !swapSpec.focusScroll : !htmx.config.defaultFocusScroll };
              if (newActiveElt) {
                if (selectionInfo.start && newActiveElt.setSelectionRange) {
                  try {
                    newActiveElt.setSelectionRange(selectionInfo.start, selectionInfo.end);
                  } catch (e10) {
                  }
                }
                newActiveElt.focus(focusOptions);
              }
            }
            removeClassFromElement(target, htmx.config.swappingClass);
            forEach(settleInfo.elts, function(elt2) {
              if (elt2.classList) {
                addClassToElement(elt2, htmx.config.settlingClass);
              }
              triggerEvent(elt2, "htmx:afterSwap", swapOptions.eventInfo);
            });
            maybeCall(swapOptions.afterSwapCallback);
            if (!swapSpec.ignoreTitle) {
              handleTitle(settleInfo.title);
            }
            const doSettle = function() {
              forEach(settleInfo.tasks, function(task) {
                task.call();
              });
              forEach(settleInfo.elts, function(elt2) {
                if (elt2.classList) {
                  removeClassFromElement(elt2, htmx.config.settlingClass);
                }
                triggerEvent(elt2, "htmx:afterSettle", swapOptions.eventInfo);
              });
              if (swapOptions.anchor) {
                const anchorTarget = asElement(resolveTarget("#" + swapOptions.anchor));
                if (anchorTarget) {
                  anchorTarget.scrollIntoView({ block: "start", behavior: "auto" });
                }
              }
              updateScrollState(settleInfo.elts, swapSpec);
              maybeCall(swapOptions.afterSettleCallback);
              maybeCall(settleResolve);
            };
            if (swapSpec.settleDelay > 0) {
              getWindow().setTimeout(doSettle, swapSpec.settleDelay);
            } else {
              doSettle();
            }
          };
          let shouldTransition = htmx.config.globalViewTransitions;
          if (swapSpec.hasOwnProperty("transition")) {
            shouldTransition = swapSpec.transition;
          }
          const elt = swapOptions.contextElement || getDocument();
          if (shouldTransition && triggerEvent(elt, "htmx:beforeTransition", swapOptions.eventInfo) && typeof Promise !== "undefined" && // @ts-ignore experimental feature atm
          document.startViewTransition) {
            const settlePromise = new Promise(function(_resolve, _reject) {
              settleResolve = _resolve;
              settleReject = _reject;
            });
            const innerDoSwap = doSwap;
            doSwap = function() {
              document.startViewTransition(function() {
                innerDoSwap();
                return settlePromise;
              });
            };
          }
          try {
            if (swapSpec?.swapDelay && swapSpec.swapDelay > 0) {
              getWindow().setTimeout(doSwap, swapSpec.swapDelay);
            } else {
              doSwap();
            }
          } catch (e10) {
            triggerErrorEvent(elt, "htmx:swapError", swapOptions.eventInfo);
            maybeCall(settleReject);
            throw e10;
          }
        }
        function handleTriggerHeader(xhr, header, elt) {
          const triggerBody = xhr.getResponseHeader(header);
          if (triggerBody.indexOf("{") === 0) {
            const triggers = parseJSON(triggerBody);
            for (const eventName in triggers) {
              if (triggers.hasOwnProperty(eventName)) {
                let detail = triggers[eventName];
                if (isRawObject(detail)) {
                  elt = detail.target !== void 0 ? detail.target : elt;
                } else {
                  detail = { value: detail };
                }
                triggerEvent(elt, eventName, detail);
              }
            }
          } else {
            const eventNames = triggerBody.split(",");
            for (let i8 = 0; i8 < eventNames.length; i8++) {
              triggerEvent(elt, eventNames[i8].trim(), []);
            }
          }
        }
        const WHITESPACE = /\s/;
        const WHITESPACE_OR_COMMA = /[\s,]/;
        const SYMBOL_START = /[_$a-zA-Z]/;
        const SYMBOL_CONT = /[_$a-zA-Z0-9]/;
        const STRINGISH_START = ['"', "'", "/"];
        const NOT_WHITESPACE = /[^\s]/;
        const COMBINED_SELECTOR_START = /[{(]/;
        const COMBINED_SELECTOR_END = /[})]/;
        function tokenizeString(str2) {
          const tokens = [];
          let position = 0;
          while (position < str2.length) {
            if (SYMBOL_START.exec(str2.charAt(position))) {
              var startPosition = position;
              while (SYMBOL_CONT.exec(str2.charAt(position + 1))) {
                position++;
              }
              tokens.push(str2.substring(startPosition, position + 1));
            } else if (STRINGISH_START.indexOf(str2.charAt(position)) !== -1) {
              const startChar = str2.charAt(position);
              var startPosition = position;
              position++;
              while (position < str2.length && str2.charAt(position) !== startChar) {
                if (str2.charAt(position) === "\\") {
                  position++;
                }
                position++;
              }
              tokens.push(str2.substring(startPosition, position + 1));
            } else {
              const symbol = str2.charAt(position);
              tokens.push(symbol);
            }
            position++;
          }
          return tokens;
        }
        function isPossibleRelativeReference(token, last, paramName) {
          return SYMBOL_START.exec(token.charAt(0)) && token !== "true" && token !== "false" && token !== "this" && token !== paramName && last !== ".";
        }
        function maybeGenerateConditional(elt, tokens, paramName) {
          if (tokens[0] === "[") {
            tokens.shift();
            let bracketCount = 1;
            let conditionalSource = " return (function(" + paramName + "){ return (";
            let last = null;
            while (tokens.length > 0) {
              const token = tokens[0];
              if (token === "]") {
                bracketCount--;
                if (bracketCount === 0) {
                  if (last === null) {
                    conditionalSource = conditionalSource + "true";
                  }
                  tokens.shift();
                  conditionalSource += ")})";
                  try {
                    const conditionFunction = maybeEval(
                      elt,
                      function() {
                        return Function(conditionalSource)();
                      },
                      function() {
                        return true;
                      }
                    );
                    conditionFunction.source = conditionalSource;
                    return conditionFunction;
                  } catch (e10) {
                    triggerErrorEvent(getDocument().body, "htmx:syntax:error", { error: e10, source: conditionalSource });
                    return null;
                  }
                }
              } else if (token === "[") {
                bracketCount++;
              }
              if (isPossibleRelativeReference(token, last, paramName)) {
                conditionalSource += "((" + paramName + "." + token + ") ? (" + paramName + "." + token + ") : (window." + token + "))";
              } else {
                conditionalSource = conditionalSource + token;
              }
              last = tokens.shift();
            }
          }
        }
        function consumeUntil(tokens, match) {
          let result = "";
          while (tokens.length > 0 && !match.test(tokens[0])) {
            result += tokens.shift();
          }
          return result;
        }
        function consumeCSSSelector(tokens) {
          let result;
          if (tokens.length > 0 && COMBINED_SELECTOR_START.test(tokens[0])) {
            tokens.shift();
            result = consumeUntil(tokens, COMBINED_SELECTOR_END).trim();
            tokens.shift();
          } else {
            result = consumeUntil(tokens, WHITESPACE_OR_COMMA);
          }
          return result;
        }
        const INPUT_SELECTOR = "input, textarea, select";
        function parseAndCacheTrigger(elt, explicitTrigger, cache) {
          const triggerSpecs = [];
          const tokens = tokenizeString(explicitTrigger);
          do {
            consumeUntil(tokens, NOT_WHITESPACE);
            const initialLength = tokens.length;
            const trigger2 = consumeUntil(tokens, /[,\[\s]/);
            if (trigger2 !== "") {
              if (trigger2 === "every") {
                const every = { trigger: "every" };
                consumeUntil(tokens, NOT_WHITESPACE);
                every.pollInterval = parseInterval(consumeUntil(tokens, /[,\[\s]/));
                consumeUntil(tokens, NOT_WHITESPACE);
                var eventFilter = maybeGenerateConditional(elt, tokens, "event");
                if (eventFilter) {
                  every.eventFilter = eventFilter;
                }
                triggerSpecs.push(every);
              } else {
                const triggerSpec = { trigger: trigger2 };
                var eventFilter = maybeGenerateConditional(elt, tokens, "event");
                if (eventFilter) {
                  triggerSpec.eventFilter = eventFilter;
                }
                consumeUntil(tokens, NOT_WHITESPACE);
                while (tokens.length > 0 && tokens[0] !== ",") {
                  const token = tokens.shift();
                  if (token === "changed") {
                    triggerSpec.changed = true;
                  } else if (token === "once") {
                    triggerSpec.once = true;
                  } else if (token === "consume") {
                    triggerSpec.consume = true;
                  } else if (token === "delay" && tokens[0] === ":") {
                    tokens.shift();
                    triggerSpec.delay = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA));
                  } else if (token === "from" && tokens[0] === ":") {
                    tokens.shift();
                    if (COMBINED_SELECTOR_START.test(tokens[0])) {
                      var from_arg = consumeCSSSelector(tokens);
                    } else {
                      var from_arg = consumeUntil(tokens, WHITESPACE_OR_COMMA);
                      if (from_arg === "closest" || from_arg === "find" || from_arg === "next" || from_arg === "previous") {
                        tokens.shift();
                        const selector = consumeCSSSelector(tokens);
                        if (selector.length > 0) {
                          from_arg += " " + selector;
                        }
                      }
                    }
                    triggerSpec.from = from_arg;
                  } else if (token === "target" && tokens[0] === ":") {
                    tokens.shift();
                    triggerSpec.target = consumeCSSSelector(tokens);
                  } else if (token === "throttle" && tokens[0] === ":") {
                    tokens.shift();
                    triggerSpec.throttle = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA));
                  } else if (token === "queue" && tokens[0] === ":") {
                    tokens.shift();
                    triggerSpec.queue = consumeUntil(tokens, WHITESPACE_OR_COMMA);
                  } else if (token === "root" && tokens[0] === ":") {
                    tokens.shift();
                    triggerSpec[token] = consumeCSSSelector(tokens);
                  } else if (token === "threshold" && tokens[0] === ":") {
                    tokens.shift();
                    triggerSpec[token] = consumeUntil(tokens, WHITESPACE_OR_COMMA);
                  } else {
                    triggerErrorEvent(elt, "htmx:syntax:error", { token: tokens.shift() });
                  }
                  consumeUntil(tokens, NOT_WHITESPACE);
                }
                triggerSpecs.push(triggerSpec);
              }
            }
            if (tokens.length === initialLength) {
              triggerErrorEvent(elt, "htmx:syntax:error", { token: tokens.shift() });
            }
            consumeUntil(tokens, NOT_WHITESPACE);
          } while (tokens[0] === "," && tokens.shift());
          if (cache) {
            cache[explicitTrigger] = triggerSpecs;
          }
          return triggerSpecs;
        }
        function getTriggerSpecs(elt) {
          const explicitTrigger = getAttributeValue(elt, "hx-trigger");
          let triggerSpecs = [];
          if (explicitTrigger) {
            const cache = htmx.config.triggerSpecsCache;
            triggerSpecs = cache && cache[explicitTrigger] || parseAndCacheTrigger(elt, explicitTrigger, cache);
          }
          if (triggerSpecs.length > 0) {
            return triggerSpecs;
          } else if (matches(elt, "form")) {
            return [{ trigger: "submit" }];
          } else if (matches(elt, 'input[type="button"], input[type="submit"]')) {
            return [{ trigger: "click" }];
          } else if (matches(elt, INPUT_SELECTOR)) {
            return [{ trigger: "change" }];
          } else {
            return [{ trigger: "click" }];
          }
        }
        function cancelPolling(elt) {
          getInternalData(elt).cancelled = true;
        }
        function processPolling(elt, handler, spec) {
          const nodeData = getInternalData(elt);
          nodeData.timeout = getWindow().setTimeout(function() {
            if (bodyContains(elt) && nodeData.cancelled !== true) {
              if (!maybeFilterEvent(spec, elt, makeEvent("hx:poll:trigger", {
                triggerSpec: spec,
                target: elt
              }))) {
                handler(elt);
              }
              processPolling(elt, handler, spec);
            }
          }, spec.pollInterval);
        }
        function isLocalLink(elt) {
          return location.hostname === elt.hostname && getRawAttribute(elt, "href") && getRawAttribute(elt, "href").indexOf("#") !== 0;
        }
        function eltIsDisabled(elt) {
          return closest(elt, htmx.config.disableSelector);
        }
        function boostElement(elt, nodeData, triggerSpecs) {
          if (elt instanceof HTMLAnchorElement && isLocalLink(elt) && (elt.target === "" || elt.target === "_self") || elt.tagName === "FORM" && String(getRawAttribute(elt, "method")).toLowerCase() !== "dialog") {
            nodeData.boosted = true;
            let verb, path;
            if (elt.tagName === "A") {
              verb = /** @type HttpVerb */
              "get";
              path = getRawAttribute(elt, "href");
            } else {
              const rawAttribute = getRawAttribute(elt, "method");
              verb = /** @type HttpVerb */
              rawAttribute ? rawAttribute.toLowerCase() : "get";
              path = getRawAttribute(elt, "action");
              if (path == null || path === "") {
                path = location.href;
              }
              if (verb === "get" && path.includes("?")) {
                path = path.replace(/\?[^#]+/, "");
              }
            }
            triggerSpecs.forEach(function(triggerSpec) {
              addEventListener(elt, function(node, evt) {
                const elt2 = asElement(node);
                if (eltIsDisabled(elt2)) {
                  cleanUpElement(elt2);
                  return;
                }
                issueAjaxRequest(verb, path, elt2, evt);
              }, nodeData, triggerSpec, true);
            });
          }
        }
        function shouldCancel(evt, elt) {
          if (evt.type === "submit" && elt.tagName === "FORM") {
            return true;
          } else if (evt.type === "click") {
            const btn = (
              /** @type {HTMLButtonElement|HTMLInputElement|null} */
              elt.closest('input[type="submit"], button')
            );
            if (btn && btn.form && btn.type === "submit") {
              return true;
            }
            const link = elt.closest("a");
            const samePageAnchor = /^#.+/;
            if (link && link.href && !samePageAnchor.test(link.getAttribute("href"))) {
              return true;
            }
          }
          return false;
        }
        function ignoreBoostedAnchorCtrlClick(elt, evt) {
          return getInternalData(elt).boosted && elt instanceof HTMLAnchorElement && evt.type === "click" && // @ts-ignore this will resolve to undefined for events that don't define those properties, which is fine
          (evt.ctrlKey || evt.metaKey);
        }
        function maybeFilterEvent(triggerSpec, elt, evt) {
          const eventFilter = triggerSpec.eventFilter;
          if (eventFilter) {
            try {
              return eventFilter.call(elt, evt) !== true;
            } catch (e10) {
              const source2 = eventFilter.source;
              triggerErrorEvent(getDocument().body, "htmx:eventFilter:error", { error: e10, source: source2 });
              return true;
            }
          }
          return false;
        }
        function addEventListener(elt, handler, nodeData, triggerSpec, explicitCancel) {
          const elementData = getInternalData(elt);
          let eltsToListenOn;
          if (triggerSpec.from) {
            eltsToListenOn = querySelectorAllExt(elt, triggerSpec.from);
          } else {
            eltsToListenOn = [elt];
          }
          if (triggerSpec.changed) {
            if (!("lastValue" in elementData)) {
              elementData.lastValue = /* @__PURE__ */ new WeakMap();
            }
            eltsToListenOn.forEach(function(eltToListenOn) {
              if (!elementData.lastValue.has(triggerSpec)) {
                elementData.lastValue.set(triggerSpec, /* @__PURE__ */ new WeakMap());
              }
              elementData.lastValue.get(triggerSpec).set(eltToListenOn, eltToListenOn.value);
            });
          }
          forEach(eltsToListenOn, function(eltToListenOn) {
            const eventListener = function(evt) {
              if (!bodyContains(elt)) {
                eltToListenOn.removeEventListener(triggerSpec.trigger, eventListener);
                return;
              }
              if (ignoreBoostedAnchorCtrlClick(elt, evt)) {
                return;
              }
              if (explicitCancel || shouldCancel(evt, eltToListenOn)) {
                evt.preventDefault();
              }
              if (maybeFilterEvent(triggerSpec, elt, evt)) {
                return;
              }
              const eventData = getInternalData(evt);
              eventData.triggerSpec = triggerSpec;
              if (eventData.handledFor == null) {
                eventData.handledFor = [];
              }
              if (eventData.handledFor.indexOf(elt) < 0) {
                eventData.handledFor.push(elt);
                if (triggerSpec.consume) {
                  evt.stopPropagation();
                }
                if (triggerSpec.target && evt.target) {
                  if (!matches(asElement(evt.target), triggerSpec.target)) {
                    return;
                  }
                }
                if (triggerSpec.once) {
                  if (elementData.triggeredOnce) {
                    return;
                  } else {
                    elementData.triggeredOnce = true;
                  }
                }
                if (triggerSpec.changed) {
                  const node = evt.target;
                  const value = node.value;
                  const lastValue = elementData.lastValue.get(triggerSpec);
                  if (lastValue.has(node) && lastValue.get(node) === value) {
                    return;
                  }
                  lastValue.set(node, value);
                }
                if (elementData.delayed) {
                  clearTimeout(elementData.delayed);
                }
                if (elementData.throttle) {
                  return;
                }
                if (triggerSpec.throttle > 0) {
                  if (!elementData.throttle) {
                    triggerEvent(elt, "htmx:trigger");
                    handler(elt, evt);
                    elementData.throttle = getWindow().setTimeout(function() {
                      elementData.throttle = null;
                    }, triggerSpec.throttle);
                  }
                } else if (triggerSpec.delay > 0) {
                  elementData.delayed = getWindow().setTimeout(function() {
                    triggerEvent(elt, "htmx:trigger");
                    handler(elt, evt);
                  }, triggerSpec.delay);
                } else {
                  triggerEvent(elt, "htmx:trigger");
                  handler(elt, evt);
                }
              }
            };
            if (nodeData.listenerInfos == null) {
              nodeData.listenerInfos = [];
            }
            nodeData.listenerInfos.push({
              trigger: triggerSpec.trigger,
              listener: eventListener,
              on: eltToListenOn
            });
            eltToListenOn.addEventListener(triggerSpec.trigger, eventListener);
          });
        }
        let windowIsScrolling = false;
        let scrollHandler = null;
        function initScrollHandler() {
          if (!scrollHandler) {
            scrollHandler = function() {
              windowIsScrolling = true;
            };
            window.addEventListener("scroll", scrollHandler);
            window.addEventListener("resize", scrollHandler);
            setInterval(function() {
              if (windowIsScrolling) {
                windowIsScrolling = false;
                forEach(getDocument().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"), function(elt) {
                  maybeReveal(elt);
                });
              }
            }, 200);
          }
        }
        function maybeReveal(elt) {
          if (!hasAttribute(elt, "data-hx-revealed") && isScrolledIntoView(elt)) {
            elt.setAttribute("data-hx-revealed", "true");
            const nodeData = getInternalData(elt);
            if (nodeData.initHash) {
              triggerEvent(elt, "revealed");
            } else {
              elt.addEventListener("htmx:afterProcessNode", function() {
                triggerEvent(elt, "revealed");
              }, { once: true });
            }
          }
        }
        function loadImmediately(elt, handler, nodeData, delay) {
          const load = function() {
            if (!nodeData.loaded) {
              nodeData.loaded = true;
              triggerEvent(elt, "htmx:trigger");
              handler(elt);
            }
          };
          if (delay > 0) {
            getWindow().setTimeout(load, delay);
          } else {
            load();
          }
        }
        function processVerbs(elt, nodeData, triggerSpecs) {
          let explicitAction = false;
          forEach(VERBS, function(verb) {
            if (hasAttribute(elt, "hx-" + verb)) {
              const path = getAttributeValue(elt, "hx-" + verb);
              explicitAction = true;
              nodeData.path = path;
              nodeData.verb = verb;
              triggerSpecs.forEach(function(triggerSpec) {
                addTriggerHandler(elt, triggerSpec, nodeData, function(node, evt) {
                  const elt2 = asElement(node);
                  if (eltIsDisabled(elt2)) {
                    cleanUpElement(elt2);
                    return;
                  }
                  issueAjaxRequest(verb, path, elt2, evt);
                });
              });
            }
          });
          return explicitAction;
        }
        function addTriggerHandler(elt, triggerSpec, nodeData, handler) {
          if (triggerSpec.trigger === "revealed") {
            initScrollHandler();
            addEventListener(elt, handler, nodeData, triggerSpec);
            maybeReveal(asElement(elt));
          } else if (triggerSpec.trigger === "intersect") {
            const observerOptions = {};
            if (triggerSpec.root) {
              observerOptions.root = querySelectorExt(elt, triggerSpec.root);
            }
            if (triggerSpec.threshold) {
              observerOptions.threshold = parseFloat(triggerSpec.threshold);
            }
            const observer = new IntersectionObserver(function(entries) {
              for (let i8 = 0; i8 < entries.length; i8++) {
                const entry = entries[i8];
                if (entry.isIntersecting) {
                  triggerEvent(elt, "intersect");
                  break;
                }
              }
            }, observerOptions);
            observer.observe(asElement(elt));
            addEventListener(asElement(elt), handler, nodeData, triggerSpec);
          } else if (!nodeData.firstInitCompleted && triggerSpec.trigger === "load") {
            if (!maybeFilterEvent(triggerSpec, elt, makeEvent("load", { elt }))) {
              loadImmediately(asElement(elt), handler, nodeData, triggerSpec.delay);
            }
          } else if (triggerSpec.pollInterval > 0) {
            nodeData.polling = true;
            processPolling(asElement(elt), handler, triggerSpec);
          } else {
            addEventListener(elt, handler, nodeData, triggerSpec);
          }
        }
        function shouldProcessHxOn(node) {
          const elt = asElement(node);
          if (!elt) {
            return false;
          }
          const attributes = elt.attributes;
          for (let j2 = 0; j2 < attributes.length; j2++) {
            const attrName = attributes[j2].name;
            if (startsWith(attrName, "hx-on:") || startsWith(attrName, "data-hx-on:") || startsWith(attrName, "hx-on-") || startsWith(attrName, "data-hx-on-")) {
              return true;
            }
          }
          return false;
        }
        const HX_ON_QUERY = new XPathEvaluator().createExpression('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]');
        function processHXOnRoot(elt, elements) {
          if (shouldProcessHxOn(elt)) {
            elements.push(asElement(elt));
          }
          const iter = HX_ON_QUERY.evaluate(elt);
          let node = null;
          while (node = iter.iterateNext()) elements.push(asElement(node));
        }
        function findHxOnWildcardElements(elt) {
          const elements = [];
          if (elt instanceof DocumentFragment) {
            for (const child of elt.childNodes) {
              processHXOnRoot(child, elements);
            }
          } else {
            processHXOnRoot(elt, elements);
          }
          return elements;
        }
        function findElementsToProcess(elt) {
          if (elt.querySelectorAll) {
            const boostedSelector = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";
            const extensionSelectors = [];
            for (const e10 in extensions) {
              const extension = extensions[e10];
              if (extension.getSelectors) {
                var selectors = extension.getSelectors();
                if (selectors) {
                  extensionSelectors.push(selectors);
                }
              }
            }
            const results = elt.querySelectorAll(VERB_SELECTOR + boostedSelector + ", form, [type='submit'], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]" + extensionSelectors.flat().map((s11) => ", " + s11).join(""));
            return results;
          } else {
            return [];
          }
        }
        function maybeSetLastButtonClicked(evt) {
          const elt = getTargetButton(evt.target);
          const internalData = getRelatedFormData(evt);
          if (internalData) {
            internalData.lastButtonClicked = elt;
          }
        }
        function maybeUnsetLastButtonClicked(evt) {
          const internalData = getRelatedFormData(evt);
          if (internalData) {
            internalData.lastButtonClicked = null;
          }
        }
        function getTargetButton(target) {
          return (
            /** @type {HTMLButtonElement|HTMLInputElement|null} */
            closest(asElement(target), "button, input[type='submit']")
          );
        }
        function getRelatedForm(elt) {
          return elt.form || closest(elt, "form");
        }
        function getRelatedFormData(evt) {
          const elt = getTargetButton(evt.target);
          if (!elt) {
            return;
          }
          const form = getRelatedForm(elt);
          if (!form) {
            return;
          }
          return getInternalData(form);
        }
        function initButtonTracking(elt) {
          elt.addEventListener("click", maybeSetLastButtonClicked);
          elt.addEventListener("focusin", maybeSetLastButtonClicked);
          elt.addEventListener("focusout", maybeUnsetLastButtonClicked);
        }
        function addHxOnEventHandler(elt, eventName, code) {
          const nodeData = getInternalData(elt);
          if (!Array.isArray(nodeData.onHandlers)) {
            nodeData.onHandlers = [];
          }
          let func;
          const listener = function(e10) {
            maybeEval(elt, function() {
              if (eltIsDisabled(elt)) {
                return;
              }
              if (!func) {
                func = new Function("event", code);
              }
              func.call(elt, e10);
            });
          };
          elt.addEventListener(eventName, listener);
          nodeData.onHandlers.push({ event: eventName, listener });
        }
        function processHxOnWildcard(elt) {
          deInitOnHandlers(elt);
          for (let i8 = 0; i8 < elt.attributes.length; i8++) {
            const name = elt.attributes[i8].name;
            const value = elt.attributes[i8].value;
            if (startsWith(name, "hx-on") || startsWith(name, "data-hx-on")) {
              const afterOnPosition = name.indexOf("-on") + 3;
              const nextChar = name.slice(afterOnPosition, afterOnPosition + 1);
              if (nextChar === "-" || nextChar === ":") {
                let eventName = name.slice(afterOnPosition + 1);
                if (startsWith(eventName, ":")) {
                  eventName = "htmx" + eventName;
                } else if (startsWith(eventName, "-")) {
                  eventName = "htmx:" + eventName.slice(1);
                } else if (startsWith(eventName, "htmx-")) {
                  eventName = "htmx:" + eventName.slice(5);
                }
                addHxOnEventHandler(elt, eventName, value);
              }
            }
          }
        }
        function initNode(elt) {
          triggerEvent(elt, "htmx:beforeProcessNode");
          const nodeData = getInternalData(elt);
          const triggerSpecs = getTriggerSpecs(elt);
          const hasExplicitHttpAction = processVerbs(elt, nodeData, triggerSpecs);
          if (!hasExplicitHttpAction) {
            if (getClosestAttributeValue(elt, "hx-boost") === "true") {
              boostElement(elt, nodeData, triggerSpecs);
            } else if (hasAttribute(elt, "hx-trigger")) {
              triggerSpecs.forEach(function(triggerSpec) {
                addTriggerHandler(elt, triggerSpec, nodeData, function() {
                });
              });
            }
          }
          if (elt.tagName === "FORM" || getRawAttribute(elt, "type") === "submit" && hasAttribute(elt, "form")) {
            initButtonTracking(elt);
          }
          nodeData.firstInitCompleted = true;
          triggerEvent(elt, "htmx:afterProcessNode");
        }
        function maybeDeInitAndHash(elt) {
          if (!(elt instanceof Element)) {
            return false;
          }
          const nodeData = getInternalData(elt);
          const hash = attributeHash(elt);
          if (nodeData.initHash !== hash) {
            deInitNode(elt);
            nodeData.initHash = hash;
            return true;
          }
          return false;
        }
        function processNode(elt) {
          elt = resolveTarget(elt);
          if (eltIsDisabled(elt)) {
            cleanUpElement(elt);
            return;
          }
          const elementsToInit = [];
          if (maybeDeInitAndHash(elt)) {
            elementsToInit.push(elt);
          }
          forEach(findElementsToProcess(elt), function(child) {
            if (eltIsDisabled(child)) {
              cleanUpElement(child);
              return;
            }
            if (maybeDeInitAndHash(child)) {
              elementsToInit.push(child);
            }
          });
          forEach(findHxOnWildcardElements(elt), processHxOnWildcard);
          forEach(elementsToInit, initNode);
        }
        function kebabEventName(str2) {
          return str2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
        }
        function makeEvent(eventName, detail) {
          return new CustomEvent(eventName, { bubbles: true, cancelable: true, composed: true, detail });
        }
        function triggerErrorEvent(elt, eventName, detail) {
          triggerEvent(elt, eventName, mergeObjects({ error: eventName }, detail));
        }
        function ignoreEventForLogging(eventName) {
          return eventName === "htmx:afterProcessNode";
        }
        function withExtensions(elt, toDo, extensionsToIgnore) {
          forEach(getExtensions(elt, [], extensionsToIgnore), function(extension) {
            try {
              toDo(extension);
            } catch (e10) {
              logError(e10);
            }
          });
        }
        function logError(msg) {
          console.error(msg);
        }
        function triggerEvent(elt, eventName, detail) {
          elt = resolveTarget(elt);
          if (detail == null) {
            detail = {};
          }
          detail.elt = elt;
          const event2 = makeEvent(eventName, detail);
          if (htmx.logger && !ignoreEventForLogging(eventName)) {
            htmx.logger(elt, eventName, detail);
          }
          if (detail.error) {
            logError(detail.error + (detail.target ? ", " + detail.target : ""));
            triggerEvent(elt, "htmx:error", { errorInfo: detail });
          }
          let eventResult = elt.dispatchEvent(event2);
          const kebabName = kebabEventName(eventName);
          if (eventResult && kebabName !== eventName) {
            const kebabedEvent = makeEvent(kebabName, event2.detail);
            eventResult = eventResult && elt.dispatchEvent(kebabedEvent);
          }
          withExtensions(asElement(elt), function(extension) {
            eventResult = eventResult && (extension.onEvent(eventName, event2) !== false && !event2.defaultPrevented);
          });
          return eventResult;
        }
        let currentPathForHistory;
        function setCurrentPathForHistory(path) {
          currentPathForHistory = path;
          if (canAccessLocalStorage()) {
            sessionStorage.setItem("htmx-current-path-for-history", path);
          }
        }
        setCurrentPathForHistory(location.pathname + location.search);
        function getHistoryElement() {
          const historyElt = getDocument().querySelector("[hx-history-elt],[data-hx-history-elt]");
          return historyElt || getDocument().body;
        }
        function saveToHistoryCache(url, rootElt) {
          if (!canAccessLocalStorage()) {
            return;
          }
          const innerHTML = cleanInnerHtmlForHistory(rootElt);
          const title = getDocument().title;
          const scroll = window.scrollY;
          if (htmx.config.historyCacheSize <= 0) {
            sessionStorage.removeItem("htmx-history-cache");
            return;
          }
          url = normalizePath(url);
          const historyCache = parseJSON(sessionStorage.getItem("htmx-history-cache")) || [];
          for (let i8 = 0; i8 < historyCache.length; i8++) {
            if (historyCache[i8].url === url) {
              historyCache.splice(i8, 1);
              break;
            }
          }
          const newHistoryItem = { url, content: innerHTML, title, scroll };
          triggerEvent(getDocument().body, "htmx:historyItemCreated", { item: newHistoryItem, cache: historyCache });
          historyCache.push(newHistoryItem);
          while (historyCache.length > htmx.config.historyCacheSize) {
            historyCache.shift();
          }
          while (historyCache.length > 0) {
            try {
              sessionStorage.setItem("htmx-history-cache", JSON.stringify(historyCache));
              break;
            } catch (e10) {
              triggerErrorEvent(getDocument().body, "htmx:historyCacheError", { cause: e10, cache: historyCache });
              historyCache.shift();
            }
          }
        }
        function getCachedHistory(url) {
          if (!canAccessLocalStorage()) {
            return null;
          }
          url = normalizePath(url);
          const historyCache = parseJSON(sessionStorage.getItem("htmx-history-cache")) || [];
          for (let i8 = 0; i8 < historyCache.length; i8++) {
            if (historyCache[i8].url === url) {
              return historyCache[i8];
            }
          }
          return null;
        }
        function cleanInnerHtmlForHistory(elt) {
          const className = htmx.config.requestClass;
          const clone = (
            /** @type Element */
            elt.cloneNode(true)
          );
          forEach(findAll(clone, "." + className), function(child) {
            removeClassFromElement(child, className);
          });
          forEach(findAll(clone, "[data-disabled-by-htmx]"), function(child) {
            child.removeAttribute("disabled");
          });
          return clone.innerHTML;
        }
        function saveCurrentPageToHistory() {
          const elt = getHistoryElement();
          let path = currentPathForHistory;
          if (canAccessLocalStorage()) {
            path = sessionStorage.getItem("htmx-current-path-for-history");
          }
          path = path || location.pathname + location.search;
          const disableHistoryCache = getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
          if (!disableHistoryCache) {
            triggerEvent(getDocument().body, "htmx:beforeHistorySave", { path, historyElt: elt });
            saveToHistoryCache(path, elt);
          }
          if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, getDocument().title, location.href);
        }
        function pushUrlIntoHistory(path) {
          if (htmx.config.getCacheBusterParam) {
            path = path.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
            if (endsWith(path, "&") || endsWith(path, "?")) {
              path = path.slice(0, -1);
            }
          }
          if (htmx.config.historyEnabled) {
            history.pushState({ htmx: true }, "", path);
          }
          setCurrentPathForHistory(path);
        }
        function replaceUrlInHistory(path) {
          if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, "", path);
          setCurrentPathForHistory(path);
        }
        function settleImmediately(tasks) {
          forEach(tasks, function(task) {
            task.call(void 0);
          });
        }
        function loadHistoryFromServer(path) {
          const request = new XMLHttpRequest();
          const swapSpec = { swapStyle: "innerHTML", swapDelay: 0, settleDelay: 0 };
          const details = { path, xhr: request, historyElt: getHistoryElement(), swapSpec };
          request.open("GET", path, true);
          if (htmx.config.historyRestoreAsHxRequest) {
            request.setRequestHeader("HX-Request", "true");
          }
          request.setRequestHeader("HX-History-Restore-Request", "true");
          request.setRequestHeader("HX-Current-URL", location.href);
          request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
              details.response = this.response;
              triggerEvent(getDocument().body, "htmx:historyCacheMissLoad", details);
              swap(details.historyElt, details.response, swapSpec, {
                contextElement: details.historyElt,
                historyRequest: true
              });
              setCurrentPathForHistory(details.path);
              triggerEvent(getDocument().body, "htmx:historyRestore", { path, cacheMiss: true, serverResponse: details.response });
            } else {
              triggerErrorEvent(getDocument().body, "htmx:historyCacheMissLoadError", details);
            }
          };
          if (triggerEvent(getDocument().body, "htmx:historyCacheMiss", details)) {
            request.send();
          }
        }
        function restoreHistory(path) {
          saveCurrentPageToHistory();
          path = path || location.pathname + location.search;
          const cached = getCachedHistory(path);
          if (cached) {
            const swapSpec = { swapStyle: "innerHTML", swapDelay: 0, settleDelay: 0, scroll: cached.scroll };
            const details = { path, item: cached, historyElt: getHistoryElement(), swapSpec };
            if (triggerEvent(getDocument().body, "htmx:historyCacheHit", details)) {
              swap(details.historyElt, cached.content, swapSpec, {
                contextElement: details.historyElt,
                title: cached.title
              });
              setCurrentPathForHistory(details.path);
              triggerEvent(getDocument().body, "htmx:historyRestore", details);
            }
          } else {
            if (htmx.config.refreshOnHistoryMiss) {
              htmx.location.reload(true);
            } else {
              loadHistoryFromServer(path);
            }
          }
        }
        function addRequestIndicatorClasses(elt) {
          let indicators = (
            /** @type Element[] */
            findAttributeTargets(elt, "hx-indicator")
          );
          if (indicators == null) {
            indicators = [elt];
          }
          forEach(indicators, function(ic) {
            const internalData = getInternalData(ic);
            internalData.requestCount = (internalData.requestCount || 0) + 1;
            addClassToElement(ic, htmx.config.requestClass);
          });
          return indicators;
        }
        function disableElements(elt) {
          let disabledElts = (
            /** @type Element[] */
            findAttributeTargets(elt, "hx-disabled-elt")
          );
          if (disabledElts == null) {
            disabledElts = [];
          }
          forEach(disabledElts, function(disabledElement) {
            const internalData = getInternalData(disabledElement);
            internalData.requestCount = (internalData.requestCount || 0) + 1;
            if (!disabledElement.hasAttribute("disabled")) {
              disabledElement.setAttribute("disabled", "");
              disabledElement.setAttribute("data-disabled-by-htmx", "");
            }
          });
          return disabledElts;
        }
        function removeRequestIndicators(indicators, disabled) {
          forEach(indicators.concat(disabled), function(ele) {
            const internalData = getInternalData(ele);
            internalData.requestCount = (internalData.requestCount || 1) - 1;
          });
          forEach(indicators, function(ic) {
            const internalData = getInternalData(ic);
            if (internalData.requestCount === 0) {
              removeClassFromElement(ic, htmx.config.requestClass);
            }
          });
          forEach(disabled, function(disabledElement) {
            const internalData = getInternalData(disabledElement);
            if (internalData.requestCount === 0 && disabledElement.hasAttribute("data-disabled-by-htmx")) {
              disabledElement.removeAttribute("disabled");
              disabledElement.removeAttribute("data-disabled-by-htmx");
            }
          });
        }
        function haveSeenNode(processed, elt) {
          for (let i8 = 0; i8 < processed.length; i8++) {
            const node = processed[i8];
            if (node.isSameNode(elt)) {
              return true;
            }
          }
          return false;
        }
        function shouldInclude(element) {
          const elt = (
            /** @type {HTMLInputElement} */
            element
          );
          if (elt.name === "" || elt.name == null || elt.disabled || closest(elt, "fieldset[disabled]")) {
            return false;
          }
          if (elt.type === "button" || elt.type === "submit" || elt.tagName === "image" || elt.tagName === "reset" || elt.tagName === "file") {
            return false;
          }
          if (elt.type === "checkbox" || elt.type === "radio") {
            return elt.checked;
          }
          return true;
        }
        function addValueToFormData(name, value, formData) {
          if (name != null && value != null) {
            if (Array.isArray(value)) {
              value.forEach(function(v4) {
                formData.append(name, v4);
              });
            } else {
              formData.append(name, value);
            }
          }
        }
        function removeValueFromFormData(name, value, formData) {
          if (name != null && value != null) {
            let values = formData.getAll(name);
            if (Array.isArray(value)) {
              values = values.filter((v4) => value.indexOf(v4) < 0);
            } else {
              values = values.filter((v4) => v4 !== value);
            }
            formData.delete(name);
            forEach(values, (v4) => formData.append(name, v4));
          }
        }
        function getValueFromInput(elt) {
          if (elt instanceof HTMLSelectElement && elt.multiple) {
            return toArray(elt.querySelectorAll("option:checked")).map(function(e10) {
              return (
                /** @type HTMLOptionElement */
                e10.value
              );
            });
          }
          if (elt instanceof HTMLInputElement && elt.files) {
            return toArray(elt.files);
          }
          return elt.value;
        }
        function processInputValue(processed, formData, errors, elt, validate) {
          if (elt == null || haveSeenNode(processed, elt)) {
            return;
          } else {
            processed.push(elt);
          }
          if (shouldInclude(elt)) {
            const name = getRawAttribute(elt, "name");
            addValueToFormData(name, getValueFromInput(elt), formData);
            if (validate) {
              validateElement(elt, errors);
            }
          }
          if (elt instanceof HTMLFormElement) {
            forEach(elt.elements, function(input) {
              if (processed.indexOf(input) >= 0) {
                removeValueFromFormData(input.name, getValueFromInput(input), formData);
              } else {
                processed.push(input);
              }
              if (validate) {
                validateElement(input, errors);
              }
            });
            new FormData(elt).forEach(function(value, name) {
              if (value instanceof File && value.name === "") {
                return;
              }
              addValueToFormData(name, value, formData);
            });
          }
        }
        function validateElement(elt, errors) {
          const element = (
            /** @type {HTMLElement & ElementInternals} */
            elt
          );
          if (element.willValidate) {
            triggerEvent(element, "htmx:validation:validate");
            if (!element.checkValidity()) {
              if (triggerEvent(element, "htmx:validation:failed", {
                message: element.validationMessage,
                validity: element.validity
              }) && !errors.length && htmx.config.reportValidityOfForms) {
                element.reportValidity();
              }
              errors.push({ elt: element, message: element.validationMessage, validity: element.validity });
            }
          }
        }
        function overrideFormData(receiver, donor) {
          for (const key of donor.keys()) {
            receiver.delete(key);
          }
          donor.forEach(function(value, key) {
            receiver.append(key, value);
          });
          return receiver;
        }
        function getInputValues(elt, verb) {
          const processed = [];
          const formData = new FormData();
          const priorityFormData = new FormData();
          const errors = [];
          const internalData = getInternalData(elt);
          if (internalData.lastButtonClicked && !bodyContains(internalData.lastButtonClicked)) {
            internalData.lastButtonClicked = null;
          }
          let validate = elt instanceof HTMLFormElement && elt.noValidate !== true || getAttributeValue(elt, "hx-validate") === "true";
          if (internalData.lastButtonClicked) {
            validate = validate && internalData.lastButtonClicked.formNoValidate !== true;
          }
          if (verb !== "get") {
            processInputValue(processed, priorityFormData, errors, getRelatedForm(elt), validate);
          }
          processInputValue(processed, formData, errors, elt, validate);
          if (internalData.lastButtonClicked || elt.tagName === "BUTTON" || elt.tagName === "INPUT" && getRawAttribute(elt, "type") === "submit") {
            const button = internalData.lastButtonClicked || /** @type HTMLInputElement|HTMLButtonElement */
            elt;
            const name = getRawAttribute(button, "name");
            addValueToFormData(name, button.value, priorityFormData);
          }
          const includes = findAttributeTargets(elt, "hx-include");
          forEach(includes, function(node) {
            processInputValue(processed, formData, errors, asElement(node), validate);
            if (!matches(node, "form")) {
              forEach(asParentNode(node).querySelectorAll(INPUT_SELECTOR), function(descendant) {
                processInputValue(processed, formData, errors, descendant, validate);
              });
            }
          });
          overrideFormData(formData, priorityFormData);
          return { errors, formData, values: formDataProxy(formData) };
        }
        function appendParam(returnStr, name, realValue) {
          if (returnStr !== "") {
            returnStr += "&";
          }
          if (String(realValue) === "[object Object]") {
            realValue = JSON.stringify(realValue);
          }
          const s11 = encodeURIComponent(realValue);
          returnStr += encodeURIComponent(name) + "=" + s11;
          return returnStr;
        }
        function urlEncode(values) {
          values = formDataFromObject(values);
          let returnStr = "";
          values.forEach(function(value, key) {
            returnStr = appendParam(returnStr, key, value);
          });
          return returnStr;
        }
        function getHeaders(elt, target, prompt2) {
          const headers = {
            "HX-Request": "true",
            "HX-Trigger": getRawAttribute(elt, "id"),
            "HX-Trigger-Name": getRawAttribute(elt, "name"),
            "HX-Target": getAttributeValue(target, "id"),
            "HX-Current-URL": location.href
          };
          getValuesForElement(elt, "hx-headers", false, headers);
          if (prompt2 !== void 0) {
            headers["HX-Prompt"] = prompt2;
          }
          if (getInternalData(elt).boosted) {
            headers["HX-Boosted"] = "true";
          }
          return headers;
        }
        function filterValues(inputValues, elt) {
          const paramsValue = getClosestAttributeValue(elt, "hx-params");
          if (paramsValue) {
            if (paramsValue === "none") {
              return new FormData();
            } else if (paramsValue === "*") {
              return inputValues;
            } else if (paramsValue.indexOf("not ") === 0) {
              forEach(paramsValue.slice(4).split(","), function(name) {
                name = name.trim();
                inputValues.delete(name);
              });
              return inputValues;
            } else {
              const newValues = new FormData();
              forEach(paramsValue.split(","), function(name) {
                name = name.trim();
                if (inputValues.has(name)) {
                  inputValues.getAll(name).forEach(function(value) {
                    newValues.append(name, value);
                  });
                }
              });
              return newValues;
            }
          } else {
            return inputValues;
          }
        }
        function isAnchorLink(elt) {
          return !!getRawAttribute(elt, "href") && getRawAttribute(elt, "href").indexOf("#") >= 0;
        }
        function getSwapSpecification(elt, swapInfoOverride) {
          const swapInfo = swapInfoOverride || getClosestAttributeValue(elt, "hx-swap");
          const swapSpec = {
            swapStyle: getInternalData(elt).boosted ? "innerHTML" : htmx.config.defaultSwapStyle,
            swapDelay: htmx.config.defaultSwapDelay,
            settleDelay: htmx.config.defaultSettleDelay
          };
          if (htmx.config.scrollIntoViewOnBoost && getInternalData(elt).boosted && !isAnchorLink(elt)) {
            swapSpec.show = "top";
          }
          if (swapInfo) {
            const split = splitOnWhitespace(swapInfo);
            if (split.length > 0) {
              for (let i8 = 0; i8 < split.length; i8++) {
                const value = split[i8];
                if (value.indexOf("swap:") === 0) {
                  swapSpec.swapDelay = parseInterval(value.slice(5));
                } else if (value.indexOf("settle:") === 0) {
                  swapSpec.settleDelay = parseInterval(value.slice(7));
                } else if (value.indexOf("transition:") === 0) {
                  swapSpec.transition = value.slice(11) === "true";
                } else if (value.indexOf("ignoreTitle:") === 0) {
                  swapSpec.ignoreTitle = value.slice(12) === "true";
                } else if (value.indexOf("scroll:") === 0) {
                  const scrollSpec = value.slice(7);
                  var splitSpec = scrollSpec.split(":");
                  const scrollVal = splitSpec.pop();
                  var selectorVal = splitSpec.length > 0 ? splitSpec.join(":") : null;
                  swapSpec.scroll = scrollVal;
                  swapSpec.scrollTarget = selectorVal;
                } else if (value.indexOf("show:") === 0) {
                  const showSpec = value.slice(5);
                  var splitSpec = showSpec.split(":");
                  const showVal = splitSpec.pop();
                  var selectorVal = splitSpec.length > 0 ? splitSpec.join(":") : null;
                  swapSpec.show = showVal;
                  swapSpec.showTarget = selectorVal;
                } else if (value.indexOf("focus-scroll:") === 0) {
                  const focusScrollVal = value.slice("focus-scroll:".length);
                  swapSpec.focusScroll = focusScrollVal == "true";
                } else if (i8 == 0) {
                  swapSpec.swapStyle = value;
                } else {
                  logError("Unknown modifier in hx-swap: " + value);
                }
              }
            }
          }
          return swapSpec;
        }
        function usesFormData(elt) {
          return getClosestAttributeValue(elt, "hx-encoding") === "multipart/form-data" || matches(elt, "form") && getRawAttribute(elt, "enctype") === "multipart/form-data";
        }
        function encodeParamsForBody(xhr, elt, filteredParameters) {
          let encodedParameters = null;
          withExtensions(elt, function(extension) {
            if (encodedParameters == null) {
              encodedParameters = extension.encodeParameters(xhr, filteredParameters, elt);
            }
          });
          if (encodedParameters != null) {
            return encodedParameters;
          } else {
            if (usesFormData(elt)) {
              return overrideFormData(new FormData(), formDataFromObject(filteredParameters));
            } else {
              return urlEncode(filteredParameters);
            }
          }
        }
        function makeSettleInfo(target) {
          return { tasks: [], elts: [target] };
        }
        function updateScrollState(content, swapSpec) {
          const first = content[0];
          const last = content[content.length - 1];
          if (swapSpec.scroll) {
            var target = null;
            if (swapSpec.scrollTarget) {
              target = asElement(querySelectorExt(first, swapSpec.scrollTarget));
            }
            if (swapSpec.scroll === "top" && (first || target)) {
              target = target || first;
              target.scrollTop = 0;
            }
            if (swapSpec.scroll === "bottom" && (last || target)) {
              target = target || last;
              target.scrollTop = target.scrollHeight;
            }
            if (typeof swapSpec.scroll === "number") {
              getWindow().setTimeout(function() {
                window.scrollTo(
                  0,
                  /** @type number */
                  swapSpec.scroll
                );
              }, 0);
            }
          }
          if (swapSpec.show) {
            var target = null;
            if (swapSpec.showTarget) {
              let targetStr = swapSpec.showTarget;
              if (swapSpec.showTarget === "window") {
                targetStr = "body";
              }
              target = asElement(querySelectorExt(first, targetStr));
            }
            if (swapSpec.show === "top" && (first || target)) {
              target = target || first;
              target.scrollIntoView({ block: "start", behavior: htmx.config.scrollBehavior });
            }
            if (swapSpec.show === "bottom" && (last || target)) {
              target = target || last;
              target.scrollIntoView({ block: "end", behavior: htmx.config.scrollBehavior });
            }
          }
        }
        function getValuesForElement(elt, attr, evalAsDefault, values, event2) {
          if (values == null) {
            values = {};
          }
          if (elt == null) {
            return values;
          }
          const attributeValue = getAttributeValue(elt, attr);
          if (attributeValue) {
            let str2 = attributeValue.trim();
            let evaluateValue = evalAsDefault;
            if (str2 === "unset") {
              return null;
            }
            if (str2.indexOf("javascript:") === 0) {
              str2 = str2.slice(11);
              evaluateValue = true;
            } else if (str2.indexOf("js:") === 0) {
              str2 = str2.slice(3);
              evaluateValue = true;
            }
            if (str2.indexOf("{") !== 0) {
              str2 = "{" + str2 + "}";
            }
            let varsValues;
            if (evaluateValue) {
              varsValues = maybeEval(elt, function() {
                if (event2) {
                  return Function("event", "return (" + str2 + ")").call(elt, event2);
                } else {
                  return Function("return (" + str2 + ")").call(elt);
                }
              }, {});
            } else {
              varsValues = parseJSON(str2);
            }
            for (const key in varsValues) {
              if (varsValues.hasOwnProperty(key)) {
                if (values[key] == null) {
                  values[key] = varsValues[key];
                }
              }
            }
          }
          return getValuesForElement(asElement(parentElt(elt)), attr, evalAsDefault, values, event2);
        }
        function maybeEval(elt, toEval, defaultVal) {
          if (htmx.config.allowEval) {
            return toEval();
          } else {
            triggerErrorEvent(elt, "htmx:evalDisallowedError");
            return defaultVal;
          }
        }
        function getHXVarsForElement(elt, event2, expressionVars) {
          return getValuesForElement(elt, "hx-vars", true, expressionVars, event2);
        }
        function getHXValsForElement(elt, event2, expressionVars) {
          return getValuesForElement(elt, "hx-vals", false, expressionVars, event2);
        }
        function getExpressionVars(elt, event2) {
          return mergeObjects(getHXVarsForElement(elt, event2), getHXValsForElement(elt, event2));
        }
        function safelySetHeaderValue(xhr, header, headerValue) {
          if (headerValue !== null) {
            try {
              xhr.setRequestHeader(header, headerValue);
            } catch (e10) {
              xhr.setRequestHeader(header, encodeURIComponent(headerValue));
              xhr.setRequestHeader(header + "-URI-AutoEncoded", "true");
            }
          }
        }
        function getPathFromResponse(xhr) {
          if (xhr.responseURL) {
            try {
              const url = new URL(xhr.responseURL);
              return url.pathname + url.search;
            } catch (e10) {
              triggerErrorEvent(getDocument().body, "htmx:badResponseUrl", { url: xhr.responseURL });
            }
          }
        }
        function hasHeader(xhr, regexp) {
          return regexp.test(xhr.getAllResponseHeaders());
        }
        function ajaxHelper(verb, path, context) {
          verb = /** @type HttpVerb */
          verb.toLowerCase();
          if (context) {
            if (context instanceof Element || typeof context === "string") {
              return issueAjaxRequest(verb, path, null, null, {
                targetOverride: resolveTarget(context) || DUMMY_ELT,
                returnPromise: true
              });
            } else {
              let resolvedTarget = resolveTarget(context.target);
              if (context.target && !resolvedTarget || context.source && !resolvedTarget && !resolveTarget(context.source)) {
                resolvedTarget = DUMMY_ELT;
              }
              return issueAjaxRequest(
                verb,
                path,
                resolveTarget(context.source),
                context.event,
                {
                  handler: context.handler,
                  headers: context.headers,
                  values: context.values,
                  targetOverride: resolvedTarget,
                  swapOverride: context.swap,
                  select: context.select,
                  returnPromise: true,
                  push: context.push,
                  replace: context.replace,
                  selectOOB: context.selectOOB
                }
              );
            }
          } else {
            return issueAjaxRequest(verb, path, null, null, {
              returnPromise: true
            });
          }
        }
        function hierarchyForElt(elt) {
          const arr = [];
          while (elt) {
            arr.push(elt);
            elt = elt.parentElement;
          }
          return arr;
        }
        function verifyPath(elt, path, requestConfig) {
          const url = new URL(path, location.protocol !== "about:" ? location.href : window.origin);
          const origin = location.protocol !== "about:" ? location.origin : window.origin;
          const sameHost = origin === url.origin;
          if (htmx.config.selfRequestsOnly) {
            if (!sameHost) {
              return false;
            }
          }
          return triggerEvent(elt, "htmx:validateUrl", mergeObjects({ url, sameHost }, requestConfig));
        }
        function formDataFromObject(obj) {
          if (obj instanceof FormData) return obj;
          const formData = new FormData();
          for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (obj[key] && typeof obj[key].forEach === "function") {
                obj[key].forEach(function(v4) {
                  formData.append(key, v4);
                });
              } else if (typeof obj[key] === "object" && !(obj[key] instanceof Blob)) {
                formData.append(key, JSON.stringify(obj[key]));
              } else {
                formData.append(key, obj[key]);
              }
            }
          }
          return formData;
        }
        function formDataArrayProxy(formData, name, array) {
          return new Proxy(array, {
            get: function(target, key) {
              if (typeof key === "number") return target[key];
              if (key === "length") return target.length;
              if (key === "push") {
                return function(value) {
                  target.push(value);
                  formData.append(name, value);
                };
              }
              if (typeof target[key] === "function") {
                return function() {
                  target[key].apply(target, arguments);
                  formData.delete(name);
                  target.forEach(function(v4) {
                    formData.append(name, v4);
                  });
                };
              }
              if (target[key] && target[key].length === 1) {
                return target[key][0];
              } else {
                return target[key];
              }
            },
            set: function(target, index, value) {
              target[index] = value;
              formData.delete(name);
              target.forEach(function(v4) {
                formData.append(name, v4);
              });
              return true;
            }
          });
        }
        function formDataProxy(formData) {
          return new Proxy(formData, {
            get: function(target, name) {
              if (typeof name === "symbol") {
                const result = Reflect.get(target, name);
                if (typeof result === "function") {
                  return function() {
                    return result.apply(formData, arguments);
                  };
                } else {
                  return result;
                }
              }
              if (name === "toJSON") {
                return () => Object.fromEntries(formData);
              }
              if (name in target) {
                if (typeof target[name] === "function") {
                  return function() {
                    return formData[name].apply(formData, arguments);
                  };
                }
              }
              const array = formData.getAll(name);
              if (array.length === 0) {
                return void 0;
              } else if (array.length === 1) {
                return array[0];
              } else {
                return formDataArrayProxy(target, name, array);
              }
            },
            set: function(target, name, value) {
              if (typeof name !== "string") {
                return false;
              }
              target.delete(name);
              if (value && typeof value.forEach === "function") {
                value.forEach(function(v4) {
                  target.append(name, v4);
                });
              } else if (typeof value === "object" && !(value instanceof Blob)) {
                target.append(name, JSON.stringify(value));
              } else {
                target.append(name, value);
              }
              return true;
            },
            deleteProperty: function(target, name) {
              if (typeof name === "string") {
                target.delete(name);
              }
              return true;
            },
            // Support Object.assign call from proxy
            ownKeys: function(target) {
              return Reflect.ownKeys(Object.fromEntries(target));
            },
            getOwnPropertyDescriptor: function(target, prop) {
              return Reflect.getOwnPropertyDescriptor(Object.fromEntries(target), prop);
            }
          });
        }
        function issueAjaxRequest(verb, path, elt, event2, etc, confirmed) {
          let resolve = null;
          let reject = null;
          etc = etc != null ? etc : {};
          if (etc.returnPromise && typeof Promise !== "undefined") {
            var promise = new Promise(function(_resolve, _reject) {
              resolve = _resolve;
              reject = _reject;
            });
          }
          if (elt == null) {
            elt = getDocument().body;
          }
          const responseHandler = etc.handler || handleAjaxResponse;
          const select = etc.select || null;
          if (!bodyContains(elt)) {
            maybeCall(resolve);
            return promise;
          }
          const target = etc.targetOverride || asElement(getTarget(elt));
          if (target == null || target == DUMMY_ELT) {
            triggerErrorEvent(elt, "htmx:targetError", { target: getClosestAttributeValue(elt, "hx-target") });
            maybeCall(reject);
            return promise;
          }
          let eltData = getInternalData(elt);
          const submitter = eltData.lastButtonClicked;
          if (submitter) {
            const buttonPath = getRawAttribute(submitter, "formaction");
            if (buttonPath != null) {
              path = buttonPath;
            }
            const buttonVerb = getRawAttribute(submitter, "formmethod");
            if (buttonVerb != null) {
              if (VERBS.includes(buttonVerb.toLowerCase())) {
                verb = /** @type HttpVerb */
                buttonVerb;
              } else {
                maybeCall(resolve);
                return promise;
              }
            }
          }
          const confirmQuestion = getClosestAttributeValue(elt, "hx-confirm");
          if (confirmed === void 0) {
            const issueRequest = function(skipConfirmation) {
              return issueAjaxRequest(verb, path, elt, event2, etc, !!skipConfirmation);
            };
            const confirmDetails = { target, elt, path, verb, triggeringEvent: event2, etc, issueRequest, question: confirmQuestion };
            if (triggerEvent(elt, "htmx:confirm", confirmDetails) === false) {
              maybeCall(resolve);
              return promise;
            }
          }
          let syncElt = elt;
          let syncStrategy = getClosestAttributeValue(elt, "hx-sync");
          let queueStrategy = null;
          let abortable = false;
          if (syncStrategy) {
            const syncStrings = syncStrategy.split(":");
            const selector = syncStrings[0].trim();
            if (selector === "this") {
              syncElt = findThisElement(elt, "hx-sync");
            } else {
              syncElt = asElement(querySelectorExt(elt, selector));
            }
            syncStrategy = (syncStrings[1] || "drop").trim();
            eltData = getInternalData(syncElt);
            if (syncStrategy === "drop" && eltData.xhr && eltData.abortable !== true) {
              maybeCall(resolve);
              return promise;
            } else if (syncStrategy === "abort") {
              if (eltData.xhr) {
                maybeCall(resolve);
                return promise;
              } else {
                abortable = true;
              }
            } else if (syncStrategy === "replace") {
              triggerEvent(syncElt, "htmx:abort");
            } else if (syncStrategy.indexOf("queue") === 0) {
              const queueStrArray = syncStrategy.split(" ");
              queueStrategy = (queueStrArray[1] || "last").trim();
            }
          }
          if (eltData.xhr) {
            if (eltData.abortable) {
              triggerEvent(syncElt, "htmx:abort");
            } else {
              if (queueStrategy == null) {
                if (event2) {
                  const eventData = getInternalData(event2);
                  if (eventData && eventData.triggerSpec && eventData.triggerSpec.queue) {
                    queueStrategy = eventData.triggerSpec.queue;
                  }
                }
                if (queueStrategy == null) {
                  queueStrategy = "last";
                }
              }
              if (eltData.queuedRequests == null) {
                eltData.queuedRequests = [];
              }
              if (queueStrategy === "first" && eltData.queuedRequests.length === 0) {
                eltData.queuedRequests.push(function() {
                  issueAjaxRequest(verb, path, elt, event2, etc);
                });
              } else if (queueStrategy === "all") {
                eltData.queuedRequests.push(function() {
                  issueAjaxRequest(verb, path, elt, event2, etc);
                });
              } else if (queueStrategy === "last") {
                eltData.queuedRequests = [];
                eltData.queuedRequests.push(function() {
                  issueAjaxRequest(verb, path, elt, event2, etc);
                });
              }
              maybeCall(resolve);
              return promise;
            }
          }
          const xhr = new XMLHttpRequest();
          eltData.xhr = xhr;
          eltData.abortable = abortable;
          const endRequestLock = function() {
            eltData.xhr = null;
            eltData.abortable = false;
            if (eltData.queuedRequests != null && eltData.queuedRequests.length > 0) {
              const queuedRequest = eltData.queuedRequests.shift();
              queuedRequest();
            }
          };
          const promptQuestion = getClosestAttributeValue(elt, "hx-prompt");
          if (promptQuestion) {
            var promptResponse = prompt(promptQuestion);
            if (promptResponse === null || !triggerEvent(elt, "htmx:prompt", { prompt: promptResponse, target })) {
              maybeCall(resolve);
              endRequestLock();
              return promise;
            }
          }
          if (confirmQuestion && !confirmed) {
            if (!confirm(confirmQuestion)) {
              maybeCall(resolve);
              endRequestLock();
              return promise;
            }
          }
          let headers = getHeaders(elt, target, promptResponse);
          if (verb !== "get" && !usesFormData(elt)) {
            headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
          if (etc.headers) {
            headers = mergeObjects(headers, etc.headers);
          }
          const results = getInputValues(elt, verb);
          let errors = results.errors;
          const rawFormData = results.formData;
          if (etc.values) {
            overrideFormData(rawFormData, formDataFromObject(etc.values));
          }
          const expressionVars = formDataFromObject(getExpressionVars(elt, event2));
          const allFormData = overrideFormData(rawFormData, expressionVars);
          let filteredFormData = filterValues(allFormData, elt);
          if (htmx.config.getCacheBusterParam && verb === "get") {
            filteredFormData.set("org.htmx.cache-buster", getRawAttribute(target, "id") || "true");
          }
          if (path == null || path === "") {
            path = location.href;
          }
          const requestAttrValues = getValuesForElement(elt, "hx-request");
          const eltIsBoosted = getInternalData(elt).boosted;
          let useUrlParams = htmx.config.methodsThatUseUrlParams.indexOf(verb) >= 0;
          const requestConfig = {
            boosted: eltIsBoosted,
            useUrlParams,
            formData: filteredFormData,
            parameters: formDataProxy(filteredFormData),
            unfilteredFormData: allFormData,
            unfilteredParameters: formDataProxy(allFormData),
            headers,
            elt,
            target,
            verb,
            errors,
            withCredentials: etc.credentials || requestAttrValues.credentials || htmx.config.withCredentials,
            timeout: etc.timeout || requestAttrValues.timeout || htmx.config.timeout,
            path,
            triggeringEvent: event2
          };
          if (!triggerEvent(elt, "htmx:configRequest", requestConfig)) {
            maybeCall(resolve);
            endRequestLock();
            return promise;
          }
          path = requestConfig.path;
          verb = requestConfig.verb;
          headers = requestConfig.headers;
          filteredFormData = formDataFromObject(requestConfig.parameters);
          errors = requestConfig.errors;
          useUrlParams = requestConfig.useUrlParams;
          if (errors && errors.length > 0) {
            triggerEvent(elt, "htmx:validation:halted", requestConfig);
            maybeCall(resolve);
            endRequestLock();
            return promise;
          }
          const splitPath = path.split("#");
          const pathNoAnchor = splitPath[0];
          const anchor = splitPath[1];
          let finalPath = path;
          if (useUrlParams) {
            finalPath = pathNoAnchor;
            const hasValues = !filteredFormData.keys().next().done;
            if (hasValues) {
              if (finalPath.indexOf("?") < 0) {
                finalPath += "?";
              } else {
                finalPath += "&";
              }
              finalPath += urlEncode(filteredFormData);
              if (anchor) {
                finalPath += "#" + anchor;
              }
            }
          }
          if (!verifyPath(elt, finalPath, requestConfig)) {
            triggerErrorEvent(elt, "htmx:invalidPath", requestConfig);
            maybeCall(reject);
            endRequestLock();
            return promise;
          }
          xhr.open(verb.toUpperCase(), finalPath, true);
          xhr.overrideMimeType("text/html");
          xhr.withCredentials = requestConfig.withCredentials;
          xhr.timeout = requestConfig.timeout;
          if (requestAttrValues.noHeaders) {
          } else {
            for (const header in headers) {
              if (headers.hasOwnProperty(header)) {
                const headerValue = headers[header];
                safelySetHeaderValue(xhr, header, headerValue);
              }
            }
          }
          const responseInfo = {
            xhr,
            target,
            requestConfig,
            etc,
            boosted: eltIsBoosted,
            select,
            pathInfo: {
              requestPath: path,
              finalRequestPath: finalPath,
              responsePath: null,
              anchor
            }
          };
          xhr.onload = function() {
            try {
              const hierarchy = hierarchyForElt(elt);
              responseInfo.pathInfo.responsePath = getPathFromResponse(xhr);
              responseHandler(elt, responseInfo);
              if (responseInfo.keepIndicators !== true) {
                removeRequestIndicators(indicators, disableElts);
              }
              triggerEvent(elt, "htmx:afterRequest", responseInfo);
              triggerEvent(elt, "htmx:afterOnLoad", responseInfo);
              if (!bodyContains(elt)) {
                let secondaryTriggerElt = null;
                while (hierarchy.length > 0 && secondaryTriggerElt == null) {
                  const parentEltInHierarchy = hierarchy.shift();
                  if (bodyContains(parentEltInHierarchy)) {
                    secondaryTriggerElt = parentEltInHierarchy;
                  }
                }
                if (secondaryTriggerElt) {
                  triggerEvent(secondaryTriggerElt, "htmx:afterRequest", responseInfo);
                  triggerEvent(secondaryTriggerElt, "htmx:afterOnLoad", responseInfo);
                }
              }
              maybeCall(resolve);
            } catch (e10) {
              triggerErrorEvent(elt, "htmx:onLoadError", mergeObjects({ error: e10 }, responseInfo));
              throw e10;
            } finally {
              endRequestLock();
            }
          };
          xhr.onerror = function() {
            removeRequestIndicators(indicators, disableElts);
            triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
            triggerErrorEvent(elt, "htmx:sendError", responseInfo);
            maybeCall(reject);
            endRequestLock();
          };
          xhr.onabort = function() {
            removeRequestIndicators(indicators, disableElts);
            triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
            triggerErrorEvent(elt, "htmx:sendAbort", responseInfo);
            maybeCall(reject);
            endRequestLock();
          };
          xhr.ontimeout = function() {
            removeRequestIndicators(indicators, disableElts);
            triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
            triggerErrorEvent(elt, "htmx:timeout", responseInfo);
            maybeCall(reject);
            endRequestLock();
          };
          if (!triggerEvent(elt, "htmx:beforeRequest", responseInfo)) {
            maybeCall(resolve);
            endRequestLock();
            return promise;
          }
          var indicators = addRequestIndicatorClasses(elt);
          var disableElts = disableElements(elt);
          forEach(["loadstart", "loadend", "progress", "abort"], function(eventName) {
            forEach([xhr, xhr.upload], function(target2) {
              target2.addEventListener(eventName, function(event3) {
                triggerEvent(elt, "htmx:xhr:" + eventName, {
                  lengthComputable: event3.lengthComputable,
                  loaded: event3.loaded,
                  total: event3.total
                });
              });
            });
          });
          triggerEvent(elt, "htmx:beforeSend", responseInfo);
          const params = useUrlParams ? null : encodeParamsForBody(xhr, elt, filteredFormData);
          xhr.send(params);
          return promise;
        }
        function determineHistoryUpdates(elt, responseInfo) {
          const xhr = responseInfo.xhr;
          let pathFromHeaders = null;
          let typeFromHeaders = null;
          if (hasHeader(xhr, /HX-Push:/i)) {
            pathFromHeaders = xhr.getResponseHeader("HX-Push");
            typeFromHeaders = "push";
          } else if (hasHeader(xhr, /HX-Push-Url:/i)) {
            pathFromHeaders = xhr.getResponseHeader("HX-Push-Url");
            typeFromHeaders = "push";
          } else if (hasHeader(xhr, /HX-Replace-Url:/i)) {
            pathFromHeaders = xhr.getResponseHeader("HX-Replace-Url");
            typeFromHeaders = "replace";
          }
          if (pathFromHeaders) {
            if (pathFromHeaders === "false") {
              return {};
            } else {
              return {
                type: typeFromHeaders,
                path: pathFromHeaders
              };
            }
          }
          const requestPath = responseInfo.pathInfo.finalRequestPath;
          const responsePath = responseInfo.pathInfo.responsePath;
          let pushUrl = responseInfo.etc.push || getClosestAttributeValue(elt, "hx-push-url");
          let replaceUrl = responseInfo.etc.replace || getClosestAttributeValue(elt, "hx-replace-url");
          if (pushUrl === "false") pushUrl = null;
          if (replaceUrl === "false") replaceUrl = null;
          const elementIsBoosted = getInternalData(elt).boosted;
          let saveType = null;
          let path = null;
          if (pushUrl) {
            saveType = "push";
            path = pushUrl;
          } else if (replaceUrl) {
            saveType = "replace";
            path = replaceUrl;
          } else if (elementIsBoosted) {
            saveType = "push";
            path = responsePath || requestPath;
          }
          if (path) {
            if (path === "true") {
              path = responsePath || requestPath;
            }
            if (responseInfo.pathInfo.anchor && path.indexOf("#") === -1) {
              path = path + "#" + responseInfo.pathInfo.anchor;
            }
            return {
              type: saveType,
              path
            };
          } else {
            return {};
          }
        }
        function codeMatches(responseHandlingConfig, status) {
          var regExp = new RegExp(responseHandlingConfig.code);
          return regExp.test(status.toString(10));
        }
        function resolveResponseHandling(xhr) {
          for (var i8 = 0; i8 < htmx.config.responseHandling.length; i8++) {
            var responseHandlingElement = htmx.config.responseHandling[i8];
            if (codeMatches(responseHandlingElement, xhr.status)) {
              return responseHandlingElement;
            }
          }
          return {
            swap: false
          };
        }
        function handleTitle(title) {
          if (title) {
            const titleElt = find("title");
            if (titleElt) {
              titleElt.textContent = title;
            } else {
              window.document.title = title;
            }
          }
        }
        function resolveRetarget(elt, target) {
          if (target === "this") {
            return elt;
          }
          const resolvedTarget = asElement(querySelectorExt(elt, target));
          if (resolvedTarget == null) {
            triggerErrorEvent(elt, "htmx:targetError", { target });
            throw new Error(`Invalid re-target ${target}`);
          }
          return resolvedTarget;
        }
        function handleAjaxResponse(elt, responseInfo) {
          const xhr = responseInfo.xhr;
          let target = responseInfo.target;
          const etc = responseInfo.etc;
          const responseInfoSelect = responseInfo.select;
          if (!triggerEvent(elt, "htmx:beforeOnLoad", responseInfo)) return;
          if (hasHeader(xhr, /HX-Trigger:/i)) {
            handleTriggerHeader(xhr, "HX-Trigger", elt);
          }
          if (hasHeader(xhr, /HX-Location:/i)) {
            let redirectPath = xhr.getResponseHeader("HX-Location");
            var redirectSwapSpec = {};
            if (redirectPath.indexOf("{") === 0) {
              redirectSwapSpec = parseJSON(redirectPath);
              redirectPath = redirectSwapSpec.path;
              delete redirectSwapSpec.path;
            }
            redirectSwapSpec.push = redirectSwapSpec.push ?? "true";
            ajaxHelper("get", redirectPath, redirectSwapSpec);
            return;
          }
          const shouldRefresh = hasHeader(xhr, /HX-Refresh:/i) && xhr.getResponseHeader("HX-Refresh") === "true";
          if (hasHeader(xhr, /HX-Redirect:/i)) {
            responseInfo.keepIndicators = true;
            htmx.location.href = xhr.getResponseHeader("HX-Redirect");
            shouldRefresh && htmx.location.reload();
            return;
          }
          if (shouldRefresh) {
            responseInfo.keepIndicators = true;
            htmx.location.reload();
            return;
          }
          const historyUpdate = determineHistoryUpdates(elt, responseInfo);
          const responseHandling = resolveResponseHandling(xhr);
          const shouldSwap = responseHandling.swap;
          let isError = !!responseHandling.error;
          let ignoreTitle = htmx.config.ignoreTitle || responseHandling.ignoreTitle;
          let selectOverride = responseHandling.select;
          if (responseHandling.target) {
            responseInfo.target = resolveRetarget(elt, responseHandling.target);
          }
          var swapOverride = etc.swapOverride;
          if (swapOverride == null && responseHandling.swapOverride) {
            swapOverride = responseHandling.swapOverride;
          }
          if (hasHeader(xhr, /HX-Retarget:/i)) {
            responseInfo.target = resolveRetarget(elt, xhr.getResponseHeader("HX-Retarget"));
          }
          if (hasHeader(xhr, /HX-Reswap:/i)) {
            swapOverride = xhr.getResponseHeader("HX-Reswap");
          }
          var serverResponse = xhr.response;
          var beforeSwapDetails = mergeObjects({
            shouldSwap,
            serverResponse,
            isError,
            ignoreTitle,
            selectOverride,
            swapOverride
          }, responseInfo);
          if (responseHandling.event && !triggerEvent(target, responseHandling.event, beforeSwapDetails)) return;
          if (!triggerEvent(target, "htmx:beforeSwap", beforeSwapDetails)) return;
          target = beforeSwapDetails.target;
          serverResponse = beforeSwapDetails.serverResponse;
          isError = beforeSwapDetails.isError;
          ignoreTitle = beforeSwapDetails.ignoreTitle;
          selectOverride = beforeSwapDetails.selectOverride;
          swapOverride = beforeSwapDetails.swapOverride;
          responseInfo.target = target;
          responseInfo.failed = isError;
          responseInfo.successful = !isError;
          if (beforeSwapDetails.shouldSwap) {
            if (xhr.status === 286) {
              cancelPolling(elt);
            }
            withExtensions(elt, function(extension) {
              serverResponse = extension.transformResponse(serverResponse, xhr, elt);
            });
            if (historyUpdate.type) {
              saveCurrentPageToHistory();
            }
            var swapSpec = getSwapSpecification(elt, swapOverride);
            if (!swapSpec.hasOwnProperty("ignoreTitle")) {
              swapSpec.ignoreTitle = ignoreTitle;
            }
            addClassToElement(target, htmx.config.swappingClass);
            if (responseInfoSelect) {
              selectOverride = responseInfoSelect;
            }
            if (hasHeader(xhr, /HX-Reselect:/i)) {
              selectOverride = xhr.getResponseHeader("HX-Reselect");
            }
            const selectOOB = etc.selectOOB || getClosestAttributeValue(elt, "hx-select-oob");
            const select = getClosestAttributeValue(elt, "hx-select");
            swap(target, serverResponse, swapSpec, {
              select: selectOverride === "unset" ? null : selectOverride || select,
              selectOOB,
              eventInfo: responseInfo,
              anchor: responseInfo.pathInfo.anchor,
              contextElement: elt,
              afterSwapCallback: function() {
                if (hasHeader(xhr, /HX-Trigger-After-Swap:/i)) {
                  let finalElt = elt;
                  if (!bodyContains(elt)) {
                    finalElt = getDocument().body;
                  }
                  handleTriggerHeader(xhr, "HX-Trigger-After-Swap", finalElt);
                }
              },
              afterSettleCallback: function() {
                if (hasHeader(xhr, /HX-Trigger-After-Settle:/i)) {
                  let finalElt = elt;
                  if (!bodyContains(elt)) {
                    finalElt = getDocument().body;
                  }
                  handleTriggerHeader(xhr, "HX-Trigger-After-Settle", finalElt);
                }
              },
              beforeSwapCallback: function() {
                if (historyUpdate.type) {
                  triggerEvent(getDocument().body, "htmx:beforeHistoryUpdate", mergeObjects({ history: historyUpdate }, responseInfo));
                  if (historyUpdate.type === "push") {
                    pushUrlIntoHistory(historyUpdate.path);
                    triggerEvent(getDocument().body, "htmx:pushedIntoHistory", { path: historyUpdate.path });
                  } else {
                    replaceUrlInHistory(historyUpdate.path);
                    triggerEvent(getDocument().body, "htmx:replacedInHistory", { path: historyUpdate.path });
                  }
                }
              }
            });
          }
          if (isError) {
            triggerErrorEvent(elt, "htmx:responseError", mergeObjects({ error: "Response Status Error Code " + xhr.status + " from " + responseInfo.pathInfo.requestPath }, responseInfo));
          }
        }
        const extensions = {};
        function extensionBase() {
          return {
            init: function(api) {
              return null;
            },
            getSelectors: function() {
              return null;
            },
            onEvent: function(name, evt) {
              return true;
            },
            transformResponse: function(text, xhr, elt) {
              return text;
            },
            isInlineSwap: function(swapStyle) {
              return false;
            },
            handleSwap: function(swapStyle, target, fragment, settleInfo) {
              return false;
            },
            encodeParameters: function(xhr, parameters, elt) {
              return null;
            }
          };
        }
        function defineExtension(name, extension) {
          if (extension.init) {
            extension.init(internalAPI);
          }
          extensions[name] = mergeObjects(extensionBase(), extension);
        }
        function removeExtension(name) {
          delete extensions[name];
        }
        function getExtensions(elt, extensionsToReturn, extensionsToIgnore) {
          if (extensionsToReturn == void 0) {
            extensionsToReturn = [];
          }
          if (elt == void 0) {
            return extensionsToReturn;
          }
          if (extensionsToIgnore == void 0) {
            extensionsToIgnore = [];
          }
          const extensionsForElement = getAttributeValue(elt, "hx-ext");
          if (extensionsForElement) {
            forEach(extensionsForElement.split(","), function(extensionName) {
              extensionName = extensionName.replace(/ /g, "");
              if (extensionName.slice(0, 7) == "ignore:") {
                extensionsToIgnore.push(extensionName.slice(7));
                return;
              }
              if (extensionsToIgnore.indexOf(extensionName) < 0) {
                const extension = extensions[extensionName];
                if (extension && extensionsToReturn.indexOf(extension) < 0) {
                  extensionsToReturn.push(extension);
                }
              }
            });
          }
          return getExtensions(asElement(parentElt(elt)), extensionsToReturn, extensionsToIgnore);
        }
        var isReady = false;
        getDocument().addEventListener("DOMContentLoaded", function() {
          isReady = true;
        });
        function ready(fn) {
          if (isReady || getDocument().readyState === "complete") {
            fn();
          } else {
            getDocument().addEventListener("DOMContentLoaded", fn);
          }
        }
        function insertIndicatorStyles() {
          if (htmx.config.includeIndicatorStyles !== false) {
            const nonceAttribute = htmx.config.inlineStyleNonce ? ` nonce="${htmx.config.inlineStyleNonce}"` : "";
            const indicator = htmx.config.indicatorClass;
            const request = htmx.config.requestClass;
            getDocument().head.insertAdjacentHTML(
              "beforeend",
              `<style${nonceAttribute}>.${indicator}{opacity:0;visibility: hidden} .${request} .${indicator}, .${request}.${indicator}{opacity:1;visibility: visible;transition: opacity 200ms ease-in}</style>`
            );
          }
        }
        function getMetaConfig() {
          const element = getDocument().querySelector('meta[name="htmx-config"]');
          if (element) {
            return parseJSON(element.content);
          } else {
            return null;
          }
        }
        function mergeMetaConfig() {
          const metaConfig = getMetaConfig();
          if (metaConfig) {
            htmx.config = mergeObjects(htmx.config, metaConfig);
          }
        }
        ready(function() {
          mergeMetaConfig();
          insertIndicatorStyles();
          let body = getDocument().body;
          processNode(body);
          const restoredElts = getDocument().querySelectorAll(
            "[hx-trigger='restored'],[data-hx-trigger='restored']"
          );
          body.addEventListener("htmx:abort", function(evt) {
            const target = (
              /** @type {CustomEvent} */
              evt.detail.elt || evt.target
            );
            const internalData = getInternalData(target);
            if (internalData && internalData.xhr) {
              internalData.xhr.abort();
            }
          });
          const originalPopstate = window.onpopstate ? window.onpopstate.bind(window) : null;
          window.onpopstate = function(event2) {
            if (event2.state && event2.state.htmx) {
              restoreHistory();
              forEach(restoredElts, function(elt) {
                triggerEvent(elt, "htmx:restored", {
                  document: getDocument(),
                  triggerEvent
                });
              });
            } else {
              if (originalPopstate) {
                originalPopstate(event2);
              }
            }
          };
          getWindow().setTimeout(function() {
            triggerEvent(body, "htmx:load", {});
            body = null;
          }, 0);
        });
        return htmx;
      })();
      htmx_esm_default = htmx2;
    }
  });

  // assets/js/functions/common.js
  var ENVIRONMENT = "development";
  function isDev() {
    return ENVIRONMENT === "development";
  }
  function devLog(...variable) {
    if (isDev() === false) return;
    console.log(...variable);
  }

  // assets/js/functions/modals.js
  function Modals() {
    devLog("Modal function is running");
    const popupBackdrop = document.querySelector("[modal-backdrop]");
    const modals = document.querySelectorAll("[modal]");
    const discardSnapshots = /* @__PURE__ */ new WeakMap();
    const isDiscardOnCloseEnabled = (modal) => modal?.dataset?.modalDiscardOnClose === "true";
    const isModalDismissible = (modal) => modal?.dataset?.modalDismissible !== "false";
    const getDiscardableFields = (modal) => modal.querySelectorAll("input, textarea, select");
    const captureDiscardSnapshot = (modal) => {
      if (!isDiscardOnCloseEnabled(modal)) {
        return;
      }
      const snapshot = [];
      getDiscardableFields(modal).forEach((field) => {
        const fieldType = field.type ? field.type.toLowerCase() : "";
        if (fieldType === "checkbox" || fieldType === "radio") {
          snapshot.push({ field, checked: field.checked });
          return;
        }
        snapshot.push({ field, value: field.value });
      });
      discardSnapshots.set(modal, snapshot);
    };
    const restoreDiscardSnapshot = (modal) => {
      if (!isDiscardOnCloseEnabled(modal)) {
        return;
      }
      const snapshot = discardSnapshots.get(modal);
      if (!snapshot || !Array.isArray(snapshot)) {
        return;
      }
      snapshot.forEach((entry) => {
        if (!entry?.field) {
          return;
        }
        if (typeof entry.checked === "boolean") {
          entry.field.checked = entry.checked;
          return;
        }
        if (typeof entry.value !== "undefined") {
          entry.field.value = entry.value;
        }
      });
    };
    const syncBackdrop = () => {
      const activeModals = document.querySelectorAll(
        '[modal][data-active="true"]'
      );
      const hasDrawer = Array.from(activeModals).some(
        (modal) => modal.dataset.modalLayer === "drawer"
      );
      const hasPopup = Array.from(activeModals).some(
        (modal) => modal.dataset.modalLayer === "popup"
      );
      const hasActiveModal = activeModals.length > 0;
      if (!popupBackdrop) {
        document.body.style.overflow = hasActiveModal ? "hidden" : "auto";
        return;
      }
      popupBackdrop.dataset.active = hasActiveModal ? "true" : "false";
      popupBackdrop.dataset.elevated = hasDrawer && hasPopup ? "true" : "false";
      document.body.style.overflow = hasActiveModal ? "hidden" : "auto";
    };
    const closeModal = (modal) => {
      restoreDiscardSnapshot(modal);
      modal.dataset.active = "false";
      modal.dispatchEvent(
        new CustomEvent("modal-state-change", {
          detail: {
            handler: popupBackdrop
          }
        })
      );
    };
    if (!popupBackdrop) {
      devLog("Modal backdrop not found. Skipping backdrop click handler.");
    } else {
      popupBackdrop.addEventListener("click", (e10) => {
        e10.stopPropagation();
        const activeModals = Array.from(
          document.querySelectorAll('[modal][data-active="true"]')
        );
        const hasDrawer = activeModals.some(
          (modal) => modal.dataset.modalLayer === "drawer"
        );
        const hasPopup = activeModals.some(
          (modal) => modal.dataset.modalLayer === "popup"
        );
        const modalsToClose = (hasDrawer && hasPopup ? activeModals.filter((modal) => modal.dataset.modalLayer === "popup") : activeModals).filter(isModalDismissible);
        modalsToClose.forEach(closeModal);
        syncBackdrop();
      });
    }
    const handleModalState = (modalName, state) => {
      const modals2 = document.querySelectorAll(
        `[modal][data-modal-name="${modalName}"]`
      );
      if (!modals2) {
        devLog(`Modal "${modalName}" not found.`);
        return;
      }
      modals2.forEach((modal) => {
        if (state === "false" && !isModalDismissible(modal)) {
          return;
        }
        if (state === "true") {
          captureDiscardSnapshot(modal);
        } else {
          restoreDiscardSnapshot(modal);
        }
        modal.dataset.active = state;
      });
      syncBackdrop();
      devLog(`Modal "${modalName}" state set to "${state}".`);
    };
    const addEventListeners = (selector, action, actionName) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        const modalName = element.dataset.modalName;
        const modal = document.querySelector(
          `[modal][data-modal-name="${modalName}"]`
        );
        element.addEventListener("click", () => {
          action(modalName);
          if (modal) {
            modal.dispatchEvent(
              new CustomEvent("modal-state-change", {
                detail: {
                  handler: element
                }
              })
            );
          }
        });
        devLog(`"${actionName}" triggered for modal "${modalName}".`);
      });
    };
    addEventListeners(
      "[modal-opener]",
      (modalName) => handleModalState(modalName, "true"),
      "Open"
    );
    addEventListeners(
      "[modal-closer]",
      (modalName) => handleModalState(modalName, "false"),
      "Close"
    );
    addEventListeners(
      "[modal-toggler]",
      (modalName) => {
        const modal = document.querySelector(
          `[modal][data-modal-name="${modalName}"]`
        );
        if (!modal) {
          devLog(`Toggle failed: Modal "${modalName}" not found.`);
          return;
        }
        const newState = modal.dataset.active === "true" ? "false" : "true";
        if (newState === "false" && !isModalDismissible(modal)) {
          return;
        }
        devLog(`Toggling modal "${modalName}" to "${newState}".`);
        handleModalState(modalName, newState);
      },
      "Toggle"
    );
    document.querySelectorAll('[modal][data-auto-open="true"]').forEach((modal) => {
      const loginLink = modal.querySelector("#wishlist-login-required-link");
      if (loginLink instanceof HTMLAnchorElement) {
        const url = new URL(loginLink.href, window.location.origin);
        url.searchParams.set("redirect_to", window.location.href);
        loginLink.href = url.toString();
      }
      handleModalState(modal.dataset.modalName, "true");
    });
  }

  // node_modules/swiper/shared/ssr-window.esm.mjs
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target = {}, src = {}) {
    const noExtend = ["__proto__", "constructor", "prototype"];
    Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument2() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent2() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow2() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/swiper/shared/utils.mjs
  function classesToTokens(classes2 = "") {
    return classes2.trim().split(" ").filter((c6) => !!c6.trim());
  }
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e10) {
      }
      try {
        delete object[key];
      } catch (e10) {
      }
    });
  }
  function nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow2();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis = "x") {
    const window2 = getWindow2();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a7) => a7.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o9) {
    return typeof o9 === "object" && o9 !== null && o9.constructor && Object.prototype.toString.call(o9).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend2(...args) {
    const to = Object(args[0]);
    for (let i8 = 1; i8 < args.length; i8 += 1) {
      const nextSource = args[i8];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => key !== "__proto__" && key !== "constructor" && key !== "prototype");
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll({
    swiper,
    targetPosition,
    side
  }) {
    const window2 = getWindow2();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate2 = () => {
      time = (/* @__PURE__ */ new Date()).getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate2);
    };
    animate2();
  }
  function getSlideTransformEl(slideEl) {
    return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
  }
  function elementChildren(element, selector = "") {
    const window2 = getWindow2();
    const children = [...element.children];
    if (window2.HTMLSlotElement && element instanceof HTMLSlotElement) {
      children.push(...element.assignedElements());
    }
    if (!selector) {
      return children;
    }
    return children.filter((el) => el.matches(selector));
  }
  function elementIsChildOfSlot(el, slot) {
    const elementsQueue = [slot];
    while (elementsQueue.length > 0) {
      const elementToCheck = elementsQueue.shift();
      if (el === elementToCheck) {
        return true;
      }
      elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
    }
  }
  function elementIsChildOf(el, parent) {
    const window2 = getWindow2();
    let isChild = parent.contains(el);
    if (!isChild && window2.HTMLSlotElement && parent instanceof HTMLSlotElement) {
      const children = [...parent.assignedElements()];
      isChild = children.includes(el);
      if (!isChild) {
        isChild = elementIsChildOfSlot(el, parent);
      }
    }
    return isChild;
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
    }
  }
  function createElement(tag, classes2 = []) {
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
    return el;
  }
  function elementOffset(el) {
    const window2 = getWindow2();
    const document2 = getDocument2();
    const box = el.getBoundingClientRect();
    const body = document2.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
    const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  function elementPrevAll(el, selector) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector) {
        if (prev.matches(selector)) prevEls.push(prev);
      } else prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector) {
        if (next.matches(selector)) nextEls.push(next);
      } else nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window2 = getWindow2();
    return window2.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i8;
    if (child) {
      i8 = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i8 += 1;
      }
      return i8;
    }
    return void 0;
  }
  function elementParents(el, selector) {
    const parents = [];
    let parent = el.parentElement;
    while (parent) {
      if (selector) {
        if (parent.matches(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementTransitionEnd(el, callback) {
    function fireCallBack(e10) {
      if (e10.target !== el) return;
      callback.call(el, e10);
      el.removeEventListener("transitionend", fireCallBack);
    }
    if (callback) {
      el.addEventListener("transitionend", fireCallBack);
    }
  }
  function elementOuterSize(el, size, includeMargins) {
    const window2 = getWindow2();
    if (includeMargins) {
      return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    }
    return el.offsetWidth;
  }
  function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [el]).filter((e10) => !!e10);
  }
  function getRotateFix(swiper) {
    return (v4) => {
      if (Math.abs(v4) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v4) % 90 === 0) {
        return v4 + 1e-3;
      }
      return v4;
    };
  }
  function setInnerHTML(el, html = "") {
    if (typeof trustedTypes !== "undefined") {
      el.innerHTML = trustedTypes.createPolicy("html", {
        createHTML: (s11) => s11
      }).createHTML(html);
    } else {
      el.innerHTML = html;
    }
  }

  // node_modules/swiper/shared/swiper-core.mjs
  var support;
  function calcSupport() {
    const window2 = getWindow2();
    const document2 = getDocument2();
    return {
      smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice({
    userAgent
  } = {}) {
    const support3 = getSupport();
    const window2 = getWindow2();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support3.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides = {}) {
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    const window2 = getWindow2();
    const device = getDevice();
    let needPerspectiveFix = false;
    function isSafari() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
      const ua = String(window2.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
    const isSafariBrowser = isSafari();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
      isSafari: needPerspectiveFix || isSafariBrowser,
      needPerspectiveFix,
      need3dFix,
      isWebView
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize({
    swiper,
    on: on2,
    emit
  }) {
    const window2 = getWindow2();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach(({
            contentBoxSize,
            contentRect,
            target
          }) => {
            if (target && target !== swiper.el) return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("orientationchange");
    };
    on2("init", () => {
      if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on2("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }
  function Observer({
    swiper,
    extendParams,
    on: on2,
    emit
  }) {
    const observers = [];
    const window2 = getWindow2();
    const attach = (target, options = {}) => {
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (swiper.__preventObserver__) return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper.params.observer) return;
      if (swiper.params.observeParents) {
        const containerParents = elementParents(swiper.hostEl);
        for (let i8 = 0; i8 < containerParents.length; i8 += 1) {
          attach(containerParents[i8]);
        }
      }
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      });
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    const destroy2 = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on2("init", init);
    on2("destroy", destroy2);
  }
  var eventsEmitter = {
    on(events2, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== "function") return self;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self.eventsListeners[event2]) self.eventsListeners[event2] = [];
        self.eventsListeners[event2][method](handler);
      });
      return self;
    },
    once(events2, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== "function") return self;
      function onceHandler(...args) {
        self.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        handler.apply(self, args);
      }
      onceHandler.__emitterProxy = handler;
      return self.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== "function") return self;
      const method = priority ? "unshift" : "push";
      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }
      return self;
    },
    offAny(handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsAnyListeners) return self;
      const index = self.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }
      return self;
    },
    off(events2, handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self.eventsListeners[event2] = [];
        } else if (self.eventsListeners[event2]) {
          self.eventsListeners[event2].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event2].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit(...args) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      let events2;
      let data;
      let context;
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context, [event2, ...data]);
          });
        }
        if (self.eventsListeners && self.eventsListeners[event2]) {
          self.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  };
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
    height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      wrapperEl,
      slidesEl,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    const swiperSize = swiper.size - offsetBefore - offsetAfter;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween - offsetBefore - offsetAfter;
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    if (params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-slides-offset-before", `${offsetBefore}px`);
      setCSSProperty(wrapperEl, "--swiper-slides-offset-after", `${offsetAfter}px`);
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i8 = 0; i8 < slidesLength; i8 += 1) {
      slideSize = 0;
      const slide2 = slides[i8];
      if (slide2) {
        if (gridEnabled) {
          swiper.grid.updateSlide(i8, slide2, slides);
        }
        if (elementStyle(slide2, "display") === "none") continue;
      }
      if (isVirtual && params.slidesPerView === "auto") {
        if (params.virtual.slidesPerViewAutoSlideSize) {
          slideSize = params.virtual.slidesPerViewAutoSlideSize;
        }
        if (slideSize && slide2) {
          if (params.roundLengths) slideSize = Math.floor(slideSize);
          slide2.style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }
      } else if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slide2.style[swiper.getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide2);
        const currentTransform = slide2.style.transform;
        const currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform) {
          slide2.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        if (slide2) {
          slide2.style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slide2) {
        slide2.swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i8 !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i8 === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }
    if (!params.centeredSlides) {
      const isFractionalSlidesPerView = params.slidesPerView !== "auto" && params.slidesPerView % 1 !== 0;
      const shouldSnapToSlideEdge = params.snapToSlideEdge && !params.loop && (params.slidesPerView === "auto" || isFractionalSlidesPerView);
      let lastAllowedSnapIndex = snapGrid.length;
      if (shouldSnapToSlideEdge) {
        let minVisibleSlides;
        if (params.slidesPerView === "auto") {
          minVisibleSlides = 1;
          let accumulatedSize = 0;
          for (let i8 = slidesSizesGrid.length - 1; i8 >= 0; i8 -= 1) {
            accumulatedSize += slidesSizesGrid[i8] + (i8 < slidesSizesGrid.length - 1 ? spaceBetween : 0);
            if (accumulatedSize <= swiperSize) {
              minVisibleSlides = slidesSizesGrid.length - i8;
            } else {
              break;
            }
          }
        } else {
          minVisibleSlides = Math.floor(params.slidesPerView);
        }
        lastAllowedSnapIndex = Math.max(slidesLength - minVisibleSlides, 0);
      }
      const newSlidesGrid = [];
      for (let i8 = 0; i8 < snapGrid.length; i8 += 1) {
        let slidesGridItem = snapGrid[i8];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (shouldSnapToSlideEdge) {
          if (i8 <= lastAllowedSnapIndex) {
            newSlidesGrid.push(slidesGridItem);
          }
        } else if (snapGrid[i8] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        if (!shouldSnapToSlideEdge) {
          snapGrid.push(swiper.virtualSize - swiperSize);
        }
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i8 = 0; i8 < groups; i8 += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i8 = 0; i8 < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i8 += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
      slides.filter((_2, slideIndex) => {
        if (!params.cssMode || params.loop) return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach((slideEl) => {
        slideEl.style[key] = `${spaceBetween}px`;
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
      snapGrid = snapGrid.map((snap) => {
        if (snap <= 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      if (allSlidesSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v4) => v4 + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v4) => v4 + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    swiper.emit("slidesUpdated");
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i8;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i8 = 0; i8 < Math.ceil(swiper.params.slidesPerView); i8 += 1) {
          const index = swiper.activeIndex + i8;
          if (index > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i8 = 0; i8 < activeSlides.length; i8 += 1) {
      if (typeof activeSlides[i8] !== "undefined") {
        const height = activeSlides[i8].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (let i8 = 0; i8 < slides.length; i8 += 1) {
      slides[i8].swiperSlideOffset = (swiper.isHorizontal() ? slides[i8].offsetLeft : slides[i8].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }
  var toggleSlideClasses$1 = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesProgress(translate2 = this && this.translate || 0) {
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl) offsetCenter = translate2;
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i8 = 0; i8 < slides.length; i8 += 1) {
      const slide2 = slides[i8];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i8];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i8];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide2);
        swiper.visibleSlidesIndexes.push(i8);
      }
      toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
      toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate2) {
    const swiper = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded) progress = 0;
      if (isEndRounded) progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper.getSlideIndexByData(0);
      const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate2);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }
  var toggleSlideClasses = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector) => {
      return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
      } else {
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
        nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
        prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      if (!gridEnabled) {
        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
      }
    }
    slides.forEach((slideEl) => {
      toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
      toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
      toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
  }
  var processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        } else {
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
              if (lazyEl && !lazyEl.lazyPreloaderManaged) lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl && !lazyEl.lazyPreloaderManaged) lazyEl.remove();
    }
  };
  var unlazy = (swiper, index) => {
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute("loading");
  };
  var preload = (swiper) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_2, i8) => {
        return activeColumn + slidesPerView + i8;
      }));
      swiper.slides.forEach((slideEl, i8) => {
        if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i8);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (let i8 = activeIndex - amount; i8 <= slideIndexLastInView + amount; i8 += 1) {
        const realIndex = (i8 % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
      }
    } else {
      for (let i8 = Math.max(activeIndex - amount, 0); i8 <= Math.min(slideIndexLastInView + amount, len - 1); i8 += 1) {
        if (i8 !== activeIndex && (i8 > slideIndexLastInView || i8 < activeIndex)) {
          unlazy(swiper, i8);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper) {
    const {
      slidesGrid,
      params
    } = swiper;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for (let i8 = 0; i8 < slidesGrid.length; i8 += 1) {
      if (typeof slidesGrid[i8 + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i8] && translate2 < slidesGrid[i8 + 1] - (slidesGrid[i8 + 1] - slidesGrid[i8]) / 2) {
          activeIndex = i8;
        } else if (translate2 >= slidesGrid[i8] && translate2 < slidesGrid[i8 + 1]) {
          activeIndex = i8 + 1;
        }
      } else if (translate2 >= slidesGrid[i8]) {
        activeIndex = i8;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex2 = aIndex - swiper.virtual.slidesBefore;
      if (realIndex2 < 0) {
        realIndex2 = swiper.virtual.slides.length + realIndex2;
      }
      if (realIndex2 >= swiper.virtual.slides.length) {
        realIndex2 -= swiper.virtual.slides.length;
      }
      return realIndex2;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper.virtual && params.virtual.enabled) {
      if (params.loop) {
        realIndex = getVirtualRealIndex(activeIndex);
      } else {
        realIndex = activeIndex;
      }
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit("realIndexChange");
      }
      swiper.emit("slideChange");
    }
  }
  function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
          slide2 = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i8 = 0; i8 < swiper.slides.length; i8 += 1) {
        if (swiper.slides[i8] === slide2) {
          slideFound = true;
          slideIndex = i8;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper.clickedSlide = slide2;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };
  function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper;
    let x3 = 0;
    let y3 = 0;
    const z2 = 0;
    if (swiper.isHorizontal()) {
      x3 = rtl ? -translate2 : translate2;
    } else {
      y3 = translate2;
    }
    if (params.roundLengths) {
      x3 = Math.floor(x3);
      y3 = Math.floor(y3);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x3 : y3;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x3 : -y3;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x3 -= swiper.cssOverflowAdjustment();
      } else {
        y3 -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = `translate3d(${x3}px, ${y3}px, ${z2}px)`;
    }
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate2);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate2 = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;
    else newTranslate = translate2;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e10) {
            if (!swiper || swiper.destroyed) return;
            if (e10.target !== this) return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            swiper.animating = false;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper.emit("setTransition", duration, byController);
  }
  function transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step
  }) {
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = "next";
      else if (activeIndex < previousIndex) dir = "prev";
      else dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
    } else if (runCallbacks && activeIndex !== previousIndex) {
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }
  function transitionStart(runCallbacks = true, direction) {
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start"
    });
  }
  function transitionEnd(runCallbacks = true, direction) {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End"
    });
  }
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };
  function slideTo(index = 0, speed, runCallbacks = true, internal, initial) {
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i8 = 0; i8 < slidesGrid.length; i8 += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i8] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i8 + 1] * 100);
        if (typeof slidesGrid[i8 + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i8;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i8 + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i8;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    swiper.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset";
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const isInitialVirtual = isVirtual && initial;
    if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t9 = rtl ? translate2 : -translate2;
      if (speed === 0) {
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t9;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t9;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t9,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t9,
          behavior: "smooth"
        });
      }
      return true;
    }
    const browser3 = getBrowser();
    const isSafari = browser3.isSafari;
    if (isVirtual && !initial && isSafari && swiper.isElement) {
      swiper.virtual.update(false, false, slideIndex);
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e10) {
          if (!swiper || swiper.destroyed) return;
          if (e10.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index = 0, speed, runCallbacks = true, internal) {
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
        const {
          centeredSlides,
          slidesOffsetBefore,
          slidesOffsetAfter
        } = swiper.params;
        const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
        let slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
          if (bothDirections && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (bothDirections) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (internal && bothDirections && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
          needLoopFix = false;
        }
        if (needLoopFix) {
          const direction = bothDirections ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
          swiper.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper.realIndex : void 0
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }
  function slideNext(speed, runCallbacks = true, internal) {
    const swiper = this;
    const {
      enabled,
      params,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: "next"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks = true, internal) {
    const swiper = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: "prev"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    const isFreeMode = params.freeMode && params.freeMode.enabled;
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks = true, internal) {
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks = true, internal, threshold = 0.5) {
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate2 >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed) return;
    const {
      params,
      slidesEl
    } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        swiper.slideToLoop(realIndex);
      } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };
  function loopCreate(slideRealIndex, initial) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const clearBlankSlides = () => {
      const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);
      slides.forEach((el) => {
        el.remove();
      });
      if (slides.length > 0) {
        swiper.recalcSlides();
        swiper.updateSlides();
      }
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
      clearBlankSlides();
    }
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i8 = 0; i8 < amountOfSlides; i8 += 1) {
        const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else {
      initSlides();
    }
    const bothDirections = params.centeredSlides || !!params.slidesOffsetBefore || !!params.slidesOffsetAfter;
    swiper.loopFix({
      slideRealIndex,
      direction: bothDirections ? void 0 : "next",
      initial
    });
  }
  function loopFix({
    slideRealIndex,
    slideTo: slideTo2 = true,
    direction,
    setTranslate: setTranslate2,
    activeSlideIndex,
    initial,
    byController,
    byMousewheel
  } = {}) {
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit("beforeLoopFix");
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper;
    const {
      centeredSlides,
      slidesOffsetBefore,
      slidesOffsetAfter,
      initialSlide
    } = params;
    const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo2) {
        if (!bothDirections && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (bothDirections && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (bothDirections && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = bothDirections ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
      showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !bothDirections;
    let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (bothDirections && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i8 = 0; i8 < loopedSlides - activeColIndexWithShift; i8 += 1) {
        const index = i8 - Math.floor(i8 / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i9 = slides.length - 1; i9 >= 0; i9 -= 1) {
            if (slides[i9].column === colIndexToPrepend) prependSlidesIndexes.push(i9);
          }
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      if (isInitialOverflow) {
        slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
      }
      for (let i8 = 0; i8 < slidesAppended; i8 += 1) {
        const index = i8 - Math.floor(i8 / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide2, slideIndex) => {
            if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
    if (swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
      if (appendSlidesIndexes.includes(activeSlideIndex)) {
        appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
      }
      if (prependSlidesIndexes.includes(activeSlideIndex)) {
        prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
      }
    }
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper.slides.forEach((slide2, slideIndex) => {
        swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo2) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate2) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate: setTranslate2,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach((c6) => {
          if (!c6.destroyed && c6.params.loop) c6.loopFix({
            ...loopParams,
            slideTo: c6.params.slidesPerView === params.slidesPerView ? slideTo2 : false
          });
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix({
          ...loopParams,
          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      }
    }
    swiper.emit("loopFix");
  }
  function loopDestroy() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl) => {
      const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };
  function closestElement(selector, base = this) {
    function __closestFrom(el) {
      if (!el || el === getDocument2() || el === getWindow2()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event2, startX) {
    const window2 = getWindow2();
    const {
      params
    } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event2) {
    const swiper = this;
    if (swiper.destroyed) return;
    const document2 = getDocument2();
    let e10 = event2;
    if (e10.originalEvent) e10 = e10.originalEvent;
    const data = swiper.touchEventsData;
    if (e10.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e10.pointerId) {
        return;
      }
      data.pointerId = e10.pointerId;
    } else if (e10.type === "touchstart" && e10.targetTouches.length === 1) {
      data.touchId = e10.targetTouches[0].identifier;
    }
    if (e10.type === "touchstart") {
      preventEdgeSwipe(swiper, e10, e10.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e10.pointerType === "mouse") return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let targetEl = e10.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
    }
    if ("which" in e10 && e10.which === 3) return;
    if ("button" in e10 && e10.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = e10.composedPath ? e10.composedPath() : e10.path;
    if (swipingClassHasValue && e10.target && e10.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e10.target && e10.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e10.pageX;
    touches.currentY = e10.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    if (!preventEdgeSwipe(swiper, e10, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e10.pointerType === "mouse" || e10.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e10.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e10);
  }
  function onTouchMove(event2) {
    const document2 = getDocument2();
    const swiper = this;
    if (swiper.destroyed) return;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event2.pointerType === "mouse") return;
    let e10 = event2;
    if (e10.originalEvent) e10 = e10.originalEvent;
    if (e10.type === "pointermove") {
      if (data.touchId !== null) return;
      const id = e10.pointerId;
      if (id !== data.pointerId) return;
    }
    let targetTouch;
    if (e10.type === "touchmove") {
      targetTouch = [...e10.changedTouches].find((t9) => t9.identifier === data.touchId);
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else {
      targetTouch = e10;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e10);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e10.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e10.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
        return;
      } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
        return;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e10.target && e10.pointerType !== "mouse") {
      document2.activeElement.blur();
    }
    if (document2.activeElement) {
      if (e10.target === document2.activeElement && e10.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e10);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e10);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling || e10.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e10.cancelable) {
      e10.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e10.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true,
          detail: {
            bySwiperTouchMove: true
          }
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e10);
    }
    let loopFixed;
    (/* @__PURE__ */ new Date()).getTime();
    if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit("sliderMove", e10);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
        swiper.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
      }
    }
    if (disableParentSwiper) {
      e10.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) return;
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper = this;
    if (swiper.destroyed) return;
    const data = swiper.touchEventsData;
    let e10 = event2;
    if (e10.originalEvent) e10 = e10.originalEvent;
    let targetTouch;
    const isTouchEvent = e10.type === "touchend" || e10.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null) return;
      if (e10.pointerId !== data.pointerId) return;
      targetTouch = e10;
    } else {
      targetTouch = [...e10.changedTouches].find((t9) => t9.identifier === data.touchId);
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e10.type)) {
      const proceed = ["pointercancel", "contextmenu"].includes(e10.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e10.pointerType === "mouse") return;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e10);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e10.path || e10.composedPath && e10.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e10.target, pathTree);
      swiper.emit("tap click", e10);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e10);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i8 = 0; i8 < slidesGrid.length; i8 += i8 < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i8 < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i8 + increment2] !== "undefined") {
        if (swipeToLast || currentPos >= slidesGrid[i8] && currentPos < slidesGrid[i8 + increment2]) {
          stopIndex = i8;
          groupSize = slidesGrid[i8 + increment2] - slidesGrid[i8];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i8]) {
        stopIndex = i8;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
        else swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e10.target === swiper.navigation.nextEl || e10.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e10.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0) return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      const slides = isVirtual ? swiper.virtual.slides : swiper.slides;
      swiper.slideTo(slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e10) {
    const swiper = this;
    if (swiper.destroyed) return;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e10.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e10.stopPropagation();
        e10.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    if (swiper.destroyed) return;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }
  function onLoad(e10) {
    const swiper = this;
    if (swiper.destroyed) return;
    processLazyPreloader(swiper, e10.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }
  function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.destroyed) return;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = "auto";
    }
  }
  var events = (swiper, method) => {
    const document2 = getDocument2();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    if (!el || typeof el === "string") return;
    document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
      passive: false
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
      passive: false
    });
    document2[domMethod]("touchmove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("pointermove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("touchend", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerup", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointercancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("touchcancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerout", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerleave", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("contextmenu", swiper.onTouchEnd, {
      passive: true
    });
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
    el[domMethod]("load", swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };
  var isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper;
    const breakpoints2 = params.breakpoints;
    if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
    const document2 = getDocument2();
    const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
    const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document2.querySelector(params.breakpointsBase);
    const breakpoint = swiper.getBreakpoint(breakpoints2, breakpointsBase, breakpointContainer);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasGrabCursor = swiper.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) {
      swiper.unsetGrabCursor();
    } else if (!wasGrabCursor && isGrabCursor) {
      swiper.setGrabCursor();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined") return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend2(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base = "window", containerEl) {
    if (!breakpoints2 || base === "container" && !containerEl) return void 0;
    let breakpoint = false;
    const window2 = getWindow2();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a7, b3) => parseInt(a7.value, 10) - parseInt(b3.value, 10));
    for (let i8 = 0; i8 < points.length; i8 += 1) {
      const {
        point,
        value
      } = points[i8];
      if (base === "window") {
        if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "free-mode": swiper.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    const swiper = this;
    const {
      el,
      classNames
    } = swiper;
    if (!el || typeof el === "string") return;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses,
    removeClasses
  };
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };
  var defaults = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    snapToSlideEdge: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj = {}) {
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend2(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend2(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName]) params[moduleParamName] = {
        enabled: false
      };
      extend2(allModulesParams, obj);
    };
  }
  var prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  var extendedDefaults = {};
  var Swiper = class _Swiper {
    constructor(...args) {
      let el;
      let params;
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params) params = {};
      params = extend2({}, params);
      if (el && !params.el) params.el = el;
      const document2 = getDocument2();
      if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document2.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new _Swiper(newParams));
        });
        return swipers;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        params.modules.forEach((mod) => {
          if (typeof mod === "function" && swiper.modules.indexOf(mod) < 0) {
            swiper.modules.push(mod);
          }
        });
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          params,
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });
      const swiperParams = extend2({}, defaults, allModulesParams);
      swiper.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend2({}, swiper.params);
      swiper.passedParams = extend2({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index));
    }
    getSlideIndexWhenGrid(index) {
      if (this.grid && this.params.grid && this.params.grid.rows > 1) {
        if (this.params.grid.fill === "column") {
          index = Math.floor(index / this.params.grid.rows);
        } else if (this.params.grid.fill === "row") {
          index = index % Math.ceil(this.slides.length / this.params.grid.rows);
        }
      }
      return index;
    }
    recalcSlides() {
      const swiper = this;
      const {
        slidesEl,
        params
      } = swiper;
      swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
      const swiper = this;
      if (swiper.enabled) return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled) return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed) return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const updates = [];
      swiper.slides.forEach((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view = "current", exact = false) {
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (typeof params.slidesPerView === "number") return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
        let breakLoop;
        for (let i8 = activeIndex + 1; i8 < slides.length; i8 += 1) {
          if (slides[i8] && !breakLoop) {
            slideSize += Math.ceil(slides[i8].swiperSlideSize);
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
        for (let i8 = activeIndex - 1; i8 >= 0; i8 -= 1) {
          if (slides[i8] && !breakLoop) {
            slideSize += slides[i8].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i8 = activeIndex + 1; i8 < slides.length; i8 += 1) {
            const slideInView = exact ? slidesGrid[i8] + slidesSizesGrid[i8] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i8] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i8 = activeIndex - 1; i8 >= 0; i8 -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i8] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed) return;
      const {
        snapGrid,
        params
      } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        }
      });
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate2();
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
          const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
          translated = swiper.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate = true) {
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
      swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate) swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "rtl";
      } else {
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(element) {
      const swiper = this;
      if (swiper.mounted) return true;
      let el = element || swiper.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
        swiper.isElement = true;
      }
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper.params.createElements) {
        wrapperEl = createElement("div", swiper.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        el,
        wrapperEl,
        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized) return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false) return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      if (swiper.params.loop) {
        swiper.loopCreate(void 0, true);
      }
      swiper.attachEvents();
      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
      if (swiper.isElement) {
        lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        } else {
          imageEl.addEventListener("load", (e10) => {
            processLazyPreloader(swiper, e10.target);
          });
        }
      });
      preload(swiper);
      swiper.initialized = true;
      preload(swiper);
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance = true, cleanStyles = true) {
      const swiper = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        if (el && typeof el !== "string") {
          el.removeAttribute("style");
        }
        if (wrapperEl) {
          wrapperEl.removeAttribute("style");
        }
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        if (swiper.el && typeof swiper.el !== "string") {
          swiper.el.swiper = null;
        }
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      if (!_Swiper.prototype.__modules__) _Swiper.prototype.__modules__ = [];
      const modules2 = _Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules2.indexOf(mod) < 0) {
        modules2.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m4) => _Swiper.installModule(m4));
        return _Swiper;
      }
      _Swiper.installModule(module);
      return _Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);

  // node_modules/swiper/modules/virtual.mjs
  function Virtual({
    swiper,
    extendParams,
    on: on2,
    emit
  }) {
    extendParams({
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        slidesPerViewAutoSlideSize: 320,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: true,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    });
    let cssModeTimeout;
    const document2 = getDocument2();
    swiper.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    };
    const tempDOM = document2.createElement("div");
    function renderSlide(slide2, index) {
      const params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      let slideEl;
      if (params.renderSlide) {
        slideEl = params.renderSlide.call(swiper, slide2, index);
        if (typeof slideEl === "string") {
          setInnerHTML(tempDOM, slideEl);
          slideEl = tempDOM.children[0];
        }
      } else if (swiper.isElement) {
        slideEl = createElement("swiper-slide");
      } else {
        slideEl = createElement("div", swiper.params.slideClass);
      }
      slideEl.setAttribute("data-swiper-slide-index", index);
      if (!params.renderSlide) {
        setInnerHTML(slideEl, slide2);
      }
      if (params.cache) {
        swiper.virtual.cache[index] = slideEl;
      }
      return slideEl;
    }
    function update2(force, beforeInit, forceActiveIndex) {
      const {
        slidesPerGroup,
        centeredSlides,
        slidesPerView,
        loop: isLoop,
        initialSlide
      } = swiper.params;
      if (beforeInit && !isLoop && initialSlide > 0) {
        return;
      }
      const {
        addSlidesBefore,
        addSlidesAfter,
        slidesPerViewAutoSlideSize
      } = swiper.params.virtual;
      const {
        from: previousFrom,
        to: previousTo,
        slides,
        slidesGrid: previousSlidesGrid,
        offset: previousOffset
      } = swiper.virtual;
      if (!swiper.params.cssMode) {
        swiper.updateActiveIndex();
      }
      const activeIndex = typeof forceActiveIndex === "undefined" ? swiper.activeIndex || 0 : forceActiveIndex;
      let offsetProp;
      if (swiper.rtlTranslate) offsetProp = "right";
      else offsetProp = swiper.isHorizontal() ? "left" : "top";
      let slidesPerViewNumeric;
      if (slidesPerView === "auto") {
        if (slidesPerViewAutoSlideSize) {
          let swiperSize = swiper.size;
          if (!swiperSize) {
            swiperSize = swiper.isHorizontal() ? swiper.el.getBoundingClientRect().width : swiper.el.getBoundingClientRect().height;
          }
          slidesPerViewNumeric = Math.max(1, Math.ceil(swiperSize / slidesPerViewAutoSlideSize));
        } else {
          slidesPerViewNumeric = 1;
        }
      } else {
        slidesPerViewNumeric = slidesPerView;
      }
      let slidesAfter;
      let slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerViewNumeric / 2) + slidesPerGroup + addSlidesAfter;
        slidesBefore = Math.floor(slidesPerViewNumeric / 2) + slidesPerGroup + addSlidesBefore;
      } else {
        slidesAfter = slidesPerViewNumeric + (slidesPerGroup - 1) + addSlidesAfter;
        slidesBefore = (isLoop ? slidesPerViewNumeric : slidesPerGroup) + addSlidesBefore;
      }
      let from = activeIndex - slidesBefore;
      let to = activeIndex + slidesAfter;
      if (!isLoop) {
        from = Math.max(from, 0);
        to = Math.min(to, slides.length - 1);
      }
      let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      if (isLoop && activeIndex >= slidesBefore) {
        from -= slidesBefore;
        if (!centeredSlides) offset += swiper.slidesGrid[0];
      } else if (isLoop && activeIndex < slidesBefore) {
        from = -slidesBefore;
        if (centeredSlides) offset += swiper.slidesGrid[0];
      }
      Object.assign(swiper.virtual, {
        from,
        to,
        offset,
        slidesGrid: swiper.slidesGrid,
        slidesBefore,
        slidesAfter
      });
      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        emit("virtualUpdate");
      }
      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.forEach((slideEl) => {
            slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
          });
        }
        swiper.updateProgress();
        emit("virtualUpdate");
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset,
          from,
          to,
          slides: (function getSlides() {
            const slidesToRender = [];
            for (let i8 = from; i8 <= to; i8 += 1) {
              slidesToRender.push(slides[i8]);
            }
            return slidesToRender;
          })()
        });
        if (swiper.params.virtual.renderExternalUpdate) {
          onRendered();
        } else {
          emit("virtualUpdate");
        }
        return;
      }
      const prependIndexes = [];
      const appendIndexes = [];
      const getSlideIndex = (index) => {
        let slideIndex = index;
        if (index < 0) {
          slideIndex = slides.length + index;
        } else if (slideIndex >= slides.length) {
          slideIndex = slideIndex - slides.length;
        }
        return slideIndex;
      };
      if (force) {
        swiper.slides.filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach((slideEl) => {
          slideEl.remove();
        });
      } else {
        for (let i8 = previousFrom; i8 <= previousTo; i8 += 1) {
          if (i8 < from || i8 > to) {
            const slideIndex = getSlideIndex(i8);
            swiper.slides.filter((el) => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach((slideEl) => {
              slideEl.remove();
            });
          }
        }
      }
      const loopFrom = isLoop ? -slides.length : 0;
      const loopTo = isLoop ? slides.length * 2 : slides.length;
      for (let i8 = loopFrom; i8 < loopTo; i8 += 1) {
        if (i8 >= from && i8 <= to) {
          const slideIndex = getSlideIndex(i8);
          if (typeof previousTo === "undefined" || force) {
            appendIndexes.push(slideIndex);
          } else {
            if (i8 > previousTo) appendIndexes.push(slideIndex);
            if (i8 < previousFrom) prependIndexes.push(slideIndex);
          }
        }
      }
      appendIndexes.forEach((index) => {
        swiper.slidesEl.append(renderSlide(slides[index], index));
      });
      if (isLoop) {
        for (let i8 = prependIndexes.length - 1; i8 >= 0; i8 -= 1) {
          const index = prependIndexes[i8];
          swiper.slidesEl.prepend(renderSlide(slides[index], index));
        }
      } else {
        prependIndexes.sort((a7, b3) => b3 - a7);
        prependIndexes.forEach((index) => {
          swiper.slidesEl.prepend(renderSlide(slides[index], index));
        });
      }
      elementChildren(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl) => {
        slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
      });
      onRendered();
    }
    function appendSlide2(slides) {
      if (typeof slides === "object" && "length" in slides) {
        for (let i8 = 0; i8 < slides.length; i8 += 1) {
          if (slides[i8]) swiper.virtual.slides.push(slides[i8]);
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      update2(true);
    }
    function prependSlide2(slides) {
      const activeIndex = swiper.activeIndex;
      let newActiveIndex = activeIndex + 1;
      let numberOfNewSlides = 1;
      if (Array.isArray(slides)) {
        for (let i8 = 0; i8 < slides.length; i8 += 1) {
          if (slides[i8]) swiper.virtual.slides.unshift(slides[i8]);
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        const cache = swiper.virtual.cache;
        const newCache = {};
        Object.keys(cache).forEach((cachedIndex) => {
          const cachedEl = cache[cachedIndex];
          const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
          if (cachedElIndex) {
            cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
        });
        swiper.virtual.cache = newCache;
      }
      update2(true);
      swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide2(slidesIndexes) {
      if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
      let activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (let i8 = slidesIndexes.length - 1; i8 >= 0; i8 -= 1) {
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i8]];
            Object.keys(swiper.virtual.cache).forEach((key) => {
              if (key > slidesIndexes) {
                swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
                delete swiper.virtual.cache[key];
              }
            });
          }
          swiper.virtual.slides.splice(slidesIndexes[i8], 1);
          if (slidesIndexes[i8] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
          Object.keys(swiper.virtual.cache).forEach((key) => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
      update2(true);
      swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides2() {
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      update2(true);
      swiper.slideTo(0, 0);
    }
    on2("beforeInit", () => {
      if (!swiper.params.virtual.enabled) return;
      let domSlidesAssigned;
      if (typeof swiper.passedParams.virtual.slides === "undefined") {
        const slides = [...swiper.slidesEl.children].filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
        if (slides && slides.length) {
          swiper.virtual.slides = [...slides];
          domSlidesAssigned = true;
          slides.forEach((slideEl, slideIndex) => {
            slideEl.setAttribute("data-swiper-slide-index", slideIndex);
            swiper.virtual.cache[slideIndex] = slideEl;
            slideEl.remove();
          });
        }
      }
      if (!domSlidesAssigned) {
        swiper.virtual.slides = swiper.params.virtual.slides;
      }
      swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
      update2(false, true);
    });
    on2("setTranslate", () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode && !swiper._immediateVirtual) {
        clearTimeout(cssModeTimeout);
        cssModeTimeout = setTimeout(() => {
          update2();
        }, 100);
      } else {
        update2();
      }
    });
    on2("init update resize", () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode) {
        setCSSProperty(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
      }
    });
    Object.assign(swiper.virtual, {
      appendSlide: appendSlide2,
      prependSlide: prependSlide2,
      removeSlide: removeSlide2,
      removeAllSlides: removeAllSlides2,
      update: update2
    });
  }

  // node_modules/swiper/modules/keyboard.mjs
  function Keyboard({
    swiper,
    extendParams,
    on: on2,
    emit
  }) {
    const document2 = getDocument2();
    const window2 = getWindow2();
    swiper.keyboard = {
      enabled: false
    };
    extendParams({
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true,
        speed: void 0
      }
    });
    function handle(event2) {
      if (!swiper.enabled) return;
      const {
        rtlTranslate: rtl
      } = swiper;
      let e10 = event2;
      if (e10.originalEvent) e10 = e10.originalEvent;
      const kc = e10.keyCode || e10.charCode;
      const pageUpDown = swiper.params.keyboard.pageUpDown;
      const isPageUp = pageUpDown && kc === 33;
      const isPageDown = pageUpDown && kc === 34;
      const isArrowLeft = kc === 37;
      const isArrowRight = kc === 39;
      const isArrowUp = kc === 38;
      const isArrowDown = kc === 40;
      if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
        return false;
      }
      if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
        return false;
      }
      if (e10.shiftKey || e10.altKey || e10.ctrlKey || e10.metaKey) {
        return void 0;
      }
      if (document2.activeElement && (document2.activeElement.isContentEditable || document2.activeElement.nodeName && (document2.activeElement.nodeName.toLowerCase() === "input" || document2.activeElement.nodeName.toLowerCase() === "textarea"))) {
        return void 0;
      }
      if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
        let inView = false;
        if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
          return void 0;
        }
        const el = swiper.el;
        const swiperWidth = el.clientWidth;
        const swiperHeight = el.clientHeight;
        const windowWidth = window2.innerWidth;
        const windowHeight = window2.innerHeight;
        const swiperOffset = elementOffset(el);
        if (rtl) swiperOffset.left -= el.scrollLeft;
        const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
        for (let i8 = 0; i8 < swiperCoord.length; i8 += 1) {
          const point = swiperCoord[i8];
          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            if (point[0] === 0 && point[1] === 0) continue;
            inView = true;
          }
        }
        if (!inView) return void 0;
      }
      const speed = swiper.params.keyboard.speed;
      if (swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e10.preventDefault) e10.preventDefault();
          else e10.returnValue = false;
        }
        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext(speed);
        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev(speed);
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e10.preventDefault) e10.preventDefault();
          else e10.returnValue = false;
        }
        if (isPageDown || isArrowDown) swiper.slideNext(speed);
        if (isPageUp || isArrowUp) swiper.slidePrev(speed);
      }
      emit("keyPress", kc);
      return void 0;
    }
    function enable() {
      if (swiper.keyboard.enabled) return;
      document2.addEventListener("keydown", handle);
      swiper.keyboard.enabled = true;
    }
    function disable() {
      if (!swiper.keyboard.enabled) return;
      document2.removeEventListener("keydown", handle);
      swiper.keyboard.enabled = false;
    }
    on2("init", () => {
      if (swiper.params.keyboard.enabled) {
        enable();
      }
    });
    on2("destroy", () => {
      if (swiper.keyboard.enabled) {
        disable();
      }
    });
    Object.assign(swiper.keyboard, {
      enable,
      disable
    });
  }

  // node_modules/swiper/modules/mousewheel.mjs
  function Mousewheel({
    swiper,
    extendParams,
    on: on2,
    emit
  }) {
    const window2 = getWindow2();
    extendParams({
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: "swiper-no-mousewheel"
      }
    });
    swiper.mousewheel = {
      enabled: false
    };
    let timeout;
    let lastScrollTime = now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e10) {
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;
      let sX = 0;
      let sY = 0;
      let pX = 0;
      let pY = 0;
      if ("detail" in e10) {
        sY = e10.detail;
      }
      if ("wheelDelta" in e10) {
        sY = -e10.wheelDelta / 120;
      }
      if ("wheelDeltaY" in e10) {
        sY = -e10.wheelDeltaY / 120;
      }
      if ("wheelDeltaX" in e10) {
        sX = -e10.wheelDeltaX / 120;
      }
      if ("axis" in e10 && e10.axis === e10.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ("deltaY" in e10) {
        pY = e10.deltaY;
      }
      if ("deltaX" in e10) {
        pX = e10.deltaX;
      }
      if (e10.shiftKey && !pX) {
        pX = pY;
        pY = 0;
      }
      if ((pX || pY) && e10.deltaMode) {
        if (e10.deltaMode === 1) {
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    }
    function handleMouseEnter() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
      if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
        return false;
      }
      if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
        return false;
      }
      if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
        return true;
      }
      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          emit("scroll", newEvent.raw);
        }
      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
        swiper.slidePrev();
        emit("scroll", newEvent.raw);
      }
      lastScrollTime = new window2.Date().getTime();
      return false;
    }
    function releaseScroll(newEvent) {
      const params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          return true;
        }
      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
      return false;
    }
    function handle(event2) {
      let e10 = event2;
      let disableParentSwiper = true;
      if (!swiper.enabled) return;
      if (event2.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
      const params = swiper.params.mousewheel;
      if (swiper.params.cssMode) {
        e10.preventDefault();
      }
      let targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
      }
      const targetElContainsTarget = targetEl && targetEl.contains(e10.target);
      if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
      if (e10.originalEvent) e10 = e10.originalEvent;
      let delta = 0;
      const rtlFactor = swiper.rtlTranslate ? -1 : 1;
      const data = normalize(e10);
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
          else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
        else return true;
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }
      if (delta === 0) return true;
      if (params.invert) delta = -delta;
      let positions = swiper.getTranslate() + delta * params.sensitivity;
      if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
      if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
      disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
      if (disableParentSwiper && swiper.params.nested) e10.stopPropagation();
      if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event2
        };
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift();
        }
        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
        recentWheelEvents.push(newEvent);
        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
            animateSlider(newEvent);
          }
        } else {
          animateSlider(newEvent);
        }
        if (releaseScroll(newEvent)) {
          return true;
        }
      } else {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta)
        };
        const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          lastEventBeforeSnap = void 0;
          let position = swiper.getTranslate() + delta * params.sensitivity;
          const wasBeginning = swiper.isBeginning;
          const wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate()) position = swiper.minTranslate();
          if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
            swiper.updateSlidesClasses();
          }
          if (swiper.params.loop) {
            swiper.loopFix({
              direction: newEvent.direction < 0 ? "next" : "prev",
              byMousewheel: true
            });
          }
          if (swiper.params.freeMode.sticky) {
            clearTimeout(timeout);
            timeout = void 0;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift();
            }
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
            const firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(newEvent);
            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
              recentWheelEvents.splice(0);
            } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
              const snapToThreshold = delta > 0 ? 0.8 : 0.2;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              timeout = nextTick(() => {
                if (swiper.destroyed || !swiper.params) return;
                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
              }, 0);
            }
            if (!timeout) {
              timeout = nextTick(() => {
                if (swiper.destroyed || !swiper.params) return;
                const snapToThreshold = 0.5;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
              }, 500);
            }
          }
          if (!ignoreWheelEvents) emit("scroll", e10);
          if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
          if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
            return true;
          }
        }
      }
      if (e10.preventDefault) e10.preventDefault();
      else e10.returnValue = false;
      return false;
    }
    function events2(method) {
      let targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
      }
      targetEl[method]("mouseenter", handleMouseEnter);
      targetEl[method]("mouseleave", handleMouseLeave);
      targetEl[method]("wheel", handle);
    }
    function enable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener("wheel", handle);
        return true;
      }
      if (swiper.mousewheel.enabled) return false;
      events2("addEventListener");
      swiper.mousewheel.enabled = true;
      return true;
    }
    function disable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, handle);
        return true;
      }
      if (!swiper.mousewheel.enabled) return false;
      events2("removeEventListener");
      swiper.mousewheel.enabled = false;
      return true;
    }
    on2("init", () => {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        disable();
      }
      if (swiper.params.mousewheel.enabled) enable();
    });
    on2("destroy", () => {
      if (swiper.params.cssMode) {
        enable();
      }
      if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
      enable,
      disable
    });
  }

  // node_modules/swiper/shared/create-element-if-not-defined.mjs
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
          if (!element) {
            element = createElement("div", checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/swiper/modules/navigation.mjs
  var arrowSvg = `<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>`;
  function Navigation({
    swiper,
    extendParams,
    on: on2,
    emit
  }) {
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        addIcons: true,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    });
    swiper.navigation = {
      nextEl: null,
      prevEl: null,
      arrowSvg
    };
    function getEl(el) {
      let res;
      if (el && typeof el === "string" && swiper.isElement) {
        res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
        if (res) return res;
      }
      if (el) {
        if (typeof el === "string") res = [...document.querySelectorAll(el)];
        if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
          res = swiper.el.querySelector(el);
        } else if (res && res.length === 1) {
          res = res[0];
        }
      }
      if (el && !res) return el;
      return res;
    }
    function toggleEl(el, disabled) {
      const params = swiper.params.navigation;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (subEl) {
          subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
          if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
          }
        }
      });
    }
    function update2() {
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (swiper.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e10) {
      e10.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slidePrev();
      emit("navigationPrev");
    }
    function onNextClick(e10) {
      e10.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slideNext();
      emit("navigationNext");
    }
    function init() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      });
      if (!(params.nextEl || params.prevEl)) return;
      let nextEl = getEl(params.nextEl);
      let prevEl = getEl(params.prevEl);
      Object.assign(swiper.navigation, {
        nextEl,
        prevEl
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const initButton = (el, dir) => {
        if (el) {
          if (params.addIcons && el.matches(".swiper-button-next,.swiper-button-prev") && !el.querySelector("svg")) {
            const tempEl = document.createElement("div");
            setInnerHTML(tempEl, arrowSvg);
            el.appendChild(tempEl.querySelector("svg"));
            tempEl.remove();
          }
          el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        }
        if (!swiper.enabled && el) {
          el.classList.add(...params.lockClass.split(" "));
        }
      };
      nextEl.forEach((el) => initButton(el, "next"));
      prevEl.forEach((el) => initButton(el, "prev"));
    }
    function destroy2() {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const destroyButton = (el, dir) => {
        el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
      };
      nextEl.forEach((el) => destroyButton(el, "next"));
      prevEl.forEach((el) => destroyButton(el, "prev"));
    }
    on2("init", () => {
      if (swiper.params.navigation.enabled === false) {
        disable();
      } else {
        init();
        update2();
      }
    });
    on2("toEdge fromEdge lock unlock", () => {
      update2();
    });
    on2("destroy", () => {
      destroy2();
    });
    on2("enable disable", () => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (swiper.enabled) {
        update2();
        return;
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
    });
    on2("click", (_s, e10) => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const targetEl = e10.target;
      let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
      if (swiper.isElement && !targetIsButton) {
        const path = e10.path || e10.composedPath && e10.composedPath();
        if (path) {
          targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
        }
      }
      if (swiper.params.navigation.hideOnClick && !targetIsButton) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        let isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
      init();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
      destroy2();
    };
    Object.assign(swiper.navigation, {
      enable,
      disable,
      update: update2,
      init,
      destroy: destroy2
    });
  }

  // node_modules/swiper/shared/classes-to-selector.mjs
  function classesToSelector(classes2 = "") {
    return `.${classes2.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
  }

  // node_modules/swiper/modules/pagination.mjs
  function Pagination({
    swiper,
    extendParams,
    on: on2,
    emit
  }) {
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: `${pfx}-bullet`,
        bulletActiveClass: `${pfx}-bullet-active`,
        modifierClass: `${pfx}-`,
        currentClass: `${pfx}-current`,
        totalClass: `${pfx}-total`,
        hiddenClass: `${pfx}-hidden`,
        progressbarFillClass: `${pfx}-progressbar-fill`,
        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
        clickableClass: `${pfx}-clickable`,
        lockClass: `${pfx}-lock`,
        horizontalClass: `${pfx}-horizontal`,
        verticalClass: `${pfx}-vertical`,
        paginationDisabledClass: `${pfx}-disabled`
      }
    });
    swiper.pagination = {
      el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
      const {
        bulletActiveClass
      } = swiper.params.pagination;
      if (!bulletEl) return;
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}`);
        bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
        if (bulletEl) {
          bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
        }
      }
    }
    function getMoveDirection(prevIndex, nextIndex, length) {
      prevIndex = prevIndex % length;
      nextIndex = nextIndex % length;
      if (nextIndex === prevIndex + 1) {
        return "next";
      } else if (nextIndex === prevIndex - 1) {
        return "previous";
      }
      return;
    }
    function onBulletClick(e10) {
      const bulletEl = e10.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
      if (!bulletEl) {
        return;
      }
      e10.preventDefault();
      const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
      if (swiper.params.loop) {
        if (swiper.realIndex === index) return;
        const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
        if (moveDirection === "next") {
          swiper.slideNext();
        } else if (moveDirection === "previous") {
          swiper.slidePrev();
        } else {
          swiper.slideToLoop(index);
        }
      } else {
        swiper.slideTo(index);
      }
    }
    function update2() {
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let current;
      let previousIndex;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        previousIndex = swiper.previousRealIndex || 0;
        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
        previousIndex = swiper.previousSnapIndex;
      } else {
        previousIndex = swiper.previousIndex || 0;
        current = swiper.activeIndex || 0;
      }
      if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
          el.forEach((subEl) => {
            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach((bulletEl) => {
          const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s11) => typeof s11 === "string" && s11.includes(" ") ? s11.split(" ") : s11).flat();
          bulletEl.classList.remove(...classesToRemove);
        });
        if (el.length > 1) {
          bullets.forEach((bullet) => {
            const bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              bullet.classList.add(...params.bulletActiveClass.split(" "));
            } else if (swiper.isElement) {
              bullet.setAttribute("part", "bullet");
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, "next");
              }
            }
          });
        } else {
          const bullet = bullets[current];
          if (bullet) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          }
          if (swiper.isElement) {
            bullets.forEach((bulletEl, bulletIndex) => {
              bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
            });
          }
          if (params.dynamicBullets) {
            const firstDisplayedBullet = bullets[firstIndex];
            const lastDisplayedBullet = bullets[lastIndex];
            for (let i8 = firstIndex; i8 <= lastIndex; i8 += 1) {
              if (bullets[i8]) {
                bullets[i8].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
              }
            }
            setSideBullets(firstDisplayedBullet, "prev");
            setSideBullets(lastDisplayedBullet, "next");
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.forEach((bullet) => {
            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
          });
        }
      }
      el.forEach((subEl, subElIndex) => {
        if (params.type === "fraction") {
          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
            fractionEl.textContent = params.formatFractionCurrent(current + 1);
          });
          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
            totalEl.textContent = params.formatFractionTotal(total);
          });
        }
        if (params.type === "progressbar") {
          let progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
          } else {
            progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
          }
          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;
          if (progressbarDirection === "horizontal") {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
          });
        }
        if (params.type === "custom" && params.renderCustom) {
          setInnerHTML(subEl, params.renderCustom(swiper, current + 1, total));
          if (subElIndex === 0) emit("paginationRender", subEl);
        } else {
          if (subElIndex === 0) emit("paginationRender", subEl);
          emit("paginationUpdate", subEl);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      });
    }
    function render() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i8 = 0; i8 < numberOfBullets; i8 += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i8, params.bulletClass);
          } else {
            paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
          }
        }
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
        }
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
      }
      swiper.pagination.bullets = [];
      el.forEach((subEl) => {
        if (params.type !== "custom") {
          setInnerHTML(subEl, paginationHTML || "");
        }
        if (params.type === "bullets") {
          swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
        }
      });
      if (params.type !== "custom") {
        emit("paginationRender", el[0]);
      }
    }
    function init() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: "swiper-pagination"
      });
      const params = swiper.params.pagination;
      if (!params.el) return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = [...document.querySelectorAll(params.el)];
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0) return;
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
        el = [...swiper.el.querySelectorAll(params.el)];
        if (el.length > 1) {
          el = el.find((subEl) => {
            if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
            return true;
          });
        }
      }
      if (Array.isArray(el) && el.length === 1) el = el[0];
      Object.assign(swiper.pagination, {
        el
      });
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (params.type === "bullets" && params.clickable) {
          subEl.classList.add(...(params.clickableClass || "").split(" "));
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === "bullets" && params.dynamicBullets) {
          subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === "progressbar" && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener("click", onBulletClick);
        }
        if (!swiper.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy2() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.clickable) {
            subEl.classList.remove(...(params.clickableClass || "").split(" "));
            subEl.removeEventListener("click", onBulletClick);
          }
        });
      }
      if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
    }
    on2("changeDirection", () => {
      if (!swiper.pagination || !swiper.pagination.el) return;
      const params = swiper.params.pagination;
      let {
        el
      } = swiper.pagination;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on2("init", () => {
      if (swiper.params.pagination.enabled === false) {
        disable();
      } else {
        init();
        render();
        update2();
      }
    });
    on2("activeIndexChange", () => {
      if (typeof swiper.snapIndex === "undefined") {
        update2();
      }
    });
    on2("snapIndexChange", () => {
      update2();
    });
    on2("snapGridLengthChange", () => {
      render();
      update2();
    });
    on2("destroy", () => {
      destroy2();
    });
    on2("enable disable", () => {
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
      }
    });
    on2("lock unlock", () => {
      update2();
    });
    on2("click", (_s, e10) => {
      const targetEl = e10.target;
      const el = makeElementsArray(swiper.pagination.el);
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
      }
      init();
      render();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
      }
      destroy2();
    };
    Object.assign(swiper.pagination, {
      enable,
      disable,
      render,
      update: update2,
      init,
      destroy: destroy2
    });
  }

  // node_modules/swiper/modules/scrollbar.mjs
  function Scrollbar({
    swiper,
    extendParams,
    on: on2,
    emit
  }) {
    const document2 = getDocument2();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: `swiper-scrollbar-horizontal`,
        verticalClass: `swiper-scrollbar-vertical`
      }
    });
    swiper.scrollbar = {
      el: null,
      dragEl: null
    };
    function setTranslate2() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const {
        scrollbar,
        rtlTranslate: rtl
      } = swiper;
      const {
        dragEl,
        el
      } = scrollbar;
      const params = swiper.params.scrollbar;
      const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
      let newSize = dragSize;
      let newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
        dragEl.style.width = `${newSize}px`;
      } else {
        dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
        dragEl.style.height = `${newSize}px`;
      }
      if (params.hide) {
        clearTimeout(timeout);
        el.style.opacity = 1;
        timeout = setTimeout(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = "400ms";
        }, 1e3);
      }
    }
    function setTransition2(duration) {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
    }
    function updateSize2() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const {
        scrollbar
      } = swiper;
      const {
        dragEl,
        el
      } = scrollbar;
      dragEl.style.width = "";
      dragEl.style.height = "";
      trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
      divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
      if (swiper.params.scrollbar.dragSize === "auto") {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
      if (swiper.isHorizontal()) {
        dragEl.style.width = `${dragSize}px`;
      } else {
        dragEl.style.height = `${dragSize}px`;
      }
      if (divider >= 1) {
        el.style.display = "none";
      } else {
        el.style.display = "";
      }
      if (swiper.params.scrollbar.hide) {
        el.style.opacity = 0;
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
      }
    }
    function getPointerPosition(e10) {
      return swiper.isHorizontal() ? e10.clientX : e10.clientY;
    }
    function setDragPosition(e10) {
      const {
        scrollbar,
        rtlTranslate: rtl
      } = swiper;
      const {
        el
      } = scrollbar;
      let positionRatio;
      positionRatio = (getPointerPosition(e10) - elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    function onDragStart(e10) {
      const params = swiper.params.scrollbar;
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el,
        dragEl
      } = scrollbar;
      isTouched = true;
      dragStartPos = e10.target === dragEl ? getPointerPosition(e10) - e10.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
      e10.preventDefault();
      e10.stopPropagation();
      wrapperEl.style.transitionDuration = "100ms";
      dragEl.style.transitionDuration = "100ms";
      setDragPosition(e10);
      clearTimeout(dragTimeout);
      el.style.transitionDuration = "0ms";
      if (params.hide) {
        el.style.opacity = 1;
      }
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style["scroll-snap-type"] = "none";
      }
      emit("scrollbarDragStart", e10);
    }
    function onDragMove(e10) {
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el,
        dragEl
      } = scrollbar;
      if (!isTouched) return;
      if (e10.preventDefault && e10.cancelable) e10.preventDefault();
      else e10.returnValue = false;
      setDragPosition(e10);
      wrapperEl.style.transitionDuration = "0ms";
      el.style.transitionDuration = "0ms";
      dragEl.style.transitionDuration = "0ms";
      emit("scrollbarDragMove", e10);
    }
    function onDragEnd(e10) {
      const params = swiper.params.scrollbar;
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el
      } = scrollbar;
      if (!isTouched) return;
      isTouched = false;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style["scroll-snap-type"] = "";
        wrapperEl.style.transitionDuration = "";
      }
      if (params.hide) {
        clearTimeout(dragTimeout);
        dragTimeout = nextTick(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = "400ms";
        }, 1e3);
      }
      emit("scrollbarDragEnd", e10);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    }
    function events2(method) {
      const {
        scrollbar,
        params
      } = swiper;
      const el = scrollbar.el;
      if (!el) return;
      const target = el;
      const activeListener = params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      const passiveListener = params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      if (!target) return;
      const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
      target[eventMethod]("pointerdown", onDragStart, activeListener);
      document2[eventMethod]("pointermove", onDragMove, activeListener);
      document2[eventMethod]("pointerup", onDragEnd, passiveListener);
    }
    function enableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events2("on");
    }
    function disableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events2("off");
    }
    function init() {
      const {
        scrollbar,
        el: swiperEl
      } = swiper;
      swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      const params = swiper.params.scrollbar;
      if (!params.el) return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = document2.querySelectorAll(params.el);
        if (!el.length) return;
      } else if (!el) {
        el = params.el;
      }
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
        el = swiperEl.querySelector(params.el);
      }
      if (el.length > 0) el = el[0];
      el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      let dragEl;
      if (el) {
        dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
        if (!dragEl) {
          dragEl = createElement("div", swiper.params.scrollbar.dragClass);
          el.append(dragEl);
        }
      }
      Object.assign(scrollbar, {
        el,
        dragEl
      });
      if (params.draggable) {
        enableDraggable();
      }
      if (el) {
        el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
      }
    }
    function destroy2() {
      const params = swiper.params.scrollbar;
      const el = swiper.scrollbar.el;
      if (el) {
        el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
      }
      disableDraggable();
    }
    on2("changeDirection", () => {
      if (!swiper.scrollbar || !swiper.scrollbar.el) return;
      const params = swiper.params.scrollbar;
      let {
        el
      } = swiper.scrollbar;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on2("init", () => {
      if (swiper.params.scrollbar.enabled === false) {
        disable();
      } else {
        init();
        updateSize2();
        setTranslate2();
      }
    });
    on2("update resize observerUpdate lock unlock changeDirection", () => {
      updateSize2();
    });
    on2("setTranslate", () => {
      setTranslate2();
    });
    on2("setTransition", (_s, duration) => {
      setTransition2(duration);
    });
    on2("enable disable", () => {
      const {
        el
      } = swiper.scrollbar;
      if (el) {
        el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
      }
    });
    on2("destroy", () => {
      destroy2();
    });
    const enable = () => {
      swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      }
      init();
      updateSize2();
      setTranslate2();
    };
    const disable = () => {
      swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      }
      destroy2();
    };
    Object.assign(swiper.scrollbar, {
      enable,
      disable,
      updateSize: updateSize2,
      setTranslate: setTranslate2,
      init,
      destroy: destroy2
    });
  }

  // node_modules/swiper/modules/parallax.mjs
  function Parallax({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      parallax: {
        enabled: false
      }
    });
    const elementsSelector = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]";
    const setTransform = (el, progress) => {
      const {
        rtl
      } = swiper;
      const rtlFactor = rtl ? -1 : 1;
      const p2 = el.getAttribute("data-swiper-parallax") || "0";
      let x3 = el.getAttribute("data-swiper-parallax-x");
      let y3 = el.getAttribute("data-swiper-parallax-y");
      const scale = el.getAttribute("data-swiper-parallax-scale");
      const opacity = el.getAttribute("data-swiper-parallax-opacity");
      const rotate = el.getAttribute("data-swiper-parallax-rotate");
      if (x3 || y3) {
        x3 = x3 || "0";
        y3 = y3 || "0";
      } else if (swiper.isHorizontal()) {
        x3 = p2;
        y3 = "0";
      } else {
        y3 = p2;
        x3 = "0";
      }
      if (x3.indexOf("%") >= 0) {
        x3 = `${parseInt(x3, 10) * progress * rtlFactor}%`;
      } else {
        x3 = `${x3 * progress * rtlFactor}px`;
      }
      if (y3.indexOf("%") >= 0) {
        y3 = `${parseInt(y3, 10) * progress}%`;
      } else {
        y3 = `${y3 * progress}px`;
      }
      if (typeof opacity !== "undefined" && opacity !== null) {
        const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        el.style.opacity = currentOpacity;
      }
      let transform = `translate3d(${x3}, ${y3}, 0px)`;
      if (typeof scale !== "undefined" && scale !== null) {
        const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        transform += ` scale(${currentScale})`;
      }
      if (rotate && typeof rotate !== "undefined" && rotate !== null) {
        const currentRotate = rotate * progress * -1;
        transform += ` rotate(${currentRotate}deg)`;
      }
      el.style.transform = transform;
    };
    const setTranslate2 = () => {
      const {
        el,
        slides,
        progress,
        snapGrid,
        isElement: isElement2
      } = swiper;
      const elements = elementChildren(el, elementsSelector);
      if (swiper.isElement) {
        elements.push(...elementChildren(swiper.hostEl, elementsSelector));
      }
      elements.forEach((subEl) => {
        setTransform(subEl, progress);
      });
      slides.forEach((slideEl, slideIndex) => {
        let slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") {
          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach((subEl) => {
          setTransform(subEl, slideProgress);
        });
      });
    };
    const setTransition2 = (duration = swiper.params.speed) => {
      const {
        el,
        hostEl
      } = swiper;
      const elements = [...el.querySelectorAll(elementsSelector)];
      if (swiper.isElement) {
        elements.push(...hostEl.querySelectorAll(elementsSelector));
      }
      elements.forEach((parallaxEl) => {
        let parallaxDuration = parseInt(parallaxEl.getAttribute("data-swiper-parallax-duration"), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
      });
    };
    on2("beforeInit", () => {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    });
    on2("init", () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate2();
    });
    on2("setTranslate", () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate2();
    });
    on2("setTransition", (_swiper, duration) => {
      if (!swiper.params.parallax.enabled) return;
      setTransition2(duration);
    });
  }

  // node_modules/swiper/modules/zoom.mjs
  function Zoom({
    swiper,
    extendParams,
    on: on2,
    emit
  }) {
    const window2 = getWindow2();
    extendParams({
      zoom: {
        enabled: false,
        limitToOriginalSize: false,
        maxRatio: 3,
        minRatio: 1,
        panOnMouseMove: false,
        toggle: true,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    });
    swiper.zoom = {
      enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let isPanningWithMouse = false;
    let mousePanStart = {
      x: 0,
      y: 0
    };
    const mousePanSensitivity = -3;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const evCache = [];
    const gesture = {
      originX: 0,
      originY: 0,
      slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      imageEl: void 0,
      imageWrapEl: void 0,
      maxRatio: 3
    };
    const image = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    };
    const velocity = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, "scale", {
      get() {
        return scale;
      },
      set(value) {
        if (scale !== value) {
          const imageEl = gesture.imageEl;
          const slideEl = gesture.slideEl;
          emit("zoomChange", value, imageEl, slideEl);
        }
        scale = value;
      }
    });
    function getDistanceBetweenTouches() {
      if (evCache.length < 2) return 1;
      const x1 = evCache[0].pageX;
      const y1 = evCache[0].pageY;
      const x22 = evCache[1].pageX;
      const y22 = evCache[1].pageY;
      const distance = Math.sqrt((x22 - x1) ** 2 + (y22 - y1) ** 2);
      return distance;
    }
    function getMaxRatio() {
      const params = swiper.params.zoom;
      const maxRatio = gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
      if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
        const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
        return Math.min(imageMaxRatio, maxRatio);
      }
      return maxRatio;
    }
    function getScaleOrigin() {
      if (evCache.length < 2) return {
        x: null,
        y: null
      };
      const box = gesture.imageEl.getBoundingClientRect();
      return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window2.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window2.scrollY) / currentScale];
    }
    function getSlideSelector() {
      return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    }
    function eventWithinSlide(e10) {
      const slideSelector = getSlideSelector();
      if (e10.target.matches(slideSelector)) return true;
      if (swiper.slides.filter((slideEl) => slideEl.contains(e10.target)).length > 0) return true;
      return false;
    }
    function eventWithinZoomContainer(e10) {
      const selector = `.${swiper.params.zoom.containerClass}`;
      if (e10.target.matches(selector)) return true;
      if ([...swiper.hostEl.querySelectorAll(selector)].filter((containerEl) => containerEl.contains(e10.target)).length > 0) return true;
      return false;
    }
    function onGestureStart(e10) {
      if (e10.pointerType === "mouse") {
        evCache.splice(0, evCache.length);
      }
      if (!eventWithinSlide(e10)) return;
      const params = swiper.params.zoom;
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      evCache.push(e10);
      if (evCache.length < 2) {
        return;
      }
      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches();
      if (!gesture.slideEl) {
        gesture.slideEl = e10.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
        if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
        let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
        if (imageEl) {
          imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
        } else {
          gesture.imageWrapEl = void 0;
        }
        if (!gesture.imageWrapEl) {
          gesture.imageEl = void 0;
          return;
        }
        gesture.maxRatio = getMaxRatio();
      }
      if (gesture.imageEl) {
        const [originX, originY] = getScaleOrigin();
        gesture.originX = originX;
        gesture.originY = originY;
        gesture.imageEl.style.transitionDuration = "0ms";
      }
      isScaling = true;
    }
    function onGestureChange(e10) {
      if (!eventWithinSlide(e10)) return;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e10.pointerId);
      if (pointerIndex >= 0) evCache[pointerIndex] = e10;
      if (evCache.length < 2) {
        return;
      }
      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches();
      if (!gesture.imageEl) {
        return;
      }
      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
      }
      gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function onGestureEnd(e10) {
      if (!eventWithinSlide(e10)) return;
      if (e10.pointerType === "mouse" && e10.type === "pointerout") return;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e10.pointerId);
      if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      if (!gesture.imageEl) return;
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
      gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
      currentScale = zoom.scale;
      isScaling = false;
      if (zoom.scale > 1 && gesture.slideEl) {
        gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
      } else if (zoom.scale <= 1 && gesture.slideEl) {
        gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
      }
      if (zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
        gesture.slideEl = void 0;
      }
    }
    let allowTouchMoveTimeout;
    function allowTouchMove() {
      swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
    }
    function preventTouchMove() {
      clearTimeout(allowTouchMoveTimeout);
      swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
      allowTouchMoveTimeout = setTimeout(() => {
        if (swiper.destroyed) return;
        allowTouchMove();
      });
    }
    function onTouchStart2(e10) {
      const device = swiper.device;
      if (!gesture.imageEl) return;
      if (image.isTouched) return;
      if (device.android && e10.cancelable) e10.preventDefault();
      image.isTouched = true;
      const event2 = evCache.length > 0 ? evCache[0] : e10;
      image.touchesStart.x = event2.pageX;
      image.touchesStart.y = event2.pageY;
    }
    function onTouchMove2(e10) {
      const isMouseEvent = e10.pointerType === "mouse";
      const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
      if (!eventWithinSlide(e10) || !eventWithinZoomContainer(e10)) {
        return;
      }
      const zoom = swiper.zoom;
      if (!gesture.imageEl) {
        return;
      }
      if (!image.isTouched || !gesture.slideEl) {
        if (isMousePan) onMouseMove(e10);
        return;
      }
      if (isMousePan) {
        onMouseMove(e10);
        return;
      }
      if (!image.isMoved) {
        image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        image.startX = getTranslate(gesture.imageWrapEl, "x") || 0;
        image.startY = getTranslate(gesture.imageWrapEl, "y") || 0;
        gesture.slideWidth = gesture.slideEl.offsetWidth;
        gesture.slideHeight = gesture.slideEl.offsetHeight;
        gesture.imageWrapEl.style.transitionDuration = "0ms";
      }
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e10.pageX;
      image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e10.pageY;
      const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
      if (touchesDiff > 5) {
        swiper.allowClick = false;
      }
      if (!image.isMoved && !isScaling) {
        if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
          image.isTouched = false;
          allowTouchMove();
          return;
        }
        if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
          image.isTouched = false;
          allowTouchMove();
          return;
        }
      }
      if (e10.cancelable) {
        e10.preventDefault();
      }
      e10.stopPropagation();
      preventTouchMove();
      image.isMoved = true;
      const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
      const {
        originX,
        originY
      } = gesture;
      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
      if (image.currentX < image.minX) {
        image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
      }
      if (image.currentX > image.maxX) {
        image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
      }
      if (image.currentY < image.minY) {
        image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
      }
      if (image.currentY > image.maxY) {
        image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
      }
      if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTouchEnd2() {
      const zoom = swiper.zoom;
      evCache.length = 0;
      if (!gesture.imageEl) return;
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      let momentumDurationX = 300;
      let momentumDurationY = 300;
      const momentumDistanceX = velocity.x * momentumDurationX;
      const newPositionX = image.currentX + momentumDistanceX;
      const momentumDistanceY = velocity.y * momentumDurationY;
      const newPositionY = image.currentY + momentumDistanceY;
      if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
      if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
      const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY;
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
      gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
      gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTransitionEnd() {
      const zoom = swiper.zoom;
      if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
        if (gesture.imageEl) {
          gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
        }
        if (gesture.imageWrapEl) {
          gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
        }
        gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
        zoom.scale = 1;
        currentScale = 1;
        gesture.slideEl = void 0;
        gesture.imageEl = void 0;
        gesture.imageWrapEl = void 0;
        gesture.originX = 0;
        gesture.originY = 0;
      }
    }
    function onMouseMove(e10) {
      if (currentScale <= 1 || !gesture.imageWrapEl) return;
      if (!eventWithinSlide(e10) || !eventWithinZoomContainer(e10)) return;
      const currentTransform = window2.getComputedStyle(gesture.imageWrapEl).transform;
      const matrix = new window2.DOMMatrix(currentTransform);
      if (!isPanningWithMouse) {
        isPanningWithMouse = true;
        mousePanStart.x = e10.clientX;
        mousePanStart.y = e10.clientY;
        image.startX = matrix.e;
        image.startY = matrix.f;
        image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        gesture.slideWidth = gesture.slideEl.offsetWidth;
        gesture.slideHeight = gesture.slideEl.offsetHeight;
        return;
      }
      const deltaX = (e10.clientX - mousePanStart.x) * mousePanSensitivity;
      const deltaY = (e10.clientY - mousePanStart.y) * mousePanSensitivity;
      const scaledWidth = image.width * currentScale;
      const scaledHeight = image.height * currentScale;
      const slideWidth = gesture.slideWidth;
      const slideHeight = gesture.slideHeight;
      const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      const maxX = -minX;
      const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      const maxY = -minY;
      const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
      const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
      gesture.imageWrapEl.style.transitionDuration = "0ms";
      gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      mousePanStart.x = e10.clientX;
      mousePanStart.y = e10.clientY;
      image.startX = newX;
      image.startY = newY;
      image.currentX = newX;
      image.currentY = newY;
    }
    function zoomIn(e10) {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.slideEl) {
        if (e10 && e10.target) {
          gesture.slideEl = e10.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
        }
        if (!gesture.slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
          } else {
            gesture.slideEl = swiper.slides[swiper.activeIndex];
          }
        }
        let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
        if (imageEl) {
          imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
        } else {
          gesture.imageWrapEl = void 0;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      gesture.maxRatio = getMaxRatio();
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.touchAction = "none";
      }
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
      let touchX;
      let touchY;
      let offsetX;
      let offsetY;
      let diffX;
      let diffY;
      let translateX;
      let translateY;
      let imageWidth;
      let imageHeight;
      let scaledWidth;
      let scaledHeight;
      let translateMinX;
      let translateMinY;
      let translateMaxX;
      let translateMaxY;
      let slideWidth;
      let slideHeight;
      if (typeof image.touchesStart.x === "undefined" && e10) {
        touchX = e10.pageX;
        touchY = e10.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }
      const prevScale = currentScale;
      const forceZoomRatio = typeof e10 === "number" ? e10 : null;
      if (currentScale === 1 && forceZoomRatio) {
        touchX = void 0;
        touchY = void 0;
        image.touchesStart.x = void 0;
        image.touchesStart.y = void 0;
      }
      const maxRatio = getMaxRatio();
      zoom.scale = forceZoomRatio || maxRatio;
      currentScale = forceZoomRatio || maxRatio;
      if (e10 && !(currentScale === 1 && forceZoomRatio)) {
        slideWidth = gesture.slideEl.offsetWidth;
        slideHeight = gesture.slideEl.offsetHeight;
        offsetX = elementOffset(gesture.slideEl).left + window2.scrollX;
        offsetY = elementOffset(gesture.slideEl).top + window2.scrollY;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        if (prevScale > 0 && forceZoomRatio && typeof image.currentX === "number" && typeof image.currentY === "number") {
          translateX = image.currentX * zoom.scale / prevScale;
          translateY = image.currentY * zoom.scale / prevScale;
        } else {
          translateX = diffX * zoom.scale;
          translateY = diffY * zoom.scale;
        }
        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }
        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      if (forceZoomRatio && zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
      }
      image.currentX = translateX;
      image.currentY = translateY;
      gesture.imageWrapEl.style.transitionDuration = "300ms";
      gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
      gesture.imageEl.style.transitionDuration = "300ms";
      gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function zoomOut() {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
        let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
        if (imageEl) {
          imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
        } else {
          gesture.imageWrapEl = void 0;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      gesture.maxRatio = getMaxRatio();
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.style.touchAction = "";
      }
      zoom.scale = 1;
      currentScale = 1;
      image.currentX = void 0;
      image.currentY = void 0;
      image.touchesStart.x = void 0;
      image.touchesStart.y = void 0;
      gesture.imageWrapEl.style.transitionDuration = "300ms";
      gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
      gesture.imageEl.style.transitionDuration = "300ms";
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
      gesture.slideEl = void 0;
      gesture.originX = 0;
      gesture.originY = 0;
      if (swiper.params.zoom.panOnMouseMove) {
        mousePanStart = {
          x: 0,
          y: 0
        };
        if (isPanningWithMouse) {
          isPanningWithMouse = false;
          image.startX = 0;
          image.startY = 0;
        }
      }
    }
    function zoomToggle(e10) {
      const zoom = swiper.zoom;
      if (zoom.scale && zoom.scale !== 1) {
        zoomOut();
      } else {
        zoomIn(e10);
      }
    }
    function getListeners() {
      const passiveListener = swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      const activeListenerWithCapture = swiper.params.passiveListeners ? {
        passive: false,
        capture: true
      } : true;
      return {
        passiveListener,
        activeListenerWithCapture
      };
    }
    function enable() {
      const zoom = swiper.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
      const {
        passiveListener,
        activeListenerWithCapture
      } = getListeners();
      swiper.wrapperEl.addEventListener("pointerdown", onGestureStart, passiveListener);
      swiper.wrapperEl.addEventListener("pointermove", onGestureChange, activeListenerWithCapture);
      ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
        swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
      });
      swiper.wrapperEl.addEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
    }
    function disable() {
      const zoom = swiper.zoom;
      if (!zoom.enabled) return;
      zoom.enabled = false;
      const {
        passiveListener,
        activeListenerWithCapture
      } = getListeners();
      swiper.wrapperEl.removeEventListener("pointerdown", onGestureStart, passiveListener);
      swiper.wrapperEl.removeEventListener("pointermove", onGestureChange, activeListenerWithCapture);
      ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
        swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
      });
      swiper.wrapperEl.removeEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
    }
    on2("init", () => {
      if (swiper.params.zoom.enabled) {
        enable();
      }
    });
    on2("destroy", () => {
      disable();
    });
    on2("touchStart", (_s, e10) => {
      if (!swiper.zoom.enabled) return;
      onTouchStart2(e10);
    });
    on2("touchEnd", (_s, e10) => {
      if (!swiper.zoom.enabled) return;
      onTouchEnd2();
    });
    on2("doubleTap", (_s, e10) => {
      if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        zoomToggle(e10);
      }
    });
    on2("transitionEnd", () => {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        onTransitionEnd();
      }
    });
    on2("slideChange", () => {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        onTransitionEnd();
      }
    });
    Object.assign(swiper.zoom, {
      enable,
      disable,
      in: zoomIn,
      out: zoomOut,
      toggle: zoomToggle
    });
  }

  // node_modules/swiper/modules/controller.mjs
  function Controller({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      controller: {
        control: void 0,
        inverse: false,
        by: "slide"
        // or 'container'
      }
    });
    swiper.controller = {
      control: void 0
    };
    function LinearSpline(x3, y3) {
      const binarySearch = /* @__PURE__ */ (function search() {
        let maxIndex;
        let minIndex;
        let guess;
        return (array, val) => {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      })();
      this.x = x3;
      this.y = y3;
      this.lastIndex = x3.length - 1;
      let i1;
      let i32;
      this.interpolate = function interpolate(x22) {
        if (!x22) return 0;
        i32 = binarySearch(this.x, x22);
        i1 = i32 - 1;
        return (x22 - this.x[i1]) * (this.y[i32] - this.y[i1]) / (this.x[i32] - this.x[i1]) + this.y[i1];
      };
      return this;
    }
    function getInterpolateFunction(c6) {
      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c6.slidesGrid) : new LinearSpline(swiper.snapGrid, c6.snapGrid);
    }
    function setTranslate2(_t, byController) {
      const controlled = swiper.controller.control;
      let multiplier;
      let controlledTranslate;
      const Swiper2 = swiper.constructor;
      function setControlledTranslate(c6) {
        if (c6.destroyed) return;
        const translate2 = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === "slide") {
          getInterpolateFunction(c6);
          controlledTranslate = -swiper.controller.spline.interpolate(-translate2);
        }
        if (!controlledTranslate || swiper.params.controller.by === "container") {
          multiplier = (c6.maxTranslate() - c6.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
            multiplier = 1;
          }
          controlledTranslate = (translate2 - swiper.minTranslate()) * multiplier + c6.minTranslate();
        }
        if (swiper.params.controller.inverse) {
          controlledTranslate = c6.maxTranslate() - controlledTranslate;
        }
        c6.updateProgress(controlledTranslate);
        c6.setTranslate(controlledTranslate, swiper);
        c6.updateActiveIndex();
        c6.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (let i8 = 0; i8 < controlled.length; i8 += 1) {
          if (controlled[i8] !== byController && controlled[i8] instanceof Swiper2) {
            setControlledTranslate(controlled[i8]);
          }
        }
      } else if (controlled instanceof Swiper2 && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    }
    function setTransition2(duration, byController) {
      const Swiper2 = swiper.constructor;
      const controlled = swiper.controller.control;
      let i8;
      function setControlledTransition(c6) {
        if (c6.destroyed) return;
        c6.setTransition(duration, swiper);
        if (duration !== 0) {
          c6.transitionStart();
          if (c6.params.autoHeight) {
            nextTick(() => {
              c6.updateAutoHeight();
            });
          }
          elementTransitionEnd(c6.wrapperEl, () => {
            if (!controlled) return;
            c6.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i8 = 0; i8 < controlled.length; i8 += 1) {
          if (controlled[i8] !== byController && controlled[i8] instanceof Swiper2) {
            setControlledTransition(controlled[i8]);
          }
        }
      } else if (controlled instanceof Swiper2 && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }
    function removeSpline() {
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = void 0;
        delete swiper.controller.spline;
      }
    }
    on2("beforeInit", () => {
      if (typeof window !== "undefined" && // eslint-disable-line
      (typeof swiper.params.controller.control === "string" || swiper.params.controller.control instanceof HTMLElement)) {
        const controlElements = typeof swiper.params.controller.control === "string" ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
        controlElements.forEach((controlElement) => {
          if (!swiper.controller.control) swiper.controller.control = [];
          if (controlElement && controlElement.swiper) {
            swiper.controller.control.push(controlElement.swiper);
          } else if (controlElement) {
            const eventName = `${swiper.params.eventsPrefix}init`;
            const onControllerSwiper = (e10) => {
              swiper.controller.control.push(e10.detail[0]);
              swiper.update();
              controlElement.removeEventListener(eventName, onControllerSwiper);
            };
            controlElement.addEventListener(eventName, onControllerSwiper);
          }
        });
        return;
      }
      swiper.controller.control = swiper.params.controller.control;
    });
    on2("update", () => {
      removeSpline();
    });
    on2("resize", () => {
      removeSpline();
    });
    on2("observerUpdate", () => {
      removeSpline();
    });
    on2("setTranslate", (_s, translate2, byController) => {
      if (!swiper.controller.control || swiper.controller.control.destroyed) return;
      swiper.controller.setTranslate(translate2, byController);
    });
    on2("setTransition", (_s, duration, byController) => {
      if (!swiper.controller.control || swiper.controller.control.destroyed) return;
      swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
      setTranslate: setTranslate2,
      setTransition: setTransition2
    });
  }

  // node_modules/swiper/modules/a11y.mjs
  function A11y({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      a11y: {
        enabled: true,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        containerRole: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null,
        scrollOnFocus: true,
        wrapperLiveRegion: true
      }
    });
    swiper.a11y = {
      clicked: false
    };
    let liveRegion = null;
    let preventFocusHandler;
    let focusTargetSlideEl;
    let visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
    function notify(message) {
      const notification = liveRegion;
      if (notification.length === 0) return;
      setInnerHTML(notification, message);
    }
    function getRandomNumber(size = 16) {
      const randomChar = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("tabIndex", "0");
      });
    }
    function makeElNotFocusable(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("tabIndex", "-1");
      });
    }
    function addElRole(el, role) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("role", role);
      });
    }
    function addElRoleDescription(el, description) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-roledescription", description);
      });
    }
    function addElLabel(el, label) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-label", label);
      });
    }
    function addElId(el, id) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("id", id);
      });
    }
    function addElLive(el, live) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-live", live);
      });
    }
    function disableEl(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-disabled", true);
      });
    }
    function enableEl(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.removeAttribute("aria-disabled");
      });
    }
    function onEnterOrSpaceKey(e10) {
      if (e10.keyCode !== 13 && e10.keyCode !== 32) return;
      const params = swiper.params.a11y;
      const targetEl = e10.target;
      if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e10.target))) {
        if (!e10.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
      }
      if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
        const prevEls = makeElementsArray(swiper.navigation.prevEl);
        const nextEls = makeElementsArray(swiper.navigation.nextEl);
        if (nextEls.includes(targetEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }
          if (swiper.isEnd) {
            notify(params.lastSlideMessage);
          } else {
            notify(params.nextSlideMessage);
          }
        }
        if (prevEls.includes(targetEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }
          if (swiper.isBeginning) {
            notify(params.firstSlideMessage);
          } else {
            notify(params.prevSlideMessage);
          }
        }
      }
      if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
        targetEl.click();
      }
    }
    function updateNavigation() {
      if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (prevEl) {
        if (swiper.isBeginning) {
          disableEl(prevEl);
          makeElNotFocusable(prevEl);
        } else {
          enableEl(prevEl);
          makeElFocusable(prevEl);
        }
      }
      if (nextEl) {
        if (swiper.isEnd) {
          disableEl(nextEl);
          makeElNotFocusable(nextEl);
        } else {
          enableEl(nextEl);
          makeElFocusable(nextEl);
        }
      }
    }
    function hasPagination() {
      return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
      return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
      const params = swiper.params.a11y;
      if (!hasPagination()) return;
      swiper.pagination.bullets.forEach((bulletEl) => {
        if (swiper.params.pagination.clickable) {
          makeElFocusable(bulletEl);
          if (!swiper.params.pagination.renderBullet) {
            addElRole(bulletEl, "button");
            addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
          }
        }
        if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
          bulletEl.setAttribute("aria-current", "true");
        } else {
          bulletEl.removeAttribute("aria-current");
        }
      });
    }
    const initNavEl = (el, wrapperId, message) => {
      makeElFocusable(el);
      if (el.tagName !== "BUTTON") {
        addElRole(el, "button");
        el.addEventListener("keydown", onEnterOrSpaceKey);
      }
      addElLabel(el, message);
    };
    const handlePointerDown = (e10) => {
      if (focusTargetSlideEl && focusTargetSlideEl !== e10.target && !focusTargetSlideEl.contains(e10.target)) {
        preventFocusHandler = true;
      }
      swiper.a11y.clicked = true;
    };
    const handlePointerUp = () => {
      preventFocusHandler = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!swiper.destroyed) {
            swiper.a11y.clicked = false;
          }
        });
      });
    };
    const onVisibilityChange = (e10) => {
      visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
    };
    const handleFocus = (e10) => {
      if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
      if ((/* @__PURE__ */ new Date()).getTime() - visibilityChangedTimestamp < 100) return;
      const slideEl = e10.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!slideEl || !swiper.slides.includes(slideEl)) return;
      focusTargetSlideEl = slideEl;
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      const isActive = (isVirtual ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : swiper.slides.indexOf(slideEl)) === swiper.activeIndex;
      const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
      if (isActive || isVisible) return;
      if (e10.sourceCapabilities && e10.sourceCapabilities.firesTouchEvents) return;
      if (swiper.isHorizontal()) {
        swiper.el.scrollLeft = 0;
      } else {
        swiper.el.scrollTop = 0;
      }
      requestAnimationFrame(() => {
        if (preventFocusHandler) return;
        if (swiper.params.loop) {
          swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute("data-swiper-slide-index"))), 0);
        } else if (isVirtual) {
          swiper.slideTo(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10)), 0);
        } else {
          swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);
        }
        preventFocusHandler = false;
      });
    };
    const initSlides = () => {
      const params = swiper.params.a11y;
      if (params.itemRoleDescriptionMessage) {
        addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
      }
      if (params.slideRole) {
        addElRole(swiper.slides, params.slideRole);
      }
      const slidesLength = swiper.slides.length;
      if (params.slideLabelMessage) {
        swiper.slides.forEach((slideEl, index) => {
          const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
          const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
          addElLabel(slideEl, ariaLabelMessage);
        });
      }
    };
    const init = () => {
      const params = swiper.params.a11y;
      swiper.el.append(liveRegion);
      const containerEl = swiper.el;
      if (params.containerRoleDescriptionMessage) {
        addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
      }
      if (params.containerMessage) {
        addElLabel(containerEl, params.containerMessage);
      }
      if (params.containerRole) {
        addElRole(containerEl, params.containerRole);
      }
      const wrapperEl = swiper.wrapperEl;
      const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
      addElId(wrapperEl, wrapperId);
      if (params.wrapperLiveRegion) {
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
        addElLive(wrapperEl, live);
      }
      initSlides();
      let {
        nextEl,
        prevEl
      } = swiper.navigation ? swiper.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage));
      }
      if (prevEl) {
        prevEl.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage));
      }
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper.pagination.el);
        paginationEl.forEach((el) => {
          el.addEventListener("keydown", onEnterOrSpaceKey);
        });
      }
      const document2 = getDocument2();
      document2.addEventListener("visibilitychange", onVisibilityChange);
      swiper.el.addEventListener("focus", handleFocus, true);
      swiper.el.addEventListener("pointerdown", handlePointerDown, true);
      swiper.el.addEventListener("pointerup", handlePointerUp, true);
    };
    function destroy2() {
      if (liveRegion) liveRegion.remove();
      let {
        nextEl,
        prevEl
      } = swiper.navigation ? swiper.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
      }
      if (prevEl) {
        prevEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
      }
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper.pagination.el);
        paginationEl.forEach((el) => {
          el.removeEventListener("keydown", onEnterOrSpaceKey);
        });
      }
      const document2 = getDocument2();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.removeEventListener("focus", handleFocus, true);
        swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
        swiper.el.removeEventListener("pointerup", handlePointerUp, true);
      }
    }
    on2("beforeInit", () => {
      liveRegion = createElement("span", swiper.params.a11y.notificationClass);
      liveRegion.setAttribute("aria-live", "assertive");
      liveRegion.setAttribute("aria-atomic", "true");
    });
    on2("afterInit", () => {
      if (!swiper.params.a11y.enabled) return;
      init();
    });
    on2("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      if (!swiper.params.a11y.enabled) return;
      initSlides();
    });
    on2("fromEdge toEdge afterInit lock unlock", () => {
      if (!swiper.params.a11y.enabled) return;
      updateNavigation();
    });
    on2("paginationUpdate", () => {
      if (!swiper.params.a11y.enabled) return;
      updatePagination();
    });
    on2("destroy", () => {
      if (!swiper.params.a11y.enabled) return;
      destroy2();
    });
  }

  // node_modules/swiper/modules/history.mjs
  function History({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      history: {
        enabled: false,
        root: "",
        replaceState: false,
        key: "slides",
        keepQuery: false
      }
    });
    let initialized = false;
    let paths = {};
    const slugify = (text) => {
      return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    };
    const getPathValues = (urlOverride) => {
      const window2 = getWindow2();
      let location2;
      if (urlOverride) {
        location2 = new URL(urlOverride);
      } else {
        location2 = window2.location;
      }
      const pathArray = location2.pathname.slice(1).split("/").filter((part) => part !== "");
      const total = pathArray.length;
      const key = pathArray[total - 2];
      const value = pathArray[total - 1];
      return {
        key,
        value
      };
    };
    const setHistory = (key, index) => {
      const window2 = getWindow2();
      if (!initialized || !swiper.params.history.enabled) return;
      let location2;
      if (swiper.params.url) {
        location2 = new URL(swiper.params.url);
      } else {
        location2 = window2.location;
      }
      const slide2 = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
      let value = slugify(slide2.getAttribute("data-history"));
      if (swiper.params.history.root.length > 0) {
        let root = swiper.params.history.root;
        if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
        value = `${root}/${key ? `${key}/` : ""}${value}`;
      } else if (!location2.pathname.includes(key)) {
        value = `${key ? `${key}/` : ""}${value}`;
      }
      if (swiper.params.history.keepQuery) {
        value += location2.search;
      }
      const currentState = window2.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        window2.history.replaceState({
          value
        }, null, value);
      } else {
        window2.history.pushState({
          value
        }, null, value);
      }
    };
    const scrollToSlide = (speed, value, runCallbacks) => {
      if (value) {
        for (let i8 = 0, length = swiper.slides.length; i8 < length; i8 += 1) {
          const slide2 = swiper.slides[i8];
          const slideHistory = slugify(slide2.getAttribute("data-history"));
          if (slideHistory === value) {
            const index = swiper.getSlideIndex(slide2);
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    };
    const setHistoryPopState = () => {
      paths = getPathValues(swiper.params.url);
      scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = () => {
      const window2 = getWindow2();
      if (!swiper.params.history) return;
      if (!window2.history || !window2.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      initialized = true;
      paths = getPathValues(swiper.params.url);
      if (!paths.key && !paths.value) {
        if (!swiper.params.history.replaceState) {
          window2.addEventListener("popstate", setHistoryPopState);
        }
        return;
      }
      scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        window2.addEventListener("popstate", setHistoryPopState);
      }
    };
    const destroy2 = () => {
      const window2 = getWindow2();
      if (!swiper.params.history.replaceState) {
        window2.removeEventListener("popstate", setHistoryPopState);
      }
    };
    on2("init", () => {
      if (swiper.params.history.enabled) {
        init();
      }
    });
    on2("destroy", () => {
      if (swiper.params.history.enabled) {
        destroy2();
      }
    });
    on2("transitionEnd _freeModeNoMomentumRelease", () => {
      if (initialized) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
    on2("slideChange", () => {
      if (initialized && swiper.params.cssMode) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
  }

  // node_modules/swiper/modules/hash-navigation.mjs
  function HashNavigation({
    swiper,
    extendParams,
    emit,
    on: on2
  }) {
    let initialized = false;
    const document2 = getDocument2();
    const window2 = getWindow2();
    extendParams({
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
        getSlideIndex(_s, hash) {
          if (swiper.virtual && swiper.params.virtual.enabled) {
            const slideWithHash = swiper.slides.find((slideEl) => slideEl.getAttribute("data-hash") === hash);
            if (!slideWithHash) return 0;
            const index = parseInt(slideWithHash.getAttribute("data-swiper-slide-index"), 10);
            return index;
          }
          return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
        }
      }
    });
    const onHashChange = () => {
      emit("hashChange");
      const newHash = document2.location.hash.replace("#", "");
      const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
      const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") : "";
      if (newHash !== activeSlideHash) {
        const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
        if (typeof newIndex === "undefined" || Number.isNaN(newIndex)) return;
        swiper.slideTo(newIndex);
      }
    };
    const setHash = () => {
      if (!initialized || !swiper.params.hashNavigation.enabled) return;
      const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
      const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") || activeSlideEl.getAttribute("data-history") : "";
      if (swiper.params.hashNavigation.replaceState && window2.history && window2.history.replaceState) {
        window2.history.replaceState(null, null, `#${activeSlideHash}` || "");
        emit("hashSet");
      } else {
        document2.location.hash = activeSlideHash || "";
        emit("hashSet");
      }
    };
    const init = () => {
      if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
      initialized = true;
      const hash = document2.location.hash.replace("#", "");
      if (hash) {
        const speed = 0;
        const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
        swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
      }
      if (swiper.params.hashNavigation.watchState) {
        window2.addEventListener("hashchange", onHashChange);
      }
    };
    const destroy2 = () => {
      if (swiper.params.hashNavigation.watchState) {
        window2.removeEventListener("hashchange", onHashChange);
      }
    };
    on2("init", () => {
      if (swiper.params.hashNavigation.enabled) {
        init();
      }
    });
    on2("destroy", () => {
      if (swiper.params.hashNavigation.enabled) {
        destroy2();
      }
    });
    on2("transitionEnd _freeModeNoMomentumRelease", () => {
      if (initialized) {
        setHash();
      }
    });
    on2("slideChange", () => {
      if (initialized && swiper.params.cssMode) {
        setHash();
      }
    });
  }

  // node_modules/swiper/modules/autoplay.mjs
  function Autoplay({
    swiper,
    extendParams,
    on: on2,
    emit,
    params
  }) {
    swiper.autoplay = {
      running: false,
      paused: false,
      timeLeft: 0
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3e3,
        waitForTransition: true,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayTimeLeft;
    let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let pausedByInteraction;
    let pausedByPointerEnter;
    function onTransitionEnd(e10) {
      if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
      if (e10.target !== swiper.wrapperEl) return;
      swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
      if (pausedByPointerEnter || e10.detail && e10.detail.bySwiperTouchMove) {
        return;
      }
      resume();
    }
    const calcTimeLeft = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.autoplay.paused) {
        wasPaused = true;
      } else if (wasPaused) {
        autoplayDelayCurrent = autoplayTimeLeft;
        wasPaused = false;
      }
      const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
      swiper.autoplay.timeLeft = timeLeft;
      emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
      raf = requestAnimationFrame(() => {
        calcTimeLeft();
      });
    };
    const getSlideDelay = () => {
      let activeSlideEl;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        activeSlideEl = swiper.slides.find((slideEl) => slideEl.classList.contains("swiper-slide-active"));
      } else {
        activeSlideEl = swiper.slides[swiper.activeIndex];
      }
      if (!activeSlideEl) return void 0;
      const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
      return currentSlideDelay;
    };
    const getTotalDelay = () => {
      let totalDelay = swiper.params.autoplay.delay;
      const currentSlideDelay = getSlideDelay();
      if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0) {
        totalDelay = currentSlideDelay;
      }
      return totalDelay;
    };
    const run = (delayForce) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      cancelAnimationFrame(raf);
      calcTimeLeft();
      let delay = delayForce;
      if (typeof delay === "undefined") {
        delay = getTotalDelay();
        autoplayDelayTotal = delay;
        autoplayDelayCurrent = delay;
      }
      autoplayTimeLeft = delay;
      const speed = swiper.params.speed;
      const proceed = () => {
        if (!swiper || swiper.destroyed) return;
        if (swiper.params.autoplay.reverseDirection) {
          if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
            swiper.slidePrev(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
            emit("autoplay");
          }
        } else {
          if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
            swiper.slideNext(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, speed, true, true);
            emit("autoplay");
          }
        }
        if (swiper.params.cssMode) {
          autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
          requestAnimationFrame(() => {
            run();
          });
        }
      };
      if (delay > 0) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          proceed();
        }, delay);
      } else {
        requestAnimationFrame(() => {
          proceed();
        });
      }
      return delay;
    };
    const start = () => {
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      swiper.autoplay.running = true;
      run();
      emit("autoplayStart");
    };
    const stop = () => {
      swiper.autoplay.running = false;
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      emit("autoplayStop");
    };
    const pause = (internal, reset) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      clearTimeout(timeout);
      if (!internal) {
        pausedByInteraction = true;
      }
      const proceed = () => {
        emit("autoplayPause");
        if (swiper.params.autoplay.waitForTransition) {
          swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
        } else {
          resume();
        }
      };
      swiper.autoplay.paused = true;
      if (reset) {
        proceed();
        return;
      }
      const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
      autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
      if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
      proceed();
    };
    const resume = () => {
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      if (pausedByInteraction) {
        pausedByInteraction = false;
        run(autoplayTimeLeft);
      } else {
        run();
      }
      swiper.autoplay.paused = false;
      emit("autoplayResume");
    };
    const onVisibilityChange = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      const document2 = getDocument2();
      if (document2.visibilityState === "hidden") {
        pausedByInteraction = true;
        pause(true);
      }
      if (document2.visibilityState === "visible") {
        resume();
      }
    };
    const onPointerEnter = (e10) => {
      if (e10.pointerType !== "mouse") return;
      pausedByInteraction = true;
      pausedByPointerEnter = true;
      if (swiper.animating || swiper.autoplay.paused) return;
      pause(true);
    };
    const onPointerLeave = (e10) => {
      if (e10.pointerType !== "mouse") return;
      pausedByPointerEnter = false;
      if (swiper.autoplay.paused) {
        resume();
      }
    };
    const attachMouseEvents = () => {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.el.addEventListener("pointerenter", onPointerEnter);
        swiper.el.addEventListener("pointerleave", onPointerLeave);
      }
    };
    const detachMouseEvents = () => {
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.removeEventListener("pointerenter", onPointerEnter);
        swiper.el.removeEventListener("pointerleave", onPointerLeave);
      }
    };
    const attachDocumentEvents = () => {
      const document2 = getDocument2();
      document2.addEventListener("visibilitychange", onVisibilityChange);
    };
    const detachDocumentEvents = () => {
      const document2 = getDocument2();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
    };
    on2("init", () => {
      if (swiper.params.autoplay.enabled) {
        attachMouseEvents();
        attachDocumentEvents();
        start();
      }
    });
    on2("destroy", () => {
      detachMouseEvents();
      detachDocumentEvents();
      if (swiper.autoplay.running) {
        stop();
      }
    });
    on2("_freeModeStaticRelease", () => {
      if (pausedByTouch || pausedByInteraction) {
        resume();
      }
    });
    on2("_freeModeNoMomentumRelease", () => {
      if (!swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on2("beforeTransitionStart", (_s, speed, internal) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on2("sliderFirstMove", () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = true;
      pausedByTouch = false;
      pausedByInteraction = false;
      touchStartTimeout = setTimeout(() => {
        pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
      }, 200);
    });
    on2("touchEnd", () => {
      if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
      clearTimeout(touchStartTimeout);
      clearTimeout(timeout);
      if (swiper.params.autoplay.disableOnInteraction) {
        pausedByTouch = false;
        isTouched = false;
        return;
      }
      if (pausedByTouch && swiper.params.cssMode) resume();
      pausedByTouch = false;
      isTouched = false;
    });
    on2("slideChange", () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.autoplay.paused) {
        autoplayTimeLeft = getTotalDelay();
        autoplayDelayTotal = getTotalDelay();
      }
    });
    Object.assign(swiper.autoplay, {
      start,
      stop,
      pause,
      resume
    });
  }

  // node_modules/swiper/modules/thumbs.mjs
  function Thumb({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
      swiper: null
    };
    function isVirtualEnabled() {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return false;
      return thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled;
    }
    function onThumbClick() {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const clickedIndex = thumbsSwiper.clickedIndex;
      const clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
      if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
      let slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        swiper.slideToLoop(slideToIndex);
      } else {
        swiper.slideTo(slideToIndex);
      }
    }
    function init() {
      const {
        thumbs: thumbsParams
      } = swiper.params;
      if (initialized) return false;
      initialized = true;
      const SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        if (thumbsParams.swiper.destroyed) {
          initialized = false;
          return false;
        }
        swiper.thumbs.swiper = thumbsParams.swiper;
        Object.assign(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        Object.assign(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper.update();
      } else if (isObject2(thumbsParams.swiper)) {
        const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
        Object.assign(thumbsSwiperParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
        swiperCreated = true;
      }
      swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on("tap", onThumbClick);
      if (isVirtualEnabled()) {
        swiper.thumbs.swiper.on("virtualUpdate", () => {
          update2(false, {
            autoScroll: false
          });
        });
      }
      return true;
    }
    function update2(initial, p2) {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      let thumbsToActivate = 1;
      const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }
      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }
      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.forEach((slideEl) => slideEl.classList.remove(thumbActiveClass));
      if (thumbsSwiper.params.loop || isVirtualEnabled()) {
        for (let i8 = 0; i8 < thumbsToActivate; i8 += 1) {
          elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i8}"]`).forEach((slideEl) => {
            slideEl.classList.add(thumbActiveClass);
          });
        }
      } else {
        for (let i8 = 0; i8 < thumbsToActivate; i8 += 1) {
          if (thumbsSwiper.slides[swiper.realIndex + i8]) {
            thumbsSwiper.slides[swiper.realIndex + i8].classList.add(thumbActiveClass);
          }
        }
      }
      if (p2?.autoScroll ?? true) {
        autoScroll(initial ? 0 : void 0);
      }
    }
    function autoScroll(slideSpeed) {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
      const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        const currentThumbsIndex = thumbsSwiper.activeIndex;
        let newThumbsIndex;
        let direction;
        if (thumbsSwiper.params.loop) {
          const newThumbsSlide = thumbsSwiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`);
          newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
          direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
        }
        if (useOffset) {
          newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
        }
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
          thumbsSwiper.slideTo(newThumbsIndex, slideSpeed);
        }
      }
    }
    on2("beforeInit", () => {
      const {
        thumbs
      } = swiper.params;
      if (!thumbs || !thumbs.swiper) return;
      if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
        const document2 = getDocument2();
        const getThumbsElementAndInit = () => {
          const thumbsElement = typeof thumbs.swiper === "string" ? document2.querySelector(thumbs.swiper) : thumbs.swiper;
          if (thumbsElement && thumbsElement.swiper) {
            thumbs.swiper = thumbsElement.swiper;
            init();
            update2(true);
          } else if (thumbsElement) {
            const eventName = `${swiper.params.eventsPrefix}init`;
            const onThumbsSwiper = (e10) => {
              thumbs.swiper = e10.detail[0];
              thumbsElement.removeEventListener(eventName, onThumbsSwiper);
              init();
              update2(true);
              thumbs.swiper.update();
              swiper.update();
            };
            thumbsElement.addEventListener(eventName, onThumbsSwiper);
          }
          return thumbsElement;
        };
        const watchForThumbsToAppear = () => {
          if (swiper.destroyed) return;
          const thumbsElement = getThumbsElementAndInit();
          if (!thumbsElement) {
            requestAnimationFrame(watchForThumbsToAppear);
          }
        };
        requestAnimationFrame(watchForThumbsToAppear);
      } else {
        init();
        update2(true);
      }
    });
    on2("slideChange update resize observerUpdate", () => {
      update2();
    });
    on2("setTransition", (_s, duration) => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      thumbsSwiper.setTransition(duration);
    });
    on2("beforeDestroy", () => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      if (swiperCreated) {
        thumbsSwiper.destroy();
      }
    });
    Object.assign(swiper.thumbs, {
      init,
      update: update2
    });
  }

  // node_modules/swiper/modules/free-mode.mjs
  function freeMode({
    swiper,
    extendParams,
    emit,
    once: once2
  }) {
    extendParams({
      freeMode: {
        enabled: false,
        momentum: true,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: false,
        minimumVelocity: 0.02
      }
    });
    function onTouchStart2() {
      if (swiper.params.cssMode) return;
      const translate2 = swiper.getTranslate();
      swiper.setTranslate(translate2);
      swiper.setTransition(0);
      swiper.touchEventsData.velocities.length = 0;
      swiper.freeMode.onTouchEnd({
        currentPos: swiper.rtl ? swiper.translate : -swiper.translate
      });
    }
    function onTouchMove2() {
      if (swiper.params.cssMode) return;
      const {
        touchEventsData: data,
        touches
      } = swiper;
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? "startX" : "startY"],
          time: data.touchStartTime
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
        time: now()
      });
    }
    function onTouchEnd2({
      currentPos
    }) {
      if (swiper.params.cssMode) return;
      const {
        params,
        wrapperEl,
        rtlTranslate: rtl,
        snapGrid,
        touchEventsData: data
      } = swiper;
      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime;
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
      if (params.freeMode.momentum) {
        if (data.velocities.length > 1) {
          const lastMoveEvent = data.velocities.pop();
          const velocityEvent = data.velocities.pop();
          const distance = lastMoveEvent.position - velocityEvent.position;
          const time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
            swiper.velocity = 0;
          }
          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeMode.momentumVelocityRatio;
        data.velocities.length = 0;
        let momentumDuration = 1e3 * params.freeMode.momentumRatio;
        const momentumDistance = swiper.velocity * momentumDuration;
        let newPosition = swiper.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
        let doBounce = false;
        let afterBouncePosition;
        const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
        let needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeMode.sticky) {
          let nextSlide;
          for (let j2 = 0; j2 < snapGrid.length; j2 += 1) {
            if (snapGrid[j2] > -newPosition) {
              nextSlide = j2;
              break;
            }
          }
          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          once2("transitionEnd", () => {
            swiper.loopFix();
          });
        }
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
          if (params.freeMode.sticky) {
            const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
            const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest();
          return;
        }
        if (params.freeMode.momentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
            emit("momentumBounce");
            swiper.setTransition(params.speed);
            setTimeout(() => {
              swiper.setTranslate(afterBouncePosition);
              elementTransitionEnd(wrapperEl, () => {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          emit("_freeModeNoMomentumRelease");
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      } else if (params.freeMode) {
        emit("_freeModeNoMomentumRelease");
      }
      if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
        emit("_freeModeStaticRelease");
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
    }
    Object.assign(swiper, {
      freeMode: {
        onTouchStart: onTouchStart2,
        onTouchMove: onTouchMove2,
        onTouchEnd: onTouchEnd2
      }
    });
  }

  // node_modules/swiper/modules/grid.mjs
  function Grid({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      grid: {
        rows: 1,
        fill: "column"
      }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    let wasMultiRow;
    const getSpaceBetween = () => {
      let spaceBetween = swiper.params.spaceBetween;
      if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
      } else if (typeof spaceBetween === "string") {
        spaceBetween = parseFloat(spaceBetween);
      }
      return spaceBetween;
    };
    const initSlides = (slides) => {
      const {
        slidesPerView
      } = swiper.params;
      const {
        rows,
        fill: fill2
      } = swiper.params.grid;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
      numFullColumns = Math.floor(slidesLength / rows);
      if (Math.floor(slidesLength / rows) === slidesLength / rows) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
      }
      if (slidesPerView !== "auto" && fill2 === "row") {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, Math.floor(slidesPerView) * rows);
      }
      slidesPerRow = slidesNumberEvenToRows / rows;
    };
    const unsetSlides = () => {
      if (swiper.slides) {
        swiper.slides.forEach((slide2) => {
          if (slide2.swiperSlideGridSet) {
            slide2.style.height = "";
            slide2.style[swiper.getDirectionLabel("margin-top")] = "";
          }
        });
      }
    };
    const updateSlide = (i8, slide2, slides) => {
      const {
        slidesPerGroup
      } = swiper.params;
      const spaceBetween = getSpaceBetween();
      const {
        rows,
        fill: fill2
      } = swiper.params.grid;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
      let newSlideOrderIndex;
      let column;
      let row;
      if (fill2 === "row" && slidesPerGroup > 1) {
        const groupIndex = Math.floor(i8 / (slidesPerGroup * rows));
        const slideIndexInGroup = i8 - rows * slidesPerGroup * groupIndex;
        const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
        slide2.style.order = newSlideOrderIndex;
      } else if (fill2 === "column") {
        column = Math.floor(i8 / rows);
        row = i8 - column * rows;
        if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
          row += 1;
          if (row >= rows) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i8 / slidesPerRow);
        column = i8 - row * slidesPerRow;
      }
      slide2.row = row;
      slide2.column = column;
      slide2.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
      slide2.style[swiper.getDirectionLabel("margin-top")] = row !== 0 ? spaceBetween && `${spaceBetween}px` : "";
      slide2.swiperSlideGridSet = true;
    };
    const updateWrapperSize = (slideSize, snapGrid) => {
      const {
        centeredSlides,
        roundLengths
      } = swiper.params;
      const spaceBetween = getSpaceBetween();
      const {
        rows
      } = swiper.params.grid;
      swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
      if (!swiper.params.cssMode) {
        swiper.wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
      }
      if (centeredSlides) {
        const newSlidesGrid = [];
        for (let i8 = 0; i8 < snapGrid.length; i8 += 1) {
          let slidesGridItem = snapGrid[i8];
          if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i8] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid.splice(0, snapGrid.length);
        snapGrid.push(...newSlidesGrid);
      }
    };
    const onInit = () => {
      wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
    };
    const onUpdate = () => {
      const {
        params,
        el
      } = swiper;
      const isMultiRow = params.grid && params.grid.rows > 1;
      if (wasMultiRow && !isMultiRow) {
        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
        numFullColumns = 1;
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if (params.grid.fill === "column") {
          el.classList.add(`${params.containerModifierClass}grid-column`);
        }
        swiper.emitContainerClasses();
      }
      wasMultiRow = isMultiRow;
    };
    on2("init", onInit);
    on2("update", onUpdate);
    swiper.grid = {
      initSlides,
      unsetSlides,
      updateSlide,
      updateWrapperSize
    };
  }

  // node_modules/swiper/modules/manipulation.mjs
  function appendSlide(slides) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    const appendElement = (slideEl) => {
      if (typeof slideEl === "string") {
        const tempDOM = document.createElement("div");
        setInnerHTML(tempDOM, slideEl);
        slidesEl.append(tempDOM.children[0]);
        setInnerHTML(tempDOM, "");
      } else {
        slidesEl.append(slideEl);
      }
    };
    if (typeof slides === "object" && "length" in slides) {
      for (let i8 = 0; i8 < slides.length; i8 += 1) {
        if (slides[i8]) appendElement(slides[i8]);
      }
    } else {
      appendElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
  }
  function prependSlide(slides) {
    const swiper = this;
    const {
      params,
      activeIndex,
      slidesEl
    } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndex + 1;
    const prependElement = (slideEl) => {
      if (typeof slideEl === "string") {
        const tempDOM = document.createElement("div");
        setInnerHTML(tempDOM, slideEl);
        slidesEl.prepend(tempDOM.children[0]);
        setInnerHTML(tempDOM, "");
      } else {
        slidesEl.prepend(slideEl);
      }
    };
    if (typeof slides === "object" && "length" in slides) {
      for (let i8 = 0; i8 < slides.length; i8 += 1) {
        if (slides[i8]) prependElement(slides[i8]);
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      prependElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }
  function addSlide(index, slides) {
    const swiper = this;
    const {
      params,
      activeIndex,
      slidesEl
    } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.recalcSlides();
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for (let i8 = baseLength - 1; i8 >= index; i8 -= 1) {
      const currentSlide = swiper.slides[i8];
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
      for (let i8 = 0; i8 < slides.length; i8 += 1) {
        if (slides[i8]) slidesEl.append(slides[i8]);
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      slidesEl.append(slides);
    }
    for (let i8 = 0; i8 < slidesBuffer.length; i8 += 1) {
      slidesEl.append(slidesBuffer[i8]);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeSlide(slidesIndexes) {
    const swiper = this;
    const {
      params,
      activeIndex
    } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
      for (let i8 = 0; i8 < slidesIndexes.length; i8 += 1) {
        indexToRemove = slidesIndexes[i8];
        if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for (let i8 = 0; i8 < swiper.slides.length; i8 += 1) {
      slidesIndexes.push(i8);
    }
    swiper.removeSlide(slidesIndexes);
  }
  function Manipulation({
    swiper
  }) {
    Object.assign(swiper, {
      appendSlide: appendSlide.bind(swiper),
      prependSlide: prependSlide.bind(swiper),
      addSlide: addSlide.bind(swiper),
      removeSlide: removeSlide.bind(swiper),
      removeAllSlides: removeAllSlides.bind(swiper)
    });
  }

  // node_modules/swiper/shared/effect-init.mjs
  function effectInit(params) {
    const {
      effect,
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams,
      perspective,
      recreateShadows,
      getEffectParams
    } = params;
    on2("beforeInit", () => {
      if (swiper.params.effect !== effect) return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
      if (perspective && perspective()) {
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      }
      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on2("setTranslate _virtualUpdated", () => {
      if (swiper.params.effect !== effect) return;
      setTranslate2();
    });
    on2("setTransition", (_s, duration) => {
      if (swiper.params.effect !== effect) return;
      setTransition2(duration);
    });
    on2("transitionEnd", () => {
      if (swiper.params.effect !== effect) return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows) return;
        swiper.slides.forEach((slideEl) => {
          slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
        });
        recreateShadows();
      }
    });
    let requireUpdateOnVirtual;
    on2("virtualUpdate", () => {
      if (swiper.params.effect !== effect) return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate2();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }

  // node_modules/swiper/shared/effect-target.mjs
  function effectTarget(effectParams, slideEl) {
    const transformEl = getSlideTransformEl(slideEl);
    if (transformEl !== slideEl) {
      transformEl.style.backfaceVisibility = "hidden";
      transformEl.style["-webkit-backface-visibility"] = "hidden";
    }
    return transformEl;
  }

  // node_modules/swiper/shared/effect-virtual-transition-end.mjs
  function effectVirtualTransitionEnd({
    swiper,
    duration,
    transformElements,
    allSlides
  }) {
    const {
      activeIndex
    } = swiper;
    const getSlide = (el) => {
      if (!el.parentElement) {
        const slide2 = swiper.slides.find((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
        return slide2;
      }
      return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      let transitionEndTarget;
      if (allSlides) {
        transitionEndTarget = transformElements;
      } else {
        transitionEndTarget = transformElements.filter((transformEl) => {
          const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
          return swiper.getSlideIndex(el) === activeIndex;
        });
      }
      transitionEndTarget.forEach((el) => {
        elementTransitionEnd(el, () => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const evt = new window.CustomEvent("transitionend", {
            bubbles: true,
            cancelable: true
          });
          swiper.wrapperEl.dispatchEvent(evt);
        });
      });
    }
  }

  // node_modules/swiper/modules/effect-fade.mjs
  function EffectFade({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      fadeEffect: {
        crossFade: false
      }
    });
    const setTranslate2 = () => {
      const {
        slides
      } = swiper;
      const params = swiper.params.fadeEffect;
      for (let i8 = 0; i8 < slides.length; i8 += 1) {
        const slideEl = swiper.slides[i8];
        const offset = slideEl.swiperSlideOffset;
        let tx = -offset;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.opacity = slideOpacity;
        targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: "fade",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/swiper/modules/effect-cube.mjs
  function EffectCube({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    });
    const createSlideShadows = (slideEl, progress, isHorizontal) => {
      let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
      let shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
      if (!shadowBefore) {
        shadowBefore = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "left" : "top"}`.split(" "));
        slideEl.append(shadowBefore);
      }
      if (!shadowAfter) {
        shadowAfter = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}`.split(" "));
        slideEl.append(shadowAfter);
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      const isHorizontal = swiper.isHorizontal();
      swiper.slides.forEach((slideEl) => {
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        createSlideShadows(slideEl, progress, isHorizontal);
      });
    };
    const setTranslate2 = () => {
      const {
        el,
        wrapperEl,
        slides,
        width: swiperWidth,
        height: swiperHeight,
        rtlTranslate: rtl,
        size: swiperSize,
        browser: browser3
      } = swiper;
      const r7 = getRotateFix(swiper);
      const params = swiper.params.cubeEffect;
      const isHorizontal = swiper.isHorizontal();
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let wrapperRotate = 0;
      let cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl = swiper.wrapperEl.querySelector(".swiper-cube-shadow");
          if (!cubeShadowEl) {
            cubeShadowEl = createElement("div", "swiper-cube-shadow");
            swiper.wrapperEl.append(cubeShadowEl);
          }
          cubeShadowEl.style.height = `${swiperWidth}px`;
        } else {
          cubeShadowEl = el.querySelector(".swiper-cube-shadow");
          if (!cubeShadowEl) {
            cubeShadowEl = createElement("div", "swiper-cube-shadow");
            el.append(cubeShadowEl);
          }
        }
      }
      for (let i8 = 0; i8 < slides.length; i8 += 1) {
        const slideEl = slides[i8];
        let slideIndex = i8;
        if (isVirtual) {
          slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10);
        }
        let slideAngle = slideIndex * 90;
        let round2 = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round2 = Math.floor(-slideAngle / 360);
        }
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        let tx = 0;
        let ty = 0;
        let tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round2 * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round2 * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round2 * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round2;
        }
        if (rtl) {
          tx = -tx;
        }
        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }
        const transform = `rotateX(${r7(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r7(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        }
        slideEl.style.transform = transform;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress, isHorizontal);
        }
      }
      wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
      wrapperEl.style["-webkit-transform-origin"] = `50% 50% -${swiperSize / 2}px`;
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
        } else {
          const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
          const scale1 = params.shadowScale;
          const scale2 = params.shadowScale / multiplier;
          const offset = params.shadowOffset;
          cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
        }
      }
      const zFactor = (browser3.isSafari || browser3.isWebView) && browser3.needPerspectiveFix ? -swiperSize / 2 : 0;
      wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r7(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r7(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
      wrapperEl.style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
    };
    const setTransition2 = (duration) => {
      const {
        el,
        slides
      } = swiper;
      slides.forEach((slideEl) => {
        slideEl.style.transitionDuration = `${duration}ms`;
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((subEl) => {
          subEl.style.transitionDuration = `${duration}ms`;
        });
      });
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        const shadowEl = el.querySelector(".swiper-cube-shadow");
        if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
      }
    };
    effectInit({
      effect: "cube",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      recreateShadows,
      getEffectParams: () => swiper.params.cubeEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      })
    });
  }

  // node_modules/swiper/shared/create-shadow.mjs
  function createShadow(suffix, slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
    const shadowContainer = getSlideTransformEl(slideEl);
    let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
    if (!shadowEl) {
      shadowEl = createElement("div", shadowClass.split(" "));
      shadowContainer.append(shadowEl);
    }
    return shadowEl;
  }

  // node_modules/swiper/modules/effect-flip.mjs
  function EffectFlip({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      flipEffect: {
        slideShadows: true,
        limitRotation: true
      }
    });
    const createSlideShadows = (slideEl, progress) => {
      let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
      let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
      if (!shadowBefore) {
        shadowBefore = createShadow("flip", slideEl, swiper.isHorizontal() ? "left" : "top");
      }
      if (!shadowAfter) {
        shadowAfter = createShadow("flip", slideEl, swiper.isHorizontal() ? "right" : "bottom");
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      swiper.params.flipEffect;
      swiper.slides.forEach((slideEl) => {
        let progress = slideEl.progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        createSlideShadows(slideEl, progress);
      });
    };
    const setTranslate2 = () => {
      const {
        slides,
        rtlTranslate: rtl
      } = swiper;
      const params = swiper.params.flipEffect;
      const rotateFix = getRotateFix(swiper);
      for (let i8 = 0; i8 < slides.length; i8 += 1) {
        const slideEl = slides[i8];
        let progress = slideEl.progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        const offset = slideEl.swiperSlideOffset;
        const rotate = -180 * progress;
        let rotateY = rotate;
        let rotateX = 0;
        let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }
        slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress);
        }
        const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
        el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements
      });
    };
    effectInit({
      effect: "flip",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      recreateShadows,
      getEffectParams: () => swiper.params.flipEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/swiper/modules/effect-coverflow.mjs
  function EffectCoverflow({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true
      }
    });
    const setTranslate2 = () => {
      const {
        width: swiperWidth,
        height: swiperHeight,
        slides,
        slidesSizesGrid
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform = swiper.translate;
      const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate2 = params.depth;
      const r7 = getRotateFix(swiper);
      for (let i8 = 0, length = slides.length; i8 < length; i8 += 1) {
        const slideEl = slides[i8];
        const slideSize = slidesSizesGrid[i8];
        const slideOffset = slideEl.swiperSlideOffset;
        const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
        const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        let translateZ = -translate2 * Math.abs(offsetMultiplier);
        let stretch = params.stretch;
        if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
          stretch = parseFloat(params.stretch) / 100 * slideSize;
        }
        let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
        let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
        if (Math.abs(translateX) < 1e-3) translateX = 0;
        if (Math.abs(translateY) < 1e-3) translateY = 0;
        if (Math.abs(translateZ) < 1e-3) translateZ = 0;
        if (Math.abs(rotateY) < 1e-3) rotateY = 0;
        if (Math.abs(rotateX) < 1e-3) rotateX = 0;
        if (Math.abs(scale) < 1e-3) scale = 0;
        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r7(rotateX)}deg) rotateY(${r7(rotateY)}deg) scale(${scale})`;
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = slideTransform;
        slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
          let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
          if (!shadowBeforeEl) {
            shadowBeforeEl = createShadow("coverflow", slideEl, isHorizontal ? "left" : "top");
          }
          if (!shadowAfterEl) {
            shadowAfterEl = createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom");
          }
          if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
        }
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
        el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
    };
    effectInit({
      effect: "coverflow",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true
      })
    });
  }

  // node_modules/swiper/modules/effect-creative.mjs
  function EffectCreative({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      creativeEffect: {
        limitProgress: 1,
        shadowPerProgress: false,
        progressMultiplier: 1,
        perspective: true,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });
    const getTranslateValue = (value) => {
      if (typeof value === "string") return value;
      return `${value}px`;
    };
    const setTranslate2 = () => {
      const {
        slides,
        wrapperEl,
        slidesSizesGrid
      } = swiper;
      const params = swiper.params.creativeEffect;
      const {
        progressMultiplier: multiplier
      } = params;
      const isCenteredSlides = swiper.params.centeredSlides;
      const rotateFix = getRotateFix(swiper);
      if (isCenteredSlides) {
        const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
        wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
      }
      for (let i8 = 0; i8 < slides.length; i8 += 1) {
        const slideEl = slides[i8];
        const slideProgress = slideEl.progress;
        const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
        let originalProgress = progress;
        if (!isCenteredSlides) {
          originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
        }
        const offset = slideEl.swiperSlideOffset;
        const t9 = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
        const r7 = [0, 0, 0];
        let custom = false;
        if (!swiper.isHorizontal()) {
          t9[1] = t9[0];
          t9[0] = 0;
        }
        let data = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        if (progress < 0) {
          data = params.next;
          custom = true;
        } else if (progress > 0) {
          data = params.prev;
          custom = true;
        }
        t9.forEach((value, index) => {
          t9[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
        });
        r7.forEach((value, index) => {
          let val = data.rotate[index] * Math.abs(progress * multiplier);
          r7[index] = val;
        });
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        const translateString = t9.join(", ");
        const rotateString = `rotateX(${rotateFix(r7[0])}deg) rotateY(${rotateFix(r7[1])}deg) rotateZ(${rotateFix(r7[2])}deg)`;
        const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
        const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
        const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
        if (custom && data.shadow || !custom) {
          let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
          if (!shadowEl && data.shadow) {
            shadowEl = createShadow("creative", slideEl);
          }
          if (shadowEl) {
            const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
            shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
          }
        }
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
        targetEl.style.opacity = opacityString;
        if (data.origin) {
          targetEl.style.transformOrigin = data.origin;
        }
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
        el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: "creative",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => swiper.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/swiper/modules/effect-cards.mjs
  function EffectCards({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      cardsEffect: {
        slideShadows: true,
        rotate: true,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    });
    const setTranslate2 = () => {
      const {
        slides,
        activeIndex,
        rtlTranslate: rtl
      } = swiper;
      const params = swiper.params.cardsEffect;
      const {
        startTranslate,
        isTouched
      } = swiper.touchEventsData;
      const currentTranslate = rtl ? -swiper.translate : swiper.translate;
      for (let i8 = 0; i8 < slides.length; i8 += 1) {
        const slideEl = slides[i8];
        const slideProgress = slideEl.progress;
        const progress = Math.min(Math.max(slideProgress, -4), 4);
        let offset = slideEl.swiperSlideOffset;
        if (swiper.params.centeredSlides && !swiper.params.cssMode) {
          swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
        }
        if (swiper.params.centeredSlides && swiper.params.cssMode) {
          offset -= slides[0].swiperSlideOffset;
        }
        let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        let tY = 0;
        const tZ = -100 * Math.abs(progress);
        let scale = 1;
        let rotate = -params.perSlideRotate * progress;
        let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
        const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i8 : i8;
        const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
        const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
        if (isSwipeToNext || isSwipeToPrev) {
          const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
          rotate += -28 * progress * subProgress;
          scale += -0.5 * subProgress;
          tXAdd += 96 * subProgress;
          tY = `${(params.rotate || swiper.isHorizontal() ? -25 : 0) * subProgress * Math.abs(progress)}%`;
        }
        if (progress < 0) {
          tX = `calc(${tX}px ${rtl ? "-" : "+"} (${tXAdd * Math.abs(progress)}%))`;
        } else if (progress > 0) {
          tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${tXAdd * Math.abs(progress)}%))`;
        } else {
          tX = `${tX}px`;
        }
        if (!swiper.isHorizontal()) {
          const prevY = tY;
          tY = tX;
          tX = prevY;
        }
        const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
        const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
        if (params.slideShadows) {
          let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
          if (!shadowEl) {
            shadowEl = createShadow("cards", slideEl);
          }
          if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
        }
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
        el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements
      });
    };
    effectInit({
      effect: "cards",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => true,
      overwriteParams: () => ({
        _loopSwapReset: false,
        watchSlidesProgress: true,
        loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
        centeredSlides: true,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/swiper/swiper-bundle.mjs
  var modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
  Swiper.use(modules);

  // node_modules/swiper/shared/update-swiper.mjs
  var paramsList = [
    "eventsPrefix",
    "injectStyles",
    "injectStylesUrls",
    "modules",
    "init",
    "_direction",
    "oneWayMovement",
    "swiperElementNodeName",
    "touchEventsTarget",
    "initialSlide",
    "_speed",
    "cssMode",
    "updateOnWindowResize",
    "resizeObserver",
    "nested",
    "focusableElements",
    "_enabled",
    "_width",
    "_height",
    "preventInteractionOnTransition",
    "userAgent",
    "url",
    "_edgeSwipeDetection",
    "_edgeSwipeThreshold",
    "_freeMode",
    "_autoHeight",
    "setWrapperSize",
    "virtualTranslate",
    "_effect",
    "breakpoints",
    "breakpointsBase",
    "_spaceBetween",
    "_slidesPerView",
    "maxBackfaceHiddenSlides",
    "_grid",
    "_slidesPerGroup",
    "_slidesPerGroupSkip",
    "_slidesPerGroupAuto",
    "_centeredSlides",
    "_centeredSlidesBounds",
    "_slidesOffsetBefore",
    "_slidesOffsetAfter",
    "normalizeSlideIndex",
    "_centerInsufficientSlides",
    "_snapToSlideEdge",
    "_watchOverflow",
    "roundLengths",
    "touchRatio",
    "touchAngle",
    "simulateTouch",
    "_shortSwipes",
    "_longSwipes",
    "longSwipesRatio",
    "longSwipesMs",
    "_followFinger",
    "allowTouchMove",
    "_threshold",
    "touchMoveStopPropagation",
    "touchStartPreventDefault",
    "touchStartForcePreventDefault",
    "touchReleaseOnEdges",
    "uniqueNavElements",
    "_resistance",
    "_resistanceRatio",
    "_watchSlidesProgress",
    "_grabCursor",
    "preventClicks",
    "preventClicksPropagation",
    "_slideToClickedSlide",
    "_loop",
    "loopAdditionalSlides",
    "loopAddBlankSlides",
    "loopPreventsSliding",
    "_rewind",
    "_allowSlidePrev",
    "_allowSlideNext",
    "_swipeHandler",
    "_noSwiping",
    "noSwipingClass",
    "noSwipingSelector",
    "passiveListeners",
    "containerModifierClass",
    "slideClass",
    "slideActiveClass",
    "slideVisibleClass",
    "slideFullyVisibleClass",
    "slideNextClass",
    "slidePrevClass",
    "slideBlankClass",
    "wrapperClass",
    "lazyPreloaderClass",
    "lazyPreloadPrevNext",
    "runCallbacksOnInit",
    "observer",
    "observeParents",
    "observeSlideChildren",
    // modules
    "a11y",
    "_autoplay",
    "_controller",
    "coverflowEffect",
    "cubeEffect",
    "fadeEffect",
    "flipEffect",
    "creativeEffect",
    "cardsEffect",
    "hashNavigation",
    "history",
    "keyboard",
    "mousewheel",
    "_navigation",
    "_pagination",
    "parallax",
    "_scrollbar",
    "_thumbs",
    "virtual",
    "zoom",
    "control"
  ];
  function isObject3(o9) {
    return typeof o9 === "object" && o9 !== null && o9.constructor && Object.prototype.toString.call(o9).slice(8, -1) === "Object" && !o9.__swiper__;
  }
  function extend3(target, src) {
    const noExtend = ["__proto__", "constructor", "prototype"];
    Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (isObject3(src[key]) && isObject3(target[key]) && Object.keys(src[key]).length > 0) {
        if (src[key].__swiper__) target[key] = src[key];
        else extend3(target[key], src[key]);
      } else {
        target[key] = src[key];
      }
    });
  }
  function needsNavigation(params = {}) {
    return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
  }
  function needsPagination(params = {}) {
    return params.pagination && typeof params.pagination.el === "undefined";
  }
  function needsScrollbar(params = {}) {
    return params.scrollbar && typeof params.scrollbar.el === "undefined";
  }
  function attrToProp(attrName = "") {
    return attrName.replace(/-[a-z]/g, (l8) => l8.toUpperCase().replace("-", ""));
  }
  function updateSwiper({
    swiper,
    slides,
    passedParams,
    changedParams,
    nextEl,
    prevEl,
    scrollbarEl,
    paginationEl
  }) {
    const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
    const {
      params: currentParams,
      pagination,
      navigation,
      scrollbar,
      virtual,
      thumbs
    } = swiper;
    let needThumbsInit;
    let needControllerInit;
    let needPaginationInit;
    let needScrollbarInit;
    let needNavigationInit;
    let loopNeedDestroy;
    let loopNeedEnable;
    let loopNeedReloop;
    if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && !passedParams.thumbs.swiper.destroyed && currentParams.thumbs && (!currentParams.thumbs.swiper || currentParams.thumbs.swiper.destroyed)) {
      needThumbsInit = true;
    }
    if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
      needControllerInit = true;
    }
    if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
      needPaginationInit = true;
    }
    if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
      needScrollbarInit = true;
    }
    if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
      needNavigationInit = true;
    }
    const destroyModule = (mod) => {
      if (!swiper[mod]) return;
      swiper[mod].destroy();
      if (mod === "navigation") {
        if (swiper.isElement) {
          swiper[mod].prevEl.remove();
          swiper[mod].nextEl.remove();
        }
        currentParams[mod].prevEl = void 0;
        currentParams[mod].nextEl = void 0;
        swiper[mod].prevEl = void 0;
        swiper[mod].nextEl = void 0;
      } else {
        if (swiper.isElement) {
          swiper[mod].el.remove();
        }
        currentParams[mod].el = void 0;
        swiper[mod].el = void 0;
      }
    };
    if (changedParams.includes("loop") && swiper.isElement) {
      if (currentParams.loop && !passedParams.loop) {
        loopNeedDestroy = true;
      } else if (!currentParams.loop && passedParams.loop) {
        loopNeedEnable = true;
      } else {
        loopNeedReloop = true;
      }
    }
    updateParams.forEach((key) => {
      if (isObject3(currentParams[key]) && isObject3(passedParams[key])) {
        Object.assign(currentParams[key], passedParams[key]);
        if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled) {
          destroyModule(key);
        }
      } else {
        const newValue = passedParams[key];
        if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
          if (newValue === false) {
            destroyModule(key);
          }
        } else {
          currentParams[key] = passedParams[key];
        }
      }
    });
    if (updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) {
      swiper.controller.control = currentParams.controller.control;
    }
    if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
      virtual.slides = slides;
      virtual.update(true);
    } else if (changedParams.includes("virtual") && virtual && currentParams.virtual.enabled) {
      if (slides) virtual.slides = slides;
      virtual.update(true);
    }
    if (changedParams.includes("children") && slides && currentParams.loop) {
      loopNeedReloop = true;
    }
    if (needThumbsInit) {
      const initialized = thumbs.init();
      if (initialized) thumbs.update(true);
    }
    if (needControllerInit) {
      swiper.controller.control = currentParams.controller.control;
    }
    if (needPaginationInit) {
      if (swiper.isElement && (!paginationEl || typeof paginationEl === "string")) {
        paginationEl = document.createElement("div");
        paginationEl.classList.add("swiper-pagination");
        paginationEl.part.add("pagination");
        swiper.el.appendChild(paginationEl);
      }
      if (paginationEl) currentParams.pagination.el = paginationEl;
      pagination.init();
      pagination.render();
      pagination.update();
    }
    if (needScrollbarInit) {
      if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
        scrollbarEl = document.createElement("div");
        scrollbarEl.classList.add("swiper-scrollbar");
        scrollbarEl.part.add("scrollbar");
        swiper.el.appendChild(scrollbarEl);
      }
      if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
      scrollbar.init();
      scrollbar.updateSize();
      scrollbar.setTranslate();
    }
    if (needNavigationInit) {
      if (swiper.isElement) {
        if (!nextEl || typeof nextEl === "string") {
          nextEl = document.createElement("div");
          nextEl.classList.add("swiper-button-next");
          setInnerHTML(nextEl, swiper.navigation.arrowSvg);
          nextEl.part.add("button-next");
          swiper.el.appendChild(nextEl);
        }
        if (!prevEl || typeof prevEl === "string") {
          prevEl = document.createElement("div");
          prevEl.classList.add("swiper-button-prev");
          setInnerHTML(prevEl, swiper.navigation.arrowSvg);
          prevEl.part.add("button-prev");
          swiper.el.appendChild(prevEl);
        }
      }
      if (nextEl) currentParams.navigation.nextEl = nextEl;
      if (prevEl) currentParams.navigation.prevEl = prevEl;
      navigation.init();
      navigation.update();
    }
    if (changedParams.includes("allowSlideNext")) {
      swiper.allowSlideNext = passedParams.allowSlideNext;
    }
    if (changedParams.includes("allowSlidePrev")) {
      swiper.allowSlidePrev = passedParams.allowSlidePrev;
    }
    if (changedParams.includes("direction")) {
      swiper.changeDirection(passedParams.direction, false);
    }
    if (loopNeedDestroy || loopNeedReloop) {
      swiper.loopDestroy();
    }
    if (loopNeedEnable || loopNeedReloop) {
      swiper.loopCreate();
    }
    swiper.update();
  }

  // node_modules/swiper/shared/get-element-params.mjs
  var formatValue = (val) => {
    if (parseFloat(val) === Number(val)) return Number(val);
    if (val === "true") return true;
    if (val === "") return true;
    if (val === "false") return false;
    if (val === "null") return null;
    if (val === "undefined") return void 0;
    if (typeof val === "string" && val.includes("{") && val.includes("}") && val.includes('"')) {
      let v4;
      try {
        v4 = JSON.parse(val);
      } catch (err) {
        v4 = val;
      }
      return v4;
    }
    return val;
  };
  var modulesParamsList = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];
  function getParams(element, propName, propValue) {
    const params = {};
    const passedParams = {};
    extend3(params, defaults);
    const localParamsList = [...paramsList, "on"];
    const allowedParams = localParamsList.map((key) => key.replace(/_/, ""));
    localParamsList.forEach((paramName) => {
      paramName = paramName.replace("_", "");
      if (typeof element[paramName] !== "undefined") {
        passedParams[paramName] = element[paramName];
      }
    });
    const attrsList = [...element.attributes];
    if (typeof propName === "string" && typeof propValue !== "undefined") {
      attrsList.push({
        name: propName,
        value: isObject3(propValue) ? {
          ...propValue
        } : propValue
      });
    }
    attrsList.forEach((attr) => {
      const moduleParam = modulesParamsList.find((mParam) => attr.name.startsWith(`${mParam}-`));
      if (moduleParam) {
        const parentObjName = attrToProp(moduleParam);
        const subObjName = attrToProp(attr.name.split(`${moduleParam}-`)[1]);
        if (typeof passedParams[parentObjName] === "undefined") {
          passedParams[parentObjName] = {};
        }
        if (passedParams[parentObjName] === true) {
          passedParams[parentObjName] = {
            enabled: true
          };
        }
        if (passedParams[parentObjName] === false) {
          passedParams[parentObjName] = {
            enabled: false
          };
        }
        passedParams[parentObjName][subObjName] = formatValue(attr.value);
      } else {
        const name = attrToProp(attr.name);
        if (!allowedParams.includes(name)) return;
        const value = formatValue(attr.value);
        if (passedParams[name] && modulesParamsList.includes(attr.name) && !isObject3(value)) {
          if (passedParams[name].constructor !== Object) {
            passedParams[name] = {};
          }
          passedParams[name].enabled = !!value;
        } else {
          passedParams[name] = value;
        }
      }
    });
    extend3(params, passedParams);
    if (params.navigation) {
      params.navigation = {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
        ...params.navigation !== true ? params.navigation : {}
      };
    } else if (params.navigation === false) {
      delete params.navigation;
    }
    if (params.scrollbar) {
      params.scrollbar = {
        el: ".swiper-scrollbar",
        ...params.scrollbar !== true ? params.scrollbar : {}
      };
    } else if (params.scrollbar === false) {
      delete params.scrollbar;
    }
    if (params.pagination) {
      params.pagination = {
        el: ".swiper-pagination",
        ...params.pagination !== true ? params.pagination : {}
      };
    } else if (params.pagination === false) {
      delete params.pagination;
    }
    return {
      params,
      passedParams
    };
  }

  // node_modules/swiper/swiper-element-bundle.mjs
  var SwiperCSS = `:host{--swiper-theme-color:#007aff}:host{display:block;margin-left:auto;margin-right:auto;position:relative;z-index:1}.swiper{display:block;height:100%;list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0;position:relative;width:100%;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{box-sizing:initial;display:flex;height:100%;position:relative;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);width:100%;z-index:1}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){display:block;flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){backface-visibility:hidden;transform:translateZ(0)}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-slides-offset-before);scroll-margin-inline-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-horizontal ::slotted(swiper-slide):last-child{margin-inline-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-slides-offset-before);scroll-margin-block-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-vertical ::slotted(swiper-slide):last-child{margin-block-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{height:var(--swiper-centered-offset-after);min-width:1px;width:100%}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";left:0;pointer-events:none;position:absolute;top:0}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{height:var(--swiper-virtual-size);width:1px}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{align-items:center;color:var(--swiper-navigation-color,var(--swiper-theme-color));cursor:pointer;display:flex;height:var(--swiper-navigation-size);justify-content:center;position:absolute;width:var(--swiper-navigation-size);z-index:10}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{cursor:auto;opacity:.35;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{cursor:auto;opacity:0;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next ::slotted(svg),.swiper-button-next svg,.swiper-button-prev ::slotted(svg),.swiper-button-prev svg{height:100%;object-fit:contain;transform-origin:center;width:100%;fill:currentColor;pointer-events:none}.swiper-button-lock{display:none}.swiper-button-next,.swiper-button-prev{margin-top:calc(0px - var(--swiper-navigation-size)/2);top:var(--swiper-navigation-top-offset,50%)}.swiper-button-prev{left:var(--swiper-navigation-sides-offset,4px);right:auto}.swiper-button-prev .swiper-navigation-icon,.swiper-button-prev ::slotted(.swiper-navigation-icon){transform:rotate(180deg)}.swiper-button-next{left:auto;right:var(--swiper-navigation-sides-offset,4px)}.swiper-horizontal .swiper-button-next,.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-next,.swiper-horizontal~.swiper-button-prev{margin-left:0;margin-top:calc(0px - var(--swiper-navigation-size)/2);top:var(--swiper-navigation-top-offset,50%)}.swiper-horizontal .swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next,.swiper-horizontal~.swiper-button-prev{left:var(--swiper-navigation-sides-offset,4px);right:auto}.swiper-horizontal .swiper-button-next,.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev,.swiper-horizontal~.swiper-button-next{left:auto;right:var(--swiper-navigation-sides-offset,4px)}.swiper-horizontal .swiper-button-prev .swiper-navigation-icon,.swiper-horizontal .swiper-button-prev ::slotted(.swiper-navigation-icon),.swiper-horizontal.swiper-rtl .swiper-button-next .swiper-navigation-icon,.swiper-horizontal.swiper-rtl .swiper-button-next ::slotted(.swiper-navigation-icon),.swiper-horizontal.swiper-rtl~.swiper-button-next .swiper-navigation-icon,.swiper-horizontal.swiper-rtl~.swiper-button-next ::slotted(.swiper-navigation-icon),.swiper-horizontal~.swiper-button-prev .swiper-navigation-icon,.swiper-horizontal~.swiper-button-prev ::slotted(.swiper-navigation-icon){transform:rotate(180deg)}.swiper-horizontal.swiper-rtl .swiper-button-prev .swiper-navigation-icon,.swiper-horizontal.swiper-rtl .swiper-button-prev ::slotted(.swiper-navigation-icon),.swiper-horizontal.swiper-rtl~.swiper-button-prev .swiper-navigation-icon,.swiper-horizontal.swiper-rtl~.swiper-button-prev ::slotted(.swiper-navigation-icon){transform:rotate(0deg)}.swiper-vertical .swiper-button-next,.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-next,.swiper-vertical~.swiper-button-prev{left:var(--swiper-navigation-top-offset,50%);margin-left:calc(0px - var(--swiper-navigation-size)/2);margin-top:0;right:auto}.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev{bottom:auto;top:var(--swiper-navigation-sides-offset,4px)}.swiper-vertical .swiper-button-prev .swiper-navigation-icon,.swiper-vertical .swiper-button-prev ::slotted(.swiper-navigation-icon),.swiper-vertical~.swiper-button-prev .swiper-navigation-icon,.swiper-vertical~.swiper-button-prev ::slotted(.swiper-navigation-icon){transform:rotate(-90deg)}.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next{bottom:var(--swiper-navigation-sides-offset,4px);top:auto}.swiper-vertical .swiper-button-next .swiper-navigation-icon,.swiper-vertical .swiper-button-next ::slotted(.swiper-navigation-icon),.swiper-vertical~.swiper-button-next .swiper-navigation-icon,.swiper-vertical~.swiper-button-next ::slotted(.swiper-navigation-icon){transform:rotate(90deg)}.swiper-pagination{position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);left:0;top:var(--swiper-pagination-top,auto);width:100%}.swiper-pagination-bullets-dynamic{font-size:0;overflow:hidden}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{position:relative;transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{background:var(--swiper-pagination-bullet-inactive-color,#000);border-radius:var(--swiper-pagination-bullet-border-radius,50%);display:inline-block;height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));opacity:var(--swiper-pagination-bullet-inactive-opacity,.2);width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px))}button.swiper-pagination-bullet{appearance:none;border:none;box-shadow:none;margin:0;padding:0}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{background:var(--swiper-pagination-color,var(--swiper-theme-color));opacity:var(--swiper-pagination-bullet-opacity,1)}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{left:var(--swiper-pagination-left,auto);right:var(--swiper-pagination-right,8px);top:50%;transform:translate3d(0,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{display:block;margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,#00000040);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));height:100%;left:0;position:absolute;top:0;transform:scale(0);transform-origin:left top;width:100%}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0;width:100%}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{height:100%;left:0;top:0;width:var(--swiper-pagination-progressbar-size,4px)}.swiper-pagination-lock{display:none}.swiper-scrollbar{background:var(--swiper-scrollbar-bg-color,#0000001a);border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{bottom:var(--swiper-scrollbar-bottom,4px);height:var(--swiper-scrollbar-size,4px);left:var(--swiper-scrollbar-sides-offset,1%);position:absolute;top:var(--swiper-scrollbar-top,auto);width:calc(100% - var(--swiper-scrollbar-sides-offset, 1%)*2);z-index:50}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{height:calc(100% - var(--swiper-scrollbar-sides-offset, 1%)*2);left:var(--swiper-scrollbar-left,auto);position:absolute;right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);width:var(--swiper-scrollbar-size,4px);z-index:50}.swiper-scrollbar-drag{background:var(--swiper-scrollbar-drag-bg-color,#00000080);border-radius:var(--swiper-scrollbar-border-radius,10px);height:100%;left:0;position:relative;top:0;width:100%}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{left:0;opacity:0;pointer-events:none;position:absolute;top:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{margin:0 auto;transition-timing-function:ease-out}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-direction:column;flex-wrap:wrap}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){backface-visibility:hidden;height:100%;pointer-events:none;transform-origin:0 0;visibility:hidden;width:100%;z-index:1}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{bottom:0;height:100%;left:0;opacity:.6;position:absolute;width:100%;z-index:0}.swiper-cube .swiper-cube-shadow:before{background:#000;bottom:0;content:"";filter:blur(50px);left:0;position:absolute;right:0;top:0}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){backface-visibility:hidden;pointer-events:none;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){backface-visibility:hidden;overflow:hidden;transform-origin:center bottom}`;
  var SwiperSlideCSS = `::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}::slotted(.swiper-slide-shadow){background:#00000026}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(270deg,#00000080,#0000)}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(90deg,#00000080,#0000)}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(0deg,#00000080,#0000)}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(180deg,#00000080,#0000)}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s linear infinite;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid #0000;box-sizing:border-box;height:42px;left:50%;margin-left:-21px;margin-top:-21px;position:absolute;top:50%;transform-origin:50%;width:42px;z-index:10}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){backface-visibility:hidden;z-index:0}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){backface-visibility:hidden;z-index:0}::slotted(.swiper-zoom-container){align-items:center;display:flex;height:100%;justify-content:center;text-align:center;width:100%}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-height:100%;max-width:100%;object-fit:contain}`;
  var DummyHTMLElement = class {
  };
  var ClassToExtend = typeof window === "undefined" || typeof HTMLElement === "undefined" ? DummyHTMLElement : HTMLElement;
  var addStyle = (shadowRoot, styles) => {
    if (typeof CSSStyleSheet !== "undefined" && shadowRoot.adoptedStyleSheets) {
      const styleSheet = new CSSStyleSheet();
      styleSheet.replaceSync(styles);
      shadowRoot.adoptedStyleSheets = [styleSheet];
    } else {
      const style = document.createElement("style");
      style.rel = "stylesheet";
      style.textContent = styles;
      shadowRoot.appendChild(style);
    }
  };
  var SwiperContainer = class extends ClassToExtend {
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
    }
    cssStyles() {
      return [
        SwiperCSS,
        // eslint-disable-line
        ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []
      ].join("\n");
    }
    cssLinks() {
      return this.injectStylesUrls || [];
    }
    calcSlideSlots() {
      const currentSideSlots = this.slideSlots || 0;
      const slideSlotChildren = [...this.querySelectorAll(`[slot^=slide-]`)].map((child) => {
        return parseInt(child.getAttribute("slot").split("slide-")[1], 10);
      });
      this.slideSlots = slideSlotChildren.length ? Math.max(...slideSlotChildren) + 1 : 0;
      if (!this.rendered) return;
      if (this.slideSlots > currentSideSlots) {
        for (let i8 = currentSideSlots; i8 < this.slideSlots; i8 += 1) {
          const slideEl = document.createElement("swiper-slide");
          slideEl.setAttribute("part", `slide slide-${i8 + 1}`);
          const slotEl = document.createElement("slot");
          slotEl.setAttribute("name", `slide-${i8 + 1}`);
          slideEl.appendChild(slotEl);
          this.shadowRoot.querySelector(".swiper-wrapper").appendChild(slideEl);
        }
      } else if (this.slideSlots < currentSideSlots) {
        const slides = this.swiper.slides;
        for (let i8 = slides.length - 1; i8 >= 0; i8 -= 1) {
          if (i8 > this.slideSlots) {
            slides[i8].remove();
          }
        }
      }
    }
    render() {
      if (this.rendered) return;
      this.calcSlideSlots();
      let localStyles = this.cssStyles();
      if (this.slideSlots > 0) {
        localStyles = localStyles.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1");
      }
      if (localStyles.length) {
        addStyle(this.shadowRoot, localStyles);
      }
      this.cssLinks().forEach((url) => {
        const linkExists = this.shadowRoot.querySelector(`link[href="${url}"]`);
        if (linkExists) return;
        const linkEl = document.createElement("link");
        linkEl.rel = "stylesheet";
        linkEl.href = url;
        this.shadowRoot.appendChild(linkEl);
      });
      const el = document.createElement("div");
      el.classList.add("swiper");
      el.part = "container";
      setInnerHTML(el, `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({
        length: this.slideSlots
      }).map((_2, index) => `
        <swiper-slide part="slide slide-${index}">
          <slot name="slide-${index}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${needsNavigation(this.passedParams) ? `
        <div part="button-prev" class="swiper-button-prev"><slot name="button-prev"></slot></div>
        <div part="button-next" class="swiper-button-next"><slot name="button-next"></slot></div>
      ` : ""}
      ${needsPagination(this.passedParams) ? `
        <div part="pagination" class="swiper-pagination"></div>
      ` : ""}
      ${needsScrollbar(this.passedParams) ? `
        <div part="scrollbar" class="swiper-scrollbar"></div>
      ` : ""}
    `);
      this.shadowRoot.appendChild(el);
      this.rendered = true;
    }
    initialize() {
      if (this.swiper && this.swiper.initialized) return;
      const {
        params: swiperParams,
        passedParams
      } = getParams(this);
      this.swiperParams = swiperParams;
      this.passedParams = passedParams;
      delete this.swiperParams.init;
      this.render();
      this.swiper = new Swiper(this.shadowRoot.querySelector(".swiper"), {
        ...swiperParams.virtual ? {} : {
          observer: true
        },
        ...swiperParams,
        touchEventsTarget: "container",
        onAny: (name, ...args) => {
          if (name === "observerUpdate") {
            this.calcSlideSlots();
          }
          const eventName = swiperParams.eventsPrefix ? `${swiperParams.eventsPrefix}${name.toLowerCase()}` : name.toLowerCase();
          const event2 = new CustomEvent(eventName, {
            detail: args,
            bubbles: name !== "hashChange",
            cancelable: true
          });
          this.dispatchEvent(event2);
        }
      });
    }
    connectedCallback() {
      if (this.swiper && this.swiper.initialized && this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM) {
        return;
      }
      if (this.init === false || this.getAttribute("init") === "false") {
        return;
      }
      this.initialize();
    }
    disconnectedCallback() {
      if (this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM) {
        return;
      }
      if (this.swiper && this.swiper.destroy) {
        this.swiper.destroy();
      }
    }
    updateSwiperOnPropChange(propName, propValue) {
      const {
        params: swiperParams,
        passedParams
      } = getParams(this, propName, propValue);
      this.passedParams = passedParams;
      this.swiperParams = swiperParams;
      if (this.swiper && this.swiper.params[propName] === propValue) {
        return;
      }
      updateSwiper({
        swiper: this.swiper,
        passedParams: this.passedParams,
        changedParams: [attrToProp(propName)],
        ...propName === "navigation" && passedParams[propName] ? {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        } : {},
        ...propName === "pagination" && passedParams[propName] ? {
          paginationEl: ".swiper-pagination"
        } : {},
        ...propName === "scrollbar" && passedParams[propName] ? {
          scrollbarEl: ".swiper-scrollbar"
        } : {}
      });
    }
    attributeChangedCallback(attr, prevValue, newValue) {
      if (!(this.swiper && this.swiper.initialized)) return;
      if (prevValue === "true" && newValue === null) {
        newValue = false;
      }
      this.updateSwiperOnPropChange(attr, newValue);
    }
    static get observedAttributes() {
      const attrs = paramsList.filter((param) => param.includes("_")).map((param) => param.replace(/[A-Z]/g, (v4) => `-${v4}`).replace("_", "").toLowerCase());
      return attrs;
    }
  };
  paramsList.forEach((paramName) => {
    if (paramName === "init") return;
    paramName = paramName.replace("_", "");
    Object.defineProperty(SwiperContainer.prototype, paramName, {
      configurable: true,
      get() {
        return (this.passedParams || {})[paramName];
      },
      set(value) {
        if (!this.passedParams) this.passedParams = {};
        this.passedParams[paramName] = value;
        if (!(this.swiper && this.swiper.initialized)) return;
        this.updateSwiperOnPropChange(paramName, value);
      }
    });
  });
  var SwiperSlide = class extends ClassToExtend {
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
    }
    render() {
      const lazy = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true";
      addStyle(this.shadowRoot, SwiperSlideCSS);
      this.shadowRoot.appendChild(document.createElement("slot"));
      if (lazy) {
        const lazyDiv = document.createElement("div");
        lazyDiv.classList.add("swiper-lazy-preloader");
        lazyDiv.part.add("preloader");
        this.shadowRoot.appendChild(lazyDiv);
      }
    }
    initialize() {
      this.render();
    }
    connectedCallback() {
      if (this.swiperLoopMoveDOM) {
        return;
      }
      this.initialize();
    }
  };
  var register = () => {
    if (typeof window === "undefined") return;
    if (!window.customElements.get("swiper-container")) window.customElements.define("swiper-container", SwiperContainer);
    if (!window.customElements.get("swiper-slide")) window.customElements.define("swiper-slide", SwiperSlide);
  };
  if (typeof window !== "undefined") {
    window.SwiperElementRegisterParams = (params) => {
      paramsList.push(...params);
    };
  }

  // assets/js/functions/subMenuDesktop.js
  function SubMenuDesktop() {
    document.querySelectorAll("#main-menu .menu-item-has-children")?.forEach((menu) => {
      const svg = document.querySelector("div#chevron-down")?.cloneNode(true);
      const link = menu.querySelector("a");
      svg.classList.remove("hidden");
      svg.classList.add("mr-1", "size-4", "stroke-2");
      link.appendChild(svg);
    });
  }

  // assets/js/functions/subMenuMobile.js
  function SubMenuMobile() {
    jQuery(document).ready(function($) {
      var arrowIcon = `<i class="sub-menu-icon mt-3 flex justify-end" style="transition:transform 0.3s;vertical-align:middle;">
      <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 rotate-90 transition-all duration-300">
        <path d="M10 8L14 12.5L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </i>`;
      $("#mobile-menu .menu-item-has-children").each(function() {
        var $menuItem = $(this);
        var $subMenuToggle = $(arrowIcon);
        $menuItem.prepend($subMenuToggle);
        $subMenuToggle.on("click", function(e10) {
          e10.stopPropagation();
          var $subMenu = $menuItem.children("ul");
          if ($subMenu.is(":visible")) {
            $subMenu.slideUp();
            $subMenuToggle.find("svg").removeClass("rotate-[270deg]");
          } else {
            $subMenu.slideDown();
            $subMenuToggle.find("svg").addClass("rotate-[270deg]");
          }
        });
      });
    });
  }

  // assets/js/functions/htmx.js
  init_htmx_esm();
  function Htmx() {
    window.htmx = (init_htmx_esm(), __toCommonJS(htmx_esm_exports));
  }

  // assets/js/functions/faq.js
  function FaqTabs() {
    const handlers = document.querySelectorAll(".faq-handler");
    const panels = document.querySelectorAll(".faq-panel");
    if (!panels || !handlers) return;
    function activateTab(element) {
      if (!element) return;
      element.classList.replace("bg-cynWhite", "bg-cynYellow");
      element.classList.replace("text-cynBlack", "text-cynWhite");
    }
    function deActivateTab(element) {
      if (!element) return;
      element.classList.replace("bg-cynYellow", "bg-cynWhite");
      element.classList.replace("text-cynWhite", "text-cynBlack");
    }
    function activatePanel(element) {
      if (!element) return;
      element.classList.replace("grid-rows-[0fr]", "grid-rows-[1fr]");
    }
    function deActivatePanel(element) {
      if (!element) return;
      element.classList.replace("grid-rows-[1fr]", "grid-rows-[0fr]");
    }
    activateTab(handlers[0]);
    activatePanel(panels[0]);
    handlers.forEach((handler) => {
      handler.addEventListener("click", () => {
        handlers.forEach((innerHandler) => deActivateTab(innerHandler));
        activateTab(handler);
        panels.forEach((panel) => {
          const isRelatedPanel = panel.getAttribute("controlled-by") === handler.id;
          if (isRelatedPanel) {
            activatePanel(panel);
          } else {
            deActivatePanel(panel);
          }
        });
      });
    });
  }
  function FaqCard() {
    const faqCards = document.querySelectorAll(".faq-card");
    if (!faqCards) return;
    function activateFaq(faq, expert) {
      expert.classList.replace("grid-rows-[0fr]", "grid-rows-[1fr]");
      const svg = faq.querySelector("svg");
      const faqToggle = faq.querySelector(".faq-toggle");
      faqToggle.classList.replace(
        "[&_span]:text-cynBlack/60",
        "[&_span]:text-cynBlack"
      );
      if (svg) {
        svg.classList.add("rotate-45");
        svg.classList.add("text-cynYellow");
      }
    }
    function deActivateFaq(faq, expert) {
      expert.classList.replace("grid-rows-[1fr]", "grid-rows-[0fr]");
      const svg = faq.querySelector("svg");
      const faqToggle = faq.querySelector(".faq-toggle");
      faqToggle.classList.replace(
        "[&_span]:text-cynBlack",
        "[&_span]:text-cynBlack/60"
      );
      if (svg) {
        svg.classList.remove("rotate-45");
        svg.classList.remove("text-cynYellow");
      }
    }
    faqCards.forEach((faq) => {
      const faqToggle = faq.querySelector(".faq-toggle");
      const expert = faq.querySelector(".faq-expert");
      if (!expert) return;
      faqToggle?.addEventListener("click", () => {
        const faqIsActive = expert.classList.contains("grid-rows-[1fr]");
        if (faqIsActive) {
          deActivateFaq(faq, expert);
        } else {
          activateFaq(faq, expert);
        }
      });
    });
  }

  // assets/js/functions/videoCover.js
  function videoCover() {
    const videoCovers = document.querySelectorAll(".video-cover");
    const videoElements = document.querySelectorAll(".video");
    if (!videoCovers || videoCovers.length === 0) {
      return;
    }
    videoCovers.forEach((videoCover2) => {
      videoCover2.addEventListener("click", function(event2) {
        event2.preventDefault();
        const currentCover = this;
        const videoElement = currentCover.parentElement.querySelector(".video");
        if (videoElement && videoElement.tagName === "VIDEO") {
          videoElements.forEach((video) => {
            if (video !== videoElement) {
              video.pause();
            }
          });
          videoElement.play().catch((error) => {
            console.error("Error playing video:", error);
          });
          currentCover.classList.replace("opacity-100", "opacity-0");
          currentCover.classList.replace("pointer-events-auto", "pointer-events-none");
        } else {
          console.warn("No corresponding video element found for this cover");
        }
      });
    });
  }

  // node_modules/plyr/dist/plyr.mjs
  function _defineProperty$1(e10, r7, t9) {
    return (r7 = _toPropertyKey(r7)) in e10 ? Object.defineProperty(e10, r7, {
      value: t9,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e10[r7] = t9, e10;
  }
  function _toPrimitive(t9, r7) {
    if ("object" != typeof t9 || !t9) return t9;
    var e10 = t9[Symbol.toPrimitive];
    if (void 0 !== e10) {
      var i8 = e10.call(t9, r7);
      if ("object" != typeof i8) return i8;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r7 ? String : Number)(t9);
  }
  function _toPropertyKey(t9) {
    var i8 = _toPrimitive(t9, "string");
    return "symbol" == typeof i8 ? i8 : i8 + "";
  }
  function _classCallCheck(e10, t9) {
    if (!(e10 instanceof t9)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e10, t9) {
    for (var n11 = 0; n11 < t9.length; n11++) {
      var r7 = t9[n11];
      r7.enumerable = r7.enumerable || false, r7.configurable = true, "value" in r7 && (r7.writable = true), Object.defineProperty(e10, r7.key, r7);
    }
  }
  function _createClass(e10, t9, n11) {
    return t9 && _defineProperties(e10.prototype, t9), n11 && _defineProperties(e10, n11), e10;
  }
  function _defineProperty(e10, t9, n11) {
    return t9 in e10 ? Object.defineProperty(e10, t9, {
      value: n11,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e10[t9] = n11, e10;
  }
  function ownKeys(e10, t9) {
    var n11 = Object.keys(e10);
    if (Object.getOwnPropertySymbols) {
      var r7 = Object.getOwnPropertySymbols(e10);
      t9 && (r7 = r7.filter(function(t10) {
        return Object.getOwnPropertyDescriptor(e10, t10).enumerable;
      })), n11.push.apply(n11, r7);
    }
    return n11;
  }
  function _objectSpread2(e10) {
    for (var t9 = 1; t9 < arguments.length; t9++) {
      var n11 = null != arguments[t9] ? arguments[t9] : {};
      t9 % 2 ? ownKeys(Object(n11), true).forEach(function(t10) {
        _defineProperty(e10, t10, n11[t10]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e10, Object.getOwnPropertyDescriptors(n11)) : ownKeys(Object(n11)).forEach(function(t10) {
        Object.defineProperty(e10, t10, Object.getOwnPropertyDescriptor(n11, t10));
      });
    }
    return e10;
  }
  var defaults$1 = {
    addCSS: true,
    thumbWidth: 15,
    watch: true
  };
  function matches$1(e10, t9) {
    return function() {
      return Array.from(document.querySelectorAll(t9)).includes(this);
    }.call(e10, t9);
  }
  function trigger(e10, t9) {
    if (e10 && t9) {
      var n11 = new Event(t9, {
        bubbles: true
      });
      e10.dispatchEvent(n11);
    }
  }
  var getConstructor$1 = function(e10) {
    return null != e10 ? e10.constructor : null;
  };
  var instanceOf$1 = function(e10, t9) {
    return !!(e10 && t9 && e10 instanceof t9);
  };
  var isNullOrUndefined$1 = function(e10) {
    return null == e10;
  };
  var isObject$1 = function(e10) {
    return getConstructor$1(e10) === Object;
  };
  var isNumber$1 = function(e10) {
    return getConstructor$1(e10) === Number && !Number.isNaN(e10);
  };
  var isString$1 = function(e10) {
    return getConstructor$1(e10) === String;
  };
  var isBoolean$1 = function(e10) {
    return getConstructor$1(e10) === Boolean;
  };
  var isFunction$1 = function(e10) {
    return getConstructor$1(e10) === Function;
  };
  var isArray$1 = function(e10) {
    return Array.isArray(e10);
  };
  var isNodeList$1 = function(e10) {
    return instanceOf$1(e10, NodeList);
  };
  var isElement$1 = function(e10) {
    return instanceOf$1(e10, Element);
  };
  var isEvent$1 = function(e10) {
    return instanceOf$1(e10, Event);
  };
  var isEmpty$1 = function(e10) {
    return isNullOrUndefined$1(e10) || (isString$1(e10) || isArray$1(e10) || isNodeList$1(e10)) && !e10.length || isObject$1(e10) && !Object.keys(e10).length;
  };
  var is$1 = {
    nullOrUndefined: isNullOrUndefined$1,
    object: isObject$1,
    number: isNumber$1,
    string: isString$1,
    boolean: isBoolean$1,
    function: isFunction$1,
    array: isArray$1,
    nodeList: isNodeList$1,
    element: isElement$1,
    event: isEvent$1,
    empty: isEmpty$1
  };
  function getDecimalPlaces(e10) {
    var t9 = "".concat(e10).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return t9 ? Math.max(0, (t9[1] ? t9[1].length : 0) - (t9[2] ? +t9[2] : 0)) : 0;
  }
  function round(e10, t9) {
    if (1 > t9) {
      var n11 = getDecimalPlaces(t9);
      return parseFloat(e10.toFixed(n11));
    }
    return Math.round(e10 / t9) * t9;
  }
  var RangeTouch = (function() {
    function e10(t9, n11) {
      _classCallCheck(this, e10), is$1.element(t9) ? this.element = t9 : is$1.string(t9) && (this.element = document.querySelector(t9)), is$1.element(this.element) && is$1.empty(this.element.rangeTouch) && (this.config = _objectSpread2({}, defaults$1, {}, n11), this.init());
    }
    return _createClass(e10, [{
      key: "init",
      value: function() {
        e10.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
      }
    }, {
      key: "destroy",
      value: function() {
        e10.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
      }
    }, {
      key: "listeners",
      value: function(e11) {
        var t9 = this, n11 = e11 ? "addEventListener" : "removeEventListener";
        ["touchstart", "touchmove", "touchend"].forEach(function(e12) {
          t9.element[n11](e12, function(e13) {
            return t9.set(e13);
          }, false);
        });
      }
    }, {
      key: "get",
      value: function(t9) {
        if (!e10.enabled || !is$1.event(t9)) return null;
        var n11, r7 = t9.target, i8 = t9.changedTouches[0], o9 = parseFloat(r7.getAttribute("min")) || 0, s11 = parseFloat(r7.getAttribute("max")) || 100, u6 = parseFloat(r7.getAttribute("step")) || 1, c6 = r7.getBoundingClientRect(), a7 = 100 / c6.width * (this.config.thumbWidth / 2) / 100;
        return 0 > (n11 = 100 / c6.width * (i8.clientX - c6.left)) ? n11 = 0 : 100 < n11 && (n11 = 100), 50 > n11 ? n11 -= (100 - 2 * n11) * a7 : 50 < n11 && (n11 += 2 * (n11 - 50) * a7), o9 + round(n11 / 100 * (s11 - o9), u6);
      }
    }, {
      key: "set",
      value: function(t9) {
        e10.enabled && is$1.event(t9) && !t9.target.disabled && (t9.preventDefault(), t9.target.value = this.get(t9), trigger(t9.target, "touchend" === t9.type ? "change" : "input"));
      }
    }], [{
      key: "setup",
      value: function(t9) {
        var n11 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r7 = null;
        if (is$1.empty(t9) || is$1.string(t9) ? r7 = Array.from(document.querySelectorAll(is$1.string(t9) ? t9 : 'input[type="range"]')) : is$1.element(t9) ? r7 = [t9] : is$1.nodeList(t9) ? r7 = Array.from(t9) : is$1.array(t9) && (r7 = t9.filter(is$1.element)), is$1.empty(r7)) return null;
        var i8 = _objectSpread2({}, defaults$1, {}, n11);
        if (is$1.string(t9) && i8.watch) {
          var o9 = new MutationObserver(function(n12) {
            Array.from(n12).forEach(function(n13) {
              Array.from(n13.addedNodes).forEach(function(n14) {
                is$1.element(n14) && matches$1(n14, t9) && new e10(n14, i8);
              });
            });
          });
          o9.observe(document.body, {
            childList: true,
            subtree: true
          });
        }
        return r7.map(function(t10) {
          return new e10(t10, n11);
        });
      }
    }, {
      key: "enabled",
      get: function() {
        return "ontouchstart" in document.documentElement;
      }
    }]), e10;
  })();
  var getConstructor = (input) => input !== null && typeof input !== "undefined" ? input.constructor : null;
  var instanceOf = (input, constructor) => Boolean(input && constructor && input instanceof constructor);
  var isNullOrUndefined = (input) => input === null || typeof input === "undefined";
  var isObject4 = (input) => getConstructor(input) === Object;
  var isNumber = (input) => getConstructor(input) === Number && !Number.isNaN(input);
  var isString = (input) => getConstructor(input) === String;
  var isBoolean = (input) => getConstructor(input) === Boolean;
  var isFunction2 = (input) => typeof input === "function";
  var isArray = (input) => Array.isArray(input);
  var isWeakMap = (input) => instanceOf(input, WeakMap);
  var isNodeList = (input) => instanceOf(input, NodeList);
  var isTextNode = (input) => getConstructor(input) === Text;
  var isEvent = (input) => instanceOf(input, Event);
  var isKeyboardEvent = (input) => instanceOf(input, KeyboardEvent);
  var isCue = (input) => instanceOf(input, window.TextTrackCue) || instanceOf(input, window.VTTCue);
  var isTrack = (input) => instanceOf(input, TextTrack) || !isNullOrUndefined(input) && isString(input.kind);
  var isPromise = (input) => instanceOf(input, Promise) && isFunction2(input.then);
  function isElement(input) {
    return input !== null && typeof input === "object" && input.nodeType === 1 && typeof input.style === "object" && typeof input.ownerDocument === "object";
  }
  function isEmpty(input) {
    return isNullOrUndefined(input) || (isString(input) || isArray(input) || isNodeList(input)) && !input.length || isObject4(input) && !Object.keys(input).length;
  }
  function isUrl(input) {
    if (instanceOf(input, window.URL)) {
      return true;
    }
    if (!isString(input)) {
      return false;
    }
    let string = input;
    if (!input.startsWith("http://") || !input.startsWith("https://")) {
      string = `http://${input}`;
    }
    try {
      return !isEmpty(new URL(string).hostname);
    } catch {
      return false;
    }
  }
  var is = {
    nullOrUndefined: isNullOrUndefined,
    object: isObject4,
    number: isNumber,
    string: isString,
    boolean: isBoolean,
    function: isFunction2,
    array: isArray,
    weakMap: isWeakMap,
    nodeList: isNodeList,
    element: isElement,
    textNode: isTextNode,
    event: isEvent,
    keyboardEvent: isKeyboardEvent,
    cue: isCue,
    track: isTrack,
    promise: isPromise,
    url: isUrl,
    empty: isEmpty
  };
  var transitionEndEvent = (() => {
    const element = document.createElement("span");
    const events2 = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    const type = Object.keys(events2).find((event2) => element.style[event2] !== void 0);
    return is.string(type) ? events2[type] : false;
  })();
  function repaint(element, delay) {
    setTimeout(() => {
      try {
        element.hidden = true;
        element.offsetHeight;
        element.hidden = false;
      } catch {
      }
    }, delay);
  }
  function cloneDeep(object) {
    return JSON.parse(JSON.stringify(object));
  }
  function getDeep(object, path) {
    return path.split(".").reduce((obj, key) => obj && obj[key], object);
  }
  function extend4(target = {}, ...sources) {
    if (!sources.length) {
      return target;
    }
    const source2 = sources.shift();
    if (!is.object(source2)) {
      return target;
    }
    Object.keys(source2).forEach((key) => {
      if (is.object(source2[key])) {
        if (!Object.keys(target).includes(key)) {
          Object.assign(target, {
            [key]: {}
          });
        }
        extend4(target[key], source2[key]);
      } else {
        Object.assign(target, {
          [key]: source2[key]
        });
      }
    });
    return extend4(target, ...sources);
  }
  function wrap(elements, wrapper) {
    const targets = elements.length ? elements : [elements];
    Array.from(targets).reverse().forEach((element, index) => {
      const child = index > 0 ? wrapper.cloneNode(true) : wrapper;
      const parent = element.parentNode;
      const sibling = element.nextSibling;
      child.appendChild(element);
      if (sibling) {
        parent.insertBefore(child, sibling);
      } else {
        parent.appendChild(child);
      }
    });
  }
  function setAttributes(element, attributes) {
    if (!is.element(element) || is.empty(attributes)) return;
    Object.entries(attributes).filter(([, value]) => !is.nullOrUndefined(value)).forEach(([key, value]) => element.setAttribute(key, value));
  }
  function createElement2(type, attributes, text) {
    const element = document.createElement(type);
    if (is.object(attributes)) {
      setAttributes(element, attributes);
    }
    if (is.string(text)) {
      element.textContent = text;
    }
    return element;
  }
  function insertAfter(element, target) {
    if (!is.element(element) || !is.element(target)) return;
    target.parentNode.insertBefore(element, target.nextSibling);
  }
  function insertElement(type, parent, attributes, text) {
    if (!is.element(parent)) return;
    parent.appendChild(createElement2(type, attributes, text));
  }
  function removeElement2(element) {
    if (is.nodeList(element) || is.array(element)) {
      Array.from(element).forEach(removeElement2);
      return;
    }
    if (!is.element(element) || !is.element(element.parentNode)) {
      return;
    }
    element.parentNode.removeChild(element);
  }
  function emptyElement(element) {
    if (!is.element(element)) return;
    let {
      length
    } = element.childNodes;
    while (length > 0) {
      element.removeChild(element.lastChild);
      length -= 1;
    }
  }
  function replaceElement(newChild, oldChild) {
    if (!is.element(oldChild) || !is.element(oldChild.parentNode) || !is.element(newChild)) return null;
    oldChild.parentNode.replaceChild(newChild, oldChild);
    return newChild;
  }
  function getAttributesFromSelector(sel, existingAttributes) {
    if (!is.string(sel) || is.empty(sel)) return {};
    const attributes = {};
    const existing = extend4({}, existingAttributes);
    sel.split(",").forEach((s11) => {
      const selector = s11.trim();
      const className = selector.replace(".", "");
      const stripped = selector.replace(/[[\]]/g, "");
      const parts = stripped.split("=");
      const [key] = parts;
      const value = parts.length > 1 ? parts[1].replace(/["']/g, "") : "";
      const start = selector.charAt(0);
      switch (start) {
        case ".":
          if (is.string(existing.class)) {
            attributes.class = `${existing.class} ${className}`;
          } else {
            attributes.class = className;
          }
          break;
        case "#":
          attributes.id = selector.replace("#", "");
          break;
        case "[":
          attributes[key] = value;
          break;
      }
    });
    return extend4(existing, attributes);
  }
  function toggleHidden(element, hidden) {
    if (!is.element(element)) return;
    let hide = hidden;
    if (!is.boolean(hide)) {
      hide = !element.hidden;
    }
    element.hidden = hide;
  }
  function toggleClass(element, className, force) {
    if (is.nodeList(element)) {
      return Array.from(element).map((e10) => toggleClass(e10, className, force));
    }
    if (is.element(element)) {
      let method = "toggle";
      if (typeof force !== "undefined") {
        method = force ? "add" : "remove";
      }
      element.classList[method](className);
      return element.classList.contains(className);
    }
    return false;
  }
  function hasClass(element, className) {
    return is.element(element) && element.classList.contains(className);
  }
  function matches2(element, selector) {
    const {
      prototype
    } = Element;
    function match() {
      return Array.from(document.querySelectorAll(selector)).includes(this);
    }
    const method = prototype.matches || prototype.webkitMatchesSelector || prototype.mozMatchesSelector || prototype.msMatchesSelector || match;
    return method.call(element, selector);
  }
  function closest$1(element, selector) {
    const {
      prototype
    } = Element;
    function closestElement2() {
      let el = this;
      do {
        if (matches2.matches(el, selector)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    }
    const method = prototype.closest || closestElement2;
    return method.call(element, selector);
  }
  function getElements(selector) {
    return this.elements.container.querySelectorAll(selector);
  }
  function getElement(selector) {
    return this.elements.container.querySelector(selector);
  }
  function setFocus(element = null, focusVisible = false) {
    if (!is.element(element)) return;
    element.focus({
      preventScroll: true,
      focusVisible
    });
  }
  var defaultCodecs = {
    "audio/ogg": "vorbis",
    "audio/wav": "1",
    "video/webm": "vp8, vorbis",
    "video/mp4": "avc1.42E01E, mp4a.40.2",
    "video/ogg": "theora"
  };
  var support2 = {
    // Basic support
    audio: "canPlayType" in document.createElement("audio"),
    video: "canPlayType" in document.createElement("video"),
    // Check for support
    // Basic functionality vs full UI
    check(type, provider) {
      const api = support2[type] || provider !== "html5";
      const ui2 = api && support2.rangeInput;
      return {
        api,
        ui: ui2
      };
    },
    // Picture-in-picture support
    pip: (() => {
      return document.pictureInPictureEnabled && !createElement2("video").disablePictureInPicture;
    })(),
    // Airplay support
    // Safari only currently
    airplay: is.function(window.WebKitPlaybackTargetAvailabilityEvent),
    // Inline playback support
    // https://webkit.org/blog/6784/new-video-policies-for-ios/
    playsinline: "playsInline" in document.createElement("video"),
    // Check for mime type support against a player instance
    // Credits: http://diveintohtml5.info/everything.html
    // Related: http://www.leanbackplayer.com/test/h5mt.html
    mime(input) {
      if (is.empty(input)) {
        return false;
      }
      const [mediaType] = input.split("/");
      let type = input;
      if (!this.isHTML5 || mediaType !== this.type) {
        return false;
      }
      if (Object.keys(defaultCodecs).includes(type)) {
        type += `; codecs="${defaultCodecs[input]}"`;
      }
      try {
        return Boolean(type && this.media.canPlayType(type).replace(/no/, ""));
      } catch {
        return false;
      }
    },
    // Check for textTracks support
    textTracks: "textTracks" in document.createElement("video"),
    // <input type="range"> Sliders
    rangeInput: (() => {
      const range = document.createElement("input");
      range.type = "range";
      return range.type === "range";
    })(),
    // Touch
    // NOTE: Remember a device can be mouse + touch enabled so we check on first touch event
    touch: "ontouchstart" in document.documentElement,
    // Detect transitions support
    transitions: transitionEndEvent !== false,
    // Reduced motion iOS & MacOS setting
    // https://webkit.org/blog/7551/responsive-design-for-motion/
    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
  };
  var supportsPassiveListeners = (() => {
    let supported = false;
    try {
      const options = Object.defineProperty({}, "passive", {
        get() {
          supported = true;
          return null;
        }
      });
      window.addEventListener("test", null, options);
      window.removeEventListener("test", null, options);
    } catch {
    }
    return supported;
  })();
  function toggleListener(element, event2, callback, toggle = false, passive = true, capture = false) {
    if (!element || !("addEventListener" in element) || is.empty(event2) || !is.function(callback)) {
      return;
    }
    const events2 = event2.split(" ");
    let options = capture;
    if (supportsPassiveListeners) {
      options = {
        // Whether the listener can be passive (i.e. default never prevented)
        passive,
        // Whether the listener is a capturing listener or not
        capture
      };
    }
    events2.forEach((type) => {
      if (this && this.eventListeners && toggle) {
        this.eventListeners.push({
          element,
          type,
          callback,
          options
        });
      }
      element[toggle ? "addEventListener" : "removeEventListener"](type, callback, options);
    });
  }
  function on(element, events2 = "", callback, passive = true, capture = false) {
    toggleListener.call(this, element, events2, callback, true, passive, capture);
  }
  function off(element, events2 = "", callback, passive = true, capture = false) {
    toggleListener.call(this, element, events2, callback, false, passive, capture);
  }
  function once(element, events2 = "", callback, passive = true, capture = false) {
    const onceCallback = (...args) => {
      off(element, events2, onceCallback, passive, capture);
      callback.apply(this, args);
    };
    toggleListener.call(this, element, events2, onceCallback, true, passive, capture);
  }
  function triggerEvent2(element, type = "", bubbles = false, detail = {}) {
    if (!is.element(element) || is.empty(type)) {
      return;
    }
    const event2 = new CustomEvent(type, {
      bubbles,
      detail: {
        ...detail,
        plyr: this
      }
    });
    element.dispatchEvent(event2);
  }
  function unbindListeners() {
    if (this && this.eventListeners) {
      this.eventListeners.forEach((item) => {
        const {
          element,
          type,
          callback,
          options
        } = item;
        element.removeEventListener(type, callback, options);
      });
      this.eventListeners = [];
    }
  }
  function ready2() {
    return new Promise((resolve) => this.ready ? setTimeout(resolve, 0) : on.call(this, this.elements.container, "ready", resolve)).then(() => {
    });
  }
  function silencePromise(value) {
    if (is.promise(value)) {
      value.then(null, () => {
      });
    }
  }
  function dedupe(array) {
    if (!is.array(array)) {
      return array;
    }
    return array.filter((item, index) => array.indexOf(item) === index);
  }
  function closest2(array, value) {
    if (!is.array(array) || !array.length) {
      return null;
    }
    return array.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
  }
  function supportsCSS(declaration) {
    if (!window || !window.CSS) {
      return false;
    }
    return window.CSS.supports(declaration);
  }
  var standardRatios = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((out, [x3, y3]) => ({
    ...out,
    [x3 / y3]: [x3, y3]
  }), {});
  function validateAspectRatio(input) {
    if (!is.array(input) && (!is.string(input) || !input.includes(":"))) {
      return false;
    }
    const ratio = is.array(input) ? input : input.split(":");
    return ratio.map(Number).every(is.number);
  }
  function reduceAspectRatio(ratio) {
    if (!is.array(ratio) || !ratio.every(is.number)) {
      return null;
    }
    const [width, height] = ratio;
    const getDivider = (w3, h4) => h4 === 0 ? w3 : getDivider(h4, w3 % h4);
    const divider = getDivider(width, height);
    return [width / divider, height / divider];
  }
  function getAspectRatio(input) {
    const parse = (ratio2) => validateAspectRatio(ratio2) ? ratio2.split(":").map(Number) : null;
    let ratio = parse(input);
    if (ratio === null) {
      ratio = parse(this.config.ratio);
    }
    if (ratio === null && !is.empty(this.embed) && is.array(this.embed.ratio)) {
      ({
        ratio
      } = this.embed);
    }
    if (ratio === null && this.isHTML5) {
      const {
        videoWidth,
        videoHeight
      } = this.media;
      ratio = [videoWidth, videoHeight];
    }
    return reduceAspectRatio(ratio);
  }
  function setAspectRatio(input) {
    if (!this.isVideo) {
      return {};
    }
    const {
      wrapper
    } = this.elements;
    const ratio = getAspectRatio.call(this, input);
    if (!is.array(ratio)) {
      return {};
    }
    const [x3, y3] = reduceAspectRatio(ratio);
    const useNative = supportsCSS(`aspect-ratio: ${x3}/${y3}`);
    const padding = 100 / x3 * y3;
    if (useNative) {
      wrapper.style.aspectRatio = `${x3}/${y3}`;
    } else {
      wrapper.style.paddingBottom = `${padding}%`;
    }
    if (this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
      const height = 100 / this.media.offsetWidth * Number.parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
      const offset = (height - padding) / (height / 50);
      if (this.fullscreen.active) {
        wrapper.style.paddingBottom = null;
      } else {
        this.media.style.transform = `translateY(-${offset}%)`;
      }
    } else if (this.isHTML5) {
      wrapper.classList.add(this.config.classNames.videoFixedRatio);
    }
    return {
      padding,
      ratio
    };
  }
  function roundAspectRatio(x3, y3, tolerance = 0.05) {
    const ratio = x3 / y3;
    const closestRatio = closest2(Object.keys(standardRatios), ratio);
    if (Math.abs(closestRatio - ratio) <= tolerance) {
      return standardRatios[closestRatio];
    }
    return [x3, y3];
  }
  function getViewportSize() {
    const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return [width, height];
  }
  var html5 = {
    getSources() {
      if (!this.isHTML5) {
        return [];
      }
      const sources = Array.from(this.media.querySelectorAll("source"));
      return sources.filter((source2) => {
        const type = source2.getAttribute("type");
        if (is.empty(type)) {
          return true;
        }
        return support2.mime.call(this, type);
      });
    },
    // Get quality levels
    getQualityOptions() {
      if (this.config.quality.forced) {
        return this.config.quality.options;
      }
      return html5.getSources.call(this).map((source2) => Number(source2.getAttribute("size"))).filter(Boolean);
    },
    setup() {
      if (!this.isHTML5) {
        return;
      }
      const player = this;
      player.options.speed = player.config.speed.options;
      if (!is.empty(this.config.ratio)) {
        setAspectRatio.call(player);
      }
      Object.defineProperty(player.media, "quality", {
        get() {
          const sources = html5.getSources.call(player);
          const source2 = sources.find((s11) => s11.getAttribute("src") === player.source);
          return source2 && Number(source2.getAttribute("size"));
        },
        set(input) {
          if (player.quality === input) {
            return;
          }
          if (player.config.quality.forced && is.function(player.config.quality.onChange)) {
            player.config.quality.onChange(input);
          } else {
            const sources = html5.getSources.call(player);
            const source2 = sources.find((s11) => Number(s11.getAttribute("size")) === input);
            if (!source2) {
              return;
            }
            const {
              currentTime,
              paused,
              preload: preload2,
              readyState,
              playbackRate
            } = player.media;
            player.media.src = source2.getAttribute("src");
            if (preload2 !== "none" || readyState) {
              player.once("loadedmetadata", () => {
                player.speed = playbackRate;
                player.currentTime = currentTime;
                if (!paused) {
                  silencePromise(player.play());
                }
              });
              player.media.load();
            }
          }
          triggerEvent2.call(player, player.media, "qualitychange", false, {
            quality: input
          });
        }
      });
    },
    // Cancel current network requests
    // See https://github.com/sampotts/plyr/issues/174
    cancelRequests() {
      if (!this.isHTML5) {
        return;
      }
      removeElement2(html5.getSources.call(this));
      this.media.setAttribute("src", this.config.blankVideo);
      this.media.load();
      this.debug.log("Cancelled network requests");
    }
  };
  var isIE = Boolean(window.document.documentMode);
  var isEdge = /Edge/.test(navigator.userAgent);
  var isWebKit = "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent);
  var isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  var isIos = /iPad|iPhone|iPod/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
  var browser2 = {
    isIE,
    isEdge,
    isWebKit,
    isIPadOS,
    isIos
  };
  function generateId(prefix) {
    return `${prefix}-${Math.floor(Math.random() * 1e4)}`;
  }
  function format(input, ...args) {
    if (is.empty(input)) return input;
    return input.toString().replace(/\{(\d+)\}/g, (_2, i8) => args[i8].toString());
  }
  function getPercentage(current, max) {
    if (current === 0 || max === 0 || Number.isNaN(current) || Number.isNaN(max)) {
      return 0;
    }
    return (current / max * 100).toFixed(2);
  }
  function replaceAll(input = "", find2 = "", replace = "") {
    return input.replace(new RegExp(find2.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), replace.toString());
  }
  function toTitleCase(input = "") {
    return input.toString().replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
  }
  function toPascalCase(input = "") {
    let string = input.toString();
    string = replaceAll(string, "-", " ");
    string = replaceAll(string, "_", " ");
    string = toTitleCase(string);
    return replaceAll(string, " ", "");
  }
  function toCamelCase(input = "") {
    let string = input.toString();
    string = toPascalCase(string);
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  function stripHTML(source2) {
    const fragment = document.createDocumentFragment();
    const element = document.createElement("div");
    fragment.appendChild(element);
    element.innerHTML = source2;
    return fragment.firstChild.textContent;
  }
  function getHTML(element) {
    const wrapper = document.createElement("div");
    wrapper.appendChild(element);
    return wrapper.innerHTML;
  }
  var resources = {
    pip: "PIP",
    airplay: "AirPlay",
    html5: "HTML5",
    vimeo: "Vimeo",
    youtube: "YouTube"
  };
  var i18n = {
    get(key = "", config = {}) {
      if (is.empty(key) || is.empty(config)) {
        return "";
      }
      let string = getDeep(config.i18n, key);
      if (is.empty(string)) {
        if (Object.keys(resources).includes(key)) {
          return resources[key];
        }
        return "";
      }
      const replace = {
        "{seektime}": config.seekTime,
        "{title}": config.title
      };
      Object.entries(replace).forEach(([k2, v4]) => {
        string = replaceAll(string, k2, v4);
      });
      return string;
    }
  };
  var Storage = class _Storage {
    constructor(player) {
      _defineProperty$1(this, "get", (key) => {
        if (!_Storage.supported || !this.enabled) {
          return null;
        }
        const store = window.localStorage.getItem(this.key);
        if (is.empty(store)) return null;
        const json = JSON.parse(store);
        return is.string(key) && key.length ? json[key] : json;
      });
      _defineProperty$1(this, "set", (object) => {
        if (!_Storage.supported || !this.enabled) {
          return;
        }
        if (!is.object(object)) {
          return;
        }
        let storage = this.get();
        if (is.empty(storage)) {
          storage = {};
        }
        extend4(storage, object);
        try {
          window.localStorage.setItem(this.key, JSON.stringify(storage));
        } catch {
        }
      });
      this.enabled = player.config.storage.enabled;
      this.key = player.config.storage.key;
    }
    // Check for actual support (see if we can use it)
    static get supported() {
      try {
        if (!("localStorage" in window)) return false;
        const test = "___test";
        window.localStorage.setItem(test, test);
        window.localStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    }
  };
  function fetch(url, responseType = "text", withCredentials = false) {
    return new Promise((resolve, reject) => {
      try {
        const request = new XMLHttpRequest();
        if (!("withCredentials" in request)) return;
        if (withCredentials) {
          request.withCredentials = true;
        }
        request.addEventListener("load", () => {
          if (responseType === "text") {
            try {
              resolve(JSON.parse(request.responseText));
            } catch {
              resolve(request.responseText);
            }
          } else {
            resolve(request.response);
          }
        });
        request.addEventListener("error", () => {
          throw new Error(request.status);
        });
        request.open("GET", url, true);
        request.responseType = responseType;
        request.send();
      } catch (error) {
        reject(error);
      }
    });
  }
  function loadSprite(url, id) {
    if (!is.string(url)) {
      return;
    }
    const prefix = "cache";
    const hasId = is.string(id);
    let isCached = false;
    const exists = () => document.getElementById(id) !== null;
    const update2 = (container, data) => {
      container.innerHTML = data;
      if (hasId && exists()) {
        return;
      }
      document.body.insertAdjacentElement("afterbegin", container);
    };
    if (!hasId || !exists()) {
      const useStorage = Storage.supported;
      const container = document.createElement("div");
      container.setAttribute("hidden", "");
      if (hasId) {
        container.setAttribute("id", id);
      }
      if (useStorage) {
        const cached = window.localStorage.getItem(`${prefix}-${id}`);
        isCached = cached !== null;
        if (isCached) {
          const data = JSON.parse(cached);
          update2(container, data.content);
        }
      }
      fetch(url).then((result) => {
        if (is.empty(result)) {
          return;
        }
        if (useStorage) {
          try {
            window.localStorage.setItem(`${prefix}-${id}`, JSON.stringify({
              content: result
            }));
          } catch {
          }
        }
        update2(container, result);
      }).catch(() => {
      });
    }
  }
  var getHours = (value) => Math.trunc(value / 60 / 60 % 60, 10);
  var getMinutes = (value) => Math.trunc(value / 60 % 60, 10);
  var getSeconds = (value) => Math.trunc(value % 60, 10);
  function formatTime(time = 0, displayHours = false, inverted = false) {
    if (!is.number(time)) {
      return formatTime(void 0, displayHours, inverted);
    }
    const format2 = (value) => `0${value}`.slice(-2);
    let hours = getHours(time);
    const mins = getMinutes(time);
    const secs = getSeconds(time);
    if (displayHours || hours > 0) {
      hours = `${hours}:`;
    } else {
      hours = "";
    }
    return `${inverted && time > 0 ? "-" : ""}${hours}${format2(mins)}:${format2(secs)}`;
  }
  var controls = {
    // Get icon URL
    getIconUrl() {
      const url = new URL(this.config.iconUrl, window.location);
      const host = window.location.host ? window.location.host : window.top.location.host;
      const cors = url.host !== host || browser2.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors
      };
    },
    // Find the UI controls
    findElements() {
      try {
        this.elements.controls = getElement.call(this, this.config.selectors.controls.wrapper);
        this.elements.buttons = {
          play: getElements.call(this, this.config.selectors.buttons.play),
          pause: getElement.call(this, this.config.selectors.buttons.pause),
          restart: getElement.call(this, this.config.selectors.buttons.restart),
          rewind: getElement.call(this, this.config.selectors.buttons.rewind),
          fastForward: getElement.call(this, this.config.selectors.buttons.fastForward),
          mute: getElement.call(this, this.config.selectors.buttons.mute),
          pip: getElement.call(this, this.config.selectors.buttons.pip),
          airplay: getElement.call(this, this.config.selectors.buttons.airplay),
          settings: getElement.call(this, this.config.selectors.buttons.settings),
          captions: getElement.call(this, this.config.selectors.buttons.captions),
          fullscreen: getElement.call(this, this.config.selectors.buttons.fullscreen)
        };
        this.elements.progress = getElement.call(this, this.config.selectors.progress);
        this.elements.inputs = {
          seek: getElement.call(this, this.config.selectors.inputs.seek),
          volume: getElement.call(this, this.config.selectors.inputs.volume)
        };
        this.elements.display = {
          buffer: getElement.call(this, this.config.selectors.display.buffer),
          currentTime: getElement.call(this, this.config.selectors.display.currentTime),
          duration: getElement.call(this, this.config.selectors.display.duration)
        };
        if (is.element(this.elements.progress)) {
          this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`);
        }
        return true;
      } catch (error) {
        this.debug.warn("It looks like there is a problem with your custom controls HTML", error);
        this.toggleNativeControls(true);
        return false;
      }
    },
    // Create <svg> icon
    createIcon(type, attributes) {
      const namespace = "http://www.w3.org/2000/svg";
      const iconUrl = controls.getIconUrl.call(this);
      const iconPath = `${!iconUrl.cors ? iconUrl.url : ""}#${this.config.iconPrefix}`;
      const icon = document.createElementNS(namespace, "svg");
      setAttributes(icon, extend4(attributes, {
        "aria-hidden": "true",
        "focusable": "false"
      }));
      const use = document.createElementNS(namespace, "use");
      const path = `${iconPath}-${type}`;
      if ("href" in use) {
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", path);
      }
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", path);
      icon.appendChild(use);
      return icon;
    },
    // Create hidden text label
    createLabel(key, attr = {}) {
      const text = i18n.get(key, this.config);
      const attributes = {
        ...attr,
        class: [attr.class, this.config.classNames.hidden].filter(Boolean).join(" ")
      };
      return createElement2("span", attributes, text);
    },
    // Create a badge
    createBadge(text) {
      if (is.empty(text)) {
        return null;
      }
      const badge = createElement2("span", {
        class: this.config.classNames.menu.value
      });
      badge.appendChild(createElement2("span", {
        class: this.config.classNames.menu.badge
      }, text));
      return badge;
    },
    // Create a <button>
    createButton(buttonType, attr) {
      const attributes = extend4({}, attr);
      let type = toCamelCase(buttonType);
      const props = {
        element: "button",
        toggle: false,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };
      ["element", "icon", "label"].forEach((key) => {
        if (Object.keys(attributes).includes(key)) {
          props[key] = attributes[key];
          delete attributes[key];
        }
      });
      if (props.element === "button" && !Object.keys(attributes).includes("type")) {
        attributes.type = "button";
      }
      if (Object.keys(attributes).includes("class")) {
        if (!attributes.class.split(" ").includes(this.config.classNames.control)) {
          extend4(attributes, {
            class: `${attributes.class} ${this.config.classNames.control}`
          });
        }
      } else {
        attributes.class = this.config.classNames.control;
      }
      switch (buttonType) {
        case "play":
          props.toggle = true;
          props.label = "play";
          props.labelPressed = "pause";
          props.icon = "play";
          props.iconPressed = "pause";
          break;
        case "mute":
          props.toggle = true;
          props.label = "mute";
          props.labelPressed = "unmute";
          props.icon = "volume";
          props.iconPressed = "muted";
          break;
        case "captions":
          props.toggle = true;
          props.label = "enableCaptions";
          props.labelPressed = "disableCaptions";
          props.icon = "captions-off";
          props.iconPressed = "captions-on";
          break;
        case "fullscreen":
          props.toggle = true;
          props.label = "enterFullscreen";
          props.labelPressed = "exitFullscreen";
          props.icon = "enter-fullscreen";
          props.iconPressed = "exit-fullscreen";
          break;
        case "play-large":
          attributes.class += ` ${this.config.classNames.control}--overlaid`;
          type = "play";
          props.label = "play";
          props.icon = "play";
          break;
        default:
          if (is.empty(props.label)) {
            props.label = type;
          }
          if (is.empty(props.icon)) {
            props.icon = buttonType;
          }
      }
      const button = createElement2(props.element);
      if (props.toggle) {
        button.appendChild(controls.createIcon.call(this, props.iconPressed, {
          class: "icon--pressed"
        }));
        button.appendChild(controls.createIcon.call(this, props.icon, {
          class: "icon--not-pressed"
        }));
        button.appendChild(controls.createLabel.call(this, props.labelPressed, {
          class: "label--pressed"
        }));
        button.appendChild(controls.createLabel.call(this, props.label, {
          class: "label--not-pressed"
        }));
      } else {
        button.appendChild(controls.createIcon.call(this, props.icon));
        button.appendChild(controls.createLabel.call(this, props.label));
      }
      extend4(attributes, getAttributesFromSelector(this.config.selectors.buttons[type], attributes));
      setAttributes(button, attributes);
      if (type === "play") {
        if (!is.array(this.elements.buttons[type])) {
          this.elements.buttons[type] = [];
        }
        this.elements.buttons[type].push(button);
      } else {
        this.elements.buttons[type] = button;
      }
      return button;
    },
    // Create an <input type='range'>
    createRange(type, attributes) {
      const input = createElement2("input", extend4(getAttributesFromSelector(this.config.selectors.inputs[type]), {
        "type": "range",
        "min": 0,
        "max": 100,
        "step": 0.01,
        "value": 0,
        "autocomplete": "off",
        // A11y fixes for https://github.com/sampotts/plyr/issues/905
        "role": "slider",
        "aria-label": i18n.get(type, this.config),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": 0
      }, attributes));
      this.elements.inputs[type] = input;
      controls.updateRangeFill.call(this, input);
      RangeTouch.setup(input);
      return input;
    },
    // Create a <progress>
    createProgress(type, attributes) {
      const progress = createElement2("progress", extend4(getAttributesFromSelector(this.config.selectors.display[type]), {
        "min": 0,
        "max": 100,
        "value": 0,
        "role": "progressbar",
        "aria-hidden": true
      }, attributes));
      if (type !== "volume") {
        progress.appendChild(createElement2("span", null, "0"));
        const suffixKey = {
          played: "played",
          buffer: "buffered"
        }[type];
        const suffix = suffixKey ? i18n.get(suffixKey, this.config) : "";
        progress.textContent = `% ${suffix.toLowerCase()}`;
      }
      this.elements.display[type] = progress;
      return progress;
    },
    // Create time display
    createTime(type, attrs) {
      const attributes = getAttributesFromSelector(this.config.selectors.display[type], attrs);
      const container = createElement2("div", extend4(attributes, {
        "class": `${attributes.class ? attributes.class : ""} ${this.config.classNames.display.time} `.trim(),
        "aria-label": i18n.get(type, this.config),
        "role": "timer"
      }), "00:00");
      this.elements.display[type] = container;
      return container;
    },
    // Bind keyboard shortcuts for a menu item
    // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
    bindMenuItemShortcuts(menuItem, type) {
      on.call(this, menuItem, "keydown keyup", (event2) => {
        if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(event2.key)) {
          return;
        }
        event2.preventDefault();
        event2.stopPropagation();
        if (event2.type === "keydown") {
          return;
        }
        const isRadioButton = matches2(menuItem, '[role="menuitemradio"]');
        if (!isRadioButton && [" ", "ArrowRight"].includes(event2.key)) {
          controls.showMenuPanel.call(this, type, true);
        } else {
          let target;
          if (event2.key !== " ") {
            if (event2.key === "ArrowDown" || isRadioButton && event2.key === "ArrowRight") {
              target = menuItem.nextElementSibling;
              if (!is.element(target)) {
                target = menuItem.parentNode.firstElementChild;
              }
            } else {
              target = menuItem.previousElementSibling;
              if (!is.element(target)) {
                target = menuItem.parentNode.lastElementChild;
              }
            }
            setFocus.call(this, target, true);
          }
        }
      }, false);
      on.call(this, menuItem, "keyup", (event2) => {
        if (event2.key !== "Return") return;
        controls.focusFirstMenuItem.call(this, null, true);
      });
    },
    // Create a settings menu item
    createMenuItem({
      value,
      list,
      type,
      title,
      badge = null,
      checked = false
    }) {
      const attributes = getAttributesFromSelector(this.config.selectors.inputs[type]);
      const menuItem = createElement2("button", extend4(attributes, {
        "type": "button",
        "role": "menuitemradio",
        "class": `${this.config.classNames.control} ${attributes.class ? attributes.class : ""}`.trim(),
        "aria-checked": checked,
        value
      }));
      const flex = createElement2("span");
      flex.innerHTML = title;
      if (is.element(badge)) {
        flex.appendChild(badge);
      }
      menuItem.appendChild(flex);
      Object.defineProperty(menuItem, "checked", {
        enumerable: true,
        get() {
          return menuItem.getAttribute("aria-checked") === "true";
        },
        set(check) {
          if (check) {
            Array.from(menuItem.parentNode.children).filter((node) => matches2(node, '[role="menuitemradio"]')).forEach((node) => node.setAttribute("aria-checked", "false"));
          }
          menuItem.setAttribute("aria-checked", check ? "true" : "false");
        }
      });
      this.listeners.bind(menuItem, "click keyup", (event2) => {
        if (is.keyboardEvent(event2) && event2.key !== " ") {
          return;
        }
        event2.preventDefault();
        event2.stopPropagation();
        menuItem.checked = true;
        switch (type) {
          case "language":
            this.currentTrack = Number(value);
            break;
          case "quality":
            this.quality = value;
            break;
          case "speed":
            this.speed = Number.parseFloat(value);
            break;
        }
        controls.showMenuPanel.call(this, "home", is.keyboardEvent(event2));
      }, type, false);
      controls.bindMenuItemShortcuts.call(this, menuItem, type);
      list.appendChild(menuItem);
    },
    // Format a time for display
    formatTime(time = 0, inverted = false) {
      if (!is.number(time)) {
        return time;
      }
      const forceHours = getHours(this.duration) > 0;
      return formatTime(time, forceHours, inverted);
    },
    // Update the displayed time
    updateTimeDisplay(target = null, time = 0, inverted = false) {
      if (!is.element(target) || !is.number(time)) {
        return;
      }
      target.textContent = controls.formatTime(time, inverted);
    },
    // Update volume UI and storage
    updateVolume() {
      if (!this.supported.ui) {
        return;
      }
      if (is.element(this.elements.inputs.volume)) {
        controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume);
      }
      if (is.element(this.elements.buttons.mute)) {
        this.elements.buttons.mute.pressed = this.muted || this.volume === 0;
      }
    },
    // Update seek value and lower fill
    setRange(target, value = 0) {
      if (!is.element(target)) {
        return;
      }
      target.value = value;
      controls.updateRangeFill.call(this, target);
    },
    // Update <progress> elements
    updateProgress(event2) {
      if (!this.supported.ui || !is.event(event2)) {
        return;
      }
      let value = 0;
      const setProgress = (target, input) => {
        const val = is.number(input) ? input : 0;
        const progress = is.element(target) ? target : this.elements.display.buffer;
        if (is.element(progress)) {
          progress.value = val;
          const label = progress.getElementsByTagName("span")[0];
          if (is.element(label)) {
            label.childNodes[0].nodeValue = val;
          }
        }
      };
      if (event2) {
        switch (event2.type) {
          // Video playing
          case "timeupdate":
          case "seeking":
          case "seeked":
            value = getPercentage(this.currentTime, this.duration);
            if (event2.type === "timeupdate") {
              controls.setRange.call(this, this.elements.inputs.seek, value);
            }
            break;
          // Check buffer status
          case "playing":
          case "progress":
            setProgress(this.elements.display.buffer, this.buffered * 100);
            break;
        }
      }
    },
    // Webkit polyfill for lower fill range
    updateRangeFill(target) {
      const range = is.event(target) ? target.target : target;
      if (!is.element(range) || range.getAttribute("type") !== "range") {
        return;
      }
      if (matches2(range, this.config.selectors.inputs.seek)) {
        range.setAttribute("aria-valuenow", this.currentTime);
        const currentTime = controls.formatTime(this.currentTime);
        const duration = controls.formatTime(this.duration);
        const format2 = i18n.get("seekLabel", this.config);
        range.setAttribute("aria-valuetext", format2.replace("{currentTime}", currentTime).replace("{duration}", duration));
      } else if (matches2(range, this.config.selectors.inputs.volume)) {
        const percent = range.value * 100;
        range.setAttribute("aria-valuenow", percent);
        range.setAttribute("aria-valuetext", `${percent.toFixed(1)}%`);
      } else {
        range.setAttribute("aria-valuenow", range.value);
      }
      if (!browser2.isWebKit && !browser2.isIPadOS) {
        return;
      }
      range.style.setProperty("--value", `${range.value / range.max * 100}%`);
    },
    // Update hover tooltip for seeking
    updateSeekTooltip(event2) {
      var _this$config$markers, _this$config$markers$;
      if (!this.config.tooltips.seek || !is.element(this.elements.inputs.seek) || !is.element(this.elements.display.seekTooltip) || this.duration === 0) {
        return;
      }
      const tipElement = this.elements.display.seekTooltip;
      const visible = `${this.config.classNames.tooltip}--visible`;
      const toggle = (show) => toggleClass(tipElement, visible, show);
      if (this.touch) {
        toggle(false);
        return;
      }
      let percent = 0;
      const clientRect = this.elements.progress.getBoundingClientRect();
      if (is.event(event2)) {
        const scrollLeft = event2.pageX - event2.clientX;
        percent = 100 / clientRect.width * (event2.pageX - clientRect.left - scrollLeft);
      } else if (hasClass(tipElement, visible)) {
        percent = Number.parseFloat(tipElement.style.left, 10);
      } else {
        return;
      }
      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      }
      const time = this.duration / 100 * percent;
      tipElement.textContent = controls.formatTime(time);
      const point = (_this$config$markers = this.config.markers) === null || _this$config$markers === void 0 ? void 0 : (_this$config$markers$ = _this$config$markers.points) === null || _this$config$markers$ === void 0 ? void 0 : _this$config$markers$.find(({
        time: t9
      }) => t9 === Math.round(time));
      if (point) {
        tipElement.insertAdjacentHTML("afterbegin", `${point.label}<br>`);
      }
      tipElement.style.left = `${percent}%`;
      if (is.event(event2) && ["mouseenter", "mouseleave"].includes(event2.type)) {
        toggle(event2.type === "mouseenter");
      }
    },
    // Handle time change event
    timeUpdate(event2) {
      const invert = !is.element(this.elements.display.duration) && this.config.invertTime;
      controls.updateTimeDisplay.call(this, this.elements.display.currentTime, invert ? this.duration - this.currentTime : this.currentTime, invert);
      if (event2 && event2.type === "timeupdate" && this.media.seeking) {
        return;
      }
      controls.updateProgress.call(this, event2);
    },
    // Show the duration on metadataloaded or durationchange events
    durationUpdate() {
      if (!this.supported.ui || !this.config.invertTime && this.currentTime) {
        return;
      }
      if (this.duration >= 2 ** 32) {
        toggleHidden(this.elements.display.currentTime, true);
        toggleHidden(this.elements.progress, true);
        return;
      }
      if (is.element(this.elements.inputs.seek)) {
        this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
      }
      const hasDuration = is.element(this.elements.display.duration);
      if (!hasDuration && this.config.displayDuration && this.paused) {
        controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration);
      }
      if (hasDuration) {
        controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration);
      }
      if (this.config.markers.enabled) {
        controls.setMarkers.call(this);
      }
      controls.updateSeekTooltip.call(this);
    },
    // Hide/show a tab
    toggleMenuButton(setting, toggle) {
      toggleHidden(this.elements.settings.buttons[setting], !toggle);
    },
    // Update the selected setting
    updateSetting(setting, container, input) {
      const pane = this.elements.settings.panels[setting];
      let value = null;
      let list = container;
      if (setting === "captions") {
        value = this.currentTrack;
      } else {
        value = !is.empty(input) ? input : this[setting];
        if (is.empty(value)) {
          value = this.config[setting].default;
        }
        if (!is.empty(this.options[setting]) && !this.options[setting].includes(value)) {
          this.debug.warn(`Unsupported value of '${value}' for ${setting}`);
          return;
        }
        if (!this.config[setting].options.includes(value)) {
          this.debug.warn(`Disabled value of '${value}' for ${setting}`);
          return;
        }
      }
      if (!is.element(list)) {
        list = pane && pane.querySelector('[role="menu"]');
      }
      if (!is.element(list)) {
        return;
      }
      const label = this.elements.settings.buttons[setting].querySelector(`.${this.config.classNames.menu.value}`);
      label.innerHTML = controls.getLabel.call(this, setting, value);
      const target = list && list.querySelector(`[value="${value}"]`);
      if (is.element(target)) {
        target.checked = true;
      }
    },
    // Translate a value into a nice label
    getLabel(setting, value) {
      switch (setting) {
        case "speed":
          return value === 1 ? i18n.get("normal", this.config) : `${value}&times;`;
        case "quality":
          if (is.number(value)) {
            const label = i18n.get(`qualityLabel.${value}`, this.config);
            if (!label.length) {
              return `${value}p`;
            }
            return label;
          }
          return toTitleCase(value);
        case "captions":
          return captions.getLabel.call(this);
        default:
          return null;
      }
    },
    // Set the quality menu
    setQualityMenu(options) {
      if (!is.element(this.elements.settings.panels.quality)) {
        return;
      }
      const type = "quality";
      const list = this.elements.settings.panels.quality.querySelector('[role="menu"]');
      if (is.array(options)) {
        this.options.quality = dedupe(options).filter((quality) => this.config.quality.options.includes(quality));
      }
      const toggle = !is.empty(this.options.quality) && this.options.quality.length > 1;
      controls.toggleMenuButton.call(this, type, toggle);
      emptyElement(list);
      controls.checkMenu.call(this);
      if (!toggle) {
        return;
      }
      const getBadge = (quality) => {
        const label = i18n.get(`qualityBadge.${quality}`, this.config);
        if (!label.length) {
          return null;
        }
        return controls.createBadge.call(this, label);
      };
      this.options.quality.sort((a7, b3) => {
        const sorting = this.config.quality.options;
        return sorting.indexOf(a7) > sorting.indexOf(b3) ? 1 : -1;
      }).forEach((quality) => {
        controls.createMenuItem.call(this, {
          value: quality,
          list,
          type,
          title: controls.getLabel.call(this, "quality", quality),
          badge: getBadge(quality)
        });
      });
      controls.updateSetting.call(this, type, list);
    },
    // Set the looping options
    /* setLoopMenu() {
          // Menu required
          if (!is.element(this.elements.settings.panels.loop)) {
              return;
          }
           const options = ['start', 'end', 'all', 'reset'];
          const list = this.elements.settings.panels.loop.querySelector('[role="menu"]');
           // Show the pane and tab
          toggleHidden(this.elements.settings.buttons.loop, false);
          toggleHidden(this.elements.settings.panels.loop, false);
           // Toggle the pane and tab
          const toggle = !is.empty(this.loop.options);
          controls.toggleMenuButton.call(this, 'loop', toggle);
           // Empty the menu
          emptyElement(list);
           options.forEach(option => {
              const item = createElement('li');
               const button = createElement(
                  'button',
                  extend(getAttributesFromSelector(this.config.selectors.buttons.loop), {
                      type: 'button',
                      class: this.config.classNames.control,
                      'data-plyr-loop-action': option,
                  }),
                  i18n.get(option, this.config)
              );
               if (['start', 'end'].includes(option)) {
                  const badge = controls.createBadge.call(this, '00:00');
                  button.appendChild(badge);
              }
               item.appendChild(button);
              list.appendChild(item);
          });
      }, */
    // Get current selected caption language
    // TODO: rework this to user the getter in the API?
    // Set a list of available captions languages
    setCaptionsMenu() {
      if (!is.element(this.elements.settings.panels.captions)) {
        return;
      }
      const type = "captions";
      const list = this.elements.settings.panels.captions.querySelector('[role="menu"]');
      const tracks = captions.getTracks.call(this);
      const toggle = Boolean(tracks.length);
      controls.toggleMenuButton.call(this, type, toggle);
      emptyElement(list);
      controls.checkMenu.call(this);
      if (!toggle) {
        return;
      }
      const options = tracks.map((track, value) => ({
        value,
        checked: this.captions.toggled && this.currentTrack === value,
        title: captions.getLabel.call(this, track),
        badge: track.language && controls.createBadge.call(this, track.language.toUpperCase()),
        list,
        type: "language"
      }));
      options.unshift({
        value: -1,
        checked: !this.captions.toggled,
        title: i18n.get("disabled", this.config),
        list,
        type: "language"
      });
      options.forEach(controls.createMenuItem.bind(this));
      controls.updateSetting.call(this, type, list);
    },
    // Set a list of available captions languages
    setSpeedMenu() {
      if (!is.element(this.elements.settings.panels.speed)) {
        return;
      }
      const type = "speed";
      const list = this.elements.settings.panels.speed.querySelector('[role="menu"]');
      this.options.speed = this.options.speed.filter((o9) => o9 >= this.minimumSpeed && o9 <= this.maximumSpeed);
      const toggle = !is.empty(this.options.speed) && this.options.speed.length > 1;
      controls.toggleMenuButton.call(this, type, toggle);
      emptyElement(list);
      controls.checkMenu.call(this);
      if (!toggle) {
        return;
      }
      this.options.speed.forEach((speed) => {
        controls.createMenuItem.call(this, {
          value: speed,
          list,
          type,
          title: controls.getLabel.call(this, "speed", speed)
        });
      });
      controls.updateSetting.call(this, type, list);
    },
    // Check if we need to hide/show the settings menu
    checkMenu() {
      const {
        buttons
      } = this.elements.settings;
      const visible = !is.empty(buttons) && Object.values(buttons).some((button) => !button.hidden);
      toggleHidden(this.elements.settings.menu, !visible);
    },
    // Focus the first menu item in a given (or visible) menu
    focusFirstMenuItem(pane, focusVisible = false) {
      if (this.elements.settings.popup.hidden) {
        return;
      }
      let target = pane;
      if (!is.element(target)) {
        target = Object.values(this.elements.settings.panels).find((p2) => !p2.hidden);
      }
      const firstItem = target.querySelector('[role^="menuitem"]');
      setFocus.call(this, firstItem, focusVisible);
    },
    // Show/hide menu
    toggleMenu(input) {
      const {
        popup
      } = this.elements.settings;
      const button = this.elements.buttons.settings;
      if (!is.element(popup) || !is.element(button)) {
        return;
      }
      const {
        hidden
      } = popup;
      let show = hidden;
      if (is.boolean(input)) {
        show = input;
      } else if (is.keyboardEvent(input) && input.key === "Escape") {
        show = false;
      } else if (is.event(input)) {
        const target = is.function(input.composedPath) ? input.composedPath()[0] : input.target;
        const isMenuItem = popup.contains(target);
        if (isMenuItem || !isMenuItem && input.target !== button && show) {
          return;
        }
      }
      button.setAttribute("aria-expanded", show);
      toggleHidden(popup, !show);
      toggleClass(this.elements.container, this.config.classNames.menu.open, show);
      if (show && is.keyboardEvent(input)) {
        controls.focusFirstMenuItem.call(this, null, true);
      } else if (!show && !hidden) {
        setFocus.call(this, button, is.keyboardEvent(input));
      }
    },
    // Get the natural size of a menu panel
    getMenuSize(tab) {
      const clone = tab.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.opacity = 0;
      clone.removeAttribute("hidden");
      tab.parentNode.appendChild(clone);
      const width = clone.scrollWidth;
      const height = clone.scrollHeight;
      removeElement2(clone);
      return {
        width,
        height
      };
    },
    // Show a panel in the menu
    showMenuPanel(type = "", focusVisible = false) {
      const target = this.elements.container.querySelector(`#plyr-settings-${this.id}-${type}`);
      if (!is.element(target)) {
        return;
      }
      const container = target.parentNode;
      const current = Array.from(container.children).find((node) => !node.hidden);
      if (support2.transitions && !support2.reducedMotion) {
        container.style.width = `${current.scrollWidth}px`;
        container.style.height = `${current.scrollHeight}px`;
        const size = controls.getMenuSize.call(this, target);
        const restore = (event2) => {
          if (event2.target !== container || !["width", "height"].includes(event2.propertyName)) {
            return;
          }
          container.style.width = "";
          container.style.height = "";
          off.call(this, container, transitionEndEvent, restore);
        };
        on.call(this, container, transitionEndEvent, restore);
        container.style.width = `${size.width}px`;
        container.style.height = `${size.height}px`;
      }
      toggleHidden(current, true);
      toggleHidden(target, false);
      controls.focusFirstMenuItem.call(this, target, focusVisible);
    },
    // Set the download URL
    setDownloadUrl() {
      const button = this.elements.buttons.download;
      if (!is.element(button)) {
        return;
      }
      button.setAttribute("href", this.download);
    },
    // Build the default HTML
    create(data) {
      const {
        bindMenuItemShortcuts,
        createButton,
        createProgress,
        createRange,
        createTime,
        setQualityMenu,
        setSpeedMenu,
        showMenuPanel
      } = controls;
      this.elements.controls = null;
      if (is.array(this.config.controls) && this.config.controls.includes("play-large")) {
        this.elements.container.appendChild(createButton.call(this, "play-large"));
      }
      const container = createElement2("div", getAttributesFromSelector(this.config.selectors.controls.wrapper));
      this.elements.controls = container;
      const defaultAttributes = {
        class: "plyr__controls__item"
      };
      dedupe(is.array(this.config.controls) ? this.config.controls : []).forEach((control) => {
        if (control === "restart") {
          container.appendChild(createButton.call(this, "restart", defaultAttributes));
        }
        if (control === "rewind") {
          container.appendChild(createButton.call(this, "rewind", defaultAttributes));
        }
        if (control === "play") {
          container.appendChild(createButton.call(this, "play", defaultAttributes));
        }
        if (control === "fast-forward") {
          container.appendChild(createButton.call(this, "fast-forward", defaultAttributes));
        }
        if (control === "progress") {
          const progressContainer = createElement2("div", {
            class: `${defaultAttributes.class} plyr__progress__container`
          });
          const progress = createElement2("div", getAttributesFromSelector(this.config.selectors.progress));
          progress.appendChild(createRange.call(this, "seek", {
            id: `plyr-seek-${data.id}`
          }));
          progress.appendChild(createProgress.call(this, "buffer"));
          if (this.config.tooltips.seek) {
            const tooltip = createElement2("span", {
              class: this.config.classNames.tooltip
            }, "00:00");
            progress.appendChild(tooltip);
            this.elements.display.seekTooltip = tooltip;
          }
          this.elements.progress = progress;
          progressContainer.appendChild(this.elements.progress);
          container.appendChild(progressContainer);
        }
        if (control === "current-time") {
          container.appendChild(createTime.call(this, "currentTime", defaultAttributes));
        }
        if (control === "duration") {
          container.appendChild(createTime.call(this, "duration", defaultAttributes));
        }
        if (control === "mute" || control === "volume") {
          let {
            volume
          } = this.elements;
          if (!is.element(volume) || !container.contains(volume)) {
            volume = createElement2("div", extend4({}, defaultAttributes, {
              class: `${defaultAttributes.class} plyr__volume`.trim()
            }));
            this.elements.volume = volume;
            container.appendChild(volume);
          }
          if (control === "mute") {
            volume.appendChild(createButton.call(this, "mute"));
          }
          if (control === "volume" && !browser2.isIos && !browser2.isIPadOS) {
            const attributes = {
              max: 1,
              step: 0.05,
              value: this.config.volume
            };
            volume.appendChild(createRange.call(this, "volume", extend4(attributes, {
              id: `plyr-volume-${data.id}`
            })));
          }
        }
        if (control === "captions") {
          container.appendChild(createButton.call(this, "captions", defaultAttributes));
        }
        if (control === "settings" && !is.empty(this.config.settings)) {
          const wrapper = createElement2("div", extend4({}, defaultAttributes, {
            class: `${defaultAttributes.class} plyr__menu`.trim(),
            hidden: ""
          }));
          wrapper.appendChild(createButton.call(this, "settings", {
            "aria-haspopup": true,
            "aria-controls": `plyr-settings-${data.id}`,
            "aria-expanded": false
          }));
          const popup = createElement2("div", {
            class: "plyr__menu__container",
            id: `plyr-settings-${data.id}`,
            hidden: ""
          });
          const inner = createElement2("div");
          const home = createElement2("div", {
            id: `plyr-settings-${data.id}-home`
          });
          const menu = createElement2("div", {
            role: "menu"
          });
          home.appendChild(menu);
          inner.appendChild(home);
          this.elements.settings.panels.home = home;
          this.config.settings.forEach((type) => {
            const menuItem = createElement2("button", extend4(getAttributesFromSelector(this.config.selectors.buttons.settings), {
              "type": "button",
              "class": `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
              "role": "menuitem",
              "aria-haspopup": true,
              "hidden": ""
            }));
            bindMenuItemShortcuts.call(this, menuItem, type);
            on.call(this, menuItem, "click", () => {
              showMenuPanel.call(this, type, false);
            });
            const flex = createElement2("span", null, i18n.get(type, this.config));
            const value = createElement2("span", {
              class: this.config.classNames.menu.value
            });
            value.innerHTML = data[type];
            flex.appendChild(value);
            menuItem.appendChild(flex);
            menu.appendChild(menuItem);
            const pane = createElement2("div", {
              id: `plyr-settings-${data.id}-${type}`,
              hidden: ""
            });
            const backButton = createElement2("button", {
              type: "button",
              class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
            });
            backButton.appendChild(createElement2("span", {
              "aria-hidden": true
            }, i18n.get(type, this.config)));
            backButton.appendChild(createElement2("span", {
              class: this.config.classNames.hidden
            }, i18n.get("menuBack", this.config)));
            on.call(this, pane, "keydown", (event2) => {
              if (event2.key !== "ArrowLeft") return;
              event2.preventDefault();
              event2.stopPropagation();
              showMenuPanel.call(this, "home", true);
            }, false);
            on.call(this, backButton, "click", () => {
              showMenuPanel.call(this, "home", false);
            });
            pane.appendChild(backButton);
            pane.appendChild(createElement2("div", {
              role: "menu"
            }));
            inner.appendChild(pane);
            this.elements.settings.buttons[type] = menuItem;
            this.elements.settings.panels[type] = pane;
          });
          popup.appendChild(inner);
          wrapper.appendChild(popup);
          container.appendChild(wrapper);
          this.elements.settings.popup = popup;
          this.elements.settings.menu = wrapper;
        }
        if (control === "pip" && support2.pip) {
          container.appendChild(createButton.call(this, "pip", defaultAttributes));
        }
        if (control === "airplay" && support2.airplay) {
          container.appendChild(createButton.call(this, "airplay", defaultAttributes));
        }
        if (control === "download") {
          const attributes = extend4({}, defaultAttributes, {
            element: "a",
            href: this.download,
            target: "_blank"
          });
          if (this.isHTML5) {
            attributes.download = "";
          }
          const {
            download
          } = this.config.urls;
          if (!is.url(download) && this.isEmbed) {
            extend4(attributes, {
              icon: `logo-${this.provider}`,
              label: this.provider
            });
          }
          container.appendChild(createButton.call(this, "download", attributes));
        }
        if (control === "fullscreen") {
          container.appendChild(createButton.call(this, "fullscreen", defaultAttributes));
        }
      });
      if (this.isHTML5) {
        setQualityMenu.call(this, html5.getQualityOptions.call(this));
      }
      setSpeedMenu.call(this);
      return container;
    },
    // Insert controls
    inject() {
      if (this.config.loadSprite) {
        const icon = controls.getIconUrl.call(this);
        if (icon.cors) {
          loadSprite(icon.url, "sprite-plyr");
        }
      }
      this.id = Math.floor(Math.random() * 1e4);
      let container = null;
      this.elements.controls = null;
      const props = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      };
      let update2 = true;
      if (is.function(this.config.controls)) {
        this.config.controls = this.config.controls.call(this, props);
      }
      if (!this.config.controls) {
        this.config.controls = [];
      }
      if (is.element(this.config.controls) || is.string(this.config.controls)) {
        container = this.config.controls;
      } else {
        container = controls.create.call(this, {
          id: this.id,
          seektime: this.config.seekTime,
          speed: this.speed,
          quality: this.quality,
          captions: captions.getLabel.call(this)
          // TODO: Looping
          // loop: 'None',
        });
        update2 = false;
      }
      const replace = (input) => {
        let result = input;
        Object.entries(props).forEach(([key, value]) => {
          result = replaceAll(result, `{${key}}`, value);
        });
        return result;
      };
      if (update2) {
        if (is.string(this.config.controls)) {
          container = replace(container);
        }
      }
      let target;
      if (is.string(this.config.selectors.controls.container)) {
        target = document.querySelector(this.config.selectors.controls.container);
      }
      if (!is.element(target)) {
        target = this.elements.container;
      }
      const insertMethod = is.element(container) ? "insertAdjacentElement" : "insertAdjacentHTML";
      target[insertMethod]("afterbegin", container);
      if (!is.element(this.elements.controls)) {
        controls.findElements.call(this);
      }
      if (!is.empty(this.elements.buttons)) {
        const addProperty = (button) => {
          const className = this.config.classNames.controlPressed;
          button.setAttribute("aria-pressed", "false");
          Object.defineProperty(button, "pressed", {
            configurable: true,
            enumerable: true,
            get() {
              return hasClass(button, className);
            },
            set(pressed = false) {
              toggleClass(button, className, pressed);
              button.setAttribute("aria-pressed", pressed ? "true" : "false");
            }
          });
        };
        Object.values(this.elements.buttons).filter(Boolean).forEach((button) => {
          if (is.array(button) || is.nodeList(button)) {
            Array.from(button).filter(Boolean).forEach(addProperty);
          } else {
            addProperty(button);
          }
        });
      }
      if (browser2.isEdge) {
        repaint(target);
      }
      if (this.config.tooltips.controls) {
        const {
          classNames,
          selectors
        } = this.config;
        const selector = `${selectors.controls.wrapper} ${selectors.labels} .${classNames.hidden}`;
        const labels = getElements.call(this, selector);
        Array.from(labels).forEach((label) => {
          toggleClass(label, this.config.classNames.hidden, false);
          toggleClass(label, this.config.classNames.tooltip, true);
        });
      }
    },
    // Set media metadata
    setMediaMetadata() {
      try {
        if ("mediaSession" in navigator) {
          navigator.mediaSession.metadata = new window.MediaMetadata({
            title: this.config.mediaMetadata.title,
            artist: this.config.mediaMetadata.artist,
            album: this.config.mediaMetadata.album,
            artwork: this.config.mediaMetadata.artwork
          });
        }
      } catch {
      }
    },
    // Add markers
    setMarkers() {
      var _this$config$markers2, _this$config$markers3;
      if (!this.duration || this.elements.markers) return;
      const points = (_this$config$markers2 = this.config.markers) === null || _this$config$markers2 === void 0 ? void 0 : (_this$config$markers3 = _this$config$markers2.points) === null || _this$config$markers3 === void 0 ? void 0 : _this$config$markers3.filter(({
        time
      }) => time > 0 && time < this.duration);
      if (!(points !== null && points !== void 0 && points.length)) return;
      const containerFragment = document.createDocumentFragment();
      const pointsFragment = document.createDocumentFragment();
      let tipElement = null;
      const tipVisible = `${this.config.classNames.tooltip}--visible`;
      const toggleTip = (show) => toggleClass(tipElement, tipVisible, show);
      points.forEach((point) => {
        const markerElement = createElement2("span", {
          class: this.config.classNames.marker
        }, "");
        const left = `${point.time / this.duration * 100}%`;
        if (tipElement) {
          markerElement.addEventListener("mouseenter", () => {
            if (point.label) return;
            tipElement.style.left = left;
            tipElement.innerHTML = point.label;
            toggleTip(true);
          });
          markerElement.addEventListener("mouseleave", () => {
            toggleTip(false);
          });
        }
        markerElement.addEventListener("click", () => {
          this.currentTime = point.time;
        });
        markerElement.style.left = left;
        pointsFragment.appendChild(markerElement);
      });
      containerFragment.appendChild(pointsFragment);
      if (!this.config.tooltips.seek) {
        tipElement = createElement2("span", {
          class: this.config.classNames.tooltip
        }, "");
        containerFragment.appendChild(tipElement);
      }
      this.elements.markers = {
        points: pointsFragment,
        tip: tipElement
      };
      this.elements.progress.appendChild(containerFragment);
    }
  };
  function parseUrl(input, safe = true) {
    let url = input;
    if (safe) {
      const parser = document.createElement("a");
      parser.href = url;
      url = parser.href;
    }
    try {
      return new URL(url);
    } catch {
      return null;
    }
  }
  function buildUrlParams(input) {
    const params = new URLSearchParams();
    if (is.object(input)) {
      Object.entries(input).forEach(([key, value]) => {
        params.set(key, value);
      });
    }
    return params;
  }
  var captions = {
    // Setup captions
    setup() {
      if (!this.supported.ui) {
        return;
      }
      if (!this.isVideo || this.isYouTube || this.isHTML5 && !support2.textTracks) {
        if (is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions")) {
          controls.setCaptionsMenu.call(this);
        }
        return;
      }
      if (!is.element(this.elements.captions)) {
        this.elements.captions = createElement2("div", getAttributesFromSelector(this.config.selectors.captions));
        this.elements.captions.setAttribute("dir", "auto");
        insertAfter(this.elements.captions, this.elements.wrapper);
      }
      if (browser2.isIE && window.URL) {
        const elements = this.media.querySelectorAll("track");
        Array.from(elements).forEach((track) => {
          const src = track.getAttribute("src");
          const url = parseUrl(src);
          if (url !== null && url.hostname !== window.location.href.hostname && ["http:", "https:"].includes(url.protocol)) {
            fetch(src, "blob").then((blob) => {
              track.setAttribute("src", window.URL.createObjectURL(blob));
            }).catch(() => {
              removeElement2(track);
            });
          }
        });
      }
      const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || "en"];
      const languages = dedupe(browserLanguages.map((language2) => language2.split("-")[0]));
      let language = (this.storage.get("language") || this.captions.language || this.config.captions.language || "auto").toLowerCase();
      if (language === "auto") {
        [language] = languages;
      }
      let active = this.storage.get("captions") || this.captions.active;
      if (!is.boolean(active)) {
        ({
          active
        } = this.config.captions);
      }
      Object.assign(this.captions, {
        toggled: false,
        active,
        language,
        languages
      });
      if (this.isHTML5) {
        const trackEvents = this.config.captions.update ? "addtrack removetrack" : "removetrack";
        on.call(this, this.media.textTracks, trackEvents, captions.update.bind(this));
      }
      setTimeout(captions.update.bind(this), 0);
    },
    // Update available language options in settings based on tracks
    update() {
      const tracks = captions.getTracks.call(this, true);
      const {
        active,
        language,
        meta,
        currentTrackNode
      } = this.captions;
      const languageExists = Boolean(tracks.find((track) => track.language === language));
      if (this.isHTML5 && this.isVideo) {
        tracks.filter((track) => !meta.get(track)).forEach((track) => {
          this.debug.log("Track added", track);
          meta.set(track, {
            default: track.mode === "showing"
          });
          if (track.mode === "showing") {
            track.mode = "hidden";
          }
          on.call(this, track, "cuechange", () => captions.updateCues.call(this));
        });
      }
      if (languageExists && this.language !== language || !tracks.includes(currentTrackNode)) {
        captions.setLanguage.call(this, language);
        captions.toggle.call(this, active && languageExists);
      }
      if (this.elements) {
        toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is.empty(tracks));
      }
      if (is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions")) {
        controls.setCaptionsMenu.call(this);
      }
    },
    // Toggle captions display
    // Used internally for the toggleCaptions method, with the passive option forced to false
    toggle(input, passive = true) {
      if (!this.supported.ui) {
        return;
      }
      const {
        toggled
      } = this.captions;
      const activeClass = this.config.classNames.captions.active;
      const active = is.nullOrUndefined(input) ? !toggled : input;
      if (active !== toggled) {
        if (!passive) {
          this.captions.active = active;
          this.storage.set({
            captions: active
          });
        }
        if (!this.language && active && !passive) {
          const tracks = captions.getTracks.call(this);
          const track = captions.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
          this.captions.language = track.language;
          captions.set.call(this, tracks.indexOf(track));
          return;
        }
        if (this.elements.buttons.captions) {
          this.elements.buttons.captions.pressed = active;
        }
        toggleClass(this.elements.container, activeClass, active);
        this.captions.toggled = active;
        controls.updateSetting.call(this, "captions");
        triggerEvent2.call(this, this.media, active ? "captionsenabled" : "captionsdisabled");
      }
      setTimeout(() => {
        if (active && this.captions.toggled) {
          this.captions.currentTrackNode.mode = "hidden";
        }
      });
    },
    // Set captions by track index
    // Used internally for the currentTrack setter with the passive option forced to false
    set(index, passive = true) {
      const tracks = captions.getTracks.call(this);
      if (index === -1) {
        captions.toggle.call(this, false, passive);
        return;
      }
      if (!is.number(index)) {
        this.debug.warn("Invalid caption argument", index);
        return;
      }
      if (!(index in tracks)) {
        this.debug.warn("Track not found", index);
        return;
      }
      if (this.captions.currentTrack !== index) {
        this.captions.currentTrack = index;
        const track = tracks[index];
        const {
          language
        } = track || {};
        this.captions.currentTrackNode = track;
        controls.updateSetting.call(this, "captions");
        if (!passive) {
          this.captions.language = language;
          this.storage.set({
            language
          });
        }
        if (this.isVimeo) {
          this.embed.enableTextTrack(language, null, false);
        }
        triggerEvent2.call(this, this.media, "languagechange");
      }
      captions.toggle.call(this, true, passive);
      if (this.isHTML5 && this.isVideo) {
        captions.updateCues.call(this);
      }
    },
    // Set captions by language
    // Used internally for the language setter with the passive option forced to false
    setLanguage(input, passive = true) {
      if (!is.string(input)) {
        this.debug.warn("Invalid language argument", input);
        return;
      }
      const language = input.toLowerCase();
      this.captions.language = language;
      const tracks = captions.getTracks.call(this);
      const track = captions.findTrack.call(this, [language]);
      captions.set.call(this, tracks.indexOf(track), passive);
    },
    // Get current valid caption tracks
    // If update is false it will also ignore tracks without metadata
    // This is used to "freeze" the language options when captions.update is false
    getTracks(update2 = false) {
      const tracks = Array.from((this.media || {}).textTracks || []);
      return tracks.filter((track) => !this.isHTML5 || update2 || this.captions.meta.has(track)).filter((track) => ["captions", "subtitles"].includes(track.kind));
    },
    // Match tracks based on languages and get the first
    findTrack(languages, force = false) {
      const tracks = captions.getTracks.call(this);
      const sortIsDefault = (track2) => Number((this.captions.meta.get(track2) || {}).default);
      const sorted = Array.from(tracks).sort((a7, b3) => sortIsDefault(b3) - sortIsDefault(a7));
      let track;
      languages.every((language) => {
        track = sorted.find((t9) => t9.language === language);
        return !track;
      });
      return track || (force ? sorted[0] : void 0);
    },
    // Get the current track
    getCurrentTrack() {
      return captions.getTracks.call(this)[this.currentTrack];
    },
    // Get UI label for track
    getLabel(track) {
      let currentTrack = track;
      if (!is.track(currentTrack) && support2.textTracks && this.captions.toggled) {
        currentTrack = captions.getCurrentTrack.call(this);
      }
      if (is.track(currentTrack)) {
        if (!is.empty(currentTrack.label)) {
          return currentTrack.label;
        }
        if (!is.empty(currentTrack.language)) {
          return track.language.toUpperCase();
        }
        return i18n.get("enabled", this.config);
      }
      return i18n.get("disabled", this.config);
    },
    // Update captions using current track's active cues
    // Also optional array argument in case there isn't any track (ex: vimeo)
    updateCues(input) {
      if (!this.supported.ui) {
        return;
      }
      if (!is.element(this.elements.captions)) {
        this.debug.warn("No captions element to render to");
        return;
      }
      if (!is.nullOrUndefined(input) && !Array.isArray(input)) {
        this.debug.warn("updateCues: Invalid input", input);
        return;
      }
      let cues = input;
      if (!cues) {
        const track = captions.getCurrentTrack.call(this);
        cues = Array.from((track || {}).activeCues || []).map((cue) => cue.getCueAsHTML()).map(getHTML);
      }
      const content = cues.map((cueText) => cueText.trim()).join("\n");
      const changed = content !== this.elements.captions.innerHTML;
      if (changed) {
        emptyElement(this.elements.captions);
        const caption = createElement2("span", getAttributesFromSelector(this.config.selectors.caption));
        caption.innerHTML = content;
        this.elements.captions.appendChild(caption);
        triggerEvent2.call(this, this.media, "cuechange");
      }
    }
  };
  var defaults2 = {
    // Disable
    enabled: true,
    // Custom media title
    title: "",
    // Logging to console
    debug: false,
    // Auto play (if supported)
    autoplay: false,
    // Only allow one media playing at once (vimeo only)
    autopause: true,
    // Allow inline playback on iOS
    playsinline: true,
    // Default time to skip when rewind/fast forward
    seekTime: 10,
    // Default volume
    volume: 1,
    muted: false,
    // Pass a custom duration
    duration: null,
    // Display the media duration on load in the current time position
    // If you have opted to display both duration and currentTime, this is ignored
    displayDuration: true,
    // Invert the current time to be a countdown
    invertTime: true,
    // Clicking the currentTime inverts it's value to show time left rather than elapsed
    toggleInvert: true,
    // Force an aspect ratio
    // The format must be `'w:h'` (e.g. `'16:9'`)
    ratio: null,
    // Click video container to play/pause
    clickToPlay: true,
    // Auto hide the controls
    hideControls: true,
    // Reset to start when playback ended
    resetOnEnd: false,
    // Disable the standard context menu
    disableContextMenu: true,
    // Sprite (for icons)
    loadSprite: true,
    iconPrefix: "plyr",
    iconUrl: "https://cdn.plyr.io/3.8.4/plyr.svg",
    // Blank video (used to prevent errors on source change)
    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
    // Quality default
    quality: {
      default: 576,
      // The options to display in the UI, if available for the source media
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
      forced: false,
      onChange: null
    },
    // Set loops
    loop: {
      active: false
      // start: null,
      // end: null,
    },
    // Speed default and options to display
    speed: {
      selected: 1,
      // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]
    },
    // Keyboard shortcut settings
    keyboard: {
      focused: true,
      global: false
    },
    // Display tooltips
    tooltips: {
      controls: false,
      seek: true
    },
    // Captions settings
    captions: {
      active: false,
      language: "auto",
      // Listen to new tracks added after Plyr is initialized.
      // This is needed for streaming captions, but may result in unselectable options
      update: false
    },
    // Fullscreen settings
    fullscreen: {
      enabled: true,
      // Allow fullscreen?
      fallback: true,
      // Fallback using full viewport/window
      iosNative: false
      // Use the native fullscreen in iOS (disables custom controls)
      // Selector for the fullscreen container so contextual / non-player content can remain visible in fullscreen mode
      // Non-ancestors of the player element will be ignored
      // container: null, // defaults to the player element
    },
    // Local storage
    storage: {
      enabled: true,
      key: "plyr"
    },
    // Default controls
    controls: [
      "play-large",
      // 'restart',
      // 'rewind',
      "play",
      // 'fast-forward',
      "progress",
      "current-time",
      // 'duration',
      "mute",
      "volume",
      "captions",
      "settings",
      "pip",
      "airplay",
      // 'download',
      "fullscreen"
    ],
    settings: ["captions", "quality", "speed"],
    // Localisation
    i18n: {
      restart: "Restart",
      rewind: "Rewind {seektime}s",
      play: "Play",
      pause: "Pause",
      fastForward: "Forward {seektime}s",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      download: "Download",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      pip: "PIP",
      menuBack: "Go back to previous menu",
      speed: "Speed",
      normal: "Normal",
      quality: "Quality",
      loop: "Loop",
      start: "Start",
      end: "End",
      all: "All",
      reset: "Reset",
      disabled: "Disabled",
      enabled: "Enabled",
      advertisement: "Ad",
      qualityBadge: {
        2160: "4K",
        1440: "HD",
        1080: "HD",
        720: "HD",
        576: "SD",
        480: "SD"
      }
    },
    // URLs
    urls: {
      download: null,
      vimeo: {
        sdk: "https://player.vimeo.com/api/player.js",
        iframe: "https://player.vimeo.com/video/{0}?{1}",
        api: "https://vimeo.com/api/oembed.json?url={0}"
      },
      youtube: {
        sdk: "https://www.youtube.com/iframe_api",
        api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
      },
      googleIMA: {
        sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
      }
    },
    // Custom control listeners
    listeners: {
      seek: null,
      play: null,
      pause: null,
      restart: null,
      rewind: null,
      fastForward: null,
      mute: null,
      volume: null,
      captions: null,
      download: null,
      fullscreen: null,
      pip: null,
      airplay: null,
      speed: null,
      quality: null,
      loop: null,
      language: null
    },
    // Events to watch and bubble
    events: [
      // Events to watch on HTML5 media elements and bubble
      // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
      "ended",
      "progress",
      "stalled",
      "playing",
      "waiting",
      "canplay",
      "canplaythrough",
      "loadstart",
      "loadeddata",
      "loadedmetadata",
      "timeupdate",
      "volumechange",
      "play",
      "pause",
      "error",
      "seeking",
      "seeked",
      "emptied",
      "ratechange",
      "cuechange",
      // Custom events
      "download",
      "enterfullscreen",
      "exitfullscreen",
      "captionsenabled",
      "captionsdisabled",
      "languagechange",
      "controlshidden",
      "controlsshown",
      "ready",
      // YouTube
      "statechange",
      // Quality
      "qualitychange",
      // Ads
      "adsloaded",
      "adscontentpause",
      "adscontentresume",
      "adstarted",
      "adsmidpoint",
      "adscomplete",
      "adsallcomplete",
      "adsimpression",
      "adsclick"
    ],
    // Selectors
    // Change these to match your template if using custom HTML
    selectors: {
      editable: "input, textarea, select, [contenteditable]",
      container: ".plyr",
      controls: {
        container: null,
        wrapper: ".plyr__controls"
      },
      labels: "[data-plyr]",
      buttons: {
        play: '[data-plyr="play"]',
        pause: '[data-plyr="pause"]',
        restart: '[data-plyr="restart"]',
        rewind: '[data-plyr="rewind"]',
        fastForward: '[data-plyr="fast-forward"]',
        mute: '[data-plyr="mute"]',
        captions: '[data-plyr="captions"]',
        download: '[data-plyr="download"]',
        fullscreen: '[data-plyr="fullscreen"]',
        pip: '[data-plyr="pip"]',
        airplay: '[data-plyr="airplay"]',
        settings: '[data-plyr="settings"]',
        loop: '[data-plyr="loop"]'
      },
      inputs: {
        seek: '[data-plyr="seek"]',
        volume: '[data-plyr="volume"]',
        speed: '[data-plyr="speed"]',
        language: '[data-plyr="language"]',
        quality: '[data-plyr="quality"]'
      },
      display: {
        currentTime: ".plyr__time--current",
        duration: ".plyr__time--duration",
        buffer: ".plyr__progress__buffer",
        loop: ".plyr__progress__loop",
        // Used later
        volume: ".plyr__volume--display"
      },
      progress: ".plyr__progress",
      captions: ".plyr__captions",
      caption: ".plyr__caption"
    },
    // Class hooks added to the player in different states
    classNames: {
      type: "plyr--{0}",
      provider: "plyr--{0}",
      video: "plyr__video-wrapper",
      embed: "plyr__video-embed",
      videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
      embedContainer: "plyr__video-embed__container",
      poster: "plyr__poster",
      posterEnabled: "plyr__poster-enabled",
      ads: "plyr__ads",
      control: "plyr__control",
      controlPressed: "plyr__control--pressed",
      playing: "plyr--playing",
      paused: "plyr--paused",
      stopped: "plyr--stopped",
      loading: "plyr--loading",
      hover: "plyr--hover",
      tooltip: "plyr__tooltip",
      cues: "plyr__cues",
      marker: "plyr__progress__marker",
      hidden: "plyr__sr-only",
      hideControls: "plyr--hide-controls",
      isTouch: "plyr--is-touch",
      uiSupported: "plyr--full-ui",
      noTransition: "plyr--no-transition",
      display: {
        time: "plyr__time"
      },
      menu: {
        value: "plyr__menu__value",
        badge: "plyr__badge",
        open: "plyr--menu-open"
      },
      captions: {
        enabled: "plyr--captions-enabled",
        active: "plyr--captions-active"
      },
      fullscreen: {
        enabled: "plyr--fullscreen-enabled",
        fallback: "plyr--fullscreen-fallback"
      },
      pip: {
        supported: "plyr--pip-supported",
        active: "plyr--pip-active"
      },
      airplay: {
        supported: "plyr--airplay-supported",
        active: "plyr--airplay-active"
      },
      previewThumbnails: {
        // Tooltip thumbs
        thumbContainer: "plyr__preview-thumb",
        thumbContainerShown: "plyr__preview-thumb--is-shown",
        imageContainer: "plyr__preview-thumb__image-container",
        timeContainer: "plyr__preview-thumb__time-container",
        // Scrubbing
        scrubbingContainer: "plyr__preview-scrubbing",
        scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
      }
    },
    // Embed attributes
    attributes: {
      embed: {
        provider: "data-plyr-provider",
        id: "data-plyr-embed-id",
        hash: "data-plyr-embed-hash"
      }
    },
    // Advertisements plugin
    // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
    ads: {
      enabled: false,
      publisherId: "",
      tagUrl: ""
    },
    // Preview Thumbnails plugin
    previewThumbnails: {
      enabled: false,
      src: "",
      withCredentials: false
    },
    // Vimeo plugin
    vimeo: {
      byline: false,
      portrait: false,
      title: false,
      speed: true,
      transparent: false,
      // Custom settings from Plyr
      customControls: true,
      referrerPolicy: null,
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy
      // Whether the owner of the video has a Pro or Business account
      // (which allows us to properly hide controls without CSS hacks, etc)
      premium: false
    },
    // YouTube plugin
    youtube: {
      rel: 0,
      // No related vids
      showinfo: 0,
      // Hide info
      iv_load_policy: 3,
      // Hide annotations
      modestbranding: 1,
      // Hide logos as much as possible (they still show one in the corner when paused)
      // Custom settings from Plyr
      customControls: true,
      noCookie: false
      // Whether to use an alternative version of YouTube without cookies
    },
    // Media Metadata
    mediaMetadata: {
      title: "",
      artist: "",
      album: "",
      artwork: []
    },
    // Markers
    markers: {
      enabled: false,
      points: []
    }
  };
  var pip = {
    active: "picture-in-picture",
    inactive: "inline"
  };
  var providers = {
    html5: "html5",
    youtube: "youtube",
    vimeo: "vimeo"
  };
  var types = {
    audio: "audio",
    video: "video"
  };
  function getProviderByUrl(url) {
    if (/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(url)) {
      return providers.youtube;
    }
    if (/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(url)) {
      return providers.vimeo;
    }
    return null;
  }
  function noop() {
  }
  var Console = class {
    constructor(enabled = false) {
      this.enabled = window.console && enabled;
      if (this.enabled) {
        this.log("Debugging enabled");
      }
    }
    get log() {
      return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
    }
    get warn() {
      return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
    }
    get error() {
      return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
    }
  };
  var Fullscreen = class _Fullscreen {
    constructor(player) {
      _defineProperty$1(this, "onChange", () => {
        if (!this.supported) return;
        const button = this.player.elements.buttons.fullscreen;
        if (is.element(button)) {
          button.pressed = this.active;
        }
        const target = this.target === this.player.media ? this.target : this.player.elements.container;
        triggerEvent2.call(this.player, target, this.active ? "enterfullscreen" : "exitfullscreen", true);
      });
      _defineProperty$1(this, "toggleFallback", (toggle = false) => {
        if (toggle) {
          var _window$scrollX, _window$scrollY;
          this.scrollPosition = {
            x: (_window$scrollX = window.scrollX) !== null && _window$scrollX !== void 0 ? _window$scrollX : 0,
            y: (_window$scrollY = window.scrollY) !== null && _window$scrollY !== void 0 ? _window$scrollY : 0
          };
        } else {
          window.scrollTo(this.scrollPosition.x, this.scrollPosition.y);
        }
        document.body.style.overflow = toggle ? "hidden" : "";
        toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, toggle);
        if (browser2.isIos) {
          let viewport = document.head.querySelector('meta[name="viewport"]');
          const property = "viewport-fit=cover";
          if (!viewport) {
            viewport = document.createElement("meta");
            viewport.setAttribute("name", "viewport");
          }
          const hasProperty = is.string(viewport.content) && viewport.content.includes(property);
          if (toggle) {
            this.cleanupViewport = !hasProperty;
            if (!hasProperty) viewport.content += `,${property}`;
          } else if (this.cleanupViewport) {
            viewport.content = viewport.content.split(",").filter((part) => part.trim() !== property).join(",");
          }
        }
        this.onChange();
      });
      _defineProperty$1(this, "trapFocus", (event2) => {
        if (browser2.isIos || browser2.isIPadOS || !this.active || event2.key !== "Tab") return;
        const focused = document.activeElement;
        const focusable = getElements.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]");
        const [first] = focusable;
        const last = focusable[focusable.length - 1];
        if (focused === last && !event2.shiftKey) {
          first.focus();
          event2.preventDefault();
        } else if (focused === first && event2.shiftKey) {
          last.focus();
          event2.preventDefault();
        }
      });
      _defineProperty$1(this, "update", () => {
        if (this.supported) {
          let mode;
          if (this.forceFallback) mode = "Fallback (forced)";
          else if (_Fullscreen.nativeSupported) mode = "Native";
          else mode = "Fallback";
          this.player.debug.log(`${mode} fullscreen enabled`);
        } else {
          this.player.debug.log("Fullscreen not supported and fallback disabled");
        }
        toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
      });
      _defineProperty$1(this, "enter", () => {
        if (!this.supported) return;
        if (browser2.isIos && this.player.config.fullscreen.iosNative) {
          if (this.player.isVimeo) {
            this.player.embed.requestFullscreen();
          } else {
            this.target.webkitEnterFullscreen();
          }
        } else if (!_Fullscreen.nativeSupported || this.forceFallback) {
          this.toggleFallback(true);
        } else if (!this.prefix) {
          this.target.requestFullscreen({
            navigationUI: "hide"
          });
        } else if (!is.empty(this.prefix)) {
          this.target[`${this.prefix}Request${this.property}`]();
        }
      });
      _defineProperty$1(this, "exit", () => {
        if (!this.supported) return;
        if (browser2.isIos && this.player.config.fullscreen.iosNative) {
          if (this.player.isVimeo) {
            this.player.embed.exitFullscreen();
          } else {
            this.target.webkitEnterFullscreen();
          }
          silencePromise(this.player.play());
        } else if (!_Fullscreen.nativeSupported || this.forceFallback) {
          this.toggleFallback(false);
        } else if (!this.prefix) {
          (document.cancelFullScreen || document.exitFullscreen).call(document);
        } else if (!is.empty(this.prefix)) {
          const action = this.prefix === "moz" ? "Cancel" : "Exit";
          document[`${this.prefix}${action}${this.property}`]();
        }
      });
      _defineProperty$1(this, "toggle", () => {
        if (!this.active) this.enter();
        else this.exit();
      });
      this.player = player;
      this.prefix = _Fullscreen.prefix;
      this.property = _Fullscreen.property;
      this.scrollPosition = {
        x: 0,
        y: 0
      };
      this.forceFallback = player.config.fullscreen.fallback === "force";
      this.player.elements.fullscreen = player.config.fullscreen.container && closest$1(this.player.elements.container, player.config.fullscreen.container);
      on.call(this.player, document, this.prefix === "ms" ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
        this.onChange();
      });
      on.call(this.player, this.player.elements.container, "dblclick", (event2) => {
        if (is.element(this.player.elements.controls) && this.player.elements.controls.contains(event2.target)) {
          return;
        }
        this.player.listeners.proxy(event2, this.toggle, "fullscreen");
      });
      on.call(this, this.player.elements.container, "keydown", (event2) => this.trapFocus(event2));
      this.update();
    }
    // Determine if native supported
    static get nativeSupported() {
      return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
    }
    // If we're actually using native
    get useNative() {
      return _Fullscreen.nativeSupported && !this.forceFallback;
    }
    // Get the prefix for handlers
    static get prefix() {
      if (is.function(document.exitFullscreen)) return "";
      let value = "";
      const prefixes = ["webkit", "moz", "ms"];
      prefixes.some((pre) => {
        if (is.function(document[`${pre}ExitFullscreen`]) || is.function(document[`${pre}CancelFullScreen`])) {
          value = pre;
          return true;
        }
        return false;
      });
      return value;
    }
    static get property() {
      return this.prefix === "moz" ? "FullScreen" : "Fullscreen";
    }
    // Determine if fullscreen is supported
    get supported() {
      return [
        // Fullscreen is enabled in config
        this.player.config.fullscreen.enabled,
        // Must be a video
        this.player.isVideo,
        // Either native is supported or fallback enabled
        _Fullscreen.nativeSupported || this.player.config.fullscreen.fallback,
        // YouTube has no way to trigger fullscreen, so on devices with no native support, playsinline
        // must be enabled and iosNative fullscreen must be disabled to offer the fullscreen fallback
        !this.player.isYouTube || _Fullscreen.nativeSupported || !browser2.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative
      ].every(Boolean);
    }
    // Get active state
    get active() {
      if (!this.supported) return false;
      if (!_Fullscreen.nativeSupported || this.forceFallback) {
        return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
      }
      const element = !this.prefix ? this.target.getRootNode().fullscreenElement : this.target.getRootNode()[`${this.prefix}${this.property}Element`];
      return element && element.shadowRoot ? element === this.target.getRootNode().host : element === this.target;
    }
    // Get target element
    get target() {
      var _this$player$elements;
      return browser2.isIos && this.player.config.fullscreen.iosNative ? this.player.media : (_this$player$elements = this.player.elements.fullscreen) !== null && _this$player$elements !== void 0 ? _this$player$elements : this.player.elements.container;
    }
  };
  function loadImage(src, minWidth = 1) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      const handler = () => {
        delete image.onload;
        delete image.onerror;
        (image.naturalWidth >= minWidth ? resolve : reject)(image);
      };
      Object.assign(image, {
        onload: handler,
        onerror: handler,
        src
      });
    });
  }
  var ui = {
    addStyleHook() {
      toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), true);
      toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    },
    // Toggle native HTML5 media controls
    toggleNativeControls(toggle = false) {
      if (toggle && this.isHTML5) {
        this.media.setAttribute("controls", "");
      } else {
        this.media.removeAttribute("controls");
      }
    },
    // Setup the UI
    build() {
      this.listeners.media();
      if (!this.supported.ui) {
        this.debug.warn(`Basic support only for ${this.provider} ${this.type}`);
        ui.toggleNativeControls.call(this, true);
        return;
      }
      if (!is.element(this.elements.controls)) {
        controls.inject.call(this);
        this.listeners.controls();
      }
      ui.toggleNativeControls.call(this);
      if (this.isHTML5) {
        captions.setup.call(this);
      }
      this.volume = null;
      this.muted = null;
      this.loop = null;
      this.quality = null;
      this.speed = null;
      controls.updateVolume.call(this);
      controls.timeUpdate.call(this);
      controls.durationUpdate.call(this);
      ui.checkPlaying.call(this);
      toggleClass(this.elements.container, this.config.classNames.pip.supported, support2.pip && this.isHTML5 && this.isVideo);
      toggleClass(this.elements.container, this.config.classNames.airplay.supported, support2.airplay && this.isHTML5);
      toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch);
      this.ready = true;
      setTimeout(() => {
        triggerEvent2.call(this, this.media, "ready");
      }, 0);
      ui.setTitle.call(this);
      if (this.poster) {
        ui.setPoster.call(this, this.poster, false).catch(() => {
        });
      }
      if (this.config.duration) {
        controls.durationUpdate.call(this);
      }
      if (this.config.mediaMetadata) {
        controls.setMediaMetadata.call(this);
      }
    },
    // Setup aria attribute for play and iframe title
    setTitle() {
      let label = i18n.get("play", this.config);
      if (is.string(this.config.title) && !is.empty(this.config.title)) {
        label += `, ${this.config.title}`;
      }
      Array.from(this.elements.buttons.play || []).forEach((button) => {
        button.setAttribute("aria-label", label);
      });
      if (this.isEmbed) {
        const iframe = getElement.call(this, "iframe");
        if (!is.element(iframe)) {
          return;
        }
        const title = !is.empty(this.config.title) ? this.config.title : "video";
        const format2 = i18n.get("frameTitle", this.config);
        iframe.setAttribute("title", format2.replace("{title}", title));
      }
    },
    // Toggle poster
    togglePoster(enable) {
      toggleClass(this.elements.container, this.config.classNames.posterEnabled, enable);
    },
    // Set the poster image (async)
    // Used internally for the poster setter, with the passive option forced to false
    setPoster(poster, passive = true) {
      if (passive && this.poster) {
        return Promise.reject(new Error("Poster already set"));
      }
      this.media.setAttribute("data-poster", poster);
      this.elements.poster.removeAttribute("hidden");
      return ready2.call(this).then(() => loadImage(poster)).catch((error) => {
        if (poster === this.poster) {
          ui.togglePoster.call(this, false);
        }
        throw error;
      }).then(() => {
        if (poster !== this.poster) {
          throw new Error("setPoster cancelled by later call to setPoster");
        }
      }).then(() => {
        Object.assign(this.elements.poster.style, {
          backgroundImage: `url('${poster}')`,
          // Reset backgroundSize as well (since it can be set to "cover" for padded thumbnails for youtube)
          backgroundSize: ""
        });
        ui.togglePoster.call(this, true);
        return poster;
      });
    },
    // Check playing state
    checkPlaying(event2) {
      toggleClass(this.elements.container, this.config.classNames.playing, this.playing);
      toggleClass(this.elements.container, this.config.classNames.paused, this.paused);
      toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped);
      Array.from(this.elements.buttons.play || []).forEach((target) => {
        Object.assign(target, {
          pressed: this.playing
        });
        target.setAttribute("aria-label", i18n.get(this.playing ? "pause" : "play", this.config));
      });
      if (is.event(event2) && event2.type === "timeupdate") {
        return;
      }
      ui.toggleControls.call(this);
    },
    // Check if media is loading
    checkLoading(event2) {
      this.loading = ["stalled", "waiting"].includes(event2.type);
      clearTimeout(this.timers.loading);
      this.timers.loading = setTimeout(() => {
        toggleClass(this.elements.container, this.config.classNames.loading, this.loading);
        ui.toggleControls.call(this);
      }, this.loading ? 250 : 0);
    },
    // Toggle controls based on state and `force` argument
    toggleControls(force) {
      const {
        controls: controlsElement
      } = this.elements;
      if (controlsElement && this.config.hideControls) {
        const recentTouchSeek = this.touch && this.lastSeekTime + 2e3 > Date.now();
        this.toggleControls(Boolean(force || this.loading || this.paused || controlsElement.pressed || controlsElement.hover || recentTouchSeek));
      }
    },
    // Migrate any custom properties from the media to the parent
    migrateStyles() {
      Object.values({
        ...this.media.style
      }).filter((key) => !is.empty(key) && is.string(key) && key.startsWith("--plyr")).forEach((key) => {
        this.elements.container.style.setProperty(key, this.media.style.getPropertyValue(key));
        this.media.style.removeProperty(key);
      });
      if (is.empty(this.media.style)) {
        this.media.removeAttribute("style");
      }
    }
  };
  var Listeners = class {
    constructor(_player) {
      _defineProperty$1(this, "firstTouch", () => {
        const {
          player
        } = this;
        const {
          elements
        } = player;
        player.touch = true;
        toggleClass(elements.container, player.config.classNames.isTouch, true);
      });
      _defineProperty$1(this, "global", (toggle = true) => {
        const {
          player
        } = this;
        if (player.config.keyboard.global) {
          toggleListener.call(player, window, "keydown keyup", this.handleKey, toggle, false);
        }
        toggleListener.call(player, document.body, "click", this.toggleMenu, toggle);
        once.call(player, document.body, "touchstart", this.firstTouch);
      });
      _defineProperty$1(this, "container", () => {
        const {
          player
        } = this;
        const {
          config,
          elements,
          timers
        } = player;
        if (!config.keyboard.global && config.keyboard.focused) {
          on.call(player, elements.container, "keydown keyup", this.handleKey, false);
        }
        on.call(player, elements.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (event2) => {
          const {
            controls: controlsElement
          } = elements;
          if (controlsElement && event2.type === "enterfullscreen") {
            controlsElement.pressed = false;
            controlsElement.hover = false;
          }
          const show = ["touchstart", "touchmove", "mousemove"].includes(event2.type);
          let delay = 0;
          if (show) {
            ui.toggleControls.call(player, true);
            delay = player.touch ? 3e3 : 2e3;
          }
          clearTimeout(timers.controls);
          timers.controls = setTimeout(() => ui.toggleControls.call(player, false), delay);
        });
        const setGutter = () => {
          if (!player.isVimeo || player.config.vimeo.premium) {
            return;
          }
          const target = elements.wrapper;
          const {
            active
          } = player.fullscreen;
          const [videoWidth, videoHeight] = getAspectRatio.call(player);
          const useNativeAspectRatio = supportsCSS(`aspect-ratio: ${videoWidth} / ${videoHeight}`);
          if (!active) {
            if (useNativeAspectRatio) {
              target.style.width = null;
              target.style.height = null;
            } else {
              target.style.maxWidth = null;
              target.style.margin = null;
            }
            return;
          }
          const [viewportWidth, viewportHeight] = getViewportSize();
          const overflow = viewportWidth / viewportHeight > videoWidth / videoHeight;
          if (useNativeAspectRatio) {
            target.style.width = overflow ? "auto" : "100%";
            target.style.height = overflow ? "100%" : "auto";
          } else {
            target.style.maxWidth = overflow ? `${viewportHeight / videoHeight * videoWidth}px` : null;
            target.style.margin = overflow ? "0 auto" : null;
          }
        };
        const resized = () => {
          clearTimeout(timers.resized);
          timers.resized = setTimeout(setGutter, 50);
        };
        on.call(player, elements.container, "enterfullscreen exitfullscreen", (event2) => {
          const {
            target
          } = player.fullscreen;
          if (target !== elements.container) {
            return;
          }
          if (!player.isEmbed && is.empty(player.config.ratio)) {
            return;
          }
          setGutter();
          const method = event2.type === "enterfullscreen" ? on : off;
          method.call(player, window, "resize", resized);
        });
      });
      _defineProperty$1(this, "media", () => {
        const {
          player
        } = this;
        const {
          elements
        } = player;
        on.call(player, player.media, "timeupdate seeking seeked", (event2) => controls.timeUpdate.call(player, event2));
        on.call(player, player.media, "durationchange loadeddata loadedmetadata", (event2) => controls.durationUpdate.call(player, event2));
        on.call(player, player.media, "ended", () => {
          if (player.isHTML5 && player.isVideo && player.config.resetOnEnd) {
            player.restart();
            player.pause();
          }
        });
        on.call(player, player.media, "progress playing seeking seeked", (event2) => controls.updateProgress.call(player, event2));
        on.call(player, player.media, "volumechange", (event2) => controls.updateVolume.call(player, event2));
        on.call(player, player.media, "playing play pause ended emptied timeupdate", (event2) => ui.checkPlaying.call(player, event2));
        on.call(player, player.media, "waiting canplay seeked playing", (event2) => ui.checkLoading.call(player, event2));
        if (player.supported.ui && player.config.clickToPlay && !player.isAudio) {
          const wrapper = getElement.call(player, `.${player.config.classNames.video}`);
          if (!is.element(wrapper)) {
            return;
          }
          on.call(player, elements.container, "click", (event2) => {
            const targets = [elements.container, wrapper];
            if (!targets.includes(event2.target) && !wrapper.contains(event2.target)) {
              return;
            }
            if (player.touch && player.config.hideControls) {
              return;
            }
            if (player.ended) {
              this.proxy(event2, player.restart, "restart");
              this.proxy(event2, () => {
                silencePromise(player.play());
              }, "play");
            } else {
              this.proxy(event2, () => {
                silencePromise(player.togglePlay());
              }, "play");
            }
          });
        }
        if (player.supported.ui && player.config.disableContextMenu) {
          on.call(player, elements.wrapper, "contextmenu", (event2) => {
            event2.preventDefault();
          }, false);
        }
        on.call(player, player.media, "volumechange", () => {
          player.storage.set({
            volume: player.volume,
            muted: player.muted
          });
        });
        on.call(player, player.media, "ratechange", () => {
          controls.updateSetting.call(player, "speed");
          player.storage.set({
            speed: player.speed
          });
        });
        on.call(player, player.media, "qualitychange", (event2) => {
          controls.updateSetting.call(player, "quality", null, event2.detail.quality);
        });
        on.call(player, player.media, "ready qualitychange", () => {
          controls.setDownloadUrl.call(player);
        });
        const proxyEvents = player.config.events.concat(["keyup", "keydown"]).join(" ");
        on.call(player, player.media, proxyEvents, (event2) => {
          let {
            detail = {}
          } = event2;
          if (event2.type === "error") {
            detail = player.media.error;
          }
          triggerEvent2.call(player, elements.container, event2.type, true, detail);
        });
      });
      _defineProperty$1(this, "proxy", (event2, defaultHandler, customHandlerKey) => {
        const {
          player
        } = this;
        const customHandler = player.config.listeners[customHandlerKey];
        const hasCustomHandler = is.function(customHandler);
        let returned = true;
        if (hasCustomHandler) {
          returned = customHandler.call(player, event2);
        }
        if (returned !== false && is.function(defaultHandler)) {
          defaultHandler.call(player, event2);
        }
      });
      _defineProperty$1(this, "bind", (element, type, defaultHandler, customHandlerKey, passive = true) => {
        const {
          player
        } = this;
        const customHandler = player.config.listeners[customHandlerKey];
        const hasCustomHandler = is.function(customHandler);
        on.call(player, element, type, (event2) => this.proxy(event2, defaultHandler, customHandlerKey), passive && !hasCustomHandler);
      });
      _defineProperty$1(this, "controls", () => {
        const {
          player
        } = this;
        const {
          elements
        } = player;
        const inputEvent = browser2.isIE ? "change" : "input";
        if (elements.buttons.play) {
          Array.from(elements.buttons.play).forEach((button) => {
            this.bind(button, "click", () => {
              silencePromise(player.togglePlay());
            }, "play");
          });
        }
        this.bind(elements.buttons.restart, "click", player.restart, "restart");
        this.bind(elements.buttons.rewind, "click", () => {
          player.lastSeekTime = Date.now();
          player.rewind();
        }, "rewind");
        this.bind(elements.buttons.fastForward, "click", () => {
          player.lastSeekTime = Date.now();
          player.forward();
        }, "fastForward");
        this.bind(elements.buttons.mute, "click", () => {
          player.muted = !player.muted;
        }, "mute");
        this.bind(elements.buttons.captions, "click", () => player.toggleCaptions());
        this.bind(elements.buttons.download, "click", () => {
          triggerEvent2.call(player, player.media, "download");
        }, "download");
        this.bind(elements.buttons.fullscreen, "click", () => {
          player.fullscreen.toggle();
        }, "fullscreen");
        this.bind(elements.buttons.pip, "click", () => {
          player.pip = "toggle";
        }, "pip");
        this.bind(elements.buttons.airplay, "click", player.airplay, "airplay");
        this.bind(elements.buttons.settings, "click", (event2) => {
          event2.stopPropagation();
          event2.preventDefault();
          controls.toggleMenu.call(player, event2);
        }, null, false);
        this.bind(
          elements.buttons.settings,
          "keyup",
          (event2) => {
            if (![" ", "Enter"].includes(event2.key)) {
              return;
            }
            if (event2.key === "Enter") {
              controls.focusFirstMenuItem.call(player, null, true);
              return;
            }
            event2.preventDefault();
            event2.stopPropagation();
            controls.toggleMenu.call(player, event2);
          },
          null,
          false
          // Can't be passive as we're preventing default
        );
        this.bind(elements.settings.menu, "keydown", (event2) => {
          if (event2.key === "Escape") {
            controls.toggleMenu.call(player, event2);
          }
        });
        this.bind(elements.inputs.seek, "mousedown mousemove", (event2) => {
          const rect = elements.progress.getBoundingClientRect();
          const scrollLeft = event2.pageX - event2.clientX;
          const percent = 100 / rect.width * (event2.pageX - rect.left - scrollLeft);
          event2.currentTarget.setAttribute("seek-value", percent);
        });
        this.bind(elements.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (event2) => {
          const seek = event2.currentTarget;
          const attribute = "play-on-seeked";
          if (is.keyboardEvent(event2) && !["ArrowLeft", "ArrowRight"].includes(event2.key)) {
            return;
          }
          player.lastSeekTime = Date.now();
          const play = seek.hasAttribute(attribute);
          const done = ["mouseup", "touchend", "keyup"].includes(event2.type);
          if (play && done) {
            seek.removeAttribute(attribute);
            silencePromise(player.play());
          } else if (!done && player.playing) {
            seek.setAttribute(attribute, "");
            player.pause();
          }
        });
        if (browser2.isIos) {
          const inputs = getElements.call(player, 'input[type="range"]');
          Array.from(inputs).forEach((input) => this.bind(input, inputEvent, (event2) => repaint(event2.target)));
        }
        this.bind(elements.inputs.seek, inputEvent, (event2) => {
          const seek = event2.currentTarget;
          let seekTo = seek.getAttribute("seek-value");
          if (is.empty(seekTo)) {
            seekTo = seek.value;
          }
          seek.removeAttribute("seek-value");
          player.currentTime = seekTo / seek.max * player.duration;
        }, "seek");
        this.bind(elements.progress, "mouseenter mouseleave mousemove", (event2) => controls.updateSeekTooltip.call(player, event2));
        this.bind(elements.progress, "mousemove touchmove", (event2) => {
          const {
            previewThumbnails
          } = player;
          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.startMove(event2);
          }
        });
        this.bind(elements.progress, "mouseleave touchend click", () => {
          const {
            previewThumbnails
          } = player;
          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.endMove(false, true);
          }
        });
        this.bind(elements.progress, "mousedown touchstart", (event2) => {
          const {
            previewThumbnails
          } = player;
          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.startScrubbing(event2);
          }
        });
        this.bind(elements.progress, "mouseup touchend", (event2) => {
          const {
            previewThumbnails
          } = player;
          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.endScrubbing(event2);
          }
        });
        if (browser2.isWebKit) {
          Array.from(getElements.call(player, 'input[type="range"]')).forEach((element) => {
            this.bind(element, "input", (event2) => controls.updateRangeFill.call(player, event2.target));
          });
        }
        if (player.config.toggleInvert && !is.element(elements.display.duration)) {
          this.bind(elements.display.currentTime, "click", () => {
            if (player.currentTime === 0) {
              return;
            }
            player.config.invertTime = !player.config.invertTime;
            controls.timeUpdate.call(player);
          });
        }
        this.bind(elements.inputs.volume, inputEvent, (event2) => {
          player.volume = event2.target.value;
        }, "volume");
        this.bind(elements.controls, "mouseenter mouseleave", (event2) => {
          elements.controls.hover = !player.touch && event2.type === "mouseenter";
        });
        if (elements.fullscreen) {
          Array.from(elements.fullscreen.children).filter((c6) => !c6.contains(elements.container)).forEach((child) => {
            this.bind(child, "mouseenter mouseleave", (event2) => {
              if (elements.controls) {
                elements.controls.hover = !player.touch && event2.type === "mouseenter";
              }
            });
          });
        }
        this.bind(elements.controls, "mousedown mouseup touchstart touchend touchcancel", (event2) => {
          elements.controls.pressed = ["mousedown", "touchstart"].includes(event2.type);
        });
        this.bind(elements.controls, "focusin", () => {
          const {
            config,
            timers
          } = player;
          toggleClass(elements.controls, config.classNames.noTransition, true);
          ui.toggleControls.call(player, true);
          setTimeout(() => {
            toggleClass(elements.controls, config.classNames.noTransition, false);
          }, 0);
          const delay = this.touch ? 3e3 : 4e3;
          clearTimeout(timers.controls);
          timers.controls = setTimeout(() => ui.toggleControls.call(player, false), delay);
        });
        this.bind(elements.inputs.volume, "wheel", (event2) => {
          const inverted = event2.webkitDirectionInvertedFromDevice;
          const [x3, y3] = [event2.deltaX, -event2.deltaY].map((value) => inverted ? -value : value);
          const direction = Math.sign(Math.abs(x3) > Math.abs(y3) ? x3 : y3);
          player.increaseVolume(direction / 50);
          const {
            volume
          } = player.media;
          if (direction === 1 && volume < 1 || direction === -1 && volume > 0) {
            event2.preventDefault();
          }
        }, "volume", false);
      });
      this.player = _player;
      this.lastKey = null;
      this.focusTimer = null;
      this.lastKeyDown = null;
      this.handleKey = this.handleKey.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
      this.firstTouch = this.firstTouch.bind(this);
    }
    // Handle key presses
    handleKey(event2) {
      const {
        player
      } = this;
      const {
        elements
      } = player;
      const {
        key,
        type,
        altKey,
        ctrlKey,
        metaKey,
        shiftKey
      } = event2;
      const pressed = type === "keydown";
      const repeat = pressed && key === this.lastKey;
      if (altKey || ctrlKey || metaKey || shiftKey) {
        return;
      }
      if (!key) {
        return;
      }
      const seekByIncrement = (increment) => {
        player.currentTime = player.duration / 10 * increment;
      };
      if (pressed) {
        const focused = document.activeElement;
        if (is.element(focused)) {
          const {
            editable
          } = player.config.selectors;
          const {
            seek
          } = elements.inputs;
          if (focused !== seek && matches2(focused, editable)) {
            return;
          }
          if (event2.key === " " && matches2(focused, 'button, [role^="menuitem"]')) {
            return;
          }
        }
        const preventDefault = [" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"];
        if (preventDefault.includes(key)) {
          event2.preventDefault();
          event2.stopPropagation();
        }
        switch (key) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            if (!repeat) {
              seekByIncrement(Number.parseInt(key, 10));
            }
            break;
          case " ":
          case "k":
            if (!repeat) {
              silencePromise(player.togglePlay());
            }
            break;
          case "ArrowUp":
            player.increaseVolume(0.1);
            break;
          case "ArrowDown":
            player.decreaseVolume(0.1);
            break;
          case "m":
            if (!repeat) {
              player.muted = !player.muted;
            }
            break;
          case "ArrowRight":
            player.forward();
            break;
          case "ArrowLeft":
            player.rewind();
            break;
          case "f":
            player.fullscreen.toggle();
            break;
          case "c":
            if (!repeat) {
              player.toggleCaptions();
            }
            break;
          case "l":
            player.loop = !player.loop;
            break;
        }
        if (key === "Escape" && !player.fullscreen.usingNative && player.fullscreen.active) {
          player.fullscreen.toggle();
        }
        this.lastKey = key;
      } else {
        this.lastKey = null;
      }
    }
    // Toggle menu
    toggleMenu(event2) {
      controls.toggleMenu.call(this.player, event2);
    }
  };
  function getDefaultExportFromCjs(x3) {
    return x3 && x3.__esModule && Object.prototype.hasOwnProperty.call(x3, "default") ? x3["default"] : x3;
  }
  var loadjs_umd$1 = { exports: {} };
  var loadjs_umd = loadjs_umd$1.exports;
  var hasRequiredLoadjs_umd;
  function requireLoadjs_umd() {
    if (hasRequiredLoadjs_umd) return loadjs_umd$1.exports;
    hasRequiredLoadjs_umd = 1;
    (function(module, exports) {
      (function(root, factory) {
        {
          module.exports = factory();
        }
      })(loadjs_umd, function() {
        var devnull = function() {
        }, bundleIdCache = {}, bundleResultCache = {}, bundleCallbackQueue = {};
        function subscribe(bundleIds, callbackFn) {
          bundleIds = bundleIds.push ? bundleIds : [bundleIds];
          var depsNotFound = [], i8 = bundleIds.length, numWaiting = i8, fn, bundleId, r7, q2;
          fn = function(bundleId2, pathsNotFound) {
            if (pathsNotFound.length) depsNotFound.push(bundleId2);
            numWaiting--;
            if (!numWaiting) callbackFn(depsNotFound);
          };
          while (i8--) {
            bundleId = bundleIds[i8];
            r7 = bundleResultCache[bundleId];
            if (r7) {
              fn(bundleId, r7);
              continue;
            }
            q2 = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
            q2.push(fn);
          }
        }
        function publish(bundleId, pathsNotFound) {
          if (!bundleId) return;
          var q2 = bundleCallbackQueue[bundleId];
          bundleResultCache[bundleId] = pathsNotFound;
          if (!q2) return;
          while (q2.length) {
            q2[0](bundleId, pathsNotFound);
            q2.splice(0, 1);
          }
        }
        function executeCallbacks(args, depsNotFound) {
          if (args.call) args = {
            success: args
          };
          if (depsNotFound.length) (args.error || devnull)(depsNotFound);
          else (args.success || devnull)(args);
        }
        function loadFile(path, callbackFn, args, numTries) {
          var doc = document, async = args.async, maxTries = (args.numRetries || 0) + 1, beforeCallbackFn = args.before || devnull, pathname = path.replace(/[\?|#].*$/, ""), pathStripped = path.replace(/^(css|img|module|nomodule)!/, ""), isLegacyIECss, hasModuleSupport, e10;
          numTries = numTries || 0;
          if (/(^css!|\.css$)/.test(pathname)) {
            e10 = doc.createElement("link");
            e10.rel = "stylesheet";
            e10.href = pathStripped;
            isLegacyIECss = "hideFocus" in e10;
            if (isLegacyIECss && e10.relList) {
              isLegacyIECss = 0;
              e10.rel = "preload";
              e10.as = "style";
            }
          } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
            e10 = doc.createElement("img");
            e10.src = pathStripped;
          } else {
            e10 = doc.createElement("script");
            e10.src = pathStripped;
            e10.async = async === void 0 ? true : async;
            hasModuleSupport = "noModule" in e10;
            if (/^module!/.test(pathname)) {
              if (!hasModuleSupport) return callbackFn(path, "l");
              e10.type = "module";
            } else if (/^nomodule!/.test(pathname) && hasModuleSupport) return callbackFn(path, "l");
          }
          e10.onload = e10.onerror = e10.onbeforeload = function(ev) {
            var result = ev.type[0];
            if (isLegacyIECss) {
              try {
                if (!e10.sheet.cssText.length) result = "e";
              } catch (x3) {
                if (x3.code != 18) result = "e";
              }
            }
            if (result == "e") {
              numTries += 1;
              if (numTries < maxTries) {
                return loadFile(path, callbackFn, args, numTries);
              }
            } else if (e10.rel == "preload" && e10.as == "style") {
              return e10.rel = "stylesheet";
            }
            callbackFn(path, result, ev.defaultPrevented);
          };
          if (beforeCallbackFn(path, e10) !== false) doc.head.appendChild(e10);
        }
        function loadFiles(paths, callbackFn, args) {
          paths = paths.push ? paths : [paths];
          var numWaiting = paths.length, x3 = numWaiting, pathsNotFound = [], fn, i8;
          fn = function(path, result, defaultPrevented) {
            if (result == "e") pathsNotFound.push(path);
            if (result == "b") {
              if (defaultPrevented) pathsNotFound.push(path);
              else return;
            }
            numWaiting--;
            if (!numWaiting) callbackFn(pathsNotFound);
          };
          for (i8 = 0; i8 < x3; i8++) loadFile(paths[i8], fn, args);
        }
        function loadjs2(paths, arg1, arg2) {
          var bundleId, args;
          if (arg1 && arg1.trim) bundleId = arg1;
          args = (bundleId ? arg2 : arg1) || {};
          if (bundleId) {
            if (bundleId in bundleIdCache) {
              throw "LoadJS";
            } else {
              bundleIdCache[bundleId] = true;
            }
          }
          function loadFn(resolve, reject) {
            loadFiles(paths, function(pathsNotFound) {
              executeCallbacks(args, pathsNotFound);
              if (resolve) {
                executeCallbacks({
                  success: resolve,
                  error: reject
                }, pathsNotFound);
              }
              publish(bundleId, pathsNotFound);
            }, args);
          }
          if (args.returnPromise) return new Promise(loadFn);
          else loadFn();
        }
        loadjs2.ready = function ready3(deps, args) {
          subscribe(deps, function(depsNotFound) {
            executeCallbacks(args, depsNotFound);
          });
          return loadjs2;
        };
        loadjs2.done = function done(bundleId) {
          publish(bundleId, []);
        };
        loadjs2.reset = function reset() {
          bundleIdCache = {};
          bundleResultCache = {};
          bundleCallbackQueue = {};
        };
        loadjs2.isDefined = function isDefined(bundleId) {
          return bundleId in bundleIdCache;
        };
        return loadjs2;
      });
    })(loadjs_umd$1);
    return loadjs_umd$1.exports;
  }
  var loadjs_umdExports = requireLoadjs_umd();
  var loadjs = /* @__PURE__ */ getDefaultExportFromCjs(loadjs_umdExports);
  function loadScript(url) {
    return new Promise((resolve, reject) => {
      loadjs(url, {
        success: resolve,
        error: reject
      });
    });
  }
  function parseId$1(url) {
    if (is.empty(url)) {
      return null;
    }
    if (is.number(Number(url))) {
      return url;
    }
    const regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
    const match = url.match(regex);
    return match ? match[2] : url;
  }
  function parseHash(url) {
    const regex = /^.*(vimeo.com\/|video\/)(\d+)(\?.*h=|\/)+([\d,a-f]+)/;
    const found = url.match(regex);
    return found && found.length === 5 ? found[4] : null;
  }
  function assurePlaybackState$1(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }
    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent2.call(this, this.media, play ? "play" : "pause");
    }
  }
  var vimeo = {
    setup() {
      const player = this;
      toggleClass(player.elements.wrapper, player.config.classNames.embed, true);
      player.options.speed = player.config.speed.options;
      setAspectRatio.call(player);
      if (!is.object(window.Vimeo)) {
        loadScript(player.config.urls.vimeo.sdk).then(() => {
          vimeo.ready.call(player);
        }).catch((error) => {
          player.debug.warn("Vimeo SDK (player.js) failed to load", error);
        });
      } else {
        vimeo.ready.call(player);
      }
    },
    // API Ready
    ready() {
      const player = this;
      const config = player.config.vimeo;
      const {
        premium,
        referrerPolicy,
        ...frameParams
      } = config;
      let source2 = player.media.getAttribute("src");
      let hash = "";
      if (is.empty(source2)) {
        source2 = player.media.getAttribute(player.config.attributes.embed.id);
        hash = player.media.getAttribute(player.config.attributes.embed.hash);
      } else {
        hash = parseHash(source2);
      }
      const hashParam = hash ? {
        h: hash
      } : {};
      if (premium) {
        Object.assign(frameParams, {
          controls: false,
          sidedock: false
        });
      }
      const params = buildUrlParams({
        loop: player.config.loop.active,
        autoplay: player.autoplay,
        muted: player.muted,
        gesture: "media",
        playsinline: player.config.playsinline,
        // hash has to be added to iframe-URL
        ...hashParam,
        ...frameParams
      });
      const id = parseId$1(source2);
      const iframe = createElement2("iframe");
      const src = format(player.config.urls.vimeo.iframe, id, params);
      iframe.setAttribute("src", src);
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; "));
      if (!is.empty(referrerPolicy)) {
        iframe.setAttribute("referrerPolicy", referrerPolicy);
      }
      if (premium || !config.customControls) {
        iframe.setAttribute("data-poster", player.poster);
        player.media = replaceElement(iframe, player.media);
      } else {
        const wrapper = createElement2("div", {
          "class": player.config.classNames.embedContainer,
          "data-poster": player.poster
        });
        wrapper.appendChild(iframe);
        player.media = replaceElement(wrapper, player.media);
      }
      if (!config.customControls) {
        fetch(format(player.config.urls.vimeo.api, src)).then((response) => {
          if (is.empty(response) || !response.thumbnail_url) {
            return;
          }
          ui.setPoster.call(player, response.thumbnail_url).catch(() => {
          });
        });
      }
      player.embed = new window.Vimeo.Player(iframe, {
        autopause: player.config.autopause,
        muted: player.muted
      });
      player.media.paused = true;
      player.media.currentTime = 0;
      if (player.supported.ui) {
        player.embed.disableTextTrack();
      }
      player.media.play = () => {
        assurePlaybackState$1.call(player, true);
        return player.embed.play();
      };
      player.media.pause = () => {
        assurePlaybackState$1.call(player, false);
        return player.embed.pause();
      };
      player.media.stop = () => {
        player.pause();
        player.currentTime = 0;
      };
      let {
        currentTime
      } = player.media;
      Object.defineProperty(player.media, "currentTime", {
        get() {
          return currentTime;
        },
        set(time) {
          const {
            embed,
            media: media2,
            paused,
            volume: volume2
          } = player;
          const restorePause = paused && !embed.hasPlayed;
          media2.seeking = true;
          triggerEvent2.call(player, media2, "seeking");
          Promise.resolve(restorePause && embed.setVolume(0)).then(() => embed.setCurrentTime(time)).then(() => restorePause && embed.pause()).then(() => restorePause && embed.setVolume(volume2)).catch(() => {
          });
        }
      });
      let speed = player.config.speed.selected;
      Object.defineProperty(player.media, "playbackRate", {
        get() {
          return speed;
        },
        set(input) {
          player.embed.setPlaybackRate(input).then(() => {
            speed = input;
            triggerEvent2.call(player, player.media, "ratechange");
          }).catch(() => {
            player.options.speed = [1];
          });
        }
      });
      let {
        volume
      } = player.config;
      Object.defineProperty(player.media, "volume", {
        get() {
          return volume;
        },
        set(input) {
          player.embed.setVolume(input).then(() => {
            volume = input;
            triggerEvent2.call(player, player.media, "volumechange");
          });
        }
      });
      let {
        muted
      } = player.config;
      Object.defineProperty(player.media, "muted", {
        get() {
          return muted;
        },
        set(input) {
          const toggle = is.boolean(input) ? input : false;
          player.embed.setMuted(toggle ? true : player.config.muted).then(() => {
            muted = toggle;
            triggerEvent2.call(player, player.media, "volumechange");
          });
        }
      });
      let {
        loop: loop2
      } = player.config;
      Object.defineProperty(player.media, "loop", {
        get() {
          return loop2;
        },
        set(input) {
          const toggle = is.boolean(input) ? input : player.config.loop.active;
          player.embed.setLoop(toggle).then(() => {
            loop2 = toggle;
          });
        }
      });
      let currentSrc;
      player.embed.getVideoUrl().then((value) => {
        currentSrc = value;
        controls.setDownloadUrl.call(player);
      }).catch((error) => {
        this.debug.warn(error);
      });
      Object.defineProperty(player.media, "currentSrc", {
        get() {
          return currentSrc;
        }
      });
      Object.defineProperty(player.media, "ended", {
        get() {
          return player.currentTime === player.duration;
        }
      });
      Promise.all([player.embed.getVideoWidth(), player.embed.getVideoHeight()]).then((dimensions) => {
        const [width, height] = dimensions;
        player.embed.ratio = roundAspectRatio(width, height);
        setAspectRatio.call(this);
      });
      player.embed.setAutopause(player.config.autopause).then((state) => {
        player.config.autopause = state;
      });
      player.embed.getVideoTitle().then((title) => {
        player.config.title = title;
        ui.setTitle.call(this);
      });
      player.embed.getCurrentTime().then((value) => {
        currentTime = value;
        triggerEvent2.call(player, player.media, "timeupdate");
      });
      player.embed.getDuration().then((value) => {
        player.media.duration = value;
        triggerEvent2.call(player, player.media, "durationchange");
      });
      player.embed.getTextTracks().then((tracks) => {
        player.media.textTracks = tracks;
        captions.setup.call(player);
      });
      player.embed.on("cuechange", ({
        cues = []
      }) => {
        const strippedCues = cues.map((cue) => stripHTML(cue.text));
        captions.updateCues.call(player, strippedCues);
      });
      player.embed.on("loaded", () => {
        player.embed.getPaused().then((paused) => {
          assurePlaybackState$1.call(player, !paused);
          if (!paused) {
            triggerEvent2.call(player, player.media, "playing");
          }
        });
        if (is.element(player.embed.element) && player.supported.ui) {
          const frame = player.embed.element;
          frame.setAttribute("tabindex", -1);
        }
      });
      player.embed.on("bufferstart", () => {
        triggerEvent2.call(player, player.media, "waiting");
      });
      player.embed.on("bufferend", () => {
        triggerEvent2.call(player, player.media, "playing");
      });
      player.embed.on("play", () => {
        assurePlaybackState$1.call(player, true);
        triggerEvent2.call(player, player.media, "playing");
      });
      player.embed.on("pause", () => {
        assurePlaybackState$1.call(player, false);
      });
      player.embed.on("timeupdate", (data) => {
        player.media.seeking = false;
        currentTime = data.seconds;
        triggerEvent2.call(player, player.media, "timeupdate");
      });
      player.embed.on("progress", (data) => {
        player.media.buffered = data.percent;
        triggerEvent2.call(player, player.media, "progress");
        if (Number.parseInt(data.percent, 10) === 1) {
          triggerEvent2.call(player, player.media, "canplaythrough");
        }
        player.embed.getDuration().then((value) => {
          if (value !== player.media.duration) {
            player.media.duration = value;
            triggerEvent2.call(player, player.media, "durationchange");
          }
        });
      });
      player.embed.on("seeked", () => {
        player.media.seeking = false;
        triggerEvent2.call(player, player.media, "seeked");
      });
      player.embed.on("ended", () => {
        player.media.paused = true;
        triggerEvent2.call(player, player.media, "ended");
      });
      player.embed.on("error", (detail) => {
        player.media.error = detail;
        triggerEvent2.call(player, player.media, "error");
      });
      if (config.customControls) {
        setTimeout(() => ui.build.call(player), 0);
      }
    }
  };
  function parseId(url) {
    if (is.empty(url)) {
      return null;
    }
    const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regex);
    return match && match[2] ? match[2] : url;
  }
  function assurePlaybackState(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }
    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent2.call(this, this.media, play ? "play" : "pause");
    }
  }
  function getHost(config) {
    if (config.noCookie) {
      return "https://www.youtube-nocookie.com";
    }
    if (window.location.protocol === "http:") {
      return "http://www.youtube.com";
    }
    return void 0;
  }
  var youtube = {
    setup() {
      toggleClass(this.elements.wrapper, this.config.classNames.embed, true);
      if (is.object(window.YT) && is.function(window.YT.Player)) {
        youtube.ready.call(this);
      } else {
        const callback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (is.function(callback)) {
            callback();
          }
          youtube.ready.call(this);
        };
        loadScript(this.config.urls.youtube.sdk).catch((error) => {
          this.debug.warn("YouTube API failed to load", error);
        });
      }
    },
    // Get the media title
    getTitle(videoId) {
      const url = format(this.config.urls.youtube.api, videoId);
      fetch(url).then((data) => {
        if (is.object(data)) {
          const {
            title,
            height,
            width
          } = data;
          this.config.title = title;
          ui.setTitle.call(this);
          this.embed.ratio = roundAspectRatio(width, height);
        }
        setAspectRatio.call(this);
      }).catch(() => {
        setAspectRatio.call(this);
      });
    },
    // API ready
    ready() {
      const player = this;
      const config = player.config.youtube;
      const currentId = player.media && player.media.getAttribute("id");
      if (!is.empty(currentId) && currentId.startsWith("youtube-")) {
        return;
      }
      let source2 = player.media.getAttribute("src");
      if (is.empty(source2)) {
        source2 = player.media.getAttribute(this.config.attributes.embed.id);
      }
      const videoId = parseId(source2);
      const id = generateId(player.provider);
      const container = createElement2("div", {
        id,
        "data-poster": config.customControls ? player.poster : void 0
      });
      player.media = replaceElement(container, player.media);
      if (config.customControls) {
        const posterSrc = (s11) => `https://i.ytimg.com/vi/${videoId}/${s11}default.jpg`;
        loadImage(posterSrc("maxres"), 121).catch(() => loadImage(posterSrc("sd"), 121)).catch(() => loadImage(posterSrc("hq"))).then((image) => ui.setPoster.call(player, image.src)).then((src) => {
          if (!src.includes("maxres")) {
            player.elements.poster.style.backgroundSize = "cover";
          }
        }).catch(() => {
        });
      }
      player.embed = new window.YT.Player(player.media, {
        videoId,
        host: getHost(config),
        playerVars: extend4({}, {
          // Autoplay
          autoplay: player.config.autoplay ? 1 : 0,
          // iframe interface language
          hl: player.config.hl,
          // Only show controls if not fully supported or opted out
          controls: player.supported.ui && config.customControls ? 0 : 1,
          // Disable keyboard as we handle it
          disablekb: 1,
          // Allow iOS inline playback
          playsinline: player.config.playsinline && !player.config.fullscreen.iosNative ? 1 : 0,
          // Captions are flaky on YouTube
          cc_load_policy: player.captions.active ? 1 : 0,
          cc_lang_pref: player.config.captions.language,
          // Tracking for stats
          widget_referrer: window ? window.location.href : null
        }, config),
        events: {
          onError(event2) {
            if (!player.media.error) {
              const code = event2.data;
              const message = {
                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                101: "The owner of the requested video does not allow it to be played in embedded players.",
                150: "The owner of the requested video does not allow it to be played in embedded players."
              }[code] || "An unknown error occurred";
              player.media.error = {
                code,
                message
              };
              triggerEvent2.call(player, player.media, "error");
            }
          },
          onPlaybackRateChange(event2) {
            const instance = event2.target;
            player.media.playbackRate = instance.getPlaybackRate();
            triggerEvent2.call(player, player.media, "ratechange");
          },
          onReady(event2) {
            if (is.function(player.media.play)) {
              return;
            }
            const instance = event2.target;
            youtube.getTitle.call(player, videoId);
            player.media.play = () => {
              assurePlaybackState.call(player, true);
              instance.playVideo();
            };
            player.media.pause = () => {
              assurePlaybackState.call(player, false);
              instance.pauseVideo();
            };
            player.media.stop = () => {
              instance.stopVideo();
            };
            player.media.duration = instance.getDuration();
            player.media.paused = true;
            player.media.currentTime = 0;
            Object.defineProperty(player.media, "currentTime", {
              get() {
                return Number(instance.getCurrentTime());
              },
              set(time) {
                if (player.paused && !player.embed.hasPlayed) {
                  player.embed.mute();
                }
                player.media.seeking = true;
                triggerEvent2.call(player, player.media, "seeking");
                instance.seekTo(time);
              }
            });
            Object.defineProperty(player.media, "playbackRate", {
              get() {
                return instance.getPlaybackRate();
              },
              set(input) {
                instance.setPlaybackRate(input);
              }
            });
            let {
              volume
            } = player.config;
            Object.defineProperty(player.media, "volume", {
              get() {
                return volume;
              },
              set(input) {
                volume = input;
                instance.setVolume(volume * 100);
                triggerEvent2.call(player, player.media, "volumechange");
              }
            });
            let {
              muted
            } = player.config;
            Object.defineProperty(player.media, "muted", {
              get() {
                return muted;
              },
              set(input) {
                const toggle = is.boolean(input) ? input : muted;
                muted = toggle;
                instance[toggle ? "mute" : "unMute"]();
                instance.setVolume(volume * 100);
                triggerEvent2.call(player, player.media, "volumechange");
              }
            });
            Object.defineProperty(player.media, "currentSrc", {
              get() {
                return instance.getVideoUrl();
              }
            });
            Object.defineProperty(player.media, "ended", {
              get() {
                return player.currentTime === player.duration;
              }
            });
            const speeds = instance.getAvailablePlaybackRates();
            player.options.speed = speeds.filter((s11) => player.config.speed.options.includes(s11));
            if (player.supported.ui && config.customControls) {
              player.media.setAttribute("tabindex", -1);
            }
            triggerEvent2.call(player, player.media, "timeupdate");
            triggerEvent2.call(player, player.media, "durationchange");
            clearInterval(player.timers.buffering);
            player.timers.buffering = setInterval(() => {
              player.media.buffered = instance.getVideoLoadedFraction();
              if (player.media.lastBuffered === null || player.media.lastBuffered < player.media.buffered) {
                triggerEvent2.call(player, player.media, "progress");
              }
              player.media.lastBuffered = player.media.buffered;
              if (player.media.buffered === 1) {
                clearInterval(player.timers.buffering);
                triggerEvent2.call(player, player.media, "canplaythrough");
              }
            }, 200);
            if (config.customControls) {
              setTimeout(() => ui.build.call(player), 50);
            }
          },
          onStateChange(event2) {
            const instance = event2.target;
            clearInterval(player.timers.playing);
            const seeked = player.media.seeking && [1, 2].includes(event2.data);
            if (seeked) {
              player.media.seeking = false;
              triggerEvent2.call(player, player.media, "seeked");
            }
            switch (event2.data) {
              case -1:
                triggerEvent2.call(player, player.media, "timeupdate");
                player.media.buffered = instance.getVideoLoadedFraction();
                triggerEvent2.call(player, player.media, "progress");
                break;
              case 0:
                assurePlaybackState.call(player, false);
                if (player.media.loop) {
                  instance.stopVideo();
                  instance.playVideo();
                } else {
                  triggerEvent2.call(player, player.media, "ended");
                }
                break;
              case 1:
                if (config.customControls && !player.config.autoplay && player.media.paused && !player.embed.hasPlayed) {
                  player.media.pause();
                } else {
                  assurePlaybackState.call(player, true);
                  triggerEvent2.call(player, player.media, "playing");
                  player.timers.playing = setInterval(() => {
                    triggerEvent2.call(player, player.media, "timeupdate");
                  }, 50);
                  if (player.media.duration !== instance.getDuration()) {
                    player.media.duration = instance.getDuration();
                    triggerEvent2.call(player, player.media, "durationchange");
                  }
                }
                break;
              case 2:
                if (!player.muted) {
                  player.embed.unMute();
                }
                assurePlaybackState.call(player, false);
                break;
              case 3:
                triggerEvent2.call(player, player.media, "waiting");
                break;
            }
            triggerEvent2.call(player, player.elements.container, "statechange", false, {
              code: event2.data
            });
          }
        }
      });
    }
  };
  var media = {
    // Setup media
    setup() {
      if (!this.media) {
        this.debug.warn("No media element found!");
        return;
      }
      toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true);
      toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true);
      if (this.isEmbed) {
        toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true);
      }
      if (this.isVideo) {
        this.elements.wrapper = createElement2("div", {
          class: this.config.classNames.video
        });
        wrap(this.media, this.elements.wrapper);
        this.elements.poster = createElement2("div", {
          class: this.config.classNames.poster
        });
        this.elements.wrapper.appendChild(this.elements.poster);
      }
      if (this.isHTML5) {
        html5.setup.call(this);
      } else if (this.isYouTube) {
        youtube.setup.call(this);
      } else if (this.isVimeo) {
        vimeo.setup.call(this);
      }
    }
  };
  function destroy(instance) {
    if (instance.manager) {
      instance.manager.destroy();
    }
    if (instance.elements.displayContainer) {
      instance.elements.displayContainer.destroy();
    }
    instance.elements.container.remove();
  }
  var Ads = class {
    /**
     * Ads constructor.
     * @param {object} player
     * @return {Ads}
     */
    constructor(player) {
      _defineProperty$1(this, "load", () => {
        if (!this.enabled) {
          return;
        }
        if (!is.object(window.google) || !is.object(window.google.ima)) {
          loadScript(this.player.config.urls.googleIMA.sdk).then(() => {
            this.ready();
          }).catch(() => {
            this.trigger("error", new Error("Google IMA SDK failed to load"));
          });
        } else {
          this.ready();
        }
      });
      _defineProperty$1(this, "ready", () => {
        if (!this.enabled) {
          destroy(this);
        }
        this.startSafetyTimer(12e3, "ready()");
        this.managerPromise.then(() => {
          this.clearSafetyTimer("onAdsManagerLoaded()");
        });
        this.listeners();
        this.setupIMA();
      });
      _defineProperty$1(this, "setupIMA", () => {
        this.elements.container = createElement2("div", {
          class: this.player.config.classNames.ads
        });
        this.player.elements.container.appendChild(this.elements.container);
        google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);
        google.ima.settings.setLocale(this.player.config.ads.language);
        google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline);
        this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media);
        this.loader = new google.ima.AdsLoader(this.elements.displayContainer);
        this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (event2) => this.onAdsManagerLoaded(event2), false);
        this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (error) => this.onAdError(error), false);
        this.requestAds();
      });
      _defineProperty$1(this, "requestAds", () => {
        const {
          container
        } = this.player.elements;
        try {
          const request = new google.ima.AdsRequest();
          request.adTagUrl = this.tagUrl;
          request.linearAdSlotWidth = container.offsetWidth;
          request.linearAdSlotHeight = container.offsetHeight;
          request.nonLinearAdSlotWidth = container.offsetWidth;
          request.nonLinearAdSlotHeight = container.offsetHeight;
          request.forceNonLinearFullSlot = false;
          request.setAdWillPlayMuted(!this.player.muted);
          this.loader.requestAds(request);
        } catch (error) {
          this.onAdError(error);
        }
      });
      _defineProperty$1(this, "pollCountdown", (start = false) => {
        if (!start) {
          clearInterval(this.countdownTimer);
          this.elements.container.removeAttribute("data-badge-text");
          return;
        }
        const update2 = () => {
          const time = formatTime(Math.max(this.manager.getRemainingTime(), 0));
          const label = `${i18n.get("advertisement", this.player.config)} - ${time}`;
          this.elements.container.setAttribute("data-badge-text", label);
        };
        this.countdownTimer = setInterval(update2, 100);
      });
      _defineProperty$1(this, "onAdsManagerLoaded", (event2) => {
        if (!this.enabled) {
          return;
        }
        const settings = new google.ima.AdsRenderingSettings();
        settings.restoreCustomPlaybackStateOnAdBreakComplete = true;
        settings.enablePreloading = true;
        this.manager = event2.getAdsManager(this.player, settings);
        this.cuePoints = this.manager.getCuePoints();
        this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (error) => this.onAdError(error));
        Object.keys(google.ima.AdEvent.Type).forEach((type) => {
          this.manager.addEventListener(google.ima.AdEvent.Type[type], (e10) => this.onAdEvent(e10));
        });
        this.trigger("loaded");
      });
      _defineProperty$1(this, "addCuePoints", () => {
        if (!is.empty(this.cuePoints)) {
          this.cuePoints.forEach((cuePoint) => {
            if (cuePoint !== 0 && cuePoint !== -1 && cuePoint < this.player.duration) {
              const seekElement = this.player.elements.progress;
              if (is.element(seekElement)) {
                const cuePercentage = 100 / this.player.duration * cuePoint;
                const cue = createElement2("span", {
                  class: this.player.config.classNames.cues
                });
                cue.style.left = `${cuePercentage.toString()}%`;
                seekElement.appendChild(cue);
              }
            }
          });
        }
      });
      _defineProperty$1(this, "onAdEvent", (event2) => {
        const {
          container
        } = this.player.elements;
        const ad = event2.getAd();
        const adData = event2.getAdData();
        const dispatchEvent = (type) => {
          triggerEvent2.call(this.player, this.player.media, `ads${type.replace(/_/g, "").toLowerCase()}`);
        };
        dispatchEvent(event2.type);
        switch (event2.type) {
          case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded");
            this.pollCountdown(true);
            if (!ad.isLinear()) {
              ad.width = container.offsetWidth;
              ad.height = container.offsetHeight;
            }
            break;
          case google.ima.AdEvent.Type.STARTED:
            this.manager.setVolume(this.player.volume);
            break;
          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            if (this.player.ended) {
              this.loadAds();
            } else {
              this.loader.contentComplete();
            }
            break;
          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            this.pauseContent();
            break;
          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            this.pollCountdown();
            this.resumeContent();
            break;
          case google.ima.AdEvent.Type.LOG:
            if (adData.adError) {
              this.player.debug.warn(`Non-fatal ad error: ${adData.adError.getMessage()}`);
            }
            break;
        }
      });
      _defineProperty$1(this, "onAdError", (event2) => {
        this.cancel();
        this.player.debug.warn("Ads error", event2);
      });
      _defineProperty$1(this, "listeners", () => {
        const {
          container
        } = this.player.elements;
        let time;
        this.player.on("canplay", () => {
          this.addCuePoints();
        });
        this.player.on("ended", () => {
          this.loader.contentComplete();
        });
        this.player.on("timeupdate", () => {
          time = this.player.currentTime;
        });
        this.player.on("seeked", () => {
          const seekedTime = this.player.currentTime;
          if (is.empty(this.cuePoints)) {
            return;
          }
          this.cuePoints.forEach((cuePoint, index) => {
            if (time < cuePoint && cuePoint < seekedTime) {
              this.manager.discardAdBreak();
              this.cuePoints.splice(index, 1);
            }
          });
        });
        window.addEventListener("resize", () => {
          if (this.manager) {
            this.manager.resize(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
          }
        });
      });
      _defineProperty$1(this, "play", () => {
        const {
          container
        } = this.player.elements;
        if (!this.managerPromise) {
          this.resumeContent();
        }
        this.managerPromise.then(() => {
          this.manager.setVolume(this.player.volume);
          this.elements.displayContainer.initialize();
          try {
            if (!this.initialized) {
              this.manager.init(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
              this.manager.start();
            }
            this.initialized = true;
          } catch (adError) {
            this.onAdError(adError);
          }
        }).catch(() => {
        });
      });
      _defineProperty$1(this, "resumeContent", () => {
        this.elements.container.style.zIndex = "";
        this.playing = false;
        silencePromise(this.player.media.play());
      });
      _defineProperty$1(this, "pauseContent", () => {
        this.elements.container.style.zIndex = 3;
        this.playing = true;
        this.player.media.pause();
      });
      _defineProperty$1(this, "cancel", () => {
        if (this.initialized) {
          this.resumeContent();
        }
        this.trigger("error");
        this.loadAds();
      });
      _defineProperty$1(this, "loadAds", () => {
        this.managerPromise.then(() => {
          if (this.manager) {
            this.manager.destroy();
          }
          this.managerPromise = new Promise((resolve) => {
            this.on("loaded", resolve);
            this.player.debug.log(this.manager);
          });
          this.initialized = false;
          this.requestAds();
        }).catch(() => {
        });
      });
      _defineProperty$1(this, "trigger", (event2, ...args) => {
        const handlers = this.events[event2];
        if (is.array(handlers)) {
          handlers.forEach((handler) => {
            if (is.function(handler)) {
              handler.apply(this, args);
            }
          });
        }
      });
      _defineProperty$1(this, "on", (event2, callback) => {
        if (!is.array(this.events[event2])) {
          this.events[event2] = [];
        }
        this.events[event2].push(callback);
        return this;
      });
      _defineProperty$1(this, "startSafetyTimer", (time, from) => {
        this.player.debug.log(`Safety timer invoked from: ${from}`);
        this.safetyTimer = setTimeout(() => {
          this.cancel();
          this.clearSafetyTimer("startSafetyTimer()");
        }, time);
      });
      _defineProperty$1(this, "clearSafetyTimer", (from) => {
        if (!is.nullOrUndefined(this.safetyTimer)) {
          this.player.debug.log(`Safety timer cleared from: ${from}`);
          clearTimeout(this.safetyTimer);
          this.safetyTimer = null;
        }
      });
      this.player = player;
      this.config = player.config.ads;
      this.playing = false;
      this.initialized = false;
      this.elements = {
        container: null,
        displayContainer: null
      };
      this.manager = null;
      this.loader = null;
      this.cuePoints = null;
      this.events = {};
      this.safetyTimer = null;
      this.countdownTimer = null;
      this.managerPromise = new Promise((resolve, reject) => {
        this.on("loaded", resolve);
        this.on("error", reject);
      });
      this.load();
    }
    get enabled() {
      const {
        config
      } = this;
      return this.player.isHTML5 && this.player.isVideo && config.enabled && (!is.empty(config.publisherId) || is.url(config.tagUrl));
    }
    // Build the tag URL
    get tagUrl() {
      const {
        config
      } = this;
      if (is.url(config.tagUrl)) {
        return config.tagUrl;
      }
      const params = {
        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
        AV_CHANNELID: "5a0458dc28a06145e4519d21",
        AV_URL: window.location.hostname,
        cb: Date.now(),
        AV_WIDTH: 640,
        AV_HEIGHT: 480,
        AV_CDIM2: config.publisherId
      };
      const base = "https://go.aniview.com/api/adserver6/vast/";
      return `${base}?${buildUrlParams(params)}`;
    }
  };
  function clamp(input = 0, min = 0, max = 255) {
    return Math.min(Math.max(input, min), max);
  }
  function parseVtt(vttDataString) {
    const processedList = [];
    const frames = vttDataString.split(/\r\n\r\n|\n\n|\r\r/);
    frames.forEach((frame) => {
      const result = {};
      const lines = frame.split(/\r\n|\n|\r/);
      lines.forEach((line) => {
        if (!is.number(result.startTime)) {
          const matchTimes = line.match(/(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})( ?--> ?)(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})/);
          if (matchTimes) {
            result.startTime = Number(matchTimes[1] || 0) * 60 * 60 + Number(matchTimes[2]) * 60 + Number(matchTimes[3]) + Number(`0.${matchTimes[4]}`);
            result.endTime = Number(matchTimes[6] || 0) * 60 * 60 + Number(matchTimes[7]) * 60 + Number(matchTimes[8]) + Number(`0.${matchTimes[9]}`);
          }
        } else if (!is.empty(line.trim()) && is.empty(result.text)) {
          const lineSplit = line.trim().split("#xywh=");
          [result.text] = lineSplit;
          if (lineSplit[1]) {
            [result.x, result.y, result.w, result.h] = lineSplit[1].split(",");
          }
        }
      });
      if (result.text) {
        processedList.push(result);
      }
    });
    return processedList;
  }
  function fitRatio(ratio, outer) {
    const targetRatio = outer.width / outer.height;
    const result = {};
    if (ratio > targetRatio) {
      result.width = outer.width;
      result.height = 1 / ratio * outer.width;
    } else {
      result.height = outer.height;
      result.width = ratio * outer.height;
    }
    return result;
  }
  var PreviewThumbnails = class {
    /**
     * PreviewThumbnails constructor.
     * @param {Plyr} player
     * @return {PreviewThumbnails}
     */
    constructor(player) {
      _defineProperty$1(this, "load", () => {
        if (this.player.elements.display.seekTooltip) {
          this.player.elements.display.seekTooltip.hidden = this.enabled;
        }
        if (!this.enabled) return;
        this.getThumbnails().then(() => {
          if (!this.enabled) {
            return;
          }
          this.render();
          this.determineContainerAutoSizing();
          this.listeners();
          this.loaded = true;
        });
      });
      _defineProperty$1(this, "getThumbnails", () => {
        return new Promise((resolve) => {
          const {
            src
          } = this.player.config.previewThumbnails;
          if (is.empty(src)) {
            throw new Error("Missing previewThumbnails.src config attribute");
          }
          const sortAndResolve = () => {
            this.thumbnails.sort((x3, y3) => x3.height - y3.height);
            this.player.debug.log("Preview thumbnails", this.thumbnails);
            resolve();
          };
          if (is.function(src)) {
            src((thumbnails) => {
              this.thumbnails = thumbnails;
              sortAndResolve();
            });
          } else {
            const urls = is.string(src) ? [src] : src;
            const promises = urls.map((u6) => this.getThumbnail(u6));
            Promise.all(promises).then(sortAndResolve);
          }
        });
      });
      _defineProperty$1(this, "getThumbnail", (url) => {
        return new Promise((resolve) => {
          fetch(url, void 0, this.player.config.previewThumbnails.withCredentials).then((response) => {
            const thumbnail = {
              frames: parseVtt(response),
              height: null,
              urlPrefix: ""
            };
            if (!thumbnail.frames[0].text.startsWith("/") && !thumbnail.frames[0].text.startsWith("http://") && !thumbnail.frames[0].text.startsWith("https://")) {
              thumbnail.urlPrefix = url.substring(0, url.lastIndexOf("/") + 1);
            }
            const tempImage = new Image();
            tempImage.onload = () => {
              thumbnail.height = tempImage.naturalHeight;
              thumbnail.width = tempImage.naturalWidth;
              this.thumbnails.push(thumbnail);
              resolve();
            };
            tempImage.src = thumbnail.urlPrefix + thumbnail.frames[0].text;
          });
        });
      });
      _defineProperty$1(this, "startMove", (event2) => {
        if (!this.loaded) return;
        if (!is.event(event2) || !["touchmove", "mousemove"].includes(event2.type)) return;
        if (!this.player.media.duration) return;
        if (event2.type === "touchmove") {
          this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
        } else {
          var _this$player$config$m, _this$player$config$m2;
          const clientRect = this.player.elements.progress.getBoundingClientRect();
          const percentage = 100 / clientRect.width * (event2.pageX - clientRect.left);
          this.seekTime = this.player.media.duration * (percentage / 100);
          if (this.seekTime < 0) {
            this.seekTime = 0;
          }
          if (this.seekTime > this.player.media.duration - 1) {
            this.seekTime = this.player.media.duration - 1;
          }
          this.mousePosX = event2.pageX;
          this.elements.thumb.time.textContent = formatTime(this.seekTime);
          const point = (_this$player$config$m = this.player.config.markers) === null || _this$player$config$m === void 0 ? void 0 : (_this$player$config$m2 = _this$player$config$m.points) === null || _this$player$config$m2 === void 0 ? void 0 : _this$player$config$m2.find(({
            time: t9
          }) => t9 === Math.round(this.seekTime));
          if (point) {
            this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${point.label}<br>`);
          }
        }
        this.showImageAtCurrentTime();
      });
      _defineProperty$1(this, "endMove", () => {
        this.toggleThumbContainer(false, true);
      });
      _defineProperty$1(this, "startScrubbing", (event2) => {
        if (is.nullOrUndefined(event2.button) || event2.button === false || event2.button === 0) {
          this.mouseDown = true;
          if (this.player.media.duration) {
            this.toggleScrubbingContainer(true);
            this.toggleThumbContainer(false, true);
            this.showImageAtCurrentTime();
          }
        }
      });
      _defineProperty$1(this, "endScrubbing", () => {
        this.mouseDown = false;
        if (Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime)) {
          this.toggleScrubbingContainer(false);
        } else {
          once.call(this.player, this.player.media, "timeupdate", () => {
            if (!this.mouseDown) {
              this.toggleScrubbingContainer(false);
            }
          });
        }
      });
      _defineProperty$1(this, "listeners", () => {
        this.player.on("play", () => {
          this.toggleThumbContainer(false, true);
        });
        this.player.on("seeked", () => {
          this.toggleThumbContainer(false);
        });
        this.player.on("timeupdate", () => {
          this.lastTime = this.player.media.currentTime;
        });
      });
      _defineProperty$1(this, "render", () => {
        this.elements.thumb.container = createElement2("div", {
          class: this.player.config.classNames.previewThumbnails.thumbContainer
        });
        this.elements.thumb.imageContainer = createElement2("div", {
          class: this.player.config.classNames.previewThumbnails.imageContainer
        });
        this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
        const timeContainer = createElement2("div", {
          class: this.player.config.classNames.previewThumbnails.timeContainer
        });
        this.elements.thumb.time = createElement2("span", {}, "00:00");
        timeContainer.appendChild(this.elements.thumb.time);
        this.elements.thumb.imageContainer.appendChild(timeContainer);
        if (is.element(this.player.elements.progress)) {
          this.player.elements.progress.appendChild(this.elements.thumb.container);
        }
        this.elements.scrubbing.container = createElement2("div", {
          class: this.player.config.classNames.previewThumbnails.scrubbingContainer
        });
        this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
      });
      _defineProperty$1(this, "destroy", () => {
        if (this.elements.thumb.container) {
          this.elements.thumb.container.remove();
        }
        if (this.elements.scrubbing.container) {
          this.elements.scrubbing.container.remove();
        }
      });
      _defineProperty$1(this, "showImageAtCurrentTime", () => {
        if (this.mouseDown) {
          this.setScrubbingContainerSize();
        } else {
          this.setThumbContainerSizeAndPos();
        }
        const thumbNum = this.thumbnails[0].frames.findIndex((frame) => this.seekTime >= frame.startTime && this.seekTime <= frame.endTime);
        const hasThumb = thumbNum >= 0;
        let qualityIndex = 0;
        if (!this.mouseDown) {
          this.toggleThumbContainer(hasThumb);
        }
        if (!hasThumb) {
          return;
        }
        this.thumbnails.forEach((thumbnail, index) => {
          if (this.loadedImages.includes(thumbnail.frames[thumbNum].text)) {
            qualityIndex = index;
          }
        });
        if (thumbNum !== this.showingThumb) {
          this.showingThumb = thumbNum;
          this.loadImage(qualityIndex);
        }
      });
      _defineProperty$1(this, "loadImage", (qualityIndex = 0) => {
        const thumbNum = this.showingThumb;
        const thumbnail = this.thumbnails[qualityIndex];
        const {
          urlPrefix
        } = thumbnail;
        const frame = thumbnail.frames[thumbNum];
        const thumbFilename = thumbnail.frames[thumbNum].text;
        const thumbUrl = urlPrefix + thumbFilename;
        if (!this.currentImageElement || this.currentImageElement.dataset.filename !== thumbFilename) {
          if (this.loadingImage && this.usingSprites) {
            this.loadingImage.onload = null;
          }
          const previewImage = new Image();
          previewImage.src = thumbUrl;
          previewImage.dataset.index = thumbNum;
          previewImage.dataset.filename = thumbFilename;
          this.showingThumbFilename = thumbFilename;
          this.player.debug.log(`Loading image: ${thumbUrl}`);
          previewImage.onload = () => this.showImage(previewImage, frame, qualityIndex, thumbNum, thumbFilename, true);
          this.loadingImage = previewImage;
          this.removeOldImages(previewImage);
        } else {
          this.showImage(this.currentImageElement, frame, qualityIndex, thumbNum, thumbFilename, false);
          this.currentImageElement.dataset.index = thumbNum;
          this.removeOldImages(this.currentImageElement);
        }
      });
      _defineProperty$1(this, "showImage", (previewImage, frame, qualityIndex, thumbNum, thumbFilename, newImage = true) => {
        this.player.debug.log(`Showing thumb: ${thumbFilename}. num: ${thumbNum}. qual: ${qualityIndex}. newimg: ${newImage}`);
        this.setImageSizeAndOffset(previewImage, frame);
        if (newImage) {
          this.currentImageContainer.appendChild(previewImage);
          this.currentImageElement = previewImage;
          if (!this.loadedImages.includes(thumbFilename)) {
            this.loadedImages.push(thumbFilename);
          }
        }
        this.preloadNearby(thumbNum, true).then(this.preloadNearby(thumbNum, false)).then(this.getHigherQuality(qualityIndex, previewImage, frame, thumbFilename));
      });
      _defineProperty$1(this, "removeOldImages", (currentImage) => {
        Array.from(this.currentImageContainer.children).forEach((image) => {
          if (image.tagName.toLowerCase() !== "img") {
            return;
          }
          const removeDelay = this.usingSprites ? 500 : 1e3;
          if (image.dataset.index !== currentImage.dataset.index && !image.dataset.deleting) {
            image.dataset.deleting = true;
            const {
              currentImageContainer
            } = this;
            setTimeout(() => {
              currentImageContainer.removeChild(image);
              this.player.debug.log(`Removing thumb: ${image.dataset.filename}`);
            }, removeDelay);
          }
        });
      });
      _defineProperty$1(this, "preloadNearby", (thumbNum, forward = true) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const oldThumbFilename = this.thumbnails[0].frames[thumbNum].text;
            if (this.showingThumbFilename === oldThumbFilename) {
              let thumbnailsClone;
              if (forward) {
                thumbnailsClone = this.thumbnails[0].frames.slice(thumbNum);
              } else {
                thumbnailsClone = this.thumbnails[0].frames.slice(0, thumbNum).reverse();
              }
              let foundOne = false;
              thumbnailsClone.forEach((frame) => {
                const newThumbFilename = frame.text;
                if (newThumbFilename !== oldThumbFilename) {
                  if (!this.loadedImages.includes(newThumbFilename)) {
                    foundOne = true;
                    this.player.debug.log(`Preloading thumb filename: ${newThumbFilename}`);
                    const {
                      urlPrefix
                    } = this.thumbnails[0];
                    const thumbURL = urlPrefix + newThumbFilename;
                    const previewImage = new Image();
                    previewImage.src = thumbURL;
                    previewImage.onload = () => {
                      this.player.debug.log(`Preloaded thumb filename: ${newThumbFilename}`);
                      if (!this.loadedImages.includes(newThumbFilename)) this.loadedImages.push(newThumbFilename);
                      resolve();
                    };
                  }
                }
              });
              if (!foundOne) {
                resolve();
              }
            }
          }, 300);
        });
      });
      _defineProperty$1(this, "getHigherQuality", (currentQualityIndex, previewImage, frame, thumbFilename) => {
        if (currentQualityIndex < this.thumbnails.length - 1) {
          let previewImageHeight = previewImage.naturalHeight;
          if (this.usingSprites) {
            previewImageHeight = frame.h;
          }
          if (previewImageHeight < this.thumbContainerHeight) {
            setTimeout(() => {
              if (this.showingThumbFilename === thumbFilename) {
                this.player.debug.log(`Showing higher quality thumb for: ${thumbFilename}`);
                this.loadImage(currentQualityIndex + 1);
              }
            }, 300);
          }
        }
      });
      _defineProperty$1(this, "toggleThumbContainer", (toggle = false, clearShowing = false) => {
        const className = this.player.config.classNames.previewThumbnails.thumbContainerShown;
        this.elements.thumb.container.classList.toggle(className, toggle);
        if (!toggle && clearShowing) {
          this.showingThumb = null;
          this.showingThumbFilename = null;
        }
      });
      _defineProperty$1(this, "toggleScrubbingContainer", (toggle = false) => {
        const className = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
        this.elements.scrubbing.container.classList.toggle(className, toggle);
        if (!toggle) {
          this.showingThumb = null;
          this.showingThumbFilename = null;
        }
      });
      _defineProperty$1(this, "determineContainerAutoSizing", () => {
        if (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) {
          this.sizeSpecifiedInCSS = true;
        }
      });
      _defineProperty$1(this, "setThumbContainerSizeAndPos", () => {
        const {
          imageContainer
        } = this.elements.thumb;
        if (!this.sizeSpecifiedInCSS) {
          const thumbWidth = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
          imageContainer.style.height = `${this.thumbContainerHeight}px`;
          imageContainer.style.width = `${thumbWidth}px`;
        } else if (imageContainer.clientHeight > 20 && imageContainer.clientWidth < 20) {
          const thumbWidth = Math.floor(imageContainer.clientHeight * this.thumbAspectRatio);
          imageContainer.style.width = `${thumbWidth}px`;
        } else if (imageContainer.clientHeight < 20 && imageContainer.clientWidth > 20) {
          const thumbHeight = Math.floor(imageContainer.clientWidth / this.thumbAspectRatio);
          imageContainer.style.height = `${thumbHeight}px`;
        }
        this.setThumbContainerPos();
      });
      _defineProperty$1(this, "setThumbContainerPos", () => {
        const scrubberRect = this.player.elements.progress.getBoundingClientRect();
        const containerRect = this.player.elements.container.getBoundingClientRect();
        const {
          container
        } = this.elements.thumb;
        const min = containerRect.left - scrubberRect.left + 10;
        const max = containerRect.right - scrubberRect.left - container.clientWidth - 10;
        const position = this.mousePosX - scrubberRect.left - container.clientWidth / 2;
        const clamped = clamp(position, min, max);
        container.style.left = `${clamped}px`;
        container.style.setProperty("--preview-arrow-offset", `${position - clamped}px`);
      });
      _defineProperty$1(this, "setScrubbingContainerSize", () => {
        const {
          width,
          height
        } = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        });
        this.elements.scrubbing.container.style.width = `${width}px`;
        this.elements.scrubbing.container.style.height = `${height}px`;
      });
      _defineProperty$1(this, "setImageSizeAndOffset", (previewImage, frame) => {
        if (!this.usingSprites) return;
        const multiplier = this.thumbContainerHeight / frame.h;
        previewImage.style.height = `${previewImage.naturalHeight * multiplier}px`;
        previewImage.style.width = `${previewImage.naturalWidth * multiplier}px`;
        previewImage.style.left = `-${frame.x * multiplier}px`;
        previewImage.style.top = `-${frame.y * multiplier}px`;
      });
      this.player = player;
      this.thumbnails = [];
      this.loaded = false;
      this.lastMouseMoveTime = Date.now();
      this.mouseDown = false;
      this.loadedImages = [];
      this.elements = {
        thumb: {},
        scrubbing: {}
      };
      this.load();
    }
    get enabled() {
      return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
    }
    get currentImageContainer() {
      return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
    }
    get usingSprites() {
      return Object.keys(this.thumbnails[0].frames[0]).includes("w");
    }
    get thumbAspectRatio() {
      if (this.usingSprites) {
        return this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h;
      }
      return this.thumbnails[0].width / this.thumbnails[0].height;
    }
    get thumbContainerHeight() {
      if (this.mouseDown) {
        const {
          height
        } = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        });
        return height;
      }
      if (this.sizeSpecifiedInCSS) {
        return this.elements.thumb.imageContainer.clientHeight;
      }
      return Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
    }
    get currentImageElement() {
      return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
    }
    set currentImageElement(element) {
      if (this.mouseDown) {
        this.currentScrubbingImageElement = element;
      } else {
        this.currentThumbnailImageElement = element;
      }
    }
  };
  var source = {
    // Add elements to HTML5 media (source, tracks, etc)
    insertElements(type, attributes) {
      if (is.string(attributes)) {
        insertElement(type, this.media, {
          src: attributes
        });
      } else if (is.array(attributes)) {
        attributes.forEach((attribute) => {
          insertElement(type, this.media, attribute);
        });
      }
    },
    // Update source
    // Sources are not checked for support so be careful
    change(input) {
      if (!getDeep(input, "sources.length")) {
        this.debug.warn("Invalid source format");
        return;
      }
      html5.cancelRequests.call(this);
      this.destroy(() => {
        this.options.quality = [];
        removeElement2(this.media);
        this.media = null;
        if (is.element(this.elements.container)) {
          this.elements.container.removeAttribute("class");
        }
        const {
          sources,
          type
        } = input;
        const [{
          provider = providers.html5,
          src
        }] = sources;
        const tagName = provider === "html5" ? type : "div";
        const attributes = provider === "html5" ? {} : {
          src
        };
        Object.assign(this, {
          provider,
          type,
          // Check for support
          supported: support2.check(type, provider, this.config.playsinline),
          // Create new element
          media: createElement2(tagName, attributes)
        });
        this.elements.container.appendChild(this.media);
        if (is.boolean(input.autoplay)) {
          this.config.autoplay = input.autoplay;
        }
        if (this.isHTML5) {
          if (this.config.crossorigin) {
            this.media.setAttribute("crossorigin", "");
          }
          if (this.config.autoplay) {
            this.media.setAttribute("autoplay", "");
          }
          if (!is.empty(input.poster)) {
            this.poster = input.poster;
          }
          if (this.config.loop.active) {
            this.media.setAttribute("loop", "");
          }
          if (this.config.muted) {
            this.media.setAttribute("muted", "");
          }
          if (this.config.playsinline) {
            this.media.setAttribute("playsinline", "");
          }
        }
        ui.addStyleHook.call(this);
        if (this.isHTML5) {
          source.insertElements.call(this, "source", sources);
        }
        this.config.title = input.title;
        media.setup.call(this);
        if (this.isHTML5) {
          if (Object.keys(input).includes("tracks")) {
            source.insertElements.call(this, "track", input.tracks);
          }
        }
        if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
          ui.build.call(this);
        }
        if (this.isHTML5) {
          this.media.load();
        }
        if (!is.empty(input.previewThumbnails)) {
          Object.assign(this.config.previewThumbnails, input.previewThumbnails);
          if (this.previewThumbnails && this.previewThumbnails.loaded) {
            this.previewThumbnails.destroy();
            this.previewThumbnails = null;
          }
          if (this.config.previewThumbnails.enabled) {
            this.previewThumbnails = new PreviewThumbnails(this);
          }
        }
        this.fullscreen.update();
      }, true);
    }
  };
  var Plyr = class _Plyr {
    constructor(target, options) {
      _defineProperty$1(this, "play", () => {
        if (!is.function(this.media.play)) {
          return null;
        }
        if (this.ads && this.ads.enabled) {
          this.ads.managerPromise.then(() => this.ads.play()).catch(() => silencePromise(this.media.play()));
        }
        return this.media.play();
      });
      _defineProperty$1(this, "pause", () => {
        if (!this.playing || !is.function(this.media.pause)) {
          return null;
        }
        return this.media.pause();
      });
      _defineProperty$1(this, "togglePlay", (input) => {
        const toggle = is.boolean(input) ? input : !this.playing;
        if (toggle) {
          return this.play();
        }
        return this.pause();
      });
      _defineProperty$1(this, "stop", () => {
        if (this.isHTML5) {
          this.pause();
          this.restart();
        } else if (is.function(this.media.stop)) {
          this.media.stop();
        }
      });
      _defineProperty$1(this, "restart", () => {
        this.currentTime = 0;
      });
      _defineProperty$1(this, "rewind", (seekTime) => {
        this.currentTime -= is.number(seekTime) ? seekTime : this.config.seekTime;
      });
      _defineProperty$1(this, "forward", (seekTime) => {
        this.currentTime += is.number(seekTime) ? seekTime : this.config.seekTime;
      });
      _defineProperty$1(this, "increaseVolume", (step) => {
        const volume = this.media.muted ? 0 : this.volume;
        this.volume = volume + (is.number(step) ? step : 0);
      });
      _defineProperty$1(this, "decreaseVolume", (step) => {
        this.increaseVolume(-step);
      });
      _defineProperty$1(this, "airplay", () => {
        if (support2.airplay) {
          this.media.webkitShowPlaybackTargetPicker();
        }
      });
      _defineProperty$1(this, "toggleControls", (toggle) => {
        if (this.supported.ui && !this.isAudio) {
          const isHidden = hasClass(this.elements.container, this.config.classNames.hideControls);
          const force = typeof toggle === "undefined" ? void 0 : !toggle;
          const hiding = toggleClass(this.elements.container, this.config.classNames.hideControls, force);
          if (hiding && is.array(this.config.controls) && this.config.controls.includes("settings") && !is.empty(this.config.settings)) {
            controls.toggleMenu.call(this, false);
          }
          if (hiding !== isHidden) {
            const eventName = hiding ? "controlshidden" : "controlsshown";
            triggerEvent2.call(this, this.media, eventName);
          }
          return !hiding;
        }
        return false;
      });
      _defineProperty$1(this, "on", (event2, callback) => {
        on.call(this, this.elements.container, event2, callback);
      });
      _defineProperty$1(this, "once", (event2, callback) => {
        once.call(this, this.elements.container, event2, callback);
      });
      _defineProperty$1(this, "off", (event2, callback) => {
        off(this.elements.container, event2, callback);
      });
      _defineProperty$1(this, "destroy", (callback, soft = false) => {
        if (!this.ready) {
          return;
        }
        const done = () => {
          document.body.style.overflow = "";
          this.embed = null;
          if (soft) {
            if (Object.keys(this.elements).length) {
              removeElement2(this.elements.buttons.play);
              removeElement2(this.elements.captions);
              removeElement2(this.elements.controls);
              removeElement2(this.elements.wrapper);
              this.elements.buttons.play = null;
              this.elements.captions = null;
              this.elements.controls = null;
              this.elements.wrapper = null;
            }
            if (is.function(callback)) {
              callback();
            }
          } else {
            unbindListeners.call(this);
            html5.cancelRequests.call(this);
            replaceElement(this.elements.original, this.elements.container);
            triggerEvent2.call(this, this.elements.original, "destroyed", true);
            if (is.function(callback)) {
              callback.call(this.elements.original);
            }
            this.ready = false;
            setTimeout(() => {
              this.elements = null;
              this.media = null;
            }, 200);
          }
        };
        this.stop();
        clearTimeout(this.timers.loading);
        clearTimeout(this.timers.controls);
        clearTimeout(this.timers.resized);
        if (this.isHTML5) {
          ui.toggleNativeControls.call(this, true);
          done();
        } else if (this.isYouTube) {
          clearInterval(this.timers.buffering);
          clearInterval(this.timers.playing);
          if (this.embed !== null && is.function(this.embed.destroy)) {
            this.embed.destroy();
          }
          done();
        } else if (this.isVimeo) {
          if (this.embed !== null) {
            this.embed.unload().then(done);
          }
          setTimeout(done, 200);
        }
      });
      _defineProperty$1(this, "supports", (type) => support2.mime.call(this, type));
      this.timers = {};
      this.ready = false;
      this.loading = false;
      this.failed = false;
      this.touch = support2.touch;
      this.media = target;
      if (is.string(this.media)) {
        this.media = document.querySelectorAll(this.media);
      }
      if (window.jQuery && this.media instanceof jQuery || is.nodeList(this.media) || is.array(this.media)) {
        this.media = this.media[0];
      }
      this.config = extend4({}, defaults2, _Plyr.defaults, options || {}, (() => {
        try {
          return JSON.parse(this.media.getAttribute("data-plyr-config"));
        } catch {
          return {};
        }
      })());
      this.elements = {
        container: null,
        fullscreen: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {
          popup: null,
          menu: null,
          panels: {},
          buttons: {}
        }
      };
      this.captions = {
        active: null,
        currentTrack: -1,
        meta: /* @__PURE__ */ new WeakMap()
      };
      this.fullscreen = {
        active: false
      };
      this.options = {
        speed: [],
        quality: []
      };
      this.debug = new Console(this.config.debug);
      this.debug.log("Config", this.config);
      this.debug.log("Support", support2);
      if (is.nullOrUndefined(this.media) || !is.element(this.media)) {
        this.debug.error("Setup failed: no suitable element passed");
        return;
      }
      if (this.media.plyr) {
        this.debug.warn("Target already setup");
        return;
      }
      if (!this.config.enabled) {
        this.debug.error("Setup failed: disabled by config");
        return;
      }
      if (!support2.check().api) {
        this.debug.error("Setup failed: no support");
        return;
      }
      const clone = this.media.cloneNode(true);
      clone.autoplay = false;
      this.elements.original = clone;
      const _type = this.media.tagName.toLowerCase();
      let iframe = null;
      let url = null;
      switch (_type) {
        case "div":
          iframe = this.media.querySelector("iframe");
          if (is.element(iframe)) {
            url = parseUrl(iframe.getAttribute("src"));
            this.provider = getProviderByUrl(url.toString());
            this.elements.container = this.media;
            this.media = iframe;
            this.elements.container.className = "";
            if (url.search.length) {
              const truthy = ["1", "true"];
              if (truthy.includes(url.searchParams.get("autoplay"))) {
                this.config.autoplay = true;
              }
              if (truthy.includes(url.searchParams.get("loop"))) {
                this.config.loop.active = true;
              }
              if (this.isYouTube) {
                this.config.playsinline = truthy.includes(url.searchParams.get("playsinline"));
                this.config.youtube.hl = url.searchParams.get("hl");
              } else {
                this.config.playsinline = true;
              }
            }
          } else {
            this.provider = this.media.getAttribute(this.config.attributes.embed.provider);
            this.media.removeAttribute(this.config.attributes.embed.provider);
          }
          if (is.empty(this.provider) || !Object.values(providers).includes(this.provider)) {
            this.debug.error("Setup failed: Invalid provider");
            return;
          }
          this.type = types.video;
          break;
        case "video":
        case "audio":
          this.type = _type;
          this.provider = providers.html5;
          if (this.media.hasAttribute("crossorigin")) {
            this.config.crossorigin = true;
          }
          if (this.media.hasAttribute("autoplay")) {
            this.config.autoplay = true;
          }
          if (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) {
            this.config.playsinline = true;
          }
          if (this.media.hasAttribute("muted")) {
            this.config.muted = true;
          }
          if (this.media.hasAttribute("loop")) {
            this.config.loop.active = true;
          }
          break;
        default:
          this.debug.error("Setup failed: unsupported type");
          return;
      }
      this.supported = support2.check(this.type, this.provider);
      if (!this.supported.api) {
        this.debug.error("Setup failed: no support");
        return;
      }
      this.eventListeners = [];
      this.listeners = new Listeners(this);
      this.storage = new Storage(this);
      this.media.plyr = this;
      if (!is.element(this.elements.container)) {
        this.elements.container = createElement2("div");
        wrap(this.media, this.elements.container);
      }
      ui.migrateStyles.call(this);
      ui.addStyleHook.call(this);
      media.setup.call(this);
      if (this.config.debug) {
        on.call(this, this.elements.container, this.config.events.join(" "), (event2) => {
          this.debug.log(`event: ${event2.type}`);
        });
      }
      this.fullscreen = new Fullscreen(this);
      if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
        ui.build.call(this);
      }
      this.listeners.container();
      this.listeners.global();
      if (this.config.ads.enabled) {
        this.ads = new Ads(this);
      }
      if (this.isHTML5 && this.config.autoplay) {
        this.once("canplay", () => silencePromise(this.play()));
      }
      this.lastSeekTime = 0;
      if (this.config.previewThumbnails.enabled) {
        this.previewThumbnails = new PreviewThumbnails(this);
      }
    }
    // ---------------------------------------
    // API
    // ---------------------------------------
    /**
     * Types and provider helpers
     */
    get isHTML5() {
      return this.provider === providers.html5;
    }
    get isEmbed() {
      return this.isYouTube || this.isVimeo;
    }
    get isYouTube() {
      return this.provider === providers.youtube;
    }
    get isVimeo() {
      return this.provider === providers.vimeo;
    }
    get isVideo() {
      return this.type === types.video;
    }
    get isAudio() {
      return this.type === types.audio;
    }
    /**
     * Get playing state
     */
    get playing() {
      return Boolean(this.ready && !this.paused && !this.ended);
    }
    /**
     * Get paused state
     */
    get paused() {
      return Boolean(this.media.paused);
    }
    /**
     * Get stopped state
     */
    get stopped() {
      return Boolean(this.paused && this.currentTime === 0);
    }
    /**
     * Get ended state
     */
    get ended() {
      return Boolean(this.media.ended);
    }
    /**
     * Seek to a time
     * @param {number} input - where to seek to in seconds. Defaults to 0 (the start)
     */
    set currentTime(input) {
      if (!this.duration) {
        return;
      }
      const inputIsValid = is.number(input) && input > 0;
      this.media.currentTime = inputIsValid ? Math.min(input, this.duration) : 0;
      this.debug.log(`Seeking to ${this.currentTime} seconds`);
    }
    /**
     * Get current time
     */
    get currentTime() {
      return Number(this.media.currentTime);
    }
    /**
     * Get buffered
     */
    get buffered() {
      const {
        buffered
      } = this.media;
      if (is.number(buffered)) {
        return buffered;
      }
      if (buffered && buffered.length && this.duration > 0) {
        return buffered.end(0) / this.duration;
      }
      return 0;
    }
    /**
     * Get seeking status
     */
    get seeking() {
      return Boolean(this.media.seeking);
    }
    /**
     * Get the duration of the current media
     */
    get duration() {
      const fauxDuration = Number.parseFloat(this.config.duration);
      const realDuration = (this.media || {}).duration;
      const duration = !is.number(realDuration) || realDuration === Infinity ? 0 : realDuration;
      return fauxDuration || duration;
    }
    /**
     * Set the player volume
     * @param {number} value - must be between 0 and 1. Defaults to the value from local storage and config.volume if not set in storage
     */
    set volume(value) {
      let volume = value;
      const max = 1;
      const min = 0;
      if (is.string(volume)) {
        volume = Number(volume);
      }
      if (!is.number(volume)) {
        volume = this.storage.get("volume");
      }
      if (!is.number(volume)) {
        ({
          volume
        } = this.config);
      }
      if (volume > max) {
        volume = max;
      }
      if (volume < min) {
        volume = min;
      }
      this.config.volume = volume;
      this.media.volume = volume;
      if (!is.empty(value) && this.muted && volume > 0) {
        this.muted = false;
      }
    }
    /**
     * Get the current player volume
     */
    get volume() {
      return Number(this.media.volume);
    }
    /**
     * Set muted state
     * @param {boolean} mute
     */
    set muted(mute) {
      let toggle = mute;
      if (!is.boolean(toggle)) {
        toggle = this.storage.get("muted");
      }
      if (!is.boolean(toggle)) {
        toggle = this.config.muted;
      }
      this.config.muted = toggle;
      this.media.muted = toggle;
    }
    /**
     * Get current muted state
     */
    get muted() {
      return Boolean(this.media.muted);
    }
    /**
     * Check if the media has audio
     */
    get hasAudio() {
      if (!this.isHTML5) {
        return true;
      }
      if (this.isAudio) {
        return true;
      }
      return Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
    }
    /**
     * Set playback speed
     * @param {number} input - the speed of playback (0.5-2.0)
     */
    set speed(input) {
      let speed = null;
      if (is.number(input)) {
        speed = input;
      }
      if (!is.number(speed)) {
        speed = this.storage.get("speed");
      }
      if (!is.number(speed)) {
        speed = this.config.speed.selected;
      }
      const {
        minimumSpeed: min,
        maximumSpeed: max
      } = this;
      speed = clamp(speed, min, max);
      this.config.speed.selected = speed;
      setTimeout(() => {
        if (this.media) {
          this.media.playbackRate = speed;
        }
      }, 0);
    }
    /**
     * Get current playback speed
     */
    get speed() {
      return Number(this.media.playbackRate);
    }
    /**
     * Get the minimum allowed speed
     */
    get minimumSpeed() {
      if (this.isYouTube) {
        return Math.min(...this.options.speed);
      }
      if (this.isVimeo) {
        return 0.5;
      }
      return 0.0625;
    }
    /**
     * Get the maximum allowed speed
     */
    get maximumSpeed() {
      if (this.isYouTube) {
        return Math.max(...this.options.speed);
      }
      if (this.isVimeo) {
        return 2;
      }
      return 16;
    }
    /**
     * Set playback quality
     * Currently HTML5 & YouTube only
     * @param {number} input - Quality level
     */
    set quality(input) {
      const config = this.config.quality;
      const options = this.options.quality;
      if (!options.length) {
        return;
      }
      let quality = [!is.empty(input) && Number(input), this.storage.get("quality"), config.selected, config.default].find(is.number);
      let updateStorage = true;
      if (!options.includes(quality)) {
        const value = closest2(options, quality);
        this.debug.warn(`Unsupported quality option: ${quality}, using ${value} instead`);
        quality = value;
        updateStorage = false;
      }
      config.selected = quality;
      this.media.quality = quality;
      if (updateStorage) {
        this.storage.set({
          quality
        });
      }
    }
    /**
     * Get current quality level
     */
    get quality() {
      return this.media.quality;
    }
    /**
     * Toggle loop
     * TODO: Finish fancy new logic. Set the indicator on load as user may pass loop as config
     * @param {boolean} input - Whether to loop or not
     */
    set loop(input) {
      const toggle = is.boolean(input) ? input : this.config.loop.active;
      this.config.loop.active = toggle;
      this.media.loop = toggle;
    }
    /**
     * Get current loop state
     */
    get loop() {
      return Boolean(this.media.loop);
    }
    /**
     * Set new media source
     * @param {object} input - The new source object (see docs)
     */
    set source(input) {
      source.change.call(this, input);
    }
    /**
     * Get current source
     */
    get source() {
      return this.media.currentSrc;
    }
    /**
     * Get a download URL (either source or custom)
     */
    get download() {
      const {
        download
      } = this.config.urls;
      return is.url(download) ? download : this.source;
    }
    /**
     * Set the download URL
     */
    set download(input) {
      if (!is.url(input)) {
        return;
      }
      this.config.urls.download = input;
      controls.setDownloadUrl.call(this);
    }
    /**
     * Set the poster image for a video
     * @param {string} input - the URL for the new poster image
     */
    set poster(input) {
      if (!this.isVideo) {
        this.debug.warn("Poster can only be set for video");
        return;
      }
      ui.setPoster.call(this, input, false).catch(() => {
      });
    }
    /**
     * Get the current poster image
     */
    get poster() {
      if (!this.isVideo) {
        return null;
      }
      return this.media.getAttribute("poster") || this.media.getAttribute("data-poster");
    }
    /**
     * Get the current aspect ratio in use
     */
    get ratio() {
      if (!this.isVideo) {
        return null;
      }
      const ratio = reduceAspectRatio(getAspectRatio.call(this));
      return is.array(ratio) ? ratio.join(":") : ratio;
    }
    /**
     * Set video aspect ratio
     */
    set ratio(input) {
      if (!this.isVideo) {
        this.debug.warn("Aspect ratio can only be set for video");
        return;
      }
      if (!is.string(input) || !validateAspectRatio(input)) {
        this.debug.error(`Invalid aspect ratio specified (${input})`);
        return;
      }
      this.config.ratio = reduceAspectRatio(input);
      setAspectRatio.call(this);
    }
    /**
     * Set the autoplay state
     * @param {boolean} input - Whether to autoplay or not
     */
    set autoplay(input) {
      this.config.autoplay = is.boolean(input) ? input : this.config.autoplay;
    }
    /**
     * Get the current autoplay state
     */
    get autoplay() {
      return Boolean(this.config.autoplay);
    }
    /**
     * Toggle captions
     * @param {boolean} input - Whether to enable captions
     */
    toggleCaptions(input) {
      captions.toggle.call(this, input, false);
    }
    /**
     * Set the caption track by index
     * @param {number} input - Caption index
     */
    set currentTrack(input) {
      captions.set.call(this, input, false);
      captions.setup.call(this);
    }
    /**
     * Get the current caption track index (-1 if disabled)
     */
    get currentTrack() {
      const {
        toggled,
        currentTrack
      } = this.captions;
      return toggled ? currentTrack : -1;
    }
    /**
     * Set the wanted language for captions
     * Since tracks can be added later it won't update the actual caption track until there is a matching track
     * @param {string} input - Two character ISO language code (e.g. EN, FR, PT, etc)
     */
    set language(input) {
      captions.setLanguage.call(this, input, false);
    }
    /**
     * Get the current track's language
     */
    get language() {
      return (captions.getCurrentTrack.call(this) || {}).language;
    }
    /**
     * Toggle picture-in-picture playback on WebKit/MacOS
     * TODO: update player with state, support, enabled
     * TODO: detect outside changes
     */
    set pip(input) {
      if (!support2.pip) {
        return;
      }
      const toggle = is.boolean(input) ? input : !this.pip;
      if (is.function(this.media.webkitSetPresentationMode)) {
        this.media.webkitSetPresentationMode(toggle ? pip.active : pip.inactive);
      }
      if (is.function(this.media.requestPictureInPicture)) {
        if (!this.pip && toggle) {
          this.media.requestPictureInPicture();
        } else if (this.pip && !toggle) {
          document.exitPictureInPicture();
        }
      }
    }
    /**
     * Get the current picture-in-picture state
     */
    get pip() {
      if (!support2.pip) {
        return null;
      }
      if (!is.empty(this.media.webkitPresentationMode)) {
        return this.media.webkitPresentationMode === pip.active;
      }
      return this.media === document.pictureInPictureElement;
    }
    /**
     * Sets the preview thumbnails for the current source
     */
    setPreviewThumbnails(thumbnailSource) {
      if (this.previewThumbnails && this.previewThumbnails.loaded) {
        this.previewThumbnails.destroy();
        this.previewThumbnails = null;
      }
      Object.assign(this.config.previewThumbnails, thumbnailSource);
      if (this.config.previewThumbnails.enabled) {
        this.previewThumbnails = new PreviewThumbnails(this);
      }
    }
    /**
     * Check for support
     * @param {string} type - Player type (audio/video)
     * @param {string} provider - Provider (html5/youtube/vimeo)
     */
    static supported(type, provider) {
      return support2.check(type, provider);
    }
    /**
     * Load an SVG sprite into the page
     * @param {string} url - URL for the SVG sprite
     * @param {string} [id] - Unique ID
     */
    static loadSprite(url, id) {
      return loadSprite(url, id);
    }
    /**
     * Setup multiple instances
     * @param {*} selector
     * @param {object} options
     */
    static setup(selector, options = {}) {
      let targets = null;
      if (is.string(selector)) {
        targets = Array.from(document.querySelectorAll(selector));
      } else if (is.nodeList(selector)) {
        targets = Array.from(selector);
      } else if (is.array(selector)) {
        targets = selector.filter(is.element);
      }
      if (is.empty(targets)) {
        return null;
      }
      return targets.map((t9) => new _Plyr(t9, options));
    }
  };
  Plyr.defaults = cloneDeep(defaults2);

  // assets/js/functions/plyr.js
  function VideoPlyr() {
    const plyrs = document.querySelectorAll(".video-plyr");
    plyrs.forEach((plyr) => {
      const player = new Plyr(plyr);
    });
  }

  // assets/js/functions/shareBtn.js
  function shareBtn() {
    const shareBtn2 = document.getElementById("shareBtn");
    if (!shareBtn2) return;
    shareBtn2.addEventListener("click", () => {
      navigator.share({
        title: document.title,
        url: window.location.href
      });
    });
  }

  // assets/js/functions/accordion.js
  function Accordion() {
    const accordionButtons = document.querySelectorAll(".accordion-button");
    if (!accordionButtons.length) return;
    accordionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-accordion-target");
        const content = document.querySelector(
          `[data-accordion-content="${targetId}"]`
        );
        const icon = button.querySelector(".accordion-icon");
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        if (!content) return;
        button.setAttribute("aria-expanded", !isExpanded);
        const iconRotate = button.getAttribute("data-accordion-icon-rotate") || "45";
        if (isExpanded) {
          content.style.gridTemplateRows = "0fr";
          if (icon) {
            icon.style.transform = "rotate(0deg)";
          }
          content.classList.remove("mt-3");
        } else {
          content.style.gridTemplateRows = "1fr";
          if (icon) {
            icon.style.transform = `rotate(${iconRotate}deg)`;
          }
          content.classList.add("mt-3");
        }
      });
    });
  }

  // assets/js/functions/search.js
  function SearchPage() {
    const searchForm = document.querySelector("form#search-form");
    if (!searchForm) return;
    const filterRadios = searchForm.querySelectorAll('input[name="search-type"]');
    filterRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        searchForm.submit();
      });
    });
  }

  // assets/js/functions/marquee.js
  var DEFAULT_SPEED = 30;
  var MAX_FRAME = 100;
  function measure(track, items) {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const width = items.reduce((total, item) => total + item.getBoundingClientRect().width, 0);
    if (!width) return 0;
    return width + items.length * gap;
  }
  function fill(track, items, cycle) {
    const copies = Math.ceil((track.parentElement.clientWidth + cycle) / cycle);
    while (track.children.length < items.length * copies) {
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
    }
  }
  function animate(track) {
    const items = [...track.children];
    const speed = parseFloat(track.dataset.marqueeSpeed) || DEFAULT_SPEED;
    const reverse = track.dataset.marqueeDirection === "reverse";
    let cycle = 0;
    let offset = 0;
    let previous = 0;
    let running = false;
    const step = (now2) => {
      if (!cycle) {
        running = false;
        return;
      }
      offset = (offset + Math.min(now2 - previous, MAX_FRAME) / 1e3 * speed) % cycle;
      previous = now2;
      track.style.transform = `translate3d(${reverse ? offset - cycle : -offset}px, 0, 0)`;
      requestAnimationFrame(step);
    };
    const layout = () => {
      cycle = measure(track, items);
      if (!cycle) return;
      fill(track, items, cycle);
      if (running) return;
      running = true;
      previous = performance.now();
      requestAnimationFrame(step);
    };
    new ResizeObserver(layout).observe(track.parentElement);
    layout();
    document.fonts?.ready.then(layout);
  }
  function Marquee() {
    document.querySelectorAll("[data-marquee]").forEach(animate);
  }

  // assets/js/functions/quoteForm.js
  var MAX_FILES = 8;
  var MAX_SIZE = 10 * 1024 * 1024;
  var ALLOWED = ["image/jpeg", "image/png", "image/webp"];
  function QuoteForm() {
    const wizard = document.querySelector("#quote_wizard");
    const form = document.querySelector("#quote_form");
    if (!wizard || !form) return;
    const steps = [...form.querySelectorAll("[data-quote-step]")];
    const summary = form.querySelector("[data-quote-summary]");
    const progress = form.querySelector("[data-quote-progress]");
    const actions = form.querySelector("[data-quote-actions]");
    const items = [...form.querySelectorAll("[data-step-item]")];
    const lines = [...form.querySelectorAll("[data-step-line]")];
    const label = form.querySelector("[data-step-label]");
    const prevBtn = form.querySelector("[data-quote-prev]");
    const nextBtn = form.querySelector("[data-quote-next]");
    const submitBtn = form.querySelector("[data-quote-submit]");
    const result = form.querySelector("#quote_form_result");
    const success = wizard.querySelector("#quote_success");
    const input = form.querySelector("#quote-photos");
    const dropzone = form.querySelector("#quote-dropzone");
    const preview = form.querySelector("#quote-photos-preview");
    const summaryPhotos = form.querySelector("#quote-summary-photos");
    const dateInput = form.querySelector("#quote-date");
    if (dateInput) {
      dateInput.addEventListener("click", () => {
        if (typeof dateInput.showPicker === "function") dateInput.showPicker();
      });
    }
    const total = steps.length;
    let current = 0;
    let photos = [];
    let photoUrls = [];
    const isSummary = () => current === total;
    const selectedLabel = (name) => {
      const checked = form.querySelector(`[name="${name}"]:checked`);
      if (checked) return checked.dataset.label || checked.value;
      const field = form.querySelector(`[name="${name}"]`);
      if (!field) return "";
      if (field.tagName === "SELECT") {
        const option = field.selectedOptions[0];
        return option && option.value ? option.dataset.label || option.textContent.trim() : "";
      }
      return field.value.trim();
    };
    const fillSummary = () => {
      form.querySelector('[data-summary="service"]').textContent = selectedLabel("service");
      form.querySelector('[data-summary="zip"]').textContent = selectedLabel("zip");
      form.querySelector('[data-summary="property"]').textContent = selectedLabel("property_type");
      form.querySelector('[data-summary="description"]').textContent = selectedLabel("description");
      form.querySelector('[data-summary="timeframe"]').textContent = selectedLabel("timeframe");
      form.querySelector('[data-summary="contact"]').textContent = selectedLabel("contact_method");
      summaryPhotos.textContent = "";
      summaryPhotos.classList.toggle("hidden", photos.length === 0);
      summaryPhotos.classList.toggle("grid", photos.length > 0);
      summaryPhotos.classList.toggle("lg:flex", photos.length > 0);
      photos.forEach((photo) => {
        const image = document.createElement("img");
        image.src = URL.createObjectURL(photo);
        image.alt = photo.name;
        image.className = "h-32 w-full flex-1 rounded-lg object-cover lg:h-44 lg:w-52 lg:flex-none lg:rounded-2xl";
        image.addEventListener("load", () => URL.revokeObjectURL(image.src), { once: true });
        summaryPhotos.append(image);
      });
    };
    const render = () => {
      const summaryView = isSummary();
      steps.forEach((step, index) => step.hidden = summaryView || index !== current);
      if (summary) summary.hidden = !summaryView;
      if (progress) progress.hidden = summaryView;
      items.forEach((item, index) => {
        if (summaryView) item.dataset.state = "done";
        else item.dataset.state = index < current ? "done" : index === current ? "active" : "todo";
      });
      lines.forEach((line, index) => {
        line.dataset.state = summaryView || index < current ? "done" : "todo";
      });
      if (label && !summaryView) {
        label.textContent = label.dataset.stepTemplate.replace("{current}", current + 1).replace("{name}", steps[current].dataset.stepName);
      }
      if (summaryView) fillSummary();
      prevBtn.hidden = current === 0;
      nextBtn.hidden = summaryView;
      submitBtn.hidden = !summaryView;
    };
    const isStepValid = () => {
      if (isSummary()) return true;
      const fields = [...steps[current].querySelectorAll("input, select, textarea")];
      const invalid = fields.find((field) => !field.checkValidity());
      if (!invalid) return true;
      invalid.reportValidity();
      return false;
    };
    const go = (step) => {
      current = Math.min(Math.max(step, 0), total);
      render();
      wizard.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    nextBtn.addEventListener("click", () => isStepValid() && go(current + 1));
    prevBtn.addEventListener("click", () => go(current - 1));
    const revokeUrls = () => {
      photoUrls.forEach((url) => URL.revokeObjectURL(url));
      photoUrls = [];
    };
    const syncInput = () => {
      const data = new DataTransfer();
      photos.forEach((photo) => data.items.add(photo));
      input.files = data.files;
    };
    const renderPreview = () => {
      revokeUrls();
      preview.textContent = "";
      preview.classList.toggle("hidden", photos.length === 0);
      preview.classList.toggle("grid", photos.length > 0);
      photos.forEach((photo, index) => {
        const item = document.createElement("div");
        item.className = "group relative overflow-hidden rounded-lg border border-cynBorder lg:rounded-2xl";
        const image = document.createElement("img");
        const url = URL.createObjectURL(photo);
        photoUrls.push(url);
        image.src = url;
        image.alt = photo.name;
        image.className = "h-32 w-full object-cover lg:h-44";
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "absolute end-2 top-2 flex size-8 items-center justify-center rounded-lg bg-cynWhite text-cynTextBlack transition-all duration-300 hover:bg-cynYellow";
        remove.setAttribute("aria-label", input.dataset.removeLabel || "Remove photo");
        remove.textContent = "\xD7";
        remove.addEventListener("click", () => {
          photos.splice(index, 1);
          syncInput();
          renderPreview();
        });
        item.append(image, remove);
        preview.append(item);
      });
    };
    const addPhotos = (list) => {
      [...list].forEach((photo) => {
        if (photos.length >= MAX_FILES) return;
        if (!ALLOWED.includes(photo.type) || photo.size > MAX_SIZE) return;
        photos.push(photo);
      });
      syncInput();
      renderPreview();
    };
    if (input && dropzone && preview) {
      input.addEventListener("change", () => addPhotos([...input.files]));
      ["dragenter", "dragover"].forEach(
        (name) => dropzone.addEventListener(name, (event2) => {
          event2.preventDefault();
          dropzone.dataset.state = "over";
        })
      );
      ["dragleave", "drop"].forEach(
        (name) => dropzone.addEventListener(name, (event2) => {
          event2.preventDefault();
          delete dropzone.dataset.state;
        })
      );
      dropzone.addEventListener("drop", (event2) => addPhotos(event2.dataTransfer.files));
    }
    form.addEventListener("htmx:beforeRequest", () => {
      submitBtn.classList.add("is-loading");
      result.hidden = true;
      result.textContent = "";
    });
    form.addEventListener("htmx:afterRequest", (event2) => {
      submitBtn.classList.remove("is-loading");
      const ok = event2.detail.successful;
      let message = "";
      try {
        const data = JSON.parse(event2.detail.xhr.responseText);
        message = data.message || data.error || "";
      } catch (error) {
        message = "";
      }
      if (!ok) {
        result.textContent = message || "Something went wrong. Please try again.";
        result.classList.add("bg-cynRed", "text-cynTextWhite");
        result.classList.remove("bg-cynYellow", "text-cynTextBlack");
        result.hidden = false;
        return;
      }
      form.hidden = true;
      if (success) success.hidden = false;
      wizard.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    render();
  }

  // node_modules/@fancyapps/ui/dist/utils/isString.js
  var t = (t9) => "string" == typeof t9;

  // node_modules/@fancyapps/ui/dist/utils/isNode.js
  var n = (n11) => n11 && null !== n11 && n11 instanceof Element && "nodeType" in n11;

  // node_modules/@fancyapps/ui/dist/utils/getScrollableParent.js
  var e = function(e10) {
    if (!(e10 && e10 instanceof Element && e10.offsetParent)) return false;
    let n11 = false, i8 = false;
    if (e10.scrollWidth > e10.clientWidth) {
      const i9 = window.getComputedStyle(e10).overflowX, t9 = -1 !== i9.indexOf("hidden"), o9 = -1 !== i9.indexOf("clip"), d3 = -1 !== i9.indexOf("visible");
      n11 = !t9 && !o9 && !d3;
    }
    if (e10.scrollHeight > e10.clientHeight) {
      const n12 = window.getComputedStyle(e10).overflowY, t9 = -1 !== n12.indexOf("hidden"), o9 = -1 !== n12.indexOf("clip"), d3 = -1 !== n12.indexOf("visible");
      i8 = !t9 && !o9 && !d3;
    }
    return n11 || i8;
  };
  var n2 = function(i8, t9 = void 0) {
    return !i8 || i8 === document.body || t9 && i8 === t9 ? null : e(i8) ? i8 : n2(i8.parentElement, t9);
  };

  // node_modules/@fancyapps/ui/dist/utils/strToHtml.js
  var e2 = function(e10) {
    var t9 = new DOMParser().parseFromString(e10, "text/html").body;
    if (t9.childElementCount > 1) {
      for (var n11 = document.createElement("div"); t9.firstChild; ) n11.appendChild(t9.firstChild);
      return n11;
    }
    let r7 = t9.firstChild;
    return !r7 || r7 instanceof HTMLElement ? r7 : ((n11 = document.createElement("div")).appendChild(r7), n11);
  };

  // node_modules/@fancyapps/ui/dist/utils/clamp.js
  var t2 = function(t9 = 0, n11 = 0, a7 = 0) {
    return Math.max(Math.min(n11, a7), t9);
  };

  // node_modules/@fancyapps/ui/dist/utils/isPlainObject.js
  var t3 = (t9) => "object" == typeof t9 && null !== t9 && t9.constructor === Object && "[object Object]" === Object.prototype.toString.call(t9);

  // node_modules/@fancyapps/ui/dist/utils/isEqual.js
  function e3(e10) {
    return t3(e10) || Array.isArray(e10);
  }
  function n3(t9, r7) {
    const o9 = Object.keys(t9), c6 = Object.keys(r7);
    return o9.length === c6.length && o9.every((o10) => {
      const c7 = t9[o10], i8 = r7[o10];
      return "function" == typeof c7 ? `${c7}` == `${i8}` : e3(c7) && e3(i8) ? n3(c7, i8) : c7 === i8;
    });
  }

  // node_modules/@fancyapps/ui/dist/libs/tween.js
  var e4 = function(n11) {
    for (const t9 of s) t9.getState() === i.Running && t9.tick(a ? n11 - a : 0);
    a = n11, u = window.requestAnimationFrame(e4);
  };
  var i;
  var o;
  var r;
  !(function(n11) {
    n11[n11.Initializing = 0] = "Initializing", n11[n11.Running = 1] = "Running", n11[n11.Paused = 2] = "Paused", n11[n11.Completed = 3] = "Completed", n11[n11.Destroyed = 4] = "Destroyed";
  })(i || (i = {})), (function(n11) {
    n11[n11.Spring = 0] = "Spring", n11[n11.Ease = 1] = "Ease";
  })(o || (o = {})), (function(n11) {
    n11[n11.Loop = 0] = "Loop", n11[n11.Reverse = 1] = "Reverse";
  })(r || (r = {}));
  var s = /* @__PURE__ */ new Set();
  var u = null;
  var a = 0;
  function c() {
    let a7 = i.Initializing, f3 = o.Ease, l8 = 0, g2 = 0, p2 = c.Easings.Linear, m4 = 500, d3 = 0, b3 = 0, S2 = 0, h4 = 0, y3 = 1 / 0, E3 = 0.01, R2 = 0.01, M4 = false, j2 = {}, w3 = null, v4 = {}, O2 = {}, C = {}, L = 0, I2 = 0, D2 = r.Loop, z2 = c.Easings.Linear;
    const N2 = /* @__PURE__ */ new Map();
    function V(n11, ...t9) {
      for (const e10 of N2.get(n11) || []) e10(...t9);
    }
    function q2(n11) {
      return g2 = 0, n11 ? w3 = setTimeout(() => {
        x3();
      }, n11) : x3(), F2;
    }
    function x3() {
      a7 = i.Running, V("start", v4, O2);
    }
    function A() {
      if (a7 = i.Completed, C = {}, V("end", v4), a7 === i.Completed) if (l8 < L) {
        if (l8++, D2 === r.Reverse) {
          const n11 = Object.assign({}, j2);
          j2 = Object.assign({}, O2), O2 = n11;
        }
        q2(I2);
      } else l8 = 0;
      return F2;
    }
    const F2 = { getState: function() {
      return a7;
    }, easing: function(n11) {
      return p2 = n11, f3 = o.Ease, C = {}, F2;
    }, duration: function(n11) {
      return m4 = n11, F2;
    }, spring: function(n11 = {}) {
      f3 = o.Spring;
      const t9 = { velocity: 0, mass: 1, tension: 170, friction: 26, restDelta: 0.1, restSpeed: 0.1, maxSpeed: 1 / 0, clamp: true }, { velocity: e10, mass: i8, tension: r7, friction: s11, restDelta: u6, restSpeed: a8, maxSpeed: c6, clamp: l9 } = Object.assign(Object.assign({}, t9), n11);
      return d3 = e10, b3 = i8, S2 = r7, h4 = s11, R2 = u6, E3 = a8, y3 = c6, M4 = l9, C = {}, F2;
    }, isRunning: function() {
      return a7 === i.Running;
    }, isSpring: function() {
      return f3 === o.Spring;
    }, from: function(n11) {
      return v4 = Object.assign({}, n11), F2;
    }, to: function(n11) {
      return O2 = n11, F2;
    }, repeat: function(n11, t9 = 0, e10 = r.Loop, i8) {
      return L = n11, I2 = t9, D2 = e10, z2 = i8 || p2, F2;
    }, on: function(n11, t9) {
      var e10, i8;
      return e10 = n11, i8 = t9, N2.set(e10, [...N2.get(e10) || [], i8]), F2;
    }, off: function(n11, t9) {
      var e10, i8;
      return e10 = n11, i8 = t9, N2.has(e10) && N2.set(e10, N2.get(e10).filter((n12) => n12 !== i8)), F2;
    }, start: function(n11) {
      return n3(v4, O2) || (a7 = i.Initializing, j2 = Object.assign({}, v4), s.add(this), u || (u = window.requestAnimationFrame(e4)), q2(n11)), F2;
    }, pause: function() {
      return w3 && (clearTimeout(w3), w3 = null), a7 === i.Running && (a7 = i.Paused, V("pause", v4)), F2;
    }, end: A, tick: function(e10) {
      e10 > 50 && (e10 = 50), g2 += e10;
      let s11 = 0, u6 = false;
      if (a7 !== i.Running) return F2;
      if (f3 === o.Ease) {
        s11 = t2(0, g2 / m4, 1), u6 = 1 === s11;
        const t9 = D2 === r.Reverse ? z2 : p2;
        for (const n11 in v4) v4[n11] = j2[n11] + (O2[n11] - j2[n11]) * t9(s11);
      }
      if (f3 === o.Spring) {
        const t9 = 1e-3 * e10;
        let i8 = 0;
        for (const e11 in v4) {
          const o9 = O2[e11];
          let r7 = v4[e11];
          if ("number" != typeof o9 || isNaN(o9) || "number" != typeof r7 || isNaN(r7)) continue;
          if (Math.abs(o9 - r7) <= R2) {
            v4[e11] = o9, C[e11] = 0;
            continue;
          }
          C[e11] || ("object" == typeof d3 && "number" == typeof d3[e11] ? C[e11] = d3[e11] : C[e11] = "number" == typeof d3 ? d3 : 0);
          let s12 = C[e11];
          s12 = t2(-1 * Math.abs(y3), s12, Math.abs(y3));
          const u7 = s12 * b3 * h4;
          s12 += ((r7 > o9 ? -1 : 1) * (Math.abs(o9 - r7) * S2) - u7) / b3 * t9, r7 += s12 * t9;
          const a8 = v4[e11] > o9 ? r7 < o9 : r7 > o9;
          let c7 = Math.abs(s12) < E3 && Math.abs(o9 - r7) <= R2;
          M4 && a8 && (c7 = true), c7 ? (r7 = o9, s12 = 0) : i8++, v4[e11] = r7, C[e11] = s12;
        }
        u6 = !i8;
      }
      const c6 = Object.assign({}, O2);
      return V("step", v4, j2, O2, s11), u6 && a7 === i.Running && n3(O2, c6) && (a7 = i.Completed, A()), F2;
    }, getStartValues: function() {
      return j2;
    }, getCurrentValues: function() {
      return v4;
    }, getCurrentVelocities: function() {
      return C;
    }, getEndValues: function() {
      return O2;
    }, destroy: function() {
      a7 = i.Destroyed, w3 && (clearTimeout(w3), w3 = null), j2 = v4 = O2 = {}, s.delete(this);
    } };
    return F2;
  }
  c.destroy = () => {
    for (const n11 of s) n11.destroy();
    u && (cancelAnimationFrame(u), u = null);
  }, c.Easings = { Linear: function(n11) {
    return n11;
  }, EaseIn: function(n11) {
    return 0 === n11 ? 0 : Math.pow(2, 10 * n11 - 10);
  }, EaseOut: function(n11) {
    return 1 === n11 ? 1 : 1 - Math.pow(2, -10 * n11);
  }, EaseInOut: function(n11) {
    return 0 === n11 ? 0 : 1 === n11 ? 1 : n11 < 0.5 ? Math.pow(2, 20 * n11 - 10) / 2 : (2 - Math.pow(2, -20 * n11 + 10)) / 2;
  } };

  // node_modules/@fancyapps/ui/dist/libs/gestures.js
  function e5(e10) {
    return "undefined" != typeof TouchEvent && e10 instanceof TouchEvent;
  }
  function t4(t9, n11) {
    const o9 = [], s11 = e5(t9) ? t9[n11] : t9 instanceof MouseEvent && ("changedTouches" === n11 || "mouseup" !== t9.type) ? [t9] : [];
    for (const e10 of s11) o9.push({ x: e10.clientX, y: e10.clientY, ts: Date.now() });
    return o9;
  }
  function n4(e10) {
    return t4(e10, "touches");
  }
  function o2(e10) {
    return t4(e10, "targetTouches");
  }
  function s2(e10) {
    return t4(e10, "changedTouches");
  }
  function i2(e10) {
    const t9 = e10[0], n11 = e10[1] || t9;
    return { x: (t9.x + n11.x) / 2, y: (t9.y + n11.y) / 2, ts: n11.ts };
  }
  function r2(e10) {
    const t9 = e10[0], n11 = e10[1] || e10[0];
    return t9 && n11 ? -1 * Math.sqrt((n11.x - t9.x) * (n11.x - t9.x) + (n11.y - t9.y) * (n11.y - t9.y)) : 0;
  }
  var c2 = (e10) => {
    e10.cancelable && e10.preventDefault();
  };
  var a2 = { passive: false };
  var u2 = { panThreshold: 5, swipeThreshold: 3, ignore: ["textarea", "input", "select", "[contenteditable]", "[data-selectable]", "[data-draggable]"] };
  var d = false;
  var l = true;
  var f = (e10, t9) => {
    let f3, h4, v4, g2, p2, m4 = Object.assign(Object.assign({}, u2), t9), E3 = [], w3 = [], y3 = [], T = false, b3 = false, M4 = false, L = false, x3 = 0, P = 0, D2 = 0, X = 0, Y = 0, j2 = 0, k2 = 0, R2 = 0, z2 = 0, A = [];
    const O2 = /* @__PURE__ */ new Map();
    function S2(e11) {
      const t10 = r2(w3), n11 = r2(y3), o9 = t10 && n11 ? t10 / n11 : 0, s11 = Math.abs(k2) > Math.abs(R2) ? k2 : R2, i8 = { srcEvent: f3, isPanRecognized: T, isSwipeRecognized: b3, firstTouch: E3, previousTouch: y3, currentTouch: w3, deltaX: D2, deltaY: X, offsetX: Y, offsetY: j2, velocityX: k2, velocityY: R2, velocity: s11, angle: z2, axis: v4, scale: o9, center: h4 };
      for (const t11 of O2.get(e11) || []) t11(i8);
    }
    function q2(e11) {
      const t10 = e11.target, n11 = e11.composedPath()[0], o9 = m4.ignore.join(","), s11 = (e12) => e12 && e12 instanceof HTMLElement && (e12.matches(o9) || e12.closest(o9));
      if (s11(t10) || s11(n11)) return false;
    }
    function C(e11) {
      const t10 = Date.now();
      if (A = A.filter((e12) => !e12.ts || e12.ts > t10 - 100), e11 && A.push(e11), k2 = 0, R2 = 0, A.length > 3) {
        const e12 = A[0], t11 = A[A.length - 1];
        if (e12 && t11) {
          const n11 = t11.x - e12.x, o9 = t11.y - e12.y, s11 = e12.ts && t11.ts ? t11.ts - e12.ts : 0;
          s11 > 0 && (k2 = Math.abs(n11) > 3 ? n11 / (s11 / 30) : 0, R2 = Math.abs(o9) > 3 ? o9 / (s11 / 30) : 0);
        }
      }
    }
    function H2(e11) {
      if (false === q2(e11)) return;
      if ("undefined" != typeof MouseEvent && e11 instanceof MouseEvent) {
        if (d) return;
      } else d = true;
      if ("undefined" != typeof MouseEvent && e11 instanceof MouseEvent) {
        if (!e11.buttons || 0 !== e11.button) return;
        c2(e11);
      }
      e11 instanceof MouseEvent && (window.addEventListener("mousemove", I2), window.addEventListener("mouseup", B2)), window.addEventListener("blur", F2), f3 = e11, w3 = o2(e11), E3 = [...w3], y3 = [], P = w3.length, h4 = i2(w3), 1 === P && (T = false, b3 = false, M4 = false), P && C(i2(w3));
      const t10 = Date.now(), n11 = t10 - (x3 || t10);
      L = n11 > 0 && n11 <= 250 && 1 === P, x3 = t10, clearTimeout(g2), S2("start");
    }
    function I2(e11) {
      var t10;
      if (!E3.length) return;
      if (e11.defaultPrevented) return;
      if (false === q2(e11)) return;
      f3 = e11, y3 = [...w3], w3 = n4(e11);
      const o9 = i2(y3), s11 = i2(n4(e11));
      if (C(s11), P = w3.length, h4 = s11, y3.length === w3.length ? (D2 = s11.x - o9.x, X = s11.y - o9.y) : (D2 = 0, X = 0), E3.length) {
        const e12 = i2(E3);
        Y = s11.x - e12.x, j2 = s11.y - e12.y;
      }
      if (w3.length > 1) {
        const e12 = r2(w3), t11 = r2(y3);
        Math.abs(e12 - t11) >= 0.1 && (M4 = true, S2("pinch"));
      }
      T || (T = Math.abs(Y) >= m4.panThreshold || Math.abs(j2) >= m4.panThreshold, T && (l = false, clearTimeout(p2), p2 = void 0, z2 = Math.abs(180 * Math.atan2(j2, Y) / Math.PI), v4 = z2 > 45 && z2 < 135 ? "y" : "x", E3 = [...w3], y3 = [...w3], Y = 0, j2 = 0, D2 = 0, X = 0, null === (t10 = window.getSelection()) || void 0 === t10 || t10.removeAllRanges(), S2("panstart"))), T && (D2 || X) && S2("pan"), S2("move");
    }
    function B2(e11) {
      if (f3 = e11, !E3.length) return;
      const t10 = o2(e11), n11 = s2(e11);
      if (P = t10.length, h4 = i2(n11), n11.length && C(i2(n11)), y3 = [...w3], w3 = [...t10], E3 = [...t10], P > 0) S2("end"), T = false, b3 = false, A = [];
      else {
        const e12 = m4.swipeThreshold;
        (Math.abs(k2) > e12 || Math.abs(R2) > e12) && (b3 = true), T && S2("panend"), b3 && S2("swipe"), T || b3 || M4 || (S2("tap"), L ? S2("doubleTap") : g2 = setTimeout(function() {
          S2("singleTap");
        }, 250)), S2("end"), G();
      }
    }
    function F2() {
      clearTimeout(g2), G(), T && S2("panend"), S2("end");
    }
    function G() {
      d = false, T = false, b3 = false, L = false, P = 0, A = [], w3 = [], y3 = [], E3 = [], D2 = 0, X = 0, Y = 0, j2 = 0, k2 = 0, R2 = 0, z2 = 0, v4 = void 0, window.removeEventListener("mousemove", I2), window.removeEventListener("mouseup", B2), window.removeEventListener("blur", F2), l || p2 || (p2 = setTimeout(() => {
        l = true, p2 = void 0;
      }, 100));
    }
    function J(e11) {
      const t10 = e11.target;
      d = false, t10 && !e11.defaultPrevented && (l || (c2(e11), e11.stopPropagation()));
    }
    const K = { init: function() {
      return e10 && (e10.addEventListener("click", J, a2), e10.addEventListener("mousedown", H2, a2), e10.addEventListener("touchstart", H2, a2), e10.addEventListener("touchmove", I2, a2), e10.addEventListener("touchend", B2), e10.addEventListener("touchcancel", B2)), K;
    }, on: function(e11, t10) {
      return (function(e12, t11) {
        O2.set(e12, [...O2.get(e12) || [], t11]);
      })(e11, t10), K;
    }, off: function(e11, t10) {
      return O2.has(e11) && O2.set(e11, O2.get(e11).filter((e12) => e12 !== t10)), K;
    }, isPointerDown: () => P > 0, destroy: function() {
      clearTimeout(g2), clearTimeout(p2), p2 = void 0, e10 && (e10.removeEventListener("click", J, a2), e10.removeEventListener("mousedown", H2, a2), e10.removeEventListener("touchstart", H2, a2), e10.removeEventListener("touchmove", I2, a2), e10.removeEventListener("touchend", B2), e10.removeEventListener("touchcancel", B2)), e10 = null, G();
    } };
    return K;
  };
  f.isClickAllowed = () => l;

  // node_modules/@fancyapps/ui/dist/panzoom/l10n/en_EN.js
  var e6 = { IMAGE_ERROR: "This image couldn't be loaded. <br /> Please try again later.", MOVE_UP: "Move up", MOVE_DOWN: "Move down", MOVE_LEFT: "Move left", MOVE_RIGHT: "Move right", ZOOM_IN: "Zoom in", ZOOM_OUT: "Zoom out", TOGGLE_FULL: "Toggle zoom level", TOGGLE_1TO1: "Toggle zoom level", ITERATE_ZOOM: "Toggle zoom level", ROTATE_CCW: "Rotate counterclockwise", ROTATE_CW: "Rotate clockwise", FLIP_X: "Flip horizontally", FLIP_Y: "Flip vertically", RESET: "Reset", TOGGLE_FS: "Toggle fullscreen" };

  // node_modules/@fancyapps/ui/dist/utils/addClass.js
  var s3 = (s11, t9 = "") => {
    s11 && s11.classList && t9.split(" ").forEach((t10) => {
      t10 && s11.classList.add(t10);
    });
  };

  // node_modules/@fancyapps/ui/dist/utils/removeClass.js
  var s4 = (s11, t9 = "") => {
    s11 && s11.classList && t9.split(" ").forEach((t10) => {
      t10 && s11.classList.remove(t10);
    });
  };

  // node_modules/@fancyapps/ui/dist/utils/toggleClass.js
  var s5 = (s11, t9 = "", c6) => {
    s11 && s11.classList && t9.split(" ").forEach((t10) => {
      t10 && s11.classList.toggle(t10, c6 || false);
    });
  };

  // node_modules/@fancyapps/ui/dist/panzoom/panzoom.js
  var h = (e10) => {
    e10.cancelable && e10.preventDefault();
  };
  var m = (e10, t9 = 1e4) => (e10 = parseFloat(e10 + "") || 0, Math.round((e10 + Number.EPSILON) * t9) / t9);
  var p = (e10) => e10 instanceof HTMLImageElement;
  var v;
  var b;
  !(function(e10) {
    e10.Reset = "reset", e10.Zoom = "zoom", e10.ZoomIn = "zoomIn", e10.ZoomOut = "zoomOut", e10.ZoomTo = "zoomTo", e10.ToggleCover = "toggleCover", e10.ToggleFull = "toggleFull", e10.ToggleMax = "toggleMax", e10.IterateZoom = "iterateZoom", e10.Pan = "pan", e10.Swipe = "swipe", e10.Move = "move", e10.MoveLeft = "moveLeft", e10.MoveRight = "moveRight", e10.MoveUp = "moveUp", e10.MoveDown = "moveDown", e10.RotateCCW = "rotateCCW", e10.RotateCW = "rotateCW", e10.FlipX = "flipX", e10.FlipY = "flipY", e10.ToggleFS = "toggleFS";
  })(v || (v = {})), (function(e10) {
    e10.Cover = "cover", e10.Full = "full", e10.Max = "max";
  })(b || (b = {}));
  var y = { x: 0, y: 0, scale: 1, angle: 0, flipX: 1, flipY: 1 };
  var x = { bounds: true, classes: { container: "f-panzoom", wrapper: "f-panzoom__wrapper", content: "f-panzoom__content", viewport: "f-panzoom__viewport" }, clickAction: v.ToggleFull, dblClickAction: false, gestures: {}, height: "auto", l10n: e6, maxScale: 4, minScale: 1, mouseMoveFactor: 1, panMode: "drag", protected: false, singleClickAction: false, spinnerTpl: '<div class="f-spinner"></div>', wheelAction: v.Zoom, width: "auto" };
  var w;
  var M = 0;
  var j = 0;
  var E = 0;
  var S = (c6, b3 = {}, S2 = {}) => {
    let k2, O2, T, A, C, F2, Z, L, P = 0, X = Object.assign(Object.assign({}, x), b3), Y = {}, R2 = Object.assign({}, y), z2 = Object.assign({}, y);
    const D2 = [];
    function I2(e10) {
      let t9 = X[e10];
      return t9 && "function" == typeof t9 ? t9(Ee) : t9;
    }
    function W() {
      return c6 && c6.parentElement && k2 && 3 === P;
    }
    const $ = /* @__PURE__ */ new Map();
    function q2(e10, ...t9) {
      const n11 = [...$.get(e10) || []];
      X.on && n11.push(X.on[e10]);
      for (const e11 of n11) e11 && "function" == typeof e11 && e11(Ee, ...t9);
      "*" !== e10 && q2("*", e10, ...t9);
    }
    function H2(e10) {
      if (!W()) return;
      const t9 = e10.target;
      if (n2(t9)) return;
      const o9 = Date.now(), s11 = [-e10.deltaX || 0, -e10.deltaY || 0, -e10.detail || 0].reduce(function(e11, t10) {
        return Math.abs(t10) > Math.abs(e11) ? t10 : e11;
      }), a7 = t2(-1, s11, 1);
      q2("wheel", e10, a7);
      const r7 = I2("wheelAction");
      if (!r7) return;
      if (e10.defaultPrevented) return;
      const l8 = z2.scale;
      let c7 = l8 * (a7 > 0 ? 1.5 : 0.5);
      if (r7 === v.Zoom) {
        const t10 = Math.abs(e10.deltaY) < 100 && Math.abs(e10.deltaX) < 100;
        if (o9 - j < (t10 ? 200 : 45)) return void h(e10);
        j = o9;
        const n11 = ne(), s12 = se();
        if (m(c7) < m(n11) && m(l8) <= m(n11) ? (E += Math.abs(a7), c7 = n11) : m(c7) > m(s12) && m(l8) >= m(s12) ? (E += Math.abs(a7), c7 = s12) : (E = 0, c7 = t2(n11, c7, s12)), E > 7) return;
      }
      switch (h(e10), r7) {
        case v.Pan:
          ce(r7, { srcEvent: e10, deltaX: 2 * -e10.deltaX, deltaY: 2 * -e10.deltaY });
          break;
        case v.Zoom:
          ce(v.ZoomTo, { srcEvent: e10, scale: c7, center: { x: e10.clientX, y: e10.clientY } });
          break;
        default:
          ce(r7, { srcEvent: e10 });
      }
    }
    function _2(e10) {
      var n11, o9;
      const i8 = e10.composedPath()[0];
      if (!f.isClickAllowed()) return;
      if (!n(i8) || e10.defaultPrevented) return;
      if (!(null == c6 ? void 0 : c6.contains(i8))) return;
      if (i8.hasAttribute("disabled") || i8.hasAttribute("aria-disabled") || i8.hasAttribute("data-carousel-go-prev") || i8.hasAttribute("data-carousel-go-next")) return;
      const s11 = i8.closest("[data-panzoom-action]"), a7 = null === (n11 = null == s11 ? void 0 : s11.dataset) || void 0 === n11 ? void 0 : n11.panzoomAction, r7 = (null === (o9 = null == s11 ? void 0 : s11.dataset) || void 0 === o9 ? void 0 : o9.panzoomValue) || "";
      if (a7) {
        switch (h(e10), a7) {
          case v.ZoomTo:
          case v.ZoomIn:
          case v.ZoomOut:
            ce(a7, { scale: parseFloat(r7 || "") || void 0 });
            break;
          case v.MoveLeft:
          case v.MoveRight:
            ce(a7, { deltaX: parseFloat(r7 || "") || void 0 });
            break;
          case v.MoveUp:
          case v.MoveDown:
            ce(a7, { deltaY: parseFloat(r7 || "") || void 0 });
            break;
          case v.ToggleFS:
            Me();
            break;
          default:
            ce(a7);
        }
        return;
      }
      if (!(null == k2 ? void 0 : k2.contains(i8))) return;
      const u6 = { srcEvent: e10 };
      if (ce(I2("clickAction"), u6), I2("dblClickAction")) {
        const e11 = Date.now(), t9 = e11 - (M || e11);
        M = e11, t9 > 0 && t9 <= 250 ? (w && (clearTimeout(w), w = void 0), ce(I2("dblClickAction"), u6)) : w = setTimeout(() => {
          ce(I2("singleClickAction"), u6);
        }, 250);
      }
    }
    function B2(e10) {
      if (L = e10, !W() || !Q()) return;
      if (R2.scale <= 1 || z2.scale <= 1) return;
      if (((null == k2 ? void 0 : k2.dataset.animationName) || "").indexOf("zoom") > -1) return;
      const t9 = ee(z2.scale);
      if (!t9) return;
      const { x: n11, y: o9 } = t9;
      ce(v.Pan, { deltaX: n11 - z2.x, deltaY: o9 - z2.y });
    }
    function N2() {
      var e10;
      c6 && (s4(c6, "is-loading"), null === (e10 = c6.querySelector(".f-spinner")) || void 0 === e10 || e10.remove());
    }
    function V() {
      if (!c6 || !O2) return;
      if (N2(), p(O2) && (!O2.complete || !O2.naturalWidth)) return P = 2, null == k2 || k2.classList.add("has-error"), void q2("error");
      q2("loaded");
      const { width: e10, height: t9 } = J();
      p(O2) && (O2.setAttribute("width", e10 + ""), O2.setAttribute("height", t9 + "")), k2 && (s4(k2, "has-error"), p(O2) && (k2.setAttribute("width", e10 + ""), k2.setAttribute("height", t9 + ""), k2.style.aspectRatio = `${e10 / t9 || ""}`)), F2 = c().on("start", (e11, t10) => {
        void 0 !== t10.angle && (t10.angle = 90 * Math.round(t10.angle / 90)), void 0 !== t10.flipX && (t10.flipX = t10.flipX > 0 ? 1 : -1), void 0 !== t10.flipY && (t10.flipY = t10.flipY > 0 ? 1 : -1), z2 = Object.assign(Object.assign({}, y), t10), le(), q2("animationStart");
      }).on("pause", (e11) => {
        z2 = Object.assign(Object.assign({}, y), e11);
      }).on("step", (e11) => {
        if (!W()) return void (null == F2 || F2.end());
        if (R2 = Object.assign(Object.assign({}, y), e11), Q() || !I2("bounds") || ye() || z2.scale > R2.scale || z2.scale < oe()) return void ue();
        const t10 = ae(z2.scale);
        let n12 = false, o9 = false, s11 = false, a7 = false;
        R2.x < t10.x[0] && (n12 = true), R2.x > t10.x[1] && (o9 = true), R2.y < t10.y[0] && (a7 = true), R2.y > t10.y[1] && (s11 = true);
        let r7 = false, l8 = false, c7 = false, u6 = false;
        z2.x < t10.x[0] && (r7 = true), z2.x > t10.x[1] && (l8 = true), z2.y < t10.y[0] && (u6 = true), z2.y > t10.y[1] && (c7 = true);
        let d3 = false;
        (o9 && l8 || n12 && r7) && (z2.x = t2(t10.x[0], z2.x, t10.x[1]), d3 = true), (s11 && c7 || a7 && u6) && (z2.y = t2(t10.y[0], z2.y, t10.y[1]), d3 = true), d3 && F2 && F2.spring({ tension: 94, friction: 17, maxSpeed: 555 * z2.scale, restDelta: 0.1, restSpeed: 0.1, velocity: F2.getCurrentVelocities() }).from(R2).to(z2).start(), ue();
      }).on("end", () => {
        (null == C ? void 0 : C.isPointerDown()) || re(), (null == F2 ? void 0 : F2.isRunning()) || (le(), q2("animationEnd"));
      }), (function() {
        const e11 = I2("gestures");
        if (!e11) return;
        if (!A || !O2) return;
        let t10 = false;
        C = f(A, e11).on("start", (e12) => {
          if (!I2("gestures")) return;
          if (!F2) return;
          if (!W() || Q()) return;
          const n12 = e12.srcEvent;
          (R2.scale > 1 || be(R2.angle) || e12.currentTouch.length > 1) && (null == n12 || n12.stopPropagation(), F2.pause(), t10 = true), 1 === e12.currentTouch.length && q2("touchStart");
        }).on("move", (e12) => {
          var n12;
          t10 && (1 !== z2.scale || be(z2.angle) || e12.currentTouch.length > 1) && (h(e12.srcEvent), null === (n12 = e12.srcEvent) || void 0 === n12 || n12.stopPropagation());
        }).on("pan", (e12) => {
          if (!t10) return;
          const n12 = e12.srcEvent;
          (1 !== z2.scale || be(z2.angle) || e12.currentTouch.length > 1) && (h(n12), ce(v.Pan, e12));
        }).on("swipe", (e12) => {
          t10 && (z2.scale > 1 || be(z2.angle)) && ce(v.Swipe, e12);
        }).on("tap", (e12) => {
          q2("click", e12);
        }).on("singleTap", (e12) => {
          q2("singleClick", e12);
        }).on("doubleTap", (e12) => {
          q2("dblClick", e12);
        }).on("pinch", (e12) => {
          t10 && (e12.scale > oe() ? ce(v.ZoomIn, e12) : e12.scale < oe() ? ce(v.ZoomOut, e12) : ce(v.Pan, e12));
        }).on("end", (e12) => {
          t10 && (e12.currentTouch.length ? (e12.srcEvent.stopPropagation(), h(e12.srcEvent), null == F2 || F2.end()) : (t10 = false, le(), re(), q2("touchEnd")));
        }).init();
      })(), A && (A.addEventListener("wheel", H2, { passive: false }), D2.push(() => {
        null == A || A.removeEventListener("wheel", H2, { passive: false });
      })), null == c6 || c6.addEventListener("click", _2), null === document || void 0 === document || document.addEventListener("mousemove", B2), D2.push(() => {
        null == c6 || c6.removeEventListener("click", _2), null === document || void 0 === document || document.removeEventListener("mousemove", B2);
      });
      const n11 = U();
      R2 = Object.assign({}, n11), z2 = Object.assign({}, n11), P = 3, ue(), le(), q2("ready"), requestAnimationFrame(() => {
        3 === P && (N2(), A && (A.style.visibility = ""));
      });
    }
    function U() {
      const e10 = Object.assign({}, I2("startPos") || {});
      let t9 = e10.scale, n11 = 1;
      n11 = "string" == typeof t9 ? te(t9) : "number" == typeof t9 ? t9 : oe();
      const o9 = Object.assign(Object.assign(Object.assign({}, y), e10), { scale: n11 }), i8 = Q() ? ee(n11) : void 0;
      if (i8) {
        const { x: e11, y: t10 } = i8;
        o9.x = e11, o9.y = t10;
      }
      return o9;
    }
    function G() {
      const e10 = { top: 0, left: 0, width: 0, height: 0 };
      if (k2) {
        const t9 = k2.getBoundingClientRect();
        be(z2.angle) ? (e10.top = t9.top + 0.5 * t9.height - 0.5 * t9.width, e10.left = t9.left + 0.5 * t9.width - 0.5 * t9.height, e10.width = t9.height, e10.height = t9.width) : (e10.top = t9.top, e10.left = t9.left, e10.width = t9.width, e10.height = t9.height);
      }
      return e10;
    }
    function J() {
      let t9 = I2("width"), n11 = I2("height");
      if (O2 && "auto" === t9) {
        const e10 = O2.getAttribute("width");
        t9 = e10 ? parseFloat(e10 + "") : void 0 !== O2.dataset.width ? parseFloat(O2.dataset.width + "") : p(A) ? A.naturalWidth : p(O2) ? O2.naturalWidth : (null == k2 ? void 0 : k2.getBoundingClientRect().width) || 0;
      } else t9 = t(t9) ? parseFloat(t9) : t9;
      if (O2 && "auto" === n11) {
        const e10 = O2.getAttribute("height");
        n11 = e10 ? parseFloat(e10 + "") : void 0 !== O2.dataset.height ? parseFloat(O2.dataset.height + "") : p(A) ? A.naturalHeight : p(O2) ? O2.naturalHeight : (null == k2 ? void 0 : k2.getBoundingClientRect().height) || 0;
      } else n11 = t(n11) ? parseFloat(n11) : n11;
      return { width: t9, height: n11 };
    }
    function K() {
      const e10 = G();
      return { width: e10.width, height: e10.height };
    }
    function Q() {
      return "mousemove" === I2("panMode") && matchMedia("(hover: hover)").matches;
    }
    function ee(e10) {
      const t9 = L || I2("event"), n11 = null == k2 ? void 0 : k2.getBoundingClientRect();
      if (!t9 || !n11 || e10 <= 1) return { x: 0, y: 0 };
      const o9 = (t9.clientX || 0) - n11.left, s11 = (t9.clientY || 0) - n11.top, { width: a7, height: r7 } = K(), l8 = ae(e10);
      if (e10 > 1) {
        const t10 = I2("mouseMoveFactor");
        t10 > 1 && (e10 *= t10);
      }
      let c7 = a7 * e10, u6 = r7 * e10, d3 = 0.5 * (c7 - a7) - o9 / a7 * 100 / 100 * (c7 - a7), f3 = 0.5 * (u6 - r7) - s11 / r7 * 100 / 100 * (u6 - r7);
      return d3 = t2(l8.x[0], d3, l8.x[1]), f3 = t2(l8.y[0], f3, l8.y[1]), { x: d3, y: f3 };
    }
    function te(e10) {
      if (!e10) return z2.scale;
      if (!c6) return 1;
      const t9 = c6.getBoundingClientRect(), n11 = G(), { width: o9, height: s11 } = J(), a7 = (e11) => {
        if ("number" == typeof e11) return e11;
        switch (e11) {
          case "min":
          case "base":
            return 1;
          case "cover":
            return Math.max(t9.height / n11.height, t9.width / n11.width) || 1;
          case "full":
          case "max": {
            const e12 = be(z2.angle) ? s11 : o9;
            return e12 && n11.width ? e12 / n11.width : 1;
          }
        }
      }, r7 = I2("minScale"), l8 = I2("maxScale"), u6 = Math.min(a7("full"), a7(r7)), d3 = "number" == typeof l8 ? a7("full") * l8 : Math.min(a7("full"), a7(l8));
      switch (e10) {
        case "min":
          return u6;
        case "base":
          return t2(u6, 1, d3);
        case "cover":
          return a7("cover");
        case "full":
          return Math.min(d3, a7("full"));
        case "max":
          return d3;
      }
    }
    function ne() {
      return te("min");
    }
    function oe() {
      return te("base");
    }
    function ie() {
      return te("full");
    }
    function se() {
      return te("max");
    }
    function ae(e10) {
      const t9 = { x: [0, 0], y: [0, 0] }, n11 = null == c6 ? void 0 : c6.getBoundingClientRect();
      if (!n11) return t9;
      const o9 = G(), i8 = n11.width, s11 = n11.height;
      let a7 = o9.width, r7 = o9.height, l8 = e10 = void 0 === e10 ? z2.scale : e10, u6 = e10;
      if (Q() && e10 > 1) {
        const t10 = I2("mouseMoveFactor");
        t10 > 1 && (a7 * e10 > i8 + 0.01 && (l8 *= t10), r7 * e10 > s11 + 0.01 && (u6 *= t10));
      }
      if (a7 *= l8, r7 *= u6, a7 > i8) {
        t9.x[0] = 0.5 * (i8 - a7), t9.x[1] = 0.5 * (a7 - i8);
        const e11 = 0.5 * (o9.left - n11.left), s12 = 0.5 * (o9.left + o9.width - n11.right);
        t9.x[0] -= e11 + s12, t9.x[1] -= e11 + s12;
      }
      if (r7 > s11) {
        t9.y[0] = 0.5 * (s11 - r7), t9.y[1] = 0.5 * (r7 - s11);
        const e11 = 0.5 * (o9.top - n11.top), i9 = 0.5 * (o9.top + o9.height - n11.bottom);
        t9.y[0] -= e11 + i9, t9.y[1] -= e11 + i9;
      }
      return t9;
    }
    function re() {
      if (!W()) return;
      if (!I2("bounds")) return;
      if (!F2) return;
      const e10 = ne(), t9 = se(), n11 = t2(e10, z2.scale, t9);
      if (z2.scale < e10 - 0.01 || z2.scale > t9 + 0.01) return void ce(v.ZoomTo, { scale: n11 });
      if (F2.isRunning()) return;
      if (ye()) return;
      const o9 = ae(n11);
      z2.x < o9.x[0] || z2.x > o9.x[1] || z2.y < o9.y[0] || z2.y > o9.y[1] ? (z2.x = t2(o9.x[0], z2.x, o9.x[1]), z2.y = t2(o9.y[0], z2.y, o9.y[1]), F2.spring({ tension: 170, friction: 17, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0, velocity: F2.getCurrentVelocities() }), F2.from(R2).to(z2).start()) : ue();
    }
    function le(e10) {
      var t9;
      if (!W()) return;
      const n11 = ve(), o9 = ye(), i8 = xe(), s11 = we(), a7 = fe(), r7 = ge();
      s5(k2, "is-fullsize", s11), s5(k2, "is-expanded", i8), s5(k2, "is-dragging", o9), s5(k2, "can-drag", n11), s5(k2, "will-zoom-in", a7), s5(k2, "will-zoom-out", r7);
      const l8 = me(), u6 = pe(), d3 = he(), g2 = !W();
      for (const n12 of (null === (t9 = e10 || c6) || void 0 === t9 ? void 0 : t9.querySelectorAll("[data-panzoom-action]")) || []) {
        const e11 = n12.dataset.panzoomAction;
        let t10 = false;
        if (g2) t10 = true;
        else switch (e11) {
          case v.ZoomIn:
            l8 || (t10 = true);
            break;
          case v.ZoomOut:
            d3 || (t10 = true);
            break;
          case v.ToggleFull: {
            u6 || d3 || (t10 = true);
            const e12 = n12.querySelector("g");
            e12 && (e12.style.display = s11 && !t10 ? "none" : "");
            break;
          }
          case v.IterateZoom: {
            l8 || d3 || (t10 = true);
            const e12 = n12.querySelector("g");
            e12 && (e12.style.display = l8 || t10 ? "" : "none");
            break;
          }
          case v.ToggleCover:
          case v.ToggleMax:
            l8 || d3 || (t10 = true);
        }
        t10 ? (n12.setAttribute("aria-disabled", ""), n12.setAttribute("tabindex", "-1")) : (n12.removeAttribute("aria-disabled"), n12.removeAttribute("tabindex"));
      }
    }
    function ce(e10, t9) {
      var n11;
      if (!(e10 && c6 && O2 && F2 && W())) return;
      if (e10 === v.Swipe && Math.abs(F2.getCurrentVelocities().scale) > 0.01) return;
      const o9 = Object.assign({}, z2);
      let s11 = Object.assign({}, z2), l8 = ae(Q() ? o9.scale : R2.scale);
      const u6 = F2.getCurrentVelocities(), d3 = G(), f3 = ((null === (n11 = (t9 = t9 || {}).currentTouch) || void 0 === n11 ? void 0 : n11.length) || 0) > 1, h4 = t9.velocityX || 0, m4 = t9.velocityY || 0;
      let p2 = t9.center;
      t9.srcEvent && (p2 = i2(s2(t9.srcEvent)));
      let b4 = t9.deltaX || 0, x3 = t9.deltaY || 0;
      switch (e10) {
        case v.MoveRight:
          b4 = t9.deltaX || 100;
          break;
        case v.MoveLeft:
          b4 = t9.deltaX || -100;
          break;
        case v.MoveUp:
          x3 = t9.deltaY || -100;
          break;
        case v.MoveDown:
          x3 = t9.deltaY || 100;
      }
      let w3 = [];
      if ("number" == typeof e10) s11.scale = e10;
      else switch (e10) {
        case v.Reset:
          s11 = Object.assign({}, y), s11.scale = oe();
          break;
        case v.ZoomTo:
        case v.ZoomIn:
        case v.ZoomOut:
        case v.ToggleCover:
        case v.ToggleFull:
        case v.ToggleMax:
        case v.IterateZoom:
        case v.Zoom:
          s11.scale = de(e10, t9);
          break;
        case v.Pan:
        case v.Move:
        case v.MoveLeft:
        case v.MoveRight:
        case v.MoveUp:
        case v.MoveDown:
          if (ye()) {
            let e11 = 1, t10 = 1;
            s11.x <= l8.x[0] && h4 <= 0 && (e11 = Math.max(0.01, 1 - Math.abs(1 / d3.width * Math.abs(s11.x - l8.x[0]))), e11 *= 0.2), s11.x >= l8.x[1] && h4 >= 0 && (e11 = Math.max(0.01, 1 - Math.abs(1 / d3.width * Math.abs(s11.x - l8.x[1]))), e11 *= 0.2), s11.y <= l8.y[0] && m4 <= 0 && (t10 = Math.max(0.01, 1 - Math.abs(1 / d3.height * Math.abs(s11.y - l8.y[0]))), t10 *= 0.2), s11.y >= l8.y[1] && m4 >= 0 && (t10 = Math.max(0.01, 1 - Math.abs(1 / d3.height * Math.abs(s11.y - l8.y[1]))), t10 *= 0.2), s11.x += b4 * e11, s11.y += x3 * t10;
          } else s11.x = t2(l8.x[0], s11.x + b4, l8.x[1]), s11.y = t2(l8.y[0], s11.y + x3, l8.y[1]);
          break;
        case v.Swipe:
          const n12 = (e11 = 0) => Math.sign(e11) * Math.pow(Math.abs(e11), 1.5);
          s11.x += t2(-1e3, n12(h4), 1e3), s11.y += t2(-1e3, n12(m4), 1e3), m4 && !h4 && (s11.x = t2(l8.x[0], s11.x, l8.x[1])), !m4 && h4 && (s11.y = t2(l8.y[0], s11.y, l8.y[1])), u6.x = h4, u6.y = m4;
          break;
        case v.RotateCW:
          s11.angle += 90;
          break;
        case v.RotateCCW:
          s11.angle -= 90;
          break;
        case v.FlipX:
          s11.flipX *= -1;
          break;
        case v.FlipY:
          s11.flipY *= -1;
      }
      if (void 0 !== R2.angle && Math.abs(R2.angle) >= 360 && (s11.angle -= 360 * Math.floor(R2.angle / 360), R2.angle -= 360 * Math.floor(R2.angle / 360)), w3.length) {
        const e11 = w3.findIndex((e12) => e12 > s11.scale + 1e-4);
        s11.scale = w3[e11] || w3[0];
      }
      if (f3 && (s11.scale = t2(ne() * (f3 ? 0.8 : 1), s11.scale, se() * (f3 ? 1.6 : 1))), Q()) {
        const e11 = ee(s11.scale);
        if (e11) {
          const { x: t10, y: n12 } = e11;
          s11.x = t10, s11.y = n12;
        }
      } else if (Math.abs(s11.scale - o9.scale) > 1e-4) {
        let e11 = 0, t10 = 0;
        if (p2) e11 = p2.x, t10 = p2.y;
        else {
          const n13 = c6.getBoundingClientRect();
          e11 = n13.x + 0.5 * n13.width, t10 = n13.y + 0.5 * n13.height;
        }
        let n12 = e11 - d3.left, a7 = t10 - d3.top;
        n12 -= 0.5 * d3.width, a7 -= 0.5 * d3.height;
        const r7 = (n12 - o9.x) / o9.scale, u7 = (a7 - o9.y) / o9.scale;
        s11.x = n12 - r7 * s11.scale, s11.y = a7 - u7 * s11.scale, !f3 && I2("bounds") && (l8 = ae(s11.scale), s11.x = t2(l8.x[0], s11.x, l8.x[1]), s11.y = t2(l8.y[0], s11.y, l8.y[1]));
      }
      if (e10 === v.Swipe) {
        let e11 = 94, t10 = 17, n12 = 500 * s11.scale, o10 = u6;
        F2.spring({ tension: e11, friction: t10, maxSpeed: n12, restDelta: 0.1, restSpeed: 0.1, velocity: o10 });
      } else e10 === v.Pan || f3 ? F2.spring({ tension: 900, friction: 17, restDelta: 0.01, restSpeed: 0.01, maxSpeed: 1 }) : F2.spring({ tension: 170, friction: 17, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0, velocity: u6 });
      if (0 === t9.velocity || n3(R2, s11)) R2 = Object.assign({}, s11), z2 = Object.assign({}, s11), F2.end(), ue(), le();
      else {
        if (n3(z2, s11)) return;
        F2.from(R2).to(s11).start();
      }
      q2("action", e10);
    }
    function ue() {
      if (!O2 || !k2 || !A) return;
      const { width: e10, height: t9 } = J();
      Object.assign(k2.style, { maxWidth: `min(${e10}px, 100%)`, maxHeight: `min(${t9}px, 100%)` });
      const n11 = (function() {
        const { width: e11, height: t10 } = J(), { width: n12, height: o10 } = K();
        if (!c6) return { x: 0, y: 0, width: 0, height: 0, scale: 0, flipX: 0, flipY: 0, angle: 0, fitWidth: n12, fitHeight: o10, fullWidth: e11, fullHeight: t10 };
        let { x: i9, y: s12, scale: a8, angle: r8, flipX: l9, flipY: u7 } = R2, d4 = 1 / ie(), f4 = e11, g2 = t10, h4 = R2.scale * d4, m4 = z2.scale * d4;
        const p2 = Math.max(n12, o10), v4 = Math.min(n12, o10);
        e11 > t10 ? (f4 = p2, g2 = v4) : (f4 = v4, g2 = p2);
        h4 = e11 > t10 ? p2 * a8 / e11 || 1 : p2 * a8 / t10 || 1;
        let b4 = f4 ? e11 * m4 : 0, y3 = g2 ? t10 * m4 : 0, x3 = f4 && g2 ? e11 * h4 / b4 : 0;
        return i9 = i9 + 0.5 * f4 - 0.5 * b4, s12 = s12 + 0.5 * g2 - 0.5 * y3, { x: i9, y: s12, width: b4, height: y3, scale: x3, flipX: l9, flipY: u7, angle: r8, fitWidth: n12, fitHeight: o10, fullWidth: e11, fullHeight: t10 };
      })(), { x: o9, y: i8, width: s11, height: a7, scale: r7, angle: l8, flipX: u6, flipY: d3 } = n11;
      let f3 = `translate(${m(o9, 100)}px, ${m(i8, 100)}px)`;
      f3 += 1 !== u6 || 1 !== d3 ? ` scaleX(${m(r7 * u6)}) scaleY(${m(r7 * d3)})` : ` scale(${m(r7)})`, 0 !== l8 && (f3 += ` rotate(${l8}deg)`), A.style.width = `${m(s11)}px`, A.style.height = `${m(a7)}px`, A.style.transform = `${f3}`, q2("render");
    }
    function de(e10 = I2("clickAction"), t9 = {}) {
      let n11 = z2.scale, o9 = oe(), s11 = [];
      if ("number" == typeof e10) o9 = e10;
      else if (e10) {
        switch (e10) {
          case v.ZoomTo:
            o9 = t9.scale || 1;
            break;
          case v.ZoomIn:
            o9 = n11 * (t9.scale || 2);
            break;
          case v.ZoomOut:
            o9 = n11 * (t9.scale || 0.5);
            break;
          case v.ToggleCover:
            s11 = [oe(), te("cover")];
            break;
          case v.ToggleFull:
            s11 = [oe(), ie()];
            break;
          case v.ToggleMax:
            s11 = [oe(), se()];
            break;
          case v.IterateZoom:
            s11 = [oe(), ie(), se()];
            break;
          case v.Zoom: {
            const e11 = ie();
            o9 = n11 >= e11 - 0.05 ? oe() : Math.min(e11, n11 * (t9.scale || 2));
            break;
          }
        }
        if (s11.length) {
          const e11 = s11.find((e12) => e12 > n11 + 1e-4);
          o9 = null != e11 ? e11 : oe();
        }
      }
      return e10 !== v.ZoomTo && (o9 = t2(ne(), o9, se())), o9;
    }
    function fe() {
      return !!(W() && de() > z2.scale);
    }
    function ge() {
      return !!(W() && de() < z2.scale);
    }
    function he() {
      return !!(W() && z2.scale > ne());
    }
    function me() {
      return !!(W() && z2.scale < se());
    }
    function pe() {
      return !!(W() && z2.scale < ie());
    }
    function ve() {
      return !(!W() || !xe() && !be(z2.angle) || !C || Q());
    }
    function be(e10) {
      return 90 === Math.abs(e10 % 180);
    }
    function ye() {
      return !(!W() || !(null == C ? void 0 : C.isPointerDown()) || Q());
    }
    function xe() {
      return !!(W() && z2.scale > oe());
    }
    function we() {
      return !!(W() && z2.scale >= ie());
    }
    function Me() {
      const e10 = "in-fullscreen", t9 = "with-panzoom-in-fullscreen";
      null == c6 || c6.classList.toggle(e10);
      const n11 = null == c6 ? void 0 : c6.classList.contains(e10);
      n11 ? (document.documentElement.classList.add(t9), document.addEventListener("keydown", je, true)) : (document.documentElement.classList.remove(t9), document.removeEventListener("keydown", je, true)), ue(), q2(n11 ? "enterFS" : "exitFS");
    }
    function je(e10) {
      "Escape" !== e10.key || e10.defaultPrevented || Me();
    }
    const Ee = { canDrag: ve, canZoomIn: me, canZoomOut: he, canZoomToFull: pe, destroy: function() {
      q2("destroy");
      for (const e10 of Object.values(Y)) null == e10 || e10.destroy(Ee);
      for (const e10 of D2) e10();
      return k2 && (k2.style.aspectRatio = "", k2.style.maxWidth = "", k2.style.maxHeight = ""), A && (A.style.width = "", A.style.height = "", A.style.transform = ""), k2 = void 0, O2 = void 0, A = void 0, R2 = Object.assign({}, y), z2 = Object.assign({}, y), null == F2 || F2.destroy(), F2 = void 0, null == C || C.destroy(), C = void 0, P = 4, Ee;
    }, emit: q2, execute: ce, getBoundaries: ae, getContainer: function() {
      return c6;
    }, getContent: function() {
      return O2;
    }, getFullDim: J, getGestures: function() {
      return C;
    }, getMousemovePos: ee, getOptions: function() {
      return X;
    }, getPlugins: function() {
      return Y;
    }, getScale: te, getStartPosition: U, getState: function() {
      return P;
    }, getTransform: function(e10) {
      return true === e10 ? z2 : R2;
    }, getTween: function() {
      return F2;
    }, getViewport: function() {
      return A;
    }, getWrapper: function() {
      return k2;
    }, init: function() {
      return P = 0, q2("init"), (function() {
        for (const [e10, t9] of Object.entries(Object.assign(Object.assign({}, S2), X.plugins || {}))) if (e10 && !Y[e10] && t9 instanceof Function) {
          const n11 = t9();
          n11.init(Ee), Y[e10] = n11;
        }
        q2("initPlugins");
      })(), (function() {
        var e10, t9, n11;
        const o9 = Object.assign(Object.assign({}, x.classes), I2("classes")), i8 = null === (e10 = o9.content) || void 0 === e10 ? void 0 : e10.split(" ").shift(), s11 = null === (t9 = o9.wrapper) || void 0 === t9 ? void 0 : t9.split(" ").shift(), a7 = null === (n11 = o9.viewport) || void 0 === n11 ? void 0 : n11.split(" ").shift();
        if (!i8 || !s11 || !a7) return;
        if (!c6) return;
        if (s3(c6, o9.container), O2 = c6.querySelector(`.${i8}:not(.is-clone)`), !O2) return;
        O2.setAttribute("draggable", "false"), k2 = c6.querySelector(`.${s11}`), k2 || (k2 = document.createElement("div"), s3(k2, o9.wrapper), O2.insertAdjacentElement("beforebegin", k2), k2.insertAdjacentElement("afterbegin", O2));
        A = c6.querySelector(`.${a7}`), A || (A = document.createElement("div"), s3(A, o9.viewport), k2.insertAdjacentElement("beforeend", A));
        A.contains(O2) || A.insertAdjacentElement("afterbegin", O2);
        T = c6.querySelector(`.${i8}.is-clone`), T || (T = O2.cloneNode(true), T.removeAttribute("id"), s3(T, "is-clone"), k2.insertAdjacentElement("afterbegin", T));
        O2 instanceof HTMLPictureElement && (O2 = O2.querySelector("img"));
        T instanceof HTMLPictureElement && (T = T.querySelector("img"));
        A instanceof HTMLPictureElement && (A = A.querySelector("img"));
        if (A && (A.style.visibility = "hidden", I2("protected"))) {
          A.addEventListener("contextmenu", (e12) => {
            h(e12);
          });
          const e11 = document.createElement("div");
          s3(e11, "f-panzoom__protected"), A.appendChild(e11);
        }
        q2("initLayout");
      })(), (function() {
        if (c6 && k2 && !Z) {
          let e10 = null;
          Z = new ResizeObserver(() => {
            W() && (e10 = e10 || requestAnimationFrame(() => {
              W() && (le(), re(), q2("refresh")), e10 = null;
            }));
          }), Z.observe(k2), D2.push(() => {
            null == Z || Z.disconnect(), Z = void 0, e10 && (cancelAnimationFrame(e10), e10 = null);
          });
        }
      })(), (function() {
        if (!c6 || !O2) return;
        if (!p(O2) || !p(T)) return void V();
        const e10 = () => {
          O2 && p(O2) && O2.decode().then(() => {
            V();
          }).catch(() => {
            V();
          });
        };
        if (P = 1, c6.classList.add("is-loading"), q2("loading"), T.src && T.complete) return void e10();
        (function() {
          if (!c6) return;
          if (null == c6 ? void 0 : c6.querySelector(".f-spinner")) return;
          const e11 = I2("spinnerTpl"), t9 = e2(e11);
          t9 && (t9.classList.add("f-spinner"), c6.classList.add("is-loading"), null == k2 || k2.insertAdjacentElement("afterbegin", t9));
        })(), T.addEventListener("load", e10, false), T.addEventListener("error", e10, false), D2.push(() => {
          null == T || T.removeEventListener("load", e10, false), null == T || T.removeEventListener("error", e10, false);
        });
      })(), Ee;
    }, isDragging: ye, isExpanded: xe, isFullsize: we, isMousemoveMode: Q, localize: function(e10, t9 = []) {
      const n11 = I2("l10n") || {};
      e10 = String(e10).replace(/\{\{(\w+)\}\}/g, (e11, t10) => n11[t10] || e11);
      for (let n12 = 0; n12 < t9.length; n12++) e10 = e10.split(t9[n12][0]).join(t9[n12][1]);
      return e10 = e10.replace(/\{\{(.*?)\}\}/g, (e11, t10) => t10);
    }, off: function(e10, t9) {
      for (const n11 of e10 instanceof Array ? e10 : [e10]) $.has(n11) && $.set(n11, $.get(n11).filter((e11) => e11 !== t9));
      return Ee;
    }, on: function(e10, t9) {
      for (const n11 of e10 instanceof Array ? e10 : [e10]) $.set(n11, [...$.get(n11) || [], t9]);
      return Ee;
    }, toggleFS: Me, updateControls: le, version: "6.1.14", willZoomIn: fe, willZoomOut: ge };
    return Ee;
  };
  S.l10n = { en_EN: e6 }, S.getDefaults = () => x;

  // node_modules/@fancyapps/ui/dist/utils/getDirectChildren.js
  var e7 = (e10, o9) => {
    let t9 = [];
    return e10.childNodes.forEach((e11) => {
      e11.nodeType !== Node.ELEMENT_NODE || o9 && !e11.matches(o9) || t9.push(e11);
    }), t9;
  };

  // node_modules/@fancyapps/ui/dist/utils/extend.js
  var r3 = (t9, ...e10) => {
    const n11 = e10.length;
    for (let c6 = 0; c6 < n11; c6++) {
      const n12 = e10[c6] || {};
      Object.entries(n12).forEach(([e11, n13]) => {
        const c7 = Array.isArray(n13) ? [] : {};
        t9[e11] || Object.assign(t9, { [e11]: c7 }), t3(n13) ? Object.assign(t9[e11], r3(t9[e11], n13)) : Array.isArray(n13) ? Object.assign(t9, { [e11]: [...n13] }) : Object.assign(t9, { [e11]: n13 });
      });
    }
    return t9;
  };

  // node_modules/@fancyapps/ui/dist/utils/map.js
  var t5 = function(t9 = 0, n11 = 0, r7 = 0, c6 = 0, m4 = 0, p2 = false) {
    const s11 = (t9 - n11) / (r7 - n11) * (m4 - c6) + c6;
    return p2 ? c6 < m4 ? t2(c6, s11, m4) : t2(m4, s11, c6) : s11;
  };

  // node_modules/@fancyapps/ui/dist/carousel/l10n/en_EN.js
  var o3 = Object.assign(Object.assign({}, e6), { ERROR: "Something went wrong. <br /> Please try again later.", NEXT: "Next page", PREV: "Previous page", GOTO: "Go to page #%d", DOWNLOAD: "Download", TOGGLE_FULLSCREEN: "Toggle full-screen mode", TOGGLE_EXPAND: "Toggle full-size mode", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_AUTOPLAY: "Toggle slideshow" });

  // node_modules/@fancyapps/ui/dist/carousel/carousel.js
  var m2 = (t9) => {
    t9.cancelable && t9.preventDefault();
  };
  var h2 = { adaptiveHeight: false, center: true, classes: { container: "f-carousel", isEnabled: "is-enabled", isLTR: "is-ltr", isRTL: "is-rtl", isHorizontal: "is-horizontal", isVertical: "is-vertical", hasAdaptiveHeight: "has-adaptive-height", viewport: "f-carousel__viewport", slide: "f-carousel__slide", isSelected: "is-selected" }, dragFree: false, enabled: true, errorTpl: '<div class="f-html">{{ERROR}}</div>', fill: true, infinite: true, initialPage: 0, l10n: o3, rtl: false, slides: [], slidesPerPage: "auto", spinnerTpl: '<div class="f-spinner"></div>', transition: "fade", tween: { clamp: true, mass: 1, tension: 160, friction: 25, restDelta: 1, restSpeed: 1, velocity: 0 }, vertical: false };
  var b2;
  var y2;
  var E2 = 0;
  var x2 = (g2, M4 = {}, w3 = {}) => {
    E2++;
    let S2, A, j2, L, P, T = 0, O2 = Object.assign({}, h2), R2 = Object.assign({}, h2), H2 = {}, V = null, C = null, $ = 0, D2 = 0, I2 = 0, q2 = false, k2 = false, F2 = false, z2 = "height", B2 = 0, N2 = true, _2 = 0, G = 0, X = 0, Y = 0, W = "*", J = [], K = [];
    const Q = /* @__PURE__ */ new Set();
    let U = [], Z = [], tt = 0, et = 0, nt = 0;
    function it(t9, ...e10) {
      let n11 = R2[t9];
      return n11 && n11 instanceof Function ? n11(Ft, ...e10) : n11;
    }
    function ot(t9, e10 = []) {
      const n11 = it("l10n") || {};
      t9 = String(t9).replace(/\{\{(\w+)\}\}/g, (t10, e11) => n11[e11] || t10);
      for (let n12 = 0; n12 < e10.length; n12++) t9 = t9.split(e10[n12][0]).join(e10[n12][1]);
      return t9 = t9.replace(/\{\{(.*?)\}\}/g, (t10, e11) => e11);
    }
    const st = /* @__PURE__ */ new Map();
    function rt(t9, ...e10) {
      const n11 = [...st.get(t9) || []];
      R2.on && n11.push(R2.on[t9]);
      for (const t10 of n11) t10 && t10 instanceof Function && t10(Ft, ...e10);
      "click" === t9 && Ot(e10[0]), "*" !== t9 && rt("*", t9, ...e10);
    }
    function lt() {
      var e10, n11;
      const i8 = r3({}, h2, O2);
      let r7 = "";
      const l8 = O2.breakpoints || {};
      for (const [t9, e11] of Object.entries(l8)) window.matchMedia(t9).matches && (r7 += t9, r3(i8, e11));
      if (void 0 === P || r7 !== P) {
        if (P = r7, 0 !== T) {
          let t9 = null === (n11 = null === (e10 = Z[_2]) || void 0 === e10 ? void 0 : e10.slides[0]) || void 0 === n11 ? void 0 : n11.index;
          void 0 === t9 && (t9 = R2.initialSlide), i8.initialSlide = t9, i8.slides = [];
          for (const t10 of J) t10.isVirtual && i8.slides.push(t10);
        }
        It(), R2 = i8, false !== it("enabled") && (T = 0, rt("init"), (function() {
          for (const [t9, e11] of Object.entries(Object.assign(Object.assign({}, w3), R2.plugins || {}))) if (t9 && !H2[t9] && e11 instanceof Function) {
            const n12 = e11();
            n12.init(Ft, x2), H2[t9] = n12;
          }
          rt("initPlugins");
        })(), (function() {
          if (!V) return;
          const e11 = it("classes") || {};
          s3(V, e11.container);
          const n12 = it("style");
          if (n12 && t3(n12)) for (const [t9, e12] of Object.entries(n12)) V.style.setProperty(t9, e12);
          C = Array.from(V.querySelectorAll(`.${e11.viewport}`)).filter((t9) => t9.closest(`.${e11.container}`) === V).pop() || null, C || (C = document.createElement("div"), s3(C, e11.viewport), C.append(...e7(V, `.${e11.slide}`)), V.insertAdjacentElement("afterbegin", C)), V.carousel = Ft, rt("initLayout");
        })(), (function() {
          if (!C) return;
          const t9 = it("classes") || {};
          J = [], [...e7(C, `.${t9.slide}`)].forEach((t10) => {
            if (t10.parentElement) {
              const e11 = Et(Object.assign({ el: t10, isVirtual: false }, t10.dataset || {}));
              rt("createSlide", e11), J.push(e11);
            }
          }), St();
          for (const t10 of J) rt("addSlide", t10);
          yt(it("slides"));
          for (const t10 of J) {
            const e11 = t10.el;
            (null == e11 ? void 0 : e11.parentElement) === C && (s3(e11, R2.classes.slide), s3(e11, t10.class), Vt(t10), rt("attachSlideEl", t10));
          }
          rt("initSlides");
        })(), At(), T = 1, s3(V, (it("classes") || {}).isEnabled || ""), Dt(), ft(), A = c().on("start", () => {
          S2 && S2.isPointerDown() || (ut(), Dt());
        }).on("step", (t9) => {
          const e11 = B2;
          B2 = t9.pos, B2 !== e11 && (N2 = false, Dt());
        }).on("end", (t9) => {
          (null == S2 ? void 0 : S2.isPointerDown()) || (B2 = t9.pos, A && !q2 && (B2 < X || B2 > Y) ? A.spring({ clamp: true, mass: 1, tension: 200, friction: 25, velocity: 0, restDelta: 1, restSpeed: 1 }).from({ pos: B2 }).to({ pos: t2(X, B2, Y) }).start() : N2 || (N2 = true, rt("settle")));
        }), ct(), (function() {
          if (!V || !C) return;
          V.addEventListener("click", Tt), document.addEventListener("mousemove", at), y2 || (y2 = function(t10) {
            var e11, n12;
            const i9 = null === (n12 = null === (e11 = t10.target) || void 0 === e11 ? void 0 : e11.dataset) || void 0 === n12 ? void 0 : n12.carouselTarget;
            if (i9) {
              const e12 = document.getElementById(`${i9.split("#").pop()}`), n13 = null == e12 ? void 0 : e12.carousel;
              null == n13 || n13.emit("click", t10);
            }
          }, document.addEventListener("click", y2));
          const t9 = C.getBoundingClientRect();
          if (tt = t9.height, et = t9.width, !j2) {
            let t10 = null;
            j2 = new ResizeObserver(() => {
              t10 || (t10 = requestAnimationFrame(() => {
                !(function() {
                  if (1 !== T || !C) return;
                  const t11 = Z.length, e11 = C.getBoundingClientRect(), n12 = e11.height, i9 = e11.width;
                  t11 > 1 && (F2 && Math.abs(n12 - tt) < 0.5 || !F2 && Math.abs(i9 - et) < 0.5) || (At(), ct(), tt = n12, et = i9, F2 && !tt || !F2 && !et || V && C && (t11 === Z.length && (null == S2 ? void 0 : S2.isPointerDown()) || (it("dragFree") && (q2 || B2 > X && B2 < Y) ? (ut(), Dt()) : Ct(_2, { transition: false }))));
                })(), t10 = null;
              }));
            }), j2.observe(C);
          }
        })(), rt("ready"));
      }
    }
    function at(t9) {
      b2 = t9;
    }
    function ct() {
      false === it("gestures") ? S2 && (S2.destroy(), S2 = void 0) : S2 || (function() {
        const t9 = it("gestures");
        !S2 && false !== t9 && C && (S2 = f(C, t9).on("start", (t10) => {
          var e10, n11;
          if (!A) return;
          if (false === it("gestures", t10)) return;
          const { srcEvent: o9 } = t10;
          F2 && e5(o9) && !n2(o9.target) && m2(o9), A.pause(), A.getCurrentVelocities().pos = 0;
          const s11 = null === (e10 = Z[_2]) || void 0 === e10 ? void 0 : e10.slides[0], r7 = null == s11 ? void 0 : s11.el;
          s11 && Q.has(s11.index) && r7 && (B2 = s11.offset || 0, B2 += ((function(t11) {
            const e11 = window.getComputedStyle(t11), n12 = new DOMMatrixReadOnly(e11.transform);
            return { width: n12.m41 || 0, height: n12.m42 || 0 };
          })(r7)[z2] || 0) * (k2 && !F2 ? 1 : -1)), Lt(), q2 || (B2 < X || B2 > Y) && A.spring({ clamp: true, mass: 1, tension: 500, friction: 25, velocity: (null === (n11 = A.getCurrentVelocities()) || void 0 === n11 ? void 0 : n11.pos) || 0, restDelta: 1, restSpeed: 1 }).from({ pos: B2 }).to({ pos: t2(X, B2, Y) }).start();
        }).on("move", (t10) => {
          var e10, n11;
          if (false === it("gestures", t10)) return;
          const { srcEvent: o9, axis: s11, deltaX: r7, deltaY: l8 } = t10;
          if (e5(o9) && (null === (e10 = o9.touches) || void 0 === e10 ? void 0 : e10.length) > 1) return;
          const a7 = o9.target, c6 = n2(a7), d3 = c6 ? c6.scrollHeight > c6.clientHeight ? "y" : "x" : void 0;
          if (c6 && c6 !== C && (!s11 || s11 === d3)) return;
          if (!s11) return m2(o9), o9.stopPropagation(), void o9.stopImmediatePropagation();
          if ("y" === s11 && !F2 || "x" === s11 && F2) return;
          if (m2(o9), o9.stopPropagation(), !A) return;
          const u6 = k2 && !F2 ? 1 : -1, f3 = F2 ? l8 : r7;
          let v4 = (null == A ? void 0 : A.isRunning()) ? A.getEndValues().pos : B2, g3 = 1;
          q2 || (v4 <= X && f3 * u6 < 0 ? (g3 = Math.max(0.01, 1 - (Math.abs(1 / mt() * Math.abs(v4 - X)) || 0)), g3 *= 0.2) : v4 >= Y && f3 * u6 > 0 && (g3 = Math.max(0.01, 1 - (Math.abs(1 / mt() * Math.abs(v4 - Y)) || 0)), g3 *= 0.2)), v4 += f3 * g3 * u6, A.spring({ clamp: true, mass: 1, tension: 700, friction: 25, velocity: (null === (n11 = A.getCurrentVelocities()) || void 0 === n11 ? void 0 : n11.pos) || 0, restDelta: 1, restSpeed: 1 }).from({ pos: B2 }).to({ pos: v4 }).start();
        }).on("panstart", (t10) => {
          false !== it("gestures", t10) && (null == t10 ? void 0 : t10.axis) === (F2 ? "y" : "x") && s3(C, "is-dragging");
        }).on("panend", (t10) => {
          false !== it("gestures", t10) && s4(C, "is-dragging");
        }).on("end", (t10) => {
          var e10, n11;
          if (false === it("gestures", t10)) return;
          const { srcEvent: o9, axis: s11, velocityX: r7, velocityY: l8, currentTouch: c6 } = t10;
          if (c6.length > 0 || !A) return;
          const d3 = o9.target, u6 = n2(d3), f3 = u6 ? u6.scrollHeight > u6.clientHeight ? "y" : "x" : void 0, v4 = u6 && (!s11 || s11 === f3);
          F2 && e5(o9) && !s11 && Tt(o9);
          const g3 = Z.length, m4 = it("dragFree");
          if (!g3) return;
          let h4 = v4 ? 0 : it("vertical") ? l8 : r7;
          s11 !== (F2 ? "y" : "x") && (h4 = 0);
          let b3 = (null == A ? void 0 : A.isRunning()) ? A.getEndValues().pos : B2;
          const y3 = k2 && !F2 ? 1 : -1;
          if (v4 || (b3 += h4 * (m4 ? 5 : 1) * y3), !q2 && (h4 * y3 <= 0 && b3 < X || h4 * y3 >= 0 && b3 > Y)) {
            let t11 = 0;
            return Math.abs(h4) > 0 && (t11 = 2 * Math.abs(h4), t11 = Math.min(0.3 * mt(), t11)), b3 = t2(X + -1 * t11, b3, Y + t11), void A.spring({ clamp: true, mass: 1, tension: 380, friction: 25, velocity: -1 * h4, restDelta: 1, restSpeed: 1 }).from({ pos: B2 }).to({ pos: b3 }).start();
          }
          if (m4 || (null === (e10 = H2.Autoscroll) || void 0 === e10 ? void 0 : e10.isEnabled())) return void (Math.abs(h4) > 10 ? A.spring({ clamp: true, mass: 1, tension: 150, friction: 25, velocity: -1 * h4, restDelta: 1, restSpeed: 1 }).from({ pos: B2 }).to({ pos: b3 }).start() : A.isRunning() || N2 || (N2 = true, rt("settle")));
          if (!m4 && !(null === (n11 = H2.Autoscroll) || void 0 === n11 ? void 0 : n11.isEnabled()) && (!t10.offsetX && !t10.offsetY || "y" === s11 && !F2 || "x" === s11 && F2)) return void Ct(_2, { transition: "tween" });
          let E3 = pt(b3);
          Math.abs(h4) > 10 && E3 === _2 && (E3 += h4 > 0 ? k2 && !F2 ? 1 : -1 : k2 && !F2 ? -1 : 1), Ct(E3, { transition: "tween", tween: { velocity: -1 * h4 } });
        }).init());
      })(), s5(C, "is-draggable", !!S2 && Z.length > 0);
    }
    function dt(t9 = "*") {
      var e10;
      const n11 = [];
      for (const i8 of J) ("*" === t9 || i8.class && i8.class.includes(t9) || i8.el && (null === (e10 = i8.el) || void 0 === e10 ? void 0 : e10.classList.contains(t9))) && n11.push(i8);
      L = void 0, W = t9, K = [...n11];
    }
    function ut() {
      if (!A) return;
      const t9 = pt((null == A ? void 0 : A.isRunning()) ? A.getEndValues().pos : B2);
      t9 !== _2 && (L = _2, _2 = t9, Vt(), ft(), vt(), rt("change", _2, L));
    }
    function ft() {
      var t9, e10;
      if (!V) return;
      for (const t10 of V.querySelectorAll("[data-carousel-index]")) t10.innerHTML = _2 + "";
      for (const t10 of V.querySelectorAll("[data-carousel-page]")) t10.innerHTML = _2 + 1 + "";
      for (const t10 of V.querySelectorAll("[data-carousel-pages]")) t10.innerHTML = Z.length + "";
      const n11 = it("classes") || {}, i8 = Array.from(V.querySelectorAll("[data-carousel-go-to]")).filter((t10) => t10.closest(`.${n11.container}`) === V);
      for (const e11 of i8) {
        parseInt((null === (t9 = e11.dataset) || void 0 === t9 ? void 0 : t9.carouselGoTo) || "-1", 10) === _2 ? e11.setAttribute("aria-current", "true") : e11.removeAttribute("aria-current");
      }
      for (const t10 of V.querySelectorAll("[data-carousel-go-prev]")) t10.toggleAttribute("aria-disabled", !qt()), qt() ? t10.removeAttribute("tabindex") : t10.setAttribute("tabindex", "-1");
      for (const t10 of V.querySelectorAll("[data-carousel-go-next]")) t10.toggleAttribute("aria-disabled", !kt()), kt() ? t10.removeAttribute("tabindex") : t10.setAttribute("tabindex", "-1");
      let o9 = false;
      const s11 = null === (e10 = Z[_2]) || void 0 === e10 ? void 0 : e10.slides[0];
      s11 && (s11.downloadSrc || "image" === s11.type && s11.src) && (o9 = true);
      for (const t10 of V.querySelectorAll("[data-carousel-download]")) t10.toggleAttribute("aria-disabled", !o9);
    }
    function vt(t9) {
      var e10;
      t9 || (t9 = null === (e10 = Z[_2]) || void 0 === e10 ? void 0 : e10.slides[0]);
      const n11 = null == t9 ? void 0 : t9.el;
      if (n11) for (const e11 of n11.querySelectorAll("[data-slide-index]")) e11.innerHTML = t9.index + 1 + "";
    }
    function pt(t9) {
      var e10, n11, i8;
      if (!Z.length) return 0;
      const o9 = ht();
      let s11 = t9;
      q2 ? s11 -= Math.floor((t9 - (null === (e10 = Z[0]) || void 0 === e10 ? void 0 : e10.pos)) / o9) * o9 || 0 : s11 = t2(null === (n11 = Z[0]) || void 0 === n11 ? void 0 : n11.pos, t9, null === (i8 = Z[Z.length - 1]) || void 0 === i8 ? void 0 : i8.pos);
      const r7 = /* @__PURE__ */ new Map();
      let l8 = 0;
      for (const t10 of Z) {
        const e11 = Math.abs(t10.pos - s11), n12 = Math.abs(t10.pos - s11 - o9), i9 = Math.abs(t10.pos - s11 + o9), a7 = Math.min(e11, n12, i9);
        r7.set(l8, a7), l8++;
      }
      const c6 = r7.size > 0 ? [...r7.entries()].reduce((t10, e11) => e11[1] < t10[1] ? e11 : t10) : [_2, 0];
      return parseInt(c6[0]);
    }
    function gt() {
      return nt;
    }
    function mt() {
      return $;
    }
    function ht(t9 = true) {
      return K.length ? K.reduce((t10, e10) => t10 + e10.dim, 0) + (K.length - (q2 && t9 ? 0 : 1)) * nt : 0;
    }
    function bt(t9) {
      const e10 = ht(), n11 = mt();
      if (!e10 || !C || !n11) return [];
      const i8 = [];
      t9 = void 0 === t9 ? B2 : t9, q2 && (t9 -= Math.floor(t9 / e10) * e10 || 0);
      let o9 = 0;
      for (let s11 of K) {
        const r7 = (e11 = 0) => {
          i8.indexOf(s11) > -1 || (s11.pos = o9 - t9 + e11 || 0, s11.offset + e11 > t9 - s11.dim - D2 + 0.51 && s11.offset + e11 < t9 + n11 + I2 - 0.51 && i8.push(s11));
        };
        s11.offset = o9, q2 && (r7(e10), r7(-1 * e10)), r7(), o9 += s11.dim + nt;
      }
      return i8;
    }
    function yt(t9, e10) {
      const n11 = [];
      for (const e11 of Array.isArray(t9) ? t9 : [t9]) {
        const t10 = Et(Object.assign(Object.assign({}, e11), { isVirtual: true }));
        t10.el || (t10.el = document.createElement("div")), rt("createSlide", t10), n11.push(t10);
      }
      J.splice(void 0 === e10 ? J.length : e10, 0, ...n11), St();
      for (const t10 of n11) rt("addSlide", t10), xt(t10);
      return dt(W), n11;
    }
    function Et(t9) {
      return (t(t9) || t9 instanceof HTMLElement) && (t9 = { html: t9 }), Object.assign({ index: -1, el: void 0, class: "", isVirtual: true, dim: 0, pos: 0, offset: 0, html: "", src: "" }, t9);
    }
    function xt(t9) {
      let e10 = t9.el;
      if (!t9 || !e10) return;
      const n11 = t9.html ? t9.html instanceof HTMLElement ? t9.html : e2(t9.html) : void 0;
      n11 && (s3(n11, "f-html"), t9.htmlEl = n11, s3(e10, "has-html"), e10.append(n11), rt("contentReady", t9));
    }
    function Mt(t9) {
      if (!C || !t9) return;
      let e10 = t9.el;
      if (e10) {
        if (e10.setAttribute("index", t9.index + ""), e10.parentElement !== C) {
          let n11;
          s3(e10, R2.classes.slide), s3(e10, t9.class), Vt(t9);
          for (const e11 of J) if (e11.index > t9.index) {
            n11 = e11.el;
            break;
          }
          C.insertBefore(e10, n11 && C.contains(n11) ? n11 : null), rt("attachSlideEl", t9);
        }
        return vt(t9), e10;
      }
    }
    function wt(t9) {
      const e10 = null == t9 ? void 0 : t9.el;
      e10 && (e10.remove(), jt(e10), rt("detachSlideEl", t9));
    }
    function St() {
      for (let t9 = 0; t9 < J.length; t9++) {
        const e10 = J[t9], n11 = e10.el;
        n11 && (e10.index !== t9 && jt(n11), n11.setAttribute("index", `${t9}`)), e10.index = t9;
      }
    }
    function At() {
      var t9, n11, i8, o9, s11;
      if (!V || !C) return;
      k2 = it("rtl"), F2 = it("vertical"), z2 = F2 ? "height" : "width";
      const r7 = it("classes");
      if (s5(V, r7.isLTR, !k2), s5(V, r7.isRTL, k2), s5(V, r7.isHorizontal, !F2), s5(V, r7.isVertical, F2), s5(V, r7.hasAdaptiveHeight, it("adaptiveHeight")), $ = 0, D2 = 0, I2 = 0, nt = 0, C) {
        C.childElementCount || (C.style.display = "grid");
        const t10 = C.getBoundingClientRect();
        $ = C.getBoundingClientRect()[z2] || 0;
        const e10 = window.getComputedStyle(C);
        nt = parseFloat(e10.getPropertyValue("--f-carousel-gap")) || 0;
        "visible" === e10.getPropertyValue("overflow-" + (F2 ? "y" : "x")) && (D2 = Math.abs(t10[F2 ? "top" : "left"]), I2 = Math.abs(window[F2 ? "innerHeight" : "innerWidth"] - t10[F2 ? "bottom" : "right"])), C.style.display = "";
      }
      if (!$) return;
      const l8 = (function() {
        let t10 = 0;
        if (C) {
          let e10 = document.createElement("div");
          e10.style.display = "block", s3(e10, R2.classes.slide), C.appendChild(e10), t10 = e10.getBoundingClientRect()[z2], e10.remove(), e10 = void 0;
        }
        return t10;
      })();
      for (const n12 of K) {
        const i9 = n12.el;
        let o10 = 0;
        if (!n12.isVirtual && i9 && n(i9)) {
          let e10 = false;
          i9.parentElement && i9.parentElement === C || (C.appendChild(i9), e10 = true), o10 = i9.getBoundingClientRect()[z2], e10 && (null === (t9 = i9.parentElement) || void 0 === t9 || t9.removeChild(i9));
        } else o10 = l8;
        n12.dim = o10;
      }
      if (q2 = false, it("infinite")) {
        q2 = true;
        const t10 = ht();
        let e10 = $ + D2 + I2;
        for (let i9 = 0; i9 < K.length; i9++) {
          const o10 = (null === (n11 = K[i9]) || void 0 === n11 ? void 0 : n11.dim) + nt;
          if (t10 - o10 < e10 && t10 - o10 - e10 < o10) {
            q2 = false;
            break;
          }
        }
      }
      !(function() {
        var t10;
        if (!V) return;
        const e10 = mt(), n12 = ht(false);
        let i9 = it("slidesPerPage");
        i9 = "auto" === i9 ? 1 / 0 : parseFloat(i9 + ""), Z = [];
        let o10 = 0, s12 = 0;
        for (const n13 of K) (!Z.length || o10 + n13.dim - e10 > 0.05 || s12 >= i9) && (Z.push({ index: Z.length, slides: [], dim: 0, offset: 0, pos: 0 }), o10 = 0, s12 = 0), null === (t10 = Z[Z.length - 1]) || void 0 === t10 || t10.slides.push(n13), o10 += n13.dim + nt, s12++;
        const r8 = it("center"), l9 = it("fill");
        let c6 = 0;
        for (const t11 of Z) {
          t11.dim = (t11.slides.length - 1) * nt;
          for (const e11 of t11.slides) t11.dim += e11.dim;
          t11.offset = c6, t11.pos = c6, false !== r8 && (t11.pos -= 0.5 * (e10 - t11.dim)), l9 && !q2 && n12 > e10 && (t11.pos = t2(0, t11.pos, n12 - e10)), c6 += t11.dim + nt;
        }
        const d3 = [];
        let u6;
        for (const t11 of Z) {
          const e11 = Object.assign({}, t11);
          u6 && Math.abs(e11.pos - u6.pos) < 0.1 ? (u6.dim += e11.dim, u6.slides = [...u6.slides, ...e11.slides]) : (u6 = e11, e11.index = d3.length, d3.push(e11));
        }
        Z = d3, _2 = t2(0, _2, Z.length - 1);
      })(), X = (null === (i8 = Z[0]) || void 0 === i8 ? void 0 : i8.pos) || 0, Y = (null === (o9 = Z[Z.length - 1]) || void 0 === o9 ? void 0 : o9.pos) || 0, 0 === T ? (function() {
        var t10;
        L = void 0, _2 = it("initialPage");
        const e10 = it("initialSlide") || void 0;
        void 0 !== e10 && (_2 = Ft.getPageIndex(e10) || 0), _2 = t2(0, _2, Z.length - 1), B2 = (null === (t10 = Z[_2]) || void 0 === t10 ? void 0 : t10.pos) || 0, G = B2;
      })() : G = (null === (s11 = Z[_2 || 0]) || void 0 === s11 ? void 0 : s11.pos) || 0, rt("refresh"), ft();
    }
    function jt(t9) {
      if (!t9 || !n(t9)) return;
      const n11 = parseInt(t9.getAttribute("index") || "-1");
      let i8 = "";
      for (const e10 of Array.from(t9.classList)) {
        const t10 = e10.match(/^f-(\w+)(Out|In)$/);
        t10 && t10[1] && (i8 = t10[1] + "");
      }
      if (!t9 || !i8) return;
      const o9 = [`f-${i8}Out`, `f-${i8}In`, "to-prev", "to-next", "from-prev", "from-next"];
      t9.removeEventListener("animationend", Pt), s4(t9, o9.join(" ")), Q.delete(n11);
    }
    function Lt() {
      if (!C) return;
      const t9 = Q.size > 0;
      for (const t10 of K) jt(t10.el);
      Q.clear(), t9 && Dt();
    }
    function Pt(t9) {
      var e10;
      "f-" === (null === (e10 = t9.animationName) || void 0 === e10 ? void 0 : e10.substring(0, 2)) && (jt(t9.target), Q.size || (s4(V, "in-transition"), !N2 && Math.abs(Ft.getPosition(true) - G) < 0.5 && (N2 = true, rt("settle"))), Dt());
    }
    function Tt(t9) {
      Ot(t9), rt("click", t9);
    }
    function Ot(t9) {
      var e10;
      if (t9.defaultPrevented) return;
      const n11 = t9.composedPath()[0];
      if (n11.closest("[data-carousel-go-prev]")) return m2(t9), void Ft.prev();
      if (n11.closest("[data-carousel-go-next]")) return m2(t9), void Ft.next();
      const i8 = n11.closest("[data-carousel-go-to]");
      if (i8) return m2(t9), void Ft.goTo(parseFloat(i8.dataset.carouselGoTo || "") || 0);
      if (n11.closest("[data-carousel-download]")) {
        m2(t9);
        const n12 = null === (e10 = Z[_2]) || void 0 === e10 ? void 0 : e10.slides[0];
        if (n12 && (n12.downloadSrc || "image" === n12.type && n12.src)) {
          const t10 = n12.downloadFilename, e11 = document.createElement("a"), i9 = n12.downloadSrc || n12.src || "";
          e11.href = i9, e11.target = "_blank", e11.download = t10 || i9, e11.click();
        }
        return;
      }
    }
    function Rt(t9) {
      var e10;
      const n11 = t9.el;
      n11 && (null === (e10 = n11.querySelector(".f-spinner")) || void 0 === e10 || e10.remove());
    }
    function Ht(t9) {
      var e10;
      const n11 = t9.el;
      n11 && (null === (e10 = n11.querySelector(".f-html.is-error")) || void 0 === e10 || e10.remove(), s4(n11, "has-error"));
    }
    function Vt(t9) {
      var e10;
      t9 || (t9 = null === (e10 = Z[_2]) || void 0 === e10 ? void 0 : e10.slides[0]);
      const i8 = null == t9 ? void 0 : t9.el;
      if (!i8) return;
      let o9 = it("formatCaption", t9);
      void 0 === o9 && (o9 = t9.caption), o9 = o9 || "";
      const s11 = it("captionEl");
      if (s11 && s11 instanceof HTMLElement) {
        if (t9.index !== _2) return;
        if (t(o9) && (s11.innerHTML = ot(o9 + "")), o9 instanceof HTMLElement) {
          if (o9.parentElement === s11) return;
          s11.innerHTML = "", o9.parentElement && (o9 = o9.cloneNode(true)), s11.append(o9);
        }
        return;
      }
      if (!o9) return;
      let r7 = t9.captionEl || i8.querySelector(".f-caption");
      !r7 && o9 instanceof HTMLElement && o9.classList.contains("f-caption") && (r7 = o9), r7 || (r7 = document.createElement("div"), s3(r7, "f-caption"), t(o9) ? r7.innerHTML = ot(o9 + "") : o9 instanceof HTMLElement && (o9.parentElement && (o9 = o9.cloneNode(true)), r7.append(o9)));
      const l8 = `f-caption-${E2}_${t9.index}`;
      r7.setAttribute("id", l8), r7.dataset.selectable = "true", s3(i8, "has-caption"), i8.setAttribute("aria-labelledby", l8), t9.captionEl = r7, i8.insertAdjacentElement("beforeend", r7);
    }
    function Ct(e10, i8 = {}) {
      var o9, r7;
      let { transition: l8, tween: u6 } = Object.assign({ transition: R2.transition, tween: R2.tween }, i8 || {});
      if (!V || !A) return;
      const f3 = Z.length;
      if (!f3) return;
      if ((function(t9, e11) {
        var i9, o10, s11;
        if (!(V && $ && A && e11 && t(e11) && "tween" !== e11)) return false;
        for (const t10 of U) if ($ - t10.dim > 0.5) return false;
        if (D2 > 0.5 || I2 > 0.5) return;
        const r8 = Z.length;
        let l9 = t9 > _2 ? 1 : -1;
        t9 = q2 ? (t9 % r8 + r8) % r8 : t2(0, t9, r8 - 1), k2 && (l9 *= -1);
        const u7 = null === (i9 = Z[_2]) || void 0 === i9 ? void 0 : i9.slides[0], f4 = null == u7 ? void 0 : u7.index, v5 = null === (o10 = Z[t9]) || void 0 === o10 ? void 0 : o10.slides[0], p3 = null == v5 ? void 0 : v5.index, g3 = null === (s11 = Z[t9]) || void 0 === s11 ? void 0 : s11.pos;
        if (void 0 === p3 || void 0 === f4 || f4 === p3 || B2 === g3 || Math.abs($ - ((null == v5 ? void 0 : v5.dim) || 0)) > 1) return false;
        N2 = false, A.pause(), Lt(), s3(V, "in-transition"), B2 = G = g3;
        const m4 = Mt(u7), h4 = Mt(v5);
        return ut(), m4 && (Q.add(f4), m4.style.transform = "", m4.addEventListener("animationend", Pt), s4(m4, R2.classes.isSelected), m4.inert = false, s3(m4, `f-${e11}Out to-${l9 > 0 ? "next" : "prev"}`)), h4 && (Q.add(p3), h4.style.transform = "", h4.addEventListener("animationend", Pt), s3(h4, R2.classes.isSelected), h4.inert = false, s3(h4, `f-${e11}In from-${l9 > 0 ? "prev" : "next"}`)), Dt(), true;
      })(e10, l8)) return;
      e10 = q2 ? (e10 % f3 + f3) % f3 : t2(0, e10, f3 - 1);
      const v4 = (null === (o9 = Z[e10 || 0]) || void 0 === o9 ? void 0 : o9.pos) || 0;
      G = v4;
      const p2 = A.isRunning() ? A.getEndValues().pos : B2;
      if (Math.abs(G - p2) < 1) return B2 = G, _2 !== e10 && (Vt(), L = _2, _2 = e10, ft(), vt(), rt("change", _2, L)), Dt(), void (N2 || (N2 = true, rt("settle")));
      if (A.pause(), Lt(), q2) {
        const t9 = ht(), e11 = Math.floor((p2 - (null === (r7 = Z[0]) || void 0 === r7 ? void 0 : r7.pos)) / t9) || 0, n11 = G + e11 * t9;
        G = [n11 + t9, n11, n11 - t9].reduce(function(t10, e12) {
          return Math.abs(e12 - p2) < Math.abs(t10 - p2) ? e12 : t10;
        });
      }
      false !== l8 && t3(u6) ? A.spring(r3({}, R2.tween, u6)).from({ pos: B2 }).to({ pos: G }).start() : (B2 = G, ut(), Dt(), N2 || (N2 = true, rt("settle")));
    }
    function $t(t9) {
      var e10;
      let n11 = B2;
      if (q2 && true !== t9) {
        const t10 = ht();
        n11 -= (Math.floor((B2 - (null === (e10 = Z[0]) || void 0 === e10 ? void 0 : e10.pos) || 0) / t10) || 0) * t10;
      }
      return n11;
    }
    function Dt() {
      var t9;
      if (!V || !C) return;
      U = bt();
      const e10 = /* @__PURE__ */ new Set(), n11 = [], i8 = Z[_2], s11 = R2.setTransform;
      let l8;
      for (const o9 of K) {
        const s12 = Q.has(o9.index), r7 = U.indexOf(o9) > -1, a7 = (null === (t9 = null == i8 ? void 0 : i8.slides) || void 0 === t9 ? void 0 : t9.indexOf(o9)) > -1;
        if (o9.isVirtual && !s12 && !r7) continue;
        let c6 = Mt(o9);
        if (c6 && (n11.push(o9), a7 && e10.add(c6), it("adaptiveHeight") && a7)) {
          const t10 = (c6.lastElementChild || c6).getBoundingClientRect().height;
          l8 = null == l8 ? t10 : Math.max(l8, t10);
        }
      }
      C && l8 && (C.style.height = `${l8}px`), [...e7(C, `.${R2.classes.slide}`)].forEach((t10) => {
        s5(t10, R2.classes.isSelected, e10.has(t10));
        const n12 = J[parseInt(t10.getAttribute("index") || "-1")];
        if (!n12) return t10.remove(), void jt(t10);
        const i9 = Q.has(n12.index), o9 = U.indexOf(n12) > -1;
        if (n12.isVirtual && !i9 && !o9) return void wt(n12);
        if (t10.inert = !o9, false === s11) return;
        let l9 = n12.pos ? Math.round(1e4 * n12.pos) / 1e4 : 0, a7 = 0, c6 = 0, d3 = 0, f3 = 0;
        i9 || (a7 = F2 ? 0 : k2 ? -1 * l9 : l9, c6 = F2 ? l9 : 0, d3 = t5(a7, 0, n12.dim, 0, 100), f3 = t5(c6, 0, n12.dim, 0, 100)), s11 instanceof Function && !i9 ? s11(Ft, n12, { x: a7, y: c6, xPercent: d3, yPercent: f3 }) : t10.style.transform = a7 || c6 ? `translate3d(${d3}%, ${f3}%,0)` : "";
      }), rt("render", n11);
    }
    function It() {
      null == V || V.removeEventListener("click", Tt), document.removeEventListener("mousemove", at), Q.clear(), null == j2 || j2.disconnect(), j2 = void 0;
      for (const t9 of J) {
        let n11 = t9.el;
        n11 && n(n11) && (t9.state = void 0, Rt(t9), Ht(t9), t9.isVirtual ? (wt(t9), t9.el = void 0) : (jt(n11), n11.style.transform = "", C && !C.contains(n11) && C.appendChild(n11)));
      }
      for (const t9 of Object.values(H2)) null == t9 || t9.destroy();
      H2 = {}, null == S2 || S2.destroy(), S2 = void 0, null == A || A.destroy(), A = void 0;
      for (const [t9, e10] of Object.entries(R2.classes || {})) "container" !== t9 && s4(V, e10);
      s4(C, "is-draggable");
    }
    function qt() {
      return q2 || _2 > 0;
    }
    function kt() {
      return q2 || _2 < Z.length - 1;
    }
    const Ft = { add: function(t9, e10) {
      var n11;
      let i8 = B2;
      const o9 = _2, s11 = ht(), r7 = (null == A ? void 0 : A.isRunning()) ? A.getEndValues().pos : B2, l8 = s11 && Math.floor((r7 - ((null === (n11 = Z[0]) || void 0 === n11 ? void 0 : n11.pos) || 0)) / s11) || 0;
      return yt(t9, e10), dt(W), At(), A && s11 && (o9 === _2 && (i8 -= l8 * s11), i8 === G ? B2 = G : A.spring({ clamp: true, mass: 1, tension: 300, friction: 25, restDelta: 1, restSpeed: 1 }).from({ pos: i8 }).to({ pos: G }).start()), Dt(), Ft;
    }, canGoPrev: qt, canGoNext: kt, destroy: function() {
      return rt("destroy"), window.removeEventListener("resize", lt), It(), st.clear(), V = null, Z = [], J = [], R2 = Object.assign({}, h2), H2 = {}, K = [], P = void 0, W = "*", T = 2, Ft;
    }, emit: rt, filter: function(t9 = "*") {
      return dt(t9), At(), B2 = t2(X, B2, Y), Dt(), rt("filter", t9), Ft;
    }, getContainer: function() {
      return V;
    }, getGapDim: gt, getGestures: function() {
      return S2;
    }, getLastMouseMove: function() {
      return b2;
    }, getOption: function(t9) {
      return it(t9);
    }, getOptions: function() {
      return R2;
    }, getPage: function() {
      return Z[_2];
    }, getPageIndex: function(t9) {
      if (void 0 !== t9) {
        for (const e10 of Z || []) for (const n11 of e10.slides) if (n11.index === t9) return e10.index;
        return -1;
      }
      return _2;
    }, getPageIndexFromPosition: pt, getPageProgress: function(t9, e10) {
      var n11;
      void 0 === t9 && (t9 = _2);
      const i8 = Z[t9];
      if (!i8) return t9 > _2 ? -1 : 1;
      const o9 = ht(), s11 = gt();
      let r7 = i8.pos, l8 = $t();
      if (q2 && true !== e10) {
        const t10 = Math.floor((l8 - (null === (n11 = Z[0]) || void 0 === n11 ? void 0 : n11.pos)) / o9) || 0;
        l8 -= t10 * o9, r7 = [r7 + o9, r7, r7 - o9].reduce(function(t11, e11) {
          return Math.abs(e11 - l8) < Math.abs(t11 - l8) ? e11 : t11;
        });
      }
      return (l8 - r7) / (i8.dim + s11) || 0;
    }, getPageVisibility: function(t9) {
      var e10;
      void 0 === t9 && (t9 = _2);
      const n11 = Z[t9];
      if (!n11) return t9 > _2 ? -1 : 1;
      const i8 = $t(), o9 = mt();
      let s11 = n11.pos;
      if (q2) {
        const t10 = ht(), n12 = s11 + (Math.floor((i8 - (null === (e10 = Z[0]) || void 0 === e10 ? void 0 : e10.pos)) / t10) || 0) * t10;
        s11 = [n12 + t10, n12, n12 - t10].reduce(function(t11, e11) {
          return Math.abs(e11 - i8) < Math.abs(t11 - i8) ? e11 : t11;
        });
      }
      return s11 > i8 && s11 + n11.dim < i8 + o9 ? 1 : s11 < i8 ? (s11 + n11.dim - i8) / n11.dim || 0 : s11 + n11.dim > i8 + o9 && (i8 + o9 - s11) / n11.dim || 0;
    }, getPages: function() {
      return Z;
    }, getPlugins: function() {
      return H2;
    }, getPosition: $t, getSlides: function() {
      return J;
    }, getState: function() {
      return T;
    }, getTotalSlideDim: ht, getTween: function() {
      return A;
    }, getViewport: function() {
      return C;
    }, getViewportDim: mt, getVisibleSlides: function(t9) {
      return void 0 === t9 ? U : bt(t9);
    }, goTo: Ct, hasNavigated: function() {
      return void 0 !== L;
    }, hideError: Ht, hideLoading: Rt, init: function() {
      if (!g2 || !n(g2)) throw new Error("No Element found");
      return 0 !== T && (It(), T = 0), V = g2, O2 = M4, window.removeEventListener("resize", lt), O2.breakpoints && window.addEventListener("resize", lt), lt(), Ft;
    }, isInfinite: function() {
      return q2;
    }, isInTransition: function() {
      return Q.size > 0;
    }, isRTL: function() {
      return k2;
    }, isSettled: function() {
      return N2;
    }, isVertical: function() {
      return F2;
    }, localize: ot, next: function(t9 = {}) {
      return Ct(_2 + 1, t9), Ft;
    }, off: function(t9, e10) {
      for (const n11 of t9 instanceof Array ? t9 : [t9]) st.has(n11) && st.set(n11, st.get(n11).filter((t10) => t10 !== e10));
      return Ft;
    }, on: function(t9, e10) {
      for (const n11 of t9 instanceof Array ? t9 : [t9]) st.set(n11, [...st.get(n11) || [], e10]);
      return Ft;
    }, prev: function(t9 = {}) {
      return Ct(_2 - 1, t9), Ft;
    }, reInit: function(e10 = {}, n11) {
      return It(), T = 0, P = void 0, W = "*", M4 = e10, O2 = e10, t3(n11) && (w3 = n11), lt(), Ft;
    }, remove: function(t9) {
      void 0 === t9 && (t9 = J.length - 1);
      const e10 = J[t9];
      return e10 && (rt("removeSlide", e10), e10.el && (jt(e10.el), e10.el.remove(), e10.el = void 0), J.splice(t9, 1), dt(W), At(), B2 = t2(X, B2, Y), Dt()), Ft;
    }, setPosition: function(t9) {
      B2 = t9, ut(), Dt();
    }, showError: function(t9, e10) {
      if (1 === T) {
        Rt(t9), Ht(t9);
        const n11 = t9.el;
        if (n11) {
          const i8 = document.createElement("div");
          s3(i8, "f-html"), s3(i8, "is-error"), i8.innerHTML = ot(e10 || "<p>{{ERROR}}</p>"), t9.htmlEl = i8, s3(n11, "has-html has-error"), n11.insertAdjacentElement("afterbegin", i8), rt("contentReady", t9);
        }
      }
      return Ft;
    }, showLoading: function(t9) {
      const e10 = t9.el, n11 = null == e10 ? void 0 : e10.querySelector(".f-spinner");
      if (!e10 || n11) return Ft;
      const i8 = it("spinnerTpl"), o9 = e2(i8);
      return o9 && (s3(o9, "f-spinner"), e10.insertAdjacentElement("beforeend", o9)), Ft;
    }, version: "6.1.14" };
    return Ft;
  };
  x2.l10n = { en_EN: o3 }, x2.getDefaults = () => h2;

  // node_modules/@fancyapps/ui/dist/utils/scrollLock.js
  var t6 = (t9 = true, e10 = "--f-scrollbar-compensate", s11 = "--f-body-margin", o9 = "hide-scrollbar") => {
    const n11 = document, r7 = n11.body, l8 = n11.documentElement;
    if (t9) {
      if (r7.classList.contains(o9)) return;
      let t10 = window.innerWidth - l8.getBoundingClientRect().width;
      t10 < 0 && (t10 = 0), l8.style.setProperty(e10, `${t10}px`);
      const n12 = parseFloat(window.getComputedStyle(r7).marginRight);
      n12 && r7.style.setProperty(s11, `${n12}px`), r7.classList.add(o9);
    } else r7.classList.remove(o9), r7.style.setProperty(s11, ""), n11.documentElement.style.setProperty(e10, "");
  };

  // node_modules/@fancyapps/ui/dist/utils/canUseDOM.js
  function e8() {
    return !("undefined" == typeof window || !window.document || !window.document.createElement);
  }

  // node_modules/@fancyapps/ui/dist/utils/replaceAll.js
  var n5 = function(n11 = "", t9 = "", o9 = "") {
    return n11.split(t9).join(o9);
  };

  // node_modules/@fancyapps/ui/dist/carousel/carousel.zoomable.js
  var a3 = { tpl: (t9) => `<img class="f-panzoom__content" 
    ${t9.srcset ? 'data-lazy-srcset="{{srcset}}"' : ""} 
    ${t9.sizes ? 'data-lazy-sizes="{{sizes}}"' : ""} 
    data-lazy-src="{{src}}" alt="{{alt}}" />` };
  var s6 = () => {
    let s11;
    function l8(e10, o9) {
      const n11 = null == s11 ? void 0 : s11.getOptions().Zoomable;
      let i8 = (t3(n11) ? Object.assign(Object.assign({}, a3), n11) : a3)[e10];
      return i8 && "function" == typeof i8 && o9 ? i8(o9) : i8;
    }
    function c6() {
      s11 && false !== s11.getOptions().Zoomable && (s11.on("addSlide", f3), s11.on("removeSlide", u6), s11.on("attachSlideEl", g2), s11.on("click", d3), s11.on("change", r7), s11.on("ready", r7));
    }
    function r7() {
      m4();
      const t9 = (null == s11 ? void 0 : s11.getVisibleSlides()) || [];
      if (t9.length > 1 || "slide" === (null == s11 ? void 0 : s11.getOption("transition"))) for (const e10 of t9) {
        const t10 = e10.panzoomRef;
        t10 && ((null == s11 ? void 0 : s11.getPage().slides) || []).indexOf(e10) < 0 && t10.execute(v.ZoomTo, Object.assign({}, t10.getStartPosition()));
      }
    }
    function d3(t9, e10) {
      const o9 = e10.target;
      o9 && !e10.defaultPrevented && o9.dataset.panzoomAction && p2(o9.dataset.panzoomAction);
    }
    function f3(t9, i8) {
      const a7 = i8.el;
      if (!s11 || !a7 || i8.panzoomRef) return;
      const c7 = i8.src || i8.lazySrc || "", r8 = i8.alt || i8.caption || `Image #${i8.index}`, d4 = i8.srcset || i8.lazySrcset || "", f4 = i8.sizes || i8.lazySizes || "";
      if (c7 && t(c7) && !i8.html && (!i8.type || "image" === i8.type)) {
        i8.type = "image", i8.thumbSrc = i8.thumbSrc || c7;
        let t10 = l8("tpl", i8);
        t10 = n5(t10, "{{src}}", c7 + ""), t10 = n5(t10, "{{srcset}}", d4 + ""), t10 = n5(t10, "{{sizes}}", f4 + ""), a7.insertAdjacentHTML("afterbegin", t10);
      }
      const u7 = a7.querySelector(".f-panzoom__content");
      if (!u7) return;
      u7.setAttribute("alt", r8 + "");
      const g3 = i8.width && "auto" !== i8.width ? parseFloat(i8.width + "") : "auto", p3 = i8.height && "auto" !== i8.height ? parseFloat(i8.height + "") : "auto", z2 = S(a7, Object.assign({ width: g3, height: p3, classes: { container: "f-zoomable" }, event: () => null == s11 ? void 0 : s11.getLastMouseMove(), spinnerTpl: () => (null == s11 ? void 0 : s11.getOption("spinnerTpl")) || "" }, l8("Panzoom")));
      z2.on("*", (t10, e10, ...o9) => {
        s11 && ("loading" === e10 && (i8.state = 0), "loaded" === e10 && (i8.state = 1), "error" === e10 && (i8.state = 2, null == s11 || s11.showError(i8, "{{IMAGE_ERROR}}")), s11.emit(`panzoom:${e10}`, i8, ...o9), "loading" === e10 && s11.emit("contentLoading", i8), "ready" === e10 && s11.emit("contentReady", i8), i8.index === (null == s11 ? void 0 : s11.getPageIndex()) && m4());
      }), i8.panzoomRef = z2;
    }
    function u6(t9, e10) {
      e10.panzoomRef && (e10.panzoomRef.destroy(), e10.panzoomRef = void 0);
    }
    function g2(t9, e10) {
      const o9 = e10.panzoomRef;
      if (o9) switch (o9.getState()) {
        case 0:
          o9.init();
          break;
        case 3:
          o9.execute(v.ZoomTo, Object.assign(Object.assign({}, o9.getStartPosition()), { velocity: 0 }));
      }
    }
    function m4() {
      var t9, e10;
      const o9 = (null == s11 ? void 0 : s11.getContainer()) || void 0, n11 = null === (e10 = null === (t9 = null == s11 ? void 0 : s11.getPage()) || void 0 === t9 ? void 0 : t9.slides[0]) || void 0 === e10 ? void 0 : e10.panzoomRef;
      if (o9) if (n11) n11.updateControls(o9);
      else for (const t10 of o9.querySelectorAll("[data-panzoom-action]") || []) t10.setAttribute("aria-disabled", ""), t10.setAttribute("tabindex", "-1");
    }
    function p2(t9, ...e10) {
      var o9;
      null === (o9 = null == s11 ? void 0 : s11.getPage().slides[0].panzoomRef) || void 0 === o9 || o9.execute(t9, ...e10);
    }
    return { init: function(t9) {
      s11 = t9, s11.on("initPlugins", c6);
    }, destroy: function() {
      if (s11) {
        s11.off("initPlugins", c6), s11.off("addSlide", f3), s11.off("removeSlide", u6), s11.off("attachSlideEl", g2), s11.off("click", d3), s11.off("change", r7), s11.off("ready", r7);
        for (const t9 of s11.getSlides()) u6(0, t9);
      }
      s11 = void 0;
    }, execute: p2 };
  };

  // node_modules/@fancyapps/ui/dist/carousel/carousel.sync.js
  var e9 = { syncOnChange: false, syncOnClick: true, syncOnHover: false };
  var i3 = () => {
    let i8, t9;
    function o9() {
      const t10 = null == i8 ? void 0 : i8.getOptions().Sync;
      return t3(t10) ? Object.assign(Object.assign({}, e9), t10) : e9;
    }
    function s11(n11) {
      var e10, s12, l9;
      i8 && n11 && (t9 = n11, i8.getOptions().classes = Object.assign(Object.assign({}, i8.getOptions().classes), { isSelected: "" }), i8.getOptions().initialSlide = (null === (s12 = null === (e10 = t9.getPage()) || void 0 === e10 ? void 0 : e10.slides[0]) || void 0 === s12 ? void 0 : s12.index) || 0, o9().syncOnChange && i8.on("change", c6), o9().syncOnClick && i8.on("click", g2), o9().syncOnHover && (null === (l9 = i8.getViewport()) || void 0 === l9 || l9.addEventListener("mouseover", u6)), (function() {
        if (!i8 || !t9) return;
        i8.on("ready", d3), i8.on("refresh", a7), t9.on("change", r7), t9.on("filter", f3);
      })());
    }
    function l8() {
      const n11 = o9().target;
      i8 && n11 && s11(n11);
    }
    function d3() {
      v4();
    }
    function c6() {
      var n11;
      if (i8 && t9) {
        const e10 = (null === (n11 = i8.getPage()) || void 0 === n11 ? void 0 : n11.slides) || [], o10 = t9.getPageIndex(e10[0].index || 0);
        o10 > -1 && t9.goTo(o10, i8.hasNavigated() ? void 0 : { tween: false, transition: false }), v4();
      }
    }
    function r7() {
      var n11;
      if (i8 && t9) {
        const e10 = i8.getPageIndex((null === (n11 = t9.getPage()) || void 0 === n11 ? void 0 : n11.slides[0].index) || 0);
        e10 > -1 && i8.goTo(e10, t9.hasNavigated() ? void 0 : { tween: false, transition: false }), v4();
      }
    }
    function g2(n11, e10) {
      var o10;
      if (!i8 || !t9) return;
      if (null === (o10 = i8.getTween()) || void 0 === o10 ? void 0 : o10.isRunning()) return;
      const s12 = null == i8 ? void 0 : i8.getOptions().classes.slide;
      if (!s12) return;
      const l9 = e10.target.closest(`.${s12}`);
      if (l9) {
        const n12 = parseInt(l9.getAttribute("index") || "") || 0, e11 = t9.getPageIndex(n12);
        t9.goTo(e11);
      }
    }
    function u6(n11) {
      i8 && g2(0, n11);
    }
    function a7() {
      var n11;
      if (i8 && t9) {
        const e10 = i8.getPageIndex((null === (n11 = t9.getPage()) || void 0 === n11 ? void 0 : n11.slides[0].index) || 0);
        e10 > -1 && i8.goTo(e10, { tween: false, transition: false }), v4();
      }
    }
    function f3(n11, e10) {
      i8 && t9 && (i8.filter(e10), r7());
    }
    function v4() {
      var n11, e10, o10;
      if (!t9) return;
      const s12 = (null === (e10 = null === (n11 = t9.getPage()) || void 0 === n11 ? void 0 : n11.slides[0]) || void 0 === e10 ? void 0 : e10.index) || 0;
      for (const n12 of (null == i8 ? void 0 : i8.getSlides()) || []) null === (o10 = n12.el) || void 0 === o10 || o10.classList.toggle("is-selected", n12.index === s12);
    }
    return { init: function(n11) {
      i8 = n11, i8.on("initSlides", l8);
    }, destroy: function() {
      var n11;
      null == i8 || i8.off("ready", d3), null == i8 || i8.off("refresh", a7), null == i8 || i8.off("change", c6), null == i8 || i8.off("click", g2), null === (n11 = null == i8 ? void 0 : i8.getViewport()) || void 0 === n11 || n11.removeEventListener("mouseover", u6), null == t9 || t9.off("change", r7), null == t9 || t9.off("filter", f3), t9 = void 0, null == i8 || i8.off("initSlides", l8), i8 = void 0;
    }, getTarget: function() {
      return t9;
    } };
  };

  // node_modules/@fancyapps/ui/dist/carousel/carousel.lazyload.js
  var s7 = { showLoading: true, preload: 1 };
  var l2 = "is-lazyloading";
  var o4 = "is-lazyloaded";
  var n6 = "has-lazyerror";
  var i4 = () => {
    let i8;
    function d3() {
      const e10 = null == i8 ? void 0 : i8.getOptions().Lazyload;
      return t3(e10) ? Object.assign(Object.assign({}, s7), e10) : s7;
    }
    function r7(t9) {
      var s11;
      const r8 = t9.el;
      if (!r8) return;
      const c7 = d3(), u6 = "[data-lazy-src],[data-lazy-srcset],[data-lazy-bg]", f3 = Array.from(r8.querySelectorAll(u6));
      r8.matches(u6) && f3.push(r8);
      for (const d4 of f3) {
        const r9 = d4.dataset.lazySrc, u7 = d4.dataset.lazySrcset, f4 = d4.dataset.lazySizes, y3 = d4.dataset.lazyBg, z2 = (d4 instanceof HTMLImageElement || d4 instanceof HTMLSourceElement) && (r9 || u7), g2 = !!y3;
        if (!z2 && !g2) continue;
        const m4 = r9 || u7 || y3;
        if (m4) {
          if (z2) {
            const y4 = null === (s11 = d4.parentElement) || void 0 === s11 ? void 0 : s11.classList.contains("f-panzoom__wrapper");
            c7.showLoading && (null == i8 || i8.showLoading(t9)), d4.addEventListener("load", () => {
              null == i8 || i8.hideLoading(t9), s4(d4, n6), d4 instanceof HTMLImageElement ? d4.decode().finally(() => {
                s4(d4, l2), s3(d4, o4);
              }).catch(() => {
              }) : (s4(d4, l2), s3(d4, o4)), y4 || null == i8 || i8.emit("lazyLoad:loaded", t9, d4, m4);
            }), d4.addEventListener("error", () => {
              null == i8 || i8.hideLoading(t9), s4(d4, l2), s3(d4, n6), y4 || null == i8 || i8.emit("lazyLoad:error", t9, d4, m4);
            }), d4.classList.add("f-lazyload"), d4.classList.add(l2), y4 || null == i8 || i8.emit("lazyLoad:load", t9, d4, m4), r9 && (d4.src = r9), u7 && (d4.srcset = u7), f4 && (d4.sizes = f4);
          } else g2 && (d4.style.backgroundImage = `url('${y3}')`);
          delete d4.dataset.lazySrc, delete d4.dataset.lazySrcset, delete d4.dataset.lazySizes, delete d4.dataset.lazyBg;
        }
      }
    }
    function c6() {
      if (!i8) return;
      const e10 = [...i8.getVisibleSlides()], t9 = d3().preload;
      if (t9 > 0) {
        const a7 = i8.getPosition(), s11 = i8.getViewportDim();
        e10.push(...i8.getVisibleSlides(a7 + s11 * t9), ...i8.getVisibleSlides(a7 - s11 * t9));
      }
      for (const t10 of e10) r7(t10);
    }
    return { init: function(e10) {
      i8 = e10, i8.on("render", c6);
    }, destroy: function() {
      null == i8 || i8.off("render", c6), i8 = void 0;
    } };
  };

  // node_modules/@fancyapps/ui/dist/carousel/carousel.arrows.js
  var i5 = '<svg width="24" height="24" viewBox="0 0 24 24" tabindex="-1">';
  var r4 = "</svg>";
  var s8 = { prevTpl: i5 + '<path d="M15 3l-9 9 9 9"></path>' + r4, nextTpl: i5 + '<path d="M9 3l9 9-9 9"></path>' + r4 };
  var l3 = () => {
    let i8, r7, l8;
    function a7(o9) {
      const r8 = (function() {
        const t9 = null == i8 ? void 0 : i8.getOptions().Arrows;
        return t3(t9) ? Object.assign(Object.assign({}, s8), t9) : s8;
      })(), l9 = `<button data-carousel-go-${o9} tabindex="0" class="f-button is-arrow is-${o9}" title="{{${o9.toUpperCase()}}}">` + r8[`${o9}Tpl`] + "</button>", a8 = e2(i8.localize(l9)) || void 0;
      return a8 && s3(a8, r8[`${o9}Class`]), a8;
    }
    function u6() {
      var t9;
      null == r7 || r7.remove(), r7 = void 0, null == l8 || l8.remove(), l8 = void 0, null === (t9 = null == i8 ? void 0 : i8.getContainer()) || void 0 === t9 || t9.classList.remove("has-arrows");
    }
    function c6() {
      i8 && false !== i8.getOptions().Arrows && i8.getPages().length > 1 ? (!(function() {
        if (!i8) return;
        const t9 = i8.getViewport();
        t9 && (r7 || (r7 = a7("prev"), r7 && t9.insertAdjacentElement("beforebegin", r7)), l8 || (l8 = a7("next"), l8 && t9.insertAdjacentElement("afterend", l8)), s5(i8.getContainer(), "has-arrows", true));
      })(), i8 && (null == r7 || r7.toggleAttribute("aria-disabled", !i8.canGoPrev()), null == l8 || l8.toggleAttribute("aria-disabled", !i8.canGoNext()))) : u6();
    }
    return { init: function(t9) {
      i8 = t9.on(["change", "refresh"], c6);
    }, destroy: function() {
      u6(), null == i8 || i8.off(["change", "refresh"], c6), i8 = void 0;
    } };
  };

  // node_modules/@fancyapps/ui/dist/shared/buttons.js
  var t7 = '<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/>';
  var M2 = '<g><line x1="11" y1="8" x2="11" y2="14"></line></g>' + t7;
  var o5 = { moveLeft: ["moveLeft", "MOVE_LEFT", '<path d="M5 12h14M5 12l6 6M5 12l6-6"/>'], moveRight: ["moveRight", "MOVE_RIGHT", '<path d="M5 12h14M13 18l6-6M13 6l6 6"/>'], moveUp: ["moveUp", "MOVE_UP", '<path d="M12 5v14M18 11l-6-6M6 11l6-6"/>'], moveDown: ["moveDown", "MOVE_DOWN", '<path d="M12 5v14M18 13l-6 6M6 13l6 6"/>'], zoomOut: ["zoomOut", "ZOOM_OUT", t7], zoomIn: ["zoomIn", "ZOOM_IN", M2], toggleFull: ["toggleFull", "TOGGLE_FULL", M2], iterateZoom: ["iterateZoom", "ITERATE_ZOOM", M2], toggle1to1: ["toggleFull", "TOGGLE_FULL", '<path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/>'], rotateCCW: ["rotateCCW", "ROTATE_CCW", '<path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/>'], rotateCW: ["rotateCW", "ROTATE_CW", '<path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/>'], flipX: ["flipX", "FLIP_X", '<path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/>'], flipY: ["flipY", "FLIP_Y", '<path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/>'], reset: ["reset", "RESET", '<path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>'], toggleFS: ["toggleFS", "TOGGLE_FS", '<g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g>'] };
  var v2 = {};
  for (const t9 of Object.keys(o5)) {
    const M4 = o5[t9];
    v2[t9] = { tpl: `<button data-panzoom-action="${M4[0]}" class="f-button" title="{{${M4[1]}}}"><svg>${M4[2]}</svg></button>` };
  }

  // node_modules/@fancyapps/ui/dist/carousel/carousel.toolbar.js
  var a4;
  !(function(t9) {
    t9.Left = "left", t9.middle = "middle", t9.right = "right";
  })(a4 || (a4 = {}));
  var r5 = Object.assign({ counter: { tpl: '<div class="f-counter"><span data-carousel-page></span>/<span data-carousel-pages></span></div>' }, download: { tpl: '<button data-carousel-download class="f-button" title="{{DOWNLOAD}}"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></button>' }, autoplay: { tpl: '<button data-autoplay-action="toggle" class="f-button" title="{{TOGGLE_AUTOPLAY}}"><svg><g><path d="M5 3.5 19 12 5 20.5Z"/></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>' }, thumbs: { tpl: '<button data-thumbs-action="toggle" class="f-button" title="{{TOGGLE_THUMBS}}"><svg><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1M9 21h1M14 21h1M19 21h1"/></svg></button>' } }, v2);
  var u3 = { absolute: false, display: { left: [], middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY", "reset"], right: [] }, enabled: "auto", items: {} };
  var c3 = () => {
    let a7, c6;
    function d3(e10) {
      const o9 = null == a7 ? void 0 : a7.getOptions().Toolbar;
      let n11 = (t3(o9) ? Object.assign(Object.assign({}, u3), o9) : u3)[e10];
      return n11 && "function" == typeof n11 && a7 ? n11(a7) : n11;
    }
    function f3() {
      var s11;
      if (!a7 || c6) return;
      if (false === (null == a7 ? void 0 : a7.getOptions().Toolbar)) return;
      const u6 = a7.getContainer();
      if (!u6) return;
      let f4 = d3("enabled");
      if (!f4) return;
      const p2 = d3("absolute"), g2 = a7.getSlides().length > 1;
      let b3 = false, m4 = false;
      for (const t9 of a7.getSlides()) t9.panzoomRef && (b3 = true), (t9.downloadSrc || "image" === t9.type && t9.src) && (m4 = true);
      const v4 = (null === (s11 = a7.getPlugins().Thumbs) || void 0 === s11 ? void 0 : s11.isEnabled()) || false, h4 = g2 && a7.getPlugins().Autoplay || false, j2 = a7.getPlugins().Fullscreen && (document.fullscreenEnabled || document.webkitFullscreenEnabled);
      if ("auto" === f4 && (f4 = b3), !f4) return;
      c6 = u6.querySelector(".f-carousel__toolbar") || void 0, c6 || (c6 = document.createElement("div"), s3(c6, "f-carousel__toolbar"));
      const E3 = d3("display"), y3 = r3({}, r5, d3("items"));
      for (const l8 of ["left", "middle", "right"]) {
        const s12 = E3[l8] || [], r7 = document.createElement("div");
        s3(r7, `f-carousel__toolbar__column is-${l8}`);
        for (const l9 of s12) {
          let i8;
          if (t(l9)) {
            if ("counter" === l9 && !g2) continue;
            if ("autoplay" === l9 && !h4) continue;
            if (v2[l9] && !b3) continue;
            if ("fullscreen" === l9 && !j2) continue;
            if ("thumbs" === l9 && !v4) continue;
            if ("download" === l9 && !m4) continue;
            i8 = y3[l9];
          }
          if (t3(l9) && (i8 = l9), i8 && i8.tpl) {
            let t9 = a7.localize(i8.tpl);
            t9 = t9.split("<svg>").join('<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24">');
            const e10 = e2(t9);
            e10 && ("function" == typeof i8.click && a7 && e10.addEventListener("click", (t10) => {
              t10.preventDefault(), t10.stopPropagation(), "function" == typeof i8.click && a7 && i8.click(a7, t10);
            }), r7.append(e10));
          }
        }
        c6.append(r7);
      }
      if (c6.childElementCount) {
        if (p2 && s3(c6, "is-absolute"), !c6.parentElement) {
          const t9 = d3("parentEl");
          t9 ? t9.insertAdjacentElement("afterbegin", c6) : u6.insertAdjacentElement("afterbegin", c6);
        }
        u6.contains(c6) && (s3(u6, "has-toolbar"), p2 && s3(u6, "has-absolute-toolbar"));
      }
    }
    return { init: function(t9) {
      a7 = t9, null == a7 || a7.on("initSlides", f3);
    }, destroy: function() {
      null == a7 || a7.off("initSlides", f3), s4(null == a7 ? void 0 : a7.getContainer(), "has-toolbar has-absolute-toolbar"), null == c6 || c6.remove(), c6 = void 0;
    }, add: function(t9, e10) {
      r5[t9] = e10;
    }, isEnabled: function() {
      return !!c6;
    } };
  };

  // node_modules/@fancyapps/ui/dist/carousel/carousel.autoplay.js
  var n7 = { autoStart: true, pauseOnHover: true, showProgressbar: true, timeout: 2e3 };
  var o6 = () => {
    let o9, i8, a7 = false, s11 = false, l8 = false, r7 = null;
    function u6(e10) {
      const i9 = null == o9 ? void 0 : o9.getOptions().Autoplay;
      let a8 = (t3(i9) ? Object.assign(Object.assign({}, n7), i9) : n7)[e10];
      return a8 && "function" == typeof a8 && o9 ? a8(o9) : a8;
    }
    function f3() {
      clearTimeout(i8), i8 = void 0;
    }
    function g2() {
      if (!o9 || !a7 || l8 || s11 || i8 || !o9.isSettled() || (function() {
        var t10;
        const e10 = (null === (t10 = null == o9 ? void 0 : o9.getPage()) || void 0 === t10 ? void 0 : t10.slides) || [];
        for (const t11 of e10) if (0 === t11.state) return true;
        return false;
      })()) return;
      !(function() {
        var t10, n11, i9, a8;
        if (!o9) return;
        if (v4(), !u6("showProgressbar")) return;
        let s12 = u6("progressbarParentEl");
        !s12 && (null === (t10 = o9.getPlugins().Toolbar) || void 0 === t10 ? void 0 : t10.isEnabled()) && (s12 = o9.getContainer());
        if (!s12 && true !== (null === (n11 = o9.getPlugins().Toolbar) || void 0 === n11 ? void 0 : n11.isEnabled())) {
          const t11 = (null === (i9 = o9.getPages()[0]) || void 0 === i9 ? void 0 : i9.slides) || [], e10 = (null === (a8 = o9.getPage()) || void 0 === a8 ? void 0 : a8.slides) || [];
          1 === t11.length && 1 === e10.length && (s12 = e10[0].el);
        }
        s12 || (s12 = o9.getViewport());
        if (!s12) return;
        r7 = document.createElement("div"), s3(r7, "f-progressbar"), s12.prepend(r7);
        const l9 = u6("timeout") || 1e3;
        r7.style.animationDuration = `${l9}ms`;
      })();
      const t9 = u6("timeout");
      i8 = setTimeout(() => {
        o9 && a7 && !s11 && (o9.isInfinite() || o9.getPageIndex() !== o9.getPages().length - 1 ? o9.next() : o9.goTo(0));
      }, t9);
    }
    function c6() {
      var t9;
      if (!o9 || o9.getPages().length < 2 || false === o9.getOptions().Autoplay) return;
      if (a7) return;
      a7 = true, o9.emit("autoplay:start", u6("timeout")), s3(o9.getContainer(), "has-autoplay"), null === (t9 = o9.getTween()) || void 0 === t9 || t9.on("start", b3);
      const n11 = null == o9 ? void 0 : o9.getContainer();
      n11 && u6("pauseOnHover") && matchMedia("(hover: hover)").matches && (n11.addEventListener("mouseenter", E3, false), n11.addEventListener("mouseleave", w3, false)), o9.on("change", P), o9.on("settle", y3), o9.on("contentReady", p2), o9.on("panzoom:touchStart", d3), o9.on("panzoom:wheel", d3), o9.isSettled() && g2();
    }
    function d3() {
      var t9;
      if (f3(), v4(), o9) {
        if (a7) {
          o9.emit("autoplay:end"), null === (t9 = o9.getTween()) || void 0 === t9 || t9.off("start", b3);
          const e10 = o9.getContainer();
          e10 && (e10.classList.remove("has-autoplay"), e10.removeEventListener("mouseenter", E3, false), e10.removeEventListener("mouseleave", w3, false));
        }
        o9.off("change", P), o9.off("settle", y3), o9.off("contentReady", p2), o9.off("panzoom:touchStart", d3), o9.off("panzoom:wheel", d3);
      }
      a7 = false, s11 = false;
    }
    function v4() {
      r7 && (r7.remove(), r7 = null);
    }
    function m4() {
      o9 && o9.getPages().length > 1 && u6("autoStart") && c6();
    }
    function p2() {
      g2();
    }
    function h4(t9, e10) {
      const n11 = e10.target;
      n11 && !e10.defaultPrevented && "toggle" === n11.dataset.autoplayAction && O2.toggle();
    }
    function P() {
      !o9 || !(null == o9 ? void 0 : o9.isInfinite()) && o9.getPageIndex() === o9.getPages().length - 1 ? d3() : (f3(), v4());
    }
    function y3() {
      g2();
    }
    function b3() {
      f3(), v4();
    }
    function E3() {
      l8 = true, a7 && (f3(), v4());
    }
    function w3() {
      l8 = false, a7 && !s11 && (null == o9 ? void 0 : o9.isSettled()) && g2();
    }
    const O2 = { init: function(t9) {
      o9 = t9, o9.on("ready", m4), o9.on("click", h4);
    }, destroy: function() {
      d3(), null == o9 || o9.off("ready", m4), null == o9 || o9.off("click", h4), o9 = void 0;
    }, isEnabled: () => a7, pause: function() {
      s11 = true, f3(), v4();
    }, resume: function() {
      s11 = false, a7 && !l8 && g2();
    }, start() {
      c6();
    }, stop() {
      d3();
    }, toggle() {
      a7 ? d3() : c6();
    } };
    return O2;
  };

  // node_modules/@fancyapps/ui/dist/carousel/carousel.thumbs.js
  var u4 = { Carousel: { Lazyload: { showLoading: false } }, minCount: 2, showOnStart: true, thumbTpl: '<button aria-label="Slide to #{{page}}"><img draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>', type: "modern" };
  var a5;
  var c4 = () => {
    let c6, d3, f3, m4, g2, h4 = 0, v4 = 0, p2 = true;
    function b3(e10) {
      const n11 = null == c6 ? void 0 : c6.getOptions().Thumbs;
      let o9 = (t3(n11) ? Object.assign(Object.assign({}, u4), n11) : u4)[e10];
      return o9 && "function" == typeof o9 && c6 ? o9(c6) : o9;
    }
    function y3() {
      if (!c6) return false;
      if (false === (null == c6 ? void 0 : c6.getOptions().Thumbs)) return false;
      let t9 = 0;
      for (const e10 of c6.getSlides()) e10.thumbSrc && t9++;
      return t9 >= b3("minCount");
    }
    function x3() {
      return "modern" === b3("type");
    }
    function S2() {
      return "scrollable" === b3("type");
    }
    function C() {
      const t9 = [], e10 = (null == c6 ? void 0 : c6.getSlides()) || [];
      for (const n11 of e10) t9.push({ index: n11.index, class: n11.thumbClass, html: T(n11) });
      return t9;
    }
    function T(t9) {
      const e10 = t9.thumb ? t9.thumb instanceof HTMLImageElement ? t9.thumb.src : t9.thumb : t9.thumbSrc || void 0, o9 = void 0 === t9.thumbAlt ? `Thumbnail #${(t9.index || 0) + 1}` : t9.thumbAlt + "";
      let i8 = b3("thumbTpl");
      return i8 = n5(i8, "{{alt}}", o9), i8 = n5(i8, "{{src}}", e10 + ""), i8 = n5(i8, "{{index}}", `${t9.index || 0}`), i8 = n5(i8, "{{page}}", `${(t9.index || 0) + 1}`), i8;
    }
    function L(t9) {
      return `<div index="${t9.index || 0}" class="f-thumbs__slide ${t9.class || ""}">${t9.html || ""}</div>`;
    }
    function E3(t9 = false) {
      var e10;
      const n11 = null == c6 ? void 0 : c6.getContainer();
      if (!c6 || !n11 || f3 || !y3()) return;
      const o9 = (null === (e10 = b3("Carousel")) || void 0 === e10 ? void 0 : e10.classes) || {};
      if (o9.container = o9.container || "f-thumbs", !f3) {
        const t10 = n11.nextElementSibling;
        (null == t10 ? void 0 : t10.classList.contains(o9.container)) && (f3 = t10);
      }
      if (!f3) {
        f3 = document.createElement("div");
        const t10 = b3("parentEl");
        t10 ? t10.insertAdjacentElement("beforeend", f3) : n11.insertAdjacentElement("afterend", f3);
      }
      s3(f3, o9.container), s3(f3, "f-thumbs"), s3(f3, `is-${b3("type")}`), t9 && s3(f3, "is-hidden");
    }
    function P() {
      if (!f3 || !S2()) return;
      m4 = document.createElement("div"), s3(m4, "f-thumbs__viewport");
      let t9 = "";
      for (const e10 of C()) {
        "string" == typeof (e10.html || "") && (t9 += L(e10));
      }
      m4.innerHTML = t9, f3.append(m4), f3.addEventListener("click", (t10) => {
        t10.preventDefault();
        const e10 = t10.target.closest("[index]"), n11 = parseInt((null == e10 ? void 0 : e10.getAttribute("index")) || "-1");
        c6 && n11 > -1 && c6.goTo(n11);
      }), g2 = new IntersectionObserver((t10) => {
        t10.forEach((t11) => {
          t11.isIntersecting && t11.target instanceof HTMLImageElement && (t11.target.src = t11.target.getAttribute("data-lazy-src") + "", t11.target.removeAttribute("data-lazy-src"), null == g2 || g2.unobserve(t11.target));
        });
      }, { root: m4, rootMargin: "100px" }), f3.querySelectorAll("[data-lazy-src]").forEach((t10) => {
        null == g2 || g2.observe(t10);
      }), null == c6 || c6.emit("thumbs:ready");
    }
    function w3() {
      var t9;
      if (!a5 || !c6 || !f3 || S2() || d3) return;
      const n11 = C();
      if (!n11.length) return;
      const o9 = r3({}, { Sync: { target: c6 }, Lazyload: { preload: 1 }, slides: n11, classes: { container: "f-thumbs", viewport: "f-thumbs__viewport", slide: "f-thumbs__slide" }, center: true, fill: !x3(), infinite: false, dragFree: true, rtl: c6.getOptions().rtl || false, slidesPerPage: (t10) => {
        let e10 = 0;
        return x3() && (!(function() {
          if (!x3()) return;
          if (!f3) return;
          const t11 = (t12) => f3 && parseFloat(getComputedStyle(f3).getPropertyValue("--f-thumb-" + t12)) || 0;
          h4 = t11("width"), v4 = t11("clip-width");
        })(), e10 = 4 * (h4 - v4)), t10 && t10.getTotalSlideDim() <= t10.getViewportDim() - e10 ? 1 / 0 : 1;
      } }, u4.Carousel || {}, b3("Carousel") || {});
      d3 = a5(f3, o9, { Sync: i3, Lazyload: i4 }), d3.on("ready", () => {
        s3(f3, "is-syncing"), null == c6 || c6.emit("thumbs:ready"), x3() && (null == c6 || c6.on("render", $));
      }), d3.on("destroy", () => {
        null == c6 || c6.emit("thumbs:destroy");
      }), d3.init(), null === (t9 = d3.getGestures()) || void 0 === t9 || t9.on("start", () => {
        p2 = false;
      }), d3.on("click", (t10, e10) => {
        const n12 = e10.target;
        if (n12) {
          const t11 = n12.matches("button") ? n12 : n12.firstElementChild;
          t11 && t11.matches("button") && (e10.preventDefault(), t11.focus({ preventScroll: true }));
        }
      }), s3(c6.getContainer(), "has-thumbs"), R2();
    }
    function j2() {
      y3() && b3("showOnStart") && (E3(), P());
    }
    function A() {
      var t9;
      y3() && (w3(), null == c6 || c6.on("addSlide", z2), null == c6 || c6.on("removeSlide", _2), null == c6 || c6.on("click", I2), null == c6 || c6.on("refresh", q2), null === (t9 = null == c6 ? void 0 : c6.getGestures()) || void 0 === t9 || t9.on("start", M4), D2(true));
    }
    function M4() {
      var t9, e10;
      p2 = true;
      (null === (t9 = document.activeElement) || void 0 === t9 ? void 0 : t9.closest(".f-thumbs")) && (null === (e10 = document.activeElement) || void 0 === e10 || e10.blur());
    }
    function $() {
      var t9, e10;
      null == f3 || f3.classList.toggle("is-syncing", false === (null == c6 ? void 0 : c6.hasNavigated()) || (null === (t9 = null == c6 ? void 0 : c6.getTween()) || void 0 === t9 ? void 0 : t9.isRunning())), R2(), (null === (e10 = null == c6 ? void 0 : c6.getGestures()) || void 0 === e10 ? void 0 : e10.isPointerDown()) && (function() {
        if (!x3()) return;
        if (!c6 || !d3) return;
        if (!p2) return;
        const t10 = d3.getTween(), e11 = d3.getPages(), n11 = c6.getPageIndex() || 0, i8 = c6.getPageProgress() || 0;
        if (!(c6 && e11 && e11[n11] && t10)) return;
        const l8 = t10.isRunning() ? t10.getCurrentValues().pos : d3.getPosition();
        if (void 0 === l8) return;
        let r7 = e11[n11].pos + i8 * (h4 - v4);
        r7 = t2(e11[0].pos, r7, e11[e11.length - 1].pos), t10.from({ pos: l8 }).to({ pos: r7 }).start();
      })();
    }
    function O2() {
      p2 = true, D2();
    }
    function z2(t9, e10) {
      const n11 = { html: T(e10) };
      if (d3) d3.add(n11, e10.index);
      else if (m4) {
        const t10 = e2(L(n11));
        if (t10) {
          m4.append(t10);
          const e11 = t10.querySelector("img");
          e11 && (null == g2 || g2.observe(e11));
        }
      }
    }
    function _2(t9, e10) {
      var n11;
      d3 ? d3.remove(e10.index) : m4 && (null === (n11 = m4.querySelector(`[index="${e10.index}"]`)) || void 0 === n11 || n11.remove());
    }
    function I2(t9, e10) {
      var n11;
      const o9 = e10.target;
      e10.defaultPrevented || "toggle" !== (null === (n11 = null == o9 ? void 0 : o9.dataset) || void 0 === n11 ? void 0 : n11.thumbsAction) || (f3 || (E3(true), P(), w3()), f3 && f3.classList.toggle("is-hidden"));
    }
    function q2() {
      D2();
    }
    function D2(t9 = false) {
      if (!c6 || !m4 || !S2()) return;
      const e10 = c6.getPageIndex();
      m4.querySelectorAll(".is-selected").forEach((t10) => {
        t10.classList.remove("is-selected");
      });
      const n11 = m4.querySelector(`[index="${e10}"]`);
      if (n11) {
        n11.classList.add("is-selected");
        const e11 = m4.getBoundingClientRect(), o9 = n11.getBoundingClientRect(), i8 = n11.offsetTop - m4.offsetTop - 0.5 * e11.height + 0.5 * o9.height, l8 = n11.scrollLeft - m4.scrollLeft - 0.5 * e11.width + 0.5 * o9.width;
        m4.scrollTo({ top: i8, left: l8, behavior: t9 ? "instant" : "smooth" });
      }
    }
    function R2() {
      if (!x3()) return;
      if (!c6 || !d3) return;
      const t9 = (null == d3 ? void 0 : d3.getSlides()) || [];
      let e10 = -0.5 * h4;
      for (const n11 of t9) {
        const t10 = n11.el;
        if (!t10) continue;
        let o9 = c6.getPageProgress(n11.index) || 0;
        o9 = Math.max(-1, Math.min(1, o9)), o9 > -1 && o9 < 1 && (e10 += 0.5 * h4 * (1 - Math.abs(o9))), o9 = Math.round(1e4 * o9) / 1e4, e10 = Math.round(1e4 * e10) / 1e4, t10.style.setProperty("--progress", `${Math.abs(o9)}`), t10.style.setProperty("--shift", `${(null == c6 ? void 0 : c6.isRTL()) ? -1 * e10 : e10}px`), o9 > -1 && o9 < 1 && (e10 += 0.5 * h4 * (1 - Math.abs(o9)));
      }
    }
    return { init: function(t9, e10) {
      a5 = e10, c6 = t9, c6.on("ready", A), c6.on("initSlides", j2), c6.on("change", O2);
    }, destroy: function() {
      var t9, e10;
      S2() && (null == c6 || c6.emit("thumbs:destroy")), null == c6 || c6.off("ready", A), null == c6 || c6.off("initSlides", j2), null == c6 || c6.off("change", O2), null == c6 || c6.off("render", $), null == c6 || c6.off("addSlide", z2), null == c6 || c6.off("click", I2), null == c6 || c6.off("refresh", q2), null === (t9 = null == c6 ? void 0 : c6.getGestures()) || void 0 === t9 || t9.off("start", M4), null === (e10 = null == c6 ? void 0 : c6.getContainer()) || void 0 === e10 || e10.classList.remove("has-thumbs"), c6 = void 0, null == d3 || d3.destroy(), d3 = void 0, null == f3 || f3.remove(), f3 = void 0;
    }, getCarousel: function() {
      return d3;
    }, getContainer: function() {
      return f3;
    }, getType: function() {
      return b3("type");
    }, isEnabled: y3 };
  };

  // node_modules/@fancyapps/ui/dist/carousel/carousel.html.js
  var n8 = { autosize: false, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" }, preload: false };
  var l4 = () => {
    let l8;
    function s11() {
      const e10 = null == l8 ? void 0 : l8.getOptions().Html;
      return t3(e10) ? r3({}, n8, e10) : n8;
    }
    function r7() {
      return false !== (null == l8 ? void 0 : l8.getOptions().Html);
    }
    function d3(t9) {
      return "iframe" === t9.type || "pdf" === t9.type || "gmap" === t9.type;
    }
    function c6(t9) {
      const e10 = `${t9}`;
      return e10.match(/^\d+$/) ? `${e10}px` : e10;
    }
    function p2(t9) {
      if (void 0 === t9 || "" === t9) return;
      const e10 = `${t9}`.trim();
      if (!e10.match(/^\d+(\.\d+)?(px)?$/)) return;
      const o9 = parseFloat(e10);
      return Number.isFinite(o9) ? o9 : void 0;
    }
    function h4(t9, e10) {
      var o9;
      const i8 = null !== (o9 = t9[e10]) && void 0 !== o9 ? o9 : s11()[e10];
      return "true" === i8 || "false" !== i8 && i8;
    }
    function m4(t9, o9) {
      if (!r7()) return;
      let i8 = o9.type, a7 = o9.src;
      if (!i8 && t(a7)) {
        if ("#" === a7.charAt(0) ? i8 = "inline" : a7.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.((a)?png|avif|gif|jp(g|eg)|pjp(eg)?|jfif|svg|webp|bmp|ico|tif(f)?)((\?|#).*)?$)/i) ? i8 = "image" : a7.match(/\.(pdf)((\?|#).*)?$/i) ? i8 = "pdf" : a7.match(/\.(html|php)((\?|#).*)?$/i) && (i8 = "iframe"), !i8) {
          const t10 = a7.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+\.?\d+?)z))|(?:\?ll=))(.*)?/i);
          t10 && (a7 = `https://maps.google.${t10[1]}/?ll=${(t10[2] ? t10[2] + "&z=" + Math.floor(parseFloat(t10[3])) + (t10[4] ? t10[4].replace(/^\//, "&") : "") : t10[4] + "").replace(/\?/, "&")}&output=${t10[4] && t10[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, i8 = "gmap");
        }
        if (!i8) {
          const t10 = a7.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i);
          t10 && (a7 = `https://maps.google.${t10[1]}/maps?q=${t10[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, i8 = "gmap");
        }
        i8 && (o9.src = a7, o9.type = i8);
      }
    }
    function f3(t9, e10) {
      r7() && d3(e10) && (function(t10) {
        const e11 = t10.el, o9 = t10.src;
        if (!l8 || !e11 || !o9) return;
        const n11 = document.createElement("iframe");
        s3(n11, "f-iframe");
        for (const [t11, e12] of Object.entries(s11().iframeAttr || {})) n11.setAttribute(t11, e12);
        n11.onerror = () => {
          t10.state = 2, null == l8 || l8.showError(t10, "{{IFRAME_ERROR}}");
        };
        const r8 = document.createElement("div");
        s3(r8, "f-html"), r8.append(n11), t10.htmlEl = r8, t10.contentEl = n11, s3(e11, `has-html has-iframe has-${t10.type}`), e11.prepend(r8), y3(t10);
        const d4 = h4(t10, "preload"), c7 = h4(t10, "autosize");
        "iframe" === t10.type && (d4 || c7) ? (t10.state = 0, l8.showLoading(t10), s3(e11, "is-loading"), n11.onload = () => {
          if (!l8 || 2 === l8.getState() || !n11.src.length || t10.contentEl !== n11 || !n11.isConnected) return;
          t10.state = 1;
          const o10 = "true" !== n11.dataset.ready;
          n11.dataset.ready = "true", v4(t10), l8.hideLoading(t10), o10 && l8.emit("contentReady", t10), s4(e11, "is-loading");
        }, n11.src = `${o9}`) : (n11.src = `${o9}`, l8.emit("contentReady", t10));
      })(e10);
    }
    function u6(t9, e10) {
      var o9, i8;
      if (d3(e10)) {
        const t10 = e10.el;
        null == l8 || l8.hideError(e10), null === (o9 = e10.contentEl) || void 0 === o9 || o9.remove(), e10.contentEl = void 0, null === (i8 = e10.htmlEl) || void 0 === i8 || i8.remove(), e10.htmlEl = void 0, t10 && (s4(t10, "has-html has-iframe has-pdf has-gmap"), s4(t10, "is-loading"));
      }
    }
    function g2() {
      for (const t9 of (null == l8 ? void 0 : l8.getSlides()) || []) d3(t9) && (y3(t9), 1 === t9.state && v4(t9));
    }
    function y3(t9) {
      const e10 = t9.htmlEl;
      if (e10 && d3(t9) && (e10.style.aspectRatio = "", e10.style.width = "", e10.style.height = "", e10.style.maxWidth = "", e10.style.maxHeight = "", t9.width && (e10.style.maxWidth = c6(t9.width)), t9.height && (e10.style.maxHeight = c6(t9.height)), t9.aspectRatio)) {
        const o9 = t9.aspectRatio.split("/"), i8 = parseFloat(o9[0].trim()), a7 = o9[1] ? parseFloat(o9[1].trim()) : 0, n11 = i8 && a7 ? i8 / a7 : i8;
        e10.offsetHeight;
        const l9 = e10.getBoundingClientRect(), s12 = n11 < (l9.width || 1) / (l9.height || 1);
        e10.style.aspectRatio = `${t9.aspectRatio}`, e10.style.width = s12 ? "auto" : "", e10.style.height = s12 ? "" : "auto";
      }
    }
    function v4(t9) {
      const e10 = t9.contentEl, o9 = null == e10 ? void 0 : e10.parentElement, i8 = null == o9 ? void 0 : o9.style;
      let a7 = h4(t9, "autosize"), n11 = p2(t9.width) || 0, l9 = p2(t9.height) || 0;
      if (n11 && l9 && (a7 = false), e10 && o9 && i8 && a7) {
        try {
          const t10 = window.getComputedStyle(o9), a8 = parseFloat(t10.paddingLeft) + parseFloat(t10.paddingRight), s12 = parseFloat(t10.paddingTop) + parseFloat(t10.paddingBottom), r8 = e10.contentWindow;
          if (r8) {
            const t11 = r8.document, e11 = t11.getElementsByTagName("html")[0], o10 = t11.body;
            i8.width = "";
            const d4 = window.getComputedStyle(o10), c7 = parseFloat(d4.marginLeft) + parseFloat(d4.marginRight), p3 = o10.style.overflow || "";
            o10.style.overflow = "hidden", n11 = n11 || o10.scrollWidth + c7 + a8, i8.flex = "0 0 auto", i8.width = `${n11}px`, i8.height = `${o10.scrollHeight}px`, o10.style.overflow = p3;
            l9 = Math.max(e11.scrollHeight, Math.ceil(e11.getBoundingClientRect().height)) + s12;
          }
        } catch (t10) {
        }
        (n11 || l9) && Object.assign(i8, { flex: "0 1 auto", width: n11 ? `${n11}px` : "", height: l9 ? `${l9}px` : "" });
      }
    }
    return { init: function(t9) {
      l8 = t9, l8.on("addSlide", m4), l8.on("attachSlideEl", f3), l8.on("detachSlideEl", u6), l8.on("refresh", g2);
    }, destroy: function() {
      null == l8 || l8.off("addSlide", m4), null == l8 || l8.off("attachSlideEl", f3), null == l8 || l8.off("detachSlideEl", u6), null == l8 || l8.off("refresh", g2), l8 = void 0;
    } };
  };

  // node_modules/@fancyapps/ui/dist/carousel/carousel.video.js
  var i6 = (t9, e10 = {}) => {
    const o9 = new URL(t9), n11 = new URLSearchParams(o9.search), i8 = new URLSearchParams();
    for (const [t10, o10] of [...n11, ...Object.entries(e10)]) {
      let e11 = o10 + "";
      if ("t" === t10) {
        let t11 = e11.match(/((\d*)m)?(\d*)s?/);
        t11 && i8.set("start", 60 * parseInt(t11[2] || "0") + parseInt(t11[3] || "0") + "");
      } else i8.set(t10, e11);
    }
    let l8 = i8 + "", s11 = t9.match(/#t=((.*)?\d+s)/);
    return s11 && (l8 += `#t=${s11[1]}`), l8;
  };
  var l5 = { autoplay: false, html5videoTpl: `<video class="f-html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
    <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "no", referrerPolicy: "strict-origin-when-cross-origin", credentialless: "" }, vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 }, youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 } };
  var s9 = () => {
    let s11, r7 = false;
    function c6() {
      const t9 = null == s11 ? void 0 : s11.getOptions().Video;
      return t3(t9) ? Object.assign(Object.assign({}, l5), t9) : l5;
    }
    function a7() {
      var t9;
      return null === (t9 = null == s11 ? void 0 : s11.getPage()) || void 0 === t9 ? void 0 : t9.slides[0];
    }
    const d3 = (t9) => {
      var e10;
      try {
        let o9 = JSON.parse(t9.data);
        if ("https://player.vimeo.com" === t9.origin) {
          if ("ready" === o9.event) for (let o10 of Array.from((null === (e10 = null == s11 ? void 0 : s11.getContainer()) || void 0 === e10 ? void 0 : e10.getElementsByClassName("f-iframe")) || [])) o10 instanceof HTMLIFrameElement && o10.contentWindow === t9.source && (o10.dataset.ready = "true");
        } else if (t9.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === o9.event) {
          const t10 = document.getElementById(o9.id);
          t10 && (t10.dataset.ready = "true");
        }
      } catch (t10) {
      }
    };
    function m4(t9, e10) {
      const n11 = e10.src;
      if (!t(n11)) return;
      let l8 = e10.type;
      if (!l8 || "html5video" === l8) {
        const t10 = n11.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i);
        t10 && (l8 = "html5video", e10.html5videoFormat = e10.html5videoFormat || "video/" + ("ogv" === t10[1] ? "ogg" : t10[1]));
      }
      if (!l8 || "youtube" === l8) {
        const t10 = n11.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i);
        if (t10) {
          const o9 = Object.assign(Object.assign({}, c6().youtube), e10.youtube || {}), s12 = `www.youtube${o9.nocookie ? "-nocookie" : ""}.com`, r8 = i6(n11, o9), a8 = encodeURIComponent(t10[2]);
          e10.videoId = a8, e10.src = `https://${s12}/embed/${a8}?${r8}`, e10.thumb = e10.thumb || `https://i.ytimg.com/vi/${a8}/mqdefault.jpg`, l8 = "youtube";
        }
      }
      if (!l8 || "vimeo" === l8) {
        const t10 = n11.match(/^.+vimeo.com\/(?:\/)?(video\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/);
        if (t10) {
          const o9 = Object.assign(Object.assign({}, c6().vimeo), e10.vimeo || {}), s12 = i6(n11, o9), r8 = encodeURIComponent(t10[2]), a8 = t10[5] || "";
          e10.videoId = r8, e10.src = `https://player.vimeo.com/video/${r8}?${a8 ? `h=${a8}${s12 ? "&" : ""}` : ""}${s12}`, l8 = "vimeo";
        }
      }
      e10.type = l8;
    }
    function u6(e10, i8) {
      "html5video" === i8.type && (function(e11) {
        const i9 = e11.el, l8 = e11.src;
        if (!s11 || !i9 || !l8) return;
        const r8 = e11.html5videoTpl || c6().html5videoTpl, a8 = e11.html5videoFormat || c6().html5videoFormat;
        if (!r8) return;
        const d4 = e11.poster || (e11.thumb && t(e11.thumb) ? e11.thumb : ""), m5 = e2(r8.replace(/\{\{src\}\}/gi, l8 + "").replace(/\{\{format\}\}/gi, a8 || "").replace(/\{\{poster\}\}/gi, d4 + ""));
        if (!m5) return;
        const u7 = document.createElement("div");
        s3(u7, "f-html"), u7.append(m5), e11.contentEl = m5, e11.htmlEl = u7, s3(i9, `has-${e11.type}`), i9.prepend(u7), v4(e11), s11.emit("contentReady", e11);
      })(i8), "youtube" !== i8.type && "vimeo" !== i8.type || (function(e11) {
        const o9 = e11.el, n11 = e11.src;
        if (!s11 || !o9 || !n11) return;
        const i9 = document.createElement("iframe");
        s3(i9, "f-iframe"), i9.setAttribute("id", `f-iframe_${e11.videoId}`);
        for (const [t9, e12] of Object.entries(c6().iframeAttr || {})) i9.setAttribute(t9, e12);
        "youtube" === e11.type && (i9.onload = () => {
          var t9;
          1 === (null == s11 ? void 0 : s11.getState()) && (null === (t9 = i9.contentWindow) || void 0 === t9 || t9.postMessage(JSON.stringify({ event: "listening", id: i9.getAttribute("id") }), "*"));
        }), i9.onerror = () => {
          null == s11 || s11.showError(e11, "{{IFRAME_ERROR}}");
        };
        const l8 = document.createElement("div");
        s3(l8, "f-html"), l8.append(i9), e11.contentEl = i9, e11.htmlEl = l8, s3(o9, `has-html has-iframe has-${e11.type}`), i9.src = `${e11.src}`, o9.prepend(l8), v4(e11), s11.emit("contentReady", e11);
      })(i8);
    }
    function f3(t9, e10) {
      var o9, n11;
      "html5video" !== e10.type && "youtube" !== e10.type && "vimeo" !== e10.type || (null === (o9 = e10.contentEl) || void 0 === o9 || o9.remove(), e10.contentEl = void 0, null === (n11 = e10.htmlEl) || void 0 === n11 || n11.remove(), e10.htmlEl = void 0), e10.poller && clearTimeout(e10.poller);
    }
    function p2() {
      r7 = false;
    }
    function h4() {
      if (r7) return;
      r7 = true;
      const t9 = a7();
      (t9 && void 0 !== t9.autoplay ? t9.autoplay : c6().autoplay) && ((function() {
        var t10;
        const e10 = a7(), o9 = null == e10 ? void 0 : e10.el;
        if (o9 && "html5video" === (null == e10 ? void 0 : e10.type)) try {
          const t11 = o9.querySelector("video");
          if (t11) {
            const e11 = t11.play();
            void 0 !== e11 && e11.then(() => {
            }).catch((e12) => {
              t11.muted = true, t11.play();
            });
          }
        } catch (t11) {
        }
        const n11 = null == e10 ? void 0 : e10.htmlEl;
        n11 instanceof HTMLIFrameElement && (null === (t10 = n11.contentWindow) || void 0 === t10 || t10.postMessage('{"event":"command","func":"stopVideo","args":""}', "*"));
      })(), (function() {
        const t10 = a7(), e10 = null == t10 ? void 0 : t10.type;
        if (!(null == t10 ? void 0 : t10.el) || "youtube" !== e10 && "vimeo" !== e10) return;
        const o9 = () => {
          if (t10.contentEl && t10.contentEl instanceof HTMLIFrameElement && t10.contentEl.contentWindow) {
            let e11;
            if ("true" === t10.contentEl.dataset.ready) return e11 = "youtube" === t10.type ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }, e11 && t10.contentEl.contentWindow.postMessage(JSON.stringify(e11), "*"), void (t10.poller = void 0);
            "youtube" === t10.type && (e11 = { event: "listening", id: t10.contentEl.getAttribute("id") }, t10.contentEl.contentWindow.postMessage(JSON.stringify(e11), "*"));
          }
          t10.poller = setTimeout(o9, 250);
        };
        o9();
      })());
    }
    function v4(t9) {
      const e10 = null == t9 ? void 0 : t9.htmlEl;
      if (t9 && e10 && ("html5video" === t9.type || "youtube" === t9.type || "vimeo" === t9.type)) {
        if (e10.style.aspectRatio = "", e10.style.width = "", e10.style.height = "", e10.style.maxWidth = "", e10.style.maxHeight = "", t9.width) {
          let o9 = `${t9.width}`;
          o9.match(/^\d+$/) && (o9 += "px"), e10.style.maxWidth = `${o9}`;
        }
        if (t9.height) {
          let o9 = `${t9.height}`;
          o9.match(/^\d+$/) && (o9 += "px"), e10.style.maxHeight = `${o9}`;
        }
        if (t9.aspectRatio) {
          const o9 = t9.aspectRatio.split("/"), n11 = parseFloat(o9[0].trim()), i8 = o9[1] ? parseFloat(o9[1].trim()) : 0, l8 = n11 && i8 ? n11 / i8 : n11;
          e10.offsetHeight;
          const s12 = e10.getBoundingClientRect(), r8 = l8 < (s12.width || 1) / (s12.height || 1);
          e10.style.aspectRatio = `${t9.aspectRatio}`, e10.style.width = r8 ? "auto" : "", e10.style.height = r8 ? "" : "auto";
        }
      }
    }
    function y3() {
      v4(a7());
    }
    return { init: function(t9) {
      s11 = t9, s11.on("addSlide", m4), s11.on("attachSlideEl", u6), s11.on("detachSlideEl", f3), s11.on("ready", h4), s11.on("change", p2), s11.on("settle", h4), s11.on("refresh", y3), window.addEventListener("message", d3);
    }, destroy: function() {
      null == s11 || s11.off("addSlide", m4), null == s11 || s11.off("attachSlideEl", u6), null == s11 || s11.off("detachSlideEl", f3), null == s11 || s11.off("ready", h4), null == s11 || s11.off("change", p2), null == s11 || s11.off("settle", h4), null == s11 || s11.off("refresh", y3), window.removeEventListener("message", d3), s11 = void 0;
    } };
  };

  // node_modules/@fancyapps/ui/dist/carousel/carousel.fullscreen.js
  var n9 = { autoStart: false, btnTpl: '<button data-fullscreen-action="toggle" class="f-button" title="{{TOGGLE_FULLSCREEN}}"><svg><g><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>' };
  var t8 = "in-fullscreen-mode";
  var l6 = () => {
    let l8;
    function u6(t9) {
      const u7 = null == l8 ? void 0 : l8.getOptions().Fullscreen;
      let o10 = (t3(u7) ? Object.assign(Object.assign({}, n9), u7) : n9)[t9];
      return o10 && "function" == typeof o10 && l8 ? o10(l8) : o10;
    }
    function o9() {
      var e10;
      null === (e10 = null == l8 ? void 0 : l8.getPlugins().Toolbar) || void 0 === e10 || e10.add("fullscreen", { tpl: u6("btnTpl") });
    }
    function c6() {
      if (u6("autoStart")) {
        const e10 = s11();
        e10 && a7(e10);
      }
    }
    function i8(e10, n11) {
      const t9 = n11.target;
      t9 && !n11.defaultPrevented && "toggle" === t9.dataset.fullscreenAction && d3();
    }
    function s11() {
      return u6("el") || (null == l8 ? void 0 : l8.getContainer()) || void 0;
    }
    function r7() {
      const e10 = document;
      return e10.fullscreenEnabled ? !!e10.fullscreenElement : !!e10.webkitFullscreenEnabled && !!e10.webkitFullscreenElement;
    }
    function a7(e10) {
      const n11 = document;
      let l9;
      return e10 || (e10 = n11.documentElement), n11.fullscreenEnabled ? l9 = e10.requestFullscreen() : n11.webkitFullscreenEnabled && (l9 = e10.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)), l9 && l9.then(() => {
        e10.classList.add(t8);
      }), l9;
    }
    function f3() {
      const e10 = document;
      let n11;
      return e10.fullscreenEnabled ? n11 = e10.fullscreenElement && e10.exitFullscreen() : e10.webkitFullscreenEnabled && (n11 = e10.webkitFullscreenElement && e10.webkitExitFullscreen()), n11 && n11.then(() => {
        var e11;
        null === (e11 = s11()) || void 0 === e11 || e11.classList.remove(t8);
      }), n11;
    }
    function d3() {
      if (r7()) f3();
      else {
        const e10 = s11();
        e10 && a7(e10);
      }
    }
    return { init: function(e10) {
      l8 = e10, l8.on("initPlugins", o9), l8.on("ready", c6), l8.on("click", i8);
    }, destroy: function() {
      null == l8 || l8.off("initPlugins", o9), null == l8 || l8.off("ready", c6), null == l8 || l8.off("click", i8);
    }, exit: f3, inFullscreen: r7, request: a7, toggle: d3 };
  };

  // node_modules/@fancyapps/ui/dist/fancybox/fancybox.hash.js
  var n10;
  var o7;
  var r6 = false;
  var i7 = false;
  var l7 = false;
  var s10 = false;
  var a6 = () => {
    const t9 = new URL(document.URL).hash, e10 = t9.slice(1).split("-"), n11 = e10[e10.length - 1], o9 = n11 && /^\+?\d+$/.test(n11) && parseInt(e10.pop() || "1", 10) || 1;
    return { urlHash: t9, urlSlug: e10.join("-"), urlIndex: o9 };
  };
  var u5 = () => {
    const t9 = null == n10 ? void 0 : n10.getInstance(), e10 = null == t9 ? void 0 : t9.getState();
    return !(!t9 || 0 !== e10 && 1 !== e10);
  };
  var c5 = () => {
    if (!n10) return;
    if (u5()) return;
    const { urlSlug: t9, urlIndex: e10 } = a6();
    if (!t9) return;
    let o9 = document.querySelector(`[data-slug="${t9}"]`);
    o9 && n10.fromTriggerEl(o9), u5() || (o9 = document.querySelectorAll(`[data-fancybox="${t9}"]`)[e10 - 1], o9 && n10.fromTriggerEl(o9, { startIndex: e10 - 1 })), u5() && o9 && !o9.closest("[inert]") && o9.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
  };
  var d2 = (t9) => {
    const n11 = t9.getOptions().Hash, o9 = t9.getSlide();
    return o9 && (o9.slug || o9.fancybox || (t3(n11) ? n11.slug : "")) || "";
  };
  var g = (t9) => {
    var e10, n11;
    const o9 = d2(t9), r7 = t9.getSlide();
    if (!r7 || !o9) return "";
    let i8 = parseInt(r7.index + "", 10) + 1, l8 = r7.slug ? `#${r7.slug}` : `#${o9}-${i8}`;
    return ((null === (n11 = null === (e10 = t9.getCarousel()) || void 0 === e10 ? void 0 : e10.getPages()) || void 0 === n11 ? void 0 : n11.length) || 0) < 2 && (l8 = `#${o9}`), l8;
  };
  var f2 = () => {
    if (!n10) return;
    if (l7) return;
    const t9 = null == n10 ? void 0 : n10.getInstance(), o9 = null == t9 ? void 0 : t9.getCarousel(), { urlSlug: r7, urlIndex: u6 } = a6(), d3 = null == t9 ? void 0 : t9.getOptions().Hash;
    if (false !== d3) {
      if (t9 && 1 === t9.getState() && o9) {
        const n11 = o9.getSlides();
        for (const t10 of n11 || []) if (t10.slug === r7 || (t10.fancybox === r7 || t3(d3) && d3.slug === r7) && t10.index === u6 - 1) return i7 = false, void o9.goTo(t10.index);
        s10 = true, t9.close(), s10 = false;
      }
      c5();
    }
  };
  var h3 = () => {
    n10 && (o7 = setTimeout(() => {
      r6 = true, c5(), r6 = false;
    }, 300), window.addEventListener("hashchange", f2, false));
  };
  var w2;
  function v3() {
    history.scrollRestoration && w2 && (history.scrollRestoration = w2, w2 = void 0);
  }
  var m3 = () => {
    let t9, e10 = "";
    function u6() {
      var n11;
      if (!t9 || !t9.isTopMost() || false === t9.getOptions().Hash) return;
      if (r6) {
        const e11 = t9.getOptions().sync;
        e11 && e11.goTo((null === (n11 = null == t9 ? void 0 : t9.getCarousel()) || void 0 === n11 ? void 0 : n11.getPageIndex()) || 0, { transition: false, tween: false });
      }
      const o9 = t9.getCarousel();
      if (!o9) return;
      if (!t9.getSlide()) return;
      const l8 = d2(t9);
      if (!l8) return;
      const { urlHash: s11, urlSlug: u7 } = a6(), f4 = g(t9);
      s11 !== f4 && (e10 = s11), history.scrollRestoration && !w2 && (w2 = history.scrollRestoration, history.scrollRestoration = "manual", window.addEventListener("beforeunload", v3)), o9.on("change", c6);
      const h4 = l8 !== u7;
      try {
        window.history[h4 ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + f4), h4 && (i7 = true);
      } catch (t10) {
      }
    }
    function c6() {
      if (!t9 || !t9.isTopMost() || false === t9.getOptions().Hash) return;
      if (!t9.getSlide()) return;
      if (!d2(t9)) return;
      const e11 = g(t9);
      l7 = true;
      try {
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + e11);
      } catch (t10) {
      }
      l7 = false;
    }
    function f3() {
      var n11;
      if (!t9 || !t9.isTopMost() || false === t9.getOptions().Hash || s10) return;
      if (d2(t9)) {
        l7 = true;
        try {
          i7 && !(function() {
            if (window.parent === window) return false;
            try {
              var t10 = window.frameElement;
            } catch (e11) {
              t10 = null;
            }
            return null === t10 ? "data:" === location.protocol : t10.hasAttribute("sandbox");
          })() && "IFRAME" !== (null === (n11 = document.activeElement) || void 0 === n11 ? void 0 : n11.nodeName) ? window.history.back() : window.history.replaceState({}, document.title, window.location.pathname + window.location.search + e10);
        } catch (t10) {
        }
        l7 = false;
      }
    }
    return { init: function(e11) {
      clearTimeout(o7), t9 = e11, t9.on("ready", u6), t9.on("close", f3);
    }, destroy: function() {
      null == t9 || t9.off("ready", u6), null == t9 || t9.off("close", f3);
      const e11 = null == t9 ? void 0 : t9.getCarousel();
      e11 && e11.off("change", c6), t9 = void 0, (null == n10 ? void 0 : n10.getInstance()) || (v3(), window.removeEventListener("beforeunload", v3));
    } };
  };
  m3.getInfoFromURL = a6, m3.startFromUrl = c5, m3.setup = function(e10) {
    n10 || (n10 = e10, e8() && (/complete|interactive|loaded/.test(document.readyState) ? h3() : document.addEventListener("DOMContentLoaded", h3)));
  };

  // node_modules/@fancyapps/ui/dist/fancybox/l10n/en_EN.js
  var o8 = Object.assign(Object.assign({}, o3), { CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ELEMENT_NOT_FOUND: "HTML Element Not Found", IFRAME_ERROR: "Error Loading Page", NO_CAPTION: "No Caption", TOGGLE_SIDEBAR: "Toggle sidebar" });

  // node_modules/@fancyapps/ui/dist/fancybox/fancybox.js
  var M3 = '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path d="M19.286 4.714 4.714 19.286M4.714 4.714l14.572 14.572" /></svg></button>';
  c3().add("close", { tpl: M3 });
  var k = (e10) => {
    e10.cancelable && e10.preventDefault();
  };
  var R = (e10 = null, t9 = "", n11) => {
    if (!e10 || !e10.parentElement || !t9) return void (n11 && n11());
    O(e10);
    const o9 = (i8) => {
      i8.target === e10 && e10.dataset.animationName && (e10.removeEventListener("animationend", o9), delete e10.dataset.animationName, n11 && n11(), e10.classList.remove(t9));
    };
    e10.dataset.animationName = t9, e10.addEventListener("animationend", o9), s3(e10, t9);
  };
  var O = (e10) => {
    e10 && e10.dispatchEvent(new CustomEvent("animationend", { bubbles: false, cancelable: true, currentTarget: e10 }));
  };
  var _;
  !(function(e10) {
    e10[e10.Init = 0] = "Init", e10[e10.Ready = 1] = "Ready", e10[e10.Closing = 2] = "Closing", e10[e10.Destroyed = 3] = "Destroyed";
  })(_ || (_ = {}));
  var I = { ajax: null, backdropClick: "close", Carousel: {}, closeButton: "auto", closeButtonTpl: M3, closeExisting: false, delegateEl: void 0, dragToClose: true, fadeEffect: true, groupAll: false, groupAttr: "data-fancybox", hideClass: "f-fadeOut", hideScrollbar: true, id: void 0, idle: false, keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "prev", ArrowDown: "next", ArrowRight: "next", ArrowLeft: "prev" }, l10n: o8, mainClass: "", mainStyle: {}, mainTpl: '<dialog class="fancybox__dialog">\n    <div class="fancybox__container" tabindex="0" aria-label="{{MODAL}}">\n      <div class="fancybox__backdrop"></div>\n      <div class="fancybox__carousel"></div>\n    </div>\n  </dialog>', modal: true, on: {}, parentEl: void 0, placeFocusBack: true, showClass: "f-zoomInUp", startIndex: 0, sync: void 0, theme: "dark", triggerEl: void 0, triggerEvent: void 0, zoomEffect: true };
  var z = /* @__PURE__ */ new Map();
  var H = 0;
  var B = "with-fancybox";
  var D = () => {
    let r7, T, A, M4, D2, q2, N2, V = _.Init, W = Object.assign({}, I), $ = -1, K = {}, U = [], X = false, G = true, Y = 0;
    function Z(e10, ...t9) {
      let n11 = W[e10];
      return n11 && "function" == typeof n11 ? n11(Re, ...t9) : n11;
    }
    function J(e10, t9 = []) {
      const n11 = Z("l10n") || {};
      e10 = String(e10).replace(/\{\{(\w+)\}\}/g, (e11, t10) => n11[t10] || e11);
      for (let n12 = 0; n12 < t9.length; n12++) e10 = e10.split(t9[n12][0]).join(t9[n12][1]);
      return e10 = e10.replace(/\{\{(.*?)\}\}/g, (e11, t10) => t10);
    }
    const Q = /* @__PURE__ */ new Map();
    function ee(e10, ...t9) {
      const n11 = [...Q.get(e10) || []];
      for (const [t10, o9] of Object.entries(W.on || {})) (t10 === e10 || t10.split(" ").indexOf(e10) > -1) && n11.push(o9);
      for (const e11 of n11) e11 && "function" == typeof e11 && e11(Re, ...t9);
      "*" !== e10 && ee("*", e10, ...t9);
    }
    function te() {
      s4(T, "is-revealing");
      try {
        if (document.activeElement === r7) {
          ((null == T ? void 0 : T.querySelector("[autofocus]")) || T).focus();
        }
      } catch (e10) {
      }
    }
    function ne(e10, n11) {
      var o9;
      ve(n11), de(), null === (o9 = n11.el) || void 0 === o9 || o9.addEventListener("click", ie), "inline" !== n11.type && "clone" !== n11.type || (function(e11) {
        if (!M4 || !e11 || !e11.el) return;
        let n12 = null;
        if (t(e11.src)) {
          const t9 = e11.src.split("#", 2).pop();
          n12 = t9 ? document.getElementById(t9) : null;
        }
        if (n12) {
          if (s3(n12, "f-html"), "clone" === e11.type || n12.closest(".fancybox__carousel")) {
            n12 = n12.cloneNode(true);
            const t9 = n12.dataset.animationName;
            t9 && (n12.classList.remove(t9), delete n12.dataset.animationName);
            let o10 = n12.getAttribute("id");
            o10 = o10 ? `${o10}--clone` : `clone-${$}-${e11.index}`, n12.setAttribute("id", o10);
          } else if (n12.parentNode) {
            const t9 = document.createElement("div");
            t9.inert = true, n12.parentNode.insertBefore(t9, n12), e11.placeholderEl = t9;
          }
          e11.htmlEl = n12, s3(e11.el, "has-html"), e11.el.prepend(n12), n12.classList.remove("hidden"), "none" === n12.style.display && (n12.style.display = ""), "none" === getComputedStyle(n12).getPropertyValue("display") && (n12.style.display = n12.dataset.display || "flex"), null == M4 || M4.emit("contentReady", e11);
        } else null == M4 || M4.showError(e11, "{{ELEMENT_NOT_FOUND}}");
      })(n11), "ajax" === n11.type && (function(e11) {
        const t9 = e11.el;
        if (!t9) return;
        if (e11.htmlEl || e11.xhr) return;
        null == M4 || M4.showLoading(e11), e11.state = 0;
        const n12 = new XMLHttpRequest();
        n12.onreadystatechange = function() {
          if (n12.readyState === XMLHttpRequest.DONE && V === _.Ready) if (null == M4 || M4.hideLoading(e11), e11.state = 1, 200 === n12.status) {
            let o11 = n12.responseText + "", i8 = null, s11 = null;
            if (e11.filter) {
              const t10 = document.createElement("div");
              t10.innerHTML = o11, s11 = t10.querySelector(e11.filter + "");
            }
            s11 && s11 instanceof HTMLElement ? i8 = s11 : (i8 = document.createElement("div"), i8.innerHTML = o11), i8.classList.add("f-html"), e11.htmlEl = i8, t9.classList.add("has-html"), t9.classList.add("has-ajax"), t9.prepend(i8), null == M4 || M4.emit("contentReady", e11);
          } else null == M4 || M4.showError(e11);
        };
        const o10 = Z("ajax") || null;
        n12.open(o10 ? "POST" : "GET", e11.src + ""), n12.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n12.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n12.send(o10), e11.xhr = n12;
      })(n11);
    }
    function oe(e10, t9) {
      var n11;
      ye(t9), null === (n11 = t9.el) || void 0 === n11 || n11.removeEventListener("click", ie), "inline" !== t9.type && "clone" !== t9.type || (function(e11) {
        const t10 = e11.htmlEl, n12 = e11.placeholderEl;
        t10 && ("none" !== getComputedStyle(t10).getPropertyValue("display") && (t10.style.display = "none"), t10.offsetHeight);
        n12 && (t10 && n12.parentNode && n12.parentNode.insertBefore(t10, n12), n12.remove());
        e11.htmlEl = void 0, e11.placeholderEl = void 0;
      })(t9), t9.xhr && (t9.xhr.abort(), t9.xhr = void 0);
    }
    function ie(e10) {
      if (!he()) return;
      if (V !== _.Ready) return k(e10), void e10.stopPropagation();
      if (e10.defaultPrevented) return;
      if (!f.isClickAllowed()) return;
      const t9 = e10.composedPath()[0];
      t9.closest(".fancybox__carousel") && t9.classList.contains("fancybox__slide") && fe(e10);
    }
    function se() {
      G = false, T && M4 && T.classList.remove("is-revealing"), de();
      const e10 = Z("sync");
      if (M4 && e10) {
        const t9 = e10.getPageIndex(M4.getPageIndex()) || 0;
        e10.goTo(t9, { transition: false, tween: false });
      }
    }
    function le() {
      var e10;
      !(function() {
        const e11 = null == M4 ? void 0 : M4.getViewport();
        if (!Z("dragToClose") || !M4 || !e11) return;
        if (D2 = f(e11).init(), !D2) return;
        let t10 = false, n11 = 0, o9 = 0, s11 = {}, l8 = 1;
        function r8() {
          var e12, t11;
          null == q2 || q2.spring({ clamp: true, mass: 1, tension: 0 === o9 ? 140 : 960, friction: 17, restDelta: 0.1, restSpeed: 0.1, maxSpeed: 1 / 0 }).from({ y: n11 }).to({ y: o9 }).start();
          const i8 = (null === (e12 = null == M4 ? void 0 : M4.getViewport()) || void 0 === e12 ? void 0 : e12.getBoundingClientRect().height) || 0, s12 = null === (t11 = Ee()) || void 0 === t11 ? void 0 : t11.panzoomRef;
          if (i8 && s12) if (0 === o9) s12.execute(v.Reset);
          else {
            const e13 = t5(Math.abs(n11), 0, 0.33 * i8, l8, 0.77 * l8, false);
            s12.execute(v.ZoomTo, { scale: e13 });
          }
        }
        const c6 = (e12) => {
          var t11;
          const n12 = e12.srcEvent, o10 = n12.target;
          return M4 && !(e5(n12) && (null === (t11 = n12.touches) || void 0 === t11 ? void 0 : t11.length) > 1) && o10 && !n2(o10);
        };
        q2 = c().on("step", (t11) => {
          if (T && e11 && V === _.Ready) {
            const o10 = e11.getBoundingClientRect().height;
            n11 = Math.min(o10, Math.max(-1 * o10, t11.y));
            const i8 = t5(Math.abs(n11), 0, 0.65 * o10, 1, 0.2, true);
            T.style.setProperty("--f-drag-opacity", i8 + ""), T.style.setProperty("--f-drag-offset", n11 + "px");
          }
        }), D2.on("start", function() {
          t10 || (null == q2 || q2.pause(), o9 = n11);
        }).on("panstart", (e12) => {
          var n12, o10;
          if (!t10 && c6(e12) && "y" === e12.axis) {
            k(e12.srcEvent), t10 = true, Te(), null === (n12 = null == M4 ? void 0 : M4.getViewport()) || void 0 === n12 || n12.classList.add("is-dragging");
            const i8 = null === (o10 = Ee()) || void 0 === o10 ? void 0 : o10.panzoomRef;
            if (i8) {
              l8 = i8.getTransform().scale || 1;
              const e13 = i8.getOptions();
              s11 = Object.assign({}, e13), e13.bounds = false, e13.gestures = false;
            }
          } else t10 = false;
        }).on("pan", function(e12) {
          t10 && c6(e12) && (k(e12.srcEvent), e12.srcEvent.stopPropagation(), "y" === e12.axis && (o9 += e12.deltaY, r8()));
        }).on("end", (e12) => {
          var i8, l9, a7;
          if (null === (i8 = null == M4 ? void 0 : M4.getViewport()) || void 0 === i8 || i8.classList.remove("is-dragging"), t10) {
            const t11 = null === (l9 = Ee()) || void 0 === l9 ? void 0 : l9.panzoomRef;
            if (t11) {
              null === (a7 = t11.getTween()) || void 0 === a7 || a7.end();
              const e13 = t11.getOptions();
              e13.bounds = s11.bounds || false, e13.gestures = s11.gestures || false;
            }
            c6(e12) && "y" === e12.axis && (Math.abs(e12.velocityY) > 5 || Math.abs(n11) > 50) && Ae(e12.srcEvent, "f-throwOut" + (e12.velocityY > 0 ? "Down" : "Up"));
          }
          t10 = false, V === _.Ready && 0 !== n11 && (o9 = 0, r8());
        });
      })(), document.body.addEventListener("click", pe), document.body.addEventListener("keydown", ge, { passive: false, capture: true }), de(), Le();
      const t9 = Z("sync");
      M4 && t9 && (null === (e10 = t9.getTween()) || void 0 === e10 || e10.start()), be(Ee());
    }
    function re() {
      (null == M4 ? void 0 : M4.canGoNext()) ? Le() : Pe();
    }
    function ae(e10, t9) {
      ve(t9);
    }
    function ce(e10, t9) {
      ve(t9), be(t9);
    }
    function ue() {
      var e10;
      const t9 = null == M4 ? void 0 : M4.getPlugins().Thumbs;
      s5(T, "has-thumbs", (null == t9 ? void 0 : t9.isEnabled()) || false), s5(T, "has-vertical-thumbs", !!t9 && ("scrollable" === t9.getType() || true === (null === (e10 = t9.getCarousel()) || void 0 === e10 ? void 0 : e10.isVertical())));
    }
    function de() {
      if (!T) return;
      const e10 = (null == M4 ? void 0 : M4.getPages().length) || 0, t9 = (null == M4 ? void 0 : M4.getPageIndex()) || 0, n11 = T.querySelectorAll("[data-fancybox-index],[data-fancybox-page],[data-fancybox-pages]");
      for (const o9 of n11) o9.hasAttribute("data-fancybox-index") ? o9.textContent = String(t9) : o9.hasAttribute("data-fancybox-page") ? o9.textContent = String(t9 + 1) : o9.textContent = String(e10);
    }
    function fe(e10) {
      if (!!e10.composedPath()[0].closest("[data-fancybox-close]")) return void Ae(e10);
      if (ee("backdropClick", e10), e10.defaultPrevented) return;
      Z("backdropClick") && Ae(e10);
    }
    function me() {
      Ce();
    }
    function ge(e10) {
      if (!he()) return;
      if (V !== _.Ready) return;
      const t9 = e10.key, o9 = Z("keyboard");
      if (!o9) return;
      if (e10.ctrlKey || e10.altKey || e10.shiftKey) return;
      const i8 = e10.composedPath()[0];
      if (!n(i8)) return;
      if ("Escape" !== t9 && ((e11) => {
        const t10 = ["input", "textarea", "select", "option", "video", "iframe", "[contenteditable]", "[data-selectable]", "[data-draggable]"].join(",");
        return e11.matches(t10) || e11.closest(t10);
      })(i8)) return;
      if (ee("keydown", e10), e10.defaultPrevented) return;
      const s11 = o9[t9];
      if (s11) switch (s11) {
        case "close":
          Ae(e10);
          break;
        case "next":
          k(e10), null == M4 || M4.next();
          break;
        case "prev":
          k(e10), null == M4 || M4.prev();
      }
    }
    function pe(e10) {
      if (!he()) return;
      if (V !== _.Ready) return;
      if (Ce(), e10.defaultPrevented) return;
      const t9 = e10.composedPath()[0], n11 = !!t9.closest("[data-fancybox-close]"), o9 = t9.classList.contains("fancybox__backdrop");
      (n11 || o9) && fe(e10);
    }
    function ve(e10) {
      var t9;
      const { el: n11, htmlEl: i8, panzoomRef: s11, closeButtonEl: l8 } = e10, r8 = s11 ? s11.getWrapper() : i8;
      if (!n11 || !n11.parentElement || !r8) return;
      let a7 = Z("closeButton");
      if ("auto" === a7 && (a7 = true !== (null === (t9 = null == M4 ? void 0 : M4.getPlugins().Toolbar) || void 0 === t9 ? void 0 : t9.isEnabled())), a7) {
        if (!l8) {
          const t10 = e2(J(Z("closeButtonTpl")));
          t10 && (s3(t10, "is-close-button"), e10.closeButtonEl = r8.insertAdjacentElement("afterbegin", t10), s3(n11, "has-close-btn"));
        }
      } else ye(e10);
    }
    function ye(e10) {
      e10.closeButtonEl && (e10.closeButtonEl.remove(), e10.closeButtonEl = void 0), s4(e10.el, "has-close-btn");
    }
    function be(e10) {
      if (!(G && M4 && 1 === M4.getState() && e10 && e10.index === M4.getOptions().initialPage && e10.el && e10.el.parentElement)) return;
      if (void 0 !== e10.state && 1 !== e10.state) return;
      G = false;
      const t9 = e10.panzoomRef, n11 = null == t9 ? void 0 : t9.getTween(), o9 = Z("zoomEffect") && n11 ? we(e10) : void 0;
      if (t9 && n11 && o9) {
        const { x: e11, y: i9, scale: s11 } = t9.getStartPosition();
        return void n11.spring({ tension: 215, friction: 25, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0 }).from(o9).to({ x: e11, y: i9, scale: s11 }).start();
      }
      const i8 = (null == t9 ? void 0 : t9.getContent()) || e10.htmlEl;
      i8 && R(i8, Z("showClass", e10));
    }
    function he() {
      var e10;
      return (null === (e10 = F.getInstance()) || void 0 === e10 ? void 0 : e10.getId()) === $;
    }
    function Ee() {
      var e10;
      return null === (e10 = null == M4 ? void 0 : M4.getPage()) || void 0 === e10 ? void 0 : e10.slides[0];
    }
    function xe() {
      const e10 = Ee();
      return e10 ? e10.triggerEl || Z("triggerEl") : void 0;
    }
    function we(e10) {
      var t9, n11;
      const o9 = e10.thumbEl;
      if (!o9 || !((e11) => {
        const t10 = e11.getBoundingClientRect(), n12 = e11.closest("[style]"), o10 = null == n12 ? void 0 : n12.parentElement;
        if (n12 && n12.style.transform && o10) {
          const e12 = o10.getBoundingClientRect();
          if (t10.left < e12.left || t10.left > e12.left + e12.width - t10.width) return false;
          if (t10.top < e12.top || t10.top > e12.top + e12.height - t10.height) return false;
        }
        const i9 = Math.max(document.documentElement.clientHeight, window.innerHeight), s12 = Math.max(document.documentElement.clientWidth, window.innerWidth);
        return !(t10.bottom < 0 || t10.top - i9 >= 0 || t10.right < 0 || t10.left - s12 >= 0);
      })(o9)) return;
      const i8 = null === (n11 = null === (t9 = e10.panzoomRef) || void 0 === t9 ? void 0 : t9.getWrapper()) || void 0 === n11 ? void 0 : n11.getBoundingClientRect(), s11 = null == i8 ? void 0 : i8.width, l8 = null == i8 ? void 0 : i8.height;
      if (!s11 || !l8) return;
      const r8 = o9.getBoundingClientRect();
      let a7 = r8.width, c6 = r8.height, u6 = r8.left, d3 = r8.top;
      if (!r8 || !a7 || !c6) return;
      if (o9 instanceof HTMLImageElement) {
        const e11 = window.getComputedStyle(o9).getPropertyValue("object-fit");
        if ("contain" === e11 || "scale-down" === e11) {
          const { width: t10, height: n12 } = ((e12, t11, n13, o10, i9 = "contain") => {
            if ("contain" === i9 || e12 > n13 || t11 > o10) {
              const i10 = n13 / e12, s12 = o10 / t11, l9 = Math.min(i10, s12);
              e12 *= l9, t11 *= l9;
            }
            return { width: e12, height: t11 };
          })(o9.naturalWidth, o9.naturalHeight, a7, c6, e11);
          u6 += 0.5 * (a7 - t10), d3 += 0.5 * (c6 - n12), a7 = t10, c6 = n12;
        }
      }
      if (Math.abs(s11 / l8 - a7 / c6) > 0.1) return;
      return { x: u6 + 0.5 * a7 - (i8.left + 0.5 * s11), y: d3 + 0.5 * c6 - (i8.top + 0.5 * l8), scale: a7 / s11 };
    }
    function je() {
      N2 && clearTimeout(N2), N2 = void 0, document.removeEventListener("mousemove", me);
    }
    function Le() {
      if (X) return;
      if (N2) return;
      const e10 = Z("idle");
      e10 && (N2 = setTimeout(Se, e10));
    }
    function Se() {
      T && (je(), s3(T, "is-idle"), document.addEventListener("mousemove", me), X = true);
    }
    function Ce() {
      X && (Pe(), Le());
    }
    function Pe() {
      je(), null == T || T.classList.remove("is-idle"), X = false;
    }
    function Te() {
      const e10 = xe();
      var t9;
      !e10 || (t9 = e10.getBoundingClientRect()).bottom > 0 && t9.right > 0 && t9.left < (window.innerWidth || document.documentElement.clientWidth) && t9.top < (window.innerHeight || document.documentElement.clientHeight) || e10.closest("[inert]") || e10.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
    }
    function Ae(e10, t9) {
      var n11, o9, i8, s11, r8;
      if (V === _.Closing || V === _.Destroyed) return;
      const a7 = new Event("shouldClose", { bubbles: true, cancelable: true });
      if (ee("shouldClose", a7, e10), a7.defaultPrevented) return;
      if (je(), e10) {
        if (e10.defaultPrevented) return;
        k(e10), e10.stopPropagation(), e10.stopImmediatePropagation();
      }
      if (V = _.Closing, null == q2 || q2.pause(), null == D2 || D2.destroy(), M4) {
        null === (n11 = M4.getGestures()) || void 0 === n11 || n11.destroy(), null === (o9 = M4.getTween()) || void 0 === o9 || o9.pause();
        for (const e11 of M4.getSlides()) {
          const t10 = e11.panzoomRef;
          t10 && (r3(t10.getOptions(), { clickAction: false, dblClickAction: false, wheelAction: false, bounds: false, minScale: 0, maxScale: 1 / 0 }), null === (i8 = t10.getGestures()) || void 0 === i8 || i8.destroy(), null === (s11 = t10.getTween()) || void 0 === s11 || s11.pause());
        }
      }
      const c6 = null == M4 ? void 0 : M4.getPlugins();
      null === (r8 = null == c6 ? void 0 : c6.Autoplay) || void 0 === r8 || r8.stop();
      const u6 = null == c6 ? void 0 : c6.Fullscreen;
      u6 && u6.inFullscreen() ? Promise.resolve(u6.exit()).then(() => {
        setTimeout(() => {
          Me(e10, t9);
        }, 150);
      }) : Me(e10, t9);
    }
    function Me(e10, t9) {
      var n11, o9;
      if (V !== _.Closing) return;
      ee("close", e10), G = false, document.body.removeEventListener("click", pe), document.body.removeEventListener("keydown", ge, { passive: false, capture: true }), Z("placeFocusBack") && Te();
      const i8 = document.activeElement;
      i8 && (null == r7 ? void 0 : r7.contains(i8)) && i8.blur(), Z("fadeEffect") && (null == T || T.classList.remove("is-ready"), null == T || T.classList.add("is-hiding")), null == T || T.classList.add("is-closing");
      const s11 = Ee(), l8 = null == s11 ? void 0 : s11.el, a7 = null == s11 ? void 0 : s11.panzoomRef, c6 = null === (n11 = null == s11 ? void 0 : s11.panzoomRef) || void 0 === n11 ? void 0 : n11.getTween(), u6 = t9 || Z("hideClass");
      let d3 = false, m4 = false;
      if (M4 && s11 && l8 && a7 && c6) {
        let e11;
        if (Z("zoomEffect") && 1 === s11.state && (e11 = we(s11)), e11) {
          d3 = true;
          const t10 = () => {
            e11 = we(s11), e11 ? c6.to(Object.assign(Object.assign({}, y), e11)) : ke();
          };
          a7.on("refresh", () => {
            t10();
          }), c6.easing(c.Easings.EaseOut).duration(350).from(Object.assign({}, a7.getTransform())).to(Object.assign(Object.assign({}, y), e11)).start(), (null == l8 ? void 0 : l8.getAnimations()) && (l8.style.animationPlayState = "paused", requestAnimationFrame(() => {
            t10();
          }));
        }
      }
      const g2 = (null == s11 ? void 0 : s11.htmlEl) || (null === (o9 = null == s11 ? void 0 : s11.panzoomRef) || void 0 === o9 ? void 0 : o9.getWrapper());
      g2 && O(g2), !d3 && u6 && g2 && (m4 = true, R(g2, u6, () => {
        ke();
      })), d3 || m4 ? setTimeout(() => {
        ke();
      }, 350) : ke();
    }
    function ke() {
      var e10, t9, n11, o9, i8;
      if (V === _.Destroyed) return;
      V = _.Destroyed;
      const l8 = xe();
      ee("destroy"), null === (t9 = null === (e10 = Z("sync")) || void 0 === e10 ? void 0 : e10.getPlugins().Autoplay) || void 0 === t9 || t9.resume(), null === (o9 = null === (n11 = Z("sync")) || void 0 === n11 ? void 0 : n11.getPlugins().Autoscroll) || void 0 === o9 || o9.resume(), r7 instanceof HTMLDialogElement && r7.close(), null === (i8 = null == M4 ? void 0 : M4.getContainer()) || void 0 === i8 || i8.classList.remove("is-idle"), null == M4 || M4.destroy();
      for (const e11 of Object.values(K)) null == e11 || e11.destroy();
      if (K = {}, null == r7 || r7.remove(), r7 = void 0, T = void 0, M4 = void 0, z.delete($), !z.size && (t6(false), document.documentElement.classList.remove(B), Z("placeFocusBack") && l8 && !l8.closest("[inert]"))) try {
        null == l8 || l8.focus({ preventScroll: true });
      } catch (e11) {
      }
    }
    const Re = { close: Ae, destroy: ke, getCarousel: function() {
      return M4;
    }, getContainer: function() {
      return T;
    }, getId: function() {
      return $;
    }, getOptions: function() {
      return W;
    }, getPlugins: function() {
      return K;
    }, getSlide: function() {
      return Ee();
    }, getState: function() {
      return V;
    }, init: function(t9 = [], n11 = {}) {
      V !== _.Init && (Re.destroy(), V = _.Init), W = r3({}, I, n11), $ = Z("id") || "fancybox-" + ++H;
      const a7 = z.get($);
      if (a7 && a7.destroy(), z.set($, Re), ee("init"), (function() {
        for (const [e10, t10] of Object.entries(Object.assign(Object.assign({}, F.Plugins), W.plugins || {}))) if (e10 && !K[e10] && t10 instanceof Function) {
          const n12 = t10();
          n12.init(Re), K[e10] = n12;
        }
        ee("initPlugins");
      })(), (function(e10 = []) {
        ee("initSlides", e10), U = [...e10];
      })(t9), (function() {
        const t10 = Z("parentEl") || document.body;
        if (!(t10 && t10 instanceof HTMLElement)) return;
        const n12 = J(Z("mainTpl") || "");
        if (r7 = e2(n12) || void 0, !r7) return;
        if (T = r7.querySelector(".fancybox__container"), !(T && T instanceof HTMLElement)) return;
        const l8 = Z("mainClass");
        l8 && s3(T, l8);
        const a8 = Z("mainStyle");
        if (a8 && t3(a8)) for (const [e10, t11] of Object.entries(a8)) T.style.setProperty(e10, t11);
        const u6 = Z("theme"), d3 = "auto" === u6 ? window.matchMedia("(prefers-color-scheme:light)").matches : "light" === u6;
        T.setAttribute("theme", d3 ? "light" : "dark"), r7.setAttribute("id", `${$}`), r7.addEventListener("keydown", (e10) => {
          "Escape" === e10.key && k(e10);
        }), r7.addEventListener("wheel", (e10) => {
          const t11 = e10.target;
          let n13 = Z("wheel", e10);
          t11.closest(".f-thumbs") && (n13 = "slide");
          const o9 = "slide" === n13, s11 = [-e10.deltaX || 0, -e10.deltaY || 0, -e10.detail || 0].reduce(function(e11, t12) {
            return Math.abs(t12) > Math.abs(e11) ? t12 : e11;
          }), l9 = Math.max(-1, Math.min(1, s11)), r8 = Date.now();
          Y && r8 - Y < 300 ? o9 && k(e10) : (Y = r8, ee("wheel", e10, l9), e10.defaultPrevented || ("close" === n13 ? Ae(e10) : "slide" === n13 && M4 && !n2(t11) && (k(e10), M4[l9 > 0 ? "prev" : "next"]())));
        }, { capture: true, passive: false }), r7.addEventListener("cancel", (e10) => {
          Ae(e10);
        }), t10.append(r7), 1 === z.size && (Z("hideScrollbar") && t6(true), document.documentElement.classList.add(B));
        ee("initLayout"), r7 instanceof HTMLDialogElement && (Z("modal") ? r7.showModal() : r7.show());
      })(), (function() {
        if (A = (null == r7 ? void 0 : r7.querySelector(".fancybox__carousel")) || void 0, !A) return;
        A.fancybox = Re;
        const e10 = r3({}, { Autoplay: { autoStart: false, pauseOnHover: false, progressbarParentEl: (e11) => {
          const t10 = e11.getContainer();
          return (null == t10 ? void 0 : t10.querySelector(".f-carousel__toolbar [data-autoplay-action]")) || t10;
        } }, Fullscreen: { el: T }, Toolbar: { absolute: true, items: { counter: { tpl: '<div class="f-counter"><span data-fancybox-page></span>/<span data-fancybox-pages></span></div>' } }, display: { left: ["counter"], right: ["toggleFull", "autoplay", "fullscreen", "thumbs", "close"] } }, Video: { autoplay: true }, Thumbs: { minCount: 2, Carousel: { classes: { container: "fancybox__thumbs" } } }, classes: { container: "fancybox__carousel", viewport: "fancybox__viewport", slide: "fancybox__slide" }, spinnerTpl: '<div class="f-spinner" data-fancybox-close></div>', dragFree: false, slidesPerPage: 1, plugins: { Sync: i3, Arrows: l3, Lazyload: i4, Zoomable: s6, Html: l4, Video: s9, Autoplay: o6, Fullscreen: l6, Thumbs: c4, Toolbar: c3 } }, Z("Carousel") || {}, { slides: U, enabled: true, initialPage: Z("startIndex") || 0, l10n: Z("l10n") });
        M4 = x2(A, e10), ee("initCarousel", M4), M4.on("*", (e11, t10, ...n12) => {
          ee(`Carousel.${t10}`, e11, ...n12);
        }), M4.on("attachSlideEl", ne), M4.on("detachSlideEl", oe), M4.on("contentLoading", ae), M4.on("contentReady", ce), M4.on("ready", le), M4.on("change", se), M4.on("settle", re), M4.on("thumbs:ready", ue), M4.on("thumbs:destroy", ue), M4.init();
      })(), r7 && T) {
        if (Z("closeExisting")) for (const [e10, t10] of z.entries()) e10 !== $ && t10.close();
        Z("fadeEffect") ? (setTimeout(() => {
          te();
        }, 500), s3(T, "is-revealing")) : te(), T.classList.add("is-ready"), V = _.Ready, ee("ready");
      }
    }, isCurrentSlide: function(e10) {
      const t9 = Ee();
      return !(!e10 || !t9) && t9.index === e10.index;
    }, isTopMost: function() {
      return he();
    }, localize: J, off: function(e10, t9) {
      return Q.has(e10) && Q.set(e10, Q.get(e10).filter((e11) => e11 !== t9)), Re;
    }, on: function(e10, t9) {
      return Q.set(e10, [...Q.get(e10) || [], t9]), Re;
    }, toggleIdle(e10) {
      (X || true === e10) && Se(), X && false !== e10 || Pe();
    } };
    return Re;
  };
  function q() {
    for (const e10 of Object.values(F.Plugins)) {
      const t9 = e10.setup;
      "function" == typeof t9 && t9(F);
    }
  }
  function N(e10, t9 = {}) {
    var n11, o9, i8;
    if (!(e10 && e10 instanceof Element)) return;
    let s11, r7, a7, c6, u6 = {};
    for (const [t10, n12] of F.openers) if (t10.contains(e10)) for (const [o10, i9] of n12) {
      let n13;
      if (o10) {
        for (const i10 of t10.querySelectorAll(o10)) if (i10.contains(e10)) {
          n13 = i10;
          break;
        }
        if (!n13) continue;
      }
      for (const [o11, d4] of i9) {
        let i10 = null;
        try {
          i10 = e10.closest(o11);
        } catch (e11) {
        }
        i10 && (r7 = t10, a7 = n13, s11 = i10, c6 = o11, r3(u6, d4 || {}));
      }
    }
    if (!r7 || !c6 || !s11) return;
    const d3 = r3({}, I, t9, u6, { triggerEl: s11 });
    let f3 = [].slice.call((a7 || r7).querySelectorAll(c6));
    const m4 = s11.closest(".f-carousel"), g2 = null == m4 ? void 0 : m4.carousel;
    if (g2 && (!a7 || !m4.contains(a7))) {
      const e11 = [];
      for (const t10 of null == g2 ? void 0 : g2.getSlides()) {
        const n12 = t10.el;
        n12 && (n12.matches(c6) ? e11.push(n12) : e11.push(...[].slice.call(n12.querySelectorAll(c6))));
      }
      e11.length && (f3 = [...e11], null === (n11 = g2.getPlugins().Autoplay) || void 0 === n11 || n11.pause(), null === (o9 = g2.getPlugins().Autoscroll) || void 0 === o9 || o9.pause(), d3.sync = g2);
    }
    if (false === d3.groupAll) {
      const e11 = d3.groupAttr, t10 = e11 && s11 ? s11.getAttribute(`${e11}`) : "";
      f3 = e11 && t10 && "true" !== t10 ? f3.filter((n12) => n12.getAttribute(`${e11}`) === t10) : [s11];
    }
    if (!f3.length) return;
    null === (i8 = d3.triggerEvent) || void 0 === i8 || i8.preventDefault();
    const p2 = F.getInstance(), v4 = null == p2 ? void 0 : p2.getState();
    if (p2 && (v4 === _.Init || v4 === _.Ready)) {
      const e11 = p2.getOptions().triggerEl;
      if (e11 && f3.indexOf(e11) > -1) return;
    }
    return Object.assign({}, d3.Carousel || {}).rtl && (f3 = f3.reverse()), s11 && void 0 === t9.startIndex && (d3.startIndex = f3.indexOf(s11)), F.fromNodes(f3, d3);
  }
  var F = { Plugins: { Hash: m3 }, version: "6.1.14", openers: /* @__PURE__ */ new Map(), bind: function(e10, n11, o9, i8) {
    if (!e8()) return;
    let s11 = document.body, l8 = null, a7 = "[data-fancybox]", c6 = {};
    e10 instanceof Element && (s11 = e10), t(e10) && t(n11) ? (l8 = e10, a7 = n11) : t(n11) && t(o9) ? (l8 = n11, a7 = o9) : t(n11) ? a7 = n11 : t(e10) && (a7 = e10), "object" == typeof n11 && (c6 = n11 || {}), "object" == typeof o9 && (c6 = o9 || {}), "object" == typeof i8 && (c6 = i8 || {}), (function(e11, t9, n12, o10 = {}) {
      if (!(e11 && e11 instanceof Element && n12)) return;
      const i9 = F.openers.get(e11) || /* @__PURE__ */ new Map(), s12 = i9.get(t9) || /* @__PURE__ */ new Map();
      s12.set(n12, o10), i9.set(t9, s12), F.openers.set(e11, i9), 1 === i9.size && e11.addEventListener("click", F.fromEvent), q();
    })(s11, l8, a7, c6);
  }, close: function(e10 = true, ...t9) {
    if (e10) for (const e11 of z.values()) e11.close(...t9);
    else {
      const e11 = F.getInstance();
      e11 && e11.close(...t9);
    }
  }, destroy: function() {
    let e10;
    for (; e10 = F.getInstance(); ) e10.destroy();
    for (const e11 of F.openers.keys()) e11.removeEventListener("click", F.fromEvent);
    F.openers.clear();
  }, fromEvent: function(e10) {
    if (e10.defaultPrevented) return;
    if (e10.button && 0 !== e10.button) return;
    if (e10.ctrlKey || e10.metaKey || e10.shiftKey) return;
    let t9 = e10.composedPath()[0];
    const n11 = { triggerEvent: e10 };
    if (t9.closest(".fancybox__container.is-hiding")) return k(e10), void e10.stopPropagation();
    const o9 = t9.closest("[data-fancybox-delegate]") || void 0;
    if (o9) {
      const e11 = o9.dataset.fancyboxDelegate || "", i8 = document.querySelectorAll(`[data-fancybox="${e11}"]`), s11 = parseInt(o9.dataset.fancyboxIndex || "", 10) || 0;
      t9 = i8[s11] || i8[0], r3(n11, { delegateEl: o9, startIndex: s11 });
    }
    return N(t9, n11);
  }, fromNodes: function(e10, t9) {
    t9 = r3({}, I, t9 || {});
    const n11 = [], o9 = (e11) => e11 instanceof HTMLImageElement ? e11 : e11 instanceof HTMLElement ? e11.querySelector("img:not([aria-hidden])") : void 0;
    for (const i8 of e10) {
      const s11 = i8.dataset || {}, l8 = t9.delegateEl && e10.indexOf(i8) === t9.startIndex ? t9.delegateEl : void 0, r7 = o9(l8) || o9(i8) || void 0, a7 = s11.src || i8.getAttribute("href") || i8.getAttribute("currentSrc") || i8.getAttribute("src") || void 0, c6 = s11.thumb || s11.thumbSrc || (null == r7 ? void 0 : r7.getAttribute("currentSrc")) || (null == r7 ? void 0 : r7.getAttribute("src")) || (null == r7 ? void 0 : r7.dataset.lazySrc) || void 0, u6 = { src: a7, alt: s11.alt || (null == r7 ? void 0 : r7.getAttribute("alt")) || void 0, thumbSrc: c6, thumbEl: r7, triggerEl: i8, delegateEl: l8 };
      for (const e11 in s11) {
        let t10 = s11[e11] + "";
        u6[e11] = "true" === t10 ? "fancybox" !== e11 || "" : "false" !== t10 && t10;
      }
      n11.push(u6);
    }
    return F.show(n11, t9);
  }, fromSelector: function(e10, n11, o9, i8) {
    if (!e8()) return;
    let s11 = document.body, l8 = null, a7 = "[data-fancybox]", c6 = {};
    e10 instanceof Element && (s11 = e10), t(e10) && t(n11) ? (l8 = e10, a7 = n11) : t(n11) && t(o9) ? (l8 = n11, a7 = o9) : t(n11) ? a7 = n11 : t(e10) && (a7 = e10), "object" == typeof n11 && (c6 = n11 || {}), "object" == typeof o9 && (c6 = o9 || {}), "object" == typeof i8 && (c6 = i8 || {});
    for (const [e11, t9] of F.openers) for (const [n12, o10] of t9) for (const [t10, i9] of o10) if (e11 === s11 && n12 === l8) {
      const e12 = s11.querySelector((n12 ? `${n12} ` : "") + a7);
      if (e12 && e12.matches(t10)) return F.fromTriggerEl(e12, c6);
    }
  }, fromTriggerEl: N, getCarousel: function() {
    var e10;
    return (null === (e10 = F.getInstance()) || void 0 === e10 ? void 0 : e10.getCarousel()) || void 0;
  }, getDefaults: function() {
    return I;
  }, getInstance: function(e10) {
    if (e10) {
      const t9 = z.get(e10);
      return t9 && t9.getState() !== _.Destroyed ? t9 : void 0;
    }
    return Array.from(z.values()).reverse().find((e11) => {
      if (e11.getState() !== _.Destroyed) return e11;
    }) || void 0;
  }, getSlide: function() {
    var e10;
    return (null === (e10 = F.getInstance()) || void 0 === e10 ? void 0 : e10.getSlide()) || void 0;
  }, show: function(e10 = [], t9 = {}) {
    return q(), D().init(e10, t9);
  }, unbind: function(e10, n11, o9) {
    if (!e8()) return;
    let i8 = document.body, s11 = null, l8 = "[data-fancybox]";
    e10 instanceof Element && (i8 = e10), t(e10) && t(n11) ? (s11 = e10, l8 = n11) : t(n11) && t(o9) ? (s11 = n11, l8 = o9) : t(n11) ? l8 = n11 : t(e10) && (l8 = e10), (function(e11, t9, n12) {
      if (!(e11 && e11 instanceof Element && n12)) return;
      const o10 = F.openers.get(e11) || /* @__PURE__ */ new Map(), i9 = o10.get(t9) || /* @__PURE__ */ new Map();
      i9 && n12 && i9.delete(n12), i9.size && n12 || o10.delete(t9), o10.size || (F.openers.delete(e11), e11.removeEventListener("click", F.fromEvent));
    })(i8, s11, l8);
  } };

  // assets/js/functions/aboutPage.js
  function AboutStory() {
    const section = document.getElementById("about-story");
    if (!section) return;
    const steps = [...section.querySelectorAll(".about-story-step")];
    const progress = document.getElementById("about-story-progress");
    const scroller = document.getElementById("about-story-scroll");
    const fade = section.querySelector(".about-story-fade");
    if (!steps.length) return;
    let activeIndex = 0;
    let locked = false;
    const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;
    const setActive = (index) => {
      activeIndex = index;
      steps.forEach((step, i8) => {
        const on2 = i8 === index;
        step.dataset.state = on2 ? "active" : "idle";
        const dot = step.querySelector(".about-story-dot");
        if (dot) dot.dataset.state = on2 ? "active" : "idle";
      });
      if (fade) {
        fade.classList.toggle("opacity-0", index >= steps.length - 1);
      }
      if (!progress) return;
      const track = progress.parentElement;
      const ratio = steps.length <= 1 ? 1 : index / (steps.length - 1);
      const min = 20;
      const max = track?.clientHeight || 80;
      progress.style.height = `${Math.max(min, Math.round(min + (max - min) * ratio))}px`;
    };
    const goToStep = (index) => {
      index = Math.max(0, Math.min(steps.length - 1, index));
      const step = steps[index];
      if (!step || !scroller) {
        setActive(index);
        return;
      }
      if (isDesktop()) {
        scroller.scrollTo({ top: step.offsetTop, behavior: "smooth" });
      }
      setActive(index);
    };
    const mobileObserver = new IntersectionObserver(
      (entries) => {
        if (isDesktop()) return;
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a7, b3) => b3.intersectionRatio - a7.intersectionRatio)[0];
        if (!visible) return;
        const index = steps.indexOf(visible.target);
        if (index >= 0) setActive(index);
      },
      { root: null, rootMargin: "-35% 0px -45% 0px", threshold: [0.25, 0.5, 0.75] }
    );
    steps.forEach((step) => mobileObserver.observe(step));
    if (scroller) {
      scroller.addEventListener(
        "wheel",
        (event2) => {
          if (!isDesktop()) return;
          event2.preventDefault();
          if (locked || Math.abs(event2.deltaY) < 2) return;
          locked = true;
          goToStep(activeIndex + (event2.deltaY > 0 ? 1 : -1));
          window.setTimeout(() => {
            locked = false;
          }, 450);
        },
        { passive: false }
      );
    }
    const onResize2 = () => {
      if (isDesktop()) goToStep(activeIndex);
      else setActive(0);
    };
    window.addEventListener("resize", onResize2, { passive: true });
    setActive(0);
  }
  function AboutGallery() {
    const el = document.querySelector(".about-gallery-swiper");
    if (!el || typeof el.initialize !== "function") return;
    const paginationEl = document.querySelector(".about-gallery-pagination");
    Object.assign(el, {
      slidesPerView: 3,
      spaceBetween: 12,
      centeredSlides: true,
      loop: true,
      speed: 450,
      breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 12,
          centeredSlides: true
        }
      },
      pagination: paginationEl ? {
        el: paginationEl,
        clickable: true
      } : false
    });
    el.initialize();
    const swiper = el.swiper;
    if (!swiper) return;
    document.querySelectorAll(".about-gallery-prev").forEach((btn) => {
      btn.addEventListener("click", () => swiper.slidePrev());
    });
    document.querySelectorAll(".about-gallery-next").forEach((btn) => {
      btn.addEventListener("click", () => swiper.slideNext());
    });
    el.addEventListener("click", (event2) => {
      const link = event2.target.closest("a.about-gallery-lightbox");
      if (!link) return;
      event2.preventDefault();
      const links = [
        ...el.querySelectorAll(
          "swiper-slide:not(.swiper-slide-duplicate) a.about-gallery-lightbox"
        )
      ];
      const items = links.map((anchor) => ({
        src: anchor.getAttribute("href"),
        type: "image"
      }));
      const startIndex = Math.max(
        0,
        items.findIndex((item) => item.src === link.getAttribute("href"))
      );
      F.show(items, {
        startIndex,
        Thumbs: false,
        Toolbar: {
          display: {
            left: ["counter"],
            right: ["close"]
          }
        }
      });
    });
  }

  // assets/js/modules/fancybox.js
  function fancybox() {
    F.bind("[data-fancybox]", {
      groupAll: false,
      Thumbs: false,
      Toolbar: {
        display: {
          left: ["counter"],
          right: ["close"]
        }
      }
    });
  }

  // assets/js/index.js
  Modals();
  register();
  SubMenuDesktop();
  SubMenuMobile();
  Htmx();
  FaqTabs();
  FaqCard();
  videoCover();
  VideoPlyr();
  shareBtn();
  Accordion();
  SearchPage();
  Marquee();
  QuoteForm();
  AboutStory();
  AboutGallery();
  fancybox();
})();
/*! Bundled license information:

@fancyapps/ui/dist/utils/isString.js:
@fancyapps/ui/dist/utils/isNode.js:
@fancyapps/ui/dist/utils/getScrollableParent.js:
@fancyapps/ui/dist/utils/strToHtml.js:
@fancyapps/ui/dist/utils/clamp.js:
@fancyapps/ui/dist/utils/isPlainObject.js:
@fancyapps/ui/dist/utils/isEqual.js:
@fancyapps/ui/dist/libs/tween.js:
@fancyapps/ui/dist/libs/gestures.js:
@fancyapps/ui/dist/panzoom/l10n/en_EN.js:
@fancyapps/ui/dist/utils/addClass.js:
@fancyapps/ui/dist/utils/removeClass.js:
@fancyapps/ui/dist/utils/toggleClass.js:
@fancyapps/ui/dist/panzoom/panzoom.js:
@fancyapps/ui/dist/utils/getDirectChildren.js:
@fancyapps/ui/dist/utils/extend.js:
@fancyapps/ui/dist/utils/map.js:
@fancyapps/ui/dist/carousel/l10n/en_EN.js:
@fancyapps/ui/dist/carousel/carousel.js:
@fancyapps/ui/dist/utils/scrollLock.js:
@fancyapps/ui/dist/utils/canUseDOM.js:
@fancyapps/ui/dist/utils/replaceAll.js:
@fancyapps/ui/dist/carousel/carousel.zoomable.js:
@fancyapps/ui/dist/carousel/carousel.sync.js:
@fancyapps/ui/dist/carousel/carousel.lazyload.js:
@fancyapps/ui/dist/carousel/carousel.arrows.js:
@fancyapps/ui/dist/shared/buttons.js:
@fancyapps/ui/dist/carousel/carousel.toolbar.js:
@fancyapps/ui/dist/carousel/carousel.autoplay.js:
@fancyapps/ui/dist/carousel/carousel.thumbs.js:
@fancyapps/ui/dist/carousel/carousel.html.js:
@fancyapps/ui/dist/carousel/carousel.video.js:
@fancyapps/ui/dist/carousel/carousel.fullscreen.js:
@fancyapps/ui/dist/fancybox/fancybox.hash.js:
@fancyapps/ui/dist/fancybox/l10n/en_EN.js:
@fancyapps/ui/dist/fancybox/fancybox.js:
@fancyapps/ui/dist/index.js:
  (*! License details at fancyapps.com/license *)
*/
