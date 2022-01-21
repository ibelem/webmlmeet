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

    _this._createPeerConnection();

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

                if (!(stream.mediaStream.getAudioTracks().length > 0 && options.audio !== false && options.audio !== null)) {
                  _context3.next = 64;
                  break;
                }

                if (stream.mediaStream.getAudioTracks().length > 1) {
                  _logger["default"].warning('Publishing a stream with multiple audio tracks is not fully' + ' supported.');
                }

                if (!(typeof options.audio !== 'boolean' && (0, _typeof2["default"])(options.audio) !== 'object')) {
                  _context3.next = 60;
                  break;
                }

                return _context3.abrupt("return", Promise.reject(new _error.ConferenceError('Type of audio options should be boolean or an object.')));

              case 60:
                mediaOptions.audio = {};
                mediaOptions.audio.source = stream.source.audio;
                _context3.next = 65;
                break;

              case 64:
                mediaOptions.audio = false;

              case 65:
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

                _context3.next = 69;
                return this._chainSdpPromise(internalId);

              case 69:
                offerOptions = {};
                transceivers = [];

                if (!(typeof this.pc.addTransceiver === 'function')) {
                  _context3.next = 94;
                  break;
                }

                if (!(mediaOptions.audio && stream.mediaStream.getAudioTracks().length > 0)) {
                  _context3.next = 82;
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
                  _context3.next = 82;
                  break;
                }

                // Firefox does not support encodings setting in addTransceiver.
                _parameters2 = transceiver.sender.getParameters();
                _parameters2.encodings = transceiverInit.sendEncodings;
                _context3.next = 82;
                return transceiver.sender.setParameters(_parameters2);

              case 82:
                if (!(mediaOptions.video && stream.mediaStream.getVideoTracks().length > 0)) {
                  _context3.next = 92;
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
                  _context3.next = 92;
                  break;
                }

                // Firefox does not support encodings setting in addTransceiver.
                _parameters3 = _transceiver.sender.getParameters();
                _parameters3.encodings = _transceiverInit.sendEncodings;
                _context3.next = 92;
                return _transceiver.sender.setParameters(_parameters3);

              case 92:
                _context3.next = 98;
                break;

              case 94:
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

              case 98:
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

              case 101:
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

              case 43:
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
        _logger["default"].warning('PeerConnection exists.');

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


  function sendSignalingMessage(_x, _x2) {
    return _sendSignalingMessage.apply(this, arguments);
  } // eslint-disable-next-line require-jsdoc


  function _sendSignalingMessage() {
    _sendSignalingMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(type, message) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", signaling.send(type, message));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _sendSignalingMessage.apply(this, arguments);
  }

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pc05hdGl2ZUZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXIuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwic3JjL3Nkay9iYXNlL2Jhc2U2NC5qcyIsInNyYy9zZGsvYmFzZS9jb2RlYy5qcyIsInNyYy9zZGsvYmFzZS9ldmVudC5qcyIsInNyYy9zZGsvYmFzZS9leHBvcnQuanMiLCJzcmMvc2RrL2Jhc2UvbG9nZ2VyLmpzIiwic3JjL3Nkay9iYXNlL21lZGlhZm9ybWF0LmpzIiwic3JjL3Nkay9iYXNlL21lZGlhc3RyZWFtLWZhY3RvcnkuanMiLCJzcmMvc2RrL2Jhc2UvcHVibGljYXRpb24uanMiLCJzcmMvc2RrL2Jhc2Uvc2RwdXRpbHMuanMiLCJzcmMvc2RrL2Jhc2Uvc3RyZWFtLmpzIiwic3JjL3Nkay9iYXNlL3RyYW5zcG9ydC5qcyIsInNyYy9zZGsvYmFzZS91dGlscy5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9jaGFubmVsLmpzIiwic3JjL3Nkay9jb25mZXJlbmNlL2NsaWVudC5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9lcnJvci5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9leHBvcnQuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvaW5mby5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9taXhlZHN0cmVhbS5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9wYXJ0aWNpcGFudC5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9xdWljY29ubmVjdGlvbi5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9zaWduYWxpbmcuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2Uvc3RyZWFtdXRpbHMuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2Uvc3Vic2NyaXB0aW9uLmpzIiwic3JjL3Nkay9leHBvcnQuanMiLCJzcmMvc2RrL3AycC9lcnJvci5qcyIsInNyYy9zZGsvcDJwL2V4cG9ydC5qcyIsInNyYy9zZGsvcDJwL3AycGNsaWVudC5qcyIsInNyYy9zZGsvcDJwL3BlZXJjb25uZWN0aW9uLWNoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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d0IsV0FBeEIsQ0FBSixFQUEwQztBQUN4QywwQkFBQSxPQUFJLENBQUMsc0JBQUwsQ0FBNEI7QUFBQyw0QkFBQSxNQUFNLEVBQUU7QUFBVCwyQkFBNUI7QUFDRDtBQUNGO0FBTndDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPMUMsbUJBUEQ7QUFRRDtBQWJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNwQixtQkFBSyxxQkFBTCxDQUEyQixhQUFhLENBQUMsWUFBekMsRUFBdUQsSUFBSSxDQUFDLFFBQTVEOztBQUNBLG1CQUFLLGlCQUFMLENBQXVCLEdBQXZCLENBQTJCLElBQUksQ0FBQyxXQUFMLENBQWlCLEVBQTVDLEVBQWdELFdBQWhELEdBQThELElBQTlEO0FBQ0EsbUJBQUssYUFBTCxDQUFtQixXQUFuQjtBQUNEO0FBQ0Y7QUFwQjhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQmhEO0FBQ0Y7OztFQXpnQ29DLHNCOztlQTRnQ3hCLHdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG52YXIgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gcmVxdWlyZShcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVGdW5jdGlvbjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxudmFyIGlzTmF0aXZlRnVuY3Rpb24gPSByZXF1aXJlKFwiLi9pc05hdGl2ZUZ1bmN0aW9uLmpzXCIpO1xuXG52YXIgY29uc3RydWN0ID0gcmVxdWlyZShcIi4vY29uc3RydWN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3dyYXBOYXRpdmVTdXBlcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiLy8gTUlUIExpY2Vuc2Vcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTIgVW5pdmVyc2lkYWQgUG9saXTDqWNuaWNhIGRlIE1hZHJpZFxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuLy8gU09GVFdBUkUuXG5cbi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLy8gVGhpcyBmaWxlIGlzIGJvcnJvd2VkIGZyb20gbHluY2tpYS9saWNvZGUgd2l0aCBzb21lIG1vZGlmaWNhdGlvbnMuXG5cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCBjb25zdCBCYXNlNjQgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IEVORF9PRl9JTlBVVCA9IC0xO1xuICBsZXQgYmFzZTY0U3RyO1xuICBsZXQgYmFzZTY0Q291bnQ7XG5cbiAgbGV0IGk7XG5cbiAgY29uc3QgYmFzZTY0Q2hhcnMgPSBbXG4gICAgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsXG4gICAgJ0knLCAnSicsICdLJywgJ0wnLCAnTScsICdOJywgJ08nLCAnUCcsXG4gICAgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsXG4gICAgJ1knLCAnWicsICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsXG4gICAgJ2cnLCAnaCcsICdpJywgJ2onLCAnaycsICdsJywgJ20nLCAnbicsXG4gICAgJ28nLCAncCcsICdxJywgJ3InLCAncycsICd0JywgJ3UnLCAndicsXG4gICAgJ3cnLCAneCcsICd5JywgJ3onLCAnMCcsICcxJywgJzInLCAnMycsXG4gICAgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJysnLCAnLycsXG4gIF07XG5cbiAgY29uc3QgcmV2ZXJzZUJhc2U2NENoYXJzID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IGJhc2U2NENoYXJzLmxlbmd0aDsgaSA9IGkgKyAxKSB7XG4gICAgcmV2ZXJzZUJhc2U2NENoYXJzW2Jhc2U2NENoYXJzW2ldXSA9IGk7XG4gIH1cblxuICBjb25zdCBzZXRCYXNlNjRTdHIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBiYXNlNjRTdHIgPSBzdHI7XG4gICAgYmFzZTY0Q291bnQgPSAwO1xuICB9O1xuXG4gIGNvbnN0IHJlYWRCYXNlNjQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWJhc2U2NFN0cikge1xuICAgICAgcmV0dXJuIEVORF9PRl9JTlBVVDtcbiAgICB9XG4gICAgaWYgKGJhc2U2NENvdW50ID49IGJhc2U2NFN0ci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBFTkRfT0ZfSU5QVVQ7XG4gICAgfVxuICAgIGNvbnN0IGMgPSBiYXNlNjRTdHIuY2hhckNvZGVBdChiYXNlNjRDb3VudCkgJiAweGZmO1xuICAgIGJhc2U2NENvdW50ID0gYmFzZTY0Q291bnQgKyAxO1xuICAgIHJldHVybiBjO1xuICB9O1xuXG4gIGNvbnN0IGVuY29kZUJhc2U2NCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGRvbmU7XG4gICAgc2V0QmFzZTY0U3RyKHN0cik7XG4gICAgcmVzdWx0ID0gJyc7XG4gICAgY29uc3QgaW5CdWZmZXIgPSBuZXcgQXJyYXkoMyk7XG4gICAgZG9uZSA9IGZhbHNlO1xuICAgIHdoaWxlICghZG9uZSAmJiAoaW5CdWZmZXJbMF0gPSByZWFkQmFzZTY0KCkpICE9PSBFTkRfT0ZfSU5QVVQpIHtcbiAgICAgIGluQnVmZmVyWzFdID0gcmVhZEJhc2U2NCgpO1xuICAgICAgaW5CdWZmZXJbMl0gPSByZWFkQmFzZTY0KCk7XG4gICAgICByZXN1bHQgPSByZXN1bHQgKyAoYmFzZTY0Q2hhcnNbaW5CdWZmZXJbMF0gPj4gMl0pO1xuICAgICAgaWYgKGluQnVmZmVyWzFdICE9PSBFTkRfT0ZfSU5QVVQpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKGJhc2U2NENoYXJzWygoaW5CdWZmZXJbMF0gPDwgNCkgJiAweDMwKSB8IChcbiAgICAgICAgICBpbkJ1ZmZlclsxXSA+PiA0KV0pO1xuICAgICAgICBpZiAoaW5CdWZmZXJbMl0gIT09IEVORF9PRl9JTlBVVCkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIChiYXNlNjRDaGFyc1soKGluQnVmZmVyWzFdIDw8IDIpICYgMHgzYykgfCAoXG4gICAgICAgICAgICBpbkJ1ZmZlclsyXSA+PiA2KV0pO1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIChiYXNlNjRDaGFyc1tpbkJ1ZmZlclsyXSAmIDB4M0ZdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAoYmFzZTY0Q2hhcnNbKChpbkJ1ZmZlclsxXSA8PCAyKSAmIDB4M2MpXSk7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKCc9Jyk7XG4gICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIChiYXNlNjRDaGFyc1soKGluQnVmZmVyWzBdIDw8IDQpICYgMHgzMCldKTtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKCc9Jyk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICgnPScpO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCByZWFkUmV2ZXJzZUJhc2U2NCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghYmFzZTY0U3RyKSB7XG4gICAgICByZXR1cm4gRU5EX09GX0lOUFVUO1xuICAgIH1cbiAgICB3aGlsZSAodHJ1ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgaWYgKGJhc2U2NENvdW50ID49IGJhc2U2NFN0ci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIEVORF9PRl9JTlBVVDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5leHRDaGFyYWN0ZXIgPSBiYXNlNjRTdHIuY2hhckF0KGJhc2U2NENvdW50KTtcbiAgICAgIGJhc2U2NENvdW50ID0gYmFzZTY0Q291bnQgKyAxO1xuICAgICAgaWYgKHJldmVyc2VCYXNlNjRDaGFyc1tuZXh0Q2hhcmFjdGVyXSkge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZUJhc2U2NENoYXJzW25leHRDaGFyYWN0ZXJdO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDaGFyYWN0ZXIgPT09ICdBJykge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbnRvcyA9IGZ1bmN0aW9uKG4pIHtcbiAgICBuID0gbi50b1N0cmluZygxNik7XG4gICAgaWYgKG4ubGVuZ3RoID09PSAxKSB7XG4gICAgICBuID0gJzAnICsgbjtcbiAgICB9XG4gICAgbiA9ICclJyArIG47XG4gICAgcmV0dXJuIHVuZXNjYXBlKG4pO1xuICB9O1xuXG4gIGNvbnN0IGRlY29kZUJhc2U2NCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGRvbmU7XG4gICAgc2V0QmFzZTY0U3RyKHN0cik7XG4gICAgcmVzdWx0ID0gJyc7XG4gICAgY29uc3QgaW5CdWZmZXIgPSBuZXcgQXJyYXkoNCk7XG4gICAgZG9uZSA9IGZhbHNlO1xuICAgIHdoaWxlICghZG9uZSAmJiAoaW5CdWZmZXJbMF0gPSByZWFkUmV2ZXJzZUJhc2U2NCgpKSAhPT0gRU5EX09GX0lOUFVUICYmXG4gICAgICAoaW5CdWZmZXJbMV0gPSByZWFkUmV2ZXJzZUJhc2U2NCgpKSAhPT0gRU5EX09GX0lOUFVUKSB7XG4gICAgICBpbkJ1ZmZlclsyXSA9IHJlYWRSZXZlcnNlQmFzZTY0KCk7XG4gICAgICBpbkJ1ZmZlclszXSA9IHJlYWRSZXZlcnNlQmFzZTY0KCk7XG4gICAgICByZXN1bHQgPSByZXN1bHQgKyBudG9zKCgoKGluQnVmZmVyWzBdIDw8IDIpICYgMHhmZikgfCBpbkJ1ZmZlclsxXSA+PlxuICAgICAgICA0KSk7XG4gICAgICBpZiAoaW5CdWZmZXJbMl0gIT09IEVORF9PRl9JTlBVVCkge1xuICAgICAgICByZXN1bHQgKz0gbnRvcygoKChpbkJ1ZmZlclsxXSA8PCA0KSAmIDB4ZmYpIHwgaW5CdWZmZXJbMl0gPj4gMikpO1xuICAgICAgICBpZiAoaW5CdWZmZXJbM10gIT09IEVORF9PRl9JTlBVVCkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIG50b3MoKCgoaW5CdWZmZXJbMl0gPDwgNikgJiAweGZmKSB8IGluQnVmZmVyW1xuICAgICAgICAgICAgICAzXSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGVuY29kZUJhc2U2NDogZW5jb2RlQmFzZTY0LFxuICAgIGRlY29kZUJhc2U2NDogZGVjb2RlQmFzZTY0LFxuICB9O1xufSgpKTtcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBBdWRpb0NvZGVjXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgQXVkaW8gY29kZWMgZW51bWVyYXRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBBdWRpb0NvZGVjID0ge1xuICBQQ01VOiAncGNtdScsXG4gIFBDTUE6ICdwY21hJyxcbiAgT1BVUzogJ29wdXMnLFxuICBHNzIyOiAnZzcyMicsXG4gIElTQUM6ICdpU0FDJyxcbiAgSUxCQzogJ2lMQkMnLFxuICBBQUM6ICdhYWMnLFxuICBBQzM6ICdhYzMnLFxuICBORUxMWU1PU0VSOiAnbmVsbHltb3NlcicsXG59O1xuLyoqXG4gKiBAY2xhc3MgQXVkaW9Db2RlY1BhcmFtZXRlcnNcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBDb2RlYyBwYXJhbWV0ZXJzIGZvciBhbiBhdWRpbyB0cmFjay5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvQ29kZWNQYXJhbWV0ZXJzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IobmFtZSwgY2hhbm5lbENvdW50LCBjbG9ja1JhdGUpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9Db2RlY1BhcmFtZXRlcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBOYW1lIG9mIGEgY29kZWMuIFBsZWFzZSBhIHZhbHVlIGluIE93dC5CYXNlLkF1ZGlvQ29kZWMuIEhvd2V2ZXIsXG4gICAgICogc29tZSBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgYWxsIHRoZSB2YWx1ZXMgaW4gT3d0LkJhc2UuQXVkaW9Db2RlYy5cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGNoYW5uZWxDb3VudFxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb0NvZGVjUGFyYW1ldGVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIE51bWJlcnMgb2YgY2hhbm5lbHMgZm9yIGFuIGF1ZGlvIHRyYWNrLlxuICAgICAqL1xuICAgIHRoaXMuY2hhbm5lbENvdW50ID0gY2hhbm5lbENvdW50O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGNsb2NrUmF0ZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb0NvZGVjUGFyYW1ldGVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIFRoZSBjb2RlYyBjbG9jayByYXRlIGV4cHJlc3NlZCBpbiBIZXJ0ei5cbiAgICAgKi9cbiAgICB0aGlzLmNsb2NrUmF0ZSA9IGNsb2NrUmF0ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBBdWRpb0VuY29kaW5nUGFyYW1ldGVyc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIEVuY29kaW5nIHBhcmFtZXRlcnMgZm9yIHNlbmRpbmcgYW4gYXVkaW8gdHJhY2suXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBdWRpb0VuY29kaW5nUGFyYW1ldGVycyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjLCBtYXhCaXRyYXRlKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzfSBjb2RlY1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb0VuY29kaW5nUGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHRoaXMuY29kZWMgPSBjb2RlYztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBtYXhCaXRyYXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLkF1ZGlvRW5jb2RpbmdQYXJhbWV0ZXJzXG4gICAgICogQGRlc2MgTWF4IGJpdHJhdGUgZXhwcmVzc2VkIGluIGticHMuXG4gICAgICovXG4gICAgdGhpcy5tYXhCaXRyYXRlID0gbWF4Qml0cmF0ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBWaWRlb0NvZGVjXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgVmlkZW8gY29kZWMgZW51bWVyYXRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBWaWRlb0NvZGVjID0ge1xuICBWUDg6ICd2cDgnLFxuICBWUDk6ICd2cDknLFxuICBIMjY0OiAnaDI2NCcsXG4gIEgyNjU6ICdoMjY1JyxcbiAgQVYxOiAnYXYxJyxcbiAgLy8gTm9uLXN0YW5kYXJkIEFWMSwgd2lsbCBiZSByZW5hbWVkIHRvIEFWMS5cbiAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTExMDQyXG4gIEFWMVg6ICdhdjF4Jyxcbn07XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvQ29kZWNQYXJhbWV0ZXJzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgQ29kZWMgcGFyYW1ldGVycyBmb3IgYSB2aWRlbyB0cmFjay5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFZpZGVvQ29kZWNQYXJhbWV0ZXJzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IobmFtZSwgcHJvZmlsZSkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gbmFtZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb0NvZGVjUGFyYW1ldGVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIE5hbWUgb2YgYSBjb2RlYy5QbGVhc2UgYSB2YWx1ZSBpbiBPd3QuQmFzZS5BdWRpb0NvZGVjLkhvd2V2ZXIsXG4gICAgICAgc29tZSBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgYWxsIHRoZSB2YWx1ZXMgaW4gT3d0LkJhc2UuQXVkaW9Db2RlYy5cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9zdHJpbmd9IHByb2ZpbGVcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9Db2RlY1BhcmFtZXRlcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBUaGUgcHJvZmlsZSBvZiBhIGNvZGVjLiBQcm9maWxlIG1heSBub3QgYXBwbHkgdG8gYWxsIGNvZGVjcy5cbiAgICAgKi9cbiAgICB0aGlzLnByb2ZpbGUgPSBwcm9maWxlO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvRW5jb2RpbmdQYXJhbWV0ZXJzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgRW5jb2RpbmcgcGFyYW1ldGVycyBmb3Igc2VuZGluZyBhIHZpZGVvIHRyYWNrLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9FbmNvZGluZ1BhcmFtZXRlcnMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlYywgbWF4Qml0cmF0ZSkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5WaWRlb0NvZGVjUGFyYW1ldGVyc30gY29kZWNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9FbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjID0gY29kZWM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gbWF4Qml0cmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb0VuY29kaW5nUGFyYW1ldGVyc1xuICAgICAqIEBkZXNjIE1heCBiaXRyYXRlIGV4cHJlc3NlZCBpbiBrYnBzLlxuICAgICAqL1xuICAgIHRoaXMubWF4Qml0cmF0ZSA9IG1heEJpdHJhdGU7XG4gIH1cbn1cbiIsIi8vIE1JVCBMaWNlbnNlXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDEyIFVuaXZlcnNpZGFkIFBvbGl0w6ljbmljYSBkZSBNYWRyaWRcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbi8vIFNPRlRXQVJFLlxuXG4vLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8vIFRoaXMgZmlsZSBpcyBib3Jyb3dlZCBmcm9tIGx5bmNraWEvbGljb2RlIHdpdGggc29tZSBtb2RpZmljYXRpb25zLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGNsYXNzIEV2ZW50RGlzcGF0Y2hlclxuICogQGNsYXNzRGVzYyBBIHNoaW0gZm9yIEV2ZW50VGFyZ2V0LiBNaWdodCBiZSBjaGFuZ2VkIHRvIEV2ZW50VGFyZ2V0IGxhdGVyLlxuICogQG1lbWJlcm9mIE93dC5CYXNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBFdmVudERpc3BhdGNoZXIgPSBmdW5jdGlvbigpIHtcbiAgLy8gUHJpdmF0ZSB2YXJzXG4gIGNvbnN0IHNwZWMgPSB7fTtcbiAgc3BlYy5kaXNwYXRjaGVyID0ge307XG4gIHNwZWMuZGlzcGF0Y2hlci5ldmVudExpc3RlbmVycyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclxuICAgKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIHJlZ2lzdGVycyBhIGNhbGxiYWNrIGZ1bmN0aW9uIGFzIGEgaGFuZGxlciBmb3IgdGhlXG4gICAqIGNvcnJlc3BvbmRpbmcgZXZlbnQuIEl0J3Mgc2hvcnRlbmVkIGZvcm0gaXMgb24oZXZlbnRUeXBlLCBsaXN0ZW5lcikuIFNlZVxuICAgKiB0aGUgZXZlbnQgZGVzY3JpcHRpb24gaW4gdGhlIGZvbGxvd2luZyB0YWJsZS5cbiAgICogQGluc3RhbmNlXG4gICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBFdmVudCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgdGhpcy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnRUeXBlLCBsaXN0ZW5lcikge1xuICAgIGlmIChzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9IFtdO1xuICAgIH1cbiAgICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICogQGRlc2MgVGhpcyBmdW5jdGlvbiByZW1vdmVzIGEgcmVnaXN0ZXJlZCBldmVudCBsaXN0ZW5lci5cbiAgICogQGluc3RhbmNlXG4gICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBFdmVudCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnRUeXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGNsZWFyRXZlbnRMaXN0ZW5lclxuICAgKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYWxsIGV2ZW50IGxpc3RlbmVycyBmb3Igb25lIHR5cGUuXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgRXZlbnQgc3RyaW5nLlxuICAgKi9cbiAgdGhpcy5jbGVhckV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudFR5cGUpIHtcbiAgICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9IFtdO1xuICB9O1xuXG4gIC8vIEl0IGRpc3BhdGNoIGEgbmV3IGV2ZW50IHRvIHRoZSBldmVudCBsaXN0ZW5lcnMsIGJhc2VkIG9uIHRoZSB0eXBlXG4gIC8vIG9mIGV2ZW50LiBBbGwgZXZlbnRzIGFyZSBpbnRlbmRlZCB0byBiZSBMaWNvZGVFdmVudHMuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCFzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnQudHlwZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50LnR5cGVdLm1hcChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9O1xufTtcblxuLyoqXG4gKiBAY2xhc3MgT3d0RXZlbnRcbiAqIEBjbGFzc0Rlc2MgQ2xhc3MgT3d0RXZlbnQgcmVwcmVzZW50cyBhIGdlbmVyaWMgRXZlbnQgaW4gdGhlIGxpYnJhcnkuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgTWVzc2FnZUV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIE1lc3NhZ2VFdmVudCByZXByZXNlbnRzIGEgbWVzc2FnZSBFdmVudCBpbiB0aGUgbGlicmFyeS5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZUV2ZW50IGV4dGVuZHMgT3d0RXZlbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpbml0KSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBvcmlnaW5cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuTWVzc2FnZUV2ZW50XG4gICAgICogQGRlc2MgSUQgb2YgdGhlIHJlbW90ZSBlbmRwb2ludCB3aG8gcHVibGlzaGVkIHRoaXMgc3RyZWFtLlxuICAgICAqL1xuICAgIHRoaXMub3JpZ2luID0gaW5pdC5vcmlnaW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lc3NhZ2VFdmVudFxuICAgICAqL1xuICAgIHRoaXMubWVzc2FnZSA9IGluaXQubWVzc2FnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHRvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lc3NhZ2VFdmVudFxuICAgICAqIEBkZXNjIFZhbHVlcyBjb3VsZCBiZSBcImFsbFwiLCBcIm1lXCIgaW4gY29uZmVyZW5jZSBtb2RlLCBvciB1bmRlZmluZWQgaW5cbiAgICAgKiBQMlAgbW9kZS5cbiAgICAgKi9cbiAgICB0aGlzLnRvID0gaW5pdC50bztcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBFcnJvckV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIEVycm9yRXZlbnQgcmVwcmVzZW50cyBhbiBlcnJvciBFdmVudCBpbiB0aGUgbGlicmFyeS5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgRXJyb3JFdmVudCBleHRlbmRzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaW5pdCkge1xuICAgIHN1cGVyKHR5cGUpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Vycm9yfSBlcnJvclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5FcnJvckV2ZW50XG4gICAgICovXG4gICAgdGhpcy5lcnJvciA9IGluaXQuZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgTXV0ZUV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIE11dGVFdmVudCByZXByZXNlbnRzIGEgbXV0ZSBvciB1bm11dGUgZXZlbnQuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIE11dGVFdmVudCBleHRlbmRzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaW5pdCkge1xuICAgIHN1cGVyKHR5cGUpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlRyYWNrS2luZH0ga2luZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5NdXRlRXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLmtpbmQgPSBpbml0LmtpbmQ7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgKiBmcm9tICcuL21lZGlhc3RyZWFtLWZhY3RvcnkuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0uanMnO1xuZXhwb3J0ICogZnJvbSAnLi9tZWRpYWZvcm1hdC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zcG9ydC5qcyc7XG4iLCIvLyBNSVQgTGljZW5zZVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxMiBVbml2ZXJzaWRhZCBQb2xpdMOpY25pY2EgZGUgTWFkcmlkXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4vLyBTT0ZUV0FSRS5cblxuLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vLyBUaGlzIGZpbGUgaXMgYm9ycm93ZWQgZnJvbSBseW5ja2lhL2xpY29kZSB3aXRoIHNvbWUgbW9kaWZpY2F0aW9ucy5cblxuLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qXG4gKiBBUEkgdG8gd3JpdGUgbG9ncyBiYXNlZCBvbiB0cmFkaXRpb25hbCBsb2dnaW5nIG1lY2hhbmlzbXM6IGRlYnVnLCB0cmFjZSxcbiAqIGluZm8sIHdhcm5pbmcsIGVycm9yXG4gKi9cbmNvbnN0IExvZ2dlciA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgREVCVUcgPSAwO1xuICBjb25zdCBUUkFDRSA9IDE7XG4gIGNvbnN0IElORk8gPSAyO1xuICBjb25zdCBXQVJOSU5HID0gMztcbiAgY29uc3QgRVJST1IgPSA0O1xuICBjb25zdCBOT05FID0gNTtcblxuICBjb25zdCBub09wID0gZnVuY3Rpb24oKSB7fTtcblxuICAvLyB8dGhhdHwgaXMgdGhlIG9iamVjdCB0byBiZSByZXR1cm5lZC5cbiAgY29uc3QgdGhhdCA9IHtcbiAgICBERUJVRzogREVCVUcsXG4gICAgVFJBQ0U6IFRSQUNFLFxuICAgIElORk86IElORk8sXG4gICAgV0FSTklORzogV0FSTklORyxcbiAgICBFUlJPUjogRVJST1IsXG4gICAgTk9ORTogTk9ORSxcbiAgfTtcblxuICB0aGF0LmxvZyA9ICguLi5hcmdzKSA9PiB7XG4gICAgd2luZG93LmNvbnNvbGUubG9nKChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLCAuLi5hcmdzKTtcbiAgfTtcblxuICBjb25zdCBiaW5kVHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5jb25zb2xlW3R5cGVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgd2luZG93LmNvbnNvbGVbdHlwZV0oKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCksIC4uLmFyZ3MpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoYXQubG9nO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRMb2dMZXZlbCA9IGZ1bmN0aW9uKGxldmVsKSB7XG4gICAgaWYgKGxldmVsIDw9IERFQlVHKSB7XG4gICAgICB0aGF0LmRlYnVnID0gYmluZFR5cGUoJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuZGVidWcgPSBub09wO1xuICAgIH1cbiAgICBpZiAobGV2ZWwgPD0gVFJBQ0UpIHtcbiAgICAgIHRoYXQudHJhY2UgPSBiaW5kVHlwZSgndHJhY2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC50cmFjZSA9IG5vT3A7XG4gICAgfVxuICAgIGlmIChsZXZlbCA8PSBJTkZPKSB7XG4gICAgICB0aGF0LmluZm8gPSBiaW5kVHlwZSgnaW5mbycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LmluZm8gPSBub09wO1xuICAgIH1cbiAgICBpZiAobGV2ZWwgPD0gV0FSTklORykge1xuICAgICAgdGhhdC53YXJuaW5nID0gYmluZFR5cGUoJ3dhcm4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC53YXJuaW5nID0gbm9PcDtcbiAgICB9XG4gICAgaWYgKGxldmVsIDw9IEVSUk9SKSB7XG4gICAgICB0aGF0LmVycm9yID0gYmluZFR5cGUoJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuZXJyb3IgPSBub09wO1xuICAgIH1cbiAgfTtcblxuICBzZXRMb2dMZXZlbChFUlJPUik7IC8vIERlZmF1bHQgbGV2ZWwuXG5cbiAgdGhhdC5zZXRMb2dMZXZlbCA9IHNldExvZ0xldmVsO1xuXG4gIHJldHVybiB0aGF0O1xufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyO1xuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG4vKipcbiAqIEBjbGFzcyBBdWRpb1NvdXJjZUluZm9cbiAqIEBjbGFzc0Rlc2MgU291cmNlIGluZm8gYWJvdXQgYW4gYXVkaW8gdHJhY2suIFZhbHVlczogJ21pYycsICdzY3JlZW4tY2FzdCcsXG4gKiAnZmlsZScsICdtaXhlZCcuXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEByZWFkb25seVxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEF1ZGlvU291cmNlSW5mbyA9IHtcbiAgTUlDOiAnbWljJyxcbiAgU0NSRUVOQ0FTVDogJ3NjcmVlbi1jYXN0JyxcbiAgRklMRTogJ2ZpbGUnLFxuICBNSVhFRDogJ21peGVkJyxcbn07XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvU291cmNlSW5mb1xuICogQGNsYXNzRGVzYyBTb3VyY2UgaW5mbyBhYm91dCBhIHZpZGVvIHRyYWNrLiBWYWx1ZXM6ICdjYW1lcmEnLCAnc2NyZWVuLWNhc3QnLFxuICogJ2ZpbGUnLCAnbWl4ZWQnLlxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAcmVhZG9ubHlcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBWaWRlb1NvdXJjZUluZm8gPSB7XG4gIENBTUVSQTogJ2NhbWVyYScsXG4gIFNDUkVFTkNBU1Q6ICdzY3JlZW4tY2FzdCcsXG4gIEZJTEU6ICdmaWxlJyxcbiAgTUlYRUQ6ICdtaXhlZCcsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBUcmFja0tpbmRcbiAqIEBjbGFzc0Rlc2MgS2luZCBvZiBhIHRyYWNrLiBWYWx1ZXM6ICdhdWRpbycgZm9yIGF1ZGlvIHRyYWNrLCAndmlkZW8nIGZvclxuICogdmlkZW8gdHJhY2ssICdhdicgZm9yIGJvdGggYXVkaW8gYW5kIHZpZGVvIHRyYWNrcy5cbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQHJlYWRvbmx5XG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgVHJhY2tLaW5kID0ge1xuICAvKipcbiAgICogQXVkaW8gdHJhY2tzLlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEFVRElPOiAnYXVkaW8nLFxuICAvKipcbiAgICogVmlkZW8gdHJhY2tzLlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIFZJREVPOiAndmlkZW8nLFxuICAvKipcbiAgICogQm90aCBhdWRpbyBhbmQgdmlkZW8gdHJhY2tzLlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEFVRElPX0FORF9WSURFTzogJ2F2Jyxcbn07XG4vKipcbiAqIEBjbGFzcyBSZXNvbHV0aW9uXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgVGhlIFJlc29sdXRpb24gZGVmaW5lcyB0aGUgc2l6ZSBvZiBhIHJlY3RhbmdsZS5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNvbHV0aW9uIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gd2lkdGhcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUmVzb2x1dGlvblxuICAgICAqL1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5SZXNvbHV0aW9uXG4gICAgICovXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZ2xvYmFsIFByb21pc2UsIG5hdmlnYXRvciAqL1xuXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCAqIGFzIE1lZGlhRm9ybWF0TW9kdWxlIGZyb20gJy4vbWVkaWFmb3JtYXQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBBdWRpb1RyYWNrQ29uc3RyYWludHNcbiAqIEBjbGFzc0Rlc2MgQ29uc3RyYWludHMgZm9yIGNyZWF0aW5nIGFuIGF1ZGlvIE1lZGlhU3RyZWFtVHJhY2suXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPd3QuQmFzZS5BdWRpb1NvdXJjZUluZm99IHNvdXJjZSBTb3VyY2UgaW5mbyBvZiB0aGlzIGF1ZGlvIHRyYWNrLlxuICovXG5leHBvcnQgY2xhc3MgQXVkaW9UcmFja0NvbnN0cmFpbnRzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3Ioc291cmNlKSB7XG4gICAgaWYgKCFPYmplY3QudmFsdWVzKE1lZGlhRm9ybWF0TW9kdWxlLkF1ZGlvU291cmNlSW5mbylcbiAgICAgICAgLnNvbWUoKHYpID0+IHYgPT09IHNvdXJjZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgc291cmNlLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHNvdXJjZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBWYWx1ZXMgY291bGQgYmUgXCJtaWNcIiwgXCJzY3JlZW4tY2FzdFwiLCBcImZpbGVcIiBvciBcIm1peGVkXCIuXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBkZXZpY2VJZFxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBEbyBub3QgcHJvdmlkZSBkZXZpY2VJZCBpZiBzb3VyY2UgaXMgbm90IFwibWljXCIuXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHNlZSBodHRwczovL3czYy5naXRodWIuaW8vbWVkaWFjYXB0dXJlLW1haW4vI2RlZi1jb25zdHJhaW50LWRldmljZUlkXG4gICAgICovXG4gICAgdGhpcy5kZXZpY2VJZCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBWaWRlb1RyYWNrQ29uc3RyYWludHNcbiAqIEBjbGFzc0Rlc2MgQ29uc3RyYWludHMgZm9yIGNyZWF0aW5nIGEgdmlkZW8gTWVkaWFTdHJlYW1UcmFjay5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge093dC5CYXNlLlZpZGVvU291cmNlSW5mb30gc291cmNlIFNvdXJjZSBpbmZvIG9mIHRoaXMgdmlkZW8gdHJhY2suXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1RyYWNrQ29uc3RyYWludHMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihzb3VyY2UpIHtcbiAgICBpZiAoIU9iamVjdC52YWx1ZXMoTWVkaWFGb3JtYXRNb2R1bGUuVmlkZW9Tb3VyY2VJbmZvKVxuICAgICAgICAuc29tZSgodikgPT4gdiA9PT0gc291cmNlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBzb3VyY2UuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gc291cmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c1xuICAgICAqIEBkZXNjIFZhbHVlcyBjb3VsZCBiZSBcImNhbWVyYVwiLCBcInNjcmVlbi1jYXN0XCIsIFwiZmlsZVwiIG9yIFwibWl4ZWRcIi5cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGRldmljZUlkXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c1xuICAgICAqIEBkZXNjIERvIG5vdCBwcm92aWRlIGRldmljZUlkIGlmIHNvdXJjZSBpcyBub3QgXCJjYW1lcmFcIi5cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAc2VlIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9tZWRpYWNhcHR1cmUtbWFpbi8jZGVmLWNvbnN0cmFpbnQtZGV2aWNlSWRcbiAgICAgKi9cblxuICAgIHRoaXMuZGV2aWNlSWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5SZXNvbHV0aW9ufSByZXNvbHV0aW9uXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gZnJhbWVSYXRlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRoaXMuZnJhbWVSYXRlID0gdW5kZWZpbmVkO1xuICB9XG59XG4vKipcbiAqIEBjbGFzcyBTdHJlYW1Db25zdHJhaW50c1xuICogQGNsYXNzRGVzYyBDb25zdHJhaW50cyBmb3IgY3JlYXRpbmcgYSBNZWRpYVN0cmVhbSBmcm9tIHNjcmVlbiBtaWMgYW5kIGNhbWVyYS5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gez9Pd3QuQmFzZS5BdWRpb1RyYWNrQ29uc3RyYWludHN9IGF1ZGlvQ29uc3RyYWludHNcbiAqIEBwYXJhbSB7P093dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c30gdmlkZW9Db25zdHJhaW50c1xuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtQ29uc3RyYWludHMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnN0cmFpbnRzID0gZmFsc2UsIHZpZGVvQ29uc3RyYWludHMgPSBmYWxzZSkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLk1lZGlhU3RyZWFtVHJhY2tEZXZpY2VDb25zdHJhaW50c0ZvckF1ZGlvfSBhdWRpb1xuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5NZWRpYVN0cmVhbURldmljZUNvbnN0cmFpbnRzXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy5hdWRpbyA9IGF1ZGlvQ29uc3RyYWludHM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuTWVkaWFTdHJlYW1UcmFja0RldmljZUNvbnN0cmFpbnRzRm9yVmlkZW99IFZpZGVvXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lZGlhU3RyZWFtRGV2aWNlQ29uc3RyYWludHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLnZpZGVvID0gdmlkZW9Db25zdHJhaW50cztcbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gaXNWaWRlb0NvbnN0cmFpbnNGb3JTY3JlZW5DYXN0KGNvbnN0cmFpbnRzKSB7XG4gIHJldHVybiAodHlwZW9mIGNvbnN0cmFpbnRzLnZpZGVvID09PSAnb2JqZWN0JyAmJiBjb25zdHJhaW50cy52aWRlby5zb3VyY2UgPT09XG4gICAgICBNZWRpYUZvcm1hdE1vZHVsZS5WaWRlb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCk7XG59XG5cbi8qKlxuICogQGNsYXNzIE1lZGlhU3RyZWFtRmFjdG9yeVxuICogQGNsYXNzRGVzYyBBIGZhY3RvcnkgdG8gY3JlYXRlIE1lZGlhU3RyZWFtLiBZb3UgY2FuIGFsc28gY3JlYXRlIE1lZGlhU3RyZWFtXG4gKiBieSB5b3Vyc2VsZi5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICovXG5leHBvcnQgY2xhc3MgTWVkaWFTdHJlYW1GYWN0b3J5IHtcbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVNZWRpYVN0cmVhbVxuICAgKiBAc3RhdGljXG4gICAqIEBkZXNjIENyZWF0ZSBhIE1lZGlhU3RyZWFtIHdpdGggZ2l2ZW4gY29uc3RyYWludHMuIElmIHlvdSB3YW50IHRvIGNyZWF0ZSBhXG4gICAqIE1lZGlhU3RyZWFtIGZvciBzY3JlZW4gY2FzdCwgcGxlYXNlIG1ha2Ugc3VyZSBib3RoIGF1ZGlvIGFuZCB2aWRlbydzIHNvdXJjZVxuICAgKiBhcmUgXCJzY3JlZW4tY2FzdFwiLlxuICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuTWVkaWFTdHJlYW1GYWN0b3J5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8TWVkaWFTdHJlYW0sIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkXG4gICAqIHdoZW4gc3RyZWFtIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLCBvciByZWplY3RlZCBpZiBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgKiBlcnJvciBoYXBwZW5lZDpcbiAgICogLSBPbmUgb3IgbW9yZSBwYXJhbWV0ZXJzIGNhbm5vdCBiZSBzYXRpc2ZpZWQuXG4gICAqIC0gU3BlY2lmaWVkIGRldmljZSBpcyBidXN5LlxuICAgKiAtIENhbm5vdCBvYnRhaW4gbmVjZXNzYXJ5IHBlcm1pc3Npb24gb3Igb3BlcmF0aW9uIGlzIGNhbmNlbGVkIGJ5IHVzZXIuXG4gICAqIC0gVmlkZW8gc291cmNlIGlzIHNjcmVlbiBjYXN0LCB3aGlsZSBhdWRpbyBzb3VyY2UgaXMgbm90LlxuICAgKiAtIEF1ZGlvIHNvdXJjZSBpcyBzY3JlZW4gY2FzdCwgd2hpbGUgdmlkZW8gc291cmNlIGlzIGRpc2FibGVkLlxuICAgKiBAcGFyYW0ge093dC5CYXNlLlN0cmVhbUNvbnN0cmFpbnRzfSBjb25zdHJhaW50c1xuICAgKi9cbiAgc3RhdGljIGNyZWF0ZU1lZGlhU3RyZWFtKGNvbnN0cmFpbnRzKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zdHJhaW50cyAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgKCFjb25zdHJhaW50cy5hdWRpbyAmJiAhY29uc3RyYWludHMudmlkZW8pKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignSW52YWxpZCBjb25zdHJhaW5zJykpO1xuICAgIH1cbiAgICBpZiAoIWlzVmlkZW9Db25zdHJhaW5zRm9yU2NyZWVuQ2FzdChjb25zdHJhaW50cykgJiZcbiAgICAgICAgKHR5cGVvZiBjb25zdHJhaW50cy5hdWRpbyA9PT0gJ29iamVjdCcpICYmXG4gICAgICAgIGNvbnN0cmFpbnRzLmF1ZGlvLnNvdXJjZSA9PT1cbiAgICAgICAgICAgIE1lZGlhRm9ybWF0TW9kdWxlLkF1ZGlvU291cmNlSW5mby5TQ1JFRU5DQVNUKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgbmV3IFR5cGVFcnJvcignQ2Fubm90IHNoYXJlIHNjcmVlbiB3aXRob3V0IHZpZGVvLicpKTtcbiAgICB9XG4gICAgaWYgKGlzVmlkZW9Db25zdHJhaW5zRm9yU2NyZWVuQ2FzdChjb25zdHJhaW50cykgJiZcbiAgICAgICAgdHlwZW9mIGNvbnN0cmFpbnRzLmF1ZGlvID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBjb25zdHJhaW50cy5hdWRpby5zb3VyY2UgIT09XG4gICAgICAgICAgICBNZWRpYUZvcm1hdE1vZHVsZS5BdWRpb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgJ0Nhbm5vdCBjYXB0dXJlIHZpZGVvIGZyb20gc2NyZWVuIGNhc3Qgd2hpbGUgY2FwdHVyZSBhdWRpbyBmcm9tJ1xuICAgICAgICAgICsgJyBvdGhlciBzb3VyY2UuJykpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGFuZCBjb252ZXJ0IGNvbnN0cmFpbnRzLlxuICAgIGlmICghY29uc3RyYWludHMuYXVkaW8gJiYgIWNvbnN0cmFpbnRzLnZpZGVvKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAnQXQgbGVhc3Qgb25lIG9mIGF1ZGlvIGFuZCB2aWRlbyBtdXN0IGJlIHJlcXVlc3RlZC4nKSk7XG4gICAgfVxuICAgIGNvbnN0IG1lZGlhQ29uc3RyYWludHMgPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgICBpZiAodHlwZW9mIGNvbnN0cmFpbnRzLmF1ZGlvID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBjb25zdHJhaW50cy5hdWRpby5zb3VyY2UgPT09IE1lZGlhRm9ybWF0TW9kdWxlLkF1ZGlvU291cmNlSW5mby5NSUMpIHtcbiAgICAgIG1lZGlhQ29uc3RyYWludHMuYXVkaW8gPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgICAgIGlmICh1dGlscy5pc0VkZ2UoKSkge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvLmRldmljZUlkID0gY29uc3RyYWludHMuYXVkaW8uZGV2aWNlSWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvLmRldmljZUlkID0ge1xuICAgICAgICAgIGV4YWN0OiBjb25zdHJhaW50cy5hdWRpby5kZXZpY2VJZCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnN0cmFpbnRzLmF1ZGlvLnNvdXJjZSA9PT1cbiAgICAgICAgICBNZWRpYUZvcm1hdE1vZHVsZS5BdWRpb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCkge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lZGlhQ29uc3RyYWludHMuYXVkaW8gPSBjb25zdHJhaW50cy5hdWRpbztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb25zdHJhaW50cy52aWRlbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8gPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc3RyYWludHMudmlkZW8uZnJhbWVSYXRlID09PSAnbnVtYmVyJykge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvLmZyYW1lUmF0ZSA9IGNvbnN0cmFpbnRzLnZpZGVvLmZyYW1lUmF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uICYmXG4gICAgICAgICAgY29uc3RyYWludHMudmlkZW8ucmVzb2x1dGlvbi53aWR0aCAmJlxuICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLnJlc29sdXRpb24uaGVpZ2h0KSB7XG4gICAgICAgIGlmIChjb25zdHJhaW50cy52aWRlby5zb3VyY2UgPT09XG4gICAgICAgICAgICAgIE1lZGlhRm9ybWF0TW9kdWxlLlZpZGVvU291cmNlSW5mby5TQ1JFRU5DQVNUKSB7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby53aWR0aCA9IGNvbnN0cmFpbnRzLnZpZGVvLnJlc29sdXRpb24ud2lkdGg7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby5oZWlnaHQgPSBjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uLmhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvLndpZHRoID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby53aWR0aC5leGFjdCA9XG4gICAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uLndpZHRoO1xuICAgICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8uaGVpZ2h0ID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby5oZWlnaHQuZXhhY3QgPVxuICAgICAgICAgICAgY29uc3RyYWludHMudmlkZW8ucmVzb2x1dGlvbi5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPSB7ZXhhY3Q6IGNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkfTtcbiAgICAgIH1cbiAgICAgIGlmICh1dGlscy5pc0ZpcmVmb3goKSAmJlxuICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLnNvdXJjZSA9PT1cbiAgICAgICAgICAgICAgTWVkaWFGb3JtYXRNb2R1bGUuVmlkZW9Tb3VyY2VJbmZvLlNDUkVFTkNBU1QpIHtcbiAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby5tZWRpYVNvdXJjZSA9ICdzY3JlZW4nO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvID0gY29uc3RyYWludHMudmlkZW87XG4gICAgfVxuXG4gICAgaWYgKGlzVmlkZW9Db25zdHJhaW5zRm9yU2NyZWVuQ2FzdChjb25zdHJhaW50cykpIHtcbiAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldERpc3BsYXlNZWRpYShtZWRpYUNvbnN0cmFpbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKG1lZGlhQ29uc3RyYWludHMpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBBdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBUaGUgYXVkaW8gc2V0dGluZ3Mgb2YgYSBwdWJsaWNhdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvUHVibGljYXRpb25TZXR0aW5ncyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzfSBjb2RlY1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjID0gY29kZWM7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgVGhlIHZpZGVvIHNldHRpbmdzIG9mIGEgcHVibGljYXRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3Mge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlYywgcmVzb2x1dGlvbiwgZnJhbWVSYXRlLFxuICAgICAgYml0cmF0ZSwga2V5RnJhbWVJbnRlcnZhbCwgcmlkKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLlZpZGVvQ29kZWNQYXJhbWV0ZXJzfSBjb2RlY1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjPWNvZGVjLFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5SZXNvbHV0aW9ufSByZXNvbHV0aW9uXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvUHVibGljYXRpb25TZXR0aW5nc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbj1yZXNvbHV0aW9uO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGZyYW1lUmF0ZXNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAY2xhc3NEZXNjIEZyYW1lcyBwZXIgc2Vjb25kLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmZyYW1lUmF0ZT1mcmFtZVJhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gYml0cmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmJpdHJhdGU9Yml0cmF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBrZXlGcmFtZUludGVydmFsc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBjbGFzc0Rlc2MgVGhlIHRpbWUgaW50ZXJ2YWwgYmV0d2VlbiBrZXkgZnJhbWVzLiBVbml0OiBzZWNvbmQuXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvUHVibGljYXRpb25TZXR0aW5nc1xuICAgICAqL1xuICAgIHRoaXMua2V5RnJhbWVJbnRlcnZhbD1rZXlGcmFtZUludGVydmFsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IHJpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBjbGFzc0Rlc2MgUmVzdHJpY3Rpb24gaWRlbnRpZmllciB0byBpZGVudGlmeSB0aGUgUlRQIFN0cmVhbXMgd2l0aGluIGFuIFJUUCBzZXNzaW9uLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLnJpZD1yaWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgUHVibGljYXRpb25TZXR0aW5nc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFRoZSBzZXR0aW5ncyBvZiBhIHB1YmxpY2F0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgUHVibGljYXRpb25TZXR0aW5ncyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGF1ZGlvLCB2aWRlbykge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLkF1ZGlvUHVibGljYXRpb25TZXR0aW5nc1tdfSBhdWRpb1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5hdWRpbz1hdWRpbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NbXX0gdmlkZW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25TZXR0aW5nc1xuICAgICAqL1xuICAgIHRoaXMudmlkZW89dmlkZW87XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgUHVibGljYXRpb25cbiAqIEBleHRlbmRzIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFB1YmxpY2F0aW9uIHJlcHJlc2VudHMgYSBzZW5kZXIgZm9yIHB1Ymxpc2hpbmcgYSBzdHJlYW0uIEl0XG4gKiBoYW5kbGVzIHRoZSBhY3Rpb25zIG9uIGEgTG9jYWxTdHJlYW0gcHVibGlzaGVkIHRvIGEgY29uZmVyZW5jZS5cbiAqXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgfCBBcmd1bWVudCBUeXBlICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgZW5kZWQgICAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFB1YmxpY2F0aW9uIGlzIGVuZGVkLiB8XG4gKiB8IGVycm9yICAgICAgICAgICB8IEVycm9yRXZlbnQgICAgICAgfCBBbiBlcnJvciBvY2N1cnJlZCBvbiB0aGUgcHVibGljYXRpb24uIHxcbiAqIHwgbXV0ZSAgICAgICAgICAgIHwgTXV0ZUV2ZW50ICAgICAgICB8IFB1YmxpY2F0aW9uIGlzIG11dGVkLiBDbGllbnQgc3RvcHBlZCBzZW5kaW5nIGF1ZGlvIGFuZC9vciB2aWRlbyBkYXRhIHRvIHJlbW90ZSBlbmRwb2ludC4gfFxuICogfCB1bm11dGUgICAgICAgICAgfCBNdXRlRXZlbnQgICAgICAgIHwgUHVibGljYXRpb24gaXMgdW5tdXRlZC4gQ2xpZW50IGNvbnRpbnVlZCBzZW5kaW5nIGF1ZGlvIGFuZC9vciB2aWRlbyBkYXRhIHRvIHJlbW90ZSBlbmRwb2ludC4gfFxuICpcbiAqIGBlbmRlZGAgZXZlbnQgbWF5IG5vdCBiZSBmaXJlZCBvbiBTYWZhcmkgYWZ0ZXIgY2FsbGluZyBgUHVibGljYXRpb24uc3RvcCgpYC5cbiAqXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBQdWJsaWNhdGlvbiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGlkLCB0cmFuc3BvcnQsIHN0b3AsIGdldFN0YXRzLCBtdXRlLCB1bm11dGUpIHtcbiAgICBzdXBlcigpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBpZCA/IGlkIDogVXRpbHMuY3JlYXRlVXVpZCgpLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlRyYW5zcG9ydFNldHRpbmdzfSB0cmFuc3BvcnRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAZGVzYyBUcmFuc3BvcnQgc2V0dGluZ3MgZm9yIHRoZSBwdWJsaWNhdGlvbi5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3RyYW5zcG9ydCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdHJhbnNwb3J0LFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBzdG9wXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgU3RvcCBjZXJ0YWluIHB1YmxpY2F0aW9uLiBPbmNlIGEgc3Vic2NyaXB0aW9uIGlzIHN0b3BwZWQsIGl0IGNhbm5vdFxuICAgICAqIGJlIHJlY292ZXJlZC5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25cbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuc3RvcCA9IHN0b3A7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGdldFN0YXRzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgR2V0IHN0YXRzIG9mIHVuZGVybHlpbmcgUGVlckNvbm5lY3Rpb24uXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UlRDU3RhdHNSZXBvcnQsIEVycm9yPn1cbiAgICAgKi9cbiAgICB0aGlzLmdldFN0YXRzID0gZ2V0U3RhdHM7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIG11dGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBTdG9wIHNlbmRpbmcgZGF0YSB0byByZW1vdGUgZW5kcG9pbnQuXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uXG4gICAgICogQHBhcmFtIHtPd3QuQmFzZS5UcmFja0tpbmQgfSBraW5kIEtpbmQgb2YgdHJhY2tzIHRvIGJlIG11dGVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZCwgRXJyb3I+fVxuICAgICAqL1xuICAgIHRoaXMubXV0ZSA9IG11dGU7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIHVubXV0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIENvbnRpbnVlIHNlbmRpbmcgZGF0YSB0byByZW1vdGUgZW5kcG9pbnQuXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uXG4gICAgICogQHBhcmFtIHtPd3QuQmFzZS5UcmFja0tpbmQgfSBraW5kIEtpbmQgb2YgdHJhY2tzIHRvIGJlIHVubXV0ZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5kZWZpbmVkLCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy51bm11dGUgPSB1bm11dGU7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgUHVibGlzaE9wdGlvbnNcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBQdWJsaXNoT3B0aW9ucyBkZWZpbmVzIG9wdGlvbnMgZm9yIHB1Ymxpc2hpbmcgYVxuICogT3d0LkJhc2UuTG9jYWxTdHJlYW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBQdWJsaXNoT3B0aW9ucyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGF1ZGlvLCB2aWRlbywgdHJhbnNwb3J0KSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P0FycmF5PE93dC5CYXNlLkF1ZGlvRW5jb2RpbmdQYXJhbWV0ZXJzPiB8ID9BcnJheTxSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnM+fSBhdWRpb1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaXNoT3B0aW9uc1xuICAgICAqIEBkZXNjIFBhcmFtZXRlcnMgZm9yIGF1ZGlvIFJ0cFNlbmRlci4gUHVibGlzaGluZyB3aXRoIFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycyBpcyBhbiBleHBlcmltZW50YWwgZmVhdHVyZS4gSXQgaXMgc3ViamVjdCB0byBjaGFuZ2UuXG4gICAgICovXG4gICAgdGhpcy5hdWRpbyA9IGF1ZGlvO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9BcnJheTxPd3QuQmFzZS5WaWRlb0VuY29kaW5nUGFyYW1ldGVycz4gfCA/QXJyYXk8UlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzPn0gdmlkZW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGlzaE9wdGlvbnNcbiAgICAgKiBAZGVzYyBQYXJhbWV0ZXJzIGZvciB2aWRlbyBSdHBTZW5kZXIuIFB1Ymxpc2hpbmcgd2l0aCBSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnMgaXMgYW4gZXhwZXJpbWVudGFsIGZlYXR1cmUuIEl0IGlzIHN1YmplY3QgdG8gY2hhbmdlLlxuICAgICAqL1xuICAgIHRoaXMudmlkZW8gPSB2aWRlbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuVHJhbnNwb3J0Q29uc3RyYWludHN9IHRyYW5zcG9ydFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaXNoT3B0aW9uc1xuICAgICAqL1xuICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuICB9XG59XG4iLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNCBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cblxuLyogTW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGVzZSBvcHRpb25zIGF0IGpzaGludC5jb20vZG9jcy9vcHRpb25zICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qIGdsb2JhbHMgIGFkYXB0ZXIsIHRyYWNlICovXG4vKiBleHBvcnRlZCBzZXRDb2RlY1BhcmFtLCBpY2VDYW5kaWRhdGVUeXBlLCBmb3JtYXRUeXBlUHJlZmVyZW5jZSxcbiAgIG1heWJlU2V0T3B1c09wdGlvbnMsIG1heWJlUHJlZmVyQXVkaW9SZWNlaXZlQ29kZWMsXG4gICBtYXliZVByZWZlckF1ZGlvU2VuZENvZGVjLCBtYXliZVNldEF1ZGlvUmVjZWl2ZUJpdFJhdGUsXG4gICBtYXliZVNldEF1ZGlvU2VuZEJpdFJhdGUsIG1heWJlUHJlZmVyVmlkZW9SZWNlaXZlQ29kZWMsXG4gICBtYXliZVByZWZlclZpZGVvU2VuZENvZGVjLCBtYXliZVNldFZpZGVvUmVjZWl2ZUJpdFJhdGUsXG4gICBtYXliZVNldFZpZGVvU2VuZEJpdFJhdGUsIG1heWJlU2V0VmlkZW9TZW5kSW5pdGlhbEJpdFJhdGUsXG4gICBtYXliZVJlbW92ZVZpZGVvRmVjLCBtZXJnZUNvbnN0cmFpbnRzLCByZW1vdmVDb2RlY1BhcmFtKi9cblxuLyogVGhpcyBmaWxlIGlzIGJvcnJvd2VkIGZyb20gYXBwcnRjIHdpdGggc29tZSBtb2RpZmljYXRpb25zLiAqL1xuLyogQ29tbWl0IGhhc2g6IGM2YWYwYzI1ZTlhZjUyN2Y3MWIzYWNkZDZiZmExMzg5ZDc3OGY3YmQgKyBQUiA1MzAgKi9cblxuaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlci5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gbWVyZ2VDb25zdHJhaW50cyhjb25zMSwgY29uczIpIHtcbiAgaWYgKCFjb25zMSB8fCAhY29uczIpIHtcbiAgICByZXR1cm4gY29uczEgfHwgY29uczI7XG4gIH1cbiAgY29uc3QgbWVyZ2VkID0gY29uczE7XG4gIGZvciAoY29uc3Qga2V5IGluIGNvbnMyKSB7XG4gICAgbWVyZ2VkW2tleV0gPSBjb25zMltrZXldO1xuICB9XG4gIHJldHVybiBtZXJnZWQ7XG59XG5cbmZ1bmN0aW9uIGljZUNhbmRpZGF0ZVR5cGUoY2FuZGlkYXRlU3RyKSB7XG4gIHJldHVybiBjYW5kaWRhdGVTdHIuc3BsaXQoJyAnKVs3XTtcbn1cblxuLy8gVHVybnMgdGhlIGxvY2FsIHR5cGUgcHJlZmVyZW5jZSBpbnRvIGEgaHVtYW4tcmVhZGFibGUgc3RyaW5nLlxuLy8gTm90ZSB0aGF0IHRoaXMgbWFwcGluZyBpcyBicm93c2VyLXNwZWNpZmljLlxuZnVuY3Rpb24gZm9ybWF0VHlwZVByZWZlcmVuY2UocHJlZikge1xuICBpZiAoYWRhcHRlci5icm93c2VyRGV0YWlscy5icm93c2VyID09PSAnY2hyb21lJykge1xuICAgIHN3aXRjaCAocHJlZikge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gJ1RVUk4vVExTJztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuICdUVVJOL1RDUCc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiAnVFVSTi9VRFAnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFkYXB0ZXIuYnJvd3NlckRldGFpbHMuYnJvd3NlciA9PT0gJ2ZpcmVmb3gnKSB7XG4gICAgc3dpdGNoIChwcmVmKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiAnVFVSTi9UQ1AnO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gJ1RVUk4vVURQJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIG1heWJlU2V0T3B1c09wdGlvbnMoc2RwLCBwYXJhbXMpIHtcbiAgLy8gU2V0IE9wdXMgaW4gU3RlcmVvLCBpZiBzdGVyZW8gaXMgdHJ1ZSwgdW5zZXQgaXQsIGlmIHN0ZXJlbyBpcyBmYWxzZSwgYW5kXG4gIC8vIGRvIG5vdGhpbmcgaWYgb3RoZXJ3aXNlLlxuICBpZiAocGFyYW1zLm9wdXNTdGVyZW8gPT09ICd0cnVlJykge1xuICAgIHNkcCA9IHNldENvZGVjUGFyYW0oc2RwLCAnb3B1cy80ODAwMCcsICdzdGVyZW8nLCAnMScpO1xuICB9IGVsc2UgaWYgKHBhcmFtcy5vcHVzU3RlcmVvID09PSAnZmFsc2UnKSB7XG4gICAgc2RwID0gcmVtb3ZlQ29kZWNQYXJhbShzZHAsICdvcHVzLzQ4MDAwJywgJ3N0ZXJlbycpO1xuICB9XG5cbiAgLy8gU2V0IE9wdXMgRkVDLCBpZiBvcHVzZmVjIGlzIHRydWUsIHVuc2V0IGl0LCBpZiBvcHVzZmVjIGlzIGZhbHNlLCBhbmRcbiAgLy8gZG8gbm90aGluZyBpZiBvdGhlcndpc2UuXG4gIGlmIChwYXJhbXMub3B1c0ZlYyA9PT0gJ3RydWUnKSB7XG4gICAgc2RwID0gc2V0Q29kZWNQYXJhbShzZHAsICdvcHVzLzQ4MDAwJywgJ3VzZWluYmFuZGZlYycsICcxJyk7XG4gIH0gZWxzZSBpZiAocGFyYW1zLm9wdXNGZWMgPT09ICdmYWxzZScpIHtcbiAgICBzZHAgPSByZW1vdmVDb2RlY1BhcmFtKHNkcCwgJ29wdXMvNDgwMDAnLCAndXNlaW5iYW5kZmVjJyk7XG4gIH1cblxuICAvLyBTZXQgT3B1cyBEVFgsIGlmIG9wdXNkdHggaXMgdHJ1ZSwgdW5zZXQgaXQsIGlmIG9wdXNkdHggaXMgZmFsc2UsIGFuZFxuICAvLyBkbyBub3RoaW5nIGlmIG90aGVyd2lzZS5cbiAgaWYgKHBhcmFtcy5vcHVzRHR4ID09PSAndHJ1ZScpIHtcbiAgICBzZHAgPSBzZXRDb2RlY1BhcmFtKHNkcCwgJ29wdXMvNDgwMDAnLCAndXNlZHR4JywgJzEnKTtcbiAgfSBlbHNlIGlmIChwYXJhbXMub3B1c0R0eCA9PT0gJ2ZhbHNlJykge1xuICAgIHNkcCA9IHJlbW92ZUNvZGVjUGFyYW0oc2RwLCAnb3B1cy80ODAwMCcsICd1c2VkdHgnKTtcbiAgfVxuXG4gIC8vIFNldCBPcHVzIG1heHBsYXliYWNrcmF0ZSwgaWYgcmVxdWVzdGVkLlxuICBpZiAocGFyYW1zLm9wdXNNYXhQYnIpIHtcbiAgICBzZHAgPSBzZXRDb2RlY1BhcmFtKFxuICAgICAgICBzZHAsICdvcHVzLzQ4MDAwJywgJ21heHBsYXliYWNrcmF0ZScsIHBhcmFtcy5vcHVzTWF4UGJyKTtcbiAgfVxuICByZXR1cm4gc2RwO1xufVxuXG5mdW5jdGlvbiBtYXliZVNldEF1ZGlvU2VuZEJpdFJhdGUoc2RwLCBwYXJhbXMpIHtcbiAgaWYgKCFwYXJhbXMuYXVkaW9TZW5kQml0cmF0ZSkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgTG9nZ2VyLmRlYnVnKCdQcmVmZXIgYXVkaW8gc2VuZCBiaXRyYXRlOiAnICsgcGFyYW1zLmF1ZGlvU2VuZEJpdHJhdGUpO1xuICByZXR1cm4gcHJlZmVyQml0UmF0ZShzZHAsIHBhcmFtcy5hdWRpb1NlbmRCaXRyYXRlLCAnYXVkaW8nKTtcbn1cblxuZnVuY3Rpb24gbWF5YmVTZXRBdWRpb1JlY2VpdmVCaXRSYXRlKHNkcCwgcGFyYW1zKSB7XG4gIGlmICghcGFyYW1zLmF1ZGlvUmVjdkJpdHJhdGUpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIExvZ2dlci5kZWJ1ZygnUHJlZmVyIGF1ZGlvIHJlY2VpdmUgYml0cmF0ZTogJyArIHBhcmFtcy5hdWRpb1JlY3ZCaXRyYXRlKTtcbiAgcmV0dXJuIHByZWZlckJpdFJhdGUoc2RwLCBwYXJhbXMuYXVkaW9SZWN2Qml0cmF0ZSwgJ2F1ZGlvJyk7XG59XG5cbmZ1bmN0aW9uIG1heWJlU2V0VmlkZW9TZW5kQml0UmF0ZShzZHAsIHBhcmFtcykge1xuICBpZiAoIXBhcmFtcy52aWRlb1NlbmRCaXRyYXRlKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBMb2dnZXIuZGVidWcoJ1ByZWZlciB2aWRlbyBzZW5kIGJpdHJhdGU6ICcgKyBwYXJhbXMudmlkZW9TZW5kQml0cmF0ZSk7XG4gIHJldHVybiBwcmVmZXJCaXRSYXRlKHNkcCwgcGFyYW1zLnZpZGVvU2VuZEJpdHJhdGUsICd2aWRlbycpO1xufVxuXG5mdW5jdGlvbiBtYXliZVNldFZpZGVvUmVjZWl2ZUJpdFJhdGUoc2RwLCBwYXJhbXMpIHtcbiAgaWYgKCFwYXJhbXMudmlkZW9SZWN2Qml0cmF0ZSkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgTG9nZ2VyLmRlYnVnKCdQcmVmZXIgdmlkZW8gcmVjZWl2ZSBiaXRyYXRlOiAnICsgcGFyYW1zLnZpZGVvUmVjdkJpdHJhdGUpO1xuICByZXR1cm4gcHJlZmVyQml0UmF0ZShzZHAsIHBhcmFtcy52aWRlb1JlY3ZCaXRyYXRlLCAndmlkZW8nKTtcbn1cblxuLy8gQWRkIGEgYj1BUzpiaXRyYXRlIGxpbmUgdG8gdGhlIG09bWVkaWFUeXBlIHNlY3Rpb24uXG5mdW5jdGlvbiBwcmVmZXJCaXRSYXRlKHNkcCwgYml0cmF0ZSwgbWVkaWFUeXBlKSB7XG4gIGNvbnN0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcblxuICAvLyBGaW5kIG0gbGluZSBmb3IgdGhlIGdpdmVuIG1lZGlhVHlwZS5cbiAgY29uc3QgbUxpbmVJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCBtZWRpYVR5cGUpO1xuICBpZiAobUxpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIExvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGFkZCBiYW5kd2lkdGggbGluZSB0byBzZHAsIGFzIG5vIG0tbGluZSBmb3VuZCcpO1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICAvLyBGaW5kIG5leHQgbS1saW5lIGlmIGFueS5cbiAgbGV0IG5leHRNTGluZUluZGV4ID0gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBtTGluZUluZGV4ICsgMSwgLTEsICdtPScpO1xuICBpZiAobmV4dE1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICBuZXh0TUxpbmVJbmRleCA9IHNkcExpbmVzLmxlbmd0aDtcbiAgfVxuXG4gIC8vIEZpbmQgYy1saW5lIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG0tbGluZS5cbiAgY29uc3QgY0xpbmVJbmRleCA9IGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgbUxpbmVJbmRleCArIDEsXG4gICAgICBuZXh0TUxpbmVJbmRleCwgJ2M9Jyk7XG4gIGlmIChjTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdGYWlsZWQgdG8gYWRkIGJhbmR3aWR0aCBsaW5lIHRvIHNkcCwgYXMgbm8gYy1saW5lIGZvdW5kJyk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGJhbmR3aWR0aCBsaW5lIGFscmVhZHkgZXhpc3RzIGJldHdlZW4gYy1saW5lIGFuZCBuZXh0IG0tbGluZS5cbiAgY29uc3QgYkxpbmVJbmRleCA9IGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgY0xpbmVJbmRleCArIDEsXG4gICAgICBuZXh0TUxpbmVJbmRleCwgJ2I9QVMnKTtcbiAgaWYgKGJMaW5lSW5kZXgpIHtcbiAgICBzZHBMaW5lcy5zcGxpY2UoYkxpbmVJbmRleCwgMSk7XG4gIH1cblxuICAvLyBDcmVhdGUgdGhlIGIgKGJhbmR3aWR0aCkgc2RwIGxpbmUuXG4gIGNvbnN0IGJ3TGluZSA9ICdiPUFTOicgKyBiaXRyYXRlO1xuICAvLyBBcyBwZXIgUkZDIDQ1NjYsIHRoZSBiIGxpbmUgc2hvdWxkIGZvbGxvdyBhZnRlciBjLWxpbmUuXG4gIHNkcExpbmVzLnNwbGljZShjTGluZUluZGV4ICsgMSwgMCwgYndMaW5lKTtcbiAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XG4gIHJldHVybiBzZHA7XG59XG5cbi8vIEFkZCBhbiBhPWZtdHA6IHgtZ29vZ2xlLW1pbi1iaXRyYXRlPWticHMgbGluZSwgaWYgdmlkZW9TZW5kSW5pdGlhbEJpdHJhdGVcbi8vIGlzIHNwZWNpZmllZC4gV2UnbGwgYWxzbyBhZGQgYSB4LWdvb2dsZS1taW4tYml0cmF0ZSB2YWx1ZSwgc2luY2UgdGhlIG1heFxuLy8gbXVzdCBiZSA+PSB0aGUgbWluLlxuZnVuY3Rpb24gbWF5YmVTZXRWaWRlb1NlbmRJbml0aWFsQml0UmF0ZShzZHAsIHBhcmFtcykge1xuICBsZXQgaW5pdGlhbEJpdHJhdGUgPSBwYXJzZUludChwYXJhbXMudmlkZW9TZW5kSW5pdGlhbEJpdHJhdGUpO1xuICBpZiAoIWluaXRpYWxCaXRyYXRlKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIHRoZSBpbml0aWFsIGJpdHJhdGUgdmFsdWUuXG4gIGxldCBtYXhCaXRyYXRlID0gcGFyc2VJbnQoaW5pdGlhbEJpdHJhdGUpO1xuICBjb25zdCBiaXRyYXRlID0gcGFyc2VJbnQocGFyYW1zLnZpZGVvU2VuZEJpdHJhdGUpO1xuICBpZiAoYml0cmF0ZSkge1xuICAgIGlmIChpbml0aWFsQml0cmF0ZSA+IGJpdHJhdGUpIHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnQ2xhbXBpbmcgaW5pdGlhbCBiaXRyYXRlIHRvIG1heCBiaXRyYXRlIG9mICcgKyBiaXRyYXRlICsgJyBrYnBzLicpO1xuICAgICAgaW5pdGlhbEJpdHJhdGUgPSBiaXRyYXRlO1xuICAgICAgcGFyYW1zLnZpZGVvU2VuZEluaXRpYWxCaXRyYXRlID0gaW5pdGlhbEJpdHJhdGU7XG4gICAgfVxuICAgIG1heEJpdHJhdGUgPSBiaXRyYXRlO1xuICB9XG5cbiAgY29uc3Qgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuXG4gIC8vIFNlYXJjaCBmb3IgbSBsaW5lLlxuICBjb25zdCBtTGluZUluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdtPScsICd2aWRlbycpO1xuICBpZiAobUxpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIExvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGZpbmQgdmlkZW8gbS1saW5lJyk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICAvLyBGaWd1cmUgb3V0IHRoZSBmaXJzdCBjb2RlYyBwYXlsb2FkIHR5cGUgb24gdGhlIG09dmlkZW8gU0RQIGxpbmUuXG4gIGNvbnN0IHZpZGVvTUxpbmUgPSBzZHBMaW5lc1ttTGluZUluZGV4XTtcbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ209dmlkZW9cXFxcc1xcXFxkK1xcXFxzW0EtWi9dK1xcXFxzJyk7XG4gIGNvbnN0IHNlbmRQYXlsb2FkVHlwZSA9IHZpZGVvTUxpbmUuc3BsaXQocGF0dGVybilbMV0uc3BsaXQoJyAnKVswXTtcbiAgY29uc3QgZm10cExpbmUgPSBzZHBMaW5lc1tmaW5kTGluZShzZHBMaW5lcywgJ2E9cnRwbWFwJywgc2VuZFBheWxvYWRUeXBlKV07XG4gIGNvbnN0IGNvZGVjTmFtZSA9IGZtdHBMaW5lLnNwbGl0KCdhPXJ0cG1hcDonICtcbiAgICAgIHNlbmRQYXlsb2FkVHlwZSlbMV0uc3BsaXQoJy8nKVswXTtcblxuICAvLyBVc2UgY29kZWMgZnJvbSBwYXJhbXMgaWYgc3BlY2lmaWVkIHZpYSBVUkwgcGFyYW0sIG90aGVyd2lzZSB1c2UgZnJvbSBTRFAuXG4gIGNvbnN0IGNvZGVjID0gcGFyYW1zLnZpZGVvU2VuZENvZGVjIHx8IGNvZGVjTmFtZTtcbiAgc2RwID0gc2V0Q29kZWNQYXJhbShzZHAsIGNvZGVjLCAneC1nb29nbGUtbWluLWJpdHJhdGUnLFxuICAgICAgcGFyYW1zLnZpZGVvU2VuZEluaXRpYWxCaXRyYXRlLnRvU3RyaW5nKCkpO1xuICBzZHAgPSBzZXRDb2RlY1BhcmFtKHNkcCwgY29kZWMsICd4LWdvb2dsZS1tYXgtYml0cmF0ZScsXG4gICAgICBtYXhCaXRyYXRlLnRvU3RyaW5nKCkpO1xuXG4gIHJldHVybiBzZHA7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVBheWxvYWRUeXBlRnJvbU1saW5lKG1MaW5lLCBwYXlsb2FkVHlwZSkge1xuICBtTGluZSA9IG1MaW5lLnNwbGl0KCcgJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbUxpbmUubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobUxpbmVbaV0gPT09IHBheWxvYWRUeXBlLnRvU3RyaW5nKCkpIHtcbiAgICAgIG1MaW5lLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1MaW5lLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ29kZWNCeU5hbWUoc2RwTGluZXMsIGNvZGVjKSB7XG4gIGNvbnN0IGluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdhPXJ0cG1hcCcsIGNvZGVjKTtcbiAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcExpbmVzO1xuICB9XG4gIGNvbnN0IHBheWxvYWRUeXBlID0gZ2V0Q29kZWNQYXlsb2FkVHlwZUZyb21MaW5lKHNkcExpbmVzW2luZGV4XSk7XG4gIHNkcExpbmVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgLy8gU2VhcmNoIGZvciB0aGUgdmlkZW8gbT0gbGluZSBhbmQgcmVtb3ZlIHRoZSBjb2RlYy5cbiAgY29uc3QgbUxpbmVJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCAndmlkZW8nKTtcbiAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwTGluZXM7XG4gIH1cbiAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSByZW1vdmVQYXlsb2FkVHlwZUZyb21NbGluZShzZHBMaW5lc1ttTGluZUluZGV4XSxcbiAgICAgIHBheWxvYWRUeXBlKTtcbiAgcmV0dXJuIHNkcExpbmVzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDb2RlY0J5UGF5bG9hZFR5cGUoc2RwTGluZXMsIHBheWxvYWRUeXBlKSB7XG4gIGNvbnN0IGluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdhPXJ0cG1hcCcsIHBheWxvYWRUeXBlLnRvU3RyaW5nKCkpO1xuICBpZiAoaW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwTGluZXM7XG4gIH1cbiAgc2RwTGluZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAvLyBTZWFyY2ggZm9yIHRoZSB2aWRlbyBtPSBsaW5lIGFuZCByZW1vdmUgdGhlIGNvZGVjLlxuICBjb25zdCBtTGluZUluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdtPScsICd2aWRlbycpO1xuICBpZiAobUxpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHBMaW5lcztcbiAgfVxuICBzZHBMaW5lc1ttTGluZUluZGV4XSA9IHJlbW92ZVBheWxvYWRUeXBlRnJvbU1saW5lKHNkcExpbmVzW21MaW5lSW5kZXhdLFxuICAgICAgcGF5bG9hZFR5cGUpO1xuICByZXR1cm4gc2RwTGluZXM7XG59XG5cbmZ1bmN0aW9uIG1heWJlUmVtb3ZlVmlkZW9GZWMoc2RwLCBwYXJhbXMpIHtcbiAgaWYgKHBhcmFtcy52aWRlb0ZlYyAhPT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBsZXQgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuXG4gIGxldCBpbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1ydHBtYXAnLCAncmVkJyk7XG4gIGlmIChpbmRleCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgY29uc3QgcmVkUGF5bG9hZFR5cGUgPSBnZXRDb2RlY1BheWxvYWRUeXBlRnJvbUxpbmUoc2RwTGluZXNbaW5kZXhdKTtcbiAgc2RwTGluZXMgPSByZW1vdmVDb2RlY0J5UGF5bG9hZFR5cGUoc2RwTGluZXMsIHJlZFBheWxvYWRUeXBlKTtcblxuICBzZHBMaW5lcyA9IHJlbW92ZUNvZGVjQnlOYW1lKHNkcExpbmVzLCAndWxwZmVjJyk7XG5cbiAgLy8gUmVtb3ZlIGZtdHAgbGluZXMgYXNzb2NpYXRlZCB3aXRoIHJlZCBjb2RlYy5cbiAgaW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ2E9Zm10cCcsIHJlZFBheWxvYWRUeXBlLnRvU3RyaW5nKCkpO1xuICBpZiAoaW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIGNvbnN0IGZtdHBMaW5lID0gcGFyc2VGbXRwTGluZShzZHBMaW5lc1tpbmRleF0pO1xuICBjb25zdCBydHhQYXlsb2FkVHlwZSA9IGZtdHBMaW5lLnB0O1xuICBpZiAocnR4UGF5bG9hZFR5cGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIHNkcExpbmVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgc2RwTGluZXMgPSByZW1vdmVDb2RlY0J5UGF5bG9hZFR5cGUoc2RwTGluZXMsIHJ0eFBheWxvYWRUeXBlKTtcbiAgcmV0dXJuIHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xufVxuXG4vLyBQcm9tb3RlcyB8YXVkaW9TZW5kQ29kZWN8IHRvIGJlIHRoZSBmaXJzdCBpbiB0aGUgbT1hdWRpbyBsaW5lLCBpZiBzZXQuXG5mdW5jdGlvbiBtYXliZVByZWZlckF1ZGlvU2VuZENvZGVjKHNkcCwgcGFyYW1zKSB7XG4gIHJldHVybiBtYXliZVByZWZlckNvZGVjKHNkcCwgJ2F1ZGlvJywgJ3NlbmQnLCBwYXJhbXMuYXVkaW9TZW5kQ29kZWMpO1xufVxuXG4vLyBQcm9tb3RlcyB8YXVkaW9SZWN2Q29kZWN8IHRvIGJlIHRoZSBmaXJzdCBpbiB0aGUgbT1hdWRpbyBsaW5lLCBpZiBzZXQuXG5mdW5jdGlvbiBtYXliZVByZWZlckF1ZGlvUmVjZWl2ZUNvZGVjKHNkcCwgcGFyYW1zKSB7XG4gIHJldHVybiBtYXliZVByZWZlckNvZGVjKHNkcCwgJ2F1ZGlvJywgJ3JlY2VpdmUnLCBwYXJhbXMuYXVkaW9SZWN2Q29kZWMpO1xufVxuXG4vLyBQcm9tb3RlcyB8dmlkZW9TZW5kQ29kZWN8IHRvIGJlIHRoZSBmaXJzdCBpbiB0aGUgbT1hdWRpbyBsaW5lLCBpZiBzZXQuXG5mdW5jdGlvbiBtYXliZVByZWZlclZpZGVvU2VuZENvZGVjKHNkcCwgcGFyYW1zKSB7XG4gIHJldHVybiBtYXliZVByZWZlckNvZGVjKHNkcCwgJ3ZpZGVvJywgJ3NlbmQnLCBwYXJhbXMudmlkZW9TZW5kQ29kZWMpO1xufVxuXG4vLyBQcm9tb3RlcyB8dmlkZW9SZWN2Q29kZWN8IHRvIGJlIHRoZSBmaXJzdCBpbiB0aGUgbT1hdWRpbyBsaW5lLCBpZiBzZXQuXG5mdW5jdGlvbiBtYXliZVByZWZlclZpZGVvUmVjZWl2ZUNvZGVjKHNkcCwgcGFyYW1zKSB7XG4gIHJldHVybiBtYXliZVByZWZlckNvZGVjKHNkcCwgJ3ZpZGVvJywgJ3JlY2VpdmUnLCBwYXJhbXMudmlkZW9SZWN2Q29kZWMpO1xufVxuXG4vLyBTZXRzIHxjb2RlY3wgYXMgdGhlIGRlZmF1bHQgfHR5cGV8IGNvZGVjIGlmIGl0J3MgcHJlc2VudC5cbi8vIFRoZSBmb3JtYXQgb2YgfGNvZGVjfCBpcyAnTkFNRS9SQVRFJywgZS5nLiAnb3B1cy80ODAwMCcuXG5mdW5jdGlvbiBtYXliZVByZWZlckNvZGVjKHNkcCwgdHlwZSwgZGlyLCBjb2RlYykge1xuICBjb25zdCBzdHIgPSB0eXBlICsgJyAnICsgZGlyICsgJyBjb2RlYyc7XG4gIGlmICghY29kZWMpIHtcbiAgICBMb2dnZXIuZGVidWcoJ05vIHByZWZlcmVuY2Ugb24gJyArIHN0ciArICcuJyk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIExvZ2dlci5kZWJ1ZygnUHJlZmVyICcgKyBzdHIgKyAnOiAnICsgY29kZWMpO1xuXG4gIGNvbnN0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcblxuICAvLyBTZWFyY2ggZm9yIG0gbGluZS5cbiAgY29uc3QgbUxpbmVJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCB0eXBlKTtcbiAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgLy8gSWYgdGhlIGNvZGVjIGlzIGF2YWlsYWJsZSwgc2V0IGl0IGFzIHRoZSBkZWZhdWx0IGluIG0gbGluZS5cbiAgbGV0IHBheWxvYWQgPSBudWxsO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNkcExpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIGksIC0xLCAnYT1ydHBtYXAnLCBjb2RlYyk7XG4gICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICBwYXlsb2FkID0gZ2V0Q29kZWNQYXlsb2FkVHlwZUZyb21MaW5lKHNkcExpbmVzW2luZGV4XSk7XG4gICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICBzZHBMaW5lc1ttTGluZUluZGV4XSA9IHNldERlZmF1bHRDb2RlYyhzZHBMaW5lc1ttTGluZUluZGV4XSwgcGF5bG9hZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XG4gIHJldHVybiBzZHA7XG59XG5cbi8vIFNldCBmbXRwIHBhcmFtIHRvIHNwZWNpZmljIGNvZGVjIGluIFNEUC4gSWYgcGFyYW0gZG9lcyBub3QgZXhpc3RzLCBhZGQgaXQuXG5mdW5jdGlvbiBzZXRDb2RlY1BhcmFtKHNkcCwgY29kZWMsIHBhcmFtLCB2YWx1ZSwgbWlkKSB7XG4gIGxldCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG4gIGxldCBoZWFkTGluZXMgPSBudWxsO1xuICBsZXQgdGFpbExpbmVzID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBtaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbWlkUmFuZ2UgPSBmaW5kTUxpbmVSYW5nZVdpdGhNSUQoc2RwTGluZXMsIG1pZCk7XG4gICAgaWYgKG1pZFJhbmdlKSB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IG1pZFJhbmdlO1xuICAgICAgaGVhZExpbmVzID0gc2RwTGluZXMuc2xpY2UoMCwgc3RhcnQpO1xuICAgICAgdGFpbExpbmVzID0gc2RwTGluZXMuc2xpY2UoZW5kKTtcbiAgICAgIHNkcExpbmVzID0gc2RwTGluZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU0RQcyBzZW50IGZyb20gTUNVIHVzZSBcXG4gYXMgbGluZSBicmVhay5cbiAgaWYgKHNkcExpbmVzLmxlbmd0aCA8PSAxKSB7XG4gICAgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcbicpO1xuICB9XG5cbiAgY29uc3QgZm10cExpbmVJbmRleCA9IGZpbmRGbXRwTGluZShzZHBMaW5lcywgY29kZWMpO1xuXG4gIGxldCBmbXRwT2JqID0ge307XG4gIGlmIChmbXRwTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ2E9cnRwbWFwJywgY29kZWMpO1xuICAgIGlmIChpbmRleCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHNkcDtcbiAgICB9XG4gICAgY29uc3QgcGF5bG9hZCA9IGdldENvZGVjUGF5bG9hZFR5cGVGcm9tTGluZShzZHBMaW5lc1tpbmRleF0pO1xuICAgIGZtdHBPYmoucHQgPSBwYXlsb2FkLnRvU3RyaW5nKCk7XG4gICAgZm10cE9iai5wYXJhbXMgPSB7fTtcbiAgICBmbXRwT2JqLnBhcmFtc1twYXJhbV0gPSB2YWx1ZTtcbiAgICBzZHBMaW5lcy5zcGxpY2UoaW5kZXggKyAxLCAwLCB3cml0ZUZtdHBMaW5lKGZtdHBPYmopKTtcbiAgfSBlbHNlIHtcbiAgICBmbXRwT2JqID0gcGFyc2VGbXRwTGluZShzZHBMaW5lc1tmbXRwTGluZUluZGV4XSk7XG4gICAgZm10cE9iai5wYXJhbXNbcGFyYW1dID0gdmFsdWU7XG4gICAgc2RwTGluZXNbZm10cExpbmVJbmRleF0gPSB3cml0ZUZtdHBMaW5lKGZtdHBPYmopO1xuICB9XG5cbiAgaWYgKGhlYWRMaW5lcykge1xuICAgIHNkcExpbmVzID0gaGVhZExpbmVzLmNvbmNhdChzZHBMaW5lcykuY29uY2F0KHRhaWxMaW5lcyk7XG4gIH1cbiAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XG4gIHJldHVybiBzZHA7XG59XG5cbi8vIFJlbW92ZSBmbXRwIHBhcmFtIGlmIGl0IGV4aXN0cy5cbmZ1bmN0aW9uIHJlbW92ZUNvZGVjUGFyYW0oc2RwLCBjb2RlYywgcGFyYW0pIHtcbiAgY29uc3Qgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuXG4gIGNvbnN0IGZtdHBMaW5lSW5kZXggPSBmaW5kRm10cExpbmUoc2RwTGluZXMsIGNvZGVjKTtcbiAgaWYgKGZtdHBMaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgY29uc3QgbWFwID0gcGFyc2VGbXRwTGluZShzZHBMaW5lc1tmbXRwTGluZUluZGV4XSk7XG4gIGRlbGV0ZSBtYXAucGFyYW1zW3BhcmFtXTtcblxuICBjb25zdCBuZXdMaW5lID0gd3JpdGVGbXRwTGluZShtYXApO1xuICBpZiAobmV3TGluZSA9PT0gbnVsbCkge1xuICAgIHNkcExpbmVzLnNwbGljZShmbXRwTGluZUluZGV4LCAxKTtcbiAgfSBlbHNlIHtcbiAgICBzZHBMaW5lc1tmbXRwTGluZUluZGV4XSA9IG5ld0xpbmU7XG4gIH1cblxuICBzZHAgPSBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcbiAgcmV0dXJuIHNkcDtcbn1cblxuLy8gU3BsaXQgYW4gZm10cCBsaW5lIGludG8gYW4gb2JqZWN0IGluY2x1ZGluZyAncHQnIGFuZCAncGFyYW1zJy5cbmZ1bmN0aW9uIHBhcnNlRm10cExpbmUoZm10cExpbmUpIHtcbiAgY29uc3QgZm10cE9iaiA9IHt9O1xuICBjb25zdCBzcGFjZVBvcyA9IGZtdHBMaW5lLmluZGV4T2YoJyAnKTtcbiAgY29uc3Qga2V5VmFsdWVzID0gZm10cExpbmUuc3Vic3RyaW5nKHNwYWNlUG9zICsgMSkuc3BsaXQoJzsnKTtcblxuICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgnYT1mbXRwOihcXFxcZCspJyk7XG4gIGNvbnN0IHJlc3VsdCA9IGZtdHBMaW5lLm1hdGNoKHBhdHRlcm4pO1xuICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPT09IDIpIHtcbiAgICBmbXRwT2JqLnB0ID0gcmVzdWx0WzFdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgcGFyYW1zID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5VmFsdWVzLmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgcGFpciA9IGtleVZhbHVlc1tpXS5zcGxpdCgnPScpO1xuICAgIGlmIChwYWlyLmxlbmd0aCA9PT0gMikge1xuICAgICAgcGFyYW1zW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgICB9XG4gIH1cbiAgZm10cE9iai5wYXJhbXMgPSBwYXJhbXM7XG5cbiAgcmV0dXJuIGZtdHBPYmo7XG59XG5cbi8vIEdlbmVyYXRlIGFuIGZtdHAgbGluZSBmcm9tIGFuIG9iamVjdCBpbmNsdWRpbmcgJ3B0JyBhbmQgJ3BhcmFtcycuXG5mdW5jdGlvbiB3cml0ZUZtdHBMaW5lKGZtdHBPYmopIHtcbiAgaWYgKCFmbXRwT2JqLmhhc093blByb3BlcnR5KCdwdCcpIHx8ICFmbXRwT2JqLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHB0ID0gZm10cE9iai5wdDtcbiAgY29uc3QgcGFyYW1zID0gZm10cE9iai5wYXJhbXM7XG4gIGNvbnN0IGtleVZhbHVlcyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xuICAgIGtleVZhbHVlc1tpXSA9IGtleSArICc9JyArIHBhcmFtc1trZXldO1xuICAgICsraTtcbiAgfVxuICBpZiAoaSA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAnYT1mbXRwOicgKyBwdC50b1N0cmluZygpICsgJyAnICsga2V5VmFsdWVzLmpvaW4oJzsnKTtcbn1cblxuLy8gRmluZCBmbXRwIGF0dHJpYnV0ZSBmb3IgfGNvZGVjfCBpbiB8c2RwTGluZXN8LlxuZnVuY3Rpb24gZmluZEZtdHBMaW5lKHNkcExpbmVzLCBjb2RlYykge1xuICAvLyBGaW5kIHBheWxvYWQgb2YgY29kZWMuXG4gIGNvbnN0IHBheWxvYWQgPSBnZXRDb2RlY1BheWxvYWRUeXBlKHNkcExpbmVzLCBjb2RlYyk7XG4gIC8vIEZpbmQgdGhlIHBheWxvYWQgaW4gZm10cCBsaW5lLlxuICByZXR1cm4gcGF5bG9hZCA/IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1mbXRwOicgKyBwYXlsb2FkLnRvU3RyaW5nKCkpIDogbnVsbDtcbn1cblxuLy8gRmluZCB0aGUgbGluZSBpbiBzZHBMaW5lcyB0aGF0IHN0YXJ0cyB3aXRoIHxwcmVmaXh8LCBhbmQsIGlmIHNwZWNpZmllZCxcbi8vIGNvbnRhaW5zIHxzdWJzdHJ8IChjYXNlLWluc2Vuc2l0aXZlIHNlYXJjaCkuXG5mdW5jdGlvbiBmaW5kTGluZShzZHBMaW5lcywgcHJlZml4LCBzdWJzdHIpIHtcbiAgcmV0dXJuIGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgMCwgLTEsIHByZWZpeCwgc3Vic3RyKTtcbn1cblxuLy8gRmluZCB0aGUgbGluZSBpbiBzZHBMaW5lc1tzdGFydExpbmUuLi5lbmRMaW5lIC0gMV0gdGhhdCBzdGFydHMgd2l0aCB8cHJlZml4fFxuLy8gYW5kLCBpZiBzcGVjaWZpZWQsIGNvbnRhaW5zIHxzdWJzdHJ8IChjYXNlLWluc2Vuc2l0aXZlIHNlYXJjaCkuXG5mdW5jdGlvbiBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIHN0YXJ0TGluZSwgZW5kTGluZSwgcHJlZml4LCBzdWJzdHIpIHtcbiAgY29uc3QgcmVhbEVuZExpbmUgPSBlbmRMaW5lICE9PSAtMSA/IGVuZExpbmUgOiBzZHBMaW5lcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSBzdGFydExpbmU7IGkgPCByZWFsRW5kTGluZTsgKytpKSB7XG4gICAgaWYgKHNkcExpbmVzW2ldLmluZGV4T2YocHJlZml4KSA9PT0gMCkge1xuICAgICAgaWYgKCFzdWJzdHIgfHxcbiAgICAgICAgICBzZHBMaW5lc1tpXS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3Vic3RyLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEdldHMgdGhlIGNvZGVjIHBheWxvYWQgdHlwZSBmcm9tIHNkcCBsaW5lcy5cbmZ1bmN0aW9uIGdldENvZGVjUGF5bG9hZFR5cGUoc2RwTGluZXMsIGNvZGVjKSB7XG4gIGNvbnN0IGluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdhPXJ0cG1hcCcsIGNvZGVjKTtcbiAgcmV0dXJuIGluZGV4ID8gZ2V0Q29kZWNQYXlsb2FkVHlwZUZyb21MaW5lKHNkcExpbmVzW2luZGV4XSkgOiBudWxsO1xufVxuXG4vLyBHZXRzIHRoZSBjb2RlYyBwYXlsb2FkIHR5cGUgZnJvbSBhbiBhPXJ0cG1hcDpYIGxpbmUuXG5mdW5jdGlvbiBnZXRDb2RlY1BheWxvYWRUeXBlRnJvbUxpbmUoc2RwTGluZSkge1xuICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgnYT1ydHBtYXA6KFxcXFxkKykgW2EtekEtWjAtOS1dK1xcXFwvXFxcXGQrJyk7XG4gIGNvbnN0IHJlc3VsdCA9IHNkcExpbmUubWF0Y2gocGF0dGVybik7XG4gIHJldHVybiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPT09IDIpID8gcmVzdWx0WzFdIDogbnVsbDtcbn1cblxuLy8gUmV0dXJucyBhIG5ldyBtPSBsaW5lIHdpdGggdGhlIHNwZWNpZmllZCBjb2RlYyBhcyB0aGUgZmlyc3Qgb25lLlxuZnVuY3Rpb24gc2V0RGVmYXVsdENvZGVjKG1MaW5lLCBwYXlsb2FkKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gbUxpbmUuc3BsaXQoJyAnKTtcblxuICAvLyBKdXN0IGNvcHkgdGhlIGZpcnN0IHRocmVlIHBhcmFtZXRlcnM7IGNvZGVjIG9yZGVyIHN0YXJ0cyBvbiBmb3VydGguXG4gIGNvbnN0IG5ld0xpbmUgPSBlbGVtZW50cy5zbGljZSgwLCAzKTtcblxuICAvLyBQdXQgdGFyZ2V0IHBheWxvYWQgZmlyc3QgYW5kIGNvcHkgaW4gdGhlIHJlc3QuXG4gIG5ld0xpbmUucHVzaChwYXlsb2FkKTtcbiAgZm9yIChsZXQgaSA9IDM7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50c1tpXSAhPT0gcGF5bG9hZCkge1xuICAgICAgbmV3TGluZS5wdXNoKGVsZW1lbnRzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld0xpbmUuam9pbignICcpO1xufVxuXG4vKiBCZWxvdyBhcmUgbmV3bHkgYWRkZWQgZnVuY3Rpb25zICovXG5cbi8vIEZvbGxvd2luZyBjb2RlY3Mgd2lsbCBub3QgYmUgcmVtb3ZlZCBmcm9tIFNEUCBldmVudCB0aGV5IGFyZSBub3QgaW4gdGhlXG4vLyB1c2VyLXNwZWNpZmllZCBjb2RlYyBsaXN0LlxuY29uc3QgYXVkaW9Db2RlY0FsbG93TGlzdCA9IFsnQ04nLCAndGVsZXBob25lLWV2ZW50J107XG5jb25zdCB2aWRlb0NvZGVjQWxsb3dMaXN0ID0gWydyZWQnLCAndWxwZmVjJywgJ2ZsZXhmZWMnXTtcblxuLy8gUmV0dXJucyBhIG5ldyBtPSBsaW5lIHdpdGggdGhlIHNwZWNpZmllZCBjb2RlYyBvcmRlci5cbmZ1bmN0aW9uIHNldENvZGVjT3JkZXIobUxpbmUsIHBheWxvYWRzKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gbUxpbmUuc3BsaXQoJyAnKTtcblxuICAvLyBKdXN0IGNvcHkgdGhlIGZpcnN0IHRocmVlIHBhcmFtZXRlcnM7IGNvZGVjIG9yZGVyIHN0YXJ0cyBvbiBmb3VydGguXG4gIGxldCBuZXdMaW5lID0gZWxlbWVudHMuc2xpY2UoMCwgMyk7XG5cbiAgLy8gQ29uY2F0IHBheWxvYWQgdHlwZXMuXG4gIG5ld0xpbmUgPSBuZXdMaW5lLmNvbmNhdChwYXlsb2Fkcyk7XG5cbiAgcmV0dXJuIG5ld0xpbmUuam9pbignICcpO1xufVxuXG4vLyBBcHBlbmQgUlRYIHBheWxvYWRzIGZvciBleGlzdGluZyBwYXlsb2Fkcy5cbmZ1bmN0aW9uIGFwcGVuZFJ0eFBheWxvYWRzKHNkcExpbmVzLCBwYXlsb2Fkcykge1xuICBmb3IgKGNvbnN0IHBheWxvYWQgb2YgcGF5bG9hZHMpIHtcbiAgICBjb25zdCBpbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1mbXRwJywgJ2FwdD0nICsgcGF5bG9hZCk7XG4gICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmbXRwTGluZSA9IHBhcnNlRm10cExpbmUoc2RwTGluZXNbaW5kZXhdKTtcbiAgICAgIHBheWxvYWRzLnB1c2goZm10cExpbmUucHQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGF5bG9hZHM7XG59XG5cbi8vIFJlbW92ZSBhIGNvZGVjIHdpdGggYWxsIGl0cyBhc3NvY2lhdGVkIGEgbGluZXMuXG5mdW5jdGlvbiByZW1vdmVDb2RlY0ZyYW1BTGluZShzZHBMaW5lcywgcGF5bG9hZCkge1xuICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgnYT0ocnRwbWFwfHJ0Y3AtZmJ8Zm10cCk6JytwYXlsb2FkKydcXFxccycpO1xuICBmb3IgKGxldCBpPXNkcExpbmVzLmxlbmd0aC0xOyBpPjA7IGktLSkge1xuICAgIGlmIChzZHBMaW5lc1tpXS5tYXRjaChwYXR0ZXJuKSkge1xuICAgICAgc2RwTGluZXMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2RwTGluZXM7XG59XG5cbi8vIEZpbmQgbS1saW5lIGFuZCBuZXh0IG0tbGluZSB3aXRoIGdpdmUgbWlkLCByZXR1cm4geyBzdGFydCwgZW5kIH0uXG5mdW5jdGlvbiBmaW5kTUxpbmVSYW5nZVdpdGhNSUQoc2RwTGluZXMsIG1pZCkge1xuICBjb25zdCBtaWRMaW5lID0gJ2E9bWlkOicgKyBtaWQ7XG4gIGxldCBtaWRJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCBtaWRMaW5lKTtcbiAgLy8gQ29tcGFyZSB0aGUgd2hvbGUgbGluZSBzaW5jZSBmaW5kTGluZSBvbmx5IGNvbXBhcmVzIHByZWZpeFxuICB3aGlsZSAobWlkSW5kZXggPj0gMCAmJiBzZHBMaW5lc1ttaWRJbmRleF0gIT09IG1pZExpbmUpIHtcbiAgICBtaWRJbmRleCA9IGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgbWlkSW5kZXgsIC0xLCBtaWRMaW5lKTtcbiAgfVxuICBpZiAobWlkSW5kZXggPj0gMCkge1xuICAgIC8vIEZvdW5kIG1hdGNoZWQgYT1taWQgbGluZVxuICAgIGNvbnN0IG5leHRNTGluZUluZGV4ID0gKGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgbWlkSW5kZXgsIC0xLCAnbT0nKVxuICAgICAgICB8fCAtMSk7XG4gICAgbGV0IG1MaW5lSW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCBpID0gbWlkSW5kZXg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoc2RwTGluZXNbaV0uaW5kZXhPZignbT0nKSA+PSAwKSB7XG4gICAgICAgIG1MaW5lSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1MaW5lSW5kZXggPj0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IG1MaW5lSW5kZXgsXG4gICAgICAgIGVuZDogbmV4dE1MaW5lSW5kZXhcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBSZW9yZGVyIGNvZGVjcyBpbiBtLWxpbmUgYWNjb3JkaW5nIHRoZSBvcmRlciBvZiB8Y29kZWNzfC4gUmVtb3ZlIGNvZGVjcyBmcm9tXG4vLyBtLWxpbmUgaWYgaXQgaXMgbm90IHByZXNlbnQgaW4gfGNvZGVjc3xcbi8vIEFwcGxpZWQgb24gc3BlY2lmaWMgbS1saW5lIGlmIG1pZCBpcyBwcmVzZW50ZWRcbi8vIFRoZSBmb3JtYXQgb2YgfGNvZGVjfCBpcyAnTkFNRS9SQVRFJywgZS5nLiAnb3B1cy80ODAwMCcuXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckNvZGVjcyhzZHAsIHR5cGUsIGNvZGVjcywgbWlkKSB7XG4gIGlmICghY29kZWNzIHx8IGNvZGVjcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgY29kZWNzID0gdHlwZSA9PT0gJ2F1ZGlvJyA/IGNvZGVjcy5jb25jYXQoYXVkaW9Db2RlY0FsbG93TGlzdCkgOiBjb2RlY3MuY29uY2F0KFxuICAgICAgdmlkZW9Db2RlY0FsbG93TGlzdCk7XG5cbiAgbGV0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcbiAgbGV0IGhlYWRMaW5lcyA9IG51bGw7XG4gIGxldCB0YWlsTGluZXMgPSBudWxsO1xuICBpZiAodHlwZW9mIG1pZCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtaWRSYW5nZSA9IGZpbmRNTGluZVJhbmdlV2l0aE1JRChzZHBMaW5lcywgbWlkKTtcbiAgICBpZiAobWlkUmFuZ2UpIHtcbiAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gbWlkUmFuZ2U7XG4gICAgICBoZWFkTGluZXMgPSBzZHBMaW5lcy5zbGljZSgwLCBzdGFydCk7XG4gICAgICB0YWlsTGluZXMgPSBzZHBMaW5lcy5zbGljZShlbmQpO1xuICAgICAgc2RwTGluZXMgPSBzZHBMaW5lcy5zbGljZShzdGFydCwgZW5kKTtcbiAgICB9XG4gIH1cblxuICAvLyBTZWFyY2ggZm9yIG0gbGluZS5cbiAgY29uc3QgbUxpbmVJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCB0eXBlKTtcbiAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgY29uc3Qgb3JpZ2luUGF5bG9hZHMgPSBzZHBMaW5lc1ttTGluZUluZGV4XS5zcGxpdCgnICcpO1xuICBvcmlnaW5QYXlsb2Fkcy5zcGxpY2UoMCwgMyk7XG5cbiAgLy8gSWYgdGhlIGNvZGVjIGlzIGF2YWlsYWJsZSwgc2V0IGl0IGFzIHRoZSBkZWZhdWx0IGluIG0gbGluZS5cbiAgbGV0IHBheWxvYWRzID0gW107XG4gIGZvciAoY29uc3QgY29kZWMgb2YgY29kZWNzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZHBMaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5kZXggPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIGksIC0xLCAnYT1ydHBtYXAnLCBjb2RlYyk7XG4gICAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGdldENvZGVjUGF5bG9hZFR5cGVGcm9tTGluZShzZHBMaW5lc1tpbmRleF0pO1xuICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgIHBheWxvYWRzLnB1c2gocGF5bG9hZCk7XG4gICAgICAgICAgaSA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBheWxvYWRzID0gYXBwZW5kUnR4UGF5bG9hZHMoc2RwTGluZXMsIHBheWxvYWRzKTtcbiAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSBzZXRDb2RlY09yZGVyKHNkcExpbmVzW21MaW5lSW5kZXhdLCBwYXlsb2Fkcyk7XG5cbiAgLy8gUmVtb3ZlIGEgbGluZXMuXG4gIGZvciAoY29uc3QgcGF5bG9hZCBvZiBvcmlnaW5QYXlsb2Fkcykge1xuICAgIGlmIChwYXlsb2Fkcy5pbmRleE9mKHBheWxvYWQpPT09LTEpIHtcbiAgICAgIHNkcExpbmVzID0gcmVtb3ZlQ29kZWNGcmFtQUxpbmUoc2RwTGluZXMsIHBheWxvYWQpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChoZWFkTGluZXMpIHtcbiAgICBzZHBMaW5lcyA9IGhlYWRMaW5lcy5jb25jYXQoc2RwTGluZXMpLmNvbmNhdCh0YWlsTGluZXMpO1xuICB9XG4gIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuICByZXR1cm4gc2RwO1xufVxuXG4vLyBBZGQgbGVnYWN5IHNpbXVsY2FzdC5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWdhY3lTaW11bGNhc3Qoc2RwLCB0eXBlLCBudW1TdHJlYW1zLCBtaWQpIHtcbiAgaWYgKCFudW1TdHJlYW1zIHx8ICEobnVtU3RyZWFtcyA+IDEpKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIGxldCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG4gIGxldCBoZWFkTGluZXMgPSBudWxsO1xuICBsZXQgdGFpbExpbmVzID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBtaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbWlkUmFuZ2UgPSBmaW5kTUxpbmVSYW5nZVdpdGhNSUQoc2RwTGluZXMsIG1pZCk7XG4gICAgaWYgKG1pZFJhbmdlKSB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IG1pZFJhbmdlO1xuICAgICAgaGVhZExpbmVzID0gc2RwTGluZXMuc2xpY2UoMCwgc3RhcnQpO1xuICAgICAgdGFpbExpbmVzID0gc2RwTGluZXMuc2xpY2UoZW5kKTtcbiAgICAgIHNkcExpbmVzID0gc2RwTGluZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2VhcmNoIGZvciBtIGxpbmUuXG4gIGNvbnN0IG1MaW5lU3RhcnQgPSBmaW5kTGluZShzZHBMaW5lcywgJ209JywgdHlwZSk7XG4gIGlmIChtTGluZVN0YXJ0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBsZXQgbUxpbmVFbmQgPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIG1MaW5lU3RhcnQgKyAxLCAtMSwgJ209Jyk7XG4gIGlmIChtTGluZUVuZCA9PT0gbnVsbCkge1xuICAgIG1MaW5lRW5kID0gc2RwTGluZXMubGVuZ3RoO1xuICB9XG5cbiAgY29uc3Qgc3NyY0dldHRlciA9IChsaW5lKSA9PiB7XG4gICAgY29uc3QgcGFydHMgPSBsaW5lLnNwbGl0KCcgJyk7XG4gICAgY29uc3Qgc3NyYyA9IHBhcnRzWzBdLnNwbGl0KCc6JylbMV07XG4gICAgcmV0dXJuIHNzcmM7XG4gIH07XG5cbiAgLy8gUHJvY2VzcyBzc3JjIGxpbmVzIGZyb20gbUxpbmVJbmRleC5cbiAgY29uc3QgcmVtb3ZlcyA9IG5ldyBTZXQoKTtcbiAgY29uc3Qgc3NyY3MgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IGdzc3JjcyA9IG5ldyBTZXQoKTtcbiAgY29uc3Qgc2ltTGluZXMgPSBbXTtcbiAgY29uc3Qgc2ltR3JvdXBMaW5lcyA9IFtdO1xuICBsZXQgaSA9IG1MaW5lU3RhcnQgKyAxO1xuICB3aGlsZSAoaSA8IG1MaW5lRW5kKSB7XG4gICAgY29uc3QgbGluZSA9IHNkcExpbmVzW2ldO1xuICAgIGlmIChsaW5lID09PSAnJykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChsaW5lLmluZGV4T2YoJ2E9c3NyYzonKSA+IC0xKSB7XG4gICAgICBjb25zdCBzc3JjID0gc3NyY0dldHRlcihzZHBMaW5lc1tpXSk7XG4gICAgICBzc3Jjcy5hZGQoc3NyYyk7XG4gICAgICBpZiAobGluZS5pbmRleE9mKCdjbmFtZScpID4gLTEgfHwgbGluZS5pbmRleE9mKCdtc2lkJykgPiAtMSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IG51bVN0cmVhbXM7IGorKykge1xuICAgICAgICAgIGNvbnN0IG5zc3JjID0gKHBhcnNlSW50KHNzcmMpICsgaikgKyAnJztcbiAgICAgICAgICBzaW1MaW5lcy5wdXNoKGxpbmUucmVwbGFjZShzc3JjLCBuc3NyYykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVzLmFkZChsaW5lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxpbmUuaW5kZXhPZignYT1zc3JjLWdyb3VwOkZJRCcpID4gLTEpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdCgnICcpO1xuICAgICAgZ3NzcmNzLmFkZChwYXJ0c1syXSk7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IG51bVN0cmVhbXM7IGorKykge1xuICAgICAgICBjb25zdCBuc3NyYzEgPSAocGFyc2VJbnQocGFydHNbMV0pICsgaikgKyAnJztcbiAgICAgICAgY29uc3QgbnNzcmMyID0gKHBhcnNlSW50KHBhcnRzWzJdKSArIGopICsgJyc7XG4gICAgICAgIHNpbUdyb3VwTGluZXMucHVzaChcbiAgICAgICAgICBsaW5lLnJlcGxhY2UocGFydHNbMV0sIG5zc3JjMSkucmVwbGFjZShwYXJ0c1syXSwgbnNzcmMyKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGkrKztcbiAgfVxuXG4gIGNvbnN0IGluc2VydFBvcyA9IGk7XG4gIHNzcmNzLmZvckVhY2goc3NyYyA9PiB7XG4gICAgaWYgKCFnc3NyY3MuaGFzKHNzcmMpKSB7XG4gICAgICBsZXQgZ3JvdXBMaW5lID0gJ2E9c3NyYy1ncm91cDpTSU0nO1xuICAgICAgZ3JvdXBMaW5lID0gZ3JvdXBMaW5lICsgJyAnICsgc3NyYztcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgbnVtU3RyZWFtczsgaisrKSB7XG4gICAgICAgIGdyb3VwTGluZSA9IGdyb3VwTGluZSArICcgJyArIChwYXJzZUludChzc3JjKSArIGopO1xuICAgICAgfVxuICAgICAgc2ltR3JvdXBMaW5lcy5wdXNoKGdyb3VwTGluZSk7XG4gICAgfVxuICB9KTtcblxuICBzaW1MaW5lcy5zb3J0KCk7XG4gIC8vIEluc2VydCBzaW11bGNhc3Qgc3NyYyBsaW5lcy5cbiAgc2RwTGluZXMuc3BsaWNlKGluc2VydFBvcywgMCwgLi4uc2ltR3JvdXBMaW5lcyk7XG4gIHNkcExpbmVzLnNwbGljZShpbnNlcnRQb3MsIDAsIC4uLnNpbUxpbmVzKTtcbiAgc2RwTGluZXMgPSBzZHBMaW5lcy5maWx0ZXIobGluZSA9PiAhcmVtb3Zlcy5oYXMobGluZSkpO1xuXG4gIGlmIChoZWFkTGluZXMpIHtcbiAgICBzZHBMaW5lcyA9IGhlYWRMaW5lcy5jb25jYXQoc2RwTGluZXMpLmNvbmNhdCh0YWlsTGluZXMpO1xuICB9XG4gIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuICByZXR1cm4gc2RwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWF4Qml0cmF0ZShzZHAsIGVuY29kaW5nUGFyYW1ldGVyc0xpc3QsIG1pZCkge1xuICBmb3IgKGNvbnN0IGVuY29kaW5nUGFyYW1ldGVycyBvZiBlbmNvZGluZ1BhcmFtZXRlcnNMaXN0KSB7XG4gICAgaWYgKGVuY29kaW5nUGFyYW1ldGVycy5tYXhCaXRyYXRlKSB7XG4gICAgICBzZHAgPSBzZXRDb2RlY1BhcmFtKFxuICAgICAgICAgIHNkcCwgZW5jb2RpbmdQYXJhbWV0ZXJzLmNvZGVjLm5hbWUsICd4LWdvb2dsZS1tYXgtYml0cmF0ZScsXG4gICAgICAgICAgKGVuY29kaW5nUGFyYW1ldGVycy5tYXhCaXRyYXRlKS50b1N0cmluZygpLCBtaWQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2RwO1xufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vKiBnbG9iYWwgV2ViVHJhbnNwb3J0QmlkaXJlY3Rpb25hbFN0cmVhbSAqL1xuXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyLCBPd3RFdmVudH0gZnJvbSAnLi9ldmVudC5qcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5mdW5jdGlvbiBpc0FsbG93ZWRWYWx1ZShvYmosIGFsbG93ZWRWYWx1ZXMpIHtcbiAgcmV0dXJuIChhbGxvd2VkVmFsdWVzLnNvbWUoKGVsZSkgPT4ge1xuICAgIHJldHVybiBlbGUgPT09IG9iajtcbiAgfSkpO1xufVxuLyoqXG4gKiBAY2xhc3MgU3RyZWFtU291cmNlSW5mb1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIEluZm9ybWF0aW9uIG9mIGEgc3RyZWFtJ3Mgc291cmNlLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZGVzY3JpcHRpb24gQXVkaW8gc291cmNlIGluZm8gb3IgdmlkZW8gc291cmNlIGluZm8gY291bGQgYmUgdW5kZWZpbmVkIGlmXG4gKiBhIHN0cmVhbSBkb2VzIG5vdCBoYXZlIGF1ZGlvL3ZpZGVvIHRyYWNrLlxuICogQHBhcmFtIHs/c3RyaW5nfSBhdWRpb1NvdXJjZUluZm8gQXVkaW8gc291cmNlIGluZm8uIEFjY2VwdGVkIHZhbHVlcyBhcmU6XG4gKiBcIm1pY1wiLCBcInNjcmVlbi1jYXN0XCIsIFwiZmlsZVwiLCBcIm1peGVkXCIgb3IgdW5kZWZpbmVkLlxuICogQHBhcmFtIHs/c3RyaW5nfSB2aWRlb1NvdXJjZUluZm8gVmlkZW8gc291cmNlIGluZm8uIEFjY2VwdGVkIHZhbHVlcyBhcmU6XG4gKiBcImNhbWVyYVwiLCBcInNjcmVlbi1jYXN0XCIsIFwiZmlsZVwiLCBcIm1peGVkXCIgb3IgdW5kZWZpbmVkLlxuICogQHBhcmFtIHtib29sZWFufSBkYXRhU291cmNlSW5mbyBJbmRpY2F0ZXMgd2hldGhlciBpdCBpcyBkYXRhLiBBY2NlcHRlZCB2YWx1ZXNcbiAqIGFyZSBib29sZWFuLlxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtU291cmNlSW5mbyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGF1ZGlvU291cmNlSW5mbywgdmlkZW9Tb3VyY2VJbmZvLCBkYXRhU291cmNlSW5mbykge1xuICAgIGlmICghaXNBbGxvd2VkVmFsdWUoYXVkaW9Tb3VyY2VJbmZvLCBbdW5kZWZpbmVkLCAnbWljJywgJ3NjcmVlbi1jYXN0JyxcbiAgICAgICdmaWxlJywgJ21peGVkJ10pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvcnJlY3QgdmFsdWUgZm9yIGF1ZGlvU291cmNlSW5mbycpO1xuICAgIH1cbiAgICBpZiAoIWlzQWxsb3dlZFZhbHVlKHZpZGVvU291cmNlSW5mbywgW3VuZGVmaW5lZCwgJ2NhbWVyYScsICdzY3JlZW4tY2FzdCcsXG4gICAgICAnZmlsZScsICdlbmNvZGVkLWZpbGUnLCAncmF3LWZpbGUnLCAnbWl4ZWQnXSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29ycmVjdCB2YWx1ZSBmb3IgdmlkZW9Tb3VyY2VJbmZvJyk7XG4gICAgfVxuICAgIHRoaXMuYXVkaW8gPSBhdWRpb1NvdXJjZUluZm87XG4gICAgdGhpcy52aWRlbyA9IHZpZGVvU291cmNlSW5mbztcbiAgICB0aGlzLmRhdGEgPSBkYXRhU291cmNlSW5mbztcbiAgfVxufVxuLyoqXG4gKiBAY2xhc3MgU3RyZWFtXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgQmFzZSBjbGFzcyBvZiBzdHJlYW1zLlxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW0gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihzdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICgoc3RyZWFtICYmICEoc3RyZWFtIGluc3RhbmNlb2YgTWVkaWFTdHJlYW0pICYmXG4gICAgICAgICAhKHR5cGVvZiBXZWJUcmFuc3BvcnRCaWRpcmVjdGlvbmFsU3RyZWFtID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgIHN0cmVhbSBpbnN0YW5jZW9mIFdlYlRyYW5zcG9ydEJpZGlyZWN0aW9uYWxTdHJlYW0pKSB8fFxuICAgICAgICAodHlwZW9mIHNvdXJjZUluZm8gIT09ICdvYmplY3QnKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBzdHJlYW0gb3Igc291cmNlSW5mby4nKTtcbiAgICB9XG4gICAgaWYgKHN0cmVhbSAmJiAoc3RyZWFtIGluc3RhbmNlb2YgTWVkaWFTdHJlYW0pICYmXG4gICAgICAgICgoc3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoID4gMCAmJiAhc291cmNlSW5mby5hdWRpbykgfHxcbiAgICAgICAgIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCA+IDAgJiYgIXNvdXJjZUluZm8udmlkZW8pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNaXNzaW5nIGF1ZGlvIHNvdXJjZSBpbmZvIG9yIHZpZGVvIHNvdXJjZSBpbmZvLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbVxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYWNhcHR1cmUtc3RyZWFtcy8jbWVkaWFzdHJlYW18TWVkaWFTdHJlYW0gQVBJIG9mIE1lZGlhIENhcHR1cmUgYW5kIFN0cmVhbXN9LlxuICAgICAqIEBkZXNjIFRoaXMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBzdHJlYW0gaW5zdGVhZC5cbiAgICAgKi9cbiAgICBpZiAoc3RyZWFtIGluc3RhbmNlb2YgTWVkaWFTdHJlYW0pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVkaWFTdHJlYW0nLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogc3RyZWFtLFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge01lZGlhU3RyZWFtIHwgV2ViVHJhbnNwb3J0QmlkaXJlY3Rpb25hbFN0cmVhbSB8IHVuZGVmaW5lZH0gc3RyZWFtXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbVxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYWNhcHR1cmUtc3RyZWFtcy8jbWVkaWFzdHJlYW18TWVkaWFTdHJlYW0gQVBJIG9mIE1lZGlhIENhcHR1cmUgYW5kIFN0cmVhbXN9XG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93aWNnLmdpdGh1Yi5pby93ZWItdHJhbnNwb3J0LyBXZWJUcmFuc3BvcnR9LlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc3RyZWFtJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHN0cmVhbSxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5TdHJlYW1Tb3VyY2VJbmZvfSBzb3VyY2VcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuU3RyZWFtXG4gICAgICogQGRlc2MgU291cmNlIGluZm8gb2YgYSBzdHJlYW0uXG4gICAgICovXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZUluZm8sXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7b2JqZWN0fSBhdHRyaWJ1dGVzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbVxuICAgICAqIEBkZXNjIEN1c3RvbSBhdHRyaWJ1dGVzIG9mIGEgc3RyZWFtLlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYXR0cmlidXRlcycsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLFxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEBjbGFzcyBMb2NhbFN0cmVhbVxuICogQGNsYXNzRGVzYyBTdHJlYW0gY2FwdHVyZWQgZnJvbSBjdXJyZW50IGVuZHBvaW50LlxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5TdHJlYW1cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gc3RyZWFtIFVuZGVybHlpbmcgTWVkaWFTdHJlYW0uXG4gKiBAcGFyYW0ge093dC5CYXNlLlN0cmVhbVNvdXJjZUluZm99IHNvdXJjZUluZm8gSW5mb3JtYXRpb24gYWJvdXQgc3RyZWFtJ3NcbiAqIHNvdXJjZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIEN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoZSBzdHJlYW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2NhbFN0cmVhbSBleHRlbmRzIFN0cmVhbSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHN0cmVhbSwgc291cmNlSW5mbywgYXR0cmlidXRlcykge1xuICAgIGlmICghc3RyZWFtKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdHJlYW0gY2Fubm90IGJlIG51bGwuJyk7XG4gICAgfVxuICAgIHN1cGVyKHN0cmVhbSwgc291cmNlSW5mbywgYXR0cmlidXRlcyk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5Mb2NhbFN0cmVhbVxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IFV0aWxzLmNyZWF0ZVV1aWQoKSxcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBAY2xhc3MgUmVtb3RlU3RyZWFtXG4gKiBAY2xhc3NEZXNjIFN0cmVhbSBzZW50IGZyb20gYSByZW1vdGUgZW5kcG9pbnQuIEluIGNvbmZlcmVuY2UgbW9kZSxcbiAqIFJlbW90ZVN0cmVhbSdzIHN0cmVhbSBpcyBhbHdheXMgdW5kZWZpbmVkLiBQbGVhc2UgZ2V0IE1lZGlhU3RyZWFtIG9yXG4gKiBSZWFkYWJsZVN0cmVhbSBmcm9tIHN1YnNjcmlwdGlvbidzIHN0cmVhbSBwcm9wZXJ0eS5cbiAqIEV2ZW50czpcbiAqXG4gKiB8IEV2ZW50IE5hbWUgICAgICB8IEFyZ3VtZW50IFR5cGUgICAgfCBGaXJlZCB3aGVuICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tfCAtLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgZW5kZWQgICAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFN0cmVhbSBpcyBubyBsb25nZXIgYXZhaWxhYmxlIG9uIHNlcnZlciBzaWRlLiAgIHxcbiAqIHwgdXBkYXRlZCAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFN0cmVhbSBpcyB1cGRhdGVkLiB8XG4gKlxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5TdHJlYW1cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFJlbW90ZVN0cmVhbSBleHRlbmRzIFN0cmVhbSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGlkLCBvcmlnaW4sIHN0cmVhbSwgc291cmNlSW5mbywgYXR0cmlidXRlcykge1xuICAgIHN1cGVyKHN0cmVhbSwgc291cmNlSW5mbywgYXR0cmlidXRlcyk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5SZW1vdGVTdHJlYW1cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBpZCA/IGlkIDogVXRpbHMuY3JlYXRlVXVpZCgpLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gb3JpZ2luXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlJlbW90ZVN0cmVhbVxuICAgICAqIEBkZXNjIElEIG9mIHRoZSByZW1vdGUgZW5kcG9pbnQgd2hvIHB1Ymxpc2hlZCB0aGlzIHN0cmVhbS5cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ29yaWdpbicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogb3JpZ2luLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlB1YmxpY2F0aW9uU2V0dGluZ3N9IHNldHRpbmdzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlJlbW90ZVN0cmVhbVxuICAgICAqIEBkZXNjIE9yaWdpbmFsIHNldHRpbmdzIGZvciBwdWJsaXNoaW5nIHRoaXMgc3RyZWFtLiBUaGlzIHByb3BlcnR5IGlzIG9ubHlcbiAgICAgKiB2YWxpZCBpbiBjb25mZXJlbmNlIG1vZGUuXG4gICAgICovXG4gICAgdGhpcy5zZXR0aW5ncyA9IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXN9IGV4dHJhQ2FwYWJpbGl0aWVzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlJlbW90ZVN0cmVhbVxuICAgICAqIEBkZXNjIEV4dHJhIGNhcGFiaWxpdGllcyByZW1vdGUgZW5kcG9pbnQgcHJvdmlkZXMgZm9yIHN1YnNjcmlwdGlvbi4gRXh0cmFcbiAgICAgKiBjYXBhYmlsaXRpZXMgZG9uJ3QgaW5jbHVkZSBvcmlnaW5hbCBzZXR0aW5ncy4gVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IHZhbGlkXG4gICAgICogaW4gY29uZmVyZW5jZSBtb2RlLlxuICAgICAqL1xuICAgIHRoaXMuZXh0cmFDYXBhYmlsaXRpZXMgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgU3RyZWFtRXZlbnRcbiAqIEBjbGFzc0Rlc2MgRXZlbnQgZm9yIFN0cmVhbS5cbiAqIEBleHRlbmRzIE93dC5CYXNlLk93dEV2ZW50XG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbUV2ZW50IGV4dGVuZHMgT3d0RXZlbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpbml0KSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuU3RyZWFtfSBzdHJlYW1cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuU3RyZWFtRXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLnN0cmVhbSA9IGluaXQuc3RyZWFtO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDIwPiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAY2xhc3MgVHJhbnNwb3J0VHlwZVxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFRyYW5zcG9ydCB0eXBlIGVudW1lcmF0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgVHJhbnNwb3J0VHlwZSA9IHtcbiAgUVVJQzogJ3F1aWMnLFxuICBXRUJSVEM6ICd3ZWJydGMnLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgVHJhbnNwb3J0Q29uc3RyYWludHNcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSB0cmFuc3BvcnQgY29uc3RyYWludHMgZm9yIHB1YmxpY2F0aW9uIGFuZFxuICogc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNwb3J0Q29uc3RyYWludHMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpZCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FycmF5LjxPd3QuQmFzZS5UcmFuc3BvcnRUeXBlPn0gdHlwZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5UcmFuc3BvcnRDb25zdHJhaW50c1xuICAgICAqIEBkZXNjIFRyYW5zcG9ydCB0eXBlIGZvciBwdWJsaWNhdGlvbiBhbmQgc3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVHJhbnNwb3J0Q29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBUcmFuc3BvcnQgSUQuIFVuZGVmaW5lZCB0cmFuc3BvcnQgSUQgcmVzdWx0cyBzZXJ2ZXIgdG8gYXNzaWduIGEgbmV3XG4gICAgICogb25lLiBJdCBzaG91bGQgYWx3YXlzIGJlIHVuZGVmaW5lZCBpZiB0cmFuc3BvcnQgdHlwZSBpcyB3ZWJydGMgc2luY2UgdGhlXG4gICAgICogd2VicnRjIGFnZW50IG9mIE9XVCBzZXJ2ZXIgZG9lc24ndCBzdXBwb3J0IG11bHRpcGxlIHRyYW5zY2VpdmVycyBvbiBhXG4gICAgICogc2luZ2xlIFBlZXJDb25uZWN0aW9uLlxuICAgICAqL1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBUcmFuc3BvcnRTZXR0aW5nc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFJlcHJlc2VudHMgdGhlIHRyYW5zcG9ydCBzZXR0aW5ncyBmb3IgcHVibGljYXRpb24gYW5kXG4gKiBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc3BvcnRTZXR0aW5ncyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGlkKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuVHJhbnNwb3J0VHlwZX0gdHlwZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5UcmFuc3BvcnRTZXR0aW5nc1xuICAgICAqIEBkZXNjIFRyYW5zcG9ydCB0eXBlIGZvciBwdWJsaWNhdGlvbiBhbmQgc3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5UcmFuc3BvcnRTZXR0aW5nc1xuICAgICAqIEBkZXNjIFRyYW5zcG9ydCBJRC5cbiAgICAgKi9cbiAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/QXJyYXkuPFJUQ1J0cFRyYW5zY2VpdmVyPn0gcnRwVHJhbnNjZWl2ZXJzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlRyYW5zcG9ydFNldHRpbmdzXG4gICAgICogQGRlc2MgQSBsaXN0IG9mIFJUQ1J0cFRyYW5zY2VpdmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHVibGljYXRpb24gb3JcbiAgICAgKiBzdWJzY3JpcHRpb24uIEl0J3Mgb25seSBhdmFpbGFibGUgaW4gY29uZmVyZW5jZSBtb2RlIHdoZW4gVHJhbnNwb3J0VHlwZVxuICAgICAqIGlzIHdlYnJ0Yy5cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vd2VicnRjLXBjLyNydGNydHB0cmFuc2NlaXZlci1pbnRlcmZhY2V8UlRDUnRwVHJhbnNjZWl2ZXIgSW50ZXJmYWNlIG9mIFdlYlJUQyAxLjB9LlxuICAgICAqL1xuICAgIHRoaXMucnRwVHJhbnNjZWl2ZXJzID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBuYXZpZ2F0b3IsIHdpbmRvdyAqL1xuXG4ndXNlIHN0cmljdCc7XG5jb25zdCBzZGtWZXJzaW9uID0gJzUuMCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gaXNGaXJlZm94KCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goJ0ZpcmVmb3gnKSAhPT0gbnVsbDtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gaXNDaHJvbWUoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgnQ2hyb21lJykgIT09IG51bGw7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICByZXR1cm4gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWRnZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLihcXGQrKSQvKSAhPT0gbnVsbDtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXVpZCgpIHtcbiAgcmV0dXJuICd4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG4gICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XG4gICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICB9KTtcbn1cblxuLy8gUmV0dXJucyBzeXN0ZW0gaW5mb3JtYXRpb24uXG4vLyBGb3JtYXQ6IHtzZGs6e3ZlcnNpb246KiosIHR5cGU6Kip9LCBydW50aW1lOnt2ZXJzaW9uOioqLCBuYW1lOioqfSwgb3M6e3ZlcnNpb246KiosIG5hbWU6Kip9fTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gc3lzSW5mbygpIHtcbiAgY29uc3QgaW5mbyA9IE9iamVjdC5jcmVhdGUoe30pO1xuICBpbmZvLnNkayA9IHtcbiAgICB2ZXJzaW9uOiBzZGtWZXJzaW9uLFxuICAgIHR5cGU6ICdKYXZhU2NyaXB0JyxcbiAgfTtcbiAgLy8gUnVudGltZSBpbmZvLlxuICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBjb25zdCBmaXJlZm94UmVnZXggPSAvRmlyZWZveFxcLyhbMC05Ll0rKS87XG4gIGNvbnN0IGNocm9tZVJlZ2V4ID0gL0Nocm9tZVxcLyhbMC05Ll0rKS87XG4gIGNvbnN0IGVkZ2VSZWdleCA9IC9FZGdlXFwvKFswLTkuXSspLztcbiAgY29uc3Qgc2FmYXJpVmVyc2lvblJlZ2V4ID0gL1ZlcnNpb25cXC8oWzAtOS5dKykgU2FmYXJpLztcbiAgbGV0IHJlc3VsdCA9IGNocm9tZVJlZ2V4LmV4ZWModXNlckFnZW50KTtcbiAgaWYgKHJlc3VsdCkge1xuICAgIGluZm8ucnVudGltZSA9IHtcbiAgICAgIG5hbWU6ICdDaHJvbWUnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gZmlyZWZveFJlZ2V4LmV4ZWModXNlckFnZW50KSkge1xuICAgIGluZm8ucnVudGltZSA9IHtcbiAgICAgIG5hbWU6ICdGaXJlZm94JyxcbiAgICAgIHZlcnNpb246IHJlc3VsdFsxXSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHJlc3VsdCA9IGVkZ2VSZWdleC5leGVjKHVzZXJBZ2VudCkpIHtcbiAgICBpbmZvLnJ1bnRpbWUgPSB7XG4gICAgICBuYW1lOiAnRWRnZScsXG4gICAgICB2ZXJzaW9uOiByZXN1bHRbMV0sXG4gICAgfTtcbiAgfSBlbHNlIGlmIChpc1NhZmFyaSgpKSB7XG4gICAgcmVzdWx0ID0gc2FmYXJpVmVyc2lvblJlZ2V4LmV4ZWModXNlckFnZW50KTtcbiAgICBpbmZvLnJ1bnRpbWUgPSB7XG4gICAgICBuYW1lOiAnU2FmYXJpJyxcbiAgICB9O1xuICAgIGluZm8ucnVudGltZS52ZXJzaW9uID0gcmVzdWx0ID8gcmVzdWx0WzFdIDogJ1Vua25vd24nO1xuICB9IGVsc2Uge1xuICAgIGluZm8ucnVudGltZSA9IHtcbiAgICAgIG5hbWU6ICdVbmtub3duJyxcbiAgICAgIHZlcnNpb246ICdVbmtub3duJyxcbiAgICB9O1xuICB9XG4gIC8vIE9TIGluZm8uXG4gIGNvbnN0IHdpbmRvd3NSZWdleCA9IC9XaW5kb3dzIE5UIChbMC05Ll0rKS87XG4gIGNvbnN0IG1hY1JlZ2V4ID0gL0ludGVsIE1hYyBPUyBYIChbMC05Xy5dKykvO1xuICBjb25zdCBpUGhvbmVSZWdleCA9IC9pUGhvbmUgT1MgKFswLTlfLl0rKS87XG4gIGNvbnN0IGxpbnV4UmVnZXggPSAvWDExOyBMaW51eC87XG4gIGNvbnN0IGFuZHJvaWRSZWdleCA9IC9BbmRyb2lkKCAoWzAtOS5dKykpPy87XG4gIGNvbnN0IGNocm9taXVtT3NSZWdleCA9IC9Dck9TLztcbiAgaWYgKHJlc3VsdCA9IHdpbmRvd3NSZWdleC5leGVjKHVzZXJBZ2VudCkpIHtcbiAgICBpbmZvLm9zID0ge1xuICAgICAgbmFtZTogJ1dpbmRvd3MgTlQnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gbWFjUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdNYWMgT1MgWCcsXG4gICAgICB2ZXJzaW9uOiByZXN1bHRbMV0ucmVwbGFjZSgvXy9nLCAnLicpLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gaVBob25lUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdpUGhvbmUgT1MnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdLnJlcGxhY2UoL18vZywgJy4nKSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHJlc3VsdCA9IGxpbnV4UmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdMaW51eCcsXG4gICAgICB2ZXJzaW9uOiAnVW5rbm93bicsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChyZXN1bHQgPSBhbmRyb2lkUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdBbmRyb2lkJyxcbiAgICAgIHZlcnNpb246IHJlc3VsdFsxXSB8fCAnVW5rbm93bicsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChyZXN1bHQgPSBjaHJvbWl1bU9zUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdDaHJvbWUgT1MnLFxuICAgICAgdmVyc2lvbjogJ1Vua25vd24nLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdVbmtub3duJyxcbiAgICAgIHZlcnNpb246ICdVbmtub3duJyxcbiAgICB9O1xuICB9XG4gIGluZm8uY2FwYWJpbGl0aWVzID0ge1xuICAgIGNvbnRpbnVhbEljZUdhdGhlcmluZzogZmFsc2UsXG4gICAgc3RyZWFtUmVtb3ZhYmxlOiBpbmZvLnJ1bnRpbWUubmFtZSAhPT0gJ0ZpcmVmb3gnLFxuICAgIGlnbm9yZURhdGFDaGFubmVsQWNrczogdHJ1ZSxcbiAgfTtcbiAgcmV0dXJuIGluZm87XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MgKi9cbi8qIGdsb2JhbCBNYXAsIFByb21pc2UsIHNldFRpbWVvdXQgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCB7XG4gIEV2ZW50RGlzcGF0Y2hlcixcbiAgTWVzc2FnZUV2ZW50LFxuICBPd3RFdmVudCxcbiAgRXJyb3JFdmVudCxcbiAgTXV0ZUV2ZW50LFxufSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7VHJhY2tLaW5kfSBmcm9tICcuLi9iYXNlL21lZGlhZm9ybWF0LmpzJztcbmltcG9ydCB7UHVibGljYXRpb259IGZyb20gJy4uL2Jhc2UvcHVibGljYXRpb24uanMnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4vc3Vic2NyaXB0aW9uLmpzJztcbmltcG9ydCB7Q29uZmVyZW5jZUVycm9yfSBmcm9tICcuL2Vycm9yLmpzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4uL2Jhc2UvdXRpbHMuanMnO1xuaW1wb3J0ICogYXMgU2RwVXRpbHMgZnJvbSAnLi4vYmFzZS9zZHB1dGlscy5qcyc7XG5pbXBvcnQge1RyYW5zcG9ydFNldHRpbmdzLCBUcmFuc3BvcnRUeXBlfSBmcm9tICcuLi9iYXNlL3RyYW5zcG9ydC5qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvbmZlcmVuY2VQZWVyQ29ubmVjdGlvbkNoYW5uZWxcbiAqIEBjbGFzc0Rlc2MgQSBjaGFubmVsIGZvciBhIGNvbm5lY3Rpb24gYmV0d2VlbiBjbGllbnQgYW5kIGNvbmZlcmVuY2Ugc2VydmVyLlxuICogQ3VycmVudGx5LCBvbmx5IG9uZSBzdHJlYW0gY291bGQgYmUgdHJhbm1pdHRlZCBpbiBhIGNoYW5uZWwuXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgQ29uZmVyZW5jZVBlZXJDb25uZWN0aW9uQ2hhbm5lbCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgc2lnbmFsaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBjID0gbnVsbDtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fdmlkZW9Db2RlY3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fb3B0aW9ucyA9IG51bGw7XG4gICAgdGhpcy5fdmlkZW9Db2RlY3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2lnbmFsaW5nID0gc2lnbmFsaW5nO1xuICAgIHRoaXMuX2ludGVybmFsSWQgPSBudWxsOyAvLyBJdCdzIHB1YmxpY2F0aW9uIElEIG9yIHN1YnNjcmlwdGlvbiBJRC5cbiAgICB0aGlzLl9wZW5kaW5nQ2FuZGlkYXRlcyA9IFtdO1xuICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzID0gbmV3IE1hcCgpOyAvLyBpbnRlcm5hbElkID0+IHsgcmVzb2x2ZSwgcmVqZWN0IH1cbiAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMgPSBuZXcgTWFwKCk7IC8vIGludGVybmFsSWQgPT4geyByZXNvbHZlLCByZWplY3QgfVxuICAgIHRoaXMuX3B1YmxpY2F0aW9ucyA9IG5ldyBNYXAoKTsgLy8gUHVibGljYXRpb25JZCA9PiBQdWJsaWNhdGlvblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBuZXcgTWFwKCk7IC8vIFN1YnNjcmlwdGlvbklkID0+IFN1YnNjcmlwdGlvblxuICAgIHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMgPSBuZXcgTWFwKCk7IC8vIGludGVybmFsSWQgPT4geyBpZCwgdHJhbnNjZWl2ZXJzOiBbVHJhbnNjZWl2ZXJdIH1cbiAgICB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMgPSBuZXcgTWFwKCk7IC8vIGludGVybmFsSWQgPT4geyBpZCwgdHJhbnNjZWl2ZXJzOiBbVHJhbnNjZWl2ZXJdIH1cbiAgICB0aGlzLl9yZXZlcnNlSWRNYXAgPSBuZXcgTWFwKCk7IC8vIFB1YmxpY2F0aW9uSWQgfHwgU3Vic2NyaXB0aW9uSWQgPT4gaW50ZXJuYWxJZFxuICAgIC8vIFRpbWVyIGZvciBQZWVyQ29ubmVjdGlvbiBkaXNjb25uZWN0ZWQuIFdpbGwgc3RvcCBjb25uZWN0aW9uIGFmdGVyIHRpbWVyLlxuICAgIHRoaXMuX2Rpc2Nvbm5lY3RUaW1lciA9IG51bGw7XG4gICAgdGhpcy5fZW5kZWQgPSBmYWxzZTtcbiAgICAvLyBDaGFubmVsIElEIGFzc2lnbmVkIGJ5IGNvbmZlcmVuY2VcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgICAvLyBVc2VkIHRvIGNyZWF0ZSBpbnRlcm5hbCBJRCBmb3IgcHVibGljYXRpb24vc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5faW50ZXJuYWxDb3VudCA9IDA7XG4gICAgdGhpcy5fc2RwUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuX3NkcFJlc29sdmVyTWFwID0gbmV3IE1hcCgpOyAvLyBpbnRlcm5hbElkID0+IHtmaW5pc2gsIHJlc29sdmUsIHJlamVjdH1cbiAgICB0aGlzLl9zZHBSZXNvbHZlcnMgPSBbXTsgLy8gW3tmaW5pc2gsIHJlc29sdmUsIHJlamVjdH1dXG4gICAgdGhpcy5fc2RwUmVzb2x2ZU51bSA9IDA7XG4gICAgdGhpcy5fcmVtb3RlTWVkaWFTdHJlYW1zID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgc3Vic2NyaXB0aW9uIElELCB2YWx1ZSBpcyBNZWRpYVN0cmVhbS5cbiAgICB0aGlzLl9jcmVhdGVQZWVyQ29ubmVjdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBvbk1lc3NhZ2VcbiAgICogQGRlc2MgUmVjZWl2ZWQgYSBtZXNzYWdlIGZyb20gY29uZmVyZW5jZSBwb3J0YWwuIERlZmluZWQgaW4gY2xpZW50LXNlcnZlclxuICAgKiBwcm90b2NvbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5vdGlmaWNhdGlvbiBOb3RpZmljYXRpb24gdHlwZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG1lc3NhZ2UgTWVzc2FnZSByZWNlaXZlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIG9uTWVzc2FnZShub3RpZmljYXRpb24sIG1lc3NhZ2UpIHtcbiAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbikge1xuICAgICAgY2FzZSAncHJvZ3Jlc3MnOlxuICAgICAgICBpZiAobWVzc2FnZS5zdGF0dXMgPT09ICdzb2FjJykge1xuICAgICAgICAgIHRoaXMuX3NkcEhhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3JlYWR5Jykge1xuICAgICAgICAgIHRoaXMuX3JlYWR5SGFuZGxlcihtZXNzYWdlLnNlc3Npb25JZCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICB0aGlzLl9lcnJvckhhbmRsZXIobWVzc2FnZS5zZXNzaW9uSWQsIG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJlYW0nOlxuICAgICAgICB0aGlzLl9vblN0cmVhbUV2ZW50KG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdVbmtub3duIG5vdGlmaWNhdGlvbiBmcm9tIE1DVS4nKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBwdWJsaXNoV2l0aFRyYW5zY2VpdmVycyhzdHJlYW0sIHRyYW5zY2VpdmVycykge1xuICAgIGZvciAoY29uc3QgdCBvZiB0cmFuc2NlaXZlcnMpIHtcbiAgICAgIGlmICh0LmRpcmVjdGlvbiAhPT0gJ3NlbmRvbmx5Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAnUlRDUnRwVHJhbnNjZWl2ZXJcXCdzIGRpcmVjdGlvbiBtdXN0IGJlIHNlbmRvbmx5LicpO1xuICAgICAgfVxuICAgICAgaWYgKCFzdHJlYW0uc3RyZWFtLmdldFRyYWNrcygpLmluY2x1ZGVzKHQuc2VuZGVyLnRyYWNrKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAnVGhlIHRyYWNrIGFzc29jaWF0ZWQgd2l0aCBSVENSdHBTZW5kZXIgaXMgbm90IGluY2x1ZGVkIGluICcgK1xuICAgICAgICAgICAgJ3N0cmVhbS4nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2NlaXZlcnMubGVuZ3RoID4gMikge1xuICAgICAgICAvLyBOb3Qgc3VwcG9ydGVkIGJ5IHNlcnZlci5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgJ0F0IG1vc3Qgb25lIHRyYW5zY2VpdmVyIGZvciBhdWRpbyBhbmQgb25lIHRyYW5zY2VpdmVyIGZvciB2aWRlbyAnICtcbiAgICAgICAgICAgICdhcmUgYWNjZXB0ZWQuJyk7XG4gICAgICB9XG4gICAgICBjb25zdCB0cmFuc2NlaXZlckRlc2NyaXB0aW9uID0gdHJhbnNjZWl2ZXJzLm1hcCgodCkgPT4ge1xuICAgICAgICBjb25zdCBraW5kID0gdC5zZW5kZXIudHJhY2sua2luZDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBraW5kLFxuICAgICAgICAgIHRyYW5zY2VpdmVyOiB0LFxuICAgICAgICAgIHNvdXJjZTogc3RyZWFtLnNvdXJjZVtraW5kXSxcbiAgICAgICAgICBvcHRpb246IHt9LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCBpbnRlcm5hbElkID0gdGhpcy5fY3JlYXRlSW50ZXJuYWxJZCgpO1xuICAgICAgYXdhaXQgdGhpcy5fY2hhaW5TZHBQcm9taXNlKGludGVybmFsSWQpOyAvLyBDb3BpZWQgZnJvbSBwdWJsaXNoIG1ldGhvZC5cbiAgICAgIHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuc2V0KGludGVybmFsSWQsIHRyYW5zY2VpdmVyRGVzY3JpcHRpb24pO1xuICAgICAgY29uc3Qgb2ZmZXI9YXdhaXQgdGhpcy5wYy5jcmVhdGVPZmZlcigpO1xuICAgICAgYXdhaXQgdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKG9mZmVyKTtcbiAgICAgIGNvbnN0IHRyYWNrT3B0aW9ucyA9IHRyYW5zY2VpdmVycy5tYXAoKHQpID0+IHtcbiAgICAgICAgY29uc3Qga2luZCA9IHQuc2VuZGVyLnRyYWNrLmtpbmQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZToga2luZCxcbiAgICAgICAgICBzb3VyY2U6IHN0cmVhbS5zb3VyY2Vba2luZF0sXG4gICAgICAgICAgbWlkOiB0Lm1pZCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcHVibGljYXRpb25JZCA9XG4gICAgICAgICAgYXdhaXQgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdwdWJsaXNoJywge1xuICAgICAgICAgICAgbWVkaWE6IHt0cmFja3M6IHRyYWNrT3B0aW9uc30sXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBzdHJlYW0uYXR0cmlidXRlcyxcbiAgICAgICAgICAgIHRyYW5zcG9ydDoge2lkOiB0aGlzLl9pZCwgdHlwZTogJ3dlYnJ0Yyd9LFxuICAgICAgICAgIH0pLmlkO1xuICAgICAgdGhpcy5fcHVibGlzaFRyYW5zY2VpdmVycy5nZXQoaW50ZXJuYWxJZCkuaWQgPSBwdWJsaWNhdGlvbklkO1xuICAgICAgdGhpcy5fcmV2ZXJzZUlkTWFwLnNldChwdWJsaWNhdGlvbklkLCBpbnRlcm5hbElkKTtcbiAgICAgIGF3YWl0IHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZShcbiAgICAgICAgICAnc29hYycsIHtpZDogdGhpcy5faWQsIHNpZ25hbGluZzogb2ZmZXJ9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5zZXQoaW50ZXJuYWxJZCwge1xuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcHVibGlzaChzdHJlYW0sIG9wdGlvbnMsIHZpZGVvQ29kZWNzKSB7XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ0Nvbm5lY3Rpb24gY2xvc2VkJyk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAvLyBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIGFuIGFycmF5IG9mIFJUQ1J0cFRyYW5zY2VpdmVycy5cbiAgICAgIHJldHVybiB0aGlzLnB1Ymxpc2hXaXRoVHJhbnNjZWl2ZXJzKHN0cmVhbSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGF1ZGlvOiAhIXN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCxcbiAgICAgICAgdmlkZW86ICEhc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ09wdGlvbnMgc2hvdWxkIGJlIGFuIG9iamVjdC4nKSk7XG4gICAgfVxuICAgIGlmICgodGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy5hdWRpbykgJiZcbiAgICAgICAgIHRoaXMuX2lzT3d0RW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pKSB8fFxuICAgICAgICAodGhpcy5faXNPd3RFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy5hdWRpbykgJiZcbiAgICAgICAgIHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgJ01peGluZyBSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnMgYW5kICcgK1xuICAgICAgICAgICdBdWRpb0VuY29kaW5nUGFyYW1ldGVycy9WaWRlb0VuY29kaW5nUGFyYW1ldGVycyBpcyBub3QgYWxsb3dlZC4nKSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmF1ZGlvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMuYXVkaW8gPSAhIXN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudmlkZW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy52aWRlbyA9ICEhc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoKCEhb3B0aW9ucy5hdWRpbyAmJiAhc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoKSB8fFxuICAgICAgICAoISFvcHRpb25zLnZpZGVvICYmICFzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnb3B0aW9ucy5hdWRpby92aWRlbyBpcyBpbmNvbnNpc3RlbnQgd2l0aCB0cmFja3MgcHJlc2VudGVkIGluIHRoZSAnICtcbiAgICAgICAgICAnTWVkaWFTdHJlYW0uJyxcbiAgICAgICkpO1xuICAgIH1cbiAgICBpZiAoKG9wdGlvbnMuYXVkaW8gPT09IGZhbHNlIHx8IG9wdGlvbnMuYXVkaW8gPT09IG51bGwpICYmXG4gICAgICAob3B0aW9ucy52aWRlbyA9PT0gZmFsc2UgfHwgb3B0aW9ucy52aWRlbyA9PT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdDYW5ub3QgcHVibGlzaCBhIHN0cmVhbSB3aXRob3V0IGF1ZGlvIGFuZCB2aWRlby4nKSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hdWRpbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShvcHRpb25zLmF1ZGlvKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICdvcHRpb25zLmF1ZGlvIHNob3VsZCBiZSBhIGJvb2xlYW4gb3IgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXJzIG9mIG9wdGlvbnMuYXVkaW8pIHtcbiAgICAgICAgaWYgKCFwYXJhbWV0ZXJzLmNvZGVjIHx8IHR5cGVvZiBwYXJhbWV0ZXJzLmNvZGVjLm5hbWUgIT09ICdzdHJpbmcnIHx8IChcbiAgICAgICAgICBwYXJhbWV0ZXJzLm1heEJpdHJhdGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcGFyYW1ldGVycy5tYXhCaXRyYXRlXG4gICAgICAgICAgIT09ICdudW1iZXInKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAnb3B0aW9ucy5hdWRpbyBoYXMgaW5jb3JyZWN0IHBhcmFtZXRlcnMuJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy52aWRlbyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkob3B0aW9ucy52aWRlbykpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICdvcHRpb25zLnZpZGVvIHNob3VsZCBiZSBhIGJvb2xlYW4gb3IgYW4gYXJyYXkuJykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNPd3RFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykpIHtcbiAgICAgIGZvciAoY29uc3QgcGFyYW1ldGVycyBvZiBvcHRpb25zLnZpZGVvKSB7XG4gICAgICAgIGlmICghcGFyYW1ldGVycy5jb2RlYyB8fCB0eXBlb2YgcGFyYW1ldGVycy5jb2RlYy5uYW1lICE9PSAnc3RyaW5nJyB8fFxuICAgICAgICAgIChcbiAgICAgICAgICAgIHBhcmFtZXRlcnMubWF4Qml0cmF0ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwYXJhbWV0ZXJzXG4gICAgICAgICAgICAgICAgLm1heEJpdHJhdGUgIT09XG4gICAgICAgICAgICAnbnVtYmVyJykgfHwgKHBhcmFtZXRlcnMuY29kZWMucHJvZmlsZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICB0eXBlb2YgcGFyYW1ldGVycy5jb2RlYy5wcm9maWxlICE9PSAnc3RyaW5nJykpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgJ29wdGlvbnMudmlkZW8gaGFzIGluY29ycmVjdCBwYXJhbWV0ZXJzLicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBtZWRpYU9wdGlvbnMgPSB7fTtcbiAgICBpZiAoc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoID4gMCAmJiBvcHRpb25zLmF1ZGlvICE9PVxuICAgICAgZmFsc2UgJiYgb3B0aW9ucy5hdWRpbyAhPT0gbnVsbCkge1xuICAgICAgaWYgKHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoXG4gICAgICAgICAgICAnUHVibGlzaGluZyBhIHN0cmVhbSB3aXRoIG11bHRpcGxlIGF1ZGlvIHRyYWNrcyBpcyBub3QgZnVsbHknXG4gICAgICAgICAgICArICcgc3VwcG9ydGVkLicsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXVkaW8gIT09ICdib29sZWFuJyAmJiB0eXBlb2Ygb3B0aW9ucy5hdWRpbyAhPT1cbiAgICAgICAgJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgICAnVHlwZSBvZiBhdWRpbyBvcHRpb25zIHNob3VsZCBiZSBib29sZWFuIG9yIGFuIG9iamVjdC4nLFxuICAgICAgICApKTtcbiAgICAgIH1cbiAgICAgIG1lZGlhT3B0aW9ucy5hdWRpbyA9IHt9O1xuICAgICAgbWVkaWFPcHRpb25zLmF1ZGlvLnNvdXJjZSA9IHN0cmVhbS5zb3VyY2UuYXVkaW87XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lZGlhT3B0aW9ucy5hdWRpbyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoID4gMCAmJiBvcHRpb25zLnZpZGVvICE9PVxuICAgICAgZmFsc2UgJiYgb3B0aW9ucy52aWRlbyAhPT0gbnVsbCkge1xuICAgICAgaWYgKHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoXG4gICAgICAgICAgICAnUHVibGlzaGluZyBhIHN0cmVhbSB3aXRoIG11bHRpcGxlIHZpZGVvIHRyYWNrcyBpcyBub3QgZnVsbHkgJ1xuICAgICAgICAgICAgKyAnc3VwcG9ydGVkLicsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8gPSB7fTtcbiAgICAgIG1lZGlhT3B0aW9ucy52aWRlby5zb3VyY2UgPSBzdHJlYW0uc291cmNlLnZpZGVvO1xuICAgICAgY29uc3QgdHJhY2tTZXR0aW5ncyA9IHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdXG4gICAgICAgICAgLmdldFNldHRpbmdzKCk7XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8ucGFyYW1ldGVycyA9IHtcbiAgICAgICAgcmVzb2x1dGlvbjoge1xuICAgICAgICAgIHdpZHRoOiB0cmFja1NldHRpbmdzLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdHJhY2tTZXR0aW5ncy5oZWlnaHQsXG4gICAgICAgIH0sXG4gICAgICAgIGZyYW1lcmF0ZTogdHJhY2tTZXR0aW5ncy5mcmFtZVJhdGUsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcm5hbElkID0gdGhpcy5fY3JlYXRlSW50ZXJuYWxJZCgpO1xuICAgIC8vIFdhaXRpbmcgZm9yIHByZXZpb3VzIFNEUCBuZWdvdGlhdGlvbiBpZiBuZWVkZWRcbiAgICBhd2FpdCB0aGlzLl9jaGFpblNkcFByb21pc2UoaW50ZXJuYWxJZCk7XG5cbiAgICBjb25zdCBvZmZlck9wdGlvbnMgPSB7fTtcbiAgICBjb25zdCB0cmFuc2NlaXZlcnMgPSBbXTtcbiAgICBpZiAodHlwZW9mIHRoaXMucGMuYWRkVHJhbnNjZWl2ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIHxkaXJlY3Rpb258IHNlZW1zIG5vdCB3b3JraW5nIG9uIFNhZmFyaS5cbiAgICAgIGlmIChtZWRpYU9wdGlvbnMuYXVkaW8gJiYgc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoID5cbiAgICAgICAgMCkge1xuICAgICAgICBjb25zdCB0cmFuc2NlaXZlckluaXQgPSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiAnc2VuZG9ubHknLFxuICAgICAgICAgIHN0cmVhbXM6IFtzdHJlYW0ubWVkaWFTdHJlYW1dLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy5hdWRpbykpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlckluaXQuc2VuZEVuY29kaW5ncyA9IG9wdGlvbnMuYXVkaW87XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHJhbnNjZWl2ZXIgPSB0aGlzLnBjLmFkZFRyYW5zY2VpdmVyKFxuICAgICAgICAgICAgc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF0sXG4gICAgICAgICAgICB0cmFuc2NlaXZlckluaXQpO1xuICAgICAgICB0cmFuc2NlaXZlcnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2F1ZGlvJyxcbiAgICAgICAgICB0cmFuc2NlaXZlcixcbiAgICAgICAgICBzb3VyY2U6IG1lZGlhT3B0aW9ucy5hdWRpby5zb3VyY2UsXG4gICAgICAgICAgb3B0aW9uOiB7YXVkaW86IG9wdGlvbnMuYXVkaW99LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoVXRpbHMuaXNGaXJlZm94KCkpIHtcbiAgICAgICAgICAvLyBGaXJlZm94IGRvZXMgbm90IHN1cHBvcnQgZW5jb2RpbmdzIHNldHRpbmcgaW4gYWRkVHJhbnNjZWl2ZXIuXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHRyYW5zY2VpdmVyLnNlbmRlci5nZXRQYXJhbWV0ZXJzKCk7XG4gICAgICAgICAgcGFyYW1ldGVycy5lbmNvZGluZ3MgPSB0cmFuc2NlaXZlckluaXQuc2VuZEVuY29kaW5ncztcbiAgICAgICAgICBhd2FpdCB0cmFuc2NlaXZlci5zZW5kZXIuc2V0UGFyYW1ldGVycyhwYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhT3B0aW9ucy52aWRlbyAmJiBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPlxuICAgICAgICAwKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zY2VpdmVySW5pdCA9IHtcbiAgICAgICAgICBkaXJlY3Rpb246ICdzZW5kb25seScsXG4gICAgICAgICAgc3RyZWFtczogW3N0cmVhbS5tZWRpYVN0cmVhbV0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSkge1xuICAgICAgICAgIHRyYW5zY2VpdmVySW5pdC5zZW5kRW5jb2RpbmdzID0gb3B0aW9ucy52aWRlbztcbiAgICAgICAgICB0aGlzLl92aWRlb0NvZGVjcyA9IHZpZGVvQ29kZWNzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyYW5zY2VpdmVyID0gdGhpcy5wYy5hZGRUcmFuc2NlaXZlcihcbiAgICAgICAgICAgIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLFxuICAgICAgICAgICAgdHJhbnNjZWl2ZXJJbml0KTtcbiAgICAgICAgdHJhbnNjZWl2ZXJzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICd2aWRlbycsXG4gICAgICAgICAgdHJhbnNjZWl2ZXIsXG4gICAgICAgICAgc291cmNlOiBtZWRpYU9wdGlvbnMudmlkZW8uc291cmNlLFxuICAgICAgICAgIG9wdGlvbjoge3ZpZGVvOiBvcHRpb25zLnZpZGVvfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKFV0aWxzLmlzRmlyZWZveCgpKSB7XG4gICAgICAgICAgLy8gRmlyZWZveCBkb2VzIG5vdCBzdXBwb3J0IGVuY29kaW5ncyBzZXR0aW5nIGluIGFkZFRyYW5zY2VpdmVyLlxuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB0cmFuc2NlaXZlci5zZW5kZXIuZ2V0UGFyYW1ldGVycygpO1xuICAgICAgICAgIHBhcmFtZXRlcnMuZW5jb2RpbmdzID0gdHJhbnNjZWl2ZXJJbml0LnNlbmRFbmNvZGluZ3M7XG4gICAgICAgICAgYXdhaXQgdHJhbnNjZWl2ZXIuc2VuZGVyLnNldFBhcmFtZXRlcnMocGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2hvdWxkIG5vdCByZWFjaCBoZXJlXG4gICAgICBpZiAobWVkaWFPcHRpb25zLmF1ZGlvICYmXG4gICAgICAgICAgc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpKSB7XG4gICAgICAgICAgdGhpcy5wYy5hZGRUcmFjayh0cmFjaywgc3RyZWFtLm1lZGlhU3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhT3B0aW9ucy52aWRlbyAmJlxuICAgICAgICAgIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCB0cmFjayBvZiBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKSkge1xuICAgICAgICAgIHRoaXMucGMuYWRkVHJhY2sodHJhY2ssIHN0cmVhbS5tZWRpYVN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZUF1ZGlvID0gZmFsc2U7XG4gICAgICBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLnNldChpbnRlcm5hbElkLCB7dHJhbnNjZWl2ZXJzfSk7XG5cbiAgICBsZXQgbG9jYWxEZXNjO1xuICAgIHRoaXMucGMuY3JlYXRlT2ZmZXIob2ZmZXJPcHRpb25zKS50aGVuKChkZXNjKSA9PiB7XG4gICAgICBsb2NhbERlc2MgPSBkZXNjO1xuICAgICAgcmV0dXJuIHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHRyYWNrT3B0aW9ucyA9IFtdO1xuICAgICAgdHJhbnNjZWl2ZXJzLmZvckVhY2goKHt0eXBlLCB0cmFuc2NlaXZlciwgc291cmNlfSkgPT4ge1xuICAgICAgICB0cmFja09wdGlvbnMucHVzaCh7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBtaWQ6IHRyYW5zY2VpdmVyLm1pZCxcbiAgICAgICAgICBzb3VyY2UsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdwdWJsaXNoJywge1xuICAgICAgICBtZWRpYToge3RyYWNrczogdHJhY2tPcHRpb25zfSxcbiAgICAgICAgYXR0cmlidXRlczogc3RyZWFtLmF0dHJpYnV0ZXMsXG4gICAgICAgIHRyYW5zcG9ydDoge2lkOiB0aGlzLl9pZCwgdHlwZTogJ3dlYnJ0Yyd9LFxuICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgLy8gU2VuZCBTRFAgZXZlbiB3aGVuIGZhaWxlZCB0byBnZXQgQW5zd2VyLlxuICAgICAgICB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3NvYWMnLCB7XG4gICAgICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgICAgIHNpZ25hbGluZzogbG9jYWxEZXNjLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pO1xuICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHB1YmxpY2F0aW9uSWQgPSBkYXRhLmlkO1xuICAgICAgY29uc3QgbWVzc2FnZUV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudCgnaWQnLCB7XG4gICAgICAgIG1lc3NhZ2U6IHB1YmxpY2F0aW9uSWQsXG4gICAgICAgIG9yaWdpbjogdGhpcy5fcmVtb3RlSWQsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChtZXNzYWdlRXZlbnQpO1xuXG4gICAgICB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKS5pZCA9IHB1YmxpY2F0aW9uSWQ7XG4gICAgICB0aGlzLl9yZXZlcnNlSWRNYXAuc2V0KHB1YmxpY2F0aW9uSWQsIGludGVybmFsSWQpO1xuXG4gICAgICBpZiAodGhpcy5faWQgJiYgdGhpcy5faWQgIT09IGRhdGEudHJhbnNwb3J0SWQpIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ1NlcnZlciByZXR1cm5zIGNvbmZsaWN0IElEOiAnICsgZGF0YS50cmFuc3BvcnRJZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9pZCA9IGRhdGEudHJhbnNwb3J0SWQ7XG5cbiAgICAgIC8vIE1vZGlmeSBsb2NhbCBTRFAgYmVmb3JlIHNlbmRpbmdcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKCh7dHlwZSwgdHJhbnNjZWl2ZXIsIG9wdGlvbn0pID0+IHtcbiAgICAgICAgICBsb2NhbERlc2Muc2RwID0gdGhpcy5fc2V0UnRwUmVjZWl2ZXJPcHRpb25zKFxuICAgICAgICAgICAgICBsb2NhbERlc2Muc2RwLCBvcHRpb24sIHRyYW5zY2VpdmVyLm1pZCk7XG4gICAgICAgICAgbG9jYWxEZXNjLnNkcCA9IHRoaXMuX3NldFJ0cFNlbmRlck9wdGlvbnMoXG4gICAgICAgICAgICAgIGxvY2FsRGVzYy5zZHAsIG9wdGlvbiwgdHJhbnNjZWl2ZXIubWlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3NvYWMnLCB7XG4gICAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgICAgc2lnbmFsaW5nOiBsb2NhbERlc2MsXG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIG9mZmVyIG9yIHNldCBTRFAuIE1lc3NhZ2U6ICdcbiAgICAgICAgICArIGUubWVzc2FnZSk7XG4gICAgICBpZiAodGhpcy5fcHVibGlzaFRyYW5zY2VpdmVycy5nZXQoaW50ZXJuYWxJZCkuaWQpIHtcbiAgICAgICAgdGhpcy5fdW5wdWJsaXNoKGludGVybmFsSWQpO1xuICAgICAgICB0aGlzLl9yZWplY3RQcm9taXNlKGUpO1xuICAgICAgICB0aGlzLl9maXJlRW5kZWRFdmVudE9uUHVibGljYXRpb25PclN1YnNjcmlwdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdW5wdWJsaXNoKGludGVybmFsSWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuc2V0KGludGVybmFsSWQsIHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHN1YnNjcmliZShzdHJlYW0sIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnQ29ubmVjdGlvbiBjbG9zZWQnKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYXVkaW86ICEhc3RyZWFtLnNldHRpbmdzLmF1ZGlvLFxuICAgICAgICB2aWRlbzogISFzdHJlYW0uc2V0dGluZ3MudmlkZW8sXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignT3B0aW9ucyBzaG91bGQgYmUgYW4gb2JqZWN0LicpKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5hdWRpbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoc3RyZWFtLnNldHRpbmdzLmF1ZGlvLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBvcHRpb25zLmF1ZGlvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLmF1ZGlvID0gISFzdHJlYW0uc2V0dGluZ3MuYXVkaW87XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMudmlkZW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy52aWRlbyA9ICEhc3RyZWFtLnNldHRpbmdzLnZpZGVvO1xuICAgIH1cbiAgICBpZiAoKG9wdGlvbnMuYXVkaW8gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy5hdWRpbyAhPT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuYXVkaW8gIT09ICdib29sZWFuJyAmJiBvcHRpb25zLmF1ZGlvICE9PSBudWxsKSB8fCAoXG4gICAgICBvcHRpb25zLnZpZGVvICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbnMudmlkZW8gIT09ICdvYmplY3QnICYmXG4gICAgICAgIHR5cGVvZiBvcHRpb25zLnZpZGVvICE9PSAnYm9vbGVhbicgJiYgb3B0aW9ucy52aWRlbyAhPT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9wdGlvbnMgdHlwZS4nKSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmF1ZGlvICYmICFzdHJlYW0uc2V0dGluZ3MuYXVkaW8gfHwgKG9wdGlvbnMudmlkZW8gJiZcbiAgICAgICAgIXN0cmVhbS5zZXR0aW5ncy52aWRlbykpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdvcHRpb25zLmF1ZGlvL3ZpZGVvIGNhbm5vdCBiZSB0cnVlIG9yIGFuIG9iamVjdCBpZiB0aGVyZSBpcyBubyAnXG4gICAgICAgICAgKyAnYXVkaW8vdmlkZW8gdHJhY2sgaW4gcmVtb3RlIHN0cmVhbS4nLFxuICAgICAgKSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmF1ZGlvID09PSBmYWxzZSAmJiBvcHRpb25zLnZpZGVvID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgJ0Nhbm5vdCBzdWJzY3JpYmUgYSBzdHJlYW0gd2l0aG91dCBhdWRpbyBhbmQgdmlkZW8uJykpO1xuICAgIH1cbiAgICBjb25zdCBtZWRpYU9wdGlvbnMgPSB7fTtcbiAgICBpZiAob3B0aW9ucy5hdWRpbykge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1ZGlvID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkob3B0aW9ucy5hdWRpby5jb2RlY3MpKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmF1ZGlvLmNvZGVjcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgJ0F1ZGlvIGNvZGVjIGNhbm5vdCBiZSBhbiBlbXB0eSBhcnJheS4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG1lZGlhT3B0aW9ucy5hdWRpbyA9IHt9O1xuICAgICAgbWVkaWFPcHRpb25zLmF1ZGlvLmZyb20gPSBzdHJlYW0uaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lZGlhT3B0aW9ucy5hdWRpbyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy52aWRlbykge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnZpZGVvID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkob3B0aW9ucy52aWRlby5jb2RlY3MpKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnZpZGVvLmNvZGVjcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgJ1ZpZGVvIGNvZGVjIGNhbm5vdCBiZSBhbiBlbXB0eSBhcnJheS4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG1lZGlhT3B0aW9ucy52aWRlbyA9IHt9O1xuICAgICAgbWVkaWFPcHRpb25zLnZpZGVvLmZyb20gPSBzdHJlYW0uaWQ7XG4gICAgICBpZiAob3B0aW9ucy52aWRlby5yZXNvbHV0aW9uIHx8IG9wdGlvbnMudmlkZW8uZnJhbWVSYXRlIHx8IChvcHRpb25zLnZpZGVvXG4gICAgICAgICAgLmJpdHJhdGVNdWx0aXBsaWVyICYmIG9wdGlvbnMudmlkZW8uYml0cmF0ZU11bHRpcGxpZXIgIT09IDEpIHx8XG4gICAgICAgIG9wdGlvbnMudmlkZW8ua2V5RnJhbWVJbnRlcnZhbCkge1xuICAgICAgICBtZWRpYU9wdGlvbnMudmlkZW8ucGFyYW1ldGVycyA9IHtcbiAgICAgICAgICByZXNvbHV0aW9uOiBvcHRpb25zLnZpZGVvLnJlc29sdXRpb24sXG4gICAgICAgICAgZnJhbWVyYXRlOiBvcHRpb25zLnZpZGVvLmZyYW1lUmF0ZSxcbiAgICAgICAgICBiaXRyYXRlOiBvcHRpb25zLnZpZGVvLmJpdHJhdGVNdWx0aXBsaWVyID8gJ3gnXG4gICAgICAgICAgICAgICsgb3B0aW9ucy52aWRlby5iaXRyYXRlTXVsdGlwbGllci50b1N0cmluZygpIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGtleUZyYW1lSW50ZXJ2YWw6IG9wdGlvbnMudmlkZW8ua2V5RnJhbWVJbnRlcnZhbCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnZpZGVvLnJpZCkge1xuICAgICAgICAvLyBVc2UgcmlkIG1hdGNoZWQgdHJhY2sgSUQgYXMgZnJvbSBpZiBwb3NzaWJsZVxuICAgICAgICBjb25zdCBtYXRjaGVkU2V0dGluZyA9IHN0cmVhbS5zZXR0aW5ncy52aWRlb1xuICAgICAgICAgICAgLmZpbmQoKHZpZGVvKSA9PiB2aWRlby5yaWQgPT09IG9wdGlvbnMudmlkZW8ucmlkKTtcbiAgICAgICAgaWYgKG1hdGNoZWRTZXR0aW5nICYmIG1hdGNoZWRTZXR0aW5nLl90cmFja0lkKSB7XG4gICAgICAgICAgbWVkaWFPcHRpb25zLnZpZGVvLmZyb20gPSBtYXRjaGVkU2V0dGluZy5fdHJhY2tJZDtcbiAgICAgICAgICAvLyBJZ25vcmUgb3RoZXIgc2V0dGluZ3Mgd2hlbiBSSUQgc2V0LlxuICAgICAgICAgIGRlbGV0ZSBtZWRpYU9wdGlvbnMudmlkZW8ucGFyYW1ldGVycztcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnZpZGVvID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVkaWFPcHRpb25zLnZpZGVvID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJuYWxJZCA9IHRoaXMuX2NyZWF0ZUludGVybmFsSWQoKTtcbiAgICAvLyBXYWl0aW5nIGZvciBwcmV2aW91cyBTRFAgbmVnb3RpYXRpb24gaWYgbmVlZGVkXG4gICAgYXdhaXQgdGhpcy5fY2hhaW5TZHBQcm9taXNlKGludGVybmFsSWQpO1xuXG4gICAgY29uc3Qgb2ZmZXJPcHRpb25zID0ge307XG4gICAgY29uc3QgdHJhbnNjZWl2ZXJzID0gW107XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucGMuYWRkVHJhbnNjZWl2ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIHxkaXJlY3Rpb258IHNlZW1zIG5vdCB3b3JraW5nIG9uIFNhZmFyaS5cbiAgICAgIGlmIChtZWRpYU9wdGlvbnMuYXVkaW8pIHtcbiAgICAgICAgY29uc3QgdHJhbnNjZWl2ZXIgPSB0aGlzLnBjLmFkZFRyYW5zY2VpdmVyKFxuICAgICAgICAgICAgJ2F1ZGlvJywge2RpcmVjdGlvbjogJ3JlY3Zvbmx5J30pO1xuICAgICAgICB0cmFuc2NlaXZlcnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2F1ZGlvJyxcbiAgICAgICAgICB0cmFuc2NlaXZlcixcbiAgICAgICAgICBmcm9tOiBtZWRpYU9wdGlvbnMuYXVkaW8uZnJvbSxcbiAgICAgICAgICBvcHRpb246IHthdWRpbzogb3B0aW9ucy5hdWRpb30sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKG1lZGlhT3B0aW9ucy52aWRlbykge1xuICAgICAgICBjb25zdCB0cmFuc2NlaXZlciA9IHRoaXMucGMuYWRkVHJhbnNjZWl2ZXIoXG4gICAgICAgICAgICAndmlkZW8nLCB7ZGlyZWN0aW9uOiAncmVjdm9ubHknfSk7XG4gICAgICAgIHRyYW5zY2VpdmVycy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAndmlkZW8nLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLFxuICAgICAgICAgIGZyb206IG1lZGlhT3B0aW9ucy52aWRlby5mcm9tLFxuICAgICAgICAgIHBhcmFtZXRlcnM6IG1lZGlhT3B0aW9ucy52aWRlby5wYXJhbWV0ZXJzLFxuICAgICAgICAgIG9wdGlvbjoge3ZpZGVvOiBvcHRpb25zLnZpZGVvfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZUF1ZGlvID0gISFvcHRpb25zLmF1ZGlvO1xuICAgICAgb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlVmlkZW8gPSAhIW9wdGlvbnMudmlkZW87XG4gICAgfVxuICAgIHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycy5zZXQoaW50ZXJuYWxJZCwge3RyYW5zY2VpdmVyc30pO1xuXG4gICAgbGV0IGxvY2FsRGVzYztcbiAgICB0aGlzLnBjLmNyZWF0ZU9mZmVyKG9mZmVyT3B0aW9ucykudGhlbigoZGVzYykgPT4ge1xuICAgICAgbG9jYWxEZXNjID0gZGVzYztcbiAgICAgIHJldHVybiB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24oZGVzYylcbiAgICAgICAgICAuY2F0Y2goKGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdTZXQgbG9jYWwgZGVzY3JpcHRpb24gZmFpbGVkLiBNZXNzYWdlOiAnICtcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShlcnJvck1lc3NhZ2UpKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yTWVzc2FnZTtcbiAgICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgTG9nZ2VyLmVycm9yKCdDcmVhdGUgb2ZmZXIgZmFpbGVkLiBFcnJvciBpbmZvOiAnICsgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgZXJyb3IpKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgdHJhY2tPcHRpb25zID0gW107XG4gICAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaCgoe3R5cGUsIHRyYW5zY2VpdmVyLCBmcm9tLCBwYXJhbWV0ZXJzLCBvcHRpb259KSA9PiB7XG4gICAgICAgIHRyYWNrT3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIG1pZDogdHJhbnNjZWl2ZXIubWlkLFxuICAgICAgICAgIGZyb206IGZyb20sXG4gICAgICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVycyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3N1YnNjcmliZScsIHtcbiAgICAgICAgbWVkaWE6IHt0cmFja3M6IHRyYWNrT3B0aW9uc30sXG4gICAgICAgIHRyYW5zcG9ydDoge2lkOiB0aGlzLl9pZCwgdHlwZTogJ3dlYnJ0Yyd9LFxuICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgLy8gU2VuZCBTRFAgZXZlbiB3aGVuIGZhaWxlZCB0byBnZXQgQW5zd2VyLlxuICAgICAgICB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3NvYWMnLCB7XG4gICAgICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgICAgIHNpZ25hbGluZzogbG9jYWxEZXNjLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pO1xuICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbklkID0gZGF0YS5pZDtcbiAgICAgIGNvbnN0IG1lc3NhZ2VFdmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoJ2lkJywge1xuICAgICAgICBtZXNzYWdlOiBzdWJzY3JpcHRpb25JZCxcbiAgICAgICAgb3JpZ2luOiB0aGlzLl9yZW1vdGVJZCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG1lc3NhZ2VFdmVudCk7XG5cbiAgICAgIHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycy5nZXQoaW50ZXJuYWxJZCkuaWQgPSBzdWJzY3JpcHRpb25JZDtcbiAgICAgIHRoaXMuX3JldmVyc2VJZE1hcC5zZXQoc3Vic2NyaXB0aW9uSWQsIGludGVybmFsSWQpO1xuICAgICAgaWYgKHRoaXMuX2lkICYmIHRoaXMuX2lkICE9PSBkYXRhLnRyYW5zcG9ydElkKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdTZXJ2ZXIgcmV0dXJucyBjb25mbGljdCBJRDogJyArIGRhdGEudHJhbnNwb3J0SWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5faWQgPSBkYXRhLnRyYW5zcG9ydElkO1xuXG4gICAgICAvLyBNb2RpZnkgbG9jYWwgU0RQIGJlZm9yZSBzZW5kaW5nXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaCgoe3R5cGUsIHRyYW5zY2VpdmVyLCBvcHRpb259KSA9PiB7XG4gICAgICAgICAgbG9jYWxEZXNjLnNkcCA9IHRoaXMuX3NldFJ0cFJlY2VpdmVyT3B0aW9ucyhcbiAgICAgICAgICAgICAgbG9jYWxEZXNjLnNkcCwgb3B0aW9uLCB0cmFuc2NlaXZlci5taWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc29hYycsIHtcbiAgICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgICBzaWduYWxpbmc6IGxvY2FsRGVzYyxcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBMb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgb2ZmZXIgb3Igc2V0IFNEUC4gTWVzc2FnZTogJ1xuICAgICAgICAgICsgZS5tZXNzYWdlKTtcbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpLmlkKSB7XG4gICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKGludGVybmFsSWQpO1xuICAgICAgICB0aGlzLl9yZWplY3RQcm9taXNlKGUpO1xuICAgICAgICB0aGlzLl9maXJlRW5kZWRFdmVudE9uUHVibGljYXRpb25PclN1YnNjcmlwdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoaW50ZXJuYWxJZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzLnNldChpbnRlcm5hbElkLCB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5wYyAmJiB0aGlzLnBjLnNpZ25hbGluZ1N0YXRlICE9PSAnY2xvc2VkJykge1xuICAgICAgdGhpcy5wYy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGFpblNkcFByb21pc2UoaW50ZXJuYWxJZCkge1xuICAgIGNvbnN0IHByaW9yID0gdGhpcy5fc2RwUHJvbWlzZTtcbiAgICBjb25zdCBuZWdvdGlhdGlvblRpbWVvdXQgPSAxMDAwMDtcbiAgICB0aGlzLl9zZHBQcm9taXNlID0gcHJpb3IudGhlbihcbiAgICAgICAgKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVyID0ge2ZpbmlzaDogZmFsc2UsIHJlc29sdmUsIHJlamVjdH07XG4gICAgICAgICAgdGhpcy5fc2RwUmVzb2x2ZXJzLnB1c2gocmVzb2x2ZXIpO1xuICAgICAgICAgIHRoaXMuX3NkcFJlc29sdmVyTWFwLnNldChpbnRlcm5hbElkLCByZXNvbHZlcik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZWplY3QoJ1RpbWVvdXQgdG8gZ2V0IFNEUCBhbnN3ZXInKSxcbiAgICAgICAgICAgICAgbmVnb3RpYXRpb25UaW1lb3V0KTtcbiAgICAgICAgfSkpO1xuICAgIHJldHVybiBwcmlvci5jYXRjaCgoZSk9PntcbiAgICAgIC8vXG4gICAgfSk7XG4gIH1cblxuICBfbmV4dFNkcFByb21pc2UoKSB7XG4gICAgbGV0IHJldCA9IGZhbHNlO1xuICAgIC8vIFNraXAgdGhlIGZpbmlzaGVkIHNkcCBwcm9taXNlXG4gICAgd2hpbGUgKHRoaXMuX3NkcFJlc29sdmVOdW0gPCB0aGlzLl9zZHBSZXNvbHZlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCByZXNvbHZlciA9IHRoaXMuX3NkcFJlc29sdmVyc1t0aGlzLl9zZHBSZXNvbHZlTnVtXTtcbiAgICAgIHRoaXMuX3NkcFJlc29sdmVOdW0rKztcbiAgICAgIGlmICghcmVzb2x2ZXIuZmluaXNoKSB7XG4gICAgICAgIHJlc29sdmVyLnJlc29sdmUoKTtcbiAgICAgICAgcmVzb2x2ZXIuZmluaXNoID0gdHJ1ZTtcbiAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIF9jcmVhdGVJbnRlcm5hbElkKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcm5hbENvdW50Kys7XG4gIH1cblxuICBfdW5wdWJsaXNoKGludGVybmFsSWQpIHtcbiAgICBpZiAodGhpcy5fcHVibGlzaFRyYW5zY2VpdmVycy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgIGNvbnN0IHtpZCwgdHJhbnNjZWl2ZXJzfSA9IHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpO1xuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgndW5wdWJsaXNoJywge2lkfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICBMb2dnZXIud2FybmluZygnTUNVIHJldHVybnMgbmVnYXRpdmUgYWNrIGZvciB1bnB1Ymxpc2hpbmcsICcgKyBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZXZlcnNlSWRNYXAuZGVsZXRlKGlkKTtcbiAgICAgIH1cbiAgICAgIC8vIENsZWFuIHRyYW5zY2VpdmVyXG4gICAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaCgoe3RyYW5zY2VpdmVyfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ3N0YWJsZScpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci5zZW5kZXIucmVwbGFjZVRyYWNrKG51bGwpO1xuICAgICAgICAgIHRoaXMucGMucmVtb3ZlVHJhY2sodHJhbnNjZWl2ZXIuc2VuZGVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLmRlbGV0ZShpbnRlcm5hbElkKTtcbiAgICAgIC8vIEZpcmUgZW5kZWQgZXZlbnRcbiAgICAgIGlmICh0aGlzLl9wdWJsaWNhdGlvbnMuaGFzKGlkKSkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBPd3RFdmVudCgnZW5kZWQnKTtcbiAgICAgICAgdGhpcy5fcHVibGljYXRpb25zLmdldChpZCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIHRoaXMuX3B1YmxpY2F0aW9ucy5kZWxldGUoaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ludmFsaWQgcHVibGljYXRpb24gdG8gdW5wdWJsaXNoOiAnICsgaWQpO1xuICAgICAgICBpZiAodGhpcy5fcHVibGlzaFByb21pc2VzLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5nZXQoaW50ZXJuYWxJZCkucmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgQ29uZmVyZW5jZUVycm9yKCdGYWlsZWQgdG8gcHVibGlzaCcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3NkcFJlc29sdmVyTWFwLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgICBjb25zdCByZXNvbHZlciA9IHRoaXMuX3NkcFJlc29sdmVyTWFwLmdldChpbnRlcm5hbElkKTtcbiAgICAgICAgaWYgKCFyZXNvbHZlci5maW5pc2gpIHtcbiAgICAgICAgICByZXNvbHZlci5yZXNvbHZlKCk7XG4gICAgICAgICAgcmVzb2x2ZXIuZmluaXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZHBSZXNvbHZlck1hcC5kZWxldGUoaW50ZXJuYWxJZCk7XG4gICAgICB9XG4gICAgICAvLyBDcmVhdGUgb2ZmZXIsIHNldCBsb2NhbCBhbmQgcmVtb3RlIGRlc2NyaXB0aW9uXG4gICAgfVxuICB9XG5cbiAgX3Vuc3Vic2NyaWJlKGludGVybmFsSWQpIHtcbiAgICBpZiAodGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgY29uc3Qge2lkLCB0cmFuc2NlaXZlcnN9ID0gdGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKTtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3Vuc3Vic2NyaWJlJywge2lkfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICBMb2dnZXIud2FybmluZyhcbiAgICAgICAgICAgICAgICAgICdNQ1UgcmV0dXJucyBuZWdhdGl2ZSBhY2sgZm9yIHVuc3Vic2NyaWJpbmcsICcgKyBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gQ2xlYW4gdHJhbnNjZWl2ZXJcbiAgICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKCh7dHJhbnNjZWl2ZXJ9KSA9PiB7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlY2VpdmVyLnRyYWNrLnN0b3AoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzLmRlbGV0ZShpbnRlcm5hbElkKTtcbiAgICAgIC8vIEZpcmUgZW5kZWQgZXZlbnRcbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb25zLmhhcyhpZCkpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgT3d0RXZlbnQoJ2VuZGVkJyk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZ2V0KGlkKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5kZWxldGUoaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ludmFsaWQgc3Vic2NyaXB0aW9uIHRvIHVuc3Vic2NyaWJlOiAnICsgaWQpO1xuICAgICAgICBpZiAodGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuZ2V0KGludGVybmFsSWQpLnJlamVjdChcbiAgICAgICAgICAgICAgbmV3IENvbmZlcmVuY2VFcnJvcignRmFpbGVkIHRvIHN1YnNjcmliZScpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3NkcFJlc29sdmVyTWFwLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgICBjb25zdCByZXNvbHZlciA9IHRoaXMuX3NkcFJlc29sdmVyTWFwLmdldChpbnRlcm5hbElkKTtcbiAgICAgICAgaWYgKCFyZXNvbHZlci5maW5pc2gpIHtcbiAgICAgICAgICByZXNvbHZlci5yZXNvbHZlKCk7XG4gICAgICAgICAgcmVzb2x2ZXIuZmluaXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZHBSZXNvbHZlck1hcC5kZWxldGUoaW50ZXJuYWxJZCk7XG4gICAgICB9XG4gICAgICAvLyBEaXNhYmxlIG1lZGlhIGluIHJlbW90ZSBTRFBcbiAgICAgIC8vIFNldCByZW1vdGVEZXNjcmlwdGlvbiBhbmQgc2V0IGxvY2FsRGVzY3JpcHRpb25cbiAgICB9XG4gIH1cblxuICBfbXV0ZU9yVW5tdXRlKHNlc3Npb25JZCwgaXNNdXRlLCBpc1B1YiwgdHJhY2tLaW5kKSB7XG4gICAgY29uc3QgZXZlbnROYW1lID0gaXNQdWIgPyAnc3RyZWFtLWNvbnRyb2wnIDpcbiAgICAgICdzdWJzY3JpcHRpb24tY29udHJvbCc7XG4gICAgY29uc3Qgb3BlcmF0aW9uID0gaXNNdXRlID8gJ3BhdXNlJyA6ICdwbGF5JztcbiAgICByZXR1cm4gdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKGV2ZW50TmFtZSwge1xuICAgICAgaWQ6IHNlc3Npb25JZCxcbiAgICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uLFxuICAgICAgZGF0YTogdHJhY2tLaW5kLFxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKCFpc1B1Yikge1xuICAgICAgICBjb25zdCBtdXRlRXZlbnROYW1lID0gaXNNdXRlID8gJ211dGUnIDogJ3VubXV0ZSc7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZ2V0KHNlc3Npb25JZCkuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBNdXRlRXZlbnQobXV0ZUV2ZW50TmFtZSwge2tpbmQ6IHRyYWNrS2luZH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9hcHBseU9wdGlvbnMoc2Vzc2lvbklkLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0aW9ucy52aWRlbyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdPcHRpb25zIHNob3VsZCBiZSBhbiBvYmplY3QuJykpO1xuICAgIH1cbiAgICBjb25zdCB2aWRlb09wdGlvbnMgPSB7fTtcbiAgICB2aWRlb09wdGlvbnMucmVzb2x1dGlvbiA9IG9wdGlvbnMudmlkZW8ucmVzb2x1dGlvbjtcbiAgICB2aWRlb09wdGlvbnMuZnJhbWVyYXRlID0gb3B0aW9ucy52aWRlby5mcmFtZVJhdGU7XG4gICAgdmlkZW9PcHRpb25zLmJpdHJhdGUgPSBvcHRpb25zLnZpZGVvLmJpdHJhdGVNdWx0aXBsaWVyID8gJ3gnICsgb3B0aW9ucy52aWRlb1xuICAgICAgICAuYml0cmF0ZU11bHRpcGxpZXJcbiAgICAgICAgLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQ7XG4gICAgdmlkZW9PcHRpb25zLmtleUZyYW1lSW50ZXJ2YWwgPSBvcHRpb25zLnZpZGVvLmtleUZyYW1lSW50ZXJ2YWw7XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc3Vic2NyaXB0aW9uLWNvbnRyb2wnLCB7XG4gICAgICBpZDogc2Vzc2lvbklkLFxuICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdmlkZW86IHtwYXJhbWV0ZXJzOiB2aWRlb09wdGlvbnN9LFxuICAgICAgfSxcbiAgICB9KS50aGVuKCk7XG4gIH1cblxuICBfb25SZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xuICAgIExvZ2dlci5kZWJ1ZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcbiAgICBmb3IgKGNvbnN0IFtpbnRlcm5hbElkLCBzdWJdIG9mIHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycykge1xuICAgICAgaWYgKHN1Yi50cmFuc2NlaXZlcnMuZmluZCgodCkgPT4gdC50cmFuc2NlaXZlciA9PT0gZXZlbnQudHJhbnNjZWl2ZXIpKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb25zLmhhcyhzdWIuaWQpKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5fc3Vic2NyaXB0aW9ucy5nZXQoc3ViLmlkKTtcbiAgICAgICAgICBzdWJzY3JpcHRpb24uc3RyZWFtID0gZXZlbnQuc3RyZWFtc1swXTtcbiAgICAgICAgICBpZiAodGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5nZXQoaW50ZXJuYWxJZCkucmVzb2x2ZShzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuZGVsZXRlKGludGVybmFsSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdGVNZWRpYVN0cmVhbXMuc2V0KHN1Yi5pZCwgZXZlbnQuc3RyZWFtc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGlzIGlzIG5vdCBleHBlY3RlZCBwYXRoLiBIb3dldmVyLCB0aGlzIGlzIGdvaW5nIHRvIGhhcHBlbiBvbiBTYWZhcmlcbiAgICAvLyBiZWNhdXNlIGl0IGRvZXMgbm90IHN1cHBvcnQgc2V0dGluZyBkaXJlY3Rpb24gb2YgdHJhbnNjZWl2ZXIuXG4gICAgTG9nZ2VyLndhcm5pbmcoJ1JlY2VpdmVkIHJlbW90ZSBzdHJlYW0gd2l0aG91dCBzdWJzY3JpcHRpb24uJyk7XG4gIH1cblxuICBfb25Mb2NhbEljZUNhbmRpZGF0ZShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAgIGlmICh0aGlzLnBjLnNpZ25hbGluZ1N0YXRlICE9PSAnc3RhYmxlJykge1xuICAgICAgICB0aGlzLl9wZW5kaW5nQ2FuZGlkYXRlcy5wdXNoKGV2ZW50LmNhbmRpZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZW5kQ2FuZGlkYXRlKGV2ZW50LmNhbmRpZGF0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnRW1wdHkgY2FuZGlkYXRlLicpO1xuICAgIH1cbiAgfVxuXG4gIF9maXJlRW5kZWRFdmVudE9uUHVibGljYXRpb25PclN1YnNjcmlwdGlvbigpIHtcbiAgICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZW5kZWQgPSB0cnVlO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE93dEV2ZW50KCdlbmRlZCcpO1xuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBwdWJsaWNhdGlvbl0gb2YgdGhpcy5fcHVibGljYXRpb25zKSB7XG4gICAgICBwdWJsaWNhdGlvbi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIHB1YmxpY2F0aW9uLnN0b3AoKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHN1YnNjcmlwdGlvbl0gb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3Vic2NyaXB0aW9uLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgc3Vic2NyaXB0aW9uLnN0b3AoKTtcbiAgICB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBfcmVqZWN0UHJvbWlzZShlcnJvcikge1xuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGVycm9yID0gbmV3IENvbmZlcmVuY2VFcnJvcignQ29ubmVjdGlvbiBmYWlsZWQgb3IgY2xvc2VkLicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYyAmJiB0aGlzLnBjLmljZUNvbm5lY3Rpb25TdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcbiAgICAgIHRoaXMucGMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBSZWplY3RpbmcgYWxsIGNvcnJlc3BvbmRpbmcgcHJvbWlzZXMgaWYgcHVibGlzaGluZyBhbmQgc3Vic2NyaWJpbmcgaXMgb25nb2luZy5cbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHJvbWlzZV0gb2YgdGhpcy5fcHVibGlzaFByb21pc2VzKSB7XG4gICAgICBwcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5jbGVhcigpO1xuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBwcm9taXNlXSBvZiB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcykge1xuICAgICAgcHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5jbGVhcigpO1xuICB9XG5cbiAgX29uSWNlQ29ubmVjdGlvblN0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCB8fCAhZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIExvZ2dlci5kZWJ1ZygnSUNFIGNvbm5lY3Rpb24gc3RhdGUgY2hhbmdlZCB0byAnICtcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUpO1xuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2Nsb3NlZCcgfHxcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdmYWlsZWQnKSB7XG4gICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdmYWlsZWQnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKCdjb25uZWN0aW9uIGZhaWxlZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZpcmUgZW5kZWQgZXZlbnQgaWYgcHVibGljYXRpb24gb3Igc3Vic2NyaXB0aW9uIGV4aXN0cy5cbiAgICAgICAgdGhpcy5fZmlyZUVuZGVkRXZlbnRPblB1YmxpY2F0aW9uT3JTdWJzY3JpcHRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25Db25uZWN0aW9uU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wYy5jb25uZWN0aW9uU3RhdGUgPT09ICdjbG9zZWQnIHx8XG4gICAgICAgIHRoaXMucGMuY29ubmVjdGlvblN0YXRlID09PSAnZmFpbGVkJykge1xuICAgICAgaWYgKHRoaXMucGMuY29ubmVjdGlvblN0YXRlID09PSAnZmFpbGVkJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcignY29ubmVjdGlvbiBmYWlsZWQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGaXJlIGVuZGVkIGV2ZW50IGlmIHB1YmxpY2F0aW9uIG9yIHN1YnNjcmlwdGlvbiBleGlzdHMuXG4gICAgICAgIHRoaXMuX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3NlbmRDYW5kaWRhdGUoY2FuZGlkYXRlKSB7XG4gICAgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzb2FjJywge1xuICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgc2lnbmFsaW5nOiB7XG4gICAgICAgIHR5cGU6ICdjYW5kaWRhdGUnLFxuICAgICAgICBjYW5kaWRhdGU6IHtcbiAgICAgICAgICBjYW5kaWRhdGU6ICdhPScgKyBjYW5kaWRhdGUuY2FuZGlkYXRlLFxuICAgICAgICAgIHNkcE1pZDogY2FuZGlkYXRlLnNkcE1pZCxcbiAgICAgICAgICBzZHBNTGluZUluZGV4OiBjYW5kaWRhdGUuc2RwTUxpbmVJbmRleCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlUGVlckNvbm5lY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucGMpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdQZWVyQ29ubmVjdGlvbiBleGlzdHMuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGNDb25maWd1cmF0aW9uID0gdGhpcy5fY29uZmlnLnJ0Y0NvbmZpZ3VyYXRpb24gfHwge307XG4gICAgaWYgKFV0aWxzLmlzQ2hyb21lKCkpIHtcbiAgICAgIHBjQ29uZmlndXJhdGlvbi5idW5kbGVQb2xpY3kgPSAnbWF4LWJ1bmRsZSc7XG4gICAgfVxuICAgIHRoaXMucGMgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24ocGNDb25maWd1cmF0aW9uKTtcbiAgICB0aGlzLnBjLm9uaWNlY2FuZGlkYXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkxvY2FsSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgdGhpcy5wYy5vbnRyYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vblJlbW90ZVN0cmVhbUFkZGVkLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgdGhpcy5wYy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25JY2VDb25uZWN0aW9uU3RhdGVDaGFuZ2UuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICB0aGlzLnBjLm9uY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICB9XG5cbiAgX2dldFN0YXRzKCkge1xuICAgIGlmICh0aGlzLnBjKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYy5nZXRTdGF0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnUGVlckNvbm5lY3Rpb24gaXMgbm90IGF2YWlsYWJsZS4nKSk7XG4gICAgfVxuICB9XG5cbiAgX3JlYWR5SGFuZGxlcihzZXNzaW9uSWQpIHtcbiAgICBjb25zdCBpbnRlcm5hbElkID0gdGhpcy5fcmV2ZXJzZUlkTWFwLmdldChzZXNzaW9uSWQpO1xuICAgIGlmICh0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgIGNvbnN0IG1lZGlhU3RyZWFtID0gdGhpcy5fcmVtb3RlTWVkaWFTdHJlYW1zLmdldChzZXNzaW9uSWQpO1xuICAgICAgY29uc3QgdHJhbnNwb3J0U2V0dGluZ3MgPVxuICAgICAgICAgIG5ldyBUcmFuc3BvcnRTZXR0aW5ncyhUcmFuc3BvcnRUeXBlLldFQlJUQywgdGhpcy5faWQpO1xuICAgICAgdHJhbnNwb3J0U2V0dGluZ3MucnRwVHJhbnNjZWl2ZXJzID1cbiAgICAgICAgICB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpLnRyYW5zY2VpdmVycztcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oXG4gICAgICAgICAgc2Vzc2lvbklkLCBtZWRpYVN0cmVhbSwgdHJhbnNwb3J0U2V0dGluZ3MsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoaW50ZXJuYWxJZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB0aGlzLl9nZXRTdGF0cygpLFxuICAgICAgICAgICh0cmFja0tpbmQpID0+IHRoaXMuX211dGVPclVubXV0ZShzZXNzaW9uSWQsIHRydWUsIGZhbHNlLCB0cmFja0tpbmQpLFxuICAgICAgICAgICh0cmFja0tpbmQpID0+IHRoaXMuX211dGVPclVubXV0ZShzZXNzaW9uSWQsIGZhbHNlLCBmYWxzZSwgdHJhY2tLaW5kKSxcbiAgICAgICAgICAob3B0aW9ucykgPT4gdGhpcy5fYXBwbHlPcHRpb25zKHNlc3Npb25JZCwgb3B0aW9ucykpO1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5zZXQoc2Vzc2lvbklkLCBzdWJzY3JpcHRpb24pO1xuICAgICAgLy8gUmVzb2x2ZSBzdWJzY3JpcHRpb24gaWYgbWVkaWFTdHJlYW0gaXMgcmVhZHkuXG4gICAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9ucy5nZXQoc2Vzc2lvbklkKS5zdHJlYW0pIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuZ2V0KGludGVybmFsSWQpLnJlc29sdmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuZGVsZXRlKGludGVybmFsSWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fcHVibGlzaFByb21pc2VzLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgY29uc3QgdHJhbnNwb3J0U2V0dGluZ3MgPVxuICAgICAgICAgIG5ldyBUcmFuc3BvcnRTZXR0aW5ncyhUcmFuc3BvcnRUeXBlLldFQlJUQywgdGhpcy5faWQpO1xuICAgICAgdHJhbnNwb3J0U2V0dGluZ3MudHJhbnNjZWl2ZXJzID1cbiAgICAgICAgICB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKS50cmFuc2NlaXZlcnM7XG4gICAgICBjb25zdCBwdWJsaWNhdGlvbiA9IG5ldyBQdWJsaWNhdGlvbihcbiAgICAgICAgICBzZXNzaW9uSWQsXG4gICAgICAgICAgdHJhbnNwb3J0U2V0dGluZ3MsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdW5wdWJsaXNoKGludGVybmFsSWQpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4gdGhpcy5fZ2V0U3RhdHMoKSxcbiAgICAgICAgICAodHJhY2tLaW5kKSA9PiB0aGlzLl9tdXRlT3JVbm11dGUoc2Vzc2lvbklkLCB0cnVlLCB0cnVlLCB0cmFja0tpbmQpLFxuICAgICAgICAgICh0cmFja0tpbmQpID0+IHRoaXMuX211dGVPclVubXV0ZShzZXNzaW9uSWQsIGZhbHNlLCB0cnVlLCB0cmFja0tpbmQpKTtcbiAgICAgIHRoaXMuX3B1YmxpY2F0aW9ucy5zZXQoc2Vzc2lvbklkLCBwdWJsaWNhdGlvbik7XG4gICAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuZ2V0KGludGVybmFsSWQpLnJlc29sdmUocHVibGljYXRpb24pO1xuICAgICAgLy8gRG8gbm90IGZpcmUgcHVibGljYXRpb24ncyBlbmRlZCBldmVudCB3aGVuIGFzc29jaWF0ZWQgc3RyZWFtIGlzIGVuZGVkLlxuICAgICAgLy8gSXQgbWF5IHN0aWxsIHNlbmRpbmcgc2lsZW5jZSBvciBibGFjayBmcmFtZXMuXG4gICAgICAvLyBSZWZlciB0byBodHRwczovL3czYy5naXRodWIuaW8vd2VicnRjLXBjLyNydGNydHBzZW5kZXItaW50ZXJmYWNlLlxuICAgIH0gZWxzZSBpZiAoIXNlc3Npb25JZCkge1xuICAgICAgLy8gQ2hhbm5lbCByZWFkeVxuICAgIH1cbiAgfVxuXG4gIF9zZHBIYW5kbGVyKHNkcCkge1xuICAgIGlmIChzZHAudHlwZSA9PT0gJ2Fuc3dlcicpIHtcbiAgICAgIHRoaXMucGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oc2RwKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdDYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiB0aGlzLl9wZW5kaW5nQ2FuZGlkYXRlcykge1xuICAgICAgICAgICAgdGhpcy5fc2VuZENhbmRpZGF0ZShjYW5kaWRhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIExvZ2dlci5lcnJvcignU2V0IHJlbW90ZSBkZXNjcmlwdGlvbiBmYWlsZWQ6ICcgKyBlcnJvcik7XG4gICAgICAgIHRoaXMuX3JlamVjdFByb21pc2UoZXJyb3IpO1xuICAgICAgICB0aGlzLl9maXJlRW5kZWRFdmVudE9uUHVibGljYXRpb25PclN1YnNjcmlwdGlvbigpO1xuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fbmV4dFNkcFByb21pc2UoKSkge1xuICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdVbmV4cGVjdGVkIFNEUCBwcm9taXNlIHN0YXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9lcnJvckhhbmRsZXIoc2Vzc2lvbklkLCBlcnJvck1lc3NhZ2UpIHtcbiAgICBpZiAoIXNlc3Npb25JZCkge1xuICAgICAgLy8gVHJhbnNwb3J0IGVycm9yXG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvLyBGaXJlIGVycm9yIGV2ZW50IG9uIHB1YmxpY2F0aW9uIG9yIHN1YnNjcmlwdGlvblxuICAgIGNvbnN0IGVycm9yRXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICBlcnJvcjogbmV3IENvbmZlcmVuY2VFcnJvcihlcnJvck1lc3NhZ2UpLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLl9wdWJsaWNhdGlvbnMuaGFzKHNlc3Npb25JZCkpIHtcbiAgICAgIHRoaXMuX3B1YmxpY2F0aW9ucy5nZXQoc2Vzc2lvbklkKS5kaXNwYXRjaEV2ZW50KGVycm9yRXZlbnQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9ucy5oYXMoc2Vzc2lvbklkKSkge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5nZXQoc2Vzc2lvbklkKS5kaXNwYXRjaEV2ZW50KGVycm9yRXZlbnQpO1xuICAgIH1cbiAgICAvLyBTdG9wIHB1YmxpY2F0aW9uIG9yIHN1YnNjcmlwdGlvblxuICAgIGNvbnN0IGludGVybmFsSWQgPSB0aGlzLl9yZXZlcnNlSWRNYXAuZ2V0KHNlc3Npb25JZCk7XG4gICAgaWYgKHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICB0aGlzLl91bnB1Ymxpc2goaW50ZXJuYWxJZCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZShpbnRlcm5hbElkKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlRXJyb3IoZXJyb3JNZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQ29uZmVyZW5jZUVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVycm9yRXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHB1YmxpY2F0aW9uXSBvZiB0aGlzLl9wdWJsaWNhdGlvbnMpIHtcbiAgICAgIHB1YmxpY2F0aW9uLmRpc3BhdGNoRXZlbnQoZXJyb3JFdmVudCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBzdWJzY3JpcHRpb25dIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5kaXNwYXRjaEV2ZW50KGVycm9yRXZlbnQpO1xuICAgIH1cbiAgICAvLyBGaXJlIGVuZGVkIGV2ZW50IHdoZW4gZXJyb3Igb2NjdXJlZFxuICAgIHRoaXMuX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCk7XG4gIH1cblxuICBfc2V0Q29kZWNPcmRlcihzZHAsIG9wdGlvbnMsIG1pZCkge1xuICAgIGlmIChvcHRpb25zLmF1ZGlvKSB7XG4gICAgICBpZiAob3B0aW9ucy5hdWRpby5jb2RlY3MpIHtcbiAgICAgICAgY29uc3QgYXVkaW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbShvcHRpb25zLmF1ZGlvLmNvZGVjcywgKGNvZGVjKSA9PlxuICAgICAgICAgIGNvZGVjLm5hbWUpO1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ2F1ZGlvJywgYXVkaW9Db2RlY05hbWVzLCBtaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXVkaW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbShvcHRpb25zLmF1ZGlvLFxuICAgICAgICAgICAgKGVuY29kaW5nUGFyYW1ldGVycykgPT4gZW5jb2RpbmdQYXJhbWV0ZXJzLmNvZGVjLm5hbWUpO1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ2F1ZGlvJywgYXVkaW9Db2RlY05hbWVzLCBtaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy52aWRlbykge1xuICAgICAgaWYgKG9wdGlvbnMudmlkZW8uY29kZWNzKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvQ29kZWNOYW1lcyA9IEFycmF5LmZyb20ob3B0aW9ucy52aWRlby5jb2RlY3MsIChjb2RlYykgPT5cbiAgICAgICAgICBjb2RlYy5uYW1lKTtcbiAgICAgICAgc2RwID0gU2RwVXRpbHMucmVvcmRlckNvZGVjcyhzZHAsICd2aWRlbycsIHZpZGVvQ29kZWNOYW1lcywgbWlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZpZGVvQ29kZWNOYW1lcyA9IEFycmF5LmZyb20ob3B0aW9ucy52aWRlbyxcbiAgICAgICAgICAgIChlbmNvZGluZ1BhcmFtZXRlcnMpID0+IGVuY29kaW5nUGFyYW1ldGVycy5jb2RlYy5uYW1lKTtcbiAgICAgICAgc2RwID0gU2RwVXRpbHMucmVvcmRlckNvZGVjcyhzZHAsICd2aWRlbycsIHZpZGVvQ29kZWNOYW1lcywgbWlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIF9zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucywgbWlkKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1ZGlvID09PSAnb2JqZWN0Jykge1xuICAgICAgc2RwID0gU2RwVXRpbHMuc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMuYXVkaW8sIG1pZCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy52aWRlbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNkcCA9IFNkcFV0aWxzLnNldE1heEJpdHJhdGUoc2RwLCBvcHRpb25zLnZpZGVvLCBtaWQpO1xuICAgIH1cbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX3NldFJ0cFNlbmRlck9wdGlvbnMoc2RwLCBvcHRpb25zLCBtaWQpIHtcbiAgICAvLyBTRFAgbXVnbGluZyBpcyBkZXByZWNhdGVkLCBtb3ZpbmcgdG8gYHNldFBhcmFtZXRlcnNgLlxuICAgIGlmICh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLmF1ZGlvKSB8fFxuICAgICAgICB0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSkge1xuICAgICAgcmV0dXJuIHNkcDtcbiAgICB9XG4gICAgc2RwID0gdGhpcy5fc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMsIG1pZCk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIF9zZXRSdHBSZWNlaXZlck9wdGlvbnMoc2RwLCBvcHRpb25zLCBtaWQpIHtcbiAgICAvLyBBZGQgbGVnYWN5IHNpbXVsY2FzdCBpbiBTRFAgZm9yIHNhZmFyaS5cbiAgICBpZiAodGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykgJiYgVXRpbHMuaXNTYWZhcmkoKSkge1xuICAgICAgaWYgKG9wdGlvbnMudmlkZW8ubGVuZ3RoID4gMSkge1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5hZGRMZWdhY3lTaW11bGNhc3QoXG4gICAgICAgICAgICBzZHAsICd2aWRlbycsIG9wdGlvbnMudmlkZW8ubGVuZ3RoLCBtaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIF92aWRlb0NvZGVjcyBpcyBhIHdvcmthcm91bmQgZm9yIHNldHRpbmcgdmlkZW8gY29kZWNzLiBJdCB3aWxsIGJlIG1vdmVkIHRvIFJUQ1J0cFNlbmRQYXJhbWV0ZXJzLlxuICAgIGlmICh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSAmJiB0aGlzLl92aWRlb0NvZGVjcykge1xuICAgICAgc2RwID0gU2RwVXRpbHMucmVvcmRlckNvZGVjcyhzZHAsICd2aWRlbycsIHRoaXMuX3ZpZGVvQ29kZWNzLCBtaWQpO1xuICAgICAgcmV0dXJuIHNkcDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMuYXVkaW8pIHx8XG4gICAgICAgIHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pKSB7XG4gICAgICByZXR1cm4gc2RwO1xuICAgIH1cbiAgICBzZHAgPSB0aGlzLl9zZXRDb2RlY09yZGVyKHNkcCwgb3B0aW9ucywgbWlkKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgLy8gSGFuZGxlIHN0cmVhbSBldmVudCBzZW50IGZyb20gTUNVLiBTb21lIHN0cmVhbSB1cGRhdGUgZXZlbnRzIHNlbnQgZnJvbVxuICAvLyBzZXJ2ZXIsIG1vcmUgc3BlY2lmaWNhbGx5IGF1ZGlvLnN0YXR1cyBhbmQgdmlkZW8uc3RhdHVzIGV2ZW50cyBzaG91bGQgYmVcbiAgLy8gcHVibGljYXRpb24gZXZlbnQgb3Igc3Vic2NyaXB0aW9uIGV2ZW50cy4gVGhleSBkb24ndCBjaGFuZ2UgTWVkaWFTdHJlYW0nc1xuICAvLyBzdGF0dXMuIFNlZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vb3Blbi13ZWJydGMtdG9vbGtpdC9vd3Qtc2VydmVyL2Jsb2IvbWFzdGVyL2RvYy9DbGllbnQtUG9ydGFsJTIwUHJvdG9jb2wubWQjMzM5LXBhcnRpY2lwYW50LWlzLW5vdGlmaWVkLW9uLXN0cmVhbXMtdXBkYXRlLWluLXJvb21cbiAgLy8gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gIF9vblN0cmVhbUV2ZW50KG1lc3NhZ2UpIHtcbiAgICBjb25zdCBldmVudFRhcmdldHMgPSBbXTtcbiAgICBpZiAodGhpcy5fcHVibGljYXRpb25zLmhhcyhtZXNzYWdlLmlkKSkge1xuICAgICAgZXZlbnRUYXJnZXRzLnB1c2godGhpcy5fcHVibGljYXRpb25zLmdldChtZXNzYWdlLmlkKSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgc3Vic2NyaXB0aW9uIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIGlmIChtZXNzYWdlLmlkID09PSBzdWJzY3JpcHRpb24uX2F1ZGlvVHJhY2tJZCB8fFxuICAgICAgICAgIG1lc3NhZ2UuaWQgPT09IHN1YnNjcmlwdGlvbi5fdmlkZW9UcmFja0lkKSB7XG4gICAgICAgIGV2ZW50VGFyZ2V0cy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZXZlbnRUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdHJhY2tLaW5kO1xuICAgIGlmIChtZXNzYWdlLmRhdGEuZmllbGQgPT09ICdhdWRpby5zdGF0dXMnKSB7XG4gICAgICB0cmFja0tpbmQgPSBUcmFja0tpbmQuQVVESU87XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmRhdGEuZmllbGQgPT09ICd2aWRlby5zdGF0dXMnKSB7XG4gICAgICB0cmFja0tpbmQgPSBUcmFja0tpbmQuVklERU87XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdJbnZhbGlkIGRhdGEgZmllbGQgZm9yIHN0cmVhbSB1cGRhdGUgaW5mby4nKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZGF0YS52YWx1ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIGV2ZW50VGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+XG4gICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBNdXRlRXZlbnQoJ3VubXV0ZScsIHtraW5kOiB0cmFja0tpbmR9KSkpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5kYXRhLnZhbHVlID09PSAnaW5hY3RpdmUnKSB7XG4gICAgICBldmVudFRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PlxuICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgTXV0ZUV2ZW50KCdtdXRlJywge2tpbmQ6IHRyYWNrS2luZH0pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdJbnZhbGlkIGRhdGEgdmFsdWUgZm9yIHN0cmVhbSB1cGRhdGUgaW5mby4nKTtcbiAgICB9XG4gIH1cblxuICBfaXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob2JqKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gT25seSBjaGVjayB0aGUgZmlyc3Qgb25lLlxuICAgIGNvbnN0IHBhcmFtID0gb2JqWzBdO1xuICAgIHJldHVybiAhIShcbiAgICAgIHBhcmFtLmNvZGVjUGF5bG9hZFR5cGUgfHwgcGFyYW0uZHR4IHx8IHBhcmFtLmFjdGl2ZSB8fCBwYXJhbS5wdGltZSB8fFxuICAgICAgcGFyYW0ubWF4RnJhbWVyYXRlIHx8IHBhcmFtLnNjYWxlUmVzb2x1dGlvbkRvd25CeSB8fCBwYXJhbS5yaWQgfHxcbiAgICAgIHBhcmFtLnNjYWxhYmlsaXR5TW9kZSk7XG4gIH1cblxuICBfaXNPd3RFbmNvZGluZ1BhcmFtZXRlcnMob2JqKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gT25seSBjaGVjayB0aGUgZmlyc3Qgb25lLlxuICAgIGNvbnN0IHBhcmFtID0gb2JqWzBdO1xuICAgIHJldHVybiAhIXBhcmFtLmNvZGVjO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBNYXAsIFByb21pc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBFdmVudE1vZHVsZSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7U2lvU2lnbmFsaW5nIGFzIFNpZ25hbGluZ30gZnJvbSAnLi9zaWduYWxpbmcuanMnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnLi4vYmFzZS9iYXNlNjQuanMnO1xuaW1wb3J0IHtDb25mZXJlbmNlRXJyb3J9IGZyb20gJy4vZXJyb3IuanMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vYmFzZS91dGlscy5qcyc7XG5pbXBvcnQgKiBhcyBTdHJlYW1Nb2R1bGUgZnJvbSAnLi4vYmFzZS9zdHJlYW0uanMnO1xuaW1wb3J0IHtQYXJ0aWNpcGFudH0gZnJvbSAnLi9wYXJ0aWNpcGFudC5qcyc7XG5pbXBvcnQge0NvbmZlcmVuY2VJbmZvfSBmcm9tICcuL2luZm8uanMnO1xuaW1wb3J0IHtDb25mZXJlbmNlUGVlckNvbm5lY3Rpb25DaGFubmVsfSBmcm9tICcuL2NoYW5uZWwuanMnO1xuaW1wb3J0IHtRdWljQ29ubmVjdGlvbn0gZnJvbSAnLi9xdWljY29ubmVjdGlvbi5qcyc7XG5pbXBvcnQge1JlbW90ZU1peGVkU3RyZWFtLCBBY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnQsIExheW91dENoYW5nZUV2ZW50fVxuICBmcm9tICcuL21peGVkc3RyZWFtLmpzJztcbmltcG9ydCAqIGFzIFN0cmVhbVV0aWxzTW9kdWxlIGZyb20gJy4vc3RyZWFtdXRpbHMuanMnO1xuXG5jb25zdCBTaWduYWxpbmdTdGF0ZSA9IHtcbiAgUkVBRFk6IDEsXG4gIENPTk5FQ1RJTkc6IDIsXG4gIENPTk5FQ1RFRDogMyxcbn07XG5cbmNvbnN0IHByb3RvY29sVmVyc2lvbiA9ICcxLjInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSB2YWxpZC1qc2RvYyAqL1xuLyoqXG4gKiBAY2xhc3MgUGFydGljaXBhbnRFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBQYXJ0aWNpcGFudEV2ZW50IHJlcHJlc2VudHMgYSBwYXJ0aWNpcGFudCBldmVudC5cbiAgIEBleHRlbmRzIE93dC5CYXNlLk93dEV2ZW50XG4gKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUGFydGljaXBhbnRFdmVudCA9IGZ1bmN0aW9uKHR5cGUsIGluaXQpIHtcbiAgY29uc3QgdGhhdCA9IG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCh0eXBlLCBpbml0KTtcbiAgLyoqXG4gICAqIEBtZW1iZXIge093dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50fSBwYXJ0aWNpcGFudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50RXZlbnRcbiAgICovXG4gIHRoYXQucGFydGljaXBhbnQgPSBpbml0LnBhcnRpY2lwYW50O1xuICByZXR1cm4gdGhhdDtcbn07XG4vKiBlc2xpbnQtZW5hYmxlIHZhbGlkLWpzZG9jICovXG5cbi8qKlxuICogQGNsYXNzIENvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uXG4gKiBAY2xhc3NEZXNjIENvbmZpZ3VyYXRpb24gZm9yIENvbmZlcmVuY2VDbGllbnQuXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuY2xhc3MgQ29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb24geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9SVENDb25maWd1cmF0aW9ufSBydGNDb25maWd1cmF0aW9uXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uXG4gICAgICogQGRlc2MgSXQgd2lsbCBiZSB1c2VkIGZvciBjcmVhdGluZyBQZWVyQ29ubmVjdGlvbi5cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvd2VicnRjLyNydGNjb25maWd1cmF0aW9uLWRpY3Rpb25hcnl8UlRDQ29uZmlndXJhdGlvbiBEaWN0aW9uYXJ5IG9mIFdlYlJUQyAxLjB9LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogLy8gRm9sbG93aW5nIG9iamVjdCBjYW4gYmUgc2V0IHRvIGNvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uLnJ0Y0NvbmZpZ3VyYXRpb24uXG4gICAgICoge1xuICAgICAqICAgaWNlU2VydmVyczogW3tcbiAgICAgKiAgICAgIHVybHM6IFwic3R1bjpleGFtcGxlLmNvbTozNDc4XCJcbiAgICAgKiAgIH0sIHtcbiAgICAgKiAgICAgdXJsczogW1xuICAgICAqICAgICAgIFwidHVybjpleGFtcGxlLmNvbTozNDc4P3RyYW5zcG9ydD11ZHBcIixcbiAgICAgKiAgICAgICBcInR1cm46ZXhhbXBsZS5jb206MzQ3OD90cmFuc3BvcnQ9dGNwXCJcbiAgICAgKiAgICAgXSxcbiAgICAgKiAgICAgIGNyZWRlbnRpYWw6IFwicGFzc3dvcmRcIixcbiAgICAgKiAgICAgIHVzZXJuYW1lOiBcInVzZXJuYW1lXCJcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICovXG4gICAgdGhpcy5ydGNDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P1dlYlRyYW5zcG9ydE9wdGlvbnN9IHdlYlRyYW5zcG9ydENvbmZpZ3VyYXRpb25cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb25cbiAgICAgKiBAZGVzYyBJdCB3aWxsIGJlIHVzZWQgZm9yIGNyZWF0aW5nIFdlYlRyYW5zcG9ydC5cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vd2VidHJhbnNwb3J0LyNkaWN0ZGVmLXdlYnRyYW5zcG9ydG9wdGlvbnN8V2ViVHJhbnNwb3J0T3B0aW9ucyBvZiBXZWJUcmFuc3BvcnR9LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogLy8gRm9sbG93aW5nIG9iamVjdCBjYW4gYmUgc2V0IHRvIGNvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uLndlYlRyYW5zcG9ydENvbmZpZ3VyYXRpb24uXG4gICAgICoge1xuICAgICAqICAgc2VydmVyQ2VydGlmaWNhdGVGaW5nZXJwcmludHM6IFt7XG4gICAgICogICAgIHZhbHVlOlxuICAgICAqICAgICAgICAgJzAwOjExOjIyOjMzOjQ0OjU1OjY2Ojc3Ojg4Ojk5OkFBOkJCOkNDOkREOkVFOkZGOjAwOjExOjIyOjMzOjQ0OjU1OjY2Ojc3Ojg4Ojk5OkFBOkJCOkNDOkREOkVFOkZGJyxcbiAgICAgKiAgICAgYWxnb3JpdGhtOiAnc2hhLTI1NicsXG4gICAgICogICB9XSxcbiAgICAgKiB9XG4gICAgICovXG4gICAgdGhpcy53ZWJUcmFuc3BvcnRDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIENvbmZlcmVuY2VDbGllbnRcbiAqIEBjbGFzc2Rlc2MgVGhlIENvbmZlcmVuY2VDbGllbnQgaGFuZGxlcyBQZWVyQ29ubmVjdGlvbnMgYmV0d2VlbiBjbGllbnQgYW5kIHNlcnZlci4gRm9yIGNvbmZlcmVuY2UgY29udHJvbGxpbmcsIHBsZWFzZSByZWZlciB0byBSRVNUIEFQSSBndWlkZS5cbiAqIEV2ZW50czpcbiAqXG4gKiB8IEV2ZW50IE5hbWUgICAgICAgICAgICB8IEFyZ3VtZW50IFR5cGUgICAgICAgICAgICAgICAgICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IHN0cmVhbWFkZGVkICAgICAgICAgICB8IE93dC5CYXNlLlN0cmVhbUV2ZW50ICAgICAgICAgICAgIHwgQSBuZXcgc3RyZWFtIGlzIGF2YWlsYWJsZSBpbiB0aGUgY29uZmVyZW5jZS4gfFxuICogfCBwYXJ0aWNpcGFudGpvaW5lZCAgICAgfCBPd3QuQ29uZmVyZW5jZS5QYXJ0aWNpcGFudEV2ZW50ICB8IEEgbmV3IHBhcnRpY2lwYW50IGpvaW5lZCB0aGUgY29uZmVyZW5jZS4gfFxuICogfCBtZXNzYWdlcmVjZWl2ZWQgICAgICAgfCBPd3QuQmFzZS5NZXNzYWdlRXZlbnQgICAgICAgICAgICB8IEEgbmV3IG1lc3NhZ2UgaXMgcmVjZWl2ZWQuIHxcbiAqIHwgc2VydmVyZGlzY29ubmVjdGVkICAgIHwgT3d0LkJhc2UuT3d0RXZlbnQgICAgICAgICAgICAgICAgfCBEaXNjb25uZWN0ZWQgZnJvbSBjb25mZXJlbmNlIHNlcnZlci4gfFxuICpcbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7P093dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uIH0gY29uZmlnIENvbmZpZ3VyYXRpb24gZm9yIENvbmZlcmVuY2VDbGllbnQuXG4gKiBAcGFyYW0gez9Pd3QuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmcgfSBzaWduYWxpbmdJbXBsIFNpZ25hbGluZyBjaGFubmVsIGltcGxlbWVudGF0aW9uIGZvciBDb25mZXJlbmNlQ2xpZW50LiBTREsgdXNlcyBkZWZhdWx0IHNpZ25hbGluZyBjaGFubmVsIGltcGxlbWVudGF0aW9uIGlmIHRoaXMgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZC4gQ3VycmVudGx5LCBhIFNvY2tldC5JTyBzaWduYWxpbmcgY2hhbm5lbCBpbXBsZW1lbnRhdGlvbiB3YXMgcHJvdmlkZWQgYXMgaWNzLmNvbmZlcmVuY2UuU2lvU2lnbmFsaW5nLiBIb3dldmVyLCBpdCBpcyBub3QgcmVjb21tZW5kZWQgdG8gZGlyZWN0bHkgYWNjZXNzIHNpZ25hbGluZyBjaGFubmVsIG9yIGN1c3RvbWl6ZSBzaWduYWxpbmcgY2hhbm5lbCBmb3IgQ29uZmVyZW5jZUNsaWVudCBhcyB0aGlzIHRpbWUuXG4gKi9cbmV4cG9ydCBjb25zdCBDb25mZXJlbmNlQ2xpZW50ID0gZnVuY3Rpb24oY29uZmlnLCBzaWduYWxpbmdJbXBsKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcgRXZlbnRNb2R1bGUuRXZlbnREaXNwYXRjaGVyKCkpO1xuICBjb25maWcgPSBjb25maWcgfHwge307XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuICBsZXQgc2lnbmFsaW5nU3RhdGUgPSBTaWduYWxpbmdTdGF0ZS5SRUFEWTtcbiAgY29uc3Qgc2lnbmFsaW5nID0gc2lnbmFsaW5nSW1wbCA/IHNpZ25hbGluZ0ltcGwgOiAobmV3IFNpZ25hbGluZygpKTtcbiAgbGV0IG1lO1xuICBsZXQgcm9vbTtcbiAgY29uc3QgcmVtb3RlU3RyZWFtcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHN0cmVhbSBJRCwgdmFsdWUgaXMgYSBSZW1vdGVTdHJlYW0uXG4gIGNvbnN0IHBhcnRpY2lwYW50cyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHBhcnRpY2lwYW50IElELCB2YWx1ZSBpcyBhIFBhcnRpY2lwYW50IG9iamVjdC5cbiAgY29uc3QgcHVibGlzaENoYW5uZWxzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgTWVkaWFTdHJlYW0ncyBJRCwgdmFsdWUgaXMgcGMgY2hhbm5lbC5cbiAgY29uc3QgY2hhbm5lbHMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBjaGFubmVsJ3MgaW50ZXJuYWwgSUQsIHZhbHVlIGlzIGNoYW5uZWwuXG4gIGxldCBwZWVyQ29ubmVjdGlvbkNoYW5uZWwgPSBudWxsOyAvLyBQZWVyQ29ubmVjdGlvbiBmb3IgV2ViUlRDLlxuICBsZXQgcXVpY1RyYW5zcG9ydENoYW5uZWwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyIHtSVENQZWVyQ29ubmVjdGlvbn0gcGVlckNvbm5lY3Rpb25cbiAgICogQGluc3RhbmNlXG4gICAqIEByZWFkb25seVxuICAgKiBAZGVzYyBQZWVyQ29ubmVjdGlvbiBmb3IgV2ViUlRDIGNvbm5lY3Rpb24gd2l0aCBjb25mZXJlbmNlIHNlcnZlci5cbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYnJ0Yy1wYy8jcnRjcGVlcmNvbm5lY3Rpb24taW50ZXJmYWNlfFJUQ1BlZXJDb25uZWN0aW9uIEludGVyZmFjZSBvZiBXZWJSVEMgMS4wfS5cbiAgICovXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncGVlckNvbm5lY3Rpb24nLCB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gcGVlckNvbm5lY3Rpb25DaGFubmVsPy5wYztcbiAgICB9LFxuICB9KTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIG9uU2lnbmFsaW5nTWVzc2FnZVxuICAgKiBAZGVzYyBSZWNlaXZlZCBhIG1lc3NhZ2UgZnJvbSBjb25mZXJlbmNlIHBvcnRhbC4gRGVmaW5lZCBpbiBjbGllbnQtc2VydmVyIHByb3RvY29sLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbiB0eXBlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBEYXRhIHJlY2VpdmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gb25TaWduYWxpbmdNZXNzYWdlKG5vdGlmaWNhdGlvbiwgZGF0YSkge1xuICAgIGlmIChub3RpZmljYXRpb24gPT09ICdzb2FjJyB8fCBub3RpZmljYXRpb24gPT09ICdwcm9ncmVzcycpIHtcbiAgICAgIGlmIChjaGFubmVscy5oYXMoZGF0YS5pZCkpIHtcbiAgICAgICAgY2hhbm5lbHMuZ2V0KGRhdGEuaWQpLm9uTWVzc2FnZShub3RpZmljYXRpb24sIGRhdGEpO1xuICAgICAgfSBlbHNlIGlmIChxdWljVHJhbnNwb3J0Q2hhbm5lbCAmJiBxdWljVHJhbnNwb3J0Q2hhbm5lbFxuICAgICAgICAgIC5oYXNDb250ZW50U2Vzc2lvbklkKGRhdGEuaWQpKSB7XG4gICAgICAgIHF1aWNUcmFuc3BvcnRDaGFubmVsLm9uTWVzc2FnZShub3RpZmljYXRpb24sIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Nhbm5vdCBmaW5kIGEgY2hhbm5lbCBmb3IgaW5jb21pbmcgZGF0YS4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKG5vdGlmaWNhdGlvbiA9PT0gJ3N0cmVhbScpIHtcbiAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ2FkZCcpIHtcbiAgICAgICAgZmlyZVN0cmVhbUFkZGVkKGRhdGEuZGF0YSk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEuc3RhdHVzID09PSAncmVtb3ZlJykge1xuICAgICAgICBmaXJlU3RyZWFtUmVtb3ZlZChkYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdGF0dXMgPT09ICd1cGRhdGUnKSB7XG4gICAgICAgIC8vIEJyb2FkY2FzdCBhdWRpby92aWRlbyB1cGRhdGUgc3RhdHVzIHRvIGNoYW5uZWwgc28gc3BlY2lmaWMgZXZlbnRzIGNhbiBiZSBmaXJlZCBvbiBwdWJsaWNhdGlvbiBvciBzdWJzY3JpcHRpb24uXG4gICAgICAgIGlmIChkYXRhLmRhdGEuZmllbGQgPT09ICdhdWRpby5zdGF0dXMnIHx8IGRhdGEuZGF0YS5maWVsZCA9PT1cbiAgICAgICAgICAndmlkZW8uc3RhdHVzJykge1xuICAgICAgICAgIGNoYW5uZWxzLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIGMub25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLmZpZWxkID09PSAnYWN0aXZlSW5wdXQnKSB7XG4gICAgICAgICAgZmlyZUFjdGl2ZUF1ZGlvSW5wdXRDaGFuZ2UoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLmZpZWxkID09PSAndmlkZW8ubGF5b3V0Jykge1xuICAgICAgICAgIGZpcmVMYXlvdXRDaGFuZ2UoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLmZpZWxkID09PSAnLicpIHtcbiAgICAgICAgICB1cGRhdGVSZW1vdGVTdHJlYW0oZGF0YS5kYXRhLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2dnZXIud2FybmluZygnVW5rbm93biBzdHJlYW0gZXZlbnQgZnJvbSBNQ1UuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vdGlmaWNhdGlvbiA9PT0gJ3RleHQnKSB7XG4gICAgICBmaXJlTWVzc2FnZVJlY2VpdmVkKGRhdGEpO1xuICAgIH0gZWxzZSBpZiAobm90aWZpY2F0aW9uID09PSAncGFydGljaXBhbnQnKSB7XG4gICAgICBmaXJlUGFydGljaXBhbnRFdmVudChkYXRhKTtcbiAgICB9XG4gIH1cblxuICBzaWduYWxpbmcuYWRkRXZlbnRMaXN0ZW5lcignZGF0YScsIChldmVudCkgPT4ge1xuICAgIG9uU2lnbmFsaW5nTWVzc2FnZShldmVudC5tZXNzYWdlLm5vdGlmaWNhdGlvbiwgZXZlbnQubWVzc2FnZS5kYXRhKTtcbiAgfSk7XG5cbiAgc2lnbmFsaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgY2xlYW4oKTtcbiAgICBzaWduYWxpbmdTdGF0ZSA9IFNpZ25hbGluZ1N0YXRlLlJFQURZO1xuICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ3NlcnZlcmRpc2Nvbm5lY3RlZCcpKTtcbiAgfSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gZmlyZVBhcnRpY2lwYW50RXZlbnQoZGF0YSkge1xuICAgIGlmIChkYXRhLmFjdGlvbiA9PT0gJ2pvaW4nKSB7XG4gICAgICBkYXRhID0gZGF0YS5kYXRhO1xuICAgICAgY29uc3QgcGFydGljaXBhbnQgPSBuZXcgUGFydGljaXBhbnQoZGF0YS5pZCwgZGF0YS5yb2xlLCBkYXRhLnVzZXIpO1xuICAgICAgcGFydGljaXBhbnRzLnNldChkYXRhLmlkLCBwYXJ0aWNpcGFudCk7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBQYXJ0aWNpcGFudEV2ZW50KFxuICAgICAgICAgICdwYXJ0aWNpcGFudGpvaW5lZCcsIHtwYXJ0aWNpcGFudDogcGFydGljaXBhbnR9KTtcbiAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfSBlbHNlIGlmIChkYXRhLmFjdGlvbiA9PT0gJ2xlYXZlJykge1xuICAgICAgY29uc3QgcGFydGljaXBhbnRJZCA9IGRhdGEuZGF0YTtcbiAgICAgIGlmICghcGFydGljaXBhbnRzLmhhcyhwYXJ0aWNpcGFudElkKSkge1xuICAgICAgICBMb2dnZXIud2FybmluZyhcbiAgICAgICAgICAgICdSZWNlaXZlZCBsZWF2ZSBtZXNzYWdlIGZyb20gTUNVIGZvciBhbiB1bmtub3duIHBhcnRpY2lwYW50LicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwYXJ0aWNpcGFudCA9IHBhcnRpY2lwYW50cy5nZXQocGFydGljaXBhbnRJZCk7XG4gICAgICBwYXJ0aWNpcGFudHMuZGVsZXRlKHBhcnRpY2lwYW50SWQpO1xuICAgICAgcGFydGljaXBhbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ2xlZnQnKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gZmlyZU1lc3NhZ2VSZWNlaXZlZChkYXRhKSB7XG4gICAgY29uc3QgbWVzc2FnZUV2ZW50ID0gbmV3IEV2ZW50TW9kdWxlLk1lc3NhZ2VFdmVudCgnbWVzc2FnZXJlY2VpdmVkJywge1xuICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxuICAgICAgb3JpZ2luOiBkYXRhLmZyb20sXG4gICAgICB0bzogZGF0YS50byxcbiAgICB9KTtcbiAgICBzZWxmLmRpc3BhdGNoRXZlbnQobWVzc2FnZUV2ZW50KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGZpcmVTdHJlYW1BZGRlZChpbmZvKSB7XG4gICAgY29uc3Qgc3RyZWFtID0gY3JlYXRlUmVtb3RlU3RyZWFtKGluZm8pO1xuICAgIHJlbW90ZVN0cmVhbXMuc2V0KHN0cmVhbS5pZCwgc3RyZWFtKTtcbiAgICBjb25zdCBzdHJlYW1FdmVudCA9IG5ldyBTdHJlYW1Nb2R1bGUuU3RyZWFtRXZlbnQoJ3N0cmVhbWFkZGVkJywge1xuICAgICAgc3RyZWFtOiBzdHJlYW0sXG4gICAgfSk7XG4gICAgc2VsZi5kaXNwYXRjaEV2ZW50KHN0cmVhbUV2ZW50KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGZpcmVTdHJlYW1SZW1vdmVkKGluZm8pIHtcbiAgICBpZiAoIXJlbW90ZVN0cmVhbXMuaGFzKGluZm8uaWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgc3BlY2lmaWMgcmVtb3RlIHN0cmVhbS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyZWFtID0gcmVtb3RlU3RyZWFtcy5nZXQoaW5mby5pZCk7XG4gICAgY29uc3Qgc3RyZWFtRXZlbnQgPSBuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ2VuZGVkJyk7XG4gICAgcmVtb3RlU3RyZWFtcy5kZWxldGUoc3RyZWFtLmlkKTtcbiAgICBzdHJlYW0uZGlzcGF0Y2hFdmVudChzdHJlYW1FdmVudCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBmaXJlQWN0aXZlQXVkaW9JbnB1dENoYW5nZShpbmZvKSB7XG4gICAgaWYgKCFyZW1vdGVTdHJlYW1zLmhhcyhpbmZvLmlkKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Nhbm5vdCBmaW5kIHNwZWNpZmljIHJlbW90ZSBzdHJlYW0uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0cmVhbSA9IHJlbW90ZVN0cmVhbXMuZ2V0KGluZm8uaWQpO1xuICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IEFjdGl2ZUF1ZGlvSW5wdXRDaGFuZ2VFdmVudChcbiAgICAgICAgJ2FjdGl2ZWF1ZGlvaW5wdXRjaGFuZ2UnLCB7XG4gICAgICAgICAgYWN0aXZlQXVkaW9JbnB1dFN0cmVhbUlkOiBpbmZvLmRhdGEudmFsdWUsXG4gICAgICAgIH0pO1xuICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KHN0cmVhbUV2ZW50KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGZpcmVMYXlvdXRDaGFuZ2UoaW5mbykge1xuICAgIGlmICghcmVtb3RlU3RyZWFtcy5oYXMoaW5mby5pZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzcGVjaWZpYyByZW1vdGUgc3RyZWFtLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHJlYW0gPSByZW1vdGVTdHJlYW1zLmdldChpbmZvLmlkKTtcbiAgICBjb25zdCBzdHJlYW1FdmVudCA9IG5ldyBMYXlvdXRDaGFuZ2VFdmVudChcbiAgICAgICAgJ2xheW91dGNoYW5nZScsIHtcbiAgICAgICAgICBsYXlvdXQ6IGluZm8uZGF0YS52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgc3RyZWFtLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gdXBkYXRlUmVtb3RlU3RyZWFtKHN0cmVhbUluZm8pIHtcbiAgICBpZiAoIXJlbW90ZVN0cmVhbXMuaGFzKHN0cmVhbUluZm8uaWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgc3BlY2lmaWMgcmVtb3RlIHN0cmVhbS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyZWFtID0gcmVtb3RlU3RyZWFtcy5nZXQoc3RyZWFtSW5mby5pZCk7XG4gICAgc3RyZWFtLnNldHRpbmdzID0gU3RyZWFtVXRpbHNNb2R1bGUuY29udmVydFRvUHVibGljYXRpb25TZXR0aW5ncyhzdHJlYW1JbmZvXG4gICAgICAgIC5tZWRpYSk7XG4gICAgc3RyZWFtLmV4dHJhQ2FwYWJpbGl0aWVzID0gU3RyZWFtVXRpbHNNb2R1bGVcbiAgICAgICAgLmNvbnZlcnRUb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyhcbiAgICAgICAgICAgIHN0cmVhbUluZm8ubWVkaWEpO1xuICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IEV2ZW50TW9kdWxlLk93dEV2ZW50KCd1cGRhdGVkJyk7XG4gICAgc3RyZWFtLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gY3JlYXRlUmVtb3RlU3RyZWFtKHN0cmVhbUluZm8pIHtcbiAgICBpZiAoc3RyZWFtSW5mby50eXBlID09PSAnbWl4ZWQnKSB7XG4gICAgICByZXR1cm4gbmV3IFJlbW90ZU1peGVkU3RyZWFtKHN0cmVhbUluZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYXVkaW9Tb3VyY2VJbmZvOyBsZXQgdmlkZW9Tb3VyY2VJbmZvO1xuICAgICAgY29uc3QgYXVkaW9UcmFjayA9IHN0cmVhbUluZm8ubWVkaWEudHJhY2tzXG4gICAgICAgICAgLmZpbmQoKHQpID0+IHQudHlwZSA9PT0gJ2F1ZGlvJyk7XG4gICAgICBjb25zdCB2aWRlb1RyYWNrID0gc3RyZWFtSW5mby5tZWRpYS50cmFja3NcbiAgICAgICAgICAuZmluZCgodCkgPT4gdC50eXBlID09PSAndmlkZW8nKTtcbiAgICAgIGlmIChhdWRpb1RyYWNrKSB7XG4gICAgICAgIGF1ZGlvU291cmNlSW5mbyA9IGF1ZGlvVHJhY2suc291cmNlO1xuICAgICAgfVxuICAgICAgaWYgKHZpZGVvVHJhY2spIHtcbiAgICAgICAgdmlkZW9Tb3VyY2VJbmZvID0gdmlkZW9UcmFjay5zb3VyY2U7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhU291cmNlSW5mbyA9IHN0cmVhbUluZm8uZGF0YTtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBTdHJlYW1Nb2R1bGUuUmVtb3RlU3RyZWFtKHN0cmVhbUluZm8uaWQsXG4gICAgICAgICAgc3RyZWFtSW5mby5pbmZvLm93bmVyLCB1bmRlZmluZWQsIG5ldyBTdHJlYW1Nb2R1bGUuU3RyZWFtU291cmNlSW5mbyhcbiAgICAgICAgICAgICAgYXVkaW9Tb3VyY2VJbmZvLCB2aWRlb1NvdXJjZUluZm8sIGRhdGFTb3VyY2VJbmZvKSwgc3RyZWFtSW5mby5pbmZvXG4gICAgICAgICAgICAgIC5hdHRyaWJ1dGVzKTtcbiAgICAgIHN0cmVhbS5zZXR0aW5ncyA9IFN0cmVhbVV0aWxzTW9kdWxlLmNvbnZlcnRUb1B1YmxpY2F0aW9uU2V0dGluZ3MoXG4gICAgICAgICAgc3RyZWFtSW5mby5tZWRpYSk7XG4gICAgICBzdHJlYW0uZXh0cmFDYXBhYmlsaXRpZXMgPSBTdHJlYW1VdGlsc01vZHVsZVxuICAgICAgICAgIC5jb252ZXJ0VG9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMoXG4gICAgICAgICAgICAgIHN0cmVhbUluZm8ubWVkaWEpO1xuICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBhc3luYyBmdW5jdGlvbiBzZW5kU2lnbmFsaW5nTWVzc2FnZSh0eXBlLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHNpZ25hbGluZy5zZW5kKHR5cGUsIG1lc3NhZ2UpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gY3JlYXRlU2lnbmFsaW5nRm9yQ2hhbm5lbCgpIHtcbiAgICAvLyBDb25zdHJ1Y3QgYW4gc2lnbmFsaW5nIHNlbmRlci9yZWNlaXZlciBmb3IgQ29uZmVyZW5jZVBlZXJDb25uZWN0aW9uLlxuICAgIGNvbnN0IHNpZ25hbGluZ0ZvckNoYW5uZWwgPSBPYmplY3QuY3JlYXRlKEV2ZW50TW9kdWxlLkV2ZW50RGlzcGF0Y2hlcik7XG4gICAgc2lnbmFsaW5nRm9yQ2hhbm5lbC5zZW5kU2lnbmFsaW5nTWVzc2FnZSA9IHNlbmRTaWduYWxpbmdNZXNzYWdlO1xuICAgIHJldHVybiBzaWduYWxpbmdGb3JDaGFubmVsO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gY3JlYXRlUGVlckNvbm5lY3Rpb25DaGFubmVsKHRyYW5zcG9ydCkge1xuICAgIGNvbnN0IHNpZ25hbGluZ0ZvckNoYW5uZWwgPSBjcmVhdGVTaWduYWxpbmdGb3JDaGFubmVsKCk7XG4gICAgY29uc3QgY2hhbm5lbCA9XG4gICAgICAgIG5ldyBDb25mZXJlbmNlUGVlckNvbm5lY3Rpb25DaGFubmVsKGNvbmZpZywgc2lnbmFsaW5nRm9yQ2hhbm5lbCk7XG4gICAgY2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdpZCcsIChtZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgIGlmICghY2hhbm5lbHMuaGFzKG1lc3NhZ2VFdmVudC5tZXNzYWdlKSkge1xuICAgICAgICBjaGFubmVscy5zZXQobWVzc2FnZUV2ZW50Lm1lc3NhZ2UsIGNoYW5uZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0NoYW5uZWwgYWxyZWFkeSBleGlzdHMnLCBtZXNzYWdlRXZlbnQubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNoYW5uZWw7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBjbGVhbigpIHtcbiAgICBwYXJ0aWNpcGFudHMuY2xlYXIoKTtcbiAgICByZW1vdGVTdHJlYW1zLmNsZWFyKCk7XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2luZm8nLCB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICBnZXQ6ICgpID0+IHtcbiAgICAgIGlmICghcm9vbSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgQ29uZmVyZW5jZUluZm8ocm9vbS5pZCwgQXJyYXkuZnJvbShwYXJ0aWNpcGFudHMsICh4KSA9PiB4W1xuICAgICAgICAgIDFdKSwgQXJyYXkuZnJvbShyZW1vdGVTdHJlYW1zLCAoeCkgPT4geFsxXSksIG1lKTtcbiAgICB9LFxuICB9KTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGpvaW5cbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIEpvaW4gYSBjb25mZXJlbmNlLlxuICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPENvbmZlcmVuY2VJbmZvLCBFcnJvcj59IFJldHVybiBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCBjdXJyZW50IGNvbmZlcmVuY2UncyBpbmZvcm1hdGlvbiBpZiBzdWNjZXNzZnVsbHkgam9pbiB0aGUgY29uZmVyZW5jZS4gT3IgcmV0dXJuIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBPd3QuRXJyb3IgaWYgZmFpbGVkIHRvIGpvaW4gdGhlIGNvbmZlcmVuY2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlblN0cmluZyBUb2tlbiBpcyBpc3N1ZWQgYnkgY29uZmVyZW5jZSBzZXJ2ZXIobnV2ZSkuXG4gICAqL1xuICB0aGlzLmpvaW4gPSBmdW5jdGlvbih0b2tlblN0cmluZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB0b2tlbiA9IEpTT04ucGFyc2UoQmFzZTY0LmRlY29kZUJhc2U2NCh0b2tlblN0cmluZykpO1xuICAgICAgY29uc3QgaXNTZWN1cmVkID0gKHRva2VuLnNlY3VyZSA9PT0gdHJ1ZSk7XG4gICAgICBsZXQgaG9zdCA9IHRva2VuLmhvc3Q7XG4gICAgICBpZiAodHlwZW9mIGhvc3QgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKCdJbnZhbGlkIGhvc3QuJykpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaG9zdC5pbmRleE9mKCdodHRwJykgPT09IC0xKSB7XG4gICAgICAgIGhvc3QgPSBpc1NlY3VyZWQgPyAoJ2h0dHBzOi8vJyArIGhvc3QpIDogKCdodHRwOi8vJyArIGhvc3QpO1xuICAgICAgfVxuICAgICAgaWYgKHNpZ25hbGluZ1N0YXRlICE9PSBTaWduYWxpbmdTdGF0ZS5SRUFEWSkge1xuICAgICAgICByZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcignY29ubmVjdGlvbiBzdGF0ZSBpbnZhbGlkJykpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNpZ25hbGluZ1N0YXRlID0gU2lnbmFsaW5nU3RhdGUuQ09OTkVDVElORztcblxuICAgICAgY29uc3Qgc3lzSW5mbyA9IFV0aWxzLnN5c0luZm8oKTtcbiAgICAgIGNvbnN0IGxvZ2luSW5mbyA9IHtcbiAgICAgICAgdG9rZW46IHRva2VuU3RyaW5nLFxuICAgICAgICB1c2VyQWdlbnQ6IHtzZGs6IHN5c0luZm8uc2RrfSxcbiAgICAgICAgcHJvdG9jb2w6IHByb3RvY29sVmVyc2lvbixcbiAgICAgIH07XG5cbiAgICAgIHNpZ25hbGluZy5jb25uZWN0KGhvc3QsIGlzU2VjdXJlZCwgbG9naW5JbmZvKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIHNpZ25hbGluZ1N0YXRlID0gU2lnbmFsaW5nU3RhdGUuQ09OTkVDVEVEO1xuICAgICAgICByb29tID0gcmVzcC5yb29tO1xuICAgICAgICBpZiAocm9vbS5zdHJlYW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHN0IG9mIHJvb20uc3RyZWFtcykge1xuICAgICAgICAgICAgaWYgKHN0LnR5cGUgPT09ICdtaXhlZCcpIHtcbiAgICAgICAgICAgICAgc3Qudmlld3BvcnQgPSBzdC5pbmZvLmxhYmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3RlU3RyZWFtcy5zZXQoc3QuaWQsIGNyZWF0ZVJlbW90ZVN0cmVhbShzdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcC5yb29tICYmIHJlc3Aucm9vbS5wYXJ0aWNpcGFudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvciAoY29uc3QgcCBvZiByZXNwLnJvb20ucGFydGljaXBhbnRzKSB7XG4gICAgICAgICAgICBwYXJ0aWNpcGFudHMuc2V0KHAuaWQsIG5ldyBQYXJ0aWNpcGFudChwLmlkLCBwLnJvbGUsIHAudXNlcikpO1xuICAgICAgICAgICAgaWYgKHAuaWQgPT09IHJlc3AuaWQpIHtcbiAgICAgICAgICAgICAgbWUgPSBwYXJ0aWNpcGFudHMuZ2V0KHAuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwZWVyQ29ubmVjdGlvbkNoYW5uZWwgPSBjcmVhdGVQZWVyQ29ubmVjdGlvbkNoYW5uZWwoKTtcbiAgICAgICAgcGVlckNvbm5lY3Rpb25DaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICAgIHBlZXJDb25uZWN0aW9uQ2hhbm5lbCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHlwZW9mIFdlYlRyYW5zcG9ydCA9PT0gJ2Z1bmN0aW9uJyAmJiB0b2tlbi53ZWJUcmFuc3BvcnRVcmwpIHtcbiAgICAgICAgICBxdWljVHJhbnNwb3J0Q2hhbm5lbCA9IG5ldyBRdWljQ29ubmVjdGlvbihcbiAgICAgICAgICAgICAgdG9rZW4ud2ViVHJhbnNwb3J0VXJsLCByZXNwLndlYlRyYW5zcG9ydFRva2VuLFxuICAgICAgICAgICAgICBjcmVhdGVTaWduYWxpbmdGb3JDaGFubmVsKCksIGNvbmZpZy53ZWJUcmFuc3BvcnRDb25maWd1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25mZXJlbmNlSW5mbyA9IG5ldyBDb25mZXJlbmNlSW5mbyhcbiAgICAgICAgICAgIHJlc3Aucm9vbS5pZCwgQXJyYXkuZnJvbShwYXJ0aWNpcGFudHMudmFsdWVzKCkpLFxuICAgICAgICAgICAgQXJyYXkuZnJvbShyZW1vdGVTdHJlYW1zLnZhbHVlcygpKSwgbWUpO1xuICAgICAgICBpZiAocXVpY1RyYW5zcG9ydENoYW5uZWwpIHtcbiAgICAgICAgICBxdWljVHJhbnNwb3J0Q2hhbm5lbC5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGNvbmZlcmVuY2VJbmZvKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGNvbmZlcmVuY2VJbmZvKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgc2lnbmFsaW5nU3RhdGUgPSBTaWduYWxpbmdTdGF0ZS5SRUFEWTtcbiAgICAgICAgcmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBwdWJsaXNoXG4gICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBQdWJsaXNoIGEgTG9jYWxTdHJlYW0gdG8gY29uZmVyZW5jZSBzZXJ2ZXIuIE90aGVyIHBhcnRpY2lwYW50cyB3aWxsIGJlIGFibGUgdG8gc3Vic2NyaWJlIHRoaXMgc3RyZWFtIHdoZW4gaXQgaXMgc3VjY2Vzc2Z1bGx5IHB1Ymxpc2hlZC5cbiAgICogQHBhcmFtIHtPd3QuQmFzZS5Mb2NhbFN0cmVhbX0gc3RyZWFtIFRoZSBzdHJlYW0gdG8gYmUgcHVibGlzaGVkLlxuICAgKiBAcGFyYW0geyhPd3QuQmFzZS5QdWJsaXNoT3B0aW9uc3xSVENSdHBUcmFuc2NlaXZlcltdKX0gb3B0aW9ucyBJZiBvcHRpb25zIGlzIGEgUHVibGlzaE9wdGlvbnMsIHRoZSBzdHJlYW0gd2lsbCBiZSBwdWJsaXNoZWQgYXMgb3B0aW9ucyBzcGVjaWZpZWQuIElmIG9wdGlvbnMgaXMgYSBsaXN0IG9mIFJUQ1J0cFRyYW5zY2VpdmVycywgZWFjaCB0cmFjayBpbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBoYXZlIGEgY29ycmVzcG9uZGluZyBSVENSdHBUcmFuc2NlaXZlciBoZXJlLCBhbmQgdGhlIHRyYWNrIHdpbGwgYmUgcHVibGlzaGVkIHdpdGggdGhlIFJUQ1J0cFRyYW5zY2VpdmVyIGFzc29jaWF0ZWQgd2l0aCBpdC5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdmlkZW9Db2RlY3MgVmlkZW8gY29kZWMgbmFtZXMgZm9yIHB1Ymxpc2hpbmcuIFZhbGlkIHZhbHVlcyBhcmUgJ1ZQOCcsICdWUDknIGFuZCAnSDI2NCcuIFRoaXMgcGFyYW1ldGVyIG9ubHkgdmFsaWQgd2hlbiB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIFB1Ymxpc2hPcHRpb25zIGFuZCBvcHRpb25zLnZpZGVvIGlzIFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycy4gUHVibGlzaGluZyB3aXRoIFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycyBpcyBhbiBleHBlcmltZW50YWwgZmVhdHVyZS4gVGhpcyBwYXJhbWV0ZXIgaXMgc3ViamVjdCB0byBjaGFuZ2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UHVibGljYXRpb24sIEVycm9yPn0gUmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGggYSBuZXdseSBjcmVhdGVkIFB1YmxpY2F0aW9uIG9uY2Ugc3BlY2lmaWMgc3RyZWFtIGlzIHN1Y2Nlc3NmdWxseSBwdWJsaXNoZWQsIG9yIHJlamVjdGVkIHdpdGggYSBuZXdseSBjcmVhdGVkIEVycm9yIGlmIHN0cmVhbSBpcyBpbnZhbGlkIG9yIG9wdGlvbnMgY2Fubm90IGJlIHNhdGlzZmllZC4gU3VjY2Vzc2Z1bGx5IHB1Ymxpc2hlZCBtZWFucyBQZWVyQ29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZCBhbmQgc2VydmVyIGlzIGFibGUgdG8gcHJvY2VzcyBtZWRpYSBkYXRhLlxuICAgKi9cbiAgdGhpcy5wdWJsaXNoID0gZnVuY3Rpb24oc3RyZWFtLCBvcHRpb25zLCB2aWRlb0NvZGVjcykge1xuICAgIGlmICghKHN0cmVhbSBpbnN0YW5jZW9mIFN0cmVhbU1vZHVsZS5Mb2NhbFN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKCdJbnZhbGlkIHN0cmVhbS4nKSk7XG4gICAgfVxuICAgIGlmIChzdHJlYW0uc291cmNlLmRhdGEpIHtcbiAgICAgIHJldHVybiBxdWljVHJhbnNwb3J0Q2hhbm5lbC5wdWJsaXNoKHN0cmVhbSk7XG4gICAgfVxuICAgIGlmIChwdWJsaXNoQ2hhbm5lbHMuaGFzKHN0cmVhbS5tZWRpYVN0cmVhbS5pZCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdDYW5ub3QgcHVibGlzaCBhIHB1Ymxpc2hlZCBzdHJlYW0uJykpO1xuICAgIH1cbiAgICByZXR1cm4gcGVlckNvbm5lY3Rpb25DaGFubmVsLnB1Ymxpc2goc3RyZWFtLCBvcHRpb25zLCB2aWRlb0NvZGVjcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzdWJzY3JpYmVcbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFN1YnNjcmliZSBhIFJlbW90ZVN0cmVhbSBmcm9tIGNvbmZlcmVuY2Ugc2VydmVyLlxuICAgKiBAcGFyYW0ge093dC5CYXNlLlJlbW90ZVN0cmVhbX0gc3RyZWFtIFRoZSBzdHJlYW0gdG8gYmUgc3Vic2NyaWJlZC5cbiAgICogQHBhcmFtIHtPd3QuQ29uZmVyZW5jZS5TdWJzY3JpYmVPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHN1YnNjcmlwdGlvbi5cbiAgICogQHJldHVybiB7UHJvbWlzZTxTdWJzY3JpcHRpb24sIEVycm9yPn0gUmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGggYSBuZXdseSBjcmVhdGVkIFN1YnNjcmlwdGlvbiBvbmNlIHNwZWNpZmljIHN0cmVhbSBpcyBzdWNjZXNzZnVsbHkgc3Vic2NyaWJlZCwgb3IgcmVqZWN0ZWQgd2l0aCBhIG5ld2x5IGNyZWF0ZWQgRXJyb3IgaWYgc3RyZWFtIGlzIGludmFsaWQgb3Igb3B0aW9ucyBjYW5ub3QgYmUgc2F0aXNmaWVkLiBTdWNjZXNzZnVsbHkgc3Vic2NyaWJlZCBtZWFucyBQZWVyQ29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZCBhbmQgc2VydmVyIHdhcyBzdGFydGVkIHRvIHNlbmQgbWVkaWEgZGF0YS5cbiAgICovXG4gIHRoaXMuc3Vic2NyaWJlID0gZnVuY3Rpb24oc3RyZWFtLCBvcHRpb25zKSB7XG4gICAgaWYgKCEoc3RyZWFtIGluc3RhbmNlb2YgU3RyZWFtTW9kdWxlLlJlbW90ZVN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKCdJbnZhbGlkIHN0cmVhbS4nKSk7XG4gICAgfVxuICAgIGlmIChzdHJlYW0uc291cmNlLmRhdGEpIHtcbiAgICAgIGlmIChzdHJlYW0uc291cmNlLmF1ZGlvIHx8IHN0cmVhbS5zb3VyY2UudmlkZW8pIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCBzb3VyY2UgaW5mby4gQSByZW1vdGUgc3RyZWFtIGlzIGVpdGhlciBhIGRhdGEgc3RyZWFtIG9yICcgK1xuICAgICAgICAgICAgJ2EgbWVkaWEgc3RyZWFtLicpKTtcbiAgICAgIH1cbiAgICAgIGlmIChxdWljVHJhbnNwb3J0Q2hhbm5lbCkge1xuICAgICAgICByZXR1cm4gcXVpY1RyYW5zcG9ydENoYW5uZWwuc3Vic2NyaWJlKHN0cmVhbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignV2ViVHJhbnNwb3J0IGlzIG5vdCBzdXBwb3J0ZWQuJykpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGVlckNvbm5lY3Rpb25DaGFubmVsLnN1YnNjcmliZShzdHJlYW0sIG9wdGlvbnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc2VuZFxuICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgU2VuZCBhIHRleHQgbWVzc2FnZSB0byBhIHBhcnRpY2lwYW50IG9yIGFsbCBwYXJ0aWNpcGFudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIE1lc3NhZ2UgdG8gYmUgc2VudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcnRpY2lwYW50SWQgUmVjZWl2ZXIgb2YgdGhpcyBtZXNzYWdlLiBNZXNzYWdlIHdpbGwgYmUgc2VudCB0byBhbGwgcGFydGljaXBhbnRzIGlmIHBhcnRpY2lwYW50SWQgaXMgdW5kZWZpbmVkLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQsIEVycm9yPn0gUmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdoZW4gY29uZmVyZW5jZSBzZXJ2ZXIgcmVjZWl2ZWQgY2VydGFpbiBtZXNzYWdlLlxuICAgKi9cbiAgdGhpcy5zZW5kID0gZnVuY3Rpb24obWVzc2FnZSwgcGFydGljaXBhbnRJZCkge1xuICAgIGlmIChwYXJ0aWNpcGFudElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcnRpY2lwYW50SWQgPSAnYWxsJztcbiAgICB9XG4gICAgcmV0dXJuIHNlbmRTaWduYWxpbmdNZXNzYWdlKCd0ZXh0Jywge3RvOiBwYXJ0aWNpcGFudElkLCBtZXNzYWdlOiBtZXNzYWdlfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBsZWF2ZVxuICAgKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgTGVhdmUgYSBjb25mZXJlbmNlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQsIEVycm9yPn0gUmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGggdW5kZWZpbmVkIG9uY2UgdGhlIGNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGVkLlxuICAgKi9cbiAgdGhpcy5sZWF2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzaWduYWxpbmcuZGlzY29ubmVjdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgY2xlYW4oKTtcbiAgICAgIHNpZ25hbGluZ1N0YXRlID0gU2lnbmFsaW5nU3RhdGUuUkVBRFk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVTZW5kU3RyZWFtXG4gICAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBDcmVhdGUgYW4gb3V0Z29pbmcgc3RyZWFtLiBPbmx5IGF2YWlsYWJsZSB3aGVuIFdlYlRyYW5zcG9ydCBpcyBzdXBwb3J0ZWQgYnkgdXNlcidzIGJyb3dzZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8U2VuZFN0cmVhbSwgRXJyb3I+fSBSZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBhIFNlbmRTdHJlYW0gb25jZSBzdHJlYW0gaXMgY3JlYXRlZC5cbiAgICovXG4gIGlmIChRdWljQ29ubmVjdGlvbikge1xuICAgIHRoaXMuY3JlYXRlU2VuZFN0cmVhbSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFxdWljVHJhbnNwb3J0Q2hhbm5lbCkge1xuICAgICAgICAvLyBUcnkgdG8gY3JlYXRlIGEgbmV3IG9uZSBvciBjb25zaWRlciBpdCBhcyBjbG9zZWQ/XG4gICAgICAgIHRocm93IG5ldyBDb25mZXJlbmNlRXJyb3IoJ05vIFFVSUMgY29ubmVjdGlvbiBhdmFpbGFibGUuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcXVpY1RyYW5zcG9ydENoYW5uZWwuY3JlYXRlU2VuZFN0cmVhbSgpO1xuICAgIH07XG4gIH1cbn07XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAY2xhc3MgQ29uZmVyZW5jZUVycm9yXG4gKiBAY2xhc3NEZXNjIFRoZSBDb25mZXJlbmNlRXJyb3Igb2JqZWN0IHJlcHJlc2VudHMgYW4gZXJyb3IgaW4gY29uZmVyZW5jZSBtb2RlLlxuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25mZXJlbmNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7Q29uZmVyZW5jZUNsaWVudH0gZnJvbSAnLi9jbGllbnQuanMnO1xuZXhwb3J0IHtTaW9TaWduYWxpbmd9IGZyb20gJy4vc2lnbmFsaW5nLmpzJztcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBDb25mZXJlbmNlSW5mb1xuICogQGNsYXNzRGVzYyBJbmZvcm1hdGlvbiBmb3IgYSBjb25mZXJlbmNlLlxuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25mZXJlbmNlSW5mbyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGlkLCBwYXJ0aWNpcGFudHMsIHJlbW90ZVN0cmVhbXMsIG15SW5mbykge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUluZm9cbiAgICAgKiBAZGVzYyBDb25mZXJlbmNlIElELlxuICAgICAqL1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheTxPd3QuQ29uZmVyZW5jZS5QYXJ0aWNpcGFudD59IHBhcnRpY2lwYW50c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlSW5mb1xuICAgICAqIEBkZXNjIFBhcnRpY2lwYW50cyBpbiB0aGUgY29uZmVyZW5jZS5cbiAgICAgKi9cbiAgICB0aGlzLnBhcnRpY2lwYW50cyA9IHBhcnRpY2lwYW50cztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheTxPd3QuQmFzZS5SZW1vdGVTdHJlYW0+fSByZW1vdGVTdHJlYW1zXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VJbmZvXG4gICAgICogQGRlc2MgU3RyZWFtcyBwdWJsaXNoZWQgYnkgcGFydGljaXBhbnRzLiBJdCBhbHNvIGluY2x1ZGVzIHN0cmVhbXMgcHVibGlzaGVkIGJ5IGN1cnJlbnQgdXNlci5cbiAgICAgKi9cbiAgICB0aGlzLnJlbW90ZVN0cmVhbXMgPSByZW1vdGVTdHJlYW1zO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlBhcnRpY2lwYW50fSBzZWxmXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VJbmZvXG4gICAgICovXG4gICAgdGhpcy5zZWxmID0gbXlJbmZvO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgU3RyZWFtTW9kdWxlIGZyb20gJy4uL2Jhc2Uvc3RyZWFtLmpzJztcbmltcG9ydCAqIGFzIFN0cmVhbVV0aWxzTW9kdWxlIGZyb20gJy4vc3RyZWFtdXRpbHMuanMnO1xuaW1wb3J0IHtPd3RFdmVudH0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlbW90ZU1peGVkU3RyZWFtXG4gKiBAY2xhc3NEZXNjIE1peGVkIHN0cmVhbSBmcm9tIGNvbmZlcmVuY2Ugc2VydmVyLlxuICogRXZlbnRzOlxuICpcbiAqIHwgRXZlbnQgTmFtZSAgICAgICAgICAgICB8IEFyZ3VtZW50IFR5cGUgICAgfCBGaXJlZCB3aGVuICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYWN0aXZlYXVkaW9pbnB1dGNoYW5nZSB8IEV2ZW50ICAgICAgICAgICAgfCBBdWRpbyBhY3RpdmVuZXNzIG9mIGlucHV0IHN0cmVhbSAob2YgdGhlIG1peGVkIHN0cmVhbSkgaXMgY2hhbmdlZC4gfFxuICogfCBsYXlvdXRjaGFuZ2UgICAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFZpZGVvJ3MgbGF5b3V0IGhhcyBiZWVuIGNoYW5nZWQuIEl0IHVzdWFsbHkgaGFwcGVucyB3aGVuIGEgbmV3IHZpZGVvIGlzIG1peGVkIGludG8gdGhlIHRhcmdldCBtaXhlZCBzdHJlYW0gb3IgYW4gZXhpc3RpbmcgdmlkZW8gaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIG1peGVkIHN0cmVhbS4gfFxuICpcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuUmVtb3RlU3RyZWFtXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdGVNaXhlZFN0cmVhbSBleHRlbmRzIFN0cmVhbU1vZHVsZS5SZW1vdGVTdHJlYW0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihpbmZvKSB7XG4gICAgaWYgKGluZm8udHlwZSAhPT0gJ21peGVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTm90IGEgbWl4ZWQgc3RyZWFtJyk7XG4gICAgfVxuICAgIHN1cGVyKGluZm8uaWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbVNvdXJjZUluZm8oXG4gICAgICAgICdtaXhlZCcsICdtaXhlZCcpKTtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSBTdHJlYW1VdGlsc01vZHVsZS5jb252ZXJ0VG9QdWJsaWNhdGlvblNldHRpbmdzKGluZm8ubWVkaWEpO1xuXG4gICAgdGhpcy5leHRyYUNhcGFiaWxpdGllcyA9XG4gICAgICAgIFN0cmVhbVV0aWxzTW9kdWxlLmNvbnZlcnRUb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyhpbmZvLm1lZGlhKTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBBY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnRcbiAqIEBjbGFzc0Rlc2MgQ2xhc3MgQWN0aXZlQXVkaW9JbnB1dENoYW5nZUV2ZW50IHJlcHJlc2VudHMgYW4gYWN0aXZlIGF1ZGlvIGlucHV0IGNoYW5nZSBldmVudC5cbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgQWN0aXZlQXVkaW9JbnB1dENoYW5nZUV2ZW50IGV4dGVuZHMgT3d0RXZlbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpbml0KSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBhY3RpdmVBdWRpb0lucHV0U3RyZWFtSWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQWN0aXZlQXVkaW9JbnB1dENoYW5nZUV2ZW50XG4gICAgICogQGRlc2MgVGhlIElEIG9mIGlucHV0IHN0cmVhbShvZiB0aGUgbWl4ZWQgc3RyZWFtKSB3aG9zZSBhdWRpbyBpcyBhY3RpdmUuXG4gICAgICovXG4gICAgdGhpcy5hY3RpdmVBdWRpb0lucHV0U3RyZWFtSWQgPSBpbml0LmFjdGl2ZUF1ZGlvSW5wdXRTdHJlYW1JZDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBMYXlvdXRDaGFuZ2VFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBMYXlvdXRDaGFuZ2VFdmVudCByZXByZXNlbnRzIGFuIHZpZGVvIGxheW91dCBjaGFuZ2UgZXZlbnQuXG4gKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIExheW91dENoYW5nZUV2ZW50IGV4dGVuZHMgT3d0RXZlbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpbml0KSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7b2JqZWN0fSBsYXlvdXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuTGF5b3V0Q2hhbmdlRXZlbnRcbiAgICAgKiBAZGVzYyBDdXJyZW50IHZpZGVvJ3MgbGF5b3V0LiBJdCdzIGFuIGFycmF5IG9mIG1hcCB3aGljaCBtYXBzIGVhY2ggc3RyZWFtIHRvIGEgcmVnaW9uLlxuICAgICAqL1xuICAgIHRoaXMubGF5b3V0ID0gaW5pdC5sYXlvdXQ7XG4gIH1cbn1cblxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgKiBhcyBFdmVudE1vZHVsZSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBQYXJ0aWNpcGFudFxuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFRoZSBQYXJ0aWNpcGFudCBkZWZpbmVzIGEgcGFydGljaXBhbnQgaW4gYSBjb25mZXJlbmNlLlxuICogRXZlbnRzOlxuICpcbiAqIHwgRXZlbnQgTmFtZSAgICAgIHwgQXJndW1lbnQgVHlwZSAgICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBsZWZ0ICAgICAgICAgICAgfCBPd3QuQmFzZS5Pd3RFdmVudCAgfCBUaGUgcGFydGljaXBhbnQgbGVmdCB0aGUgY29uZmVyZW5jZS4gfFxuICpcbiAqIEBleHRlbmRzIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgUGFydGljaXBhbnQgZXh0ZW5kcyBFdmVudE1vZHVsZS5FdmVudERpc3BhdGNoZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihpZCwgcm9sZSwgdXNlcklkKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50XG4gICAgICogQGRlc2MgVGhlIElEIG9mIHRoZSBwYXJ0aWNpcGFudC4gSXQgdmFyaWVzIHdoZW4gYSBzaW5nbGUgdXNlciBqb2luIGRpZmZlcmVudCBjb25mZXJlbmNlcy5cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBpZCxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHJvbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuUGFydGljaXBhbnRcbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3JvbGUnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHJvbGUsXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSB1c2VySWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuUGFydGljaXBhbnRcbiAgICAgKiBAZGVzYyBUaGUgdXNlciBJRCBvZiB0aGUgcGFydGljaXBhbnQuIEl0IGNhbiBiZSBpbnRlZ3JhdGVkIGludG8gZXhpc3RpbmcgYWNjb3VudCBtYW5hZ2VtZW50IHN5c3RlbS5cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3VzZXJJZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdXNlcklkLFxuICAgIH0pO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MgKi9cbi8qIGdsb2JhbCBQcm9taXNlLCBNYXAsIFdlYlRyYW5zcG9ydCwgVWludDhBcnJheSwgVWludDMyQXJyYXksIFRleHRFbmNvZGVyICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5pbXBvcnQge1B1YmxpY2F0aW9ufSBmcm9tICcuLi9iYXNlL3B1YmxpY2F0aW9uLmpzJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuL3N1YnNjcmlwdGlvbi5qcyc7XG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnLi4vYmFzZS9iYXNlNjQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBRdWljQ29ubmVjdGlvblxuICogQGNsYXNzRGVzYyBBIGNoYW5uZWwgZm9yIGEgUVVJQyB0cmFuc3BvcnQgYmV0d2VlbiBjbGllbnQgYW5kIGNvbmZlcmVuY2VcbiAqIHNlcnZlci5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWljQ29ubmVjdGlvbiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGB0b2tlblN0cmluZ2AgaXMgYSBiYXNlNjQgc3RyaW5nIG9mIHRoZSB0b2tlbiBvYmplY3QuIEl0J3MgaW4gdGhlIHJldHVyblxuICAvLyB2YWx1ZSBvZiBgQ29uZmVyZW5jZUNsaWVudC5qb2luYC5cbiAgY29uc3RydWN0b3IodXJsLCB0b2tlblN0cmluZywgc2lnbmFsaW5nLCB3ZWJUcmFuc3BvcnRPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl90b2tlblN0cmluZyA9IHRva2VuU3RyaW5nO1xuICAgIHRoaXMuX3Rva2VuID0gSlNPTi5wYXJzZShCYXNlNjQuZGVjb2RlQmFzZTY0KHRva2VuU3RyaW5nKSk7XG4gICAgdGhpcy5fc2lnbmFsaW5nID0gc2lnbmFsaW5nO1xuICAgIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcXVpY1N0cmVhbXMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBwdWJsaWNhdGlvbiBvciBzdWJzY3JpcHRpb24gSUQuXG4gICAgdGhpcy5fcXVpY1RyYW5zcG9ydCA9IG5ldyBXZWJUcmFuc3BvcnQodXJsLCB3ZWJUcmFuc3BvcnRPcHRpb25zKTtcbiAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHN1YnNjcmlwdGlvbiBJRC5cbiAgICB0aGlzLl90cmFuc3BvcnRJZCA9IHRoaXMuX3Rva2VuLnRyYW5zcG9ydElkO1xuICAgIHRoaXMuX2luaXRSZWNlaXZlU3RyZWFtUmVhZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIG9uTWVzc2FnZVxuICAgKiBAZGVzYyBSZWNlaXZlZCBhIG1lc3NhZ2UgZnJvbSBjb25mZXJlbmNlIHBvcnRhbC4gRGVmaW5lZCBpbiBjbGllbnQtc2VydmVyXG4gICAqIHByb3RvY29sLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbiB0eXBlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSBNZXNzYWdlIHJlY2VpdmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgb25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgbWVzc2FnZSkge1xuICAgIHN3aXRjaCAobm90aWZpY2F0aW9uKSB7XG4gICAgICBjYXNlICdwcm9ncmVzcyc6XG4gICAgICAgIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3NvYWMnKSB7XG4gICAgICAgICAgdGhpcy5fc29hY0hhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3JlYWR5Jykge1xuICAgICAgICAgIHRoaXMuX3JlYWR5SGFuZGxlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgdGhpcy5fZXJyb3JIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJlYW0nOlxuICAgICAgICB0aGlzLl9vblN0cmVhbUV2ZW50KG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdVbmtub3duIG5vdGlmaWNhdGlvbiBmcm9tIE1DVS4nKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBpbml0KCkge1xuICAgIGF3YWl0IHRoaXMuX2F1dGhlbnRpY2F0ZSh0aGlzLl90b2tlblN0cmluZyk7XG4gIH1cblxuICBhc3luYyBfaW5pdFJlY2VpdmVTdHJlYW1SZWFkZXIoKSB7XG4gICAgY29uc3QgcmVjZWl2ZVN0cmVhbVJlYWRlciA9XG4gICAgICAgIHRoaXMuX3F1aWNUcmFuc3BvcnQuaW5jb21pbmdCaWRpcmVjdGlvbmFsU3RyZWFtcy5nZXRSZWFkZXIoKTtcbiAgICBMb2dnZXIuaW5mbygnUmVhZGVyOiAnICsgcmVjZWl2ZVN0cmVhbVJlYWRlcik7XG4gICAgbGV0IHJlY2VpdmluZ0RvbmUgPSBmYWxzZTtcbiAgICB3aGlsZSAoIXJlY2VpdmluZ0RvbmUpIHtcbiAgICAgIGNvbnN0IHt2YWx1ZTogcmVjZWl2ZVN0cmVhbSwgZG9uZTogcmVhZGluZ1JlY2VpdmVTdHJlYW1zRG9uZX0gPVxuICAgICAgICAgIGF3YWl0IHJlY2VpdmVTdHJlYW1SZWFkZXIucmVhZCgpO1xuICAgICAgTG9nZ2VyLmluZm8oJ05ldyBzdHJlYW0gcmVjZWl2ZWQnKTtcbiAgICAgIGlmIChyZWFkaW5nUmVjZWl2ZVN0cmVhbXNEb25lKSB7XG4gICAgICAgIHJlY2VpdmluZ0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNodW5rUmVhZGVyID0gcmVjZWl2ZVN0cmVhbS5yZWFkYWJsZS5nZXRSZWFkZXIoKTtcbiAgICAgIGNvbnN0IHt2YWx1ZTogdXVpZCwgZG9uZTogcmVhZGluZ0NodW5rc0RvbmV9ID0gYXdhaXQgY2h1bmtSZWFkZXIucmVhZCgpO1xuICAgICAgaWYgKHJlYWRpbmdDaHVua3NEb25lKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcignU3RyZWFtIGNsb3NlZCB1bmV4cGVjdGVkbHkuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh1dWlkLmxlbmd0aCAhPSAxNikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoJ1VuZXhwZWN0ZWQgbGVuZ3RoIGZvciBVVUlELicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjaHVua1JlYWRlci5yZWxlYXNlTG9jaygpO1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uSWQgPSB0aGlzLl91aW50OEFycmF5VG9VdWlkKHV1aWQpO1xuICAgICAgdGhpcy5fcXVpY1N0cmVhbXMuc2V0KHN1YnNjcmlwdGlvbklkLCByZWNlaXZlU3RyZWFtKTtcbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5oYXMoc3Vic2NyaXB0aW9uSWQpKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uSWQsIHJlY2VpdmVTdHJlYW0pO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5nZXQoc3Vic2NyaXB0aW9uSWQpLnJlc29sdmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY3JlYXRlU3Vic2NyaXB0aW9uKGlkLCByZWNlaXZlU3RyZWFtKSB7XG4gICAgLy8gVE9ETzogSW5jb21wbGV0ZSBzdWJzY3JpcHRpb24uXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbihpZCwgKCkgPT4ge1xuICAgICAgcmVjZWl2ZVN0cmVhbS5hYm9ydFJlYWRpbmcoKTtcbiAgICB9KTtcbiAgICBzdWJzY3JpcHRpb24uc3RyZWFtID0gcmVjZWl2ZVN0cmVhbTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICB9XG5cbiAgYXN5bmMgX2F1dGhlbnRpY2F0ZSh0b2tlbikge1xuICAgIGF3YWl0IHRoaXMuX3F1aWNUcmFuc3BvcnQucmVhZHk7XG4gICAgY29uc3QgcXVpY1N0cmVhbSA9IGF3YWl0IHRoaXMuX3F1aWNUcmFuc3BvcnQuY3JlYXRlQmlkaXJlY3Rpb25hbFN0cmVhbSgpO1xuICAgIGNvbnN0IGNodW5rUmVhZGVyID0gcXVpY1N0cmVhbS5yZWFkYWJsZS5nZXRSZWFkZXIoKTtcbiAgICBjb25zdCB3cml0ZXIgPSBxdWljU3RyZWFtLndyaXRhYmxlLmdldFdyaXRlcigpO1xuICAgIGF3YWl0IHdyaXRlci5yZWFkeTtcbiAgICAvLyAxMjggYml0IG9mIHplcm8gaW5kaWNhdGVzIHRoaXMgaXMgYSBzdHJlYW0gZm9yIHNpZ25hbGluZy5cbiAgICB3cml0ZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoMTYpKTtcbiAgICAvLyBTZW5kIHRva2VuIGFzIGRlc2NyaWJlZCBpblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdlYnJ0Yy10b29sa2l0L293dC1zZXJ2ZXIvYmxvYi8yMGU4YWFkMjE2Y2M0NDYwOTVmNjNjNDA5MzM5YzM0YzdlZTc3MGVlL2RvYy9kZXNpZ24vcXVpYy10cmFuc3BvcnQtcGF5bG9hZC1mb3JtYXQubWQuXG4gICAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgIGNvbnN0IGVuY29kZWRUb2tlbiA9IGVuY29kZXIuZW5jb2RlKHRva2VuKTtcbiAgICB3cml0ZXIud3JpdGUoVWludDMyQXJyYXkub2YoZW5jb2RlZFRva2VuLmxlbmd0aCkpO1xuICAgIHdyaXRlci53cml0ZShlbmNvZGVkVG9rZW4pO1xuICAgIC8vIFNlcnZlciByZXR1cm5zIHRyYW5zcG9ydCBJRCBhcyBhbiBhY2suIElnbm9yZSBpdCBoZXJlLlxuICAgIGF3YWl0IGNodW5rUmVhZGVyLnJlYWQoKTtcbiAgICBMb2dnZXIuaW5mbygnQXV0aGVudGljYXRpb24gc3VjY2Vzcy4nKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVNlbmRTdHJlYW0oKSB7XG4gICAgYXdhaXQgdGhpcy5fcXVpY1RyYW5zcG9ydC5yZWFkeTtcbiAgICBjb25zdCBxdWljU3RyZWFtID0gYXdhaXQgdGhpcy5fcXVpY1RyYW5zcG9ydC5jcmVhdGVCaWRpcmVjdGlvbmFsU3RyZWFtKCk7XG4gICAgcmV0dXJuIHF1aWNTdHJlYW07XG4gIH1cblxuICBhc3luYyBjcmVhdGVTZW5kU3RyZWFtMShzZXNzaW9uSWQpIHtcbiAgICBMb2dnZXIuaW5mbygnQ3JlYXRlIHN0cmVhbS4nKTtcbiAgICBhd2FpdCB0aGlzLl9xdWljVHJhbnNwb3J0LnJlYWR5O1xuICAgIC8vIFRPRE86IFBvdGVudGlhbCBmYWlsdXJlIGJlY2F1c2Ugb2YgcHVibGljYXRpb24gc3RyZWFtIGlzIGNyZWF0ZWQgZmFzdGVyXG4gICAgLy8gdGhhbiBzaWduYWxpbmcgc3RyZWFtKGNyZWF0ZWQgYnkgdGhlIDFzdCBjYWxsIHRvIGluaXRpYXRlUHVibGljYXRpb24pLlxuICAgIGNvbnN0IHB1YmxpY2F0aW9uSWQgPSBhd2FpdCB0aGlzLl9pbml0aWF0ZVB1YmxpY2F0aW9uKCk7XG4gICAgY29uc3QgcXVpY1N0cmVhbSA9IGF3YWl0IHRoaXMuX3F1aWNUcmFuc3BvcnQuY3JlYXRlU2VuZFN0cmVhbSgpO1xuICAgIGNvbnN0IHdyaXRlciA9IHF1aWNTdHJlYW0ud3JpdGFibGUuZ2V0V3JpdGVyKCk7XG4gICAgYXdhaXQgd3JpdGVyLnJlYWR5O1xuICAgIHdyaXRlci53cml0ZSh0aGlzLl91dWlkVG9VaW50OEFycmF5KHB1YmxpY2F0aW9uSWQpKTtcbiAgICB3cml0ZXIucmVsZWFzZUxvY2soKTtcbiAgICB0aGlzLl9xdWljU3RyZWFtcy5zZXQocHVibGljYXRpb25JZCwgcXVpY1N0cmVhbSk7XG4gICAgcmV0dXJuIHF1aWNTdHJlYW07XG4gIH1cblxuICBhc3luYyBwdWJsaXNoKHN0cmVhbSkge1xuICAgIC8vIFRPRE86IEF2b2lkIGEgc3RyZWFtIHRvIGJlIHB1Ymxpc2hlZCB0d2ljZS4gVGhlIGZpcnN0IDE2IGJpdCBkYXRhIHNlbmQgdG9cbiAgICAvLyBzZXJ2ZXIgbXVzdCBiZSBpdCdzIHB1YmxpY2F0aW9uIElELlxuICAgIC8vIFRPRE86IFBvdGVudGlhbCBmYWlsdXJlIGJlY2F1c2Ugb2YgcHVibGljYXRpb24gc3RyZWFtIGlzIGNyZWF0ZWQgZmFzdGVyXG4gICAgLy8gdGhhbiBzaWduYWxpbmcgc3RyZWFtKGNyZWF0ZWQgYnkgdGhlIDFzdCBjYWxsIHRvIGluaXRpYXRlUHVibGljYXRpb24pLlxuICAgIGNvbnN0IHB1YmxpY2F0aW9uSWQgPSBhd2FpdCB0aGlzLl9pbml0aWF0ZVB1YmxpY2F0aW9uKCk7XG4gICAgY29uc3QgcXVpY1N0cmVhbSA9IHN0cmVhbS5zdHJlYW07XG4gICAgY29uc3Qgd3JpdGVyID0gcXVpY1N0cmVhbS53cml0YWJsZS5nZXRXcml0ZXIoKTtcbiAgICBhd2FpdCB3cml0ZXIucmVhZHk7XG4gICAgd3JpdGVyLndyaXRlKHRoaXMuX3V1aWRUb1VpbnQ4QXJyYXkocHVibGljYXRpb25JZCkpO1xuICAgIHdyaXRlci5yZWxlYXNlTG9jaygpO1xuICAgIExvZ2dlci5pbmZvKCdwdWJsaXNoIGlkJyk7XG4gICAgdGhpcy5fcXVpY1N0cmVhbXMuc2V0KHB1YmxpY2F0aW9uSWQsIHF1aWNTdHJlYW0pO1xuICAgIGNvbnN0IHB1YmxpY2F0aW9uID0gbmV3IFB1YmxpY2F0aW9uKHB1YmxpY2F0aW9uSWQsICgpID0+IHtcbiAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgndW5wdWJsaXNoJywge2lkOiBwdWJsaWNhdGlvbn0pXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBMb2dnZXIud2FybmluZygnTUNVIHJldHVybnMgbmVnYXRpdmUgYWNrIGZvciB1bnB1Ymxpc2hpbmcsICcgKyBlKTtcbiAgICAgICAgICB9KTtcbiAgICB9IC8qIFRPRE86IGdldFN0YXRzLCBtdXRlLCB1bm11dGUgaXMgbm90IGltcGxlbWVudGVkICovKTtcbiAgICByZXR1cm4gcHVibGljYXRpb247XG4gIH1cblxuICBoYXNDb250ZW50U2Vzc2lvbklkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1aWNTdHJlYW1zLmhhcyhpZCk7XG4gIH1cblxuICBfdXVpZFRvVWludDhBcnJheSh1dWlkU3RyaW5nKSB7XG4gICAgaWYgKHV1aWRTdHJpbmcubGVuZ3RoICE9IDMyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvcnJlY3QgVVVJRC4nKTtcbiAgICB9XG4gICAgY29uc3QgdXVpZEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgdXVpZEFycmF5W2ldID0gcGFyc2VJbnQodXVpZFN0cmluZy5zdWJzdHJpbmcoaSAqIDIsIGkgKiAyICsgMiksIDE2KTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWRBcnJheTtcbiAgfVxuXG4gIF91aW50OEFycmF5VG9VdWlkKHV1aWRCeXRlcykge1xuICAgIGxldCBzID0gJyc7XG4gICAgZm9yIChjb25zdCBoZXggb2YgdXVpZEJ5dGVzKSB7XG4gICAgICBjb25zdCBzdHIgPSBoZXgudG9TdHJpbmcoMTYpO1xuICAgICAgcyArPSBzdHIucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICBzdWJzY3JpYmUoc3RyZWFtKSB7XG4gICAgY29uc3QgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3NpZ25hbGluZ1xuICAgICAgICAgIC5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc3Vic2NyaWJlJywge1xuICAgICAgICAgICAgbWVkaWE6IG51bGwsXG4gICAgICAgICAgICBkYXRhOiB7ZnJvbTogc3RyZWFtLmlkfSxcbiAgICAgICAgICAgIHRyYW5zcG9ydDoge3R5cGU6ICdxdWljJywgaWQ6IHRoaXMuX3RyYW5zcG9ydElkfSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcXVpY1N0cmVhbXMuaGFzKGRhdGEuaWQpKSB7XG4gICAgICAgICAgICAgIC8vIFFVSUMgc3RyZWFtIGNyZWF0ZWQgYmVmb3JlIHNpZ25hbGluZyByZXR1cm5zLlxuICAgICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLl9jcmVhdGVTdWJzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICBkYXRhLmlkLCB0aGlzLl9xdWljU3RyZWFtcy5nZXQoZGF0YS5pZCkpO1xuICAgICAgICAgICAgICByZXNvbHZlKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9xdWljU3RyZWFtcy5zZXQoZGF0YS5pZCwgbnVsbCk7XG4gICAgICAgICAgICAgIC8vIFFVSUMgc3RyZWFtIGlzIG5vdCBjcmVhdGVkIHlldCwgcmVzb2x2ZSBwcm9taXNlIGFmdGVyIGdldHRpbmdcbiAgICAgICAgICAgICAgLy8gUVVJQyBzdHJlYW0uXG4gICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzLnNldChcbiAgICAgICAgICAgICAgICAgIGRhdGEuaWQsIHtyZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwO1xuICB9XG5cbiAgX3JlYWRBbmRQcmludCgpIHtcbiAgICB0aGlzLl9xdWljU3RyZWFtc1swXS53YWl0Rm9yUmVhZGFibGUoNSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fcXVpY1N0cmVhbXNbMF0ucmVhZEJ1ZmZlcmVkQW1vdW50KTtcbiAgICAgIHRoaXMuX3F1aWNTdHJlYW1zWzBdLnJlYWRJbnRvKGRhdGEpO1xuICAgICAgTG9nZ2VyLmluZm8oJ1JlYWQgZGF0YTogJyArIGRhdGEpO1xuICAgICAgdGhpcy5fcmVhZEFuZFByaW50KCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBfaW5pdGlhdGVQdWJsaWNhdGlvbigpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdwdWJsaXNoJywge1xuICAgICAgbWVkaWE6IG51bGwsXG4gICAgICBkYXRhOiB0cnVlLFxuICAgICAgdHJhbnNwb3J0OiB7dHlwZTogJ3F1aWMnLCBpZDogdGhpcy5fdHJhbnNwb3J0SWR9LFxuICAgIH0pO1xuICAgIGlmICh0aGlzLl90cmFuc3BvcnRJZCAhPT0gZGF0YS50cmFuc3BvcnRJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmFuc3BvcnQgSUQgbm90IG1hdGNoLicpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5pZDtcbiAgfVxuXG4gIF9yZWFkeUhhbmRsZXIoKSB7XG4gICAgLy8gUmVhZHkgbWVzc2FnZSBmcm9tIHNlcnZlciBpcyB1c2VsZXNzIGZvciBRdWljU3RyZWFtIHNpbmNlIFF1aWNTdHJlYW0gaGFzXG4gICAgLy8gaXRzIG93biBzdGF0dXMuIERvIG5vdGhpbmcgaGVyZS5cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vKiBnbG9iYWwgaW8sIFByb21pc2UsIHNldFRpbWVvdXQsIGNsZWFyVGltZW91dCAqL1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQgKiBhcyBFdmVudE1vZHVsZSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7Q29uZmVyZW5jZUVycm9yfSBmcm9tICcuL2Vycm9yLmpzJztcbmltcG9ydCB7QmFzZTY0fSBmcm9tICcuLi9iYXNlL2Jhc2U2NC5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVjb25uZWN0aW9uQXR0ZW1wdHMgPSAxMDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHN0YXR1cywgZGF0YSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGlmIChzdGF0dXMgPT09ICdvaycgfHwgc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICByZXNvbHZlKGRhdGEpO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIHJlamVjdChkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICBMb2dnZXIuZXJyb3IoJ01DVSByZXR1cm5zIHVua25vd24gYWNrLicpO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFNpb1NpZ25hbGluZ1xuICogQGNsYXNzZGVzYyBTb2NrZXQuSU8gc2lnbmFsaW5nIGNoYW5uZWwgZm9yIENvbmZlcmVuY2VDbGllbnQuIEl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBkaXJlY3RseSBhY2Nlc3MgdGhpcyBjbGFzcy5cbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFNpb1NpZ25hbGluZyBleHRlbmRzIEV2ZW50TW9kdWxlLkV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc29ja2V0ID0gbnVsbDtcbiAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xuICAgIHRoaXMuX3JlY29ubmVjdFRpbWVzID0gMDtcbiAgICB0aGlzLl9yZWNvbm5lY3Rpb25UaWNrZXQgPSBudWxsO1xuICAgIHRoaXMuX3JlZnJlc2hSZWNvbm5lY3Rpb25UaWNrZXQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjb25uZWN0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBDb25uZWN0IHRvIGEgcG9ydGFsLlxuICAgKiBAbWVtYmVyb2YgT21zLkNvbmZlcmVuY2UuU2lvU2lnbmFsaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LCBFcnJvcj59IFJldHVybiBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCB0aGUgZGF0YSByZXR1cm5lZCBieSBwb3J0YWwgaWYgc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbi4gT3IgcmV0dXJuIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBPbXMuRXJyb3IgaWYgZmFpbGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdCBIb3N0IG9mIHRoZSBwb3J0YWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpc1NlY3VyZWQgSXMgc2VjdXJlIGNvbm5lY3Rpb24gb3Igbm90LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9naW5JbmZvIEluZm9ybWF0aW9uIHJlcXVpcmVkIGZvciBsb2dnaW5nIGluLlxuICAgKiBAcHJpdmF0ZS5cbiAgICovXG4gIGNvbm5lY3QoaG9zdCwgaXNTZWN1cmVkLCBsb2dpbkluZm8pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgJ3JlY29ubmVjdGlvbic6IHRydWUsXG4gICAgICAgICdyZWNvbm5lY3Rpb25BdHRlbXB0cyc6IHJlY29ubmVjdGlvbkF0dGVtcHRzLFxuICAgICAgICAnZm9yY2UgbmV3IGNvbm5lY3Rpb24nOiB0cnVlLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX3NvY2tldCA9IGlvKGhvc3QsIG9wdHMpO1xuICAgICAgWydwYXJ0aWNpcGFudCcsICd0ZXh0JywgJ3N0cmVhbScsICdwcm9ncmVzcyddLmZvckVhY2goKFxuICAgICAgICAgIG5vdGlmaWNhdGlvbikgPT4ge1xuICAgICAgICB0aGlzLl9zb2NrZXQub24obm90aWZpY2F0aW9uLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRNb2R1bGUuTWVzc2FnZUV2ZW50KCdkYXRhJywge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICBub3RpZmljYXRpb246IG5vdGlmaWNhdGlvbixcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc29ja2V0Lm9uKCdyZWNvbm5lY3RpbmcnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdFRpbWVzKys7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NvY2tldC5vbigncmVjb25uZWN0X2ZhaWxlZCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdFRpbWVzID49IHJlY29ubmVjdGlvbkF0dGVtcHRzKSB7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnZGlzY29ubmVjdCcpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9zb2NrZXQub24oJ2Nvbm5lY3RfZXJyb3InLCAoZSkgPT4ge1xuICAgICAgICByZWplY3QoYGNvbm5lY3RfZXJyb3I6JHtob3N0fWApO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zb2NrZXQub24oJ2Ryb3AnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdFRpbWVzID0gcmVjb25uZWN0aW9uQXR0ZW1wdHM7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2xlYXJSZWNvbm5lY3Rpb25UYXNrKCk7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3RUaW1lcyA+PSByZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnZGlzY29ubmVjdCcpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9zb2NrZXQuZW1pdCgnbG9naW4nLCBsb2dpbkluZm8sIChzdGF0dXMsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ29rJykge1xuICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9vblJlY29ubmVjdGlvblRpY2tldChkYXRhLnJlY29ubmVjdGlvblRpY2tldCk7XG4gICAgICAgICAgdGhpcy5fc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gcmUtbG9naW4gd2l0aCByZWNvbm5lY3Rpb24gdGlja2V0LlxuICAgICAgICAgICAgdGhpcy5fc29ja2V0LmVtaXQoJ3JlbG9naW4nLCB0aGlzLl9yZWNvbm5lY3Rpb25UaWNrZXQsIChzdGF0dXMsXG4gICAgICAgICAgICAgICAgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0VGltZXMgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX29uUmVjb25uZWN0aW9uVGlja2V0KGRhdGEpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ2Rpc2Nvbm5lY3QnKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZVJlc3BvbnNlKHN0YXR1cywgZGF0YSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBkaXNjb25uZWN0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBEaXNjb25uZWN0IGZyb20gYSBwb3J0YWwuXG4gICAqIEBtZW1iZXJvZiBPbXMuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QsIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIHRoZSBkYXRhIHJldHVybmVkIGJ5IHBvcnRhbCBpZiBzdWNjZXNzZnVsbHkgZGlzY29ubmVjdGVkLiBPciByZXR1cm4gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggYSBuZXdseSBjcmVhdGVkIE9tcy5FcnJvciBpZiBmYWlsZWQuXG4gICAqIEBwcml2YXRlLlxuICAgKi9cbiAgZGlzY29ubmVjdCgpIHtcbiAgICBpZiAoIXRoaXMuX3NvY2tldCB8fCB0aGlzLl9zb2NrZXQuZGlzY29ubmVjdGVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnUG9ydGFsIGlzIG5vdCBjb25uZWN0ZWQuJykpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fc29ja2V0LmVtaXQoJ2xvZ291dCcsIChzdGF0dXMsIGRhdGEpID0+IHtcbiAgICAgICAgLy8gTWF4aW1pemUgdGhlIHJlY29ubmVjdCB0aW1lcyB0byBkaXNhYmxlIHJlY29ubmVjdGlvbi5cbiAgICAgICAgdGhpcy5fcmVjb25uZWN0VGltZXMgPSByZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgICAgICAgdGhpcy5fc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaGFuZGxlUmVzcG9uc2Uoc3RhdHVzLCBkYXRhLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHNlbmRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFNlbmQgZGF0YSB0byBwb3J0YWwuXG4gICAqIEBtZW1iZXJvZiBPbXMuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QsIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIHRoZSBkYXRhIHJldHVybmVkIGJ5IHBvcnRhbC4gT3IgcmV0dXJuIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBPbXMuRXJyb3IgaWYgZmFpbGVkIHRvIHNlbmQgdGhlIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0TmFtZSBOYW1lIGRlZmluZWQgaW4gY2xpZW50LXNlcnZlciBwcm90b2NvbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3REYXRhIERhdGEgZm9ybWF0IGlzIGRlZmluZWQgaW4gY2xpZW50LXNlcnZlciBwcm90b2NvbC5cbiAgICogQHByaXZhdGUuXG4gICAqL1xuICBzZW5kKHJlcXVlc3ROYW1lLCByZXF1ZXN0RGF0YSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9zb2NrZXQuZW1pdChyZXF1ZXN0TmFtZSwgcmVxdWVzdERhdGEsIChzdGF0dXMsIGRhdGEpID0+IHtcbiAgICAgICAgaGFuZGxlUmVzcG9uc2Uoc3RhdHVzLCBkYXRhLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF9vblJlY29ubmVjdGlvblRpY2tldFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgUGFyc2UgcmVjb25uZWN0aW9uIHRpY2tldCBhbmQgc2NoZWR1bGUgdGlja2V0IHJlZnJlc2hpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aWNrZXRTdHJpbmcgUmVjb25uZWN0aW9uIHRpY2tldC5cbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlNpb1NpZ25hbGluZ1xuICAgKiBAcHJpdmF0ZS5cbiAgICovXG4gIF9vblJlY29ubmVjdGlvblRpY2tldCh0aWNrZXRTdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvbm5lY3Rpb25UaWNrZXQgPSB0aWNrZXRTdHJpbmc7XG4gICAgY29uc3QgdGlja2V0ID0gSlNPTi5wYXJzZShCYXNlNjQuZGVjb2RlQmFzZTY0KHRpY2tldFN0cmluZykpO1xuICAgIC8vIFJlZnJlc2ggdGlja2V0IDEgbWluIG9yIDEwIHNlY29uZHMgYmVmb3JlIGl0IGV4cGlyZXMuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBtaWxsaXNlY29uZHNJbk9uZU1pbnV0ZSA9IDYwICogMTAwMDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHNJblRlblNlY29uZHMgPSAxMCAqIDEwMDA7XG4gICAgaWYgKHRpY2tldC5ub3RBZnRlciA8PSBub3cgLSBtaWxsaXNlY29uZHNJblRlblNlY29uZHMpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdSZWNvbm5lY3Rpb24gdGlja2V0IGV4cGlyZXMgdG9vIHNvb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByZWZyZXNoQWZ0ZXIgPSB0aWNrZXQubm90QWZ0ZXIgLSBub3cgLSBtaWxsaXNlY29uZHNJbk9uZU1pbnV0ZTtcbiAgICBpZiAocmVmcmVzaEFmdGVyIDwgMCkge1xuICAgICAgcmVmcmVzaEFmdGVyID0gdGlja2V0Lm5vdEFmdGVyIC0gbm93IC0gbWlsbGlzZWNvbmRzSW5UZW5TZWNvbmRzO1xuICAgIH1cbiAgICB0aGlzLl9jbGVhclJlY29ubmVjdGlvblRhc2soKTtcbiAgICB0aGlzLl9yZWZyZXNoUmVjb25uZWN0aW9uVGlja2V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zb2NrZXQuZW1pdCgncmVmcmVzaFJlY29ubmVjdGlvblRpY2tldCcsIChzdGF0dXMsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gJ29rJykge1xuICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdGYWlsZWQgdG8gcmVmcmVzaCByZWNvbm5lY3Rpb24gdGlja2V0LicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vblJlY29ubmVjdGlvblRpY2tldChkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0sIHJlZnJlc2hBZnRlcik7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF9jbGVhclJlY29ubmVjdGlvblRhc2tcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFN0b3AgdHJ5aW5nIHRvIHJlZnJlc2ggcmVjb25uZWN0aW9uIHRpY2tldC5cbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlNpb1NpZ25hbGluZ1xuICAgKiBAcHJpdmF0ZS5cbiAgICovXG4gIF9jbGVhclJlY29ubmVjdGlvblRhc2soKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3JlZnJlc2hSZWNvbm5lY3Rpb25UaWNrZXQpO1xuICAgIHRoaXMuX3JlZnJlc2hSZWNvbm5lY3Rpb25UaWNrZXQgPSBudWxsO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8vIFRoaXMgZmlsZSBkb2Vzbid0IGhhdmUgcHVibGljIEFQSXMuXG4vKiBlc2xpbnQtZGlzYWJsZSB2YWxpZC1qc2RvYyAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIFB1YmxpY2F0aW9uTW9kdWxlIGZyb20gJy4uL2Jhc2UvcHVibGljYXRpb24uanMnO1xuaW1wb3J0ICogYXMgTWVkaWFGb3JtYXRNb2R1bGUgZnJvbSAnLi4vYmFzZS9tZWRpYWZvcm1hdC5qcyc7XG5pbXBvcnQgKiBhcyBDb2RlY01vZHVsZSBmcm9tICcuLi9iYXNlL2NvZGVjLmpzJztcbmltcG9ydCAqIGFzIFN1YnNjcmlwdGlvbk1vZHVsZSBmcm9tICcuL3N1YnNjcmlwdGlvbi5qcyc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcblxuLyoqXG4gKiBAZnVuY3Rpb24gZXh0cmFjdEJpdHJhdGVNdWx0aXBsaWVyXG4gKiBAZGVzYyBFeHRyYWN0IGJpdHJhdGUgbXVsdGlwbGllciBmcm9tIGEgc3RyaW5nIGxpa2UgXCJ4MC4yXCIuXG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdCwgRXJyb3I+fSBUaGUgZmxvYXQgbnVtYmVyIGFmdGVyIFwieFwiLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdEJpdHJhdGVNdWx0aXBsaWVyKGlucHV0KSB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnIHx8ICFpbnB1dC5zdGFydHNXaXRoKCd4JykpIHtcbiAgICBMb2dnZXIud2FybmluZygnSW52YWxpZCBiaXRyYXRlIG11bHRpcGxpZXIgaW5wdXQuJyk7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KGlucHV0LnJlcGxhY2UoL154LywgJycpKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmZ1bmN0aW9uIHNvcnROdW1iZXJzKHgsIHkpIHtcbiAgcmV0dXJuIHggLSB5O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gc29ydFJlc29sdXRpb25zKHgsIHkpIHtcbiAgaWYgKHgud2lkdGggIT09IHkud2lkdGgpIHtcbiAgICByZXR1cm4geC53aWR0aCAtIHkud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHguaGVpZ2h0IC0geS5oZWlnaHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAZnVuY3Rpb24gY29udmVydFRvUHVibGljYXRpb25TZXR0aW5nc1xuICogQGRlc2MgQ29udmVydCBtZWRpYUluZm8gcmVjZWl2ZWQgZnJvbSBzZXJ2ZXIgdG8gUHVibGljYXRpb25TZXR0aW5ncy5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9QdWJsaWNhdGlvblNldHRpbmdzKG1lZGlhSW5mbykge1xuICBjb25zdCBhdWRpbyA9IFtdO1xuICBjb25zdCB2aWRlbyA9IFtdO1xuICBsZXQgYXVkaW9Db2RlYztcbiAgbGV0IHZpZGVvQ29kZWM7XG4gIGxldCByZXNvbHV0aW9uO1xuICBsZXQgZnJhbWVyYXRlO1xuICBsZXQgYml0cmF0ZTtcbiAgbGV0IGtleUZyYW1lSW50ZXJ2YWw7XG4gIGxldCByaWQ7XG4gIGZvciAoY29uc3QgdHJhY2sgb2YgbWVkaWFJbmZvLnRyYWNrcykge1xuICAgIGlmICh0cmFjay50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICBpZiAodHJhY2suZm9ybWF0KSB7XG4gICAgICAgIGF1ZGlvQ29kZWMgPSBuZXcgQ29kZWNNb2R1bGUuQXVkaW9Db2RlY1BhcmFtZXRlcnMoXG4gICAgICAgICAgICB0cmFjay5mb3JtYXQuY29kZWMsIHRyYWNrLmZvcm1hdC5jaGFubmVsTnVtLFxuICAgICAgICAgICAgdHJhY2suZm9ybWF0LnNhbXBsZVJhdGUpO1xuICAgICAgfVxuICAgICAgY29uc3QgYXVkaW9QdWJsaWNhdGlvblNldHRpbmdzID1cbiAgICAgICAgICBuZXcgUHVibGljYXRpb25Nb2R1bGUuQXVkaW9QdWJsaWNhdGlvblNldHRpbmdzKGF1ZGlvQ29kZWMpO1xuICAgICAgYXVkaW9QdWJsaWNhdGlvblNldHRpbmdzLl90cmFja0lkID0gdHJhY2suaWQ7XG4gICAgICBhdWRpby5wdXNoKGF1ZGlvUHVibGljYXRpb25TZXR0aW5ncyk7XG4gICAgfSBlbHNlIGlmICh0cmFjay50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICBpZiAodHJhY2suZm9ybWF0KSB7XG4gICAgICAgIHZpZGVvQ29kZWMgPSBuZXcgQ29kZWNNb2R1bGUuVmlkZW9Db2RlY1BhcmFtZXRlcnMoXG4gICAgICAgICAgICB0cmFjay5mb3JtYXQuY29kZWMsIHRyYWNrLmZvcm1hdC5wcm9maWxlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFjay5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICh0cmFjay5wYXJhbWV0ZXJzLnJlc29sdXRpb24pIHtcbiAgICAgICAgICByZXNvbHV0aW9uID0gbmV3IE1lZGlhRm9ybWF0TW9kdWxlLlJlc29sdXRpb24oXG4gICAgICAgICAgICAgIHRyYWNrLnBhcmFtZXRlcnMucmVzb2x1dGlvbi53aWR0aCxcbiAgICAgICAgICAgICAgdHJhY2sucGFyYW1ldGVycy5yZXNvbHV0aW9uLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZnJhbWVyYXRlID0gdHJhY2sucGFyYW1ldGVycy5mcmFtZXJhdGU7XG4gICAgICAgIGJpdHJhdGUgPSB0cmFjay5wYXJhbWV0ZXJzLmJpdHJhdGUgKiAxMDAwO1xuICAgICAgICBrZXlGcmFtZUludGVydmFsID0gdHJhY2sucGFyYW1ldGVycy5rZXlGcmFtZUludGVydmFsO1xuICAgICAgfVxuICAgICAgaWYgKHRyYWNrLnJpZCkge1xuICAgICAgICByaWQgPSB0cmFjay5yaWQ7XG4gICAgICB9XG4gICAgICBjb25zdCB2aWRlb1B1YmxpY2F0aW9uU2V0dGluZ3MgPVxuICAgICAgICAgIG5ldyBQdWJsaWNhdGlvbk1vZHVsZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3MoXG4gICAgICAgICAgICAgIHZpZGVvQ29kZWMsIHJlc29sdXRpb24sIGZyYW1lcmF0ZSwgYml0cmF0ZSxcbiAgICAgICAgICAgICAga2V5RnJhbWVJbnRlcnZhbCwgcmlkKTtcbiAgICAgIHZpZGVvUHVibGljYXRpb25TZXR0aW5ncy5fdHJhY2tJZCA9IHRyYWNrLmlkO1xuICAgICAgdmlkZW8ucHVzaCh2aWRlb1B1YmxpY2F0aW9uU2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgUHVibGljYXRpb25Nb2R1bGUuUHVibGljYXRpb25TZXR0aW5ncyhhdWRpbywgdmlkZW8pO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvbiBjb252ZXJ0VG9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAqIEBkZXNjIENvbnZlcnQgbWVkaWFJbmZvIHJlY2VpdmVkIGZyb20gc2VydmVyIHRvIFN1YnNjcmlwdGlvbkNhcGFiaWxpdGllcy5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMobWVkaWFJbmZvKSB7XG4gIGxldCBhdWRpbztcbiAgbGV0IHZpZGVvO1xuXG4gIGZvciAoY29uc3QgdHJhY2sgb2YgbWVkaWFJbmZvLnRyYWNrcykge1xuICAgIGlmICh0cmFjay50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICBjb25zdCBhdWRpb0NvZGVjcyA9IFtdO1xuICAgICAgaWYgKHRyYWNrLm9wdGlvbmFsICYmIHRyYWNrLm9wdGlvbmFsLmZvcm1hdCkge1xuICAgICAgICBmb3IgKGNvbnN0IGF1ZGlvQ29kZWNJbmZvIG9mIHRyYWNrLm9wdGlvbmFsLmZvcm1hdCkge1xuICAgICAgICAgIGNvbnN0IGF1ZGlvQ29kZWMgPSBuZXcgQ29kZWNNb2R1bGUuQXVkaW9Db2RlY1BhcmFtZXRlcnMoXG4gICAgICAgICAgICAgIGF1ZGlvQ29kZWNJbmZvLmNvZGVjLCBhdWRpb0NvZGVjSW5mby5jaGFubmVsTnVtLFxuICAgICAgICAgICAgICBhdWRpb0NvZGVjSW5mby5zYW1wbGVSYXRlKTtcbiAgICAgICAgICBhdWRpb0NvZGVjcy5wdXNoKGF1ZGlvQ29kZWMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdWRpb0NvZGVjcy5zb3J0KCk7XG4gICAgICBhdWRpbyA9IG5ldyBTdWJzY3JpcHRpb25Nb2R1bGUuQXVkaW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMoYXVkaW9Db2RlY3MpO1xuICAgIH0gZWxzZSBpZiAodHJhY2sudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgY29uc3QgdmlkZW9Db2RlY3MgPSBbXTtcbiAgICAgIGlmICh0cmFjay5vcHRpb25hbCAmJiB0cmFjay5vcHRpb25hbC5mb3JtYXQpIHtcbiAgICAgICAgZm9yIChjb25zdCB2aWRlb0NvZGVjSW5mbyBvZiB0cmFjay5vcHRpb25hbC5mb3JtYXQpIHtcbiAgICAgICAgICBjb25zdCB2aWRlb0NvZGVjID0gbmV3IENvZGVjTW9kdWxlLlZpZGVvQ29kZWNQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgICB2aWRlb0NvZGVjSW5mby5jb2RlYywgdmlkZW9Db2RlY0luZm8ucHJvZmlsZSk7XG4gICAgICAgICAgdmlkZW9Db2RlY3MucHVzaCh2aWRlb0NvZGVjKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmlkZW9Db2RlY3Muc29ydCgpO1xuICAgICAgaWYgKCF0cmFjay5vcHRpb25hbD8ucGFyYW1ldGVycykge1xuICAgICAgICB2aWRlbyA9IG5ldyBTdWJzY3JpcHRpb25Nb2R1bGUuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMoXG4gICAgICAgICAgICB2aWRlb0NvZGVjcywgW10sIFtdLCBbXSwgW10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVzb2x1dGlvbnMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgdHJhY2sub3B0aW9uYWwucGFyYW1ldGVycy5yZXNvbHV0aW9uLFxuICAgICAgICAgICAgKHIpID0+IG5ldyBNZWRpYUZvcm1hdE1vZHVsZS5SZXNvbHV0aW9uKHIud2lkdGgsIHIuaGVpZ2h0KSk7XG4gICAgICAgIHJlc29sdXRpb25zLnNvcnQoc29ydFJlc29sdXRpb25zKTtcbiAgICAgICAgY29uc3QgYml0cmF0ZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgdHJhY2sub3B0aW9uYWwucGFyYW1ldGVycy5iaXRyYXRlLFxuICAgICAgICAgICAgKGJpdHJhdGUpID0+IGV4dHJhY3RCaXRyYXRlTXVsdGlwbGllcihiaXRyYXRlKSk7XG4gICAgICAgIGJpdHJhdGVzLnB1c2goMS4wKTtcbiAgICAgICAgYml0cmF0ZXMuc29ydChzb3J0TnVtYmVycyk7XG4gICAgICAgIGNvbnN0IGZyYW1lUmF0ZXMgPVxuICAgICAgICAgICAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFjay5vcHRpb25hbC5wYXJhbWV0ZXJzLmZyYW1lcmF0ZSkpO1xuICAgICAgICBmcmFtZVJhdGVzLnNvcnQoc29ydE51bWJlcnMpO1xuICAgICAgICBjb25zdCBrZXlGcmFtZUludGVydmFscyA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0cmFjay5vcHRpb25hbC5wYXJhbWV0ZXJzLmtleUZyYW1lSW50ZXJ2YWwpKTtcbiAgICAgICAga2V5RnJhbWVJbnRlcnZhbHMuc29ydChzb3J0TnVtYmVycyk7XG4gICAgICAgIHZpZGVvID0gbmV3IFN1YnNjcmlwdGlvbk1vZHVsZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyhcbiAgICAgICAgICAgIHZpZGVvQ29kZWNzLCByZXNvbHV0aW9ucywgZnJhbWVSYXRlcywgYml0cmF0ZXMsIGtleUZyYW1lSW50ZXJ2YWxzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb25Nb2R1bGUuU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzKGF1ZGlvLCB2aWRlbyk7XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBBdWRpb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFJlcHJlc2VudHMgdGhlIGF1ZGlvIGNhcGFiaWxpdHkgZm9yIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoY29kZWNzKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPE93dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzPn0gY29kZWNzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkF1ZGlvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5jb2RlY3MgPSBjb2RlY3M7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSB2aWRlbyBjYXBhYmlsaXR5IGZvciBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjcywgcmVzb2x1dGlvbnMsIGZyYW1lUmF0ZXMsIGJpdHJhdGVNdWx0aXBsaWVycyxcbiAgICAgIGtleUZyYW1lSW50ZXJ2YWxzKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPE93dC5CYXNlLlZpZGVvQ29kZWNQYXJhbWV0ZXJzPn0gY29kZWNzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5jb2RlY3MgPSBjb2RlY3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPE93dC5CYXNlLlJlc29sdXRpb24+fSByZXNvbHV0aW9uc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbnMgPSByZXNvbHV0aW9ucztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48bnVtYmVyPn0gZnJhbWVSYXRlc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMuZnJhbWVSYXRlcyA9IGZyYW1lUmF0ZXM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPG51bWJlcj59IGJpdHJhdGVNdWx0aXBsaWVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMuYml0cmF0ZU11bHRpcGxpZXJzID0gYml0cmF0ZU11bHRpcGxpZXJzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FycmF5LjxudW1iZXI+fSBrZXlGcmFtZUludGVydmFsc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMua2V5RnJhbWVJbnRlcnZhbHMgPSBrZXlGcmFtZUludGVydmFscztcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBTdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSBjYXBhYmlsaXR5IGZvciBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpbywgdmlkZW8pIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkNvbmZlcmVuY2UuQXVkaW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXN9IGF1ZGlvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMuYXVkaW8gPSBhdWRpbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXN9IHZpZGVvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMudmlkZW8gPSB2aWRlbztcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBBdWRpb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgUmVwcmVzZW50cyB0aGUgYXVkaW8gY29uc3RyYWludHMgZm9yIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvU3Vic2NyaXB0aW9uQ29uc3RyYWludHMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlY3MpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/QXJyYXkuPE93dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzPn0gY29kZWNzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkF1ZGlvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBDb2RlY3MgYWNjZXB0ZWQuIElmIG5vbmUgb2YgYGNvZGVjc2Agc3VwcG9ydGVkIGJ5IGJvdGggc2lkZXMsIGNvbm5lY3Rpb24gZmFpbHMuIExlYXZlIGl0IHVuZGVmaW5lZCB3aWxsIHVzZSBhbGwgcG9zc2libGUgY29kZWNzLlxuICAgICAqL1xuICAgIHRoaXMuY29kZWNzID0gY29kZWNzO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSB2aWRlbyBjb25zdHJhaW50cyBmb3Igc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50cyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjcywgcmVzb2x1dGlvbiwgZnJhbWVSYXRlLCBiaXRyYXRlTXVsdGlwbGllcixcbiAgICAgIGtleUZyYW1lSW50ZXJ2YWwsIHJpZCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9BcnJheS48T3d0LkJhc2UuVmlkZW9Db2RlY1BhcmFtZXRlcnM+fSBjb2RlY3NcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIENvZGVjcyBhY2NlcHRlZC4gSWYgbm9uZSBvZiBgY29kZWNzYCBzdXBwb3J0ZWQgYnkgYm90aCBzaWRlcywgY29ubmVjdGlvbiBmYWlscy4gTGVhdmUgaXQgdW5kZWZpbmVkIHdpbGwgdXNlIGFsbCBwb3NzaWJsZSBjb2RlY3MuXG4gICAgICovXG4gICAgdGhpcy5jb2RlY3MgPSBjb2RlY3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLlJlc29sdXRpb259IHJlc29sdXRpb25cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIE9ubHkgcmVzb2x1dGlvbnMgbGlzdGVkIGluIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IHJlc29sdXRpb247XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gZnJhbWVSYXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBPbmx5IGZyYW1lUmF0ZXMgbGlzdGVkIGluIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMuZnJhbWVSYXRlID0gZnJhbWVSYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGJpdHJhdGVNdWx0aXBsaWVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBPbmx5IGJpdHJhdGVNdWx0aXBsaWVycyBsaXN0ZWQgaW4gT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5iaXRyYXRlTXVsdGlwbGllciA9IGJpdHJhdGVNdWx0aXBsaWVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGtleUZyYW1lSW50ZXJ2YWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIE9ubHkga2V5RnJhbWVJbnRlcnZhbHMgbGlzdGVkIGluIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMua2V5RnJhbWVJbnRlcnZhbCA9IGtleUZyYW1lSW50ZXJ2YWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBSZXN0cmljdGlvbiBpZGVudGlmaWVyIHRvIGlkZW50aWZ5IHRoZSBSVFAgU3RyZWFtcyB3aXRoaW4gYW4gUlRQIHNlc3Npb24uIFdoZW4gcmlkIGlzIHNwZWNpZmllZCwgb3RoZXIgY29uc3RyYWludHMgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqL1xuICAgIHRoaXMucmlkID0gcmlkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFN1YnNjcmliZU9wdGlvbnNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBTdWJzY3JpYmVPcHRpb25zIGRlZmluZXMgb3B0aW9ucyBmb3Igc3Vic2NyaWJpbmcgYSBPd3QuQmFzZS5SZW1vdGVTdHJlYW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVPcHRpb25zIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoYXVkaW8sIHZpZGVvLCB0cmFuc3BvcnQpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkNvbmZlcmVuY2UuQXVkaW9TdWJzY3JpcHRpb25Db25zdHJhaW50c30gYXVkaW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaWJlT3B0aW9uc1xuICAgICAqL1xuICAgIHRoaXMuYXVkaW8gPSBhdWRpbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c30gdmlkZW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaWJlT3B0aW9uc1xuICAgICAqL1xuICAgIHRoaXMudmlkZW8gPSB2aWRlbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuVHJhbnNwb3J0Q29uc3RyYWludHN9IHRyYW5zcG9ydFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpYmVPcHRpb25zXG4gICAgICovXG4gICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIGRlZmluZXMgb3B0aW9ucyBmb3IgdXBkYXRpbmcgYSBzdWJzY3JpcHRpb24ncyB2aWRlbyBwYXJ0LlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLlJlc29sdXRpb259IHJlc29sdXRpb25cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gICAgICogQGRlc2MgT25seSByZXNvbHV0aW9ucyBsaXN0ZWQgaW4gVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9uID0gdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGZyYW1lUmF0ZXNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gICAgICogQGRlc2MgT25seSBmcmFtZVJhdGVzIGxpc3RlZCBpbiBWaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyBhcmUgYWxsb3dlZC5cbiAgICAgKi9cbiAgICB0aGlzLmZyYW1lUmF0ZSA9IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBiaXRyYXRlTXVsdGlwbGllcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gICAgICogQGRlc2MgT25seSBiaXRyYXRlTXVsdGlwbGllcnMgbGlzdGVkIGluIFZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMuYml0cmF0ZU11bHRpcGxpZXJzID0gdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGtleUZyYW1lSW50ZXJ2YWxzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9uc1xuICAgICAqIEBkZXNjIE9ubHkga2V5RnJhbWVJbnRlcnZhbHMgbGlzdGVkIGluIFZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMua2V5RnJhbWVJbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBTdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9ucyBkZWZpbmVzIG9wdGlvbnMgZm9yIHVwZGF0aW5nIGEgc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9ucyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9WaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnN9IHZpZGVvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAgICAgKi9cbiAgICB0aGlzLnZpZGVvID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvblxuICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFN1YnNjcmlwdGlvbiBpcyBhIHJlY2VpdmVyIGZvciByZWNlaXZpbmcgYSBzdHJlYW0uXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgfCBBcmd1bWVudCBUeXBlICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgZW5kZWQgICAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFN1YnNjcmlwdGlvbiBpcyBlbmRlZC4gfFxuICogfCBlcnJvciAgICAgICAgICAgfCBFcnJvckV2ZW50ICAgICAgIHwgQW4gZXJyb3Igb2NjdXJyZWQgb24gdGhlIHN1YnNjcmlwdGlvbi4gfFxuICogfCBtdXRlICAgICAgICAgICAgfCBNdXRlRXZlbnQgICAgICAgIHwgUHVibGljYXRpb24gaXMgbXV0ZWQuIFJlbW90ZSBzaWRlIHN0b3BwZWQgc2VuZGluZyBhdWRpbyBhbmQvb3IgdmlkZW8gZGF0YS4gfFxuICogfCB1bm11dGUgICAgICAgICAgfCBNdXRlRXZlbnQgICAgICAgIHwgUHVibGljYXRpb24gaXMgdW5tdXRlZC4gUmVtb3RlIHNpZGUgY29udGludWVkIHNlbmRpbmcgYXVkaW8gYW5kL29yIHZpZGVvIGRhdGEuIHxcbiAqXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvbiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgaWQsIHN0cmVhbSwgdHJhbnNwb3J0LCBzdG9wLCBnZXRTdGF0cywgbXV0ZSwgdW5tdXRlLCBhcHBseU9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghaWQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lEIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBpZCxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtNZWRpYVN0cmVhbSB8IEJpZGlyZWN0aW9uYWxTdHJlYW19IHN0cmVhbVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3N0cmVhbScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAvLyBUT0RPOiBJdCBzaG91bGQgYmUgYSByZWFkb25seSBwcm9wZXJ0eSwgYnV0IGN1cnJlbnQgaW1wbGVtZW50YXRpb25cbiAgICAgIC8vIGNyZWF0ZXMgU3Vic2NyaXB0aW9uIGFmdGVyIHJlY2VpdmluZyAncmVhZHknIGZyb20gc2VydmVyLiBBdCB0aGlzIHRpbWUsXG4gICAgICAvLyBNZWRpYVN0cmVhbSBtYXkgbm90IGJlIGF2YWlsYWJsZS5cbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHN0cmVhbSxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5UcmFuc3BvcnRTZXR0aW5nc30gdHJhbnNwb3J0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQGRlc2MgVHJhbnNwb3J0IHNldHRpbmdzIGZvciB0aGUgc3Vic2NyaXB0aW9uLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5TdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3RyYW5zcG9ydCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdHJhbnNwb3J0LFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBzdG9wXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgU3RvcCBjZXJ0YWluIHN1YnNjcmlwdGlvbi4gT25jZSBhIHN1YnNjcmlwdGlvbiBpcyBzdG9wcGVkLCBpdCBjYW5ub3QgYmUgcmVjb3ZlcmVkLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuc3RvcCA9IHN0b3A7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGdldFN0YXRzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgR2V0IHN0YXRzIG9mIHVuZGVybHlpbmcgUGVlckNvbm5lY3Rpb24uXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJUQ1N0YXRzUmVwb3J0LCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy5nZXRTdGF0cyA9IGdldFN0YXRzO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBtdXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgU3RvcCByZWV2aW5nIGRhdGEgZnJvbSByZW1vdGUgZW5kcG9pbnQuXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7T3d0LkJhc2UuVHJhY2tLaW5kIH0ga2luZCBLaW5kIG9mIHRyYWNrcyB0byBiZSBtdXRlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQsIEVycm9yPn1cbiAgICAgKi9cbiAgICB0aGlzLm11dGUgPSBtdXRlO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiB1bm11dGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBDb250aW51ZSByZWV2aW5nIGRhdGEgZnJvbSByZW1vdGUgZW5kcG9pbnQuXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7T3d0LkJhc2UuVHJhY2tLaW5kIH0ga2luZCBLaW5kIG9mIHRyYWNrcyB0byBiZSB1bm11dGVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZCwgRXJyb3I+fVxuICAgICAqL1xuICAgIHRoaXMudW5tdXRlID0gdW5tdXRlO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBhcHBseU9wdGlvbnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBVcGRhdGUgc3Vic2NyaXB0aW9uIHdpdGggZ2l2ZW4gb3B0aW9ucy5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIH0gb3B0aW9ucyBTdWJzY3JpcHRpb24gdXBkYXRlIG9wdGlvbnMuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5kZWZpbmVkLCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy5hcHBseU9wdGlvbnMgPSBhcHBseU9wdGlvbnM7XG5cbiAgICAvLyBUcmFjayBpcyBub3QgZGVmaW5lZCBpbiBzZXJ2ZXIgcHJvdG9jb2wuIFNvIHRoZXNlIElEcyBhcmUgZXF1YWwgdG8gdGhlaXJcbiAgICAvLyBzdHJlYW0ncyBJRCBhdCB0aGlzIHRpbWUuXG4gICAgdGhpcy5fYXVkaW9UcmFja0lkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3ZpZGVvVHJhY2tJZCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIGJhc2UgZnJvbSAnLi9iYXNlL2V4cG9ydC5qcyc7XG5pbXBvcnQgKiBhcyBwMnAgZnJvbSAnLi9wMnAvZXhwb3J0LmpzJztcbmltcG9ydCAqIGFzIGNvbmZlcmVuY2UgZnJvbSAnLi9jb25mZXJlbmNlL2V4cG9ydC5qcyc7XG5cbi8qKlxuICogQmFzZSBvYmplY3RzIGZvciBib3RoIFAyUCBhbmQgY29uZmVyZW5jZS5cbiAqIEBuYW1lc3BhY2UgT3d0LkJhc2VcbiAqL1xuZXhwb3J0IGNvbnN0IEJhc2UgPSBiYXNlO1xuXG4vKipcbiAqIFAyUCBXZWJSVEMgY29ubmVjdGlvbnMuXG4gKiBAbmFtZXNwYWNlIE93dC5QMlBcbiAqL1xuZXhwb3J0IGNvbnN0IFAyUCA9IHAycDtcblxuLyoqXG4gKiBXZWJSVEMgY29ubmVjdGlvbnMgd2l0aCBjb25mZXJlbmNlIHNlcnZlci5cbiAqIEBuYW1lc3BhY2UgT3d0LkNvbmZlcmVuY2VcbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZlcmVuY2UgPSBjb25mZXJlbmNlO1xuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjb25zdCBlcnJvcnMgPSB7XG4gIC8vIDIxMDAtMjk5OSBmb3IgUDJQIGVycm9yc1xuICAvLyAyMTAwLTIxOTkgZm9yIGNvbm5lY3Rpb24gZXJyb3JzXG4gIC8vIDIxMDAtMjEwOSBmb3Igc2VydmVyIGVycm9yc1xuICBQMlBfQ09OTl9TRVJWRVJfVU5LTk9XTjoge1xuICAgIGNvZGU6IDIxMDAsXG4gICAgbWVzc2FnZTogJ1NlcnZlciB1bmtub3duIGVycm9yLicsXG4gIH0sXG4gIFAyUF9DT05OX1NFUlZFUl9VTkFWQUlMQUJMRToge1xuICAgIGNvZGU6IDIxMDEsXG4gICAgbWVzc2FnZTogJ1NlcnZlciBpcyB1bmF2YWxpYWJsZS4nLFxuICB9LFxuICBQMlBfQ09OTl9TRVJWRVJfQlVTWToge1xuICAgIGNvZGU6IDIxMDIsXG4gICAgbWVzc2FnZTogJ1NlcnZlciBpcyB0b28gYnVzeS4nLFxuICB9LFxuICBQMlBfQ09OTl9TRVJWRVJfTk9UX1NVUFBPUlRFRDoge1xuICAgIGNvZGU6IDIxMDMsXG4gICAgbWVzc2FnZTogJ01ldGhvZCBoYXMgbm90IGJlZW4gc3VwcG9ydGVkIGJ5IHNlcnZlci4nLFxuICB9LFxuICAvLyAyMTEwLTIxMTkgZm9yIGNsaWVudCBlcnJvcnNcbiAgUDJQX0NPTk5fQ0xJRU5UX1VOS05PV046IHtcbiAgICBjb2RlOiAyMTEwLFxuICAgIG1lc3NhZ2U6ICdDbGllbnQgdW5rbm93biBlcnJvci4nLFxuICB9LFxuICBQMlBfQ09OTl9DTElFTlRfTk9UX0lOSVRJQUxJWkVEOiB7XG4gICAgY29kZTogMjExMSxcbiAgICBtZXNzYWdlOiAnQ29ubmVjdGlvbiBpcyBub3QgaW5pdGlhbGl6ZWQuJyxcbiAgfSxcbiAgLy8gMjEyMC0yMTI5IGZvciBhdXRoZW50aWNhdGlvbiBlcnJvcnNcbiAgUDJQX0NPTk5fQVVUSF9VTktOT1dOOiB7XG4gICAgY29kZTogMjEyMCxcbiAgICBtZXNzYWdlOiAnQXV0aGVudGljYXRpb24gdW5rbm93biBlcnJvci4nLFxuICB9LFxuICBQMlBfQ09OTl9BVVRIX0ZBSUxFRDoge1xuICAgIGNvZGU6IDIxMjEsXG4gICAgbWVzc2FnZTogJ1dyb25nIHVzZXJuYW1lIG9yIHRva2VuLicsXG4gIH0sXG4gIC8vIDIyMDAtMjI5OSBmb3IgbWVzc2FnZSB0cmFuc3BvcnQgZXJyb3JzXG4gIFAyUF9NRVNTQUdJTkdfVEFSR0VUX1VOUkVBQ0hBQkxFOiB7XG4gICAgY29kZTogMjIwMSxcbiAgICBtZXNzYWdlOiAnUmVtb3RlIHVzZXIgY2Fubm90IGJlIHJlYWNoZWQuJyxcbiAgfSxcbiAgUDJQX0NMSUVOVF9ERU5JRUQ6IHtcbiAgICBjb2RlOiAyMjAyLFxuICAgIG1lc3NhZ2U6ICdVc2VyIGlzIGRlbmllZC4nLFxuICB9LFxuICAvLyAyMzAxLTIzOTkgZm9yIGNoYXQgcm9vbSBlcnJvcnNcbiAgLy8gMjQwMS0yNDk5IGZvciBjbGllbnQgZXJyb3JzXG4gIFAyUF9DTElFTlRfVU5LTk9XTjoge1xuICAgIGNvZGU6IDI0MDAsXG4gICAgbWVzc2FnZTogJ1Vua25vd24gZXJyb3JzLicsXG4gIH0sXG4gIFAyUF9DTElFTlRfVU5TVVBQT1JURURfTUVUSE9EOiB7XG4gICAgY29kZTogMjQwMSxcbiAgICBtZXNzYWdlOiAnVGhpcyBtZXRob2QgaXMgdW5zdXBwb3J0ZWQgaW4gY3VycmVudCBicm93c2VyLicsXG4gIH0sXG4gIFAyUF9DTElFTlRfSUxMRUdBTF9BUkdVTUVOVDoge1xuICAgIGNvZGU6IDI0MDIsXG4gICAgbWVzc2FnZTogJ0lsbGVnYWwgYXJndW1lbnQuJyxcbiAgfSxcbiAgUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFOiB7XG4gICAgY29kZTogMjQwMyxcbiAgICBtZXNzYWdlOiAnSW52YWxpZCBwZWVyIHN0YXRlLicsXG4gIH0sXG4gIFAyUF9DTElFTlRfTk9UX0FMTE9XRUQ6IHtcbiAgICBjb2RlOiAyNDA0LFxuICAgIG1lc3NhZ2U6ICdSZW1vdGUgdXNlciBpcyBub3QgYWxsb3dlZC4nLFxuICB9LFxuICAvLyAyNTAxLTI1OTkgZm9yIFdlYlJUQyBlcnJvcy5cbiAgUDJQX1dFQlJUQ19VTktOT1dOOiB7XG4gICAgY29kZTogMjUwMCxcbiAgICBtZXNzYWdlOiAnV2ViUlRDIGVycm9yLicsXG4gIH0sXG4gIFAyUF9XRUJSVENfU0RQOiB7XG4gICAgY29kZTogMjUwMixcbiAgICBtZXNzYWdlOiAnU0RQIGVycm9yLicsXG4gIH0sXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvbiBnZXRFcnJvckJ5Q29kZVxuICogQGRlc2MgR2V0IGVycm9yIG9iamVjdCBieSBlcnJvciBjb2RlLlxuICogQHBhcmFtIHtzdHJpbmd9IGVycm9yQ29kZSBFcnJvciBjb2RlLlxuICogQHJldHVybiB7T3d0LlAyUC5FcnJvcn0gRXJyb3Igb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JCeUNvZGUoZXJyb3JDb2RlKSB7XG4gIGNvbnN0IGNvZGVFcnJvck1hcCA9IHtcbiAgICAyMTAwOiBlcnJvcnMuUDJQX0NPTk5fU0VSVkVSX1VOS05PV04sXG4gICAgMjEwMTogZXJyb3JzLlAyUF9DT05OX1NFUlZFUl9VTkFWQUlMQUJMRSxcbiAgICAyMTAyOiBlcnJvcnMuUDJQX0NPTk5fU0VSVkVSX0JVU1ksXG4gICAgMjEwMzogZXJyb3JzLlAyUF9DT05OX1NFUlZFUl9OT1RfU1VQUE9SVEVELFxuICAgIDIxMTA6IGVycm9ycy5QMlBfQ09OTl9DTElFTlRfVU5LTk9XTixcbiAgICAyMTExOiBlcnJvcnMuUDJQX0NPTk5fQ0xJRU5UX05PVF9JTklUSUFMSVpFRCxcbiAgICAyMTIwOiBlcnJvcnMuUDJQX0NPTk5fQVVUSF9VTktOT1dOLFxuICAgIDIxMjE6IGVycm9ycy5QMlBfQ09OTl9BVVRIX0ZBSUxFRCxcbiAgICAyMjAxOiBlcnJvcnMuUDJQX01FU1NBR0lOR19UQVJHRVRfVU5SRUFDSEFCTEUsXG4gICAgMjQwMDogZXJyb3JzLlAyUF9DTElFTlRfVU5LTk9XTixcbiAgICAyNDAxOiBlcnJvcnMuUDJQX0NMSUVOVF9VTlNVUFBPUlRFRF9NRVRIT0QsXG4gICAgMjQwMjogZXJyb3JzLlAyUF9DTElFTlRfSUxMRUdBTF9BUkdVTUVOVCxcbiAgICAyNDAzOiBlcnJvcnMuUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFLFxuICAgIDI0MDQ6IGVycm9ycy5QMlBfQ0xJRU5UX05PVF9BTExPV0VELFxuICAgIDI1MDA6IGVycm9ycy5QMlBfV0VCUlRDX1VOS05PV04sXG4gICAgMjUwMTogZXJyb3JzLlAyUF9XRUJSVENfU0RQLFxuICB9O1xuICByZXR1cm4gY29kZUVycm9yTWFwW2Vycm9yQ29kZV07XG59XG5cbi8qKlxuICogQGNsYXNzIFAyUEVycm9yXG4gKiBAY2xhc3NEZXNjIFRoZSBQMlBFcnJvciBvYmplY3QgcmVwcmVzZW50cyBhbiBlcnJvciBpbiBQMlAgbW9kZS5cbiAqIEBtZW1iZXJPZiBPd3QuUDJQXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBQMlBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoZXJyb3IsIG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICBpZiAodHlwZW9mIGVycm9yID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5jb2RlID0gZXJyb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29kZSA9IGVycm9yLmNvZGU7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHtkZWZhdWx0IGFzIFAyUENsaWVudH0gZnJvbSAnLi9wMnBjbGllbnQuanMnO1xuZXhwb3J0IHtQMlBFcnJvcn0gZnJvbSAnLi9lcnJvci5qcyc7XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBNYXAsIFByb21pc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlciwgT3d0RXZlbnR9IGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuaW1wb3J0ICogYXMgRXJyb3JNb2R1bGUgZnJvbSAnLi9lcnJvci5qcyc7XG5pbXBvcnQgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsIGZyb20gJy4vcGVlcmNvbm5lY3Rpb24tY2hhbm5lbC5qcyc7XG5cbmNvbnN0IENvbm5lY3Rpb25TdGF0ZSA9IHtcbiAgUkVBRFk6IDEsXG4gIENPTk5FQ1RJTkc6IDIsXG4gIENPTk5FQ1RFRDogMyxcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vKipcbiAqIEBjbGFzcyBQMlBDbGllbnRDb25maWd1cmF0aW9uXG4gKiBAY2xhc3NEZXNjIENvbmZpZ3VyYXRpb24gZm9yIFAyUENsaWVudC5cbiAqIEBtZW1iZXJPZiBPd3QuUDJQXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFAyUENsaWVudENvbmZpZ3VyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgLyoqXG4gICAqIEBtZW1iZXIgez9BcnJheTxPd3QuQmFzZS5BdWRpb0VuY29kaW5nUGFyYW1ldGVycz59IGF1ZGlvRW5jb2RpbmdcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIEVuY29kaW5nIHBhcmFtZXRlcnMgZm9yIHB1Ymxpc2hpbmcgYXVkaW8gdHJhY2tzLlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRDb25maWd1cmF0aW9uXG4gICAqL1xuICB0aGlzLmF1ZGlvRW5jb2RpbmcgPSB1bmRlZmluZWQ7XG4gIC8qKlxuICAgKiBAbWVtYmVyIHs/QXJyYXk8T3d0LkJhc2UuVmlkZW9FbmNvZGluZ1BhcmFtZXRlcnM+fSB2aWRlb0VuY29kaW5nXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBFbmNvZGluZyBwYXJhbWV0ZXJzIGZvciBwdWJsaXNoaW5nIHZpZGVvIHRyYWNrcy5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50Q29uZmlndXJhdGlvblxuICAgKi9cbiAgdGhpcy52aWRlb0VuY29kaW5nID0gdW5kZWZpbmVkO1xuICAvKipcbiAgICogQG1lbWJlciB7P1JUQ0NvbmZpZ3VyYXRpb259IHJ0Y0NvbmZpZ3VyYXRpb25cbiAgICogQGluc3RhbmNlXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudENvbmZpZ3VyYXRpb25cbiAgICogQGRlc2MgSXQgd2lsbCBiZSB1c2VkIGZvciBjcmVhdGluZyBQZWVyQ29ubmVjdGlvbi5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL3dlYnJ0Yy8jcnRjY29uZmlndXJhdGlvbi1kaWN0aW9uYXJ5fFJUQ0NvbmZpZ3VyYXRpb24gRGljdGlvbmFyeSBvZiBXZWJSVEMgMS4wfS5cbiAgICogQGV4YW1wbGVcbiAgICogLy8gRm9sbG93aW5nIG9iamVjdCBjYW4gYmUgc2V0IHRvIHAycENsaWVudENvbmZpZ3VyYXRpb24ucnRjQ29uZmlndXJhdGlvbi5cbiAgICoge1xuICAgKiAgIGljZVNlcnZlcnM6IFt7XG4gICAqICAgICAgdXJsczogXCJzdHVuOmV4YW1wbGUuY29tOjM0NzhcIlxuICAgKiAgIH0sIHtcbiAgICogICAgIHVybHM6IFtcbiAgICogICAgICAgXCJ0dXJuOmV4YW1wbGUuY29tOjM0Nzg/dHJhbnNwb3J0PXVkcFwiLFxuICAgKiAgICAgICBcInR1cm46ZXhhbXBsZS5jb206MzQ3OD90cmFuc3BvcnQ9dGNwXCJcbiAgICogICAgIF0sXG4gICAqICAgICAgY3JlZGVudGlhbDogXCJwYXNzd29yZFwiLFxuICAgKiAgICAgIHVzZXJuYW1lOiBcInVzZXJuYW1lXCJcbiAgICogICB9XG4gICAqIH1cbiAgICovXG4gIHRoaXMucnRjQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbn07XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGNsYXNzIFAyUENsaWVudFxuICogQGNsYXNzRGVzYyBUaGUgUDJQQ2xpZW50IGhhbmRsZXMgUGVlckNvbm5lY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IGNsaWVudHMuXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgICAgICAgfCBBcmd1bWVudCBUeXBlICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgc3RyZWFtYWRkZWQgICAgICAgICAgIHwgU3RyZWFtRXZlbnQgICAgICB8IEEgbmV3IHN0cmVhbSBpcyBzZW50IGZyb20gcmVtb3RlIGVuZHBvaW50LiB8XG4gKiB8IG1lc3NhZ2VyZWNlaXZlZCAgICAgICB8IE1lc3NhZ2VFdmVudCAgICAgfCBBIG5ldyBtZXNzYWdlIGlzIHJlY2VpdmVkLiB8XG4gKiB8IHNlcnZlcmRpc2Nvbm5lY3RlZCAgICB8IE93dEV2ZW50ICAgICAgICAgfCBEaXNjb25uZWN0ZWQgZnJvbSBzaWduYWxpbmcgc2VydmVyLiB8XG4gKlxuICogQG1lbWJlcm9mIE93dC5QMlBcbiAqIEBleHRlbmRzIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gez9Pd3QuUDJQLlAyUENsaWVudENvbmZpZ3VyYXRpb24gfSBjb25maWd1cmF0aW9uIENvbmZpZ3VyYXRpb24gZm9yIE93dC5QMlAuUDJQQ2xpZW50LlxuICogQHBhcmFtIHtPYmplY3R9IHNpZ25hbGluZ0NoYW5uZWwgQSBjaGFubmVsIGZvciBzZW5kaW5nIGFuZCByZWNlaXZpbmcgc2lnbmFsaW5nIG1lc3NhZ2VzLlxuICovXG5jb25zdCBQMlBDbGllbnQgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uLCBzaWduYWxpbmdDaGFubmVsKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcgRXZlbnREaXNwYXRjaGVyKCkpO1xuICBjb25zdCBjb25maWcgPSBjb25maWd1cmF0aW9uO1xuICBjb25zdCBzaWduYWxpbmcgPSBzaWduYWxpbmdDaGFubmVsO1xuICBjb25zdCBjaGFubmVscyA9IG5ldyBNYXAoKTsgLy8gTWFwIG9mIFBlZXJDb25uZWN0aW9uQ2hhbm5lbHMuXG4gIGNvbnN0IGNvbm5lY3Rpb25JZHMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyByZW1vdGUgdXNlciBJRCwgdmFsdWUgaXMgY3VycmVudCBzZXNzaW9uIElELlxuICBjb25zdCBzZWxmID0gdGhpcztcbiAgbGV0IHN0YXRlID0gQ29ubmVjdGlvblN0YXRlLlJFQURZO1xuICBsZXQgbXlJZDtcblxuICBzaWduYWxpbmcub25NZXNzYWdlID0gZnVuY3Rpb24ob3JpZ2luLCBtZXNzYWdlKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCBzaWduYWxpbmcgbWVzc2FnZSBmcm9tICcgKyBvcmlnaW4gKyAnOiAnICsgbWVzc2FnZSk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XG4gICAgY29uc3QgY29ubmVjdGlvbklkID0gZGF0YS5jb25uZWN0aW9uSWQ7XG4gICAgaWYgKHNlbGYuYWxsb3dlZFJlbW90ZUlkcy5pbmRleE9mKG9yaWdpbikgPCAwKSB7XG4gICAgICBzZW5kU2lnbmFsaW5nTWVzc2FnZShcbiAgICAgICAgICBvcmlnaW4sIGRhdGEuY29ubmVjdGlvbklkLCAnY2hhdC1jbG9zZWQnLFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0RFTklFRCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb25uZWN0aW9uSWRzLmhhcyhvcmlnaW4pICYmXG4gICAgICAgIGNvbm5lY3Rpb25JZHMuZ2V0KG9yaWdpbikgIT09IGNvbm5lY3Rpb25JZCAmJiAhaXNQb2xpdGVQZWVyKG9yaWdpbikpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgICAgJ0NvbGxpc2lvbiBkZXRlY3RlZCwgaWdub3JlIHRoaXMgbWVzc2FnZSBiZWNhdXNlIGN1cnJlbnQgZW5kcG9pbnQgaXMgaW1wb2xpdGUgcGVlci4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2NoYXQtY2xvc2VkJykge1xuICAgICAgaWYgKGNoYW5uZWxzLmhhcyhvcmlnaW4pKSB7XG4gICAgICAgIGdldE9yQ3JlYXRlQ2hhbm5lbChvcmlnaW4sIGNvbm5lY3Rpb25JZCkub25NZXNzYWdlKGRhdGEpO1xuICAgICAgICBjaGFubmVscy5kZWxldGUob3JpZ2luKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2V0T3JDcmVhdGVDaGFubmVsKG9yaWdpbiwgY29ubmVjdGlvbklkKS5vbk1lc3NhZ2UoZGF0YSk7XG4gIH07XG5cbiAgc2lnbmFsaW5nLm9uU2VydmVyRGlzY29ubmVjdGVkID0gZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUgPSBDb25uZWN0aW9uU3RhdGUuUkVBRFk7XG4gICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBPd3RFdmVudCgnc2VydmVyZGlzY29ubmVjdGVkJykpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyIHthcnJheX0gYWxsb3dlZFJlbW90ZUlkc1xuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIE9ubHkgYWxsb3dlZCByZW1vdGUgZW5kcG9pbnQgSURzIGFyZSBhYmxlIHRvIHB1Ymxpc2ggc3RyZWFtIG9yIHNlbmQgbWVzc2FnZSB0byBjdXJyZW50IGVuZHBvaW50LiBSZW1vdmluZyBhbiBJRCBmcm9tIGFsbG93ZWRSZW1vdGVJZHMgZG9lcyBzdG9wIGV4aXN0aW5nIGNvbm5lY3Rpb24gd2l0aCBjZXJ0YWluIGVuZHBvaW50LiBQbGVhc2UgY2FsbCBzdG9wIHRvIHN0b3AgdGhlIFBlZXJDb25uZWN0aW9uLlxuICAgKi9cbiAgdGhpcy5hbGxvd2VkUmVtb3RlSWRzPVtdO1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gY29ubmVjdFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgQ29ubmVjdCB0byBzaWduYWxpbmcgc2VydmVyLiBTaW5jZSBzaWduYWxpbmcgY2FuIGJlIGN1c3RvbWl6ZWQsIHRoaXMgbWV0aG9kIGRvZXMgbm90IGRlZmluZSBob3cgYSB0b2tlbiBsb29rcyBsaWtlLiBTREsgcGFzc2VzIHRva2VuIHRvIHNpZ25hbGluZyBjaGFubmVsIHdpdGhvdXQgY2hhbmdlcy5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlbiBBIHRva2VuIGZvciBjb25uZWN0aW5nIHRvIHNpZ25hbGluZyBzZXJ2ZXIuIFRoZSBmb3JtYXQgb2YgdGhpcyB0b2tlbiBkZXBlbmRzIG9uIHNpZ25hbGluZyBzZXJ2ZXIncyByZXF1aXJlbWVudC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxvYmplY3QsIEVycm9yPn0gSXQgcmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCBhbiBvYmplY3QgcmV0dXJuZWQgYnkgc2lnbmFsaW5nIGNoYW5uZWwgb25jZSBzaWduYWxpbmcgY2hhbm5lbCByZXBvcnRzIGNvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQuXG4gICAqL1xuICB0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbih0b2tlbikge1xuICAgIGlmIChzdGF0ZSA9PT0gQ29ubmVjdGlvblN0YXRlLlJFQURZKSB7XG4gICAgICBzdGF0ZSA9IENvbm5lY3Rpb25TdGF0ZS5DT05ORUNUSU5HO1xuICAgIH0gZWxzZSB7XG4gICAgICBMb2dnZXIud2FybmluZygnSW52YWxpZCBjb25uZWN0aW9uIHN0YXRlOiAnICsgc3RhdGUpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFKSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzaWduYWxpbmcuY29ubmVjdCh0b2tlbikudGhlbigoaWQpID0+IHtcbiAgICAgICAgbXlJZCA9IGlkO1xuICAgICAgICBzdGF0ZSA9IENvbm5lY3Rpb25TdGF0ZS5DT05ORUNURUQ7XG4gICAgICAgIHJlc29sdmUobXlJZCk7XG4gICAgICB9LCAoZXJyQ29kZSkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKEVycm9yTW9kdWxlLmdldEVycm9yQnlDb2RlKFxuICAgICAgICAgICAgZXJyQ29kZSkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZGlzY29ubmVjdFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgRGlzY29ubmVjdCBmcm9tIHRoZSBzaWduYWxpbmcgY2hhbm5lbC4gSXQgc3RvcHMgYWxsIGV4aXN0aW5nIHNlc3Npb25zIHdpdGggcmVtb3RlIGVuZHBvaW50cy5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50XG4gICAqL1xuICB0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoc3RhdGUgPT0gQ29ubmVjdGlvblN0YXRlLlJFQURZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNoYW5uZWxzLmZvckVhY2goKGNoYW5uZWwpID0+IHtcbiAgICAgIGNoYW5uZWwuc3RvcCgpO1xuICAgIH0pO1xuICAgIGNoYW5uZWxzLmNsZWFyKCk7XG4gICAgc2lnbmFsaW5nLmRpc2Nvbm5lY3QoKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHB1Ymxpc2hcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFB1Ymxpc2ggYSBzdHJlYW0gdG8gYSByZW1vdGUgZW5kcG9pbnQuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlSWQgUmVtb3RlIGVuZHBvaW50J3MgSUQuXG4gICAqIEBwYXJhbSB7T3d0LkJhc2UuTG9jYWxTdHJlYW19IHN0cmVhbSBBbiBPd3QuQmFzZS5Mb2NhbFN0cmVhbSB0byBiZSBwdWJsaXNoZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8T3d0LkJhc2UuUHVibGljYXRpb24sIEVycm9yPn0gQSBwcm9taXNlZCB0aGF0IHJlc29sdmVzIHdoZW4gcmVtb3RlIHNpZGUgcmVjZWl2ZWQgdGhlIGNlcnRhaW4gc3RyZWFtLiBIb3dldmVyLCByZW1vdGUgZW5kcG9pbnQgbWF5IG5vdCBkaXNwbGF5IHRoaXMgc3RyZWFtLCBvciBpZ25vcmUgaXQuXG4gICAqL1xuICB0aGlzLnB1Ymxpc2ggPSBmdW5jdGlvbihyZW1vdGVJZCwgc3RyZWFtKSB7XG4gICAgaWYgKHN0YXRlICE9PSBDb25uZWN0aW9uU3RhdGUuQ09OTkVDVEVEKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUsXG4gICAgICAgICAgJ1AyUCBDbGllbnQgaXMgbm90IGNvbm5lY3RlZCB0byBzaWduYWxpbmcgY2hhbm5lbC4nKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFsbG93ZWRSZW1vdGVJZHMuaW5kZXhPZihyZW1vdGVJZCkgPCAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX05PVF9BTExPV0VEKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0T3JDcmVhdGVDaGFubmVsKHJlbW90ZUlkKS5wdWJsaXNoKHN0cmVhbSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc2VuZFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgU2VuZCBhIG1lc3NhZ2UgdG8gcmVtb3RlIGVuZHBvaW50LlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlbW90ZUlkIFJlbW90ZSBlbmRwb2ludCdzIElELlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBNZXNzYWdlIHRvIGJlIHNlbnQuIEl0IHNob3VsZCBiZSBhIHN0cmluZy5cbiAgICogQHJldHVybiB7UHJvbWlzZTx1bmRlZmluZWQsIEVycm9yPn0gSXQgcmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgd2hlbiByZW1vdGUgZW5kcG9pbnQgcmVjZWl2ZWQgY2VydGFpbiBtZXNzYWdlLlxuICAgKi9cbiAgdGhpcy5zZW5kPWZ1bmN0aW9uKHJlbW90ZUlkLCBtZXNzYWdlKSB7XG4gICAgaWYgKHN0YXRlICE9PSBDb25uZWN0aW9uU3RhdGUuQ09OTkVDVEVEKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUsXG4gICAgICAgICAgJ1AyUCBDbGllbnQgaXMgbm90IGNvbm5lY3RlZCB0byBzaWduYWxpbmcgY2hhbm5lbC4nKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFsbG93ZWRSZW1vdGVJZHMuaW5kZXhPZihyZW1vdGVJZCkgPCAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX05PVF9BTExPV0VEKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0T3JDcmVhdGVDaGFubmVsKHJlbW90ZUlkKS5zZW5kKG1lc3NhZ2UpKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHN0b3BcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIENsZWFuIGFsbCByZXNvdXJjZXMgYXNzb2NpYXRlZCB3aXRoIGdpdmVuIHJlbW90ZSBlbmRwb2ludC4gSXQgbWF5IGluY2x1ZGUgUlRDUGVlckNvbm5lY3Rpb24sIFJUQ1J0cFRyYW5zY2VpdmVyIGFuZCBSVENEYXRhQ2hhbm5lbC4gSXQgc3RpbGwgcG9zc2libGUgdG8gcHVibGlzaCBhIHN0cmVhbSwgb3Igc2VuZCBhIG1lc3NhZ2UgdG8gZ2l2ZW4gcmVtb3RlIGVuZHBvaW50IGFmdGVyIHN0b3AuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlSWQgUmVtb3RlIGVuZHBvaW50J3MgSUQuXG4gICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICovXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKHJlbW90ZUlkKSB7XG4gICAgaWYgKCFjaGFubmVscy5oYXMocmVtb3RlSWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZyhcbiAgICAgICAgICAnTm8gUGVlckNvbm5lY3Rpb24gYmV0d2VlbiBjdXJyZW50IGVuZHBvaW50IGFuZCBzcGVjaWZpYyByZW1vdGUgJyArXG4gICAgICAgICAgJ2VuZHBvaW50LicsXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaGFubmVscy5nZXQocmVtb3RlSWQpLnN0b3AoKTtcbiAgICBjaGFubmVscy5kZWxldGUocmVtb3RlSWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZ2V0U3RhdHNcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIEdldCBzdGF0cyBvZiB1bmRlcmx5aW5nIFBlZXJDb25uZWN0aW9uLlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlbW90ZUlkIFJlbW90ZSBlbmRwb2ludCdzIElELlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJUQ1N0YXRzUmVwb3J0LCBFcnJvcj59IEl0IHJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHdpdGggYW4gUlRDU3RhdHNSZXBvcnQgb3IgcmVqZWN0IHdpdGggYW4gRXJyb3IgaWYgdGhlcmUgaXMgbm8gY29ubmVjdGlvbiB3aXRoIHNwZWNpZmljIHVzZXIuXG4gICAqL1xuICB0aGlzLmdldFN0YXRzID0gZnVuY3Rpb24ocmVtb3RlSWQpIHtcbiAgICBpZiAoIWNoYW5uZWxzLmhhcyhyZW1vdGVJZCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSxcbiAgICAgICAgICAnTm8gUGVlckNvbm5lY3Rpb24gYmV0d2VlbiBjdXJyZW50IGVuZHBvaW50IGFuZCBzcGVjaWZpYyByZW1vdGUgJyArXG4gICAgICAgICAgJ2VuZHBvaW50LicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5uZWxzLmdldChyZW1vdGVJZCkuZ2V0U3RhdHMoKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGdldFBlZXJDb25uZWN0aW9uXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBHZXQgdW5kZXJseWluZyBQZWVyQ29ubmVjdGlvbi5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZW1vdGVJZCBSZW1vdGUgZW5kcG9pbnQncyBJRC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSVENQZWVyQ29ubmVjdGlvbiwgRXJyb3I+fSBJdCByZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZFxuICAgKiAgICAgd2l0aCBhbiBSVENQZWVyQ29ubmVjdGlvbiBvciByZWplY3Qgd2l0aCBhbiBFcnJvciBpZiB0aGVyZSBpcyBub1xuICAgKiAgICAgY29ubmVjdGlvbiB3aXRoIHNwZWNpZmljIHVzZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLmdldFBlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24ocmVtb3RlSWQpIHtcbiAgICBpZiAoIWNoYW5uZWxzLmhhcyhyZW1vdGVJZCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSxcbiAgICAgICAgICAnTm8gUGVlckNvbm5lY3Rpb24gYmV0d2VlbiBjdXJyZW50IGVuZHBvaW50IGFuZCBzcGVjaWZpYyByZW1vdGUgJyArXG4gICAgICAgICAgICAgICdlbmRwb2ludC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFubmVscy5nZXQocmVtb3RlSWQpLnBlZXJDb25uZWN0aW9uO1xuICB9O1xuXG4gIGNvbnN0IHNlbmRTaWduYWxpbmdNZXNzYWdlID0gZnVuY3Rpb24ocmVtb3RlSWQsIGNvbm5lY3Rpb25JZCwgdHlwZSwgbWVzc2FnZSkge1xuICAgIGNvbnN0IG1zZyA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBjb25uZWN0aW9uSWQsXG4gICAgfTtcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgbXNnLmRhdGEgPSBtZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4gc2lnbmFsaW5nLnNlbmQocmVtb3RlSWQsIEpTT04uc3RyaW5naWZ5KG1zZykpLmNhdGNoKChlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRocm93IEVycm9yTW9kdWxlLmdldEVycm9yQnlDb2RlKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFJldHVybiB0cnVlIGlmIGN1cnJlbnQgZW5kcG9pbnQgaXMgYW4gaW1wb2xpdGUgcGVlciwgd2hpY2ggY29udHJvbHMgdGhlXG4gIC8vIHNlc3Npb24uXG4gIGNvbnN0IGlzUG9saXRlUGVlciA9IGZ1bmN0aW9uKHJlbW90ZUlkKSB7XG4gICAgcmV0dXJuIG15SWQgPCByZW1vdGVJZDtcbiAgfTtcblxuICAvLyBJZiBhIGNvbm5lY3Rpb24gd2l0aCByZW1vdGVJZCB3aXRoIGEgZGlmZmVyZW50IHNlc3Npb24gSUQgZXhpc3RzLCBpdCB3aWxsXG4gIC8vIGJlIHN0b3BwZWQgYW5kIGEgbmV3IGNvbm5lY3Rpb24gd2lsbCBiZSBjcmVhdGVkLlxuICBjb25zdCBnZXRPckNyZWF0ZUNoYW5uZWwgPSBmdW5jdGlvbihyZW1vdGVJZCwgY29ubmVjdGlvbklkKSB7XG4gICAgLy8gSWYgYGNvbm5lY3Rpb25JZGAgaXMgbm90IGRlZmluZWQsIHVzZSB0aGUgbGF0ZXN0IG9uZSBvciBnZW5lcmF0ZSBhIG5ld1xuICAgIC8vIG9uZS5cbiAgICBpZiAoIWNvbm5lY3Rpb25JZCAmJiBjb25uZWN0aW9uSWRzLmhhcyhyZW1vdGVJZCkpIHtcbiAgICAgIGNvbm5lY3Rpb25JZCA9IGNvbm5lY3Rpb25JZHMuZ2V0KHJlbW90ZUlkKTtcbiAgICB9XG4gICAgLy8gRGVsZXRlIG9sZCBjaGFubmVsIGlmIGNvbm5lY3Rpb24gZG9lc24ndCBtYXRjaC5cbiAgICBpZiAoY29ubmVjdGlvbklkcy5oYXMocmVtb3RlSWQpICYmXG4gICAgICAgIGNvbm5lY3Rpb25JZHMuZ2V0KHJlbW90ZUlkKSAhPSBjb25uZWN0aW9uSWQpIHtcbiAgICAgIHNlbGYuc3RvcChyZW1vdGVJZCk7XG4gICAgfVxuICAgIGlmICghY29ubmVjdGlvbklkKSB7XG4gICAgICBjb25zdCBjb25uZWN0aW9uSWRMaW1pdCA9IDEwMDAwMDtcbiAgICAgIGNvbm5lY3Rpb25JZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNvbm5lY3Rpb25JZExpbWl0KTtcbiAgICB9XG4gICAgY29ubmVjdGlvbklkcy5zZXQocmVtb3RlSWQsIGNvbm5lY3Rpb25JZCk7XG4gICAgaWYgKCFjaGFubmVscy5oYXMocmVtb3RlSWQpKSB7XG4gICAgICAvLyBDb25zdHJ1Y3QgYW4gc2lnbmFsaW5nIHNlbmRlci9yZWNlaXZlciBmb3IgUDJQUGVlckNvbm5lY3Rpb24uXG4gICAgICBjb25zdCBzaWduYWxpbmdGb3JDaGFubmVsID0gT2JqZWN0LmNyZWF0ZShFdmVudERpc3BhdGNoZXIpO1xuICAgICAgc2lnbmFsaW5nRm9yQ2hhbm5lbC5zZW5kU2lnbmFsaW5nTWVzc2FnZSA9IHNlbmRTaWduYWxpbmdNZXNzYWdlO1xuICAgICAgY29uc3QgcGNjID0gbmV3IFAyUFBlZXJDb25uZWN0aW9uQ2hhbm5lbChcbiAgICAgICAgICBjb25maWcsIG15SWQsIHJlbW90ZUlkLCBjb25uZWN0aW9uSWQsIHNpZ25hbGluZ0ZvckNoYW5uZWwpO1xuICAgICAgcGNjLmFkZEV2ZW50TGlzdGVuZXIoJ3N0cmVhbWFkZGVkJywgKHN0cmVhbUV2ZW50KT0+e1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICAgICAgfSk7XG4gICAgICBwY2MuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZXJlY2VpdmVkJywgKG1lc3NhZ2VFdmVudCk9PntcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG1lc3NhZ2VFdmVudCk7XG4gICAgICB9KTtcbiAgICAgIHBjYy5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgaWYgKGNoYW5uZWxzLmhhcyhyZW1vdGVJZCkpIHtcbiAgICAgICAgICBjaGFubmVscy5kZWxldGUocmVtb3RlSWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3Rpb25JZHMuZGVsZXRlKHJlbW90ZUlkKTtcbiAgICAgIH0pO1xuICAgICAgY2hhbm5lbHMuc2V0KHJlbW90ZUlkLCBwY2MpO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbm5lbHMuZ2V0KHJlbW90ZUlkKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFAyUENsaWVudDtcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLy8gVGhpcyBmaWxlIGRvZXNuJ3QgaGF2ZSBwdWJsaWMgQVBJcy5cbi8qIGVzbGludC1kaXNhYmxlIHZhbGlkLWpzZG9jICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG4vKiBnbG9iYWwgRXZlbnQsIE1hcCwgUHJvbWlzZSwgUlRDSWNlQ2FuZGlkYXRlLCBuYXZpZ2F0b3IgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyLCBNZXNzYWdlRXZlbnQsIE93dEV2ZW50fSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7UHVibGljYXRpb259IGZyb20gJy4uL2Jhc2UvcHVibGljYXRpb24uanMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vYmFzZS91dGlscy5qcyc7XG5pbXBvcnQgKiBhcyBFcnJvck1vZHVsZSBmcm9tICcuL2Vycm9yLmpzJztcbmltcG9ydCAqIGFzIFN0cmVhbU1vZHVsZSBmcm9tICcuLi9iYXNlL3N0cmVhbS5qcyc7XG5pbXBvcnQgKiBhcyBTZHBVdGlscyBmcm9tICcuLi9iYXNlL3NkcHV0aWxzLmpzJztcbmltcG9ydCB7VHJhbnNwb3J0U2V0dGluZ3MsIFRyYW5zcG9ydFR5cGV9IGZyb20gJy4uL2Jhc2UvdHJhbnNwb3J0LmpzJztcblxuLyoqXG4gKiBAY2xhc3MgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsRXZlbnRcbiAqIEBkZXNjIEV2ZW50IGZvciBTdHJlYW0uXG4gKiBAbWVtYmVyT2YgT3d0LlAyUFxuICogQHByaXZhdGVcbiAqICovXG5leHBvcnQgY2xhc3MgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jICovXG4gIGNvbnN0cnVjdG9yKGluaXQpIHtcbiAgICBzdXBlcihpbml0KTtcbiAgICB0aGlzLnN0cmVhbSA9IGluaXQuc3RyZWFtO1xuICB9XG59XG5cbmNvbnN0IERhdGFDaGFubmVsTGFiZWwgPSB7XG4gIE1FU1NBR0U6ICdtZXNzYWdlJyxcbiAgRklMRTogJ2ZpbGUnLFxufTtcblxuY29uc3QgU2lnbmFsaW5nVHlwZSA9IHtcbiAgREVOSUVEOiAnY2hhdC1kZW5pZWQnLFxuICBDTE9TRUQ6ICdjaGF0LWNsb3NlZCcsXG4gIE5FR09USUFUSU9OX05FRURFRDogJ2NoYXQtbmVnb3RpYXRpb24tbmVlZGVkJyxcbiAgVFJBQ0tfU09VUkNFUzogJ2NoYXQtdHJhY2stc291cmNlcycsXG4gIFNUUkVBTV9JTkZPOiAnY2hhdC1zdHJlYW0taW5mbycsXG4gIFNEUDogJ2NoYXQtc2lnbmFsJyxcbiAgVFJBQ0tTX0FEREVEOiAnY2hhdC10cmFja3MtYWRkZWQnLFxuICBUUkFDS1NfUkVNT1ZFRDogJ2NoYXQtdHJhY2tzLXJlbW92ZWQnLFxuICBEQVRBX1JFQ0VJVkVEOiAnY2hhdC1kYXRhLXJlY2VpdmVkJyxcbiAgVUE6ICdjaGF0LXVhJyxcbn07XG5cbmNvbnN0IHN5c0luZm8gPSBVdGlscy5zeXNJbmZvKCk7XG5cbi8qKlxuICogQGNsYXNzIFAyUFBlZXJDb25uZWN0aW9uQ2hhbm5lbFxuICogQGRlc2MgQSBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWwgbWFuYWdlcyBhIFBlZXJDb25uZWN0aW9uIG9iamVjdCwgaGFuZGxlcyBhbGxcbiAqIGludGVyYWN0aW9ucyBiZXR3ZWVuIHRoaXMgZW5kcG9pbnQgKGxvY2FsKSBhbmQgYSByZW1vdGUgZW5kcG9pbnQuIE9ubHkgb25lXG4gKiBQZWVyQ29ubmVjdGlvbkNoYW5uZWwgaXMgYWxpdmUgZm9yIGEgbG9jYWwgLSByZW1vdGUgZW5kcG9pbnQgcGFpciBhdCBhbnlcbiAqIGdpdmVuIHRpbWUuXG4gKiBAbWVtYmVyT2YgT3d0LlAyUFxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgLy8gfHNpZ25hbGluZ3wgaXMgYW4gb2JqZWN0IGhhcyBhIG1ldGhvZCB8c2VuZFNpZ25hbGluZ01lc3NhZ2V8LlxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvYyAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIGNvbmZpZywgbG9jYWxJZCwgcmVtb3RlSWQsIGNvbm5lY3Rpb25JZCwgc2lnbmFsaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fcmVtb3RlSWQgPSByZW1vdGVJZDtcbiAgICB0aGlzLl9jb25uZWN0aW9uSWQgPSBjb25uZWN0aW9uSWQ7XG4gICAgdGhpcy5fc2lnbmFsaW5nID0gc2lnbmFsaW5nO1xuICAgIHRoaXMuX3BjID0gbnVsbDtcbiAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1zID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgc3RyZWFtcyBwdWJsaXNoZWQsIHZhbHVlIGlzIGl0cyBwdWJsaWNhdGlvbi5cbiAgICB0aGlzLl9wZW5kaW5nU3RyZWFtcyA9IFtdOyAvLyBTdHJlYW1zIGdvaW5nIHRvIGJlIGFkZGVkIHRvIFBlZXJDb25uZWN0aW9uLlxuICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zID0gW107IC8vIFN0cmVhbXMgaGF2ZSBiZWVuIGFkZGVkIHRvIFBlZXJDb25uZWN0aW9uLCBidXQgZG9lcyBub3QgcmVjZWl2ZSBhY2sgZnJvbSByZW1vdGUgc2lkZS5cbiAgICB0aGlzLl9wZW5kaW5nVW5wdWJsaXNoU3RyZWFtcyA9IFtdOyAvLyBTdHJlYW1zIGdvaW5nIHRvIGJlIHJlbW92ZWQuXG4gICAgLy8gS2V5IGlzIE1lZGlhU3RyZWFtJ3MgSUQsIHZhbHVlIGlzIGFuIG9iamVjdCB7c291cmNlOnthdWRpbzpzdHJpbmcsIHZpZGVvOnN0cmluZ30sIGF0dHJpYnV0ZXM6IG9iamVjdCwgc3RyZWFtOiBSZW1vdGVTdHJlYW0sIG1lZGlhU3RyZWFtOiBNZWRpYVN0cmVhbX0uIGBzdHJlYW1gIGFuZCBgbWVkaWFTdHJlYW1gIHdpbGwgYmUgc2V0IHdoZW4gYHRyYWNrYCBldmVudCBpcyBmaXJlZCBvbiBgUlRDUGVlckNvbm5lY3Rpb25gLiBgbWVkaWFTdHJlYW1gIHdpbGwgYmUgYG51bGxgIGFmdGVyIGBzdHJlYW1hZGRlZGAgZXZlbnQgaXMgZmlyZWQgb24gYFAyUENsaWVudGAuIE90aGVyIHByb3BlcnRlcyB3aWxsIGJlIHNldCB1cG9uIGBTVFJFQU1fSU5GT2AgZXZlbnQgZnJvbSBzaWduYWxpbmcgY2hhbm5lbC5cbiAgICB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuX3JlbW90ZVN0cmVhbXMgPSBbXTtcbiAgICB0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8gPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBNZWRpYVN0cmVhbVRyYWNrJ3MgSUQsIHZhbHVlIGlzIHNvdXJjZSBpbmZvLlxuICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIE1lZGlhU3RyZWFtJ3MgSUQsIHZhbHVlIGlzIGFuIG9iamVjdCBoYXMgfHJlc29sdmV8IGFuZCB8cmVqZWN0fC5cbiAgICB0aGlzLl91bnB1Ymxpc2hQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIE1lZGlhU3RyZWFtJ3MgSUQsIHZhbHVlIGlzIGFuIG9iamVjdCBoYXMgfHJlc29sdmV8IGFuZCB8cmVqZWN0fC5cbiAgICB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtVHJhY2tzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgTWVkaWFTdHJlYW0ncyBJRCwgdmFsdWUgaXMgYW4gYXJyYXkgb2YgdGhlIElEIG9mIGl0cyBNZWRpYVN0cmVhbVRyYWNrcyB0aGF0IGhhdmVuJ3QgYmVlbiBhY2tlZC5cbiAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1UcmFja3MgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBNZWRpYVN0cmVhbSdzIElELCB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0aGUgSUQgb2YgaXRzIE1lZGlhU3RyZWFtVHJhY2tzIHRoYXQgaGF2ZW4ndCBiZWVuIHJlbW92ZWQuXG4gICAgdGhpcy5faXNOZWdvdGlhdGlvbk5lZWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1JlbW92ZVN0cmVhbSA9IHRydWU7XG4gICAgdGhpcy5fcmVtb3RlU2lkZUlnbm9yZXNEYXRhQ2hhbm5lbEFja3MgPSBmYWxzZTtcbiAgICB0aGlzLl9yZW1vdGVJY2VDYW5kaWRhdGVzID0gW107XG4gICAgdGhpcy5fZGF0YUNoYW5uZWxzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgZGF0YSBjaGFubmVsJ3MgbGFiZWwsIHZhbHVlIGlzIGEgUlRDRGF0YUNoYW5uZWwuXG4gICAgdGhpcy5fcGVuZGluZ01lc3NhZ2VzID0gW107XG4gICAgdGhpcy5fZGF0YVNlcSA9IDE7IC8vIFNlcXVlbmNlIG51bWJlciBmb3IgZGF0YSBjaGFubmVsIG1lc3NhZ2VzLlxuICAgIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBkYXRhIHNlcXVlbmNlIG51bWJlciwgdmFsdWUgaXMgYW4gb2JqZWN0IGhhcyB8cmVzb2x2ZXwgYW5kIHxyZWplY3R8LlxuICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMgPSBbXTsgLy8gVHJhY2tzIHRoYXQgaGF2ZSBiZWVuIGFkZGVkIGFmdGVyIHJlY2VpdmluZyByZW1vdGUgU0RQIGJ1dCBiZWZvcmUgY29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZC4gRHJhaW5pbmcgdGhlc2UgbWVzc2FnZXMgd2hlbiBJQ0UgY29ubmVjdGlvbiBzdGF0ZSBpcyBjb25uZWN0ZWQuXG4gICAgdGhpcy5faXNQb2xpdGVQZWVyID0gbG9jYWxJZCA8IHJlbW90ZUlkO1xuICAgIHRoaXMuX3NldHRpbmdMb2NhbFNkcCA9IGZhbHNlO1xuICAgIHRoaXMuX3NldHRpbmdSZW1vdGVTZHAgPSBmYWxzZTtcbiAgICB0aGlzLl9kaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NyZWF0ZVBlZXJDb25uZWN0aW9uKCk7XG4gICAgdGhpcy5fc2VuZFVhKHN5c0luZm8pO1xuICB9XG5cbiAgZ2V0IHBlZXJDb25uZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wYztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcHVibGlzaFxuICAgKiBAZGVzYyBQdWJsaXNoIGEgc3RyZWFtIHRvIHRoZSByZW1vdGUgZW5kcG9pbnQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwdWJsaXNoKHN0cmVhbSkge1xuICAgIGlmICghKHN0cmVhbSBpbnN0YW5jZW9mIFN0cmVhbU1vZHVsZS5Mb2NhbFN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHN0cmVhbS4nKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wdWJsaXNoZWRTdHJlYW1zLmhhcyhzdHJlYW0pKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lMTEVHQUxfQVJHVU1FTlQsXG4gICAgICAgICAgJ0R1cGxpY2F0ZWQgc3RyZWFtLicpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FyZUFsbFRyYWNrc0VuZGVkKHN0cmVhbS5tZWRpYVN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSxcbiAgICAgICAgICAnQWxsIHRyYWNrcyBhcmUgZW5kZWQuJykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2VuZFN0cmVhbUluZm8oc3RyZWFtKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZFN0cmVhbShzdHJlYW0ubWVkaWFTdHJlYW0pO1xuICAgICAgICB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgICAgIGNvbnN0IHRyYWNrSWRzID0gQXJyYXkuZnJvbShzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCksXG4gICAgICAgICAgICAodHJhY2spID0+IHRyYWNrLmlkKTtcbiAgICAgICAgdGhpcy5fcHVibGlzaGluZ1N0cmVhbVRyYWNrcy5zZXQoc3RyZWFtLm1lZGlhU3RyZWFtLmlkLFxuICAgICAgICAgICAgdHJhY2tJZHMpO1xuICAgICAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuc2V0KHN0cmVhbS5tZWRpYVN0cmVhbS5pZCwge1xuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHNlbmRcbiAgICogQGRlc2MgU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIHJlbW90ZSBlbmRwb2ludC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNlbmQobWVzc2FnZSkge1xuICAgIGlmICghKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1lc3NhZ2UuJykpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaWQ6IHRoaXMuX2RhdGFTZXErKyxcbiAgICAgIGRhdGE6IG1lc3NhZ2UsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuX2RhdGFDaGFubmVscy5oYXMoRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKSkge1xuICAgICAgdGhpcy5fY3JlYXRlRGF0YUNoYW5uZWwoRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYyA9IHRoaXMuX2RhdGFDaGFubmVscy5nZXQoRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKTtcbiAgICBpZiAoZGMucmVhZHlTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICB0aGlzLl9kYXRhQ2hhbm5lbHMuZ2V0KERhdGFDaGFubmVsTGFiZWwuTUVTU0FHRSlcbiAgICAgICAgICAuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BlbmRpbmdNZXNzYWdlcy5wdXNoKGRhdGEpO1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5fc2VuZERhdGFQcm9taXNlcy5zZXQoZGF0YS5pZCwge1xuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHN0b3BcbiAgICogQGRlc2MgU3RvcCB0aGUgY29ubmVjdGlvbiB3aXRoIHJlbW90ZSBlbmRwb2ludC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5fc3RvcCh1bmRlZmluZWQsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBnZXRTdGF0c1xuICAgKiBAZGVzYyBHZXQgc3RhdHMgZm9yIGEgc3BlY2lmaWMgTWVkaWFTdHJlYW0uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTdGF0cyhtZWRpYVN0cmVhbSkge1xuICAgIGlmICh0aGlzLl9wYykge1xuICAgICAgaWYgKG1lZGlhU3RyZWFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BjLmdldFN0YXRzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0cmFja3NTdGF0c1JlcG9ydHMgPSBbXTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFttZWRpYVN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0cmFjaykgPT4ge1xuICAgICAgICAgIHRoaXMuX2dldFN0YXRzKHRyYWNrLCB0cmFja3NTdGF0c1JlcG9ydHMpO1xuICAgICAgICB9KV0pLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cmFja3NTdGF0c1JlcG9ydHMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUpKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0U3RhdHMobWVkaWFTdHJlYW1UcmFjaywgcmVwb3J0c1Jlc3VsdCkge1xuICAgIHJldHVybiB0aGlzLl9wYy5nZXRTdGF0cyhtZWRpYVN0cmVhbVRyYWNrKS50aGVuKFxuICAgICAgICAoc3RhdHNSZXBvcnQpID0+IHtcbiAgICAgICAgICByZXBvcnRzUmVzdWx0LnB1c2goc3RhdHNSZXBvcnQpO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX2FkZFN0cmVhbVxuICAgKiBAZGVzYyBDcmVhdGUgUlRDUnRwU2VuZGVycyBmb3IgYWxsIHRyYWNrcyBpbiB0aGUgc3RyZWFtLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FkZFN0cmVhbShzdHJlYW0pIHtcbiAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHN0cmVhbS5nZXRUcmFja3MoKSkge1xuICAgICAgdGhpcy5fcGMuYWRkVHJhbnNjZWl2ZXIoXG4gICAgICAgICAgdHJhY2ssIHtkaXJlY3Rpb246ICdzZW5kb25seScsIHN0cmVhbXM6IFtzdHJlYW1dfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBvbk1lc3NhZ2VcbiAgICogQGRlc2MgVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IFAyUENsaWVudCB3aGVuIHRoZXJlIGlzIG5ldyBzaWduYWxpbmcgbWVzc2FnZSBhcnJpdmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICB0aGlzLl9TaWduYWxpbmdNZXNzc2FnZUhhbmRsZXIobWVzc2FnZSk7XG4gIH1cblxuICBfc2VuZFNkcChzZHApIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKFxuICAgICAgICB0aGlzLl9yZW1vdGVJZCwgdGhpcy5fY29ubmVjdGlvbklkLCBTaWduYWxpbmdUeXBlLlNEUCwgc2RwKTtcbiAgfVxuXG4gIF9zZW5kVWEoc3lzSW5mbykge1xuICAgIGNvbnN0IHVhID0ge3Nkazogc3lzSW5mby5zZGssIGNhcGFiaWxpdGllczogc3lzSW5mby5jYXBhYmlsaXRpZXN9O1xuICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuVUEsIHVhKTtcbiAgfVxuXG4gIF9zZW5kU2lnbmFsaW5nTWVzc2FnZSh0eXBlLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZShcbiAgICAgICAgdGhpcy5fcmVtb3RlSWQsIHRoaXMuX2Nvbm5lY3Rpb25JZCwgdHlwZSwgbWVzc2FnZSk7XG4gIH1cblxuICBfU2lnbmFsaW5nTWVzc3NhZ2VIYW5kbGVyKG1lc3NhZ2UpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0NoYW5uZWwgcmVjZWl2ZWQgbWVzc2FnZTogJyArIG1lc3NhZ2UpO1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuVUE6XG4gICAgICAgIHRoaXMuX2hhbmRsZVJlbW90ZUNhcGFiaWxpdHkobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuVFJBQ0tfU09VUkNFUzpcbiAgICAgICAgdGhpcy5fdHJhY2tTb3VyY2VzSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2lnbmFsaW5nVHlwZS5TVFJFQU1fSU5GTzpcbiAgICAgICAgdGhpcy5fc3RyZWFtSW5mb0hhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuU0RQOlxuICAgICAgICB0aGlzLl9zZHBIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLlRSQUNLU19BRERFRDpcbiAgICAgICAgdGhpcy5fdHJhY2tzQWRkZWRIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLlRSQUNLU19SRU1PVkVEOlxuICAgICAgICB0aGlzLl90cmFja3NSZW1vdmVkSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2lnbmFsaW5nVHlwZS5EQVRBX1JFQ0VJVkVEOlxuICAgICAgICB0aGlzLl9kYXRhUmVjZWl2ZWRIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLkNMT1NFRDpcbiAgICAgICAgdGhpcy5fY2hhdENsb3NlZEhhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBMb2dnZXIuZXJyb3IoJ0ludmFsaWQgc2lnbmFsaW5nIG1lc3NhZ2UgcmVjZWl2ZWQuIFR5cGU6ICcgK1xuICAgICAgICAgICAgbWVzc2FnZS50eXBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF90cmFja3NBZGRlZEhhbmRsZXJcbiAgICogQGRlc2MgSGFuZGxlIHRyYWNrIGFkZGVkIGV2ZW50IGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdHJhY2tzQWRkZWRIYW5kbGVyKGlkcykge1xuICAgIC8vIEN1cnJlbnRseSwgfGlkc3wgY29udGFpbnMgYWxsIHRyYWNrIElEcyBvZiBhIE1lZGlhU3RyZWFtLiBGb2xsb3dpbmcgYWxnb3JpdGhtIGFsc28gaGFuZGxlcyB8aWRzfCBpcyBhIHBhcnQgb2YgYSBNZWRpYVN0cmVhbSdzIHRyYWNrcy5cbiAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgLy8gSXQgY291bGQgYmUgYSBwcm9ibGVtIGlmIHRoZXJlIGlzIGEgdHJhY2sgcHVibGlzaGVkIHdpdGggZGlmZmVyZW50IE1lZGlhU3RyZWFtcywgbW92aW5nIHRvIG1pZC5cbiAgICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1UcmFja3MuZm9yRWFjaCgobWVkaWFUcmFja0lkcywgbWVkaWFTdHJlYW1JZCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lZGlhVHJhY2tJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobWVkaWFUcmFja0lkc1tpXSA9PT0gaWQpIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdGhpcyB0cmFjayBmcm9tIHB1Ymxpc2hpbmcgdHJhY2tzIHRvIHB1Ymxpc2hlZCB0cmFja3MuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3B1Ymxpc2hlZFN0cmVhbVRyYWNrcy5oYXMobWVkaWFTdHJlYW1JZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtVHJhY2tzLnNldChtZWRpYVN0cmVhbUlkLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1UcmFja3MuZ2V0KG1lZGlhU3RyZWFtSWQpLnB1c2goXG4gICAgICAgICAgICAgICAgbWVkaWFUcmFja0lkc1tpXSk7XG4gICAgICAgICAgICBtZWRpYVRyYWNrSWRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUmVzb2x2aW5nIGNlcnRhaW4gcHVibGlzaCBwcm9taXNlIHdoZW4gcmVtb3RlIGVuZHBvaW50IHJlY2VpdmVkIGFsbCB0cmFja3Mgb2YgYSBNZWRpYVN0cmVhbS5cbiAgICAgICAgICBpZiAobWVkaWFUcmFja0lkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9wdWJsaXNoUHJvbWlzZXMuaGFzKG1lZGlhU3RyZWFtSWQpKSB7XG4gICAgICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCB0aGUgcHJvbWlzZSBmb3IgcHVibGlzaGluZyAnICtcbiAgICAgICAgICAgICAgICBtZWRpYVN0cmVhbUlkKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJlYW1JbmRleCA9IHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5tZWRpYVN0cmVhbS5pZCA9PSBtZWRpYVN0cmVhbUlkKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmVhbSA9IHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zW3RhcmdldFN0cmVhbUluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zLnNwbGljZSh0YXJnZXRTdHJlYW1JbmRleCwgMSk7XG5cbiAgICAgICAgICAgIC8vIFNldCB0cmFuc2NlaXZlcnMgZm9yIFB1YmxpY2F0aW9uLlxuICAgICAgICAgICAgY29uc3QgdHJhbnNwb3J0ID1cbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNwb3J0U2V0dGluZ3MoVHJhbnNwb3J0VHlwZS5XRUJSVEMsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQucnRwVHJhbnNjZWl2ZXJzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYW5zY2VpdmVyIG9mIHRoaXMuX3BjLmdldFRyYW5zY2VpdmVycygpKSB7XG4gICAgICAgICAgICAgIGlmICh0cmFuc2NlaXZlci5zZW5kZXI/LnRyYWNrIGluXG4gICAgICAgICAgICAgICAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1UcmFja3MuZ2V0KG1lZGlhU3RyZWFtSWQpKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0LnJ0cFRyYW5zY2VpdmVycy5wdXNoKHRyYW5zY2VpdmVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwdWJsaWNhdGlvbiA9IG5ldyBQdWJsaWNhdGlvbihcbiAgICAgICAgICAgICAgICBpZCwgdHJhbnNwb3J0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl91bnB1Ymxpc2godGFyZ2V0U3RyZWFtKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHVibGljYXRpb24uZGlzcGF0Y2hFdmVudChuZXcgT3d0RXZlbnQoJ2VuZGVkJykpO1xuICAgICAgICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gVXNlIGRlYnVnIG1vZGUgYmVjYXVzZSB0aGlzIGVycm9yIHVzdWFsbHkgZG9lc24ndCBibG9jayBzdG9wcGluZyBhIHB1YmxpY2F0aW9uLlxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoXG4gICAgICAgICAgICAgICAgICAgICAgICAnU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkIGR1cmluZyBzdG9wcGluZyBhICcrXG4gICAgICAgICAgICAgICAgICAgICAgICAncHVibGljYXRpb24uICcgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFN0cmVhbSB8fCAhdGFyZ2V0U3RyZWFtLm1lZGlhU3RyZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1B1YmxpY2F0aW9uIGlzIG5vdCBhdmFpbGFibGUuJykpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHModGFyZ2V0U3RyZWFtLm1lZGlhU3RyZWFtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuc2V0KHRhcmdldFN0cmVhbSwgcHVibGljYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5fcHVibGlzaFByb21pc2VzLmdldChtZWRpYVN0cmVhbUlkKS5yZXNvbHZlKHB1YmxpY2F0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5kZWxldGUobWVkaWFTdHJlYW1JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF90cmFja3NSZW1vdmVkSGFuZGxlclxuICAgKiBAZGVzYyBIYW5kbGUgdHJhY2sgcmVtb3ZlZCBldmVudCBmcm9tIHJlbW90ZSBzaWRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3RyYWNrc1JlbW92ZWRIYW5kbGVyKGlkcykge1xuICAgIC8vIEN1cnJlbnRseSwgfGlkc3wgY29udGFpbnMgYWxsIHRyYWNrIElEcyBvZiBhIE1lZGlhU3RyZWFtLiBGb2xsb3dpbmcgYWxnb3JpdGhtIGFsc28gaGFuZGxlcyB8aWRzfCBpcyBhIHBhcnQgb2YgYSBNZWRpYVN0cmVhbSdzIHRyYWNrcy5cbiAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgLy8gSXQgY291bGQgYmUgYSBwcm9ibGVtIGlmIHRoZXJlIGlzIGEgdHJhY2sgcHVibGlzaGVkIHdpdGggZGlmZmVyZW50IE1lZGlhU3RyZWFtcy5cbiAgICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbVRyYWNrcy5mb3JFYWNoKChtZWRpYVRyYWNrSWRzLCBtZWRpYVN0cmVhbUlkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVkaWFUcmFja0lkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChtZWRpYVRyYWNrSWRzW2ldID09PSBpZCkge1xuICAgICAgICAgICAgbWVkaWFUcmFja0lkcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF9kYXRhUmVjZWl2ZWRIYW5kbGVyXG4gICAqIEBkZXNjIEhhbmRsZSBkYXRhIHJlY2VpdmVkIGV2ZW50IGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZGF0YVJlY2VpdmVkSGFuZGxlcihpZCkge1xuICAgIGlmICghdGhpcy5fc2VuZERhdGFQcm9taXNlcy5oYXMoaWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnUmVjZWl2ZWQgdW5rbm93biBkYXRhIHJlY2VpdmVkIG1lc3NhZ2UuIElEOiAnICsgaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZW5kRGF0YVByb21pc2VzLmdldChpZCkucmVzb2x2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX3NkcEhhbmRsZXJcbiAgICogQGRlc2MgSGFuZGxlIFNEUCByZWNlaXZlZCBldmVudCBmcm9tIHJlbW90ZSBzaWRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NkcEhhbmRsZXIoc2RwKSB7XG4gICAgaWYgKHNkcC50eXBlID09PSAnb2ZmZXInKSB7XG4gICAgICB0aGlzLl9vbk9mZmVyKHNkcCk7XG4gICAgfSBlbHNlIGlmIChzZHAudHlwZSA9PT0gJ2Fuc3dlcicpIHtcbiAgICAgIHRoaXMuX29uQW5zd2VyKHNkcCk7XG4gICAgfSBlbHNlIGlmIChzZHAudHlwZSA9PT0gJ2NhbmRpZGF0ZXMnKSB7XG4gICAgICB0aGlzLl9vblJlbW90ZUljZUNhbmRpZGF0ZShzZHApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX3RyYWNrU291cmNlc0hhbmRsZXJcbiAgICogQGRlc2MgUmVjZWl2ZWQgdHJhY2sgc291cmNlIGluZm9ybWF0aW9uIGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdHJhY2tTb3VyY2VzSGFuZGxlcihkYXRhKSB7XG4gICAgZm9yIChjb25zdCBpbmZvIG9mIGRhdGEpIHtcbiAgICAgIHRoaXMuX3JlbW90ZVRyYWNrU291cmNlSW5mby5zZXQoaW5mby5pZCwgaW5mby5zb3VyY2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX3N0cmVhbUluZm9IYW5kbGVyXG4gICAqIEBkZXNjIFJlY2VpdmVkIHN0cmVhbSBpbmZvcm1hdGlvbiBmcm9tIHJlbW90ZSBzaWRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3N0cmVhbUluZm9IYW5kbGVyKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdVbmV4cGVjdGVkIHN0cmVhbSBpbmZvLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLnNldChkYXRhLmlkLCB7XG4gICAgICBzb3VyY2U6IGRhdGEuc291cmNlLFxuICAgICAgYXR0cmlidXRlczogZGF0YS5hdHRyaWJ1dGVzLFxuICAgICAgc3RyZWFtOiBudWxsLFxuICAgICAgbWVkaWFTdHJlYW06IG51bGwsXG4gICAgICB0cmFja0lkczogZGF0YS50cmFja3MsIC8vIFRyYWNrIElEcyBtYXkgbm90IG1hdGNoIGF0IHNlbmRlciBhbmQgcmVjZWl2ZXIgc2lkZXMuIEtlZXAgaXQgZm9yIGxlZ2FjeSBwb3Jwb3Nlcy5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX2NoYXRDbG9zZWRIYW5kbGVyXG4gICAqIEBkZXNjIFJlY2VpdmVkIGNoYXQgY2xvc2VkIGV2ZW50IGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2hhdENsb3NlZEhhbmRsZXIoZGF0YSkge1xuICAgIHRoaXMuX2Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9zdG9wKGRhdGEsIGZhbHNlKTtcbiAgfVxuXG4gIF9vbk9mZmVyKHNkcCkge1xuICAgIExvZ2dlci5kZWJ1ZygnQWJvdXQgdG8gc2V0IHJlbW90ZSBkZXNjcmlwdGlvbi4gU2lnbmFsaW5nIHN0YXRlOiAnICtcbiAgICAgIHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlKTtcbiAgICBpZiAodGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgIT09ICdzdGFibGUnIHx8IHRoaXMuX3NldHRpbmdMb2NhbFNkcCkge1xuICAgICAgaWYgKHRoaXMuX2lzUG9saXRlUGVlcikge1xuICAgICAgICBMb2dnZXIuZGVidWcoJ1JvbGxiYWNrLicpO1xuICAgICAgICB0aGlzLl9zZXR0aW5nTG9jYWxTZHAgPSB0cnVlO1xuICAgICAgICAvLyBzZXRMb2NhbERlc2NyaXB0aW9uKHJvbGxiYWNrKSBpcyBub3Qgc3VwcG9ydGVkIG9uIFNhZmFyaSByaWdodCBub3cuXG4gICAgICAgIC8vIFRlc3QgY2FzZSBcIldlYlJUQyBjb2xsaXNpb24gc2hvdWxkIGJlIHJlc29sdmVkLlwiIGlzIGV4cGVjdGVkIHRvIGZhaWwuXG4gICAgICAgIC8vIFNlZVxuICAgICAgICAvLyBodHRwczovL3dwdC5meWkvcmVzdWx0cy93ZWJydGMvUlRDUGVlckNvbm5lY3Rpb24tc2V0TG9jYWxEZXNjcmlwdGlvbi1yb2xsYmFjay5odG1sP3E9d2VicnRjJnJ1bl9pZD01NjYyMDYyMzIxNTk4NDY0JnJ1bl9pZD01NzU2MTM5NTIwMTMxMDcyJnJ1bl9pZD01NzU0NjM3NTU2NjQ1ODg4JnJ1bl9pZD01NzY0MzM0MDQ5Mjk2Mzg0LlxuICAgICAgICB0aGlzLl9wYy5zZXRMb2NhbERlc2NyaXB0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2V0dGluZ0xvY2FsU2RwID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKCdDb2xsaXNpb24gZGV0ZWN0ZWQuIElnbm9yZSB0aGlzIG9mZmVyLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHNkcC5zZHAgPSB0aGlzLl9zZXRSdHBTZW5kZXJPcHRpb25zKHNkcC5zZHAsIHRoaXMuX2NvbmZpZyk7XG4gICAgY29uc3Qgc2Vzc2lvbkRlc2NyaXB0aW9uID0gbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihzZHApO1xuICAgIHRoaXMuX3NldHRpbmdSZW1vdGVTZHAgPSB0cnVlO1xuICAgIHRoaXMuX3BjLnNldFJlbW90ZURlc2NyaXB0aW9uKHNlc3Npb25EZXNjcmlwdGlvbikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9zZXR0aW5nUmVtb3RlU2RwID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcmVhdGVBbmRTZW5kQW5zd2VyKCk7XG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICBMb2dnZXIuZGVidWcoJ1NldCByZW1vdGUgZGVzY3JpcHRpb24gZmFpbGVkLiBNZXNzYWdlOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdG9wKGVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vbkFuc3dlcihzZHApIHtcbiAgICBMb2dnZXIuZGVidWcoJ0Fib3V0IHRvIHNldCByZW1vdGUgZGVzY3JpcHRpb24uIFNpZ25hbGluZyBzdGF0ZTogJyArXG4gICAgICB0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSk7XG4gICAgc2RwLnNkcCA9IHRoaXMuX3NldFJ0cFNlbmRlck9wdGlvbnMoc2RwLnNkcCwgdGhpcy5fY29uZmlnKTtcbiAgICBjb25zdCBzZXNzaW9uRGVzY3JpcHRpb24gPSBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHNkcCk7XG4gICAgdGhpcy5fc2V0dGluZ1JlbW90ZVNkcCA9IHRydWU7XG4gICAgdGhpcy5fcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihcbiAgICAgICAgc2Vzc2lvbkRlc2NyaXB0aW9uKSkudGhlbigoKSA9PiB7XG4gICAgICBMb2dnZXIuZGVidWcoJ1NldCByZW1vdGUgZGVzY3JpcGl0b24gc3VjY2Vzc2Z1bGx5LicpO1xuICAgICAgdGhpcy5fc2V0dGluZ1JlbW90ZVNkcCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZHJhaW5QZW5kaW5nTWVzc2FnZXMoKTtcbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnU2V0IHJlbW90ZSBkZXNjcmlwdGlvbiBmYWlsZWQuIE1lc3NhZ2U6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHRoaXMuX3N0b3AoZXJyb3IsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uTG9jYWxJY2VDYW5kaWRhdGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XG4gICAgICB0aGlzLl9zZW5kU2RwKHtcbiAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZXMnLFxuICAgICAgICBjYW5kaWRhdGU6IGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUsXG4gICAgICAgIHNkcE1pZDogZXZlbnQuY2FuZGlkYXRlLnNkcE1pZCxcbiAgICAgICAgc2RwTUxpbmVJbmRleDogZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXgsXG4gICAgICB9KS5jYXRjaCgoZSk9PntcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ZhaWxlZCB0byBzZW5kIGNhbmRpZGF0ZS4nKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0VtcHR5IGNhbmRpZGF0ZS4nKTtcbiAgICB9XG4gIH1cblxuICBfb25SZW1vdGVUcmFja0FkZGVkKGV2ZW50KSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdSZW1vdGUgdHJhY2sgYWRkZWQuJyk7XG4gICAgZm9yIChjb25zdCBzdHJlYW0gb2YgZXZlbnQuc3RyZWFtcykge1xuICAgICAgaWYgKCF0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmhhcyhzdHJlYW0uaWQpKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdNaXNzaW5nIHN0cmVhbSBpbmZvLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KHN0cmVhbS5pZCkuc3RyZWFtKSB7XG4gICAgICAgIHRoaXMuX3NldFN0cmVhbVRvUmVtb3RlU3RyZWFtSW5mbyhzdHJlYW0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29ubmVjdGVkJyB8fFxuICAgICAgIHRoaXMuX3BjLmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgIHRoaXMuX2NoZWNrSWNlQ29ubmVjdGlvblN0YXRlQW5kRmlyZUV2ZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMuY29uY2F0KGV2ZW50LnRyYWNrLmlkKTtcbiAgICB9XG4gIH1cblxuICBfb25SZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xuICAgIExvZ2dlci5kZWJ1ZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcbiAgICBpZiAoIXRoaXMuX3JlbW90ZVN0cmVhbUluZm8uaGFzKGV2ZW50LnN0cmVhbS5pZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzb3VyY2UgaW5mbyBmb3Igc3RyZWFtICcgKyBldmVudC5zdHJlYW0uaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29ubmVjdGVkJyB8fFxuICAgICAgdGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29tcGxldGVkJykge1xuICAgICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5UUkFDS1NfQURERUQsXG4gICAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoZXZlbnQuc3RyZWFtLmlkKS50cmFja0lkcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMgPSB0aGlzLl9hZGRlZFRyYWNrSWRzLmNvbmNhdChcbiAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChldmVudC5zdHJlYW0uaWQpLnRyYWNrSWRzKTtcbiAgICB9XG4gICAgY29uc3QgYXVkaW9UcmFja1NvdXJjZSA9IHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KGV2ZW50LnN0cmVhbS5pZClcbiAgICAgICAgLnNvdXJjZS5hdWRpbztcbiAgICBjb25zdCB2aWRlb1RyYWNrU291cmNlID0gdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoZXZlbnQuc3RyZWFtLmlkKVxuICAgICAgICAuc291cmNlLnZpZGVvO1xuICAgIGNvbnN0IHNvdXJjZUluZm8gPSBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbVNvdXJjZUluZm8oYXVkaW9UcmFja1NvdXJjZSxcbiAgICAgICAgdmlkZW9UcmFja1NvdXJjZSk7XG4gICAgaWYgKFV0aWxzLmlzU2FmYXJpKCkpIHtcbiAgICAgIGlmICghc291cmNlSW5mby5hdWRpbykge1xuICAgICAgICBldmVudC5zdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5mb3JFYWNoKCh0cmFjaykgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0cmVhbS5yZW1vdmVUcmFjayh0cmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFzb3VyY2VJbmZvLnZpZGVvKSB7XG4gICAgICAgIGV2ZW50LnN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmZvckVhY2goKHRyYWNrKSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RyZWFtLnJlbW92ZVRyYWNrKHRyYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChldmVudC5zdHJlYW0uaWQpLmF0dHJpYnV0ZXM7XG4gICAgY29uc3Qgc3RyZWFtID0gbmV3IFN0cmVhbU1vZHVsZS5SZW1vdGVTdHJlYW0odW5kZWZpbmVkLCB0aGlzLl9yZW1vdGVJZCxcbiAgICAgICAgZXZlbnQuc3RyZWFtLCBzb3VyY2VJbmZvLCBhdHRyaWJ1dGVzKTtcbiAgICBpZiAoc3RyZWFtKSB7XG4gICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IFN0cmVhbU1vZHVsZS5TdHJlYW1FdmVudCgnc3RyZWFtYWRkZWQnLCB7XG4gICAgICAgIHN0cmVhbTogc3RyZWFtLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9vblJlbW90ZVN0cmVhbVJlbW92ZWQoZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ1JlbW90ZSBzdHJlYW0gcmVtb3ZlZC4nKTtcbiAgICBjb25zdCBpID0gdGhpcy5fcmVtb3RlU3RyZWFtcy5maW5kSW5kZXgoKHMpID0+IHtcbiAgICAgIHJldHVybiBzLm1lZGlhU3RyZWFtLmlkID09PSBldmVudC5zdHJlYW0uaWQ7XG4gICAgfSk7XG4gICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9yZW1vdGVTdHJlYW1zW2ldO1xuICAgICAgdGhpcy5fc3RyZWFtUmVtb3ZlZChzdHJlYW0pO1xuICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtcy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgX29uTmVnb3RpYXRpb25uZWVkZWQoKSB7XG4gICAgaWYgKHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlID09PSAnc3RhYmxlJyAmJiAhdGhpcy5fcGMuX3NldHRpbmdMb2NhbFNkcCAmJlxuICAgICAgICAhdGhpcy5fc2V0dGluZ1JlbW90ZVNkcCkge1xuICAgICAgdGhpcy5fZG9OZWdvdGlhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXNOZWdvdGlhdGlvbk5lZWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX29uUmVtb3RlSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZUluZm8pIHtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBuZXcgUlRDSWNlQ2FuZGlkYXRlKHtcbiAgICAgIGNhbmRpZGF0ZTogY2FuZGlkYXRlSW5mby5jYW5kaWRhdGUsXG4gICAgICBzZHBNaWQ6IGNhbmRpZGF0ZUluZm8uc2RwTWlkLFxuICAgICAgc2RwTUxpbmVJbmRleDogY2FuZGlkYXRlSW5mby5zZHBNTGluZUluZGV4LFxuICAgIH0pO1xuICAgIGlmICh0aGlzLl9wYy5yZW1vdGVEZXNjcmlwdGlvbiAmJiB0aGlzLl9wYy5yZW1vdGVEZXNjcmlwdGlvbi5zZHAgIT09ICcnKSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0FkZCByZW1vdGUgaWNlIGNhbmRpZGF0ZXMuJyk7XG4gICAgICB0aGlzLl9wYy5hZGRJY2VDYW5kaWRhdGUoY2FuZGlkYXRlKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Vycm9yIHByb2Nlc3NpbmcgSUNFIGNhbmRpZGF0ZTogJyArIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0NhY2hlIHJlbW90ZSBpY2UgY2FuZGlkYXRlcy4nKTtcbiAgICAgIHRoaXMuX3JlbW90ZUljZUNhbmRpZGF0ZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIF9vblNpZ25hbGluZ1N0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdTaWduYWxpbmcgc3RhdGUgY2hhbmdlZDogJyArIHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlKTtcbiAgICBpZiAodGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgPT09ICdoYXZlLXJlbW90ZS1vZmZlcicgfHxcbiAgICAgICAgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgPT09ICdzdGFibGUnKSB7XG4gICAgICB0aGlzLl9kcmFpblBlbmRpbmdSZW1vdGVJY2VDYW5kaWRhdGVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ3N0YWJsZScpIHtcbiAgICAgIHRoaXMuX25lZ290aWF0aW5nID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5faXNOZWdvdGlhdGlvbk5lZWRlZCkge1xuICAgICAgICB0aGlzLl9vbk5lZ290aWF0aW9ubmVlZGVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kcmFpblBlbmRpbmdTdHJlYW1zKCk7XG4gICAgICAgIHRoaXMuX2RyYWluUGVuZGluZ01lc3NhZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX29uSWNlQ29ubmVjdGlvblN0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY2xvc2VkJyB8fFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfV0VCUlRDX1VOS05PV04sXG4gICAgICAgICAgJ0lDRSBjb25uZWN0aW9uIGZhaWxlZCBvciBjbG9zZWQuJyk7XG4gICAgICB0aGlzLl9zdG9wKGVycm9yLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29ubmVjdGVkJyB8fFxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICB0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLlRSQUNLU19BRERFRCxcbiAgICAgICAgICB0aGlzLl9hZGRlZFRyYWNrSWRzKTtcbiAgICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMgPSBbXTtcbiAgICAgIHRoaXMuX2NoZWNrSWNlQ29ubmVjdGlvblN0YXRlQW5kRmlyZUV2ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgX29uRGF0YUNoYW5uZWxNZXNzYWdlKGV2ZW50KSB7XG4gICAgY29uc3QgbWVzc2FnZT1KU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgIGlmICghdGhpcy5fcmVtb3RlU2lkZUlnbm9yZXNEYXRhQ2hhbm5lbEFja3MpIHtcbiAgICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuREFUQV9SRUNFSVZFRCwgbWVzc2FnZS5pZCk7XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2VFdmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoJ21lc3NhZ2VyZWNlaXZlZCcsIHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UuZGF0YSxcbiAgICAgIG9yaWdpbjogdGhpcy5fcmVtb3RlSWQsXG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG1lc3NhZ2VFdmVudCk7XG4gIH1cblxuICBfb25EYXRhQ2hhbm5lbE9wZW4oZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0RhdGEgQ2hhbm5lbCBpcyBvcGVuZWQuJyk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5sYWJlbCA9PT0gRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0RhdGEgY2hhbm5lbCBmb3IgbWVzc2FnZXMgaXMgb3BlbmVkLicpO1xuICAgICAgdGhpcy5fZHJhaW5QZW5kaW5nTWVzc2FnZXMoKTtcbiAgICB9XG4gIH1cblxuICBfb25EYXRhQ2hhbm5lbENsb3NlKGV2ZW50KSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdEYXRhIENoYW5uZWwgaXMgY2xvc2VkLicpO1xuICB9XG5cbiAgX3N0cmVhbVJlbW92ZWQoc3RyZWFtKSB7XG4gICAgaWYgKCF0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmhhcyhzdHJlYW0ubWVkaWFTdHJlYW0uaWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgc3RyZWFtIGluZm8uJyk7XG4gICAgfVxuICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuVFJBQ0tTX1JFTU9WRUQsXG4gICAgICAgIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KHN0cmVhbS5tZWRpYVN0cmVhbS5pZCkudHJhY2tJZHMpO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE93dEV2ZW50KCdlbmRlZCcpO1xuICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIF9jcmVhdGVQZWVyQ29ubmVjdGlvbigpIHtcbiAgICBjb25zdCBwY0NvbmZpZ3VyYXRpb24gPSB0aGlzLl9jb25maWcucnRjQ29uZmlndXJhdGlvbiB8fCB7fTtcbiAgICB0aGlzLl9wYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZ3VyYXRpb24pO1xuICAgIHRoaXMuX3BjLm9udHJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uUmVtb3RlVHJhY2tBZGRlZC5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIHRoaXMuX3BjLm9uaWNlY2FuZGlkYXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkxvY2FsSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgdGhpcy5fcGMub25zaWduYWxpbmdzdGF0ZWNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25TaWduYWxpbmdTdGF0ZUNoYW5nZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIHRoaXMuX3BjLm9uZGF0YWNoYW5uZWwgPSAoZXZlbnQpID0+IHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnT24gZGF0YSBjaGFubmVsLicpO1xuICAgICAgLy8gU2F2ZSByZW1vdGUgY3JlYXRlZCBkYXRhIGNoYW5uZWwuXG4gICAgICBpZiAoIXRoaXMuX2RhdGFDaGFubmVscy5oYXMoZXZlbnQuY2hhbm5lbC5sYWJlbCkpIHtcbiAgICAgICAgdGhpcy5fZGF0YUNoYW5uZWxzLnNldChldmVudC5jaGFubmVsLmxhYmVsLCBldmVudC5jaGFubmVsKTtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKCdTYXZlIHJlbW90ZSBjcmVhdGVkIGRhdGEgY2hhbm5lbC4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2JpbmRFdmVudHNUb0RhdGFDaGFubmVsKGV2ZW50LmNoYW5uZWwpO1xuICAgIH07XG4gICAgdGhpcy5fcGMub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uSWNlQ29ubmVjdGlvblN0YXRlQ2hhbmdlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgdGhpcy5fcGMub25uZWdvdGlhdGlvbm5lZWRlZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuX29uTmVnb3RpYXRpb25uZWVkZWQoKTtcbiAgICB9O1xuICB9XG5cbiAgX2RyYWluUGVuZGluZ1N0cmVhbXMoKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdEcmFpbmluZyBwZW5kaW5nIHN0cmVhbXMuJyk7XG4gICAgaWYgKHRoaXMuX3BjICYmIHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlID09PSAnc3RhYmxlJykge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdQZWVyIGNvbm5lY3Rpb24gaXMgcmVhZHkgZm9yIGRyYWluaW5nIHBlbmRpbmcgc3RyZWFtcy4nKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGVuZGluZ1N0cmVhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fcGVuZGluZ1N0cmVhbXNbaV07XG4gICAgICAgIHRoaXMuX3BlbmRpbmdTdHJlYW1zLnNoaWZ0KCk7XG4gICAgICAgIGlmICghc3RyZWFtLm1lZGlhU3RyZWFtKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYWRkU3RyZWFtKHN0cmVhbS5tZWRpYVN0cmVhbSk7XG4gICAgICAgIExvZ2dlci5kZWJ1ZygnQWRkZWQgc3RyZWFtIHRvIHBlZXIgY29ubmVjdGlvbi4nKTtcbiAgICAgICAgdGhpcy5fcHVibGlzaGluZ1N0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fcGVuZGluZ1N0cmVhbXMubGVuZ3RoID0gMDtcbiAgICAgIGZvciAoY29uc3Qgc3RyZWFtIG9mIHRoaXMuX3BlbmRpbmdVbnB1Ymxpc2hTdHJlYW1zKSB7XG4gICAgICAgIGlmICghc3RyZWFtLnN0cmVhbSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fcGMuZ2V0VHJhbnNjZWl2ZXJzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5fcGMucmVtb3ZlVHJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHRyYW5zY2VpdmVyIG9mIHRoaXMuX3BjLmdldFRyYW5zY2VpdmVycygpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHN0cmVhbS5zdHJlYW0uZ2V0VHJhY2tzKCkpIHtcbiAgICAgICAgICAgICAgaWYgKHRyYW5zY2VpdmVyLnNlbmRlci50cmFjayA9PSB0cmFjaykge1xuICAgICAgICAgICAgICAgIGlmICh0cmFuc2NlaXZlci5kaXJlY3Rpb24gPT09ICdzZW5kb25seScpIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zY2VpdmVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fcGMucmVtb3ZlVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2dnZXIuZGVidWcoXG4gICAgICAgICAgICAgICdnZXRTZW5kZXIgb3IgcmVtb3ZlVHJhY2sgaXMgbm90IHN1cHBvcnRlZCwgZmFsbGJhY2sgdG8gJyArXG4gICAgICAgICAgICAgICdyZW1vdmVTdHJlYW0uJyk7XG4gICAgICAgICAgdGhpcy5fcGMucmVtb3ZlU3RyZWFtKHN0cmVhbS5zdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VucHVibGlzaFByb21pc2VzLmdldChzdHJlYW0uc3RyZWFtLmlkKS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuZGVsZXRlKHN0cmVhbSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9wZW5kaW5nVW5wdWJsaXNoU3RyZWFtcy5sZW5ndGggPSAwO1xuICAgIH1cbiAgfVxuXG4gIF9kcmFpblBlbmRpbmdSZW1vdGVJY2VDYW5kaWRhdGVzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcmVtb3RlSWNlQ2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdBZGQgY2FuZGlkYXRlJyk7XG4gICAgICB0aGlzLl9wYy5hZGRJY2VDYW5kaWRhdGUodGhpcy5fcmVtb3RlSWNlQ2FuZGlkYXRlc1tpXSkuY2F0Y2goKGVycm9yKT0+e1xuICAgICAgICBMb2dnZXIud2FybmluZygnRXJyb3IgcHJvY2Vzc2luZyBJQ0UgY2FuZGlkYXRlOiAnK2Vycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9yZW1vdGVJY2VDYW5kaWRhdGVzLmxlbmd0aCA9IDA7XG4gIH1cblxuICBfZHJhaW5QZW5kaW5nTWVzc2FnZXMoKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdEcmFpbmluZyBwZW5kaW5nIG1lc3NhZ2VzLicpO1xuICAgIGlmICh0aGlzLl9wZW5kaW5nTWVzc2FnZXMubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGMgPSB0aGlzLl9kYXRhQ2hhbm5lbHMuZ2V0KERhdGFDaGFubmVsTGFiZWwuTUVTU0FHRSk7XG4gICAgaWYgKGRjICYmIGRjLnJlYWR5U3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wZW5kaW5nTWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICAgJ1NlbmRpbmcgbWVzc2FnZSB2aWEgZGF0YSBjaGFubmVsOiAnICsgdGhpcy5fcGVuZGluZ01lc3NhZ2VzW2ldKTtcbiAgICAgICAgZGMuc2VuZChKU09OLnN0cmluZ2lmeSh0aGlzLl9wZW5kaW5nTWVzc2FnZXNbaV0pKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gdGhpcy5fcGVuZGluZ01lc3NhZ2VzW2ldLmlkO1xuICAgICAgICBpZiAodGhpcy5fc2VuZERhdGFQcm9taXNlcy5oYXMobWVzc2FnZUlkKSkge1xuICAgICAgICAgIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMuZ2V0KG1lc3NhZ2VJZCkucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9wZW5kaW5nTWVzc2FnZXMubGVuZ3RoID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BjICYmIHRoaXMuX3BjLmNvbm5lY3Rpb25TdGF0ZSAhPT0gJ2Nsb3NlZCcgJiYgIWRjKSB7XG4gICAgICB0aGlzLl9jcmVhdGVEYXRhQ2hhbm5lbChEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpO1xuICAgIH1cbiAgfVxuXG4gIF9zZW5kU3RyZWFtSW5mbyhzdHJlYW0pIHtcbiAgICBpZiAoIXN0cmVhbSB8fCAhc3RyZWFtLm1lZGlhU3RyZWFtKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lMTEVHQUxfQVJHVU1FTlQpO1xuICAgIH1cbiAgICBjb25zdCBpbmZvID0gW107XG4gICAgc3RyZWFtLm1lZGlhU3RyZWFtLmdldFRyYWNrcygpLm1hcCgodHJhY2spID0+IHtcbiAgICAgIGluZm8ucHVzaCh7XG4gICAgICAgIGlkOiB0cmFjay5pZCxcbiAgICAgICAgc291cmNlOiBzdHJlYW0uc291cmNlW3RyYWNrLmtpbmRdLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFt0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLlRSQUNLX1NPVVJDRVMsXG4gICAgICAgIGluZm8pLFxuICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuU1RSRUFNX0lORk8sIHtcbiAgICAgIGlkOiBzdHJlYW0ubWVkaWFTdHJlYW0uaWQsXG4gICAgICBhdHRyaWJ1dGVzOiBzdHJlYW0uYXR0cmlidXRlcyxcbiAgICAgIC8vIFRyYWNrIElEcyBtYXkgbm90IG1hdGNoIGF0IHNlbmRlciBhbmQgcmVjZWl2ZXIgc2lkZXMuXG4gICAgICB0cmFja3M6IEFycmF5LmZyb20oaW5mbywgKGl0ZW0pID0+IGl0ZW0uaWQpLFxuICAgICAgLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yIFNhZmFyaS4gUGxlYXNlIHVzZSB0cmFjay1zb3VyY2VzIGlmIHBvc3NpYmxlLlxuICAgICAgc291cmNlOiBzdHJlYW0uc291cmNlLFxuICAgIH0pLFxuICAgIF0pO1xuICB9XG5cbiAgX2hhbmRsZVJlbW90ZUNhcGFiaWxpdHkodWEpIHtcbiAgICBpZiAodWEuc2RrICYmIHVhLnNkayAmJiB1YS5zZGsudHlwZSA9PT0gJ0phdmFTY3JpcHQnICYmIHVhLnJ1bnRpbWUgJiZcbiAgICAgICAgdWEucnVudGltZS5uYW1lID09PSAnRmlyZWZveCcpIHtcbiAgICAgIHRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1JlbW92ZVN0cmVhbSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7IC8vIFJlbW90ZSBzaWRlIGlzIGlPUy9BbmRyb2lkL0MrKyB3aGljaCB1c2VzIEdvb2dsZSdzIFdlYlJUQyBzdGFjay5cbiAgICAgIHRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1JlbW92ZVN0cmVhbSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh1YS5jYXBhYmlsaXRpZXMpIHtcbiAgICAgIHRoaXMuX3JlbW90ZVNpZGVJZ25vcmVzRGF0YUNoYW5uZWxBY2tzID1cbiAgICAgICAgICB1YS5jYXBhYmlsaXRpZXMuaWdub3JlRGF0YUNoYW5uZWxBY2tzO1xuICAgIH1cbiAgfVxuXG4gIF9kb05lZ290aWF0ZSgpIHtcbiAgICB0aGlzLl9jcmVhdGVBbmRTZW5kT2ZmZXIoKTtcbiAgfVxuXG4gIF9zZXRDb2RlY09yZGVyKHNkcCkge1xuICAgIGlmICh0aGlzLl9jb25maWcuYXVkaW9FbmNvZGluZ3MpIHtcbiAgICAgIGNvbnN0IGF1ZGlvQ29kZWNOYW1lcyA9IEFycmF5LmZyb20odGhpcy5fY29uZmlnLmF1ZGlvRW5jb2RpbmdzLFxuICAgICAgICAgIChlbmNvZGluZ1BhcmFtZXRlcnMpID0+IGVuY29kaW5nUGFyYW1ldGVycy5jb2RlYy5uYW1lKTtcbiAgICAgIHNkcCA9IFNkcFV0aWxzLnJlb3JkZXJDb2RlY3Moc2RwLCAnYXVkaW8nLCBhdWRpb0NvZGVjTmFtZXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29uZmlnLnZpZGVvRW5jb2RpbmdzKSB7XG4gICAgICBjb25zdCB2aWRlb0NvZGVjTmFtZXMgPSBBcnJheS5mcm9tKHRoaXMuX2NvbmZpZy52aWRlb0VuY29kaW5ncyxcbiAgICAgICAgICAoZW5jb2RpbmdQYXJhbWV0ZXJzKSA9PiBlbmNvZGluZ1BhcmFtZXRlcnMuY29kZWMubmFtZSk7XG4gICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ3ZpZGVvJywgdmlkZW9Db2RlY05hbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIF9zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hdWRpb0VuY29kaW5ncyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNkcCA9IFNkcFV0aWxzLnNldE1heEJpdHJhdGUoc2RwLCBvcHRpb25zLmF1ZGlvRW5jb2RpbmdzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnZpZGVvRW5jb2RpbmdzID09PSAnb2JqZWN0Jykge1xuICAgICAgc2RwID0gU2RwVXRpbHMuc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMudmlkZW9FbmNvZGluZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX3NldFJ0cFNlbmRlck9wdGlvbnMoc2RwLCBvcHRpb25zKSB7XG4gICAgc2RwID0gdGhpcy5fc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBfc2V0UnRwUmVjZWl2ZXJPcHRpb25zKHNkcCkge1xuICAgIHNkcCA9IHRoaXMuX3NldENvZGVjT3JkZXIoc2RwKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX2NyZWF0ZUFuZFNlbmRPZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuX3BjKSB7XG4gICAgICBMb2dnZXIuZXJyb3IoJ1BlZXIgY29ubmVjdGlvbiBoYXZlIG5vdCBiZWVuIGNyZWF0ZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2lzTmVnb3RpYXRpb25OZWVkZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9wYy5jcmVhdGVPZmZlcigpLnRoZW4oKGRlc2MpID0+IHtcbiAgICAgIGRlc2Muc2RwID0gdGhpcy5fc2V0UnRwUmVjZWl2ZXJPcHRpb25zKGRlc2Muc2RwKTtcbiAgICAgIGlmICh0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ3N0YWJsZScgJiYgIXRoaXMuX3NldHRpbmdMb2NhbFNkcCAmJlxuICAgICAgICAgICF0aGlzLl9zZXR0aW5nUmVtb3RlU2RwKSB7XG4gICAgICAgIHRoaXMuX3NldHRpbmdMb2NhbFNkcCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYy5zZXRMb2NhbERlc2NyaXB0aW9uKGRlc2MpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NldHRpbmdMb2NhbFNkcCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zZW5kU2RwKHRoaXMuX3BjLmxvY2FsRGVzY3JpcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKGUubWVzc2FnZSk7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihFcnJvck1vZHVsZS5lcnJvcnMuUDJQX1dFQlJUQ19TRFAsXG4gICAgICAgICAgZS5tZXNzYWdlKTtcbiAgICAgIHRoaXMuX3N0b3AoZXJyb3IsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX2NyZWF0ZUFuZFNlbmRBbnN3ZXIoKSB7XG4gICAgdGhpcy5fZHJhaW5QZW5kaW5nU3RyZWFtcygpO1xuICAgIHRoaXMuX2lzTmVnb3RpYXRpb25OZWVkZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9wYy5jcmVhdGVBbnN3ZXIoKS50aGVuKChkZXNjKSA9PiB7XG4gICAgICBkZXNjLnNkcCA9IHRoaXMuX3NldFJ0cFJlY2VpdmVyT3B0aW9ucyhkZXNjLnNkcCk7XG4gICAgICB0aGlzLl9sb2dDdXJyZW50QW5kUGVuZGluZ0xvY2FsRGVzY3JpcHRpb24oKTtcbiAgICAgIHRoaXMuX3NldHRpbmdMb2NhbFNkcCA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5fcGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjKS50aGVuKCgpPT57XG4gICAgICAgIHRoaXMuX3NldHRpbmdMb2NhbFNkcCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSkudGhlbigoKT0+e1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbmRTZHAodGhpcy5fcGMubG9jYWxEZXNjcmlwdGlvbik7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIExvZ2dlci5lcnJvcihlLm1lc3NhZ2UgKyAnIFBsZWFzZSBjaGVjayB5b3VyIGNvZGVjIHNldHRpbmdzLicpO1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9XRUJSVENfU0RQLFxuICAgICAgICAgIGUubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdG9wKGVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9sb2dDdXJyZW50QW5kUGVuZGluZ0xvY2FsRGVzY3JpcHRpb24oKSB7XG4gICAgTG9nZ2VyLmluZm8oJ0N1cnJlbnQgZGVzY3JpcHRpb246ICcgKyB0aGlzLl9wYy5jdXJyZW50TG9jYWxEZXNjcmlwdGlvbik7XG4gICAgTG9nZ2VyLmluZm8oJ1BlbmRpbmcgZGVzY3JpcHRpb246ICcgKyB0aGlzLl9wYy5wZW5kaW5nTG9jYWxEZXNjcmlwdGlvbik7XG4gIH1cblxuICBfZ2V0QW5kRGVsZXRlVHJhY2tTb3VyY2VJbmZvKHRyYWNrcykge1xuICAgIGlmICh0cmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdHJhY2tJZCA9IHRyYWNrc1swXS5pZDtcbiAgICAgIGlmICh0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8uaGFzKHRyYWNrSWQpKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZUluZm8gPSB0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8uZ2V0KHRyYWNrSWQpO1xuICAgICAgICB0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8uZGVsZXRlKHRyYWNrSWQpO1xuICAgICAgICByZXR1cm4gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzb3VyY2UgaW5mbyBmb3IgJyArIHRyYWNrSWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF91bnB1Ymxpc2goc3RyZWFtKSB7XG4gICAgaWYgKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHwgIXRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1JlbW92ZVN0cmVhbSkge1xuICAgICAgLy8gQWN0dWFsbHkgdW5wdWJsaXNoIGlzIHN1cHBvcnRlZC4gSXQgaXMgYSBsaXR0bGUgYml0IGNvbXBsZXggc2luY2VcbiAgICAgIC8vIEZpcmVmb3ggaW1wbGVtZW50ZWQgV2ViUlRDIHNwZWMgd2hpbGUgQ2hyb21lIGltcGxlbWVudGVkIGFuIG9sZCBBUEkuXG4gICAgICBMb2dnZXIuZXJyb3IoXG4gICAgICAgICAgJ1N0b3BwaW5nIGEgcHVibGljYXRpb24gaXMgbm90IHN1cHBvcnRlZCBvbiBGaXJlZm94LiBQbGVhc2UgdXNlICcgK1xuICAgICAgICAgICdQMlBDbGllbnQuc3RvcCgpIHRvIHN0b3AgdGhlIGNvbm5lY3Rpb24gd2l0aCByZW1vdGUgZW5kcG9pbnQuJyxcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX1VOU1VQUE9SVEVEX01FVEhPRCkpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuaGFzKHN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSUxMRUdBTF9BUkdVTUVOVCkpO1xuICAgIH1cbiAgICB0aGlzLl9wZW5kaW5nVW5wdWJsaXNoU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3VucHVibGlzaFByb21pc2VzLnNldChzdHJlYW0ubWVkaWFTdHJlYW0uaWQsIHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2RyYWluUGVuZGluZ1N0cmVhbXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSB8X3BjfCBpcyBhdmFpbGFibGUgYmVmb3JlIGNhbGxpbmcgdGhpcyBtZXRob2QuXG4gIF9jcmVhdGVEYXRhQ2hhbm5lbChsYWJlbCkge1xuICAgIGlmICh0aGlzLl9kYXRhQ2hhbm5lbHMuaGFzKGxhYmVsKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0RhdGEgY2hhbm5lbCBsYWJlbGVkICcrIGxhYmVsKycgYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fcGMpIHtcbiAgICAgIExvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAnUGVlckNvbm5lY3Rpb24gaXMgbm90IGF2YWlsYWJsZSBiZWZvcmUgY3JlYXRpbmcgRGF0YUNoYW5uZWwuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIExvZ2dlci5kZWJ1ZygnQ3JlYXRlIGRhdGEgY2hhbm5lbC4nKTtcbiAgICBjb25zdCBkYyA9IHRoaXMuX3BjLmNyZWF0ZURhdGFDaGFubmVsKGxhYmVsKTtcbiAgICB0aGlzLl9iaW5kRXZlbnRzVG9EYXRhQ2hhbm5lbChkYyk7XG4gICAgdGhpcy5fZGF0YUNoYW5uZWxzLnNldChEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UsIGRjKTtcbiAgfVxuXG4gIF9iaW5kRXZlbnRzVG9EYXRhQ2hhbm5lbChkYykge1xuICAgIGRjLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25EYXRhQ2hhbm5lbE1lc3NhZ2UuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICBkYy5vbm9wZW4gPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uRGF0YUNoYW5uZWxPcGVuLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgZGMub25jbG9zZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25EYXRhQ2hhbm5lbENsb3NlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgZGMub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdEYXRhIENoYW5uZWwgRXJyb3I6ICcgKyBldmVudCk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYWxsIE1lZGlhU3RyZWFtcyBpdCBiZWxvbmdzIHRvLlxuICBfZ2V0U3RyZWFtQnlUcmFjayhtZWRpYVN0cmVhbVRyYWNrKSB7XG4gICAgY29uc3Qgc3RyZWFtcyA9IFtdO1xuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBpbmZvXSBvZiB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvKSB7XG4gICAgICBpZiAoIWluZm8uc3RyZWFtIHx8ICFpbmZvLnN0cmVhbS5tZWRpYVN0cmVhbSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgdHJhY2sgb2YgaW5mby5zdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkpIHtcbiAgICAgICAgaWYgKG1lZGlhU3RyZWFtVHJhY2sgPT09IHRyYWNrKSB7XG4gICAgICAgICAgc3RyZWFtcy5wdXNoKGluZm8uc3RyZWFtLm1lZGlhU3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyZWFtcztcbiAgfVxuXG4gIF9hcmVBbGxUcmFja3NFbmRlZChtZWRpYVN0cmVhbSkge1xuICAgIGZvciAoY29uc3QgdHJhY2sgb2YgbWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkpIHtcbiAgICAgIGlmICh0cmFjay5yZWFkeVN0YXRlID09PSAnbGl2ZScpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF9zdG9wKGVycm9yLCBub3RpZnlSZW1vdGUpIHtcbiAgICBsZXQgcHJvbWlzZUVycm9yID0gZXJyb3I7XG4gICAgaWYgKCFwcm9taXNlRXJyb3IpIHtcbiAgICAgIHByb21pc2VFcnJvciA9IG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9VTktOT1dOKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbLyogbGFiZWwgKi8sIGRjXSBvZiB0aGlzLl9kYXRhQ2hhbm5lbHMpIHtcbiAgICAgIGRjLmNsb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGFDaGFubmVscy5jbGVhcigpO1xuICAgIGlmICh0aGlzLl9wYyAmJiB0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgIT09ICdjbG9zZWQnKSB7XG4gICAgICB0aGlzLl9wYy5jbG9zZSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHJvbWlzZV0gb2YgdGhpcy5fcHVibGlzaFByb21pc2VzKSB7XG4gICAgICBwcm9taXNlLnJlamVjdChwcm9taXNlRXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuY2xlYXIoKTtcbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHJvbWlzZV0gb2YgdGhpcy5fdW5wdWJsaXNoUHJvbWlzZXMpIHtcbiAgICAgIHByb21pc2UucmVqZWN0KHByb21pc2VFcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX3VucHVibGlzaFByb21pc2VzLmNsZWFyKCk7XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHByb21pc2VdIG9mIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMpIHtcbiAgICAgIHByb21pc2UucmVqZWN0KHByb21pc2VFcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMuY2xlYXIoKTtcbiAgICAvLyBGaXJlIGVuZGVkIGV2ZW50IGlmIHB1YmxpY2F0aW9uIG9yIHJlbW90ZSBzdHJlYW0gZXhpc3RzLlxuICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuZm9yRWFjaCgocHVibGljYXRpb24pID0+IHtcbiAgICAgIHB1YmxpY2F0aW9uLmRpc3BhdGNoRXZlbnQobmV3IE93dEV2ZW50KCdlbmRlZCcpKTtcbiAgICB9KTtcbiAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1zLmNsZWFyKCk7XG4gICAgdGhpcy5fcmVtb3RlU3RyZWFtcy5mb3JFYWNoKChzdHJlYW0pID0+IHtcbiAgICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KG5ldyBPd3RFdmVudCgnZW5kZWQnKSk7XG4gICAgfSk7XG4gICAgdGhpcy5fcmVtb3RlU3RyZWFtcyA9IFtdO1xuICAgIGlmICghdGhpcy5fZGlzcG9zZWQpIHtcbiAgICAgIGlmIChub3RpZnlSZW1vdGUpIHtcbiAgICAgICAgbGV0IHNlbmRFcnJvcjtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgc2VuZEVycm9yID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgIC8vIEF2b2lkIHRvIGxlYWsgZGV0YWlsZWQgZXJyb3IgdG8gcmVtb3RlIHNpZGUuXG4gICAgICAgICAgc2VuZEVycm9yLm1lc3NhZ2UgPSAnRXJyb3IgaGFwcGVuZWQgYXQgcmVtb3RlIHNpZGUuJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLkNMT1NFRCwgc2VuZEVycm9yKS5jYXRjaChcbiAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKCdGYWlsZWQgdG8gc2VuZCBjbG9zZS4nICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdlbmRlZCcpKTtcbiAgICB9XG4gIH1cblxuICBfc2V0U3RyZWFtVG9SZW1vdGVTdHJlYW1JbmZvKG1lZGlhU3RyZWFtKSB7XG4gICAgY29uc3QgaW5mbyA9IHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KG1lZGlhU3RyZWFtLmlkKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gaW5mby5hdHRyaWJ1dGVzO1xuICAgIGNvbnN0IHNvdXJjZUluZm8gPSBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbVNvdXJjZUluZm8odGhpcy5fcmVtb3RlU3RyZWFtSW5mb1xuICAgICAgICAuZ2V0KG1lZGlhU3RyZWFtLmlkKS5zb3VyY2UuYXVkaW8sIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KFxuICAgICAgICBtZWRpYVN0cmVhbS5pZClcbiAgICAgICAgLnNvdXJjZS52aWRlbyk7XG4gICAgaW5mby5zdHJlYW0gPSBuZXcgU3RyZWFtTW9kdWxlLlJlbW90ZVN0cmVhbShcbiAgICAgICAgdW5kZWZpbmVkLCB0aGlzLl9yZW1vdGVJZCwgbWVkaWFTdHJlYW0sXG4gICAgICAgIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpO1xuICAgIGluZm8ubWVkaWFTdHJlYW0gPSBtZWRpYVN0cmVhbTtcbiAgICBjb25zdCBzdHJlYW0gPSBpbmZvLnN0cmVhbTtcbiAgICBpZiAoc3RyZWFtKSB7XG4gICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ZhaWxlZCB0byBjcmVhdGUgUmVtb3RlU3RyZWFtLicpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGVja0ljZUNvbm5lY3Rpb25TdGF0ZUFuZEZpcmVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29ubmVjdGVkJyB8fFxuICAgICAgICB0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgaW5mb10gb2YgdGhpcy5fcmVtb3RlU3RyZWFtSW5mbykge1xuICAgICAgICBpZiAoaW5mby5tZWRpYVN0cmVhbSkge1xuICAgICAgICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IFN0cmVhbU1vZHVsZS5TdHJlYW1FdmVudCgnc3RyZWFtYWRkZWQnLCB7XG4gICAgICAgICAgICBzdHJlYW06IGluZm8uc3RyZWFtLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2YgaW5mby5tZWRpYVN0cmVhbS5nZXRUcmFja3MoKSkge1xuICAgICAgICAgICAgdHJhY2suYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWVkaWFTdHJlYW1zID0gdGhpcy5fZ2V0U3RyZWFtQnlUcmFjayhldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IG1lZGlhU3RyZWFtIG9mIG1lZGlhU3RyZWFtcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hcmVBbGxUcmFja3NFbmRlZChtZWRpYVN0cmVhbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX29uUmVtb3RlU3RyZWFtUmVtb3ZlZCh7c3RyZWFtOiBtZWRpYVN0cmVhbX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuVFJBQ0tTX0FEREVELCBpbmZvLnRyYWNrSWRzKTtcbiAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChpbmZvLm1lZGlhU3RyZWFtLmlkKS5tZWRpYVN0cmVhbSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHN0cmVhbUV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWw7XG4iXX0=
