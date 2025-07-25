
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Babel = {}));
})(this, (function (exports) { 'use strict';

  var NodePath_context = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get _call () { return _call; },
    get _getQueueContexts () { return _getQueueContexts; },
    get _resyncKey () { return _resyncKey; },
    get _resyncList () { return _resyncList; },
    get _resyncParent () { return _resyncParent; },
    get _resyncRemoved () { return _resyncRemoved; },
    get call () { return call; },
    get isDenylisted () { return isDenylisted; },
    get popContext () { return popContext; },
    get pushContext () { return pushContext; },
    get requeue () { return requeue; },
    get requeueComputedKeyAndDecorators () { return requeueComputedKeyAndDecorators; },
    get resync () { return resync; },
    get setContext () { return setContext; },
    get setKey () { return setKey; },
    get setScope () { return setScope; },
    get setup () { return setup; },
    get skip () { return skip; },
    get skipKey () { return skipKey; },
    get stop () { return stop; },
    get visit () { return visit; }
  });
  var _babel = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get DEFAULT_EXTENSIONS () { return DEFAULT_EXTENSIONS; },
    get File () { return File; },
    get buildExternalHelpers () { return babelBuildExternalHelpers; },
    get createConfigItem () { return createConfigItem; },
    get createConfigItemAsync () { return createConfigItemAsync; },
    get createConfigItemSync () { return createConfigItemSync; },
    get getEnv () { return getEnv; },
    get loadOptions () { return loadOptions; },
    get loadOptionsAsync () { return loadOptionsAsync; },
    get loadOptionsSync () { return loadOptionsSync; },
    get loadPartialConfig () { return loadPartialConfig; },
    get loadPartialConfigAsync () { return loadPartialConfigAsync; },
    get loadPartialConfigSync () { return loadPartialConfigSync; },
    get parse () { return parse$1; },
    get parseAsync () { return parseAsync; },
    get parseSync () { return parseSync; },
    get resolvePlugin () { return resolvePlugin; },
    get resolvePreset () { return resolvePreset; },
    get template () { return template$2; },
    get tokTypes () { return tokTypes; },
    get transform () { return transform$3; },
    get transformAsync () { return transformAsync; },
    get transformFile () { return transformFile; },
    get transformFileAsync () { return transformFileAsync; },
    get transformFileSync () { return transformFileSync; },
    get transformFromAst () { return transformFromAst$1; },
    get transformFromAstAsync () { return transformFromAstAsync; },
    get transformFromAstSync () { return transformFromAstSync; },
    get transformSync () { return transformSync; },
    get traverse () { return traverse; },
    get types () { return t$4; },
    get version () { return version$1; }
  });

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _createForOfIteratorHelperLoose(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (t) return (t = t.call(r)).next.bind(t);
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var o = 0;
      return function () {
        return o >= r.length ? {
          done: !0
        } : {
          done: !1,
          value: r[o++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o,
      r,
      i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
    return t;
  }
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = !1,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function (t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = !0, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
      return this;
    }), _regeneratorDefine(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine = function (e, r, n, t) {
      if (r) i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n;else {
        function o(r, n) {
          _regeneratorDefine(e, r, function (e) {
            return this._invoke(r, n, e);
          });
        }
        o("next", 0), o("throw", 1), o("return", 2);
      }
    }, _regeneratorDefine(e, r, n, t);
  }
  function _regeneratorValues(e) {
    if (null != e) {
      var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
        r = 0;
      if (t) return t.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) return {
        next: function () {
          return e && r >= e.length && (e = void 0), {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _taggedTemplateLiteralLoose(e, t) {
    return t || (t = e.slice(0)), e.raw = t, e;
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function (t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  var global$1 = (typeof global !== "undefined" ? global :
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window : {});

  // shim for using process in browser
  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;
  if (typeof global$1.setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
  }
  if (typeof global$1.clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
  }

  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }


  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }



  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }

  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;

      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  function nextTick(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  }
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  var title = 'browser';
  var platform = 'browser';
  var browser$2 = true;
  var env$1 = {};
  var argv = [];
  var version$2 = ''; // empty string to avoid regexp issues
  var versions$2 = {};
  var release = {};
  var config$1 = {};

  function noop$2() {}

  var on = noop$2;
  var addListener = noop$2;
  var once$1 = noop$2;
  var off = noop$2;
  var removeListener = noop$2;
  var removeAllListeners = noop$2;
  var emit = noop$2;

  function binding(name) {
      throw new Error('process.binding is not supported');
  }

  function cwd () { return '/' }
  function chdir (dir) {
      throw new Error('process.chdir is not supported');
  }function umask() { return 0; }

  // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
  var performance = global$1.performance || {};
  var performanceNow =
    performance.now        ||
    performance.mozNow     ||
    performance.msNow      ||
    performance.oNow       ||
    performance.webkitNow  ||
    function(){ return (new Date()).getTime() };

  // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime
  function hrtime(previousTimestamp){
    var clocktime = performanceNow.call(performance)*1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor((clocktime%1)*1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds<0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [seconds,nanoseconds]
  }

  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }

  var browser$1$1 = {
    nextTick: nextTick,
    title: title,
    browser: browser$2,
    env: env$1,
    argv: argv,
    version: version$2,
    versions: versions$2,
    on: on,
    addListener: addListener,
    once: once$1,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config$1,
    uptime: uptime
  };

  function shallowEqual(actual, expected) {
    var keys = Object.keys(expected);
    for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
      var key = _keys[_i];
      if (actual[key] !== expected[key]) {
        return false;
      }
    }
    return true;
  }

  var warnings = new Set();
  function deprecationWarning$1(oldName, newName, prefix, cacheKey) {
    if (prefix === void 0) {
      prefix = "";
    }
    if (cacheKey === void 0) {
      cacheKey = oldName;
    }
    if (warnings.has(cacheKey)) return;
    warnings.add(cacheKey);
    var _captureShortStackTra = captureShortStackTrace(1, 2),
      internal = _captureShortStackTra.internal,
      trace = _captureShortStackTra.trace;
    if (internal) {
      return;
    }
    console.warn(prefix + "`" + oldName + "` has been deprecated, please migrate to `" + newName + "`\n" + trace);
  }
  function captureShortStackTrace(skip, length) {
    var stackTraceLimit = Error.stackTraceLimit,
      prepareStackTrace = Error.prepareStackTrace;
    var stackTrace;
    Error.stackTraceLimit = 1 + skip + length;
    Error.prepareStackTrace = function (err, stack) {
      stackTrace = stack;
    };
    new Error().stack;
    Error.stackTraceLimit = stackTraceLimit;
    Error.prepareStackTrace = prepareStackTrace;
    if (!stackTrace) return {
      internal: false,
      trace: ""
    };
    var shortStackTrace = stackTrace.slice(1 + skip, 1 + skip + length);
    return {
      internal: /[\\/]@babel[\\/]/.test(shortStackTrace[1].getFileName()),
      trace: shortStackTrace.map(function (frame) {
        return "    at " + frame;
      }).join("\n")
    };
  }

  function isArrayExpression$2(node, opts) {
    if (!node) return false;
    if (node.type !== "ArrayExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isAssignmentExpression$2(node, opts) {
    if (!node) return false;
    if (node.type !== "AssignmentExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isBinaryExpression$1(node, opts) {
    if (!node) return false;
    if (node.type !== "BinaryExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isInterpreterDirective(node, opts) {
    if (!node) return false;
    if (node.type !== "InterpreterDirective") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDirective(node, opts) {
    if (!node) return false;
    if (node.type !== "Directive") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDirectiveLiteral(node, opts) {
    if (!node) return false;
    if (node.type !== "DirectiveLiteral") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isBlockStatement$3(node, opts) {
    if (!node) return false;
    if (node.type !== "BlockStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isBreakStatement(node, opts) {
    if (!node) return false;
    if (node.type !== "BreakStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isCallExpression$8(node, opts) {
    if (!node) return false;
    if (node.type !== "CallExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isCatchClause(node, opts) {
    if (!node) return false;
    if (node.type !== "CatchClause") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isConditionalExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "ConditionalExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isContinueStatement(node, opts) {
    if (!node) return false;
    if (node.type !== "ContinueStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDebuggerStatement(node, opts) {
    if (!node) return false;
    if (node.type !== "DebuggerStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDoWhileStatement(node, opts) {
    if (!node) return false;
    if (node.type !== "DoWhileStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isEmptyStatement$1(node, opts) {
    if (!node) return false;
    if (node.type !== "EmptyStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isExpressionStatement$2(node, opts) {
    if (!node) return false;
    if (node.type !== "ExpressionStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isFile(node, opts) {
    if (!node) return false;
    if (node.type !== "File") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isForInStatement(node, opts) {
    if (!node) return false;
    if (node.type !== "ForInStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isForStatement$2(node, opts) {
    if (!node) return false;
    if (node.type !== "ForStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isFunctionDeclaration$2(node, opts) {
    if (!node) return false;
    if (node.type !== "FunctionDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isFunctionExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "FunctionExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isIdentifier$e(node, opts) {
    if (!node) return false;
    if (node.type !== "Identifier") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isIfStatement$2(node, opts) {
    if (!node) return false;
    if (node.type !== "IfStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isLabeledStatement(node, opts) {
    if (!node) return false;
    if (node.type !== "LabeledStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isStringLiteral$5(node, opts) {
    if (!node) return false;
    if (node.type !== "StringLiteral") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isNumericLiteral(node, opts) {
    if (!node) return false;
    if (node.type !== "NumericLiteral") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isNullLiteral$1(node, opts) {
    if (!node) return false;
    if (node.type !== "NullLiteral") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isBooleanLiteral(node, opts) {
    if (!node) return false;
    if (node.type !== "BooleanLiteral") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isRegExpLiteral$1(node, opts) {
    if (!node) return false;
    if (node.type !== "RegExpLiteral") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isLogicalExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "LogicalExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isMemberExpression$7(node, opts) {
    if (!node) return false;
    if (node.type !== "MemberExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isNewExpression$3(node, opts) {
    if (!node) return false;
    if (node.type !== "NewExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isProgram$1(node, opts) {
    if (!node) return false;
    if (node.type !== "Program") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isObjectExpression$3(node, opts) {
    if (!node) return false;
    if (node.type !== "ObjectExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isObjectMethod(node, opts) {
    if (!node) return false;
    if (node.type !== "ObjectMethod") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isObjectProperty$2(node, opts) {
    if (!node) return false;
    if (node.type !== "ObjectProperty") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isRestElement$2(node, opts) {
    if (!node) return false;
    if (node.type !== "RestElement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isReturnStatement(node, opts) {
    if (!node) return false;
    if (node.type !== "ReturnStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isSequenceExpression$1(node, opts) {
    if (!node) return false;
    if (node.type !== "SequenceExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isParenthesizedExpression$2(node, opts) {
    if (!node) return false;
    if (node.type !== "ParenthesizedExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isSwitchCase(node, opts) {
    if (!node) return false;
    if (node.type !== "SwitchCase") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isSwitchStatement(node, opts) {
    if (!node) return false;
    if (node.type !== "SwitchStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isThisExpression$2(node, opts) {
    if (!node) return false;
    if (node.type !== "ThisExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isThrowStatement(node, opts) {
    if (!node) return false;
    if (node.type !== "ThrowStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTryStatement(node, opts) {
    if (!node) return false;
    if (node.type !== "TryStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isUnaryExpression$1(node, opts) {
    if (!node) return false;
    if (node.type !== "UnaryExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isUpdateExpression$1(node, opts) {
    if (!node) return false;
    if (node.type !== "UpdateExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isVariableDeclaration$3(node, opts) {
    if (!node) return false;
    if (node.type !== "VariableDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isVariableDeclarator(node, opts) {
    if (!node) return false;
    if (node.type !== "VariableDeclarator") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isWhileStatement(node, opts) {
    if (!node) return false;
    if (node.type !== "WhileStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isWithStatement(node, opts) {
    if (!node) return false;
    if (node.type !== "WithStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isAssignmentPattern$3(node, opts) {
    if (!node) return false;
    if (node.type !== "AssignmentPattern") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isArrayPattern(node, opts) {
    if (!node) return false;
    if (node.type !== "ArrayPattern") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isArrowFunctionExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "ArrowFunctionExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isClassBody$2(node, opts) {
    if (!node) return false;
    if (node.type !== "ClassBody") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isClassExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "ClassExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isClassDeclaration$2(node, opts) {
    if (!node) return false;
    if (node.type !== "ClassDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isExportAllDeclaration$1(node, opts) {
    if (!node) return false;
    if (node.type !== "ExportAllDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isExportDefaultDeclaration$2(node, opts) {
    if (!node) return false;
    if (node.type !== "ExportDefaultDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isExportNamedDeclaration$3(node, opts) {
    if (!node) return false;
    if (node.type !== "ExportNamedDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isExportSpecifier(node, opts) {
    if (!node) return false;
    if (node.type !== "ExportSpecifier") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isForOfStatement$2(node, opts) {
    if (!node) return false;
    if (node.type !== "ForOfStatement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isImportDeclaration$3(node, opts) {
    if (!node) return false;
    if (node.type !== "ImportDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isImportDefaultSpecifier$1(node, opts) {
    if (!node) return false;
    if (node.type !== "ImportDefaultSpecifier") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isImportNamespaceSpecifier$1(node, opts) {
    if (!node) return false;
    if (node.type !== "ImportNamespaceSpecifier") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isImportSpecifier$1(node, opts) {
    if (!node) return false;
    if (node.type !== "ImportSpecifier") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isImportExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "ImportExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isMetaProperty$1(node, opts) {
    if (!node) return false;
    if (node.type !== "MetaProperty") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isClassMethod(node, opts) {
    if (!node) return false;
    if (node.type !== "ClassMethod") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isObjectPattern$1(node, opts) {
    if (!node) return false;
    if (node.type !== "ObjectPattern") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isSpreadElement$1(node, opts) {
    if (!node) return false;
    if (node.type !== "SpreadElement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isSuper$2(node, opts) {
    if (!node) return false;
    if (node.type !== "Super") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTaggedTemplateExpression$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TaggedTemplateExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTemplateElement(node, opts) {
    if (!node) return false;
    if (node.type !== "TemplateElement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTemplateLiteral$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TemplateLiteral") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isYieldExpression$1(node, opts) {
    if (!node) return false;
    if (node.type !== "YieldExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isAwaitExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "AwaitExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isImport(node, opts) {
    if (!node) return false;
    if (node.type !== "Import") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isBigIntLiteral(node, opts) {
    if (!node) return false;
    if (node.type !== "BigIntLiteral") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isExportNamespaceSpecifier$1(node, opts) {
    if (!node) return false;
    if (node.type !== "ExportNamespaceSpecifier") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isOptionalMemberExpression$3(node, opts) {
    if (!node) return false;
    if (node.type !== "OptionalMemberExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isOptionalCallExpression$2(node, opts) {
    if (!node) return false;
    if (node.type !== "OptionalCallExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isClassProperty(node, opts) {
    if (!node) return false;
    if (node.type !== "ClassProperty") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isClassAccessorProperty(node, opts) {
    if (!node) return false;
    if (node.type !== "ClassAccessorProperty") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isClassPrivateProperty(node, opts) {
    if (!node) return false;
    if (node.type !== "ClassPrivateProperty") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isClassPrivateMethod(node, opts) {
    if (!node) return false;
    if (node.type !== "ClassPrivateMethod") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isPrivateName$2(node, opts) {
    if (!node) return false;
    if (node.type !== "PrivateName") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isStaticBlock(node, opts) {
    if (!node) return false;
    if (node.type !== "StaticBlock") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isImportAttribute(node, opts) {
    if (!node) return false;
    if (node.type !== "ImportAttribute") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isAnyTypeAnnotation$1(node, opts) {
    if (!node) return false;
    if (node.type !== "AnyTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isArrayTypeAnnotation$2(node, opts) {
    if (!node) return false;
    if (node.type !== "ArrayTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isBooleanTypeAnnotation$1(node, opts) {
    if (!node) return false;
    if (node.type !== "BooleanTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isBooleanLiteralTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "BooleanLiteralTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isNullLiteralTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "NullLiteralTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isClassImplements(node, opts) {
    if (!node) return false;
    if (node.type !== "ClassImplements") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDeclareClass(node, opts) {
    if (!node) return false;
    if (node.type !== "DeclareClass") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDeclareFunction(node, opts) {
    if (!node) return false;
    if (node.type !== "DeclareFunction") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDeclareInterface(node, opts) {
    if (!node) return false;
    if (node.type !== "DeclareInterface") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDeclareModule(node, opts) {
    if (!node) return false;
    if (node.type !== "DeclareModule") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDeclareModuleExports(node, opts) {
    if (!node) return false;
    if (node.type !== "DeclareModuleExports") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDeclareTypeAlias(node, opts) {
    if (!node) return false;
    if (node.type !== "DeclareTypeAlias") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDeclareOpaqueType(node, opts) {
    if (!node) return false;
    if (node.type !== "DeclareOpaqueType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDeclareVariable(node, opts) {
    if (!node) return false;
    if (node.type !== "DeclareVariable") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDeclareExportDeclaration$1(node, opts) {
    if (!node) return false;
    if (node.type !== "DeclareExportDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDeclareExportAllDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "DeclareExportAllDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDeclaredPredicate(node, opts) {
    if (!node) return false;
    if (node.type !== "DeclaredPredicate") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isExistsTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "ExistsTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isFunctionTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "FunctionTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isFunctionTypeParam(node, opts) {
    if (!node) return false;
    if (node.type !== "FunctionTypeParam") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isGenericTypeAnnotation$1(node, opts) {
    if (!node) return false;
    if (node.type !== "GenericTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isInferredPredicate(node, opts) {
    if (!node) return false;
    if (node.type !== "InferredPredicate") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isInterfaceExtends(node, opts) {
    if (!node) return false;
    if (node.type !== "InterfaceExtends") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isInterfaceDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "InterfaceDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isInterfaceTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "InterfaceTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isIntersectionTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "IntersectionTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isMixedTypeAnnotation$1(node, opts) {
    if (!node) return false;
    if (node.type !== "MixedTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isEmptyTypeAnnotation$1(node, opts) {
    if (!node) return false;
    if (node.type !== "EmptyTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isNullableTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "NullableTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isNumberLiteralTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "NumberLiteralTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isNumberTypeAnnotation$1(node, opts) {
    if (!node) return false;
    if (node.type !== "NumberTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isObjectTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "ObjectTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isObjectTypeInternalSlot(node, opts) {
    if (!node) return false;
    if (node.type !== "ObjectTypeInternalSlot") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isObjectTypeCallProperty(node, opts) {
    if (!node) return false;
    if (node.type !== "ObjectTypeCallProperty") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isObjectTypeIndexer(node, opts) {
    if (!node) return false;
    if (node.type !== "ObjectTypeIndexer") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isObjectTypeProperty(node, opts) {
    if (!node) return false;
    if (node.type !== "ObjectTypeProperty") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isObjectTypeSpreadProperty(node, opts) {
    if (!node) return false;
    if (node.type !== "ObjectTypeSpreadProperty") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isOpaqueType(node, opts) {
    if (!node) return false;
    if (node.type !== "OpaqueType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isQualifiedTypeIdentifier(node, opts) {
    if (!node) return false;
    if (node.type !== "QualifiedTypeIdentifier") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isStringLiteralTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "StringLiteralTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isStringTypeAnnotation$1(node, opts) {
    if (!node) return false;
    if (node.type !== "StringTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isSymbolTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "SymbolTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isThisTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "ThisTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTupleTypeAnnotation$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TupleTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTypeofTypeAnnotation(node, opts) {
    if (!node) return false;
    if (node.type !== "TypeofTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTypeAlias(node, opts) {
    if (!node) return false;
    if (node.type !== "TypeAlias") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTypeAnnotation$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTypeCastExpression$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TypeCastExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTypeParameter(node, opts) {
    if (!node) return false;
    if (node.type !== "TypeParameter") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTypeParameterDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "TypeParameterDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTypeParameterInstantiation(node, opts) {
    if (!node) return false;
    if (node.type !== "TypeParameterInstantiation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isUnionTypeAnnotation$1(node, opts) {
    if (!node) return false;
    if (node.type !== "UnionTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isVariance(node, opts) {
    if (!node) return false;
    if (node.type !== "Variance") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isVoidTypeAnnotation$1(node, opts) {
    if (!node) return false;
    if (node.type !== "VoidTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isEnumDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "EnumDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isEnumBooleanBody(node, opts) {
    if (!node) return false;
    if (node.type !== "EnumBooleanBody") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isEnumNumberBody(node, opts) {
    if (!node) return false;
    if (node.type !== "EnumNumberBody") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isEnumStringBody(node, opts) {
    if (!node) return false;
    if (node.type !== "EnumStringBody") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isEnumSymbolBody(node, opts) {
    if (!node) return false;
    if (node.type !== "EnumSymbolBody") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isEnumBooleanMember(node, opts) {
    if (!node) return false;
    if (node.type !== "EnumBooleanMember") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isEnumNumberMember(node, opts) {
    if (!node) return false;
    if (node.type !== "EnumNumberMember") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isEnumStringMember(node, opts) {
    if (!node) return false;
    if (node.type !== "EnumStringMember") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isEnumDefaultedMember(node, opts) {
    if (!node) return false;
    if (node.type !== "EnumDefaultedMember") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isIndexedAccessType$1(node, opts) {
    if (!node) return false;
    if (node.type !== "IndexedAccessType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isOptionalIndexedAccessType(node, opts) {
    if (!node) return false;
    if (node.type !== "OptionalIndexedAccessType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXAttribute(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXAttribute") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXClosingElement(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXClosingElement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXElement(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXElement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXEmptyExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXEmptyExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXExpressionContainer$1(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXExpressionContainer") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXSpreadChild(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXSpreadChild") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXIdentifier$3(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXIdentifier") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXMemberExpression$2(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXMemberExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXNamespacedName$1(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXNamespacedName") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXOpeningElement(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXOpeningElement") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXSpreadAttribute$1(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXSpreadAttribute") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXText(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXText") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXFragment(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXFragment") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXOpeningFragment(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXOpeningFragment") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isJSXClosingFragment(node, opts) {
    if (!node) return false;
    if (node.type !== "JSXClosingFragment") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isNoop(node, opts) {
    if (!node) return false;
    if (node.type !== "Noop") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isPlaceholder$1(node, opts) {
    if (!node) return false;
    if (node.type !== "Placeholder") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isV8IntrinsicIdentifier(node, opts) {
    if (!node) return false;
    if (node.type !== "V8IntrinsicIdentifier") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isArgumentPlaceholder(node, opts) {
    if (!node) return false;
    if (node.type !== "ArgumentPlaceholder") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isBindExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "BindExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDecorator$1(node, opts) {
    if (!node) return false;
    if (node.type !== "Decorator") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDoExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "DoExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isExportDefaultSpecifier$1(node, opts) {
    if (!node) return false;
    if (node.type !== "ExportDefaultSpecifier") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isRecordExpression$1(node, opts) {
    if (!node) return false;
    if (node.type !== "RecordExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTupleExpression$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TupleExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isDecimalLiteral(node, opts) {
    if (!node) return false;
    if (node.type !== "DecimalLiteral") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isModuleExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "ModuleExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTopicReference$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TopicReference") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isPipelineTopicExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "PipelineTopicExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isPipelineBareFunction(node, opts) {
    if (!node) return false;
    if (node.type !== "PipelineBareFunction") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isPipelinePrimaryTopicReference(node, opts) {
    if (!node) return false;
    if (node.type !== "PipelinePrimaryTopicReference") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isVoidPattern(node, opts) {
    if (!node) return false;
    if (node.type !== "VoidPattern") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSParameterProperty(node, opts) {
    if (!node) return false;
    if (node.type !== "TSParameterProperty") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSDeclareFunction(node, opts) {
    if (!node) return false;
    if (node.type !== "TSDeclareFunction") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSDeclareMethod(node, opts) {
    if (!node) return false;
    if (node.type !== "TSDeclareMethod") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSQualifiedName(node, opts) {
    if (!node) return false;
    if (node.type !== "TSQualifiedName") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSCallSignatureDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "TSCallSignatureDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSConstructSignatureDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "TSConstructSignatureDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSPropertySignature(node, opts) {
    if (!node) return false;
    if (node.type !== "TSPropertySignature") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSMethodSignature(node, opts) {
    if (!node) return false;
    if (node.type !== "TSMethodSignature") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSIndexSignature(node, opts) {
    if (!node) return false;
    if (node.type !== "TSIndexSignature") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSAnyKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSAnyKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSBooleanKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSBooleanKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSBigIntKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSBigIntKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSIntrinsicKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSIntrinsicKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSNeverKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSNeverKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSNullKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSNullKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSNumberKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSNumberKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSObjectKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSObjectKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSStringKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSStringKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSSymbolKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSSymbolKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSUndefinedKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSUndefinedKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSUnknownKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSUnknownKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSVoidKeyword(node, opts) {
    if (!node) return false;
    if (node.type !== "TSVoidKeyword") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSThisType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSThisType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSFunctionType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSFunctionType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSConstructorType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSConstructorType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTypeReference$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTypeReference") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTypePredicate(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTypePredicate") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTypeQuery(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTypeQuery") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTypeLiteral(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTypeLiteral") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSArrayType$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TSArrayType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTupleType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTupleType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSOptionalType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSOptionalType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSRestType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSRestType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSNamedTupleMember(node, opts) {
    if (!node) return false;
    if (node.type !== "TSNamedTupleMember") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSUnionType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSUnionType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSIntersectionType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSIntersectionType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSConditionalType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSConditionalType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSInferType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSInferType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSParenthesizedType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSParenthesizedType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTypeOperator(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTypeOperator") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSIndexedAccessType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSIndexedAccessType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSMappedType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSMappedType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTemplateLiteralType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTemplateLiteralType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSLiteralType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSLiteralType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSExpressionWithTypeArguments(node, opts) {
    if (!node) return false;
    if (node.type !== "TSExpressionWithTypeArguments") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSInterfaceDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "TSInterfaceDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSInterfaceBody$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TSInterfaceBody") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTypeAliasDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTypeAliasDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSInstantiationExpression(node, opts) {
    if (!node) return false;
    if (node.type !== "TSInstantiationExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSAsExpression$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TSAsExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSSatisfiesExpression$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TSSatisfiesExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTypeAssertion$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTypeAssertion") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSEnumBody(node, opts) {
    if (!node) return false;
    if (node.type !== "TSEnumBody") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSEnumDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "TSEnumDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSEnumMember$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TSEnumMember") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSModuleDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "TSModuleDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSModuleBlock(node, opts) {
    if (!node) return false;
    if (node.type !== "TSModuleBlock") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSImportType(node, opts) {
    if (!node) return false;
    if (node.type !== "TSImportType") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSImportEqualsDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "TSImportEqualsDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSExternalModuleReference(node, opts) {
    if (!node) return false;
    if (node.type !== "TSExternalModuleReference") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSNonNullExpression$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TSNonNullExpression") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSExportAssignment(node, opts) {
    if (!node) return false;
    if (node.type !== "TSExportAssignment") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSNamespaceExportDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "TSNamespaceExportDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTypeAnnotation$1(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTypeAnnotation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTypeParameterInstantiation(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTypeParameterInstantiation") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTypeParameterDeclaration(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTypeParameterDeclaration") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTypeParameter(node, opts) {
    if (!node) return false;
    if (node.type !== "TSTypeParameter") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isStandardized(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "InterpreterDirective":
      case "Directive":
      case "DirectiveLiteral":
      case "BlockStatement":
      case "BreakStatement":
      case "CallExpression":
      case "CatchClause":
      case "ConditionalExpression":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "File":
      case "ForInStatement":
      case "ForStatement":
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "Identifier":
      case "IfStatement":
      case "LabeledStatement":
      case "StringLiteral":
      case "NumericLiteral":
      case "NullLiteral":
      case "BooleanLiteral":
      case "RegExpLiteral":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "Program":
      case "ObjectExpression":
      case "ObjectMethod":
      case "ObjectProperty":
      case "RestElement":
      case "ReturnStatement":
      case "SequenceExpression":
      case "ParenthesizedExpression":
      case "SwitchCase":
      case "SwitchStatement":
      case "ThisExpression":
      case "ThrowStatement":
      case "TryStatement":
      case "UnaryExpression":
      case "UpdateExpression":
      case "VariableDeclaration":
      case "VariableDeclarator":
      case "WhileStatement":
      case "WithStatement":
      case "AssignmentPattern":
      case "ArrayPattern":
      case "ArrowFunctionExpression":
      case "ClassBody":
      case "ClassExpression":
      case "ClassDeclaration":
      case "ExportAllDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportNamedDeclaration":
      case "ExportSpecifier":
      case "ForOfStatement":
      case "ImportDeclaration":
      case "ImportDefaultSpecifier":
      case "ImportNamespaceSpecifier":
      case "ImportSpecifier":
      case "ImportExpression":
      case "MetaProperty":
      case "ClassMethod":
      case "ObjectPattern":
      case "SpreadElement":
      case "Super":
      case "TaggedTemplateExpression":
      case "TemplateElement":
      case "TemplateLiteral":
      case "YieldExpression":
      case "AwaitExpression":
      case "Import":
      case "BigIntLiteral":
      case "ExportNamespaceSpecifier":
      case "OptionalMemberExpression":
      case "OptionalCallExpression":
      case "ClassProperty":
      case "ClassAccessorProperty":
      case "ClassPrivateProperty":
      case "ClassPrivateMethod":
      case "PrivateName":
      case "StaticBlock":
      case "ImportAttribute":
        break;
      case "Placeholder":
        switch (node.expectedNode) {
          case "Identifier":
          case "StringLiteral":
          case "BlockStatement":
          case "ClassBody":
            break;
          default:
            return false;
        }
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isExpression$5(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "StringLiteral":
      case "NumericLiteral":
      case "NullLiteral":
      case "BooleanLiteral":
      case "RegExpLiteral":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ParenthesizedExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
      case "ArrowFunctionExpression":
      case "ClassExpression":
      case "ImportExpression":
      case "MetaProperty":
      case "Super":
      case "TaggedTemplateExpression":
      case "TemplateLiteral":
      case "YieldExpression":
      case "AwaitExpression":
      case "Import":
      case "BigIntLiteral":
      case "OptionalMemberExpression":
      case "OptionalCallExpression":
      case "TypeCastExpression":
      case "JSXElement":
      case "JSXFragment":
      case "BindExpression":
      case "DoExpression":
      case "RecordExpression":
      case "TupleExpression":
      case "DecimalLiteral":
      case "ModuleExpression":
      case "TopicReference":
      case "PipelineTopicExpression":
      case "PipelineBareFunction":
      case "PipelinePrimaryTopicReference":
      case "TSInstantiationExpression":
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSNonNullExpression":
        break;
      case "Placeholder":
        switch (node.expectedNode) {
          case "Expression":
          case "Identifier":
          case "StringLiteral":
            break;
          default:
            return false;
        }
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isBinary$2(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "BinaryExpression":
      case "LogicalExpression":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isScopable(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "BlockStatement":
      case "CatchClause":
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "Program":
      case "ObjectMethod":
      case "SwitchStatement":
      case "WhileStatement":
      case "ArrowFunctionExpression":
      case "ClassExpression":
      case "ClassDeclaration":
      case "ForOfStatement":
      case "ClassMethod":
      case "ClassPrivateMethod":
      case "StaticBlock":
      case "TSModuleBlock":
        break;
      case "Placeholder":
        if (node.expectedNode === "BlockStatement") break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isBlockParent(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "BlockStatement":
      case "CatchClause":
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "Program":
      case "ObjectMethod":
      case "SwitchStatement":
      case "WhileStatement":
      case "ArrowFunctionExpression":
      case "ForOfStatement":
      case "ClassMethod":
      case "ClassPrivateMethod":
      case "StaticBlock":
      case "TSModuleBlock":
        break;
      case "Placeholder":
        if (node.expectedNode === "BlockStatement") break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isBlock(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "BlockStatement":
      case "Program":
      case "TSModuleBlock":
        break;
      case "Placeholder":
        if (node.expectedNode === "BlockStatement") break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isStatement$9(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "FunctionDeclaration":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
      case "ClassDeclaration":
      case "ExportAllDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportNamedDeclaration":
      case "ForOfStatement":
      case "ImportDeclaration":
      case "DeclareClass":
      case "DeclareFunction":
      case "DeclareInterface":
      case "DeclareModule":
      case "DeclareModuleExports":
      case "DeclareTypeAlias":
      case "DeclareOpaqueType":
      case "DeclareVariable":
      case "DeclareExportDeclaration":
      case "DeclareExportAllDeclaration":
      case "InterfaceDeclaration":
      case "OpaqueType":
      case "TypeAlias":
      case "EnumDeclaration":
      case "TSDeclareFunction":
      case "TSInterfaceDeclaration":
      case "TSTypeAliasDeclaration":
      case "TSEnumDeclaration":
      case "TSModuleDeclaration":
      case "TSImportEqualsDeclaration":
      case "TSExportAssignment":
      case "TSNamespaceExportDeclaration":
        break;
      case "Placeholder":
        switch (node.expectedNode) {
          case "Statement":
          case "Declaration":
          case "BlockStatement":
            break;
          default:
            return false;
        }
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isTerminatorless(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "BreakStatement":
      case "ContinueStatement":
      case "ReturnStatement":
      case "ThrowStatement":
      case "YieldExpression":
      case "AwaitExpression":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isCompletionStatement(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "BreakStatement":
      case "ContinueStatement":
      case "ReturnStatement":
      case "ThrowStatement":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isConditional(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ConditionalExpression":
      case "IfStatement":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isLoop$1(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
      case "ForOfStatement":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isWhile(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "DoWhileStatement":
      case "WhileStatement":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isExpressionWrapper(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ExpressionStatement":
      case "ParenthesizedExpression":
      case "TypeCastExpression":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isFor$1(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ForInStatement":
      case "ForStatement":
      case "ForOfStatement":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isForXStatement$1(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ForInStatement":
      case "ForOfStatement":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isFunction$6(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "ObjectMethod":
      case "ArrowFunctionExpression":
      case "ClassMethod":
      case "ClassPrivateMethod":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isFunctionParent(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "ObjectMethod":
      case "ArrowFunctionExpression":
      case "ClassMethod":
      case "ClassPrivateMethod":
      case "StaticBlock":
      case "TSModuleBlock":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isPureish$1(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "StringLiteral":
      case "NumericLiteral":
      case "NullLiteral":
      case "BooleanLiteral":
      case "RegExpLiteral":
      case "ArrowFunctionExpression":
      case "BigIntLiteral":
      case "DecimalLiteral":
        break;
      case "Placeholder":
        if (node.expectedNode === "StringLiteral") break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isDeclaration(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "FunctionDeclaration":
      case "VariableDeclaration":
      case "ClassDeclaration":
      case "ExportAllDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportNamedDeclaration":
      case "ImportDeclaration":
      case "DeclareClass":
      case "DeclareFunction":
      case "DeclareInterface":
      case "DeclareModule":
      case "DeclareModuleExports":
      case "DeclareTypeAlias":
      case "DeclareOpaqueType":
      case "DeclareVariable":
      case "DeclareExportDeclaration":
      case "DeclareExportAllDeclaration":
      case "InterfaceDeclaration":
      case "OpaqueType":
      case "TypeAlias":
      case "EnumDeclaration":
      case "TSDeclareFunction":
      case "TSInterfaceDeclaration":
      case "TSTypeAliasDeclaration":
      case "TSEnumDeclaration":
      case "TSModuleDeclaration":
      case "TSImportEqualsDeclaration":
        break;
      case "Placeholder":
        if (node.expectedNode === "Declaration") break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isFunctionParameter(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "Identifier":
      case "RestElement":
      case "AssignmentPattern":
      case "ArrayPattern":
      case "ObjectPattern":
      case "VoidPattern":
        break;
      case "Placeholder":
        if (node.expectedNode === "Identifier") break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isPatternLike(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "Identifier":
      case "MemberExpression":
      case "RestElement":
      case "AssignmentPattern":
      case "ArrayPattern":
      case "ObjectPattern":
      case "VoidPattern":
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSNonNullExpression":
        break;
      case "Placeholder":
        switch (node.expectedNode) {
          case "Pattern":
          case "Identifier":
            break;
          default:
            return false;
        }
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isLVal(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "Identifier":
      case "MemberExpression":
      case "RestElement":
      case "AssignmentPattern":
      case "ArrayPattern":
      case "ObjectPattern":
      case "TSParameterProperty":
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSNonNullExpression":
        break;
      case "Placeholder":
        switch (node.expectedNode) {
          case "Pattern":
          case "Identifier":
            break;
          default:
            return false;
        }
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isTSEntityName(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "Identifier":
      case "TSQualifiedName":
        break;
      case "Placeholder":
        if (node.expectedNode === "Identifier") break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isLiteral$4(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "StringLiteral":
      case "NumericLiteral":
      case "NullLiteral":
      case "BooleanLiteral":
      case "RegExpLiteral":
      case "TemplateLiteral":
      case "BigIntLiteral":
      case "DecimalLiteral":
        break;
      case "Placeholder":
        if (node.expectedNode === "StringLiteral") break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isUserWhitespacable(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ObjectMethod":
      case "ObjectProperty":
      case "ObjectTypeInternalSlot":
      case "ObjectTypeCallProperty":
      case "ObjectTypeIndexer":
      case "ObjectTypeProperty":
      case "ObjectTypeSpreadProperty":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isMethod$1(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ObjectMethod":
      case "ClassMethod":
      case "ClassPrivateMethod":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isObjectMember(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ObjectMethod":
      case "ObjectProperty":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isProperty$1(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ObjectProperty":
      case "ClassProperty":
      case "ClassAccessorProperty":
      case "ClassPrivateProperty":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isUnaryLike(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "UnaryExpression":
      case "SpreadElement":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isPattern$2(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "AssignmentPattern":
      case "ArrayPattern":
      case "ObjectPattern":
      case "VoidPattern":
        break;
      case "Placeholder":
        if (node.expectedNode === "Pattern") break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isClass$1(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ClassExpression":
      case "ClassDeclaration":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isImportOrExportDeclaration(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ExportAllDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportNamedDeclaration":
      case "ImportDeclaration":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isExportDeclaration$2(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ExportAllDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportNamedDeclaration":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isModuleSpecifier$1(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ExportSpecifier":
      case "ImportDefaultSpecifier":
      case "ImportNamespaceSpecifier":
      case "ImportSpecifier":
      case "ExportNamespaceSpecifier":
      case "ExportDefaultSpecifier":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isAccessor(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ClassAccessorProperty":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isPrivate(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "ClassPrivateProperty":
      case "ClassPrivateMethod":
      case "PrivateName":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isFlow$1(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "AnyTypeAnnotation":
      case "ArrayTypeAnnotation":
      case "BooleanTypeAnnotation":
      case "BooleanLiteralTypeAnnotation":
      case "NullLiteralTypeAnnotation":
      case "ClassImplements":
      case "DeclareClass":
      case "DeclareFunction":
      case "DeclareInterface":
      case "DeclareModule":
      case "DeclareModuleExports":
      case "DeclareTypeAlias":
      case "DeclareOpaqueType":
      case "DeclareVariable":
      case "DeclareExportDeclaration":
      case "DeclareExportAllDeclaration":
      case "DeclaredPredicate":
      case "ExistsTypeAnnotation":
      case "FunctionTypeAnnotation":
      case "FunctionTypeParam":
      case "GenericTypeAnnotation":
      case "InferredPredicate":
      case "InterfaceExtends":
      case "InterfaceDeclaration":
      case "InterfaceTypeAnnotation":
      case "IntersectionTypeAnnotation":
      case "MixedTypeAnnotation":
      case "EmptyTypeAnnotation":
      case "NullableTypeAnnotation":
      case "NumberLiteralTypeAnnotation":
      case "NumberTypeAnnotation":
      case "ObjectTypeAnnotation":
      case "ObjectTypeInternalSlot":
      case "ObjectTypeCallProperty":
      case "ObjectTypeIndexer":
      case "ObjectTypeProperty":
      case "ObjectTypeSpreadProperty":
      case "OpaqueType":
      case "QualifiedTypeIdentifier":
      case "StringLiteralTypeAnnotation":
      case "StringTypeAnnotation":
      case "SymbolTypeAnnotation":
      case "ThisTypeAnnotation":
      case "TupleTypeAnnotation":
      case "TypeofTypeAnnotation":
      case "TypeAlias":
      case "TypeAnnotation":
      case "TypeCastExpression":
      case "TypeParameter":
      case "TypeParameterDeclaration":
      case "TypeParameterInstantiation":
      case "UnionTypeAnnotation":
      case "Variance":
      case "VoidTypeAnnotation":
      case "EnumDeclaration":
      case "EnumBooleanBody":
      case "EnumNumberBody":
      case "EnumStringBody":
      case "EnumSymbolBody":
      case "EnumBooleanMember":
      case "EnumNumberMember":
      case "EnumStringMember":
      case "EnumDefaultedMember":
      case "IndexedAccessType":
      case "OptionalIndexedAccessType":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isFlowType$1(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "AnyTypeAnnotation":
      case "ArrayTypeAnnotation":
      case "BooleanTypeAnnotation":
      case "BooleanLiteralTypeAnnotation":
      case "NullLiteralTypeAnnotation":
      case "ExistsTypeAnnotation":
      case "FunctionTypeAnnotation":
      case "GenericTypeAnnotation":
      case "InterfaceTypeAnnotation":
      case "IntersectionTypeAnnotation":
      case "MixedTypeAnnotation":
      case "EmptyTypeAnnotation":
      case "NullableTypeAnnotation":
      case "NumberLiteralTypeAnnotation":
      case "NumberTypeAnnotation":
      case "ObjectTypeAnnotation":
      case "StringLiteralTypeAnnotation":
      case "StringTypeAnnotation":
      case "SymbolTypeAnnotation":
      case "ThisTypeAnnotation":
      case "TupleTypeAnnotation":
      case "TypeofTypeAnnotation":
      case "UnionTypeAnnotation":
      case "VoidTypeAnnotation":
      case "IndexedAccessType":
      case "OptionalIndexedAccessType":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isFlowBaseAnnotation$1(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "AnyTypeAnnotation":
      case "BooleanTypeAnnotation":
      case "NullLiteralTypeAnnotation":
      case "MixedTypeAnnotation":
      case "EmptyTypeAnnotation":
      case "NumberTypeAnnotation":
      case "StringTypeAnnotation":
      case "SymbolTypeAnnotation":
      case "ThisTypeAnnotation":
      case "VoidTypeAnnotation":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isFlowDeclaration(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "DeclareClass":
      case "DeclareFunction":
      case "DeclareInterface":
      case "DeclareModule":
      case "DeclareModuleExports":
      case "DeclareTypeAlias":
      case "DeclareOpaqueType":
      case "DeclareVariable":
      case "DeclareExportDeclaration":
      case "DeclareExportAllDeclaration":
      case "InterfaceDeclaration":
      case "OpaqueType":
      case "TypeAlias":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isFlowPredicate(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "DeclaredPredicate":
      case "InferredPredicate":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isEnumBody(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "EnumBooleanBody":
      case "EnumNumberBody":
      case "EnumStringBody":
      case "EnumSymbolBody":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isEnumMember(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "EnumBooleanMember":
      case "EnumNumberMember":
      case "EnumStringMember":
      case "EnumDefaultedMember":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isJSX(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "JSXAttribute":
      case "JSXClosingElement":
      case "JSXElement":
      case "JSXEmptyExpression":
      case "JSXExpressionContainer":
      case "JSXSpreadChild":
      case "JSXIdentifier":
      case "JSXMemberExpression":
      case "JSXNamespacedName":
      case "JSXOpeningElement":
      case "JSXSpreadAttribute":
      case "JSXText":
      case "JSXFragment":
      case "JSXOpeningFragment":
      case "JSXClosingFragment":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isMiscellaneous(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "Noop":
      case "Placeholder":
      case "V8IntrinsicIdentifier":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isTypeScript(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "TSParameterProperty":
      case "TSDeclareFunction":
      case "TSDeclareMethod":
      case "TSQualifiedName":
      case "TSCallSignatureDeclaration":
      case "TSConstructSignatureDeclaration":
      case "TSPropertySignature":
      case "TSMethodSignature":
      case "TSIndexSignature":
      case "TSAnyKeyword":
      case "TSBooleanKeyword":
      case "TSBigIntKeyword":
      case "TSIntrinsicKeyword":
      case "TSNeverKeyword":
      case "TSNullKeyword":
      case "TSNumberKeyword":
      case "TSObjectKeyword":
      case "TSStringKeyword":
      case "TSSymbolKeyword":
      case "TSUndefinedKeyword":
      case "TSUnknownKeyword":
      case "TSVoidKeyword":
      case "TSThisType":
      case "TSFunctionType":
      case "TSConstructorType":
      case "TSTypeReference":
      case "TSTypePredicate":
      case "TSTypeQuery":
      case "TSTypeLiteral":
      case "TSArrayType":
      case "TSTupleType":
      case "TSOptionalType":
      case "TSRestType":
      case "TSNamedTupleMember":
      case "TSUnionType":
      case "TSIntersectionType":
      case "TSConditionalType":
      case "TSInferType":
      case "TSParenthesizedType":
      case "TSTypeOperator":
      case "TSIndexedAccessType":
      case "TSMappedType":
      case "TSTemplateLiteralType":
      case "TSLiteralType":
      case "TSExpressionWithTypeArguments":
      case "TSInterfaceDeclaration":
      case "TSInterfaceBody":
      case "TSTypeAliasDeclaration":
      case "TSInstantiationExpression":
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSEnumBody":
      case "TSEnumDeclaration":
      case "TSEnumMember":
      case "TSModuleDeclaration":
      case "TSModuleBlock":
      case "TSImportType":
      case "TSImportEqualsDeclaration":
      case "TSExternalModuleReference":
      case "TSNonNullExpression":
      case "TSExportAssignment":
      case "TSNamespaceExportDeclaration":
      case "TSTypeAnnotation":
      case "TSTypeParameterInstantiation":
      case "TSTypeParameterDeclaration":
      case "TSTypeParameter":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isTSTypeElement(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "TSCallSignatureDeclaration":
      case "TSConstructSignatureDeclaration":
      case "TSPropertySignature":
      case "TSMethodSignature":
      case "TSIndexSignature":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isTSType$1(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "TSAnyKeyword":
      case "TSBooleanKeyword":
      case "TSBigIntKeyword":
      case "TSIntrinsicKeyword":
      case "TSNeverKeyword":
      case "TSNullKeyword":
      case "TSNumberKeyword":
      case "TSObjectKeyword":
      case "TSStringKeyword":
      case "TSSymbolKeyword":
      case "TSUndefinedKeyword":
      case "TSUnknownKeyword":
      case "TSVoidKeyword":
      case "TSThisType":
      case "TSFunctionType":
      case "TSConstructorType":
      case "TSTypeReference":
      case "TSTypePredicate":
      case "TSTypeQuery":
      case "TSTypeLiteral":
      case "TSArrayType":
      case "TSTupleType":
      case "TSOptionalType":
      case "TSRestType":
      case "TSUnionType":
      case "TSIntersectionType":
      case "TSConditionalType":
      case "TSInferType":
      case "TSParenthesizedType":
      case "TSTypeOperator":
      case "TSIndexedAccessType":
      case "TSMappedType":
      case "TSTemplateLiteralType":
      case "TSLiteralType":
      case "TSExpressionWithTypeArguments":
      case "TSImportType":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isTSBaseType(node, opts) {
    if (!node) return false;
    switch (node.type) {
      case "TSAnyKeyword":
      case "TSBooleanKeyword":
      case "TSBigIntKeyword":
      case "TSIntrinsicKeyword":
      case "TSNeverKeyword":
      case "TSNullKeyword":
      case "TSNumberKeyword":
      case "TSObjectKeyword":
      case "TSStringKeyword":
      case "TSSymbolKeyword":
      case "TSUndefinedKeyword":
      case "TSUnknownKeyword":
      case "TSVoidKeyword":
      case "TSThisType":
      case "TSTemplateLiteralType":
      case "TSLiteralType":
        break;
      default:
        return false;
    }
    return opts == null || shallowEqual(node, opts);
  }
  function isNumberLiteral(node, opts) {
    deprecationWarning$1("isNumberLiteral", "isNumericLiteral");
    if (!node) return false;
    if (node.type !== "NumberLiteral") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isRegexLiteral(node, opts) {
    deprecationWarning$1("isRegexLiteral", "isRegExpLiteral");
    if (!node) return false;
    if (node.type !== "RegexLiteral") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isRestProperty$1(node, opts) {
    deprecationWarning$1("isRestProperty", "isRestElement");
    if (!node) return false;
    if (node.type !== "RestProperty") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isSpreadProperty$1(node, opts) {
    deprecationWarning$1("isSpreadProperty", "isSpreadElement");
    if (!node) return false;
    if (node.type !== "SpreadProperty") return false;
    return opts == null || shallowEqual(node, opts);
  }
  function isModuleDeclaration(node, opts) {
    deprecationWarning$1("isModuleDeclaration", "isImportOrExportDeclaration");
    return isImportOrExportDeclaration(node, opts);
  }

  function isMemberExpressionLike(node) {
    return isMemberExpression$7(node) || isMetaProperty$1(node);
  }
  function matchesPattern$2(member, match, allowPartial) {
    if (!isMemberExpressionLike(member)) return false;
    var parts = Array.isArray(match) ? match : match.split(".");
    var nodes = [];
    var node;
    for (node = member; isMemberExpressionLike(node); node = (_object = node.object) != null ? _object : node.meta) {
      var _object;
      nodes.push(node.property);
    }
    nodes.push(node);
    if (nodes.length < parts.length) return false;
    if (!allowPartial && nodes.length > parts.length) return false;
    for (var i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
      var _node = nodes[j];
      var value = void 0;
      if (isIdentifier$e(_node)) {
        value = _node.name;
      } else if (isStringLiteral$5(_node)) {
        value = _node.value;
      } else if (isThisExpression$2(_node)) {
        value = "this";
      } else if (isSuper$2(_node)) {
        value = "super";
      } else if (isPrivateName$2(_node)) {
        value = "#" + _node.id.name;
      } else {
        return false;
      }
      if (parts[i] !== value) return false;
    }
    return true;
  }

  function buildMatchMemberExpression$1(match, allowPartial) {
    var parts = match.split(".");
    return function (member) {
      return matchesPattern$2(member, parts, allowPartial);
    };
  }

  var isReactComponent = buildMatchMemberExpression$1("React.Component");

  function isCompatTag$1(tagName) {
    return !!tagName && /^[a-z]/.test(tagName);
  }

  function isType$2(nodeType, targetType) {
    if (nodeType === targetType) return true;
    if (nodeType == null) return false;
    if (ALIAS_KEYS[targetType]) return false;
    var aliases = FLIPPED_ALIAS_KEYS$3[targetType];
    if (aliases != null && aliases.includes(nodeType)) return true;
    return false;
  }

  function isPlaceholderType(placeholderType, targetType) {
    if (placeholderType === targetType) return true;
    var aliases = PLACEHOLDERS_ALIAS[placeholderType];
    if (aliases != null && aliases.includes(targetType)) return true;
    return false;
  }

  function is(type, node, opts) {
    if (!node) return false;
    var matches = isType$2(node.type, type);
    if (!matches) {
      if (!opts && node.type === "Placeholder" && type in FLIPPED_ALIAS_KEYS$3) {
        return isPlaceholderType(node.expectedNode, type);
      }
      return false;
    }
    if (opts === undefined) {
      return true;
    } else {
      return shallowEqual(node, opts);
    }
  }

  var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
  var nonASCIIidentifierChars = "\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
  var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
  nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
  var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191];
  var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  function isInAstralSet(code, set) {
    var pos = 0x10000;
    for (var i = 0, length = set.length; i < length; i += 2) {
      pos += set[i];
      if (pos > code) return false;
      pos += set[i + 1];
      if (pos >= code) return true;
    }
    return false;
  }
  function isIdentifierStart(code) {
    if (code < 65) return code === 36;
    if (code <= 90) return true;
    if (code < 97) return code === 95;
    if (code <= 122) return true;
    if (code <= 0xffff) {
      return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
    }
    return isInAstralSet(code, astralIdentifierStartCodes);
  }
  function isIdentifierChar(code) {
    if (code < 48) return code === 36;
    if (code < 58) return true;
    if (code < 65) return false;
    if (code <= 90) return true;
    if (code < 97) return code === 95;
    if (code <= 122) return true;
    if (code <= 0xffff) {
      return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
    }
    return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
  }
  function isIdentifierName(name) {
    var isFirst = true;
    for (var i = 0; i < name.length; i++) {
      var cp = name.charCodeAt(i);
      if ((cp & 0xfc00) === 0xd800 && i + 1 < name.length) {
        var trail = name.charCodeAt(++i);
        if ((trail & 0xfc00) === 0xdc00) {
          cp = 0x10000 + ((cp & 0x3ff) << 10) + (trail & 0x3ff);
        }
      }
      if (isFirst) {
        isFirst = false;
        if (!isIdentifierStart(cp)) {
          return false;
        }
      } else if (!isIdentifierChar(cp)) {
        return false;
      }
    }
    return !isFirst;
  }

  var reservedWords = {
    keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
    strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
    strictBind: ["eval", "arguments"]
  };
  var keywords$1 = new Set(reservedWords.keyword);
  var reservedWordsStrictSet = new Set(reservedWords.strict);
  var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
  function isReservedWord(word, inModule) {
    return inModule && word === "await" || word === "enum";
  }
  function isStrictReservedWord(word, inModule) {
    return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
  }
  function isStrictBindOnlyReservedWord(word) {
    return reservedWordsStrictBindSet.has(word);
  }
  function isStrictBindReservedWord(word, inModule) {
    return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
  }
  function isKeyword(word) {
    return keywords$1.has(word);
  }

  function isValidIdentifier$1(name, reserved) {
    if (reserved === void 0) {
      reserved = true;
    }
    if (typeof name !== "string") return false;
    if (reserved) {
      if (isKeyword(name) || isStrictReservedWord(name, true)) {
        return false;
      }
    }
    return isIdentifierName(name);
  }

  var _isDigit = function isDigit(code) {
    return code >= 48 && code <= 57;
  };
  var forbiddenNumericSeparatorSiblings = {
    decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]),
    hex: new Set([46, 88, 95, 120])
  };
  var isAllowedNumericSeparatorSibling = {
    bin: function bin(ch) {
      return ch === 48 || ch === 49;
    },
    oct: function oct(ch) {
      return ch >= 48 && ch <= 55;
    },
    dec: function dec(ch) {
      return ch >= 48 && ch <= 57;
    },
    hex: function hex(ch) {
      return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
    }
  };
  function readStringContents(type, input, pos, lineStart, curLine, errors) {
    var initialPos = pos;
    var initialLineStart = lineStart;
    var initialCurLine = curLine;
    var out = "";
    var firstInvalidLoc = null;
    var chunkStart = pos;
    var length = input.length;
    for (;;) {
      if (pos >= length) {
        errors.unterminated(initialPos, initialLineStart, initialCurLine);
        out += input.slice(chunkStart, pos);
        break;
      }
      var ch = input.charCodeAt(pos);
      if (isStringEnd(type, ch, input, pos)) {
        out += input.slice(chunkStart, pos);
        break;
      }
      if (ch === 92) {
        out += input.slice(chunkStart, pos);
        var res = readEscapedChar(input, pos, lineStart, curLine, type === "template", errors);
        if (res.ch === null && !firstInvalidLoc) {
          firstInvalidLoc = {
            pos: pos,
            lineStart: lineStart,
            curLine: curLine
          };
        } else {
          out += res.ch;
        }
        pos = res.pos;
        lineStart = res.lineStart;
        curLine = res.curLine;
        chunkStart = pos;
      } else if (ch === 8232 || ch === 8233) {
        ++pos;
        ++curLine;
        lineStart = pos;
      } else if (ch === 10 || ch === 13) {
        if (type === "template") {
          out += input.slice(chunkStart, pos) + "\n";
          ++pos;
          if (ch === 13 && input.charCodeAt(pos) === 10) {
            ++pos;
          }
          ++curLine;
          chunkStart = lineStart = pos;
        } else {
          errors.unterminated(initialPos, initialLineStart, initialCurLine);
        }
      } else {
        ++pos;
      }
    }
    return {
      pos: pos,
      str: out,
      firstInvalidLoc: firstInvalidLoc,
      lineStart: lineStart,
      curLine: curLine,
      containsInvalid: !!firstInvalidLoc
    };
  }
  function isStringEnd(type, ch, input, pos) {
    if (type === "template") {
      return ch === 96 || ch === 36 && input.charCodeAt(pos + 1) === 123;
    }
    return ch === (type === "double" ? 34 : 39);
  }
  function readEscapedChar(input, pos, lineStart, curLine, inTemplate, errors) {
    var throwOnInvalid = !inTemplate;
    pos++;
    var res = function res(ch) {
      return {
        pos: pos,
        ch: ch,
        lineStart: lineStart,
        curLine: curLine
      };
    };
    var ch = input.charCodeAt(pos++);
    switch (ch) {
      case 110:
        return res("\n");
      case 114:
        return res("\r");
      case 120:
        {
          var code;
          var _readHexChar = readHexChar(input, pos, lineStart, curLine, 2, false, throwOnInvalid, errors);
          code = _readHexChar.code;
          pos = _readHexChar.pos;
          return res(code === null ? null : String.fromCharCode(code));
        }
      case 117:
        {
          var _code;
          var _readCodePoint = readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors);
          _code = _readCodePoint.code;
          pos = _readCodePoint.pos;
          return res(_code === null ? null : String.fromCodePoint(_code));
        }
      case 116:
        return res("\t");
      case 98:
        return res("\b");
      case 118:
        return res("\x0B");
      case 102:
        return res("\f");
      case 13:
        if (input.charCodeAt(pos) === 10) {
          ++pos;
        }
      case 10:
        lineStart = pos;
        ++curLine;
      case 8232:
      case 8233:
        return res("");
      case 56:
      case 57:
        if (inTemplate) {
          return res(null);
        } else {
          errors.strictNumericEscape(pos - 1, lineStart, curLine);
        }
      default:
        if (ch >= 48 && ch <= 55) {
          var startPos = pos - 1;
          var match = /^[0-7]+/.exec(input.slice(startPos, pos + 2));
          var octalStr = match[0];
          var octal = parseInt(octalStr, 8);
          if (octal > 255) {
            octalStr = octalStr.slice(0, -1);
            octal = parseInt(octalStr, 8);
          }
          pos += octalStr.length - 1;
          var next = input.charCodeAt(pos);
          if (octalStr !== "0" || next === 56 || next === 57) {
            if (inTemplate) {
              return res(null);
            } else {
              errors.strictNumericEscape(startPos, lineStart, curLine);
            }
          }
          return res(String.fromCharCode(octal));
        }
        return res(String.fromCharCode(ch));
    }
  }
  function readHexChar(input, pos, lineStart, curLine, len, forceLen, throwOnInvalid, errors) {
    var initialPos = pos;
    var n;
    var _readInt = readInt(input, pos, lineStart, curLine, 16, len, forceLen, false, errors, !throwOnInvalid);
    n = _readInt.n;
    pos = _readInt.pos;
    if (n === null) {
      if (throwOnInvalid) {
        errors.invalidEscapeSequence(initialPos, lineStart, curLine);
      } else {
        pos = initialPos - 1;
      }
    }
    return {
      code: n,
      pos: pos
    };
  }
  function readInt(input, pos, lineStart, curLine, radix, len, forceLen, allowNumSeparator, errors, bailOnError) {
    var start = pos;
    var forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
    var isAllowedSibling = radix === 16 ? isAllowedNumericSeparatorSibling.hex : radix === 10 ? isAllowedNumericSeparatorSibling.dec : radix === 8 ? isAllowedNumericSeparatorSibling.oct : isAllowedNumericSeparatorSibling.bin;
    var invalid = false;
    var total = 0;
    for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
      var code = input.charCodeAt(pos);
      var val = void 0;
      if (code === 95 && allowNumSeparator !== "bail") {
        var prev = input.charCodeAt(pos - 1);
        var next = input.charCodeAt(pos + 1);
        if (!allowNumSeparator) {
          if (bailOnError) return {
            n: null,
            pos: pos
          };
          errors.numericSeparatorInEscapeSequence(pos, lineStart, curLine);
        } else if (Number.isNaN(next) || !isAllowedSibling(next) || forbiddenSiblings.has(prev) || forbiddenSiblings.has(next)) {
          if (bailOnError) return {
            n: null,
            pos: pos
          };
          errors.unexpectedNumericSeparator(pos, lineStart, curLine);
        }
        ++pos;
        continue;
      }
      if (code >= 97) {
        val = code - 97 + 10;
      } else if (code >= 65) {
        val = code - 65 + 10;
      } else if (_isDigit(code)) {
        val = code - 48;
      } else {
        val = Infinity;
      }
      if (val >= radix) {
        if (val <= 9 && bailOnError) {
          return {
            n: null,
            pos: pos
          };
        } else if (val <= 9 && errors.invalidDigit(pos, lineStart, curLine, radix)) {
          val = 0;
        } else if (forceLen) {
          val = 0;
          invalid = true;
        } else {
          break;
        }
      }
      ++pos;
      total = total * radix + val;
    }
    if (pos === start || len != null && pos - start !== len || invalid) {
      return {
        n: null,
        pos: pos
      };
    }
    return {
      n: total,
      pos: pos
    };
  }
  function readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors) {
    var ch = input.charCodeAt(pos);
    var code;
    if (ch === 123) {
      ++pos;
      var _readHexChar2 = readHexChar(input, pos, lineStart, curLine, input.indexOf("}", pos) - pos, true, throwOnInvalid, errors);
      code = _readHexChar2.code;
      pos = _readHexChar2.pos;
      ++pos;
      if (code !== null && code > 0x10ffff) {
        if (throwOnInvalid) {
          errors.invalidCodePoint(pos, lineStart, curLine);
        } else {
          return {
            code: null,
            pos: pos
          };
        }
      }
    } else {
      var _readHexChar3 = readHexChar(input, pos, lineStart, curLine, 4, false, throwOnInvalid, errors);
      code = _readHexChar3.code;
      pos = _readHexChar3.pos;
    }
    return {
      code: code,
      pos: pos
    };
  }

  var STATEMENT_OR_BLOCK_KEYS$1 = ["consequent", "body", "alternate"];
  var FLATTENABLE_KEYS = ["body", "expressions"];
  var FOR_INIT_KEYS = ["left", "init"];
  var COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
  var LOGICAL_OPERATORS$2 = ["||", "&&", "??"];
  var UPDATE_OPERATORS = ["++", "--"];
  var BOOLEAN_NUMBER_BINARY_OPERATORS$1 = [">", "<", ">=", "<="];
  var EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
  var COMPARISON_BINARY_OPERATORS = [].concat(EQUALITY_BINARY_OPERATORS, ["in", "instanceof"]);
  var BOOLEAN_BINARY_OPERATORS$1 = [].concat(_toConsumableArray(COMPARISON_BINARY_OPERATORS), BOOLEAN_NUMBER_BINARY_OPERATORS$1);
  var NUMBER_BINARY_OPERATORS$1 = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
  var BINARY_OPERATORS = ["+"].concat(NUMBER_BINARY_OPERATORS$1, _toConsumableArray(BOOLEAN_BINARY_OPERATORS$1), ["|>"]);
  var ASSIGNMENT_OPERATORS = ["=", "+="].concat(_toConsumableArray(NUMBER_BINARY_OPERATORS$1.map(function (op) {
    return op + "=";
  })), _toConsumableArray(LOGICAL_OPERATORS$2.map(function (op) {
    return op + "=";
  })));
  var BOOLEAN_UNARY_OPERATORS$1 = ["delete", "!"];
  var NUMBER_UNARY_OPERATORS$1 = ["+", "-", "~"];
  var STRING_UNARY_OPERATORS$1 = ["typeof"];
  var UNARY_OPERATORS = ["void", "throw"].concat(BOOLEAN_UNARY_OPERATORS$1, NUMBER_UNARY_OPERATORS$1, STRING_UNARY_OPERATORS$1);
  var INHERIT_KEYS = {
    optional: ["typeAnnotation", "typeParameters", "returnType"],
    force: ["start", "loc", "end"]
  };
  {
    exports.BLOCK_SCOPED_SYMBOL = Symbol["for"]("var used to be block scoped");
    exports.NOT_LOCAL_BINDING = Symbol["for"]("should not be considered a local binding");
  }

  var VISITOR_KEYS$7 = {};
  var ALIAS_KEYS = {};
  var FLIPPED_ALIAS_KEYS$3 = {};
  var NODE_FIELDS$1 = {};
  var BUILDER_KEYS = {};
  var DEPRECATED_KEYS$1 = {};
  var NODE_PARENT_VALIDATIONS = {};
  function getType(val) {
    if (Array.isArray(val)) {
      return "array";
    } else if (val === null) {
      return "null";
    } else {
      return typeof val;
    }
  }
  function validate$7(validate) {
    return {
      validate: validate
    };
  }
  function validateType() {
    return validate$7(assertNodeType.apply(void 0, arguments));
  }
  function validateOptional(validate) {
    return {
      validate: validate,
      optional: true
    };
  }
  function validateOptionalType() {
    return {
      validate: assertNodeType.apply(void 0, arguments),
      optional: true
    };
  }
  function arrayOf(elementType) {
    return chain(assertValueType("array"), assertEach(elementType));
  }
  function arrayOfType() {
    return arrayOf(assertNodeType.apply(void 0, arguments));
  }
  function validateArrayOfType() {
    return validate$7(arrayOfType.apply(void 0, arguments));
  }
  function assertEach(callback) {
    var childValidator = browser$1$1.env.BABEL_TYPES_8_BREAKING ? validateChild : function () {};
    function validator(node, key, val) {
      if (!Array.isArray(val)) return;
      var i = 0;
      var subKey = {
        toString: function toString() {
          return key + "[" + i + "]";
        }
      };
      for (; i < val.length; i++) {
        var v = val[i];
        callback(node, subKey, v);
        childValidator(node, subKey, v);
      }
    }
    validator.each = callback;
    return validator;
  }
  function assertOneOf() {
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }
    function validate(node, key, val) {
      if (!values.includes(val)) {
        throw new TypeError("Property " + key + " expected value to be one of " + JSON.stringify(values) + " but got " + JSON.stringify(val));
      }
    }
    validate.oneOf = values;
    return validate;
  }
  var allExpandedTypes = [];
  function assertNodeType() {
    for (var _len2 = arguments.length, types = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      types[_key2] = arguments[_key2];
    }
    var expandedTypes = new Set();
    allExpandedTypes.push({
      types: types,
      set: expandedTypes
    });
    function validate(node, key, val) {
      var valType = val == null ? void 0 : val.type;
      if (valType != null) {
        if (expandedTypes.has(valType)) {
          validateChild(node, key, val);
          return;
        }
        if (valType === "Placeholder") {
          for (var _iterator = _createForOfIteratorHelperLoose(types), _step; !(_step = _iterator()).done;) {
            var type = _step.value;
            if (is(type, val)) {
              validateChild(node, key, val);
              return;
            }
          }
        }
      }
      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + JSON.stringify(types) + " but instead got " + JSON.stringify(valType));
    }
    validate.oneOfNodeTypes = types;
    return validate;
  }
  function assertNodeOrValueType() {
    for (var _len3 = arguments.length, types = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      types[_key3] = arguments[_key3];
    }
    function validate(node, key, val) {
      var primitiveType = getType(val);
      for (var _iterator2 = _createForOfIteratorHelperLoose(types), _step2; !(_step2 = _iterator2()).done;) {
        var type = _step2.value;
        if (primitiveType === type || is(type, val)) {
          validateChild(node, key, val);
          return;
        }
      }
      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + JSON.stringify(types) + " but instead got " + JSON.stringify(val == null ? void 0 : val.type));
    }
    validate.oneOfNodeOrValueTypes = types;
    return validate;
  }
  function assertValueType(type) {
    function validate(node, key, val) {
      if (getType(val) === type) {
        return;
      }
      throw new TypeError("Property " + key + " expected type of " + type + " but got " + getType(val));
    }
    validate.type = type;
    return validate;
  }
  function assertShape(shape) {
    var keys = Object.keys(shape);
    function validate(node, key, val) {
      var errors = [];
      for (var _iterator3 = _createForOfIteratorHelperLoose(keys), _step3; !(_step3 = _iterator3()).done;) {
        var property = _step3.value;
        try {
          validateField(node, property, val[property], shape[property]);
        } catch (error) {
          if (error instanceof TypeError) {
            errors.push(error.message);
            continue;
          }
          throw error;
        }
      }
      if (errors.length) {
        throw new TypeError("Property " + key + " of " + node.type + " expected to have the following:\n" + errors.join("\n"));
      }
    }
    validate.shapeOf = shape;
    return validate;
  }
  function assertOptionalChainStart() {
    function validate(node) {
      var _current2;
      var current = node;
      while (node) {
        var _current = current,
          type = _current.type;
        if (type === "OptionalCallExpression") {
          if (current.optional) return;
          current = current.callee;
          continue;
        }
        if (type === "OptionalMemberExpression") {
          if (current.optional) return;
          current = current.object;
          continue;
        }
        break;
      }
      throw new TypeError("Non-optional " + node.type + " must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from " + ((_current2 = current) == null ? void 0 : _current2.type));
    }
    return validate;
  }
  function chain() {
    for (var _len4 = arguments.length, fns = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      fns[_key4] = arguments[_key4];
    }
    function validate() {
      for (var _iterator4 = _createForOfIteratorHelperLoose(fns), _step4; !(_step4 = _iterator4()).done;) {
        var fn = _step4.value;
        fn.apply(void 0, arguments);
      }
    }
    validate.chainOf = fns;
    if (fns.length >= 2 && "type" in fns[0] && fns[0].type === "array" && !("each" in fns[1])) {
      throw new Error("An assertValueType(\"array\") validator can only be followed by an assertEach(...) validator.");
    }
    return validate;
  }
  var validTypeOpts = new Set(["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"]);
  var validFieldKeys = new Set(["default", "optional", "deprecated", "validate"]);
  var store = {};
  function defineAliasedType() {
    for (var _len5 = arguments.length, aliases = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      aliases[_key5] = arguments[_key5];
    }
    return function (type, opts) {
      var _defined;
      if (opts === void 0) {
        opts = {};
      }
      var defined = opts.aliases;
      if (!defined) {
        var _store$opts$inherits$;
        if (opts.inherits) defined = (_store$opts$inherits$ = store[opts.inherits].aliases) == null ? void 0 : _store$opts$inherits$.slice();
        defined != null ? defined : defined = [];
        opts.aliases = defined;
      }
      var additional = aliases.filter(function (a) {
        return !defined.includes(a);
      });
      (_defined = defined).unshift.apply(_defined, _toConsumableArray(additional));
      defineType$5(type, opts);
    };
  }
  function defineType$5(type, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var inherits = opts.inherits && store[opts.inherits] || {};
    var fields = opts.fields;
    if (!fields) {
      fields = {};
      if (inherits.fields) {
        var keys = Object.getOwnPropertyNames(inherits.fields);
        for (var _iterator5 = _createForOfIteratorHelperLoose(keys), _step5; !(_step5 = _iterator5()).done;) {
          var _key6 = _step5.value;
          var field = inherits.fields[_key6];
          var def = field["default"];
          if (Array.isArray(def) ? def.length > 0 : def && typeof def === "object") {
            throw new Error("field defaults can only be primitives or empty arrays currently");
          }
          fields[_key6] = {
            "default": Array.isArray(def) ? [] : def,
            optional: field.optional,
            deprecated: field.deprecated,
            validate: field.validate
          };
        }
      }
    }
    var visitor = opts.visitor || inherits.visitor || [];
    var aliases = opts.aliases || inherits.aliases || [];
    var builder = opts.builder || inherits.builder || opts.visitor || [];
    for (var _i = 0, _Object$keys = Object.keys(opts); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      if (!validTypeOpts.has(k)) {
        throw new Error("Unknown type option \"" + k + "\" on " + type);
      }
    }
    if (opts.deprecatedAlias) {
      DEPRECATED_KEYS$1[opts.deprecatedAlias] = type;
    }
    for (var _iterator6 = _createForOfIteratorHelperLoose(visitor.concat(builder)), _step6; !(_step6 = _iterator6()).done;) {
      var _key8 = _step6.value;
      fields[_key8] = fields[_key8] || {};
    }
    for (var _i2 = 0, _Object$keys2 = Object.keys(fields); _i2 < _Object$keys2.length; _i2++) {
      var _key7 = _Object$keys2[_i2];
      var _field = fields[_key7];
      if (_field["default"] !== undefined && !builder.includes(_key7)) {
        _field.optional = true;
      }
      if (_field["default"] === undefined) {
        _field["default"] = null;
      } else if (!_field.validate && _field["default"] != null) {
        _field.validate = assertValueType(getType(_field["default"]));
      }
      for (var _i3 = 0, _Object$keys3 = Object.keys(_field); _i3 < _Object$keys3.length; _i3++) {
        var _k = _Object$keys3[_i3];
        if (!validFieldKeys.has(_k)) {
          throw new Error("Unknown field key \"" + _k + "\" on " + type + "." + _key7);
        }
      }
    }
    VISITOR_KEYS$7[type] = opts.visitor = visitor;
    BUILDER_KEYS[type] = opts.builder = builder;
    NODE_FIELDS$1[type] = opts.fields = fields;
    ALIAS_KEYS[type] = opts.aliases = aliases;
    aliases.forEach(function (alias) {
      FLIPPED_ALIAS_KEYS$3[alias] = FLIPPED_ALIAS_KEYS$3[alias] || [];
      FLIPPED_ALIAS_KEYS$3[alias].push(type);
    });
    if (opts.validate) {
      NODE_PARENT_VALIDATIONS[type] = opts.validate;
    }
    store[type] = opts;
  }

  var _fields$1, _fields2$1, _fields3$1;
  var defineType$4 = defineAliasedType("Standardized");
  defineType$4("ArrayExpression", {
    fields: {
      elements: {
        validate: arrayOf(assertNodeOrValueType("null", "Expression", "SpreadElement")),
        "default": !browser$1$1.env.BABEL_TYPES_8_BREAKING ? [] : undefined
      }
    },
    visitor: ["elements"],
    aliases: ["Expression"]
  });
  defineType$4("AssignmentExpression", {
    fields: {
      operator: {
        validate: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? assertValueType("string") : Object.assign(function () {
          var identifier = assertOneOf.apply(void 0, _toConsumableArray(ASSIGNMENT_OPERATORS));
          var pattern = assertOneOf("=");
          return function (node, key, val) {
            var validator = is("Pattern", node.left) ? pattern : identifier;
            validator(node, key, val);
          };
        }(), {
          oneOf: ASSIGNMENT_OPERATORS
        })
      },
      left: {
        validate: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? assertNodeType("LVal", "OptionalMemberExpression") : assertNodeType("Identifier", "MemberExpression", "OptionalMemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
      },
      right: {
        validate: assertNodeType("Expression")
      }
    },
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Expression"]
  });
  defineType$4("BinaryExpression", {
    builder: ["operator", "left", "right"],
    fields: {
      operator: {
        validate: assertOneOf.apply(void 0, _toConsumableArray(BINARY_OPERATORS))
      },
      left: {
        validate: function () {
          var expression = assertNodeType("Expression");
          var inOp = assertNodeType("Expression", "PrivateName");
          var validator = Object.assign(function (node, key, val) {
            var validator = node.operator === "in" ? inOp : expression;
            validator(node, key, val);
          }, {
            oneOfNodeTypes: ["Expression", "PrivateName"]
          });
          return validator;
        }()
      },
      right: {
        validate: assertNodeType("Expression")
      }
    },
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"]
  });
  defineType$4("InterpreterDirective", {
    builder: ["value"],
    fields: {
      value: {
        validate: assertValueType("string")
      }
    }
  });
  defineType$4("Directive", {
    visitor: ["value"],
    fields: {
      value: {
        validate: assertNodeType("DirectiveLiteral")
      }
    }
  });
  defineType$4("DirectiveLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: assertValueType("string")
      }
    }
  });
  defineType$4("BlockStatement", {
    builder: ["body", "directives"],
    visitor: ["directives", "body"],
    fields: {
      directives: {
        validate: arrayOfType("Directive"),
        "default": []
      },
      body: validateArrayOfType("Statement")
    },
    aliases: ["Scopable", "BlockParent", "Block", "Statement"]
  });
  defineType$4("BreakStatement", {
    visitor: ["label"],
    fields: {
      label: {
        validate: assertNodeType("Identifier"),
        optional: true
      }
    },
    aliases: ["Statement", "Terminatorless", "CompletionStatement"]
  });
  defineType$4("CallExpression", {
    visitor: ["callee", "typeParameters", "typeArguments", "arguments"],
    builder: ["callee", "arguments"],
    aliases: ["Expression"],
    fields: Object.assign({
      callee: {
        validate: assertNodeType("Expression", "Super", "V8IntrinsicIdentifier")
      },
      arguments: validateArrayOfType("Expression", "SpreadElement", "ArgumentPlaceholder"),
      typeArguments: {
        validate: assertNodeType("TypeParameterInstantiation"),
        optional: true
      }
    }, browser$1$1.env.BABEL_TYPES_8_BREAKING ? {} : {
      optional: {
        validate: assertValueType("boolean"),
        optional: true
      },
      typeParameters: {
        validate: assertNodeType("TSTypeParameterInstantiation"),
        optional: true
      }
    })
  });
  defineType$4("CatchClause", {
    visitor: ["param", "body"],
    fields: {
      param: {
        validate: assertNodeType("Identifier", "ArrayPattern", "ObjectPattern"),
        optional: true
      },
      body: {
        validate: assertNodeType("BlockStatement")
      }
    },
    aliases: ["Scopable", "BlockParent"]
  });
  defineType$4("ConditionalExpression", {
    visitor: ["test", "consequent", "alternate"],
    fields: {
      test: {
        validate: assertNodeType("Expression")
      },
      consequent: {
        validate: assertNodeType("Expression")
      },
      alternate: {
        validate: assertNodeType("Expression")
      }
    },
    aliases: ["Expression", "Conditional"]
  });
  defineType$4("ContinueStatement", {
    visitor: ["label"],
    fields: {
      label: {
        validate: assertNodeType("Identifier"),
        optional: true
      }
    },
    aliases: ["Statement", "Terminatorless", "CompletionStatement"]
  });
  defineType$4("DebuggerStatement", {
    aliases: ["Statement"]
  });
  defineType$4("DoWhileStatement", {
    builder: ["test", "body"],
    visitor: ["body", "test"],
    fields: {
      test: {
        validate: assertNodeType("Expression")
      },
      body: {
        validate: assertNodeType("Statement")
      }
    },
    aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
  });
  defineType$4("EmptyStatement", {
    aliases: ["Statement"]
  });
  defineType$4("ExpressionStatement", {
    visitor: ["expression"],
    fields: {
      expression: {
        validate: assertNodeType("Expression")
      }
    },
    aliases: ["Statement", "ExpressionWrapper"]
  });
  defineType$4("File", {
    builder: ["program", "comments", "tokens"],
    visitor: ["program"],
    fields: {
      program: {
        validate: assertNodeType("Program")
      },
      comments: {
        validate: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? Object.assign(function () {}, {
          each: {
            oneOfNodeTypes: ["CommentBlock", "CommentLine"]
          }
        }) : assertEach(assertNodeType("CommentBlock", "CommentLine")),
        optional: true
      },
      tokens: {
        validate: assertEach(Object.assign(function () {}, {
          type: "any"
        })),
        optional: true
      }
    }
  });
  defineType$4("ForInStatement", {
    visitor: ["left", "right", "body"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
    fields: {
      left: {
        validate: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? assertNodeType("VariableDeclaration", "LVal") : assertNodeType("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
      },
      right: {
        validate: assertNodeType("Expression")
      },
      body: {
        validate: assertNodeType("Statement")
      }
    }
  });
  defineType$4("ForStatement", {
    visitor: ["init", "test", "update", "body"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
    fields: {
      init: {
        validate: assertNodeType("VariableDeclaration", "Expression"),
        optional: true
      },
      test: {
        validate: assertNodeType("Expression"),
        optional: true
      },
      update: {
        validate: assertNodeType("Expression"),
        optional: true
      },
      body: {
        validate: assertNodeType("Statement")
      }
    }
  });
  var functionCommon = function functionCommon() {
    return {
      params: validateArrayOfType("FunctionParameter"),
      generator: {
        "default": false
      },
      async: {
        "default": false
      }
    };
  };
  var functionTypeAnnotationCommon = function functionTypeAnnotationCommon() {
    return {
      returnType: {
        validate: assertNodeType("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: true
      },
      typeParameters: {
        validate: assertNodeType("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: true
      }
    };
  };
  var functionDeclarationCommon = function functionDeclarationCommon() {
    return Object.assign({}, functionCommon(), {
      declare: {
        validate: assertValueType("boolean"),
        optional: true
      },
      id: {
        validate: assertNodeType("Identifier"),
        optional: true
      }
    });
  };
  defineType$4("FunctionDeclaration", {
    builder: ["id", "params", "body", "generator", "async"],
    visitor: ["id", "typeParameters", "params", "predicate", "returnType", "body"],
    fields: Object.assign({}, functionDeclarationCommon(), functionTypeAnnotationCommon(), {
      body: {
        validate: assertNodeType("BlockStatement")
      },
      predicate: {
        validate: assertNodeType("DeclaredPredicate", "InferredPredicate"),
        optional: true
      }
    }),
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
    validate: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? undefined : function () {
      var identifier = assertNodeType("Identifier");
      return function (parent, key, node) {
        if (!is("ExportDefaultDeclaration", parent)) {
          identifier(node, "id", node.id);
        }
      };
    }()
  });
  defineType$4("FunctionExpression", {
    inherits: "FunctionDeclaration",
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
    fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
      id: {
        validate: assertNodeType("Identifier"),
        optional: true
      },
      body: {
        validate: assertNodeType("BlockStatement")
      },
      predicate: {
        validate: assertNodeType("DeclaredPredicate", "InferredPredicate"),
        optional: true
      }
    })
  });
  var patternLikeCommon = function patternLikeCommon() {
    return {
      typeAnnotation: {
        validate: assertNodeType("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: true
      },
      optional: {
        validate: assertValueType("boolean"),
        optional: true
      },
      decorators: {
        validate: arrayOfType("Decorator"),
        optional: true
      }
    };
  };
  defineType$4("Identifier", {
    builder: ["name"],
    visitor: ["typeAnnotation", "decorators"],
    aliases: ["Expression", "FunctionParameter", "PatternLike", "LVal", "TSEntityName"],
    fields: Object.assign({}, patternLikeCommon(), {
      name: {
        validate: browser$1$1.env.BABEL_TYPES_8_BREAKING ? chain(assertValueType("string"), Object.assign(function (node, key, val) {
          if (!isValidIdentifier$1(val, false)) {
            throw new TypeError("\"" + val + "\" is not a valid identifier name");
          }
        }, {
          type: "string"
        })) : assertValueType("string")
      }
    }),
    validate: browser$1$1.env.BABEL_TYPES_8_BREAKING ? function (parent, key, node) {
      var match = /\.(\w+)$/.exec(key.toString());
      if (!match) return;
      var _match = _slicedToArray(match, 2),
        parentKey = _match[1];
      var nonComp = {
        computed: false
      };
      if (parentKey === "property") {
        if (is("MemberExpression", parent, nonComp)) return;
        if (is("OptionalMemberExpression", parent, nonComp)) return;
      } else if (parentKey === "key") {
        if (is("Property", parent, nonComp)) return;
        if (is("Method", parent, nonComp)) return;
      } else if (parentKey === "exported") {
        if (is("ExportSpecifier", parent)) return;
      } else if (parentKey === "imported") {
        if (is("ImportSpecifier", parent, {
          imported: node
        })) return;
      } else if (parentKey === "meta") {
        if (is("MetaProperty", parent, {
          meta: node
        })) return;
      }
      if ((isKeyword(node.name) || isReservedWord(node.name, false)) && node.name !== "this") {
        throw new TypeError("\"" + node.name + "\" is not a valid identifier");
      }
    } : undefined
  });
  defineType$4("IfStatement", {
    visitor: ["test", "consequent", "alternate"],
    aliases: ["Statement", "Conditional"],
    fields: {
      test: {
        validate: assertNodeType("Expression")
      },
      consequent: {
        validate: assertNodeType("Statement")
      },
      alternate: {
        optional: true,
        validate: assertNodeType("Statement")
      }
    }
  });
  defineType$4("LabeledStatement", {
    visitor: ["label", "body"],
    aliases: ["Statement"],
    fields: {
      label: {
        validate: assertNodeType("Identifier")
      },
      body: {
        validate: assertNodeType("Statement")
      }
    }
  });
  defineType$4("StringLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: assertValueType("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  defineType$4("NumericLiteral", {
    builder: ["value"],
    deprecatedAlias: "NumberLiteral",
    fields: {
      value: {
        validate: chain(assertValueType("number"), Object.assign(function (node, key, val) {
        }, {
          type: "number"
        }))
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  defineType$4("NullLiteral", {
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  defineType$4("BooleanLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: assertValueType("boolean")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  defineType$4("RegExpLiteral", {
    builder: ["pattern", "flags"],
    deprecatedAlias: "RegexLiteral",
    aliases: ["Expression", "Pureish", "Literal"],
    fields: {
      pattern: {
        validate: assertValueType("string")
      },
      flags: {
        validate: browser$1$1.env.BABEL_TYPES_8_BREAKING ? chain(assertValueType("string"), Object.assign(function (node, key, val) {
          var invalid = /[^gimsuy]/.exec(val);
          if (invalid) {
            throw new TypeError("\"" + invalid[0] + "\" is not a valid RegExp flag");
          }
        }, {
          type: "string"
        })) : assertValueType("string"),
        "default": ""
      }
    }
  });
  defineType$4("LogicalExpression", {
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"],
    fields: {
      operator: {
        validate: assertOneOf.apply(void 0, _toConsumableArray(LOGICAL_OPERATORS$2))
      },
      left: {
        validate: assertNodeType("Expression")
      },
      right: {
        validate: assertNodeType("Expression")
      }
    }
  });
  defineType$4("MemberExpression", {
    builder: ["object", "property", "computed"].concat(_toConsumableArray(!browser$1$1.env.BABEL_TYPES_8_BREAKING ? ["optional"] : [])),
    visitor: ["object", "property"],
    aliases: ["Expression", "LVal", "PatternLike"],
    fields: Object.assign({
      object: {
        validate: assertNodeType("Expression", "Super")
      },
      property: {
        validate: function () {
          var normal = assertNodeType("Identifier", "PrivateName");
          var computed = assertNodeType("Expression");
          var validator = function validator(node, key, val) {
            var validator = node.computed ? computed : normal;
            validator(node, key, val);
          };
          validator.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"];
          return validator;
        }()
      },
      computed: {
        "default": false
      }
    }, !browser$1$1.env.BABEL_TYPES_8_BREAKING ? {
      optional: {
        validate: assertValueType("boolean"),
        optional: true
      }
    } : {})
  });
  defineType$4("NewExpression", {
    inherits: "CallExpression"
  });
  defineType$4("Program", {
    visitor: ["directives", "body"],
    builder: ["body", "directives", "sourceType", "interpreter"],
    fields: {
      sourceType: {
        validate: assertOneOf("script", "module"),
        "default": "script"
      },
      interpreter: {
        validate: assertNodeType("InterpreterDirective"),
        "default": null,
        optional: true
      },
      directives: {
        validate: arrayOfType("Directive"),
        "default": []
      },
      body: validateArrayOfType("Statement")
    },
    aliases: ["Scopable", "BlockParent", "Block"]
  });
  defineType$4("ObjectExpression", {
    visitor: ["properties"],
    aliases: ["Expression"],
    fields: {
      properties: validateArrayOfType("ObjectMethod", "ObjectProperty", "SpreadElement")
    }
  });
  defineType$4("ObjectMethod", {
    builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
    visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
    fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
      kind: Object.assign({
        validate: assertOneOf("method", "get", "set")
      }, !browser$1$1.env.BABEL_TYPES_8_BREAKING ? {
        "default": "method"
      } : {}),
      computed: {
        "default": false
      },
      key: {
        validate: function () {
          var normal = assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral");
          var computed = assertNodeType("Expression");
          var validator = function validator(node, key, val) {
            var validator = node.computed ? computed : normal;
            validator(node, key, val);
          };
          validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral"];
          return validator;
        }()
      },
      decorators: {
        validate: arrayOfType("Decorator"),
        optional: true
      },
      body: {
        validate: assertNodeType("BlockStatement")
      }
    }),
    aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
  });
  defineType$4("ObjectProperty", {
    builder: ["key", "value", "computed", "shorthand"].concat(_toConsumableArray(!browser$1$1.env.BABEL_TYPES_8_BREAKING ? ["decorators"] : [])),
    fields: {
      computed: {
        "default": false
      },
      key: {
        validate: function () {
          var normal = assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName");
          var computed = assertNodeType("Expression");
          var validator = Object.assign(function (node, key, val) {
            var validator = node.computed ? computed : normal;
            validator(node, key, val);
          }, {
            oneOfNodeTypes: ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"]
          });
          return validator;
        }()
      },
      value: {
        validate: assertNodeType("Expression", "PatternLike")
      },
      shorthand: {
        validate: browser$1$1.env.BABEL_TYPES_8_BREAKING ? chain(assertValueType("boolean"), Object.assign(function (node, key, shorthand) {
          if (!shorthand) return;
          if (node.computed) {
            throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
          }
          if (!is("Identifier", node.key)) {
            throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
          }
        }, {
          type: "boolean"
        })) : assertValueType("boolean"),
        "default": false
      },
      decorators: {
        validate: arrayOfType("Decorator"),
        optional: true
      }
    },
    visitor: ["decorators", "key", "value"],
    aliases: ["UserWhitespacable", "Property", "ObjectMember"],
    validate: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? undefined : function () {
      var pattern = assertNodeType("Identifier", "Pattern", "TSAsExpression", "TSSatisfiesExpression", "TSNonNullExpression", "TSTypeAssertion");
      var expression = assertNodeType("Expression");
      return function (parent, key, node) {
        var validator = is("ObjectPattern", parent) ? pattern : expression;
        validator(node, "value", node.value);
      };
    }()
  });
  defineType$4("RestElement", {
    visitor: ["argument", "typeAnnotation"],
    builder: ["argument"],
    aliases: ["FunctionParameter", "PatternLike", "LVal"],
    deprecatedAlias: "RestProperty",
    fields: Object.assign({}, patternLikeCommon(), {
      argument: {
        validate: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? assertNodeType("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression", "RestElement", "AssignmentPattern") : assertNodeType("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
      }
    }),
    validate: browser$1$1.env.BABEL_TYPES_8_BREAKING ? function (parent, key) {
      var match = /(\w+)\[(\d+)\]/.exec(key.toString());
      if (!match) throw new Error("Internal Babel error: malformed key.");
      var _ref = match,
        _ref2 = _slicedToArray(_ref, 3),
        listKey = _ref2[1],
        index = _ref2[2];
      if (parent[listKey].length > +index + 1) {
        throw new TypeError("RestElement must be last element of " + listKey);
      }
    } : undefined
  });
  defineType$4("ReturnStatement", {
    visitor: ["argument"],
    aliases: ["Statement", "Terminatorless", "CompletionStatement"],
    fields: {
      argument: {
        validate: assertNodeType("Expression"),
        optional: true
      }
    }
  });
  defineType$4("SequenceExpression", {
    visitor: ["expressions"],
    fields: {
      expressions: validateArrayOfType("Expression")
    },
    aliases: ["Expression"]
  });
  defineType$4("ParenthesizedExpression", {
    visitor: ["expression"],
    aliases: ["Expression", "ExpressionWrapper"],
    fields: {
      expression: {
        validate: assertNodeType("Expression")
      }
    }
  });
  defineType$4("SwitchCase", {
    visitor: ["test", "consequent"],
    fields: {
      test: {
        validate: assertNodeType("Expression"),
        optional: true
      },
      consequent: validateArrayOfType("Statement")
    }
  });
  defineType$4("SwitchStatement", {
    visitor: ["discriminant", "cases"],
    aliases: ["Statement", "BlockParent", "Scopable"],
    fields: {
      discriminant: {
        validate: assertNodeType("Expression")
      },
      cases: validateArrayOfType("SwitchCase")
    }
  });
  defineType$4("ThisExpression", {
    aliases: ["Expression"]
  });
  defineType$4("ThrowStatement", {
    visitor: ["argument"],
    aliases: ["Statement", "Terminatorless", "CompletionStatement"],
    fields: {
      argument: {
        validate: assertNodeType("Expression")
      }
    }
  });
  defineType$4("TryStatement", {
    visitor: ["block", "handler", "finalizer"],
    aliases: ["Statement"],
    fields: {
      block: {
        validate: browser$1$1.env.BABEL_TYPES_8_BREAKING ? chain(assertNodeType("BlockStatement"), Object.assign(function (node) {
          if (!node.handler && !node.finalizer) {
            throw new TypeError("TryStatement expects either a handler or finalizer, or both");
          }
        }, {
          oneOfNodeTypes: ["BlockStatement"]
        })) : assertNodeType("BlockStatement")
      },
      handler: {
        optional: true,
        validate: assertNodeType("CatchClause")
      },
      finalizer: {
        optional: true,
        validate: assertNodeType("BlockStatement")
      }
    }
  });
  defineType$4("UnaryExpression", {
    builder: ["operator", "argument", "prefix"],
    fields: {
      prefix: {
        "default": true
      },
      argument: {
        validate: assertNodeType("Expression")
      },
      operator: {
        validate: assertOneOf.apply(void 0, _toConsumableArray(UNARY_OPERATORS))
      }
    },
    visitor: ["argument"],
    aliases: ["UnaryLike", "Expression"]
  });
  defineType$4("UpdateExpression", {
    builder: ["operator", "argument", "prefix"],
    fields: {
      prefix: {
        "default": false
      },
      argument: {
        validate: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? assertNodeType("Expression") : assertNodeType("Identifier", "MemberExpression")
      },
      operator: {
        validate: assertOneOf.apply(void 0, _toConsumableArray(UPDATE_OPERATORS))
      }
    },
    visitor: ["argument"],
    aliases: ["Expression"]
  });
  defineType$4("VariableDeclaration", {
    builder: ["kind", "declarations"],
    visitor: ["declarations"],
    aliases: ["Statement", "Declaration"],
    fields: {
      declare: {
        validate: assertValueType("boolean"),
        optional: true
      },
      kind: {
        validate: assertOneOf("var", "let", "const", "using", "await using")
      },
      declarations: validateArrayOfType("VariableDeclarator")
    },
    validate: browser$1$1.env.BABEL_TYPES_8_BREAKING ? function () {
      var withoutInit = assertNodeType("Identifier", "Placeholder");
      var constOrLetOrVar = assertNodeType("Identifier", "ArrayPattern", "ObjectPattern", "Placeholder");
      var usingOrAwaitUsing = assertNodeType("Identifier", "VoidPattern", "Placeholder");
      return function (parent, key, node) {
        var kind = node.kind,
          declarations = node.declarations;
        var parentIsForX = is("ForXStatement", parent, {
          left: node
        });
        if (parentIsForX) {
          if (declarations.length !== 1) {
            throw new TypeError("Exactly one VariableDeclarator is required in the VariableDeclaration of a " + parent.type);
          }
        }
        for (var _iterator = _createForOfIteratorHelperLoose(declarations), _step; !(_step = _iterator()).done;) {
          var decl = _step.value;
          if (kind === "const" || kind === "let" || kind === "var") {
            if (!parentIsForX && !decl.init) {
              withoutInit(decl, "id", decl.id);
            } else {
              constOrLetOrVar(decl, "id", decl.id);
            }
          } else {
            usingOrAwaitUsing(decl, "id", decl.id);
          }
        }
      };
    }() : undefined
  });
  defineType$4("VariableDeclarator", {
    visitor: ["id", "init"],
    fields: {
      id: {
        validate: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? assertNodeType("LVal", "VoidPattern") : assertNodeType("Identifier", "ArrayPattern", "ObjectPattern", "VoidPattern")
      },
      definite: {
        optional: true,
        validate: assertValueType("boolean")
      },
      init: {
        optional: true,
        validate: assertNodeType("Expression")
      }
    }
  });
  defineType$4("WhileStatement", {
    visitor: ["test", "body"],
    aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
    fields: {
      test: {
        validate: assertNodeType("Expression")
      },
      body: {
        validate: assertNodeType("Statement")
      }
    }
  });
  defineType$4("WithStatement", {
    visitor: ["object", "body"],
    aliases: ["Statement"],
    fields: {
      object: {
        validate: assertNodeType("Expression")
      },
      body: {
        validate: assertNodeType("Statement")
      }
    }
  });
  defineType$4("AssignmentPattern", {
    visitor: ["left", "right", "decorators"],
    builder: ["left", "right"],
    aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, patternLikeCommon(), {
      left: {
        validate: assertNodeType("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
      },
      right: {
        validate: assertNodeType("Expression")
      },
      decorators: {
        validate: arrayOfType("Decorator"),
        optional: true
      }
    })
  });
  defineType$4("ArrayPattern", {
    visitor: ["elements", "typeAnnotation"],
    builder: ["elements"],
    aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, patternLikeCommon(), {
      elements: {
        validate: chain(assertValueType("array"), assertEach(assertNodeOrValueType("null", "PatternLike")))
      }
    })
  });
  defineType$4("ArrowFunctionExpression", {
    builder: ["params", "body", "async"],
    visitor: ["typeParameters", "params", "predicate", "returnType", "body"],
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
    fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
      expression: {
        validate: assertValueType("boolean")
      },
      body: {
        validate: assertNodeType("BlockStatement", "Expression")
      },
      predicate: {
        validate: assertNodeType("DeclaredPredicate", "InferredPredicate"),
        optional: true
      }
    })
  });
  defineType$4("ClassBody", {
    visitor: ["body"],
    fields: {
      body: validateArrayOfType("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "ClassAccessorProperty", "TSDeclareMethod", "TSIndexSignature", "StaticBlock")
    }
  });
  defineType$4("ClassExpression", {
    builder: ["id", "superClass", "body", "decorators"],
    visitor: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body"],
    aliases: ["Scopable", "Class", "Expression"],
    fields: (_fields$1 = {
      id: {
        validate: assertNodeType("Identifier"),
        optional: true
      },
      typeParameters: {
        validate: assertNodeType("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: true
      },
      body: {
        validate: assertNodeType("ClassBody")
      },
      superClass: {
        optional: true,
        validate: assertNodeType("Expression")
      }
    }, _fields$1["superTypeParameters"] = {
      validate: assertNodeType("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }, _fields$1["implements"] = {
      validate: arrayOfType("TSExpressionWithTypeArguments", "ClassImplements"),
      optional: true
    }, _fields$1.decorators = {
      validate: arrayOfType("Decorator"),
      optional: true
    }, _fields$1.mixins = {
      validate: assertNodeType("InterfaceExtends"),
      optional: true
    }, _fields$1)
  });
  defineType$4("ClassDeclaration", {
    inherits: "ClassExpression",
    aliases: ["Scopable", "Class", "Statement", "Declaration"],
    fields: (_fields2$1 = {
      id: {
        validate: assertNodeType("Identifier"),
        optional: true
      },
      typeParameters: {
        validate: assertNodeType("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: true
      },
      body: {
        validate: assertNodeType("ClassBody")
      },
      superClass: {
        optional: true,
        validate: assertNodeType("Expression")
      }
    }, _fields2$1["superTypeParameters"] = {
      validate: assertNodeType("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }, _fields2$1["implements"] = {
      validate: arrayOfType("TSExpressionWithTypeArguments", "ClassImplements"),
      optional: true
    }, _fields2$1.decorators = {
      validate: arrayOfType("Decorator"),
      optional: true
    }, _fields2$1.mixins = {
      validate: assertNodeType("InterfaceExtends"),
      optional: true
    }, _fields2$1.declare = {
      validate: assertValueType("boolean"),
      optional: true
    }, _fields2$1["abstract"] = {
      validate: assertValueType("boolean"),
      optional: true
    }, _fields2$1),
    validate: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? undefined : function () {
      var identifier = assertNodeType("Identifier");
      return function (parent, key, node) {
        if (!is("ExportDefaultDeclaration", parent)) {
          identifier(node, "id", node.id);
        }
      };
    }()
  });
  var importAttributes = {
    attributes: {
      optional: true,
      validate: arrayOfType("ImportAttribute")
    },
    assertions: {
      deprecated: true,
      optional: true,
      validate: arrayOfType("ImportAttribute")
    }
  };
  defineType$4("ExportAllDeclaration", {
    builder: ["source"],
    visitor: ["source", "attributes", "assertions"],
    aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
    fields: Object.assign({
      source: {
        validate: assertNodeType("StringLiteral")
      },
      exportKind: validateOptional(assertOneOf("type", "value"))
    }, importAttributes)
  });
  defineType$4("ExportDefaultDeclaration", {
    visitor: ["declaration"],
    aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
    fields: {
      declaration: validateType("TSDeclareFunction", "FunctionDeclaration", "ClassDeclaration", "Expression"),
      exportKind: validateOptional(assertOneOf("value"))
    }
  });
  defineType$4("ExportNamedDeclaration", {
    builder: ["declaration", "specifiers", "source"],
    visitor: ["declaration", "specifiers", "source", "attributes", "assertions"],
    aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
    fields: Object.assign({
      declaration: {
        optional: true,
        validate: browser$1$1.env.BABEL_TYPES_8_BREAKING ? chain(assertNodeType("Declaration"), Object.assign(function (node, key, val) {
          if (val && node.specifiers.length) {
            throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
          }
          if (val && node.source) {
            throw new TypeError("Cannot export a declaration from a source");
          }
        }, {
          oneOfNodeTypes: ["Declaration"]
        })) : assertNodeType("Declaration")
      }
    }, importAttributes, {
      specifiers: {
        "default": [],
        validate: arrayOf(function () {
          var sourced = assertNodeType("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
          var sourceless = assertNodeType("ExportSpecifier");
          if (!browser$1$1.env.BABEL_TYPES_8_BREAKING) return sourced;
          return Object.assign(function (node, key, val) {
            var validator = node.source ? sourced : sourceless;
            validator(node, key, val);
          }, {
            oneOfNodeTypes: ["ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier"]
          });
        }())
      },
      source: {
        validate: assertNodeType("StringLiteral"),
        optional: true
      },
      exportKind: validateOptional(assertOneOf("type", "value"))
    })
  });
  defineType$4("ExportSpecifier", {
    visitor: ["local", "exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: assertNodeType("Identifier")
      },
      exported: {
        validate: assertNodeType("Identifier", "StringLiteral")
      },
      exportKind: {
        validate: assertOneOf("type", "value"),
        optional: true
      }
    }
  });
  defineType$4("ForOfStatement", {
    visitor: ["left", "right", "body"],
    builder: ["left", "right", "body", "await"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
    fields: {
      left: {
        validate: function () {
          if (!browser$1$1.env.BABEL_TYPES_8_BREAKING) {
            return assertNodeType("VariableDeclaration", "LVal");
          }
          var declaration = assertNodeType("VariableDeclaration");
          var lval = assertNodeType("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression");
          return Object.assign(function (node, key, val) {
            if (is("VariableDeclaration", val)) {
              declaration(node, key, val);
            } else {
              lval(node, key, val);
            }
          }, {
            oneOfNodeTypes: ["VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression"]
          });
        }()
      },
      right: {
        validate: assertNodeType("Expression")
      },
      body: {
        validate: assertNodeType("Statement")
      },
      "await": {
        "default": false
      }
    }
  });
  defineType$4("ImportDeclaration", {
    builder: ["specifiers", "source"],
    visitor: ["specifiers", "source", "attributes", "assertions"],
    aliases: ["Statement", "Declaration", "ImportOrExportDeclaration"],
    fields: Object.assign({}, importAttributes, {
      module: {
        optional: true,
        validate: assertValueType("boolean")
      },
      phase: {
        "default": null,
        validate: assertOneOf("source", "defer")
      },
      specifiers: validateArrayOfType("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier"),
      source: {
        validate: assertNodeType("StringLiteral")
      },
      importKind: {
        validate: assertOneOf("type", "typeof", "value"),
        optional: true
      }
    })
  });
  defineType$4("ImportDefaultSpecifier", {
    visitor: ["local"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: assertNodeType("Identifier")
      }
    }
  });
  defineType$4("ImportNamespaceSpecifier", {
    visitor: ["local"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: assertNodeType("Identifier")
      }
    }
  });
  defineType$4("ImportSpecifier", {
    visitor: ["imported", "local"],
    builder: ["local", "imported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: assertNodeType("Identifier")
      },
      imported: {
        validate: assertNodeType("Identifier", "StringLiteral")
      },
      importKind: {
        validate: assertOneOf("type", "typeof", "value"),
        optional: true
      }
    }
  });
  defineType$4("ImportExpression", {
    visitor: ["source", "options"],
    aliases: ["Expression"],
    fields: {
      phase: {
        "default": null,
        validate: assertOneOf("source", "defer")
      },
      source: {
        validate: assertNodeType("Expression")
      },
      options: {
        validate: assertNodeType("Expression"),
        optional: true
      }
    }
  });
  defineType$4("MetaProperty", {
    visitor: ["meta", "property"],
    aliases: ["Expression"],
    fields: {
      meta: {
        validate: browser$1$1.env.BABEL_TYPES_8_BREAKING ? chain(assertNodeType("Identifier"), Object.assign(function (node, key, val) {
          var property;
          switch (val.name) {
            case "function":
              property = "sent";
              break;
            case "new":
              property = "target";
              break;
            case "import":
              property = "meta";
              break;
          }
          if (!is("Identifier", node.property, {
            name: property
          })) {
            throw new TypeError("Unrecognised MetaProperty");
          }
        }, {
          oneOfNodeTypes: ["Identifier"]
        })) : assertNodeType("Identifier")
      },
      property: {
        validate: assertNodeType("Identifier")
      }
    }
  });
  var classMethodOrPropertyCommon = function classMethodOrPropertyCommon() {
    return {
      "abstract": {
        validate: assertValueType("boolean"),
        optional: true
      },
      accessibility: {
        validate: assertOneOf("public", "private", "protected"),
        optional: true
      },
      "static": {
        "default": false
      },
      override: {
        "default": false
      },
      computed: {
        "default": false
      },
      optional: {
        validate: assertValueType("boolean"),
        optional: true
      },
      key: {
        validate: chain(function () {
          var normal = assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral");
          var computed = assertNodeType("Expression");
          return function (node, key, val) {
            var validator = node.computed ? computed : normal;
            validator(node, key, val);
          };
        }(), assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression"))
      }
    };
  };
  var classMethodOrDeclareMethodCommon = function classMethodOrDeclareMethodCommon() {
    return Object.assign({}, functionCommon(), classMethodOrPropertyCommon(), {
      params: validateArrayOfType("FunctionParameter", "TSParameterProperty"),
      kind: {
        validate: assertOneOf("get", "set", "method", "constructor"),
        "default": "method"
      },
      access: {
        validate: chain(assertValueType("string"), assertOneOf("public", "private", "protected")),
        optional: true
      },
      decorators: {
        validate: arrayOfType("Decorator"),
        optional: true
      }
    });
  };
  defineType$4("ClassMethod", {
    aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
    builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
    visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
    fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
      body: {
        validate: assertNodeType("BlockStatement")
      }
    })
  });
  defineType$4("ObjectPattern", {
    visitor: ["decorators", "properties", "typeAnnotation"],
    builder: ["properties"],
    aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, patternLikeCommon(), {
      properties: validateArrayOfType("RestElement", "ObjectProperty")
    })
  });
  defineType$4("SpreadElement", {
    visitor: ["argument"],
    aliases: ["UnaryLike"],
    deprecatedAlias: "SpreadProperty",
    fields: {
      argument: {
        validate: assertNodeType("Expression")
      }
    }
  });
  defineType$4("Super", {
    aliases: ["Expression"]
  });
  defineType$4("TaggedTemplateExpression", {
    visitor: ["tag", "typeParameters", "quasi"],
    builder: ["tag", "quasi"],
    aliases: ["Expression"],
    fields: (_fields3$1 = {
      tag: {
        validate: assertNodeType("Expression")
      },
      quasi: {
        validate: assertNodeType("TemplateLiteral")
      }
    }, _fields3$1["typeParameters"] = {
      validate: assertNodeType("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }, _fields3$1)
  });
  defineType$4("TemplateElement", {
    builder: ["value", "tail"],
    fields: {
      value: {
        validate: chain(assertShape({
          raw: {
            validate: assertValueType("string")
          },
          cooked: {
            validate: assertValueType("string"),
            optional: true
          }
        }), function templateElementCookedValidator(node) {
          var raw = node.value.raw;
          var unterminatedCalled = false;
          var error = function error() {
            throw new Error("Internal @babel/types error.");
          };
          var _readStringContents = readStringContents("template", raw, 0, 0, 0, {
              unterminated: function unterminated() {
                unterminatedCalled = true;
              },
              strictNumericEscape: error,
              invalidEscapeSequence: error,
              numericSeparatorInEscapeSequence: error,
              unexpectedNumericSeparator: error,
              invalidDigit: error,
              invalidCodePoint: error
            }),
            str = _readStringContents.str,
            firstInvalidLoc = _readStringContents.firstInvalidLoc;
          if (!unterminatedCalled) throw new Error("Invalid raw");
          node.value.cooked = firstInvalidLoc ? null : str;
        })
      },
      tail: {
        "default": false
      }
    }
  });
  defineType$4("TemplateLiteral", {
    visitor: ["quasis", "expressions"],
    aliases: ["Expression", "Literal"],
    fields: {
      quasis: validateArrayOfType("TemplateElement"),
      expressions: {
        validate: chain(assertValueType("array"), assertEach(assertNodeType("Expression", "TSType")), function (node, key, val) {
          if (node.quasis.length !== val.length + 1) {
            throw new TypeError("Number of " + node.type + " quasis should be exactly one more than the number of expressions.\nExpected " + (val.length + 1) + " quasis but got " + node.quasis.length);
          }
        })
      }
    }
  });
  defineType$4("YieldExpression", {
    builder: ["argument", "delegate"],
    visitor: ["argument"],
    aliases: ["Expression", "Terminatorless"],
    fields: {
      delegate: {
        validate: browser$1$1.env.BABEL_TYPES_8_BREAKING ? chain(assertValueType("boolean"), Object.assign(function (node, key, val) {
          if (val && !node.argument) {
            throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
          }
        }, {
          type: "boolean"
        })) : assertValueType("boolean"),
        "default": false
      },
      argument: {
        optional: true,
        validate: assertNodeType("Expression")
      }
    }
  });
  defineType$4("AwaitExpression", {
    builder: ["argument"],
    visitor: ["argument"],
    aliases: ["Expression", "Terminatorless"],
    fields: {
      argument: {
        validate: assertNodeType("Expression")
      }
    }
  });
  defineType$4("Import", {
    aliases: ["Expression"]
  });
  defineType$4("BigIntLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: assertValueType("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  defineType$4("ExportNamespaceSpecifier", {
    visitor: ["exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      exported: {
        validate: assertNodeType("Identifier")
      }
    }
  });
  defineType$4("OptionalMemberExpression", {
    builder: ["object", "property", "computed", "optional"],
    visitor: ["object", "property"],
    aliases: ["Expression"],
    fields: {
      object: {
        validate: assertNodeType("Expression")
      },
      property: {
        validate: function () {
          var normal = assertNodeType("Identifier");
          var computed = assertNodeType("Expression");
          var validator = Object.assign(function (node, key, val) {
            var validator = node.computed ? computed : normal;
            validator(node, key, val);
          }, {
            oneOfNodeTypes: ["Expression", "Identifier"]
          });
          return validator;
        }()
      },
      computed: {
        "default": false
      },
      optional: {
        validate: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? assertValueType("boolean") : chain(assertValueType("boolean"), assertOptionalChainStart())
      }
    }
  });
  defineType$4("OptionalCallExpression", {
    visitor: ["callee", "typeParameters", "typeArguments", "arguments"],
    builder: ["callee", "arguments", "optional"],
    aliases: ["Expression"],
    fields: Object.assign({
      callee: {
        validate: assertNodeType("Expression")
      },
      arguments: validateArrayOfType("Expression", "SpreadElement", "ArgumentPlaceholder"),
      optional: {
        validate: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? assertValueType("boolean") : chain(assertValueType("boolean"), assertOptionalChainStart())
      },
      typeArguments: {
        validate: assertNodeType("TypeParameterInstantiation"),
        optional: true
      }
    }, {
      typeParameters: {
        validate: assertNodeType("TSTypeParameterInstantiation"),
        optional: true
      }
    })
  });
  defineType$4("ClassProperty", {
    visitor: ["decorators", "variance", "key", "typeAnnotation", "value"],
    builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
    aliases: ["Property"],
    fields: Object.assign({}, classMethodOrPropertyCommon(), {
      value: {
        validate: assertNodeType("Expression"),
        optional: true
      },
      definite: {
        validate: assertValueType("boolean"),
        optional: true
      },
      typeAnnotation: {
        validate: assertNodeType("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: true
      },
      decorators: {
        validate: arrayOfType("Decorator"),
        optional: true
      },
      readonly: {
        validate: assertValueType("boolean"),
        optional: true
      },
      declare: {
        validate: assertValueType("boolean"),
        optional: true
      },
      variance: {
        validate: assertNodeType("Variance"),
        optional: true
      }
    })
  });
  defineType$4("ClassAccessorProperty", {
    visitor: ["decorators", "key", "typeAnnotation", "value"],
    builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
    aliases: ["Property", "Accessor"],
    fields: Object.assign({}, classMethodOrPropertyCommon(), {
      key: {
        validate: chain(function () {
          var normal = assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName");
          var computed = assertNodeType("Expression");
          return function (node, key, val) {
            var validator = node.computed ? computed : normal;
            validator(node, key, val);
          };
        }(), assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression", "PrivateName"))
      },
      value: {
        validate: assertNodeType("Expression"),
        optional: true
      },
      definite: {
        validate: assertValueType("boolean"),
        optional: true
      },
      typeAnnotation: {
        validate: assertNodeType("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: true
      },
      decorators: {
        validate: arrayOfType("Decorator"),
        optional: true
      },
      readonly: {
        validate: assertValueType("boolean"),
        optional: true
      },
      declare: {
        validate: assertValueType("boolean"),
        optional: true
      },
      variance: {
        validate: assertNodeType("Variance"),
        optional: true
      }
    })
  });
  defineType$4("ClassPrivateProperty", {
    visitor: ["decorators", "variance", "key", "typeAnnotation", "value"],
    builder: ["key", "value", "decorators", "static"],
    aliases: ["Property", "Private"],
    fields: {
      key: {
        validate: assertNodeType("PrivateName")
      },
      value: {
        validate: assertNodeType("Expression"),
        optional: true
      },
      typeAnnotation: {
        validate: assertNodeType("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: true
      },
      decorators: {
        validate: arrayOfType("Decorator"),
        optional: true
      },
      "static": {
        validate: assertValueType("boolean"),
        "default": false
      },
      readonly: {
        validate: assertValueType("boolean"),
        optional: true
      },
      optional: {
        validate: assertValueType("boolean"),
        optional: true
      },
      definite: {
        validate: assertValueType("boolean"),
        optional: true
      },
      variance: {
        validate: assertNodeType("Variance"),
        optional: true
      }
    }
  });
  defineType$4("ClassPrivateMethod", {
    builder: ["kind", "key", "params", "body", "static"],
    visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
    aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
    fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
      kind: {
        validate: assertOneOf("get", "set", "method"),
        "default": "method"
      },
      key: {
        validate: assertNodeType("PrivateName")
      },
      body: {
        validate: assertNodeType("BlockStatement")
      }
    })
  });
  defineType$4("PrivateName", {
    visitor: ["id"],
    aliases: ["Private"],
    fields: {
      id: {
        validate: assertNodeType("Identifier")
      }
    }
  });
  defineType$4("StaticBlock", {
    visitor: ["body"],
    fields: {
      body: validateArrayOfType("Statement")
    },
    aliases: ["Scopable", "BlockParent", "FunctionParent"]
  });
  defineType$4("ImportAttribute", {
    visitor: ["key", "value"],
    fields: {
      key: {
        validate: assertNodeType("Identifier", "StringLiteral")
      },
      value: {
        validate: assertNodeType("StringLiteral")
      }
    }
  });

  var defineType$3 = defineAliasedType("Flow");
  var defineInterfaceishType = function defineInterfaceishType(name) {
    var isDeclareClass = name === "DeclareClass";
    defineType$3(name, {
      builder: ["id", "typeParameters", "extends", "body"],
      visitor: ["id", "typeParameters", "extends"].concat(_toConsumableArray(isDeclareClass ? ["mixins", "implements"] : []), ["body"]),
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: Object.assign({
        id: validateType("Identifier"),
        typeParameters: validateOptionalType("TypeParameterDeclaration"),
        "extends": validateOptional(arrayOfType("InterfaceExtends"))
      }, isDeclareClass ? {
        mixins: validateOptional(arrayOfType("InterfaceExtends")),
        "implements": validateOptional(arrayOfType("ClassImplements"))
      } : {}, {
        body: validateType("ObjectTypeAnnotation")
      })
    });
  };
  defineType$3("AnyTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  defineType$3("ArrayTypeAnnotation", {
    visitor: ["elementType"],
    aliases: ["FlowType"],
    fields: {
      elementType: validateType("FlowType")
    }
  });
  defineType$3("BooleanTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  defineType$3("BooleanLiteralTypeAnnotation", {
    builder: ["value"],
    aliases: ["FlowType"],
    fields: {
      value: validate$7(assertValueType("boolean"))
    }
  });
  defineType$3("NullLiteralTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  defineType$3("ClassImplements", {
    visitor: ["id", "typeParameters"],
    fields: {
      id: validateType("Identifier"),
      typeParameters: validateOptionalType("TypeParameterInstantiation")
    }
  });
  defineInterfaceishType("DeclareClass");
  defineType$3("DeclareFunction", {
    builder: ["id"],
    visitor: ["id", "predicate"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: validateType("Identifier"),
      predicate: validateOptionalType("DeclaredPredicate")
    }
  });
  defineInterfaceishType("DeclareInterface");
  defineType$3("DeclareModule", {
    builder: ["id", "body", "kind"],
    visitor: ["id", "body"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: validateType("Identifier", "StringLiteral"),
      body: validateType("BlockStatement"),
      kind: validateOptional(assertOneOf("CommonJS", "ES"))
    }
  });
  defineType$3("DeclareModuleExports", {
    visitor: ["typeAnnotation"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      typeAnnotation: validateType("TypeAnnotation")
    }
  });
  defineType$3("DeclareTypeAlias", {
    visitor: ["id", "typeParameters", "right"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: validateType("Identifier"),
      typeParameters: validateOptionalType("TypeParameterDeclaration"),
      right: validateType("FlowType")
    }
  });
  defineType$3("DeclareOpaqueType", {
    visitor: ["id", "typeParameters", "supertype"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: validateType("Identifier"),
      typeParameters: validateOptionalType("TypeParameterDeclaration"),
      supertype: validateOptionalType("FlowType"),
      impltype: validateOptionalType("FlowType")
    }
  });
  defineType$3("DeclareVariable", {
    visitor: ["id"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: validateType("Identifier")
    }
  });
  defineType$3("DeclareExportDeclaration", {
    visitor: ["declaration", "specifiers", "source", "attributes"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: Object.assign({
      declaration: validateOptionalType("Flow"),
      specifiers: validateOptional(arrayOfType("ExportSpecifier", "ExportNamespaceSpecifier")),
      source: validateOptionalType("StringLiteral"),
      "default": validateOptional(assertValueType("boolean"))
    }, importAttributes)
  });
  defineType$3("DeclareExportAllDeclaration", {
    visitor: ["source", "attributes"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: Object.assign({
      source: validateType("StringLiteral"),
      exportKind: validateOptional(assertOneOf("type", "value"))
    }, importAttributes)
  });
  defineType$3("DeclaredPredicate", {
    visitor: ["value"],
    aliases: ["FlowPredicate"],
    fields: {
      value: validateType("Flow")
    }
  });
  defineType$3("ExistsTypeAnnotation", {
    aliases: ["FlowType"]
  });
  defineType$3("FunctionTypeAnnotation", {
    builder: ["typeParameters", "params", "rest", "returnType"],
    visitor: ["typeParameters", "this", "params", "rest", "returnType"],
    aliases: ["FlowType"],
    fields: {
      typeParameters: validateOptionalType("TypeParameterDeclaration"),
      params: validateArrayOfType("FunctionTypeParam"),
      rest: validateOptionalType("FunctionTypeParam"),
      "this": validateOptionalType("FunctionTypeParam"),
      returnType: validateType("FlowType")
    }
  });
  defineType$3("FunctionTypeParam", {
    visitor: ["name", "typeAnnotation"],
    fields: {
      name: validateOptionalType("Identifier"),
      typeAnnotation: validateType("FlowType"),
      optional: validateOptional(assertValueType("boolean"))
    }
  });
  defineType$3("GenericTypeAnnotation", {
    visitor: ["id", "typeParameters"],
    aliases: ["FlowType"],
    fields: {
      id: validateType("Identifier", "QualifiedTypeIdentifier"),
      typeParameters: validateOptionalType("TypeParameterInstantiation")
    }
  });
  defineType$3("InferredPredicate", {
    aliases: ["FlowPredicate"]
  });
  defineType$3("InterfaceExtends", {
    visitor: ["id", "typeParameters"],
    fields: {
      id: validateType("Identifier", "QualifiedTypeIdentifier"),
      typeParameters: validateOptionalType("TypeParameterInstantiation")
    }
  });
  defineInterfaceishType("InterfaceDeclaration");
  defineType$3("InterfaceTypeAnnotation", {
    visitor: ["extends", "body"],
    aliases: ["FlowType"],
    fields: {
      "extends": validateOptional(arrayOfType("InterfaceExtends")),
      body: validateType("ObjectTypeAnnotation")
    }
  });
  defineType$3("IntersectionTypeAnnotation", {
    visitor: ["types"],
    aliases: ["FlowType"],
    fields: {
      types: validate$7(arrayOfType("FlowType"))
    }
  });
  defineType$3("MixedTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  defineType$3("EmptyTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  defineType$3("NullableTypeAnnotation", {
    visitor: ["typeAnnotation"],
    aliases: ["FlowType"],
    fields: {
      typeAnnotation: validateType("FlowType")
    }
  });
  defineType$3("NumberLiteralTypeAnnotation", {
    builder: ["value"],
    aliases: ["FlowType"],
    fields: {
      value: validate$7(assertValueType("number"))
    }
  });
  defineType$3("NumberTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  defineType$3("ObjectTypeAnnotation", {
    visitor: ["properties", "indexers", "callProperties", "internalSlots"],
    aliases: ["FlowType"],
    builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
    fields: {
      properties: validate$7(arrayOfType("ObjectTypeProperty", "ObjectTypeSpreadProperty")),
      indexers: {
        validate: arrayOfType("ObjectTypeIndexer"),
        optional: true,
        "default": []
      },
      callProperties: {
        validate: arrayOfType("ObjectTypeCallProperty"),
        optional: true,
        "default": []
      },
      internalSlots: {
        validate: arrayOfType("ObjectTypeInternalSlot"),
        optional: true,
        "default": []
      },
      exact: {
        validate: assertValueType("boolean"),
        "default": false
      },
      inexact: validateOptional(assertValueType("boolean"))
    }
  });
  defineType$3("ObjectTypeInternalSlot", {
    visitor: ["id", "value"],
    builder: ["id", "value", "optional", "static", "method"],
    aliases: ["UserWhitespacable"],
    fields: {
      id: validateType("Identifier"),
      value: validateType("FlowType"),
      optional: validate$7(assertValueType("boolean")),
      "static": validate$7(assertValueType("boolean")),
      method: validate$7(assertValueType("boolean"))
    }
  });
  defineType$3("ObjectTypeCallProperty", {
    visitor: ["value"],
    aliases: ["UserWhitespacable"],
    fields: {
      value: validateType("FlowType"),
      "static": validate$7(assertValueType("boolean"))
    }
  });
  defineType$3("ObjectTypeIndexer", {
    visitor: ["variance", "id", "key", "value"],
    builder: ["id", "key", "value", "variance"],
    aliases: ["UserWhitespacable"],
    fields: {
      id: validateOptionalType("Identifier"),
      key: validateType("FlowType"),
      value: validateType("FlowType"),
      "static": validate$7(assertValueType("boolean")),
      variance: validateOptionalType("Variance")
    }
  });
  defineType$3("ObjectTypeProperty", {
    visitor: ["key", "value", "variance"],
    aliases: ["UserWhitespacable"],
    fields: {
      key: validateType("Identifier", "StringLiteral"),
      value: validateType("FlowType"),
      kind: validate$7(assertOneOf("init", "get", "set")),
      "static": validate$7(assertValueType("boolean")),
      proto: validate$7(assertValueType("boolean")),
      optional: validate$7(assertValueType("boolean")),
      variance: validateOptionalType("Variance"),
      method: validate$7(assertValueType("boolean"))
    }
  });
  defineType$3("ObjectTypeSpreadProperty", {
    visitor: ["argument"],
    aliases: ["UserWhitespacable"],
    fields: {
      argument: validateType("FlowType")
    }
  });
  defineType$3("OpaqueType", {
    visitor: ["id", "typeParameters", "supertype", "impltype"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: validateType("Identifier"),
      typeParameters: validateOptionalType("TypeParameterDeclaration"),
      supertype: validateOptionalType("FlowType"),
      impltype: validateType("FlowType")
    }
  });
  defineType$3("QualifiedTypeIdentifier", {
    visitor: ["qualification", "id"],
    builder: ["id", "qualification"],
    fields: {
      id: validateType("Identifier"),
      qualification: validateType("Identifier", "QualifiedTypeIdentifier")
    }
  });
  defineType$3("StringLiteralTypeAnnotation", {
    builder: ["value"],
    aliases: ["FlowType"],
    fields: {
      value: validate$7(assertValueType("string"))
    }
  });
  defineType$3("StringTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  defineType$3("SymbolTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  defineType$3("ThisTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  defineType$3("TupleTypeAnnotation", {
    visitor: ["types"],
    aliases: ["FlowType"],
    fields: {
      types: validate$7(arrayOfType("FlowType"))
    }
  });
  defineType$3("TypeofTypeAnnotation", {
    visitor: ["argument"],
    aliases: ["FlowType"],
    fields: {
      argument: validateType("FlowType")
    }
  });
  defineType$3("TypeAlias", {
    visitor: ["id", "typeParameters", "right"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: validateType("Identifier"),
      typeParameters: validateOptionalType("TypeParameterDeclaration"),
      right: validateType("FlowType")
    }
  });
  defineType$3("TypeAnnotation", {
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: validateType("FlowType")
    }
  });
  defineType$3("TypeCastExpression", {
    visitor: ["expression", "typeAnnotation"],
    aliases: ["ExpressionWrapper", "Expression"],
    fields: {
      expression: validateType("Expression"),
      typeAnnotation: validateType("TypeAnnotation")
    }
  });
  defineType$3("TypeParameter", {
    visitor: ["bound", "default", "variance"],
    fields: {
      name: validate$7(assertValueType("string")),
      bound: validateOptionalType("TypeAnnotation"),
      "default": validateOptionalType("FlowType"),
      variance: validateOptionalType("Variance")
    }
  });
  defineType$3("TypeParameterDeclaration", {
    visitor: ["params"],
    fields: {
      params: validate$7(arrayOfType("TypeParameter"))
    }
  });
  defineType$3("TypeParameterInstantiation", {
    visitor: ["params"],
    fields: {
      params: validate$7(arrayOfType("FlowType"))
    }
  });
  defineType$3("UnionTypeAnnotation", {
    visitor: ["types"],
    aliases: ["FlowType"],
    fields: {
      types: validate$7(arrayOfType("FlowType"))
    }
  });
  defineType$3("Variance", {
    builder: ["kind"],
    fields: {
      kind: validate$7(assertOneOf("minus", "plus"))
    }
  });
  defineType$3("VoidTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  defineType$3("EnumDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "body"],
    fields: {
      id: validateType("Identifier"),
      body: validateType("EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody")
    }
  });
  defineType$3("EnumBooleanBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      explicitType: validate$7(assertValueType("boolean")),
      members: validateArrayOfType("EnumBooleanMember"),
      hasUnknownMembers: validate$7(assertValueType("boolean"))
    }
  });
  defineType$3("EnumNumberBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      explicitType: validate$7(assertValueType("boolean")),
      members: validateArrayOfType("EnumNumberMember"),
      hasUnknownMembers: validate$7(assertValueType("boolean"))
    }
  });
  defineType$3("EnumStringBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      explicitType: validate$7(assertValueType("boolean")),
      members: validateArrayOfType("EnumStringMember", "EnumDefaultedMember"),
      hasUnknownMembers: validate$7(assertValueType("boolean"))
    }
  });
  defineType$3("EnumSymbolBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      members: validateArrayOfType("EnumDefaultedMember"),
      hasUnknownMembers: validate$7(assertValueType("boolean"))
    }
  });
  defineType$3("EnumBooleanMember", {
    aliases: ["EnumMember"],
    builder: ["id"],
    visitor: ["id", "init"],
    fields: {
      id: validateType("Identifier"),
      init: validateType("BooleanLiteral")
    }
  });
  defineType$3("EnumNumberMember", {
    aliases: ["EnumMember"],
    visitor: ["id", "init"],
    fields: {
      id: validateType("Identifier"),
      init: validateType("NumericLiteral")
    }
  });
  defineType$3("EnumStringMember", {
    aliases: ["EnumMember"],
    visitor: ["id", "init"],
    fields: {
      id: validateType("Identifier"),
      init: validateType("StringLiteral")
    }
  });
  defineType$3("EnumDefaultedMember", {
    aliases: ["EnumMember"],
    visitor: ["id"],
    fields: {
      id: validateType("Identifier")
    }
  });
  defineType$3("IndexedAccessType", {
    visitor: ["objectType", "indexType"],
    aliases: ["FlowType"],
    fields: {
      objectType: validateType("FlowType"),
      indexType: validateType("FlowType")
    }
  });
  defineType$3("OptionalIndexedAccessType", {
    visitor: ["objectType", "indexType"],
    aliases: ["FlowType"],
    fields: {
      objectType: validateType("FlowType"),
      indexType: validateType("FlowType"),
      optional: validate$7(assertValueType("boolean"))
    }
  });

  var defineType$2 = defineAliasedType("JSX");
  defineType$2("JSXAttribute", {
    visitor: ["name", "value"],
    aliases: ["Immutable"],
    fields: {
      name: {
        validate: assertNodeType("JSXIdentifier", "JSXNamespacedName")
      },
      value: {
        optional: true,
        validate: assertNodeType("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
      }
    }
  });
  defineType$2("JSXClosingElement", {
    visitor: ["name"],
    aliases: ["Immutable"],
    fields: {
      name: {
        validate: assertNodeType("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
      }
    }
  });
  defineType$2("JSXElement", {
    builder: ["openingElement", "closingElement", "children", "selfClosing"],
    visitor: ["openingElement", "children", "closingElement"],
    aliases: ["Immutable", "Expression"],
    fields: Object.assign({
      openingElement: {
        validate: assertNodeType("JSXOpeningElement")
      },
      closingElement: {
        optional: true,
        validate: assertNodeType("JSXClosingElement")
      },
      children: validateArrayOfType("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")
    }, {
      selfClosing: {
        validate: assertValueType("boolean"),
        optional: true
      }
    })
  });
  defineType$2("JSXEmptyExpression", {});
  defineType$2("JSXExpressionContainer", {
    visitor: ["expression"],
    aliases: ["Immutable"],
    fields: {
      expression: {
        validate: assertNodeType("Expression", "JSXEmptyExpression")
      }
    }
  });
  defineType$2("JSXSpreadChild", {
    visitor: ["expression"],
    aliases: ["Immutable"],
    fields: {
      expression: {
        validate: assertNodeType("Expression")
      }
    }
  });
  defineType$2("JSXIdentifier", {
    builder: ["name"],
    fields: {
      name: {
        validate: assertValueType("string")
      }
    }
  });
  defineType$2("JSXMemberExpression", {
    visitor: ["object", "property"],
    fields: {
      object: {
        validate: assertNodeType("JSXMemberExpression", "JSXIdentifier")
      },
      property: {
        validate: assertNodeType("JSXIdentifier")
      }
    }
  });
  defineType$2("JSXNamespacedName", {
    visitor: ["namespace", "name"],
    fields: {
      namespace: {
        validate: assertNodeType("JSXIdentifier")
      },
      name: {
        validate: assertNodeType("JSXIdentifier")
      }
    }
  });
  defineType$2("JSXOpeningElement", {
    builder: ["name", "attributes", "selfClosing"],
    visitor: ["name", "typeParameters", "typeArguments", "attributes"],
    aliases: ["Immutable"],
    fields: Object.assign({
      name: {
        validate: assertNodeType("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
      },
      selfClosing: {
        "default": false
      },
      attributes: validateArrayOfType("JSXAttribute", "JSXSpreadAttribute"),
      typeArguments: {
        validate: assertNodeType("TypeParameterInstantiation"),
        optional: true
      }
    }, {
      typeParameters: {
        validate: assertNodeType("TSTypeParameterInstantiation"),
        optional: true
      }
    })
  });
  defineType$2("JSXSpreadAttribute", {
    visitor: ["argument"],
    fields: {
      argument: {
        validate: assertNodeType("Expression")
      }
    }
  });
  defineType$2("JSXText", {
    aliases: ["Immutable"],
    builder: ["value"],
    fields: {
      value: {
        validate: assertValueType("string")
      }
    }
  });
  defineType$2("JSXFragment", {
    builder: ["openingFragment", "closingFragment", "children"],
    visitor: ["openingFragment", "children", "closingFragment"],
    aliases: ["Immutable", "Expression"],
    fields: {
      openingFragment: {
        validate: assertNodeType("JSXOpeningFragment")
      },
      closingFragment: {
        validate: assertNodeType("JSXClosingFragment")
      },
      children: validateArrayOfType("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")
    }
  });
  defineType$2("JSXOpeningFragment", {
    aliases: ["Immutable"]
  });
  defineType$2("JSXClosingFragment", {
    aliases: ["Immutable"]
  });

  var PLACEHOLDERS = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
  var PLACEHOLDERS_ALIAS = {
    Declaration: ["Statement"],
    Pattern: ["PatternLike", "LVal"]
  };
  for (var _i$2 = 0, _PLACEHOLDERS = PLACEHOLDERS; _i$2 < _PLACEHOLDERS.length; _i$2++) {
    var type$4 = _PLACEHOLDERS[_i$2];
    var alias$1 = ALIAS_KEYS[type$4];
    if (alias$1 != null && alias$1.length) PLACEHOLDERS_ALIAS[type$4] = alias$1;
  }
  var PLACEHOLDERS_FLIPPED_ALIAS = {};
  Object.keys(PLACEHOLDERS_ALIAS).forEach(function (type) {
    PLACEHOLDERS_ALIAS[type].forEach(function (alias) {
      if (!hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS, alias)) {
        PLACEHOLDERS_FLIPPED_ALIAS[alias] = [];
      }
      PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);
    });
  });

  var defineType$1 = defineAliasedType("Miscellaneous");
  {
    defineType$1("Noop", {
      visitor: []
    });
  }
  defineType$1("Placeholder", {
    visitor: [],
    builder: ["expectedNode", "name"],
    fields: Object.assign({
      name: {
        validate: assertNodeType("Identifier")
      },
      expectedNode: {
        validate: assertOneOf.apply(void 0, _toConsumableArray(PLACEHOLDERS))
      }
    }, patternLikeCommon())
  });
  defineType$1("V8IntrinsicIdentifier", {
    builder: ["name"],
    fields: {
      name: {
        validate: assertValueType("string")
      }
    }
  });

  defineType$5("ArgumentPlaceholder", {});
  defineType$5("BindExpression", {
    visitor: ["object", "callee"],
    aliases: ["Expression"],
    fields: !browser$1$1.env.BABEL_TYPES_8_BREAKING ? {
      object: {
        validate: Object.assign(function () {}, {
          oneOfNodeTypes: ["Expression"]
        })
      },
      callee: {
        validate: Object.assign(function () {}, {
          oneOfNodeTypes: ["Expression"]
        })
      }
    } : {
      object: {
        validate: assertNodeType("Expression")
      },
      callee: {
        validate: assertNodeType("Expression")
      }
    }
  });
  defineType$5("Decorator", {
    visitor: ["expression"],
    fields: {
      expression: {
        validate: assertNodeType("Expression")
      }
    }
  });
  defineType$5("DoExpression", {
    visitor: ["body"],
    builder: ["body", "async"],
    aliases: ["Expression"],
    fields: {
      body: {
        validate: assertNodeType("BlockStatement")
      },
      async: {
        validate: assertValueType("boolean"),
        "default": false
      }
    }
  });
  defineType$5("ExportDefaultSpecifier", {
    visitor: ["exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      exported: {
        validate: assertNodeType("Identifier")
      }
    }
  });
  defineType$5("RecordExpression", {
    visitor: ["properties"],
    aliases: ["Expression"],
    fields: {
      properties: validateArrayOfType("ObjectProperty", "SpreadElement")
    }
  });
  defineType$5("TupleExpression", {
    fields: {
      elements: {
        validate: arrayOfType("Expression", "SpreadElement"),
        "default": []
      }
    },
    visitor: ["elements"],
    aliases: ["Expression"]
  });
  {
    defineType$5("DecimalLiteral", {
      builder: ["value"],
      fields: {
        value: {
          validate: assertValueType("string")
        }
      },
      aliases: ["Expression", "Pureish", "Literal", "Immutable"]
    });
  }
  defineType$5("ModuleExpression", {
    visitor: ["body"],
    fields: {
      body: {
        validate: assertNodeType("Program")
      }
    },
    aliases: ["Expression"]
  });
  defineType$5("TopicReference", {
    aliases: ["Expression"]
  });
  defineType$5("PipelineTopicExpression", {
    builder: ["expression"],
    visitor: ["expression"],
    fields: {
      expression: {
        validate: assertNodeType("Expression")
      }
    },
    aliases: ["Expression"]
  });
  defineType$5("PipelineBareFunction", {
    builder: ["callee"],
    visitor: ["callee"],
    fields: {
      callee: {
        validate: assertNodeType("Expression")
      }
    },
    aliases: ["Expression"]
  });
  defineType$5("PipelinePrimaryTopicReference", {
    aliases: ["Expression"]
  });
  defineType$5("VoidPattern", {
    aliases: ["Pattern", "PatternLike", "FunctionParameter"]
  });

  var _fields, _fields2, _fields3, _fields4;
  var defineType = defineAliasedType("TypeScript");
  var bool$8 = assertValueType("boolean");
  var tSFunctionTypeAnnotationCommon = function tSFunctionTypeAnnotationCommon() {
    return {
      returnType: {
        validate: assertNodeType("TSTypeAnnotation", "Noop"),
        optional: true
      },
      typeParameters: {
        validate: assertNodeType("TSTypeParameterDeclaration", "Noop"),
        optional: true
      }
    };
  };
  defineType("TSParameterProperty", {
    aliases: ["LVal"],
    visitor: ["parameter"],
    fields: {
      accessibility: {
        validate: assertOneOf("public", "private", "protected"),
        optional: true
      },
      readonly: {
        validate: assertValueType("boolean"),
        optional: true
      },
      parameter: {
        validate: assertNodeType("Identifier", "AssignmentPattern")
      },
      override: {
        validate: assertValueType("boolean"),
        optional: true
      },
      decorators: {
        validate: arrayOfType("Decorator"),
        optional: true
      }
    }
  });
  defineType("TSDeclareFunction", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "params", "returnType"],
    fields: Object.assign({}, functionDeclarationCommon(), tSFunctionTypeAnnotationCommon())
  });
  defineType("TSDeclareMethod", {
    visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
    fields: Object.assign({}, classMethodOrDeclareMethodCommon(), tSFunctionTypeAnnotationCommon())
  });
  defineType("TSQualifiedName", {
    aliases: ["TSEntityName"],
    visitor: ["left", "right"],
    fields: {
      left: validateType("TSEntityName"),
      right: validateType("Identifier")
    }
  });
  var signatureDeclarationCommon = function signatureDeclarationCommon() {
    var _ref;
    return _ref = {
      typeParameters: validateOptionalType("TSTypeParameterDeclaration")
    }, _ref["parameters"] = validateArrayOfType("ArrayPattern", "Identifier", "ObjectPattern", "RestElement"), _ref["typeAnnotation"] = validateOptionalType("TSTypeAnnotation"), _ref;
  };
  var callConstructSignatureDeclaration = {
    aliases: ["TSTypeElement"],
    visitor: ["typeParameters", "parameters", "typeAnnotation"],
    fields: signatureDeclarationCommon()
  };
  defineType("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
  defineType("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
  var namedTypeElementCommon = function namedTypeElementCommon() {
    return {
      key: validateType("Expression"),
      computed: {
        "default": false
      },
      optional: validateOptional(bool$8)
    };
  };
  defineType("TSPropertySignature", {
    aliases: ["TSTypeElement"],
    visitor: ["key", "typeAnnotation"],
    fields: Object.assign({}, namedTypeElementCommon(), {
      readonly: validateOptional(bool$8),
      typeAnnotation: validateOptionalType("TSTypeAnnotation"),
      kind: {
        optional: true,
        validate: assertOneOf("get", "set")
      }
    })
  });
  defineType("TSMethodSignature", {
    aliases: ["TSTypeElement"],
    visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
    fields: Object.assign({}, signatureDeclarationCommon(), namedTypeElementCommon(), {
      kind: {
        validate: assertOneOf("method", "get", "set")
      }
    })
  });
  defineType("TSIndexSignature", {
    aliases: ["TSTypeElement"],
    visitor: ["parameters", "typeAnnotation"],
    fields: {
      readonly: validateOptional(bool$8),
      "static": validateOptional(bool$8),
      parameters: validateArrayOfType("Identifier"),
      typeAnnotation: validateOptionalType("TSTypeAnnotation")
    }
  });
  var tsKeywordTypes = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];
  for (var _i$1 = 0, _tsKeywordTypes = tsKeywordTypes; _i$1 < _tsKeywordTypes.length; _i$1++) {
    var type$3 = _tsKeywordTypes[_i$1];
    defineType(type$3, {
      aliases: ["TSType", "TSBaseType"],
      visitor: [],
      fields: {}
    });
  }
  defineType("TSThisType", {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
  var fnOrCtrBase = {
    aliases: ["TSType"],
    visitor: ["typeParameters", "parameters", "typeAnnotation"]
  };
  defineType("TSFunctionType", Object.assign({}, fnOrCtrBase, {
    fields: signatureDeclarationCommon()
  }));
  defineType("TSConstructorType", Object.assign({}, fnOrCtrBase, {
    fields: Object.assign({}, signatureDeclarationCommon(), {
      "abstract": validateOptional(bool$8)
    })
  }));
  defineType("TSTypeReference", {
    aliases: ["TSType"],
    visitor: ["typeName", "typeParameters"],
    fields: (_fields = {
      typeName: validateType("TSEntityName")
    }, _fields["typeParameters"] = validateOptionalType("TSTypeParameterInstantiation"), _fields)
  });
  defineType("TSTypePredicate", {
    aliases: ["TSType"],
    visitor: ["parameterName", "typeAnnotation"],
    builder: ["parameterName", "typeAnnotation", "asserts"],
    fields: {
      parameterName: validateType("Identifier", "TSThisType"),
      typeAnnotation: validateOptionalType("TSTypeAnnotation"),
      asserts: validateOptional(bool$8)
    }
  });
  defineType("TSTypeQuery", {
    aliases: ["TSType"],
    visitor: ["exprName", "typeParameters"],
    fields: (_fields2 = {
      exprName: validateType("TSEntityName", "TSImportType")
    }, _fields2["typeParameters"] = validateOptionalType("TSTypeParameterInstantiation"), _fields2)
  });
  defineType("TSTypeLiteral", {
    aliases: ["TSType"],
    visitor: ["members"],
    fields: {
      members: validateArrayOfType("TSTypeElement")
    }
  });
  defineType("TSArrayType", {
    aliases: ["TSType"],
    visitor: ["elementType"],
    fields: {
      elementType: validateType("TSType")
    }
  });
  defineType("TSTupleType", {
    aliases: ["TSType"],
    visitor: ["elementTypes"],
    fields: {
      elementTypes: validateArrayOfType("TSType", "TSNamedTupleMember")
    }
  });
  defineType("TSOptionalType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: validateType("TSType")
    }
  });
  defineType("TSRestType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: validateType("TSType")
    }
  });
  defineType("TSNamedTupleMember", {
    visitor: ["label", "elementType"],
    builder: ["label", "elementType", "optional"],
    fields: {
      label: validateType("Identifier"),
      optional: {
        validate: bool$8,
        "default": false
      },
      elementType: validateType("TSType")
    }
  });
  var unionOrIntersection = {
    aliases: ["TSType"],
    visitor: ["types"],
    fields: {
      types: validateArrayOfType("TSType")
    }
  };
  defineType("TSUnionType", unionOrIntersection);
  defineType("TSIntersectionType", unionOrIntersection);
  defineType("TSConditionalType", {
    aliases: ["TSType"],
    visitor: ["checkType", "extendsType", "trueType", "falseType"],
    fields: {
      checkType: validateType("TSType"),
      extendsType: validateType("TSType"),
      trueType: validateType("TSType"),
      falseType: validateType("TSType")
    }
  });
  defineType("TSInferType", {
    aliases: ["TSType"],
    visitor: ["typeParameter"],
    fields: {
      typeParameter: validateType("TSTypeParameter")
    }
  });
  defineType("TSParenthesizedType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: validateType("TSType")
    }
  });
  defineType("TSTypeOperator", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    builder: ["typeAnnotation", "operator"],
    fields: {
      operator: {
        validate: assertValueType("string")
      },
      typeAnnotation: validateType("TSType")
    }
  });
  defineType("TSIndexedAccessType", {
    aliases: ["TSType"],
    visitor: ["objectType", "indexType"],
    fields: {
      objectType: validateType("TSType"),
      indexType: validateType("TSType")
    }
  });
  defineType("TSMappedType", {
    aliases: ["TSType"],
    visitor: ["typeParameter", "nameType", "typeAnnotation"],
    builder: ["typeParameter", "typeAnnotation", "nameType"],
    fields: Object.assign({}, {
      typeParameter: validateType("TSTypeParameter")
    }, {
      readonly: validateOptional(assertOneOf(true, false, "+", "-")),
      optional: validateOptional(assertOneOf(true, false, "+", "-")),
      typeAnnotation: validateOptionalType("TSType"),
      nameType: validateOptionalType("TSType")
    })
  });
  defineType("TSTemplateLiteralType", {
    aliases: ["TSType", "TSBaseType"],
    visitor: ["quasis", "types"],
    fields: {
      quasis: validateArrayOfType("TemplateElement"),
      types: {
        validate: chain(assertValueType("array"), assertEach(assertNodeType("TSType")), function (node, key, val) {
          if (node.quasis.length !== val.length + 1) {
            throw new TypeError("Number of " + node.type + " quasis should be exactly one more than the number of types.\nExpected " + (val.length + 1) + " quasis but got " + node.quasis.length);
          }
        })
      }
    }
  });
  defineType("TSLiteralType", {
    aliases: ["TSType", "TSBaseType"],
    visitor: ["literal"],
    fields: {
      literal: {
        validate: function () {
          var unaryExpression = assertNodeType("NumericLiteral", "BigIntLiteral");
          var unaryOperator = assertOneOf("-");
          var literal = assertNodeType("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral");
          function validator(parent, key, node) {
            if (is("UnaryExpression", node)) {
              unaryOperator(node, "operator", node.operator);
              unaryExpression(node, "argument", node.argument);
            } else {
              literal(parent, key, node);
            }
          }
          validator.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral", "UnaryExpression"];
          return validator;
        }()
      }
    }
  });
  {
    defineType("TSExpressionWithTypeArguments", {
      aliases: ["TSType"],
      visitor: ["expression", "typeParameters"],
      fields: {
        expression: validateType("TSEntityName"),
        typeParameters: validateOptionalType("TSTypeParameterInstantiation")
      }
    });
  }
  defineType("TSInterfaceDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "extends", "body"],
    fields: {
      declare: validateOptional(bool$8),
      id: validateType("Identifier"),
      typeParameters: validateOptionalType("TSTypeParameterDeclaration"),
      "extends": validateOptional(arrayOfType("TSExpressionWithTypeArguments")),
      body: validateType("TSInterfaceBody")
    }
  });
  defineType("TSInterfaceBody", {
    visitor: ["body"],
    fields: {
      body: validateArrayOfType("TSTypeElement")
    }
  });
  defineType("TSTypeAliasDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "typeAnnotation"],
    fields: {
      declare: validateOptional(bool$8),
      id: validateType("Identifier"),
      typeParameters: validateOptionalType("TSTypeParameterDeclaration"),
      typeAnnotation: validateType("TSType")
    }
  });
  defineType("TSInstantiationExpression", {
    aliases: ["Expression"],
    visitor: ["expression", "typeParameters"],
    fields: (_fields3 = {
      expression: validateType("Expression")
    }, _fields3["typeParameters"] = validateOptionalType("TSTypeParameterInstantiation"), _fields3)
  });
  var TSTypeExpression$1 = {
    aliases: ["Expression", "LVal", "PatternLike"],
    visitor: ["expression", "typeAnnotation"],
    fields: {
      expression: validateType("Expression"),
      typeAnnotation: validateType("TSType")
    }
  };
  defineType("TSAsExpression", TSTypeExpression$1);
  defineType("TSSatisfiesExpression", TSTypeExpression$1);
  defineType("TSTypeAssertion", {
    aliases: ["Expression", "LVal", "PatternLike"],
    visitor: ["typeAnnotation", "expression"],
    fields: {
      typeAnnotation: validateType("TSType"),
      expression: validateType("Expression")
    }
  });
  defineType("TSEnumBody", {
    visitor: ["members"],
    fields: {
      members: validateArrayOfType("TSEnumMember")
    }
  });
  {
    defineType("TSEnumDeclaration", {
      aliases: ["Statement", "Declaration"],
      visitor: ["id", "members"],
      fields: {
        declare: validateOptional(bool$8),
        "const": validateOptional(bool$8),
        id: validateType("Identifier"),
        members: validateArrayOfType("TSEnumMember"),
        initializer: validateOptionalType("Expression"),
        body: validateOptionalType("TSEnumBody")
      }
    });
  }
  defineType("TSEnumMember", {
    visitor: ["id", "initializer"],
    fields: {
      id: validateType("Identifier", "StringLiteral"),
      initializer: validateOptionalType("Expression")
    }
  });
  defineType("TSModuleDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "body"],
    fields: Object.assign({
      kind: {
        validate: assertOneOf("global", "module", "namespace")
      },
      declare: validateOptional(bool$8)
    }, {
      global: validateOptional(bool$8)
    }, {
      id: validateType("Identifier", "StringLiteral"),
      body: validateType("TSModuleBlock", "TSModuleDeclaration")
    })
  });
  defineType("TSModuleBlock", {
    aliases: ["Scopable", "Block", "BlockParent", "FunctionParent"],
    visitor: ["body"],
    fields: {
      body: validateArrayOfType("Statement")
    }
  });
  defineType("TSImportType", {
    aliases: ["TSType"],
    builder: ["argument", "qualifier", "typeParameters"],
    visitor: ["argument", "options", "qualifier", "typeParameters"],
    fields: (_fields4 = {
      argument: validateType("StringLiteral"),
      qualifier: validateOptionalType("TSEntityName")
    }, _fields4["typeParameters"] = validateOptionalType("TSTypeParameterInstantiation"), _fields4.options = {
      validate: assertNodeType("ObjectExpression"),
      optional: true
    }, _fields4)
  });
  defineType("TSImportEqualsDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "moduleReference"],
    fields: Object.assign({}, {
      isExport: validate$7(bool$8)
    }, {
      id: validateType("Identifier"),
      moduleReference: validateType("TSEntityName", "TSExternalModuleReference"),
      importKind: {
        validate: assertOneOf("type", "value"),
        optional: true
      }
    })
  });
  defineType("TSExternalModuleReference", {
    visitor: ["expression"],
    fields: {
      expression: validateType("StringLiteral")
    }
  });
  defineType("TSNonNullExpression", {
    aliases: ["Expression", "LVal", "PatternLike"],
    visitor: ["expression"],
    fields: {
      expression: validateType("Expression")
    }
  });
  defineType("TSExportAssignment", {
    aliases: ["Statement"],
    visitor: ["expression"],
    fields: {
      expression: validateType("Expression")
    }
  });
  defineType("TSNamespaceExportDeclaration", {
    aliases: ["Statement"],
    visitor: ["id"],
    fields: {
      id: validateType("Identifier")
    }
  });
  defineType("TSTypeAnnotation", {
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: {
        validate: assertNodeType("TSType")
      }
    }
  });
  defineType("TSTypeParameterInstantiation", {
    visitor: ["params"],
    fields: {
      params: validateArrayOfType("TSType")
    }
  });
  defineType("TSTypeParameterDeclaration", {
    visitor: ["params"],
    fields: {
      params: validateArrayOfType("TSTypeParameter")
    }
  });
  defineType("TSTypeParameter", {
    builder: ["constraint", "default", "name"],
    visitor: ["constraint", "default"],
    fields: {
      name: {
        validate: assertValueType("string")
      },
      "in": {
        validate: assertValueType("boolean"),
        optional: true
      },
      out: {
        validate: assertValueType("boolean"),
        optional: true
      },
      "const": {
        validate: assertValueType("boolean"),
        optional: true
      },
      constraint: {
        validate: assertNodeType("TSType"),
        optional: true
      },
      "default": {
        validate: assertNodeType("TSType"),
        optional: true
      }
    }
  });

  var DEPRECATED_ALIASES$1 = {
    ModuleDeclaration: "ImportOrExportDeclaration"
  };

  Object.keys(DEPRECATED_ALIASES$1).forEach(function (deprecatedAlias) {
    FLIPPED_ALIAS_KEYS$3[deprecatedAlias] = FLIPPED_ALIAS_KEYS$3[DEPRECATED_ALIASES$1[deprecatedAlias]];
  });
  for (var _iterator$1 = _createForOfIteratorHelperLoose(allExpandedTypes), _step$1; !(_step$1 = _iterator$1()).done;) {
    var _step$value = _step$1.value,
      types$1 = _step$value.types,
      set$1 = _step$value.set;
    for (var _iterator2 = _createForOfIteratorHelperLoose(types$1), _step2; !(_step2 = _iterator2()).done;) {
      var type$2 = _step2.value;
      var aliases = FLIPPED_ALIAS_KEYS$3[type$2];
      if (aliases) {
        aliases.forEach(set$1.add, set$1);
      } else {
        set$1.add(type$2);
      }
    }
  }
  var TYPES$1 = [].concat(Object.keys(VISITOR_KEYS$7), Object.keys(FLIPPED_ALIAS_KEYS$3), Object.keys(DEPRECATED_KEYS$1));

  function validate$6(node, key, val) {
    if (!node) return;
    var fields = NODE_FIELDS$1[node.type];
    if (!fields) return;
    var field = fields[key];
    validateField(node, key, val, field);
    validateChild(node, key, val);
  }
  function validateInternal(field, node, key, val, maybeNode) {
    if (!(field != null && field.validate)) return;
    if (field.optional && val == null) return;
    field.validate(node, key, val);
    if (maybeNode) {
      var _NODE_PARENT_VALIDATI;
      var type = val.type;
      if (type == null) return;
      (_NODE_PARENT_VALIDATI = NODE_PARENT_VALIDATIONS[type]) == null || _NODE_PARENT_VALIDATI.call(NODE_PARENT_VALIDATIONS, node, key, val);
    }
  }
  function validateField(node, key, val, field) {
    if (!(field != null && field.validate)) return;
    if (field.optional && val == null) return;
    field.validate(node, key, val);
  }
  function validateChild(node, key, val) {
    var _NODE_PARENT_VALIDATI2;
    var type = val == null ? void 0 : val.type;
    if (type == null) return;
    (_NODE_PARENT_VALIDATI2 = NODE_PARENT_VALIDATIONS[type]) == null || _NODE_PARENT_VALIDATI2.call(NODE_PARENT_VALIDATIONS, node, key, val);
  }

  var validate$5 = validateInternal;
  var NODE_FIELDS = NODE_FIELDS$1;
  function bigIntLiteral(value) {
    if (typeof value === "bigint") {
      value = value.toString();
    }
    var node = {
      type: "BigIntLiteral",
      value: value
    };
    var defs = NODE_FIELDS.BigIntLiteral;
    validate$5(defs.value, node, "value", value);
    return node;
  }
  function arrayExpression$1(elements) {
    if (elements === void 0) {
      elements = [];
    }
    var node = {
      type: "ArrayExpression",
      elements: elements
    };
    var defs = NODE_FIELDS.ArrayExpression;
    validate$5(defs.elements, node, "elements", elements, 1);
    return node;
  }
  function assignmentExpression$8(operator, left, right) {
    var node = {
      type: "AssignmentExpression",
      operator: operator,
      left: left,
      right: right
    };
    var defs = NODE_FIELDS.AssignmentExpression;
    validate$5(defs.operator, node, "operator", operator);
    validate$5(defs.left, node, "left", left, 1);
    validate$5(defs.right, node, "right", right, 1);
    return node;
  }
  function binaryExpression$4(operator, left, right) {
    var node = {
      type: "BinaryExpression",
      operator: operator,
      left: left,
      right: right
    };
    var defs = NODE_FIELDS.BinaryExpression;
    validate$5(defs.operator, node, "operator", operator);
    validate$5(defs.left, node, "left", left, 1);
    validate$5(defs.right, node, "right", right, 1);
    return node;
  }
  function interpreterDirective$1(value) {
    var node = {
      type: "InterpreterDirective",
      value: value
    };
    var defs = NODE_FIELDS.InterpreterDirective;
    validate$5(defs.value, node, "value", value);
    return node;
  }
  function directive(value) {
    var node = {
      type: "Directive",
      value: value
    };
    var defs = NODE_FIELDS.Directive;
    validate$5(defs.value, node, "value", value, 1);
    return node;
  }
  function directiveLiteral(value) {
    var node = {
      type: "DirectiveLiteral",
      value: value
    };
    var defs = NODE_FIELDS.DirectiveLiteral;
    validate$5(defs.value, node, "value", value);
    return node;
  }
  function blockStatement$6(body, directives) {
    if (directives === void 0) {
      directives = [];
    }
    var node = {
      type: "BlockStatement",
      body: body,
      directives: directives
    };
    var defs = NODE_FIELDS.BlockStatement;
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs.directives, node, "directives", directives, 1);
    return node;
  }
  function breakStatement(label) {
    if (label === void 0) {
      label = null;
    }
    var node = {
      type: "BreakStatement",
      label: label
    };
    var defs = NODE_FIELDS.BreakStatement;
    validate$5(defs.label, node, "label", label, 1);
    return node;
  }
  function callExpression$c(callee, _arguments) {
    var node = {
      type: "CallExpression",
      callee: callee,
      arguments: _arguments
    };
    var defs = NODE_FIELDS.CallExpression;
    validate$5(defs.callee, node, "callee", callee, 1);
    validate$5(defs.arguments, node, "arguments", _arguments, 1);
    return node;
  }
  function catchClause(param, body) {
    if (param === void 0) {
      param = null;
    }
    var node = {
      type: "CatchClause",
      param: param,
      body: body
    };
    var defs = NODE_FIELDS.CatchClause;
    validate$5(defs.param, node, "param", param, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function conditionalExpression$5(test, consequent, alternate) {
    var node = {
      type: "ConditionalExpression",
      test: test,
      consequent: consequent,
      alternate: alternate
    };
    var defs = NODE_FIELDS.ConditionalExpression;
    validate$5(defs.test, node, "test", test, 1);
    validate$5(defs.consequent, node, "consequent", consequent, 1);
    validate$5(defs.alternate, node, "alternate", alternate, 1);
    return node;
  }
  function continueStatement(label) {
    if (label === void 0) {
      label = null;
    }
    var node = {
      type: "ContinueStatement",
      label: label
    };
    var defs = NODE_FIELDS.ContinueStatement;
    validate$5(defs.label, node, "label", label, 1);
    return node;
  }
  function debuggerStatement() {
    return {
      type: "DebuggerStatement"
    };
  }
  function doWhileStatement(test, body) {
    var node = {
      type: "DoWhileStatement",
      test: test,
      body: body
    };
    var defs = NODE_FIELDS.DoWhileStatement;
    validate$5(defs.test, node, "test", test, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function emptyStatement$1() {
    return {
      type: "EmptyStatement"
    };
  }
  function expressionStatement$7(expression) {
    var node = {
      type: "ExpressionStatement",
      expression: expression
    };
    var defs = NODE_FIELDS.ExpressionStatement;
    validate$5(defs.expression, node, "expression", expression, 1);
    return node;
  }
  function file$1(program, comments, tokens) {
    if (comments === void 0) {
      comments = null;
    }
    if (tokens === void 0) {
      tokens = null;
    }
    var node = {
      type: "File",
      program: program,
      comments: comments,
      tokens: tokens
    };
    var defs = NODE_FIELDS.File;
    validate$5(defs.program, node, "program", program, 1);
    validate$5(defs.comments, node, "comments", comments, 1);
    validate$5(defs.tokens, node, "tokens", tokens);
    return node;
  }
  function forInStatement(left, right, body) {
    var node = {
      type: "ForInStatement",
      left: left,
      right: right,
      body: body
    };
    var defs = NODE_FIELDS.ForInStatement;
    validate$5(defs.left, node, "left", left, 1);
    validate$5(defs.right, node, "right", right, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function forStatement(init, test, update, body) {
    if (init === void 0) {
      init = null;
    }
    if (test === void 0) {
      test = null;
    }
    if (update === void 0) {
      update = null;
    }
    var node = {
      type: "ForStatement",
      init: init,
      test: test,
      update: update,
      body: body
    };
    var defs = NODE_FIELDS.ForStatement;
    validate$5(defs.init, node, "init", init, 1);
    validate$5(defs.test, node, "test", test, 1);
    validate$5(defs.update, node, "update", update, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function functionDeclaration(id, params, body, generator, async) {
    if (id === void 0) {
      id = null;
    }
    if (generator === void 0) {
      generator = false;
    }
    if (async === void 0) {
      async = false;
    }
    var node = {
      type: "FunctionDeclaration",
      id: id,
      params: params,
      body: body,
      generator: generator,
      async: async
    };
    var defs = NODE_FIELDS.FunctionDeclaration;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.params, node, "params", params, 1);
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs.generator, node, "generator", generator);
    validate$5(defs.async, node, "async", async);
    return node;
  }
  function functionExpression$2(id, params, body, generator, async) {
    if (id === void 0) {
      id = null;
    }
    if (generator === void 0) {
      generator = false;
    }
    if (async === void 0) {
      async = false;
    }
    var node = {
      type: "FunctionExpression",
      id: id,
      params: params,
      body: body,
      generator: generator,
      async: async
    };
    var defs = NODE_FIELDS.FunctionExpression;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.params, node, "params", params, 1);
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs.generator, node, "generator", generator);
    validate$5(defs.async, node, "async", async);
    return node;
  }
  function identifier$e(name) {
    var node = {
      type: "Identifier",
      name: name
    };
    var defs = NODE_FIELDS.Identifier;
    validate$5(defs.name, node, "name", name);
    return node;
  }
  function ifStatement(test, consequent, alternate) {
    if (alternate === void 0) {
      alternate = null;
    }
    var node = {
      type: "IfStatement",
      test: test,
      consequent: consequent,
      alternate: alternate
    };
    var defs = NODE_FIELDS.IfStatement;
    validate$5(defs.test, node, "test", test, 1);
    validate$5(defs.consequent, node, "consequent", consequent, 1);
    validate$5(defs.alternate, node, "alternate", alternate, 1);
    return node;
  }
  function labeledStatement(label, body) {
    var node = {
      type: "LabeledStatement",
      label: label,
      body: body
    };
    var defs = NODE_FIELDS.LabeledStatement;
    validate$5(defs.label, node, "label", label, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function stringLiteral$6(value) {
    var node = {
      type: "StringLiteral",
      value: value
    };
    var defs = NODE_FIELDS.StringLiteral;
    validate$5(defs.value, node, "value", value);
    return node;
  }
  function numericLiteral$5(value) {
    var node = {
      type: "NumericLiteral",
      value: value
    };
    var defs = NODE_FIELDS.NumericLiteral;
    validate$5(defs.value, node, "value", value);
    return node;
  }
  function nullLiteral$2() {
    return {
      type: "NullLiteral"
    };
  }
  function booleanLiteral$2(value) {
    var node = {
      type: "BooleanLiteral",
      value: value
    };
    var defs = NODE_FIELDS.BooleanLiteral;
    validate$5(defs.value, node, "value", value);
    return node;
  }
  function regExpLiteral(pattern, flags) {
    if (flags === void 0) {
      flags = "";
    }
    var node = {
      type: "RegExpLiteral",
      pattern: pattern,
      flags: flags
    };
    var defs = NODE_FIELDS.RegExpLiteral;
    validate$5(defs.pattern, node, "pattern", pattern);
    validate$5(defs.flags, node, "flags", flags);
    return node;
  }
  function logicalExpression$2(operator, left, right) {
    var node = {
      type: "LogicalExpression",
      operator: operator,
      left: left,
      right: right
    };
    var defs = NODE_FIELDS.LogicalExpression;
    validate$5(defs.operator, node, "operator", operator);
    validate$5(defs.left, node, "left", left, 1);
    validate$5(defs.right, node, "right", right, 1);
    return node;
  }
  function memberExpression$a(object, property, computed, optional) {
    if (computed === void 0) {
      computed = false;
    }
    if (optional === void 0) {
      optional = null;
    }
    var node = {
      type: "MemberExpression",
      object: object,
      property: property,
      computed: computed,
      optional: optional
    };
    var defs = NODE_FIELDS.MemberExpression;
    validate$5(defs.object, node, "object", object, 1);
    validate$5(defs.property, node, "property", property, 1);
    validate$5(defs.computed, node, "computed", computed);
    validate$5(defs.optional, node, "optional", optional);
    return node;
  }
  function newExpression(callee, _arguments) {
    var node = {
      type: "NewExpression",
      callee: callee,
      arguments: _arguments
    };
    var defs = NODE_FIELDS.NewExpression;
    validate$5(defs.callee, node, "callee", callee, 1);
    validate$5(defs.arguments, node, "arguments", _arguments, 1);
    return node;
  }
  function program$3(body, directives, sourceType, interpreter) {
    if (directives === void 0) {
      directives = [];
    }
    if (sourceType === void 0) {
      sourceType = "script";
    }
    if (interpreter === void 0) {
      interpreter = null;
    }
    var node = {
      type: "Program",
      body: body,
      directives: directives,
      sourceType: sourceType,
      interpreter: interpreter
    };
    var defs = NODE_FIELDS.Program;
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs.directives, node, "directives", directives, 1);
    validate$5(defs.sourceType, node, "sourceType", sourceType);
    validate$5(defs.interpreter, node, "interpreter", interpreter, 1);
    return node;
  }
  function objectExpression$3(properties) {
    var node = {
      type: "ObjectExpression",
      properties: properties
    };
    var defs = NODE_FIELDS.ObjectExpression;
    validate$5(defs.properties, node, "properties", properties, 1);
    return node;
  }
  function objectMethod(kind, key, params, body, computed, generator, async) {
    if (kind === void 0) {
      kind = "method";
    }
    if (computed === void 0) {
      computed = false;
    }
    if (generator === void 0) {
      generator = false;
    }
    if (async === void 0) {
      async = false;
    }
    var node = {
      type: "ObjectMethod",
      kind: kind,
      key: key,
      params: params,
      body: body,
      computed: computed,
      generator: generator,
      async: async
    };
    var defs = NODE_FIELDS.ObjectMethod;
    validate$5(defs.kind, node, "kind", kind);
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.params, node, "params", params, 1);
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs.computed, node, "computed", computed);
    validate$5(defs.generator, node, "generator", generator);
    validate$5(defs.async, node, "async", async);
    return node;
  }
  function objectProperty$1(key, value, computed, shorthand, decorators) {
    if (computed === void 0) {
      computed = false;
    }
    if (shorthand === void 0) {
      shorthand = false;
    }
    if (decorators === void 0) {
      decorators = null;
    }
    var node = {
      type: "ObjectProperty",
      key: key,
      value: value,
      computed: computed,
      shorthand: shorthand,
      decorators: decorators
    };
    var defs = NODE_FIELDS.ObjectProperty;
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.value, node, "value", value, 1);
    validate$5(defs.computed, node, "computed", computed);
    validate$5(defs.shorthand, node, "shorthand", shorthand);
    validate$5(defs.decorators, node, "decorators", decorators, 1);
    return node;
  }
  function restElement$2(argument) {
    var node = {
      type: "RestElement",
      argument: argument
    };
    var defs = NODE_FIELDS.RestElement;
    validate$5(defs.argument, node, "argument", argument, 1);
    return node;
  }
  function returnStatement$3(argument) {
    if (argument === void 0) {
      argument = null;
    }
    var node = {
      type: "ReturnStatement",
      argument: argument
    };
    var defs = NODE_FIELDS.ReturnStatement;
    validate$5(defs.argument, node, "argument", argument, 1);
    return node;
  }
  function sequenceExpression$6(expressions) {
    var node = {
      type: "SequenceExpression",
      expressions: expressions
    };
    var defs = NODE_FIELDS.SequenceExpression;
    validate$5(defs.expressions, node, "expressions", expressions, 1);
    return node;
  }
  function parenthesizedExpression(expression) {
    var node = {
      type: "ParenthesizedExpression",
      expression: expression
    };
    var defs = NODE_FIELDS.ParenthesizedExpression;
    validate$5(defs.expression, node, "expression", expression, 1);
    return node;
  }
  function switchCase(test, consequent) {
    if (test === void 0) {
      test = null;
    }
    var node = {
      type: "SwitchCase",
      test: test,
      consequent: consequent
    };
    var defs = NODE_FIELDS.SwitchCase;
    validate$5(defs.test, node, "test", test, 1);
    validate$5(defs.consequent, node, "consequent", consequent, 1);
    return node;
  }
  function switchStatement(discriminant, cases) {
    var node = {
      type: "SwitchStatement",
      discriminant: discriminant,
      cases: cases
    };
    var defs = NODE_FIELDS.SwitchStatement;
    validate$5(defs.discriminant, node, "discriminant", discriminant, 1);
    validate$5(defs.cases, node, "cases", cases, 1);
    return node;
  }
  function thisExpression$5() {
    return {
      type: "ThisExpression"
    };
  }
  function throwStatement(argument) {
    var node = {
      type: "ThrowStatement",
      argument: argument
    };
    var defs = NODE_FIELDS.ThrowStatement;
    validate$5(defs.argument, node, "argument", argument, 1);
    return node;
  }
  function tryStatement(block, handler, finalizer) {
    if (handler === void 0) {
      handler = null;
    }
    if (finalizer === void 0) {
      finalizer = null;
    }
    var node = {
      type: "TryStatement",
      block: block,
      handler: handler,
      finalizer: finalizer
    };
    var defs = NODE_FIELDS.TryStatement;
    validate$5(defs.block, node, "block", block, 1);
    validate$5(defs.handler, node, "handler", handler, 1);
    validate$5(defs.finalizer, node, "finalizer", finalizer, 1);
    return node;
  }
  function unaryExpression$4(operator, argument, prefix) {
    if (prefix === void 0) {
      prefix = true;
    }
    var node = {
      type: "UnaryExpression",
      operator: operator,
      argument: argument,
      prefix: prefix
    };
    var defs = NODE_FIELDS.UnaryExpression;
    validate$5(defs.operator, node, "operator", operator);
    validate$5(defs.argument, node, "argument", argument, 1);
    validate$5(defs.prefix, node, "prefix", prefix);
    return node;
  }
  function updateExpression$1(operator, argument, prefix) {
    if (prefix === void 0) {
      prefix = false;
    }
    var node = {
      type: "UpdateExpression",
      operator: operator,
      argument: argument,
      prefix: prefix
    };
    var defs = NODE_FIELDS.UpdateExpression;
    validate$5(defs.operator, node, "operator", operator);
    validate$5(defs.argument, node, "argument", argument, 1);
    validate$5(defs.prefix, node, "prefix", prefix);
    return node;
  }
  function variableDeclaration$6(kind, declarations) {
    var node = {
      type: "VariableDeclaration",
      kind: kind,
      declarations: declarations
    };
    var defs = NODE_FIELDS.VariableDeclaration;
    validate$5(defs.kind, node, "kind", kind);
    validate$5(defs.declarations, node, "declarations", declarations, 1);
    return node;
  }
  function variableDeclarator$6(id, init) {
    if (init === void 0) {
      init = null;
    }
    var node = {
      type: "VariableDeclarator",
      id: id,
      init: init
    };
    var defs = NODE_FIELDS.VariableDeclarator;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.init, node, "init", init, 1);
    return node;
  }
  function whileStatement(test, body) {
    var node = {
      type: "WhileStatement",
      test: test,
      body: body
    };
    var defs = NODE_FIELDS.WhileStatement;
    validate$5(defs.test, node, "test", test, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function withStatement(object, body) {
    var node = {
      type: "WithStatement",
      object: object,
      body: body
    };
    var defs = NODE_FIELDS.WithStatement;
    validate$5(defs.object, node, "object", object, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function assignmentPattern(left, right) {
    var node = {
      type: "AssignmentPattern",
      left: left,
      right: right
    };
    var defs = NODE_FIELDS.AssignmentPattern;
    validate$5(defs.left, node, "left", left, 1);
    validate$5(defs.right, node, "right", right, 1);
    return node;
  }
  function arrayPattern(elements) {
    var node = {
      type: "ArrayPattern",
      elements: elements
    };
    var defs = NODE_FIELDS.ArrayPattern;
    validate$5(defs.elements, node, "elements", elements, 1);
    return node;
  }
  function arrowFunctionExpression$4(params, body, async) {
    if (async === void 0) {
      async = false;
    }
    var node = {
      type: "ArrowFunctionExpression",
      params: params,
      body: body,
      async: async,
      expression: null
    };
    var defs = NODE_FIELDS.ArrowFunctionExpression;
    validate$5(defs.params, node, "params", params, 1);
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs.async, node, "async", async);
    return node;
  }
  function classBody(body) {
    var node = {
      type: "ClassBody",
      body: body
    };
    var defs = NODE_FIELDS.ClassBody;
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function classExpression(id, superClass, body, decorators) {
    if (id === void 0) {
      id = null;
    }
    if (superClass === void 0) {
      superClass = null;
    }
    if (decorators === void 0) {
      decorators = null;
    }
    var node = {
      type: "ClassExpression",
      id: id,
      superClass: superClass,
      body: body,
      decorators: decorators
    };
    var defs = NODE_FIELDS.ClassExpression;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.superClass, node, "superClass", superClass, 1);
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs.decorators, node, "decorators", decorators, 1);
    return node;
  }
  function classDeclaration(id, superClass, body, decorators) {
    if (id === void 0) {
      id = null;
    }
    if (superClass === void 0) {
      superClass = null;
    }
    if (decorators === void 0) {
      decorators = null;
    }
    var node = {
      type: "ClassDeclaration",
      id: id,
      superClass: superClass,
      body: body,
      decorators: decorators
    };
    var defs = NODE_FIELDS.ClassDeclaration;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.superClass, node, "superClass", superClass, 1);
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs.decorators, node, "decorators", decorators, 1);
    return node;
  }
  function exportAllDeclaration(source) {
    var node = {
      type: "ExportAllDeclaration",
      source: source
    };
    var defs = NODE_FIELDS.ExportAllDeclaration;
    validate$5(defs.source, node, "source", source, 1);
    return node;
  }
  function exportDefaultDeclaration(declaration) {
    var node = {
      type: "ExportDefaultDeclaration",
      declaration: declaration
    };
    var defs = NODE_FIELDS.ExportDefaultDeclaration;
    validate$5(defs.declaration, node, "declaration", declaration, 1);
    return node;
  }
  function exportNamedDeclaration$2(declaration, specifiers, source) {
    if (declaration === void 0) {
      declaration = null;
    }
    if (specifiers === void 0) {
      specifiers = [];
    }
    if (source === void 0) {
      source = null;
    }
    var node = {
      type: "ExportNamedDeclaration",
      declaration: declaration,
      specifiers: specifiers,
      source: source
    };
    var defs = NODE_FIELDS.ExportNamedDeclaration;
    validate$5(defs.declaration, node, "declaration", declaration, 1);
    validate$5(defs.specifiers, node, "specifiers", specifiers, 1);
    validate$5(defs.source, node, "source", source, 1);
    return node;
  }
  function exportSpecifier$2(local, exported) {
    var node = {
      type: "ExportSpecifier",
      local: local,
      exported: exported
    };
    var defs = NODE_FIELDS.ExportSpecifier;
    validate$5(defs.local, node, "local", local, 1);
    validate$5(defs.exported, node, "exported", exported, 1);
    return node;
  }
  function forOfStatement(left, right, body, _await) {
    if (_await === void 0) {
      _await = false;
    }
    var node = {
      type: "ForOfStatement",
      left: left,
      right: right,
      body: body,
      "await": _await
    };
    var defs = NODE_FIELDS.ForOfStatement;
    validate$5(defs.left, node, "left", left, 1);
    validate$5(defs.right, node, "right", right, 1);
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs["await"], node, "await", _await);
    return node;
  }
  function importDeclaration$1(specifiers, source) {
    var node = {
      type: "ImportDeclaration",
      specifiers: specifiers,
      source: source
    };
    var defs = NODE_FIELDS.ImportDeclaration;
    validate$5(defs.specifiers, node, "specifiers", specifiers, 1);
    validate$5(defs.source, node, "source", source, 1);
    return node;
  }
  function importDefaultSpecifier$1(local) {
    var node = {
      type: "ImportDefaultSpecifier",
      local: local
    };
    var defs = NODE_FIELDS.ImportDefaultSpecifier;
    validate$5(defs.local, node, "local", local, 1);
    return node;
  }
  function importNamespaceSpecifier$1(local) {
    var node = {
      type: "ImportNamespaceSpecifier",
      local: local
    };
    var defs = NODE_FIELDS.ImportNamespaceSpecifier;
    validate$5(defs.local, node, "local", local, 1);
    return node;
  }
  function importSpecifier$2(local, imported) {
    var node = {
      type: "ImportSpecifier",
      local: local,
      imported: imported
    };
    var defs = NODE_FIELDS.ImportSpecifier;
    validate$5(defs.local, node, "local", local, 1);
    validate$5(defs.imported, node, "imported", imported, 1);
    return node;
  }
  function importExpression(source, options) {
    if (options === void 0) {
      options = null;
    }
    var node = {
      type: "ImportExpression",
      source: source,
      options: options
    };
    var defs = NODE_FIELDS.ImportExpression;
    validate$5(defs.source, node, "source", source, 1);
    validate$5(defs.options, node, "options", options, 1);
    return node;
  }
  function metaProperty$1(meta, property) {
    var node = {
      type: "MetaProperty",
      meta: meta,
      property: property
    };
    var defs = NODE_FIELDS.MetaProperty;
    validate$5(defs.meta, node, "meta", meta, 1);
    validate$5(defs.property, node, "property", property, 1);
    return node;
  }
  function classMethod(kind, key, params, body, computed, _static, generator, async) {
    if (kind === void 0) {
      kind = "method";
    }
    if (computed === void 0) {
      computed = false;
    }
    if (_static === void 0) {
      _static = false;
    }
    if (generator === void 0) {
      generator = false;
    }
    if (async === void 0) {
      async = false;
    }
    var node = {
      type: "ClassMethod",
      kind: kind,
      key: key,
      params: params,
      body: body,
      computed: computed,
      "static": _static,
      generator: generator,
      async: async
    };
    var defs = NODE_FIELDS.ClassMethod;
    validate$5(defs.kind, node, "kind", kind);
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.params, node, "params", params, 1);
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs.computed, node, "computed", computed);
    validate$5(defs["static"], node, "static", _static);
    validate$5(defs.generator, node, "generator", generator);
    validate$5(defs.async, node, "async", async);
    return node;
  }
  function objectPattern$1(properties) {
    var node = {
      type: "ObjectPattern",
      properties: properties
    };
    var defs = NODE_FIELDS.ObjectPattern;
    validate$5(defs.properties, node, "properties", properties, 1);
    return node;
  }
  function spreadElement$2(argument) {
    var node = {
      type: "SpreadElement",
      argument: argument
    };
    var defs = NODE_FIELDS.SpreadElement;
    validate$5(defs.argument, node, "argument", argument, 1);
    return node;
  }
  function _super$1() {
    return {
      type: "Super"
    };
  }
  function taggedTemplateExpression(tag, quasi) {
    var node = {
      type: "TaggedTemplateExpression",
      tag: tag,
      quasi: quasi
    };
    var defs = NODE_FIELDS.TaggedTemplateExpression;
    validate$5(defs.tag, node, "tag", tag, 1);
    validate$5(defs.quasi, node, "quasi", quasi, 1);
    return node;
  }
  function templateElement(value, tail) {
    if (tail === void 0) {
      tail = false;
    }
    var node = {
      type: "TemplateElement",
      value: value,
      tail: tail
    };
    var defs = NODE_FIELDS.TemplateElement;
    validate$5(defs.value, node, "value", value);
    validate$5(defs.tail, node, "tail", tail);
    return node;
  }
  function templateLiteral(quasis, expressions) {
    var node = {
      type: "TemplateLiteral",
      quasis: quasis,
      expressions: expressions
    };
    var defs = NODE_FIELDS.TemplateLiteral;
    validate$5(defs.quasis, node, "quasis", quasis, 1);
    validate$5(defs.expressions, node, "expressions", expressions, 1);
    return node;
  }
  function yieldExpression$2(argument, delegate) {
    if (argument === void 0) {
      argument = null;
    }
    if (delegate === void 0) {
      delegate = false;
    }
    var node = {
      type: "YieldExpression",
      argument: argument,
      delegate: delegate
    };
    var defs = NODE_FIELDS.YieldExpression;
    validate$5(defs.argument, node, "argument", argument, 1);
    validate$5(defs.delegate, node, "delegate", delegate);
    return node;
  }
  function awaitExpression$1(argument) {
    var node = {
      type: "AwaitExpression",
      argument: argument
    };
    var defs = NODE_FIELDS.AwaitExpression;
    validate$5(defs.argument, node, "argument", argument, 1);
    return node;
  }
  function _import() {
    return {
      type: "Import"
    };
  }
  function exportNamespaceSpecifier(exported) {
    var node = {
      type: "ExportNamespaceSpecifier",
      exported: exported
    };
    var defs = NODE_FIELDS.ExportNamespaceSpecifier;
    validate$5(defs.exported, node, "exported", exported, 1);
    return node;
  }
  function optionalMemberExpression$2(object, property, computed, optional) {
    if (computed === void 0) {
      computed = false;
    }
    var node = {
      type: "OptionalMemberExpression",
      object: object,
      property: property,
      computed: computed,
      optional: optional
    };
    var defs = NODE_FIELDS.OptionalMemberExpression;
    validate$5(defs.object, node, "object", object, 1);
    validate$5(defs.property, node, "property", property, 1);
    validate$5(defs.computed, node, "computed", computed);
    validate$5(defs.optional, node, "optional", optional);
    return node;
  }
  function optionalCallExpression$2(callee, _arguments, optional) {
    var node = {
      type: "OptionalCallExpression",
      callee: callee,
      arguments: _arguments,
      optional: optional
    };
    var defs = NODE_FIELDS.OptionalCallExpression;
    validate$5(defs.callee, node, "callee", callee, 1);
    validate$5(defs.arguments, node, "arguments", _arguments, 1);
    validate$5(defs.optional, node, "optional", optional);
    return node;
  }
  function classProperty(key, value, typeAnnotation, decorators, computed, _static) {
    if (value === void 0) {
      value = null;
    }
    if (typeAnnotation === void 0) {
      typeAnnotation = null;
    }
    if (decorators === void 0) {
      decorators = null;
    }
    if (computed === void 0) {
      computed = false;
    }
    if (_static === void 0) {
      _static = false;
    }
    var node = {
      type: "ClassProperty",
      key: key,
      value: value,
      typeAnnotation: typeAnnotation,
      decorators: decorators,
      computed: computed,
      "static": _static
    };
    var defs = NODE_FIELDS.ClassProperty;
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.value, node, "value", value, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    validate$5(defs.decorators, node, "decorators", decorators, 1);
    validate$5(defs.computed, node, "computed", computed);
    validate$5(defs["static"], node, "static", _static);
    return node;
  }
  function classAccessorProperty(key, value, typeAnnotation, decorators, computed, _static) {
    if (value === void 0) {
      value = null;
    }
    if (typeAnnotation === void 0) {
      typeAnnotation = null;
    }
    if (decorators === void 0) {
      decorators = null;
    }
    if (computed === void 0) {
      computed = false;
    }
    if (_static === void 0) {
      _static = false;
    }
    var node = {
      type: "ClassAccessorProperty",
      key: key,
      value: value,
      typeAnnotation: typeAnnotation,
      decorators: decorators,
      computed: computed,
      "static": _static
    };
    var defs = NODE_FIELDS.ClassAccessorProperty;
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.value, node, "value", value, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    validate$5(defs.decorators, node, "decorators", decorators, 1);
    validate$5(defs.computed, node, "computed", computed);
    validate$5(defs["static"], node, "static", _static);
    return node;
  }
  function classPrivateProperty(key, value, decorators, _static) {
    if (value === void 0) {
      value = null;
    }
    if (decorators === void 0) {
      decorators = null;
    }
    if (_static === void 0) {
      _static = false;
    }
    var node = {
      type: "ClassPrivateProperty",
      key: key,
      value: value,
      decorators: decorators,
      "static": _static
    };
    var defs = NODE_FIELDS.ClassPrivateProperty;
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.value, node, "value", value, 1);
    validate$5(defs.decorators, node, "decorators", decorators, 1);
    validate$5(defs["static"], node, "static", _static);
    return node;
  }
  function classPrivateMethod(kind, key, params, body, _static) {
    if (kind === void 0) {
      kind = "method";
    }
    if (_static === void 0) {
      _static = false;
    }
    var node = {
      type: "ClassPrivateMethod",
      kind: kind,
      key: key,
      params: params,
      body: body,
      "static": _static
    };
    var defs = NODE_FIELDS.ClassPrivateMethod;
    validate$5(defs.kind, node, "kind", kind);
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.params, node, "params", params, 1);
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs["static"], node, "static", _static);
    return node;
  }
  function privateName(id) {
    var node = {
      type: "PrivateName",
      id: id
    };
    var defs = NODE_FIELDS.PrivateName;
    validate$5(defs.id, node, "id", id, 1);
    return node;
  }
  function staticBlock(body) {
    var node = {
      type: "StaticBlock",
      body: body
    };
    var defs = NODE_FIELDS.StaticBlock;
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function importAttribute(key, value) {
    var node = {
      type: "ImportAttribute",
      key: key,
      value: value
    };
    var defs = NODE_FIELDS.ImportAttribute;
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.value, node, "value", value, 1);
    return node;
  }
  function anyTypeAnnotation$2() {
    return {
      type: "AnyTypeAnnotation"
    };
  }
  function arrayTypeAnnotation$1(elementType) {
    var node = {
      type: "ArrayTypeAnnotation",
      elementType: elementType
    };
    var defs = NODE_FIELDS.ArrayTypeAnnotation;
    validate$5(defs.elementType, node, "elementType", elementType, 1);
    return node;
  }
  function booleanTypeAnnotation$1() {
    return {
      type: "BooleanTypeAnnotation"
    };
  }
  function booleanLiteralTypeAnnotation(value) {
    var node = {
      type: "BooleanLiteralTypeAnnotation",
      value: value
    };
    var defs = NODE_FIELDS.BooleanLiteralTypeAnnotation;
    validate$5(defs.value, node, "value", value);
    return node;
  }
  function nullLiteralTypeAnnotation$1() {
    return {
      type: "NullLiteralTypeAnnotation"
    };
  }
  function classImplements(id, typeParameters) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    var node = {
      type: "ClassImplements",
      id: id,
      typeParameters: typeParameters
    };
    var defs = NODE_FIELDS.ClassImplements;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    return node;
  }
  function declareClass(id, typeParameters, _extends, body) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (_extends === void 0) {
      _extends = null;
    }
    var node = {
      type: "DeclareClass",
      id: id,
      typeParameters: typeParameters,
      "extends": _extends,
      body: body
    };
    var defs = NODE_FIELDS.DeclareClass;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs["extends"], node, "extends", _extends, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function declareFunction(id) {
    var node = {
      type: "DeclareFunction",
      id: id
    };
    var defs = NODE_FIELDS.DeclareFunction;
    validate$5(defs.id, node, "id", id, 1);
    return node;
  }
  function declareInterface(id, typeParameters, _extends, body) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (_extends === void 0) {
      _extends = null;
    }
    var node = {
      type: "DeclareInterface",
      id: id,
      typeParameters: typeParameters,
      "extends": _extends,
      body: body
    };
    var defs = NODE_FIELDS.DeclareInterface;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs["extends"], node, "extends", _extends, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function declareModule(id, body, kind) {
    if (kind === void 0) {
      kind = null;
    }
    var node = {
      type: "DeclareModule",
      id: id,
      body: body,
      kind: kind
    };
    var defs = NODE_FIELDS.DeclareModule;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs.kind, node, "kind", kind);
    return node;
  }
  function declareModuleExports(typeAnnotation) {
    var node = {
      type: "DeclareModuleExports",
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.DeclareModuleExports;
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function declareTypeAlias(id, typeParameters, right) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    var node = {
      type: "DeclareTypeAlias",
      id: id,
      typeParameters: typeParameters,
      right: right
    };
    var defs = NODE_FIELDS.DeclareTypeAlias;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.right, node, "right", right, 1);
    return node;
  }
  function declareOpaqueType(id, typeParameters, supertype) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (supertype === void 0) {
      supertype = null;
    }
    var node = {
      type: "DeclareOpaqueType",
      id: id,
      typeParameters: typeParameters,
      supertype: supertype
    };
    var defs = NODE_FIELDS.DeclareOpaqueType;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.supertype, node, "supertype", supertype, 1);
    return node;
  }
  function declareVariable(id) {
    var node = {
      type: "DeclareVariable",
      id: id
    };
    var defs = NODE_FIELDS.DeclareVariable;
    validate$5(defs.id, node, "id", id, 1);
    return node;
  }
  function declareExportDeclaration(declaration, specifiers, source, attributes) {
    if (declaration === void 0) {
      declaration = null;
    }
    if (specifiers === void 0) {
      specifiers = null;
    }
    if (source === void 0) {
      source = null;
    }
    if (attributes === void 0) {
      attributes = null;
    }
    var node = {
      type: "DeclareExportDeclaration",
      declaration: declaration,
      specifiers: specifiers,
      source: source,
      attributes: attributes
    };
    var defs = NODE_FIELDS.DeclareExportDeclaration;
    validate$5(defs.declaration, node, "declaration", declaration, 1);
    validate$5(defs.specifiers, node, "specifiers", specifiers, 1);
    validate$5(defs.source, node, "source", source, 1);
    validate$5(defs.attributes, node, "attributes", attributes, 1);
    return node;
  }
  function declareExportAllDeclaration(source, attributes) {
    if (attributes === void 0) {
      attributes = null;
    }
    var node = {
      type: "DeclareExportAllDeclaration",
      source: source,
      attributes: attributes
    };
    var defs = NODE_FIELDS.DeclareExportAllDeclaration;
    validate$5(defs.source, node, "source", source, 1);
    validate$5(defs.attributes, node, "attributes", attributes, 1);
    return node;
  }
  function declaredPredicate(value) {
    var node = {
      type: "DeclaredPredicate",
      value: value
    };
    var defs = NODE_FIELDS.DeclaredPredicate;
    validate$5(defs.value, node, "value", value, 1);
    return node;
  }
  function existsTypeAnnotation() {
    return {
      type: "ExistsTypeAnnotation"
    };
  }
  function functionTypeAnnotation(typeParameters, params, rest, returnType) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (rest === void 0) {
      rest = null;
    }
    var node = {
      type: "FunctionTypeAnnotation",
      typeParameters: typeParameters,
      params: params,
      rest: rest,
      returnType: returnType
    };
    var defs = NODE_FIELDS.FunctionTypeAnnotation;
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.params, node, "params", params, 1);
    validate$5(defs.rest, node, "rest", rest, 1);
    validate$5(defs.returnType, node, "returnType", returnType, 1);
    return node;
  }
  function functionTypeParam(name, typeAnnotation) {
    if (name === void 0) {
      name = null;
    }
    var node = {
      type: "FunctionTypeParam",
      name: name,
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.FunctionTypeParam;
    validate$5(defs.name, node, "name", name, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function genericTypeAnnotation$1(id, typeParameters) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    var node = {
      type: "GenericTypeAnnotation",
      id: id,
      typeParameters: typeParameters
    };
    var defs = NODE_FIELDS.GenericTypeAnnotation;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    return node;
  }
  function inferredPredicate() {
    return {
      type: "InferredPredicate"
    };
  }
  function interfaceExtends(id, typeParameters) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    var node = {
      type: "InterfaceExtends",
      id: id,
      typeParameters: typeParameters
    };
    var defs = NODE_FIELDS.InterfaceExtends;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    return node;
  }
  function interfaceDeclaration(id, typeParameters, _extends, body) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (_extends === void 0) {
      _extends = null;
    }
    var node = {
      type: "InterfaceDeclaration",
      id: id,
      typeParameters: typeParameters,
      "extends": _extends,
      body: body
    };
    var defs = NODE_FIELDS.InterfaceDeclaration;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs["extends"], node, "extends", _extends, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function interfaceTypeAnnotation(_extends, body) {
    if (_extends === void 0) {
      _extends = null;
    }
    var node = {
      type: "InterfaceTypeAnnotation",
      "extends": _extends,
      body: body
    };
    var defs = NODE_FIELDS.InterfaceTypeAnnotation;
    validate$5(defs["extends"], node, "extends", _extends, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function intersectionTypeAnnotation(types) {
    var node = {
      type: "IntersectionTypeAnnotation",
      types: types
    };
    var defs = NODE_FIELDS.IntersectionTypeAnnotation;
    validate$5(defs.types, node, "types", types, 1);
    return node;
  }
  function mixedTypeAnnotation() {
    return {
      type: "MixedTypeAnnotation"
    };
  }
  function emptyTypeAnnotation() {
    return {
      type: "EmptyTypeAnnotation"
    };
  }
  function nullableTypeAnnotation(typeAnnotation) {
    var node = {
      type: "NullableTypeAnnotation",
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.NullableTypeAnnotation;
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function numberLiteralTypeAnnotation(value) {
    var node = {
      type: "NumberLiteralTypeAnnotation",
      value: value
    };
    var defs = NODE_FIELDS.NumberLiteralTypeAnnotation;
    validate$5(defs.value, node, "value", value);
    return node;
  }
  function numberTypeAnnotation$2() {
    return {
      type: "NumberTypeAnnotation"
    };
  }
  function objectTypeAnnotation(properties, indexers, callProperties, internalSlots, exact) {
    if (indexers === void 0) {
      indexers = [];
    }
    if (callProperties === void 0) {
      callProperties = [];
    }
    if (internalSlots === void 0) {
      internalSlots = [];
    }
    if (exact === void 0) {
      exact = false;
    }
    var node = {
      type: "ObjectTypeAnnotation",
      properties: properties,
      indexers: indexers,
      callProperties: callProperties,
      internalSlots: internalSlots,
      exact: exact
    };
    var defs = NODE_FIELDS.ObjectTypeAnnotation;
    validate$5(defs.properties, node, "properties", properties, 1);
    validate$5(defs.indexers, node, "indexers", indexers, 1);
    validate$5(defs.callProperties, node, "callProperties", callProperties, 1);
    validate$5(defs.internalSlots, node, "internalSlots", internalSlots, 1);
    validate$5(defs.exact, node, "exact", exact);
    return node;
  }
  function objectTypeInternalSlot(id, value, optional, _static, method) {
    var node = {
      type: "ObjectTypeInternalSlot",
      id: id,
      value: value,
      optional: optional,
      "static": _static,
      method: method
    };
    var defs = NODE_FIELDS.ObjectTypeInternalSlot;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.value, node, "value", value, 1);
    validate$5(defs.optional, node, "optional", optional);
    validate$5(defs["static"], node, "static", _static);
    validate$5(defs.method, node, "method", method);
    return node;
  }
  function objectTypeCallProperty(value) {
    var node = {
      type: "ObjectTypeCallProperty",
      value: value,
      "static": null
    };
    var defs = NODE_FIELDS.ObjectTypeCallProperty;
    validate$5(defs.value, node, "value", value, 1);
    return node;
  }
  function objectTypeIndexer(id, key, value, variance) {
    if (id === void 0) {
      id = null;
    }
    if (variance === void 0) {
      variance = null;
    }
    var node = {
      type: "ObjectTypeIndexer",
      id: id,
      key: key,
      value: value,
      variance: variance,
      "static": null
    };
    var defs = NODE_FIELDS.ObjectTypeIndexer;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.value, node, "value", value, 1);
    validate$5(defs.variance, node, "variance", variance, 1);
    return node;
  }
  function objectTypeProperty(key, value, variance) {
    if (variance === void 0) {
      variance = null;
    }
    var node = {
      type: "ObjectTypeProperty",
      key: key,
      value: value,
      variance: variance,
      kind: null,
      method: null,
      optional: null,
      proto: null,
      "static": null
    };
    var defs = NODE_FIELDS.ObjectTypeProperty;
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.value, node, "value", value, 1);
    validate$5(defs.variance, node, "variance", variance, 1);
    return node;
  }
  function objectTypeSpreadProperty(argument) {
    var node = {
      type: "ObjectTypeSpreadProperty",
      argument: argument
    };
    var defs = NODE_FIELDS.ObjectTypeSpreadProperty;
    validate$5(defs.argument, node, "argument", argument, 1);
    return node;
  }
  function opaqueType(id, typeParameters, supertype, impltype) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (supertype === void 0) {
      supertype = null;
    }
    var node = {
      type: "OpaqueType",
      id: id,
      typeParameters: typeParameters,
      supertype: supertype,
      impltype: impltype
    };
    var defs = NODE_FIELDS.OpaqueType;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.supertype, node, "supertype", supertype, 1);
    validate$5(defs.impltype, node, "impltype", impltype, 1);
    return node;
  }
  function qualifiedTypeIdentifier(id, qualification) {
    var node = {
      type: "QualifiedTypeIdentifier",
      id: id,
      qualification: qualification
    };
    var defs = NODE_FIELDS.QualifiedTypeIdentifier;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.qualification, node, "qualification", qualification, 1);
    return node;
  }
  function stringLiteralTypeAnnotation(value) {
    var node = {
      type: "StringLiteralTypeAnnotation",
      value: value
    };
    var defs = NODE_FIELDS.StringLiteralTypeAnnotation;
    validate$5(defs.value, node, "value", value);
    return node;
  }
  function stringTypeAnnotation$2() {
    return {
      type: "StringTypeAnnotation"
    };
  }
  function symbolTypeAnnotation() {
    return {
      type: "SymbolTypeAnnotation"
    };
  }
  function thisTypeAnnotation() {
    return {
      type: "ThisTypeAnnotation"
    };
  }
  function tupleTypeAnnotation$1(types) {
    var node = {
      type: "TupleTypeAnnotation",
      types: types
    };
    var defs = NODE_FIELDS.TupleTypeAnnotation;
    validate$5(defs.types, node, "types", types, 1);
    return node;
  }
  function typeofTypeAnnotation(argument) {
    var node = {
      type: "TypeofTypeAnnotation",
      argument: argument
    };
    var defs = NODE_FIELDS.TypeofTypeAnnotation;
    validate$5(defs.argument, node, "argument", argument, 1);
    return node;
  }
  function typeAlias(id, typeParameters, right) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    var node = {
      type: "TypeAlias",
      id: id,
      typeParameters: typeParameters,
      right: right
    };
    var defs = NODE_FIELDS.TypeAlias;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.right, node, "right", right, 1);
    return node;
  }
  function typeAnnotation(typeAnnotation) {
    var node = {
      type: "TypeAnnotation",
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TypeAnnotation;
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function typeCastExpression(expression, typeAnnotation) {
    var node = {
      type: "TypeCastExpression",
      expression: expression,
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TypeCastExpression;
    validate$5(defs.expression, node, "expression", expression, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function typeParameter(bound, _default, variance) {
    if (bound === void 0) {
      bound = null;
    }
    if (_default === void 0) {
      _default = null;
    }
    if (variance === void 0) {
      variance = null;
    }
    var node = {
      type: "TypeParameter",
      bound: bound,
      "default": _default,
      variance: variance,
      name: null
    };
    var defs = NODE_FIELDS.TypeParameter;
    validate$5(defs.bound, node, "bound", bound, 1);
    validate$5(defs["default"], node, "default", _default, 1);
    validate$5(defs.variance, node, "variance", variance, 1);
    return node;
  }
  function typeParameterDeclaration(params) {
    var node = {
      type: "TypeParameterDeclaration",
      params: params
    };
    var defs = NODE_FIELDS.TypeParameterDeclaration;
    validate$5(defs.params, node, "params", params, 1);
    return node;
  }
  function typeParameterInstantiation(params) {
    var node = {
      type: "TypeParameterInstantiation",
      params: params
    };
    var defs = NODE_FIELDS.TypeParameterInstantiation;
    validate$5(defs.params, node, "params", params, 1);
    return node;
  }
  function unionTypeAnnotation$1(types) {
    var node = {
      type: "UnionTypeAnnotation",
      types: types
    };
    var defs = NODE_FIELDS.UnionTypeAnnotation;
    validate$5(defs.types, node, "types", types, 1);
    return node;
  }
  function variance(kind) {
    var node = {
      type: "Variance",
      kind: kind
    };
    var defs = NODE_FIELDS.Variance;
    validate$5(defs.kind, node, "kind", kind);
    return node;
  }
  function voidTypeAnnotation$3() {
    return {
      type: "VoidTypeAnnotation"
    };
  }
  function enumDeclaration(id, body) {
    var node = {
      type: "EnumDeclaration",
      id: id,
      body: body
    };
    var defs = NODE_FIELDS.EnumDeclaration;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function enumBooleanBody(members) {
    var node = {
      type: "EnumBooleanBody",
      members: members,
      explicitType: null,
      hasUnknownMembers: null
    };
    var defs = NODE_FIELDS.EnumBooleanBody;
    validate$5(defs.members, node, "members", members, 1);
    return node;
  }
  function enumNumberBody(members) {
    var node = {
      type: "EnumNumberBody",
      members: members,
      explicitType: null,
      hasUnknownMembers: null
    };
    var defs = NODE_FIELDS.EnumNumberBody;
    validate$5(defs.members, node, "members", members, 1);
    return node;
  }
  function enumStringBody(members) {
    var node = {
      type: "EnumStringBody",
      members: members,
      explicitType: null,
      hasUnknownMembers: null
    };
    var defs = NODE_FIELDS.EnumStringBody;
    validate$5(defs.members, node, "members", members, 1);
    return node;
  }
  function enumSymbolBody(members) {
    var node = {
      type: "EnumSymbolBody",
      members: members,
      hasUnknownMembers: null
    };
    var defs = NODE_FIELDS.EnumSymbolBody;
    validate$5(defs.members, node, "members", members, 1);
    return node;
  }
  function enumBooleanMember(id) {
    var node = {
      type: "EnumBooleanMember",
      id: id,
      init: null
    };
    var defs = NODE_FIELDS.EnumBooleanMember;
    validate$5(defs.id, node, "id", id, 1);
    return node;
  }
  function enumNumberMember(id, init) {
    var node = {
      type: "EnumNumberMember",
      id: id,
      init: init
    };
    var defs = NODE_FIELDS.EnumNumberMember;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.init, node, "init", init, 1);
    return node;
  }
  function enumStringMember(id, init) {
    var node = {
      type: "EnumStringMember",
      id: id,
      init: init
    };
    var defs = NODE_FIELDS.EnumStringMember;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.init, node, "init", init, 1);
    return node;
  }
  function enumDefaultedMember(id) {
    var node = {
      type: "EnumDefaultedMember",
      id: id
    };
    var defs = NODE_FIELDS.EnumDefaultedMember;
    validate$5(defs.id, node, "id", id, 1);
    return node;
  }
  function indexedAccessType(objectType, indexType) {
    var node = {
      type: "IndexedAccessType",
      objectType: objectType,
      indexType: indexType
    };
    var defs = NODE_FIELDS.IndexedAccessType;
    validate$5(defs.objectType, node, "objectType", objectType, 1);
    validate$5(defs.indexType, node, "indexType", indexType, 1);
    return node;
  }
  function optionalIndexedAccessType(objectType, indexType) {
    var node = {
      type: "OptionalIndexedAccessType",
      objectType: objectType,
      indexType: indexType,
      optional: null
    };
    var defs = NODE_FIELDS.OptionalIndexedAccessType;
    validate$5(defs.objectType, node, "objectType", objectType, 1);
    validate$5(defs.indexType, node, "indexType", indexType, 1);
    return node;
  }
  function jsxAttribute(name, value) {
    if (value === void 0) {
      value = null;
    }
    var node = {
      type: "JSXAttribute",
      name: name,
      value: value
    };
    var defs = NODE_FIELDS.JSXAttribute;
    validate$5(defs.name, node, "name", name, 1);
    validate$5(defs.value, node, "value", value, 1);
    return node;
  }
  function jsxClosingElement(name) {
    var node = {
      type: "JSXClosingElement",
      name: name
    };
    var defs = NODE_FIELDS.JSXClosingElement;
    validate$5(defs.name, node, "name", name, 1);
    return node;
  }
  function jsxElement(openingElement, closingElement, children, selfClosing) {
    if (closingElement === void 0) {
      closingElement = null;
    }
    if (selfClosing === void 0) {
      selfClosing = null;
    }
    var node = {
      type: "JSXElement",
      openingElement: openingElement,
      closingElement: closingElement,
      children: children,
      selfClosing: selfClosing
    };
    var defs = NODE_FIELDS.JSXElement;
    validate$5(defs.openingElement, node, "openingElement", openingElement, 1);
    validate$5(defs.closingElement, node, "closingElement", closingElement, 1);
    validate$5(defs.children, node, "children", children, 1);
    validate$5(defs.selfClosing, node, "selfClosing", selfClosing);
    return node;
  }
  function jsxEmptyExpression() {
    return {
      type: "JSXEmptyExpression"
    };
  }
  function jsxExpressionContainer$1(expression) {
    var node = {
      type: "JSXExpressionContainer",
      expression: expression
    };
    var defs = NODE_FIELDS.JSXExpressionContainer;
    validate$5(defs.expression, node, "expression", expression, 1);
    return node;
  }
  function jsxSpreadChild(expression) {
    var node = {
      type: "JSXSpreadChild",
      expression: expression
    };
    var defs = NODE_FIELDS.JSXSpreadChild;
    validate$5(defs.expression, node, "expression", expression, 1);
    return node;
  }
  function jsxIdentifier$1(name) {
    var node = {
      type: "JSXIdentifier",
      name: name
    };
    var defs = NODE_FIELDS.JSXIdentifier;
    validate$5(defs.name, node, "name", name);
    return node;
  }
  function jsxMemberExpression(object, property) {
    var node = {
      type: "JSXMemberExpression",
      object: object,
      property: property
    };
    var defs = NODE_FIELDS.JSXMemberExpression;
    validate$5(defs.object, node, "object", object, 1);
    validate$5(defs.property, node, "property", property, 1);
    return node;
  }
  function jsxNamespacedName(namespace, name) {
    var node = {
      type: "JSXNamespacedName",
      namespace: namespace,
      name: name
    };
    var defs = NODE_FIELDS.JSXNamespacedName;
    validate$5(defs.namespace, node, "namespace", namespace, 1);
    validate$5(defs.name, node, "name", name, 1);
    return node;
  }
  function jsxOpeningElement(name, attributes, selfClosing) {
    if (selfClosing === void 0) {
      selfClosing = false;
    }
    var node = {
      type: "JSXOpeningElement",
      name: name,
      attributes: attributes,
      selfClosing: selfClosing
    };
    var defs = NODE_FIELDS.JSXOpeningElement;
    validate$5(defs.name, node, "name", name, 1);
    validate$5(defs.attributes, node, "attributes", attributes, 1);
    validate$5(defs.selfClosing, node, "selfClosing", selfClosing);
    return node;
  }
  function jsxSpreadAttribute(argument) {
    var node = {
      type: "JSXSpreadAttribute",
      argument: argument
    };
    var defs = NODE_FIELDS.JSXSpreadAttribute;
    validate$5(defs.argument, node, "argument", argument, 1);
    return node;
  }
  function jsxText(value) {
    var node = {
      type: "JSXText",
      value: value
    };
    var defs = NODE_FIELDS.JSXText;
    validate$5(defs.value, node, "value", value);
    return node;
  }
  function jsxFragment(openingFragment, closingFragment, children) {
    var node = {
      type: "JSXFragment",
      openingFragment: openingFragment,
      closingFragment: closingFragment,
      children: children
    };
    var defs = NODE_FIELDS.JSXFragment;
    validate$5(defs.openingFragment, node, "openingFragment", openingFragment, 1);
    validate$5(defs.closingFragment, node, "closingFragment", closingFragment, 1);
    validate$5(defs.children, node, "children", children, 1);
    return node;
  }
  function jsxOpeningFragment() {
    return {
      type: "JSXOpeningFragment"
    };
  }
  function jsxClosingFragment() {
    return {
      type: "JSXClosingFragment"
    };
  }
  function noop$1() {
    return {
      type: "Noop"
    };
  }
  function placeholder(expectedNode, name) {
    var node = {
      type: "Placeholder",
      expectedNode: expectedNode,
      name: name
    };
    var defs = NODE_FIELDS.Placeholder;
    validate$5(defs.expectedNode, node, "expectedNode", expectedNode);
    validate$5(defs.name, node, "name", name, 1);
    return node;
  }
  function v8IntrinsicIdentifier(name) {
    var node = {
      type: "V8IntrinsicIdentifier",
      name: name
    };
    var defs = NODE_FIELDS.V8IntrinsicIdentifier;
    validate$5(defs.name, node, "name", name);
    return node;
  }
  function argumentPlaceholder() {
    return {
      type: "ArgumentPlaceholder"
    };
  }
  function bindExpression(object, callee) {
    var node = {
      type: "BindExpression",
      object: object,
      callee: callee
    };
    var defs = NODE_FIELDS.BindExpression;
    validate$5(defs.object, node, "object", object, 1);
    validate$5(defs.callee, node, "callee", callee, 1);
    return node;
  }
  function decorator(expression) {
    var node = {
      type: "Decorator",
      expression: expression
    };
    var defs = NODE_FIELDS.Decorator;
    validate$5(defs.expression, node, "expression", expression, 1);
    return node;
  }
  function doExpression(body, async) {
    if (async === void 0) {
      async = false;
    }
    var node = {
      type: "DoExpression",
      body: body,
      async: async
    };
    var defs = NODE_FIELDS.DoExpression;
    validate$5(defs.body, node, "body", body, 1);
    validate$5(defs.async, node, "async", async);
    return node;
  }
  function exportDefaultSpecifier(exported) {
    var node = {
      type: "ExportDefaultSpecifier",
      exported: exported
    };
    var defs = NODE_FIELDS.ExportDefaultSpecifier;
    validate$5(defs.exported, node, "exported", exported, 1);
    return node;
  }
  function recordExpression(properties) {
    var node = {
      type: "RecordExpression",
      properties: properties
    };
    var defs = NODE_FIELDS.RecordExpression;
    validate$5(defs.properties, node, "properties", properties, 1);
    return node;
  }
  function tupleExpression(elements) {
    if (elements === void 0) {
      elements = [];
    }
    var node = {
      type: "TupleExpression",
      elements: elements
    };
    var defs = NODE_FIELDS.TupleExpression;
    validate$5(defs.elements, node, "elements", elements, 1);
    return node;
  }
  function decimalLiteral(value) {
    var node = {
      type: "DecimalLiteral",
      value: value
    };
    var defs = NODE_FIELDS.DecimalLiteral;
    validate$5(defs.value, node, "value", value);
    return node;
  }
  function moduleExpression(body) {
    var node = {
      type: "ModuleExpression",
      body: body
    };
    var defs = NODE_FIELDS.ModuleExpression;
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function topicReference() {
    return {
      type: "TopicReference"
    };
  }
  function pipelineTopicExpression(expression) {
    var node = {
      type: "PipelineTopicExpression",
      expression: expression
    };
    var defs = NODE_FIELDS.PipelineTopicExpression;
    validate$5(defs.expression, node, "expression", expression, 1);
    return node;
  }
  function pipelineBareFunction(callee) {
    var node = {
      type: "PipelineBareFunction",
      callee: callee
    };
    var defs = NODE_FIELDS.PipelineBareFunction;
    validate$5(defs.callee, node, "callee", callee, 1);
    return node;
  }
  function pipelinePrimaryTopicReference() {
    return {
      type: "PipelinePrimaryTopicReference"
    };
  }
  function voidPattern() {
    return {
      type: "VoidPattern"
    };
  }
  function tsParameterProperty(parameter) {
    var node = {
      type: "TSParameterProperty",
      parameter: parameter
    };
    var defs = NODE_FIELDS.TSParameterProperty;
    validate$5(defs.parameter, node, "parameter", parameter, 1);
    return node;
  }
  function tsDeclareFunction(id, typeParameters, params, returnType) {
    if (id === void 0) {
      id = null;
    }
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (returnType === void 0) {
      returnType = null;
    }
    var node = {
      type: "TSDeclareFunction",
      id: id,
      typeParameters: typeParameters,
      params: params,
      returnType: returnType
    };
    var defs = NODE_FIELDS.TSDeclareFunction;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.params, node, "params", params, 1);
    validate$5(defs.returnType, node, "returnType", returnType, 1);
    return node;
  }
  function tsDeclareMethod(decorators, key, typeParameters, params, returnType) {
    if (decorators === void 0) {
      decorators = null;
    }
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (returnType === void 0) {
      returnType = null;
    }
    var node = {
      type: "TSDeclareMethod",
      decorators: decorators,
      key: key,
      typeParameters: typeParameters,
      params: params,
      returnType: returnType
    };
    var defs = NODE_FIELDS.TSDeclareMethod;
    validate$5(defs.decorators, node, "decorators", decorators, 1);
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.params, node, "params", params, 1);
    validate$5(defs.returnType, node, "returnType", returnType, 1);
    return node;
  }
  function tsQualifiedName(left, right) {
    var node = {
      type: "TSQualifiedName",
      left: left,
      right: right
    };
    var defs = NODE_FIELDS.TSQualifiedName;
    validate$5(defs.left, node, "left", left, 1);
    validate$5(defs.right, node, "right", right, 1);
    return node;
  }
  function tsCallSignatureDeclaration(typeParameters, parameters, typeAnnotation) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (typeAnnotation === void 0) {
      typeAnnotation = null;
    }
    var node = {
      type: "TSCallSignatureDeclaration",
      typeParameters: typeParameters,
      parameters: parameters,
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSCallSignatureDeclaration;
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.parameters, node, "parameters", parameters, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsConstructSignatureDeclaration(typeParameters, parameters, typeAnnotation) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (typeAnnotation === void 0) {
      typeAnnotation = null;
    }
    var node = {
      type: "TSConstructSignatureDeclaration",
      typeParameters: typeParameters,
      parameters: parameters,
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSConstructSignatureDeclaration;
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.parameters, node, "parameters", parameters, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsPropertySignature(key, typeAnnotation) {
    if (typeAnnotation === void 0) {
      typeAnnotation = null;
    }
    var node = {
      type: "TSPropertySignature",
      key: key,
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSPropertySignature;
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsMethodSignature(key, typeParameters, parameters, typeAnnotation) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (typeAnnotation === void 0) {
      typeAnnotation = null;
    }
    var node = {
      type: "TSMethodSignature",
      key: key,
      typeParameters: typeParameters,
      parameters: parameters,
      typeAnnotation: typeAnnotation,
      kind: null
    };
    var defs = NODE_FIELDS.TSMethodSignature;
    validate$5(defs.key, node, "key", key, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.parameters, node, "parameters", parameters, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsIndexSignature(parameters, typeAnnotation) {
    if (typeAnnotation === void 0) {
      typeAnnotation = null;
    }
    var node = {
      type: "TSIndexSignature",
      parameters: parameters,
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSIndexSignature;
    validate$5(defs.parameters, node, "parameters", parameters, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsAnyKeyword() {
    return {
      type: "TSAnyKeyword"
    };
  }
  function tsBooleanKeyword() {
    return {
      type: "TSBooleanKeyword"
    };
  }
  function tsBigIntKeyword() {
    return {
      type: "TSBigIntKeyword"
    };
  }
  function tsIntrinsicKeyword() {
    return {
      type: "TSIntrinsicKeyword"
    };
  }
  function tsNeverKeyword() {
    return {
      type: "TSNeverKeyword"
    };
  }
  function tsNullKeyword() {
    return {
      type: "TSNullKeyword"
    };
  }
  function tsNumberKeyword() {
    return {
      type: "TSNumberKeyword"
    };
  }
  function tsObjectKeyword() {
    return {
      type: "TSObjectKeyword"
    };
  }
  function tsStringKeyword() {
    return {
      type: "TSStringKeyword"
    };
  }
  function tsSymbolKeyword() {
    return {
      type: "TSSymbolKeyword"
    };
  }
  function tsUndefinedKeyword() {
    return {
      type: "TSUndefinedKeyword"
    };
  }
  function tsUnknownKeyword() {
    return {
      type: "TSUnknownKeyword"
    };
  }
  function tsVoidKeyword() {
    return {
      type: "TSVoidKeyword"
    };
  }
  function tsThisType() {
    return {
      type: "TSThisType"
    };
  }
  function tsFunctionType(typeParameters, parameters, typeAnnotation) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (typeAnnotation === void 0) {
      typeAnnotation = null;
    }
    var node = {
      type: "TSFunctionType",
      typeParameters: typeParameters,
      parameters: parameters,
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSFunctionType;
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.parameters, node, "parameters", parameters, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsConstructorType(typeParameters, parameters, typeAnnotation) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (typeAnnotation === void 0) {
      typeAnnotation = null;
    }
    var node = {
      type: "TSConstructorType",
      typeParameters: typeParameters,
      parameters: parameters,
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSConstructorType;
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.parameters, node, "parameters", parameters, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsTypeReference(typeName, typeParameters) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    var node = {
      type: "TSTypeReference",
      typeName: typeName,
      typeParameters: typeParameters
    };
    var defs = NODE_FIELDS.TSTypeReference;
    validate$5(defs.typeName, node, "typeName", typeName, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    return node;
  }
  function tsTypePredicate(parameterName, typeAnnotation, asserts) {
    if (typeAnnotation === void 0) {
      typeAnnotation = null;
    }
    if (asserts === void 0) {
      asserts = null;
    }
    var node = {
      type: "TSTypePredicate",
      parameterName: parameterName,
      typeAnnotation: typeAnnotation,
      asserts: asserts
    };
    var defs = NODE_FIELDS.TSTypePredicate;
    validate$5(defs.parameterName, node, "parameterName", parameterName, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    validate$5(defs.asserts, node, "asserts", asserts);
    return node;
  }
  function tsTypeQuery(exprName, typeParameters) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    var node = {
      type: "TSTypeQuery",
      exprName: exprName,
      typeParameters: typeParameters
    };
    var defs = NODE_FIELDS.TSTypeQuery;
    validate$5(defs.exprName, node, "exprName", exprName, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    return node;
  }
  function tsTypeLiteral(members) {
    var node = {
      type: "TSTypeLiteral",
      members: members
    };
    var defs = NODE_FIELDS.TSTypeLiteral;
    validate$5(defs.members, node, "members", members, 1);
    return node;
  }
  function tsArrayType(elementType) {
    var node = {
      type: "TSArrayType",
      elementType: elementType
    };
    var defs = NODE_FIELDS.TSArrayType;
    validate$5(defs.elementType, node, "elementType", elementType, 1);
    return node;
  }
  function tsTupleType(elementTypes) {
    var node = {
      type: "TSTupleType",
      elementTypes: elementTypes
    };
    var defs = NODE_FIELDS.TSTupleType;
    validate$5(defs.elementTypes, node, "elementTypes", elementTypes, 1);
    return node;
  }
  function tsOptionalType(typeAnnotation) {
    var node = {
      type: "TSOptionalType",
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSOptionalType;
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsRestType(typeAnnotation) {
    var node = {
      type: "TSRestType",
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSRestType;
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsNamedTupleMember(label, elementType, optional) {
    if (optional === void 0) {
      optional = false;
    }
    var node = {
      type: "TSNamedTupleMember",
      label: label,
      elementType: elementType,
      optional: optional
    };
    var defs = NODE_FIELDS.TSNamedTupleMember;
    validate$5(defs.label, node, "label", label, 1);
    validate$5(defs.elementType, node, "elementType", elementType, 1);
    validate$5(defs.optional, node, "optional", optional);
    return node;
  }
  function tsUnionType(types) {
    var node = {
      type: "TSUnionType",
      types: types
    };
    var defs = NODE_FIELDS.TSUnionType;
    validate$5(defs.types, node, "types", types, 1);
    return node;
  }
  function tsIntersectionType(types) {
    var node = {
      type: "TSIntersectionType",
      types: types
    };
    var defs = NODE_FIELDS.TSIntersectionType;
    validate$5(defs.types, node, "types", types, 1);
    return node;
  }
  function tsConditionalType(checkType, extendsType, trueType, falseType) {
    var node = {
      type: "TSConditionalType",
      checkType: checkType,
      extendsType: extendsType,
      trueType: trueType,
      falseType: falseType
    };
    var defs = NODE_FIELDS.TSConditionalType;
    validate$5(defs.checkType, node, "checkType", checkType, 1);
    validate$5(defs.extendsType, node, "extendsType", extendsType, 1);
    validate$5(defs.trueType, node, "trueType", trueType, 1);
    validate$5(defs.falseType, node, "falseType", falseType, 1);
    return node;
  }
  function tsInferType(typeParameter) {
    var node = {
      type: "TSInferType",
      typeParameter: typeParameter
    };
    var defs = NODE_FIELDS.TSInferType;
    validate$5(defs.typeParameter, node, "typeParameter", typeParameter, 1);
    return node;
  }
  function tsParenthesizedType(typeAnnotation) {
    var node = {
      type: "TSParenthesizedType",
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSParenthesizedType;
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsTypeOperator(typeAnnotation, operator) {
    var node = {
      type: "TSTypeOperator",
      typeAnnotation: typeAnnotation,
      operator: operator
    };
    var defs = NODE_FIELDS.TSTypeOperator;
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    validate$5(defs.operator, node, "operator", operator);
    return node;
  }
  function tsIndexedAccessType(objectType, indexType) {
    var node = {
      type: "TSIndexedAccessType",
      objectType: objectType,
      indexType: indexType
    };
    var defs = NODE_FIELDS.TSIndexedAccessType;
    validate$5(defs.objectType, node, "objectType", objectType, 1);
    validate$5(defs.indexType, node, "indexType", indexType, 1);
    return node;
  }
  function tsMappedType(typeParameter, typeAnnotation, nameType) {
    if (typeAnnotation === void 0) {
      typeAnnotation = null;
    }
    if (nameType === void 0) {
      nameType = null;
    }
    var node = {
      type: "TSMappedType",
      typeParameter: typeParameter,
      typeAnnotation: typeAnnotation,
      nameType: nameType
    };
    var defs = NODE_FIELDS.TSMappedType;
    validate$5(defs.typeParameter, node, "typeParameter", typeParameter, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    validate$5(defs.nameType, node, "nameType", nameType, 1);
    return node;
  }
  function tsTemplateLiteralType(quasis, types) {
    var node = {
      type: "TSTemplateLiteralType",
      quasis: quasis,
      types: types
    };
    var defs = NODE_FIELDS.TSTemplateLiteralType;
    validate$5(defs.quasis, node, "quasis", quasis, 1);
    validate$5(defs.types, node, "types", types, 1);
    return node;
  }
  function tsLiteralType(literal) {
    var node = {
      type: "TSLiteralType",
      literal: literal
    };
    var defs = NODE_FIELDS.TSLiteralType;
    validate$5(defs.literal, node, "literal", literal, 1);
    return node;
  }
  function tsExpressionWithTypeArguments(expression, typeParameters) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    var node = {
      type: "TSExpressionWithTypeArguments",
      expression: expression,
      typeParameters: typeParameters
    };
    var defs = NODE_FIELDS.TSExpressionWithTypeArguments;
    validate$5(defs.expression, node, "expression", expression, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    return node;
  }
  function tsInterfaceDeclaration(id, typeParameters, _extends, body) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    if (_extends === void 0) {
      _extends = null;
    }
    var node = {
      type: "TSInterfaceDeclaration",
      id: id,
      typeParameters: typeParameters,
      "extends": _extends,
      body: body
    };
    var defs = NODE_FIELDS.TSInterfaceDeclaration;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs["extends"], node, "extends", _extends, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function tsInterfaceBody(body) {
    var node = {
      type: "TSInterfaceBody",
      body: body
    };
    var defs = NODE_FIELDS.TSInterfaceBody;
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function tsTypeAliasDeclaration(id, typeParameters, typeAnnotation) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    var node = {
      type: "TSTypeAliasDeclaration",
      id: id,
      typeParameters: typeParameters,
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSTypeAliasDeclaration;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsInstantiationExpression(expression, typeParameters) {
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    var node = {
      type: "TSInstantiationExpression",
      expression: expression,
      typeParameters: typeParameters
    };
    var defs = NODE_FIELDS.TSInstantiationExpression;
    validate$5(defs.expression, node, "expression", expression, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    return node;
  }
  function tsAsExpression(expression, typeAnnotation) {
    var node = {
      type: "TSAsExpression",
      expression: expression,
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSAsExpression;
    validate$5(defs.expression, node, "expression", expression, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsSatisfiesExpression(expression, typeAnnotation) {
    var node = {
      type: "TSSatisfiesExpression",
      expression: expression,
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSSatisfiesExpression;
    validate$5(defs.expression, node, "expression", expression, 1);
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsTypeAssertion(typeAnnotation, expression) {
    var node = {
      type: "TSTypeAssertion",
      typeAnnotation: typeAnnotation,
      expression: expression
    };
    var defs = NODE_FIELDS.TSTypeAssertion;
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    validate$5(defs.expression, node, "expression", expression, 1);
    return node;
  }
  function tsEnumBody(members) {
    var node = {
      type: "TSEnumBody",
      members: members
    };
    var defs = NODE_FIELDS.TSEnumBody;
    validate$5(defs.members, node, "members", members, 1);
    return node;
  }
  function tsEnumDeclaration(id, members) {
    var node = {
      type: "TSEnumDeclaration",
      id: id,
      members: members
    };
    var defs = NODE_FIELDS.TSEnumDeclaration;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.members, node, "members", members, 1);
    return node;
  }
  function tsEnumMember(id, initializer) {
    if (initializer === void 0) {
      initializer = null;
    }
    var node = {
      type: "TSEnumMember",
      id: id,
      initializer: initializer
    };
    var defs = NODE_FIELDS.TSEnumMember;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.initializer, node, "initializer", initializer, 1);
    return node;
  }
  function tsModuleDeclaration(id, body) {
    var node = {
      type: "TSModuleDeclaration",
      id: id,
      body: body,
      kind: null
    };
    var defs = NODE_FIELDS.TSModuleDeclaration;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function tsModuleBlock(body) {
    var node = {
      type: "TSModuleBlock",
      body: body
    };
    var defs = NODE_FIELDS.TSModuleBlock;
    validate$5(defs.body, node, "body", body, 1);
    return node;
  }
  function tsImportType(argument, qualifier, typeParameters) {
    if (qualifier === void 0) {
      qualifier = null;
    }
    if (typeParameters === void 0) {
      typeParameters = null;
    }
    var node = {
      type: "TSImportType",
      argument: argument,
      qualifier: qualifier,
      typeParameters: typeParameters
    };
    var defs = NODE_FIELDS.TSImportType;
    validate$5(defs.argument, node, "argument", argument, 1);
    validate$5(defs.qualifier, node, "qualifier", qualifier, 1);
    validate$5(defs.typeParameters, node, "typeParameters", typeParameters, 1);
    return node;
  }
  function tsImportEqualsDeclaration(id, moduleReference) {
    var node = {
      type: "TSImportEqualsDeclaration",
      id: id,
      moduleReference: moduleReference,
      isExport: null
    };
    var defs = NODE_FIELDS.TSImportEqualsDeclaration;
    validate$5(defs.id, node, "id", id, 1);
    validate$5(defs.moduleReference, node, "moduleReference", moduleReference, 1);
    return node;
  }
  function tsExternalModuleReference(expression) {
    var node = {
      type: "TSExternalModuleReference",
      expression: expression
    };
    var defs = NODE_FIELDS.TSExternalModuleReference;
    validate$5(defs.expression, node, "expression", expression, 1);
    return node;
  }
  function tsNonNullExpression(expression) {
    var node = {
      type: "TSNonNullExpression",
      expression: expression
    };
    var defs = NODE_FIELDS.TSNonNullExpression;
    validate$5(defs.expression, node, "expression", expression, 1);
    return node;
  }
  function tsExportAssignment(expression) {
    var node = {
      type: "TSExportAssignment",
      expression: expression
    };
    var defs = NODE_FIELDS.TSExportAssignment;
    validate$5(defs.expression, node, "expression", expression, 1);
    return node;
  }
  function tsNamespaceExportDeclaration(id) {
    var node = {
      type: "TSNamespaceExportDeclaration",
      id: id
    };
    var defs = NODE_FIELDS.TSNamespaceExportDeclaration;
    validate$5(defs.id, node, "id", id, 1);
    return node;
  }
  function tsTypeAnnotation(typeAnnotation) {
    var node = {
      type: "TSTypeAnnotation",
      typeAnnotation: typeAnnotation
    };
    var defs = NODE_FIELDS.TSTypeAnnotation;
    validate$5(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
    return node;
  }
  function tsTypeParameterInstantiation(params) {
    var node = {
      type: "TSTypeParameterInstantiation",
      params: params
    };
    var defs = NODE_FIELDS.TSTypeParameterInstantiation;
    validate$5(defs.params, node, "params", params, 1);
    return node;
  }
  function tsTypeParameterDeclaration(params) {
    var node = {
      type: "TSTypeParameterDeclaration",
      params: params
    };
    var defs = NODE_FIELDS.TSTypeParameterDeclaration;
    validate$5(defs.params, node, "params", params, 1);
    return node;
  }
  function tsTypeParameter(constraint, _default, name) {
    if (constraint === void 0) {
      constraint = null;
    }
    if (_default === void 0) {
      _default = null;
    }
    var node = {
      type: "TSTypeParameter",
      constraint: constraint,
      "default": _default,
      name: name
    };
    var defs = NODE_FIELDS.TSTypeParameter;
    validate$5(defs.constraint, node, "constraint", constraint, 1);
    validate$5(defs["default"], node, "default", _default, 1);
    validate$5(defs.name, node, "name", name);
    return node;
  }
  function NumberLiteral$1(value) {
    deprecationWarning$1("NumberLiteral", "NumericLiteral", "The node type ");
    return numericLiteral$5(value);
  }
  function RegexLiteral$1(pattern, flags) {
    if (flags === void 0) {
      flags = "";
    }
    deprecationWarning$1("RegexLiteral", "RegExpLiteral", "The node type ");
    return regExpLiteral(pattern, flags);
  }
  function RestProperty$2(argument) {
    deprecationWarning$1("RestProperty", "RestElement", "The node type ");
    return restElement$2(argument);
  }
  function SpreadProperty$2(argument) {
    deprecationWarning$1("SpreadProperty", "SpreadElement", "The node type ");
    return spreadElement$2(argument);
  }

  var b = /*#__PURE__*/Object.freeze({
    __proto__: null,
    anyTypeAnnotation: anyTypeAnnotation$2,
    argumentPlaceholder: argumentPlaceholder,
    arrayExpression: arrayExpression$1,
    arrayPattern: arrayPattern,
    arrayTypeAnnotation: arrayTypeAnnotation$1,
    arrowFunctionExpression: arrowFunctionExpression$4,
    assignmentExpression: assignmentExpression$8,
    assignmentPattern: assignmentPattern,
    awaitExpression: awaitExpression$1,
    bigIntLiteral: bigIntLiteral,
    binaryExpression: binaryExpression$4,
    bindExpression: bindExpression,
    blockStatement: blockStatement$6,
    booleanLiteral: booleanLiteral$2,
    booleanLiteralTypeAnnotation: booleanLiteralTypeAnnotation,
    booleanTypeAnnotation: booleanTypeAnnotation$1,
    breakStatement: breakStatement,
    callExpression: callExpression$c,
    catchClause: catchClause,
    classAccessorProperty: classAccessorProperty,
    classBody: classBody,
    classDeclaration: classDeclaration,
    classExpression: classExpression,
    classImplements: classImplements,
    classMethod: classMethod,
    classPrivateMethod: classPrivateMethod,
    classPrivateProperty: classPrivateProperty,
    classProperty: classProperty,
    conditionalExpression: conditionalExpression$5,
    continueStatement: continueStatement,
    debuggerStatement: debuggerStatement,
    decimalLiteral: decimalLiteral,
    declareClass: declareClass,
    declareExportAllDeclaration: declareExportAllDeclaration,
    declareExportDeclaration: declareExportDeclaration,
    declareFunction: declareFunction,
    declareInterface: declareInterface,
    declareModule: declareModule,
    declareModuleExports: declareModuleExports,
    declareOpaqueType: declareOpaqueType,
    declareTypeAlias: declareTypeAlias,
    declareVariable: declareVariable,
    declaredPredicate: declaredPredicate,
    decorator: decorator,
    directive: directive,
    directiveLiteral: directiveLiteral,
    doExpression: doExpression,
    doWhileStatement: doWhileStatement,
    emptyStatement: emptyStatement$1,
    emptyTypeAnnotation: emptyTypeAnnotation,
    enumBooleanBody: enumBooleanBody,
    enumBooleanMember: enumBooleanMember,
    enumDeclaration: enumDeclaration,
    enumDefaultedMember: enumDefaultedMember,
    enumNumberBody: enumNumberBody,
    enumNumberMember: enumNumberMember,
    enumStringBody: enumStringBody,
    enumStringMember: enumStringMember,
    enumSymbolBody: enumSymbolBody,
    existsTypeAnnotation: existsTypeAnnotation,
    exportAllDeclaration: exportAllDeclaration,
    exportDefaultDeclaration: exportDefaultDeclaration,
    exportDefaultSpecifier: exportDefaultSpecifier,
    exportNamedDeclaration: exportNamedDeclaration$2,
    exportNamespaceSpecifier: exportNamespaceSpecifier,
    exportSpecifier: exportSpecifier$2,
    expressionStatement: expressionStatement$7,
    file: file$1,
    forInStatement: forInStatement,
    forOfStatement: forOfStatement,
    forStatement: forStatement,
    functionDeclaration: functionDeclaration,
    functionExpression: functionExpression$2,
    functionTypeAnnotation: functionTypeAnnotation,
    functionTypeParam: functionTypeParam,
    genericTypeAnnotation: genericTypeAnnotation$1,
    identifier: identifier$e,
    ifStatement: ifStatement,
    import: _import,
    importAttribute: importAttribute,
    importDeclaration: importDeclaration$1,
    importDefaultSpecifier: importDefaultSpecifier$1,
    importExpression: importExpression,
    importNamespaceSpecifier: importNamespaceSpecifier$1,
    importSpecifier: importSpecifier$2,
    indexedAccessType: indexedAccessType,
    inferredPredicate: inferredPredicate,
    interfaceDeclaration: interfaceDeclaration,
    interfaceExtends: interfaceExtends,
    interfaceTypeAnnotation: interfaceTypeAnnotation,
    interpreterDirective: interpreterDirective$1,
    intersectionTypeAnnotation: intersectionTypeAnnotation,
    jSXAttribute: jsxAttribute,
    jSXClosingElement: jsxClosingElement,
    jSXClosingFragment: jsxClosingFragment,
    jSXElement: jsxElement,
    jSXEmptyExpression: jsxEmptyExpression,
    jSXExpressionContainer: jsxExpressionContainer$1,
    jSXFragment: jsxFragment,
    jSXIdentifier: jsxIdentifier$1,
    jSXMemberExpression: jsxMemberExpression,
    jSXNamespacedName: jsxNamespacedName,
    jSXOpeningElement: jsxOpeningElement,
    jSXOpeningFragment: jsxOpeningFragment,
    jSXSpreadAttribute: jsxSpreadAttribute,
    jSXSpreadChild: jsxSpreadChild,
    jSXText: jsxText,
    jsxAttribute: jsxAttribute,
    jsxClosingElement: jsxClosingElement,
    jsxClosingFragment: jsxClosingFragment,
    jsxElement: jsxElement,
    jsxEmptyExpression: jsxEmptyExpression,
    jsxExpressionContainer: jsxExpressionContainer$1,
    jsxFragment: jsxFragment,
    jsxIdentifier: jsxIdentifier$1,
    jsxMemberExpression: jsxMemberExpression,
    jsxNamespacedName: jsxNamespacedName,
    jsxOpeningElement: jsxOpeningElement,
    jsxOpeningFragment: jsxOpeningFragment,
    jsxSpreadAttribute: jsxSpreadAttribute,
    jsxSpreadChild: jsxSpreadChild,
    jsxText: jsxText,
    labeledStatement: labeledStatement,
    logicalExpression: logicalExpression$2,
    memberExpression: memberExpression$a,
    metaProperty: metaProperty$1,
    mixedTypeAnnotation: mixedTypeAnnotation,
    moduleExpression: moduleExpression,
    newExpression: newExpression,
    noop: noop$1,
    nullLiteral: nullLiteral$2,
    nullLiteralTypeAnnotation: nullLiteralTypeAnnotation$1,
    nullableTypeAnnotation: nullableTypeAnnotation,
    numberLiteral: NumberLiteral$1,
    numberLiteralTypeAnnotation: numberLiteralTypeAnnotation,
    numberTypeAnnotation: numberTypeAnnotation$2,
    numericLiteral: numericLiteral$5,
    objectExpression: objectExpression$3,
    objectMethod: objectMethod,
    objectPattern: objectPattern$1,
    objectProperty: objectProperty$1,
    objectTypeAnnotation: objectTypeAnnotation,
    objectTypeCallProperty: objectTypeCallProperty,
    objectTypeIndexer: objectTypeIndexer,
    objectTypeInternalSlot: objectTypeInternalSlot,
    objectTypeProperty: objectTypeProperty,
    objectTypeSpreadProperty: objectTypeSpreadProperty,
    opaqueType: opaqueType,
    optionalCallExpression: optionalCallExpression$2,
    optionalIndexedAccessType: optionalIndexedAccessType,
    optionalMemberExpression: optionalMemberExpression$2,
    parenthesizedExpression: parenthesizedExpression,
    pipelineBareFunction: pipelineBareFunction,
    pipelinePrimaryTopicReference: pipelinePrimaryTopicReference,
    pipelineTopicExpression: pipelineTopicExpression,
    placeholder: placeholder,
    privateName: privateName,
    program: program$3,
    qualifiedTypeIdentifier: qualifiedTypeIdentifier,
    recordExpression: recordExpression,
    regExpLiteral: regExpLiteral,
    regexLiteral: RegexLiteral$1,
    restElement: restElement$2,
    restProperty: RestProperty$2,
    returnStatement: returnStatement$3,
    sequenceExpression: sequenceExpression$6,
    spreadElement: spreadElement$2,
    spreadProperty: SpreadProperty$2,
    staticBlock: staticBlock,
    stringLiteral: stringLiteral$6,
    stringLiteralTypeAnnotation: stringLiteralTypeAnnotation,
    stringTypeAnnotation: stringTypeAnnotation$2,
    super: _super$1,
    switchCase: switchCase,
    switchStatement: switchStatement,
    symbolTypeAnnotation: symbolTypeAnnotation,
    tSAnyKeyword: tsAnyKeyword,
    tSArrayType: tsArrayType,
    tSAsExpression: tsAsExpression,
    tSBigIntKeyword: tsBigIntKeyword,
    tSBooleanKeyword: tsBooleanKeyword,
    tSCallSignatureDeclaration: tsCallSignatureDeclaration,
    tSConditionalType: tsConditionalType,
    tSConstructSignatureDeclaration: tsConstructSignatureDeclaration,
    tSConstructorType: tsConstructorType,
    tSDeclareFunction: tsDeclareFunction,
    tSDeclareMethod: tsDeclareMethod,
    tSEnumBody: tsEnumBody,
    tSEnumDeclaration: tsEnumDeclaration,
    tSEnumMember: tsEnumMember,
    tSExportAssignment: tsExportAssignment,
    tSExpressionWithTypeArguments: tsExpressionWithTypeArguments,
    tSExternalModuleReference: tsExternalModuleReference,
    tSFunctionType: tsFunctionType,
    tSImportEqualsDeclaration: tsImportEqualsDeclaration,
    tSImportType: tsImportType,
    tSIndexSignature: tsIndexSignature,
    tSIndexedAccessType: tsIndexedAccessType,
    tSInferType: tsInferType,
    tSInstantiationExpression: tsInstantiationExpression,
    tSInterfaceBody: tsInterfaceBody,
    tSInterfaceDeclaration: tsInterfaceDeclaration,
    tSIntersectionType: tsIntersectionType,
    tSIntrinsicKeyword: tsIntrinsicKeyword,
    tSLiteralType: tsLiteralType,
    tSMappedType: tsMappedType,
    tSMethodSignature: tsMethodSignature,
    tSModuleBlock: tsModuleBlock,
    tSModuleDeclaration: tsModuleDeclaration,
    tSNamedTupleMember: tsNamedTupleMember,
    tSNamespaceExportDeclaration: tsNamespaceExportDeclaration,
    tSNeverKeyword: tsNeverKeyword,
    tSNonNullExpression: tsNonNullExpression,
    tSNullKeyword: tsNullKeyword,
    tSNumberKeyword: tsNumberKeyword,
    tSObjectKeyword: tsObjectKeyword,
    tSOptionalType: tsOptionalType,
    tSParameterProperty: tsParameterProperty,
    tSParenthesizedType: tsParenthesizedType,
    tSPropertySignature: tsPropertySignature,
    tSQualifiedName: tsQualifiedName,
    tSRestType: tsRestType,
    tSSatisfiesExpression: tsSatisfiesExpression,
    tSStringKeyword: tsStringKeyword,
    tSSymbolKeyword: tsSymbolKeyword,
    tSTemplateLiteralType: tsTemplateLiteralType,
    tSThisType: tsThisType,
    tSTupleType: tsTupleType,
    tSTypeAliasDeclaration: tsTypeAliasDeclaration,
    tSTypeAnnotation: tsTypeAnnotation,
    tSTypeAssertion: tsTypeAssertion,
    tSTypeLiteral: tsTypeLiteral,
    tSTypeOperator: tsTypeOperator,
    tSTypeParameter: tsTypeParameter,
    tSTypeParameterDeclaration: tsTypeParameterDeclaration,
    tSTypeParameterInstantiation: tsTypeParameterInstantiation,
    tSTypePredicate: tsTypePredicate,
    tSTypeQuery: tsTypeQuery,
    tSTypeReference: tsTypeReference,
    tSUndefinedKeyword: tsUndefinedKeyword,
    tSUnionType: tsUnionType,
    tSUnknownKeyword: tsUnknownKeyword,
    tSVoidKeyword: tsVoidKeyword,
    taggedTemplateExpression: taggedTemplateExpression,
    templateElement: templateElement,
    templateLiteral: templateLiteral,
    thisExpression: thisExpression$5,
    thisTypeAnnotation: thisTypeAnnotation,
    throwStatement: throwStatement,
    topicReference: topicReference,
    tryStatement: tryStatement,
    tsAnyKeyword: tsAnyKeyword,
    tsArrayType: tsArrayType,
    tsAsExpression: tsAsExpression,
    tsBigIntKeyword: tsBigIntKeyword,
    tsBooleanKeyword: tsBooleanKeyword,
    tsCallSignatureDeclaration: tsCallSignatureDeclaration,
    tsConditionalType: tsConditionalType,
    tsConstructSignatureDeclaration: tsConstructSignatureDeclaration,
    tsConstructorType: tsConstructorType,
    tsDeclareFunction: tsDeclareFunction,
    tsDeclareMethod: tsDeclareMethod,
    tsEnumBody: tsEnumBody,
    tsEnumDeclaration: tsEnumDeclaration,
    tsEnumMember: tsEnumMember,
    tsExportAssignment: tsExportAssignment,
    tsExpressionWithTypeArguments: tsExpressionWithTypeArguments,
    tsExternalModuleReference: tsExternalModuleReference,
    tsFunctionType: tsFunctionType,
    tsImportEqualsDeclaration: tsImportEqualsDeclaration,
    tsImportType: tsImportType,
    tsIndexSignature: tsIndexSignature,
    tsIndexedAccessType: tsIndexedAccessType,
    tsInferType: tsInferType,
    tsInstantiationExpression: tsInstantiationExpression,
    tsInterfaceBody: tsInterfaceBody,
    tsInterfaceDeclaration: tsInterfaceDeclaration,
    tsIntersectionType: tsIntersectionType,
    tsIntrinsicKeyword: tsIntrinsicKeyword,
    tsLiteralType: tsLiteralType,
    tsMappedType: tsMappedType,
    tsMethodSignature: tsMethodSignature,
    tsModuleBlock: tsModuleBlock,
    tsModuleDeclaration: tsModuleDeclaration,
    tsNamedTupleMember: tsNamedTupleMember,
    tsNamespaceExportDeclaration: tsNamespaceExportDeclaration,
    tsNeverKeyword: tsNeverKeyword,
    tsNonNullExpression: tsNonNullExpression,
    tsNullKeyword: tsNullKeyword,
    tsNumberKeyword: tsNumberKeyword,
    tsObjectKeyword: tsObjectKeyword,
    tsOptionalType: tsOptionalType,
    tsParameterProperty: tsParameterProperty,
    tsParenthesizedType: tsParenthesizedType,
    tsPropertySignature: tsPropertySignature,
    tsQualifiedName: tsQualifiedName,
    tsRestType: tsRestType,
    tsSatisfiesExpression: tsSatisfiesExpression,
    tsStringKeyword: tsStringKeyword,
    tsSymbolKeyword: tsSymbolKeyword,
    tsTemplateLiteralType: tsTemplateLiteralType,
    tsThisType: tsThisType,
    tsTupleType: tsTupleType,
    tsTypeAliasDeclaration: tsTypeAliasDeclaration,
    tsTypeAnnotation: tsTypeAnnotation,
    tsTypeAssertion: tsTypeAssertion,
    tsTypeLiteral: tsTypeLiteral,
    tsTypeOperator: tsTypeOperator,
    tsTypeParameter: tsTypeParameter,
    tsTypeParameterDeclaration: tsTypeParameterDeclaration,
    tsTypeParameterInstantiation: tsTypeParameterInstantiation,
    tsTypePredicate: tsTypePredicate,
    tsTypeQuery: tsTypeQuery,
    tsTypeReference: tsTypeReference,
    tsUndefinedKeyword: tsUndefinedKeyword,
    tsUnionType: tsUnionType,
    tsUnknownKeyword: tsUnknownKeyword,
    tsVoidKeyword: tsVoidKeyword,
    tupleExpression: tupleExpression,
    tupleTypeAnnotation: tupleTypeAnnotation$1,
    typeAlias: typeAlias,
    typeAnnotation: typeAnnotation,
    typeCastExpression: typeCastExpression,
    typeParameter: typeParameter,
    typeParameterDeclaration: typeParameterDeclaration,
    typeParameterInstantiation: typeParameterInstantiation,
    typeofTypeAnnotation: typeofTypeAnnotation,
    unaryExpression: unaryExpression$4,
    unionTypeAnnotation: unionTypeAnnotation$1,
    updateExpression: updateExpression$1,
    v8IntrinsicIdentifier: v8IntrinsicIdentifier,
    variableDeclaration: variableDeclaration$6,
    variableDeclarator: variableDeclarator$6,
    variance: variance,
    voidPattern: voidPattern,
    voidTypeAnnotation: voidTypeAnnotation$3,
    whileStatement: whileStatement,
    withStatement: withStatement,
    yieldExpression: yieldExpression$2
  });

  function alias(lowercase) {
    {
      return b[lowercase];
    }
  }
  var ArrayExpression$2 = alias("arrayExpression"),
    AssignmentExpression$3 = alias("assignmentExpression"),
    BinaryExpression$2 = alias("binaryExpression"),
    InterpreterDirective$1 = alias("interpreterDirective"),
    Directive$1 = alias("directive"),
    DirectiveLiteral$1 = alias("directiveLiteral"),
    BlockStatement$1 = alias("blockStatement"),
    BreakStatement$1 = alias("breakStatement"),
    CallExpression$2 = alias("callExpression"),
    CatchClause$1 = alias("catchClause"),
    ConditionalExpression$3 = alias("conditionalExpression"),
    ContinueStatement$1 = alias("continueStatement"),
    DebuggerStatement$1 = alias("debuggerStatement"),
    DoWhileStatement$1 = alias("doWhileStatement"),
    EmptyStatement$1 = alias("emptyStatement"),
    ExpressionStatement$1 = alias("expressionStatement"),
    File$2 = alias("file"),
    ForInStatement$1 = alias("forInStatement"),
    ForStatement$1 = alias("forStatement"),
    FunctionDeclaration = alias("functionDeclaration"),
    FunctionExpression$2 = alias("functionExpression"),
    Identifier$2 = alias("identifier"),
    IfStatement$1 = alias("ifStatement"),
    LabeledStatement$1 = alias("labeledStatement"),
    StringLiteral$2 = alias("stringLiteral"),
    NumericLiteral$2 = alias("numericLiteral"),
    NullLiteral$2 = alias("nullLiteral"),
    BooleanLiteral$2 = alias("booleanLiteral"),
    RegExpLiteral$2 = alias("regExpLiteral"),
    LogicalExpression$2 = alias("logicalExpression"),
    MemberExpression$1 = alias("memberExpression"),
    NewExpression$2 = alias("newExpression"),
    Program$1 = alias("program"),
    ObjectExpression$3 = alias("objectExpression"),
    ObjectMethod$1 = alias("objectMethod"),
    ObjectProperty$1 = alias("objectProperty"),
    RestElement$2 = alias("restElement"),
    ReturnStatement$1 = alias("returnStatement"),
    SequenceExpression$3 = alias("sequenceExpression"),
    ParenthesizedExpression$2 = alias("parenthesizedExpression"),
    SwitchCase$1 = alias("switchCase"),
    SwitchStatement$1 = alias("switchStatement"),
    ThisExpression$1 = alias("thisExpression"),
    ThrowStatement$1 = alias("throwStatement"),
    TryStatement$1 = alias("tryStatement"),
    UnaryExpression$2 = alias("unaryExpression"),
    UpdateExpression$3 = alias("updateExpression"),
    VariableDeclaration$1 = alias("variableDeclaration"),
    VariableDeclarator$2 = alias("variableDeclarator"),
    WhileStatement$1 = alias("whileStatement"),
    WithStatement$1 = alias("withStatement"),
    AssignmentPattern$1 = alias("assignmentPattern"),
    ArrayPattern = alias("arrayPattern"),
    ArrowFunctionExpression$1 = alias("arrowFunctionExpression"),
    ClassBody$1 = alias("classBody"),
    ClassExpression$1 = alias("classExpression"),
    ClassDeclaration$1 = alias("classDeclaration"),
    ExportAllDeclaration$1 = alias("exportAllDeclaration"),
    ExportDefaultDeclaration$1 = alias("exportDefaultDeclaration"),
    ExportNamedDeclaration$1 = alias("exportNamedDeclaration"),
    ExportSpecifier$1 = alias("exportSpecifier"),
    ForOfStatement$1 = alias("forOfStatement"),
    ImportDeclaration$1 = alias("importDeclaration"),
    ImportDefaultSpecifier$1 = alias("importDefaultSpecifier"),
    ImportNamespaceSpecifier$1 = alias("importNamespaceSpecifier"),
    ImportSpecifier$1 = alias("importSpecifier"),
    ImportExpression$1 = alias("importExpression"),
    MetaProperty$1 = alias("metaProperty"),
    ClassMethod$1 = alias("classMethod"),
    ObjectPattern = alias("objectPattern"),
    SpreadElement = alias("spreadElement"),
    Super$1 = alias("super"),
    TaggedTemplateExpression$2 = alias("taggedTemplateExpression"),
    TemplateElement$1 = alias("templateElement"),
    TemplateLiteral$2 = alias("templateLiteral"),
    YieldExpression$2 = alias("yieldExpression"),
    AwaitExpression$1 = alias("awaitExpression"),
    Import$1 = alias("import"),
    BigIntLiteral$1 = alias("bigIntLiteral"),
    ExportNamespaceSpecifier$1 = alias("exportNamespaceSpecifier"),
    OptionalMemberExpression$2 = alias("optionalMemberExpression"),
    OptionalCallExpression$1 = alias("optionalCallExpression"),
    ClassProperty$1 = alias("classProperty"),
    ClassAccessorProperty$1 = alias("classAccessorProperty"),
    ClassPrivateProperty$1 = alias("classPrivateProperty"),
    ClassPrivateMethod$1 = alias("classPrivateMethod"),
    PrivateName$1 = alias("privateName"),
    StaticBlock$1 = alias("staticBlock"),
    ImportAttribute$1 = alias("importAttribute"),
    AnyTypeAnnotation$1 = alias("anyTypeAnnotation"),
    ArrayTypeAnnotation$1 = alias("arrayTypeAnnotation"),
    BooleanTypeAnnotation$1 = alias("booleanTypeAnnotation"),
    BooleanLiteralTypeAnnotation$1 = alias("booleanLiteralTypeAnnotation"),
    NullLiteralTypeAnnotation$1 = alias("nullLiteralTypeAnnotation"),
    ClassImplements = alias("classImplements"),
    DeclareClass$1 = alias("declareClass"),
    DeclareFunction$1 = alias("declareFunction"),
    DeclareInterface$1 = alias("declareInterface"),
    DeclareModule$1 = alias("declareModule"),
    DeclareModuleExports$1 = alias("declareModuleExports"),
    DeclareTypeAlias$1 = alias("declareTypeAlias"),
    DeclareOpaqueType$1 = alias("declareOpaqueType"),
    DeclareVariable$1 = alias("declareVariable"),
    DeclareExportDeclaration$1 = alias("declareExportDeclaration"),
    DeclareExportAllDeclaration$1 = alias("declareExportAllDeclaration"),
    DeclaredPredicate$1 = alias("declaredPredicate"),
    ExistsTypeAnnotation$1 = alias("existsTypeAnnotation"),
    FunctionTypeAnnotation$2 = alias("functionTypeAnnotation"),
    FunctionTypeParam$1 = alias("functionTypeParam"),
    GenericTypeAnnotation = alias("genericTypeAnnotation"),
    InferredPredicate$1 = alias("inferredPredicate"),
    InterfaceExtends$1 = alias("interfaceExtends"),
    InterfaceDeclaration$1 = alias("interfaceDeclaration"),
    InterfaceTypeAnnotation$1 = alias("interfaceTypeAnnotation"),
    IntersectionTypeAnnotation$1 = alias("intersectionTypeAnnotation"),
    MixedTypeAnnotation$1 = alias("mixedTypeAnnotation"),
    EmptyTypeAnnotation$1 = alias("emptyTypeAnnotation"),
    NullableTypeAnnotation$2 = alias("nullableTypeAnnotation"),
    NumberLiteralTypeAnnotation = alias("numberLiteralTypeAnnotation"),
    NumberTypeAnnotation$1 = alias("numberTypeAnnotation"),
    ObjectTypeAnnotation$1 = alias("objectTypeAnnotation"),
    ObjectTypeInternalSlot$1 = alias("objectTypeInternalSlot"),
    ObjectTypeCallProperty$1 = alias("objectTypeCallProperty"),
    ObjectTypeIndexer$1 = alias("objectTypeIndexer"),
    ObjectTypeProperty$1 = alias("objectTypeProperty"),
    ObjectTypeSpreadProperty$1 = alias("objectTypeSpreadProperty"),
    OpaqueType$1 = alias("opaqueType"),
    QualifiedTypeIdentifier$1 = alias("qualifiedTypeIdentifier"),
    StringLiteralTypeAnnotation = alias("stringLiteralTypeAnnotation"),
    StringTypeAnnotation$1 = alias("stringTypeAnnotation"),
    SymbolTypeAnnotation$1 = alias("symbolTypeAnnotation"),
    ThisTypeAnnotation$1 = alias("thisTypeAnnotation"),
    TupleTypeAnnotation$1 = alias("tupleTypeAnnotation"),
    TypeofTypeAnnotation$1 = alias("typeofTypeAnnotation"),
    TypeAlias$1 = alias("typeAlias"),
    TypeAnnotation$1 = alias("typeAnnotation"),
    TypeCastExpression$2 = alias("typeCastExpression"),
    TypeParameter$1 = alias("typeParameter"),
    TypeParameterDeclaration = alias("typeParameterDeclaration"),
    TypeParameterInstantiation$1 = alias("typeParameterInstantiation"),
    UnionTypeAnnotation$2 = alias("unionTypeAnnotation"),
    Variance$1 = alias("variance"),
    VoidTypeAnnotation$1 = alias("voidTypeAnnotation"),
    EnumDeclaration$1 = alias("enumDeclaration"),
    EnumBooleanBody$1 = alias("enumBooleanBody"),
    EnumNumberBody$1 = alias("enumNumberBody"),
    EnumStringBody$1 = alias("enumStringBody"),
    EnumSymbolBody$1 = alias("enumSymbolBody"),
    EnumBooleanMember$1 = alias("enumBooleanMember"),
    EnumNumberMember$1 = alias("enumNumberMember"),
    EnumStringMember$1 = alias("enumStringMember"),
    EnumDefaultedMember$1 = alias("enumDefaultedMember"),
    IndexedAccessType$1 = alias("indexedAccessType"),
    OptionalIndexedAccessType$2 = alias("optionalIndexedAccessType"),
    JSXAttribute$1 = alias("jsxAttribute"),
    JSXClosingElement$1 = alias("jsxClosingElement"),
    JSXElement$1 = alias("jsxElement"),
    JSXEmptyExpression$1 = alias("jsxEmptyExpression"),
    JSXExpressionContainer$1 = alias("jsxExpressionContainer"),
    JSXSpreadChild$1 = alias("jsxSpreadChild"),
    JSXIdentifier$1 = alias("jsxIdentifier"),
    JSXMemberExpression$1 = alias("jsxMemberExpression"),
    JSXNamespacedName$1 = alias("jsxNamespacedName"),
    JSXOpeningElement$1 = alias("jsxOpeningElement"),
    JSXSpreadAttribute$1 = alias("jsxSpreadAttribute"),
    JSXText$1 = alias("jsxText"),
    JSXFragment$1 = alias("jsxFragment"),
    JSXOpeningFragment$1 = alias("jsxOpeningFragment"),
    JSXClosingFragment$1 = alias("jsxClosingFragment"),
    Noop = alias("noop"),
    Placeholder$1 = alias("placeholder"),
    V8IntrinsicIdentifier$1 = alias("v8IntrinsicIdentifier"),
    ArgumentPlaceholder$1 = alias("argumentPlaceholder"),
    BindExpression$1 = alias("bindExpression"),
    Decorator$1 = alias("decorator"),
    DoExpression$2 = alias("doExpression"),
    ExportDefaultSpecifier$1 = alias("exportDefaultSpecifier"),
    RecordExpression$1 = alias("recordExpression"),
    TupleExpression$1 = alias("tupleExpression"),
    DecimalLiteral = alias("decimalLiteral"),
    ModuleExpression$1 = alias("moduleExpression"),
    TopicReference$1 = alias("topicReference"),
    PipelineTopicExpression$1 = alias("pipelineTopicExpression"),
    PipelineBareFunction$1 = alias("pipelineBareFunction"),
    PipelinePrimaryTopicReference$1 = alias("pipelinePrimaryTopicReference"),
    VoidPattern$1 = alias("voidPattern"),
    TSParameterProperty$1 = alias("tsParameterProperty"),
    TSDeclareFunction$1 = alias("tsDeclareFunction"),
    TSDeclareMethod$1 = alias("tsDeclareMethod"),
    TSQualifiedName$1 = alias("tsQualifiedName"),
    TSCallSignatureDeclaration$1 = alias("tsCallSignatureDeclaration"),
    TSConstructSignatureDeclaration$1 = alias("tsConstructSignatureDeclaration"),
    TSPropertySignature$1 = alias("tsPropertySignature"),
    TSMethodSignature$1 = alias("tsMethodSignature"),
    TSIndexSignature$1 = alias("tsIndexSignature"),
    TSAnyKeyword$1 = alias("tsAnyKeyword"),
    TSBooleanKeyword$1 = alias("tsBooleanKeyword"),
    TSBigIntKeyword$1 = alias("tsBigIntKeyword"),
    TSIntrinsicKeyword$1 = alias("tsIntrinsicKeyword"),
    TSNeverKeyword$1 = alias("tsNeverKeyword"),
    TSNullKeyword$1 = alias("tsNullKeyword"),
    TSNumberKeyword$1 = alias("tsNumberKeyword"),
    TSObjectKeyword$1 = alias("tsObjectKeyword"),
    TSStringKeyword$1 = alias("tsStringKeyword"),
    TSSymbolKeyword$1 = alias("tsSymbolKeyword"),
    TSUndefinedKeyword$1 = alias("tsUndefinedKeyword"),
    TSUnknownKeyword$1 = alias("tsUnknownKeyword"),
    TSVoidKeyword$1 = alias("tsVoidKeyword"),
    TSThisType$1 = alias("tsThisType"),
    TSFunctionType$2 = alias("tsFunctionType"),
    TSConstructorType$1 = alias("tsConstructorType"),
    TSTypeReference$1 = alias("tsTypeReference"),
    TSTypePredicate$1 = alias("tsTypePredicate"),
    TSTypeQuery$1 = alias("tsTypeQuery"),
    TSTypeLiteral$1 = alias("tsTypeLiteral"),
    TSArrayType$1 = alias("tsArrayType"),
    TSTupleType$1 = alias("tsTupleType"),
    TSOptionalType$1 = alias("tsOptionalType"),
    TSRestType$1 = alias("tsRestType"),
    TSNamedTupleMember$1 = alias("tsNamedTupleMember"),
    TSUnionType$2 = alias("tsUnionType"),
    TSIntersectionType$2 = alias("tsIntersectionType"),
    TSConditionalType$2 = alias("tsConditionalType"),
    TSInferType$2 = alias("tsInferType"),
    TSParenthesizedType$1 = alias("tsParenthesizedType"),
    TSTypeOperator$2 = alias("tsTypeOperator"),
    TSIndexedAccessType$1 = alias("tsIndexedAccessType"),
    TSMappedType$1 = alias("tsMappedType"),
    TSTemplateLiteralType$1 = alias("tsTemplateLiteralType"),
    TSLiteralType$1 = alias("tsLiteralType"),
    TSExpressionWithTypeArguments = alias("tsExpressionWithTypeArguments"),
    TSInterfaceDeclaration$1 = alias("tsInterfaceDeclaration"),
    TSInterfaceBody$1 = alias("tsInterfaceBody"),
    TSTypeAliasDeclaration$1 = alias("tsTypeAliasDeclaration"),
    TSInstantiationExpression$2 = alias("tsInstantiationExpression"),
    TSAsExpression$2 = alias("tsAsExpression"),
    TSSatisfiesExpression = alias("tsSatisfiesExpression"),
    TSTypeAssertion$1 = alias("tsTypeAssertion"),
    TSEnumBody$1 = alias("tsEnumBody"),
    TSEnumDeclaration$1 = alias("tsEnumDeclaration"),
    TSEnumMember$1 = alias("tsEnumMember"),
    TSModuleDeclaration$1 = alias("tsModuleDeclaration"),
    TSModuleBlock$1 = alias("tsModuleBlock"),
    TSImportType$1 = alias("tsImportType"),
    TSImportEqualsDeclaration$1 = alias("tsImportEqualsDeclaration"),
    TSExternalModuleReference$1 = alias("tsExternalModuleReference"),
    TSNonNullExpression$2 = alias("tsNonNullExpression"),
    TSExportAssignment$1 = alias("tsExportAssignment"),
    TSNamespaceExportDeclaration$1 = alias("tsNamespaceExportDeclaration"),
    TSTypeAnnotation$1 = alias("tsTypeAnnotation"),
    TSTypeParameterInstantiation$1 = alias("tsTypeParameterInstantiation"),
    TSTypeParameterDeclaration = alias("tsTypeParameterDeclaration"),
    TSTypeParameter$1 = alias("tsTypeParameter");
  var NumberLiteral = NumberLiteral$1,
    RegexLiteral = RegexLiteral$1,
    RestProperty$1 = RestProperty$2,
    SpreadProperty$1 = SpreadProperty$2;

  function cleanJSXElementLiteralChild(child, args) {
    var lines = child.value.split(/\r\n|\n|\r/);
    var lastNonEmptyLine = 0;
    for (var i = 0; i < lines.length; i++) {
      if (/[^ \t]/.exec(lines[i])) {
        lastNonEmptyLine = i;
      }
    }
    var str = "";
    for (var _i = 0; _i < lines.length; _i++) {
      var line = lines[_i];
      var isFirstLine = _i === 0;
      var isLastLine = _i === lines.length - 1;
      var isLastNonEmptyLine = _i === lastNonEmptyLine;
      var trimmedLine = line.replace(/\t/g, " ");
      if (!isFirstLine) {
        trimmedLine = trimmedLine.replace(/^ +/, "");
      }
      if (!isLastLine) {
        trimmedLine = trimmedLine.replace(/ +$/, "");
      }
      if (trimmedLine) {
        if (!isLastNonEmptyLine) {
          trimmedLine += " ";
        }
        str += trimmedLine;
      }
    }
    if (str) args.push(inherits$3(stringLiteral$6(str), child));
  }

  function buildChildren(node) {
    var elements = [];
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (isJSXText(child)) {
        cleanJSXElementLiteralChild(child, elements);
        continue;
      }
      if (isJSXExpressionContainer$1(child)) child = child.expression;
      if (isJSXEmptyExpression(child)) continue;
      elements.push(child);
    }
    return elements;
  }

  function isNode(node) {
    return !!(node && VISITOR_KEYS$7[node.type]);
  }

  function assertNode(node) {
    if (!isNode(node)) {
      var _node$type;
      var type = (_node$type = node == null ? void 0 : node.type) != null ? _node$type : JSON.stringify(node);
      throw new TypeError("Not a valid node of type \"" + type + "\"");
    }
  }

  function assert$2(type, node, opts) {
    if (!is(type, node, opts)) {
      throw new Error("Expected type \"" + type + "\" with option " + JSON.stringify(opts) + ", " + ("but instead got \"" + node.type + "\"."));
    }
  }
  function assertArrayExpression(node, opts) {
    assert$2("ArrayExpression", node, opts);
  }
  function assertAssignmentExpression(node, opts) {
    assert$2("AssignmentExpression", node, opts);
  }
  function assertBinaryExpression(node, opts) {
    assert$2("BinaryExpression", node, opts);
  }
  function assertInterpreterDirective(node, opts) {
    assert$2("InterpreterDirective", node, opts);
  }
  function assertDirective(node, opts) {
    assert$2("Directive", node, opts);
  }
  function assertDirectiveLiteral(node, opts) {
    assert$2("DirectiveLiteral", node, opts);
  }
  function assertBlockStatement(node, opts) {
    assert$2("BlockStatement", node, opts);
  }
  function assertBreakStatement(node, opts) {
    assert$2("BreakStatement", node, opts);
  }
  function assertCallExpression(node, opts) {
    assert$2("CallExpression", node, opts);
  }
  function assertCatchClause(node, opts) {
    assert$2("CatchClause", node, opts);
  }
  function assertConditionalExpression(node, opts) {
    assert$2("ConditionalExpression", node, opts);
  }
  function assertContinueStatement(node, opts) {
    assert$2("ContinueStatement", node, opts);
  }
  function assertDebuggerStatement(node, opts) {
    assert$2("DebuggerStatement", node, opts);
  }
  function assertDoWhileStatement(node, opts) {
    assert$2("DoWhileStatement", node, opts);
  }
  function assertEmptyStatement(node, opts) {
    assert$2("EmptyStatement", node, opts);
  }
  function assertExpressionStatement$1(node, opts) {
    assert$2("ExpressionStatement", node, opts);
  }
  function assertFile(node, opts) {
    assert$2("File", node, opts);
  }
  function assertForInStatement(node, opts) {
    assert$2("ForInStatement", node, opts);
  }
  function assertForStatement(node, opts) {
    assert$2("ForStatement", node, opts);
  }
  function assertFunctionDeclaration(node, opts) {
    assert$2("FunctionDeclaration", node, opts);
  }
  function assertFunctionExpression(node, opts) {
    assert$2("FunctionExpression", node, opts);
  }
  function assertIdentifier(node, opts) {
    assert$2("Identifier", node, opts);
  }
  function assertIfStatement(node, opts) {
    assert$2("IfStatement", node, opts);
  }
  function assertLabeledStatement(node, opts) {
    assert$2("LabeledStatement", node, opts);
  }
  function assertStringLiteral(node, opts) {
    assert$2("StringLiteral", node, opts);
  }
  function assertNumericLiteral(node, opts) {
    assert$2("NumericLiteral", node, opts);
  }
  function assertNullLiteral(node, opts) {
    assert$2("NullLiteral", node, opts);
  }
  function assertBooleanLiteral(node, opts) {
    assert$2("BooleanLiteral", node, opts);
  }
  function assertRegExpLiteral(node, opts) {
    assert$2("RegExpLiteral", node, opts);
  }
  function assertLogicalExpression(node, opts) {
    assert$2("LogicalExpression", node, opts);
  }
  function assertMemberExpression(node, opts) {
    assert$2("MemberExpression", node, opts);
  }
  function assertNewExpression(node, opts) {
    assert$2("NewExpression", node, opts);
  }
  function assertProgram(node, opts) {
    assert$2("Program", node, opts);
  }
  function assertObjectExpression(node, opts) {
    assert$2("ObjectExpression", node, opts);
  }
  function assertObjectMethod(node, opts) {
    assert$2("ObjectMethod", node, opts);
  }
  function assertObjectProperty(node, opts) {
    assert$2("ObjectProperty", node, opts);
  }
  function assertRestElement(node, opts) {
    assert$2("RestElement", node, opts);
  }
  function assertReturnStatement(node, opts) {
    assert$2("ReturnStatement", node, opts);
  }
  function assertSequenceExpression(node, opts) {
    assert$2("SequenceExpression", node, opts);
  }
  function assertParenthesizedExpression(node, opts) {
    assert$2("ParenthesizedExpression", node, opts);
  }
  function assertSwitchCase(node, opts) {
    assert$2("SwitchCase", node, opts);
  }
  function assertSwitchStatement(node, opts) {
    assert$2("SwitchStatement", node, opts);
  }
  function assertThisExpression(node, opts) {
    assert$2("ThisExpression", node, opts);
  }
  function assertThrowStatement(node, opts) {
    assert$2("ThrowStatement", node, opts);
  }
  function assertTryStatement(node, opts) {
    assert$2("TryStatement", node, opts);
  }
  function assertUnaryExpression(node, opts) {
    assert$2("UnaryExpression", node, opts);
  }
  function assertUpdateExpression(node, opts) {
    assert$2("UpdateExpression", node, opts);
  }
  function assertVariableDeclaration(node, opts) {
    assert$2("VariableDeclaration", node, opts);
  }
  function assertVariableDeclarator(node, opts) {
    assert$2("VariableDeclarator", node, opts);
  }
  function assertWhileStatement(node, opts) {
    assert$2("WhileStatement", node, opts);
  }
  function assertWithStatement(node, opts) {
    assert$2("WithStatement", node, opts);
  }
  function assertAssignmentPattern(node, opts) {
    assert$2("AssignmentPattern", node, opts);
  }
  function assertArrayPattern(node, opts) {
    assert$2("ArrayPattern", node, opts);
  }
  function assertArrowFunctionExpression(node, opts) {
    assert$2("ArrowFunctionExpression", node, opts);
  }
  function assertClassBody(node, opts) {
    assert$2("ClassBody", node, opts);
  }
  function assertClassExpression(node, opts) {
    assert$2("ClassExpression", node, opts);
  }
  function assertClassDeclaration(node, opts) {
    assert$2("ClassDeclaration", node, opts);
  }
  function assertExportAllDeclaration(node, opts) {
    assert$2("ExportAllDeclaration", node, opts);
  }
  function assertExportDefaultDeclaration(node, opts) {
    assert$2("ExportDefaultDeclaration", node, opts);
  }
  function assertExportNamedDeclaration(node, opts) {
    assert$2("ExportNamedDeclaration", node, opts);
  }
  function assertExportSpecifier$1(node, opts) {
    assert$2("ExportSpecifier", node, opts);
  }
  function assertForOfStatement(node, opts) {
    assert$2("ForOfStatement", node, opts);
  }
  function assertImportDeclaration(node, opts) {
    assert$2("ImportDeclaration", node, opts);
  }
  function assertImportDefaultSpecifier(node, opts) {
    assert$2("ImportDefaultSpecifier", node, opts);
  }
  function assertImportNamespaceSpecifier(node, opts) {
    assert$2("ImportNamespaceSpecifier", node, opts);
  }
  function assertImportSpecifier(node, opts) {
    assert$2("ImportSpecifier", node, opts);
  }
  function assertImportExpression(node, opts) {
    assert$2("ImportExpression", node, opts);
  }
  function assertMetaProperty(node, opts) {
    assert$2("MetaProperty", node, opts);
  }
  function assertClassMethod(node, opts) {
    assert$2("ClassMethod", node, opts);
  }
  function assertObjectPattern(node, opts) {
    assert$2("ObjectPattern", node, opts);
  }
  function assertSpreadElement(node, opts) {
    assert$2("SpreadElement", node, opts);
  }
  function assertSuper(node, opts) {
    assert$2("Super", node, opts);
  }
  function assertTaggedTemplateExpression(node, opts) {
    assert$2("TaggedTemplateExpression", node, opts);
  }
  function assertTemplateElement(node, opts) {
    assert$2("TemplateElement", node, opts);
  }
  function assertTemplateLiteral(node, opts) {
    assert$2("TemplateLiteral", node, opts);
  }
  function assertYieldExpression(node, opts) {
    assert$2("YieldExpression", node, opts);
  }
  function assertAwaitExpression(node, opts) {
    assert$2("AwaitExpression", node, opts);
  }
  function assertImport(node, opts) {
    assert$2("Import", node, opts);
  }
  function assertBigIntLiteral(node, opts) {
    assert$2("BigIntLiteral", node, opts);
  }
  function assertExportNamespaceSpecifier(node, opts) {
    assert$2("ExportNamespaceSpecifier", node, opts);
  }
  function assertOptionalMemberExpression(node, opts) {
    assert$2("OptionalMemberExpression", node, opts);
  }
  function assertOptionalCallExpression(node, opts) {
    assert$2("OptionalCallExpression", node, opts);
  }
  function assertClassProperty(node, opts) {
    assert$2("ClassProperty", node, opts);
  }
  function assertClassAccessorProperty(node, opts) {
    assert$2("ClassAccessorProperty", node, opts);
  }
  function assertClassPrivateProperty(node, opts) {
    assert$2("ClassPrivateProperty", node, opts);
  }
  function assertClassPrivateMethod(node, opts) {
    assert$2("ClassPrivateMethod", node, opts);
  }
  function assertPrivateName(node, opts) {
    assert$2("PrivateName", node, opts);
  }
  function assertStaticBlock(node, opts) {
    assert$2("StaticBlock", node, opts);
  }
  function assertImportAttribute(node, opts) {
    assert$2("ImportAttribute", node, opts);
  }
  function assertAnyTypeAnnotation(node, opts) {
    assert$2("AnyTypeAnnotation", node, opts);
  }
  function assertArrayTypeAnnotation(node, opts) {
    assert$2("ArrayTypeAnnotation", node, opts);
  }
  function assertBooleanTypeAnnotation(node, opts) {
    assert$2("BooleanTypeAnnotation", node, opts);
  }
  function assertBooleanLiteralTypeAnnotation(node, opts) {
    assert$2("BooleanLiteralTypeAnnotation", node, opts);
  }
  function assertNullLiteralTypeAnnotation(node, opts) {
    assert$2("NullLiteralTypeAnnotation", node, opts);
  }
  function assertClassImplements(node, opts) {
    assert$2("ClassImplements", node, opts);
  }
  function assertDeclareClass(node, opts) {
    assert$2("DeclareClass", node, opts);
  }
  function assertDeclareFunction(node, opts) {
    assert$2("DeclareFunction", node, opts);
  }
  function assertDeclareInterface(node, opts) {
    assert$2("DeclareInterface", node, opts);
  }
  function assertDeclareModule(node, opts) {
    assert$2("DeclareModule", node, opts);
  }
  function assertDeclareModuleExports(node, opts) {
    assert$2("DeclareModuleExports", node, opts);
  }
  function assertDeclareTypeAlias(node, opts) {
    assert$2("DeclareTypeAlias", node, opts);
  }
  function assertDeclareOpaqueType(node, opts) {
    assert$2("DeclareOpaqueType", node, opts);
  }
  function assertDeclareVariable(node, opts) {
    assert$2("DeclareVariable", node, opts);
  }
  function assertDeclareExportDeclaration(node, opts) {
    assert$2("DeclareExportDeclaration", node, opts);
  }
  function assertDeclareExportAllDeclaration(node, opts) {
    assert$2("DeclareExportAllDeclaration", node, opts);
  }
  function assertDeclaredPredicate(node, opts) {
    assert$2("DeclaredPredicate", node, opts);
  }
  function assertExistsTypeAnnotation(node, opts) {
    assert$2("ExistsTypeAnnotation", node, opts);
  }
  function assertFunctionTypeAnnotation(node, opts) {
    assert$2("FunctionTypeAnnotation", node, opts);
  }
  function assertFunctionTypeParam(node, opts) {
    assert$2("FunctionTypeParam", node, opts);
  }
  function assertGenericTypeAnnotation(node, opts) {
    assert$2("GenericTypeAnnotation", node, opts);
  }
  function assertInferredPredicate(node, opts) {
    assert$2("InferredPredicate", node, opts);
  }
  function assertInterfaceExtends(node, opts) {
    assert$2("InterfaceExtends", node, opts);
  }
  function assertInterfaceDeclaration(node, opts) {
    assert$2("InterfaceDeclaration", node, opts);
  }
  function assertInterfaceTypeAnnotation(node, opts) {
    assert$2("InterfaceTypeAnnotation", node, opts);
  }
  function assertIntersectionTypeAnnotation(node, opts) {
    assert$2("IntersectionTypeAnnotation", node, opts);
  }
  function assertMixedTypeAnnotation(node, opts) {
    assert$2("MixedTypeAnnotation", node, opts);
  }
  function assertEmptyTypeAnnotation(node, opts) {
    assert$2("EmptyTypeAnnotation", node, opts);
  }
  function assertNullableTypeAnnotation(node, opts) {
    assert$2("NullableTypeAnnotation", node, opts);
  }
  function assertNumberLiteralTypeAnnotation(node, opts) {
    assert$2("NumberLiteralTypeAnnotation", node, opts);
  }
  function assertNumberTypeAnnotation(node, opts) {
    assert$2("NumberTypeAnnotation", node, opts);
  }
  function assertObjectTypeAnnotation(node, opts) {
    assert$2("ObjectTypeAnnotation", node, opts);
  }
  function assertObjectTypeInternalSlot(node, opts) {
    assert$2("ObjectTypeInternalSlot", node, opts);
  }
  function assertObjectTypeCallProperty(node, opts) {
    assert$2("ObjectTypeCallProperty", node, opts);
  }
  function assertObjectTypeIndexer(node, opts) {
    assert$2("ObjectTypeIndexer", node, opts);
  }
  function assertObjectTypeProperty(node, opts) {
    assert$2("ObjectTypeProperty", node, opts);
  }
  function assertObjectTypeSpreadProperty(node, opts) {
    assert$2("ObjectTypeSpreadProperty", node, opts);
  }
  function assertOpaqueType(node, opts) {
    assert$2("OpaqueType", node, opts);
  }
  function assertQualifiedTypeIdentifier(node, opts) {
    assert$2("QualifiedTypeIdentifier", node, opts);
  }
  function assertStringLiteralTypeAnnotation(node, opts) {
    assert$2("StringLiteralTypeAnnotation", node, opts);
  }
  function assertStringTypeAnnotation(node, opts) {
    assert$2("StringTypeAnnotation", node, opts);
  }
  function assertSymbolTypeAnnotation(node, opts) {
    assert$2("SymbolTypeAnnotation", node, opts);
  }
  function assertThisTypeAnnotation(node, opts) {
    assert$2("ThisTypeAnnotation", node, opts);
  }
  function assertTupleTypeAnnotation(node, opts) {
    assert$2("TupleTypeAnnotation", node, opts);
  }
  function assertTypeofTypeAnnotation(node, opts) {
    assert$2("TypeofTypeAnnotation", node, opts);
  }
  function assertTypeAlias(node, opts) {
    assert$2("TypeAlias", node, opts);
  }
  function assertTypeAnnotation(node, opts) {
    assert$2("TypeAnnotation", node, opts);
  }
  function assertTypeCastExpression(node, opts) {
    assert$2("TypeCastExpression", node, opts);
  }
  function assertTypeParameter(node, opts) {
    assert$2("TypeParameter", node, opts);
  }
  function assertTypeParameterDeclaration(node, opts) {
    assert$2("TypeParameterDeclaration", node, opts);
  }
  function assertTypeParameterInstantiation(node, opts) {
    assert$2("TypeParameterInstantiation", node, opts);
  }
  function assertUnionTypeAnnotation(node, opts) {
    assert$2("UnionTypeAnnotation", node, opts);
  }
  function assertVariance(node, opts) {
    assert$2("Variance", node, opts);
  }
  function assertVoidTypeAnnotation(node, opts) {
    assert$2("VoidTypeAnnotation", node, opts);
  }
  function assertEnumDeclaration(node, opts) {
    assert$2("EnumDeclaration", node, opts);
  }
  function assertEnumBooleanBody(node, opts) {
    assert$2("EnumBooleanBody", node, opts);
  }
  function assertEnumNumberBody(node, opts) {
    assert$2("EnumNumberBody", node, opts);
  }
  function assertEnumStringBody(node, opts) {
    assert$2("EnumStringBody", node, opts);
  }
  function assertEnumSymbolBody(node, opts) {
    assert$2("EnumSymbolBody", node, opts);
  }
  function assertEnumBooleanMember(node, opts) {
    assert$2("EnumBooleanMember", node, opts);
  }
  function assertEnumNumberMember(node, opts) {
    assert$2("EnumNumberMember", node, opts);
  }
  function assertEnumStringMember(node, opts) {
    assert$2("EnumStringMember", node, opts);
  }
  function assertEnumDefaultedMember(node, opts) {
    assert$2("EnumDefaultedMember", node, opts);
  }
  function assertIndexedAccessType(node, opts) {
    assert$2("IndexedAccessType", node, opts);
  }
  function assertOptionalIndexedAccessType(node, opts) {
    assert$2("OptionalIndexedAccessType", node, opts);
  }
  function assertJSXAttribute(node, opts) {
    assert$2("JSXAttribute", node, opts);
  }
  function assertJSXClosingElement(node, opts) {
    assert$2("JSXClosingElement", node, opts);
  }
  function assertJSXElement(node, opts) {
    assert$2("JSXElement", node, opts);
  }
  function assertJSXEmptyExpression(node, opts) {
    assert$2("JSXEmptyExpression", node, opts);
  }
  function assertJSXExpressionContainer(node, opts) {
    assert$2("JSXExpressionContainer", node, opts);
  }
  function assertJSXSpreadChild(node, opts) {
    assert$2("JSXSpreadChild", node, opts);
  }
  function assertJSXIdentifier(node, opts) {
    assert$2("JSXIdentifier", node, opts);
  }
  function assertJSXMemberExpression(node, opts) {
    assert$2("JSXMemberExpression", node, opts);
  }
  function assertJSXNamespacedName(node, opts) {
    assert$2("JSXNamespacedName", node, opts);
  }
  function assertJSXOpeningElement(node, opts) {
    assert$2("JSXOpeningElement", node, opts);
  }
  function assertJSXSpreadAttribute(node, opts) {
    assert$2("JSXSpreadAttribute", node, opts);
  }
  function assertJSXText(node, opts) {
    assert$2("JSXText", node, opts);
  }
  function assertJSXFragment(node, opts) {
    assert$2("JSXFragment", node, opts);
  }
  function assertJSXOpeningFragment(node, opts) {
    assert$2("JSXOpeningFragment", node, opts);
  }
  function assertJSXClosingFragment(node, opts) {
    assert$2("JSXClosingFragment", node, opts);
  }
  function assertNoop(node, opts) {
    assert$2("Noop", node, opts);
  }
  function assertPlaceholder(node, opts) {
    assert$2("Placeholder", node, opts);
  }
  function assertV8IntrinsicIdentifier(node, opts) {
    assert$2("V8IntrinsicIdentifier", node, opts);
  }
  function assertArgumentPlaceholder(node, opts) {
    assert$2("ArgumentPlaceholder", node, opts);
  }
  function assertBindExpression(node, opts) {
    assert$2("BindExpression", node, opts);
  }
  function assertDecorator(node, opts) {
    assert$2("Decorator", node, opts);
  }
  function assertDoExpression(node, opts) {
    assert$2("DoExpression", node, opts);
  }
  function assertExportDefaultSpecifier(node, opts) {
    assert$2("ExportDefaultSpecifier", node, opts);
  }
  function assertRecordExpression(node, opts) {
    assert$2("RecordExpression", node, opts);
  }
  function assertTupleExpression(node, opts) {
    assert$2("TupleExpression", node, opts);
  }
  function assertDecimalLiteral(node, opts) {
    assert$2("DecimalLiteral", node, opts);
  }
  function assertModuleExpression(node, opts) {
    assert$2("ModuleExpression", node, opts);
  }
  function assertTopicReference(node, opts) {
    assert$2("TopicReference", node, opts);
  }
  function assertPipelineTopicExpression(node, opts) {
    assert$2("PipelineTopicExpression", node, opts);
  }
  function assertPipelineBareFunction(node, opts) {
    assert$2("PipelineBareFunction", node, opts);
  }
  function assertPipelinePrimaryTopicReference(node, opts) {
    assert$2("PipelinePrimaryTopicReference", node, opts);
  }
  function assertVoidPattern(node, opts) {
    assert$2("VoidPattern", node, opts);
  }
  function assertTSParameterProperty(node, opts) {
    assert$2("TSParameterProperty", node, opts);
  }
  function assertTSDeclareFunction(node, opts) {
    assert$2("TSDeclareFunction", node, opts);
  }
  function assertTSDeclareMethod(node, opts) {
    assert$2("TSDeclareMethod", node, opts);
  }
  function assertTSQualifiedName(node, opts) {
    assert$2("TSQualifiedName", node, opts);
  }
  function assertTSCallSignatureDeclaration(node, opts) {
    assert$2("TSCallSignatureDeclaration", node, opts);
  }
  function assertTSConstructSignatureDeclaration(node, opts) {
    assert$2("TSConstructSignatureDeclaration", node, opts);
  }
  function assertTSPropertySignature(node, opts) {
    assert$2("TSPropertySignature", node, opts);
  }
  function assertTSMethodSignature(node, opts) {
    assert$2("TSMethodSignature", node, opts);
  }
  function assertTSIndexSignature(node, opts) {
    assert$2("TSIndexSignature", node, opts);
  }
  function assertTSAnyKeyword(node, opts) {
    assert$2("TSAnyKeyword", node, opts);
  }
  function assertTSBooleanKeyword(node, opts) {
    assert$2("TSBooleanKeyword", node, opts);
  }
  function assertTSBigIntKeyword(node, opts) {
    assert$2("TSBigIntKeyword", node, opts);
  }
  function assertTSIntrinsicKeyword(node, opts) {
    assert$2("TSIntrinsicKeyword", node, opts);
  }
  function assertTSNeverKeyword(node, opts) {
    assert$2("TSNeverKeyword", node, opts);
  }
  function assertTSNullKeyword(node, opts) {
    assert$2("TSNullKeyword", node, opts);
  }
  function assertTSNumberKeyword(node, opts) {
    assert$2("TSNumberKeyword", node, opts);
  }
  function assertTSObjectKeyword(node, opts) {
    assert$2("TSObjectKeyword", node, opts);
  }
  function assertTSStringKeyword(node, opts) {
    assert$2("TSStringKeyword", node, opts);
  }
  function assertTSSymbolKeyword(node, opts) {
    assert$2("TSSymbolKeyword", node, opts);
  }
  function assertTSUndefinedKeyword(node, opts) {
    assert$2("TSUndefinedKeyword", node, opts);
  }
  function assertTSUnknownKeyword(node, opts) {
    assert$2("TSUnknownKeyword", node, opts);
  }
  function assertTSVoidKeyword(node, opts) {
    assert$2("TSVoidKeyword", node, opts);
  }
  function assertTSThisType(node, opts) {
    assert$2("TSThisType", node, opts);
  }
  function assertTSFunctionType(node, opts) {
    assert$2("TSFunctionType", node, opts);
  }
  function assertTSConstructorType(node, opts) {
    assert$2("TSConstructorType", node, opts);
  }
  function assertTSTypeReference(node, opts) {
    assert$2("TSTypeReference", node, opts);
  }
  function assertTSTypePredicate(node, opts) {
    assert$2("TSTypePredicate", node, opts);
  }
  function assertTSTypeQuery(node, opts) {
    assert$2("TSTypeQuery", node, opts);
  }
  function assertTSTypeLiteral(node, opts) {
    assert$2("TSTypeLiteral", node, opts);
  }
  function assertTSArrayType(node, opts) {
    assert$2("TSArrayType", node, opts);
  }
  function assertTSTupleType(node, opts) {
    assert$2("TSTupleType", node, opts);
  }
  function assertTSOptionalType(node, opts) {
    assert$2("TSOptionalType", node, opts);
  }
  function assertTSRestType(node, opts) {
    assert$2("TSRestType", node, opts);
  }
  function assertTSNamedTupleMember(node, opts) {
    assert$2("TSNamedTupleMember", node, opts);
  }
  function assertTSUnionType(node, opts) {
    assert$2("TSUnionType", node, opts);
  }
  function assertTSIntersectionType(node, opts) {
    assert$2("TSIntersectionType", node, opts);
  }
  function assertTSConditionalType(node, opts) {
    assert$2("TSConditionalType", node, opts);
  }
  function assertTSInferType(node, opts) {
    assert$2("TSInferType", node, opts);
  }
  function assertTSParenthesizedType(node, opts) {
    assert$2("TSParenthesizedType", node, opts);
  }
  function assertTSTypeOperator(node, opts) {
    assert$2("TSTypeOperator", node, opts);
  }
  function assertTSIndexedAccessType(node, opts) {
    assert$2("TSIndexedAccessType", node, opts);
  }
  function assertTSMappedType(node, opts) {
    assert$2("TSMappedType", node, opts);
  }
  function assertTSTemplateLiteralType(node, opts) {
    assert$2("TSTemplateLiteralType", node, opts);
  }
  function assertTSLiteralType(node, opts) {
    assert$2("TSLiteralType", node, opts);
  }
  function assertTSExpressionWithTypeArguments(node, opts) {
    assert$2("TSExpressionWithTypeArguments", node, opts);
  }
  function assertTSInterfaceDeclaration(node, opts) {
    assert$2("TSInterfaceDeclaration", node, opts);
  }
  function assertTSInterfaceBody(node, opts) {
    assert$2("TSInterfaceBody", node, opts);
  }
  function assertTSTypeAliasDeclaration(node, opts) {
    assert$2("TSTypeAliasDeclaration", node, opts);
  }
  function assertTSInstantiationExpression(node, opts) {
    assert$2("TSInstantiationExpression", node, opts);
  }
  function assertTSAsExpression(node, opts) {
    assert$2("TSAsExpression", node, opts);
  }
  function assertTSSatisfiesExpression(node, opts) {
    assert$2("TSSatisfiesExpression", node, opts);
  }
  function assertTSTypeAssertion(node, opts) {
    assert$2("TSTypeAssertion", node, opts);
  }
  function assertTSEnumBody(node, opts) {
    assert$2("TSEnumBody", node, opts);
  }
  function assertTSEnumDeclaration(node, opts) {
    assert$2("TSEnumDeclaration", node, opts);
  }
  function assertTSEnumMember(node, opts) {
    assert$2("TSEnumMember", node, opts);
  }
  function assertTSModuleDeclaration(node, opts) {
    assert$2("TSModuleDeclaration", node, opts);
  }
  function assertTSModuleBlock(node, opts) {
    assert$2("TSModuleBlock", node, opts);
  }
  function assertTSImportType(node, opts) {
    assert$2("TSImportType", node, opts);
  }
  function assertTSImportEqualsDeclaration(node, opts) {
    assert$2("TSImportEqualsDeclaration", node, opts);
  }
  function assertTSExternalModuleReference(node, opts) {
    assert$2("TSExternalModuleReference", node, opts);
  }
  function assertTSNonNullExpression(node, opts) {
    assert$2("TSNonNullExpression", node, opts);
  }
  function assertTSExportAssignment(node, opts) {
    assert$2("TSExportAssignment", node, opts);
  }
  function assertTSNamespaceExportDeclaration(node, opts) {
    assert$2("TSNamespaceExportDeclaration", node, opts);
  }
  function assertTSTypeAnnotation(node, opts) {
    assert$2("TSTypeAnnotation", node, opts);
  }
  function assertTSTypeParameterInstantiation(node, opts) {
    assert$2("TSTypeParameterInstantiation", node, opts);
  }
  function assertTSTypeParameterDeclaration(node, opts) {
    assert$2("TSTypeParameterDeclaration", node, opts);
  }
  function assertTSTypeParameter(node, opts) {
    assert$2("TSTypeParameter", node, opts);
  }
  function assertStandardized(node, opts) {
    assert$2("Standardized", node, opts);
  }
  function assertExpression$1(node, opts) {
    assert$2("Expression", node, opts);
  }
  function assertBinary(node, opts) {
    assert$2("Binary", node, opts);
  }
  function assertScopable(node, opts) {
    assert$2("Scopable", node, opts);
  }
  function assertBlockParent(node, opts) {
    assert$2("BlockParent", node, opts);
  }
  function assertBlock(node, opts) {
    assert$2("Block", node, opts);
  }
  function assertStatement(node, opts) {
    assert$2("Statement", node, opts);
  }
  function assertTerminatorless(node, opts) {
    assert$2("Terminatorless", node, opts);
  }
  function assertCompletionStatement(node, opts) {
    assert$2("CompletionStatement", node, opts);
  }
  function assertConditional(node, opts) {
    assert$2("Conditional", node, opts);
  }
  function assertLoop(node, opts) {
    assert$2("Loop", node, opts);
  }
  function assertWhile(node, opts) {
    assert$2("While", node, opts);
  }
  function assertExpressionWrapper(node, opts) {
    assert$2("ExpressionWrapper", node, opts);
  }
  function assertFor(node, opts) {
    assert$2("For", node, opts);
  }
  function assertForXStatement(node, opts) {
    assert$2("ForXStatement", node, opts);
  }
  function assertFunction$1(node, opts) {
    assert$2("Function", node, opts);
  }
  function assertFunctionParent(node, opts) {
    assert$2("FunctionParent", node, opts);
  }
  function assertPureish(node, opts) {
    assert$2("Pureish", node, opts);
  }
  function assertDeclaration(node, opts) {
    assert$2("Declaration", node, opts);
  }
  function assertFunctionParameter(node, opts) {
    assert$2("FunctionParameter", node, opts);
  }
  function assertPatternLike(node, opts) {
    assert$2("PatternLike", node, opts);
  }
  function assertLVal(node, opts) {
    assert$2("LVal", node, opts);
  }
  function assertTSEntityName(node, opts) {
    assert$2("TSEntityName", node, opts);
  }
  function assertLiteral(node, opts) {
    assert$2("Literal", node, opts);
  }
  function assertImmutable(node, opts) {
    assert$2("Immutable", node, opts);
  }
  function assertUserWhitespacable(node, opts) {
    assert$2("UserWhitespacable", node, opts);
  }
  function assertMethod(node, opts) {
    assert$2("Method", node, opts);
  }
  function assertObjectMember(node, opts) {
    assert$2("ObjectMember", node, opts);
  }
  function assertProperty(node, opts) {
    assert$2("Property", node, opts);
  }
  function assertUnaryLike(node, opts) {
    assert$2("UnaryLike", node, opts);
  }
  function assertPattern(node, opts) {
    assert$2("Pattern", node, opts);
  }
  function assertClass(node, opts) {
    assert$2("Class", node, opts);
  }
  function assertImportOrExportDeclaration(node, opts) {
    assert$2("ImportOrExportDeclaration", node, opts);
  }
  function assertExportDeclaration(node, opts) {
    assert$2("ExportDeclaration", node, opts);
  }
  function assertModuleSpecifier(node, opts) {
    assert$2("ModuleSpecifier", node, opts);
  }
  function assertAccessor(node, opts) {
    assert$2("Accessor", node, opts);
  }
  function assertPrivate(node, opts) {
    assert$2("Private", node, opts);
  }
  function assertFlow(node, opts) {
    assert$2("Flow", node, opts);
  }
  function assertFlowType(node, opts) {
    assert$2("FlowType", node, opts);
  }
  function assertFlowBaseAnnotation(node, opts) {
    assert$2("FlowBaseAnnotation", node, opts);
  }
  function assertFlowDeclaration(node, opts) {
    assert$2("FlowDeclaration", node, opts);
  }
  function assertFlowPredicate(node, opts) {
    assert$2("FlowPredicate", node, opts);
  }
  function assertEnumBody(node, opts) {
    assert$2("EnumBody", node, opts);
  }
  function assertEnumMember(node, opts) {
    assert$2("EnumMember", node, opts);
  }
  function assertJSX(node, opts) {
    assert$2("JSX", node, opts);
  }
  function assertMiscellaneous(node, opts) {
    assert$2("Miscellaneous", node, opts);
  }
  function assertTypeScript(node, opts) {
    assert$2("TypeScript", node, opts);
  }
  function assertTSTypeElement(node, opts) {
    assert$2("TSTypeElement", node, opts);
  }
  function assertTSType(node, opts) {
    assert$2("TSType", node, opts);
  }
  function assertTSBaseType(node, opts) {
    assert$2("TSBaseType", node, opts);
  }
  function assertNumberLiteral(node, opts) {
    deprecationWarning$1("assertNumberLiteral", "assertNumericLiteral");
    assert$2("NumberLiteral", node, opts);
  }
  function assertRegexLiteral(node, opts) {
    deprecationWarning$1("assertRegexLiteral", "assertRegExpLiteral");
    assert$2("RegexLiteral", node, opts);
  }
  function assertRestProperty(node, opts) {
    deprecationWarning$1("assertRestProperty", "assertRestElement");
    assert$2("RestProperty", node, opts);
  }
  function assertSpreadProperty(node, opts) {
    deprecationWarning$1("assertSpreadProperty", "assertSpreadElement");
    assert$2("SpreadProperty", node, opts);
  }
  function assertModuleDeclaration(node, opts) {
    deprecationWarning$1("assertModuleDeclaration", "assertImportOrExportDeclaration");
    assert$2("ModuleDeclaration", node, opts);
  }

  function createTypeAnnotationBasedOnTypeof$1(type) {
    switch (type) {
      case "string":
        return stringTypeAnnotation$2();
      case "number":
        return numberTypeAnnotation$2();
      case "undefined":
        return voidTypeAnnotation$3();
      case "boolean":
        return booleanTypeAnnotation$1();
      case "function":
        return genericTypeAnnotation$1(identifier$e("Function"));
      case "object":
        return genericTypeAnnotation$1(identifier$e("Object"));
      case "symbol":
        return genericTypeAnnotation$1(identifier$e("Symbol"));
      case "bigint":
        return anyTypeAnnotation$2();
    }
    throw new Error("Invalid typeof value: " + type);
  }

  function getQualifiedName$1(node) {
    return isIdentifier$e(node) ? node.name : node.id.name + "." + getQualifiedName$1(node.qualification);
  }
  function removeTypeDuplicates$1(nodesIn) {
    var nodes = Array.from(nodesIn);
    var generics = new Map();
    var bases = new Map();
    var typeGroups = new Set();
    var types = [];
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (!node) continue;
      if (types.includes(node)) {
        continue;
      }
      if (isAnyTypeAnnotation$1(node)) {
        return [node];
      }
      if (isFlowBaseAnnotation$1(node)) {
        bases.set(node.type, node);
        continue;
      }
      if (isUnionTypeAnnotation$1(node)) {
        if (!typeGroups.has(node.types)) {
          nodes.push.apply(nodes, _toConsumableArray(node.types));
          typeGroups.add(node.types);
        }
        continue;
      }
      if (isGenericTypeAnnotation$1(node)) {
        var name = getQualifiedName$1(node.id);
        if (generics.has(name)) {
          var existing = generics.get(name);
          if (existing.typeParameters) {
            if (node.typeParameters) {
              var _existing$typeParamet;
              (_existing$typeParamet = existing.typeParameters.params).push.apply(_existing$typeParamet, _toConsumableArray(node.typeParameters.params));
              existing.typeParameters.params = removeTypeDuplicates$1(existing.typeParameters.params);
            }
          } else {
            existing = node.typeParameters;
          }
        } else {
          generics.set(name, node);
        }
        continue;
      }
      types.push(node);
    }
    for (var _iterator = _createForOfIteratorHelperLoose(bases), _step; !(_step = _iterator()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        baseType = _step$value[1];
      types.push(baseType);
    }
    for (var _iterator2 = _createForOfIteratorHelperLoose(generics), _step2; !(_step2 = _iterator2()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
        genericName = _step2$value[1];
      types.push(genericName);
    }
    return types;
  }

  function createFlowUnionType$1(types) {
    var flattened = removeTypeDuplicates$1(types);
    if (flattened.length === 1) {
      return flattened[0];
    } else {
      return unionTypeAnnotation$1(flattened);
    }
  }

  function getQualifiedName(node) {
    return isIdentifier$e(node) ? node.name : isThisExpression$2(node) ? "this" : node.right.name + "." + getQualifiedName(node.left);
  }
  function removeTypeDuplicates(nodesIn) {
    var nodes = Array.from(nodesIn);
    var generics = new Map();
    var bases = new Map();
    var typeGroups = new Set();
    var types = [];
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (!node) continue;
      if (types.includes(node)) {
        continue;
      }
      if (isTSAnyKeyword(node)) {
        return [node];
      }
      if (isTSBaseType(node)) {
        bases.set(node.type, node);
        continue;
      }
      if (isTSUnionType(node)) {
        if (!typeGroups.has(node.types)) {
          nodes.push.apply(nodes, _toConsumableArray(node.types));
          typeGroups.add(node.types);
        }
        continue;
      }
      var typeArgumentsKey = "typeParameters";
      if (isTSTypeReference$1(node) && node[typeArgumentsKey]) {
        var typeArguments = node[typeArgumentsKey];
        var name = getQualifiedName(node.typeName);
        if (generics.has(name)) {
          var existing = generics.get(name);
          var existingTypeArguments = existing[typeArgumentsKey];
          if (existingTypeArguments) {
            var _existingTypeArgument;
            (_existingTypeArgument = existingTypeArguments.params).push.apply(_existingTypeArgument, _toConsumableArray(typeArguments.params));
            existingTypeArguments.params = removeTypeDuplicates(existingTypeArguments.params);
          } else {
            existing = typeArguments;
          }
        } else {
          generics.set(name, node);
        }
        continue;
      }
      types.push(node);
    }
    for (var _iterator = _createForOfIteratorHelperLoose(bases), _step; !(_step = _iterator()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        baseType = _step$value[1];
      types.push(baseType);
    }
    for (var _iterator2 = _createForOfIteratorHelperLoose(generics), _step2; !(_step2 = _iterator2()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
        genericName = _step2$value[1];
      types.push(genericName);
    }
    return types;
  }

  function createTSUnionType$1(typeAnnotations) {
    var types = typeAnnotations.map(function (type) {
      return isTSTypeAnnotation$1(type) ? type.typeAnnotation : type;
    });
    var flattened = removeTypeDuplicates(types);
    if (flattened.length === 1) {
      return flattened[0];
    } else {
      return tsUnionType(flattened);
    }
  }

  function buildUndefinedNode$2() {
    return unaryExpression$4("void", numericLiteral$5(0), true);
  }

  var _ref$1 = {
      hasOwn: Function.call.bind(Object.prototype.hasOwnProperty)
    },
    hasOwn$3 = _ref$1.hasOwn;
  function cloneIfNode(obj, deep, withoutLoc, commentsCache) {
    if (obj && typeof obj.type === "string") {
      return cloneNodeInternal(obj, deep, withoutLoc, commentsCache);
    }
    return obj;
  }
  function cloneIfNodeOrArray(obj, deep, withoutLoc, commentsCache) {
    if (Array.isArray(obj)) {
      return obj.map(function (node) {
        return cloneIfNode(node, deep, withoutLoc, commentsCache);
      });
    }
    return cloneIfNode(obj, deep, withoutLoc, commentsCache);
  }
  function cloneNode$e(node, deep, withoutLoc) {
    if (deep === void 0) {
      deep = true;
    }
    if (withoutLoc === void 0) {
      withoutLoc = false;
    }
    return cloneNodeInternal(node, deep, withoutLoc, new Map());
  }
  function cloneNodeInternal(node, deep, withoutLoc, commentsCache) {
    if (deep === void 0) {
      deep = true;
    }
    if (withoutLoc === void 0) {
      withoutLoc = false;
    }
    if (!node) return node;
    var type = node.type;
    var newNode = {
      type: node.type
    };
    if (isIdentifier$e(node)) {
      newNode.name = node.name;
      if (hasOwn$3(node, "optional") && typeof node.optional === "boolean") {
        newNode.optional = node.optional;
      }
      if (hasOwn$3(node, "typeAnnotation")) {
        newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true, withoutLoc, commentsCache) : node.typeAnnotation;
      }
      if (hasOwn$3(node, "decorators")) {
        newNode.decorators = deep ? cloneIfNodeOrArray(node.decorators, true, withoutLoc, commentsCache) : node.decorators;
      }
    } else if (!hasOwn$3(NODE_FIELDS$1, type)) {
      throw new Error("Unknown node type: \"" + type + "\"");
    } else {
      for (var _i = 0, _Object$keys = Object.keys(NODE_FIELDS$1[type]); _i < _Object$keys.length; _i++) {
        var field = _Object$keys[_i];
        if (hasOwn$3(node, field)) {
          if (deep) {
            newNode[field] = isFile(node) && field === "comments" ? maybeCloneComments(node.comments, deep, withoutLoc, commentsCache) : cloneIfNodeOrArray(node[field], true, withoutLoc, commentsCache);
          } else {
            newNode[field] = node[field];
          }
        }
      }
    }
    if (hasOwn$3(node, "loc")) {
      if (withoutLoc) {
        newNode.loc = null;
      } else {
        newNode.loc = node.loc;
      }
    }
    if (hasOwn$3(node, "leadingComments")) {
      newNode.leadingComments = maybeCloneComments(node.leadingComments, deep, withoutLoc, commentsCache);
    }
    if (hasOwn$3(node, "innerComments")) {
      newNode.innerComments = maybeCloneComments(node.innerComments, deep, withoutLoc, commentsCache);
    }
    if (hasOwn$3(node, "trailingComments")) {
      newNode.trailingComments = maybeCloneComments(node.trailingComments, deep, withoutLoc, commentsCache);
    }
    if (hasOwn$3(node, "extra")) {
      newNode.extra = Object.assign({}, node.extra);
    }
    return newNode;
  }
  function maybeCloneComments(comments, deep, withoutLoc, commentsCache) {
    if (!comments || !deep) {
      return comments;
    }
    return comments.map(function (comment) {
      var cache = commentsCache.get(comment);
      if (cache) return cache;
      var type = comment.type,
        value = comment.value,
        loc = comment.loc;
      var ret = {
        type: type,
        value: value,
        loc: loc
      };
      if (withoutLoc) {
        ret.loc = null;
      }
      commentsCache.set(comment, ret);
      return ret;
    });
  }

  function clone(node) {
    return cloneNode$e(node, false);
  }

  function cloneDeep$1(node) {
    return cloneNode$e(node);
  }

  function cloneDeepWithoutLoc(node) {
    return cloneNode$e(node, true, true);
  }

  function cloneWithoutLoc(node) {
    return cloneNode$e(node, false, true);
  }

  function addComments$1(node, type, comments) {
    if (!comments || !node) return node;
    var key = type + "Comments";
    if (node[key]) {
      if (type === "leading") {
        node[key] = comments.concat(node[key]);
      } else {
        var _node$key;
        (_node$key = node[key]).push.apply(_node$key, _toConsumableArray(comments));
      }
    } else {
      node[key] = comments;
    }
    return node;
  }

  function addComment$2(node, type, content, line) {
    return addComments$1(node, type, [{
      type: line ? "CommentLine" : "CommentBlock",
      value: content
    }]);
  }

  function inherit(key, child, parent) {
    if (child && parent) {
      child[key] = Array.from(new Set([].concat(child[key], parent[key]).filter(Boolean)));
    }
  }

  function inheritInnerComments(child, parent) {
    inherit("innerComments", child, parent);
  }

  function inheritLeadingComments$1(child, parent) {
    inherit("leadingComments", child, parent);
  }

  function inheritTrailingComments$1(child, parent) {
    inherit("trailingComments", child, parent);
  }

  function inheritsComments$1(child, parent) {
    inheritTrailingComments$1(child, parent);
    inheritLeadingComments$1(child, parent);
    inheritInnerComments(child, parent);
    return child;
  }

  function removeComments$1(node) {
    COMMENT_KEYS.forEach(function (key) {
      node[key] = null;
    });
    return node;
  }

  var STANDARDIZED_TYPES = FLIPPED_ALIAS_KEYS$3["Standardized"];
  var EXPRESSION_TYPES = FLIPPED_ALIAS_KEYS$3["Expression"];
  var BINARY_TYPES = FLIPPED_ALIAS_KEYS$3["Binary"];
  var SCOPABLE_TYPES = FLIPPED_ALIAS_KEYS$3["Scopable"];
  var BLOCKPARENT_TYPES = FLIPPED_ALIAS_KEYS$3["BlockParent"];
  var BLOCK_TYPES = FLIPPED_ALIAS_KEYS$3["Block"];
  var STATEMENT_TYPES = FLIPPED_ALIAS_KEYS$3["Statement"];
  var TERMINATORLESS_TYPES = FLIPPED_ALIAS_KEYS$3["Terminatorless"];
  var COMPLETIONSTATEMENT_TYPES = FLIPPED_ALIAS_KEYS$3["CompletionStatement"];
  var CONDITIONAL_TYPES = FLIPPED_ALIAS_KEYS$3["Conditional"];
  var LOOP_TYPES = FLIPPED_ALIAS_KEYS$3["Loop"];
  var WHILE_TYPES = FLIPPED_ALIAS_KEYS$3["While"];
  var EXPRESSIONWRAPPER_TYPES = FLIPPED_ALIAS_KEYS$3["ExpressionWrapper"];
  var FOR_TYPES = FLIPPED_ALIAS_KEYS$3["For"];
  var FORXSTATEMENT_TYPES = FLIPPED_ALIAS_KEYS$3["ForXStatement"];
  var FUNCTION_TYPES$1 = FLIPPED_ALIAS_KEYS$3["Function"];
  var FUNCTIONPARENT_TYPES = FLIPPED_ALIAS_KEYS$3["FunctionParent"];
  var PUREISH_TYPES = FLIPPED_ALIAS_KEYS$3["Pureish"];
  var DECLARATION_TYPES = FLIPPED_ALIAS_KEYS$3["Declaration"];
  var FUNCTIONPARAMETER_TYPES = FLIPPED_ALIAS_KEYS$3["FunctionParameter"];
  var PATTERNLIKE_TYPES = FLIPPED_ALIAS_KEYS$3["PatternLike"];
  var LVAL_TYPES = FLIPPED_ALIAS_KEYS$3["LVal"];
  var TSENTITYNAME_TYPES = FLIPPED_ALIAS_KEYS$3["TSEntityName"];
  var LITERAL_TYPES = FLIPPED_ALIAS_KEYS$3["Literal"];
  var IMMUTABLE_TYPES = FLIPPED_ALIAS_KEYS$3["Immutable"];
  var USERWHITESPACABLE_TYPES = FLIPPED_ALIAS_KEYS$3["UserWhitespacable"];
  var METHOD_TYPES = FLIPPED_ALIAS_KEYS$3["Method"];
  var OBJECTMEMBER_TYPES = FLIPPED_ALIAS_KEYS$3["ObjectMember"];
  var PROPERTY_TYPES = FLIPPED_ALIAS_KEYS$3["Property"];
  var UNARYLIKE_TYPES = FLIPPED_ALIAS_KEYS$3["UnaryLike"];
  var PATTERN_TYPES = FLIPPED_ALIAS_KEYS$3["Pattern"];
  var CLASS_TYPES = FLIPPED_ALIAS_KEYS$3["Class"];
  var IMPORTOREXPORTDECLARATION_TYPES = FLIPPED_ALIAS_KEYS$3["ImportOrExportDeclaration"];
  var EXPORTDECLARATION_TYPES = FLIPPED_ALIAS_KEYS$3["ExportDeclaration"];
  var MODULESPECIFIER_TYPES = FLIPPED_ALIAS_KEYS$3["ModuleSpecifier"];
  var ACCESSOR_TYPES = FLIPPED_ALIAS_KEYS$3["Accessor"];
  var PRIVATE_TYPES = FLIPPED_ALIAS_KEYS$3["Private"];
  var FLOW_TYPES = FLIPPED_ALIAS_KEYS$3["Flow"];
  var FLOWTYPE_TYPES = FLIPPED_ALIAS_KEYS$3["FlowType"];
  var FLOWBASEANNOTATION_TYPES = FLIPPED_ALIAS_KEYS$3["FlowBaseAnnotation"];
  var FLOWDECLARATION_TYPES = FLIPPED_ALIAS_KEYS$3["FlowDeclaration"];
  var FLOWPREDICATE_TYPES = FLIPPED_ALIAS_KEYS$3["FlowPredicate"];
  var ENUMBODY_TYPES = FLIPPED_ALIAS_KEYS$3["EnumBody"];
  var ENUMMEMBER_TYPES = FLIPPED_ALIAS_KEYS$3["EnumMember"];
  var JSX_TYPES = FLIPPED_ALIAS_KEYS$3["JSX"];
  var MISCELLANEOUS_TYPES = FLIPPED_ALIAS_KEYS$3["Miscellaneous"];
  var TYPESCRIPT_TYPES = FLIPPED_ALIAS_KEYS$3["TypeScript"];
  var TSTYPEELEMENT_TYPES = FLIPPED_ALIAS_KEYS$3["TSTypeElement"];
  var TSTYPE_TYPES = FLIPPED_ALIAS_KEYS$3["TSType"];
  var TSBASETYPE_TYPES = FLIPPED_ALIAS_KEYS$3["TSBaseType"];
  var MODULEDECLARATION_TYPES = IMPORTOREXPORTDECLARATION_TYPES;

  function toBlock(node, parent) {
    if (isBlockStatement$3(node)) {
      return node;
    }
    var blockNodes = [];
    if (isEmptyStatement$1(node)) {
      blockNodes = [];
    } else {
      if (!isStatement$9(node)) {
        if (isFunction$6(parent)) {
          node = returnStatement$3(node);
        } else {
          node = expressionStatement$7(node);
        }
      }
      blockNodes = [node];
    }
    return blockStatement$6(blockNodes);
  }

  function ensureBlock$1(node, key) {
    if (key === void 0) {
      key = "body";
    }
    var result = toBlock(node[key], node);
    node[key] = result;
    return result;
  }

  function toIdentifier$1(input) {
    input = input + "";
    var name = "";
    for (var _iterator = _createForOfIteratorHelperLoose(input), _step; !(_step = _iterator()).done;) {
      var c = _step.value;
      name += isIdentifierChar(c.codePointAt(0)) ? c : "-";
    }
    name = name.replace(/^[-0-9]+/, "");
    name = name.replace(/[-\s]+(.)?/g, function (match, c) {
      return c ? c.toUpperCase() : "";
    });
    if (!isValidIdentifier$1(name)) {
      name = "_" + name;
    }
    return name || "_";
  }

  function toBindingIdentifierName$1(name) {
    name = toIdentifier$1(name);
    if (name === "eval" || name === "arguments") name = "_" + name;
    return name;
  }

  function toComputedKey$1(node, key) {
    if (key === void 0) {
      key = node.key || node.property;
    }
    if (!node.computed && isIdentifier$e(key)) key = stringLiteral$6(key.name);
    return key;
  }

  function toExpression$1(node) {
    if (isExpressionStatement$2(node)) {
      node = node.expression;
    }
    if (isExpression$5(node)) {
      return node;
    }
    if (isClass$1(node)) {
      node.type = "ClassExpression";
      node["abstract"] = false;
    } else if (isFunction$6(node)) {
      node.type = "FunctionExpression";
    }
    if (!isExpression$5(node)) {
      throw new Error("cannot turn " + node.type + " to an expression");
    }
    return node;
  }

  var _skip = Symbol();
  var _stop = Symbol();
  function traverseFast$3(node, enter, opts) {
    if (!node) return false;
    var keys = VISITOR_KEYS$7[node.type];
    if (!keys) return false;
    opts = opts || {};
    var ret = enter(node, opts);
    if (ret !== undefined) {
      switch (ret) {
        case _skip:
          return false;
        case _stop:
          return true;
      }
    }
    for (var _iterator = _createForOfIteratorHelperLoose(keys), _step; !(_step = _iterator()).done;) {
      var key = _step.value;
      var subNode = node[key];
      if (!subNode) continue;
      if (Array.isArray(subNode)) {
        for (var _iterator2 = _createForOfIteratorHelperLoose(subNode), _step2; !(_step2 = _iterator2()).done;) {
          var _node = _step2.value;
          if (traverseFast$3(_node, enter, opts)) return true;
        }
      } else {
        if (traverseFast$3(subNode, enter, opts)) return true;
      }
    }
    return false;
  }
  traverseFast$3.skip = _skip;
  traverseFast$3.stop = _stop;

  var CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];
  var CLEAR_KEYS_PLUS_COMMENTS = [].concat(_toConsumableArray(COMMENT_KEYS), ["comments"], CLEAR_KEYS);
  function removeProperties$1(node, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;
    for (var _iterator = _createForOfIteratorHelperLoose(map), _step; !(_step = _iterator()).done;) {
      var _key = _step.value;
      if (node[_key] != null) node[_key] = undefined;
    }
    for (var _i = 0, _Object$keys = Object.keys(node); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      if (key[0] === "_" && node[key] != null) node[key] = undefined;
    }
    var symbols = Object.getOwnPropertySymbols(node);
    for (var _iterator2 = _createForOfIteratorHelperLoose(symbols), _step2; !(_step2 = _iterator2()).done;) {
      var sym = _step2.value;
      node[sym] = null;
    }
  }

  function removePropertiesDeep$1(tree, opts) {
    traverseFast$3(tree, removeProperties$1, opts);
    return tree;
  }

  function toKeyAlias(node, key) {
    if (key === void 0) {
      key = node.key;
    }
    var alias;
    if (node.kind === "method") {
      return toKeyAlias.increment() + "";
    } else if (isIdentifier$e(key)) {
      alias = key.name;
    } else if (isStringLiteral$5(key)) {
      alias = JSON.stringify(key.value);
    } else {
      alias = JSON.stringify(removePropertiesDeep$1(cloneNode$e(key)));
    }
    if (node.computed) {
      alias = "[" + alias + "]";
    }
    if (node["static"]) {
      alias = "static:" + alias;
    }
    return alias;
  }
  toKeyAlias.uid = 0;
  toKeyAlias.increment = function () {
    if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
      return toKeyAlias.uid = 0;
    } else {
      return toKeyAlias.uid++;
    }
  };

  function toStatement(node, ignore) {
    if (isStatement$9(node)) {
      return node;
    }
    var mustHaveId = false;
    var newType;
    if (isClass$1(node)) {
      mustHaveId = true;
      newType = "ClassDeclaration";
    } else if (isFunction$6(node)) {
      mustHaveId = true;
      newType = "FunctionDeclaration";
    } else if (isAssignmentExpression$2(node)) {
      return expressionStatement$7(node);
    }
    if (mustHaveId && !node.id) {
      newType = false;
    }
    if (!newType) {
      if (ignore) {
        return false;
      } else {
        throw new Error("cannot turn " + node.type + " to a statement");
      }
    }
    node.type = newType;
    return node;
  }

  var objectToString$1 = Function.call.bind(Object.prototype.toString);
  function isRegExp$1(value) {
    return objectToString$1(value) === "[object RegExp]";
  }
  function isPlainObject(value) {
    if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Object]") {
      return false;
    }
    var proto = Object.getPrototypeOf(value);
    return proto === null || Object.getPrototypeOf(proto) === null;
  }
  function valueToNode(value) {
    if (value === undefined) {
      return identifier$e("undefined");
    }
    if (value === true || value === false) {
      return booleanLiteral$2(value);
    }
    if (value === null) {
      return nullLiteral$2();
    }
    if (typeof value === "string") {
      return stringLiteral$6(value);
    }
    if (typeof value === "number") {
      var result;
      if (Number.isFinite(value)) {
        result = numericLiteral$5(Math.abs(value));
      } else {
        var numerator;
        if (Number.isNaN(value)) {
          numerator = numericLiteral$5(0);
        } else {
          numerator = numericLiteral$5(1);
        }
        result = binaryExpression$4("/", numerator, numericLiteral$5(0));
      }
      if (value < 0 || Object.is(value, -0)) {
        result = unaryExpression$4("-", result);
      }
      return result;
    }
    if (typeof value === "bigint") {
      if (value < 0) {
        return unaryExpression$4("-", bigIntLiteral(-value));
      } else {
        return bigIntLiteral(value);
      }
    }
    if (isRegExp$1(value)) {
      var pattern = value.source;
      var flags = /\/([a-z]*)$/.exec(value.toString())[1];
      return regExpLiteral(pattern, flags);
    }
    if (Array.isArray(value)) {
      return arrayExpression$1(value.map(valueToNode));
    }
    if (isPlainObject(value)) {
      var props = [];
      for (var _i = 0, _Object$keys = Object.keys(value); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        var nodeKey = void 0,
          computed = false;
        if (isValidIdentifier$1(key)) {
          if (key === "__proto__") {
            computed = true;
            nodeKey = stringLiteral$6(key);
          } else {
            nodeKey = identifier$e(key);
          }
        } else {
          nodeKey = stringLiteral$6(key);
        }
        props.push(objectProperty$1(nodeKey, valueToNode(value[key]), computed));
      }
      return objectExpression$3(props);
    }
    throw new Error("don't know how to turn this value into a node");
  }

  function appendToMemberExpression(member, append, computed) {
    if (computed === void 0) {
      computed = false;
    }
    member.object = memberExpression$a(member.object, member.property, member.computed);
    member.property = append;
    member.computed = !!computed;
    return member;
  }

  function inherits$3(child, parent) {
    if (!child || !parent) return child;
    for (var _iterator = _createForOfIteratorHelperLoose(INHERIT_KEYS.optional), _step; !(_step = _iterator()).done;) {
      var _key = _step.value;
      if (child[_key] == null) {
        child[_key] = parent[_key];
      }
    }
    for (var _i = 0, _Object$keys = Object.keys(parent); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      if (key[0] === "_" && key !== "__clone") {
        child[key] = parent[key];
      }
    }
    for (var _iterator2 = _createForOfIteratorHelperLoose(INHERIT_KEYS.force), _step2; !(_step2 = _iterator2()).done;) {
      var _key2 = _step2.value;
      child[_key2] = parent[_key2];
    }
    inheritsComments$1(child, parent);
    return child;
  }

  function prependToMemberExpression(member, prepend) {
    if (isSuper$2(member.object)) {
      throw new Error("Cannot prepend node to super property access (`super.foo`).");
    }
    member.object = memberExpression$a(prepend, member.object);
    return member;
  }

  function getAssignmentIdentifiers$2(node) {
    var search = [].concat(node);
    var ids = Object.create(null);
    while (search.length) {
      var id = search.pop();
      if (!id) continue;
      switch (id.type) {
        case "ArrayPattern":
          search.push.apply(search, _toConsumableArray(id.elements));
          break;
        case "AssignmentExpression":
        case "AssignmentPattern":
        case "ForInStatement":
        case "ForOfStatement":
          search.push(id.left);
          break;
        case "ObjectPattern":
          search.push.apply(search, _toConsumableArray(id.properties));
          break;
        case "ObjectProperty":
          search.push(id.value);
          break;
        case "RestElement":
        case "UpdateExpression":
          search.push(id.argument);
          break;
        case "UnaryExpression":
          if (id.operator === "delete") {
            search.push(id.argument);
          }
          break;
        case "Identifier":
          ids[id.name] = id;
          break;
      }
    }
    return ids;
  }

  function getBindingIdentifiers$4(node, duplicates, outerOnly, newBindingsOnly) {
    var search = [].concat(node);
    var ids = Object.create(null);
    while (search.length) {
      var id = search.shift();
      if (!id) continue;
      if (newBindingsOnly && (isAssignmentExpression$2(id) || isUnaryExpression$1(id) || isUpdateExpression$1(id))) {
        continue;
      }
      if (isIdentifier$e(id)) {
        if (duplicates) {
          var _ids = ids[id.name] = ids[id.name] || [];
          _ids.push(id);
        } else {
          ids[id.name] = id;
        }
        continue;
      }
      if (isExportDeclaration$2(id) && !isExportAllDeclaration$1(id)) {
        if (isDeclaration(id.declaration)) {
          search.push(id.declaration);
        }
        continue;
      }
      if (outerOnly) {
        if (isFunctionDeclaration$2(id)) {
          search.push(id.id);
          continue;
        }
        if (isFunctionExpression(id)) {
          continue;
        }
      }
      var _keys = getBindingIdentifiers$4.keys[id.type];
      if (_keys) {
        for (var i = 0; i < _keys.length; i++) {
          var key = _keys[i];
          var nodes = id[key];
          if (nodes) {
            if (Array.isArray(nodes)) {
              search.push.apply(search, _toConsumableArray(nodes));
            } else {
              search.push(nodes);
            }
          }
        }
      }
    }
    return ids;
  }
  var keys$1 = {
    DeclareClass: ["id"],
    DeclareFunction: ["id"],
    DeclareModule: ["id"],
    DeclareVariable: ["id"],
    DeclareInterface: ["id"],
    DeclareTypeAlias: ["id"],
    DeclareOpaqueType: ["id"],
    InterfaceDeclaration: ["id"],
    TypeAlias: ["id"],
    OpaqueType: ["id"],
    CatchClause: ["param"],
    LabeledStatement: ["label"],
    UnaryExpression: ["argument"],
    AssignmentExpression: ["left"],
    ImportSpecifier: ["local"],
    ImportNamespaceSpecifier: ["local"],
    ImportDefaultSpecifier: ["local"],
    ImportDeclaration: ["specifiers"],
    TSImportEqualsDeclaration: ["id"],
    ExportSpecifier: ["exported"],
    ExportNamespaceSpecifier: ["exported"],
    ExportDefaultSpecifier: ["exported"],
    FunctionDeclaration: ["id", "params"],
    FunctionExpression: ["id", "params"],
    ArrowFunctionExpression: ["params"],
    ObjectMethod: ["params"],
    ClassMethod: ["params"],
    ClassPrivateMethod: ["params"],
    ForInStatement: ["left"],
    ForOfStatement: ["left"],
    ClassDeclaration: ["id"],
    ClassExpression: ["id"],
    RestElement: ["argument"],
    UpdateExpression: ["argument"],
    ObjectProperty: ["value"],
    AssignmentPattern: ["left"],
    ArrayPattern: ["elements"],
    ObjectPattern: ["properties"],
    VariableDeclaration: ["declarations"],
    VariableDeclarator: ["id"]
  };
  getBindingIdentifiers$4.keys = keys$1;

  function getOuterBindingIdentifiers$1(node, duplicates) {
    return getBindingIdentifiers$4(node, duplicates, true);
  }

  function getNameFromLiteralId(id) {
    if (isNullLiteral$1(id)) {
      return "null";
    }
    if (isRegExpLiteral$1(id)) {
      return "/" + id.pattern + "/" + id.flags;
    }
    if (isTemplateLiteral$1(id)) {
      return id.quasis.map(function (quasi) {
        return quasi.value.raw;
      }).join("");
    }
    if (id.value !== undefined) {
      return String(id.value);
    }
    return null;
  }
  function getObjectMemberKey(node) {
    if (!node.computed || isLiteral$4(node.key)) {
      return node.key;
    }
  }
  function getFunctionName$1(node, parent) {
    if ("id" in node && node.id) {
      return {
        name: node.id.name,
        originalNode: node.id
      };
    }
    var prefix = "";
    var id;
    if (isObjectProperty$2(parent, {
      value: node
    })) {
      id = getObjectMemberKey(parent);
    } else if (isObjectMethod(node) || isClassMethod(node)) {
      id = getObjectMemberKey(node);
      if (node.kind === "get") prefix = "get ";else if (node.kind === "set") prefix = "set ";
    } else if (isVariableDeclarator(parent, {
      init: node
    })) {
      id = parent.id;
    } else if (isAssignmentExpression$2(parent, {
      operator: "=",
      right: node
    })) {
      id = parent.left;
    }
    if (!id) return null;
    var name = isLiteral$4(id) ? getNameFromLiteralId(id) : isIdentifier$e(id) ? id.name : isPrivateName$2(id) ? id.id.name : null;
    if (name == null) return null;
    return {
      name: prefix + name,
      originalNode: id
    };
  }

  function traverse$2(node, handlers, state) {
    if (typeof handlers === "function") {
      handlers = {
        enter: handlers
      };
    }
    var _handlers = handlers,
      enter = _handlers.enter,
      exit = _handlers.exit;
    traverseSimpleImpl(node, enter, exit, state, []);
  }
  function traverseSimpleImpl(node, enter, exit, state, ancestors) {
    var keys = VISITOR_KEYS$7[node.type];
    if (!keys) return;
    if (enter) enter(node, ancestors, state);
    for (var _iterator = _createForOfIteratorHelperLoose(keys), _step; !(_step = _iterator()).done;) {
      var key = _step.value;
      var subNode = node[key];
      if (Array.isArray(subNode)) {
        for (var i = 0; i < subNode.length; i++) {
          var child = subNode[i];
          if (!child) continue;
          ancestors.push({
            node: node,
            key: key,
            index: i
          });
          traverseSimpleImpl(child, enter, exit, state, ancestors);
          ancestors.pop();
        }
      } else if (subNode) {
        ancestors.push({
          node: node,
          key: key
        });
        traverseSimpleImpl(subNode, enter, exit, state, ancestors);
        ancestors.pop();
      }
    }
    if (exit) exit(node, ancestors, state);
  }

  function isBinding$1(node, parent, grandparent) {
    if (grandparent && node.type === "Identifier" && parent.type === "ObjectProperty" && grandparent.type === "ObjectExpression") {
      return false;
    }
    var keys = getBindingIdentifiers$4.keys[parent.type];
    if (keys) {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var val = parent[key];
        if (Array.isArray(val)) {
          if (val.includes(node)) return true;
        } else {
          if (val === node) return true;
        }
      }
    }
    return false;
  }

  {
    var BLOCK_SCOPED_SYMBOL$1 = Symbol["for"]("var used to be block scoped");
  }
  function isLet(node) {
    {
      return isVariableDeclaration$3(node) && (node.kind !== "var" || node[BLOCK_SCOPED_SYMBOL$1]);
    }
  }

  function isBlockScoped$2(node) {
    return isFunctionDeclaration$2(node) || isClassDeclaration$2(node) || isLet(node);
  }

  function isImmutable(node) {
    if (isType$2(node.type, "Immutable")) return true;
    if (isIdentifier$e(node)) {
      if (node.name === "undefined") {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  function isNodesEquivalent(a, b) {
    if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
      return a === b;
    }
    if (a.type !== b.type) {
      return false;
    }
    var fields = Object.keys(NODE_FIELDS$1[a.type] || a.type);
    var visitorKeys = VISITOR_KEYS$7[a.type];
    for (var _i = 0, _fields = fields; _i < _fields.length; _i++) {
      var field = _fields[_i];
      var val_a = a[field];
      var val_b = b[field];
      if (typeof val_a !== typeof val_b) {
        return false;
      }
      if (val_a == null && val_b == null) {
        continue;
      } else if (val_a == null || val_b == null) {
        return false;
      }
      if (Array.isArray(val_a)) {
        if (!Array.isArray(val_b)) {
          return false;
        }
        if (val_a.length !== val_b.length) {
          return false;
        }
        for (var i = 0; i < val_a.length; i++) {
          if (!isNodesEquivalent(val_a[i], val_b[i])) {
            return false;
          }
        }
        continue;
      }
      if (typeof val_a === "object" && !(visitorKeys != null && visitorKeys.includes(field))) {
        for (var _i2 = 0, _Object$keys = Object.keys(val_a); _i2 < _Object$keys.length; _i2++) {
          var key = _Object$keys[_i2];
          if (val_a[key] !== val_b[key]) {
            return false;
          }
        }
        continue;
      }
      if (!isNodesEquivalent(val_a, val_b)) {
        return false;
      }
    }
    return true;
  }

  function isReferenced$2(node, parent, grandparent) {
    switch (parent.type) {
      case "MemberExpression":
      case "OptionalMemberExpression":
        if (parent.property === node) {
          return !!parent.computed;
        }
        return parent.object === node;
      case "JSXMemberExpression":
        return parent.object === node;
      case "VariableDeclarator":
        return parent.init === node;
      case "ArrowFunctionExpression":
        return parent.body === node;
      case "PrivateName":
        return false;
      case "ClassMethod":
      case "ClassPrivateMethod":
      case "ObjectMethod":
        if (parent.key === node) {
          return !!parent.computed;
        }
        return false;
      case "ObjectProperty":
        if (parent.key === node) {
          return !!parent.computed;
        }
        return !grandparent || grandparent.type !== "ObjectPattern";
      case "ClassProperty":
      case "ClassAccessorProperty":
        if (parent.key === node) {
          return !!parent.computed;
        }
        return true;
      case "ClassPrivateProperty":
        return parent.key !== node;
      case "ClassDeclaration":
      case "ClassExpression":
        return parent.superClass === node;
      case "AssignmentExpression":
        return parent.right === node;
      case "AssignmentPattern":
        return parent.right === node;
      case "LabeledStatement":
        return false;
      case "CatchClause":
        return false;
      case "RestElement":
        return false;
      case "BreakStatement":
      case "ContinueStatement":
        return false;
      case "FunctionDeclaration":
      case "FunctionExpression":
        return false;
      case "ExportNamespaceSpecifier":
      case "ExportDefaultSpecifier":
        return false;
      case "ExportSpecifier":
        if (grandparent != null && grandparent.source) {
          return false;
        }
        return parent.local === node;
      case "ImportDefaultSpecifier":
      case "ImportNamespaceSpecifier":
      case "ImportSpecifier":
        return false;
      case "ImportAttribute":
        return false;
      case "JSXAttribute":
        return false;
      case "ObjectPattern":
      case "ArrayPattern":
        return false;
      case "MetaProperty":
        return false;
      case "ObjectTypeProperty":
        return parent.key !== node;
      case "TSEnumMember":
        return parent.id !== node;
      case "TSPropertySignature":
        if (parent.key === node) {
          return !!parent.computed;
        }
        return true;
    }
    return true;
  }

  function isScope$1(node, parent) {
    if (isBlockStatement$3(node) && (isFunction$6(parent) || isCatchClause(parent))) {
      return false;
    }
    if (isPattern$2(node) && (isFunction$6(parent) || isCatchClause(parent))) {
      return true;
    }
    return isScopable(node);
  }

  function isSpecifierDefault(specifier) {
    return isImportDefaultSpecifier$1(specifier) || isIdentifier$e(specifier.imported || specifier.exported, {
      name: "default"
    });
  }

  var RESERVED_WORDS_ES3_ONLY = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);
  function isValidES3Identifier(name) {
    return isValidIdentifier$1(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
  }

  {
    var BLOCK_SCOPED_SYMBOL = Symbol["for"]("var used to be block scoped");
  }
  function isVar$1(node) {
    {
      return isVariableDeclaration$3(node, {
        kind: "var"
      }) && !node[BLOCK_SCOPED_SYMBOL];
    }
  }

  var react$3 = {
    isReactComponent: isReactComponent,
    isCompatTag: isCompatTag$1,
    buildChildren: buildChildren
  };
  if (browser$1$1.env.BABEL_TYPES_8_BREAKING) {
    console.warn("BABEL_TYPES_8_BREAKING is not supported anymore. Use the latest Babel 8.0.0 pre-release instead!");
  }

  var t$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ACCESSOR_TYPES: ACCESSOR_TYPES,
    ALIAS_KEYS: ALIAS_KEYS,
    ASSIGNMENT_OPERATORS: ASSIGNMENT_OPERATORS,
    AnyTypeAnnotation: AnyTypeAnnotation$1,
    ArgumentPlaceholder: ArgumentPlaceholder$1,
    ArrayExpression: ArrayExpression$2,
    ArrayPattern: ArrayPattern,
    ArrayTypeAnnotation: ArrayTypeAnnotation$1,
    ArrowFunctionExpression: ArrowFunctionExpression$1,
    AssignmentExpression: AssignmentExpression$3,
    AssignmentPattern: AssignmentPattern$1,
    AwaitExpression: AwaitExpression$1,
    BINARY_OPERATORS: BINARY_OPERATORS,
    BINARY_TYPES: BINARY_TYPES,
    BLOCKPARENT_TYPES: BLOCKPARENT_TYPES,
    BLOCK_TYPES: BLOCK_TYPES,
    BOOLEAN_BINARY_OPERATORS: BOOLEAN_BINARY_OPERATORS$1,
    BOOLEAN_NUMBER_BINARY_OPERATORS: BOOLEAN_NUMBER_BINARY_OPERATORS$1,
    BOOLEAN_UNARY_OPERATORS: BOOLEAN_UNARY_OPERATORS$1,
    BUILDER_KEYS: BUILDER_KEYS,
    BigIntLiteral: BigIntLiteral$1,
    BinaryExpression: BinaryExpression$2,
    BindExpression: BindExpression$1,
    BlockStatement: BlockStatement$1,
    BooleanLiteral: BooleanLiteral$2,
    BooleanLiteralTypeAnnotation: BooleanLiteralTypeAnnotation$1,
    BooleanTypeAnnotation: BooleanTypeAnnotation$1,
    BreakStatement: BreakStatement$1,
    CLASS_TYPES: CLASS_TYPES,
    COMMENT_KEYS: COMMENT_KEYS,
    COMPARISON_BINARY_OPERATORS: COMPARISON_BINARY_OPERATORS,
    COMPLETIONSTATEMENT_TYPES: COMPLETIONSTATEMENT_TYPES,
    CONDITIONAL_TYPES: CONDITIONAL_TYPES,
    CallExpression: CallExpression$2,
    CatchClause: CatchClause$1,
    ClassAccessorProperty: ClassAccessorProperty$1,
    ClassBody: ClassBody$1,
    ClassDeclaration: ClassDeclaration$1,
    ClassExpression: ClassExpression$1,
    ClassImplements: ClassImplements,
    ClassMethod: ClassMethod$1,
    ClassPrivateMethod: ClassPrivateMethod$1,
    ClassPrivateProperty: ClassPrivateProperty$1,
    ClassProperty: ClassProperty$1,
    ConditionalExpression: ConditionalExpression$3,
    ContinueStatement: ContinueStatement$1,
    DECLARATION_TYPES: DECLARATION_TYPES,
    DEPRECATED_ALIASES: DEPRECATED_ALIASES$1,
    DEPRECATED_KEYS: DEPRECATED_KEYS$1,
    DebuggerStatement: DebuggerStatement$1,
    DecimalLiteral: DecimalLiteral,
    DeclareClass: DeclareClass$1,
    DeclareExportAllDeclaration: DeclareExportAllDeclaration$1,
    DeclareExportDeclaration: DeclareExportDeclaration$1,
    DeclareFunction: DeclareFunction$1,
    DeclareInterface: DeclareInterface$1,
    DeclareModule: DeclareModule$1,
    DeclareModuleExports: DeclareModuleExports$1,
    DeclareOpaqueType: DeclareOpaqueType$1,
    DeclareTypeAlias: DeclareTypeAlias$1,
    DeclareVariable: DeclareVariable$1,
    DeclaredPredicate: DeclaredPredicate$1,
    Decorator: Decorator$1,
    Directive: Directive$1,
    DirectiveLiteral: DirectiveLiteral$1,
    DoExpression: DoExpression$2,
    DoWhileStatement: DoWhileStatement$1,
    ENUMBODY_TYPES: ENUMBODY_TYPES,
    ENUMMEMBER_TYPES: ENUMMEMBER_TYPES,
    EQUALITY_BINARY_OPERATORS: EQUALITY_BINARY_OPERATORS,
    EXPORTDECLARATION_TYPES: EXPORTDECLARATION_TYPES,
    EXPRESSIONWRAPPER_TYPES: EXPRESSIONWRAPPER_TYPES,
    EXPRESSION_TYPES: EXPRESSION_TYPES,
    EmptyStatement: EmptyStatement$1,
    EmptyTypeAnnotation: EmptyTypeAnnotation$1,
    EnumBooleanBody: EnumBooleanBody$1,
    EnumBooleanMember: EnumBooleanMember$1,
    EnumDeclaration: EnumDeclaration$1,
    EnumDefaultedMember: EnumDefaultedMember$1,
    EnumNumberBody: EnumNumberBody$1,
    EnumNumberMember: EnumNumberMember$1,
    EnumStringBody: EnumStringBody$1,
    EnumStringMember: EnumStringMember$1,
    EnumSymbolBody: EnumSymbolBody$1,
    ExistsTypeAnnotation: ExistsTypeAnnotation$1,
    ExportAllDeclaration: ExportAllDeclaration$1,
    ExportDefaultDeclaration: ExportDefaultDeclaration$1,
    ExportDefaultSpecifier: ExportDefaultSpecifier$1,
    ExportNamedDeclaration: ExportNamedDeclaration$1,
    ExportNamespaceSpecifier: ExportNamespaceSpecifier$1,
    ExportSpecifier: ExportSpecifier$1,
    ExpressionStatement: ExpressionStatement$1,
    FLATTENABLE_KEYS: FLATTENABLE_KEYS,
    FLIPPED_ALIAS_KEYS: FLIPPED_ALIAS_KEYS$3,
    FLOWBASEANNOTATION_TYPES: FLOWBASEANNOTATION_TYPES,
    FLOWDECLARATION_TYPES: FLOWDECLARATION_TYPES,
    FLOWPREDICATE_TYPES: FLOWPREDICATE_TYPES,
    FLOWTYPE_TYPES: FLOWTYPE_TYPES,
    FLOW_TYPES: FLOW_TYPES,
    FORXSTATEMENT_TYPES: FORXSTATEMENT_TYPES,
    FOR_INIT_KEYS: FOR_INIT_KEYS,
    FOR_TYPES: FOR_TYPES,
    FUNCTIONPARAMETER_TYPES: FUNCTIONPARAMETER_TYPES,
    FUNCTIONPARENT_TYPES: FUNCTIONPARENT_TYPES,
    FUNCTION_TYPES: FUNCTION_TYPES$1,
    File: File$2,
    ForInStatement: ForInStatement$1,
    ForOfStatement: ForOfStatement$1,
    ForStatement: ForStatement$1,
    FunctionDeclaration: FunctionDeclaration,
    FunctionExpression: FunctionExpression$2,
    FunctionTypeAnnotation: FunctionTypeAnnotation$2,
    FunctionTypeParam: FunctionTypeParam$1,
    GenericTypeAnnotation: GenericTypeAnnotation,
    IMMUTABLE_TYPES: IMMUTABLE_TYPES,
    IMPORTOREXPORTDECLARATION_TYPES: IMPORTOREXPORTDECLARATION_TYPES,
    INHERIT_KEYS: INHERIT_KEYS,
    Identifier: Identifier$2,
    IfStatement: IfStatement$1,
    Import: Import$1,
    ImportAttribute: ImportAttribute$1,
    ImportDeclaration: ImportDeclaration$1,
    ImportDefaultSpecifier: ImportDefaultSpecifier$1,
    ImportExpression: ImportExpression$1,
    ImportNamespaceSpecifier: ImportNamespaceSpecifier$1,
    ImportSpecifier: ImportSpecifier$1,
    IndexedAccessType: IndexedAccessType$1,
    InferredPredicate: InferredPredicate$1,
    InterfaceDeclaration: InterfaceDeclaration$1,
    InterfaceExtends: InterfaceExtends$1,
    InterfaceTypeAnnotation: InterfaceTypeAnnotation$1,
    InterpreterDirective: InterpreterDirective$1,
    IntersectionTypeAnnotation: IntersectionTypeAnnotation$1,
    JSXAttribute: JSXAttribute$1,
    JSXClosingElement: JSXClosingElement$1,
    JSXClosingFragment: JSXClosingFragment$1,
    JSXElement: JSXElement$1,
    JSXEmptyExpression: JSXEmptyExpression$1,
    JSXExpressionContainer: JSXExpressionContainer$1,
    JSXFragment: JSXFragment$1,
    JSXIdentifier: JSXIdentifier$1,
    JSXMemberExpression: JSXMemberExpression$1,
    JSXNamespacedName: JSXNamespacedName$1,
    JSXOpeningElement: JSXOpeningElement$1,
    JSXOpeningFragment: JSXOpeningFragment$1,
    JSXSpreadAttribute: JSXSpreadAttribute$1,
    JSXSpreadChild: JSXSpreadChild$1,
    JSXText: JSXText$1,
    JSX_TYPES: JSX_TYPES,
    LITERAL_TYPES: LITERAL_TYPES,
    LOGICAL_OPERATORS: LOGICAL_OPERATORS$2,
    LOOP_TYPES: LOOP_TYPES,
    LVAL_TYPES: LVAL_TYPES,
    LabeledStatement: LabeledStatement$1,
    LogicalExpression: LogicalExpression$2,
    METHOD_TYPES: METHOD_TYPES,
    MISCELLANEOUS_TYPES: MISCELLANEOUS_TYPES,
    MODULEDECLARATION_TYPES: MODULEDECLARATION_TYPES,
    MODULESPECIFIER_TYPES: MODULESPECIFIER_TYPES,
    MemberExpression: MemberExpression$1,
    MetaProperty: MetaProperty$1,
    MixedTypeAnnotation: MixedTypeAnnotation$1,
    ModuleExpression: ModuleExpression$1,
    NODE_FIELDS: NODE_FIELDS$1,
    NODE_PARENT_VALIDATIONS: NODE_PARENT_VALIDATIONS,
    NUMBER_BINARY_OPERATORS: NUMBER_BINARY_OPERATORS$1,
    NUMBER_UNARY_OPERATORS: NUMBER_UNARY_OPERATORS$1,
    NewExpression: NewExpression$2,
    Noop: Noop,
    NullLiteral: NullLiteral$2,
    NullLiteralTypeAnnotation: NullLiteralTypeAnnotation$1,
    NullableTypeAnnotation: NullableTypeAnnotation$2,
    NumberLiteral: NumberLiteral,
    NumberLiteralTypeAnnotation: NumberLiteralTypeAnnotation,
    NumberTypeAnnotation: NumberTypeAnnotation$1,
    NumericLiteral: NumericLiteral$2,
    OBJECTMEMBER_TYPES: OBJECTMEMBER_TYPES,
    ObjectExpression: ObjectExpression$3,
    ObjectMethod: ObjectMethod$1,
    ObjectPattern: ObjectPattern,
    ObjectProperty: ObjectProperty$1,
    ObjectTypeAnnotation: ObjectTypeAnnotation$1,
    ObjectTypeCallProperty: ObjectTypeCallProperty$1,
    ObjectTypeIndexer: ObjectTypeIndexer$1,
    ObjectTypeInternalSlot: ObjectTypeInternalSlot$1,
    ObjectTypeProperty: ObjectTypeProperty$1,
    ObjectTypeSpreadProperty: ObjectTypeSpreadProperty$1,
    OpaqueType: OpaqueType$1,
    OptionalCallExpression: OptionalCallExpression$1,
    OptionalIndexedAccessType: OptionalIndexedAccessType$2,
    OptionalMemberExpression: OptionalMemberExpression$2,
    PATTERNLIKE_TYPES: PATTERNLIKE_TYPES,
    PATTERN_TYPES: PATTERN_TYPES,
    PLACEHOLDERS: PLACEHOLDERS,
    PLACEHOLDERS_ALIAS: PLACEHOLDERS_ALIAS,
    PLACEHOLDERS_FLIPPED_ALIAS: PLACEHOLDERS_FLIPPED_ALIAS,
    PRIVATE_TYPES: PRIVATE_TYPES,
    PROPERTY_TYPES: PROPERTY_TYPES,
    PUREISH_TYPES: PUREISH_TYPES,
    ParenthesizedExpression: ParenthesizedExpression$2,
    PipelineBareFunction: PipelineBareFunction$1,
    PipelinePrimaryTopicReference: PipelinePrimaryTopicReference$1,
    PipelineTopicExpression: PipelineTopicExpression$1,
    Placeholder: Placeholder$1,
    PrivateName: PrivateName$1,
    Program: Program$1,
    QualifiedTypeIdentifier: QualifiedTypeIdentifier$1,
    RecordExpression: RecordExpression$1,
    RegExpLiteral: RegExpLiteral$2,
    RegexLiteral: RegexLiteral,
    RestElement: RestElement$2,
    RestProperty: RestProperty$1,
    ReturnStatement: ReturnStatement$1,
    SCOPABLE_TYPES: SCOPABLE_TYPES,
    STANDARDIZED_TYPES: STANDARDIZED_TYPES,
    STATEMENT_OR_BLOCK_KEYS: STATEMENT_OR_BLOCK_KEYS$1,
    STATEMENT_TYPES: STATEMENT_TYPES,
    STRING_UNARY_OPERATORS: STRING_UNARY_OPERATORS$1,
    SequenceExpression: SequenceExpression$3,
    SpreadElement: SpreadElement,
    SpreadProperty: SpreadProperty$1,
    StaticBlock: StaticBlock$1,
    StringLiteral: StringLiteral$2,
    StringLiteralTypeAnnotation: StringLiteralTypeAnnotation,
    StringTypeAnnotation: StringTypeAnnotation$1,
    Super: Super$1,
    SwitchCase: SwitchCase$1,
    SwitchStatement: SwitchStatement$1,
    SymbolTypeAnnotation: SymbolTypeAnnotation$1,
    TERMINATORLESS_TYPES: TERMINATORLESS_TYPES,
    TSAnyKeyword: TSAnyKeyword$1,
    TSArrayType: TSArrayType$1,
    TSAsExpression: TSAsExpression$2,
    TSBASETYPE_TYPES: TSBASETYPE_TYPES,
    TSBigIntKeyword: TSBigIntKeyword$1,
    TSBooleanKeyword: TSBooleanKeyword$1,
    TSCallSignatureDeclaration: TSCallSignatureDeclaration$1,
    TSConditionalType: TSConditionalType$2,
    TSConstructSignatureDeclaration: TSConstructSignatureDeclaration$1,
    TSConstructorType: TSConstructorType$1,
    TSDeclareFunction: TSDeclareFunction$1,
    TSDeclareMethod: TSDeclareMethod$1,
    TSENTITYNAME_TYPES: TSENTITYNAME_TYPES,
    TSEnumBody: TSEnumBody$1,
    TSEnumDeclaration: TSEnumDeclaration$1,
    TSEnumMember: TSEnumMember$1,
    TSExportAssignment: TSExportAssignment$1,
    TSExpressionWithTypeArguments: TSExpressionWithTypeArguments,
    TSExternalModuleReference: TSExternalModuleReference$1,
    TSFunctionType: TSFunctionType$2,
    TSImportEqualsDeclaration: TSImportEqualsDeclaration$1,
    TSImportType: TSImportType$1,
    TSIndexSignature: TSIndexSignature$1,
    TSIndexedAccessType: TSIndexedAccessType$1,
    TSInferType: TSInferType$2,
    TSInstantiationExpression: TSInstantiationExpression$2,
    TSInterfaceBody: TSInterfaceBody$1,
    TSInterfaceDeclaration: TSInterfaceDeclaration$1,
    TSIntersectionType: TSIntersectionType$2,
    TSIntrinsicKeyword: TSIntrinsicKeyword$1,
    TSLiteralType: TSLiteralType$1,
    TSMappedType: TSMappedType$1,
    TSMethodSignature: TSMethodSignature$1,
    TSModuleBlock: TSModuleBlock$1,
    TSModuleDeclaration: TSModuleDeclaration$1,
    TSNamedTupleMember: TSNamedTupleMember$1,
    TSNamespaceExportDeclaration: TSNamespaceExportDeclaration$1,
    TSNeverKeyword: TSNeverKeyword$1,
    TSNonNullExpression: TSNonNullExpression$2,
    TSNullKeyword: TSNullKeyword$1,
    TSNumberKeyword: TSNumberKeyword$1,
    TSObjectKeyword: TSObjectKeyword$1,
    TSOptionalType: TSOptionalType$1,
    TSParameterProperty: TSParameterProperty$1,
    TSParenthesizedType: TSParenthesizedType$1,
    TSPropertySignature: TSPropertySignature$1,
    TSQualifiedName: TSQualifiedName$1,
    TSRestType: TSRestType$1,
    TSSatisfiesExpression: TSSatisfiesExpression,
    TSStringKeyword: TSStringKeyword$1,
    TSSymbolKeyword: TSSymbolKeyword$1,
    TSTYPEELEMENT_TYPES: TSTYPEELEMENT_TYPES,
    TSTYPE_TYPES: TSTYPE_TYPES,
    TSTemplateLiteralType: TSTemplateLiteralType$1,
    TSThisType: TSThisType$1,
    TSTupleType: TSTupleType$1,
    TSTypeAliasDeclaration: TSTypeAliasDeclaration$1,
    TSTypeAnnotation: TSTypeAnnotation$1,
    TSTypeAssertion: TSTypeAssertion$1,
    TSTypeLiteral: TSTypeLiteral$1,
    TSTypeOperator: TSTypeOperator$2,
    TSTypeParameter: TSTypeParameter$1,
    TSTypeParameterDeclaration: TSTypeParameterDeclaration,
    TSTypeParameterInstantiation: TSTypeParameterInstantiation$1,
    TSTypePredicate: TSTypePredicate$1,
    TSTypeQuery: TSTypeQuery$1,
    TSTypeReference: TSTypeReference$1,
    TSUndefinedKeyword: TSUndefinedKeyword$1,
    TSUnionType: TSUnionType$2,
    TSUnknownKeyword: TSUnknownKeyword$1,
    TSVoidKeyword: TSVoidKeyword$1,
    TYPES: TYPES$1,
    TYPESCRIPT_TYPES: TYPESCRIPT_TYPES,
    TaggedTemplateExpression: TaggedTemplateExpression$2,
    TemplateElement: TemplateElement$1,
    TemplateLiteral: TemplateLiteral$2,
    ThisExpression: ThisExpression$1,
    ThisTypeAnnotation: ThisTypeAnnotation$1,
    ThrowStatement: ThrowStatement$1,
    TopicReference: TopicReference$1,
    TryStatement: TryStatement$1,
    TupleExpression: TupleExpression$1,
    TupleTypeAnnotation: TupleTypeAnnotation$1,
    TypeAlias: TypeAlias$1,
    TypeAnnotation: TypeAnnotation$1,
    TypeCastExpression: TypeCastExpression$2,
    TypeParameter: TypeParameter$1,
    TypeParameterDeclaration: TypeParameterDeclaration,
    TypeParameterInstantiation: TypeParameterInstantiation$1,
    TypeofTypeAnnotation: TypeofTypeAnnotation$1,
    UNARYLIKE_TYPES: UNARYLIKE_TYPES,
    UNARY_OPERATORS: UNARY_OPERATORS,
    UPDATE_OPERATORS: UPDATE_OPERATORS,
    USERWHITESPACABLE_TYPES: USERWHITESPACABLE_TYPES,
    UnaryExpression: UnaryExpression$2,
    UnionTypeAnnotation: UnionTypeAnnotation$2,
    UpdateExpression: UpdateExpression$3,
    V8IntrinsicIdentifier: V8IntrinsicIdentifier$1,
    VISITOR_KEYS: VISITOR_KEYS$7,
    VariableDeclaration: VariableDeclaration$1,
    VariableDeclarator: VariableDeclarator$2,
    Variance: Variance$1,
    VoidPattern: VoidPattern$1,
    VoidTypeAnnotation: VoidTypeAnnotation$1,
    WHILE_TYPES: WHILE_TYPES,
    WhileStatement: WhileStatement$1,
    WithStatement: WithStatement$1,
    YieldExpression: YieldExpression$2,
    __internal__deprecationWarning: deprecationWarning$1,
    addComment: addComment$2,
    addComments: addComments$1,
    anyTypeAnnotation: anyTypeAnnotation$2,
    appendToMemberExpression: appendToMemberExpression,
    argumentPlaceholder: argumentPlaceholder,
    arrayExpression: arrayExpression$1,
    arrayPattern: arrayPattern,
    arrayTypeAnnotation: arrayTypeAnnotation$1,
    arrowFunctionExpression: arrowFunctionExpression$4,
    assertAccessor: assertAccessor,
    assertAnyTypeAnnotation: assertAnyTypeAnnotation,
    assertArgumentPlaceholder: assertArgumentPlaceholder,
    assertArrayExpression: assertArrayExpression,
    assertArrayPattern: assertArrayPattern,
    assertArrayTypeAnnotation: assertArrayTypeAnnotation,
    assertArrowFunctionExpression: assertArrowFunctionExpression,
    assertAssignmentExpression: assertAssignmentExpression,
    assertAssignmentPattern: assertAssignmentPattern,
    assertAwaitExpression: assertAwaitExpression,
    assertBigIntLiteral: assertBigIntLiteral,
    assertBinary: assertBinary,
    assertBinaryExpression: assertBinaryExpression,
    assertBindExpression: assertBindExpression,
    assertBlock: assertBlock,
    assertBlockParent: assertBlockParent,
    assertBlockStatement: assertBlockStatement,
    assertBooleanLiteral: assertBooleanLiteral,
    assertBooleanLiteralTypeAnnotation: assertBooleanLiteralTypeAnnotation,
    assertBooleanTypeAnnotation: assertBooleanTypeAnnotation,
    assertBreakStatement: assertBreakStatement,
    assertCallExpression: assertCallExpression,
    assertCatchClause: assertCatchClause,
    assertClass: assertClass,
    assertClassAccessorProperty: assertClassAccessorProperty,
    assertClassBody: assertClassBody,
    assertClassDeclaration: assertClassDeclaration,
    assertClassExpression: assertClassExpression,
    assertClassImplements: assertClassImplements,
    assertClassMethod: assertClassMethod,
    assertClassPrivateMethod: assertClassPrivateMethod,
    assertClassPrivateProperty: assertClassPrivateProperty,
    assertClassProperty: assertClassProperty,
    assertCompletionStatement: assertCompletionStatement,
    assertConditional: assertConditional,
    assertConditionalExpression: assertConditionalExpression,
    assertContinueStatement: assertContinueStatement,
    assertDebuggerStatement: assertDebuggerStatement,
    assertDecimalLiteral: assertDecimalLiteral,
    assertDeclaration: assertDeclaration,
    assertDeclareClass: assertDeclareClass,
    assertDeclareExportAllDeclaration: assertDeclareExportAllDeclaration,
    assertDeclareExportDeclaration: assertDeclareExportDeclaration,
    assertDeclareFunction: assertDeclareFunction,
    assertDeclareInterface: assertDeclareInterface,
    assertDeclareModule: assertDeclareModule,
    assertDeclareModuleExports: assertDeclareModuleExports,
    assertDeclareOpaqueType: assertDeclareOpaqueType,
    assertDeclareTypeAlias: assertDeclareTypeAlias,
    assertDeclareVariable: assertDeclareVariable,
    assertDeclaredPredicate: assertDeclaredPredicate,
    assertDecorator: assertDecorator,
    assertDirective: assertDirective,
    assertDirectiveLiteral: assertDirectiveLiteral,
    assertDoExpression: assertDoExpression,
    assertDoWhileStatement: assertDoWhileStatement,
    assertEmptyStatement: assertEmptyStatement,
    assertEmptyTypeAnnotation: assertEmptyTypeAnnotation,
    assertEnumBody: assertEnumBody,
    assertEnumBooleanBody: assertEnumBooleanBody,
    assertEnumBooleanMember: assertEnumBooleanMember,
    assertEnumDeclaration: assertEnumDeclaration,
    assertEnumDefaultedMember: assertEnumDefaultedMember,
    assertEnumMember: assertEnumMember,
    assertEnumNumberBody: assertEnumNumberBody,
    assertEnumNumberMember: assertEnumNumberMember,
    assertEnumStringBody: assertEnumStringBody,
    assertEnumStringMember: assertEnumStringMember,
    assertEnumSymbolBody: assertEnumSymbolBody,
    assertExistsTypeAnnotation: assertExistsTypeAnnotation,
    assertExportAllDeclaration: assertExportAllDeclaration,
    assertExportDeclaration: assertExportDeclaration,
    assertExportDefaultDeclaration: assertExportDefaultDeclaration,
    assertExportDefaultSpecifier: assertExportDefaultSpecifier,
    assertExportNamedDeclaration: assertExportNamedDeclaration,
    assertExportNamespaceSpecifier: assertExportNamespaceSpecifier,
    assertExportSpecifier: assertExportSpecifier$1,
    assertExpression: assertExpression$1,
    assertExpressionStatement: assertExpressionStatement$1,
    assertExpressionWrapper: assertExpressionWrapper,
    assertFile: assertFile,
    assertFlow: assertFlow,
    assertFlowBaseAnnotation: assertFlowBaseAnnotation,
    assertFlowDeclaration: assertFlowDeclaration,
    assertFlowPredicate: assertFlowPredicate,
    assertFlowType: assertFlowType,
    assertFor: assertFor,
    assertForInStatement: assertForInStatement,
    assertForOfStatement: assertForOfStatement,
    assertForStatement: assertForStatement,
    assertForXStatement: assertForXStatement,
    assertFunction: assertFunction$1,
    assertFunctionDeclaration: assertFunctionDeclaration,
    assertFunctionExpression: assertFunctionExpression,
    assertFunctionParameter: assertFunctionParameter,
    assertFunctionParent: assertFunctionParent,
    assertFunctionTypeAnnotation: assertFunctionTypeAnnotation,
    assertFunctionTypeParam: assertFunctionTypeParam,
    assertGenericTypeAnnotation: assertGenericTypeAnnotation,
    assertIdentifier: assertIdentifier,
    assertIfStatement: assertIfStatement,
    assertImmutable: assertImmutable,
    assertImport: assertImport,
    assertImportAttribute: assertImportAttribute,
    assertImportDeclaration: assertImportDeclaration,
    assertImportDefaultSpecifier: assertImportDefaultSpecifier,
    assertImportExpression: assertImportExpression,
    assertImportNamespaceSpecifier: assertImportNamespaceSpecifier,
    assertImportOrExportDeclaration: assertImportOrExportDeclaration,
    assertImportSpecifier: assertImportSpecifier,
    assertIndexedAccessType: assertIndexedAccessType,
    assertInferredPredicate: assertInferredPredicate,
    assertInterfaceDeclaration: assertInterfaceDeclaration,
    assertInterfaceExtends: assertInterfaceExtends,
    assertInterfaceTypeAnnotation: assertInterfaceTypeAnnotation,
    assertInterpreterDirective: assertInterpreterDirective,
    assertIntersectionTypeAnnotation: assertIntersectionTypeAnnotation,
    assertJSX: assertJSX,
    assertJSXAttribute: assertJSXAttribute,
    assertJSXClosingElement: assertJSXClosingElement,
    assertJSXClosingFragment: assertJSXClosingFragment,
    assertJSXElement: assertJSXElement,
    assertJSXEmptyExpression: assertJSXEmptyExpression,
    assertJSXExpressionContainer: assertJSXExpressionContainer,
    assertJSXFragment: assertJSXFragment,
    assertJSXIdentifier: assertJSXIdentifier,
    assertJSXMemberExpression: assertJSXMemberExpression,
    assertJSXNamespacedName: assertJSXNamespacedName,
    assertJSXOpeningElement: assertJSXOpeningElement,
    assertJSXOpeningFragment: assertJSXOpeningFragment,
    assertJSXSpreadAttribute: assertJSXSpreadAttribute,
    assertJSXSpreadChild: assertJSXSpreadChild,
    assertJSXText: assertJSXText,
    assertLVal: assertLVal,
    assertLabeledStatement: assertLabeledStatement,
    assertLiteral: assertLiteral,
    assertLogicalExpression: assertLogicalExpression,
    assertLoop: assertLoop,
    assertMemberExpression: assertMemberExpression,
    assertMetaProperty: assertMetaProperty,
    assertMethod: assertMethod,
    assertMiscellaneous: assertMiscellaneous,
    assertMixedTypeAnnotation: assertMixedTypeAnnotation,
    assertModuleDeclaration: assertModuleDeclaration,
    assertModuleExpression: assertModuleExpression,
    assertModuleSpecifier: assertModuleSpecifier,
    assertNewExpression: assertNewExpression,
    assertNode: assertNode,
    assertNoop: assertNoop,
    assertNullLiteral: assertNullLiteral,
    assertNullLiteralTypeAnnotation: assertNullLiteralTypeAnnotation,
    assertNullableTypeAnnotation: assertNullableTypeAnnotation,
    assertNumberLiteral: assertNumberLiteral,
    assertNumberLiteralTypeAnnotation: assertNumberLiteralTypeAnnotation,
    assertNumberTypeAnnotation: assertNumberTypeAnnotation,
    assertNumericLiteral: assertNumericLiteral,
    assertObjectExpression: assertObjectExpression,
    assertObjectMember: assertObjectMember,
    assertObjectMethod: assertObjectMethod,
    assertObjectPattern: assertObjectPattern,
    assertObjectProperty: assertObjectProperty,
    assertObjectTypeAnnotation: assertObjectTypeAnnotation,
    assertObjectTypeCallProperty: assertObjectTypeCallProperty,
    assertObjectTypeIndexer: assertObjectTypeIndexer,
    assertObjectTypeInternalSlot: assertObjectTypeInternalSlot,
    assertObjectTypeProperty: assertObjectTypeProperty,
    assertObjectTypeSpreadProperty: assertObjectTypeSpreadProperty,
    assertOpaqueType: assertOpaqueType,
    assertOptionalCallExpression: assertOptionalCallExpression,
    assertOptionalIndexedAccessType: assertOptionalIndexedAccessType,
    assertOptionalMemberExpression: assertOptionalMemberExpression,
    assertParenthesizedExpression: assertParenthesizedExpression,
    assertPattern: assertPattern,
    assertPatternLike: assertPatternLike,
    assertPipelineBareFunction: assertPipelineBareFunction,
    assertPipelinePrimaryTopicReference: assertPipelinePrimaryTopicReference,
    assertPipelineTopicExpression: assertPipelineTopicExpression,
    assertPlaceholder: assertPlaceholder,
    assertPrivate: assertPrivate,
    assertPrivateName: assertPrivateName,
    assertProgram: assertProgram,
    assertProperty: assertProperty,
    assertPureish: assertPureish,
    assertQualifiedTypeIdentifier: assertQualifiedTypeIdentifier,
    assertRecordExpression: assertRecordExpression,
    assertRegExpLiteral: assertRegExpLiteral,
    assertRegexLiteral: assertRegexLiteral,
    assertRestElement: assertRestElement,
    assertRestProperty: assertRestProperty,
    assertReturnStatement: assertReturnStatement,
    assertScopable: assertScopable,
    assertSequenceExpression: assertSequenceExpression,
    assertSpreadElement: assertSpreadElement,
    assertSpreadProperty: assertSpreadProperty,
    assertStandardized: assertStandardized,
    assertStatement: assertStatement,
    assertStaticBlock: assertStaticBlock,
    assertStringLiteral: assertStringLiteral,
    assertStringLiteralTypeAnnotation: assertStringLiteralTypeAnnotation,
    assertStringTypeAnnotation: assertStringTypeAnnotation,
    assertSuper: assertSuper,
    assertSwitchCase: assertSwitchCase,
    assertSwitchStatement: assertSwitchStatement,
    assertSymbolTypeAnnotation: assertSymbolTypeAnnotation,
    assertTSAnyKeyword: assertTSAnyKeyword,
    assertTSArrayType: assertTSArrayType,
    assertTSAsExpression: assertTSAsExpression,
    assertTSBaseType: assertTSBaseType,
    assertTSBigIntKeyword: assertTSBigIntKeyword,
    assertTSBooleanKeyword: assertTSBooleanKeyword,
    assertTSCallSignatureDeclaration: assertTSCallSignatureDeclaration,
    assertTSConditionalType: assertTSConditionalType,
    assertTSConstructSignatureDeclaration: assertTSConstructSignatureDeclaration,
    assertTSConstructorType: assertTSConstructorType,
    assertTSDeclareFunction: assertTSDeclareFunction,
    assertTSDeclareMethod: assertTSDeclareMethod,
    assertTSEntityName: assertTSEntityName,
    assertTSEnumBody: assertTSEnumBody,
    assertTSEnumDeclaration: assertTSEnumDeclaration,
    assertTSEnumMember: assertTSEnumMember,
    assertTSExportAssignment: assertTSExportAssignment,
    assertTSExpressionWithTypeArguments: assertTSExpressionWithTypeArguments,
    assertTSExternalModuleReference: assertTSExternalModuleReference,
    assertTSFunctionType: assertTSFunctionType,
    assertTSImportEqualsDeclaration: assertTSImportEqualsDeclaration,
    assertTSImportType: assertTSImportType,
    assertTSIndexSignature: assertTSIndexSignature,
    assertTSIndexedAccessType: assertTSIndexedAccessType,
    assertTSInferType: assertTSInferType,
    assertTSInstantiationExpression: assertTSInstantiationExpression,
    assertTSInterfaceBody: assertTSInterfaceBody,
    assertTSInterfaceDeclaration: assertTSInterfaceDeclaration,
    assertTSIntersectionType: assertTSIntersectionType,
    assertTSIntrinsicKeyword: assertTSIntrinsicKeyword,
    assertTSLiteralType: assertTSLiteralType,
    assertTSMappedType: assertTSMappedType,
    assertTSMethodSignature: assertTSMethodSignature,
    assertTSModuleBlock: assertTSModuleBlock,
    assertTSModuleDeclaration: assertTSModuleDeclaration,
    assertTSNamedTupleMember: assertTSNamedTupleMember,
    assertTSNamespaceExportDeclaration: assertTSNamespaceExportDeclaration,
    assertTSNeverKeyword: assertTSNeverKeyword,
    assertTSNonNullExpression: assertTSNonNullExpression,
    assertTSNullKeyword: assertTSNullKeyword,
    assertTSNumberKeyword: assertTSNumberKeyword,
    assertTSObjectKeyword: assertTSObjectKeyword,
    assertTSOptionalType: assertTSOptionalType,
    assertTSParameterProperty: assertTSParameterProperty,
    assertTSParenthesizedType: assertTSParenthesizedType,
    assertTSPropertySignature: assertTSPropertySignature,
    assertTSQualifiedName: assertTSQualifiedName,
    assertTSRestType: assertTSRestType,
    assertTSSatisfiesExpression: assertTSSatisfiesExpression,
    assertTSStringKeyword: assertTSStringKeyword,
    assertTSSymbolKeyword: assertTSSymbolKeyword,
    assertTSTemplateLiteralType: assertTSTemplateLiteralType,
    assertTSThisType: assertTSThisType,
    assertTSTupleType: assertTSTupleType,
    assertTSType: assertTSType,
    assertTSTypeAliasDeclaration: assertTSTypeAliasDeclaration,
    assertTSTypeAnnotation: assertTSTypeAnnotation,
    assertTSTypeAssertion: assertTSTypeAssertion,
    assertTSTypeElement: assertTSTypeElement,
    assertTSTypeLiteral: assertTSTypeLiteral,
    assertTSTypeOperator: assertTSTypeOperator,
    assertTSTypeParameter: assertTSTypeParameter,
    assertTSTypeParameterDeclaration: assertTSTypeParameterDeclaration,
    assertTSTypeParameterInstantiation: assertTSTypeParameterInstantiation,
    assertTSTypePredicate: assertTSTypePredicate,
    assertTSTypeQuery: assertTSTypeQuery,
    assertTSTypeReference: assertTSTypeReference,
    assertTSUndefinedKeyword: assertTSUndefinedKeyword,
    assertTSUnionType: assertTSUnionType,
    assertTSUnknownKeyword: assertTSUnknownKeyword,
    assertTSVoidKeyword: assertTSVoidKeyword,
    assertTaggedTemplateExpression: assertTaggedTemplateExpression,
    assertTemplateElement: assertTemplateElement,
    assertTemplateLiteral: assertTemplateLiteral,
    assertTerminatorless: assertTerminatorless,
    assertThisExpression: assertThisExpression,
    assertThisTypeAnnotation: assertThisTypeAnnotation,
    assertThrowStatement: assertThrowStatement,
    assertTopicReference: assertTopicReference,
    assertTryStatement: assertTryStatement,
    assertTupleExpression: assertTupleExpression,
    assertTupleTypeAnnotation: assertTupleTypeAnnotation,
    assertTypeAlias: assertTypeAlias,
    assertTypeAnnotation: assertTypeAnnotation,
    assertTypeCastExpression: assertTypeCastExpression,
    assertTypeParameter: assertTypeParameter,
    assertTypeParameterDeclaration: assertTypeParameterDeclaration,
    assertTypeParameterInstantiation: assertTypeParameterInstantiation,
    assertTypeScript: assertTypeScript,
    assertTypeofTypeAnnotation: assertTypeofTypeAnnotation,
    assertUnaryExpression: assertUnaryExpression,
    assertUnaryLike: assertUnaryLike,
    assertUnionTypeAnnotation: assertUnionTypeAnnotation,
    assertUpdateExpression: assertUpdateExpression,
    assertUserWhitespacable: assertUserWhitespacable,
    assertV8IntrinsicIdentifier: assertV8IntrinsicIdentifier,
    assertVariableDeclaration: assertVariableDeclaration,
    assertVariableDeclarator: assertVariableDeclarator,
    assertVariance: assertVariance,
    assertVoidPattern: assertVoidPattern,
    assertVoidTypeAnnotation: assertVoidTypeAnnotation,
    assertWhile: assertWhile,
    assertWhileStatement: assertWhileStatement,
    assertWithStatement: assertWithStatement,
    assertYieldExpression: assertYieldExpression,
    assignmentExpression: assignmentExpression$8,
    assignmentPattern: assignmentPattern,
    awaitExpression: awaitExpression$1,
    bigIntLiteral: bigIntLiteral,
    binaryExpression: binaryExpression$4,
    bindExpression: bindExpression,
    blockStatement: blockStatement$6,
    booleanLiteral: booleanLiteral$2,
    booleanLiteralTypeAnnotation: booleanLiteralTypeAnnotation,
    booleanTypeAnnotation: booleanTypeAnnotation$1,
    breakStatement: breakStatement,
    buildMatchMemberExpression: buildMatchMemberExpression$1,
    buildUndefinedNode: buildUndefinedNode$2,
    callExpression: callExpression$c,
    catchClause: catchClause,
    classAccessorProperty: classAccessorProperty,
    classBody: classBody,
    classDeclaration: classDeclaration,
    classExpression: classExpression,
    classImplements: classImplements,
    classMethod: classMethod,
    classPrivateMethod: classPrivateMethod,
    classPrivateProperty: classPrivateProperty,
    classProperty: classProperty,
    clone: clone,
    cloneDeep: cloneDeep$1,
    cloneDeepWithoutLoc: cloneDeepWithoutLoc,
    cloneNode: cloneNode$e,
    cloneWithoutLoc: cloneWithoutLoc,
    conditionalExpression: conditionalExpression$5,
    continueStatement: continueStatement,
    createFlowUnionType: createFlowUnionType$1,
    createTSUnionType: createTSUnionType$1,
    createTypeAnnotationBasedOnTypeof: createTypeAnnotationBasedOnTypeof$1,
    createUnionTypeAnnotation: createFlowUnionType$1,
    debuggerStatement: debuggerStatement,
    decimalLiteral: decimalLiteral,
    declareClass: declareClass,
    declareExportAllDeclaration: declareExportAllDeclaration,
    declareExportDeclaration: declareExportDeclaration,
    declareFunction: declareFunction,
    declareInterface: declareInterface,
    declareModule: declareModule,
    declareModuleExports: declareModuleExports,
    declareOpaqueType: declareOpaqueType,
    declareTypeAlias: declareTypeAlias,
    declareVariable: declareVariable,
    declaredPredicate: declaredPredicate,
    decorator: decorator,
    directive: directive,
    directiveLiteral: directiveLiteral,
    doExpression: doExpression,
    doWhileStatement: doWhileStatement,
    emptyStatement: emptyStatement$1,
    emptyTypeAnnotation: emptyTypeAnnotation,
    ensureBlock: ensureBlock$1,
    enumBooleanBody: enumBooleanBody,
    enumBooleanMember: enumBooleanMember,
    enumDeclaration: enumDeclaration,
    enumDefaultedMember: enumDefaultedMember,
    enumNumberBody: enumNumberBody,
    enumNumberMember: enumNumberMember,
    enumStringBody: enumStringBody,
    enumStringMember: enumStringMember,
    enumSymbolBody: enumSymbolBody,
    existsTypeAnnotation: existsTypeAnnotation,
    exportAllDeclaration: exportAllDeclaration,
    exportDefaultDeclaration: exportDefaultDeclaration,
    exportDefaultSpecifier: exportDefaultSpecifier,
    exportNamedDeclaration: exportNamedDeclaration$2,
    exportNamespaceSpecifier: exportNamespaceSpecifier,
    exportSpecifier: exportSpecifier$2,
    expressionStatement: expressionStatement$7,
    file: file$1,
    forInStatement: forInStatement,
    forOfStatement: forOfStatement,
    forStatement: forStatement,
    functionDeclaration: functionDeclaration,
    functionExpression: functionExpression$2,
    functionTypeAnnotation: functionTypeAnnotation,
    functionTypeParam: functionTypeParam,
    genericTypeAnnotation: genericTypeAnnotation$1,
    getAssignmentIdentifiers: getAssignmentIdentifiers$2,
    getBindingIdentifiers: getBindingIdentifiers$4,
    getFunctionName: getFunctionName$1,
    getOuterBindingIdentifiers: getOuterBindingIdentifiers$1,
    identifier: identifier$e,
    ifStatement: ifStatement,
    import: _import,
    importAttribute: importAttribute,
    importDeclaration: importDeclaration$1,
    importDefaultSpecifier: importDefaultSpecifier$1,
    importExpression: importExpression,
    importNamespaceSpecifier: importNamespaceSpecifier$1,
    importSpecifier: importSpecifier$2,
    indexedAccessType: indexedAccessType,
    inferredPredicate: inferredPredicate,
    inheritInnerComments: inheritInnerComments,
    inheritLeadingComments: inheritLeadingComments$1,
    inheritTrailingComments: inheritTrailingComments$1,
    inherits: inherits$3,
    inheritsComments: inheritsComments$1,
    interfaceDeclaration: interfaceDeclaration,
    interfaceExtends: interfaceExtends,
    interfaceTypeAnnotation: interfaceTypeAnnotation,
    interpreterDirective: interpreterDirective$1,
    intersectionTypeAnnotation: intersectionTypeAnnotation,
    is: is,
    isAccessor: isAccessor,
    isAnyTypeAnnotation: isAnyTypeAnnotation$1,
    isArgumentPlaceholder: isArgumentPlaceholder,
    isArrayExpression: isArrayExpression$2,
    isArrayPattern: isArrayPattern,
    isArrayTypeAnnotation: isArrayTypeAnnotation$2,
    isArrowFunctionExpression: isArrowFunctionExpression,
    isAssignmentExpression: isAssignmentExpression$2,
    isAssignmentPattern: isAssignmentPattern$3,
    isAwaitExpression: isAwaitExpression,
    isBigIntLiteral: isBigIntLiteral,
    isBinary: isBinary$2,
    isBinaryExpression: isBinaryExpression$1,
    isBindExpression: isBindExpression,
    isBinding: isBinding$1,
    isBlock: isBlock,
    isBlockParent: isBlockParent,
    isBlockScoped: isBlockScoped$2,
    isBlockStatement: isBlockStatement$3,
    isBooleanLiteral: isBooleanLiteral,
    isBooleanLiteralTypeAnnotation: isBooleanLiteralTypeAnnotation,
    isBooleanTypeAnnotation: isBooleanTypeAnnotation$1,
    isBreakStatement: isBreakStatement,
    isCallExpression: isCallExpression$8,
    isCatchClause: isCatchClause,
    isClass: isClass$1,
    isClassAccessorProperty: isClassAccessorProperty,
    isClassBody: isClassBody$2,
    isClassDeclaration: isClassDeclaration$2,
    isClassExpression: isClassExpression,
    isClassImplements: isClassImplements,
    isClassMethod: isClassMethod,
    isClassPrivateMethod: isClassPrivateMethod,
    isClassPrivateProperty: isClassPrivateProperty,
    isClassProperty: isClassProperty,
    isCompletionStatement: isCompletionStatement,
    isConditional: isConditional,
    isConditionalExpression: isConditionalExpression,
    isContinueStatement: isContinueStatement,
    isDebuggerStatement: isDebuggerStatement,
    isDecimalLiteral: isDecimalLiteral,
    isDeclaration: isDeclaration,
    isDeclareClass: isDeclareClass,
    isDeclareExportAllDeclaration: isDeclareExportAllDeclaration,
    isDeclareExportDeclaration: isDeclareExportDeclaration$1,
    isDeclareFunction: isDeclareFunction,
    isDeclareInterface: isDeclareInterface,
    isDeclareModule: isDeclareModule,
    isDeclareModuleExports: isDeclareModuleExports,
    isDeclareOpaqueType: isDeclareOpaqueType,
    isDeclareTypeAlias: isDeclareTypeAlias,
    isDeclareVariable: isDeclareVariable,
    isDeclaredPredicate: isDeclaredPredicate,
    isDecorator: isDecorator$1,
    isDirective: isDirective,
    isDirectiveLiteral: isDirectiveLiteral,
    isDoExpression: isDoExpression,
    isDoWhileStatement: isDoWhileStatement,
    isEmptyStatement: isEmptyStatement$1,
    isEmptyTypeAnnotation: isEmptyTypeAnnotation$1,
    isEnumBody: isEnumBody,
    isEnumBooleanBody: isEnumBooleanBody,
    isEnumBooleanMember: isEnumBooleanMember,
    isEnumDeclaration: isEnumDeclaration,
    isEnumDefaultedMember: isEnumDefaultedMember,
    isEnumMember: isEnumMember,
    isEnumNumberBody: isEnumNumberBody,
    isEnumNumberMember: isEnumNumberMember,
    isEnumStringBody: isEnumStringBody,
    isEnumStringMember: isEnumStringMember,
    isEnumSymbolBody: isEnumSymbolBody,
    isExistsTypeAnnotation: isExistsTypeAnnotation,
    isExportAllDeclaration: isExportAllDeclaration$1,
    isExportDeclaration: isExportDeclaration$2,
    isExportDefaultDeclaration: isExportDefaultDeclaration$2,
    isExportDefaultSpecifier: isExportDefaultSpecifier$1,
    isExportNamedDeclaration: isExportNamedDeclaration$3,
    isExportNamespaceSpecifier: isExportNamespaceSpecifier$1,
    isExportSpecifier: isExportSpecifier,
    isExpression: isExpression$5,
    isExpressionStatement: isExpressionStatement$2,
    isExpressionWrapper: isExpressionWrapper,
    isFile: isFile,
    isFlow: isFlow$1,
    isFlowBaseAnnotation: isFlowBaseAnnotation$1,
    isFlowDeclaration: isFlowDeclaration,
    isFlowPredicate: isFlowPredicate,
    isFlowType: isFlowType$1,
    isFor: isFor$1,
    isForInStatement: isForInStatement,
    isForOfStatement: isForOfStatement$2,
    isForStatement: isForStatement$2,
    isForXStatement: isForXStatement$1,
    isFunction: isFunction$6,
    isFunctionDeclaration: isFunctionDeclaration$2,
    isFunctionExpression: isFunctionExpression,
    isFunctionParameter: isFunctionParameter,
    isFunctionParent: isFunctionParent,
    isFunctionTypeAnnotation: isFunctionTypeAnnotation,
    isFunctionTypeParam: isFunctionTypeParam,
    isGenericTypeAnnotation: isGenericTypeAnnotation$1,
    isIdentifier: isIdentifier$e,
    isIfStatement: isIfStatement$2,
    isImmutable: isImmutable,
    isImport: isImport,
    isImportAttribute: isImportAttribute,
    isImportDeclaration: isImportDeclaration$3,
    isImportDefaultSpecifier: isImportDefaultSpecifier$1,
    isImportExpression: isImportExpression,
    isImportNamespaceSpecifier: isImportNamespaceSpecifier$1,
    isImportOrExportDeclaration: isImportOrExportDeclaration,
    isImportSpecifier: isImportSpecifier$1,
    isIndexedAccessType: isIndexedAccessType$1,
    isInferredPredicate: isInferredPredicate,
    isInterfaceDeclaration: isInterfaceDeclaration,
    isInterfaceExtends: isInterfaceExtends,
    isInterfaceTypeAnnotation: isInterfaceTypeAnnotation,
    isInterpreterDirective: isInterpreterDirective,
    isIntersectionTypeAnnotation: isIntersectionTypeAnnotation,
    isJSX: isJSX,
    isJSXAttribute: isJSXAttribute,
    isJSXClosingElement: isJSXClosingElement,
    isJSXClosingFragment: isJSXClosingFragment,
    isJSXElement: isJSXElement,
    isJSXEmptyExpression: isJSXEmptyExpression,
    isJSXExpressionContainer: isJSXExpressionContainer$1,
    isJSXFragment: isJSXFragment,
    isJSXIdentifier: isJSXIdentifier$3,
    isJSXMemberExpression: isJSXMemberExpression$2,
    isJSXNamespacedName: isJSXNamespacedName$1,
    isJSXOpeningElement: isJSXOpeningElement,
    isJSXOpeningFragment: isJSXOpeningFragment,
    isJSXSpreadAttribute: isJSXSpreadAttribute$1,
    isJSXSpreadChild: isJSXSpreadChild,
    isJSXText: isJSXText,
    isLVal: isLVal,
    isLabeledStatement: isLabeledStatement,
    isLet: isLet,
    isLiteral: isLiteral$4,
    isLogicalExpression: isLogicalExpression,
    isLoop: isLoop$1,
    isMemberExpression: isMemberExpression$7,
    isMetaProperty: isMetaProperty$1,
    isMethod: isMethod$1,
    isMiscellaneous: isMiscellaneous,
    isMixedTypeAnnotation: isMixedTypeAnnotation$1,
    isModuleDeclaration: isModuleDeclaration,
    isModuleExpression: isModuleExpression,
    isModuleSpecifier: isModuleSpecifier$1,
    isNewExpression: isNewExpression$3,
    isNode: isNode,
    isNodesEquivalent: isNodesEquivalent,
    isNoop: isNoop,
    isNullLiteral: isNullLiteral$1,
    isNullLiteralTypeAnnotation: isNullLiteralTypeAnnotation,
    isNullableTypeAnnotation: isNullableTypeAnnotation,
    isNumberLiteral: isNumberLiteral,
    isNumberLiteralTypeAnnotation: isNumberLiteralTypeAnnotation,
    isNumberTypeAnnotation: isNumberTypeAnnotation$1,
    isNumericLiteral: isNumericLiteral,
    isObjectExpression: isObjectExpression$3,
    isObjectMember: isObjectMember,
    isObjectMethod: isObjectMethod,
    isObjectPattern: isObjectPattern$1,
    isObjectProperty: isObjectProperty$2,
    isObjectTypeAnnotation: isObjectTypeAnnotation,
    isObjectTypeCallProperty: isObjectTypeCallProperty,
    isObjectTypeIndexer: isObjectTypeIndexer,
    isObjectTypeInternalSlot: isObjectTypeInternalSlot,
    isObjectTypeProperty: isObjectTypeProperty,
    isObjectTypeSpreadProperty: isObjectTypeSpreadProperty,
    isOpaqueType: isOpaqueType,
    isOptionalCallExpression: isOptionalCallExpression$2,
    isOptionalIndexedAccessType: isOptionalIndexedAccessType,
    isOptionalMemberExpression: isOptionalMemberExpression$3,
    isParenthesizedExpression: isParenthesizedExpression$2,
    isPattern: isPattern$2,
    isPatternLike: isPatternLike,
    isPipelineBareFunction: isPipelineBareFunction,
    isPipelinePrimaryTopicReference: isPipelinePrimaryTopicReference,
    isPipelineTopicExpression: isPipelineTopicExpression,
    isPlaceholder: isPlaceholder$1,
    isPlaceholderType: isPlaceholderType,
    isPrivate: isPrivate,
    isPrivateName: isPrivateName$2,
    isProgram: isProgram$1,
    isProperty: isProperty$1,
    isPureish: isPureish$1,
    isQualifiedTypeIdentifier: isQualifiedTypeIdentifier,
    isRecordExpression: isRecordExpression$1,
    isReferenced: isReferenced$2,
    isRegExpLiteral: isRegExpLiteral$1,
    isRegexLiteral: isRegexLiteral,
    isRestElement: isRestElement$2,
    isRestProperty: isRestProperty$1,
    isReturnStatement: isReturnStatement,
    isScopable: isScopable,
    isScope: isScope$1,
    isSequenceExpression: isSequenceExpression$1,
    isSpecifierDefault: isSpecifierDefault,
    isSpreadElement: isSpreadElement$1,
    isSpreadProperty: isSpreadProperty$1,
    isStandardized: isStandardized,
    isStatement: isStatement$9,
    isStaticBlock: isStaticBlock,
    isStringLiteral: isStringLiteral$5,
    isStringLiteralTypeAnnotation: isStringLiteralTypeAnnotation,
    isStringTypeAnnotation: isStringTypeAnnotation$1,
    isSuper: isSuper$2,
    isSwitchCase: isSwitchCase,
    isSwitchStatement: isSwitchStatement,
    isSymbolTypeAnnotation: isSymbolTypeAnnotation,
    isTSAnyKeyword: isTSAnyKeyword,
    isTSArrayType: isTSArrayType$1,
    isTSAsExpression: isTSAsExpression$1,
    isTSBaseType: isTSBaseType,
    isTSBigIntKeyword: isTSBigIntKeyword,
    isTSBooleanKeyword: isTSBooleanKeyword,
    isTSCallSignatureDeclaration: isTSCallSignatureDeclaration,
    isTSConditionalType: isTSConditionalType,
    isTSConstructSignatureDeclaration: isTSConstructSignatureDeclaration,
    isTSConstructorType: isTSConstructorType,
    isTSDeclareFunction: isTSDeclareFunction,
    isTSDeclareMethod: isTSDeclareMethod,
    isTSEntityName: isTSEntityName,
    isTSEnumBody: isTSEnumBody,
    isTSEnumDeclaration: isTSEnumDeclaration,
    isTSEnumMember: isTSEnumMember$1,
    isTSExportAssignment: isTSExportAssignment,
    isTSExpressionWithTypeArguments: isTSExpressionWithTypeArguments,
    isTSExternalModuleReference: isTSExternalModuleReference,
    isTSFunctionType: isTSFunctionType,
    isTSImportEqualsDeclaration: isTSImportEqualsDeclaration,
    isTSImportType: isTSImportType,
    isTSIndexSignature: isTSIndexSignature,
    isTSIndexedAccessType: isTSIndexedAccessType,
    isTSInferType: isTSInferType,
    isTSInstantiationExpression: isTSInstantiationExpression,
    isTSInterfaceBody: isTSInterfaceBody$1,
    isTSInterfaceDeclaration: isTSInterfaceDeclaration,
    isTSIntersectionType: isTSIntersectionType,
    isTSIntrinsicKeyword: isTSIntrinsicKeyword,
    isTSLiteralType: isTSLiteralType,
    isTSMappedType: isTSMappedType,
    isTSMethodSignature: isTSMethodSignature,
    isTSModuleBlock: isTSModuleBlock,
    isTSModuleDeclaration: isTSModuleDeclaration,
    isTSNamedTupleMember: isTSNamedTupleMember,
    isTSNamespaceExportDeclaration: isTSNamespaceExportDeclaration,
    isTSNeverKeyword: isTSNeverKeyword,
    isTSNonNullExpression: isTSNonNullExpression$1,
    isTSNullKeyword: isTSNullKeyword,
    isTSNumberKeyword: isTSNumberKeyword,
    isTSObjectKeyword: isTSObjectKeyword,
    isTSOptionalType: isTSOptionalType,
    isTSParameterProperty: isTSParameterProperty,
    isTSParenthesizedType: isTSParenthesizedType,
    isTSPropertySignature: isTSPropertySignature,
    isTSQualifiedName: isTSQualifiedName,
    isTSRestType: isTSRestType,
    isTSSatisfiesExpression: isTSSatisfiesExpression$1,
    isTSStringKeyword: isTSStringKeyword,
    isTSSymbolKeyword: isTSSymbolKeyword,
    isTSTemplateLiteralType: isTSTemplateLiteralType,
    isTSThisType: isTSThisType,
    isTSTupleType: isTSTupleType,
    isTSType: isTSType$1,
    isTSTypeAliasDeclaration: isTSTypeAliasDeclaration,
    isTSTypeAnnotation: isTSTypeAnnotation$1,
    isTSTypeAssertion: isTSTypeAssertion$1,
    isTSTypeElement: isTSTypeElement,
    isTSTypeLiteral: isTSTypeLiteral,
    isTSTypeOperator: isTSTypeOperator,
    isTSTypeParameter: isTSTypeParameter,
    isTSTypeParameterDeclaration: isTSTypeParameterDeclaration,
    isTSTypeParameterInstantiation: isTSTypeParameterInstantiation,
    isTSTypePredicate: isTSTypePredicate,
    isTSTypeQuery: isTSTypeQuery,
    isTSTypeReference: isTSTypeReference$1,
    isTSUndefinedKeyword: isTSUndefinedKeyword,
    isTSUnionType: isTSUnionType,
    isTSUnknownKeyword: isTSUnknownKeyword,
    isTSVoidKeyword: isTSVoidKeyword,
    isTaggedTemplateExpression: isTaggedTemplateExpression$1,
    isTemplateElement: isTemplateElement,
    isTemplateLiteral: isTemplateLiteral$1,
    isTerminatorless: isTerminatorless,
    isThisExpression: isThisExpression$2,
    isThisTypeAnnotation: isThisTypeAnnotation,
    isThrowStatement: isThrowStatement,
    isTopicReference: isTopicReference$1,
    isTryStatement: isTryStatement,
    isTupleExpression: isTupleExpression$1,
    isTupleTypeAnnotation: isTupleTypeAnnotation$1,
    isType: isType$2,
    isTypeAlias: isTypeAlias,
    isTypeAnnotation: isTypeAnnotation$1,
    isTypeCastExpression: isTypeCastExpression$1,
    isTypeParameter: isTypeParameter,
    isTypeParameterDeclaration: isTypeParameterDeclaration,
    isTypeParameterInstantiation: isTypeParameterInstantiation,
    isTypeScript: isTypeScript,
    isTypeofTypeAnnotation: isTypeofTypeAnnotation,
    isUnaryExpression: isUnaryExpression$1,
    isUnaryLike: isUnaryLike,
    isUnionTypeAnnotation: isUnionTypeAnnotation$1,
    isUpdateExpression: isUpdateExpression$1,
    isUserWhitespacable: isUserWhitespacable,
    isV8IntrinsicIdentifier: isV8IntrinsicIdentifier,
    isValidES3Identifier: isValidES3Identifier,
    isValidIdentifier: isValidIdentifier$1,
    isVar: isVar$1,
    isVariableDeclaration: isVariableDeclaration$3,
    isVariableDeclarator: isVariableDeclarator,
    isVariance: isVariance,
    isVoidPattern: isVoidPattern,
    isVoidTypeAnnotation: isVoidTypeAnnotation$1,
    isWhile: isWhile,
    isWhileStatement: isWhileStatement,
    isWithStatement: isWithStatement,
    isYieldExpression: isYieldExpression$1,
    jSXAttribute: jsxAttribute,
    jSXClosingElement: jsxClosingElement,
    jSXClosingFragment: jsxClosingFragment,
    jSXElement: jsxElement,
    jSXEmptyExpression: jsxEmptyExpression,
    jSXExpressionContainer: jsxExpressionContainer$1,
    jSXFragment: jsxFragment,
    jSXIdentifier: jsxIdentifier$1,
    jSXMemberExpression: jsxMemberExpression,
    jSXNamespacedName: jsxNamespacedName,
    jSXOpeningElement: jsxOpeningElement,
    jSXOpeningFragment: jsxOpeningFragment,
    jSXSpreadAttribute: jsxSpreadAttribute,
    jSXSpreadChild: jsxSpreadChild,
    jSXText: jsxText,
    jsxAttribute: jsxAttribute,
    jsxClosingElement: jsxClosingElement,
    jsxClosingFragment: jsxClosingFragment,
    jsxElement: jsxElement,
    jsxEmptyExpression: jsxEmptyExpression,
    jsxExpressionContainer: jsxExpressionContainer$1,
    jsxFragment: jsxFragment,
    jsxIdentifier: jsxIdentifier$1,
    jsxMemberExpression: jsxMemberExpression,
    jsxNamespacedName: jsxNamespacedName,
    jsxOpeningElement: jsxOpeningElement,
    jsxOpeningFragment: jsxOpeningFragment,
    jsxSpreadAttribute: jsxSpreadAttribute,
    jsxSpreadChild: jsxSpreadChild,
    jsxText: jsxText,
    labeledStatement: labeledStatement,
    logicalExpression: logicalExpression$2,
    matchesPattern: matchesPattern$2,
    memberExpression: memberExpression$a,
    metaProperty: metaProperty$1,
    mixedTypeAnnotation: mixedTypeAnnotation,
    moduleExpression: moduleExpression,
    newExpression: newExpression,
    noop: noop$1,
    nullLiteral: nullLiteral$2,
    nullLiteralTypeAnnotation: nullLiteralTypeAnnotation$1,
    nullableTypeAnnotation: nullableTypeAnnotation,
    numberLiteral: NumberLiteral$1,
    numberLiteralTypeAnnotation: numberLiteralTypeAnnotation,
    numberTypeAnnotation: numberTypeAnnotation$2,
    numericLiteral: numericLiteral$5,
    objectExpression: objectExpression$3,
    objectMethod: objectMethod,
    objectPattern: objectPattern$1,
    objectProperty: objectProperty$1,
    objectTypeAnnotation: objectTypeAnnotation,
    objectTypeCallProperty: objectTypeCallProperty,
    objectTypeIndexer: objectTypeIndexer,
    objectTypeInternalSlot: objectTypeInternalSlot,
    objectTypeProperty: objectTypeProperty,
    objectTypeSpreadProperty: objectTypeSpreadProperty,
    opaqueType: opaqueType,
    optionalCallExpression: optionalCallExpression$2,
    optionalIndexedAccessType: optionalIndexedAccessType,
    optionalMemberExpression: optionalMemberExpression$2,
    parenthesizedExpression: parenthesizedExpression,
    pipelineBareFunction: pipelineBareFunction,
    pipelinePrimaryTopicReference: pipelinePrimaryTopicReference,
    pipelineTopicExpression: pipelineTopicExpression,
    placeholder: placeholder,
    prependToMemberExpression: prependToMemberExpression,
    privateName: privateName,
    program: program$3,
    qualifiedTypeIdentifier: qualifiedTypeIdentifier,
    react: react$3,
    recordExpression: recordExpression,
    regExpLiteral: regExpLiteral,
    regexLiteral: RegexLiteral$1,
    removeComments: removeComments$1,
    removeProperties: removeProperties$1,
    removePropertiesDeep: removePropertiesDeep$1,
    removeTypeDuplicates: removeTypeDuplicates$1,
    restElement: restElement$2,
    restProperty: RestProperty$2,
    returnStatement: returnStatement$3,
    sequenceExpression: sequenceExpression$6,
    shallowEqual: shallowEqual,
    spreadElement: spreadElement$2,
    spreadProperty: SpreadProperty$2,
    staticBlock: staticBlock,
    stringLiteral: stringLiteral$6,
    stringLiteralTypeAnnotation: stringLiteralTypeAnnotation,
    stringTypeAnnotation: stringTypeAnnotation$2,
    super: _super$1,
    switchCase: switchCase,
    switchStatement: switchStatement,
    symbolTypeAnnotation: symbolTypeAnnotation,
    tSAnyKeyword: tsAnyKeyword,
    tSArrayType: tsArrayType,
    tSAsExpression: tsAsExpression,
    tSBigIntKeyword: tsBigIntKeyword,
    tSBooleanKeyword: tsBooleanKeyword,
    tSCallSignatureDeclaration: tsCallSignatureDeclaration,
    tSConditionalType: tsConditionalType,
    tSConstructSignatureDeclaration: tsConstructSignatureDeclaration,
    tSConstructorType: tsConstructorType,
    tSDeclareFunction: tsDeclareFunction,
    tSDeclareMethod: tsDeclareMethod,
    tSEnumBody: tsEnumBody,
    tSEnumDeclaration: tsEnumDeclaration,
    tSEnumMember: tsEnumMember,
    tSExportAssignment: tsExportAssignment,
    tSExpressionWithTypeArguments: tsExpressionWithTypeArguments,
    tSExternalModuleReference: tsExternalModuleReference,
    tSFunctionType: tsFunctionType,
    tSImportEqualsDeclaration: tsImportEqualsDeclaration,
    tSImportType: tsImportType,
    tSIndexSignature: tsIndexSignature,
    tSIndexedAccessType: tsIndexedAccessType,
    tSInferType: tsInferType,
    tSInstantiationExpression: tsInstantiationExpression,
    tSInterfaceBody: tsInterfaceBody,
    tSInterfaceDeclaration: tsInterfaceDeclaration,
    tSIntersectionType: tsIntersectionType,
    tSIntrinsicKeyword: tsIntrinsicKeyword,
    tSLiteralType: tsLiteralType,
    tSMappedType: tsMappedType,
    tSMethodSignature: tsMethodSignature,
    tSModuleBlock: tsModuleBlock,
    tSModuleDeclaration: tsModuleDeclaration,
    tSNamedTupleMember: tsNamedTupleMember,
    tSNamespaceExportDeclaration: tsNamespaceExportDeclaration,
    tSNeverKeyword: tsNeverKeyword,
    tSNonNullExpression: tsNonNullExpression,
    tSNullKeyword: tsNullKeyword,
    tSNumberKeyword: tsNumberKeyword,
    tSObjectKeyword: tsObjectKeyword,
    tSOptionalType: tsOptionalType,
    tSParameterProperty: tsParameterProperty,
    tSParenthesizedType: tsParenthesizedType,
    tSPropertySignature: tsPropertySignature,
    tSQualifiedName: tsQualifiedName,
    tSRestType: tsRestType,
    tSSatisfiesExpression: tsSatisfiesExpression,
    tSStringKeyword: tsStringKeyword,
    tSSymbolKeyword: tsSymbolKeyword,
    tSTemplateLiteralType: tsTemplateLiteralType,
    tSThisType: tsThisType,
    tSTupleType: tsTupleType,
    tSTypeAliasDeclaration: tsTypeAliasDeclaration,
    tSTypeAnnotation: tsTypeAnnotation,
    tSTypeAssertion: tsTypeAssertion,
    tSTypeLiteral: tsTypeLiteral,
    tSTypeOperator: tsTypeOperator,
    tSTypeParameter: tsTypeParameter,
    tSTypeParameterDeclaration: tsTypeParameterDeclaration,
    tSTypeParameterInstantiation: tsTypeParameterInstantiation,
    tSTypePredicate: tsTypePredicate,
    tSTypeQuery: tsTypeQuery,
    tSTypeReference: tsTypeReference,
    tSUndefinedKeyword: tsUndefinedKeyword,
    tSUnionType: tsUnionType,
    tSUnknownKeyword: tsUnknownKeyword,
    tSVoidKeyword: tsVoidKeyword,
    taggedTemplateExpression: taggedTemplateExpression,
    templateElement: templateElement,
    templateLiteral: templateLiteral,
    thisExpression: thisExpression$5,
    thisTypeAnnotation: thisTypeAnnotation,
    throwStatement: throwStatement,
    toBindingIdentifierName: toBindingIdentifierName$1,
    toBlock: toBlock,
    toComputedKey: toComputedKey$1,
    toExpression: toExpression$1,
    toIdentifier: toIdentifier$1,
    toKeyAlias: toKeyAlias,
    toStatement: toStatement,
    topicReference: topicReference,
    traverse: traverse$2,
    traverseFast: traverseFast$3,
    tryStatement: tryStatement,
    tsAnyKeyword: tsAnyKeyword,
    tsArrayType: tsArrayType,
    tsAsExpression: tsAsExpression,
    tsBigIntKeyword: tsBigIntKeyword,
    tsBooleanKeyword: tsBooleanKeyword,
    tsCallSignatureDeclaration: tsCallSignatureDeclaration,
    tsConditionalType: tsConditionalType,
    tsConstructSignatureDeclaration: tsConstructSignatureDeclaration,
    tsConstructorType: tsConstructorType,
    tsDeclareFunction: tsDeclareFunction,
    tsDeclareMethod: tsDeclareMethod,
    tsEnumBody: tsEnumBody,
    tsEnumDeclaration: tsEnumDeclaration,
    tsEnumMember: tsEnumMember,
    tsExportAssignment: tsExportAssignment,
    tsExpressionWithTypeArguments: tsExpressionWithTypeArguments,
    tsExternalModuleReference: tsExternalModuleReference,
    tsFunctionType: tsFunctionType,
    tsImportEqualsDeclaration: tsImportEqualsDeclaration,
    tsImportType: tsImportType,
    tsIndexSignature: tsIndexSignature,
    tsIndexedAccessType: tsIndexedAccessType,
    tsInferType: tsInferType,
    tsInstantiationExpression: tsInstantiationExpression,
    tsInterfaceBody: tsInterfaceBody,
    tsInterfaceDeclaration: tsInterfaceDeclaration,
    tsIntersectionType: tsIntersectionType,
    tsIntrinsicKeyword: tsIntrinsicKeyword,
    tsLiteralType: tsLiteralType,
    tsMappedType: tsMappedType,
    tsMethodSignature: tsMethodSignature,
    tsModuleBlock: tsModuleBlock,
    tsModuleDeclaration: tsModuleDeclaration,
    tsNamedTupleMember: tsNamedTupleMember,
    tsNamespaceExportDeclaration: tsNamespaceExportDeclaration,
    tsNeverKeyword: tsNeverKeyword,
    tsNonNullExpression: tsNonNullExpression,
    tsNullKeyword: tsNullKeyword,
    tsNumberKeyword: tsNumberKeyword,
    tsObjectKeyword: tsObjectKeyword,
    tsOptionalType: tsOptionalType,
    tsParameterProperty: tsParameterProperty,
    tsParenthesizedType: tsParenthesizedType,
    tsPropertySignature: tsPropertySignature,
    tsQualifiedName: tsQualifiedName,
    tsRestType: tsRestType,
    tsSatisfiesExpression: tsSatisfiesExpression,
    tsStringKeyword: tsStringKeyword,
    tsSymbolKeyword: tsSymbolKeyword,
    tsTemplateLiteralType: tsTemplateLiteralType,
    tsThisType: tsThisType,
    tsTupleType: tsTupleType,
    tsTypeAliasDeclaration: tsTypeAliasDeclaration,
    tsTypeAnnotation: tsTypeAnnotation,
    tsTypeAssertion: tsTypeAssertion,
    tsTypeLiteral: tsTypeLiteral,
    tsTypeOperator: tsTypeOperator,
    tsTypeParameter: tsTypeParameter,
    tsTypeParameterDeclaration: tsTypeParameterDeclaration,
    tsTypeParameterInstantiation: tsTypeParameterInstantiation,
    tsTypePredicate: tsTypePredicate,
    tsTypeQuery: tsTypeQuery,
    tsTypeReference: tsTypeReference,
    tsUndefinedKeyword: tsUndefinedKeyword,
    tsUnionType: tsUnionType,
    tsUnknownKeyword: tsUnknownKeyword,
    tsVoidKeyword: tsVoidKeyword,
    tupleExpression: tupleExpression,
    tupleTypeAnnotation: tupleTypeAnnotation$1,
    typeAlias: typeAlias,
    typeAnnotation: typeAnnotation,
    typeCastExpression: typeCastExpression,
    typeParameter: typeParameter,
    typeParameterDeclaration: typeParameterDeclaration,
    typeParameterInstantiation: typeParameterInstantiation,
    typeofTypeAnnotation: typeofTypeAnnotation,
    unaryExpression: unaryExpression$4,
    unionTypeAnnotation: unionTypeAnnotation$1,
    updateExpression: updateExpression$1,
    v8IntrinsicIdentifier: v8IntrinsicIdentifier,
    validate: validate$6,
    valueToNode: valueToNode,
    variableDeclaration: variableDeclaration$6,
    variableDeclarator: variableDeclarator$6,
    variance: variance,
    voidPattern: voidPattern,
    voidTypeAnnotation: voidTypeAnnotation$3,
    whileStatement: whileStatement,
    withStatement: withStatement,
    yieldExpression: yieldExpression$2
  });

  var assertExpressionStatement = assertExpressionStatement$1;
  function makeStatementFormatter(fn) {
    return {
      code: function code(str) {
        return "/* @babel/template */;\n" + str;
      },
      validate: function validate() {},
      unwrap: function unwrap(ast) {
        return fn(ast.program.body.slice(1));
      }
    };
  }
  var smart$1 = makeStatementFormatter(function (body) {
    if (body.length > 1) {
      return body;
    } else {
      return body[0];
    }
  });
  var statements$1 = makeStatementFormatter(function (body) {
    return body;
  });
  var statement$1 = makeStatementFormatter(function (body) {
    if (body.length === 0) {
      throw new Error("Found nothing to return.");
    }
    if (body.length > 1) {
      throw new Error("Found multiple statements but wanted one");
    }
    return body[0];
  });
  var expression$1 = {
    code: function code(str) {
      return "(\n" + str + "\n)";
    },
    validate: function validate(ast) {
      if (ast.program.body.length > 1) {
        throw new Error("Found multiple statements but wanted one");
      }
      if (expression$1.unwrap(ast).start === 0) {
        throw new Error("Parse result included parens.");
      }
    },
    unwrap: function unwrap(_ref) {
      var program = _ref.program;
      var _program$body = _slicedToArray(program.body, 1),
        stmt = _program$body[0];
      assertExpressionStatement(stmt);
      return stmt.expression;
    }
  };
  var program$2 = {
    code: function code(str) {
      return str;
    },
    validate: function validate() {},
    unwrap: function unwrap(ast) {
      return ast.program;
    }
  };

  var _excluded$4 = ["placeholderWhitelist", "placeholderPattern", "preserveComments", "syntacticPlaceholders"];
  function merge$1(a, b) {
    var _b$placeholderWhiteli = b.placeholderWhitelist,
      placeholderWhitelist = _b$placeholderWhiteli === void 0 ? a.placeholderWhitelist : _b$placeholderWhiteli,
      _b$placeholderPattern = b.placeholderPattern,
      placeholderPattern = _b$placeholderPattern === void 0 ? a.placeholderPattern : _b$placeholderPattern,
      _b$preserveComments = b.preserveComments,
      preserveComments = _b$preserveComments === void 0 ? a.preserveComments : _b$preserveComments,
      _b$syntacticPlacehold = b.syntacticPlaceholders,
      syntacticPlaceholders = _b$syntacticPlacehold === void 0 ? a.syntacticPlaceholders : _b$syntacticPlacehold;
    return {
      parser: Object.assign({}, a.parser, b.parser),
      placeholderWhitelist: placeholderWhitelist,
      placeholderPattern: placeholderPattern,
      preserveComments: preserveComments,
      syntacticPlaceholders: syntacticPlaceholders
    };
  }
  function validate$4(opts) {
    if (opts != null && typeof opts !== "object") {
      throw new Error("Unknown template options.");
    }
    var _ref = opts || {},
      placeholderWhitelist = _ref.placeholderWhitelist,
      placeholderPattern = _ref.placeholderPattern,
      preserveComments = _ref.preserveComments,
      syntacticPlaceholders = _ref.syntacticPlaceholders,
      parser = _objectWithoutPropertiesLoose(_ref, _excluded$4);
    if (placeholderWhitelist != null && !(placeholderWhitelist instanceof Set)) {
      throw new Error("'.placeholderWhitelist' must be a Set, null, or undefined");
    }
    if (placeholderPattern != null && !(placeholderPattern instanceof RegExp) && placeholderPattern !== false) {
      throw new Error("'.placeholderPattern' must be a RegExp, false, null, or undefined");
    }
    if (preserveComments != null && typeof preserveComments !== "boolean") {
      throw new Error("'.preserveComments' must be a boolean, null, or undefined");
    }
    if (syntacticPlaceholders != null && typeof syntacticPlaceholders !== "boolean") {
      throw new Error("'.syntacticPlaceholders' must be a boolean, null, or undefined");
    }
    if (syntacticPlaceholders === true && (placeholderWhitelist != null || placeholderPattern != null)) {
      throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible" + " with '.syntacticPlaceholders: true'");
    }
    return {
      parser: parser,
      placeholderWhitelist: placeholderWhitelist || undefined,
      placeholderPattern: placeholderPattern == null ? undefined : placeholderPattern,
      preserveComments: preserveComments == null ? undefined : preserveComments,
      syntacticPlaceholders: syntacticPlaceholders == null ? undefined : syntacticPlaceholders
    };
  }
  function normalizeReplacements(replacements) {
    if (Array.isArray(replacements)) {
      return replacements.reduce(function (acc, replacement, i) {
        acc["$" + i] = replacement;
        return acc;
      }, {});
    } else if (typeof replacements === "object" || replacements == null) {
      return replacements || undefined;
    }
    throw new Error("Template replacements must be an array, object, null, or undefined");
  }

  var Position = _createClass(function Position(line, col, index) {
    this.line = void 0;
    this.column = void 0;
    this.index = void 0;
    this.line = line;
    this.column = col;
    this.index = index;
  });
  var SourceLocation = _createClass(function SourceLocation(start, end) {
    this.start = void 0;
    this.end = void 0;
    this.filename = void 0;
    this.identifierName = void 0;
    this.start = start;
    this.end = end;
  });
  function createPositionWithColumnOffset(position, columnOffset) {
    var line = position.line,
      column = position.column,
      index = position.index;
    return new Position(line, column + columnOffset, index + columnOffset);
  }

  var code = "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";
  var ModuleErrors = {
    ImportMetaOutsideModule: {
      message: "import.meta may appear only with 'sourceType: \"module\"'",
      code: code
    },
    ImportOutsideModule: {
      message: "'import' and 'export' may appear only with 'sourceType: \"module\"'",
      code: code
    }
  };

  var NodeDescriptions = {
    ArrayPattern: "array destructuring pattern",
    AssignmentExpression: "assignment expression",
    AssignmentPattern: "assignment expression",
    ArrowFunctionExpression: "arrow function expression",
    ConditionalExpression: "conditional expression",
    CatchClause: "catch clause",
    ForOfStatement: "for-of statement",
    ForInStatement: "for-in statement",
    ForStatement: "for-loop",
    FormalParameters: "function parameter list",
    Identifier: "identifier",
    ImportSpecifier: "import specifier",
    ImportDefaultSpecifier: "import default specifier",
    ImportNamespaceSpecifier: "import namespace specifier",
    ObjectPattern: "object destructuring pattern",
    ParenthesizedExpression: "parenthesized expression",
    RestElement: "rest element",
    UpdateExpression: {
      "true": "prefix operation",
      "false": "postfix operation"
    },
    VariableDeclarator: "variable declaration",
    YieldExpression: "yield expression"
  };
  var toNodeDescription = function toNodeDescription(node) {
    return node.type === "UpdateExpression" ? NodeDescriptions.UpdateExpression["" + node.prefix] : NodeDescriptions[node.type];
  };

  var StandardErrors = {
    AccessorIsGenerator: function AccessorIsGenerator(_ref) {
      var kind = _ref.kind;
      return "A " + kind + "ter cannot be a generator.";
    },
    ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
    AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
    AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
    AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
    AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
    AwaitUsingNotInAsyncContext: "'await using' is only allowed within async functions and at the top levels of modules.",
    AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
    BadGetterArity: "A 'get' accessor must not have any formal parameters.",
    BadSetterArity: "A 'set' accessor must have exactly one formal parameter.",
    BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.",
    ConstructorClassField: "Classes may not have a field named 'constructor'.",
    ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
    ConstructorIsAccessor: "Class constructor may not be an accessor.",
    ConstructorIsAsync: "Constructor can't be an async function.",
    ConstructorIsGenerator: "Constructor can't be a generator.",
    DeclarationMissingInitializer: function DeclarationMissingInitializer(_ref2) {
      var kind = _ref2.kind;
      return "Missing initializer in " + kind + " declaration.";
    },
    DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
    DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.",
    DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",
    DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
    DecoratorExportClass: "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.",
    DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
    DecoratorStaticBlock: "Decorators can't be used with a static block.",
    DeferImportRequiresNamespace: 'Only `import defer * as x from "./module"` is valid.',
    DeletePrivateField: "Deleting a private field is not allowed.",
    DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
    DuplicateConstructor: "Duplicate constructor in the same class.",
    DuplicateDefaultExport: "Only one default export allowed per module.",
    DuplicateExport: function DuplicateExport(_ref3) {
      var exportName = _ref3.exportName;
      return "`" + exportName + "` has already been exported. Exported identifiers must be unique.";
    },
    DuplicateProto: "Redefinition of __proto__ property.",
    DuplicateRegExpFlags: "Duplicate regular expression flag.",
    ElementAfterRest: "Rest element must be last element.",
    EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
    ExportBindingIsString: function ExportBindingIsString(_ref4) {
      var localName = _ref4.localName,
        exportName = _ref4.exportName;
      return "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { '" + localName + "' as '" + exportName + "' } from 'some-module'`?";
    },
    ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
    ForInOfLoopInitializer: function ForInOfLoopInitializer(_ref5) {
      var type = _ref5.type;
      return "'" + (type === "ForInStatement" ? "for-in" : "for-of") + "' loop variable declaration may not have an initializer.";
    },
    ForInUsing: "For-in loop may not start with 'using' declaration.",
    ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
    ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
    GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
    IllegalBreakContinue: function IllegalBreakContinue(_ref6) {
      var type = _ref6.type;
      return "Unsyntactic " + (type === "BreakStatement" ? "break" : "continue") + ".";
    },
    IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
    IllegalReturn: "'return' outside of function.",
    ImportAttributesUseAssert: "The `assert` keyword in import attributes is deprecated and it has been replaced by the `with` keyword. You can enable the `deprecatedImportAssert` parser plugin to suppress this error.",
    ImportBindingIsString: function ImportBindingIsString(_ref7) {
      var importName = _ref7.importName;
      return "A string literal cannot be used as an imported binding.\n- Did you mean `import { \"" + importName + "\" as foo }`?";
    },
    ImportCallArity: "`import()` requires exactly one or two arguments.",
    ImportCallNotNewExpression: "Cannot use new with import(...).",
    ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
    ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.",
    ImportReflectionHasAssertion: "`import module x` cannot have assertions.",
    ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.',
    IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
    InvalidBigIntLiteral: "Invalid BigIntLiteral.",
    InvalidCodePoint: "Code point out of bounds.",
    InvalidCoverDiscardElement: "'void' must be followed by an expression when not used in a binding position.",
    InvalidCoverInitializedName: "Invalid shorthand property initializer.",
    InvalidDecimal: "Invalid decimal.",
    InvalidDigit: function InvalidDigit(_ref8) {
      var radix = _ref8.radix;
      return "Expected number in radix " + radix + ".";
    },
    InvalidEscapeSequence: "Bad character escape sequence.",
    InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
    InvalidEscapedReservedWord: function InvalidEscapedReservedWord(_ref9) {
      var reservedWord = _ref9.reservedWord;
      return "Escape sequence in keyword " + reservedWord + ".";
    },
    InvalidIdentifier: function InvalidIdentifier(_ref0) {
      var identifierName = _ref0.identifierName;
      return "Invalid identifier " + identifierName + ".";
    },
    InvalidLhs: function InvalidLhs(_ref1) {
      var ancestor = _ref1.ancestor;
      return "Invalid left-hand side in " + toNodeDescription(ancestor) + ".";
    },
    InvalidLhsBinding: function InvalidLhsBinding(_ref10) {
      var ancestor = _ref10.ancestor;
      return "Binding invalid left-hand side in " + toNodeDescription(ancestor) + ".";
    },
    InvalidLhsOptionalChaining: function InvalidLhsOptionalChaining(_ref11) {
      var ancestor = _ref11.ancestor;
      return "Invalid optional chaining in the left-hand side of " + toNodeDescription(ancestor) + ".";
    },
    InvalidNumber: "Invalid number.",
    InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
    InvalidOrUnexpectedToken: function InvalidOrUnexpectedToken(_ref12) {
      var unexpected = _ref12.unexpected;
      return "Unexpected character '" + unexpected + "'.";
    },
    InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
    InvalidPrivateFieldResolution: function InvalidPrivateFieldResolution(_ref13) {
      var identifierName = _ref13.identifierName;
      return "Private name #" + identifierName + " is not defined.";
    },
    InvalidPropertyBindingPattern: "Binding member expression.",
    InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
    InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
    LabelRedeclaration: function LabelRedeclaration(_ref14) {
      var labelName = _ref14.labelName;
      return "Label '" + labelName + "' is already declared.";
    },
    LetInLexicalBinding: "'let' is disallowed as a lexically bound name.",
    LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
    MalformedRegExpFlags: "Invalid regular expression flag.",
    MissingClassName: "A class name is required.",
    MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
    MissingSemicolon: "Missing semicolon.",
    MissingPlugin: function MissingPlugin(_ref15) {
      var missingPlugin = _ref15.missingPlugin;
      return "This experimental syntax requires enabling the parser plugin: " + missingPlugin.map(function (name) {
        return JSON.stringify(name);
      }).join(", ") + ".";
    },
    MissingOneOfPlugins: function MissingOneOfPlugins(_ref16) {
      var missingPlugin = _ref16.missingPlugin;
      return "This experimental syntax requires enabling one of the following parser plugin(s): " + missingPlugin.map(function (name) {
        return JSON.stringify(name);
      }).join(", ") + ".";
    },
    MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
    MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
    ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
    ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
    ModuleAttributesWithDuplicateKeys: function ModuleAttributesWithDuplicateKeys(_ref17) {
      var key = _ref17.key;
      return "Duplicate key \"" + key + "\" is not allowed in module attributes.";
    },
    ModuleExportNameHasLoneSurrogate: function ModuleExportNameHasLoneSurrogate(_ref18) {
      var surrogateCharCode = _ref18.surrogateCharCode;
      return "An export name cannot include a lone surrogate, found '\\u" + surrogateCharCode.toString(16) + "'.";
    },
    ModuleExportUndefined: function ModuleExportUndefined(_ref19) {
      var localName = _ref19.localName;
      return "Export '" + localName + "' is not defined.";
    },
    MultipleDefaultsInSwitch: "Multiple default clauses.",
    NewlineAfterThrow: "Illegal newline after throw.",
    NoCatchOrFinally: "Missing catch or finally clause.",
    NumberIdentifier: "Identifier directly after number.",
    NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
    ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
    OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
    OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
    OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
    ParamDupe: "Argument name clash.",
    PatternHasAccessor: "Object pattern can't contain getter or setter.",
    PatternHasMethod: "Object pattern can't contain methods.",
    PrivateInExpectedIn: function PrivateInExpectedIn(_ref20) {
      var identifierName = _ref20.identifierName;
      return "Private names are only allowed in property accesses (`obj.#" + identifierName + "`) or in `in` expressions (`#" + identifierName + " in obj`).";
    },
    PrivateNameRedeclaration: function PrivateNameRedeclaration(_ref21) {
      var identifierName = _ref21.identifierName;
      return "Duplicate private name #" + identifierName + ".";
    },
    RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
    RecordNoProto: "'__proto__' is not allowed in Record expressions.",
    RestTrailingComma: "Unexpected trailing comma after rest element.",
    SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.",
    SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
    SourcePhaseImportRequiresDefault: 'Only `import source x from "./module"` is valid.',
    StaticPrototype: "Classes may not have static property named prototype.",
    SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
    SuperPrivateField: "Private fields can't be accessed on super.",
    TrailingDecorator: "Decorators must be attached to a class element.",
    TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
    UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
    UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
    UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
    UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
    UnexpectedKeyword: function UnexpectedKeyword(_ref22) {
      var keyword = _ref22.keyword;
      return "Unexpected keyword '" + keyword + "'.";
    },
    UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
    UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
    UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
    UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
    UnexpectedPrivateField: "Unexpected private name.",
    UnexpectedReservedWord: function UnexpectedReservedWord(_ref23) {
      var reservedWord = _ref23.reservedWord;
      return "Unexpected reserved word '" + reservedWord + "'.";
    },
    UnexpectedSuper: "'super' is only allowed in object methods and classes.",
    UnexpectedToken: function UnexpectedToken(_ref24) {
      var expected = _ref24.expected,
        unexpected = _ref24.unexpected;
      return "Unexpected token" + (unexpected ? " '" + unexpected + "'." : "") + (expected ? ", expected \"" + expected + "\"" : "");
    },
    UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
    UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement.",
    UnexpectedVoidPattern: "Unexpected void binding.",
    UnsupportedBind: "Binding should be performed on object property.",
    UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
    UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
    UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
    UnsupportedMetaProperty: function UnsupportedMetaProperty(_ref25) {
      var target = _ref25.target,
        onlyValidPropertyName = _ref25.onlyValidPropertyName;
      return "The only valid meta property for " + target + " is " + target + "." + onlyValidPropertyName + ".";
    },
    UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
    UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
    UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
    UnterminatedComment: "Unterminated comment.",
    UnterminatedRegExp: "Unterminated regular expression.",
    UnterminatedString: "Unterminated string constant.",
    UnterminatedTemplate: "Unterminated template.",
    UsingDeclarationExport: "Using declaration cannot be exported.",
    UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.",
    VarRedeclaration: function VarRedeclaration(_ref26) {
      var identifierName = _ref26.identifierName;
      return "Identifier '" + identifierName + "' has already been declared.";
    },
    VoidPatternCatchClauseParam: "A void binding can not be the catch clause parameter. Use `try { ... } catch { ... }` if you want to discard the caught error.",
    VoidPatternInitializer: "A void binding may not have an initializer.",
    YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
    YieldInParameter: "Yield expression is not allowed in formal parameters.",
    YieldNotInGeneratorFunction: "'yield' is only allowed within generator functions.",
    ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
  };

  var StrictModeErrors = {
    StrictDelete: "Deleting local variable in strict mode.",
    StrictEvalArguments: function StrictEvalArguments(_ref) {
      var referenceName = _ref.referenceName;
      return "Assigning to '" + referenceName + "' in strict mode.";
    },
    StrictEvalArgumentsBinding: function StrictEvalArgumentsBinding(_ref2) {
      var bindingName = _ref2.bindingName;
      return "Binding '" + bindingName + "' in strict mode.";
    },
    StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
    StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
    StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
    StrictWith: "'with' in strict mode."
  };

  var ParseExpressionErrors = {
    ParseExpressionEmptyInput: "Unexpected parseExpression() input: The input is empty or contains only comments.",
    ParseExpressionExpectsEOF: function ParseExpressionExpectsEOF(_ref) {
      var unexpected = _ref.unexpected;
      return "Unexpected parseExpression() input: The input should contain exactly one expression, but the first expression is followed by the unexpected character `" + String.fromCodePoint(unexpected) + "`.";
    }
  };

  var UnparenthesizedPipeBodyDescriptions = new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]);
  var PipelineOperatorErrors = Object.assign({
    PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
    PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
    PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
    PipeTopicUnconfiguredToken: function PipeTopicUnconfiguredToken(_ref) {
      var token = _ref.token;
      return "Invalid topic token " + token + ". In order to use " + token + " as a topic reference, the pipelineOperator plugin must be configured with { \"proposal\": \"hack\", \"topicToken\": \"" + token + "\" }.";
    },
    PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
    PipeUnparenthesizedBody: function PipeUnparenthesizedBody(_ref2) {
      var type = _ref2.type;
      return "Hack-style pipe body cannot be an unparenthesized " + toNodeDescription({
        type: type
      }) + "; please wrap it in parentheses.";
    }
  }, {
    PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
    PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
    PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
    PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
    PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
    PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
  });

  var _templateObject$M;
  var _excluded$3 = ["message"];
  function defineHidden(obj, key, value) {
    Object.defineProperty(obj, key, {
      enumerable: false,
      configurable: true,
      value: value
    });
  }
  function toParseErrorConstructor(_ref) {
    var toMessage = _ref.toMessage,
      code = _ref.code,
      reasonCode = _ref.reasonCode,
      syntaxPlugin = _ref.syntaxPlugin;
    var hasMissingPlugin = reasonCode === "MissingPlugin" || reasonCode === "MissingOneOfPlugins";
    {
      var oldReasonCodes = {
        AccessorCannotDeclareThisParameter: "AccesorCannotDeclareThisParameter",
        AccessorCannotHaveTypeParameters: "AccesorCannotHaveTypeParameters",
        ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: "ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference",
        SetAccessorCannotHaveOptionalParameter: "SetAccesorCannotHaveOptionalParameter",
        SetAccessorCannotHaveRestParameter: "SetAccesorCannotHaveRestParameter",
        SetAccessorCannotHaveReturnType: "SetAccesorCannotHaveReturnType"
      };
      if (oldReasonCodes[reasonCode]) {
        reasonCode = oldReasonCodes[reasonCode];
      }
    }
    return function constructor(loc, details) {
      var error = new SyntaxError();
      error.code = code;
      error.reasonCode = reasonCode;
      error.loc = loc;
      error.pos = loc.index;
      error.syntaxPlugin = syntaxPlugin;
      if (hasMissingPlugin) {
        error.missingPlugin = details.missingPlugin;
      }
      defineHidden(error, "clone", function clone(overrides) {
        var _overrides$loc;
        if (overrides === void 0) {
          overrides = {};
        }
        var _ref2 = (_overrides$loc = overrides.loc) != null ? _overrides$loc : loc,
          line = _ref2.line,
          column = _ref2.column,
          index = _ref2.index;
        return constructor(new Position(line, column, index), Object.assign({}, details, overrides.details));
      });
      defineHidden(error, "details", details);
      Object.defineProperty(error, "message", {
        configurable: true,
        get: function get() {
          var message = toMessage(details) + " (" + loc.line + ":" + loc.column + ")";
          this.message = message;
          return message;
        },
        set: function set(value) {
          Object.defineProperty(this, "message", {
            value: value,
            writable: true
          });
        }
      });
      return error;
    };
  }
  function ParseErrorEnum(argument, syntaxPlugin) {
    if (Array.isArray(argument)) {
      return function (parseErrorTemplates) {
        return ParseErrorEnum(parseErrorTemplates, argument[0]);
      };
    }
    var ParseErrorConstructors = {};
    var _loop = function _loop() {
      var reasonCode = _Object$keys2[_i2];
      var template = argument[reasonCode];
      var _ref3 = typeof template === "string" ? {
          message: function message() {
            return template;
          }
        } : typeof template === "function" ? {
          message: template
        } : template,
        message = _ref3.message,
        rest = _objectWithoutPropertiesLoose(_ref3, _excluded$3);
      var toMessage = typeof message === "string" ? function () {
        return message;
      } : message;
      ParseErrorConstructors[reasonCode] = toParseErrorConstructor(Object.assign({
        code: "BABEL_PARSER_SYNTAX_ERROR",
        reasonCode: reasonCode,
        toMessage: toMessage
      }, syntaxPlugin ? {
        syntaxPlugin: syntaxPlugin
      } : {}, rest));
    };
    for (var _i2 = 0, _Object$keys2 = Object.keys(argument); _i2 < _Object$keys2.length; _i2++) {
      _loop();
    }
    return ParseErrorConstructors;
  }
  var Errors = Object.assign({}, ParseErrorEnum(ModuleErrors), ParseErrorEnum(StandardErrors), ParseErrorEnum(StrictModeErrors), ParseErrorEnum(ParseExpressionErrors), ParseErrorEnum(_templateObject$M || (_templateObject$M = _taggedTemplateLiteralLoose(["pipelineOperator"])))(PipelineOperatorErrors));

  var OptionFlags = {
    AllowAwaitOutsideFunction: 1,
    AllowReturnOutsideFunction: 2,
    AllowNewTargetOutsideFunction: 4,
    AllowImportExportEverywhere: 8,
    AllowSuperOutsideMethod: 16,
    AllowYieldOutsideFunction: 32,
    AllowUndeclaredExports: 64,
    Ranges: 128,
    Tokens: 256,
    CreateImportExpressions: 512,
    CreateParenthesizedExpressions: 1024,
    ErrorRecovery: 2048,
    AttachComment: 4096,
    AnnexB: 8192
  };
  function createDefaultOptions() {
    return {
      sourceType: "script",
      sourceFilename: undefined,
      startIndex: 0,
      startColumn: 0,
      startLine: 1,
      allowAwaitOutsideFunction: false,
      allowReturnOutsideFunction: false,
      allowNewTargetOutsideFunction: false,
      allowImportExportEverywhere: false,
      allowSuperOutsideMethod: false,
      allowUndeclaredExports: false,
      allowYieldOutsideFunction: false,
      plugins: [],
      strictMode: null,
      ranges: false,
      tokens: false,
      createImportExpressions: false,
      createParenthesizedExpressions: false,
      errorRecovery: false,
      attachComment: true,
      annexB: true
    };
  }
  function getOptions(opts) {
    var options = createDefaultOptions();
    if (opts == null) {
      return options;
    }
    if (opts.annexB != null && opts.annexB !== false) {
      throw new Error("The `annexB` option can only be set to `false`.");
    }
    for (var _i2 = 0, _Object$keys2 = Object.keys(options); _i2 < _Object$keys2.length; _i2++) {
      var key = _Object$keys2[_i2];
      if (opts[key] != null) options[key] = opts[key];
    }
    if (options.startLine === 1) {
      if (opts.startIndex == null && options.startColumn > 0) {
        options.startIndex = options.startColumn;
      } else if (opts.startColumn == null && options.startIndex > 0) {
        options.startColumn = options.startIndex;
      }
    } else if (opts.startColumn == null || opts.startIndex == null) {
      if (opts.startIndex != null) {
        throw new Error("With a `startLine > 1` you must also specify `startIndex` and `startColumn`.");
      }
    }
    if (options.sourceType === "commonjs") {
      if (opts.allowAwaitOutsideFunction != null) {
        throw new Error("The `allowAwaitOutsideFunction` option cannot be used with `sourceType: 'commonjs'`.");
      }
      if (opts.allowReturnOutsideFunction != null) {
        throw new Error("`sourceType: 'commonjs'` implies `allowReturnOutsideFunction: true`, please remove the `allowReturnOutsideFunction` option or use `sourceType: 'script'`.");
      }
      if (opts.allowNewTargetOutsideFunction != null) {
        throw new Error("`sourceType: 'commonjs'` implies `allowNewTargetOutsideFunction: true`, please remove the `allowNewTargetOutsideFunction` option or use `sourceType: 'script'`.");
      }
    }
    return options;
  }

  var defineProperty = Object.defineProperty;
  var toUnenumerable = function toUnenumerable(object, key) {
    if (object) {
      defineProperty(object, key, {
        enumerable: false,
        value: object[key]
      });
    }
  };
  function toESTreeLocation(node) {
    toUnenumerable(node.loc.start, "index");
    toUnenumerable(node.loc.end, "index");
    return node;
  }
  var estree = (function (superClass) {
    return function (_superClass) {
      function ESTreeParserMixin() {
        return _superClass.apply(this, arguments) || this;
      }
      _inherits(ESTreeParserMixin, _superClass);
      var _proto = ESTreeParserMixin.prototype;
      _proto.parse = function parse() {
        var file = toESTreeLocation(_superClass.prototype.parse.call(this));
        if (this.optionFlags & OptionFlags.Tokens) {
          file.tokens = file.tokens.map(toESTreeLocation);
        }
        return file;
      };
      _proto.parseRegExpLiteral = function parseRegExpLiteral(_ref) {
        var pattern = _ref.pattern,
          flags = _ref.flags;
        var regex = null;
        try {
          regex = new RegExp(pattern, flags);
        } catch (_) {}
        var node = this.estreeParseLiteral(regex);
        node.regex = {
          pattern: pattern,
          flags: flags
        };
        return node;
      };
      _proto.parseBigIntLiteral = function parseBigIntLiteral(value) {
        var bigInt;
        try {
          bigInt = BigInt(value);
        } catch (_unused) {
          bigInt = null;
        }
        var node = this.estreeParseLiteral(bigInt);
        node.bigint = String(node.value || value);
        return node;
      };
      _proto.parseDecimalLiteral = function parseDecimalLiteral(value) {
        var decimal = null;
        var node = this.estreeParseLiteral(decimal);
        node.decimal = String(node.value || value);
        return node;
      };
      _proto.estreeParseLiteral = function estreeParseLiteral(value) {
        return this.parseLiteral(value, "Literal");
      };
      _proto.parseStringLiteral = function parseStringLiteral(value) {
        return this.estreeParseLiteral(value);
      };
      _proto.parseNumericLiteral = function parseNumericLiteral(value) {
        return this.estreeParseLiteral(value);
      };
      _proto.parseNullLiteral = function parseNullLiteral() {
        return this.estreeParseLiteral(null);
      };
      _proto.parseBooleanLiteral = function parseBooleanLiteral(value) {
        return this.estreeParseLiteral(value);
      };
      _proto.estreeParseChainExpression = function estreeParseChainExpression(node, endLoc) {
        var chain = this.startNodeAtNode(node);
        chain.expression = node;
        return this.finishNodeAt(chain, "ChainExpression", endLoc);
      };
      _proto.directiveToStmt = function directiveToStmt(directive) {
        var expression = directive.value;
        delete directive.value;
        this.castNodeTo(expression, "Literal");
        expression.raw = expression.extra.raw;
        expression.value = expression.extra.expressionValue;
        var stmt = this.castNodeTo(directive, "ExpressionStatement");
        stmt.expression = expression;
        stmt.directive = expression.extra.rawValue;
        delete expression.extra;
        return stmt;
      };
      _proto.fillOptionalPropertiesForTSESLint = function fillOptionalPropertiesForTSESLint(node) {};
      _proto.cloneEstreeStringLiteral = function cloneEstreeStringLiteral(node) {
        var start = node.start,
          end = node.end,
          loc = node.loc,
          range = node.range,
          raw = node.raw,
          value = node.value;
        var cloned = Object.create(node.constructor.prototype);
        cloned.type = "Literal";
        cloned.start = start;
        cloned.end = end;
        cloned.loc = loc;
        cloned.range = range;
        cloned.raw = raw;
        cloned.value = value;
        return cloned;
      };
      _proto.initFunction = function initFunction(node, isAsync) {
        _superClass.prototype.initFunction.call(this, node, isAsync);
        node.expression = false;
      };
      _proto.checkDeclaration = function checkDeclaration(node) {
        if (node != null && this.isObjectProperty(node)) {
          this.checkDeclaration(node.value);
        } else {
          _superClass.prototype.checkDeclaration.call(this, node);
        }
      };
      _proto.getObjectOrClassMethodParams = function getObjectOrClassMethodParams(method) {
        return method.value.params;
      };
      _proto.isValidDirective = function isValidDirective(stmt) {
        var _stmt$expression$extr;
        return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && !((_stmt$expression$extr = stmt.expression.extra) != null && _stmt$expression$extr.parenthesized);
      };
      _proto.parseBlockBody = function parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse) {
        var _this = this;
        _superClass.prototype.parseBlockBody.call(this, node, allowDirectives, topLevel, end, afterBlockParse);
        var directiveStatements = node.directives.map(function (d) {
          return _this.directiveToStmt(d);
        });
        node.body = directiveStatements.concat(node.body);
        delete node.directives;
      };
      _proto.parsePrivateName = function parsePrivateName() {
        var node = _superClass.prototype.parsePrivateName.call(this);
        {
          if (!this.getPluginOption("estree", "classFeatures")) {
            return node;
          }
        }
        return this.convertPrivateNameToPrivateIdentifier(node);
      };
      _proto.convertPrivateNameToPrivateIdentifier = function convertPrivateNameToPrivateIdentifier(node) {
        var name = _superClass.prototype.getPrivateNameSV.call(this, node);
        node = node;
        delete node.id;
        node.name = name;
        return this.castNodeTo(node, "PrivateIdentifier");
      };
      _proto.isPrivateName = function isPrivateName(node) {
        {
          if (!this.getPluginOption("estree", "classFeatures")) {
            return _superClass.prototype.isPrivateName.call(this, node);
          }
        }
        return node.type === "PrivateIdentifier";
      };
      _proto.getPrivateNameSV = function getPrivateNameSV(node) {
        {
          if (!this.getPluginOption("estree", "classFeatures")) {
            return _superClass.prototype.getPrivateNameSV.call(this, node);
          }
        }
        return node.name;
      };
      _proto.parseLiteral = function parseLiteral(value, type) {
        var node = _superClass.prototype.parseLiteral.call(this, value, type);
        node.raw = node.extra.raw;
        delete node.extra;
        return node;
      };
      _proto.parseFunctionBody = function parseFunctionBody(node, allowExpression, isMethod) {
        if (isMethod === void 0) {
          isMethod = false;
        }
        _superClass.prototype.parseFunctionBody.call(this, node, allowExpression, isMethod);
        node.expression = node.body.type !== "BlockStatement";
      };
      _proto.parseMethod = function parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope) {
        if (inClassScope === void 0) {
          inClassScope = false;
        }
        var funcNode = this.startNode();
        funcNode.kind = node.kind;
        funcNode = _superClass.prototype.parseMethod.call(this, funcNode, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope);
        delete funcNode.kind;
        var typeParameters = node.typeParameters;
        if (typeParameters) {
          delete node.typeParameters;
          funcNode.typeParameters = typeParameters;
          this.resetStartLocationFromNode(funcNode, typeParameters);
        }
        var valueNode = this.castNodeTo(funcNode, "FunctionExpression");
        node.value = valueNode;
        if (type === "ClassPrivateMethod") {
          node.computed = false;
        }
        if (type === "ObjectMethod") {
          if (node.kind === "method") {
            node.kind = "init";
          }
          node.shorthand = false;
          return this.finishNode(node, "Property");
        } else {
          return this.finishNode(node, "MethodDefinition");
        }
      };
      _proto.nameIsConstructor = function nameIsConstructor(key) {
        if (key.type === "Literal") return key.value === "constructor";
        return _superClass.prototype.nameIsConstructor.call(this, key);
      };
      _proto.parseClassProperty = function parseClassProperty() {
        var _superClass$prototype;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var propertyNode = (_superClass$prototype = _superClass.prototype.parseClassProperty).call.apply(_superClass$prototype, [this].concat(args));
        {
          if (!this.getPluginOption("estree", "classFeatures")) {
            return propertyNode;
          }
        }
        {
          this.castNodeTo(propertyNode, "PropertyDefinition");
        }
        return propertyNode;
      };
      _proto.parseClassPrivateProperty = function parseClassPrivateProperty() {
        var _superClass$prototype2;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        var propertyNode = (_superClass$prototype2 = _superClass.prototype.parseClassPrivateProperty).call.apply(_superClass$prototype2, [this].concat(args));
        {
          if (!this.getPluginOption("estree", "classFeatures")) {
            return propertyNode;
          }
        }
        {
          this.castNodeTo(propertyNode, "PropertyDefinition");
        }
        propertyNode.computed = false;
        return propertyNode;
      };
      _proto.parseClassAccessorProperty = function parseClassAccessorProperty(node) {
        var accessorPropertyNode = _superClass.prototype.parseClassAccessorProperty.call(this, node);
        {
          if (!this.getPluginOption("estree", "classFeatures")) {
            return accessorPropertyNode;
          }
        }
        if (accessorPropertyNode["abstract"] && this.hasPlugin("typescript")) {
          delete accessorPropertyNode["abstract"];
          this.castNodeTo(accessorPropertyNode, "TSAbstractAccessorProperty");
        } else {
          this.castNodeTo(accessorPropertyNode, "AccessorProperty");
        }
        return accessorPropertyNode;
      };
      _proto.parseObjectProperty = function parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors) {
        var node = _superClass.prototype.parseObjectProperty.call(this, prop, startLoc, isPattern, refExpressionErrors);
        if (node) {
          node.kind = "init";
          this.castNodeTo(node, "Property");
        }
        return node;
      };
      _proto.finishObjectProperty = function finishObjectProperty(node) {
        node.kind = "init";
        return this.finishNode(node, "Property");
      };
      _proto.isValidLVal = function isValidLVal(type, isUnparenthesizedInAssign, binding) {
        return type === "Property" ? "value" : _superClass.prototype.isValidLVal.call(this, type, isUnparenthesizedInAssign, binding);
      };
      _proto.isAssignable = function isAssignable(node, isBinding) {
        if (node != null && this.isObjectProperty(node)) {
          return this.isAssignable(node.value, isBinding);
        }
        return _superClass.prototype.isAssignable.call(this, node, isBinding);
      };
      _proto.toAssignable = function toAssignable(node, isLHS) {
        if (isLHS === void 0) {
          isLHS = false;
        }
        if (node != null && this.isObjectProperty(node)) {
          var key = node.key,
            value = node.value;
          if (this.isPrivateName(key)) {
            this.classScope.usePrivateName(this.getPrivateNameSV(key), key.loc.start);
          }
          this.toAssignable(value, isLHS);
        } else {
          _superClass.prototype.toAssignable.call(this, node, isLHS);
        }
      };
      _proto.toAssignableObjectExpressionProp = function toAssignableObjectExpressionProp(prop, isLast, isLHS) {
        if (prop.type === "Property" && (prop.kind === "get" || prop.kind === "set")) {
          this.raise(Errors.PatternHasAccessor, prop.key);
        } else if (prop.type === "Property" && prop.method) {
          this.raise(Errors.PatternHasMethod, prop.key);
        } else {
          _superClass.prototype.toAssignableObjectExpressionProp.call(this, prop, isLast, isLHS);
        }
      };
      _proto.finishCallExpression = function finishCallExpression(unfinished, optional) {
        var node = _superClass.prototype.finishCallExpression.call(this, unfinished, optional);
        if (node.callee.type === "Import") {
          var _ref2, _ref3;
          this.castNodeTo(node, "ImportExpression");
          node.source = node.arguments[0];
          node.options = (_ref2 = node.arguments[1]) != null ? _ref2 : null;
          node.attributes = (_ref3 = node.arguments[1]) != null ? _ref3 : null;
          delete node.arguments;
          delete node.callee;
        } else if (node.type === "OptionalCallExpression") {
          this.castNodeTo(node, "CallExpression");
        } else {
          node.optional = false;
        }
        return node;
      };
      _proto.toReferencedArguments = function toReferencedArguments(node) {
        if (node.type === "ImportExpression") {
          return;
        }
        _superClass.prototype.toReferencedArguments.call(this, node);
      };
      _proto.parseExport = function parseExport(unfinished, decorators) {
        var exportStartLoc = this.state.lastTokStartLoc;
        var node = _superClass.prototype.parseExport.call(this, unfinished, decorators);
        switch (node.type) {
          case "ExportAllDeclaration":
            node.exported = null;
            break;
          case "ExportNamedDeclaration":
            if (node.specifiers.length === 1 && node.specifiers[0].type === "ExportNamespaceSpecifier") {
              this.castNodeTo(node, "ExportAllDeclaration");
              node.exported = node.specifiers[0].exported;
              delete node.specifiers;
            }
          case "ExportDefaultDeclaration":
            {
              var _declaration$decorato;
              var declaration = node.declaration;
              if ((declaration == null ? void 0 : declaration.type) === "ClassDeclaration" && ((_declaration$decorato = declaration.decorators) == null ? void 0 : _declaration$decorato.length) > 0 && declaration.start === node.start) {
                this.resetStartLocation(node, exportStartLoc);
              }
            }
            break;
        }
        return node;
      };
      _proto.stopParseSubscript = function stopParseSubscript(base, state) {
        var node = _superClass.prototype.stopParseSubscript.call(this, base, state);
        if (state.optionalChainMember) {
          return this.estreeParseChainExpression(node, base.loc.end);
        }
        return node;
      };
      _proto.parseMember = function parseMember(base, startLoc, state, computed, optional) {
        var node = _superClass.prototype.parseMember.call(this, base, startLoc, state, computed, optional);
        if (node.type === "OptionalMemberExpression") {
          this.castNodeTo(node, "MemberExpression");
        } else {
          node.optional = false;
        }
        return node;
      };
      _proto.isOptionalMemberExpression = function isOptionalMemberExpression(node) {
        if (node.type === "ChainExpression") {
          return node.expression.type === "MemberExpression";
        }
        return _superClass.prototype.isOptionalMemberExpression.call(this, node);
      };
      _proto.hasPropertyAsPrivateName = function hasPropertyAsPrivateName(node) {
        if (node.type === "ChainExpression") {
          node = node.expression;
        }
        return _superClass.prototype.hasPropertyAsPrivateName.call(this, node);
      };
      _proto.isObjectProperty = function isObjectProperty(node) {
        return node.type === "Property" && node.kind === "init" && !node.method;
      };
      _proto.isObjectMethod = function isObjectMethod(node) {
        return node.type === "Property" && (node.method || node.kind === "get" || node.kind === "set");
      };
      _proto.castNodeTo = function castNodeTo(node, type) {
        var result = _superClass.prototype.castNodeTo.call(this, node, type);
        this.fillOptionalPropertiesForTSESLint(result);
        return result;
      };
      _proto.cloneIdentifier = function cloneIdentifier(node) {
        var cloned = _superClass.prototype.cloneIdentifier.call(this, node);
        this.fillOptionalPropertiesForTSESLint(cloned);
        return cloned;
      };
      _proto.cloneStringLiteral = function cloneStringLiteral(node) {
        if (node.type === "Literal") {
          return this.cloneEstreeStringLiteral(node);
        }
        return _superClass.prototype.cloneStringLiteral.call(this, node);
      };
      _proto.finishNodeAt = function finishNodeAt(node, type, endLoc) {
        return toESTreeLocation(_superClass.prototype.finishNodeAt.call(this, node, type, endLoc));
      };
      _proto.finishNode = function finishNode(node, type) {
        var result = _superClass.prototype.finishNode.call(this, node, type);
        this.fillOptionalPropertiesForTSESLint(result);
        return result;
      };
      _proto.resetStartLocation = function resetStartLocation(node, startLoc) {
        _superClass.prototype.resetStartLocation.call(this, node, startLoc);
        toESTreeLocation(node);
      };
      _proto.resetEndLocation = function resetEndLocation(node, endLoc) {
        if (endLoc === void 0) {
          endLoc = this.state.lastTokEndLoc;
        }
        _superClass.prototype.resetEndLocation.call(this, node, endLoc);
        toESTreeLocation(node);
      };
      return _createClass(ESTreeParserMixin);
    }(superClass);
  });

  var TokContext = _createClass(function TokContext(token, preserveSpace) {
    this.token = void 0;
    this.preserveSpace = void 0;
    this.token = token;
    this.preserveSpace = !!preserveSpace;
  });
  var types = {
    brace: new TokContext("{"),
    j_oTag: new TokContext("<tag"),
    j_cTag: new TokContext("</tag"),
    j_expr: new TokContext("<tag>...</tag>", true)
  };
  {
    types.template = new TokContext("`", true);
  }

  var beforeExpr = true;
  var startsExpr = true;
  var isLoop = true;
  var isAssign = true;
  var prefix = true;
  var postfix = true;
  var ExportedTokenType = _createClass(function ExportedTokenType(label, conf) {
    if (conf === void 0) {
      conf = {};
    }
    this.label = void 0;
    this.keyword = void 0;
    this.beforeExpr = void 0;
    this.startsExpr = void 0;
    this.rightAssociative = void 0;
    this.isLoop = void 0;
    this.isAssign = void 0;
    this.prefix = void 0;
    this.postfix = void 0;
    this.binop = void 0;
    this.label = label;
    this.keyword = conf.keyword;
    this.beforeExpr = !!conf.beforeExpr;
    this.startsExpr = !!conf.startsExpr;
    this.rightAssociative = !!conf.rightAssociative;
    this.isLoop = !!conf.isLoop;
    this.isAssign = !!conf.isAssign;
    this.prefix = !!conf.prefix;
    this.postfix = !!conf.postfix;
    this.binop = conf.binop != null ? conf.binop : null;
    {
      this.updateContext = null;
    }
  });
  var keywords = new Map();
  function createKeyword(name, options) {
    if (options === void 0) {
      options = {};
    }
    options.keyword = name;
    var token = createToken(name, options);
    keywords.set(name, token);
    return token;
  }
  function createBinop(name, binop) {
    return createToken(name, {
      beforeExpr: beforeExpr,
      binop: binop
    });
  }
  var tokenTypeCounter = -1;
  var tokenTypes = [];
  var tokenLabels = [];
  var tokenBinops = [];
  var tokenBeforeExprs = [];
  var tokenStartsExprs = [];
  var tokenPrefixes = [];
  function createToken(name, options) {
    var _options$binop, _options$beforeExpr, _options$startsExpr, _options$prefix;
    if (options === void 0) {
      options = {};
    }
    ++tokenTypeCounter;
    tokenLabels.push(name);
    tokenBinops.push((_options$binop = options.binop) != null ? _options$binop : -1);
    tokenBeforeExprs.push((_options$beforeExpr = options.beforeExpr) != null ? _options$beforeExpr : false);
    tokenStartsExprs.push((_options$startsExpr = options.startsExpr) != null ? _options$startsExpr : false);
    tokenPrefixes.push((_options$prefix = options.prefix) != null ? _options$prefix : false);
    tokenTypes.push(new ExportedTokenType(name, options));
    return tokenTypeCounter;
  }
  function createKeywordLike(name, options) {
    var _options$binop2, _options$beforeExpr2, _options$startsExpr2, _options$prefix2;
    if (options === void 0) {
      options = {};
    }
    ++tokenTypeCounter;
    keywords.set(name, tokenTypeCounter);
    tokenLabels.push(name);
    tokenBinops.push((_options$binop2 = options.binop) != null ? _options$binop2 : -1);
    tokenBeforeExprs.push((_options$beforeExpr2 = options.beforeExpr) != null ? _options$beforeExpr2 : false);
    tokenStartsExprs.push((_options$startsExpr2 = options.startsExpr) != null ? _options$startsExpr2 : false);
    tokenPrefixes.push((_options$prefix2 = options.prefix) != null ? _options$prefix2 : false);
    tokenTypes.push(new ExportedTokenType("name", options));
    return tokenTypeCounter;
  }
  var tt = {
    bracketL: createToken("[", {
      beforeExpr: beforeExpr,
      startsExpr: startsExpr
    }),
    bracketHashL: createToken("#[", {
      beforeExpr: beforeExpr,
      startsExpr: startsExpr
    }),
    bracketBarL: createToken("[|", {
      beforeExpr: beforeExpr,
      startsExpr: startsExpr
    }),
    bracketR: createToken("]"),
    bracketBarR: createToken("|]"),
    braceL: createToken("{", {
      beforeExpr: beforeExpr,
      startsExpr: startsExpr
    }),
    braceBarL: createToken("{|", {
      beforeExpr: beforeExpr,
      startsExpr: startsExpr
    }),
    braceHashL: createToken("#{", {
      beforeExpr: beforeExpr,
      startsExpr: startsExpr
    }),
    braceR: createToken("}"),
    braceBarR: createToken("|}"),
    parenL: createToken("(", {
      beforeExpr: beforeExpr,
      startsExpr: startsExpr
    }),
    parenR: createToken(")"),
    comma: createToken(",", {
      beforeExpr: beforeExpr
    }),
    semi: createToken(";", {
      beforeExpr: beforeExpr
    }),
    colon: createToken(":", {
      beforeExpr: beforeExpr
    }),
    doubleColon: createToken("::", {
      beforeExpr: beforeExpr
    }),
    dot: createToken("."),
    question: createToken("?", {
      beforeExpr: beforeExpr
    }),
    questionDot: createToken("?."),
    arrow: createToken("=>", {
      beforeExpr: beforeExpr
    }),
    template: createToken("template"),
    ellipsis: createToken("...", {
      beforeExpr: beforeExpr
    }),
    backQuote: createToken("`", {
      startsExpr: startsExpr
    }),
    dollarBraceL: createToken("${", {
      beforeExpr: beforeExpr,
      startsExpr: startsExpr
    }),
    templateTail: createToken("...`", {
      startsExpr: startsExpr
    }),
    templateNonTail: createToken("...${", {
      beforeExpr: beforeExpr,
      startsExpr: startsExpr
    }),
    at: createToken("@"),
    hash: createToken("#", {
      startsExpr: startsExpr
    }),
    interpreterDirective: createToken("#!..."),
    eq: createToken("=", {
      beforeExpr: beforeExpr,
      isAssign: isAssign
    }),
    assign: createToken("_=", {
      beforeExpr: beforeExpr,
      isAssign: isAssign
    }),
    slashAssign: createToken("_=", {
      beforeExpr: beforeExpr,
      isAssign: isAssign
    }),
    xorAssign: createToken("_=", {
      beforeExpr: beforeExpr,
      isAssign: isAssign
    }),
    moduloAssign: createToken("_=", {
      beforeExpr: beforeExpr,
      isAssign: isAssign
    }),
    incDec: createToken("++/--", {
      prefix: prefix,
      postfix: postfix,
      startsExpr: startsExpr
    }),
    bang: createToken("!", {
      beforeExpr: beforeExpr,
      prefix: prefix,
      startsExpr: startsExpr
    }),
    tilde: createToken("~", {
      beforeExpr: beforeExpr,
      prefix: prefix,
      startsExpr: startsExpr
    }),
    doubleCaret: createToken("^^", {
      startsExpr: startsExpr
    }),
    doubleAt: createToken("@@", {
      startsExpr: startsExpr
    }),
    pipeline: createBinop("|>", 0),
    nullishCoalescing: createBinop("??", 1),
    logicalOR: createBinop("||", 1),
    logicalAND: createBinop("&&", 2),
    bitwiseOR: createBinop("|", 3),
    bitwiseXOR: createBinop("^", 4),
    bitwiseAND: createBinop("&", 5),
    equality: createBinop("==/!=/===/!==", 6),
    lt: createBinop("</>/<=/>=", 7),
    gt: createBinop("</>/<=/>=", 7),
    relational: createBinop("</>/<=/>=", 7),
    bitShift: createBinop("<</>>/>>>", 8),
    bitShiftL: createBinop("<</>>/>>>", 8),
    bitShiftR: createBinop("<</>>/>>>", 8),
    plusMin: createToken("+/-", {
      beforeExpr: beforeExpr,
      binop: 9,
      prefix: prefix,
      startsExpr: startsExpr
    }),
    modulo: createToken("%", {
      binop: 10,
      startsExpr: startsExpr
    }),
    star: createToken("*", {
      binop: 10
    }),
    slash: createBinop("/", 10),
    exponent: createToken("**", {
      beforeExpr: beforeExpr,
      binop: 11,
      rightAssociative: true
    }),
    _in: createKeyword("in", {
      beforeExpr: beforeExpr,
      binop: 7
    }),
    _instanceof: createKeyword("instanceof", {
      beforeExpr: beforeExpr,
      binop: 7
    }),
    _break: createKeyword("break"),
    _case: createKeyword("case", {
      beforeExpr: beforeExpr
    }),
    _catch: createKeyword("catch"),
    _continue: createKeyword("continue"),
    _debugger: createKeyword("debugger"),
    _default: createKeyword("default", {
      beforeExpr: beforeExpr
    }),
    _else: createKeyword("else", {
      beforeExpr: beforeExpr
    }),
    _finally: createKeyword("finally"),
    _function: createKeyword("function", {
      startsExpr: startsExpr
    }),
    _if: createKeyword("if"),
    _return: createKeyword("return", {
      beforeExpr: beforeExpr
    }),
    _switch: createKeyword("switch"),
    _throw: createKeyword("throw", {
      beforeExpr: beforeExpr,
      prefix: prefix,
      startsExpr: startsExpr
    }),
    _try: createKeyword("try"),
    _var: createKeyword("var"),
    _const: createKeyword("const"),
    _with: createKeyword("with"),
    _new: createKeyword("new", {
      beforeExpr: beforeExpr,
      startsExpr: startsExpr
    }),
    _this: createKeyword("this", {
      startsExpr: startsExpr
    }),
    _super: createKeyword("super", {
      startsExpr: startsExpr
    }),
    _class: createKeyword("class", {
      startsExpr: startsExpr
    }),
    _extends: createKeyword("extends", {
      beforeExpr: beforeExpr
    }),
    _export: createKeyword("export"),
    _import: createKeyword("import", {
      startsExpr: startsExpr
    }),
    _null: createKeyword("null", {
      startsExpr: startsExpr
    }),
    _true: createKeyword("true", {
      startsExpr: startsExpr
    }),
    _false: createKeyword("false", {
      startsExpr: startsExpr
    }),
    _typeof: createKeyword("typeof", {
      beforeExpr: beforeExpr,
      prefix: prefix,
      startsExpr: startsExpr
    }),
    _void: createKeyword("void", {
      beforeExpr: beforeExpr,
      prefix: prefix,
      startsExpr: startsExpr
    }),
    _delete: createKeyword("delete", {
      beforeExpr: beforeExpr,
      prefix: prefix,
      startsExpr: startsExpr
    }),
    _do: createKeyword("do", {
      isLoop: isLoop,
      beforeExpr: beforeExpr
    }),
    _for: createKeyword("for", {
      isLoop: isLoop
    }),
    _while: createKeyword("while", {
      isLoop: isLoop
    }),
    _as: createKeywordLike("as", {
      startsExpr: startsExpr
    }),
    _assert: createKeywordLike("assert", {
      startsExpr: startsExpr
    }),
    _async: createKeywordLike("async", {
      startsExpr: startsExpr
    }),
    _await: createKeywordLike("await", {
      startsExpr: startsExpr
    }),
    _defer: createKeywordLike("defer", {
      startsExpr: startsExpr
    }),
    _from: createKeywordLike("from", {
      startsExpr: startsExpr
    }),
    _get: createKeywordLike("get", {
      startsExpr: startsExpr
    }),
    _let: createKeywordLike("let", {
      startsExpr: startsExpr
    }),
    _meta: createKeywordLike("meta", {
      startsExpr: startsExpr
    }),
    _of: createKeywordLike("of", {
      startsExpr: startsExpr
    }),
    _sent: createKeywordLike("sent", {
      startsExpr: startsExpr
    }),
    _set: createKeywordLike("set", {
      startsExpr: startsExpr
    }),
    _source: createKeywordLike("source", {
      startsExpr: startsExpr
    }),
    _static: createKeywordLike("static", {
      startsExpr: startsExpr
    }),
    _using: createKeywordLike("using", {
      startsExpr: startsExpr
    }),
    _yield: createKeywordLike("yield", {
      startsExpr: startsExpr
    }),
    _asserts: createKeywordLike("asserts", {
      startsExpr: startsExpr
    }),
    _checks: createKeywordLike("checks", {
      startsExpr: startsExpr
    }),
    _exports: createKeywordLike("exports", {
      startsExpr: startsExpr
    }),
    _global: createKeywordLike("global", {
      startsExpr: startsExpr
    }),
    _implements: createKeywordLike("implements", {
      startsExpr: startsExpr
    }),
    _intrinsic: createKeywordLike("intrinsic", {
      startsExpr: startsExpr
    }),
    _infer: createKeywordLike("infer", {
      startsExpr: startsExpr
    }),
    _is: createKeywordLike("is", {
      startsExpr: startsExpr
    }),
    _mixins: createKeywordLike("mixins", {
      startsExpr: startsExpr
    }),
    _proto: createKeywordLike("proto", {
      startsExpr: startsExpr
    }),
    _require: createKeywordLike("require", {
      startsExpr: startsExpr
    }),
    _satisfies: createKeywordLike("satisfies", {
      startsExpr: startsExpr
    }),
    _keyof: createKeywordLike("keyof", {
      startsExpr: startsExpr
    }),
    _readonly: createKeywordLike("readonly", {
      startsExpr: startsExpr
    }),
    _unique: createKeywordLike("unique", {
      startsExpr: startsExpr
    }),
    _abstract: createKeywordLike("abstract", {
      startsExpr: startsExpr
    }),
    _declare: createKeywordLike("declare", {
      startsExpr: startsExpr
    }),
    _enum: createKeywordLike("enum", {
      startsExpr: startsExpr
    }),
    _module: createKeywordLike("module", {
      startsExpr: startsExpr
    }),
    _namespace: createKeywordLike("namespace", {
      startsExpr: startsExpr
    }),
    _interface: createKeywordLike("interface", {
      startsExpr: startsExpr
    }),
    _type: createKeywordLike("type", {
      startsExpr: startsExpr
    }),
    _opaque: createKeywordLike("opaque", {
      startsExpr: startsExpr
    }),
    name: createToken("name", {
      startsExpr: startsExpr
    }),
    placeholder: createToken("%%", {
      startsExpr: startsExpr
    }),
    string: createToken("string", {
      startsExpr: startsExpr
    }),
    num: createToken("num", {
      startsExpr: startsExpr
    }),
    bigint: createToken("bigint", {
      startsExpr: startsExpr
    }),
    decimal: createToken("decimal", {
      startsExpr: startsExpr
    }),
    regexp: createToken("regexp", {
      startsExpr: startsExpr
    }),
    privateName: createToken("#name", {
      startsExpr: startsExpr
    }),
    eof: createToken("eof"),
    jsxName: createToken("jsxName"),
    jsxText: createToken("jsxText", {
      beforeExpr: beforeExpr
    }),
    jsxTagStart: createToken("jsxTagStart", {
      startsExpr: startsExpr
    }),
    jsxTagEnd: createToken("jsxTagEnd")
  };
  function tokenIsIdentifier(token) {
    return token >= 93 && token <= 133;
  }
  function tokenKeywordOrIdentifierIsKeyword(token) {
    return token <= 92;
  }
  function tokenIsKeywordOrIdentifier(token) {
    return token >= 58 && token <= 133;
  }
  function tokenIsLiteralPropertyName(token) {
    return token >= 58 && token <= 137;
  }
  function tokenComesBeforeExpression(token) {
    return tokenBeforeExprs[token];
  }
  function tokenCanStartExpression(token) {
    return tokenStartsExprs[token];
  }
  function tokenIsAssignment(token) {
    return token >= 29 && token <= 33;
  }
  function tokenIsFlowInterfaceOrTypeOrOpaque(token) {
    return token >= 129 && token <= 131;
  }
  function tokenIsLoop(token) {
    return token >= 90 && token <= 92;
  }
  function tokenIsKeyword(token) {
    return token >= 58 && token <= 92;
  }
  function tokenIsOperator(token) {
    return token >= 39 && token <= 59;
  }
  function tokenIsPostfix(token) {
    return token === 34;
  }
  function tokenIsPrefix(token) {
    return tokenPrefixes[token];
  }
  function tokenIsTSTypeOperator(token) {
    return token >= 121 && token <= 123;
  }
  function tokenIsTSDeclarationStart(token) {
    return token >= 124 && token <= 130;
  }
  function tokenLabelName(token) {
    return tokenLabels[token];
  }
  function tokenOperatorPrecedence(token) {
    return tokenBinops[token];
  }
  function tokenIsRightAssociative(token) {
    return token === 57;
  }
  function tokenIsTemplate(token) {
    return token >= 24 && token <= 25;
  }
  function getExportedToken(token) {
    return tokenTypes[token];
  }
  {
    tokenTypes[8].updateContext = function (context) {
      context.pop();
    };
    tokenTypes[5].updateContext = tokenTypes[7].updateContext = tokenTypes[23].updateContext = function (context) {
      context.push(types.brace);
    };
    tokenTypes[22].updateContext = function (context) {
      if (context[context.length - 1] === types.template) {
        context.pop();
      } else {
        context.push(types.template);
      }
    };
    tokenTypes[143].updateContext = function (context) {
      context.push(types.j_expr, types.j_oTag);
    };
  }

  function isIteratorStart(current, next, next2) {
    return current === 64 && next === 64 && isIdentifierStart(next2);
  }
  var reservedWordLikeSet = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
  function canBeReservedWord(word) {
    return reservedWordLikeSet.has(word);
  }

  var ScopeFlag = {
    OTHER: 0,
    PROGRAM: 1,
    FUNCTION_BASE: 2,
    ARROW: 4,
    SIMPLE_CATCH: 8,
    SUPER: 16,
    DIRECT_SUPER: 32,
    CLASS_BASE: 64,
    STATIC_BLOCK: 128,
    SWITCH: 256,
    NEW_TARGET: 512,
    TS_MODULE: 1024,
    FUNCTION: 514,
    CLASS: 576,
    VAR: 1667
  };
  var BindingFlag = {
    KIND_VALUE: 1,
    KIND_TYPE: 2,
    SCOPE_VAR: 4,
    SCOPE_LEXICAL: 8,
    SCOPE_FUNCTION: 16,
    SCOPE_OUTSIDE: 32,
    FLAG_NONE: 64,
    FLAG_CLASS: 128,
    FLAG_TS_ENUM: 256,
    FLAG_TS_CONST_ENUM: 512,
    FLAG_TS_EXPORT_ONLY: 1024,
    FLAG_FLOW_DECLARE_FN: 2048,
    FLAG_TS_IMPORT: 4096,
    FLAG_NO_LET_IN_LEXICAL: 8192,
    TYPE_CLASS: 8331,
    TYPE_LEXICAL: 8201,
    TYPE_CATCH_PARAM: 9,
    TYPE_VAR: 5,
    TYPE_FUNCTION: 17,
    TYPE_TS_INTERFACE: 130,
    TYPE_TS_TYPE: 2,
    TYPE_TS_ENUM: 8459,
    TYPE_TS_AMBIENT: 1024,
    TYPE_NONE: 64,
    TYPE_OUTSIDE: 65,
    TYPE_TS_CONST_ENUM: 8971,
    TYPE_TS_NAMESPACE: 1024,
    TYPE_TS_TYPE_IMPORT: 4098,
    TYPE_TS_VALUE_IMPORT: 4096,
    TYPE_FLOW_DECLARE_FN: 2048
  };
  var ClassElementType = {
    OTHER: 0,
    FLAG_STATIC: 4,
    KIND_GETTER: 2,
    KIND_SETTER: 1,
    KIND_ACCESSOR: 3,
    STATIC_GETTER: 6,
    STATIC_SETTER: 5,
    INSTANCE_GETTER: 2,
    INSTANCE_SETTER: 1
  };

  var NameType = {
    Var: 1,
    Lexical: 2,
    Function: 4
  };
  var Scope$2 = _createClass(function Scope(flags) {
    this.flags = 0;
    this.names = new Map();
    this.firstLexicalName = "";
    this.flags = flags;
  });
  var ScopeHandler = function () {
    function ScopeHandler(parser, inModule) {
      this.parser = void 0;
      this.scopeStack = [];
      this.inModule = void 0;
      this.undefinedExports = new Map();
      this.parser = parser;
      this.inModule = inModule;
    }
    var _proto = ScopeHandler.prototype;
    _proto.createScope = function createScope(flags) {
      return new Scope$2(flags);
    };
    _proto.enter = function enter(flags) {
      this.scopeStack.push(this.createScope(flags));
    };
    _proto.exit = function exit() {
      var scope = this.scopeStack.pop();
      return scope.flags;
    };
    _proto.treatFunctionsAsVarInScope = function treatFunctionsAsVarInScope(scope) {
      return !!(scope.flags & (ScopeFlag.FUNCTION_BASE | ScopeFlag.STATIC_BLOCK) || !this.parser.inModule && scope.flags & ScopeFlag.PROGRAM);
    };
    _proto.declareName = function declareName(name, bindingType, loc) {
      var scope = this.currentScope();
      if (bindingType & BindingFlag.SCOPE_LEXICAL || bindingType & BindingFlag.SCOPE_FUNCTION) {
        this.checkRedeclarationInScope(scope, name, bindingType, loc);
        var type = scope.names.get(name) || 0;
        if (bindingType & BindingFlag.SCOPE_FUNCTION) {
          type = type | NameType.Function;
        } else {
          if (!scope.firstLexicalName) {
            scope.firstLexicalName = name;
          }
          type = type | NameType.Lexical;
        }
        scope.names.set(name, type);
        if (bindingType & BindingFlag.SCOPE_LEXICAL) {
          this.maybeExportDefined(scope, name);
        }
      } else if (bindingType & BindingFlag.SCOPE_VAR) {
        for (var i = this.scopeStack.length - 1; i >= 0; --i) {
          scope = this.scopeStack[i];
          this.checkRedeclarationInScope(scope, name, bindingType, loc);
          scope.names.set(name, (scope.names.get(name) || 0) | NameType.Var);
          this.maybeExportDefined(scope, name);
          if (scope.flags & ScopeFlag.VAR) break;
        }
      }
      if (this.parser.inModule && scope.flags & ScopeFlag.PROGRAM) {
        this.undefinedExports["delete"](name);
      }
    };
    _proto.maybeExportDefined = function maybeExportDefined(scope, name) {
      if (this.parser.inModule && scope.flags & ScopeFlag.PROGRAM) {
        this.undefinedExports["delete"](name);
      }
    };
    _proto.checkRedeclarationInScope = function checkRedeclarationInScope(scope, name, bindingType, loc) {
      if (this.isRedeclaredInScope(scope, name, bindingType)) {
        this.parser.raise(Errors.VarRedeclaration, loc, {
          identifierName: name
        });
      }
    };
    _proto.isRedeclaredInScope = function isRedeclaredInScope(scope, name, bindingType) {
      if (!(bindingType & BindingFlag.KIND_VALUE)) return false;
      if (bindingType & BindingFlag.SCOPE_LEXICAL) {
        return scope.names.has(name);
      }
      var type = scope.names.get(name);
      if (bindingType & BindingFlag.SCOPE_FUNCTION) {
        return (type & NameType.Lexical) > 0 || !this.treatFunctionsAsVarInScope(scope) && (type & NameType.Var) > 0;
      }
      return (type & NameType.Lexical) > 0 && !(scope.flags & ScopeFlag.SIMPLE_CATCH && scope.firstLexicalName === name) || !this.treatFunctionsAsVarInScope(scope) && (type & NameType.Function) > 0;
    };
    _proto.checkLocalExport = function checkLocalExport(id) {
      var name = id.name;
      var topLevelScope = this.scopeStack[0];
      if (!topLevelScope.names.has(name)) {
        this.undefinedExports.set(name, id.loc.start);
      }
    };
    _proto.currentScope = function currentScope() {
      return this.scopeStack[this.scopeStack.length - 1];
    };
    _proto.currentVarScopeFlags = function currentVarScopeFlags() {
      for (var i = this.scopeStack.length - 1;; i--) {
        var flags = this.scopeStack[i].flags;
        if (flags & ScopeFlag.VAR) {
          return flags;
        }
      }
    };
    _proto.currentThisScopeFlags = function currentThisScopeFlags() {
      for (var i = this.scopeStack.length - 1;; i--) {
        var flags = this.scopeStack[i].flags;
        if (flags & (ScopeFlag.VAR | ScopeFlag.CLASS_BASE) && !(flags & ScopeFlag.ARROW)) {
          return flags;
        }
      }
    };
    return _createClass(ScopeHandler, [{
      key: "inTopLevel",
      get: function get() {
        return (this.currentScope().flags & ScopeFlag.PROGRAM) > 0;
      }
    }, {
      key: "inFunction",
      get: function get() {
        return (this.currentVarScopeFlags() & ScopeFlag.FUNCTION_BASE) > 0;
      }
    }, {
      key: "allowSuper",
      get: function get() {
        return (this.currentThisScopeFlags() & ScopeFlag.SUPER) > 0;
      }
    }, {
      key: "allowDirectSuper",
      get: function get() {
        return (this.currentThisScopeFlags() & ScopeFlag.DIRECT_SUPER) > 0;
      }
    }, {
      key: "allowNewTarget",
      get: function get() {
        return (this.currentThisScopeFlags() & ScopeFlag.NEW_TARGET) > 0;
      }
    }, {
      key: "inClass",
      get: function get() {
        return (this.currentThisScopeFlags() & ScopeFlag.CLASS_BASE) > 0;
      }
    }, {
      key: "inClassAndNotInNonArrowFunction",
      get: function get() {
        var flags = this.currentThisScopeFlags();
        return (flags & ScopeFlag.CLASS_BASE) > 0 && (flags & ScopeFlag.FUNCTION_BASE) === 0;
      }
    }, {
      key: "inStaticBlock",
      get: function get() {
        for (var i = this.scopeStack.length - 1;; i--) {
          var flags = this.scopeStack[i].flags;
          if (flags & ScopeFlag.STATIC_BLOCK) {
            return true;
          }
          if (flags & (ScopeFlag.VAR | ScopeFlag.CLASS_BASE)) {
            return false;
          }
        }
      }
    }, {
      key: "inNonArrowFunction",
      get: function get() {
        return (this.currentThisScopeFlags() & ScopeFlag.FUNCTION_BASE) > 0;
      }
    }, {
      key: "inBareCaseStatement",
      get: function get() {
        return (this.currentScope().flags & ScopeFlag.SWITCH) > 0;
      }
    }, {
      key: "treatFunctionsAsVar",
      get: function get() {
        return this.treatFunctionsAsVarInScope(this.currentScope());
      }
    }]);
  }();

  var FlowScope = function (_Scope) {
    function FlowScope() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _Scope.call.apply(_Scope, [this].concat(args)) || this;
      _this.declareFunctions = new Set();
      return _this;
    }
    _inherits(FlowScope, _Scope);
    return _createClass(FlowScope);
  }(Scope$2);
  var FlowScopeHandler = function (_ScopeHandler) {
    function FlowScopeHandler() {
      return _ScopeHandler.apply(this, arguments) || this;
    }
    _inherits(FlowScopeHandler, _ScopeHandler);
    var _proto = FlowScopeHandler.prototype;
    _proto.createScope = function createScope(flags) {
      return new FlowScope(flags);
    };
    _proto.declareName = function declareName(name, bindingType, loc) {
      var scope = this.currentScope();
      if (bindingType & BindingFlag.FLAG_FLOW_DECLARE_FN) {
        this.checkRedeclarationInScope(scope, name, bindingType, loc);
        this.maybeExportDefined(scope, name);
        scope.declareFunctions.add(name);
        return;
      }
      _ScopeHandler.prototype.declareName.call(this, name, bindingType, loc);
    };
    _proto.isRedeclaredInScope = function isRedeclaredInScope(scope, name, bindingType) {
      if (_ScopeHandler.prototype.isRedeclaredInScope.call(this, scope, name, bindingType)) return true;
      if (bindingType & BindingFlag.FLAG_FLOW_DECLARE_FN && !scope.declareFunctions.has(name)) {
        var type = scope.names.get(name);
        return (type & NameType.Function) > 0 || (type & NameType.Lexical) > 0;
      }
      return false;
    };
    _proto.checkLocalExport = function checkLocalExport(id) {
      if (!this.scopeStack[0].declareFunctions.has(id.name)) {
        _ScopeHandler.prototype.checkLocalExport.call(this, id);
      }
    };
    return _createClass(FlowScopeHandler);
  }(ScopeHandler);

  var _templateObject$L;
  var reservedTypes = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]);
  var FlowErrors = ParseErrorEnum(_templateObject$L || (_templateObject$L = _taggedTemplateLiteralLoose(["flow"])))({
    AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
    AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
    AssignReservedType: function AssignReservedType(_ref) {
      var reservedType = _ref.reservedType;
      return "Cannot overwrite reserved type " + reservedType + ".";
    },
    DeclareClassElement: "The `declare` modifier can only appear on class fields.",
    DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
    DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
    EnumBooleanMemberNotInitialized: function EnumBooleanMemberNotInitialized(_ref2) {
      var memberName = _ref2.memberName,
        enumName = _ref2.enumName;
      return "Boolean enum members need to be initialized. Use either `" + memberName + " = true,` or `" + memberName + " = false,` in enum `" + enumName + "`.";
    },
    EnumDuplicateMemberName: function EnumDuplicateMemberName(_ref3) {
      var memberName = _ref3.memberName,
        enumName = _ref3.enumName;
      return "Enum member names need to be unique, but the name `" + memberName + "` has already been used before in enum `" + enumName + "`.";
    },
    EnumInconsistentMemberValues: function EnumInconsistentMemberValues(_ref4) {
      var enumName = _ref4.enumName;
      return "Enum `" + enumName + "` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.";
    },
    EnumInvalidExplicitType: function EnumInvalidExplicitType(_ref5) {
      var invalidEnumType = _ref5.invalidEnumType,
        enumName = _ref5.enumName;
      return "Enum type `" + invalidEnumType + "` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `" + enumName + "`.";
    },
    EnumInvalidExplicitTypeUnknownSupplied: function EnumInvalidExplicitTypeUnknownSupplied(_ref6) {
      var enumName = _ref6.enumName;
      return "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `" + enumName + "`.";
    },
    EnumInvalidMemberInitializerPrimaryType: function EnumInvalidMemberInitializerPrimaryType(_ref7) {
      var enumName = _ref7.enumName,
        memberName = _ref7.memberName,
        explicitType = _ref7.explicitType;
      return "Enum `" + enumName + "` has type `" + explicitType + "`, so the initializer of `" + memberName + "` needs to be a " + explicitType + " literal.";
    },
    EnumInvalidMemberInitializerSymbolType: function EnumInvalidMemberInitializerSymbolType(_ref8) {
      var enumName = _ref8.enumName,
        memberName = _ref8.memberName;
      return "Symbol enum members cannot be initialized. Use `" + memberName + ",` in enum `" + enumName + "`.";
    },
    EnumInvalidMemberInitializerUnknownType: function EnumInvalidMemberInitializerUnknownType(_ref9) {
      var enumName = _ref9.enumName,
        memberName = _ref9.memberName;
      return "The enum member initializer for `" + memberName + "` needs to be a literal (either a boolean, number, or string) in enum `" + enumName + "`.";
    },
    EnumInvalidMemberName: function EnumInvalidMemberName(_ref0) {
      var enumName = _ref0.enumName,
        memberName = _ref0.memberName,
        suggestion = _ref0.suggestion;
      return "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `" + memberName + "`, consider using `" + suggestion + "`, in enum `" + enumName + "`.";
    },
    EnumNumberMemberNotInitialized: function EnumNumberMemberNotInitialized(_ref1) {
      var enumName = _ref1.enumName,
        memberName = _ref1.memberName;
      return "Number enum members need to be initialized, e.g. `" + memberName + " = 1` in enum `" + enumName + "`.";
    },
    EnumStringMemberInconsistentlyInitialized: function EnumStringMemberInconsistentlyInitialized(_ref10) {
      var enumName = _ref10.enumName;
      return "String enum members need to consistently either all use initializers, or use no initializers, in enum `" + enumName + "`.";
    },
    GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
    ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.",
    ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
    InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
    InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
    InexactVariance: "Explicit inexact syntax cannot have variance.",
    InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
    MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
    NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
    NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
    PatternIsOptional: Object.assign({
      message: "A binding pattern parameter cannot be optional in an implementation signature."
    }, {
      reasonCode: "OptionalBindingPattern"
    }),
    SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
    SpreadVariance: "Spread properties cannot have variance.",
    ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
    ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
    ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
    ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
    ThisParamNoDefault: "The `this` parameter may not have a default value.",
    TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
    TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
    UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
    UnexpectedReservedType: function UnexpectedReservedType(_ref11) {
      var reservedType = _ref11.reservedType;
      return "Unexpected reserved type " + reservedType + ".";
    },
    UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
    UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
    UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
    UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
    UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
    UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
    UnsupportedDeclareExportKind: function UnsupportedDeclareExportKind(_ref12) {
      var unsupportedExportKind = _ref12.unsupportedExportKind,
        suggestion = _ref12.suggestion;
      return "`declare export " + unsupportedExportKind + "` is not supported. Use `" + suggestion + "` instead.";
    },
    UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
    UnterminatedFlowComment: "Unterminated flow-comment."
  });
  function isEsModuleType(bodyElement) {
    return bodyElement.type === "DeclareExportAllDeclaration" || bodyElement.type === "DeclareExportDeclaration" && (!bodyElement.declaration || bodyElement.declaration.type !== "TypeAlias" && bodyElement.declaration.type !== "InterfaceDeclaration");
  }
  function hasTypeImportKind(node) {
    return node.importKind === "type" || node.importKind === "typeof";
  }
  var exportSuggestions = {
    "const": "declare export var",
    "let": "declare export var",
    type: "export type",
    "interface": "export interface"
  };
  function partition(list, test) {
    var list1 = [];
    var list2 = [];
    for (var i = 0; i < list.length; i++) {
      (test(list[i], i, list) ? list1 : list2).push(list[i]);
    }
    return [list1, list2];
  }
  var FLOW_PRAGMA_REGEX = /\*?\s*@((?:no)?flow)\b/;
  var flow = (function (superClass) {
    return function (_superClass) {
      function FlowParserMixin() {
        var _this2;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this2 = _superClass.call.apply(_superClass, [this].concat(args)) || this;
        _this2.flowPragma = undefined;
        return _this2;
      }
      _inherits(FlowParserMixin, _superClass);
      var _proto = FlowParserMixin.prototype;
      _proto.getScopeHandler = function getScopeHandler() {
        return FlowScopeHandler;
      };
      _proto.shouldParseTypes = function shouldParseTypes() {
        return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
      };
      _proto.finishToken = function finishToken(type, val) {
        if (type !== 134 && type !== 13 && type !== 28) {
          if (this.flowPragma === undefined) {
            this.flowPragma = null;
          }
        }
        _superClass.prototype.finishToken.call(this, type, val);
      };
      _proto.addComment = function addComment(comment) {
        if (this.flowPragma === undefined) {
          var matches = FLOW_PRAGMA_REGEX.exec(comment.value);
          if (!matches) ; else if (matches[1] === "flow") {
            this.flowPragma = "flow";
          } else if (matches[1] === "noflow") {
            this.flowPragma = "noflow";
          } else {
            throw new Error("Unexpected flow pragma");
          }
        }
        _superClass.prototype.addComment.call(this, comment);
      };
      _proto.flowParseTypeInitialiser = function flowParseTypeInitialiser(tok) {
        var oldInType = this.state.inType;
        this.state.inType = true;
        this.expect(tok || 14);
        var type = this.flowParseType();
        this.state.inType = oldInType;
        return type;
      };
      _proto.flowParsePredicate = function flowParsePredicate() {
        var node = this.startNode();
        var moduloLoc = this.state.startLoc;
        this.next();
        this.expectContextual(110);
        if (this.state.lastTokStartLoc.index > moduloLoc.index + 1) {
          this.raise(FlowErrors.UnexpectedSpaceBetweenModuloChecks, moduloLoc);
        }
        if (this.eat(10)) {
          node.value = _superClass.prototype.parseExpression.call(this);
          this.expect(11);
          return this.finishNode(node, "DeclaredPredicate");
        } else {
          return this.finishNode(node, "InferredPredicate");
        }
      };
      _proto.flowParseTypeAndPredicateInitialiser = function flowParseTypeAndPredicateInitialiser() {
        var oldInType = this.state.inType;
        this.state.inType = true;
        this.expect(14);
        var type = null;
        var predicate = null;
        if (this.match(54)) {
          this.state.inType = oldInType;
          predicate = this.flowParsePredicate();
        } else {
          type = this.flowParseType();
          this.state.inType = oldInType;
          if (this.match(54)) {
            predicate = this.flowParsePredicate();
          }
        }
        return [type, predicate];
      };
      _proto.flowParseDeclareClass = function flowParseDeclareClass(node) {
        this.next();
        this.flowParseInterfaceish(node, true);
        return this.finishNode(node, "DeclareClass");
      };
      _proto.flowParseDeclareFunction = function flowParseDeclareFunction(node) {
        this.next();
        var id = node.id = this.parseIdentifier();
        var typeNode = this.startNode();
        var typeContainer = this.startNode();
        if (this.match(47)) {
          typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          typeNode.typeParameters = null;
        }
        this.expect(10);
        var tmp = this.flowParseFunctionTypeParams();
        typeNode.params = tmp.params;
        typeNode.rest = tmp.rest;
        typeNode["this"] = tmp._this;
        this.expect(11);
        var _this$flowParseTypeAn = this.flowParseTypeAndPredicateInitialiser();
        typeNode.returnType = _this$flowParseTypeAn[0];
        node.predicate = _this$flowParseTypeAn[1];
        typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
        id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");
        this.resetEndLocation(id);
        this.semicolon();
        this.scope.declareName(node.id.name, BindingFlag.TYPE_FLOW_DECLARE_FN, node.id.loc.start);
        return this.finishNode(node, "DeclareFunction");
      };
      _proto.flowParseDeclare = function flowParseDeclare(node, insideModule) {
        if (this.match(80)) {
          return this.flowParseDeclareClass(node);
        } else if (this.match(68)) {
          return this.flowParseDeclareFunction(node);
        } else if (this.match(74)) {
          return this.flowParseDeclareVariable(node);
        } else if (this.eatContextual(127)) {
          if (this.match(16)) {
            return this.flowParseDeclareModuleExports(node);
          } else {
            if (insideModule) {
              this.raise(FlowErrors.NestedDeclareModule, this.state.lastTokStartLoc);
            }
            return this.flowParseDeclareModule(node);
          }
        } else if (this.isContextual(130)) {
          return this.flowParseDeclareTypeAlias(node);
        } else if (this.isContextual(131)) {
          return this.flowParseDeclareOpaqueType(node);
        } else if (this.isContextual(129)) {
          return this.flowParseDeclareInterface(node);
        } else if (this.match(82)) {
          return this.flowParseDeclareExportDeclaration(node, insideModule);
        } else {
          this.unexpected();
        }
      };
      _proto.flowParseDeclareVariable = function flowParseDeclareVariable(node) {
        this.next();
        node.id = this.flowParseTypeAnnotatableIdentifier(true);
        this.scope.declareName(node.id.name, BindingFlag.TYPE_VAR, node.id.loc.start);
        this.semicolon();
        return this.finishNode(node, "DeclareVariable");
      };
      _proto.flowParseDeclareModule = function flowParseDeclareModule(node) {
        var _this3 = this;
        this.scope.enter(ScopeFlag.OTHER);
        if (this.match(134)) {
          node.id = _superClass.prototype.parseExprAtom.call(this);
        } else {
          node.id = this.parseIdentifier();
        }
        var bodyNode = node.body = this.startNode();
        var body = bodyNode.body = [];
        this.expect(5);
        while (!this.match(8)) {
          var _bodyNode = this.startNode();
          if (this.match(83)) {
            this.next();
            if (!this.isContextual(130) && !this.match(87)) {
              this.raise(FlowErrors.InvalidNonTypeImportInDeclareModule, this.state.lastTokStartLoc);
            }
            _superClass.prototype.parseImport.call(this, _bodyNode);
          } else {
            this.expectContextual(125, FlowErrors.UnsupportedStatementInDeclareModule);
            _bodyNode = this.flowParseDeclare(_bodyNode, true);
          }
          body.push(_bodyNode);
        }
        this.scope.exit();
        this.expect(8);
        this.finishNode(bodyNode, "BlockStatement");
        var kind = null;
        var hasModuleExport = false;
        body.forEach(function (bodyElement) {
          if (isEsModuleType(bodyElement)) {
            if (kind === "CommonJS") {
              _this3.raise(FlowErrors.AmbiguousDeclareModuleKind, bodyElement);
            }
            kind = "ES";
          } else if (bodyElement.type === "DeclareModuleExports") {
            if (hasModuleExport) {
              _this3.raise(FlowErrors.DuplicateDeclareModuleExports, bodyElement);
            }
            if (kind === "ES") {
              _this3.raise(FlowErrors.AmbiguousDeclareModuleKind, bodyElement);
            }
            kind = "CommonJS";
            hasModuleExport = true;
          }
        });
        node.kind = kind || "CommonJS";
        return this.finishNode(node, "DeclareModule");
      };
      _proto.flowParseDeclareExportDeclaration = function flowParseDeclareExportDeclaration(node, insideModule) {
        this.expect(82);
        if (this.eat(65)) {
          if (this.match(68) || this.match(80)) {
            node.declaration = this.flowParseDeclare(this.startNode());
          } else {
            node.declaration = this.flowParseType();
            this.semicolon();
          }
          node["default"] = true;
          return this.finishNode(node, "DeclareExportDeclaration");
        } else {
          if (this.match(75) || this.isLet() || (this.isContextual(130) || this.isContextual(129)) && !insideModule) {
            var label = this.state.value;
            throw this.raise(FlowErrors.UnsupportedDeclareExportKind, this.state.startLoc, {
              unsupportedExportKind: label,
              suggestion: exportSuggestions[label]
            });
          }
          if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(131)) {
            node.declaration = this.flowParseDeclare(this.startNode());
            node["default"] = false;
            return this.finishNode(node, "DeclareExportDeclaration");
          } else if (this.match(55) || this.match(5) || this.isContextual(129) || this.isContextual(130) || this.isContextual(131)) {
            node = this.parseExport(node, null);
            if (node.type === "ExportNamedDeclaration") {
              node["default"] = false;
              delete node.exportKind;
              return this.castNodeTo(node, "DeclareExportDeclaration");
            } else {
              return this.castNodeTo(node, "DeclareExportAllDeclaration");
            }
          }
        }
        this.unexpected();
      };
      _proto.flowParseDeclareModuleExports = function flowParseDeclareModuleExports(node) {
        this.next();
        this.expectContextual(111);
        node.typeAnnotation = this.flowParseTypeAnnotation();
        this.semicolon();
        return this.finishNode(node, "DeclareModuleExports");
      };
      _proto.flowParseDeclareTypeAlias = function flowParseDeclareTypeAlias(node) {
        this.next();
        var finished = this.flowParseTypeAlias(node);
        this.castNodeTo(finished, "DeclareTypeAlias");
        return finished;
      };
      _proto.flowParseDeclareOpaqueType = function flowParseDeclareOpaqueType(node) {
        this.next();
        var finished = this.flowParseOpaqueType(node, true);
        this.castNodeTo(finished, "DeclareOpaqueType");
        return finished;
      };
      _proto.flowParseDeclareInterface = function flowParseDeclareInterface(node) {
        this.next();
        this.flowParseInterfaceish(node, false);
        return this.finishNode(node, "DeclareInterface");
      };
      _proto.flowParseInterfaceish = function flowParseInterfaceish(node, isClass) {
        node.id = this.flowParseRestrictedIdentifier(!isClass, true);
        this.scope.declareName(node.id.name, isClass ? BindingFlag.TYPE_FUNCTION : BindingFlag.TYPE_LEXICAL, node.id.loc.start);
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          node.typeParameters = null;
        }
        node["extends"] = [];
        if (this.eat(81)) {
          do {
            node["extends"].push(this.flowParseInterfaceExtends());
          } while (!isClass && this.eat(12));
        }
        if (isClass) {
          node["implements"] = [];
          node.mixins = [];
          if (this.eatContextual(117)) {
            do {
              node.mixins.push(this.flowParseInterfaceExtends());
            } while (this.eat(12));
          }
          if (this.eatContextual(113)) {
            do {
              node["implements"].push(this.flowParseInterfaceExtends());
            } while (this.eat(12));
          }
        }
        node.body = this.flowParseObjectType({
          allowStatic: isClass,
          allowExact: false,
          allowSpread: false,
          allowProto: isClass,
          allowInexact: false
        });
      };
      _proto.flowParseInterfaceExtends = function flowParseInterfaceExtends() {
        var node = this.startNode();
        node.id = this.flowParseQualifiedTypeIdentifier();
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterInstantiation();
        } else {
          node.typeParameters = null;
        }
        return this.finishNode(node, "InterfaceExtends");
      };
      _proto.flowParseInterface = function flowParseInterface(node) {
        this.flowParseInterfaceish(node, false);
        return this.finishNode(node, "InterfaceDeclaration");
      };
      _proto.checkNotUnderscore = function checkNotUnderscore(word) {
        if (word === "_") {
          this.raise(FlowErrors.UnexpectedReservedUnderscore, this.state.startLoc);
        }
      };
      _proto.checkReservedType = function checkReservedType(word, startLoc, declaration) {
        if (!reservedTypes.has(word)) return;
        this.raise(declaration ? FlowErrors.AssignReservedType : FlowErrors.UnexpectedReservedType, startLoc, {
          reservedType: word
        });
      };
      _proto.flowParseRestrictedIdentifier = function flowParseRestrictedIdentifier(liberal, declaration) {
        this.checkReservedType(this.state.value, this.state.startLoc, declaration);
        return this.parseIdentifier(liberal);
      };
      _proto.flowParseTypeAlias = function flowParseTypeAlias(node) {
        node.id = this.flowParseRestrictedIdentifier(false, true);
        this.scope.declareName(node.id.name, BindingFlag.TYPE_LEXICAL, node.id.loc.start);
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          node.typeParameters = null;
        }
        node.right = this.flowParseTypeInitialiser(29);
        this.semicolon();
        return this.finishNode(node, "TypeAlias");
      };
      _proto.flowParseOpaqueType = function flowParseOpaqueType(node, declare) {
        this.expectContextual(130);
        node.id = this.flowParseRestrictedIdentifier(true, true);
        this.scope.declareName(node.id.name, BindingFlag.TYPE_LEXICAL, node.id.loc.start);
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          node.typeParameters = null;
        }
        node.supertype = null;
        if (this.match(14)) {
          node.supertype = this.flowParseTypeInitialiser(14);
        }
        node.impltype = null;
        if (!declare) {
          node.impltype = this.flowParseTypeInitialiser(29);
        }
        this.semicolon();
        return this.finishNode(node, "OpaqueType");
      };
      _proto.flowParseTypeParameter = function flowParseTypeParameter(requireDefault) {
        if (requireDefault === void 0) {
          requireDefault = false;
        }
        var nodeStartLoc = this.state.startLoc;
        var node = this.startNode();
        var variance = this.flowParseVariance();
        var ident = this.flowParseTypeAnnotatableIdentifier();
        node.name = ident.name;
        node.variance = variance;
        node.bound = ident.typeAnnotation;
        if (this.match(29)) {
          this.eat(29);
          node["default"] = this.flowParseType();
        } else {
          if (requireDefault) {
            this.raise(FlowErrors.MissingTypeParamDefault, nodeStartLoc);
          }
        }
        return this.finishNode(node, "TypeParameter");
      };
      _proto.flowParseTypeParameterDeclaration = function flowParseTypeParameterDeclaration() {
        var oldInType = this.state.inType;
        var node = this.startNode();
        node.params = [];
        this.state.inType = true;
        if (this.match(47) || this.match(143)) {
          this.next();
        } else {
          this.unexpected();
        }
        var defaultRequired = false;
        do {
          var typeParameter = this.flowParseTypeParameter(defaultRequired);
          node.params.push(typeParameter);
          if (typeParameter["default"]) {
            defaultRequired = true;
          }
          if (!this.match(48)) {
            this.expect(12);
          }
        } while (!this.match(48));
        this.expect(48);
        this.state.inType = oldInType;
        return this.finishNode(node, "TypeParameterDeclaration");
      };
      _proto.flowInTopLevelContext = function flowInTopLevelContext(cb) {
        if (this.curContext() !== types.brace) {
          var oldContext = this.state.context;
          this.state.context = [oldContext[0]];
          try {
            return cb();
          } finally {
            this.state.context = oldContext;
          }
        } else {
          return cb();
        }
      };
      _proto.flowParseTypeParameterInstantiationInExpression = function flowParseTypeParameterInstantiationInExpression() {
        if (this.reScan_lt() !== 47) return;
        return this.flowParseTypeParameterInstantiation();
      };
      _proto.flowParseTypeParameterInstantiation = function flowParseTypeParameterInstantiation() {
        var _this4 = this;
        var node = this.startNode();
        var oldInType = this.state.inType;
        this.state.inType = true;
        node.params = [];
        this.flowInTopLevelContext(function () {
          _this4.expect(47);
          var oldNoAnonFunctionType = _this4.state.noAnonFunctionType;
          _this4.state.noAnonFunctionType = false;
          while (!_this4.match(48)) {
            node.params.push(_this4.flowParseType());
            if (!_this4.match(48)) {
              _this4.expect(12);
            }
          }
          _this4.state.noAnonFunctionType = oldNoAnonFunctionType;
        });
        this.state.inType = oldInType;
        if (!this.state.inType && this.curContext() === types.brace) {
          this.reScan_lt_gt();
        }
        this.expect(48);
        return this.finishNode(node, "TypeParameterInstantiation");
      };
      _proto.flowParseTypeParameterInstantiationCallOrNew = function flowParseTypeParameterInstantiationCallOrNew() {
        if (this.reScan_lt() !== 47) return;
        var node = this.startNode();
        var oldInType = this.state.inType;
        node.params = [];
        this.state.inType = true;
        this.expect(47);
        while (!this.match(48)) {
          node.params.push(this.flowParseTypeOrImplicitInstantiation());
          if (!this.match(48)) {
            this.expect(12);
          }
        }
        this.expect(48);
        this.state.inType = oldInType;
        return this.finishNode(node, "TypeParameterInstantiation");
      };
      _proto.flowParseInterfaceType = function flowParseInterfaceType() {
        var node = this.startNode();
        this.expectContextual(129);
        node["extends"] = [];
        if (this.eat(81)) {
          do {
            node["extends"].push(this.flowParseInterfaceExtends());
          } while (this.eat(12));
        }
        node.body = this.flowParseObjectType({
          allowStatic: false,
          allowExact: false,
          allowSpread: false,
          allowProto: false,
          allowInexact: false
        });
        return this.finishNode(node, "InterfaceTypeAnnotation");
      };
      _proto.flowParseObjectPropertyKey = function flowParseObjectPropertyKey() {
        return this.match(135) || this.match(134) ? _superClass.prototype.parseExprAtom.call(this) : this.parseIdentifier(true);
      };
      _proto.flowParseObjectTypeIndexer = function flowParseObjectTypeIndexer(node, isStatic, variance) {
        node["static"] = isStatic;
        if (this.lookahead().type === 14) {
          node.id = this.flowParseObjectPropertyKey();
          node.key = this.flowParseTypeInitialiser();
        } else {
          node.id = null;
          node.key = this.flowParseType();
        }
        this.expect(3);
        node.value = this.flowParseTypeInitialiser();
        node.variance = variance;
        return this.finishNode(node, "ObjectTypeIndexer");
      };
      _proto.flowParseObjectTypeInternalSlot = function flowParseObjectTypeInternalSlot(node, isStatic) {
        node["static"] = isStatic;
        node.id = this.flowParseObjectPropertyKey();
        this.expect(3);
        this.expect(3);
        if (this.match(47) || this.match(10)) {
          node.method = true;
          node.optional = false;
          node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.loc.start));
        } else {
          node.method = false;
          if (this.eat(17)) {
            node.optional = true;
          }
          node.value = this.flowParseTypeInitialiser();
        }
        return this.finishNode(node, "ObjectTypeInternalSlot");
      };
      _proto.flowParseObjectTypeMethodish = function flowParseObjectTypeMethodish(node) {
        node.params = [];
        node.rest = null;
        node.typeParameters = null;
        node["this"] = null;
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        }
        this.expect(10);
        if (this.match(78)) {
          node["this"] = this.flowParseFunctionTypeParam(true);
          node["this"].name = null;
          if (!this.match(11)) {
            this.expect(12);
          }
        }
        while (!this.match(11) && !this.match(21)) {
          node.params.push(this.flowParseFunctionTypeParam(false));
          if (!this.match(11)) {
            this.expect(12);
          }
        }
        if (this.eat(21)) {
          node.rest = this.flowParseFunctionTypeParam(false);
        }
        this.expect(11);
        node.returnType = this.flowParseTypeInitialiser();
        return this.finishNode(node, "FunctionTypeAnnotation");
      };
      _proto.flowParseObjectTypeCallProperty = function flowParseObjectTypeCallProperty(node, isStatic) {
        var valueNode = this.startNode();
        node["static"] = isStatic;
        node.value = this.flowParseObjectTypeMethodish(valueNode);
        return this.finishNode(node, "ObjectTypeCallProperty");
      };
      _proto.flowParseObjectType = function flowParseObjectType(_ref13) {
        var allowStatic = _ref13.allowStatic,
          allowExact = _ref13.allowExact,
          allowSpread = _ref13.allowSpread,
          allowProto = _ref13.allowProto,
          allowInexact = _ref13.allowInexact;
        var oldInType = this.state.inType;
        this.state.inType = true;
        var nodeStart = this.startNode();
        nodeStart.callProperties = [];
        nodeStart.properties = [];
        nodeStart.indexers = [];
        nodeStart.internalSlots = [];
        var endDelim;
        var exact;
        var inexact = false;
        if (allowExact && this.match(6)) {
          this.expect(6);
          endDelim = 9;
          exact = true;
        } else {
          this.expect(5);
          endDelim = 8;
          exact = false;
        }
        nodeStart.exact = exact;
        while (!this.match(endDelim)) {
          var isStatic = false;
          var protoStartLoc = null;
          var inexactStartLoc = null;
          var node = this.startNode();
          if (allowProto && this.isContextual(118)) {
            var lookahead = this.lookahead();
            if (lookahead.type !== 14 && lookahead.type !== 17) {
              this.next();
              protoStartLoc = this.state.startLoc;
              allowStatic = false;
            }
          }
          if (allowStatic && this.isContextual(106)) {
            var _lookahead = this.lookahead();
            if (_lookahead.type !== 14 && _lookahead.type !== 17) {
              this.next();
              isStatic = true;
            }
          }
          var variance = this.flowParseVariance();
          if (this.eat(0)) {
            if (protoStartLoc != null) {
              this.unexpected(protoStartLoc);
            }
            if (this.eat(0)) {
              if (variance) {
                this.unexpected(variance.loc.start);
              }
              nodeStart.internalSlots.push(this.flowParseObjectTypeInternalSlot(node, isStatic));
            } else {
              nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
            }
          } else if (this.match(10) || this.match(47)) {
            if (protoStartLoc != null) {
              this.unexpected(protoStartLoc);
            }
            if (variance) {
              this.unexpected(variance.loc.start);
            }
            nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
          } else {
            var kind = "init";
            if (this.isContextual(99) || this.isContextual(104)) {
              var _lookahead2 = this.lookahead();
              if (tokenIsLiteralPropertyName(_lookahead2.type)) {
                kind = this.state.value;
                this.next();
              }
            }
            var propOrInexact = this.flowParseObjectTypeProperty(node, isStatic, protoStartLoc, variance, kind, allowSpread, allowInexact != null ? allowInexact : !exact);
            if (propOrInexact === null) {
              inexact = true;
              inexactStartLoc = this.state.lastTokStartLoc;
            } else {
              nodeStart.properties.push(propOrInexact);
            }
          }
          this.flowObjectTypeSemicolon();
          if (inexactStartLoc && !this.match(8) && !this.match(9)) {
            this.raise(FlowErrors.UnexpectedExplicitInexactInObject, inexactStartLoc);
          }
        }
        this.expect(endDelim);
        if (allowSpread) {
          nodeStart.inexact = inexact;
        }
        var out = this.finishNode(nodeStart, "ObjectTypeAnnotation");
        this.state.inType = oldInType;
        return out;
      };
      _proto.flowParseObjectTypeProperty = function flowParseObjectTypeProperty(node, isStatic, protoStartLoc, variance, kind, allowSpread, allowInexact) {
        if (this.eat(21)) {
          var isInexactToken = this.match(12) || this.match(13) || this.match(8) || this.match(9);
          if (isInexactToken) {
            if (!allowSpread) {
              this.raise(FlowErrors.InexactInsideNonObject, this.state.lastTokStartLoc);
            } else if (!allowInexact) {
              this.raise(FlowErrors.InexactInsideExact, this.state.lastTokStartLoc);
            }
            if (variance) {
              this.raise(FlowErrors.InexactVariance, variance);
            }
            return null;
          }
          if (!allowSpread) {
            this.raise(FlowErrors.UnexpectedSpreadType, this.state.lastTokStartLoc);
          }
          if (protoStartLoc != null) {
            this.unexpected(protoStartLoc);
          }
          if (variance) {
            this.raise(FlowErrors.SpreadVariance, variance);
          }
          node.argument = this.flowParseType();
          return this.finishNode(node, "ObjectTypeSpreadProperty");
        } else {
          node.key = this.flowParseObjectPropertyKey();
          node["static"] = isStatic;
          node.proto = protoStartLoc != null;
          node.kind = kind;
          var optional = false;
          if (this.match(47) || this.match(10)) {
            node.method = true;
            if (protoStartLoc != null) {
              this.unexpected(protoStartLoc);
            }
            if (variance) {
              this.unexpected(variance.loc.start);
            }
            node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.loc.start));
            if (kind === "get" || kind === "set") {
              this.flowCheckGetterSetterParams(node);
            }
            if (!allowSpread && node.key.name === "constructor" && node.value["this"]) {
              this.raise(FlowErrors.ThisParamBannedInConstructor, node.value["this"]);
            }
          } else {
            if (kind !== "init") this.unexpected();
            node.method = false;
            if (this.eat(17)) {
              optional = true;
            }
            node.value = this.flowParseTypeInitialiser();
            node.variance = variance;
          }
          node.optional = optional;
          return this.finishNode(node, "ObjectTypeProperty");
        }
      };
      _proto.flowCheckGetterSetterParams = function flowCheckGetterSetterParams(property) {
        var paramCount = property.kind === "get" ? 0 : 1;
        var length = property.value.params.length + (property.value.rest ? 1 : 0);
        if (property.value["this"]) {
          this.raise(property.kind === "get" ? FlowErrors.GetterMayNotHaveThisParam : FlowErrors.SetterMayNotHaveThisParam, property.value["this"]);
        }
        if (length !== paramCount) {
          this.raise(property.kind === "get" ? Errors.BadGetterArity : Errors.BadSetterArity, property);
        }
        if (property.kind === "set" && property.value.rest) {
          this.raise(Errors.BadSetterRestParameter, property);
        }
      };
      _proto.flowObjectTypeSemicolon = function flowObjectTypeSemicolon() {
        if (!this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9)) {
          this.unexpected();
        }
      };
      _proto.flowParseQualifiedTypeIdentifier = function flowParseQualifiedTypeIdentifier(startLoc, id) {
        startLoc != null ? startLoc : startLoc = this.state.startLoc;
        var node = id || this.flowParseRestrictedIdentifier(true);
        while (this.eat(16)) {
          var node2 = this.startNodeAt(startLoc);
          node2.qualification = node;
          node2.id = this.flowParseRestrictedIdentifier(true);
          node = this.finishNode(node2, "QualifiedTypeIdentifier");
        }
        return node;
      };
      _proto.flowParseGenericType = function flowParseGenericType(startLoc, id) {
        var node = this.startNodeAt(startLoc);
        node.typeParameters = null;
        node.id = this.flowParseQualifiedTypeIdentifier(startLoc, id);
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterInstantiation();
        }
        return this.finishNode(node, "GenericTypeAnnotation");
      };
      _proto.flowParseTypeofType = function flowParseTypeofType() {
        var node = this.startNode();
        this.expect(87);
        node.argument = this.flowParsePrimaryType();
        return this.finishNode(node, "TypeofTypeAnnotation");
      };
      _proto.flowParseTupleType = function flowParseTupleType() {
        var node = this.startNode();
        node.types = [];
        this.expect(0);
        while (this.state.pos < this.length && !this.match(3)) {
          node.types.push(this.flowParseType());
          if (this.match(3)) break;
          this.expect(12);
        }
        this.expect(3);
        return this.finishNode(node, "TupleTypeAnnotation");
      };
      _proto.flowParseFunctionTypeParam = function flowParseFunctionTypeParam(first) {
        var name = null;
        var optional = false;
        var typeAnnotation = null;
        var node = this.startNode();
        var lh = this.lookahead();
        var isThis = this.state.type === 78;
        if (lh.type === 14 || lh.type === 17) {
          if (isThis && !first) {
            this.raise(FlowErrors.ThisParamMustBeFirst, node);
          }
          name = this.parseIdentifier(isThis);
          if (this.eat(17)) {
            optional = true;
            if (isThis) {
              this.raise(FlowErrors.ThisParamMayNotBeOptional, node);
            }
          }
          typeAnnotation = this.flowParseTypeInitialiser();
        } else {
          typeAnnotation = this.flowParseType();
        }
        node.name = name;
        node.optional = optional;
        node.typeAnnotation = typeAnnotation;
        return this.finishNode(node, "FunctionTypeParam");
      };
      _proto.reinterpretTypeAsFunctionTypeParam = function reinterpretTypeAsFunctionTypeParam(type) {
        var node = this.startNodeAt(type.loc.start);
        node.name = null;
        node.optional = false;
        node.typeAnnotation = type;
        return this.finishNode(node, "FunctionTypeParam");
      };
      _proto.flowParseFunctionTypeParams = function flowParseFunctionTypeParams(params) {
        if (params === void 0) {
          params = [];
        }
        var rest = null;
        var _this = null;
        if (this.match(78)) {
          _this = this.flowParseFunctionTypeParam(true);
          _this.name = null;
          if (!this.match(11)) {
            this.expect(12);
          }
        }
        while (!this.match(11) && !this.match(21)) {
          params.push(this.flowParseFunctionTypeParam(false));
          if (!this.match(11)) {
            this.expect(12);
          }
        }
        if (this.eat(21)) {
          rest = this.flowParseFunctionTypeParam(false);
        }
        return {
          params: params,
          rest: rest,
          _this: _this
        };
      };
      _proto.flowIdentToTypeAnnotation = function flowIdentToTypeAnnotation(startLoc, node, id) {
        switch (id.name) {
          case "any":
            return this.finishNode(node, "AnyTypeAnnotation");
          case "bool":
          case "boolean":
            return this.finishNode(node, "BooleanTypeAnnotation");
          case "mixed":
            return this.finishNode(node, "MixedTypeAnnotation");
          case "empty":
            return this.finishNode(node, "EmptyTypeAnnotation");
          case "number":
            return this.finishNode(node, "NumberTypeAnnotation");
          case "string":
            return this.finishNode(node, "StringTypeAnnotation");
          case "symbol":
            return this.finishNode(node, "SymbolTypeAnnotation");
          default:
            this.checkNotUnderscore(id.name);
            return this.flowParseGenericType(startLoc, id);
        }
      };
      _proto.flowParsePrimaryType = function flowParsePrimaryType() {
        var startLoc = this.state.startLoc;
        var node = this.startNode();
        var tmp;
        var type;
        var isGroupedType = false;
        var oldNoAnonFunctionType = this.state.noAnonFunctionType;
        switch (this.state.type) {
          case 5:
            return this.flowParseObjectType({
              allowStatic: false,
              allowExact: false,
              allowSpread: true,
              allowProto: false,
              allowInexact: true
            });
          case 6:
            return this.flowParseObjectType({
              allowStatic: false,
              allowExact: true,
              allowSpread: true,
              allowProto: false,
              allowInexact: false
            });
          case 0:
            this.state.noAnonFunctionType = false;
            type = this.flowParseTupleType();
            this.state.noAnonFunctionType = oldNoAnonFunctionType;
            return type;
          case 47:
            {
              var _node = this.startNode();
              _node.typeParameters = this.flowParseTypeParameterDeclaration();
              this.expect(10);
              tmp = this.flowParseFunctionTypeParams();
              _node.params = tmp.params;
              _node.rest = tmp.rest;
              _node["this"] = tmp._this;
              this.expect(11);
              this.expect(19);
              _node.returnType = this.flowParseType();
              return this.finishNode(_node, "FunctionTypeAnnotation");
            }
          case 10:
            {
              var _node2 = this.startNode();
              this.next();
              if (!this.match(11) && !this.match(21)) {
                if (tokenIsIdentifier(this.state.type) || this.match(78)) {
                  var token = this.lookahead().type;
                  isGroupedType = token !== 17 && token !== 14;
                } else {
                  isGroupedType = true;
                }
              }
              if (isGroupedType) {
                this.state.noAnonFunctionType = false;
                type = this.flowParseType();
                this.state.noAnonFunctionType = oldNoAnonFunctionType;
                if (this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19)) {
                  this.expect(11);
                  return type;
                } else {
                  this.eat(12);
                }
              }
              if (type) {
                tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
              } else {
                tmp = this.flowParseFunctionTypeParams();
              }
              _node2.params = tmp.params;
              _node2.rest = tmp.rest;
              _node2["this"] = tmp._this;
              this.expect(11);
              this.expect(19);
              _node2.returnType = this.flowParseType();
              _node2.typeParameters = null;
              return this.finishNode(_node2, "FunctionTypeAnnotation");
            }
          case 134:
            return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
          case 85:
          case 86:
            node.value = this.match(85);
            this.next();
            return this.finishNode(node, "BooleanLiteralTypeAnnotation");
          case 53:
            if (this.state.value === "-") {
              this.next();
              if (this.match(135)) {
                return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", node);
              }
              if (this.match(136)) {
                return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", node);
              }
              throw this.raise(FlowErrors.UnexpectedSubtractionOperand, this.state.startLoc);
            }
            this.unexpected();
            return;
          case 135:
            return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
          case 136:
            return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
          case 88:
            this.next();
            return this.finishNode(node, "VoidTypeAnnotation");
          case 84:
            this.next();
            return this.finishNode(node, "NullLiteralTypeAnnotation");
          case 78:
            this.next();
            return this.finishNode(node, "ThisTypeAnnotation");
          case 55:
            this.next();
            return this.finishNode(node, "ExistsTypeAnnotation");
          case 87:
            return this.flowParseTypeofType();
          default:
            if (tokenIsKeyword(this.state.type)) {
              var label = tokenLabelName(this.state.type);
              this.next();
              return _superClass.prototype.createIdentifier.call(this, node, label);
            } else if (tokenIsIdentifier(this.state.type)) {
              if (this.isContextual(129)) {
                return this.flowParseInterfaceType();
              }
              return this.flowIdentToTypeAnnotation(startLoc, node, this.parseIdentifier());
            }
        }
        this.unexpected();
      };
      _proto.flowParsePostfixType = function flowParsePostfixType() {
        var startLoc = this.state.startLoc;
        var type = this.flowParsePrimaryType();
        var seenOptionalIndexedAccess = false;
        while ((this.match(0) || this.match(18)) && !this.canInsertSemicolon()) {
          var node = this.startNodeAt(startLoc);
          var optional = this.eat(18);
          seenOptionalIndexedAccess = seenOptionalIndexedAccess || optional;
          this.expect(0);
          if (!optional && this.match(3)) {
            node.elementType = type;
            this.next();
            type = this.finishNode(node, "ArrayTypeAnnotation");
          } else {
            node.objectType = type;
            node.indexType = this.flowParseType();
            this.expect(3);
            if (seenOptionalIndexedAccess) {
              node.optional = optional;
              type = this.finishNode(node, "OptionalIndexedAccessType");
            } else {
              type = this.finishNode(node, "IndexedAccessType");
            }
          }
        }
        return type;
      };
      _proto.flowParsePrefixType = function flowParsePrefixType() {
        var node = this.startNode();
        if (this.eat(17)) {
          node.typeAnnotation = this.flowParsePrefixType();
          return this.finishNode(node, "NullableTypeAnnotation");
        } else {
          return this.flowParsePostfixType();
        }
      };
      _proto.flowParseAnonFunctionWithoutParens = function flowParseAnonFunctionWithoutParens() {
        var param = this.flowParsePrefixType();
        if (!this.state.noAnonFunctionType && this.eat(19)) {
          var node = this.startNodeAt(param.loc.start);
          node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
          node.rest = null;
          node["this"] = null;
          node.returnType = this.flowParseType();
          node.typeParameters = null;
          return this.finishNode(node, "FunctionTypeAnnotation");
        }
        return param;
      };
      _proto.flowParseIntersectionType = function flowParseIntersectionType() {
        var node = this.startNode();
        this.eat(45);
        var type = this.flowParseAnonFunctionWithoutParens();
        node.types = [type];
        while (this.eat(45)) {
          node.types.push(this.flowParseAnonFunctionWithoutParens());
        }
        return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
      };
      _proto.flowParseUnionType = function flowParseUnionType() {
        var node = this.startNode();
        this.eat(43);
        var type = this.flowParseIntersectionType();
        node.types = [type];
        while (this.eat(43)) {
          node.types.push(this.flowParseIntersectionType());
        }
        return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
      };
      _proto.flowParseType = function flowParseType() {
        var oldInType = this.state.inType;
        this.state.inType = true;
        var type = this.flowParseUnionType();
        this.state.inType = oldInType;
        return type;
      };
      _proto.flowParseTypeOrImplicitInstantiation = function flowParseTypeOrImplicitInstantiation() {
        if (this.state.type === 132 && this.state.value === "_") {
          var startLoc = this.state.startLoc;
          var node = this.parseIdentifier();
          return this.flowParseGenericType(startLoc, node);
        } else {
          return this.flowParseType();
        }
      };
      _proto.flowParseTypeAnnotation = function flowParseTypeAnnotation() {
        var node = this.startNode();
        node.typeAnnotation = this.flowParseTypeInitialiser();
        return this.finishNode(node, "TypeAnnotation");
      };
      _proto.flowParseTypeAnnotatableIdentifier = function flowParseTypeAnnotatableIdentifier(allowPrimitiveOverride) {
        var ident = allowPrimitiveOverride ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
        if (this.match(14)) {
          ident.typeAnnotation = this.flowParseTypeAnnotation();
          this.resetEndLocation(ident);
        }
        return ident;
      };
      _proto.typeCastToParameter = function typeCastToParameter(node) {
        node.expression.typeAnnotation = node.typeAnnotation;
        this.resetEndLocation(node.expression, node.typeAnnotation.loc.end);
        return node.expression;
      };
      _proto.flowParseVariance = function flowParseVariance() {
        var variance = null;
        if (this.match(53)) {
          variance = this.startNode();
          if (this.state.value === "+") {
            variance.kind = "plus";
          } else {
            variance.kind = "minus";
          }
          this.next();
          return this.finishNode(variance, "Variance");
        }
        return variance;
      };
      _proto.parseFunctionBody = function parseFunctionBody(node, allowExpressionBody, isMethod) {
        var _this5 = this;
        if (isMethod === void 0) {
          isMethod = false;
        }
        if (allowExpressionBody) {
          this.forwardNoArrowParamsConversionAt(node, function () {
            return _superClass.prototype.parseFunctionBody.call(_this5, node, true, isMethod);
          });
          return;
        }
        _superClass.prototype.parseFunctionBody.call(this, node, false, isMethod);
      };
      _proto.parseFunctionBodyAndFinish = function parseFunctionBodyAndFinish(node, type, isMethod) {
        if (isMethod === void 0) {
          isMethod = false;
        }
        if (this.match(14)) {
          var typeNode = this.startNode();
          var _this$flowParseTypeAn2 = this.flowParseTypeAndPredicateInitialiser();
          typeNode.typeAnnotation = _this$flowParseTypeAn2[0];
          node.predicate = _this$flowParseTypeAn2[1];
          node.returnType = typeNode.typeAnnotation ? this.finishNode(typeNode, "TypeAnnotation") : null;
        }
        return _superClass.prototype.parseFunctionBodyAndFinish.call(this, node, type, isMethod);
      };
      _proto.parseStatementLike = function parseStatementLike(flags) {
        if (this.state.strict && this.isContextual(129)) {
          var lookahead = this.lookahead();
          if (tokenIsKeywordOrIdentifier(lookahead.type)) {
            var node = this.startNode();
            this.next();
            return this.flowParseInterface(node);
          }
        } else if (this.isContextual(126)) {
          var _node3 = this.startNode();
          this.next();
          return this.flowParseEnumDeclaration(_node3);
        }
        var stmt = _superClass.prototype.parseStatementLike.call(this, flags);
        if (this.flowPragma === undefined && !this.isValidDirective(stmt)) {
          this.flowPragma = null;
        }
        return stmt;
      };
      _proto.parseExpressionStatement = function parseExpressionStatement(node, expr, decorators) {
        if (expr.type === "Identifier") {
          if (expr.name === "declare") {
            if (this.match(80) || tokenIsIdentifier(this.state.type) || this.match(68) || this.match(74) || this.match(82)) {
              return this.flowParseDeclare(node);
            }
          } else if (tokenIsIdentifier(this.state.type)) {
            if (expr.name === "interface") {
              return this.flowParseInterface(node);
            } else if (expr.name === "type") {
              return this.flowParseTypeAlias(node);
            } else if (expr.name === "opaque") {
              return this.flowParseOpaqueType(node, false);
            }
          }
        }
        return _superClass.prototype.parseExpressionStatement.call(this, node, expr, decorators);
      };
      _proto.shouldParseExportDeclaration = function shouldParseExportDeclaration() {
        var type = this.state.type;
        if (type === 126 || tokenIsFlowInterfaceOrTypeOrOpaque(type)) {
          return !this.state.containsEsc;
        }
        return _superClass.prototype.shouldParseExportDeclaration.call(this);
      };
      _proto.isExportDefaultSpecifier = function isExportDefaultSpecifier() {
        var type = this.state.type;
        if (type === 126 || tokenIsFlowInterfaceOrTypeOrOpaque(type)) {
          return this.state.containsEsc;
        }
        return _superClass.prototype.isExportDefaultSpecifier.call(this);
      };
      _proto.parseExportDefaultExpression = function parseExportDefaultExpression() {
        if (this.isContextual(126)) {
          var node = this.startNode();
          this.next();
          return this.flowParseEnumDeclaration(node);
        }
        return _superClass.prototype.parseExportDefaultExpression.call(this);
      };
      _proto.parseConditional = function parseConditional(expr, startLoc, refExpressionErrors) {
        var _this6 = this;
        if (!this.match(17)) return expr;
        if (this.state.maybeInArrowParameters) {
          var nextCh = this.lookaheadCharCode();
          if (nextCh === 44 || nextCh === 61 || nextCh === 58 || nextCh === 41) {
            this.setOptionalParametersError(refExpressionErrors);
            return expr;
          }
        }
        this.expect(17);
        var state = this.state.clone();
        var originalNoArrowAt = this.state.noArrowAt;
        var node = this.startNodeAt(startLoc);
        var _this$tryParseConditi = this.tryParseConditionalConsequent(),
          consequent = _this$tryParseConditi.consequent,
          failed = _this$tryParseConditi.failed;
        var _this$getArrowLikeExp = this.getArrowLikeExpressions(consequent),
          valid = _this$getArrowLikeExp[0],
          invalid = _this$getArrowLikeExp[1];
        if (failed || invalid.length > 0) {
          var noArrowAt = [].concat(originalNoArrowAt);
          if (invalid.length > 0) {
            this.state = state;
            this.state.noArrowAt = noArrowAt;
            for (var i = 0; i < invalid.length; i++) {
              noArrowAt.push(invalid[i].start);
            }
            var _this$tryParseConditi2 = this.tryParseConditionalConsequent();
            consequent = _this$tryParseConditi2.consequent;
            failed = _this$tryParseConditi2.failed;
            var _this$getArrowLikeExp2 = this.getArrowLikeExpressions(consequent);
            valid = _this$getArrowLikeExp2[0];
            invalid = _this$getArrowLikeExp2[1];
          }
          if (failed && valid.length > 1) {
            this.raise(FlowErrors.AmbiguousConditionalArrow, state.startLoc);
          }
          if (failed && valid.length === 1) {
            this.state = state;
            noArrowAt.push(valid[0].start);
            this.state.noArrowAt = noArrowAt;
            var _this$tryParseConditi3 = this.tryParseConditionalConsequent();
            consequent = _this$tryParseConditi3.consequent;
            failed = _this$tryParseConditi3.failed;
          }
        }
        this.getArrowLikeExpressions(consequent, true);
        this.state.noArrowAt = originalNoArrowAt;
        this.expect(14);
        node.test = expr;
        node.consequent = consequent;
        node.alternate = this.forwardNoArrowParamsConversionAt(node, function () {
          return _this6.parseMaybeAssign(undefined, undefined);
        });
        return this.finishNode(node, "ConditionalExpression");
      };
      _proto.tryParseConditionalConsequent = function tryParseConditionalConsequent() {
        this.state.noArrowParamsConversionAt.push(this.state.start);
        var consequent = this.parseMaybeAssignAllowIn();
        var failed = !this.match(14);
        this.state.noArrowParamsConversionAt.pop();
        return {
          consequent: consequent,
          failed: failed
        };
      };
      _proto.getArrowLikeExpressions = function getArrowLikeExpressions(node, disallowInvalid) {
        var _this7 = this;
        var stack = [node];
        var arrows = [];
        while (stack.length !== 0) {
          var _node4 = stack.pop();
          if (_node4.type === "ArrowFunctionExpression" && _node4.body.type !== "BlockStatement") {
            if (_node4.typeParameters || !_node4.returnType) {
              this.finishArrowValidation(_node4);
            } else {
              arrows.push(_node4);
            }
            stack.push(_node4.body);
          } else if (_node4.type === "ConditionalExpression") {
            stack.push(_node4.consequent);
            stack.push(_node4.alternate);
          }
        }
        if (disallowInvalid) {
          arrows.forEach(function (node) {
            return _this7.finishArrowValidation(node);
          });
          return [arrows, []];
        }
        return partition(arrows, function (node) {
          return node.params.every(function (param) {
            return _this7.isAssignable(param, true);
          });
        });
      };
      _proto.finishArrowValidation = function finishArrowValidation(node) {
        var _node$extra;
        this.toAssignableList(node.params, (_node$extra = node.extra) == null ? void 0 : _node$extra.trailingCommaLoc, false);
        this.scope.enter(ScopeFlag.FUNCTION | ScopeFlag.ARROW);
        _superClass.prototype.checkParams.call(this, node, false, true);
        this.scope.exit();
      };
      _proto.forwardNoArrowParamsConversionAt = function forwardNoArrowParamsConversionAt(node, parse) {
        var result;
        if (this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(node.start))) {
          this.state.noArrowParamsConversionAt.push(this.state.start);
          result = parse();
          this.state.noArrowParamsConversionAt.pop();
        } else {
          result = parse();
        }
        return result;
      };
      _proto.parseParenItem = function parseParenItem(node, startLoc) {
        var newNode = _superClass.prototype.parseParenItem.call(this, node, startLoc);
        if (this.eat(17)) {
          newNode.optional = true;
          this.resetEndLocation(node);
        }
        if (this.match(14)) {
          var typeCastNode = this.startNodeAt(startLoc);
          typeCastNode.expression = newNode;
          typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();
          return this.finishNode(typeCastNode, "TypeCastExpression");
        }
        return newNode;
      };
      _proto.assertModuleNodeAllowed = function assertModuleNodeAllowed(node) {
        if (node.type === "ImportDeclaration" && (node.importKind === "type" || node.importKind === "typeof") || node.type === "ExportNamedDeclaration" && node.exportKind === "type" || node.type === "ExportAllDeclaration" && node.exportKind === "type") {
          return;
        }
        _superClass.prototype.assertModuleNodeAllowed.call(this, node);
      };
      _proto.parseExportDeclaration = function parseExportDeclaration(node) {
        if (this.isContextual(130)) {
          node.exportKind = "type";
          var declarationNode = this.startNode();
          this.next();
          if (this.match(5)) {
            node.specifiers = this.parseExportSpecifiers(true);
            _superClass.prototype.parseExportFrom.call(this, node);
            return null;
          } else {
            return this.flowParseTypeAlias(declarationNode);
          }
        } else if (this.isContextual(131)) {
          node.exportKind = "type";
          var _declarationNode = this.startNode();
          this.next();
          return this.flowParseOpaqueType(_declarationNode, false);
        } else if (this.isContextual(129)) {
          node.exportKind = "type";
          var _declarationNode2 = this.startNode();
          this.next();
          return this.flowParseInterface(_declarationNode2);
        } else if (this.isContextual(126)) {
          node.exportKind = "value";
          var _declarationNode3 = this.startNode();
          this.next();
          return this.flowParseEnumDeclaration(_declarationNode3);
        } else {
          return _superClass.prototype.parseExportDeclaration.call(this, node);
        }
      };
      _proto.eatExportStar = function eatExportStar(node) {
        if (_superClass.prototype.eatExportStar.call(this, node)) return true;
        if (this.isContextual(130) && this.lookahead().type === 55) {
          node.exportKind = "type";
          this.next();
          this.next();
          return true;
        }
        return false;
      };
      _proto.maybeParseExportNamespaceSpecifier = function maybeParseExportNamespaceSpecifier(node) {
        var startLoc = this.state.startLoc;
        var hasNamespace = _superClass.prototype.maybeParseExportNamespaceSpecifier.call(this, node);
        if (hasNamespace && node.exportKind === "type") {
          this.unexpected(startLoc);
        }
        return hasNamespace;
      };
      _proto.parseClassId = function parseClassId(node, isStatement, optionalId) {
        _superClass.prototype.parseClassId.call(this, node, isStatement, optionalId);
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        }
      };
      _proto.parseClassMember = function parseClassMember(classBody, member, state) {
        var startLoc = this.state.startLoc;
        if (this.isContextual(125)) {
          if (_superClass.prototype.parseClassMemberFromModifier.call(this, classBody, member)) {
            return;
          }
          member.declare = true;
        }
        _superClass.prototype.parseClassMember.call(this, classBody, member, state);
        if (member.declare) {
          if (member.type !== "ClassProperty" && member.type !== "ClassPrivateProperty" && member.type !== "PropertyDefinition") {
            this.raise(FlowErrors.DeclareClassElement, startLoc);
          } else if (member.value) {
            this.raise(FlowErrors.DeclareClassFieldInitializer, member.value);
          }
        }
      };
      _proto.isIterator = function isIterator(word) {
        return word === "iterator" || word === "asyncIterator";
      };
      _proto.readIterator = function readIterator() {
        var word = _superClass.prototype.readWord1.call(this);
        var fullWord = "@@" + word;
        if (!this.isIterator(word) || !this.state.inType) {
          this.raise(Errors.InvalidIdentifier, this.state.curPosition(), {
            identifierName: fullWord
          });
        }
        this.finishToken(132, fullWord);
      };
      _proto.getTokenFromCode = function getTokenFromCode(code) {
        var next = this.input.charCodeAt(this.state.pos + 1);
        if (code === 123 && next === 124) {
          this.finishOp(6, 2);
        } else if (this.state.inType && (code === 62 || code === 60)) {
          this.finishOp(code === 62 ? 48 : 47, 1);
        } else if (this.state.inType && code === 63) {
          if (next === 46) {
            this.finishOp(18, 2);
          } else {
            this.finishOp(17, 1);
          }
        } else if (isIteratorStart(code, next, this.input.charCodeAt(this.state.pos + 2))) {
          this.state.pos += 2;
          this.readIterator();
        } else {
          _superClass.prototype.getTokenFromCode.call(this, code);
        }
      };
      _proto.isAssignable = function isAssignable(node, isBinding) {
        if (node.type === "TypeCastExpression") {
          return this.isAssignable(node.expression, isBinding);
        } else {
          return _superClass.prototype.isAssignable.call(this, node, isBinding);
        }
      };
      _proto.toAssignable = function toAssignable(node, isLHS) {
        if (isLHS === void 0) {
          isLHS = false;
        }
        if (!isLHS && node.type === "AssignmentExpression" && node.left.type === "TypeCastExpression") {
          node.left = this.typeCastToParameter(node.left);
        }
        _superClass.prototype.toAssignable.call(this, node, isLHS);
      };
      _proto.toAssignableList = function toAssignableList(exprList, trailingCommaLoc, isLHS) {
        for (var i = 0; i < exprList.length; i++) {
          var expr = exprList[i];
          if ((expr == null ? void 0 : expr.type) === "TypeCastExpression") {
            exprList[i] = this.typeCastToParameter(expr);
          }
        }
        _superClass.prototype.toAssignableList.call(this, exprList, trailingCommaLoc, isLHS);
      };
      _proto.toReferencedList = function toReferencedList(exprList, isParenthesizedExpr) {
        for (var i = 0; i < exprList.length; i++) {
          var _expr$extra;
          var expr = exprList[i];
          if (expr && expr.type === "TypeCastExpression" && !((_expr$extra = expr.extra) != null && _expr$extra.parenthesized) && (exprList.length > 1 || !isParenthesizedExpr)) {
            this.raise(FlowErrors.TypeCastInPattern, expr.typeAnnotation);
          }
        }
        return exprList;
      };
      _proto.parseArrayLike = function parseArrayLike(close, canBePattern, isTuple, refExpressionErrors) {
        var node = _superClass.prototype.parseArrayLike.call(this, close, canBePattern, isTuple, refExpressionErrors);
        if (canBePattern && !this.state.maybeInArrowParameters) {
          this.toReferencedList(node.elements);
        }
        return node;
      };
      _proto.isValidLVal = function isValidLVal(type, isParenthesized, binding) {
        return type === "TypeCastExpression" || _superClass.prototype.isValidLVal.call(this, type, isParenthesized, binding);
      };
      _proto.parseClassProperty = function parseClassProperty(node) {
        if (this.match(14)) {
          node.typeAnnotation = this.flowParseTypeAnnotation();
        }
        return _superClass.prototype.parseClassProperty.call(this, node);
      };
      _proto.parseClassPrivateProperty = function parseClassPrivateProperty(node) {
        if (this.match(14)) {
          node.typeAnnotation = this.flowParseTypeAnnotation();
        }
        return _superClass.prototype.parseClassPrivateProperty.call(this, node);
      };
      _proto.isClassMethod = function isClassMethod() {
        return this.match(47) || _superClass.prototype.isClassMethod.call(this);
      };
      _proto.isClassProperty = function isClassProperty() {
        return this.match(14) || _superClass.prototype.isClassProperty.call(this);
      };
      _proto.isNonstaticConstructor = function isNonstaticConstructor(method) {
        return !this.match(14) && _superClass.prototype.isNonstaticConstructor.call(this, method);
      };
      _proto.pushClassMethod = function pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
        if (method.variance) {
          this.unexpected(method.variance.loc.start);
        }
        delete method.variance;
        if (this.match(47)) {
          method.typeParameters = this.flowParseTypeParameterDeclaration();
        }
        _superClass.prototype.pushClassMethod.call(this, classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
        if (method.params && isConstructor) {
          var params = method.params;
          if (params.length > 0 && this.isThisParam(params[0])) {
            this.raise(FlowErrors.ThisParamBannedInConstructor, method);
          }
        } else if (method.type === "MethodDefinition" && isConstructor && method.value.params) {
          var _params = method.value.params;
          if (_params.length > 0 && this.isThisParam(_params[0])) {
            this.raise(FlowErrors.ThisParamBannedInConstructor, method);
          }
        }
      };
      _proto.pushClassPrivateMethod = function pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
        if (method.variance) {
          this.unexpected(method.variance.loc.start);
        }
        delete method.variance;
        if (this.match(47)) {
          method.typeParameters = this.flowParseTypeParameterDeclaration();
        }
        _superClass.prototype.pushClassPrivateMethod.call(this, classBody, method, isGenerator, isAsync);
      };
      _proto.parseClassSuper = function parseClassSuper(node) {
        _superClass.prototype.parseClassSuper.call(this, node);
        if (node.superClass && (this.match(47) || this.match(51))) {
          {
            node.superTypeParameters = this.flowParseTypeParameterInstantiationInExpression();
          }
        }
        if (this.isContextual(113)) {
          this.next();
          var implemented = node["implements"] = [];
          do {
            var _node5 = this.startNode();
            _node5.id = this.flowParseRestrictedIdentifier(true);
            if (this.match(47)) {
              _node5.typeParameters = this.flowParseTypeParameterInstantiation();
            } else {
              _node5.typeParameters = null;
            }
            implemented.push(this.finishNode(_node5, "ClassImplements"));
          } while (this.eat(12));
        }
      };
      _proto.checkGetterSetterParams = function checkGetterSetterParams(method) {
        _superClass.prototype.checkGetterSetterParams.call(this, method);
        var params = this.getObjectOrClassMethodParams(method);
        if (params.length > 0) {
          var param = params[0];
          if (this.isThisParam(param) && method.kind === "get") {
            this.raise(FlowErrors.GetterMayNotHaveThisParam, param);
          } else if (this.isThisParam(param)) {
            this.raise(FlowErrors.SetterMayNotHaveThisParam, param);
          }
        }
      };
      _proto.parsePropertyNamePrefixOperator = function parsePropertyNamePrefixOperator(node) {
        node.variance = this.flowParseVariance();
      };
      _proto.parseObjPropValue = function parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
        if (prop.variance) {
          this.unexpected(prop.variance.loc.start);
        }
        delete prop.variance;
        var typeParameters;
        if (this.match(47) && !isAccessor) {
          typeParameters = this.flowParseTypeParameterDeclaration();
          if (!this.match(10)) this.unexpected();
        }
        var result = _superClass.prototype.parseObjPropValue.call(this, prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);
        if (typeParameters) {
          (result.value || result).typeParameters = typeParameters;
        }
        return result;
      };
      _proto.parseFunctionParamType = function parseFunctionParamType(param) {
        if (this.eat(17)) {
          if (param.type !== "Identifier") {
            this.raise(FlowErrors.PatternIsOptional, param);
          }
          if (this.isThisParam(param)) {
            this.raise(FlowErrors.ThisParamMayNotBeOptional, param);
          }
          param.optional = true;
        }
        if (this.match(14)) {
          param.typeAnnotation = this.flowParseTypeAnnotation();
        } else if (this.isThisParam(param)) {
          this.raise(FlowErrors.ThisParamAnnotationRequired, param);
        }
        if (this.match(29) && this.isThisParam(param)) {
          this.raise(FlowErrors.ThisParamNoDefault, param);
        }
        this.resetEndLocation(param);
        return param;
      };
      _proto.parseMaybeDefault = function parseMaybeDefault(startLoc, left) {
        var node = _superClass.prototype.parseMaybeDefault.call(this, startLoc, left);
        if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
          this.raise(FlowErrors.TypeBeforeInitializer, node.typeAnnotation);
        }
        return node;
      };
      _proto.checkImportReflection = function checkImportReflection(node) {
        _superClass.prototype.checkImportReflection.call(this, node);
        if (node.module && node.importKind !== "value") {
          this.raise(FlowErrors.ImportReflectionHasImportType, node.specifiers[0].loc.start);
        }
      };
      _proto.parseImportSpecifierLocal = function parseImportSpecifierLocal(node, specifier, type) {
        specifier.local = hasTypeImportKind(node) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier();
        node.specifiers.push(this.finishImportSpecifier(specifier, type));
      };
      _proto.isPotentialImportPhase = function isPotentialImportPhase(isExport) {
        if (_superClass.prototype.isPotentialImportPhase.call(this, isExport)) return true;
        if (this.isContextual(130)) {
          if (!isExport) return true;
          var ch = this.lookaheadCharCode();
          return ch === 123 || ch === 42;
        }
        return !isExport && this.isContextual(87);
      };
      _proto.applyImportPhase = function applyImportPhase(node, isExport, phase, loc) {
        _superClass.prototype.applyImportPhase.call(this, node, isExport, phase, loc);
        if (isExport) {
          if (!phase && this.match(65)) {
            return;
          }
          node.exportKind = phase === "type" ? phase : "value";
        } else {
          if (phase === "type" && this.match(55)) this.unexpected();
          node.importKind = phase === "type" || phase === "typeof" ? phase : "value";
        }
      };
      _proto.parseImportSpecifier = function parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, bindingType) {
        var firstIdent = specifier.imported;
        var specifierTypeKind = null;
        if (firstIdent.type === "Identifier") {
          if (firstIdent.name === "type") {
            specifierTypeKind = "type";
          } else if (firstIdent.name === "typeof") {
            specifierTypeKind = "typeof";
          }
        }
        var isBinding = false;
        if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
          var as_ident = this.parseIdentifier(true);
          if (specifierTypeKind !== null && !tokenIsKeywordOrIdentifier(this.state.type)) {
            specifier.imported = as_ident;
            specifier.importKind = specifierTypeKind;
            specifier.local = this.cloneIdentifier(as_ident);
          } else {
            specifier.imported = firstIdent;
            specifier.importKind = null;
            specifier.local = this.parseIdentifier();
          }
        } else {
          if (specifierTypeKind !== null && tokenIsKeywordOrIdentifier(this.state.type)) {
            specifier.imported = this.parseIdentifier(true);
            specifier.importKind = specifierTypeKind;
          } else {
            if (importedIsString) {
              throw this.raise(Errors.ImportBindingIsString, specifier, {
                importName: firstIdent.value
              });
            }
            specifier.imported = firstIdent;
            specifier.importKind = null;
          }
          if (this.eatContextual(93)) {
            specifier.local = this.parseIdentifier();
          } else {
            isBinding = true;
            specifier.local = this.cloneIdentifier(specifier.imported);
          }
        }
        var specifierIsTypeImport = hasTypeImportKind(specifier);
        if (isInTypeOnlyImport && specifierIsTypeImport) {
          this.raise(FlowErrors.ImportTypeShorthandOnlyInPureImport, specifier);
        }
        if (isInTypeOnlyImport || specifierIsTypeImport) {
          this.checkReservedType(specifier.local.name, specifier.local.loc.start, true);
        }
        if (isBinding && !isInTypeOnlyImport && !specifierIsTypeImport) {
          this.checkReservedWord(specifier.local.name, specifier.loc.start, true, true);
        }
        return this.finishImportSpecifier(specifier, "ImportSpecifier");
      };
      _proto.parseBindingAtom = function parseBindingAtom() {
        switch (this.state.type) {
          case 78:
            return this.parseIdentifier(true);
          default:
            return _superClass.prototype.parseBindingAtom.call(this);
        }
      };
      _proto.parseFunctionParams = function parseFunctionParams(node, isConstructor) {
        var kind = node.kind;
        if (kind !== "get" && kind !== "set" && this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        }
        _superClass.prototype.parseFunctionParams.call(this, node, isConstructor);
      };
      _proto.parseVarId = function parseVarId(decl, kind) {
        _superClass.prototype.parseVarId.call(this, decl, kind);
        if (this.match(14)) {
          decl.id.typeAnnotation = this.flowParseTypeAnnotation();
          this.resetEndLocation(decl.id);
        }
      };
      _proto.parseAsyncArrowFromCallExpression = function parseAsyncArrowFromCallExpression(node, call) {
        if (this.match(14)) {
          var oldNoAnonFunctionType = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = true;
          node.returnType = this.flowParseTypeAnnotation();
          this.state.noAnonFunctionType = oldNoAnonFunctionType;
        }
        return _superClass.prototype.parseAsyncArrowFromCallExpression.call(this, node, call);
      };
      _proto.shouldParseAsyncArrow = function shouldParseAsyncArrow() {
        return this.match(14) || _superClass.prototype.shouldParseAsyncArrow.call(this);
      };
      _proto.parseMaybeAssign = function parseMaybeAssign(refExpressionErrors, afterLeftParse) {
        var _this8 = this,
          _jsx;
        var state = null;
        var jsx;
        if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
          state = this.state.clone();
          jsx = this.tryParse(function () {
            return _superClass.prototype.parseMaybeAssign.call(_this8, refExpressionErrors, afterLeftParse);
          }, state);
          if (!jsx.error) return jsx.node;
          var context = this.state.context;
          var currentContext = context[context.length - 1];
          if (currentContext === types.j_oTag || currentContext === types.j_expr) {
            context.pop();
          }
        }
        if ((_jsx = jsx) != null && _jsx.error || this.match(47)) {
          var _jsx2, _jsx3;
          state = state || this.state.clone();
          var typeParameters;
          var arrow = this.tryParse(function (abort) {
            var _arrowExpression$extr;
            typeParameters = _this8.flowParseTypeParameterDeclaration();
            var arrowExpression = _this8.forwardNoArrowParamsConversionAt(typeParameters, function () {
              var result = _superClass.prototype.parseMaybeAssign.call(_this8, refExpressionErrors, afterLeftParse);
              _this8.resetStartLocationFromNode(result, typeParameters);
              return result;
            });
            if ((_arrowExpression$extr = arrowExpression.extra) != null && _arrowExpression$extr.parenthesized) abort();
            var expr = _this8.maybeUnwrapTypeCastExpression(arrowExpression);
            if (expr.type !== "ArrowFunctionExpression") abort();
            expr.typeParameters = typeParameters;
            _this8.resetStartLocationFromNode(expr, typeParameters);
            return arrowExpression;
          }, state);
          var arrowExpression = null;
          if (arrow.node && this.maybeUnwrapTypeCastExpression(arrow.node).type === "ArrowFunctionExpression") {
            if (!arrow.error && !arrow.aborted) {
              if (arrow.node.async) {
                this.raise(FlowErrors.UnexpectedTypeParameterBeforeAsyncArrowFunction, typeParameters);
              }
              return arrow.node;
            }
            arrowExpression = arrow.node;
          }
          if ((_jsx2 = jsx) != null && _jsx2.node) {
            this.state = jsx.failState;
            return jsx.node;
          }
          if (arrowExpression) {
            this.state = arrow.failState;
            return arrowExpression;
          }
          if ((_jsx3 = jsx) != null && _jsx3.thrown) throw jsx.error;
          if (arrow.thrown) throw arrow.error;
          throw this.raise(FlowErrors.UnexpectedTokenAfterTypeParameter, typeParameters);
        }
        return _superClass.prototype.parseMaybeAssign.call(this, refExpressionErrors, afterLeftParse);
      };
      _proto.parseArrow = function parseArrow(node) {
        var _this9 = this;
        if (this.match(14)) {
          var result = this.tryParse(function () {
            var oldNoAnonFunctionType = _this9.state.noAnonFunctionType;
            _this9.state.noAnonFunctionType = true;
            var typeNode = _this9.startNode();
            var _this9$flowParseTypeA = _this9.flowParseTypeAndPredicateInitialiser();
            typeNode.typeAnnotation = _this9$flowParseTypeA[0];
            node.predicate = _this9$flowParseTypeA[1];
            _this9.state.noAnonFunctionType = oldNoAnonFunctionType;
            if (_this9.canInsertSemicolon()) _this9.unexpected();
            if (!_this9.match(19)) _this9.unexpected();
            return typeNode;
          });
          if (result.thrown) return null;
          if (result.error) this.state = result.failState;
          node.returnType = result.node.typeAnnotation ? this.finishNode(result.node, "TypeAnnotation") : null;
        }
        return _superClass.prototype.parseArrow.call(this, node);
      };
      _proto.shouldParseArrow = function shouldParseArrow(params) {
        return this.match(14) || _superClass.prototype.shouldParseArrow.call(this, params);
      };
      _proto.setArrowFunctionParameters = function setArrowFunctionParameters(node, params) {
        if (this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(node.start))) {
          node.params = params;
        } else {
          _superClass.prototype.setArrowFunctionParameters.call(this, node, params);
        }
      };
      _proto.checkParams = function checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged) {
        if (strictModeChanged === void 0) {
          strictModeChanged = true;
        }
        if (isArrowFunction && this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(node.start))) {
          return;
        }
        for (var i = 0; i < node.params.length; i++) {
          if (this.isThisParam(node.params[i]) && i > 0) {
            this.raise(FlowErrors.ThisParamMustBeFirst, node.params[i]);
          }
        }
        _superClass.prototype.checkParams.call(this, node, allowDuplicates, isArrowFunction, strictModeChanged);
      };
      _proto.parseParenAndDistinguishExpression = function parseParenAndDistinguishExpression(canBeArrow) {
        return _superClass.prototype.parseParenAndDistinguishExpression.call(this, canBeArrow && !this.state.noArrowAt.includes(this.sourceToOffsetPos(this.state.start)));
      };
      _proto.parseSubscripts = function parseSubscripts(base, startLoc, noCalls) {
        var _this0 = this;
        if (base.type === "Identifier" && base.name === "async" && this.state.noArrowAt.includes(startLoc.index)) {
          this.next();
          var node = this.startNodeAt(startLoc);
          node.callee = base;
          node.arguments = _superClass.prototype.parseCallExpressionArguments.call(this);
          base = this.finishNode(node, "CallExpression");
        } else if (base.type === "Identifier" && base.name === "async" && this.match(47)) {
          var state = this.state.clone();
          var arrow = this.tryParse(function (abort) {
            return _this0.parseAsyncArrowWithTypeParameters(startLoc) || abort();
          }, state);
          if (!arrow.error && !arrow.aborted) return arrow.node;
          var result = this.tryParse(function () {
            return _superClass.prototype.parseSubscripts.call(_this0, base, startLoc, noCalls);
          }, state);
          if (result.node && !result.error) return result.node;
          if (arrow.node) {
            this.state = arrow.failState;
            return arrow.node;
          }
          if (result.node) {
            this.state = result.failState;
            return result.node;
          }
          throw arrow.error || result.error;
        }
        return _superClass.prototype.parseSubscripts.call(this, base, startLoc, noCalls);
      };
      _proto.parseSubscript = function parseSubscript(base, startLoc, noCalls, subscriptState) {
        var _this1 = this;
        if (this.match(18) && this.isLookaheadToken_lt()) {
          subscriptState.optionalChainMember = true;
          if (noCalls) {
            subscriptState.stop = true;
            return base;
          }
          this.next();
          var node = this.startNodeAt(startLoc);
          node.callee = base;
          node.typeArguments = this.flowParseTypeParameterInstantiationInExpression();
          this.expect(10);
          node.arguments = this.parseCallExpressionArguments();
          node.optional = true;
          return this.finishCallExpression(node, true);
        } else if (!noCalls && this.shouldParseTypes() && (this.match(47) || this.match(51))) {
          var _node6 = this.startNodeAt(startLoc);
          _node6.callee = base;
          var result = this.tryParse(function () {
            _node6.typeArguments = _this1.flowParseTypeParameterInstantiationCallOrNew();
            _this1.expect(10);
            _node6.arguments = _superClass.prototype.parseCallExpressionArguments.call(_this1);
            if (subscriptState.optionalChainMember) {
              _node6.optional = false;
            }
            return _this1.finishCallExpression(_node6, subscriptState.optionalChainMember);
          });
          if (result.node) {
            if (result.error) this.state = result.failState;
            return result.node;
          }
        }
        return _superClass.prototype.parseSubscript.call(this, base, startLoc, noCalls, subscriptState);
      };
      _proto.parseNewCallee = function parseNewCallee(node) {
        var _this10 = this;
        _superClass.prototype.parseNewCallee.call(this, node);
        var targs = null;
        if (this.shouldParseTypes() && this.match(47)) {
          targs = this.tryParse(function () {
            return _this10.flowParseTypeParameterInstantiationCallOrNew();
          }).node;
        }
        node.typeArguments = targs;
      };
      _proto.parseAsyncArrowWithTypeParameters = function parseAsyncArrowWithTypeParameters(startLoc) {
        var node = this.startNodeAt(startLoc);
        this.parseFunctionParams(node, false);
        if (!this.parseArrow(node)) return;
        return _superClass.prototype.parseArrowExpression.call(this, node, undefined, true);
      };
      _proto.readToken_mult_modulo = function readToken_mult_modulo(code) {
        var next = this.input.charCodeAt(this.state.pos + 1);
        if (code === 42 && next === 47 && this.state.hasFlowComment) {
          this.state.hasFlowComment = false;
          this.state.pos += 2;
          this.nextToken();
          return;
        }
        _superClass.prototype.readToken_mult_modulo.call(this, code);
      };
      _proto.readToken_pipe_amp = function readToken_pipe_amp(code) {
        var next = this.input.charCodeAt(this.state.pos + 1);
        if (code === 124 && next === 125) {
          this.finishOp(9, 2);
          return;
        }
        _superClass.prototype.readToken_pipe_amp.call(this, code);
      };
      _proto.parseTopLevel = function parseTopLevel(file, program) {
        var fileNode = _superClass.prototype.parseTopLevel.call(this, file, program);
        if (this.state.hasFlowComment) {
          this.raise(FlowErrors.UnterminatedFlowComment, this.state.curPosition());
        }
        return fileNode;
      };
      _proto.skipBlockComment = function skipBlockComment() {
        if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
          if (this.state.hasFlowComment) {
            throw this.raise(FlowErrors.NestedFlowComment, this.state.startLoc);
          }
          this.hasFlowCommentCompletion();
          var commentSkip = this.skipFlowComment();
          if (commentSkip) {
            this.state.pos += commentSkip;
            this.state.hasFlowComment = true;
          }
          return;
        }
        return _superClass.prototype.skipBlockComment.call(this, this.state.hasFlowComment ? "*-/" : "*/");
      };
      _proto.skipFlowComment = function skipFlowComment() {
        var pos = this.state.pos;
        var shiftToFirstNonWhiteSpace = 2;
        while ([32, 9].includes(this.input.charCodeAt(pos + shiftToFirstNonWhiteSpace))) {
          shiftToFirstNonWhiteSpace++;
        }
        var ch2 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos);
        var ch3 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos + 1);
        if (ch2 === 58 && ch3 === 58) {
          return shiftToFirstNonWhiteSpace + 2;
        }
        if (this.input.slice(shiftToFirstNonWhiteSpace + pos, shiftToFirstNonWhiteSpace + pos + 12) === "flow-include") {
          return shiftToFirstNonWhiteSpace + 12;
        }
        if (ch2 === 58 && ch3 !== 58) {
          return shiftToFirstNonWhiteSpace;
        }
        return false;
      };
      _proto.hasFlowCommentCompletion = function hasFlowCommentCompletion() {
        var end = this.input.indexOf("*/", this.state.pos);
        if (end === -1) {
          throw this.raise(Errors.UnterminatedComment, this.state.curPosition());
        }
      };
      _proto.flowEnumErrorBooleanMemberNotInitialized = function flowEnumErrorBooleanMemberNotInitialized(loc, _ref14) {
        var enumName = _ref14.enumName,
          memberName = _ref14.memberName;
        this.raise(FlowErrors.EnumBooleanMemberNotInitialized, loc, {
          memberName: memberName,
          enumName: enumName
        });
      };
      _proto.flowEnumErrorInvalidMemberInitializer = function flowEnumErrorInvalidMemberInitializer(loc, enumContext) {
        return this.raise(!enumContext.explicitType ? FlowErrors.EnumInvalidMemberInitializerUnknownType : enumContext.explicitType === "symbol" ? FlowErrors.EnumInvalidMemberInitializerSymbolType : FlowErrors.EnumInvalidMemberInitializerPrimaryType, loc, enumContext);
      };
      _proto.flowEnumErrorNumberMemberNotInitialized = function flowEnumErrorNumberMemberNotInitialized(loc, details) {
        this.raise(FlowErrors.EnumNumberMemberNotInitialized, loc, details);
      };
      _proto.flowEnumErrorStringMemberInconsistentlyInitialized = function flowEnumErrorStringMemberInconsistentlyInitialized(node, details) {
        this.raise(FlowErrors.EnumStringMemberInconsistentlyInitialized, node, details);
      };
      _proto.flowEnumMemberInit = function flowEnumMemberInit() {
        var _this11 = this;
        var startLoc = this.state.startLoc;
        var endOfInit = function endOfInit() {
          return _this11.match(12) || _this11.match(8);
        };
        switch (this.state.type) {
          case 135:
            {
              var literal = this.parseNumericLiteral(this.state.value);
              if (endOfInit()) {
                return {
                  type: "number",
                  loc: literal.loc.start,
                  value: literal
                };
              }
              return {
                type: "invalid",
                loc: startLoc
              };
            }
          case 134:
            {
              var _literal = this.parseStringLiteral(this.state.value);
              if (endOfInit()) {
                return {
                  type: "string",
                  loc: _literal.loc.start,
                  value: _literal
                };
              }
              return {
                type: "invalid",
                loc: startLoc
              };
            }
          case 85:
          case 86:
            {
              var _literal2 = this.parseBooleanLiteral(this.match(85));
              if (endOfInit()) {
                return {
                  type: "boolean",
                  loc: _literal2.loc.start,
                  value: _literal2
                };
              }
              return {
                type: "invalid",
                loc: startLoc
              };
            }
          default:
            return {
              type: "invalid",
              loc: startLoc
            };
        }
      };
      _proto.flowEnumMemberRaw = function flowEnumMemberRaw() {
        var loc = this.state.startLoc;
        var id = this.parseIdentifier(true);
        var init = this.eat(29) ? this.flowEnumMemberInit() : {
          type: "none",
          loc: loc
        };
        return {
          id: id,
          init: init
        };
      };
      _proto.flowEnumCheckExplicitTypeMismatch = function flowEnumCheckExplicitTypeMismatch(loc, context, expectedType) {
        var explicitType = context.explicitType;
        if (explicitType === null) {
          return;
        }
        if (explicitType !== expectedType) {
          this.flowEnumErrorInvalidMemberInitializer(loc, context);
        }
      };
      _proto.flowEnumMembers = function flowEnumMembers(_ref15) {
        var enumName = _ref15.enumName,
          explicitType = _ref15.explicitType;
        var seenNames = new Set();
        var members = {
          booleanMembers: [],
          numberMembers: [],
          stringMembers: [],
          defaultedMembers: []
        };
        var hasUnknownMembers = false;
        while (!this.match(8)) {
          if (this.eat(21)) {
            hasUnknownMembers = true;
            break;
          }
          var memberNode = this.startNode();
          var _this$flowEnumMemberR = this.flowEnumMemberRaw(),
            id = _this$flowEnumMemberR.id,
            init = _this$flowEnumMemberR.init;
          var memberName = id.name;
          if (memberName === "") {
            continue;
          }
          if (/^[a-z]/.test(memberName)) {
            this.raise(FlowErrors.EnumInvalidMemberName, id, {
              memberName: memberName,
              suggestion: memberName[0].toUpperCase() + memberName.slice(1),
              enumName: enumName
            });
          }
          if (seenNames.has(memberName)) {
            this.raise(FlowErrors.EnumDuplicateMemberName, id, {
              memberName: memberName,
              enumName: enumName
            });
          }
          seenNames.add(memberName);
          var context = {
            enumName: enumName,
            explicitType: explicitType,
            memberName: memberName
          };
          memberNode.id = id;
          switch (init.type) {
            case "boolean":
              {
                this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "boolean");
                memberNode.init = init.value;
                members.booleanMembers.push(this.finishNode(memberNode, "EnumBooleanMember"));
                break;
              }
            case "number":
              {
                this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "number");
                memberNode.init = init.value;
                members.numberMembers.push(this.finishNode(memberNode, "EnumNumberMember"));
                break;
              }
            case "string":
              {
                this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "string");
                memberNode.init = init.value;
                members.stringMembers.push(this.finishNode(memberNode, "EnumStringMember"));
                break;
              }
            case "invalid":
              {
                throw this.flowEnumErrorInvalidMemberInitializer(init.loc, context);
              }
            case "none":
              {
                switch (explicitType) {
                  case "boolean":
                    this.flowEnumErrorBooleanMemberNotInitialized(init.loc, context);
                    break;
                  case "number":
                    this.flowEnumErrorNumberMemberNotInitialized(init.loc, context);
                    break;
                  default:
                    members.defaultedMembers.push(this.finishNode(memberNode, "EnumDefaultedMember"));
                }
              }
          }
          if (!this.match(8)) {
            this.expect(12);
          }
        }
        return {
          members: members,
          hasUnknownMembers: hasUnknownMembers
        };
      };
      _proto.flowEnumStringMembers = function flowEnumStringMembers(initializedMembers, defaultedMembers, _ref16) {
        var enumName = _ref16.enumName;
        if (initializedMembers.length === 0) {
          return defaultedMembers;
        } else if (defaultedMembers.length === 0) {
          return initializedMembers;
        } else if (defaultedMembers.length > initializedMembers.length) {
          for (var _i2 = 0; _i2 < initializedMembers.length; _i2++) {
            var member = initializedMembers[_i2];
            this.flowEnumErrorStringMemberInconsistentlyInitialized(member, {
              enumName: enumName
            });
          }
          return defaultedMembers;
        } else {
          for (var _i4 = 0; _i4 < defaultedMembers.length; _i4++) {
            var _member = defaultedMembers[_i4];
            this.flowEnumErrorStringMemberInconsistentlyInitialized(_member, {
              enumName: enumName
            });
          }
          return initializedMembers;
        }
      };
      _proto.flowEnumParseExplicitType = function flowEnumParseExplicitType(_ref17) {
        var enumName = _ref17.enumName;
        if (!this.eatContextual(102)) return null;
        if (!tokenIsIdentifier(this.state.type)) {
          throw this.raise(FlowErrors.EnumInvalidExplicitTypeUnknownSupplied, this.state.startLoc, {
            enumName: enumName
          });
        }
        var value = this.state.value;
        this.next();
        if (value !== "boolean" && value !== "number" && value !== "string" && value !== "symbol") {
          this.raise(FlowErrors.EnumInvalidExplicitType, this.state.startLoc, {
            enumName: enumName,
            invalidEnumType: value
          });
        }
        return value;
      };
      _proto.flowEnumBody = function flowEnumBody(node, id) {
        var _this12 = this;
        var enumName = id.name;
        var nameLoc = id.loc.start;
        var explicitType = this.flowEnumParseExplicitType({
          enumName: enumName
        });
        this.expect(5);
        var _this$flowEnumMembers = this.flowEnumMembers({
            enumName: enumName,
            explicitType: explicitType
          }),
          members = _this$flowEnumMembers.members,
          hasUnknownMembers = _this$flowEnumMembers.hasUnknownMembers;
        node.hasUnknownMembers = hasUnknownMembers;
        switch (explicitType) {
          case "boolean":
            node.explicitType = true;
            node.members = members.booleanMembers;
            this.expect(8);
            return this.finishNode(node, "EnumBooleanBody");
          case "number":
            node.explicitType = true;
            node.members = members.numberMembers;
            this.expect(8);
            return this.finishNode(node, "EnumNumberBody");
          case "string":
            node.explicitType = true;
            node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
              enumName: enumName
            });
            this.expect(8);
            return this.finishNode(node, "EnumStringBody");
          case "symbol":
            node.members = members.defaultedMembers;
            this.expect(8);
            return this.finishNode(node, "EnumSymbolBody");
          default:
            {
              var empty = function empty() {
                node.members = [];
                _this12.expect(8);
                return _this12.finishNode(node, "EnumStringBody");
              };
              node.explicitType = false;
              var boolsLen = members.booleanMembers.length;
              var numsLen = members.numberMembers.length;
              var strsLen = members.stringMembers.length;
              var defaultedLen = members.defaultedMembers.length;
              if (!boolsLen && !numsLen && !strsLen && !defaultedLen) {
                return empty();
              } else if (!boolsLen && !numsLen) {
                node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
                  enumName: enumName
                });
                this.expect(8);
                return this.finishNode(node, "EnumStringBody");
              } else if (!numsLen && !strsLen && boolsLen >= defaultedLen) {
                for (var _i6 = 0, _members$defaultedMem2 = members.defaultedMembers; _i6 < _members$defaultedMem2.length; _i6++) {
                  var member = _members$defaultedMem2[_i6];
                  this.flowEnumErrorBooleanMemberNotInitialized(member.loc.start, {
                    enumName: enumName,
                    memberName: member.id.name
                  });
                }
                node.members = members.booleanMembers;
                this.expect(8);
                return this.finishNode(node, "EnumBooleanBody");
              } else if (!boolsLen && !strsLen && numsLen >= defaultedLen) {
                for (var _i8 = 0, _members$defaultedMem4 = members.defaultedMembers; _i8 < _members$defaultedMem4.length; _i8++) {
                  var _member2 = _members$defaultedMem4[_i8];
                  this.flowEnumErrorNumberMemberNotInitialized(_member2.loc.start, {
                    enumName: enumName,
                    memberName: _member2.id.name
                  });
                }
                node.members = members.numberMembers;
                this.expect(8);
                return this.finishNode(node, "EnumNumberBody");
              } else {
                this.raise(FlowErrors.EnumInconsistentMemberValues, nameLoc, {
                  enumName: enumName
                });
                return empty();
              }
            }
        }
      };
      _proto.flowParseEnumDeclaration = function flowParseEnumDeclaration(node) {
        var id = this.parseIdentifier();
        node.id = id;
        node.body = this.flowEnumBody(this.startNode(), id);
        return this.finishNode(node, "EnumDeclaration");
      };
      _proto.jsxParseOpeningElementAfterName = function jsxParseOpeningElementAfterName(node) {
        if (this.shouldParseTypes()) {
          if (this.match(47) || this.match(51)) {
            node.typeArguments = this.flowParseTypeParameterInstantiationInExpression();
          }
        }
        return _superClass.prototype.jsxParseOpeningElementAfterName.call(this, node);
      };
      _proto.isLookaheadToken_lt = function isLookaheadToken_lt() {
        var next = this.nextTokenStart();
        if (this.input.charCodeAt(next) === 60) {
          var afterNext = this.input.charCodeAt(next + 1);
          return afterNext !== 60 && afterNext !== 61;
        }
        return false;
      };
      _proto.reScan_lt_gt = function reScan_lt_gt() {
        var type = this.state.type;
        if (type === 47) {
          this.state.pos -= 1;
          this.readToken_lt();
        } else if (type === 48) {
          this.state.pos -= 1;
          this.readToken_gt();
        }
      };
      _proto.reScan_lt = function reScan_lt() {
        var type = this.state.type;
        if (type === 51) {
          this.state.pos -= 2;
          this.finishOp(47, 1);
          return 47;
        }
        return type;
      };
      _proto.maybeUnwrapTypeCastExpression = function maybeUnwrapTypeCastExpression(node) {
        return node.type === "TypeCastExpression" ? node.expression : node;
      };
      return _createClass(FlowParserMixin);
    }(superClass);
  });

  var entities = {
    __proto__: null,
    quot: "\"",
    amp: "&",
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: "\xA0",
    iexcl: "\xA1",
    cent: "\xA2",
    pound: "\xA3",
    curren: "\xA4",
    yen: "\xA5",
    brvbar: "\xA6",
    sect: "\xA7",
    uml: "\xA8",
    copy: "\xA9",
    ordf: "\xAA",
    laquo: "\xAB",
    not: "\xAC",
    shy: "\xAD",
    reg: "\xAE",
    macr: "\xAF",
    deg: "\xB0",
    plusmn: "\xB1",
    sup2: "\xB2",
    sup3: "\xB3",
    acute: "\xB4",
    micro: "\xB5",
    para: "\xB6",
    middot: "\xB7",
    cedil: "\xB8",
    sup1: "\xB9",
    ordm: "\xBA",
    raquo: "\xBB",
    frac14: "\xBC",
    frac12: "\xBD",
    frac34: "\xBE",
    iquest: "\xBF",
    Agrave: "\xC0",
    Aacute: "\xC1",
    Acirc: "\xC2",
    Atilde: "\xC3",
    Auml: "\xC4",
    Aring: "\xC5",
    AElig: "\xC6",
    Ccedil: "\xC7",
    Egrave: "\xC8",
    Eacute: "\xC9",
    Ecirc: "\xCA",
    Euml: "\xCB",
    Igrave: "\xCC",
    Iacute: "\xCD",
    Icirc: "\xCE",
    Iuml: "\xCF",
    ETH: "\xD0",
    Ntilde: "\xD1",
    Ograve: "\xD2",
    Oacute: "\xD3",
    Ocirc: "\xD4",
    Otilde: "\xD5",
    Ouml: "\xD6",
    times: "\xD7",
    Oslash: "\xD8",
    Ugrave: "\xD9",
    Uacute: "\xDA",
    Ucirc: "\xDB",
    Uuml: "\xDC",
    Yacute: "\xDD",
    THORN: "\xDE",
    szlig: "\xDF",
    agrave: "\xE0",
    aacute: "\xE1",
    acirc: "\xE2",
    atilde: "\xE3",
    auml: "\xE4",
    aring: "\xE5",
    aelig: "\xE6",
    ccedil: "\xE7",
    egrave: "\xE8",
    eacute: "\xE9",
    ecirc: "\xEA",
    euml: "\xEB",
    igrave: "\xEC",
    iacute: "\xED",
    icirc: "\xEE",
    iuml: "\xEF",
    eth: "\xF0",
    ntilde: "\xF1",
    ograve: "\xF2",
    oacute: "\xF3",
    ocirc: "\xF4",
    otilde: "\xF5",
    ouml: "\xF6",
    divide: "\xF7",
    oslash: "\xF8",
    ugrave: "\xF9",
    uacute: "\xFA",
    ucirc: "\xFB",
    uuml: "\xFC",
    yacute: "\xFD",
    thorn: "\xFE",
    yuml: "\xFF",
    OElig: "\u0152",
    oelig: "\u0153",
    Scaron: "\u0160",
    scaron: "\u0161",
    Yuml: "\u0178",
    fnof: "\u0192",
    circ: "\u02C6",
    tilde: "\u02DC",
    Alpha: "\u0391",
    Beta: "\u0392",
    Gamma: "\u0393",
    Delta: "\u0394",
    Epsilon: "\u0395",
    Zeta: "\u0396",
    Eta: "\u0397",
    Theta: "\u0398",
    Iota: "\u0399",
    Kappa: "\u039A",
    Lambda: "\u039B",
    Mu: "\u039C",
    Nu: "\u039D",
    Xi: "\u039E",
    Omicron: "\u039F",
    Pi: "\u03A0",
    Rho: "\u03A1",
    Sigma: "\u03A3",
    Tau: "\u03A4",
    Upsilon: "\u03A5",
    Phi: "\u03A6",
    Chi: "\u03A7",
    Psi: "\u03A8",
    Omega: "\u03A9",
    alpha: "\u03B1",
    beta: "\u03B2",
    gamma: "\u03B3",
    delta: "\u03B4",
    epsilon: "\u03B5",
    zeta: "\u03B6",
    eta: "\u03B7",
    theta: "\u03B8",
    iota: "\u03B9",
    kappa: "\u03BA",
    lambda: "\u03BB",
    mu: "\u03BC",
    nu: "\u03BD",
    xi: "\u03BE",
    omicron: "\u03BF",
    pi: "\u03C0",
    rho: "\u03C1",
    sigmaf: "\u03C2",
    sigma: "\u03C3",
    tau: "\u03C4",
    upsilon: "\u03C5",
    phi: "\u03C6",
    chi: "\u03C7",
    psi: "\u03C8",
    omega: "\u03C9",
    thetasym: "\u03D1",
    upsih: "\u03D2",
    piv: "\u03D6",
    ensp: "\u2002",
    emsp: "\u2003",
    thinsp: "\u2009",
    zwnj: "\u200C",
    zwj: "\u200D",
    lrm: "\u200E",
    rlm: "\u200F",
    ndash: "\u2013",
    mdash: "\u2014",
    lsquo: "\u2018",
    rsquo: "\u2019",
    sbquo: "\u201A",
    ldquo: "\u201C",
    rdquo: "\u201D",
    bdquo: "\u201E",
    dagger: "\u2020",
    Dagger: "\u2021",
    bull: "\u2022",
    hellip: "\u2026",
    permil: "\u2030",
    prime: "\u2032",
    Prime: "\u2033",
    lsaquo: "\u2039",
    rsaquo: "\u203A",
    oline: "\u203E",
    frasl: "\u2044",
    euro: "\u20AC",
    image: "\u2111",
    weierp: "\u2118",
    real: "\u211C",
    trade: "\u2122",
    alefsym: "\u2135",
    larr: "\u2190",
    uarr: "\u2191",
    rarr: "\u2192",
    darr: "\u2193",
    harr: "\u2194",
    crarr: "\u21B5",
    lArr: "\u21D0",
    uArr: "\u21D1",
    rArr: "\u21D2",
    dArr: "\u21D3",
    hArr: "\u21D4",
    forall: "\u2200",
    part: "\u2202",
    exist: "\u2203",
    empty: "\u2205",
    nabla: "\u2207",
    isin: "\u2208",
    notin: "\u2209",
    ni: "\u220B",
    prod: "\u220F",
    sum: "\u2211",
    minus: "\u2212",
    lowast: "\u2217",
    radic: "\u221A",
    prop: "\u221D",
    infin: "\u221E",
    ang: "\u2220",
    and: "\u2227",
    or: "\u2228",
    cap: "\u2229",
    cup: "\u222A",
    "int": "\u222B",
    there4: "\u2234",
    sim: "\u223C",
    cong: "\u2245",
    asymp: "\u2248",
    ne: "\u2260",
    equiv: "\u2261",
    le: "\u2264",
    ge: "\u2265",
    sub: "\u2282",
    sup: "\u2283",
    nsub: "\u2284",
    sube: "\u2286",
    supe: "\u2287",
    oplus: "\u2295",
    otimes: "\u2297",
    perp: "\u22A5",
    sdot: "\u22C5",
    lceil: "\u2308",
    rceil: "\u2309",
    lfloor: "\u230A",
    rfloor: "\u230B",
    lang: "\u2329",
    rang: "\u232A",
    loz: "\u25CA",
    spades: "\u2660",
    clubs: "\u2663",
    hearts: "\u2665",
    diams: "\u2666"
  };

  var lineBreak = /\r\n|[\r\n\u2028\u2029]/;
  var lineBreakG = new RegExp(lineBreak.source, "g");
  function isNewLine(code) {
    switch (code) {
      case 10:
      case 13:
      case 8232:
      case 8233:
        return true;
      default:
        return false;
    }
  }
  function hasNewLine(input, start, end) {
    for (var i = start; i < end; i++) {
      if (isNewLine(input.charCodeAt(i))) {
        return true;
      }
    }
    return false;
  }
  var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
  var skipWhiteSpaceInLine = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g;
  function isWhitespace(code) {
    switch (code) {
      case 0x0009:
      case 0x000b:
      case 0x000c:
      case 32:
      case 160:
      case 5760:
      case 0x2000:
      case 0x2001:
      case 0x2002:
      case 0x2003:
      case 0x2004:
      case 0x2005:
      case 0x2006:
      case 0x2007:
      case 0x2008:
      case 0x2009:
      case 0x200a:
      case 0x202f:
      case 0x205f:
      case 0x3000:
      case 0xfeff:
        return true;
      default:
        return false;
    }
  }

  var _templateObject$K;
  var JsxErrors = ParseErrorEnum(_templateObject$K || (_templateObject$K = _taggedTemplateLiteralLoose(["jsx"])))({
    AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
    MissingClosingTagElement: function MissingClosingTagElement(_ref) {
      var openingTagName = _ref.openingTagName;
      return "Expected corresponding JSX closing tag for <" + openingTagName + ">.";
    },
    MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
    UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
    UnexpectedToken: function UnexpectedToken(_ref2) {
      var unexpected = _ref2.unexpected,
        HTMLEntity = _ref2.HTMLEntity;
      return "Unexpected token `" + unexpected + "`. Did you mean `" + HTMLEntity + "` or `{'" + unexpected + "'}`?";
    },
    UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
    UnterminatedJsxContent: "Unterminated JSX contents.",
    UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
  });
  function isFragment(object) {
    return object ? object.type === "JSXOpeningFragment" || object.type === "JSXClosingFragment" : false;
  }
  function getQualifiedJSXName(object) {
    if (object.type === "JSXIdentifier") {
      return object.name;
    }
    if (object.type === "JSXNamespacedName") {
      return object.namespace.name + ":" + object.name.name;
    }
    if (object.type === "JSXMemberExpression") {
      return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
    }
    throw new Error("Node had unexpected type: " + object.type);
  }
  var jsx = (function (superClass) {
    return function (_superClass) {
      function JSXParserMixin() {
        return _superClass.apply(this, arguments) || this;
      }
      _inherits(JSXParserMixin, _superClass);
      var _proto = JSXParserMixin.prototype;
      _proto.jsxReadToken = function jsxReadToken() {
        var out = "";
        var chunkStart = this.state.pos;
        for (;;) {
          if (this.state.pos >= this.length) {
            throw this.raise(JsxErrors.UnterminatedJsxContent, this.state.startLoc);
          }
          var ch = this.input.charCodeAt(this.state.pos);
          switch (ch) {
            case 60:
            case 123:
              if (this.state.pos === this.state.start) {
                if (ch === 60 && this.state.canStartJSXElement) {
                  ++this.state.pos;
                  this.finishToken(143);
                } else {
                  _superClass.prototype.getTokenFromCode.call(this, ch);
                }
                return;
              }
              out += this.input.slice(chunkStart, this.state.pos);
              this.finishToken(142, out);
              return;
            case 38:
              out += this.input.slice(chunkStart, this.state.pos);
              out += this.jsxReadEntity();
              chunkStart = this.state.pos;
              break;
            case 62:
            case 125:
            default:
              if (isNewLine(ch)) {
                out += this.input.slice(chunkStart, this.state.pos);
                out += this.jsxReadNewLine(true);
                chunkStart = this.state.pos;
              } else {
                ++this.state.pos;
              }
          }
        }
      };
      _proto.jsxReadNewLine = function jsxReadNewLine(normalizeCRLF) {
        var ch = this.input.charCodeAt(this.state.pos);
        var out;
        ++this.state.pos;
        if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
          ++this.state.pos;
          out = normalizeCRLF ? "\n" : "\r\n";
        } else {
          out = String.fromCharCode(ch);
        }
        ++this.state.curLine;
        this.state.lineStart = this.state.pos;
        return out;
      };
      _proto.jsxReadString = function jsxReadString(quote) {
        var out = "";
        var chunkStart = ++this.state.pos;
        for (;;) {
          if (this.state.pos >= this.length) {
            throw this.raise(Errors.UnterminatedString, this.state.startLoc);
          }
          var ch = this.input.charCodeAt(this.state.pos);
          if (ch === quote) break;
          if (ch === 38) {
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadEntity();
            chunkStart = this.state.pos;
          } else if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadNewLine(false);
            chunkStart = this.state.pos;
          } else {
            ++this.state.pos;
          }
        }
        out += this.input.slice(chunkStart, this.state.pos++);
        this.finishToken(134, out);
      };
      _proto.jsxReadEntity = function jsxReadEntity() {
        var startPos = ++this.state.pos;
        if (this.codePointAtPos(this.state.pos) === 35) {
          ++this.state.pos;
          var radix = 10;
          if (this.codePointAtPos(this.state.pos) === 120) {
            radix = 16;
            ++this.state.pos;
          }
          var codePoint = this.readInt(radix, undefined, false, "bail");
          if (codePoint !== null && this.codePointAtPos(this.state.pos) === 59) {
            ++this.state.pos;
            return String.fromCodePoint(codePoint);
          }
        } else {
          var count = 0;
          var semi = false;
          while (count++ < 10 && this.state.pos < this.length && !(semi = this.codePointAtPos(this.state.pos) === 59)) {
            ++this.state.pos;
          }
          if (semi) {
            var desc = this.input.slice(startPos, this.state.pos);
            var entity = entities[desc];
            ++this.state.pos;
            if (entity) {
              return entity;
            }
          }
        }
        this.state.pos = startPos;
        return "&";
      };
      _proto.jsxReadWord = function jsxReadWord() {
        var ch;
        var start = this.state.pos;
        do {
          ch = this.input.charCodeAt(++this.state.pos);
        } while (isIdentifierChar(ch) || ch === 45);
        this.finishToken(141, this.input.slice(start, this.state.pos));
      };
      _proto.jsxParseIdentifier = function jsxParseIdentifier() {
        var node = this.startNode();
        if (this.match(141)) {
          node.name = this.state.value;
        } else if (tokenIsKeyword(this.state.type)) {
          node.name = tokenLabelName(this.state.type);
        } else {
          this.unexpected();
        }
        this.next();
        return this.finishNode(node, "JSXIdentifier");
      };
      _proto.jsxParseNamespacedName = function jsxParseNamespacedName() {
        var startLoc = this.state.startLoc;
        var name = this.jsxParseIdentifier();
        if (!this.eat(14)) return name;
        var node = this.startNodeAt(startLoc);
        node.namespace = name;
        node.name = this.jsxParseIdentifier();
        return this.finishNode(node, "JSXNamespacedName");
      };
      _proto.jsxParseElementName = function jsxParseElementName() {
        var startLoc = this.state.startLoc;
        var node = this.jsxParseNamespacedName();
        if (node.type === "JSXNamespacedName") {
          return node;
        }
        while (this.eat(16)) {
          var newNode = this.startNodeAt(startLoc);
          newNode.object = node;
          newNode.property = this.jsxParseIdentifier();
          node = this.finishNode(newNode, "JSXMemberExpression");
        }
        return node;
      };
      _proto.jsxParseAttributeValue = function jsxParseAttributeValue() {
        var node;
        switch (this.state.type) {
          case 5:
            node = this.startNode();
            this.setContext(types.brace);
            this.next();
            node = this.jsxParseExpressionContainer(node, types.j_oTag);
            if (node.expression.type === "JSXEmptyExpression") {
              this.raise(JsxErrors.AttributeIsEmpty, node);
            }
            return node;
          case 143:
          case 134:
            return this.parseExprAtom();
          default:
            throw this.raise(JsxErrors.UnsupportedJsxValue, this.state.startLoc);
        }
      };
      _proto.jsxParseEmptyExpression = function jsxParseEmptyExpression() {
        var node = this.startNodeAt(this.state.lastTokEndLoc);
        return this.finishNodeAt(node, "JSXEmptyExpression", this.state.startLoc);
      };
      _proto.jsxParseSpreadChild = function jsxParseSpreadChild(node) {
        this.next();
        node.expression = this.parseExpression();
        this.setContext(types.j_expr);
        this.state.canStartJSXElement = true;
        this.expect(8);
        return this.finishNode(node, "JSXSpreadChild");
      };
      _proto.jsxParseExpressionContainer = function jsxParseExpressionContainer(node, previousContext) {
        if (this.match(8)) {
          node.expression = this.jsxParseEmptyExpression();
        } else {
          var expression = this.parseExpression();
          node.expression = expression;
        }
        this.setContext(previousContext);
        this.state.canStartJSXElement = true;
        this.expect(8);
        return this.finishNode(node, "JSXExpressionContainer");
      };
      _proto.jsxParseAttribute = function jsxParseAttribute() {
        var node = this.startNode();
        if (this.match(5)) {
          this.setContext(types.brace);
          this.next();
          this.expect(21);
          node.argument = this.parseMaybeAssignAllowIn();
          this.setContext(types.j_oTag);
          this.state.canStartJSXElement = true;
          this.expect(8);
          return this.finishNode(node, "JSXSpreadAttribute");
        }
        node.name = this.jsxParseNamespacedName();
        node.value = this.eat(29) ? this.jsxParseAttributeValue() : null;
        return this.finishNode(node, "JSXAttribute");
      };
      _proto.jsxParseOpeningElementAt = function jsxParseOpeningElementAt(startLoc) {
        var node = this.startNodeAt(startLoc);
        if (this.eat(144)) {
          return this.finishNode(node, "JSXOpeningFragment");
        }
        node.name = this.jsxParseElementName();
        return this.jsxParseOpeningElementAfterName(node);
      };
      _proto.jsxParseOpeningElementAfterName = function jsxParseOpeningElementAfterName(node) {
        var attributes = [];
        while (!this.match(56) && !this.match(144)) {
          attributes.push(this.jsxParseAttribute());
        }
        node.attributes = attributes;
        node.selfClosing = this.eat(56);
        this.expect(144);
        return this.finishNode(node, "JSXOpeningElement");
      };
      _proto.jsxParseClosingElementAt = function jsxParseClosingElementAt(startLoc) {
        var node = this.startNodeAt(startLoc);
        if (this.eat(144)) {
          return this.finishNode(node, "JSXClosingFragment");
        }
        node.name = this.jsxParseElementName();
        this.expect(144);
        return this.finishNode(node, "JSXClosingElement");
      };
      _proto.jsxParseElementAt = function jsxParseElementAt(startLoc) {
        var node = this.startNodeAt(startLoc);
        var children = [];
        var openingElement = this.jsxParseOpeningElementAt(startLoc);
        var closingElement = null;
        if (!openingElement.selfClosing) {
          contents: for (;;) {
            switch (this.state.type) {
              case 143:
                startLoc = this.state.startLoc;
                this.next();
                if (this.eat(56)) {
                  closingElement = this.jsxParseClosingElementAt(startLoc);
                  break contents;
                }
                children.push(this.jsxParseElementAt(startLoc));
                break;
              case 142:
                children.push(this.parseLiteral(this.state.value, "JSXText"));
                break;
              case 5:
                {
                  var _node = this.startNode();
                  this.setContext(types.brace);
                  this.next();
                  if (this.match(21)) {
                    children.push(this.jsxParseSpreadChild(_node));
                  } else {
                    children.push(this.jsxParseExpressionContainer(_node, types.j_expr));
                  }
                  break;
                }
              default:
                this.unexpected();
            }
          }
          if (isFragment(openingElement) && !isFragment(closingElement) && closingElement !== null) {
            this.raise(JsxErrors.MissingClosingTagFragment, closingElement);
          } else if (!isFragment(openingElement) && isFragment(closingElement)) {
            this.raise(JsxErrors.MissingClosingTagElement, closingElement, {
              openingTagName: getQualifiedJSXName(openingElement.name)
            });
          } else if (!isFragment(openingElement) && !isFragment(closingElement)) {
            if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
              this.raise(JsxErrors.MissingClosingTagElement, closingElement, {
                openingTagName: getQualifiedJSXName(openingElement.name)
              });
            }
          }
        }
        if (isFragment(openingElement)) {
          node.openingFragment = openingElement;
          node.closingFragment = closingElement;
        } else {
          node.openingElement = openingElement;
          node.closingElement = closingElement;
        }
        node.children = children;
        if (this.match(47)) {
          throw this.raise(JsxErrors.UnwrappedAdjacentJSXElements, this.state.startLoc);
        }
        return isFragment(openingElement) ? this.finishNode(node, "JSXFragment") : this.finishNode(node, "JSXElement");
      };
      _proto.jsxParseElement = function jsxParseElement() {
        var startLoc = this.state.startLoc;
        this.next();
        return this.jsxParseElementAt(startLoc);
      };
      _proto.setContext = function setContext(newContext) {
        var context = this.state.context;
        context[context.length - 1] = newContext;
      };
      _proto.parseExprAtom = function parseExprAtom(refExpressionErrors) {
        if (this.match(143)) {
          return this.jsxParseElement();
        } else if (this.match(47) && this.input.charCodeAt(this.state.pos) !== 33) {
          this.replaceToken(143);
          return this.jsxParseElement();
        } else {
          return _superClass.prototype.parseExprAtom.call(this, refExpressionErrors);
        }
      };
      _proto.skipSpace = function skipSpace() {
        var curContext = this.curContext();
        if (!curContext.preserveSpace) _superClass.prototype.skipSpace.call(this);
      };
      _proto.getTokenFromCode = function getTokenFromCode(code) {
        var context = this.curContext();
        if (context === types.j_expr) {
          this.jsxReadToken();
          return;
        }
        if (context === types.j_oTag || context === types.j_cTag) {
          if (isIdentifierStart(code)) {
            this.jsxReadWord();
            return;
          }
          if (code === 62) {
            ++this.state.pos;
            this.finishToken(144);
            return;
          }
          if ((code === 34 || code === 39) && context === types.j_oTag) {
            this.jsxReadString(code);
            return;
          }
        }
        if (code === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33) {
          ++this.state.pos;
          this.finishToken(143);
          return;
        }
        _superClass.prototype.getTokenFromCode.call(this, code);
      };
      _proto.updateContext = function updateContext(prevType) {
        var _this$state = this.state,
          context = _this$state.context,
          type = _this$state.type;
        if (type === 56 && prevType === 143) {
          context.splice(-2, 2, types.j_cTag);
          this.state.canStartJSXElement = false;
        } else if (type === 143) {
          context.push(types.j_oTag);
        } else if (type === 144) {
          var out = context[context.length - 1];
          if (out === types.j_oTag && prevType === 56 || out === types.j_cTag) {
            context.pop();
            this.state.canStartJSXElement = context[context.length - 1] === types.j_expr;
          } else {
            this.setContext(types.j_expr);
            this.state.canStartJSXElement = true;
          }
        } else {
          this.state.canStartJSXElement = tokenComesBeforeExpression(type);
        }
      };
      return _createClass(JSXParserMixin);
    }(superClass);
  });

  var TypeScriptScope = function (_Scope) {
    function TypeScriptScope() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _Scope.call.apply(_Scope, [this].concat(args)) || this;
      _this.tsNames = new Map();
      return _this;
    }
    _inherits(TypeScriptScope, _Scope);
    return _createClass(TypeScriptScope);
  }(Scope$2);
  var TypeScriptScopeHandler = function (_ScopeHandler) {
    function TypeScriptScopeHandler() {
      var _this2;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      _this2 = _ScopeHandler.call.apply(_ScopeHandler, [this].concat(args)) || this;
      _this2.importsStack = [];
      return _this2;
    }
    _inherits(TypeScriptScopeHandler, _ScopeHandler);
    var _proto = TypeScriptScopeHandler.prototype;
    _proto.createScope = function createScope(flags) {
      this.importsStack.push(new Set());
      return new TypeScriptScope(flags);
    };
    _proto.enter = function enter(flags) {
      if (flags === ScopeFlag.TS_MODULE) {
        this.importsStack.push(new Set());
      }
      _ScopeHandler.prototype.enter.call(this, flags);
    };
    _proto.exit = function exit() {
      var flags = _ScopeHandler.prototype.exit.call(this);
      if (flags === ScopeFlag.TS_MODULE) {
        this.importsStack.pop();
      }
      return flags;
    };
    _proto.hasImport = function hasImport(name, allowShadow) {
      var len = this.importsStack.length;
      if (this.importsStack[len - 1].has(name)) {
        return true;
      }
      if (!allowShadow && len > 1) {
        for (var i = 0; i < len - 1; i++) {
          if (this.importsStack[i].has(name)) return true;
        }
      }
      return false;
    };
    _proto.declareName = function declareName(name, bindingType, loc) {
      if (bindingType & BindingFlag.FLAG_TS_IMPORT) {
        if (this.hasImport(name, true)) {
          this.parser.raise(Errors.VarRedeclaration, loc, {
            identifierName: name
          });
        }
        this.importsStack[this.importsStack.length - 1].add(name);
        return;
      }
      var scope = this.currentScope();
      var type = scope.tsNames.get(name) || 0;
      if (bindingType & BindingFlag.FLAG_TS_EXPORT_ONLY) {
        this.maybeExportDefined(scope, name);
        scope.tsNames.set(name, type | 16);
        return;
      }
      _ScopeHandler.prototype.declareName.call(this, name, bindingType, loc);
      if (bindingType & BindingFlag.KIND_TYPE) {
        if (!(bindingType & BindingFlag.KIND_VALUE)) {
          this.checkRedeclarationInScope(scope, name, bindingType, loc);
          this.maybeExportDefined(scope, name);
        }
        type = type | 1;
      }
      if (bindingType & BindingFlag.FLAG_TS_ENUM) {
        type = type | 2;
      }
      if (bindingType & BindingFlag.FLAG_TS_CONST_ENUM) {
        type = type | 4;
      }
      if (bindingType & BindingFlag.FLAG_CLASS) {
        type = type | 8;
      }
      if (type) scope.tsNames.set(name, type);
    };
    _proto.isRedeclaredInScope = function isRedeclaredInScope(scope, name, bindingType) {
      var type = scope.tsNames.get(name);
      if ((type & 2) > 0) {
        if (bindingType & BindingFlag.FLAG_TS_ENUM) {
          var isConst = !!(bindingType & BindingFlag.FLAG_TS_CONST_ENUM);
          var wasConst = (type & 4) > 0;
          return isConst !== wasConst;
        }
        return true;
      }
      if (bindingType & BindingFlag.FLAG_CLASS && (type & 8) > 0) {
        if (scope.names.get(name) & NameType.Lexical) {
          return !!(bindingType & BindingFlag.KIND_VALUE);
        } else {
          return false;
        }
      }
      if (bindingType & BindingFlag.KIND_TYPE && (type & 1) > 0) {
        return true;
      }
      return _ScopeHandler.prototype.isRedeclaredInScope.call(this, scope, name, bindingType);
    };
    _proto.checkLocalExport = function checkLocalExport(id) {
      var name = id.name;
      if (this.hasImport(name)) return;
      var len = this.scopeStack.length;
      for (var i = len - 1; i >= 0; i--) {
        var scope = this.scopeStack[i];
        var type = scope.tsNames.get(name);
        if ((type & 1) > 0 || (type & 16) > 0) {
          return;
        }
      }
      _ScopeHandler.prototype.checkLocalExport.call(this, id);
    };
    return _createClass(TypeScriptScopeHandler);
  }(ScopeHandler);

  var ParamKind = {
    PARAM: 0,
    PARAM_YIELD: 1,
    PARAM_AWAIT: 2,
    PARAM_RETURN: 4,
    PARAM_IN: 8
  };
  var ProductionParameterHandler = function () {
    function ProductionParameterHandler() {
      this.stacks = [];
    }
    var _proto = ProductionParameterHandler.prototype;
    _proto.enter = function enter(flags) {
      this.stacks.push(flags);
    };
    _proto.exit = function exit() {
      this.stacks.pop();
    };
    _proto.currentFlags = function currentFlags() {
      return this.stacks[this.stacks.length - 1];
    };
    return _createClass(ProductionParameterHandler, [{
      key: "hasAwait",
      get: function get() {
        return (this.currentFlags() & ParamKind.PARAM_AWAIT) > 0;
      }
    }, {
      key: "hasYield",
      get: function get() {
        return (this.currentFlags() & ParamKind.PARAM_YIELD) > 0;
      }
    }, {
      key: "hasReturn",
      get: function get() {
        return (this.currentFlags() & ParamKind.PARAM_RETURN) > 0;
      }
    }, {
      key: "hasIn",
      get: function get() {
        return (this.currentFlags() & ParamKind.PARAM_IN) > 0;
      }
    }]);
  }();
  function functionFlags(isAsync, isGenerator) {
    return (isAsync ? ParamKind.PARAM_AWAIT : 0) | (isGenerator ? ParamKind.PARAM_YIELD : 0);
  }

  var BaseParser = function () {
    function BaseParser() {
      this.sawUnambiguousESM = false;
      this.ambiguousScriptDifferentAst = false;
    }
    var _proto = BaseParser.prototype;
    _proto.sourceToOffsetPos = function sourceToOffsetPos(sourcePos) {
      return sourcePos + this.startIndex;
    };
    _proto.offsetToSourcePos = function offsetToSourcePos(offsetPos) {
      return offsetPos - this.startIndex;
    };
    _proto.hasPlugin = function hasPlugin(pluginConfig) {
      if (typeof pluginConfig === "string") {
        return this.plugins.has(pluginConfig);
      } else {
        var pluginName = pluginConfig[0],
          pluginOptions = pluginConfig[1];
        if (!this.hasPlugin(pluginName)) {
          return false;
        }
        var actualOptions = this.plugins.get(pluginName);
        for (var _i2 = 0, _Object$keys2 = Object.keys(pluginOptions); _i2 < _Object$keys2.length; _i2++) {
          var key = _Object$keys2[_i2];
          if ((actualOptions == null ? void 0 : actualOptions[key]) !== pluginOptions[key]) {
            return false;
          }
        }
        return true;
      }
    };
    _proto.getPluginOption = function getPluginOption(plugin, name) {
      var _this$plugins$get;
      return (_this$plugins$get = this.plugins.get(plugin)) == null ? void 0 : _this$plugins$get[name];
    };
    return _createClass(BaseParser);
  }();

  function setTrailingComments(node, comments) {
    if (node.trailingComments === undefined) {
      node.trailingComments = comments;
    } else {
      var _node$trailingComment;
      (_node$trailingComment = node.trailingComments).unshift.apply(_node$trailingComment, comments);
    }
  }
  function setLeadingComments(node, comments) {
    if (node.leadingComments === undefined) {
      node.leadingComments = comments;
    } else {
      var _node$leadingComments;
      (_node$leadingComments = node.leadingComments).unshift.apply(_node$leadingComments, comments);
    }
  }
  function setInnerComments(node, comments) {
    if (node.innerComments === undefined) {
      node.innerComments = comments;
    } else {
      var _node$innerComments;
      (_node$innerComments = node.innerComments).unshift.apply(_node$innerComments, comments);
    }
  }
  function adjustInnerComments(node, elements, commentWS) {
    var lastElement = null;
    var i = elements.length;
    while (lastElement === null && i > 0) {
      lastElement = elements[--i];
    }
    if (lastElement === null || lastElement.start > commentWS.start) {
      setInnerComments(node, commentWS.comments);
    } else {
      setTrailingComments(lastElement, commentWS.comments);
    }
  }
  var CommentsParser = function (_BaseParser) {
    function CommentsParser() {
      return _BaseParser.apply(this, arguments) || this;
    }
    _inherits(CommentsParser, _BaseParser);
    var _proto = CommentsParser.prototype;
    _proto.addComment = function addComment(comment) {
      if (this.filename) comment.loc.filename = this.filename;
      var commentsLen = this.state.commentsLen;
      if (this.comments.length !== commentsLen) {
        this.comments.length = commentsLen;
      }
      this.comments.push(comment);
      this.state.commentsLen++;
    };
    _proto.processComment = function processComment(node) {
      var commentStack = this.state.commentStack;
      var commentStackLength = commentStack.length;
      if (commentStackLength === 0) return;
      var i = commentStackLength - 1;
      var lastCommentWS = commentStack[i];
      if (lastCommentWS.start === node.end) {
        lastCommentWS.leadingNode = node;
        i--;
      }
      var nodeStart = node.start;
      for (; i >= 0; i--) {
        var commentWS = commentStack[i];
        var commentEnd = commentWS.end;
        if (commentEnd > nodeStart) {
          commentWS.containingNode = node;
          this.finalizeComment(commentWS);
          commentStack.splice(i, 1);
        } else {
          if (commentEnd === nodeStart) {
            commentWS.trailingNode = node;
          }
          break;
        }
      }
    };
    _proto.finalizeComment = function finalizeComment(commentWS) {
      var _node$options;
      var comments = commentWS.comments;
      if (commentWS.leadingNode !== null || commentWS.trailingNode !== null) {
        if (commentWS.leadingNode !== null) {
          setTrailingComments(commentWS.leadingNode, comments);
        }
        if (commentWS.trailingNode !== null) {
          setLeadingComments(commentWS.trailingNode, comments);
        }
      } else {
        var node = commentWS.containingNode,
          commentStart = commentWS.start;
        if (this.input.charCodeAt(this.offsetToSourcePos(commentStart) - 1) === 44) {
          switch (node.type) {
            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              adjustInnerComments(node, node.properties, commentWS);
              break;
            case "CallExpression":
            case "OptionalCallExpression":
              adjustInnerComments(node, node.arguments, commentWS);
              break;
            case "ImportExpression":
              adjustInnerComments(node, [node.source, (_node$options = node.options) != null ? _node$options : null], commentWS);
              break;
            case "FunctionDeclaration":
            case "FunctionExpression":
            case "ArrowFunctionExpression":
            case "ObjectMethod":
            case "ClassMethod":
            case "ClassPrivateMethod":
              adjustInnerComments(node, node.params, commentWS);
              break;
            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              adjustInnerComments(node, node.elements, commentWS);
              break;
            case "ExportNamedDeclaration":
            case "ImportDeclaration":
              adjustInnerComments(node, node.specifiers, commentWS);
              break;
            case "TSEnumDeclaration":
              {
                adjustInnerComments(node, node.members, commentWS);
              }
              break;
            case "TSEnumBody":
              adjustInnerComments(node, node.members, commentWS);
              break;
            default:
              {
                setInnerComments(node, comments);
              }
          }
        } else {
          setInnerComments(node, comments);
        }
      }
    };
    _proto.finalizeRemainingComments = function finalizeRemainingComments() {
      var commentStack = this.state.commentStack;
      for (var i = commentStack.length - 1; i >= 0; i--) {
        this.finalizeComment(commentStack[i]);
      }
      this.state.commentStack = [];
    };
    _proto.resetPreviousNodeTrailingComments = function resetPreviousNodeTrailingComments(node) {
      var commentStack = this.state.commentStack;
      var length = commentStack.length;
      if (length === 0) return;
      var commentWS = commentStack[length - 1];
      if (commentWS.leadingNode === node) {
        commentWS.leadingNode = null;
      }
    };
    _proto.takeSurroundingComments = function takeSurroundingComments(node, start, end) {
      var commentStack = this.state.commentStack;
      var commentStackLength = commentStack.length;
      if (commentStackLength === 0) return;
      var i = commentStackLength - 1;
      for (; i >= 0; i--) {
        var commentWS = commentStack[i];
        var commentEnd = commentWS.end;
        var commentStart = commentWS.start;
        if (commentStart === end) {
          commentWS.leadingNode = node;
        } else if (commentEnd === start) {
          commentWS.trailingNode = node;
        } else if (commentEnd < start) {
          break;
        }
      }
    };
    return _createClass(CommentsParser);
  }(BaseParser);

  var LoopLabelKind = {
    Loop: 1,
    Switch: 2
  };
  var State = function () {
    function State() {
      this.flags = 1024;
      this.startIndex = void 0;
      this.curLine = void 0;
      this.lineStart = void 0;
      this.startLoc = void 0;
      this.endLoc = void 0;
      this.errors = [];
      this.potentialArrowAt = -1;
      this.noArrowAt = [];
      this.noArrowParamsConversionAt = [];
      this.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      };
      this.labels = [];
      this.commentsLen = 0;
      this.commentStack = [];
      this.pos = 0;
      this.type = 140;
      this.value = null;
      this.start = 0;
      this.end = 0;
      this.lastTokEndLoc = null;
      this.lastTokStartLoc = null;
      this.context = [types.brace];
      this.firstInvalidTemplateEscapePos = null;
      this.strictErrors = new Map();
      this.tokensLength = 0;
    }
    var _proto = State.prototype;
    _proto.init = function init(_ref) {
      var strictMode = _ref.strictMode,
        sourceType = _ref.sourceType,
        startIndex = _ref.startIndex,
        startLine = _ref.startLine,
        startColumn = _ref.startColumn;
      this.strict = strictMode === false ? false : strictMode === true ? true : sourceType === "module";
      this.startIndex = startIndex;
      this.curLine = startLine;
      this.lineStart = -startColumn;
      this.startLoc = this.endLoc = new Position(startLine, startColumn, startIndex);
    };
    _proto.curPosition = function curPosition() {
      return new Position(this.curLine, this.pos - this.lineStart, this.pos + this.startIndex);
    };
    _proto.clone = function clone() {
      var state = new State();
      state.flags = this.flags;
      state.startIndex = this.startIndex;
      state.curLine = this.curLine;
      state.lineStart = this.lineStart;
      state.startLoc = this.startLoc;
      state.endLoc = this.endLoc;
      state.errors = this.errors.slice();
      state.potentialArrowAt = this.potentialArrowAt;
      state.noArrowAt = this.noArrowAt.slice();
      state.noArrowParamsConversionAt = this.noArrowParamsConversionAt.slice();
      state.topicContext = this.topicContext;
      state.labels = this.labels.slice();
      state.commentsLen = this.commentsLen;
      state.commentStack = this.commentStack.slice();
      state.pos = this.pos;
      state.type = this.type;
      state.value = this.value;
      state.start = this.start;
      state.end = this.end;
      state.lastTokEndLoc = this.lastTokEndLoc;
      state.lastTokStartLoc = this.lastTokStartLoc;
      state.context = this.context.slice();
      state.firstInvalidTemplateEscapePos = this.firstInvalidTemplateEscapePos;
      state.strictErrors = this.strictErrors;
      state.tokensLength = this.tokensLength;
      return state;
    };
    return _createClass(State, [{
      key: "strict",
      get: function get() {
        return (this.flags & 1) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 1;else this.flags &= -2;
      }
    }, {
      key: "maybeInArrowParameters",
      get: function get() {
        return (this.flags & 2) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 2;else this.flags &= -3;
      }
    }, {
      key: "inType",
      get: function get() {
        return (this.flags & 4) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 4;else this.flags &= -5;
      }
    }, {
      key: "noAnonFunctionType",
      get: function get() {
        return (this.flags & 8) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 8;else this.flags &= -9;
      }
    }, {
      key: "hasFlowComment",
      get: function get() {
        return (this.flags & 16) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 16;else this.flags &= -17;
      }
    }, {
      key: "isAmbientContext",
      get: function get() {
        return (this.flags & 32) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 32;else this.flags &= -33;
      }
    }, {
      key: "inAbstractClass",
      get: function get() {
        return (this.flags & 64) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 64;else this.flags &= -65;
      }
    }, {
      key: "inDisallowConditionalTypesContext",
      get: function get() {
        return (this.flags & 128) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 128;else this.flags &= -129;
      }
    }, {
      key: "soloAwait",
      get: function get() {
        return (this.flags & 256) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 256;else this.flags &= -257;
      }
    }, {
      key: "inFSharpPipelineDirectBody",
      get: function get() {
        return (this.flags & 512) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 512;else this.flags &= -513;
      }
    }, {
      key: "canStartJSXElement",
      get: function get() {
        return (this.flags & 1024) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 1024;else this.flags &= -1025;
      }
    }, {
      key: "containsEsc",
      get: function get() {
        return (this.flags & 2048) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 2048;else this.flags &= -2049;
      }
    }, {
      key: "hasTopLevelAwait",
      get: function get() {
        return (this.flags & 4096) > 0;
      },
      set: function set(v) {
        if (v) this.flags |= 4096;else this.flags &= -4097;
      }
    }]);
  }();

  function buildPosition(pos, lineStart, curLine) {
    return new Position(curLine, pos - lineStart, pos);
  }
  var VALID_REGEX_FLAGS = new Set([103, 109, 115, 105, 121, 117, 100, 118]);
  var Token = _createClass(function Token(state) {
    var startIndex = state.startIndex || 0;
    this.type = state.type;
    this.value = state.value;
    this.start = startIndex + state.start;
    this.end = startIndex + state.end;
    this.loc = new SourceLocation(state.startLoc, state.endLoc);
  });
  var Tokenizer = function (_CommentsParser) {
    function Tokenizer(options, input) {
      var _this;
      _this = _CommentsParser.call(this) || this;
      _this.isLookahead = void 0;
      _this.tokens = [];
      _this.errorHandlers_readInt = {
        invalidDigit: function invalidDigit(pos, lineStart, curLine, radix) {
          if (!(_this.optionFlags & OptionFlags.ErrorRecovery)) return false;
          _this.raise(Errors.InvalidDigit, buildPosition(pos, lineStart, curLine), {
            radix: radix
          });
          return true;
        },
        numericSeparatorInEscapeSequence: _this.errorBuilder(Errors.NumericSeparatorInEscapeSequence),
        unexpectedNumericSeparator: _this.errorBuilder(Errors.UnexpectedNumericSeparator)
      };
      _this.errorHandlers_readCodePoint = Object.assign({}, _this.errorHandlers_readInt, {
        invalidEscapeSequence: _this.errorBuilder(Errors.InvalidEscapeSequence),
        invalidCodePoint: _this.errorBuilder(Errors.InvalidCodePoint)
      });
      _this.errorHandlers_readStringContents_string = Object.assign({}, _this.errorHandlers_readCodePoint, {
        strictNumericEscape: function strictNumericEscape(pos, lineStart, curLine) {
          _this.recordStrictModeErrors(Errors.StrictNumericEscape, buildPosition(pos, lineStart, curLine));
        },
        unterminated: function unterminated(pos, lineStart, curLine) {
          throw _this.raise(Errors.UnterminatedString, buildPosition(pos - 1, lineStart, curLine));
        }
      });
      _this.errorHandlers_readStringContents_template = Object.assign({}, _this.errorHandlers_readCodePoint, {
        strictNumericEscape: _this.errorBuilder(Errors.StrictNumericEscape),
        unterminated: function unterminated(pos, lineStart, curLine) {
          throw _this.raise(Errors.UnterminatedTemplate, buildPosition(pos, lineStart, curLine));
        }
      });
      _this.state = new State();
      _this.state.init(options);
      _this.input = input;
      _this.length = input.length;
      _this.comments = [];
      _this.isLookahead = false;
      return _this;
    }
    _inherits(Tokenizer, _CommentsParser);
    var _proto = Tokenizer.prototype;
    _proto.pushToken = function pushToken(token) {
      this.tokens.length = this.state.tokensLength;
      this.tokens.push(token);
      ++this.state.tokensLength;
    };
    _proto.next = function next() {
      this.checkKeywordEscapes();
      if (this.optionFlags & OptionFlags.Tokens) {
        this.pushToken(new Token(this.state));
      }
      this.state.lastTokEndLoc = this.state.endLoc;
      this.state.lastTokStartLoc = this.state.startLoc;
      this.nextToken();
    };
    _proto.eat = function eat(type) {
      if (this.match(type)) {
        this.next();
        return true;
      } else {
        return false;
      }
    };
    _proto.match = function match(type) {
      return this.state.type === type;
    };
    _proto.createLookaheadState = function createLookaheadState(state) {
      return {
        pos: state.pos,
        value: null,
        type: state.type,
        start: state.start,
        end: state.end,
        context: [this.curContext()],
        inType: state.inType,
        startLoc: state.startLoc,
        lastTokEndLoc: state.lastTokEndLoc,
        curLine: state.curLine,
        lineStart: state.lineStart,
        curPosition: state.curPosition
      };
    };
    _proto.lookahead = function lookahead() {
      var old = this.state;
      this.state = this.createLookaheadState(old);
      this.isLookahead = true;
      this.nextToken();
      this.isLookahead = false;
      var curr = this.state;
      this.state = old;
      return curr;
    };
    _proto.nextTokenStart = function nextTokenStart() {
      return this.nextTokenStartSince(this.state.pos);
    };
    _proto.nextTokenStartSince = function nextTokenStartSince(pos) {
      skipWhiteSpace.lastIndex = pos;
      return skipWhiteSpace.test(this.input) ? skipWhiteSpace.lastIndex : pos;
    };
    _proto.lookaheadCharCode = function lookaheadCharCode() {
      return this.lookaheadCharCodeSince(this.state.pos);
    };
    _proto.lookaheadCharCodeSince = function lookaheadCharCodeSince(pos) {
      return this.input.charCodeAt(this.nextTokenStartSince(pos));
    };
    _proto.nextTokenInLineStart = function nextTokenInLineStart() {
      return this.nextTokenInLineStartSince(this.state.pos);
    };
    _proto.nextTokenInLineStartSince = function nextTokenInLineStartSince(pos) {
      skipWhiteSpaceInLine.lastIndex = pos;
      return skipWhiteSpaceInLine.test(this.input) ? skipWhiteSpaceInLine.lastIndex : pos;
    };
    _proto.lookaheadInLineCharCode = function lookaheadInLineCharCode() {
      return this.input.charCodeAt(this.nextTokenInLineStart());
    };
    _proto.codePointAtPos = function codePointAtPos(pos) {
      var cp = this.input.charCodeAt(pos);
      if ((cp & 0xfc00) === 0xd800 && ++pos < this.input.length) {
        var trail = this.input.charCodeAt(pos);
        if ((trail & 0xfc00) === 0xdc00) {
          cp = 0x10000 + ((cp & 0x3ff) << 10) + (trail & 0x3ff);
        }
      }
      return cp;
    };
    _proto.setStrict = function setStrict(strict) {
      var _this2 = this;
      this.state.strict = strict;
      if (strict) {
        this.state.strictErrors.forEach(function (_ref) {
          var toParseError = _ref[0],
            at = _ref[1];
          return _this2.raise(toParseError, at);
        });
        this.state.strictErrors.clear();
      }
    };
    _proto.curContext = function curContext() {
      return this.state.context[this.state.context.length - 1];
    };
    _proto.nextToken = function nextToken() {
      this.skipSpace();
      this.state.start = this.state.pos;
      if (!this.isLookahead) this.state.startLoc = this.state.curPosition();
      if (this.state.pos >= this.length) {
        this.finishToken(140);
        return;
      }
      this.getTokenFromCode(this.codePointAtPos(this.state.pos));
    };
    _proto.skipBlockComment = function skipBlockComment(commentEnd) {
      var startLoc;
      if (!this.isLookahead) startLoc = this.state.curPosition();
      var start = this.state.pos;
      var end = this.input.indexOf(commentEnd, start + 2);
      if (end === -1) {
        throw this.raise(Errors.UnterminatedComment, this.state.curPosition());
      }
      this.state.pos = end + commentEnd.length;
      lineBreakG.lastIndex = start + 2;
      while (lineBreakG.test(this.input) && lineBreakG.lastIndex <= end) {
        ++this.state.curLine;
        this.state.lineStart = lineBreakG.lastIndex;
      }
      if (this.isLookahead) return;
      var comment = {
        type: "CommentBlock",
        value: this.input.slice(start + 2, end),
        start: this.sourceToOffsetPos(start),
        end: this.sourceToOffsetPos(end + commentEnd.length),
        loc: new SourceLocation(startLoc, this.state.curPosition())
      };
      if (this.optionFlags & OptionFlags.Tokens) this.pushToken(comment);
      return comment;
    };
    _proto.skipLineComment = function skipLineComment(startSkip) {
      var start = this.state.pos;
      var startLoc;
      if (!this.isLookahead) startLoc = this.state.curPosition();
      var ch = this.input.charCodeAt(this.state.pos += startSkip);
      if (this.state.pos < this.length) {
        while (!isNewLine(ch) && ++this.state.pos < this.length) {
          ch = this.input.charCodeAt(this.state.pos);
        }
      }
      if (this.isLookahead) return;
      var end = this.state.pos;
      var value = this.input.slice(start + startSkip, end);
      var comment = {
        type: "CommentLine",
        value: value,
        start: this.sourceToOffsetPos(start),
        end: this.sourceToOffsetPos(end),
        loc: new SourceLocation(startLoc, this.state.curPosition())
      };
      if (this.optionFlags & OptionFlags.Tokens) this.pushToken(comment);
      return comment;
    };
    _proto.skipSpace = function skipSpace() {
      var spaceStart = this.state.pos;
      var comments = this.optionFlags & OptionFlags.AttachComment ? [] : null;
      loop: while (this.state.pos < this.length) {
        var ch = this.input.charCodeAt(this.state.pos);
        switch (ch) {
          case 32:
          case 160:
          case 9:
            ++this.state.pos;
            break;
          case 13:
            if (this.input.charCodeAt(this.state.pos + 1) === 10) {
              ++this.state.pos;
            }
          case 10:
          case 8232:
          case 8233:
            ++this.state.pos;
            ++this.state.curLine;
            this.state.lineStart = this.state.pos;
            break;
          case 47:
            switch (this.input.charCodeAt(this.state.pos + 1)) {
              case 42:
                {
                  var comment = this.skipBlockComment("*/");
                  if (comment !== undefined) {
                    this.addComment(comment);
                    comments == null || comments.push(comment);
                  }
                  break;
                }
              case 47:
                {
                  var _comment = this.skipLineComment(2);
                  if (_comment !== undefined) {
                    this.addComment(_comment);
                    comments == null || comments.push(_comment);
                  }
                  break;
                }
              default:
                break loop;
            }
            break;
          default:
            if (isWhitespace(ch)) {
              ++this.state.pos;
            } else if (ch === 45 && !this.inModule && this.optionFlags & OptionFlags.AnnexB) {
              var pos = this.state.pos;
              if (this.input.charCodeAt(pos + 1) === 45 && this.input.charCodeAt(pos + 2) === 62 && (spaceStart === 0 || this.state.lineStart > spaceStart)) {
                var _comment2 = this.skipLineComment(3);
                if (_comment2 !== undefined) {
                  this.addComment(_comment2);
                  comments == null || comments.push(_comment2);
                }
              } else {
                break loop;
              }
            } else if (ch === 60 && !this.inModule && this.optionFlags & OptionFlags.AnnexB) {
              var _pos = this.state.pos;
              if (this.input.charCodeAt(_pos + 1) === 33 && this.input.charCodeAt(_pos + 2) === 45 && this.input.charCodeAt(_pos + 3) === 45) {
                var _comment3 = this.skipLineComment(4);
                if (_comment3 !== undefined) {
                  this.addComment(_comment3);
                  comments == null || comments.push(_comment3);
                }
              } else {
                break loop;
              }
            } else {
              break loop;
            }
        }
      }
      if ((comments == null ? void 0 : comments.length) > 0) {
        var end = this.state.pos;
        var commentWhitespace = {
          start: this.sourceToOffsetPos(spaceStart),
          end: this.sourceToOffsetPos(end),
          comments: comments,
          leadingNode: null,
          trailingNode: null,
          containingNode: null
        };
        this.state.commentStack.push(commentWhitespace);
      }
    };
    _proto.finishToken = function finishToken(type, val) {
      this.state.end = this.state.pos;
      this.state.endLoc = this.state.curPosition();
      var prevType = this.state.type;
      this.state.type = type;
      this.state.value = val;
      if (!this.isLookahead) {
        this.updateContext(prevType);
      }
    };
    _proto.replaceToken = function replaceToken(type) {
      this.state.type = type;
      this.updateContext();
    };
    _proto.readToken_numberSign = function readToken_numberSign() {
      if (this.state.pos === 0 && this.readToken_interpreter()) {
        return;
      }
      var nextPos = this.state.pos + 1;
      var next = this.codePointAtPos(nextPos);
      if (next >= 48 && next <= 57) {
        throw this.raise(Errors.UnexpectedDigitAfterHash, this.state.curPosition());
      }
      if (next === 123 || next === 91 && this.hasPlugin("recordAndTuple")) {
        this.expectPlugin("recordAndTuple");
        if (this.getPluginOption("recordAndTuple", "syntaxType") === "bar") {
          throw this.raise(next === 123 ? Errors.RecordExpressionHashIncorrectStartSyntaxType : Errors.TupleExpressionHashIncorrectStartSyntaxType, this.state.curPosition());
        }
        this.state.pos += 2;
        if (next === 123) {
          this.finishToken(7);
        } else {
          this.finishToken(1);
        }
      } else if (isIdentifierStart(next)) {
        ++this.state.pos;
        this.finishToken(139, this.readWord1(next));
      } else if (next === 92) {
        ++this.state.pos;
        this.finishToken(139, this.readWord1());
      } else {
        this.finishOp(27, 1);
      }
    };
    _proto.readToken_dot = function readToken_dot() {
      var next = this.input.charCodeAt(this.state.pos + 1);
      if (next >= 48 && next <= 57) {
        this.readNumber(true);
        return;
      }
      if (next === 46 && this.input.charCodeAt(this.state.pos + 2) === 46) {
        this.state.pos += 3;
        this.finishToken(21);
      } else {
        ++this.state.pos;
        this.finishToken(16);
      }
    };
    _proto.readToken_slash = function readToken_slash() {
      var next = this.input.charCodeAt(this.state.pos + 1);
      if (next === 61) {
        this.finishOp(31, 2);
      } else {
        this.finishOp(56, 1);
      }
    };
    _proto.readToken_interpreter = function readToken_interpreter() {
      if (this.state.pos !== 0 || this.length < 2) return false;
      var ch = this.input.charCodeAt(this.state.pos + 1);
      if (ch !== 33) return false;
      var start = this.state.pos;
      this.state.pos += 1;
      while (!isNewLine(ch) && ++this.state.pos < this.length) {
        ch = this.input.charCodeAt(this.state.pos);
      }
      var value = this.input.slice(start + 2, this.state.pos);
      this.finishToken(28, value);
      return true;
    };
    _proto.readToken_mult_modulo = function readToken_mult_modulo(code) {
      var type = code === 42 ? 55 : 54;
      var width = 1;
      var next = this.input.charCodeAt(this.state.pos + 1);
      if (code === 42 && next === 42) {
        width++;
        next = this.input.charCodeAt(this.state.pos + 2);
        type = 57;
      }
      if (next === 61 && !this.state.inType) {
        width++;
        type = code === 37 ? 33 : 30;
      }
      this.finishOp(type, width);
    };
    _proto.readToken_pipe_amp = function readToken_pipe_amp(code) {
      var next = this.input.charCodeAt(this.state.pos + 1);
      if (next === code) {
        if (this.input.charCodeAt(this.state.pos + 2) === 61) {
          this.finishOp(30, 3);
        } else {
          this.finishOp(code === 124 ? 41 : 42, 2);
        }
        return;
      }
      if (code === 124) {
        if (next === 62) {
          this.finishOp(39, 2);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && next === 125) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
            throw this.raise(Errors.RecordExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
          }
          this.state.pos += 2;
          this.finishToken(9);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && next === 93) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
            throw this.raise(Errors.TupleExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
          }
          this.state.pos += 2;
          this.finishToken(4);
          return;
        }
      }
      if (next === 61) {
        this.finishOp(30, 2);
        return;
      }
      this.finishOp(code === 124 ? 43 : 45, 1);
    };
    _proto.readToken_caret = function readToken_caret() {
      var next = this.input.charCodeAt(this.state.pos + 1);
      if (next === 61 && !this.state.inType) {
        this.finishOp(32, 2);
      } else if (next === 94 && this.hasPlugin(["pipelineOperator", {
        proposal: "hack",
        topicToken: "^^"
      }])) {
        this.finishOp(37, 2);
        var lookaheadCh = this.input.codePointAt(this.state.pos);
        if (lookaheadCh === 94) {
          this.unexpected();
        }
      } else {
        this.finishOp(44, 1);
      }
    };
    _proto.readToken_atSign = function readToken_atSign() {
      var next = this.input.charCodeAt(this.state.pos + 1);
      if (next === 64 && this.hasPlugin(["pipelineOperator", {
        proposal: "hack",
        topicToken: "@@"
      }])) {
        this.finishOp(38, 2);
      } else {
        this.finishOp(26, 1);
      }
    };
    _proto.readToken_plus_min = function readToken_plus_min(code) {
      var next = this.input.charCodeAt(this.state.pos + 1);
      if (next === code) {
        this.finishOp(34, 2);
        return;
      }
      if (next === 61) {
        this.finishOp(30, 2);
      } else {
        this.finishOp(53, 1);
      }
    };
    _proto.readToken_lt = function readToken_lt() {
      var pos = this.state.pos;
      var next = this.input.charCodeAt(pos + 1);
      if (next === 60) {
        if (this.input.charCodeAt(pos + 2) === 61) {
          this.finishOp(30, 3);
          return;
        }
        this.finishOp(51, 2);
        return;
      }
      if (next === 61) {
        this.finishOp(49, 2);
        return;
      }
      this.finishOp(47, 1);
    };
    _proto.readToken_gt = function readToken_gt() {
      var pos = this.state.pos;
      var next = this.input.charCodeAt(pos + 1);
      if (next === 62) {
        var size = this.input.charCodeAt(pos + 2) === 62 ? 3 : 2;
        if (this.input.charCodeAt(pos + size) === 61) {
          this.finishOp(30, size + 1);
          return;
        }
        this.finishOp(52, size);
        return;
      }
      if (next === 61) {
        this.finishOp(49, 2);
        return;
      }
      this.finishOp(48, 1);
    };
    _proto.readToken_eq_excl = function readToken_eq_excl(code) {
      var next = this.input.charCodeAt(this.state.pos + 1);
      if (next === 61) {
        this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
        return;
      }
      if (code === 61 && next === 62) {
        this.state.pos += 2;
        this.finishToken(19);
        return;
      }
      this.finishOp(code === 61 ? 29 : 35, 1);
    };
    _proto.readToken_question = function readToken_question() {
      var next = this.input.charCodeAt(this.state.pos + 1);
      var next2 = this.input.charCodeAt(this.state.pos + 2);
      if (next === 63) {
        if (next2 === 61) {
          this.finishOp(30, 3);
        } else {
          this.finishOp(40, 2);
        }
      } else if (next === 46 && !(next2 >= 48 && next2 <= 57)) {
        this.state.pos += 2;
        this.finishToken(18);
      } else {
        ++this.state.pos;
        this.finishToken(17);
      }
    };
    _proto.getTokenFromCode = function getTokenFromCode(code) {
      switch (code) {
        case 46:
          this.readToken_dot();
          return;
        case 40:
          ++this.state.pos;
          this.finishToken(10);
          return;
        case 41:
          ++this.state.pos;
          this.finishToken(11);
          return;
        case 59:
          ++this.state.pos;
          this.finishToken(13);
          return;
        case 44:
          ++this.state.pos;
          this.finishToken(12);
          return;
        case 91:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
              throw this.raise(Errors.TupleExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
            }
            this.state.pos += 2;
            this.finishToken(2);
          } else {
            ++this.state.pos;
            this.finishToken(0);
          }
          return;
        case 93:
          ++this.state.pos;
          this.finishToken(3);
          return;
        case 123:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
              throw this.raise(Errors.RecordExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
            }
            this.state.pos += 2;
            this.finishToken(6);
          } else {
            ++this.state.pos;
            this.finishToken(5);
          }
          return;
        case 125:
          ++this.state.pos;
          this.finishToken(8);
          return;
        case 58:
          if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
            this.finishOp(15, 2);
          } else {
            ++this.state.pos;
            this.finishToken(14);
          }
          return;
        case 63:
          this.readToken_question();
          return;
        case 96:
          this.readTemplateToken();
          return;
        case 48:
          {
            var next = this.input.charCodeAt(this.state.pos + 1);
            if (next === 120 || next === 88) {
              this.readRadixNumber(16);
              return;
            }
            if (next === 111 || next === 79) {
              this.readRadixNumber(8);
              return;
            }
            if (next === 98 || next === 66) {
              this.readRadixNumber(2);
              return;
            }
          }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          this.readNumber(false);
          return;
        case 34:
        case 39:
          this.readString(code);
          return;
        case 47:
          this.readToken_slash();
          return;
        case 37:
        case 42:
          this.readToken_mult_modulo(code);
          return;
        case 124:
        case 38:
          this.readToken_pipe_amp(code);
          return;
        case 94:
          this.readToken_caret();
          return;
        case 43:
        case 45:
          this.readToken_plus_min(code);
          return;
        case 60:
          this.readToken_lt();
          return;
        case 62:
          this.readToken_gt();
          return;
        case 61:
        case 33:
          this.readToken_eq_excl(code);
          return;
        case 126:
          this.finishOp(36, 1);
          return;
        case 64:
          this.readToken_atSign();
          return;
        case 35:
          this.readToken_numberSign();
          return;
        case 92:
          this.readWord();
          return;
        default:
          if (isIdentifierStart(code)) {
            this.readWord(code);
            return;
          }
      }
      throw this.raise(Errors.InvalidOrUnexpectedToken, this.state.curPosition(), {
        unexpected: String.fromCodePoint(code)
      });
    };
    _proto.finishOp = function finishOp(type, size) {
      var str = this.input.slice(this.state.pos, this.state.pos + size);
      this.state.pos += size;
      this.finishToken(type, str);
    };
    _proto.readRegexp = function readRegexp() {
      var startLoc = this.state.startLoc;
      var start = this.state.start + 1;
      var escaped, inClass;
      var pos = this.state.pos;
      for (;; ++pos) {
        if (pos >= this.length) {
          throw this.raise(Errors.UnterminatedRegExp, createPositionWithColumnOffset(startLoc, 1));
        }
        var ch = this.input.charCodeAt(pos);
        if (isNewLine(ch)) {
          throw this.raise(Errors.UnterminatedRegExp, createPositionWithColumnOffset(startLoc, 1));
        }
        if (escaped) {
          escaped = false;
        } else {
          if (ch === 91) {
            inClass = true;
          } else if (ch === 93 && inClass) {
            inClass = false;
          } else if (ch === 47 && !inClass) {
            break;
          }
          escaped = ch === 92;
        }
      }
      var content = this.input.slice(start, pos);
      ++pos;
      var mods = "";
      var nextPos = function nextPos() {
        return (createPositionWithColumnOffset(startLoc, pos + 2 - start)
        );
      };
      while (pos < this.length) {
        var cp = this.codePointAtPos(pos);
        var _char = String.fromCharCode(cp);
        if (VALID_REGEX_FLAGS.has(cp)) {
          if (cp === 118) {
            if (mods.includes("u")) {
              this.raise(Errors.IncompatibleRegExpUVFlags, nextPos());
            }
          } else if (cp === 117) {
            if (mods.includes("v")) {
              this.raise(Errors.IncompatibleRegExpUVFlags, nextPos());
            }
          }
          if (mods.includes(_char)) {
            this.raise(Errors.DuplicateRegExpFlags, nextPos());
          }
        } else if (isIdentifierChar(cp) || cp === 92) {
          this.raise(Errors.MalformedRegExpFlags, nextPos());
        } else {
          break;
        }
        ++pos;
        mods += _char;
      }
      this.state.pos = pos;
      this.finishToken(138, {
        pattern: content,
        flags: mods
      });
    };
    _proto.readInt = function readInt$1(radix, len, forceLen, allowNumSeparator) {
      if (forceLen === void 0) {
        forceLen = false;
      }
      if (allowNumSeparator === void 0) {
        allowNumSeparator = true;
      }
      var _readInt2 = readInt(this.input, this.state.pos, this.state.lineStart, this.state.curLine, radix, len, forceLen, allowNumSeparator, this.errorHandlers_readInt, false),
        n = _readInt2.n,
        pos = _readInt2.pos;
      this.state.pos = pos;
      return n;
    };
    _proto.readRadixNumber = function readRadixNumber(radix) {
      var start = this.state.pos;
      var startLoc = this.state.curPosition();
      var isBigInt = false;
      this.state.pos += 2;
      var val = this.readInt(radix);
      if (val == null) {
        this.raise(Errors.InvalidDigit, createPositionWithColumnOffset(startLoc, 2), {
          radix: radix
        });
      }
      var next = this.input.charCodeAt(this.state.pos);
      if (next === 110) {
        ++this.state.pos;
        isBigInt = true;
      } else if (next === 109) {
        throw this.raise(Errors.InvalidDecimal, startLoc);
      }
      if (isIdentifierStart(this.codePointAtPos(this.state.pos))) {
        throw this.raise(Errors.NumberIdentifier, this.state.curPosition());
      }
      if (isBigInt) {
        var str = this.input.slice(start, this.state.pos).replace(/[_n]/g, "");
        this.finishToken(136, str);
        return;
      }
      this.finishToken(135, val);
    };
    _proto.readNumber = function readNumber(startsWithDot) {
      var start = this.state.pos;
      var startLoc = this.state.curPosition();
      var isFloat = false;
      var isBigInt = false;
      var hasExponent = false;
      var isOctal = false;
      if (!startsWithDot && this.readInt(10) === null) {
        this.raise(Errors.InvalidNumber, this.state.curPosition());
      }
      var hasLeadingZero = this.state.pos - start >= 2 && this.input.charCodeAt(start) === 48;
      if (hasLeadingZero) {
        var integer = this.input.slice(start, this.state.pos);
        this.recordStrictModeErrors(Errors.StrictOctalLiteral, startLoc);
        if (!this.state.strict) {
          var underscorePos = integer.indexOf("_");
          if (underscorePos > 0) {
            this.raise(Errors.ZeroDigitNumericSeparator, createPositionWithColumnOffset(startLoc, underscorePos));
          }
        }
        isOctal = hasLeadingZero && !/[89]/.test(integer);
      }
      var next = this.input.charCodeAt(this.state.pos);
      if (next === 46 && !isOctal) {
        ++this.state.pos;
        this.readInt(10);
        isFloat = true;
        next = this.input.charCodeAt(this.state.pos);
      }
      if ((next === 69 || next === 101) && !isOctal) {
        next = this.input.charCodeAt(++this.state.pos);
        if (next === 43 || next === 45) {
          ++this.state.pos;
        }
        if (this.readInt(10) === null) {
          this.raise(Errors.InvalidOrMissingExponent, startLoc);
        }
        isFloat = true;
        hasExponent = true;
        next = this.input.charCodeAt(this.state.pos);
      }
      if (next === 110) {
        if (isFloat || hasLeadingZero) {
          this.raise(Errors.InvalidBigIntLiteral, startLoc);
        }
        ++this.state.pos;
        isBigInt = true;
      }
      if (next === 109) {
        this.expectPlugin("decimal", this.state.curPosition());
        if (hasExponent || hasLeadingZero) {
          this.raise(Errors.InvalidDecimal, startLoc);
        }
        ++this.state.pos;
        var isDecimal = true;
      }
      if (isIdentifierStart(this.codePointAtPos(this.state.pos))) {
        throw this.raise(Errors.NumberIdentifier, this.state.curPosition());
      }
      var str = this.input.slice(start, this.state.pos).replace(/[_mn]/g, "");
      if (isBigInt) {
        this.finishToken(136, str);
        return;
      }
      if (isDecimal) {
        this.finishToken(137, str);
        return;
      }
      var val = isOctal ? parseInt(str, 8) : parseFloat(str);
      this.finishToken(135, val);
    };
    _proto.readCodePoint = function readCodePoint$1(throwOnInvalid) {
      var _readCodePoint2 = readCodePoint(this.input, this.state.pos, this.state.lineStart, this.state.curLine, throwOnInvalid, this.errorHandlers_readCodePoint),
        code = _readCodePoint2.code,
        pos = _readCodePoint2.pos;
      this.state.pos = pos;
      return code;
    };
    _proto.readString = function readString(quote) {
      var _readStringContents = readStringContents(quote === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string),
        str = _readStringContents.str,
        pos = _readStringContents.pos,
        curLine = _readStringContents.curLine,
        lineStart = _readStringContents.lineStart;
      this.state.pos = pos + 1;
      this.state.lineStart = lineStart;
      this.state.curLine = curLine;
      this.finishToken(134, str);
    };
    _proto.readTemplateContinuation = function readTemplateContinuation() {
      if (!this.match(8)) {
        this.unexpected(null, 8);
      }
      this.state.pos--;
      this.readTemplateToken();
    };
    _proto.readTemplateToken = function readTemplateToken() {
      var opening = this.input[this.state.pos];
      var _readStringContents2 = readStringContents("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template),
        str = _readStringContents2.str,
        firstInvalidLoc = _readStringContents2.firstInvalidLoc,
        pos = _readStringContents2.pos,
        curLine = _readStringContents2.curLine,
        lineStart = _readStringContents2.lineStart;
      this.state.pos = pos + 1;
      this.state.lineStart = lineStart;
      this.state.curLine = curLine;
      if (firstInvalidLoc) {
        this.state.firstInvalidTemplateEscapePos = new Position(firstInvalidLoc.curLine, firstInvalidLoc.pos - firstInvalidLoc.lineStart, this.sourceToOffsetPos(firstInvalidLoc.pos));
      }
      if (this.input.codePointAt(pos) === 96) {
        this.finishToken(24, firstInvalidLoc ? null : opening + str + "`");
      } else {
        this.state.pos++;
        this.finishToken(25, firstInvalidLoc ? null : opening + str + "${");
      }
    };
    _proto.recordStrictModeErrors = function recordStrictModeErrors(toParseError, at) {
      var index = at.index;
      if (this.state.strict && !this.state.strictErrors.has(index)) {
        this.raise(toParseError, at);
      } else {
        this.state.strictErrors.set(index, [toParseError, at]);
      }
    };
    _proto.readWord1 = function readWord1(firstCode) {
      this.state.containsEsc = false;
      var word = "";
      var start = this.state.pos;
      var chunkStart = this.state.pos;
      if (firstCode !== undefined) {
        this.state.pos += firstCode <= 0xffff ? 1 : 2;
      }
      while (this.state.pos < this.length) {
        var ch = this.codePointAtPos(this.state.pos);
        if (isIdentifierChar(ch)) {
          this.state.pos += ch <= 0xffff ? 1 : 2;
        } else if (ch === 92) {
          this.state.containsEsc = true;
          word += this.input.slice(chunkStart, this.state.pos);
          var escStart = this.state.curPosition();
          var identifierCheck = this.state.pos === start ? isIdentifierStart : isIdentifierChar;
          if (this.input.charCodeAt(++this.state.pos) !== 117) {
            this.raise(Errors.MissingUnicodeEscape, this.state.curPosition());
            chunkStart = this.state.pos - 1;
            continue;
          }
          ++this.state.pos;
          var esc = this.readCodePoint(true);
          if (esc !== null) {
            if (!identifierCheck(esc)) {
              this.raise(Errors.EscapedCharNotAnIdentifier, escStart);
            }
            word += String.fromCodePoint(esc);
          }
          chunkStart = this.state.pos;
        } else {
          break;
        }
      }
      return word + this.input.slice(chunkStart, this.state.pos);
    };
    _proto.readWord = function readWord(firstCode) {
      var word = this.readWord1(firstCode);
      var type = keywords.get(word);
      if (type !== undefined) {
        this.finishToken(type, tokenLabelName(type));
      } else {
        this.finishToken(132, word);
      }
    };
    _proto.checkKeywordEscapes = function checkKeywordEscapes() {
      var type = this.state.type;
      if (tokenIsKeyword(type) && this.state.containsEsc) {
        this.raise(Errors.InvalidEscapedReservedWord, this.state.startLoc, {
          reservedWord: tokenLabelName(type)
        });
      }
    };
    _proto.raise = function raise(toParseError, at, details) {
      if (details === void 0) {
        details = {};
      }
      var loc = at instanceof Position ? at : at.loc.start;
      var error = toParseError(loc, details);
      if (!(this.optionFlags & OptionFlags.ErrorRecovery)) throw error;
      if (!this.isLookahead) this.state.errors.push(error);
      return error;
    };
    _proto.raiseOverwrite = function raiseOverwrite(toParseError, at, details) {
      if (details === void 0) {
        details = {};
      }
      var loc = at instanceof Position ? at : at.loc.start;
      var pos = loc.index;
      var errors = this.state.errors;
      for (var i = errors.length - 1; i >= 0; i--) {
        var error = errors[i];
        if (error.loc.index === pos) {
          return errors[i] = toParseError(loc, details);
        }
        if (error.loc.index < pos) break;
      }
      return this.raise(toParseError, at, details);
    };
    _proto.updateContext = function updateContext(prevType) {};
    _proto.unexpected = function unexpected(loc, type) {
      throw this.raise(Errors.UnexpectedToken, loc != null ? loc : this.state.startLoc, {
        expected: type ? tokenLabelName(type) : null
      });
    };
    _proto.expectPlugin = function expectPlugin(pluginName, loc) {
      if (this.hasPlugin(pluginName)) {
        return true;
      }
      throw this.raise(Errors.MissingPlugin, loc != null ? loc : this.state.startLoc, {
        missingPlugin: [pluginName]
      });
    };
    _proto.expectOnePlugin = function expectOnePlugin(pluginNames) {
      var _this3 = this;
      if (!pluginNames.some(function (name) {
        return _this3.hasPlugin(name);
      })) {
        throw this.raise(Errors.MissingOneOfPlugins, this.state.startLoc, {
          missingPlugin: pluginNames
        });
      }
    };
    _proto.errorBuilder = function errorBuilder(error) {
      var _this4 = this;
      return function (pos, lineStart, curLine) {
        _this4.raise(error, buildPosition(pos, lineStart, curLine));
      };
    };
    return _createClass(Tokenizer);
  }(CommentsParser);

  var ClassScope = _createClass(function ClassScope() {
    this.privateNames = new Set();
    this.loneAccessors = new Map();
    this.undefinedPrivateNames = new Map();
  });
  var ClassScopeHandler = function () {
    function ClassScopeHandler(parser) {
      this.parser = void 0;
      this.stack = [];
      this.undefinedPrivateNames = new Map();
      this.parser = parser;
    }
    var _proto = ClassScopeHandler.prototype;
    _proto.current = function current() {
      return this.stack[this.stack.length - 1];
    };
    _proto.enter = function enter() {
      this.stack.push(new ClassScope());
    };
    _proto.exit = function exit() {
      var oldClassScope = this.stack.pop();
      var current = this.current();
      for (var _i2 = 0, _Array$from2 = Array.from(oldClassScope.undefinedPrivateNames); _i2 < _Array$from2.length; _i2++) {
        var _Array$from2$_i = _Array$from2[_i2],
          name = _Array$from2$_i[0],
          loc = _Array$from2$_i[1];
        if (current) {
          if (!current.undefinedPrivateNames.has(name)) {
            current.undefinedPrivateNames.set(name, loc);
          }
        } else {
          this.parser.raise(Errors.InvalidPrivateFieldResolution, loc, {
            identifierName: name
          });
        }
      }
    };
    _proto.declarePrivateName = function declarePrivateName(name, elementType, loc) {
      var _this$current = this.current(),
        privateNames = _this$current.privateNames,
        loneAccessors = _this$current.loneAccessors,
        undefinedPrivateNames = _this$current.undefinedPrivateNames;
      var redefined = privateNames.has(name);
      if (elementType & ClassElementType.KIND_ACCESSOR) {
        var accessor = redefined && loneAccessors.get(name);
        if (accessor) {
          var oldStatic = accessor & ClassElementType.FLAG_STATIC;
          var newStatic = elementType & ClassElementType.FLAG_STATIC;
          var oldKind = accessor & ClassElementType.KIND_ACCESSOR;
          var newKind = elementType & ClassElementType.KIND_ACCESSOR;
          redefined = oldKind === newKind || oldStatic !== newStatic;
          if (!redefined) loneAccessors["delete"](name);
        } else if (!redefined) {
          loneAccessors.set(name, elementType);
        }
      }
      if (redefined) {
        this.parser.raise(Errors.PrivateNameRedeclaration, loc, {
          identifierName: name
        });
      }
      privateNames.add(name);
      undefinedPrivateNames["delete"](name);
    };
    _proto.usePrivateName = function usePrivateName(name, loc) {
      var classScope;
      for (var _i4 = 0, _this$stack2 = this.stack; _i4 < _this$stack2.length; _i4++) {
        classScope = _this$stack2[_i4];
        if (classScope.privateNames.has(name)) return;
      }
      if (classScope) {
        classScope.undefinedPrivateNames.set(name, loc);
      } else {
        this.parser.raise(Errors.InvalidPrivateFieldResolution, loc, {
          identifierName: name
        });
      }
    };
    return _createClass(ClassScopeHandler);
  }();

  var ExpressionScope = function () {
    function ExpressionScope(type) {
      if (type === void 0) {
        type = 0;
      }
      this.type = type;
    }
    var _proto = ExpressionScope.prototype;
    _proto.canBeArrowParameterDeclaration = function canBeArrowParameterDeclaration() {
      return this.type === 2 || this.type === 1;
    };
    _proto.isCertainlyParameterDeclaration = function isCertainlyParameterDeclaration() {
      return this.type === 3;
    };
    return _createClass(ExpressionScope);
  }();
  var ArrowHeadParsingScope = function (_ExpressionScope) {
    function ArrowHeadParsingScope(type) {
      var _this;
      _this = _ExpressionScope.call(this, type) || this;
      _this.declarationErrors = new Map();
      return _this;
    }
    _inherits(ArrowHeadParsingScope, _ExpressionScope);
    var _proto2 = ArrowHeadParsingScope.prototype;
    _proto2.recordDeclarationError = function recordDeclarationError(ParsingErrorClass, at) {
      var index = at.index;
      this.declarationErrors.set(index, [ParsingErrorClass, at]);
    };
    _proto2.clearDeclarationError = function clearDeclarationError(index) {
      this.declarationErrors["delete"](index);
    };
    _proto2.iterateErrors = function iterateErrors(iterator) {
      this.declarationErrors.forEach(iterator);
    };
    return _createClass(ArrowHeadParsingScope);
  }(ExpressionScope);
  var ExpressionScopeHandler = function () {
    function ExpressionScopeHandler(parser) {
      this.parser = void 0;
      this.stack = [new ExpressionScope()];
      this.parser = parser;
    }
    var _proto3 = ExpressionScopeHandler.prototype;
    _proto3.enter = function enter(scope) {
      this.stack.push(scope);
    };
    _proto3.exit = function exit() {
      this.stack.pop();
    };
    _proto3.recordParameterInitializerError = function recordParameterInitializerError(toParseError, node) {
      var origin = node.loc.start;
      var stack = this.stack;
      var i = stack.length - 1;
      var scope = stack[i];
      while (!scope.isCertainlyParameterDeclaration()) {
        if (scope.canBeArrowParameterDeclaration()) {
          scope.recordDeclarationError(toParseError, origin);
        } else {
          return;
        }
        scope = stack[--i];
      }
      this.parser.raise(toParseError, origin);
    };
    _proto3.recordArrowParameterBindingError = function recordArrowParameterBindingError(error, node) {
      var stack = this.stack;
      var scope = stack[stack.length - 1];
      var origin = node.loc.start;
      if (scope.isCertainlyParameterDeclaration()) {
        this.parser.raise(error, origin);
      } else if (scope.canBeArrowParameterDeclaration()) {
        scope.recordDeclarationError(error, origin);
      } else {
        return;
      }
    };
    _proto3.recordAsyncArrowParametersError = function recordAsyncArrowParametersError(at) {
      var stack = this.stack;
      var i = stack.length - 1;
      var scope = stack[i];
      while (scope.canBeArrowParameterDeclaration()) {
        if (scope.type === 2) {
          scope.recordDeclarationError(Errors.AwaitBindingIdentifier, at);
        }
        scope = stack[--i];
      }
    };
    _proto3.validateAsPattern = function validateAsPattern() {
      var _this2 = this;
      var stack = this.stack;
      var currentScope = stack[stack.length - 1];
      if (!currentScope.canBeArrowParameterDeclaration()) return;
      currentScope.iterateErrors(function (_ref) {
        var toParseError = _ref[0],
          loc = _ref[1];
        _this2.parser.raise(toParseError, loc);
        var i = stack.length - 2;
        var scope = stack[i];
        while (scope.canBeArrowParameterDeclaration()) {
          scope.clearDeclarationError(loc.index);
          scope = stack[--i];
        }
      });
    };
    return _createClass(ExpressionScopeHandler);
  }();
  function newParameterDeclarationScope() {
    return new ExpressionScope(3);
  }
  function newArrowHeadScope() {
    return new ArrowHeadParsingScope(1);
  }
  function newAsyncArrowScope() {
    return new ArrowHeadParsingScope(2);
  }
  function newExpressionScope() {
    return new ExpressionScope();
  }

  var UtilParser = function (_Tokenizer) {
    function UtilParser() {
      return _Tokenizer.apply(this, arguments) || this;
    }
    _inherits(UtilParser, _Tokenizer);
    var _proto = UtilParser.prototype;
    _proto.addExtra = function addExtra(node, key, value, enumerable) {
      if (enumerable === void 0) {
        enumerable = true;
      }
      if (!node) return;
      var extra = node.extra;
      if (extra == null) {
        extra = {};
        node.extra = extra;
      }
      if (enumerable) {
        extra[key] = value;
      } else {
        Object.defineProperty(extra, key, {
          enumerable: enumerable,
          value: value
        });
      }
    };
    _proto.isContextual = function isContextual(token) {
      return this.state.type === token && !this.state.containsEsc;
    };
    _proto.isUnparsedContextual = function isUnparsedContextual(nameStart, name) {
      if (this.input.startsWith(name, nameStart)) {
        var nextCh = this.input.charCodeAt(nameStart + name.length);
        return !(isIdentifierChar(nextCh) || (nextCh & 0xfc00) === 0xd800);
      }
      return false;
    };
    _proto.isLookaheadContextual = function isLookaheadContextual(name) {
      var next = this.nextTokenStart();
      return this.isUnparsedContextual(next, name);
    };
    _proto.eatContextual = function eatContextual(token) {
      if (this.isContextual(token)) {
        this.next();
        return true;
      }
      return false;
    };
    _proto.expectContextual = function expectContextual(token, toParseError) {
      if (!this.eatContextual(token)) {
        if (toParseError != null) {
          throw this.raise(toParseError, this.state.startLoc);
        }
        this.unexpected(null, token);
      }
    };
    _proto.canInsertSemicolon = function canInsertSemicolon() {
      return this.match(140) || this.match(8) || this.hasPrecedingLineBreak();
    };
    _proto.hasPrecedingLineBreak = function hasPrecedingLineBreak() {
      return hasNewLine(this.input, this.offsetToSourcePos(this.state.lastTokEndLoc.index), this.state.start);
    };
    _proto.hasFollowingLineBreak = function hasFollowingLineBreak() {
      return hasNewLine(this.input, this.state.end, this.nextTokenStart());
    };
    _proto.isLineTerminator = function isLineTerminator() {
      return this.eat(13) || this.canInsertSemicolon();
    };
    _proto.semicolon = function semicolon(allowAsi) {
      if (allowAsi === void 0) {
        allowAsi = true;
      }
      if (allowAsi ? this.isLineTerminator() : this.eat(13)) return;
      this.raise(Errors.MissingSemicolon, this.state.lastTokEndLoc);
    };
    _proto.expect = function expect(type, loc) {
      if (!this.eat(type)) {
        this.unexpected(loc, type);
      }
    };
    _proto.tryParse = function tryParse(fn, oldState) {
      if (oldState === void 0) {
        oldState = this.state.clone();
      }
      var abortSignal = {
        node: null
      };
      try {
        var node = fn(function (node) {
          if (node === void 0) {
            node = null;
          }
          abortSignal.node = node;
          throw abortSignal;
        });
        if (this.state.errors.length > oldState.errors.length) {
          var failState = this.state;
          this.state = oldState;
          this.state.tokensLength = failState.tokensLength;
          return {
            node: node,
            error: failState.errors[oldState.errors.length],
            thrown: false,
            aborted: false,
            failState: failState
          };
        }
        return {
          node: node,
          error: null,
          thrown: false,
          aborted: false,
          failState: null
        };
      } catch (error) {
        var _failState = this.state;
        this.state = oldState;
        if (error instanceof SyntaxError) {
          return {
            node: null,
            error: error,
            thrown: true,
            aborted: false,
            failState: _failState
          };
        }
        if (error === abortSignal) {
          return {
            node: abortSignal.node,
            error: null,
            thrown: false,
            aborted: true,
            failState: _failState
          };
        }
        throw error;
      }
    };
    _proto.checkExpressionErrors = function checkExpressionErrors(refExpressionErrors, andThrow) {
      if (!refExpressionErrors) return false;
      var shorthandAssignLoc = refExpressionErrors.shorthandAssignLoc,
        doubleProtoLoc = refExpressionErrors.doubleProtoLoc,
        privateKeyLoc = refExpressionErrors.privateKeyLoc,
        optionalParametersLoc = refExpressionErrors.optionalParametersLoc,
        voidPatternLoc = refExpressionErrors.voidPatternLoc;
      var hasErrors = !!shorthandAssignLoc || !!doubleProtoLoc || !!optionalParametersLoc || !!privateKeyLoc || !!voidPatternLoc;
      if (!andThrow) {
        return hasErrors;
      }
      if (shorthandAssignLoc != null) {
        this.raise(Errors.InvalidCoverInitializedName, shorthandAssignLoc);
      }
      if (doubleProtoLoc != null) {
        this.raise(Errors.DuplicateProto, doubleProtoLoc);
      }
      if (privateKeyLoc != null) {
        this.raise(Errors.UnexpectedPrivateField, privateKeyLoc);
      }
      if (optionalParametersLoc != null) {
        this.unexpected(optionalParametersLoc);
      }
      if (voidPatternLoc != null) {
        this.raise(Errors.InvalidCoverDiscardElement, voidPatternLoc);
      }
    };
    _proto.isLiteralPropertyName = function isLiteralPropertyName() {
      return tokenIsLiteralPropertyName(this.state.type);
    };
    _proto.isPrivateName = function isPrivateName(node) {
      return node.type === "PrivateName";
    };
    _proto.getPrivateNameSV = function getPrivateNameSV(node) {
      return node.id.name;
    };
    _proto.hasPropertyAsPrivateName = function hasPropertyAsPrivateName(node) {
      return (node.type ==