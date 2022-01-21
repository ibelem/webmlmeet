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
                  var t, transceiverDescription, internalId, offer, trackOptions, publishResp, publicationId, messageEvent;
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
                          });

                        case 20:
                          publishResp = _context.sent;
                          publicationId = publishResp.id;
                          messageEvent = new _event.MessageEvent('id', {
                            message: publicationId,
                            origin: _this2._remoteId
                          });

                          _this2.dispatchEvent(messageEvent);

                          _this2._id = publishResp.transportId;
                          _this2._publishTransceivers.get(internalId).id = publicationId;

                          _this2._reverseIdMap.set(publicationId, internalId);

                          _context.next = 29;
                          return _this2._signaling.sendSignalingMessage('soac', {
                            id: _this2._id,
                            signaling: offer
                          });

                        case 29:
                          return _context.abrupt("return", {
                            v: new Promise(function (resolve, reject) {
                              _this2._publishPromises.set(internalId, {
                                resolve: resolve,
                                reject: reject
                              });
                            })
                          });

                        case 30:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pc05hdGl2ZUZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXIuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwic3JjL3Nkay9iYXNlL2Jhc2U2NC5qcyIsInNyYy9zZGsvYmFzZS9jb2RlYy5qcyIsInNyYy9zZGsvYmFzZS9ldmVudC5qcyIsInNyYy9zZGsvYmFzZS9leHBvcnQuanMiLCJzcmMvc2RrL2Jhc2UvbG9nZ2VyLmpzIiwic3JjL3Nkay9iYXNlL21lZGlhZm9ybWF0LmpzIiwic3JjL3Nkay9iYXNlL21lZGlhc3RyZWFtLWZhY3RvcnkuanMiLCJzcmMvc2RrL2Jhc2UvcHVibGljYXRpb24uanMiLCJzcmMvc2RrL2Jhc2Uvc2RwdXRpbHMuanMiLCJzcmMvc2RrL2Jhc2Uvc3RyZWFtLmpzIiwic3JjL3Nkay9iYXNlL3RyYW5zcG9ydC5qcyIsInNyYy9zZGsvYmFzZS91dGlscy5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9jaGFubmVsLmpzIiwic3JjL3Nkay9jb25mZXJlbmNlL2NsaWVudC5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9lcnJvci5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9leHBvcnQuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvaW5mby5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9taXhlZHN0cmVhbS5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9wYXJ0aWNpcGFudC5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9xdWljY29ubmVjdGlvbi5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9zaWduYWxpbmcuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2Uvc3RyZWFtdXRpbHMuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2Uvc3Vic2NyaXB0aW9uLmpzIiwic3JjL3Nkay9leHBvcnQuanMiLCJzcmMvc2RrL3AycC9lcnJvci5qcyIsInNyYy9zZGsvcDJwL2V4cG9ydC5qcyIsInNyYy9zZGsvcDJwL3AycGNsaWVudC5qcyIsInNyYy9zZGsvcDJwL3BlZXJjb25uZWN0aW9uLWNoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTs7QUFBQTtBQUlwQiwwRUFBa0Q7QUFBQSxzQkFBdkMsS0FBdUM7QUFDaEQsa0JBQUEsS0FBSyxDQUFDLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUMsS0FBRCxFQUFXO0FBQ3pDLHdCQUFNLFlBQVksR0FBRyxPQUFJLENBQUMsaUJBQUwsQ0FBdUIsS0FBSyxDQUFDLE1BQTdCLENBQXJCOztBQUR5QyxpRUFFZixZQUZlO0FBQUE7O0FBQUE7QUFFekMsZ0ZBQXdDO0FBQUEsNEJBQTdCLFdBQTZCOztBQUN0Qyw0QkFBSSxPQUFJLENBQUMsa0JBQUwsQ0FBd0IsV0FBeEIsQ0FBSixFQUEwQztBQUN4QywwQkFBQSxPQUFJLENBQUMsc0JBQUwsQ0FBNEI7QUFBQyw0QkFBQSxNQUFNLEVBQUU7QUFBVCwyQkFBNUI7QUFDRDtBQUNGO0FBTndDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPMUMsbUJBUEQ7QUFRRDtBQWJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNwQixtQkFBSyxxQkFBTCxDQUEyQixhQUFhLENBQUMsWUFBekMsRUFBdUQsSUFBSSxDQUFDLFFBQTVEOztBQUNBLG1CQUFLLGlCQUFMLENBQXVCLEdBQXZCLENBQTJCLElBQUksQ0FBQyxXQUFMLENBQWlCLEVBQTVDLEVBQWdELFdBQWhELEdBQThELElBQTlEO0FBQ0EsbUJBQUssYUFBTCxDQUFtQixXQUFuQjtBQUNEO0FBQ0Y7QUFwQjhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQmhEO0FBQ0Y7OztFQXpnQ29DLHNCOztlQTRnQ3hCLHdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG52YXIgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gcmVxdWlyZShcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVGdW5jdGlvbjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxudmFyIGlzTmF0aXZlRnVuY3Rpb24gPSByZXF1aXJlKFwiLi9pc05hdGl2ZUZ1bmN0aW9uLmpzXCIpO1xuXG52YXIgY29uc3RydWN0ID0gcmVxdWlyZShcIi4vY29uc3RydWN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3dyYXBOYXRpdmVTdXBlcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiLy8gTUlUIExpY2Vuc2Vcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTIgVW5pdmVyc2lkYWQgUG9saXTDqWNuaWNhIGRlIE1hZHJpZFxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuLy8gU09GVFdBUkUuXG5cbi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLy8gVGhpcyBmaWxlIGlzIGJvcnJvd2VkIGZyb20gbHluY2tpYS9saWNvZGUgd2l0aCBzb21lIG1vZGlmaWNhdGlvbnMuXG5cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCBjb25zdCBCYXNlNjQgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IEVORF9PRl9JTlBVVCA9IC0xO1xuICBsZXQgYmFzZTY0U3RyO1xuICBsZXQgYmFzZTY0Q291bnQ7XG5cbiAgbGV0IGk7XG5cbiAgY29uc3QgYmFzZTY0Q2hhcnMgPSBbXG4gICAgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsXG4gICAgJ0knLCAnSicsICdLJywgJ0wnLCAnTScsICdOJywgJ08nLCAnUCcsXG4gICAgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsXG4gICAgJ1knLCAnWicsICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsXG4gICAgJ2cnLCAnaCcsICdpJywgJ2onLCAnaycsICdsJywgJ20nLCAnbicsXG4gICAgJ28nLCAncCcsICdxJywgJ3InLCAncycsICd0JywgJ3UnLCAndicsXG4gICAgJ3cnLCAneCcsICd5JywgJ3onLCAnMCcsICcxJywgJzInLCAnMycsXG4gICAgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJysnLCAnLycsXG4gIF07XG5cbiAgY29uc3QgcmV2ZXJzZUJhc2U2NENoYXJzID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IGJhc2U2NENoYXJzLmxlbmd0aDsgaSA9IGkgKyAxKSB7XG4gICAgcmV2ZXJzZUJhc2U2NENoYXJzW2Jhc2U2NENoYXJzW2ldXSA9IGk7XG4gIH1cblxuICBjb25zdCBzZXRCYXNlNjRTdHIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBiYXNlNjRTdHIgPSBzdHI7XG4gICAgYmFzZTY0Q291bnQgPSAwO1xuICB9O1xuXG4gIGNvbnN0IHJlYWRCYXNlNjQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWJhc2U2NFN0cikge1xuICAgICAgcmV0dXJuIEVORF9PRl9JTlBVVDtcbiAgICB9XG4gICAgaWYgKGJhc2U2NENvdW50ID49IGJhc2U2NFN0ci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBFTkRfT0ZfSU5QVVQ7XG4gICAgfVxuICAgIGNvbnN0IGMgPSBiYXNlNjRTdHIuY2hhckNvZGVBdChiYXNlNjRDb3VudCkgJiAweGZmO1xuICAgIGJhc2U2NENvdW50ID0gYmFzZTY0Q291bnQgKyAxO1xuICAgIHJldHVybiBjO1xuICB9O1xuXG4gIGNvbnN0IGVuY29kZUJhc2U2NCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGRvbmU7XG4gICAgc2V0QmFzZTY0U3RyKHN0cik7XG4gICAgcmVzdWx0ID0gJyc7XG4gICAgY29uc3QgaW5CdWZmZXIgPSBuZXcgQXJyYXkoMyk7XG4gICAgZG9uZSA9IGZhbHNlO1xuICAgIHdoaWxlICghZG9uZSAmJiAoaW5CdWZmZXJbMF0gPSByZWFkQmFzZTY0KCkpICE9PSBFTkRfT0ZfSU5QVVQpIHtcbiAgICAgIGluQnVmZmVyWzFdID0gcmVhZEJhc2U2NCgpO1xuICAgICAgaW5CdWZmZXJbMl0gPSByZWFkQmFzZTY0KCk7XG4gICAgICByZXN1bHQgPSByZXN1bHQgKyAoYmFzZTY0Q2hhcnNbaW5CdWZmZXJbMF0gPj4gMl0pO1xuICAgICAgaWYgKGluQnVmZmVyWzFdICE9PSBFTkRfT0ZfSU5QVVQpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKGJhc2U2NENoYXJzWygoaW5CdWZmZXJbMF0gPDwgNCkgJiAweDMwKSB8IChcbiAgICAgICAgICBpbkJ1ZmZlclsxXSA+PiA0KV0pO1xuICAgICAgICBpZiAoaW5CdWZmZXJbMl0gIT09IEVORF9PRl9JTlBVVCkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIChiYXNlNjRDaGFyc1soKGluQnVmZmVyWzFdIDw8IDIpICYgMHgzYykgfCAoXG4gICAgICAgICAgICBpbkJ1ZmZlclsyXSA+PiA2KV0pO1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIChiYXNlNjRDaGFyc1tpbkJ1ZmZlclsyXSAmIDB4M0ZdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAoYmFzZTY0Q2hhcnNbKChpbkJ1ZmZlclsxXSA8PCAyKSAmIDB4M2MpXSk7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKCc9Jyk7XG4gICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIChiYXNlNjRDaGFyc1soKGluQnVmZmVyWzBdIDw8IDQpICYgMHgzMCldKTtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKCc9Jyk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICgnPScpO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCByZWFkUmV2ZXJzZUJhc2U2NCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghYmFzZTY0U3RyKSB7XG4gICAgICByZXR1cm4gRU5EX09GX0lOUFVUO1xuICAgIH1cbiAgICB3aGlsZSAodHJ1ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgaWYgKGJhc2U2NENvdW50ID49IGJhc2U2NFN0ci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIEVORF9PRl9JTlBVVDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5leHRDaGFyYWN0ZXIgPSBiYXNlNjRTdHIuY2hhckF0KGJhc2U2NENvdW50KTtcbiAgICAgIGJhc2U2NENvdW50ID0gYmFzZTY0Q291bnQgKyAxO1xuICAgICAgaWYgKHJldmVyc2VCYXNlNjRDaGFyc1tuZXh0Q2hhcmFjdGVyXSkge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZUJhc2U2NENoYXJzW25leHRDaGFyYWN0ZXJdO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDaGFyYWN0ZXIgPT09ICdBJykge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbnRvcyA9IGZ1bmN0aW9uKG4pIHtcbiAgICBuID0gbi50b1N0cmluZygxNik7XG4gICAgaWYgKG4ubGVuZ3RoID09PSAxKSB7XG4gICAgICBuID0gJzAnICsgbjtcbiAgICB9XG4gICAgbiA9ICclJyArIG47XG4gICAgcmV0dXJuIHVuZXNjYXBlKG4pO1xuICB9O1xuXG4gIGNvbnN0IGRlY29kZUJhc2U2NCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGRvbmU7XG4gICAgc2V0QmFzZTY0U3RyKHN0cik7XG4gICAgcmVzdWx0ID0gJyc7XG4gICAgY29uc3QgaW5CdWZmZXIgPSBuZXcgQXJyYXkoNCk7XG4gICAgZG9uZSA9IGZhbHNlO1xuICAgIHdoaWxlICghZG9uZSAmJiAoaW5CdWZmZXJbMF0gPSByZWFkUmV2ZXJzZUJhc2U2NCgpKSAhPT0gRU5EX09GX0lOUFVUICYmXG4gICAgICAoaW5CdWZmZXJbMV0gPSByZWFkUmV2ZXJzZUJhc2U2NCgpKSAhPT0gRU5EX09GX0lOUFVUKSB7XG4gICAgICBpbkJ1ZmZlclsyXSA9IHJlYWRSZXZlcnNlQmFzZTY0KCk7XG4gICAgICBpbkJ1ZmZlclszXSA9IHJlYWRSZXZlcnNlQmFzZTY0KCk7XG4gICAgICByZXN1bHQgPSByZXN1bHQgKyBudG9zKCgoKGluQnVmZmVyWzBdIDw8IDIpICYgMHhmZikgfCBpbkJ1ZmZlclsxXSA+PlxuICAgICAgICA0KSk7XG4gICAgICBpZiAoaW5CdWZmZXJbMl0gIT09IEVORF9PRl9JTlBVVCkge1xuICAgICAgICByZXN1bHQgKz0gbnRvcygoKChpbkJ1ZmZlclsxXSA8PCA0KSAmIDB4ZmYpIHwgaW5CdWZmZXJbMl0gPj4gMikpO1xuICAgICAgICBpZiAoaW5CdWZmZXJbM10gIT09IEVORF9PRl9JTlBVVCkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIG50b3MoKCgoaW5CdWZmZXJbMl0gPDwgNikgJiAweGZmKSB8IGluQnVmZmVyW1xuICAgICAgICAgICAgICAzXSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGVuY29kZUJhc2U2NDogZW5jb2RlQmFzZTY0LFxuICAgIGRlY29kZUJhc2U2NDogZGVjb2RlQmFzZTY0LFxuICB9O1xufSgpKTtcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBBdWRpb0NvZGVjXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgQXVkaW8gY29kZWMgZW51bWVyYXRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBBdWRpb0NvZGVjID0ge1xuICBQQ01VOiAncGNtdScsXG4gIFBDTUE6ICdwY21hJyxcbiAgT1BVUzogJ29wdXMnLFxuICBHNzIyOiAnZzcyMicsXG4gIElTQUM6ICdpU0FDJyxcbiAgSUxCQzogJ2lMQkMnLFxuICBBQUM6ICdhYWMnLFxuICBBQzM6ICdhYzMnLFxuICBORUxMWU1PU0VSOiAnbmVsbHltb3NlcicsXG59O1xuLyoqXG4gKiBAY2xhc3MgQXVkaW9Db2RlY1BhcmFtZXRlcnNcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBDb2RlYyBwYXJhbWV0ZXJzIGZvciBhbiBhdWRpbyB0cmFjay5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvQ29kZWNQYXJhbWV0ZXJzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IobmFtZSwgY2hhbm5lbENvdW50LCBjbG9ja1JhdGUpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9Db2RlY1BhcmFtZXRlcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBOYW1lIG9mIGEgY29kZWMuIFBsZWFzZSBhIHZhbHVlIGluIE93dC5CYXNlLkF1ZGlvQ29kZWMuIEhvd2V2ZXIsXG4gICAgICogc29tZSBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgYWxsIHRoZSB2YWx1ZXMgaW4gT3d0LkJhc2UuQXVkaW9Db2RlYy5cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGNoYW5uZWxDb3VudFxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb0NvZGVjUGFyYW1ldGVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIE51bWJlcnMgb2YgY2hhbm5lbHMgZm9yIGFuIGF1ZGlvIHRyYWNrLlxuICAgICAqL1xuICAgIHRoaXMuY2hhbm5lbENvdW50ID0gY2hhbm5lbENvdW50O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGNsb2NrUmF0ZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb0NvZGVjUGFyYW1ldGVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIFRoZSBjb2RlYyBjbG9jayByYXRlIGV4cHJlc3NlZCBpbiBIZXJ0ei5cbiAgICAgKi9cbiAgICB0aGlzLmNsb2NrUmF0ZSA9IGNsb2NrUmF0ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBBdWRpb0VuY29kaW5nUGFyYW1ldGVyc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIEVuY29kaW5nIHBhcmFtZXRlcnMgZm9yIHNlbmRpbmcgYW4gYXVkaW8gdHJhY2suXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBdWRpb0VuY29kaW5nUGFyYW1ldGVycyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjLCBtYXhCaXRyYXRlKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzfSBjb2RlY1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb0VuY29kaW5nUGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHRoaXMuY29kZWMgPSBjb2RlYztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBtYXhCaXRyYXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLkF1ZGlvRW5jb2RpbmdQYXJhbWV0ZXJzXG4gICAgICogQGRlc2MgTWF4IGJpdHJhdGUgZXhwcmVzc2VkIGluIGticHMuXG4gICAgICovXG4gICAgdGhpcy5tYXhCaXRyYXRlID0gbWF4Qml0cmF0ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBWaWRlb0NvZGVjXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgVmlkZW8gY29kZWMgZW51bWVyYXRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBWaWRlb0NvZGVjID0ge1xuICBWUDg6ICd2cDgnLFxuICBWUDk6ICd2cDknLFxuICBIMjY0OiAnaDI2NCcsXG4gIEgyNjU6ICdoMjY1JyxcbiAgQVYxOiAnYXYxJyxcbiAgLy8gTm9uLXN0YW5kYXJkIEFWMSwgd2lsbCBiZSByZW5hbWVkIHRvIEFWMS5cbiAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTExMDQyXG4gIEFWMVg6ICdhdjF4Jyxcbn07XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvQ29kZWNQYXJhbWV0ZXJzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgQ29kZWMgcGFyYW1ldGVycyBmb3IgYSB2aWRlbyB0cmFjay5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFZpZGVvQ29kZWNQYXJhbWV0ZXJzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IobmFtZSwgcHJvZmlsZSkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gbmFtZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb0NvZGVjUGFyYW1ldGVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIE5hbWUgb2YgYSBjb2RlYy5QbGVhc2UgYSB2YWx1ZSBpbiBPd3QuQmFzZS5BdWRpb0NvZGVjLkhvd2V2ZXIsXG4gICAgICAgc29tZSBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgYWxsIHRoZSB2YWx1ZXMgaW4gT3d0LkJhc2UuQXVkaW9Db2RlYy5cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9zdHJpbmd9IHByb2ZpbGVcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9Db2RlY1BhcmFtZXRlcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBUaGUgcHJvZmlsZSBvZiBhIGNvZGVjLiBQcm9maWxlIG1heSBub3QgYXBwbHkgdG8gYWxsIGNvZGVjcy5cbiAgICAgKi9cbiAgICB0aGlzLnByb2ZpbGUgPSBwcm9maWxlO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvRW5jb2RpbmdQYXJhbWV0ZXJzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgRW5jb2RpbmcgcGFyYW1ldGVycyBmb3Igc2VuZGluZyBhIHZpZGVvIHRyYWNrLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9FbmNvZGluZ1BhcmFtZXRlcnMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlYywgbWF4Qml0cmF0ZSkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5WaWRlb0NvZGVjUGFyYW1ldGVyc30gY29kZWNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9FbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjID0gY29kZWM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gbWF4Qml0cmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb0VuY29kaW5nUGFyYW1ldGVyc1xuICAgICAqIEBkZXNjIE1heCBiaXRyYXRlIGV4cHJlc3NlZCBpbiBrYnBzLlxuICAgICAqL1xuICAgIHRoaXMubWF4Qml0cmF0ZSA9IG1heEJpdHJhdGU7XG4gIH1cbn1cbiIsIi8vIE1JVCBMaWNlbnNlXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDEyIFVuaXZlcnNpZGFkIFBvbGl0w6ljbmljYSBkZSBNYWRyaWRcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbi8vIFNPRlRXQVJFLlxuXG4vLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8vIFRoaXMgZmlsZSBpcyBib3Jyb3dlZCBmcm9tIGx5bmNraWEvbGljb2RlIHdpdGggc29tZSBtb2RpZmljYXRpb25zLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGNsYXNzIEV2ZW50RGlzcGF0Y2hlclxuICogQGNsYXNzRGVzYyBBIHNoaW0gZm9yIEV2ZW50VGFyZ2V0LiBNaWdodCBiZSBjaGFuZ2VkIHRvIEV2ZW50VGFyZ2V0IGxhdGVyLlxuICogQG1lbWJlcm9mIE93dC5CYXNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBFdmVudERpc3BhdGNoZXIgPSBmdW5jdGlvbigpIHtcbiAgLy8gUHJpdmF0ZSB2YXJzXG4gIGNvbnN0IHNwZWMgPSB7fTtcbiAgc3BlYy5kaXNwYXRjaGVyID0ge307XG4gIHNwZWMuZGlzcGF0Y2hlci5ldmVudExpc3RlbmVycyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclxuICAgKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIHJlZ2lzdGVycyBhIGNhbGxiYWNrIGZ1bmN0aW9uIGFzIGEgaGFuZGxlciBmb3IgdGhlXG4gICAqIGNvcnJlc3BvbmRpbmcgZXZlbnQuIEl0J3Mgc2hvcnRlbmVkIGZvcm0gaXMgb24oZXZlbnRUeXBlLCBsaXN0ZW5lcikuIFNlZVxuICAgKiB0aGUgZXZlbnQgZGVzY3JpcHRpb24gaW4gdGhlIGZvbGxvd2luZyB0YWJsZS5cbiAgICogQGluc3RhbmNlXG4gICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBFdmVudCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgdGhpcy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnRUeXBlLCBsaXN0ZW5lcikge1xuICAgIGlmIChzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9IFtdO1xuICAgIH1cbiAgICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICogQGRlc2MgVGhpcyBmdW5jdGlvbiByZW1vdmVzIGEgcmVnaXN0ZXJlZCBldmVudCBsaXN0ZW5lci5cbiAgICogQGluc3RhbmNlXG4gICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBFdmVudCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnRUeXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGNsZWFyRXZlbnRMaXN0ZW5lclxuICAgKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYWxsIGV2ZW50IGxpc3RlbmVycyBmb3Igb25lIHR5cGUuXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgRXZlbnQgc3RyaW5nLlxuICAgKi9cbiAgdGhpcy5jbGVhckV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudFR5cGUpIHtcbiAgICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9IFtdO1xuICB9O1xuXG4gIC8vIEl0IGRpc3BhdGNoIGEgbmV3IGV2ZW50IHRvIHRoZSBldmVudCBsaXN0ZW5lcnMsIGJhc2VkIG9uIHRoZSB0eXBlXG4gIC8vIG9mIGV2ZW50LiBBbGwgZXZlbnRzIGFyZSBpbnRlbmRlZCB0byBiZSBMaWNvZGVFdmVudHMuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCFzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnQudHlwZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50LnR5cGVdLm1hcChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9O1xufTtcblxuLyoqXG4gKiBAY2xhc3MgT3d0RXZlbnRcbiAqIEBjbGFzc0Rlc2MgQ2xhc3MgT3d0RXZlbnQgcmVwcmVzZW50cyBhIGdlbmVyaWMgRXZlbnQgaW4gdGhlIGxpYnJhcnkuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgTWVzc2FnZUV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIE1lc3NhZ2VFdmVudCByZXByZXNlbnRzIGEgbWVzc2FnZSBFdmVudCBpbiB0aGUgbGlicmFyeS5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZUV2ZW50IGV4dGVuZHMgT3d0RXZlbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpbml0KSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBvcmlnaW5cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuTWVzc2FnZUV2ZW50XG4gICAgICogQGRlc2MgSUQgb2YgdGhlIHJlbW90ZSBlbmRwb2ludCB3aG8gcHVibGlzaGVkIHRoaXMgc3RyZWFtLlxuICAgICAqL1xuICAgIHRoaXMub3JpZ2luID0gaW5pdC5vcmlnaW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lc3NhZ2VFdmVudFxuICAgICAqL1xuICAgIHRoaXMubWVzc2FnZSA9IGluaXQubWVzc2FnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHRvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lc3NhZ2VFdmVudFxuICAgICAqIEBkZXNjIFZhbHVlcyBjb3VsZCBiZSBcImFsbFwiLCBcIm1lXCIgaW4gY29uZmVyZW5jZSBtb2RlLCBvciB1bmRlZmluZWQgaW5cbiAgICAgKiBQMlAgbW9kZS5cbiAgICAgKi9cbiAgICB0aGlzLnRvID0gaW5pdC50bztcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBFcnJvckV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIEVycm9yRXZlbnQgcmVwcmVzZW50cyBhbiBlcnJvciBFdmVudCBpbiB0aGUgbGlicmFyeS5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgRXJyb3JFdmVudCBleHRlbmRzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaW5pdCkge1xuICAgIHN1cGVyKHR5cGUpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Vycm9yfSBlcnJvclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5FcnJvckV2ZW50XG4gICAgICovXG4gICAgdGhpcy5lcnJvciA9IGluaXQuZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgTXV0ZUV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIE11dGVFdmVudCByZXByZXNlbnRzIGEgbXV0ZSBvciB1bm11dGUgZXZlbnQuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIE11dGVFdmVudCBleHRlbmRzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaW5pdCkge1xuICAgIHN1cGVyKHR5cGUpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlRyYWNrS2luZH0ga2luZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5NdXRlRXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLmtpbmQgPSBpbml0LmtpbmQ7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgKiBmcm9tICcuL21lZGlhc3RyZWFtLWZhY3RvcnkuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0uanMnO1xuZXhwb3J0ICogZnJvbSAnLi9tZWRpYWZvcm1hdC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zcG9ydC5qcyc7XG4iLCIvLyBNSVQgTGljZW5zZVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxMiBVbml2ZXJzaWRhZCBQb2xpdMOpY25pY2EgZGUgTWFkcmlkXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4vLyBTT0ZUV0FSRS5cblxuLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vLyBUaGlzIGZpbGUgaXMgYm9ycm93ZWQgZnJvbSBseW5ja2lhL2xpY29kZSB3aXRoIHNvbWUgbW9kaWZpY2F0aW9ucy5cblxuLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qXG4gKiBBUEkgdG8gd3JpdGUgbG9ncyBiYXNlZCBvbiB0cmFkaXRpb25hbCBsb2dnaW5nIG1lY2hhbmlzbXM6IGRlYnVnLCB0cmFjZSxcbiAqIGluZm8sIHdhcm5pbmcsIGVycm9yXG4gKi9cbmNvbnN0IExvZ2dlciA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgREVCVUcgPSAwO1xuICBjb25zdCBUUkFDRSA9IDE7XG4gIGNvbnN0IElORk8gPSAyO1xuICBjb25zdCBXQVJOSU5HID0gMztcbiAgY29uc3QgRVJST1IgPSA0O1xuICBjb25zdCBOT05FID0gNTtcblxuICBjb25zdCBub09wID0gZnVuY3Rpb24oKSB7fTtcblxuICAvLyB8dGhhdHwgaXMgdGhlIG9iamVjdCB0byBiZSByZXR1cm5lZC5cbiAgY29uc3QgdGhhdCA9IHtcbiAgICBERUJVRzogREVCVUcsXG4gICAgVFJBQ0U6IFRSQUNFLFxuICAgIElORk86IElORk8sXG4gICAgV0FSTklORzogV0FSTklORyxcbiAgICBFUlJPUjogRVJST1IsXG4gICAgTk9ORTogTk9ORSxcbiAgfTtcblxuICB0aGF0LmxvZyA9ICguLi5hcmdzKSA9PiB7XG4gICAgd2luZG93LmNvbnNvbGUubG9nKChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLCAuLi5hcmdzKTtcbiAgfTtcblxuICBjb25zdCBiaW5kVHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5jb25zb2xlW3R5cGVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgd2luZG93LmNvbnNvbGVbdHlwZV0oKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCksIC4uLmFyZ3MpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoYXQubG9nO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRMb2dMZXZlbCA9IGZ1bmN0aW9uKGxldmVsKSB7XG4gICAgaWYgKGxldmVsIDw9IERFQlVHKSB7XG4gICAgICB0aGF0LmRlYnVnID0gYmluZFR5cGUoJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuZGVidWcgPSBub09wO1xuICAgIH1cbiAgICBpZiAobGV2ZWwgPD0gVFJBQ0UpIHtcbiAgICAgIHRoYXQudHJhY2UgPSBiaW5kVHlwZSgndHJhY2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC50cmFjZSA9IG5vT3A7XG4gICAgfVxuICAgIGlmIChsZXZlbCA8PSBJTkZPKSB7XG4gICAgICB0aGF0LmluZm8gPSBiaW5kVHlwZSgnaW5mbycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LmluZm8gPSBub09wO1xuICAgIH1cbiAgICBpZiAobGV2ZWwgPD0gV0FSTklORykge1xuICAgICAgdGhhdC53YXJuaW5nID0gYmluZFR5cGUoJ3dhcm4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC53YXJuaW5nID0gbm9PcDtcbiAgICB9XG4gICAgaWYgKGxldmVsIDw9IEVSUk9SKSB7XG4gICAgICB0aGF0LmVycm9yID0gYmluZFR5cGUoJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuZXJyb3IgPSBub09wO1xuICAgIH1cbiAgfTtcblxuICBzZXRMb2dMZXZlbChFUlJPUik7IC8vIERlZmF1bHQgbGV2ZWwuXG5cbiAgdGhhdC5zZXRMb2dMZXZlbCA9IHNldExvZ0xldmVsO1xuXG4gIHJldHVybiB0aGF0O1xufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyO1xuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG4vKipcbiAqIEBjbGFzcyBBdWRpb1NvdXJjZUluZm9cbiAqIEBjbGFzc0Rlc2MgU291cmNlIGluZm8gYWJvdXQgYW4gYXVkaW8gdHJhY2suIFZhbHVlczogJ21pYycsICdzY3JlZW4tY2FzdCcsXG4gKiAnZmlsZScsICdtaXhlZCcuXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEByZWFkb25seVxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEF1ZGlvU291cmNlSW5mbyA9IHtcbiAgTUlDOiAnbWljJyxcbiAgU0NSRUVOQ0FTVDogJ3NjcmVlbi1jYXN0JyxcbiAgRklMRTogJ2ZpbGUnLFxuICBNSVhFRDogJ21peGVkJyxcbn07XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvU291cmNlSW5mb1xuICogQGNsYXNzRGVzYyBTb3VyY2UgaW5mbyBhYm91dCBhIHZpZGVvIHRyYWNrLiBWYWx1ZXM6ICdjYW1lcmEnLCAnc2NyZWVuLWNhc3QnLFxuICogJ2ZpbGUnLCAnbWl4ZWQnLlxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAcmVhZG9ubHlcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBWaWRlb1NvdXJjZUluZm8gPSB7XG4gIENBTUVSQTogJ2NhbWVyYScsXG4gIFNDUkVFTkNBU1Q6ICdzY3JlZW4tY2FzdCcsXG4gIEZJTEU6ICdmaWxlJyxcbiAgTUlYRUQ6ICdtaXhlZCcsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBUcmFja0tpbmRcbiAqIEBjbGFzc0Rlc2MgS2luZCBvZiBhIHRyYWNrLiBWYWx1ZXM6ICdhdWRpbycgZm9yIGF1ZGlvIHRyYWNrLCAndmlkZW8nIGZvclxuICogdmlkZW8gdHJhY2ssICdhdicgZm9yIGJvdGggYXVkaW8gYW5kIHZpZGVvIHRyYWNrcy5cbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQHJlYWRvbmx5XG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgVHJhY2tLaW5kID0ge1xuICAvKipcbiAgICogQXVkaW8gdHJhY2tzLlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEFVRElPOiAnYXVkaW8nLFxuICAvKipcbiAgICogVmlkZW8gdHJhY2tzLlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIFZJREVPOiAndmlkZW8nLFxuICAvKipcbiAgICogQm90aCBhdWRpbyBhbmQgdmlkZW8gdHJhY2tzLlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEFVRElPX0FORF9WSURFTzogJ2F2Jyxcbn07XG4vKipcbiAqIEBjbGFzcyBSZXNvbHV0aW9uXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgVGhlIFJlc29sdXRpb24gZGVmaW5lcyB0aGUgc2l6ZSBvZiBhIHJlY3RhbmdsZS5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNvbHV0aW9uIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gd2lkdGhcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUmVzb2x1dGlvblxuICAgICAqL1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5SZXNvbHV0aW9uXG4gICAgICovXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZ2xvYmFsIFByb21pc2UsIG5hdmlnYXRvciAqL1xuXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCAqIGFzIE1lZGlhRm9ybWF0TW9kdWxlIGZyb20gJy4vbWVkaWFmb3JtYXQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBBdWRpb1RyYWNrQ29uc3RyYWludHNcbiAqIEBjbGFzc0Rlc2MgQ29uc3RyYWludHMgZm9yIGNyZWF0aW5nIGFuIGF1ZGlvIE1lZGlhU3RyZWFtVHJhY2suXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPd3QuQmFzZS5BdWRpb1NvdXJjZUluZm99IHNvdXJjZSBTb3VyY2UgaW5mbyBvZiB0aGlzIGF1ZGlvIHRyYWNrLlxuICovXG5leHBvcnQgY2xhc3MgQXVkaW9UcmFja0NvbnN0cmFpbnRzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3Ioc291cmNlKSB7XG4gICAgaWYgKCFPYmplY3QudmFsdWVzKE1lZGlhRm9ybWF0TW9kdWxlLkF1ZGlvU291cmNlSW5mbylcbiAgICAgICAgLnNvbWUoKHYpID0+IHYgPT09IHNvdXJjZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgc291cmNlLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHNvdXJjZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBWYWx1ZXMgY291bGQgYmUgXCJtaWNcIiwgXCJzY3JlZW4tY2FzdFwiLCBcImZpbGVcIiBvciBcIm1peGVkXCIuXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBkZXZpY2VJZFxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBEbyBub3QgcHJvdmlkZSBkZXZpY2VJZCBpZiBzb3VyY2UgaXMgbm90IFwibWljXCIuXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHNlZSBodHRwczovL3czYy5naXRodWIuaW8vbWVkaWFjYXB0dXJlLW1haW4vI2RlZi1jb25zdHJhaW50LWRldmljZUlkXG4gICAgICovXG4gICAgdGhpcy5kZXZpY2VJZCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBWaWRlb1RyYWNrQ29uc3RyYWludHNcbiAqIEBjbGFzc0Rlc2MgQ29uc3RyYWludHMgZm9yIGNyZWF0aW5nIGEgdmlkZW8gTWVkaWFTdHJlYW1UcmFjay5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge093dC5CYXNlLlZpZGVvU291cmNlSW5mb30gc291cmNlIFNvdXJjZSBpbmZvIG9mIHRoaXMgdmlkZW8gdHJhY2suXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1RyYWNrQ29uc3RyYWludHMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihzb3VyY2UpIHtcbiAgICBpZiAoIU9iamVjdC52YWx1ZXMoTWVkaWFGb3JtYXRNb2R1bGUuVmlkZW9Tb3VyY2VJbmZvKVxuICAgICAgICAuc29tZSgodikgPT4gdiA9PT0gc291cmNlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBzb3VyY2UuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gc291cmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c1xuICAgICAqIEBkZXNjIFZhbHVlcyBjb3VsZCBiZSBcImNhbWVyYVwiLCBcInNjcmVlbi1jYXN0XCIsIFwiZmlsZVwiIG9yIFwibWl4ZWRcIi5cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGRldmljZUlkXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c1xuICAgICAqIEBkZXNjIERvIG5vdCBwcm92aWRlIGRldmljZUlkIGlmIHNvdXJjZSBpcyBub3QgXCJjYW1lcmFcIi5cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAc2VlIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9tZWRpYWNhcHR1cmUtbWFpbi8jZGVmLWNvbnN0cmFpbnQtZGV2aWNlSWRcbiAgICAgKi9cblxuICAgIHRoaXMuZGV2aWNlSWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5SZXNvbHV0aW9ufSByZXNvbHV0aW9uXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gZnJhbWVSYXRlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRoaXMuZnJhbWVSYXRlID0gdW5kZWZpbmVkO1xuICB9XG59XG4vKipcbiAqIEBjbGFzcyBTdHJlYW1Db25zdHJhaW50c1xuICogQGNsYXNzRGVzYyBDb25zdHJhaW50cyBmb3IgY3JlYXRpbmcgYSBNZWRpYVN0cmVhbSBmcm9tIHNjcmVlbiBtaWMgYW5kIGNhbWVyYS5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gez9Pd3QuQmFzZS5BdWRpb1RyYWNrQ29uc3RyYWludHN9IGF1ZGlvQ29uc3RyYWludHNcbiAqIEBwYXJhbSB7P093dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c30gdmlkZW9Db25zdHJhaW50c1xuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtQ29uc3RyYWludHMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnN0cmFpbnRzID0gZmFsc2UsIHZpZGVvQ29uc3RyYWludHMgPSBmYWxzZSkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLk1lZGlhU3RyZWFtVHJhY2tEZXZpY2VDb25zdHJhaW50c0ZvckF1ZGlvfSBhdWRpb1xuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5NZWRpYVN0cmVhbURldmljZUNvbnN0cmFpbnRzXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy5hdWRpbyA9IGF1ZGlvQ29uc3RyYWludHM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuTWVkaWFTdHJlYW1UcmFja0RldmljZUNvbnN0cmFpbnRzRm9yVmlkZW99IFZpZGVvXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lZGlhU3RyZWFtRGV2aWNlQ29uc3RyYWludHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLnZpZGVvID0gdmlkZW9Db25zdHJhaW50cztcbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gaXNWaWRlb0NvbnN0cmFpbnNGb3JTY3JlZW5DYXN0KGNvbnN0cmFpbnRzKSB7XG4gIHJldHVybiAodHlwZW9mIGNvbnN0cmFpbnRzLnZpZGVvID09PSAnb2JqZWN0JyAmJiBjb25zdHJhaW50cy52aWRlby5zb3VyY2UgPT09XG4gICAgICBNZWRpYUZvcm1hdE1vZHVsZS5WaWRlb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCk7XG59XG5cbi8qKlxuICogQGNsYXNzIE1lZGlhU3RyZWFtRmFjdG9yeVxuICogQGNsYXNzRGVzYyBBIGZhY3RvcnkgdG8gY3JlYXRlIE1lZGlhU3RyZWFtLiBZb3UgY2FuIGFsc28gY3JlYXRlIE1lZGlhU3RyZWFtXG4gKiBieSB5b3Vyc2VsZi5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICovXG5leHBvcnQgY2xhc3MgTWVkaWFTdHJlYW1GYWN0b3J5IHtcbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVNZWRpYVN0cmVhbVxuICAgKiBAc3RhdGljXG4gICAqIEBkZXNjIENyZWF0ZSBhIE1lZGlhU3RyZWFtIHdpdGggZ2l2ZW4gY29uc3RyYWludHMuIElmIHlvdSB3YW50IHRvIGNyZWF0ZSBhXG4gICAqIE1lZGlhU3RyZWFtIGZvciBzY3JlZW4gY2FzdCwgcGxlYXNlIG1ha2Ugc3VyZSBib3RoIGF1ZGlvIGFuZCB2aWRlbydzIHNvdXJjZVxuICAgKiBhcmUgXCJzY3JlZW4tY2FzdFwiLlxuICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuTWVkaWFTdHJlYW1GYWN0b3J5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8TWVkaWFTdHJlYW0sIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkXG4gICAqIHdoZW4gc3RyZWFtIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLCBvciByZWplY3RlZCBpZiBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgKiBlcnJvciBoYXBwZW5lZDpcbiAgICogLSBPbmUgb3IgbW9yZSBwYXJhbWV0ZXJzIGNhbm5vdCBiZSBzYXRpc2ZpZWQuXG4gICAqIC0gU3BlY2lmaWVkIGRldmljZSBpcyBidXN5LlxuICAgKiAtIENhbm5vdCBvYnRhaW4gbmVjZXNzYXJ5IHBlcm1pc3Npb24gb3Igb3BlcmF0aW9uIGlzIGNhbmNlbGVkIGJ5IHVzZXIuXG4gICAqIC0gVmlkZW8gc291cmNlIGlzIHNjcmVlbiBjYXN0LCB3aGlsZSBhdWRpbyBzb3VyY2UgaXMgbm90LlxuICAgKiAtIEF1ZGlvIHNvdXJjZSBpcyBzY3JlZW4gY2FzdCwgd2hpbGUgdmlkZW8gc291cmNlIGlzIGRpc2FibGVkLlxuICAgKiBAcGFyYW0ge093dC5CYXNlLlN0cmVhbUNvbnN0cmFpbnRzfSBjb25zdHJhaW50c1xuICAgKi9cbiAgc3RhdGljIGNyZWF0ZU1lZGlhU3RyZWFtKGNvbnN0cmFpbnRzKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zdHJhaW50cyAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgKCFjb25zdHJhaW50cy5hdWRpbyAmJiAhY29uc3RyYWludHMudmlkZW8pKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignSW52YWxpZCBjb25zdHJhaW5zJykpO1xuICAgIH1cbiAgICBpZiAoIWlzVmlkZW9Db25zdHJhaW5zRm9yU2NyZWVuQ2FzdChjb25zdHJhaW50cykgJiZcbiAgICAgICAgKHR5cGVvZiBjb25zdHJhaW50cy5hdWRpbyA9PT0gJ29iamVjdCcpICYmXG4gICAgICAgIGNvbnN0cmFpbnRzLmF1ZGlvLnNvdXJjZSA9PT1cbiAgICAgICAgICAgIE1lZGlhRm9ybWF0TW9kdWxlLkF1ZGlvU291cmNlSW5mby5TQ1JFRU5DQVNUKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgbmV3IFR5cGVFcnJvcignQ2Fubm90IHNoYXJlIHNjcmVlbiB3aXRob3V0IHZpZGVvLicpKTtcbiAgICB9XG4gICAgaWYgKGlzVmlkZW9Db25zdHJhaW5zRm9yU2NyZWVuQ2FzdChjb25zdHJhaW50cykgJiZcbiAgICAgICAgdHlwZW9mIGNvbnN0cmFpbnRzLmF1ZGlvID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBjb25zdHJhaW50cy5hdWRpby5zb3VyY2UgIT09XG4gICAgICAgICAgICBNZWRpYUZvcm1hdE1vZHVsZS5BdWRpb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgJ0Nhbm5vdCBjYXB0dXJlIHZpZGVvIGZyb20gc2NyZWVuIGNhc3Qgd2hpbGUgY2FwdHVyZSBhdWRpbyBmcm9tJ1xuICAgICAgICAgICsgJyBvdGhlciBzb3VyY2UuJykpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGFuZCBjb252ZXJ0IGNvbnN0cmFpbnRzLlxuICAgIGlmICghY29uc3RyYWludHMuYXVkaW8gJiYgIWNvbnN0cmFpbnRzLnZpZGVvKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAnQXQgbGVhc3Qgb25lIG9mIGF1ZGlvIGFuZCB2aWRlbyBtdXN0IGJlIHJlcXVlc3RlZC4nKSk7XG4gICAgfVxuICAgIGNvbnN0IG1lZGlhQ29uc3RyYWludHMgPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgICBpZiAodHlwZW9mIGNvbnN0cmFpbnRzLmF1ZGlvID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBjb25zdHJhaW50cy5hdWRpby5zb3VyY2UgPT09IE1lZGlhRm9ybWF0TW9kdWxlLkF1ZGlvU291cmNlSW5mby5NSUMpIHtcbiAgICAgIG1lZGlhQ29uc3RyYWludHMuYXVkaW8gPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgICAgIGlmICh1dGlscy5pc0VkZ2UoKSkge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvLmRldmljZUlkID0gY29uc3RyYWludHMuYXVkaW8uZGV2aWNlSWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvLmRldmljZUlkID0ge1xuICAgICAgICAgIGV4YWN0OiBjb25zdHJhaW50cy5hdWRpby5kZXZpY2VJZCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnN0cmFpbnRzLmF1ZGlvLnNvdXJjZSA9PT1cbiAgICAgICAgICBNZWRpYUZvcm1hdE1vZHVsZS5BdWRpb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCkge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lZGlhQ29uc3RyYWludHMuYXVkaW8gPSBjb25zdHJhaW50cy5hdWRpbztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb25zdHJhaW50cy52aWRlbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8gPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc3RyYWludHMudmlkZW8uZnJhbWVSYXRlID09PSAnbnVtYmVyJykge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvLmZyYW1lUmF0ZSA9IGNvbnN0cmFpbnRzLnZpZGVvLmZyYW1lUmF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uICYmXG4gICAgICAgICAgY29uc3RyYWludHMudmlkZW8ucmVzb2x1dGlvbi53aWR0aCAmJlxuICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLnJlc29sdXRpb24uaGVpZ2h0KSB7XG4gICAgICAgIGlmIChjb25zdHJhaW50cy52aWRlby5zb3VyY2UgPT09XG4gICAgICAgICAgICAgIE1lZGlhRm9ybWF0TW9kdWxlLlZpZGVvU291cmNlSW5mby5TQ1JFRU5DQVNUKSB7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby53aWR0aCA9IGNvbnN0cmFpbnRzLnZpZGVvLnJlc29sdXRpb24ud2lkdGg7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby5oZWlnaHQgPSBjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uLmhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvLndpZHRoID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby53aWR0aC5leGFjdCA9XG4gICAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uLndpZHRoO1xuICAgICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8uaGVpZ2h0ID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby5oZWlnaHQuZXhhY3QgPVxuICAgICAgICAgICAgY29uc3RyYWludHMudmlkZW8ucmVzb2x1dGlvbi5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPSB7ZXhhY3Q6IGNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkfTtcbiAgICAgIH1cbiAgICAgIGlmICh1dGlscy5pc0ZpcmVmb3goKSAmJlxuICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLnNvdXJjZSA9PT1cbiAgICAgICAgICAgICAgTWVkaWFGb3JtYXRNb2R1bGUuVmlkZW9Tb3VyY2VJbmZvLlNDUkVFTkNBU1QpIHtcbiAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby5tZWRpYVNvdXJjZSA9ICdzY3JlZW4nO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvID0gY29uc3RyYWludHMudmlkZW87XG4gICAgfVxuXG4gICAgaWYgKGlzVmlkZW9Db25zdHJhaW5zRm9yU2NyZWVuQ2FzdChjb25zdHJhaW50cykpIHtcbiAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldERpc3BsYXlNZWRpYShtZWRpYUNvbnN0cmFpbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKG1lZGlhQ29uc3RyYWludHMpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBBdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBUaGUgYXVkaW8gc2V0dGluZ3Mgb2YgYSBwdWJsaWNhdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvUHVibGljYXRpb25TZXR0aW5ncyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzfSBjb2RlY1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjID0gY29kZWM7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgVGhlIHZpZGVvIHNldHRpbmdzIG9mIGEgcHVibGljYXRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3Mge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlYywgcmVzb2x1dGlvbiwgZnJhbWVSYXRlLFxuICAgICAgYml0cmF0ZSwga2V5RnJhbWVJbnRlcnZhbCwgcmlkKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLlZpZGVvQ29kZWNQYXJhbWV0ZXJzfSBjb2RlY1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjPWNvZGVjLFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5SZXNvbHV0aW9ufSByZXNvbHV0aW9uXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvUHVibGljYXRpb25TZXR0aW5nc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbj1yZXNvbHV0aW9uO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGZyYW1lUmF0ZXNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAY2xhc3NEZXNjIEZyYW1lcyBwZXIgc2Vjb25kLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmZyYW1lUmF0ZT1mcmFtZVJhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gYml0cmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmJpdHJhdGU9Yml0cmF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBrZXlGcmFtZUludGVydmFsc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBjbGFzc0Rlc2MgVGhlIHRpbWUgaW50ZXJ2YWwgYmV0d2VlbiBrZXkgZnJhbWVzLiBVbml0OiBzZWNvbmQuXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvUHVibGljYXRpb25TZXR0aW5nc1xuICAgICAqL1xuICAgIHRoaXMua2V5RnJhbWVJbnRlcnZhbD1rZXlGcmFtZUludGVydmFsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IHJpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBjbGFzc0Rlc2MgUmVzdHJpY3Rpb24gaWRlbnRpZmllciB0byBpZGVudGlmeSB0aGUgUlRQIFN0cmVhbXMgd2l0aGluIGFuIFJUUCBzZXNzaW9uLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLnJpZD1yaWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgUHVibGljYXRpb25TZXR0aW5nc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFRoZSBzZXR0aW5ncyBvZiBhIHB1YmxpY2F0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgUHVibGljYXRpb25TZXR0aW5ncyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGF1ZGlvLCB2aWRlbykge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLkF1ZGlvUHVibGljYXRpb25TZXR0aW5nc1tdfSBhdWRpb1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5hdWRpbz1hdWRpbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NbXX0gdmlkZW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25TZXR0aW5nc1xuICAgICAqL1xuICAgIHRoaXMudmlkZW89dmlkZW87XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgUHVibGljYXRpb25cbiAqIEBleHRlbmRzIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFB1YmxpY2F0aW9uIHJlcHJlc2VudHMgYSBzZW5kZXIgZm9yIHB1Ymxpc2hpbmcgYSBzdHJlYW0uIEl0XG4gKiBoYW5kbGVzIHRoZSBhY3Rpb25zIG9uIGEgTG9jYWxTdHJlYW0gcHVibGlzaGVkIHRvIGEgY29uZmVyZW5jZS5cbiAqXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgfCBBcmd1bWVudCBUeXBlICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgZW5kZWQgICAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFB1YmxpY2F0aW9uIGlzIGVuZGVkLiB8XG4gKiB8IGVycm9yICAgICAgICAgICB8IEVycm9yRXZlbnQgICAgICAgfCBBbiBlcnJvciBvY2N1cnJlZCBvbiB0aGUgcHVibGljYXRpb24uIHxcbiAqIHwgbXV0ZSAgICAgICAgICAgIHwgTXV0ZUV2ZW50ICAgICAgICB8IFB1YmxpY2F0aW9uIGlzIG11dGVkLiBDbGllbnQgc3RvcHBlZCBzZW5kaW5nIGF1ZGlvIGFuZC9vciB2aWRlbyBkYXRhIHRvIHJlbW90ZSBlbmRwb2ludC4gfFxuICogfCB1bm11dGUgICAgICAgICAgfCBNdXRlRXZlbnQgICAgICAgIHwgUHVibGljYXRpb24gaXMgdW5tdXRlZC4gQ2xpZW50IGNvbnRpbnVlZCBzZW5kaW5nIGF1ZGlvIGFuZC9vciB2aWRlbyBkYXRhIHRvIHJlbW90ZSBlbmRwb2ludC4gfFxuICpcbiAqIGBlbmRlZGAgZXZlbnQgbWF5IG5vdCBiZSBmaXJlZCBvbiBTYWZhcmkgYWZ0ZXIgY2FsbGluZyBgUHVibGljYXRpb24uc3RvcCgpYC5cbiAqXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBQdWJsaWNhdGlvbiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGlkLCB0cmFuc3BvcnQsIHN0b3AsIGdldFN0YXRzLCBtdXRlLCB1bm11dGUpIHtcbiAgICBzdXBlcigpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBpZCA/IGlkIDogVXRpbHMuY3JlYXRlVXVpZCgpLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlRyYW5zcG9ydFNldHRpbmdzfSB0cmFuc3BvcnRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAZGVzYyBUcmFuc3BvcnQgc2V0dGluZ3MgZm9yIHRoZSBwdWJsaWNhdGlvbi5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3RyYW5zcG9ydCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdHJhbnNwb3J0LFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBzdG9wXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgU3RvcCBjZXJ0YWluIHB1YmxpY2F0aW9uLiBPbmNlIGEgc3Vic2NyaXB0aW9uIGlzIHN0b3BwZWQsIGl0IGNhbm5vdFxuICAgICAqIGJlIHJlY292ZXJlZC5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25cbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuc3RvcCA9IHN0b3A7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGdldFN0YXRzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgR2V0IHN0YXRzIG9mIHVuZGVybHlpbmcgUGVlckNvbm5lY3Rpb24uXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UlRDU3RhdHNSZXBvcnQsIEVycm9yPn1cbiAgICAgKi9cbiAgICB0aGlzLmdldFN0YXRzID0gZ2V0U3RhdHM7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIG11dGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBTdG9wIHNlbmRpbmcgZGF0YSB0byByZW1vdGUgZW5kcG9pbnQuXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uXG4gICAgICogQHBhcmFtIHtPd3QuQmFzZS5UcmFja0tpbmQgfSBraW5kIEtpbmQgb2YgdHJhY2tzIHRvIGJlIG11dGVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZCwgRXJyb3I+fVxuICAgICAqL1xuICAgIHRoaXMubXV0ZSA9IG11dGU7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIHVubXV0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIENvbnRpbnVlIHNlbmRpbmcgZGF0YSB0byByZW1vdGUgZW5kcG9pbnQuXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uXG4gICAgICogQHBhcmFtIHtPd3QuQmFzZS5UcmFja0tpbmQgfSBraW5kIEtpbmQgb2YgdHJhY2tzIHRvIGJlIHVubXV0ZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5kZWZpbmVkLCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy51bm11dGUgPSB1bm11dGU7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgUHVibGlzaE9wdGlvbnNcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBQdWJsaXNoT3B0aW9ucyBkZWZpbmVzIG9wdGlvbnMgZm9yIHB1Ymxpc2hpbmcgYVxuICogT3d0LkJhc2UuTG9jYWxTdHJlYW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBQdWJsaXNoT3B0aW9ucyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGF1ZGlvLCB2aWRlbywgdHJhbnNwb3J0KSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P0FycmF5PE93dC5CYXNlLkF1ZGlvRW5jb2RpbmdQYXJhbWV0ZXJzPiB8ID9BcnJheTxSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnM+fSBhdWRpb1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaXNoT3B0aW9uc1xuICAgICAqIEBkZXNjIFBhcmFtZXRlcnMgZm9yIGF1ZGlvIFJ0cFNlbmRlci4gUHVibGlzaGluZyB3aXRoIFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycyBpcyBhbiBleHBlcmltZW50YWwgZmVhdHVyZS4gSXQgaXMgc3ViamVjdCB0byBjaGFuZ2UuXG4gICAgICovXG4gICAgdGhpcy5hdWRpbyA9IGF1ZGlvO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9BcnJheTxPd3QuQmFzZS5WaWRlb0VuY29kaW5nUGFyYW1ldGVycz4gfCA/QXJyYXk8UlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzPn0gdmlkZW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGlzaE9wdGlvbnNcbiAgICAgKiBAZGVzYyBQYXJhbWV0ZXJzIGZvciB2aWRlbyBSdHBTZW5kZXIuIFB1Ymxpc2hpbmcgd2l0aCBSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnMgaXMgYW4gZXhwZXJpbWVudGFsIGZlYXR1cmUuIEl0IGlzIHN1YmplY3QgdG8gY2hhbmdlLlxuICAgICAqL1xuICAgIHRoaXMudmlkZW8gPSB2aWRlbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuVHJhbnNwb3J0Q29uc3RyYWludHN9IHRyYW5zcG9ydFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaXNoT3B0aW9uc1xuICAgICAqL1xuICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuICB9XG59XG4iLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNCBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cblxuLyogTW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGVzZSBvcHRpb25zIGF0IGpzaGludC5jb20vZG9jcy9vcHRpb25zICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qIGdsb2JhbHMgIGFkYXB0ZXIsIHRyYWNlICovXG4vKiBleHBvcnRlZCBzZXRDb2RlY1BhcmFtLCBpY2VDYW5kaWRhdGVUeXBlLCBmb3JtYXRUeXBlUHJlZmVyZW5jZSxcbiAgIG1heWJlU2V0T3B1c09wdGlvbnMsIG1heWJlUHJlZmVyQXVkaW9SZWNlaXZlQ29kZWMsXG4gICBtYXliZVByZWZlckF1ZGlvU2VuZENvZGVjLCBtYXliZVNldEF1ZGlvUmVjZWl2ZUJpdFJhdGUsXG4gICBtYXliZVNldEF1ZGlvU2VuZEJpdFJhdGUsIG1heWJlUHJlZmVyVmlkZW9SZWNlaXZlQ29kZWMsXG4gICBtYXliZVByZWZlclZpZGVvU2VuZENvZGVjLCBtYXliZVNldFZpZGVvUmVjZWl2ZUJpdFJhdGUsXG4gICBtYXliZVNldFZpZGVvU2VuZEJpdFJhdGUsIG1heWJlU2V0VmlkZW9TZW5kSW5pdGlhbEJpdFJhdGUsXG4gICBtYXliZVJlbW92ZVZpZGVvRmVjLCBtZXJnZUNvbnN0cmFpbnRzLCByZW1vdmVDb2RlY1BhcmFtKi9cblxuLyogVGhpcyBmaWxlIGlzIGJvcnJvd2VkIGZyb20gYXBwcnRjIHdpdGggc29tZSBtb2RpZmljYXRpb25zLiAqL1xuLyogQ29tbWl0IGhhc2g6IGM2YWYwYzI1ZTlhZjUyN2Y3MWIzYWNkZDZiZmExMzg5ZDc3OGY3YmQgKyBQUiA1MzAgKi9cblxuaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlci5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gbWVyZ2VDb25zdHJhaW50cyhjb25zMSwgY29uczIpIHtcbiAgaWYgKCFjb25zMSB8fCAhY29uczIpIHtcbiAgICByZXR1cm4gY29uczEgfHwgY29uczI7XG4gIH1cbiAgY29uc3QgbWVyZ2VkID0gY29uczE7XG4gIGZvciAoY29uc3Qga2V5IGluIGNvbnMyKSB7XG4gICAgbWVyZ2VkW2tleV0gPSBjb25zMltrZXldO1xuICB9XG4gIHJldHVybiBtZXJnZWQ7XG59XG5cbmZ1bmN0aW9uIGljZUNhbmRpZGF0ZVR5cGUoY2FuZGlkYXRlU3RyKSB7XG4gIHJldHVybiBjYW5kaWRhdGVTdHIuc3BsaXQoJyAnKVs3XTtcbn1cblxuLy8gVHVybnMgdGhlIGxvY2FsIHR5cGUgcHJlZmVyZW5jZSBpbnRvIGEgaHVtYW4tcmVhZGFibGUgc3RyaW5nLlxuLy8gTm90ZSB0aGF0IHRoaXMgbWFwcGluZyBpcyBicm93c2VyLXNwZWNpZmljLlxuZnVuY3Rpb24gZm9ybWF0VHlwZVByZWZlcmVuY2UocHJlZikge1xuICBpZiAoYWRhcHRlci5icm93c2VyRGV0YWlscy5icm93c2VyID09PSAnY2hyb21lJykge1xuICAgIHN3aXRjaCAocHJlZikge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gJ1RVUk4vVExTJztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuICdUVVJOL1RDUCc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiAnVFVSTi9VRFAnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFkYXB0ZXIuYnJvd3NlckRldGFpbHMuYnJvd3NlciA9PT0gJ2ZpcmVmb3gnKSB7XG4gICAgc3dpdGNoIChwcmVmKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiAnVFVSTi9UQ1AnO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gJ1RVUk4vVURQJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIG1heWJlU2V0T3B1c09wdGlvbnMoc2RwLCBwYXJhbXMpIHtcbiAgLy8gU2V0IE9wdXMgaW4gU3RlcmVvLCBpZiBzdGVyZW8gaXMgdHJ1ZSwgdW5zZXQgaXQsIGlmIHN0ZXJlbyBpcyBmYWxzZSwgYW5kXG4gIC8vIGRvIG5vdGhpbmcgaWYgb3RoZXJ3aXNlLlxuICBpZiAocGFyYW1zLm9wdXNTdGVyZW8gPT09ICd0cnVlJykge1xuICAgIHNkcCA9IHNldENvZGVjUGFyYW0oc2RwLCAnb3B1cy80ODAwMCcsICdzdGVyZW8nLCAnMScpO1xuICB9IGVsc2UgaWYgKHBhcmFtcy5vcHVzU3RlcmVvID09PSAnZmFsc2UnKSB7XG4gICAgc2RwID0gcmVtb3ZlQ29kZWNQYXJhbShzZHAsICdvcHVzLzQ4MDAwJywgJ3N0ZXJlbycpO1xuICB9XG5cbiAgLy8gU2V0IE9wdXMgRkVDLCBpZiBvcHVzZmVjIGlzIHRydWUsIHVuc2V0IGl0LCBpZiBvcHVzZmVjIGlzIGZhbHNlLCBhbmRcbiAgLy8gZG8gbm90aGluZyBpZiBvdGhlcndpc2UuXG4gIGlmIChwYXJhbXMub3B1c0ZlYyA9PT0gJ3RydWUnKSB7XG4gICAgc2RwID0gc2V0Q29kZWNQYXJhbShzZHAsICdvcHVzLzQ4MDAwJywgJ3VzZWluYmFuZGZlYycsICcxJyk7XG4gIH0gZWxzZSBpZiAocGFyYW1zLm9wdXNGZWMgPT09ICdmYWxzZScpIHtcbiAgICBzZHAgPSByZW1vdmVDb2RlY1BhcmFtKHNkcCwgJ29wdXMvNDgwMDAnLCAndXNlaW5iYW5kZmVjJyk7XG4gIH1cblxuICAvLyBTZXQgT3B1cyBEVFgsIGlmIG9wdXNkdHggaXMgdHJ1ZSwgdW5zZXQgaXQsIGlmIG9wdXNkdHggaXMgZmFsc2UsIGFuZFxuICAvLyBkbyBub3RoaW5nIGlmIG90aGVyd2lzZS5cbiAgaWYgKHBhcmFtcy5vcHVzRHR4ID09PSAndHJ1ZScpIHtcbiAgICBzZHAgPSBzZXRDb2RlY1BhcmFtKHNkcCwgJ29wdXMvNDgwMDAnLCAndXNlZHR4JywgJzEnKTtcbiAgfSBlbHNlIGlmIChwYXJhbXMub3B1c0R0eCA9PT0gJ2ZhbHNlJykge1xuICAgIHNkcCA9IHJlbW92ZUNvZGVjUGFyYW0oc2RwLCAnb3B1cy80ODAwMCcsICd1c2VkdHgnKTtcbiAgfVxuXG4gIC8vIFNldCBPcHVzIG1heHBsYXliYWNrcmF0ZSwgaWYgcmVxdWVzdGVkLlxuICBpZiAocGFyYW1zLm9wdXNNYXhQYnIpIHtcbiAgICBzZHAgPSBzZXRDb2RlY1BhcmFtKFxuICAgICAgICBzZHAsICdvcHVzLzQ4MDAwJywgJ21heHBsYXliYWNrcmF0ZScsIHBhcmFtcy5vcHVzTWF4UGJyKTtcbiAgfVxuICByZXR1cm4gc2RwO1xufVxuXG5mdW5jdGlvbiBtYXliZVNldEF1ZGlvU2VuZEJpdFJhdGUoc2RwLCBwYXJhbXMpIHtcbiAgaWYgKCFwYXJhbXMuYXVkaW9TZW5kQml0cmF0ZSkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgTG9nZ2VyLmRlYnVnKCdQcmVmZXIgYXVkaW8gc2VuZCBiaXRyYXRlOiAnICsgcGFyYW1zLmF1ZGlvU2VuZEJpdHJhdGUpO1xuICByZXR1cm4gcHJlZmVyQml0UmF0ZShzZHAsIHBhcmFtcy5hdWRpb1NlbmRCaXRyYXRlLCAnYXVkaW8nKTtcbn1cblxuZnVuY3Rpb24gbWF5YmVTZXRBdWRpb1JlY2VpdmVCaXRSYXRlKHNkcCwgcGFyYW1zKSB7XG4gIGlmICghcGFyYW1zLmF1ZGlvUmVjdkJpdHJhdGUpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIExvZ2dlci5kZWJ1ZygnUHJlZmVyIGF1ZGlvIHJlY2VpdmUgYml0cmF0ZTogJyArIHBhcmFtcy5hdWRpb1JlY3ZCaXRyYXRlKTtcbiAgcmV0dXJuIHByZWZlckJpdFJhdGUoc2RwLCBwYXJhbXMuYXVkaW9SZWN2Qml0cmF0ZSwgJ2F1ZGlvJyk7XG59XG5cbmZ1bmN0aW9uIG1heWJlU2V0VmlkZW9TZW5kQml0UmF0ZShzZHAsIHBhcmFtcykge1xuICBpZiAoIXBhcmFtcy52aWRlb1NlbmRCaXRyYXRlKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBMb2dnZXIuZGVidWcoJ1ByZWZlciB2aWRlbyBzZW5kIGJpdHJhdGU6ICcgKyBwYXJhbXMudmlkZW9TZW5kQml0cmF0ZSk7XG4gIHJldHVybiBwcmVmZXJCaXRSYXRlKHNkcCwgcGFyYW1zLnZpZGVvU2VuZEJpdHJhdGUsICd2aWRlbycpO1xufVxuXG5mdW5jdGlvbiBtYXliZVNldFZpZGVvUmVjZWl2ZUJpdFJhdGUoc2RwLCBwYXJhbXMpIHtcbiAgaWYgKCFwYXJhbXMudmlkZW9SZWN2Qml0cmF0ZSkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgTG9nZ2VyLmRlYnVnKCdQcmVmZXIgdmlkZW8gcmVjZWl2ZSBiaXRyYXRlOiAnICsgcGFyYW1zLnZpZGVvUmVjdkJpdHJhdGUpO1xuICByZXR1cm4gcHJlZmVyQml0UmF0ZShzZHAsIHBhcmFtcy52aWRlb1JlY3ZCaXRyYXRlLCAndmlkZW8nKTtcbn1cblxuLy8gQWRkIGEgYj1BUzpiaXRyYXRlIGxpbmUgdG8gdGhlIG09bWVkaWFUeXBlIHNlY3Rpb24uXG5mdW5jdGlvbiBwcmVmZXJCaXRSYXRlKHNkcCwgYml0cmF0ZSwgbWVkaWFUeXBlKSB7XG4gIGNvbnN0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcblxuICAvLyBGaW5kIG0gbGluZSBmb3IgdGhlIGdpdmVuIG1lZGlhVHlwZS5cbiAgY29uc3QgbUxpbmVJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCBtZWRpYVR5cGUpO1xuICBpZiAobUxpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIExvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGFkZCBiYW5kd2lkdGggbGluZSB0byBzZHAsIGFzIG5vIG0tbGluZSBmb3VuZCcpO1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICAvLyBGaW5kIG5leHQgbS1saW5lIGlmIGFueS5cbiAgbGV0IG5leHRNTGluZUluZGV4ID0gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBtTGluZUluZGV4ICsgMSwgLTEsICdtPScpO1xuICBpZiAobmV4dE1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICBuZXh0TUxpbmVJbmRleCA9IHNkcExpbmVzLmxlbmd0aDtcbiAgfVxuXG4gIC8vIEZpbmQgYy1saW5lIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG0tbGluZS5cbiAgY29uc3QgY0xpbmVJbmRleCA9IGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgbUxpbmVJbmRleCArIDEsXG4gICAgICBuZXh0TUxpbmVJbmRleCwgJ2M9Jyk7XG4gIGlmIChjTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdGYWlsZWQgdG8gYWRkIGJhbmR3aWR0aCBsaW5lIHRvIHNkcCwgYXMgbm8gYy1saW5lIGZvdW5kJyk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGJhbmR3aWR0aCBsaW5lIGFscmVhZHkgZXhpc3RzIGJldHdlZW4gYy1saW5lIGFuZCBuZXh0IG0tbGluZS5cbiAgY29uc3QgYkxpbmVJbmRleCA9IGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgY0xpbmVJbmRleCArIDEsXG4gICAgICBuZXh0TUxpbmVJbmRleCwgJ2I9QVMnKTtcbiAgaWYgKGJMaW5lSW5kZXgpIHtcbiAgICBzZHBMaW5lcy5zcGxpY2UoYkxpbmVJbmRleCwgMSk7XG4gIH1cblxuICAvLyBDcmVhdGUgdGhlIGIgKGJhbmR3aWR0aCkgc2RwIGxpbmUuXG4gIGNvbnN0IGJ3TGluZSA9ICdiPUFTOicgKyBiaXRyYXRlO1xuICAvLyBBcyBwZXIgUkZDIDQ1NjYsIHRoZSBiIGxpbmUgc2hvdWxkIGZvbGxvdyBhZnRlciBjLWxpbmUuXG4gIHNkcExpbmVzLnNwbGljZShjTGluZUluZGV4ICsgMSwgMCwgYndMaW5lKTtcbiAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XG4gIHJldHVybiBzZHA7XG59XG5cbi8vIEFkZCBhbiBhPWZtdHA6IHgtZ29vZ2xlLW1pbi1iaXRyYXRlPWticHMgbGluZSwgaWYgdmlkZW9TZW5kSW5pdGlhbEJpdHJhdGVcbi8vIGlzIHNwZWNpZmllZC4gV2UnbGwgYWxzbyBhZGQgYSB4LWdvb2dsZS1taW4tYml0cmF0ZSB2YWx1ZSwgc2luY2UgdGhlIG1heFxuLy8gbXVzdCBiZSA+PSB0aGUgbWluLlxuZnVuY3Rpb24gbWF5YmVTZXRWaWRlb1NlbmRJbml0aWFsQml0UmF0ZShzZHAsIHBhcmFtcykge1xuICBsZXQgaW5pdGlhbEJpdHJhdGUgPSBwYXJzZUludChwYXJhbXMudmlkZW9TZW5kSW5pdGlhbEJpdHJhdGUpO1xuICBpZiAoIWluaXRpYWxCaXRyYXRlKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIHRoZSBpbml0aWFsIGJpdHJhdGUgdmFsdWUuXG4gIGxldCBtYXhCaXRyYXRlID0gcGFyc2VJbnQoaW5pdGlhbEJpdHJhdGUpO1xuICBjb25zdCBiaXRyYXRlID0gcGFyc2VJbnQocGFyYW1zLnZpZGVvU2VuZEJpdHJhdGUpO1xuICBpZiAoYml0cmF0ZSkge1xuICAgIGlmIChpbml0aWFsQml0cmF0ZSA+IGJpdHJhdGUpIHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnQ2xhbXBpbmcgaW5pdGlhbCBiaXRyYXRlIHRvIG1heCBiaXRyYXRlIG9mICcgKyBiaXRyYXRlICsgJyBrYnBzLicpO1xuICAgICAgaW5pdGlhbEJpdHJhdGUgPSBiaXRyYXRlO1xuICAgICAgcGFyYW1zLnZpZGVvU2VuZEluaXRpYWxCaXRyYXRlID0gaW5pdGlhbEJpdHJhdGU7XG4gICAgfVxuICAgIG1heEJpdHJhdGUgPSBiaXRyYXRlO1xuICB9XG5cbiAgY29uc3Qgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuXG4gIC8vIFNlYXJjaCBmb3IgbSBsaW5lLlxuICBjb25zdCBtTGluZUluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdtPScsICd2aWRlbycpO1xuICBpZiAobUxpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIExvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGZpbmQgdmlkZW8gbS1saW5lJyk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICAvLyBGaWd1cmUgb3V0IHRoZSBmaXJzdCBjb2RlYyBwYXlsb2FkIHR5cGUgb24gdGhlIG09dmlkZW8gU0RQIGxpbmUuXG4gIGNvbnN0IHZpZGVvTUxpbmUgPSBzZHBMaW5lc1ttTGluZUluZGV4XTtcbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ209dmlkZW9cXFxcc1xcXFxkK1xcXFxzW0EtWi9dK1xcXFxzJyk7XG4gIGNvbnN0IHNlbmRQYXlsb2FkVHlwZSA9IHZpZGVvTUxpbmUuc3BsaXQocGF0dGVybilbMV0uc3BsaXQoJyAnKVswXTtcbiAgY29uc3QgZm10cExpbmUgPSBzZHBMaW5lc1tmaW5kTGluZShzZHBMaW5lcywgJ2E9cnRwbWFwJywgc2VuZFBheWxvYWRUeXBlKV07XG4gIGNvbnN0IGNvZGVjTmFtZSA9IGZtdHBMaW5lLnNwbGl0KCdhPXJ0cG1hcDonICtcbiAgICAgIHNlbmRQYXlsb2FkVHlwZSlbMV0uc3BsaXQoJy8nKVswXTtcblxuICAvLyBVc2UgY29kZWMgZnJvbSBwYXJhbXMgaWYgc3BlY2lmaWVkIHZpYSBVUkwgcGFyYW0sIG90aGVyd2lzZSB1c2UgZnJvbSBTRFAuXG4gIGNvbnN0IGNvZGVjID0gcGFyYW1zLnZpZGVvU2VuZENvZGVjIHx8IGNvZGVjTmFtZTtcbiAgc2RwID0gc2V0Q29kZWNQYXJhbShzZHAsIGNvZGVjLCAneC1nb29nbGUtbWluLWJpdHJhdGUnLFxuICAgICAgcGFyYW1zLnZpZGVvU2VuZEluaXRpYWxCaXRyYXRlLnRvU3RyaW5nKCkpO1xuICBzZHAgPSBzZXRDb2RlY1BhcmFtKHNkcCwgY29kZWMsICd4LWdvb2dsZS1tYXgtYml0cmF0ZScsXG4gICAgICBtYXhCaXRyYXRlLnRvU3RyaW5nKCkpO1xuXG4gIHJldHVybiBzZHA7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVBheWxvYWRUeXBlRnJvbU1saW5lKG1MaW5lLCBwYXlsb2FkVHlwZSkge1xuICBtTGluZSA9IG1MaW5lLnNwbGl0KCcgJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbUxpbmUubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobUxpbmVbaV0gPT09IHBheWxvYWRUeXBlLnRvU3RyaW5nKCkpIHtcbiAgICAgIG1MaW5lLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1MaW5lLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ29kZWNCeU5hbWUoc2RwTGluZXMsIGNvZGVjKSB7XG4gIGNvbnN0IGluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdhPXJ0cG1hcCcsIGNvZGVjKTtcbiAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcExpbmVzO1xuICB9XG4gIGNvbnN0IHBheWxvYWRUeXBlID0gZ2V0Q29kZWNQYXlsb2FkVHlwZUZyb21MaW5lKHNkcExpbmVzW2luZGV4XSk7XG4gIHNkcExpbmVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgLy8gU2VhcmNoIGZvciB0aGUgdmlkZW8gbT0gbGluZSBhbmQgcmVtb3ZlIHRoZSBjb2RlYy5cbiAgY29uc3QgbUxpbmVJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCAndmlkZW8nKTtcbiAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwTGluZXM7XG4gIH1cbiAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSByZW1vdmVQYXlsb2FkVHlwZUZyb21NbGluZShzZHBMaW5lc1ttTGluZUluZGV4XSxcbiAgICAgIHBheWxvYWRUeXBlKTtcbiAgcmV0dXJuIHNkcExpbmVzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDb2RlY0J5UGF5bG9hZFR5cGUoc2RwTGluZXMsIHBheWxvYWRUeXBlKSB7XG4gIGNvbnN0IGluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdhPXJ0cG1hcCcsIHBheWxvYWRUeXBlLnRvU3RyaW5nKCkpO1xuICBpZiAoaW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwTGluZXM7XG4gIH1cbiAgc2RwTGluZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAvLyBTZWFyY2ggZm9yIHRoZSB2aWRlbyBtPSBsaW5lIGFuZCByZW1vdmUgdGhlIGNvZGVjLlxuICBjb25zdCBtTGluZUluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdtPScsICd2aWRlbycpO1xuICBpZiAobUxpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHBMaW5lcztcbiAgfVxuICBzZHBMaW5lc1ttTGluZUluZGV4XSA9IHJlbW92ZVBheWxvYWRUeXBlRnJvbU1saW5lKHNkcExpbmVzW21MaW5lSW5kZXhdLFxuICAgICAgcGF5bG9hZFR5cGUpO1xuICByZXR1cm4gc2RwTGluZXM7XG59XG5cbmZ1bmN0aW9uIG1heWJlUmVtb3ZlVmlkZW9GZWMoc2RwLCBwYXJhbXMpIHtcbiAgaWYgKHBhcmFtcy52aWRlb0ZlYyAhPT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBsZXQgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuXG4gIGxldCBpbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1ydHBtYXAnLCAncmVkJyk7XG4gIGlmIChpbmRleCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgY29uc3QgcmVkUGF5bG9hZFR5cGUgPSBnZXRDb2RlY1BheWxvYWRUeXBlRnJvbUxpbmUoc2RwTGluZXNbaW5kZXhdKTtcbiAgc2RwTGluZXMgPSByZW1vdmVDb2RlY0J5UGF5bG9hZFR5cGUoc2RwTGluZXMsIHJlZFBheWxvYWRUeXBlKTtcblxuICBzZHBMaW5lcyA9IHJlbW92ZUNvZGVjQnlOYW1lKHNkcExpbmVzLCAndWxwZmVjJyk7XG5cbiAgLy8gUmVtb3ZlIGZtdHAgbGluZXMgYXNzb2NpYXRlZCB3aXRoIHJlZCBjb2RlYy5cbiAgaW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ2E9Zm10cCcsIHJlZFBheWxvYWRUeXBlLnRvU3RyaW5nKCkpO1xuICBpZiAoaW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIGNvbnN0IGZtdHBMaW5lID0gcGFyc2VGbXRwTGluZShzZHBMaW5lc1tpbmRleF0pO1xuICBjb25zdCBydHhQYXlsb2FkVHlwZSA9IGZtdHBMaW5lLnB0O1xuICBpZiAocnR4UGF5bG9hZFR5cGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIHNkcExpbmVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgc2RwTGluZXMgPSByZW1vdmVDb2RlY0J5UGF5bG9hZFR5cGUoc2RwTGluZXMsIHJ0eFBheWxvYWRUeXBlKTtcbiAgcmV0dXJuIHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xufVxuXG4vLyBQcm9tb3RlcyB8YXVkaW9TZW5kQ29kZWN8IHRvIGJlIHRoZSBmaXJzdCBpbiB0aGUgbT1hdWRpbyBsaW5lLCBpZiBzZXQuXG5mdW5jdGlvbiBtYXliZVByZWZlckF1ZGlvU2VuZENvZGVjKHNkcCwgcGFyYW1zKSB7XG4gIHJldHVybiBtYXliZVByZWZlckNvZGVjKHNkcCwgJ2F1ZGlvJywgJ3NlbmQnLCBwYXJhbXMuYXVkaW9TZW5kQ29kZWMpO1xufVxuXG4vLyBQcm9tb3RlcyB8YXVkaW9SZWN2Q29kZWN8IHRvIGJlIHRoZSBmaXJzdCBpbiB0aGUgbT1hdWRpbyBsaW5lLCBpZiBzZXQuXG5mdW5jdGlvbiBtYXliZVByZWZlckF1ZGlvUmVjZWl2ZUNvZGVjKHNkcCwgcGFyYW1zKSB7XG4gIHJldHVybiBtYXliZVByZWZlckNvZGVjKHNkcCwgJ2F1ZGlvJywgJ3JlY2VpdmUnLCBwYXJhbXMuYXVkaW9SZWN2Q29kZWMpO1xufVxuXG4vLyBQcm9tb3RlcyB8dmlkZW9TZW5kQ29kZWN8IHRvIGJlIHRoZSBmaXJzdCBpbiB0aGUgbT1hdWRpbyBsaW5lLCBpZiBzZXQuXG5mdW5jdGlvbiBtYXliZVByZWZlclZpZGVvU2VuZENvZGVjKHNkcCwgcGFyYW1zKSB7XG4gIHJldHVybiBtYXliZVByZWZlckNvZGVjKHNkcCwgJ3ZpZGVvJywgJ3NlbmQnLCBwYXJhbXMudmlkZW9TZW5kQ29kZWMpO1xufVxuXG4vLyBQcm9tb3RlcyB8dmlkZW9SZWN2Q29kZWN8IHRvIGJlIHRoZSBmaXJzdCBpbiB0aGUgbT1hdWRpbyBsaW5lLCBpZiBzZXQuXG5mdW5jdGlvbiBtYXliZVByZWZlclZpZGVvUmVjZWl2ZUNvZGVjKHNkcCwgcGFyYW1zKSB7XG4gIHJldHVybiBtYXliZVByZWZlckNvZGVjKHNkcCwgJ3ZpZGVvJywgJ3JlY2VpdmUnLCBwYXJhbXMudmlkZW9SZWN2Q29kZWMpO1xufVxuXG4vLyBTZXRzIHxjb2RlY3wgYXMgdGhlIGRlZmF1bHQgfHR5cGV8IGNvZGVjIGlmIGl0J3MgcHJlc2VudC5cbi8vIFRoZSBmb3JtYXQgb2YgfGNvZGVjfCBpcyAnTkFNRS9SQVRFJywgZS5nLiAnb3B1cy80ODAwMCcuXG5mdW5jdGlvbiBtYXliZVByZWZlckNvZGVjKHNkcCwgdHlwZSwgZGlyLCBjb2RlYykge1xuICBjb25zdCBzdHIgPSB0eXBlICsgJyAnICsgZGlyICsgJyBjb2RlYyc7XG4gIGlmICghY29kZWMpIHtcbiAgICBMb2dnZXIuZGVidWcoJ05vIHByZWZlcmVuY2Ugb24gJyArIHN0ciArICcuJyk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIExvZ2dlci5kZWJ1ZygnUHJlZmVyICcgKyBzdHIgKyAnOiAnICsgY29kZWMpO1xuXG4gIGNvbnN0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcblxuICAvLyBTZWFyY2ggZm9yIG0gbGluZS5cbiAgY29uc3QgbUxpbmVJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCB0eXBlKTtcbiAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgLy8gSWYgdGhlIGNvZGVjIGlzIGF2YWlsYWJsZSwgc2V0IGl0IGFzIHRoZSBkZWZhdWx0IGluIG0gbGluZS5cbiAgbGV0IHBheWxvYWQgPSBudWxsO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNkcExpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIGksIC0xLCAnYT1ydHBtYXAnLCBjb2RlYyk7XG4gICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICBwYXlsb2FkID0gZ2V0Q29kZWNQYXlsb2FkVHlwZUZyb21MaW5lKHNkcExpbmVzW2luZGV4XSk7XG4gICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICBzZHBMaW5lc1ttTGluZUluZGV4XSA9IHNldERlZmF1bHRDb2RlYyhzZHBMaW5lc1ttTGluZUluZGV4XSwgcGF5bG9hZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XG4gIHJldHVybiBzZHA7XG59XG5cbi8vIFNldCBmbXRwIHBhcmFtIHRvIHNwZWNpZmljIGNvZGVjIGluIFNEUC4gSWYgcGFyYW0gZG9lcyBub3QgZXhpc3RzLCBhZGQgaXQuXG5mdW5jdGlvbiBzZXRDb2RlY1BhcmFtKHNkcCwgY29kZWMsIHBhcmFtLCB2YWx1ZSwgbWlkKSB7XG4gIGxldCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG4gIGxldCBoZWFkTGluZXMgPSBudWxsO1xuICBsZXQgdGFpbExpbmVzID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBtaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbWlkUmFuZ2UgPSBmaW5kTUxpbmVSYW5nZVdpdGhNSUQoc2RwTGluZXMsIG1pZCk7XG4gICAgaWYgKG1pZFJhbmdlKSB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IG1pZFJhbmdlO1xuICAgICAgaGVhZExpbmVzID0gc2RwTGluZXMuc2xpY2UoMCwgc3RhcnQpO1xuICAgICAgdGFpbExpbmVzID0gc2RwTGluZXMuc2xpY2UoZW5kKTtcbiAgICAgIHNkcExpbmVzID0gc2RwTGluZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU0RQcyBzZW50IGZyb20gTUNVIHVzZSBcXG4gYXMgbGluZSBicmVhay5cbiAgaWYgKHNkcExpbmVzLmxlbmd0aCA8PSAxKSB7XG4gICAgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcbicpO1xuICB9XG5cbiAgY29uc3QgZm10cExpbmVJbmRleCA9IGZpbmRGbXRwTGluZShzZHBMaW5lcywgY29kZWMpO1xuXG4gIGxldCBmbXRwT2JqID0ge307XG4gIGlmIChmbXRwTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ2E9cnRwbWFwJywgY29kZWMpO1xuICAgIGlmIChpbmRleCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHNkcDtcbiAgICB9XG4gICAgY29uc3QgcGF5bG9hZCA9IGdldENvZGVjUGF5bG9hZFR5cGVGcm9tTGluZShzZHBMaW5lc1tpbmRleF0pO1xuICAgIGZtdHBPYmoucHQgPSBwYXlsb2FkLnRvU3RyaW5nKCk7XG4gICAgZm10cE9iai5wYXJhbXMgPSB7fTtcbiAgICBmbXRwT2JqLnBhcmFtc1twYXJhbV0gPSB2YWx1ZTtcbiAgICBzZHBMaW5lcy5zcGxpY2UoaW5kZXggKyAxLCAwLCB3cml0ZUZtdHBMaW5lKGZtdHBPYmopKTtcbiAgfSBlbHNlIHtcbiAgICBmbXRwT2JqID0gcGFyc2VGbXRwTGluZShzZHBMaW5lc1tmbXRwTGluZUluZGV4XSk7XG4gICAgZm10cE9iai5wYXJhbXNbcGFyYW1dID0gdmFsdWU7XG4gICAgc2RwTGluZXNbZm10cExpbmVJbmRleF0gPSB3cml0ZUZtdHBMaW5lKGZtdHBPYmopO1xuICB9XG5cbiAgaWYgKGhlYWRMaW5lcykge1xuICAgIHNkcExpbmVzID0gaGVhZExpbmVzLmNvbmNhdChzZHBMaW5lcykuY29uY2F0KHRhaWxMaW5lcyk7XG4gIH1cbiAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XG4gIHJldHVybiBzZHA7XG59XG5cbi8vIFJlbW92ZSBmbXRwIHBhcmFtIGlmIGl0IGV4aXN0cy5cbmZ1bmN0aW9uIHJlbW92ZUNvZGVjUGFyYW0oc2RwLCBjb2RlYywgcGFyYW0pIHtcbiAgY29uc3Qgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuXG4gIGNvbnN0IGZtdHBMaW5lSW5kZXggPSBmaW5kRm10cExpbmUoc2RwTGluZXMsIGNvZGVjKTtcbiAgaWYgKGZtdHBMaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgY29uc3QgbWFwID0gcGFyc2VGbXRwTGluZShzZHBMaW5lc1tmbXRwTGluZUluZGV4XSk7XG4gIGRlbGV0ZSBtYXAucGFyYW1zW3BhcmFtXTtcblxuICBjb25zdCBuZXdMaW5lID0gd3JpdGVGbXRwTGluZShtYXApO1xuICBpZiAobmV3TGluZSA9PT0gbnVsbCkge1xuICAgIHNkcExpbmVzLnNwbGljZShmbXRwTGluZUluZGV4LCAxKTtcbiAgfSBlbHNlIHtcbiAgICBzZHBMaW5lc1tmbXRwTGluZUluZGV4XSA9IG5ld0xpbmU7XG4gIH1cblxuICBzZHAgPSBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcbiAgcmV0dXJuIHNkcDtcbn1cblxuLy8gU3BsaXQgYW4gZm10cCBsaW5lIGludG8gYW4gb2JqZWN0IGluY2x1ZGluZyAncHQnIGFuZCAncGFyYW1zJy5cbmZ1bmN0aW9uIHBhcnNlRm10cExpbmUoZm10cExpbmUpIHtcbiAgY29uc3QgZm10cE9iaiA9IHt9O1xuICBjb25zdCBzcGFjZVBvcyA9IGZtdHBMaW5lLmluZGV4T2YoJyAnKTtcbiAgY29uc3Qga2V5VmFsdWVzID0gZm10cExpbmUuc3Vic3RyaW5nKHNwYWNlUG9zICsgMSkuc3BsaXQoJzsnKTtcblxuICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgnYT1mbXRwOihcXFxcZCspJyk7XG4gIGNvbnN0IHJlc3VsdCA9IGZtdHBMaW5lLm1hdGNoKHBhdHRlcm4pO1xuICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPT09IDIpIHtcbiAgICBmbXRwT2JqLnB0ID0gcmVzdWx0WzFdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgcGFyYW1zID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5VmFsdWVzLmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgcGFpciA9IGtleVZhbHVlc1tpXS5zcGxpdCgnPScpO1xuICAgIGlmIChwYWlyLmxlbmd0aCA9PT0gMikge1xuICAgICAgcGFyYW1zW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgICB9XG4gIH1cbiAgZm10cE9iai5wYXJhbXMgPSBwYXJhbXM7XG5cbiAgcmV0dXJuIGZtdHBPYmo7XG59XG5cbi8vIEdlbmVyYXRlIGFuIGZtdHAgbGluZSBmcm9tIGFuIG9iamVjdCBpbmNsdWRpbmcgJ3B0JyBhbmQgJ3BhcmFtcycuXG5mdW5jdGlvbiB3cml0ZUZtdHBMaW5lKGZtdHBPYmopIHtcbiAgaWYgKCFmbXRwT2JqLmhhc093blByb3BlcnR5KCdwdCcpIHx8ICFmbXRwT2JqLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHB0ID0gZm10cE9iai5wdDtcbiAgY29uc3QgcGFyYW1zID0gZm10cE9iai5wYXJhbXM7XG4gIGNvbnN0IGtleVZhbHVlcyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xuICAgIGtleVZhbHVlc1tpXSA9IGtleSArICc9JyArIHBhcmFtc1trZXldO1xuICAgICsraTtcbiAgfVxuICBpZiAoaSA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAnYT1mbXRwOicgKyBwdC50b1N0cmluZygpICsgJyAnICsga2V5VmFsdWVzLmpvaW4oJzsnKTtcbn1cblxuLy8gRmluZCBmbXRwIGF0dHJpYnV0ZSBmb3IgfGNvZGVjfCBpbiB8c2RwTGluZXN8LlxuZnVuY3Rpb24gZmluZEZtdHBMaW5lKHNkcExpbmVzLCBjb2RlYykge1xuICAvLyBGaW5kIHBheWxvYWQgb2YgY29kZWMuXG4gIGNvbnN0IHBheWxvYWQgPSBnZXRDb2RlY1BheWxvYWRUeXBlKHNkcExpbmVzLCBjb2RlYyk7XG4gIC8vIEZpbmQgdGhlIHBheWxvYWQgaW4gZm10cCBsaW5lLlxuICByZXR1cm4gcGF5bG9hZCA/IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1mbXRwOicgKyBwYXlsb2FkLnRvU3RyaW5nKCkpIDogbnVsbDtcbn1cblxuLy8gRmluZCB0aGUgbGluZSBpbiBzZHBMaW5lcyB0aGF0IHN0YXJ0cyB3aXRoIHxwcmVmaXh8LCBhbmQsIGlmIHNwZWNpZmllZCxcbi8vIGNvbnRhaW5zIHxzdWJzdHJ8IChjYXNlLWluc2Vuc2l0aXZlIHNlYXJjaCkuXG5mdW5jdGlvbiBmaW5kTGluZShzZHBMaW5lcywgcHJlZml4LCBzdWJzdHIpIHtcbiAgcmV0dXJuIGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgMCwgLTEsIHByZWZpeCwgc3Vic3RyKTtcbn1cblxuLy8gRmluZCB0aGUgbGluZSBpbiBzZHBMaW5lc1tzdGFydExpbmUuLi5lbmRMaW5lIC0gMV0gdGhhdCBzdGFydHMgd2l0aCB8cHJlZml4fFxuLy8gYW5kLCBpZiBzcGVjaWZpZWQsIGNvbnRhaW5zIHxzdWJzdHJ8IChjYXNlLWluc2Vuc2l0aXZlIHNlYXJjaCkuXG5mdW5jdGlvbiBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIHN0YXJ0TGluZSwgZW5kTGluZSwgcHJlZml4LCBzdWJzdHIpIHtcbiAgY29uc3QgcmVhbEVuZExpbmUgPSBlbmRMaW5lICE9PSAtMSA/IGVuZExpbmUgOiBzZHBMaW5lcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSBzdGFydExpbmU7IGkgPCByZWFsRW5kTGluZTsgKytpKSB7XG4gICAgaWYgKHNkcExpbmVzW2ldLmluZGV4T2YocHJlZml4KSA9PT0gMCkge1xuICAgICAgaWYgKCFzdWJzdHIgfHxcbiAgICAgICAgICBzZHBMaW5lc1tpXS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3Vic3RyLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEdldHMgdGhlIGNvZGVjIHBheWxvYWQgdHlwZSBmcm9tIHNkcCBsaW5lcy5cbmZ1bmN0aW9uIGdldENvZGVjUGF5bG9hZFR5cGUoc2RwTGluZXMsIGNvZGVjKSB7XG4gIGNvbnN0IGluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdhPXJ0cG1hcCcsIGNvZGVjKTtcbiAgcmV0dXJuIGluZGV4ID8gZ2V0Q29kZWNQYXlsb2FkVHlwZUZyb21MaW5lKHNkcExpbmVzW2luZGV4XSkgOiBudWxsO1xufVxuXG4vLyBHZXRzIHRoZSBjb2RlYyBwYXlsb2FkIHR5cGUgZnJvbSBhbiBhPXJ0cG1hcDpYIGxpbmUuXG5mdW5jdGlvbiBnZXRDb2RlY1BheWxvYWRUeXBlRnJvbUxpbmUoc2RwTGluZSkge1xuICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgnYT1ydHBtYXA6KFxcXFxkKykgW2EtekEtWjAtOS1dK1xcXFwvXFxcXGQrJyk7XG4gIGNvbnN0IHJlc3VsdCA9IHNkcExpbmUubWF0Y2gocGF0dGVybik7XG4gIHJldHVybiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPT09IDIpID8gcmVzdWx0WzFdIDogbnVsbDtcbn1cblxuLy8gUmV0dXJucyBhIG5ldyBtPSBsaW5lIHdpdGggdGhlIHNwZWNpZmllZCBjb2RlYyBhcyB0aGUgZmlyc3Qgb25lLlxuZnVuY3Rpb24gc2V0RGVmYXVsdENvZGVjKG1MaW5lLCBwYXlsb2FkKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gbUxpbmUuc3BsaXQoJyAnKTtcblxuICAvLyBKdXN0IGNvcHkgdGhlIGZpcnN0IHRocmVlIHBhcmFtZXRlcnM7IGNvZGVjIG9yZGVyIHN0YXJ0cyBvbiBmb3VydGguXG4gIGNvbnN0IG5ld0xpbmUgPSBlbGVtZW50cy5zbGljZSgwLCAzKTtcblxuICAvLyBQdXQgdGFyZ2V0IHBheWxvYWQgZmlyc3QgYW5kIGNvcHkgaW4gdGhlIHJlc3QuXG4gIG5ld0xpbmUucHVzaChwYXlsb2FkKTtcbiAgZm9yIChsZXQgaSA9IDM7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50c1tpXSAhPT0gcGF5bG9hZCkge1xuICAgICAgbmV3TGluZS5wdXNoKGVsZW1lbnRzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld0xpbmUuam9pbignICcpO1xufVxuXG4vKiBCZWxvdyBhcmUgbmV3bHkgYWRkZWQgZnVuY3Rpb25zICovXG5cbi8vIEZvbGxvd2luZyBjb2RlY3Mgd2lsbCBub3QgYmUgcmVtb3ZlZCBmcm9tIFNEUCBldmVudCB0aGV5IGFyZSBub3QgaW4gdGhlXG4vLyB1c2VyLXNwZWNpZmllZCBjb2RlYyBsaXN0LlxuY29uc3QgYXVkaW9Db2RlY0FsbG93TGlzdCA9IFsnQ04nLCAndGVsZXBob25lLWV2ZW50J107XG5jb25zdCB2aWRlb0NvZGVjQWxsb3dMaXN0ID0gWydyZWQnLCAndWxwZmVjJywgJ2ZsZXhmZWMnXTtcblxuLy8gUmV0dXJucyBhIG5ldyBtPSBsaW5lIHdpdGggdGhlIHNwZWNpZmllZCBjb2RlYyBvcmRlci5cbmZ1bmN0aW9uIHNldENvZGVjT3JkZXIobUxpbmUsIHBheWxvYWRzKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gbUxpbmUuc3BsaXQoJyAnKTtcblxuICAvLyBKdXN0IGNvcHkgdGhlIGZpcnN0IHRocmVlIHBhcmFtZXRlcnM7IGNvZGVjIG9yZGVyIHN0YXJ0cyBvbiBmb3VydGguXG4gIGxldCBuZXdMaW5lID0gZWxlbWVudHMuc2xpY2UoMCwgMyk7XG5cbiAgLy8gQ29uY2F0IHBheWxvYWQgdHlwZXMuXG4gIG5ld0xpbmUgPSBuZXdMaW5lLmNvbmNhdChwYXlsb2Fkcyk7XG5cbiAgcmV0dXJuIG5ld0xpbmUuam9pbignICcpO1xufVxuXG4vLyBBcHBlbmQgUlRYIHBheWxvYWRzIGZvciBleGlzdGluZyBwYXlsb2Fkcy5cbmZ1bmN0aW9uIGFwcGVuZFJ0eFBheWxvYWRzKHNkcExpbmVzLCBwYXlsb2Fkcykge1xuICBmb3IgKGNvbnN0IHBheWxvYWQgb2YgcGF5bG9hZHMpIHtcbiAgICBjb25zdCBpbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1mbXRwJywgJ2FwdD0nICsgcGF5bG9hZCk7XG4gICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmbXRwTGluZSA9IHBhcnNlRm10cExpbmUoc2RwTGluZXNbaW5kZXhdKTtcbiAgICAgIHBheWxvYWRzLnB1c2goZm10cExpbmUucHQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGF5bG9hZHM7XG59XG5cbi8vIFJlbW92ZSBhIGNvZGVjIHdpdGggYWxsIGl0cyBhc3NvY2lhdGVkIGEgbGluZXMuXG5mdW5jdGlvbiByZW1vdmVDb2RlY0ZyYW1BTGluZShzZHBMaW5lcywgcGF5bG9hZCkge1xuICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgnYT0ocnRwbWFwfHJ0Y3AtZmJ8Zm10cCk6JytwYXlsb2FkKydcXFxccycpO1xuICBmb3IgKGxldCBpPXNkcExpbmVzLmxlbmd0aC0xOyBpPjA7IGktLSkge1xuICAgIGlmIChzZHBMaW5lc1tpXS5tYXRjaChwYXR0ZXJuKSkge1xuICAgICAgc2RwTGluZXMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2RwTGluZXM7XG59XG5cbi8vIEZpbmQgbS1saW5lIGFuZCBuZXh0IG0tbGluZSB3aXRoIGdpdmUgbWlkLCByZXR1cm4geyBzdGFydCwgZW5kIH0uXG5mdW5jdGlvbiBmaW5kTUxpbmVSYW5nZVdpdGhNSUQoc2RwTGluZXMsIG1pZCkge1xuICBjb25zdCBtaWRMaW5lID0gJ2E9bWlkOicgKyBtaWQ7XG4gIGxldCBtaWRJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCBtaWRMaW5lKTtcbiAgLy8gQ29tcGFyZSB0aGUgd2hvbGUgbGluZSBzaW5jZSBmaW5kTGluZSBvbmx5IGNvbXBhcmVzIHByZWZpeFxuICB3aGlsZSAobWlkSW5kZXggPj0gMCAmJiBzZHBMaW5lc1ttaWRJbmRleF0gIT09IG1pZExpbmUpIHtcbiAgICBtaWRJbmRleCA9IGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgbWlkSW5kZXgsIC0xLCBtaWRMaW5lKTtcbiAgfVxuICBpZiAobWlkSW5kZXggPj0gMCkge1xuICAgIC8vIEZvdW5kIG1hdGNoZWQgYT1taWQgbGluZVxuICAgIGNvbnN0IG5leHRNTGluZUluZGV4ID0gKGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgbWlkSW5kZXgsIC0xLCAnbT0nKVxuICAgICAgICB8fCAtMSk7XG4gICAgbGV0IG1MaW5lSW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCBpID0gbWlkSW5kZXg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoc2RwTGluZXNbaV0uaW5kZXhPZignbT0nKSA+PSAwKSB7XG4gICAgICAgIG1MaW5lSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1MaW5lSW5kZXggPj0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IG1MaW5lSW5kZXgsXG4gICAgICAgIGVuZDogbmV4dE1MaW5lSW5kZXhcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBSZW9yZGVyIGNvZGVjcyBpbiBtLWxpbmUgYWNjb3JkaW5nIHRoZSBvcmRlciBvZiB8Y29kZWNzfC4gUmVtb3ZlIGNvZGVjcyBmcm9tXG4vLyBtLWxpbmUgaWYgaXQgaXMgbm90IHByZXNlbnQgaW4gfGNvZGVjc3xcbi8vIEFwcGxpZWQgb24gc3BlY2lmaWMgbS1saW5lIGlmIG1pZCBpcyBwcmVzZW50ZWRcbi8vIFRoZSBmb3JtYXQgb2YgfGNvZGVjfCBpcyAnTkFNRS9SQVRFJywgZS5nLiAnb3B1cy80ODAwMCcuXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckNvZGVjcyhzZHAsIHR5cGUsIGNvZGVjcywgbWlkKSB7XG4gIGlmICghY29kZWNzIHx8IGNvZGVjcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgY29kZWNzID0gdHlwZSA9PT0gJ2F1ZGlvJyA/IGNvZGVjcy5jb25jYXQoYXVkaW9Db2RlY0FsbG93TGlzdCkgOiBjb2RlY3MuY29uY2F0KFxuICAgICAgdmlkZW9Db2RlY0FsbG93TGlzdCk7XG5cbiAgbGV0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcbiAgbGV0IGhlYWRMaW5lcyA9IG51bGw7XG4gIGxldCB0YWlsTGluZXMgPSBudWxsO1xuICBpZiAodHlwZW9mIG1pZCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtaWRSYW5nZSA9IGZpbmRNTGluZVJhbmdlV2l0aE1JRChzZHBMaW5lcywgbWlkKTtcbiAgICBpZiAobWlkUmFuZ2UpIHtcbiAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gbWlkUmFuZ2U7XG4gICAgICBoZWFkTGluZXMgPSBzZHBMaW5lcy5zbGljZSgwLCBzdGFydCk7XG4gICAgICB0YWlsTGluZXMgPSBzZHBMaW5lcy5zbGljZShlbmQpO1xuICAgICAgc2RwTGluZXMgPSBzZHBMaW5lcy5zbGljZShzdGFydCwgZW5kKTtcbiAgICB9XG4gIH1cblxuICAvLyBTZWFyY2ggZm9yIG0gbGluZS5cbiAgY29uc3QgbUxpbmVJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCB0eXBlKTtcbiAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgY29uc3Qgb3JpZ2luUGF5bG9hZHMgPSBzZHBMaW5lc1ttTGluZUluZGV4XS5zcGxpdCgnICcpO1xuICBvcmlnaW5QYXlsb2Fkcy5zcGxpY2UoMCwgMyk7XG5cbiAgLy8gSWYgdGhlIGNvZGVjIGlzIGF2YWlsYWJsZSwgc2V0IGl0IGFzIHRoZSBkZWZhdWx0IGluIG0gbGluZS5cbiAgbGV0IHBheWxvYWRzID0gW107XG4gIGZvciAoY29uc3QgY29kZWMgb2YgY29kZWNzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZHBMaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5kZXggPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIGksIC0xLCAnYT1ydHBtYXAnLCBjb2RlYyk7XG4gICAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGdldENvZGVjUGF5bG9hZFR5cGVGcm9tTGluZShzZHBMaW5lc1tpbmRleF0pO1xuICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgIHBheWxvYWRzLnB1c2gocGF5bG9hZCk7XG4gICAgICAgICAgaSA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBheWxvYWRzID0gYXBwZW5kUnR4UGF5bG9hZHMoc2RwTGluZXMsIHBheWxvYWRzKTtcbiAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSBzZXRDb2RlY09yZGVyKHNkcExpbmVzW21MaW5lSW5kZXhdLCBwYXlsb2Fkcyk7XG5cbiAgLy8gUmVtb3ZlIGEgbGluZXMuXG4gIGZvciAoY29uc3QgcGF5bG9hZCBvZiBvcmlnaW5QYXlsb2Fkcykge1xuICAgIGlmIChwYXlsb2Fkcy5pbmRleE9mKHBheWxvYWQpPT09LTEpIHtcbiAgICAgIHNkcExpbmVzID0gcmVtb3ZlQ29kZWNGcmFtQUxpbmUoc2RwTGluZXMsIHBheWxvYWQpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChoZWFkTGluZXMpIHtcbiAgICBzZHBMaW5lcyA9IGhlYWRMaW5lcy5jb25jYXQoc2RwTGluZXMpLmNvbmNhdCh0YWlsTGluZXMpO1xuICB9XG4gIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuICByZXR1cm4gc2RwO1xufVxuXG4vLyBBZGQgbGVnYWN5IHNpbXVsY2FzdC5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWdhY3lTaW11bGNhc3Qoc2RwLCB0eXBlLCBudW1TdHJlYW1zLCBtaWQpIHtcbiAgaWYgKCFudW1TdHJlYW1zIHx8ICEobnVtU3RyZWFtcyA+IDEpKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIGxldCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG4gIGxldCBoZWFkTGluZXMgPSBudWxsO1xuICBsZXQgdGFpbExpbmVzID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBtaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbWlkUmFuZ2UgPSBmaW5kTUxpbmVSYW5nZVdpdGhNSUQoc2RwTGluZXMsIG1pZCk7XG4gICAgaWYgKG1pZFJhbmdlKSB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IG1pZFJhbmdlO1xuICAgICAgaGVhZExpbmVzID0gc2RwTGluZXMuc2xpY2UoMCwgc3RhcnQpO1xuICAgICAgdGFpbExpbmVzID0gc2RwTGluZXMuc2xpY2UoZW5kKTtcbiAgICAgIHNkcExpbmVzID0gc2RwTGluZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2VhcmNoIGZvciBtIGxpbmUuXG4gIGNvbnN0IG1MaW5lU3RhcnQgPSBmaW5kTGluZShzZHBMaW5lcywgJ209JywgdHlwZSk7XG4gIGlmIChtTGluZVN0YXJ0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBsZXQgbUxpbmVFbmQgPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIG1MaW5lU3RhcnQgKyAxLCAtMSwgJ209Jyk7XG4gIGlmIChtTGluZUVuZCA9PT0gbnVsbCkge1xuICAgIG1MaW5lRW5kID0gc2RwTGluZXMubGVuZ3RoO1xuICB9XG5cbiAgY29uc3Qgc3NyY0dldHRlciA9IChsaW5lKSA9PiB7XG4gICAgY29uc3QgcGFydHMgPSBsaW5lLnNwbGl0KCcgJyk7XG4gICAgY29uc3Qgc3NyYyA9IHBhcnRzWzBdLnNwbGl0KCc6JylbMV07XG4gICAgcmV0dXJuIHNzcmM7XG4gIH07XG5cbiAgLy8gUHJvY2VzcyBzc3JjIGxpbmVzIGZyb20gbUxpbmVJbmRleC5cbiAgY29uc3QgcmVtb3ZlcyA9IG5ldyBTZXQoKTtcbiAgY29uc3Qgc3NyY3MgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IGdzc3JjcyA9IG5ldyBTZXQoKTtcbiAgY29uc3Qgc2ltTGluZXMgPSBbXTtcbiAgY29uc3Qgc2ltR3JvdXBMaW5lcyA9IFtdO1xuICBsZXQgaSA9IG1MaW5lU3RhcnQgKyAxO1xuICB3aGlsZSAoaSA8IG1MaW5lRW5kKSB7XG4gICAgY29uc3QgbGluZSA9IHNkcExpbmVzW2ldO1xuICAgIGlmIChsaW5lID09PSAnJykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChsaW5lLmluZGV4T2YoJ2E9c3NyYzonKSA+IC0xKSB7XG4gICAgICBjb25zdCBzc3JjID0gc3NyY0dldHRlcihzZHBMaW5lc1tpXSk7XG4gICAgICBzc3Jjcy5hZGQoc3NyYyk7XG4gICAgICBpZiAobGluZS5pbmRleE9mKCdjbmFtZScpID4gLTEgfHwgbGluZS5pbmRleE9mKCdtc2lkJykgPiAtMSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IG51bVN0cmVhbXM7IGorKykge1xuICAgICAgICAgIGNvbnN0IG5zc3JjID0gKHBhcnNlSW50KHNzcmMpICsgaikgKyAnJztcbiAgICAgICAgICBzaW1MaW5lcy5wdXNoKGxpbmUucmVwbGFjZShzc3JjLCBuc3NyYykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVzLmFkZChsaW5lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxpbmUuaW5kZXhPZignYT1zc3JjLWdyb3VwOkZJRCcpID4gLTEpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdCgnICcpO1xuICAgICAgZ3NzcmNzLmFkZChwYXJ0c1syXSk7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IG51bVN0cmVhbXM7IGorKykge1xuICAgICAgICBjb25zdCBuc3NyYzEgPSAocGFyc2VJbnQocGFydHNbMV0pICsgaikgKyAnJztcbiAgICAgICAgY29uc3QgbnNzcmMyID0gKHBhcnNlSW50KHBhcnRzWzJdKSArIGopICsgJyc7XG4gICAgICAgIHNpbUdyb3VwTGluZXMucHVzaChcbiAgICAgICAgICBsaW5lLnJlcGxhY2UocGFydHNbMV0sIG5zc3JjMSkucmVwbGFjZShwYXJ0c1syXSwgbnNzcmMyKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGkrKztcbiAgfVxuXG4gIGNvbnN0IGluc2VydFBvcyA9IGk7XG4gIHNzcmNzLmZvckVhY2goc3NyYyA9PiB7XG4gICAgaWYgKCFnc3NyY3MuaGFzKHNzcmMpKSB7XG4gICAgICBsZXQgZ3JvdXBMaW5lID0gJ2E9c3NyYy1ncm91cDpTSU0nO1xuICAgICAgZ3JvdXBMaW5lID0gZ3JvdXBMaW5lICsgJyAnICsgc3NyYztcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgbnVtU3RyZWFtczsgaisrKSB7XG4gICAgICAgIGdyb3VwTGluZSA9IGdyb3VwTGluZSArICcgJyArIChwYXJzZUludChzc3JjKSArIGopO1xuICAgICAgfVxuICAgICAgc2ltR3JvdXBMaW5lcy5wdXNoKGdyb3VwTGluZSk7XG4gICAgfVxuICB9KTtcblxuICBzaW1MaW5lcy5zb3J0KCk7XG4gIC8vIEluc2VydCBzaW11bGNhc3Qgc3NyYyBsaW5lcy5cbiAgc2RwTGluZXMuc3BsaWNlKGluc2VydFBvcywgMCwgLi4uc2ltR3JvdXBMaW5lcyk7XG4gIHNkcExpbmVzLnNwbGljZShpbnNlcnRQb3MsIDAsIC4uLnNpbUxpbmVzKTtcbiAgc2RwTGluZXMgPSBzZHBMaW5lcy5maWx0ZXIobGluZSA9PiAhcmVtb3Zlcy5oYXMobGluZSkpO1xuXG4gIGlmIChoZWFkTGluZXMpIHtcbiAgICBzZHBMaW5lcyA9IGhlYWRMaW5lcy5jb25jYXQoc2RwTGluZXMpLmNvbmNhdCh0YWlsTGluZXMpO1xuICB9XG4gIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuICByZXR1cm4gc2RwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWF4Qml0cmF0ZShzZHAsIGVuY29kaW5nUGFyYW1ldGVyc0xpc3QsIG1pZCkge1xuICBmb3IgKGNvbnN0IGVuY29kaW5nUGFyYW1ldGVycyBvZiBlbmNvZGluZ1BhcmFtZXRlcnNMaXN0KSB7XG4gICAgaWYgKGVuY29kaW5nUGFyYW1ldGVycy5tYXhCaXRyYXRlKSB7XG4gICAgICBzZHAgPSBzZXRDb2RlY1BhcmFtKFxuICAgICAgICAgIHNkcCwgZW5jb2RpbmdQYXJhbWV0ZXJzLmNvZGVjLm5hbWUsICd4LWdvb2dsZS1tYXgtYml0cmF0ZScsXG4gICAgICAgICAgKGVuY29kaW5nUGFyYW1ldGVycy5tYXhCaXRyYXRlKS50b1N0cmluZygpLCBtaWQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2RwO1xufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vKiBnbG9iYWwgV2ViVHJhbnNwb3J0QmlkaXJlY3Rpb25hbFN0cmVhbSAqL1xuXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyLCBPd3RFdmVudH0gZnJvbSAnLi9ldmVudC5qcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5mdW5jdGlvbiBpc0FsbG93ZWRWYWx1ZShvYmosIGFsbG93ZWRWYWx1ZXMpIHtcbiAgcmV0dXJuIChhbGxvd2VkVmFsdWVzLnNvbWUoKGVsZSkgPT4ge1xuICAgIHJldHVybiBlbGUgPT09IG9iajtcbiAgfSkpO1xufVxuLyoqXG4gKiBAY2xhc3MgU3RyZWFtU291cmNlSW5mb1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIEluZm9ybWF0aW9uIG9mIGEgc3RyZWFtJ3Mgc291cmNlLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZGVzY3JpcHRpb24gQXVkaW8gc291cmNlIGluZm8gb3IgdmlkZW8gc291cmNlIGluZm8gY291bGQgYmUgdW5kZWZpbmVkIGlmXG4gKiBhIHN0cmVhbSBkb2VzIG5vdCBoYXZlIGF1ZGlvL3ZpZGVvIHRyYWNrLlxuICogQHBhcmFtIHs/c3RyaW5nfSBhdWRpb1NvdXJjZUluZm8gQXVkaW8gc291cmNlIGluZm8uIEFjY2VwdGVkIHZhbHVlcyBhcmU6XG4gKiBcIm1pY1wiLCBcInNjcmVlbi1jYXN0XCIsIFwiZmlsZVwiLCBcIm1peGVkXCIgb3IgdW5kZWZpbmVkLlxuICogQHBhcmFtIHs/c3RyaW5nfSB2aWRlb1NvdXJjZUluZm8gVmlkZW8gc291cmNlIGluZm8uIEFjY2VwdGVkIHZhbHVlcyBhcmU6XG4gKiBcImNhbWVyYVwiLCBcInNjcmVlbi1jYXN0XCIsIFwiZmlsZVwiLCBcIm1peGVkXCIgb3IgdW5kZWZpbmVkLlxuICogQHBhcmFtIHtib29sZWFufSBkYXRhU291cmNlSW5mbyBJbmRpY2F0ZXMgd2hldGhlciBpdCBpcyBkYXRhLiBBY2NlcHRlZCB2YWx1ZXNcbiAqIGFyZSBib29sZWFuLlxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtU291cmNlSW5mbyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGF1ZGlvU291cmNlSW5mbywgdmlkZW9Tb3VyY2VJbmZvLCBkYXRhU291cmNlSW5mbykge1xuICAgIGlmICghaXNBbGxvd2VkVmFsdWUoYXVkaW9Tb3VyY2VJbmZvLCBbdW5kZWZpbmVkLCAnbWljJywgJ3NjcmVlbi1jYXN0JyxcbiAgICAgICdmaWxlJywgJ21peGVkJ10pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvcnJlY3QgdmFsdWUgZm9yIGF1ZGlvU291cmNlSW5mbycpO1xuICAgIH1cbiAgICBpZiAoIWlzQWxsb3dlZFZhbHVlKHZpZGVvU291cmNlSW5mbywgW3VuZGVmaW5lZCwgJ2NhbWVyYScsICdzY3JlZW4tY2FzdCcsXG4gICAgICAnZmlsZScsICdlbmNvZGVkLWZpbGUnLCAncmF3LWZpbGUnLCAnbWl4ZWQnXSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29ycmVjdCB2YWx1ZSBmb3IgdmlkZW9Tb3VyY2VJbmZvJyk7XG4gICAgfVxuICAgIHRoaXMuYXVkaW8gPSBhdWRpb1NvdXJjZUluZm87XG4gICAgdGhpcy52aWRlbyA9IHZpZGVvU291cmNlSW5mbztcbiAgICB0aGlzLmRhdGEgPSBkYXRhU291cmNlSW5mbztcbiAgfVxufVxuLyoqXG4gKiBAY2xhc3MgU3RyZWFtXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgQmFzZSBjbGFzcyBvZiBzdHJlYW1zLlxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW0gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihzdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICgoc3RyZWFtICYmICEoc3RyZWFtIGluc3RhbmNlb2YgTWVkaWFTdHJlYW0pICYmXG4gICAgICAgICAhKHR5cGVvZiBXZWJUcmFuc3BvcnRCaWRpcmVjdGlvbmFsU3RyZWFtID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgIHN0cmVhbSBpbnN0YW5jZW9mIFdlYlRyYW5zcG9ydEJpZGlyZWN0aW9uYWxTdHJlYW0pKSB8fFxuICAgICAgICAodHlwZW9mIHNvdXJjZUluZm8gIT09ICdvYmplY3QnKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBzdHJlYW0gb3Igc291cmNlSW5mby4nKTtcbiAgICB9XG4gICAgaWYgKHN0cmVhbSAmJiAoc3RyZWFtIGluc3RhbmNlb2YgTWVkaWFTdHJlYW0pICYmXG4gICAgICAgICgoc3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoID4gMCAmJiAhc291cmNlSW5mby5hdWRpbykgfHxcbiAgICAgICAgIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCA+IDAgJiYgIXNvdXJjZUluZm8udmlkZW8pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNaXNzaW5nIGF1ZGlvIHNvdXJjZSBpbmZvIG9yIHZpZGVvIHNvdXJjZSBpbmZvLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbVxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYWNhcHR1cmUtc3RyZWFtcy8jbWVkaWFzdHJlYW18TWVkaWFTdHJlYW0gQVBJIG9mIE1lZGlhIENhcHR1cmUgYW5kIFN0cmVhbXN9LlxuICAgICAqIEBkZXNjIFRoaXMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBzdHJlYW0gaW5zdGVhZC5cbiAgICAgKi9cbiAgICBpZiAoc3RyZWFtIGluc3RhbmNlb2YgTWVkaWFTdHJlYW0pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVkaWFTdHJlYW0nLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogc3RyZWFtLFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge01lZGlhU3RyZWFtIHwgV2ViVHJhbnNwb3J0QmlkaXJlY3Rpb25hbFN0cmVhbSB8IHVuZGVmaW5lZH0gc3RyZWFtXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbVxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYWNhcHR1cmUtc3RyZWFtcy8jbWVkaWFzdHJlYW18TWVkaWFTdHJlYW0gQVBJIG9mIE1lZGlhIENhcHR1cmUgYW5kIFN0cmVhbXN9XG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93aWNnLmdpdGh1Yi5pby93ZWItdHJhbnNwb3J0LyBXZWJUcmFuc3BvcnR9LlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc3RyZWFtJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHN0cmVhbSxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5TdHJlYW1Tb3VyY2VJbmZvfSBzb3VyY2VcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuU3RyZWFtXG4gICAgICogQGRlc2MgU291cmNlIGluZm8gb2YgYSBzdHJlYW0uXG4gICAgICovXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZUluZm8sXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7b2JqZWN0fSBhdHRyaWJ1dGVzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbVxuICAgICAqIEBkZXNjIEN1c3RvbSBhdHRyaWJ1dGVzIG9mIGEgc3RyZWFtLlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYXR0cmlidXRlcycsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLFxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEBjbGFzcyBMb2NhbFN0cmVhbVxuICogQGNsYXNzRGVzYyBTdHJlYW0gY2FwdHVyZWQgZnJvbSBjdXJyZW50IGVuZHBvaW50LlxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5TdHJlYW1cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gc3RyZWFtIFVuZGVybHlpbmcgTWVkaWFTdHJlYW0uXG4gKiBAcGFyYW0ge093dC5CYXNlLlN0cmVhbVNvdXJjZUluZm99IHNvdXJjZUluZm8gSW5mb3JtYXRpb24gYWJvdXQgc3RyZWFtJ3NcbiAqIHNvdXJjZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIEN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoZSBzdHJlYW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2NhbFN0cmVhbSBleHRlbmRzIFN0cmVhbSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHN0cmVhbSwgc291cmNlSW5mbywgYXR0cmlidXRlcykge1xuICAgIGlmICghc3RyZWFtKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdHJlYW0gY2Fubm90IGJlIG51bGwuJyk7XG4gICAgfVxuICAgIHN1cGVyKHN0cmVhbSwgc291cmNlSW5mbywgYXR0cmlidXRlcyk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5Mb2NhbFN0cmVhbVxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IFV0aWxzLmNyZWF0ZVV1aWQoKSxcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBAY2xhc3MgUmVtb3RlU3RyZWFtXG4gKiBAY2xhc3NEZXNjIFN0cmVhbSBzZW50IGZyb20gYSByZW1vdGUgZW5kcG9pbnQuIEluIGNvbmZlcmVuY2UgbW9kZSxcbiAqIFJlbW90ZVN0cmVhbSdzIHN0cmVhbSBpcyBhbHdheXMgdW5kZWZpbmVkLiBQbGVhc2UgZ2V0IE1lZGlhU3RyZWFtIG9yXG4gKiBSZWFkYWJsZVN0cmVhbSBmcm9tIHN1YnNjcmlwdGlvbidzIHN0cmVhbSBwcm9wZXJ0eS5cbiAqIEV2ZW50czpcbiAqXG4gKiB8IEV2ZW50IE5hbWUgICAgICB8IEFyZ3VtZW50IFR5cGUgICAgfCBGaXJlZCB3aGVuICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tfCAtLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgZW5kZWQgICAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFN0cmVhbSBpcyBubyBsb25nZXIgYXZhaWxhYmxlIG9uIHNlcnZlciBzaWRlLiAgIHxcbiAqIHwgdXBkYXRlZCAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFN0cmVhbSBpcyB1cGRhdGVkLiB8XG4gKlxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5TdHJlYW1cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFJlbW90ZVN0cmVhbSBleHRlbmRzIFN0cmVhbSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGlkLCBvcmlnaW4sIHN0cmVhbSwgc291cmNlSW5mbywgYXR0cmlidXRlcykge1xuICAgIHN1cGVyKHN0cmVhbSwgc291cmNlSW5mbywgYXR0cmlidXRlcyk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5SZW1vdGVTdHJlYW1cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBpZCA/IGlkIDogVXRpbHMuY3JlYXRlVXVpZCgpLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gb3JpZ2luXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlJlbW90ZVN0cmVhbVxuICAgICAqIEBkZXNjIElEIG9mIHRoZSByZW1vdGUgZW5kcG9pbnQgd2hvIHB1Ymxpc2hlZCB0aGlzIHN0cmVhbS5cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ29yaWdpbicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogb3JpZ2luLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlB1YmxpY2F0aW9uU2V0dGluZ3N9IHNldHRpbmdzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlJlbW90ZVN0cmVhbVxuICAgICAqIEBkZXNjIE9yaWdpbmFsIHNldHRpbmdzIGZvciBwdWJsaXNoaW5nIHRoaXMgc3RyZWFtLiBUaGlzIHByb3BlcnR5IGlzIG9ubHlcbiAgICAgKiB2YWxpZCBpbiBjb25mZXJlbmNlIG1vZGUuXG4gICAgICovXG4gICAgdGhpcy5zZXR0aW5ncyA9IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXN9IGV4dHJhQ2FwYWJpbGl0aWVzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlJlbW90ZVN0cmVhbVxuICAgICAqIEBkZXNjIEV4dHJhIGNhcGFiaWxpdGllcyByZW1vdGUgZW5kcG9pbnQgcHJvdmlkZXMgZm9yIHN1YnNjcmlwdGlvbi4gRXh0cmFcbiAgICAgKiBjYXBhYmlsaXRpZXMgZG9uJ3QgaW5jbHVkZSBvcmlnaW5hbCBzZXR0aW5ncy4gVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IHZhbGlkXG4gICAgICogaW4gY29uZmVyZW5jZSBtb2RlLlxuICAgICAqL1xuICAgIHRoaXMuZXh0cmFDYXBhYmlsaXRpZXMgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgU3RyZWFtRXZlbnRcbiAqIEBjbGFzc0Rlc2MgRXZlbnQgZm9yIFN0cmVhbS5cbiAqIEBleHRlbmRzIE93dC5CYXNlLk93dEV2ZW50XG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbUV2ZW50IGV4dGVuZHMgT3d0RXZlbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpbml0KSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuU3RyZWFtfSBzdHJlYW1cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuU3RyZWFtRXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLnN0cmVhbSA9IGluaXQuc3RyZWFtO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDIwPiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAY2xhc3MgVHJhbnNwb3J0VHlwZVxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFRyYW5zcG9ydCB0eXBlIGVudW1lcmF0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgVHJhbnNwb3J0VHlwZSA9IHtcbiAgUVVJQzogJ3F1aWMnLFxuICBXRUJSVEM6ICd3ZWJydGMnLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgVHJhbnNwb3J0Q29uc3RyYWludHNcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSB0cmFuc3BvcnQgY29uc3RyYWludHMgZm9yIHB1YmxpY2F0aW9uIGFuZFxuICogc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNwb3J0Q29uc3RyYWludHMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpZCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FycmF5LjxPd3QuQmFzZS5UcmFuc3BvcnRUeXBlPn0gdHlwZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5UcmFuc3BvcnRDb25zdHJhaW50c1xuICAgICAqIEBkZXNjIFRyYW5zcG9ydCB0eXBlIGZvciBwdWJsaWNhdGlvbiBhbmQgc3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVHJhbnNwb3J0Q29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBUcmFuc3BvcnQgSUQuIFVuZGVmaW5lZCB0cmFuc3BvcnQgSUQgcmVzdWx0cyBzZXJ2ZXIgdG8gYXNzaWduIGEgbmV3XG4gICAgICogb25lLiBJdCBzaG91bGQgYWx3YXlzIGJlIHVuZGVmaW5lZCBpZiB0cmFuc3BvcnQgdHlwZSBpcyB3ZWJydGMgc2luY2UgdGhlXG4gICAgICogd2VicnRjIGFnZW50IG9mIE9XVCBzZXJ2ZXIgZG9lc24ndCBzdXBwb3J0IG11bHRpcGxlIHRyYW5zY2VpdmVycyBvbiBhXG4gICAgICogc2luZ2xlIFBlZXJDb25uZWN0aW9uLlxuICAgICAqL1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBUcmFuc3BvcnRTZXR0aW5nc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFJlcHJlc2VudHMgdGhlIHRyYW5zcG9ydCBzZXR0aW5ncyBmb3IgcHVibGljYXRpb24gYW5kXG4gKiBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc3BvcnRTZXR0aW5ncyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGlkKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuVHJhbnNwb3J0VHlwZX0gdHlwZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5UcmFuc3BvcnRTZXR0aW5nc1xuICAgICAqIEBkZXNjIFRyYW5zcG9ydCB0eXBlIGZvciBwdWJsaWNhdGlvbiBhbmQgc3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5UcmFuc3BvcnRTZXR0aW5nc1xuICAgICAqIEBkZXNjIFRyYW5zcG9ydCBJRC5cbiAgICAgKi9cbiAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/QXJyYXkuPFJUQ1J0cFRyYW5zY2VpdmVyPn0gcnRwVHJhbnNjZWl2ZXJzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlRyYW5zcG9ydFNldHRpbmdzXG4gICAgICogQGRlc2MgQSBsaXN0IG9mIFJUQ1J0cFRyYW5zY2VpdmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHVibGljYXRpb24gb3JcbiAgICAgKiBzdWJzY3JpcHRpb24uIEl0J3Mgb25seSBhdmFpbGFibGUgaW4gY29uZmVyZW5jZSBtb2RlIHdoZW4gVHJhbnNwb3J0VHlwZVxuICAgICAqIGlzIHdlYnJ0Yy5cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vd2VicnRjLXBjLyNydGNydHB0cmFuc2NlaXZlci1pbnRlcmZhY2V8UlRDUnRwVHJhbnNjZWl2ZXIgSW50ZXJmYWNlIG9mIFdlYlJUQyAxLjB9LlxuICAgICAqL1xuICAgIHRoaXMucnRwVHJhbnNjZWl2ZXJzID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBuYXZpZ2F0b3IsIHdpbmRvdyAqL1xuXG4ndXNlIHN0cmljdCc7XG5jb25zdCBzZGtWZXJzaW9uID0gJzUuMCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gaXNGaXJlZm94KCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goJ0ZpcmVmb3gnKSAhPT0gbnVsbDtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gaXNDaHJvbWUoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgnQ2hyb21lJykgIT09IG51bGw7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICByZXR1cm4gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWRnZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLihcXGQrKSQvKSAhPT0gbnVsbDtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXVpZCgpIHtcbiAgcmV0dXJuICd4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG4gICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XG4gICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICB9KTtcbn1cblxuLy8gUmV0dXJucyBzeXN0ZW0gaW5mb3JtYXRpb24uXG4vLyBGb3JtYXQ6IHtzZGs6e3ZlcnNpb246KiosIHR5cGU6Kip9LCBydW50aW1lOnt2ZXJzaW9uOioqLCBuYW1lOioqfSwgb3M6e3ZlcnNpb246KiosIG5hbWU6Kip9fTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gc3lzSW5mbygpIHtcbiAgY29uc3QgaW5mbyA9IE9iamVjdC5jcmVhdGUoe30pO1xuICBpbmZvLnNkayA9IHtcbiAgICB2ZXJzaW9uOiBzZGtWZXJzaW9uLFxuICAgIHR5cGU6ICdKYXZhU2NyaXB0JyxcbiAgfTtcbiAgLy8gUnVudGltZSBpbmZvLlxuICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBjb25zdCBmaXJlZm94UmVnZXggPSAvRmlyZWZveFxcLyhbMC05Ll0rKS87XG4gIGNvbnN0IGNocm9tZVJlZ2V4ID0gL0Nocm9tZVxcLyhbMC05Ll0rKS87XG4gIGNvbnN0IGVkZ2VSZWdleCA9IC9FZGdlXFwvKFswLTkuXSspLztcbiAgY29uc3Qgc2FmYXJpVmVyc2lvblJlZ2V4ID0gL1ZlcnNpb25cXC8oWzAtOS5dKykgU2FmYXJpLztcbiAgbGV0IHJlc3VsdCA9IGNocm9tZVJlZ2V4LmV4ZWModXNlckFnZW50KTtcbiAgaWYgKHJlc3VsdCkge1xuICAgIGluZm8ucnVudGltZSA9IHtcbiAgICAgIG5hbWU6ICdDaHJvbWUnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gZmlyZWZveFJlZ2V4LmV4ZWModXNlckFnZW50KSkge1xuICAgIGluZm8ucnVudGltZSA9IHtcbiAgICAgIG5hbWU6ICdGaXJlZm94JyxcbiAgICAgIHZlcnNpb246IHJlc3VsdFsxXSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHJlc3VsdCA9IGVkZ2VSZWdleC5leGVjKHVzZXJBZ2VudCkpIHtcbiAgICBpbmZvLnJ1bnRpbWUgPSB7XG4gICAgICBuYW1lOiAnRWRnZScsXG4gICAgICB2ZXJzaW9uOiByZXN1bHRbMV0sXG4gICAgfTtcbiAgfSBlbHNlIGlmIChpc1NhZmFyaSgpKSB7XG4gICAgcmVzdWx0ID0gc2FmYXJpVmVyc2lvblJlZ2V4LmV4ZWModXNlckFnZW50KTtcbiAgICBpbmZvLnJ1bnRpbWUgPSB7XG4gICAgICBuYW1lOiAnU2FmYXJpJyxcbiAgICB9O1xuICAgIGluZm8ucnVudGltZS52ZXJzaW9uID0gcmVzdWx0ID8gcmVzdWx0WzFdIDogJ1Vua25vd24nO1xuICB9IGVsc2Uge1xuICAgIGluZm8ucnVudGltZSA9IHtcbiAgICAgIG5hbWU6ICdVbmtub3duJyxcbiAgICAgIHZlcnNpb246ICdVbmtub3duJyxcbiAgICB9O1xuICB9XG4gIC8vIE9TIGluZm8uXG4gIGNvbnN0IHdpbmRvd3NSZWdleCA9IC9XaW5kb3dzIE5UIChbMC05Ll0rKS87XG4gIGNvbnN0IG1hY1JlZ2V4ID0gL0ludGVsIE1hYyBPUyBYIChbMC05Xy5dKykvO1xuICBjb25zdCBpUGhvbmVSZWdleCA9IC9pUGhvbmUgT1MgKFswLTlfLl0rKS87XG4gIGNvbnN0IGxpbnV4UmVnZXggPSAvWDExOyBMaW51eC87XG4gIGNvbnN0IGFuZHJvaWRSZWdleCA9IC9BbmRyb2lkKCAoWzAtOS5dKykpPy87XG4gIGNvbnN0IGNocm9taXVtT3NSZWdleCA9IC9Dck9TLztcbiAgaWYgKHJlc3VsdCA9IHdpbmRvd3NSZWdleC5leGVjKHVzZXJBZ2VudCkpIHtcbiAgICBpbmZvLm9zID0ge1xuICAgICAgbmFtZTogJ1dpbmRvd3MgTlQnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gbWFjUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdNYWMgT1MgWCcsXG4gICAgICB2ZXJzaW9uOiByZXN1bHRbMV0ucmVwbGFjZSgvXy9nLCAnLicpLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gaVBob25lUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdpUGhvbmUgT1MnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdLnJlcGxhY2UoL18vZywgJy4nKSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHJlc3VsdCA9IGxpbnV4UmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdMaW51eCcsXG4gICAgICB2ZXJzaW9uOiAnVW5rbm93bicsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChyZXN1bHQgPSBhbmRyb2lkUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdBbmRyb2lkJyxcbiAgICAgIHZlcnNpb246IHJlc3VsdFsxXSB8fCAnVW5rbm93bicsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChyZXN1bHQgPSBjaHJvbWl1bU9zUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdDaHJvbWUgT1MnLFxuICAgICAgdmVyc2lvbjogJ1Vua25vd24nLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdVbmtub3duJyxcbiAgICAgIHZlcnNpb246ICdVbmtub3duJyxcbiAgICB9O1xuICB9XG4gIGluZm8uY2FwYWJpbGl0aWVzID0ge1xuICAgIGNvbnRpbnVhbEljZUdhdGhlcmluZzogZmFsc2UsXG4gICAgc3RyZWFtUmVtb3ZhYmxlOiBpbmZvLnJ1bnRpbWUubmFtZSAhPT0gJ0ZpcmVmb3gnLFxuICAgIGlnbm9yZURhdGFDaGFubmVsQWNrczogdHJ1ZSxcbiAgfTtcbiAgcmV0dXJuIGluZm87XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MgKi9cbi8qIGdsb2JhbCBNYXAsIFByb21pc2UsIHNldFRpbWVvdXQgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCB7XG4gIEV2ZW50RGlzcGF0Y2hlcixcbiAgTWVzc2FnZUV2ZW50LFxuICBPd3RFdmVudCxcbiAgRXJyb3JFdmVudCxcbiAgTXV0ZUV2ZW50LFxufSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7VHJhY2tLaW5kfSBmcm9tICcuLi9iYXNlL21lZGlhZm9ybWF0LmpzJztcbmltcG9ydCB7UHVibGljYXRpb259IGZyb20gJy4uL2Jhc2UvcHVibGljYXRpb24uanMnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4vc3Vic2NyaXB0aW9uLmpzJztcbmltcG9ydCB7Q29uZmVyZW5jZUVycm9yfSBmcm9tICcuL2Vycm9yLmpzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4uL2Jhc2UvdXRpbHMuanMnO1xuaW1wb3J0ICogYXMgU2RwVXRpbHMgZnJvbSAnLi4vYmFzZS9zZHB1dGlscy5qcyc7XG5pbXBvcnQge1RyYW5zcG9ydFNldHRpbmdzLCBUcmFuc3BvcnRUeXBlfSBmcm9tICcuLi9iYXNlL3RyYW5zcG9ydC5qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvbmZlcmVuY2VQZWVyQ29ubmVjdGlvbkNoYW5uZWxcbiAqIEBjbGFzc0Rlc2MgQSBjaGFubmVsIGZvciBhIGNvbm5lY3Rpb24gYmV0d2VlbiBjbGllbnQgYW5kIGNvbmZlcmVuY2Ugc2VydmVyLlxuICogQ3VycmVudGx5LCBvbmx5IG9uZSBzdHJlYW0gY291bGQgYmUgdHJhbm1pdHRlZCBpbiBhIGNoYW5uZWwuXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgQ29uZmVyZW5jZVBlZXJDb25uZWN0aW9uQ2hhbm5lbCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgc2lnbmFsaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBjID0gbnVsbDtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fdmlkZW9Db2RlY3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fb3B0aW9ucyA9IG51bGw7XG4gICAgdGhpcy5fdmlkZW9Db2RlY3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2lnbmFsaW5nID0gc2lnbmFsaW5nO1xuICAgIHRoaXMuX2ludGVybmFsSWQgPSBudWxsOyAvLyBJdCdzIHB1YmxpY2F0aW9uIElEIG9yIHN1YnNjcmlwdGlvbiBJRC5cbiAgICB0aGlzLl9wZW5kaW5nQ2FuZGlkYXRlcyA9IFtdO1xuICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzID0gbmV3IE1hcCgpOyAvLyBpbnRlcm5hbElkID0+IHsgcmVzb2x2ZSwgcmVqZWN0IH1cbiAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMgPSBuZXcgTWFwKCk7IC8vIGludGVybmFsSWQgPT4geyByZXNvbHZlLCByZWplY3QgfVxuICAgIHRoaXMuX3B1YmxpY2F0aW9ucyA9IG5ldyBNYXAoKTsgLy8gUHVibGljYXRpb25JZCA9PiBQdWJsaWNhdGlvblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBuZXcgTWFwKCk7IC8vIFN1YnNjcmlwdGlvbklkID0+IFN1YnNjcmlwdGlvblxuICAgIHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMgPSBuZXcgTWFwKCk7IC8vIGludGVybmFsSWQgPT4geyBpZCwgdHJhbnNjZWl2ZXJzOiBbVHJhbnNjZWl2ZXJdIH1cbiAgICB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMgPSBuZXcgTWFwKCk7IC8vIGludGVybmFsSWQgPT4geyBpZCwgdHJhbnNjZWl2ZXJzOiBbVHJhbnNjZWl2ZXJdIH1cbiAgICB0aGlzLl9yZXZlcnNlSWRNYXAgPSBuZXcgTWFwKCk7IC8vIFB1YmxpY2F0aW9uSWQgfHwgU3Vic2NyaXB0aW9uSWQgPT4gaW50ZXJuYWxJZFxuICAgIC8vIFRpbWVyIGZvciBQZWVyQ29ubmVjdGlvbiBkaXNjb25uZWN0ZWQuIFdpbGwgc3RvcCBjb25uZWN0aW9uIGFmdGVyIHRpbWVyLlxuICAgIHRoaXMuX2Rpc2Nvbm5lY3RUaW1lciA9IG51bGw7XG4gICAgdGhpcy5fZW5kZWQgPSBmYWxzZTtcbiAgICAvLyBDaGFubmVsIElEIGFzc2lnbmVkIGJ5IGNvbmZlcmVuY2VcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgICAvLyBVc2VkIHRvIGNyZWF0ZSBpbnRlcm5hbCBJRCBmb3IgcHVibGljYXRpb24vc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5faW50ZXJuYWxDb3VudCA9IDA7XG4gICAgdGhpcy5fc2RwUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuX3NkcFJlc29sdmVyTWFwID0gbmV3IE1hcCgpOyAvLyBpbnRlcm5hbElkID0+IHtmaW5pc2gsIHJlc29sdmUsIHJlamVjdH1cbiAgICB0aGlzLl9zZHBSZXNvbHZlcnMgPSBbXTsgLy8gW3tmaW5pc2gsIHJlc29sdmUsIHJlamVjdH1dXG4gICAgdGhpcy5fc2RwUmVzb2x2ZU51bSA9IDA7XG4gICAgdGhpcy5fcmVtb3RlTWVkaWFTdHJlYW1zID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgc3Vic2NyaXB0aW9uIElELCB2YWx1ZSBpcyBNZWRpYVN0cmVhbS5cbiAgICB0aGlzLl9jcmVhdGVQZWVyQ29ubmVjdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBvbk1lc3NhZ2VcbiAgICogQGRlc2MgUmVjZWl2ZWQgYSBtZXNzYWdlIGZyb20gY29uZmVyZW5jZSBwb3J0YWwuIERlZmluZWQgaW4gY2xpZW50LXNlcnZlclxuICAgKiBwcm90b2NvbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5vdGlmaWNhdGlvbiBOb3RpZmljYXRpb24gdHlwZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG1lc3NhZ2UgTWVzc2FnZSByZWNlaXZlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIG9uTWVzc2FnZShub3RpZmljYXRpb24sIG1lc3NhZ2UpIHtcbiAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbikge1xuICAgICAgY2FzZSAncHJvZ3Jlc3MnOlxuICAgICAgICBpZiAobWVzc2FnZS5zdGF0dXMgPT09ICdzb2FjJykge1xuICAgICAgICAgIHRoaXMuX3NkcEhhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3JlYWR5Jykge1xuICAgICAgICAgIHRoaXMuX3JlYWR5SGFuZGxlcihtZXNzYWdlLnNlc3Npb25JZCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICB0aGlzLl9lcnJvckhhbmRsZXIobWVzc2FnZS5zZXNzaW9uSWQsIG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJlYW0nOlxuICAgICAgICB0aGlzLl9vblN0cmVhbUV2ZW50KG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdVbmtub3duIG5vdGlmaWNhdGlvbiBmcm9tIE1DVS4nKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBwdWJsaXNoV2l0aFRyYW5zY2VpdmVycyhzdHJlYW0sIHRyYW5zY2VpdmVycykge1xuICAgIGZvciAoY29uc3QgdCBvZiB0cmFuc2NlaXZlcnMpIHtcbiAgICAgIGlmICh0LmRpcmVjdGlvbiAhPT0gJ3NlbmRvbmx5Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAnUlRDUnRwVHJhbnNjZWl2ZXJcXCdzIGRpcmVjdGlvbiBtdXN0IGJlIHNlbmRvbmx5LicpO1xuICAgICAgfVxuICAgICAgaWYgKCFzdHJlYW0uc3RyZWFtLmdldFRyYWNrcygpLmluY2x1ZGVzKHQuc2VuZGVyLnRyYWNrKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAnVGhlIHRyYWNrIGFzc29jaWF0ZWQgd2l0aCBSVENSdHBTZW5kZXIgaXMgbm90IGluY2x1ZGVkIGluICcgK1xuICAgICAgICAgICAgJ3N0cmVhbS4nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2NlaXZlcnMubGVuZ3RoID4gMikge1xuICAgICAgICAvLyBOb3Qgc3VwcG9ydGVkIGJ5IHNlcnZlci5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgJ0F0IG1vc3Qgb25lIHRyYW5zY2VpdmVyIGZvciBhdWRpbyBhbmQgb25lIHRyYW5zY2VpdmVyIGZvciB2aWRlbyAnICtcbiAgICAgICAgICAgICdhcmUgYWNjZXB0ZWQuJyk7XG4gICAgICB9XG4gICAgICBjb25zdCB0cmFuc2NlaXZlckRlc2NyaXB0aW9uID0gdHJhbnNjZWl2ZXJzLm1hcCgodCkgPT4ge1xuICAgICAgICBjb25zdCBraW5kID0gdC5zZW5kZXIudHJhY2sua2luZDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBraW5kLFxuICAgICAgICAgIHRyYW5zY2VpdmVyOiB0LFxuICAgICAgICAgIHNvdXJjZTogc3RyZWFtLnNvdXJjZVtraW5kXSxcbiAgICAgICAgICBvcHRpb246IHt9LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCBpbnRlcm5hbElkID0gdGhpcy5fY3JlYXRlSW50ZXJuYWxJZCgpO1xuICAgICAgYXdhaXQgdGhpcy5fY2hhaW5TZHBQcm9taXNlKGludGVybmFsSWQpOyAvLyBDb3BpZWQgZnJvbSBwdWJsaXNoIG1ldGhvZC5cbiAgICAgIHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuc2V0KGludGVybmFsSWQsIHRyYW5zY2VpdmVyRGVzY3JpcHRpb24pO1xuICAgICAgY29uc3Qgb2ZmZXI9YXdhaXQgdGhpcy5wYy5jcmVhdGVPZmZlcigpO1xuICAgICAgYXdhaXQgdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKG9mZmVyKTtcbiAgICAgIGNvbnN0IHRyYWNrT3B0aW9ucyA9IHRyYW5zY2VpdmVycy5tYXAoKHQpID0+IHtcbiAgICAgICAgY29uc3Qga2luZCA9IHQuc2VuZGVyLnRyYWNrLmtpbmQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZToga2luZCxcbiAgICAgICAgICBzb3VyY2U6IHN0cmVhbS5zb3VyY2Vba2luZF0sXG4gICAgICAgICAgbWlkOiB0Lm1pZCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcHVibGlzaFJlc3AgPVxuICAgICAgICAgIGF3YWl0IHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgncHVibGlzaCcsIHtcbiAgICAgICAgICAgIG1lZGlhOiB7dHJhY2tzOiB0cmFja09wdGlvbnN9LFxuICAgICAgICAgICAgYXR0cmlidXRlczogc3RyZWFtLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICB0cmFuc3BvcnQ6IHtpZDogdGhpcy5faWQsIHR5cGU6ICd3ZWJydGMnfSxcbiAgICAgICAgICB9KTtcbiAgICAgIGNvbnN0IHB1YmxpY2F0aW9uSWQgPSBwdWJsaXNoUmVzcC5pZDtcblxuXG4gICAgICBjb25zdCBtZXNzYWdlRXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KCdpZCcsIHtcbiAgICAgICAgbWVzc2FnZTogcHVibGljYXRpb25JZCxcbiAgICAgICAgb3JpZ2luOiB0aGlzLl9yZW1vdGVJZCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG1lc3NhZ2VFdmVudCk7XG5cbiAgICAgIHRoaXMuX2lkID0gcHVibGlzaFJlc3AudHJhbnNwb3J0SWQ7XG4gICAgICB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKS5pZCA9IHB1YmxpY2F0aW9uSWQ7XG4gICAgICB0aGlzLl9yZXZlcnNlSWRNYXAuc2V0KHB1YmxpY2F0aW9uSWQsIGludGVybmFsSWQpO1xuICAgICAgYXdhaXQgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKFxuICAgICAgICAgICdzb2FjJywge2lkOiB0aGlzLl9pZCwgc2lnbmFsaW5nOiBvZmZlcn0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5fcHVibGlzaFByb21pc2VzLnNldChpbnRlcm5hbElkLCB7XG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBwdWJsaXNoKHN0cmVhbSwgb3B0aW9ucywgdmlkZW9Db2RlY3MpIHtcbiAgICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnQ29ubmVjdGlvbiBjbG9zZWQnKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgIC8vIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgYW4gYXJyYXkgb2YgUlRDUnRwVHJhbnNjZWl2ZXJzLlxuICAgICAgcmV0dXJuIHRoaXMucHVibGlzaFdpdGhUcmFuc2NlaXZlcnMoc3RyZWFtLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYXVkaW86ICEhc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoLFxuICAgICAgICB2aWRlbzogISFzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGgsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignT3B0aW9ucyBzaG91bGQgYmUgYW4gb2JqZWN0LicpKTtcbiAgICB9XG4gICAgaWYgKCh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLmF1ZGlvKSAmJlxuICAgICAgICAgdGhpcy5faXNPd3RFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykpIHx8XG4gICAgICAgICh0aGlzLl9pc093dEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLmF1ZGlvKSAmJlxuICAgICAgICAgdGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnTWl4aW5nIFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycyBhbmQgJyArXG4gICAgICAgICAgJ0F1ZGlvRW5jb2RpbmdQYXJhbWV0ZXJzL1ZpZGVvRW5jb2RpbmdQYXJhbWV0ZXJzIGlzIG5vdCBhbGxvd2VkLicpKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYXVkaW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy5hdWRpbyA9ICEhc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy52aWRlbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25zLnZpZGVvID0gISFzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGg7XG4gICAgfVxuICAgIGlmICgoISFvcHRpb25zLmF1ZGlvICYmICFzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGgpIHx8XG4gICAgICAgICghIW9wdGlvbnMudmlkZW8gJiYgIXN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdvcHRpb25zLmF1ZGlvL3ZpZGVvIGlzIGluY29uc2lzdGVudCB3aXRoIHRyYWNrcyBwcmVzZW50ZWQgaW4gdGhlICcgK1xuICAgICAgICAgICdNZWRpYVN0cmVhbS4nLFxuICAgICAgKSk7XG4gICAgfVxuICAgIGlmICgob3B0aW9ucy5hdWRpbyA9PT0gZmFsc2UgfHwgb3B0aW9ucy5hdWRpbyA9PT0gbnVsbCkgJiZcbiAgICAgIChvcHRpb25zLnZpZGVvID09PSBmYWxzZSB8fCBvcHRpb25zLnZpZGVvID09PSBudWxsKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgJ0Nhbm5vdCBwdWJsaXNoIGEgc3RyZWFtIHdpdGhvdXQgYXVkaW8gYW5kIHZpZGVvLicpKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1ZGlvID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMuYXVkaW8pKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ29wdGlvbnMuYXVkaW8gc2hvdWxkIGJlIGEgYm9vbGVhbiBvciBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlcnMgb2Ygb3B0aW9ucy5hdWRpbykge1xuICAgICAgICBpZiAoIXBhcmFtZXRlcnMuY29kZWMgfHwgdHlwZW9mIHBhcmFtZXRlcnMuY29kZWMubmFtZSAhPT0gJ3N0cmluZycgfHwgKFxuICAgICAgICAgIHBhcmFtZXRlcnMubWF4Qml0cmF0ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwYXJhbWV0ZXJzLm1heEJpdHJhdGVcbiAgICAgICAgICAhPT0gJ251bWJlcicpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICdvcHRpb25zLmF1ZGlvIGhhcyBpbmNvcnJlY3QgcGFyYW1ldGVycy4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnZpZGVvID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvcHRpb25zLnZpZGVvKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgJ29wdGlvbnMudmlkZW8gc2hvdWxkIGJlIGEgYm9vbGVhbiBvciBhbiBhcnJheS4nKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc093dEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSkge1xuICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXJzIG9mIG9wdGlvbnMudmlkZW8pIHtcbiAgICAgICAgaWYgKCFwYXJhbWV0ZXJzLmNvZGVjIHx8IHR5cGVvZiBwYXJhbWV0ZXJzLmNvZGVjLm5hbWUgIT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgKFxuICAgICAgICAgICAgcGFyYW1ldGVycy5tYXhCaXRyYXRlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBhcmFtZXRlcnNcbiAgICAgICAgICAgICAgICAubWF4Qml0cmF0ZSAhPT1cbiAgICAgICAgICAgICdudW1iZXInKSB8fCAocGFyYW1ldGVycy5jb2RlYy5wcm9maWxlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwYXJhbWV0ZXJzLmNvZGVjLnByb2ZpbGUgIT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAnb3B0aW9ucy52aWRlbyBoYXMgaW5jb3JyZWN0IHBhcmFtZXRlcnMuJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG1lZGlhT3B0aW9ucyA9IHt9O1xuICAgIGlmIChzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggPiAwICYmIG9wdGlvbnMuYXVkaW8gIT09XG4gICAgICBmYWxzZSAmJiBvcHRpb25zLmF1ZGlvICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoID4gMSkge1xuICAgICAgICBMb2dnZXIud2FybmluZyhcbiAgICAgICAgICAgICdQdWJsaXNoaW5nIGEgc3RyZWFtIHdpdGggbXVsdGlwbGUgYXVkaW8gdHJhY2tzIGlzIG5vdCBmdWxseSdcbiAgICAgICAgICAgICsgJyBzdXBwb3J0ZWQuJyxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hdWRpbyAhPT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiBvcHRpb25zLmF1ZGlvICE9PVxuICAgICAgICAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAgICdUeXBlIG9mIGF1ZGlvIG9wdGlvbnMgc2hvdWxkIGJlIGJvb2xlYW4gb3IgYW4gb2JqZWN0LicsXG4gICAgICAgICkpO1xuICAgICAgfVxuICAgICAgbWVkaWFPcHRpb25zLmF1ZGlvID0ge307XG4gICAgICBtZWRpYU9wdGlvbnMuYXVkaW8uc291cmNlID0gc3RyZWFtLnNvdXJjZS5hdWRpbztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVkaWFPcHRpb25zLmF1ZGlvID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPiAwICYmIG9wdGlvbnMudmlkZW8gIT09XG4gICAgICBmYWxzZSAmJiBvcHRpb25zLnZpZGVvICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoID4gMSkge1xuICAgICAgICBMb2dnZXIud2FybmluZyhcbiAgICAgICAgICAgICdQdWJsaXNoaW5nIGEgc3RyZWFtIHdpdGggbXVsdGlwbGUgdmlkZW8gdHJhY2tzIGlzIG5vdCBmdWxseSAnXG4gICAgICAgICAgICArICdzdXBwb3J0ZWQuJyxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIG1lZGlhT3B0aW9ucy52aWRlbyA9IHt9O1xuICAgICAgbWVkaWFPcHRpb25zLnZpZGVvLnNvdXJjZSA9IHN0cmVhbS5zb3VyY2UudmlkZW87XG4gICAgICBjb25zdCB0cmFja1NldHRpbmdzID0gc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF1cbiAgICAgICAgICAuZ2V0U2V0dGluZ3MoKTtcbiAgICAgIG1lZGlhT3B0aW9ucy52aWRlby5wYXJhbWV0ZXJzID0ge1xuICAgICAgICByZXNvbHV0aW9uOiB7XG4gICAgICAgICAgd2lkdGg6IHRyYWNrU2V0dGluZ3Mud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0cmFja1NldHRpbmdzLmhlaWdodCxcbiAgICAgICAgfSxcbiAgICAgICAgZnJhbWVyYXRlOiB0cmFja1NldHRpbmdzLmZyYW1lUmF0ZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lZGlhT3B0aW9ucy52aWRlbyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVybmFsSWQgPSB0aGlzLl9jcmVhdGVJbnRlcm5hbElkKCk7XG4gICAgLy8gV2FpdGluZyBmb3IgcHJldmlvdXMgU0RQIG5lZ290aWF0aW9uIGlmIG5lZWRlZFxuICAgIGF3YWl0IHRoaXMuX2NoYWluU2RwUHJvbWlzZShpbnRlcm5hbElkKTtcblxuICAgIGNvbnN0IG9mZmVyT3B0aW9ucyA9IHt9O1xuICAgIGNvbnN0IHRyYW5zY2VpdmVycyA9IFtdO1xuICAgIGlmICh0eXBlb2YgdGhpcy5wYy5hZGRUcmFuc2NlaXZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gfGRpcmVjdGlvbnwgc2VlbXMgbm90IHdvcmtpbmcgb24gU2FmYXJpLlxuICAgICAgaWYgKG1lZGlhT3B0aW9ucy5hdWRpbyAmJiBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggPlxuICAgICAgICAwKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zY2VpdmVySW5pdCA9IHtcbiAgICAgICAgICBkaXJlY3Rpb246ICdzZW5kb25seScsXG4gICAgICAgICAgc3RyZWFtczogW3N0cmVhbS5tZWRpYVN0cmVhbV0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLmF1ZGlvKSkge1xuICAgICAgICAgIHRyYW5zY2VpdmVySW5pdC5zZW5kRW5jb2RpbmdzID0gb3B0aW9ucy5hdWRpbztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0cmFuc2NlaXZlciA9IHRoaXMucGMuYWRkVHJhbnNjZWl2ZXIoXG4gICAgICAgICAgICBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXSxcbiAgICAgICAgICAgIHRyYW5zY2VpdmVySW5pdCk7XG4gICAgICAgIHRyYW5zY2VpdmVycy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnYXVkaW8nLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLFxuICAgICAgICAgIHNvdXJjZTogbWVkaWFPcHRpb25zLmF1ZGlvLnNvdXJjZSxcbiAgICAgICAgICBvcHRpb246IHthdWRpbzogb3B0aW9ucy5hdWRpb30sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChVdGlscy5pc0ZpcmVmb3goKSkge1xuICAgICAgICAgIC8vIEZpcmVmb3ggZG9lcyBub3Qgc3VwcG9ydCBlbmNvZGluZ3Mgc2V0dGluZyBpbiBhZGRUcmFuc2NlaXZlci5cbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gdHJhbnNjZWl2ZXIuc2VuZGVyLmdldFBhcmFtZXRlcnMoKTtcbiAgICAgICAgICBwYXJhbWV0ZXJzLmVuY29kaW5ncyA9IHRyYW5zY2VpdmVySW5pdC5zZW5kRW5jb2RpbmdzO1xuICAgICAgICAgIGF3YWl0IHRyYW5zY2VpdmVyLnNlbmRlci5zZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWFPcHRpb25zLnZpZGVvICYmIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCA+XG4gICAgICAgIDApIHtcbiAgICAgICAgY29uc3QgdHJhbnNjZWl2ZXJJbml0ID0ge1xuICAgICAgICAgIGRpcmVjdGlvbjogJ3NlbmRvbmx5JyxcbiAgICAgICAgICBzdHJlYW1zOiBbc3RyZWFtLm1lZGlhU3RyZWFtXSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXJJbml0LnNlbmRFbmNvZGluZ3MgPSBvcHRpb25zLnZpZGVvO1xuICAgICAgICAgIHRoaXMuX3ZpZGVvQ29kZWNzID0gdmlkZW9Db2RlY3M7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHJhbnNjZWl2ZXIgPSB0aGlzLnBjLmFkZFRyYW5zY2VpdmVyKFxuICAgICAgICAgICAgc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0sXG4gICAgICAgICAgICB0cmFuc2NlaXZlckluaXQpO1xuICAgICAgICB0cmFuc2NlaXZlcnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3ZpZGVvJyxcbiAgICAgICAgICB0cmFuc2NlaXZlcixcbiAgICAgICAgICBzb3VyY2U6IG1lZGlhT3B0aW9ucy52aWRlby5zb3VyY2UsXG4gICAgICAgICAgb3B0aW9uOiB7dmlkZW86IG9wdGlvbnMudmlkZW99LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoVXRpbHMuaXNGaXJlZm94KCkpIHtcbiAgICAgICAgICAvLyBGaXJlZm94IGRvZXMgbm90IHN1cHBvcnQgZW5jb2RpbmdzIHNldHRpbmcgaW4gYWRkVHJhbnNjZWl2ZXIuXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHRyYW5zY2VpdmVyLnNlbmRlci5nZXRQYXJhbWV0ZXJzKCk7XG4gICAgICAgICAgcGFyYW1ldGVycy5lbmNvZGluZ3MgPSB0cmFuc2NlaXZlckluaXQuc2VuZEVuY29kaW5ncztcbiAgICAgICAgICBhd2FpdCB0cmFuc2NlaXZlci5zZW5kZXIuc2V0UGFyYW1ldGVycyhwYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTaG91bGQgbm90IHJlYWNoIGhlcmVcbiAgICAgIGlmIChtZWRpYU9wdGlvbnMuYXVkaW8gJiZcbiAgICAgICAgICBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2Ygc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkpIHtcbiAgICAgICAgICB0aGlzLnBjLmFkZFRyYWNrKHRyYWNrLCBzdHJlYW0ubWVkaWFTdHJlYW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWFPcHRpb25zLnZpZGVvICYmXG4gICAgICAgICAgc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpKSB7XG4gICAgICAgICAgdGhpcy5wYy5hZGRUcmFjayh0cmFjaywgc3RyZWFtLm1lZGlhU3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gPSBmYWxzZTtcbiAgICAgIG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuc2V0KGludGVybmFsSWQsIHt0cmFuc2NlaXZlcnN9KTtcblxuICAgIGxldCBsb2NhbERlc2M7XG4gICAgdGhpcy5wYy5jcmVhdGVPZmZlcihvZmZlck9wdGlvbnMpLnRoZW4oKGRlc2MpID0+IHtcbiAgICAgIGxvY2FsRGVzYyA9IGRlc2M7XG4gICAgICByZXR1cm4gdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKGRlc2MpO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgdHJhY2tPcHRpb25zID0gW107XG4gICAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaCgoe3R5cGUsIHRyYW5zY2VpdmVyLCBzb3VyY2V9KSA9PiB7XG4gICAgICAgIHRyYWNrT3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIG1pZDogdHJhbnNjZWl2ZXIubWlkLFxuICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3B1Ymxpc2gnLCB7XG4gICAgICAgIG1lZGlhOiB7dHJhY2tzOiB0cmFja09wdGlvbnN9LFxuICAgICAgICBhdHRyaWJ1dGVzOiBzdHJlYW0uYXR0cmlidXRlcyxcbiAgICAgICAgdHJhbnNwb3J0OiB7aWQ6IHRoaXMuX2lkLCB0eXBlOiAnd2VicnRjJ30sXG4gICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAvLyBTZW5kIFNEUCBldmVuIHdoZW4gZmFpbGVkIHRvIGdldCBBbnN3ZXIuXG4gICAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc29hYycsIHtcbiAgICAgICAgICBpZDogdGhpcy5faWQsXG4gICAgICAgICAgc2lnbmFsaW5nOiBsb2NhbERlc2MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfSk7XG4gICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgcHVibGljYXRpb25JZCA9IGRhdGEuaWQ7XG4gICAgICBjb25zdCBtZXNzYWdlRXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KCdpZCcsIHtcbiAgICAgICAgbWVzc2FnZTogcHVibGljYXRpb25JZCxcbiAgICAgICAgb3JpZ2luOiB0aGlzLl9yZW1vdGVJZCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG1lc3NhZ2VFdmVudCk7XG5cbiAgICAgIHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpLmlkID0gcHVibGljYXRpb25JZDtcbiAgICAgIHRoaXMuX3JldmVyc2VJZE1hcC5zZXQocHVibGljYXRpb25JZCwgaW50ZXJuYWxJZCk7XG5cbiAgICAgIGlmICh0aGlzLl9pZCAmJiB0aGlzLl9pZCAhPT0gZGF0YS50cmFuc3BvcnRJZCkge1xuICAgICAgICBMb2dnZXIud2FybmluZygnU2VydmVyIHJldHVybnMgY29uZmxpY3QgSUQ6ICcgKyBkYXRhLnRyYW5zcG9ydElkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lkID0gZGF0YS50cmFuc3BvcnRJZDtcblxuICAgICAgLy8gTW9kaWZ5IGxvY2FsIFNEUCBiZWZvcmUgc2VuZGluZ1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXJzLmZvckVhY2goKHt0eXBlLCB0cmFuc2NlaXZlciwgb3B0aW9ufSkgPT4ge1xuICAgICAgICAgIGxvY2FsRGVzYy5zZHAgPSB0aGlzLl9zZXRSdHBSZWNlaXZlck9wdGlvbnMoXG4gICAgICAgICAgICAgIGxvY2FsRGVzYy5zZHAsIG9wdGlvbiwgdHJhbnNjZWl2ZXIubWlkKTtcbiAgICAgICAgICBsb2NhbERlc2Muc2RwID0gdGhpcy5fc2V0UnRwU2VuZGVyT3B0aW9ucyhcbiAgICAgICAgICAgICAgbG9jYWxEZXNjLnNkcCwgb3B0aW9uLCB0cmFuc2NlaXZlci5taWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc29hYycsIHtcbiAgICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgICBzaWduYWxpbmc6IGxvY2FsRGVzYyxcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBMb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgb2ZmZXIgb3Igc2V0IFNEUC4gTWVzc2FnZTogJ1xuICAgICAgICAgICsgZS5tZXNzYWdlKTtcbiAgICAgIGlmICh0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKS5pZCkge1xuICAgICAgICB0aGlzLl91bnB1Ymxpc2goaW50ZXJuYWxJZCk7XG4gICAgICAgIHRoaXMuX3JlamVjdFByb21pc2UoZSk7XG4gICAgICAgIHRoaXMuX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl91bnB1Ymxpc2goaW50ZXJuYWxJZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5zZXQoaW50ZXJuYWxJZCwge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc3Vic2NyaWJlKHN0cmVhbSwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9lbmRlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdDb25uZWN0aW9uIGNsb3NlZCcpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBhdWRpbzogISFzdHJlYW0uc2V0dGluZ3MuYXVkaW8sXG4gICAgICAgIHZpZGVvOiAhIXN0cmVhbS5zZXR0aW5ncy52aWRlbyxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdPcHRpb25zIHNob3VsZCBiZSBhbiBvYmplY3QuJykpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmF1ZGlvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChzdHJlYW0uc2V0dGluZ3MuYXVkaW8ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG9wdGlvbnMuYXVkaW8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuYXVkaW8gPSAhIXN0cmVhbS5zZXR0aW5ncy5hdWRpbztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy52aWRlbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25zLnZpZGVvID0gISFzdHJlYW0uc2V0dGluZ3MudmlkZW87XG4gICAgfVxuICAgIGlmICgob3B0aW9ucy5hdWRpbyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zLmF1ZGlvICE9PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5hdWRpbyAhPT0gJ2Jvb2xlYW4nICYmIG9wdGlvbnMuYXVkaW8gIT09IG51bGwpIHx8IChcbiAgICAgIG9wdGlvbnMudmlkZW8gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy52aWRlbyAhPT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMudmlkZW8gIT09ICdib29sZWFuJyAmJiBvcHRpb25zLnZpZGVvICE9PSBudWxsKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3B0aW9ucyB0eXBlLicpKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYXVkaW8gJiYgIXN0cmVhbS5zZXR0aW5ncy5hdWRpbyB8fCAob3B0aW9ucy52aWRlbyAmJlxuICAgICAgICAhc3RyZWFtLnNldHRpbmdzLnZpZGVvKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgJ29wdGlvbnMuYXVkaW8vdmlkZW8gY2Fubm90IGJlIHRydWUgb3IgYW4gb2JqZWN0IGlmIHRoZXJlIGlzIG5vICdcbiAgICAgICAgICArICdhdWRpby92aWRlbyB0cmFjayBpbiByZW1vdGUgc3RyZWFtLicsXG4gICAgICApKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYXVkaW8gPT09IGZhbHNlICYmIG9wdGlvbnMudmlkZW8gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnQ2Fubm90IHN1YnNjcmliZSBhIHN0cmVhbSB3aXRob3V0IGF1ZGlvIGFuZCB2aWRlby4nKSk7XG4gICAgfVxuICAgIGNvbnN0IG1lZGlhT3B0aW9ucyA9IHt9O1xuICAgIGlmIChvcHRpb25zLmF1ZGlvKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXVkaW8gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShvcHRpb25zLmF1ZGlvLmNvZGVjcykpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYXVkaW8uY29kZWNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAnQXVkaW8gY29kZWMgY2Fubm90IGJlIGFuIGVtcHR5IGFycmF5LicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWVkaWFPcHRpb25zLmF1ZGlvID0ge307XG4gICAgICBtZWRpYU9wdGlvbnMuYXVkaW8uZnJvbSA9IHN0cmVhbS5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVkaWFPcHRpb25zLmF1ZGlvID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnZpZGVvKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMudmlkZW8gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShvcHRpb25zLnZpZGVvLmNvZGVjcykpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMudmlkZW8uY29kZWNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAnVmlkZW8gY29kZWMgY2Fubm90IGJlIGFuIGVtcHR5IGFycmF5LicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWVkaWFPcHRpb25zLnZpZGVvID0ge307XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8uZnJvbSA9IHN0cmVhbS5pZDtcbiAgICAgIGlmIChvcHRpb25zLnZpZGVvLnJlc29sdXRpb24gfHwgb3B0aW9ucy52aWRlby5mcmFtZVJhdGUgfHwgKG9wdGlvbnMudmlkZW9cbiAgICAgICAgICAuYml0cmF0ZU11bHRpcGxpZXIgJiYgb3B0aW9ucy52aWRlby5iaXRyYXRlTXVsdGlwbGllciAhPT0gMSkgfHxcbiAgICAgICAgb3B0aW9ucy52aWRlby5rZXlGcmFtZUludGVydmFsKSB7XG4gICAgICAgIG1lZGlhT3B0aW9ucy52aWRlby5wYXJhbWV0ZXJzID0ge1xuICAgICAgICAgIHJlc29sdXRpb246IG9wdGlvbnMudmlkZW8ucmVzb2x1dGlvbixcbiAgICAgICAgICBmcmFtZXJhdGU6IG9wdGlvbnMudmlkZW8uZnJhbWVSYXRlLFxuICAgICAgICAgIGJpdHJhdGU6IG9wdGlvbnMudmlkZW8uYml0cmF0ZU11bHRpcGxpZXIgPyAneCdcbiAgICAgICAgICAgICAgKyBvcHRpb25zLnZpZGVvLmJpdHJhdGVNdWx0aXBsaWVyLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAga2V5RnJhbWVJbnRlcnZhbDogb3B0aW9ucy52aWRlby5rZXlGcmFtZUludGVydmFsLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMudmlkZW8ucmlkKSB7XG4gICAgICAgIC8vIFVzZSByaWQgbWF0Y2hlZCB0cmFjayBJRCBhcyBmcm9tIGlmIHBvc3NpYmxlXG4gICAgICAgIGNvbnN0IG1hdGNoZWRTZXR0aW5nID0gc3RyZWFtLnNldHRpbmdzLnZpZGVvXG4gICAgICAgICAgICAuZmluZCgodmlkZW8pID0+IHZpZGVvLnJpZCA9PT0gb3B0aW9ucy52aWRlby5yaWQpO1xuICAgICAgICBpZiAobWF0Y2hlZFNldHRpbmcgJiYgbWF0Y2hlZFNldHRpbmcuX3RyYWNrSWQpIHtcbiAgICAgICAgICBtZWRpYU9wdGlvbnMudmlkZW8uZnJvbSA9IG1hdGNoZWRTZXR0aW5nLl90cmFja0lkO1xuICAgICAgICAgIC8vIElnbm9yZSBvdGhlciBzZXR0aW5ncyB3aGVuIFJJRCBzZXQuXG4gICAgICAgICAgZGVsZXRlIG1lZGlhT3B0aW9ucy52aWRlby5wYXJhbWV0ZXJzO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudmlkZW8gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcm5hbElkID0gdGhpcy5fY3JlYXRlSW50ZXJuYWxJZCgpO1xuICAgIC8vIFdhaXRpbmcgZm9yIHByZXZpb3VzIFNEUCBuZWdvdGlhdGlvbiBpZiBuZWVkZWRcbiAgICBhd2FpdCB0aGlzLl9jaGFpblNkcFByb21pc2UoaW50ZXJuYWxJZCk7XG5cbiAgICBjb25zdCBvZmZlck9wdGlvbnMgPSB7fTtcbiAgICBjb25zdCB0cmFuc2NlaXZlcnMgPSBbXTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5wYy5hZGRUcmFuc2NlaXZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gfGRpcmVjdGlvbnwgc2VlbXMgbm90IHdvcmtpbmcgb24gU2FmYXJpLlxuICAgICAgaWYgKG1lZGlhT3B0aW9ucy5hdWRpbykge1xuICAgICAgICBjb25zdCB0cmFuc2NlaXZlciA9IHRoaXMucGMuYWRkVHJhbnNjZWl2ZXIoXG4gICAgICAgICAgICAnYXVkaW8nLCB7ZGlyZWN0aW9uOiAncmVjdm9ubHknfSk7XG4gICAgICAgIHRyYW5zY2VpdmVycy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnYXVkaW8nLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLFxuICAgICAgICAgIGZyb206IG1lZGlhT3B0aW9ucy5hdWRpby5mcm9tLFxuICAgICAgICAgIG9wdGlvbjoge2F1ZGlvOiBvcHRpb25zLmF1ZGlvfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAobWVkaWFPcHRpb25zLnZpZGVvKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zY2VpdmVyID0gdGhpcy5wYy5hZGRUcmFuc2NlaXZlcihcbiAgICAgICAgICAgICd2aWRlbycsIHtkaXJlY3Rpb246ICdyZWN2b25seSd9KTtcbiAgICAgICAgdHJhbnNjZWl2ZXJzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICd2aWRlbycsXG4gICAgICAgICAgdHJhbnNjZWl2ZXIsXG4gICAgICAgICAgZnJvbTogbWVkaWFPcHRpb25zLnZpZGVvLmZyb20sXG4gICAgICAgICAgcGFyYW1ldGVyczogbWVkaWFPcHRpb25zLnZpZGVvLnBhcmFtZXRlcnMsXG4gICAgICAgICAgb3B0aW9uOiB7dmlkZW86IG9wdGlvbnMudmlkZW99LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gPSAhIW9wdGlvbnMuYXVkaW87XG4gICAgICBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbyA9ICEhb3B0aW9ucy52aWRlbztcbiAgICB9XG4gICAgdGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzLnNldChpbnRlcm5hbElkLCB7dHJhbnNjZWl2ZXJzfSk7XG5cbiAgICBsZXQgbG9jYWxEZXNjO1xuICAgIHRoaXMucGMuY3JlYXRlT2ZmZXIob2ZmZXJPcHRpb25zKS50aGVuKChkZXNjKSA9PiB7XG4gICAgICBsb2NhbERlc2MgPSBkZXNjO1xuICAgICAgcmV0dXJuIHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoJ1NldCBsb2NhbCBkZXNjcmlwdGlvbiBmYWlsZWQuIE1lc3NhZ2U6ICcgK1xuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGVycm9yTWVzc2FnZSkpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3JNZXNzYWdlO1xuICAgICAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBMb2dnZXIuZXJyb3IoJ0NyZWF0ZSBvZmZlciBmYWlsZWQuIEVycm9yIGluZm86ICcgKyBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICBlcnJvcikpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCB0cmFja09wdGlvbnMgPSBbXTtcbiAgICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKCh7dHlwZSwgdHJhbnNjZWl2ZXIsIGZyb20sIHBhcmFtZXRlcnMsIG9wdGlvbn0pID0+IHtcbiAgICAgICAgdHJhY2tPcHRpb25zLnB1c2goe1xuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgbWlkOiB0cmFuc2NlaXZlci5taWQsXG4gICAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgICBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc3Vic2NyaWJlJywge1xuICAgICAgICBtZWRpYToge3RyYWNrczogdHJhY2tPcHRpb25zfSxcbiAgICAgICAgdHJhbnNwb3J0OiB7aWQ6IHRoaXMuX2lkLCB0eXBlOiAnd2VicnRjJ30sXG4gICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAvLyBTZW5kIFNEUCBldmVuIHdoZW4gZmFpbGVkIHRvIGdldCBBbnN3ZXIuXG4gICAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc29hYycsIHtcbiAgICAgICAgICBpZDogdGhpcy5faWQsXG4gICAgICAgICAgc2lnbmFsaW5nOiBsb2NhbERlc2MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfSk7XG4gICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uSWQgPSBkYXRhLmlkO1xuICAgICAgY29uc3QgbWVzc2FnZUV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudCgnaWQnLCB7XG4gICAgICAgIG1lc3NhZ2U6IHN1YnNjcmlwdGlvbklkLFxuICAgICAgICBvcmlnaW46IHRoaXMuX3JlbW90ZUlkLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobWVzc2FnZUV2ZW50KTtcblxuICAgICAgdGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKS5pZCA9IHN1YnNjcmlwdGlvbklkO1xuICAgICAgdGhpcy5fcmV2ZXJzZUlkTWFwLnNldChzdWJzY3JpcHRpb25JZCwgaW50ZXJuYWxJZCk7XG4gICAgICBpZiAodGhpcy5faWQgJiYgdGhpcy5faWQgIT09IGRhdGEudHJhbnNwb3J0SWQpIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ1NlcnZlciByZXR1cm5zIGNvbmZsaWN0IElEOiAnICsgZGF0YS50cmFuc3BvcnRJZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9pZCA9IGRhdGEudHJhbnNwb3J0SWQ7XG5cbiAgICAgIC8vIE1vZGlmeSBsb2NhbCBTRFAgYmVmb3JlIHNlbmRpbmdcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKCh7dHlwZSwgdHJhbnNjZWl2ZXIsIG9wdGlvbn0pID0+IHtcbiAgICAgICAgICBsb2NhbERlc2Muc2RwID0gdGhpcy5fc2V0UnRwUmVjZWl2ZXJPcHRpb25zKFxuICAgICAgICAgICAgICBsb2NhbERlc2Muc2RwLCBvcHRpb24sIHRyYW5zY2VpdmVyLm1pZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzb2FjJywge1xuICAgICAgICBpZDogdGhpcy5faWQsXG4gICAgICAgIHNpZ25hbGluZzogbG9jYWxEZXNjLFxuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIExvZ2dlci5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBvZmZlciBvciBzZXQgU0RQLiBNZXNzYWdlOiAnXG4gICAgICAgICAgKyBlLm1lc3NhZ2UpO1xuICAgICAgaWYgKHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycy5nZXQoaW50ZXJuYWxJZCkuaWQpIHtcbiAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoaW50ZXJuYWxJZCk7XG4gICAgICAgIHRoaXMuX3JlamVjdFByb21pc2UoZSk7XG4gICAgICAgIHRoaXMuX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl91bnN1YnNjcmliZShpbnRlcm5hbElkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuc2V0KGludGVybmFsSWQsIHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLnBjICYmIHRoaXMucGMuc2lnbmFsaW5nU3RhdGUgIT09ICdjbG9zZWQnKSB7XG4gICAgICB0aGlzLnBjLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgX2NoYWluU2RwUHJvbWlzZShpbnRlcm5hbElkKSB7XG4gICAgY29uc3QgcHJpb3IgPSB0aGlzLl9zZHBQcm9taXNlO1xuICAgIGNvbnN0IG5lZ290aWF0aW9uVGltZW91dCA9IDEwMDAwO1xuICAgIHRoaXMuX3NkcFByb21pc2UgPSBwcmlvci50aGVuKFxuICAgICAgICAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSB7ZmluaXNoOiBmYWxzZSwgcmVzb2x2ZSwgcmVqZWN0fTtcbiAgICAgICAgICB0aGlzLl9zZHBSZXNvbHZlcnMucHVzaChyZXNvbHZlcik7XG4gICAgICAgICAgdGhpcy5fc2RwUmVzb2x2ZXJNYXAuc2V0KGludGVybmFsSWQsIHJlc29sdmVyKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlamVjdCgnVGltZW91dCB0byBnZXQgU0RQIGFuc3dlcicpLFxuICAgICAgICAgICAgICBuZWdvdGlhdGlvblRpbWVvdXQpO1xuICAgICAgICB9KSk7XG4gICAgcmV0dXJuIHByaW9yLmNhdGNoKChlKT0+e1xuICAgICAgLy9cbiAgICB9KTtcbiAgfVxuXG4gIF9uZXh0U2RwUHJvbWlzZSgpIHtcbiAgICBsZXQgcmV0ID0gZmFsc2U7XG4gICAgLy8gU2tpcCB0aGUgZmluaXNoZWQgc2RwIHByb21pc2VcbiAgICB3aGlsZSAodGhpcy5fc2RwUmVzb2x2ZU51bSA8IHRoaXMuX3NkcFJlc29sdmVycy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHJlc29sdmVyID0gdGhpcy5fc2RwUmVzb2x2ZXJzW3RoaXMuX3NkcFJlc29sdmVOdW1dO1xuICAgICAgdGhpcy5fc2RwUmVzb2x2ZU51bSsrO1xuICAgICAgaWYgKCFyZXNvbHZlci5maW5pc2gpIHtcbiAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZSgpO1xuICAgICAgICByZXNvbHZlci5maW5pc2ggPSB0cnVlO1xuICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgX2NyZWF0ZUludGVybmFsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVybmFsQ291bnQrKztcbiAgfVxuXG4gIF91bnB1Ymxpc2goaW50ZXJuYWxJZCkge1xuICAgIGlmICh0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgY29uc3Qge2lkLCB0cmFuc2NlaXZlcnN9ID0gdGhpcy5fcHVibGlzaFRyYW5zY2VpdmVycy5nZXQoaW50ZXJuYWxJZCk7XG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCd1bnB1Ymxpc2gnLCB7aWR9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdNQ1UgcmV0dXJucyBuZWdhdGl2ZSBhY2sgZm9yIHVucHVibGlzaGluZywgJyArIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3JldmVyc2VJZE1hcC5kZWxldGUoaWQpO1xuICAgICAgfVxuICAgICAgLy8gQ2xlYW4gdHJhbnNjZWl2ZXJcbiAgICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKCh7dHJhbnNjZWl2ZXJ9KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09PSAnc3RhYmxlJykge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLnNlbmRlci5yZXBsYWNlVHJhY2sobnVsbCk7XG4gICAgICAgICAgdGhpcy5wYy5yZW1vdmVUcmFjayh0cmFuc2NlaXZlci5zZW5kZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuZGVsZXRlKGludGVybmFsSWQpO1xuICAgICAgLy8gRmlyZSBlbmRlZCBldmVudFxuICAgICAgaWYgKHRoaXMuX3B1YmxpY2F0aW9ucy5oYXMoaWQpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IE93dEV2ZW50KCdlbmRlZCcpO1xuICAgICAgICB0aGlzLl9wdWJsaWNhdGlvbnMuZ2V0KGlkKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5fcHVibGljYXRpb25zLmRlbGV0ZShpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2dnZXIud2FybmluZygnSW52YWxpZCBwdWJsaWNhdGlvbiB0byB1bnB1Ymxpc2g6ICcgKyBpZCk7XG4gICAgICAgIGlmICh0aGlzLl9wdWJsaXNoUHJvbWlzZXMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICAgICAgdGhpcy5fcHVibGlzaFByb21pc2VzLmdldChpbnRlcm5hbElkKS5yZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBDb25mZXJlbmNlRXJyb3IoJ0ZhaWxlZCB0byBwdWJsaXNoJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fc2RwUmVzb2x2ZXJNYXAuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICAgIGNvbnN0IHJlc29sdmVyID0gdGhpcy5fc2RwUmVzb2x2ZXJNYXAuZ2V0KGludGVybmFsSWQpO1xuICAgICAgICBpZiAoIXJlc29sdmVyLmZpbmlzaCkge1xuICAgICAgICAgIHJlc29sdmVyLnJlc29sdmUoKTtcbiAgICAgICAgICByZXNvbHZlci5maW5pc2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NkcFJlc29sdmVyTWFwLmRlbGV0ZShpbnRlcm5hbElkKTtcbiAgICAgIH1cbiAgICAgIC8vIENyZWF0ZSBvZmZlciwgc2V0IGxvY2FsIGFuZCByZW1vdGUgZGVzY3JpcHRpb25cbiAgICB9XG4gIH1cblxuICBfdW5zdWJzY3JpYmUoaW50ZXJuYWxJZCkge1xuICAgIGlmICh0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICBjb25zdCB7aWQsIHRyYW5zY2VpdmVyc30gPSB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpO1xuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgndW5zdWJzY3JpYmUnLCB7aWR9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgIExvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICAgICAgICAgJ01DVSByZXR1cm5zIG5lZ2F0aXZlIGFjayBmb3IgdW5zdWJzY3JpYmluZywgJyArIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBDbGVhbiB0cmFuc2NlaXZlclxuICAgICAgdHJhbnNjZWl2ZXJzLmZvckVhY2goKHt0cmFuc2NlaXZlcn0pID0+IHtcbiAgICAgICAgdHJhbnNjZWl2ZXIucmVjZWl2ZXIudHJhY2suc3RvcCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuZGVsZXRlKGludGVybmFsSWQpO1xuICAgICAgLy8gRmlyZSBlbmRlZCBldmVudFxuICAgICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbnMuaGFzKGlkKSkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBPd3RFdmVudCgnZW5kZWQnKTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5nZXQoaWQpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmRlbGV0ZShpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2dnZXIud2FybmluZygnSW52YWxpZCBzdWJzY3JpcHRpb24gdG8gdW5zdWJzY3JpYmU6ICcgKyBpZCk7XG4gICAgICAgIGlmICh0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5nZXQoaW50ZXJuYWxJZCkucmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgQ29uZmVyZW5jZUVycm9yKCdGYWlsZWQgdG8gc3Vic2NyaWJlJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fc2RwUmVzb2x2ZXJNYXAuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICAgIGNvbnN0IHJlc29sdmVyID0gdGhpcy5fc2RwUmVzb2x2ZXJNYXAuZ2V0KGludGVybmFsSWQpO1xuICAgICAgICBpZiAoIXJlc29sdmVyLmZpbmlzaCkge1xuICAgICAgICAgIHJlc29sdmVyLnJlc29sdmUoKTtcbiAgICAgICAgICByZXNvbHZlci5maW5pc2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NkcFJlc29sdmVyTWFwLmRlbGV0ZShpbnRlcm5hbElkKTtcbiAgICAgIH1cbiAgICAgIC8vIERpc2FibGUgbWVkaWEgaW4gcmVtb3RlIFNEUFxuICAgICAgLy8gU2V0IHJlbW90ZURlc2NyaXB0aW9uIGFuZCBzZXQgbG9jYWxEZXNjcmlwdGlvblxuICAgIH1cbiAgfVxuXG4gIF9tdXRlT3JVbm11dGUoc2Vzc2lvbklkLCBpc011dGUsIGlzUHViLCB0cmFja0tpbmQpIHtcbiAgICBjb25zdCBldmVudE5hbWUgPSBpc1B1YiA/ICdzdHJlYW0tY29udHJvbCcgOlxuICAgICAgJ3N1YnNjcmlwdGlvbi1jb250cm9sJztcbiAgICBjb25zdCBvcGVyYXRpb24gPSBpc011dGUgPyAncGF1c2UnIDogJ3BsYXknO1xuICAgIHJldHVybiB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoZXZlbnROYW1lLCB7XG4gICAgICBpZDogc2Vzc2lvbklkLFxuICAgICAgb3BlcmF0aW9uOiBvcGVyYXRpb24sXG4gICAgICBkYXRhOiB0cmFja0tpbmQsXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoIWlzUHViKSB7XG4gICAgICAgIGNvbnN0IG11dGVFdmVudE5hbWUgPSBpc011dGUgPyAnbXV0ZScgOiAndW5tdXRlJztcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5nZXQoc2Vzc2lvbklkKS5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgbmV3IE11dGVFdmVudChtdXRlRXZlbnROYW1lLCB7a2luZDogdHJhY2tLaW5kfSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2FwcGx5T3B0aW9ucyhzZXNzaW9uSWQsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBvcHRpb25zLnZpZGVvICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgJ09wdGlvbnMgc2hvdWxkIGJlIGFuIG9iamVjdC4nKSk7XG4gICAgfVxuICAgIGNvbnN0IHZpZGVvT3B0aW9ucyA9IHt9O1xuICAgIHZpZGVvT3B0aW9ucy5yZXNvbHV0aW9uID0gb3B0aW9ucy52aWRlby5yZXNvbHV0aW9uO1xuICAgIHZpZGVvT3B0aW9ucy5mcmFtZXJhdGUgPSBvcHRpb25zLnZpZGVvLmZyYW1lUmF0ZTtcbiAgICB2aWRlb09wdGlvbnMuYml0cmF0ZSA9IG9wdGlvbnMudmlkZW8uYml0cmF0ZU11bHRpcGxpZXIgPyAneCcgKyBvcHRpb25zLnZpZGVvXG4gICAgICAgIC5iaXRyYXRlTXVsdGlwbGllclxuICAgICAgICAudG9TdHJpbmcoKSA6IHVuZGVmaW5lZDtcbiAgICB2aWRlb09wdGlvbnMua2V5RnJhbWVJbnRlcnZhbCA9IG9wdGlvbnMudmlkZW8ua2V5RnJhbWVJbnRlcnZhbDtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzdWJzY3JpcHRpb24tY29udHJvbCcsIHtcbiAgICAgIGlkOiBzZXNzaW9uSWQsXG4gICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgZGF0YToge1xuICAgICAgICB2aWRlbzoge3BhcmFtZXRlcnM6IHZpZGVvT3B0aW9uc30sXG4gICAgICB9LFxuICAgIH0pLnRoZW4oKTtcbiAgfVxuXG4gIF9vblJlbW90ZVN0cmVhbUFkZGVkKGV2ZW50KSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdSZW1vdGUgc3RyZWFtIGFkZGVkLicpO1xuICAgIGZvciAoY29uc3QgW2ludGVybmFsSWQsIHN1Yl0gb2YgdGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzKSB7XG4gICAgICBpZiAoc3ViLnRyYW5zY2VpdmVycy5maW5kKCh0KSA9PiB0LnRyYW5zY2VpdmVyID09PSBldmVudC50cmFuc2NlaXZlcikpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbnMuaGFzKHN1Yi5pZCkpIHtcbiAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLl9zdWJzY3JpcHRpb25zLmdldChzdWIuaWQpO1xuICAgICAgICAgIHN1YnNjcmlwdGlvbi5zdHJlYW0gPSBldmVudC5zdHJlYW1zWzBdO1xuICAgICAgICAgIGlmICh0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmdldChpbnRlcm5hbElkKS5yZXNvbHZlKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5kZWxldGUoaW50ZXJuYWxJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbW90ZU1lZGlhU3RyZWFtcy5zZXQoc3ViLmlkLCBldmVudC5zdHJlYW1zWzBdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFRoaXMgaXMgbm90IGV4cGVjdGVkIHBhdGguIEhvd2V2ZXIsIHRoaXMgaXMgZ29pbmcgdG8gaGFwcGVuIG9uIFNhZmFyaVxuICAgIC8vIGJlY2F1c2UgaXQgZG9lcyBub3Qgc3VwcG9ydCBzZXR0aW5nIGRpcmVjdGlvbiBvZiB0cmFuc2NlaXZlci5cbiAgICBMb2dnZXIud2FybmluZygnUmVjZWl2ZWQgcmVtb3RlIHN0cmVhbSB3aXRob3V0IHN1YnNjcmlwdGlvbi4nKTtcbiAgfVxuXG4gIF9vbkxvY2FsSWNlQ2FuZGlkYXRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNhbmRpZGF0ZSkge1xuICAgICAgaWYgKHRoaXMucGMuc2lnbmFsaW5nU3RhdGUgIT09ICdzdGFibGUnKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdDYW5kaWRhdGVzLnB1c2goZXZlbnQuY2FuZGlkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlbmRDYW5kaWRhdGUoZXZlbnQuY2FuZGlkYXRlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdFbXB0eSBjYW5kaWRhdGUuJyk7XG4gICAgfVxuICB9XG5cbiAgX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCkge1xuICAgIGlmICh0aGlzLl9lbmRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9lbmRlZCA9IHRydWU7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgT3d0RXZlbnQoJ2VuZGVkJyk7XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHB1YmxpY2F0aW9uXSBvZiB0aGlzLl9wdWJsaWNhdGlvbnMpIHtcbiAgICAgIHB1YmxpY2F0aW9uLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgcHVibGljYXRpb24uc3RvcCgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgc3Vic2NyaXB0aW9uXSBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWJzY3JpcHRpb24uZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICBzdWJzY3JpcHRpb24uc3RvcCgpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIF9yZWplY3RQcm9taXNlKGVycm9yKSB7XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgZXJyb3IgPSBuZXcgQ29uZmVyZW5jZUVycm9yKCdDb25uZWN0aW9uIGZhaWxlZCBvciBjbG9zZWQuJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnBjICYmIHRoaXMucGMuaWNlQ29ubmVjdGlvblN0YXRlICE9PSAnY2xvc2VkJykge1xuICAgICAgdGhpcy5wYy5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFJlamVjdGluZyBhbGwgY29ycmVzcG9uZGluZyBwcm9taXNlcyBpZiBwdWJsaXNoaW5nIGFuZCBzdWJzY3JpYmluZyBpcyBvbmdvaW5nLlxuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBwcm9taXNlXSBvZiB0aGlzLl9wdWJsaXNoUHJvbWlzZXMpIHtcbiAgICAgIHByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5fcHVibGlzaFByb21pc2VzLmNsZWFyKCk7XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHByb21pc2VdIG9mIHRoaXMuX3N1YnNjcmliZVByb21pc2VzKSB7XG4gICAgICBwcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmNsZWFyKCk7XG4gIH1cblxuICBfb25JY2VDb25uZWN0aW9uU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50IHx8ICFldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgTG9nZ2VyLmRlYnVnKCdJQ0UgY29ubmVjdGlvbiBzdGF0ZSBjaGFuZ2VkIHRvICcgK1xuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZSk7XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY2xvc2VkJyB8fFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoJ2Nvbm5lY3Rpb24gZmFpbGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmlyZSBlbmRlZCBldmVudCBpZiBwdWJsaWNhdGlvbiBvciBzdWJzY3JpcHRpb24gZXhpc3RzLlxuICAgICAgICB0aGlzLl9maXJlRW5kZWRFdmVudE9uUHVibGljYXRpb25PclN1YnNjcmlwdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9vbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZShldmVudCkge1xuICAgIGlmICh0aGlzLnBjLmNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2Nsb3NlZCcgfHxcbiAgICAgICAgdGhpcy5wYy5jb25uZWN0aW9uU3RhdGUgPT09ICdmYWlsZWQnKSB7XG4gICAgICBpZiAodGhpcy5wYy5jb25uZWN0aW9uU3RhdGUgPT09ICdmYWlsZWQnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKCdjb25uZWN0aW9uIGZhaWxlZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZpcmUgZW5kZWQgZXZlbnQgaWYgcHVibGljYXRpb24gb3Igc3Vic2NyaXB0aW9uIGV4aXN0cy5cbiAgICAgICAgdGhpcy5fZmlyZUVuZGVkRXZlbnRPblB1YmxpY2F0aW9uT3JTdWJzY3JpcHRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfc2VuZENhbmRpZGF0ZShjYW5kaWRhdGUpIHtcbiAgICB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3NvYWMnLCB7XG4gICAgICBpZDogdGhpcy5faWQsXG4gICAgICBzaWduYWxpbmc6IHtcbiAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZScsXG4gICAgICAgIGNhbmRpZGF0ZToge1xuICAgICAgICAgIGNhbmRpZGF0ZTogJ2E9JyArIGNhbmRpZGF0ZS5jYW5kaWRhdGUsXG4gICAgICAgICAgc2RwTWlkOiBjYW5kaWRhdGUuc2RwTWlkLFxuICAgICAgICAgIHNkcE1MaW5lSW5kZXg6IGNhbmRpZGF0ZS5zZHBNTGluZUluZGV4LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVQZWVyQ29ubmVjdGlvbigpIHtcbiAgICBpZiAodGhpcy5wYykge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ1BlZXJDb25uZWN0aW9uIGV4aXN0cy4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwY0NvbmZpZ3VyYXRpb24gPSB0aGlzLl9jb25maWcucnRjQ29uZmlndXJhdGlvbiB8fCB7fTtcbiAgICBpZiAoVXRpbHMuaXNDaHJvbWUoKSkge1xuICAgICAgcGNDb25maWd1cmF0aW9uLmJ1bmRsZVBvbGljeSA9ICdtYXgtYnVuZGxlJztcbiAgICB9XG4gICAgdGhpcy5wYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZ3VyYXRpb24pO1xuICAgIHRoaXMucGMub25pY2VjYW5kaWRhdGUgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uTG9jYWxJY2VDYW5kaWRhdGUuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICB0aGlzLnBjLm9udHJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uUmVtb3RlU3RyZWFtQWRkZWQuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICB0aGlzLnBjLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkljZUNvbm5lY3Rpb25TdGF0ZUNoYW5nZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIHRoaXMucGMub25jb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uQ29ubmVjdGlvblN0YXRlQ2hhbmdlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gIH1cblxuICBfZ2V0U3RhdHMoKSB7XG4gICAgaWYgKHRoaXMucGMpIHtcbiAgICAgIHJldHVybiB0aGlzLnBjLmdldFN0YXRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdQZWVyQ29ubmVjdGlvbiBpcyBub3QgYXZhaWxhYmxlLicpKTtcbiAgICB9XG4gIH1cblxuICBfcmVhZHlIYW5kbGVyKHNlc3Npb25JZCkge1xuICAgIGNvbnN0IGludGVybmFsSWQgPSB0aGlzLl9yZXZlcnNlSWRNYXAuZ2V0KHNlc3Npb25JZCk7XG4gICAgaWYgKHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgY29uc3QgbWVkaWFTdHJlYW0gPSB0aGlzLl9yZW1vdGVNZWRpYVN0cmVhbXMuZ2V0KHNlc3Npb25JZCk7XG4gICAgICBjb25zdCB0cmFuc3BvcnRTZXR0aW5ncyA9XG4gICAgICAgICAgbmV3IFRyYW5zcG9ydFNldHRpbmdzKFRyYW5zcG9ydFR5cGUuV0VCUlRDLCB0aGlzLl9pZCk7XG4gICAgICB0cmFuc3BvcnRTZXR0aW5ncy5ydHBUcmFuc2NlaXZlcnMgPVxuICAgICAgICAgIHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycy5nZXQoaW50ZXJuYWxJZCkudHJhbnNjZWl2ZXJzO1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbihcbiAgICAgICAgICBzZXNzaW9uSWQsIG1lZGlhU3RyZWFtLCB0cmFuc3BvcnRTZXR0aW5ncyxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91bnN1YnNjcmliZShpbnRlcm5hbElkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHRoaXMuX2dldFN0YXRzKCksXG4gICAgICAgICAgKHRyYWNrS2luZCkgPT4gdGhpcy5fbXV0ZU9yVW5tdXRlKHNlc3Npb25JZCwgdHJ1ZSwgZmFsc2UsIHRyYWNrS2luZCksXG4gICAgICAgICAgKHRyYWNrS2luZCkgPT4gdGhpcy5fbXV0ZU9yVW5tdXRlKHNlc3Npb25JZCwgZmFsc2UsIGZhbHNlLCB0cmFja0tpbmQpLFxuICAgICAgICAgIChvcHRpb25zKSA9PiB0aGlzLl9hcHBseU9wdGlvbnMoc2Vzc2lvbklkLCBvcHRpb25zKSk7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnNldChzZXNzaW9uSWQsIHN1YnNjcmlwdGlvbik7XG4gICAgICAvLyBSZXNvbHZlIHN1YnNjcmlwdGlvbiBpZiBtZWRpYVN0cmVhbSBpcyByZWFkeS5cbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb25zLmdldChzZXNzaW9uSWQpLnN0cmVhbSkge1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5nZXQoaW50ZXJuYWxJZCkucmVzb2x2ZShzdWJzY3JpcHRpb24pO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5kZWxldGUoaW50ZXJuYWxJZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9wdWJsaXNoUHJvbWlzZXMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICBjb25zdCB0cmFuc3BvcnRTZXR0aW5ncyA9XG4gICAgICAgICAgbmV3IFRyYW5zcG9ydFNldHRpbmdzKFRyYW5zcG9ydFR5cGUuV0VCUlRDLCB0aGlzLl9pZCk7XG4gICAgICB0cmFuc3BvcnRTZXR0aW5ncy50cmFuc2NlaXZlcnMgPVxuICAgICAgICAgIHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpLnRyYW5zY2VpdmVycztcbiAgICAgIGNvbnN0IHB1YmxpY2F0aW9uID0gbmV3IFB1YmxpY2F0aW9uKFxuICAgICAgICAgIHNlc3Npb25JZCxcbiAgICAgICAgICB0cmFuc3BvcnRTZXR0aW5ncyxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91bnB1Ymxpc2goaW50ZXJuYWxJZCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB0aGlzLl9nZXRTdGF0cygpLFxuICAgICAgICAgICh0cmFja0tpbmQpID0+IHRoaXMuX211dGVPclVubXV0ZShzZXNzaW9uSWQsIHRydWUsIHRydWUsIHRyYWNrS2luZCksXG4gICAgICAgICAgKHRyYWNrS2luZCkgPT4gdGhpcy5fbXV0ZU9yVW5tdXRlKHNlc3Npb25JZCwgZmFsc2UsIHRydWUsIHRyYWNrS2luZCkpO1xuICAgICAgdGhpcy5fcHVibGljYXRpb25zLnNldChzZXNzaW9uSWQsIHB1YmxpY2F0aW9uKTtcbiAgICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5nZXQoaW50ZXJuYWxJZCkucmVzb2x2ZShwdWJsaWNhdGlvbik7XG4gICAgICAvLyBEbyBub3QgZmlyZSBwdWJsaWNhdGlvbidzIGVuZGVkIGV2ZW50IHdoZW4gYXNzb2NpYXRlZCBzdHJlYW0gaXMgZW5kZWQuXG4gICAgICAvLyBJdCBtYXkgc3RpbGwgc2VuZGluZyBzaWxlbmNlIG9yIGJsYWNrIGZyYW1lcy5cbiAgICAgIC8vIFJlZmVyIHRvIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJydGMtcGMvI3J0Y3J0cHNlbmRlci1pbnRlcmZhY2UuXG4gICAgfSBlbHNlIGlmICghc2Vzc2lvbklkKSB7XG4gICAgICAvLyBDaGFubmVsIHJlYWR5XG4gICAgfVxuICB9XG5cbiAgX3NkcEhhbmRsZXIoc2RwKSB7XG4gICAgaWYgKHNkcC50eXBlID09PSAnYW5zd2VyJykge1xuICAgICAgdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihzZHApLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcGVuZGluZ0NhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHRoaXMuX3BlbmRpbmdDYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICB0aGlzLl9zZW5kQ2FuZGlkYXRlKGNhbmRpZGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKCdTZXQgcmVtb3RlIGRlc2NyaXB0aW9uIGZhaWxlZDogJyArIGVycm9yKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0UHJvbWlzZShlcnJvcik7XG4gICAgICAgIHRoaXMuX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCk7XG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9uZXh0U2RwUHJvbWlzZSgpKSB7XG4gICAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ1VuZXhwZWN0ZWQgU0RQIHByb21pc2Ugc3RhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX2Vycm9ySGFuZGxlcihzZXNzaW9uSWQsIGVycm9yTWVzc2FnZSkge1xuICAgIGlmICghc2Vzc2lvbklkKSB7XG4gICAgICAvLyBUcmFuc3BvcnQgZXJyb3JcbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8vIEZpcmUgZXJyb3IgZXZlbnQgb24gcHVibGljYXRpb24gb3Igc3Vic2NyaXB0aW9uXG4gICAgY29uc3QgZXJyb3JFdmVudCA9IG5ldyBFcnJvckV2ZW50KCdlcnJvcicsIHtcbiAgICAgIGVycm9yOiBuZXcgQ29uZmVyZW5jZUVycm9yKGVycm9yTWVzc2FnZSksXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX3B1YmxpY2F0aW9ucy5oYXMoc2Vzc2lvbklkKSkge1xuICAgICAgdGhpcy5fcHVibGljYXRpb25zLmdldChzZXNzaW9uSWQpLmRpc3BhdGNoRXZlbnQoZXJyb3JFdmVudCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb25zLmhhcyhzZXNzaW9uSWQpKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmdldChzZXNzaW9uSWQpLmRpc3BhdGNoRXZlbnQoZXJyb3JFdmVudCk7XG4gICAgfVxuICAgIC8vIFN0b3AgcHVibGljYXRpb24gb3Igc3Vic2NyaXB0aW9uXG4gICAgY29uc3QgaW50ZXJuYWxJZCA9IHRoaXMuX3JldmVyc2VJZE1hcC5nZXQoc2Vzc2lvbklkKTtcbiAgICBpZiAodGhpcy5fcHVibGlzaFRyYW5zY2VpdmVycy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgIHRoaXMuX3VucHVibGlzaChpbnRlcm5hbElkKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKGludGVybmFsSWQpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVFcnJvcihlcnJvck1lc3NhZ2UpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBDb25mZXJlbmNlRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZXJyb3JFdmVudCA9IG5ldyBFcnJvckV2ZW50KCdlcnJvcicsIHtcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICB9KTtcbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHVibGljYXRpb25dIG9mIHRoaXMuX3B1YmxpY2F0aW9ucykge1xuICAgICAgcHVibGljYXRpb24uZGlzcGF0Y2hFdmVudChlcnJvckV2ZW50KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHN1YnNjcmlwdGlvbl0gb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3Vic2NyaXB0aW9uLmRpc3BhdGNoRXZlbnQoZXJyb3JFdmVudCk7XG4gICAgfVxuICAgIC8vIEZpcmUgZW5kZWQgZXZlbnQgd2hlbiBlcnJvciBvY2N1cmVkXG4gICAgdGhpcy5fZmlyZUVuZGVkRXZlbnRPblB1YmxpY2F0aW9uT3JTdWJzY3JpcHRpb24oKTtcbiAgfVxuXG4gIF9zZXRDb2RlY09yZGVyKHNkcCwgb3B0aW9ucywgbWlkKSB7XG4gICAgaWYgKG9wdGlvbnMuYXVkaW8pIHtcbiAgICAgIGlmIChvcHRpb25zLmF1ZGlvLmNvZGVjcykge1xuICAgICAgICBjb25zdCBhdWRpb0NvZGVjTmFtZXMgPSBBcnJheS5mcm9tKG9wdGlvbnMuYXVkaW8uY29kZWNzLCAoY29kZWMpID0+XG4gICAgICAgICAgY29kZWMubmFtZSk7XG4gICAgICAgIHNkcCA9IFNkcFV0aWxzLnJlb3JkZXJDb2RlY3Moc2RwLCAnYXVkaW8nLCBhdWRpb0NvZGVjTmFtZXMsIG1pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhdWRpb0NvZGVjTmFtZXMgPSBBcnJheS5mcm9tKG9wdGlvbnMuYXVkaW8sXG4gICAgICAgICAgICAoZW5jb2RpbmdQYXJhbWV0ZXJzKSA9PiBlbmNvZGluZ1BhcmFtZXRlcnMuY29kZWMubmFtZSk7XG4gICAgICAgIHNkcCA9IFNkcFV0aWxzLnJlb3JkZXJDb2RlY3Moc2RwLCAnYXVkaW8nLCBhdWRpb0NvZGVjTmFtZXMsIG1pZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnZpZGVvKSB7XG4gICAgICBpZiAob3B0aW9ucy52aWRlby5jb2RlY3MpIHtcbiAgICAgICAgY29uc3QgdmlkZW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbShvcHRpb25zLnZpZGVvLmNvZGVjcywgKGNvZGVjKSA9PlxuICAgICAgICAgIGNvZGVjLm5hbWUpO1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ3ZpZGVvJywgdmlkZW9Db2RlY05hbWVzLCBtaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmlkZW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbShvcHRpb25zLnZpZGVvLFxuICAgICAgICAgICAgKGVuY29kaW5nUGFyYW1ldGVycykgPT4gZW5jb2RpbmdQYXJhbWV0ZXJzLmNvZGVjLm5hbWUpO1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ3ZpZGVvJywgdmlkZW9Db2RlY05hbWVzLCBtaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX3NldE1heEJpdHJhdGUoc2RwLCBvcHRpb25zLCBtaWQpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXVkaW8gPT09ICdvYmplY3QnKSB7XG4gICAgICBzZHAgPSBTZHBVdGlscy5zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucy5hdWRpbywgbWlkKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnZpZGVvID09PSAnb2JqZWN0Jykge1xuICAgICAgc2RwID0gU2RwVXRpbHMuc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMudmlkZW8sIG1pZCk7XG4gICAgfVxuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBfc2V0UnRwU2VuZGVyT3B0aW9ucyhzZHAsIG9wdGlvbnMsIG1pZCkge1xuICAgIC8vIFNEUCBtdWdsaW5nIGlzIGRlcHJlY2F0ZWQsIG1vdmluZyB0byBgc2V0UGFyYW1ldGVyc2AuXG4gICAgaWYgKHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMuYXVkaW8pIHx8XG4gICAgICAgIHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pKSB7XG4gICAgICByZXR1cm4gc2RwO1xuICAgIH1cbiAgICBzZHAgPSB0aGlzLl9zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucywgbWlkKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX3NldFJ0cFJlY2VpdmVyT3B0aW9ucyhzZHAsIG9wdGlvbnMsIG1pZCkge1xuICAgIC8vIEFkZCBsZWdhY3kgc2ltdWxjYXN0IGluIFNEUCBmb3Igc2FmYXJpLlxuICAgIGlmICh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSAmJiBVdGlscy5pc1NhZmFyaSgpKSB7XG4gICAgICBpZiAob3B0aW9ucy52aWRlby5sZW5ndGggPiAxKSB7XG4gICAgICAgIHNkcCA9IFNkcFV0aWxzLmFkZExlZ2FjeVNpbXVsY2FzdChcbiAgICAgICAgICAgIHNkcCwgJ3ZpZGVvJywgb3B0aW9ucy52aWRlby5sZW5ndGgsIG1pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gX3ZpZGVvQ29kZWNzIGlzIGEgd29ya2Fyb3VuZCBmb3Igc2V0dGluZyB2aWRlbyBjb2RlY3MuIEl0IHdpbGwgYmUgbW92ZWQgdG8gUlRDUnRwU2VuZFBhcmFtZXRlcnMuXG4gICAgaWYgKHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pICYmIHRoaXMuX3ZpZGVvQ29kZWNzKSB7XG4gICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ3ZpZGVvJywgdGhpcy5fdmlkZW9Db2RlY3MsIG1pZCk7XG4gICAgICByZXR1cm4gc2RwO1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy5hdWRpbykgfHxcbiAgICAgICAgdGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykpIHtcbiAgICAgIHJldHVybiBzZHA7XG4gICAgfVxuICAgIHNkcCA9IHRoaXMuX3NldENvZGVjT3JkZXIoc2RwLCBvcHRpb25zLCBtaWQpO1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICAvLyBIYW5kbGUgc3RyZWFtIGV2ZW50IHNlbnQgZnJvbSBNQ1UuIFNvbWUgc3RyZWFtIHVwZGF0ZSBldmVudHMgc2VudCBmcm9tXG4gIC8vIHNlcnZlciwgbW9yZSBzcGVjaWZpY2FsbHkgYXVkaW8uc3RhdHVzIGFuZCB2aWRlby5zdGF0dXMgZXZlbnRzIHNob3VsZCBiZVxuICAvLyBwdWJsaWNhdGlvbiBldmVudCBvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBUaGV5IGRvbid0IGNoYW5nZSBNZWRpYVN0cmVhbSdzXG4gIC8vIHN0YXR1cy4gU2VlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdlYnJ0Yy10b29sa2l0L293dC1zZXJ2ZXIvYmxvYi9tYXN0ZXIvZG9jL0NsaWVudC1Qb3J0YWwlMjBQcm90b2NvbC5tZCMzMzktcGFydGljaXBhbnQtaXMtbm90aWZpZWQtb24tc3RyZWFtcy11cGRhdGUtaW4tcm9vbVxuICAvLyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgX29uU3RyZWFtRXZlbnQobWVzc2FnZSkge1xuICAgIGNvbnN0IGV2ZW50VGFyZ2V0cyA9IFtdO1xuICAgIGlmICh0aGlzLl9wdWJsaWNhdGlvbnMuaGFzKG1lc3NhZ2UuaWQpKSB7XG4gICAgICBldmVudFRhcmdldHMucHVzaCh0aGlzLl9wdWJsaWNhdGlvbnMuZ2V0KG1lc3NhZ2UuaWQpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzdWJzY3JpcHRpb24gb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgaWYgKG1lc3NhZ2UuaWQgPT09IHN1YnNjcmlwdGlvbi5fYXVkaW9UcmFja0lkIHx8XG4gICAgICAgICAgbWVzc2FnZS5pZCA9PT0gc3Vic2NyaXB0aW9uLl92aWRlb1RyYWNrSWQpIHtcbiAgICAgICAgZXZlbnRUYXJnZXRzLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFldmVudFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB0cmFja0tpbmQ7XG4gICAgaWYgKG1lc3NhZ2UuZGF0YS5maWVsZCA9PT0gJ2F1ZGlvLnN0YXR1cycpIHtcbiAgICAgIHRyYWNrS2luZCA9IFRyYWNrS2luZC5BVURJTztcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuZGF0YS5maWVsZCA9PT0gJ3ZpZGVvLnN0YXR1cycpIHtcbiAgICAgIHRyYWNrS2luZCA9IFRyYWNrS2luZC5WSURFTztcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ludmFsaWQgZGF0YSBmaWVsZCBmb3Igc3RyZWFtIHVwZGF0ZSBpbmZvLicpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5kYXRhLnZhbHVlID09PSAnYWN0aXZlJykge1xuICAgICAgZXZlbnRUYXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT5cbiAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IE11dGVFdmVudCgndW5tdXRlJywge2tpbmQ6IHRyYWNrS2luZH0pKSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmRhdGEudmFsdWUgPT09ICdpbmFjdGl2ZScpIHtcbiAgICAgIGV2ZW50VGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+XG4gICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBNdXRlRXZlbnQoJ211dGUnLCB7a2luZDogdHJhY2tLaW5kfSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ludmFsaWQgZGF0YSB2YWx1ZSBmb3Igc3RyZWFtIHVwZGF0ZSBpbmZvLicpO1xuICAgIH1cbiAgfVxuXG4gIF9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvYmopIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBPbmx5IGNoZWNrIHRoZSBmaXJzdCBvbmUuXG4gICAgY29uc3QgcGFyYW0gPSBvYmpbMF07XG4gICAgcmV0dXJuICEhKFxuICAgICAgcGFyYW0uY29kZWNQYXlsb2FkVHlwZSB8fCBwYXJhbS5kdHggfHwgcGFyYW0uYWN0aXZlIHx8IHBhcmFtLnB0aW1lIHx8XG4gICAgICBwYXJhbS5tYXhGcmFtZXJhdGUgfHwgcGFyYW0uc2NhbGVSZXNvbHV0aW9uRG93bkJ5IHx8IHBhcmFtLnJpZCB8fFxuICAgICAgcGFyYW0uc2NhbGFiaWxpdHlNb2RlKTtcbiAgfVxuXG4gIF9pc093dEVuY29kaW5nUGFyYW1ldGVycyhvYmopIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBPbmx5IGNoZWNrIHRoZSBmaXJzdCBvbmUuXG4gICAgY29uc3QgcGFyYW0gPSBvYmpbMF07XG4gICAgcmV0dXJuICEhcGFyYW0uY29kZWM7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZ2xvYmFsIE1hcCwgUHJvbWlzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIEV2ZW50TW9kdWxlIGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuaW1wb3J0IHtTaW9TaWduYWxpbmcgYXMgU2lnbmFsaW5nfSBmcm9tICcuL3NpZ25hbGluZy5qcyc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCB7QmFzZTY0fSBmcm9tICcuLi9iYXNlL2Jhc2U2NC5qcyc7XG5pbXBvcnQge0NvbmZlcmVuY2VFcnJvcn0gZnJvbSAnLi9lcnJvci5qcyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi9iYXNlL3V0aWxzLmpzJztcbmltcG9ydCAqIGFzIFN0cmVhbU1vZHVsZSBmcm9tICcuLi9iYXNlL3N0cmVhbS5qcyc7XG5pbXBvcnQge1BhcnRpY2lwYW50fSBmcm9tICcuL3BhcnRpY2lwYW50LmpzJztcbmltcG9ydCB7Q29uZmVyZW5jZUluZm99IGZyb20gJy4vaW5mby5qcyc7XG5pbXBvcnQge0NvbmZlcmVuY2VQZWVyQ29ubmVjdGlvbkNoYW5uZWx9IGZyb20gJy4vY2hhbm5lbC5qcyc7XG5pbXBvcnQge1F1aWNDb25uZWN0aW9ufSBmcm9tICcuL3F1aWNjb25uZWN0aW9uLmpzJztcbmltcG9ydCB7UmVtb3RlTWl4ZWRTdHJlYW0sIEFjdGl2ZUF1ZGlvSW5wdXRDaGFuZ2VFdmVudCwgTGF5b3V0Q2hhbmdlRXZlbnR9XG4gIGZyb20gJy4vbWl4ZWRzdHJlYW0uanMnO1xuaW1wb3J0ICogYXMgU3RyZWFtVXRpbHNNb2R1bGUgZnJvbSAnLi9zdHJlYW11dGlscy5qcyc7XG5cbmNvbnN0IFNpZ25hbGluZ1N0YXRlID0ge1xuICBSRUFEWTogMSxcbiAgQ09OTkVDVElORzogMixcbiAgQ09OTkVDVEVEOiAzLFxufTtcblxuY29uc3QgcHJvdG9jb2xWZXJzaW9uID0gJzEuMic7XG5cbi8qIGVzbGludC1kaXNhYmxlIHZhbGlkLWpzZG9jICovXG4vKipcbiAqIEBjbGFzcyBQYXJ0aWNpcGFudEV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIFBhcnRpY2lwYW50RXZlbnQgcmVwcmVzZW50cyBhIHBhcnRpY2lwYW50IGV2ZW50LlxuICAgQGV4dGVuZHMgT3d0LkJhc2UuT3d0RXZlbnRcbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5jb25zdCBQYXJ0aWNpcGFudEV2ZW50ID0gZnVuY3Rpb24odHlwZSwgaW5pdCkge1xuICBjb25zdCB0aGF0ID0gbmV3IEV2ZW50TW9kdWxlLk93dEV2ZW50KHR5cGUsIGluaXQpO1xuICAvKipcbiAgICogQG1lbWJlciB7T3d0LkNvbmZlcmVuY2UuUGFydGljaXBhbnR9IHBhcnRpY2lwYW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuUGFydGljaXBhbnRFdmVudFxuICAgKi9cbiAgdGhhdC5wYXJ0aWNpcGFudCA9IGluaXQucGFydGljaXBhbnQ7XG4gIHJldHVybiB0aGF0O1xufTtcbi8qIGVzbGludC1lbmFibGUgdmFsaWQtanNkb2MgKi9cblxuLyoqXG4gKiBAY2xhc3MgQ29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb25cbiAqIEBjbGFzc0Rlc2MgQ29uZmlndXJhdGlvbiBmb3IgQ29uZmVyZW5jZUNsaWVudC5cbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBDb25mZXJlbmNlQ2xpZW50Q29uZmlndXJhdGlvbiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P1JUQ0NvbmZpZ3VyYXRpb259IHJ0Y0NvbmZpZ3VyYXRpb25cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb25cbiAgICAgKiBAZGVzYyBJdCB3aWxsIGJlIHVzZWQgZm9yIGNyZWF0aW5nIFBlZXJDb25uZWN0aW9uLlxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93ZWJydGMvI3J0Y2NvbmZpZ3VyYXRpb24tZGljdGlvbmFyeXxSVENDb25maWd1cmF0aW9uIERpY3Rpb25hcnkgb2YgV2ViUlRDIDEuMH0uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvLyBGb2xsb3dpbmcgb2JqZWN0IGNhbiBiZSBzZXQgdG8gY29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb24ucnRjQ29uZmlndXJhdGlvbi5cbiAgICAgKiB7XG4gICAgICogICBpY2VTZXJ2ZXJzOiBbe1xuICAgICAqICAgICAgdXJsczogXCJzdHVuOmV4YW1wbGUuY29tOjM0NzhcIlxuICAgICAqICAgfSwge1xuICAgICAqICAgICB1cmxzOiBbXG4gICAgICogICAgICAgXCJ0dXJuOmV4YW1wbGUuY29tOjM0Nzg/dHJhbnNwb3J0PXVkcFwiLFxuICAgICAqICAgICAgIFwidHVybjpleGFtcGxlLmNvbTozNDc4P3RyYW5zcG9ydD10Y3BcIlxuICAgICAqICAgICBdLFxuICAgICAqICAgICAgY3JlZGVudGlhbDogXCJwYXNzd29yZFwiLFxuICAgICAqICAgICAgdXNlcm5hbWU6IFwidXNlcm5hbWVcIlxuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKi9cbiAgICB0aGlzLnJ0Y0NvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/V2ViVHJhbnNwb3J0T3B0aW9uc30gd2ViVHJhbnNwb3J0Q29uZmlndXJhdGlvblxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50Q29uZmlndXJhdGlvblxuICAgICAqIEBkZXNjIEl0IHdpbGwgYmUgdXNlZCBmb3IgY3JlYXRpbmcgV2ViVHJhbnNwb3J0LlxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJ0cmFuc3BvcnQvI2RpY3RkZWYtd2VidHJhbnNwb3J0b3B0aW9uc3xXZWJUcmFuc3BvcnRPcHRpb25zIG9mIFdlYlRyYW5zcG9ydH0uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvLyBGb2xsb3dpbmcgb2JqZWN0IGNhbiBiZSBzZXQgdG8gY29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb24ud2ViVHJhbnNwb3J0Q29uZmlndXJhdGlvbi5cbiAgICAgKiB7XG4gICAgICogICBzZXJ2ZXJDZXJ0aWZpY2F0ZUZpbmdlcnByaW50czogW3tcbiAgICAgKiAgICAgdmFsdWU6XG4gICAgICogICAgICAgICAnMDA6MTE6MjI6MzM6NDQ6NTU6NjY6Nzc6ODg6OTk6QUE6QkI6Q0M6REQ6RUU6RkY6MDA6MTE6MjI6MzM6NDQ6NTU6NjY6Nzc6ODg6OTk6QUE6QkI6Q0M6REQ6RUU6RkYnLFxuICAgICAqICAgICBhbGdvcml0aG06ICdzaGEtMjU2JyxcbiAgICAgKiAgIH1dLFxuICAgICAqIH1cbiAgICAgKi9cbiAgICB0aGlzLndlYlRyYW5zcG9ydENvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgQ29uZmVyZW5jZUNsaWVudFxuICogQGNsYXNzZGVzYyBUaGUgQ29uZmVyZW5jZUNsaWVudCBoYW5kbGVzIFBlZXJDb25uZWN0aW9ucyBiZXR3ZWVuIGNsaWVudCBhbmQgc2VydmVyLiBGb3IgY29uZmVyZW5jZSBjb250cm9sbGluZywgcGxlYXNlIHJlZmVyIHRvIFJFU1QgQVBJIGd1aWRlLlxuICogRXZlbnRzOlxuICpcbiAqIHwgRXZlbnQgTmFtZSAgICAgICAgICAgIHwgQXJndW1lbnQgVHlwZSAgICAgICAgICAgICAgICAgICAgfCBGaXJlZCB3aGVuICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgc3RyZWFtYWRkZWQgICAgICAgICAgIHwgT3d0LkJhc2UuU3RyZWFtRXZlbnQgICAgICAgICAgICAgfCBBIG5ldyBzdHJlYW0gaXMgYXZhaWxhYmxlIGluIHRoZSBjb25mZXJlbmNlLiB8XG4gKiB8IHBhcnRpY2lwYW50am9pbmVkICAgICB8IE93dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50RXZlbnQgIHwgQSBuZXcgcGFydGljaXBhbnQgam9pbmVkIHRoZSBjb25mZXJlbmNlLiB8XG4gKiB8IG1lc3NhZ2VyZWNlaXZlZCAgICAgICB8IE93dC5CYXNlLk1lc3NhZ2VFdmVudCAgICAgICAgICAgIHwgQSBuZXcgbWVzc2FnZSBpcyByZWNlaXZlZC4gfFxuICogfCBzZXJ2ZXJkaXNjb25uZWN0ZWQgICAgfCBPd3QuQmFzZS5Pd3RFdmVudCAgICAgICAgICAgICAgICB8IERpc2Nvbm5lY3RlZCBmcm9tIGNvbmZlcmVuY2Ugc2VydmVyLiB8XG4gKlxuICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHs/T3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb24gfSBjb25maWcgQ29uZmlndXJhdGlvbiBmb3IgQ29uZmVyZW5jZUNsaWVudC5cbiAqIEBwYXJhbSB7P093dC5Db25mZXJlbmNlLlNpb1NpZ25hbGluZyB9IHNpZ25hbGluZ0ltcGwgU2lnbmFsaW5nIGNoYW5uZWwgaW1wbGVtZW50YXRpb24gZm9yIENvbmZlcmVuY2VDbGllbnQuIFNESyB1c2VzIGRlZmF1bHQgc2lnbmFsaW5nIGNoYW5uZWwgaW1wbGVtZW50YXRpb24gaWYgdGhpcyBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLiBDdXJyZW50bHksIGEgU29ja2V0LklPIHNpZ25hbGluZyBjaGFubmVsIGltcGxlbWVudGF0aW9uIHdhcyBwcm92aWRlZCBhcyBpY3MuY29uZmVyZW5jZS5TaW9TaWduYWxpbmcuIEhvd2V2ZXIsIGl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBkaXJlY3RseSBhY2Nlc3Mgc2lnbmFsaW5nIGNoYW5uZWwgb3IgY3VzdG9taXplIHNpZ25hbGluZyBjaGFubmVsIGZvciBDb25mZXJlbmNlQ2xpZW50IGFzIHRoaXMgdGltZS5cbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZlcmVuY2VDbGllbnQgPSBmdW5jdGlvbihjb25maWcsIHNpZ25hbGluZ0ltcGwpIHtcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldyBFdmVudE1vZHVsZS5FdmVudERpc3BhdGNoZXIoKSk7XG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIGxldCBzaWduYWxpbmdTdGF0ZSA9IFNpZ25hbGluZ1N0YXRlLlJFQURZO1xuICBjb25zdCBzaWduYWxpbmcgPSBzaWduYWxpbmdJbXBsID8gc2lnbmFsaW5nSW1wbCA6IChuZXcgU2lnbmFsaW5nKCkpO1xuICBsZXQgbWU7XG4gIGxldCByb29tO1xuICBjb25zdCByZW1vdGVTdHJlYW1zID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgc3RyZWFtIElELCB2YWx1ZSBpcyBhIFJlbW90ZVN0cmVhbS5cbiAgY29uc3QgcGFydGljaXBhbnRzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgcGFydGljaXBhbnQgSUQsIHZhbHVlIGlzIGEgUGFydGljaXBhbnQgb2JqZWN0LlxuICBjb25zdCBwdWJsaXNoQ2hhbm5lbHMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBNZWRpYVN0cmVhbSdzIElELCB2YWx1ZSBpcyBwYyBjaGFubmVsLlxuICBjb25zdCBjaGFubmVscyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIGNoYW5uZWwncyBpbnRlcm5hbCBJRCwgdmFsdWUgaXMgY2hhbm5lbC5cbiAgbGV0IHBlZXJDb25uZWN0aW9uQ2hhbm5lbCA9IG51bGw7IC8vIFBlZXJDb25uZWN0aW9uIGZvciBXZWJSVEMuXG4gIGxldCBxdWljVHJhbnNwb3J0Q2hhbm5lbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBtZW1iZXIge1JUQ1BlZXJDb25uZWN0aW9ufSBwZWVyQ29ubmVjdGlvblxuICAgKiBAaW5zdGFuY2VcbiAgICogQHJlYWRvbmx5XG4gICAqIEBkZXNjIFBlZXJDb25uZWN0aW9uIGZvciBXZWJSVEMgY29ubmVjdGlvbiB3aXRoIGNvbmZlcmVuY2Ugc2VydmVyLlxuICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudFxuICAgKiBAc2VlIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vd2VicnRjLXBjLyNydGNwZWVyY29ubmVjdGlvbi1pbnRlcmZhY2V8UlRDUGVlckNvbm5lY3Rpb24gSW50ZXJmYWNlIG9mIFdlYlJUQyAxLjB9LlxuICAgKi9cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdwZWVyQ29ubmVjdGlvbicsIHtcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBwZWVyQ29ubmVjdGlvbkNoYW5uZWw/LnBjO1xuICAgIH0sXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gb25TaWduYWxpbmdNZXNzYWdlXG4gICAqIEBkZXNjIFJlY2VpdmVkIGEgbWVzc2FnZSBmcm9tIGNvbmZlcmVuY2UgcG9ydGFsLiBEZWZpbmVkIGluIGNsaWVudC1zZXJ2ZXIgcHJvdG9jb2wuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBub3RpZmljYXRpb24gTm90aWZpY2F0aW9uIHR5cGUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIERhdGEgcmVjZWl2ZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBvblNpZ25hbGluZ01lc3NhZ2Uobm90aWZpY2F0aW9uLCBkYXRhKSB7XG4gICAgaWYgKG5vdGlmaWNhdGlvbiA9PT0gJ3NvYWMnIHx8IG5vdGlmaWNhdGlvbiA9PT0gJ3Byb2dyZXNzJykge1xuICAgICAgaWYgKGNoYW5uZWxzLmhhcyhkYXRhLmlkKSkge1xuICAgICAgICBjaGFubmVscy5nZXQoZGF0YS5pZCkub25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgZGF0YSk7XG4gICAgICB9IGVsc2UgaWYgKHF1aWNUcmFuc3BvcnRDaGFubmVsICYmIHF1aWNUcmFuc3BvcnRDaGFubmVsXG4gICAgICAgICAgLmhhc0NvbnRlbnRTZXNzaW9uSWQoZGF0YS5pZCkpIHtcbiAgICAgICAgcXVpY1RyYW5zcG9ydENoYW5uZWwub25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgYSBjaGFubmVsIGZvciBpbmNvbWluZyBkYXRhLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobm90aWZpY2F0aW9uID09PSAnc3RyZWFtJykge1xuICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnYWRkJykge1xuICAgICAgICBmaXJlU3RyZWFtQWRkZWQoZGF0YS5kYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdGF0dXMgPT09ICdyZW1vdmUnKSB7XG4gICAgICAgIGZpcmVTdHJlYW1SZW1vdmVkKGRhdGEpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgLy8gQnJvYWRjYXN0IGF1ZGlvL3ZpZGVvIHVwZGF0ZSBzdGF0dXMgdG8gY2hhbm5lbCBzbyBzcGVjaWZpYyBldmVudHMgY2FuIGJlIGZpcmVkIG9uIHB1YmxpY2F0aW9uIG9yIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgaWYgKGRhdGEuZGF0YS5maWVsZCA9PT0gJ2F1ZGlvLnN0YXR1cycgfHwgZGF0YS5kYXRhLmZpZWxkID09PVxuICAgICAgICAgICd2aWRlby5zdGF0dXMnKSB7XG4gICAgICAgICAgY2hhbm5lbHMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgYy5vbk1lc3NhZ2Uobm90aWZpY2F0aW9uLCBkYXRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmRhdGEuZmllbGQgPT09ICdhY3RpdmVJbnB1dCcpIHtcbiAgICAgICAgICBmaXJlQWN0aXZlQXVkaW9JbnB1dENoYW5nZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmRhdGEuZmllbGQgPT09ICd2aWRlby5sYXlvdXQnKSB7XG4gICAgICAgICAgZmlyZUxheW91dENoYW5nZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmRhdGEuZmllbGQgPT09ICcuJykge1xuICAgICAgICAgIHVwZGF0ZVJlbW90ZVN0cmVhbShkYXRhLmRhdGEudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdVbmtub3duIHN0cmVhbSBldmVudCBmcm9tIE1DVS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm90aWZpY2F0aW9uID09PSAndGV4dCcpIHtcbiAgICAgIGZpcmVNZXNzYWdlUmVjZWl2ZWQoZGF0YSk7XG4gICAgfSBlbHNlIGlmIChub3RpZmljYXRpb24gPT09ICdwYXJ0aWNpcGFudCcpIHtcbiAgICAgIGZpcmVQYXJ0aWNpcGFudEV2ZW50KGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHNpZ25hbGluZy5hZGRFdmVudExpc3RlbmVyKCdkYXRhJywgKGV2ZW50KSA9PiB7XG4gICAgb25TaWduYWxpbmdNZXNzYWdlKGV2ZW50Lm1lc3NhZ2Uubm90aWZpY2F0aW9uLCBldmVudC5tZXNzYWdlLmRhdGEpO1xuICB9KTtcblxuICBzaWduYWxpbmcuYWRkRXZlbnRMaXN0ZW5lcignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICBjbGVhbigpO1xuICAgIHNpZ25hbGluZ1N0YXRlID0gU2lnbmFsaW5nU3RhdGUuUkVBRFk7XG4gICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnc2VydmVyZGlzY29ubmVjdGVkJykpO1xuICB9KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBmaXJlUGFydGljaXBhbnRFdmVudChkYXRhKSB7XG4gICAgaWYgKGRhdGEuYWN0aW9uID09PSAnam9pbicpIHtcbiAgICAgIGRhdGEgPSBkYXRhLmRhdGE7XG4gICAgICBjb25zdCBwYXJ0aWNpcGFudCA9IG5ldyBQYXJ0aWNpcGFudChkYXRhLmlkLCBkYXRhLnJvbGUsIGRhdGEudXNlcik7XG4gICAgICBwYXJ0aWNpcGFudHMuc2V0KGRhdGEuaWQsIHBhcnRpY2lwYW50KTtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IFBhcnRpY2lwYW50RXZlbnQoXG4gICAgICAgICAgJ3BhcnRpY2lwYW50am9pbmVkJywge3BhcnRpY2lwYW50OiBwYXJ0aWNpcGFudH0pO1xuICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKGRhdGEuYWN0aW9uID09PSAnbGVhdmUnKSB7XG4gICAgICBjb25zdCBwYXJ0aWNpcGFudElkID0gZGF0YS5kYXRhO1xuICAgICAgaWYgKCFwYXJ0aWNpcGFudHMuaGFzKHBhcnRpY2lwYW50SWQpKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICAgJ1JlY2VpdmVkIGxlYXZlIG1lc3NhZ2UgZnJvbSBNQ1UgZm9yIGFuIHVua25vd24gcGFydGljaXBhbnQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50ID0gcGFydGljaXBhbnRzLmdldChwYXJ0aWNpcGFudElkKTtcbiAgICAgIHBhcnRpY2lwYW50cy5kZWxldGUocGFydGljaXBhbnRJZCk7XG4gICAgICBwYXJ0aWNpcGFudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnbGVmdCcpKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBmaXJlTWVzc2FnZVJlY2VpdmVkKGRhdGEpIHtcbiAgICBjb25zdCBtZXNzYWdlRXZlbnQgPSBuZXcgRXZlbnRNb2R1bGUuTWVzc2FnZUV2ZW50KCdtZXNzYWdlcmVjZWl2ZWQnLCB7XG4gICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXG4gICAgICBvcmlnaW46IGRhdGEuZnJvbSxcbiAgICAgIHRvOiBkYXRhLnRvLFxuICAgIH0pO1xuICAgIHNlbGYuZGlzcGF0Y2hFdmVudChtZXNzYWdlRXZlbnQpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gZmlyZVN0cmVhbUFkZGVkKGluZm8pIHtcbiAgICBjb25zdCBzdHJlYW0gPSBjcmVhdGVSZW1vdGVTdHJlYW0oaW5mbyk7XG4gICAgcmVtb3RlU3RyZWFtcy5zZXQoc3RyZWFtLmlkLCBzdHJlYW0pO1xuICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IFN0cmVhbU1vZHVsZS5TdHJlYW1FdmVudCgnc3RyZWFtYWRkZWQnLCB7XG4gICAgICBzdHJlYW06IHN0cmVhbSxcbiAgICB9KTtcbiAgICBzZWxmLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gZmlyZVN0cmVhbVJlbW92ZWQoaW5mbykge1xuICAgIGlmICghcmVtb3RlU3RyZWFtcy5oYXMoaW5mby5pZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzcGVjaWZpYyByZW1vdGUgc3RyZWFtLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHJlYW0gPSByZW1vdGVTdHJlYW1zLmdldChpbmZvLmlkKTtcbiAgICBjb25zdCBzdHJlYW1FdmVudCA9IG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnZW5kZWQnKTtcbiAgICByZW1vdGVTdHJlYW1zLmRlbGV0ZShzdHJlYW0uaWQpO1xuICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KHN0cmVhbUV2ZW50KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGZpcmVBY3RpdmVBdWRpb0lucHV0Q2hhbmdlKGluZm8pIHtcbiAgICBpZiAoIXJlbW90ZVN0cmVhbXMuaGFzKGluZm8uaWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgc3BlY2lmaWMgcmVtb3RlIHN0cmVhbS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyZWFtID0gcmVtb3RlU3RyZWFtcy5nZXQoaW5mby5pZCk7XG4gICAgY29uc3Qgc3RyZWFtRXZlbnQgPSBuZXcgQWN0aXZlQXVkaW9JbnB1dENoYW5nZUV2ZW50KFxuICAgICAgICAnYWN0aXZlYXVkaW9pbnB1dGNoYW5nZScsIHtcbiAgICAgICAgICBhY3RpdmVBdWRpb0lucHV0U3RyZWFtSWQ6IGluZm8uZGF0YS52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgc3RyZWFtLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gZmlyZUxheW91dENoYW5nZShpbmZvKSB7XG4gICAgaWYgKCFyZW1vdGVTdHJlYW1zLmhhcyhpbmZvLmlkKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Nhbm5vdCBmaW5kIHNwZWNpZmljIHJlbW90ZSBzdHJlYW0uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0cmVhbSA9IHJlbW90ZVN0cmVhbXMuZ2V0KGluZm8uaWQpO1xuICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IExheW91dENoYW5nZUV2ZW50KFxuICAgICAgICAnbGF5b3V0Y2hhbmdlJywge1xuICAgICAgICAgIGxheW91dDogaW5mby5kYXRhLnZhbHVlLFxuICAgICAgICB9KTtcbiAgICBzdHJlYW0uZGlzcGF0Y2hFdmVudChzdHJlYW1FdmVudCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiB1cGRhdGVSZW1vdGVTdHJlYW0oc3RyZWFtSW5mbykge1xuICAgIGlmICghcmVtb3RlU3RyZWFtcy5oYXMoc3RyZWFtSW5mby5pZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzcGVjaWZpYyByZW1vdGUgc3RyZWFtLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHJlYW0gPSByZW1vdGVTdHJlYW1zLmdldChzdHJlYW1JbmZvLmlkKTtcbiAgICBzdHJlYW0uc2V0dGluZ3MgPSBTdHJlYW1VdGlsc01vZHVsZS5jb252ZXJ0VG9QdWJsaWNhdGlvblNldHRpbmdzKHN0cmVhbUluZm9cbiAgICAgICAgLm1lZGlhKTtcbiAgICBzdHJlYW0uZXh0cmFDYXBhYmlsaXRpZXMgPSBTdHJlYW1VdGlsc01vZHVsZVxuICAgICAgICAuY29udmVydFRvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzKFxuICAgICAgICAgICAgc3RyZWFtSW5mby5tZWRpYSk7XG4gICAgY29uc3Qgc3RyZWFtRXZlbnQgPSBuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ3VwZGF0ZWQnKTtcbiAgICBzdHJlYW0uZGlzcGF0Y2hFdmVudChzdHJlYW1FdmVudCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBjcmVhdGVSZW1vdGVTdHJlYW0oc3RyZWFtSW5mbykge1xuICAgIGlmIChzdHJlYW1JbmZvLnR5cGUgPT09ICdtaXhlZCcpIHtcbiAgICAgIHJldHVybiBuZXcgUmVtb3RlTWl4ZWRTdHJlYW0oc3RyZWFtSW5mbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBhdWRpb1NvdXJjZUluZm87IGxldCB2aWRlb1NvdXJjZUluZm87XG4gICAgICBjb25zdCBhdWRpb1RyYWNrID0gc3RyZWFtSW5mby5tZWRpYS50cmFja3NcbiAgICAgICAgICAuZmluZCgodCkgPT4gdC50eXBlID09PSAnYXVkaW8nKTtcbiAgICAgIGNvbnN0IHZpZGVvVHJhY2sgPSBzdHJlYW1JbmZvLm1lZGlhLnRyYWNrc1xuICAgICAgICAgIC5maW5kKCh0KSA9PiB0LnR5cGUgPT09ICd2aWRlbycpO1xuICAgICAgaWYgKGF1ZGlvVHJhY2spIHtcbiAgICAgICAgYXVkaW9Tb3VyY2VJbmZvID0gYXVkaW9UcmFjay5zb3VyY2U7XG4gICAgICB9XG4gICAgICBpZiAodmlkZW9UcmFjaykge1xuICAgICAgICB2aWRlb1NvdXJjZUluZm8gPSB2aWRlb1RyYWNrLnNvdXJjZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VJbmZvID0gc3RyZWFtSW5mby5kYXRhO1xuICAgICAgY29uc3Qgc3RyZWFtID0gbmV3IFN0cmVhbU1vZHVsZS5SZW1vdGVTdHJlYW0oc3RyZWFtSW5mby5pZCxcbiAgICAgICAgICBzdHJlYW1JbmZvLmluZm8ub3duZXIsIHVuZGVmaW5lZCwgbmV3IFN0cmVhbU1vZHVsZS5TdHJlYW1Tb3VyY2VJbmZvKFxuICAgICAgICAgICAgICBhdWRpb1NvdXJjZUluZm8sIHZpZGVvU291cmNlSW5mbywgZGF0YVNvdXJjZUluZm8pLCBzdHJlYW1JbmZvLmluZm9cbiAgICAgICAgICAgICAgLmF0dHJpYnV0ZXMpO1xuICAgICAgc3RyZWFtLnNldHRpbmdzID0gU3RyZWFtVXRpbHNNb2R1bGUuY29udmVydFRvUHVibGljYXRpb25TZXR0aW5ncyhcbiAgICAgICAgICBzdHJlYW1JbmZvLm1lZGlhKTtcbiAgICAgIHN0cmVhbS5leHRyYUNhcGFiaWxpdGllcyA9IFN0cmVhbVV0aWxzTW9kdWxlXG4gICAgICAgICAgLmNvbnZlcnRUb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyhcbiAgICAgICAgICAgICAgc3RyZWFtSW5mby5tZWRpYSk7XG4gICAgICByZXR1cm4gc3RyZWFtO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRTaWduYWxpbmdNZXNzYWdlKHR5cGUsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gc2lnbmFsaW5nLnNlbmQodHlwZSwgbWVzc2FnZSk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBjcmVhdGVTaWduYWxpbmdGb3JDaGFubmVsKCkge1xuICAgIC8vIENvbnN0cnVjdCBhbiBzaWduYWxpbmcgc2VuZGVyL3JlY2VpdmVyIGZvciBDb25mZXJlbmNlUGVlckNvbm5lY3Rpb24uXG4gICAgY29uc3Qgc2lnbmFsaW5nRm9yQ2hhbm5lbCA9IE9iamVjdC5jcmVhdGUoRXZlbnRNb2R1bGUuRXZlbnREaXNwYXRjaGVyKTtcbiAgICBzaWduYWxpbmdGb3JDaGFubmVsLnNlbmRTaWduYWxpbmdNZXNzYWdlID0gc2VuZFNpZ25hbGluZ01lc3NhZ2U7XG4gICAgcmV0dXJuIHNpZ25hbGluZ0ZvckNoYW5uZWw7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBjcmVhdGVQZWVyQ29ubmVjdGlvbkNoYW5uZWwodHJhbnNwb3J0KSB7XG4gICAgY29uc3Qgc2lnbmFsaW5nRm9yQ2hhbm5lbCA9IGNyZWF0ZVNpZ25hbGluZ0ZvckNoYW5uZWwoKTtcbiAgICBjb25zdCBjaGFubmVsID1cbiAgICAgICAgbmV3IENvbmZlcmVuY2VQZWVyQ29ubmVjdGlvbkNoYW5uZWwoY29uZmlnLCBzaWduYWxpbmdGb3JDaGFubmVsKTtcbiAgICBjaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lkJywgKG1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFjaGFubmVscy5oYXMobWVzc2FnZUV2ZW50Lm1lc3NhZ2UpKSB7XG4gICAgICAgIGNoYW5uZWxzLnNldChtZXNzYWdlRXZlbnQubWVzc2FnZSwgY2hhbm5lbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2dnZXIud2FybmluZygnQ2hhbm5lbCBhbHJlYWR5IGV4aXN0cycsIG1lc3NhZ2VFdmVudC5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2hhbm5lbDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGNsZWFuKCkge1xuICAgIHBhcnRpY2lwYW50cy5jbGVhcigpO1xuICAgIHJlbW90ZVN0cmVhbXMuY2xlYXIoKTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaW5mbycsIHtcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIGdldDogKCkgPT4ge1xuICAgICAgaWYgKCFyb29tKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBDb25mZXJlbmNlSW5mbyhyb29tLmlkLCBBcnJheS5mcm9tKHBhcnRpY2lwYW50cywgKHgpID0+IHhbXG4gICAgICAgICAgMV0pLCBBcnJheS5mcm9tKHJlbW90ZVN0cmVhbXMsICh4KSA9PiB4WzFdKSwgbWUpO1xuICAgIH0sXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gam9pblxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgSm9pbiBhIGNvbmZlcmVuY2UuXG4gICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q29uZmVyZW5jZUluZm8sIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIGN1cnJlbnQgY29uZmVyZW5jZSdzIGluZm9ybWF0aW9uIGlmIHN1Y2Nlc3NmdWxseSBqb2luIHRoZSBjb25mZXJlbmNlLiBPciByZXR1cm4gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggYSBuZXdseSBjcmVhdGVkIE93dC5FcnJvciBpZiBmYWlsZWQgdG8gam9pbiB0aGUgY29uZmVyZW5jZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuU3RyaW5nIFRva2VuIGlzIGlzc3VlZCBieSBjb25mZXJlbmNlIHNlcnZlcihudXZlKS5cbiAgICovXG4gIHRoaXMuam9pbiA9IGZ1bmN0aW9uKHRva2VuU3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gSlNPTi5wYXJzZShCYXNlNjQuZGVjb2RlQmFzZTY0KHRva2VuU3RyaW5nKSk7XG4gICAgICBjb25zdCBpc1NlY3VyZWQgPSAodG9rZW4uc2VjdXJlID09PSB0cnVlKTtcbiAgICAgIGxldCBob3N0ID0gdG9rZW4uaG9zdDtcbiAgICAgIGlmICh0eXBlb2YgaG9zdCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoJ0ludmFsaWQgaG9zdC4nKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChob3N0LmluZGV4T2YoJ2h0dHAnKSA9PT0gLTEpIHtcbiAgICAgICAgaG9zdCA9IGlzU2VjdXJlZCA/ICgnaHR0cHM6Ly8nICsgaG9zdCkgOiAoJ2h0dHA6Ly8nICsgaG9zdCk7XG4gICAgICB9XG4gICAgICBpZiAoc2lnbmFsaW5nU3RhdGUgIT09IFNpZ25hbGluZ1N0YXRlLlJFQURZKSB7XG4gICAgICAgIHJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKCdjb25uZWN0aW9uIHN0YXRlIGludmFsaWQnKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2lnbmFsaW5nU3RhdGUgPSBTaWduYWxpbmdTdGF0ZS5DT05ORUNUSU5HO1xuXG4gICAgICBjb25zdCBzeXNJbmZvID0gVXRpbHMuc3lzSW5mbygpO1xuICAgICAgY29uc3QgbG9naW5JbmZvID0ge1xuICAgICAgICB0b2tlbjogdG9rZW5TdHJpbmcsXG4gICAgICAgIHVzZXJBZ2VudDoge3Nkazogc3lzSW5mby5zZGt9LFxuICAgICAgICBwcm90b2NvbDogcHJvdG9jb2xWZXJzaW9uLFxuICAgICAgfTtcblxuICAgICAgc2lnbmFsaW5nLmNvbm5lY3QoaG9zdCwgaXNTZWN1cmVkLCBsb2dpbkluZm8pLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgc2lnbmFsaW5nU3RhdGUgPSBTaWduYWxpbmdTdGF0ZS5DT05ORUNURUQ7XG4gICAgICAgIHJvb20gPSByZXNwLnJvb207XG4gICAgICAgIGlmIChyb29tLnN0cmVhbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvciAoY29uc3Qgc3Qgb2Ygcm9vbS5zdHJlYW1zKSB7XG4gICAgICAgICAgICBpZiAoc3QudHlwZSA9PT0gJ21peGVkJykge1xuICAgICAgICAgICAgICBzdC52aWV3cG9ydCA9IHN0LmluZm8ubGFiZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW1vdGVTdHJlYW1zLnNldChzdC5pZCwgY3JlYXRlUmVtb3RlU3RyZWFtKHN0KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwLnJvb20gJiYgcmVzcC5yb29tLnBhcnRpY2lwYW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwIG9mIHJlc3Aucm9vbS5wYXJ0aWNpcGFudHMpIHtcbiAgICAgICAgICAgIHBhcnRpY2lwYW50cy5zZXQocC5pZCwgbmV3IFBhcnRpY2lwYW50KHAuaWQsIHAucm9sZSwgcC51c2VyKSk7XG4gICAgICAgICAgICBpZiAocC5pZCA9PT0gcmVzcC5pZCkge1xuICAgICAgICAgICAgICBtZSA9IHBhcnRpY2lwYW50cy5nZXQocC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBlZXJDb25uZWN0aW9uQ2hhbm5lbCA9IGNyZWF0ZVBlZXJDb25uZWN0aW9uQ2hhbm5lbCgpO1xuICAgICAgICBwZWVyQ29ubmVjdGlvbkNoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgcGVlckNvbm5lY3Rpb25DaGFubmVsID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgV2ViVHJhbnNwb3J0ID09PSAnZnVuY3Rpb24nICYmIHRva2VuLndlYlRyYW5zcG9ydFVybCkge1xuICAgICAgICAgIHF1aWNUcmFuc3BvcnRDaGFubmVsID0gbmV3IFF1aWNDb25uZWN0aW9uKFxuICAgICAgICAgICAgICB0b2tlbi53ZWJUcmFuc3BvcnRVcmwsIHJlc3Aud2ViVHJhbnNwb3J0VG9rZW4sXG4gICAgICAgICAgICAgIGNyZWF0ZVNpZ25hbGluZ0ZvckNoYW5uZWwoKSwgY29uZmlnLndlYlRyYW5zcG9ydENvbmZpZ3VyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbmZlcmVuY2VJbmZvID0gbmV3IENvbmZlcmVuY2VJbmZvKFxuICAgICAgICAgICAgcmVzcC5yb29tLmlkLCBBcnJheS5mcm9tKHBhcnRpY2lwYW50cy52YWx1ZXMoKSksXG4gICAgICAgICAgICBBcnJheS5mcm9tKHJlbW90ZVN0cmVhbXMudmFsdWVzKCkpLCBtZSk7XG4gICAgICAgIGlmIChxdWljVHJhbnNwb3J0Q2hhbm5lbCkge1xuICAgICAgICAgIHF1aWNUcmFuc3BvcnRDaGFubmVsLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoY29uZmVyZW5jZUluZm8pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoY29uZmVyZW5jZUluZm8pO1xuICAgICAgICB9XG4gICAgICB9LCAoZSkgPT4ge1xuICAgICAgICBzaWduYWxpbmdTdGF0ZSA9IFNpZ25hbGluZ1N0YXRlLlJFQURZO1xuICAgICAgICByZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHB1Ymxpc2hcbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFB1Ymxpc2ggYSBMb2NhbFN0cmVhbSB0byBjb25mZXJlbmNlIHNlcnZlci4gT3RoZXIgcGFydGljaXBhbnRzIHdpbGwgYmUgYWJsZSB0byBzdWJzY3JpYmUgdGhpcyBzdHJlYW0gd2hlbiBpdCBpcyBzdWNjZXNzZnVsbHkgcHVibGlzaGVkLlxuICAgKiBAcGFyYW0ge093dC5CYXNlLkxvY2FsU3RyZWFtfSBzdHJlYW0gVGhlIHN0cmVhbSB0byBiZSBwdWJsaXNoZWQuXG4gICAqIEBwYXJhbSB7KE93dC5CYXNlLlB1Ymxpc2hPcHRpb25zfFJUQ1J0cFRyYW5zY2VpdmVyW10pfSBvcHRpb25zIElmIG9wdGlvbnMgaXMgYSBQdWJsaXNoT3B0aW9ucywgdGhlIHN0cmVhbSB3aWxsIGJlIHB1Ymxpc2hlZCBhcyBvcHRpb25zIHNwZWNpZmllZC4gSWYgb3B0aW9ucyBpcyBhIGxpc3Qgb2YgUlRDUnRwVHJhbnNjZWl2ZXJzLCBlYWNoIHRyYWNrIGluIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGhhdmUgYSBjb3JyZXNwb25kaW5nIFJUQ1J0cFRyYW5zY2VpdmVyIGhlcmUsIGFuZCB0aGUgdHJhY2sgd2lsbCBiZSBwdWJsaXNoZWQgd2l0aCB0aGUgUlRDUnRwVHJhbnNjZWl2ZXIgYXNzb2NpYXRlZCB3aXRoIGl0LlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB2aWRlb0NvZGVjcyBWaWRlbyBjb2RlYyBuYW1lcyBmb3IgcHVibGlzaGluZy4gVmFsaWQgdmFsdWVzIGFyZSAnVlA4JywgJ1ZQOScgYW5kICdIMjY0Jy4gVGhpcyBwYXJhbWV0ZXIgb25seSB2YWxpZCB3aGVuIHRoZSBzZWNvbmQgYXJndW1lbnQgaXMgUHVibGlzaE9wdGlvbnMgYW5kIG9wdGlvbnMudmlkZW8gaXMgUlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzLiBQdWJsaXNoaW5nIHdpdGggUlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzIGlzIGFuIGV4cGVyaW1lbnRhbCBmZWF0dXJlLiBUaGlzIHBhcmFtZXRlciBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxQdWJsaWNhdGlvbiwgRXJyb3I+fSBSZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBhIG5ld2x5IGNyZWF0ZWQgUHVibGljYXRpb24gb25jZSBzcGVjaWZpYyBzdHJlYW0gaXMgc3VjY2Vzc2Z1bGx5IHB1Ymxpc2hlZCwgb3IgcmVqZWN0ZWQgd2l0aCBhIG5ld2x5IGNyZWF0ZWQgRXJyb3IgaWYgc3RyZWFtIGlzIGludmFsaWQgb3Igb3B0aW9ucyBjYW5ub3QgYmUgc2F0aXNmaWVkLiBTdWNjZXNzZnVsbHkgcHVibGlzaGVkIG1lYW5zIFBlZXJDb25uZWN0aW9uIGlzIGVzdGFibGlzaGVkIGFuZCBzZXJ2ZXIgaXMgYWJsZSB0byBwcm9jZXNzIG1lZGlhIGRhdGEuXG4gICAqL1xuICB0aGlzLnB1Ymxpc2ggPSBmdW5jdGlvbihzdHJlYW0sIG9wdGlvbnMsIHZpZGVvQ29kZWNzKSB7XG4gICAgaWYgKCEoc3RyZWFtIGluc3RhbmNlb2YgU3RyZWFtTW9kdWxlLkxvY2FsU3RyZWFtKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoJ0ludmFsaWQgc3RyZWFtLicpKTtcbiAgICB9XG4gICAgaWYgKHN0cmVhbS5zb3VyY2UuZGF0YSkge1xuICAgICAgcmV0dXJuIHF1aWNUcmFuc3BvcnRDaGFubmVsLnB1Ymxpc2goc3RyZWFtKTtcbiAgICB9XG4gICAgaWYgKHB1Ymxpc2hDaGFubmVscy5oYXMoc3RyZWFtLm1lZGlhU3RyZWFtLmlkKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgJ0Nhbm5vdCBwdWJsaXNoIGEgcHVibGlzaGVkIHN0cmVhbS4nKSk7XG4gICAgfVxuICAgIHJldHVybiBwZWVyQ29ubmVjdGlvbkNoYW5uZWwucHVibGlzaChzdHJlYW0sIG9wdGlvbnMsIHZpZGVvQ29kZWNzKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHN1YnNjcmliZVxuICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgU3Vic2NyaWJlIGEgUmVtb3RlU3RyZWFtIGZyb20gY29uZmVyZW5jZSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7T3d0LkJhc2UuUmVtb3RlU3RyZWFtfSBzdHJlYW0gVGhlIHN0cmVhbSB0byBiZSBzdWJzY3JpYmVkLlxuICAgKiBAcGFyYW0ge093dC5Db25mZXJlbmNlLlN1YnNjcmliZU9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3Igc3Vic2NyaXB0aW9uLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN1YnNjcmlwdGlvbiwgRXJyb3I+fSBSZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBhIG5ld2x5IGNyZWF0ZWQgU3Vic2NyaXB0aW9uIG9uY2Ugc3BlY2lmaWMgc3RyZWFtIGlzIHN1Y2Nlc3NmdWxseSBzdWJzY3JpYmVkLCBvciByZWplY3RlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBFcnJvciBpZiBzdHJlYW0gaXMgaW52YWxpZCBvciBvcHRpb25zIGNhbm5vdCBiZSBzYXRpc2ZpZWQuIFN1Y2Nlc3NmdWxseSBzdWJzY3JpYmVkIG1lYW5zIFBlZXJDb25uZWN0aW9uIGlzIGVzdGFibGlzaGVkIGFuZCBzZXJ2ZXIgd2FzIHN0YXJ0ZWQgdG8gc2VuZCBtZWRpYSBkYXRhLlxuICAgKi9cbiAgdGhpcy5zdWJzY3JpYmUgPSBmdW5jdGlvbihzdHJlYW0sIG9wdGlvbnMpIHtcbiAgICBpZiAoIShzdHJlYW0gaW5zdGFuY2VvZiBTdHJlYW1Nb2R1bGUuUmVtb3RlU3RyZWFtKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoJ0ludmFsaWQgc3RyZWFtLicpKTtcbiAgICB9XG4gICAgaWYgKHN0cmVhbS5zb3VyY2UuZGF0YSkge1xuICAgICAgaWYgKHN0cmVhbS5zb3VyY2UuYXVkaW8gfHwgc3RyZWFtLnNvdXJjZS52aWRlbykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkIHNvdXJjZSBpbmZvLiBBIHJlbW90ZSBzdHJlYW0gaXMgZWl0aGVyIGEgZGF0YSBzdHJlYW0gb3IgJyArXG4gICAgICAgICAgICAnYSBtZWRpYSBzdHJlYW0uJykpO1xuICAgICAgfVxuICAgICAgaWYgKHF1aWNUcmFuc3BvcnRDaGFubmVsKSB7XG4gICAgICAgIHJldHVybiBxdWljVHJhbnNwb3J0Q2hhbm5lbC5zdWJzY3JpYmUoc3RyZWFtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdXZWJUcmFuc3BvcnQgaXMgbm90IHN1cHBvcnRlZC4nKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwZWVyQ29ubmVjdGlvbkNoYW5uZWwuc3Vic2NyaWJlKHN0cmVhbSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzZW5kXG4gICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBTZW5kIGEgdGV4dCBtZXNzYWdlIHRvIGEgcGFydGljaXBhbnQgb3IgYWxsIHBhcnRpY2lwYW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgTWVzc2FnZSB0byBiZSBzZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFydGljaXBhbnRJZCBSZWNlaXZlciBvZiB0aGlzIG1lc3NhZ2UuIE1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIGFsbCBwYXJ0aWNpcGFudHMgaWYgcGFydGljaXBhbnRJZCBpcyB1bmRlZmluZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZCwgRXJyb3I+fSBSZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2hlbiBjb25mZXJlbmNlIHNlcnZlciByZWNlaXZlZCBjZXJ0YWluIG1lc3NhZ2UuXG4gICAqL1xuICB0aGlzLnNlbmQgPSBmdW5jdGlvbihtZXNzYWdlLCBwYXJ0aWNpcGFudElkKSB7XG4gICAgaWYgKHBhcnRpY2lwYW50SWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFydGljaXBhbnRJZCA9ICdhbGwnO1xuICAgIH1cbiAgICByZXR1cm4gc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3RleHQnLCB7dG86IHBhcnRpY2lwYW50SWQsIG1lc3NhZ2U6IG1lc3NhZ2V9KTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGxlYXZlXG4gICAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBMZWF2ZSBhIGNvbmZlcmVuY2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZCwgRXJyb3I+fSBSZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCB1bmRlZmluZWQgb25jZSB0aGUgY29ubmVjdGlvbiBpcyBkaXNjb25uZWN0ZWQuXG4gICAqL1xuICB0aGlzLmxlYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNpZ25hbGluZy5kaXNjb25uZWN0KCkudGhlbigoKSA9PiB7XG4gICAgICBjbGVhbigpO1xuICAgICAgc2lnbmFsaW5nU3RhdGUgPSBTaWduYWxpbmdTdGF0ZS5SRUFEWTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGNyZWF0ZVNlbmRTdHJlYW1cbiAgICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIENyZWF0ZSBhbiBvdXRnb2luZyBzdHJlYW0uIE9ubHkgYXZhaWxhYmxlIHdoZW4gV2ViVHJhbnNwb3J0IGlzIHN1cHBvcnRlZCBieSB1c2VyJ3MgYnJvd3Nlci5cbiAgICogQHJldHVybiB7UHJvbWlzZTxTZW5kU3RyZWFtLCBFcnJvcj59IFJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCB3aXRoIGEgU2VuZFN0cmVhbSBvbmNlIHN0cmVhbSBpcyBjcmVhdGVkLlxuICAgKi9cbiAgaWYgKFF1aWNDb25uZWN0aW9uKSB7XG4gICAgdGhpcy5jcmVhdGVTZW5kU3RyZWFtID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXF1aWNUcmFuc3BvcnRDaGFubmVsKSB7XG4gICAgICAgIC8vIFRyeSB0byBjcmVhdGUgYSBuZXcgb25lIG9yIGNvbnNpZGVyIGl0IGFzIGNsb3NlZD9cbiAgICAgICAgdGhyb3cgbmV3IENvbmZlcmVuY2VFcnJvcignTm8gUVVJQyBjb25uZWN0aW9uIGF2YWlsYWJsZS4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWljVHJhbnNwb3J0Q2hhbm5lbC5jcmVhdGVTZW5kU3RyZWFtKCk7XG4gICAgfTtcbiAgfVxufTtcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBDb25mZXJlbmNlRXJyb3JcbiAqIEBjbGFzc0Rlc2MgVGhlIENvbmZlcmVuY2VFcnJvciBvYmplY3QgcmVwcmVzZW50cyBhbiBlcnJvciBpbiBjb25mZXJlbmNlIG1vZGUuXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZlcmVuY2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHtDb25mZXJlbmNlQ2xpZW50fSBmcm9tICcuL2NsaWVudC5qcyc7XG5leHBvcnQge1Npb1NpZ25hbGluZ30gZnJvbSAnLi9zaWduYWxpbmcuanMnO1xuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGNsYXNzIENvbmZlcmVuY2VJbmZvXG4gKiBAY2xhc3NEZXNjIEluZm9ybWF0aW9uIGZvciBhIGNvbmZlcmVuY2UuXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZlcmVuY2VJbmZvIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoaWQsIHBhcnRpY2lwYW50cywgcmVtb3RlU3RyZWFtcywgbXlJbmZvKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlSW5mb1xuICAgICAqIEBkZXNjIENvbmZlcmVuY2UgSUQuXG4gICAgICovXG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FycmF5PE93dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50Pn0gcGFydGljaXBhbnRzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VJbmZvXG4gICAgICogQGRlc2MgUGFydGljaXBhbnRzIGluIHRoZSBjb25mZXJlbmNlLlxuICAgICAqL1xuICAgIHRoaXMucGFydGljaXBhbnRzID0gcGFydGljaXBhbnRzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FycmF5PE93dC5CYXNlLlJlbW90ZVN0cmVhbT59IHJlbW90ZVN0cmVhbXNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUluZm9cbiAgICAgKiBAZGVzYyBTdHJlYW1zIHB1Ymxpc2hlZCBieSBwYXJ0aWNpcGFudHMuIEl0IGFsc28gaW5jbHVkZXMgc3RyZWFtcyBwdWJsaXNoZWQgYnkgY3VycmVudCB1c2VyLlxuICAgICAqL1xuICAgIHRoaXMucmVtb3RlU3RyZWFtcyA9IHJlbW90ZVN0cmVhbXM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuUGFydGljaXBhbnR9IHNlbGZcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUluZm9cbiAgICAgKi9cbiAgICB0aGlzLnNlbGYgPSBteUluZm87XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBTdHJlYW1Nb2R1bGUgZnJvbSAnLi4vYmFzZS9zdHJlYW0uanMnO1xuaW1wb3J0ICogYXMgU3RyZWFtVXRpbHNNb2R1bGUgZnJvbSAnLi9zdHJlYW11dGlscy5qcyc7XG5pbXBvcnQge093dEV2ZW50fSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVtb3RlTWl4ZWRTdHJlYW1cbiAqIEBjbGFzc0Rlc2MgTWl4ZWQgc3RyZWFtIGZyb20gY29uZmVyZW5jZSBzZXJ2ZXIuXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgICAgICAgIHwgQXJndW1lbnQgVHlwZSAgICB8IEZpcmVkIHdoZW4gICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBhY3RpdmVhdWRpb2lucHV0Y2hhbmdlIHwgRXZlbnQgICAgICAgICAgICB8IEF1ZGlvIGFjdGl2ZW5lc3Mgb2YgaW5wdXQgc3RyZWFtIChvZiB0aGUgbWl4ZWQgc3RyZWFtKSBpcyBjaGFuZ2VkLiB8XG4gKiB8IGxheW91dGNoYW5nZSAgICAgICAgICAgfCBFdmVudCAgICAgICAgICAgIHwgVmlkZW8ncyBsYXlvdXQgaGFzIGJlZW4gY2hhbmdlZC4gSXQgdXN1YWxseSBoYXBwZW5zIHdoZW4gYSBuZXcgdmlkZW8gaXMgbWl4ZWQgaW50byB0aGUgdGFyZ2V0IG1peGVkIHN0cmVhbSBvciBhbiBleGlzdGluZyB2aWRlbyBoYXMgYmVlbiByZW1vdmVkIGZyb20gbWl4ZWQgc3RyZWFtLiB8XG4gKlxuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5SZW1vdGVTdHJlYW1cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFJlbW90ZU1peGVkU3RyZWFtIGV4dGVuZHMgU3RyZWFtTW9kdWxlLlJlbW90ZVN0cmVhbSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGluZm8pIHtcbiAgICBpZiAoaW5mby50eXBlICE9PSAnbWl4ZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOb3QgYSBtaXhlZCBzdHJlYW0nKTtcbiAgICB9XG4gICAgc3VwZXIoaW5mby5pZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG5ldyBTdHJlYW1Nb2R1bGUuU3RyZWFtU291cmNlSW5mbyhcbiAgICAgICAgJ21peGVkJywgJ21peGVkJykpO1xuXG4gICAgdGhpcy5zZXR0aW5ncyA9IFN0cmVhbVV0aWxzTW9kdWxlLmNvbnZlcnRUb1B1YmxpY2F0aW9uU2V0dGluZ3MoaW5mby5tZWRpYSk7XG5cbiAgICB0aGlzLmV4dHJhQ2FwYWJpbGl0aWVzID1cbiAgICAgICAgU3RyZWFtVXRpbHNNb2R1bGUuY29udmVydFRvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzKGluZm8ubWVkaWEpO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIEFjdGl2ZUF1ZGlvSW5wdXRDaGFuZ2VFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBBY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnQgcmVwcmVzZW50cyBhbiBhY3RpdmUgYXVkaW8gaW5wdXQgY2hhbmdlIGV2ZW50LlxuICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnQgZXh0ZW5kcyBPd3RFdmVudCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGluaXQpIHtcbiAgICBzdXBlcih0eXBlKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGFjdGl2ZUF1ZGlvSW5wdXRTdHJlYW1JZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5BY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnRcbiAgICAgKiBAZGVzYyBUaGUgSUQgb2YgaW5wdXQgc3RyZWFtKG9mIHRoZSBtaXhlZCBzdHJlYW0pIHdob3NlIGF1ZGlvIGlzIGFjdGl2ZS5cbiAgICAgKi9cbiAgICB0aGlzLmFjdGl2ZUF1ZGlvSW5wdXRTdHJlYW1JZCA9IGluaXQuYWN0aXZlQXVkaW9JbnB1dFN0cmVhbUlkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIExheW91dENoYW5nZUV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIExheW91dENoYW5nZUV2ZW50IHJlcHJlc2VudHMgYW4gdmlkZW8gbGF5b3V0IGNoYW5nZSBldmVudC5cbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgTGF5b3V0Q2hhbmdlRXZlbnQgZXh0ZW5kcyBPd3RFdmVudCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGluaXQpIHtcbiAgICBzdXBlcih0eXBlKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtvYmplY3R9IGxheW91dFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5MYXlvdXRDaGFuZ2VFdmVudFxuICAgICAqIEBkZXNjIEN1cnJlbnQgdmlkZW8ncyBsYXlvdXQuIEl0J3MgYW4gYXJyYXkgb2YgbWFwIHdoaWNoIG1hcHMgZWFjaCBzdHJlYW0gdG8gYSByZWdpb24uXG4gICAgICovXG4gICAgdGhpcy5sYXlvdXQgPSBpbml0LmxheW91dDtcbiAgfVxufVxuXG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCAqIGFzIEV2ZW50TW9kdWxlIGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGNsYXNzIFBhcnRpY2lwYW50XG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgVGhlIFBhcnRpY2lwYW50IGRlZmluZXMgYSBwYXJ0aWNpcGFudCBpbiBhIGNvbmZlcmVuY2UuXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgfCBBcmd1bWVudCBUeXBlICAgICAgfCBGaXJlZCB3aGVuICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGxlZnQgICAgICAgICAgICB8IE93dC5CYXNlLk93dEV2ZW50ICB8IFRoZSBwYXJ0aWNpcGFudCBsZWZ0IHRoZSBjb25mZXJlbmNlLiB8XG4gKlxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJ0aWNpcGFudCBleHRlbmRzIEV2ZW50TW9kdWxlLkV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGlkLCByb2xlLCB1c2VySWQpIHtcbiAgICBzdXBlcigpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuUGFydGljaXBhbnRcbiAgICAgKiBAZGVzYyBUaGUgSUQgb2YgdGhlIHBhcnRpY2lwYW50LiBJdCB2YXJpZXMgd2hlbiBhIHNpbmdsZSB1c2VyIGpvaW4gZGlmZmVyZW50IGNvbmZlcmVuY2VzLlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGlkLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gcm9sZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5QYXJ0aWNpcGFudFxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncm9sZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogcm9sZSxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHVzZXJJZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5QYXJ0aWNpcGFudFxuICAgICAqIEBkZXNjIFRoZSB1c2VyIElEIG9mIHRoZSBwYXJ0aWNpcGFudC4gSXQgY2FuIGJlIGludGVncmF0ZWQgaW50byBleGlzdGluZyBhY2NvdW50IG1hbmFnZW1lbnQgc3lzdGVtLlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndXNlcklkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB1c2VySWQsXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYyAqL1xuLyogZ2xvYmFsIFByb21pc2UsIE1hcCwgV2ViVHJhbnNwb3J0LCBVaW50OEFycmF5LCBVaW50MzJBcnJheSwgVGV4dEVuY29kZXIgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyfSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7UHVibGljYXRpb259IGZyb20gJy4uL2Jhc2UvcHVibGljYXRpb24uanMnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4vc3Vic2NyaXB0aW9uLmpzJztcbmltcG9ydCB7QmFzZTY0fSBmcm9tICcuLi9iYXNlL2Jhc2U2NC5qcyc7XG5cbi8qKlxuICogQGNsYXNzIFF1aWNDb25uZWN0aW9uXG4gKiBAY2xhc3NEZXNjIEEgY2hhbm5lbCBmb3IgYSBRVUlDIHRyYW5zcG9ydCBiZXR3ZWVuIGNsaWVudCBhbmQgY29uZmVyZW5jZVxuICogc2VydmVyLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIFF1aWNDb25uZWN0aW9uIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgLy8gYHRva2VuU3RyaW5nYCBpcyBhIGJhc2U2NCBzdHJpbmcgb2YgdGhlIHRva2VuIG9iamVjdC4gSXQncyBpbiB0aGUgcmV0dXJuXG4gIC8vIHZhbHVlIG9mIGBDb25mZXJlbmNlQ2xpZW50LmpvaW5gLlxuICBjb25zdHJ1Y3Rvcih1cmwsIHRva2VuU3RyaW5nLCBzaWduYWxpbmcsIHdlYlRyYW5zcG9ydE9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3Rva2VuU3RyaW5nID0gdG9rZW5TdHJpbmc7XG4gICAgdGhpcy5fdG9rZW4gPSBKU09OLnBhcnNlKEJhc2U2NC5kZWNvZGVCYXNlNjQodG9rZW5TdHJpbmcpKTtcbiAgICB0aGlzLl9zaWduYWxpbmcgPSBzaWduYWxpbmc7XG4gICAgdGhpcy5fZW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9xdWljU3RyZWFtcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHB1YmxpY2F0aW9uIG9yIHN1YnNjcmlwdGlvbiBJRC5cbiAgICB0aGlzLl9xdWljVHJhbnNwb3J0ID0gbmV3IFdlYlRyYW5zcG9ydCh1cmwsIHdlYlRyYW5zcG9ydE9wdGlvbnMpO1xuICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgc3Vic2NyaXB0aW9uIElELlxuICAgIHRoaXMuX3RyYW5zcG9ydElkID0gdGhpcy5fdG9rZW4udHJhbnNwb3J0SWQ7XG4gICAgdGhpcy5faW5pdFJlY2VpdmVTdHJlYW1SZWFkZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gb25NZXNzYWdlXG4gICAqIEBkZXNjIFJlY2VpdmVkIGEgbWVzc2FnZSBmcm9tIGNvbmZlcmVuY2UgcG9ydGFsLiBEZWZpbmVkIGluIGNsaWVudC1zZXJ2ZXJcbiAgICogcHJvdG9jb2wuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBub3RpZmljYXRpb24gTm90aWZpY2F0aW9uIHR5cGUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlIE1lc3NhZ2UgcmVjZWl2ZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBvbk1lc3NhZ2Uobm90aWZpY2F0aW9uLCBtZXNzYWdlKSB7XG4gICAgc3dpdGNoIChub3RpZmljYXRpb24pIHtcbiAgICAgIGNhc2UgJ3Byb2dyZXNzJzpcbiAgICAgICAgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSAnc29hYycpIHtcbiAgICAgICAgICB0aGlzLl9zb2FjSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSAncmVhZHknKSB7XG4gICAgICAgICAgdGhpcy5fcmVhZHlIYW5kbGVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICB0aGlzLl9lcnJvckhhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmVhbSc6XG4gICAgICAgIHRoaXMuX29uU3RyZWFtRXZlbnQobWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ1Vua25vd24gbm90aWZpY2F0aW9uIGZyb20gTUNVLicpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5fYXV0aGVudGljYXRlKHRoaXMuX3Rva2VuU3RyaW5nKTtcbiAgfVxuXG4gIGFzeW5jIF9pbml0UmVjZWl2ZVN0cmVhbVJlYWRlcigpIHtcbiAgICBjb25zdCByZWNlaXZlU3RyZWFtUmVhZGVyID1cbiAgICAgICAgdGhpcy5fcXVpY1RyYW5zcG9ydC5pbmNvbWluZ0JpZGlyZWN0aW9uYWxTdHJlYW1zLmdldFJlYWRlcigpO1xuICAgIExvZ2dlci5pbmZvKCdSZWFkZXI6ICcgKyByZWNlaXZlU3RyZWFtUmVhZGVyKTtcbiAgICBsZXQgcmVjZWl2aW5nRG9uZSA9IGZhbHNlO1xuICAgIHdoaWxlICghcmVjZWl2aW5nRG9uZSkge1xuICAgICAgY29uc3Qge3ZhbHVlOiByZWNlaXZlU3RyZWFtLCBkb25lOiByZWFkaW5nUmVjZWl2ZVN0cmVhbXNEb25lfSA9XG4gICAgICAgICAgYXdhaXQgcmVjZWl2ZVN0cmVhbVJlYWRlci5yZWFkKCk7XG4gICAgICBMb2dnZXIuaW5mbygnTmV3IHN0cmVhbSByZWNlaXZlZCcpO1xuICAgICAgaWYgKHJlYWRpbmdSZWNlaXZlU3RyZWFtc0RvbmUpIHtcbiAgICAgICAgcmVjZWl2aW5nRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgY2h1bmtSZWFkZXIgPSByZWNlaXZlU3RyZWFtLnJlYWRhYmxlLmdldFJlYWRlcigpO1xuICAgICAgY29uc3Qge3ZhbHVlOiB1dWlkLCBkb25lOiByZWFkaW5nQ2h1bmtzRG9uZX0gPSBhd2FpdCBjaHVua1JlYWRlci5yZWFkKCk7XG4gICAgICBpZiAocmVhZGluZ0NodW5rc0RvbmUpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKCdTdHJlYW0gY2xvc2VkIHVuZXhwZWN0ZWRseS4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHV1aWQubGVuZ3RoICE9IDE2KSB7XG4gICAgICAgIExvZ2dlci5lcnJvcignVW5leHBlY3RlZCBsZW5ndGggZm9yIFVVSUQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNodW5rUmVhZGVyLnJlbGVhc2VMb2NrKCk7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb25JZCA9IHRoaXMuX3VpbnQ4QXJyYXlUb1V1aWQodXVpZCk7XG4gICAgICB0aGlzLl9xdWljU3RyZWFtcy5zZXQoc3Vic2NyaXB0aW9uSWQsIHJlY2VpdmVTdHJlYW0pO1xuICAgICAgaWYgKHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmhhcyhzdWJzY3JpcHRpb25JZCkpIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID1cbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb25JZCwgcmVjZWl2ZVN0cmVhbSk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmdldChzdWJzY3JpcHRpb25JZCkucmVzb2x2ZShzdWJzY3JpcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVTdWJzY3JpcHRpb24oaWQsIHJlY2VpdmVTdHJlYW0pIHtcbiAgICAvLyBUT0RPOiBJbmNvbXBsZXRlIHN1YnNjcmlwdGlvbi5cbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKGlkLCAoKSA9PiB7XG4gICAgICByZWNlaXZlU3RyZWFtLmFib3J0UmVhZGluZygpO1xuICAgIH0pO1xuICAgIHN1YnNjcmlwdGlvbi5zdHJlYW0gPSByZWNlaXZlU3RyZWFtO1xuICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gIH1cblxuICBhc3luYyBfYXV0aGVudGljYXRlKHRva2VuKSB7XG4gICAgYXdhaXQgdGhpcy5fcXVpY1RyYW5zcG9ydC5yZWFkeTtcbiAgICBjb25zdCBxdWljU3RyZWFtID0gYXdhaXQgdGhpcy5fcXVpY1RyYW5zcG9ydC5jcmVhdGVCaWRpcmVjdGlvbmFsU3RyZWFtKCk7XG4gICAgY29uc3QgY2h1bmtSZWFkZXIgPSBxdWljU3RyZWFtLnJlYWRhYmxlLmdldFJlYWRlcigpO1xuICAgIGNvbnN0IHdyaXRlciA9IHF1aWNTdHJlYW0ud3JpdGFibGUuZ2V0V3JpdGVyKCk7XG4gICAgYXdhaXQgd3JpdGVyLnJlYWR5O1xuICAgIC8vIDEyOCBiaXQgb2YgemVybyBpbmRpY2F0ZXMgdGhpcyBpcyBhIHN0cmVhbSBmb3Igc2lnbmFsaW5nLlxuICAgIHdyaXRlci53cml0ZShuZXcgVWludDhBcnJheSgxNikpO1xuICAgIC8vIFNlbmQgdG9rZW4gYXMgZGVzY3JpYmVkIGluXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2VicnRjLXRvb2xraXQvb3d0LXNlcnZlci9ibG9iLzIwZThhYWQyMTZjYzQ0NjA5NWY2M2M0MDkzMzljMzRjN2VlNzcwZWUvZG9jL2Rlc2lnbi9xdWljLXRyYW5zcG9ydC1wYXlsb2FkLWZvcm1hdC5tZC5cbiAgICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgY29uc3QgZW5jb2RlZFRva2VuID0gZW5jb2Rlci5lbmNvZGUodG9rZW4pO1xuICAgIHdyaXRlci53cml0ZShVaW50MzJBcnJheS5vZihlbmNvZGVkVG9rZW4ubGVuZ3RoKSk7XG4gICAgd3JpdGVyLndyaXRlKGVuY29kZWRUb2tlbik7XG4gICAgLy8gU2VydmVyIHJldHVybnMgdHJhbnNwb3J0IElEIGFzIGFuIGFjay4gSWdub3JlIGl0IGhlcmUuXG4gICAgYXdhaXQgY2h1bmtSZWFkZXIucmVhZCgpO1xuICAgIExvZ2dlci5pbmZvKCdBdXRoZW50aWNhdGlvbiBzdWNjZXNzLicpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlU2VuZFN0cmVhbSgpIHtcbiAgICBhd2FpdCB0aGlzLl9xdWljVHJhbnNwb3J0LnJlYWR5O1xuICAgIGNvbnN0IHF1aWNTdHJlYW0gPSBhd2FpdCB0aGlzLl9xdWljVHJhbnNwb3J0LmNyZWF0ZUJpZGlyZWN0aW9uYWxTdHJlYW0oKTtcbiAgICByZXR1cm4gcXVpY1N0cmVhbTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVNlbmRTdHJlYW0xKHNlc3Npb25JZCkge1xuICAgIExvZ2dlci5pbmZvKCdDcmVhdGUgc3RyZWFtLicpO1xuICAgIGF3YWl0IHRoaXMuX3F1aWNUcmFuc3BvcnQucmVhZHk7XG4gICAgLy8gVE9ETzogUG90ZW50aWFsIGZhaWx1cmUgYmVjYXVzZSBvZiBwdWJsaWNhdGlvbiBzdHJlYW0gaXMgY3JlYXRlZCBmYXN0ZXJcbiAgICAvLyB0aGFuIHNpZ25hbGluZyBzdHJlYW0oY3JlYXRlZCBieSB0aGUgMXN0IGNhbGwgdG8gaW5pdGlhdGVQdWJsaWNhdGlvbikuXG4gICAgY29uc3QgcHVibGljYXRpb25JZCA9IGF3YWl0IHRoaXMuX2luaXRpYXRlUHVibGljYXRpb24oKTtcbiAgICBjb25zdCBxdWljU3RyZWFtID0gYXdhaXQgdGhpcy5fcXVpY1RyYW5zcG9ydC5jcmVhdGVTZW5kU3RyZWFtKCk7XG4gICAgY29uc3Qgd3JpdGVyID0gcXVpY1N0cmVhbS53cml0YWJsZS5nZXRXcml0ZXIoKTtcbiAgICBhd2FpdCB3cml0ZXIucmVhZHk7XG4gICAgd3JpdGVyLndyaXRlKHRoaXMuX3V1aWRUb1VpbnQ4QXJyYXkocHVibGljYXRpb25JZCkpO1xuICAgIHdyaXRlci5yZWxlYXNlTG9jaygpO1xuICAgIHRoaXMuX3F1aWNTdHJlYW1zLnNldChwdWJsaWNhdGlvbklkLCBxdWljU3RyZWFtKTtcbiAgICByZXR1cm4gcXVpY1N0cmVhbTtcbiAgfVxuXG4gIGFzeW5jIHB1Ymxpc2goc3RyZWFtKSB7XG4gICAgLy8gVE9ETzogQXZvaWQgYSBzdHJlYW0gdG8gYmUgcHVibGlzaGVkIHR3aWNlLiBUaGUgZmlyc3QgMTYgYml0IGRhdGEgc2VuZCB0b1xuICAgIC8vIHNlcnZlciBtdXN0IGJlIGl0J3MgcHVibGljYXRpb24gSUQuXG4gICAgLy8gVE9ETzogUG90ZW50aWFsIGZhaWx1cmUgYmVjYXVzZSBvZiBwdWJsaWNhdGlvbiBzdHJlYW0gaXMgY3JlYXRlZCBmYXN0ZXJcbiAgICAvLyB0aGFuIHNpZ25hbGluZyBzdHJlYW0oY3JlYXRlZCBieSB0aGUgMXN0IGNhbGwgdG8gaW5pdGlhdGVQdWJsaWNhdGlvbikuXG4gICAgY29uc3QgcHVibGljYXRpb25JZCA9IGF3YWl0IHRoaXMuX2luaXRpYXRlUHVibGljYXRpb24oKTtcbiAgICBjb25zdCBxdWljU3RyZWFtID0gc3RyZWFtLnN0cmVhbTtcbiAgICBjb25zdCB3cml0ZXIgPSBxdWljU3RyZWFtLndyaXRhYmxlLmdldFdyaXRlcigpO1xuICAgIGF3YWl0IHdyaXRlci5yZWFkeTtcbiAgICB3cml0ZXIud3JpdGUodGhpcy5fdXVpZFRvVWludDhBcnJheShwdWJsaWNhdGlvbklkKSk7XG4gICAgd3JpdGVyLnJlbGVhc2VMb2NrKCk7XG4gICAgTG9nZ2VyLmluZm8oJ3B1Ymxpc2ggaWQnKTtcbiAgICB0aGlzLl9xdWljU3RyZWFtcy5zZXQocHVibGljYXRpb25JZCwgcXVpY1N0cmVhbSk7XG4gICAgY29uc3QgcHVibGljYXRpb24gPSBuZXcgUHVibGljYXRpb24ocHVibGljYXRpb25JZCwgKCkgPT4ge1xuICAgICAgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCd1bnB1Ymxpc2gnLCB7aWQ6IHB1YmxpY2F0aW9ufSlcbiAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdNQ1UgcmV0dXJucyBuZWdhdGl2ZSBhY2sgZm9yIHVucHVibGlzaGluZywgJyArIGUpO1xuICAgICAgICAgIH0pO1xuICAgIH0gLyogVE9ETzogZ2V0U3RhdHMsIG11dGUsIHVubXV0ZSBpcyBub3QgaW1wbGVtZW50ZWQgKi8pO1xuICAgIHJldHVybiBwdWJsaWNhdGlvbjtcbiAgfVxuXG4gIGhhc0NvbnRlbnRTZXNzaW9uSWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVpY1N0cmVhbXMuaGFzKGlkKTtcbiAgfVxuXG4gIF91dWlkVG9VaW50OEFycmF5KHV1aWRTdHJpbmcpIHtcbiAgICBpZiAodXVpZFN0cmluZy5sZW5ndGggIT0gMzIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29ycmVjdCBVVUlELicpO1xuICAgIH1cbiAgICBjb25zdCB1dWlkQXJyYXkgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICB1dWlkQXJyYXlbaV0gPSBwYXJzZUludCh1dWlkU3RyaW5nLnN1YnN0cmluZyhpICogMiwgaSAqIDIgKyAyKSwgMTYpO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZEFycmF5O1xuICB9XG5cbiAgX3VpbnQ4QXJyYXlUb1V1aWQodXVpZEJ5dGVzKSB7XG4gICAgbGV0IHMgPSAnJztcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB1dWlkQnl0ZXMpIHtcbiAgICAgIGNvbnN0IHN0ciA9IGhleC50b1N0cmluZygxNik7XG4gICAgICBzICs9IHN0ci5wYWRTdGFydCgyLCAnMCcpO1xuICAgIH1cbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIHN1YnNjcmliZShzdHJlYW0pIHtcbiAgICBjb25zdCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fc2lnbmFsaW5nXG4gICAgICAgICAgLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICBtZWRpYTogbnVsbCxcbiAgICAgICAgICAgIGRhdGE6IHtmcm9tOiBzdHJlYW0uaWR9LFxuICAgICAgICAgICAgdHJhbnNwb3J0OiB7dHlwZTogJ3F1aWMnLCBpZDogdGhpcy5fdHJhbnNwb3J0SWR9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9xdWljU3RyZWFtcy5oYXMoZGF0YS5pZCkpIHtcbiAgICAgICAgICAgICAgLy8gUVVJQyBzdHJlYW0gY3JlYXRlZCBiZWZvcmUgc2lnbmFsaW5nIHJldHVybnMuXG4gICAgICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuX2NyZWF0ZVN1YnNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgIGRhdGEuaWQsIHRoaXMuX3F1aWNTdHJlYW1zLmdldChkYXRhLmlkKSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3F1aWNTdHJlYW1zLnNldChkYXRhLmlkLCBudWxsKTtcbiAgICAgICAgICAgICAgLy8gUVVJQyBzdHJlYW0gaXMgbm90IGNyZWF0ZWQgeWV0LCByZXNvbHZlIHByb21pc2UgYWZ0ZXIgZ2V0dGluZ1xuICAgICAgICAgICAgICAvLyBRVUlDIHN0cmVhbS5cbiAgICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuc2V0KFxuICAgICAgICAgICAgICAgICAgZGF0YS5pZCwge3Jlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHA7XG4gIH1cblxuICBfcmVhZEFuZFByaW50KCkge1xuICAgIHRoaXMuX3F1aWNTdHJlYW1zWzBdLndhaXRGb3JSZWFkYWJsZSg1KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl9xdWljU3RyZWFtc1swXS5yZWFkQnVmZmVyZWRBbW91bnQpO1xuICAgICAgdGhpcy5fcXVpY1N0cmVhbXNbMF0ucmVhZEludG8oZGF0YSk7XG4gICAgICBMb2dnZXIuaW5mbygnUmVhZCBkYXRhOiAnICsgZGF0YSk7XG4gICAgICB0aGlzLl9yZWFkQW5kUHJpbnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9pbml0aWF0ZVB1YmxpY2F0aW9uKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3B1Ymxpc2gnLCB7XG4gICAgICBtZWRpYTogbnVsbCxcbiAgICAgIGRhdGE6IHRydWUsXG4gICAgICB0cmFuc3BvcnQ6IHt0eXBlOiAncXVpYycsIGlkOiB0aGlzLl90cmFuc3BvcnRJZH0sXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX3RyYW5zcG9ydElkICE9PSBkYXRhLnRyYW5zcG9ydElkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zcG9ydCBJRCBub3QgbWF0Y2guJyk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLmlkO1xuICB9XG5cbiAgX3JlYWR5SGFuZGxlcigpIHtcbiAgICAvLyBSZWFkeSBtZXNzYWdlIGZyb20gc2VydmVyIGlzIHVzZWxlc3MgZm9yIFF1aWNTdHJlYW0gc2luY2UgUXVpY1N0cmVhbSBoYXNcbiAgICAvLyBpdHMgb3duIHN0YXR1cy4gRG8gbm90aGluZyBoZXJlLlxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBpbywgUHJvbWlzZSwgc2V0VGltZW91dCwgY2xlYXJUaW1lb3V0ICovXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCAqIGFzIEV2ZW50TW9kdWxlIGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuaW1wb3J0IHtDb25mZXJlbmNlRXJyb3J9IGZyb20gJy4vZXJyb3IuanMnO1xuaW1wb3J0IHtCYXNlNjR9IGZyb20gJy4uL2Jhc2UvYmFzZTY0LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWNvbm5lY3Rpb25BdHRlbXB0cyA9IDEwO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2Uoc3RhdHVzLCBkYXRhLCByZXNvbHZlLCByZWplY3QpIHtcbiAgaWYgKHN0YXR1cyA9PT0gJ29rJyB8fCBzdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgIHJlc29sdmUoZGF0YSk7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgcmVqZWN0KGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIExvZ2dlci5lcnJvcignTUNVIHJldHVybnMgdW5rbm93biBhY2suJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgU2lvU2lnbmFsaW5nXG4gKiBAY2xhc3NkZXNjIFNvY2tldC5JTyBzaWduYWxpbmcgY2hhbm5lbCBmb3IgQ29uZmVyZW5jZUNsaWVudC4gSXQgaXMgbm90IHJlY29tbWVuZGVkIHRvIGRpcmVjdGx5IGFjY2VzcyB0aGlzIGNsYXNzLlxuICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgU2lvU2lnbmFsaW5nIGV4dGVuZHMgRXZlbnRNb2R1bGUuRXZlbnREaXNwYXRjaGVyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zb2NrZXQgPSBudWxsO1xuICAgIHRoaXMuX2xvZ2dlZEluID0gZmFsc2U7XG4gICAgdGhpcy5fcmVjb25uZWN0VGltZXMgPSAwO1xuICAgIHRoaXMuX3JlY29ubmVjdGlvblRpY2tldCA9IG51bGw7XG4gICAgdGhpcy5fcmVmcmVzaFJlY29ubmVjdGlvblRpY2tldCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGNvbm5lY3RcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIENvbm5lY3QgdG8gYSBwb3J0YWwuXG4gICAqIEBtZW1iZXJvZiBPbXMuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QsIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIHRoZSBkYXRhIHJldHVybmVkIGJ5IHBvcnRhbCBpZiBzdWNjZXNzZnVsbHkgbG9nZ2VkIGluLiBPciByZXR1cm4gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggYSBuZXdseSBjcmVhdGVkIE9tcy5FcnJvciBpZiBmYWlsZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBob3N0IEhvc3Qgb2YgdGhlIHBvcnRhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGlzU2VjdXJlZCBJcyBzZWN1cmUgY29ubmVjdGlvbiBvciBub3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2dpbkluZm8gSW5mb3JtYXRpb24gcmVxdWlyZWQgZm9yIGxvZ2dpbmcgaW4uXG4gICAqIEBwcml2YXRlLlxuICAgKi9cbiAgY29ubmVjdChob3N0LCBpc1NlY3VyZWQsIGxvZ2luSW5mbykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAncmVjb25uZWN0aW9uJzogdHJ1ZSxcbiAgICAgICAgJ3JlY29ubmVjdGlvbkF0dGVtcHRzJzogcmVjb25uZWN0aW9uQXR0ZW1wdHMsXG4gICAgICAgICdmb3JjZSBuZXcgY29ubmVjdGlvbic6IHRydWUsXG4gICAgICB9O1xuICAgICAgdGhpcy5fc29ja2V0ID0gaW8oaG9zdCwgb3B0cyk7XG4gICAgICBbJ3BhcnRpY2lwYW50JywgJ3RleHQnLCAnc3RyZWFtJywgJ3Byb2dyZXNzJ10uZm9yRWFjaCgoXG4gICAgICAgICAgbm90aWZpY2F0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuX3NvY2tldC5vbihub3RpZmljYXRpb24sIChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE1vZHVsZS5NZXNzYWdlRXZlbnQoJ2RhdGEnLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgIG5vdGlmaWNhdGlvbjogbm90aWZpY2F0aW9uLFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zb2NrZXQub24oJ3JlY29ubmVjdGluZycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0VGltZXMrKztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc29ja2V0Lm9uKCdyZWNvbm5lY3RfZmFpbGVkJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0VGltZXMgPj0gcmVjb25uZWN0aW9uQXR0ZW1wdHMpIHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50TW9kdWxlLk93dEV2ZW50KCdkaXNjb25uZWN0JykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NvY2tldC5vbignY29ubmVjdF9lcnJvcicsIChlKSA9PiB7XG4gICAgICAgIHJlamVjdChgY29ubmVjdF9lcnJvcjoke2hvc3R9YCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NvY2tldC5vbignZHJvcCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0VGltZXMgPSByZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jbGVhclJlY29ubmVjdGlvblRhc2soKTtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdFRpbWVzID49IHJlY29ubmVjdGlvbkF0dGVtcHRzKSB7XG4gICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50TW9kdWxlLk93dEV2ZW50KCdkaXNjb25uZWN0JykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NvY2tldC5lbWl0KCdsb2dpbicsIGxvZ2luSW5mbywgKHN0YXR1cywgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnb2snKSB7XG4gICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX29uUmVjb25uZWN0aW9uVGlja2V0KGRhdGEucmVjb25uZWN0aW9uVGlja2V0KTtcbiAgICAgICAgICB0aGlzLl9zb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyByZS1sb2dpbiB3aXRoIHJlY29ubmVjdGlvbiB0aWNrZXQuXG4gICAgICAgICAgICB0aGlzLl9zb2NrZXQuZW1pdCgncmVsb2dpbicsIHRoaXMuX3JlY29ubmVjdGlvblRpY2tldCwgKHN0YXR1cyxcbiAgICAgICAgICAgICAgICBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdvaycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RUaW1lcyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25SZWNvbm5lY3Rpb25UaWNrZXQoZGF0YSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnZGlzY29ubmVjdCcpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlUmVzcG9uc2Uoc3RhdHVzLCBkYXRhLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGRpc2Nvbm5lY3RcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIERpc2Nvbm5lY3QgZnJvbSBhIHBvcnRhbC5cbiAgICogQG1lbWJlcm9mIE9tcy5Db25mZXJlbmNlLlNpb1NpZ25hbGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdCwgRXJyb3I+fSBSZXR1cm4gYSBwcm9taXNlIHJlc29sdmVkIHdpdGggdGhlIGRhdGEgcmV0dXJuZWQgYnkgcG9ydGFsIGlmIHN1Y2Nlc3NmdWxseSBkaXNjb25uZWN0ZWQuIE9yIHJldHVybiBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBhIG5ld2x5IGNyZWF0ZWQgT21zLkVycm9yIGlmIGZhaWxlZC5cbiAgICogQHByaXZhdGUuXG4gICAqL1xuICBkaXNjb25uZWN0KCkge1xuICAgIGlmICghdGhpcy5fc29ja2V0IHx8IHRoaXMuX3NvY2tldC5kaXNjb25uZWN0ZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdQb3J0YWwgaXMgbm90IGNvbm5lY3RlZC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9zb2NrZXQuZW1pdCgnbG9nb3V0JywgKHN0YXR1cywgZGF0YSkgPT4ge1xuICAgICAgICAvLyBNYXhpbWl6ZSB0aGUgcmVjb25uZWN0IHRpbWVzIHRvIGRpc2FibGUgcmVjb25uZWN0aW9uLlxuICAgICAgICB0aGlzLl9yZWNvbm5lY3RUaW1lcyA9IHJlY29ubmVjdGlvbkF0dGVtcHRzO1xuICAgICAgICB0aGlzLl9zb2NrZXQuZGlzY29ubmVjdCgpO1xuICAgICAgICBoYW5kbGVSZXNwb25zZShzdGF0dXMsIGRhdGEsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc2VuZFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgU2VuZCBkYXRhIHRvIHBvcnRhbC5cbiAgICogQG1lbWJlcm9mIE9tcy5Db25mZXJlbmNlLlNpb1NpZ25hbGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdCwgRXJyb3I+fSBSZXR1cm4gYSBwcm9taXNlIHJlc29sdmVkIHdpdGggdGhlIGRhdGEgcmV0dXJuZWQgYnkgcG9ydGFsLiBPciByZXR1cm4gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggYSBuZXdseSBjcmVhdGVkIE9tcy5FcnJvciBpZiBmYWlsZWQgdG8gc2VuZCB0aGUgbWVzc2FnZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3ROYW1lIE5hbWUgZGVmaW5lZCBpbiBjbGllbnQtc2VydmVyIHByb3RvY29sLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdERhdGEgRGF0YSBmb3JtYXQgaXMgZGVmaW5lZCBpbiBjbGllbnQtc2VydmVyIHByb3RvY29sLlxuICAgKiBAcHJpdmF0ZS5cbiAgICovXG4gIHNlbmQocmVxdWVzdE5hbWUsIHJlcXVlc3REYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3NvY2tldC5lbWl0KHJlcXVlc3ROYW1lLCByZXF1ZXN0RGF0YSwgKHN0YXR1cywgZGF0YSkgPT4ge1xuICAgICAgICBoYW5kbGVSZXNwb25zZShzdGF0dXMsIGRhdGEsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX29uUmVjb25uZWN0aW9uVGlja2V0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBQYXJzZSByZWNvbm5lY3Rpb24gdGlja2V0IGFuZCBzY2hlZHVsZSB0aWNrZXQgcmVmcmVzaGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpY2tldFN0cmluZyBSZWNvbm5lY3Rpb24gdGlja2V0LlxuICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU2lvU2lnbmFsaW5nXG4gICAqIEBwcml2YXRlLlxuICAgKi9cbiAgX29uUmVjb25uZWN0aW9uVGlja2V0KHRpY2tldFN0cmluZykge1xuICAgIHRoaXMuX3JlY29ubmVjdGlvblRpY2tldCA9IHRpY2tldFN0cmluZztcbiAgICBjb25zdCB0aWNrZXQgPSBKU09OLnBhcnNlKEJhc2U2NC5kZWNvZGVCYXNlNjQodGlja2V0U3RyaW5nKSk7XG4gICAgLy8gUmVmcmVzaCB0aWNrZXQgMSBtaW4gb3IgMTAgc2Vjb25kcyBiZWZvcmUgaXQgZXhwaXJlcy5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kc0luT25lTWludXRlID0gNjAgKiAxMDAwO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kc0luVGVuU2Vjb25kcyA9IDEwICogMTAwMDtcbiAgICBpZiAodGlja2V0Lm5vdEFmdGVyIDw9IG5vdyAtIG1pbGxpc2Vjb25kc0luVGVuU2Vjb25kcykge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ1JlY29ubmVjdGlvbiB0aWNrZXQgZXhwaXJlcyB0b28gc29vbi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHJlZnJlc2hBZnRlciA9IHRpY2tldC5ub3RBZnRlciAtIG5vdyAtIG1pbGxpc2Vjb25kc0luT25lTWludXRlO1xuICAgIGlmIChyZWZyZXNoQWZ0ZXIgPCAwKSB7XG4gICAgICByZWZyZXNoQWZ0ZXIgPSB0aWNrZXQubm90QWZ0ZXIgLSBub3cgLSBtaWxsaXNlY29uZHNJblRlblNlY29uZHM7XG4gICAgfVxuICAgIHRoaXMuX2NsZWFyUmVjb25uZWN0aW9uVGFzaygpO1xuICAgIHRoaXMuX3JlZnJlc2hSZWNvbm5lY3Rpb25UaWNrZXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3NvY2tldC5lbWl0KCdyZWZyZXNoUmVjb25uZWN0aW9uVGlja2V0JywgKHN0YXR1cywgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzICE9PSAnb2snKSB7XG4gICAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ZhaWxlZCB0byByZWZyZXNoIHJlY29ubmVjdGlvbiB0aWNrZXQuJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uUmVjb25uZWN0aW9uVGlja2V0KGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSwgcmVmcmVzaEFmdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX2NsZWFyUmVjb25uZWN0aW9uVGFza1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgU3RvcCB0cnlpbmcgdG8gcmVmcmVzaCByZWNvbm5lY3Rpb24gdGlja2V0LlxuICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU2lvU2lnbmFsaW5nXG4gICAqIEBwcml2YXRlLlxuICAgKi9cbiAgX2NsZWFyUmVjb25uZWN0aW9uVGFzaygpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVmcmVzaFJlY29ubmVjdGlvblRpY2tldCk7XG4gICAgdGhpcy5fcmVmcmVzaFJlY29ubmVjdGlvblRpY2tldCA9IG51bGw7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLy8gVGhpcyBmaWxlIGRvZXNuJ3QgaGF2ZSBwdWJsaWMgQVBJcy5cbi8qIGVzbGludC1kaXNhYmxlIHZhbGlkLWpzZG9jICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgUHVibGljYXRpb25Nb2R1bGUgZnJvbSAnLi4vYmFzZS9wdWJsaWNhdGlvbi5qcyc7XG5pbXBvcnQgKiBhcyBNZWRpYUZvcm1hdE1vZHVsZSBmcm9tICcuLi9iYXNlL21lZGlhZm9ybWF0LmpzJztcbmltcG9ydCAqIGFzIENvZGVjTW9kdWxlIGZyb20gJy4uL2Jhc2UvY29kZWMuanMnO1xuaW1wb3J0ICogYXMgU3Vic2NyaXB0aW9uTW9kdWxlIGZyb20gJy4vc3Vic2NyaXB0aW9uLmpzJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vYmFzZS9sb2dnZXIuanMnO1xuXG4vKipcbiAqIEBmdW5jdGlvbiBleHRyYWN0Qml0cmF0ZU11bHRpcGxpZXJcbiAqIEBkZXNjIEV4dHJhY3QgYml0cmF0ZSBtdWx0aXBsaWVyIGZyb20gYSBzdHJpbmcgbGlrZSBcIngwLjJcIi5cbiAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LCBFcnJvcj59IFRoZSBmbG9hdCBudW1iZXIgYWZ0ZXIgXCJ4XCIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleHRyYWN0Qml0cmF0ZU11bHRpcGxpZXIoaW5wdXQpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgfHwgIWlucHV0LnN0YXJ0c1dpdGgoJ3gnKSkge1xuICAgIExvZ2dlci53YXJuaW5nKCdJbnZhbGlkIGJpdHJhdGUgbXVsdGlwbGllciBpbnB1dC4nKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoaW5wdXQucmVwbGFjZSgvXngvLCAnJykpO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gc29ydE51bWJlcnMoeCwgeSkge1xuICByZXR1cm4geCAtIHk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5mdW5jdGlvbiBzb3J0UmVzb2x1dGlvbnMoeCwgeSkge1xuICBpZiAoeC53aWR0aCAhPT0geS53aWR0aCkge1xuICAgIHJldHVybiB4LndpZHRoIC0geS53aWR0aDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geC5oZWlnaHQgLSB5LmhlaWdodDtcbiAgfVxufVxuXG4vKipcbiAqIEBmdW5jdGlvbiBjb252ZXJ0VG9QdWJsaWNhdGlvblNldHRpbmdzXG4gKiBAZGVzYyBDb252ZXJ0IG1lZGlhSW5mbyByZWNlaXZlZCBmcm9tIHNlcnZlciB0byBQdWJsaWNhdGlvblNldHRpbmdzLlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1B1YmxpY2F0aW9uU2V0dGluZ3MobWVkaWFJbmZvKSB7XG4gIGNvbnN0IGF1ZGlvID0gW107XG4gIGNvbnN0IHZpZGVvID0gW107XG4gIGxldCBhdWRpb0NvZGVjO1xuICBsZXQgdmlkZW9Db2RlYztcbiAgbGV0IHJlc29sdXRpb247XG4gIGxldCBmcmFtZXJhdGU7XG4gIGxldCBiaXRyYXRlO1xuICBsZXQga2V5RnJhbWVJbnRlcnZhbDtcbiAgbGV0IHJpZDtcbiAgZm9yIChjb25zdCB0cmFjayBvZiBtZWRpYUluZm8udHJhY2tzKSB7XG4gICAgaWYgKHRyYWNrLnR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgIGlmICh0cmFjay5mb3JtYXQpIHtcbiAgICAgICAgYXVkaW9Db2RlYyA9IG5ldyBDb2RlY01vZHVsZS5BdWRpb0NvZGVjUGFyYW1ldGVycyhcbiAgICAgICAgICAgIHRyYWNrLmZvcm1hdC5jb2RlYywgdHJhY2suZm9ybWF0LmNoYW5uZWxOdW0sXG4gICAgICAgICAgICB0cmFjay5mb3JtYXQuc2FtcGxlUmF0ZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3MgPVxuICAgICAgICAgIG5ldyBQdWJsaWNhdGlvbk1vZHVsZS5BdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3MoYXVkaW9Db2RlYyk7XG4gICAgICBhdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3MuX3RyYWNrSWQgPSB0cmFjay5pZDtcbiAgICAgIGF1ZGlvLnB1c2goYXVkaW9QdWJsaWNhdGlvblNldHRpbmdzKTtcbiAgICB9IGVsc2UgaWYgKHRyYWNrLnR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgIGlmICh0cmFjay5mb3JtYXQpIHtcbiAgICAgICAgdmlkZW9Db2RlYyA9IG5ldyBDb2RlY01vZHVsZS5WaWRlb0NvZGVjUGFyYW1ldGVycyhcbiAgICAgICAgICAgIHRyYWNrLmZvcm1hdC5jb2RlYywgdHJhY2suZm9ybWF0LnByb2ZpbGUpO1xuICAgICAgfVxuICAgICAgaWYgKHRyYWNrLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKHRyYWNrLnBhcmFtZXRlcnMucmVzb2x1dGlvbikge1xuICAgICAgICAgIHJlc29sdXRpb24gPSBuZXcgTWVkaWFGb3JtYXRNb2R1bGUuUmVzb2x1dGlvbihcbiAgICAgICAgICAgICAgdHJhY2sucGFyYW1ldGVycy5yZXNvbHV0aW9uLndpZHRoLFxuICAgICAgICAgICAgICB0cmFjay5wYXJhbWV0ZXJzLnJlc29sdXRpb24uaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBmcmFtZXJhdGUgPSB0cmFjay5wYXJhbWV0ZXJzLmZyYW1lcmF0ZTtcbiAgICAgICAgYml0cmF0ZSA9IHRyYWNrLnBhcmFtZXRlcnMuYml0cmF0ZSAqIDEwMDA7XG4gICAgICAgIGtleUZyYW1lSW50ZXJ2YWwgPSB0cmFjay5wYXJhbWV0ZXJzLmtleUZyYW1lSW50ZXJ2YWw7XG4gICAgICB9XG4gICAgICBpZiAodHJhY2sucmlkKSB7XG4gICAgICAgIHJpZCA9IHRyYWNrLnJpZDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZpZGVvUHVibGljYXRpb25TZXR0aW5ncyA9XG4gICAgICAgICAgbmV3IFB1YmxpY2F0aW9uTW9kdWxlLlZpZGVvUHVibGljYXRpb25TZXR0aW5ncyhcbiAgICAgICAgICAgICAgdmlkZW9Db2RlYywgcmVzb2x1dGlvbiwgZnJhbWVyYXRlLCBiaXRyYXRlLFxuICAgICAgICAgICAgICBrZXlGcmFtZUludGVydmFsLCByaWQpO1xuICAgICAgdmlkZW9QdWJsaWNhdGlvblNldHRpbmdzLl90cmFja0lkID0gdHJhY2suaWQ7XG4gICAgICB2aWRlby5wdXNoKHZpZGVvUHVibGljYXRpb25TZXR0aW5ncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBQdWJsaWNhdGlvbk1vZHVsZS5QdWJsaWNhdGlvblNldHRpbmdzKGF1ZGlvLCB2aWRlbyk7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uIGNvbnZlcnRUb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICogQGRlc2MgQ29udmVydCBtZWRpYUluZm8gcmVjZWl2ZWQgZnJvbSBzZXJ2ZXIgdG8gU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzLlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyhtZWRpYUluZm8pIHtcbiAgbGV0IGF1ZGlvO1xuICBsZXQgdmlkZW87XG5cbiAgZm9yIChjb25zdCB0cmFjayBvZiBtZWRpYUluZm8udHJhY2tzKSB7XG4gICAgaWYgKHRyYWNrLnR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgIGNvbnN0IGF1ZGlvQ29kZWNzID0gW107XG4gICAgICBpZiAodHJhY2sub3B0aW9uYWwgJiYgdHJhY2sub3B0aW9uYWwuZm9ybWF0KSB7XG4gICAgICAgIGZvciAoY29uc3QgYXVkaW9Db2RlY0luZm8gb2YgdHJhY2sub3B0aW9uYWwuZm9ybWF0KSB7XG4gICAgICAgICAgY29uc3QgYXVkaW9Db2RlYyA9IG5ldyBDb2RlY01vZHVsZS5BdWRpb0NvZGVjUGFyYW1ldGVycyhcbiAgICAgICAgICAgICAgYXVkaW9Db2RlY0luZm8uY29kZWMsIGF1ZGlvQ29kZWNJbmZvLmNoYW5uZWxOdW0sXG4gICAgICAgICAgICAgIGF1ZGlvQ29kZWNJbmZvLnNhbXBsZVJhdGUpO1xuICAgICAgICAgIGF1ZGlvQ29kZWNzLnB1c2goYXVkaW9Db2RlYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF1ZGlvQ29kZWNzLnNvcnQoKTtcbiAgICAgIGF1ZGlvID0gbmV3IFN1YnNjcmlwdGlvbk1vZHVsZS5BdWRpb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyhhdWRpb0NvZGVjcyk7XG4gICAgfSBlbHNlIGlmICh0cmFjay50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICBjb25zdCB2aWRlb0NvZGVjcyA9IFtdO1xuICAgICAgaWYgKHRyYWNrLm9wdGlvbmFsICYmIHRyYWNrLm9wdGlvbmFsLmZvcm1hdCkge1xuICAgICAgICBmb3IgKGNvbnN0IHZpZGVvQ29kZWNJbmZvIG9mIHRyYWNrLm9wdGlvbmFsLmZvcm1hdCkge1xuICAgICAgICAgIGNvbnN0IHZpZGVvQ29kZWMgPSBuZXcgQ29kZWNNb2R1bGUuVmlkZW9Db2RlY1BhcmFtZXRlcnMoXG4gICAgICAgICAgICAgIHZpZGVvQ29kZWNJbmZvLmNvZGVjLCB2aWRlb0NvZGVjSW5mby5wcm9maWxlKTtcbiAgICAgICAgICB2aWRlb0NvZGVjcy5wdXNoKHZpZGVvQ29kZWMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2aWRlb0NvZGVjcy5zb3J0KCk7XG4gICAgICBpZiAoIXRyYWNrLm9wdGlvbmFsPy5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHZpZGVvID0gbmV3IFN1YnNjcmlwdGlvbk1vZHVsZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyhcbiAgICAgICAgICAgIHZpZGVvQ29kZWNzLCBbXSwgW10sIFtdLCBbXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXNvbHV0aW9ucyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICB0cmFjay5vcHRpb25hbC5wYXJhbWV0ZXJzLnJlc29sdXRpb24sXG4gICAgICAgICAgICAocikgPT4gbmV3IE1lZGlhRm9ybWF0TW9kdWxlLlJlc29sdXRpb24oci53aWR0aCwgci5oZWlnaHQpKTtcbiAgICAgICAgcmVzb2x1dGlvbnMuc29ydChzb3J0UmVzb2x1dGlvbnMpO1xuICAgICAgICBjb25zdCBiaXRyYXRlcyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICB0cmFjay5vcHRpb25hbC5wYXJhbWV0ZXJzLmJpdHJhdGUsXG4gICAgICAgICAgICAoYml0cmF0ZSkgPT4gZXh0cmFjdEJpdHJhdGVNdWx0aXBsaWVyKGJpdHJhdGUpKTtcbiAgICAgICAgYml0cmF0ZXMucHVzaCgxLjApO1xuICAgICAgICBiaXRyYXRlcy5zb3J0KHNvcnROdW1iZXJzKTtcbiAgICAgICAgY29uc3QgZnJhbWVSYXRlcyA9XG4gICAgICAgICAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYWNrLm9wdGlvbmFsLnBhcmFtZXRlcnMuZnJhbWVyYXRlKSk7XG4gICAgICAgIGZyYW1lUmF0ZXMuc29ydChzb3J0TnVtYmVycyk7XG4gICAgICAgIGNvbnN0IGtleUZyYW1lSW50ZXJ2YWxzID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRyYWNrLm9wdGlvbmFsLnBhcmFtZXRlcnMua2V5RnJhbWVJbnRlcnZhbCkpO1xuICAgICAgICBrZXlGcmFtZUludGVydmFscy5zb3J0KHNvcnROdW1iZXJzKTtcbiAgICAgICAgdmlkZW8gPSBuZXcgU3Vic2NyaXB0aW9uTW9kdWxlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzKFxuICAgICAgICAgICAgdmlkZW9Db2RlY3MsIHJlc29sdXRpb25zLCBmcmFtZVJhdGVzLCBiaXRyYXRlcywga2V5RnJhbWVJbnRlcnZhbHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbk1vZHVsZS5TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMoYXVkaW8sIHZpZGVvKTtcbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5cbi8qKlxuICogQGNsYXNzIEF1ZGlvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgUmVwcmVzZW50cyB0aGUgYXVkaW8gY2FwYWJpbGl0eSBmb3Igc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgQXVkaW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlY3MpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48T3d0LkJhc2UuQXVkaW9Db2RlY1BhcmFtZXRlcnM+fSBjb2RlY3NcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQXVkaW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjcyA9IGNvZGVjcztcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBWaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFJlcHJlc2VudHMgdGhlIHZpZGVvIGNhcGFiaWxpdHkgZm9yIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoY29kZWNzLCByZXNvbHV0aW9ucywgZnJhbWVSYXRlcywgYml0cmF0ZU11bHRpcGxpZXJzLFxuICAgICAga2V5RnJhbWVJbnRlcnZhbHMpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48T3d0LkJhc2UuVmlkZW9Db2RlY1BhcmFtZXRlcnM+fSBjb2RlY3NcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjcyA9IGNvZGVjcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48T3d0LkJhc2UuUmVzb2x1dGlvbj59IHJlc29sdXRpb25zXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9ucyA9IHJlc29sdXRpb25zO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FycmF5LjxudW1iZXI+fSBmcmFtZVJhdGVzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5mcmFtZVJhdGVzID0gZnJhbWVSYXRlcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48bnVtYmVyPn0gYml0cmF0ZU11bHRpcGxpZXJzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5iaXRyYXRlTXVsdGlwbGllcnMgPSBiaXRyYXRlTXVsdGlwbGllcnM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPG51bWJlcj59IGtleUZyYW1lSW50ZXJ2YWxzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5rZXlGcmFtZUludGVydmFscyA9IGtleUZyYW1lSW50ZXJ2YWxzO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFJlcHJlc2VudHMgdGhlIGNhcGFiaWxpdHkgZm9yIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGF1ZGlvLCB2aWRlbykge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQ29uZmVyZW5jZS5BdWRpb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc30gYXVkaW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5hdWRpbyA9IGF1ZGlvO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc30gdmlkZW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy52aWRlbyA9IHZpZGVvO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIEF1ZGlvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSBhdWRpbyBjb25zdHJhaW50cyBmb3Igc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgQXVkaW9TdWJzY3JpcHRpb25Db25zdHJhaW50cyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjcykge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9BcnJheS48T3d0LkJhc2UuQXVkaW9Db2RlY1BhcmFtZXRlcnM+fSBjb2RlY3NcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQXVkaW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIENvZGVjcyBhY2NlcHRlZC4gSWYgbm9uZSBvZiBgY29kZWNzYCBzdXBwb3J0ZWQgYnkgYm90aCBzaWRlcywgY29ubmVjdGlvbiBmYWlscy4gTGVhdmUgaXQgdW5kZWZpbmVkIHdpbGwgdXNlIGFsbCBwb3NzaWJsZSBjb2RlY3MuXG4gICAgICovXG4gICAgdGhpcy5jb2RlY3MgPSBjb2RlY3M7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFJlcHJlc2VudHMgdGhlIHZpZGVvIGNvbnN0cmFpbnRzIGZvciBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoY29kZWNzLCByZXNvbHV0aW9uLCBmcmFtZVJhdGUsIGJpdHJhdGVNdWx0aXBsaWVyLFxuICAgICAga2V5RnJhbWVJbnRlcnZhbCwgcmlkKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P0FycmF5LjxPd3QuQmFzZS5WaWRlb0NvZGVjUGFyYW1ldGVycz59IGNvZGVjc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgQ29kZWNzIGFjY2VwdGVkLiBJZiBub25lIG9mIGBjb2RlY3NgIHN1cHBvcnRlZCBieSBib3RoIHNpZGVzLCBjb25uZWN0aW9uIGZhaWxzLiBMZWF2ZSBpdCB1bmRlZmluZWQgd2lsbCB1c2UgYWxsIHBvc3NpYmxlIGNvZGVjcy5cbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjcyA9IGNvZGVjcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuUmVzb2x1dGlvbn0gcmVzb2x1dGlvblxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgT25seSByZXNvbHV0aW9ucyBsaXN0ZWQgaW4gT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9uID0gcmVzb2x1dGlvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBmcmFtZVJhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIE9ubHkgZnJhbWVSYXRlcyBsaXN0ZWQgaW4gT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5mcmFtZVJhdGUgPSBmcmFtZVJhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gYml0cmF0ZU11bHRpcGxpZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIE9ubHkgYml0cmF0ZU11bHRpcGxpZXJzIGxpc3RlZCBpbiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyBhcmUgYWxsb3dlZC5cbiAgICAgKi9cbiAgICB0aGlzLmJpdHJhdGVNdWx0aXBsaWVyID0gYml0cmF0ZU11bHRpcGxpZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0ga2V5RnJhbWVJbnRlcnZhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgT25seSBrZXlGcmFtZUludGVydmFscyBsaXN0ZWQgaW4gT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5rZXlGcmFtZUludGVydmFsID0ga2V5RnJhbWVJbnRlcnZhbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSByaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIFJlc3RyaWN0aW9uIGlkZW50aWZpZXIgdG8gaWRlbnRpZnkgdGhlIFJUUCBTdHJlYW1zIHdpdGhpbiBhbiBSVFAgc2Vzc2lvbi4gV2hlbiByaWQgaXMgc3BlY2lmaWVkLCBvdGhlciBjb25zdHJhaW50cyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICovXG4gICAgdGhpcy5yaWQgPSByaWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgU3Vic2NyaWJlT3B0aW9uc1xuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFN1YnNjcmliZU9wdGlvbnMgZGVmaW5lcyBvcHRpb25zIGZvciBzdWJzY3JpYmluZyBhIE93dC5CYXNlLlJlbW90ZVN0cmVhbS5cbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmliZU9wdGlvbnMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpbywgdmlkZW8sIHRyYW5zcG9ydCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQ29uZmVyZW5jZS5BdWRpb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzfSBhdWRpb1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpYmVPcHRpb25zXG4gICAgICovXG4gICAgdGhpcy5hdWRpbyA9IGF1ZGlvO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzfSB2aWRlb1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpYmVPcHRpb25zXG4gICAgICovXG4gICAgdGhpcy52aWRlbyA9IHZpZGVvO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5UcmFuc3BvcnRDb25zdHJhaW50c30gdHJhbnNwb3J0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmliZU9wdGlvbnNcbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBWaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBWaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnMgZGVmaW5lcyBvcHRpb25zIGZvciB1cGRhdGluZyBhIHN1YnNjcmlwdGlvbidzIHZpZGVvIHBhcnQuXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuUmVzb2x1dGlvbn0gcmVzb2x1dGlvblxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAgICAgKiBAZGVzYyBPbmx5IHJlc29sdXRpb25zIGxpc3RlZCBpbiBWaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyBhcmUgYWxsb3dlZC5cbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gZnJhbWVSYXRlc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAgICAgKiBAZGVzYyBPbmx5IGZyYW1lUmF0ZXMgbGlzdGVkIGluIFZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMuZnJhbWVSYXRlID0gdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGJpdHJhdGVNdWx0aXBsaWVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAgICAgKiBAZGVzYyBPbmx5IGJpdHJhdGVNdWx0aXBsaWVycyBsaXN0ZWQgaW4gVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5iaXRyYXRlTXVsdGlwbGllcnMgPSB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0ga2V5RnJhbWVJbnRlcnZhbHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gICAgICogQGRlc2MgT25seSBrZXlGcmFtZUludGVydmFscyBsaXN0ZWQgaW4gVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5rZXlGcmFtZUludGVydmFsID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBTdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIGRlZmluZXMgb3B0aW9ucyBmb3IgdXBkYXRpbmcgYSBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P1ZpZGVvU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9uc30gdmlkZW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9uc1xuICAgICAqL1xuICAgIHRoaXMudmlkZW8gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgU3Vic2NyaXB0aW9uXG4gKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgU3Vic2NyaXB0aW9uIGlzIGEgcmVjZWl2ZXIgZm9yIHJlY2VpdmluZyBhIHN0cmVhbS5cbiAqIEV2ZW50czpcbiAqXG4gKiB8IEV2ZW50IE5hbWUgICAgICB8IEFyZ3VtZW50IFR5cGUgICAgfCBGaXJlZCB3aGVuICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBlbmRlZCAgICAgICAgICAgfCBFdmVudCAgICAgICAgICAgIHwgU3Vic2NyaXB0aW9uIGlzIGVuZGVkLiB8XG4gKiB8IGVycm9yICAgICAgICAgICB8IEVycm9yRXZlbnQgICAgICAgfCBBbiBlcnJvciBvY2N1cnJlZCBvbiB0aGUgc3Vic2NyaXB0aW9uLiB8XG4gKiB8IG11dGUgICAgICAgICAgICB8IE11dGVFdmVudCAgICAgICAgfCBQdWJsaWNhdGlvbiBpcyBtdXRlZC4gUmVtb3RlIHNpZGUgc3RvcHBlZCBzZW5kaW5nIGF1ZGlvIGFuZC9vciB2aWRlbyBkYXRhLiB8XG4gKiB8IHVubXV0ZSAgICAgICAgICB8IE11dGVFdmVudCAgICAgICAgfCBQdWJsaWNhdGlvbiBpcyB1bm11dGVkLiBSZW1vdGUgc2lkZSBjb250aW51ZWQgc2VuZGluZyBhdWRpbyBhbmQvb3IgdmlkZW8gZGF0YS4gfFxuICpcbiAqIEBleHRlbmRzIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoXG4gICAgICBpZCwgc3RyZWFtLCB0cmFuc3BvcnQsIHN0b3AsIGdldFN0YXRzLCBtdXRlLCB1bm11dGUsIGFwcGx5T3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKCFpZCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSUQgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGlkLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge01lZGlhU3RyZWFtIHwgQmlkaXJlY3Rpb25hbFN0cmVhbX0gc3RyZWFtXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc3RyZWFtJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIC8vIFRPRE86IEl0IHNob3VsZCBiZSBhIHJlYWRvbmx5IHByb3BlcnR5LCBidXQgY3VycmVudCBpbXBsZW1lbnRhdGlvblxuICAgICAgLy8gY3JlYXRlcyBTdWJzY3JpcHRpb24gYWZ0ZXIgcmVjZWl2aW5nICdyZWFkeScgZnJvbSBzZXJ2ZXIuIEF0IHRoaXMgdGltZSxcbiAgICAgIC8vIE1lZGlhU3RyZWFtIG1heSBub3QgYmUgYXZhaWxhYmxlLlxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogc3RyZWFtLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlRyYW5zcG9ydFNldHRpbmdzfSB0cmFuc3BvcnRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAZGVzYyBUcmFuc3BvcnQgc2V0dGluZ3MgZm9yIHRoZSBzdWJzY3JpcHRpb24uXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHJhbnNwb3J0Jywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB0cmFuc3BvcnQsXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIHN0b3BcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBTdG9wIGNlcnRhaW4gc3Vic2NyaXB0aW9uLiBPbmNlIGEgc3Vic2NyaXB0aW9uIGlzIHN0b3BwZWQsIGl0IGNhbm5vdCBiZSByZWNvdmVyZWQuXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5zdG9wID0gc3RvcDtcbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gZ2V0U3RhdHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBHZXQgc3RhdHMgb2YgdW5kZXJseWluZyBQZWVyQ29ubmVjdGlvbi5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UlRDU3RhdHNSZXBvcnQsIEVycm9yPn1cbiAgICAgKi9cbiAgICB0aGlzLmdldFN0YXRzID0gZ2V0U3RhdHM7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIG11dGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBTdG9wIHJlZXZpbmcgZGF0YSBmcm9tIHJlbW90ZSBlbmRwb2ludC5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtPd3QuQmFzZS5UcmFja0tpbmQgfSBraW5kIEtpbmQgb2YgdHJhY2tzIHRvIGJlIG11dGVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZCwgRXJyb3I+fVxuICAgICAqL1xuICAgIHRoaXMubXV0ZSA9IG11dGU7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIHVubXV0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIENvbnRpbnVlIHJlZXZpbmcgZGF0YSBmcm9tIHJlbW90ZSBlbmRwb2ludC5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtPd3QuQmFzZS5UcmFja0tpbmQgfSBraW5kIEtpbmQgb2YgdHJhY2tzIHRvIGJlIHVubXV0ZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5kZWZpbmVkLCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy51bm11dGUgPSB1bm11dGU7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGFwcGx5T3B0aW9uc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIFVwZGF0ZSBzdWJzY3JpcHRpb24gd2l0aCBnaXZlbiBvcHRpb25zLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge093dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnMgfSBvcHRpb25zIFN1YnNjcmlwdGlvbiB1cGRhdGUgb3B0aW9ucy5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQsIEVycm9yPn1cbiAgICAgKi9cbiAgICB0aGlzLmFwcGx5T3B0aW9ucyA9IGFwcGx5T3B0aW9ucztcblxuICAgIC8vIFRyYWNrIGlzIG5vdCBkZWZpbmVkIGluIHNlcnZlciBwcm90b2NvbC4gU28gdGhlc2UgSURzIGFyZSBlcXVhbCB0byB0aGVpclxuICAgIC8vIHN0cmVhbSdzIElEIGF0IHRoaXMgdGltZS5cbiAgICB0aGlzLl9hdWRpb1RyYWNrSWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fdmlkZW9UcmFja0lkID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgYmFzZSBmcm9tICcuL2Jhc2UvZXhwb3J0LmpzJztcbmltcG9ydCAqIGFzIHAycCBmcm9tICcuL3AycC9leHBvcnQuanMnO1xuaW1wb3J0ICogYXMgY29uZmVyZW5jZSBmcm9tICcuL2NvbmZlcmVuY2UvZXhwb3J0LmpzJztcblxuLyoqXG4gKiBCYXNlIG9iamVjdHMgZm9yIGJvdGggUDJQIGFuZCBjb25mZXJlbmNlLlxuICogQG5hbWVzcGFjZSBPd3QuQmFzZVxuICovXG5leHBvcnQgY29uc3QgQmFzZSA9IGJhc2U7XG5cbi8qKlxuICogUDJQIFdlYlJUQyBjb25uZWN0aW9ucy5cbiAqIEBuYW1lc3BhY2UgT3d0LlAyUFxuICovXG5leHBvcnQgY29uc3QgUDJQID0gcDJwO1xuXG4vKipcbiAqIFdlYlJUQyBjb25uZWN0aW9ucyB3aXRoIGNvbmZlcmVuY2Ugc2VydmVyLlxuICogQG5hbWVzcGFjZSBPd3QuQ29uZmVyZW5jZVxuICovXG5leHBvcnQgY29uc3QgQ29uZmVyZW5jZSA9IGNvbmZlcmVuY2U7XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGNvbnN0IGVycm9ycyA9IHtcbiAgLy8gMjEwMC0yOTk5IGZvciBQMlAgZXJyb3JzXG4gIC8vIDIxMDAtMjE5OSBmb3IgY29ubmVjdGlvbiBlcnJvcnNcbiAgLy8gMjEwMC0yMTA5IGZvciBzZXJ2ZXIgZXJyb3JzXG4gIFAyUF9DT05OX1NFUlZFUl9VTktOT1dOOiB7XG4gICAgY29kZTogMjEwMCxcbiAgICBtZXNzYWdlOiAnU2VydmVyIHVua25vd24gZXJyb3IuJyxcbiAgfSxcbiAgUDJQX0NPTk5fU0VSVkVSX1VOQVZBSUxBQkxFOiB7XG4gICAgY29kZTogMjEwMSxcbiAgICBtZXNzYWdlOiAnU2VydmVyIGlzIHVuYXZhbGlhYmxlLicsXG4gIH0sXG4gIFAyUF9DT05OX1NFUlZFUl9CVVNZOiB7XG4gICAgY29kZTogMjEwMixcbiAgICBtZXNzYWdlOiAnU2VydmVyIGlzIHRvbyBidXN5LicsXG4gIH0sXG4gIFAyUF9DT05OX1NFUlZFUl9OT1RfU1VQUE9SVEVEOiB7XG4gICAgY29kZTogMjEwMyxcbiAgICBtZXNzYWdlOiAnTWV0aG9kIGhhcyBub3QgYmVlbiBzdXBwb3J0ZWQgYnkgc2VydmVyLicsXG4gIH0sXG4gIC8vIDIxMTAtMjExOSBmb3IgY2xpZW50IGVycm9yc1xuICBQMlBfQ09OTl9DTElFTlRfVU5LTk9XTjoge1xuICAgIGNvZGU6IDIxMTAsXG4gICAgbWVzc2FnZTogJ0NsaWVudCB1bmtub3duIGVycm9yLicsXG4gIH0sXG4gIFAyUF9DT05OX0NMSUVOVF9OT1RfSU5JVElBTElaRUQ6IHtcbiAgICBjb2RlOiAyMTExLFxuICAgIG1lc3NhZ2U6ICdDb25uZWN0aW9uIGlzIG5vdCBpbml0aWFsaXplZC4nLFxuICB9LFxuICAvLyAyMTIwLTIxMjkgZm9yIGF1dGhlbnRpY2F0aW9uIGVycm9yc1xuICBQMlBfQ09OTl9BVVRIX1VOS05PV046IHtcbiAgICBjb2RlOiAyMTIwLFxuICAgIG1lc3NhZ2U6ICdBdXRoZW50aWNhdGlvbiB1bmtub3duIGVycm9yLicsXG4gIH0sXG4gIFAyUF9DT05OX0FVVEhfRkFJTEVEOiB7XG4gICAgY29kZTogMjEyMSxcbiAgICBtZXNzYWdlOiAnV3JvbmcgdXNlcm5hbWUgb3IgdG9rZW4uJyxcbiAgfSxcbiAgLy8gMjIwMC0yMjk5IGZvciBtZXNzYWdlIHRyYW5zcG9ydCBlcnJvcnNcbiAgUDJQX01FU1NBR0lOR19UQVJHRVRfVU5SRUFDSEFCTEU6IHtcbiAgICBjb2RlOiAyMjAxLFxuICAgIG1lc3NhZ2U6ICdSZW1vdGUgdXNlciBjYW5ub3QgYmUgcmVhY2hlZC4nLFxuICB9LFxuICBQMlBfQ0xJRU5UX0RFTklFRDoge1xuICAgIGNvZGU6IDIyMDIsXG4gICAgbWVzc2FnZTogJ1VzZXIgaXMgZGVuaWVkLicsXG4gIH0sXG4gIC8vIDIzMDEtMjM5OSBmb3IgY2hhdCByb29tIGVycm9yc1xuICAvLyAyNDAxLTI0OTkgZm9yIGNsaWVudCBlcnJvcnNcbiAgUDJQX0NMSUVOVF9VTktOT1dOOiB7XG4gICAgY29kZTogMjQwMCxcbiAgICBtZXNzYWdlOiAnVW5rbm93biBlcnJvcnMuJyxcbiAgfSxcbiAgUDJQX0NMSUVOVF9VTlNVUFBPUlRFRF9NRVRIT0Q6IHtcbiAgICBjb2RlOiAyNDAxLFxuICAgIG1lc3NhZ2U6ICdUaGlzIG1ldGhvZCBpcyB1bnN1cHBvcnRlZCBpbiBjdXJyZW50IGJyb3dzZXIuJyxcbiAgfSxcbiAgUDJQX0NMSUVOVF9JTExFR0FMX0FSR1VNRU5UOiB7XG4gICAgY29kZTogMjQwMixcbiAgICBtZXNzYWdlOiAnSWxsZWdhbCBhcmd1bWVudC4nLFxuICB9LFxuICBQMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEU6IHtcbiAgICBjb2RlOiAyNDAzLFxuICAgIG1lc3NhZ2U6ICdJbnZhbGlkIHBlZXIgc3RhdGUuJyxcbiAgfSxcbiAgUDJQX0NMSUVOVF9OT1RfQUxMT1dFRDoge1xuICAgIGNvZGU6IDI0MDQsXG4gICAgbWVzc2FnZTogJ1JlbW90ZSB1c2VyIGlzIG5vdCBhbGxvd2VkLicsXG4gIH0sXG4gIC8vIDI1MDEtMjU5OSBmb3IgV2ViUlRDIGVycm9zLlxuICBQMlBfV0VCUlRDX1VOS05PV046IHtcbiAgICBjb2RlOiAyNTAwLFxuICAgIG1lc3NhZ2U6ICdXZWJSVEMgZXJyb3IuJyxcbiAgfSxcbiAgUDJQX1dFQlJUQ19TRFA6IHtcbiAgICBjb2RlOiAyNTAyLFxuICAgIG1lc3NhZ2U6ICdTRFAgZXJyb3IuJyxcbiAgfSxcbn07XG5cbi8qKlxuICogQGZ1bmN0aW9uIGdldEVycm9yQnlDb2RlXG4gKiBAZGVzYyBHZXQgZXJyb3Igb2JqZWN0IGJ5IGVycm9yIGNvZGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JDb2RlIEVycm9yIGNvZGUuXG4gKiBAcmV0dXJuIHtPd3QuUDJQLkVycm9yfSBFcnJvciBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvckJ5Q29kZShlcnJvckNvZGUpIHtcbiAgY29uc3QgY29kZUVycm9yTWFwID0ge1xuICAgIDIxMDA6IGVycm9ycy5QMlBfQ09OTl9TRVJWRVJfVU5LTk9XTixcbiAgICAyMTAxOiBlcnJvcnMuUDJQX0NPTk5fU0VSVkVSX1VOQVZBSUxBQkxFLFxuICAgIDIxMDI6IGVycm9ycy5QMlBfQ09OTl9TRVJWRVJfQlVTWSxcbiAgICAyMTAzOiBlcnJvcnMuUDJQX0NPTk5fU0VSVkVSX05PVF9TVVBQT1JURUQsXG4gICAgMjExMDogZXJyb3JzLlAyUF9DT05OX0NMSUVOVF9VTktOT1dOLFxuICAgIDIxMTE6IGVycm9ycy5QMlBfQ09OTl9DTElFTlRfTk9UX0lOSVRJQUxJWkVELFxuICAgIDIxMjA6IGVycm9ycy5QMlBfQ09OTl9BVVRIX1VOS05PV04sXG4gICAgMjEyMTogZXJyb3JzLlAyUF9DT05OX0FVVEhfRkFJTEVELFxuICAgIDIyMDE6IGVycm9ycy5QMlBfTUVTU0FHSU5HX1RBUkdFVF9VTlJFQUNIQUJMRSxcbiAgICAyNDAwOiBlcnJvcnMuUDJQX0NMSUVOVF9VTktOT1dOLFxuICAgIDI0MDE6IGVycm9ycy5QMlBfQ0xJRU5UX1VOU1VQUE9SVEVEX01FVEhPRCxcbiAgICAyNDAyOiBlcnJvcnMuUDJQX0NMSUVOVF9JTExFR0FMX0FSR1VNRU5ULFxuICAgIDI0MDM6IGVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUsXG4gICAgMjQwNDogZXJyb3JzLlAyUF9DTElFTlRfTk9UX0FMTE9XRUQsXG4gICAgMjUwMDogZXJyb3JzLlAyUF9XRUJSVENfVU5LTk9XTixcbiAgICAyNTAxOiBlcnJvcnMuUDJQX1dFQlJUQ19TRFAsXG4gIH07XG4gIHJldHVybiBjb2RlRXJyb3JNYXBbZXJyb3JDb2RlXTtcbn1cblxuLyoqXG4gKiBAY2xhc3MgUDJQRXJyb3JcbiAqIEBjbGFzc0Rlc2MgVGhlIFAyUEVycm9yIG9iamVjdCByZXByZXNlbnRzIGFuIGVycm9yIGluIFAyUCBtb2RlLlxuICogQG1lbWJlck9mIE93dC5QMlBcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFAyUEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihlcnJvciwgbWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIGlmICh0eXBlb2YgZXJyb3IgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLmNvZGUgPSBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2RlID0gZXJyb3IuY29kZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQge2RlZmF1bHQgYXMgUDJQQ2xpZW50fSBmcm9tICcuL3AycGNsaWVudC5qcyc7XG5leHBvcnQge1AyUEVycm9yfSBmcm9tICcuL2Vycm9yLmpzJztcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZ2xvYmFsIE1hcCwgUHJvbWlzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyLCBPd3RFdmVudH0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5pbXBvcnQgKiBhcyBFcnJvck1vZHVsZSBmcm9tICcuL2Vycm9yLmpzJztcbmltcG9ydCBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWwgZnJvbSAnLi9wZWVyY29ubmVjdGlvbi1jaGFubmVsLmpzJztcblxuY29uc3QgQ29ubmVjdGlvblN0YXRlID0ge1xuICBSRUFEWTogMSxcbiAgQ09OTkVDVElORzogMixcbiAgQ09OTkVDVEVEOiAzLFxufTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8qKlxuICogQGNsYXNzIFAyUENsaWVudENvbmZpZ3VyYXRpb25cbiAqIEBjbGFzc0Rlc2MgQ29uZmlndXJhdGlvbiBmb3IgUDJQQ2xpZW50LlxuICogQG1lbWJlck9mIE93dC5QMlBcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUDJQQ2xpZW50Q29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAvKipcbiAgICogQG1lbWJlciB7P0FycmF5PE93dC5CYXNlLkF1ZGlvRW5jb2RpbmdQYXJhbWV0ZXJzPn0gYXVkaW9FbmNvZGluZ1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgRW5jb2RpbmcgcGFyYW1ldGVycyBmb3IgcHVibGlzaGluZyBhdWRpbyB0cmFja3MuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudENvbmZpZ3VyYXRpb25cbiAgICovXG4gIHRoaXMuYXVkaW9FbmNvZGluZyA9IHVuZGVmaW5lZDtcbiAgLyoqXG4gICAqIEBtZW1iZXIgez9BcnJheTxPd3QuQmFzZS5WaWRlb0VuY29kaW5nUGFyYW1ldGVycz59IHZpZGVvRW5jb2RpbmdcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIEVuY29kaW5nIHBhcmFtZXRlcnMgZm9yIHB1Ymxpc2hpbmcgdmlkZW8gdHJhY2tzLlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRDb25maWd1cmF0aW9uXG4gICAqL1xuICB0aGlzLnZpZGVvRW5jb2RpbmcgPSB1bmRlZmluZWQ7XG4gIC8qKlxuICAgKiBAbWVtYmVyIHs/UlRDQ29uZmlndXJhdGlvbn0gcnRjQ29uZmlndXJhdGlvblxuICAgKiBAaW5zdGFuY2VcbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50Q29uZmlndXJhdGlvblxuICAgKiBAZGVzYyBJdCB3aWxsIGJlIHVzZWQgZm9yIGNyZWF0aW5nIFBlZXJDb25uZWN0aW9uLlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvd2VicnRjLyNydGNjb25maWd1cmF0aW9uLWRpY3Rpb25hcnl8UlRDQ29uZmlndXJhdGlvbiBEaWN0aW9uYXJ5IG9mIFdlYlJUQyAxLjB9LlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBGb2xsb3dpbmcgb2JqZWN0IGNhbiBiZSBzZXQgdG8gcDJwQ2xpZW50Q29uZmlndXJhdGlvbi5ydGNDb25maWd1cmF0aW9uLlxuICAgKiB7XG4gICAqICAgaWNlU2VydmVyczogW3tcbiAgICogICAgICB1cmxzOiBcInN0dW46ZXhhbXBsZS5jb206MzQ3OFwiXG4gICAqICAgfSwge1xuICAgKiAgICAgdXJsczogW1xuICAgKiAgICAgICBcInR1cm46ZXhhbXBsZS5jb206MzQ3OD90cmFuc3BvcnQ9dWRwXCIsXG4gICAqICAgICAgIFwidHVybjpleGFtcGxlLmNvbTozNDc4P3RyYW5zcG9ydD10Y3BcIlxuICAgKiAgICAgXSxcbiAgICogICAgICBjcmVkZW50aWFsOiBcInBhc3N3b3JkXCIsXG4gICAqICAgICAgdXNlcm5hbWU6IFwidXNlcm5hbWVcIlxuICAgKiAgIH1cbiAgICogfVxuICAgKi9cbiAgdGhpcy5ydGNDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xufTtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAY2xhc3MgUDJQQ2xpZW50XG4gKiBAY2xhc3NEZXNjIFRoZSBQMlBDbGllbnQgaGFuZGxlcyBQZWVyQ29ubmVjdGlvbnMgYmV0d2VlbiBkaWZmZXJlbnQgY2xpZW50cy5cbiAqIEV2ZW50czpcbiAqXG4gKiB8IEV2ZW50IE5hbWUgICAgICAgICAgICB8IEFyZ3VtZW50IFR5cGUgICAgfCBGaXJlZCB3aGVuICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBzdHJlYW1hZGRlZCAgICAgICAgICAgfCBTdHJlYW1FdmVudCAgICAgIHwgQSBuZXcgc3RyZWFtIGlzIHNlbnQgZnJvbSByZW1vdGUgZW5kcG9pbnQuIHxcbiAqIHwgbWVzc2FnZXJlY2VpdmVkICAgICAgIHwgTWVzc2FnZUV2ZW50ICAgICB8IEEgbmV3IG1lc3NhZ2UgaXMgcmVjZWl2ZWQuIHxcbiAqIHwgc2VydmVyZGlzY29ubmVjdGVkICAgIHwgT3d0RXZlbnQgICAgICAgICB8IERpc2Nvbm5lY3RlZCBmcm9tIHNpZ25hbGluZyBzZXJ2ZXIuIHxcbiAqXG4gKiBAbWVtYmVyb2YgT3d0LlAyUFxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7P093dC5QMlAuUDJQQ2xpZW50Q29uZmlndXJhdGlvbiB9IGNvbmZpZ3VyYXRpb24gQ29uZmlndXJhdGlvbiBmb3IgT3d0LlAyUC5QMlBDbGllbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gc2lnbmFsaW5nQ2hhbm5lbCBBIGNoYW5uZWwgZm9yIHNlbmRpbmcgYW5kIHJlY2VpdmluZyBzaWduYWxpbmcgbWVzc2FnZXMuXG4gKi9cbmNvbnN0IFAyUENsaWVudCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24sIHNpZ25hbGluZ0NoYW5uZWwpIHtcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldyBFdmVudERpc3BhdGNoZXIoKSk7XG4gIGNvbnN0IGNvbmZpZyA9IGNvbmZpZ3VyYXRpb247XG4gIGNvbnN0IHNpZ25hbGluZyA9IHNpZ25hbGluZ0NoYW5uZWw7XG4gIGNvbnN0IGNoYW5uZWxzID0gbmV3IE1hcCgpOyAvLyBNYXAgb2YgUGVlckNvbm5lY3Rpb25DaGFubmVscy5cbiAgY29uc3QgY29ubmVjdGlvbklkcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHJlbW90ZSB1c2VyIElELCB2YWx1ZSBpcyBjdXJyZW50IHNlc3Npb24gSUQuXG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuICBsZXQgc3RhdGUgPSBDb25uZWN0aW9uU3RhdGUuUkVBRFk7XG4gIGxldCBteUlkO1xuXG4gIHNpZ25hbGluZy5vbk1lc3NhZ2UgPSBmdW5jdGlvbihvcmlnaW4sIG1lc3NhZ2UpIHtcbiAgICBMb2dnZXIuZGVidWcoJ1JlY2VpdmVkIHNpZ25hbGluZyBtZXNzYWdlIGZyb20gJyArIG9yaWdpbiArICc6ICcgKyBtZXNzYWdlKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcbiAgICBjb25zdCBjb25uZWN0aW9uSWQgPSBkYXRhLmNvbm5lY3Rpb25JZDtcbiAgICBpZiAoc2VsZi5hbGxvd2VkUmVtb3RlSWRzLmluZGV4T2Yob3JpZ2luKSA8IDApIHtcbiAgICAgIHNlbmRTaWduYWxpbmdNZXNzYWdlKFxuICAgICAgICAgIG9yaWdpbiwgZGF0YS5jb25uZWN0aW9uSWQsICdjaGF0LWNsb3NlZCcsXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfREVOSUVEKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbm5lY3Rpb25JZHMuaGFzKG9yaWdpbikgJiZcbiAgICAgICAgY29ubmVjdGlvbklkcy5nZXQob3JpZ2luKSAhPT0gY29ubmVjdGlvbklkICYmICFpc1BvbGl0ZVBlZXIob3JpZ2luKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgICAgICAnQ29sbGlzaW9uIGRldGVjdGVkLCBpZ25vcmUgdGhpcyBtZXNzYWdlIGJlY2F1c2UgY3VycmVudCBlbmRwb2ludCBpcyBpbXBvbGl0ZSBwZWVyLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF0YS50eXBlID09PSAnY2hhdC1jbG9zZWQnKSB7XG4gICAgICBpZiAoY2hhbm5lbHMuaGFzKG9yaWdpbikpIHtcbiAgICAgICAgZ2V0T3JDcmVhdGVDaGFubmVsKG9yaWdpbiwgY29ubmVjdGlvbklkKS5vbk1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIGNoYW5uZWxzLmRlbGV0ZShvcmlnaW4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnZXRPckNyZWF0ZUNoYW5uZWwob3JpZ2luLCBjb25uZWN0aW9uSWQpLm9uTWVzc2FnZShkYXRhKTtcbiAgfTtcblxuICBzaWduYWxpbmcub25TZXJ2ZXJEaXNjb25uZWN0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZSA9IENvbm5lY3Rpb25TdGF0ZS5SRUFEWTtcbiAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IE93dEV2ZW50KCdzZXJ2ZXJkaXNjb25uZWN0ZWQnKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXIge2FycmF5fSBhbGxvd2VkUmVtb3RlSWRzXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgT25seSBhbGxvd2VkIHJlbW90ZSBlbmRwb2ludCBJRHMgYXJlIGFibGUgdG8gcHVibGlzaCBzdHJlYW0gb3Igc2VuZCBtZXNzYWdlIHRvIGN1cnJlbnQgZW5kcG9pbnQuIFJlbW92aW5nIGFuIElEIGZyb20gYWxsb3dlZFJlbW90ZUlkcyBkb2VzIHN0b3AgZXhpc3RpbmcgY29ubmVjdGlvbiB3aXRoIGNlcnRhaW4gZW5kcG9pbnQuIFBsZWFzZSBjYWxsIHN0b3AgdG8gc3RvcCB0aGUgUGVlckNvbm5lY3Rpb24uXG4gICAqL1xuICB0aGlzLmFsbG93ZWRSZW1vdGVJZHM9W107XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjb25uZWN0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBDb25uZWN0IHRvIHNpZ25hbGluZyBzZXJ2ZXIuIFNpbmNlIHNpZ25hbGluZyBjYW4gYmUgY3VzdG9taXplZCwgdGhpcyBtZXRob2QgZG9lcyBub3QgZGVmaW5lIGhvdyBhIHRva2VuIGxvb2tzIGxpa2UuIFNESyBwYXNzZXMgdG9rZW4gdG8gc2lnbmFsaW5nIGNoYW5uZWwgd2l0aG91dCBjaGFuZ2VzLlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIEEgdG9rZW4gZm9yIGNvbm5lY3RpbmcgdG8gc2lnbmFsaW5nIHNlcnZlci4gVGhlIGZvcm1hdCBvZiB0aGlzIHRva2VuIGRlcGVuZHMgb24gc2lnbmFsaW5nIHNlcnZlcidzIHJlcXVpcmVtZW50LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPG9iamVjdCwgRXJyb3I+fSBJdCByZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIGFuIG9iamVjdCByZXR1cm5lZCBieSBzaWduYWxpbmcgY2hhbm5lbCBvbmNlIHNpZ25hbGluZyBjaGFubmVsIHJlcG9ydHMgY29ubmVjdGlvbiBoYXMgYmVlbiBlc3RhYmxpc2hlZC5cbiAgICovXG4gIHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgaWYgKHN0YXRlID09PSBDb25uZWN0aW9uU3RhdGUuUkVBRFkpIHtcbiAgICAgIHN0YXRlID0gQ29ubmVjdGlvblN0YXRlLkNPTk5FQ1RJTkc7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdJbnZhbGlkIGNvbm5lY3Rpb24gc3RhdGU6ICcgKyBzdGF0ZSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNpZ25hbGluZy5jb25uZWN0KHRva2VuKS50aGVuKChpZCkgPT4ge1xuICAgICAgICBteUlkID0gaWQ7XG4gICAgICAgIHN0YXRlID0gQ29ubmVjdGlvblN0YXRlLkNPTk5FQ1RFRDtcbiAgICAgICAgcmVzb2x2ZShteUlkKTtcbiAgICAgIH0sIChlcnJDb2RlKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoRXJyb3JNb2R1bGUuZ2V0RXJyb3JCeUNvZGUoXG4gICAgICAgICAgICBlcnJDb2RlKSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBkaXNjb25uZWN0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBEaXNjb25uZWN0IGZyb20gdGhlIHNpZ25hbGluZyBjaGFubmVsLiBJdCBzdG9wcyBhbGwgZXhpc3Rpbmcgc2Vzc2lvbnMgd2l0aCByZW1vdGUgZW5kcG9pbnRzLlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRcbiAgICovXG4gIHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChzdGF0ZSA9PSBDb25uZWN0aW9uU3RhdGUuUkVBRFkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCkgPT4ge1xuICAgICAgY2hhbm5lbC5zdG9wKCk7XG4gICAgfSk7XG4gICAgY2hhbm5lbHMuY2xlYXIoKTtcbiAgICBzaWduYWxpbmcuZGlzY29ubmVjdCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcHVibGlzaFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgUHVibGlzaCBhIHN0cmVhbSB0byBhIHJlbW90ZSBlbmRwb2ludC5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZW1vdGVJZCBSZW1vdGUgZW5kcG9pbnQncyBJRC5cbiAgICogQHBhcmFtIHtPd3QuQmFzZS5Mb2NhbFN0cmVhbX0gc3RyZWFtIEFuIE93dC5CYXNlLkxvY2FsU3RyZWFtIHRvIGJlIHB1Ymxpc2hlZC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxPd3QuQmFzZS5QdWJsaWNhdGlvbiwgRXJyb3I+fSBBIHByb21pc2VkIHRoYXQgcmVzb2x2ZXMgd2hlbiByZW1vdGUgc2lkZSByZWNlaXZlZCB0aGUgY2VydGFpbiBzdHJlYW0uIEhvd2V2ZXIsIHJlbW90ZSBlbmRwb2ludCBtYXkgbm90IGRpc3BsYXkgdGhpcyBzdHJlYW0sIG9yIGlnbm9yZSBpdC5cbiAgICovXG4gIHRoaXMucHVibGlzaCA9IGZ1bmN0aW9uKHJlbW90ZUlkLCBzdHJlYW0pIHtcbiAgICBpZiAoc3RhdGUgIT09IENvbm5lY3Rpb25TdGF0ZS5DT05ORUNURUQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSxcbiAgICAgICAgICAnUDJQIENsaWVudCBpcyBub3QgY29ubmVjdGVkIHRvIHNpZ25hbGluZyBjaGFubmVsLicpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWxsb3dlZFJlbW90ZUlkcy5pbmRleE9mKHJlbW90ZUlkKSA8IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfTk9UX0FMTE9XRUQpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShnZXRPckNyZWF0ZUNoYW5uZWwocmVtb3RlSWQpLnB1Ymxpc2goc3RyZWFtKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzZW5kXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBTZW5kIGEgbWVzc2FnZSB0byByZW1vdGUgZW5kcG9pbnQuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlSWQgUmVtb3RlIGVuZHBvaW50J3MgSUQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIE1lc3NhZ2UgdG8gYmUgc2VudC4gSXQgc2hvdWxkIGJlIGEgc3RyaW5nLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHVuZGVmaW5lZCwgRXJyb3I+fSBJdCByZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB3aGVuIHJlbW90ZSBlbmRwb2ludCByZWNlaXZlZCBjZXJ0YWluIG1lc3NhZ2UuXG4gICAqL1xuICB0aGlzLnNlbmQ9ZnVuY3Rpb24ocmVtb3RlSWQsIG1lc3NhZ2UpIHtcbiAgICBpZiAoc3RhdGUgIT09IENvbm5lY3Rpb25TdGF0ZS5DT05ORUNURUQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSxcbiAgICAgICAgICAnUDJQIENsaWVudCBpcyBub3QgY29ubmVjdGVkIHRvIHNpZ25hbGluZyBjaGFubmVsLicpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWxsb3dlZFJlbW90ZUlkcy5pbmRleE9mKHJlbW90ZUlkKSA8IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfTk9UX0FMTE9XRUQpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShnZXRPckNyZWF0ZUNoYW5uZWwocmVtb3RlSWQpLnNlbmQobWVzc2FnZSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc3RvcFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgQ2xlYW4gYWxsIHJlc291cmNlcyBhc3NvY2lhdGVkIHdpdGggZ2l2ZW4gcmVtb3RlIGVuZHBvaW50LiBJdCBtYXkgaW5jbHVkZSBSVENQZWVyQ29ubmVjdGlvbiwgUlRDUnRwVHJhbnNjZWl2ZXIgYW5kIFJUQ0RhdGFDaGFubmVsLiBJdCBzdGlsbCBwb3NzaWJsZSB0byBwdWJsaXNoIGEgc3RyZWFtLCBvciBzZW5kIGEgbWVzc2FnZSB0byBnaXZlbiByZW1vdGUgZW5kcG9pbnQgYWZ0ZXIgc3RvcC5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZW1vdGVJZCBSZW1vdGUgZW5kcG9pbnQncyBJRC5cbiAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgKi9cbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24ocmVtb3RlSWQpIHtcbiAgICBpZiAoIWNoYW5uZWxzLmhhcyhyZW1vdGVJZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICdObyBQZWVyQ29ubmVjdGlvbiBiZXR3ZWVuIGN1cnJlbnQgZW5kcG9pbnQgYW5kIHNwZWNpZmljIHJlbW90ZSAnICtcbiAgICAgICAgICAnZW5kcG9pbnQuJyxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNoYW5uZWxzLmdldChyZW1vdGVJZCkuc3RvcCgpO1xuICAgIGNoYW5uZWxzLmRlbGV0ZShyZW1vdGVJZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBnZXRTdGF0c1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgR2V0IHN0YXRzIG9mIHVuZGVybHlpbmcgUGVlckNvbm5lY3Rpb24uXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlSWQgUmVtb3RlIGVuZHBvaW50J3MgSUQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UlRDU3RhdHNSZXBvcnQsIEVycm9yPn0gSXQgcmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCBhbiBSVENTdGF0c1JlcG9ydCBvciByZWplY3Qgd2l0aCBhbiBFcnJvciBpZiB0aGVyZSBpcyBubyBjb25uZWN0aW9uIHdpdGggc3BlY2lmaWMgdXNlci5cbiAgICovXG4gIHRoaXMuZ2V0U3RhdHMgPSBmdW5jdGlvbihyZW1vdGVJZCkge1xuICAgIGlmICghY2hhbm5lbHMuaGFzKHJlbW90ZUlkKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFLFxuICAgICAgICAgICdObyBQZWVyQ29ubmVjdGlvbiBiZXR3ZWVuIGN1cnJlbnQgZW5kcG9pbnQgYW5kIHNwZWNpZmljIHJlbW90ZSAnICtcbiAgICAgICAgICAnZW5kcG9pbnQuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbm5lbHMuZ2V0KHJlbW90ZUlkKS5nZXRTdGF0cygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZ2V0UGVlckNvbm5lY3Rpb25cbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIEdldCB1bmRlcmx5aW5nIFBlZXJDb25uZWN0aW9uLlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlbW90ZUlkIFJlbW90ZSBlbmRwb2ludCdzIElELlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJUQ1BlZXJDb25uZWN0aW9uLCBFcnJvcj59IEl0IHJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkXG4gICAqICAgICB3aXRoIGFuIFJUQ1BlZXJDb25uZWN0aW9uIG9yIHJlamVjdCB3aXRoIGFuIEVycm9yIGlmIHRoZXJlIGlzIG5vXG4gICAqICAgICBjb25uZWN0aW9uIHdpdGggc3BlY2lmaWMgdXNlci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRoaXMuZ2V0UGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihyZW1vdGVJZCkge1xuICAgIGlmICghY2hhbm5lbHMuaGFzKHJlbW90ZUlkKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFLFxuICAgICAgICAgICdObyBQZWVyQ29ubmVjdGlvbiBiZXR3ZWVuIGN1cnJlbnQgZW5kcG9pbnQgYW5kIHNwZWNpZmljIHJlbW90ZSAnICtcbiAgICAgICAgICAgICAgJ2VuZHBvaW50LicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5uZWxzLmdldChyZW1vdGVJZCkucGVlckNvbm5lY3Rpb247XG4gIH07XG5cbiAgY29uc3Qgc2VuZFNpZ25hbGluZ01lc3NhZ2UgPSBmdW5jdGlvbihyZW1vdGVJZCwgY29ubmVjdGlvbklkLCB0eXBlLCBtZXNzYWdlKSB7XG4gICAgY29uc3QgbXNnID0ge1xuICAgICAgdHlwZSxcbiAgICAgIGNvbm5lY3Rpb25JZCxcbiAgICB9O1xuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICBtc2cuZGF0YSA9IG1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiBzaWduYWxpbmcuc2VuZChyZW1vdGVJZCwgSlNPTi5zdHJpbmdpZnkobXNnKSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3JNb2R1bGUuZ2V0RXJyb3JCeUNvZGUoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRydWUgaWYgY3VycmVudCBlbmRwb2ludCBpcyBhbiBpbXBvbGl0ZSBwZWVyLCB3aGljaCBjb250cm9scyB0aGVcbiAgLy8gc2Vzc2lvbi5cbiAgY29uc3QgaXNQb2xpdGVQZWVyID0gZnVuY3Rpb24ocmVtb3RlSWQpIHtcbiAgICByZXR1cm4gbXlJZCA8IHJlbW90ZUlkO1xuICB9O1xuXG4gIC8vIElmIGEgY29ubmVjdGlvbiB3aXRoIHJlbW90ZUlkIHdpdGggYSBkaWZmZXJlbnQgc2Vzc2lvbiBJRCBleGlzdHMsIGl0IHdpbGxcbiAgLy8gYmUgc3RvcHBlZCBhbmQgYSBuZXcgY29ubmVjdGlvbiB3aWxsIGJlIGNyZWF0ZWQuXG4gIGNvbnN0IGdldE9yQ3JlYXRlQ2hhbm5lbCA9IGZ1bmN0aW9uKHJlbW90ZUlkLCBjb25uZWN0aW9uSWQpIHtcbiAgICAvLyBJZiBgY29ubmVjdGlvbklkYCBpcyBub3QgZGVmaW5lZCwgdXNlIHRoZSBsYXRlc3Qgb25lIG9yIGdlbmVyYXRlIGEgbmV3XG4gICAgLy8gb25lLlxuICAgIGlmICghY29ubmVjdGlvbklkICYmIGNvbm5lY3Rpb25JZHMuaGFzKHJlbW90ZUlkKSkge1xuICAgICAgY29ubmVjdGlvbklkID0gY29ubmVjdGlvbklkcy5nZXQocmVtb3RlSWQpO1xuICAgIH1cbiAgICAvLyBEZWxldGUgb2xkIGNoYW5uZWwgaWYgY29ubmVjdGlvbiBkb2Vzbid0IG1hdGNoLlxuICAgIGlmIChjb25uZWN0aW9uSWRzLmhhcyhyZW1vdGVJZCkgJiZcbiAgICAgICAgY29ubmVjdGlvbklkcy5nZXQocmVtb3RlSWQpICE9IGNvbm5lY3Rpb25JZCkge1xuICAgICAgc2VsZi5zdG9wKHJlbW90ZUlkKTtcbiAgICB9XG4gICAgaWYgKCFjb25uZWN0aW9uSWQpIHtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25JZExpbWl0ID0gMTAwMDAwO1xuICAgICAgY29ubmVjdGlvbklkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY29ubmVjdGlvbklkTGltaXQpO1xuICAgIH1cbiAgICBjb25uZWN0aW9uSWRzLnNldChyZW1vdGVJZCwgY29ubmVjdGlvbklkKTtcbiAgICBpZiAoIWNoYW5uZWxzLmhhcyhyZW1vdGVJZCkpIHtcbiAgICAgIC8vIENvbnN0cnVjdCBhbiBzaWduYWxpbmcgc2VuZGVyL3JlY2VpdmVyIGZvciBQMlBQZWVyQ29ubmVjdGlvbi5cbiAgICAgIGNvbnN0IHNpZ25hbGluZ0ZvckNoYW5uZWwgPSBPYmplY3QuY3JlYXRlKEV2ZW50RGlzcGF0Y2hlcik7XG4gICAgICBzaWduYWxpbmdGb3JDaGFubmVsLnNlbmRTaWduYWxpbmdNZXNzYWdlID0gc2VuZFNpZ25hbGluZ01lc3NhZ2U7XG4gICAgICBjb25zdCBwY2MgPSBuZXcgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsKFxuICAgICAgICAgIGNvbmZpZywgbXlJZCwgcmVtb3RlSWQsIGNvbm5lY3Rpb25JZCwgc2lnbmFsaW5nRm9yQ2hhbm5lbCk7XG4gICAgICBwY2MuYWRkRXZlbnRMaXN0ZW5lcignc3RyZWFtYWRkZWQnLCAoc3RyZWFtRXZlbnQpPT57XG4gICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChzdHJlYW1FdmVudCk7XG4gICAgICB9KTtcbiAgICAgIHBjYy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlcmVjZWl2ZWQnLCAobWVzc2FnZUV2ZW50KT0+e1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobWVzc2FnZUV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgcGNjLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICBpZiAoY2hhbm5lbHMuaGFzKHJlbW90ZUlkKSkge1xuICAgICAgICAgIGNoYW5uZWxzLmRlbGV0ZShyZW1vdGVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGlvbklkcy5kZWxldGUocmVtb3RlSWQpO1xuICAgICAgfSk7XG4gICAgICBjaGFubmVscy5zZXQocmVtb3RlSWQsIHBjYyk7XG4gICAgfVxuICAgIHJldHVybiBjaGFubmVscy5nZXQocmVtb3RlSWQpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUDJQQ2xpZW50O1xuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vLyBUaGlzIGZpbGUgZG9lc24ndCBoYXZlIHB1YmxpYyBBUElzLlxuLyogZXNsaW50LWRpc2FibGUgdmFsaWQtanNkb2MgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MgKi9cbi8qIGdsb2JhbCBFdmVudCwgTWFwLCBQcm9taXNlLCBSVENJY2VDYW5kaWRhdGUsIG5hdmlnYXRvciAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vYmFzZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtFdmVudERpc3BhdGNoZXIsIE1lc3NhZ2VFdmVudCwgT3d0RXZlbnR9IGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuaW1wb3J0IHtQdWJsaWNhdGlvbn0gZnJvbSAnLi4vYmFzZS9wdWJsaWNhdGlvbi5qcyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi9iYXNlL3V0aWxzLmpzJztcbmltcG9ydCAqIGFzIEVycm9yTW9kdWxlIGZyb20gJy4vZXJyb3IuanMnO1xuaW1wb3J0ICogYXMgU3RyZWFtTW9kdWxlIGZyb20gJy4uL2Jhc2Uvc3RyZWFtLmpzJztcbmltcG9ydCAqIGFzIFNkcFV0aWxzIGZyb20gJy4uL2Jhc2Uvc2RwdXRpbHMuanMnO1xuaW1wb3J0IHtUcmFuc3BvcnRTZXR0aW5ncywgVHJhbnNwb3J0VHlwZX0gZnJvbSAnLi4vYmFzZS90cmFuc3BvcnQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWxFdmVudFxuICogQGRlc2MgRXZlbnQgZm9yIFN0cmVhbS5cbiAqIEBtZW1iZXJPZiBPd3QuUDJQXG4gKiBAcHJpdmF0ZVxuICogKi9cbmV4cG9ydCBjbGFzcyBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWxFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2MgKi9cbiAgY29uc3RydWN0b3IoaW5pdCkge1xuICAgIHN1cGVyKGluaXQpO1xuICAgIHRoaXMuc3RyZWFtID0gaW5pdC5zdHJlYW07XG4gIH1cbn1cblxuY29uc3QgRGF0YUNoYW5uZWxMYWJlbCA9IHtcbiAgTUVTU0FHRTogJ21lc3NhZ2UnLFxuICBGSUxFOiAnZmlsZScsXG59O1xuXG5jb25zdCBTaWduYWxpbmdUeXBlID0ge1xuICBERU5JRUQ6ICdjaGF0LWRlbmllZCcsXG4gIENMT1NFRDogJ2NoYXQtY2xvc2VkJyxcbiAgTkVHT1RJQVRJT05fTkVFREVEOiAnY2hhdC1uZWdvdGlhdGlvbi1uZWVkZWQnLFxuICBUUkFDS19TT1VSQ0VTOiAnY2hhdC10cmFjay1zb3VyY2VzJyxcbiAgU1RSRUFNX0lORk86ICdjaGF0LXN0cmVhbS1pbmZvJyxcbiAgU0RQOiAnY2hhdC1zaWduYWwnLFxuICBUUkFDS1NfQURERUQ6ICdjaGF0LXRyYWNrcy1hZGRlZCcsXG4gIFRSQUNLU19SRU1PVkVEOiAnY2hhdC10cmFja3MtcmVtb3ZlZCcsXG4gIERBVEFfUkVDRUlWRUQ6ICdjaGF0LWRhdGEtcmVjZWl2ZWQnLFxuICBVQTogJ2NoYXQtdWEnLFxufTtcblxuY29uc3Qgc3lzSW5mbyA9IFV0aWxzLnN5c0luZm8oKTtcblxuLyoqXG4gKiBAY2xhc3MgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsXG4gKiBAZGVzYyBBIFAyUFBlZXJDb25uZWN0aW9uQ2hhbm5lbCBtYW5hZ2VzIGEgUGVlckNvbm5lY3Rpb24gb2JqZWN0LCBoYW5kbGVzIGFsbFxuICogaW50ZXJhY3Rpb25zIGJldHdlZW4gdGhpcyBlbmRwb2ludCAobG9jYWwpIGFuZCBhIHJlbW90ZSBlbmRwb2ludC4gT25seSBvbmVcbiAqIFBlZXJDb25uZWN0aW9uQ2hhbm5lbCBpcyBhbGl2ZSBmb3IgYSBsb2NhbCAtIHJlbW90ZSBlbmRwb2ludCBwYWlyIGF0IGFueVxuICogZ2l2ZW4gdGltZS5cbiAqIEBtZW1iZXJPZiBPd3QuUDJQXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWwgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAvLyB8c2lnbmFsaW5nfCBpcyBhbiBvYmplY3QgaGFzIGEgbWV0aG9kIHxzZW5kU2lnbmFsaW5nTWVzc2FnZXwuXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jICovXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgY29uZmlnLCBsb2NhbElkLCByZW1vdGVJZCwgY29ubmVjdGlvbklkLCBzaWduYWxpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9yZW1vdGVJZCA9IHJlbW90ZUlkO1xuICAgIHRoaXMuX2Nvbm5lY3Rpb25JZCA9IGNvbm5lY3Rpb25JZDtcbiAgICB0aGlzLl9zaWduYWxpbmcgPSBzaWduYWxpbmc7XG4gICAgdGhpcy5fcGMgPSBudWxsO1xuICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBzdHJlYW1zIHB1Ymxpc2hlZCwgdmFsdWUgaXMgaXRzIHB1YmxpY2F0aW9uLlxuICAgIHRoaXMuX3BlbmRpbmdTdHJlYW1zID0gW107IC8vIFN0cmVhbXMgZ29pbmcgdG8gYmUgYWRkZWQgdG8gUGVlckNvbm5lY3Rpb24uXG4gICAgdGhpcy5fcHVibGlzaGluZ1N0cmVhbXMgPSBbXTsgLy8gU3RyZWFtcyBoYXZlIGJlZW4gYWRkZWQgdG8gUGVlckNvbm5lY3Rpb24sIGJ1dCBkb2VzIG5vdCByZWNlaXZlIGFjayBmcm9tIHJlbW90ZSBzaWRlLlxuICAgIHRoaXMuX3BlbmRpbmdVbnB1Ymxpc2hTdHJlYW1zID0gW107IC8vIFN0cmVhbXMgZ29pbmcgdG8gYmUgcmVtb3ZlZC5cbiAgICAvLyBLZXkgaXMgTWVkaWFTdHJlYW0ncyBJRCwgdmFsdWUgaXMgYW4gb2JqZWN0IHtzb3VyY2U6e2F1ZGlvOnN0cmluZywgdmlkZW86c3RyaW5nfSwgYXR0cmlidXRlczogb2JqZWN0LCBzdHJlYW06IFJlbW90ZVN0cmVhbSwgbWVkaWFTdHJlYW06IE1lZGlhU3RyZWFtfS4gYHN0cmVhbWAgYW5kIGBtZWRpYVN0cmVhbWAgd2lsbCBiZSBzZXQgd2hlbiBgdHJhY2tgIGV2ZW50IGlzIGZpcmVkIG9uIGBSVENQZWVyQ29ubmVjdGlvbmAuIGBtZWRpYVN0cmVhbWAgd2lsbCBiZSBgbnVsbGAgYWZ0ZXIgYHN0cmVhbWFkZGVkYCBldmVudCBpcyBmaXJlZCBvbiBgUDJQQ2xpZW50YC4gT3RoZXIgcHJvcGVydGVzIHdpbGwgYmUgc2V0IHVwb24gYFNUUkVBTV9JTkZPYCBldmVudCBmcm9tIHNpZ25hbGluZyBjaGFubmVsLlxuICAgIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8gPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fcmVtb3RlU3RyZWFtcyA9IFtdO1xuICAgIHRoaXMuX3JlbW90ZVRyYWNrU291cmNlSW5mbyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIE1lZGlhU3RyZWFtVHJhY2sncyBJRCwgdmFsdWUgaXMgc291cmNlIGluZm8uXG4gICAgdGhpcy5fcHVibGlzaFByb21pc2VzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgTWVkaWFTdHJlYW0ncyBJRCwgdmFsdWUgaXMgYW4gb2JqZWN0IGhhcyB8cmVzb2x2ZXwgYW5kIHxyZWplY3R8LlxuICAgIHRoaXMuX3VucHVibGlzaFByb21pc2VzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgTWVkaWFTdHJlYW0ncyBJRCwgdmFsdWUgaXMgYW4gb2JqZWN0IGhhcyB8cmVzb2x2ZXwgYW5kIHxyZWplY3R8LlxuICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1UcmFja3MgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBNZWRpYVN0cmVhbSdzIElELCB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0aGUgSUQgb2YgaXRzIE1lZGlhU3RyZWFtVHJhY2tzIHRoYXQgaGF2ZW4ndCBiZWVuIGFja2VkLlxuICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbVRyYWNrcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIE1lZGlhU3RyZWFtJ3MgSUQsIHZhbHVlIGlzIGFuIGFycmF5IG9mIHRoZSBJRCBvZiBpdHMgTWVkaWFTdHJlYW1UcmFja3MgdGhhdCBoYXZlbid0IGJlZW4gcmVtb3ZlZC5cbiAgICB0aGlzLl9pc05lZ290aWF0aW9uTmVlZGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcmVtb3RlU2lkZVN1cHBvcnRzUmVtb3ZlU3RyZWFtID0gdHJ1ZTtcbiAgICB0aGlzLl9yZW1vdGVTaWRlSWdub3Jlc0RhdGFDaGFubmVsQWNrcyA9IGZhbHNlO1xuICAgIHRoaXMuX3JlbW90ZUljZUNhbmRpZGF0ZXMgPSBbXTtcbiAgICB0aGlzLl9kYXRhQ2hhbm5lbHMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBkYXRhIGNoYW5uZWwncyBsYWJlbCwgdmFsdWUgaXMgYSBSVENEYXRhQ2hhbm5lbC5cbiAgICB0aGlzLl9wZW5kaW5nTWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLl9kYXRhU2VxID0gMTsgLy8gU2VxdWVuY2UgbnVtYmVyIGZvciBkYXRhIGNoYW5uZWwgbWVzc2FnZXMuXG4gICAgdGhpcy5fc2VuZERhdGFQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIGRhdGEgc2VxdWVuY2UgbnVtYmVyLCB2YWx1ZSBpcyBhbiBvYmplY3QgaGFzIHxyZXNvbHZlfCBhbmQgfHJlamVjdHwuXG4gICAgdGhpcy5fYWRkZWRUcmFja0lkcyA9IFtdOyAvLyBUcmFja3MgdGhhdCBoYXZlIGJlZW4gYWRkZWQgYWZ0ZXIgcmVjZWl2aW5nIHJlbW90ZSBTRFAgYnV0IGJlZm9yZSBjb25uZWN0aW9uIGlzIGVzdGFibGlzaGVkLiBEcmFpbmluZyB0aGVzZSBtZXNzYWdlcyB3aGVuIElDRSBjb25uZWN0aW9uIHN0YXRlIGlzIGNvbm5lY3RlZC5cbiAgICB0aGlzLl9pc1BvbGl0ZVBlZXIgPSBsb2NhbElkIDwgcmVtb3RlSWQ7XG4gICAgdGhpcy5fc2V0dGluZ0xvY2FsU2RwID0gZmFsc2U7XG4gICAgdGhpcy5fc2V0dGluZ1JlbW90ZVNkcCA9IGZhbHNlO1xuICAgIHRoaXMuX2Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fY3JlYXRlUGVlckNvbm5lY3Rpb24oKTtcbiAgICB0aGlzLl9zZW5kVWEoc3lzSW5mbyk7XG4gIH1cblxuICBnZXQgcGVlckNvbm5lY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BjO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBwdWJsaXNoXG4gICAqIEBkZXNjIFB1Ymxpc2ggYSBzdHJlYW0gdG8gdGhlIHJlbW90ZSBlbmRwb2ludC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHB1Ymxpc2goc3RyZWFtKSB7XG4gICAgaWYgKCEoc3RyZWFtIGluc3RhbmNlb2YgU3RyZWFtTW9kdWxlLkxvY2FsU3RyZWFtKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgc3RyZWFtLicpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuaGFzKHN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSUxMRUdBTF9BUkdVTUVOVCxcbiAgICAgICAgICAnRHVwbGljYXRlZCBzdHJlYW0uJykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXJlQWxsVHJhY2tzRW5kZWQoc3RyZWFtLm1lZGlhU3RyZWFtKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFLFxuICAgICAgICAgICdBbGwgdHJhY2tzIGFyZSBlbmRlZC4nKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zZW5kU3RyZWFtSW5mbyhzdHJlYW0pLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5fYWRkU3RyZWFtKHN0cmVhbS5tZWRpYVN0cmVhbSk7XG4gICAgICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgY29uc3QgdHJhY2tJZHMgPSBBcnJheS5mcm9tKHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRUcmFja3MoKSxcbiAgICAgICAgICAgICh0cmFjaykgPT4gdHJhY2suaWQpO1xuICAgICAgICB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtVHJhY2tzLnNldChzdHJlYW0ubWVkaWFTdHJlYW0uaWQsXG4gICAgICAgICAgICB0cmFja0lkcyk7XG4gICAgICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5zZXQoc3RyZWFtLm1lZGlhU3RyZWFtLmlkLCB7XG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc2VuZFxuICAgKiBAZGVzYyBTZW5kIGEgbWVzc2FnZSB0byB0aGUgcmVtb3RlIGVuZHBvaW50LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2VuZChtZXNzYWdlKSB7XG4gICAgaWYgKCEodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWVzc2FnZS4nKSk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpZDogdGhpcy5fZGF0YVNlcSsrLFxuICAgICAgZGF0YTogbWVzc2FnZSxcbiAgICB9O1xuICAgIGlmICghdGhpcy5fZGF0YUNoYW5uZWxzLmhhcyhEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpKSB7XG4gICAgICB0aGlzLl9jcmVhdGVEYXRhQ2hhbm5lbChEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpO1xuICAgIH1cblxuICAgIGNvbnN0IGRjID0gdGhpcy5fZGF0YUNoYW5uZWxzLmdldChEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpO1xuICAgIGlmIChkYy5yZWFkeVN0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIHRoaXMuX2RhdGFDaGFubmVscy5nZXQoRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKVxuICAgICAgICAgIC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGVuZGluZ01lc3NhZ2VzLnB1c2goZGF0YSk7XG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLl9zZW5kRGF0YVByb21pc2VzLnNldChkYXRhLmlkLCB7XG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc3RvcFxuICAgKiBAZGVzYyBTdG9wIHRoZSBjb25uZWN0aW9uIHdpdGggcmVtb3RlIGVuZHBvaW50LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RvcCgpIHtcbiAgICB0aGlzLl9zdG9wKHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGdldFN0YXRzXG4gICAqIEBkZXNjIEdldCBzdGF0cyBmb3IgYSBzcGVjaWZpYyBNZWRpYVN0cmVhbS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFN0YXRzKG1lZGlhU3RyZWFtKSB7XG4gICAgaWYgKHRoaXMuX3BjKSB7XG4gICAgICBpZiAobWVkaWFTdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGMuZ2V0U3RhdHMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRyYWNrc1N0YXRzUmVwb3J0cyA9IFtdO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW21lZGlhU3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goKHRyYWNrKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZ2V0U3RhdHModHJhY2ssIHRyYWNrc1N0YXRzUmVwb3J0cyk7XG4gICAgICAgIH0pXSkudGhlbihcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRyYWNrc1N0YXRzUmVwb3J0cyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSkpO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRTdGF0cyhtZWRpYVN0cmVhbVRyYWNrLCByZXBvcnRzUmVzdWx0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3BjLmdldFN0YXRzKG1lZGlhU3RyZWFtVHJhY2spLnRoZW4oXG4gICAgICAgIChzdGF0c1JlcG9ydCkgPT4ge1xuICAgICAgICAgIHJlcG9ydHNSZXN1bHQucHVzaChzdGF0c1JlcG9ydCk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfYWRkU3RyZWFtXG4gICAqIEBkZXNjIENyZWF0ZSBSVENSdHBTZW5kZXJzIGZvciBhbGwgdHJhY2tzIGluIHRoZSBzdHJlYW0uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYWRkU3RyZWFtKHN0cmVhbSkge1xuICAgIGZvciAoY29uc3QgdHJhY2sgb2Ygc3RyZWFtLmdldFRyYWNrcygpKSB7XG4gICAgICB0aGlzLl9wYy5hZGRUcmFuc2NlaXZlcihcbiAgICAgICAgICB0cmFjaywge2RpcmVjdGlvbjogJ3NlbmRvbmx5Jywgc3RyZWFtczogW3N0cmVhbV19KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIG9uTWVzc2FnZVxuICAgKiBAZGVzYyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgUDJQQ2xpZW50IHdoZW4gdGhlcmUgaXMgbmV3IHNpZ25hbGluZyBtZXNzYWdlIGFycml2ZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBvbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHRoaXMuX1NpZ25hbGluZ01lc3NzYWdlSGFuZGxlcihtZXNzYWdlKTtcbiAgfVxuXG4gIF9zZW5kU2RwKHNkcCkge1xuICAgIHJldHVybiB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoXG4gICAgICAgIHRoaXMuX3JlbW90ZUlkLCB0aGlzLl9jb25uZWN0aW9uSWQsIFNpZ25hbGluZ1R5cGUuU0RQLCBzZHApO1xuICB9XG5cbiAgX3NlbmRVYShzeXNJbmZvKSB7XG4gICAgY29uc3QgdWEgPSB7c2RrOiBzeXNJbmZvLnNkaywgY2FwYWJpbGl0aWVzOiBzeXNJbmZvLmNhcGFiaWxpdGllc307XG4gICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5VQSwgdWEpO1xuICB9XG5cbiAgX3NlbmRTaWduYWxpbmdNZXNzYWdlKHR5cGUsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKFxuICAgICAgICB0aGlzLl9yZW1vdGVJZCwgdGhpcy5fY29ubmVjdGlvbklkLCB0eXBlLCBtZXNzYWdlKTtcbiAgfVxuXG4gIF9TaWduYWxpbmdNZXNzc2FnZUhhbmRsZXIobWVzc2FnZSkge1xuICAgIExvZ2dlci5kZWJ1ZygnQ2hhbm5lbCByZWNlaXZlZCBtZXNzYWdlOiAnICsgbWVzc2FnZSk7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgU2lnbmFsaW5nVHlwZS5VQTpcbiAgICAgICAgdGhpcy5faGFuZGxlUmVtb3RlQ2FwYWJpbGl0eShtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2lnbmFsaW5nVHlwZS5UUkFDS19TT1VSQ0VTOlxuICAgICAgICB0aGlzLl90cmFja1NvdXJjZXNIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLlNUUkVBTV9JTkZPOlxuICAgICAgICB0aGlzLl9zdHJlYW1JbmZvSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2lnbmFsaW5nVHlwZS5TRFA6XG4gICAgICAgIHRoaXMuX3NkcEhhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuVFJBQ0tTX0FEREVEOlxuICAgICAgICB0aGlzLl90cmFja3NBZGRlZEhhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuVFJBQ0tTX1JFTU9WRUQ6XG4gICAgICAgIHRoaXMuX3RyYWNrc1JlbW92ZWRIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLkRBVEFfUkVDRUlWRUQ6XG4gICAgICAgIHRoaXMuX2RhdGFSZWNlaXZlZEhhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuQ0xPU0VEOlxuICAgICAgICB0aGlzLl9jaGF0Q2xvc2VkSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIExvZ2dlci5lcnJvcignSW52YWxpZCBzaWduYWxpbmcgbWVzc2FnZSByZWNlaXZlZC4gVHlwZTogJyArXG4gICAgICAgICAgICBtZXNzYWdlLnR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX3RyYWNrc0FkZGVkSGFuZGxlclxuICAgKiBAZGVzYyBIYW5kbGUgdHJhY2sgYWRkZWQgZXZlbnQgZnJvbSByZW1vdGUgc2lkZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF90cmFja3NBZGRlZEhhbmRsZXIoaWRzKSB7XG4gICAgLy8gQ3VycmVudGx5LCB8aWRzfCBjb250YWlucyBhbGwgdHJhY2sgSURzIG9mIGEgTWVkaWFTdHJlYW0uIEZvbGxvd2luZyBhbGdvcml0aG0gYWxzbyBoYW5kbGVzIHxpZHN8IGlzIGEgcGFydCBvZiBhIE1lZGlhU3RyZWFtJ3MgdHJhY2tzLlxuICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XG4gICAgICAvLyBJdCBjb3VsZCBiZSBhIHByb2JsZW0gaWYgdGhlcmUgaXMgYSB0cmFjayBwdWJsaXNoZWQgd2l0aCBkaWZmZXJlbnQgTWVkaWFTdHJlYW1zLCBtb3ZpbmcgdG8gbWlkLlxuICAgICAgdGhpcy5fcHVibGlzaGluZ1N0cmVhbVRyYWNrcy5mb3JFYWNoKChtZWRpYVRyYWNrSWRzLCBtZWRpYVN0cmVhbUlkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVkaWFUcmFja0lkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChtZWRpYVRyYWNrSWRzW2ldID09PSBpZCkge1xuICAgICAgICAgICAgLy8gTW92ZSB0aGlzIHRyYWNrIGZyb20gcHVibGlzaGluZyB0cmFja3MgdG8gcHVibGlzaGVkIHRyYWNrcy5cbiAgICAgICAgICAgIGlmICghdGhpcy5fcHVibGlzaGVkU3RyZWFtVHJhY2tzLmhhcyhtZWRpYVN0cmVhbUlkKSkge1xuICAgICAgICAgICAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1UcmFja3Muc2V0KG1lZGlhU3RyZWFtSWQsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbVRyYWNrcy5nZXQobWVkaWFTdHJlYW1JZCkucHVzaChcbiAgICAgICAgICAgICAgICBtZWRpYVRyYWNrSWRzW2ldKTtcbiAgICAgICAgICAgIG1lZGlhVHJhY2tJZHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBSZXNvbHZpbmcgY2VydGFpbiBwdWJsaXNoIHByb21pc2Ugd2hlbiByZW1vdGUgZW5kcG9pbnQgcmVjZWl2ZWQgYWxsIHRyYWNrcyBvZiBhIE1lZGlhU3RyZWFtLlxuICAgICAgICAgIGlmIChtZWRpYVRyYWNrSWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3B1Ymxpc2hQcm9taXNlcy5oYXMobWVkaWFTdHJlYW1JZCkpIHtcbiAgICAgICAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Nhbm5vdCBmaW5kIHRoZSBwcm9taXNlIGZvciBwdWJsaXNoaW5nICcgK1xuICAgICAgICAgICAgICAgIG1lZGlhU3RyZWFtSWQpO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmVhbUluZGV4ID0gdGhpcy5fcHVibGlzaGluZ1N0cmVhbXMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50Lm1lZGlhU3RyZWFtLmlkID09IG1lZGlhU3RyZWFtSWQpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RyZWFtID0gdGhpcy5fcHVibGlzaGluZ1N0cmVhbXNbdGFyZ2V0U3RyZWFtSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5fcHVibGlzaGluZ1N0cmVhbXMuc3BsaWNlKHRhcmdldFN0cmVhbUluZGV4LCAxKTtcblxuICAgICAgICAgICAgLy8gU2V0IHRyYW5zY2VpdmVycyBmb3IgUHVibGljYXRpb24uXG4gICAgICAgICAgICBjb25zdCB0cmFuc3BvcnQgPVxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc3BvcnRTZXR0aW5ncyhUcmFuc3BvcnRUeXBlLldFQlJUQywgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC5ydHBUcmFuc2NlaXZlcnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHJhbnNjZWl2ZXIgb2YgdGhpcy5fcGMuZ2V0VHJhbnNjZWl2ZXJzKCkpIHtcbiAgICAgICAgICAgICAgaWYgKHRyYW5zY2VpdmVyLnNlbmRlcj8udHJhY2sgaW5cbiAgICAgICAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbVRyYWNrcy5nZXQobWVkaWFTdHJlYW1JZCkpIHtcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnQucnRwVHJhbnNjZWl2ZXJzLnB1c2godHJhbnNjZWl2ZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHB1YmxpY2F0aW9uID0gbmV3IFB1YmxpY2F0aW9uKFxuICAgICAgICAgICAgICAgIGlkLCB0cmFuc3BvcnQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3VucHVibGlzaCh0YXJnZXRTdHJlYW0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwdWJsaWNhdGlvbi5kaXNwYXRjaEV2ZW50KG5ldyBPd3RFdmVudCgnZW5kZWQnKSk7XG4gICAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBVc2UgZGVidWcgbW9kZSBiZWNhdXNlIHRoaXMgZXJyb3IgdXN1YWxseSBkb2Vzbid0IGJsb2NrIHN0b3BwaW5nIGEgcHVibGljYXRpb24uXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICdTb21ldGhpbmcgd3JvbmcgaGFwcGVuZWQgZHVyaW5nIHN0b3BwaW5nIGEgJytcbiAgICAgICAgICAgICAgICAgICAgICAgICdwdWJsaWNhdGlvbi4gJyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0U3RyZWFtIHx8ICF0YXJnZXRTdHJlYW0ubWVkaWFTdHJlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnUHVibGljYXRpb24gaXMgbm90IGF2YWlsYWJsZS4nKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGF0cyh0YXJnZXRTdHJlYW0ubWVkaWFTdHJlYW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtcy5zZXQodGFyZ2V0U3RyZWFtLCBwdWJsaWNhdGlvbik7XG4gICAgICAgICAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuZ2V0KG1lZGlhU3RyZWFtSWQpLnJlc29sdmUocHVibGljYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5fcHVibGlzaFByb21pc2VzLmRlbGV0ZShtZWRpYVN0cmVhbUlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX3RyYWNrc1JlbW92ZWRIYW5kbGVyXG4gICAqIEBkZXNjIEhhbmRsZSB0cmFjayByZW1vdmVkIGV2ZW50IGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdHJhY2tzUmVtb3ZlZEhhbmRsZXIoaWRzKSB7XG4gICAgLy8gQ3VycmVudGx5LCB8aWRzfCBjb250YWlucyBhbGwgdHJhY2sgSURzIG9mIGEgTWVkaWFTdHJlYW0uIEZvbGxvd2luZyBhbGdvcml0aG0gYWxzbyBoYW5kbGVzIHxpZHN8IGlzIGEgcGFydCBvZiBhIE1lZGlhU3RyZWFtJ3MgdHJhY2tzLlxuICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XG4gICAgICAvLyBJdCBjb3VsZCBiZSBhIHByb2JsZW0gaWYgdGhlcmUgaXMgYSB0cmFjayBwdWJsaXNoZWQgd2l0aCBkaWZmZXJlbnQgTWVkaWFTdHJlYW1zLlxuICAgICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtVHJhY2tzLmZvckVhY2goKG1lZGlhVHJhY2tJZHMsIG1lZGlhU3RyZWFtSWQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZWRpYVRyYWNrSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG1lZGlhVHJhY2tJZHNbaV0gPT09IGlkKSB7XG4gICAgICAgICAgICBtZWRpYVRyYWNrSWRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX2RhdGFSZWNlaXZlZEhhbmRsZXJcbiAgICogQGRlc2MgSGFuZGxlIGRhdGEgcmVjZWl2ZWQgZXZlbnQgZnJvbSByZW1vdGUgc2lkZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9kYXRhUmVjZWl2ZWRIYW5kbGVyKGlkKSB7XG4gICAgaWYgKCF0aGlzLl9zZW5kRGF0YVByb21pc2VzLmhhcyhpZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdSZWNlaXZlZCB1bmtub3duIGRhdGEgcmVjZWl2ZWQgbWVzc2FnZS4gSUQ6ICcgKyBpZCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMuZ2V0KGlkKS5yZXNvbHZlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfc2RwSGFuZGxlclxuICAgKiBAZGVzYyBIYW5kbGUgU0RQIHJlY2VpdmVkIGV2ZW50IGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2RwSGFuZGxlcihzZHApIHtcbiAgICBpZiAoc2RwLnR5cGUgPT09ICdvZmZlcicpIHtcbiAgICAgIHRoaXMuX29uT2ZmZXIoc2RwKTtcbiAgICB9IGVsc2UgaWYgKHNkcC50eXBlID09PSAnYW5zd2VyJykge1xuICAgICAgdGhpcy5fb25BbnN3ZXIoc2RwKTtcbiAgICB9IGVsc2UgaWYgKHNkcC50eXBlID09PSAnY2FuZGlkYXRlcycpIHtcbiAgICAgIHRoaXMuX29uUmVtb3RlSWNlQ2FuZGlkYXRlKHNkcCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfdHJhY2tTb3VyY2VzSGFuZGxlclxuICAgKiBAZGVzYyBSZWNlaXZlZCB0cmFjayBzb3VyY2UgaW5mb3JtYXRpb24gZnJvbSByZW1vdGUgc2lkZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF90cmFja1NvdXJjZXNIYW5kbGVyKGRhdGEpIHtcbiAgICBmb3IgKGNvbnN0IGluZm8gb2YgZGF0YSkge1xuICAgICAgdGhpcy5fcmVtb3RlVHJhY2tTb3VyY2VJbmZvLnNldChpbmZvLmlkLCBpbmZvLnNvdXJjZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfc3RyZWFtSW5mb0hhbmRsZXJcbiAgICogQGRlc2MgUmVjZWl2ZWQgc3RyZWFtIGluZm9ybWF0aW9uIGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc3RyZWFtSW5mb0hhbmRsZXIoZGF0YSkge1xuICAgIGlmICghZGF0YSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ1VuZXhwZWN0ZWQgc3RyZWFtIGluZm8uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uc2V0KGRhdGEuaWQsIHtcbiAgICAgIHNvdXJjZTogZGF0YS5zb3VyY2UsXG4gICAgICBhdHRyaWJ1dGVzOiBkYXRhLmF0dHJpYnV0ZXMsXG4gICAgICBzdHJlYW06IG51bGwsXG4gICAgICBtZWRpYVN0cmVhbTogbnVsbCxcbiAgICAgIHRyYWNrSWRzOiBkYXRhLnRyYWNrcywgLy8gVHJhY2sgSURzIG1heSBub3QgbWF0Y2ggYXQgc2VuZGVyIGFuZCByZWNlaXZlciBzaWRlcy4gS2VlcCBpdCBmb3IgbGVnYWN5IHBvcnBvc2VzLlxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfY2hhdENsb3NlZEhhbmRsZXJcbiAgICogQGRlc2MgUmVjZWl2ZWQgY2hhdCBjbG9zZWQgZXZlbnQgZnJvbSByZW1vdGUgc2lkZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jaGF0Q2xvc2VkSGFuZGxlcihkYXRhKSB7XG4gICAgdGhpcy5fZGlzcG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuX3N0b3AoZGF0YSwgZmFsc2UpO1xuICB9XG5cbiAgX29uT2ZmZXIoc2RwKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdBYm91dCB0byBzZXQgcmVtb3RlIGRlc2NyaXB0aW9uLiBTaWduYWxpbmcgc3RhdGU6ICcgK1xuICAgICAgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUpO1xuICAgIGlmICh0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSAhPT0gJ3N0YWJsZScgfHwgdGhpcy5fc2V0dGluZ0xvY2FsU2RwKSB7XG4gICAgICBpZiAodGhpcy5faXNQb2xpdGVQZWVyKSB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZygnUm9sbGJhY2suJyk7XG4gICAgICAgIHRoaXMuX3NldHRpbmdMb2NhbFNkcCA9IHRydWU7XG4gICAgICAgIC8vIHNldExvY2FsRGVzY3JpcHRpb24ocm9sbGJhY2spIGlzIG5vdCBzdXBwb3J0ZWQgb24gU2FmYXJpIHJpZ2h0IG5vdy5cbiAgICAgICAgLy8gVGVzdCBjYXNlIFwiV2ViUlRDIGNvbGxpc2lvbiBzaG91bGQgYmUgcmVzb2x2ZWQuXCIgaXMgZXhwZWN0ZWQgdG8gZmFpbC5cbiAgICAgICAgLy8gU2VlXG4gICAgICAgIC8vIGh0dHBzOi8vd3B0LmZ5aS9yZXN1bHRzL3dlYnJ0Yy9SVENQZWVyQ29ubmVjdGlvbi1zZXRMb2NhbERlc2NyaXB0aW9uLXJvbGxiYWNrLmh0bWw/cT13ZWJydGMmcnVuX2lkPTU2NjIwNjIzMjE1OTg0NjQmcnVuX2lkPTU3NTYxMzk1MjAxMzEwNzImcnVuX2lkPTU3NTQ2Mzc1NTY2NDU4ODgmcnVuX2lkPTU3NjQzMzQwNDkyOTYzODQuXG4gICAgICAgIHRoaXMuX3BjLnNldExvY2FsRGVzY3JpcHRpb24oKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9zZXR0aW5nTG9jYWxTZHAgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2dnZXIuZGVidWcoJ0NvbGxpc2lvbiBkZXRlY3RlZC4gSWdub3JlIHRoaXMgb2ZmZXIuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc2RwLnNkcCA9IHRoaXMuX3NldFJ0cFNlbmRlck9wdGlvbnMoc2RwLnNkcCwgdGhpcy5fY29uZmlnKTtcbiAgICBjb25zdCBzZXNzaW9uRGVzY3JpcHRpb24gPSBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHNkcCk7XG4gICAgdGhpcy5fc2V0dGluZ1JlbW90ZVNkcCA9IHRydWU7XG4gICAgdGhpcy5fcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oc2Vzc2lvbkRlc2NyaXB0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3NldHRpbmdSZW1vdGVTZHAgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NyZWF0ZUFuZFNlbmRBbnN3ZXIoKTtcbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnU2V0IHJlbW90ZSBkZXNjcmlwdGlvbiBmYWlsZWQuIE1lc3NhZ2U6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHRoaXMuX3N0b3AoZXJyb3IsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uQW5zd2VyKHNkcCkge1xuICAgIExvZ2dlci5kZWJ1ZygnQWJvdXQgdG8gc2V0IHJlbW90ZSBkZXNjcmlwdGlvbi4gU2lnbmFsaW5nIHN0YXRlOiAnICtcbiAgICAgIHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlKTtcbiAgICBzZHAuc2RwID0gdGhpcy5fc2V0UnRwU2VuZGVyT3B0aW9ucyhzZHAuc2RwLCB0aGlzLl9jb25maWcpO1xuICAgIGNvbnN0IHNlc3Npb25EZXNjcmlwdGlvbiA9IG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oc2RwKTtcbiAgICB0aGlzLl9zZXR0aW5nUmVtb3RlU2RwID0gdHJ1ZTtcbiAgICB0aGlzLl9wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKFxuICAgICAgICBzZXNzaW9uRGVzY3JpcHRpb24pKS50aGVuKCgpID0+IHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnU2V0IHJlbW90ZSBkZXNjcmlwaXRvbiBzdWNjZXNzZnVsbHkuJyk7XG4gICAgICB0aGlzLl9zZXR0aW5nUmVtb3RlU2RwID0gZmFsc2U7XG4gICAgICB0aGlzLl9kcmFpblBlbmRpbmdNZXNzYWdlcygpO1xuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdTZXQgcmVtb3RlIGRlc2NyaXB0aW9uIGZhaWxlZC4gTWVzc2FnZTogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgdGhpcy5fc3RvcChlcnJvciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBfb25Mb2NhbEljZUNhbmRpZGF0ZShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAgIHRoaXMuX3NlbmRTZHAoe1xuICAgICAgICB0eXBlOiAnY2FuZGlkYXRlcycsXG4gICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSxcbiAgICAgICAgc2RwTWlkOiBldmVudC5jYW5kaWRhdGUuc2RwTWlkLFxuICAgICAgICBzZHBNTGluZUluZGV4OiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCxcbiAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICBMb2dnZXIud2FybmluZygnRmFpbGVkIHRvIHNlbmQgY2FuZGlkYXRlLicpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnRW1wdHkgY2FuZGlkYXRlLicpO1xuICAgIH1cbiAgfVxuXG4gIF9vblJlbW90ZVRyYWNrQWRkZWQoZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ1JlbW90ZSB0cmFjayBhZGRlZC4nKTtcbiAgICBmb3IgKGNvbnN0IHN0cmVhbSBvZiBldmVudC5zdHJlYW1zKSB7XG4gICAgICBpZiAoIXRoaXMuX3JlbW90ZVN0cmVhbUluZm8uaGFzKHN0cmVhbS5pZCkpIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ01pc3Npbmcgc3RyZWFtIGluZm8uJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoc3RyZWFtLmlkKS5zdHJlYW0pIHtcbiAgICAgICAgdGhpcy5fc2V0U3RyZWFtVG9SZW1vdGVTdHJlYW1JbmZvKHN0cmVhbSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb25uZWN0ZWQnIHx8XG4gICAgICAgdGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29tcGxldGVkJykge1xuICAgICAgdGhpcy5fY2hlY2tJY2VDb25uZWN0aW9uU3RhdGVBbmRGaXJlRXZlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWRkZWRUcmFja0lkcy5jb25jYXQoZXZlbnQudHJhY2suaWQpO1xuICAgIH1cbiAgfVxuXG4gIF9vblJlbW90ZVN0cmVhbUFkZGVkKGV2ZW50KSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdSZW1vdGUgc3RyZWFtIGFkZGVkLicpO1xuICAgIGlmICghdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5oYXMoZXZlbnQuc3RyZWFtLmlkKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Nhbm5vdCBmaW5kIHNvdXJjZSBpbmZvIGZvciBzdHJlYW0gJyArIGV2ZW50LnN0cmVhbS5pZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb25uZWN0ZWQnIHx8XG4gICAgICB0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICB0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLlRSQUNLU19BRERFRCxcbiAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChldmVudC5zdHJlYW0uaWQpLnRyYWNrSWRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWRkZWRUcmFja0lkcyA9IHRoaXMuX2FkZGVkVHJhY2tJZHMuY29uY2F0KFxuICAgICAgICAgIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KGV2ZW50LnN0cmVhbS5pZCkudHJhY2tJZHMpO1xuICAgIH1cbiAgICBjb25zdCBhdWRpb1RyYWNrU291cmNlID0gdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoZXZlbnQuc3RyZWFtLmlkKVxuICAgICAgICAuc291cmNlLmF1ZGlvO1xuICAgIGNvbnN0IHZpZGVvVHJhY2tTb3VyY2UgPSB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChldmVudC5zdHJlYW0uaWQpXG4gICAgICAgIC5zb3VyY2UudmlkZW87XG4gICAgY29uc3Qgc291cmNlSW5mbyA9IG5ldyBTdHJlYW1Nb2R1bGUuU3RyZWFtU291cmNlSW5mbyhhdWRpb1RyYWNrU291cmNlLFxuICAgICAgICB2aWRlb1RyYWNrU291cmNlKTtcbiAgICBpZiAoVXRpbHMuaXNTYWZhcmkoKSkge1xuICAgICAgaWYgKCFzb3VyY2VJbmZvLmF1ZGlvKSB7XG4gICAgICAgIGV2ZW50LnN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2goKHRyYWNrKSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RyZWFtLnJlbW92ZVRyYWNrKHRyYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoIXNvdXJjZUluZm8udmlkZW8pIHtcbiAgICAgICAgZXZlbnQuc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkuZm9yRWFjaCgodHJhY2spID0+IHtcbiAgICAgICAgICBldmVudC5zdHJlYW0ucmVtb3ZlVHJhY2sodHJhY2spO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KGV2ZW50LnN0cmVhbS5pZCkuYXR0cmlidXRlcztcbiAgICBjb25zdCBzdHJlYW0gPSBuZXcgU3RyZWFtTW9kdWxlLlJlbW90ZVN0cmVhbSh1bmRlZmluZWQsIHRoaXMuX3JlbW90ZUlkLFxuICAgICAgICBldmVudC5zdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpO1xuICAgIGlmIChzdHJlYW0pIHtcbiAgICAgIHRoaXMuX3JlbW90ZVN0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgY29uc3Qgc3RyZWFtRXZlbnQgPSBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbUV2ZW50KCdzdHJlYW1hZGRlZCcsIHtcbiAgICAgICAgc3RyZWFtOiBzdHJlYW0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChzdHJlYW1FdmVudCk7XG4gICAgfVxuICB9XG5cbiAgX29uUmVtb3RlU3RyZWFtUmVtb3ZlZChldmVudCkge1xuICAgIExvZ2dlci5kZWJ1ZygnUmVtb3RlIHN0cmVhbSByZW1vdmVkLicpO1xuICAgIGNvbnN0IGkgPSB0aGlzLl9yZW1vdGVTdHJlYW1zLmZpbmRJbmRleCgocykgPT4ge1xuICAgICAgcmV0dXJuIHMubWVkaWFTdHJlYW0uaWQgPT09IGV2ZW50LnN0cmVhbS5pZDtcbiAgICB9KTtcbiAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX3JlbW90ZVN0cmVhbXNbaV07XG4gICAgICB0aGlzLl9zdHJlYW1SZW1vdmVkKHN0cmVhbSk7XG4gICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICBfb25OZWdvdGlhdGlvbm5lZWRlZCgpIHtcbiAgICBpZiAodGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgPT09ICdzdGFibGUnICYmICF0aGlzLl9wYy5fc2V0dGluZ0xvY2FsU2RwICYmXG4gICAgICAgICF0aGlzLl9zZXR0aW5nUmVtb3RlU2RwKSB7XG4gICAgICB0aGlzLl9kb05lZ290aWF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pc05lZ290aWF0aW9uTmVlZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfb25SZW1vdGVJY2VDYW5kaWRhdGUoY2FuZGlkYXRlSW5mbykge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IG5ldyBSVENJY2VDYW5kaWRhdGUoe1xuICAgICAgY2FuZGlkYXRlOiBjYW5kaWRhdGVJbmZvLmNhbmRpZGF0ZSxcbiAgICAgIHNkcE1pZDogY2FuZGlkYXRlSW5mby5zZHBNaWQsXG4gICAgICBzZHBNTGluZUluZGV4OiBjYW5kaWRhdGVJbmZvLnNkcE1MaW5lSW5kZXgsXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX3BjLnJlbW90ZURlc2NyaXB0aW9uICYmIHRoaXMuX3BjLnJlbW90ZURlc2NyaXB0aW9uLnNkcCAhPT0gJycpIHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnQWRkIHJlbW90ZSBpY2UgY2FuZGlkYXRlcy4nKTtcbiAgICAgIHRoaXMuX3BjLmFkZEljZUNhbmRpZGF0ZShjYW5kaWRhdGUpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBMb2dnZXIud2FybmluZygnRXJyb3IgcHJvY2Vzc2luZyBJQ0UgY2FuZGlkYXRlOiAnICsgZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnQ2FjaGUgcmVtb3RlIGljZSBjYW5kaWRhdGVzLicpO1xuICAgICAgdGhpcy5fcmVtb3RlSWNlQ2FuZGlkYXRlcy5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgX29uU2lnbmFsaW5nU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ1NpZ25hbGluZyBzdGF0ZSBjaGFuZ2VkOiAnICsgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUpO1xuICAgIGlmICh0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ2hhdmUtcmVtb3RlLW9mZmVyJyB8fFxuICAgICAgICB0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ3N0YWJsZScpIHtcbiAgICAgIHRoaXMuX2RyYWluUGVuZGluZ1JlbW90ZUljZUNhbmRpZGF0ZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlID09PSAnc3RhYmxlJykge1xuICAgICAgdGhpcy5fbmVnb3RpYXRpbmcgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLl9pc05lZ290aWF0aW9uTmVlZGVkKSB7XG4gICAgICAgIHRoaXMuX29uTmVnb3RpYXRpb25uZWVkZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2RyYWluUGVuZGluZ1N0cmVhbXMoKTtcbiAgICAgICAgdGhpcy5fZHJhaW5QZW5kaW5nTWVzc2FnZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25JY2VDb25uZWN0aW9uU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjbG9zZWQnIHx8XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnZmFpbGVkJykge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9XRUJSVENfVU5LTk9XTixcbiAgICAgICAgICAnSUNFIGNvbm5lY3Rpb24gZmFpbGVkIG9yIGNsb3NlZC4nKTtcbiAgICAgIHRoaXMuX3N0b3AoZXJyb3IsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb25uZWN0ZWQnIHx8XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuVFJBQ0tTX0FEREVELFxuICAgICAgICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMpO1xuICAgICAgdGhpcy5fYWRkZWRUcmFja0lkcyA9IFtdO1xuICAgICAgdGhpcy5fY2hlY2tJY2VDb25uZWN0aW9uU3RhdGVBbmRGaXJlRXZlbnQoKTtcbiAgICB9XG4gIH1cblxuICBfb25EYXRhQ2hhbm5lbE1lc3NhZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBtZXNzYWdlPUpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgaWYgKCF0aGlzLl9yZW1vdGVTaWRlSWdub3Jlc0RhdGFDaGFubmVsQWNrcykge1xuICAgICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5EQVRBX1JFQ0VJVkVELCBtZXNzYWdlLmlkKTtcbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZUV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudCgnbWVzc2FnZXJlY2VpdmVkJywge1xuICAgICAgbWVzc2FnZTogbWVzc2FnZS5kYXRhLFxuICAgICAgb3JpZ2luOiB0aGlzLl9yZW1vdGVJZCxcbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobWVzc2FnZUV2ZW50KTtcbiAgfVxuXG4gIF9vbkRhdGFDaGFubmVsT3BlbihldmVudCkge1xuICAgIExvZ2dlci5kZWJ1ZygnRGF0YSBDaGFubmVsIGlzIG9wZW5lZC4nKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmxhYmVsID09PSBEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpIHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnRGF0YSBjaGFubmVsIGZvciBtZXNzYWdlcyBpcyBvcGVuZWQuJyk7XG4gICAgICB0aGlzLl9kcmFpblBlbmRpbmdNZXNzYWdlcygpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkRhdGFDaGFubmVsQ2xvc2UoZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0RhdGEgQ2hhbm5lbCBpcyBjbG9zZWQuJyk7XG4gIH1cblxuICBfc3RyZWFtUmVtb3ZlZChzdHJlYW0pIHtcbiAgICBpZiAoIXRoaXMuX3JlbW90ZVN0cmVhbUluZm8uaGFzKHN0cmVhbS5tZWRpYVN0cmVhbS5pZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzdHJlYW0gaW5mby4nKTtcbiAgICB9XG4gICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5UUkFDS1NfUkVNT1ZFRCxcbiAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoc3RyZWFtLm1lZGlhU3RyZWFtLmlkKS50cmFja0lkcyk7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgT3d0RXZlbnQoJ2VuZGVkJyk7XG4gICAgc3RyZWFtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgX2NyZWF0ZVBlZXJDb25uZWN0aW9uKCkge1xuICAgIGNvbnN0IHBjQ29uZmlndXJhdGlvbiA9IHRoaXMuX2NvbmZpZy5ydGNDb25maWd1cmF0aW9uIHx8IHt9O1xuICAgIHRoaXMuX3BjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlndXJhdGlvbik7XG4gICAgdGhpcy5fcGMub250cmFjayA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25SZW1vdGVUcmFja0FkZGVkLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgdGhpcy5fcGMub25pY2VjYW5kaWRhdGUgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uTG9jYWxJY2VDYW5kaWRhdGUuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICB0aGlzLl9wYy5vbnNpZ25hbGluZ3N0YXRlY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vblNpZ25hbGluZ1N0YXRlQ2hhbmdlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgdGhpcy5fcGMub25kYXRhY2hhbm5lbCA9IChldmVudCkgPT4ge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdPbiBkYXRhIGNoYW5uZWwuJyk7XG4gICAgICAvLyBTYXZlIHJlbW90ZSBjcmVhdGVkIGRhdGEgY2hhbm5lbC5cbiAgICAgIGlmICghdGhpcy5fZGF0YUNoYW5uZWxzLmhhcyhldmVudC5jaGFubmVsLmxhYmVsKSkge1xuICAgICAgICB0aGlzLl9kYXRhQ2hhbm5lbHMuc2V0KGV2ZW50LmNoYW5uZWwubGFiZWwsIGV2ZW50LmNoYW5uZWwpO1xuICAgICAgICBMb2dnZXIuZGVidWcoJ1NhdmUgcmVtb3RlIGNyZWF0ZWQgZGF0YSBjaGFubmVsLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fYmluZEV2ZW50c1RvRGF0YUNoYW5uZWwoZXZlbnQuY2hhbm5lbCk7XG4gICAgfTtcbiAgICB0aGlzLl9wYy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25JY2VDb25uZWN0aW9uU3RhdGVDaGFuZ2UuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICB0aGlzLl9wYy5vbm5lZ290aWF0aW9ubmVlZGVkID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25OZWdvdGlhdGlvbm5lZWRlZCgpO1xuICAgIH07XG4gIH1cblxuICBfZHJhaW5QZW5kaW5nU3RyZWFtcygpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0RyYWluaW5nIHBlbmRpbmcgc3RyZWFtcy4nKTtcbiAgICBpZiAodGhpcy5fcGMgJiYgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgPT09ICdzdGFibGUnKSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ1BlZXIgY29ubmVjdGlvbiBpcyByZWFkeSBmb3IgZHJhaW5pbmcgcGVuZGluZyBzdHJlYW1zLicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wZW5kaW5nU3RyZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9wZW5kaW5nU3RyZWFtc1tpXTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1N0cmVhbXMuc2hpZnQoKTtcbiAgICAgICAgaWYgKCFzdHJlYW0ubWVkaWFTdHJlYW0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hZGRTdHJlYW0oc3RyZWFtLm1lZGlhU3RyZWFtKTtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKCdBZGRlZCBzdHJlYW0gdG8gcGVlciBjb25uZWN0aW9uLicpO1xuICAgICAgICB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9wZW5kaW5nU3RyZWFtcy5sZW5ndGggPSAwO1xuICAgICAgZm9yIChjb25zdCBzdHJlYW0gb2YgdGhpcy5fcGVuZGluZ1VucHVibGlzaFN0cmVhbXMpIHtcbiAgICAgICAgaWYgKCFzdHJlYW0uc3RyZWFtKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9wYy5nZXRUcmFuc2NlaXZlcnMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLl9wYy5yZW1vdmVUcmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGZvciAoY29uc3QgdHJhbnNjZWl2ZXIgb2YgdGhpcy5fcGMuZ2V0VHJhbnNjZWl2ZXJzKCkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2Ygc3RyZWFtLnN0cmVhbS5nZXRUcmFja3MoKSkge1xuICAgICAgICAgICAgICBpZiAodHJhbnNjZWl2ZXIuc2VuZGVyLnRyYWNrID09IHRyYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zY2VpdmVyLmRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5Jykge1xuICAgICAgICAgICAgICAgICAgdHJhbnNjZWl2ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9wYy5yZW1vdmVUcmFjayh0cmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIExvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgICAgJ2dldFNlbmRlciBvciByZW1vdmVUcmFjayBpcyBub3Qgc3VwcG9ydGVkLCBmYWxsYmFjayB0byAnICtcbiAgICAgICAgICAgICAgJ3JlbW92ZVN0cmVhbS4nKTtcbiAgICAgICAgICB0aGlzLl9wYy5yZW1vdmVTdHJlYW0oc3RyZWFtLnN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdW5wdWJsaXNoUHJvbWlzZXMuZ2V0KHN0cmVhbS5zdHJlYW0uaWQpLnJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtcy5kZWxldGUoc3RyZWFtKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BlbmRpbmdVbnB1Ymxpc2hTdHJlYW1zLmxlbmd0aCA9IDA7XG4gICAgfVxuICB9XG5cbiAgX2RyYWluUGVuZGluZ1JlbW90ZUljZUNhbmRpZGF0ZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9yZW1vdGVJY2VDYW5kaWRhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0FkZCBjYW5kaWRhdGUnKTtcbiAgICAgIHRoaXMuX3BjLmFkZEljZUNhbmRpZGF0ZSh0aGlzLl9yZW1vdGVJY2VDYW5kaWRhdGVzW2ldKS5jYXRjaCgoZXJyb3IpPT57XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdFcnJvciBwcm9jZXNzaW5nIElDRSBjYW5kaWRhdGU6ICcrZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX3JlbW90ZUljZUNhbmRpZGF0ZXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIF9kcmFpblBlbmRpbmdNZXNzYWdlcygpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0RyYWluaW5nIHBlbmRpbmcgbWVzc2FnZXMuJyk7XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdNZXNzYWdlcy5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkYyA9IHRoaXMuX2RhdGFDaGFubmVscy5nZXQoRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKTtcbiAgICBpZiAoZGMgJiYgZGMucmVhZHlTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3BlbmRpbmdNZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBMb2dnZXIuZGVidWcoXG4gICAgICAgICAgICAnU2VuZGluZyBtZXNzYWdlIHZpYSBkYXRhIGNoYW5uZWw6ICcgKyB0aGlzLl9wZW5kaW5nTWVzc2FnZXNbaV0pO1xuICAgICAgICBkYy5zZW5kKEpTT04uc3RyaW5naWZ5KHRoaXMuX3BlbmRpbmdNZXNzYWdlc1tpXSkpO1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSB0aGlzLl9wZW5kaW5nTWVzc2FnZXNbaV0uaWQ7XG4gICAgICAgIGlmICh0aGlzLl9zZW5kRGF0YVByb21pc2VzLmhhcyhtZXNzYWdlSWQpKSB7XG4gICAgICAgICAgdGhpcy5fc2VuZERhdGFQcm9taXNlcy5nZXQobWVzc2FnZUlkKS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX3BlbmRpbmdNZXNzYWdlcy5sZW5ndGggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fcGMgJiYgdGhpcy5fcGMuY29ubmVjdGlvblN0YXRlICE9PSAnY2xvc2VkJyAmJiAhZGMpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZURhdGFDaGFubmVsKERhdGFDaGFubmVsTGFiZWwuTUVTU0FHRSk7XG4gICAgfVxuICB9XG5cbiAgX3NlbmRTdHJlYW1JbmZvKHN0cmVhbSkge1xuICAgIGlmICghc3RyZWFtIHx8ICFzdHJlYW0ubWVkaWFTdHJlYW0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSUxMRUdBTF9BUkdVTUVOVCk7XG4gICAgfVxuICAgIGNvbnN0IGluZm8gPSBbXTtcbiAgICBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkubWFwKCh0cmFjaykgPT4ge1xuICAgICAgaW5mby5wdXNoKHtcbiAgICAgICAgaWQ6IHRyYWNrLmlkLFxuICAgICAgICBzb3VyY2U6IHN0cmVhbS5zb3VyY2VbdHJhY2sua2luZF0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3RoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuVFJBQ0tfU09VUkNFUyxcbiAgICAgICAgaW5mbyksXG4gICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5TVFJFQU1fSU5GTywge1xuICAgICAgaWQ6IHN0cmVhbS5tZWRpYVN0cmVhbS5pZCxcbiAgICAgIGF0dHJpYnV0ZXM6IHN0cmVhbS5hdHRyaWJ1dGVzLFxuICAgICAgLy8gVHJhY2sgSURzIG1heSBub3QgbWF0Y2ggYXQgc2VuZGVyIGFuZCByZWNlaXZlciBzaWRlcy5cbiAgICAgIHRyYWNrczogQXJyYXkuZnJvbShpbmZvLCAoaXRlbSkgPT4gaXRlbS5pZCksXG4gICAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCBmb3IgU2FmYXJpLiBQbGVhc2UgdXNlIHRyYWNrLXNvdXJjZXMgaWYgcG9zc2libGUuXG4gICAgICBzb3VyY2U6IHN0cmVhbS5zb3VyY2UsXG4gICAgfSksXG4gICAgXSk7XG4gIH1cblxuICBfaGFuZGxlUmVtb3RlQ2FwYWJpbGl0eSh1YSkge1xuICAgIGlmICh1YS5zZGsgJiYgdWEuc2RrICYmIHVhLnNkay50eXBlID09PSAnSmF2YVNjcmlwdCcgJiYgdWEucnVudGltZSAmJlxuICAgICAgICB1YS5ydW50aW1lLm5hbWUgPT09ICdGaXJlZm94Jykge1xuICAgICAgdGhpcy5fcmVtb3RlU2lkZVN1cHBvcnRzUmVtb3ZlU3RyZWFtID0gZmFsc2U7XG4gICAgfSBlbHNlIHsgLy8gUmVtb3RlIHNpZGUgaXMgaU9TL0FuZHJvaWQvQysrIHdoaWNoIHVzZXMgR29vZ2xlJ3MgV2ViUlRDIHN0YWNrLlxuICAgICAgdGhpcy5fcmVtb3RlU2lkZVN1cHBvcnRzUmVtb3ZlU3RyZWFtID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHVhLmNhcGFiaWxpdGllcykge1xuICAgICAgdGhpcy5fcmVtb3RlU2lkZUlnbm9yZXNEYXRhQ2hhbm5lbEFja3MgPVxuICAgICAgICAgIHVhLmNhcGFiaWxpdGllcy5pZ25vcmVEYXRhQ2hhbm5lbEFja3M7XG4gICAgfVxuICB9XG5cbiAgX2RvTmVnb3RpYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZUFuZFNlbmRPZmZlcigpO1xuICB9XG5cbiAgX3NldENvZGVjT3JkZXIoc2RwKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hdWRpb0VuY29kaW5ncykge1xuICAgICAgY29uc3QgYXVkaW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbSh0aGlzLl9jb25maWcuYXVkaW9FbmNvZGluZ3MsXG4gICAgICAgICAgKGVuY29kaW5nUGFyYW1ldGVycykgPT4gZW5jb2RpbmdQYXJhbWV0ZXJzLmNvZGVjLm5hbWUpO1xuICAgICAgc2RwID0gU2RwVXRpbHMucmVvcmRlckNvZGVjcyhzZHAsICdhdWRpbycsIGF1ZGlvQ29kZWNOYW1lcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb25maWcudmlkZW9FbmNvZGluZ3MpIHtcbiAgICAgIGNvbnN0IHZpZGVvQ29kZWNOYW1lcyA9IEFycmF5LmZyb20odGhpcy5fY29uZmlnLnZpZGVvRW5jb2RpbmdzLFxuICAgICAgICAgIChlbmNvZGluZ1BhcmFtZXRlcnMpID0+IGVuY29kaW5nUGFyYW1ldGVycy5jb2RlYy5uYW1lKTtcbiAgICAgIHNkcCA9IFNkcFV0aWxzLnJlb3JkZXJDb2RlY3Moc2RwLCAndmlkZW8nLCB2aWRlb0NvZGVjTmFtZXMpO1xuICAgIH1cbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX3NldE1heEJpdHJhdGUoc2RwLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1ZGlvRW5jb2RpbmdzID09PSAnb2JqZWN0Jykge1xuICAgICAgc2RwID0gU2RwVXRpbHMuc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMuYXVkaW9FbmNvZGluZ3MpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudmlkZW9FbmNvZGluZ3MgPT09ICdvYmplY3QnKSB7XG4gICAgICBzZHAgPSBTZHBVdGlscy5zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucy52aWRlb0VuY29kaW5ncyk7XG4gICAgfVxuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBfc2V0UnRwU2VuZGVyT3B0aW9ucyhzZHAsIG9wdGlvbnMpIHtcbiAgICBzZHAgPSB0aGlzLl9zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIF9zZXRSdHBSZWNlaXZlck9wdGlvbnMoc2RwKSB7XG4gICAgc2RwID0gdGhpcy5fc2V0Q29kZWNPcmRlcihzZHApO1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBfY3JlYXRlQW5kU2VuZE9mZmVyKCkge1xuICAgIGlmICghdGhpcy5fcGMpIHtcbiAgICAgIExvZ2dlci5lcnJvcignUGVlciBjb25uZWN0aW9uIGhhdmUgbm90IGJlZW4gY3JlYXRlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faXNOZWdvdGlhdGlvbk5lZWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3BjLmNyZWF0ZU9mZmVyKCkudGhlbigoZGVzYykgPT4ge1xuICAgICAgZGVzYy5zZHAgPSB0aGlzLl9zZXRSdHBSZWNlaXZlck9wdGlvbnMoZGVzYy5zZHApO1xuICAgICAgaWYgKHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlID09PSAnc3RhYmxlJyAmJiAhdGhpcy5fc2V0dGluZ0xvY2FsU2RwICYmXG4gICAgICAgICAgIXRoaXMuX3NldHRpbmdSZW1vdGVTZHApIHtcbiAgICAgICAgdGhpcy5fc2V0dGluZ0xvY2FsU2RwID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BjLnNldExvY2FsRGVzY3JpcHRpb24oZGVzYykudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2V0dGluZ0xvY2FsU2RwID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbmRTZHAodGhpcy5fcGMubG9jYWxEZXNjcmlwdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBMb2dnZXIuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKEVycm9yTW9kdWxlLmVycm9ycy5QMlBfV0VCUlRDX1NEUCxcbiAgICAgICAgICBlLm1lc3NhZ2UpO1xuICAgICAgdGhpcy5fc3RvcChlcnJvciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQW5kU2VuZEFuc3dlcigpIHtcbiAgICB0aGlzLl9kcmFpblBlbmRpbmdTdHJlYW1zKCk7XG4gICAgdGhpcy5faXNOZWdvdGlhdGlvbk5lZWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3BjLmNyZWF0ZUFuc3dlcigpLnRoZW4oKGRlc2MpID0+IHtcbiAgICAgIGRlc2Muc2RwID0gdGhpcy5fc2V0UnRwUmVjZWl2ZXJPcHRpb25zKGRlc2Muc2RwKTtcbiAgICAgIHRoaXMuX2xvZ0N1cnJlbnRBbmRQZW5kaW5nTG9jYWxEZXNjcmlwdGlvbigpO1xuICAgICAgdGhpcy5fc2V0dGluZ0xvY2FsU2RwID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLl9wYy5zZXRMb2NhbERlc2NyaXB0aW9uKGRlc2MpLnRoZW4oKCk9PntcbiAgICAgICAgdGhpcy5fc2V0dGluZ0xvY2FsU2RwID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KS50aGVuKCgpPT57XG4gICAgICByZXR1cm4gdGhpcy5fc2VuZFNkcCh0aGlzLl9wYy5sb2NhbERlc2NyaXB0aW9uKTtcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKGUubWVzc2FnZSArICcgUGxlYXNlIGNoZWNrIHlvdXIgY29kZWMgc2V0dGluZ3MuJyk7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihFcnJvck1vZHVsZS5lcnJvcnMuUDJQX1dFQlJUQ19TRFAsXG4gICAgICAgICAgZS5tZXNzYWdlKTtcbiAgICAgIHRoaXMuX3N0b3AoZXJyb3IsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX2xvZ0N1cnJlbnRBbmRQZW5kaW5nTG9jYWxEZXNjcmlwdGlvbigpIHtcbiAgICBMb2dnZXIuaW5mbygnQ3VycmVudCBkZXNjcmlwdGlvbjogJyArIHRoaXMuX3BjLmN1cnJlbnRMb2NhbERlc2NyaXB0aW9uKTtcbiAgICBMb2dnZXIuaW5mbygnUGVuZGluZyBkZXNjcmlwdGlvbjogJyArIHRoaXMuX3BjLnBlbmRpbmdMb2NhbERlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIF9nZXRBbmREZWxldGVUcmFja1NvdXJjZUluZm8odHJhY2tzKSB7XG4gICAgaWYgKHRyYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0cmFja0lkID0gdHJhY2tzWzBdLmlkO1xuICAgICAgaWYgKHRoaXMuX3JlbW90ZVRyYWNrU291cmNlSW5mby5oYXModHJhY2tJZCkpIHtcbiAgICAgICAgY29uc3Qgc291cmNlSW5mbyA9IHRoaXMuX3JlbW90ZVRyYWNrU291cmNlSW5mby5nZXQodHJhY2tJZCk7XG4gICAgICAgIHRoaXMuX3JlbW90ZVRyYWNrU291cmNlSW5mby5kZWxldGUodHJhY2tJZCk7XG4gICAgICAgIHJldHVybiBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Nhbm5vdCBmaW5kIHNvdXJjZSBpbmZvIGZvciAnICsgdHJhY2tJZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3VucHVibGlzaChzdHJlYW0pIHtcbiAgICBpZiAobmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSB8fCAhdGhpcy5fcmVtb3RlU2lkZVN1cHBvcnRzUmVtb3ZlU3RyZWFtKSB7XG4gICAgICAvLyBBY3R1YWxseSB1bnB1Ymxpc2ggaXMgc3VwcG9ydGVkLiBJdCBpcyBhIGxpdHRsZSBiaXQgY29tcGxleCBzaW5jZVxuICAgICAgLy8gRmlyZWZveCBpbXBsZW1lbnRlZCBXZWJSVEMgc3BlYyB3aGlsZSBDaHJvbWUgaW1wbGVtZW50ZWQgYW4gb2xkIEFQSS5cbiAgICAgIExvZ2dlci5lcnJvcihcbiAgICAgICAgICAnU3RvcHBpbmcgYSBwdWJsaWNhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIG9uIEZpcmVmb3guIFBsZWFzZSB1c2UgJyArXG4gICAgICAgICAgJ1AyUENsaWVudC5zdG9wKCkgdG8gc3RvcCB0aGUgY29ubmVjdGlvbiB3aXRoIHJlbW90ZSBlbmRwb2ludC4nLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfVU5TVVBQT1JURURfTUVUSE9EKSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fcHVibGlzaGVkU3RyZWFtcy5oYXMoc3RyZWFtKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTExFR0FMX0FSR1VNRU5UKSk7XG4gICAgfVxuICAgIHRoaXMuX3BlbmRpbmdVbnB1Ymxpc2hTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fdW5wdWJsaXNoUHJvbWlzZXMuc2V0KHN0cmVhbS5tZWRpYVN0cmVhbS5pZCwge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fZHJhaW5QZW5kaW5nU3RyZWFtcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTWFrZSBzdXJlIHxfcGN8IGlzIGF2YWlsYWJsZSBiZWZvcmUgY2FsbGluZyB0aGlzIG1ldGhvZC5cbiAgX2NyZWF0ZURhdGFDaGFubmVsKGxhYmVsKSB7XG4gICAgaWYgKHRoaXMuX2RhdGFDaGFubmVscy5oYXMobGFiZWwpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnRGF0YSBjaGFubmVsIGxhYmVsZWQgJysgbGFiZWwrJyBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9wYykge1xuICAgICAgTG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICdQZWVyQ29ubmVjdGlvbiBpcyBub3QgYXZhaWxhYmxlIGJlZm9yZSBjcmVhdGluZyBEYXRhQ2hhbm5lbC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgTG9nZ2VyLmRlYnVnKCdDcmVhdGUgZGF0YSBjaGFubmVsLicpO1xuICAgIGNvbnN0IGRjID0gdGhpcy5fcGMuY3JlYXRlRGF0YUNoYW5uZWwobGFiZWwpO1xuICAgIHRoaXMuX2JpbmRFdmVudHNUb0RhdGFDaGFubmVsKGRjKTtcbiAgICB0aGlzLl9kYXRhQ2hhbm5lbHMuc2V0KERhdGFDaGFubmVsTGFiZWwuTUVTU0FHRSwgZGMpO1xuICB9XG5cbiAgX2JpbmRFdmVudHNUb0RhdGFDaGFubmVsKGRjKSB7XG4gICAgZGMub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkRhdGFDaGFubmVsTWVzc2FnZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIGRjLm9ub3BlbiA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25EYXRhQ2hhbm5lbE9wZW4uYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICBkYy5vbmNsb3NlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkRhdGFDaGFubmVsQ2xvc2UuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICBkYy5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0RhdGEgQ2hhbm5lbCBFcnJvcjogJyArIGV2ZW50KTtcbiAgICB9O1xuICB9XG5cbiAgLy8gUmV0dXJucyBhbGwgTWVkaWFTdHJlYW1zIGl0IGJlbG9uZ3MgdG8uXG4gIF9nZXRTdHJlYW1CeVRyYWNrKG1lZGlhU3RyZWFtVHJhY2spIHtcbiAgICBjb25zdCBzdHJlYW1zID0gW107XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIGluZm9dIG9mIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8pIHtcbiAgICAgIGlmICghaW5mby5zdHJlYW0gfHwgIWluZm8uc3RyZWFtLm1lZGlhU3RyZWFtKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB0cmFjayBvZiBpbmZvLnN0cmVhbS5tZWRpYVN0cmVhbS5nZXRUcmFja3MoKSkge1xuICAgICAgICBpZiAobWVkaWFTdHJlYW1UcmFjayA9PT0gdHJhY2spIHtcbiAgICAgICAgICBzdHJlYW1zLnB1c2goaW5mby5zdHJlYW0ubWVkaWFTdHJlYW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHJlYW1zO1xuICB9XG5cbiAgX2FyZUFsbFRyYWNrc0VuZGVkKG1lZGlhU3RyZWFtKSB7XG4gICAgZm9yIChjb25zdCB0cmFjayBvZiBtZWRpYVN0cmVhbS5nZXRUcmFja3MoKSkge1xuICAgICAgaWYgKHRyYWNrLnJlYWR5U3RhdGUgPT09ICdsaXZlJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX3N0b3AoZXJyb3IsIG5vdGlmeVJlbW90ZSkge1xuICAgIGxldCBwcm9taXNlRXJyb3IgPSBlcnJvcjtcbiAgICBpZiAoIXByb21pc2VFcnJvcikge1xuICAgICAgcHJvbWlzZUVycm9yID0gbmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX1VOS05PV04pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFsvKiBsYWJlbCAqLywgZGNdIG9mIHRoaXMuX2RhdGFDaGFubmVscykge1xuICAgICAgZGMuY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YUNoYW5uZWxzLmNsZWFyKCk7XG4gICAgaWYgKHRoaXMuX3BjICYmIHRoaXMuX3BjLmljZUNvbm5lY3Rpb25TdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcbiAgICAgIHRoaXMuX3BjLmNsb3NlKCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBwcm9taXNlXSBvZiB0aGlzLl9wdWJsaXNoUHJvbWlzZXMpIHtcbiAgICAgIHByb21pc2UucmVqZWN0KHByb21pc2VFcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5jbGVhcigpO1xuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBwcm9taXNlXSBvZiB0aGlzLl91bnB1Ymxpc2hQcm9taXNlcykge1xuICAgICAgcHJvbWlzZS5yZWplY3QocHJvbWlzZUVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5fdW5wdWJsaXNoUHJvbWlzZXMuY2xlYXIoKTtcbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHJvbWlzZV0gb2YgdGhpcy5fc2VuZERhdGFQcm9taXNlcykge1xuICAgICAgcHJvbWlzZS5yZWplY3QocHJvbWlzZUVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5fc2VuZERhdGFQcm9taXNlcy5jbGVhcigpO1xuICAgIC8vIEZpcmUgZW5kZWQgZXZlbnQgaWYgcHVibGljYXRpb24gb3IgcmVtb3RlIHN0cmVhbSBleGlzdHMuXG4gICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtcy5mb3JFYWNoKChwdWJsaWNhdGlvbikgPT4ge1xuICAgICAgcHVibGljYXRpb24uZGlzcGF0Y2hFdmVudChuZXcgT3d0RXZlbnQoJ2VuZGVkJykpO1xuICAgIH0pO1xuICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuY2xlYXIoKTtcbiAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLmZvckVhY2goKHN0cmVhbSkgPT4ge1xuICAgICAgc3RyZWFtLmRpc3BhdGNoRXZlbnQobmV3IE93dEV2ZW50KCdlbmRlZCcpKTtcbiAgICB9KTtcbiAgICB0aGlzLl9yZW1vdGVTdHJlYW1zID0gW107XG4gICAgaWYgKCF0aGlzLl9kaXNwb3NlZCkge1xuICAgICAgaWYgKG5vdGlmeVJlbW90ZSkge1xuICAgICAgICBsZXQgc2VuZEVycm9yO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBzZW5kRXJyb3IgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgLy8gQXZvaWQgdG8gbGVhayBkZXRhaWxlZCBlcnJvciB0byByZW1vdGUgc2lkZS5cbiAgICAgICAgICBzZW5kRXJyb3IubWVzc2FnZSA9ICdFcnJvciBoYXBwZW5lZCBhdCByZW1vdGUgc2lkZS4nO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuQ0xPU0VELCBzZW5kRXJyb3IpLmNhdGNoKFxuICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoJ0ZhaWxlZCB0byBzZW5kIGNsb3NlLicgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2VuZGVkJykpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRTdHJlYW1Ub1JlbW90ZVN0cmVhbUluZm8obWVkaWFTdHJlYW0pIHtcbiAgICBjb25zdCBpbmZvID0gdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQobWVkaWFTdHJlYW0uaWQpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBpbmZvLmF0dHJpYnV0ZXM7XG4gICAgY29uc3Qgc291cmNlSW5mbyA9IG5ldyBTdHJlYW1Nb2R1bGUuU3RyZWFtU291cmNlSW5mbyh0aGlzLl9yZW1vdGVTdHJlYW1JbmZvXG4gICAgICAgIC5nZXQobWVkaWFTdHJlYW0uaWQpLnNvdXJjZS5hdWRpbywgdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoXG4gICAgICAgIG1lZGlhU3RyZWFtLmlkKVxuICAgICAgICAuc291cmNlLnZpZGVvKTtcbiAgICBpbmZvLnN0cmVhbSA9IG5ldyBTdHJlYW1Nb2R1bGUuUmVtb3RlU3RyZWFtKFxuICAgICAgICB1bmRlZmluZWQsIHRoaXMuX3JlbW90ZUlkLCBtZWRpYVN0cmVhbSxcbiAgICAgICAgc291cmNlSW5mbywgYXR0cmlidXRlcyk7XG4gICAgaW5mby5tZWRpYVN0cmVhbSA9IG1lZGlhU3RyZWFtO1xuICAgIGNvbnN0IHN0cmVhbSA9IGluZm8uc3RyZWFtO1xuICAgIGlmIChzdHJlYW0pIHtcbiAgICAgIHRoaXMuX3JlbW90ZVN0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBMb2dnZXIud2FybmluZygnRmFpbGVkIHRvIGNyZWF0ZSBSZW1vdGVTdHJlYW0uJyk7XG4gICAgfVxuICB9XG5cbiAgX2NoZWNrSWNlQ29ubmVjdGlvblN0YXRlQW5kRmlyZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb25uZWN0ZWQnIHx8XG4gICAgICAgIHRoaXMuX3BjLmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBpbmZvXSBvZiB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvKSB7XG4gICAgICAgIGlmIChpbmZvLm1lZGlhU3RyZWFtKSB7XG4gICAgICAgICAgY29uc3Qgc3RyZWFtRXZlbnQgPSBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbUV2ZW50KCdzdHJlYW1hZGRlZCcsIHtcbiAgICAgICAgICAgIHN0cmVhbTogaW5mby5zdHJlYW0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9yIChjb25zdCB0cmFjayBvZiBpbmZvLm1lZGlhU3RyZWFtLmdldFRyYWNrcygpKSB7XG4gICAgICAgICAgICB0cmFjay5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtZWRpYVN0cmVhbXMgPSB0aGlzLl9nZXRTdHJlYW1CeVRyYWNrKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgbWVkaWFTdHJlYW0gb2YgbWVkaWFTdHJlYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FyZUFsbFRyYWNrc0VuZGVkKG1lZGlhU3RyZWFtKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fb25SZW1vdGVTdHJlYW1SZW1vdmVkKHtzdHJlYW06IG1lZGlhU3RyZWFtfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5UUkFDS1NfQURERUQsIGluZm8udHJhY2tJZHMpO1xuICAgICAgICAgIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KGluZm8ubWVkaWFTdHJlYW0uaWQpLm1lZGlhU3RyZWFtID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFAyUFBlZXJDb25uZWN0aW9uQ2hhbm5lbDtcbiJdfQ==
