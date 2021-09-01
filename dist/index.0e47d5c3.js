// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"Z1ywL":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "69edfc450e47d5c3";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["Z1ywL"], null, "parcelRequireff1f")
const toggleSwitch = document.querySelector(".switch");
const toggleSwitchSlider = document.querySelector(".switch__slider");
const calculatorHeader = document.querySelector(".calculator__header");
const calculatorDisplay = document.querySelector(".calculator__display");
const equalKey = document.querySelector(".calculator__key--equal");
//////////////////////////
// Calculator - Theme switching Logic
let currentThemeNumber = 1;
const toggleSwitchHandler = function() {
    switch(currentThemeNumber){
        case 1:
            toggleSwitchSlider.style.transform = "translateX(calc(var(--slider-size) + 37.5%))";
            currentThemeNumber++;
            setTheme(currentThemeNumber);
            break;
        case 2:
            toggleSwitchSlider.style.transform = "translateX(calc((var(--slider-size) + 37.5%)*2))";
            currentThemeNumber++;
            setTheme(currentThemeNumber);
            break;
        case 3:
            toggleSwitchSlider.style.transform = "translateX(0)";
            currentThemeNumber = 1;
            setTheme(currentThemeNumber);
            break;
        default:
            break;
    }
};
const setTheme = function(themeNumber) {
    document.documentElement.setAttribute("data-theme", themeNumber);
    const items = [
        calculatorHeader,
        calculatorDisplay
    ];
    if (currentThemeNumber === 1) items.forEach((item)=>{
        item.style.setProperty("--text-color--1", "var(--text-color--2");
    });
    else items.forEach((item)=>{
        item.style.removeProperty("--text-color--1");
    });
    if (currentThemeNumber === 3) equalKey.style.setProperty("--text-color--2", "var(--text-color--3");
    else equalKey.style.removeProperty("--text-color--2");
};
setTheme();
toggleSwitch.addEventListener("click", toggleSwitchHandler);
//////////////////////////////////
// Calculator - Application Logic
const keypad = document.querySelector(".calculator__keypad");
const firstLineDisplay = document.querySelector(".calculator__display--first-line");
const secondLineDisplay = document.querySelector(".calculator__display--second-line");
// firstOperand[0-9] operator[+,-,*,/] lastOperand[0-9] = result
//e.g. 1 + 2 = 3
let state = {
    firstOperand: "",
    operator: "",
    lastOperand: "",
    result: ""
};
let stateHistory = Object.create(state);
function handleEvent(e) {
    let value = "";
    if (e.type === "keydown") value = e.key;
    if (e.type === "click") value = e.target.dataset.value;
    if (value === "=" || value === "Enter") {
        // To prevent default behaviour of "enter" key
        e.preventDefault();
        handleEqualKey();
        return;
    }
    if (value === "Backspace" || value === "del") {
        handleDelKey();
        render("secondLine");
    }
    if (value === "reset" || value === "Escape") {
        reset();
        return;
    }
    updateState(value);
    state.firstOperand.length > 12 ? secondLineDisplay.style.fontSize = "3.5rem" : secondLineDisplay.style.fontSize = "4.8rem";
}
function updateState(value) {
    let { firstOperand , operator , lastOperand , result  } = state;
    // Case 1: If the input value is a numeric value or decimal point
    // a + b = c
    if (!Number.isNaN(+value) || value === ".") {
        // First condition for inserting value into first operand
        if (operator === "" && lastOperand === "" && result === "" && firstOperand.length <= 16) {
            // Stop if the operand already has a decimal point
            if (value === "." && firstOperand.includes(".")) return;
            // else
            if (value === "." && firstOperand === "") {
                state.firstOperand = "0.";
                render("secondLine");
                return;
            }
            state.firstOperand += value;
            render("secondLine");
            return;
        }
        // Second condition for inserting value into first operand
        if (firstOperand === "" && operator === "" && lastOperand === "" && result !== "" && firstOperand.length <= 16) {
            state.result = "";
            state.firstOperand += value;
            firstLineDisplay.textContent = "";
            render("secondLine");
            return;
        }
        // Only condition for inserting value into last operand
        if (operator !== "" && lastOperand.length <= 16) {
            if (value === "." && lastOperand === "") {
                state.lastOperand = "0.";
                secondLineDisplay.textContent = thousandsSeparator("lastOperand");
                return;
            }
            state.lastOperand += value;
            secondLineDisplay.textContent = thousandsSeparator("lastOperand");
            return;
        }
    }
    // Case 2: If the input value is operational key
    // c = a + b
    if ([
        "+",
        "-",
        "*",
        "/"
    ].includes(value)) {
        handleDecimalPoint("firstOperand");
        if (firstOperand !== "" && lastOperand == "") {
            state.operator = value;
            render("firstLine");
            secondLineDisplay.textContent = Number(state.firstOperand).toLocaleString();
            return;
        }
        if (firstOperand !== "" && operator !== "" && lastOperand !== "") {
            let result1 = handleFloat(calculateResult(state));
            state.firstOperand = result1;
            state.operator = value;
            state.lastOperand = "";
            render("firstLine");
            secondLineDisplay.textContent = Number(state.firstOperand).toLocaleString();
            return;
        }
        if (firstOperand === "" && operator === "" && lastOperand === "" && result !== "") {
            state.firstOperand = state.result;
            state.operator = value;
            render("firstLine");
            secondLineDisplay.textContent = Number(state.firstOperand).toLocaleString();
            return;
        }
        if (firstOperand === "" && operator === "") {
            state.firstOperand = "0";
            state.operator = value;
            render("firstLine");
            secondLineDisplay.textContent = Number(state.firstOperand).toLocaleString();
            return;
        }
    }
// console.log(state);
}
function calculateResult() {
    handleDecimalPoint("lastOperand");
    let firstOperand = +state.firstOperand;
    let operator = state.operator;
    let lastOperand = +state.lastOperand;
    if (operator === "+") return firstOperand + lastOperand;
    if (operator === "-") return firstOperand - lastOperand;
    if (operator === "*") return firstOperand * lastOperand;
    if (operator === "/") return firstOperand / lastOperand;
}
function setResult() {
    // 1 + 2 = 3
    if (state.operator && state.lastOperand !== "") {
        state.result = handleFloat(calculateResult());
        return;
    }
    // _ _ _ = _
    if (state.firstOperand === "" && state.result === "") {
        state.firstOperand = "0";
        state.result = "0";
        return;
    }
    // 1 _ _ = _
    if (state.firstOperand !== "" && state.operator === "") {
        handleDecimalPoint("firstOperand");
        state.result = state.firstOperand;
        return;
    }
    // prettier-ignore
    // 1 + _ = _
    if (state.lastOperand === "" && state.result === "") {
        state.lastOperand = state.firstOperand;
        state.result = handleFloat(calculateResult(state));
        return;
    }
    // _ _ _ = 1
    if (state.result !== "") {
        state.firstOperand = stateHistory.result;
        state.operator = stateHistory.operator;
        state.lastOperand = stateHistory.lastOperand;
        state.result = handleFloat(calculateResult(state));
        return;
    }
}
function handleDelKey() {
    //a + b = c
    if (state.operator === "" && state.firstOperand !== "") state.firstOperand = state.firstOperand.slice(0, state.firstOperand.length - 1);
    if (state.operator !== "" && state.lastOperand !== "") state.lastOperand = state.lastOperand.slice(0, state.lastOperand.length - 1);
    // Erasing first line display when del key is pressed after pressing equal(=) key
    if (state.result !== "") firstLineDisplay.textContent = "";
}
function handleEqualKey() {
    setResult();
    // Displaying the expression on the first line
    firstLineDisplay.textContent = `\n      ${state.firstOperand} ${state.operator === "*" ? "×" : state.operator} ${state.lastOperand} =\n    `;
    stateHistory = {
        ...state
    };
    // Resetting the state object
    state.firstOperand = "";
    state.operator = "";
    state.lastOperand = "";
    // Updating second line display
    render("secondLine");
// console.log(state);
}
function reset() {
    state.firstOperand = "";
    state.operator = "";
    state.lastOperand = "";
    state.result = "";
    firstLineDisplay.textContent = "";
    secondLineDisplay.textContent = 0;
}
function handleDecimalPoint(operand) {
    if (state[operand].length === 1 && state[operand] === ".") {
        state[operand] = "0";
        return;
    }
    if (state[operand].slice(-1) === ".") {
        state[operand] = state[operand].slice(0, -1);
        return;
    }
}
// Handling floating number
function handleFloat(num) {
    if (num % 1 !== 0 && num.toString().slice(num.toString().indexOf(".")).length > 10) {
        console.log(num.toString().slice(num.toString().indexOf(".")).length);
        return num.toFixed(10).toString();
    }
    return num.toString();
}
[
    "click",
    "keydown"
].forEach((event)=>{
    window.addEventListener(event, handleEvent);
});
/////////////////////////
// Application UI logic
function render(where) {
    if (where === "secondLine") {
        if (state.operator === "" && state.result === "") secondLineDisplay.textContent = state.firstOperand.length === 0 ? "0" : thousandsSeparator("firstOperand");
        if (state.operator !== "") secondLineDisplay.textContent = state.lastOperand.length === 0 ? "0" : thousandsSeparator("lastOperand");
        if (state.result !== "") secondLineDisplay.textContent = thousandsSeparator("result");
    }
    if (where === "firstLine") firstLineDisplay.textContent = `\n      ${state.firstOperand} ${state.operator === "*" ? "×" : state.operator}\n    `;
}
function thousandsSeparator(property) {
    let operand = state[property];
    if (operand.includes(".")) return operand;
    // console.log(Number(operand).toLocaleString());
    return Number(operand).toLocaleString();
}

//# sourceMappingURL=index.0e47d5c3.js.map
