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
        this,
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
})({"iX5x9":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "aa9dba8ca27d5955";
module.bundle.HMR_BUNDLE_ID = "e2349bab02d6739c"; // @flow
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
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
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
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
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
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
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
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
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
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
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
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"kh7kD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _recipeView = require("./views/recipeView");
var _recipeViewDefault = parcelHelpers.interopDefault(_recipeView);
var _searchView = require("./views/searchView");
var _searchViewDefault = parcelHelpers.interopDefault(_searchView);
var _resultsView = require("./views/resultsView");
var _resultsViewDefault = parcelHelpers.interopDefault(_resultsView);
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        _recipeViewDefault.default.renderSpinner();
        // 1) Loading recipe
        await _model.loadRecipe(id);
        // 2) Rendering recipe
        _recipeViewDefault.default.render(_model.state.recipe);
    } catch (error) {
        _recipeViewDefault.default.renderError();
    }
};
const controlSearchResults = async function() {
    try {
        _resultsViewDefault.default.renderSpinner();
        // 1) Get search query
        const query = _searchViewDefault.default.getQuery();
        if (!query) return;
        // 2) Load search results
        await _model.loadSearchResults(query);
        // 3) Render results
        _resultsViewDefault.default.render(_model.getSearchResultsPage(1));
    } catch (error) {
        console.error(error);
    }
};
const init = function() {
    if (module.hot) module.hot.accept();
    _recipeViewDefault.default.addHandlerRender(controlRecipes);
    _searchViewDefault.default.addHandlerSearch(controlSearchResults);
};
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN","./model":"7JzSE","./views/recipeView":"8zJEv","./views/searchView":"kVBCD","./views/resultsView":"8s0oC"}],"kcMTN":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7JzSE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe
);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults
);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage
);
var _regeneratorRuntime = require("regenerator-runtime");
var _config = require("./config");
var _helpers = require("./helpers");
const state = {
    recipe: {
    },
    search: {
        query: "",
        results: [],
        resultsPerPage: 10
    }
};
const loadRecipe = async function(id) {
    try {
        const { recipe  } = await _helpers.getJSON(`${_config.API_URL}${id}`);
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
    } catch (error) {
        throw error;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const { data  } = await _helpers.getJSON(`${_config.API_URL}?search=${query}`);
        state.search.results = data.recipes.map((recipe)=>{
            return {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                image: recipe.image_url
            };
        });
    } catch (error) {
        throw error;
    }
};
const getSearchResultsPage = function(page) {
    const start = (page - 1) * state.search.resultsPerPage; //0;
    const end = page * state.search.resultsPerPage; // 9;
    return state.search.results.slice(start, end);
};

},{"regenerator-runtime":"aijgg","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN","./config":"hdeT8","./helpers":"9NRaw"}],"aijgg":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {
    };
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({
        }, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {
    };
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {
    };
    IteratorPrototype[iteratorSymbol] = function() {
        return this;
    };
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value1) {
                    invoke("next", value1, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function() {
        return this;
    };
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
        return this;
    };
    Gp.toString = function() {
        return "[object Generator]";
    };
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {
        };
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key1 = keys.pop();
                if (key1 in object) {
                    next.value = key1;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next1() {
                    while((++i) < iterable.length)if (hasOwn.call(iterable, i)) {
                        next1.value = iterable[i];
                        next1.done = false;
                        return next1;
                    }
                    next1.value = undefined;
                    next1.done = true;
                    return next1;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {
            };
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
typeof module === "object" ? module.exports : {
});
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"hdeT8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL
);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC
);
parcelHelpers.export(exports, "RESULTS_PER_PAGE", ()=>RESULTS_PER_PAGE
);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const TIMEOUT_SEC = 10;
const RESULTS_PER_PAGE = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"9NRaw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON
);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        const response = await Promise.race([
            fetch(url),
            timeout(_config.TIMEOUT_SEC)
        ]);
        const data = await response.json();
        if (!response.ok) throw new Error(`${data.message} (HTTP: ${response.status})`);
        return data;
    } catch (error) {
        throw error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN","./config":"hdeT8"}],"8zJEv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _stable = require("core-js/stable");
var _runtime = require("regenerator-runtime/runtime");
class RecipeView extends _viewDefault.default {
    _parentElement = document.querySelector(".recipe");
    _errorMessage = "We could not find that recipe. Please try another one!";
    _startMessage = "Start by searching for a recipe or an ingredient. Have fun!";
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((event)=>window.addEventListener(event, handler)
        );
    }
    _generateMarkup() {
        return `\n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${_iconsSvgDefault.default}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${_iconsSvgDefault.default}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--increase-servings">\n              <svg>\n                <use href="${_iconsSvgDefault.default}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--increase-servings">\n              <svg>\n                <use href="${_iconsSvgDefault.default}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n\n        <div class="recipe__user-generated">\n          <svg>\n            <use href="${_iconsSvgDefault.default}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round">\n          <svg class="">\n            <use href="${_iconsSvgDefault.default}#icon-bookmark-fill"></use>\n          </svg>\n        </button>\n      </div>\n\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n        ${this._data.ingredients.map((ingredient)=>{
            this._generateMarkupIngredients(ingredient);
        }).join("")}\n        </ul>\n      </div>\n\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>\n    `;
    }
     #generateMarkupIngredients(ingredient) {
        return `\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${_iconsSvgDefault.default}#icon-check"></use>\n        </svg>\n        <div class="recipe__quantity">${ingredient.quantity}</div>\n        <div class="recipe__description">\n          <span class="recipe__unit">${ingredient.unit}</span>\n          ${ingredient.description}\n        </div>\n      </li>\n    `;
    }
}
exports.default = new RecipeView();

},{"url:../../img/icons.svg":"gkpIa","core-js/stable":"d8roq","regenerator-runtime/runtime":"aijgg","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN","./View":"1JmAu"}],"gkpIa":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "icons.c7300c21.svg";

},{"./bundle-url":"kGdAt"}],"kGdAt":[function(require,module,exports) {
"use strict";
/* globals document:readonly */ var bundleURL = null;
function getBundleURLCached() {
    if (!bundleURL) bundleURL = getBundleURL();
    return bundleURL;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) return getBaseURL(matches[0]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    let matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"d8roq":[function(require,module,exports) {
require('../modules/es.symbol');
require('../modules/es.symbol.description');
require('../modules/es.symbol.async-iterator');
require('../modules/es.symbol.has-instance');
require('../modules/es.symbol.is-concat-spreadable');
require('../modules/es.symbol.iterator');
require('../modules/es.symbol.match');
require('../modules/es.symbol.match-all');
require('../modules/es.symbol.replace');
require('../modules/es.symbol.search');
require('../modules/es.symbol.species');
require('../modules/es.symbol.split');
require('../modules/es.symbol.to-primitive');
require('../modules/es.symbol.to-string-tag');
require('../modules/es.symbol.unscopables');
require('../modules/es.aggregate-error');
require('../modules/es.array.concat');
require('../modules/es.array.copy-within');
require('../modules/es.array.every');
require('../modules/es.array.fill');
require('../modules/es.array.filter');
require('../modules/es.array.find');
require('../modules/es.array.find-index');
require('../modules/es.array.flat');
require('../modules/es.array.flat-map');
require('../modules/es.array.for-each');
require('../modules/es.array.from');
require('../modules/es.array.includes');
require('../modules/es.array.index-of');
require('../modules/es.array.is-array');
require('../modules/es.array.iterator');
require('../modules/es.array.join');
require('../modules/es.array.last-index-of');
require('../modules/es.array.map');
require('../modules/es.array.of');
require('../modules/es.array.reduce');
require('../modules/es.array.reduce-right');
require('../modules/es.array.reverse');
require('../modules/es.array.slice');
require('../modules/es.array.some');
require('../modules/es.array.sort');
require('../modules/es.array.species');
require('../modules/es.array.splice');
require('../modules/es.array.unscopables.flat');
require('../modules/es.array.unscopables.flat-map');
require('../modules/es.array-buffer.constructor');
require('../modules/es.array-buffer.is-view');
require('../modules/es.array-buffer.slice');
require('../modules/es.data-view');
require('../modules/es.date.now');
require('../modules/es.date.to-iso-string');
require('../modules/es.date.to-json');
require('../modules/es.date.to-primitive');
require('../modules/es.date.to-string');
require('../modules/es.function.bind');
require('../modules/es.function.has-instance');
require('../modules/es.function.name');
require('../modules/es.global-this');
require('../modules/es.json.stringify');
require('../modules/es.json.to-string-tag');
require('../modules/es.map');
require('../modules/es.math.acosh');
require('../modules/es.math.asinh');
require('../modules/es.math.atanh');
require('../modules/es.math.cbrt');
require('../modules/es.math.clz32');
require('../modules/es.math.cosh');
require('../modules/es.math.expm1');
require('../modules/es.math.fround');
require('../modules/es.math.hypot');
require('../modules/es.math.imul');
require('../modules/es.math.log10');
require('../modules/es.math.log1p');
require('../modules/es.math.log2');
require('../modules/es.math.sign');
require('../modules/es.math.sinh');
require('../modules/es.math.tanh');
require('../modules/es.math.to-string-tag');
require('../modules/es.math.trunc');
require('../modules/es.number.constructor');
require('../modules/es.number.epsilon');
require('../modules/es.number.is-finite');
require('../modules/es.number.is-integer');
require('../modules/es.number.is-nan');
require('../modules/es.number.is-safe-integer');
require('../modules/es.number.max-safe-integer');
require('../modules/es.number.min-safe-integer');
require('../modules/es.number.parse-float');
require('../modules/es.number.parse-int');
require('../modules/es.number.to-fixed');
require('../modules/es.number.to-precision');
require('../modules/es.object.assign');
require('../modules/es.object.create');
require('../modules/es.object.define-getter');
require('../modules/es.object.define-properties');
require('../modules/es.object.define-property');
require('../modules/es.object.define-setter');
require('../modules/es.object.entries');
require('../modules/es.object.freeze');
require('../modules/es.object.from-entries');
require('../modules/es.object.get-own-property-descriptor');
require('../modules/es.object.get-own-property-descriptors');
require('../modules/es.object.get-own-property-names');
require('../modules/es.object.get-prototype-of');
require('../modules/es.object.is');
require('../modules/es.object.is-extensible');
require('../modules/es.object.is-frozen');
require('../modules/es.object.is-sealed');
require('../modules/es.object.keys');
require('../modules/es.object.lookup-getter');
require('../modules/es.object.lookup-setter');
require('../modules/es.object.prevent-extensions');
require('../modules/es.object.seal');
require('../modules/es.object.set-prototype-of');
require('../modules/es.object.to-string');
require('../modules/es.object.values');
require('../modules/es.parse-float');
require('../modules/es.parse-int');
require('../modules/es.promise');
require('../modules/es.promise.all-settled');
require('../modules/es.promise.any');
require('../modules/es.promise.finally');
require('../modules/es.reflect.apply');
require('../modules/es.reflect.construct');
require('../modules/es.reflect.define-property');
require('../modules/es.reflect.delete-property');
require('../modules/es.reflect.get');
require('../modules/es.reflect.get-own-property-descriptor');
require('../modules/es.reflect.get-prototype-of');
require('../modules/es.reflect.has');
require('../modules/es.reflect.is-extensible');
require('../modules/es.reflect.own-keys');
require('../modules/es.reflect.prevent-extensions');
require('../modules/es.reflect.set');
require('../modules/es.reflect.set-prototype-of');
require('../modules/es.reflect.to-string-tag');
require('../modules/es.regexp.constructor');
require('../modules/es.regexp.exec');
require('../modules/es.regexp.flags');
require('../modules/es.regexp.sticky');
require('../modules/es.regexp.test');
require('../modules/es.regexp.to-string');
require('../modules/es.set');
require('../modules/es.string.code-point-at');
require('../modules/es.string.ends-with');
require('../modules/es.string.from-code-point');
require('../modules/es.string.includes');
require('../modules/es.string.iterator');
require('../modules/es.string.match');
require('../modules/es.string.match-all');
require('../modules/es.string.pad-end');
require('../modules/es.string.pad-start');
require('../modules/es.string.raw');
require('../modules/es.string.repeat');
require('../modules/es.string.replace');
require('../modules/es.string.replace-all');
require('../modules/es.string.search');
require('../modules/es.string.split');
require('../modules/es.string.starts-with');
require('../modules/es.string.trim');
require('../modules/es.string.trim-end');
require('../modules/es.string.trim-start');
require('../modules/es.string.anchor');
require('../modules/es.string.big');
require('../modules/es.string.blink');
require('../modules/es.string.bold');
require('../modules/es.string.fixed');
require('../modules/es.string.fontcolor');
require('../modules/es.string.fontsize');
require('../modules/es.string.italics');
require('../modules/es.string.link');
require('../modules/es.string.small');
require('../modules/es.string.strike');
require('../modules/es.string.sub');
require('../modules/es.string.sup');
require('../modules/es.typed-array.float32-array');
require('../modules/es.typed-array.float64-array');
require('../modules/es.typed-array.int8-array');
require('../modules/es.typed-array.int16-array');
require('../modules/es.typed-array.int32-array');
require('../modules/es.typed-array.uint8-array');
require('../modules/es.typed-array.uint8-clamped-array');
require('../modules/es.typed-array.uint16-array');
require('../modules/es.typed-array.uint32-array');
require('../modules/es.typed-array.copy-within');
require('../modules/es.typed-array.every');
require('../modules/es.typed-array.fill');
require('../modules/es.typed-array.filter');
require('../modules/es.typed-array.find');
require('../modules/es.typed-array.find-index');
require('../modules/es.typed-array.for-each');
require('../modules/es.typed-array.from');
require('../modules/es.typed-array.includes');
require('../modules/es.typed-array.index-of');
require('../modules/es.typed-array.iterator');
require('../modules/es.typed-array.join');
require('../modules/es.typed-array.last-index-of');
require('../modules/es.typed-array.map');
require('../modules/es.typed-array.of');
require('../modules/es.typed-array.reduce');
require('../modules/es.typed-array.reduce-right');
require('../modules/es.typed-array.reverse');
require('../modules/es.typed-array.set');
require('../modules/es.typed-array.slice');
require('../modules/es.typed-array.some');
require('../modules/es.typed-array.sort');
require('../modules/es.typed-array.subarray');
require('../modules/es.typed-array.to-locale-string');
require('../modules/es.typed-array.to-string');
require('../modules/es.weak-map');
require('../modules/es.weak-set');
require('../modules/web.dom-collections.for-each');
require('../modules/web.dom-collections.iterator');
require('../modules/web.immediate');
require('../modules/web.queue-microtask');
require('../modules/web.timers');
require('../modules/web.url');
require('../modules/web.url.to-json');
require('../modules/web.url-search-params');
module.exports = require('../internals/path');

},{"../modules/es.symbol":"cl68m","../modules/es.symbol.description":"gmYHL","../modules/es.symbol.async-iterator":"iigA8","../modules/es.symbol.has-instance":"aQI9e","../modules/es.symbol.is-concat-spreadable":"ibqiO","../modules/es.symbol.iterator":"beiQr","../modules/es.symbol.match":"5Ov1X","../modules/es.symbol.match-all":"BqIPE","../modules/es.symbol.replace":"3EtI8","../modules/es.symbol.search":"jM25U","../modules/es.symbol.species":"4xDAZ","../modules/es.symbol.split":"35FsT","../modules/es.symbol.to-primitive":"ihyvx","../modules/es.symbol.to-string-tag":"5GWMr","../modules/es.symbol.unscopables":"7jjsJ","../modules/es.aggregate-error":"2Qsi9","../modules/es.array.concat":"1RRrq","../modules/es.array.copy-within":"c69H0","../modules/es.array.every":"dPTZ6","../modules/es.array.fill":"er4ON","../modules/es.array.filter":"1gkes","../modules/es.array.find":"80iNp","../modules/es.array.find-index":"5F5rw","../modules/es.array.flat":"gBz4T","../modules/es.array.flat-map":"2UyKQ","../modules/es.array.for-each":"91ETa","../modules/es.array.from":"ebGTd","../modules/es.array.includes":"hbv3G","../modules/es.array.index-of":"byGDf","../modules/es.array.is-array":"kLTkT","../modules/es.array.iterator":"2Kz5u","../modules/es.array.join":"21whN","../modules/es.array.last-index-of":"e7GQz","../modules/es.array.map":"9hPJL","../modules/es.array.of":"dmZmN","../modules/es.array.reduce":"1LaET","../modules/es.array.reduce-right":"jBHrk","../modules/es.array.reverse":"9kMAe","../modules/es.array.slice":"d5h8D","../modules/es.array.some":"eGSO5","../modules/es.array.sort":"2ZJaH","../modules/es.array.species":"29iEH","../modules/es.array.splice":"hsdC4","../modules/es.array.unscopables.flat":"3WFYL","../modules/es.array.unscopables.flat-map":"6JIJR","../modules/es.array-buffer.constructor":"atY2F","../modules/es.array-buffer.is-view":"aXTY2","../modules/es.array-buffer.slice":"j0Au9","../modules/es.data-view":"d8FmA","../modules/es.date.now":"5tmqc","../modules/es.date.to-iso-string":"imOat","../modules/es.date.to-json":"8aEev","../modules/es.date.to-primitive":"jseQb","../modules/es.date.to-string":"2bTWf","../modules/es.function.bind":"athYx","../modules/es.function.has-instance":"8sdnA","../modules/es.function.name":"34pq5","../modules/es.global-this":"e5jF6","../modules/es.json.stringify":"6bQjC","../modules/es.json.to-string-tag":"6uj8P","../modules/es.map":"hyjMx","../modules/es.math.acosh":"iODMJ","../modules/es.math.asinh":"h34an","../modules/es.math.atanh":"1S2ze","../modules/es.math.cbrt":"l8sPq","../modules/es.math.clz32":"gEAvP","../modules/es.math.cosh":"dq8pU","../modules/es.math.expm1":"9GGFd","../modules/es.math.fround":"tJscB","../modules/es.math.hypot":"BM2Aw","../modules/es.math.imul":"eaZGU","../modules/es.math.log10":"hKCr1","../modules/es.math.log1p":"27wHE","../modules/es.math.log2":"jcbgx","../modules/es.math.sign":"hqgkM","../modules/es.math.sinh":"1fNkM","../modules/es.math.tanh":"bjZt0","../modules/es.math.to-string-tag":"9j7Qc","../modules/es.math.trunc":"6qIs4","../modules/es.number.constructor":"iPUfO","../modules/es.number.epsilon":"duCbR","../modules/es.number.is-finite":"33PsZ","../modules/es.number.is-integer":"LUGf9","../modules/es.number.is-nan":"9nF3Y","../modules/es.number.is-safe-integer":"4PaHq","../modules/es.number.max-safe-integer":"itDNX","../modules/es.number.min-safe-integer":"6fPVx","../modules/es.number.parse-float":"hYjsn","../modules/es.number.parse-int":"7bH6x","../modules/es.number.to-fixed":"8lOoS","../modules/es.number.to-precision":"7Qogc","../modules/es.object.assign":"jgQzx","../modules/es.object.create":"cU0jK","../modules/es.object.define-getter":"36FG8","../modules/es.object.define-properties":"hwIVw","../modules/es.object.define-property":"jItMy","../modules/es.object.define-setter":"7gXxW","../modules/es.object.entries":"i3ESz","../modules/es.object.freeze":"clpzw","../modules/es.object.from-entries":"fp6bw","../modules/es.object.get-own-property-descriptor":"fnKbu","../modules/es.object.get-own-property-descriptors":"gjxAc","../modules/es.object.get-own-property-names":"cfjdl","../modules/es.object.get-prototype-of":"dd26p","../modules/es.object.is":"uQtQo","../modules/es.object.is-extensible":"46MhG","../modules/es.object.is-frozen":"hmFhI","../modules/es.object.is-sealed":"7lAK1","../modules/es.object.keys":"jfiKy","../modules/es.object.lookup-getter":"dGBBB","../modules/es.object.lookup-setter":"92vo2","../modules/es.object.prevent-extensions":"16arL","../modules/es.object.seal":"kwO4u","../modules/es.object.set-prototype-of":"7lApr","../modules/es.object.to-string":"5MENF","../modules/es.object.values":"7zoud","../modules/es.parse-float":"jK54s","../modules/es.parse-int":"j85zR","../modules/es.promise":"2Wc9o","../modules/es.promise.all-settled":"7cVFW","../modules/es.promise.any":"4VS5F","../modules/es.promise.finally":"8Dcwc","../modules/es.reflect.apply":"4Eb8v","../modules/es.reflect.construct":"1v4rX","../modules/es.reflect.define-property":"3dr60","../modules/es.reflect.delete-property":"ZJEbJ","../modules/es.reflect.get":"jG1It","../modules/es.reflect.get-own-property-descriptor":"kKCkh","../modules/es.reflect.get-prototype-of":"52SGS","../modules/es.reflect.has":"gTSvO","../modules/es.reflect.is-extensible":"3ehcO","../modules/es.reflect.own-keys":"6zVtB","../modules/es.reflect.prevent-extensions":"1MbIm","../modules/es.reflect.set":"98bwO","../modules/es.reflect.set-prototype-of":"dFZfr","../modules/es.reflect.to-string-tag":"7CqL6","../modules/es.regexp.constructor":"hWtpM","../modules/es.regexp.exec":"5Q2zR","../modules/es.regexp.flags":"ehwza","../modules/es.regexp.sticky":"lJNdd","../modules/es.regexp.test":"9GrAK","../modules/es.regexp.to-string":"ciczM","../modules/es.set":"b8s3D","../modules/es.string.code-point-at":"ftQ9B","../modules/es.string.ends-with":"cjy5O","../modules/es.string.from-code-point":"b6kNf","../modules/es.string.includes":"eS2t9","../modules/es.string.iterator":"2MfvQ","../modules/es.string.match":"CHSNr","../modules/es.string.match-all":"2KOVU","../modules/es.string.pad-end":"gPBrT","../modules/es.string.pad-start":"bkkor","../modules/es.string.raw":"65QhH","../modules/es.string.repeat":"5OOdh","../modules/es.string.replace":"gxg0q","../modules/es.string.replace-all":"gnBny","../modules/es.string.search":"7mOTv","../modules/es.string.split":"gqL2T","../modules/es.string.starts-with":"dyNuN","../modules/es.string.trim":"5Jskd","../modules/es.string.trim-end":"e8sbE","../modules/es.string.trim-start":"aI22d","../modules/es.string.anchor":"34XUf","../modules/es.string.big":"9DdLQ","../modules/es.string.blink":"aLTVI","../modules/es.string.bold":"3BKej","../modules/es.string.fixed":"cDbES","../modules/es.string.fontcolor":"ascMd","../modules/es.string.fontsize":"bBa8u","../modules/es.string.italics":"i3QGz","../modules/es.string.link":"7yz3L","../modules/es.string.small":"liKUI","../modules/es.string.strike":"6HrnB","../modules/es.string.sub":"hnWyj","../modules/es.string.sup":"9Bloq","../modules/es.typed-array.float32-array":"hkP3f","../modules/es.typed-array.float64-array":"cd7jE","../modules/es.typed-array.int8-array":"cBwzf","../modules/es.typed-array.int16-array":"cd2qK","../modules/es.typed-array.int32-array":"bZJjw","../modules/es.typed-array.uint8-array":"hy0HU","../modules/es.typed-array.uint8-clamped-array":"i9V3r","../modules/es.typed-array.uint16-array":"jpACG","../modules/es.typed-array.uint32-array":"Wltn3","../modules/es.typed-array.copy-within":"l7I0D","../modules/es.typed-array.every":"6yZ9t","../modules/es.typed-array.fill":"e2bec","../modules/es.typed-array.filter":"8EmoF","../modules/es.typed-array.find":"gPcE4","../modules/es.typed-array.find-index":"7M7wu","../modules/es.typed-array.for-each":"hslcJ","../modules/es.typed-array.from":"9iDbh","../modules/es.typed-array.includes":"3FeBx","../modules/es.typed-array.index-of":"kWrr4","../modules/es.typed-array.iterator":"c3lWh","../modules/es.typed-array.join":"ffzzo","../modules/es.typed-array.last-index-of":"lT8f7","../modules/es.typed-array.map":"buy4e","../modules/es.typed-array.of":"kvHKl","../modules/es.typed-array.reduce":"2kkEZ","../modules/es.typed-array.reduce-right":"RvIJE","../modules/es.typed-array.reverse":"aQhOy","../modules/es.typed-array.set":"lkFFx","../modules/es.typed-array.slice":"bvBRk","../modules/es.typed-array.some":"dr3Ac","../modules/es.typed-array.sort":"jCXfb","../modules/es.typed-array.subarray":"feSen","../modules/es.typed-array.to-locale-string":"7Hl6S","../modules/es.typed-array.to-string":"8gni3","../modules/es.weak-map":"9FrFy","../modules/es.weak-set":"gkls7","../modules/web.dom-collections.for-each":"7AGga","../modules/web.dom-collections.iterator":"5Cg8T","../modules/web.immediate":"6IrlO","../modules/web.queue-microtask":"keeJI","../modules/web.timers":"7qztn","../modules/web.url":"6IcGS","../modules/web.url.to-json":"42CSz","../modules/web.url-search-params":"dJ5g4","../internals/path":"jWtXr"}],"cl68m":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var getBuiltIn = require('../internals/get-built-in');
var IS_PURE = require('../internals/is-pure');
var DESCRIPTORS = require('../internals/descriptors');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var fails = require('../internals/fails');
var has = require('../internals/has');
var isArray = require('../internals/is-array');
var isObject = require('../internals/is-object');
var anObject = require('../internals/an-object');
var toObject = require('../internals/to-object');
var toIndexedObject = require('../internals/to-indexed-object');
var toPrimitive = require('../internals/to-primitive');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var nativeObjectCreate = require('../internals/object-create');
var objectKeys = require('../internals/object-keys');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var shared = require('../internals/shared');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var uid = require('../internals/uid');
var wellKnownSymbol = require('../internals/well-known-symbol');
var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
var setToStringTag = require('../internals/set-to-string-tag');
var InternalStateModule = require('../internals/internal-state');
var $forEach = require('../internals/array-iteration').forEach;
var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function() {
    return nativeObjectCreate(nativeDefineProperty({
    }, 'a', {
        get: function() {
            return nativeDefineProperty(this, 'a', {
                value: 7
            }).a;
        }
    })).a != 7;
}) ? function(O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
    nativeDefineProperty(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype) nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
} : nativeDefineProperty;
var wrap = function(tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
    setInternalState(symbol, {
        type: SYMBOL,
        tag: tag,
        description: description
    });
    if (!DESCRIPTORS) symbol.description = description;
    return symbol;
};
var isSymbol = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    return Object(it) instanceof $Symbol;
};
var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject(O);
    var key = toPrimitive(P, true);
    anObject(Attributes);
    if (has(AllSymbols, key)) {
        if (!Attributes.enumerable) {
            if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {
            }));
            O[HIDDEN][key] = true;
        } else {
            if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
            Attributes = nativeObjectCreate(Attributes, {
                enumerable: createPropertyDescriptor(0, false)
            });
        }
        return setSymbolDescriptor(O, key, Attributes);
    }
    return nativeDefineProperty(O, key, Attributes);
};
var $defineProperties = function defineProperties(O, Properties) {
    anObject(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, function(key) {
        if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
};
var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};
var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPrimitive(V, true);
    var enumerable = nativePropertyIsEnumerable.call(this, P);
    if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPrimitive(P, true);
    if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);
    if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) descriptor.enumerable = true;
    return descriptor;
};
var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject(O));
    var result = [];
    $forEach(names, function(key) {
        if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
    });
    return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach(names, function(key) {
        if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) result.push(AllSymbols[key]);
    });
    return result;
};
// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
    $Symbol = function Symbol1() {
        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
        var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
        var tag = uid(description);
        var setter = function(value) {
            if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
        };
        if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
            configurable: true,
            set: setter
        });
        return wrap(tag, description);
    };
    redefine($Symbol[PROTOTYPE], 'toString', function toString() {
        return getInternalState(this).tag;
    });
    redefine($Symbol, 'withoutSetter', function(description) {
        return wrap(uid(description), description);
    });
    propertyIsEnumerableModule.f = $propertyIsEnumerable;
    definePropertyModule.f = $defineProperty;
    getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
    wrappedWellKnownSymbolModule.f = function(name) {
        return wrap(wellKnownSymbol(name), name);
    };
    if (DESCRIPTORS) {
        // https://github.com/tc39/proposal-Symbol-description
        nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
            configurable: true,
            get: function description() {
                return getInternalState(this).description;
            }
        });
        if (!IS_PURE) redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
            unsafe: true
        });
    }
}
$({
    global: true,
    wrap: true,
    forced: !NATIVE_SYMBOL,
    sham: !NATIVE_SYMBOL
}, {
    Symbol: $Symbol
});
$forEach(objectKeys(WellKnownSymbolsStore), function(name) {
    defineWellKnownSymbol(name);
});
$({
    target: SYMBOL,
    stat: true,
    forced: !NATIVE_SYMBOL
}, {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    'for': function(key) {
        var string = String(key);
        if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
        var symbol = $Symbol(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry[symbol] = string;
        return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
        if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function() {
        USE_SETTER = true;
    },
    useSimple: function() {
        USE_SETTER = false;
    }
});
$({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL,
    sham: !DESCRIPTORS
}, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL
}, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
});
// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({
    target: 'Object',
    stat: true,
    forced: fails(function() {
        getOwnPropertySymbolsModule.f(1);
    })
}, {
    getOwnPropertySymbols: function getOwnPropertySymbols1(it) {
        return getOwnPropertySymbolsModule.f(toObject(it));
    }
});
// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
    var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function() {
        var symbol = $Symbol();
        // MS Edge converts symbol values to JSON as {}
        return $stringify([
            symbol
        ]) != '[null]' || $stringify({
            a: symbol
        }) != '{}' || $stringify(Object(symbol)) != '{}';
    });
    $({
        target: 'JSON',
        stat: true,
        forced: FORCED_JSON_STRINGIFY
    }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        stringify: function stringify(it, replacer, space) {
            var args = [
                it
            ];
            var index = 1;
            var $replacer;
            while(arguments.length > index)args.push(arguments[index++]);
            $replacer = replacer;
            if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
            if (!isArray(replacer)) replacer = function(key, value) {
                if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                if (!isSymbol(value)) return value;
            };
            args[1] = replacer;
            return $stringify.apply(null, args);
        }
    });
}
// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;

},{"../internals/export":"jPesG","../internals/global":"k6ng2","../internals/get-built-in":"wFpZi","../internals/is-pure":"hQb5L","../internals/descriptors":"b4IwU","../internals/native-symbol":"9LBgR","../internals/use-symbol-as-uid":"hQVR6","../internals/fails":"9axhl","../internals/has":"234Va","../internals/is-array":"gB6cB","../internals/is-object":"55UvG","../internals/an-object":"Q1KxM","../internals/to-object":"9Eaxp","../internals/to-indexed-object":"1LFTi","../internals/to-primitive":"ia6YM","../internals/create-property-descriptor":"em69o","../internals/object-create":"2iitg","../internals/object-keys":"bSloa","../internals/object-get-own-property-names":"lqOHM","../internals/object-get-own-property-names-external":"1R89x","../internals/object-get-own-property-symbols":"eKo79","../internals/object-get-own-property-descriptor":"gEzuD","../internals/object-define-property":"d7OpP","../internals/object-property-is-enumerable":"hE32B","../internals/create-non-enumerable-property":"57sB9","../internals/redefine":"5ao1i","../internals/shared":"7yw5T","../internals/shared-key":"3xTTy","../internals/hidden-keys":"19i1o","../internals/uid":"bqSbl","../internals/well-known-symbol":"8llxS","../internals/well-known-symbol-wrapped":"79Smt","../internals/define-well-known-symbol":"j2XXM","../internals/set-to-string-tag":"353PM","../internals/internal-state":"6IhmE","../internals/array-iteration":"gE5VF"}],"jPesG":[function(require,module,exports) {
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var setGlobal = require('../internals/set-global');
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var isForced = require('../internals/is-forced');
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {
    });
    else target = (global[TARGET] || {
    }).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty === typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, 'sham', true);
        // extend global
        redefine(target, key, sourceProperty, options);
    }
};

},{"../internals/global":"k6ng2","../internals/object-get-own-property-descriptor":"gEzuD","../internals/create-non-enumerable-property":"57sB9","../internals/redefine":"5ao1i","../internals/set-global":"dlHA5","../internals/copy-constructor-properties":"8ElIM","../internals/is-forced":"emedY"}],"k6ng2":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func -- fallback
(function() {
    return this;
})() || Function('return this')();

},{}],"gEzuD":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPrimitive = require('../internals/to-primitive');
var has = require('../internals/has');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
    if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

},{"../internals/descriptors":"b4IwU","../internals/object-property-is-enumerable":"hE32B","../internals/create-property-descriptor":"em69o","../internals/to-indexed-object":"1LFTi","../internals/to-primitive":"ia6YM","../internals/has":"234Va","../internals/ie8-dom-define":"c96Mz"}],"b4IwU":[function(require,module,exports) {
var fails = require('../internals/fails');
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({
    }, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"../internals/fails":"9axhl"}],"9axhl":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"hE32B":[function(require,module,exports) {
'use strict';
var $propertyIsEnumerable = {
}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"em69o":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"1LFTi":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"ev31F","../internals/require-object-coercible":"g8fXQ"}],"ev31F":[function(require,module,exports) {
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');
var split = ''.split;
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

},{"../internals/fails":"9axhl","../internals/classof-raw":"bGuqx"}],"bGuqx":[function(require,module,exports) {
var toString = {
}.toString;
module.exports = function(it) {
    return toString.call(it).slice(8, -1);
};

},{}],"g8fXQ":[function(require,module,exports) {
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
};

},{}],"ia6YM":[function(require,module,exports) {
var isObject = require('../internals/is-object');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
};

},{"../internals/is-object":"55UvG"}],"55UvG":[function(require,module,exports) {
module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"234Va":[function(require,module,exports) {
var toObject = require('../internals/to-object');
var hasOwnProperty = {
}.hasOwnProperty;
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty.call(toObject(it), key);
};

},{"../internals/to-object":"9Eaxp"}],"9Eaxp":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"g8fXQ"}],"c96Mz":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');
// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(createElement('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"../internals/descriptors":"b4IwU","../internals/fails":"9axhl","../internals/document-create-element":"5Cb6U"}],"5Cb6U":[function(require,module,exports) {
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {
    };
};

},{"../internals/global":"k6ng2","../internals/is-object":"55UvG"}],"57sB9":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"../internals/descriptors":"b4IwU","../internals/object-define-property":"d7OpP","../internals/create-property-descriptor":"em69o"}],"d7OpP":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var anObject = require('../internals/an-object');
var toPrimitive = require('../internals/to-primitive');
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};

},{"../internals/descriptors":"b4IwU","../internals/ie8-dom-define":"c96Mz","../internals/an-object":"Q1KxM","../internals/to-primitive":"ia6YM"}],"Q1KxM":[function(require,module,exports) {
var isObject = require('../internals/is-object');
module.exports = function(it) {
    if (!isObject(it)) throw TypeError(String(it) + ' is not an object');
    return it;
};

},{"../internals/is-object":"55UvG"}],"5ao1i":[function(require,module,exports) {
var global = require('../internals/global');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var setGlobal = require('../internals/set-global');
var inspectSource = require('../internals/inspect-source');
var InternalStateModule = require('../internals/internal-state');
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function(O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;
    if (typeof value == 'function') {
        if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
        state = enforceInternalState(value);
        if (!state.source) state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
    if (O === global) {
        if (simple) O[key] = value;
        else setGlobal(key, value);
        return;
    } else if (!unsafe) delete O[key];
    else if (!noTargetGet && O[key]) simple = true;
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

},{"../internals/global":"k6ng2","../internals/create-non-enumerable-property":"57sB9","../internals/has":"234Va","../internals/set-global":"dlHA5","../internals/inspect-source":"hszWE","../internals/internal-state":"6IhmE"}],"dlHA5":[function(require,module,exports) {
var global = require('../internals/global');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
module.exports = function(key, value) {
    try {
        createNonEnumerableProperty(global, key, value);
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"../internals/global":"k6ng2","../internals/create-non-enumerable-property":"57sB9"}],"hszWE":[function(require,module,exports) {
var store = require('../internals/shared-store');
var functionToString = Function.toString;
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') store.inspectSource = function(it) {
    return functionToString.call(it);
};
module.exports = store.inspectSource;

},{"../internals/shared-store":"3V4zB"}],"3V4zB":[function(require,module,exports) {
var global = require('../internals/global');
var setGlobal = require('../internals/set-global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {
});
module.exports = store;

},{"../internals/global":"k6ng2","../internals/set-global":"dlHA5"}],"6IhmE":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require('../internals/native-weak-map');
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var objectHas = require('../internals/has');
var shared = require('../internals/shared-store');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap1 = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {
    });
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap1());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set = function(it, metadata) {
        if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset.call(store, it, metadata);
        return metadata;
    };
    get = function(it) {
        return wmget.call(store, it) || {
        };
    };
    has = function(it) {
        return wmhas.call(store, it);
    };
} else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return objectHas(it, STATE) ? it[STATE] : {
        };
    };
    has = function(it) {
        return objectHas(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"../internals/native-weak-map":"hJ4dV","../internals/global":"k6ng2","../internals/is-object":"55UvG","../internals/create-non-enumerable-property":"57sB9","../internals/has":"234Va","../internals/shared-store":"3V4zB","../internals/shared-key":"3xTTy","../internals/hidden-keys":"19i1o"}],"hJ4dV":[function(require,module,exports) {
var global = require('../internals/global');
var inspectSource = require('../internals/inspect-source');
var WeakMap1 = global.WeakMap;
module.exports = typeof WeakMap1 === 'function' && /native code/.test(inspectSource(WeakMap1));

},{"../internals/global":"k6ng2","../internals/inspect-source":"hszWE"}],"3xTTy":[function(require,module,exports) {
var shared = require('../internals/shared');
var uid = require('../internals/uid');
var keys = shared('keys');
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"7yw5T","../internals/uid":"bqSbl"}],"7yw5T":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var store = require('../internals/shared-store');
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {
    });
})('versions', []).push({
    version: '3.14.0',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

},{"../internals/is-pure":"hQb5L","../internals/shared-store":"3V4zB"}],"hQb5L":[function(require,module,exports) {
module.exports = false;

},{}],"bqSbl":[function(require,module,exports) {
var id = 0;
var postfix = Math.random();
module.exports = function(key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + ((++id) + postfix).toString(36);
};

},{}],"19i1o":[function(require,module,exports) {
module.exports = {
};

},{}],"8ElIM":[function(require,module,exports) {
var has = require('../internals/has');
var ownKeys = require('../internals/own-keys');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');
module.exports = function(target, source) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"../internals/has":"234Va","../internals/own-keys":"gJlsF","../internals/object-get-own-property-descriptor":"gEzuD","../internals/object-define-property":"d7OpP"}],"gJlsF":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var anObject = require('../internals/an-object');
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"wFpZi","../internals/object-get-own-property-names":"lqOHM","../internals/object-get-own-property-symbols":"eKo79","../internals/an-object":"Q1KxM"}],"wFpZi":[function(require,module,exports) {
var path = require('../internals/path');
var global = require('../internals/global');
var aFunction = function(variable) {
    return typeof variable == 'function' ? variable : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

},{"../internals/path":"jWtXr","../internals/global":"k6ng2"}],"jWtXr":[function(require,module,exports) {
var global = require('../internals/global');
module.exports = global;

},{"../internals/global":"k6ng2"}],"lqOHM":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"5nh7r","../internals/enum-bug-keys":"RAvzX"}],"5nh7r":[function(require,module,exports) {
var has = require('../internals/has');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (has(O, key = names[i++])) ~indexOf(result, key) || result.push(key);
    return result;
};

},{"../internals/has":"234Va","../internals/to-indexed-object":"1LFTi","../internals/array-includes":"grZRk","../internals/hidden-keys":"19i1o"}],"grZRk":[function(require,module,exports) {
var toIndexedObject = require('../internals/to-indexed-object');
var toLength = require('../internals/to-length');
var toAbsoluteIndex = require('../internals/to-absolute-index');
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"1LFTi","../internals/to-length":"cJhjy","../internals/to-absolute-index":"lsGvn"}],"cJhjy":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer":"8UwJq"}],"8UwJq":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function(argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

},{}],"lsGvn":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer":"8UwJq"}],"RAvzX":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];

},{}],"eKo79":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"emedY":[function(require,module,exports) {
var fails = require('../internals/fails');
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {
};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

},{"../internals/fails":"9axhl"}],"9LBgR":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require('../internals/engine-v8-version');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":"kH759","../internals/fails":"9axhl"}],"kH759":[function(require,module,exports) {
var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = match[1];
    }
}
module.exports = version && +version;

},{"../internals/global":"k6ng2","../internals/engine-user-agent":"2dJJC"}],"2dJJC":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('navigator', 'userAgent') || '';

},{"../internals/get-built-in":"wFpZi"}],"hQVR6":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require('../internals/native-symbol');
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

},{"../internals/native-symbol":"9LBgR"}],"gB6cB":[function(require,module,exports) {
var classof = require('../internals/classof-raw');
// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
    return classof(arg) == 'Array';
};

},{"../internals/classof-raw":"bGuqx"}],"2iitg":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var defineProperties = require('../internals/object-define-properties');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = require('../internals/hidden-keys');
var html = require('../internals/html');
var documentCreateElement = require('../internals/document-create-element');
var sharedKey = require('../internals/shared-key');
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function() {
    try {
        /* global ActiveXObject -- old IE */ activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) {
    }
    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;
    while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : defineProperties(result, Properties);
};

},{"../internals/an-object":"Q1KxM","../internals/object-define-properties":"jwDEL","../internals/enum-bug-keys":"RAvzX","../internals/hidden-keys":"19i1o","../internals/html":"fPRDr","../internals/document-create-element":"5Cb6U","../internals/shared-key":"3xTTy"}],"jwDEL":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var anObject = require('../internals/an-object');
var objectKeys = require('../internals/object-keys');
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)definePropertyModule.f(O, key = keys[index++], Properties[key]);
    return O;
};

},{"../internals/descriptors":"b4IwU","../internals/object-define-property":"d7OpP","../internals/an-object":"Q1KxM","../internals/object-keys":"bSloa"}],"bSloa":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');
// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/object-keys-internal":"5nh7r","../internals/enum-bug-keys":"RAvzX"}],"fPRDr":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":"wFpZi"}],"1R89x":[function(require,module,exports) {
/* eslint-disable es/no-object-getownpropertynames -- safe */ var toIndexedObject = require('../internals/to-indexed-object');
var $getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var toString = {
}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
    try {
        return $getOwnPropertyNames(it);
    } catch (error) {
        return windowNames.slice();
    }
};
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
};

},{"../internals/to-indexed-object":"1LFTi","../internals/object-get-own-property-names":"lqOHM"}],"8llxS":[function(require,module,exports) {
var global = require('../internals/global');
var shared = require('../internals/shared');
var has = require('../internals/has');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var WellKnownSymbolsStore = shared('wks');
var Symbol1 = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol1 : Symbol1 && Symbol1.withoutSetter || uid;
module.exports = function(name) {
    if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
        if (NATIVE_SYMBOL && has(Symbol1, name)) WellKnownSymbolsStore[name] = Symbol1[name];
        else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
    return WellKnownSymbolsStore[name];
};

},{"../internals/global":"k6ng2","../internals/shared":"7yw5T","../internals/has":"234Va","../internals/uid":"bqSbl","../internals/native-symbol":"9LBgR","../internals/use-symbol-as-uid":"hQVR6"}],"79Smt":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
exports.f = wellKnownSymbol;

},{"../internals/well-known-symbol":"8llxS"}],"j2XXM":[function(require,module,exports) {
var path = require('../internals/path');
var has = require('../internals/has');
var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
var defineProperty = require('../internals/object-define-property').f;
module.exports = function(NAME) {
    var Symbol1 = path.Symbol || (path.Symbol = {
    });
    if (!has(Symbol1, NAME)) defineProperty(Symbol1, NAME, {
        value: wrappedWellKnownSymbolModule.f(NAME)
    });
};

},{"../internals/path":"jWtXr","../internals/has":"234Va","../internals/well-known-symbol-wrapped":"79Smt","../internals/object-define-property":"d7OpP"}],"353PM":[function(require,module,exports) {
var defineProperty = require('../internals/object-define-property').f;
var has = require('../internals/has');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
module.exports = function(it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) defineProperty(it, TO_STRING_TAG, {
        configurable: true,
        value: TAG
    });
};

},{"../internals/object-define-property":"d7OpP","../internals/has":"234Va","../internals/well-known-symbol":"8llxS"}],"gE5VF":[function(require,module,exports) {
var bind = require('../internals/function-bind-context');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var arraySpeciesCreate = require('../internals/array-species-create');
var push = [].push;
// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = IndexedObject(O);
        var boundFunction = bind(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
        var value, result;
        for(; length > index; index++)if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) switch(TYPE){
                    case 3:
                        return true; // some
                    case 5:
                        return value; // find
                    case 6:
                        return index; // findIndex
                    case 2:
                        push.call(target, value); // filter
                }
                else switch(TYPE){
                    case 4:
                        return false; // every
                    case 7:
                        push.call(target, value); // filterOut
                }
            }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
};
module.exports = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod(7)
};

},{"../internals/function-bind-context":"3BONE","../internals/indexed-object":"ev31F","../internals/to-object":"9Eaxp","../internals/to-length":"cJhjy","../internals/array-species-create":"5920z"}],"3BONE":[function(require,module,exports) {
var aFunction = require('../internals/a-function');
// optional / simple context binding
module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch(length){
        case 0:
            return function() {
                return fn.call(that);
            };
        case 1:
            return function(a) {
                return fn.call(that, a);
            };
        case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };
        case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
    }
    return function() {
        return fn.apply(that, arguments);
    };
};

},{"../internals/a-function":"kyHeE"}],"kyHeE":[function(require,module,exports) {
module.exports = function(it) {
    if (typeof it != 'function') throw TypeError(String(it) + ' is not a function');
    return it;
};

},{}],"5920z":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var isArray = require('../internals/is-array');
var wellKnownSymbol = require('../internals/well-known-symbol');
var SPECIES = wellKnownSymbol('species');
// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function(originalArray, length) {
    var C;
    if (isArray(originalArray)) {
        C = originalArray.constructor;
        // cross-realm fallback
        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
        else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
        }
    }
    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

},{"../internals/is-object":"55UvG","../internals/is-array":"gB6cB","../internals/well-known-symbol":"8llxS"}],"gmYHL":[function(require,module,exports) {
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var has = require('../internals/has');
var isObject = require('../internals/is-object');
var defineProperty = require('../internals/object-define-property').f;
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var NativeSymbol = global.Symbol;
if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {
    };
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol1() {
        var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
        var result = this instanceof SymbolWrapper ? new NativeSymbol(description) : description === undefined ? NativeSymbol() : NativeSymbol(description);
        if (description === '') EmptyStringDescriptionStore[result] = true;
        return result;
    };
    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
    symbolPrototype.constructor = SymbolWrapper;
    var symbolToString = symbolPrototype.toString;
    var native = String(NativeSymbol('test')) == 'Symbol(test)';
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    defineProperty(symbolPrototype, 'description', {
        configurable: true,
        get: function description() {
            var symbol = isObject(this) ? this.valueOf() : this;
            var string = symbolToString.call(symbol);
            if (has(EmptyStringDescriptionStore, symbol)) return '';
            var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
            return desc === '' ? undefined : desc;
        }
    });
    $({
        global: true,
        forced: true
    }, {
        Symbol: SymbolWrapper
    });
}

},{"../internals/export":"jPesG","../internals/descriptors":"b4IwU","../internals/global":"k6ng2","../internals/has":"234Va","../internals/is-object":"55UvG","../internals/object-define-property":"d7OpP","../internals/copy-constructor-properties":"8ElIM"}],"iigA8":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');

},{"../internals/define-well-known-symbol":"j2XXM"}],"aQI9e":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');

},{"../internals/define-well-known-symbol":"j2XXM"}],"ibqiO":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');

},{"../internals/define-well-known-symbol":"j2XXM"}],"beiQr":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');

},{"../internals/define-well-known-symbol":"j2XXM"}],"5Ov1X":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');

},{"../internals/define-well-known-symbol":"j2XXM"}],"BqIPE":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');

},{"../internals/define-well-known-symbol":"j2XXM"}],"3EtI8":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');

},{"../internals/define-well-known-symbol":"j2XXM"}],"jM25U":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');

},{"../internals/define-well-known-symbol":"j2XXM"}],"4xDAZ":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');

},{"../internals/define-well-known-symbol":"j2XXM"}],"35FsT":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');

},{"../internals/define-well-known-symbol":"j2XXM"}],"ihyvx":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');

},{"../internals/define-well-known-symbol":"j2XXM"}],"5GWMr":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

},{"../internals/define-well-known-symbol":"j2XXM"}],"7jjsJ":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');

},{"../internals/define-well-known-symbol":"j2XXM"}],"2Qsi9":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var create = require('../internals/object-create');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var iterate = require('../internals/iterate');
var $AggregateError = function AggregateError(errors, message) {
    var that = this;
    if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
    if (setPrototypeOf) // eslint-disable-next-line unicorn/error-message -- expected
    that = setPrototypeOf(new Error(undefined), getPrototypeOf(that));
    if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
    var errorsArray = [];
    iterate(errors, errorsArray.push, {
        that: errorsArray
    });
    createNonEnumerableProperty(that, 'errors', errorsArray);
    return that;
};
$AggregateError.prototype = create(Error.prototype, {
    constructor: createPropertyDescriptor(5, $AggregateError),
    message: createPropertyDescriptor(5, ''),
    name: createPropertyDescriptor(5, 'AggregateError')
});
// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({
    global: true
}, {
    AggregateError: $AggregateError
});

},{"../internals/export":"jPesG","../internals/object-get-prototype-of":"9zsYa","../internals/object-set-prototype-of":"dEqW3","../internals/object-create":"2iitg","../internals/create-non-enumerable-property":"57sB9","../internals/create-property-descriptor":"em69o","../internals/iterate":"21SEy"}],"9zsYa":[function(require,module,exports) {
var has = require('../internals/has');
var toObject = require('../internals/to-object');
var sharedKey = require('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) return O.constructor.prototype;
    return O instanceof Object ? ObjectPrototype : null;
};

},{"../internals/has":"234Va","../internals/to-object":"9Eaxp","../internals/shared-key":"3xTTy","../internals/correct-prototype-getter":"alHZE"}],"alHZE":[function(require,module,exports) {
var fails = require('../internals/fails');
module.exports = !fails(function() {
    function F() {
    }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":"9axhl"}],"dEqW3":[function(require,module,exports) {
/* eslint-disable no-proto -- safe */ var anObject = require('../internals/an-object');
var aPossiblePrototype = require('../internals/a-possible-prototype');
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {
} ? (function() {
    var CORRECT_SETTER = false;
    var test = {
    };
    var setter;
    try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
        setter.call(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {
    }
    return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter.call(O, proto);
        else O.__proto__ = proto;
        return O;
    };
})() : undefined);

},{"../internals/an-object":"Q1KxM","../internals/a-possible-prototype":"6XUUN"}],"6XUUN":[function(require,module,exports) {
var isObject = require('../internals/is-object');
module.exports = function(it) {
    if (!isObject(it) && it !== null) throw TypeError("Can't set " + String(it) + ' as a prototype');
    return it;
};

},{"../internals/is-object":"55UvG"}],"21SEy":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var toLength = require('../internals/to-length');
var bind = require('../internals/function-bind-context');
var getIteratorMethod = require('../internals/get-iterator-method');
var iteratorClose = require('../internals/iterator-close');
var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
};
module.exports = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
        if (iterator) iteratorClose(iterator);
        return new Result(true, condition);
    };
    var callFn = function(value) {
        if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_ITERATOR) iterator = iterable;
    else {
        iterFn = getIteratorMethod(iterable);
        if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
            for(index = 0, length = toLength(iterable.length); length > index; index++){
                result = callFn(iterable[index]);
                if (result && result instanceof Result) return result;
            }
            return new Result(false);
        }
        iterator = iterFn.call(iterable);
    }
    next = iterator.next;
    while(!(step = next.call(iterator)).done){
        try {
            result = callFn(step.value);
        } catch (error) {
            iteratorClose(iterator);
            throw error;
        }
        if (typeof result == 'object' && result && result instanceof Result) return result;
    }
    return new Result(false);
};

},{"../internals/an-object":"Q1KxM","../internals/is-array-iterator-method":"52c1t","../internals/to-length":"cJhjy","../internals/function-bind-context":"3BONE","../internals/get-iterator-method":"enI2H","../internals/iterator-close":"fL2bO"}],"52c1t":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');
var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;
// check on default Array iterator
module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"../internals/well-known-symbol":"8llxS","../internals/iterators":"7xZUL"}],"7xZUL":[function(require,module,exports) {
module.exports = {
};

},{}],"enI2H":[function(require,module,exports) {
var classof = require('../internals/classof');
var Iterators = require('../internals/iterators');
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
module.exports = function(it) {
    if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

},{"../internals/classof":"fGqVo","../internals/iterators":"7xZUL","../internals/well-known-symbol":"8llxS"}],"fGqVo":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classofRaw = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) == 'Arguments';
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {
    }
};
// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

},{"../internals/to-string-tag-support":"kzONV","../internals/classof-raw":"bGuqx","../internals/well-known-symbol":"8llxS"}],"kzONV":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {
};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":"8llxS"}],"fL2bO":[function(require,module,exports) {
var anObject = require('../internals/an-object');
module.exports = function(iterator) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) return anObject(returnMethod.call(iterator)).value;
};

},{"../internals/an-object":"Q1KxM"}],"1RRrq":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isArray = require('../internals/is-array');
var isObject = require('../internals/is-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var createProperty = require('../internals/create-property');
var arraySpeciesCreate = require('../internals/array-species-create');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 9007199254740991;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');
var isConcatSpreadable = function(O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
};
var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for(i = -1, length = arguments.length; i < length; i++){
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
                len = toLength(E.length);
                if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                for(k = 0; k < len; k++, n++)if (k in E) createProperty(A, n, E[k]);
            } else {
                if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                createProperty(A, n++, E);
            }
        }
        A.length = n;
        return A;
    }
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl","../internals/is-array":"gB6cB","../internals/is-object":"55UvG","../internals/to-object":"9Eaxp","../internals/to-length":"cJhjy","../internals/create-property":"9RCVX","../internals/array-species-create":"5920z","../internals/array-method-has-species-support":"5CCXc","../internals/well-known-symbol":"8llxS","../internals/engine-v8-version":"kH759"}],"9RCVX":[function(require,module,exports) {
'use strict';
var toPrimitive = require('../internals/to-primitive');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = function(object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
};

},{"../internals/to-primitive":"ia6YM","../internals/object-define-property":"d7OpP","../internals/create-property-descriptor":"em69o"}],"5CCXc":[function(require,module,exports) {
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');
var SPECIES = wellKnownSymbol('species');
module.exports = function(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION >= 51 || !fails(function() {
        var array = [];
        var constructor = array.constructor = {
        };
        constructor[SPECIES] = function() {
            return {
                foo: 1
            };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
    });
};

},{"../internals/fails":"9axhl","../internals/well-known-symbol":"8llxS","../internals/engine-v8-version":"kH759"}],"c69H0":[function(require,module,exports) {
var $ = require('../internals/export');
var copyWithin = require('../internals/array-copy-within');
var addToUnscopables = require('../internals/add-to-unscopables');
// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
$({
    target: 'Array',
    proto: true
}, {
    copyWithin: copyWithin
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('copyWithin');

},{"../internals/export":"jPesG","../internals/array-copy-within":"8WO83","../internals/add-to-unscopables":"gCovB"}],"8WO83":[function(require,module,exports) {
'use strict';
var toObject = require('../internals/to-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var toLength = require('../internals/to-length');
var min = Math.min;
// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
module.exports = [].copyWithin || function copyWithin(target/* = 0 */ , start/* = 0, end = @length */ ) {
    var O = toObject(this);
    var len = toLength(O.length);
    var to = toAbsoluteIndex(target, len);
    var from = toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
    }
    while((count--) > 0){
        if (from in O) O[to] = O[from];
        else delete O[to];
        to += inc;
        from += inc;
    }
    return O;
};

},{"../internals/to-object":"9Eaxp","../internals/to-absolute-index":"lsGvn","../internals/to-length":"cJhjy"}],"gCovB":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var create = require('../internals/object-create');
var definePropertyModule = require('../internals/object-define-property');
var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;
// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
});
// add a key to Array.prototype[@@unscopables]
module.exports = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
};

},{"../internals/well-known-symbol":"8llxS","../internals/object-create":"2iitg","../internals/object-define-property":"d7OpP"}],"dPTZ6":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $every = require('../internals/array-iteration').every;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var STRICT_METHOD = arrayMethodIsStrict('every');
// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD
}, {
    every: function every(callbackfn/* , thisArg */ ) {
        return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"jPesG","../internals/array-iteration":"gE5VF","../internals/array-method-is-strict":"h2UVB"}],"h2UVB":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');
module.exports = function(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function() {
        // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
        method.call(null, argument || function() {
            throw 1;
        }, 1);
    });
};

},{"../internals/fails":"9axhl"}],"er4ON":[function(require,module,exports) {
var $ = require('../internals/export');
var fill = require('../internals/array-fill');
var addToUnscopables = require('../internals/add-to-unscopables');
// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({
    target: 'Array',
    proto: true
}, {
    fill: fill
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');

},{"../internals/export":"jPesG","../internals/array-fill":"dQ4oL","../internals/add-to-unscopables":"gCovB"}],"dQ4oL":[function(require,module,exports) {
'use strict';
var toObject = require('../internals/to-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var toLength = require('../internals/to-length');
// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value/* , start = 0, end = @length */ ) {
    var O = toObject(this);
    var length = toLength(O.length);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
};

},{"../internals/to-object":"9Eaxp","../internals/to-absolute-index":"lsGvn","../internals/to-length":"cJhjy"}],"1gkes":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $filter = require('../internals/array-iteration').filter;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    filter: function filter(callbackfn/* , thisArg */ ) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"jPesG","../internals/array-iteration":"gE5VF","../internals/array-method-has-species-support":"5CCXc"}],"80iNp":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $find = require('../internals/array-iteration').find;
var addToUnscopables = require('../internals/add-to-unscopables');
var FIND = 'find';
var SKIPS_HOLES = true;
// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function() {
    SKIPS_HOLES = false;
});
// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
}, {
    find: function find(callbackfn/* , that = undefined */ ) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);

},{"../internals/export":"jPesG","../internals/array-iteration":"gE5VF","../internals/add-to-unscopables":"gCovB"}],"5F5rw":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $findIndex = require('../internals/array-iteration').findIndex;
var addToUnscopables = require('../internals/add-to-unscopables');
var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;
// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function() {
    SKIPS_HOLES = false;
});
// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
}, {
    findIndex: function findIndex(callbackfn/* , that = undefined */ ) {
        return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);

},{"../internals/export":"jPesG","../internals/array-iteration":"gE5VF","../internals/add-to-unscopables":"gCovB"}],"gBz4T":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var flattenIntoArray = require('../internals/flatten-into-array');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var toInteger = require('../internals/to-integer');
var arraySpeciesCreate = require('../internals/array-species-create');
// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({
    target: 'Array',
    proto: true
}, {
    flat: function flat() {
        var depthArg = arguments.length ? arguments[0] : undefined;
        var O = toObject(this);
        var sourceLen = toLength(O.length);
        var A = arraySpeciesCreate(O, 0);
        A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
        return A;
    }
});

},{"../internals/export":"jPesG","../internals/flatten-into-array":"aGQaw","../internals/to-object":"9Eaxp","../internals/to-length":"cJhjy","../internals/to-integer":"8UwJq","../internals/array-species-create":"5920z"}],"aGQaw":[function(require,module,exports) {
'use strict';
var isArray = require('../internals/is-array');
var toLength = require('../internals/to-length');
var bind = require('../internals/function-bind-context');
// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
    var element;
    while(sourceIndex < sourceLen){
        if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
            if (depth > 0 && isArray(element)) targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
            else {
                if (targetIndex >= 9007199254740991) throw TypeError('Exceed the acceptable array length');
                target[targetIndex] = element;
            }
            targetIndex++;
        }
        sourceIndex++;
    }
    return targetIndex;
};
module.exports = flattenIntoArray;

},{"../internals/is-array":"gB6cB","../internals/to-length":"cJhjy","../internals/function-bind-context":"3BONE"}],"2UyKQ":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var flattenIntoArray = require('../internals/flatten-into-array');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var aFunction = require('../internals/a-function');
var arraySpeciesCreate = require('../internals/array-species-create');
// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({
    target: 'Array',
    proto: true
}, {
    flatMap: function flatMap(callbackfn/* , thisArg */ ) {
        var O = toObject(this);
        var sourceLen = toLength(O.length);
        var A;
        aFunction(callbackfn);
        A = arraySpeciesCreate(O, 0);
        A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        return A;
    }
});

},{"../internals/export":"jPesG","../internals/flatten-into-array":"aGQaw","../internals/to-object":"9Eaxp","../internals/to-length":"cJhjy","../internals/a-function":"kyHeE","../internals/array-species-create":"5920z"}],"91ETa":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var forEach = require('../internals/array-for-each');
// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({
    target: 'Array',
    proto: true,
    forced: [].forEach != forEach
}, {
    forEach: forEach
});

},{"../internals/export":"jPesG","../internals/array-for-each":"f2N7h"}],"f2N7h":[function(require,module,exports) {
'use strict';
var $forEach = require('../internals/array-iteration').forEach;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var STRICT_METHOD = arrayMethodIsStrict('forEach');
// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn/* , thisArg */ ) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

},{"../internals/array-iteration":"gE5VF","../internals/array-method-is-strict":"h2UVB"}],"ebGTd":[function(require,module,exports) {
var $ = require('../internals/export');
var from = require('../internals/array-from');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
});
// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION
}, {
    from: from
});

},{"../internals/export":"jPesG","../internals/array-from":"6V8NR","../internals/check-correctness-of-iteration":"56p7B"}],"6V8NR":[function(require,module,exports) {
'use strict';
var bind = require('../internals/function-bind-context');
var toObject = require('../internals/to-object');
var callWithSafeIterationClosing = require('../internals/call-with-safe-iteration-closing');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var toLength = require('../internals/to-length');
var createProperty = require('../internals/create-property');
var getIteratorMethod = require('../internals/get-iterator-method');
// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike/* , mapfn = undefined, thisArg = undefined */ ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = iteratorMethod.call(O);
        next = iterator.next;
        result = new C();
        for(; !(step = next.call(iterator)).done; index++){
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [
                step.value,
                index
            ], true) : step.value;
            createProperty(result, index, value);
        }
    } else {
        length = toLength(O.length);
        result = new C(length);
        for(; length > index; index++){
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
        }
    }
    result.length = index;
    return result;
};

},{"../internals/function-bind-context":"3BONE","../internals/to-object":"9Eaxp","../internals/call-with-safe-iteration-closing":"1twa7","../internals/is-array-iterator-method":"52c1t","../internals/to-length":"cJhjy","../internals/create-property":"9RCVX","../internals/get-iterator-method":"enI2H"}],"1twa7":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var iteratorClose = require('../internals/iterator-close');
// call something on iterator step with safe closing on error
module.exports = function(iterator, fn, value, ENTRIES) {
    try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
        iteratorClose(iterator);
        throw error;
    }
};

},{"../internals/an-object":"Q1KxM","../internals/iterator-close":"fL2bO"}],"56p7B":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;
try {
    var called = 0;
    var iteratorWithReturn = {
        next: function() {
            return {
                done: !!called++
            };
        },
        'return': function() {
            SAFE_CLOSING = true;
        }
    };
    iteratorWithReturn[ITERATOR] = function() {
        return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function() {
        throw 2;
    });
} catch (error) {
}
module.exports = function(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
        var object = {
        };
        object[ITERATOR] = function() {
            return {
                next: function() {
                    return {
                        done: ITERATION_SUPPORT = true
                    };
                }
            };
        };
        exec(object);
    } catch (error) {
    }
    return ITERATION_SUPPORT;
};

},{"../internals/well-known-symbol":"8llxS"}],"hbv3G":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $includes = require('../internals/array-includes').includes;
var addToUnscopables = require('../internals/add-to-unscopables');
// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({
    target: 'Array',
    proto: true
}, {
    includes: function includes(el/* , fromIndex = 0 */ ) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

},{"../internals/export":"jPesG","../internals/array-includes":"grZRk","../internals/add-to-unscopables":"gCovB"}],"byGDf":[function(require,module,exports) {
'use strict';
/* eslint-disable es/no-array-prototype-indexof -- required for testing */ var $ = require('../internals/export');
var $indexOf = require('../internals/array-includes').indexOf;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var nativeIndexOf = [].indexOf;
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [
    1
].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({
    target: 'Array',
    proto: true,
    forced: NEGATIVE_ZERO || !STRICT_METHOD
}, {
    indexOf: function indexOf(searchElement/* , fromIndex = 0 */ ) {
        return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"jPesG","../internals/array-includes":"grZRk","../internals/array-method-is-strict":"h2UVB"}],"kLTkT":[function(require,module,exports) {
var $ = require('../internals/export');
var isArray = require('../internals/is-array');
// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({
    target: 'Array',
    stat: true
}, {
    isArray: isArray
});

},{"../internals/export":"jPesG","../internals/is-array":"gB6cB"}],"2Kz5u":[function(require,module,exports) {
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var addToUnscopables = require('../internals/add-to-unscopables');
var Iterators = require('../internals/iterators');
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function(iterated, kind) {
    setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        index: 0,
        kind: kind
    });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function() {
    var state = getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
        state.target = undefined;
        return {
            value: undefined,
            done: true
        };
    }
    if (kind == 'keys') return {
        value: index,
        done: false
    };
    if (kind == 'values') return {
        value: target[index],
        done: false
    };
    return {
        value: [
            index,
            target[index]
        ],
        done: false
    };
}, 'values');
// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"../internals/to-indexed-object":"1LFTi","../internals/add-to-unscopables":"gCovB","../internals/iterators":"7xZUL","../internals/internal-state":"6IhmE","../internals/define-iterator":"2vmKI"}],"2vmKI":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createIteratorConstructor = require('../internals/create-iterator-constructor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var Iterators = require('../internals/iterators');
var IteratorsCore = require('../internals/iterators-core');
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function() {
    return this;
};
module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch(KIND){
            case KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };
            case VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };
            case ENTRIES:
                return function entries() {
                    return new IteratorConstructor(this, KIND);
                };
        }
        return function() {
            return new IteratorConstructor(this);
        };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    // fix native
    if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
            // Set @@toStringTag to native iterators
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
    }
    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() {
            return nativeIterator.call(this);
        };
    }
    // define iterator
    if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
    Iterators[NAME] = defaultIterator;
    // export additional methods
    if (DEFAULT) {
        methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) redefine(IterablePrototype, KEY, methods[KEY]);
        else $({
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    return methods;
};

},{"../internals/export":"jPesG","../internals/create-iterator-constructor":"cYz2A","../internals/object-get-prototype-of":"9zsYa","../internals/object-set-prototype-of":"dEqW3","../internals/set-to-string-tag":"353PM","../internals/create-non-enumerable-property":"57sB9","../internals/redefine":"5ao1i","../internals/well-known-symbol":"8llxS","../internals/is-pure":"hQb5L","../internals/iterators":"7xZUL","../internals/iterators-core":"4T0Lq"}],"cYz2A":[function(require,module,exports) {
'use strict';
var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype;
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var setToStringTag = require('../internals/set-to-string-tag');
var Iterators = require('../internals/iterators');
var returnThis = function() {
    return this;
};
module.exports = function(IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(1, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators[TO_STRING_TAG] = returnThis;
    return IteratorConstructor;
};

},{"../internals/iterators-core":"4T0Lq","../internals/object-create":"2iitg","../internals/create-property-descriptor":"em69o","../internals/set-to-string-tag":"353PM","../internals/iterators":"7xZUL"}],"4T0Lq":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;
var returnThis = function() {
    return this;
};
// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */ if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
}
var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function() {
    var test = {
    };
    // FF44- legacy iterators case
    return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {
};
// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
module.exports = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/fails":"9axhl","../internals/object-get-prototype-of":"9zsYa","../internals/create-non-enumerable-property":"57sB9","../internals/has":"234Va","../internals/well-known-symbol":"8llxS","../internals/is-pure":"hQb5L"}],"21whN":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IndexedObject = require('../internals/indexed-object');
var toIndexedObject = require('../internals/to-indexed-object');
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var nativeJoin = [].join;
var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');
// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({
    target: 'Array',
    proto: true,
    forced: ES3_STRINGS || !STRICT_METHOD
}, {
    join: function join(separator) {
        return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
});

},{"../internals/export":"jPesG","../internals/indexed-object":"ev31F","../internals/to-indexed-object":"1LFTi","../internals/array-method-is-strict":"h2UVB"}],"e7GQz":[function(require,module,exports) {
var $ = require('../internals/export');
var lastIndexOf = require('../internals/array-last-index-of');
// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$({
    target: 'Array',
    proto: true,
    forced: lastIndexOf !== [].lastIndexOf
}, {
    lastIndexOf: lastIndexOf
});

},{"../internals/export":"jPesG","../internals/array-last-index-of":"177CN"}],"177CN":[function(require,module,exports) {
'use strict';
/* eslint-disable es/no-array-prototype-lastindexof -- safe */ var toIndexedObject = require('../internals/to-indexed-object');
var toInteger = require('../internals/to-integer');
var toLength = require('../internals/to-length');
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [
    1
].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;
// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement/* , fromIndex = @[*-1] */ ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $lastIndexOf.apply(this, arguments) || 0;
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for(; index >= 0; index--)if (index in O && O[index] === searchElement) return index || 0;
    return -1;
} : $lastIndexOf;

},{"../internals/to-indexed-object":"1LFTi","../internals/to-integer":"8UwJq","../internals/to-length":"cJhjy","../internals/array-method-is-strict":"h2UVB"}],"9hPJL":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $map = require('../internals/array-iteration').map;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    map: function map(callbackfn/* , thisArg */ ) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"jPesG","../internals/array-iteration":"gE5VF","../internals/array-method-has-species-support":"5CCXc"}],"dmZmN":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var createProperty = require('../internals/create-property');
var ISNT_GENERIC = fails(function() {
    function F() {
    }
    // eslint-disable-next-line es/no-array-of -- required for testing
    return !(Array.of.call(F) instanceof F);
});
// `Array.of` method
// https://tc39.es/ecma262/#sec-array.of
// WebKit Array.of isn't generic
$({
    target: 'Array',
    stat: true,
    forced: ISNT_GENERIC
}, {
    of: function of() {
        var index = 0;
        var argumentsLength = arguments.length;
        var result = new (typeof this == 'function' ? this : Array)(argumentsLength);
        while(argumentsLength > index)createProperty(result, index, arguments[index++]);
        result.length = argumentsLength;
        return result;
    }
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl","../internals/create-property":"9RCVX"}],"1LaET":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $reduce = require('../internals/array-reduce').left;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var CHROME_VERSION = require('../internals/engine-v8-version');
var IS_NODE = require('../internals/engine-is-node');
var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD || CHROME_BUG
}, {
    reduce: function reduce(callbackfn/* , initialValue */ ) {
        return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"jPesG","../internals/array-reduce":"iITb8","../internals/array-method-is-strict":"h2UVB","../internals/engine-v8-version":"kH759","../internals/engine-is-node":"aXzPf"}],"iITb8":[function(require,module,exports) {
var aFunction = require('../internals/a-function');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');
var toLength = require('../internals/to-length');
// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function(IS_RIGHT) {
    return function(that, callbackfn, argumentsLength, memo) {
        aFunction(callbackfn);
        var O = toObject(that);
        var self = IndexedObject(O);
        var length = toLength(O.length);
        var index = IS_RIGHT ? length - 1 : 0;
        var i = IS_RIGHT ? -1 : 1;
        if (argumentsLength < 2) while(true){
            if (index in self) {
                memo = self[index];
                index += i;
                break;
            }
            index += i;
            if (IS_RIGHT ? index < 0 : length <= index) throw TypeError('Reduce of empty array with no initial value');
        }
        for(; IS_RIGHT ? index >= 0 : length > index; index += i)if (index in self) memo = callbackfn(memo, self[index], index, O);
        return memo;
    };
};
module.exports = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
};

},{"../internals/a-function":"kyHeE","../internals/to-object":"9Eaxp","../internals/indexed-object":"ev31F","../internals/to-length":"cJhjy"}],"aXzPf":[function(require,module,exports) {
var classof = require('../internals/classof-raw');
var global = require('../internals/global');
module.exports = classof(global.process) == 'process';

},{"../internals/classof-raw":"bGuqx","../internals/global":"k6ng2"}],"jBHrk":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $reduceRight = require('../internals/array-reduce').right;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var CHROME_VERSION = require('../internals/engine-v8-version');
var IS_NODE = require('../internals/engine-is-node');
var STRICT_METHOD = arrayMethodIsStrict('reduceRight');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD || CHROME_BUG
}, {
    reduceRight: function reduceRight(callbackfn/* , initialValue */ ) {
        return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"jPesG","../internals/array-reduce":"iITb8","../internals/array-method-is-strict":"h2UVB","../internals/engine-v8-version":"kH759","../internals/engine-is-node":"aXzPf"}],"9kMAe":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var isArray = require('../internals/is-array');
var nativeReverse = [].reverse;
var test = [
    1,
    2
];
// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({
    target: 'Array',
    proto: true,
    forced: String(test) === String(test.reverse())
}, {
    reverse: function reverse() {
        // eslint-disable-next-line no-self-assign -- dirty hack
        if (isArray(this)) this.length = this.length;
        return nativeReverse.call(this);
    }
});

},{"../internals/export":"jPesG","../internals/is-array":"gB6cB"}],"d5h8D":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var isObject = require('../internals/is-object');
var isArray = require('../internals/is-array');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var toLength = require('../internals/to-length');
var toIndexedObject = require('../internals/to-indexed-object');
var createProperty = require('../internals/create-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;
// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    slice: function slice(start, end) {
        var O = toIndexedObject(this);
        var length = toLength(O.length);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === undefined ? length : end, length);
        // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
        var Constructor, result, n;
        if (isArray(O)) {
            Constructor = O.constructor;
            // cross-realm fallback
            if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) Constructor = undefined;
            else if (isObject(Constructor)) {
                Constructor = Constructor[SPECIES];
                if (Constructor === null) Constructor = undefined;
            }
            if (Constructor === Array || Constructor === undefined) return nativeSlice.call(O, k, fin);
        }
        result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
        for(n = 0; k < fin; k++, n++)if (k in O) createProperty(result, n, O[k]);
        result.length = n;
        return result;
    }
});

},{"../internals/export":"jPesG","../internals/is-object":"55UvG","../internals/is-array":"gB6cB","../internals/to-absolute-index":"lsGvn","../internals/to-length":"cJhjy","../internals/to-indexed-object":"1LFTi","../internals/create-property":"9RCVX","../internals/well-known-symbol":"8llxS","../internals/array-method-has-species-support":"5CCXc"}],"eGSO5":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $some = require('../internals/array-iteration').some;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var STRICT_METHOD = arrayMethodIsStrict('some');
// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD
}, {
    some: function some(callbackfn/* , thisArg */ ) {
        return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"jPesG","../internals/array-iteration":"gE5VF","../internals/array-method-is-strict":"h2UVB"}],"2ZJaH":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var aFunction = require('../internals/a-function');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var fails = require('../internals/fails');
var internalSort = require('../internals/array-sort');
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var FF = require('../internals/engine-ff-version');
var IE_OR_EDGE = require('../internals/engine-is-ie-or-edge');
var V8 = require('../internals/engine-v8-version');
var WEBKIT = require('../internals/engine-webkit-version');
var test = [];
var nativeSort = test.sort;
// IE8-
var FAILS_ON_UNDEFINED = fails(function() {
    test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function() {
    test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');
var STABLE_SORT = !fails(function() {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 70;
    if (FF && FF > 3) return;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 603;
    var result = '';
    var code, chr, value, index;
    // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
    for(code = 65; code < 76; code++){
        chr = String.fromCharCode(code);
        switch(code){
            case 66:
            case 69:
            case 70:
            case 72:
                value = 3;
                break;
            case 68:
            case 71:
                value = 4;
                break;
            default:
                value = 2;
        }
        for(index = 0; index < 47; index++)test.push({
            k: chr + index,
            v: value
        });
    }
    test.sort(function(a, b) {
        return b.v - a.v;
    });
    for(index = 0; index < test.length; index++){
        chr = test[index].k.charAt(0);
        if (result.charAt(result.length - 1) !== chr) result += chr;
    }
    return result !== 'DGBEFHACIJK';
});
var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
var getSortCompare = function(comparefn) {
    return function(x, y) {
        if (y === undefined) return -1;
        if (x === undefined) return 1;
        if (comparefn !== undefined) return +comparefn(x, y) || 0;
        return String(x) > String(y) ? 1 : -1;
    };
};
// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    sort: function sort(comparefn) {
        if (comparefn !== undefined) aFunction(comparefn);
        var array = toObject(this);
        if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);
        var items = [];
        var arrayLength = toLength(array.length);
        var itemsLength, index;
        for(index = 0; index < arrayLength; index++)if (index in array) items.push(array[index]);
        items = internalSort(items, getSortCompare(comparefn));
        itemsLength = items.length;
        index = 0;
        while(index < itemsLength)array[index] = items[index++];
        while(index < arrayLength)delete array[index++];
        return array;
    }
});

},{"../internals/export":"jPesG","../internals/a-function":"kyHeE","../internals/to-object":"9Eaxp","../internals/to-length":"cJhjy","../internals/fails":"9axhl","../internals/array-sort":"7jbLD","../internals/array-method-is-strict":"h2UVB","../internals/engine-ff-version":"dHIKV","../internals/engine-is-ie-or-edge":"31PRF","../internals/engine-v8-version":"kH759","../internals/engine-webkit-version":"8jnCR"}],"7jbLD":[function(require,module,exports) {
// TODO: use something more complex like timsort?
var floor = Math.floor;
var mergeSort = function(array, comparefn) {
    var length = array.length;
    var middle = floor(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(mergeSort(array.slice(0, middle), comparefn), mergeSort(array.slice(middle), comparefn), comparefn);
};
var insertionSort = function(array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;
    while(i < length){
        j = i;
        element = array[i];
        while(j && comparefn(array[j - 1], element) > 0)array[j] = array[--j];
        if (j !== i++) array[j] = element;
    }
    return array;
};
var merge = function(left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;
    var result = [];
    while(lindex < llength || rindex < rlength)if (lindex < llength && rindex < rlength) result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
    else result.push(lindex < llength ? left[lindex++] : right[rindex++]);
    return result;
};
module.exports = mergeSort;

},{}],"dHIKV":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
var firefox = userAgent.match(/firefox\/(\d+)/i);
module.exports = !!firefox && +firefox[1];

},{"../internals/engine-user-agent":"2dJJC"}],"31PRF":[function(require,module,exports) {
var UA = require('../internals/engine-user-agent');
module.exports = /MSIE|Trident/.test(UA);

},{"../internals/engine-user-agent":"2dJJC"}],"8jnCR":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
module.exports = !!webkit && +webkit[1];

},{"../internals/engine-user-agent":"2dJJC"}],"29iEH":[function(require,module,exports) {
var setSpecies = require('../internals/set-species');
// `Array[@@species]` getter
// https://tc39.es/ecma262/#sec-get-array-@@species
setSpecies('Array');

},{"../internals/set-species":"d19R4"}],"d19R4":[function(require,module,exports) {
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var definePropertyModule = require('../internals/object-define-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var DESCRIPTORS = require('../internals/descriptors');
var SPECIES = wellKnownSymbol('species');
module.exports = function(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule.f;
    if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineProperty(Constructor, SPECIES, {
        configurable: true,
        get: function() {
            return this;
        }
    });
};

},{"../internals/get-built-in":"wFpZi","../internals/object-define-property":"d7OpP","../internals/well-known-symbol":"8llxS","../internals/descriptors":"b4IwU"}],"hsdC4":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var toInteger = require('../internals/to-integer');
var toLength = require('../internals/to-length');
var toObject = require('../internals/to-object');
var arraySpeciesCreate = require('../internals/array-species-create');
var createProperty = require('../internals/create-property');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 9007199254740991;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';
// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    splice: function splice(start, deleteCount/* , ...items */ ) {
        var O = toObject(this);
        var len = toLength(O.length);
        var actualStart = toAbsoluteIndex(start, len);
        var argumentsLength = arguments.length;
        var insertCount, actualDeleteCount, A, k, from, to;
        if (argumentsLength === 0) insertCount = actualDeleteCount = 0;
        else if (argumentsLength === 1) {
            insertCount = 0;
            actualDeleteCount = len - actualStart;
        } else {
            insertCount = argumentsLength - 2;
            actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
        }
        if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
        A = arraySpeciesCreate(O, actualDeleteCount);
        for(k = 0; k < actualDeleteCount; k++){
            from = actualStart + k;
            if (from in O) createProperty(A, k, O[from]);
        }
        A.length = actualDeleteCount;
        if (insertCount < actualDeleteCount) {
            for(k = actualStart; k < len - actualDeleteCount; k++){
                from = k + actualDeleteCount;
                to = k + insertCount;
                if (from in O) O[to] = O[from];
                else delete O[to];
            }
            for(k = len; k > len - actualDeleteCount + insertCount; k--)delete O[k - 1];
        } else if (insertCount > actualDeleteCount) for(k = len - actualDeleteCount; k > actualStart; k--){
            from = k + actualDeleteCount - 1;
            to = k + insertCount - 1;
            if (from in O) O[to] = O[from];
            else delete O[to];
        }
        for(k = 0; k < insertCount; k++)O[k + actualStart] = arguments[k + 2];
        O.length = len - actualDeleteCount + insertCount;
        return A;
    }
});

},{"../internals/export":"jPesG","../internals/to-absolute-index":"lsGvn","../internals/to-integer":"8UwJq","../internals/to-length":"cJhjy","../internals/to-object":"9Eaxp","../internals/array-species-create":"5920z","../internals/create-property":"9RCVX","../internals/array-method-has-species-support":"5CCXc"}],"3WFYL":[function(require,module,exports) {
// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = require('../internals/add-to-unscopables');
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flat');

},{"../internals/add-to-unscopables":"gCovB"}],"6JIJR":[function(require,module,exports) {
// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = require('../internals/add-to-unscopables');
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');

},{"../internals/add-to-unscopables":"gCovB"}],"atY2F":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var arrayBufferModule = require('../internals/array-buffer');
var setSpecies = require('../internals/set-species');
var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer1 = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = global[ARRAY_BUFFER];
// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
$({
    global: true,
    forced: NativeArrayBuffer !== ArrayBuffer1
}, {
    ArrayBuffer: ArrayBuffer1
});
setSpecies(ARRAY_BUFFER);

},{"../internals/export":"jPesG","../internals/global":"k6ng2","../internals/array-buffer":"227dh","../internals/set-species":"d19R4"}],"227dh":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var DESCRIPTORS = require('../internals/descriptors');
var NATIVE_ARRAY_BUFFER = require('../internals/array-buffer-native');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefineAll = require('../internals/redefine-all');
var fails = require('../internals/fails');
var anInstance = require('../internals/an-instance');
var toInteger = require('../internals/to-integer');
var toLength = require('../internals/to-length');
var toIndex = require('../internals/to-index');
var IEEE754 = require('../internals/ieee754');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var defineProperty = require('../internals/object-define-property').f;
var arrayFill = require('../internals/array-fill');
var setToStringTag = require('../internals/set-to-string-tag');
var InternalStateModule = require('../internals/internal-state');
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var $DataView = global[DATA_VIEW];
var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var RangeError1 = global.RangeError;
var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;
var packInt8 = function(number) {
    return [
        number & 255
    ];
};
var packInt16 = function(number) {
    return [
        number & 255,
        number >> 8 & 255
    ];
};
var packInt32 = function(number) {
    return [
        number & 255,
        number >> 8 & 255,
        number >> 16 & 255,
        number >> 24 & 255
    ];
};
var unpackInt32 = function(buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};
var packFloat32 = function(number) {
    return packIEEE754(number, 23, 4);
};
var packFloat64 = function(number) {
    return packIEEE754(number, 52, 8);
};
var addGetter = function(Constructor, key) {
    defineProperty(Constructor[PROTOTYPE], key, {
        get: function() {
            return getInternalState(this)[key];
        }
    });
};
var get = function(view, count, index, isLittleEndian) {
    var intIndex = toIndex(index);
    var store = getInternalState(view);
    if (intIndex + count > store.byteLength) throw RangeError1(WRONG_INDEX);
    var bytes = getInternalState(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = bytes.slice(start, start + count);
    return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, count, index, conversion, value, isLittleEndian) {
    var intIndex = toIndex(index);
    var store = getInternalState(view);
    if (intIndex + count > store.byteLength) throw RangeError1(WRONG_INDEX);
    var bytes = getInternalState(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = conversion(+value);
    for(var i = 0; i < count; i++)bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};
if (!NATIVE_ARRAY_BUFFER) {
    $ArrayBuffer = function ArrayBuffer1(length) {
        anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
        var byteLength = toIndex(length);
        setInternalState(this, {
            bytes: arrayFill.call(new Array(byteLength), 0),
            byteLength: byteLength
        });
        if (!DESCRIPTORS) this.byteLength = byteLength;
    };
    $DataView = function DataView1(buffer, byteOffset, byteLength) {
        anInstance(this, $DataView, DATA_VIEW);
        anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = getInternalState(buffer).byteLength;
        var offset = toInteger(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError1('Wrong offset');
        byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError1(WRONG_LENGTH);
        setInternalState(this, {
            buffer: buffer,
            byteLength: byteLength,
            byteOffset: offset
        });
        if (!DESCRIPTORS) {
            this.buffer = buffer;
            this.byteLength = byteLength;
            this.byteOffset = offset;
        }
    };
    if (DESCRIPTORS) {
        addGetter($ArrayBuffer, 'byteLength');
        addGetter($DataView, 'buffer');
        addGetter($DataView, 'byteLength');
        addGetter($DataView, 'byteOffset');
    }
    redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
            return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
            return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset/* , littleEndian */ ) {
            var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
            return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset/* , littleEndian */ ) {
            var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
            return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset/* , littleEndian */ ) {
            return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
        },
        getUint32: function getUint32(byteOffset/* , littleEndian */ ) {
            return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset/* , littleEndian */ ) {
            return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
        },
        getFloat64: function getFloat64(byteOffset/* , littleEndian */ ) {
            return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
        },
        setInt8: function setInt8(byteOffset, value) {
            set(this, 1, byteOffset, packInt8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
            set(this, 1, byteOffset, packInt8, value);
        },
        setInt16: function setInt16(byteOffset, value/* , littleEndian */ ) {
            set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setUint16: function setUint16(byteOffset, value/* , littleEndian */ ) {
            set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setInt32: function setInt32(byteOffset, value/* , littleEndian */ ) {
            set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setUint32: function setUint32(byteOffset, value/* , littleEndian */ ) {
            set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setFloat32: function setFloat32(byteOffset, value/* , littleEndian */ ) {
            set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setFloat64: function setFloat64(byteOffset, value/* , littleEndian */ ) {
            set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
        }
    });
} else {
    /* eslint-disable no-new -- required for testing */ if (!fails(function() {
        NativeArrayBuffer(1);
    }) || !fails(function() {
        new NativeArrayBuffer(-1);
    }) || fails(function() {
        new NativeArrayBuffer();
        new NativeArrayBuffer(1.5);
        new NativeArrayBuffer(NaN);
        return NativeArrayBuffer.name != ARRAY_BUFFER;
    })) {
        /* eslint-enable no-new -- required for testing */ $ArrayBuffer = function ArrayBuffer1(length) {
            anInstance(this, $ArrayBuffer);
            return new NativeArrayBuffer(toIndex(length));
        };
        var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
        for(var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;)if (!((key = keys[j++]) in $ArrayBuffer)) createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
        ArrayBufferPrototype.constructor = $ArrayBuffer;
    }
    // WebKit bug - the same parent prototype for typed arrays and data view
    if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) setPrototypeOf($DataViewPrototype, ObjectPrototype);
    // iOS Safari 7.x bug
    var testView = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = $DataViewPrototype.setInt8;
    testView.setInt8(0, 2147483648);
    testView.setInt8(1, 2147483649);
    if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
        setInt8: function setInt8(byteOffset, value) {
            $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
            $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
    }, {
        unsafe: true
    });
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
module.exports = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView
};

},{"../internals/global":"k6ng2","../internals/descriptors":"b4IwU","../internals/array-buffer-native":"hjyeO","../internals/create-non-enumerable-property":"57sB9","../internals/redefine-all":"hfrn6","../internals/fails":"9axhl","../internals/an-instance":"i7zHZ","../internals/to-integer":"8UwJq","../internals/to-length":"cJhjy","../internals/to-index":"cWxwD","../internals/ieee754":"hFVdk","../internals/object-get-prototype-of":"9zsYa","../internals/object-set-prototype-of":"dEqW3","../internals/object-get-own-property-names":"lqOHM","../internals/object-define-property":"d7OpP","../internals/array-fill":"dQ4oL","../internals/set-to-string-tag":"353PM","../internals/internal-state":"6IhmE"}],"hjyeO":[function(require,module,exports) {
// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

},{}],"hfrn6":[function(require,module,exports) {
var redefine = require('../internals/redefine');
module.exports = function(target, src, options) {
    for(var key in src)redefine(target, key, src[key], options);
    return target;
};

},{"../internals/redefine":"5ao1i"}],"i7zHZ":[function(require,module,exports) {
module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor)) throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    return it;
};

},{}],"cWxwD":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var toLength = require('../internals/to-length');
// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function(it) {
    if (it === undefined) return 0;
    var number = toInteger(it);
    var length = toLength(number);
    if (number !== length) throw RangeError('Wrong length or index');
    return length;
};

},{"../internals/to-integer":"8UwJq","../internals/to-length":"cJhjy"}],"hFVdk":[function(require,module,exports) {
// IEEE754 conversions based on https://github.com/feross/ieee754
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var pack = function(number, mantissaLength, bytes) {
    var buffer = new Array(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = abs(number);
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number || number === Infinity) {
        // eslint-disable-next-line no-self-compare -- NaN check
        mantissa = number != number ? 1 : 0;
        exponent = eMax;
    } else {
        exponent = floor(log(number) / LN2);
        if (number * (c = pow(2, -exponent)) < 1) {
            exponent--;
            c *= 2;
        }
        if (exponent + eBias >= 1) number += rt / c;
        else number += rt * pow(2, 1 - eBias);
        if (number * c >= 2) {
            exponent++;
            c /= 2;
        }
        if (exponent + eBias >= eMax) {
            mantissa = 0;
            exponent = eMax;
        } else if (exponent + eBias >= 1) {
            mantissa = (number * c - 1) * pow(2, mantissaLength);
            exponent = exponent + eBias;
        } else {
            mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
            exponent = 0;
        }
    }
    for(; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;
    for(; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
    buffer[--index] |= sign * 128;
    return buffer;
};
var unpack = function(buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;
    for(; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;
    for(; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
    if (exponent === 0) exponent = 1 - eBias;
    else if (exponent === eMax) return mantissa ? NaN : sign ? -Infinity : Infinity;
    else {
        mantissa = mantissa + pow(2, mantissaLength);
        exponent = exponent - eBias;
    }
    return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};
module.exports = {
    pack: pack,
    unpack: unpack
};

},{}],"aXTY2":[function(require,module,exports) {
var $ = require('../internals/export');
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
// `ArrayBuffer.isView` method
// https://tc39.es/ecma262/#sec-arraybuffer.isview
$({
    target: 'ArrayBuffer',
    stat: true,
    forced: !NATIVE_ARRAY_BUFFER_VIEWS
}, {
    isView: ArrayBufferViewCore.isView
});

},{"../internals/export":"jPesG","../internals/array-buffer-view-core":"c8IHE"}],"c8IHE":[function(require,module,exports) {
'use strict';
var NATIVE_ARRAY_BUFFER = require('../internals/array-buffer-native');
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var has = require('../internals/has');
var classof = require('../internals/classof');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var defineProperty = require('../internals/object-define-property').f;
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var wellKnownSymbol = require('../internals/well-known-symbol');
var uid = require('../internals/uid');
var Int8Array1 = global.Int8Array;
var Int8ArrayPrototype = Int8Array1 && Int8Array1.prototype;
var Uint8ClampedArray1 = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray1 && Uint8ClampedArray1.prototype;
var TypedArray = Int8Array1 && getPrototypeOf(Int8Array1);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var isPrototypeOf = ObjectPrototype.isPrototypeOf;
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME;
var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
};
var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
};
var isView = function isView1(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return klass === 'DataView' || has(TypedArrayConstructorsList, klass) || has(BigIntArrayConstructorsList, klass);
};
var isTypedArray = function(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return has(TypedArrayConstructorsList, klass) || has(BigIntArrayConstructorsList, klass);
};
var aTypedArray = function(it) {
    if (isTypedArray(it)) return it;
    throw TypeError('Target is not a typed array');
};
var aTypedArrayConstructor = function(C) {
    if (setPrototypeOf) {
        if (isPrototypeOf.call(TypedArray, C)) return C;
    } else for(var ARRAY in TypedArrayConstructorsList)if (has(TypedArrayConstructorsList, NAME)) {
        var TypedArrayConstructor = global[ARRAY];
        if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) return C;
    }
    throw TypeError('Target is not a typed array constructor');
};
var exportTypedArrayMethod = function(KEY, property, forced) {
    if (!DESCRIPTORS) return;
    if (forced) for(var ARRAY in TypedArrayConstructorsList){
        var TypedArrayConstructor = global[ARRAY];
        if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) try {
            delete TypedArrayConstructor.prototype[KEY];
        } catch (error) {
        }
    }
    if (!TypedArrayPrototype[KEY] || forced) redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
};
var exportTypedArrayStaticMethod = function(KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!DESCRIPTORS) return;
    if (setPrototypeOf) {
        if (forced) for(ARRAY in TypedArrayConstructorsList){
            TypedArrayConstructor = global[ARRAY];
            if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) try {
                delete TypedArrayConstructor[KEY];
            } catch (error) {
            }
        }
        if (!TypedArray[KEY] || forced) // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
            return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
        } catch (error) {
        }
        else return;
    }
    for(ARRAY in TypedArrayConstructorsList){
        TypedArrayConstructor = global[ARRAY];
        if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) redefine(TypedArrayConstructor, KEY, property);
    }
};
for(NAME in TypedArrayConstructorsList)if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
    // eslint-disable-next-line no-shadow -- safe
    TypedArray = function TypedArray1() {
        throw TypeError('Incorrect invocation');
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS) for(NAME in TypedArrayConstructorsList)if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
}
if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
    TypedArrayPrototype = TypedArray.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS) for(NAME in TypedArrayConstructorsList)if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
}
// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQIRED = true;
    defineProperty(TypedArrayPrototype, TO_STRING_TAG, {
        get: function() {
            return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
        }
    });
    for(NAME in TypedArrayConstructorsList)if (global[NAME]) createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
}
module.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
    aTypedArray: aTypedArray,
    aTypedArrayConstructor: aTypedArrayConstructor,
    exportTypedArrayMethod: exportTypedArrayMethod,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
    isView: isView,
    isTypedArray: isTypedArray,
    TypedArray: TypedArray,
    TypedArrayPrototype: TypedArrayPrototype
};

},{"../internals/array-buffer-native":"hjyeO","../internals/descriptors":"b4IwU","../internals/global":"k6ng2","../internals/is-object":"55UvG","../internals/has":"234Va","../internals/classof":"fGqVo","../internals/create-non-enumerable-property":"57sB9","../internals/redefine":"5ao1i","../internals/object-define-property":"d7OpP","../internals/object-get-prototype-of":"9zsYa","../internals/object-set-prototype-of":"dEqW3","../internals/well-known-symbol":"8llxS","../internals/uid":"bqSbl"}],"j0Au9":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var ArrayBufferModule = require('../internals/array-buffer');
var anObject = require('../internals/an-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var toLength = require('../internals/to-length');
var speciesConstructor = require('../internals/species-constructor');
var ArrayBuffer1 = ArrayBufferModule.ArrayBuffer;
var DataView1 = ArrayBufferModule.DataView;
var nativeArrayBufferSlice = ArrayBuffer1.prototype.slice;
var INCORRECT_SLICE = fails(function() {
    return !new ArrayBuffer1(2).slice(1, undefined).byteLength;
});
// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$({
    target: 'ArrayBuffer',
    proto: true,
    unsafe: true,
    forced: INCORRECT_SLICE
}, {
    slice: function slice(start, end) {
        if (nativeArrayBufferSlice !== undefined && end === undefined) return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
        var length = anObject(this).byteLength;
        var first = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === undefined ? length : end, length);
        var result = new (speciesConstructor(this, ArrayBuffer1))(toLength(fin - first));
        var viewSource = new DataView1(this);
        var viewTarget = new DataView1(result);
        var index = 0;
        while(first < fin)viewTarget.setUint8(index++, viewSource.getUint8(first++));
        return result;
    }
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl","../internals/array-buffer":"227dh","../internals/an-object":"Q1KxM","../internals/to-absolute-index":"lsGvn","../internals/to-length":"cJhjy","../internals/species-constructor":"aTcmi"}],"aTcmi":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var wellKnownSymbol = require('../internals/well-known-symbol');
var SPECIES = wellKnownSymbol('species');
// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function(O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

},{"../internals/an-object":"Q1KxM","../internals/a-function":"kyHeE","../internals/well-known-symbol":"8llxS"}],"d8FmA":[function(require,module,exports) {
var $ = require('../internals/export');
var ArrayBufferModule = require('../internals/array-buffer');
var NATIVE_ARRAY_BUFFER = require('../internals/array-buffer-native');
// `DataView` constructor
// https://tc39.es/ecma262/#sec-dataview-constructor
$({
    global: true,
    forced: !NATIVE_ARRAY_BUFFER
}, {
    DataView: ArrayBufferModule.DataView
});

},{"../internals/export":"jPesG","../internals/array-buffer":"227dh","../internals/array-buffer-native":"hjyeO"}],"5tmqc":[function(require,module,exports) {
var $ = require('../internals/export');
// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
$({
    target: 'Date',
    stat: true
}, {
    now: function now() {
        return new Date().getTime();
    }
});

},{"../internals/export":"jPesG"}],"imOat":[function(require,module,exports) {
var $ = require('../internals/export');
var toISOString = require('../internals/date-to-iso-string');
// `Date.prototype.toISOString` method
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
$({
    target: 'Date',
    proto: true,
    forced: Date.prototype.toISOString !== toISOString
}, {
    toISOString: toISOString
});

},{"../internals/export":"jPesG","../internals/date-to-iso-string":"j0Zh9"}],"j0Zh9":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');
var padStart = require('../internals/string-pad').start;
var abs = Math.abs;
var DatePrototype = Date.prototype;
var getTime = DatePrototype.getTime;
var nativeDateToISOString = DatePrototype.toISOString;
// `Date.prototype.toISOString` method implementation
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
module.exports = fails(function() {
    return nativeDateToISOString.call(new Date(-50000000000000 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function() {
    nativeDateToISOString.call(new Date(NaN));
}) ? function toISOString() {
    if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
    var date = this;
    var year = date.getUTCFullYear();
    var milliseconds = date.getUTCMilliseconds();
    var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
    return sign + padStart(abs(year), sign ? 6 : 4, 0) + '-' + padStart(date.getUTCMonth() + 1, 2, 0) + '-' + padStart(date.getUTCDate(), 2, 0) + 'T' + padStart(date.getUTCHours(), 2, 0) + ':' + padStart(date.getUTCMinutes(), 2, 0) + ':' + padStart(date.getUTCSeconds(), 2, 0) + '.' + padStart(milliseconds, 3, 0) + 'Z';
} : nativeDateToISOString;

},{"../internals/fails":"9axhl","../internals/string-pad":"dBt6W"}],"dBt6W":[function(require,module,exports) {
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('../internals/to-length');
var repeat = require('../internals/string-repeat');
var requireObjectCoercible = require('../internals/require-object-coercible');
var ceil = Math.ceil;
// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function(IS_END) {
    return function($this, maxLength, fillString) {
        var S = String(requireObjectCoercible($this));
        var stringLength = S.length;
        var fillStr = fillString === undefined ? ' ' : String(fillString);
        var intMaxLength = toLength(maxLength);
        var fillLen, stringFiller;
        if (intMaxLength <= stringLength || fillStr == '') return S;
        fillLen = intMaxLength - stringLength;
        stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
        if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
        return IS_END ? S + stringFiller : stringFiller + S;
    };
};
module.exports = {
    // `String.prototype.padStart` method
    // https://tc39.es/ecma262/#sec-string.prototype.padstart
    start: createMethod(false),
    // `String.prototype.padEnd` method
    // https://tc39.es/ecma262/#sec-string.prototype.padend
    end: createMethod(true)
};

},{"../internals/to-length":"cJhjy","../internals/string-repeat":"iW2qf","../internals/require-object-coercible":"g8fXQ"}],"iW2qf":[function(require,module,exports) {
'use strict';
var toInteger = require('../internals/to-integer');
var requireObjectCoercible = require('../internals/require-object-coercible');
// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
    var str = String(requireObjectCoercible(this));
    var result = '';
    var n = toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
    for(; n > 0; n >>>= 1, str += str)if (n & 1) result += str;
    return result;
};

},{"../internals/to-integer":"8UwJq","../internals/require-object-coercible":"g8fXQ"}],"8aEev":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toObject = require('../internals/to-object');
var toPrimitive = require('../internals/to-primitive');
var FORCED = fails(function() {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
        toISOString: function() {
            return 1;
        }
    }) !== 1;
});
// `Date.prototype.toJSON` method
// https://tc39.es/ecma262/#sec-date.prototype.tojson
$({
    target: 'Date',
    proto: true,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    toJSON: function toJSON(key) {
        var O = toObject(this);
        var pv = toPrimitive(O);
        return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl","../internals/to-object":"9Eaxp","../internals/to-primitive":"ia6YM"}],"jseQb":[function(require,module,exports) {
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var dateToPrimitive = require('../internals/date-to-primitive');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var DatePrototype = Date.prototype;
// `Date.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
if (!(TO_PRIMITIVE in DatePrototype)) createNonEnumerableProperty(DatePrototype, TO_PRIMITIVE, dateToPrimitive);

},{"../internals/create-non-enumerable-property":"57sB9","../internals/date-to-primitive":"9znIw","../internals/well-known-symbol":"8llxS"}],"9znIw":[function(require,module,exports) {
'use strict';
var anObject = require('../internals/an-object');
var toPrimitive = require('../internals/to-primitive');
// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
module.exports = function(hint) {
    if (hint !== 'string' && hint !== 'number' && hint !== 'default') throw TypeError('Incorrect hint');
    return toPrimitive(anObject(this), hint !== 'number');
};

},{"../internals/an-object":"Q1KxM","../internals/to-primitive":"ia6YM"}],"2bTWf":[function(require,module,exports) {
var redefine = require('../internals/redefine');
var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;
// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
});

},{"../internals/redefine":"5ao1i"}],"athYx":[function(require,module,exports) {
var $ = require('../internals/export');
var bind = require('../internals/function-bind');
// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({
    target: 'Function',
    proto: true
}, {
    bind: bind
});

},{"../internals/export":"jPesG","../internals/function-bind":"3s5wB"}],"3s5wB":[function(require,module,exports) {
'use strict';
var aFunction = require('../internals/a-function');
var isObject = require('../internals/is-object');
var slice = [].slice;
var factories = {
};
var construct = function(C, argsLength, args) {
    if (!(argsLength in factories)) {
        for(var list = [], i = 0; i < argsLength; i++)list[i] = 'a[' + i + ']';
        // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
        factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
    }
    return factories[argsLength](C, args);
};
// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that/* , ...args */ ) {
    var fn = aFunction(this);
    var partArgs = slice.call(arguments, 1);
    var boundFunction = function bound() {
        var args = partArgs.concat(slice.call(arguments));
        return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
    };
    if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
    return boundFunction;
};

},{"../internals/a-function":"kyHeE","../internals/is-object":"55UvG"}],"8sdnA":[function(require,module,exports) {
'use strict';
var isObject = require('../internals/is-object');
var definePropertyModule = require('../internals/object-define-property');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var wellKnownSymbol = require('../internals/well-known-symbol');
var HAS_INSTANCE = wellKnownSymbol('hasInstance');
var FunctionPrototype = Function.prototype;
// `Function.prototype[@@hasInstance]` method
// https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance
if (!(HAS_INSTANCE in FunctionPrototype)) definePropertyModule.f(FunctionPrototype, HAS_INSTANCE, {
    value: function(O) {
        if (typeof this != 'function' || !isObject(O)) return false;
        if (!isObject(this.prototype)) return O instanceof this;
        // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
        while(O = getPrototypeOf(O))if (this.prototype === O) return true;
        return false;
    }
});

},{"../internals/is-object":"55UvG","../internals/object-define-property":"d7OpP","../internals/object-get-prototype-of":"9zsYa","../internals/well-known-symbol":"8llxS"}],"34pq5":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var defineProperty = require('../internals/object-define-property').f;
var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';
// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function() {
        try {
            return FunctionPrototypeToString.call(this).match(nameRE)[1];
        } catch (error) {
            return '';
        }
    }
});

},{"../internals/descriptors":"b4IwU","../internals/object-define-property":"d7OpP"}],"e5jF6":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({
    global: true
}, {
    globalThis: global
});

},{"../internals/export":"jPesG","../internals/global":"k6ng2"}],"6bQjC":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var fails = require('../internals/fails');
var $stringify = getBuiltIn('JSON', 'stringify');
var re = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;
var fix = function(match, offset, string) {
    var prev = string.charAt(offset - 1);
    var next = string.charAt(offset + 1);
    if (low.test(match) && !hi.test(next) || hi.test(match) && !low.test(prev)) return '\\u' + match.charCodeAt(0).toString(16);
    return match;
};
var FORCED = fails(function() {
    return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify('\uDEAD') !== '"\\udead"';
});
if ($stringify) // `JSON.stringify` method
// https://tc39.es/ecma262/#sec-json.stringify
// https://github.com/tc39/proposal-well-formed-stringify
$({
    target: 'JSON',
    stat: true,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
        var result = $stringify.apply(null, arguments);
        return typeof result == 'string' ? result.replace(re, fix) : result;
    }
});

},{"../internals/export":"jPesG","../internals/get-built-in":"wFpZi","../internals/fails":"9axhl"}],"6uj8P":[function(require,module,exports) {
var global = require('../internals/global');
var setToStringTag = require('../internals/set-to-string-tag');
// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);

},{"../internals/global":"k6ng2","../internals/set-to-string-tag":"353PM"}],"hyjMx":[function(require,module,exports) {
'use strict';
var collection = require('../internals/collection');
var collectionStrong = require('../internals/collection-strong');
// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
module.exports = collection('Map', function(init) {
    return function Map1() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
}, collectionStrong);

},{"../internals/collection":"hmxvt","../internals/collection-strong":"dP3oK"}],"hmxvt":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var isForced = require('../internals/is-forced');
var redefine = require('../internals/redefine');
var InternalMetadataModule = require('../internals/internal-metadata');
var iterate = require('../internals/iterate');
var anInstance = require('../internals/an-instance');
var isObject = require('../internals/is-object');
var fails = require('../internals/fails');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var setToStringTag = require('../internals/set-to-string-tag');
var inheritIfRequired = require('../internals/inherit-if-required');
module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {
    };
    var fixMethod = function(KEY) {
        var nativeMethod = NativePrototype[KEY];
        redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
            nativeMethod.call(this, value === 0 ? 0 : value);
            return this;
        } : KEY == 'delete' ? function(key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
        } : KEY == 'get' ? function get(key) {
            return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
        } : KEY == 'has' ? function has(key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
        } : function set(key, value) {
            nativeMethod.call(this, key === 0 ? 0 : key, value);
            return this;
        });
    };
    var REPLACE = isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
        new NativeConstructor().entries().next();
    })));
    if (REPLACE) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        InternalMetadataModule.REQUIRED = true;
    } else if (isForced(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {
        } : -0, 1) != instance;
        // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = fails(function() {
            instance.has(1);
        });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new -- required for testing
        var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
            new NativeConstructor(iterable);
        });
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && fails(function() {
            // V8 ~ Chromium 42- fails only with 5+ elements
            var $instance = new NativeConstructor();
            var index = 5;
            while(index--)$instance[ADDER](index, index);
            return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
            Constructor = wrapper(function(dummy, iterable) {
                anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
                var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
                if (iterable != undefined) iterate(iterable, that[ADDER], {
                    that: that,
                    AS_ENTRIES: IS_MAP
                });
                return that;
            });
            Constructor.prototype = NativePrototype;
            NativePrototype.constructor = Constructor;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod('delete');
            fixMethod('has');
            IS_MAP && fixMethod('get');
        }
        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
        // weak collections should not contains .clear method
        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }
    exported[CONSTRUCTOR_NAME] = Constructor;
    $({
        global: true,
        forced: Constructor != NativeConstructor
    }, exported);
    setToStringTag(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
};

},{"../internals/export":"jPesG","../internals/global":"k6ng2","../internals/is-forced":"emedY","../internals/redefine":"5ao1i","../internals/internal-metadata":"5LG15","../internals/iterate":"21SEy","../internals/an-instance":"i7zHZ","../internals/is-object":"55UvG","../internals/fails":"9axhl","../internals/check-correctness-of-iteration":"56p7B","../internals/set-to-string-tag":"353PM","../internals/inherit-if-required":"9G3ip"}],"5LG15":[function(require,module,exports) {
var hiddenKeys = require('../internals/hidden-keys');
var isObject = require('../internals/is-object');
var has = require('../internals/has');
var defineProperty = require('../internals/object-define-property').f;
var uid = require('../internals/uid');
var FREEZING = require('../internals/freezing');
var METADATA = uid('meta');
var id = 0;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function() {
    return true;
};
var setMetadata = function(it) {
    defineProperty(it, METADATA, {
        value: {
            objectID: 'O' + ++id,
            weakData: {
            }
        }
    });
};
var fastKey = function(it, create) {
    // return a primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMetadata(it);
    // return object ID
    }
    return it[METADATA].objectID;
};
var getWeakData = function(it, create) {
    if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMetadata(it);
    // return the store of weak collections IDs
    }
    return it[METADATA].weakData;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it) {
    if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
    return it;
};
var meta = module.exports = {
    REQUIRED: false,
    fastKey: fastKey,
    getWeakData: getWeakData,
    onFreeze: onFreeze
};
hiddenKeys[METADATA] = true;

},{"../internals/hidden-keys":"19i1o","../internals/is-object":"55UvG","../internals/has":"234Va","../internals/object-define-property":"d7OpP","../internals/uid":"bqSbl","../internals/freezing":"2AwxS"}],"2AwxS":[function(require,module,exports) {
var fails = require('../internals/fails');
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({
    }));
});

},{"../internals/fails":"9axhl"}],"9G3ip":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var setPrototypeOf = require('../internals/object-set-prototype-of');
// makes subclassing work correct for wrapped built-ins
module.exports = function($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (// it can work only with native `setPrototypeOf`
    setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
    return $this;
};

},{"../internals/is-object":"55UvG","../internals/object-set-prototype-of":"dEqW3"}],"dP3oK":[function(require,module,exports) {
'use strict';
var defineProperty = require('../internals/object-define-property').f;
var create = require('../internals/object-create');
var redefineAll = require('../internals/redefine-all');
var bind = require('../internals/function-bind-context');
var anInstance = require('../internals/an-instance');
var iterate = require('../internals/iterate');
var defineIterator = require('../internals/define-iterator');
var setSpecies = require('../internals/set-species');
var DESCRIPTORS = require('../internals/descriptors');
var fastKey = require('../internals/internal-metadata').fastKey;
var InternalStateModule = require('../internals/internal-state');
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
module.exports = {
    getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                index: create(null),
                first: undefined,
                last: undefined,
                size: 0
            });
            if (!DESCRIPTORS) that.size = 0;
            if (iterable != undefined) iterate(iterable, that[ADDER], {
                that: that,
                AS_ENTRIES: IS_MAP
            });
        });
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define = function(that, key, value) {
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            var previous, index;
            // change existing entry
            if (entry) entry.value = value;
            else {
                state.last = entry = {
                    index: index = fastKey(key, true),
                    key: key,
                    value: value,
                    previous: previous = state.last,
                    next: undefined,
                    removed: false
                };
                if (!state.first) state.first = entry;
                if (previous) previous.next = entry;
                if (DESCRIPTORS) state.size++;
                else that.size++;
                // add to index
                if (index !== 'F') state.index[index] = entry;
            }
            return that;
        };
        var getEntry = function(that, key) {
            var state = getInternalState(that);
            // fast case
            var index = fastKey(key);
            var entry;
            if (index !== 'F') return state.index[index];
            // frozen object case
            for(entry = state.first; entry; entry = entry.next){
                if (entry.key == key) return entry;
            }
        };
        redefineAll(C.prototype, {
            // `{ Map, Set }.prototype.clear()` methods
            // https://tc39.es/ecma262/#sec-map.prototype.clear
            // https://tc39.es/ecma262/#sec-set.prototype.clear
            clear: function clear() {
                var that = this;
                var state = getInternalState(that);
                var data = state.index;
                var entry = state.first;
                while(entry){
                    entry.removed = true;
                    if (entry.previous) entry.previous = entry.previous.next = undefined;
                    delete data[entry.index];
                    entry = entry.next;
                }
                state.first = state.last = undefined;
                if (DESCRIPTORS) state.size = 0;
                else that.size = 0;
            },
            // `{ Map, Set }.prototype.delete(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.delete
            // https://tc39.es/ecma262/#sec-set.prototype.delete
            'delete': function(key) {
                var that = this;
                var state = getInternalState(that);
                var entry = getEntry(that, key);
                if (entry) {
                    var next = entry.next;
                    var prev = entry.previous;
                    delete state.index[entry.index];
                    entry.removed = true;
                    if (prev) prev.next = next;
                    if (next) next.previous = prev;
                    if (state.first == entry) state.first = next;
                    if (state.last == entry) state.last = prev;
                    if (DESCRIPTORS) state.size--;
                    else that.size--;
                }
                return !!entry;
            },
            // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.foreach
            // https://tc39.es/ecma262/#sec-set.prototype.foreach
            forEach: function forEach(callbackfn/* , that = undefined */ ) {
                var state = getInternalState(this);
                var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                var entry;
                while(entry = entry ? entry.next : state.first){
                    boundFunction(entry.value, entry.key, this);
                    // revert to the last existing entry
                    while(entry && entry.removed)entry = entry.previous;
                }
            },
            // `{ Map, Set}.prototype.has(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.has
            // https://tc39.es/ecma262/#sec-set.prototype.has
            has: function has(key) {
                return !!getEntry(this, key);
            }
        });
        redefineAll(C.prototype, IS_MAP ? {
            // `Map.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-map.prototype.get
            get: function get(key) {
                var entry = getEntry(this, key);
                return entry && entry.value;
            },
            // `Map.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-map.prototype.set
            set: function set(key, value) {
                return define(this, key === 0 ? 0 : key, value);
            }
        } : {
            // `Set.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-set.prototype.add
            add: function add(value) {
                return define(this, value = value === 0 ? 0 : value, value);
            }
        });
        if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
            get: function() {
                return getInternalState(this).size;
            }
        });
        return C;
    },
    setStrong: function(C, CONSTRUCTOR_NAME, IS_MAP) {
        var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
        var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
        // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.entries
        // https://tc39.es/ecma262/#sec-map.prototype.keys
        // https://tc39.es/ecma262/#sec-map.prototype.values
        // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
        // https://tc39.es/ecma262/#sec-set.prototype.entries
        // https://tc39.es/ecma262/#sec-set.prototype.keys
        // https://tc39.es/ecma262/#sec-set.prototype.values
        // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
        defineIterator(C, CONSTRUCTOR_NAME, function(iterated, kind) {
            setInternalState(this, {
                type: ITERATOR_NAME,
                target: iterated,
                state: getInternalCollectionState(iterated),
                kind: kind,
                last: undefined
            });
        }, function() {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last;
            // revert to the last existing entry
            while(entry && entry.removed)entry = entry.previous;
            // get next entry
            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                // or finish the iteration
                state.target = undefined;
                return {
                    value: undefined,
                    done: true
                };
            }
            // return step by kind
            if (kind == 'keys') return {
                value: entry.key,
                done: false
            };
            if (kind == 'values') return {
                value: entry.value,
                done: false
            };
            return {
                value: [
                    entry.key,
                    entry.value
                ],
                done: false
            };
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
        // `{ Map, Set }.prototype[@@species]` accessors
        // https://tc39.es/ecma262/#sec-get-map-@@species
        // https://tc39.es/ecma262/#sec-get-set-@@species
        setSpecies(CONSTRUCTOR_NAME);
    }
};

},{"../internals/object-define-property":"d7OpP","../internals/object-create":"2iitg","../internals/redefine-all":"hfrn6","../internals/function-bind-context":"3BONE","../internals/an-instance":"i7zHZ","../internals/iterate":"21SEy","../internals/define-iterator":"2vmKI","../internals/set-species":"d19R4","../internals/descriptors":"b4IwU","../internals/internal-metadata":"5LG15","../internals/internal-state":"6IhmE"}],"iODMJ":[function(require,module,exports) {
var $ = require('../internals/export');
var log1p = require('../internals/math-log1p');
// eslint-disable-next-line es/no-math-acosh -- required for testing
var $acosh = Math.acosh;
var log = Math.log;
var sqrt = Math.sqrt;
var LN2 = Math.LN2;
var FORCED = !$acosh || Math.floor($acosh(Number.MAX_VALUE)) != 710 || $acosh(Infinity) != Infinity;
// `Math.acosh` method
// https://tc39.es/ecma262/#sec-math.acosh
$({
    target: 'Math',
    stat: true,
    forced: FORCED
}, {
    acosh: function acosh(x) {
        return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? log(x) + LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
});

},{"../internals/export":"jPesG","../internals/math-log1p":"i8gu0"}],"i8gu0":[function(require,module,exports) {
var log = Math.log;
// `Math.log1p` method implementation
// https://tc39.es/ecma262/#sec-math.log1p
// eslint-disable-next-line es/no-math-log1p -- safe
module.exports = Math.log1p || function log1p(x) {
    return (x = +x) > -0.00000001 && x < 0.00000001 ? x - x * x / 2 : log(1 + x);
};

},{}],"h34an":[function(require,module,exports) {
var $ = require('../internals/export');
// eslint-disable-next-line es/no-math-asinh -- required for testing
var $asinh = Math.asinh;
var log = Math.log;
var sqrt = Math.sqrt;
function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
}
// `Math.asinh` method
// https://tc39.es/ecma262/#sec-math.asinh
// Tor Browser bug: Math.asinh(0) -> -0
$({
    target: 'Math',
    stat: true,
    forced: !($asinh && 1 / $asinh(0) > 0)
}, {
    asinh: asinh
});

},{"../internals/export":"jPesG"}],"1S2ze":[function(require,module,exports) {
var $ = require('../internals/export');
// eslint-disable-next-line es/no-math-atanh -- required for testing
var $atanh = Math.atanh;
var log = Math.log;
// `Math.atanh` method
// https://tc39.es/ecma262/#sec-math.atanh
// Tor Browser bug: Math.atanh(-0) -> 0
$({
    target: 'Math',
    stat: true,
    forced: !($atanh && 1 / $atanh(-0) < 0)
}, {
    atanh: function atanh(x) {
        return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
    }
});

},{"../internals/export":"jPesG"}],"l8sPq":[function(require,module,exports) {
var $ = require('../internals/export');
var sign = require('../internals/math-sign');
var abs = Math.abs;
var pow = Math.pow;
// `Math.cbrt` method
// https://tc39.es/ecma262/#sec-math.cbrt
$({
    target: 'Math',
    stat: true
}, {
    cbrt: function cbrt(x) {
        return sign(x = +x) * pow(abs(x), 1 / 3);
    }
});

},{"../internals/export":"jPesG","../internals/math-sign":"aGKEf"}],"aGKEf":[function(require,module,exports) {
// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
module.exports = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],"gEAvP":[function(require,module,exports) {
var $ = require('../internals/export');
var floor = Math.floor;
var log = Math.log;
var LOG2E = Math.LOG2E;
// `Math.clz32` method
// https://tc39.es/ecma262/#sec-math.clz32
$({
    target: 'Math',
    stat: true
}, {
    clz32: function clz32(x) {
        return x >>>= 0, 32;
    }
});

},{"../internals/export":"jPesG"}],"dq8pU":[function(require,module,exports) {
var $ = require('../internals/export');
var expm1 = require('../internals/math-expm1');
// eslint-disable-next-line es/no-math-cosh -- required for testing
var $cosh = Math.cosh;
var abs = Math.abs;
var E = Math.E;
// `Math.cosh` method
// https://tc39.es/ecma262/#sec-math.cosh
$({
    target: 'Math',
    stat: true,
    forced: !$cosh || $cosh(710) === Infinity
}, {
    cosh: function cosh(x) {
        var t = expm1(abs(x) - 1) + 1;
        return (t + 1 / (t * E * E)) * (E / 2);
    }
});

},{"../internals/export":"jPesG","../internals/math-expm1":"jy1qk"}],"jy1qk":[function(require,module,exports) {
// eslint-disable-next-line es/no-math-expm1 -- safe
var $expm1 = Math.expm1;
var exp = Math.exp;
// `Math.expm1` method implementation
// https://tc39.es/ecma262/#sec-math.expm1
module.exports = !$expm1 || $expm1(10) > 22025.465794806718 || $expm1(10) < 22025.465794806718 || $expm1(-0.00000000000000002) != -0.00000000000000002 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -0.000001 && x < 0.000001 ? x + x * x / 2 : exp(x) - 1;
} : $expm1;

},{}],"9GGFd":[function(require,module,exports) {
var $ = require('../internals/export');
var expm1 = require('../internals/math-expm1');
// `Math.expm1` method
// https://tc39.es/ecma262/#sec-math.expm1
// eslint-disable-next-line es/no-math-expm1 -- required for testing
$({
    target: 'Math',
    stat: true,
    forced: expm1 != Math.expm1
}, {
    expm1: expm1
});

},{"../internals/export":"jPesG","../internals/math-expm1":"jy1qk"}],"tJscB":[function(require,module,exports) {
var $ = require('../internals/export');
var fround = require('../internals/math-fround');
// `Math.fround` method
// https://tc39.es/ecma262/#sec-math.fround
$({
    target: 'Math',
    stat: true
}, {
    fround: fround
});

},{"../internals/export":"jPesG","../internals/math-fround":"eZnRn"}],"eZnRn":[function(require,module,exports) {
var sign = require('../internals/math-sign');
var abs = Math.abs;
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);
var roundTiesToEven = function(n) {
    return n + 1 / EPSILON - 1 / EPSILON;
};
// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
// eslint-disable-next-line es/no-math-fround -- safe
module.exports = Math.fround || function fround(x) {
    var $abs = abs(x);
    var $sign = sign(x);
    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    // eslint-disable-next-line no-self-compare -- NaN check
    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
};

},{"../internals/math-sign":"aGKEf"}],"BM2Aw":[function(require,module,exports) {
var $ = require('../internals/export');
// eslint-disable-next-line es/no-math-hypot -- required for testing
var $hypot = Math.hypot;
var abs = Math.abs;
var sqrt = Math.sqrt;
// Chrome 77 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=9546
var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity;
// `Math.hypot` method
// https://tc39.es/ecma262/#sec-math.hypot
$({
    target: 'Math',
    stat: true,
    forced: BUGGY
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    hypot: function hypot(value1, value2) {
        var sum = 0;
        var i = 0;
        var aLen = arguments.length;
        var larg = 0;
        var arg, div;
        while(i < aLen){
            arg = abs(arguments[i++]);
            if (larg < arg) {
                div = larg / arg;
                sum = sum * div * div + 1;
                larg = arg;
            } else if (arg > 0) {
                div = arg / larg;
                sum += div * div;
            } else sum += arg;
        }
        return larg === Infinity ? Infinity : larg * sqrt(sum);
    }
});

},{"../internals/export":"jPesG"}],"eaZGU":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-math-imul -- required for testing
var $imul = Math.imul;
var FORCED = fails(function() {
    return $imul(4294967295, 5) != -5 || $imul.length != 2;
});
// `Math.imul` method
// https://tc39.es/ecma262/#sec-math.imul
// some WebKit versions fails with big numbers, some has wrong arity
$({
    target: 'Math',
    stat: true,
    forced: FORCED
}, {
    imul: function imul(x, y) {
        var UINT16 = 65535;
        var xn = +x;
        var yn = +y;
        var xl = UINT16 & xn;
        var yl = UINT16 & yn;
        return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl"}],"hKCr1":[function(require,module,exports) {
var $ = require('../internals/export');
var log = Math.log;
var LOG10E = Math.LOG10E;
// `Math.log10` method
// https://tc39.es/ecma262/#sec-math.log10
$({
    target: 'Math',
    stat: true
}, {
    log10: function log10(x) {
        return log(x) * LOG10E;
    }
});

},{"../internals/export":"jPesG"}],"27wHE":[function(require,module,exports) {
var $ = require('../internals/export');
var log1p = require('../internals/math-log1p');
// `Math.log1p` method
// https://tc39.es/ecma262/#sec-math.log1p
$({
    target: 'Math',
    stat: true
}, {
    log1p: log1p
});

},{"../internals/export":"jPesG","../internals/math-log1p":"i8gu0"}],"jcbgx":[function(require,module,exports) {
var $ = require('../internals/export');
var log = Math.log;
var LN2 = Math.LN2;
// `Math.log2` method
// https://tc39.es/ecma262/#sec-math.log2
$({
    target: 'Math',
    stat: true
}, {
    log2: function log2(x) {
        return log(x) / LN2;
    }
});

},{"../internals/export":"jPesG"}],"hqgkM":[function(require,module,exports) {
var $ = require('../internals/export');
var sign = require('../internals/math-sign');
// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
$({
    target: 'Math',
    stat: true
}, {
    sign: sign
});

},{"../internals/export":"jPesG","../internals/math-sign":"aGKEf"}],"1fNkM":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var expm1 = require('../internals/math-expm1');
var abs = Math.abs;
var exp = Math.exp;
var E = Math.E;
var FORCED = fails(function() {
    // eslint-disable-next-line es/no-math-sinh -- required for testing
    return Math.sinh(-0.00000000000000002) != -0.00000000000000002;
});
// `Math.sinh` method
// https://tc39.es/ecma262/#sec-math.sinh
// V8 near Chromium 38 has a problem with very small numbers
$({
    target: 'Math',
    stat: true,
    forced: FORCED
}, {
    sinh: function sinh(x) {
        return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
    }
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl","../internals/math-expm1":"jy1qk"}],"bjZt0":[function(require,module,exports) {
var $ = require('../internals/export');
var expm1 = require('../internals/math-expm1');
var exp = Math.exp;
// `Math.tanh` method
// https://tc39.es/ecma262/#sec-math.tanh
$({
    target: 'Math',
    stat: true
}, {
    tanh: function tanh(x) {
        var a = expm1(x = +x);
        var b = expm1(-x);
        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    }
});

},{"../internals/export":"jPesG","../internals/math-expm1":"jy1qk"}],"9j7Qc":[function(require,module,exports) {
var setToStringTag = require('../internals/set-to-string-tag');
// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);

},{"../internals/set-to-string-tag":"353PM"}],"6qIs4":[function(require,module,exports) {
var $ = require('../internals/export');
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
$({
    target: 'Math',
    stat: true
}, {
    trunc: function trunc(it) {
        return (it > 0 ? floor : ceil)(it);
    }
});

},{"../internals/export":"jPesG"}],"iPUfO":[function(require,module,exports) {
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var isForced = require('../internals/is-forced');
var redefine = require('../internals/redefine');
var has = require('../internals/has');
var classof = require('../internals/classof-raw');
var inheritIfRequired = require('../internals/inherit-if-required');
var toPrimitive = require('../internals/to-primitive');
var fails = require('../internals/fails');
var create = require('../internals/object-create');
var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var defineProperty = require('../internals/object-define-property').f;
var trim = require('../internals/string-trim').trim;
var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;
// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function(argument) {
    var it = toPrimitive(argument, false);
    var first, third, radix, maxCode, digits, length, index, code;
    if (typeof it == 'string' && it.length > 2) {
        it = trim(it);
        first = it.charCodeAt(0);
        if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
            switch(it.charCodeAt(1)){
                case 66:
                case 98:
                    radix = 2;
                    maxCode = 49;
                    break; // fast equal of /^0b[01]+$/i
                case 79:
                case 111:
                    radix = 8;
                    maxCode = 55;
                    break; // fast equal of /^0o[0-7]+$/i
                default:
                    return +it;
            }
            digits = it.slice(2);
            length = digits.length;
            for(index = 0; index < length; index++){
                code = digits.charCodeAt(index);
                // parseInt parses a string to a first unavailable symbol
                // but ToNumber should return NaN if a string contains unavailable symbols
                if (code < 48 || code > maxCode) return NaN;
            }
            return parseInt(digits, radix);
        }
    }
    return +it;
};
// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
    var NumberWrapper = function Number1(value) {
        var it = arguments.length < 1 ? 0 : value;
        var dummy = this;
        return dummy instanceof NumberWrapper && (BROKEN_CLASSOF ? fails(function() {
            NumberPrototype.valueOf.call(dummy);
        }) : classof(dummy) != NUMBER) ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
    };
    for(var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(','), j = 0, key; keys.length > j; j++)if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    NumberWrapper.prototype = NumberPrototype;
    NumberPrototype.constructor = NumberWrapper;
    redefine(global, NUMBER, NumberWrapper);
}

},{"../internals/descriptors":"b4IwU","../internals/global":"k6ng2","../internals/is-forced":"emedY","../internals/redefine":"5ao1i","../internals/has":"234Va","../internals/classof-raw":"bGuqx","../internals/inherit-if-required":"9G3ip","../internals/to-primitive":"ia6YM","../internals/fails":"9axhl","../internals/object-create":"2iitg","../internals/object-get-own-property-names":"lqOHM","../internals/object-get-own-property-descriptor":"gEzuD","../internals/object-define-property":"d7OpP","../internals/string-trim":"dUybk"}],"dUybk":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');
var whitespaces = require('../internals/whitespaces');
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');
// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function(TYPE) {
    return function($this) {
        var string = String(requireObjectCoercible($this));
        if (TYPE & 1) string = string.replace(ltrim, '');
        if (TYPE & 2) string = string.replace(rtrim, '');
        return string;
    };
};
module.exports = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
};

},{"../internals/require-object-coercible":"g8fXQ","../internals/whitespaces":"2Wzut"}],"2Wzut":[function(require,module,exports) {
// a string of all valid unicode whitespaces
module.exports = "\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";

},{}],"duCbR":[function(require,module,exports) {
var $ = require('../internals/export');
// `Number.EPSILON` constant
// https://tc39.es/ecma262/#sec-number.epsilon
$({
    target: 'Number',
    stat: true
}, {
    EPSILON: Math.pow(2, -52)
});

},{"../internals/export":"jPesG"}],"33PsZ":[function(require,module,exports) {
var $ = require('../internals/export');
var numberIsFinite = require('../internals/number-is-finite');
// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
$({
    target: 'Number',
    stat: true
}, {
    isFinite: numberIsFinite
});

},{"../internals/export":"jPesG","../internals/number-is-finite":"UGmT1"}],"UGmT1":[function(require,module,exports) {
var global = require('../internals/global');
var globalIsFinite = global.isFinite;
// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
// eslint-disable-next-line es/no-number-isfinite -- safe
module.exports = Number.isFinite || function isFinite(it) {
    return typeof it == 'number' && globalIsFinite(it);
};

},{"../internals/global":"k6ng2"}],"LUGf9":[function(require,module,exports) {
var $ = require('../internals/export');
var isInteger = require('../internals/is-integer');
// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$({
    target: 'Number',
    stat: true
}, {
    isInteger: isInteger
});

},{"../internals/export":"jPesG","../internals/is-integer":"7V7L5"}],"7V7L5":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var floor = Math.floor;
// `Number.isInteger` method implementation
// https://tc39.es/ecma262/#sec-number.isinteger
module.exports = function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"../internals/is-object":"55UvG"}],"9nF3Y":[function(require,module,exports) {
var $ = require('../internals/export');
// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
$({
    target: 'Number',
    stat: true
}, {
    isNaN: function isNaN(number) {
        // eslint-disable-next-line no-self-compare -- NaN check
        return number != number;
    }
});

},{"../internals/export":"jPesG"}],"4PaHq":[function(require,module,exports) {
var $ = require('../internals/export');
var isInteger = require('../internals/is-integer');
var abs = Math.abs;
// `Number.isSafeInteger` method
// https://tc39.es/ecma262/#sec-number.issafeinteger
$({
    target: 'Number',
    stat: true
}, {
    isSafeInteger: function isSafeInteger(number) {
        return isInteger(number) && abs(number) <= 9007199254740991;
    }
});

},{"../internals/export":"jPesG","../internals/is-integer":"7V7L5"}],"itDNX":[function(require,module,exports) {
var $ = require('../internals/export');
// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.max_safe_integer
$({
    target: 'Number',
    stat: true
}, {
    MAX_SAFE_INTEGER: 9007199254740991
});

},{"../internals/export":"jPesG"}],"6fPVx":[function(require,module,exports) {
var $ = require('../internals/export');
// `Number.MIN_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.min_safe_integer
$({
    target: 'Number',
    stat: true
}, {
    MIN_SAFE_INTEGER: -9007199254740991
});

},{"../internals/export":"jPesG"}],"hYjsn":[function(require,module,exports) {
var $ = require('../internals/export');
var parseFloat = require('../internals/number-parse-float');
// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es/no-number-parsefloat -- required for testing
$({
    target: 'Number',
    stat: true,
    forced: Number.parseFloat != parseFloat
}, {
    parseFloat: parseFloat
});

},{"../internals/export":"jPesG","../internals/number-parse-float":"319ZX"}],"319ZX":[function(require,module,exports) {
var global = require('../internals/global');
var trim = require('../internals/string-trim').trim;
var whitespaces = require('../internals/whitespaces');
var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;
// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
    var trimmedString = trim(String(string));
    var result = $parseFloat(trimmedString);
    return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"../internals/global":"k6ng2","../internals/string-trim":"dUybk","../internals/whitespaces":"2Wzut"}],"7bH6x":[function(require,module,exports) {
var $ = require('../internals/export');
var parseInt = require('../internals/number-parse-int');
// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
$({
    target: 'Number',
    stat: true,
    forced: Number.parseInt != parseInt
}, {
    parseInt: parseInt
});

},{"../internals/export":"jPesG","../internals/number-parse-int":"2p2a2"}],"2p2a2":[function(require,module,exports) {
var global = require('../internals/global');
var trim = require('../internals/string-trim').trim;
var whitespaces = require('../internals/whitespaces');
var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;
// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
    var S = trim(String(string));
    return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
} : $parseInt;

},{"../internals/global":"k6ng2","../internals/string-trim":"dUybk","../internals/whitespaces":"2Wzut"}],"8lOoS":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var toInteger = require('../internals/to-integer');
var thisNumberValue = require('../internals/this-number-value');
var repeat = require('../internals/string-repeat');
var fails = require('../internals/fails');
var nativeToFixed = 1..toFixed;
var floor = Math.floor;
var pow = function(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x) {
    var n = 0;
    var x2 = x;
    while(x2 >= 4096){
        n += 12;
        x2 /= 4096;
    }
    while(x2 >= 2){
        n += 1;
        x2 /= 2;
    }
    return n;
};
var multiply = function(data, n, c) {
    var index = -1;
    var c2 = c;
    while((++index) < 6){
        c2 += n * data[index];
        data[index] = c2 % 10000000;
        c2 = floor(c2 / 10000000);
    }
};
var divide = function(data, n) {
    var index = 6;
    var c = 0;
    while((--index) >= 0){
        c += data[index];
        data[index] = floor(c / n);
        c = c % n * 10000000;
    }
};
var dataToString = function(data) {
    var index = 6;
    var s = '';
    while((--index) >= 0)if (s !== '' || index === 0 || data[index] !== 0) {
        var t = String(data[index]);
        s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
    }
    return s;
};
var FORCED = nativeToFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000000..toFixed(0) !== '1000000000000000128') || !fails(function() {
    // V8 ~ Android 4.3-
    nativeToFixed.call({
    });
});
// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({
    target: 'Number',
    proto: true,
    forced: FORCED
}, {
    toFixed: function toFixed(fractionDigits) {
        var number = thisNumberValue(this);
        var fractDigits = toInteger(fractionDigits);
        var data = [
            0,
            0,
            0,
            0,
            0,
            0
        ];
        var sign = '';
        var result = '0';
        var e, z, j, k;
        if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
        // eslint-disable-next-line no-self-compare -- NaN check
        if (number != number) return 'NaN';
        if (number <= -1000000000000000000000 || number >= 1000000000000000000000) return String(number);
        if (number < 0) {
            sign = '-';
            number = -number;
        }
        if (number > 0.000000000000000000001) {
            e = log(number * pow(2, 69, 1)) - 69;
            z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
            z *= 4503599627370496;
            e = 52 - e;
            if (e > 0) {
                multiply(data, 0, z);
                j = fractDigits;
                while(j >= 7){
                    multiply(data, 10000000, 0);
                    j -= 7;
                }
                multiply(data, pow(10, j, 1), 0);
                j = e - 1;
                while(j >= 23){
                    divide(data, 8388608);
                    j -= 23;
                }
                divide(data, 1 << j);
                multiply(data, 1, 1);
                divide(data, 2);
                result = dataToString(data);
            } else {
                multiply(data, 0, z);
                multiply(data, 1 << -e, 0);
                result = dataToString(data) + repeat.call('0', fractDigits);
            }
        }
        if (fractDigits > 0) {
            k = result.length;
            result = sign + (k <= fractDigits ? '0.' + repeat.call('0', fractDigits - k) + result : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
        } else result = sign + result;
        return result;
    }
});

},{"../internals/export":"jPesG","../internals/to-integer":"8UwJq","../internals/this-number-value":"5iQN0","../internals/string-repeat":"iW2qf","../internals/fails":"9axhl"}],"5iQN0":[function(require,module,exports) {
var classof = require('../internals/classof-raw');
// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function(value) {
    if (typeof value != 'number' && classof(value) != 'Number') throw TypeError('Incorrect invocation');
    return +value;
};

},{"../internals/classof-raw":"bGuqx"}],"7Qogc":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var thisNumberValue = require('../internals/this-number-value');
var nativeToPrecision = 1..toPrecision;
var FORCED = fails(function() {
    // IE7-
    return nativeToPrecision.call(1, undefined) !== '1';
}) || !fails(function() {
    // V8 ~ Android 4.3-
    nativeToPrecision.call({
    });
});
// `Number.prototype.toPrecision` method
// https://tc39.es/ecma262/#sec-number.prototype.toprecision
$({
    target: 'Number',
    proto: true,
    forced: FORCED
}, {
    toPrecision: function toPrecision(precision) {
        return precision === undefined ? nativeToPrecision.call(thisNumberValue(this)) : nativeToPrecision.call(thisNumberValue(this), precision);
    }
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl","../internals/this-number-value":"5iQN0"}],"jgQzx":[function(require,module,exports) {
var $ = require('../internals/export');
var assign = require('../internals/object-assign');
// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({
    target: 'Object',
    stat: true,
    forced: Object.assign !== assign
}, {
    assign: assign
});

},{"../internals/export":"jPesG","../internals/object-assign":"bvMGe"}],"bvMGe":[function(require,module,exports) {
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var objectKeys = require('../internals/object-keys');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');
// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function() {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS && $assign({
        b: 1
    }, $assign(defineProperty({
    }, 'a', {
        enumerable: true,
        get: function() {
            defineProperty(this, 'b', {
                value: 3,
                enumerable: false
            });
        }
    }), {
        b: 2
    })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {
    };
    var B = {
    };
    // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function(chr) {
        B[chr] = chr;
    });
    return $assign({
    }, A)[symbol] != 7 || objectKeys($assign({
    }, B)).join('') != alphabet;
}) ? function assign(target, source) {
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while(argumentsLength > index){
        var S = IndexedObject(arguments[index++]);
        var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while(length > j){
            key = keys[j++];
            if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
        }
    }
    return T;
} : $assign;

},{"../internals/descriptors":"b4IwU","../internals/fails":"9axhl","../internals/object-keys":"bSloa","../internals/object-get-own-property-symbols":"eKo79","../internals/object-property-is-enumerable":"hE32B","../internals/to-object":"9Eaxp","../internals/indexed-object":"ev31F"}],"cU0jK":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var create = require('../internals/object-create');
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS
}, {
    create: create
});

},{"../internals/export":"jPesG","../internals/descriptors":"b4IwU","../internals/object-create":"2iitg"}],"36FG8":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var FORCED = require('../internals/object-prototype-accessors-forced');
var toObject = require('../internals/to-object');
var aFunction = require('../internals/a-function');
var definePropertyModule = require('../internals/object-define-property');
// `Object.prototype.__defineGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__
if (DESCRIPTORS) $({
    target: 'Object',
    proto: true,
    forced: FORCED
}, {
    __defineGetter__: function __defineGetter__(P, getter) {
        definePropertyModule.f(toObject(this), P, {
            get: aFunction(getter),
            enumerable: true,
            configurable: true
        });
    }
});

},{"../internals/export":"jPesG","../internals/descriptors":"b4IwU","../internals/object-prototype-accessors-forced":"cFTG4","../internals/to-object":"9Eaxp","../internals/a-function":"kyHeE","../internals/object-define-property":"d7OpP"}],"cFTG4":[function(require,module,exports) {
'use strict';
var IS_PURE = require('../internals/is-pure');
var global = require('../internals/global');
var fails = require('../internals/fails');
var WEBKIT = require('../internals/engine-webkit-version');
// Forced replacement object prototype accessors methods
module.exports = IS_PURE || !fails(function() {
    // This feature detection crashes old WebKit
    // https://github.com/zloirock/core-js/issues/232
    if (WEBKIT && WEBKIT < 535) return;
    var key = Math.random();
    // In FF throws only define methods
    // eslint-disable-next-line no-undef, no-useless-call -- required for testing
    __defineSetter__.call(null, key, function() {
    });
    delete global[key];
});

},{"../internals/is-pure":"hQb5L","../internals/global":"k6ng2","../internals/fails":"9axhl","../internals/engine-webkit-version":"8jnCR"}],"hwIVw":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var defineProperties = require('../internals/object-define-properties');
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
$({
    target: 'Object',
    stat: true,
    forced: !DESCRIPTORS,
    sham: !DESCRIPTORS
}, {
    defineProperties: defineProperties
});

},{"../internals/export":"jPesG","../internals/descriptors":"b4IwU","../internals/object-define-properties":"jwDEL"}],"jItMy":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var objectDefinePropertyModile = require('../internals/object-define-property');
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({
    target: 'Object',
    stat: true,
    forced: !DESCRIPTORS,
    sham: !DESCRIPTORS
}, {
    defineProperty: objectDefinePropertyModile.f
});

},{"../internals/export":"jPesG","../internals/descriptors":"b4IwU","../internals/object-define-property":"d7OpP"}],"7gXxW":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var FORCED = require('../internals/object-prototype-accessors-forced');
var toObject = require('../internals/to-object');
var aFunction = require('../internals/a-function');
var definePropertyModule = require('../internals/object-define-property');
// `Object.prototype.__defineSetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__
if (DESCRIPTORS) $({
    target: 'Object',
    proto: true,
    forced: FORCED
}, {
    __defineSetter__: function __defineSetter__(P, setter) {
        definePropertyModule.f(toObject(this), P, {
            set: aFunction(setter),
            enumerable: true,
            configurable: true
        });
    }
});

},{"../internals/export":"jPesG","../internals/descriptors":"b4IwU","../internals/object-prototype-accessors-forced":"cFTG4","../internals/to-object":"9Eaxp","../internals/a-function":"kyHeE","../internals/object-define-property":"d7OpP"}],"i3ESz":[function(require,module,exports) {
var $ = require('../internals/export');
var $entries = require('../internals/object-to-array').entries;
// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({
    target: 'Object',
    stat: true
}, {
    entries: function entries(O) {
        return $entries(O);
    }
});

},{"../internals/export":"jPesG","../internals/object-to-array":"gwnLe"}],"gwnLe":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var objectKeys = require('../internals/object-keys');
var toIndexedObject = require('../internals/to-indexed-object');
var propertyIsEnumerable = require('../internals/object-property-is-enumerable').f;
// `Object.{ entries, values }` methods implementation
var createMethod = function(TO_ENTRIES) {
    return function(it) {
        var O = toIndexedObject(it);
        var keys = objectKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while(length > i){
            key = keys[i++];
            if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) result.push(TO_ENTRIES ? [
                key,
                O[key]
            ] : O[key]);
        }
        return result;
    };
};
module.exports = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod(false)
};

},{"../internals/descriptors":"b4IwU","../internals/object-keys":"bSloa","../internals/to-indexed-object":"1LFTi","../internals/object-property-is-enumerable":"hE32B"}],"clpzw":[function(require,module,exports) {
var $ = require('../internals/export');
var FREEZING = require('../internals/freezing');
var fails = require('../internals/fails');
var isObject = require('../internals/is-object');
var onFreeze = require('../internals/internal-metadata').onFreeze;
// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function() {
    $freeze(1);
});
// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES,
    sham: !FREEZING
}, {
    freeze: function freeze(it) {
        return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
    }
});

},{"../internals/export":"jPesG","../internals/freezing":"2AwxS","../internals/fails":"9axhl","../internals/is-object":"55UvG","../internals/internal-metadata":"5LG15"}],"fp6bw":[function(require,module,exports) {
var $ = require('../internals/export');
var iterate = require('../internals/iterate');
var createProperty = require('../internals/create-property');
// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$({
    target: 'Object',
    stat: true
}, {
    fromEntries: function fromEntries(iterable) {
        var obj = {
        };
        iterate(iterable, function(k, v) {
            createProperty(obj, k, v);
        }, {
            AS_ENTRIES: true
        });
        return obj;
    }
});

},{"../internals/export":"jPesG","../internals/iterate":"21SEy","../internals/create-property":"9RCVX"}],"fnKbu":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toIndexedObject = require('../internals/to-indexed-object');
var nativeGetOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var DESCRIPTORS = require('../internals/descriptors');
var FAILS_ON_PRIMITIVES = fails(function() {
    nativeGetOwnPropertyDescriptor(1);
});
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({
    target: 'Object',
    stat: true,
    forced: FORCED,
    sham: !DESCRIPTORS
}, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
        return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
    }
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl","../internals/to-indexed-object":"1LFTi","../internals/object-get-own-property-descriptor":"gEzuD","../internals/descriptors":"b4IwU"}],"gjxAc":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var ownKeys = require('../internals/own-keys');
var toIndexedObject = require('../internals/to-indexed-object');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var createProperty = require('../internals/create-property');
// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS
}, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
        var O = toIndexedObject(object);
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        var keys = ownKeys(O);
        var result = {
        };
        var index = 0;
        var key, descriptor;
        while(keys.length > index){
            descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
            if (descriptor !== undefined) createProperty(result, key, descriptor);
        }
        return result;
    }
});

},{"../internals/export":"jPesG","../internals/descriptors":"b4IwU","../internals/own-keys":"gJlsF","../internals/to-indexed-object":"1LFTi","../internals/object-get-own-property-descriptor":"gEzuD","../internals/create-property":"9RCVX"}],"cfjdl":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var getOwnPropertyNames = require('../internals/object-get-own-property-names-external').f;
// eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
var FAILS_ON_PRIMITIVES = fails(function() {
    return !Object.getOwnPropertyNames(1);
});
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
}, {
    getOwnPropertyNames: getOwnPropertyNames
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl","../internals/object-get-own-property-names-external":"1R89x"}],"dd26p":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toObject = require('../internals/to-object');
var nativeGetPrototypeOf = require('../internals/object-get-prototype-of');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
var FAILS_ON_PRIMITIVES = fails(function() {
    nativeGetPrototypeOf(1);
});
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES,
    sham: !CORRECT_PROTOTYPE_GETTER
}, {
    getPrototypeOf: function getPrototypeOf(it) {
        return nativeGetPrototypeOf(toObject(it));
    }
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl","../internals/to-object":"9Eaxp","../internals/object-get-prototype-of":"9zsYa","../internals/correct-prototype-getter":"alHZE"}],"uQtQo":[function(require,module,exports) {
var $ = require('../internals/export');
var is = require('../internals/same-value');
// `Object.is` method
// https://tc39.es/ecma262/#sec-object.is
$({
    target: 'Object',
    stat: true
}, {
    is: is
});

},{"../internals/export":"jPesG","../internals/same-value":"hju2d"}],"hju2d":[function(require,module,exports) {
// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],"46MhG":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isObject = require('../internals/is-object');
// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function() {
    $isExtensible(1);
});
// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
}, {
    isExtensible: function isExtensible(it) {
        return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    }
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl","../internals/is-object":"55UvG"}],"hmFhI":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isObject = require('../internals/is-object');
// eslint-disable-next-line es/no-object-isfrozen -- safe
var $isFrozen = Object.isFrozen;
var FAILS_ON_PRIMITIVES = fails(function() {
    $isFrozen(1);
});
// `Object.isFrozen` method
// https://tc39.es/ecma262/#sec-object.isfrozen
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
}, {
    isFrozen: function isFrozen(it) {
        return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    }
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl","../internals/is-object":"55UvG"}],"7lAK1":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isObject = require('../internals/is-object');
// eslint-disable-next-line es/no-object-issealed -- safe
var $isSealed = Object.isSealed;
var FAILS_ON_PRIMITIVES = fails(function() {
    $isSealed(1);
});
// `Object.isSealed` method
// https://tc39.es/ecma262/#sec-object.issealed
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
}, {
    isSealed: function isSealed(it) {
        return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    }
});

},{"../internals/export":"jPesG","../internals/fails":"9axhl","../internals/is-object":"55UvG"}],"jfiKy":[function(require,module,exports) {
var $ = require('../internals/export');
var toObject = require('../internals/to-object');
var nativeKeys = require('../internals/object-keys');
var fails = require('../internals/fails');
var FAILS_ON_PRIMITIVES = fails(function() {
    nativeKeys(1);
});
// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
}, {
    keys: function keys(it) {
        return nativeKeys(toObject(it));
    }
});

},{"../internals/export":"jPesG","../internals/to-object":"9Eaxp","../internals/object-keys":"bSloa","../internals/fails":"9axhl"}],"dGBBB":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var FORCED = require('../internals/object-prototype-accessors-forced');
var toObject = require('../internals/to-object');
var toPrimitive = require('../internals/to-primitive');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
// `Object.prototype.__lookupGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__
if (DESCRIPTORS) $({
    target: 'Object',
    proto: true,
    forced: FORCED
}, {
    __lookupGetter__: function __lookupGetter__(P) {
        var O = toObject(this);
        var key = toPrimitive(P, true);
        var desc;
        do {
            if (desc = getOwnPropertyDescriptor(O, key)) return desc.get;
        }while (O = getPrototypeOf(O))
    }
});

},{"../internals/export":"jPesG","../internals/descriptors":"b4IwU","../internals/object-prototype-accessors-forced":"cFTG4","../internals/to-object":"9Eaxp","../internals/to-primitive":"ia6YM","../internals/object-get-prototype-of":"9zsYa","../internals/object-get-own-property-descriptor":"gEzuD"}],"92vo2":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var FORCED = require('../internals/object-prototype-accessors-forced');
var toObject = require('../internals/to-object');
var toPrimitive = require('../internals/to-primitive');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
// `Object.prototype.__lookupSetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__
if (DESCRIPTORS) $({
    target: 'Object',
    proto: true,
    forced: FORCED
}, {
    __lookupSetter__: function __lookupSetter__(P) {
        var O = toObject(this);
        var key = toPrimitive(P, true);
        var desc;
        do {
            if (desc = getOwnPropertyDescriptor(O, key)) return desc.set;
        }while (O = getPrototypeOf(O))
    }
});

},{"../internals/export":"jPesG","../internals/descriptors":"b4IwU","../internals/object-prototype-accessors-forced":"cFTG4","../internals/to-object":"9Eaxp","../internals/to-primitive":"ia6YM","../internals/object-get-prototype-of":"9zsYa","../internals/object-get-own-property-descriptor":"gEzuD"}],"16arL":[function(require,module,exports) {
var $ = require('../internals/export');
var isObject = require('../internals/is-object');
var onFreeze = require('../internals/internal-metadata').onFreeze;
var FREEZING = require('../internals/freezing');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-object-preventextensions -- safe
var $preventExtensions = Object.preventExtensions;
var FAILS_ON_PRIMITIVES = fails(function() {
    $preventExtensions(1);
});
// `Object.preventExtensions` method
// https://tc39.es/ecma262/#sec-object.preventextensions
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES,
    sham: !FREEZING
}, {
    preventExtensions: function preventExtensions(it) {
        return $preventExtensions && isObject(it) ? $preventExtensions(onFreeze(it)) : it;
    }
});

},{"../internals/export":"jPesG","../internals/is-object":"55UvG","../internals/internal-metadata":"5LG15","../internals/freezing":"2AwxS","../internals/fails":"9axhl"}],"kwO4u":[function(require,module,exports) {
var $ = require('../internals/export');
var isObject = require('../internals/is-object');
var onFreeze = require('../internals/internal-metadata').onFreeze;
var FREEZING = require('../internals/freezing');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-object-seal -- safe
var $seal = Object.seal;
var FAILS_ON_PRIMITIVES = fails(function() {
    $seal(1);
});
// `Object.seal` method
// https://tc39.es/ecma262/#sec-object.seal
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES,
    sham: !FREEZING
}, {
    seal: function seal(it) {
        return $seal && isObject(it) ? $seal(onFreeze(it)) : it;
    }
});

},{"../internals/export":"jPesG","../internals/is-object":"55UvG","../internals/internal-metadata":"5LG15","../internals/freezing":"2AwxS","../internals/fails":"9axhl"}],"7lApr":[function(require,module,exports) {
var $ = require('../internals/export');
var setPrototypeOf = require('../internals/object-set-prototype-of');
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({
    target: 'Object',
    stat: true
}, {
    setPrototypeOf: setPrototypeOf
});

},{"../internals/export":"jPesG","../internals/object-set-prototype-of":"dEqW3"}],"5MENF":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var redefine = require('../internals/redefine');
var toString = require('../internals/object-to-string');
// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) redefine(Object.prototype, 'toString', toString, {
    unsafe: true
});

},{"../internals/to-string-tag-support":"kzONV","../internals/redefine":"5ao1i","../internals/object-to-string":"jFc1u"}],"jFc1u":[function(require,module,exports) {
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classof = require('../internals/classof');
// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? ({
}).toString : function toString() {
    return '[object ' + classof(this) + ']';
};

},{"../internals/to-string-tag-support":"kzONV","../internals/classof":"fGqVo"}],"7zoud":[function(require,module,exports) {
var $ = require('../internals/export');
var $values = require('../internals/object-to-array').values;
// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({
    target: 'Object',
    stat: true
}, {
    values: function values(O) {
        return $values(O);
    }
});

},{"../internals/export":"jPesG","../internals/object-to-array":"gwnLe"}],"jK54s":[function(require,module,exports) {
var $ = require('../internals/export');
var parseFloatImplementation = require('../internals/number-parse-float');
// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({
    global: true,
    forced: parseFloat != parseFloatImplementation
}, {
    parseFloat: parseFloatImplementation
});

},{"../internals/export":"jPesG","../internals/number-parse-float":"319ZX"}],"j85zR":[function(require,module,exports) {
var $ = require('../internals/export');
var parseIntImplementation = require('../internals/number-parse-int');
// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({
    global: true,
    forced: parseInt != parseIntImplementation
}, {
    parseInt: parseIntImplementation
});

},{"../internals/export":"jPesG","../internals/number-parse-int":"2p2a2"}],"2Wc9o":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var global = require('../internals/global');
var getBuiltIn = require('../internals/get-built-in');
var NativePromise = require('../internals/native-promise-constructor');
var redefine = require('../internals/redefine');
var redefineAll = require('../internals/redefine-all');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var setSpecies = require('../internals/set-species');
var isObject = require('../internals/is-object');
var aFunction = require('../internals/a-function');
var anInstance = require('../internals/an-instance');
var inspectSource = require('../internals/inspect-source');
var iterate = require('../internals/iterate');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var speciesConstructor = require('../internals/species-constructor');
var task = require('../internals/task').set;
var microtask = require('../internals/microtask');
var promiseResolve = require('../internals/promise-resolve');
var hostReportErrors = require('../internals/host-report-errors');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var InternalStateModule = require('../internals/internal-state');
var isForced = require('../internals/is-forced');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_BROWSER = require('../internals/engine-is-browser');
var IS_NODE = require('../internals/engine-is-node');
var V8_VERSION = require('../internals/engine-v8-version');
var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromiseConstructorPrototype = NativePromisePrototype;
var TypeError1 = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
var FORCED = isForced(PROMISE, function() {
    var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    // We need Promise#finally in the pure version for preventing prototype pollution
    if (IS_PURE && !PromiseConstructorPrototype['finally']) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
    // Detect correctness of subclassing with @@species support
    var promise = new PromiseConstructor(function(resolve) {
        resolve(1);
    });
    var FakePromise = function(exec) {
        exec(function() {
        }, function() {
        });
    };
    var constructor = promise.constructor = {
    };
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function() {
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});
var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function(iterable) {
    PromiseConstructor.all(iterable)['catch'](function() {
    });
});
// helpers
var isThenable = function(it) {
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask(function() {
        var value = state.value;
        var ok = state.state == FULFILLED;
        var index = 0;
        // variable length - can't use forEach
        while(chain.length > index){
            var reaction = chain[index++];
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
                if (handler) {
                    if (!ok) {
                        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                        state.rejection = HANDLED;
                    }
                    if (handler === true) result = value;
                    else {
                        if (domain) domain.enter();
                        result = handler(value); // can throw
                        if (domain) {
                            domain.exit();
                            exited = true;
                        }
                    }
                    if (result === reaction.promise) reject(TypeError1('Promise-chain cycle'));
                    else if (then = isThenable(result)) then.call(result, resolve, reject);
                    else resolve(result);
                } else reject(value);
            } catch (error) {
                if (domain && !exited) domain.exit();
                reject(error);
            }
        }
        state.reactions = [];
        state.notified = false;
        if (isReject && !state.rejection) onUnhandled(state);
    });
};
var dispatchEvent = function(name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
        event = document.createEvent('Event');
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        global.dispatchEvent(event);
    } else event = {
        promise: promise,
        reason: reason
    };
    if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};
var onUnhandled = function(state) {
    task.call(global, function() {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
            result = perform(function() {
                if (IS_NODE) process.emit('unhandledRejection', value, promise);
                else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
        }
    });
};
var isUnhandled = function(state) {
    return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function(state) {
    task.call(global, function() {
        var promise = state.facade;
        if (IS_NODE) process.emit('rejectionHandled', promise);
        else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
};
var bind = function(fn, state, unwrap) {
    return function(value) {
        fn(state, value, unwrap);
    };
};
var internalReject = function(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
};
var internalResolve = function(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
        if (state.facade === value) throw TypeError1("Promise can't be resolved itself");
        var then = isThenable(value);
        if (then) microtask(function() {
            var wrapper = {
                done: false
            };
            try {
                then.call(value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
            } catch (error) {
                internalReject(wrapper, error, state);
            }
        });
        else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
        }
    } catch (error) {
        internalReject({
            done: false
        }, error, state);
    }
};
// constructor polyfill
if (FORCED) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise1(executor) {
        anInstance(this, PromiseConstructor, PROMISE);
        aFunction(executor);
        Internal.call(this);
        var state = getInternalState(this);
        try {
            executor(bind(internalResolve, state), bind(internalReject, state));
        } catch (error) {
            internalReject(state, error);
        }
    };
    PromiseConstructorPrototype = PromiseConstructor.prototype;
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise2(executor) {
        setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: [],
            rejection: false,
            state: PENDING,
            value: undefined
        });
    };
    Internal.prototype = redefineAll(PromiseConstructorPrototype, {
        // `Promise.prototype.then` method
        // https://tc39.es/ecma262/#sec-promise.prototype.then
        then: function then(onFulfilled, onRejected) {
            var state = getInternalPromiseState(this);
            var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected == 'function' && onRejected;
            reaction.domain = IS_NODE ? process.domain : undefined;
            state.parent = true;
            state.reactions.push(reaction);
            if (state.state != PENDING) notify(state, false);
            return reaction.promise;
        },
        // `Promise.prototype.catch` method
        // https://tc39.es/ecma262/#sec-promise.prototype.catch
        'catch': function(onRejected) {
            return this.then(undefined, onRejected);
        }
    });
    OwnPromiseCapability = function() {
        var promise = new Internal();
        var state = getInternalState(promise);
        this.promise = promise;
        this.resolve = bind(internalResolve, state);
        this.reject = bind(internalReject, state);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
    if (!IS_PURE && typeof NativePromise == 'function' && NativePromisePrototype !== Object.prototype) {
        nativeThen = NativePromisePrototype.then;
        if (!SUBCLASSING) {
            // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
            redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
                var that = this;
                return new PromiseConstructor(function(resolve, reject) {
                    nativeThen.call(that, resolve, reject);
                }).then(onFulfilled, onRejected);
            // https://github.com/zloirock/core-js/issues/640
            }, {
                unsafe: true
            });
            // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
            redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], {
                unsafe: true
            });
        }
        // make `.constructor === Promise` work for native promise-based APIs
        try {
            delete NativePromisePrototype.constructor;
        } catch (error) {
        }
        // make `instanceof Promise` work for native promise-based APIs
        if (setPrototypeOf) setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
    }
}
$({
    global: true,
    wrap: true,
    forced: FORCED
}, {
    Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);
PromiseWrapper = getBuiltIn(PROMISE);
// statics
$({
    target: PROMISE,
    stat: true,
    forced: FORCED
}, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
        var capability = newPromiseCapability(this);
        capability.reject.call(undefined, r);
        return capability.promise;
    }
});
$({
    target: PROMISE,
    stat: true,
    forced: IS_PURE || FORCED
}, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
        return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
    }
});
$({
    target: PROMISE,
    stat: true,
    forced: INCORRECT_ITERATION
}, {
    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var $promiseResolve = aFunction(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyCalled = false;
                values.push(undefined);
                remaining++;
                $promiseResolve.call(C, promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = value;
                    (--remaining) || resolve(values);
                }, reject);
            });
            (--remaining) || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.es/ecma262/#sec-promise.race
    race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = perform(function() {
            var $promiseResolve = aFunction(C.resolve);
            iterate(iterable, function(promise) {
                $promiseResolve.call(C, promise).then(capability.resolve, reject);
            });
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"../internals/export":"jPesG","../internals/is-pure":"hQb5L","../internals/global":"k6ng2","../internals/get-built-in":"wFpZi","../internals/native-promise-constructor":"vwdyA","../internals/redefine":"5ao1i","../internals/redefine-all":"hfrn6","../internals/object-set-prototype-of":"dEqW3","../internals/set-to-string-tag":"353PM","../internals/set-species":"d19R4","../internals/is-object":"55UvG","../internals/a-function":"kyHeE","../internals/an-instance":"i7zHZ","../internals/inspect-source":"hszWE","../internals/iterate":"21SEy","../internals/check-correctness-of-iteration":"56p7B","../internals/species-constructor":"aTcmi","../internals/task":"2Bu4m","../internals/microtask":"3rBDf","../internals/promise-resolve":"6IrPy","../internals/host-report-errors":"crKRn","../internals/new-promise-capability":"boo1T","../internals/perform":"9OaUQ","../internals/internal-state":"6IhmE","../internals/is-forced":"emedY","../internals/well-known-symbol":"8llxS","../internals/engine-is-browser":"bbpuX","../internals/engine-is-node":"aXzPf","../internals/engine-v8-version":"kH759"}],"vwdyA":[function(require,module,exports) {
var global = require('../internals/global');
module.exports = global.Promise;

},{"../internals/global":"k6ng2"}],"2Bu4m":[function(require,module,exports) {
var global = require('../internals/global');
var fails = require('../internals/fails');
var bind = require('../internals/function-bind-context');
var html = require('../internals/html');
var createElement = require('../internals/document-create-element');
var IS_IOS = require('../internals/engine-is-ios');
var IS_NODE = require('../internals/engine-is-node');
var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel1 = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {
};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function(id) {
    // eslint-disable-next-line no-prototype-builtins -- safe
    if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var listener = function(event) {
    run(event.data);
};
var post = function(id) {
    // old engines have not location.origin
    global.postMessage(id + '', location.protocol + '//' + location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(fn) {
        var args = [];
        var i = 1;
        while(arguments.length > i)args.push(arguments[i++]);
        queue[++counter] = function() {
            // eslint-disable-next-line no-new-func -- spec requirement
            (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel1 && !IS_IOS) {
        channel = new MessageChannel1();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && location && location.protocol !== 'file:' && !fails(post)) {
        defer = post;
        global.addEventListener('message', listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) defer = function(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"../internals/global":"k6ng2","../internals/fails":"9axhl","../internals/function-bind-context":"3BONE","../internals/html":"fPRDr","../internals/document-create-element":"5Cb6U","../internals/engine-is-ios":"f514N","../internals/engine-is-node":"aXzPf"}],"f514N":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
module.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":"2dJJC"}],"3rBDf":[function(require,module,exports) {
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var macrotask = require('../internals/task').set;
var IS_IOS = require('../internals/engine-is-ios');
var IS_WEBOS_WEBKIT = require('../internals/engine-is-webos-webkit');
var IS_NODE = require('../internals/engine-is-node');
var MutationObserver1 = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise1 = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var flush, head, last, notify, toggle, node, promise, then;
// modern engines have queueMicrotask method
if (!queueMicrotask) {
    flush = function() {
        var parent, fn;
        if (IS_NODE && (parent = process.domain)) parent.exit();
        while(head){
            fn = head.fn;
            head = head.next;
            try {
                fn();
            } catch (error) {
                if (head) notify();
                else last = undefined;
                throw error;
            }
        }
        last = undefined;
        if (parent) parent.enter();
    };
    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver1 && document) {
        toggle = true;
        node = document.createTextNode('');
        new MutationObserver1(flush).observe(node, {
            characterData: true
        });
        notify = function() {
            node.data = toggle = !toggle;
        };
    // environments with maybe non-completely correct, but existent Promise
    } else if (Promise1 && Promise1.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        promise = Promise1.resolve(undefined);
        // workaround of WebKit ~ iOS Safari 10.1 bug
        promise.constructor = Promise1;
        then = promise.then;
        notify = function() {
            then.call(promise, flush);
        };
    // Node.js without promises
    } else if (IS_NODE) notify = function() {
        process.nextTick(flush);
    };
    else notify = function() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global, flush);
    };
}
module.exports = queueMicrotask || function(fn) {
    var task = {
        fn: fn,
        next: undefined
    };
    if (last) last.next = task;
    if (!head) {
        head = task;
        notify();
    }
    last = task;
};

},{"../internals/global":"k6ng2","../internals/object-get-own-property-descriptor":"gEzuD","../internals/task":"2Bu4m","../internals/engine-is-ios":"f514N","../internals/engine-is-webos-webkit":"c2Ms9","../internals/engine-is-node":"aXzPf"}],"c2Ms9":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
module.exports = /web0s(?!.*chrome)/i.test(userAgent);

},{"../internals/engine-user-agent":"2dJJC"}],"6IrPy":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var newPromiseCapability = require('../internals/new-promise-capability');
module.exports = function(C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};

},{"../internals/an-object":"Q1KxM","../internals/is-object":"55UvG","../internals/new-promise-capability":"boo1T"}],"boo1T":[function(require,module,exports) {
'use strict';
var aFunction = require('../internals/a-function');
var PromiseCapability = function(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
    });
    this.resolve = aFunction(resolve);
    this.reject = aFunction(reject);
};
// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function(C) {
    return new PromiseCapability(C);
};

},{"../internals/a-function":"kyHeE"}],"crKRn":[function(require,module,exports) {
var global = require('../internals/global');
module.exports = function(a, b) {
    var console = global.console;
    if (console && console.error) arguments.length === 1 ? console.error(a) : console.error(a, b);
};

},{"../internals/global":"k6ng2"}],"9OaUQ":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return {
            error: false,
            value: exec()
        };
    } catch (error) {
        return {
            error: true,
            value: error
        };
    }
};

},{}],"bbpuX":[function(require,module,exports) {
module.exports = typeof window == 'object';

},{}],"7cVFW":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var aFunction = require('../internals/a-function');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var iterate = require('../internals/iterate');
// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({
    target: 'Promise',
    stat: true
}, {
    allSettled: function allSettled(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var promiseResolve = aFunction(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyCalled = false;
                values.push(undefined);
                remaining++;
                promiseResolve.call(C, promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = {
                        status: 'fulfilled',
                        value: value
                    };
                    (--remaining) || resolve(values);
                }, function(error) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = {
                        status: 'rejected',
                        reason: error
                    };
                    (--remaining) || resolve(values);
                });
            });
            (--remaining) || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"../internals/export":"jPesG","../internals/a-function":"kyHeE","../internals/new-promise-capability":"boo1T","../internals/perform":"9OaUQ","../internals/iterate":"21SEy"}],"4VS5F":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var aFunction = require('../internals/a-function');
var getBuiltIn = require('../internals/get-built-in');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var iterate = require('../internals/iterate');
var PROMISE_ANY_ERROR = 'No one promise resolved';
// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({
    target: 'Promise',
    stat: true
}, {
    any: function any(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var promiseResolve = aFunction(C.resolve);
            var errors = [];
            var counter = 0;
            var remaining = 1;
            var alreadyResolved = false;
            iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyRejected = false;
                errors.push(undefined);
                remaining++;
                promiseResolve.call(C, promise).then(function(value) {
                    if (alreadyRejected || alreadyResolved) return;
                    alreadyResolved = true;
                    resolve(value);
                }, function(error) {
                    if (alreadyRejected || alreadyResolved) return;
                    alreadyRejected = true;
                    errors[index] = error;
                    (--remaining) || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
                });
            });
            (--remaining) || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"../internals/export":"jPesG","../internals/a-function":"kyHeE","../internals/get-built-in":"wFpZi","../internals/new-promise-capability":"boo1T","../internals/perform":"9OaUQ","../internals/iterate":"21SEy"}],"8Dcwc":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var NativePromise = require('../internals/native-promise-constructor');
var fails = require('../internals/fails');
var getBuiltIn = require('../internals/get-built-in');
var speciesConstructor = require('../internals/species-constructor');
var promiseResolve = require('../internals/promise-resolve');
var redefine = require('../internals/redefine');
// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function() {
    NativePromise.prototype['finally'].call({
        then: function() {
        }
    }, function() {
    });
});
// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({
    target: 'Promise',
    proto: true,
    real: true,
    forced: NON_GENERIC
}, {
    'finally': function(onFinally) {
        var C = speciesConstructor(this, getBuiltIn('Promise'));
        var isFunction = typeof onFinally == 'function';
        return this.then(isFunction ? function(x) {
            return promiseResolve(C, onFinally()).then(function() {
                return x;
            });
        } : onFinally, isFunction ? function(e) {
            return promiseResolve(C, onFinally()).then(function() {
                throw e;
            });
        } : onFinally);
    }
});
// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && typeof NativePromise == 'function') {
    var method = getBuiltIn('Promise').prototype['finally'];
    if (NativePromise.prototype['finally'] !== method) redefine(NativePromise.prototype, 'finally', method, {
        unsafe: true
    });
}

},{"../internals/export":"jPesG","../internals/is-pure":"hQb5L","../internals/native-promise-constructor":"vwdyA","../internals/fails":"9axhl","../internals/get-built-in":"wFpZi","../internals/species-constructor":"aTcmi","../internals/promise-resolve":"6IrPy","../internals/redefine":"5ao1i"}],"4Eb8v":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var aFunction = require('../internals/a-function');
var anObject = require('../internals/an-object');
var fails = require('../internals/fails');
var nativeApply = getBuiltIn('Reflect', 'apply');
var functionApply = Function.apply;
// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails(function() {
    nativeApply(function() {
    });
});
// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
$({
    target: 'Reflect',
    stat: true,
    forced: OPTIONAL_ARGUMENTS_LIST
}, {
    apply: function apply(target, thisArgument, argumentsList) {
        aFunction(target);
        anObject(argumentsList);
        return nativeApply ? nativeApply(target, thisArgument, argumentsList) : functionApply.call(target, thisArgument, argumentsList);
    }
});

},{"../internals/export":"jPesG","../internals/get-built-in":"wFpZi","../internals/a-function":"kyHeE","../internals/an-object":"Q1KxM","../internals/fails":"9axhl"}],"1v4rX":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var aFunction = require('../internals/a-function');
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var create = require('../internals/object-create');
var bind = require('../internals/function-bind');
var fails = require('../internals/fails');
var nativeConstruct = getBuiltIn('Reflect', 'construct');
// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function() {
    function F() {
    }
    return !(nativeConstruct(function() {
    }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function() {
    nativeConstruct(function() {
    });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;
$({
    target: 'Reflect',
    stat: true,
    forced: FORCED,
    sham: FORCED
}, {
    construct: function construct(Target, args/* , newTarget */ ) {
        aFunction(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
        if (Target == newTarget) {
            // w/o altered newTarget, optimization for 0-4 arguments
            switch(args.length){
                case 0:
                    return new Target();
                case 1:
                    return new Target(args[0]);
                case 2:
                    return new Target(args[0], args[1]);
                case 3:
                    return new Target(args[0], args[1], args[2]);
                case 4:
                    return new Target(args[0], args[1], args[2], args[3]);
            }
            // w/o altered newTarget, lot of arguments case
            var $args = [
                null
            ];
            $args.push.apply($args, args);
            return new (bind.apply(Target, $args))();
        }
        // with altered newTarget, not support built-in constructors
        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return isObject(result) ? result : instance;
    }
});

},{"../internals/export":"jPesG","../internals/get-built-in":"wFpZi","../internals/a-function":"kyHeE","../internals/an-object":"Q1KxM","../internals/is-object":"55UvG","../internals/object-create":"2iitg","../internals/function-bind":"3s5wB","../internals/fails":"9axhl"}],"3dr60":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var anObject = require('../internals/an-object');
var toPrimitive = require('../internals/to-primitive');
var definePropertyModule = require('../internals/object-define-property');
var fails = require('../internals/fails');
// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var ERROR_INSTEAD_OF_FALSE = fails(function() {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.defineProperty(definePropertyModule.f({
    }, 1, {
        value: 1
    }), 1, {
        value: 2
    });
});
// `Reflect.defineProperty` method
// https://tc39.es/ecma262/#sec-reflect.defineproperty
$({
    target: 'Reflect',
    stat: true,
    forced: ERROR_INSTEAD_OF_FALSE,
    sham: !DESCRIPTORS
}, {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        var key = toPrimitive(propertyKey, true);
        anObject(attributes);
        try {
            definePropertyModule.f(target, key, attributes);
            return true;
        } catch (error) {
            return false;
        }
    }
});

},{"../internals/export":"jPesG","../internals/descriptors":"b4IwU","../internals/an-object":"Q1KxM","../internals/to-primitive":"ia6YM","../internals/object-define-property":"d7OpP","../internals/fails":"9axhl"}],"ZJEbJ":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
$({
    target: 'Reflect',
    stat: true
}, {
    deleteProperty: function deleteProperty(target, propertyKey) {
        var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
        return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
    }
});

},{"../internals/export":"jPesG","../internals/an-object":"Q1KxM","../internals/object-get-own-property-descriptor":"gEzuD"}],"jG1It":[function(require,module,exports) {
var $ = require('../internals/export');
var isObject = require('../internals/is-object');
var anObject = require('../internals/an-object');
var has = require('../internals/has');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function get(target, propertyKey/* , receiver */ ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var descriptor, prototype;
    if (anObject(target) === receiver) return target[propertyKey];
    if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value') ? descriptor.value : descriptor.get === undefined ? undefined : descriptor.get.call(receiver);
    if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}
$({
    target: 'Reflect',
    stat: true
}, {
    get: get
});

},{"../internals/export":"jPesG","../internals/is-object":"55UvG","../internals/an-object":"Q1KxM","../internals/has":"234Va","../internals/object-get-own-property-descriptor":"gEzuD","../internals/object-get-prototype-of":"9zsYa"}],"kKCkh":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var anObject = require('../internals/an-object');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
$({
    target: 'Reflect',
    stat: true,
    sham: !DESCRIPTORS
}, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
    }
});

},{"../internals/export":"jPesG","../internals/descriptors":"b4IwU","../internals/an-object":"Q1KxM","../internals/object-get-own-property-descriptor":"gEzuD"}],"52SGS":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var objectGetPrototypeOf = require('../internals/object-get-prototype-of');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
$({
    target: 'Reflect',
    stat: true,
    sham: !CORRECT_PROTOTYPE_GETTER
}, {
    getPrototypeOf: function getPrototypeOf(target) {
        return objectGetPrototypeOf(anObject(target));
    }
});

},{"../internals/export":"jPesG","../internals/an-object":"Q1KxM","../internals/object-get-prototype-of":"9zsYa","../internals/correct-prototype-getter":"alHZE"}],"gTSvO":[function(require,module,exports) {
var $ = require('../internals/export');
// `Reflect.has` method
// https://tc39.es/ecma262/#sec-reflect.has
$({
    target: 'Reflect',
    stat: true
}, {
    has: function has(target, propertyKey) {
        return propertyKey in target;
    }
});

},{"../internals/export":"jPesG"}],"3ehcO":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
// eslint-disable-next-line es/no-object-isextensible -- safe
var objectIsExtensible = Object.isExtensible;
// `Reflect.isExtensible` method
// https://tc39.es/ecma262/#sec-reflect.isextensible
$({
    target: 'Reflect',
    stat: true
}, {
    isExtensible: function isExtensible(target) {
        anObject(target);
        return objectIsExtensible ? objectIsExtensible(target) : true;
    }
});

},{"../internals/export":"jPesG","../internals/an-object":"Q1KxM"}],"6zVtB":[function(require,module,exports) {
var $ = require('../internals/export');
var ownKeys = require('../internals/own-keys');
// `Reflect.ownKeys` method
// https://tc39.es/ecma262/#sec-reflect.ownkeys
$({
    target: 'Reflect',
    stat: true
}, {
    ownKeys: ownKeys
});

},{"../internals/export":"jPesG","../internals/own-keys":"gJlsF"}],"1MbIm":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var anObject = require('../internals/an-object');
var FREEZING = require('../internals/freezing');
// `Reflect.preventExtensions` method
// https://tc39.es/ecma262/#sec-reflect.preventextensions
$({
    target: 'Reflect',
    stat: true,
    sham: !FREEZING
}, {
    preventExtensions: function preventExtensions(target) {
        anObject(target);
        try {
            var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
            if (objectPreventExtensions) objectPreventExtensions(target);
            return true;
        } catch (error) {
            return false;
        }
    }
});

},{"../internals/export":"jPesG","../internals/get-built-in":"wFpZi","../internals/an-object":"Q1KxM","../internals/freezing":"2AwxS"}],"98bwO":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var has = require('../internals/has');
var fails = require('../internals/fails');
var definePropertyModule = require('../internals/object-define-property');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function set(target, propertyKey, V/* , receiver */ ) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
    var existingDescriptor, prototype;
    if (!ownDescriptor) {
        if (isObject(prototype = getPrototypeOf(target))) return set(prototype, propertyKey, V, receiver);
        ownDescriptor = createPropertyDescriptor(0);
    }
    if (has(ownDescriptor, 'value')) {
        if (ownDescriptor.writable === false || !isObject(receiver)) return false;
        if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
            if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
            existingDescriptor.value = V;
            definePropertyModule.f(receiver, propertyKey, existingDescriptor);
        } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
        return true;
    }
    return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
}
// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var MS_EDGE_BUG = fails(function() {
    var Constructor = function() {
    };
    var object = definePropertyModule.f(new Constructor(), 'a', {
        configurable: true
    });
    // eslint-disable-next-line es/no-reflect -- required for testing
    return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
});
$({
    target: 'Reflect',
    stat: true,
    forced: MS_EDGE_BUG
}, {
    set: set
});

},{"../internals/export":"jPesG","../internals/an-object":"Q1KxM","../internals/is-object":"55UvG","../internals/has":"234Va","../internals/fails":"9axhl","../internals/object-define-property":"d7OpP","../internals/object-get-own-property-descriptor":"gEzuD","../internals/object-get-prototype-of":"9zsYa","../internals/create-property-descriptor":"em69o"}],"dFZfr":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var aPossiblePrototype = require('../internals/a-possible-prototype');
var objectSetPrototypeOf = require('../internals/object-set-prototype-of');
// `Reflect.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.setprototypeof
if (objectSetPrototypeOf) $({
    target: 'Reflect',
    stat: true
}, {
    setPrototypeOf: function setPrototypeOf(target, proto) {
        anObject(target);
        aPossiblePrototype(proto);
        try {
            objectSetPrototypeOf(target, proto);
            return true;
        } catch (error) {
            return false;
        }
    }
});

},{"../internals/export":"jPesG","../internals/an-object":"Q1KxM","../internals/a-possible-prototype":"6XUUN","../internals/object-set-prototype-of":"dEqW3"}],"7CqL6":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var setToStringTag = require('../internals/set-to-string-tag');
$({
    global: true
}, {
    Reflect: {
    }
});
// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(global.Reflect, 'Reflect', true);

},{"../internals/export":"jPesG","../internals/global":"k6ng2","../internals/set-to-string-tag":"353PM"}],"hWtpM":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var isForced = require('../internals/is-forced');
var inheritIfRequired = require('../internals/inherit-if-required');
var defineProperty = require('../internals/object-define-property').f;
var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var isRegExp = require('../internals/is-regexp');
var getFlags = require('../internals/regexp-flags');
var stickyHelpers = require('../internals/regexp-sticky-helpers');
var redefine = require('../internals/redefine');
var fails = require('../internals/fails');
var enforceInternalState = require('../internals/internal-state').enforce;
var setSpecies = require('../internals/set-species');
var wellKnownSymbol = require('../internals/well-known-symbol');
var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var FORCED = DESCRIPTORS && isForced('RegExp', !CORRECT_NEW || UNSUPPORTED_Y || fails(function() {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
}));
// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (FORCED) {
    var RegExpWrapper = function RegExp1(pattern, flags) {
        var thisIsRegExp = this instanceof RegExpWrapper;
        var patternIsRegExp = isRegExp(pattern);
        var flagsAreUndefined = flags === undefined;
        var sticky;
        if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) return pattern;
        if (CORRECT_NEW) {
            if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
        } else if (pattern instanceof RegExpWrapper) {
            if (flagsAreUndefined) flags = getFlags.call(pattern);
            pattern = pattern.source;
        }
        if (UNSUPPORTED_Y) {
            sticky = !!flags && flags.indexOf('y') > -1;
            if (sticky) flags = flags.replace(/y/g, '');
        }
        var result = inheritIfRequired(CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
        if (UNSUPPORTED_Y && sticky) {
            var state = enforceInternalState(result);
            state.sticky = true;
        }
        return result;
    };
    var proxy = function(key) {
        key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
            configurable: true,
            get: function() {
                return NativeRegExp[key];
            },
            set: function(it) {
                NativeRegExp[key] = it;
            }
        });
    };
    var keys = getOwnPropertyNames(NativeRegExp);
    var index = 0;
    while(keys.length > index)proxy(keys[index++]);
    RegExpPrototype.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype;
    redefine(global, 'RegExp', RegExpWrapper);
}
// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

},{"../internals/descriptors":"b4IwU","../internals/global":"k6ng2","../internals/is-forced":"emedY","../internals/inherit-if-required":"9G3ip","../internals/object-define-property":"d7OpP","../internals/object-get-own-property-names":"lqOHM","../internals/is-regexp":"5781d","../internals/regexp-flags":"2lw9x","../internals/regexp-sticky-helpers":"cZyZ4","../internals/redefine":"5ao1i","../internals/fails":"9axhl","../internals/internal-state":"6IhmE","../internals/set-species":"d19R4","../internals/well-known-symbol":"8llxS"}],"5781d":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');
var MATCH = wellKnownSymbol('match');
// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

},{"../internals/is-object":"55UvG","../internals/classof-raw":"bGuqx","../internals/well-known-symbol":"8llxS"}],"2lw9x":[function(require,module,exports) {
'use strict';
var anObject = require('../internals/an-object');
// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function() {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
};

},{"../internals/an-object":"Q1KxM"}],"cZyZ4":[function(require,module,exports) {
'use strict';
var fails = require('./fails');
// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
    return RegExp(s, f);
}
exports.UNSUPPORTED_Y = fails(function() {
    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
});
exports.BROKEN_CARET = fails(function() {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
});

},{"./fails":"9axhl"}],"5Q2zR":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var exec = require('../internals/regexp-exec');
// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec
}, {
    exec: exec
});

},{"../internals/export":"jPesG","../internals/regexp-exec":"4Uu0b"}],"4Uu0b":[function(require,module,exports) {
'use strict';
/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */ /* eslint-disable regexp/no-useless-quantifier -- testing */ var regexpFlags = require('./regexp-flags');
var stickyHelpers = require('./regexp-sticky-helpers');
var shared = require('./shared');
var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var patchedExec = nativeExec;
var UPDATES_LAST_INDEX_WRONG = function() {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;
// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;
if (PATCH) patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;
    if (sticky) {
        flags = flags.replace('y', '');
        if (flags.indexOf('g') === -1) flags += 'g';
        strCopy = String(str).slice(re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
            source = '(?: ' + source + ')';
            strCopy = ' ' + strCopy;
            charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
    }
    if (NPCG_INCLUDED) reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = nativeExec.call(sticky ? reCopy : re, strCopy);
    if (sticky) {
        if (match) {
            match.input = match.input.slice(charsAdded);
            match[0] = match[0].slice(charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    if (NPCG_INCLUDED && match && match.length > 1) // Fix browsers whose `exec` methods don't consistently return `undefined`
    // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
    nativeReplace.call(match[0], reCopy, function() {
        for(i = 1; i < arguments.length - 2; i++)if (arguments[i] === undefined) match[i] = undefined;
    });
    return match;
};
module.exports = patchedExec;

},{"./regexp-flags":"2lw9x","./regexp-sticky-helpers":"cZyZ4","./shared":"7yw5T"}],"ehwza":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var objectDefinePropertyModule = require('../internals/object-define-property');
var regExpFlags = require('../internals/regexp-flags');
var UNSUPPORTED_Y = require('../internals/regexp-sticky-helpers').UNSUPPORTED_Y;
// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
// eslint-disable-next-line es/no-regexp-prototype-flags -- required for testing
if (DESCRIPTORS && (/./g.flags != 'g' || UNSUPPORTED_Y)) objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlags
});

},{"../internals/descriptors":"b4IwU","../internals/object-define-property":"d7OpP","../internals/regexp-flags":"2lw9x","../internals/regexp-sticky-helpers":"cZyZ4"}],"lJNdd":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var UNSUPPORTED_Y = require('../internals/regexp-sticky-helpers').UNSUPPORTED_Y;
var defineProperty = require('../internals/object-define-property').f;
var getInternalState = require('../internals/internal-state').get;
var RegExpPrototype = RegExp.prototype;
// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && UNSUPPORTED_Y) defineProperty(RegExp.prototype, 'sticky', {
    configurable: true,
    get: function() {
        if (this === RegExpPrototype) return undefined;
        // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.
        if (this instanceof RegExp) return !!getInternalState(this).sticky;
        throw TypeError('Incompatible receiver, RegExp required');
    }
});

},{"../internals/descriptors":"b4IwU","../internals/regexp-sticky-helpers":"cZyZ4","../internals/object-define-property":"d7OpP","../internals/internal-state":"6IhmE"}],"9GrAK":[function(require,module,exports) {
'use strict';
// TODO: Remove from `core-js@4` since it's moved to entry points
require('../modules/es.regexp.exec');
var $ = require('../internals/export');
var isObject = require('../internals/is-object');
var DELEGATES_TO_EXEC = function() {
    var execCalled = false;
    var re = /[ac]/;
    re.exec = function() {
        execCalled = true;
        return /./.exec.apply(this, arguments);
    };
    return re.test('abc') === true && execCalled;
}();
var nativeTest = /./.test;
// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({
    target: 'RegExp',
    proto: true,
    forced: !DELEGATES_TO_EXEC
}, {
    test: function(str) {
        if (typeof this.exec !== 'function') return nativeTest.call(this, str);
        var result = this.exec(str);
        if (result !== null && !isObject(result)) throw new Error('RegExp exec method returned something other than an Object or null');
        return !!result;
    }
});

},{"../modules/es.regexp.exec":"5Q2zR","../internals/export":"jPesG","../internals/is-object":"55UvG"}],"ciczM":[function(require,module,exports) {
'use strict';
var redefine = require('../internals/redefine');
var anObject = require('../internals/an-object');
var fails = require('../internals/fails');
var flags = require('../internals/regexp-flags');
var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails(function() {
    return nativeToString.call({
        source: 'a',
        flags: 'b'
    }) != '/a/b';
});
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;
// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
}, {
    unsafe: true
});

},{"../internals/redefine":"5ao1i","../internals/an-object":"Q1KxM","../internals/fails":"9axhl","../internals/regexp-flags":"2lw9x"}],"b8s3D":[function(require,module,exports) {
'use strict';
var collection = require('../internals/collection');
var collectionStrong = require('../internals/collection-strong');
// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
module.exports = collection('Set', function(init) {
    return function Set1() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
}, collectionStrong);

},{"../internals/collection":"hmxvt","../internals/collection-strong":"dP3oK"}],"ftQ9B":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var codeAt = require('../internals/string-multibyte').codeAt;
// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
$({
    target: 'String',
    proto: true
}, {
    codePointAt: function codePointAt(pos) {
        return codeAt(this, pos);
    }
});

},{"../internals/export":"jPesG","../internals/string-multibyte":"1GyQs"}],"1GyQs":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var requireObjectCoercible = require('../internals/require-object-coercible');
// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function(CONVERT_TO_STRING) {
    return function($this, pos) {
        var S = String(requireObjectCoercible($this));
        var position = toInteger(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = S.charCodeAt(position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
    };
};
module.exports = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
};

},{"../internals/to-integer":"8UwJq","../internals/require-object-coercible":"g8fXQ"}],"cjy5O":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var toLength = require('../internals/to-length');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');
var IS_PURE = require('../internals/is-pure');
// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var $endsWith = ''.endsWith;
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
    return descriptor && !descriptor.writable;
}();
// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    endsWith: function endsWith(searchString/* , endPosition = @length */ ) {
        var that = String(requireObjectCoercible(this));
        notARegExp(searchString);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = toLength(that.length);
        var end = endPosition === undefined ? len : min(toLength(endPosition), len);
        var search = String(searchString);
        return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
});

},{"../internals/export":"jPesG","../internals/object-get-own-property-descriptor":"gEzuD","../internals/to-length":"cJhjy","../internals/not-a-regexp":"7e82T","../internals/require-object-coercible":"g8fXQ","../internals/correct-is-regexp-logic":"arRJD","../internals/is-pure":"hQb5L"}],"7e82T":[function(require,module,exports) {
var isRegExp = require('../internals/is-regexp');
module.exports = function(it) {
    if (isRegExp(it)) throw TypeError("The method doesn't accept regular expressions");
    return it;
};

},{"../internals/is-regexp":"5781d"}],"arRJD":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var MATCH = wellKnownSymbol('match');
module.exports = function(METHOD_NAME) {
    var regexp = /./;
    try {
        '/./'[METHOD_NAME](regexp);
    } catch (error1) {
        try {
            regexp[MATCH] = false;
            return '/./'[METHOD_NAME](regexp);
        } catch (error2) {
        }
    }
    return false;
};

},{"../internals/well-known-symbol":"8llxS"}],"b6kNf":[function(require,module,exports) {
var $ = require('../internals/export');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var fromCharCode = String.fromCharCode;
// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
var $fromCodePoint = String.fromCodePoint;
// length should be 1, old FF problem
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1;
// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
$({
    target: 'String',
    stat: true,
    forced: INCORRECT_LENGTH
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    fromCodePoint: function fromCodePoint(x) {
        var elements = [];
        var length = arguments.length;
        var i = 0;
        var code;
        while(length > i){
            code = +arguments[i++];
            if (toAbsoluteIndex(code, 1114111) !== code) throw RangeError(code + ' is not a valid code point');
            elements.push(code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320));
        }
        return elements.join('');
    }
});

},{"../internals/export":"jPesG","../internals/to-absolute-index":"lsGvn"}],"eS2t9":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');
// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({
    target: 'String',
    proto: true,
    forced: !correctIsRegExpLogic('includes')
}, {
    includes: function includes(searchString/* , position = 0 */ ) {
        return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"jPesG","../internals/not-a-regexp":"7e82T","../internals/require-object-coercible":"g8fXQ","../internals/correct-is-regexp-logic":"arRJD"}],"2MfvQ":[function(require,module,exports) {
'use strict';
var charAt = require('../internals/string-multibyte').charAt;
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function(iterated) {
    setInternalState(this, {
        type: STRING_ITERATOR,
        string: String(iterated),
        index: 0
    });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
        value: undefined,
        done: true
    };
    point = charAt(string, index);
    state.index += point.length;
    return {
        value: point,
        done: false
    };
});

},{"../internals/string-multibyte":"1GyQs","../internals/internal-state":"6IhmE","../internals/define-iterator":"2vmKI"}],"CHSNr":[function(require,module,exports) {
'use strict';
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var toLength = require('../internals/to-length');
var requireObjectCoercible = require('../internals/require-object-coercible');
var advanceStringIndex = require('../internals/advance-string-index');
var regExpExec = require('../internals/regexp-exec-abstract');
// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function(MATCH, nativeMatch, maybeCallNative) {
    return [
        // `String.prototype.match` method
        // https://tc39.es/ecma262/#sec-string.prototype.match
        function match(regexp) {
            var O = requireObjectCoercible(this);
            var matcher = regexp == undefined ? undefined : regexp[MATCH];
            return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
        function(regexp) {
            var res = maybeCallNative(nativeMatch, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            if (!rx.global) return regExpExec(rx, S);
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;
            while((result = regExpExec(rx, S)) !== null){
                var matchStr = String(result[0]);
                A[n] = matchStr;
                if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                n++;
            }
            return n === 0 ? null : A;
        }
    ];
});

},{"../internals/fix-regexp-well-known-symbol-logic":"aXpPB","../internals/an-object":"Q1KxM","../internals/to-length":"cJhjy","../internals/require-object-coercible":"g8fXQ","../internals/advance-string-index":"3ctsH","../internals/regexp-exec-abstract":"9qDOy"}],"aXpPB":[function(require,module,exports) {
'use strict';
// TODO: Remove from `core-js@4` since it's moved to entry points
require('../modules/es.regexp.exec');
var redefine = require('../internals/redefine');
var regexpExec = require('../internals/regexp-exec');
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function() {
        var result = [];
        result.groups = {
            a: '7'
        };
        return result;
    };
    return ''.replace(re, '$<a>') !== '7';
});
// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = function() {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
}();
var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
    if (/./[REPLACE]) return /./[REPLACE]('a', '$0') === '';
    return false;
}();
// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function() {
        return originalExec.apply(this, arguments);
    };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});
module.exports = function(KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function() {
        // String methods call symbol-named RegEp methods
        var O = {
        };
        O[SYMBOL] = function() {
            return 7;
        };
        return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;
        if (KEY === 'split') {
            // We can't use real regex here since it causes deoptimization
            // and serious performance degradation in V8
            // https://github.com/zloirock/core-js/issues/306
            re = {
            };
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {
            };
            re.constructor[SPECIES] = function() {
                return re;
            };
            re.flags = '';
            re[SYMBOL] = /./[SYMBOL];
        }
        re.exec = function() {
            execCalled = true;
            return null;
        };
        re[SYMBOL]('');
        return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
        var nativeRegExpMethod = /./[SYMBOL];
        var methods = exec(SYMBOL, ''[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
            var $exec = regexp.exec;
            if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return {
                    done: true,
                    value: nativeRegExpMethod.call(regexp, str, arg2)
                };
                return {
                    done: true,
                    value: nativeMethod.call(str, regexp, arg2)
                };
            }
            return {
                done: false
            };
        }, {
            REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
        });
        var stringMethod = methods[0];
        var regexMethod = methods[1];
        redefine(String.prototype, KEY, stringMethod);
        redefine(RegExpPrototype, SYMBOL, length == 2 ? function(string, arg) {
            return regexMethod.call(string, this, arg);
        } : function(string) {
            return regexMethod.call(string, this);
        });
    }
    if (sham) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

},{"../modules/es.regexp.exec":"5Q2zR","../internals/redefine":"5ao1i","../internals/regexp-exec":"4Uu0b","../internals/fails":"9axhl","../internals/well-known-symbol":"8llxS","../internals/create-non-enumerable-property":"57sB9"}],"3ctsH":[function(require,module,exports) {
'use strict';
var charAt = require('../internals/string-multibyte').charAt;
// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function(S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
};

},{"../internals/string-multibyte":"1GyQs"}],"9qDOy":[function(require,module,exports) {
var classof = require('./classof-raw');
var regexpExec = require('./regexp-exec');
// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function(R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
        var result = exec.call(R, S);
        if (typeof result !== 'object') throw TypeError('RegExp exec method returned something other than an Object or null');
        return result;
    }
    if (classof(R) !== 'RegExp') throw TypeError('RegExp#exec called on incompatible receiver');
    return regexpExec.call(R, S);
};

},{"./classof-raw":"bGuqx","./regexp-exec":"4Uu0b"}],"2KOVU":[function(require,module,exports) {
'use strict';
/* eslint-disable es/no-string-prototype-matchall -- safe */ var $ = require('../internals/export');
var createIteratorConstructor = require('../internals/create-iterator-constructor');
var requireObjectCoercible = require('../internals/require-object-coercible');
var toLength = require('../internals/to-length');
var aFunction = require('../internals/a-function');
var anObject = require('../internals/an-object');
var classof = require('../internals/classof-raw');
var isRegExp = require('../internals/is-regexp');
var getRegExpFlags = require('../internals/regexp-flags');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var speciesConstructor = require('../internals/species-constructor');
var advanceStringIndex = require('../internals/advance-string-index');
var InternalStateModule = require('../internals/internal-state');
var IS_PURE = require('../internals/is-pure');
var MATCH_ALL = wellKnownSymbol('matchAll');
var REGEXP_STRING = 'RegExp String';
var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(REGEXP_STRING_ITERATOR);
var RegExpPrototype = RegExp.prototype;
var regExpBuiltinExec = RegExpPrototype.exec;
var nativeMatchAll = ''.matchAll;
var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails(function() {
    'a'.matchAll(/./);
});
var regExpExec = function(R, S) {
    var exec = R.exec;
    var result;
    if (typeof exec == 'function') {
        result = exec.call(R, S);
        if (typeof result != 'object') throw TypeError('Incorrect exec result');
        return result;
    }
    return regExpBuiltinExec.call(R, S);
};
// eslint-disable-next-line max-len -- ignore
var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, global, fullUnicode) {
    setInternalState(this, {
        type: REGEXP_STRING_ITERATOR,
        regexp: regexp,
        string: string,
        global: global,
        unicode: fullUnicode,
        done: false
    });
}, REGEXP_STRING, function next() {
    var state = getInternalState(this);
    if (state.done) return {
        value: undefined,
        done: true
    };
    var R = state.regexp;
    var S = state.string;
    var match = regExpExec(R, S);
    if (match === null) return {
        value: undefined,
        done: state.done = true
    };
    if (state.global) {
        if (String(match[0]) == '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
        return {
            value: match,
            done: false
        };
    }
    state.done = true;
    return {
        value: match,
        done: false
    };
});
var $matchAll = function(string) {
    var R = anObject(this);
    var S = String(string);
    var C, flagsValue, flags, matcher, global, fullUnicode;
    C = speciesConstructor(R, RegExp);
    flagsValue = R.flags;
    if (flagsValue === undefined && R instanceof RegExp && !('flags' in RegExpPrototype)) flagsValue = getRegExpFlags.call(R);
    flags = flagsValue === undefined ? '' : String(flagsValue);
    matcher = new C(C === RegExp ? R.source : R, flags);
    global = !!~flags.indexOf('g');
    fullUnicode = !!~flags.indexOf('u');
    matcher.lastIndex = toLength(R.lastIndex);
    return new $RegExpStringIterator(matcher, S, global, fullUnicode);
};
// `String.prototype.matchAll` method
// https://tc39.es/ecma262/#sec-string.prototype.matchall
$({
    target: 'String',
    proto: true,
    forced: WORKS_WITH_NON_GLOBAL_REGEX
}, {
    matchAll: function matchAll(regexp) {
        var O = requireObjectCoercible(this);
        var flags, S, matcher, rx;
        if (regexp != null) {
            if (isRegExp(regexp)) {
                flags = String(requireObjectCoercible('flags' in RegExpPrototype ? regexp.flags : getRegExpFlags.call(regexp)));
                if (!~flags.indexOf('g')) throw TypeError('`.matchAll` does not allow non-global regexes');
            }
            if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);
            matcher = regexp[MATCH_ALL];
            if (matcher === undefined && IS_PURE && classof(regexp) == 'RegExp') matcher = $matchAll;
            if (matcher != null) return aFunction(matcher).call(regexp, O);
        } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);
        S = String(O);
        rx = new RegExp(regexp, 'g');
        return IS_PURE ? $matchAll.call(rx, S) : rx[MATCH_ALL](S);
    }
});
IS_PURE || MATCH_ALL in RegExpPrototype || createNonEnumerableProperty(RegExpPrototype, MATCH_ALL, $matchAll);

},{"../internals/export":"jPesG","../internals/create-iterator-constructor":"cYz2A","../internals/require-object-coercible":"g8fXQ","../internals/to-length":"cJhjy","../internals/a-function":"kyHeE","../internals/an-object":"Q1KxM","../internals/classof-raw":"bGuqx","../internals/is-regexp":"5781d","../internals/regexp-flags":"2lw9x","../internals/create-non-enumerable-property":"57sB9","../internals/fails":"9axhl","../internals/well-known-symbol":"8llxS","../internals/species-constructor":"aTcmi","../internals/advance-string-index":"3ctsH","../internals/internal-state":"6IhmE","../internals/is-pure":"hQb5L"}],"gPBrT":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $padEnd = require('../internals/string-pad').end;
var WEBKIT_BUG = require('../internals/string-pad-webkit-bug');
// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
$({
    target: 'String',
    proto: true,
    forced: WEBKIT_BUG
}, {
    padEnd: function padEnd(maxLength/* , fillString = ' ' */ ) {
        return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"jPesG","../internals/string-pad":"dBt6W","../internals/string-pad-webkit-bug":"dEkky"}],"dEkky":[function(require,module,exports) {
// https://github.com/zloirock/core-js/issues/280
var userAgent = require('../internals/engine-user-agent');
// eslint-disable-next-line unicorn/no-unsafe-regex -- safe
module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);

},{"../internals/engine-user-agent":"2dJJC"}],"bkkor":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $padStart = require('../internals/string-pad').start;
var WEBKIT_BUG = require('../internals/string-pad-webkit-bug');
// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$({
    target: 'String',
    proto: true,
    forced: WEBKIT_BUG
}, {
    padStart: function padStart(maxLength/* , fillString = ' ' */ ) {
        return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"jPesG","../internals/string-pad":"dBt6W","../internals/string-pad-webkit-bug":"dEkky"}],"65QhH":[function(require,module,exports) {
var $ = require('../internals/export');
var toIndexedObject = require('../internals/to-indexed-object');
var toLength = require('../internals/to-length');
// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
$({
    target: 'String',
    stat: true
}, {
    raw: function raw(template) {
        var rawTemplate = toIndexedObject(template.raw);
        var literalSegments = toLength(rawTemplate.length);
        var argumentsLength = arguments.length;
        var elements = [];
        var i = 0;
        while(literalSegments > i){
            elements.push(String(rawTemplate[i++]));
            if (i < argumentsLength) elements.push(String(arguments[i]));
        }
        return elements.join('');
    }
});

},{"../internals/export":"jPesG","../internals/to-indexed-object":"1LFTi","../internals/to-length":"cJhjy"}],"5OOdh":[function(require,module,exports) {
var $ = require('../internals/export');
var repeat = require('../internals/string-repeat');
// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$({
    target: 'String',
    proto: true
}, {
    repeat: repeat
});

},{"../internals/export":"jPesG","../internals/string-repeat":"iW2qf"}],"gxg0q":[function(require,module,exports) {
'use strict';
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var toLength = require('../internals/to-length');
var toInteger = require('../internals/to-integer');
var requireObjectCoercible = require('../internals/require-object-coercible');
var advanceStringIndex = require('../internals/advance-string-index');
var getSubstitution = require('../internals/get-substitution');
var regExpExec = require('../internals/regexp-exec-abstract');
var max = Math.max;
var min = Math.min;
var maybeToString = function(it) {
    return it === undefined ? it : String(it);
};
// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function(REPLACE, nativeReplace, maybeCallNative, reason) {
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
    var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [
        // `String.prototype.replace` method
        // https://tc39.es/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
            var O = requireObjectCoercible(this);
            var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
            return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
        function(regexp, replaceValue) {
            if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
                var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
                if (res.done) return res.value;
            }
            var rx = anObject(regexp);
            var S = String(this);
            var functionalReplace = typeof replaceValue === 'function';
            if (!functionalReplace) replaceValue = String(replaceValue);
            var global = rx.global;
            if (global) {
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
            }
            var results = [];
            while(true){
                var result = regExpExec(rx, S);
                if (result === null) break;
                results.push(result);
                if (!global) break;
                var matchStr = String(result[0]);
                if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            var accumulatedResult = '';
            var nextSourcePosition = 0;
            for(var i = 0; i < results.length; i++){
                result = results[i];
                var matched = String(result[0]);
                var position = max(min(toInteger(result.index), S.length), 0);
                var captures = [];
                // NOTE: This is equivalent to
                //   captures = result.slice(1).map(maybeToString)
                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                for(var j = 1; j < result.length; j++)captures.push(maybeToString(result[j]));
                var namedCaptures = result.groups;
                if (functionalReplace) {
                    var replacerArgs = [
                        matched
                    ].concat(captures, position, S);
                    if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                    var replacement = String(replaceValue.apply(undefined, replacerArgs));
                } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                if (position >= nextSourcePosition) {
                    accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                    nextSourcePosition = position + matched.length;
                }
            }
            return accumulatedResult + S.slice(nextSourcePosition);
        }
    ];
});

},{"../internals/fix-regexp-well-known-symbol-logic":"aXpPB","../internals/an-object":"Q1KxM","../internals/to-length":"cJhjy","../internals/to-integer":"8UwJq","../internals/require-object-coercible":"g8fXQ","../internals/advance-string-index":"3ctsH","../internals/get-substitution":"bXQAW","../internals/regexp-exec-abstract":"9qDOy"}],"bXQAW":[function(require,module,exports) {
var toObject = require('../internals/to-object');
var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace.call(replacement, symbols, function(match, ch) {
        var capture;
        switch(ch.charAt(0)){
            case '$':
                return '$';
            case '&':
                return matched;
            case '`':
                return str.slice(0, position);
            case "'":
                return str.slice(tailPos);
            case '<':
                capture = namedCaptures[ch.slice(1, -1)];
                break;
            default:
                var n = +ch;
                if (n === 0) return match;
                if (n > m) {
                    var f = floor(n / 10);
                    if (f === 0) return match;
                    if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                    return match;
                }
                capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
    });
};

},{"../internals/to-object":"9Eaxp"}],"gnBny":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var requireObjectCoercible = require('../internals/require-object-coercible');
var isRegExp = require('../internals/is-regexp');
var getRegExpFlags = require('../internals/regexp-flags');
var getSubstitution = require('../internals/get-substitution');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var REPLACE = wellKnownSymbol('replace');
var RegExpPrototype = RegExp.prototype;
var max = Math.max;
var stringIndexOf = function(string, searchValue, fromIndex) {
    if (fromIndex > string.length) return -1;
    if (searchValue === '') return fromIndex;
    return string.indexOf(searchValue, fromIndex);
};
// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$({
    target: 'String',
    proto: true
}, {
    replaceAll: function replaceAll(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
        var position = 0;
        var endOfLastMatch = 0;
        var result = '';
        if (searchValue != null) {
            IS_REG_EXP = isRegExp(searchValue);
            if (IS_REG_EXP) {
                flags = String(requireObjectCoercible('flags' in RegExpPrototype ? searchValue.flags : getRegExpFlags.call(searchValue)));
                if (!~flags.indexOf('g')) throw TypeError('`.replaceAll` does not allow non-global regexes');
            }
            replacer = searchValue[REPLACE];
            if (replacer !== undefined) return replacer.call(searchValue, O, replaceValue);
            else if (IS_PURE && IS_REG_EXP) return String(O).replace(searchValue, replaceValue);
        }
        string = String(O);
        searchString = String(searchValue);
        functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);
        searchLength = searchString.length;
        advanceBy = max(1, searchLength);
        position = stringIndexOf(string, searchString, 0);
        while(position !== -1){
            if (functionalReplace) replacement = String(replaceValue(searchString, position, string));
            else replacement = getSubstitution(searchString, string, position, [], undefined, replaceValue);
            result += string.slice(endOfLastMatch, position) + replacement;
            endOfLastMatch = position + searchLength;
            position = stringIndexOf(string, searchString, position + advanceBy);
        }
        if (endOfLastMatch < string.length) result += string.slice(endOfLastMatch);
        return result;
    }
});

},{"../internals/export":"jPesG","../internals/require-object-coercible":"g8fXQ","../internals/is-regexp":"5781d","../internals/regexp-flags":"2lw9x","../internals/get-substitution":"bXQAW","../internals/well-known-symbol":"8llxS","../internals/is-pure":"hQb5L"}],"7mOTv":[function(require,module,exports) {
'use strict';
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
var sameValue = require('../internals/same-value');
var regExpExec = require('../internals/regexp-exec-abstract');
// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function(SEARCH, nativeSearch, maybeCallNative) {
    return [
        // `String.prototype.search` method
        // https://tc39.es/ecma262/#sec-string.prototype.search
        function search(regexp) {
            var O = requireObjectCoercible(this);
            var searcher = regexp == undefined ? undefined : regexp[SEARCH];
            return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
        },
        // `RegExp.prototype[@@search]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
        function(regexp) {
            var res = maybeCallNative(nativeSearch, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var previousLastIndex = rx.lastIndex;
            if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
            var result = regExpExec(rx, S);
            if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
            return result === null ? -1 : result.index;
        }
    ];
});

},{"../internals/fix-regexp-well-known-symbol-logic":"aXpPB","../internals/an-object":"Q1KxM","../internals/require-object-coercible":"g8fXQ","../internals/same-value":"hju2d","../internals/regexp-exec-abstract":"9qDOy"}],"gqL2T":[function(require,module,exports) {
'use strict';
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var isRegExp = require('../internals/is-regexp');
var anObject = require('../internals/an-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
var speciesConstructor = require('../internals/species-constructor');
var advanceStringIndex = require('../internals/advance-string-index');
var toLength = require('../internals/to-length');
var callRegExpExec = require('../internals/regexp-exec-abstract');
var regexpExec = require('../internals/regexp-exec');
var stickyHelpers = require('../internals/regexp-sticky-helpers');
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 4294967295;
// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function(SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) // based on es5-shim implementation, need to rework it
    internalSplit = function(separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [
            string
        ];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) return nativeSplit.call(string, separator, lim);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while(match = regexpExec.call(separatorCopy, string)){
            lastIndex = separatorCopy.lastIndex;
            if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= lim) break;
            }
            if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
            if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
    };
    else if ('0'.split(undefined, 0).length) internalSplit = function(separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
    else internalSplit = nativeSplit;
    return [
        // `String.prototype.split` method
        // https://tc39.es/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
            var O = requireObjectCoercible(this);
            var splitter = separator == undefined ? undefined : separator[SPLIT];
            return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
        },
        // `RegExp.prototype[@@split]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function(regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y');
            // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.
            var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [
                S
            ] : [];
            var p = 0;
            var q = 0;
            var A = [];
            while(q < S.length){
                splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
                var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
                var e;
                if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) q = advanceStringIndex(S, q, unicodeMatching);
                else {
                    A.push(S.slice(p, q));
                    if (A.length === lim) return A;
                    for(var i = 1; i <= z.length - 1; i++){
                        A.push(z[i]);
                        if (A.length === lim) return A;
                    }
                    q = p = e;
                }
            }
            A.push(S.slice(p));
            return A;
        }
    ];
}, UNSUPPORTED_Y);

},{"../internals/fix-regexp-well-known-symbol-logic":"aXpPB","../internals/is-regexp":"5781d","../internals/an-object":"Q1KxM","../internals/require-object-coercible":"g8fXQ","../internals/species-constructor":"aTcmi","../internals/advance-string-index":"3ctsH","../internals/to-length":"cJhjy","../internals/regexp-exec-abstract":"9qDOy","../internals/regexp-exec":"4Uu0b","../internals/regexp-sticky-helpers":"cZyZ4"}],"dyNuN":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var toLength = require('../internals/to-length');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');
var IS_PURE = require('../internals/is-pure');
// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var $startsWith = ''.startsWith;
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
}();
// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    startsWith: function startsWith(searchString/* , position = 0 */ ) {
        var that = String(requireObjectCoercible(this));
        notARegExp(searchString);
        var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = String(searchString);
        return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
});

},{"../internals/export":"jPesG","../internals/object-get-own-property-descriptor":"gEzuD","../internals/to-length":"cJhjy","../internals/not-a-regexp":"7e82T","../internals/require-object-coercible":"g8fXQ","../internals/correct-is-regexp-logic":"arRJD","../internals/is-pure":"hQb5L"}],"5Jskd":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $trim = require('../internals/string-trim').trim;
var forcedStringTrimMethod = require('../internals/string-trim-forced');
// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
}, {
    trim: function trim() {
        return $trim(this);
    }
});

},{"../internals/export":"jPesG","../internals/string-trim":"dUybk","../internals/string-trim-forced":"a6HHD"}],"a6HHD":[function(require,module,exports) {
var fails = require('../internals/fails');
var whitespaces = require('../internals/whitespaces');
var non = '\u200B\u0085\u180E';
// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function(METHOD_NAME) {
    return fails(function() {
        return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
};

},{"../internals/fails":"9axhl","../internals/whitespaces":"2Wzut"}],"e8sbE":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $trimEnd = require('../internals/string-trim').end;
var forcedStringTrimMethod = require('../internals/string-trim-forced');
var FORCED = forcedStringTrimMethod('trimEnd');
var trimEnd = FORCED ? function trimEnd1() {
    return $trimEnd(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimEnd;
// `String.prototype.{ trimEnd, trimRight }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
$({
    target: 'String',
    proto: true,
    forced: FORCED
}, {
    trimEnd: trimEnd,
    trimRight: trimEnd
});

},{"../internals/export":"jPesG","../internals/string-trim":"dUybk","../internals/string-trim-forced":"a6HHD"}],"aI22d":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $trimStart = require('../internals/string-trim').start;
var forcedStringTrimMethod = require('../internals/string-trim-forced');
var FORCED = forcedStringTrimMethod('trimStart');
var trimStart = FORCED ? function trimStart1() {
    return $trimStart(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimStart;
// `String.prototype.{ trimStart, trimLeft }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
$({
    target: 'String',
    proto: true,
    forced: FORCED
}, {
    trimStart: trimStart,
    trimLeft: trimStart
});

},{"../internals/export":"jPesG","../internals/string-trim":"dUybk","../internals/string-trim-forced":"a6HHD"}],"34XUf":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('anchor')
}, {
    anchor: function anchor(name) {
        return createHTML(this, 'a', 'name', name);
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"d3ugh":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');
var quot = /"/g;
// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function(string, tag, attribute, value) {
    var S = String(requireObjectCoercible(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
};

},{"../internals/require-object-coercible":"g8fXQ"}],"7EZ8p":[function(require,module,exports) {
var fails = require('../internals/fails');
// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function(METHOD_NAME) {
    return fails(function() {
        var test = ''[METHOD_NAME]('"');
        return test !== test.toLowerCase() || test.split('"').length > 3;
    });
};

},{"../internals/fails":"9axhl"}],"9DdLQ":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.big` method
// https://tc39.es/ecma262/#sec-string.prototype.big
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('big')
}, {
    big: function big() {
        return createHTML(this, 'big', '', '');
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"aLTVI":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.blink` method
// https://tc39.es/ecma262/#sec-string.prototype.blink
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('blink')
}, {
    blink: function blink() {
        return createHTML(this, 'blink', '', '');
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"3BKej":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.bold` method
// https://tc39.es/ecma262/#sec-string.prototype.bold
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('bold')
}, {
    bold: function bold() {
        return createHTML(this, 'b', '', '');
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"cDbES":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('fixed')
}, {
    fixed: function fixed() {
        return createHTML(this, 'tt', '', '');
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"ascMd":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.fontcolor` method
// https://tc39.es/ecma262/#sec-string.prototype.fontcolor
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('fontcolor')
}, {
    fontcolor: function fontcolor(color) {
        return createHTML(this, 'font', 'color', color);
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"bBa8u":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.fontsize` method
// https://tc39.es/ecma262/#sec-string.prototype.fontsize
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('fontsize')
}, {
    fontsize: function fontsize(size) {
        return createHTML(this, 'font', 'size', size);
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"i3QGz":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.italics` method
// https://tc39.es/ecma262/#sec-string.prototype.italics
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('italics')
}, {
    italics: function italics() {
        return createHTML(this, 'i', '', '');
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"7yz3L":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('link')
}, {
    link: function link(url) {
        return createHTML(this, 'a', 'href', url);
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"liKUI":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('small')
}, {
    small: function small() {
        return createHTML(this, 'small', '', '');
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"6HrnB":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.strike` method
// https://tc39.es/ecma262/#sec-string.prototype.strike
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('strike')
}, {
    strike: function strike() {
        return createHTML(this, 'strike', '', '');
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"hnWyj":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.sub` method
// https://tc39.es/ecma262/#sec-string.prototype.sub
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('sub')
}, {
    sub: function sub() {
        return createHTML(this, 'sub', '', '');
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"9Bloq":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.sup` method
// https://tc39.es/ecma262/#sec-string.prototype.sup
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('sup')
}, {
    sup: function sup() {
        return createHTML(this, 'sup', '', '');
    }
});

},{"../internals/export":"jPesG","../internals/create-html":"d3ugh","../internals/string-html-forced":"7EZ8p"}],"hkP3f":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float32', function(init) {
    return function Float32Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"9MxYj"}],"9MxYj":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var DESCRIPTORS = require('../internals/descriptors');
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require('../internals/typed-array-constructors-require-wrappers');
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var ArrayBufferModule = require('../internals/array-buffer');
var anInstance = require('../internals/an-instance');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var toLength = require('../internals/to-length');
var toIndex = require('../internals/to-index');
var toOffset = require('../internals/to-offset');
var toPrimitive = require('../internals/to-primitive');
var has = require('../internals/has');
var classof = require('../internals/classof');
var isObject = require('../internals/is-object');
var create = require('../internals/object-create');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var typedArrayFrom = require('../internals/typed-array-from');
var forEach = require('../internals/array-iteration').forEach;
var setSpecies = require('../internals/set-species');
var definePropertyModule = require('../internals/object-define-property');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var InternalStateModule = require('../internals/internal-state');
var inheritIfRequired = require('../internals/inherit-if-required');
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError1 = global.RangeError;
var ArrayBuffer1 = ArrayBufferModule.ArrayBuffer;
var DataView1 = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';
var fromList = function(C, list) {
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor(C))(length);
    while(length > index)result[index] = list[index++];
    return result;
};
var addGetter = function(it, key) {
    nativeDefineProperty(it, key, {
        get: function() {
            return getInternalState(this)[key];
        }
    });
};
var isArrayBuffer = function(it) {
    var klass;
    return it instanceof ArrayBuffer1 || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};
var isTypedArrayIndex = function(target, key) {
    return isTypedArray(target) && typeof key != 'symbol' && key in target && String(+key) == String(key);
};
var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    return isTypedArrayIndex(target, key = toPrimitive(key, true)) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
};
var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    if (isTypedArrayIndex(target, key = toPrimitive(key, true)) && isObject(descriptor) && has(descriptor, 'value') && !has(descriptor, 'get') && !has(descriptor, 'set') && !descriptor.configurable && (!has(descriptor, 'writable') || descriptor.writable) && (!has(descriptor, 'enumerable') || descriptor.enumerable)) {
        target[key] = descriptor.value;
        return target;
    }
    return nativeDefineProperty(target, key, descriptor);
};
if (DESCRIPTORS) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
        definePropertyModule.f = wrappedDefineProperty;
        addGetter(TypedArrayPrototype, 'buffer');
        addGetter(TypedArrayPrototype, 'byteOffset');
        addGetter(TypedArrayPrototype, 'byteLength');
        addGetter(TypedArrayPrototype, 'length');
    }
    $({
        target: 'Object',
        stat: true,
        forced: !NATIVE_ARRAY_BUFFER_VIEWS
    }, {
        getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
        defineProperty: wrappedDefineProperty
    });
    module.exports = function(TYPE, wrapper, CLAMPED) {
        var BYTES = TYPE.match(/\d+$/)[0] / 8;
        var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
        var GETTER = 'get' + TYPE;
        var SETTER = 'set' + TYPE;
        var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
        var TypedArrayConstructor = NativeTypedArrayConstructor;
        var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
        var exported = {
        };
        var getter = function(that, index) {
            var data = getInternalState(that);
            return data.view[GETTER](index * BYTES + data.byteOffset, true);
        };
        var setter = function(that, index, value) {
            var data = getInternalState(that);
            if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 255 ? 255 : value & 255;
            data.view[SETTER](index * BYTES + data.byteOffset, value, true);
        };
        var addElement = function(that, index) {
            nativeDefineProperty(that, index, {
                get: function() {
                    return getter(this, index);
                },
                set: function(value) {
                    return setter(this, index, value);
                },
                enumerable: true
            });
        };
        if (!NATIVE_ARRAY_BUFFER_VIEWS) {
            TypedArrayConstructor = wrapper(function(that, data, offset, $length) {
                anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
                var index = 0;
                var byteOffset = 0;
                var buffer, byteLength, length;
                if (!isObject(data)) {
                    length = toIndex(data);
                    byteLength = length * BYTES;
                    buffer = new ArrayBuffer1(byteLength);
                } else if (isArrayBuffer(data)) {
                    buffer = data;
                    byteOffset = toOffset(offset, BYTES);
                    var $len = data.byteLength;
                    if ($length === undefined) {
                        if ($len % BYTES) throw RangeError1(WRONG_LENGTH);
                        byteLength = $len - byteOffset;
                        if (byteLength < 0) throw RangeError1(WRONG_LENGTH);
                    } else {
                        byteLength = toLength($length) * BYTES;
                        if (byteLength + byteOffset > $len) throw RangeError1(WRONG_LENGTH);
                    }
                    length = byteLength / BYTES;
                } else if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
                else return typedArrayFrom.call(TypedArrayConstructor, data);
                setInternalState(that, {
                    buffer: buffer,
                    byteOffset: byteOffset,
                    byteLength: byteLength,
                    length: length,
                    view: new DataView1(buffer)
                });
                while(index < length)addElement(that, index++);
            });
            if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
            TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
        } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
            TypedArrayConstructor = wrapper(function(dummy, data, typedArrayOffset, $length) {
                anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
                return inheritIfRequired(function() {
                    if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
                    if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
                    if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
                    return typedArrayFrom.call(TypedArrayConstructor, data);
                }(), dummy, TypedArrayConstructor);
            });
            if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
            forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function(key) {
                if (!(key in TypedArrayConstructor)) createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
            });
            TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
        }
        if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
        if (TYPED_ARRAY_TAG) createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
        exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
        $({
            global: true,
            forced: TypedArrayConstructor != NativeTypedArrayConstructor,
            sham: !NATIVE_ARRAY_BUFFER_VIEWS
        }, exported);
        if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
        if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
        setSpecies(CONSTRUCTOR_NAME);
    };
} else module.exports = function() {
};

},{"../internals/export":"jPesG","../internals/global":"k6ng2","../internals/descriptors":"b4IwU","../internals/typed-array-constructors-require-wrappers":"2WG7H","../internals/array-buffer-view-core":"c8IHE","../internals/array-buffer":"227dh","../internals/an-instance":"i7zHZ","../internals/create-property-descriptor":"em69o","../internals/create-non-enumerable-property":"57sB9","../internals/to-length":"cJhjy","../internals/to-index":"cWxwD","../internals/to-offset":"9Bn4y","../internals/to-primitive":"ia6YM","../internals/has":"234Va","../internals/classof":"fGqVo","../internals/is-object":"55UvG","../internals/object-create":"2iitg","../internals/object-set-prototype-of":"dEqW3","../internals/object-get-own-property-names":"lqOHM","../internals/typed-array-from":"fBp73","../internals/array-iteration":"gE5VF","../internals/set-species":"d19R4","../internals/object-define-property":"d7OpP","../internals/object-get-own-property-descriptor":"gEzuD","../internals/internal-state":"6IhmE","../internals/inherit-if-required":"9G3ip"}],"2WG7H":[function(require,module,exports) {
/* eslint-disable no-new -- required for testing */ var global = require('../internals/global');
var fails = require('../internals/fails');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var NATIVE_ARRAY_BUFFER_VIEWS = require('../internals/array-buffer-view-core').NATIVE_ARRAY_BUFFER_VIEWS;
var ArrayBuffer1 = global.ArrayBuffer;
var Int8Array1 = global.Int8Array;
module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function() {
    Int8Array1(1);
}) || !fails(function() {
    new Int8Array1(-1);
}) || !checkCorrectnessOfIteration(function(iterable) {
    new Int8Array1();
    new Int8Array1(null);
    new Int8Array1(1.5);
    new Int8Array1(iterable);
}, true) || fails(function() {
    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
    return new Int8Array1(new ArrayBuffer1(2), 1, undefined).length !== 1;
});

},{"../internals/global":"k6ng2","../internals/fails":"9axhl","../internals/check-correctness-of-iteration":"56p7B","../internals/array-buffer-view-core":"c8IHE"}],"9Bn4y":[function(require,module,exports) {
var toPositiveInteger = require('../internals/to-positive-integer');
module.exports = function(it, BYTES) {
    var offset = toPositiveInteger(it);
    if (offset % BYTES) throw RangeError('Wrong offset');
    return offset;
};

},{"../internals/to-positive-integer":"gXAkN"}],"gXAkN":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
module.exports = function(it) {
    var result = toInteger(it);
    if (result < 0) throw RangeError("The argument can't be less than 0");
    return result;
};

},{"../internals/to-integer":"8UwJq"}],"fBp73":[function(require,module,exports) {
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var getIteratorMethod = require('../internals/get-iterator-method');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var bind = require('../internals/function-bind-context');
var aTypedArrayConstructor = require('../internals/array-buffer-view-core').aTypedArrayConstructor;
module.exports = function from(source/* , mapfn, thisArg */ ) {
    var O = toObject(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var i, length, result, step, iterator, next;
    if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
        iterator = iteratorMethod.call(O);
        next = iterator.next;
        O = [];
        while(!(step = next.call(iterator)).done)O.push(step.value);
    }
    if (mapping && argumentsLength > 2) mapfn = bind(mapfn, arguments[2], 2);
    length = toLength(O.length);
    result = new (aTypedArrayConstructor(this))(length);
    for(i = 0; length > i; i++)result[i] = mapping ? mapfn(O[i], i) : O[i];
    return result;
};

},{"../internals/to-object":"9Eaxp","../internals/to-length":"cJhjy","../internals/get-iterator-method":"enI2H","../internals/is-array-iterator-method":"52c1t","../internals/function-bind-context":"3BONE","../internals/array-buffer-view-core":"c8IHE"}],"cd7jE":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float64', function(init) {
    return function Float64Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"9MxYj"}],"cBwzf":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Int8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int8', function(init) {
    return function Int8Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"9MxYj"}],"cd2qK":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Int16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int16', function(init) {
    return function Int16Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"9MxYj"}],"bZJjw":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Int32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int32', function(init) {
    return function Int32Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"9MxYj"}],"hy0HU":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function(init) {
    return function Uint8Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"9MxYj"}],"i9V3r":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Uint8ClampedArray` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function(init) {
    return function Uint8ClampedArray1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
}, true);

},{"../internals/typed-array-constructor":"9MxYj"}],"jpACG":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint16', function(init) {
    return function Uint16Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"9MxYj"}],"Wltn3":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint32', function(init) {
    return function Uint32Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"9MxYj"}],"l7I0D":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $copyWithin = require('../internals/array-copy-within');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start/* , end */ ) {
    return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-copy-within":"8WO83"}],"6yZ9t":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $every = require('../internals/array-iteration').every;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn/* , thisArg */ ) {
    return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-iteration":"gE5VF"}],"e2bec":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $fill = require('../internals/array-fill');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
// eslint-disable-next-line no-unused-vars -- required for `.length`
exportTypedArrayMethod('fill', function fill(value/* , start, end */ ) {
    return $fill.apply(aTypedArray(this), arguments);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-fill":"dQ4oL"}],"8EmoF":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $filter = require('../internals/array-iteration').filter;
var fromSpeciesAndList = require('../internals/typed-array-from-species-and-list');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn/* , thisArg */ ) {
    var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return fromSpeciesAndList(this, list);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-iteration":"gE5VF","../internals/typed-array-from-species-and-list":"8PtA8"}],"8PtA8":[function(require,module,exports) {
var aTypedArrayConstructor = require('../internals/array-buffer-view-core').aTypedArrayConstructor;
var speciesConstructor = require('../internals/species-constructor');
module.exports = function(instance, list) {
    var C = speciesConstructor(instance, instance.constructor);
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor(C))(length);
    while(length > index)result[index] = list[index++];
    return result;
};

},{"../internals/array-buffer-view-core":"c8IHE","../internals/species-constructor":"aTcmi"}],"gPcE4":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $find = require('../internals/array-iteration').find;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate/* , thisArg */ ) {
    return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-iteration":"gE5VF"}],"7M7wu":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $findIndex = require('../internals/array-iteration').findIndex;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate/* , thisArg */ ) {
    return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-iteration":"gE5VF"}],"hslcJ":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $forEach = require('../internals/array-iteration').forEach;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn/* , thisArg */ ) {
    $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-iteration":"gE5VF"}],"9iDbh":[function(require,module,exports) {
'use strict';
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require('../internals/typed-array-constructors-require-wrappers');
var exportTypedArrayStaticMethod = require('../internals/array-buffer-view-core').exportTypedArrayStaticMethod;
var typedArrayFrom = require('../internals/typed-array-from');
// `%TypedArray%.from` method
// https://tc39.es/ecma262/#sec-%typedarray%.from
exportTypedArrayStaticMethod('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);

},{"../internals/typed-array-constructors-require-wrappers":"2WG7H","../internals/array-buffer-view-core":"c8IHE","../internals/typed-array-from":"fBp73"}],"3FeBx":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $includes = require('../internals/array-includes').includes;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement/* , fromIndex */ ) {
    return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-includes":"grZRk"}],"kWrr4":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $indexOf = require('../internals/array-includes').indexOf;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement/* , fromIndex */ ) {
    return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-includes":"grZRk"}],"c3lWh":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var ArrayIterators = require('../modules/es.array.iterator');
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array1 = global.Uint8Array;
var arrayValues = ArrayIterators.values;
var arrayKeys = ArrayIterators.keys;
var arrayEntries = ArrayIterators.entries;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var nativeTypedArrayIterator = Uint8Array1 && Uint8Array1.prototype[ITERATOR];
var CORRECT_ITER_NAME = !!nativeTypedArrayIterator && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);
var typedArrayValues = function values() {
    return arrayValues.call(aTypedArray(this));
};
// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
    return arrayEntries.call(aTypedArray(this));
});
// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
    return arrayKeys.call(aTypedArray(this));
});
// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, !CORRECT_ITER_NAME);
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);

},{"../internals/global":"k6ng2","../internals/array-buffer-view-core":"c8IHE","../modules/es.array.iterator":"2Kz5u","../internals/well-known-symbol":"8llxS"}],"ffzzo":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = [].join;
// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
// eslint-disable-next-line no-unused-vars -- required for `.length`
exportTypedArrayMethod('join', function join(separator) {
    return $join.apply(aTypedArray(this), arguments);
});

},{"../internals/array-buffer-view-core":"c8IHE"}],"lT8f7":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $lastIndexOf = require('../internals/array-last-index-of');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
// eslint-disable-next-line no-unused-vars -- required for `.length`
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement/* , fromIndex */ ) {
    return $lastIndexOf.apply(aTypedArray(this), arguments);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-last-index-of":"177CN"}],"buy4e":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $map = require('../internals/array-iteration').map;
var speciesConstructor = require('../internals/species-constructor');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn/* , thisArg */ ) {
    return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function(O, length) {
        return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
    });
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-iteration":"gE5VF","../internals/species-constructor":"aTcmi"}],"kvHKl":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require('../internals/typed-array-constructors-require-wrappers');
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayStaticMethod = ArrayBufferViewCore.exportTypedArrayStaticMethod;
// `%TypedArray%.of` method
// https://tc39.es/ecma262/#sec-%typedarray%.of
exportTypedArrayStaticMethod('of', function of() {
    var index = 0;
    var length = arguments.length;
    var result = new (aTypedArrayConstructor(this))(length);
    while(length > index)result[index] = arguments[index++];
    return result;
}, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);

},{"../internals/array-buffer-view-core":"c8IHE","../internals/typed-array-constructors-require-wrappers":"2WG7H"}],"2kkEZ":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $reduce = require('../internals/array-reduce').left;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn/* , initialValue */ ) {
    return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-reduce":"iITb8"}],"RvIJE":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $reduceRight = require('../internals/array-reduce').right;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.reduceRicht` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn/* , initialValue */ ) {
    return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-reduce":"iITb8"}],"aQhOy":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;
// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
    var that = this;
    var length = aTypedArray(that).length;
    var middle = floor(length / 2);
    var index = 0;
    var value;
    while(index < middle){
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
    }
    return that;
});

},{"../internals/array-buffer-view-core":"c8IHE"}],"lkFFx":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var toLength = require('../internals/to-length');
var toOffset = require('../internals/to-offset');
var toObject = require('../internals/to-object');
var fails = require('../internals/fails');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var FORCED = fails(function() {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    new Int8Array(1).set({
    });
});
// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike/* , offset */ ) {
    aTypedArray(this);
    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError('Wrong length');
    while(index < len)this[offset + index] = src[index++];
}, FORCED);

},{"../internals/array-buffer-view-core":"c8IHE","../internals/to-length":"cJhjy","../internals/to-offset":"9Bn4y","../internals/to-object":"9Eaxp","../internals/fails":"9axhl"}],"bvBRk":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var speciesConstructor = require('../internals/species-constructor');
var fails = require('../internals/fails');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $slice = [].slice;
var FORCED = fails(function() {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    new Int8Array(1).slice();
});
// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
    var list = $slice.call(aTypedArray(this), start, end);
    var C = speciesConstructor(this, this.constructor);
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor(C))(length);
    while(length > index)result[index] = list[index++];
    return result;
}, FORCED);

},{"../internals/array-buffer-view-core":"c8IHE","../internals/species-constructor":"aTcmi","../internals/fails":"9axhl"}],"dr3Ac":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $some = require('../internals/array-iteration').some;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn/* , thisArg */ ) {
    return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/array-iteration":"gE5VF"}],"jCXfb":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var global = require('../internals/global');
var fails = require('../internals/fails');
var aFunction = require('../internals/a-function');
var toLength = require('../internals/to-length');
var internalSort = require('../internals/array-sort');
var FF = require('../internals/engine-ff-version');
var IE_OR_EDGE = require('../internals/engine-is-ie-or-edge');
var V8 = require('../internals/engine-v8-version');
var WEBKIT = require('../internals/engine-webkit-version');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var Uint16Array1 = global.Uint16Array;
var nativeSort = Uint16Array1 && Uint16Array1.prototype.sort;
// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !fails(function() {
    var array = new Uint16Array1(2);
    array.sort(null);
    array.sort({
    });
});
var STABLE_SORT = !!nativeSort && !fails(function() {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 74;
    if (FF) return FF < 67;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 602;
    var array = new Uint16Array1(516);
    var expected = Array(516);
    var index, mod;
    for(index = 0; index < 516; index++){
        mod = index % 4;
        array[index] = 515 - index;
        expected[index] = index - 2 * mod + 3;
    }
    array.sort(function(a, b) {
        return (a / 4 | 0) - (b / 4 | 0);
    });
    for(index = 0; index < 516; index++){
        if (array[index] !== expected[index]) return true;
    }
});
var getSortCompare = function(comparefn) {
    return function(x, y) {
        if (comparefn !== undefined) return +comparefn(x, y) || 0;
        // eslint-disable-next-line no-self-compare -- NaN check
        if (y !== y) return -1;
        // eslint-disable-next-line no-self-compare -- NaN check
        if (x !== x) return 1;
        if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
        return x > y;
    };
};
// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
    var array = this;
    if (comparefn !== undefined) aFunction(comparefn);
    if (STABLE_SORT) return nativeSort.call(array, comparefn);
    aTypedArray(array);
    var arrayLength = toLength(array.length);
    var items = Array(arrayLength);
    var index;
    for(index = 0; index < arrayLength; index++)items[index] = array[index];
    items = internalSort(array, getSortCompare(comparefn));
    for(index = 0; index < arrayLength; index++)array[index] = items[index];
    return array;
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

},{"../internals/array-buffer-view-core":"c8IHE","../internals/global":"k6ng2","../internals/fails":"9axhl","../internals/a-function":"kyHeE","../internals/to-length":"cJhjy","../internals/array-sort":"7jbLD","../internals/engine-ff-version":"dHIKV","../internals/engine-is-ie-or-edge":"31PRF","../internals/engine-v8-version":"kH759","../internals/engine-webkit-version":"8jnCR"}],"feSen":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var toLength = require('../internals/to-length');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var speciesConstructor = require('../internals/species-constructor');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod('subarray', function subarray(begin, end) {
    var O = aTypedArray(this);
    var length = O.length;
    var beginIndex = toAbsoluteIndex(begin, length);
    return new (speciesConstructor(O, O.constructor))(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
});

},{"../internals/array-buffer-view-core":"c8IHE","../internals/to-length":"cJhjy","../internals/to-absolute-index":"lsGvn","../internals/species-constructor":"aTcmi"}],"7Hl6S":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var fails = require('../internals/fails');
var Int8Array1 = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;
var $slice = [].slice;
// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array1 && fails(function() {
    $toLocaleString.call(new Int8Array1(1));
});
var FORCED = fails(function() {
    return [
        1,
        2
    ].toLocaleString() != new Int8Array1([
        1,
        2
    ]).toLocaleString();
}) || !fails(function() {
    Int8Array1.prototype.toLocaleString.call([
        1,
        2
    ]);
});
// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
    return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
}, FORCED);

},{"../internals/global":"k6ng2","../internals/array-buffer-view-core":"c8IHE","../internals/fails":"9axhl"}],"8gni3":[function(require,module,exports) {
'use strict';
var exportTypedArrayMethod = require('../internals/array-buffer-view-core').exportTypedArrayMethod;
var fails = require('../internals/fails');
var global = require('../internals/global');
var Uint8Array1 = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array1 && Uint8Array1.prototype || {
};
var arrayToString = [].toString;
var arrayJoin = [].join;
if (fails(function() {
    arrayToString.call({
    });
})) arrayToString = function toString() {
    return arrayJoin.call(this);
};
var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;
// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);

},{"../internals/array-buffer-view-core":"c8IHE","../internals/fails":"9axhl","../internals/global":"k6ng2"}],"9FrFy":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var redefineAll = require('../internals/redefine-all');
var InternalMetadataModule = require('../internals/internal-metadata');
var collection = require('../internals/collection');
var collectionWeak = require('../internals/collection-weak');
var isObject = require('../internals/is-object');
var enforceIternalState = require('../internals/internal-state').enforce;
var NATIVE_WEAK_MAP = require('../internals/native-weak-map');
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible;
var InternalWeakMap;
var wrapper = function(init) {
    return function WeakMap1() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
};
// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak);
// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
    InternalMetadataModule.REQUIRED = true;
    var WeakMapPrototype = $WeakMap.prototype;
    var nativeDelete = WeakMapPrototype['delete'];
    var nativeHas = WeakMapPrototype.has;
    var nativeGet = WeakMapPrototype.get;
    var nativeSet = WeakMapPrototype.set;
    redefineAll(WeakMapPrototype, {
        'delete': function(key) {
            if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeDelete.call(this, key) || state.frozen['delete'](key);
            }
            return nativeDelete.call(this, key);
        },
        has: function has(key) {
            if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeHas.call(this, key) || state.frozen.has(key);
            }
            return nativeHas.call(this, key);
        },
        get: function get(key) {
            if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
            }
            return nativeGet.call(this, key);
        },
        set: function set(key, value) {
            if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
            } else nativeSet.call(this, key, value);
            return this;
        }
    });
}

},{"../internals/global":"k6ng2","../internals/redefine-all":"hfrn6","../internals/internal-metadata":"5LG15","../internals/collection":"hmxvt","../internals/collection-weak":"4bKC3","../internals/is-object":"55UvG","../internals/internal-state":"6IhmE","../internals/native-weak-map":"hJ4dV"}],"4bKC3":[function(require,module,exports) {
'use strict';
var redefineAll = require('../internals/redefine-all');
var getWeakData = require('../internals/internal-metadata').getWeakData;
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var anInstance = require('../internals/an-instance');
var iterate = require('../internals/iterate');
var ArrayIterationModule = require('../internals/array-iteration');
var $has = require('../internals/has');
var InternalStateModule = require('../internals/internal-state');
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var id = 0;
// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(store) {
    return store.frozen || (store.frozen = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function() {
    this.entries = [];
};
var findUncaughtFrozen = function(store, key) {
    return find(store.entries, function(it) {
        return it[0] === key;
    });
};
UncaughtFrozenStore.prototype = {
    get: function(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
    },
    has: function(key) {
        return !!findUncaughtFrozen(this, key);
    },
    set: function(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;
        else this.entries.push([
            key,
            value
        ]);
    },
    'delete': function(key) {
        var index = findIndex(this.entries, function(it) {
            return it[0] === key;
        });
        if (~index) this.entries.splice(index, 1);
        return !!~index;
    }
};
module.exports = {
    getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                id: id++,
                frozen: undefined
            });
            if (iterable != undefined) iterate(iterable, that[ADDER], {
                that: that,
                AS_ENTRIES: IS_MAP
            });
        });
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define = function(that, key, value) {
            var state = getInternalState(that);
            var data = getWeakData(anObject(key), true);
            if (data === true) uncaughtFrozenStore(state).set(key, value);
            else data[state.id] = value;
            return that;
        };
        redefineAll(C.prototype, {
            // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
            // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
            // https://tc39.es/ecma262/#sec-weakset.prototype.delete
            'delete': function(key) {
                var state = getInternalState(this);
                if (!isObject(key)) return false;
                var data = getWeakData(key);
                if (data === true) return uncaughtFrozenStore(state)['delete'](key);
                return data && $has(data, state.id) && delete data[state.id];
            },
            // `{ WeakMap, WeakSet }.prototype.has(key)` methods
            // https://tc39.es/ecma262/#sec-weakmap.prototype.has
            // https://tc39.es/ecma262/#sec-weakset.prototype.has
            has: function has(key) {
                var state = getInternalState(this);
                if (!isObject(key)) return false;
                var data = getWeakData(key);
                if (data === true) return uncaughtFrozenStore(state).has(key);
                return data && $has(data, state.id);
            }
        });
        redefineAll(C.prototype, IS_MAP ? {
            // `WeakMap.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-weakmap.prototype.get
            get: function get(key) {
                var state = getInternalState(this);
                if (isObject(key)) {
                    var data = getWeakData(key);
                    if (data === true) return uncaughtFrozenStore(state).get(key);
                    return data ? data[state.id] : undefined;
                }
            },
            // `WeakMap.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-weakmap.prototype.set
            set: function set(key, value) {
                return define(this, key, value);
            }
        } : {
            // `WeakSet.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-weakset.prototype.add
            add: function add(value) {
                return define(this, value, true);
            }
        });
        return C;
    }
};

},{"../internals/redefine-all":"hfrn6","../internals/internal-metadata":"5LG15","../internals/an-object":"Q1KxM","../internals/is-object":"55UvG","../internals/an-instance":"i7zHZ","../internals/iterate":"21SEy","../internals/array-iteration":"gE5VF","../internals/has":"234Va","../internals/internal-state":"6IhmE"}],"gkls7":[function(require,module,exports) {
'use strict';
var collection = require('../internals/collection');
var collectionWeak = require('../internals/collection-weak');
// `WeakSet` constructor
// https://tc39.es/ecma262/#sec-weakset-constructor
collection('WeakSet', function(init) {
    return function WeakSet1() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
}, collectionWeak);

},{"../internals/collection":"hmxvt","../internals/collection-weak":"4bKC3"}],"7AGga":[function(require,module,exports) {
var global = require('../internals/global');
var DOMIterables = require('../internals/dom-iterables');
var forEach = require('../internals/array-for-each');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
for(var COLLECTION_NAME in DOMIterables){
    var Collection = global[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
        createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
        CollectionPrototype.forEach = forEach;
    }
}

},{"../internals/global":"k6ng2","../internals/dom-iterables":"iC0X2","../internals/array-for-each":"f2N7h","../internals/create-non-enumerable-property":"57sB9"}],"iC0X2":[function(require,module,exports) {
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
};

},{}],"5Cg8T":[function(require,module,exports) {
var global = require('../internals/global');
var DOMIterables = require('../internals/dom-iterables');
var ArrayIteratorMethods = require('../modules/es.array.iterator');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;
for(var COLLECTION_NAME in DOMIterables){
    var Collection = global[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
        } catch (error) {
            CollectionPrototype[ITERATOR] = ArrayValues;
        }
        if (!CollectionPrototype[TO_STRING_TAG]) createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
        if (DOMIterables[COLLECTION_NAME]) for(var METHOD_NAME in ArrayIteratorMethods){
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
                createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
            } catch (error) {
                CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
            }
        }
    }
}

},{"../internals/global":"k6ng2","../internals/dom-iterables":"iC0X2","../modules/es.array.iterator":"2Kz5u","../internals/create-non-enumerable-property":"57sB9","../internals/well-known-symbol":"8llxS"}],"6IrlO":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var task = require('../internals/task');
var FORCED = !global.setImmediate || !global.clearImmediate;
// http://w3c.github.io/setImmediate/
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: FORCED
}, {
    // `setImmediate` method
    // http://w3c.github.io/setImmediate/#si-setImmediate
    setImmediate: task.set,
    // `clearImmediate` method
    // http://w3c.github.io/setImmediate/#si-clearImmediate
    clearImmediate: task.clear
});

},{"../internals/export":"jPesG","../internals/global":"k6ng2","../internals/task":"2Bu4m"}],"keeJI":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var microtask = require('../internals/microtask');
var IS_NODE = require('../internals/engine-is-node');
var process = global.process;
// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
$({
    global: true,
    enumerable: true,
    noTargetGet: true
}, {
    queueMicrotask: function queueMicrotask(fn) {
        var domain = IS_NODE && process.domain;
        microtask(domain ? domain.bind(fn) : fn);
    }
});

},{"../internals/export":"jPesG","../internals/global":"k6ng2","../internals/microtask":"3rBDf","../internals/engine-is-node":"aXzPf"}],"7qztn":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function(scheduler) {
    return function(handler, timeout/* , ...arguments */ ) {
        var boundArgs = arguments.length > 2;
        var args = boundArgs ? slice.call(arguments, 2) : undefined;
        return scheduler(boundArgs ? function() {
            // eslint-disable-next-line no-new-func -- spec requirement
            (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
        } : handler, timeout);
    };
};
// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({
    global: true,
    bind: true,
    forced: MSIE
}, {
    // `setTimeout` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    setTimeout: wrap(global.setTimeout),
    // `setInterval` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    setInterval: wrap(global.setInterval)
});

},{"../internals/export":"jPesG","../internals/global":"k6ng2","../internals/engine-user-agent":"2dJJC"}],"6IcGS":[function(require,module,exports) {
'use strict';
// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
require('../modules/es.string.iterator');
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var USE_NATIVE_URL = require('../internals/native-url');
var global = require('../internals/global');
var defineProperties = require('../internals/object-define-properties');
var redefine = require('../internals/redefine');
var anInstance = require('../internals/an-instance');
var has = require('../internals/has');
var assign = require('../internals/object-assign');
var arrayFrom = require('../internals/array-from');
var codeAt = require('../internals/string-multibyte').codeAt;
var toASCII = require('../internals/string-punycode-to-ascii');
var setToStringTag = require('../internals/set-to-string-tag');
var URLSearchParamsModule = require('../modules/web.url-search-params');
var InternalStateModule = require('../internals/internal-state');
var NativeURL = global.URL;
var URLSearchParams1 = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;
var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';
var ALPHA = /[A-Za-z]/;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
/* eslint-disable no-control-regex -- safe */ var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:?@[\\]]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:?@[\\]]/;
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable no-control-regex -- safe */ var EOF;
var parseHost = function(url, input) {
    var result, codePoints, index;
    if (input.charAt(0) == '[') {
        if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
        result = parseIPv6(input.slice(1, -1));
        if (!result) return INVALID_HOST;
        url.host = result;
    // opaque host
    } else if (!isSpecial(url)) {
        if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
        result = '';
        codePoints = arrayFrom(input);
        for(index = 0; index < codePoints.length; index++)result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
        url.host = result;
    } else {
        input = toASCII(input);
        if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
        result = parseIPv4(input);
        if (result === null) return INVALID_HOST;
        url.host = result;
    }
};
var parseIPv4 = function(input) {
    var parts = input.split('.');
    var partsLength, numbers, index, part, radix, number, ipv4;
    if (parts.length && parts[parts.length - 1] == '') parts.pop();
    partsLength = parts.length;
    if (partsLength > 4) return input;
    numbers = [];
    for(index = 0; index < partsLength; index++){
        part = parts[index];
        if (part == '') return input;
        radix = 10;
        if (part.length > 1 && part.charAt(0) == '0') {
            radix = HEX_START.test(part) ? 16 : 8;
            part = part.slice(radix == 8 ? 1 : 2);
        }
        if (part === '') number = 0;
        else {
            if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
            number = parseInt(part, radix);
        }
        numbers.push(number);
    }
    for(index = 0; index < partsLength; index++){
        number = numbers[index];
        if (index == partsLength - 1) {
            if (number >= pow(256, 5 - partsLength)) return null;
        } else if (number > 255) return null;
    }
    ipv4 = numbers.pop();
    for(index = 0; index < numbers.length; index++)ipv4 += numbers[index] * pow(256, 3 - index);
    return ipv4;
};
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function(input) {
    var address = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    var pieceIndex = 0;
    var compress = null;
    var pointer = 0;
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
    var char = function() {
        return input.charAt(pointer);
    };
    if (char() == ':') {
        if (input.charAt(1) != ':') return;
        pointer += 2;
        pieceIndex++;
        compress = pieceIndex;
    }
    while(char()){
        if (pieceIndex == 8) return;
        if (char() == ':') {
            if (compress !== null) return;
            pointer++;
            pieceIndex++;
            compress = pieceIndex;
            continue;
        }
        value = length = 0;
        while(length < 4 && HEX.test(char())){
            value = value * 16 + parseInt(char(), 16);
            pointer++;
            length++;
        }
        if (char() == '.') {
            if (length == 0) return;
            pointer -= length;
            if (pieceIndex > 6) return;
            numbersSeen = 0;
            while(char()){
                ipv4Piece = null;
                if (numbersSeen > 0) {
                    if (char() == '.' && numbersSeen < 4) pointer++;
                    else return;
                }
                if (!DIGIT.test(char())) return;
                while(DIGIT.test(char())){
                    number = parseInt(char(), 10);
                    if (ipv4Piece === null) ipv4Piece = number;
                    else if (ipv4Piece == 0) return;
                    else ipv4Piece = ipv4Piece * 10 + number;
                    if (ipv4Piece > 255) return;
                    pointer++;
                }
                address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
                numbersSeen++;
                if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
            }
            if (numbersSeen != 4) return;
            break;
        } else if (char() == ':') {
            pointer++;
            if (!char()) return;
        } else if (char()) return;
        address[pieceIndex++] = value;
    }
    if (compress !== null) {
        swaps = pieceIndex - compress;
        pieceIndex = 7;
        while(pieceIndex != 0 && swaps > 0){
            swap = address[pieceIndex];
            address[pieceIndex--] = address[compress + swaps - 1];
            address[compress + --swaps] = swap;
        }
    } else if (pieceIndex != 8) return;
    return address;
};
var findLongestZeroSequence = function(ipv6) {
    var maxIndex = null;
    var maxLength = 1;
    var currStart = null;
    var currLength = 0;
    var index = 0;
    for(; index < 8; index++)if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
            maxIndex = currStart;
            maxLength = currLength;
        }
        currStart = null;
        currLength = 0;
    } else {
        if (currStart === null) currStart = index;
        ++currLength;
    }
    if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
    }
    return maxIndex;
};
var serializeHost = function(host) {
    var result, index, compress, ignore0;
    // ipv4
    if (typeof host == 'number') {
        result = [];
        for(index = 0; index < 4; index++){
            result.unshift(host % 256);
            host = floor(host / 256);
        }
        return result.join('.');
    // ipv6
    } else if (typeof host == 'object') {
        result = '';
        compress = findLongestZeroSequence(host);
        for(index = 0; index < 8; index++){
            if (ignore0 && host[index] === 0) continue;
            if (ignore0) ignore0 = false;
            if (compress === index) {
                result += index ? ':' : '::';
                ignore0 = true;
            } else {
                result += host[index].toString(16);
                if (index < 7) result += ':';
            }
        }
        return '[' + result + ']';
    }
    return host;
};
var C0ControlPercentEncodeSet = {
};
var fragmentPercentEncodeSet = assign({
}, C0ControlPercentEncodeSet, {
    ' ': 1,
    '"': 1,
    '<': 1,
    '>': 1,
    '`': 1
});
var pathPercentEncodeSet = assign({
}, fragmentPercentEncodeSet, {
    '#': 1,
    '?': 1,
    '{': 1,
    '}': 1
});
var userinfoPercentEncodeSet = assign({
}, pathPercentEncodeSet, {
    '/': 1,
    ':': 1,
    ';': 1,
    '=': 1,
    '@': 1,
    '[': 1,
    '\\': 1,
    ']': 1,
    '^': 1,
    '|': 1
});
var percentEncode = function(char, set) {
    var code = codeAt(char, 0);
    return code > 32 && code < 127 && !has(set, char) ? char : encodeURIComponent(char);
};
var specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
var isSpecial = function(url) {
    return has(specialSchemes, url.scheme);
};
var includesCredentials = function(url) {
    return url.username != '' || url.password != '';
};
var cannotHaveUsernamePasswordPort = function(url) {
    return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};
var isWindowsDriveLetter = function(string, normalized) {
    var second;
    return string.length == 2 && ALPHA.test(string.charAt(0)) && ((second = string.charAt(1)) == ':' || !normalized && second == '|');
};
var startsWithWindowsDriveLetter = function(string) {
    var third;
    return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (string.length == 2 || (third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#');
};
var shortenURLsPath = function(url) {
    var path = url.path;
    var pathSize = path.length;
    if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) path.pop();
};
var isSingleDot = function(segment) {
    return segment === '.' || segment.toLowerCase() === '%2e';
};
var isDoubleDot = function(segment) {
    segment = segment.toLowerCase();
    return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};
// States:
var SCHEME_START = {
};
var SCHEME = {
};
var NO_SCHEME = {
};
var SPECIAL_RELATIVE_OR_AUTHORITY = {
};
var PATH_OR_AUTHORITY = {
};
var RELATIVE = {
};
var RELATIVE_SLASH = {
};
var SPECIAL_AUTHORITY_SLASHES = {
};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {
};
var AUTHORITY = {
};
var HOST = {
};
var HOSTNAME = {
};
var PORT = {
};
var FILE = {
};
var FILE_SLASH = {
};
var FILE_HOST = {
};
var PATH_START = {
};
var PATH = {
};
var CANNOT_BE_A_BASE_URL_PATH = {
};
var QUERY = {
};
var FRAGMENT = {
};
// eslint-disable-next-line max-statements -- TODO
var parseURL = function(url, input, stateOverride, base) {
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, char, bufferCodePoints, failure;
    if (!stateOverride) {
        url.scheme = '';
        url.username = '';
        url.password = '';
        url.host = null;
        url.port = null;
        url.path = [];
        url.query = null;
        url.fragment = null;
        url.cannotBeABaseURL = false;
        input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
    }
    input = input.replace(TAB_AND_NEW_LINE, '');
    codePoints = arrayFrom(input);
    while(pointer <= codePoints.length){
        char = codePoints[pointer];
        switch(state){
            case SCHEME_START:
                if (char && ALPHA.test(char)) {
                    buffer += char.toLowerCase();
                    state = SCHEME;
                } else if (!stateOverride) {
                    state = NO_SCHEME;
                    continue;
                } else return INVALID_SCHEME;
                break;
            case SCHEME:
                if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) buffer += char.toLowerCase();
                else if (char == ':') {
                    if (stateOverride && (isSpecial(url) != has(specialSchemes, buffer) || buffer == 'file' && (includesCredentials(url) || url.port !== null) || url.scheme == 'file' && !url.host)) return;
                    url.scheme = buffer;
                    if (stateOverride) {
                        if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
                        return;
                    }
                    buffer = '';
                    if (url.scheme == 'file') state = FILE;
                    else if (isSpecial(url) && base && base.scheme == url.scheme) state = SPECIAL_RELATIVE_OR_AUTHORITY;
                    else if (isSpecial(url)) state = SPECIAL_AUTHORITY_SLASHES;
                    else if (codePoints[pointer + 1] == '/') {
                        state = PATH_OR_AUTHORITY;
                        pointer++;
                    } else {
                        url.cannotBeABaseURL = true;
                        url.path.push('');
                        state = CANNOT_BE_A_BASE_URL_PATH;
                    }
                } else if (!stateOverride) {
                    buffer = '';
                    state = NO_SCHEME;
                    pointer = 0;
                    continue;
                } else return INVALID_SCHEME;
                break;
            case NO_SCHEME:
                if (!base || base.cannotBeABaseURL && char != '#') return INVALID_SCHEME;
                if (base.cannotBeABaseURL && char == '#') {
                    url.scheme = base.scheme;
                    url.path = base.path.slice();
                    url.query = base.query;
                    url.fragment = '';
                    url.cannotBeABaseURL = true;
                    state = FRAGMENT;
                    break;
                }
                state = base.scheme == 'file' ? FILE : RELATIVE;
                continue;
            case SPECIAL_RELATIVE_OR_AUTHORITY:
                if (char == '/' && codePoints[pointer + 1] == '/') {
                    state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                    pointer++;
                } else {
                    state = RELATIVE;
                    continue;
                }
                break;
            case PATH_OR_AUTHORITY:
                if (char == '/') {
                    state = AUTHORITY;
                    break;
                } else {
                    state = PATH;
                    continue;
                }
            case RELATIVE:
                url.scheme = base.scheme;
                if (char == EOF) {
                    url.username = base.username;
                    url.password = base.password;
                    url.host = base.host;
                    url.port = base.port;
                    url.path = base.path.slice();
                    url.query = base.query;
                } else if (char == '/' || char == '\\' && isSpecial(url)) state = RELATIVE_SLASH;
                else if (char == '?') {
                    url.username = base.username;
                    url.password = base.password;
                    url.host = base.host;
                    url.port = base.port;
                    url.path = base.path.slice();
                    url.query = '';
                    state = QUERY;
                } else if (char == '#') {
                    url.username = base.username;
                    url.password = base.password;
                    url.host = base.host;
                    url.port = base.port;
                    url.path = base.path.slice();
                    url.query = base.query;
                    url.fragment = '';
                    state = FRAGMENT;
                } else {
                    url.username = base.username;
                    url.password = base.password;
                    url.host = base.host;
                    url.port = base.port;
                    url.path = base.path.slice();
                    url.path.pop();
                    state = PATH;
                    continue;
                }
                break;
            case RELATIVE_SLASH:
                if (isSpecial(url) && (char == '/' || char == '\\')) state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                else if (char == '/') state = AUTHORITY;
                else {
                    url.username = base.username;
                    url.password = base.password;
                    url.host = base.host;
                    url.port = base.port;
                    state = PATH;
                    continue;
                }
                break;
            case SPECIAL_AUTHORITY_SLASHES:
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
                pointer++;
                break;
            case SPECIAL_AUTHORITY_IGNORE_SLASHES:
                if (char != '/' && char != '\\') {
                    state = AUTHORITY;
                    continue;
                }
                break;
            case AUTHORITY:
                if (char == '@') {
                    if (seenAt) buffer = '%40' + buffer;
                    seenAt = true;
                    bufferCodePoints = arrayFrom(buffer);
                    for(var i = 0; i < bufferCodePoints.length; i++){
                        var codePoint = bufferCodePoints[i];
                        if (codePoint == ':' && !seenPasswordToken) {
                            seenPasswordToken = true;
                            continue;
                        }
                        var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                        if (seenPasswordToken) url.password += encodedCodePoints;
                        else url.username += encodedCodePoints;
                    }
                    buffer = '';
                } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
                    if (seenAt && buffer == '') return INVALID_AUTHORITY;
                    pointer -= arrayFrom(buffer).length + 1;
                    buffer = '';
                    state = HOST;
                } else buffer += char;
                break;
            case HOST:
            case HOSTNAME:
                if (stateOverride && url.scheme == 'file') {
                    state = FILE_HOST;
                    continue;
                } else if (char == ':' && !seenBracket) {
                    if (buffer == '') return INVALID_HOST;
                    failure = parseHost(url, buffer);
                    if (failure) return failure;
                    buffer = '';
                    state = PORT;
                    if (stateOverride == HOSTNAME) return;
                } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
                    if (isSpecial(url) && buffer == '') return INVALID_HOST;
                    if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
                    failure = parseHost(url, buffer);
                    if (failure) return failure;
                    buffer = '';
                    state = PATH_START;
                    if (stateOverride) return;
                    continue;
                } else {
                    if (char == '[') seenBracket = true;
                    else if (char == ']') seenBracket = false;
                    buffer += char;
                }
                break;
            case PORT:
                if (DIGIT.test(char)) buffer += char;
                else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url) || stateOverride) {
                    if (buffer != '') {
                        var port = parseInt(buffer, 10);
                        if (port > 65535) return INVALID_PORT;
                        url.port = isSpecial(url) && port === specialSchemes[url.scheme] ? null : port;
                        buffer = '';
                    }
                    if (stateOverride) return;
                    state = PATH_START;
                    continue;
                } else return INVALID_PORT;
                break;
            case FILE:
                url.scheme = 'file';
                if (char == '/' || char == '\\') state = FILE_SLASH;
                else if (base && base.scheme == 'file') {
                    if (char == EOF) {
                        url.host = base.host;
                        url.path = base.path.slice();
                        url.query = base.query;
                    } else if (char == '?') {
                        url.host = base.host;
                        url.path = base.path.slice();
                        url.query = '';
                        state = QUERY;
                    } else if (char == '#') {
                        url.host = base.host;
                        url.path = base.path.slice();
                        url.query = base.query;
                        url.fragment = '';
                        state = FRAGMENT;
                    } else {
                        if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                            url.host = base.host;
                            url.path = base.path.slice();
                            shortenURLsPath(url);
                        }
                        state = PATH;
                        continue;
                    }
                } else {
                    state = PATH;
                    continue;
                }
                break;
            case FILE_SLASH:
                if (char == '/' || char == '\\') {
                    state = FILE_HOST;
                    break;
                }
                if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                    if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
                    else url.host = base.host;
                }
                state = PATH;
                continue;
            case FILE_HOST:
                if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
                    if (!stateOverride && isWindowsDriveLetter(buffer)) state = PATH;
                    else if (buffer == '') {
                        url.host = '';
                        if (stateOverride) return;
                        state = PATH_START;
                    } else {
                        failure = parseHost(url, buffer);
                        if (failure) return failure;
                        if (url.host == 'localhost') url.host = '';
                        if (stateOverride) return;
                        buffer = '';
                        state = PATH_START;
                    }
                    continue;
                } else buffer += char;
                break;
            case PATH_START:
                if (isSpecial(url)) {
                    state = PATH;
                    if (char != '/' && char != '\\') continue;
                } else if (!stateOverride && char == '?') {
                    url.query = '';
                    state = QUERY;
                } else if (!stateOverride && char == '#') {
                    url.fragment = '';
                    state = FRAGMENT;
                } else if (char != EOF) {
                    state = PATH;
                    if (char != '/') continue;
                }
                break;
            case PATH:
                if (char == EOF || char == '/' || char == '\\' && isSpecial(url) || !stateOverride && (char == '?' || char == '#')) {
                    if (isDoubleDot(buffer)) {
                        shortenURLsPath(url);
                        if (char != '/' && !(char == '\\' && isSpecial(url))) url.path.push('');
                    } else if (isSingleDot(buffer)) {
                        if (char != '/' && !(char == '\\' && isSpecial(url))) url.path.push('');
                    } else {
                        if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                            if (url.host) url.host = '';
                            buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
                        }
                        url.path.push(buffer);
                    }
                    buffer = '';
                    if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) while(url.path.length > 1 && url.path[0] === '')url.path.shift();
                    if (char == '?') {
                        url.query = '';
                        state = QUERY;
                    } else if (char == '#') {
                        url.fragment = '';
                        state = FRAGMENT;
                    }
                } else buffer += percentEncode(char, pathPercentEncodeSet);
                break;
            case CANNOT_BE_A_BASE_URL_PATH:
                if (char == '?') {
                    url.query = '';
                    state = QUERY;
                } else if (char == '#') {
                    url.fragment = '';
                    state = FRAGMENT;
                } else if (char != EOF) url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
                break;
            case QUERY:
                if (!stateOverride && char == '#') {
                    url.fragment = '';
                    state = FRAGMENT;
                } else if (char != EOF) {
                    if (char == "'" && isSpecial(url)) url.query += '%27';
                    else if (char == '#') url.query += '%23';
                    else url.query += percentEncode(char, C0ControlPercentEncodeSet);
                }
                break;
            case FRAGMENT:
                if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
                break;
        }
        pointer++;
    }
};
// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL1(url/* , base */ ) {
    var that = anInstance(this, URLConstructor, 'URL');
    var base = arguments.length > 1 ? arguments[1] : undefined;
    var urlString = String(url);
    var state = setInternalState(that, {
        type: 'URL'
    });
    var baseState, failure;
    if (base !== undefined) {
        if (base instanceof URLConstructor) baseState = getInternalURLState(base);
        else {
            failure = parseURL(baseState = {
            }, String(base));
            if (failure) throw TypeError(failure);
        }
    }
    failure = parseURL(state, urlString, null, baseState);
    if (failure) throw TypeError(failure);
    var searchParams = state.searchParams = new URLSearchParams1();
    var searchParamsState = getInternalSearchParamsState(searchParams);
    searchParamsState.updateSearchParams(state.query);
    searchParamsState.updateURL = function() {
        state.query = String(searchParams) || null;
    };
    if (!DESCRIPTORS) {
        that.href = serializeURL.call(that);
        that.origin = getOrigin.call(that);
        that.protocol = getProtocol.call(that);
        that.username = getUsername.call(that);
        that.password = getPassword.call(that);
        that.host = getHost.call(that);
        that.hostname = getHostname.call(that);
        that.port = getPort.call(that);
        that.pathname = getPathname.call(that);
        that.search = getSearch.call(that);
        that.searchParams = getSearchParams.call(that);
        that.hash = getHash.call(that);
    }
};
var URLPrototype = URLConstructor.prototype;
var serializeURL = function() {
    var url = getInternalURLState(this);
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
        output += '//';
        if (includesCredentials(url)) output += username + (password ? ':' + password : '') + '@';
        output += serializeHost(host);
        if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
};
var getOrigin = function() {
    var url = getInternalURLState(this);
    var scheme = url.scheme;
    var port = url.port;
    if (scheme == 'blob') try {
        return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
        return 'null';
    }
    if (scheme == 'file' || !isSpecial(url)) return 'null';
    return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};
var getProtocol = function() {
    return getInternalURLState(this).scheme + ':';
};
var getUsername = function() {
    return getInternalURLState(this).username;
};
var getPassword = function() {
    return getInternalURLState(this).password;
};
var getHost = function() {
    var url = getInternalURLState(this);
    var host = url.host;
    var port = url.port;
    return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
};
var getHostname = function() {
    var host = getInternalURLState(this).host;
    return host === null ? '' : serializeHost(host);
};
var getPort = function() {
    var port = getInternalURLState(this).port;
    return port === null ? '' : String(port);
};
var getPathname = function() {
    var url = getInternalURLState(this);
    var path = url.path;
    return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};
var getSearch = function() {
    var query = getInternalURLState(this).query;
    return query ? '?' + query : '';
};
var getSearchParams = function() {
    return getInternalURLState(this).searchParams;
};
var getHash = function() {
    var fragment = getInternalURLState(this).fragment;
    return fragment ? '#' + fragment : '';
};
var accessorDescriptor = function(getter, setter) {
    return {
        get: getter,
        set: setter,
        configurable: true,
        enumerable: true
    };
};
if (DESCRIPTORS) defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function(href) {
        var url = getInternalURLState(this);
        var urlString = String(href);
        var failure = parseURL(url, urlString);
        if (failure) throw TypeError(failure);
        getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function(protocol) {
        var url = getInternalURLState(this);
        parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function(username) {
        var url = getInternalURLState(this);
        var codePoints = arrayFrom(String(username));
        if (cannotHaveUsernamePasswordPort(url)) return;
        url.username = '';
        for(var i = 0; i < codePoints.length; i++)url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function(password) {
        var url = getInternalURLState(this);
        var codePoints = arrayFrom(String(password));
        if (cannotHaveUsernamePasswordPort(url)) return;
        url.password = '';
        for(var i = 0; i < codePoints.length; i++)url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function(host) {
        var url = getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function(hostname) {
        var url = getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function(port) {
        var url = getInternalURLState(this);
        if (cannotHaveUsernamePasswordPort(url)) return;
        port = String(port);
        if (port == '') url.port = null;
        else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function(pathname) {
        var url = getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        url.path = [];
        parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function(search) {
        var url = getInternalURLState(this);
        search = String(search);
        if (search == '') url.query = null;
        else {
            if ('?' == search.charAt(0)) search = search.slice(1);
            url.query = '';
            parseURL(url, search, QUERY);
        }
        getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function(hash) {
        var url = getInternalURLState(this);
        hash = String(hash);
        if (hash == '') {
            url.fragment = null;
            return;
        }
        if ('#' == hash.charAt(0)) hash = hash.slice(1);
        url.fragment = '';
        parseURL(url, hash, FRAGMENT);
    })
});
// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
    return serializeURL.call(this);
}, {
    enumerable: true
});
// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
    return serializeURL.call(this);
}, {
    enumerable: true
});
if (NativeURL) {
    var nativeCreateObjectURL = NativeURL.createObjectURL;
    var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
    // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
        return nativeCreateObjectURL.apply(NativeURL, arguments);
    });
    // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
        return nativeRevokeObjectURL.apply(NativeURL, arguments);
    });
}
setToStringTag(URLConstructor, 'URL');
$({
    global: true,
    forced: !USE_NATIVE_URL,
    sham: !DESCRIPTORS
}, {
    URL: URLConstructor
});

},{"../modules/es.string.iterator":"2MfvQ","../internals/export":"jPesG","../internals/descriptors":"b4IwU","../internals/native-url":"4N0Q0","../internals/global":"k6ng2","../internals/object-define-properties":"jwDEL","../internals/redefine":"5ao1i","../internals/an-instance":"i7zHZ","../internals/has":"234Va","../internals/object-assign":"bvMGe","../internals/array-from":"6V8NR","../internals/string-multibyte":"1GyQs","../internals/string-punycode-to-ascii":"3rdLE","../internals/set-to-string-tag":"353PM","../modules/web.url-search-params":"dJ5g4","../internals/internal-state":"6IhmE"}],"4N0Q0":[function(require,module,exports) {
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var ITERATOR = wellKnownSymbol('iterator');
module.exports = !fails(function() {
    var url = new URL('b?a=1&b=2&c=3', 'http://a');
    var searchParams = url.searchParams;
    var result = '';
    url.pathname = 'c%20d';
    searchParams.forEach(function(value, key) {
        searchParams['delete']('b');
        result += key + value;
    });
    return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR] || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' || new URL('http://тест').host !== 'xn--e1aybc' || new URL('http://a#б').hash !== '#%D0%B1' || result !== 'a1c3' || new URL('http://x', undefined).host !== 'x';
});

},{"../internals/fails":"9axhl","../internals/well-known-symbol":"8llxS","../internals/is-pure":"hQb5L"}],"3rdLE":[function(require,module,exports) {
'use strict';
// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;
/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */ var ucs2decode = function(string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    while(counter < length){
        var value = string.charCodeAt(counter++);
        if (value >= 55296 && value <= 56319 && counter < length) {
            // It's a high surrogate, and there is a next character.
            var extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
            else {
                // It's an unmatched surrogate; only append this code unit, in case the
                // next code unit is the high surrogate of a surrogate pair.
                output.push(value);
                counter--;
            }
        } else output.push(value);
    }
    return output;
};
/**
 * Converts a digit/integer into a basic code point.
 */ var digitToBasic = function(digit) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26);
};
/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */ var adapt = function(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for(; delta > baseMinusTMin * tMax >> 1; k += base)delta = floor(delta / baseMinusTMin);
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};
/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */ // eslint-disable-next-line max-statements -- TODO
var encode = function(input) {
    var output = [];
    // Convert the input in UCS-2 to an array of Unicode code points.
    input = ucs2decode(input);
    // Cache the length.
    var inputLength = input.length;
    // Initialize the state.
    var n = initialN;
    var delta = 0;
    var bias = initialBias;
    var i, currentValue;
    // Handle the basic code points.
    for(i = 0; i < input.length; i++){
        currentValue = input[i];
        if (currentValue < 128) output.push(stringFromCharCode(currentValue));
    }
    var basicLength = output.length; // number of basic code points.
    var handledCPCount = basicLength; // number of code points that have been handled;
    // Finish the basic string with a delimiter unless it's empty.
    if (basicLength) output.push(delimiter);
    // Main encoding loop:
    while(handledCPCount < inputLength){
        // All non-basic code points < n have been handled already. Find the next larger one:
        var m = maxInt;
        for(i = 0; i < input.length; i++){
            currentValue = input[i];
            if (currentValue >= n && currentValue < m) m = currentValue;
        }
        // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
        var handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) throw RangeError(OVERFLOW_ERROR);
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        for(i = 0; i < input.length; i++){
            currentValue = input[i];
            if (currentValue < n && (++delta) > maxInt) throw RangeError(OVERFLOW_ERROR);
            if (currentValue == n) {
                // Represent delta as a generalized variable-length integer.
                var q = delta;
                for(var k = base;; k += base){
                    var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                    if (q < t) break;
                    var qMinusT = q - t;
                    var baseMinusT = base - t;
                    output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
                    q = floor(qMinusT / baseMinusT);
                }
                output.push(stringFromCharCode(digitToBasic(q)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                delta = 0;
                ++handledCPCount;
            }
        }
        ++delta;
        ++n;
    }
    return output.join('');
};
module.exports = function(input) {
    var encoded = [];
    var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
    var i, label;
    for(i = 0; i < labels.length; i++){
        label = labels[i];
        encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
    }
    return encoded.join('.');
};

},{}],"dJ5g4":[function(require,module,exports) {
'use strict';
// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
require('../modules/es.array.iterator');
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var USE_NATIVE_URL = require('../internals/native-url');
var redefine = require('../internals/redefine');
var redefineAll = require('../internals/redefine-all');
var setToStringTag = require('../internals/set-to-string-tag');
var createIteratorConstructor = require('../internals/create-iterator-constructor');
var InternalStateModule = require('../internals/internal-state');
var anInstance = require('../internals/an-instance');
var hasOwn = require('../internals/has');
var bind = require('../internals/function-bind-context');
var classof = require('../internals/classof');
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var getIterator = require('../internals/get-iterator');
var getIteratorMethod = require('../internals/get-iterator-method');
var wellKnownSymbol = require('../internals/well-known-symbol');
var $fetch = getBuiltIn('fetch');
var Headers1 = getBuiltIn('Headers');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
var plus = /\+/g;
var sequences = Array(4);
var percentSequence = function(bytes) {
    return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};
var percentDecode = function(sequence) {
    try {
        return decodeURIComponent(sequence);
    } catch (error) {
        return sequence;
    }
};
var deserialize = function(it) {
    var result = it.replace(plus, ' ');
    var bytes = 4;
    try {
        return decodeURIComponent(result);
    } catch (error) {
        while(bytes)result = result.replace(percentSequence(bytes--), percentDecode);
        return result;
    }
};
var find = /[!'()~]|%20/g;
var replace = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
};
var replacer = function(match) {
    return replace[match];
};
var serialize = function(it) {
    return encodeURIComponent(it).replace(find, replacer);
};
var parseSearchParams = function(result, query) {
    if (query) {
        var attributes = query.split('&');
        var index = 0;
        var attribute, entry;
        while(index < attributes.length){
            attribute = attributes[index++];
            if (attribute.length) {
                entry = attribute.split('=');
                result.push({
                    key: deserialize(entry.shift()),
                    value: deserialize(entry.join('='))
                });
            }
        }
    }
};
var updateSearchParams = function(query) {
    this.entries.length = 0;
    parseSearchParams(this.entries, query);
};
var validateArgumentsLength = function(passed, required) {
    if (passed < required) throw TypeError('Not enough arguments');
};
var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
    setInternalState(this, {
        type: URL_SEARCH_PARAMS_ITERATOR,
        iterator: getIterator(getInternalParamsState(params).entries),
        kind: kind
    });
}, 'Iterator', function next() {
    var state = getInternalIteratorState(this);
    var kind = state.kind;
    var step = state.iterator.next();
    var entry = step.value;
    if (!step.done) step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [
        entry.key,
        entry.value
    ];
    return step;
});
// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams1() {
    anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    var that = this;
    var entries = [];
    var iteratorMethod, iterator, next1, step, entryIterator, entryNext, first, second, key;
    setInternalState(that, {
        type: URL_SEARCH_PARAMS,
        entries: entries,
        updateURL: function() {
        },
        updateSearchParams: updateSearchParams
    });
    if (init !== undefined) {
        if (isObject(init)) {
            iteratorMethod = getIteratorMethod(init);
            if (typeof iteratorMethod === 'function') {
                iterator = iteratorMethod.call(init);
                next1 = iterator.next;
                while(!(step = next1.call(iterator)).done){
                    entryIterator = getIterator(anObject(step.value));
                    entryNext = entryIterator.next;
                    if ((first = entryNext.call(entryIterator)).done || (second = entryNext.call(entryIterator)).done || !entryNext.call(entryIterator).done) throw TypeError('Expected sequence with length 2');
                    entries.push({
                        key: first.value + '',
                        value: second.value + ''
                    });
                }
            } else for(key in init)if (hasOwn(init, key)) entries.push({
                key: key,
                value: init[key] + ''
            });
        } else parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
};
var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
redefineAll(URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
        validateArgumentsLength(arguments.length, 2);
        var state = getInternalParamsState(this);
        state.entries.push({
            key: name + '',
            value: value + ''
        });
        state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function(name) {
        validateArgumentsLength(arguments.length, 1);
        var state = getInternalParamsState(this);
        var entries = state.entries;
        var key = name + '';
        var index = 0;
        while(index < entries.length)if (entries[index].key === key) entries.splice(index, 1);
        else index++;
        state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
        validateArgumentsLength(arguments.length, 1);
        var entries = getInternalParamsState(this).entries;
        var key = name + '';
        var index = 0;
        for(; index < entries.length; index++){
            if (entries[index].key === key) return entries[index].value;
        }
        return null;
    },
    // `URLSearchParams.prototype.getAll` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
    getAll: function getAll(name) {
        validateArgumentsLength(arguments.length, 1);
        var entries = getInternalParamsState(this).entries;
        var key = name + '';
        var result = [];
        var index = 0;
        for(; index < entries.length; index++)if (entries[index].key === key) result.push(entries[index].value);
        return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name) {
        validateArgumentsLength(arguments.length, 1);
        var entries = getInternalParamsState(this).entries;
        var key = name + '';
        var index = 0;
        while(index < entries.length){
            if (entries[index++].key === key) return true;
        }
        return false;
    },
    // `URLSearchParams.prototype.set` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
    set: function set(name, value) {
        validateArgumentsLength(arguments.length, 1);
        var state = getInternalParamsState(this);
        var entries = state.entries;
        var found = false;
        var key = name + '';
        var val = value + '';
        var index = 0;
        var entry;
        for(; index < entries.length; index++){
            entry = entries[index];
            if (entry.key === key) {
                if (found) entries.splice(index--, 1);
                else {
                    found = true;
                    entry.value = val;
                }
            }
        }
        if (!found) entries.push({
            key: key,
            value: val
        });
        state.updateURL();
    },
    // `URLSearchParams.prototype.sort` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
    sort: function sort() {
        var state = getInternalParamsState(this);
        var entries = state.entries;
        // Array#sort is not stable in some engines
        var slice = entries.slice();
        var entry, entriesIndex, sliceIndex;
        entries.length = 0;
        for(sliceIndex = 0; sliceIndex < slice.length; sliceIndex++){
            entry = slice[sliceIndex];
            for(entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++)if (entries[entriesIndex].key > entry.key) {
                entries.splice(entriesIndex, 0, entry);
                break;
            }
            if (entriesIndex === sliceIndex) entries.push(entry);
        }
        state.updateURL();
    },
    // `URLSearchParams.prototype.forEach` method
    forEach: function forEach(callback/* , thisArg */ ) {
        var entries = getInternalParamsState(this).entries;
        var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
        var index = 0;
        var entry;
        while(index < entries.length){
            entry = entries[index++];
            boundFunction(entry.value, entry.key, this);
        }
    },
    // `URLSearchParams.prototype.keys` method
    keys: function keys() {
        return new URLSearchParamsIterator(this, 'keys');
    },
    // `URLSearchParams.prototype.values` method
    values: function values() {
        return new URLSearchParamsIterator(this, 'values');
    },
    // `URLSearchParams.prototype.entries` method
    entries: function entries() {
        return new URLSearchParamsIterator(this, 'entries');
    }
}, {
    enumerable: true
});
// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);
// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
    var entries = getInternalParamsState(this).entries;
    var result = [];
    var index = 0;
    var entry;
    while(index < entries.length){
        entry = entries[index++];
        result.push(serialize(entry.key) + '=' + serialize(entry.value));
    }
    return result.join('&');
}, {
    enumerable: true
});
setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
$({
    global: true,
    forced: !USE_NATIVE_URL
}, {
    URLSearchParams: URLSearchParamsConstructor
});
// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers1 == 'function') $({
    global: true,
    enumerable: true,
    forced: true
}, {
    fetch: function fetch(input/* , init */ ) {
        var args = [
            input
        ];
        var init, body, headers;
        if (arguments.length > 1) {
            init = arguments[1];
            if (isObject(init)) {
                body = init.body;
                if (classof(body) === URL_SEARCH_PARAMS) {
                    headers = init.headers ? new Headers1(init.headers) : new Headers1();
                    if (!headers.has('content-type')) headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                    init = create(init, {
                        body: createPropertyDescriptor(0, String(body)),
                        headers: createPropertyDescriptor(0, headers)
                    });
                }
            }
            args.push(init);
        }
        return $fetch.apply(this, args);
    }
});
module.exports = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState
};

},{"../modules/es.array.iterator":"2Kz5u","../internals/export":"jPesG","../internals/get-built-in":"wFpZi","../internals/native-url":"4N0Q0","../internals/redefine":"5ao1i","../internals/redefine-all":"hfrn6","../internals/set-to-string-tag":"353PM","../internals/create-iterator-constructor":"cYz2A","../internals/internal-state":"6IhmE","../internals/an-instance":"i7zHZ","../internals/has":"234Va","../internals/function-bind-context":"3BONE","../internals/classof":"fGqVo","../internals/an-object":"Q1KxM","../internals/is-object":"55UvG","../internals/object-create":"2iitg","../internals/create-property-descriptor":"em69o","../internals/get-iterator":"kFWM7","../internals/get-iterator-method":"enI2H","../internals/well-known-symbol":"8llxS"}],"kFWM7":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var getIteratorMethod = require('../internals/get-iterator-method');
module.exports = function(it) {
    var iteratorMethod = getIteratorMethod(it);
    if (typeof iteratorMethod != 'function') throw TypeError(String(it) + ' is not iterable');
    return anObject(iteratorMethod.call(it));
};

},{"../internals/an-object":"Q1KxM","../internals/get-iterator-method":"enI2H"}],"42CSz":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({
    target: 'URL',
    proto: true,
    enumerable: true
}, {
    toJSON: function toJSON() {
        return URL.prototype.toString.call(this);
    }
});

},{"../internals/export":"jPesG"}],"1JmAu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        this._clear();
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        console.log("não passo aqui!");
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner() {
        const markup = `\n    <div class="spinner">\n      <svg>\n        <use href="${_iconsSvgDefault.default}#icon-loader"></use>\n      </svg>\n    </div>\n    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this._startMessage) {
        const markup = `\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${_iconsSvgDefault.default}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${message}</p>\n      </div>;\n    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(errorMessage = this._errorMessage) {
        const markup = `\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${_iconsSvgDefault.default}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${errorMessage}</p>\n      </div>;\n    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN","url:../../img/icons.svg":"gkpIa"}],"kVBCD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentElement = document.querySelector(".search");
    getQuery() {
        const query = this._parentElement.querySelector(".search__field").value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentElement.querySelector(".search__field").value = "";
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener("submit", function(event) {
            event.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"8s0oC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends _viewDefault.default {
    _parentElement = document.querySelector(".results");
    _errorMessage = "No recipes found for your query! Please try again ;)";
    _startMessage = "";
    _generateMarkup() {
        console.log(this._data);
        return this._data.map((recipe)=>{
            this._generateMarkupPreview(recipe);
            console.log(recipe);
        }).join();
    }
    _generateMarkupPreview(recipe) {
        return `\n      <li class="preview">\n        <a class="preview__link" href="#${recipe.id}">\n          <figure class="preview__fig">\n            <img src="${recipe.image}" alt="${recipe.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${recipe.title}</h4>\n            <p class="preview__publisher">${recipe.publisher}</p>\n            <!-- <div class="preview__user-generated">\n              <svg>\n                <use href="${_iconsSvgDefault.default}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `;
    }
}
exports.default = new ResultsView();

},{"./View":"1JmAu","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN","url:../../img/icons.svg":"gkpIa"}]},["iX5x9","kh7kD"], "kh7kD", "parcelRequire3a11")

//# sourceMappingURL=index.02d6739c.js.map