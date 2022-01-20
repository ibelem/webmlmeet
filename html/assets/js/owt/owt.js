(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Owt = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],2:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],3:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],4:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],5:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],6:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");

var isNativeReflectConstruct = require("./isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./isNativeReflectConstruct.js":12,"./setPrototypeOf.js":16}],7:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],8:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],9:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./setPrototypeOf.js":16}],10:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],11:[function(require,module,exports){
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],12:[function(require,module,exports){
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],13:[function(require,module,exports){
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],14:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],15:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof")["default"];

var assertThisInitialized = require("./assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./assertThisInitialized.js":3,"@babel/runtime/helpers/typeof":18}],16:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],17:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles.js");

var iterableToArrayLimit = require("./iterableToArrayLimit.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableRest = require("./nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayWithHoles.js":2,"./iterableToArrayLimit.js":13,"./nonIterableRest.js":14,"./unsupportedIterableToArray.js":19}],18:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],19:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayLikeToArray.js":1}],20:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf.js");

var setPrototypeOf = require("./setPrototypeOf.js");

var isNativeFunction = require("./isNativeFunction.js");

var construct = require("./construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./construct.js":6,"./getPrototypeOf.js":8,"./isNativeFunction.js":11,"./setPrototypeOf.js":16}],21:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":22}],22:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
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
    define({}, "");
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
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
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
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

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

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

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

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
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

    if (! info) {
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

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

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
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
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
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
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
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

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

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
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
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
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

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

},{}],23:[function(require,module,exports){
// MIT License
//
// Copyright (c) 2012 Universidad Politécnica de Madrid
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
// This file is borrowed from lynckia/licode with some modifications.
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base64 = void 0;

var Base64 = function () {
  var END_OF_INPUT = -1;
  var base64Str;
  var base64Count;
  var i;
  var base64Chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];
  var reverseBase64Chars = [];

  for (i = 0; i < base64Chars.length; i = i + 1) {
    reverseBase64Chars[base64Chars[i]] = i;
  }

  var setBase64Str = function setBase64Str(str) {
    base64Str = str;
    base64Count = 0;
  };

  var readBase64 = function readBase64() {
    if (!base64Str) {
      return END_OF_INPUT;
    }

    if (base64Count >= base64Str.length) {
      return END_OF_INPUT;
    }

    var c = base64Str.charCodeAt(base64Count) & 0xff;
    base64Count = base64Count + 1;
    return c;
  };

  var encodeBase64 = function encodeBase64(str) {
    var result;
    var done;
    setBase64Str(str);
    result = '';
    var inBuffer = new Array(3);
    done = false;

    while (!done && (inBuffer[0] = readBase64()) !== END_OF_INPUT) {
      inBuffer[1] = readBase64();
      inBuffer[2] = readBase64();
      result = result + base64Chars[inBuffer[0] >> 2];

      if (inBuffer[1] !== END_OF_INPUT) {
        result = result + base64Chars[inBuffer[0] << 4 & 0x30 | inBuffer[1] >> 4];

        if (inBuffer[2] !== END_OF_INPUT) {
          result = result + base64Chars[inBuffer[1] << 2 & 0x3c | inBuffer[2] >> 6];
          result = result + base64Chars[inBuffer[2] & 0x3F];
        } else {
          result = result + base64Chars[inBuffer[1] << 2 & 0x3c];
          result = result + '=';
          done = true;
        }
      } else {
        result = result + base64Chars[inBuffer[0] << 4 & 0x30];
        result = result + '=';
        result = result + '=';
        done = true;
      }
    }

    return result;
  };

  var readReverseBase64 = function readReverseBase64() {
    if (!base64Str) {
      return END_OF_INPUT;
    }

    while (true) {
      // eslint-disable-line no-constant-condition
      if (base64Count >= base64Str.length) {
        return END_OF_INPUT;
      }

      var nextCharacter = base64Str.charAt(base64Count);
      base64Count = base64Count + 1;

      if (reverseBase64Chars[nextCharacter]) {
        return reverseBase64Chars[nextCharacter];
      }

      if (nextCharacter === 'A') {
        return 0;
      }
    }
  };

  var ntos = function ntos(n) {
    n = n.toString(16);

    if (n.length === 1) {
      n = '0' + n;
    }

    n = '%' + n;
    return unescape(n);
  };

  var decodeBase64 = function decodeBase64(str) {
    var result;
    var done;
    setBase64Str(str);
    result = '';
    var inBuffer = new Array(4);
    done = false;

    while (!done && (inBuffer[0] = readReverseBase64()) !== END_OF_INPUT && (inBuffer[1] = readReverseBase64()) !== END_OF_INPUT) {
      inBuffer[2] = readReverseBase64();
      inBuffer[3] = readReverseBase64();
      result = result + ntos(inBuffer[0] << 2 & 0xff | inBuffer[1] >> 4);

      if (inBuffer[2] !== END_OF_INPUT) {
        result += ntos(inBuffer[1] << 4 & 0xff | inBuffer[2] >> 2);

        if (inBuffer[3] !== END_OF_INPUT) {
          result = result + ntos(inBuffer[2] << 6 & 0xff | inBuffer[3]);
        } else {
          done = true;
        }
      } else {
        done = true;
      }
    }

    return result;
  };

  return {
    encodeBase64: encodeBase64,
    decodeBase64: decodeBase64
  };
}();

exports.Base64 = Base64;

},{}],24:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';
/**
 * @class AudioCodec
 * @memberOf Owt.Base
 * @classDesc Audio codec enumeration.
 * @hideconstructor
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoEncodingParameters = exports.VideoCodecParameters = exports.VideoCodec = exports.AudioEncodingParameters = exports.AudioCodecParameters = exports.AudioCodec = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var AudioCodec = {
  PCMU: 'pcmu',
  PCMA: 'pcma',
  OPUS: 'opus',
  G722: 'g722',
  ISAC: 'iSAC',
  ILBC: 'iLBC',
  AAC: 'aac',
  AC3: 'ac3',
  NELLYMOSER: 'nellymoser'
};
/**
 * @class AudioCodecParameters
 * @memberOf Owt.Base
 * @classDesc Codec parameters for an audio track.
 * @hideconstructor
 */

exports.AudioCodec = AudioCodec;

var AudioCodecParameters = // eslint-disable-next-line require-jsdoc
function AudioCodecParameters(name, channelCount, clockRate) {
  (0, _classCallCheck2["default"])(this, AudioCodecParameters);

  /**
   * @member {string} name
   * @memberof Owt.Base.AudioCodecParameters
   * @instance
   * @desc Name of a codec. Please a value in Owt.Base.AudioCodec. However,
   * some functions do not support all the values in Owt.Base.AudioCodec.
   */
  this.name = name;
  /**
   * @member {?number} channelCount
   * @memberof Owt.Base.AudioCodecParameters
   * @instance
   * @desc Numbers of channels for an audio track.
   */

  this.channelCount = channelCount;
  /**
   * @member {?number} clockRate
   * @memberof Owt.Base.AudioCodecParameters
   * @instance
   * @desc The codec clock rate expressed in Hertz.
   */

  this.clockRate = clockRate;
};
/**
 * @class AudioEncodingParameters
 * @memberOf Owt.Base
 * @classDesc Encoding parameters for sending an audio track.
 * @hideconstructor
 */


exports.AudioCodecParameters = AudioCodecParameters;

var AudioEncodingParameters = // eslint-disable-next-line require-jsdoc
function AudioEncodingParameters(codec, maxBitrate) {
  (0, _classCallCheck2["default"])(this, AudioEncodingParameters);

  /**
   * @member {?Owt.Base.AudioCodecParameters} codec
   * @instance
   * @memberof Owt.Base.AudioEncodingParameters
   */
  this.codec = codec;
  /**
   * @member {?number} maxBitrate
   * @instance
   * @memberof Owt.Base.AudioEncodingParameters
   * @desc Max bitrate expressed in kbps.
   */

  this.maxBitrate = maxBitrate;
};
/**
 * @class VideoCodec
 * @memberOf Owt.Base
 * @classDesc Video codec enumeration.
 * @hideconstructor
 */


exports.AudioEncodingParameters = AudioEncodingParameters;
var VideoCodec = {
  VP8: 'vp8',
  VP9: 'vp9',
  H264: 'h264',
  H265: 'h265',
  AV1: 'av1',
  // Non-standard AV1, will be renamed to AV1.
  // https://bugs.chromium.org/p/webrtc/issues/detail?id=11042
  AV1X: 'av1x'
};
/**
 * @class VideoCodecParameters
 * @memberOf Owt.Base
 * @classDesc Codec parameters for a video track.
 * @hideconstructor
 */

exports.VideoCodec = VideoCodec;

var VideoCodecParameters = // eslint-disable-next-line require-jsdoc
function VideoCodecParameters(name, profile) {
  (0, _classCallCheck2["default"])(this, VideoCodecParameters);

  /**
   * @member {string} name
   * @memberof Owt.Base.VideoCodecParameters
   * @instance
   * @desc Name of a codec.Please a value in Owt.Base.AudioCodec.However,
     some functions do not support all the values in Owt.Base.AudioCodec.
   */
  this.name = name;
  /**
   * @member {?string} profile
   * @memberof Owt.Base.VideoCodecParameters
   * @instance
   * @desc The profile of a codec. Profile may not apply to all codecs.
   */

  this.profile = profile;
};
/**
 * @class VideoEncodingParameters
 * @memberOf Owt.Base
 * @classDesc Encoding parameters for sending a video track.
 * @hideconstructor
 */


exports.VideoCodecParameters = VideoCodecParameters;

var VideoEncodingParameters = // eslint-disable-next-line require-jsdoc
function VideoEncodingParameters(codec, maxBitrate) {
  (0, _classCallCheck2["default"])(this, VideoEncodingParameters);

  /**
   * @member {?Owt.Base.VideoCodecParameters} codec
   * @instance
   * @memberof Owt.Base.VideoEncodingParameters
   */
  this.codec = codec;
  /**
   * @member {?number} maxBitrate
   * @instance
   * @memberof Owt.Base.VideoEncodingParameters
   * @desc Max bitrate expressed in kbps.
   */

  this.maxBitrate = maxBitrate;
};

exports.VideoEncodingParameters = VideoEncodingParameters;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":10}],25:[function(require,module,exports){
// MIT License
//
// Copyright (c) 2012 Universidad Politécnica de Madrid
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
// This file is borrowed from lynckia/licode with some modifications.
'use strict';
/**
 * @class EventDispatcher
 * @classDesc A shim for EventTarget. Might be changed to EventTarget later.
 * @memberof Owt.Base
 * @hideconstructor
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OwtEvent = exports.MuteEvent = exports.MessageEvent = exports.EventDispatcher = exports.ErrorEvent = void 0;

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var EventDispatcher = function EventDispatcher() {
  // Private vars
  var spec = {};
  spec.dispatcher = {};
  spec.dispatcher.eventListeners = {};
  /**
   * @function addEventListener
   * @desc This function registers a callback function as a handler for the
   * corresponding event. It's shortened form is on(eventType, listener). See
   * the event description in the following table.
   * @instance
   * @memberof Owt.Base.EventDispatcher
   * @param {string} eventType Event string.
   * @param {function} listener Callback function.
   */

  this.addEventListener = function (eventType, listener) {
    if (spec.dispatcher.eventListeners[eventType] === undefined) {
      spec.dispatcher.eventListeners[eventType] = [];
    }

    spec.dispatcher.eventListeners[eventType].push(listener);
  };
  /**
   * @function removeEventListener
   * @desc This function removes a registered event listener.
   * @instance
   * @memberof Owt.Base.EventDispatcher
   * @param {string} eventType Event string.
   * @param {function} listener Callback function.
   */


  this.removeEventListener = function (eventType, listener) {
    if (!spec.dispatcher.eventListeners[eventType]) {
      return;
    }

    var index = spec.dispatcher.eventListeners[eventType].indexOf(listener);

    if (index !== -1) {
      spec.dispatcher.eventListeners[eventType].splice(index, 1);
    }
  };
  /**
   * @function clearEventListener
   * @desc This function removes all event listeners for one type.
   * @instance
   * @memberof Owt.Base.EventDispatcher
   * @param {string} eventType Event string.
   */


  this.clearEventListener = function (eventType) {
    spec.dispatcher.eventListeners[eventType] = [];
  }; // It dispatch a new event to the event listeners, based on the type
  // of event. All events are intended to be LicodeEvents.


  this.dispatchEvent = function (event) {
    if (!spec.dispatcher.eventListeners[event.type]) {
      return;
    }

    spec.dispatcher.eventListeners[event.type].map(function (listener) {
      listener(event);
    });
  };
};
/**
 * @class OwtEvent
 * @classDesc Class OwtEvent represents a generic Event in the library.
 * @memberof Owt.Base
 * @hideconstructor
 */


exports.EventDispatcher = EventDispatcher;

var OwtEvent = // eslint-disable-next-line require-jsdoc
function OwtEvent(type) {
  (0, _classCallCheck2["default"])(this, OwtEvent);
  this.type = type;
};
/**
 * @class MessageEvent
 * @classDesc Class MessageEvent represents a message Event in the library.
 * @memberof Owt.Base
 * @hideconstructor
 */


exports.OwtEvent = OwtEvent;

var MessageEvent = /*#__PURE__*/function (_OwtEvent) {
  (0, _inherits2["default"])(MessageEvent, _OwtEvent);

  var _super = _createSuper(MessageEvent);

  // eslint-disable-next-line require-jsdoc
  function MessageEvent(type, init) {
    var _this;

    (0, _classCallCheck2["default"])(this, MessageEvent);
    _this = _super.call(this, type);
    /**
     * @member {string} origin
     * @instance
     * @memberof Owt.Base.MessageEvent
     * @desc ID of the remote endpoint who published this stream.
     */

    _this.origin = init.origin;
    /**
     * @member {string} message
     * @instance
     * @memberof Owt.Base.MessageEvent
     */

    _this.message = init.message;
    /**
     * @member {string} to
     * @instance
     * @memberof Owt.Base.MessageEvent
     * @desc Values could be "all", "me" in conference mode, or undefined in
     * P2P mode.
     */

    _this.to = init.to;
    return _this;
  }

  return MessageEvent;
}(OwtEvent);
/**
 * @class ErrorEvent
 * @classDesc Class ErrorEvent represents an error Event in the library.
 * @memberof Owt.Base
 * @hideconstructor
 */


exports.MessageEvent = MessageEvent;

var ErrorEvent = /*#__PURE__*/function (_OwtEvent2) {
  (0, _inherits2["default"])(ErrorEvent, _OwtEvent2);

  var _super2 = _createSuper(ErrorEvent);

  // eslint-disable-next-line require-jsdoc
  function ErrorEvent(type, init) {
    var _this2;

    (0, _classCallCheck2["default"])(this, ErrorEvent);
    _this2 = _super2.call(this, type);
    /**
     * @member {Error} error
     * @instance
     * @memberof Owt.Base.ErrorEvent
     */

    _this2.error = init.error;
    return _this2;
  }

  return ErrorEvent;
}(OwtEvent);
/**
 * @class MuteEvent
 * @classDesc Class MuteEvent represents a mute or unmute event.
 * @memberof Owt.Base
 * @hideconstructor
 */


exports.ErrorEvent = ErrorEvent;

var MuteEvent = /*#__PURE__*/function (_OwtEvent3) {
  (0, _inherits2["default"])(MuteEvent, _OwtEvent3);

  var _super3 = _createSuper(MuteEvent);

  // eslint-disable-next-line require-jsdoc
  function MuteEvent(type, init) {
    var _this3;

    (0, _classCallCheck2["default"])(this, MuteEvent);
    _this3 = _super3.call(this, type);
    /**
     * @member {Owt.Base.TrackKind} kind
     * @instance
     * @memberof Owt.Base.MuteEvent
     */

    _this3.kind = init.kind;
    return _this3;
  }

  return MuteEvent;
}(OwtEvent);

exports.MuteEvent = MuteEvent;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":15}],26:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mediastreamFactory = require("./mediastream-factory.js");

Object.keys(_mediastreamFactory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mediastreamFactory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mediastreamFactory[key];
    }
  });
});

var _stream = require("./stream.js");

Object.keys(_stream).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _stream[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stream[key];
    }
  });
});

var _mediaformat = require("./mediaformat.js");

Object.keys(_mediaformat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mediaformat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mediaformat[key];
    }
  });
});

var _transport = require("./transport.js");

Object.keys(_transport).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _transport[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _transport[key];
    }
  });
});

},{"./mediaformat.js":28,"./mediastream-factory.js":29,"./stream.js":32,"./transport.js":33}],27:[function(require,module,exports){
// MIT License
//
// Copyright (c) 2012 Universidad Politécnica de Madrid
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
// This file is borrowed from lynckia/licode with some modifications.

/* global window */
'use strict';
/*
 * API to write logs based on traditional logging mechanisms: debug, trace,
 * info, warning, error
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Logger = function () {
  var DEBUG = 0;
  var TRACE = 1;
  var INFO = 2;
  var WARNING = 3;
  var ERROR = 4;
  var NONE = 5;

  var noOp = function noOp() {}; // |that| is the object to be returned.


  var that = {
    DEBUG: DEBUG,
    TRACE: TRACE,
    INFO: INFO,
    WARNING: WARNING,
    ERROR: ERROR,
    NONE: NONE
  };

  that.log = function () {
    var _window$console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_window$console = window.console).log.apply(_window$console, [new Date().toISOString()].concat(args));
  };

  var bindType = function bindType(type) {
    if (typeof window.console[type] === 'function') {
      return function () {
        var _window$console2;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        (_window$console2 = window.console)[type].apply(_window$console2, [new Date().toISOString()].concat(args));
      };
    } else {
      return that.log;
    }
  };

  var setLogLevel = function setLogLevel(level) {
    if (level <= DEBUG) {
      that.debug = bindType('debug');
    } else {
      that.debug = noOp;
    }

    if (level <= TRACE) {
      that.trace = bindType('trace');
    } else {
      that.trace = noOp;
    }

    if (level <= INFO) {
      that.info = bindType('info');
    } else {
      that.info = noOp;
    }

    if (level <= WARNING) {
      that.warning = bindType('warn');
    } else {
      that.warning = noOp;
    }

    if (level <= ERROR) {
      that.error = bindType('error');
    } else {
      that.error = noOp;
    }
  };

  setLogLevel(ERROR); // Default level.

  that.setLogLevel = setLogLevel;
  return that;
}();

var _default = Logger;
exports["default"] = _default;

},{}],28:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';
/**
 * @class AudioSourceInfo
 * @classDesc Source info about an audio track. Values: 'mic', 'screen-cast',
 * 'file', 'mixed'.
 * @memberOf Owt.Base
 * @readonly
 * @enum {string}
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoSourceInfo = exports.TrackKind = exports.Resolution = exports.AudioSourceInfo = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var AudioSourceInfo = {
  MIC: 'mic',
  SCREENCAST: 'screen-cast',
  FILE: 'file',
  MIXED: 'mixed'
};
/**
 * @class VideoSourceInfo
 * @classDesc Source info about a video track. Values: 'camera', 'screen-cast',
 * 'file', 'mixed'.
 * @memberOf Owt.Base
 * @readonly
 * @enum {string}
 */

exports.AudioSourceInfo = AudioSourceInfo;
var VideoSourceInfo = {
  CAMERA: 'camera',
  SCREENCAST: 'screen-cast',
  FILE: 'file',
  MIXED: 'mixed'
};
/**
 * @class TrackKind
 * @classDesc Kind of a track. Values: 'audio' for audio track, 'video' for
 * video track, 'av' for both audio and video tracks.
 * @memberOf Owt.Base
 * @readonly
 * @enum {string}
 */

exports.VideoSourceInfo = VideoSourceInfo;
var TrackKind = {
  /**
   * Audio tracks.
   * @type string
   */
  AUDIO: 'audio',

  /**
   * Video tracks.
   * @type string
   */
  VIDEO: 'video',

  /**
   * Both audio and video tracks.
   * @type string
   */
  AUDIO_AND_VIDEO: 'av'
};
/**
 * @class Resolution
 * @memberOf Owt.Base
 * @classDesc The Resolution defines the size of a rectangle.
 * @constructor
 * @param {number} width
 * @param {number} height
 */

exports.TrackKind = TrackKind;

var Resolution = // eslint-disable-next-line require-jsdoc
function Resolution(width, height) {
  (0, _classCallCheck2["default"])(this, Resolution);

  /**
   * @member {number} width
   * @instance
   * @memberof Owt.Base.Resolution
   */
  this.width = width;
  /**
   * @member {number} height
   * @instance
   * @memberof Owt.Base.Resolution
   */

  this.height = height;
};

exports.Resolution = Resolution;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":10}],29:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* global Promise, navigator */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoTrackConstraints = exports.StreamConstraints = exports.MediaStreamFactory = exports.AudioTrackConstraints = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var utils = _interopRequireWildcard(require("./utils.js"));

var MediaFormatModule = _interopRequireWildcard(require("./mediaformat.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @class AudioTrackConstraints
 * @classDesc Constraints for creating an audio MediaStreamTrack.
 * @memberof Owt.Base
 * @constructor
 * @param {Owt.Base.AudioSourceInfo} source Source info of this audio track.
 */
var AudioTrackConstraints = // eslint-disable-next-line require-jsdoc
function AudioTrackConstraints(source) {
  (0, _classCallCheck2["default"])(this, AudioTrackConstraints);

  if (!Object.values(MediaFormatModule.AudioSourceInfo).some(function (v) {
    return v === source;
  })) {
    throw new TypeError('Invalid source.');
  }
  /**
   * @member {string} source
   * @memberof Owt.Base.AudioTrackConstraints
   * @desc Values could be "mic", "screen-cast", "file" or "mixed".
   * @instance
   */


  this.source = source;
  /**
   * @member {string} deviceId
   * @memberof Owt.Base.AudioTrackConstraints
   * @desc Do not provide deviceId if source is not "mic".
   * @instance
   * @see https://w3c.github.io/mediacapture-main/#def-constraint-deviceId
   */

  this.deviceId = undefined;
};
/**
 * @class VideoTrackConstraints
 * @classDesc Constraints for creating a video MediaStreamTrack.
 * @memberof Owt.Base
 * @constructor
 * @param {Owt.Base.VideoSourceInfo} source Source info of this video track.
 */


exports.AudioTrackConstraints = AudioTrackConstraints;

var VideoTrackConstraints = // eslint-disable-next-line require-jsdoc
function VideoTrackConstraints(source) {
  (0, _classCallCheck2["default"])(this, VideoTrackConstraints);

  if (!Object.values(MediaFormatModule.VideoSourceInfo).some(function (v) {
    return v === source;
  })) {
    throw new TypeError('Invalid source.');
  }
  /**
   * @member {string} source
   * @memberof Owt.Base.VideoTrackConstraints
   * @desc Values could be "camera", "screen-cast", "file" or "mixed".
   * @instance
   */


  this.source = source;
  /**
   * @member {string} deviceId
   * @memberof Owt.Base.VideoTrackConstraints
   * @desc Do not provide deviceId if source is not "camera".
   * @instance
   * @see https://w3c.github.io/mediacapture-main/#def-constraint-deviceId
   */

  this.deviceId = undefined;
  /**
   * @member {Owt.Base.Resolution} resolution
   * @memberof Owt.Base.VideoTrackConstraints
   * @instance
   */

  this.resolution = undefined;
  /**
   * @member {number} frameRate
   * @memberof Owt.Base.VideoTrackConstraints
   * @instance
   */

  this.frameRate = undefined;
};
/**
 * @class StreamConstraints
 * @classDesc Constraints for creating a MediaStream from screen mic and camera.
 * @memberof Owt.Base
 * @constructor
 * @param {?Owt.Base.AudioTrackConstraints} audioConstraints
 * @param {?Owt.Base.VideoTrackConstraints} videoConstraints
 */


exports.VideoTrackConstraints = VideoTrackConstraints;

var StreamConstraints = // eslint-disable-next-line require-jsdoc
function StreamConstraints() {
  var audioConstraints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var videoConstraints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  (0, _classCallCheck2["default"])(this, StreamConstraints);

  /**
   * @member {Owt.Base.MediaStreamTrackDeviceConstraintsForAudio} audio
   * @memberof Owt.Base.MediaStreamDeviceConstraints
   * @instance
   */
  this.audio = audioConstraints;
  /**
   * @member {Owt.Base.MediaStreamTrackDeviceConstraintsForVideo} Video
   * @memberof Owt.Base.MediaStreamDeviceConstraints
   * @instance
   */

  this.video = videoConstraints;
}; // eslint-disable-next-line require-jsdoc


exports.StreamConstraints = StreamConstraints;

function isVideoConstrainsForScreenCast(constraints) {
  return (0, _typeof2["default"])(constraints.video) === 'object' && constraints.video.source === MediaFormatModule.VideoSourceInfo.SCREENCAST;
}
/**
 * @class MediaStreamFactory
 * @classDesc A factory to create MediaStream. You can also create MediaStream
 * by yourself.
 * @memberof Owt.Base
 */


var MediaStreamFactory = /*#__PURE__*/function () {
  function MediaStreamFactory() {
    (0, _classCallCheck2["default"])(this, MediaStreamFactory);
  }

  (0, _createClass2["default"])(MediaStreamFactory, null, [{
    key: "createMediaStream",
    value:
    /**
     * @function createMediaStream
     * @static
     * @desc Create a MediaStream with given constraints. If you want to create a
     * MediaStream for screen cast, please make sure both audio and video's source
     * are "screen-cast".
     * @memberof Owt.Base.MediaStreamFactory
     * @return {Promise<MediaStream, Error>} Return a promise that is resolved
     * when stream is successfully created, or rejected if one of the following
     * error happened:
     * - One or more parameters cannot be satisfied.
     * - Specified device is busy.
     * - Cannot obtain necessary permission or operation is canceled by user.
     * - Video source is screen cast, while audio source is not.
     * - Audio source is screen cast, while video source is disabled.
     * @param {Owt.Base.StreamConstraints} constraints
     */
    function createMediaStream(constraints) {
      if ((0, _typeof2["default"])(constraints) !== 'object' || !constraints.audio && !constraints.video) {
        return Promise.reject(new TypeError('Invalid constrains'));
      }

      if (!isVideoConstrainsForScreenCast(constraints) && (0, _typeof2["default"])(constraints.audio) === 'object' && constraints.audio.source === MediaFormatModule.AudioSourceInfo.SCREENCAST) {
        return Promise.reject(new TypeError('Cannot share screen without video.'));
      }

      if (isVideoConstrainsForScreenCast(constraints) && (0, _typeof2["default"])(constraints.audio) === 'object' && constraints.audio.source !== MediaFormatModule.AudioSourceInfo.SCREENCAST) {
        return Promise.reject(new TypeError('Cannot capture video from screen cast while capture audio from' + ' other source.'));
      } // Check and convert constraints.


      if (!constraints.audio && !constraints.video) {
        return Promise.reject(new TypeError('At least one of audio and video must be requested.'));
      }

      var mediaConstraints = Object.create({});

      if ((0, _typeof2["default"])(constraints.audio) === 'object' && constraints.audio.source === MediaFormatModule.AudioSourceInfo.MIC) {
        mediaConstraints.audio = Object.create({});

        if (utils.isEdge()) {
          mediaConstraints.audio.deviceId = constraints.audio.deviceId;
        } else {
          mediaConstraints.audio.deviceId = {
            exact: constraints.audio.deviceId
          };
        }
      } else {
        if (constraints.audio.source === MediaFormatModule.AudioSourceInfo.SCREENCAST) {
          mediaConstraints.audio = true;
        } else {
          mediaConstraints.audio = constraints.audio;
        }
      }

      if ((0, _typeof2["default"])(constraints.video) === 'object') {
        mediaConstraints.video = Object.create({});

        if (typeof constraints.video.frameRate === 'number') {
          mediaConstraints.video.frameRate = constraints.video.frameRate;
        }

        if (constraints.video.resolution && constraints.video.resolution.width && constraints.video.resolution.height) {
          if (constraints.video.source === MediaFormatModule.VideoSourceInfo.SCREENCAST) {
            mediaConstraints.video.width = constraints.video.resolution.width;
            mediaConstraints.video.height = constraints.video.resolution.height;
          } else {
            mediaConstraints.video.width = Object.create({});
            mediaConstraints.video.width.exact = constraints.video.resolution.width;
            mediaConstraints.video.height = Object.create({});
            mediaConstraints.video.height.exact = constraints.video.resolution.height;
          }
        }

        if (typeof constraints.video.deviceId === 'string') {
          mediaConstraints.video.deviceId = {
            exact: constraints.video.deviceId
          };
        }

        if (utils.isFirefox() && constraints.video.source === MediaFormatModule.VideoSourceInfo.SCREENCAST) {
          mediaConstraints.video.mediaSource = 'screen';
        }
      } else {
        mediaConstraints.video = constraints.video;
      }

      if (isVideoConstrainsForScreenCast(constraints)) {
        return navigator.mediaDevices.getDisplayMedia(mediaConstraints);
      } else {
        return navigator.mediaDevices.getUserMedia(mediaConstraints);
      }
    }
  }]);
  return MediaStreamFactory;
}();

exports.MediaStreamFactory = MediaStreamFactory;

},{"./mediaformat.js":28,"./utils.js":34,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/typeof":18}],30:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoPublicationSettings = exports.PublishOptions = exports.PublicationSettings = exports.Publication = exports.AudioPublicationSettings = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Utils = _interopRequireWildcard(require("./utils.js"));

var _event = require("../base/event.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class AudioPublicationSettings
 * @memberOf Owt.Base
 * @classDesc The audio settings of a publication.
 * @hideconstructor
 */
var AudioPublicationSettings = // eslint-disable-next-line require-jsdoc
function AudioPublicationSettings(codec) {
  (0, _classCallCheck2["default"])(this, AudioPublicationSettings);

  /**
   * @member {?Owt.Base.AudioCodecParameters} codec
   * @instance
   * @memberof Owt.Base.AudioPublicationSettings
   */
  this.codec = codec;
};
/**
 * @class VideoPublicationSettings
 * @memberOf Owt.Base
 * @classDesc The video settings of a publication.
 * @hideconstructor
 */


exports.AudioPublicationSettings = AudioPublicationSettings;

var VideoPublicationSettings = // eslint-disable-next-line require-jsdoc
function VideoPublicationSettings(codec, resolution, frameRate, bitrate, keyFrameInterval, rid) {
  (0, _classCallCheck2["default"])(this, VideoPublicationSettings);

  /**
   * @member {?Owt.Base.VideoCodecParameters} codec
   * @instance
   * @memberof Owt.Base.VideoPublicationSettings
   */
  this.codec = codec,
  /**
   * @member {?Owt.Base.Resolution} resolution
   * @instance
   * @memberof Owt.Base.VideoPublicationSettings
   */
  this.resolution = resolution;
  /**
   * @member {?number} frameRates
   * @instance
   * @classDesc Frames per second.
   * @memberof Owt.Base.VideoPublicationSettings
   */

  this.frameRate = frameRate;
  /**
   * @member {?number} bitrate
   * @instance
   * @memberof Owt.Base.VideoPublicationSettings
   */

  this.bitrate = bitrate;
  /**
   * @member {?number} keyFrameIntervals
   * @instance
   * @classDesc The time interval between key frames. Unit: second.
   * @memberof Owt.Base.VideoPublicationSettings
   */

  this.keyFrameInterval = keyFrameInterval;
  /**
   * @member {?number} rid
   * @instance
   * @classDesc Restriction identifier to identify the RTP Streams within an RTP session.
   * @memberof Owt.Base.VideoPublicationSettings
   */

  this.rid = rid;
};
/**
 * @class PublicationSettings
 * @memberOf Owt.Base
 * @classDesc The settings of a publication.
 * @hideconstructor
 */


exports.VideoPublicationSettings = VideoPublicationSettings;

var PublicationSettings = // eslint-disable-next-line require-jsdoc
function PublicationSettings(audio, video) {
  (0, _classCallCheck2["default"])(this, PublicationSettings);

  /**
   * @member {Owt.Base.AudioPublicationSettings[]} audio
   * @instance
   * @memberof Owt.Base.PublicationSettings
   */
  this.audio = audio;
  /**
   * @member {Owt.Base.VideoPublicationSettings[]} video
   * @instance
   * @memberof Owt.Base.PublicationSettings
   */

  this.video = video;
};
/**
 * @class Publication
 * @extends Owt.Base.EventDispatcher
 * @memberOf Owt.Base
 * @classDesc Publication represents a sender for publishing a stream. It
 * handles the actions on a LocalStream published to a conference.
 *
 * Events:
 *
 * | Event Name      | Argument Type    | Fired when       |
 * | ----------------| ---------------- | ---------------- |
 * | ended           | Event            | Publication is ended. |
 * | error           | ErrorEvent       | An error occurred on the publication. |
 * | mute            | MuteEvent        | Publication is muted. Client stopped sending audio and/or video data to remote endpoint. |
 * | unmute          | MuteEvent        | Publication is unmuted. Client continued sending audio and/or video data to remote endpoint. |
 *
 * `ended` event may not be fired on Safari after calling `Publication.stop()`.
 *
 * @hideconstructor
 */


exports.PublicationSettings = PublicationSettings;

var Publication = /*#__PURE__*/function (_EventDispatcher) {
  (0, _inherits2["default"])(Publication, _EventDispatcher);

  var _super = _createSuper(Publication);

  // eslint-disable-next-line require-jsdoc
  function Publication(id, transport, stop, getStats, mute, unmute) {
    var _this;

    (0, _classCallCheck2["default"])(this, Publication);
    _this = _super.call(this);
    /**
     * @member {string} id
     * @instance
     * @memberof Owt.Base.Publication
     */

    Object.defineProperty((0, _assertThisInitialized2["default"])(_this), 'id', {
      configurable: false,
      writable: false,
      value: id ? id : Utils.createUuid()
    });
    /**
     * @member {Owt.Base.TransportSettings} transport
     * @instance
     * @readonly
     * @desc Transport settings for the publication.
     * @memberof Owt.Base.Publication
     */

    Object.defineProperty((0, _assertThisInitialized2["default"])(_this), 'transport', {
      configurable: false,
      writable: false,
      value: transport
    });
    /**
     * @function stop
     * @instance
     * @desc Stop certain publication. Once a subscription is stopped, it cannot
     * be recovered.
     * @memberof Owt.Base.Publication
     * @returns {undefined}
     */

    _this.stop = stop;
    /**
     * @function getStats
     * @instance
     * @desc Get stats of underlying PeerConnection.
     * @memberof Owt.Base.Publication
     * @returns {Promise<RTCStatsReport, Error>}
     */

    _this.getStats = getStats;
    /**
     * @function mute
     * @instance
     * @desc Stop sending data to remote endpoint.
     * @memberof Owt.Base.Publication
     * @param {Owt.Base.TrackKind } kind Kind of tracks to be muted.
     * @returns {Promise<undefined, Error>}
     */

    _this.mute = mute;
    /**
     * @function unmute
     * @instance
     * @desc Continue sending data to remote endpoint.
     * @memberof Owt.Base.Publication
     * @param {Owt.Base.TrackKind } kind Kind of tracks to be unmuted.
     * @returns {Promise<undefined, Error>}
     */

    _this.unmute = unmute;
    return _this;
  }

  return Publication;
}(_event.EventDispatcher);
/**
 * @class PublishOptions
 * @memberOf Owt.Base
 * @classDesc PublishOptions defines options for publishing a
 * Owt.Base.LocalStream.
 */


exports.Publication = Publication;

var PublishOptions = // eslint-disable-next-line require-jsdoc
function PublishOptions(audio, video, transport) {
  (0, _classCallCheck2["default"])(this, PublishOptions);

  /**
   * @member {?Array<Owt.Base.AudioEncodingParameters> | ?Array<RTCRtpEncodingParameters>} audio
   * @instance
   * @memberof Owt.Base.PublishOptions
   * @desc Parameters for audio RtpSender. Publishing with RTCRtpEncodingParameters is an experimental feature. It is subject to change.
   */
  this.audio = audio;
  /**
   * @member {?Array<Owt.Base.VideoEncodingParameters> | ?Array<RTCRtpEncodingParameters>} video
   * @instance
   * @memberof Owt.Base.PublishOptions
   * @desc Parameters for video RtpSender. Publishing with RTCRtpEncodingParameters is an experimental feature. It is subject to change.
   */

  this.video = video;
  /**
   * @member {?Owt.Base.TransportConstraints} transport
   * @instance
   * @memberof Owt.Base.PublishOptions
   */

  this.transport = transport;
};

exports.PublishOptions = PublishOptions;

},{"../base/event.js":25,"./utils.js":34,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":15,"@babel/runtime/helpers/typeof":18}],31:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLegacySimulcast = addLegacySimulcast;
exports.reorderCodecs = reorderCodecs;
exports.setMaxBitrate = setMaxBitrate;

var _logger = _interopRequireDefault(require("./logger.js"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

'use strict';

function mergeConstraints(cons1, cons2) {
  if (!cons1 || !cons2) {
    return cons1 || cons2;
  }

  var merged = cons1;

  for (var key in cons2) {
    merged[key] = cons2[key];
  }

  return merged;
}

function iceCandidateType(candidateStr) {
  return candidateStr.split(' ')[7];
} // Turns the local type preference into a human-readable string.
// Note that this mapping is browser-specific.


function formatTypePreference(pref) {
  if (adapter.browserDetails.browser === 'chrome') {
    switch (pref) {
      case 0:
        return 'TURN/TLS';

      case 1:
        return 'TURN/TCP';

      case 2:
        return 'TURN/UDP';

      default:
        break;
    }
  } else if (adapter.browserDetails.browser === 'firefox') {
    switch (pref) {
      case 0:
        return 'TURN/TCP';

      case 5:
        return 'TURN/UDP';

      default:
        break;
    }
  }

  return '';
}

function maybeSetOpusOptions(sdp, params) {
  // Set Opus in Stereo, if stereo is true, unset it, if stereo is false, and
  // do nothing if otherwise.
  if (params.opusStereo === 'true') {
    sdp = setCodecParam(sdp, 'opus/48000', 'stereo', '1');
  } else if (params.opusStereo === 'false') {
    sdp = removeCodecParam(sdp, 'opus/48000', 'stereo');
  } // Set Opus FEC, if opusfec is true, unset it, if opusfec is false, and
  // do nothing if otherwise.


  if (params.opusFec === 'true') {
    sdp = setCodecParam(sdp, 'opus/48000', 'useinbandfec', '1');
  } else if (params.opusFec === 'false') {
    sdp = removeCodecParam(sdp, 'opus/48000', 'useinbandfec');
  } // Set Opus DTX, if opusdtx is true, unset it, if opusdtx is false, and
  // do nothing if otherwise.


  if (params.opusDtx === 'true') {
    sdp = setCodecParam(sdp, 'opus/48000', 'usedtx', '1');
  } else if (params.opusDtx === 'false') {
    sdp = removeCodecParam(sdp, 'opus/48000', 'usedtx');
  } // Set Opus maxplaybackrate, if requested.


  if (params.opusMaxPbr) {
    sdp = setCodecParam(sdp, 'opus/48000', 'maxplaybackrate', params.opusMaxPbr);
  }

  return sdp;
}

function maybeSetAudioSendBitRate(sdp, params) {
  if (!params.audioSendBitrate) {
    return sdp;
  }

  _logger["default"].debug('Prefer audio send bitrate: ' + params.audioSendBitrate);

  return preferBitRate(sdp, params.audioSendBitrate, 'audio');
}

function maybeSetAudioReceiveBitRate(sdp, params) {
  if (!params.audioRecvBitrate) {
    return sdp;
  }

  _logger["default"].debug('Prefer audio receive bitrate: ' + params.audioRecvBitrate);

  return preferBitRate(sdp, params.audioRecvBitrate, 'audio');
}

function maybeSetVideoSendBitRate(sdp, params) {
  if (!params.videoSendBitrate) {
    return sdp;
  }

  _logger["default"].debug('Prefer video send bitrate: ' + params.videoSendBitrate);

  return preferBitRate(sdp, params.videoSendBitrate, 'video');
}

function maybeSetVideoReceiveBitRate(sdp, params) {
  if (!params.videoRecvBitrate) {
    return sdp;
  }

  _logger["default"].debug('Prefer video receive bitrate: ' + params.videoRecvBitrate);

  return preferBitRate(sdp, params.videoRecvBitrate, 'video');
} // Add a b=AS:bitrate line to the m=mediaType section.


function preferBitRate(sdp, bitrate, mediaType) {
  var sdpLines = sdp.split('\r\n'); // Find m line for the given mediaType.

  var mLineIndex = findLine(sdpLines, 'm=', mediaType);

  if (mLineIndex === null) {
    _logger["default"].debug('Failed to add bandwidth line to sdp, as no m-line found');

    return sdp;
  } // Find next m-line if any.


  var nextMLineIndex = findLineInRange(sdpLines, mLineIndex + 1, -1, 'm=');

  if (nextMLineIndex === null) {
    nextMLineIndex = sdpLines.length;
  } // Find c-line corresponding to the m-line.


  var cLineIndex = findLineInRange(sdpLines, mLineIndex + 1, nextMLineIndex, 'c=');

  if (cLineIndex === null) {
    _logger["default"].debug('Failed to add bandwidth line to sdp, as no c-line found');

    return sdp;
  } // Check if bandwidth line already exists between c-line and next m-line.


  var bLineIndex = findLineInRange(sdpLines, cLineIndex + 1, nextMLineIndex, 'b=AS');

  if (bLineIndex) {
    sdpLines.splice(bLineIndex, 1);
  } // Create the b (bandwidth) sdp line.


  var bwLine = 'b=AS:' + bitrate; // As per RFC 4566, the b line should follow after c-line.

  sdpLines.splice(cLineIndex + 1, 0, bwLine);
  sdp = sdpLines.join('\r\n');
  return sdp;
} // Add an a=fmtp: x-google-min-bitrate=kbps line, if videoSendInitialBitrate
// is specified. We'll also add a x-google-min-bitrate value, since the max
// must be >= the min.


function maybeSetVideoSendInitialBitRate(sdp, params) {
  var initialBitrate = parseInt(params.videoSendInitialBitrate);

  if (!initialBitrate) {
    return sdp;
  } // Validate the initial bitrate value.


  var maxBitrate = parseInt(initialBitrate);
  var bitrate = parseInt(params.videoSendBitrate);

  if (bitrate) {
    if (initialBitrate > bitrate) {
      _logger["default"].debug('Clamping initial bitrate to max bitrate of ' + bitrate + ' kbps.');

      initialBitrate = bitrate;
      params.videoSendInitialBitrate = initialBitrate;
    }

    maxBitrate = bitrate;
  }

  var sdpLines = sdp.split('\r\n'); // Search for m line.

  var mLineIndex = findLine(sdpLines, 'm=', 'video');

  if (mLineIndex === null) {
    _logger["default"].debug('Failed to find video m-line');

    return sdp;
  } // Figure out the first codec payload type on the m=video SDP line.


  var videoMLine = sdpLines[mLineIndex];
  var pattern = new RegExp('m=video\\s\\d+\\s[A-Z/]+\\s');
  var sendPayloadType = videoMLine.split(pattern)[1].split(' ')[0];
  var fmtpLine = sdpLines[findLine(sdpLines, 'a=rtpmap', sendPayloadType)];
  var codecName = fmtpLine.split('a=rtpmap:' + sendPayloadType)[1].split('/')[0]; // Use codec from params if specified via URL param, otherwise use from SDP.

  var codec = params.videoSendCodec || codecName;
  sdp = setCodecParam(sdp, codec, 'x-google-min-bitrate', params.videoSendInitialBitrate.toString());
  sdp = setCodecParam(sdp, codec, 'x-google-max-bitrate', maxBitrate.toString());
  return sdp;
}

function removePayloadTypeFromMline(mLine, payloadType) {
  mLine = mLine.split(' ');

  for (var i = 0; i < mLine.length; ++i) {
    if (mLine[i] === payloadType.toString()) {
      mLine.splice(i, 1);
    }
  }

  return mLine.join(' ');
}

function removeCodecByName(sdpLines, codec) {
  var index = findLine(sdpLines, 'a=rtpmap', codec);

  if (index === null) {
    return sdpLines;
  }

  var payloadType = getCodecPayloadTypeFromLine(sdpLines[index]);
  sdpLines.splice(index, 1); // Search for the video m= line and remove the codec.

  var mLineIndex = findLine(sdpLines, 'm=', 'video');

  if (mLineIndex === null) {
    return sdpLines;
  }

  sdpLines[mLineIndex] = removePayloadTypeFromMline(sdpLines[mLineIndex], payloadType);
  return sdpLines;
}

function removeCodecByPayloadType(sdpLines, payloadType) {
  var index = findLine(sdpLines, 'a=rtpmap', payloadType.toString());

  if (index === null) {
    return sdpLines;
  }

  sdpLines.splice(index, 1); // Search for the video m= line and remove the codec.

  var mLineIndex = findLine(sdpLines, 'm=', 'video');

  if (mLineIndex === null) {
    return sdpLines;
  }

  sdpLines[mLineIndex] = removePayloadTypeFromMline(sdpLines[mLineIndex], payloadType);
  return sdpLines;
}

function maybeRemoveVideoFec(sdp, params) {
  if (params.videoFec !== 'false') {
    return sdp;
  }

  var sdpLines = sdp.split('\r\n');
  var index = findLine(sdpLines, 'a=rtpmap', 'red');

  if (index === null) {
    return sdp;
  }

  var redPayloadType = getCodecPayloadTypeFromLine(sdpLines[index]);
  sdpLines = removeCodecByPayloadType(sdpLines, redPayloadType);
  sdpLines = removeCodecByName(sdpLines, 'ulpfec'); // Remove fmtp lines associated with red codec.

  index = findLine(sdpLines, 'a=fmtp', redPayloadType.toString());

  if (index === null) {
    return sdp;
  }

  var fmtpLine = parseFmtpLine(sdpLines[index]);
  var rtxPayloadType = fmtpLine.pt;

  if (rtxPayloadType === null) {
    return sdp;
  }

  sdpLines.splice(index, 1);
  sdpLines = removeCodecByPayloadType(sdpLines, rtxPayloadType);
  return sdpLines.join('\r\n');
} // Promotes |audioSendCodec| to be the first in the m=audio line, if set.


function maybePreferAudioSendCodec(sdp, params) {
  return maybePreferCodec(sdp, 'audio', 'send', params.audioSendCodec);
} // Promotes |audioRecvCodec| to be the first in the m=audio line, if set.


function maybePreferAudioReceiveCodec(sdp, params) {
  return maybePreferCodec(sdp, 'audio', 'receive', params.audioRecvCodec);
} // Promotes |videoSendCodec| to be the first in the m=audio line, if set.


function maybePreferVideoSendCodec(sdp, params) {
  return maybePreferCodec(sdp, 'video', 'send', params.videoSendCodec);
} // Promotes |videoRecvCodec| to be the first in the m=audio line, if set.


function maybePreferVideoReceiveCodec(sdp, params) {
  return maybePreferCodec(sdp, 'video', 'receive', params.videoRecvCodec);
} // Sets |codec| as the default |type| codec if it's present.
// The format of |codec| is 'NAME/RATE', e.g. 'opus/48000'.


function maybePreferCodec(sdp, type, dir, codec) {
  var str = type + ' ' + dir + ' codec';

  if (!codec) {
    _logger["default"].debug('No preference on ' + str + '.');

    return sdp;
  }

  _logger["default"].debug('Prefer ' + str + ': ' + codec);

  var sdpLines = sdp.split('\r\n'); // Search for m line.

  var mLineIndex = findLine(sdpLines, 'm=', type);

  if (mLineIndex === null) {
    return sdp;
  } // If the codec is available, set it as the default in m line.


  var payload = null;

  for (var i = 0; i < sdpLines.length; i++) {
    var index = findLineInRange(sdpLines, i, -1, 'a=rtpmap', codec);

    if (index !== null) {
      payload = getCodecPayloadTypeFromLine(sdpLines[index]);

      if (payload) {
        sdpLines[mLineIndex] = setDefaultCodec(sdpLines[mLineIndex], payload);
      }
    }
  }

  sdp = sdpLines.join('\r\n');
  return sdp;
} // Set fmtp param to specific codec in SDP. If param does not exists, add it.


function setCodecParam(sdp, codec, param, value, mid) {
  var sdpLines = sdp.split('\r\n');
  var headLines = null;
  var tailLines = null;

  if (typeof mid === 'string') {
    var midRange = findMLineRangeWithMID(sdpLines, mid);

    if (midRange) {
      var start = midRange.start,
          end = midRange.end;
      headLines = sdpLines.slice(0, start);
      tailLines = sdpLines.slice(end);
      sdpLines = sdpLines.slice(start, end);
    }
  } // SDPs sent from MCU use \n as line break.


  if (sdpLines.length <= 1) {
    sdpLines = sdp.split('\n');
  }

  var fmtpLineIndex = findFmtpLine(sdpLines, codec);
  var fmtpObj = {};

  if (fmtpLineIndex === null) {
    var index = findLine(sdpLines, 'a=rtpmap', codec);

    if (index === null) {
      return sdp;
    }

    var payload = getCodecPayloadTypeFromLine(sdpLines[index]);
    fmtpObj.pt = payload.toString();
    fmtpObj.params = {};
    fmtpObj.params[param] = value;
    sdpLines.splice(index + 1, 0, writeFmtpLine(fmtpObj));
  } else {
    fmtpObj = parseFmtpLine(sdpLines[fmtpLineIndex]);
    fmtpObj.params[param] = value;
    sdpLines[fmtpLineIndex] = writeFmtpLine(fmtpObj);
  }

  if (headLines) {
    sdpLines = headLines.concat(sdpLines).concat(tailLines);
  }

  sdp = sdpLines.join('\r\n');
  return sdp;
} // Remove fmtp param if it exists.


function removeCodecParam(sdp, codec, param) {
  var sdpLines = sdp.split('\r\n');
  var fmtpLineIndex = findFmtpLine(sdpLines, codec);

  if (fmtpLineIndex === null) {
    return sdp;
  }

  var map = parseFmtpLine(sdpLines[fmtpLineIndex]);
  delete map.params[param];
  var newLine = writeFmtpLine(map);

  if (newLine === null) {
    sdpLines.splice(fmtpLineIndex, 1);
  } else {
    sdpLines[fmtpLineIndex] = newLine;
  }

  sdp = sdpLines.join('\r\n');
  return sdp;
} // Split an fmtp line into an object including 'pt' and 'params'.


function parseFmtpLine(fmtpLine) {
  var fmtpObj = {};
  var spacePos = fmtpLine.indexOf(' ');
  var keyValues = fmtpLine.substring(spacePos + 1).split(';');
  var pattern = new RegExp('a=fmtp:(\\d+)');
  var result = fmtpLine.match(pattern);

  if (result && result.length === 2) {
    fmtpObj.pt = result[1];
  } else {
    return null;
  }

  var params = {};

  for (var i = 0; i < keyValues.length; ++i) {
    var pair = keyValues[i].split('=');

    if (pair.length === 2) {
      params[pair[0]] = pair[1];
    }
  }

  fmtpObj.params = params;
  return fmtpObj;
} // Generate an fmtp line from an object including 'pt' and 'params'.


function writeFmtpLine(fmtpObj) {
  if (!fmtpObj.hasOwnProperty('pt') || !fmtpObj.hasOwnProperty('params')) {
    return null;
  }

  var pt = fmtpObj.pt;
  var params = fmtpObj.params;
  var keyValues = [];
  var i = 0;

  for (var key in params) {
    keyValues[i] = key + '=' + params[key];
    ++i;
  }

  if (i === 0) {
    return null;
  }

  return 'a=fmtp:' + pt.toString() + ' ' + keyValues.join(';');
} // Find fmtp attribute for |codec| in |sdpLines|.


function findFmtpLine(sdpLines, codec) {
  // Find payload of codec.
  var payload = getCodecPayloadType(sdpLines, codec); // Find the payload in fmtp line.

  return payload ? findLine(sdpLines, 'a=fmtp:' + payload.toString()) : null;
} // Find the line in sdpLines that starts with |prefix|, and, if specified,
// contains |substr| (case-insensitive search).


function findLine(sdpLines, prefix, substr) {
  return findLineInRange(sdpLines, 0, -1, prefix, substr);
} // Find the line in sdpLines[startLine...endLine - 1] that starts with |prefix|
// and, if specified, contains |substr| (case-insensitive search).


function findLineInRange(sdpLines, startLine, endLine, prefix, substr) {
  var realEndLine = endLine !== -1 ? endLine : sdpLines.length;

  for (var i = startLine; i < realEndLine; ++i) {
    if (sdpLines[i].indexOf(prefix) === 0) {
      if (!substr || sdpLines[i].toLowerCase().indexOf(substr.toLowerCase()) !== -1) {
        return i;
      }
    }
  }

  return null;
} // Gets the codec payload type from sdp lines.


function getCodecPayloadType(sdpLines, codec) {
  var index = findLine(sdpLines, 'a=rtpmap', codec);
  return index ? getCodecPayloadTypeFromLine(sdpLines[index]) : null;
} // Gets the codec payload type from an a=rtpmap:X line.


function getCodecPayloadTypeFromLine(sdpLine) {
  var pattern = new RegExp('a=rtpmap:(\\d+) [a-zA-Z0-9-]+\\/\\d+');
  var result = sdpLine.match(pattern);
  return result && result.length === 2 ? result[1] : null;
} // Returns a new m= line with the specified codec as the first one.


function setDefaultCodec(mLine, payload) {
  var elements = mLine.split(' '); // Just copy the first three parameters; codec order starts on fourth.

  var newLine = elements.slice(0, 3); // Put target payload first and copy in the rest.

  newLine.push(payload);

  for (var i = 3; i < elements.length; i++) {
    if (elements[i] !== payload) {
      newLine.push(elements[i]);
    }
  }

  return newLine.join(' ');
}
/* Below are newly added functions */
// Following codecs will not be removed from SDP event they are not in the
// user-specified codec list.


var audioCodecAllowList = ['CN', 'telephone-event'];
var videoCodecAllowList = ['red', 'ulpfec', 'flexfec']; // Returns a new m= line with the specified codec order.

function setCodecOrder(mLine, payloads) {
  var elements = mLine.split(' '); // Just copy the first three parameters; codec order starts on fourth.

  var newLine = elements.slice(0, 3); // Concat payload types.

  newLine = newLine.concat(payloads);
  return newLine.join(' ');
} // Append RTX payloads for existing payloads.


function appendRtxPayloads(sdpLines, payloads) {
  var _iterator = _createForOfIteratorHelper(payloads),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var payload = _step.value;
      var index = findLine(sdpLines, 'a=fmtp', 'apt=' + payload);

      if (index !== null) {
        var fmtpLine = parseFmtpLine(sdpLines[index]);
        payloads.push(fmtpLine.pt);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return payloads;
} // Remove a codec with all its associated a lines.


function removeCodecFramALine(sdpLines, payload) {
  var pattern = new RegExp('a=(rtpmap|rtcp-fb|fmtp):' + payload + '\\s');

  for (var i = sdpLines.length - 1; i > 0; i--) {
    if (sdpLines[i].match(pattern)) {
      sdpLines.splice(i, 1);
    }
  }

  return sdpLines;
} // Find m-line and next m-line with give mid, return { start, end }.


function findMLineRangeWithMID(sdpLines, mid) {
  var midLine = 'a=mid:' + mid;
  var midIndex = findLine(sdpLines, midLine); // Compare the whole line since findLine only compares prefix

  while (midIndex >= 0 && sdpLines[midIndex] !== midLine) {
    midIndex = findLineInRange(sdpLines, midIndex, -1, midLine);
  }

  if (midIndex >= 0) {
    // Found matched a=mid line
    var nextMLineIndex = findLineInRange(sdpLines, midIndex, -1, 'm=') || -1;
    var mLineIndex = -1;

    for (var i = midIndex; i >= 0; i--) {
      if (sdpLines[i].indexOf('m=') >= 0) {
        mLineIndex = i;
        break;
      }
    }

    if (mLineIndex >= 0) {
      return {
        start: mLineIndex,
        end: nextMLineIndex
      };
    }
  }

  return null;
} // Reorder codecs in m-line according the order of |codecs|. Remove codecs from
// m-line if it is not present in |codecs|
// Applied on specific m-line if mid is presented
// The format of |codec| is 'NAME/RATE', e.g. 'opus/48000'.


function reorderCodecs(sdp, type, codecs, mid) {
  if (!codecs || codecs.length === 0) {
    return sdp;
  }

  codecs = type === 'audio' ? codecs.concat(audioCodecAllowList) : codecs.concat(videoCodecAllowList);
  var sdpLines = sdp.split('\r\n');
  var headLines = null;
  var tailLines = null;

  if (typeof mid === 'string') {
    var midRange = findMLineRangeWithMID(sdpLines, mid);

    if (midRange) {
      var start = midRange.start,
          end = midRange.end;
      headLines = sdpLines.slice(0, start);
      tailLines = sdpLines.slice(end);
      sdpLines = sdpLines.slice(start, end);
    }
  } // Search for m line.


  var mLineIndex = findLine(sdpLines, 'm=', type);

  if (mLineIndex === null) {
    return sdp;
  }

  var originPayloads = sdpLines[mLineIndex].split(' ');
  originPayloads.splice(0, 3); // If the codec is available, set it as the default in m line.

  var payloads = [];

  var _iterator2 = _createForOfIteratorHelper(codecs),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var codec = _step2.value;

      for (var i = 0; i < sdpLines.length; i++) {
        var index = findLineInRange(sdpLines, i, -1, 'a=rtpmap', codec);

        if (index !== null) {
          var payload = getCodecPayloadTypeFromLine(sdpLines[index]);

          if (payload) {
            payloads.push(payload);
            i = index;
          }
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  payloads = appendRtxPayloads(sdpLines, payloads);
  sdpLines[mLineIndex] = setCodecOrder(sdpLines[mLineIndex], payloads); // Remove a lines.

  var _iterator3 = _createForOfIteratorHelper(originPayloads),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _payload = _step3.value;

      if (payloads.indexOf(_payload) === -1) {
        sdpLines = removeCodecFramALine(sdpLines, _payload);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  if (headLines) {
    sdpLines = headLines.concat(sdpLines).concat(tailLines);
  }

  sdp = sdpLines.join('\r\n');
  return sdp;
} // Add legacy simulcast.


function addLegacySimulcast(sdp, type, numStreams, mid) {
  var _sdpLines, _sdpLines2;

  if (!numStreams || !(numStreams > 1)) {
    return sdp;
  }

  var sdpLines = sdp.split('\r\n');
  var headLines = null;
  var tailLines = null;

  if (typeof mid === 'string') {
    var midRange = findMLineRangeWithMID(sdpLines, mid);

    if (midRange) {
      var start = midRange.start,
          end = midRange.end;
      headLines = sdpLines.slice(0, start);
      tailLines = sdpLines.slice(end);
      sdpLines = sdpLines.slice(start, end);
    }
  } // Search for m line.


  var mLineStart = findLine(sdpLines, 'm=', type);

  if (mLineStart === null) {
    return sdp;
  }

  var mLineEnd = findLineInRange(sdpLines, mLineStart + 1, -1, 'm=');

  if (mLineEnd === null) {
    mLineEnd = sdpLines.length;
  }

  var ssrcGetter = function ssrcGetter(line) {
    var parts = line.split(' ');
    var ssrc = parts[0].split(':')[1];
    return ssrc;
  }; // Process ssrc lines from mLineIndex.


  var removes = new Set();
  var ssrcs = new Set();
  var gssrcs = new Set();
  var simLines = [];
  var simGroupLines = [];
  var i = mLineStart + 1;

  while (i < mLineEnd) {
    var line = sdpLines[i];

    if (line === '') {
      break;
    }

    if (line.indexOf('a=ssrc:') > -1) {
      var ssrc = ssrcGetter(sdpLines[i]);
      ssrcs.add(ssrc);

      if (line.indexOf('cname') > -1 || line.indexOf('msid') > -1) {
        for (var j = 1; j < numStreams; j++) {
          var nssrc = parseInt(ssrc) + j + '';
          simLines.push(line.replace(ssrc, nssrc));
        }
      } else {
        removes.add(line);
      }
    }

    if (line.indexOf('a=ssrc-group:FID') > -1) {
      var parts = line.split(' ');
      gssrcs.add(parts[2]);

      for (var _j = 1; _j < numStreams; _j++) {
        var nssrc1 = parseInt(parts[1]) + _j + '';
        var nssrc2 = parseInt(parts[2]) + _j + '';
        simGroupLines.push(line.replace(parts[1], nssrc1).replace(parts[2], nssrc2));
      }
    }

    i++;
  }

  var insertPos = i;
  ssrcs.forEach(function (ssrc) {
    if (!gssrcs.has(ssrc)) {
      var groupLine = 'a=ssrc-group:SIM';
      groupLine = groupLine + ' ' + ssrc;

      for (var _j2 = 1; _j2 < numStreams; _j2++) {
        groupLine = groupLine + ' ' + (parseInt(ssrc) + _j2);
      }

      simGroupLines.push(groupLine);
    }
  });
  simLines.sort(); // Insert simulcast ssrc lines.

  (_sdpLines = sdpLines).splice.apply(_sdpLines, [insertPos, 0].concat(simGroupLines));

  (_sdpLines2 = sdpLines).splice.apply(_sdpLines2, [insertPos, 0].concat(simLines));

  sdpLines = sdpLines.filter(function (line) {
    return !removes.has(line);
  });

  if (headLines) {
    sdpLines = headLines.concat(sdpLines).concat(tailLines);
  }

  sdp = sdpLines.join('\r\n');
  return sdp;
}

function setMaxBitrate(sdp, encodingParametersList, mid) {
  var _iterator4 = _createForOfIteratorHelper(encodingParametersList),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var encodingParameters = _step4.value;

      if (encodingParameters.maxBitrate) {
        sdp = setCodecParam(sdp, encodingParameters.codec.name, 'x-google-max-bitrate', encodingParameters.maxBitrate.toString(), mid);
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return sdp;
}

},{"./logger.js":27,"@babel/runtime/helpers/interopRequireDefault":10}],32:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* global WebTransportBidirectionalStream */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreamSourceInfo = exports.StreamEvent = exports.Stream = exports.RemoteStream = exports.LocalStream = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Utils = _interopRequireWildcard(require("./utils.js"));

var _event = require("./event.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// eslint-disable-next-line require-jsdoc
function isAllowedValue(obj, allowedValues) {
  return allowedValues.some(function (ele) {
    return ele === obj;
  });
}
/**
 * @class StreamSourceInfo
 * @memberOf Owt.Base
 * @classDesc Information of a stream's source.
 * @constructor
 * @description Audio source info or video source info could be undefined if
 * a stream does not have audio/video track.
 * @param {?string} audioSourceInfo Audio source info. Accepted values are:
 * "mic", "screen-cast", "file", "mixed" or undefined.
 * @param {?string} videoSourceInfo Video source info. Accepted values are:
 * "camera", "screen-cast", "file", "mixed" or undefined.
 * @param {boolean} dataSourceInfo Indicates whether it is data. Accepted values
 * are boolean.
 */


var StreamSourceInfo = // eslint-disable-next-line require-jsdoc
function StreamSourceInfo(audioSourceInfo, videoSourceInfo, dataSourceInfo) {
  (0, _classCallCheck2["default"])(this, StreamSourceInfo);

  if (!isAllowedValue(audioSourceInfo, [undefined, 'mic', 'screen-cast', 'file', 'mixed'])) {
    throw new TypeError('Incorrect value for audioSourceInfo');
  }

  if (!isAllowedValue(videoSourceInfo, [undefined, 'camera', 'screen-cast', 'file', 'encoded-file', 'raw-file', 'mixed'])) {
    throw new TypeError('Incorrect value for videoSourceInfo');
  }

  this.audio = audioSourceInfo;
  this.video = videoSourceInfo;
  this.data = dataSourceInfo;
};
/**
 * @class Stream
 * @memberOf Owt.Base
 * @classDesc Base class of streams.
 * @extends Owt.Base.EventDispatcher
 * @hideconstructor
 */


exports.StreamSourceInfo = StreamSourceInfo;

var Stream = /*#__PURE__*/function (_EventDispatcher) {
  (0, _inherits2["default"])(Stream, _EventDispatcher);

  var _super = _createSuper(Stream);

  // eslint-disable-next-line require-jsdoc
  function Stream(stream, sourceInfo, attributes) {
    var _this;

    (0, _classCallCheck2["default"])(this, Stream);
    _this = _super.call(this);

    if (stream && !(stream instanceof MediaStream) && !(typeof WebTransportBidirectionalStream === 'function' && stream instanceof WebTransportBidirectionalStream) || (0, _typeof2["default"])(sourceInfo) !== 'object') {
      throw new TypeError('Invalid stream or sourceInfo.');
    }

    if (stream && stream instanceof MediaStream && (stream.getAudioTracks().length > 0 && !sourceInfo.audio || stream.getVideoTracks().length > 0 && !sourceInfo.video)) {
      throw new TypeError('Missing audio source info or video source info.');
    }
    /**
     * @member {?MediaStream} mediaStream
     * @instance
     * @memberof Owt.Base.Stream
     * @see {@link https://www.w3.org/TR/mediacapture-streams/#mediastream|MediaStream API of Media Capture and Streams}.
     * @desc This property is deprecated, please use stream instead.
     */


    if (stream instanceof MediaStream) {
      Object.defineProperty((0, _assertThisInitialized2["default"])(_this), 'mediaStream', {
        configurable: false,
        writable: true,
        value: stream
      });
    }
    /**
     * @member {MediaStream | WebTransportBidirectionalStream | undefined} stream
     * @instance
     * @memberof Owt.Base.Stream
     * @see {@link https://www.w3.org/TR/mediacapture-streams/#mediastream|MediaStream API of Media Capture and Streams}
     * @see {@link https://wicg.github.io/web-transport/ WebTransport}.
     */


    Object.defineProperty((0, _assertThisInitialized2["default"])(_this), 'stream', {
      configurable: false,
      writable: true,
      value: stream
    });
    /**
     * @member {Owt.Base.StreamSourceInfo} source
     * @instance
     * @memberof Owt.Base.Stream
     * @desc Source info of a stream.
     */

    Object.defineProperty((0, _assertThisInitialized2["default"])(_this), 'source', {
      configurable: false,
      writable: false,
      value: sourceInfo
    });
    /**
     * @member {object} attributes
     * @instance
     * @memberof Owt.Base.Stream
     * @desc Custom attributes of a stream.
     */

    Object.defineProperty((0, _assertThisInitialized2["default"])(_this), 'attributes', {
      configurable: true,
      writable: false,
      value: attributes
    });
    return _this;
  }

  return Stream;
}(_event.EventDispatcher);
/**
 * @class LocalStream
 * @classDesc Stream captured from current endpoint.
 * @memberOf Owt.Base
 * @extends Owt.Base.Stream
 * @constructor
 * @param {MediaStream} stream Underlying MediaStream.
 * @param {Owt.Base.StreamSourceInfo} sourceInfo Information about stream's
 * source.
 * @param {object} attributes Custom attributes of the stream.
 */


exports.Stream = Stream;

var LocalStream = /*#__PURE__*/function (_Stream) {
  (0, _inherits2["default"])(LocalStream, _Stream);

  var _super2 = _createSuper(LocalStream);

  // eslint-disable-next-line require-jsdoc
  function LocalStream(stream, sourceInfo, attributes) {
    var _this2;

    (0, _classCallCheck2["default"])(this, LocalStream);

    if (!stream) {
      throw new TypeError('Stream cannot be null.');
    }

    _this2 = _super2.call(this, stream, sourceInfo, attributes);
    /**
     * @member {string} id
     * @instance
     * @memberof Owt.Base.LocalStream
     */

    Object.defineProperty((0, _assertThisInitialized2["default"])(_this2), 'id', {
      configurable: false,
      writable: false,
      value: Utils.createUuid()
    });
    return _this2;
  }

  return LocalStream;
}(Stream);
/**
 * @class RemoteStream
 * @classDesc Stream sent from a remote endpoint. In conference mode,
 * RemoteStream's stream is always undefined. Please get MediaStream or
 * ReadableStream from subscription's stream property.
 * Events:
 *
 * | Event Name      | Argument Type    | Fired when         |
 * | ----------------| ---------------- | ------------------ |
 * | ended           | Event            | Stream is no longer available on server side.   |
 * | updated         | Event            | Stream is updated. |
 *
 * @memberOf Owt.Base
 * @extends Owt.Base.Stream
 * @hideconstructor
 */


exports.LocalStream = LocalStream;

var RemoteStream = /*#__PURE__*/function (_Stream2) {
  (0, _inherits2["default"])(RemoteStream, _Stream2);

  var _super3 = _createSuper(RemoteStream);

  // eslint-disable-next-line require-jsdoc
  function RemoteStream(id, origin, stream, sourceInfo, attributes) {
    var _this3;

    (0, _classCallCheck2["default"])(this, RemoteStream);
    _this3 = _super3.call(this, stream, sourceInfo, attributes);
    /**
     * @member {string} id
     * @instance
     * @memberof Owt.Base.RemoteStream
     */

    Object.defineProperty((0, _assertThisInitialized2["default"])(_this3), 'id', {
      configurable: false,
      writable: false,
      value: id ? id : Utils.createUuid()
    });
    /**
     * @member {string} origin
     * @instance
     * @memberof Owt.Base.RemoteStream
     * @desc ID of the remote endpoint who published this stream.
     */

    Object.defineProperty((0, _assertThisInitialized2["default"])(_this3), 'origin', {
      configurable: false,
      writable: false,
      value: origin
    });
    /**
     * @member {Owt.Base.PublicationSettings} settings
     * @instance
     * @memberof Owt.Base.RemoteStream
     * @desc Original settings for publishing this stream. This property is only
     * valid in conference mode.
     */

    _this3.settings = undefined;
    /**
     * @member {Owt.Conference.SubscriptionCapabilities} extraCapabilities
     * @instance
     * @memberof Owt.Base.RemoteStream
     * @desc Extra capabilities remote endpoint provides for subscription. Extra
     * capabilities don't include original settings. This property is only valid
     * in conference mode.
     */

    _this3.extraCapabilities = undefined;
    return _this3;
  }

  return RemoteStream;
}(Stream);
/**
 * @class StreamEvent
 * @classDesc Event for Stream.
 * @extends Owt.Base.OwtEvent
 * @memberof Owt.Base
 * @hideconstructor
 */


exports.RemoteStream = RemoteStream;

var StreamEvent = /*#__PURE__*/function (_OwtEvent) {
  (0, _inherits2["default"])(StreamEvent, _OwtEvent);

  var _super4 = _createSuper(StreamEvent);

  // eslint-disable-next-line require-jsdoc
  function StreamEvent(type, init) {
    var _this4;

    (0, _classCallCheck2["default"])(this, StreamEvent);
    _this4 = _super4.call(this, type);
    /**
     * @member {Owt.Base.Stream} stream
     * @instance
     * @memberof Owt.Base.StreamEvent
     */

    _this4.stream = init.stream;
    return _this4;
  }

  return StreamEvent;
}(_event.OwtEvent);

exports.StreamEvent = StreamEvent;

},{"./event.js":25,"./utils.js":34,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":15,"@babel/runtime/helpers/typeof":18}],33:[function(require,module,exports){
// Copyright (C) <2020> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';
/**
 * @class TransportType
 * @memberOf Owt.Base
 * @classDesc Transport type enumeration.
 * @hideconstructor
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransportType = exports.TransportSettings = exports.TransportConstraints = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var TransportType = {
  QUIC: 'quic',
  WEBRTC: 'webrtc'
};
/**
 * @class TransportConstraints
 * @memberOf Owt.Base
 * @classDesc Represents the transport constraints for publication and
 * subscription.
 * @hideconstructor
 */

exports.TransportType = TransportType;

var TransportConstraints = // eslint-disable-next-line require-jsdoc
function TransportConstraints(type, id) {
  (0, _classCallCheck2["default"])(this, TransportConstraints);

  /**
   * @member {Array.<Owt.Base.TransportType>} type
   * @instance
   * @memberof Owt.Base.TransportConstraints
   * @desc Transport type for publication and subscription.
   */
  this.type = type;
  /**
   * @member {?string} id
   * @instance
   * @memberof Owt.Base.TransportConstraints
   * @desc Transport ID. Undefined transport ID results server to assign a new
   * one. It should always be undefined if transport type is webrtc since the
   * webrtc agent of OWT server doesn't support multiple transceivers on a
   * single PeerConnection.
   */

  this.id = id;
};
/**
 * @class TransportSettings
 * @memberOf Owt.Base
 * @classDesc Represents the transport settings for publication and
 * subscription.
 * @hideconstructor
 */


exports.TransportConstraints = TransportConstraints;

var TransportSettings = // eslint-disable-next-line require-jsdoc
function TransportSettings(type, id) {
  (0, _classCallCheck2["default"])(this, TransportSettings);

  /**
   * @member {Owt.Base.TransportType} type
   * @instance
   * @memberof Owt.Base.TransportSettings
   * @desc Transport type for publication and subscription.
   */
  this.type = type;
  /**
   * @member {string} id
   * @instance
   * @memberof Owt.Base.TransportSettings
   * @desc Transport ID.
   */

  this.id = id;
  /**
   * @member {?Array.<RTCRtpTransceiver>} rtpTransceivers
   * @instance
   * @memberof Owt.Base.TransportSettings
   * @desc A list of RTCRtpTransceiver associated with the publication or
   * subscription. It's only available in conference mode when TransportType
   * is webrtc.
   * @see {@link https://w3c.github.io/webrtc-pc/#rtcrtptransceiver-interface|RTCRtpTransceiver Interface of WebRTC 1.0}.
   */

  this.rtpTransceivers = undefined;
};

exports.TransportSettings = TransportSettings;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":10}],34:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* global navigator, window */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUuid = createUuid;
exports.isChrome = isChrome;
exports.isEdge = isEdge;
exports.isFirefox = isFirefox;
exports.isSafari = isSafari;
exports.sysInfo = sysInfo;
var sdkVersion = '5.0'; // eslint-disable-next-line require-jsdoc

function isFirefox() {
  return window.navigator.userAgent.match('Firefox') !== null;
} // eslint-disable-next-line require-jsdoc


function isChrome() {
  return window.navigator.userAgent.match('Chrome') !== null;
} // eslint-disable-next-line require-jsdoc


function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
} // eslint-disable-next-line require-jsdoc


function isEdge() {
  return window.navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) !== null;
} // eslint-disable-next-line require-jsdoc


function createUuid() {
  return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
} // Returns system information.
// Format: {sdk:{version:**, type:**}, runtime:{version:**, name:**}, os:{version:**, name:**}};
// eslint-disable-next-line require-jsdoc


function sysInfo() {
  var info = Object.create({});
  info.sdk = {
    version: sdkVersion,
    type: 'JavaScript'
  }; // Runtime info.

  var userAgent = navigator.userAgent;
  var firefoxRegex = /Firefox\/([0-9.]+)/;
  var chromeRegex = /Chrome\/([0-9.]+)/;
  var edgeRegex = /Edge\/([0-9.]+)/;
  var safariVersionRegex = /Version\/([0-9.]+) Safari/;
  var result = chromeRegex.exec(userAgent);

  if (result) {
    info.runtime = {
      name: 'Chrome',
      version: result[1]
    };
  } else if (result = firefoxRegex.exec(userAgent)) {
    info.runtime = {
      name: 'Firefox',
      version: result[1]
    };
  } else if (result = edgeRegex.exec(userAgent)) {
    info.runtime = {
      name: 'Edge',
      version: result[1]
    };
  } else if (isSafari()) {
    result = safariVersionRegex.exec(userAgent);
    info.runtime = {
      name: 'Safari'
    };
    info.runtime.version = result ? result[1] : 'Unknown';
  } else {
    info.runtime = {
      name: 'Unknown',
      version: 'Unknown'
    };
  } // OS info.


  var windowsRegex = /Windows NT ([0-9.]+)/;
  var macRegex = /Intel Mac OS X ([0-9_.]+)/;
  var iPhoneRegex = /iPhone OS ([0-9_.]+)/;
  var linuxRegex = /X11; Linux/;
  var androidRegex = /Android( ([0-9.]+))?/;
  var chromiumOsRegex = /CrOS/;

  if (result = windowsRegex.exec(userAgent)) {
    info.os = {
      name: 'Windows NT',
      version: result[1]
    };
  } else if (result = macRegex.exec(userAgent)) {
    info.os = {
      name: 'Mac OS X',
      version: result[1].replace(/_/g, '.')
    };
  } else if (result = iPhoneRegex.exec(userAgent)) {
    info.os = {
      name: 'iPhone OS',
      version: result[1].replace(/_/g, '.')
    };
  } else if (result = linuxRegex.exec(userAgent)) {
    info.os = {
      name: 'Linux',
      version: 'Unknown'
    };
  } else if (result = androidRegex.exec(userAgent)) {
    info.os = {
      name: 'Android',
      version: result[1] || 'Unknown'
    };
  } else if (result = chromiumOsRegex.exec(userAgent)) {
    info.os = {
      name: 'Chrome OS',
      version: 'Unknown'
    };
  } else {
    info.os = {
      name: 'Unknown',
      version: 'Unknown'
    };
  }

  info.capabilities = {
    continualIceGathering: false,
    streamRemovable: info.runtime.name !== 'Firefox',
    ignoreDataChannelAcks: true
  };
  return info;
}

},{}],35:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable require-jsdoc */

/* global Map, Promise, setTimeout */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConferencePeerConnectionChannel = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _logger = _interopRequireDefault(require("../base/logger.js"));

var _event = require("../base/event.js");

var _mediaformat = require("../base/mediaformat.js");

var _publication = require("../base/publication.js");

var _subscription = require("./subscription.js");

var _error = require("./error.js");

var Utils = _interopRequireWildcard(require("../base/utils.js"));

var SdpUtils = _interopRequireWildcard(require("../base/sdputils.js"));

var _transport = require("../base/transport.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class ConferencePeerConnectionChannel
 * @classDesc A channel for a connection between client and conference server.
 * Currently, only one stream could be tranmitted in a channel.
 * @hideconstructor
 * @private
 */
var ConferencePeerConnectionChannel = /*#__PURE__*/function (_EventDispatcher) {
  (0, _inherits2["default"])(ConferencePeerConnectionChannel, _EventDispatcher);

  var _super = _createSuper(ConferencePeerConnectionChannel);

  // eslint-disable-next-line require-jsdoc
  function ConferencePeerConnectionChannel(config, signaling) {
    var _this;

    (0, _classCallCheck2["default"])(this, ConferencePeerConnectionChannel);
    _this = _super.call(this);
    _this.pc = null;
    _this._config = config;
    _this._videoCodecs = undefined;
    _this._options = null;
    _this._videoCodecs = undefined;
    _this._signaling = signaling;
    _this._internalId = null; // It's publication ID or subscription ID.

    _this._pendingCandidates = [];
    _this._subscribePromises = new Map(); // internalId => { resolve, reject }

    _this._publishPromises = new Map(); // internalId => { resolve, reject }

    _this._publications = new Map(); // PublicationId => Publication

    _this._subscriptions = new Map(); // SubscriptionId => Subscription

    _this._publishTransceivers = new Map(); // internalId => { id, transceivers: [Transceiver] }

    _this._subscribeTransceivers = new Map(); // internalId => { id, transceivers: [Transceiver] }

    _this._reverseIdMap = new Map(); // PublicationId || SubscriptionId => internalId
    // Timer for PeerConnection disconnected. Will stop connection after timer.

    _this._disconnectTimer = null;
    _this._ended = false; // Channel ID assigned by conference

    _this._id = undefined; // Used to create internal ID for publication/subscription

    _this._internalCount = 0;
    _this._sdpPromise = Promise.resolve();
    _this._sdpResolverMap = new Map(); // internalId => {finish, resolve, reject}

    _this._sdpResolvers = []; // [{finish, resolve, reject}]

    _this._sdpResolveNum = 0;
    _this._remoteMediaStreams = new Map(); // Key is subscription ID, value is MediaStream.

    return _this;
  }
  /**
   * @function onMessage
   * @desc Received a message from conference portal. Defined in client-server
   * protocol.
   * @param {string} notification Notification type.
   * @param {object} message Message received.
   * @private
   */


  (0, _createClass2["default"])(ConferencePeerConnectionChannel, [{
    key: "onMessage",
    value: function onMessage(notification, message) {
      switch (notification) {
        case 'progress':
          if (message.status === 'soac') {
            this._sdpHandler(message.data);
          } else if (message.status === 'ready') {
            this._readyHandler(message.sessionId);
          } else if (message.status === 'error') {
            this._errorHandler(message.sessionId, message.data);
          }

          break;

        case 'stream':
          this._onStreamEvent(message);

          break;

        default:
          _logger["default"].warning('Unknown notification from MCU.');

      }
    }
  }, {
    key: "publishWithTransceivers",
    value: function () {
      var _publishWithTransceivers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(stream, transceivers) {
        var _this2 = this;

        var _iterator, _step, _loop, _ret;

        return _regenerator["default"].wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iterator = _createForOfIteratorHelper(transceivers);
                _context2.prev = 1;
                _loop = /*#__PURE__*/_regenerator["default"].mark(function _loop() {
                  var t, transceiverDescription, internalId, offer, trackOptions, publicationId;
                  return _regenerator["default"].wrap(function _loop$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          t = _step.value;

                          if (!(t.direction !== 'sendonly')) {
                            _context.next = 3;
                            break;
                          }

                          return _context.abrupt("return", {
                            v: Promise.reject('RTCRtpTransceiver\'s direction must be sendonly.')
                          });

                        case 3:
                          if (stream.stream.getTracks().includes(t.sender.track)) {
                            _context.next = 5;
                            break;
                          }

                          return _context.abrupt("return", {
                            v: Promise.reject('The track associated with RTCRtpSender is not included in ' + 'stream.')
                          });

                        case 5:
                          if (!(transceivers.length > 2)) {
                            _context.next = 7;
                            break;
                          }

                          return _context.abrupt("return", {
                            v: Promise.reject('At most one transceiver for audio and one transceiver for video ' + 'are accepted.')
                          });

                        case 7:
                          transceiverDescription = transceivers.map(function (t) {
                            var kind = t.sender.track.kind;
                            return {
                              type: kind,
                              transceiver: t,
                              source: stream.source[kind],
                              option: {}
                            };
                          });
                          internalId = _this2._createInternalId();
                          _context.next = 11;
                          return _this2._chainSdpPromise(internalId);

                        case 11:
                          // Copied from publish method.
                          _this2._publishTransceivers.set(internalId, transceiverDescription);

                          _context.next = 14;
                          return _this2.pc.createOffer();

                        case 14:
                          offer = _context.sent;
                          _context.next = 17;
                          return _this2.pc.setLocalDescription(offer);

                        case 17:
                          trackOptions = transceivers.map(function (t) {
                            var kind = t.sender.track.kind;
                            return {
                              type: kind,
                              source: stream.source[kind],
                              mid: t.mid
                            };
                          });
                          _context.next = 20;
                          return _this2._signaling.sendSignalingMessage('publish', {
                            media: {
                              tracks: trackOptions
                            },
                            attributes: stream.attributes,
                            transport: {
                              id: _this2._id,
                              type: 'webrtc'
                            }
                          }).id;

                        case 20:
                          publicationId = _context.sent;
                          _this2._publishTransceivers.get(internalId).id = publicationId;

                          _this2._reverseIdMap.set(publicationId, internalId);

                          _context.next = 25;
                          return _this2._signaling.sendSignalingMessage('soac', {
                            id: _this2._id,
                            signaling: offer
                          });

                        case 25:
                          return _context.abrupt("return", {
                            v: new Promise(function (resolve, reject) {
                              _this2._publishPromises.set(internalId, {
                                resolve: resolve,
                                reject: reject
                              });
                            })
                          });

                        case 26:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _loop);
                });

                _iterator.s();

              case 4:
                if ((_step = _iterator.n()).done) {
                  _context2.next = 11;
                  break;
                }

                return _context2.delegateYield(_loop(), "t0", 6);

              case 6:
                _ret = _context2.t0;

                if (!((0, _typeof2["default"])(_ret) === "object")) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", _ret.v);

              case 9:
                _context2.next = 4;
                break;

              case 11:
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t1 = _context2["catch"](1);

                _iterator.e(_context2.t1);

              case 16:
                _context2.prev = 16;

                _iterator.f();

                return _context2.finish(16);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, null, [[1, 13, 16, 19]]);
      }));

      function publishWithTransceivers(_x, _x2) {
        return _publishWithTransceivers.apply(this, arguments);
      }

      return publishWithTransceivers;
    }()
  }, {
    key: "publish",
    value: function () {
      var _publish = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(stream, options, videoCodecs) {
        var _this3 = this;

        var _iterator2, _step2, parameters, _iterator3, _step3, _parameters, mediaOptions, trackSettings, internalId, offerOptions, transceivers, transceiverInit, transceiver, _parameters2, _transceiverInit, _transceiver, _parameters3, _iterator4, _step4, track, _iterator5, _step5, _track, localDesc;

        return _regenerator["default"].wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this._ended) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", Promise.reject('Connection closed'));

              case 2:
                if (!Array.isArray(options)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", this.publishWithTransceivers(stream, options));

              case 4:
                if (options === undefined) {
                  options = {
                    audio: !!stream.mediaStream.getAudioTracks().length,
                    video: !!stream.mediaStream.getVideoTracks().length
                  };
                }

                if (!((0, _typeof2["default"])(options) !== 'object')) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", Promise.reject(new TypeError('Options should be an object.')));

              case 7:
                if (!(this._isRtpEncodingParameters(options.audio) && this._isOwtEncodingParameters(options.video) || this._isOwtEncodingParameters(options.audio) && this._isRtpEncodingParameters(options.video))) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return", Promise.reject(new _error.ConferenceError('Mixing RTCRtpEncodingParameters and ' + 'AudioEncodingParameters/VideoEncodingParameters is not allowed.')));

              case 9:
                if (options.audio === undefined) {
                  options.audio = !!stream.mediaStream.getAudioTracks().length;
                }

                if (options.video === undefined) {
                  options.video = !!stream.mediaStream.getVideoTracks().length;
                }

                if (!(!!options.audio && !stream.mediaStream.getAudioTracks().length || !!options.video && !stream.mediaStream.getVideoTracks().length)) {
                  _context3.next = 13;
                  break;
                }

                return _context3.abrupt("return", Promise.reject(new _error.ConferenceError('options.audio/video is inconsistent with tracks presented in the ' + 'MediaStream.')));

              case 13:
                if (!((options.audio === false || options.audio === null) && (options.video === false || options.video === null))) {
                  _context3.next = 15;
                  break;
                }

                return _context3.abrupt("return", Promise.reject(new _error.ConferenceError('Cannot publish a stream without audio and video.')));

              case 15:
                if (!((0, _typeof2["default"])(options.audio) === 'object')) {
                  _context3.next = 35;
                  break;
                }

                if (Array.isArray(options.audio)) {
                  _context3.next = 18;
                  break;
                }

                return _context3.abrupt("return", Promise.reject(new TypeError('options.audio should be a boolean or an array.')));

              case 18:
                _iterator2 = _createForOfIteratorHelper(options.audio);
                _context3.prev = 19;

                _iterator2.s();

              case 21:
                if ((_step2 = _iterator2.n()).done) {
                  _context3.next = 27;
                  break;
                }

                parameters = _step2.value;

                if (!(!parameters.codec || typeof parameters.codec.name !== 'string' || parameters.maxBitrate !== undefined && typeof parameters.maxBitrate !== 'number')) {
                  _context3.next = 25;
                  break;
                }

                return _context3.abrupt("return", Promise.reject(new TypeError('options.audio has incorrect parameters.')));

              case 25:
                _context3.next = 21;
                break;

              case 27:
                _context3.next = 32;
                break;

              case 29:
                _context3.prev = 29;
                _context3.t0 = _context3["catch"](19);

                _iterator2.e(_context3.t0);

              case 32:
                _context3.prev = 32;

                _iterator2.f();

                return _context3.finish(32);

              case 35:
                if (!((0, _typeof2["default"])(options.video) === 'object' && !Array.isArray(options.video))) {
                  _context3.next = 37;
                  break;
                }

                return _context3.abrupt("return", Promise.reject(new TypeError('options.video should be a boolean or an array.')));

              case 37:
                if (!this._isOwtEncodingParameters(options.video)) {
                  _context3.next = 55;
                  break;
                }

                _iterator3 = _createForOfIteratorHelper(options.video);
                _context3.prev = 39;

                _iterator3.s();

              case 41:
                if ((_step3 = _iterator3.n()).done) {
                  _context3.next = 47;
                  break;
                }

                _parameters = _step3.value;

                if (!(!_parameters.codec || typeof _parameters.codec.name !== 'string' || _parameters.maxBitrate !== undefined && typeof _parameters.maxBitrate !== 'number' || _parameters.codec.profile !== undefined && typeof _parameters.codec.profile !== 'string')) {
                  _context3.next = 45;
                  break;
                }

                return _context3.abrupt("return", Promise.reject(new TypeError('options.video has incorrect parameters.')));

              case 45:
                _context3.next = 41;
                break;

              case 47:
                _context3.next = 52;
                break;

              case 49:
                _context3.prev = 49;
                _context3.t1 = _context3["catch"](39);

                _iterator3.e(_context3.t1);

              case 52:
                _context3.prev = 52;

                _iterator3.f();

                return _context3.finish(52);

              case 55:
                mediaOptions = {};

                this._createPeerConnection();

                if (!(stream.mediaStream.getAudioTracks().length > 0 && options.audio !== false && options.audio !== null)) {
                  _context3.next = 65;
                  break;
                }

                if (stream.mediaStream.getAudioTracks().length > 1) {
                  _logger["default"].warning('Publishing a stream with multiple audio tracks is not fully' + ' supported.');
                }

                if (!(typeof options.audio !== 'boolean' && (0, _typeof2["default"])(options.audio) !== 'object')) {
                  _context3.next = 61;
                  break;
                }

                return _context3.abrupt("return", Promise.reject(new _error.ConferenceError('Type of audio options should be boolean or an object.')));

              case 61:
                mediaOptions.audio = {};
                mediaOptions.audio.source = stream.source.audio;
                _context3.next = 66;
                break;

              case 65:
                mediaOptions.audio = false;

              case 66:
                if (stream.mediaStream.getVideoTracks().length > 0 && options.video !== false && options.video !== null) {
                  if (stream.mediaStream.getVideoTracks().length > 1) {
                    _logger["default"].warning('Publishing a stream with multiple video tracks is not fully ' + 'supported.');
                  }

                  mediaOptions.video = {};
                  mediaOptions.video.source = stream.source.video;
                  trackSettings = stream.mediaStream.getVideoTracks()[0].getSettings();
                  mediaOptions.video.parameters = {
                    resolution: {
                      width: trackSettings.width,
                      height: trackSettings.height
                    },
                    framerate: trackSettings.frameRate
                  };
                } else {
                  mediaOptions.video = false;
                }

                internalId = this._createInternalId(); // Waiting for previous SDP negotiation if needed

                _context3.next = 70;
                return this._chainSdpPromise(internalId);

              case 70:
                offerOptions = {};
                transceivers = [];

                if (!(typeof this.pc.addTransceiver === 'function')) {
                  _context3.next = 95;
                  break;
                }

                if (!(mediaOptions.audio && stream.mediaStream.getAudioTracks().length > 0)) {
                  _context3.next = 83;
                  break;
                }

                transceiverInit = {
                  direction: 'sendonly',
                  streams: [stream.mediaStream]
                };

                if (this._isRtpEncodingParameters(options.audio)) {
                  transceiverInit.sendEncodings = options.audio;
                }

                transceiver = this.pc.addTransceiver(stream.mediaStream.getAudioTracks()[0], transceiverInit);
                transceivers.push({
                  type: 'audio',
                  transceiver: transceiver,
                  source: mediaOptions.audio.source,
                  option: {
                    audio: options.audio
                  }
                });

                if (!Utils.isFirefox()) {
                  _context3.next = 83;
                  break;
                }

                // Firefox does not support encodings setting in addTransceiver.
                _parameters2 = transceiver.sender.getParameters();
                _parameters2.encodings = transceiverInit.sendEncodings;
                _context3.next = 83;
                return transceiver.sender.setParameters(_parameters2);

              case 83:
                if (!(mediaOptions.video && stream.mediaStream.getVideoTracks().length > 0)) {
                  _context3.next = 93;
                  break;
                }

                _transceiverInit = {
                  direction: 'sendonly',
                  streams: [stream.mediaStream]
                };

                if (this._isRtpEncodingParameters(options.video)) {
                  _transceiverInit.sendEncodings = options.video;
                  this._videoCodecs = videoCodecs;
                }

                _transceiver = this.pc.addTransceiver(stream.mediaStream.getVideoTracks()[0], _transceiverInit);
                transceivers.push({
                  type: 'video',
                  transceiver: _transceiver,
                  source: mediaOptions.video.source,
                  option: {
                    video: options.video
                  }
                });

                if (!Utils.isFirefox()) {
                  _context3.next = 93;
                  break;
                }

                // Firefox does not support encodings setting in addTransceiver.
                _parameters3 = _transceiver.sender.getParameters();
                _parameters3.encodings = _transceiverInit.sendEncodings;
                _context3.next = 93;
                return _transceiver.sender.setParameters(_parameters3);

              case 93:
                _context3.next = 99;
                break;

              case 95:
                // Should not reach here
                if (mediaOptions.audio && stream.mediaStream.getAudioTracks().length > 0) {
                  _iterator4 = _createForOfIteratorHelper(stream.mediaStream.getAudioTracks());

                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                      track = _step4.value;
                      this.pc.addTrack(track, stream.mediaStream);
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                }

                if (mediaOptions.video && stream.mediaStream.getVideoTracks().length > 0) {
                  _iterator5 = _createForOfIteratorHelper(stream.mediaStream.getVideoTracks());

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      _track = _step5.value;
                      this.pc.addTrack(_track, stream.mediaStream);
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                }

                offerOptions.offerToReceiveAudio = false;
                offerOptions.offerToReceiveVideo = false;

              case 99:
                this._publishTransceivers.set(internalId, {
                  transceivers: transceivers
                });

                this.pc.createOffer(offerOptions).then(function (desc) {
                  localDesc = desc;
                  return _this3.pc.setLocalDescription(desc);
                }).then(function () {
                  var trackOptions = [];
                  transceivers.forEach(function (_ref) {
                    var type = _ref.type,
                        transceiver = _ref.transceiver,
                        source = _ref.source;
                    trackOptions.push({
                      type: type,
                      mid: transceiver.mid,
                      source: source
                    });
                  });
                  return _this3._signaling.sendSignalingMessage('publish', {
                    media: {
                      tracks: trackOptions
                    },
                    attributes: stream.attributes,
                    transport: {
                      id: _this3._id,
                      type: 'webrtc'
                    }
                  })["catch"](function (e) {
                    // Send SDP even when failed to get Answer.
                    _this3._signaling.sendSignalingMessage('soac', {
                      id: _this3._id,
                      signaling: localDesc
                    });

                    throw e;
                  });
                }).then(function (data) {
                  var publicationId = data.id;
                  var messageEvent = new _event.MessageEvent('id', {
                    message: publicationId,
                    origin: _this3._remoteId
                  });

                  _this3.dispatchEvent(messageEvent);

                  _this3._publishTransceivers.get(internalId).id = publicationId;

                  _this3._reverseIdMap.set(publicationId, internalId);

                  if (_this3._id && _this3._id !== data.transportId) {
                    _logger["default"].warning('Server returns conflict ID: ' + data.transportId);
                  }

                  _this3._id = data.transportId; // Modify local SDP before sending

                  if (options) {
                    transceivers.forEach(function (_ref2) {
                      var type = _ref2.type,
                          transceiver = _ref2.transceiver,
                          option = _ref2.option;
                      localDesc.sdp = _this3._setRtpReceiverOptions(localDesc.sdp, option, transceiver.mid);
                      localDesc.sdp = _this3._setRtpSenderOptions(localDesc.sdp, option, transceiver.mid);
                    });
                  }

                  _this3._signaling.sendSignalingMessage('soac', {
                    id: _this3._id,
                    signaling: localDesc
                  });
                })["catch"](function (e) {
                  _logger["default"].error('Failed to create offer or set SDP. Message: ' + e.message);

                  if (_this3._publishTransceivers.get(internalId).id) {
                    _this3._unpublish(internalId);

                    _this3._rejectPromise(e);

                    _this3._fireEndedEventOnPublicationOrSubscription();
                  } else {
                    _this3._unpublish(internalId);
                  }
                });
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  _this3._publishPromises.set(internalId, {
                    resolve: resolve,
                    reject: reject
                  });
                }));

              case 102:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, this, [[19, 29, 32, 35], [39, 49, 52, 55]]);
      }));

      function publish(_x3, _x4, _x5) {
        return _publish.apply(this, arguments);
      }

      return publish;
    }()
  }, {
    key: "subscribe",
    value: function () {
      var _subscribe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(stream, options) {
        var _this4 = this;

        var mediaOptions, matchedSetting, internalId, offerOptions, transceivers, transceiver, _transceiver2, localDesc;

        return _regenerator["default"].wrap(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this._ended) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return", Promise.reject('Connection closed'));

              case 2:
                if (options === undefined) {
                  options = {
                    audio: !!stream.settings.audio,
                    video: !!stream.settings.video
                  };
                }

                if (!((0, _typeof2["default"])(options) !== 'object')) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", Promise.reject(new TypeError('Options should be an object.')));

              case 5:
                if (options.audio === undefined) {
                  if (stream.settings.audio.length === 0) {
                    options.audio = false;
                  } else {
                    options.audio = !!stream.settings.audio;
                  }
                }

                if (options.video === undefined) {
                  options.video = !!stream.settings.video;
                }

                if (!(options.audio !== undefined && (0, _typeof2["default"])(options.audio) !== 'object' && typeof options.audio !== 'boolean' && options.audio !== null || options.video !== undefined && (0, _typeof2["default"])(options.video) !== 'object' && typeof options.video !== 'boolean' && options.video !== null)) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt("return", Promise.reject(new TypeError('Invalid options type.')));

              case 9:
                if (!(options.audio && !stream.settings.audio || options.video && !stream.settings.video)) {
                  _context4.next = 11;
                  break;
                }

                return _context4.abrupt("return", Promise.reject(new _error.ConferenceError('options.audio/video cannot be true or an object if there is no ' + 'audio/video track in remote stream.')));

              case 11:
                if (!(options.audio === false && options.video === false)) {
                  _context4.next = 13;
                  break;
                }

                return _context4.abrupt("return", Promise.reject(new _error.ConferenceError('Cannot subscribe a stream without audio and video.')));

              case 13:
                mediaOptions = {};

                if (!options.audio) {
                  _context4.next = 22;
                  break;
                }

                if (!((0, _typeof2["default"])(options.audio) === 'object' && Array.isArray(options.audio.codecs))) {
                  _context4.next = 18;
                  break;
                }

                if (!(options.audio.codecs.length === 0)) {
                  _context4.next = 18;
                  break;
                }

                return _context4.abrupt("return", Promise.reject(new TypeError('Audio codec cannot be an empty array.')));

              case 18:
                mediaOptions.audio = {};
                mediaOptions.audio.from = stream.id;
                _context4.next = 23;
                break;

              case 22:
                mediaOptions.audio = false;

              case 23:
                if (!options.video) {
                  _context4.next = 33;
                  break;
                }

                if (!((0, _typeof2["default"])(options.video) === 'object' && Array.isArray(options.video.codecs))) {
                  _context4.next = 27;
                  break;
                }

                if (!(options.video.codecs.length === 0)) {
                  _context4.next = 27;
                  break;
                }

                return _context4.abrupt("return", Promise.reject(new TypeError('Video codec cannot be an empty array.')));

              case 27:
                mediaOptions.video = {};
                mediaOptions.video.from = stream.id;

                if (options.video.resolution || options.video.frameRate || options.video.bitrateMultiplier && options.video.bitrateMultiplier !== 1 || options.video.keyFrameInterval) {
                  mediaOptions.video.parameters = {
                    resolution: options.video.resolution,
                    framerate: options.video.frameRate,
                    bitrate: options.video.bitrateMultiplier ? 'x' + options.video.bitrateMultiplier.toString() : undefined,
                    keyFrameInterval: options.video.keyFrameInterval
                  };
                }

                if (options.video.rid) {
                  // Use rid matched track ID as from if possible
                  matchedSetting = stream.settings.video.find(function (video) {
                    return video.rid === options.video.rid;
                  });

                  if (matchedSetting && matchedSetting._trackId) {
                    mediaOptions.video.from = matchedSetting._trackId; // Ignore other settings when RID set.

                    delete mediaOptions.video.parameters;
                  }

                  options.video = true;
                }

                _context4.next = 34;
                break;

              case 33:
                mediaOptions.video = false;

              case 34:
                internalId = this._createInternalId(); // Waiting for previous SDP negotiation if needed

                _context4.next = 37;
                return this._chainSdpPromise(internalId);

              case 37:
                offerOptions = {};
                transceivers = [];

                this._createPeerConnection();

                if (typeof this.pc.addTransceiver === 'function') {
                  // |direction| seems not working on Safari.
                  if (mediaOptions.audio) {
                    transceiver = this.pc.addTransceiver('audio', {
                      direction: 'recvonly'
                    });
                    transceivers.push({
                      type: 'audio',
                      transceiver: transceiver,
                      from: mediaOptions.audio.from,
                      option: {
                        audio: options.audio
                      }
                    });
                  }

                  if (mediaOptions.video) {
                    _transceiver2 = this.pc.addTransceiver('video', {
                      direction: 'recvonly'
                    });
                    transceivers.push({
                      type: 'video',
                      transceiver: _transceiver2,
                      from: mediaOptions.video.from,
                      parameters: mediaOptions.video.parameters,
                      option: {
                        video: options.video
                      }
                    });
                  }
                } else {
                  offerOptions.offerToReceiveAudio = !!options.audio;
                  offerOptions.offerToReceiveVideo = !!options.video;
                }

                this._subscribeTransceivers.set(internalId, {
                  transceivers: transceivers
                });

                this.pc.createOffer(offerOptions).then(function (desc) {
                  localDesc = desc;
                  return _this4.pc.setLocalDescription(desc)["catch"](function (errorMessage) {
                    _logger["default"].error('Set local description failed. Message: ' + JSON.stringify(errorMessage));

                    throw errorMessage;
                  });
                }, function (error) {
                  _logger["default"].error('Create offer failed. Error info: ' + JSON.stringify(error));

                  throw error;
                }).then(function () {
                  var trackOptions = [];
                  transceivers.forEach(function (_ref3) {
                    var type = _ref3.type,
                        transceiver = _ref3.transceiver,
                        from = _ref3.from,
                        parameters = _ref3.parameters,
                        option = _ref3.option;
                    trackOptions.push({
                      type: type,
                      mid: transceiver.mid,
                      from: from,
                      parameters: parameters
                    });
                  });
                  return _this4._signaling.sendSignalingMessage('subscribe', {
                    media: {
                      tracks: trackOptions
                    },
                    transport: {
                      id: _this4._id,
                      type: 'webrtc'
                    }
                  })["catch"](function (e) {
                    // Send SDP even when failed to get Answer.
                    _this4._signaling.sendSignalingMessage('soac', {
                      id: _this4._id,
                      signaling: localDesc
                    });

                    throw e;
                  });
                }).then(function (data) {
                  var subscriptionId = data.id;
                  var messageEvent = new _event.MessageEvent('id', {
                    message: subscriptionId,
                    origin: _this4._remoteId
                  });

                  _this4.dispatchEvent(messageEvent);

                  _this4._subscribeTransceivers.get(internalId).id = subscriptionId;

                  _this4._reverseIdMap.set(subscriptionId, internalId);

                  if (_this4._id && _this4._id !== data.transportId) {
                    _logger["default"].warning('Server returns conflict ID: ' + data.transportId);
                  }

                  _this4._id = data.transportId; // Modify local SDP before sending

                  if (options) {
                    transceivers.forEach(function (_ref4) {
                      var type = _ref4.type,
                          transceiver = _ref4.transceiver,
                          option = _ref4.option;
                      localDesc.sdp = _this4._setRtpReceiverOptions(localDesc.sdp, option, transceiver.mid);
                    });
                  }

                  _this4._signaling.sendSignalingMessage('soac', {
                    id: _this4._id,
                    signaling: localDesc
                  });
                })["catch"](function (e) {
                  _logger["default"].error('Failed to create offer or set SDP. Message: ' + e.message);

                  if (_this4._subscribeTransceivers.get(internalId).id) {
                    _this4._unsubscribe(internalId);

                    _this4._rejectPromise(e);

                    _this4._fireEndedEventOnPublicationOrSubscription();
                  } else {
                    _this4._unsubscribe(internalId);
                  }
                });
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  _this4._subscribePromises.set(internalId, {
                    resolve: resolve,
                    reject: reject
                  });
                }));

              case 44:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3, this);
      }));

      function subscribe(_x6, _x7) {
        return _subscribe.apply(this, arguments);
      }

      return subscribe;
    }()
  }, {
    key: "close",
    value: function close() {
      if (this.pc && this.pc.signalingState !== 'closed') {
        this.pc.close();
      }
    }
  }, {
    key: "_chainSdpPromise",
    value: function _chainSdpPromise(internalId) {
      var _this5 = this;

      var prior = this._sdpPromise;
      var negotiationTimeout = 10000;
      this._sdpPromise = prior.then(function () {
        return new Promise(function (resolve, reject) {
          var resolver = {
            finish: false,
            resolve: resolve,
            reject: reject
          };

          _this5._sdpResolvers.push(resolver);

          _this5._sdpResolverMap.set(internalId, resolver);

          setTimeout(function () {
            return reject('Timeout to get SDP answer');
          }, negotiationTimeout);
        });
      });
      return prior["catch"](function (e) {//
      });
    }
  }, {
    key: "_nextSdpPromise",
    value: function _nextSdpPromise() {
      var ret = false; // Skip the finished sdp promise

      while (this._sdpResolveNum < this._sdpResolvers.length) {
        var resolver = this._sdpResolvers[this._sdpResolveNum];
        this._sdpResolveNum++;

        if (!resolver.finish) {
          resolver.resolve();
          resolver.finish = true;
          ret = true;
        }
      }

      return ret;
    }
  }, {
    key: "_createInternalId",
    value: function _createInternalId() {
      return this._internalCount++;
    }
  }, {
    key: "_unpublish",
    value: function _unpublish(internalId) {
      var _this6 = this;

      if (this._publishTransceivers.has(internalId)) {
        var _this$_publishTransce = this._publishTransceivers.get(internalId),
            id = _this$_publishTransce.id,
            transceivers = _this$_publishTransce.transceivers;

        if (id) {
          this._signaling.sendSignalingMessage('unpublish', {
            id: id
          })["catch"](function (e) {
            _logger["default"].warning('MCU returns negative ack for unpublishing, ' + e);
          });

          this._reverseIdMap["delete"](id);
        } // Clean transceiver


        transceivers.forEach(function (_ref5) {
          var transceiver = _ref5.transceiver;

          if (_this6.pc.signalingState === 'stable') {
            transceiver.sender.replaceTrack(null);

            _this6.pc.removeTrack(transceiver.sender);
          }
        });

        this._publishTransceivers["delete"](internalId); // Fire ended event


        if (this._publications.has(id)) {
          var event = new _event.OwtEvent('ended');

          this._publications.get(id).dispatchEvent(event);

          this._publications["delete"](id);
        } else {
          _logger["default"].warning('Invalid publication to unpublish: ' + id);

          if (this._publishPromises.has(internalId)) {
            this._publishPromises.get(internalId).reject(new _error.ConferenceError('Failed to publish'));
          }
        }

        if (this._sdpResolverMap.has(internalId)) {
          var resolver = this._sdpResolverMap.get(internalId);

          if (!resolver.finish) {
            resolver.resolve();
            resolver.finish = true;
          }

          this._sdpResolverMap["delete"](internalId);
        } // Create offer, set local and remote description

      }
    }
  }, {
    key: "_unsubscribe",
    value: function _unsubscribe(internalId) {
      if (this._subscribeTransceivers.has(internalId)) {
        var _this$_subscribeTrans = this._subscribeTransceivers.get(internalId),
            id = _this$_subscribeTrans.id,
            transceivers = _this$_subscribeTrans.transceivers;

        if (id) {
          this._signaling.sendSignalingMessage('unsubscribe', {
            id: id
          })["catch"](function (e) {
            _logger["default"].warning('MCU returns negative ack for unsubscribing, ' + e);
          });
        } // Clean transceiver


        transceivers.forEach(function (_ref6) {
          var transceiver = _ref6.transceiver;
          transceiver.receiver.track.stop();
        });

        this._subscribeTransceivers["delete"](internalId); // Fire ended event


        if (this._subscriptions.has(id)) {
          var event = new _event.OwtEvent('ended');

          this._subscriptions.get(id).dispatchEvent(event);

          this._subscriptions["delete"](id);
        } else {
          _logger["default"].warning('Invalid subscription to unsubscribe: ' + id);

          if (this._subscribePromises.has(internalId)) {
            this._subscribePromises.get(internalId).reject(new _error.ConferenceError('Failed to subscribe'));
          }
        }

        if (this._sdpResolverMap.has(internalId)) {
          var resolver = this._sdpResolverMap.get(internalId);

          if (!resolver.finish) {
            resolver.resolve();
            resolver.finish = true;
          }

          this._sdpResolverMap["delete"](internalId);
        } // Disable media in remote SDP
        // Set remoteDescription and set localDescription

      }
    }
  }, {
    key: "_muteOrUnmute",
    value: function _muteOrUnmute(sessionId, isMute, isPub, trackKind) {
      var _this7 = this;

      var eventName = isPub ? 'stream-control' : 'subscription-control';
      var operation = isMute ? 'pause' : 'play';
      return this._signaling.sendSignalingMessage(eventName, {
        id: sessionId,
        operation: operation,
        data: trackKind
      }).then(function () {
        if (!isPub) {
          var muteEventName = isMute ? 'mute' : 'unmute';

          _this7._subscriptions.get(sessionId).dispatchEvent(new _event.MuteEvent(muteEventName, {
            kind: trackKind
          }));
        }
      });
    }
  }, {
    key: "_applyOptions",
    value: function _applyOptions(sessionId, options) {
      if ((0, _typeof2["default"])(options) !== 'object' || (0, _typeof2["default"])(options.video) !== 'object') {
        return Promise.reject(new _error.ConferenceError('Options should be an object.'));
      }

      var videoOptions = {};
      videoOptions.resolution = options.video.resolution;
      videoOptions.framerate = options.video.frameRate;
      videoOptions.bitrate = options.video.bitrateMultiplier ? 'x' + options.video.bitrateMultiplier.toString() : undefined;
      videoOptions.keyFrameInterval = options.video.keyFrameInterval;
      return this._signaling.sendSignalingMessage('subscription-control', {
        id: sessionId,
        operation: 'update',
        data: {
          video: {
            parameters: videoOptions
          }
        }
      }).then();
    }
  }, {
    key: "_onRemoteStreamAdded",
    value: function _onRemoteStreamAdded(event) {
      _logger["default"].debug('Remote stream added.');

      var _iterator6 = _createForOfIteratorHelper(this._subscribeTransceivers),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _step6$value = (0, _slicedToArray2["default"])(_step6.value, 2),
              internalId = _step6$value[0],
              sub = _step6$value[1];

          if (sub.transceivers.find(function (t) {
            return t.transceiver === event.transceiver;
          })) {
            if (this._subscriptions.has(sub.id)) {
              var subscription = this._subscriptions.get(sub.id);

              subscription.stream = event.streams[0];

              if (this._subscribePromises.has(internalId)) {
                this._subscribePromises.get(internalId).resolve(subscription);

                this._subscribePromises["delete"](internalId);
              }
            } else {
              this._remoteMediaStreams.set(sub.id, event.streams[0]);
            }

            return;
          }
        } // This is not expected path. However, this is going to happen on Safari
        // because it does not support setting direction of transceiver.

      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      _logger["default"].warning('Received remote stream without subscription.');
    }
  }, {
    key: "_onLocalIceCandidate",
    value: function _onLocalIceCandidate(event) {
      if (event.candidate) {
        if (this.pc.signalingState !== 'stable') {
          this._pendingCandidates.push(event.candidate);
        } else {
          this._sendCandidate(event.candidate);
        }
      } else {
        _logger["default"].debug('Empty candidate.');
      }
    }
  }, {
    key: "_fireEndedEventOnPublicationOrSubscription",
    value: function _fireEndedEventOnPublicationOrSubscription() {
      if (this._ended) {
        return;
      }

      this._ended = true;
      var event = new _event.OwtEvent('ended');

      var _iterator7 = _createForOfIteratorHelper(this._publications),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _step7$value = (0, _slicedToArray2["default"])(_step7.value, 2),
              publication = _step7$value[1];

          publication.dispatchEvent(event);
          publication.stop();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      var _iterator8 = _createForOfIteratorHelper(this._subscriptions),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _step8$value = (0, _slicedToArray2["default"])(_step8.value, 2),
              subscription = _step8$value[1];

          subscription.dispatchEvent(event);
          subscription.stop();
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      this.dispatchEvent(event);
      this.close();
    }
  }, {
    key: "_rejectPromise",
    value: function _rejectPromise(error) {
      if (!error) {
        error = new _error.ConferenceError('Connection failed or closed.');
      }

      if (this.pc && this.pc.iceConnectionState !== 'closed') {
        this.pc.close();
      } // Rejecting all corresponding promises if publishing and subscribing is ongoing.


      var _iterator9 = _createForOfIteratorHelper(this._publishPromises),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _step9$value = (0, _slicedToArray2["default"])(_step9.value, 2),
              promise = _step9$value[1];

          promise.reject(error);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      this._publishPromises.clear();

      var _iterator10 = _createForOfIteratorHelper(this._subscribePromises),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _step10$value = (0, _slicedToArray2["default"])(_step10.value, 2),
              _promise = _step10$value[1];

          _promise.reject(error);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      this._subscribePromises.clear();
    }
  }, {
    key: "_onIceConnectionStateChange",
    value: function _onIceConnectionStateChange(event) {
      if (!event || !event.currentTarget) {
        return;
      }

      _logger["default"].debug('ICE connection state changed to ' + event.currentTarget.iceConnectionState);

      if (event.currentTarget.iceConnectionState === 'closed' || event.currentTarget.iceConnectionState === 'failed') {
        if (event.currentTarget.iceConnectionState === 'failed') {
          this._handleError('connection failed.');
        } else {
          // Fire ended event if publication or subscription exists.
          this._fireEndedEventOnPublicationOrSubscription();
        }
      }
    }
  }, {
    key: "_onConnectionStateChange",
    value: function _onConnectionStateChange(event) {
      if (this.pc.connectionState === 'closed' || this.pc.connectionState === 'failed') {
        if (this.pc.connectionState === 'failed') {
          this._handleError('connection failed.');
        } else {
          // Fire ended event if publication or subscription exists.
          this._fireEndedEventOnPublicationOrSubscription();
        }
      }
    }
  }, {
    key: "_sendCandidate",
    value: function _sendCandidate(candidate) {
      this._signaling.sendSignalingMessage('soac', {
        id: this._id,
        signaling: {
          type: 'candidate',
          candidate: {
            candidate: 'a=' + candidate.candidate,
            sdpMid: candidate.sdpMid,
            sdpMLineIndex: candidate.sdpMLineIndex
          }
        }
      });
    }
  }, {
    key: "_createPeerConnection",
    value: function _createPeerConnection() {
      var _this8 = this;

      if (this.pc) {
        return;
      }

      var pcConfiguration = this._config.rtcConfiguration || {};

      if (Utils.isChrome()) {
        pcConfiguration.bundlePolicy = 'max-bundle';
      }

      this.pc = new RTCPeerConnection(pcConfiguration);

      this.pc.onicecandidate = function (event) {
        _this8._onLocalIceCandidate.apply(_this8, [event]);
      };

      this.pc.ontrack = function (event) {
        _this8._onRemoteStreamAdded.apply(_this8, [event]);
      };

      this.pc.oniceconnectionstatechange = function (event) {
        _this8._onIceConnectionStateChange.apply(_this8, [event]);
      };

      this.pc.onconnectionstatechange = function (event) {
        _this8._onConnectionStateChange.apply(_this8, [event]);
      };
    }
  }, {
    key: "_getStats",
    value: function _getStats() {
      if (this.pc) {
        return this.pc.getStats();
      } else {
        return Promise.reject(new _error.ConferenceError('PeerConnection is not available.'));
      }
    }
  }, {
    key: "_readyHandler",
    value: function _readyHandler(sessionId) {
      var _this9 = this;

      var internalId = this._reverseIdMap.get(sessionId);

      if (this._subscribePromises.has(internalId)) {
        var mediaStream = this._remoteMediaStreams.get(sessionId);

        var transportSettings = new _transport.TransportSettings(_transport.TransportType.WEBRTC, this._id);
        transportSettings.rtpTransceivers = this._subscribeTransceivers.get(internalId).transceivers;
        var subscription = new _subscription.Subscription(sessionId, mediaStream, transportSettings, function () {
          _this9._unsubscribe(internalId);
        }, function () {
          return _this9._getStats();
        }, function (trackKind) {
          return _this9._muteOrUnmute(sessionId, true, false, trackKind);
        }, function (trackKind) {
          return _this9._muteOrUnmute(sessionId, false, false, trackKind);
        }, function (options) {
          return _this9._applyOptions(sessionId, options);
        });

        this._subscriptions.set(sessionId, subscription); // Resolve subscription if mediaStream is ready.


        if (this._subscriptions.get(sessionId).stream) {
          this._subscribePromises.get(internalId).resolve(subscription);

          this._subscribePromises["delete"](internalId);
        }
      } else if (this._publishPromises.has(internalId)) {
        var _transportSettings = new _transport.TransportSettings(_transport.TransportType.WEBRTC, this._id);

        _transportSettings.transceivers = this._publishTransceivers.get(internalId).transceivers;
        var publication = new _publication.Publication(sessionId, _transportSettings, function () {
          _this9._unpublish(internalId);

          return Promise.resolve();
        }, function () {
          return _this9._getStats();
        }, function (trackKind) {
          return _this9._muteOrUnmute(sessionId, true, true, trackKind);
        }, function (trackKind) {
          return _this9._muteOrUnmute(sessionId, false, true, trackKind);
        });

        this._publications.set(sessionId, publication);

        this._publishPromises.get(internalId).resolve(publication); // Do not fire publication's ended event when associated stream is ended.
        // It may still sending silence or black frames.
        // Refer to https://w3c.github.io/webrtc-pc/#rtcrtpsender-interface.

      } else if (!sessionId) {// Channel ready
      }
    }
  }, {
    key: "_sdpHandler",
    value: function _sdpHandler(sdp) {
      var _this10 = this;

      if (sdp.type === 'answer') {
        this.pc.setRemoteDescription(sdp).then(function () {
          if (_this10._pendingCandidates.length > 0) {
            var _iterator11 = _createForOfIteratorHelper(_this10._pendingCandidates),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var candidate = _step11.value;

                _this10._sendCandidate(candidate);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }
        }, function (error) {
          _logger["default"].error('Set remote description failed: ' + error);

          _this10._rejectPromise(error);

          _this10._fireEndedEventOnPublicationOrSubscription();
        }).then(function () {
          if (!_this10._nextSdpPromise()) {
            _logger["default"].warning('Unexpected SDP promise state');
          }
        });
      }
    }
  }, {
    key: "_errorHandler",
    value: function _errorHandler(sessionId, errorMessage) {
      if (!sessionId) {
        // Transport error
        return this._handleError(errorMessage);
      } // Fire error event on publication or subscription


      var errorEvent = new _event.ErrorEvent('error', {
        error: new _error.ConferenceError(errorMessage)
      });

      if (this._publications.has(sessionId)) {
        this._publications.get(sessionId).dispatchEvent(errorEvent);
      }

      if (this._subscriptions.has(sessionId)) {
        this._subscriptions.get(sessionId).dispatchEvent(errorEvent);
      } // Stop publication or subscription


      var internalId = this._reverseIdMap.get(sessionId);

      if (this._publishTransceivers.has(internalId)) {
        this._unpublish(internalId);
      }

      if (this._subscribeTransceivers.has(internalId)) {
        this._unsubscribe(internalId);
      }
    }
  }, {
    key: "_handleError",
    value: function _handleError(errorMessage) {
      var error = new _error.ConferenceError(errorMessage);

      if (this._ended) {
        return;
      }

      var errorEvent = new _event.ErrorEvent('error', {
        error: error
      });

      var _iterator12 = _createForOfIteratorHelper(this._publications),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var _step12$value = (0, _slicedToArray2["default"])(_step12.value, 2),
              publication = _step12$value[1];

          publication.dispatchEvent(errorEvent);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      var _iterator13 = _createForOfIteratorHelper(this._subscriptions),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _step13$value = (0, _slicedToArray2["default"])(_step13.value, 2),
              subscription = _step13$value[1];

          subscription.dispatchEvent(errorEvent);
        } // Fire ended event when error occured

      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      this._fireEndedEventOnPublicationOrSubscription();
    }
  }, {
    key: "_setCodecOrder",
    value: function _setCodecOrder(sdp, options, mid) {
      if (options.audio) {
        if (options.audio.codecs) {
          var audioCodecNames = Array.from(options.audio.codecs, function (codec) {
            return codec.name;
          });
          sdp = SdpUtils.reorderCodecs(sdp, 'audio', audioCodecNames, mid);
        } else {
          var _audioCodecNames = Array.from(options.audio, function (encodingParameters) {
            return encodingParameters.codec.name;
          });

          sdp = SdpUtils.reorderCodecs(sdp, 'audio', _audioCodecNames, mid);
        }
      }

      if (options.video) {
        if (options.video.codecs) {
          var videoCodecNames = Array.from(options.video.codecs, function (codec) {
            return codec.name;
          });
          sdp = SdpUtils.reorderCodecs(sdp, 'video', videoCodecNames, mid);
        } else {
          var _videoCodecNames = Array.from(options.video, function (encodingParameters) {
            return encodingParameters.codec.name;
          });

          sdp = SdpUtils.reorderCodecs(sdp, 'video', _videoCodecNames, mid);
        }
      }

      return sdp;
    }
  }, {
    key: "_setMaxBitrate",
    value: function _setMaxBitrate(sdp, options, mid) {
      if ((0, _typeof2["default"])(options.audio) === 'object') {
        sdp = SdpUtils.setMaxBitrate(sdp, options.audio, mid);
      }

      if ((0, _typeof2["default"])(options.video) === 'object') {
        sdp = SdpUtils.setMaxBitrate(sdp, options.video, mid);
      }

      return sdp;
    }
  }, {
    key: "_setRtpSenderOptions",
    value: function _setRtpSenderOptions(sdp, options, mid) {
      // SDP mugling is deprecated, moving to `setParameters`.
      if (this._isRtpEncodingParameters(options.audio) || this._isRtpEncodingParameters(options.video)) {
        return sdp;
      }

      sdp = this._setMaxBitrate(sdp, options, mid);
      return sdp;
    }
  }, {
    key: "_setRtpReceiverOptions",
    value: function _setRtpReceiverOptions(sdp, options, mid) {
      // Add legacy simulcast in SDP for safari.
      if (this._isRtpEncodingParameters(options.video) && Utils.isSafari()) {
        if (options.video.length > 1) {
          sdp = SdpUtils.addLegacySimulcast(sdp, 'video', options.video.length, mid);
        }
      } // _videoCodecs is a workaround for setting video codecs. It will be moved to RTCRtpSendParameters.


      if (this._isRtpEncodingParameters(options.video) && this._videoCodecs) {
        sdp = SdpUtils.reorderCodecs(sdp, 'video', this._videoCodecs, mid);
        return sdp;
      }

      if (this._isRtpEncodingParameters(options.audio) || this._isRtpEncodingParameters(options.video)) {
        return sdp;
      }

      sdp = this._setCodecOrder(sdp, options, mid);
      return sdp;
    } // Handle stream event sent from MCU. Some stream update events sent from
    // server, more specifically audio.status and video.status events should be
    // publication event or subscription events. They don't change MediaStream's
    // status. See
    // https://github.com/open-webrtc-toolkit/owt-server/blob/master/doc/Client-Portal%20Protocol.md#339-participant-is-notified-on-streams-update-in-room
    // for more information.

  }, {
    key: "_onStreamEvent",
    value: function _onStreamEvent(message) {
      var eventTargets = [];

      if (this._publications.has(message.id)) {
        eventTargets.push(this._publications.get(message.id));
      }

      var _iterator14 = _createForOfIteratorHelper(this._subscriptions),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var subscription = _step14.value;

          if (message.id === subscription._audioTrackId || message.id === subscription._videoTrackId) {
            eventTargets.push(subscription);
          }
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      if (!eventTargets.length) {
        return;
      }

      var trackKind;

      if (message.data.field === 'audio.status') {
        trackKind = _mediaformat.TrackKind.AUDIO;
      } else if (message.data.field === 'video.status') {
        trackKind = _mediaformat.TrackKind.VIDEO;
      } else {
        _logger["default"].warning('Invalid data field for stream update info.');
      }

      if (message.data.value === 'active') {
        eventTargets.forEach(function (target) {
          return target.dispatchEvent(new _event.MuteEvent('unmute', {
            kind: trackKind
          }));
        });
      } else if (message.data.value === 'inactive') {
        eventTargets.forEach(function (target) {
          return target.dispatchEvent(new _event.MuteEvent('mute', {
            kind: trackKind
          }));
        });
      } else {
        _logger["default"].warning('Invalid data value for stream update info.');
      }
    }
  }, {
    key: "_isRtpEncodingParameters",
    value: function _isRtpEncodingParameters(obj) {
      if (!Array.isArray(obj)) {
        return false;
      } // Only check the first one.


      var param = obj[0];
      return !!(param.codecPayloadType || param.dtx || param.active || param.ptime || param.maxFramerate || param.scaleResolutionDownBy || param.rid || param.scalabilityMode);
    }
  }, {
    key: "_isOwtEncodingParameters",
    value: function _isOwtEncodingParameters(obj) {
      if (!Array.isArray(obj)) {
        return false;
      } // Only check the first one.


      var param = obj[0];
      return !!param.codec;
    }
  }]);
  return ConferencePeerConnectionChannel;
}(_event.EventDispatcher);

exports.ConferencePeerConnectionChannel = ConferencePeerConnectionChannel;

},{"../base/event.js":25,"../base/logger.js":27,"../base/mediaformat.js":28,"../base/publication.js":30,"../base/sdputils.js":31,"../base/transport.js":33,"../base/utils.js":34,"./error.js":37,"./subscription.js":45,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":15,"@babel/runtime/helpers/slicedToArray":17,"@babel/runtime/helpers/typeof":18,"@babel/runtime/regenerator":21}],36:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* global Map, Promise */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConferenceClient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var EventModule = _interopRequireWildcard(require("../base/event.js"));

var _signaling = require("./signaling.js");

var _logger = _interopRequireDefault(require("../base/logger.js"));

var _base = require("../base/base64.js");

var _error = require("./error.js");

var Utils = _interopRequireWildcard(require("../base/utils.js"));

var StreamModule = _interopRequireWildcard(require("../base/stream.js"));

var _participant2 = require("./participant.js");

var _info = require("./info.js");

var _channel = require("./channel.js");

var _quicconnection = require("./quicconnection.js");

var _mixedstream = require("./mixedstream.js");

var StreamUtilsModule = _interopRequireWildcard(require("./streamutils.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var SignalingState = {
  READY: 1,
  CONNECTING: 2,
  CONNECTED: 3
};
var protocolVersion = '1.2';
/* eslint-disable valid-jsdoc */

/**
 * @class ParticipantEvent
 * @classDesc Class ParticipantEvent represents a participant event.
   @extends Owt.Base.OwtEvent
 * @memberof Owt.Conference
 * @hideconstructor
 */

var ParticipantEvent = function ParticipantEvent(type, init) {
  var that = new EventModule.OwtEvent(type, init);
  /**
   * @member {Owt.Conference.Participant} participant
   * @instance
   * @memberof Owt.Conference.ParticipantEvent
   */

  that.participant = init.participant;
  return that;
};
/* eslint-enable valid-jsdoc */

/**
 * @class ConferenceClientConfiguration
 * @classDesc Configuration for ConferenceClient.
 * @memberOf Owt.Conference
 * @hideconstructor
 */


var ConferenceClientConfiguration = // eslint-disable-line no-unused-vars
// eslint-disable-next-line require-jsdoc
function ConferenceClientConfiguration() {
  (0, _classCallCheck2["default"])(this, ConferenceClientConfiguration);

  /**
   * @member {?RTCConfiguration} rtcConfiguration
   * @instance
   * @memberof Owt.Conference.ConferenceClientConfiguration
   * @desc It will be used for creating PeerConnection.
   * @see {@link https://www.w3.org/TR/webrtc/#rtcconfiguration-dictionary|RTCConfiguration Dictionary of WebRTC 1.0}.
   * @example
   * // Following object can be set to conferenceClientConfiguration.rtcConfiguration.
   * {
   *   iceServers: [{
   *      urls: "stun:example.com:3478"
   *   }, {
   *     urls: [
   *       "turn:example.com:3478?transport=udp",
   *       "turn:example.com:3478?transport=tcp"
   *     ],
   *      credential: "password",
   *      username: "username"
   *   }
   * }
   */
  this.rtcConfiguration = undefined;
  /**
   * @member {?WebTransportOptions} webTransportConfiguration
   * @instance
   * @memberof Owt.Conference.ConferenceClientConfiguration
   * @desc It will be used for creating WebTransport.
   * @see {@link https://w3c.github.io/webtransport/#dictdef-webtransportoptions|WebTransportOptions of WebTransport}.
   * @example
   * // Following object can be set to conferenceClientConfiguration.webTransportConfiguration.
   * {
   *   serverCertificateFingerprints: [{
   *     value:
   *         '00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF',
   *     algorithm: 'sha-256',
   *   }],
   * }
   */

  this.webTransportConfiguration = undefined;
};
/**
 * @class ConferenceClient
 * @classdesc The ConferenceClient handles PeerConnections between client and server. For conference controlling, please refer to REST API guide.
 * Events:
 *
 * | Event Name            | Argument Type                    | Fired when       |
 * | --------------------- | ---------------------------------| ---------------- |
 * | streamadded           | Owt.Base.StreamEvent             | A new stream is available in the conference. |
 * | participantjoined     | Owt.Conference.ParticipantEvent  | A new participant joined the conference. |
 * | messagereceived       | Owt.Base.MessageEvent            | A new message is received. |
 * | serverdisconnected    | Owt.Base.OwtEvent                | Disconnected from conference server. |
 *
 * @memberof Owt.Conference
 * @extends Owt.Base.EventDispatcher
 * @constructor
 * @param {?Owt.Conference.ConferenceClientConfiguration } config Configuration for ConferenceClient.
 * @param {?Owt.Conference.SioSignaling } signalingImpl Signaling channel implementation for ConferenceClient. SDK uses default signaling channel implementation if this parameter is undefined. Currently, a Socket.IO signaling channel implementation was provided as ics.conference.SioSignaling. However, it is not recommended to directly access signaling channel or customize signaling channel for ConferenceClient as this time.
 */


var ConferenceClient = function ConferenceClient(config, signalingImpl) {
  Object.setPrototypeOf(this, new EventModule.EventDispatcher());
  config = config || {};
  var self = this;
  var signalingState = SignalingState.READY;
  var signaling = signalingImpl ? signalingImpl : new _signaling.SioSignaling();
  var me;
  var room;
  var remoteStreams = new Map(); // Key is stream ID, value is a RemoteStream.

  var participants = new Map(); // Key is participant ID, value is a Participant object.

  var publishChannels = new Map(); // Key is MediaStream's ID, value is pc channel.

  var channels = new Map(); // Key is channel's internal ID, value is channel.

  var peerConnectionChannel = null; // PeerConnection for WebRTC.

  var quicTransportChannel = null;
  /**
   * @member {RTCPeerConnection} peerConnection
   * @instance
   * @readonly
   * @desc PeerConnection for WebRTC connection with conference server.
   * @memberof Owt.Conference.ConferenceClient
   * @see {@link https://w3c.github.io/webrtc-pc/#rtcpeerconnection-interface|RTCPeerConnection Interface of WebRTC 1.0}.
   */

  Object.defineProperty(this, 'peerConnection', {
    configurable: false,
    get: function get() {
      var _peerConnectionChanne;

      return (_peerConnectionChanne = peerConnectionChannel) === null || _peerConnectionChanne === void 0 ? void 0 : _peerConnectionChanne.pc;
    }
  });
  /**
   * @function onSignalingMessage
   * @desc Received a message from conference portal. Defined in client-server protocol.
   * @param {string} notification Notification type.
   * @param {object} data Data received.
   * @private
   */

  function onSignalingMessage(notification, data) {
    if (notification === 'soac' || notification === 'progress') {
      if (channels.has(data.id)) {
        channels.get(data.id).onMessage(notification, data);
      } else if (quicTransportChannel && quicTransportChannel.hasContentSessionId(data.id)) {
        quicTransportChannel.onMessage(notification, data);
      } else {
        _logger["default"].warning('Cannot find a channel for incoming data.');
      }

      return;
    } else if (notification === 'stream') {
      if (data.status === 'add') {
        fireStreamAdded(data.data);
      } else if (data.status === 'remove') {
        fireStreamRemoved(data);
      } else if (data.status === 'update') {
        // Broadcast audio/video update status to channel so specific events can be fired on publication or subscription.
        if (data.data.field === 'audio.status' || data.data.field === 'video.status') {
          channels.forEach(function (c) {
            c.onMessage(notification, data);
          });
        } else if (data.data.field === 'activeInput') {
          fireActiveAudioInputChange(data);
        } else if (data.data.field === 'video.layout') {
          fireLayoutChange(data);
        } else if (data.data.field === '.') {
          updateRemoteStream(data.data.value);
        } else {
          _logger["default"].warning('Unknown stream event from MCU.');
        }
      }
    } else if (notification === 'text') {
      fireMessageReceived(data);
    } else if (notification === 'participant') {
      fireParticipantEvent(data);
    }
  }

  signaling.addEventListener('data', function (event) {
    onSignalingMessage(event.message.notification, event.message.data);
  });
  signaling.addEventListener('disconnect', function () {
    clean();
    signalingState = SignalingState.READY;
    self.dispatchEvent(new EventModule.OwtEvent('serverdisconnected'));
  }); // eslint-disable-next-line require-jsdoc

  function fireParticipantEvent(data) {
    if (data.action === 'join') {
      data = data.data;
      var participant = new _participant2.Participant(data.id, data.role, data.user);
      participants.set(data.id, participant);
      var event = new ParticipantEvent('participantjoined', {
        participant: participant
      });
      self.dispatchEvent(event);
    } else if (data.action === 'leave') {
      var participantId = data.data;

      if (!participants.has(participantId)) {
        _logger["default"].warning('Received leave message from MCU for an unknown participant.');

        return;
      }

      var _participant = participants.get(participantId);

      participants["delete"](participantId);

      _participant.dispatchEvent(new EventModule.OwtEvent('left'));
    }
  } // eslint-disable-next-line require-jsdoc


  function fireMessageReceived(data) {
    var messageEvent = new EventModule.MessageEvent('messagereceived', {
      message: data.message,
      origin: data.from,
      to: data.to
    });
    self.dispatchEvent(messageEvent);
  } // eslint-disable-next-line require-jsdoc


  function fireStreamAdded(info) {
    var stream = createRemoteStream(info);
    remoteStreams.set(stream.id, stream);
    var streamEvent = new StreamModule.StreamEvent('streamadded', {
      stream: stream
    });
    self.dispatchEvent(streamEvent);
  } // eslint-disable-next-line require-jsdoc


  function fireStreamRemoved(info) {
    if (!remoteStreams.has(info.id)) {
      _logger["default"].warning('Cannot find specific remote stream.');

      return;
    }

    var stream = remoteStreams.get(info.id);
    var streamEvent = new EventModule.OwtEvent('ended');
    remoteStreams["delete"](stream.id);
    stream.dispatchEvent(streamEvent);
  } // eslint-disable-next-line require-jsdoc


  function fireActiveAudioInputChange(info) {
    if (!remoteStreams.has(info.id)) {
      _logger["default"].warning('Cannot find specific remote stream.');

      return;
    }

    var stream = remoteStreams.get(info.id);
    var streamEvent = new _mixedstream.ActiveAudioInputChangeEvent('activeaudioinputchange', {
      activeAudioInputStreamId: info.data.value
    });
    stream.dispatchEvent(streamEvent);
  } // eslint-disable-next-line require-jsdoc


  function fireLayoutChange(info) {
    if (!remoteStreams.has(info.id)) {
      _logger["default"].warning('Cannot find specific remote stream.');

      return;
    }

    var stream = remoteStreams.get(info.id);
    var streamEvent = new _mixedstream.LayoutChangeEvent('layoutchange', {
      layout: info.data.value
    });
    stream.dispatchEvent(streamEvent);
  } // eslint-disable-next-line require-jsdoc


  function updateRemoteStream(streamInfo) {
    if (!remoteStreams.has(streamInfo.id)) {
      _logger["default"].warning('Cannot find specific remote stream.');

      return;
    }

    var stream = remoteStreams.get(streamInfo.id);
    stream.settings = StreamUtilsModule.convertToPublicationSettings(streamInfo.media);
    stream.extraCapabilities = StreamUtilsModule.convertToSubscriptionCapabilities(streamInfo.media);
    var streamEvent = new EventModule.OwtEvent('updated');
    stream.dispatchEvent(streamEvent);
  } // eslint-disable-next-line require-jsdoc


  function createRemoteStream(streamInfo) {
    if (streamInfo.type === 'mixed') {
      return new _mixedstream.RemoteMixedStream(streamInfo);
    } else {
      var audioSourceInfo;
      var videoSourceInfo;
      var audioTrack = streamInfo.media.tracks.find(function (t) {
        return t.type === 'audio';
      });
      var videoTrack = streamInfo.media.tracks.find(function (t) {
        return t.type === 'video';
      });

      if (audioTrack) {
        audioSourceInfo = audioTrack.source;
      }

      if (videoTrack) {
        videoSourceInfo = videoTrack.source;
      }

      var dataSourceInfo = streamInfo.data;
      var stream = new StreamModule.RemoteStream(streamInfo.id, streamInfo.info.owner, undefined, new StreamModule.StreamSourceInfo(audioSourceInfo, videoSourceInfo, dataSourceInfo), streamInfo.info.attributes);
      stream.settings = StreamUtilsModule.convertToPublicationSettings(streamInfo.media);
      stream.extraCapabilities = StreamUtilsModule.convertToSubscriptionCapabilities(streamInfo.media);
      return stream;
    }
  } // eslint-disable-next-line require-jsdoc


  function sendSignalingMessage(type, message) {
    return signaling.send(type, message);
  } // eslint-disable-next-line require-jsdoc


  function createSignalingForChannel() {
    // Construct an signaling sender/receiver for ConferencePeerConnection.
    var signalingForChannel = Object.create(EventModule.EventDispatcher);
    signalingForChannel.sendSignalingMessage = sendSignalingMessage;
    return signalingForChannel;
  } // eslint-disable-next-line require-jsdoc


  function createPeerConnectionChannel(transport) {
    var signalingForChannel = createSignalingForChannel();
    var channel = new _channel.ConferencePeerConnectionChannel(config, signalingForChannel);
    channel.addEventListener('id', function (messageEvent) {
      if (!channels.has(messageEvent.message)) {
        channels.set(messageEvent.message, channel);
      } else {
        _logger["default"].warning('Channel already exists', messageEvent.message);
      }
    });
    return channel;
  } // eslint-disable-next-line require-jsdoc


  function clean() {
    participants.clear();
    remoteStreams.clear();
  }

  Object.defineProperty(this, 'info', {
    configurable: false,
    get: function get() {
      if (!room) {
        return null;
      }

      return new _info.ConferenceInfo(room.id, Array.from(participants, function (x) {
        return x[1];
      }), Array.from(remoteStreams, function (x) {
        return x[1];
      }), me);
    }
  });
  /**
   * @function join
   * @instance
   * @desc Join a conference.
   * @memberof Owt.Conference.ConferenceClient
   * @return {Promise<ConferenceInfo, Error>} Return a promise resolved with current conference's information if successfully join the conference. Or return a promise rejected with a newly created Owt.Error if failed to join the conference.
   * @param {string} tokenString Token is issued by conference server(nuve).
   */

  this.join = function (tokenString) {
    return new Promise(function (resolve, reject) {
      var token = JSON.parse(_base.Base64.decodeBase64(tokenString));
      var isSecured = token.secure === true;
      var host = token.host;

      if (typeof host !== 'string') {
        reject(new _error.ConferenceError('Invalid host.'));
        return;
      }

      if (host.indexOf('http') === -1) {
        host = isSecured ? 'https://' + host : 'http://' + host;
      }

      if (signalingState !== SignalingState.READY) {
        reject(new _error.ConferenceError('connection state invalid'));
        return;
      }

      signalingState = SignalingState.CONNECTING;
      var sysInfo = Utils.sysInfo();
      var loginInfo = {
        token: tokenString,
        userAgent: {
          sdk: sysInfo.sdk
        },
        protocol: protocolVersion
      };
      signaling.connect(host, isSecured, loginInfo).then(function (resp) {
        signalingState = SignalingState.CONNECTED;
        room = resp.room;

        if (room.streams !== undefined) {
          var _iterator = _createForOfIteratorHelper(room.streams),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var st = _step.value;

              if (st.type === 'mixed') {
                st.viewport = st.info.label;
              }

              remoteStreams.set(st.id, createRemoteStream(st));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        if (resp.room && resp.room.participants !== undefined) {
          var _iterator2 = _createForOfIteratorHelper(resp.room.participants),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var p = _step2.value;
              participants.set(p.id, new _participant2.Participant(p.id, p.role, p.user));

              if (p.id === resp.id) {
                me = participants.get(p.id);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        peerConnectionChannel = createPeerConnectionChannel();
        peerConnectionChannel.addEventListener('ended', function () {
          peerConnectionChannel = null;
        });

        if (typeof WebTransport === 'function' && token.webTransportUrl) {
          quicTransportChannel = new _quicconnection.QuicConnection(token.webTransportUrl, resp.webTransportToken, createSignalingForChannel(), config.webTransportConfiguration);
        }

        var conferenceInfo = new _info.ConferenceInfo(resp.room.id, Array.from(participants.values()), Array.from(remoteStreams.values()), me);

        if (quicTransportChannel) {
          quicTransportChannel.init().then(function () {
            resolve(conferenceInfo);
          });
        } else {
          resolve(conferenceInfo);
        }
      }, function (e) {
        signalingState = SignalingState.READY;
        reject(new _error.ConferenceError(e));
      });
    });
  };
  /**
   * @function publish
   * @memberof Owt.Conference.ConferenceClient
   * @instance
   * @desc Publish a LocalStream to conference server. Other participants will be able to subscribe this stream when it is successfully published.
   * @param {Owt.Base.LocalStream} stream The stream to be published.
   * @param {(Owt.Base.PublishOptions|RTCRtpTransceiver[])} options If options is a PublishOptions, the stream will be published as options specified. If options is a list of RTCRtpTransceivers, each track in the first argument must have a corresponding RTCRtpTransceiver here, and the track will be published with the RTCRtpTransceiver associated with it.
   * @param {string[]} videoCodecs Video codec names for publishing. Valid values are 'VP8', 'VP9' and 'H264'. This parameter only valid when the second argument is PublishOptions and options.video is RTCRtpEncodingParameters. Publishing with RTCRtpEncodingParameters is an experimental feature. This parameter is subject to change.
   * @return {Promise<Publication, Error>} Returned promise will be resolved with a newly created Publication once specific stream is successfully published, or rejected with a newly created Error if stream is invalid or options cannot be satisfied. Successfully published means PeerConnection is established and server is able to process media data.
   */


  this.publish = function (stream, options, videoCodecs) {
    if (!(stream instanceof StreamModule.LocalStream)) {
      return Promise.reject(new _error.ConferenceError('Invalid stream.'));
    }

    if (stream.source.data) {
      return quicTransportChannel.publish(stream);
    }

    if (publishChannels.has(stream.mediaStream.id)) {
      return Promise.reject(new _error.ConferenceError('Cannot publish a published stream.'));
    }

    return peerConnectionChannel.publish(stream, options, videoCodecs);
  };
  /**
   * @function subscribe
   * @memberof Owt.Conference.ConferenceClient
   * @instance
   * @desc Subscribe a RemoteStream from conference server.
   * @param {Owt.Base.RemoteStream} stream The stream to be subscribed.
   * @param {Owt.Conference.SubscribeOptions} options Options for subscription.
   * @return {Promise<Subscription, Error>} Returned promise will be resolved with a newly created Subscription once specific stream is successfully subscribed, or rejected with a newly created Error if stream is invalid or options cannot be satisfied. Successfully subscribed means PeerConnection is established and server was started to send media data.
   */


  this.subscribe = function (stream, options) {
    if (!(stream instanceof StreamModule.RemoteStream)) {
      return Promise.reject(new _error.ConferenceError('Invalid stream.'));
    }

    if (stream.source.data) {
      if (stream.source.audio || stream.source.video) {
        return Promise.reject(new TypeError('Invalid source info. A remote stream is either a data stream or ' + 'a media stream.'));
      }

      if (quicTransportChannel) {
        return quicTransportChannel.subscribe(stream);
      } else {
        return Promise.reject(new TypeError('WebTransport is not supported.'));
      }
    }

    return peerConnectionChannel.subscribe(stream, options);
  };
  /**
   * @function send
   * @memberof Owt.Conference.ConferenceClient
   * @instance
   * @desc Send a text message to a participant or all participants.
   * @param {string} message Message to be sent.
   * @param {string} participantId Receiver of this message. Message will be sent to all participants if participantId is undefined.
   * @return {Promise<void, Error>} Returned promise will be resolved when conference server received certain message.
   */


  this.send = function (message, participantId) {
    if (participantId === undefined) {
      participantId = 'all';
    }

    return sendSignalingMessage('text', {
      to: participantId,
      message: message
    });
  };
  /**
   * @function leave
   * @memberOf Owt.Conference.ConferenceClient
   * @instance
   * @desc Leave a conference.
   * @return {Promise<void, Error>} Returned promise will be resolved with undefined once the connection is disconnected.
   */


  this.leave = function () {
    return signaling.disconnect().then(function () {
      clean();
      signalingState = SignalingState.READY;
    });
  };
  /**
   * @function createSendStream
   * @memberOf Owt.Conference.ConferenceClient
   * @instance
   * @desc Create an outgoing stream. Only available when WebTransport is supported by user's browser.
   * @return {Promise<SendStream, Error>} Returned promise will be resolved with a SendStream once stream is created.
   */


  if (_quicconnection.QuicConnection) {
    this.createSendStream = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (quicTransportChannel) {
                _context.next = 2;
                break;
              }

              throw new _error.ConferenceError('No QUIC connection available.');

            case 2:
              return _context.abrupt("return", quicTransportChannel.createSendStream());

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }
};

exports.ConferenceClient = ConferenceClient;

},{"../base/base64.js":23,"../base/event.js":25,"../base/logger.js":27,"../base/stream.js":32,"../base/utils.js":34,"./channel.js":35,"./error.js":37,"./info.js":39,"./mixedstream.js":40,"./participant.js":41,"./quicconnection.js":42,"./signaling.js":43,"./streamutils.js":44,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/typeof":18,"@babel/runtime/regenerator":21}],37:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';
/**
 * @class ConferenceError
 * @classDesc The ConferenceError object represents an error in conference mode.
 * @memberOf Owt.Conference
 * @hideconstructor
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConferenceError = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ConferenceError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(ConferenceError, _Error);

  var _super = _createSuper(ConferenceError);

  // eslint-disable-next-line require-jsdoc
  function ConferenceError(message) {
    (0, _classCallCheck2["default"])(this, ConferenceError);
    return _super.call(this, message);
  }

  return ConferenceError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.ConferenceError = ConferenceError;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":15,"@babel/runtime/helpers/wrapNativeSuper":20}],38:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ConferenceClient", {
  enumerable: true,
  get: function get() {
    return _client.ConferenceClient;
  }
});
Object.defineProperty(exports, "SioSignaling", {
  enumerable: true,
  get: function get() {
    return _signaling.SioSignaling;
  }
});

var _client = require("./client.js");

var _signaling = require("./signaling.js");

},{"./client.js":36,"./signaling.js":43}],39:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';
/**
 * @class ConferenceInfo
 * @classDesc Information for a conference.
 * @memberOf Owt.Conference
 * @hideconstructor
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConferenceInfo = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var ConferenceInfo = // eslint-disable-next-line require-jsdoc
function ConferenceInfo(id, participants, remoteStreams, myInfo) {
  (0, _classCallCheck2["default"])(this, ConferenceInfo);

  /**
   * @member {string} id
   * @instance
   * @memberof Owt.Conference.ConferenceInfo
   * @desc Conference ID.
   */
  this.id = id;
  /**
   * @member {Array<Owt.Conference.Participant>} participants
   * @instance
   * @memberof Owt.Conference.ConferenceInfo
   * @desc Participants in the conference.
   */

  this.participants = participants;
  /**
   * @member {Array<Owt.Base.RemoteStream>} remoteStreams
   * @instance
   * @memberof Owt.Conference.ConferenceInfo
   * @desc Streams published by participants. It also includes streams published by current user.
   */

  this.remoteStreams = remoteStreams;
  /**
   * @member {Owt.Base.Participant} self
   * @instance
   * @memberof Owt.Conference.ConferenceInfo
   */

  this.self = myInfo;
};

exports.ConferenceInfo = ConferenceInfo;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":10}],40:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoteMixedStream = exports.LayoutChangeEvent = exports.ActiveAudioInputChangeEvent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var StreamModule = _interopRequireWildcard(require("../base/stream.js"));

var StreamUtilsModule = _interopRequireWildcard(require("./streamutils.js"));

var _event = require("../base/event.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class RemoteMixedStream
 * @classDesc Mixed stream from conference server.
 * Events:
 *
 * | Event Name             | Argument Type    | Fired when       |
 * | -----------------------| ---------------- | ---------------- |
 * | activeaudioinputchange | Event            | Audio activeness of input stream (of the mixed stream) is changed. |
 * | layoutchange           | Event            | Video's layout has been changed. It usually happens when a new video is mixed into the target mixed stream or an existing video has been removed from mixed stream. |
 *
 * @memberOf Owt.Conference
 * @extends Owt.Base.RemoteStream
 * @hideconstructor
 */
var RemoteMixedStream = /*#__PURE__*/function (_StreamModule$RemoteS) {
  (0, _inherits2["default"])(RemoteMixedStream, _StreamModule$RemoteS);

  var _super = _createSuper(RemoteMixedStream);

  // eslint-disable-next-line require-jsdoc
  function RemoteMixedStream(info) {
    var _this;

    (0, _classCallCheck2["default"])(this, RemoteMixedStream);

    if (info.type !== 'mixed') {
      throw new TypeError('Not a mixed stream');
    }

    _this = _super.call(this, info.id, undefined, undefined, new StreamModule.StreamSourceInfo('mixed', 'mixed'));
    _this.settings = StreamUtilsModule.convertToPublicationSettings(info.media);
    _this.extraCapabilities = StreamUtilsModule.convertToSubscriptionCapabilities(info.media);
    return _this;
  }

  return RemoteMixedStream;
}(StreamModule.RemoteStream);
/**
 * @class ActiveAudioInputChangeEvent
 * @classDesc Class ActiveAudioInputChangeEvent represents an active audio input change event.
 * @memberof Owt.Conference
 * @hideconstructor
 */


exports.RemoteMixedStream = RemoteMixedStream;

var ActiveAudioInputChangeEvent = /*#__PURE__*/function (_OwtEvent) {
  (0, _inherits2["default"])(ActiveAudioInputChangeEvent, _OwtEvent);

  var _super2 = _createSuper(ActiveAudioInputChangeEvent);

  // eslint-disable-next-line require-jsdoc
  function ActiveAudioInputChangeEvent(type, init) {
    var _this2;

    (0, _classCallCheck2["default"])(this, ActiveAudioInputChangeEvent);
    _this2 = _super2.call(this, type);
    /**
     * @member {string} activeAudioInputStreamId
     * @instance
     * @memberof Owt.Conference.ActiveAudioInputChangeEvent
     * @desc The ID of input stream(of the mixed stream) whose audio is active.
     */

    _this2.activeAudioInputStreamId = init.activeAudioInputStreamId;
    return _this2;
  }

  return ActiveAudioInputChangeEvent;
}(_event.OwtEvent);
/**
 * @class LayoutChangeEvent
 * @classDesc Class LayoutChangeEvent represents an video layout change event.
 * @memberof Owt.Conference
 * @hideconstructor
 */


exports.ActiveAudioInputChangeEvent = ActiveAudioInputChangeEvent;

var LayoutChangeEvent = /*#__PURE__*/function (_OwtEvent2) {
  (0, _inherits2["default"])(LayoutChangeEvent, _OwtEvent2);

  var _super3 = _createSuper(LayoutChangeEvent);

  // eslint-disable-next-line require-jsdoc
  function LayoutChangeEvent(type, init) {
    var _this3;

    (0, _classCallCheck2["default"])(this, LayoutChangeEvent);
    _this3 = _super3.call(this, type);
    /**
     * @member {object} layout
     * @instance
     * @memberof Owt.Conference.LayoutChangeEvent
     * @desc Current video's layout. It's an array of map which maps each stream to a region.
     */

    _this3.layout = init.layout;
    return _this3;
  }

  return LayoutChangeEvent;
}(_event.OwtEvent);

exports.LayoutChangeEvent = LayoutChangeEvent;

},{"../base/event.js":25,"../base/stream.js":32,"./streamutils.js":44,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":15,"@babel/runtime/helpers/typeof":18}],41:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Participant = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var EventModule = _interopRequireWildcard(require("../base/event.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

'use strict';
/**
 * @class Participant
 * @memberOf Owt.Conference
 * @classDesc The Participant defines a participant in a conference.
 * Events:
 *
 * | Event Name      | Argument Type      | Fired when       |
 * | ----------------| ------------------ | ---------------- |
 * | left            | Owt.Base.OwtEvent  | The participant left the conference. |
 *
 * @extends Owt.Base.EventDispatcher
 * @hideconstructor
 */


var Participant = /*#__PURE__*/function (_EventModule$EventDis) {
  (0, _inherits2["default"])(Participant, _EventModule$EventDis);

  var _super = _createSuper(Participant);

  // eslint-disable-next-line require-jsdoc
  function Participant(id, role, userId) {
    var _this;

    (0, _classCallCheck2["default"])(this, Participant);
    _this = _super.call(this);
    /**
     * @member {string} id
     * @instance
     * @memberof Owt.Conference.Participant
     * @desc The ID of the participant. It varies when a single user join different conferences.
     */

    Object.defineProperty((0, _assertThisInitialized2["default"])(_this), 'id', {
      configurable: false,
      writable: false,
      value: id
    });
    /**
     * @member {string} role
     * @instance
     * @memberof Owt.Conference.Participant
     */

    Object.defineProperty((0, _assertThisInitialized2["default"])(_this), 'role', {
      configurable: false,
      writable: false,
      value: role
    });
    /**
     * @member {string} userId
     * @instance
     * @memberof Owt.Conference.Participant
     * @desc The user ID of the participant. It can be integrated into existing account management system.
     */

    Object.defineProperty((0, _assertThisInitialized2["default"])(_this), 'userId', {
      configurable: false,
      writable: false,
      value: userId
    });
    return _this;
  }

  return Participant;
}(EventModule.EventDispatcher);

exports.Participant = Participant;

},{"../base/event.js":25,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":15,"@babel/runtime/helpers/typeof":18}],42:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable require-jsdoc */

/* global Promise, Map, WebTransport, Uint8Array, Uint32Array, TextEncoder */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuicConnection = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _logger = _interopRequireDefault(require("../base/logger.js"));

var _event = require("../base/event.js");

var _publication = require("../base/publication.js");

var _subscription = require("./subscription.js");

var _base = require("../base/base64.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class QuicConnection
 * @classDesc A channel for a QUIC transport between client and conference
 * server.
 * @hideconstructor
 * @private
 */
var QuicConnection = /*#__PURE__*/function (_EventDispatcher) {
  (0, _inherits2["default"])(QuicConnection, _EventDispatcher);

  var _super = _createSuper(QuicConnection);

  // `tokenString` is a base64 string of the token object. It's in the return
  // value of `ConferenceClient.join`.
  function QuicConnection(url, tokenString, signaling, webTransportOptions) {
    var _this;

    (0, _classCallCheck2["default"])(this, QuicConnection);
    _this = _super.call(this);
    _this._tokenString = tokenString;
    _this._token = JSON.parse(_base.Base64.decodeBase64(tokenString));
    _this._signaling = signaling;
    _this._ended = false;
    _this._quicStreams = new Map(); // Key is publication or subscription ID.

    _this._quicTransport = new WebTransport(url, webTransportOptions);
    _this._subscribePromises = new Map(); // Key is subscription ID.

    _this._transportId = _this._token.transportId;

    _this._initReceiveStreamReader();

    return _this;
  }
  /**
   * @function onMessage
   * @desc Received a message from conference portal. Defined in client-server
   * protocol.
   * @param {string} notification Notification type.
   * @param {object} message Message received.
   * @private
   */


  (0, _createClass2["default"])(QuicConnection, [{
    key: "onMessage",
    value: function onMessage(notification, message) {
      switch (notification) {
        case 'progress':
          if (message.status === 'soac') {
            this._soacHandler(message.data);
          } else if (message.status === 'ready') {
            this._readyHandler();
          } else if (message.status === 'error') {
            this._errorHandler(message.data);
          }

          break;

        case 'stream':
          this._onStreamEvent(message);

          break;

        default:
          _logger["default"].warning('Unknown notification from MCU.');

      }
    }
  }, {
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._authenticate(this._tokenString);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "_initReceiveStreamReader",
    value: function () {
      var _initReceiveStreamReader2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var receiveStreamReader, receivingDone, _yield$receiveStreamR, receiveStream, readingReceiveStreamsDone, chunkReader, _yield$chunkReader$re, uuid, readingChunksDone, subscriptionId, subscription;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                receiveStreamReader = this._quicTransport.incomingBidirectionalStreams.getReader();

                _logger["default"].info('Reader: ' + receiveStreamReader);

                receivingDone = false;

              case 3:
                if (receivingDone) {
                  _context2.next = 31;
                  break;
                }

                _context2.next = 6;
                return receiveStreamReader.read();

              case 6:
                _yield$receiveStreamR = _context2.sent;
                receiveStream = _yield$receiveStreamR.value;
                readingReceiveStreamsDone = _yield$receiveStreamR.done;

                _logger["default"].info('New stream received');

                if (!readingReceiveStreamsDone) {
                  _context2.next = 13;
                  break;
                }

                receivingDone = true;
                return _context2.abrupt("break", 31);

              case 13:
                chunkReader = receiveStream.readable.getReader();
                _context2.next = 16;
                return chunkReader.read();

              case 16:
                _yield$chunkReader$re = _context2.sent;
                uuid = _yield$chunkReader$re.value;
                readingChunksDone = _yield$chunkReader$re.done;

                if (!readingChunksDone) {
                  _context2.next = 22;
                  break;
                }

                _logger["default"].error('Stream closed unexpectedly.');

                return _context2.abrupt("return");

              case 22:
                if (!(uuid.length != 16)) {
                  _context2.next = 25;
                  break;
                }

                _logger["default"].error('Unexpected length for UUID.');

                return _context2.abrupt("return");

              case 25:
                chunkReader.releaseLock();
                subscriptionId = this._uint8ArrayToUuid(uuid);

                this._quicStreams.set(subscriptionId, receiveStream);

                if (this._subscribePromises.has(subscriptionId)) {
                  subscription = this._createSubscription(subscriptionId, receiveStream);

                  this._subscribePromises.get(subscriptionId).resolve(subscription);
                }

                _context2.next = 3;
                break;

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _initReceiveStreamReader() {
        return _initReceiveStreamReader2.apply(this, arguments);
      }

      return _initReceiveStreamReader;
    }()
  }, {
    key: "_createSubscription",
    value: function _createSubscription(id, receiveStream) {
      // TODO: Incomplete subscription.
      var subscription = new _subscription.Subscription(id, function () {
        receiveStream.abortReading();
      });
      subscription.stream = receiveStream;
      return subscription;
    }
  }, {
    key: "_authenticate",
    value: function () {
      var _authenticate2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(token) {
        var quicStream, chunkReader, writer, encoder, encodedToken;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._quicTransport.ready;

              case 2:
                _context3.next = 4;
                return this._quicTransport.createBidirectionalStream();

              case 4:
                quicStream = _context3.sent;
                chunkReader = quicStream.readable.getReader();
                writer = quicStream.writable.getWriter();
                _context3.next = 9;
                return writer.ready;

              case 9:
                // 128 bit of zero indicates this is a stream for signaling.
                writer.write(new Uint8Array(16)); // Send token as described in
                // https://github.com/open-webrtc-toolkit/owt-server/blob/20e8aad216cc446095f63c409339c34c7ee770ee/doc/design/quic-transport-payload-format.md.

                encoder = new TextEncoder();
                encodedToken = encoder.encode(token);
                writer.write(Uint32Array.of(encodedToken.length));
                writer.write(encodedToken); // Server returns transport ID as an ack. Ignore it here.

                _context3.next = 16;
                return chunkReader.read();

              case 16:
                _logger["default"].info('Authentication success.');

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _authenticate(_x) {
        return _authenticate2.apply(this, arguments);
      }

      return _authenticate;
    }()
  }, {
    key: "createSendStream",
    value: function () {
      var _createSendStream = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var quicStream;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._quicTransport.ready;

              case 2:
                _context4.next = 4;
                return this._quicTransport.createBidirectionalStream();

              case 4:
                quicStream = _context4.sent;
                return _context4.abrupt("return", quicStream);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function createSendStream() {
        return _createSendStream.apply(this, arguments);
      }

      return createSendStream;
    }()
  }, {
    key: "createSendStream1",
    value: function () {
      var _createSendStream2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(sessionId) {
        var publicationId, quicStream, writer;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _logger["default"].info('Create stream.');

                _context5.next = 3;
                return this._quicTransport.ready;

              case 3:
                _context5.next = 5;
                return this._initiatePublication();

              case 5:
                publicationId = _context5.sent;
                _context5.next = 8;
                return this._quicTransport.createSendStream();

              case 8:
                quicStream = _context5.sent;
                writer = quicStream.writable.getWriter();
                _context5.next = 12;
                return writer.ready;

              case 12:
                writer.write(this._uuidToUint8Array(publicationId));
                writer.releaseLock();

                this._quicStreams.set(publicationId, quicStream);

                return _context5.abrupt("return", quicStream);

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createSendStream1(_x2) {
        return _createSendStream2.apply(this, arguments);
      }

      return createSendStream1;
    }()
  }, {
    key: "publish",
    value: function () {
      var _publish = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(stream) {
        var _this2 = this;

        var publicationId, quicStream, writer, publication;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._initiatePublication();

              case 2:
                publicationId = _context6.sent;
                quicStream = stream.stream;
                writer = quicStream.writable.getWriter();
                _context6.next = 7;
                return writer.ready;

              case 7:
                writer.write(this._uuidToUint8Array(publicationId));
                writer.releaseLock();

                _logger["default"].info('publish id');

                this._quicStreams.set(publicationId, quicStream);

                publication = new _publication.Publication(publicationId, function () {
                  _this2._signaling.sendSignalingMessage('unpublish', {
                    id: publication
                  })["catch"](function (e) {
                    _logger["default"].warning('MCU returns negative ack for unpublishing, ' + e);
                  });
                }
                /* TODO: getStats, mute, unmute is not implemented */
                );
                return _context6.abrupt("return", publication);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function publish(_x3) {
        return _publish.apply(this, arguments);
      }

      return publish;
    }()
  }, {
    key: "hasContentSessionId",
    value: function hasContentSessionId(id) {
      return this._quicStreams.has(id);
    }
  }, {
    key: "_uuidToUint8Array",
    value: function _uuidToUint8Array(uuidString) {
      if (uuidString.length != 32) {
        throw new TypeError('Incorrect UUID.');
      }

      var uuidArray = new Uint8Array(16);

      for (var i = 0; i < 16; i++) {
        uuidArray[i] = parseInt(uuidString.substring(i * 2, i * 2 + 2), 16);
      }

      return uuidArray;
    }
  }, {
    key: "_uint8ArrayToUuid",
    value: function _uint8ArrayToUuid(uuidBytes) {
      var s = '';

      var _iterator = _createForOfIteratorHelper(uuidBytes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var hex = _step.value;
          var str = hex.toString(16);
          s += str.padStart(2, '0');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return s;
    }
  }, {
    key: "subscribe",
    value: function subscribe(stream) {
      var _this3 = this;

      var p = new Promise(function (resolve, reject) {
        _this3._signaling.sendSignalingMessage('subscribe', {
          media: null,
          data: {
            from: stream.id
          },
          transport: {
            type: 'quic',
            id: _this3._transportId
          }
        }).then(function (data) {
          if (_this3._quicStreams.has(data.id)) {
            // QUIC stream created before signaling returns.
            var subscription = _this3._createSubscription(data.id, _this3._quicStreams.get(data.id));

            resolve(subscription);
          } else {
            _this3._quicStreams.set(data.id, null); // QUIC stream is not created yet, resolve promise after getting
            // QUIC stream.


            _this3._subscribePromises.set(data.id, {
              resolve: resolve,
              reject: reject
            });
          }
        });
      });
      return p;
    }
  }, {
    key: "_readAndPrint",
    value: function _readAndPrint() {
      var _this4 = this;

      this._quicStreams[0].waitForReadable(5).then(function () {
        var data = new Uint8Array(_this4._quicStreams[0].readBufferedAmount);

        _this4._quicStreams[0].readInto(data);

        _logger["default"].info('Read data: ' + data);

        _this4._readAndPrint();
      });
    }
  }, {
    key: "_initiatePublication",
    value: function () {
      var _initiatePublication2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var data;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._signaling.sendSignalingMessage('publish', {
                  media: null,
                  data: true,
                  transport: {
                    type: 'quic',
                    id: this._transportId
                  }
                });

              case 2:
                data = _context7.sent;

                if (!(this._transportId !== data.transportId)) {
                  _context7.next = 5;
                  break;
                }

                throw new Error('Transport ID not match.');

              case 5:
                return _context7.abrupt("return", data.id);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _initiatePublication() {
        return _initiatePublication2.apply(this, arguments);
      }

      return _initiatePublication;
    }()
  }, {
    key: "_readyHandler",
    value: function _readyHandler() {// Ready message from server is useless for QuicStream since QuicStream has
      // its own status. Do nothing here.
    }
  }]);
  return QuicConnection;
}(_event.EventDispatcher);

exports.QuicConnection = QuicConnection;

},{"../base/base64.js":23,"../base/event.js":25,"../base/logger.js":27,"../base/publication.js":30,"./subscription.js":45,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":15,"@babel/runtime/regenerator":21}],43:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SioSignaling = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _logger = _interopRequireDefault(require("../base/logger.js"));

var EventModule = _interopRequireWildcard(require("../base/event.js"));

var _error = require("./error.js");

var _base = require("../base/base64.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

'use strict';

var reconnectionAttempts = 10; // eslint-disable-next-line require-jsdoc

function handleResponse(status, data, resolve, reject) {
  if (status === 'ok' || status === 'success') {
    resolve(data);
  } else if (status === 'error') {
    reject(data);
  } else {
    _logger["default"].error('MCU returns unknown ack.');
  }
}
/**
 * @class SioSignaling
 * @classdesc Socket.IO signaling channel for ConferenceClient. It is not recommended to directly access this class.
 * @memberof Owt.Conference
 * @extends Owt.Base.EventDispatcher
 * @constructor
 */


var SioSignaling = /*#__PURE__*/function (_EventModule$EventDis) {
  (0, _inherits2["default"])(SioSignaling, _EventModule$EventDis);

  var _super = _createSuper(SioSignaling);

  // eslint-disable-next-line require-jsdoc
  function SioSignaling() {
    var _this;

    (0, _classCallCheck2["default"])(this, SioSignaling);
    _this = _super.call(this);
    _this._socket = null;
    _this._loggedIn = false;
    _this._reconnectTimes = 0;
    _this._reconnectionTicket = null;
    _this._refreshReconnectionTicket = null;
    return _this;
  }
  /**
   * @function connect
   * @instance
   * @desc Connect to a portal.
   * @memberof Oms.Conference.SioSignaling
   * @return {Promise<Object, Error>} Return a promise resolved with the data returned by portal if successfully logged in. Or return a promise rejected with a newly created Oms.Error if failed.
   * @param {string} host Host of the portal.
   * @param {string} isSecured Is secure connection or not.
   * @param {string} loginInfo Information required for logging in.
   * @private.
   */


  (0, _createClass2["default"])(SioSignaling, [{
    key: "connect",
    value: function connect(host, isSecured, loginInfo) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var opts = {
          'reconnection': true,
          'reconnectionAttempts': reconnectionAttempts,
          'force new connection': true
        };
        _this2._socket = io(host, opts);
        ['participant', 'text', 'stream', 'progress'].forEach(function (notification) {
          _this2._socket.on(notification, function (data) {
            _this2.dispatchEvent(new EventModule.MessageEvent('data', {
              message: {
                notification: notification,
                data: data
              }
            }));
          });
        });

        _this2._socket.on('reconnecting', function () {
          _this2._reconnectTimes++;
        });

        _this2._socket.on('reconnect_failed', function () {
          if (_this2._reconnectTimes >= reconnectionAttempts) {
            _this2.dispatchEvent(new EventModule.OwtEvent('disconnect'));
          }
        });

        _this2._socket.on('connect_error', function (e) {
          reject("connect_error:".concat(host));
        });

        _this2._socket.on('drop', function () {
          _this2._reconnectTimes = reconnectionAttempts;
        });

        _this2._socket.on('disconnect', function () {
          _this2._clearReconnectionTask();

          if (_this2._reconnectTimes >= reconnectionAttempts) {
            _this2._loggedIn = false;

            _this2.dispatchEvent(new EventModule.OwtEvent('disconnect'));
          }
        });

        _this2._socket.emit('login', loginInfo, function (status, data) {
          if (status === 'ok') {
            _this2._loggedIn = true;

            _this2._onReconnectionTicket(data.reconnectionTicket);

            _this2._socket.on('connect', function () {
              // re-login with reconnection ticket.
              _this2._socket.emit('relogin', _this2._reconnectionTicket, function (status, data) {
                if (status === 'ok') {
                  _this2._reconnectTimes = 0;

                  _this2._onReconnectionTicket(data);
                } else {
                  _this2.dispatchEvent(new EventModule.OwtEvent('disconnect'));
                }
              });
            });
          }

          handleResponse(status, data, resolve, reject);
        });
      });
    }
    /**
     * @function disconnect
     * @instance
     * @desc Disconnect from a portal.
     * @memberof Oms.Conference.SioSignaling
     * @return {Promise<Object, Error>} Return a promise resolved with the data returned by portal if successfully disconnected. Or return a promise rejected with a newly created Oms.Error if failed.
     * @private.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this3 = this;

      if (!this._socket || this._socket.disconnected) {
        return Promise.reject(new _error.ConferenceError('Portal is not connected.'));
      }

      return new Promise(function (resolve, reject) {
        _this3._socket.emit('logout', function (status, data) {
          // Maximize the reconnect times to disable reconnection.
          _this3._reconnectTimes = reconnectionAttempts;

          _this3._socket.disconnect();

          handleResponse(status, data, resolve, reject);
        });
      });
    }
    /**
     * @function send
     * @instance
     * @desc Send data to portal.
     * @memberof Oms.Conference.SioSignaling
     * @return {Promise<Object, Error>} Return a promise resolved with the data returned by portal. Or return a promise rejected with a newly created Oms.Error if failed to send the message.
     * @param {string} requestName Name defined in client-server protocol.
     * @param {string} requestData Data format is defined in client-server protocol.
     * @private.
     */

  }, {
    key: "send",
    value: function send(requestName, requestData) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4._socket.emit(requestName, requestData, function (status, data) {
          handleResponse(status, data, resolve, reject);
        });
      });
    }
    /**
     * @function _onReconnectionTicket
     * @instance
     * @desc Parse reconnection ticket and schedule ticket refreshing.
     * @param {string} ticketString Reconnection ticket.
     * @memberof Owt.Conference.SioSignaling
     * @private.
     */

  }, {
    key: "_onReconnectionTicket",
    value: function _onReconnectionTicket(ticketString) {
      var _this5 = this;

      this._reconnectionTicket = ticketString;
      var ticket = JSON.parse(_base.Base64.decodeBase64(ticketString)); // Refresh ticket 1 min or 10 seconds before it expires.

      var now = Date.now();
      var millisecondsInOneMinute = 60 * 1000;
      var millisecondsInTenSeconds = 10 * 1000;

      if (ticket.notAfter <= now - millisecondsInTenSeconds) {
        _logger["default"].warning('Reconnection ticket expires too soon.');

        return;
      }

      var refreshAfter = ticket.notAfter - now - millisecondsInOneMinute;

      if (refreshAfter < 0) {
        refreshAfter = ticket.notAfter - now - millisecondsInTenSeconds;
      }

      this._clearReconnectionTask();

      this._refreshReconnectionTicket = setTimeout(function () {
        _this5._socket.emit('refreshReconnectionTicket', function (status, data) {
          if (status !== 'ok') {
            _logger["default"].warning('Failed to refresh reconnection ticket.');

            return;
          }

          _this5._onReconnectionTicket(data);
        });
      }, refreshAfter);
    }
    /**
     * @function _clearReconnectionTask
     * @instance
     * @desc Stop trying to refresh reconnection ticket.
     * @memberof Owt.Conference.SioSignaling
     * @private.
     */

  }, {
    key: "_clearReconnectionTask",
    value: function _clearReconnectionTask() {
      clearTimeout(this._refreshReconnectionTicket);
      this._refreshReconnectionTicket = null;
    }
  }]);
  return SioSignaling;
}(EventModule.EventDispatcher);

exports.SioSignaling = SioSignaling;

},{"../base/base64.js":23,"../base/event.js":25,"../base/logger.js":27,"./error.js":37,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":15,"@babel/runtime/helpers/typeof":18}],44:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
// This file doesn't have public APIs.

/* eslint-disable valid-jsdoc */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToPublicationSettings = convertToPublicationSettings;
exports.convertToSubscriptionCapabilities = convertToSubscriptionCapabilities;

var PublicationModule = _interopRequireWildcard(require("../base/publication.js"));

var MediaFormatModule = _interopRequireWildcard(require("../base/mediaformat.js"));

var CodecModule = _interopRequireWildcard(require("../base/codec.js"));

var SubscriptionModule = _interopRequireWildcard(require("./subscription.js"));

var _logger = _interopRequireDefault(require("../base/logger.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @function extractBitrateMultiplier
 * @desc Extract bitrate multiplier from a string like "x0.2".
 * @return {Promise<Object, Error>} The float number after "x".
 * @private
 */
function extractBitrateMultiplier(input) {
  if (typeof input !== 'string' || !input.startsWith('x')) {
    _logger["default"].warning('Invalid bitrate multiplier input.');

    return 0;
  }

  return Number.parseFloat(input.replace(/^x/, ''));
} // eslint-disable-next-line require-jsdoc


function sortNumbers(x, y) {
  return x - y;
} // eslint-disable-next-line require-jsdoc


function sortResolutions(x, y) {
  if (x.width !== y.width) {
    return x.width - y.width;
  } else {
    return x.height - y.height;
  }
}
/**
 * @function convertToPublicationSettings
 * @desc Convert mediaInfo received from server to PublicationSettings.
 * @private
 */


function convertToPublicationSettings(mediaInfo) {
  var audio = [];
  var video = [];
  var audioCodec;
  var videoCodec;
  var resolution;
  var framerate;
  var bitrate;
  var keyFrameInterval;
  var rid;

  var _iterator = _createForOfIteratorHelper(mediaInfo.tracks),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var track = _step.value;

      if (track.type === 'audio') {
        if (track.format) {
          audioCodec = new CodecModule.AudioCodecParameters(track.format.codec, track.format.channelNum, track.format.sampleRate);
        }

        var audioPublicationSettings = new PublicationModule.AudioPublicationSettings(audioCodec);
        audioPublicationSettings._trackId = track.id;
        audio.push(audioPublicationSettings);
      } else if (track.type === 'video') {
        if (track.format) {
          videoCodec = new CodecModule.VideoCodecParameters(track.format.codec, track.format.profile);
        }

        if (track.parameters) {
          if (track.parameters.resolution) {
            resolution = new MediaFormatModule.Resolution(track.parameters.resolution.width, track.parameters.resolution.height);
          }

          framerate = track.parameters.framerate;
          bitrate = track.parameters.bitrate * 1000;
          keyFrameInterval = track.parameters.keyFrameInterval;
        }

        if (track.rid) {
          rid = track.rid;
        }

        var videoPublicationSettings = new PublicationModule.VideoPublicationSettings(videoCodec, resolution, framerate, bitrate, keyFrameInterval, rid);
        videoPublicationSettings._trackId = track.id;
        video.push(videoPublicationSettings);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return new PublicationModule.PublicationSettings(audio, video);
}
/**
 * @function convertToSubscriptionCapabilities
 * @desc Convert mediaInfo received from server to SubscriptionCapabilities.
 * @private
 */


function convertToSubscriptionCapabilities(mediaInfo) {
  var audio;
  var video;

  var _iterator2 = _createForOfIteratorHelper(mediaInfo.tracks),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var track = _step2.value;

      if (track.type === 'audio') {
        var audioCodecs = [];

        if (track.optional && track.optional.format) {
          var _iterator3 = _createForOfIteratorHelper(track.optional.format),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var audioCodecInfo = _step3.value;
              var audioCodec = new CodecModule.AudioCodecParameters(audioCodecInfo.codec, audioCodecInfo.channelNum, audioCodecInfo.sampleRate);
              audioCodecs.push(audioCodec);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        audioCodecs.sort();
        audio = new SubscriptionModule.AudioSubscriptionCapabilities(audioCodecs);
      } else if (track.type === 'video') {
        var _track$optional;

        var videoCodecs = [];

        if (track.optional && track.optional.format) {
          var _iterator4 = _createForOfIteratorHelper(track.optional.format),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var videoCodecInfo = _step4.value;
              var videoCodec = new CodecModule.VideoCodecParameters(videoCodecInfo.codec, videoCodecInfo.profile);
              videoCodecs.push(videoCodec);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }

        videoCodecs.sort();

        if (!((_track$optional = track.optional) !== null && _track$optional !== void 0 && _track$optional.parameters)) {
          video = new SubscriptionModule.VideoSubscriptionCapabilities(videoCodecs, [], [], [], []);
        } else {
          var resolutions = Array.from(track.optional.parameters.resolution, function (r) {
            return new MediaFormatModule.Resolution(r.width, r.height);
          });
          resolutions.sort(sortResolutions);
          var bitrates = Array.from(track.optional.parameters.bitrate, function (bitrate) {
            return extractBitrateMultiplier(bitrate);
          });
          bitrates.push(1.0);
          bitrates.sort(sortNumbers);
          var frameRates = JSON.parse(JSON.stringify(track.optional.parameters.framerate));
          frameRates.sort(sortNumbers);
          var keyFrameIntervals = JSON.parse(JSON.stringify(track.optional.parameters.keyFrameInterval));
          keyFrameIntervals.sort(sortNumbers);
          video = new SubscriptionModule.VideoSubscriptionCapabilities(videoCodecs, resolutions, frameRates, bitrates, keyFrameIntervals);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return new SubscriptionModule.SubscriptionCapabilities(audio, video);
}

},{"../base/codec.js":24,"../base/logger.js":27,"../base/mediaformat.js":28,"../base/publication.js":30,"./subscription.js":45,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/typeof":18}],45:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoSubscriptionUpdateOptions = exports.VideoSubscriptionConstraints = exports.VideoSubscriptionCapabilities = exports.SubscriptionUpdateOptions = exports.SubscriptionCapabilities = exports.Subscription = exports.SubscribeOptions = exports.AudioSubscriptionConstraints = exports.AudioSubscriptionCapabilities = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _event = require("../base/event.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class AudioSubscriptionCapabilities
 * @memberOf Owt.Conference
 * @classDesc Represents the audio capability for subscription.
 * @hideconstructor
 */
var AudioSubscriptionCapabilities = // eslint-disable-next-line require-jsdoc
function AudioSubscriptionCapabilities(codecs) {
  (0, _classCallCheck2["default"])(this, AudioSubscriptionCapabilities);

  /**
   * @member {Array.<Owt.Base.AudioCodecParameters>} codecs
   * @instance
   * @memberof Owt.Conference.AudioSubscriptionCapabilities
   */
  this.codecs = codecs;
};
/**
 * @class VideoSubscriptionCapabilities
 * @memberOf Owt.Conference
 * @classDesc Represents the video capability for subscription.
 * @hideconstructor
 */


exports.AudioSubscriptionCapabilities = AudioSubscriptionCapabilities;

var VideoSubscriptionCapabilities = // eslint-disable-next-line require-jsdoc
function VideoSubscriptionCapabilities(codecs, resolutions, frameRates, bitrateMultipliers, keyFrameIntervals) {
  (0, _classCallCheck2["default"])(this, VideoSubscriptionCapabilities);

  /**
   * @member {Array.<Owt.Base.VideoCodecParameters>} codecs
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionCapabilities
   */
  this.codecs = codecs;
  /**
   * @member {Array.<Owt.Base.Resolution>} resolutions
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionCapabilities
   */

  this.resolutions = resolutions;
  /**
   * @member {Array.<number>} frameRates
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionCapabilities
   */

  this.frameRates = frameRates;
  /**
   * @member {Array.<number>} bitrateMultipliers
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionCapabilities
   */

  this.bitrateMultipliers = bitrateMultipliers;
  /**
   * @member {Array.<number>} keyFrameIntervals
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionCapabilities
   */

  this.keyFrameIntervals = keyFrameIntervals;
};
/**
 * @class SubscriptionCapabilities
 * @memberOf Owt.Conference
 * @classDesc Represents the capability for subscription.
 * @hideconstructor
 */


exports.VideoSubscriptionCapabilities = VideoSubscriptionCapabilities;

var SubscriptionCapabilities = // eslint-disable-next-line require-jsdoc
function SubscriptionCapabilities(audio, video) {
  (0, _classCallCheck2["default"])(this, SubscriptionCapabilities);

  /**
   * @member {?Owt.Conference.AudioSubscriptionCapabilities} audio
   * @instance
   * @memberof Owt.Conference.SubscriptionCapabilities
   */
  this.audio = audio;
  /**
   * @member {?Owt.Conference.VideoSubscriptionCapabilities} video
   * @instance
   * @memberof Owt.Conference.SubscriptionCapabilities
   */

  this.video = video;
};
/**
 * @class AudioSubscriptionConstraints
 * @memberOf Owt.Conference
 * @classDesc Represents the audio constraints for subscription.
 * @hideconstructor
 */


exports.SubscriptionCapabilities = SubscriptionCapabilities;

var AudioSubscriptionConstraints = // eslint-disable-next-line require-jsdoc
function AudioSubscriptionConstraints(codecs) {
  (0, _classCallCheck2["default"])(this, AudioSubscriptionConstraints);

  /**
   * @member {?Array.<Owt.Base.AudioCodecParameters>} codecs
   * @instance
   * @memberof Owt.Conference.AudioSubscriptionConstraints
   * @desc Codecs accepted. If none of `codecs` supported by both sides, connection fails. Leave it undefined will use all possible codecs.
   */
  this.codecs = codecs;
};
/**
 * @class VideoSubscriptionConstraints
 * @memberOf Owt.Conference
 * @classDesc Represents the video constraints for subscription.
 * @hideconstructor
 */


exports.AudioSubscriptionConstraints = AudioSubscriptionConstraints;

var VideoSubscriptionConstraints = // eslint-disable-next-line require-jsdoc
function VideoSubscriptionConstraints(codecs, resolution, frameRate, bitrateMultiplier, keyFrameInterval, rid) {
  (0, _classCallCheck2["default"])(this, VideoSubscriptionConstraints);

  /**
   * @member {?Array.<Owt.Base.VideoCodecParameters>} codecs
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionConstraints
   * @desc Codecs accepted. If none of `codecs` supported by both sides, connection fails. Leave it undefined will use all possible codecs.
   */
  this.codecs = codecs;
  /**
   * @member {?Owt.Base.Resolution} resolution
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionConstraints
   * @desc Only resolutions listed in Owt.Conference.VideoSubscriptionCapabilities are allowed.
   */

  this.resolution = resolution;
  /**
   * @member {?number} frameRate
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionConstraints
   * @desc Only frameRates listed in Owt.Conference.VideoSubscriptionCapabilities are allowed.
   */

  this.frameRate = frameRate;
  /**
   * @member {?number} bitrateMultiplier
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionConstraints
   * @desc Only bitrateMultipliers listed in Owt.Conference.VideoSubscriptionCapabilities are allowed.
   */

  this.bitrateMultiplier = bitrateMultiplier;
  /**
   * @member {?number} keyFrameInterval
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionConstraints
   * @desc Only keyFrameIntervals listed in Owt.Conference.VideoSubscriptionCapabilities are allowed.
   */

  this.keyFrameInterval = keyFrameInterval;
  /**
   * @member {?number} rid
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionConstraints
   * @desc Restriction identifier to identify the RTP Streams within an RTP session. When rid is specified, other constraints will be ignored.
   */

  this.rid = rid;
};
/**
 * @class SubscribeOptions
 * @memberOf Owt.Conference
 * @classDesc SubscribeOptions defines options for subscribing a Owt.Base.RemoteStream.
 */


exports.VideoSubscriptionConstraints = VideoSubscriptionConstraints;

var SubscribeOptions = // eslint-disable-next-line require-jsdoc
function SubscribeOptions(audio, video, transport) {
  (0, _classCallCheck2["default"])(this, SubscribeOptions);

  /**
   * @member {?Owt.Conference.AudioSubscriptionConstraints} audio
   * @instance
   * @memberof Owt.Conference.SubscribeOptions
   */
  this.audio = audio;
  /**
   * @member {?Owt.Conference.VideoSubscriptionConstraints} video
   * @instance
   * @memberof Owt.Conference.SubscribeOptions
   */

  this.video = video;
  /**
   * @member {?Owt.Base.TransportConstraints} transport
   * @instance
   * @memberof Owt.Conference.SubscribeOptions
   */

  this.transport = transport;
};
/**
 * @class VideoSubscriptionUpdateOptions
 * @memberOf Owt.Conference
 * @classDesc VideoSubscriptionUpdateOptions defines options for updating a subscription's video part.
 * @hideconstructor
 */


exports.SubscribeOptions = SubscribeOptions;

var VideoSubscriptionUpdateOptions = // eslint-disable-next-line require-jsdoc
function VideoSubscriptionUpdateOptions() {
  (0, _classCallCheck2["default"])(this, VideoSubscriptionUpdateOptions);

  /**
   * @member {?Owt.Base.Resolution} resolution
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionUpdateOptions
   * @desc Only resolutions listed in VideoSubscriptionCapabilities are allowed.
   */
  this.resolution = undefined;
  /**
   * @member {?number} frameRates
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionUpdateOptions
   * @desc Only frameRates listed in VideoSubscriptionCapabilities are allowed.
   */

  this.frameRate = undefined;
  /**
   * @member {?number} bitrateMultipliers
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionUpdateOptions
   * @desc Only bitrateMultipliers listed in VideoSubscriptionCapabilities are allowed.
   */

  this.bitrateMultipliers = undefined;
  /**
   * @member {?number} keyFrameIntervals
   * @instance
   * @memberof Owt.Conference.VideoSubscriptionUpdateOptions
   * @desc Only keyFrameIntervals listed in VideoSubscriptionCapabilities are allowed.
   */

  this.keyFrameInterval = undefined;
};
/**
 * @class SubscriptionUpdateOptions
 * @memberOf Owt.Conference
 * @classDesc SubscriptionUpdateOptions defines options for updating a subscription.
 * @hideconstructor
 */


exports.VideoSubscriptionUpdateOptions = VideoSubscriptionUpdateOptions;

var SubscriptionUpdateOptions = // eslint-disable-next-line require-jsdoc
function SubscriptionUpdateOptions() {
  (0, _classCallCheck2["default"])(this, SubscriptionUpdateOptions);

  /**
   * @member {?VideoSubscriptionUpdateOptions} video
   * @instance
   * @memberof Owt.Conference.SubscriptionUpdateOptions
   */
  this.video = undefined;
};
/**
 * @class Subscription
 * @memberof Owt.Conference
 * @classDesc Subscription is a receiver for receiving a stream.
 * Events:
 *
 * | Event Name      | Argument Type    | Fired when       |
 * | ----------------| ---------------- | ---------------- |
 * | ended           | Event            | Subscription is ended. |
 * | error           | ErrorEvent       | An error occurred on the subscription. |
 * | mute            | MuteEvent        | Publication is muted. Remote side stopped sending audio and/or video data. |
 * | unmute          | MuteEvent        | Publication is unmuted. Remote side continued sending audio and/or video data. |
 *
 * @extends Owt.Base.EventDispatcher
 * @hideconstructor
 */


exports.SubscriptionUpdateOptions = SubscriptionUpdateOptions;

var Subscription = /*#__PURE__*/function (_EventDispatcher) {
  (0, _inherits2["default"])(Subscription, _EventDispatcher);

  var _super = _createSuper(Subscription);

  // eslint-disable-next-line require-jsdoc
  function Subscription(id, stream, transport, stop, getStats, mute, unmute, applyOptions) {
    var _this;

    (0, _classCallCheck2["default"])(this, Subscription);
    _this = _super.call(this);

    if (!id) {
      throw new TypeError('ID cannot be null or undefined.');
    }
    /**
     * @member {string} id
     * @instance
     * @memberof Owt.Conference.Subscription
     */


    Object.defineProperty((0, _assertThisInitialized2["default"])(_this), 'id', {
      configurable: false,
      writable: false,
      value: id
    });
    /**
     * @member {MediaStream | BidirectionalStream} stream
     * @instance
     * @memberof Owt.Conference.Subscription
     */

    Object.defineProperty((0, _assertThisInitialized2["default"])(_this), 'stream', {
      configurable: false,
      // TODO: It should be a readonly property, but current implementation
      // creates Subscription after receiving 'ready' from server. At this time,
      // MediaStream may not be available.
      writable: true,
      value: stream
    });
    /**
     * @member {Owt.Base.TransportSettings} transport
     * @instance
     * @readonly
     * @desc Transport settings for the subscription.
     * @memberof Owt.Base.Subscription
     */

    Object.defineProperty((0, _assertThisInitialized2["default"])(_this), 'transport', {
      configurable: false,
      writable: false,
      value: transport
    });
    /**
     * @function stop
     * @instance
     * @desc Stop certain subscription. Once a subscription is stopped, it cannot be recovered.
     * @memberof Owt.Conference.Subscription
     * @returns {undefined}
     */

    _this.stop = stop;
    /**
     * @function getStats
     * @instance
     * @desc Get stats of underlying PeerConnection.
     * @memberof Owt.Conference.Subscription
     * @returns {Promise<RTCStatsReport, Error>}
     */

    _this.getStats = getStats;
    /**
     * @function mute
     * @instance
     * @desc Stop reeving data from remote endpoint.
     * @memberof Owt.Conference.Subscription
     * @param {Owt.Base.TrackKind } kind Kind of tracks to be muted.
     * @returns {Promise<undefined, Error>}
     */

    _this.mute = mute;
    /**
     * @function unmute
     * @instance
     * @desc Continue reeving data from remote endpoint.
     * @memberof Owt.Conference.Subscription
     * @param {Owt.Base.TrackKind } kind Kind of tracks to be unmuted.
     * @returns {Promise<undefined, Error>}
     */

    _this.unmute = unmute;
    /**
     * @function applyOptions
     * @instance
     * @desc Update subscription with given options.
     * @memberof Owt.Conference.Subscription
     * @param {Owt.Conference.SubscriptionUpdateOptions } options Subscription update options.
     * @returns {Promise<undefined, Error>}
     */

    _this.applyOptions = applyOptions; // Track is not defined in server protocol. So these IDs are equal to their
    // stream's ID at this time.

    _this._audioTrackId = undefined;
    _this._videoTrackId = undefined;
    return _this;
  }

  return Subscription;
}(_event.EventDispatcher);

exports.Subscription = Subscription;

},{"../base/event.js":25,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":15}],46:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P2P = exports.Conference = exports.Base = void 0;

var base = _interopRequireWildcard(require("./base/export.js"));

var p2p = _interopRequireWildcard(require("./p2p/export.js"));

var conference = _interopRequireWildcard(require("./conference/export.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Base objects for both P2P and conference.
 * @namespace Owt.Base
 */
var Base = base;
/**
 * P2P WebRTC connections.
 * @namespace Owt.P2P
 */

exports.Base = Base;
var P2P = p2p;
/**
 * WebRTC connections with conference server.
 * @namespace Owt.Conference
 */

exports.P2P = P2P;
var Conference = conference;
exports.Conference = Conference;

},{"./base/export.js":26,"./conference/export.js":38,"./p2p/export.js":48,"@babel/runtime/helpers/typeof":18}],47:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errors = exports.P2PError = void 0;
exports.getErrorByCode = getErrorByCode;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var errors = {
  // 2100-2999 for P2P errors
  // 2100-2199 for connection errors
  // 2100-2109 for server errors
  P2P_CONN_SERVER_UNKNOWN: {
    code: 2100,
    message: 'Server unknown error.'
  },
  P2P_CONN_SERVER_UNAVAILABLE: {
    code: 2101,
    message: 'Server is unavaliable.'
  },
  P2P_CONN_SERVER_BUSY: {
    code: 2102,
    message: 'Server is too busy.'
  },
  P2P_CONN_SERVER_NOT_SUPPORTED: {
    code: 2103,
    message: 'Method has not been supported by server.'
  },
  // 2110-2119 for client errors
  P2P_CONN_CLIENT_UNKNOWN: {
    code: 2110,
    message: 'Client unknown error.'
  },
  P2P_CONN_CLIENT_NOT_INITIALIZED: {
    code: 2111,
    message: 'Connection is not initialized.'
  },
  // 2120-2129 for authentication errors
  P2P_CONN_AUTH_UNKNOWN: {
    code: 2120,
    message: 'Authentication unknown error.'
  },
  P2P_CONN_AUTH_FAILED: {
    code: 2121,
    message: 'Wrong username or token.'
  },
  // 2200-2299 for message transport errors
  P2P_MESSAGING_TARGET_UNREACHABLE: {
    code: 2201,
    message: 'Remote user cannot be reached.'
  },
  P2P_CLIENT_DENIED: {
    code: 2202,
    message: 'User is denied.'
  },
  // 2301-2399 for chat room errors
  // 2401-2499 for client errors
  P2P_CLIENT_UNKNOWN: {
    code: 2400,
    message: 'Unknown errors.'
  },
  P2P_CLIENT_UNSUPPORTED_METHOD: {
    code: 2401,
    message: 'This method is unsupported in current browser.'
  },
  P2P_CLIENT_ILLEGAL_ARGUMENT: {
    code: 2402,
    message: 'Illegal argument.'
  },
  P2P_CLIENT_INVALID_STATE: {
    code: 2403,
    message: 'Invalid peer state.'
  },
  P2P_CLIENT_NOT_ALLOWED: {
    code: 2404,
    message: 'Remote user is not allowed.'
  },
  // 2501-2599 for WebRTC erros.
  P2P_WEBRTC_UNKNOWN: {
    code: 2500,
    message: 'WebRTC error.'
  },
  P2P_WEBRTC_SDP: {
    code: 2502,
    message: 'SDP error.'
  }
};
/**
 * @function getErrorByCode
 * @desc Get error object by error code.
 * @param {string} errorCode Error code.
 * @return {Owt.P2P.Error} Error object
 * @private
 */

exports.errors = errors;

function getErrorByCode(errorCode) {
  var codeErrorMap = {
    2100: errors.P2P_CONN_SERVER_UNKNOWN,
    2101: errors.P2P_CONN_SERVER_UNAVAILABLE,
    2102: errors.P2P_CONN_SERVER_BUSY,
    2103: errors.P2P_CONN_SERVER_NOT_SUPPORTED,
    2110: errors.P2P_CONN_CLIENT_UNKNOWN,
    2111: errors.P2P_CONN_CLIENT_NOT_INITIALIZED,
    2120: errors.P2P_CONN_AUTH_UNKNOWN,
    2121: errors.P2P_CONN_AUTH_FAILED,
    2201: errors.P2P_MESSAGING_TARGET_UNREACHABLE,
    2400: errors.P2P_CLIENT_UNKNOWN,
    2401: errors.P2P_CLIENT_UNSUPPORTED_METHOD,
    2402: errors.P2P_CLIENT_ILLEGAL_ARGUMENT,
    2403: errors.P2P_CLIENT_INVALID_STATE,
    2404: errors.P2P_CLIENT_NOT_ALLOWED,
    2500: errors.P2P_WEBRTC_UNKNOWN,
    2501: errors.P2P_WEBRTC_SDP
  };
  return codeErrorMap[errorCode];
}
/**
 * @class P2PError
 * @classDesc The P2PError object represents an error in P2P mode.
 * @memberOf Owt.P2P
 * @hideconstructor
 */


var P2PError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(P2PError, _Error);

  var _super = _createSuper(P2PError);

  // eslint-disable-next-line require-jsdoc
  function P2PError(error, message) {
    var _this;

    (0, _classCallCheck2["default"])(this, P2PError);
    _this = _super.call(this, message);

    if (typeof error === 'number') {
      _this.code = error;
    } else {
      _this.code = error.code;
    }

    return _this;
  }

  return P2PError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.P2PError = P2PError;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":15,"@babel/runtime/helpers/wrapNativeSuper":20}],48:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "P2PClient", {
  enumerable: true,
  get: function get() {
    return _p2pclient["default"];
  }
});
Object.defineProperty(exports, "P2PError", {
  enumerable: true,
  get: function get() {
    return _error.P2PError;
  }
});

var _p2pclient = _interopRequireDefault(require("./p2pclient.js"));

var _error = require("./error.js");

},{"./error.js":47,"./p2pclient.js":49,"@babel/runtime/helpers/interopRequireDefault":10}],49:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* global Map, Promise */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _logger = _interopRequireDefault(require("../base/logger.js"));

var _event = require("../base/event.js");

var ErrorModule = _interopRequireWildcard(require("./error.js"));

var _peerconnectionChannel = _interopRequireDefault(require("./peerconnection-channel.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ConnectionState = {
  READY: 1,
  CONNECTING: 2,
  CONNECTED: 3
};
/* eslint-disable no-unused-vars */

/**
 * @class P2PClientConfiguration
 * @classDesc Configuration for P2PClient.
 * @memberOf Owt.P2P
 * @hideconstructor
 */

var P2PClientConfiguration = function P2PClientConfiguration() {
  /**
   * @member {?Array<Owt.Base.AudioEncodingParameters>} audioEncoding
   * @instance
   * @desc Encoding parameters for publishing audio tracks.
   * @memberof Owt.P2P.P2PClientConfiguration
   */
  this.audioEncoding = undefined;
  /**
   * @member {?Array<Owt.Base.VideoEncodingParameters>} videoEncoding
   * @instance
   * @desc Encoding parameters for publishing video tracks.
   * @memberof Owt.P2P.P2PClientConfiguration
   */

  this.videoEncoding = undefined;
  /**
   * @member {?RTCConfiguration} rtcConfiguration
   * @instance
   * @memberof Owt.P2P.P2PClientConfiguration
   * @desc It will be used for creating PeerConnection.
   * @see {@link https://www.w3.org/TR/webrtc/#rtcconfiguration-dictionary|RTCConfiguration Dictionary of WebRTC 1.0}.
   * @example
   * // Following object can be set to p2pClientConfiguration.rtcConfiguration.
   * {
   *   iceServers: [{
   *      urls: "stun:example.com:3478"
   *   }, {
   *     urls: [
   *       "turn:example.com:3478?transport=udp",
   *       "turn:example.com:3478?transport=tcp"
   *     ],
   *      credential: "password",
   *      username: "username"
   *   }
   * }
   */

  this.rtcConfiguration = undefined;
};
/* eslint-enable no-unused-vars */

/**
 * @class P2PClient
 * @classDesc The P2PClient handles PeerConnections between different clients.
 * Events:
 *
 * | Event Name            | Argument Type    | Fired when       |
 * | --------------------- | ---------------- | ---------------- |
 * | streamadded           | StreamEvent      | A new stream is sent from remote endpoint. |
 * | messagereceived       | MessageEvent     | A new message is received. |
 * | serverdisconnected    | OwtEvent         | Disconnected from signaling server. |
 *
 * @memberof Owt.P2P
 * @extends Owt.Base.EventDispatcher
 * @constructor
 * @param {?Owt.P2P.P2PClientConfiguration } configuration Configuration for Owt.P2P.P2PClient.
 * @param {Object} signalingChannel A channel for sending and receiving signaling messages.
 */


var P2PClient = function P2PClient(configuration, signalingChannel) {
  Object.setPrototypeOf(this, new _event.EventDispatcher());
  var config = configuration;
  var signaling = signalingChannel;
  var channels = new Map(); // Map of PeerConnectionChannels.

  var connectionIds = new Map(); // Key is remote user ID, value is current session ID.

  var self = this;
  var state = ConnectionState.READY;
  var myId;

  signaling.onMessage = function (origin, message) {
    _logger["default"].debug('Received signaling message from ' + origin + ': ' + message);

    var data = JSON.parse(message);
    var connectionId = data.connectionId;

    if (self.allowedRemoteIds.indexOf(origin) < 0) {
      sendSignalingMessage(origin, data.connectionId, 'chat-closed', ErrorModule.errors.P2P_CLIENT_DENIED);
      return;
    }

    if (connectionIds.has(origin) && connectionIds.get(origin) !== connectionId && !isPolitePeer(origin)) {
      _logger["default"].warning( // eslint-disable-next-line max-len
      'Collision detected, ignore this message because current endpoint is impolite peer.');

      return;
    }

    if (data.type === 'chat-closed') {
      if (channels.has(origin)) {
        getOrCreateChannel(origin, connectionId).onMessage(data);
        channels["delete"](origin);
      }

      return;
    }

    getOrCreateChannel(origin, connectionId).onMessage(data);
  };

  signaling.onServerDisconnected = function () {
    state = ConnectionState.READY;
    self.dispatchEvent(new _event.OwtEvent('serverdisconnected'));
  };
  /**
   * @member {array} allowedRemoteIds
   * @memberof Owt.P2P.P2PClient
   * @instance
   * @desc Only allowed remote endpoint IDs are able to publish stream or send message to current endpoint. Removing an ID from allowedRemoteIds does stop existing connection with certain endpoint. Please call stop to stop the PeerConnection.
   */


  this.allowedRemoteIds = [];
  /**
   * @function connect
   * @instance
   * @desc Connect to signaling server. Since signaling can be customized, this method does not define how a token looks like. SDK passes token to signaling channel without changes.
   * @memberof Owt.P2P.P2PClient
   * @param {string} token A token for connecting to signaling server. The format of this token depends on signaling server's requirement.
   * @return {Promise<object, Error>} It returns a promise resolved with an object returned by signaling channel once signaling channel reports connection has been established.
   */

  this.connect = function (token) {
    if (state === ConnectionState.READY) {
      state = ConnectionState.CONNECTING;
    } else {
      _logger["default"].warning('Invalid connection state: ' + state);

      return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_INVALID_STATE));
    }

    return new Promise(function (resolve, reject) {
      signaling.connect(token).then(function (id) {
        myId = id;
        state = ConnectionState.CONNECTED;
        resolve(myId);
      }, function (errCode) {
        reject(new ErrorModule.P2PError(ErrorModule.getErrorByCode(errCode)));
      });
    });
  };
  /**
   * @function disconnect
   * @instance
   * @desc Disconnect from the signaling channel. It stops all existing sessions with remote endpoints.
   * @memberof Owt.P2P.P2PClient
   */


  this.disconnect = function () {
    if (state == ConnectionState.READY) {
      return;
    }

    channels.forEach(function (channel) {
      channel.stop();
    });
    channels.clear();
    signaling.disconnect();
  };
  /**
   * @function publish
   * @instance
   * @desc Publish a stream to a remote endpoint.
   * @memberof Owt.P2P.P2PClient
   * @param {string} remoteId Remote endpoint's ID.
   * @param {Owt.Base.LocalStream} stream An Owt.Base.LocalStream to be published.
   * @return {Promise<Owt.Base.Publication, Error>} A promised that resolves when remote side received the certain stream. However, remote endpoint may not display this stream, or ignore it.
   */


  this.publish = function (remoteId, stream) {
    if (state !== ConnectionState.CONNECTED) {
      return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_INVALID_STATE, 'P2P Client is not connected to signaling channel.'));
    }

    if (this.allowedRemoteIds.indexOf(remoteId) < 0) {
      return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_NOT_ALLOWED));
    }

    return Promise.resolve(getOrCreateChannel(remoteId).publish(stream));
  };
  /**
   * @function send
   * @instance
   * @desc Send a message to remote endpoint.
   * @memberof Owt.P2P.P2PClient
   * @param {string} remoteId Remote endpoint's ID.
   * @param {string} message Message to be sent. It should be a string.
   * @return {Promise<undefined, Error>} It returns a promise resolved when remote endpoint received certain message.
   */


  this.send = function (remoteId, message) {
    if (state !== ConnectionState.CONNECTED) {
      return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_INVALID_STATE, 'P2P Client is not connected to signaling channel.'));
    }

    if (this.allowedRemoteIds.indexOf(remoteId) < 0) {
      return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_NOT_ALLOWED));
    }

    return Promise.resolve(getOrCreateChannel(remoteId).send(message));
  };
  /**
   * @function stop
   * @instance
   * @desc Clean all resources associated with given remote endpoint. It may include RTCPeerConnection, RTCRtpTransceiver and RTCDataChannel. It still possible to publish a stream, or send a message to given remote endpoint after stop.
   * @memberof Owt.P2P.P2PClient
   * @param {string} remoteId Remote endpoint's ID.
   * @return {undefined}
   */


  this.stop = function (remoteId) {
    if (!channels.has(remoteId)) {
      _logger["default"].warning('No PeerConnection between current endpoint and specific remote ' + 'endpoint.');

      return;
    }

    channels.get(remoteId).stop();
    channels["delete"](remoteId);
  };
  /**
   * @function getStats
   * @instance
   * @desc Get stats of underlying PeerConnection.
   * @memberof Owt.P2P.P2PClient
   * @param {string} remoteId Remote endpoint's ID.
   * @return {Promise<RTCStatsReport, Error>} It returns a promise resolved with an RTCStatsReport or reject with an Error if there is no connection with specific user.
   */


  this.getStats = function (remoteId) {
    if (!channels.has(remoteId)) {
      return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_INVALID_STATE, 'No PeerConnection between current endpoint and specific remote ' + 'endpoint.'));
    }

    return channels.get(remoteId).getStats();
  };
  /**
   * @function getPeerConnection
   * @instance
   * @desc Get underlying PeerConnection.
   * @memberof Owt.P2P.P2PClient
   * @param {string} remoteId Remote endpoint's ID.
   * @return {Promise<RTCPeerConnection, Error>} It returns a promise resolved
   *     with an RTCPeerConnection or reject with an Error if there is no
   *     connection with specific user.
   * @private
   */


  this.getPeerConnection = function (remoteId) {
    if (!channels.has(remoteId)) {
      return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_INVALID_STATE, 'No PeerConnection between current endpoint and specific remote ' + 'endpoint.'));
    }

    return channels.get(remoteId).peerConnection;
  };

  var sendSignalingMessage = function sendSignalingMessage(remoteId, connectionId, type, message) {
    var msg = {
      type: type,
      connectionId: connectionId
    };

    if (message) {
      msg.data = message;
    }

    return signaling.send(remoteId, JSON.stringify(msg))["catch"](function (e) {
      if (typeof e === 'number') {
        throw ErrorModule.getErrorByCode(e);
      }
    });
  }; // Return true if current endpoint is an impolite peer, which controls the
  // session.


  var isPolitePeer = function isPolitePeer(remoteId) {
    return myId < remoteId;
  }; // If a connection with remoteId with a different session ID exists, it will
  // be stopped and a new connection will be created.


  var getOrCreateChannel = function getOrCreateChannel(remoteId, connectionId) {
    // If `connectionId` is not defined, use the latest one or generate a new
    // one.
    if (!connectionId && connectionIds.has(remoteId)) {
      connectionId = connectionIds.get(remoteId);
    } // Delete old channel if connection doesn't match.


    if (connectionIds.has(remoteId) && connectionIds.get(remoteId) != connectionId) {
      self.stop(remoteId);
    }

    if (!connectionId) {
      var connectionIdLimit = 100000;
      connectionId = Math.round(Math.random() * connectionIdLimit);
    }

    connectionIds.set(remoteId, connectionId);

    if (!channels.has(remoteId)) {
      // Construct an signaling sender/receiver for P2PPeerConnection.
      var signalingForChannel = Object.create(_event.EventDispatcher);
      signalingForChannel.sendSignalingMessage = sendSignalingMessage;
      var pcc = new _peerconnectionChannel["default"](config, myId, remoteId, connectionId, signalingForChannel);
      pcc.addEventListener('streamadded', function (streamEvent) {
        self.dispatchEvent(streamEvent);
      });
      pcc.addEventListener('messagereceived', function (messageEvent) {
        self.dispatchEvent(messageEvent);
      });
      pcc.addEventListener('ended', function () {
        if (channels.has(remoteId)) {
          channels["delete"](remoteId);
        }

        connectionIds["delete"](remoteId);
      });
      channels.set(remoteId, pcc);
    }

    return channels.get(remoteId);
  };
};

var _default = P2PClient;
exports["default"] = _default;

},{"../base/event.js":25,"../base/logger.js":27,"./error.js":47,"./peerconnection-channel.js":50,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/typeof":18}],50:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
// This file doesn't have public APIs.

/* eslint-disable valid-jsdoc */

/* eslint-disable require-jsdoc */

/* global Event, Map, Promise, RTCIceCandidate, navigator */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.P2PPeerConnectionChannelEvent = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _logger = _interopRequireDefault(require("../base/logger.js"));

var _event = require("../base/event.js");

var _publication = require("../base/publication.js");

var Utils = _interopRequireWildcard(require("../base/utils.js"));

var ErrorModule = _interopRequireWildcard(require("./error.js"));

var StreamModule = _interopRequireWildcard(require("../base/stream.js"));

var SdpUtils = _interopRequireWildcard(require("../base/sdputils.js"));

var _transport = require("../base/transport.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class P2PPeerConnectionChannelEvent
 * @desc Event for Stream.
 * @memberOf Owt.P2P
 * @private
 * */
var P2PPeerConnectionChannelEvent = /*#__PURE__*/function (_Event) {
  (0, _inherits2["default"])(P2PPeerConnectionChannelEvent, _Event);

  var _super = _createSuper(P2PPeerConnectionChannelEvent);

  /* eslint-disable-next-line require-jsdoc */
  function P2PPeerConnectionChannelEvent(init) {
    var _this;

    (0, _classCallCheck2["default"])(this, P2PPeerConnectionChannelEvent);
    _this = _super.call(this, init);
    _this.stream = init.stream;
    return _this;
  }

  return P2PPeerConnectionChannelEvent;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Event));

exports.P2PPeerConnectionChannelEvent = P2PPeerConnectionChannelEvent;
var DataChannelLabel = {
  MESSAGE: 'message',
  FILE: 'file'
};
var SignalingType = {
  DENIED: 'chat-denied',
  CLOSED: 'chat-closed',
  NEGOTIATION_NEEDED: 'chat-negotiation-needed',
  TRACK_SOURCES: 'chat-track-sources',
  STREAM_INFO: 'chat-stream-info',
  SDP: 'chat-signal',
  TRACKS_ADDED: 'chat-tracks-added',
  TRACKS_REMOVED: 'chat-tracks-removed',
  DATA_RECEIVED: 'chat-data-received',
  UA: 'chat-ua'
};
var sysInfo = Utils.sysInfo();
/**
 * @class P2PPeerConnectionChannel
 * @desc A P2PPeerConnectionChannel manages a PeerConnection object, handles all
 * interactions between this endpoint (local) and a remote endpoint. Only one
 * PeerConnectionChannel is alive for a local - remote endpoint pair at any
 * given time.
 * @memberOf Owt.P2P
 * @private
 */

var P2PPeerConnectionChannel = /*#__PURE__*/function (_EventDispatcher) {
  (0, _inherits2["default"])(P2PPeerConnectionChannel, _EventDispatcher);

  var _super2 = _createSuper(P2PPeerConnectionChannel);

  // |signaling| is an object has a method |sendSignalingMessage|.

  /* eslint-disable-next-line require-jsdoc */
  function P2PPeerConnectionChannel(config, localId, remoteId, connectionId, signaling) {
    var _this2;

    (0, _classCallCheck2["default"])(this, P2PPeerConnectionChannel);
    _this2 = _super2.call(this);
    _this2._config = config;
    _this2._remoteId = remoteId;
    _this2._connectionId = connectionId;
    _this2._signaling = signaling;
    _this2._pc = null;
    _this2._publishedStreams = new Map(); // Key is streams published, value is its publication.

    _this2._pendingStreams = []; // Streams going to be added to PeerConnection.

    _this2._publishingStreams = []; // Streams have been added to PeerConnection, but does not receive ack from remote side.

    _this2._pendingUnpublishStreams = []; // Streams going to be removed.
    // Key is MediaStream's ID, value is an object {source:{audio:string, video:string}, attributes: object, stream: RemoteStream, mediaStream: MediaStream}. `stream` and `mediaStream` will be set when `track` event is fired on `RTCPeerConnection`. `mediaStream` will be `null` after `streamadded` event is fired on `P2PClient`. Other propertes will be set upon `STREAM_INFO` event from signaling channel.

    _this2._remoteStreamInfo = new Map();
    _this2._remoteStreams = [];
    _this2._remoteTrackSourceInfo = new Map(); // Key is MediaStreamTrack's ID, value is source info.

    _this2._publishPromises = new Map(); // Key is MediaStream's ID, value is an object has |resolve| and |reject|.

    _this2._unpublishPromises = new Map(); // Key is MediaStream's ID, value is an object has |resolve| and |reject|.

    _this2._publishingStreamTracks = new Map(); // Key is MediaStream's ID, value is an array of the ID of its MediaStreamTracks that haven't been acked.

    _this2._publishedStreamTracks = new Map(); // Key is MediaStream's ID, value is an array of the ID of its MediaStreamTracks that haven't been removed.

    _this2._isNegotiationNeeded = false;
    _this2._remoteSideSupportsRemoveStream = true;
    _this2._remoteSideIgnoresDataChannelAcks = false;
    _this2._remoteIceCandidates = [];
    _this2._dataChannels = new Map(); // Key is data channel's label, value is a RTCDataChannel.

    _this2._pendingMessages = [];
    _this2._dataSeq = 1; // Sequence number for data channel messages.

    _this2._sendDataPromises = new Map(); // Key is data sequence number, value is an object has |resolve| and |reject|.

    _this2._addedTrackIds = []; // Tracks that have been added after receiving remote SDP but before connection is established. Draining these messages when ICE connection state is connected.

    _this2._isPolitePeer = localId < remoteId;
    _this2._settingLocalSdp = false;
    _this2._settingRemoteSdp = false;
    _this2._disposed = false;

    _this2._createPeerConnection();

    _this2._sendUa(sysInfo);

    return _this2;
  }

  (0, _createClass2["default"])(P2PPeerConnectionChannel, [{
    key: "peerConnection",
    get: function get() {
      return this._pc;
    }
    /**
     * @function publish
     * @desc Publish a stream to the remote endpoint.
     * @private
     */

  }, {
    key: "publish",
    value: function publish(stream) {
      var _this3 = this;

      if (!(stream instanceof StreamModule.LocalStream)) {
        return Promise.reject(new TypeError('Invalid stream.'));
      }

      if (this._publishedStreams.has(stream)) {
        return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_ILLEGAL_ARGUMENT, 'Duplicated stream.'));
      }

      if (this._areAllTracksEnded(stream.mediaStream)) {
        return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_INVALID_STATE, 'All tracks are ended.'));
      }

      return this._sendStreamInfo(stream).then(function () {
        return new Promise(function (resolve, reject) {
          _this3._addStream(stream.mediaStream);

          _this3._publishingStreams.push(stream);

          var trackIds = Array.from(stream.mediaStream.getTracks(), function (track) {
            return track.id;
          });

          _this3._publishingStreamTracks.set(stream.mediaStream.id, trackIds);

          _this3._publishPromises.set(stream.mediaStream.id, {
            resolve: resolve,
            reject: reject
          });
        });
      });
    }
    /**
     * @function send
     * @desc Send a message to the remote endpoint.
     * @private
     */

  }, {
    key: "send",
    value: function send(message) {
      var _this4 = this;

      if (!(typeof message === 'string')) {
        return Promise.reject(new TypeError('Invalid message.'));
      }

      var data = {
        id: this._dataSeq++,
        data: message
      };

      if (!this._dataChannels.has(DataChannelLabel.MESSAGE)) {
        this._createDataChannel(DataChannelLabel.MESSAGE);
      }

      var dc = this._dataChannels.get(DataChannelLabel.MESSAGE);

      if (dc.readyState === 'open') {
        this._dataChannels.get(DataChannelLabel.MESSAGE).send(JSON.stringify(data));

        return Promise.resolve();
      } else {
        this._pendingMessages.push(data);

        var promise = new Promise(function (resolve, reject) {
          _this4._sendDataPromises.set(data.id, {
            resolve: resolve,
            reject: reject
          });
        });
        return promise;
      }
    }
    /**
     * @function stop
     * @desc Stop the connection with remote endpoint.
     * @private
     */

  }, {
    key: "stop",
    value: function stop() {
      this._stop(undefined, true);
    }
    /**
     * @function getStats
     * @desc Get stats for a specific MediaStream.
     * @private
     */

  }, {
    key: "getStats",
    value: function getStats(mediaStream) {
      var _this5 = this;

      if (this._pc) {
        if (mediaStream === undefined) {
          return this._pc.getStats();
        } else {
          var tracksStatsReports = [];
          return Promise.all([mediaStream.getTracks().forEach(function (track) {
            _this5._getStats(track, tracksStatsReports);
          })]).then(function () {
            return new Promise(function (resolve, reject) {
              resolve(tracksStatsReports);
            });
          });
        }
      } else {
        return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_INVALID_STATE));
      }
    }
  }, {
    key: "_getStats",
    value: function _getStats(mediaStreamTrack, reportsResult) {
      return this._pc.getStats(mediaStreamTrack).then(function (statsReport) {
        reportsResult.push(statsReport);
      });
    }
    /**
     * @function _addStream
     * @desc Create RTCRtpSenders for all tracks in the stream.
     * @private
     */

  }, {
    key: "_addStream",
    value: function _addStream(stream) {
      var _iterator = _createForOfIteratorHelper(stream.getTracks()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var track = _step.value;

          this._pc.addTransceiver(track, {
            direction: 'sendonly',
            streams: [stream]
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * @function onMessage
     * @desc This method is called by P2PClient when there is new signaling message arrived.
     * @private
     */

  }, {
    key: "onMessage",
    value: function onMessage(message) {
      this._SignalingMesssageHandler(message);
    }
  }, {
    key: "_sendSdp",
    value: function _sendSdp(sdp) {
      return this._signaling.sendSignalingMessage(this._remoteId, this._connectionId, SignalingType.SDP, sdp);
    }
  }, {
    key: "_sendUa",
    value: function _sendUa(sysInfo) {
      var ua = {
        sdk: sysInfo.sdk,
        capabilities: sysInfo.capabilities
      };

      this._sendSignalingMessage(SignalingType.UA, ua);
    }
  }, {
    key: "_sendSignalingMessage",
    value: function _sendSignalingMessage(type, message) {
      return this._signaling.sendSignalingMessage(this._remoteId, this._connectionId, type, message);
    }
  }, {
    key: "_SignalingMesssageHandler",
    value: function _SignalingMesssageHandler(message) {
      _logger["default"].debug('Channel received message: ' + message);

      switch (message.type) {
        case SignalingType.UA:
          this._handleRemoteCapability(message.data);

          break;

        case SignalingType.TRACK_SOURCES:
          this._trackSourcesHandler(message.data);

          break;

        case SignalingType.STREAM_INFO:
          this._streamInfoHandler(message.data);

          break;

        case SignalingType.SDP:
          this._sdpHandler(message.data);

          break;

        case SignalingType.TRACKS_ADDED:
          this._tracksAddedHandler(message.data);

          break;

        case SignalingType.TRACKS_REMOVED:
          this._tracksRemovedHandler(message.data);

          break;

        case SignalingType.DATA_RECEIVED:
          this._dataReceivedHandler(message.data);

          break;

        case SignalingType.CLOSED:
          this._chatClosedHandler(message.data);

          break;

        default:
          _logger["default"].error('Invalid signaling message received. Type: ' + message.type);

      }
    }
    /**
     * @function _tracksAddedHandler
     * @desc Handle track added event from remote side.
     * @private
     */

  }, {
    key: "_tracksAddedHandler",
    value: function _tracksAddedHandler(ids) {
      var _this6 = this;

      // Currently, |ids| contains all track IDs of a MediaStream. Following algorithm also handles |ids| is a part of a MediaStream's tracks.
      var _iterator2 = _createForOfIteratorHelper(ids),
          _step2;

      try {
        var _loop = function _loop() {
          var id = _step2.value;

          // It could be a problem if there is a track published with different MediaStreams, moving to mid.
          _this6._publishingStreamTracks.forEach(function (mediaTrackIds, mediaStreamId) {
            for (var i = 0; i < mediaTrackIds.length; i++) {
              if (mediaTrackIds[i] === id) {
                // Move this track from publishing tracks to published tracks.
                if (!_this6._publishedStreamTracks.has(mediaStreamId)) {
                  _this6._publishedStreamTracks.set(mediaStreamId, []);
                }

                _this6._publishedStreamTracks.get(mediaStreamId).push(mediaTrackIds[i]);

                mediaTrackIds.splice(i, 1);
              } // Resolving certain publish promise when remote endpoint received all tracks of a MediaStream.


              if (mediaTrackIds.length == 0) {
                var _ret = function () {
                  if (!_this6._publishPromises.has(mediaStreamId)) {
                    _logger["default"].warning('Cannot find the promise for publishing ' + mediaStreamId);

                    return "continue";
                  }

                  var targetStreamIndex = _this6._publishingStreams.findIndex(function (element) {
                    return element.mediaStream.id == mediaStreamId;
                  });

                  var targetStream = _this6._publishingStreams[targetStreamIndex];

                  _this6._publishingStreams.splice(targetStreamIndex, 1); // Set transceivers for Publication.


                  var transport = new _transport.TransportSettings(_transport.TransportType.WEBRTC, undefined);
                  transport.rtpTransceivers = [];

                  var _iterator3 = _createForOfIteratorHelper(_this6._pc.getTransceivers()),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var _transceiver$sender;

                      var transceiver = _step3.value;

                      if (((_transceiver$sender = transceiver.sender) === null || _transceiver$sender === void 0 ? void 0 : _transceiver$sender.track) in _this6._publishedStreamTracks.get(mediaStreamId)) {
                        transport.rtpTransceivers.push(transceiver);
                      }
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }

                  var publication = new _publication.Publication(id, transport, function () {
                    _this6._unpublish(targetStream).then(function () {
                      publication.dispatchEvent(new _event.OwtEvent('ended'));
                    }, function (err) {
                      // Use debug mode because this error usually doesn't block stopping a publication.
                      _logger["default"].debug('Something wrong happened during stopping a ' + 'publication. ' + err.message);
                    });
                  }, function () {
                    if (!targetStream || !targetStream.mediaStream) {
                      return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_INVALID_STATE, 'Publication is not available.'));
                    }

                    return _this6.getStats(targetStream.mediaStream);
                  });

                  _this6._publishedStreams.set(targetStream, publication);

                  _this6._publishPromises.get(mediaStreamId).resolve(publication);

                  _this6._publishPromises["delete"](mediaStreamId);
                }();

                if (_ret === "continue") continue;
              }
            }
          });
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * @function _tracksRemovedHandler
     * @desc Handle track removed event from remote side.
     * @private
     */

  }, {
    key: "_tracksRemovedHandler",
    value: function _tracksRemovedHandler(ids) {
      var _this7 = this;

      // Currently, |ids| contains all track IDs of a MediaStream. Following algorithm also handles |ids| is a part of a MediaStream's tracks.
      var _iterator4 = _createForOfIteratorHelper(ids),
          _step4;

      try {
        var _loop2 = function _loop2() {
          var id = _step4.value;

          // It could be a problem if there is a track published with different MediaStreams.
          _this7._publishedStreamTracks.forEach(function (mediaTrackIds, mediaStreamId) {
            for (var i = 0; i < mediaTrackIds.length; i++) {
              if (mediaTrackIds[i] === id) {
                mediaTrackIds.splice(i, 1);
              }
            }
          });
        };

        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * @function _dataReceivedHandler
     * @desc Handle data received event from remote side.
     * @private
     */

  }, {
    key: "_dataReceivedHandler",
    value: function _dataReceivedHandler(id) {
      if (!this._sendDataPromises.has(id)) {
        _logger["default"].warning('Received unknown data received message. ID: ' + id);

        return;
      } else {
        this._sendDataPromises.get(id).resolve();
      }
    }
    /**
     * @function _sdpHandler
     * @desc Handle SDP received event from remote side.
     * @private
     */

  }, {
    key: "_sdpHandler",
    value: function _sdpHandler(sdp) {
      if (sdp.type === 'offer') {
        this._onOffer(sdp);
      } else if (sdp.type === 'answer') {
        this._onAnswer(sdp);
      } else if (sdp.type === 'candidates') {
        this._onRemoteIceCandidate(sdp);
      }
    }
    /**
     * @function _trackSourcesHandler
     * @desc Received track source information from remote side.
     * @private
     */

  }, {
    key: "_trackSourcesHandler",
    value: function _trackSourcesHandler(data) {
      var _iterator5 = _createForOfIteratorHelper(data),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var info = _step5.value;

          this._remoteTrackSourceInfo.set(info.id, info.source);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    /**
     * @function _streamInfoHandler
     * @desc Received stream information from remote side.
     * @private
     */

  }, {
    key: "_streamInfoHandler",
    value: function _streamInfoHandler(data) {
      if (!data) {
        _logger["default"].warning('Unexpected stream info.');

        return;
      }

      this._remoteStreamInfo.set(data.id, {
        source: data.source,
        attributes: data.attributes,
        stream: null,
        mediaStream: null,
        trackIds: data.tracks // Track IDs may not match at sender and receiver sides. Keep it for legacy porposes.

      });
    }
    /**
     * @function _chatClosedHandler
     * @desc Received chat closed event from remote side.
     * @private
     */

  }, {
    key: "_chatClosedHandler",
    value: function _chatClosedHandler(data) {
      this._disposed = true;

      this._stop(data, false);
    }
  }, {
    key: "_onOffer",
    value: function _onOffer(sdp) {
      var _this8 = this;

      _logger["default"].debug('About to set remote description. Signaling state: ' + this._pc.signalingState);

      if (this._pc.signalingState !== 'stable' || this._settingLocalSdp) {
        if (this._isPolitePeer) {
          _logger["default"].debug('Rollback.');

          this._settingLocalSdp = true; // setLocalDescription(rollback) is not supported on Safari right now.
          // Test case "WebRTC collision should be resolved." is expected to fail.
          // See
          // https://wpt.fyi/results/webrtc/RTCPeerConnection-setLocalDescription-rollback.html?q=webrtc&run_id=5662062321598464&run_id=5756139520131072&run_id=5754637556645888&run_id=5764334049296384.

          this._pc.setLocalDescription().then(function () {
            _this8._settingLocalSdp = false;
          });
        } else {
          _logger["default"].debug('Collision detected. Ignore this offer.');

          return;
        }
      }

      sdp.sdp = this._setRtpSenderOptions(sdp.sdp, this._config);
      var sessionDescription = new RTCSessionDescription(sdp);
      this._settingRemoteSdp = true;

      this._pc.setRemoteDescription(sessionDescription).then(function () {
        _this8._settingRemoteSdp = false;

        _this8._createAndSendAnswer();
      }, function (error) {
        _logger["default"].debug('Set remote description failed. Message: ' + error.message);

        _this8._stop(error, true);
      });
    }
  }, {
    key: "_onAnswer",
    value: function _onAnswer(sdp) {
      var _this9 = this;

      _logger["default"].debug('About to set remote description. Signaling state: ' + this._pc.signalingState);

      sdp.sdp = this._setRtpSenderOptions(sdp.sdp, this._config);
      var sessionDescription = new RTCSessionDescription(sdp);
      this._settingRemoteSdp = true;

      this._pc.setRemoteDescription(new RTCSessionDescription(sessionDescription)).then(function () {
        _logger["default"].debug('Set remote descripiton successfully.');

        _this9._settingRemoteSdp = false;

        _this9._drainPendingMessages();
      }, function (error) {
        _logger["default"].debug('Set remote description failed. Message: ' + error.message);

        _this9._stop(error, true);
      });
    }
  }, {
    key: "_onLocalIceCandidate",
    value: function _onLocalIceCandidate(event) {
      if (event.candidate) {
        this._sendSdp({
          type: 'candidates',
          candidate: event.candidate.candidate,
          sdpMid: event.candidate.sdpMid,
          sdpMLineIndex: event.candidate.sdpMLineIndex
        })["catch"](function (e) {
          _logger["default"].warning('Failed to send candidate.');
        });
      } else {
        _logger["default"].debug('Empty candidate.');
      }
    }
  }, {
    key: "_onRemoteTrackAdded",
    value: function _onRemoteTrackAdded(event) {
      _logger["default"].debug('Remote track added.');

      var _iterator6 = _createForOfIteratorHelper(event.streams),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var stream = _step6.value;

          if (!this._remoteStreamInfo.has(stream.id)) {
            _logger["default"].warning('Missing stream info.');

            return;
          }

          if (!this._remoteStreamInfo.get(stream.id).stream) {
            this._setStreamToRemoteStreamInfo(stream);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      if (this._pc.iceConnectionState === 'connected' || this._pc.iceConnectionState === 'completed') {
        this._checkIceConnectionStateAndFireEvent();
      } else {
        this._addedTrackIds.concat(event.track.id);
      }
    }
  }, {
    key: "_onRemoteStreamAdded",
    value: function _onRemoteStreamAdded(event) {
      _logger["default"].debug('Remote stream added.');

      if (!this._remoteStreamInfo.has(event.stream.id)) {
        _logger["default"].warning('Cannot find source info for stream ' + event.stream.id);

        return;
      }

      if (this._pc.iceConnectionState === 'connected' || this._pc.iceConnectionState === 'completed') {
        this._sendSignalingMessage(SignalingType.TRACKS_ADDED, this._remoteStreamInfo.get(event.stream.id).trackIds);
      } else {
        this._addedTrackIds = this._addedTrackIds.concat(this._remoteStreamInfo.get(event.stream.id).trackIds);
      }

      var audioTrackSource = this._remoteStreamInfo.get(event.stream.id).source.audio;

      var videoTrackSource = this._remoteStreamInfo.get(event.stream.id).source.video;

      var sourceInfo = new StreamModule.StreamSourceInfo(audioTrackSource, videoTrackSource);

      if (Utils.isSafari()) {
        if (!sourceInfo.audio) {
          event.stream.getAudioTracks().forEach(function (track) {
            event.stream.removeTrack(track);
          });
        }

        if (!sourceInfo.video) {
          event.stream.getVideoTracks().forEach(function (track) {
            event.stream.removeTrack(track);
          });
        }
      }

      var attributes = this._remoteStreamInfo.get(event.stream.id).attributes;

      var stream = new StreamModule.RemoteStream(undefined, this._remoteId, event.stream, sourceInfo, attributes);

      if (stream) {
        this._remoteStreams.push(stream);

        var streamEvent = new StreamModule.StreamEvent('streamadded', {
          stream: stream
        });
        this.dispatchEvent(streamEvent);
      }
    }
  }, {
    key: "_onRemoteStreamRemoved",
    value: function _onRemoteStreamRemoved(event) {
      _logger["default"].debug('Remote stream removed.');

      var i = this._remoteStreams.findIndex(function (s) {
        return s.mediaStream.id === event.stream.id;
      });

      if (i !== -1) {
        var stream = this._remoteStreams[i];

        this._streamRemoved(stream);

        this._remoteStreams.splice(i, 1);
      }
    }
  }, {
    key: "_onNegotiationneeded",
    value: function _onNegotiationneeded() {
      if (this._pc.signalingState === 'stable' && !this._pc._settingLocalSdp && !this._settingRemoteSdp) {
        this._doNegotiate();
      } else {
        this._isNegotiationNeeded = true;
      }
    }
  }, {
    key: "_onRemoteIceCandidate",
    value: function _onRemoteIceCandidate(candidateInfo) {
      var candidate = new RTCIceCandidate({
        candidate: candidateInfo.candidate,
        sdpMid: candidateInfo.sdpMid,
        sdpMLineIndex: candidateInfo.sdpMLineIndex
      });

      if (this._pc.remoteDescription && this._pc.remoteDescription.sdp !== '') {
        _logger["default"].debug('Add remote ice candidates.');

        this._pc.addIceCandidate(candidate)["catch"](function (error) {
          _logger["default"].warning('Error processing ICE candidate: ' + error);
        });
      } else {
        _logger["default"].debug('Cache remote ice candidates.');

        this._remoteIceCandidates.push(candidate);
      }
    }
  }, {
    key: "_onSignalingStateChange",
    value: function _onSignalingStateChange(event) {
      _logger["default"].debug('Signaling state changed: ' + this._pc.signalingState);

      if (this._pc.signalingState === 'have-remote-offer' || this._pc.signalingState === 'stable') {
        this._drainPendingRemoteIceCandidates();
      }

      if (this._pc.signalingState === 'stable') {
        this._negotiating = false;

        if (this._isNegotiationNeeded) {
          this._onNegotiationneeded();
        } else {
          this._drainPendingStreams();

          this._drainPendingMessages();
        }
      }
    }
  }, {
    key: "_onIceConnectionStateChange",
    value: function _onIceConnectionStateChange(event) {
      if (event.currentTarget.iceConnectionState === 'closed' || event.currentTarget.iceConnectionState === 'failed') {
        var error = new ErrorModule.P2PError(ErrorModule.errors.P2P_WEBRTC_UNKNOWN, 'ICE connection failed or closed.');

        this._stop(error, true);
      } else if (event.currentTarget.iceConnectionState === 'connected' || event.currentTarget.iceConnectionState === 'completed') {
        this._sendSignalingMessage(SignalingType.TRACKS_ADDED, this._addedTrackIds);

        this._addedTrackIds = [];

        this._checkIceConnectionStateAndFireEvent();
      }
    }
  }, {
    key: "_onDataChannelMessage",
    value: function _onDataChannelMessage(event) {
      var message = JSON.parse(event.data);

      if (!this._remoteSideIgnoresDataChannelAcks) {
        this._sendSignalingMessage(SignalingType.DATA_RECEIVED, message.id);
      }

      var messageEvent = new _event.MessageEvent('messagereceived', {
        message: message.data,
        origin: this._remoteId
      });
      this.dispatchEvent(messageEvent);
    }
  }, {
    key: "_onDataChannelOpen",
    value: function _onDataChannelOpen(event) {
      _logger["default"].debug('Data Channel is opened.');

      if (event.target.label === DataChannelLabel.MESSAGE) {
        _logger["default"].debug('Data channel for messages is opened.');

        this._drainPendingMessages();
      }
    }
  }, {
    key: "_onDataChannelClose",
    value: function _onDataChannelClose(event) {
      _logger["default"].debug('Data Channel is closed.');
    }
  }, {
    key: "_streamRemoved",
    value: function _streamRemoved(stream) {
      if (!this._remoteStreamInfo.has(stream.mediaStream.id)) {
        _logger["default"].warning('Cannot find stream info.');
      }

      this._sendSignalingMessage(SignalingType.TRACKS_REMOVED, this._remoteStreamInfo.get(stream.mediaStream.id).trackIds);

      var event = new _event.OwtEvent('ended');
      stream.dispatchEvent(event);
    }
  }, {
    key: "_createPeerConnection",
    value: function _createPeerConnection() {
      var _this10 = this;

      var pcConfiguration = this._config.rtcConfiguration || {};
      this._pc = new RTCPeerConnection(pcConfiguration);

      this._pc.ontrack = function (event) {
        _this10._onRemoteTrackAdded.apply(_this10, [event]);
      };

      this._pc.onicecandidate = function (event) {
        _this10._onLocalIceCandidate.apply(_this10, [event]);
      };

      this._pc.onsignalingstatechange = function (event) {
        _this10._onSignalingStateChange.apply(_this10, [event]);
      };

      this._pc.ondatachannel = function (event) {
        _logger["default"].debug('On data channel.'); // Save remote created data channel.


        if (!_this10._dataChannels.has(event.channel.label)) {
          _this10._dataChannels.set(event.channel.label, event.channel);

          _logger["default"].debug('Save remote created data channel.');
        }

        _this10._bindEventsToDataChannel(event.channel);
      };

      this._pc.oniceconnectionstatechange = function (event) {
        _this10._onIceConnectionStateChange.apply(_this10, [event]);
      };

      this._pc.onnegotiationneeded = function () {
        _this10._onNegotiationneeded();
      };
    }
  }, {
    key: "_drainPendingStreams",
    value: function _drainPendingStreams() {
      _logger["default"].debug('Draining pending streams.');

      if (this._pc && this._pc.signalingState === 'stable') {
        _logger["default"].debug('Peer connection is ready for draining pending streams.');

        for (var i = 0; i < this._pendingStreams.length; i++) {
          var stream = this._pendingStreams[i];

          this._pendingStreams.shift();

          if (!stream.mediaStream) {
            continue;
          }

          this._addStream(stream.mediaStream);

          _logger["default"].debug('Added stream to peer connection.');

          this._publishingStreams.push(stream);
        }

        this._pendingStreams.length = 0;

        var _iterator7 = _createForOfIteratorHelper(this._pendingUnpublishStreams),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _stream = _step7.value;

            if (!_stream.stream) {
              continue;
            }

            if (typeof this._pc.getTransceivers === 'function' && typeof this._pc.removeTrack === 'function') {
              var _iterator8 = _createForOfIteratorHelper(this._pc.getTransceivers()),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var transceiver = _step8.value;

                  var _iterator9 = _createForOfIteratorHelper(_stream.stream.getTracks()),
                      _step9;

                  try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                      var track = _step9.value;

                      if (transceiver.sender.track == track) {
                        if (transceiver.direction === 'sendonly') {
                          transceiver.stop();
                        } else {
                          this._pc.removeTrack(track);
                        }
                      }
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            } else {
              _logger["default"].debug('getSender or removeTrack is not supported, fallback to ' + 'removeStream.');

              this._pc.removeStream(_stream.stream);
            }

            this._unpublishPromises.get(_stream.stream.id).resolve();

            this._publishedStreams["delete"](_stream);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        this._pendingUnpublishStreams.length = 0;
      }
    }
  }, {
    key: "_drainPendingRemoteIceCandidates",
    value: function _drainPendingRemoteIceCandidates() {
      for (var i = 0; i < this._remoteIceCandidates.length; i++) {
        _logger["default"].debug('Add candidate');

        this._pc.addIceCandidate(this._remoteIceCandidates[i])["catch"](function (error) {
          _logger["default"].warning('Error processing ICE candidate: ' + error);
        });
      }

      this._remoteIceCandidates.length = 0;
    }
  }, {
    key: "_drainPendingMessages",
    value: function _drainPendingMessages() {
      _logger["default"].debug('Draining pending messages.');

      if (this._pendingMessages.length == 0) {
        return;
      }

      var dc = this._dataChannels.get(DataChannelLabel.MESSAGE);

      if (dc && dc.readyState === 'open') {
        for (var i = 0; i < this._pendingMessages.length; i++) {
          _logger["default"].debug('Sending message via data channel: ' + this._pendingMessages[i]);

          dc.send(JSON.stringify(this._pendingMessages[i]));
          var messageId = this._pendingMessages[i].id;

          if (this._sendDataPromises.has(messageId)) {
            this._sendDataPromises.get(messageId).resolve();
          }
        }

        this._pendingMessages.length = 0;
      } else if (this._pc && this._pc.connectionState !== 'closed' && !dc) {
        this._createDataChannel(DataChannelLabel.MESSAGE);
      }
    }
  }, {
    key: "_sendStreamInfo",
    value: function _sendStreamInfo(stream) {
      if (!stream || !stream.mediaStream) {
        return new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_ILLEGAL_ARGUMENT);
      }

      var info = [];
      stream.mediaStream.getTracks().map(function (track) {
        info.push({
          id: track.id,
          source: stream.source[track.kind]
        });
      });
      return Promise.all([this._sendSignalingMessage(SignalingType.TRACK_SOURCES, info), this._sendSignalingMessage(SignalingType.STREAM_INFO, {
        id: stream.mediaStream.id,
        attributes: stream.attributes,
        // Track IDs may not match at sender and receiver sides.
        tracks: Array.from(info, function (item) {
          return item.id;
        }),
        // This is a workaround for Safari. Please use track-sources if possible.
        source: stream.source
      })]);
    }
  }, {
    key: "_handleRemoteCapability",
    value: function _handleRemoteCapability(ua) {
      if (ua.sdk && ua.sdk && ua.sdk.type === 'JavaScript' && ua.runtime && ua.runtime.name === 'Firefox') {
        this._remoteSideSupportsRemoveStream = false;
      } else {
        // Remote side is iOS/Android/C++ which uses Google's WebRTC stack.
        this._remoteSideSupportsRemoveStream = true;
      }

      if (ua.capabilities) {
        this._remoteSideIgnoresDataChannelAcks = ua.capabilities.ignoreDataChannelAcks;
      }
    }
  }, {
    key: "_doNegotiate",
    value: function _doNegotiate() {
      this._createAndSendOffer();
    }
  }, {
    key: "_setCodecOrder",
    value: function _setCodecOrder(sdp) {
      if (this._config.audioEncodings) {
        var audioCodecNames = Array.from(this._config.audioEncodings, function (encodingParameters) {
          return encodingParameters.codec.name;
        });
        sdp = SdpUtils.reorderCodecs(sdp, 'audio', audioCodecNames);
      }

      if (this._config.videoEncodings) {
        var videoCodecNames = Array.from(this._config.videoEncodings, function (encodingParameters) {
          return encodingParameters.codec.name;
        });
        sdp = SdpUtils.reorderCodecs(sdp, 'video', videoCodecNames);
      }

      return sdp;
    }
  }, {
    key: "_setMaxBitrate",
    value: function _setMaxBitrate(sdp, options) {
      if ((0, _typeof2["default"])(options.audioEncodings) === 'object') {
        sdp = SdpUtils.setMaxBitrate(sdp, options.audioEncodings);
      }

      if ((0, _typeof2["default"])(options.videoEncodings) === 'object') {
        sdp = SdpUtils.setMaxBitrate(sdp, options.videoEncodings);
      }

      return sdp;
    }
  }, {
    key: "_setRtpSenderOptions",
    value: function _setRtpSenderOptions(sdp, options) {
      sdp = this._setMaxBitrate(sdp, options);
      return sdp;
    }
  }, {
    key: "_setRtpReceiverOptions",
    value: function _setRtpReceiverOptions(sdp) {
      sdp = this._setCodecOrder(sdp);
      return sdp;
    }
  }, {
    key: "_createAndSendOffer",
    value: function _createAndSendOffer() {
      var _this11 = this;

      if (!this._pc) {
        _logger["default"].error('Peer connection have not been created.');

        return;
      }

      this._isNegotiationNeeded = false;

      this._pc.createOffer().then(function (desc) {
        desc.sdp = _this11._setRtpReceiverOptions(desc.sdp);

        if (_this11._pc.signalingState === 'stable' && !_this11._settingLocalSdp && !_this11._settingRemoteSdp) {
          _this11._settingLocalSdp = true;
          return _this11._pc.setLocalDescription(desc).then(function () {
            _this11._settingLocalSdp = false;
            return _this11._sendSdp(_this11._pc.localDescription);
          });
        }
      })["catch"](function (e) {
        _logger["default"].error(e.message);

        var error = new ErrorModule.P2PError(ErrorModule.errors.P2P_WEBRTC_SDP, e.message);

        _this11._stop(error, true);
      });
    }
  }, {
    key: "_createAndSendAnswer",
    value: function _createAndSendAnswer() {
      var _this12 = this;

      this._drainPendingStreams();

      this._isNegotiationNeeded = false;

      this._pc.createAnswer().then(function (desc) {
        desc.sdp = _this12._setRtpReceiverOptions(desc.sdp);

        _this12._logCurrentAndPendingLocalDescription();

        _this12._settingLocalSdp = true;
        return _this12._pc.setLocalDescription(desc).then(function () {
          _this12._settingLocalSdp = false;
        });
      }).then(function () {
        return _this12._sendSdp(_this12._pc.localDescription);
      })["catch"](function (e) {
        _logger["default"].error(e.message + ' Please check your codec settings.');

        var error = new ErrorModule.P2PError(ErrorModule.errors.P2P_WEBRTC_SDP, e.message);

        _this12._stop(error, true);
      });
    }
  }, {
    key: "_logCurrentAndPendingLocalDescription",
    value: function _logCurrentAndPendingLocalDescription() {
      _logger["default"].info('Current description: ' + this._pc.currentLocalDescription);

      _logger["default"].info('Pending description: ' + this._pc.pendingLocalDescription);
    }
  }, {
    key: "_getAndDeleteTrackSourceInfo",
    value: function _getAndDeleteTrackSourceInfo(tracks) {
      if (tracks.length > 0) {
        var trackId = tracks[0].id;

        if (this._remoteTrackSourceInfo.has(trackId)) {
          var sourceInfo = this._remoteTrackSourceInfo.get(trackId);

          this._remoteTrackSourceInfo["delete"](trackId);

          return sourceInfo;
        } else {
          _logger["default"].warning('Cannot find source info for ' + trackId);
        }
      }
    }
  }, {
    key: "_unpublish",
    value: function _unpublish(stream) {
      var _this13 = this;

      if (navigator.mozGetUserMedia || !this._remoteSideSupportsRemoveStream) {
        // Actually unpublish is supported. It is a little bit complex since
        // Firefox implemented WebRTC spec while Chrome implemented an old API.
        _logger["default"].error('Stopping a publication is not supported on Firefox. Please use ' + 'P2PClient.stop() to stop the connection with remote endpoint.');

        return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_UNSUPPORTED_METHOD));
      }

      if (!this._publishedStreams.has(stream)) {
        return Promise.reject(new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_ILLEGAL_ARGUMENT));
      }

      this._pendingUnpublishStreams.push(stream);

      return new Promise(function (resolve, reject) {
        _this13._unpublishPromises.set(stream.mediaStream.id, {
          resolve: resolve,
          reject: reject
        });

        _this13._drainPendingStreams();
      });
    } // Make sure |_pc| is available before calling this method.

  }, {
    key: "_createDataChannel",
    value: function _createDataChannel(label) {
      if (this._dataChannels.has(label)) {
        _logger["default"].warning('Data channel labeled ' + label + ' already exists.');

        return;
      }

      if (!this._pc) {
        _logger["default"].debug('PeerConnection is not available before creating DataChannel.');

        return;
      }

      _logger["default"].debug('Create data channel.');

      var dc = this._pc.createDataChannel(label);

      this._bindEventsToDataChannel(dc);

      this._dataChannels.set(DataChannelLabel.MESSAGE, dc);
    }
  }, {
    key: "_bindEventsToDataChannel",
    value: function _bindEventsToDataChannel(dc) {
      var _this14 = this;

      dc.onmessage = function (event) {
        _this14._onDataChannelMessage.apply(_this14, [event]);
      };

      dc.onopen = function (event) {
        _this14._onDataChannelOpen.apply(_this14, [event]);
      };

      dc.onclose = function (event) {
        _this14._onDataChannelClose.apply(_this14, [event]);
      };

      dc.onerror = function (event) {
        _logger["default"].debug('Data Channel Error: ' + event);
      };
    } // Returns all MediaStreams it belongs to.

  }, {
    key: "_getStreamByTrack",
    value: function _getStreamByTrack(mediaStreamTrack) {
      var streams = [];

      var _iterator10 = _createForOfIteratorHelper(this._remoteStreamInfo),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _step10$value = (0, _slicedToArray2["default"])(_step10.value, 2),
              info = _step10$value[1];

          if (!info.stream || !info.stream.mediaStream) {
            continue;
          }

          var _iterator11 = _createForOfIteratorHelper(info.stream.mediaStream.getTracks()),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var track = _step11.value;

              if (mediaStreamTrack === track) {
                streams.push(info.stream.mediaStream);
              }
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return streams;
    }
  }, {
    key: "_areAllTracksEnded",
    value: function _areAllTracksEnded(mediaStream) {
      var _iterator12 = _createForOfIteratorHelper(mediaStream.getTracks()),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var track = _step12.value;

          if (track.readyState === 'live') {
            return false;
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      return true;
    }
  }, {
    key: "_stop",
    value: function _stop(error, notifyRemote) {
      var promiseError = error;

      if (!promiseError) {
        promiseError = new ErrorModule.P2PError(ErrorModule.errors.P2P_CLIENT_UNKNOWN);
      }

      var _iterator13 = _createForOfIteratorHelper(this._dataChannels),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _step13$value = (0, _slicedToArray2["default"])(_step13.value, 2),
              dc = _step13$value[1];

          dc.close();
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      this._dataChannels.clear();

      if (this._pc && this._pc.iceConnectionState !== 'closed') {
        this._pc.close();
      }

      var _iterator14 = _createForOfIteratorHelper(this._publishPromises),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var _step14$value = (0, _slicedToArray2["default"])(_step14.value, 2),
              promise = _step14$value[1];

          promise.reject(promiseError);
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      this._publishPromises.clear();

      var _iterator15 = _createForOfIteratorHelper(this._unpublishPromises),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _step15$value = (0, _slicedToArray2["default"])(_step15.value, 2),
              _promise = _step15$value[1];

          _promise.reject(promiseError);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      this._unpublishPromises.clear();

      var _iterator16 = _createForOfIteratorHelper(this._sendDataPromises),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var _step16$value = (0, _slicedToArray2["default"])(_step16.value, 2),
              _promise2 = _step16$value[1];

          _promise2.reject(promiseError);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      this._sendDataPromises.clear(); // Fire ended event if publication or remote stream exists.


      this._publishedStreams.forEach(function (publication) {
        publication.dispatchEvent(new _event.OwtEvent('ended'));
      });

      this._publishedStreams.clear();

      this._remoteStreams.forEach(function (stream) {
        stream.dispatchEvent(new _event.OwtEvent('ended'));
      });

      this._remoteStreams = [];

      if (!this._disposed) {
        if (notifyRemote) {
          var sendError;

          if (error) {
            sendError = JSON.parse(JSON.stringify(error)); // Avoid to leak detailed error to remote side.

            sendError.message = 'Error happened at remote side.';
          }

          this._sendSignalingMessage(SignalingType.CLOSED, sendError)["catch"](function (err) {
            _logger["default"].debug('Failed to send close.' + err.message);
          });
        }

        this.dispatchEvent(new Event('ended'));
      }
    }
  }, {
    key: "_setStreamToRemoteStreamInfo",
    value: function _setStreamToRemoteStreamInfo(mediaStream) {
      var info = this._remoteStreamInfo.get(mediaStream.id);

      var attributes = info.attributes;
      var sourceInfo = new StreamModule.StreamSourceInfo(this._remoteStreamInfo.get(mediaStream.id).source.audio, this._remoteStreamInfo.get(mediaStream.id).source.video);
      info.stream = new StreamModule.RemoteStream(undefined, this._remoteId, mediaStream, sourceInfo, attributes);
      info.mediaStream = mediaStream;
      var stream = info.stream;

      if (stream) {
        this._remoteStreams.push(stream);
      } else {
        _logger["default"].warning('Failed to create RemoteStream.');
      }
    }
  }, {
    key: "_checkIceConnectionStateAndFireEvent",
    value: function _checkIceConnectionStateAndFireEvent() {
      var _this15 = this;

      if (this._pc.iceConnectionState === 'connected' || this._pc.iceConnectionState === 'completed') {
        var _iterator17 = _createForOfIteratorHelper(this._remoteStreamInfo),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _step17$value = (0, _slicedToArray2["default"])(_step17.value, 2),
                info = _step17$value[1];

            if (info.mediaStream) {
              var streamEvent = new StreamModule.StreamEvent('streamadded', {
                stream: info.stream
              });

              var _iterator18 = _createForOfIteratorHelper(info.mediaStream.getTracks()),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var track = _step18.value;
                  track.addEventListener('ended', function (event) {
                    var mediaStreams = _this15._getStreamByTrack(event.target);

                    var _iterator19 = _createForOfIteratorHelper(mediaStreams),
                        _step19;

                    try {
                      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                        var mediaStream = _step19.value;

                        if (_this15._areAllTracksEnded(mediaStream)) {
                          _this15._onRemoteStreamRemoved({
                            stream: mediaStream
                          });
                        }
                      }
                    } catch (err) {
                      _iterator19.e(err);
                    } finally {
                      _iterator19.f();
                    }
                  });
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }

              this._sendSignalingMessage(SignalingType.TRACKS_ADDED, info.trackIds);

              this._remoteStreamInfo.get(info.mediaStream.id).mediaStream = null;
              this.dispatchEvent(streamEvent);
            }
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
      }
    }
  }]);
  return P2PPeerConnectionChannel;
}(_event.EventDispatcher);

var _default = P2PPeerConnectionChannel;
exports["default"] = _default;

},{"../base/event.js":25,"../base/logger.js":27,"../base/publication.js":30,"../base/sdputils.js":31,"../base/stream.js":32,"../base/transport.js":33,"../base/utils.js":34,"./error.js":47,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":15,"@babel/runtime/helpers/slicedToArray":17,"@babel/runtime/helpers/typeof":18,"@babel/runtime/helpers/wrapNativeSuper":20}]},{},[46])(46)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pc05hdGl2ZUZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXIuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwic3JjL3Nkay9iYXNlL2Jhc2U2NC5qcyIsInNyYy9zZGsvYmFzZS9jb2RlYy5qcyIsInNyYy9zZGsvYmFzZS9ldmVudC5qcyIsInNyYy9zZGsvYmFzZS9leHBvcnQuanMiLCJzcmMvc2RrL2Jhc2UvbG9nZ2VyLmpzIiwic3JjL3Nkay9iYXNlL21lZGlhZm9ybWF0LmpzIiwic3JjL3Nkay9iYXNlL21lZGlhc3RyZWFtLWZhY3RvcnkuanMiLCJzcmMvc2RrL2Jhc2UvcHVibGljYXRpb24uanMiLCJzcmMvc2RrL2Jhc2Uvc2RwdXRpbHMuanMiLCJzcmMvc2RrL2Jhc2Uvc3RyZWFtLmpzIiwic3JjL3Nkay9iYXNlL3RyYW5zcG9ydC5qcyIsInNyYy9zZGsvYmFzZS91dGlscy5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9jaGFubmVsLmpzIiwic3JjL3Nkay9jb25mZXJlbmNlL2NsaWVudC5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9lcnJvci5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9leHBvcnQuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvaW5mby5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9taXhlZHN0cmVhbS5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9wYXJ0aWNpcGFudC5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9xdWljY29ubmVjdGlvbi5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9zaWduYWxpbmcuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2Uvc3RyZWFtdXRpbHMuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2Uvc3Vic2NyaXB0aW9uLmpzIiwic3JjL3Nkay9leHBvcnQuanMiLCJzcmMvc2RrL3AycC9lcnJvci5qcyIsInNyYy9zZGsvcDJwL2V4cG9ydC5qcyIsInNyYy9zZGsvcDJwL3AycGNsaWVudC5qcyIsInNyYy9zZGsvcDJwL3BlZXJjb25uZWN0aW9uLWNoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBTzFDLG1CQVBEO0FBUUQ7QUFibUI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjcEIsbUJBQUsscUJBQUwsQ0FBMkIsYUFBYSxDQUFDLFlBQXpDLEVBQXVELElBQUksQ0FBQyxRQUE1RDs7QUFDQSxtQkFBSyxpQkFBTCxDQUF1QixHQUF2QixDQUEyQixJQUFJLENBQUMsV0FBTCxDQUFpQixFQUE1QyxFQUFnRCxXQUFoRCxHQUE4RCxJQUE5RDtBQUNBLG1CQUFLLGFBQUwsQ0FBbUIsV0FBbkI7QUFDRDtBQUNGO0FBcEI4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUJoRDtBQUNGOzs7RUF6Z0NvQyxzQjs7ZUE0Z0N4Qix3QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxudmFyIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qc1wiKTtcblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlRnVuY3Rpb247XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbnZhciBpc05hdGl2ZUZ1bmN0aW9uID0gcmVxdWlyZShcIi4vaXNOYXRpdmVGdW5jdGlvbi5qc1wiKTtcblxudmFyIGNvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdC5qc1wiKTtcblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIWlzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG5cbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7XG5cbiAgICAgIF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF93cmFwTmF0aXZlU3VwZXI7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIi8vIE1JVCBMaWNlbnNlXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDEyIFVuaXZlcnNpZGFkIFBvbGl0w6ljbmljYSBkZSBNYWRyaWRcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbi8vIFNPRlRXQVJFLlxuXG4vLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8vIFRoaXMgZmlsZSBpcyBib3Jyb3dlZCBmcm9tIGx5bmNraWEvbGljb2RlIHdpdGggc29tZSBtb2RpZmljYXRpb25zLlxuXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgY29uc3QgQmFzZTY0ID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBFTkRfT0ZfSU5QVVQgPSAtMTtcbiAgbGV0IGJhc2U2NFN0cjtcbiAgbGV0IGJhc2U2NENvdW50O1xuXG4gIGxldCBpO1xuXG4gIGNvbnN0IGJhc2U2NENoYXJzID0gW1xuICAgICdBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLFxuICAgICdJJywgJ0onLCAnSycsICdMJywgJ00nLCAnTicsICdPJywgJ1AnLFxuICAgICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJywgJ1gnLFxuICAgICdZJywgJ1onLCAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLFxuICAgICdnJywgJ2gnLCAnaScsICdqJywgJ2snLCAnbCcsICdtJywgJ24nLFxuICAgICdvJywgJ3AnLCAncScsICdyJywgJ3MnLCAndCcsICd1JywgJ3YnLFxuICAgICd3JywgJ3gnLCAneScsICd6JywgJzAnLCAnMScsICcyJywgJzMnLFxuICAgICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcrJywgJy8nLFxuICBdO1xuXG4gIGNvbnN0IHJldmVyc2VCYXNlNjRDaGFycyA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBiYXNlNjRDaGFycy5sZW5ndGg7IGkgPSBpICsgMSkge1xuICAgIHJldmVyc2VCYXNlNjRDaGFyc1tiYXNlNjRDaGFyc1tpXV0gPSBpO1xuICB9XG5cbiAgY29uc3Qgc2V0QmFzZTY0U3RyID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgYmFzZTY0U3RyID0gc3RyO1xuICAgIGJhc2U2NENvdW50ID0gMDtcbiAgfTtcblxuICBjb25zdCByZWFkQmFzZTY0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFiYXNlNjRTdHIpIHtcbiAgICAgIHJldHVybiBFTkRfT0ZfSU5QVVQ7XG4gICAgfVxuICAgIGlmIChiYXNlNjRDb3VudCA+PSBiYXNlNjRTdHIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gRU5EX09GX0lOUFVUO1xuICAgIH1cbiAgICBjb25zdCBjID0gYmFzZTY0U3RyLmNoYXJDb2RlQXQoYmFzZTY0Q291bnQpICYgMHhmZjtcbiAgICBiYXNlNjRDb3VudCA9IGJhc2U2NENvdW50ICsgMTtcbiAgICByZXR1cm4gYztcbiAgfTtcblxuICBjb25zdCBlbmNvZGVCYXNlNjQgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBkb25lO1xuICAgIHNldEJhc2U2NFN0cihzdHIpO1xuICAgIHJlc3VsdCA9ICcnO1xuICAgIGNvbnN0IGluQnVmZmVyID0gbmV3IEFycmF5KDMpO1xuICAgIGRvbmUgPSBmYWxzZTtcbiAgICB3aGlsZSAoIWRvbmUgJiYgKGluQnVmZmVyWzBdID0gcmVhZEJhc2U2NCgpKSAhPT0gRU5EX09GX0lOUFVUKSB7XG4gICAgICBpbkJ1ZmZlclsxXSA9IHJlYWRCYXNlNjQoKTtcbiAgICAgIGluQnVmZmVyWzJdID0gcmVhZEJhc2U2NCgpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKGJhc2U2NENoYXJzW2luQnVmZmVyWzBdID4+IDJdKTtcbiAgICAgIGlmIChpbkJ1ZmZlclsxXSAhPT0gRU5EX09GX0lOUFVUKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIChiYXNlNjRDaGFyc1soKGluQnVmZmVyWzBdIDw8IDQpICYgMHgzMCkgfCAoXG4gICAgICAgICAgaW5CdWZmZXJbMV0gPj4gNCldKTtcbiAgICAgICAgaWYgKGluQnVmZmVyWzJdICE9PSBFTkRfT0ZfSU5QVVQpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAoYmFzZTY0Q2hhcnNbKChpbkJ1ZmZlclsxXSA8PCAyKSAmIDB4M2MpIHwgKFxuICAgICAgICAgICAgaW5CdWZmZXJbMl0gPj4gNildKTtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAoYmFzZTY0Q2hhcnNbaW5CdWZmZXJbMl0gJiAweDNGXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKGJhc2U2NENoYXJzWygoaW5CdWZmZXJbMV0gPDwgMikgJiAweDNjKV0pO1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICgnPScpO1xuICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAoYmFzZTY0Q2hhcnNbKChpbkJ1ZmZlclswXSA8PCA0KSAmIDB4MzApXSk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICgnPScpO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAoJz0nKTtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgcmVhZFJldmVyc2VCYXNlNjQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWJhc2U2NFN0cikge1xuICAgICAgcmV0dXJuIEVORF9PRl9JTlBVVDtcbiAgICB9XG4gICAgd2hpbGUgKHRydWUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICAgIGlmIChiYXNlNjRDb3VudCA+PSBiYXNlNjRTdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBFTkRfT0ZfSU5QVVQ7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0Q2hhcmFjdGVyID0gYmFzZTY0U3RyLmNoYXJBdChiYXNlNjRDb3VudCk7XG4gICAgICBiYXNlNjRDb3VudCA9IGJhc2U2NENvdW50ICsgMTtcbiAgICAgIGlmIChyZXZlcnNlQmFzZTY0Q2hhcnNbbmV4dENoYXJhY3Rlcl0pIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2VCYXNlNjRDaGFyc1tuZXh0Q2hhcmFjdGVyXTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2hhcmFjdGVyID09PSAnQScpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG50b3MgPSBmdW5jdGlvbihuKSB7XG4gICAgbiA9IG4udG9TdHJpbmcoMTYpO1xuICAgIGlmIChuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbiA9ICcwJyArIG47XG4gICAgfVxuICAgIG4gPSAnJScgKyBuO1xuICAgIHJldHVybiB1bmVzY2FwZShuKTtcbiAgfTtcblxuICBjb25zdCBkZWNvZGVCYXNlNjQgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBkb25lO1xuICAgIHNldEJhc2U2NFN0cihzdHIpO1xuICAgIHJlc3VsdCA9ICcnO1xuICAgIGNvbnN0IGluQnVmZmVyID0gbmV3IEFycmF5KDQpO1xuICAgIGRvbmUgPSBmYWxzZTtcbiAgICB3aGlsZSAoIWRvbmUgJiYgKGluQnVmZmVyWzBdID0gcmVhZFJldmVyc2VCYXNlNjQoKSkgIT09IEVORF9PRl9JTlBVVCAmJlxuICAgICAgKGluQnVmZmVyWzFdID0gcmVhZFJldmVyc2VCYXNlNjQoKSkgIT09IEVORF9PRl9JTlBVVCkge1xuICAgICAgaW5CdWZmZXJbMl0gPSByZWFkUmV2ZXJzZUJhc2U2NCgpO1xuICAgICAgaW5CdWZmZXJbM10gPSByZWFkUmV2ZXJzZUJhc2U2NCgpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgbnRvcygoKChpbkJ1ZmZlclswXSA8PCAyKSAmIDB4ZmYpIHwgaW5CdWZmZXJbMV0gPj5cbiAgICAgICAgNCkpO1xuICAgICAgaWYgKGluQnVmZmVyWzJdICE9PSBFTkRfT0ZfSU5QVVQpIHtcbiAgICAgICAgcmVzdWx0ICs9IG50b3MoKCgoaW5CdWZmZXJbMV0gPDwgNCkgJiAweGZmKSB8IGluQnVmZmVyWzJdID4+IDIpKTtcbiAgICAgICAgaWYgKGluQnVmZmVyWzNdICE9PSBFTkRfT0ZfSU5QVVQpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBudG9zKCgoKGluQnVmZmVyWzJdIDw8IDYpICYgMHhmZikgfCBpbkJ1ZmZlcltcbiAgICAgICAgICAgICAgM10pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBlbmNvZGVCYXNlNjQ6IGVuY29kZUJhc2U2NCxcbiAgICBkZWNvZGVCYXNlNjQ6IGRlY29kZUJhc2U2NCxcbiAgfTtcbn0oKSk7XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAY2xhc3MgQXVkaW9Db2RlY1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIEF1ZGlvIGNvZGVjIGVudW1lcmF0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgQXVkaW9Db2RlYyA9IHtcbiAgUENNVTogJ3BjbXUnLFxuICBQQ01BOiAncGNtYScsXG4gIE9QVVM6ICdvcHVzJyxcbiAgRzcyMjogJ2c3MjInLFxuICBJU0FDOiAnaVNBQycsXG4gIElMQkM6ICdpTEJDJyxcbiAgQUFDOiAnYWFjJyxcbiAgQUMzOiAnYWMzJyxcbiAgTkVMTFlNT1NFUjogJ25lbGx5bW9zZXInLFxufTtcbi8qKlxuICogQGNsYXNzIEF1ZGlvQ29kZWNQYXJhbWV0ZXJzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgQ29kZWMgcGFyYW1ldGVycyBmb3IgYW4gYXVkaW8gdHJhY2suXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBdWRpb0NvZGVjUGFyYW1ldGVycyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGNoYW5uZWxDb3VudCwgY2xvY2tSYXRlKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBuYW1lXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgTmFtZSBvZiBhIGNvZGVjLiBQbGVhc2UgYSB2YWx1ZSBpbiBPd3QuQmFzZS5BdWRpb0NvZGVjLiBIb3dldmVyLFxuICAgICAqIHNvbWUgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IGFsbCB0aGUgdmFsdWVzIGluIE93dC5CYXNlLkF1ZGlvQ29kZWMuXG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBjaGFubmVsQ291bnRcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9Db2RlY1BhcmFtZXRlcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBOdW1iZXJzIG9mIGNoYW5uZWxzIGZvciBhbiBhdWRpbyB0cmFjay5cbiAgICAgKi9cbiAgICB0aGlzLmNoYW5uZWxDb3VudCA9IGNoYW5uZWxDb3VudDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBjbG9ja1JhdGVcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9Db2RlY1BhcmFtZXRlcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBUaGUgY29kZWMgY2xvY2sgcmF0ZSBleHByZXNzZWQgaW4gSGVydHouXG4gICAgICovXG4gICAgdGhpcy5jbG9ja1JhdGUgPSBjbG9ja1JhdGU7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgQXVkaW9FbmNvZGluZ1BhcmFtZXRlcnNcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBFbmNvZGluZyBwYXJhbWV0ZXJzIGZvciBzZW5kaW5nIGFuIGF1ZGlvIHRyYWNrLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgQXVkaW9FbmNvZGluZ1BhcmFtZXRlcnMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlYywgbWF4Qml0cmF0ZSkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5BdWRpb0NvZGVjUGFyYW1ldGVyc30gY29kZWNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9FbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjID0gY29kZWM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gbWF4Qml0cmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb0VuY29kaW5nUGFyYW1ldGVyc1xuICAgICAqIEBkZXNjIE1heCBiaXRyYXRlIGV4cHJlc3NlZCBpbiBrYnBzLlxuICAgICAqL1xuICAgIHRoaXMubWF4Qml0cmF0ZSA9IG1heEJpdHJhdGU7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9Db2RlY1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFZpZGVvIGNvZGVjIGVudW1lcmF0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgVmlkZW9Db2RlYyA9IHtcbiAgVlA4OiAndnA4JyxcbiAgVlA5OiAndnA5JyxcbiAgSDI2NDogJ2gyNjQnLFxuICBIMjY1OiAnaDI2NScsXG4gIEFWMTogJ2F2MScsXG4gIC8vIE5vbi1zdGFuZGFyZCBBVjEsIHdpbGwgYmUgcmVuYW1lZCB0byBBVjEuXG4gIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC93ZWJydGMvaXNzdWVzL2RldGFpbD9pZD0xMTA0MlxuICBBVjFYOiAnYXYxeCcsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBWaWRlb0NvZGVjUGFyYW1ldGVyc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIENvZGVjIHBhcmFtZXRlcnMgZm9yIGEgdmlkZW8gdHJhY2suXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb0NvZGVjUGFyYW1ldGVycyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByb2ZpbGUpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9Db2RlY1BhcmFtZXRlcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBOYW1lIG9mIGEgY29kZWMuUGxlYXNlIGEgdmFsdWUgaW4gT3d0LkJhc2UuQXVkaW9Db2RlYy5Ib3dldmVyLFxuICAgICAgIHNvbWUgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IGFsbCB0aGUgdmFsdWVzIGluIE93dC5CYXNlLkF1ZGlvQ29kZWMuXG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/c3RyaW5nfSBwcm9maWxlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvQ29kZWNQYXJhbWV0ZXJzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgVGhlIHByb2ZpbGUgb2YgYSBjb2RlYy4gUHJvZmlsZSBtYXkgbm90IGFwcGx5IHRvIGFsbCBjb2RlY3MuXG4gICAgICovXG4gICAgdGhpcy5wcm9maWxlID0gcHJvZmlsZTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBWaWRlb0VuY29kaW5nUGFyYW1ldGVyc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIEVuY29kaW5nIHBhcmFtZXRlcnMgZm9yIHNlbmRpbmcgYSB2aWRlbyB0cmFjay5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFZpZGVvRW5jb2RpbmdQYXJhbWV0ZXJzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoY29kZWMsIG1heEJpdHJhdGUpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuVmlkZW9Db2RlY1BhcmFtZXRlcnN9IGNvZGVjXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvRW5jb2RpbmdQYXJhbWV0ZXJzXG4gICAgICovXG4gICAgdGhpcy5jb2RlYyA9IGNvZGVjO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IG1heEJpdHJhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9FbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgKiBAZGVzYyBNYXggYml0cmF0ZSBleHByZXNzZWQgaW4ga2Jwcy5cbiAgICAgKi9cbiAgICB0aGlzLm1heEJpdHJhdGUgPSBtYXhCaXRyYXRlO1xuICB9XG59XG4iLCIvLyBNSVQgTGljZW5zZVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxMiBVbml2ZXJzaWRhZCBQb2xpdMOpY25pY2EgZGUgTWFkcmlkXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4vLyBTT0ZUV0FSRS5cblxuLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vLyBUaGlzIGZpbGUgaXMgYm9ycm93ZWQgZnJvbSBseW5ja2lhL2xpY29kZSB3aXRoIHNvbWUgbW9kaWZpY2F0aW9ucy5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBFdmVudERpc3BhdGNoZXJcbiAqIEBjbGFzc0Rlc2MgQSBzaGltIGZvciBFdmVudFRhcmdldC4gTWlnaHQgYmUgY2hhbmdlZCB0byBFdmVudFRhcmdldCBsYXRlci5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgRXZlbnREaXNwYXRjaGVyID0gZnVuY3Rpb24oKSB7XG4gIC8vIFByaXZhdGUgdmFyc1xuICBjb25zdCBzcGVjID0ge307XG4gIHNwZWMuZGlzcGF0Y2hlciA9IHt9O1xuICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnMgPSB7fTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJcbiAgICogQGRlc2MgVGhpcyBmdW5jdGlvbiByZWdpc3RlcnMgYSBjYWxsYmFjayBmdW5jdGlvbiBhcyBhIGhhbmRsZXIgZm9yIHRoZVxuICAgKiBjb3JyZXNwb25kaW5nIGV2ZW50LiBJdCdzIHNob3J0ZW5lZCBmb3JtIGlzIG9uKGV2ZW50VHlwZSwgbGlzdGVuZXIpLiBTZWVcbiAgICogdGhlIGV2ZW50IGRlc2NyaXB0aW9uIGluIHRoZSBmb2xsb3dpbmcgdGFibGUuXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgRXZlbnQgc3RyaW5nLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvbi5cbiAgICovXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50VHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0gPSBbXTtcbiAgICB9XG4gICAgc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyXG4gICAqIEBkZXNjIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXIuXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgRXZlbnQgc3RyaW5nLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvbi5cbiAgICovXG4gIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50VHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoIXNwZWMuZGlzcGF0Y2hlci5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0uaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjbGVhckV2ZW50TGlzdGVuZXJcbiAgICogQGRlc2MgVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFsbCBldmVudCBsaXN0ZW5lcnMgZm9yIG9uZSB0eXBlLlxuICAgKiBAaW5zdGFuY2VcbiAgICogQG1lbWJlcm9mIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIEV2ZW50IHN0cmluZy5cbiAgICovXG4gIHRoaXMuY2xlYXJFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0gPSBbXTtcbiAgfTtcblxuICAvLyBJdCBkaXNwYXRjaCBhIG5ldyBldmVudCB0byB0aGUgZXZlbnQgbGlzdGVuZXJzLCBiYXNlZCBvbiB0aGUgdHlwZVxuICAvLyBvZiBldmVudC4gQWxsIGV2ZW50cyBhcmUgaW50ZW5kZWQgdG8gYmUgTGljb2RlRXZlbnRzLlxuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50LnR5cGVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNwZWMuZGlzcGF0Y2hlci5ldmVudExpc3RlbmVyc1tldmVudC50eXBlXS5tYXAoZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50KTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbi8qKlxuICogQGNsYXNzIE93dEV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIE93dEV2ZW50IHJlcHJlc2VudHMgYSBnZW5lcmljIEV2ZW50IGluIHRoZSBsaWJyYXJ5LlxuICogQG1lbWJlcm9mIE93dC5CYXNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBPd3RFdmVudCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIE1lc3NhZ2VFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBNZXNzYWdlRXZlbnQgcmVwcmVzZW50cyBhIG1lc3NhZ2UgRXZlbnQgaW4gdGhlIGxpYnJhcnkuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2VFdmVudCBleHRlbmRzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaW5pdCkge1xuICAgIHN1cGVyKHR5cGUpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gb3JpZ2luXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lc3NhZ2VFdmVudFxuICAgICAqIEBkZXNjIElEIG9mIHRoZSByZW1vdGUgZW5kcG9pbnQgd2hvIHB1Ymxpc2hlZCB0aGlzIHN0cmVhbS5cbiAgICAgKi9cbiAgICB0aGlzLm9yaWdpbiA9IGluaXQub3JpZ2luO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5NZXNzYWdlRXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLm1lc3NhZ2UgPSBpbml0Lm1lc3NhZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSB0b1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5NZXNzYWdlRXZlbnRcbiAgICAgKiBAZGVzYyBWYWx1ZXMgY291bGQgYmUgXCJhbGxcIiwgXCJtZVwiIGluIGNvbmZlcmVuY2UgbW9kZSwgb3IgdW5kZWZpbmVkIGluXG4gICAgICogUDJQIG1vZGUuXG4gICAgICovXG4gICAgdGhpcy50byA9IGluaXQudG87XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgRXJyb3JFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBFcnJvckV2ZW50IHJlcHJlc2VudHMgYW4gZXJyb3IgRXZlbnQgaW4gdGhlIGxpYnJhcnkuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEVycm9yRXZlbnQgZXh0ZW5kcyBPd3RFdmVudCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGluaXQpIHtcbiAgICBzdXBlcih0eXBlKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtFcnJvcn0gZXJyb3JcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuRXJyb3JFdmVudFxuICAgICAqL1xuICAgIHRoaXMuZXJyb3IgPSBpbml0LmVycm9yO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIE11dGVFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBNdXRlRXZlbnQgcmVwcmVzZW50cyBhIG11dGUgb3IgdW5tdXRlIGV2ZW50LlxuICogQG1lbWJlcm9mIE93dC5CYXNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBNdXRlRXZlbnQgZXh0ZW5kcyBPd3RFdmVudCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGluaXQpIHtcbiAgICBzdXBlcih0eXBlKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5UcmFja0tpbmR9IGtpbmRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuTXV0ZUV2ZW50XG4gICAgICovXG4gICAgdGhpcy5raW5kID0gaW5pdC5raW5kO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0ICogZnJvbSAnLi9tZWRpYXN0cmVhbS1mYWN0b3J5LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vc3RyZWFtLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vbWVkaWFmb3JtYXQuanMnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc3BvcnQuanMnO1xuIiwiLy8gTUlUIExpY2Vuc2Vcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTIgVW5pdmVyc2lkYWQgUG9saXTDqWNuaWNhIGRlIE1hZHJpZFxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuLy8gU09GVFdBUkUuXG5cbi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLy8gVGhpcyBmaWxlIGlzIGJvcnJvd2VkIGZyb20gbHluY2tpYS9saWNvZGUgd2l0aCBzb21lIG1vZGlmaWNhdGlvbnMuXG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKlxuICogQVBJIHRvIHdyaXRlIGxvZ3MgYmFzZWQgb24gdHJhZGl0aW9uYWwgbG9nZ2luZyBtZWNoYW5pc21zOiBkZWJ1ZywgdHJhY2UsXG4gKiBpbmZvLCB3YXJuaW5nLCBlcnJvclxuICovXG5jb25zdCBMb2dnZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IERFQlVHID0gMDtcbiAgY29uc3QgVFJBQ0UgPSAxO1xuICBjb25zdCBJTkZPID0gMjtcbiAgY29uc3QgV0FSTklORyA9IDM7XG4gIGNvbnN0IEVSUk9SID0gNDtcbiAgY29uc3QgTk9ORSA9IDU7XG5cbiAgY29uc3Qgbm9PcCA9IGZ1bmN0aW9uKCkge307XG5cbiAgLy8gfHRoYXR8IGlzIHRoZSBvYmplY3QgdG8gYmUgcmV0dXJuZWQuXG4gIGNvbnN0IHRoYXQgPSB7XG4gICAgREVCVUc6IERFQlVHLFxuICAgIFRSQUNFOiBUUkFDRSxcbiAgICBJTkZPOiBJTkZPLFxuICAgIFdBUk5JTkc6IFdBUk5JTkcsXG4gICAgRVJST1I6IEVSUk9SLFxuICAgIE5PTkU6IE5PTkUsXG4gIH07XG5cbiAgdGhhdC5sb2cgPSAoLi4uYXJncykgPT4ge1xuICAgIHdpbmRvdy5jb25zb2xlLmxvZygobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSwgLi4uYXJncyk7XG4gIH07XG5cbiAgY29uc3QgYmluZFR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuY29uc29sZVt0eXBlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlW3R5cGVdKChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLCAuLi5hcmdzKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGF0LmxvZztcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0TG9nTGV2ZWwgPSBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmIChsZXZlbCA8PSBERUJVRykge1xuICAgICAgdGhhdC5kZWJ1ZyA9IGJpbmRUeXBlKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LmRlYnVnID0gbm9PcDtcbiAgICB9XG4gICAgaWYgKGxldmVsIDw9IFRSQUNFKSB7XG4gICAgICB0aGF0LnRyYWNlID0gYmluZFR5cGUoJ3RyYWNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQudHJhY2UgPSBub09wO1xuICAgIH1cbiAgICBpZiAobGV2ZWwgPD0gSU5GTykge1xuICAgICAgdGhhdC5pbmZvID0gYmluZFR5cGUoJ2luZm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5pbmZvID0gbm9PcDtcbiAgICB9XG4gICAgaWYgKGxldmVsIDw9IFdBUk5JTkcpIHtcbiAgICAgIHRoYXQud2FybmluZyA9IGJpbmRUeXBlKCd3YXJuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQud2FybmluZyA9IG5vT3A7XG4gICAgfVxuICAgIGlmIChsZXZlbCA8PSBFUlJPUikge1xuICAgICAgdGhhdC5lcnJvciA9IGJpbmRUeXBlKCdlcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LmVycm9yID0gbm9PcDtcbiAgICB9XG4gIH07XG5cbiAgc2V0TG9nTGV2ZWwoRVJST1IpOyAvLyBEZWZhdWx0IGxldmVsLlxuXG4gIHRoYXQuc2V0TG9nTGV2ZWwgPSBzZXRMb2dMZXZlbDtcblxuICByZXR1cm4gdGhhdDtcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dlcjtcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAY2xhc3MgQXVkaW9Tb3VyY2VJbmZvXG4gKiBAY2xhc3NEZXNjIFNvdXJjZSBpbmZvIGFib3V0IGFuIGF1ZGlvIHRyYWNrLiBWYWx1ZXM6ICdtaWMnLCAnc2NyZWVuLWNhc3QnLFxuICogJ2ZpbGUnLCAnbWl4ZWQnLlxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAcmVhZG9ubHlcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBBdWRpb1NvdXJjZUluZm8gPSB7XG4gIE1JQzogJ21pYycsXG4gIFNDUkVFTkNBU1Q6ICdzY3JlZW4tY2FzdCcsXG4gIEZJTEU6ICdmaWxlJyxcbiAgTUlYRUQ6ICdtaXhlZCcsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBWaWRlb1NvdXJjZUluZm9cbiAqIEBjbGFzc0Rlc2MgU291cmNlIGluZm8gYWJvdXQgYSB2aWRlbyB0cmFjay4gVmFsdWVzOiAnY2FtZXJhJywgJ3NjcmVlbi1jYXN0JyxcbiAqICdmaWxlJywgJ21peGVkJy5cbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQHJlYWRvbmx5XG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgVmlkZW9Tb3VyY2VJbmZvID0ge1xuICBDQU1FUkE6ICdjYW1lcmEnLFxuICBTQ1JFRU5DQVNUOiAnc2NyZWVuLWNhc3QnLFxuICBGSUxFOiAnZmlsZScsXG4gIE1JWEVEOiAnbWl4ZWQnLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgVHJhY2tLaW5kXG4gKiBAY2xhc3NEZXNjIEtpbmQgb2YgYSB0cmFjay4gVmFsdWVzOiAnYXVkaW8nIGZvciBhdWRpbyB0cmFjaywgJ3ZpZGVvJyBmb3JcbiAqIHZpZGVvIHRyYWNrLCAnYXYnIGZvciBib3RoIGF1ZGlvIGFuZCB2aWRlbyB0cmFja3MuXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEByZWFkb25seVxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFRyYWNrS2luZCA9IHtcbiAgLyoqXG4gICAqIEF1ZGlvIHRyYWNrcy5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBBVURJTzogJ2F1ZGlvJyxcbiAgLyoqXG4gICAqIFZpZGVvIHRyYWNrcy5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBWSURFTzogJ3ZpZGVvJyxcbiAgLyoqXG4gICAqIEJvdGggYXVkaW8gYW5kIHZpZGVvIHRyYWNrcy5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBBVURJT19BTkRfVklERU86ICdhdicsXG59O1xuLyoqXG4gKiBAY2xhc3MgUmVzb2x1dGlvblxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFRoZSBSZXNvbHV0aW9uIGRlZmluZXMgdGhlIHNpemUgb2YgYSByZWN0YW5nbGUuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICovXG5leHBvcnQgY2xhc3MgUmVzb2x1dGlvbiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IHdpZHRoXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlJlc29sdXRpb25cbiAgICAgKi9cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUmVzb2x1dGlvblxuICAgICAqL1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBQcm9taXNlLCBuYXZpZ2F0b3IgKi9cblxuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgKiBhcyBNZWRpYUZvcm1hdE1vZHVsZSBmcm9tICcuL21lZGlhZm9ybWF0LmpzJztcblxuLyoqXG4gKiBAY2xhc3MgQXVkaW9UcmFja0NvbnN0cmFpbnRzXG4gKiBAY2xhc3NEZXNjIENvbnN0cmFpbnRzIGZvciBjcmVhdGluZyBhbiBhdWRpbyBNZWRpYVN0cmVhbVRyYWNrLlxuICogQG1lbWJlcm9mIE93dC5CYXNlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7T3d0LkJhc2UuQXVkaW9Tb3VyY2VJbmZvfSBzb3VyY2UgU291cmNlIGluZm8gb2YgdGhpcyBhdWRpbyB0cmFjay5cbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvVHJhY2tDb25zdHJhaW50cyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHNvdXJjZSkge1xuICAgIGlmICghT2JqZWN0LnZhbHVlcyhNZWRpYUZvcm1hdE1vZHVsZS5BdWRpb1NvdXJjZUluZm8pXG4gICAgICAgIC5zb21lKCh2KSA9PiB2ID09PSBzb3VyY2UpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHNvdXJjZS4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBzb3VyY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9UcmFja0NvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgVmFsdWVzIGNvdWxkIGJlIFwibWljXCIsIFwic2NyZWVuLWNhc3RcIiwgXCJmaWxlXCIgb3IgXCJtaXhlZFwiLlxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gZGV2aWNlSWRcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9UcmFja0NvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgRG8gbm90IHByb3ZpZGUgZGV2aWNlSWQgaWYgc291cmNlIGlzIG5vdCBcIm1pY1wiLlxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBzZWUgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL21lZGlhY2FwdHVyZS1tYWluLyNkZWYtY29uc3RyYWludC1kZXZpY2VJZFxuICAgICAqL1xuICAgIHRoaXMuZGV2aWNlSWQgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9UcmFja0NvbnN0cmFpbnRzXG4gKiBAY2xhc3NEZXNjIENvbnN0cmFpbnRzIGZvciBjcmVhdGluZyBhIHZpZGVvIE1lZGlhU3RyZWFtVHJhY2suXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPd3QuQmFzZS5WaWRlb1NvdXJjZUluZm99IHNvdXJjZSBTb3VyY2UgaW5mbyBvZiB0aGlzIHZpZGVvIHRyYWNrLlxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9UcmFja0NvbnN0cmFpbnRzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3Ioc291cmNlKSB7XG4gICAgaWYgKCFPYmplY3QudmFsdWVzKE1lZGlhRm9ybWF0TW9kdWxlLlZpZGVvU291cmNlSW5mbylcbiAgICAgICAgLnNvbWUoKHYpID0+IHYgPT09IHNvdXJjZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgc291cmNlLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHNvdXJjZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBWYWx1ZXMgY291bGQgYmUgXCJjYW1lcmFcIiwgXCJzY3JlZW4tY2FzdFwiLCBcImZpbGVcIiBvciBcIm1peGVkXCIuXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBkZXZpY2VJZFxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBEbyBub3QgcHJvdmlkZSBkZXZpY2VJZCBpZiBzb3VyY2UgaXMgbm90IFwiY2FtZXJhXCIuXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHNlZSBodHRwczovL3czYy5naXRodWIuaW8vbWVkaWFjYXB0dXJlLW1haW4vI2RlZi1jb25zdHJhaW50LWRldmljZUlkXG4gICAgICovXG5cbiAgICB0aGlzLmRldmljZUlkID0gdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuUmVzb2x1dGlvbn0gcmVzb2x1dGlvblxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IGZyYW1lUmF0ZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLmZyYW1lUmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuLyoqXG4gKiBAY2xhc3MgU3RyZWFtQ29uc3RyYWludHNcbiAqIEBjbGFzc0Rlc2MgQ29uc3RyYWludHMgZm9yIGNyZWF0aW5nIGEgTWVkaWFTdHJlYW0gZnJvbSBzY3JlZW4gbWljIGFuZCBjYW1lcmEuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHs/T3d0LkJhc2UuQXVkaW9UcmFja0NvbnN0cmFpbnRzfSBhdWRpb0NvbnN0cmFpbnRzXG4gKiBAcGFyYW0gez9Pd3QuQmFzZS5WaWRlb1RyYWNrQ29uc3RyYWludHN9IHZpZGVvQ29uc3RyYWludHNcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbUNvbnN0cmFpbnRzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoYXVkaW9Db25zdHJhaW50cyA9IGZhbHNlLCB2aWRlb0NvbnN0cmFpbnRzID0gZmFsc2UpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5NZWRpYVN0cmVhbVRyYWNrRGV2aWNlQ29uc3RyYWludHNGb3JBdWRpb30gYXVkaW9cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuTWVkaWFTdHJlYW1EZXZpY2VDb25zdHJhaW50c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRoaXMuYXVkaW8gPSBhdWRpb0NvbnN0cmFpbnRzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLk1lZGlhU3RyZWFtVHJhY2tEZXZpY2VDb25zdHJhaW50c0ZvclZpZGVvfSBWaWRlb1xuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5NZWRpYVN0cmVhbURldmljZUNvbnN0cmFpbnRzXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy52aWRlbyA9IHZpZGVvQ29uc3RyYWludHM7XG4gIH1cbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmZ1bmN0aW9uIGlzVmlkZW9Db25zdHJhaW5zRm9yU2NyZWVuQ2FzdChjb25zdHJhaW50cykge1xuICByZXR1cm4gKHR5cGVvZiBjb25zdHJhaW50cy52aWRlbyA9PT0gJ29iamVjdCcgJiYgY29uc3RyYWludHMudmlkZW8uc291cmNlID09PVxuICAgICAgTWVkaWFGb3JtYXRNb2R1bGUuVmlkZW9Tb3VyY2VJbmZvLlNDUkVFTkNBU1QpO1xufVxuXG4vKipcbiAqIEBjbGFzcyBNZWRpYVN0cmVhbUZhY3RvcnlcbiAqIEBjbGFzc0Rlc2MgQSBmYWN0b3J5IHRvIGNyZWF0ZSBNZWRpYVN0cmVhbS4gWW91IGNhbiBhbHNvIGNyZWF0ZSBNZWRpYVN0cmVhbVxuICogYnkgeW91cnNlbGYuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqL1xuZXhwb3J0IGNsYXNzIE1lZGlhU3RyZWFtRmFjdG9yeSB7XG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gY3JlYXRlTWVkaWFTdHJlYW1cbiAgICogQHN0YXRpY1xuICAgKiBAZGVzYyBDcmVhdGUgYSBNZWRpYVN0cmVhbSB3aXRoIGdpdmVuIGNvbnN0cmFpbnRzLiBJZiB5b3Ugd2FudCB0byBjcmVhdGUgYVxuICAgKiBNZWRpYVN0cmVhbSBmb3Igc2NyZWVuIGNhc3QsIHBsZWFzZSBtYWtlIHN1cmUgYm90aCBhdWRpbyBhbmQgdmlkZW8ncyBzb3VyY2VcbiAgICogYXJlIFwic2NyZWVuLWNhc3RcIi5cbiAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lZGlhU3RyZWFtRmFjdG9yeVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE1lZGlhU3RyZWFtLCBFcnJvcj59IFJldHVybiBhIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZFxuICAgKiB3aGVuIHN0cmVhbSBpcyBzdWNjZXNzZnVsbHkgY3JlYXRlZCwgb3IgcmVqZWN0ZWQgaWYgb25lIG9mIHRoZSBmb2xsb3dpbmdcbiAgICogZXJyb3IgaGFwcGVuZWQ6XG4gICAqIC0gT25lIG9yIG1vcmUgcGFyYW1ldGVycyBjYW5ub3QgYmUgc2F0aXNmaWVkLlxuICAgKiAtIFNwZWNpZmllZCBkZXZpY2UgaXMgYnVzeS5cbiAgICogLSBDYW5ub3Qgb2J0YWluIG5lY2Vzc2FyeSBwZXJtaXNzaW9uIG9yIG9wZXJhdGlvbiBpcyBjYW5jZWxlZCBieSB1c2VyLlxuICAgKiAtIFZpZGVvIHNvdXJjZSBpcyBzY3JlZW4gY2FzdCwgd2hpbGUgYXVkaW8gc291cmNlIGlzIG5vdC5cbiAgICogLSBBdWRpbyBzb3VyY2UgaXMgc2NyZWVuIGNhc3QsIHdoaWxlIHZpZGVvIHNvdXJjZSBpcyBkaXNhYmxlZC5cbiAgICogQHBhcmFtIHtPd3QuQmFzZS5TdHJlYW1Db25zdHJhaW50c30gY29uc3RyYWludHNcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVNZWRpYVN0cmVhbShjb25zdHJhaW50cykge1xuICAgIGlmICh0eXBlb2YgY29uc3RyYWludHMgIT09ICdvYmplY3QnIHx8XG4gICAgICAgICghY29uc3RyYWludHMuYXVkaW8gJiYgIWNvbnN0cmFpbnRzLnZpZGVvKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29uc3RyYWlucycpKTtcbiAgICB9XG4gICAgaWYgKCFpc1ZpZGVvQ29uc3RyYWluc0ZvclNjcmVlbkNhc3QoY29uc3RyYWludHMpICYmXG4gICAgICAgICh0eXBlb2YgY29uc3RyYWludHMuYXVkaW8gPT09ICdvYmplY3QnKSAmJlxuICAgICAgICBjb25zdHJhaW50cy5hdWRpby5zb3VyY2UgPT09XG4gICAgICAgICAgICBNZWRpYUZvcm1hdE1vZHVsZS5BdWRpb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgIG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBzaGFyZSBzY3JlZW4gd2l0aG91dCB2aWRlby4nKSk7XG4gICAgfVxuICAgIGlmIChpc1ZpZGVvQ29uc3RyYWluc0ZvclNjcmVlbkNhc3QoY29uc3RyYWludHMpICYmXG4gICAgICAgIHR5cGVvZiBjb25zdHJhaW50cy5hdWRpbyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgY29uc3RyYWludHMuYXVkaW8uc291cmNlICE9PVxuICAgICAgICAgICAgTWVkaWFGb3JtYXRNb2R1bGUuQXVkaW9Tb3VyY2VJbmZvLlNDUkVFTkNBU1QpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICdDYW5ub3QgY2FwdHVyZSB2aWRlbyBmcm9tIHNjcmVlbiBjYXN0IHdoaWxlIGNhcHR1cmUgYXVkaW8gZnJvbSdcbiAgICAgICAgICArICcgb3RoZXIgc291cmNlLicpKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBhbmQgY29udmVydCBjb25zdHJhaW50cy5cbiAgICBpZiAoIWNvbnN0cmFpbnRzLmF1ZGlvICYmICFjb25zdHJhaW50cy52aWRlbykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgJ0F0IGxlYXN0IG9uZSBvZiBhdWRpbyBhbmQgdmlkZW8gbXVzdCBiZSByZXF1ZXN0ZWQuJykpO1xuICAgIH1cbiAgICBjb25zdCBtZWRpYUNvbnN0cmFpbnRzID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgaWYgKHR5cGVvZiBjb25zdHJhaW50cy5hdWRpbyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgY29uc3RyYWludHMuYXVkaW8uc291cmNlID09PSBNZWRpYUZvcm1hdE1vZHVsZS5BdWRpb1NvdXJjZUluZm8uTUlDKSB7XG4gICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgICBpZiAodXRpbHMuaXNFZGdlKCkpIHtcbiAgICAgICAgbWVkaWFDb25zdHJhaW50cy5hdWRpby5kZXZpY2VJZCA9IGNvbnN0cmFpbnRzLmF1ZGlvLmRldmljZUlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVkaWFDb25zdHJhaW50cy5hdWRpby5kZXZpY2VJZCA9IHtcbiAgICAgICAgICBleGFjdDogY29uc3RyYWludHMuYXVkaW8uZGV2aWNlSWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb25zdHJhaW50cy5hdWRpby5zb3VyY2UgPT09XG4gICAgICAgICAgTWVkaWFGb3JtYXRNb2R1bGUuQXVkaW9Tb3VyY2VJbmZvLlNDUkVFTkNBU1QpIHtcbiAgICAgICAgbWVkaWFDb25zdHJhaW50cy5hdWRpbyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvID0gY29uc3RyYWludHMuYXVkaW87XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29uc3RyYWludHMudmlkZW8gPT09ICdvYmplY3QnKSB7XG4gICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnN0cmFpbnRzLnZpZGVvLmZyYW1lUmF0ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby5mcmFtZVJhdGUgPSBjb25zdHJhaW50cy52aWRlby5mcmFtZVJhdGU7XG4gICAgICB9XG4gICAgICBpZiAoY29uc3RyYWludHMudmlkZW8ucmVzb2x1dGlvbiAmJlxuICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLnJlc29sdXRpb24ud2lkdGggJiZcbiAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uLmhlaWdodCkge1xuICAgICAgICBpZiAoY29uc3RyYWludHMudmlkZW8uc291cmNlID09PVxuICAgICAgICAgICAgICBNZWRpYUZvcm1hdE1vZHVsZS5WaWRlb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCkge1xuICAgICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8ud2lkdGggPSBjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uLndpZHRoO1xuICAgICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8uaGVpZ2h0ID0gY29uc3RyYWludHMudmlkZW8ucmVzb2x1dGlvbi5oZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby53aWR0aCA9IE9iamVjdC5jcmVhdGUoe30pO1xuICAgICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8ud2lkdGguZXhhY3QgPVxuICAgICAgICAgICAgY29uc3RyYWludHMudmlkZW8ucmVzb2x1dGlvbi53aWR0aDtcbiAgICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvLmhlaWdodCA9IE9iamVjdC5jcmVhdGUoe30pO1xuICAgICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8uaGVpZ2h0LmV4YWN0ID1cbiAgICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLnJlc29sdXRpb24uaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkID09PSAnc3RyaW5nJykge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkID0ge2V4YWN0OiBjb25zdHJhaW50cy52aWRlby5kZXZpY2VJZH07XG4gICAgICB9XG4gICAgICBpZiAodXRpbHMuaXNGaXJlZm94KCkgJiZcbiAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5zb3VyY2UgPT09XG4gICAgICAgICAgICAgIE1lZGlhRm9ybWF0TW9kdWxlLlZpZGVvU291cmNlSW5mby5TQ1JFRU5DQVNUKSB7XG4gICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8ubWVkaWFTb3VyY2UgPSAnc2NyZWVuJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzLnZpZGVvO1xuICAgIH1cblxuICAgIGlmIChpc1ZpZGVvQ29uc3RyYWluc0ZvclNjcmVlbkNhc3QoY29uc3RyYWludHMpKSB7XG4gICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXREaXNwbGF5TWVkaWEobWVkaWFDb25zdHJhaW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShtZWRpYUNvbnN0cmFpbnRzKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyfSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcblxuLyoqXG4gKiBAY2xhc3MgQXVkaW9QdWJsaWNhdGlvblNldHRpbmdzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgVGhlIGF1ZGlvIHNldHRpbmdzIG9mIGEgcHVibGljYXRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3Mge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlYykge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5BdWRpb0NvZGVjUGFyYW1ldGVyc30gY29kZWNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5jb2RlYyA9IGNvZGVjO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvUHVibGljYXRpb25TZXR0aW5nc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFRoZSB2aWRlbyBzZXR0aW5ncyBvZiBhIHB1YmxpY2F0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoY29kZWMsIHJlc29sdXRpb24sIGZyYW1lUmF0ZSxcbiAgICAgIGJpdHJhdGUsIGtleUZyYW1lSW50ZXJ2YWwsIHJpZCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5WaWRlb0NvZGVjUGFyYW1ldGVyc30gY29kZWNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5jb2RlYz1jb2RlYyxcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuUmVzb2x1dGlvbn0gcmVzb2x1dGlvblxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdXRpb249cmVzb2x1dGlvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBmcmFtZVJhdGVzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGNsYXNzRGVzYyBGcmFtZXMgcGVyIHNlY29uZC5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5mcmFtZVJhdGU9ZnJhbWVSYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGJpdHJhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5iaXRyYXRlPWJpdHJhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0ga2V5RnJhbWVJbnRlcnZhbHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAY2xhc3NEZXNjIFRoZSB0aW1lIGludGVydmFsIGJldHdlZW4ga2V5IGZyYW1lcy4gVW5pdDogc2Vjb25kLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmtleUZyYW1lSW50ZXJ2YWw9a2V5RnJhbWVJbnRlcnZhbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSByaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAY2xhc3NEZXNjIFJlc3RyaWN0aW9uIGlkZW50aWZpZXIgdG8gaWRlbnRpZnkgdGhlIFJUUCBTdHJlYW1zIHdpdGhpbiBhbiBSVFAgc2Vzc2lvbi5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5yaWQ9cmlkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFB1YmxpY2F0aW9uU2V0dGluZ3NcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBUaGUgc2V0dGluZ3Mgb2YgYSBwdWJsaWNhdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFB1YmxpY2F0aW9uU2V0dGluZ3Mge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpbywgdmlkZW8pIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5BdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3NbXX0gYXVkaW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25TZXR0aW5nc1xuICAgICAqL1xuICAgIHRoaXMuYXVkaW89YXVkaW87XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzW119IHZpZGVvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLnZpZGVvPXZpZGVvO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFB1YmxpY2F0aW9uXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBQdWJsaWNhdGlvbiByZXByZXNlbnRzIGEgc2VuZGVyIGZvciBwdWJsaXNoaW5nIGEgc3RyZWFtLiBJdFxuICogaGFuZGxlcyB0aGUgYWN0aW9ucyBvbiBhIExvY2FsU3RyZWFtIHB1Ymxpc2hlZCB0byBhIGNvbmZlcmVuY2UuXG4gKlxuICogRXZlbnRzOlxuICpcbiAqIHwgRXZlbnQgTmFtZSAgICAgIHwgQXJndW1lbnQgVHlwZSAgICB8IEZpcmVkIHdoZW4gICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tfCAtLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGVuZGVkICAgICAgICAgICB8IEV2ZW50ICAgICAgICAgICAgfCBQdWJsaWNhdGlvbiBpcyBlbmRlZC4gfFxuICogfCBlcnJvciAgICAgICAgICAgfCBFcnJvckV2ZW50ICAgICAgIHwgQW4gZXJyb3Igb2NjdXJyZWQgb24gdGhlIHB1YmxpY2F0aW9uLiB8XG4gKiB8IG11dGUgICAgICAgICAgICB8IE11dGVFdmVudCAgICAgICAgfCBQdWJsaWNhdGlvbiBpcyBtdXRlZC4gQ2xpZW50IHN0b3BwZWQgc2VuZGluZyBhdWRpbyBhbmQvb3IgdmlkZW8gZGF0YSB0byByZW1vdGUgZW5kcG9pbnQuIHxcbiAqIHwgdW5tdXRlICAgICAgICAgIHwgTXV0ZUV2ZW50ICAgICAgICB8IFB1YmxpY2F0aW9uIGlzIHVubXV0ZWQuIENsaWVudCBjb250aW51ZWQgc2VuZGluZyBhdWRpbyBhbmQvb3IgdmlkZW8gZGF0YSB0byByZW1vdGUgZW5kcG9pbnQuIHxcbiAqXG4gKiBgZW5kZWRgIGV2ZW50IG1heSBub3QgYmUgZmlyZWQgb24gU2FmYXJpIGFmdGVyIGNhbGxpbmcgYFB1YmxpY2F0aW9uLnN0b3AoKWAuXG4gKlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgUHVibGljYXRpb24gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihpZCwgdHJhbnNwb3J0LCBzdG9wLCBnZXRTdGF0cywgbXV0ZSwgdW5tdXRlKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uXG4gICAgICovXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdpZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogaWQgPyBpZCA6IFV0aWxzLmNyZWF0ZVV1aWQoKSxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5UcmFuc3BvcnRTZXR0aW5nc30gdHJhbnNwb3J0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQGRlc2MgVHJhbnNwb3J0IHNldHRpbmdzIGZvciB0aGUgcHVibGljYXRpb24uXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uXG4gICAgICovXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0cmFuc3BvcnQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHRyYW5zcG9ydCxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gc3RvcFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIFN0b3AgY2VydGFpbiBwdWJsaWNhdGlvbi4gT25jZSBhIHN1YnNjcmlwdGlvbiBpcyBzdG9wcGVkLCBpdCBjYW5ub3RcbiAgICAgKiBiZSByZWNvdmVyZWQuXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uXG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLnN0b3AgPSBzdG9wO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBnZXRTdGF0c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIEdldCBzdGF0cyBvZiB1bmRlcmx5aW5nIFBlZXJDb25uZWN0aW9uLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaWNhdGlvblxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJUQ1N0YXRzUmVwb3J0LCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy5nZXRTdGF0cyA9IGdldFN0YXRzO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBtdXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgU3RvcCBzZW5kaW5nIGRhdGEgdG8gcmVtb3RlIGVuZHBvaW50LlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaWNhdGlvblxuICAgICAqIEBwYXJhbSB7T3d0LkJhc2UuVHJhY2tLaW5kIH0ga2luZCBLaW5kIG9mIHRyYWNrcyB0byBiZSBtdXRlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQsIEVycm9yPn1cbiAgICAgKi9cbiAgICB0aGlzLm11dGUgPSBtdXRlO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiB1bm11dGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBDb250aW51ZSBzZW5kaW5nIGRhdGEgdG8gcmVtb3RlIGVuZHBvaW50LlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaWNhdGlvblxuICAgICAqIEBwYXJhbSB7T3d0LkJhc2UuVHJhY2tLaW5kIH0ga2luZCBLaW5kIG9mIHRyYWNrcyB0byBiZSB1bm11dGVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZCwgRXJyb3I+fVxuICAgICAqL1xuICAgIHRoaXMudW5tdXRlID0gdW5tdXRlO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFB1Ymxpc2hPcHRpb25zXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgUHVibGlzaE9wdGlvbnMgZGVmaW5lcyBvcHRpb25zIGZvciBwdWJsaXNoaW5nIGFcbiAqIE93dC5CYXNlLkxvY2FsU3RyZWFtLlxuICovXG5leHBvcnQgY2xhc3MgUHVibGlzaE9wdGlvbnMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpbywgdmlkZW8sIHRyYW5zcG9ydCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9BcnJheTxPd3QuQmFzZS5BdWRpb0VuY29kaW5nUGFyYW1ldGVycz4gfCA/QXJyYXk8UlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzPn0gYXVkaW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGlzaE9wdGlvbnNcbiAgICAgKiBAZGVzYyBQYXJhbWV0ZXJzIGZvciBhdWRpbyBSdHBTZW5kZXIuIFB1Ymxpc2hpbmcgd2l0aCBSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnMgaXMgYW4gZXhwZXJpbWVudGFsIGZlYXR1cmUuIEl0IGlzIHN1YmplY3QgdG8gY2hhbmdlLlxuICAgICAqL1xuICAgIHRoaXMuYXVkaW8gPSBhdWRpbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/QXJyYXk8T3d0LkJhc2UuVmlkZW9FbmNvZGluZ1BhcmFtZXRlcnM+IHwgP0FycmF5PFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycz59IHZpZGVvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1Ymxpc2hPcHRpb25zXG4gICAgICogQGRlc2MgUGFyYW1ldGVycyBmb3IgdmlkZW8gUnRwU2VuZGVyLiBQdWJsaXNoaW5nIHdpdGggUlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzIGlzIGFuIGV4cGVyaW1lbnRhbCBmZWF0dXJlLiBJdCBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cbiAgICAgKi9cbiAgICB0aGlzLnZpZGVvID0gdmlkZW87XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLlRyYW5zcG9ydENvbnN0cmFpbnRzfSB0cmFuc3BvcnRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGlzaE9wdGlvbnNcbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgfVxufVxuIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTQgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG5cbi8qIE1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlc2Ugb3B0aW9ucyBhdCBqc2hpbnQuY29tL2RvY3Mvb3B0aW9ucyAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKiBnbG9iYWxzICBhZGFwdGVyLCB0cmFjZSAqL1xuLyogZXhwb3J0ZWQgc2V0Q29kZWNQYXJhbSwgaWNlQ2FuZGlkYXRlVHlwZSwgZm9ybWF0VHlwZVByZWZlcmVuY2UsXG4gICBtYXliZVNldE9wdXNPcHRpb25zLCBtYXliZVByZWZlckF1ZGlvUmVjZWl2ZUNvZGVjLFxuICAgbWF5YmVQcmVmZXJBdWRpb1NlbmRDb2RlYywgbWF5YmVTZXRBdWRpb1JlY2VpdmVCaXRSYXRlLFxuICAgbWF5YmVTZXRBdWRpb1NlbmRCaXRSYXRlLCBtYXliZVByZWZlclZpZGVvUmVjZWl2ZUNvZGVjLFxuICAgbWF5YmVQcmVmZXJWaWRlb1NlbmRDb2RlYywgbWF5YmVTZXRWaWRlb1JlY2VpdmVCaXRSYXRlLFxuICAgbWF5YmVTZXRWaWRlb1NlbmRCaXRSYXRlLCBtYXliZVNldFZpZGVvU2VuZEluaXRpYWxCaXRSYXRlLFxuICAgbWF5YmVSZW1vdmVWaWRlb0ZlYywgbWVyZ2VDb25zdHJhaW50cywgcmVtb3ZlQ29kZWNQYXJhbSovXG5cbi8qIFRoaXMgZmlsZSBpcyBib3Jyb3dlZCBmcm9tIGFwcHJ0YyB3aXRoIHNvbWUgbW9kaWZpY2F0aW9ucy4gKi9cbi8qIENvbW1pdCBoYXNoOiBjNmFmMGMyNWU5YWY1MjdmNzFiM2FjZGQ2YmZhMTM4OWQ3NzhmN2JkICsgUFIgNTMwICovXG5cbmltcG9ydCBMb2dnZXIgZnJvbSAnLi9sb2dnZXIuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG1lcmdlQ29uc3RyYWludHMoY29uczEsIGNvbnMyKSB7XG4gIGlmICghY29uczEgfHwgIWNvbnMyKSB7XG4gICAgcmV0dXJuIGNvbnMxIHx8IGNvbnMyO1xuICB9XG4gIGNvbnN0IG1lcmdlZCA9IGNvbnMxO1xuICBmb3IgKGNvbnN0IGtleSBpbiBjb25zMikge1xuICAgIG1lcmdlZFtrZXldID0gY29uczJba2V5XTtcbiAgfVxuICByZXR1cm4gbWVyZ2VkO1xufVxuXG5mdW5jdGlvbiBpY2VDYW5kaWRhdGVUeXBlKGNhbmRpZGF0ZVN0cikge1xuICByZXR1cm4gY2FuZGlkYXRlU3RyLnNwbGl0KCcgJylbN107XG59XG5cbi8vIFR1cm5zIHRoZSBsb2NhbCB0eXBlIHByZWZlcmVuY2UgaW50byBhIGh1bWFuLXJlYWRhYmxlIHN0cmluZy5cbi8vIE5vdGUgdGhhdCB0aGlzIG1hcHBpbmcgaXMgYnJvd3Nlci1zcGVjaWZpYy5cbmZ1bmN0aW9uIGZvcm1hdFR5cGVQcmVmZXJlbmNlKHByZWYpIHtcbiAgaWYgKGFkYXB0ZXIuYnJvd3NlckRldGFpbHMuYnJvd3NlciA9PT0gJ2Nocm9tZScpIHtcbiAgICBzd2l0Y2ggKHByZWYpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuICdUVVJOL1RMUyc7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAnVFVSTi9UQ1AnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gJ1RVUk4vVURQJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhZGFwdGVyLmJyb3dzZXJEZXRhaWxzLmJyb3dzZXIgPT09ICdmaXJlZm94Jykge1xuICAgIHN3aXRjaCAocHJlZikge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gJ1RVUk4vVENQJztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcmV0dXJuICdUVVJOL1VEUCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBtYXliZVNldE9wdXNPcHRpb25zKHNkcCwgcGFyYW1zKSB7XG4gIC8vIFNldCBPcHVzIGluIFN0ZXJlbywgaWYgc3RlcmVvIGlzIHRydWUsIHVuc2V0IGl0LCBpZiBzdGVyZW8gaXMgZmFsc2UsIGFuZFxuICAvLyBkbyBub3RoaW5nIGlmIG90aGVyd2lzZS5cbiAgaWYgKHBhcmFtcy5vcHVzU3RlcmVvID09PSAndHJ1ZScpIHtcbiAgICBzZHAgPSBzZXRDb2RlY1BhcmFtKHNkcCwgJ29wdXMvNDgwMDAnLCAnc3RlcmVvJywgJzEnKTtcbiAgfSBlbHNlIGlmIChwYXJhbXMub3B1c1N0ZXJlbyA9PT0gJ2ZhbHNlJykge1xuICAgIHNkcCA9IHJlbW92ZUNvZGVjUGFyYW0oc2RwLCAnb3B1cy80ODAwMCcsICdzdGVyZW8nKTtcbiAgfVxuXG4gIC8vIFNldCBPcHVzIEZFQywgaWYgb3B1c2ZlYyBpcyB0cnVlLCB1bnNldCBpdCwgaWYgb3B1c2ZlYyBpcyBmYWxzZSwgYW5kXG4gIC8vIGRvIG5vdGhpbmcgaWYgb3RoZXJ3aXNlLlxuICBpZiAocGFyYW1zLm9wdXNGZWMgPT09ICd0cnVlJykge1xuICAgIHNkcCA9IHNldENvZGVjUGFyYW0oc2RwLCAnb3B1cy80ODAwMCcsICd1c2VpbmJhbmRmZWMnLCAnMScpO1xuICB9IGVsc2UgaWYgKHBhcmFtcy5vcHVzRmVjID09PSAnZmFsc2UnKSB7XG4gICAgc2RwID0gcmVtb3ZlQ29kZWNQYXJhbShzZHAsICdvcHVzLzQ4MDAwJywgJ3VzZWluYmFuZGZlYycpO1xuICB9XG5cbiAgLy8gU2V0IE9wdXMgRFRYLCBpZiBvcHVzZHR4IGlzIHRydWUsIHVuc2V0IGl0LCBpZiBvcHVzZHR4IGlzIGZhbHNlLCBhbmRcbiAgLy8gZG8gbm90aGluZyBpZiBvdGhlcndpc2UuXG4gIGlmIChwYXJhbXMub3B1c0R0eCA9PT0gJ3RydWUnKSB7XG4gICAgc2RwID0gc2V0Q29kZWNQYXJhbShzZHAsICdvcHVzLzQ4MDAwJywgJ3VzZWR0eCcsICcxJyk7XG4gIH0gZWxzZSBpZiAocGFyYW1zLm9wdXNEdHggPT09ICdmYWxzZScpIHtcbiAgICBzZHAgPSByZW1vdmVDb2RlY1BhcmFtKHNkcCwgJ29wdXMvNDgwMDAnLCAndXNlZHR4Jyk7XG4gIH1cblxuICAvLyBTZXQgT3B1cyBtYXhwbGF5YmFja3JhdGUsIGlmIHJlcXVlc3RlZC5cbiAgaWYgKHBhcmFtcy5vcHVzTWF4UGJyKSB7XG4gICAgc2RwID0gc2V0Q29kZWNQYXJhbShcbiAgICAgICAgc2RwLCAnb3B1cy80ODAwMCcsICdtYXhwbGF5YmFja3JhdGUnLCBwYXJhbXMub3B1c01heFBicik7XG4gIH1cbiAgcmV0dXJuIHNkcDtcbn1cblxuZnVuY3Rpb24gbWF5YmVTZXRBdWRpb1NlbmRCaXRSYXRlKHNkcCwgcGFyYW1zKSB7XG4gIGlmICghcGFyYW1zLmF1ZGlvU2VuZEJpdHJhdGUpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIExvZ2dlci5kZWJ1ZygnUHJlZmVyIGF1ZGlvIHNlbmQgYml0cmF0ZTogJyArIHBhcmFtcy5hdWRpb1NlbmRCaXRyYXRlKTtcbiAgcmV0dXJuIHByZWZlckJpdFJhdGUoc2RwLCBwYXJhbXMuYXVkaW9TZW5kQml0cmF0ZSwgJ2F1ZGlvJyk7XG59XG5cbmZ1bmN0aW9uIG1heWJlU2V0QXVkaW9SZWNlaXZlQml0UmF0ZShzZHAsIHBhcmFtcykge1xuICBpZiAoIXBhcmFtcy5hdWRpb1JlY3ZCaXRyYXRlKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBMb2dnZXIuZGVidWcoJ1ByZWZlciBhdWRpbyByZWNlaXZlIGJpdHJhdGU6ICcgKyBwYXJhbXMuYXVkaW9SZWN2Qml0cmF0ZSk7XG4gIHJldHVybiBwcmVmZXJCaXRSYXRlKHNkcCwgcGFyYW1zLmF1ZGlvUmVjdkJpdHJhdGUsICdhdWRpbycpO1xufVxuXG5mdW5jdGlvbiBtYXliZVNldFZpZGVvU2VuZEJpdFJhdGUoc2RwLCBwYXJhbXMpIHtcbiAgaWYgKCFwYXJhbXMudmlkZW9TZW5kQml0cmF0ZSkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgTG9nZ2VyLmRlYnVnKCdQcmVmZXIgdmlkZW8gc2VuZCBiaXRyYXRlOiAnICsgcGFyYW1zLnZpZGVvU2VuZEJpdHJhdGUpO1xuICByZXR1cm4gcHJlZmVyQml0UmF0ZShzZHAsIHBhcmFtcy52aWRlb1NlbmRCaXRyYXRlLCAndmlkZW8nKTtcbn1cblxuZnVuY3Rpb24gbWF5YmVTZXRWaWRlb1JlY2VpdmVCaXRSYXRlKHNkcCwgcGFyYW1zKSB7XG4gIGlmICghcGFyYW1zLnZpZGVvUmVjdkJpdHJhdGUpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIExvZ2dlci5kZWJ1ZygnUHJlZmVyIHZpZGVvIHJlY2VpdmUgYml0cmF0ZTogJyArIHBhcmFtcy52aWRlb1JlY3ZCaXRyYXRlKTtcbiAgcmV0dXJuIHByZWZlckJpdFJhdGUoc2RwLCBwYXJhbXMudmlkZW9SZWN2Qml0cmF0ZSwgJ3ZpZGVvJyk7XG59XG5cbi8vIEFkZCBhIGI9QVM6Yml0cmF0ZSBsaW5lIHRvIHRoZSBtPW1lZGlhVHlwZSBzZWN0aW9uLlxuZnVuY3Rpb24gcHJlZmVyQml0UmF0ZShzZHAsIGJpdHJhdGUsIG1lZGlhVHlwZSkge1xuICBjb25zdCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG5cbiAgLy8gRmluZCBtIGxpbmUgZm9yIHRoZSBnaXZlbiBtZWRpYVR5cGUuXG4gIGNvbnN0IG1MaW5lSW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ209JywgbWVkaWFUeXBlKTtcbiAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0ZhaWxlZCB0byBhZGQgYmFuZHdpZHRoIGxpbmUgdG8gc2RwLCBhcyBubyBtLWxpbmUgZm91bmQnKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgLy8gRmluZCBuZXh0IG0tbGluZSBpZiBhbnkuXG4gIGxldCBuZXh0TUxpbmVJbmRleCA9IGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgbUxpbmVJbmRleCArIDEsIC0xLCAnbT0nKTtcbiAgaWYgKG5leHRNTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgbmV4dE1MaW5lSW5kZXggPSBzZHBMaW5lcy5sZW5ndGg7XG4gIH1cblxuICAvLyBGaW5kIGMtbGluZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBtLWxpbmUuXG4gIGNvbnN0IGNMaW5lSW5kZXggPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIG1MaW5lSW5kZXggKyAxLFxuICAgICAgbmV4dE1MaW5lSW5kZXgsICdjPScpO1xuICBpZiAoY0xpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIExvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGFkZCBiYW5kd2lkdGggbGluZSB0byBzZHAsIGFzIG5vIGMtbGluZSBmb3VuZCcpO1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICAvLyBDaGVjayBpZiBiYW5kd2lkdGggbGluZSBhbHJlYWR5IGV4aXN0cyBiZXR3ZWVuIGMtbGluZSBhbmQgbmV4dCBtLWxpbmUuXG4gIGNvbnN0IGJMaW5lSW5kZXggPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIGNMaW5lSW5kZXggKyAxLFxuICAgICAgbmV4dE1MaW5lSW5kZXgsICdiPUFTJyk7XG4gIGlmIChiTGluZUluZGV4KSB7XG4gICAgc2RwTGluZXMuc3BsaWNlKGJMaW5lSW5kZXgsIDEpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSBiIChiYW5kd2lkdGgpIHNkcCBsaW5lLlxuICBjb25zdCBid0xpbmUgPSAnYj1BUzonICsgYml0cmF0ZTtcbiAgLy8gQXMgcGVyIFJGQyA0NTY2LCB0aGUgYiBsaW5lIHNob3VsZCBmb2xsb3cgYWZ0ZXIgYy1saW5lLlxuICBzZHBMaW5lcy5zcGxpY2UoY0xpbmVJbmRleCArIDEsIDAsIGJ3TGluZSk7XG4gIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuICByZXR1cm4gc2RwO1xufVxuXG4vLyBBZGQgYW4gYT1mbXRwOiB4LWdvb2dsZS1taW4tYml0cmF0ZT1rYnBzIGxpbmUsIGlmIHZpZGVvU2VuZEluaXRpYWxCaXRyYXRlXG4vLyBpcyBzcGVjaWZpZWQuIFdlJ2xsIGFsc28gYWRkIGEgeC1nb29nbGUtbWluLWJpdHJhdGUgdmFsdWUsIHNpbmNlIHRoZSBtYXhcbi8vIG11c3QgYmUgPj0gdGhlIG1pbi5cbmZ1bmN0aW9uIG1heWJlU2V0VmlkZW9TZW5kSW5pdGlhbEJpdFJhdGUoc2RwLCBwYXJhbXMpIHtcbiAgbGV0IGluaXRpYWxCaXRyYXRlID0gcGFyc2VJbnQocGFyYW1zLnZpZGVvU2VuZEluaXRpYWxCaXRyYXRlKTtcbiAgaWYgKCFpbml0aWFsQml0cmF0ZSkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICAvLyBWYWxpZGF0ZSB0aGUgaW5pdGlhbCBiaXRyYXRlIHZhbHVlLlxuICBsZXQgbWF4Qml0cmF0ZSA9IHBhcnNlSW50KGluaXRpYWxCaXRyYXRlKTtcbiAgY29uc3QgYml0cmF0ZSA9IHBhcnNlSW50KHBhcmFtcy52aWRlb1NlbmRCaXRyYXRlKTtcbiAgaWYgKGJpdHJhdGUpIHtcbiAgICBpZiAoaW5pdGlhbEJpdHJhdGUgPiBiaXRyYXRlKSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0NsYW1waW5nIGluaXRpYWwgYml0cmF0ZSB0byBtYXggYml0cmF0ZSBvZiAnICsgYml0cmF0ZSArICcga2Jwcy4nKTtcbiAgICAgIGluaXRpYWxCaXRyYXRlID0gYml0cmF0ZTtcbiAgICAgIHBhcmFtcy52aWRlb1NlbmRJbml0aWFsQml0cmF0ZSA9IGluaXRpYWxCaXRyYXRlO1xuICAgIH1cbiAgICBtYXhCaXRyYXRlID0gYml0cmF0ZTtcbiAgfVxuXG4gIGNvbnN0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcblxuICAvLyBTZWFyY2ggZm9yIG0gbGluZS5cbiAgY29uc3QgbUxpbmVJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCAndmlkZW8nKTtcbiAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0ZhaWxlZCB0byBmaW5kIHZpZGVvIG0tbGluZScpO1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgLy8gRmlndXJlIG91dCB0aGUgZmlyc3QgY29kZWMgcGF5bG9hZCB0eXBlIG9uIHRoZSBtPXZpZGVvIFNEUCBsaW5lLlxuICBjb25zdCB2aWRlb01MaW5lID0gc2RwTGluZXNbbUxpbmVJbmRleF07XG4gIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKCdtPXZpZGVvXFxcXHNcXFxcZCtcXFxcc1tBLVovXStcXFxccycpO1xuICBjb25zdCBzZW5kUGF5bG9hZFR5cGUgPSB2aWRlb01MaW5lLnNwbGl0KHBhdHRlcm4pWzFdLnNwbGl0KCcgJylbMF07XG4gIGNvbnN0IGZtdHBMaW5lID0gc2RwTGluZXNbZmluZExpbmUoc2RwTGluZXMsICdhPXJ0cG1hcCcsIHNlbmRQYXlsb2FkVHlwZSldO1xuICBjb25zdCBjb2RlY05hbWUgPSBmbXRwTGluZS5zcGxpdCgnYT1ydHBtYXA6JyArXG4gICAgICBzZW5kUGF5bG9hZFR5cGUpWzFdLnNwbGl0KCcvJylbMF07XG5cbiAgLy8gVXNlIGNvZGVjIGZyb20gcGFyYW1zIGlmIHNwZWNpZmllZCB2aWEgVVJMIHBhcmFtLCBvdGhlcndpc2UgdXNlIGZyb20gU0RQLlxuICBjb25zdCBjb2RlYyA9IHBhcmFtcy52aWRlb1NlbmRDb2RlYyB8fCBjb2RlY05hbWU7XG4gIHNkcCA9IHNldENvZGVjUGFyYW0oc2RwLCBjb2RlYywgJ3gtZ29vZ2xlLW1pbi1iaXRyYXRlJyxcbiAgICAgIHBhcmFtcy52aWRlb1NlbmRJbml0aWFsQml0cmF0ZS50b1N0cmluZygpKTtcbiAgc2RwID0gc2V0Q29kZWNQYXJhbShzZHAsIGNvZGVjLCAneC1nb29nbGUtbWF4LWJpdHJhdGUnLFxuICAgICAgbWF4Qml0cmF0ZS50b1N0cmluZygpKTtcblxuICByZXR1cm4gc2RwO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQYXlsb2FkVHlwZUZyb21NbGluZShtTGluZSwgcGF5bG9hZFR5cGUpIHtcbiAgbUxpbmUgPSBtTGluZS5zcGxpdCgnICcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1MaW5lLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKG1MaW5lW2ldID09PSBwYXlsb2FkVHlwZS50b1N0cmluZygpKSB7XG4gICAgICBtTGluZS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtTGluZS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvZGVjQnlOYW1lKHNkcExpbmVzLCBjb2RlYykge1xuICBjb25zdCBpbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1ydHBtYXAnLCBjb2RlYyk7XG4gIGlmIChpbmRleCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHBMaW5lcztcbiAgfVxuICBjb25zdCBwYXlsb2FkVHlwZSA9IGdldENvZGVjUGF5bG9hZFR5cGVGcm9tTGluZShzZHBMaW5lc1tpbmRleF0pO1xuICBzZHBMaW5lcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIC8vIFNlYXJjaCBmb3IgdGhlIHZpZGVvIG09IGxpbmUgYW5kIHJlbW92ZSB0aGUgY29kZWMuXG4gIGNvbnN0IG1MaW5lSW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ209JywgJ3ZpZGVvJyk7XG4gIGlmIChtTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcExpbmVzO1xuICB9XG4gIHNkcExpbmVzW21MaW5lSW5kZXhdID0gcmVtb3ZlUGF5bG9hZFR5cGVGcm9tTWxpbmUoc2RwTGluZXNbbUxpbmVJbmRleF0sXG4gICAgICBwYXlsb2FkVHlwZSk7XG4gIHJldHVybiBzZHBMaW5lcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ29kZWNCeVBheWxvYWRUeXBlKHNkcExpbmVzLCBwYXlsb2FkVHlwZSkge1xuICBjb25zdCBpbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1ydHBtYXAnLCBwYXlsb2FkVHlwZS50b1N0cmluZygpKTtcbiAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcExpbmVzO1xuICB9XG4gIHNkcExpbmVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgLy8gU2VhcmNoIGZvciB0aGUgdmlkZW8gbT0gbGluZSBhbmQgcmVtb3ZlIHRoZSBjb2RlYy5cbiAgY29uc3QgbUxpbmVJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCAndmlkZW8nKTtcbiAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwTGluZXM7XG4gIH1cbiAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSByZW1vdmVQYXlsb2FkVHlwZUZyb21NbGluZShzZHBMaW5lc1ttTGluZUluZGV4XSxcbiAgICAgIHBheWxvYWRUeXBlKTtcbiAgcmV0dXJuIHNkcExpbmVzO1xufVxuXG5mdW5jdGlvbiBtYXliZVJlbW92ZVZpZGVvRmVjKHNkcCwgcGFyYW1zKSB7XG4gIGlmIChwYXJhbXMudmlkZW9GZWMgIT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgbGV0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcblxuICBsZXQgaW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ2E9cnRwbWFwJywgJ3JlZCcpO1xuICBpZiAoaW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIGNvbnN0IHJlZFBheWxvYWRUeXBlID0gZ2V0Q29kZWNQYXlsb2FkVHlwZUZyb21MaW5lKHNkcExpbmVzW2luZGV4XSk7XG4gIHNkcExpbmVzID0gcmVtb3ZlQ29kZWNCeVBheWxvYWRUeXBlKHNkcExpbmVzLCByZWRQYXlsb2FkVHlwZSk7XG5cbiAgc2RwTGluZXMgPSByZW1vdmVDb2RlY0J5TmFtZShzZHBMaW5lcywgJ3VscGZlYycpO1xuXG4gIC8vIFJlbW92ZSBmbXRwIGxpbmVzIGFzc29jaWF0ZWQgd2l0aCByZWQgY29kZWMuXG4gIGluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdhPWZtdHAnLCByZWRQYXlsb2FkVHlwZS50b1N0cmluZygpKTtcbiAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBjb25zdCBmbXRwTGluZSA9IHBhcnNlRm10cExpbmUoc2RwTGluZXNbaW5kZXhdKTtcbiAgY29uc3QgcnR4UGF5bG9hZFR5cGUgPSBmbXRwTGluZS5wdDtcbiAgaWYgKHJ0eFBheWxvYWRUeXBlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBzZHBMaW5lcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIHNkcExpbmVzID0gcmVtb3ZlQ29kZWNCeVBheWxvYWRUeXBlKHNkcExpbmVzLCBydHhQYXlsb2FkVHlwZSk7XG4gIHJldHVybiBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcbn1cblxuLy8gUHJvbW90ZXMgfGF1ZGlvU2VuZENvZGVjfCB0byBiZSB0aGUgZmlyc3QgaW4gdGhlIG09YXVkaW8gbGluZSwgaWYgc2V0LlxuZnVuY3Rpb24gbWF5YmVQcmVmZXJBdWRpb1NlbmRDb2RlYyhzZHAsIHBhcmFtcykge1xuICByZXR1cm4gbWF5YmVQcmVmZXJDb2RlYyhzZHAsICdhdWRpbycsICdzZW5kJywgcGFyYW1zLmF1ZGlvU2VuZENvZGVjKTtcbn1cblxuLy8gUHJvbW90ZXMgfGF1ZGlvUmVjdkNvZGVjfCB0byBiZSB0aGUgZmlyc3QgaW4gdGhlIG09YXVkaW8gbGluZSwgaWYgc2V0LlxuZnVuY3Rpb24gbWF5YmVQcmVmZXJBdWRpb1JlY2VpdmVDb2RlYyhzZHAsIHBhcmFtcykge1xuICByZXR1cm4gbWF5YmVQcmVmZXJDb2RlYyhzZHAsICdhdWRpbycsICdyZWNlaXZlJywgcGFyYW1zLmF1ZGlvUmVjdkNvZGVjKTtcbn1cblxuLy8gUHJvbW90ZXMgfHZpZGVvU2VuZENvZGVjfCB0byBiZSB0aGUgZmlyc3QgaW4gdGhlIG09YXVkaW8gbGluZSwgaWYgc2V0LlxuZnVuY3Rpb24gbWF5YmVQcmVmZXJWaWRlb1NlbmRDb2RlYyhzZHAsIHBhcmFtcykge1xuICByZXR1cm4gbWF5YmVQcmVmZXJDb2RlYyhzZHAsICd2aWRlbycsICdzZW5kJywgcGFyYW1zLnZpZGVvU2VuZENvZGVjKTtcbn1cblxuLy8gUHJvbW90ZXMgfHZpZGVvUmVjdkNvZGVjfCB0byBiZSB0aGUgZmlyc3QgaW4gdGhlIG09YXVkaW8gbGluZSwgaWYgc2V0LlxuZnVuY3Rpb24gbWF5YmVQcmVmZXJWaWRlb1JlY2VpdmVDb2RlYyhzZHAsIHBhcmFtcykge1xuICByZXR1cm4gbWF5YmVQcmVmZXJDb2RlYyhzZHAsICd2aWRlbycsICdyZWNlaXZlJywgcGFyYW1zLnZpZGVvUmVjdkNvZGVjKTtcbn1cblxuLy8gU2V0cyB8Y29kZWN8IGFzIHRoZSBkZWZhdWx0IHx0eXBlfCBjb2RlYyBpZiBpdCdzIHByZXNlbnQuXG4vLyBUaGUgZm9ybWF0IG9mIHxjb2RlY3wgaXMgJ05BTUUvUkFURScsIGUuZy4gJ29wdXMvNDgwMDAnLlxuZnVuY3Rpb24gbWF5YmVQcmVmZXJDb2RlYyhzZHAsIHR5cGUsIGRpciwgY29kZWMpIHtcbiAgY29uc3Qgc3RyID0gdHlwZSArICcgJyArIGRpciArICcgY29kZWMnO1xuICBpZiAoIWNvZGVjKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdObyBwcmVmZXJlbmNlIG9uICcgKyBzdHIgKyAnLicpO1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBMb2dnZXIuZGVidWcoJ1ByZWZlciAnICsgc3RyICsgJzogJyArIGNvZGVjKTtcblxuICBjb25zdCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG5cbiAgLy8gU2VhcmNoIGZvciBtIGxpbmUuXG4gIGNvbnN0IG1MaW5lSW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ209JywgdHlwZSk7XG4gIGlmIChtTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIC8vIElmIHRoZSBjb2RlYyBpcyBhdmFpbGFibGUsIHNldCBpdCBhcyB0aGUgZGVmYXVsdCBpbiBtIGxpbmUuXG4gIGxldCBwYXlsb2FkID0gbnVsbDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZHBMaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGluZGV4ID0gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBpLCAtMSwgJ2E9cnRwbWFwJywgY29kZWMpO1xuICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgcGF5bG9hZCA9IGdldENvZGVjUGF5bG9hZFR5cGVGcm9tTGluZShzZHBMaW5lc1tpbmRleF0pO1xuICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSBzZXREZWZhdWx0Q29kZWMoc2RwTGluZXNbbUxpbmVJbmRleF0sIHBheWxvYWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuICByZXR1cm4gc2RwO1xufVxuXG4vLyBTZXQgZm10cCBwYXJhbSB0byBzcGVjaWZpYyBjb2RlYyBpbiBTRFAuIElmIHBhcmFtIGRvZXMgbm90IGV4aXN0cywgYWRkIGl0LlxuZnVuY3Rpb24gc2V0Q29kZWNQYXJhbShzZHAsIGNvZGVjLCBwYXJhbSwgdmFsdWUsIG1pZCkge1xuICBsZXQgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuICBsZXQgaGVhZExpbmVzID0gbnVsbDtcbiAgbGV0IHRhaWxMaW5lcyA9IG51bGw7XG4gIGlmICh0eXBlb2YgbWlkID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1pZFJhbmdlID0gZmluZE1MaW5lUmFuZ2VXaXRoTUlEKHNkcExpbmVzLCBtaWQpO1xuICAgIGlmIChtaWRSYW5nZSkge1xuICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBtaWRSYW5nZTtcbiAgICAgIGhlYWRMaW5lcyA9IHNkcExpbmVzLnNsaWNlKDAsIHN0YXJ0KTtcbiAgICAgIHRhaWxMaW5lcyA9IHNkcExpbmVzLnNsaWNlKGVuZCk7XG4gICAgICBzZHBMaW5lcyA9IHNkcExpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNEUHMgc2VudCBmcm9tIE1DVSB1c2UgXFxuIGFzIGxpbmUgYnJlYWsuXG4gIGlmIChzZHBMaW5lcy5sZW5ndGggPD0gMSkge1xuICAgIHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXG4nKTtcbiAgfVxuXG4gIGNvbnN0IGZtdHBMaW5lSW5kZXggPSBmaW5kRm10cExpbmUoc2RwTGluZXMsIGNvZGVjKTtcblxuICBsZXQgZm10cE9iaiA9IHt9O1xuICBpZiAoZm10cExpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdhPXJ0cG1hcCcsIGNvZGVjKTtcbiAgICBpZiAoaW5kZXggPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBzZHA7XG4gICAgfVxuICAgIGNvbnN0IHBheWxvYWQgPSBnZXRDb2RlY1BheWxvYWRUeXBlRnJvbUxpbmUoc2RwTGluZXNbaW5kZXhdKTtcbiAgICBmbXRwT2JqLnB0ID0gcGF5bG9hZC50b1N0cmluZygpO1xuICAgIGZtdHBPYmoucGFyYW1zID0ge307XG4gICAgZm10cE9iai5wYXJhbXNbcGFyYW1dID0gdmFsdWU7XG4gICAgc2RwTGluZXMuc3BsaWNlKGluZGV4ICsgMSwgMCwgd3JpdGVGbXRwTGluZShmbXRwT2JqKSk7XG4gIH0gZWxzZSB7XG4gICAgZm10cE9iaiA9IHBhcnNlRm10cExpbmUoc2RwTGluZXNbZm10cExpbmVJbmRleF0pO1xuICAgIGZtdHBPYmoucGFyYW1zW3BhcmFtXSA9IHZhbHVlO1xuICAgIHNkcExpbmVzW2ZtdHBMaW5lSW5kZXhdID0gd3JpdGVGbXRwTGluZShmbXRwT2JqKTtcbiAgfVxuXG4gIGlmIChoZWFkTGluZXMpIHtcbiAgICBzZHBMaW5lcyA9IGhlYWRMaW5lcy5jb25jYXQoc2RwTGluZXMpLmNvbmNhdCh0YWlsTGluZXMpO1xuICB9XG4gIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuICByZXR1cm4gc2RwO1xufVxuXG4vLyBSZW1vdmUgZm10cCBwYXJhbSBpZiBpdCBleGlzdHMuXG5mdW5jdGlvbiByZW1vdmVDb2RlY1BhcmFtKHNkcCwgY29kZWMsIHBhcmFtKSB7XG4gIGNvbnN0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcblxuICBjb25zdCBmbXRwTGluZUluZGV4ID0gZmluZEZtdHBMaW5lKHNkcExpbmVzLCBjb2RlYyk7XG4gIGlmIChmbXRwTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIGNvbnN0IG1hcCA9IHBhcnNlRm10cExpbmUoc2RwTGluZXNbZm10cExpbmVJbmRleF0pO1xuICBkZWxldGUgbWFwLnBhcmFtc1twYXJhbV07XG5cbiAgY29uc3QgbmV3TGluZSA9IHdyaXRlRm10cExpbmUobWFwKTtcbiAgaWYgKG5ld0xpbmUgPT09IG51bGwpIHtcbiAgICBzZHBMaW5lcy5zcGxpY2UoZm10cExpbmVJbmRleCwgMSk7XG4gIH0gZWxzZSB7XG4gICAgc2RwTGluZXNbZm10cExpbmVJbmRleF0gPSBuZXdMaW5lO1xuICB9XG5cbiAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XG4gIHJldHVybiBzZHA7XG59XG5cbi8vIFNwbGl0IGFuIGZtdHAgbGluZSBpbnRvIGFuIG9iamVjdCBpbmNsdWRpbmcgJ3B0JyBhbmQgJ3BhcmFtcycuXG5mdW5jdGlvbiBwYXJzZUZtdHBMaW5lKGZtdHBMaW5lKSB7XG4gIGNvbnN0IGZtdHBPYmogPSB7fTtcbiAgY29uc3Qgc3BhY2VQb3MgPSBmbXRwTGluZS5pbmRleE9mKCcgJyk7XG4gIGNvbnN0IGtleVZhbHVlcyA9IGZtdHBMaW5lLnN1YnN0cmluZyhzcGFjZVBvcyArIDEpLnNwbGl0KCc7Jyk7XG5cbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ2E9Zm10cDooXFxcXGQrKScpO1xuICBjb25zdCByZXN1bHQgPSBmbXRwTGluZS5tYXRjaChwYXR0ZXJuKTtcbiAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID09PSAyKSB7XG4gICAgZm10cE9iai5wdCA9IHJlc3VsdFsxXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHBhcmFtcyA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleVZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHBhaXIgPSBrZXlWYWx1ZXNbaV0uc3BsaXQoJz0nKTtcbiAgICBpZiAocGFpci5sZW5ndGggPT09IDIpIHtcbiAgICAgIHBhcmFtc1twYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgfVxuICB9XG4gIGZtdHBPYmoucGFyYW1zID0gcGFyYW1zO1xuXG4gIHJldHVybiBmbXRwT2JqO1xufVxuXG4vLyBHZW5lcmF0ZSBhbiBmbXRwIGxpbmUgZnJvbSBhbiBvYmplY3QgaW5jbHVkaW5nICdwdCcgYW5kICdwYXJhbXMnLlxuZnVuY3Rpb24gd3JpdGVGbXRwTGluZShmbXRwT2JqKSB7XG4gIGlmICghZm10cE9iai5oYXNPd25Qcm9wZXJ0eSgncHQnKSB8fCAhZm10cE9iai5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBwdCA9IGZtdHBPYmoucHQ7XG4gIGNvbnN0IHBhcmFtcyA9IGZtdHBPYmoucGFyYW1zO1xuICBjb25zdCBrZXlWYWx1ZXMgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcbiAgICBrZXlWYWx1ZXNbaV0gPSBrZXkgKyAnPScgKyBwYXJhbXNba2V5XTtcbiAgICArK2k7XG4gIH1cbiAgaWYgKGkgPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gJ2E9Zm10cDonICsgcHQudG9TdHJpbmcoKSArICcgJyArIGtleVZhbHVlcy5qb2luKCc7Jyk7XG59XG5cbi8vIEZpbmQgZm10cCBhdHRyaWJ1dGUgZm9yIHxjb2RlY3wgaW4gfHNkcExpbmVzfC5cbmZ1bmN0aW9uIGZpbmRGbXRwTGluZShzZHBMaW5lcywgY29kZWMpIHtcbiAgLy8gRmluZCBwYXlsb2FkIG9mIGNvZGVjLlxuICBjb25zdCBwYXlsb2FkID0gZ2V0Q29kZWNQYXlsb2FkVHlwZShzZHBMaW5lcywgY29kZWMpO1xuICAvLyBGaW5kIHRoZSBwYXlsb2FkIGluIGZtdHAgbGluZS5cbiAgcmV0dXJuIHBheWxvYWQgPyBmaW5kTGluZShzZHBMaW5lcywgJ2E9Zm10cDonICsgcGF5bG9hZC50b1N0cmluZygpKSA6IG51bGw7XG59XG5cbi8vIEZpbmQgdGhlIGxpbmUgaW4gc2RwTGluZXMgdGhhdCBzdGFydHMgd2l0aCB8cHJlZml4fCwgYW5kLCBpZiBzcGVjaWZpZWQsXG4vLyBjb250YWlucyB8c3Vic3RyfCAoY2FzZS1pbnNlbnNpdGl2ZSBzZWFyY2gpLlxuZnVuY3Rpb24gZmluZExpbmUoc2RwTGluZXMsIHByZWZpeCwgc3Vic3RyKSB7XG4gIHJldHVybiBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIDAsIC0xLCBwcmVmaXgsIHN1YnN0cik7XG59XG5cbi8vIEZpbmQgdGhlIGxpbmUgaW4gc2RwTGluZXNbc3RhcnRMaW5lLi4uZW5kTGluZSAtIDFdIHRoYXQgc3RhcnRzIHdpdGggfHByZWZpeHxcbi8vIGFuZCwgaWYgc3BlY2lmaWVkLCBjb250YWlucyB8c3Vic3RyfCAoY2FzZS1pbnNlbnNpdGl2ZSBzZWFyY2gpLlxuZnVuY3Rpb24gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBzdGFydExpbmUsIGVuZExpbmUsIHByZWZpeCwgc3Vic3RyKSB7XG4gIGNvbnN0IHJlYWxFbmRMaW5lID0gZW5kTGluZSAhPT0gLTEgPyBlbmRMaW5lIDogc2RwTGluZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gc3RhcnRMaW5lOyBpIDwgcmVhbEVuZExpbmU7ICsraSkge1xuICAgIGlmIChzZHBMaW5lc1tpXS5pbmRleE9mKHByZWZpeCkgPT09IDApIHtcbiAgICAgIGlmICghc3Vic3RyIHx8XG4gICAgICAgICAgc2RwTGluZXNbaV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHN1YnN0ci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBHZXRzIHRoZSBjb2RlYyBwYXlsb2FkIHR5cGUgZnJvbSBzZHAgbGluZXMuXG5mdW5jdGlvbiBnZXRDb2RlY1BheWxvYWRUeXBlKHNkcExpbmVzLCBjb2RlYykge1xuICBjb25zdCBpbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1ydHBtYXAnLCBjb2RlYyk7XG4gIHJldHVybiBpbmRleCA/IGdldENvZGVjUGF5bG9hZFR5cGVGcm9tTGluZShzZHBMaW5lc1tpbmRleF0pIDogbnVsbDtcbn1cblxuLy8gR2V0cyB0aGUgY29kZWMgcGF5bG9hZCB0eXBlIGZyb20gYW4gYT1ydHBtYXA6WCBsaW5lLlxuZnVuY3Rpb24gZ2V0Q29kZWNQYXlsb2FkVHlwZUZyb21MaW5lKHNkcExpbmUpIHtcbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ2E9cnRwbWFwOihcXFxcZCspIFthLXpBLVowLTktXStcXFxcL1xcXFxkKycpO1xuICBjb25zdCByZXN1bHQgPSBzZHBMaW5lLm1hdGNoKHBhdHRlcm4pO1xuICByZXR1cm4gKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID09PSAyKSA/IHJlc3VsdFsxXSA6IG51bGw7XG59XG5cbi8vIFJldHVybnMgYSBuZXcgbT0gbGluZSB3aXRoIHRoZSBzcGVjaWZpZWQgY29kZWMgYXMgdGhlIGZpcnN0IG9uZS5cbmZ1bmN0aW9uIHNldERlZmF1bHRDb2RlYyhtTGluZSwgcGF5bG9hZCkge1xuICBjb25zdCBlbGVtZW50cyA9IG1MaW5lLnNwbGl0KCcgJyk7XG5cbiAgLy8gSnVzdCBjb3B5IHRoZSBmaXJzdCB0aHJlZSBwYXJhbWV0ZXJzOyBjb2RlYyBvcmRlciBzdGFydHMgb24gZm91cnRoLlxuICBjb25zdCBuZXdMaW5lID0gZWxlbWVudHMuc2xpY2UoMCwgMyk7XG5cbiAgLy8gUHV0IHRhcmdldCBwYXlsb2FkIGZpcnN0IGFuZCBjb3B5IGluIHRoZSByZXN0LlxuICBuZXdMaW5lLnB1c2gocGF5bG9hZCk7XG4gIGZvciAobGV0IGkgPSAzOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudHNbaV0gIT09IHBheWxvYWQpIHtcbiAgICAgIG5ld0xpbmUucHVzaChlbGVtZW50c1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdMaW5lLmpvaW4oJyAnKTtcbn1cblxuLyogQmVsb3cgYXJlIG5ld2x5IGFkZGVkIGZ1bmN0aW9ucyAqL1xuXG4vLyBGb2xsb3dpbmcgY29kZWNzIHdpbGwgbm90IGJlIHJlbW92ZWQgZnJvbSBTRFAgZXZlbnQgdGhleSBhcmUgbm90IGluIHRoZVxuLy8gdXNlci1zcGVjaWZpZWQgY29kZWMgbGlzdC5cbmNvbnN0IGF1ZGlvQ29kZWNBbGxvd0xpc3QgPSBbJ0NOJywgJ3RlbGVwaG9uZS1ldmVudCddO1xuY29uc3QgdmlkZW9Db2RlY0FsbG93TGlzdCA9IFsncmVkJywgJ3VscGZlYycsICdmbGV4ZmVjJ107XG5cbi8vIFJldHVybnMgYSBuZXcgbT0gbGluZSB3aXRoIHRoZSBzcGVjaWZpZWQgY29kZWMgb3JkZXIuXG5mdW5jdGlvbiBzZXRDb2RlY09yZGVyKG1MaW5lLCBwYXlsb2Fkcykge1xuICBjb25zdCBlbGVtZW50cyA9IG1MaW5lLnNwbGl0KCcgJyk7XG5cbiAgLy8gSnVzdCBjb3B5IHRoZSBmaXJzdCB0aHJlZSBwYXJhbWV0ZXJzOyBjb2RlYyBvcmRlciBzdGFydHMgb24gZm91cnRoLlxuICBsZXQgbmV3TGluZSA9IGVsZW1lbnRzLnNsaWNlKDAsIDMpO1xuXG4gIC8vIENvbmNhdCBwYXlsb2FkIHR5cGVzLlxuICBuZXdMaW5lID0gbmV3TGluZS5jb25jYXQocGF5bG9hZHMpO1xuXG4gIHJldHVybiBuZXdMaW5lLmpvaW4oJyAnKTtcbn1cblxuLy8gQXBwZW5kIFJUWCBwYXlsb2FkcyBmb3IgZXhpc3RpbmcgcGF5bG9hZHMuXG5mdW5jdGlvbiBhcHBlbmRSdHhQYXlsb2FkcyhzZHBMaW5lcywgcGF5bG9hZHMpIHtcbiAgZm9yIChjb25zdCBwYXlsb2FkIG9mIHBheWxvYWRzKSB7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ2E9Zm10cCcsICdhcHQ9JyArIHBheWxvYWQpO1xuICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZm10cExpbmUgPSBwYXJzZUZtdHBMaW5lKHNkcExpbmVzW2luZGV4XSk7XG4gICAgICBwYXlsb2Fkcy5wdXNoKGZtdHBMaW5lLnB0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBheWxvYWRzO1xufVxuXG4vLyBSZW1vdmUgYSBjb2RlYyB3aXRoIGFsbCBpdHMgYXNzb2NpYXRlZCBhIGxpbmVzLlxuZnVuY3Rpb24gcmVtb3ZlQ29kZWNGcmFtQUxpbmUoc2RwTGluZXMsIHBheWxvYWQpIHtcbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ2E9KHJ0cG1hcHxydGNwLWZifGZtdHApOicrcGF5bG9hZCsnXFxcXHMnKTtcbiAgZm9yIChsZXQgaT1zZHBMaW5lcy5sZW5ndGgtMTsgaT4wOyBpLS0pIHtcbiAgICBpZiAoc2RwTGluZXNbaV0ubWF0Y2gocGF0dGVybikpIHtcbiAgICAgIHNkcExpbmVzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNkcExpbmVzO1xufVxuXG4vLyBGaW5kIG0tbGluZSBhbmQgbmV4dCBtLWxpbmUgd2l0aCBnaXZlIG1pZCwgcmV0dXJuIHsgc3RhcnQsIGVuZCB9LlxuZnVuY3Rpb24gZmluZE1MaW5lUmFuZ2VXaXRoTUlEKHNkcExpbmVzLCBtaWQpIHtcbiAgY29uc3QgbWlkTGluZSA9ICdhPW1pZDonICsgbWlkO1xuICBsZXQgbWlkSW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgbWlkTGluZSk7XG4gIC8vIENvbXBhcmUgdGhlIHdob2xlIGxpbmUgc2luY2UgZmluZExpbmUgb25seSBjb21wYXJlcyBwcmVmaXhcbiAgd2hpbGUgKG1pZEluZGV4ID49IDAgJiYgc2RwTGluZXNbbWlkSW5kZXhdICE9PSBtaWRMaW5lKSB7XG4gICAgbWlkSW5kZXggPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIG1pZEluZGV4LCAtMSwgbWlkTGluZSk7XG4gIH1cbiAgaWYgKG1pZEluZGV4ID49IDApIHtcbiAgICAvLyBGb3VuZCBtYXRjaGVkIGE9bWlkIGxpbmVcbiAgICBjb25zdCBuZXh0TUxpbmVJbmRleCA9IChmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIG1pZEluZGV4LCAtMSwgJ209JylcbiAgICAgICAgfHwgLTEpO1xuICAgIGxldCBtTGluZUluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgaSA9IG1pZEluZGV4OyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKHNkcExpbmVzW2ldLmluZGV4T2YoJ209JykgPj0gMCkge1xuICAgICAgICBtTGluZUluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtTGluZUluZGV4ID49IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBtTGluZUluZGV4LFxuICAgICAgICBlbmQ6IG5leHRNTGluZUluZGV4XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gUmVvcmRlciBjb2RlY3MgaW4gbS1saW5lIGFjY29yZGluZyB0aGUgb3JkZXIgb2YgfGNvZGVjc3wuIFJlbW92ZSBjb2RlY3MgZnJvbVxuLy8gbS1saW5lIGlmIGl0IGlzIG5vdCBwcmVzZW50IGluIHxjb2RlY3N8XG4vLyBBcHBsaWVkIG9uIHNwZWNpZmljIG0tbGluZSBpZiBtaWQgaXMgcHJlc2VudGVkXG4vLyBUaGUgZm9ybWF0IG9mIHxjb2RlY3wgaXMgJ05BTUUvUkFURScsIGUuZy4gJ29wdXMvNDgwMDAnLlxuZXhwb3J0IGZ1bmN0aW9uIHJlb3JkZXJDb2RlY3Moc2RwLCB0eXBlLCBjb2RlY3MsIG1pZCkge1xuICBpZiAoIWNvZGVjcyB8fCBjb2RlY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIGNvZGVjcyA9IHR5cGUgPT09ICdhdWRpbycgPyBjb2RlY3MuY29uY2F0KGF1ZGlvQ29kZWNBbGxvd0xpc3QpIDogY29kZWNzLmNvbmNhdChcbiAgICAgIHZpZGVvQ29kZWNBbGxvd0xpc3QpO1xuXG4gIGxldCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG4gIGxldCBoZWFkTGluZXMgPSBudWxsO1xuICBsZXQgdGFpbExpbmVzID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBtaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbWlkUmFuZ2UgPSBmaW5kTUxpbmVSYW5nZVdpdGhNSUQoc2RwTGluZXMsIG1pZCk7XG4gICAgaWYgKG1pZFJhbmdlKSB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IG1pZFJhbmdlO1xuICAgICAgaGVhZExpbmVzID0gc2RwTGluZXMuc2xpY2UoMCwgc3RhcnQpO1xuICAgICAgdGFpbExpbmVzID0gc2RwTGluZXMuc2xpY2UoZW5kKTtcbiAgICAgIHNkcExpbmVzID0gc2RwTGluZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2VhcmNoIGZvciBtIGxpbmUuXG4gIGNvbnN0IG1MaW5lSW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ209JywgdHlwZSk7XG4gIGlmIChtTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIGNvbnN0IG9yaWdpblBheWxvYWRzID0gc2RwTGluZXNbbUxpbmVJbmRleF0uc3BsaXQoJyAnKTtcbiAgb3JpZ2luUGF5bG9hZHMuc3BsaWNlKDAsIDMpO1xuXG4gIC8vIElmIHRoZSBjb2RlYyBpcyBhdmFpbGFibGUsIHNldCBpdCBhcyB0aGUgZGVmYXVsdCBpbiBtIGxpbmUuXG4gIGxldCBwYXlsb2FkcyA9IFtdO1xuICBmb3IgKGNvbnN0IGNvZGVjIG9mIGNvZGVjcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2RwTGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBpLCAtMSwgJ2E9cnRwbWFwJywgY29kZWMpO1xuICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBnZXRDb2RlY1BheWxvYWRUeXBlRnJvbUxpbmUoc2RwTGluZXNbaW5kZXhdKTtcbiAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICBwYXlsb2Fkcy5wdXNoKHBheWxvYWQpO1xuICAgICAgICAgIGkgPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwYXlsb2FkcyA9IGFwcGVuZFJ0eFBheWxvYWRzKHNkcExpbmVzLCBwYXlsb2Fkcyk7XG4gIHNkcExpbmVzW21MaW5lSW5kZXhdID0gc2V0Q29kZWNPcmRlcihzZHBMaW5lc1ttTGluZUluZGV4XSwgcGF5bG9hZHMpO1xuXG4gIC8vIFJlbW92ZSBhIGxpbmVzLlxuICBmb3IgKGNvbnN0IHBheWxvYWQgb2Ygb3JpZ2luUGF5bG9hZHMpIHtcbiAgICBpZiAocGF5bG9hZHMuaW5kZXhPZihwYXlsb2FkKT09PS0xKSB7XG4gICAgICBzZHBMaW5lcyA9IHJlbW92ZUNvZGVjRnJhbUFMaW5lKHNkcExpbmVzLCBwYXlsb2FkKTtcbiAgICB9XG4gIH1cblxuICBpZiAoaGVhZExpbmVzKSB7XG4gICAgc2RwTGluZXMgPSBoZWFkTGluZXMuY29uY2F0KHNkcExpbmVzKS5jb25jYXQodGFpbExpbmVzKTtcbiAgfVxuICBzZHAgPSBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcbiAgcmV0dXJuIHNkcDtcbn1cblxuLy8gQWRkIGxlZ2FjeSBzaW11bGNhc3QuXG5leHBvcnQgZnVuY3Rpb24gYWRkTGVnYWN5U2ltdWxjYXN0KHNkcCwgdHlwZSwgbnVtU3RyZWFtcywgbWlkKSB7XG4gIGlmICghbnVtU3RyZWFtcyB8fCAhKG51bVN0cmVhbXMgPiAxKSkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBsZXQgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuICBsZXQgaGVhZExpbmVzID0gbnVsbDtcbiAgbGV0IHRhaWxMaW5lcyA9IG51bGw7XG4gIGlmICh0eXBlb2YgbWlkID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1pZFJhbmdlID0gZmluZE1MaW5lUmFuZ2VXaXRoTUlEKHNkcExpbmVzLCBtaWQpO1xuICAgIGlmIChtaWRSYW5nZSkge1xuICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBtaWRSYW5nZTtcbiAgICAgIGhlYWRMaW5lcyA9IHNkcExpbmVzLnNsaWNlKDAsIHN0YXJ0KTtcbiAgICAgIHRhaWxMaW5lcyA9IHNkcExpbmVzLnNsaWNlKGVuZCk7XG4gICAgICBzZHBMaW5lcyA9IHNkcExpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNlYXJjaCBmb3IgbSBsaW5lLlxuICBjb25zdCBtTGluZVN0YXJ0ID0gZmluZExpbmUoc2RwTGluZXMsICdtPScsIHR5cGUpO1xuICBpZiAobUxpbmVTdGFydCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgbGV0IG1MaW5lRW5kID0gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBtTGluZVN0YXJ0ICsgMSwgLTEsICdtPScpO1xuICBpZiAobUxpbmVFbmQgPT09IG51bGwpIHtcbiAgICBtTGluZUVuZCA9IHNkcExpbmVzLmxlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IHNzcmNHZXR0ZXIgPSAobGluZSkgPT4ge1xuICAgIGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdCgnICcpO1xuICAgIGNvbnN0IHNzcmMgPSBwYXJ0c1swXS5zcGxpdCgnOicpWzFdO1xuICAgIHJldHVybiBzc3JjO1xuICB9O1xuXG4gIC8vIFByb2Nlc3Mgc3NyYyBsaW5lcyBmcm9tIG1MaW5lSW5kZXguXG4gIGNvbnN0IHJlbW92ZXMgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHNzcmNzID0gbmV3IFNldCgpO1xuICBjb25zdCBnc3NyY3MgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHNpbUxpbmVzID0gW107XG4gIGNvbnN0IHNpbUdyb3VwTGluZXMgPSBbXTtcbiAgbGV0IGkgPSBtTGluZVN0YXJ0ICsgMTtcbiAgd2hpbGUgKGkgPCBtTGluZUVuZCkge1xuICAgIGNvbnN0IGxpbmUgPSBzZHBMaW5lc1tpXTtcbiAgICBpZiAobGluZSA9PT0gJycpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAobGluZS5pbmRleE9mKCdhPXNzcmM6JykgPiAtMSkge1xuICAgICAgY29uc3Qgc3NyYyA9IHNzcmNHZXR0ZXIoc2RwTGluZXNbaV0pO1xuICAgICAgc3NyY3MuYWRkKHNzcmMpO1xuICAgICAgaWYgKGxpbmUuaW5kZXhPZignY25hbWUnKSA+IC0xIHx8IGxpbmUuaW5kZXhPZignbXNpZCcpID4gLTEpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBudW1TdHJlYW1zOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBuc3NyYyA9IChwYXJzZUludChzc3JjKSArIGopICsgJyc7XG4gICAgICAgICAgc2ltTGluZXMucHVzaChsaW5lLnJlcGxhY2Uoc3NyYywgbnNzcmMpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3Zlcy5hZGQobGluZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsaW5lLmluZGV4T2YoJ2E9c3NyYy1ncm91cDpGSUQnKSA+IC0xKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGxpbmUuc3BsaXQoJyAnKTtcbiAgICAgIGdzc3Jjcy5hZGQocGFydHNbMl0pO1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBudW1TdHJlYW1zOyBqKyspIHtcbiAgICAgICAgY29uc3QgbnNzcmMxID0gKHBhcnNlSW50KHBhcnRzWzFdKSArIGopICsgJyc7XG4gICAgICAgIGNvbnN0IG5zc3JjMiA9IChwYXJzZUludChwYXJ0c1syXSkgKyBqKSArICcnO1xuICAgICAgICBzaW1Hcm91cExpbmVzLnB1c2goXG4gICAgICAgICAgbGluZS5yZXBsYWNlKHBhcnRzWzFdLCBuc3NyYzEpLnJlcGxhY2UocGFydHNbMl0sIG5zc3JjMikpO1xuICAgICAgfVxuICAgIH1cbiAgICBpKys7XG4gIH1cblxuICBjb25zdCBpbnNlcnRQb3MgPSBpO1xuICBzc3Jjcy5mb3JFYWNoKHNzcmMgPT4ge1xuICAgIGlmICghZ3NzcmNzLmhhcyhzc3JjKSkge1xuICAgICAgbGV0IGdyb3VwTGluZSA9ICdhPXNzcmMtZ3JvdXA6U0lNJztcbiAgICAgIGdyb3VwTGluZSA9IGdyb3VwTGluZSArICcgJyArIHNzcmM7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IG51bVN0cmVhbXM7IGorKykge1xuICAgICAgICBncm91cExpbmUgPSBncm91cExpbmUgKyAnICcgKyAocGFyc2VJbnQoc3NyYykgKyBqKTtcbiAgICAgIH1cbiAgICAgIHNpbUdyb3VwTGluZXMucHVzaChncm91cExpbmUpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2ltTGluZXMuc29ydCgpO1xuICAvLyBJbnNlcnQgc2ltdWxjYXN0IHNzcmMgbGluZXMuXG4gIHNkcExpbmVzLnNwbGljZShpbnNlcnRQb3MsIDAsIC4uLnNpbUdyb3VwTGluZXMpO1xuICBzZHBMaW5lcy5zcGxpY2UoaW5zZXJ0UG9zLCAwLCAuLi5zaW1MaW5lcyk7XG4gIHNkcExpbmVzID0gc2RwTGluZXMuZmlsdGVyKGxpbmUgPT4gIXJlbW92ZXMuaGFzKGxpbmUpKTtcblxuICBpZiAoaGVhZExpbmVzKSB7XG4gICAgc2RwTGluZXMgPSBoZWFkTGluZXMuY29uY2F0KHNkcExpbmVzKS5jb25jYXQodGFpbExpbmVzKTtcbiAgfVxuICBzZHAgPSBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcbiAgcmV0dXJuIHNkcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1heEJpdHJhdGUoc2RwLCBlbmNvZGluZ1BhcmFtZXRlcnNMaXN0LCBtaWQpIHtcbiAgZm9yIChjb25zdCBlbmNvZGluZ1BhcmFtZXRlcnMgb2YgZW5jb2RpbmdQYXJhbWV0ZXJzTGlzdCkge1xuICAgIGlmIChlbmNvZGluZ1BhcmFtZXRlcnMubWF4Qml0cmF0ZSkge1xuICAgICAgc2RwID0gc2V0Q29kZWNQYXJhbShcbiAgICAgICAgICBzZHAsIGVuY29kaW5nUGFyYW1ldGVycy5jb2RlYy5uYW1lLCAneC1nb29nbGUtbWF4LWJpdHJhdGUnLFxuICAgICAgICAgIChlbmNvZGluZ1BhcmFtZXRlcnMubWF4Qml0cmF0ZSkudG9TdHJpbmcoKSwgbWlkKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNkcDtcbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZ2xvYmFsIFdlYlRyYW5zcG9ydEJpZGlyZWN0aW9uYWxTdHJlYW0gKi9cblxuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlciwgT3d0RXZlbnR9IGZyb20gJy4vZXZlbnQuanMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gaXNBbGxvd2VkVmFsdWUob2JqLCBhbGxvd2VkVmFsdWVzKSB7XG4gIHJldHVybiAoYWxsb3dlZFZhbHVlcy5zb21lKChlbGUpID0+IHtcbiAgICByZXR1cm4gZWxlID09PSBvYmo7XG4gIH0pKTtcbn1cbi8qKlxuICogQGNsYXNzIFN0cmVhbVNvdXJjZUluZm9cbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBJbmZvcm1hdGlvbiBvZiBhIHN0cmVhbSdzIHNvdXJjZS5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGRlc2NyaXB0aW9uIEF1ZGlvIHNvdXJjZSBpbmZvIG9yIHZpZGVvIHNvdXJjZSBpbmZvIGNvdWxkIGJlIHVuZGVmaW5lZCBpZlxuICogYSBzdHJlYW0gZG9lcyBub3QgaGF2ZSBhdWRpby92aWRlbyB0cmFjay5cbiAqIEBwYXJhbSB7P3N0cmluZ30gYXVkaW9Tb3VyY2VJbmZvIEF1ZGlvIHNvdXJjZSBpbmZvLiBBY2NlcHRlZCB2YWx1ZXMgYXJlOlxuICogXCJtaWNcIiwgXCJzY3JlZW4tY2FzdFwiLCBcImZpbGVcIiwgXCJtaXhlZFwiIG9yIHVuZGVmaW5lZC5cbiAqIEBwYXJhbSB7P3N0cmluZ30gdmlkZW9Tb3VyY2VJbmZvIFZpZGVvIHNvdXJjZSBpbmZvLiBBY2NlcHRlZCB2YWx1ZXMgYXJlOlxuICogXCJjYW1lcmFcIiwgXCJzY3JlZW4tY2FzdFwiLCBcImZpbGVcIiwgXCJtaXhlZFwiIG9yIHVuZGVmaW5lZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGF0YVNvdXJjZUluZm8gSW5kaWNhdGVzIHdoZXRoZXIgaXQgaXMgZGF0YS4gQWNjZXB0ZWQgdmFsdWVzXG4gKiBhcmUgYm9vbGVhbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbVNvdXJjZUluZm8ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpb1NvdXJjZUluZm8sIHZpZGVvU291cmNlSW5mbywgZGF0YVNvdXJjZUluZm8pIHtcbiAgICBpZiAoIWlzQWxsb3dlZFZhbHVlKGF1ZGlvU291cmNlSW5mbywgW3VuZGVmaW5lZCwgJ21pYycsICdzY3JlZW4tY2FzdCcsXG4gICAgICAnZmlsZScsICdtaXhlZCddKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb3JyZWN0IHZhbHVlIGZvciBhdWRpb1NvdXJjZUluZm8nKTtcbiAgICB9XG4gICAgaWYgKCFpc0FsbG93ZWRWYWx1ZSh2aWRlb1NvdXJjZUluZm8sIFt1bmRlZmluZWQsICdjYW1lcmEnLCAnc2NyZWVuLWNhc3QnLFxuICAgICAgJ2ZpbGUnLCAnZW5jb2RlZC1maWxlJywgJ3Jhdy1maWxlJywgJ21peGVkJ10pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvcnJlY3QgdmFsdWUgZm9yIHZpZGVvU291cmNlSW5mbycpO1xuICAgIH1cbiAgICB0aGlzLmF1ZGlvID0gYXVkaW9Tb3VyY2VJbmZvO1xuICAgIHRoaXMudmlkZW8gPSB2aWRlb1NvdXJjZUluZm87XG4gICAgdGhpcy5kYXRhID0gZGF0YVNvdXJjZUluZm87XG4gIH1cbn1cbi8qKlxuICogQGNsYXNzIFN0cmVhbVxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIEJhc2UgY2xhc3Mgb2Ygc3RyZWFtcy5cbiAqIEBleHRlbmRzIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3Ioc3RyZWFtLCBzb3VyY2VJbmZvLCBhdHRyaWJ1dGVzKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoKHN0cmVhbSAmJiAhKHN0cmVhbSBpbnN0YW5jZW9mIE1lZGlhU3RyZWFtKSAmJlxuICAgICAgICAgISh0eXBlb2YgV2ViVHJhbnNwb3J0QmlkaXJlY3Rpb25hbFN0cmVhbSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICBzdHJlYW0gaW5zdGFuY2VvZiBXZWJUcmFuc3BvcnRCaWRpcmVjdGlvbmFsU3RyZWFtKSkgfHxcbiAgICAgICAgKHR5cGVvZiBzb3VyY2VJbmZvICE9PSAnb2JqZWN0JykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgc3RyZWFtIG9yIHNvdXJjZUluZm8uJyk7XG4gICAgfVxuICAgIGlmIChzdHJlYW0gJiYgKHN0cmVhbSBpbnN0YW5jZW9mIE1lZGlhU3RyZWFtKSAmJlxuICAgICAgICAoKHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCA+IDAgJiYgIXNvdXJjZUluZm8uYXVkaW8pIHx8XG4gICAgICAgICBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPiAwICYmICFzb3VyY2VJbmZvLnZpZGVvKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTWlzc2luZyBhdWRpbyBzb3VyY2UgaW5mbyBvciB2aWRlbyBzb3VyY2UgaW5mby4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5TdHJlYW1cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFjYXB0dXJlLXN0cmVhbXMvI21lZGlhc3RyZWFtfE1lZGlhU3RyZWFtIEFQSSBvZiBNZWRpYSBDYXB0dXJlIGFuZCBTdHJlYW1zfS5cbiAgICAgKiBAZGVzYyBUaGlzIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2Ugc3RyZWFtIGluc3RlYWQuXG4gICAgICovXG4gICAgaWYgKHN0cmVhbSBpbnN0YW5jZW9mIE1lZGlhU3RyZWFtKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ21lZGlhU3RyZWFtJywge1xuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHN0cmVhbSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtNZWRpYVN0cmVhbSB8IFdlYlRyYW5zcG9ydEJpZGlyZWN0aW9uYWxTdHJlYW0gfCB1bmRlZmluZWR9IHN0cmVhbVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5TdHJlYW1cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFjYXB0dXJlLXN0cmVhbXMvI21lZGlhc3RyZWFtfE1lZGlhU3RyZWFtIEFQSSBvZiBNZWRpYSBDYXB0dXJlIGFuZCBTdHJlYW1zfVxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd2ljZy5naXRodWIuaW8vd2ViLXRyYW5zcG9ydC8gV2ViVHJhbnNwb3J0fS5cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3N0cmVhbScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBzdHJlYW0sXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuU3RyZWFtU291cmNlSW5mb30gc291cmNlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbVxuICAgICAqIEBkZXNjIFNvdXJjZSBpbmZvIG9mIGEgc3RyZWFtLlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VJbmZvLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge29iamVjdH0gYXR0cmlidXRlc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5TdHJlYW1cbiAgICAgKiBAZGVzYyBDdXN0b20gYXR0cmlidXRlcyBvZiBhIHN0cmVhbS5cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2F0dHJpYnV0ZXMnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogYXR0cmlidXRlcyxcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBAY2xhc3MgTG9jYWxTdHJlYW1cbiAqIEBjbGFzc0Rlc2MgU3RyZWFtIGNhcHR1cmVkIGZyb20gY3VycmVudCBlbmRwb2ludC5cbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuU3RyZWFtXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IHN0cmVhbSBVbmRlcmx5aW5nIE1lZGlhU3RyZWFtLlxuICogQHBhcmFtIHtPd3QuQmFzZS5TdHJlYW1Tb3VyY2VJbmZvfSBzb3VyY2VJbmZvIEluZm9ybWF0aW9uIGFib3V0IHN0cmVhbSdzXG4gKiBzb3VyY2UuXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyBDdXN0b20gYXR0cmlidXRlcyBvZiB0aGUgc3RyZWFtLlxuICovXG5leHBvcnQgY2xhc3MgTG9jYWxTdHJlYW0gZXh0ZW5kcyBTdHJlYW0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihzdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIXN0cmVhbSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU3RyZWFtIGNhbm5vdCBiZSBudWxsLicpO1xuICAgIH1cbiAgICBzdXBlcihzdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuTG9jYWxTdHJlYW1cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBVdGlscy5jcmVhdGVVdWlkKCksXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogQGNsYXNzIFJlbW90ZVN0cmVhbVxuICogQGNsYXNzRGVzYyBTdHJlYW0gc2VudCBmcm9tIGEgcmVtb3RlIGVuZHBvaW50LiBJbiBjb25mZXJlbmNlIG1vZGUsXG4gKiBSZW1vdGVTdHJlYW0ncyBzdHJlYW0gaXMgYWx3YXlzIHVuZGVmaW5lZC4gUGxlYXNlIGdldCBNZWRpYVN0cmVhbSBvclxuICogUmVhZGFibGVTdHJlYW0gZnJvbSBzdWJzY3JpcHRpb24ncyBzdHJlYW0gcHJvcGVydHkuXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgfCBBcmd1bWVudCBUeXBlICAgIHwgRmlyZWQgd2hlbiAgICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGVuZGVkICAgICAgICAgICB8IEV2ZW50ICAgICAgICAgICAgfCBTdHJlYW0gaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSBvbiBzZXJ2ZXIgc2lkZS4gICB8XG4gKiB8IHVwZGF0ZWQgICAgICAgICB8IEV2ZW50ICAgICAgICAgICAgfCBTdHJlYW0gaXMgdXBkYXRlZC4gfFxuICpcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuU3RyZWFtXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdGVTdHJlYW0gZXh0ZW5kcyBTdHJlYW0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihpZCwgb3JpZ2luLCBzdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpIHtcbiAgICBzdXBlcihzdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUmVtb3RlU3RyZWFtXG4gICAgICovXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdpZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogaWQgPyBpZCA6IFV0aWxzLmNyZWF0ZVV1aWQoKSxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG9yaWdpblxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5SZW1vdGVTdHJlYW1cbiAgICAgKiBAZGVzYyBJRCBvZiB0aGUgcmVtb3RlIGVuZHBvaW50IHdobyBwdWJsaXNoZWQgdGhpcyBzdHJlYW0uXG4gICAgICovXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdvcmlnaW4nLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IG9yaWdpbixcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5QdWJsaWNhdGlvblNldHRpbmdzfSBzZXR0aW5nc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5SZW1vdGVTdHJlYW1cbiAgICAgKiBAZGVzYyBPcmlnaW5hbCBzZXR0aW5ncyBmb3IgcHVibGlzaGluZyB0aGlzIHN0cmVhbS4gVGhpcyBwcm9wZXJ0eSBpcyBvbmx5XG4gICAgICogdmFsaWQgaW4gY29uZmVyZW5jZSBtb2RlLlxuICAgICAqL1xuICAgIHRoaXMuc2V0dGluZ3MgPSB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzfSBleHRyYUNhcGFiaWxpdGllc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5SZW1vdGVTdHJlYW1cbiAgICAgKiBAZGVzYyBFeHRyYSBjYXBhYmlsaXRpZXMgcmVtb3RlIGVuZHBvaW50IHByb3ZpZGVzIGZvciBzdWJzY3JpcHRpb24uIEV4dHJhXG4gICAgICogY2FwYWJpbGl0aWVzIGRvbid0IGluY2x1ZGUgb3JpZ2luYWwgc2V0dGluZ3MuIFRoaXMgcHJvcGVydHkgaXMgb25seSB2YWxpZFxuICAgICAqIGluIGNvbmZlcmVuY2UgbW9kZS5cbiAgICAgKi9cbiAgICB0aGlzLmV4dHJhQ2FwYWJpbGl0aWVzID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFN0cmVhbUV2ZW50XG4gKiBAY2xhc3NEZXNjIEV2ZW50IGZvciBTdHJlYW0uXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5Pd3RFdmVudFxuICogQG1lbWJlcm9mIE93dC5CYXNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1FdmVudCBleHRlbmRzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaW5pdCkge1xuICAgIHN1cGVyKHR5cGUpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlN0cmVhbX0gc3RyZWFtXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbUV2ZW50XG4gICAgICovXG4gICAgdGhpcy5zdHJlYW0gPSBpbml0LnN0cmVhbTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAyMD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGNsYXNzIFRyYW5zcG9ydFR5cGVcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBUcmFuc3BvcnQgdHlwZSBlbnVtZXJhdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IFRyYW5zcG9ydFR5cGUgPSB7XG4gIFFVSUM6ICdxdWljJyxcbiAgV0VCUlRDOiAnd2VicnRjJyxcbn07XG5cbi8qKlxuICogQGNsYXNzIFRyYW5zcG9ydENvbnN0cmFpbnRzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgUmVwcmVzZW50cyB0aGUgdHJhbnNwb3J0IGNvbnN0cmFpbnRzIGZvciBwdWJsaWNhdGlvbiBhbmRcbiAqIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zcG9ydENvbnN0cmFpbnRzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaWQpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48T3d0LkJhc2UuVHJhbnNwb3J0VHlwZT59IHR5cGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVHJhbnNwb3J0Q29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBUcmFuc3BvcnQgdHlwZSBmb3IgcHVibGljYXRpb24gYW5kIHN1YnNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9zdHJpbmd9IGlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlRyYW5zcG9ydENvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgVHJhbnNwb3J0IElELiBVbmRlZmluZWQgdHJhbnNwb3J0IElEIHJlc3VsdHMgc2VydmVyIHRvIGFzc2lnbiBhIG5ld1xuICAgICAqIG9uZS4gSXQgc2hvdWxkIGFsd2F5cyBiZSB1bmRlZmluZWQgaWYgdHJhbnNwb3J0IHR5cGUgaXMgd2VicnRjIHNpbmNlIHRoZVxuICAgICAqIHdlYnJ0YyBhZ2VudCBvZiBPV1Qgc2VydmVyIGRvZXNuJ3Qgc3VwcG9ydCBtdWx0aXBsZSB0cmFuc2NlaXZlcnMgb24gYVxuICAgICAqIHNpbmdsZSBQZWVyQ29ubmVjdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVHJhbnNwb3J0U2V0dGluZ3NcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSB0cmFuc3BvcnQgc2V0dGluZ3MgZm9yIHB1YmxpY2F0aW9uIGFuZFxuICogc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNwb3J0U2V0dGluZ3Mge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpZCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlRyYW5zcG9ydFR5cGV9IHR5cGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVHJhbnNwb3J0U2V0dGluZ3NcbiAgICAgKiBAZGVzYyBUcmFuc3BvcnQgdHlwZSBmb3IgcHVibGljYXRpb24gYW5kIHN1YnNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVHJhbnNwb3J0U2V0dGluZ3NcbiAgICAgKiBAZGVzYyBUcmFuc3BvcnQgSUQuXG4gICAgICovXG4gICAgdGhpcy5pZCA9IGlkO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P0FycmF5LjxSVENSdHBUcmFuc2NlaXZlcj59IHJ0cFRyYW5zY2VpdmVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5UcmFuc3BvcnRTZXR0aW5nc1xuICAgICAqIEBkZXNjIEEgbGlzdCBvZiBSVENSdHBUcmFuc2NlaXZlciBhc3NvY2lhdGVkIHdpdGggdGhlIHB1YmxpY2F0aW9uIG9yXG4gICAgICogc3Vic2NyaXB0aW9uLiBJdCdzIG9ubHkgYXZhaWxhYmxlIGluIGNvbmZlcmVuY2UgbW9kZSB3aGVuIFRyYW5zcG9ydFR5cGVcbiAgICAgKiBpcyB3ZWJydGMuXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYnJ0Yy1wYy8jcnRjcnRwdHJhbnNjZWl2ZXItaW50ZXJmYWNlfFJUQ1J0cFRyYW5zY2VpdmVyIEludGVyZmFjZSBvZiBXZWJSVEMgMS4wfS5cbiAgICAgKi9cbiAgICB0aGlzLnJ0cFRyYW5zY2VpdmVycyA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vKiBnbG9iYWwgbmF2aWdhdG9yLCB3aW5kb3cgKi9cblxuJ3VzZSBzdHJpY3QnO1xuY29uc3Qgc2RrVmVyc2lvbiA9ICc1LjAnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZXhwb3J0IGZ1bmN0aW9uIGlzRmlyZWZveCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKCdGaXJlZm94JykgIT09IG51bGw7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hyb21lKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goJ0Nocm9tZScpICE9PSBudWxsO1xufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmV4cG9ydCBmdW5jdGlvbiBpc1NhZmFyaSgpIHtcbiAgcmV0dXJuIC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmV4cG9ydCBmdW5jdGlvbiBpc0VkZ2UoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS4oXFxkKykkLykgIT09IG51bGw7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVV1aWQoKSB7XG4gIHJldHVybiAneHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xuICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xuICAgIGNvbnN0IHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xuICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgfSk7XG59XG5cbi8vIFJldHVybnMgc3lzdGVtIGluZm9ybWF0aW9uLlxuLy8gRm9ybWF0OiB7c2RrOnt2ZXJzaW9uOioqLCB0eXBlOioqfSwgcnVudGltZTp7dmVyc2lvbjoqKiwgbmFtZToqKn0sIG9zOnt2ZXJzaW9uOioqLCBuYW1lOioqfX07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZXhwb3J0IGZ1bmN0aW9uIHN5c0luZm8oKSB7XG4gIGNvbnN0IGluZm8gPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgaW5mby5zZGsgPSB7XG4gICAgdmVyc2lvbjogc2RrVmVyc2lvbixcbiAgICB0eXBlOiAnSmF2YVNjcmlwdCcsXG4gIH07XG4gIC8vIFJ1bnRpbWUgaW5mby5cbiAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgY29uc3QgZmlyZWZveFJlZ2V4ID0gL0ZpcmVmb3hcXC8oWzAtOS5dKykvO1xuICBjb25zdCBjaHJvbWVSZWdleCA9IC9DaHJvbWVcXC8oWzAtOS5dKykvO1xuICBjb25zdCBlZGdlUmVnZXggPSAvRWRnZVxcLyhbMC05Ll0rKS87XG4gIGNvbnN0IHNhZmFyaVZlcnNpb25SZWdleCA9IC9WZXJzaW9uXFwvKFswLTkuXSspIFNhZmFyaS87XG4gIGxldCByZXN1bHQgPSBjaHJvbWVSZWdleC5leGVjKHVzZXJBZ2VudCk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICBpbmZvLnJ1bnRpbWUgPSB7XG4gICAgICBuYW1lOiAnQ2hyb21lJyxcbiAgICAgIHZlcnNpb246IHJlc3VsdFsxXSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHJlc3VsdCA9IGZpcmVmb3hSZWdleC5leGVjKHVzZXJBZ2VudCkpIHtcbiAgICBpbmZvLnJ1bnRpbWUgPSB7XG4gICAgICBuYW1lOiAnRmlyZWZveCcsXG4gICAgICB2ZXJzaW9uOiByZXN1bHRbMV0sXG4gICAgfTtcbiAgfSBlbHNlIGlmIChyZXN1bHQgPSBlZGdlUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5ydW50aW1lID0ge1xuICAgICAgbmFtZTogJ0VkZ2UnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdLFxuICAgIH07XG4gIH0gZWxzZSBpZiAoaXNTYWZhcmkoKSkge1xuICAgIHJlc3VsdCA9IHNhZmFyaVZlcnNpb25SZWdleC5leGVjKHVzZXJBZ2VudCk7XG4gICAgaW5mby5ydW50aW1lID0ge1xuICAgICAgbmFtZTogJ1NhZmFyaScsXG4gICAgfTtcbiAgICBpbmZvLnJ1bnRpbWUudmVyc2lvbiA9IHJlc3VsdCA/IHJlc3VsdFsxXSA6ICdVbmtub3duJztcbiAgfSBlbHNlIHtcbiAgICBpbmZvLnJ1bnRpbWUgPSB7XG4gICAgICBuYW1lOiAnVW5rbm93bicsXG4gICAgICB2ZXJzaW9uOiAnVW5rbm93bicsXG4gICAgfTtcbiAgfVxuICAvLyBPUyBpbmZvLlxuICBjb25zdCB3aW5kb3dzUmVnZXggPSAvV2luZG93cyBOVCAoWzAtOS5dKykvO1xuICBjb25zdCBtYWNSZWdleCA9IC9JbnRlbCBNYWMgT1MgWCAoWzAtOV8uXSspLztcbiAgY29uc3QgaVBob25lUmVnZXggPSAvaVBob25lIE9TIChbMC05Xy5dKykvO1xuICBjb25zdCBsaW51eFJlZ2V4ID0gL1gxMTsgTGludXgvO1xuICBjb25zdCBhbmRyb2lkUmVnZXggPSAvQW5kcm9pZCggKFswLTkuXSspKT8vO1xuICBjb25zdCBjaHJvbWl1bU9zUmVnZXggPSAvQ3JPUy87XG4gIGlmIChyZXN1bHQgPSB3aW5kb3dzUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdXaW5kb3dzIE5UJyxcbiAgICAgIHZlcnNpb246IHJlc3VsdFsxXSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHJlc3VsdCA9IG1hY1JlZ2V4LmV4ZWModXNlckFnZW50KSkge1xuICAgIGluZm8ub3MgPSB7XG4gICAgICBuYW1lOiAnTWFjIE9TIFgnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdLnJlcGxhY2UoL18vZywgJy4nKSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHJlc3VsdCA9IGlQaG9uZVJlZ2V4LmV4ZWModXNlckFnZW50KSkge1xuICAgIGluZm8ub3MgPSB7XG4gICAgICBuYW1lOiAnaVBob25lIE9TJyxcbiAgICAgIHZlcnNpb246IHJlc3VsdFsxXS5yZXBsYWNlKC9fL2csICcuJyksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChyZXN1bHQgPSBsaW51eFJlZ2V4LmV4ZWModXNlckFnZW50KSkge1xuICAgIGluZm8ub3MgPSB7XG4gICAgICBuYW1lOiAnTGludXgnLFxuICAgICAgdmVyc2lvbjogJ1Vua25vd24nLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gYW5kcm9pZFJlZ2V4LmV4ZWModXNlckFnZW50KSkge1xuICAgIGluZm8ub3MgPSB7XG4gICAgICBuYW1lOiAnQW5kcm9pZCcsXG4gICAgICB2ZXJzaW9uOiByZXN1bHRbMV0gfHwgJ1Vua25vd24nLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gY2hyb21pdW1Pc1JlZ2V4LmV4ZWModXNlckFnZW50KSkge1xuICAgIGluZm8ub3MgPSB7XG4gICAgICBuYW1lOiAnQ2hyb21lIE9TJyxcbiAgICAgIHZlcnNpb246ICdVbmtub3duJyxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGluZm8ub3MgPSB7XG4gICAgICBuYW1lOiAnVW5rbm93bicsXG4gICAgICB2ZXJzaW9uOiAnVW5rbm93bicsXG4gICAgfTtcbiAgfVxuICBpbmZvLmNhcGFiaWxpdGllcyA9IHtcbiAgICBjb250aW51YWxJY2VHYXRoZXJpbmc6IGZhbHNlLFxuICAgIHN0cmVhbVJlbW92YWJsZTogaW5mby5ydW50aW1lLm5hbWUgIT09ICdGaXJlZm94JyxcbiAgICBpZ25vcmVEYXRhQ2hhbm5lbEFja3M6IHRydWUsXG4gIH07XG4gIHJldHVybiBpbmZvO1xufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG4vKiBnbG9iYWwgTWFwLCBQcm9taXNlLCBzZXRUaW1lb3V0ICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1xuICBFdmVudERpc3BhdGNoZXIsXG4gIE1lc3NhZ2VFdmVudCxcbiAgT3d0RXZlbnQsXG4gIEVycm9yRXZlbnQsXG4gIE11dGVFdmVudCxcbn0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5pbXBvcnQge1RyYWNrS2luZH0gZnJvbSAnLi4vYmFzZS9tZWRpYWZvcm1hdC5qcyc7XG5pbXBvcnQge1B1YmxpY2F0aW9ufSBmcm9tICcuLi9iYXNlL3B1YmxpY2F0aW9uLmpzJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuL3N1YnNjcmlwdGlvbi5qcyc7XG5pbXBvcnQge0NvbmZlcmVuY2VFcnJvcn0gZnJvbSAnLi9lcnJvci5qcyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi9iYXNlL3V0aWxzLmpzJztcbmltcG9ydCAqIGFzIFNkcFV0aWxzIGZyb20gJy4uL2Jhc2Uvc2RwdXRpbHMuanMnO1xuaW1wb3J0IHtUcmFuc3BvcnRTZXR0aW5ncywgVHJhbnNwb3J0VHlwZX0gZnJvbSAnLi4vYmFzZS90cmFuc3BvcnQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb25mZXJlbmNlUGVlckNvbm5lY3Rpb25DaGFubmVsXG4gKiBAY2xhc3NEZXNjIEEgY2hhbm5lbCBmb3IgYSBjb25uZWN0aW9uIGJldHdlZW4gY2xpZW50IGFuZCBjb25mZXJlbmNlIHNlcnZlci5cbiAqIEN1cnJlbnRseSwgb25seSBvbmUgc3RyZWFtIGNvdWxkIGJlIHRyYW5taXR0ZWQgaW4gYSBjaGFubmVsLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZlcmVuY2VQZWVyQ29ubmVjdGlvbkNoYW5uZWwgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb25maWcsIHNpZ25hbGluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYyA9IG51bGw7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX3ZpZGVvQ29kZWNzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX29wdGlvbnMgPSBudWxsO1xuICAgIHRoaXMuX3ZpZGVvQ29kZWNzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3NpZ25hbGluZyA9IHNpZ25hbGluZztcbiAgICB0aGlzLl9pbnRlcm5hbElkID0gbnVsbDsgLy8gSXQncyBwdWJsaWNhdGlvbiBJRCBvciBzdWJzY3JpcHRpb24gSUQuXG4gICAgdGhpcy5fcGVuZGluZ0NhbmRpZGF0ZXMgPSBbXTtcbiAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gaW50ZXJuYWxJZCA9PiB7IHJlc29sdmUsIHJlamVjdCB9XG4gICAgdGhpcy5fcHVibGlzaFByb21pc2VzID0gbmV3IE1hcCgpOyAvLyBpbnRlcm5hbElkID0+IHsgcmVzb2x2ZSwgcmVqZWN0IH1cbiAgICB0aGlzLl9wdWJsaWNhdGlvbnMgPSBuZXcgTWFwKCk7IC8vIFB1YmxpY2F0aW9uSWQgPT4gUHVibGljYXRpb25cbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gbmV3IE1hcCgpOyAvLyBTdWJzY3JpcHRpb25JZCA9PiBTdWJzY3JpcHRpb25cbiAgICB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzID0gbmV3IE1hcCgpOyAvLyBpbnRlcm5hbElkID0+IHsgaWQsIHRyYW5zY2VpdmVyczogW1RyYW5zY2VpdmVyXSB9XG4gICAgdGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzID0gbmV3IE1hcCgpOyAvLyBpbnRlcm5hbElkID0+IHsgaWQsIHRyYW5zY2VpdmVyczogW1RyYW5zY2VpdmVyXSB9XG4gICAgdGhpcy5fcmV2ZXJzZUlkTWFwID0gbmV3IE1hcCgpOyAvLyBQdWJsaWNhdGlvbklkIHx8IFN1YnNjcmlwdGlvbklkID0+IGludGVybmFsSWRcbiAgICAvLyBUaW1lciBmb3IgUGVlckNvbm5lY3Rpb24gZGlzY29ubmVjdGVkLiBXaWxsIHN0b3AgY29ubmVjdGlvbiBhZnRlciB0aW1lci5cbiAgICB0aGlzLl9kaXNjb25uZWN0VGltZXIgPSBudWxsO1xuICAgIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gICAgLy8gQ2hhbm5lbCBJRCBhc3NpZ25lZCBieSBjb25mZXJlbmNlXG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gICAgLy8gVXNlZCB0byBjcmVhdGUgaW50ZXJuYWwgSUQgZm9yIHB1YmxpY2F0aW9uL3N1YnNjcmlwdGlvblxuICAgIHRoaXMuX2ludGVybmFsQ291bnQgPSAwO1xuICAgIHRoaXMuX3NkcFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLl9zZHBSZXNvbHZlck1hcCA9IG5ldyBNYXAoKTsgLy8gaW50ZXJuYWxJZCA9PiB7ZmluaXNoLCByZXNvbHZlLCByZWplY3R9XG4gICAgdGhpcy5fc2RwUmVzb2x2ZXJzID0gW107IC8vIFt7ZmluaXNoLCByZXNvbHZlLCByZWplY3R9XVxuICAgIHRoaXMuX3NkcFJlc29sdmVOdW0gPSAwO1xuICAgIHRoaXMuX3JlbW90ZU1lZGlhU3RyZWFtcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHN1YnNjcmlwdGlvbiBJRCwgdmFsdWUgaXMgTWVkaWFTdHJlYW0uXG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIG9uTWVzc2FnZVxuICAgKiBAZGVzYyBSZWNlaXZlZCBhIG1lc3NhZ2UgZnJvbSBjb25mZXJlbmNlIHBvcnRhbC4gRGVmaW5lZCBpbiBjbGllbnQtc2VydmVyXG4gICAqIHByb3RvY29sLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbiB0eXBlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSBNZXNzYWdlIHJlY2VpdmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgb25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgbWVzc2FnZSkge1xuICAgIHN3aXRjaCAobm90aWZpY2F0aW9uKSB7XG4gICAgICBjYXNlICdwcm9ncmVzcyc6XG4gICAgICAgIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3NvYWMnKSB7XG4gICAgICAgICAgdGhpcy5fc2RwSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSAncmVhZHknKSB7XG4gICAgICAgICAgdGhpcy5fcmVhZHlIYW5kbGVyKG1lc3NhZ2Uuc2Vzc2lvbklkKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgIHRoaXMuX2Vycm9ySGFuZGxlcihtZXNzYWdlLnNlc3Npb25JZCwgbWVzc2FnZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmVhbSc6XG4gICAgICAgIHRoaXMuX29uU3RyZWFtRXZlbnQobWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ1Vua25vd24gbm90aWZpY2F0aW9uIGZyb20gTUNVLicpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHB1Ymxpc2hXaXRoVHJhbnNjZWl2ZXJzKHN0cmVhbSwgdHJhbnNjZWl2ZXJzKSB7XG4gICAgZm9yIChjb25zdCB0IG9mIHRyYW5zY2VpdmVycykge1xuICAgICAgaWYgKHQuZGlyZWN0aW9uICE9PSAnc2VuZG9ubHknKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICdSVENSdHBUcmFuc2NlaXZlclxcJ3MgZGlyZWN0aW9uIG11c3QgYmUgc2VuZG9ubHkuJyk7XG4gICAgICB9XG4gICAgICBpZiAoIXN0cmVhbS5zdHJlYW0uZ2V0VHJhY2tzKCkuaW5jbHVkZXModC5zZW5kZXIudHJhY2spKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICdUaGUgdHJhY2sgYXNzb2NpYXRlZCB3aXRoIFJUQ1J0cFNlbmRlciBpcyBub3QgaW5jbHVkZWQgaW4gJyArXG4gICAgICAgICAgICAnc3RyZWFtLicpO1xuICAgICAgfVxuICAgICAgaWYgKHRyYW5zY2VpdmVycy5sZW5ndGggPiAyKSB7XG4gICAgICAgIC8vIE5vdCBzdXBwb3J0ZWQgYnkgc2VydmVyLlxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAnQXQgbW9zdCBvbmUgdHJhbnNjZWl2ZXIgZm9yIGF1ZGlvIGFuZCBvbmUgdHJhbnNjZWl2ZXIgZm9yIHZpZGVvICcgK1xuICAgICAgICAgICAgJ2FyZSBhY2NlcHRlZC4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRyYW5zY2VpdmVyRGVzY3JpcHRpb24gPSB0cmFuc2NlaXZlcnMubWFwKCh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGtpbmQgPSB0LnNlbmRlci50cmFjay5raW5kO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IGtpbmQsXG4gICAgICAgICAgdHJhbnNjZWl2ZXI6IHQsXG4gICAgICAgICAgc291cmNlOiBzdHJlYW0uc291cmNlW2tpbmRdLFxuICAgICAgICAgIG9wdGlvbjoge30sXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGludGVybmFsSWQgPSB0aGlzLl9jcmVhdGVJbnRlcm5hbElkKCk7XG4gICAgICBhd2FpdCB0aGlzLl9jaGFpblNkcFByb21pc2UoaW50ZXJuYWxJZCk7IC8vIENvcGllZCBmcm9tIHB1Ymxpc2ggbWV0aG9kLlxuICAgICAgdGhpcy5fcHVibGlzaFRyYW5zY2VpdmVycy5zZXQoaW50ZXJuYWxJZCwgdHJhbnNjZWl2ZXJEZXNjcmlwdGlvbik7XG4gICAgICBjb25zdCBvZmZlcj1hd2FpdCB0aGlzLnBjLmNyZWF0ZU9mZmVyKCk7XG4gICAgICBhd2FpdCB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24ob2ZmZXIpO1xuICAgICAgY29uc3QgdHJhY2tPcHRpb25zID0gdHJhbnNjZWl2ZXJzLm1hcCgodCkgPT4ge1xuICAgICAgICBjb25zdCBraW5kID0gdC5zZW5kZXIudHJhY2sua2luZDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBraW5kLFxuICAgICAgICAgIHNvdXJjZTogc3RyZWFtLnNvdXJjZVtraW5kXSxcbiAgICAgICAgICBtaWQ6IHQubWlkLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCBwdWJsaWNhdGlvbklkID1cbiAgICAgICAgICBhd2FpdCB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3B1Ymxpc2gnLCB7XG4gICAgICAgICAgICBtZWRpYToge3RyYWNrczogdHJhY2tPcHRpb25zfSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHN0cmVhbS5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgdHJhbnNwb3J0OiB7aWQ6IHRoaXMuX2lkLCB0eXBlOiAnd2VicnRjJ30sXG4gICAgICAgICAgfSkuaWQ7XG4gICAgICB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKS5pZCA9IHB1YmxpY2F0aW9uSWQ7XG4gICAgICB0aGlzLl9yZXZlcnNlSWRNYXAuc2V0KHB1YmxpY2F0aW9uSWQsIGludGVybmFsSWQpO1xuICAgICAgYXdhaXQgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKFxuICAgICAgICAgICdzb2FjJywge2lkOiB0aGlzLl9pZCwgc2lnbmFsaW5nOiBvZmZlcn0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5fcHVibGlzaFByb21pc2VzLnNldChpbnRlcm5hbElkLCB7XG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBwdWJsaXNoKHN0cmVhbSwgb3B0aW9ucywgdmlkZW9Db2RlY3MpIHtcbiAgICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnQ29ubmVjdGlvbiBjbG9zZWQnKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgIC8vIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgYW4gYXJyYXkgb2YgUlRDUnRwVHJhbnNjZWl2ZXJzLlxuICAgICAgcmV0dXJuIHRoaXMucHVibGlzaFdpdGhUcmFuc2NlaXZlcnMoc3RyZWFtLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYXVkaW86ICEhc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoLFxuICAgICAgICB2aWRlbzogISFzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGgsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignT3B0aW9ucyBzaG91bGQgYmUgYW4gb2JqZWN0LicpKTtcbiAgICB9XG4gICAgaWYgKCh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLmF1ZGlvKSAmJlxuICAgICAgICAgdGhpcy5faXNPd3RFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykpIHx8XG4gICAgICAgICh0aGlzLl9pc093dEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLmF1ZGlvKSAmJlxuICAgICAgICAgdGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnTWl4aW5nIFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycyBhbmQgJyArXG4gICAgICAgICAgJ0F1ZGlvRW5jb2RpbmdQYXJhbWV0ZXJzL1ZpZGVvRW5jb2RpbmdQYXJhbWV0ZXJzIGlzIG5vdCBhbGxvd2VkLicpKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYXVkaW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy5hdWRpbyA9ICEhc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy52aWRlbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25zLnZpZGVvID0gISFzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGg7XG4gICAgfVxuICAgIGlmICgoISFvcHRpb25zLmF1ZGlvICYmICFzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGgpIHx8XG4gICAgICAgICghIW9wdGlvbnMudmlkZW8gJiYgIXN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdvcHRpb25zLmF1ZGlvL3ZpZGVvIGlzIGluY29uc2lzdGVudCB3aXRoIHRyYWNrcyBwcmVzZW50ZWQgaW4gdGhlICcgK1xuICAgICAgICAgICdNZWRpYVN0cmVhbS4nLFxuICAgICAgKSk7XG4gICAgfVxuICAgIGlmICgob3B0aW9ucy5hdWRpbyA9PT0gZmFsc2UgfHwgb3B0aW9ucy5hdWRpbyA9PT0gbnVsbCkgJiZcbiAgICAgIChvcHRpb25zLnZpZGVvID09PSBmYWxzZSB8fCBvcHRpb25zLnZpZGVvID09PSBudWxsKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgJ0Nhbm5vdCBwdWJsaXNoIGEgc3RyZWFtIHdpdGhvdXQgYXVkaW8gYW5kIHZpZGVvLicpKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1ZGlvID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMuYXVkaW8pKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ29wdGlvbnMuYXVkaW8gc2hvdWxkIGJlIGEgYm9vbGVhbiBvciBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlcnMgb2Ygb3B0aW9ucy5hdWRpbykge1xuICAgICAgICBpZiAoIXBhcmFtZXRlcnMuY29kZWMgfHwgdHlwZW9mIHBhcmFtZXRlcnMuY29kZWMubmFtZSAhPT0gJ3N0cmluZycgfHwgKFxuICAgICAgICAgIHBhcmFtZXRlcnMubWF4Qml0cmF0ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwYXJhbWV0ZXJzLm1heEJpdHJhdGVcbiAgICAgICAgICAhPT0gJ251bWJlcicpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICdvcHRpb25zLmF1ZGlvIGhhcyBpbmNvcnJlY3QgcGFyYW1ldGVycy4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnZpZGVvID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvcHRpb25zLnZpZGVvKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgJ29wdGlvbnMudmlkZW8gc2hvdWxkIGJlIGEgYm9vbGVhbiBvciBhbiBhcnJheS4nKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc093dEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSkge1xuICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXJzIG9mIG9wdGlvbnMudmlkZW8pIHtcbiAgICAgICAgaWYgKCFwYXJhbWV0ZXJzLmNvZGVjIHx8IHR5cGVvZiBwYXJhbWV0ZXJzLmNvZGVjLm5hbWUgIT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgKFxuICAgICAgICAgICAgcGFyYW1ldGVycy5tYXhCaXRyYXRlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBhcmFtZXRlcnNcbiAgICAgICAgICAgICAgICAubWF4Qml0cmF0ZSAhPT1cbiAgICAgICAgICAgICdudW1iZXInKSB8fCAocGFyYW1ldGVycy5jb2RlYy5wcm9maWxlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwYXJhbWV0ZXJzLmNvZGVjLnByb2ZpbGUgIT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAnb3B0aW9ucy52aWRlbyBoYXMgaW5jb3JyZWN0IHBhcmFtZXRlcnMuJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG1lZGlhT3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuX2NyZWF0ZVBlZXJDb25uZWN0aW9uKCk7XG4gICAgaWYgKHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCA+IDAgJiYgb3B0aW9ucy5hdWRpbyAhPT1cbiAgICAgIGZhbHNlICYmIG9wdGlvbnMuYXVkaW8gIT09IG51bGwpIHtcbiAgICAgIGlmIChzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICAgJ1B1Ymxpc2hpbmcgYSBzdHJlYW0gd2l0aCBtdWx0aXBsZSBhdWRpbyB0cmFja3MgaXMgbm90IGZ1bGx5J1xuICAgICAgICAgICAgKyAnIHN1cHBvcnRlZC4nLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1ZGlvICE9PSAnYm9vbGVhbicgJiYgdHlwZW9mIG9wdGlvbnMuYXVkaW8gIT09XG4gICAgICAgICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICAgJ1R5cGUgb2YgYXVkaW8gb3B0aW9ucyBzaG91bGQgYmUgYm9vbGVhbiBvciBhbiBvYmplY3QuJyxcbiAgICAgICAgKSk7XG4gICAgICB9XG4gICAgICBtZWRpYU9wdGlvbnMuYXVkaW8gPSB7fTtcbiAgICAgIG1lZGlhT3B0aW9ucy5hdWRpby5zb3VyY2UgPSBzdHJlYW0uc291cmNlLmF1ZGlvO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYU9wdGlvbnMuYXVkaW8gPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCA+IDAgJiYgb3B0aW9ucy52aWRlbyAhPT1cbiAgICAgIGZhbHNlICYmIG9wdGlvbnMudmlkZW8gIT09IG51bGwpIHtcbiAgICAgIGlmIChzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICAgJ1B1Ymxpc2hpbmcgYSBzdHJlYW0gd2l0aCBtdWx0aXBsZSB2aWRlbyB0cmFja3MgaXMgbm90IGZ1bGx5ICdcbiAgICAgICAgICAgICsgJ3N1cHBvcnRlZC4nLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgbWVkaWFPcHRpb25zLnZpZGVvID0ge307XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8uc291cmNlID0gc3RyZWFtLnNvdXJjZS52aWRlbztcbiAgICAgIGNvbnN0IHRyYWNrU2V0dGluZ3MgPSBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXVxuICAgICAgICAgIC5nZXRTZXR0aW5ncygpO1xuICAgICAgbWVkaWFPcHRpb25zLnZpZGVvLnBhcmFtZXRlcnMgPSB7XG4gICAgICAgIHJlc29sdXRpb246IHtcbiAgICAgICAgICB3aWR0aDogdHJhY2tTZXR0aW5ncy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRyYWNrU2V0dGluZ3MuaGVpZ2h0LFxuICAgICAgICB9LFxuICAgICAgICBmcmFtZXJhdGU6IHRyYWNrU2V0dGluZ3MuZnJhbWVSYXRlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVkaWFPcHRpb25zLnZpZGVvID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJuYWxJZCA9IHRoaXMuX2NyZWF0ZUludGVybmFsSWQoKTtcbiAgICAvLyBXYWl0aW5nIGZvciBwcmV2aW91cyBTRFAgbmVnb3RpYXRpb24gaWYgbmVlZGVkXG4gICAgYXdhaXQgdGhpcy5fY2hhaW5TZHBQcm9taXNlKGludGVybmFsSWQpO1xuXG4gICAgY29uc3Qgb2ZmZXJPcHRpb25zID0ge307XG4gICAgY29uc3QgdHJhbnNjZWl2ZXJzID0gW107XG4gICAgaWYgKHR5cGVvZiB0aGlzLnBjLmFkZFRyYW5zY2VpdmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyB8ZGlyZWN0aW9ufCBzZWVtcyBub3Qgd29ya2luZyBvbiBTYWZhcmkuXG4gICAgICBpZiAobWVkaWFPcHRpb25zLmF1ZGlvICYmIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCA+XG4gICAgICAgIDApIHtcbiAgICAgICAgY29uc3QgdHJhbnNjZWl2ZXJJbml0ID0ge1xuICAgICAgICAgIGRpcmVjdGlvbjogJ3NlbmRvbmx5JyxcbiAgICAgICAgICBzdHJlYW1zOiBbc3RyZWFtLm1lZGlhU3RyZWFtXSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMuYXVkaW8pKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXJJbml0LnNlbmRFbmNvZGluZ3MgPSBvcHRpb25zLmF1ZGlvO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyYW5zY2VpdmVyID0gdGhpcy5wYy5hZGRUcmFuc2NlaXZlcihcbiAgICAgICAgICAgIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpWzBdLFxuICAgICAgICAgICAgdHJhbnNjZWl2ZXJJbml0KTtcbiAgICAgICAgdHJhbnNjZWl2ZXJzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdhdWRpbycsXG4gICAgICAgICAgdHJhbnNjZWl2ZXIsXG4gICAgICAgICAgc291cmNlOiBtZWRpYU9wdGlvbnMuYXVkaW8uc291cmNlLFxuICAgICAgICAgIG9wdGlvbjoge2F1ZGlvOiBvcHRpb25zLmF1ZGlvfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKFV0aWxzLmlzRmlyZWZveCgpKSB7XG4gICAgICAgICAgLy8gRmlyZWZveCBkb2VzIG5vdCBzdXBwb3J0IGVuY29kaW5ncyBzZXR0aW5nIGluIGFkZFRyYW5zY2VpdmVyLlxuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB0cmFuc2NlaXZlci5zZW5kZXIuZ2V0UGFyYW1ldGVycygpO1xuICAgICAgICAgIHBhcmFtZXRlcnMuZW5jb2RpbmdzID0gdHJhbnNjZWl2ZXJJbml0LnNlbmRFbmNvZGluZ3M7XG4gICAgICAgICAgYXdhaXQgdHJhbnNjZWl2ZXIuc2VuZGVyLnNldFBhcmFtZXRlcnMocGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYU9wdGlvbnMudmlkZW8gJiYgc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoID5cbiAgICAgICAgMCkge1xuICAgICAgICBjb25zdCB0cmFuc2NlaXZlckluaXQgPSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiAnc2VuZG9ubHknLFxuICAgICAgICAgIHN0cmVhbXM6IFtzdHJlYW0ubWVkaWFTdHJlYW1dLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlckluaXQuc2VuZEVuY29kaW5ncyA9IG9wdGlvbnMudmlkZW87XG4gICAgICAgICAgdGhpcy5fdmlkZW9Db2RlY3MgPSB2aWRlb0NvZGVjcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0cmFuc2NlaXZlciA9IHRoaXMucGMuYWRkVHJhbnNjZWl2ZXIoXG4gICAgICAgICAgICBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXSxcbiAgICAgICAgICAgIHRyYW5zY2VpdmVySW5pdCk7XG4gICAgICAgIHRyYW5zY2VpdmVycy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAndmlkZW8nLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLFxuICAgICAgICAgIHNvdXJjZTogbWVkaWFPcHRpb25zLnZpZGVvLnNvdXJjZSxcbiAgICAgICAgICBvcHRpb246IHt2aWRlbzogb3B0aW9ucy52aWRlb30sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChVdGlscy5pc0ZpcmVmb3goKSkge1xuICAgICAgICAgIC8vIEZpcmVmb3ggZG9lcyBub3Qgc3VwcG9ydCBlbmNvZGluZ3Mgc2V0dGluZyBpbiBhZGRUcmFuc2NlaXZlci5cbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gdHJhbnNjZWl2ZXIuc2VuZGVyLmdldFBhcmFtZXRlcnMoKTtcbiAgICAgICAgICBwYXJhbWV0ZXJzLmVuY29kaW5ncyA9IHRyYW5zY2VpdmVySW5pdC5zZW5kRW5jb2RpbmdzO1xuICAgICAgICAgIGF3YWl0IHRyYW5zY2VpdmVyLnNlbmRlci5zZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNob3VsZCBub3QgcmVhY2ggaGVyZVxuICAgICAgaWYgKG1lZGlhT3B0aW9ucy5hdWRpbyAmJlxuICAgICAgICAgIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCB0cmFjayBvZiBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKSkge1xuICAgICAgICAgIHRoaXMucGMuYWRkVHJhY2sodHJhY2ssIHN0cmVhbS5tZWRpYVN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYU9wdGlvbnMudmlkZW8gJiZcbiAgICAgICAgICBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2Ygc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkpIHtcbiAgICAgICAgICB0aGlzLnBjLmFkZFRyYWNrKHRyYWNrLCBzdHJlYW0ubWVkaWFTdHJlYW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9IGZhbHNlO1xuICAgICAgb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlVmlkZW8gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fcHVibGlzaFRyYW5zY2VpdmVycy5zZXQoaW50ZXJuYWxJZCwge3RyYW5zY2VpdmVyc30pO1xuXG4gICAgbGV0IGxvY2FsRGVzYztcbiAgICB0aGlzLnBjLmNyZWF0ZU9mZmVyKG9mZmVyT3B0aW9ucykudGhlbigoZGVzYykgPT4ge1xuICAgICAgbG9jYWxEZXNjID0gZGVzYztcbiAgICAgIHJldHVybiB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24oZGVzYyk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCB0cmFja09wdGlvbnMgPSBbXTtcbiAgICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKCh7dHlwZSwgdHJhbnNjZWl2ZXIsIHNvdXJjZX0pID0+IHtcbiAgICAgICAgdHJhY2tPcHRpb25zLnB1c2goe1xuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgbWlkOiB0cmFuc2NlaXZlci5taWQsXG4gICAgICAgICAgc291cmNlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgncHVibGlzaCcsIHtcbiAgICAgICAgbWVkaWE6IHt0cmFja3M6IHRyYWNrT3B0aW9uc30sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHN0cmVhbS5hdHRyaWJ1dGVzLFxuICAgICAgICB0cmFuc3BvcnQ6IHtpZDogdGhpcy5faWQsIHR5cGU6ICd3ZWJydGMnfSxcbiAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIC8vIFNlbmQgU0RQIGV2ZW4gd2hlbiBmYWlsZWQgdG8gZ2V0IEFuc3dlci5cbiAgICAgICAgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzb2FjJywge1xuICAgICAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgICAgICBzaWduYWxpbmc6IGxvY2FsRGVzYyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9KTtcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBwdWJsaWNhdGlvbklkID0gZGF0YS5pZDtcbiAgICAgIGNvbnN0IG1lc3NhZ2VFdmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoJ2lkJywge1xuICAgICAgICBtZXNzYWdlOiBwdWJsaWNhdGlvbklkLFxuICAgICAgICBvcmlnaW46IHRoaXMuX3JlbW90ZUlkLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobWVzc2FnZUV2ZW50KTtcblxuICAgICAgdGhpcy5fcHVibGlzaFRyYW5zY2VpdmVycy5nZXQoaW50ZXJuYWxJZCkuaWQgPSBwdWJsaWNhdGlvbklkO1xuICAgICAgdGhpcy5fcmV2ZXJzZUlkTWFwLnNldChwdWJsaWNhdGlvbklkLCBpbnRlcm5hbElkKTtcblxuICAgICAgaWYgKHRoaXMuX2lkICYmIHRoaXMuX2lkICE9PSBkYXRhLnRyYW5zcG9ydElkKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdTZXJ2ZXIgcmV0dXJucyBjb25mbGljdCBJRDogJyArIGRhdGEudHJhbnNwb3J0SWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5faWQgPSBkYXRhLnRyYW5zcG9ydElkO1xuXG4gICAgICAvLyBNb2RpZnkgbG9jYWwgU0RQIGJlZm9yZSBzZW5kaW5nXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaCgoe3R5cGUsIHRyYW5zY2VpdmVyLCBvcHRpb259KSA9PiB7XG4gICAgICAgICAgbG9jYWxEZXNjLnNkcCA9IHRoaXMuX3NldFJ0cFJlY2VpdmVyT3B0aW9ucyhcbiAgICAgICAgICAgICAgbG9jYWxEZXNjLnNkcCwgb3B0aW9uLCB0cmFuc2NlaXZlci5taWQpO1xuICAgICAgICAgIGxvY2FsRGVzYy5zZHAgPSB0aGlzLl9zZXRSdHBTZW5kZXJPcHRpb25zKFxuICAgICAgICAgICAgICBsb2NhbERlc2Muc2RwLCBvcHRpb24sIHRyYW5zY2VpdmVyLm1pZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzb2FjJywge1xuICAgICAgICBpZDogdGhpcy5faWQsXG4gICAgICAgIHNpZ25hbGluZzogbG9jYWxEZXNjLFxuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIExvZ2dlci5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBvZmZlciBvciBzZXQgU0RQLiBNZXNzYWdlOiAnXG4gICAgICAgICAgKyBlLm1lc3NhZ2UpO1xuICAgICAgaWYgKHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpLmlkKSB7XG4gICAgICAgIHRoaXMuX3VucHVibGlzaChpbnRlcm5hbElkKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0UHJvbWlzZShlKTtcbiAgICAgICAgdGhpcy5fZmlyZUVuZGVkRXZlbnRPblB1YmxpY2F0aW9uT3JTdWJzY3JpcHRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3VucHVibGlzaChpbnRlcm5hbElkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fcHVibGlzaFByb21pc2VzLnNldChpbnRlcm5hbElkLCB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzdWJzY3JpYmUoc3RyZWFtLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ0Nvbm5lY3Rpb24gY2xvc2VkJyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGF1ZGlvOiAhIXN0cmVhbS5zZXR0aW5ncy5hdWRpbyxcbiAgICAgICAgdmlkZW86ICEhc3RyZWFtLnNldHRpbmdzLnZpZGVvLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ09wdGlvbnMgc2hvdWxkIGJlIGFuIG9iamVjdC4nKSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYXVkaW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHN0cmVhbS5zZXR0aW5ncy5hdWRpby5sZW5ndGggPT09IDApIHtcbiAgICAgICAgb3B0aW9ucy5hdWRpbyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5hdWRpbyA9ICEhc3RyZWFtLnNldHRpbmdzLmF1ZGlvO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnZpZGVvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMudmlkZW8gPSAhIXN0cmVhbS5zZXR0aW5ncy52aWRlbztcbiAgICB9XG4gICAgaWYgKChvcHRpb25zLmF1ZGlvICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbnMuYXVkaW8gIT09ICdvYmplY3QnICYmXG4gICAgICAgIHR5cGVvZiBvcHRpb25zLmF1ZGlvICE9PSAnYm9vbGVhbicgJiYgb3B0aW9ucy5hdWRpbyAhPT0gbnVsbCkgfHwgKFxuICAgICAgb3B0aW9ucy52aWRlbyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zLnZpZGVvICE9PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy52aWRlbyAhPT0gJ2Jvb2xlYW4nICYmIG9wdGlvbnMudmlkZW8gIT09IG51bGwpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignSW52YWxpZCBvcHRpb25zIHR5cGUuJykpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5hdWRpbyAmJiAhc3RyZWFtLnNldHRpbmdzLmF1ZGlvIHx8IChvcHRpb25zLnZpZGVvICYmXG4gICAgICAgICFzdHJlYW0uc2V0dGluZ3MudmlkZW8pKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnb3B0aW9ucy5hdWRpby92aWRlbyBjYW5ub3QgYmUgdHJ1ZSBvciBhbiBvYmplY3QgaWYgdGhlcmUgaXMgbm8gJ1xuICAgICAgICAgICsgJ2F1ZGlvL3ZpZGVvIHRyYWNrIGluIHJlbW90ZSBzdHJlYW0uJyxcbiAgICAgICkpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5hdWRpbyA9PT0gZmFsc2UgJiYgb3B0aW9ucy52aWRlbyA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdDYW5ub3Qgc3Vic2NyaWJlIGEgc3RyZWFtIHdpdGhvdXQgYXVkaW8gYW5kIHZpZGVvLicpKTtcbiAgICB9XG4gICAgY29uc3QgbWVkaWFPcHRpb25zID0ge307XG4gICAgaWYgKG9wdGlvbnMuYXVkaW8pIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hdWRpbyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICBBcnJheS5pc0FycmF5KG9wdGlvbnMuYXVkaW8uY29kZWNzKSkge1xuICAgICAgICBpZiAob3B0aW9ucy5hdWRpby5jb2RlY3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICdBdWRpbyBjb2RlYyBjYW5ub3QgYmUgYW4gZW1wdHkgYXJyYXkuJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtZWRpYU9wdGlvbnMuYXVkaW8gPSB7fTtcbiAgICAgIG1lZGlhT3B0aW9ucy5hdWRpby5mcm9tID0gc3RyZWFtLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYU9wdGlvbnMuYXVkaW8gPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudmlkZW8pIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy52aWRlbyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICBBcnJheS5pc0FycmF5KG9wdGlvbnMudmlkZW8uY29kZWNzKSkge1xuICAgICAgICBpZiAob3B0aW9ucy52aWRlby5jb2RlY3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICdWaWRlbyBjb2RlYyBjYW5ub3QgYmUgYW4gZW1wdHkgYXJyYXkuJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8gPSB7fTtcbiAgICAgIG1lZGlhT3B0aW9ucy52aWRlby5mcm9tID0gc3RyZWFtLmlkO1xuICAgICAgaWYgKG9wdGlvbnMudmlkZW8ucmVzb2x1dGlvbiB8fCBvcHRpb25zLnZpZGVvLmZyYW1lUmF0ZSB8fCAob3B0aW9ucy52aWRlb1xuICAgICAgICAgIC5iaXRyYXRlTXVsdGlwbGllciAmJiBvcHRpb25zLnZpZGVvLmJpdHJhdGVNdWx0aXBsaWVyICE9PSAxKSB8fFxuICAgICAgICBvcHRpb25zLnZpZGVvLmtleUZyYW1lSW50ZXJ2YWwpIHtcbiAgICAgICAgbWVkaWFPcHRpb25zLnZpZGVvLnBhcmFtZXRlcnMgPSB7XG4gICAgICAgICAgcmVzb2x1dGlvbjogb3B0aW9ucy52aWRlby5yZXNvbHV0aW9uLFxuICAgICAgICAgIGZyYW1lcmF0ZTogb3B0aW9ucy52aWRlby5mcmFtZVJhdGUsXG4gICAgICAgICAgYml0cmF0ZTogb3B0aW9ucy52aWRlby5iaXRyYXRlTXVsdGlwbGllciA/ICd4J1xuICAgICAgICAgICAgICArIG9wdGlvbnMudmlkZW8uYml0cmF0ZU11bHRpcGxpZXIudG9TdHJpbmcoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBrZXlGcmFtZUludGVydmFsOiBvcHRpb25zLnZpZGVvLmtleUZyYW1lSW50ZXJ2YWwsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy52aWRlby5yaWQpIHtcbiAgICAgICAgLy8gVXNlIHJpZCBtYXRjaGVkIHRyYWNrIElEIGFzIGZyb20gaWYgcG9zc2libGVcbiAgICAgICAgY29uc3QgbWF0Y2hlZFNldHRpbmcgPSBzdHJlYW0uc2V0dGluZ3MudmlkZW9cbiAgICAgICAgICAgIC5maW5kKCh2aWRlbykgPT4gdmlkZW8ucmlkID09PSBvcHRpb25zLnZpZGVvLnJpZCk7XG4gICAgICAgIGlmIChtYXRjaGVkU2V0dGluZyAmJiBtYXRjaGVkU2V0dGluZy5fdHJhY2tJZCkge1xuICAgICAgICAgIG1lZGlhT3B0aW9ucy52aWRlby5mcm9tID0gbWF0Y2hlZFNldHRpbmcuX3RyYWNrSWQ7XG4gICAgICAgICAgLy8gSWdub3JlIG90aGVyIHNldHRpbmdzIHdoZW4gUklEIHNldC5cbiAgICAgICAgICBkZWxldGUgbWVkaWFPcHRpb25zLnZpZGVvLnBhcmFtZXRlcnM7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy52aWRlbyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lZGlhT3B0aW9ucy52aWRlbyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVybmFsSWQgPSB0aGlzLl9jcmVhdGVJbnRlcm5hbElkKCk7XG4gICAgLy8gV2FpdGluZyBmb3IgcHJldmlvdXMgU0RQIG5lZ290aWF0aW9uIGlmIG5lZWRlZFxuICAgIGF3YWl0IHRoaXMuX2NoYWluU2RwUHJvbWlzZShpbnRlcm5hbElkKTtcblxuICAgIGNvbnN0IG9mZmVyT3B0aW9ucyA9IHt9O1xuICAgIGNvbnN0IHRyYW5zY2VpdmVycyA9IFtdO1xuICAgIHRoaXMuX2NyZWF0ZVBlZXJDb25uZWN0aW9uKCk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnBjLmFkZFRyYW5zY2VpdmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyB8ZGlyZWN0aW9ufCBzZWVtcyBub3Qgd29ya2luZyBvbiBTYWZhcmkuXG4gICAgICBpZiAobWVkaWFPcHRpb25zLmF1ZGlvKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zY2VpdmVyID0gdGhpcy5wYy5hZGRUcmFuc2NlaXZlcihcbiAgICAgICAgICAgICdhdWRpbycsIHtkaXJlY3Rpb246ICdyZWN2b25seSd9KTtcbiAgICAgICAgdHJhbnNjZWl2ZXJzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdhdWRpbycsXG4gICAgICAgICAgdHJhbnNjZWl2ZXIsXG4gICAgICAgICAgZnJvbTogbWVkaWFPcHRpb25zLmF1ZGlvLmZyb20sXG4gICAgICAgICAgb3B0aW9uOiB7YXVkaW86IG9wdGlvbnMuYXVkaW99LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYU9wdGlvbnMudmlkZW8pIHtcbiAgICAgICAgY29uc3QgdHJhbnNjZWl2ZXIgPSB0aGlzLnBjLmFkZFRyYW5zY2VpdmVyKFxuICAgICAgICAgICAgJ3ZpZGVvJywge2RpcmVjdGlvbjogJ3JlY3Zvbmx5J30pO1xuICAgICAgICB0cmFuc2NlaXZlcnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3ZpZGVvJyxcbiAgICAgICAgICB0cmFuc2NlaXZlcixcbiAgICAgICAgICBmcm9tOiBtZWRpYU9wdGlvbnMudmlkZW8uZnJvbSxcbiAgICAgICAgICBwYXJhbWV0ZXJzOiBtZWRpYU9wdGlvbnMudmlkZW8ucGFyYW1ldGVycyxcbiAgICAgICAgICBvcHRpb246IHt2aWRlbzogb3B0aW9ucy52aWRlb30sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9ICEhb3B0aW9ucy5hdWRpbztcbiAgICAgIG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvID0gISFvcHRpb25zLnZpZGVvO1xuICAgIH1cbiAgICB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuc2V0KGludGVybmFsSWQsIHt0cmFuc2NlaXZlcnN9KTtcblxuICAgIGxldCBsb2NhbERlc2M7XG4gICAgdGhpcy5wYy5jcmVhdGVPZmZlcihvZmZlck9wdGlvbnMpLnRoZW4oKGRlc2MpID0+IHtcbiAgICAgIGxvY2FsRGVzYyA9IGRlc2M7XG4gICAgICByZXR1cm4gdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKGRlc2MpXG4gICAgICAgICAgLmNhdGNoKChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignU2V0IGxvY2FsIGRlc2NyaXB0aW9uIGZhaWxlZC4gTWVzc2FnZTogJyArXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKSk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIExvZ2dlci5lcnJvcignQ3JlYXRlIG9mZmVyIGZhaWxlZC4gRXJyb3IgaW5mbzogJyArIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIGVycm9yKSk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHRyYWNrT3B0aW9ucyA9IFtdO1xuICAgICAgdHJhbnNjZWl2ZXJzLmZvckVhY2goKHt0eXBlLCB0cmFuc2NlaXZlciwgZnJvbSwgcGFyYW1ldGVycywgb3B0aW9ufSkgPT4ge1xuICAgICAgICB0cmFja09wdGlvbnMucHVzaCh7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBtaWQ6IHRyYW5zY2VpdmVyLm1pZCxcbiAgICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzdWJzY3JpYmUnLCB7XG4gICAgICAgIG1lZGlhOiB7dHJhY2tzOiB0cmFja09wdGlvbnN9LFxuICAgICAgICB0cmFuc3BvcnQ6IHtpZDogdGhpcy5faWQsIHR5cGU6ICd3ZWJydGMnfSxcbiAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIC8vIFNlbmQgU0RQIGV2ZW4gd2hlbiBmYWlsZWQgdG8gZ2V0IEFuc3dlci5cbiAgICAgICAgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzb2FjJywge1xuICAgICAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgICAgICBzaWduYWxpbmc6IGxvY2FsRGVzYyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9KTtcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb25JZCA9IGRhdGEuaWQ7XG4gICAgICBjb25zdCBtZXNzYWdlRXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KCdpZCcsIHtcbiAgICAgICAgbWVzc2FnZTogc3Vic2NyaXB0aW9uSWQsXG4gICAgICAgIG9yaWdpbjogdGhpcy5fcmVtb3RlSWQsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChtZXNzYWdlRXZlbnQpO1xuXG4gICAgICB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpLmlkID0gc3Vic2NyaXB0aW9uSWQ7XG4gICAgICB0aGlzLl9yZXZlcnNlSWRNYXAuc2V0KHN1YnNjcmlwdGlvbklkLCBpbnRlcm5hbElkKTtcbiAgICAgIGlmICh0aGlzLl9pZCAmJiB0aGlzLl9pZCAhPT0gZGF0YS50cmFuc3BvcnRJZCkge1xuICAgICAgICBMb2dnZXIud2FybmluZygnU2VydmVyIHJldHVybnMgY29uZmxpY3QgSUQ6ICcgKyBkYXRhLnRyYW5zcG9ydElkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lkID0gZGF0YS50cmFuc3BvcnRJZDtcblxuICAgICAgLy8gTW9kaWZ5IGxvY2FsIFNEUCBiZWZvcmUgc2VuZGluZ1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXJzLmZvckVhY2goKHt0eXBlLCB0cmFuc2NlaXZlciwgb3B0aW9ufSkgPT4ge1xuICAgICAgICAgIGxvY2FsRGVzYy5zZHAgPSB0aGlzLl9zZXRSdHBSZWNlaXZlck9wdGlvbnMoXG4gICAgICAgICAgICAgIGxvY2FsRGVzYy5zZHAsIG9wdGlvbiwgdHJhbnNjZWl2ZXIubWlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3NvYWMnLCB7XG4gICAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgICAgc2lnbmFsaW5nOiBsb2NhbERlc2MsXG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIG9mZmVyIG9yIHNldCBTRFAuIE1lc3NhZ2U6ICdcbiAgICAgICAgICArIGUubWVzc2FnZSk7XG4gICAgICBpZiAodGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKS5pZCkge1xuICAgICAgICB0aGlzLl91bnN1YnNjcmliZShpbnRlcm5hbElkKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0UHJvbWlzZShlKTtcbiAgICAgICAgdGhpcy5fZmlyZUVuZGVkRXZlbnRPblB1YmxpY2F0aW9uT3JTdWJzY3JpcHRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKGludGVybmFsSWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5zZXQoaW50ZXJuYWxJZCwge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMucGMgJiYgdGhpcy5wYy5zaWduYWxpbmdTdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcbiAgICAgIHRoaXMucGMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBfY2hhaW5TZHBQcm9taXNlKGludGVybmFsSWQpIHtcbiAgICBjb25zdCBwcmlvciA9IHRoaXMuX3NkcFByb21pc2U7XG4gICAgY29uc3QgbmVnb3RpYXRpb25UaW1lb3V0ID0gMTAwMDA7XG4gICAgdGhpcy5fc2RwUHJvbWlzZSA9IHByaW9yLnRoZW4oXG4gICAgICAgICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNvbHZlciA9IHtmaW5pc2g6IGZhbHNlLCByZXNvbHZlLCByZWplY3R9O1xuICAgICAgICAgIHRoaXMuX3NkcFJlc29sdmVycy5wdXNoKHJlc29sdmVyKTtcbiAgICAgICAgICB0aGlzLl9zZHBSZXNvbHZlck1hcC5zZXQoaW50ZXJuYWxJZCwgcmVzb2x2ZXIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KCdUaW1lb3V0IHRvIGdldCBTRFAgYW5zd2VyJyksXG4gICAgICAgICAgICAgIG5lZ290aWF0aW9uVGltZW91dCk7XG4gICAgICAgIH0pKTtcbiAgICByZXR1cm4gcHJpb3IuY2F0Y2goKGUpPT57XG4gICAgICAvL1xuICAgIH0pO1xuICB9XG5cbiAgX25leHRTZHBQcm9taXNlKCkge1xuICAgIGxldCByZXQgPSBmYWxzZTtcbiAgICAvLyBTa2lwIHRoZSBmaW5pc2hlZCBzZHAgcHJvbWlzZVxuICAgIHdoaWxlICh0aGlzLl9zZHBSZXNvbHZlTnVtIDwgdGhpcy5fc2RwUmVzb2x2ZXJzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcmVzb2x2ZXIgPSB0aGlzLl9zZHBSZXNvbHZlcnNbdGhpcy5fc2RwUmVzb2x2ZU51bV07XG4gICAgICB0aGlzLl9zZHBSZXNvbHZlTnVtKys7XG4gICAgICBpZiAoIXJlc29sdmVyLmZpbmlzaCkge1xuICAgICAgICByZXNvbHZlci5yZXNvbHZlKCk7XG4gICAgICAgIHJlc29sdmVyLmZpbmlzaCA9IHRydWU7XG4gICAgICAgIHJldCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBfY3JlYXRlSW50ZXJuYWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJuYWxDb3VudCsrO1xuICB9XG5cbiAgX3VucHVibGlzaChpbnRlcm5hbElkKSB7XG4gICAgaWYgKHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICBjb25zdCB7aWQsIHRyYW5zY2VpdmVyc30gPSB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKTtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3VucHVibGlzaCcsIHtpZH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ01DVSByZXR1cm5zIG5lZ2F0aXZlIGFjayBmb3IgdW5wdWJsaXNoaW5nLCAnICsgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmV2ZXJzZUlkTWFwLmRlbGV0ZShpZCk7XG4gICAgICB9XG4gICAgICAvLyBDbGVhbiB0cmFuc2NlaXZlclxuICAgICAgdHJhbnNjZWl2ZXJzLmZvckVhY2goKHt0cmFuc2NlaXZlcn0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMucGMuc2lnbmFsaW5nU3RhdGUgPT09ICdzdGFibGUnKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuc2VuZGVyLnJlcGxhY2VUcmFjayhudWxsKTtcbiAgICAgICAgICB0aGlzLnBjLnJlbW92ZVRyYWNrKHRyYW5zY2VpdmVyLnNlbmRlcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcHVibGlzaFRyYW5zY2VpdmVycy5kZWxldGUoaW50ZXJuYWxJZCk7XG4gICAgICAvLyBGaXJlIGVuZGVkIGV2ZW50XG4gICAgICBpZiAodGhpcy5fcHVibGljYXRpb25zLmhhcyhpZCkpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgT3d0RXZlbnQoJ2VuZGVkJyk7XG4gICAgICAgIHRoaXMuX3B1YmxpY2F0aW9ucy5nZXQoaWQpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB0aGlzLl9wdWJsaWNhdGlvbnMuZGVsZXRlKGlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdJbnZhbGlkIHB1YmxpY2F0aW9uIHRvIHVucHVibGlzaDogJyArIGlkKTtcbiAgICAgICAgaWYgKHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgICAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuZ2V0KGludGVybmFsSWQpLnJlamVjdChcbiAgICAgICAgICAgICAgbmV3IENvbmZlcmVuY2VFcnJvcignRmFpbGVkIHRvIHB1Ymxpc2gnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9zZHBSZXNvbHZlck1hcC5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSB0aGlzLl9zZHBSZXNvbHZlck1hcC5nZXQoaW50ZXJuYWxJZCk7XG4gICAgICAgIGlmICghcmVzb2x2ZXIuZmluaXNoKSB7XG4gICAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZSgpO1xuICAgICAgICAgIHJlc29sdmVyLmZpbmlzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2RwUmVzb2x2ZXJNYXAuZGVsZXRlKGludGVybmFsSWQpO1xuICAgICAgfVxuICAgICAgLy8gQ3JlYXRlIG9mZmVyLCBzZXQgbG9jYWwgYW5kIHJlbW90ZSBkZXNjcmlwdGlvblxuICAgIH1cbiAgfVxuXG4gIF91bnN1YnNjcmliZShpbnRlcm5hbElkKSB7XG4gICAgaWYgKHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgIGNvbnN0IHtpZCwgdHJhbnNjZWl2ZXJzfSA9IHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycy5nZXQoaW50ZXJuYWxJZCk7XG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCd1bnN1YnNjcmliZScsIHtpZH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgTG9nZ2VyLndhcm5pbmcoXG4gICAgICAgICAgICAgICAgICAnTUNVIHJldHVybnMgbmVnYXRpdmUgYWNrIGZvciB1bnN1YnNjcmliaW5nLCAnICsgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIENsZWFuIHRyYW5zY2VpdmVyXG4gICAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaCgoe3RyYW5zY2VpdmVyfSkgPT4ge1xuICAgICAgICB0cmFuc2NlaXZlci5yZWNlaXZlci50cmFjay5zdG9wKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycy5kZWxldGUoaW50ZXJuYWxJZCk7XG4gICAgICAvLyBGaXJlIGVuZGVkIGV2ZW50XG4gICAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9ucy5oYXMoaWQpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IE93dEV2ZW50KCdlbmRlZCcpO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmdldChpZCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZGVsZXRlKGlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdJbnZhbGlkIHN1YnNjcmlwdGlvbiB0byB1bnN1YnNjcmliZTogJyArIGlkKTtcbiAgICAgICAgaWYgKHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmdldChpbnRlcm5hbElkKS5yZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBDb25mZXJlbmNlRXJyb3IoJ0ZhaWxlZCB0byBzdWJzY3JpYmUnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9zZHBSZXNvbHZlck1hcC5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSB0aGlzLl9zZHBSZXNvbHZlck1hcC5nZXQoaW50ZXJuYWxJZCk7XG4gICAgICAgIGlmICghcmVzb2x2ZXIuZmluaXNoKSB7XG4gICAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZSgpO1xuICAgICAgICAgIHJlc29sdmVyLmZpbmlzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2RwUmVzb2x2ZXJNYXAuZGVsZXRlKGludGVybmFsSWQpO1xuICAgICAgfVxuICAgICAgLy8gRGlzYWJsZSBtZWRpYSBpbiByZW1vdGUgU0RQXG4gICAgICAvLyBTZXQgcmVtb3RlRGVzY3JpcHRpb24gYW5kIHNldCBsb2NhbERlc2NyaXB0aW9uXG4gICAgfVxuICB9XG5cbiAgX211dGVPclVubXV0ZShzZXNzaW9uSWQsIGlzTXV0ZSwgaXNQdWIsIHRyYWNrS2luZCkge1xuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGlzUHViID8gJ3N0cmVhbS1jb250cm9sJyA6XG4gICAgICAnc3Vic2NyaXB0aW9uLWNvbnRyb2wnO1xuICAgIGNvbnN0IG9wZXJhdGlvbiA9IGlzTXV0ZSA/ICdwYXVzZScgOiAncGxheSc7XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZShldmVudE5hbWUsIHtcbiAgICAgIGlkOiBzZXNzaW9uSWQsXG4gICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcbiAgICAgIGRhdGE6IHRyYWNrS2luZCxcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGlmICghaXNQdWIpIHtcbiAgICAgICAgY29uc3QgbXV0ZUV2ZW50TmFtZSA9IGlzTXV0ZSA/ICdtdXRlJyA6ICd1bm11dGUnO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmdldChzZXNzaW9uSWQpLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgTXV0ZUV2ZW50KG11dGVFdmVudE5hbWUsIHtraW5kOiB0cmFja0tpbmR9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfYXBwbHlPcHRpb25zKHNlc3Npb25JZCwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdGlvbnMudmlkZW8gIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnT3B0aW9ucyBzaG91bGQgYmUgYW4gb2JqZWN0LicpKTtcbiAgICB9XG4gICAgY29uc3QgdmlkZW9PcHRpb25zID0ge307XG4gICAgdmlkZW9PcHRpb25zLnJlc29sdXRpb24gPSBvcHRpb25zLnZpZGVvLnJlc29sdXRpb247XG4gICAgdmlkZW9PcHRpb25zLmZyYW1lcmF0ZSA9IG9wdGlvbnMudmlkZW8uZnJhbWVSYXRlO1xuICAgIHZpZGVvT3B0aW9ucy5iaXRyYXRlID0gb3B0aW9ucy52aWRlby5iaXRyYXRlTXVsdGlwbGllciA/ICd4JyArIG9wdGlvbnMudmlkZW9cbiAgICAgICAgLmJpdHJhdGVNdWx0aXBsaWVyXG4gICAgICAgIC50b1N0cmluZygpIDogdW5kZWZpbmVkO1xuICAgIHZpZGVvT3B0aW9ucy5rZXlGcmFtZUludGVydmFsID0gb3B0aW9ucy52aWRlby5rZXlGcmFtZUludGVydmFsO1xuICAgIHJldHVybiB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3N1YnNjcmlwdGlvbi1jb250cm9sJywge1xuICAgICAgaWQ6IHNlc3Npb25JZCxcbiAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHZpZGVvOiB7cGFyYW1ldGVyczogdmlkZW9PcHRpb25zfSxcbiAgICAgIH0sXG4gICAgfSkudGhlbigpO1xuICB9XG5cbiAgX29uUmVtb3RlU3RyZWFtQWRkZWQoZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ1JlbW90ZSBzdHJlYW0gYWRkZWQuJyk7XG4gICAgZm9yIChjb25zdCBbaW50ZXJuYWxJZCwgc3ViXSBvZiB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMpIHtcbiAgICAgIGlmIChzdWIudHJhbnNjZWl2ZXJzLmZpbmQoKHQpID0+IHQudHJhbnNjZWl2ZXIgPT09IGV2ZW50LnRyYW5zY2VpdmVyKSkge1xuICAgICAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9ucy5oYXMoc3ViLmlkKSkge1xuICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuX3N1YnNjcmlwdGlvbnMuZ2V0KHN1Yi5pZCk7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uLnN0cmVhbSA9IGV2ZW50LnN0cmVhbXNbMF07XG4gICAgICAgICAgaWYgKHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuZ2V0KGludGVybmFsSWQpLnJlc29sdmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmRlbGV0ZShpbnRlcm5hbElkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVtb3RlTWVkaWFTdHJlYW1zLnNldChzdWIuaWQsIGV2ZW50LnN0cmVhbXNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVGhpcyBpcyBub3QgZXhwZWN0ZWQgcGF0aC4gSG93ZXZlciwgdGhpcyBpcyBnb2luZyB0byBoYXBwZW4gb24gU2FmYXJpXG4gICAgLy8gYmVjYXVzZSBpdCBkb2VzIG5vdCBzdXBwb3J0IHNldHRpbmcgZGlyZWN0aW9uIG9mIHRyYW5zY2VpdmVyLlxuICAgIExvZ2dlci53YXJuaW5nKCdSZWNlaXZlZCByZW1vdGUgc3RyZWFtIHdpdGhvdXQgc3Vic2NyaXB0aW9uLicpO1xuICB9XG5cbiAgX29uTG9jYWxJY2VDYW5kaWRhdGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XG4gICAgICBpZiAodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSAhPT0gJ3N0YWJsZScpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ0NhbmRpZGF0ZXMucHVzaChldmVudC5jYW5kaWRhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2VuZENhbmRpZGF0ZShldmVudC5jYW5kaWRhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0VtcHR5IGNhbmRpZGF0ZS4nKTtcbiAgICB9XG4gIH1cblxuICBfZmlyZUVuZGVkRXZlbnRPblB1YmxpY2F0aW9uT3JTdWJzY3JpcHRpb24oKSB7XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2VuZGVkID0gdHJ1ZTtcbiAgICBjb25zdCBldmVudCA9IG5ldyBPd3RFdmVudCgnZW5kZWQnKTtcbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHVibGljYXRpb25dIG9mIHRoaXMuX3B1YmxpY2F0aW9ucykge1xuICAgICAgcHVibGljYXRpb24uZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICBwdWJsaWNhdGlvbi5zdG9wKCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBzdWJzY3JpcHRpb25dIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIHN1YnNjcmlwdGlvbi5zdG9wKCk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgX3JlamVjdFByb21pc2UoZXJyb3IpIHtcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBlcnJvciA9IG5ldyBDb25mZXJlbmNlRXJyb3IoJ0Nvbm5lY3Rpb24gZmFpbGVkIG9yIGNsb3NlZC4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGMgJiYgdGhpcy5wYy5pY2VDb25uZWN0aW9uU3RhdGUgIT09ICdjbG9zZWQnKSB7XG4gICAgICB0aGlzLnBjLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gUmVqZWN0aW5nIGFsbCBjb3JyZXNwb25kaW5nIHByb21pc2VzIGlmIHB1Ymxpc2hpbmcgYW5kIHN1YnNjcmliaW5nIGlzIG9uZ29pbmcuXG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHByb21pc2VdIG9mIHRoaXMuX3B1Ymxpc2hQcm9taXNlcykge1xuICAgICAgcHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuY2xlYXIoKTtcbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHJvbWlzZV0gb2YgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMpIHtcbiAgICAgIHByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuY2xlYXIoKTtcbiAgfVxuXG4gIF9vbkljZUNvbm5lY3Rpb25TdGF0ZUNoYW5nZShldmVudCkge1xuICAgIGlmICghZXZlbnQgfHwgIWV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBMb2dnZXIuZGVidWcoJ0lDRSBjb25uZWN0aW9uIHN0YXRlIGNoYW5nZWQgdG8gJyArXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlKTtcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjbG9zZWQnIHx8XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnZmFpbGVkJykge1xuICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnZmFpbGVkJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcignY29ubmVjdGlvbiBmYWlsZWQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGaXJlIGVuZGVkIGV2ZW50IGlmIHB1YmxpY2F0aW9uIG9yIHN1YnNjcmlwdGlvbiBleGlzdHMuXG4gICAgICAgIHRoaXMuX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX29uQ29ubmVjdGlvblN0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucGMuY29ubmVjdGlvblN0YXRlID09PSAnY2xvc2VkJyB8fFxuICAgICAgICB0aGlzLnBjLmNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgIGlmICh0aGlzLnBjLmNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoJ2Nvbm5lY3Rpb24gZmFpbGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmlyZSBlbmRlZCBldmVudCBpZiBwdWJsaWNhdGlvbiBvciBzdWJzY3JpcHRpb24gZXhpc3RzLlxuICAgICAgICB0aGlzLl9maXJlRW5kZWRFdmVudE9uUHVibGljYXRpb25PclN1YnNjcmlwdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9zZW5kQ2FuZGlkYXRlKGNhbmRpZGF0ZSkge1xuICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc29hYycsIHtcbiAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgIHNpZ25hbGluZzoge1xuICAgICAgICB0eXBlOiAnY2FuZGlkYXRlJyxcbiAgICAgICAgY2FuZGlkYXRlOiB7XG4gICAgICAgICAgY2FuZGlkYXRlOiAnYT0nICsgY2FuZGlkYXRlLmNhbmRpZGF0ZSxcbiAgICAgICAgICBzZHBNaWQ6IGNhbmRpZGF0ZS5zZHBNaWQsXG4gICAgICAgICAgc2RwTUxpbmVJbmRleDogY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXgsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgX2NyZWF0ZVBlZXJDb25uZWN0aW9uKCkge1xuICAgIGlmICh0aGlzLnBjKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGNDb25maWd1cmF0aW9uID0gdGhpcy5fY29uZmlnLnJ0Y0NvbmZpZ3VyYXRpb24gfHwge307XG4gICAgaWYgKFV0aWxzLmlzQ2hyb21lKCkpIHtcbiAgICAgIHBjQ29uZmlndXJhdGlvbi5idW5kbGVQb2xpY3kgPSAnbWF4LWJ1bmRsZSc7XG4gICAgfVxuICAgIHRoaXMucGMgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24ocGNDb25maWd1cmF0aW9uKTtcbiAgICB0aGlzLnBjLm9uaWNlY2FuZGlkYXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkxvY2FsSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgdGhpcy5wYy5vbnRyYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vblJlbW90ZVN0cmVhbUFkZGVkLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgdGhpcy5wYy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25JY2VDb25uZWN0aW9uU3RhdGVDaGFuZ2UuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICB0aGlzLnBjLm9uY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICB9XG5cbiAgX2dldFN0YXRzKCkge1xuICAgIGlmICh0aGlzLnBjKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYy5nZXRTdGF0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnUGVlckNvbm5lY3Rpb24gaXMgbm90IGF2YWlsYWJsZS4nKSk7XG4gICAgfVxuICB9XG5cbiAgX3JlYWR5SGFuZGxlcihzZXNzaW9uSWQpIHtcbiAgICBjb25zdCBpbnRlcm5hbElkID0gdGhpcy5fcmV2ZXJzZUlkTWFwLmdldChzZXNzaW9uSWQpO1xuICAgIGlmICh0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgIGNvbnN0IG1lZGlhU3RyZWFtID0gdGhpcy5fcmVtb3RlTWVkaWFTdHJlYW1zLmdldChzZXNzaW9uSWQpO1xuICAgICAgY29uc3QgdHJhbnNwb3J0U2V0dGluZ3MgPVxuICAgICAgICAgIG5ldyBUcmFuc3BvcnRTZXR0aW5ncyhUcmFuc3BvcnRUeXBlLldFQlJUQywgdGhpcy5faWQpO1xuICAgICAgdHJhbnNwb3J0U2V0dGluZ3MucnRwVHJhbnNjZWl2ZXJzID1cbiAgICAgICAgICB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpLnRyYW5zY2VpdmVycztcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oXG4gICAgICAgICAgc2Vzc2lvbklkLCBtZWRpYVN0cmVhbSwgdHJhbnNwb3J0U2V0dGluZ3MsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoaW50ZXJuYWxJZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB0aGlzLl9nZXRTdGF0cygpLFxuICAgICAgICAgICh0cmFja0tpbmQpID0+IHRoaXMuX211dGVPclVubXV0ZShzZXNzaW9uSWQsIHRydWUsIGZhbHNlLCB0cmFja0tpbmQpLFxuICAgICAgICAgICh0cmFja0tpbmQpID0+IHRoaXMuX211dGVPclVubXV0ZShzZXNzaW9uSWQsIGZhbHNlLCBmYWxzZSwgdHJhY2tLaW5kKSxcbiAgICAgICAgICAob3B0aW9ucykgPT4gdGhpcy5fYXBwbHlPcHRpb25zKHNlc3Npb25JZCwgb3B0aW9ucykpO1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5zZXQoc2Vzc2lvbklkLCBzdWJzY3JpcHRpb24pO1xuICAgICAgLy8gUmVzb2x2ZSBzdWJzY3JpcHRpb24gaWYgbWVkaWFTdHJlYW0gaXMgcmVhZHkuXG4gICAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9ucy5nZXQoc2Vzc2lvbklkKS5zdHJlYW0pIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuZ2V0KGludGVybmFsSWQpLnJlc29sdmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuZGVsZXRlKGludGVybmFsSWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fcHVibGlzaFByb21pc2VzLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgY29uc3QgdHJhbnNwb3J0U2V0dGluZ3MgPVxuICAgICAgICAgIG5ldyBUcmFuc3BvcnRTZXR0aW5ncyhUcmFuc3BvcnRUeXBlLldFQlJUQywgdGhpcy5faWQpO1xuICAgICAgdHJhbnNwb3J0U2V0dGluZ3MudHJhbnNjZWl2ZXJzID1cbiAgICAgICAgICB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKS50cmFuc2NlaXZlcnM7XG4gICAgICBjb25zdCBwdWJsaWNhdGlvbiA9IG5ldyBQdWJsaWNhdGlvbihcbiAgICAgICAgICBzZXNzaW9uSWQsXG4gICAgICAgICAgdHJhbnNwb3J0U2V0dGluZ3MsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdW5wdWJsaXNoKGludGVybmFsSWQpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4gdGhpcy5fZ2V0U3RhdHMoKSxcbiAgICAgICAgICAodHJhY2tLaW5kKSA9PiB0aGlzLl9tdXRlT3JVbm11dGUoc2Vzc2lvbklkLCB0cnVlLCB0cnVlLCB0cmFja0tpbmQpLFxuICAgICAgICAgICh0cmFja0tpbmQpID0+IHRoaXMuX211dGVPclVubXV0ZShzZXNzaW9uSWQsIGZhbHNlLCB0cnVlLCB0cmFja0tpbmQpKTtcbiAgICAgIHRoaXMuX3B1YmxpY2F0aW9ucy5zZXQoc2Vzc2lvbklkLCBwdWJsaWNhdGlvbik7XG4gICAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuZ2V0KGludGVybmFsSWQpLnJlc29sdmUocHVibGljYXRpb24pO1xuICAgICAgLy8gRG8gbm90IGZpcmUgcHVibGljYXRpb24ncyBlbmRlZCBldmVudCB3aGVuIGFzc29jaWF0ZWQgc3RyZWFtIGlzIGVuZGVkLlxuICAgICAgLy8gSXQgbWF5IHN0aWxsIHNlbmRpbmcgc2lsZW5jZSBvciBibGFjayBmcmFtZXMuXG4gICAgICAvLyBSZWZlciB0byBodHRwczovL3czYy5naXRodWIuaW8vd2VicnRjLXBjLyNydGNydHBzZW5kZXItaW50ZXJmYWNlLlxuICAgIH0gZWxzZSBpZiAoIXNlc3Npb25JZCkge1xuICAgICAgLy8gQ2hhbm5lbCByZWFkeVxuICAgIH1cbiAgfVxuXG4gIF9zZHBIYW5kbGVyKHNkcCkge1xuICAgIGlmIChzZHAudHlwZSA9PT0gJ2Fuc3dlcicpIHtcbiAgICAgIHRoaXMucGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oc2RwKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdDYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiB0aGlzLl9wZW5kaW5nQ2FuZGlkYXRlcykge1xuICAgICAgICAgICAgdGhpcy5fc2VuZENhbmRpZGF0ZShjYW5kaWRhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIExvZ2dlci5lcnJvcignU2V0IHJlbW90ZSBkZXNjcmlwdGlvbiBmYWlsZWQ6ICcgKyBlcnJvcik7XG4gICAgICAgIHRoaXMuX3JlamVjdFByb21pc2UoZXJyb3IpO1xuICAgICAgICB0aGlzLl9maXJlRW5kZWRFdmVudE9uUHVibGljYXRpb25PclN1YnNjcmlwdGlvbigpO1xuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fbmV4dFNkcFByb21pc2UoKSkge1xuICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdVbmV4cGVjdGVkIFNEUCBwcm9taXNlIHN0YXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9lcnJvckhhbmRsZXIoc2Vzc2lvbklkLCBlcnJvck1lc3NhZ2UpIHtcbiAgICBpZiAoIXNlc3Npb25JZCkge1xuICAgICAgLy8gVHJhbnNwb3J0IGVycm9yXG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvLyBGaXJlIGVycm9yIGV2ZW50IG9uIHB1YmxpY2F0aW9uIG9yIHN1YnNjcmlwdGlvblxuICAgIGNvbnN0IGVycm9yRXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICBlcnJvcjogbmV3IENvbmZlcmVuY2VFcnJvcihlcnJvck1lc3NhZ2UpLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLl9wdWJsaWNhdGlvbnMuaGFzKHNlc3Npb25JZCkpIHtcbiAgICAgIHRoaXMuX3B1YmxpY2F0aW9ucy5nZXQoc2Vzc2lvbklkKS5kaXNwYXRjaEV2ZW50KGVycm9yRXZlbnQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9ucy5oYXMoc2Vzc2lvbklkKSkge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5nZXQoc2Vzc2lvbklkKS5kaXNwYXRjaEV2ZW50KGVycm9yRXZlbnQpO1xuICAgIH1cbiAgICAvLyBTdG9wIHB1YmxpY2F0aW9uIG9yIHN1YnNjcmlwdGlvblxuICAgIGNvbnN0IGludGVybmFsSWQgPSB0aGlzLl9yZXZlcnNlSWRNYXAuZ2V0KHNlc3Npb25JZCk7XG4gICAgaWYgKHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICB0aGlzLl91bnB1Ymxpc2goaW50ZXJuYWxJZCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZShpbnRlcm5hbElkKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlRXJyb3IoZXJyb3JNZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQ29uZmVyZW5jZUVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVycm9yRXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHB1YmxpY2F0aW9uXSBvZiB0aGlzLl9wdWJsaWNhdGlvbnMpIHtcbiAgICAgIHB1YmxpY2F0aW9uLmRpc3BhdGNoRXZlbnQoZXJyb3JFdmVudCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBzdWJzY3JpcHRpb25dIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5kaXNwYXRjaEV2ZW50KGVycm9yRXZlbnQpO1xuICAgIH1cbiAgICAvLyBGaXJlIGVuZGVkIGV2ZW50IHdoZW4gZXJyb3Igb2NjdXJlZFxuICAgIHRoaXMuX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCk7XG4gIH1cblxuICBfc2V0Q29kZWNPcmRlcihzZHAsIG9wdGlvbnMsIG1pZCkge1xuICAgIGlmIChvcHRpb25zLmF1ZGlvKSB7XG4gICAgICBpZiAob3B0aW9ucy5hdWRpby5jb2RlY3MpIHtcbiAgICAgICAgY29uc3QgYXVkaW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbShvcHRpb25zLmF1ZGlvLmNvZGVjcywgKGNvZGVjKSA9PlxuICAgICAgICAgIGNvZGVjLm5hbWUpO1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ2F1ZGlvJywgYXVkaW9Db2RlY05hbWVzLCBtaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXVkaW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbShvcHRpb25zLmF1ZGlvLFxuICAgICAgICAgICAgKGVuY29kaW5nUGFyYW1ldGVycykgPT4gZW5jb2RpbmdQYXJhbWV0ZXJzLmNvZGVjLm5hbWUpO1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ2F1ZGlvJywgYXVkaW9Db2RlY05hbWVzLCBtaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy52aWRlbykge1xuICAgICAgaWYgKG9wdGlvbnMudmlkZW8uY29kZWNzKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvQ29kZWNOYW1lcyA9IEFycmF5LmZyb20ob3B0aW9ucy52aWRlby5jb2RlY3MsIChjb2RlYykgPT5cbiAgICAgICAgICBjb2RlYy5uYW1lKTtcbiAgICAgICAgc2RwID0gU2RwVXRpbHMucmVvcmRlckNvZGVjcyhzZHAsICd2aWRlbycsIHZpZGVvQ29kZWNOYW1lcywgbWlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZpZGVvQ29kZWNOYW1lcyA9IEFycmF5LmZyb20ob3B0aW9ucy52aWRlbyxcbiAgICAgICAgICAgIChlbmNvZGluZ1BhcmFtZXRlcnMpID0+IGVuY29kaW5nUGFyYW1ldGVycy5jb2RlYy5uYW1lKTtcbiAgICAgICAgc2RwID0gU2RwVXRpbHMucmVvcmRlckNvZGVjcyhzZHAsICd2aWRlbycsIHZpZGVvQ29kZWNOYW1lcywgbWlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIF9zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucywgbWlkKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1ZGlvID09PSAnb2JqZWN0Jykge1xuICAgICAgc2RwID0gU2RwVXRpbHMuc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMuYXVkaW8sIG1pZCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy52aWRlbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNkcCA9IFNkcFV0aWxzLnNldE1heEJpdHJhdGUoc2RwLCBvcHRpb25zLnZpZGVvLCBtaWQpO1xuICAgIH1cbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX3NldFJ0cFNlbmRlck9wdGlvbnMoc2RwLCBvcHRpb25zLCBtaWQpIHtcbiAgICAvLyBTRFAgbXVnbGluZyBpcyBkZXByZWNhdGVkLCBtb3ZpbmcgdG8gYHNldFBhcmFtZXRlcnNgLlxuICAgIGlmICh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLmF1ZGlvKSB8fFxuICAgICAgICB0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSkge1xuICAgICAgcmV0dXJuIHNkcDtcbiAgICB9XG4gICAgc2RwID0gdGhpcy5fc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMsIG1pZCk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIF9zZXRSdHBSZWNlaXZlck9wdGlvbnMoc2RwLCBvcHRpb25zLCBtaWQpIHtcbiAgICAvLyBBZGQgbGVnYWN5IHNpbXVsY2FzdCBpbiBTRFAgZm9yIHNhZmFyaS5cbiAgICBpZiAodGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykgJiYgVXRpbHMuaXNTYWZhcmkoKSkge1xuICAgICAgaWYgKG9wdGlvbnMudmlkZW8ubGVuZ3RoID4gMSkge1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5hZGRMZWdhY3lTaW11bGNhc3QoXG4gICAgICAgICAgICBzZHAsICd2aWRlbycsIG9wdGlvbnMudmlkZW8ubGVuZ3RoLCBtaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIF92aWRlb0NvZGVjcyBpcyBhIHdvcmthcm91bmQgZm9yIHNldHRpbmcgdmlkZW8gY29kZWNzLiBJdCB3aWxsIGJlIG1vdmVkIHRvIFJUQ1J0cFNlbmRQYXJhbWV0ZXJzLlxuICAgIGlmICh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSAmJiB0aGlzLl92aWRlb0NvZGVjcykge1xuICAgICAgc2RwID0gU2RwVXRpbHMucmVvcmRlckNvZGVjcyhzZHAsICd2aWRlbycsIHRoaXMuX3ZpZGVvQ29kZWNzLCBtaWQpO1xuICAgICAgcmV0dXJuIHNkcDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMuYXVkaW8pIHx8XG4gICAgICAgIHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pKSB7XG4gICAgICByZXR1cm4gc2RwO1xuICAgIH1cbiAgICBzZHAgPSB0aGlzLl9zZXRDb2RlY09yZGVyKHNkcCwgb3B0aW9ucywgbWlkKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgLy8gSGFuZGxlIHN0cmVhbSBldmVudCBzZW50IGZyb20gTUNVLiBTb21lIHN0cmVhbSB1cGRhdGUgZXZlbnRzIHNlbnQgZnJvbVxuICAvLyBzZXJ2ZXIsIG1vcmUgc3BlY2lmaWNhbGx5IGF1ZGlvLnN0YXR1cyBhbmQgdmlkZW8uc3RhdHVzIGV2ZW50cyBzaG91bGQgYmVcbiAgLy8gcHVibGljYXRpb24gZXZlbnQgb3Igc3Vic2NyaXB0aW9uIGV2ZW50cy4gVGhleSBkb24ndCBjaGFuZ2UgTWVkaWFTdHJlYW0nc1xuICAvLyBzdGF0dXMuIFNlZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vb3Blbi13ZWJydGMtdG9vbGtpdC9vd3Qtc2VydmVyL2Jsb2IvbWFzdGVyL2RvYy9DbGllbnQtUG9ydGFsJTIwUHJvdG9jb2wubWQjMzM5LXBhcnRpY2lwYW50LWlzLW5vdGlmaWVkLW9uLXN0cmVhbXMtdXBkYXRlLWluLXJvb21cbiAgLy8gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gIF9vblN0cmVhbUV2ZW50KG1lc3NhZ2UpIHtcbiAgICBjb25zdCBldmVudFRhcmdldHMgPSBbXTtcbiAgICBpZiAodGhpcy5fcHVibGljYXRpb25zLmhhcyhtZXNzYWdlLmlkKSkge1xuICAgICAgZXZlbnRUYXJnZXRzLnB1c2godGhpcy5fcHVibGljYXRpb25zLmdldChtZXNzYWdlLmlkKSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgc3Vic2NyaXB0aW9uIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIGlmIChtZXNzYWdlLmlkID09PSBzdWJzY3JpcHRpb24uX2F1ZGlvVHJhY2tJZCB8fFxuICAgICAgICAgIG1lc3NhZ2UuaWQgPT09IHN1YnNjcmlwdGlvbi5fdmlkZW9UcmFja0lkKSB7XG4gICAgICAgIGV2ZW50VGFyZ2V0cy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZXZlbnRUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdHJhY2tLaW5kO1xuICAgIGlmIChtZXNzYWdlLmRhdGEuZmllbGQgPT09ICdhdWRpby5zdGF0dXMnKSB7XG4gICAgICB0cmFja0tpbmQgPSBUcmFja0tpbmQuQVVESU87XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmRhdGEuZmllbGQgPT09ICd2aWRlby5zdGF0dXMnKSB7XG4gICAgICB0cmFja0tpbmQgPSBUcmFja0tpbmQuVklERU87XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdJbnZhbGlkIGRhdGEgZmllbGQgZm9yIHN0cmVhbSB1cGRhdGUgaW5mby4nKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZGF0YS52YWx1ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIGV2ZW50VGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+XG4gICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBNdXRlRXZlbnQoJ3VubXV0ZScsIHtraW5kOiB0cmFja0tpbmR9KSkpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5kYXRhLnZhbHVlID09PSAnaW5hY3RpdmUnKSB7XG4gICAgICBldmVudFRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PlxuICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgTXV0ZUV2ZW50KCdtdXRlJywge2tpbmQ6IHRyYWNrS2luZH0pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdJbnZhbGlkIGRhdGEgdmFsdWUgZm9yIHN0cmVhbSB1cGRhdGUgaW5mby4nKTtcbiAgICB9XG4gIH1cblxuICBfaXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob2JqKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gT25seSBjaGVjayB0aGUgZmlyc3Qgb25lLlxuICAgIGNvbnN0IHBhcmFtID0gb2JqWzBdO1xuICAgIHJldHVybiAhIShcbiAgICAgIHBhcmFtLmNvZGVjUGF5bG9hZFR5cGUgfHwgcGFyYW0uZHR4IHx8IHBhcmFtLmFjdGl2ZSB8fCBwYXJhbS5wdGltZSB8fFxuICAgICAgcGFyYW0ubWF4RnJhbWVyYXRlIHx8IHBhcmFtLnNjYWxlUmVzb2x1dGlvbkRvd25CeSB8fCBwYXJhbS5yaWQgfHxcbiAgICAgIHBhcmFtLnNjYWxhYmlsaXR5TW9kZSk7XG4gIH1cblxuICBfaXNPd3RFbmNvZGluZ1BhcmFtZXRlcnMob2JqKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gT25seSBjaGVjayB0aGUgZmlyc3Qgb25lLlxuICAgIGNvbnN0IHBhcmFtID0gb2JqWzBdO1xuICAgIHJldHVybiAhIXBhcmFtLmNvZGVjO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBNYXAsIFByb21pc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBFdmVudE1vZHVsZSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7U2lvU2lnbmFsaW5nIGFzIFNpZ25hbGluZ30gZnJvbSAnLi9zaWduYWxpbmcuanMnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnLi4vYmFzZS9iYXNlNjQuanMnO1xuaW1wb3J0IHtDb25mZXJlbmNlRXJyb3J9IGZyb20gJy4vZXJyb3IuanMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vYmFzZS91dGlscy5qcyc7XG5pbXBvcnQgKiBhcyBTdHJlYW1Nb2R1bGUgZnJvbSAnLi4vYmFzZS9zdHJlYW0uanMnO1xuaW1wb3J0IHtQYXJ0aWNpcGFudH0gZnJvbSAnLi9wYXJ0aWNpcGFudC5qcyc7XG5pbXBvcnQge0NvbmZlcmVuY2VJbmZvfSBmcm9tICcuL2luZm8uanMnO1xuaW1wb3J0IHtDb25mZXJlbmNlUGVlckNvbm5lY3Rpb25DaGFubmVsfSBmcm9tICcuL2NoYW5uZWwuanMnO1xuaW1wb3J0IHtRdWljQ29ubmVjdGlvbn0gZnJvbSAnLi9xdWljY29ubmVjdGlvbi5qcyc7XG5pbXBvcnQge1JlbW90ZU1peGVkU3RyZWFtLCBBY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnQsIExheW91dENoYW5nZUV2ZW50fVxuICBmcm9tICcuL21peGVkc3RyZWFtLmpzJztcbmltcG9ydCAqIGFzIFN0cmVhbVV0aWxzTW9kdWxlIGZyb20gJy4vc3RyZWFtdXRpbHMuanMnO1xuXG5jb25zdCBTaWduYWxpbmdTdGF0ZSA9IHtcbiAgUkVBRFk6IDEsXG4gIENPTk5FQ1RJTkc6IDIsXG4gIENPTk5FQ1RFRDogMyxcbn07XG5cbmNvbnN0IHByb3RvY29sVmVyc2lvbiA9ICcxLjInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSB2YWxpZC1qc2RvYyAqL1xuLyoqXG4gKiBAY2xhc3MgUGFydGljaXBhbnRFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBQYXJ0aWNpcGFudEV2ZW50IHJlcHJlc2VudHMgYSBwYXJ0aWNpcGFudCBldmVudC5cbiAgIEBleHRlbmRzIE93dC5CYXNlLk93dEV2ZW50XG4gKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUGFydGljaXBhbnRFdmVudCA9IGZ1bmN0aW9uKHR5cGUsIGluaXQpIHtcbiAgY29uc3QgdGhhdCA9IG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCh0eXBlLCBpbml0KTtcbiAgLyoqXG4gICAqIEBtZW1iZXIge093dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50fSBwYXJ0aWNpcGFudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50RXZlbnRcbiAgICovXG4gIHRoYXQucGFydGljaXBhbnQgPSBpbml0LnBhcnRpY2lwYW50O1xuICByZXR1cm4gdGhhdDtcbn07XG4vKiBlc2xpbnQtZW5hYmxlIHZhbGlkLWpzZG9jICovXG5cbi8qKlxuICogQGNsYXNzIENvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uXG4gKiBAY2xhc3NEZXNjIENvbmZpZ3VyYXRpb24gZm9yIENvbmZlcmVuY2VDbGllbnQuXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuY2xhc3MgQ29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb24geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9SVENDb25maWd1cmF0aW9ufSBydGNDb25maWd1cmF0aW9uXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uXG4gICAgICogQGRlc2MgSXQgd2lsbCBiZSB1c2VkIGZvciBjcmVhdGluZyBQZWVyQ29ubmVjdGlvbi5cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvd2VicnRjLyNydGNjb25maWd1cmF0aW9uLWRpY3Rpb25hcnl8UlRDQ29uZmlndXJhdGlvbiBEaWN0aW9uYXJ5IG9mIFdlYlJUQyAxLjB9LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogLy8gRm9sbG93aW5nIG9iamVjdCBjYW4gYmUgc2V0IHRvIGNvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uLnJ0Y0NvbmZpZ3VyYXRpb24uXG4gICAgICoge1xuICAgICAqICAgaWNlU2VydmVyczogW3tcbiAgICAgKiAgICAgIHVybHM6IFwic3R1bjpleGFtcGxlLmNvbTozNDc4XCJcbiAgICAgKiAgIH0sIHtcbiAgICAgKiAgICAgdXJsczogW1xuICAgICAqICAgICAgIFwidHVybjpleGFtcGxlLmNvbTozNDc4P3RyYW5zcG9ydD11ZHBcIixcbiAgICAgKiAgICAgICBcInR1cm46ZXhhbXBsZS5jb206MzQ3OD90cmFuc3BvcnQ9dGNwXCJcbiAgICAgKiAgICAgXSxcbiAgICAgKiAgICAgIGNyZWRlbnRpYWw6IFwicGFzc3dvcmRcIixcbiAgICAgKiAgICAgIHVzZXJuYW1lOiBcInVzZXJuYW1lXCJcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICovXG4gICAgdGhpcy5ydGNDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P1dlYlRyYW5zcG9ydE9wdGlvbnN9IHdlYlRyYW5zcG9ydENvbmZpZ3VyYXRpb25cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb25cbiAgICAgKiBAZGVzYyBJdCB3aWxsIGJlIHVzZWQgZm9yIGNyZWF0aW5nIFdlYlRyYW5zcG9ydC5cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vd2VidHJhbnNwb3J0LyNkaWN0ZGVmLXdlYnRyYW5zcG9ydG9wdGlvbnN8V2ViVHJhbnNwb3J0T3B0aW9ucyBvZiBXZWJUcmFuc3BvcnR9LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogLy8gRm9sbG93aW5nIG9iamVjdCBjYW4gYmUgc2V0IHRvIGNvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uLndlYlRyYW5zcG9ydENvbmZpZ3VyYXRpb24uXG4gICAgICoge1xuICAgICAqICAgc2VydmVyQ2VydGlmaWNhdGVGaW5nZXJwcmludHM6IFt7XG4gICAgICogICAgIHZhbHVlOlxuICAgICAqICAgICAgICAgJzAwOjExOjIyOjMzOjQ0OjU1OjY2Ojc3Ojg4Ojk5OkFBOkJCOkNDOkREOkVFOkZGOjAwOjExOjIyOjMzOjQ0OjU1OjY2Ojc3Ojg4Ojk5OkFBOkJCOkNDOkREOkVFOkZGJyxcbiAgICAgKiAgICAgYWxnb3JpdGhtOiAnc2hhLTI1NicsXG4gICAgICogICB9XSxcbiAgICAgKiB9XG4gICAgICovXG4gICAgdGhpcy53ZWJUcmFuc3BvcnRDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIENvbmZlcmVuY2VDbGllbnRcbiAqIEBjbGFzc2Rlc2MgVGhlIENvbmZlcmVuY2VDbGllbnQgaGFuZGxlcyBQZWVyQ29ubmVjdGlvbnMgYmV0d2VlbiBjbGllbnQgYW5kIHNlcnZlci4gRm9yIGNvbmZlcmVuY2UgY29udHJvbGxpbmcsIHBsZWFzZSByZWZlciB0byBSRVNUIEFQSSBndWlkZS5cbiAqIEV2ZW50czpcbiAqXG4gKiB8IEV2ZW50IE5hbWUgICAgICAgICAgICB8IEFyZ3VtZW50IFR5cGUgICAgICAgICAgICAgICAgICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IHN0cmVhbWFkZGVkICAgICAgICAgICB8IE93dC5CYXNlLlN0cmVhbUV2ZW50ICAgICAgICAgICAgIHwgQSBuZXcgc3RyZWFtIGlzIGF2YWlsYWJsZSBpbiB0aGUgY29uZmVyZW5jZS4gfFxuICogfCBwYXJ0aWNpcGFudGpvaW5lZCAgICAgfCBPd3QuQ29uZmVyZW5jZS5QYXJ0aWNpcGFudEV2ZW50ICB8IEEgbmV3IHBhcnRpY2lwYW50IGpvaW5lZCB0aGUgY29uZmVyZW5jZS4gfFxuICogfCBtZXNzYWdlcmVjZWl2ZWQgICAgICAgfCBPd3QuQmFzZS5NZXNzYWdlRXZlbnQgICAgICAgICAgICB8IEEgbmV3IG1lc3NhZ2UgaXMgcmVjZWl2ZWQuIHxcbiAqIHwgc2VydmVyZGlzY29ubmVjdGVkICAgIHwgT3d0LkJhc2UuT3d0RXZlbnQgICAgICAgICAgICAgICAgfCBEaXNjb25uZWN0ZWQgZnJvbSBjb25mZXJlbmNlIHNlcnZlci4gfFxuICpcbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7P093dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uIH0gY29uZmlnIENvbmZpZ3VyYXRpb24gZm9yIENvbmZlcmVuY2VDbGllbnQuXG4gKiBAcGFyYW0gez9Pd3QuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmcgfSBzaWduYWxpbmdJbXBsIFNpZ25hbGluZyBjaGFubmVsIGltcGxlbWVudGF0aW9uIGZvciBDb25mZXJlbmNlQ2xpZW50LiBTREsgdXNlcyBkZWZhdWx0IHNpZ25hbGluZyBjaGFubmVsIGltcGxlbWVudGF0aW9uIGlmIHRoaXMgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZC4gQ3VycmVudGx5LCBhIFNvY2tldC5JTyBzaWduYWxpbmcgY2hhbm5lbCBpbXBsZW1lbnRhdGlvbiB3YXMgcHJvdmlkZWQgYXMgaWNzLmNvbmZlcmVuY2UuU2lvU2lnbmFsaW5nLiBIb3dldmVyLCBpdCBpcyBub3QgcmVjb21tZW5kZWQgdG8gZGlyZWN0bHkgYWNjZXNzIHNpZ25hbGluZyBjaGFubmVsIG9yIGN1c3RvbWl6ZSBzaWduYWxpbmcgY2hhbm5lbCBmb3IgQ29uZmVyZW5jZUNsaWVudCBhcyB0aGlzIHRpbWUuXG4gKi9cbmV4cG9ydCBjb25zdCBDb25mZXJlbmNlQ2xpZW50ID0gZnVuY3Rpb24oY29uZmlnLCBzaWduYWxpbmdJbXBsKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcgRXZlbnRNb2R1bGUuRXZlbnREaXNwYXRjaGVyKCkpO1xuICBjb25maWcgPSBjb25maWcgfHwge307XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuICBsZXQgc2lnbmFsaW5nU3RhdGUgPSBTaWduYWxpbmdTdGF0ZS5SRUFEWTtcbiAgY29uc3Qgc2lnbmFsaW5nID0gc2lnbmFsaW5nSW1wbCA/IHNpZ25hbGluZ0ltcGwgOiAobmV3IFNpZ25hbGluZygpKTtcbiAgbGV0IG1lO1xuICBsZXQgcm9vbTtcbiAgY29uc3QgcmVtb3RlU3RyZWFtcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHN0cmVhbSBJRCwgdmFsdWUgaXMgYSBSZW1vdGVTdHJlYW0uXG4gIGNvbnN0IHBhcnRpY2lwYW50cyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHBhcnRpY2lwYW50IElELCB2YWx1ZSBpcyBhIFBhcnRpY2lwYW50IG9iamVjdC5cbiAgY29uc3QgcHVibGlzaENoYW5uZWxzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgTWVkaWFTdHJlYW0ncyBJRCwgdmFsdWUgaXMgcGMgY2hhbm5lbC5cbiAgY29uc3QgY2hhbm5lbHMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBjaGFubmVsJ3MgaW50ZXJuYWwgSUQsIHZhbHVlIGlzIGNoYW5uZWwuXG4gIGxldCBwZWVyQ29ubmVjdGlvbkNoYW5uZWwgPSBudWxsOyAvLyBQZWVyQ29ubmVjdGlvbiBmb3IgV2ViUlRDLlxuICBsZXQgcXVpY1RyYW5zcG9ydENoYW5uZWwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyIHtSVENQZWVyQ29ubmVjdGlvbn0gcGVlckNvbm5lY3Rpb25cbiAgICogQGluc3RhbmNlXG4gICAqIEByZWFkb25seVxuICAgKiBAZGVzYyBQZWVyQ29ubmVjdGlvbiBmb3IgV2ViUlRDIGNvbm5lY3Rpb24gd2l0aCBjb25mZXJlbmNlIHNlcnZlci5cbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYnJ0Yy1wYy8jcnRjcGVlcmNvbm5lY3Rpb24taW50ZXJmYWNlfFJUQ1BlZXJDb25uZWN0aW9uIEludGVyZmFjZSBvZiBXZWJSVEMgMS4wfS5cbiAgICovXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncGVlckNvbm5lY3Rpb24nLCB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gcGVlckNvbm5lY3Rpb25DaGFubmVsPy5wYztcbiAgICB9LFxuICB9KTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIG9uU2lnbmFsaW5nTWVzc2FnZVxuICAgKiBAZGVzYyBSZWNlaXZlZCBhIG1lc3NhZ2UgZnJvbSBjb25mZXJlbmNlIHBvcnRhbC4gRGVmaW5lZCBpbiBjbGllbnQtc2VydmVyIHByb3RvY29sLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbiB0eXBlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBEYXRhIHJlY2VpdmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gb25TaWduYWxpbmdNZXNzYWdlKG5vdGlmaWNhdGlvbiwgZGF0YSkge1xuICAgIGlmIChub3RpZmljYXRpb24gPT09ICdzb2FjJyB8fCBub3RpZmljYXRpb24gPT09ICdwcm9ncmVzcycpIHtcbiAgICAgIGlmIChjaGFubmVscy5oYXMoZGF0YS5pZCkpIHtcbiAgICAgICAgY2hhbm5lbHMuZ2V0KGRhdGEuaWQpLm9uTWVzc2FnZShub3RpZmljYXRpb24sIGRhdGEpO1xuICAgICAgfSBlbHNlIGlmIChxdWljVHJhbnNwb3J0Q2hhbm5lbCAmJiBxdWljVHJhbnNwb3J0Q2hhbm5lbFxuICAgICAgICAgIC5oYXNDb250ZW50U2Vzc2lvbklkKGRhdGEuaWQpKSB7XG4gICAgICAgIHF1aWNUcmFuc3BvcnRDaGFubmVsLm9uTWVzc2FnZShub3RpZmljYXRpb24sIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Nhbm5vdCBmaW5kIGEgY2hhbm5lbCBmb3IgaW5jb21pbmcgZGF0YS4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKG5vdGlmaWNhdGlvbiA9PT0gJ3N0cmVhbScpIHtcbiAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ2FkZCcpIHtcbiAgICAgICAgZmlyZVN0cmVhbUFkZGVkKGRhdGEuZGF0YSk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEuc3RhdHVzID09PSAncmVtb3ZlJykge1xuICAgICAgICBmaXJlU3RyZWFtUmVtb3ZlZChkYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdGF0dXMgPT09ICd1cGRhdGUnKSB7XG4gICAgICAgIC8vIEJyb2FkY2FzdCBhdWRpby92aWRlbyB1cGRhdGUgc3RhdHVzIHRvIGNoYW5uZWwgc28gc3BlY2lmaWMgZXZlbnRzIGNhbiBiZSBmaXJlZCBvbiBwdWJsaWNhdGlvbiBvciBzdWJzY3JpcHRpb24uXG4gICAgICAgIGlmIChkYXRhLmRhdGEuZmllbGQgPT09ICdhdWRpby5zdGF0dXMnIHx8IGRhdGEuZGF0YS5maWVsZCA9PT1cbiAgICAgICAgICAndmlkZW8uc3RhdHVzJykge1xuICAgICAgICAgIGNoYW5uZWxzLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIGMub25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLmZpZWxkID09PSAnYWN0aXZlSW5wdXQnKSB7XG4gICAgICAgICAgZmlyZUFjdGl2ZUF1ZGlvSW5wdXRDaGFuZ2UoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLmZpZWxkID09PSAndmlkZW8ubGF5b3V0Jykge1xuICAgICAgICAgIGZpcmVMYXlvdXRDaGFuZ2UoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLmZpZWxkID09PSAnLicpIHtcbiAgICAgICAgICB1cGRhdGVSZW1vdGVTdHJlYW0oZGF0YS5kYXRhLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2dnZXIud2FybmluZygnVW5rbm93biBzdHJlYW0gZXZlbnQgZnJvbSBNQ1UuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vdGlmaWNhdGlvbiA9PT0gJ3RleHQnKSB7XG4gICAgICBmaXJlTWVzc2FnZVJlY2VpdmVkKGRhdGEpO1xuICAgIH0gZWxzZSBpZiAobm90aWZpY2F0aW9uID09PSAncGFydGljaXBhbnQnKSB7XG4gICAgICBmaXJlUGFydGljaXBhbnRFdmVudChkYXRhKTtcbiAgICB9XG4gIH1cblxuICBzaWduYWxpbmcuYWRkRXZlbnRMaXN0ZW5lcignZGF0YScsIChldmVudCkgPT4ge1xuICAgIG9uU2lnbmFsaW5nTWVzc2FnZShldmVudC5tZXNzYWdlLm5vdGlmaWNhdGlvbiwgZXZlbnQubWVzc2FnZS5kYXRhKTtcbiAgfSk7XG5cbiAgc2lnbmFsaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgY2xlYW4oKTtcbiAgICBzaWduYWxpbmdTdGF0ZSA9IFNpZ25hbGluZ1N0YXRlLlJFQURZO1xuICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ3NlcnZlcmRpc2Nvbm5lY3RlZCcpKTtcbiAgfSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gZmlyZVBhcnRpY2lwYW50RXZlbnQoZGF0YSkge1xuICAgIGlmIChkYXRhLmFjdGlvbiA9PT0gJ2pvaW4nKSB7XG4gICAgICBkYXRhID0gZGF0YS5kYXRhO1xuICAgICAgY29uc3QgcGFydGljaXBhbnQgPSBuZXcgUGFydGljaXBhbnQoZGF0YS5pZCwgZGF0YS5yb2xlLCBkYXRhLnVzZXIpO1xuICAgICAgcGFydGljaXBhbnRzLnNldChkYXRhLmlkLCBwYXJ0aWNpcGFudCk7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBQYXJ0aWNpcGFudEV2ZW50KFxuICAgICAgICAgICdwYXJ0aWNpcGFudGpvaW5lZCcsIHtwYXJ0aWNpcGFudDogcGFydGljaXBhbnR9KTtcbiAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfSBlbHNlIGlmIChkYXRhLmFjdGlvbiA9PT0gJ2xlYXZlJykge1xuICAgICAgY29uc3QgcGFydGljaXBhbnRJZCA9IGRhdGEuZGF0YTtcbiAgICAgIGlmICghcGFydGljaXBhbnRzLmhhcyhwYXJ0aWNpcGFudElkKSkge1xuICAgICAgICBMb2dnZXIud2FybmluZyhcbiAgICAgICAgICAgICdSZWNlaXZlZCBsZWF2ZSBtZXNzYWdlIGZyb20gTUNVIGZvciBhbiB1bmtub3duIHBhcnRpY2lwYW50LicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwYXJ0aWNpcGFudCA9IHBhcnRpY2lwYW50cy5nZXQocGFydGljaXBhbnRJZCk7XG4gICAgICBwYXJ0aWNpcGFudHMuZGVsZXRlKHBhcnRpY2lwYW50SWQpO1xuICAgICAgcGFydGljaXBhbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ2xlZnQnKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gZmlyZU1lc3NhZ2VSZWNlaXZlZChkYXRhKSB7XG4gICAgY29uc3QgbWVzc2FnZUV2ZW50ID0gbmV3IEV2ZW50TW9kdWxlLk1lc3NhZ2VFdmVudCgnbWVzc2FnZXJlY2VpdmVkJywge1xuICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxuICAgICAgb3JpZ2luOiBkYXRhLmZyb20sXG4gICAgICB0bzogZGF0YS50byxcbiAgICB9KTtcbiAgICBzZWxmLmRpc3BhdGNoRXZlbnQobWVzc2FnZUV2ZW50KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGZpcmVTdHJlYW1BZGRlZChpbmZvKSB7XG4gICAgY29uc3Qgc3RyZWFtID0gY3JlYXRlUmVtb3RlU3RyZWFtKGluZm8pO1xuICAgIHJlbW90ZVN0cmVhbXMuc2V0KHN0cmVhbS5pZCwgc3RyZWFtKTtcbiAgICBjb25zdCBzdHJlYW1FdmVudCA9IG5ldyBTdHJlYW1Nb2R1bGUuU3RyZWFtRXZlbnQoJ3N0cmVhbWFkZGVkJywge1xuICAgICAgc3RyZWFtOiBzdHJlYW0sXG4gICAgfSk7XG4gICAgc2VsZi5kaXNwYXRjaEV2ZW50KHN0cmVhbUV2ZW50KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGZpcmVTdHJlYW1SZW1vdmVkKGluZm8pIHtcbiAgICBpZiAoIXJlbW90ZVN0cmVhbXMuaGFzKGluZm8uaWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgc3BlY2lmaWMgcmVtb3RlIHN0cmVhbS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyZWFtID0gcmVtb3RlU3RyZWFtcy5nZXQoaW5mby5pZCk7XG4gICAgY29uc3Qgc3RyZWFtRXZlbnQgPSBuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ2VuZGVkJyk7XG4gICAgcmVtb3RlU3RyZWFtcy5kZWxldGUoc3RyZWFtLmlkKTtcbiAgICBzdHJlYW0uZGlzcGF0Y2hFdmVudChzdHJlYW1FdmVudCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBmaXJlQWN0aXZlQXVkaW9JbnB1dENoYW5nZShpbmZvKSB7XG4gICAgaWYgKCFyZW1vdGVTdHJlYW1zLmhhcyhpbmZvLmlkKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Nhbm5vdCBmaW5kIHNwZWNpZmljIHJlbW90ZSBzdHJlYW0uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0cmVhbSA9IHJlbW90ZVN0cmVhbXMuZ2V0KGluZm8uaWQpO1xuICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IEFjdGl2ZUF1ZGlvSW5wdXRDaGFuZ2VFdmVudChcbiAgICAgICAgJ2FjdGl2ZWF1ZGlvaW5wdXRjaGFuZ2UnLCB7XG4gICAgICAgICAgYWN0aXZlQXVkaW9JbnB1dFN0cmVhbUlkOiBpbmZvLmRhdGEudmFsdWUsXG4gICAgICAgIH0pO1xuICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KHN0cmVhbUV2ZW50KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGZpcmVMYXlvdXRDaGFuZ2UoaW5mbykge1xuICAgIGlmICghcmVtb3RlU3RyZWFtcy5oYXMoaW5mby5pZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzcGVjaWZpYyByZW1vdGUgc3RyZWFtLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHJlYW0gPSByZW1vdGVTdHJlYW1zLmdldChpbmZvLmlkKTtcbiAgICBjb25zdCBzdHJlYW1FdmVudCA9IG5ldyBMYXlvdXRDaGFuZ2VFdmVudChcbiAgICAgICAgJ2xheW91dGNoYW5nZScsIHtcbiAgICAgICAgICBsYXlvdXQ6IGluZm8uZGF0YS52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgc3RyZWFtLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gdXBkYXRlUmVtb3RlU3RyZWFtKHN0cmVhbUluZm8pIHtcbiAgICBpZiAoIXJlbW90ZVN0cmVhbXMuaGFzKHN0cmVhbUluZm8uaWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgc3BlY2lmaWMgcmVtb3RlIHN0cmVhbS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyZWFtID0gcmVtb3RlU3RyZWFtcy5nZXQoc3RyZWFtSW5mby5pZCk7XG4gICAgc3RyZWFtLnNldHRpbmdzID0gU3RyZWFtVXRpbHNNb2R1bGUuY29udmVydFRvUHVibGljYXRpb25TZXR0aW5ncyhzdHJlYW1JbmZvXG4gICAgICAgIC5tZWRpYSk7XG4gICAgc3RyZWFtLmV4dHJhQ2FwYWJpbGl0aWVzID0gU3RyZWFtVXRpbHNNb2R1bGVcbiAgICAgICAgLmNvbnZlcnRUb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyhcbiAgICAgICAgICAgIHN0cmVhbUluZm8ubWVkaWEpO1xuICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IEV2ZW50TW9kdWxlLk93dEV2ZW50KCd1cGRhdGVkJyk7XG4gICAgc3RyZWFtLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gY3JlYXRlUmVtb3RlU3RyZWFtKHN0cmVhbUluZm8pIHtcbiAgICBpZiAoc3RyZWFtSW5mby50eXBlID09PSAnbWl4ZWQnKSB7XG4gICAgICByZXR1cm4gbmV3IFJlbW90ZU1peGVkU3RyZWFtKHN0cmVhbUluZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYXVkaW9Tb3VyY2VJbmZvOyBsZXQgdmlkZW9Tb3VyY2VJbmZvO1xuICAgICAgY29uc3QgYXVkaW9UcmFjayA9IHN0cmVhbUluZm8ubWVkaWEudHJhY2tzXG4gICAgICAgICAgLmZpbmQoKHQpID0+IHQudHlwZSA9PT0gJ2F1ZGlvJyk7XG4gICAgICBjb25zdCB2aWRlb1RyYWNrID0gc3RyZWFtSW5mby5tZWRpYS50cmFja3NcbiAgICAgICAgICAuZmluZCgodCkgPT4gdC50eXBlID09PSAndmlkZW8nKTtcbiAgICAgIGlmIChhdWRpb1RyYWNrKSB7XG4gICAgICAgIGF1ZGlvU291cmNlSW5mbyA9IGF1ZGlvVHJhY2suc291cmNlO1xuICAgICAgfVxuICAgICAgaWYgKHZpZGVvVHJhY2spIHtcbiAgICAgICAgdmlkZW9Tb3VyY2VJbmZvID0gdmlkZW9UcmFjay5zb3VyY2U7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhU291cmNlSW5mbyA9IHN0cmVhbUluZm8uZGF0YTtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBTdHJlYW1Nb2R1bGUuUmVtb3RlU3RyZWFtKHN0cmVhbUluZm8uaWQsXG4gICAgICAgICAgc3RyZWFtSW5mby5pbmZvLm93bmVyLCB1bmRlZmluZWQsIG5ldyBTdHJlYW1Nb2R1bGUuU3RyZWFtU291cmNlSW5mbyhcbiAgICAgICAgICAgICAgYXVkaW9Tb3VyY2VJbmZvLCB2aWRlb1NvdXJjZUluZm8sIGRhdGFTb3VyY2VJbmZvKSwgc3RyZWFtSW5mby5pbmZvXG4gICAgICAgICAgICAgIC5hdHRyaWJ1dGVzKTtcbiAgICAgIHN0cmVhbS5zZXR0aW5ncyA9IFN0cmVhbVV0aWxzTW9kdWxlLmNvbnZlcnRUb1B1YmxpY2F0aW9uU2V0dGluZ3MoXG4gICAgICAgICAgc3RyZWFtSW5mby5tZWRpYSk7XG4gICAgICBzdHJlYW0uZXh0cmFDYXBhYmlsaXRpZXMgPSBTdHJlYW1VdGlsc01vZHVsZVxuICAgICAgICAgIC5jb252ZXJ0VG9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMoXG4gICAgICAgICAgICAgIHN0cmVhbUluZm8ubWVkaWEpO1xuICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBzZW5kU2lnbmFsaW5nTWVzc2FnZSh0eXBlLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHNpZ25hbGluZy5zZW5kKHR5cGUsIG1lc3NhZ2UpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gY3JlYXRlU2lnbmFsaW5nRm9yQ2hhbm5lbCgpIHtcbiAgICAvLyBDb25zdHJ1Y3QgYW4gc2lnbmFsaW5nIHNlbmRlci9yZWNlaXZlciBmb3IgQ29uZmVyZW5jZVBlZXJDb25uZWN0aW9uLlxuICAgIGNvbnN0IHNpZ25hbGluZ0ZvckNoYW5uZWwgPSBPYmplY3QuY3JlYXRlKEV2ZW50TW9kdWxlLkV2ZW50RGlzcGF0Y2hlcik7XG4gICAgc2lnbmFsaW5nRm9yQ2hhbm5lbC5zZW5kU2lnbmFsaW5nTWVzc2FnZSA9IHNlbmRTaWduYWxpbmdNZXNzYWdlO1xuICAgIHJldHVybiBzaWduYWxpbmdGb3JDaGFubmVsO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gY3JlYXRlUGVlckNvbm5lY3Rpb25DaGFubmVsKHRyYW5zcG9ydCkge1xuICAgIGNvbnN0IHNpZ25hbGluZ0ZvckNoYW5uZWwgPSBjcmVhdGVTaWduYWxpbmdGb3JDaGFubmVsKCk7XG4gICAgY29uc3QgY2hhbm5lbCA9XG4gICAgICAgIG5ldyBDb25mZXJlbmNlUGVlckNvbm5lY3Rpb25DaGFubmVsKGNvbmZpZywgc2lnbmFsaW5nRm9yQ2hhbm5lbCk7XG4gICAgY2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdpZCcsIChtZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgIGlmICghY2hhbm5lbHMuaGFzKG1lc3NhZ2VFdmVudC5tZXNzYWdlKSkge1xuICAgICAgICBjaGFubmVscy5zZXQobWVzc2FnZUV2ZW50Lm1lc3NhZ2UsIGNoYW5uZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0NoYW5uZWwgYWxyZWFkeSBleGlzdHMnLCBtZXNzYWdlRXZlbnQubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNoYW5uZWw7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBjbGVhbigpIHtcbiAgICBwYXJ0aWNpcGFudHMuY2xlYXIoKTtcbiAgICByZW1vdGVTdHJlYW1zLmNsZWFyKCk7XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2luZm8nLCB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICBnZXQ6ICgpID0+IHtcbiAgICAgIGlmICghcm9vbSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgQ29uZmVyZW5jZUluZm8ocm9vbS5pZCwgQXJyYXkuZnJvbShwYXJ0aWNpcGFudHMsICh4KSA9PiB4W1xuICAgICAgICAgIDFdKSwgQXJyYXkuZnJvbShyZW1vdGVTdHJlYW1zLCAoeCkgPT4geFsxXSksIG1lKTtcbiAgICB9LFxuICB9KTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGpvaW5cbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIEpvaW4gYSBjb25mZXJlbmNlLlxuICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPENvbmZlcmVuY2VJbmZvLCBFcnJvcj59IFJldHVybiBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCBjdXJyZW50IGNvbmZlcmVuY2UncyBpbmZvcm1hdGlvbiBpZiBzdWNjZXNzZnVsbHkgam9pbiB0aGUgY29uZmVyZW5jZS4gT3IgcmV0dXJuIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBPd3QuRXJyb3IgaWYgZmFpbGVkIHRvIGpvaW4gdGhlIGNvbmZlcmVuY2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlblN0cmluZyBUb2tlbiBpcyBpc3N1ZWQgYnkgY29uZmVyZW5jZSBzZXJ2ZXIobnV2ZSkuXG4gICAqL1xuICB0aGlzLmpvaW4gPSBmdW5jdGlvbih0b2tlblN0cmluZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB0b2tlbiA9IEpTT04ucGFyc2UoQmFzZTY0LmRlY29kZUJhc2U2NCh0b2tlblN0cmluZykpO1xuICAgICAgY29uc3QgaXNTZWN1cmVkID0gKHRva2VuLnNlY3VyZSA9PT0gdHJ1ZSk7XG4gICAgICBsZXQgaG9zdCA9IHRva2VuLmhvc3Q7XG4gICAgICBpZiAodHlwZW9mIGhvc3QgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKCdJbnZhbGlkIGhvc3QuJykpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaG9zdC5pbmRleE9mKCdodHRwJykgPT09IC0xKSB7XG4gICAgICAgIGhvc3QgPSBpc1NlY3VyZWQgPyAoJ2h0dHBzOi8vJyArIGhvc3QpIDogKCdodHRwOi8vJyArIGhvc3QpO1xuICAgICAgfVxuICAgICAgaWYgKHNpZ25hbGluZ1N0YXRlICE9PSBTaWduYWxpbmdTdGF0ZS5SRUFEWSkge1xuICAgICAgICByZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcignY29ubmVjdGlvbiBzdGF0ZSBpbnZhbGlkJykpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNpZ25hbGluZ1N0YXRlID0gU2lnbmFsaW5nU3RhdGUuQ09OTkVDVElORztcblxuICAgICAgY29uc3Qgc3lzSW5mbyA9IFV0aWxzLnN5c0luZm8oKTtcbiAgICAgIGNvbnN0IGxvZ2luSW5mbyA9IHtcbiAgICAgICAgdG9rZW46IHRva2VuU3RyaW5nLFxuICAgICAgICB1c2VyQWdlbnQ6IHtzZGs6IHN5c0luZm8uc2RrfSxcbiAgICAgICAgcHJvdG9jb2w6IHByb3RvY29sVmVyc2lvbixcbiAgICAgIH07XG5cbiAgICAgIHNpZ25hbGluZy5jb25uZWN0KGhvc3QsIGlzU2VjdXJlZCwgbG9naW5JbmZvKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIHNpZ25hbGluZ1N0YXRlID0gU2lnbmFsaW5nU3RhdGUuQ09OTkVDVEVEO1xuICAgICAgICByb29tID0gcmVzcC5yb29tO1xuICAgICAgICBpZiAocm9vbS5zdHJlYW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHN0IG9mIHJvb20uc3RyZWFtcykge1xuICAgICAgICAgICAgaWYgKHN0LnR5cGUgPT09ICdtaXhlZCcpIHtcbiAgICAgICAgICAgICAgc3Qudmlld3BvcnQgPSBzdC5pbmZvLmxhYmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3RlU3RyZWFtcy5zZXQoc3QuaWQsIGNyZWF0ZVJlbW90ZVN0cmVhbShzdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcC5yb29tICYmIHJlc3Aucm9vbS5wYXJ0aWNpcGFudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvciAoY29uc3QgcCBvZiByZXNwLnJvb20ucGFydGljaXBhbnRzKSB7XG4gICAgICAgICAgICBwYXJ0aWNpcGFudHMuc2V0KHAuaWQsIG5ldyBQYXJ0aWNpcGFudChwLmlkLCBwLnJvbGUsIHAudXNlcikpO1xuICAgICAgICAgICAgaWYgKHAuaWQgPT09IHJlc3AuaWQpIHtcbiAgICAgICAgICAgICAgbWUgPSBwYXJ0aWNpcGFudHMuZ2V0KHAuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwZWVyQ29ubmVjdGlvbkNoYW5uZWwgPSBjcmVhdGVQZWVyQ29ubmVjdGlvbkNoYW5uZWwoKTtcbiAgICAgICAgcGVlckNvbm5lY3Rpb25DaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICAgIHBlZXJDb25uZWN0aW9uQ2hhbm5lbCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHlwZW9mIFdlYlRyYW5zcG9ydCA9PT0gJ2Z1bmN0aW9uJyAmJiB0b2tlbi53ZWJUcmFuc3BvcnRVcmwpIHtcbiAgICAgICAgICBxdWljVHJhbnNwb3J0Q2hhbm5lbCA9IG5ldyBRdWljQ29ubmVjdGlvbihcbiAgICAgICAgICAgICAgdG9rZW4ud2ViVHJhbnNwb3J0VXJsLCByZXNwLndlYlRyYW5zcG9ydFRva2VuLFxuICAgICAgICAgICAgICBjcmVhdGVTaWduYWxpbmdGb3JDaGFubmVsKCksIGNvbmZpZy53ZWJUcmFuc3BvcnRDb25maWd1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25mZXJlbmNlSW5mbyA9IG5ldyBDb25mZXJlbmNlSW5mbyhcbiAgICAgICAgICAgIHJlc3Aucm9vbS5pZCwgQXJyYXkuZnJvbShwYXJ0aWNpcGFudHMudmFsdWVzKCkpLFxuICAgICAgICAgICAgQXJyYXkuZnJvbShyZW1vdGVTdHJlYW1zLnZhbHVlcygpKSwgbWUpO1xuICAgICAgICBpZiAocXVpY1RyYW5zcG9ydENoYW5uZWwpIHtcbiAgICAgICAgICBxdWljVHJhbnNwb3J0Q2hhbm5lbC5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGNvbmZlcmVuY2VJbmZvKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGNvbmZlcmVuY2VJbmZvKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgc2lnbmFsaW5nU3RhdGUgPSBTaWduYWxpbmdTdGF0ZS5SRUFEWTtcbiAgICAgICAgcmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBwdWJsaXNoXG4gICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBQdWJsaXNoIGEgTG9jYWxTdHJlYW0gdG8gY29uZmVyZW5jZSBzZXJ2ZXIuIE90aGVyIHBhcnRpY2lwYW50cyB3aWxsIGJlIGFibGUgdG8gc3Vic2NyaWJlIHRoaXMgc3RyZWFtIHdoZW4gaXQgaXMgc3VjY2Vzc2Z1bGx5IHB1Ymxpc2hlZC5cbiAgICogQHBhcmFtIHtPd3QuQmFzZS5Mb2NhbFN0cmVhbX0gc3RyZWFtIFRoZSBzdHJlYW0gdG8gYmUgcHVibGlzaGVkLlxuICAgKiBAcGFyYW0geyhPd3QuQmFzZS5QdWJsaXNoT3B0aW9uc3xSVENSdHBUcmFuc2NlaXZlcltdKX0gb3B0aW9ucyBJZiBvcHRpb25zIGlzIGEgUHVibGlzaE9wdGlvbnMsIHRoZSBzdHJlYW0gd2lsbCBiZSBwdWJsaXNoZWQgYXMgb3B0aW9ucyBzcGVjaWZpZWQuIElmIG9wdGlvbnMgaXMgYSBsaXN0IG9mIFJUQ1J0cFRyYW5zY2VpdmVycywgZWFjaCB0cmFjayBpbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBoYXZlIGEgY29ycmVzcG9uZGluZyBSVENSdHBUcmFuc2NlaXZlciBoZXJlLCBhbmQgdGhlIHRyYWNrIHdpbGwgYmUgcHVibGlzaGVkIHdpdGggdGhlIFJUQ1J0cFRyYW5zY2VpdmVyIGFzc29jaWF0ZWQgd2l0aCBpdC5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdmlkZW9Db2RlY3MgVmlkZW8gY29kZWMgbmFtZXMgZm9yIHB1Ymxpc2hpbmcuIFZhbGlkIHZhbHVlcyBhcmUgJ1ZQOCcsICdWUDknIGFuZCAnSDI2NCcuIFRoaXMgcGFyYW1ldGVyIG9ubHkgdmFsaWQgd2hlbiB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIFB1Ymxpc2hPcHRpb25zIGFuZCBvcHRpb25zLnZpZGVvIGlzIFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycy4gUHVibGlzaGluZyB3aXRoIFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycyBpcyBhbiBleHBlcmltZW50YWwgZmVhdHVyZS4gVGhpcyBwYXJhbWV0ZXIgaXMgc3ViamVjdCB0byBjaGFuZ2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UHVibGljYXRpb24sIEVycm9yPn0gUmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGggYSBuZXdseSBjcmVhdGVkIFB1YmxpY2F0aW9uIG9uY2Ugc3BlY2lmaWMgc3RyZWFtIGlzIHN1Y2Nlc3NmdWxseSBwdWJsaXNoZWQsIG9yIHJlamVjdGVkIHdpdGggYSBuZXdseSBjcmVhdGVkIEVycm9yIGlmIHN0cmVhbSBpcyBpbnZhbGlkIG9yIG9wdGlvbnMgY2Fubm90IGJlIHNhdGlzZmllZC4gU3VjY2Vzc2Z1bGx5IHB1Ymxpc2hlZCBtZWFucyBQZWVyQ29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZCBhbmQgc2VydmVyIGlzIGFibGUgdG8gcHJvY2VzcyBtZWRpYSBkYXRhLlxuICAgKi9cbiAgdGhpcy5wdWJsaXNoID0gZnVuY3Rpb24oc3RyZWFtLCBvcHRpb25zLCB2aWRlb0NvZGVjcykge1xuICAgIGlmICghKHN0cmVhbSBpbnN0YW5jZW9mIFN0cmVhbU1vZHVsZS5Mb2NhbFN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKCdJbnZhbGlkIHN0cmVhbS4nKSk7XG4gICAgfVxuICAgIGlmIChzdHJlYW0uc291cmNlLmRhdGEpIHtcbiAgICAgIHJldHVybiBxdWljVHJhbnNwb3J0Q2hhbm5lbC5wdWJsaXNoKHN0cmVhbSk7XG4gICAgfVxuICAgIGlmIChwdWJsaXNoQ2hhbm5lbHMuaGFzKHN0cmVhbS5tZWRpYVN0cmVhbS5pZCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdDYW5ub3QgcHVibGlzaCBhIHB1Ymxpc2hlZCBzdHJlYW0uJykpO1xuICAgIH1cbiAgICByZXR1cm4gcGVlckNvbm5lY3Rpb25DaGFubmVsLnB1Ymxpc2goc3RyZWFtLCBvcHRpb25zLCB2aWRlb0NvZGVjcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzdWJzY3JpYmVcbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFN1YnNjcmliZSBhIFJlbW90ZVN0cmVhbSBmcm9tIGNvbmZlcmVuY2Ugc2VydmVyLlxuICAgKiBAcGFyYW0ge093dC5CYXNlLlJlbW90ZVN0cmVhbX0gc3RyZWFtIFRoZSBzdHJlYW0gdG8gYmUgc3Vic2NyaWJlZC5cbiAgICogQHBhcmFtIHtPd3QuQ29uZmVyZW5jZS5TdWJzY3JpYmVPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHN1YnNjcmlwdGlvbi5cbiAgICogQHJldHVybiB7UHJvbWlzZTxTdWJzY3JpcHRpb24sIEVycm9yPn0gUmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGggYSBuZXdseSBjcmVhdGVkIFN1YnNjcmlwdGlvbiBvbmNlIHNwZWNpZmljIHN0cmVhbSBpcyBzdWNjZXNzZnVsbHkgc3Vic2NyaWJlZCwgb3IgcmVqZWN0ZWQgd2l0aCBhIG5ld2x5IGNyZWF0ZWQgRXJyb3IgaWYgc3RyZWFtIGlzIGludmFsaWQgb3Igb3B0aW9ucyBjYW5ub3QgYmUgc2F0aXNmaWVkLiBTdWNjZXNzZnVsbHkgc3Vic2NyaWJlZCBtZWFucyBQZWVyQ29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZCBhbmQgc2VydmVyIHdhcyBzdGFydGVkIHRvIHNlbmQgbWVkaWEgZGF0YS5cbiAgICovXG4gIHRoaXMuc3Vic2NyaWJlID0gZnVuY3Rpb24oc3RyZWFtLCBvcHRpb25zKSB7XG4gICAgaWYgKCEoc3RyZWFtIGluc3RhbmNlb2YgU3RyZWFtTW9kdWxlLlJlbW90ZVN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKCdJbnZhbGlkIHN0cmVhbS4nKSk7XG4gICAgfVxuICAgIGlmIChzdHJlYW0uc291cmNlLmRhdGEpIHtcbiAgICAgIGlmIChzdHJlYW0uc291cmNlLmF1ZGlvIHx8IHN0cmVhbS5zb3VyY2UudmlkZW8pIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCBzb3VyY2UgaW5mby4gQSByZW1vdGUgc3RyZWFtIGlzIGVpdGhlciBhIGRhdGEgc3RyZWFtIG9yICcgK1xuICAgICAgICAgICAgJ2EgbWVkaWEgc3RyZWFtLicpKTtcbiAgICAgIH1cbiAgICAgIGlmIChxdWljVHJhbnNwb3J0Q2hhbm5lbCkge1xuICAgICAgICByZXR1cm4gcXVpY1RyYW5zcG9ydENoYW5uZWwuc3Vic2NyaWJlKHN0cmVhbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignV2ViVHJhbnNwb3J0IGlzIG5vdCBzdXBwb3J0ZWQuJykpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGVlckNvbm5lY3Rpb25DaGFubmVsLnN1YnNjcmliZShzdHJlYW0sIG9wdGlvbnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc2VuZFxuICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgU2VuZCBhIHRleHQgbWVzc2FnZSB0byBhIHBhcnRpY2lwYW50IG9yIGFsbCBwYXJ0aWNpcGFudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIE1lc3NhZ2UgdG8gYmUgc2VudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcnRpY2lwYW50SWQgUmVjZWl2ZXIgb2YgdGhpcyBtZXNzYWdlLiBNZXNzYWdlIHdpbGwgYmUgc2VudCB0byBhbGwgcGFydGljaXBhbnRzIGlmIHBhcnRpY2lwYW50SWQgaXMgdW5kZWZpbmVkLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQsIEVycm9yPn0gUmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdoZW4gY29uZmVyZW5jZSBzZXJ2ZXIgcmVjZWl2ZWQgY2VydGFpbiBtZXNzYWdlLlxuICAgKi9cbiAgdGhpcy5zZW5kID0gZnVuY3Rpb24obWVzc2FnZSwgcGFydGljaXBhbnRJZCkge1xuICAgIGlmIChwYXJ0aWNpcGFudElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcnRpY2lwYW50SWQgPSAnYWxsJztcbiAgICB9XG4gICAgcmV0dXJuIHNlbmRTaWduYWxpbmdNZXNzYWdlKCd0ZXh0Jywge3RvOiBwYXJ0aWNpcGFudElkLCBtZXNzYWdlOiBtZXNzYWdlfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBsZWF2ZVxuICAgKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgTGVhdmUgYSBjb25mZXJlbmNlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQsIEVycm9yPn0gUmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGggdW5kZWZpbmVkIG9uY2UgdGhlIGNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGVkLlxuICAgKi9cbiAgdGhpcy5sZWF2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzaWduYWxpbmcuZGlzY29ubmVjdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgY2xlYW4oKTtcbiAgICAgIHNpZ25hbGluZ1N0YXRlID0gU2lnbmFsaW5nU3RhdGUuUkVBRFk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVTZW5kU3RyZWFtXG4gICAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBDcmVhdGUgYW4gb3V0Z29pbmcgc3RyZWFtLiBPbmx5IGF2YWlsYWJsZSB3aGVuIFdlYlRyYW5zcG9ydCBpcyBzdXBwb3J0ZWQgYnkgdXNlcidzIGJyb3dzZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8U2VuZFN0cmVhbSwgRXJyb3I+fSBSZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBhIFNlbmRTdHJlYW0gb25jZSBzdHJlYW0gaXMgY3JlYXRlZC5cbiAgICovXG4gIGlmIChRdWljQ29ubmVjdGlvbikge1xuICAgIHRoaXMuY3JlYXRlU2VuZFN0cmVhbSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFxdWljVHJhbnNwb3J0Q2hhbm5lbCkge1xuICAgICAgICAvLyBUcnkgdG8gY3JlYXRlIGEgbmV3IG9uZSBvciBjb25zaWRlciBpdCBhcyBjbG9zZWQ/XG4gICAgICAgIHRocm93IG5ldyBDb25mZXJlbmNlRXJyb3IoJ05vIFFVSUMgY29ubmVjdGlvbiBhdmFpbGFibGUuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcXVpY1RyYW5zcG9ydENoYW5uZWwuY3JlYXRlU2VuZFN0cmVhbSgpO1xuICAgIH07XG4gIH1cbn07XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAY2xhc3MgQ29uZmVyZW5jZUVycm9yXG4gKiBAY2xhc3NEZXNjIFRoZSBDb25mZXJlbmNlRXJyb3Igb2JqZWN0IHJlcHJlc2VudHMgYW4gZXJyb3IgaW4gY29uZmVyZW5jZSBtb2RlLlxuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25mZXJlbmNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7Q29uZmVyZW5jZUNsaWVudH0gZnJvbSAnLi9jbGllbnQuanMnO1xuZXhwb3J0IHtTaW9TaWduYWxpbmd9IGZyb20gJy4vc2lnbmFsaW5nLmpzJztcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBDb25mZXJlbmNlSW5mb1xuICogQGNsYXNzRGVzYyBJbmZvcm1hdGlvbiBmb3IgYSBjb25mZXJlbmNlLlxuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25mZXJlbmNlSW5mbyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGlkLCBwYXJ0aWNpcGFudHMsIHJlbW90ZVN0cmVhbXMsIG15SW5mbykge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUluZm9cbiAgICAgKiBAZGVzYyBDb25mZXJlbmNlIElELlxuICAgICAqL1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheTxPd3QuQ29uZmVyZW5jZS5QYXJ0aWNpcGFudD59IHBhcnRpY2lwYW50c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlSW5mb1xuICAgICAqIEBkZXNjIFBhcnRpY2lwYW50cyBpbiB0aGUgY29uZmVyZW5jZS5cbiAgICAgKi9cbiAgICB0aGlzLnBhcnRpY2lwYW50cyA9IHBhcnRpY2lwYW50cztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheTxPd3QuQmFzZS5SZW1vdGVTdHJlYW0+fSByZW1vdGVTdHJlYW1zXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VJbmZvXG4gICAgICogQGRlc2MgU3RyZWFtcyBwdWJsaXNoZWQgYnkgcGFydGljaXBhbnRzLiBJdCBhbHNvIGluY2x1ZGVzIHN0cmVhbXMgcHVibGlzaGVkIGJ5IGN1cnJlbnQgdXNlci5cbiAgICAgKi9cbiAgICB0aGlzLnJlbW90ZVN0cmVhbXMgPSByZW1vdGVTdHJlYW1zO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlBhcnRpY2lwYW50fSBzZWxmXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VJbmZvXG4gICAgICovXG4gICAgdGhpcy5zZWxmID0gbXlJbmZvO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgU3RyZWFtTW9kdWxlIGZyb20gJy4uL2Jhc2Uvc3RyZWFtLmpzJztcbmltcG9ydCAqIGFzIFN0cmVhbVV0aWxzTW9kdWxlIGZyb20gJy4vc3RyZWFtdXRpbHMuanMnO1xuaW1wb3J0IHtPd3RFdmVudH0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlbW90ZU1peGVkU3RyZWFtXG4gKiBAY2xhc3NEZXNjIE1peGVkIHN0cmVhbSBmcm9tIGNvbmZlcmVuY2Ugc2VydmVyLlxuICogRXZlbnRzOlxuICpcbiAqIHwgRXZlbnQgTmFtZSAgICAgICAgICAgICB8IEFyZ3VtZW50IFR5cGUgICAgfCBGaXJlZCB3aGVuICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYWN0aXZlYXVkaW9pbnB1dGNoYW5nZSB8IEV2ZW50ICAgICAgICAgICAgfCBBdWRpbyBhY3RpdmVuZXNzIG9mIGlucHV0IHN0cmVhbSAob2YgdGhlIG1peGVkIHN0cmVhbSkgaXMgY2hhbmdlZC4gfFxuICogfCBsYXlvdXRjaGFuZ2UgICAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFZpZGVvJ3MgbGF5b3V0IGhhcyBiZWVuIGNoYW5nZWQuIEl0IHVzdWFsbHkgaGFwcGVucyB3aGVuIGEgbmV3IHZpZGVvIGlzIG1peGVkIGludG8gdGhlIHRhcmdldCBtaXhlZCBzdHJlYW0gb3IgYW4gZXhpc3RpbmcgdmlkZW8gaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIG1peGVkIHN0cmVhbS4gfFxuICpcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuUmVtb3RlU3RyZWFtXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdGVNaXhlZFN0cmVhbSBleHRlbmRzIFN0cmVhbU1vZHVsZS5SZW1vdGVTdHJlYW0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihpbmZvKSB7XG4gICAgaWYgKGluZm8udHlwZSAhPT0gJ21peGVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTm90IGEgbWl4ZWQgc3RyZWFtJyk7XG4gICAgfVxuICAgIHN1cGVyKGluZm8uaWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbVNvdXJjZUluZm8oXG4gICAgICAgICdtaXhlZCcsICdtaXhlZCcpKTtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSBTdHJlYW1VdGlsc01vZHVsZS5jb252ZXJ0VG9QdWJsaWNhdGlvblNldHRpbmdzKGluZm8ubWVkaWEpO1xuXG4gICAgdGhpcy5leHRyYUNhcGFiaWxpdGllcyA9XG4gICAgICAgIFN0cmVhbVV0aWxzTW9kdWxlLmNvbnZlcnRUb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyhpbmZvLm1lZGlhKTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBBY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnRcbiAqIEBjbGFzc0Rlc2MgQ2xhc3MgQWN0aXZlQXVkaW9JbnB1dENoYW5nZUV2ZW50IHJlcHJlc2VudHMgYW4gYWN0aXZlIGF1ZGlvIGlucHV0IGNoYW5nZSBldmVudC5cbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgQWN0aXZlQXVkaW9JbnB1dENoYW5nZUV2ZW50IGV4dGVuZHMgT3d0RXZlbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpbml0KSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBhY3RpdmVBdWRpb0lucHV0U3RyZWFtSWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQWN0aXZlQXVkaW9JbnB1dENoYW5nZUV2ZW50XG4gICAgICogQGRlc2MgVGhlIElEIG9mIGlucHV0IHN0cmVhbShvZiB0aGUgbWl4ZWQgc3RyZWFtKSB3aG9zZSBhdWRpbyBpcyBhY3RpdmUuXG4gICAgICovXG4gICAgdGhpcy5hY3RpdmVBdWRpb0lucHV0U3RyZWFtSWQgPSBpbml0LmFjdGl2ZUF1ZGlvSW5wdXRTdHJlYW1JZDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBMYXlvdXRDaGFuZ2VFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBMYXlvdXRDaGFuZ2VFdmVudCByZXByZXNlbnRzIGFuIHZpZGVvIGxheW91dCBjaGFuZ2UgZXZlbnQuXG4gKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIExheW91dENoYW5nZUV2ZW50IGV4dGVuZHMgT3d0RXZlbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpbml0KSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7b2JqZWN0fSBsYXlvdXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuTGF5b3V0Q2hhbmdlRXZlbnRcbiAgICAgKiBAZGVzYyBDdXJyZW50IHZpZGVvJ3MgbGF5b3V0LiBJdCdzIGFuIGFycmF5IG9mIG1hcCB3aGljaCBtYXBzIGVhY2ggc3RyZWFtIHRvIGEgcmVnaW9uLlxuICAgICAqL1xuICAgIHRoaXMubGF5b3V0ID0gaW5pdC5sYXlvdXQ7XG4gIH1cbn1cblxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgKiBhcyBFdmVudE1vZHVsZSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBQYXJ0aWNpcGFudFxuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFRoZSBQYXJ0aWNpcGFudCBkZWZpbmVzIGEgcGFydGljaXBhbnQgaW4gYSBjb25mZXJlbmNlLlxuICogRXZlbnRzOlxuICpcbiAqIHwgRXZlbnQgTmFtZSAgICAgIHwgQXJndW1lbnQgVHlwZSAgICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBsZWZ0ICAgICAgICAgICAgfCBPd3QuQmFzZS5Pd3RFdmVudCAgfCBUaGUgcGFydGljaXBhbnQgbGVmdCB0aGUgY29uZmVyZW5jZS4gfFxuICpcbiAqIEBleHRlbmRzIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgUGFydGljaXBhbnQgZXh0ZW5kcyBFdmVudE1vZHVsZS5FdmVudERpc3BhdGNoZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihpZCwgcm9sZSwgdXNlcklkKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50XG4gICAgICogQGRlc2MgVGhlIElEIG9mIHRoZSBwYXJ0aWNpcGFudC4gSXQgdmFyaWVzIHdoZW4gYSBzaW5nbGUgdXNlciBqb2luIGRpZmZlcmVudCBjb25mZXJlbmNlcy5cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBpZCxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHJvbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuUGFydGljaXBhbnRcbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3JvbGUnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHJvbGUsXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSB1c2VySWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuUGFydGljaXBhbnRcbiAgICAgKiBAZGVzYyBUaGUgdXNlciBJRCBvZiB0aGUgcGFydGljaXBhbnQuIEl0IGNhbiBiZSBpbnRlZ3JhdGVkIGludG8gZXhpc3RpbmcgYWNjb3VudCBtYW5hZ2VtZW50IHN5c3RlbS5cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3VzZXJJZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdXNlcklkLFxuICAgIH0pO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MgKi9cbi8qIGdsb2JhbCBQcm9taXNlLCBNYXAsIFdlYlRyYW5zcG9ydCwgVWludDhBcnJheSwgVWludDMyQXJyYXksIFRleHRFbmNvZGVyICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5pbXBvcnQge1B1YmxpY2F0aW9ufSBmcm9tICcuLi9iYXNlL3B1YmxpY2F0aW9uLmpzJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuL3N1YnNjcmlwdGlvbi5qcyc7XG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnLi4vYmFzZS9iYXNlNjQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBRdWljQ29ubmVjdGlvblxuICogQGNsYXNzRGVzYyBBIGNoYW5uZWwgZm9yIGEgUVVJQyB0cmFuc3BvcnQgYmV0d2VlbiBjbGllbnQgYW5kIGNvbmZlcmVuY2VcbiAqIHNlcnZlci5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWljQ29ubmVjdGlvbiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGB0b2tlblN0cmluZ2AgaXMgYSBiYXNlNjQgc3RyaW5nIG9mIHRoZSB0b2tlbiBvYmplY3QuIEl0J3MgaW4gdGhlIHJldHVyblxuICAvLyB2YWx1ZSBvZiBgQ29uZmVyZW5jZUNsaWVudC5qb2luYC5cbiAgY29uc3RydWN0b3IodXJsLCB0b2tlblN0cmluZywgc2lnbmFsaW5nLCB3ZWJUcmFuc3BvcnRPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl90b2tlblN0cmluZyA9IHRva2VuU3RyaW5nO1xuICAgIHRoaXMuX3Rva2VuID0gSlNPTi5wYXJzZShCYXNlNjQuZGVjb2RlQmFzZTY0KHRva2VuU3RyaW5nKSk7XG4gICAgdGhpcy5fc2lnbmFsaW5nID0gc2lnbmFsaW5nO1xuICAgIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcXVpY1N0cmVhbXMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBwdWJsaWNhdGlvbiBvciBzdWJzY3JpcHRpb24gSUQuXG4gICAgdGhpcy5fcXVpY1RyYW5zcG9ydCA9IG5ldyBXZWJUcmFuc3BvcnQodXJsLCB3ZWJUcmFuc3BvcnRPcHRpb25zKTtcbiAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHN1YnNjcmlwdGlvbiBJRC5cbiAgICB0aGlzLl90cmFuc3BvcnRJZCA9IHRoaXMuX3Rva2VuLnRyYW5zcG9ydElkO1xuICAgIHRoaXMuX2luaXRSZWNlaXZlU3RyZWFtUmVhZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIG9uTWVzc2FnZVxuICAgKiBAZGVzYyBSZWNlaXZlZCBhIG1lc3NhZ2UgZnJvbSBjb25mZXJlbmNlIHBvcnRhbC4gRGVmaW5lZCBpbiBjbGllbnQtc2VydmVyXG4gICAqIHByb3RvY29sLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbiB0eXBlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSBNZXNzYWdlIHJlY2VpdmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgb25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgbWVzc2FnZSkge1xuICAgIHN3aXRjaCAobm90aWZpY2F0aW9uKSB7XG4gICAgICBjYXNlICdwcm9ncmVzcyc6XG4gICAgICAgIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3NvYWMnKSB7XG4gICAgICAgICAgdGhpcy5fc29hY0hhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3JlYWR5Jykge1xuICAgICAgICAgIHRoaXMuX3JlYWR5SGFuZGxlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgdGhpcy5fZXJyb3JIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJlYW0nOlxuICAgICAgICB0aGlzLl9vblN0cmVhbUV2ZW50KG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdVbmtub3duIG5vdGlmaWNhdGlvbiBmcm9tIE1DVS4nKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBpbml0KCkge1xuICAgIGF3YWl0IHRoaXMuX2F1dGhlbnRpY2F0ZSh0aGlzLl90b2tlblN0cmluZyk7XG4gIH1cblxuICBhc3luYyBfaW5pdFJlY2VpdmVTdHJlYW1SZWFkZXIoKSB7XG4gICAgY29uc3QgcmVjZWl2ZVN0cmVhbVJlYWRlciA9XG4gICAgICAgIHRoaXMuX3F1aWNUcmFuc3BvcnQuaW5jb21pbmdCaWRpcmVjdGlvbmFsU3RyZWFtcy5nZXRSZWFkZXIoKTtcbiAgICBMb2dnZXIuaW5mbygnUmVhZGVyOiAnICsgcmVjZWl2ZVN0cmVhbVJlYWRlcik7XG4gICAgbGV0IHJlY2VpdmluZ0RvbmUgPSBmYWxzZTtcbiAgICB3aGlsZSAoIXJlY2VpdmluZ0RvbmUpIHtcbiAgICAgIGNvbnN0IHt2YWx1ZTogcmVjZWl2ZVN0cmVhbSwgZG9uZTogcmVhZGluZ1JlY2VpdmVTdHJlYW1zRG9uZX0gPVxuICAgICAgICAgIGF3YWl0IHJlY2VpdmVTdHJlYW1SZWFkZXIucmVhZCgpO1xuICAgICAgTG9nZ2VyLmluZm8oJ05ldyBzdHJlYW0gcmVjZWl2ZWQnKTtcbiAgICAgIGlmIChyZWFkaW5nUmVjZWl2ZVN0cmVhbXNEb25lKSB7XG4gICAgICAgIHJlY2VpdmluZ0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNodW5rUmVhZGVyID0gcmVjZWl2ZVN0cmVhbS5yZWFkYWJsZS5nZXRSZWFkZXIoKTtcbiAgICAgIGNvbnN0IHt2YWx1ZTogdXVpZCwgZG9uZTogcmVhZGluZ0NodW5rc0RvbmV9ID0gYXdhaXQgY2h1bmtSZWFkZXIucmVhZCgpO1xuICAgICAgaWYgKHJlYWRpbmdDaHVua3NEb25lKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcignU3RyZWFtIGNsb3NlZCB1bmV4cGVjdGVkbHkuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh1dWlkLmxlbmd0aCAhPSAxNikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoJ1VuZXhwZWN0ZWQgbGVuZ3RoIGZvciBVVUlELicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjaHVua1JlYWRlci5yZWxlYXNlTG9jaygpO1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uSWQgPSB0aGlzLl91aW50OEFycmF5VG9VdWlkKHV1aWQpO1xuICAgICAgdGhpcy5fcXVpY1N0cmVhbXMuc2V0KHN1YnNjcmlwdGlvbklkLCByZWNlaXZlU3RyZWFtKTtcbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5oYXMoc3Vic2NyaXB0aW9uSWQpKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uSWQsIHJlY2VpdmVTdHJlYW0pO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5nZXQoc3Vic2NyaXB0aW9uSWQpLnJlc29sdmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY3JlYXRlU3Vic2NyaXB0aW9uKGlkLCByZWNlaXZlU3RyZWFtKSB7XG4gICAgLy8gVE9ETzogSW5jb21wbGV0ZSBzdWJzY3JpcHRpb24uXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbihpZCwgKCkgPT4ge1xuICAgICAgcmVjZWl2ZVN0cmVhbS5hYm9ydFJlYWRpbmcoKTtcbiAgICB9KTtcbiAgICBzdWJzY3JpcHRpb24uc3RyZWFtID0gcmVjZWl2ZVN0cmVhbTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICB9XG5cbiAgYXN5bmMgX2F1dGhlbnRpY2F0ZSh0b2tlbikge1xuICAgIGF3YWl0IHRoaXMuX3F1aWNUcmFuc3BvcnQucmVhZHk7XG4gICAgY29uc3QgcXVpY1N0cmVhbSA9IGF3YWl0IHRoaXMuX3F1aWNUcmFuc3BvcnQuY3JlYXRlQmlkaXJlY3Rpb25hbFN0cmVhbSgpO1xuICAgIGNvbnN0IGNodW5rUmVhZGVyID0gcXVpY1N0cmVhbS5yZWFkYWJsZS5nZXRSZWFkZXIoKTtcbiAgICBjb25zdCB3cml0ZXIgPSBxdWljU3RyZWFtLndyaXRhYmxlLmdldFdyaXRlcigpO1xuICAgIGF3YWl0IHdyaXRlci5yZWFkeTtcbiAgICAvLyAxMjggYml0IG9mIHplcm8gaW5kaWNhdGVzIHRoaXMgaXMgYSBzdHJlYW0gZm9yIHNpZ25hbGluZy5cbiAgICB3cml0ZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoMTYpKTtcbiAgICAvLyBTZW5kIHRva2VuIGFzIGRlc2NyaWJlZCBpblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdlYnJ0Yy10b29sa2l0L293dC1zZXJ2ZXIvYmxvYi8yMGU4YWFkMjE2Y2M0NDYwOTVmNjNjNDA5MzM5YzM0YzdlZTc3MGVlL2RvYy9kZXNpZ24vcXVpYy10cmFuc3BvcnQtcGF5bG9hZC1mb3JtYXQubWQuXG4gICAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgIGNvbnN0IGVuY29kZWRUb2tlbiA9IGVuY29kZXIuZW5jb2RlKHRva2VuKTtcbiAgICB3cml0ZXIud3JpdGUoVWludDMyQXJyYXkub2YoZW5jb2RlZFRva2VuLmxlbmd0aCkpO1xuICAgIHdyaXRlci53cml0ZShlbmNvZGVkVG9rZW4pO1xuICAgIC8vIFNlcnZlciByZXR1cm5zIHRyYW5zcG9ydCBJRCBhcyBhbiBhY2suIElnbm9yZSBpdCBoZXJlLlxuICAgIGF3YWl0IGNodW5rUmVhZGVyLnJlYWQoKTtcbiAgICBMb2dnZXIuaW5mbygnQXV0aGVudGljYXRpb24gc3VjY2Vzcy4nKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVNlbmRTdHJlYW0oKSB7XG4gICAgYXdhaXQgdGhpcy5fcXVpY1RyYW5zcG9ydC5yZWFkeTtcbiAgICBjb25zdCBxdWljU3RyZWFtID0gYXdhaXQgdGhpcy5fcXVpY1RyYW5zcG9ydC5jcmVhdGVCaWRpcmVjdGlvbmFsU3RyZWFtKCk7XG4gICAgcmV0dXJuIHF1aWNTdHJlYW07XG4gIH1cblxuICBhc3luYyBjcmVhdGVTZW5kU3RyZWFtMShzZXNzaW9uSWQpIHtcbiAgICBMb2dnZXIuaW5mbygnQ3JlYXRlIHN0cmVhbS4nKTtcbiAgICBhd2FpdCB0aGlzLl9xdWljVHJhbnNwb3J0LnJlYWR5O1xuICAgIC8vIFRPRE86IFBvdGVudGlhbCBmYWlsdXJlIGJlY2F1c2Ugb2YgcHVibGljYXRpb24gc3RyZWFtIGlzIGNyZWF0ZWQgZmFzdGVyXG4gICAgLy8gdGhhbiBzaWduYWxpbmcgc3RyZWFtKGNyZWF0ZWQgYnkgdGhlIDFzdCBjYWxsIHRvIGluaXRpYXRlUHVibGljYXRpb24pLlxuICAgIGNvbnN0IHB1YmxpY2F0aW9uSWQgPSBhd2FpdCB0aGlzLl9pbml0aWF0ZVB1YmxpY2F0aW9uKCk7XG4gICAgY29uc3QgcXVpY1N0cmVhbSA9IGF3YWl0IHRoaXMuX3F1aWNUcmFuc3BvcnQuY3JlYXRlU2VuZFN0cmVhbSgpO1xuICAgIGNvbnN0IHdyaXRlciA9IHF1aWNTdHJlYW0ud3JpdGFibGUuZ2V0V3JpdGVyKCk7XG4gICAgYXdhaXQgd3JpdGVyLnJlYWR5O1xuICAgIHdyaXRlci53cml0ZSh0aGlzLl91dWlkVG9VaW50OEFycmF5KHB1YmxpY2F0aW9uSWQpKTtcbiAgICB3cml0ZXIucmVsZWFzZUxvY2soKTtcbiAgICB0aGlzLl9xdWljU3RyZWFtcy5zZXQocHVibGljYXRpb25JZCwgcXVpY1N0cmVhbSk7XG4gICAgcmV0dXJuIHF1aWNTdHJlYW07XG4gIH1cblxuICBhc3luYyBwdWJsaXNoKHN0cmVhbSkge1xuICAgIC8vIFRPRE86IEF2b2lkIGEgc3RyZWFtIHRvIGJlIHB1Ymxpc2hlZCB0d2ljZS4gVGhlIGZpcnN0IDE2IGJpdCBkYXRhIHNlbmQgdG9cbiAgICAvLyBzZXJ2ZXIgbXVzdCBiZSBpdCdzIHB1YmxpY2F0aW9uIElELlxuICAgIC8vIFRPRE86IFBvdGVudGlhbCBmYWlsdXJlIGJlY2F1c2Ugb2YgcHVibGljYXRpb24gc3RyZWFtIGlzIGNyZWF0ZWQgZmFzdGVyXG4gICAgLy8gdGhhbiBzaWduYWxpbmcgc3RyZWFtKGNyZWF0ZWQgYnkgdGhlIDFzdCBjYWxsIHRvIGluaXRpYXRlUHVibGljYXRpb24pLlxuICAgIGNvbnN0IHB1YmxpY2F0aW9uSWQgPSBhd2FpdCB0aGlzLl9pbml0aWF0ZVB1YmxpY2F0aW9uKCk7XG4gICAgY29uc3QgcXVpY1N0cmVhbSA9IHN0cmVhbS5zdHJlYW07XG4gICAgY29uc3Qgd3JpdGVyID0gcXVpY1N0cmVhbS53cml0YWJsZS5nZXRXcml0ZXIoKTtcbiAgICBhd2FpdCB3cml0ZXIucmVhZHk7XG4gICAgd3JpdGVyLndyaXRlKHRoaXMuX3V1aWRUb1VpbnQ4QXJyYXkocHVibGljYXRpb25JZCkpO1xuICAgIHdyaXRlci5yZWxlYXNlTG9jaygpO1xuICAgIExvZ2dlci5pbmZvKCdwdWJsaXNoIGlkJyk7XG4gICAgdGhpcy5fcXVpY1N0cmVhbXMuc2V0KHB1YmxpY2F0aW9uSWQsIHF1aWNTdHJlYW0pO1xuICAgIGNvbnN0IHB1YmxpY2F0aW9uID0gbmV3IFB1YmxpY2F0aW9uKHB1YmxpY2F0aW9uSWQsICgpID0+IHtcbiAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgndW5wdWJsaXNoJywge2lkOiBwdWJsaWNhdGlvbn0pXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBMb2dnZXIud2FybmluZygnTUNVIHJldHVybnMgbmVnYXRpdmUgYWNrIGZvciB1bnB1Ymxpc2hpbmcsICcgKyBlKTtcbiAgICAgICAgICB9KTtcbiAgICB9IC8qIFRPRE86IGdldFN0YXRzLCBtdXRlLCB1bm11dGUgaXMgbm90IGltcGxlbWVudGVkICovKTtcbiAgICByZXR1cm4gcHVibGljYXRpb247XG4gIH1cblxuICBoYXNDb250ZW50U2Vzc2lvbklkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1aWNTdHJlYW1zLmhhcyhpZCk7XG4gIH1cblxuICBfdXVpZFRvVWludDhBcnJheSh1dWlkU3RyaW5nKSB7XG4gICAgaWYgKHV1aWRTdHJpbmcubGVuZ3RoICE9IDMyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvcnJlY3QgVVVJRC4nKTtcbiAgICB9XG4gICAgY29uc3QgdXVpZEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgdXVpZEFycmF5W2ldID0gcGFyc2VJbnQodXVpZFN0cmluZy5zdWJzdHJpbmcoaSAqIDIsIGkgKiAyICsgMiksIDE2KTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWRBcnJheTtcbiAgfVxuXG4gIF91aW50OEFycmF5VG9VdWlkKHV1aWRCeXRlcykge1xuICAgIGxldCBzID0gJyc7XG4gICAgZm9yIChjb25zdCBoZXggb2YgdXVpZEJ5dGVzKSB7XG4gICAgICBjb25zdCBzdHIgPSBoZXgudG9TdHJpbmcoMTYpO1xuICAgICAgcyArPSBzdHIucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICBzdWJzY3JpYmUoc3RyZWFtKSB7XG4gICAgY29uc3QgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3NpZ25hbGluZ1xuICAgICAgICAgIC5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc3Vic2NyaWJlJywge1xuICAgICAgICAgICAgbWVkaWE6IG51bGwsXG4gICAgICAgICAgICBkYXRhOiB7ZnJvbTogc3RyZWFtLmlkfSxcbiAgICAgICAgICAgIHRyYW5zcG9ydDoge3R5cGU6ICdxdWljJywgaWQ6IHRoaXMuX3RyYW5zcG9ydElkfSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcXVpY1N0cmVhbXMuaGFzKGRhdGEuaWQpKSB7XG4gICAgICAgICAgICAgIC8vIFFVSUMgc3RyZWFtIGNyZWF0ZWQgYmVmb3JlIHNpZ25hbGluZyByZXR1cm5zLlxuICAgICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLl9jcmVhdGVTdWJzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICBkYXRhLmlkLCB0aGlzLl9xdWljU3RyZWFtcy5nZXQoZGF0YS5pZCkpO1xuICAgICAgICAgICAgICByZXNvbHZlKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9xdWljU3RyZWFtcy5zZXQoZGF0YS5pZCwgbnVsbCk7XG4gICAgICAgICAgICAgIC8vIFFVSUMgc3RyZWFtIGlzIG5vdCBjcmVhdGVkIHlldCwgcmVzb2x2ZSBwcm9taXNlIGFmdGVyIGdldHRpbmdcbiAgICAgICAgICAgICAgLy8gUVVJQyBzdHJlYW0uXG4gICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzLnNldChcbiAgICAgICAgICAgICAgICAgIGRhdGEuaWQsIHtyZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwO1xuICB9XG5cbiAgX3JlYWRBbmRQcmludCgpIHtcbiAgICB0aGlzLl9xdWljU3RyZWFtc1swXS53YWl0Rm9yUmVhZGFibGUoNSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fcXVpY1N0cmVhbXNbMF0ucmVhZEJ1ZmZlcmVkQW1vdW50KTtcbiAgICAgIHRoaXMuX3F1aWNTdHJlYW1zWzBdLnJlYWRJbnRvKGRhdGEpO1xuICAgICAgTG9nZ2VyLmluZm8oJ1JlYWQgZGF0YTogJyArIGRhdGEpO1xuICAgICAgdGhpcy5fcmVhZEFuZFByaW50KCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBfaW5pdGlhdGVQdWJsaWNhdGlvbigpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdwdWJsaXNoJywge1xuICAgICAgbWVkaWE6IG51bGwsXG4gICAgICBkYXRhOiB0cnVlLFxuICAgICAgdHJhbnNwb3J0OiB7dHlwZTogJ3F1aWMnLCBpZDogdGhpcy5fdHJhbnNwb3J0SWR9LFxuICAgIH0pO1xuICAgIGlmICh0aGlzLl90cmFuc3BvcnRJZCAhPT0gZGF0YS50cmFuc3BvcnRJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmFuc3BvcnQgSUQgbm90IG1hdGNoLicpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5pZDtcbiAgfVxuXG4gIF9yZWFkeUhhbmRsZXIoKSB7XG4gICAgLy8gUmVhZHkgbWVzc2FnZSBmcm9tIHNlcnZlciBpcyB1c2VsZXNzIGZvciBRdWljU3RyZWFtIHNpbmNlIFF1aWNTdHJlYW0gaGFzXG4gICAgLy8gaXRzIG93biBzdGF0dXMuIERvIG5vdGhpbmcgaGVyZS5cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vKiBnbG9iYWwgaW8sIFByb21pc2UsIHNldFRpbWVvdXQsIGNsZWFyVGltZW91dCAqL1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQgKiBhcyBFdmVudE1vZHVsZSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7Q29uZmVyZW5jZUVycm9yfSBmcm9tICcuL2Vycm9yLmpzJztcbmltcG9ydCB7QmFzZTY0fSBmcm9tICcuLi9iYXNlL2Jhc2U2NC5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVjb25uZWN0aW9uQXR0ZW1wdHMgPSAxMDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHN0YXR1cywgZGF0YSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGlmIChzdGF0dXMgPT09ICdvaycgfHwgc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICByZXNvbHZlKGRhdGEpO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIHJlamVjdChkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICBMb2dnZXIuZXJyb3IoJ01DVSByZXR1cm5zIHVua25vd24gYWNrLicpO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFNpb1NpZ25hbGluZ1xuICogQGNsYXNzZGVzYyBTb2NrZXQuSU8gc2lnbmFsaW5nIGNoYW5uZWwgZm9yIENvbmZlcmVuY2VDbGllbnQuIEl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBkaXJlY3RseSBhY2Nlc3MgdGhpcyBjbGFzcy5cbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFNpb1NpZ25hbGluZyBleHRlbmRzIEV2ZW50TW9kdWxlLkV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc29ja2V0ID0gbnVsbDtcbiAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xuICAgIHRoaXMuX3JlY29ubmVjdFRpbWVzID0gMDtcbiAgICB0aGlzLl9yZWNvbm5lY3Rpb25UaWNrZXQgPSBudWxsO1xuICAgIHRoaXMuX3JlZnJlc2hSZWNvbm5lY3Rpb25UaWNrZXQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjb25uZWN0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBDb25uZWN0IHRvIGEgcG9ydGFsLlxuICAgKiBAbWVtYmVyb2YgT21zLkNvbmZlcmVuY2UuU2lvU2lnbmFsaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LCBFcnJvcj59IFJldHVybiBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCB0aGUgZGF0YSByZXR1cm5lZCBieSBwb3J0YWwgaWYgc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbi4gT3IgcmV0dXJuIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBPbXMuRXJyb3IgaWYgZmFpbGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdCBIb3N0IG9mIHRoZSBwb3J0YWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpc1NlY3VyZWQgSXMgc2VjdXJlIGNvbm5lY3Rpb24gb3Igbm90LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9naW5JbmZvIEluZm9ybWF0aW9uIHJlcXVpcmVkIGZvciBsb2dnaW5nIGluLlxuICAgKiBAcHJpdmF0ZS5cbiAgICovXG4gIGNvbm5lY3QoaG9zdCwgaXNTZWN1cmVkLCBsb2dpbkluZm8pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgJ3JlY29ubmVjdGlvbic6IHRydWUsXG4gICAgICAgICdyZWNvbm5lY3Rpb25BdHRlbXB0cyc6IHJlY29ubmVjdGlvbkF0dGVtcHRzLFxuICAgICAgICAnZm9yY2UgbmV3IGNvbm5lY3Rpb24nOiB0cnVlLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX3NvY2tldCA9IGlvKGhvc3QsIG9wdHMpO1xuICAgICAgWydwYXJ0aWNpcGFudCcsICd0ZXh0JywgJ3N0cmVhbScsICdwcm9ncmVzcyddLmZvckVhY2goKFxuICAgICAgICAgIG5vdGlmaWNhdGlvbikgPT4ge1xuICAgICAgICB0aGlzLl9zb2NrZXQub24obm90aWZpY2F0aW9uLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRNb2R1bGUuTWVzc2FnZUV2ZW50KCdkYXRhJywge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICBub3RpZmljYXRpb246IG5vdGlmaWNhdGlvbixcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc29ja2V0Lm9uKCdyZWNvbm5lY3RpbmcnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdFRpbWVzKys7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NvY2tldC5vbigncmVjb25uZWN0X2ZhaWxlZCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdFRpbWVzID49IHJlY29ubmVjdGlvbkF0dGVtcHRzKSB7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnZGlzY29ubmVjdCcpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9zb2NrZXQub24oJ2Nvbm5lY3RfZXJyb3InLCAoZSkgPT4ge1xuICAgICAgICByZWplY3QoYGNvbm5lY3RfZXJyb3I6JHtob3N0fWApO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zb2NrZXQub24oJ2Ryb3AnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdFRpbWVzID0gcmVjb25uZWN0aW9uQXR0ZW1wdHM7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2xlYXJSZWNvbm5lY3Rpb25UYXNrKCk7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3RUaW1lcyA+PSByZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnZGlzY29ubmVjdCcpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9zb2NrZXQuZW1pdCgnbG9naW4nLCBsb2dpbkluZm8sIChzdGF0dXMsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ29rJykge1xuICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9vblJlY29ubmVjdGlvblRpY2tldChkYXRhLnJlY29ubmVjdGlvblRpY2tldCk7XG4gICAgICAgICAgdGhpcy5fc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gcmUtbG9naW4gd2l0aCByZWNvbm5lY3Rpb24gdGlja2V0LlxuICAgICAgICAgICAgdGhpcy5fc29ja2V0LmVtaXQoJ3JlbG9naW4nLCB0aGlzLl9yZWNvbm5lY3Rpb25UaWNrZXQsIChzdGF0dXMsXG4gICAgICAgICAgICAgICAgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0VGltZXMgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX29uUmVjb25uZWN0aW9uVGlja2V0KGRhdGEpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ2Rpc2Nvbm5lY3QnKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZVJlc3BvbnNlKHN0YXR1cywgZGF0YSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBkaXNjb25uZWN0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBEaXNjb25uZWN0IGZyb20gYSBwb3J0YWwuXG4gICAqIEBtZW1iZXJvZiBPbXMuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QsIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIHRoZSBkYXRhIHJldHVybmVkIGJ5IHBvcnRhbCBpZiBzdWNjZXNzZnVsbHkgZGlzY29ubmVjdGVkLiBPciByZXR1cm4gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggYSBuZXdseSBjcmVhdGVkIE9tcy5FcnJvciBpZiBmYWlsZWQuXG4gICAqIEBwcml2YXRlLlxuICAgKi9cbiAgZGlzY29ubmVjdCgpIHtcbiAgICBpZiAoIXRoaXMuX3NvY2tldCB8fCB0aGlzLl9zb2NrZXQuZGlzY29ubmVjdGVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnUG9ydGFsIGlzIG5vdCBjb25uZWN0ZWQuJykpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fc29ja2V0LmVtaXQoJ2xvZ291dCcsIChzdGF0dXMsIGRhdGEpID0+IHtcbiAgICAgICAgLy8gTWF4aW1pemUgdGhlIHJlY29ubmVjdCB0aW1lcyB0byBkaXNhYmxlIHJlY29ubmVjdGlvbi5cbiAgICAgICAgdGhpcy5fcmVjb25uZWN0VGltZXMgPSByZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgICAgICAgdGhpcy5fc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaGFuZGxlUmVzcG9uc2Uoc3RhdHVzLCBkYXRhLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHNlbmRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFNlbmQgZGF0YSB0byBwb3J0YWwuXG4gICAqIEBtZW1iZXJvZiBPbXMuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QsIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIHRoZSBkYXRhIHJldHVybmVkIGJ5IHBvcnRhbC4gT3IgcmV0dXJuIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBPbXMuRXJyb3IgaWYgZmFpbGVkIHRvIHNlbmQgdGhlIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0TmFtZSBOYW1lIGRlZmluZWQgaW4gY2xpZW50LXNlcnZlciBwcm90b2NvbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3REYXRhIERhdGEgZm9ybWF0IGlzIGRlZmluZWQgaW4gY2xpZW50LXNlcnZlciBwcm90b2NvbC5cbiAgICogQHByaXZhdGUuXG4gICAqL1xuICBzZW5kKHJlcXVlc3ROYW1lLCByZXF1ZXN0RGF0YSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9zb2NrZXQuZW1pdChyZXF1ZXN0TmFtZSwgcmVxdWVzdERhdGEsIChzdGF0dXMsIGRhdGEpID0+IHtcbiAgICAgICAgaGFuZGxlUmVzcG9uc2Uoc3RhdHVzLCBkYXRhLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF9vblJlY29ubmVjdGlvblRpY2tldFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgUGFyc2UgcmVjb25uZWN0aW9uIHRpY2tldCBhbmQgc2NoZWR1bGUgdGlja2V0IHJlZnJlc2hpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aWNrZXRTdHJpbmcgUmVjb25uZWN0aW9uIHRpY2tldC5cbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlNpb1NpZ25hbGluZ1xuICAgKiBAcHJpdmF0ZS5cbiAgICovXG4gIF9vblJlY29ubmVjdGlvblRpY2tldCh0aWNrZXRTdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvbm5lY3Rpb25UaWNrZXQgPSB0aWNrZXRTdHJpbmc7XG4gICAgY29uc3QgdGlja2V0ID0gSlNPTi5wYXJzZShCYXNlNjQuZGVjb2RlQmFzZTY0KHRpY2tldFN0cmluZykpO1xuICAgIC8vIFJlZnJlc2ggdGlja2V0IDEgbWluIG9yIDEwIHNlY29uZHMgYmVmb3JlIGl0IGV4cGlyZXMuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBtaWxsaXNlY29uZHNJbk9uZU1pbnV0ZSA9IDYwICogMTAwMDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHNJblRlblNlY29uZHMgPSAxMCAqIDEwMDA7XG4gICAgaWYgKHRpY2tldC5ub3RBZnRlciA8PSBub3cgLSBtaWxsaXNlY29uZHNJblRlblNlY29uZHMpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdSZWNvbm5lY3Rpb24gdGlja2V0IGV4cGlyZXMgdG9vIHNvb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByZWZyZXNoQWZ0ZXIgPSB0aWNrZXQubm90QWZ0ZXIgLSBub3cgLSBtaWxsaXNlY29uZHNJbk9uZU1pbnV0ZTtcbiAgICBpZiAocmVmcmVzaEFmdGVyIDwgMCkge1xuICAgICAgcmVmcmVzaEFmdGVyID0gdGlja2V0Lm5vdEFmdGVyIC0gbm93IC0gbWlsbGlzZWNvbmRzSW5UZW5TZWNvbmRzO1xuICAgIH1cbiAgICB0aGlzLl9jbGVhclJlY29ubmVjdGlvblRhc2soKTtcbiAgICB0aGlzLl9yZWZyZXNoUmVjb25uZWN0aW9uVGlja2V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zb2NrZXQuZW1pdCgncmVmcmVzaFJlY29ubmVjdGlvblRpY2tldCcsIChzdGF0dXMsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gJ29rJykge1xuICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdGYWlsZWQgdG8gcmVmcmVzaCByZWNvbm5lY3Rpb24gdGlja2V0LicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vblJlY29ubmVjdGlvblRpY2tldChkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0sIHJlZnJlc2hBZnRlcik7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF9jbGVhclJlY29ubmVjdGlvblRhc2tcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFN0b3AgdHJ5aW5nIHRvIHJlZnJlc2ggcmVjb25uZWN0aW9uIHRpY2tldC5cbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlNpb1NpZ25hbGluZ1xuICAgKiBAcHJpdmF0ZS5cbiAgICovXG4gIF9jbGVhclJlY29ubmVjdGlvblRhc2soKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3JlZnJlc2hSZWNvbm5lY3Rpb25UaWNrZXQpO1xuICAgIHRoaXMuX3JlZnJlc2hSZWNvbm5lY3Rpb25UaWNrZXQgPSBudWxsO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8vIFRoaXMgZmlsZSBkb2Vzbid0IGhhdmUgcHVibGljIEFQSXMuXG4vKiBlc2xpbnQtZGlzYWJsZSB2YWxpZC1qc2RvYyAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIFB1YmxpY2F0aW9uTW9kdWxlIGZyb20gJy4uL2Jhc2UvcHVibGljYXRpb24uanMnO1xuaW1wb3J0ICogYXMgTWVkaWFGb3JtYXRNb2R1bGUgZnJvbSAnLi4vYmFzZS9tZWRpYWZvcm1hdC5qcyc7XG5pbXBvcnQgKiBhcyBDb2RlY01vZHVsZSBmcm9tICcuLi9iYXNlL2NvZGVjLmpzJztcbmltcG9ydCAqIGFzIFN1YnNjcmlwdGlvbk1vZHVsZSBmcm9tICcuL3N1YnNjcmlwdGlvbi5qcyc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcblxuLyoqXG4gKiBAZnVuY3Rpb24gZXh0cmFjdEJpdHJhdGVNdWx0aXBsaWVyXG4gKiBAZGVzYyBFeHRyYWN0IGJpdHJhdGUgbXVsdGlwbGllciBmcm9tIGEgc3RyaW5nIGxpa2UgXCJ4MC4yXCIuXG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdCwgRXJyb3I+fSBUaGUgZmxvYXQgbnVtYmVyIGFmdGVyIFwieFwiLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdEJpdHJhdGVNdWx0aXBsaWVyKGlucHV0KSB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnIHx8ICFpbnB1dC5zdGFydHNXaXRoKCd4JykpIHtcbiAgICBMb2dnZXIud2FybmluZygnSW52YWxpZCBiaXRyYXRlIG11bHRpcGxpZXIgaW5wdXQuJyk7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KGlucHV0LnJlcGxhY2UoL154LywgJycpKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmZ1bmN0aW9uIHNvcnROdW1iZXJzKHgsIHkpIHtcbiAgcmV0dXJuIHggLSB5O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gc29ydFJlc29sdXRpb25zKHgsIHkpIHtcbiAgaWYgKHgud2lkdGggIT09IHkud2lkdGgpIHtcbiAgICByZXR1cm4geC53aWR0aCAtIHkud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHguaGVpZ2h0IC0geS5oZWlnaHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAZnVuY3Rpb24gY29udmVydFRvUHVibGljYXRpb25TZXR0aW5nc1xuICogQGRlc2MgQ29udmVydCBtZWRpYUluZm8gcmVjZWl2ZWQgZnJvbSBzZXJ2ZXIgdG8gUHVibGljYXRpb25TZXR0aW5ncy5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9QdWJsaWNhdGlvblNldHRpbmdzKG1lZGlhSW5mbykge1xuICBjb25zdCBhdWRpbyA9IFtdO1xuICBjb25zdCB2aWRlbyA9IFtdO1xuICBsZXQgYXVkaW9Db2RlYztcbiAgbGV0IHZpZGVvQ29kZWM7XG4gIGxldCByZXNvbHV0aW9uO1xuICBsZXQgZnJhbWVyYXRlO1xuICBsZXQgYml0cmF0ZTtcbiAgbGV0IGtleUZyYW1lSW50ZXJ2YWw7XG4gIGxldCByaWQ7XG4gIGZvciAoY29uc3QgdHJhY2sgb2YgbWVkaWFJbmZvLnRyYWNrcykge1xuICAgIGlmICh0cmFjay50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICBpZiAodHJhY2suZm9ybWF0KSB7XG4gICAgICAgIGF1ZGlvQ29kZWMgPSBuZXcgQ29kZWNNb2R1bGUuQXVkaW9Db2RlY1BhcmFtZXRlcnMoXG4gICAgICAgICAgICB0cmFjay5mb3JtYXQuY29kZWMsIHRyYWNrLmZvcm1hdC5jaGFubmVsTnVtLFxuICAgICAgICAgICAgdHJhY2suZm9ybWF0LnNhbXBsZVJhdGUpO1xuICAgICAgfVxuICAgICAgY29uc3QgYXVkaW9QdWJsaWNhdGlvblNldHRpbmdzID1cbiAgICAgICAgICBuZXcgUHVibGljYXRpb25Nb2R1bGUuQXVkaW9QdWJsaWNhdGlvblNldHRpbmdzKGF1ZGlvQ29kZWMpO1xuICAgICAgYXVkaW9QdWJsaWNhdGlvblNldHRpbmdzLl90cmFja0lkID0gdHJhY2suaWQ7XG4gICAgICBhdWRpby5wdXNoKGF1ZGlvUHVibGljYXRpb25TZXR0aW5ncyk7XG4gICAgfSBlbHNlIGlmICh0cmFjay50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICBpZiAodHJhY2suZm9ybWF0KSB7XG4gICAgICAgIHZpZGVvQ29kZWMgPSBuZXcgQ29kZWNNb2R1bGUuVmlkZW9Db2RlY1BhcmFtZXRlcnMoXG4gICAgICAgICAgICB0cmFjay5mb3JtYXQuY29kZWMsIHRyYWNrLmZvcm1hdC5wcm9maWxlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFjay5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICh0cmFjay5wYXJhbWV0ZXJzLnJlc29sdXRpb24pIHtcbiAgICAgICAgICByZXNvbHV0aW9uID0gbmV3IE1lZGlhRm9ybWF0TW9kdWxlLlJlc29sdXRpb24oXG4gICAgICAgICAgICAgIHRyYWNrLnBhcmFtZXRlcnMucmVzb2x1dGlvbi53aWR0aCxcbiAgICAgICAgICAgICAgdHJhY2sucGFyYW1ldGVycy5yZXNvbHV0aW9uLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZnJhbWVyYXRlID0gdHJhY2sucGFyYW1ldGVycy5mcmFtZXJhdGU7XG4gICAgICAgIGJpdHJhdGUgPSB0cmFjay5wYXJhbWV0ZXJzLmJpdHJhdGUgKiAxMDAwO1xuICAgICAgICBrZXlGcmFtZUludGVydmFsID0gdHJhY2sucGFyYW1ldGVycy5rZXlGcmFtZUludGVydmFsO1xuICAgICAgfVxuICAgICAgaWYgKHRyYWNrLnJpZCkge1xuICAgICAgICByaWQgPSB0cmFjay5yaWQ7XG4gICAgICB9XG4gICAgICBjb25zdCB2aWRlb1B1YmxpY2F0aW9uU2V0dGluZ3MgPVxuICAgICAgICAgIG5ldyBQdWJsaWNhdGlvbk1vZHVsZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3MoXG4gICAgICAgICAgICAgIHZpZGVvQ29kZWMsIHJlc29sdXRpb24sIGZyYW1lcmF0ZSwgYml0cmF0ZSxcbiAgICAgICAgICAgICAga2V5RnJhbWVJbnRlcnZhbCwgcmlkKTtcbiAgICAgIHZpZGVvUHVibGljYXRpb25TZXR0aW5ncy5fdHJhY2tJZCA9IHRyYWNrLmlkO1xuICAgICAgdmlkZW8ucHVzaCh2aWRlb1B1YmxpY2F0aW9uU2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgUHVibGljYXRpb25Nb2R1bGUuUHVibGljYXRpb25TZXR0aW5ncyhhdWRpbywgdmlkZW8pO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvbiBjb252ZXJ0VG9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAqIEBkZXNjIENvbnZlcnQgbWVkaWFJbmZvIHJlY2VpdmVkIGZyb20gc2VydmVyIHRvIFN1YnNjcmlwdGlvbkNhcGFiaWxpdGllcy5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMobWVkaWFJbmZvKSB7XG4gIGxldCBhdWRpbztcbiAgbGV0IHZpZGVvO1xuXG4gIGZvciAoY29uc3QgdHJhY2sgb2YgbWVkaWFJbmZvLnRyYWNrcykge1xuICAgIGlmICh0cmFjay50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICBjb25zdCBhdWRpb0NvZGVjcyA9IFtdO1xuICAgICAgaWYgKHRyYWNrLm9wdGlvbmFsICYmIHRyYWNrLm9wdGlvbmFsLmZvcm1hdCkge1xuICAgICAgICBmb3IgKGNvbnN0IGF1ZGlvQ29kZWNJbmZvIG9mIHRyYWNrLm9wdGlvbmFsLmZvcm1hdCkge1xuICAgICAgICAgIGNvbnN0IGF1ZGlvQ29kZWMgPSBuZXcgQ29kZWNNb2R1bGUuQXVkaW9Db2RlY1BhcmFtZXRlcnMoXG4gICAgICAgICAgICAgIGF1ZGlvQ29kZWNJbmZvLmNvZGVjLCBhdWRpb0NvZGVjSW5mby5jaGFubmVsTnVtLFxuICAgICAgICAgICAgICBhdWRpb0NvZGVjSW5mby5zYW1wbGVSYXRlKTtcbiAgICAgICAgICBhdWRpb0NvZGVjcy5wdXNoKGF1ZGlvQ29kZWMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdWRpb0NvZGVjcy5zb3J0KCk7XG4gICAgICBhdWRpbyA9IG5ldyBTdWJzY3JpcHRpb25Nb2R1bGUuQXVkaW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMoYXVkaW9Db2RlY3MpO1xuICAgIH0gZWxzZSBpZiAodHJhY2sudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgY29uc3QgdmlkZW9Db2RlY3MgPSBbXTtcbiAgICAgIGlmICh0cmFjay5vcHRpb25hbCAmJiB0cmFjay5vcHRpb25hbC5mb3JtYXQpIHtcbiAgICAgICAgZm9yIChjb25zdCB2aWRlb0NvZGVjSW5mbyBvZiB0cmFjay5vcHRpb25hbC5mb3JtYXQpIHtcbiAgICAgICAgICBjb25zdCB2aWRlb0NvZGVjID0gbmV3IENvZGVjTW9kdWxlLlZpZGVvQ29kZWNQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgICB2aWRlb0NvZGVjSW5mby5jb2RlYywgdmlkZW9Db2RlY0luZm8ucHJvZmlsZSk7XG4gICAgICAgICAgdmlkZW9Db2RlY3MucHVzaCh2aWRlb0NvZGVjKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmlkZW9Db2RlY3Muc29ydCgpO1xuICAgICAgaWYgKCF0cmFjay5vcHRpb25hbD8ucGFyYW1ldGVycykge1xuICAgICAgICB2aWRlbyA9IG5ldyBTdWJzY3JpcHRpb25Nb2R1bGUuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMoXG4gICAgICAgICAgICB2aWRlb0NvZGVjcywgW10sIFtdLCBbXSwgW10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVzb2x1dGlvbnMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgdHJhY2sub3B0aW9uYWwucGFyYW1ldGVycy5yZXNvbHV0aW9uLFxuICAgICAgICAgICAgKHIpID0+IG5ldyBNZWRpYUZvcm1hdE1vZHVsZS5SZXNvbHV0aW9uKHIud2lkdGgsIHIuaGVpZ2h0KSk7XG4gICAgICAgIHJlc29sdXRpb25zLnNvcnQoc29ydFJlc29sdXRpb25zKTtcbiAgICAgICAgY29uc3QgYml0cmF0ZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgdHJhY2sub3B0aW9uYWwucGFyYW1ldGVycy5iaXRyYXRlLFxuICAgICAgICAgICAgKGJpdHJhdGUpID0+IGV4dHJhY3RCaXRyYXRlTXVsdGlwbGllcihiaXRyYXRlKSk7XG4gICAgICAgIGJpdHJhdGVzLnB1c2goMS4wKTtcbiAgICAgICAgYml0cmF0ZXMuc29ydChzb3J0TnVtYmVycyk7XG4gICAgICAgIGNvbnN0IGZyYW1lUmF0ZXMgPVxuICAgICAgICAgICAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFjay5vcHRpb25hbC5wYXJhbWV0ZXJzLmZyYW1lcmF0ZSkpO1xuICAgICAgICBmcmFtZVJhdGVzLnNvcnQoc29ydE51bWJlcnMpO1xuICAgICAgICBjb25zdCBrZXlGcmFtZUludGVydmFscyA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0cmFjay5vcHRpb25hbC5wYXJhbWV0ZXJzLmtleUZyYW1lSW50ZXJ2YWwpKTtcbiAgICAgICAga2V5RnJhbWVJbnRlcnZhbHMuc29ydChzb3J0TnVtYmVycyk7XG4gICAgICAgIHZpZGVvID0gbmV3IFN1YnNjcmlwdGlvbk1vZHVsZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyhcbiAgICAgICAgICAgIHZpZGVvQ29kZWNzLCByZXNvbHV0aW9ucywgZnJhbWVSYXRlcywgYml0cmF0ZXMsIGtleUZyYW1lSW50ZXJ2YWxzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb25Nb2R1bGUuU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzKGF1ZGlvLCB2aWRlbyk7XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBBdWRpb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFJlcHJlc2VudHMgdGhlIGF1ZGlvIGNhcGFiaWxpdHkgZm9yIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoY29kZWNzKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPE93dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzPn0gY29kZWNzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkF1ZGlvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5jb2RlY3MgPSBjb2RlY3M7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSB2aWRlbyBjYXBhYmlsaXR5IGZvciBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjcywgcmVzb2x1dGlvbnMsIGZyYW1lUmF0ZXMsIGJpdHJhdGVNdWx0aXBsaWVycyxcbiAgICAgIGtleUZyYW1lSW50ZXJ2YWxzKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPE93dC5CYXNlLlZpZGVvQ29kZWNQYXJhbWV0ZXJzPn0gY29kZWNzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5jb2RlY3MgPSBjb2RlY3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPE93dC5CYXNlLlJlc29sdXRpb24+fSByZXNvbHV0aW9uc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbnMgPSByZXNvbHV0aW9ucztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48bnVtYmVyPn0gZnJhbWVSYXRlc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMuZnJhbWVSYXRlcyA9IGZyYW1lUmF0ZXM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPG51bWJlcj59IGJpdHJhdGVNdWx0aXBsaWVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMuYml0cmF0ZU11bHRpcGxpZXJzID0gYml0cmF0ZU11bHRpcGxpZXJzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FycmF5LjxudW1iZXI+fSBrZXlGcmFtZUludGVydmFsc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMua2V5RnJhbWVJbnRlcnZhbHMgPSBrZXlGcmFtZUludGVydmFscztcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBTdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSBjYXBhYmlsaXR5IGZvciBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpbywgdmlkZW8pIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkNvbmZlcmVuY2UuQXVkaW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXN9IGF1ZGlvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMuYXVkaW8gPSBhdWRpbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXN9IHZpZGVvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMudmlkZW8gPSB2aWRlbztcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBBdWRpb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgUmVwcmVzZW50cyB0aGUgYXVkaW8gY29uc3RyYWludHMgZm9yIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvU3Vic2NyaXB0aW9uQ29uc3RyYWludHMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlY3MpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/QXJyYXkuPE93dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzPn0gY29kZWNzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkF1ZGlvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBDb2RlY3MgYWNjZXB0ZWQuIElmIG5vbmUgb2YgYGNvZGVjc2Agc3VwcG9ydGVkIGJ5IGJvdGggc2lkZXMsIGNvbm5lY3Rpb24gZmFpbHMuIExlYXZlIGl0IHVuZGVmaW5lZCB3aWxsIHVzZSBhbGwgcG9zc2libGUgY29kZWNzLlxuICAgICAqL1xuICAgIHRoaXMuY29kZWNzID0gY29kZWNzO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSB2aWRlbyBjb25zdHJhaW50cyBmb3Igc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50cyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjcywgcmVzb2x1dGlvbiwgZnJhbWVSYXRlLCBiaXRyYXRlTXVsdGlwbGllcixcbiAgICAgIGtleUZyYW1lSW50ZXJ2YWwsIHJpZCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9BcnJheS48T3d0LkJhc2UuVmlkZW9Db2RlY1BhcmFtZXRlcnM+fSBjb2RlY3NcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIENvZGVjcyBhY2NlcHRlZC4gSWYgbm9uZSBvZiBgY29kZWNzYCBzdXBwb3J0ZWQgYnkgYm90aCBzaWRlcywgY29ubmVjdGlvbiBmYWlscy4gTGVhdmUgaXQgdW5kZWZpbmVkIHdpbGwgdXNlIGFsbCBwb3NzaWJsZSBjb2RlY3MuXG4gICAgICovXG4gICAgdGhpcy5jb2RlY3MgPSBjb2RlY3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLlJlc29sdXRpb259IHJlc29sdXRpb25cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIE9ubHkgcmVzb2x1dGlvbnMgbGlzdGVkIGluIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IHJlc29sdXRpb247XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gZnJhbWVSYXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBPbmx5IGZyYW1lUmF0ZXMgbGlzdGVkIGluIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMuZnJhbWVSYXRlID0gZnJhbWVSYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGJpdHJhdGVNdWx0aXBsaWVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBPbmx5IGJpdHJhdGVNdWx0aXBsaWVycyBsaXN0ZWQgaW4gT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5iaXRyYXRlTXVsdGlwbGllciA9IGJpdHJhdGVNdWx0aXBsaWVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGtleUZyYW1lSW50ZXJ2YWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIE9ubHkga2V5RnJhbWVJbnRlcnZhbHMgbGlzdGVkIGluIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMua2V5RnJhbWVJbnRlcnZhbCA9IGtleUZyYW1lSW50ZXJ2YWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBSZXN0cmljdGlvbiBpZGVudGlmaWVyIHRvIGlkZW50aWZ5IHRoZSBSVFAgU3RyZWFtcyB3aXRoaW4gYW4gUlRQIHNlc3Npb24uIFdoZW4gcmlkIGlzIHNwZWNpZmllZCwgb3RoZXIgY29uc3RyYWludHMgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqL1xuICAgIHRoaXMucmlkID0gcmlkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFN1YnNjcmliZU9wdGlvbnNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBTdWJzY3JpYmVPcHRpb25zIGRlZmluZXMgb3B0aW9ucyBmb3Igc3Vic2NyaWJpbmcgYSBPd3QuQmFzZS5SZW1vdGVTdHJlYW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVPcHRpb25zIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoYXVkaW8sIHZpZGVvLCB0cmFuc3BvcnQpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkNvbmZlcmVuY2UuQXVkaW9TdWJzY3JpcHRpb25Db25zdHJhaW50c30gYXVkaW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaWJlT3B0aW9uc1xuICAgICAqL1xuICAgIHRoaXMuYXVkaW8gPSBhdWRpbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c30gdmlkZW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaWJlT3B0aW9uc1xuICAgICAqL1xuICAgIHRoaXMudmlkZW8gPSB2aWRlbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuVHJhbnNwb3J0Q29uc3RyYWludHN9IHRyYW5zcG9ydFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpYmVPcHRpb25zXG4gICAgICovXG4gICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIGRlZmluZXMgb3B0aW9ucyBmb3IgdXBkYXRpbmcgYSBzdWJzY3JpcHRpb24ncyB2aWRlbyBwYXJ0LlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLlJlc29sdXRpb259IHJlc29sdXRpb25cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gICAgICogQGRlc2MgT25seSByZXNvbHV0aW9ucyBsaXN0ZWQgaW4gVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9uID0gdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGZyYW1lUmF0ZXNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gICAgICogQGRlc2MgT25seSBmcmFtZVJhdGVzIGxpc3RlZCBpbiBWaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyBhcmUgYWxsb3dlZC5cbiAgICAgKi9cbiAgICB0aGlzLmZyYW1lUmF0ZSA9IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBiaXRyYXRlTXVsdGlwbGllcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gICAgICogQGRlc2MgT25seSBiaXRyYXRlTXVsdGlwbGllcnMgbGlzdGVkIGluIFZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMuYml0cmF0ZU11bHRpcGxpZXJzID0gdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGtleUZyYW1lSW50ZXJ2YWxzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9uc1xuICAgICAqIEBkZXNjIE9ubHkga2V5RnJhbWVJbnRlcnZhbHMgbGlzdGVkIGluIFZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMua2V5RnJhbWVJbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBTdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9ucyBkZWZpbmVzIG9wdGlvbnMgZm9yIHVwZGF0aW5nIGEgc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9ucyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9WaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnN9IHZpZGVvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAgICAgKi9cbiAgICB0aGlzLnZpZGVvID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvblxuICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFN1YnNjcmlwdGlvbiBpcyBhIHJlY2VpdmVyIGZvciByZWNlaXZpbmcgYSBzdHJlYW0uXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgfCBBcmd1bWVudCBUeXBlICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgZW5kZWQgICAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFN1YnNjcmlwdGlvbiBpcyBlbmRlZC4gfFxuICogfCBlcnJvciAgICAgICAgICAgfCBFcnJvckV2ZW50ICAgICAgIHwgQW4gZXJyb3Igb2NjdXJyZWQgb24gdGhlIHN1YnNjcmlwdGlvbi4gfFxuICogfCBtdXRlICAgICAgICAgICAgfCBNdXRlRXZlbnQgICAgICAgIHwgUHVibGljYXRpb24gaXMgbXV0ZWQuIFJlbW90ZSBzaWRlIHN0b3BwZWQgc2VuZGluZyBhdWRpbyBhbmQvb3IgdmlkZW8gZGF0YS4gfFxuICogfCB1bm11dGUgICAgICAgICAgfCBNdXRlRXZlbnQgICAgICAgIHwgUHVibGljYXRpb24gaXMgdW5tdXRlZC4gUmVtb3RlIHNpZGUgY29udGludWVkIHNlbmRpbmcgYXVkaW8gYW5kL29yIHZpZGVvIGRhdGEuIHxcbiAqXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvbiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgaWQsIHN0cmVhbSwgdHJhbnNwb3J0LCBzdG9wLCBnZXRTdGF0cywgbXV0ZSwgdW5tdXRlLCBhcHBseU9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghaWQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lEIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBpZCxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtNZWRpYVN0cmVhbSB8IEJpZGlyZWN0aW9uYWxTdHJlYW19IHN0cmVhbVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3N0cmVhbScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAvLyBUT0RPOiBJdCBzaG91bGQgYmUgYSByZWFkb25seSBwcm9wZXJ0eSwgYnV0IGN1cnJlbnQgaW1wbGVtZW50YXRpb25cbiAgICAgIC8vIGNyZWF0ZXMgU3Vic2NyaXB0aW9uIGFmdGVyIHJlY2VpdmluZyAncmVhZHknIGZyb20gc2VydmVyLiBBdCB0aGlzIHRpbWUsXG4gICAgICAvLyBNZWRpYVN0cmVhbSBtYXkgbm90IGJlIGF2YWlsYWJsZS5cbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHN0cmVhbSxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5UcmFuc3BvcnRTZXR0aW5nc30gdHJhbnNwb3J0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQGRlc2MgVHJhbnNwb3J0IHNldHRpbmdzIGZvciB0aGUgc3Vic2NyaXB0aW9uLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5TdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3RyYW5zcG9ydCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdHJhbnNwb3J0LFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBzdG9wXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgU3RvcCBjZXJ0YWluIHN1YnNjcmlwdGlvbi4gT25jZSBhIHN1YnNjcmlwdGlvbiBpcyBzdG9wcGVkLCBpdCBjYW5ub3QgYmUgcmVjb3ZlcmVkLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuc3RvcCA9IHN0b3A7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGdldFN0YXRzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgR2V0IHN0YXRzIG9mIHVuZGVybHlpbmcgUGVlckNvbm5lY3Rpb24uXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJUQ1N0YXRzUmVwb3J0LCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy5nZXRTdGF0cyA9IGdldFN0YXRzO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBtdXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgU3RvcCByZWV2aW5nIGRhdGEgZnJvbSByZW1vdGUgZW5kcG9pbnQuXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7T3d0LkJhc2UuVHJhY2tLaW5kIH0ga2luZCBLaW5kIG9mIHRyYWNrcyB0byBiZSBtdXRlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQsIEVycm9yPn1cbiAgICAgKi9cbiAgICB0aGlzLm11dGUgPSBtdXRlO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiB1bm11dGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBDb250aW51ZSByZWV2aW5nIGRhdGEgZnJvbSByZW1vdGUgZW5kcG9pbnQuXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7T3d0LkJhc2UuVHJhY2tLaW5kIH0ga2luZCBLaW5kIG9mIHRyYWNrcyB0byBiZSB1bm11dGVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZCwgRXJyb3I+fVxuICAgICAqL1xuICAgIHRoaXMudW5tdXRlID0gdW5tdXRlO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBhcHBseU9wdGlvbnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBVcGRhdGUgc3Vic2NyaXB0aW9uIHdpdGggZ2l2ZW4gb3B0aW9ucy5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIH0gb3B0aW9ucyBTdWJzY3JpcHRpb24gdXBkYXRlIG9wdGlvbnMuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5kZWZpbmVkLCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy5hcHBseU9wdGlvbnMgPSBhcHBseU9wdGlvbnM7XG5cbiAgICAvLyBUcmFjayBpcyBub3QgZGVmaW5lZCBpbiBzZXJ2ZXIgcHJvdG9jb2wuIFNvIHRoZXNlIElEcyBhcmUgZXF1YWwgdG8gdGhlaXJcbiAgICAvLyBzdHJlYW0ncyBJRCBhdCB0aGlzIHRpbWUuXG4gICAgdGhpcy5fYXVkaW9UcmFja0lkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3ZpZGVvVHJhY2tJZCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIGJhc2UgZnJvbSAnLi9iYXNlL2V4cG9ydC5qcyc7XG5pbXBvcnQgKiBhcyBwMnAgZnJvbSAnLi9wMnAvZXhwb3J0LmpzJztcbmltcG9ydCAqIGFzIGNvbmZlcmVuY2UgZnJvbSAnLi9jb25mZXJlbmNlL2V4cG9ydC5qcyc7XG5cbi8qKlxuICogQmFzZSBvYmplY3RzIGZvciBib3RoIFAyUCBhbmQgY29uZmVyZW5jZS5cbiAqIEBuYW1lc3BhY2UgT3d0LkJhc2VcbiAqL1xuZXhwb3J0IGNvbnN0IEJhc2UgPSBiYXNlO1xuXG4vKipcbiAqIFAyUCBXZWJSVEMgY29ubmVjdGlvbnMuXG4gKiBAbmFtZXNwYWNlIE93dC5QMlBcbiAqL1xuZXhwb3J0IGNvbnN0IFAyUCA9IHAycDtcblxuLyoqXG4gKiBXZWJSVEMgY29ubmVjdGlvbnMgd2l0aCBjb25mZXJlbmNlIHNlcnZlci5cbiAqIEBuYW1lc3BhY2UgT3d0LkNvbmZlcmVuY2VcbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZlcmVuY2UgPSBjb25mZXJlbmNlO1xuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjb25zdCBlcnJvcnMgPSB7XG4gIC8vIDIxMDAtMjk5OSBmb3IgUDJQIGVycm9yc1xuICAvLyAyMTAwLTIxOTkgZm9yIGNvbm5lY3Rpb24gZXJyb3JzXG4gIC8vIDIxMDAtMjEwOSBmb3Igc2VydmVyIGVycm9yc1xuICBQMlBfQ09OTl9TRVJWRVJfVU5LTk9XTjoge1xuICAgIGNvZGU6IDIxMDAsXG4gICAgbWVzc2FnZTogJ1NlcnZlciB1bmtub3duIGVycm9yLicsXG4gIH0sXG4gIFAyUF9DT05OX1NFUlZFUl9VTkFWQUlMQUJMRToge1xuICAgIGNvZGU6IDIxMDEsXG4gICAgbWVzc2FnZTogJ1NlcnZlciBpcyB1bmF2YWxpYWJsZS4nLFxuICB9LFxuICBQMlBfQ09OTl9TRVJWRVJfQlVTWToge1xuICAgIGNvZGU6IDIxMDIsXG4gICAgbWVzc2FnZTogJ1NlcnZlciBpcyB0b28gYnVzeS4nLFxuICB9LFxuICBQMlBfQ09OTl9TRVJWRVJfTk9UX1NVUFBPUlRFRDoge1xuICAgIGNvZGU6IDIxMDMsXG4gICAgbWVzc2FnZTogJ01ldGhvZCBoYXMgbm90IGJlZW4gc3VwcG9ydGVkIGJ5IHNlcnZlci4nLFxuICB9LFxuICAvLyAyMTEwLTIxMTkgZm9yIGNsaWVudCBlcnJvcnNcbiAgUDJQX0NPTk5fQ0xJRU5UX1VOS05PV046IHtcbiAgICBjb2RlOiAyMTEwLFxuICAgIG1lc3NhZ2U6ICdDbGllbnQgdW5rbm93biBlcnJvci4nLFxuICB9LFxuICBQMlBfQ09OTl9DTElFTlRfTk9UX0lOSVRJQUxJWkVEOiB7XG4gICAgY29kZTogMjExMSxcbiAgICBtZXNzYWdlOiAnQ29ubmVjdGlvbiBpcyBub3QgaW5pdGlhbGl6ZWQuJyxcbiAgfSxcbiAgLy8gMjEyMC0yMTI5IGZvciBhdXRoZW50aWNhdGlvbiBlcnJvcnNcbiAgUDJQX0NPTk5fQVVUSF9VTktOT1dOOiB7XG4gICAgY29kZTogMjEyMCxcbiAgICBtZXNzYWdlOiAnQXV0aGVudGljYXRpb24gdW5rbm93biBlcnJvci4nLFxuICB9LFxuICBQMlBfQ09OTl9BVVRIX0ZBSUxFRDoge1xuICAgIGNvZGU6IDIxMjEsXG4gICAgbWVzc2FnZTogJ1dyb25nIHVzZXJuYW1lIG9yIHRva2VuLicsXG4gIH0sXG4gIC8vIDIyMDAtMjI5OSBmb3IgbWVzc2FnZSB0cmFuc3BvcnQgZXJyb3JzXG4gIFAyUF9NRVNTQUdJTkdfVEFSR0VUX1VOUkVBQ0hBQkxFOiB7XG4gICAgY29kZTogMjIwMSxcbiAgICBtZXNzYWdlOiAnUmVtb3RlIHVzZXIgY2Fubm90IGJlIHJlYWNoZWQuJyxcbiAgfSxcbiAgUDJQX0NMSUVOVF9ERU5JRUQ6IHtcbiAgICBjb2RlOiAyMjAyLFxuICAgIG1lc3NhZ2U6ICdVc2VyIGlzIGRlbmllZC4nLFxuICB9LFxuICAvLyAyMzAxLTIzOTkgZm9yIGNoYXQgcm9vbSBlcnJvcnNcbiAgLy8gMjQwMS0yNDk5IGZvciBjbGllbnQgZXJyb3JzXG4gIFAyUF9DTElFTlRfVU5LTk9XTjoge1xuICAgIGNvZGU6IDI0MDAsXG4gICAgbWVzc2FnZTogJ1Vua25vd24gZXJyb3JzLicsXG4gIH0sXG4gIFAyUF9DTElFTlRfVU5TVVBQT1JURURfTUVUSE9EOiB7XG4gICAgY29kZTogMjQwMSxcbiAgICBtZXNzYWdlOiAnVGhpcyBtZXRob2QgaXMgdW5zdXBwb3J0ZWQgaW4gY3VycmVudCBicm93c2VyLicsXG4gIH0sXG4gIFAyUF9DTElFTlRfSUxMRUdBTF9BUkdVTUVOVDoge1xuICAgIGNvZGU6IDI0MDIsXG4gICAgbWVzc2FnZTogJ0lsbGVnYWwgYXJndW1lbnQuJyxcbiAgfSxcbiAgUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFOiB7XG4gICAgY29kZTogMjQwMyxcbiAgICBtZXNzYWdlOiAnSW52YWxpZCBwZWVyIHN0YXRlLicsXG4gIH0sXG4gIFAyUF9DTElFTlRfTk9UX0FMTE9XRUQ6IHtcbiAgICBjb2RlOiAyNDA0LFxuICAgIG1lc3NhZ2U6ICdSZW1vdGUgdXNlciBpcyBub3QgYWxsb3dlZC4nLFxuICB9LFxuICAvLyAyNTAxLTI1OTkgZm9yIFdlYlJUQyBlcnJvcy5cbiAgUDJQX1dFQlJUQ19VTktOT1dOOiB7XG4gICAgY29kZTogMjUwMCxcbiAgICBtZXNzYWdlOiAnV2ViUlRDIGVycm9yLicsXG4gIH0sXG4gIFAyUF9XRUJSVENfU0RQOiB7XG4gICAgY29kZTogMjUwMixcbiAgICBtZXNzYWdlOiAnU0RQIGVycm9yLicsXG4gIH0sXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvbiBnZXRFcnJvckJ5Q29kZVxuICogQGRlc2MgR2V0IGVycm9yIG9iamVjdCBieSBlcnJvciBjb2RlLlxuICogQHBhcmFtIHtzdHJpbmd9IGVycm9yQ29kZSBFcnJvciBjb2RlLlxuICogQHJldHVybiB7T3d0LlAyUC5FcnJvcn0gRXJyb3Igb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JCeUNvZGUoZXJyb3JDb2RlKSB7XG4gIGNvbnN0IGNvZGVFcnJvck1hcCA9IHtcbiAgICAyMTAwOiBlcnJvcnMuUDJQX0NPTk5fU0VSVkVSX1VOS05PV04sXG4gICAgMjEwMTogZXJyb3JzLlAyUF9DT05OX1NFUlZFUl9VTkFWQUlMQUJMRSxcbiAgICAyMTAyOiBlcnJvcnMuUDJQX0NPTk5fU0VSVkVSX0JVU1ksXG4gICAgMjEwMzogZXJyb3JzLlAyUF9DT05OX1NFUlZFUl9OT1RfU1VQUE9SVEVELFxuICAgIDIxMTA6IGVycm9ycy5QMlBfQ09OTl9DTElFTlRfVU5LTk9XTixcbiAgICAyMTExOiBlcnJvcnMuUDJQX0NPTk5fQ0xJRU5UX05PVF9JTklUSUFMSVpFRCxcbiAgICAyMTIwOiBlcnJvcnMuUDJQX0NPTk5fQVVUSF9VTktOT1dOLFxuICAgIDIxMjE6IGVycm9ycy5QMlBfQ09OTl9BVVRIX0ZBSUxFRCxcbiAgICAyMjAxOiBlcnJvcnMuUDJQX01FU1NBR0lOR19UQVJHRVRfVU5SRUFDSEFCTEUsXG4gICAgMjQwMDogZXJyb3JzLlAyUF9DTElFTlRfVU5LTk9XTixcbiAgICAyNDAxOiBlcnJvcnMuUDJQX0NMSUVOVF9VTlNVUFBPUlRFRF9NRVRIT0QsXG4gICAgMjQwMjogZXJyb3JzLlAyUF9DTElFTlRfSUxMRUdBTF9BUkdVTUVOVCxcbiAgICAyNDAzOiBlcnJvcnMuUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFLFxuICAgIDI0MDQ6IGVycm9ycy5QMlBfQ0xJRU5UX05PVF9BTExPV0VELFxuICAgIDI1MDA6IGVycm9ycy5QMlBfV0VCUlRDX1VOS05PV04sXG4gICAgMjUwMTogZXJyb3JzLlAyUF9XRUJSVENfU0RQLFxuICB9O1xuICByZXR1cm4gY29kZUVycm9yTWFwW2Vycm9yQ29kZV07XG59XG5cbi8qKlxuICogQGNsYXNzIFAyUEVycm9yXG4gKiBAY2xhc3NEZXNjIFRoZSBQMlBFcnJvciBvYmplY3QgcmVwcmVzZW50cyBhbiBlcnJvciBpbiBQMlAgbW9kZS5cbiAqIEBtZW1iZXJPZiBPd3QuUDJQXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBQMlBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoZXJyb3IsIG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICBpZiAodHlwZW9mIGVycm9yID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5jb2RlID0gZXJyb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29kZSA9IGVycm9yLmNvZGU7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHtkZWZhdWx0IGFzIFAyUENsaWVudH0gZnJvbSAnLi9wMnBjbGllbnQuanMnO1xuZXhwb3J0IHtQMlBFcnJvcn0gZnJvbSAnLi9lcnJvci5qcyc7XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBNYXAsIFByb21pc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlciwgT3d0RXZlbnR9IGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuaW1wb3J0ICogYXMgRXJyb3JNb2R1bGUgZnJvbSAnLi9lcnJvci5qcyc7XG5pbXBvcnQgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsIGZyb20gJy4vcGVlcmNvbm5lY3Rpb24tY2hhbm5lbC5qcyc7XG5cbmNvbnN0IENvbm5lY3Rpb25TdGF0ZSA9IHtcbiAgUkVBRFk6IDEsXG4gIENPTk5FQ1RJTkc6IDIsXG4gIENPTk5FQ1RFRDogMyxcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vKipcbiAqIEBjbGFzcyBQMlBDbGllbnRDb25maWd1cmF0aW9uXG4gKiBAY2xhc3NEZXNjIENvbmZpZ3VyYXRpb24gZm9yIFAyUENsaWVudC5cbiAqIEBtZW1iZXJPZiBPd3QuUDJQXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFAyUENsaWVudENvbmZpZ3VyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgLyoqXG4gICAqIEBtZW1iZXIgez9BcnJheTxPd3QuQmFzZS5BdWRpb0VuY29kaW5nUGFyYW1ldGVycz59IGF1ZGlvRW5jb2RpbmdcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIEVuY29kaW5nIHBhcmFtZXRlcnMgZm9yIHB1Ymxpc2hpbmcgYXVkaW8gdHJhY2tzLlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRDb25maWd1cmF0aW9uXG4gICAqL1xuICB0aGlzLmF1ZGlvRW5jb2RpbmcgPSB1bmRlZmluZWQ7XG4gIC8qKlxuICAgKiBAbWVtYmVyIHs/QXJyYXk8T3d0LkJhc2UuVmlkZW9FbmNvZGluZ1BhcmFtZXRlcnM+fSB2aWRlb0VuY29kaW5nXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBFbmNvZGluZyBwYXJhbWV0ZXJzIGZvciBwdWJsaXNoaW5nIHZpZGVvIHRyYWNrcy5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50Q29uZmlndXJhdGlvblxuICAgKi9cbiAgdGhpcy52aWRlb0VuY29kaW5nID0gdW5kZWZpbmVkO1xuICAvKipcbiAgICogQG1lbWJlciB7P1JUQ0NvbmZpZ3VyYXRpb259IHJ0Y0NvbmZpZ3VyYXRpb25cbiAgICogQGluc3RhbmNlXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudENvbmZpZ3VyYXRpb25cbiAgICogQGRlc2MgSXQgd2lsbCBiZSB1c2VkIGZvciBjcmVhdGluZyBQZWVyQ29ubmVjdGlvbi5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL3dlYnJ0Yy8jcnRjY29uZmlndXJhdGlvbi1kaWN0aW9uYXJ5fFJUQ0NvbmZpZ3VyYXRpb24gRGljdGlvbmFyeSBvZiBXZWJSVEMgMS4wfS5cbiAgICogQGV4YW1wbGVcbiAgICogLy8gRm9sbG93aW5nIG9iamVjdCBjYW4gYmUgc2V0IHRvIHAycENsaWVudENvbmZpZ3VyYXRpb24ucnRjQ29uZmlndXJhdGlvbi5cbiAgICoge1xuICAgKiAgIGljZVNlcnZlcnM6IFt7XG4gICAqICAgICAgdXJsczogXCJzdHVuOmV4YW1wbGUuY29tOjM0NzhcIlxuICAgKiAgIH0sIHtcbiAgICogICAgIHVybHM6IFtcbiAgICogICAgICAgXCJ0dXJuOmV4YW1wbGUuY29tOjM0Nzg/dHJhbnNwb3J0PXVkcFwiLFxuICAgKiAgICAgICBcInR1cm46ZXhhbXBsZS5jb206MzQ3OD90cmFuc3BvcnQ9dGNwXCJcbiAgICogICAgIF0sXG4gICAqICAgICAgY3JlZGVudGlhbDogXCJwYXNzd29yZFwiLFxuICAgKiAgICAgIHVzZXJuYW1lOiBcInVzZXJuYW1lXCJcbiAgICogICB9XG4gICAqIH1cbiAgICovXG4gIHRoaXMucnRjQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbn07XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGNsYXNzIFAyUENsaWVudFxuICogQGNsYXNzRGVzYyBUaGUgUDJQQ2xpZW50IGhhbmRsZXMgUGVlckNvbm5lY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IGNsaWVudHMuXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgICAgICAgfCBBcmd1bWVudCBUeXBlICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgc3RyZWFtYWRkZWQgICAgICAgICAgIHwgU3RyZWFtRXZlbnQgICAgICB8IEEgbmV3IHN0cmVhbSBpcyBzZW50IGZyb20gcmVtb3RlIGVuZHBvaW50LiB8XG4gKiB8IG1lc3NhZ2VyZWNlaXZlZCAgICAgICB8IE1lc3NhZ2VFdmVudCAgICAgfCBBIG5ldyBtZXNzYWdlIGlzIHJlY2VpdmVkLiB8XG4gKiB8IHNlcnZlcmRpc2Nvbm5lY3RlZCAgICB8IE93dEV2ZW50ICAgICAgICAgfCBEaXNjb25uZWN0ZWQgZnJvbSBzaWduYWxpbmcgc2VydmVyLiB8XG4gKlxuICogQG1lbWJlcm9mIE93dC5QMlBcbiAqIEBleHRlbmRzIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gez9Pd3QuUDJQLlAyUENsaWVudENvbmZpZ3VyYXRpb24gfSBjb25maWd1cmF0aW9uIENvbmZpZ3VyYXRpb24gZm9yIE93dC5QMlAuUDJQQ2xpZW50LlxuICogQHBhcmFtIHtPYmplY3R9IHNpZ25hbGluZ0NoYW5uZWwgQSBjaGFubmVsIGZvciBzZW5kaW5nIGFuZCByZWNlaXZpbmcgc2lnbmFsaW5nIG1lc3NhZ2VzLlxuICovXG5jb25zdCBQMlBDbGllbnQgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uLCBzaWduYWxpbmdDaGFubmVsKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcgRXZlbnREaXNwYXRjaGVyKCkpO1xuICBjb25zdCBjb25maWcgPSBjb25maWd1cmF0aW9uO1xuICBjb25zdCBzaWduYWxpbmcgPSBzaWduYWxpbmdDaGFubmVsO1xuICBjb25zdCBjaGFubmVscyA9IG5ldyBNYXAoKTsgLy8gTWFwIG9mIFBlZXJDb25uZWN0aW9uQ2hhbm5lbHMuXG4gIGNvbnN0IGNvbm5lY3Rpb25JZHMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyByZW1vdGUgdXNlciBJRCwgdmFsdWUgaXMgY3VycmVudCBzZXNzaW9uIElELlxuICBjb25zdCBzZWxmID0gdGhpcztcbiAgbGV0IHN0YXRlID0gQ29ubmVjdGlvblN0YXRlLlJFQURZO1xuICBsZXQgbXlJZDtcblxuICBzaWduYWxpbmcub25NZXNzYWdlID0gZnVuY3Rpb24ob3JpZ2luLCBtZXNzYWdlKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCBzaWduYWxpbmcgbWVzc2FnZSBmcm9tICcgKyBvcmlnaW4gKyAnOiAnICsgbWVzc2FnZSk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XG4gICAgY29uc3QgY29ubmVjdGlvbklkID0gZGF0YS5jb25uZWN0aW9uSWQ7XG4gICAgaWYgKHNlbGYuYWxsb3dlZFJlbW90ZUlkcy5pbmRleE9mKG9yaWdpbikgPCAwKSB7XG4gICAgICBzZW5kU2lnbmFsaW5nTWVzc2FnZShcbiAgICAgICAgICBvcmlnaW4sIGRhdGEuY29ubmVjdGlvbklkLCAnY2hhdC1jbG9zZWQnLFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0RFTklFRCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb25uZWN0aW9uSWRzLmhhcyhvcmlnaW4pICYmXG4gICAgICAgIGNvbm5lY3Rpb25JZHMuZ2V0KG9yaWdpbikgIT09IGNvbm5lY3Rpb25JZCAmJiAhaXNQb2xpdGVQZWVyKG9yaWdpbikpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgICAgJ0NvbGxpc2lvbiBkZXRlY3RlZCwgaWdub3JlIHRoaXMgbWVzc2FnZSBiZWNhdXNlIGN1cnJlbnQgZW5kcG9pbnQgaXMgaW1wb2xpdGUgcGVlci4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2NoYXQtY2xvc2VkJykge1xuICAgICAgaWYgKGNoYW5uZWxzLmhhcyhvcmlnaW4pKSB7XG4gICAgICAgIGdldE9yQ3JlYXRlQ2hhbm5lbChvcmlnaW4sIGNvbm5lY3Rpb25JZCkub25NZXNzYWdlKGRhdGEpO1xuICAgICAgICBjaGFubmVscy5kZWxldGUob3JpZ2luKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2V0T3JDcmVhdGVDaGFubmVsKG9yaWdpbiwgY29ubmVjdGlvbklkKS5vbk1lc3NhZ2UoZGF0YSk7XG4gIH07XG5cbiAgc2lnbmFsaW5nLm9uU2VydmVyRGlzY29ubmVjdGVkID0gZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUgPSBDb25uZWN0aW9uU3RhdGUuUkVBRFk7XG4gICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBPd3RFdmVudCgnc2VydmVyZGlzY29ubmVjdGVkJykpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyIHthcnJheX0gYWxsb3dlZFJlbW90ZUlkc1xuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIE9ubHkgYWxsb3dlZCByZW1vdGUgZW5kcG9pbnQgSURzIGFyZSBhYmxlIHRvIHB1Ymxpc2ggc3RyZWFtIG9yIHNlbmQgbWVzc2FnZSB0byBjdXJyZW50IGVuZHBvaW50LiBSZW1vdmluZyBhbiBJRCBmcm9tIGFsbG93ZWRSZW1vdGVJZHMgZG9lcyBzdG9wIGV4aXN0aW5nIGNvbm5lY3Rpb24gd2l0aCBjZXJ0YWluIGVuZHBvaW50LiBQbGVhc2UgY2FsbCBzdG9wIHRvIHN0b3AgdGhlIFBlZXJDb25uZWN0aW9uLlxuICAgKi9cbiAgdGhpcy5hbGxvd2VkUmVtb3RlSWRzPVtdO1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gY29ubmVjdFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgQ29ubmVjdCB0byBzaWduYWxpbmcgc2VydmVyLiBTaW5jZSBzaWduYWxpbmcgY2FuIGJlIGN1c3RvbWl6ZWQsIHRoaXMgbWV0aG9kIGRvZXMgbm90IGRlZmluZSBob3cgYSB0b2tlbiBsb29rcyBsaWtlLiBTREsgcGFzc2VzIHRva2VuIHRvIHNpZ25hbGluZyBjaGFubmVsIHdpdGhvdXQgY2hhbmdlcy5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlbiBBIHRva2VuIGZvciBjb25uZWN0aW5nIHRvIHNpZ25hbGluZyBzZXJ2ZXIuIFRoZSBmb3JtYXQgb2YgdGhpcyB0b2tlbiBkZXBlbmRzIG9uIHNpZ25hbGluZyBzZXJ2ZXIncyByZXF1aXJlbWVudC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxvYmplY3QsIEVycm9yPn0gSXQgcmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCBhbiBvYmplY3QgcmV0dXJuZWQgYnkgc2lnbmFsaW5nIGNoYW5uZWwgb25jZSBzaWduYWxpbmcgY2hhbm5lbCByZXBvcnRzIGNvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQuXG4gICAqL1xuICB0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbih0b2tlbikge1xuICAgIGlmIChzdGF0ZSA9PT0gQ29ubmVjdGlvblN0YXRlLlJFQURZKSB7XG4gICAgICBzdGF0ZSA9IENvbm5lY3Rpb25TdGF0ZS5DT05ORUNUSU5HO1xuICAgIH0gZWxzZSB7XG4gICAgICBMb2dnZXIud2FybmluZygnSW52YWxpZCBjb25uZWN0aW9uIHN0YXRlOiAnICsgc3RhdGUpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFKSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzaWduYWxpbmcuY29ubmVjdCh0b2tlbikudGhlbigoaWQpID0+IHtcbiAgICAgICAgbXlJZCA9IGlkO1xuICAgICAgICBzdGF0ZSA9IENvbm5lY3Rpb25TdGF0ZS5DT05ORUNURUQ7XG4gICAgICAgIHJlc29sdmUobXlJZCk7XG4gICAgICB9LCAoZXJyQ29kZSkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKEVycm9yTW9kdWxlLmdldEVycm9yQnlDb2RlKFxuICAgICAgICAgICAgZXJyQ29kZSkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZGlzY29ubmVjdFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgRGlzY29ubmVjdCBmcm9tIHRoZSBzaWduYWxpbmcgY2hhbm5lbC4gSXQgc3RvcHMgYWxsIGV4aXN0aW5nIHNlc3Npb25zIHdpdGggcmVtb3RlIGVuZHBvaW50cy5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50XG4gICAqL1xuICB0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoc3RhdGUgPT0gQ29ubmVjdGlvblN0YXRlLlJFQURZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNoYW5uZWxzLmZvckVhY2goKGNoYW5uZWwpID0+IHtcbiAgICAgIGNoYW5uZWwuc3RvcCgpO1xuICAgIH0pO1xuICAgIGNoYW5uZWxzLmNsZWFyKCk7XG4gICAgc2lnbmFsaW5nLmRpc2Nvbm5lY3QoKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHB1Ymxpc2hcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFB1Ymxpc2ggYSBzdHJlYW0gdG8gYSByZW1vdGUgZW5kcG9pbnQuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlSWQgUmVtb3RlIGVuZHBvaW50J3MgSUQuXG4gICAqIEBwYXJhbSB7T3d0LkJhc2UuTG9jYWxTdHJlYW19IHN0cmVhbSBBbiBPd3QuQmFzZS5Mb2NhbFN0cmVhbSB0byBiZSBwdWJsaXNoZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8T3d0LkJhc2UuUHVibGljYXRpb24sIEVycm9yPn0gQSBwcm9taXNlZCB0aGF0IHJlc29sdmVzIHdoZW4gcmVtb3RlIHNpZGUgcmVjZWl2ZWQgdGhlIGNlcnRhaW4gc3RyZWFtLiBIb3dldmVyLCByZW1vdGUgZW5kcG9pbnQgbWF5IG5vdCBkaXNwbGF5IHRoaXMgc3RyZWFtLCBvciBpZ25vcmUgaXQuXG4gICAqL1xuICB0aGlzLnB1Ymxpc2ggPSBmdW5jdGlvbihyZW1vdGVJZCwgc3RyZWFtKSB7XG4gICAgaWYgKHN0YXRlICE9PSBDb25uZWN0aW9uU3RhdGUuQ09OTkVDVEVEKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUsXG4gICAgICAgICAgJ1AyUCBDbGllbnQgaXMgbm90IGNvbm5lY3RlZCB0byBzaWduYWxpbmcgY2hhbm5lbC4nKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFsbG93ZWRSZW1vdGVJZHMuaW5kZXhPZihyZW1vdGVJZCkgPCAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX05PVF9BTExPV0VEKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0T3JDcmVhdGVDaGFubmVsKHJlbW90ZUlkKS5wdWJsaXNoKHN0cmVhbSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc2VuZFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgU2VuZCBhIG1lc3NhZ2UgdG8gcmVtb3RlIGVuZHBvaW50LlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlbW90ZUlkIFJlbW90ZSBlbmRwb2ludCdzIElELlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBNZXNzYWdlIHRvIGJlIHNlbnQuIEl0IHNob3VsZCBiZSBhIHN0cmluZy5cbiAgICogQHJldHVybiB7UHJvbWlzZTx1bmRlZmluZWQsIEVycm9yPn0gSXQgcmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgd2hlbiByZW1vdGUgZW5kcG9pbnQgcmVjZWl2ZWQgY2VydGFpbiBtZXNzYWdlLlxuICAgKi9cbiAgdGhpcy5zZW5kPWZ1bmN0aW9uKHJlbW90ZUlkLCBtZXNzYWdlKSB7XG4gICAgaWYgKHN0YXRlICE9PSBDb25uZWN0aW9uU3RhdGUuQ09OTkVDVEVEKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUsXG4gICAgICAgICAgJ1AyUCBDbGllbnQgaXMgbm90IGNvbm5lY3RlZCB0byBzaWduYWxpbmcgY2hhbm5lbC4nKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFsbG93ZWRSZW1vdGVJZHMuaW5kZXhPZihyZW1vdGVJZCkgPCAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX05PVF9BTExPV0VEKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0T3JDcmVhdGVDaGFubmVsKHJlbW90ZUlkKS5zZW5kKG1lc3NhZ2UpKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHN0b3BcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIENsZWFuIGFsbCByZXNvdXJjZXMgYXNzb2NpYXRlZCB3aXRoIGdpdmVuIHJlbW90ZSBlbmRwb2ludC4gSXQgbWF5IGluY2x1ZGUgUlRDUGVlckNvbm5lY3Rpb24sIFJUQ1J0cFRyYW5zY2VpdmVyIGFuZCBSVENEYXRhQ2hhbm5lbC4gSXQgc3RpbGwgcG9zc2libGUgdG8gcHVibGlzaCBhIHN0cmVhbSwgb3Igc2VuZCBhIG1lc3NhZ2UgdG8gZ2l2ZW4gcmVtb3RlIGVuZHBvaW50IGFmdGVyIHN0b3AuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlSWQgUmVtb3RlIGVuZHBvaW50J3MgSUQuXG4gICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICovXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKHJlbW90ZUlkKSB7XG4gICAgaWYgKCFjaGFubmVscy5oYXMocmVtb3RlSWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZyhcbiAgICAgICAgICAnTm8gUGVlckNvbm5lY3Rpb24gYmV0d2VlbiBjdXJyZW50IGVuZHBvaW50IGFuZCBzcGVjaWZpYyByZW1vdGUgJyArXG4gICAgICAgICAgJ2VuZHBvaW50LicsXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaGFubmVscy5nZXQocmVtb3RlSWQpLnN0b3AoKTtcbiAgICBjaGFubmVscy5kZWxldGUocmVtb3RlSWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZ2V0U3RhdHNcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIEdldCBzdGF0cyBvZiB1bmRlcmx5aW5nIFBlZXJDb25uZWN0aW9uLlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlbW90ZUlkIFJlbW90ZSBlbmRwb2ludCdzIElELlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJUQ1N0YXRzUmVwb3J0LCBFcnJvcj59IEl0IHJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHdpdGggYW4gUlRDU3RhdHNSZXBvcnQgb3IgcmVqZWN0IHdpdGggYW4gRXJyb3IgaWYgdGhlcmUgaXMgbm8gY29ubmVjdGlvbiB3aXRoIHNwZWNpZmljIHVzZXIuXG4gICAqL1xuICB0aGlzLmdldFN0YXRzID0gZnVuY3Rpb24ocmVtb3RlSWQpIHtcbiAgICBpZiAoIWNoYW5uZWxzLmhhcyhyZW1vdGVJZCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSxcbiAgICAgICAgICAnTm8gUGVlckNvbm5lY3Rpb24gYmV0d2VlbiBjdXJyZW50IGVuZHBvaW50IGFuZCBzcGVjaWZpYyByZW1vdGUgJyArXG4gICAgICAgICAgJ2VuZHBvaW50LicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5uZWxzLmdldChyZW1vdGVJZCkuZ2V0U3RhdHMoKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGdldFBlZXJDb25uZWN0aW9uXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBHZXQgdW5kZXJseWluZyBQZWVyQ29ubmVjdGlvbi5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZW1vdGVJZCBSZW1vdGUgZW5kcG9pbnQncyBJRC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSVENQZWVyQ29ubmVjdGlvbiwgRXJyb3I+fSBJdCByZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZFxuICAgKiAgICAgd2l0aCBhbiBSVENQZWVyQ29ubmVjdGlvbiBvciByZWplY3Qgd2l0aCBhbiBFcnJvciBpZiB0aGVyZSBpcyBub1xuICAgKiAgICAgY29ubmVjdGlvbiB3aXRoIHNwZWNpZmljIHVzZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLmdldFBlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24ocmVtb3RlSWQpIHtcbiAgICBpZiAoIWNoYW5uZWxzLmhhcyhyZW1vdGVJZCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSxcbiAgICAgICAgICAnTm8gUGVlckNvbm5lY3Rpb24gYmV0d2VlbiBjdXJyZW50IGVuZHBvaW50IGFuZCBzcGVjaWZpYyByZW1vdGUgJyArXG4gICAgICAgICAgICAgICdlbmRwb2ludC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFubmVscy5nZXQocmVtb3RlSWQpLnBlZXJDb25uZWN0aW9uO1xuICB9O1xuXG4gIGNvbnN0IHNlbmRTaWduYWxpbmdNZXNzYWdlID0gZnVuY3Rpb24ocmVtb3RlSWQsIGNvbm5lY3Rpb25JZCwgdHlwZSwgbWVzc2FnZSkge1xuICAgIGNvbnN0IG1zZyA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBjb25uZWN0aW9uSWQsXG4gICAgfTtcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgbXNnLmRhdGEgPSBtZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4gc2lnbmFsaW5nLnNlbmQocmVtb3RlSWQsIEpTT04uc3RyaW5naWZ5KG1zZykpLmNhdGNoKChlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRocm93IEVycm9yTW9kdWxlLmdldEVycm9yQnlDb2RlKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFJldHVybiB0cnVlIGlmIGN1cnJlbnQgZW5kcG9pbnQgaXMgYW4gaW1wb2xpdGUgcGVlciwgd2hpY2ggY29udHJvbHMgdGhlXG4gIC8vIHNlc3Npb24uXG4gIGNvbnN0IGlzUG9saXRlUGVlciA9IGZ1bmN0aW9uKHJlbW90ZUlkKSB7XG4gICAgcmV0dXJuIG15SWQgPCByZW1vdGVJZDtcbiAgfTtcblxuICAvLyBJZiBhIGNvbm5lY3Rpb24gd2l0aCByZW1vdGVJZCB3aXRoIGEgZGlmZmVyZW50IHNlc3Npb24gSUQgZXhpc3RzLCBpdCB3aWxsXG4gIC8vIGJlIHN0b3BwZWQgYW5kIGEgbmV3IGNvbm5lY3Rpb24gd2lsbCBiZSBjcmVhdGVkLlxuICBjb25zdCBnZXRPckNyZWF0ZUNoYW5uZWwgPSBmdW5jdGlvbihyZW1vdGVJZCwgY29ubmVjdGlvbklkKSB7XG4gICAgLy8gSWYgYGNvbm5lY3Rpb25JZGAgaXMgbm90IGRlZmluZWQsIHVzZSB0aGUgbGF0ZXN0IG9uZSBvciBnZW5lcmF0ZSBhIG5ld1xuICAgIC8vIG9uZS5cbiAgICBpZiAoIWNvbm5lY3Rpb25JZCAmJiBjb25uZWN0aW9uSWRzLmhhcyhyZW1vdGVJZCkpIHtcbiAgICAgIGNvbm5lY3Rpb25JZCA9IGNvbm5lY3Rpb25JZHMuZ2V0KHJlbW90ZUlkKTtcbiAgICB9XG4gICAgLy8gRGVsZXRlIG9sZCBjaGFubmVsIGlmIGNvbm5lY3Rpb24gZG9lc24ndCBtYXRjaC5cbiAgICBpZiAoY29ubmVjdGlvbklkcy5oYXMocmVtb3RlSWQpICYmXG4gICAgICAgIGNvbm5lY3Rpb25JZHMuZ2V0KHJlbW90ZUlkKSAhPSBjb25uZWN0aW9uSWQpIHtcbiAgICAgIHNlbGYuc3RvcChyZW1vdGVJZCk7XG4gICAgfVxuICAgIGlmICghY29ubmVjdGlvbklkKSB7XG4gICAgICBjb25zdCBjb25uZWN0aW9uSWRMaW1pdCA9IDEwMDAwMDtcbiAgICAgIGNvbm5lY3Rpb25JZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNvbm5lY3Rpb25JZExpbWl0KTtcbiAgICB9XG4gICAgY29ubmVjdGlvbklkcy5zZXQocmVtb3RlSWQsIGNvbm5lY3Rpb25JZCk7XG4gICAgaWYgKCFjaGFubmVscy5oYXMocmVtb3RlSWQpKSB7XG4gICAgICAvLyBDb25zdHJ1Y3QgYW4gc2lnbmFsaW5nIHNlbmRlci9yZWNlaXZlciBmb3IgUDJQUGVlckNvbm5lY3Rpb24uXG4gICAgICBjb25zdCBzaWduYWxpbmdGb3JDaGFubmVsID0gT2JqZWN0LmNyZWF0ZShFdmVudERpc3BhdGNoZXIpO1xuICAgICAgc2lnbmFsaW5nRm9yQ2hhbm5lbC5zZW5kU2lnbmFsaW5nTWVzc2FnZSA9IHNlbmRTaWduYWxpbmdNZXNzYWdlO1xuICAgICAgY29uc3QgcGNjID0gbmV3IFAyUFBlZXJDb25uZWN0aW9uQ2hhbm5lbChcbiAgICAgICAgICBjb25maWcsIG15SWQsIHJlbW90ZUlkLCBjb25uZWN0aW9uSWQsIHNpZ25hbGluZ0ZvckNoYW5uZWwpO1xuICAgICAgcGNjLmFkZEV2ZW50TGlzdGVuZXIoJ3N0cmVhbWFkZGVkJywgKHN0cmVhbUV2ZW50KT0+e1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICAgICAgfSk7XG4gICAgICBwY2MuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZXJlY2VpdmVkJywgKG1lc3NhZ2VFdmVudCk9PntcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG1lc3NhZ2VFdmVudCk7XG4gICAgICB9KTtcbiAgICAgIHBjYy5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgaWYgKGNoYW5uZWxzLmhhcyhyZW1vdGVJZCkpIHtcbiAgICAgICAgICBjaGFubmVscy5kZWxldGUocmVtb3RlSWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3Rpb25JZHMuZGVsZXRlKHJlbW90ZUlkKTtcbiAgICAgIH0pO1xuICAgICAgY2hhbm5lbHMuc2V0KHJlbW90ZUlkLCBwY2MpO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbm5lbHMuZ2V0KHJlbW90ZUlkKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFAyUENsaWVudDtcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLy8gVGhpcyBmaWxlIGRvZXNuJ3QgaGF2ZSBwdWJsaWMgQVBJcy5cbi8qIGVzbGludC1kaXNhYmxlIHZhbGlkLWpzZG9jICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG4vKiBnbG9iYWwgRXZlbnQsIE1hcCwgUHJvbWlzZSwgUlRDSWNlQ2FuZGlkYXRlLCBuYXZpZ2F0b3IgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyLCBNZXNzYWdlRXZlbnQsIE93dEV2ZW50fSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7UHVibGljYXRpb259IGZyb20gJy4uL2Jhc2UvcHVibGljYXRpb24uanMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vYmFzZS91dGlscy5qcyc7XG5pbXBvcnQgKiBhcyBFcnJvck1vZHVsZSBmcm9tICcuL2Vycm9yLmpzJztcbmltcG9ydCAqIGFzIFN0cmVhbU1vZHVsZSBmcm9tICcuLi9iYXNlL3N0cmVhbS5qcyc7XG5pbXBvcnQgKiBhcyBTZHBVdGlscyBmcm9tICcuLi9iYXNlL3NkcHV0aWxzLmpzJztcbmltcG9ydCB7VHJhbnNwb3J0U2V0dGluZ3MsIFRyYW5zcG9ydFR5cGV9IGZyb20gJy4uL2Jhc2UvdHJhbnNwb3J0LmpzJztcblxuLyoqXG4gKiBAY2xhc3MgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsRXZlbnRcbiAqIEBkZXNjIEV2ZW50IGZvciBTdHJlYW0uXG4gKiBAbWVtYmVyT2YgT3d0LlAyUFxuICogQHByaXZhdGVcbiAqICovXG5leHBvcnQgY2xhc3MgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jICovXG4gIGNvbnN0cnVjdG9yKGluaXQpIHtcbiAgICBzdXBlcihpbml0KTtcbiAgICB0aGlzLnN0cmVhbSA9IGluaXQuc3RyZWFtO1xuICB9XG59XG5cbmNvbnN0IERhdGFDaGFubmVsTGFiZWwgPSB7XG4gIE1FU1NBR0U6ICdtZXNzYWdlJyxcbiAgRklMRTogJ2ZpbGUnLFxufTtcblxuY29uc3QgU2lnbmFsaW5nVHlwZSA9IHtcbiAgREVOSUVEOiAnY2hhdC1kZW5pZWQnLFxuICBDTE9TRUQ6ICdjaGF0LWNsb3NlZCcsXG4gIE5FR09USUFUSU9OX05FRURFRDogJ2NoYXQtbmVnb3RpYXRpb24tbmVlZGVkJyxcbiAgVFJBQ0tfU09VUkNFUzogJ2NoYXQtdHJhY2stc291cmNlcycsXG4gIFNUUkVBTV9JTkZPOiAnY2hhdC1zdHJlYW0taW5mbycsXG4gIFNEUDogJ2NoYXQtc2lnbmFsJyxcbiAgVFJBQ0tTX0FEREVEOiAnY2hhdC10cmFja3MtYWRkZWQnLFxuICBUUkFDS1NfUkVNT1ZFRDogJ2NoYXQtdHJhY2tzLXJlbW92ZWQnLFxuICBEQVRBX1JFQ0VJVkVEOiAnY2hhdC1kYXRhLXJlY2VpdmVkJyxcbiAgVUE6ICdjaGF0LXVhJyxcbn07XG5cbmNvbnN0IHN5c0luZm8gPSBVdGlscy5zeXNJbmZvKCk7XG5cbi8qKlxuICogQGNsYXNzIFAyUFBlZXJDb25uZWN0aW9uQ2hhbm5lbFxuICogQGRlc2MgQSBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWwgbWFuYWdlcyBhIFBlZXJDb25uZWN0aW9uIG9iamVjdCwgaGFuZGxlcyBhbGxcbiAqIGludGVyYWN0aW9ucyBiZXR3ZWVuIHRoaXMgZW5kcG9pbnQgKGxvY2FsKSBhbmQgYSByZW1vdGUgZW5kcG9pbnQuIE9ubHkgb25lXG4gKiBQZWVyQ29ubmVjdGlvbkNoYW5uZWwgaXMgYWxpdmUgZm9yIGEgbG9jYWwgLSByZW1vdGUgZW5kcG9pbnQgcGFpciBhdCBhbnlcbiAqIGdpdmVuIHRpbWUuXG4gKiBAbWVtYmVyT2YgT3d0LlAyUFxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgLy8gfHNpZ25hbGluZ3wgaXMgYW4gb2JqZWN0IGhhcyBhIG1ldGhvZCB8c2VuZFNpZ25hbGluZ01lc3NhZ2V8LlxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvYyAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIGNvbmZpZywgbG9jYWxJZCwgcmVtb3RlSWQsIGNvbm5lY3Rpb25JZCwgc2lnbmFsaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fcmVtb3RlSWQgPSByZW1vdGVJZDtcbiAgICB0aGlzLl9jb25uZWN0aW9uSWQgPSBjb25uZWN0aW9uSWQ7XG4gICAgdGhpcy5fc2lnbmFsaW5nID0gc2lnbmFsaW5nO1xuICAgIHRoaXMuX3BjID0gbnVsbDtcbiAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1zID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgc3RyZWFtcyBwdWJsaXNoZWQsIHZhbHVlIGlzIGl0cyBwdWJsaWNhdGlvbi5cbiAgICB0aGlzLl9wZW5kaW5nU3RyZWFtcyA9IFtdOyAvLyBTdHJlYW1zIGdvaW5nIHRvIGJlIGFkZGVkIHRvIFBlZXJDb25uZWN0aW9uLlxuICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zID0gW107IC8vIFN0cmVhbXMgaGF2ZSBiZWVuIGFkZGVkIHRvIFBlZXJDb25uZWN0aW9uLCBidXQgZG9lcyBub3QgcmVjZWl2ZSBhY2sgZnJvbSByZW1vdGUgc2lkZS5cbiAgICB0aGlzLl9wZW5kaW5nVW5wdWJsaXNoU3RyZWFtcyA9IFtdOyAvLyBTdHJlYW1zIGdvaW5nIHRvIGJlIHJlbW92ZWQuXG4gICAgLy8gS2V5IGlzIE1lZGlhU3RyZWFtJ3MgSUQsIHZhbHVlIGlzIGFuIG9iamVjdCB7c291cmNlOnthdWRpbzpzdHJpbmcsIHZpZGVvOnN0cmluZ30sIGF0dHJpYnV0ZXM6IG9iamVjdCwgc3RyZWFtOiBSZW1vdGVTdHJlYW0sIG1lZGlhU3RyZWFtOiBNZWRpYVN0cmVhbX0uIGBzdHJlYW1gIGFuZCBgbWVkaWFTdHJlYW1gIHdpbGwgYmUgc2V0IHdoZW4gYHRyYWNrYCBldmVudCBpcyBmaXJlZCBvbiBgUlRDUGVlckNvbm5lY3Rpb25gLiBgbWVkaWFTdHJlYW1gIHdpbGwgYmUgYG51bGxgIGFmdGVyIGBzdHJlYW1hZGRlZGAgZXZlbnQgaXMgZmlyZWQgb24gYFAyUENsaWVudGAuIE90aGVyIHByb3BlcnRlcyB3aWxsIGJlIHNldCB1cG9uIGBTVFJFQU1fSU5GT2AgZXZlbnQgZnJvbSBzaWduYWxpbmcgY2hhbm5lbC5cbiAgICB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuX3JlbW90ZVN0cmVhbXMgPSBbXTtcbiAgICB0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8gPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBNZWRpYVN0cmVhbVRyYWNrJ3MgSUQsIHZhbHVlIGlzIHNvdXJjZSBpbmZvLlxuICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIE1lZGlhU3RyZWFtJ3MgSUQsIHZhbHVlIGlzIGFuIG9iamVjdCBoYXMgfHJlc29sdmV8IGFuZCB8cmVqZWN0fC5cbiAgICB0aGlzLl91bnB1Ymxpc2hQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIE1lZGlhU3RyZWFtJ3MgSUQsIHZhbHVlIGlzIGFuIG9iamVjdCBoYXMgfHJlc29sdmV8IGFuZCB8cmVqZWN0fC5cbiAgICB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtVHJhY2tzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgTWVkaWFTdHJlYW0ncyBJRCwgdmFsdWUgaXMgYW4gYXJyYXkgb2YgdGhlIElEIG9mIGl0cyBNZWRpYVN0cmVhbVRyYWNrcyB0aGF0IGhhdmVuJ3QgYmVlbiBhY2tlZC5cbiAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1UcmFja3MgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBNZWRpYVN0cmVhbSdzIElELCB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0aGUgSUQgb2YgaXRzIE1lZGlhU3RyZWFtVHJhY2tzIHRoYXQgaGF2ZW4ndCBiZWVuIHJlbW92ZWQuXG4gICAgdGhpcy5faXNOZWdvdGlhdGlvbk5lZWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1JlbW92ZVN0cmVhbSA9IHRydWU7XG4gICAgdGhpcy5fcmVtb3RlU2lkZUlnbm9yZXNEYXRhQ2hhbm5lbEFja3MgPSBmYWxzZTtcbiAgICB0aGlzLl9yZW1vdGVJY2VDYW5kaWRhdGVzID0gW107XG4gICAgdGhpcy5fZGF0YUNoYW5uZWxzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgZGF0YSBjaGFubmVsJ3MgbGFiZWwsIHZhbHVlIGlzIGEgUlRDRGF0YUNoYW5uZWwuXG4gICAgdGhpcy5fcGVuZGluZ01lc3NhZ2VzID0gW107XG4gICAgdGhpcy5fZGF0YVNlcSA9IDE7IC8vIFNlcXVlbmNlIG51bWJlciBmb3IgZGF0YSBjaGFubmVsIG1lc3NhZ2VzLlxuICAgIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBkYXRhIHNlcXVlbmNlIG51bWJlciwgdmFsdWUgaXMgYW4gb2JqZWN0IGhhcyB8cmVzb2x2ZXwgYW5kIHxyZWplY3R8LlxuICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMgPSBbXTsgLy8gVHJhY2tzIHRoYXQgaGF2ZSBiZWVuIGFkZGVkIGFmdGVyIHJlY2VpdmluZyByZW1vdGUgU0RQIGJ1dCBiZWZvcmUgY29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZC4gRHJhaW5pbmcgdGhlc2UgbWVzc2FnZXMgd2hlbiBJQ0UgY29ubmVjdGlvbiBzdGF0ZSBpcyBjb25uZWN0ZWQuXG4gICAgdGhpcy5faXNQb2xpdGVQZWVyID0gbG9jYWxJZCA8IHJlbW90ZUlkO1xuICAgIHRoaXMuX3NldHRpbmdMb2NhbFNkcCA9IGZhbHNlO1xuICAgIHRoaXMuX3NldHRpbmdSZW1vdGVTZHAgPSBmYWxzZTtcbiAgICB0aGlzLl9kaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NyZWF0ZVBlZXJDb25uZWN0aW9uKCk7XG4gICAgdGhpcy5fc2VuZFVhKHN5c0luZm8pO1xuICB9XG5cbiAgZ2V0IHBlZXJDb25uZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wYztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcHVibGlzaFxuICAgKiBAZGVzYyBQdWJsaXNoIGEgc3RyZWFtIHRvIHRoZSByZW1vdGUgZW5kcG9pbnQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwdWJsaXNoKHN0cmVhbSkge1xuICAgIGlmICghKHN0cmVhbSBpbnN0YW5jZW9mIFN0cmVhbU1vZHVsZS5Mb2NhbFN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHN0cmVhbS4nKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wdWJsaXNoZWRTdHJlYW1zLmhhcyhzdHJlYW0pKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lMTEVHQUxfQVJHVU1FTlQsXG4gICAgICAgICAgJ0R1cGxpY2F0ZWQgc3RyZWFtLicpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FyZUFsbFRyYWNrc0VuZGVkKHN0cmVhbS5tZWRpYVN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSxcbiAgICAgICAgICAnQWxsIHRyYWNrcyBhcmUgZW5kZWQuJykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2VuZFN0cmVhbUluZm8oc3RyZWFtKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZFN0cmVhbShzdHJlYW0ubWVkaWFTdHJlYW0pO1xuICAgICAgICB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgICAgIGNvbnN0IHRyYWNrSWRzID0gQXJyYXkuZnJvbShzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCksXG4gICAgICAgICAgICAodHJhY2spID0+IHRyYWNrLmlkKTtcbiAgICAgICAgdGhpcy5fcHVibGlzaGluZ1N0cmVhbVRyYWNrcy5zZXQoc3RyZWFtLm1lZGlhU3RyZWFtLmlkLFxuICAgICAgICAgICAgdHJhY2tJZHMpO1xuICAgICAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuc2V0KHN0cmVhbS5tZWRpYVN0cmVhbS5pZCwge1xuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHNlbmRcbiAgICogQGRlc2MgU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIHJlbW90ZSBlbmRwb2ludC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNlbmQobWVzc2FnZSkge1xuICAgIGlmICghKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1lc3NhZ2UuJykpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaWQ6IHRoaXMuX2RhdGFTZXErKyxcbiAgICAgIGRhdGE6IG1lc3NhZ2UsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuX2RhdGFDaGFubmVscy5oYXMoRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKSkge1xuICAgICAgdGhpcy5fY3JlYXRlRGF0YUNoYW5uZWwoRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYyA9IHRoaXMuX2RhdGFDaGFubmVscy5nZXQoRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKTtcbiAgICBpZiAoZGMucmVhZHlTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICB0aGlzLl9kYXRhQ2hhbm5lbHMuZ2V0KERhdGFDaGFubmVsTGFiZWwuTUVTU0FHRSlcbiAgICAgICAgICAuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BlbmRpbmdNZXNzYWdlcy5wdXNoKGRhdGEpO1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5fc2VuZERhdGFQcm9taXNlcy5zZXQoZGF0YS5pZCwge1xuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHN0b3BcbiAgICogQGRlc2MgU3RvcCB0aGUgY29ubmVjdGlvbiB3aXRoIHJlbW90ZSBlbmRwb2ludC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5fc3RvcCh1bmRlZmluZWQsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBnZXRTdGF0c1xuICAgKiBAZGVzYyBHZXQgc3RhdHMgZm9yIGEgc3BlY2lmaWMgTWVkaWFTdHJlYW0uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTdGF0cyhtZWRpYVN0cmVhbSkge1xuICAgIGlmICh0aGlzLl9wYykge1xuICAgICAgaWYgKG1lZGlhU3RyZWFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BjLmdldFN0YXRzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0cmFja3NTdGF0c1JlcG9ydHMgPSBbXTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFttZWRpYVN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0cmFjaykgPT4ge1xuICAgICAgICAgIHRoaXMuX2dldFN0YXRzKHRyYWNrLCB0cmFja3NTdGF0c1JlcG9ydHMpO1xuICAgICAgICB9KV0pLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cmFja3NTdGF0c1JlcG9ydHMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUpKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0U3RhdHMobWVkaWFTdHJlYW1UcmFjaywgcmVwb3J0c1Jlc3VsdCkge1xuICAgIHJldHVybiB0aGlzLl9wYy5nZXRTdGF0cyhtZWRpYVN0cmVhbVRyYWNrKS50aGVuKFxuICAgICAgICAoc3RhdHNSZXBvcnQpID0+IHtcbiAgICAgICAgICByZXBvcnRzUmVzdWx0LnB1c2goc3RhdHNSZXBvcnQpO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX2FkZFN0cmVhbVxuICAgKiBAZGVzYyBDcmVhdGUgUlRDUnRwU2VuZGVycyBmb3IgYWxsIHRyYWNrcyBpbiB0aGUgc3RyZWFtLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FkZFN0cmVhbShzdHJlYW0pIHtcbiAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHN0cmVhbS5nZXRUcmFja3MoKSkge1xuICAgICAgdGhpcy5fcGMuYWRkVHJhbnNjZWl2ZXIoXG4gICAgICAgICAgdHJhY2ssIHtkaXJlY3Rpb246ICdzZW5kb25seScsIHN0cmVhbXM6IFtzdHJlYW1dfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBvbk1lc3NhZ2VcbiAgICogQGRlc2MgVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IFAyUENsaWVudCB3aGVuIHRoZXJlIGlzIG5ldyBzaWduYWxpbmcgbWVzc2FnZSBhcnJpdmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICB0aGlzLl9TaWduYWxpbmdNZXNzc2FnZUhhbmRsZXIobWVzc2FnZSk7XG4gIH1cblxuICBfc2VuZFNkcChzZHApIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKFxuICAgICAgICB0aGlzLl9yZW1vdGVJZCwgdGhpcy5fY29ubmVjdGlvbklkLCBTaWduYWxpbmdUeXBlLlNEUCwgc2RwKTtcbiAgfVxuXG4gIF9zZW5kVWEoc3lzSW5mbykge1xuICAgIGNvbnN0IHVhID0ge3Nkazogc3lzSW5mby5zZGssIGNhcGFiaWxpdGllczogc3lzSW5mby5jYXBhYmlsaXRpZXN9O1xuICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuVUEsIHVhKTtcbiAgfVxuXG4gIF9zZW5kU2lnbmFsaW5nTWVzc2FnZSh0eXBlLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZShcbiAgICAgICAgdGhpcy5fcmVtb3RlSWQsIHRoaXMuX2Nvbm5lY3Rpb25JZCwgdHlwZSwgbWVzc2FnZSk7XG4gIH1cblxuICBfU2lnbmFsaW5nTWVzc3NhZ2VIYW5kbGVyKG1lc3NhZ2UpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0NoYW5uZWwgcmVjZWl2ZWQgbWVzc2FnZTogJyArIG1lc3NhZ2UpO1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuVUE6XG4gICAgICAgIHRoaXMuX2hhbmRsZVJlbW90ZUNhcGFiaWxpdHkobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuVFJBQ0tfU09VUkNFUzpcbiAgICAgICAgdGhpcy5fdHJhY2tTb3VyY2VzSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2lnbmFsaW5nVHlwZS5TVFJFQU1fSU5GTzpcbiAgICAgICAgdGhpcy5fc3RyZWFtSW5mb0hhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuU0RQOlxuICAgICAgICB0aGlzLl9zZHBIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLlRSQUNLU19BRERFRDpcbiAgICAgICAgdGhpcy5fdHJhY2tzQWRkZWRIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLlRSQUNLU19SRU1PVkVEOlxuICAgICAgICB0aGlzLl90cmFja3NSZW1vdmVkSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2lnbmFsaW5nVHlwZS5EQVRBX1JFQ0VJVkVEOlxuICAgICAgICB0aGlzLl9kYXRhUmVjZWl2ZWRIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLkNMT1NFRDpcbiAgICAgICAgdGhpcy5fY2hhdENsb3NlZEhhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBMb2dnZXIuZXJyb3IoJ0ludmFsaWQgc2lnbmFsaW5nIG1lc3NhZ2UgcmVjZWl2ZWQuIFR5cGU6ICcgK1xuICAgICAgICAgICAgbWVzc2FnZS50eXBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF90cmFja3NBZGRlZEhhbmRsZXJcbiAgICogQGRlc2MgSGFuZGxlIHRyYWNrIGFkZGVkIGV2ZW50IGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdHJhY2tzQWRkZWRIYW5kbGVyKGlkcykge1xuICAgIC8vIEN1cnJlbnRseSwgfGlkc3wgY29udGFpbnMgYWxsIHRyYWNrIElEcyBvZiBhIE1lZGlhU3RyZWFtLiBGb2xsb3dpbmcgYWxnb3JpdGhtIGFsc28gaGFuZGxlcyB8aWRzfCBpcyBhIHBhcnQgb2YgYSBNZWRpYVN0cmVhbSdzIHRyYWNrcy5cbiAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgLy8gSXQgY291bGQgYmUgYSBwcm9ibGVtIGlmIHRoZXJlIGlzIGEgdHJhY2sgcHVibGlzaGVkIHdpdGggZGlmZmVyZW50IE1lZGlhU3RyZWFtcywgbW92aW5nIHRvIG1pZC5cbiAgICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1UcmFja3MuZm9yRWFjaCgobWVkaWFUcmFja0lkcywgbWVkaWFTdHJlYW1JZCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lZGlhVHJhY2tJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobWVkaWFUcmFja0lkc1tpXSA9PT0gaWQpIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdGhpcyB0cmFjayBmcm9tIHB1Ymxpc2hpbmcgdHJhY2tzIHRvIHB1Ymxpc2hlZCB0cmFja3MuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3B1Ymxpc2hlZFN0cmVhbVRyYWNrcy5oYXMobWVkaWFTdHJlYW1JZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtVHJhY2tzLnNldChtZWRpYVN0cmVhbUlkLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1UcmFja3MuZ2V0KG1lZGlhU3RyZWFtSWQpLnB1c2goXG4gICAgICAgICAgICAgICAgbWVkaWFUcmFja0lkc1tpXSk7XG4gICAgICAgICAgICBtZWRpYVRyYWNrSWRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUmVzb2x2aW5nIGNlcnRhaW4gcHVibGlzaCBwcm9taXNlIHdoZW4gcmVtb3RlIGVuZHBvaW50IHJlY2VpdmVkIGFsbCB0cmFja3Mgb2YgYSBNZWRpYVN0cmVhbS5cbiAgICAgICAgICBpZiAobWVkaWFUcmFja0lkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9wdWJsaXNoUHJvbWlzZXMuaGFzKG1lZGlhU3RyZWFtSWQpKSB7XG4gICAgICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCB0aGUgcHJvbWlzZSBmb3IgcHVibGlzaGluZyAnICtcbiAgICAgICAgICAgICAgICBtZWRpYVN0cmVhbUlkKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJlYW1JbmRleCA9IHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5tZWRpYVN0cmVhbS5pZCA9PSBtZWRpYVN0cmVhbUlkKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmVhbSA9IHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zW3RhcmdldFN0cmVhbUluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zLnNwbGljZSh0YXJnZXRTdHJlYW1JbmRleCwgMSk7XG5cbiAgICAgICAgICAgIC8vIFNldCB0cmFuc2NlaXZlcnMgZm9yIFB1YmxpY2F0aW9uLlxuICAgICAgICAgICAgY29uc3QgdHJhbnNwb3J0ID1cbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNwb3J0U2V0dGluZ3MoVHJhbnNwb3J0VHlwZS5XRUJSVEMsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQucnRwVHJhbnNjZWl2ZXJzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYW5zY2VpdmVyIG9mIHRoaXMuX3BjLmdldFRyYW5zY2VpdmVycygpKSB7XG4gICAgICAgICAgICAgIGlmICh0cmFuc2NlaXZlci5zZW5kZXI/LnRyYWNrIGluXG4gICAgICAgICAgICAgICAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1UcmFja3MuZ2V0KG1lZGlhU3RyZWFtSWQpKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0LnJ0cFRyYW5zY2VpdmVycy5wdXNoKHRyYW5zY2VpdmVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwdWJsaWNhdGlvbiA9IG5ldyBQdWJsaWNhdGlvbihcbiAgICAgICAgICAgICAgICBpZCwgdHJhbnNwb3J0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl91bnB1Ymxpc2godGFyZ2V0U3RyZWFtKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHVibGljYXRpb24uZGlzcGF0Y2hFdmVudChuZXcgT3d0RXZlbnQoJ2VuZGVkJykpO1xuICAgICAgICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gVXNlIGRlYnVnIG1vZGUgYmVjYXVzZSB0aGlzIGVycm9yIHVzdWFsbHkgZG9lc24ndCBibG9jayBzdG9wcGluZyBhIHB1YmxpY2F0aW9uLlxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoXG4gICAgICAgICAgICAgICAgICAgICAgICAnU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkIGR1cmluZyBzdG9wcGluZyBhICcrXG4gICAgICAgICAgICAgICAgICAgICAgICAncHVibGljYXRpb24uICcgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFN0cmVhbSB8fCAhdGFyZ2V0U3RyZWFtLm1lZGlhU3RyZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1B1YmxpY2F0aW9uIGlzIG5vdCBhdmFpbGFibGUuJykpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHModGFyZ2V0U3RyZWFtLm1lZGlhU3RyZWFtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuc2V0KHRhcmdldFN0cmVhbSwgcHVibGljYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5fcHVibGlzaFByb21pc2VzLmdldChtZWRpYVN0cmVhbUlkKS5yZXNvbHZlKHB1YmxpY2F0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5kZWxldGUobWVkaWFTdHJlYW1JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF90cmFja3NSZW1vdmVkSGFuZGxlclxuICAgKiBAZGVzYyBIYW5kbGUgdHJhY2sgcmVtb3ZlZCBldmVudCBmcm9tIHJlbW90ZSBzaWRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3RyYWNrc1JlbW92ZWRIYW5kbGVyKGlkcykge1xuICAgIC8vIEN1cnJlbnRseSwgfGlkc3wgY29udGFpbnMgYWxsIHRyYWNrIElEcyBvZiBhIE1lZGlhU3RyZWFtLiBGb2xsb3dpbmcgYWxnb3JpdGhtIGFsc28gaGFuZGxlcyB8aWRzfCBpcyBhIHBhcnQgb2YgYSBNZWRpYVN0cmVhbSdzIHRyYWNrcy5cbiAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgLy8gSXQgY291bGQgYmUgYSBwcm9ibGVtIGlmIHRoZXJlIGlzIGEgdHJhY2sgcHVibGlzaGVkIHdpdGggZGlmZmVyZW50IE1lZGlhU3RyZWFtcy5cbiAgICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbVRyYWNrcy5mb3JFYWNoKChtZWRpYVRyYWNrSWRzLCBtZWRpYVN0cmVhbUlkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVkaWFUcmFja0lkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChtZWRpYVRyYWNrSWRzW2ldID09PSBpZCkge1xuICAgICAgICAgICAgbWVkaWFUcmFja0lkcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF9kYXRhUmVjZWl2ZWRIYW5kbGVyXG4gICAqIEBkZXNjIEhhbmRsZSBkYXRhIHJlY2VpdmVkIGV2ZW50IGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZGF0YVJlY2VpdmVkSGFuZGxlcihpZCkge1xuICAgIGlmICghdGhpcy5fc2VuZERhdGFQcm9taXNlcy5oYXMoaWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnUmVjZWl2ZWQgdW5rbm93biBkYXRhIHJlY2VpdmVkIG1lc3NhZ2UuIElEOiAnICsgaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZW5kRGF0YVByb21pc2VzLmdldChpZCkucmVzb2x2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX3NkcEhhbmRsZXJcbiAgICogQGRlc2MgSGFuZGxlIFNEUCByZWNlaXZlZCBldmVudCBmcm9tIHJlbW90ZSBzaWRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NkcEhhbmRsZXIoc2RwKSB7XG4gICAgaWYgKHNkcC50eXBlID09PSAnb2ZmZXInKSB7XG4gICAgICB0aGlzLl9vbk9mZmVyKHNkcCk7XG4gICAgfSBlbHNlIGlmIChzZHAudHlwZSA9PT0gJ2Fuc3dlcicpIHtcbiAgICAgIHRoaXMuX29uQW5zd2VyKHNkcCk7XG4gICAgfSBlbHNlIGlmIChzZHAudHlwZSA9PT0gJ2NhbmRpZGF0ZXMnKSB7XG4gICAgICB0aGlzLl9vblJlbW90ZUljZUNhbmRpZGF0ZShzZHApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX3RyYWNrU291cmNlc0hhbmRsZXJcbiAgICogQGRlc2MgUmVjZWl2ZWQgdHJhY2sgc291cmNlIGluZm9ybWF0aW9uIGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdHJhY2tTb3VyY2VzSGFuZGxlcihkYXRhKSB7XG4gICAgZm9yIChjb25zdCBpbmZvIG9mIGRhdGEpIHtcbiAgICAgIHRoaXMuX3JlbW90ZVRyYWNrU291cmNlSW5mby5zZXQoaW5mby5pZCwgaW5mby5zb3VyY2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX3N0cmVhbUluZm9IYW5kbGVyXG4gICAqIEBkZXNjIFJlY2VpdmVkIHN0cmVhbSBpbmZvcm1hdGlvbiBmcm9tIHJlbW90ZSBzaWRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3N0cmVhbUluZm9IYW5kbGVyKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdVbmV4cGVjdGVkIHN0cmVhbSBpbmZvLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLnNldChkYXRhLmlkLCB7XG4gICAgICBzb3VyY2U6IGRhdGEuc291cmNlLFxuICAgICAgYXR0cmlidXRlczogZGF0YS5hdHRyaWJ1dGVzLFxuICAgICAgc3RyZWFtOiBudWxsLFxuICAgICAgbWVkaWFTdHJlYW06IG51bGwsXG4gICAgICB0cmFja0lkczogZGF0YS50cmFja3MsIC8vIFRyYWNrIElEcyBtYXkgbm90IG1hdGNoIGF0IHNlbmRlciBhbmQgcmVjZWl2ZXIgc2lkZXMuIEtlZXAgaXQgZm9yIGxlZ2FjeSBwb3Jwb3Nlcy5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX2NoYXRDbG9zZWRIYW5kbGVyXG4gICAqIEBkZXNjIFJlY2VpdmVkIGNoYXQgY2xvc2VkIGV2ZW50IGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2hhdENsb3NlZEhhbmRsZXIoZGF0YSkge1xuICAgIHRoaXMuX2Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9zdG9wKGRhdGEsIGZhbHNlKTtcbiAgfVxuXG4gIF9vbk9mZmVyKHNkcCkge1xuICAgIExvZ2dlci5kZWJ1ZygnQWJvdXQgdG8gc2V0IHJlbW90ZSBkZXNjcmlwdGlvbi4gU2lnbmFsaW5nIHN0YXRlOiAnICtcbiAgICAgIHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlKTtcbiAgICBpZiAodGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgIT09ICdzdGFibGUnIHx8IHRoaXMuX3NldHRpbmdMb2NhbFNkcCkge1xuICAgICAgaWYgKHRoaXMuX2lzUG9saXRlUGVlcikge1xuICAgICAgICBMb2dnZXIuZGVidWcoJ1JvbGxiYWNrLicpO1xuICAgICAgICB0aGlzLl9zZXR0aW5nTG9jYWxTZHAgPSB0cnVlO1xuICAgICAgICAvLyBzZXRMb2NhbERlc2NyaXB0aW9uKHJvbGxiYWNrKSBpcyBub3Qgc3VwcG9ydGVkIG9uIFNhZmFyaSByaWdodCBub3cuXG4gICAgICAgIC8vIFRlc3QgY2FzZSBcIldlYlJUQyBjb2xsaXNpb24gc2hvdWxkIGJlIHJlc29sdmVkLlwiIGlzIGV4cGVjdGVkIHRvIGZhaWwuXG4gICAgICAgIC8vIFNlZVxuICAgICAgICAvLyBodHRwczovL3dwdC5meWkvcmVzdWx0cy93ZWJydGMvUlRDUGVlckNvbm5lY3Rpb24tc2V0TG9jYWxEZXNjcmlwdGlvbi1yb2xsYmFjay5odG1sP3E9d2VicnRjJnJ1bl9pZD01NjYyMDYyMzIxNTk4NDY0JnJ1bl9pZD01NzU2MTM5NTIwMTMxMDcyJnJ1bl9pZD01NzU0NjM3NTU2NjQ1ODg4JnJ1bl9pZD01NzY0MzM0MDQ5Mjk2Mzg0LlxuICAgICAgICB0aGlzLl9wYy5zZXRMb2NhbERlc2NyaXB0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2V0dGluZ0xvY2FsU2RwID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKCdDb2xsaXNpb24gZGV0ZWN0ZWQuIElnbm9yZSB0aGlzIG9mZmVyLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHNkcC5zZHAgPSB0aGlzLl9zZXRSdHBTZW5kZXJPcHRpb25zKHNkcC5zZHAsIHRoaXMuX2NvbmZpZyk7XG4gICAgY29uc3Qgc2Vzc2lvbkRlc2NyaXB0aW9uID0gbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihzZHApO1xuICAgIHRoaXMuX3NldHRpbmdSZW1vdGVTZHAgPSB0cnVlO1xuICAgIHRoaXMuX3BjLnNldFJlbW90ZURlc2NyaXB0aW9uKHNlc3Npb25EZXNjcmlwdGlvbikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9zZXR0aW5nUmVtb3RlU2RwID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcmVhdGVBbmRTZW5kQW5zd2VyKCk7XG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICBMb2dnZXIuZGVidWcoJ1NldCByZW1vdGUgZGVzY3JpcHRpb24gZmFpbGVkLiBNZXNzYWdlOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdG9wKGVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vbkFuc3dlcihzZHApIHtcbiAgICBMb2dnZXIuZGVidWcoJ0Fib3V0IHRvIHNldCByZW1vdGUgZGVzY3JpcHRpb24uIFNpZ25hbGluZyBzdGF0ZTogJyArXG4gICAgICB0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSk7XG4gICAgc2RwLnNkcCA9IHRoaXMuX3NldFJ0cFNlbmRlck9wdGlvbnMoc2RwLnNkcCwgdGhpcy5fY29uZmlnKTtcbiAgICBjb25zdCBzZXNzaW9uRGVzY3JpcHRpb24gPSBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHNkcCk7XG4gICAgdGhpcy5fc2V0dGluZ1JlbW90ZVNkcCA9IHRydWU7XG4gICAgdGhpcy5fcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihcbiAgICAgICAgc2Vzc2lvbkRlc2NyaXB0aW9uKSkudGhlbigoKSA9PiB7XG4gICAgICBMb2dnZXIuZGVidWcoJ1NldCByZW1vdGUgZGVzY3JpcGl0b24gc3VjY2Vzc2Z1bGx5LicpO1xuICAgICAgdGhpcy5fc2V0dGluZ1JlbW90ZVNkcCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZHJhaW5QZW5kaW5nTWVzc2FnZXMoKTtcbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnU2V0IHJlbW90ZSBkZXNjcmlwdGlvbiBmYWlsZWQuIE1lc3NhZ2U6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHRoaXMuX3N0b3AoZXJyb3IsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uTG9jYWxJY2VDYW5kaWRhdGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XG4gICAgICB0aGlzLl9zZW5kU2RwKHtcbiAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZXMnLFxuICAgICAgICBjYW5kaWRhdGU6IGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUsXG4gICAgICAgIHNkcE1pZDogZXZlbnQuY2FuZGlkYXRlLnNkcE1pZCxcbiAgICAgICAgc2RwTUxpbmVJbmRleDogZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXgsXG4gICAgICB9KS5jYXRjaCgoZSk9PntcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ZhaWxlZCB0byBzZW5kIGNhbmRpZGF0ZS4nKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0VtcHR5IGNhbmRpZGF0ZS4nKTtcbiAgICB9XG4gIH1cblxuICBfb25SZW1vdGVUcmFja0FkZGVkKGV2ZW50KSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdSZW1vdGUgdHJhY2sgYWRkZWQuJyk7XG4gICAgZm9yIChjb25zdCBzdHJlYW0gb2YgZXZlbnQuc3RyZWFtcykge1xuICAgICAgaWYgKCF0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmhhcyhzdHJlYW0uaWQpKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdNaXNzaW5nIHN0cmVhbSBpbmZvLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KHN0cmVhbS5pZCkuc3RyZWFtKSB7XG4gICAgICAgIHRoaXMuX3NldFN0cmVhbVRvUmVtb3RlU3RyZWFtSW5mbyhzdHJlYW0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29ubmVjdGVkJyB8fFxuICAgICAgIHRoaXMuX3BjLmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgIHRoaXMuX2NoZWNrSWNlQ29ubmVjdGlvblN0YXRlQW5kRmlyZUV2ZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMuY29uY2F0KGV2ZW50LnRyYWNrLmlkKTtcbiAgICB9XG4gIH1cblxuICBfb25SZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xuICAgIExvZ2dlci5kZWJ1ZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcbiAgICBpZiAoIXRoaXMuX3JlbW90ZVN0cmVhbUluZm8uaGFzKGV2ZW50LnN0cmVhbS5pZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzb3VyY2UgaW5mbyBmb3Igc3RyZWFtICcgKyBldmVudC5zdHJlYW0uaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29ubmVjdGVkJyB8fFxuICAgICAgdGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29tcGxldGVkJykge1xuICAgICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5UUkFDS1NfQURERUQsXG4gICAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoZXZlbnQuc3RyZWFtLmlkKS50cmFja0lkcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMgPSB0aGlzLl9hZGRlZFRyYWNrSWRzLmNvbmNhdChcbiAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChldmVudC5zdHJlYW0uaWQpLnRyYWNrSWRzKTtcbiAgICB9XG4gICAgY29uc3QgYXVkaW9UcmFja1NvdXJjZSA9IHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KGV2ZW50LnN0cmVhbS5pZClcbiAgICAgICAgLnNvdXJjZS5hdWRpbztcbiAgICBjb25zdCB2aWRlb1RyYWNrU291cmNlID0gdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoZXZlbnQuc3RyZWFtLmlkKVxuICAgICAgICAuc291cmNlLnZpZGVvO1xuICAgIGNvbnN0IHNvdXJjZUluZm8gPSBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbVNvdXJjZUluZm8oYXVkaW9UcmFja1NvdXJjZSxcbiAgICAgICAgdmlkZW9UcmFja1NvdXJjZSk7XG4gICAgaWYgKFV0aWxzLmlzU2FmYXJpKCkpIHtcbiAgICAgIGlmICghc291cmNlSW5mby5hdWRpbykge1xuICAgICAgICBldmVudC5zdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5mb3JFYWNoKCh0cmFjaykgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0cmVhbS5yZW1vdmVUcmFjayh0cmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFzb3VyY2VJbmZvLnZpZGVvKSB7XG4gICAgICAgIGV2ZW50LnN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmZvckVhY2goKHRyYWNrKSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RyZWFtLnJlbW92ZVRyYWNrKHRyYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChldmVudC5zdHJlYW0uaWQpLmF0dHJpYnV0ZXM7XG4gICAgY29uc3Qgc3RyZWFtID0gbmV3IFN0cmVhbU1vZHVsZS5SZW1vdGVTdHJlYW0odW5kZWZpbmVkLCB0aGlzLl9yZW1vdGVJZCxcbiAgICAgICAgZXZlbnQuc3RyZWFtLCBzb3VyY2VJbmZvLCBhdHRyaWJ1dGVzKTtcbiAgICBpZiAoc3RyZWFtKSB7XG4gICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IFN0cmVhbU1vZHVsZS5TdHJlYW1FdmVudCgnc3RyZWFtYWRkZWQnLCB7XG4gICAgICAgIHN0cmVhbTogc3RyZWFtLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9vblJlbW90ZVN0cmVhbVJlbW92ZWQoZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ1JlbW90ZSBzdHJlYW0gcmVtb3ZlZC4nKTtcbiAgICBjb25zdCBpID0gdGhpcy5fcmVtb3RlU3RyZWFtcy5maW5kSW5kZXgoKHMpID0+IHtcbiAgICAgIHJldHVybiBzLm1lZGlhU3RyZWFtLmlkID09PSBldmVudC5zdHJlYW0uaWQ7XG4gICAgfSk7XG4gICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9yZW1vdGVTdHJlYW1zW2ldO1xuICAgICAgdGhpcy5fc3RyZWFtUmVtb3ZlZChzdHJlYW0pO1xuICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtcy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgX29uTmVnb3RpYXRpb25uZWVkZWQoKSB7XG4gICAgaWYgKHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlID09PSAnc3RhYmxlJyAmJiAhdGhpcy5fcGMuX3NldHRpbmdMb2NhbFNkcCAmJlxuICAgICAgICAhdGhpcy5fc2V0dGluZ1JlbW90ZVNkcCkge1xuICAgICAgdGhpcy5fZG9OZWdvdGlhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXNOZWdvdGlhdGlvbk5lZWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX29uUmVtb3RlSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZUluZm8pIHtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBuZXcgUlRDSWNlQ2FuZGlkYXRlKHtcbiAgICAgIGNhbmRpZGF0ZTogY2FuZGlkYXRlSW5mby5jYW5kaWRhdGUsXG4gICAgICBzZHBNaWQ6IGNhbmRpZGF0ZUluZm8uc2RwTWlkLFxuICAgICAgc2RwTUxpbmVJbmRleDogY2FuZGlkYXRlSW5mby5zZHBNTGluZUluZGV4LFxuICAgIH0pO1xuICAgIGlmICh0aGlzLl9wYy5yZW1vdGVEZXNjcmlwdGlvbiAmJiB0aGlzLl9wYy5yZW1vdGVEZXNjcmlwdGlvbi5zZHAgIT09ICcnKSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0FkZCByZW1vdGUgaWNlIGNhbmRpZGF0ZXMuJyk7XG4gICAgICB0aGlzLl9wYy5hZGRJY2VDYW5kaWRhdGUoY2FuZGlkYXRlKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Vycm9yIHByb2Nlc3NpbmcgSUNFIGNhbmRpZGF0ZTogJyArIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0NhY2hlIHJlbW90ZSBpY2UgY2FuZGlkYXRlcy4nKTtcbiAgICAgIHRoaXMuX3JlbW90ZUljZUNhbmRpZGF0ZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIF9vblNpZ25hbGluZ1N0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdTaWduYWxpbmcgc3RhdGUgY2hhbmdlZDogJyArIHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlKTtcbiAgICBpZiAodGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgPT09ICdoYXZlLXJlbW90ZS1vZmZlcicgfHxcbiAgICAgICAgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgPT09ICdzdGFibGUnKSB7XG4gICAgICB0aGlzLl9kcmFpblBlbmRpbmdSZW1vdGVJY2VDYW5kaWRhdGVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ3N0YWJsZScpIHtcbiAgICAgIHRoaXMuX25lZ290aWF0aW5nID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5faXNOZWdvdGlhdGlvbk5lZWRlZCkge1xuICAgICAgICB0aGlzLl9vbk5lZ290aWF0aW9ubmVlZGVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kcmFpblBlbmRpbmdTdHJlYW1zKCk7XG4gICAgICAgIHRoaXMuX2RyYWluUGVuZGluZ01lc3NhZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX29uSWNlQ29ubmVjdGlvblN0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY2xvc2VkJyB8fFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfV0VCUlRDX1VOS05PV04sXG4gICAgICAgICAgJ0lDRSBjb25uZWN0aW9uIGZhaWxlZCBvciBjbG9zZWQuJyk7XG4gICAgICB0aGlzLl9zdG9wKGVycm9yLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29ubmVjdGVkJyB8fFxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICB0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLlRSQUNLU19BRERFRCxcbiAgICAgICAgICB0aGlzLl9hZGRlZFRyYWNrSWRzKTtcbiAgICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMgPSBbXTtcbiAgICAgIHRoaXMuX2NoZWNrSWNlQ29ubmVjdGlvblN0YXRlQW5kRmlyZUV2ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgX29uRGF0YUNoYW5uZWxNZXNzYWdlKGV2ZW50KSB7XG4gICAgY29uc3QgbWVzc2FnZT1KU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgIGlmICghdGhpcy5fcmVtb3RlU2lkZUlnbm9yZXNEYXRhQ2hhbm5lbEFja3MpIHtcbiAgICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuREFUQV9SRUNFSVZFRCwgbWVzc2FnZS5pZCk7XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2VFdmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoJ21lc3NhZ2VyZWNlaXZlZCcsIHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UuZGF0YSxcbiAgICAgIG9yaWdpbjogdGhpcy5fcmVtb3RlSWQsXG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG1lc3NhZ2VFdmVudCk7XG4gIH1cblxuICBfb25EYXRhQ2hhbm5lbE9wZW4oZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0RhdGEgQ2hhbm5lbCBpcyBvcGVuZWQuJyk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5sYWJlbCA9PT0gRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0RhdGEgY2hhbm5lbCBmb3IgbWVzc2FnZXMgaXMgb3BlbmVkLicpO1xuICAgICAgdGhpcy5fZHJhaW5QZW5kaW5nTWVzc2FnZXMoKTtcbiAgICB9XG4gIH1cblxuICBfb25EYXRhQ2hhbm5lbENsb3NlKGV2ZW50KSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdEYXRhIENoYW5uZWwgaXMgY2xvc2VkLicpO1xuICB9XG5cbiAgX3N0cmVhbVJlbW92ZWQoc3RyZWFtKSB7XG4gICAgaWYgKCF0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmhhcyhzdHJlYW0ubWVkaWFTdHJlYW0uaWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgc3RyZWFtIGluZm8uJyk7XG4gICAgfVxuICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuVFJBQ0tTX1JFTU9WRUQsXG4gICAgICAgIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KHN0cmVhbS5tZWRpYVN0cmVhbS5pZCkudHJhY2tJZHMpO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE93dEV2ZW50KCdlbmRlZCcpO1xuICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIF9jcmVhdGVQZWVyQ29ubmVjdGlvbigpIHtcbiAgICBjb25zdCBwY0NvbmZpZ3VyYXRpb24gPSB0aGlzLl9jb25maWcucnRjQ29uZmlndXJhdGlvbiB8fCB7fTtcbiAgICB0aGlzLl9wYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZ3VyYXRpb24pO1xuICAgIHRoaXMuX3BjLm9udHJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uUmVtb3RlVHJhY2tBZGRlZC5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIHRoaXMuX3BjLm9uaWNlY2FuZGlkYXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkxvY2FsSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgdGhpcy5fcGMub25zaWduYWxpbmdzdGF0ZWNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25TaWduYWxpbmdTdGF0ZUNoYW5nZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIHRoaXMuX3BjLm9uZGF0YWNoYW5uZWwgPSAoZXZlbnQpID0+IHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnT24gZGF0YSBjaGFubmVsLicpO1xuICAgICAgLy8gU2F2ZSByZW1vdGUgY3JlYXRlZCBkYXRhIGNoYW5uZWwuXG4gICAgICBpZiAoIXRoaXMuX2RhdGFDaGFubmVscy5oYXMoZXZlbnQuY2hhbm5lbC5sYWJlbCkpIHtcbiAgICAgICAgdGhpcy5fZGF0YUNoYW5uZWxzLnNldChldmVudC5jaGFubmVsLmxhYmVsLCBldmVudC5jaGFubmVsKTtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKCdTYXZlIHJlbW90ZSBjcmVhdGVkIGRhdGEgY2hhbm5lbC4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2JpbmRFdmVudHNUb0RhdGFDaGFubmVsKGV2ZW50LmNoYW5uZWwpO1xuICAgIH07XG4gICAgdGhpcy5fcGMub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uSWNlQ29ubmVjdGlvblN0YXRlQ2hhbmdlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgdGhpcy5fcGMub25uZWdvdGlhdGlvbm5lZWRlZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuX29uTmVnb3RpYXRpb25uZWVkZWQoKTtcbiAgICB9O1xuICB9XG5cbiAgX2RyYWluUGVuZGluZ1N0cmVhbXMoKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdEcmFpbmluZyBwZW5kaW5nIHN0cmVhbXMuJyk7XG4gICAgaWYgKHRoaXMuX3BjICYmIHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlID09PSAnc3RhYmxlJykge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdQZWVyIGNvbm5lY3Rpb24gaXMgcmVhZHkgZm9yIGRyYWluaW5nIHBlbmRpbmcgc3RyZWFtcy4nKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGVuZGluZ1N0cmVhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fcGVuZGluZ1N0cmVhbXNbaV07XG4gICAgICAgIHRoaXMuX3BlbmRpbmdTdHJlYW1zLnNoaWZ0KCk7XG4gICAgICAgIGlmICghc3RyZWFtLm1lZGlhU3RyZWFtKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYWRkU3RyZWFtKHN0cmVhbS5tZWRpYVN0cmVhbSk7XG4gICAgICAgIExvZ2dlci5kZWJ1ZygnQWRkZWQgc3RyZWFtIHRvIHBlZXIgY29ubmVjdGlvbi4nKTtcbiAgICAgICAgdGhpcy5fcHVibGlzaGluZ1N0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fcGVuZGluZ1N0cmVhbXMubGVuZ3RoID0gMDtcbiAgICAgIGZvciAoY29uc3Qgc3RyZWFtIG9mIHRoaXMuX3BlbmRpbmdVbnB1Ymxpc2hTdHJlYW1zKSB7XG4gICAgICAgIGlmICghc3RyZWFtLnN0cmVhbSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fcGMuZ2V0VHJhbnNjZWl2ZXJzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5fcGMucmVtb3ZlVHJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHRyYW5zY2VpdmVyIG9mIHRoaXMuX3BjLmdldFRyYW5zY2VpdmVycygpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHN0cmVhbS5zdHJlYW0uZ2V0VHJhY2tzKCkpIHtcbiAgICAgICAgICAgICAgaWYgKHRyYW5zY2VpdmVyLnNlbmRlci50cmFjayA9PSB0cmFjaykge1xuICAgICAgICAgICAgICAgIGlmICh0cmFuc2NlaXZlci5kaXJlY3Rpb24gPT09ICdzZW5kb25seScpIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zY2VpdmVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fcGMucmVtb3ZlVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2dnZXIuZGVidWcoXG4gICAgICAgICAgICAgICdnZXRTZW5kZXIgb3IgcmVtb3ZlVHJhY2sgaXMgbm90IHN1cHBvcnRlZCwgZmFsbGJhY2sgdG8gJyArXG4gICAgICAgICAgICAgICdyZW1vdmVTdHJlYW0uJyk7XG4gICAgICAgICAgdGhpcy5fcGMucmVtb3ZlU3RyZWFtKHN0cmVhbS5zdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VucHVibGlzaFByb21pc2VzLmdldChzdHJlYW0uc3RyZWFtLmlkKS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuZGVsZXRlKHN0cmVhbSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9wZW5kaW5nVW5wdWJsaXNoU3RyZWFtcy5sZW5ndGggPSAwO1xuICAgIH1cbiAgfVxuXG4gIF9kcmFpblBlbmRpbmdSZW1vdGVJY2VDYW5kaWRhdGVzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcmVtb3RlSWNlQ2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdBZGQgY2FuZGlkYXRlJyk7XG4gICAgICB0aGlzLl9wYy5hZGRJY2VDYW5kaWRhdGUodGhpcy5fcmVtb3RlSWNlQ2FuZGlkYXRlc1tpXSkuY2F0Y2goKGVycm9yKT0+e1xuICAgICAgICBMb2dnZXIud2FybmluZygnRXJyb3IgcHJvY2Vzc2luZyBJQ0UgY2FuZGlkYXRlOiAnK2Vycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9yZW1vdGVJY2VDYW5kaWRhdGVzLmxlbmd0aCA9IDA7XG4gIH1cblxuICBfZHJhaW5QZW5kaW5nTWVzc2FnZXMoKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdEcmFpbmluZyBwZW5kaW5nIG1lc3NhZ2VzLicpO1xuICAgIGlmICh0aGlzLl9wZW5kaW5nTWVzc2FnZXMubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGMgPSB0aGlzLl9kYXRhQ2hhbm5lbHMuZ2V0KERhdGFDaGFubmVsTGFiZWwuTUVTU0FHRSk7XG4gICAgaWYgKGRjICYmIGRjLnJlYWR5U3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wZW5kaW5nTWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICAgJ1NlbmRpbmcgbWVzc2FnZSB2aWEgZGF0YSBjaGFubmVsOiAnICsgdGhpcy5fcGVuZGluZ01lc3NhZ2VzW2ldKTtcbiAgICAgICAgZGMuc2VuZChKU09OLnN0cmluZ2lmeSh0aGlzLl9wZW5kaW5nTWVzc2FnZXNbaV0pKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gdGhpcy5fcGVuZGluZ01lc3NhZ2VzW2ldLmlkO1xuICAgICAgICBpZiAodGhpcy5fc2VuZERhdGFQcm9taXNlcy5oYXMobWVzc2FnZUlkKSkge1xuICAgICAgICAgIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMuZ2V0KG1lc3NhZ2VJZCkucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9wZW5kaW5nTWVzc2FnZXMubGVuZ3RoID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BjICYmIHRoaXMuX3BjLmNvbm5lY3Rpb25TdGF0ZSAhPT0gJ2Nsb3NlZCcgJiYgIWRjKSB7XG4gICAgICB0aGlzLl9jcmVhdGVEYXRhQ2hhbm5lbChEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpO1xuICAgIH1cbiAgfVxuXG4gIF9zZW5kU3RyZWFtSW5mbyhzdHJlYW0pIHtcbiAgICBpZiAoIXN0cmVhbSB8fCAhc3RyZWFtLm1lZGlhU3RyZWFtKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lMTEVHQUxfQVJHVU1FTlQpO1xuICAgIH1cbiAgICBjb25zdCBpbmZvID0gW107XG4gICAgc3RyZWFtLm1lZGlhU3RyZWFtLmdldFRyYWNrcygpLm1hcCgodHJhY2spID0+IHtcbiAgICAgIGluZm8ucHVzaCh7XG4gICAgICAgIGlkOiB0cmFjay5pZCxcbiAgICAgICAgc291cmNlOiBzdHJlYW0uc291cmNlW3RyYWNrLmtpbmRdLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFt0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLlRSQUNLX1NPVVJDRVMsXG4gICAgICAgIGluZm8pLFxuICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuU1RSRUFNX0lORk8sIHtcbiAgICAgIGlkOiBzdHJlYW0ubWVkaWFTdHJlYW0uaWQsXG4gICAgICBhdHRyaWJ1dGVzOiBzdHJlYW0uYXR0cmlidXRlcyxcbiAgICAgIC8vIFRyYWNrIElEcyBtYXkgbm90IG1hdGNoIGF0IHNlbmRlciBhbmQgcmVjZWl2ZXIgc2lkZXMuXG4gICAgICB0cmFja3M6IEFycmF5LmZyb20oaW5mbywgKGl0ZW0pID0+IGl0ZW0uaWQpLFxuICAgICAgLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yIFNhZmFyaS4gUGxlYXNlIHVzZSB0cmFjay1zb3VyY2VzIGlmIHBvc3NpYmxlLlxuICAgICAgc291cmNlOiBzdHJlYW0uc291cmNlLFxuICAgIH0pLFxuICAgIF0pO1xuICB9XG5cbiAgX2hhbmRsZVJlbW90ZUNhcGFiaWxpdHkodWEpIHtcbiAgICBpZiAodWEuc2RrICYmIHVhLnNkayAmJiB1YS5zZGsudHlwZSA9PT0gJ0phdmFTY3JpcHQnICYmIHVhLnJ1bnRpbWUgJiZcbiAgICAgICAgdWEucnVudGltZS5uYW1lID09PSAnRmlyZWZveCcpIHtcbiAgICAgIHRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1JlbW92ZVN0cmVhbSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7IC8vIFJlbW90ZSBzaWRlIGlzIGlPUy9BbmRyb2lkL0MrKyB3aGljaCB1c2VzIEdvb2dsZSdzIFdlYlJUQyBzdGFjay5cbiAgICAgIHRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1JlbW92ZVN0cmVhbSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh1YS5jYXBhYmlsaXRpZXMpIHtcbiAgICAgIHRoaXMuX3JlbW90ZVNpZGVJZ25vcmVzRGF0YUNoYW5uZWxBY2tzID1cbiAgICAgICAgICB1YS5jYXBhYmlsaXRpZXMuaWdub3JlRGF0YUNoYW5uZWxBY2tzO1xuICAgIH1cbiAgfVxuXG4gIF9kb05lZ290aWF0ZSgpIHtcbiAgICB0aGlzLl9jcmVhdGVBbmRTZW5kT2ZmZXIoKTtcbiAgfVxuXG4gIF9zZXRDb2RlY09yZGVyKHNkcCkge1xuICAgIGlmICh0aGlzLl9jb25maWcuYXVkaW9FbmNvZGluZ3MpIHtcbiAgICAgIGNvbnN0IGF1ZGlvQ29kZWNOYW1lcyA9IEFycmF5LmZyb20odGhpcy5fY29uZmlnLmF1ZGlvRW5jb2RpbmdzLFxuICAgICAgICAgIChlbmNvZGluZ1BhcmFtZXRlcnMpID0+IGVuY29kaW5nUGFyYW1ldGVycy5jb2RlYy5uYW1lKTtcbiAgICAgIHNkcCA9IFNkcFV0aWxzLnJlb3JkZXJDb2RlY3Moc2RwLCAnYXVkaW8nLCBhdWRpb0NvZGVjTmFtZXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29uZmlnLnZpZGVvRW5jb2RpbmdzKSB7XG4gICAgICBjb25zdCB2aWRlb0NvZGVjTmFtZXMgPSBBcnJheS5mcm9tKHRoaXMuX2NvbmZpZy52aWRlb0VuY29kaW5ncyxcbiAgICAgICAgICAoZW5jb2RpbmdQYXJhbWV0ZXJzKSA9PiBlbmNvZGluZ1BhcmFtZXRlcnMuY29kZWMubmFtZSk7XG4gICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ3ZpZGVvJywgdmlkZW9Db2RlY05hbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIF9zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hdWRpb0VuY29kaW5ncyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNkcCA9IFNkcFV0aWxzLnNldE1heEJpdHJhdGUoc2RwLCBvcHRpb25zLmF1ZGlvRW5jb2RpbmdzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnZpZGVvRW5jb2RpbmdzID09PSAnb2JqZWN0Jykge1xuICAgICAgc2RwID0gU2RwVXRpbHMuc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMudmlkZW9FbmNvZGluZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX3NldFJ0cFNlbmRlck9wdGlvbnMoc2RwLCBvcHRpb25zKSB7XG4gICAgc2RwID0gdGhpcy5fc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBfc2V0UnRwUmVjZWl2ZXJPcHRpb25zKHNkcCkge1xuICAgIHNkcCA9IHRoaXMuX3NldENvZGVjT3JkZXIoc2RwKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX2NyZWF0ZUFuZFNlbmRPZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuX3BjKSB7XG4gICAgICBMb2dnZXIuZXJyb3IoJ1BlZXIgY29ubmVjdGlvbiBoYXZlIG5vdCBiZWVuIGNyZWF0ZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2lzTmVnb3RpYXRpb25OZWVkZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9wYy5jcmVhdGVPZmZlcigpLnRoZW4oKGRlc2MpID0+IHtcbiAgICAgIGRlc2Muc2RwID0gdGhpcy5fc2V0UnRwUmVjZWl2ZXJPcHRpb25zKGRlc2Muc2RwKTtcbiAgICAgIGlmICh0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ3N0YWJsZScgJiYgIXRoaXMuX3NldHRpbmdMb2NhbFNkcCAmJlxuICAgICAgICAgICF0aGlzLl9zZXR0aW5nUmVtb3RlU2RwKSB7XG4gICAgICAgIHRoaXMuX3NldHRpbmdMb2NhbFNkcCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYy5zZXRMb2NhbERlc2NyaXB0aW9uKGRlc2MpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NldHRpbmdMb2NhbFNkcCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zZW5kU2RwKHRoaXMuX3BjLmxvY2FsRGVzY3JpcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKGUubWVzc2FnZSk7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihFcnJvck1vZHVsZS5lcnJvcnMuUDJQX1dFQlJUQ19TRFAsXG4gICAgICAgICAgZS5tZXNzYWdlKTtcbiAgICAgIHRoaXMuX3N0b3AoZXJyb3IsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX2NyZWF0ZUFuZFNlbmRBbnN3ZXIoKSB7XG4gICAgdGhpcy5fZHJhaW5QZW5kaW5nU3RyZWFtcygpO1xuICAgIHRoaXMuX2lzTmVnb3RpYXRpb25OZWVkZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9wYy5jcmVhdGVBbnN3ZXIoKS50aGVuKChkZXNjKSA9PiB7XG4gICAgICBkZXNjLnNkcCA9IHRoaXMuX3NldFJ0cFJlY2VpdmVyT3B0aW9ucyhkZXNjLnNkcCk7XG4gICAgICB0aGlzLl9sb2dDdXJyZW50QW5kUGVuZGluZ0xvY2FsRGVzY3JpcHRpb24oKTtcbiAgICAgIHRoaXMuX3NldHRpbmdMb2NhbFNkcCA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5fcGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjKS50aGVuKCgpPT57XG4gICAgICAgIHRoaXMuX3NldHRpbmdMb2NhbFNkcCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSkudGhlbigoKT0+e1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbmRTZHAodGhpcy5fcGMubG9jYWxEZXNjcmlwdGlvbik7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIExvZ2dlci5lcnJvcihlLm1lc3NhZ2UgKyAnIFBsZWFzZSBjaGVjayB5b3VyIGNvZGVjIHNldHRpbmdzLicpO1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9XRUJSVENfU0RQLFxuICAgICAgICAgIGUubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdG9wKGVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9sb2dDdXJyZW50QW5kUGVuZGluZ0xvY2FsRGVzY3JpcHRpb24oKSB7XG4gICAgTG9nZ2VyLmluZm8oJ0N1cnJlbnQgZGVzY3JpcHRpb246ICcgKyB0aGlzLl9wYy5jdXJyZW50TG9jYWxEZXNjcmlwdGlvbik7XG4gICAgTG9nZ2VyLmluZm8oJ1BlbmRpbmcgZGVzY3JpcHRpb246ICcgKyB0aGlzLl9wYy5wZW5kaW5nTG9jYWxEZXNjcmlwdGlvbik7XG4gIH1cblxuICBfZ2V0QW5kRGVsZXRlVHJhY2tTb3VyY2VJbmZvKHRyYWNrcykge1xuICAgIGlmICh0cmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdHJhY2tJZCA9IHRyYWNrc1swXS5pZDtcbiAgICAgIGlmICh0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8uaGFzKHRyYWNrSWQpKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZUluZm8gPSB0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8uZ2V0KHRyYWNrSWQpO1xuICAgICAgICB0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8uZGVsZXRlKHRyYWNrSWQpO1xuICAgICAgICByZXR1cm4gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzb3VyY2UgaW5mbyBmb3IgJyArIHRyYWNrSWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF91bnB1Ymxpc2goc3RyZWFtKSB7XG4gICAgaWYgKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHwgIXRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1JlbW92ZVN0cmVhbSkge1xuICAgICAgLy8gQWN0dWFsbHkgdW5wdWJsaXNoIGlzIHN1cHBvcnRlZC4gSXQgaXMgYSBsaXR0bGUgYml0IGNvbXBsZXggc2luY2VcbiAgICAgIC8vIEZpcmVmb3ggaW1wbGVtZW50ZWQgV2ViUlRDIHNwZWMgd2hpbGUgQ2hyb21lIGltcGxlbWVudGVkIGFuIG9sZCBBUEkuXG4gICAgICBMb2dnZXIuZXJyb3IoXG4gICAgICAgICAgJ1N0b3BwaW5nIGEgcHVibGljYXRpb24gaXMgbm90IHN1cHBvcnRlZCBvbiBGaXJlZm94LiBQbGVhc2UgdXNlICcgK1xuICAgICAgICAgICdQMlBDbGllbnQuc3RvcCgpIHRvIHN0b3AgdGhlIGNvbm5lY3Rpb24gd2l0aCByZW1vdGUgZW5kcG9pbnQuJyxcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX1VOU1VQUE9SVEVEX01FVEhPRCkpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuaGFzKHN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSUxMRUdBTF9BUkdVTUVOVCkpO1xuICAgIH1cbiAgICB0aGlzLl9wZW5kaW5nVW5wdWJsaXNoU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3VucHVibGlzaFByb21pc2VzLnNldChzdHJlYW0ubWVkaWFTdHJlYW0uaWQsIHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2RyYWluUGVuZGluZ1N0cmVhbXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSB8X3BjfCBpcyBhdmFpbGFibGUgYmVmb3JlIGNhbGxpbmcgdGhpcyBtZXRob2QuXG4gIF9jcmVhdGVEYXRhQ2hhbm5lbChsYWJlbCkge1xuICAgIGlmICh0aGlzLl9kYXRhQ2hhbm5lbHMuaGFzKGxhYmVsKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0RhdGEgY2hhbm5lbCBsYWJlbGVkICcrIGxhYmVsKycgYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fcGMpIHtcbiAgICAgIExvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAnUGVlckNvbm5lY3Rpb24gaXMgbm90IGF2YWlsYWJsZSBiZWZvcmUgY3JlYXRpbmcgRGF0YUNoYW5uZWwuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIExvZ2dlci5kZWJ1ZygnQ3JlYXRlIGRhdGEgY2hhbm5lbC4nKTtcbiAgICBjb25zdCBkYyA9IHRoaXMuX3BjLmNyZWF0ZURhdGFDaGFubmVsKGxhYmVsKTtcbiAgICB0aGlzLl9iaW5kRXZlbnRzVG9EYXRhQ2hhbm5lbChkYyk7XG4gICAgdGhpcy5fZGF0YUNoYW5uZWxzLnNldChEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UsIGRjKTtcbiAgfVxuXG4gIF9iaW5kRXZlbnRzVG9EYXRhQ2hhbm5lbChkYykge1xuICAgIGRjLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25EYXRhQ2hhbm5lbE1lc3NhZ2UuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICBkYy5vbm9wZW4gPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uRGF0YUNoYW5uZWxPcGVuLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgZGMub25jbG9zZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25EYXRhQ2hhbm5lbENsb3NlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgZGMub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdEYXRhIENoYW5uZWwgRXJyb3I6ICcgKyBldmVudCk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYWxsIE1lZGlhU3RyZWFtcyBpdCBiZWxvbmdzIHRvLlxuICBfZ2V0U3RyZWFtQnlUcmFjayhtZWRpYVN0cmVhbVRyYWNrKSB7XG4gICAgY29uc3Qgc3RyZWFtcyA9IFtdO1xuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBpbmZvXSBvZiB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvKSB7XG4gICAgICBpZiAoIWluZm8uc3RyZWFtIHx8ICFpbmZvLnN0cmVhbS5tZWRpYVN0cmVhbSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgdHJhY2sgb2YgaW5mby5zdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkpIHtcbiAgICAgICAgaWYgKG1lZGlhU3RyZWFtVHJhY2sgPT09IHRyYWNrKSB7XG4gICAgICAgICAgc3RyZWFtcy5wdXNoKGluZm8uc3RyZWFtLm1lZGlhU3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyZWFtcztcbiAgfVxuXG4gIF9hcmVBbGxUcmFja3NFbmRlZChtZWRpYVN0cmVhbSkge1xuICAgIGZvciAoY29uc3QgdHJhY2sgb2YgbWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkpIHtcbiAgICAgIGlmICh0cmFjay5yZWFkeVN0YXRlID09PSAnbGl2ZScpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF9zdG9wKGVycm9yLCBub3RpZnlSZW1vdGUpIHtcbiAgICBsZXQgcHJvbWlzZUVycm9yID0gZXJyb3I7XG4gICAgaWYgKCFwcm9taXNlRXJyb3IpIHtcbiAgICAgIHByb21pc2VFcnJvciA9IG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9VTktOT1dOKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbLyogbGFiZWwgKi8sIGRjXSBvZiB0aGlzLl9kYXRhQ2hhbm5lbHMpIHtcbiAgICAgIGRjLmNsb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGFDaGFubmVscy5jbGVhcigpO1xuICAgIGlmICh0aGlzLl9wYyAmJiB0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgIT09ICdjbG9zZWQnKSB7XG4gICAgICB0aGlzLl9wYy5jbG9zZSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHJvbWlzZV0gb2YgdGhpcy5fcHVibGlzaFByb21pc2VzKSB7XG4gICAgICBwcm9taXNlLnJlamVjdChwcm9taXNlRXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuY2xlYXIoKTtcbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHJvbWlzZV0gb2YgdGhpcy5fdW5wdWJsaXNoUHJvbWlzZXMpIHtcbiAgICAgIHByb21pc2UucmVqZWN0KHByb21pc2VFcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX3VucHVibGlzaFByb21pc2VzLmNsZWFyKCk7XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHByb21pc2VdIG9mIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMpIHtcbiAgICAgIHByb21pc2UucmVqZWN0KHByb21pc2VFcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMuY2xlYXIoKTtcbiAgICAvLyBGaXJlIGVuZGVkIGV2ZW50IGlmIHB1YmxpY2F0aW9uIG9yIHJlbW90ZSBzdHJlYW0gZXhpc3RzLlxuICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuZm9yRWFjaCgocHVibGljYXRpb24pID0+IHtcbiAgICAgIHB1YmxpY2F0aW9uLmRpc3BhdGNoRXZlbnQobmV3IE93dEV2ZW50KCdlbmRlZCcpKTtcbiAgICB9KTtcbiAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1zLmNsZWFyKCk7XG4gICAgdGhpcy5fcmVtb3RlU3RyZWFtcy5mb3JFYWNoKChzdHJlYW0pID0+IHtcbiAgICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KG5ldyBPd3RFdmVudCgnZW5kZWQnKSk7XG4gICAgfSk7XG4gICAgdGhpcy5fcmVtb3RlU3RyZWFtcyA9IFtdO1xuICAgIGlmICghdGhpcy5fZGlzcG9zZWQpIHtcbiAgICAgIGlmIChub3RpZnlSZW1vdGUpIHtcbiAgICAgICAgbGV0IHNlbmRFcnJvcjtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgc2VuZEVycm9yID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgIC8vIEF2b2lkIHRvIGxlYWsgZGV0YWlsZWQgZXJyb3IgdG8gcmVtb3RlIHNpZGUuXG4gICAgICAgICAgc2VuZEVycm9yLm1lc3NhZ2UgPSAnRXJyb3IgaGFwcGVuZWQgYXQgcmVtb3RlIHNpZGUuJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLkNMT1NFRCwgc2VuZEVycm9yKS5jYXRjaChcbiAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKCdGYWlsZWQgdG8gc2VuZCBjbG9zZS4nICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdlbmRlZCcpKTtcbiAgICB9XG4gIH1cblxuICBfc2V0U3RyZWFtVG9SZW1vdGVTdHJlYW1JbmZvKG1lZGlhU3RyZWFtKSB7XG4gICAgY29uc3QgaW5mbyA9IHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KG1lZGlhU3RyZWFtLmlkKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gaW5mby5hdHRyaWJ1dGVzO1xuICAgIGNvbnN0IHNvdXJjZUluZm8gPSBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbVNvdXJjZUluZm8odGhpcy5fcmVtb3RlU3RyZWFtSW5mb1xuICAgICAgICAuZ2V0KG1lZGlhU3RyZWFtLmlkKS5zb3VyY2UuYXVkaW8sIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KFxuICAgICAgICBtZWRpYVN0cmVhbS5pZClcbiAgICAgICAgLnNvdXJjZS52aWRlbyk7XG4gICAgaW5mby5zdHJlYW0gPSBuZXcgU3RyZWFtTW9kdWxlLlJlbW90ZVN0cmVhbShcbiAgICAgICAgdW5kZWZpbmVkLCB0aGlzLl9yZW1vdGVJZCwgbWVkaWFTdHJlYW0sXG4gICAgICAgIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpO1xuICAgIGluZm8ubWVkaWFTdHJlYW0gPSBtZWRpYVN0cmVhbTtcbiAgICBjb25zdCBzdHJlYW0gPSBpbmZvLnN0cmVhbTtcbiAgICBpZiAoc3RyZWFtKSB7XG4gICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ZhaWxlZCB0byBjcmVhdGUgUmVtb3RlU3RyZWFtLicpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGVja0ljZUNvbm5lY3Rpb25TdGF0ZUFuZEZpcmVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29ubmVjdGVkJyB8fFxuICAgICAgICB0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgaW5mb10gb2YgdGhpcy5fcmVtb3RlU3RyZWFtSW5mbykge1xuICAgICAgICBpZiAoaW5mby5tZWRpYVN0cmVhbSkge1xuICAgICAgICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IFN0cmVhbU1vZHVsZS5TdHJlYW1FdmVudCgnc3RyZWFtYWRkZWQnLCB7XG4gICAgICAgICAgICBzdHJlYW06IGluZm8uc3RyZWFtLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2YgaW5mby5tZWRpYVN0cmVhbS5nZXRUcmFja3MoKSkge1xuICAgICAgICAgICAgdHJhY2suYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWVkaWFTdHJlYW1zID0gdGhpcy5fZ2V0U3RyZWFtQnlUcmFjayhldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IG1lZGlhU3RyZWFtIG9mIG1lZGlhU3RyZWFtcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hcmVBbGxUcmFja3NFbmRlZChtZWRpYVN0cmVhbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX29uUmVtb3RlU3RyZWFtUmVtb3ZlZCh7c3RyZWFtOiBtZWRpYVN0cmVhbX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuVFJBQ0tTX0FEREVELCBpbmZvLnRyYWNrSWRzKTtcbiAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChpbmZvLm1lZGlhU3RyZWFtLmlkKS5tZWRpYVN0cmVhbSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHN0cmVhbUV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWw7XG4iXX0=
