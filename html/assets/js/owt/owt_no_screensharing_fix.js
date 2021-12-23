(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Owt = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
},{}],2:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],3:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
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
},{}],5:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],6:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

var isNativeReflectConstruct = require("./isNativeReflectConstruct");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
},{"./isNativeReflectConstruct":13,"./setPrototypeOf":17}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],9:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

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
},{"./setPrototypeOf":17}],10:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],11:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
},{"@babel/runtime/helpers/typeof":19}],12:[function(require,module,exports){
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
},{}],13:[function(require,module,exports){
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
},{}],14:[function(require,module,exports){
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
},{}],15:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
},{}],16:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"./assertThisInitialized":3,"@babel/runtime/helpers/typeof":19}],17:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],18:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":2,"./iterableToArrayLimit":14,"./nonIterableRest":15,"./unsupportedIterableToArray":20}],19:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],20:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":1}],21:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf");

var setPrototypeOf = require("./setPrototypeOf");

var isNativeFunction = require("./isNativeFunction");

var construct = require("./construct");

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

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
},{"./construct":6,"./getPrototypeOf":8,"./isNativeFunction":12,"./setPrototypeOf":17}],22:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":23}],23:[function(require,module,exports){
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
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

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
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
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
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
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
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

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
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],24:[function(require,module,exports){
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

/* global unescape*/
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

},{}],25:[function(require,module,exports){
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
  H265: 'h265'
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

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":10}],26:[function(require,module,exports){
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
exports.MuteEvent = exports.ErrorEvent = exports.MessageEvent = exports.OwtEvent = exports.EventDispatcher = void 0;

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":16}],27:[function(require,module,exports){
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
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _transport[key];
    }
  });
});

},{"./mediaformat.js":29,"./mediastream-factory.js":30,"./stream.js":33,"./transport.js":34}],28:[function(require,module,exports){
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

  setLogLevel(DEBUG); // Default level is debug.

  that.setLogLevel = setLogLevel;
  return that;
}();

var _default = Logger;
exports["default"] = _default;

},{}],29:[function(require,module,exports){
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
exports.Resolution = exports.TrackKind = exports.VideoSourceInfo = exports.AudioSourceInfo = void 0;

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

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":10}],30:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* global Promise, navigator */
'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaStreamFactory = exports.StreamConstraints = exports.VideoTrackConstraints = exports.AudioTrackConstraints = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var utils = _interopRequireWildcard(require("./utils.js"));

var MediaFormatModule = _interopRequireWildcard(require("./mediaformat.js"));

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
    value: function createMediaStream(constraints) {
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

},{"./mediaformat.js":29,"./utils.js":35,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11,"@babel/runtime/helpers/typeof":19}],31:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublishOptions = exports.Publication = exports.PublicationSettings = exports.VideoPublicationSettings = exports.AudioPublicationSettings = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Utils = _interopRequireWildcard(require("./utils.js"));

var _event = require("../base/event.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
  function Publication(id, stop, getStats, mute, unmute) {
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

},{"../base/event.js":26,"./utils.js":35,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11,"@babel/runtime/helpers/possibleConstructorReturn":16}],32:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reorderCodecs = reorderCodecs;
exports.addLegacySimulcast = addLegacySimulcast;
exports.setMaxBitrate = setMaxBitrate;

var _logger = _interopRequireDefault(require("./logger.js"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

},{"./logger.js":28,"@babel/runtime/helpers/interopRequireDefault":10}],33:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* global MediaStream, SendStream, BidirectionalStream */
'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreamEvent = exports.RemoteStream = exports.LocalStream = exports.Stream = exports.StreamSourceInfo = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Utils = _interopRequireWildcard(require("./utils.js"));

var _event = require("./event.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

    if (stream && !(stream instanceof MediaStream) && !(stream instanceof SendStream) && !(stream instanceof BidirectionalStream) || (0, _typeof2["default"])(sourceInfo) !== 'object') {
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
     * @member {MediaStream | SendStream | BidirectionalStream | undefined} stream
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
 * @classDesc Stream sent from a remote endpoint.
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

},{"./event.js":26,"./utils.js":35,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11,"@babel/runtime/helpers/possibleConstructorReturn":16,"@babel/runtime/helpers/typeof":19}],34:[function(require,module,exports){
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
exports.TransportSettings = exports.TransportConstraints = exports.TransportType = void 0;

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
   * @member {Array.<Owt.Base.TransportType>} type
   * @instance
   * @memberof Owt.Base.TransportConstraints
   * @desc Transport type for publication and subscription.
   */
  this.type = type;
  /**
   * @member {string} id
   * @instance
   * @memberof Owt.Base.TransportConstraints
   * @desc Transport ID.
   */

  this.id = id;
};

exports.TransportSettings = TransportSettings;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":10}],35:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* global navigator, window */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFirefox = isFirefox;
exports.isChrome = isChrome;
exports.isSafari = isSafari;
exports.isEdge = isEdge;
exports.createUuid = createUuid;
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
    unifiedPlan: true,
    streamRemovable: info.runtime.name !== 'Firefox',
    ignoreDataChannelAcks: true
  };
  return info;
}

},{}],36:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable require-jsdoc */

/* global Map, Promise, setTimeout, RTCPeerConnection */
'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConferencePeerConnectionChannel = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
    _this._config = config;
    _this._videoCodecs = undefined;
    _this._options = null;
    _this._videoCodecs = undefined;
    _this._signaling = signaling;
    _this._pc = null;
    _this._internalId = null; // It's publication ID or subscription ID.

    _this._pendingCandidates = [];
    _this._subscribePromises = new Map(); // internalId => { resolve, reject }

    _this._publishPromises = new Map(); // internalId => { resolve, reject }

    _this._subscribedStreams = new Map(); // intenalId => RemoteStream

    _this._publications = new Map(); // PublicationId => Publication

    _this._subscriptions = new Map(); // SubscriptionId => Subscription

    _this._publishTransceivers = new Map(); // internalId => { id, transceivers: [Transceiver] }

    _this._subscribeTransceivers = new Map(); // internalId => { id, transceivers: [Transceiver] }

    _this._reverseIdMap = new Map(); // PublicationId || SubscriptionId => internalId
    // Timer for PeerConnection disconnected. Will stop connection after timer.

    _this._disconnectTimer = null;
    _this._ended = false;
    _this._stopped = false; // Channel ID assigned by conference

    _this._id = undefined; // Used to create internal ID for publication/subscription

    _this._internalCount = 0;
    _this._sdpPromise = Promise.resolve();
    _this._sdpResolverMap = new Map(); // internalId => {finish, resolve, reject}

    _this._sdpResolvers = []; // [{finish, resolve, reject}]

    _this._sdpResolveNum = 0;
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
    key: "publish",
    value: function () {
      var _publish = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(stream, options, videoCodecs) {
        var _this2 = this;

        var _iterator, _step, parameters, _iterator2, _step2, _parameters, mediaOptions, trackSettings, internalId, offerOptions, transceivers, transceiverInit, transceiver, _parameters2, _transceiverInit, _transceiver, _parameters3, _iterator3, _step3, track, _iterator4, _step4, _track, localDesc;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this._ended) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", Promise.reject('Connection closed'));

              case 2:
                if (options === undefined) {
                  options = {
                    audio: !!stream.mediaStream.getAudioTracks().length,
                    video: !!stream.mediaStream.getVideoTracks().length
                  };
                }

                if (!((0, _typeof2["default"])(options) !== 'object')) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", Promise.reject(new TypeError('Options should be an object.')));

              case 5:
                if (!(this._isRtpEncodingParameters(options.audio) && this._isOwtEncodingParameters(options.video) || this._isOwtEncodingParameters(options.audio) && this._isRtpEncodingParameters(options.video))) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", Promise.reject(new _error.ConferenceError('Mixing RTCRtpEncodingParameters and ' + 'AudioEncodingParameters/VideoEncodingParameters is not allowed.')));

              case 7:
                if (options.audio === undefined) {
                  options.audio = !!stream.mediaStream.getAudioTracks().length;
                }

                if (options.video === undefined) {
                  options.video = !!stream.mediaStream.getVideoTracks().length;
                }

                if (!(!!options.audio && !stream.mediaStream.getAudioTracks().length || !!options.video && !stream.mediaStream.getVideoTracks().length)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", Promise.reject(new _error.ConferenceError('options.audio/video is inconsistent with tracks presented in the ' + 'MediaStream.')));

              case 11:
                if (!((options.audio === false || options.audio === null) && (options.video === false || options.video === null))) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("return", Promise.reject(new _error.ConferenceError('Cannot publish a stream without audio and video.')));

              case 13:
                if (!((0, _typeof2["default"])(options.audio) === 'object')) {
                  _context.next = 33;
                  break;
                }

                if (Array.isArray(options.audio)) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", Promise.reject(new TypeError('options.audio should be a boolean or an array.')));

              case 16:
                _iterator = _createForOfIteratorHelper(options.audio);
                _context.prev = 17;

                _iterator.s();

              case 19:
                if ((_step = _iterator.n()).done) {
                  _context.next = 25;
                  break;
                }

                parameters = _step.value;

                if (!(!parameters.codec || typeof parameters.codec.name !== 'string' || parameters.maxBitrate !== undefined && typeof parameters.maxBitrate !== 'number')) {
                  _context.next = 23;
                  break;
                }

                return _context.abrupt("return", Promise.reject(new TypeError('options.audio has incorrect parameters.')));

              case 23:
                _context.next = 19;
                break;

              case 25:
                _context.next = 30;
                break;

              case 27:
                _context.prev = 27;
                _context.t0 = _context["catch"](17);

                _iterator.e(_context.t0);

              case 30:
                _context.prev = 30;

                _iterator.f();

                return _context.finish(30);

              case 33:
                if (!((0, _typeof2["default"])(options.video) === 'object' && !Array.isArray(options.video))) {
                  _context.next = 35;
                  break;
                }

                return _context.abrupt("return", Promise.reject(new TypeError('options.video should be a boolean or an array.')));

              case 35:
                if (!this._isOwtEncodingParameters(options.video)) {
                  _context.next = 53;
                  break;
                }

                _iterator2 = _createForOfIteratorHelper(options.video);
                _context.prev = 37;

                _iterator2.s();

              case 39:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 45;
                  break;
                }

                _parameters = _step2.value;

                if (!(!_parameters.codec || typeof _parameters.codec.name !== 'string' || _parameters.maxBitrate !== undefined && typeof _parameters.maxBitrate !== 'number' || _parameters.codec.profile !== undefined && typeof _parameters.codec.profile !== 'string')) {
                  _context.next = 43;
                  break;
                }

                return _context.abrupt("return", Promise.reject(new TypeError('options.video has incorrect parameters.')));

              case 43:
                _context.next = 39;
                break;

              case 45:
                _context.next = 50;
                break;

              case 47:
                _context.prev = 47;
                _context.t1 = _context["catch"](37);

                _iterator2.e(_context.t1);

              case 50:
                _context.prev = 50;

                _iterator2.f();

                return _context.finish(50);

              case 53:
                mediaOptions = {};

                this._createPeerConnection();

                if (!(stream.mediaStream.getAudioTracks().length > 0 && options.audio !== false && options.audio !== null)) {
                  _context.next = 63;
                  break;
                }

                if (stream.mediaStream.getAudioTracks().length > 1) {
                  _logger["default"].warning('Publishing a stream with multiple audio tracks is not fully' + ' supported.');
                }

                if (!(typeof options.audio !== 'boolean' && (0, _typeof2["default"])(options.audio) !== 'object')) {
                  _context.next = 59;
                  break;
                }

                return _context.abrupt("return", Promise.reject(new _error.ConferenceError('Type of audio options should be boolean or an object.')));

              case 59:
                mediaOptions.audio = {};
                mediaOptions.audio.source = stream.source.audio;
                _context.next = 64;
                break;

              case 63:
                mediaOptions.audio = false;

              case 64:
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

                _context.next = 68;
                return this._chainSdpPromise(internalId);

              case 68:
                offerOptions = {};
                transceivers = [];

                if (!(typeof this._pc.addTransceiver === 'function')) {
                  _context.next = 93;
                  break;
                }

                if (!(mediaOptions.audio && stream.mediaStream.getAudioTracks().length > 0)) {
                  _context.next = 81;
                  break;
                }

                transceiverInit = {
                  direction: 'sendonly',
                  streams: [stream.mediaStream]
                };

                if (this._isRtpEncodingParameters(options.audio)) {
                  transceiverInit.sendEncodings = options.audio;
                }

                transceiver = this._pc.addTransceiver(stream.mediaStream.getAudioTracks()[0], transceiverInit);
                transceivers.push({
                  type: 'audio',
                  transceiver: transceiver,
                  source: mediaOptions.audio.source,
                  option: {
                    audio: options.audio
                  }
                });

                if (!Utils.isFirefox()) {
                  _context.next = 81;
                  break;
                }

                // Firefox does not support encodings setting in addTransceiver.
                _parameters2 = transceiver.sender.getParameters();
                _parameters2.encodings = transceiverInit.sendEncodings;
                _context.next = 81;
                return transceiver.sender.setParameters(_parameters2);

              case 81:
                if (!(mediaOptions.video && stream.mediaStream.getVideoTracks().length > 0)) {
                  _context.next = 91;
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

                _transceiver = this._pc.addTransceiver(stream.mediaStream.getVideoTracks()[0], _transceiverInit);
                transceivers.push({
                  type: 'video',
                  transceiver: _transceiver,
                  source: mediaOptions.video.source,
                  option: {
                    video: options.video
                  }
                });

                if (!Utils.isFirefox()) {
                  _context.next = 91;
                  break;
                }

                // Firefox does not support encodings setting in addTransceiver.
                _parameters3 = _transceiver.sender.getParameters();
                _parameters3.encodings = _transceiverInit.sendEncodings;
                _context.next = 91;
                return _transceiver.sender.setParameters(_parameters3);

              case 91:
                _context.next = 97;
                break;

              case 93:
                // Should not reach here
                if (mediaOptions.audio && stream.mediaStream.getAudioTracks().length > 0) {
                  _iterator3 = _createForOfIteratorHelper(stream.mediaStream.getAudioTracks());

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      track = _step3.value;

                      this._pc.addTrack(track, stream.mediaStream);
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }

                if (mediaOptions.video && stream.mediaStream.getVideoTracks().length > 0) {
                  _iterator4 = _createForOfIteratorHelper(stream.mediaStream.getVideoTracks());

                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                      _track = _step4.value;

                      this._pc.addTrack(_track, stream.mediaStream);
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                }

                offerOptions.offerToReceiveAudio = false;
                offerOptions.offerToReceiveVideo = false;

              case 97:
                this._publishTransceivers.set(internalId, {
                  transceivers: transceivers
                });

                this._pc.createOffer(offerOptions).then(function (desc) {
                  localDesc = desc;
                  return _this2._pc.setLocalDescription(desc);
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
                  return _this2._signaling.sendSignalingMessage('publish', {
                    media: {
                      tracks: trackOptions
                    },
                    attributes: stream.attributes,
                    transport: {
                      id: _this2._id,
                      type: 'webrtc'
                    }
                  })["catch"](function (e) {
                    // Send SDP even when failed to get Answer.
                    _this2._signaling.sendSignalingMessage('soac', {
                      id: _this2._id,
                      signaling: localDesc
                    });

                    throw e;
                  });
                }).then(function (data) {
                  var publicationId = data.id;
                  var messageEvent = new _event.MessageEvent('id', {
                    message: publicationId,
                    origin: _this2._remoteId
                  });

                  _this2.dispatchEvent(messageEvent);

                  _this2._publishTransceivers.get(internalId).id = publicationId;

                  _this2._reverseIdMap.set(publicationId, internalId);

                  if (_this2._id && _this2._id !== data.transportId) {
                    _logger["default"].warning('Server returns conflict ID: ' + data.transportId);
                  }

                  _this2._id = data.transportId; // Modify local SDP before sending

                  if (options) {
                    transceivers.forEach(function (_ref2) {
                      var type = _ref2.type,
                          transceiver = _ref2.transceiver,
                          option = _ref2.option;
                      localDesc.sdp = _this2._setRtpReceiverOptions(localDesc.sdp, option, transceiver.mid);
                      localDesc.sdp = _this2._setRtpSenderOptions(localDesc.sdp, option, transceiver.mid);
                    });
                  }

                  _this2._signaling.sendSignalingMessage('soac', {
                    id: _this2._id,
                    signaling: localDesc
                  });
                })["catch"](function (e) {
                  _logger["default"].error('Failed to create offer or set SDP. Message: ' + e.message);

                  if (_this2._publishTransceivers.get(internalId).id) {
                    _this2._unpublish(internalId);

                    _this2._rejectPromise(e);

                    _this2._fireEndedEventOnPublicationOrSubscription();
                  } else {
                    _this2._unpublish(internalId);
                  }
                }); // .catch((e) => {
                //   this._unpublish(internalId);
                //   this._rejectPromise(e);
                //   this._fireEndedEventOnPublicationOrSubscription();
                // });


                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _this2._publishPromises.set(internalId, {
                    resolve: resolve,
                    reject: reject
                  });
                }));

              case 100:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[17, 27, 30, 33], [37, 47, 50, 53]]);
      }));

      function publish(_x, _x2, _x3) {
        return _publish.apply(this, arguments);
      }

      return publish;
    }()
  }, {
    key: "subscribe",
    value: function () {
      var _subscribe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(stream, options) {
        var _this3 = this;

        var mediaOptions, matchedSetting, internalId, offerOptions, transceivers, transceiver, _transceiver2, localDesc;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._ended) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", Promise.reject('Connection closed'));

              case 2:
                if (options === undefined) {
                  options = {
                    audio: !!stream.settings.audio,
                    video: !!stream.settings.video
                  };
                }

                if (!((0, _typeof2["default"])(options) !== 'object')) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", Promise.reject(new TypeError('Options should be an object.')));

              case 5:
                if (options.audio === undefined) {
                  options.audio = !!stream.settings.audio;
                }

                if (options.video === undefined) {
                  options.video = !!stream.settings.video;
                }

                if (!(options.audio !== undefined && (0, _typeof2["default"])(options.audio) !== 'object' && typeof options.audio !== 'boolean' && options.audio !== null || options.video !== undefined && (0, _typeof2["default"])(options.video) !== 'object' && typeof options.video !== 'boolean' && options.video !== null)) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", Promise.reject(new TypeError('Invalid options type.')));

              case 9:
                if (!(options.audio && !stream.settings.audio || options.video && !stream.settings.video)) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", Promise.reject(new _error.ConferenceError('options.audio/video cannot be true or an object if there is no ' + 'audio/video track in remote stream.')));

              case 11:
                if (!(options.audio === false && options.video === false)) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt("return", Promise.reject(new _error.ConferenceError('Cannot subscribe a stream without audio and video.')));

              case 13:
                mediaOptions = {};

                if (!options.audio) {
                  _context2.next = 22;
                  break;
                }

                if (!((0, _typeof2["default"])(options.audio) === 'object' && Array.isArray(options.audio.codecs))) {
                  _context2.next = 18;
                  break;
                }

                if (!(options.audio.codecs.length === 0)) {
                  _context2.next = 18;
                  break;
                }

                return _context2.abrupt("return", Promise.reject(new TypeError('Audio codec cannot be an empty array.')));

              case 18:
                mediaOptions.audio = {};
                mediaOptions.audio.from = stream.id;
                _context2.next = 23;
                break;

              case 22:
                mediaOptions.audio = false;

              case 23:
                if (!options.video) {
                  _context2.next = 33;
                  break;
                }

                if (!((0, _typeof2["default"])(options.video) === 'object' && Array.isArray(options.video.codecs))) {
                  _context2.next = 27;
                  break;
                }

                if (!(options.video.codecs.length === 0)) {
                  _context2.next = 27;
                  break;
                }

                return _context2.abrupt("return", Promise.reject(new TypeError('Video codec cannot be an empty array.')));

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

                _context2.next = 34;
                break;

              case 33:
                mediaOptions.video = false;

              case 34:
                internalId = this._createInternalId(); // Waiting for previous SDP negotiation if needed

                _context2.next = 37;
                return this._chainSdpPromise(internalId);

              case 37:
                offerOptions = {};
                transceivers = [];

                this._createPeerConnection();

                if (typeof this._pc.addTransceiver === 'function') {
                  // |direction| seems not working on Safari.
                  if (mediaOptions.audio) {
                    transceiver = this._pc.addTransceiver('audio', {
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
                    _transceiver2 = this._pc.addTransceiver('video', {
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

                this._subscribedStreams.set(internalId, stream);

                this._pc.createOffer(offerOptions).then(function (desc) {
                  localDesc = desc;
                  return _this3._pc.setLocalDescription(desc)["catch"](function (errorMessage) {
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
                  return _this3._signaling.sendSignalingMessage('subscribe', {
                    media: {
                      tracks: trackOptions
                    },
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
                  var subscriptionId = data.id;
                  var messageEvent = new _event.MessageEvent('id', {
                    message: subscriptionId,
                    origin: _this3._remoteId
                  });

                  _this3.dispatchEvent(messageEvent);

                  _this3._subscribeTransceivers.get(internalId).id = subscriptionId;

                  _this3._reverseIdMap.set(subscriptionId, internalId);

                  if (_this3._id && _this3._id !== data.transportId) {
                    _logger["default"].warning('Server returns conflict ID: ' + data.transportId);
                  }

                  _this3._id = data.transportId; // Modify local SDP before sending

                  if (options) {
                    transceivers.forEach(function (_ref4) {
                      var type = _ref4.type,
                          transceiver = _ref4.transceiver,
                          option = _ref4.option;
                      localDesc.sdp = _this3._setRtpReceiverOptions(localDesc.sdp, option, transceiver.mid);
                    });
                  }

                  _this3._signaling.sendSignalingMessage('soac', {
                    id: _this3._id,
                    signaling: localDesc
                  });
                })["catch"](function (e) {
                  _logger["default"].error('Failed to create offer or set SDP. Message: ' + e.message);

                  if (_this3._subscribeTransceivers.get(internalId).id) {
                    _this3._unsubscribe(internalId);

                    _this3._rejectPromise(e);

                    _this3._fireEndedEventOnPublicationOrSubscription();
                  } else {
                    _this3._unsubscribe(internalId);
                  }
                });

                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  _this3._subscribePromises.set(internalId, {
                    resolve: resolve,
                    reject: reject
                  });
                }));

              case 45:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function subscribe(_x4, _x5) {
        return _subscribe.apply(this, arguments);
      }

      return subscribe;
    }()
  }, {
    key: "close",
    value: function close() {
      if (this._pc && this._pc.signalingState !== 'closed') {
        this._pc.close();
      }
    }
  }, {
    key: "_chainSdpPromise",
    value: function _chainSdpPromise(internalId) {
      var _this4 = this;

      var prior = this._sdpPromise;
      var negotiationTimeout = 10000;
      this._sdpPromise = prior.then(function () {
        return new Promise(function (resolve, reject) {
          var resolver = {
            finish: false,
            resolve: resolve,
            reject: reject
          };

          _this4._sdpResolvers.push(resolver);

          _this4._sdpResolverMap.set(internalId, resolver);

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
      var _this5 = this;

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

          if (_this5._pc.signalingState === 'stable') {
            transceiver.sender.replaceTrack(null);

            _this5._pc.removeTrack(transceiver.sender);
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
        } // Clear media stream


        if (this._subscribedStreams.has(internalId)) {
          this._subscribedStreams.get(internalId).mediaStream = null;

          this._subscribedStreams["delete"](internalId);
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
      var _this6 = this;

      var eventName = isPub ? 'stream-control' : 'subscription-control';
      var operation = isMute ? 'pause' : 'play';
      return this._signaling.sendSignalingMessage(eventName, {
        id: sessionId,
        operation: operation,
        data: trackKind
      }).then(function () {
        if (!isPub) {
          var muteEventName = isMute ? 'mute' : 'unmute';

          _this6._subscriptions.get(sessionId).dispatchEvent(new _event.MuteEvent(muteEventName, {
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

      var find = false;

      var _iterator5 = _createForOfIteratorHelper(this._subscribeTransceivers),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _step5$value = (0, _slicedToArray2["default"])(_step5.value, 2),
              internalId = _step5$value[0],
              sub = _step5$value[1];

          var subscriptionId = sub.id;

          if (sub.transceivers.find(function (t) {
            return t.transceiver === event.transceiver;
          })) {
            find = true;

            var subscribedStream = this._subscribedStreams.get(internalId);

            if (!subscribedStream.mediaStream) {
              this._subscribedStreams.get(internalId).mediaStream = event.streams[0]; // Resolve subscription if ready handler has been called

              var subscription = this._subscriptions.get(subscriptionId);

              if (subscription) {
                this._subscribePromises.get(internalId).resolve(subscription);
              }
            } else {
              // Add track to the existing stream
              subscribedStream.mediaStream.addTrack(event.track);
            }
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      if (!find) {
        // This is not expected path. However, this is going to happen on Safari
        // because it does not support setting direction of transceiver.
        _logger["default"].warning('Received remote stream without subscription.');
      }
    }
  }, {
    key: "_onLocalIceCandidate",
    value: function _onLocalIceCandidate(event) {
      if (event.candidate) {
        if (this._pc.signalingState !== 'stable') {
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

      var _iterator6 = _createForOfIteratorHelper(this._publications),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _step6$value = (0, _slicedToArray2["default"])(_step6.value, 2),

          /* id */
          publication = _step6$value[1];

          publication.dispatchEvent(event);
          publication.stop();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var _iterator7 = _createForOfIteratorHelper(this._subscriptions),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _step7$value = (0, _slicedToArray2["default"])(_step7.value, 2),

          /* id */
          subscription = _step7$value[1];

          subscription.dispatchEvent(event);
          subscription.stop();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
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

      if (this._pc && this._pc.iceConnectionState !== 'closed') {
        this._pc.close();
      } // Rejecting all corresponding promises if publishing and subscribing is ongoing.


      var _iterator8 = _createForOfIteratorHelper(this._publishPromises),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _step8$value = (0, _slicedToArray2["default"])(_step8.value, 2),

          /* id */
          promise = _step8$value[1];

          promise.reject(error);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      this._publishPromises.clear();

      var _iterator9 = _createForOfIteratorHelper(this._subscribePromises),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _step9$value = (0, _slicedToArray2["default"])(_step9.value, 2),

          /* id */
          _promise = _step9$value[1];

          _promise.reject(error);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
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
      if (this._pc.connectionState === 'closed' || this._pc.connectionState === 'failed') {
        if (this._pc.connectionState === 'failed') {
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
      var _this7 = this;

      if (this._pc) {
        return;
      }

      var pcConfiguration = this._config.rtcConfiguration || {};

      if (Utils.isChrome()) {
        pcConfiguration.sdpSemantics = 'unified-plan';
        pcConfiguration.bundlePolicy = 'max-bundle';
      }

      this._pc = new RTCPeerConnection(pcConfiguration);

      this._pc.onicecandidate = function (event) {
        _this7._onLocalIceCandidate.apply(_this7, [event]);
      };

      this._pc.ontrack = function (event) {
        _this7._onRemoteStreamAdded.apply(_this7, [event]);
      };

      this._pc.oniceconnectionstatechange = function (event) {
        _this7._onIceConnectionStateChange.apply(_this7, [event]);
      };

      this._pc.onconnectionstatechange = function (event) {
        _this7._onConnectionStateChange.apply(_this7, [event]);
      };
    }
  }, {
    key: "_getStats",
    value: function _getStats() {
      if (this._pc) {
        return this._pc.getStats();
      } else {
        return Promise.reject(new _error.ConferenceError('PeerConnection is not available.'));
      }
    }
  }, {
    key: "_readyHandler",
    value: function _readyHandler(sessionId) {
      var _this8 = this;

      var internalId = this._reverseIdMap.get(sessionId);

      if (this._subscribePromises.has(internalId)) {
        var subscription = new _subscription.Subscription(sessionId, function () {
          _this8._unsubscribe(internalId);
        }, function () {
          return _this8._getStats();
        }, function (trackKind) {
          return _this8._muteOrUnmute(sessionId, true, false, trackKind);
        }, function (trackKind) {
          return _this8._muteOrUnmute(sessionId, false, false, trackKind);
        }, function (options) {
          return _this8._applyOptions(sessionId, options);
        });

        this._subscriptions.set(sessionId, subscription); // Fire subscription's ended event when associated stream is ended.


        this._subscribedStreams.get(internalId).addEventListener('ended', function () {
          if (_this8._subscriptions.has(sessionId)) {
            _this8._subscriptions.get(sessionId).dispatchEvent('ended', new _event.OwtEvent('ended'));
          }
        }); // Resolve subscription if mediaStream is ready


        if (this._subscribedStreams.get(internalId).mediaStream) {
          this._subscribePromises.get(internalId).resolve(subscription);
        }
      } else if (this._publishPromises.has(internalId)) {
        var publication = new _publication.Publication(sessionId, function () {
          _this8._unpublish(internalId);

          return Promise.resolve();
        }, function () {
          return _this8._getStats();
        }, function (trackKind) {
          return _this8._muteOrUnmute(sessionId, true, true, trackKind);
        }, function (trackKind) {
          return _this8._muteOrUnmute(sessionId, false, true, trackKind);
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
      var _this9 = this;

      if (sdp.type === 'answer') {
        this._pc.setRemoteDescription(sdp).then(function () {
          if (_this9._pendingCandidates.length > 0) {
            var _iterator10 = _createForOfIteratorHelper(_this9._pendingCandidates),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var candidate = _step10.value;

                _this9._sendCandidate(candidate);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }
        }, function (error) {
          _logger["default"].error('Set remote description failed: ' + error);

          _this9._rejectPromise(error);

          _this9._fireEndedEventOnPublicationOrSubscription();
        }).then(function () {
          if (!_this9._nextSdpPromise()) {
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

      var _iterator11 = _createForOfIteratorHelper(this._publications),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _step11$value = (0, _slicedToArray2["default"])(_step11.value, 2),

          /* id */
          publication = _step11$value[1];

          publication.dispatchEvent(errorEvent);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      var _iterator12 = _createForOfIteratorHelper(this._subscriptions),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var _step12$value = (0, _slicedToArray2["default"])(_step12.value, 2),

          /* id */
          subscription = _step12$value[1];

          subscription.dispatchEvent(errorEvent);
        } // Fire ended event when error occured

      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
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
    } // Handle stream event sent from MCU. Some stream events should be publication
    // event or subscription event. It will be handled here.

  }, {
    key: "_onStreamEvent",
    value: function _onStreamEvent(message) {
      var eventTargets = [];

      if (this._publications.has(message.id)) {
        eventTargets.push(this._publications.get(message.id));
      }

      var _iterator13 = _createForOfIteratorHelper(this._subscribedStreams),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _step13$value = (0, _slicedToArray2["default"])(_step13.value, 2),
              internalId = _step13$value[0],
              subscribedStream = _step13$value[1];

          if (message.id === subscribedStream.id) {
            var subscriptionId = this._subscribeTransceivers.get(internalId).id;

            eventTargets.push(this._subscriptions.get(subscriptionId));
            break;
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
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
      return param.codecPayloadType || param.dtx || param.active || param.ptime || param.maxFramerate || param.scaleResolutionDownBy || param.rid;
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

},{"../base/event.js":26,"../base/logger.js":28,"../base/mediaformat.js":29,"../base/publication.js":31,"../base/sdputils.js":32,"../base/utils.js":35,"./error.js":38,"./subscription.js":46,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11,"@babel/runtime/helpers/possibleConstructorReturn":16,"@babel/runtime/helpers/slicedToArray":18,"@babel/runtime/helpers/typeof":19,"@babel/runtime/regenerator":22}],37:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* global Map, Promise */
'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  var mainChannel = null; // Main pc channel for the client as single pc is default.

  var quicTransportChannel;
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
      var loginInfo = {
        token: tokenString,
        userAgent: Utils.sysInfo(),
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

        if (typeof QuicTransport === 'function' && token.webTransportUrl) {
          quicTransportChannel = new _quicconnection.QuicConnection(token.webTransportUrl, resp.webTransportToken, createSignalingForChannel(), config.webTransportConfiguration);
        }

        resolve(new _info.ConferenceInfo(resp.room.id, Array.from(participants.values()), Array.from(remoteStreams.values()), me));
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
   * @param {Owt.Base.PublishOptions} options Options for publication.
   * @param {string[]} videoCodecs Video codec names for publishing. Valid values are 'VP8', 'VP9' and 'H264'. This parameter only valid when options.video is RTCRtpEncodingParameters. Publishing with RTCRtpEncodingParameters is an experimental feature. This parameter is subject to change.
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

    if (!mainChannel) {
      mainChannel = createPeerConnectionChannel();
      mainChannel.addEventListener('ended', function () {
        mainChannel = null;
      });
    }

    return mainChannel.publish(stream, options, videoCodecs);
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

    if (!mainChannel) {
      mainChannel = createPeerConnectionChannel();
      mainChannel.addEventListener('ended', function () {
        mainChannel = null;
      });
    }

    return mainChannel.subscribe(stream, options);
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

},{"../base/base64.js":24,"../base/event.js":26,"../base/logger.js":28,"../base/stream.js":33,"../base/utils.js":35,"./channel.js":36,"./error.js":38,"./info.js":40,"./mixedstream.js":41,"./participant.js":42,"./quicconnection.js":43,"./signaling.js":44,"./streamutils.js":45,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11,"@babel/runtime/regenerator":22}],38:[function(require,module,exports){
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":16,"@babel/runtime/helpers/wrapNativeSuper":21}],39:[function(require,module,exports){
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

},{"./client.js":37,"./signaling.js":44}],40:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":10}],41:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutChangeEvent = exports.ActiveAudioInputChangeEvent = exports.RemoteMixedStream = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var StreamModule = _interopRequireWildcard(require("../base/stream.js"));

var StreamUtilsModule = _interopRequireWildcard(require("./streamutils.js"));

var _event = require("../base/event.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

},{"../base/event.js":26,"../base/stream.js":33,"./streamutils.js":45,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11,"@babel/runtime/helpers/possibleConstructorReturn":16}],42:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

},{"../base/event.js":26,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11,"@babel/runtime/helpers/possibleConstructorReturn":16}],43:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable require-jsdoc */

/* global Promise, Map, QuicTransport, Uint8Array, Uint32Array, TextEncoder */
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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
    _this._token = JSON.parse(_base.Base64.decodeBase64(tokenString));
    _this._signaling = signaling;
    _this._ended = false;
    _this._quicStreams = new Map(); // Key is publication or subscription ID.

    _this._quicTransport = new QuicTransport(url, webTransportOptions);
    _this._subscribePromises = new Map(); // Key is subscription ID.

    _this._transportId = _this._token.transportId;

    _this._init();

    _this._authenticate(tokenString);

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
    key: "_init",
    value: function () {
      var _init2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var receiveStreamReader, receivingDone, _yield$receiveStreamR, receiveStream, readingReceiveStreamsDone, chunkReader, _yield$chunkReader$re, uuid, readingChunksDone, subscriptionId, subscription;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                receiveStreamReader = this._quicTransport.receiveStreams().getReader();

                _logger["default"].info('Reader: ' + receiveStreamReader);

                receivingDone = false;

              case 3:
                if (receivingDone) {
                  _context.next = 31;
                  break;
                }

                _context.next = 6;
                return receiveStreamReader.read();

              case 6:
                _yield$receiveStreamR = _context.sent;
                receiveStream = _yield$receiveStreamR.value;
                readingReceiveStreamsDone = _yield$receiveStreamR.done;

                _logger["default"].info('New stream received');

                if (!readingReceiveStreamsDone) {
                  _context.next = 13;
                  break;
                }

                receivingDone = true;
                return _context.abrupt("break", 31);

              case 13:
                chunkReader = receiveStream.readable.getReader();
                _context.next = 16;
                return chunkReader.read();

              case 16:
                _yield$chunkReader$re = _context.sent;
                uuid = _yield$chunkReader$re.value;
                readingChunksDone = _yield$chunkReader$re.done;

                if (!readingChunksDone) {
                  _context.next = 22;
                  break;
                }

                _logger["default"].error('Stream closed unexpectedly.');

                return _context.abrupt("return");

              case 22:
                if (!(uuid.length != 16)) {
                  _context.next = 25;
                  break;
                }

                _logger["default"].error('Unexpected length for UUID.');

                return _context.abrupt("return");

              case 25:
                chunkReader.releaseLock();
                subscriptionId = this._uint8ArrayToUuid(uuid);

                this._quicStreams.set(subscriptionId, receiveStream);

                if (this._subscribePromises.has(subscriptionId)) {
                  subscription = this._createSubscription(subscriptionId, receiveStream);

                  this._subscribePromises.get(subscriptionId).resolve(subscription);
                }

                _context.next = 3;
                break;

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _init() {
        return _init2.apply(this, arguments);
      }

      return _init;
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
      var _authenticate2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(token) {
        var quicStream, chunkReader, writer, encoder, encodedToken;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._quicTransport.ready;

              case 2:
                _context2.next = 4;
                return this._quicTransport.createBidirectionalStream();

              case 4:
                quicStream = _context2.sent;
                chunkReader = quicStream.readable.getReader();
                writer = quicStream.writable.getWriter();
                _context2.next = 9;
                return writer.ready;

              case 9:
                // 128 bit of zero indicates this is a stream for signaling.
                writer.write(new Uint8Array(16)); // Send token as described in
                // https://github.com/open-webrtc-toolkit/owt-server/blob/20e8aad216cc446095f63c409339c34c7ee770ee/doc/design/quic-transport-payload-format.md.

                encoder = new TextEncoder();
                encodedToken = encoder.encode(token);
                writer.write(Uint32Array.of(encodedToken.length));
                writer.write(encodedToken); // Server returns transport ID as an ack. Ignore it here.

                _context2.next = 16;
                return chunkReader.read();

              case 16:
                _logger["default"].info('Authentication success.');

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _authenticate(_x) {
        return _authenticate2.apply(this, arguments);
      }

      return _authenticate;
    }()
  }, {
    key: "createSendStream",
    value: function () {
      var _createSendStream = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var quicStream;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._quicTransport.ready;

              case 2:
                _context3.next = 4;
                return this._quicTransport.createSendStream();

              case 4:
                quicStream = _context3.sent;
                return _context3.abrupt("return", quicStream);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function createSendStream() {
        return _createSendStream.apply(this, arguments);
      }

      return createSendStream;
    }()
  }, {
    key: "createSendStream1",
    value: function () {
      var _createSendStream2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(sessionId) {
        var publicationId, quicStream, writer;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _logger["default"].info('Create stream.');

                _context4.next = 3;
                return this._quicTransport.ready;

              case 3:
                _context4.next = 5;
                return this._initiatePublication();

              case 5:
                publicationId = _context4.sent;
                _context4.next = 8;
                return this._quicTransport.createSendStream();

              case 8:
                quicStream = _context4.sent;
                writer = quicStream.writable.getWriter();
                _context4.next = 12;
                return writer.ready;

              case 12:
                writer.write(this._uuidToUint8Array(publicationId));
                writer.releaseLock();

                this._quicStreams.set(publicationId, quicStream);

                return _context4.abrupt("return", quicStream);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function createSendStream1(_x2) {
        return _createSendStream2.apply(this, arguments);
      }

      return createSendStream1;
    }()
  }, {
    key: "publish",
    value: function () {
      var _publish = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(stream) {
        var _this2 = this;

        var publicationId, quicStream, writer, publication;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._initiatePublication();

              case 2:
                publicationId = _context5.sent;
                quicStream = stream.stream;
                writer = quicStream.writable.getWriter();
                _context5.next = 7;
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
                return _context5.abrupt("return", publication);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
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
      var _initiatePublication2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var data;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._signaling.sendSignalingMessage('publish', {
                  media: null,
                  data: true,
                  transport: {
                    type: 'quic',
                    id: this._transportId
                  }
                });

              case 2:
                data = _context6.sent;

                if (!(this._transportId !== data.transportId)) {
                  _context6.next = 5;
                  break;
                }

                throw new Error('Transport ID not match.');

              case 5:
                return _context6.abrupt("return", data.id);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
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

},{"../base/base64.js":24,"../base/event.js":26,"../base/logger.js":28,"../base/publication.js":31,"./subscription.js":46,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":16,"@babel/runtime/regenerator":22}],44:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
   * @param {string} loginInfo Infomation required for logging in.
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

},{"../base/base64.js":24,"../base/event.js":26,"../base/logger.js":28,"./error.js":38,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11,"@babel/runtime/helpers/possibleConstructorReturn":16}],45:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
// This file doesn't have public APIs.

/* eslint-disable valid-jsdoc */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return new SubscriptionModule.SubscriptionCapabilities(audio, video);
}

},{"../base/codec.js":25,"../base/logger.js":28,"../base/mediaformat.js":29,"../base/publication.js":31,"./subscription.js":46,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11}],46:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = exports.SubscriptionUpdateOptions = exports.VideoSubscriptionUpdateOptions = exports.SubscribeOptions = exports.VideoSubscriptionConstraints = exports.AudioSubscriptionConstraints = exports.SubscriptionCapabilities = exports.VideoSubscriptionCapabilities = exports.AudioSubscriptionCapabilities = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _event = require("../base/event.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
  function Subscription(id, stop, getStats, mute, unmute, applyOptions) {
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

    _this.applyOptions = applyOptions;
    return _this;
  }

  return Subscription;
}(_event.EventDispatcher);

exports.Subscription = Subscription;

},{"../base/event.js":26,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":16}],47:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Conference = exports.P2P = exports.Base = void 0;

var base = _interopRequireWildcard(require("./base/export.js"));

var p2p = _interopRequireWildcard(require("./p2p/export.js"));

var conference = _interopRequireWildcard(require("./conference/export.js"));

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

},{"./base/export.js":27,"./conference/export.js":39,"./p2p/export.js":49,"@babel/runtime/helpers/interopRequireWildcard":11}],48:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorByCode = getErrorByCode;
exports.P2PError = exports.errors = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":16,"@babel/runtime/helpers/wrapNativeSuper":21}],49:[function(require,module,exports){
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

},{"./error.js":48,"./p2pclient.js":50,"@babel/runtime/helpers/interopRequireDefault":10}],50:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

/* global Map, Promise */
'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _logger = _interopRequireDefault(require("../base/logger.js"));

var _event = require("../base/event.js");

var ErrorModule = _interopRequireWildcard(require("./error.js"));

var _peerconnectionChannel = _interopRequireDefault(require("./peerconnection-channel.js"));

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

  var self = this;
  var state = ConnectionState.READY;
  var myId;

  signaling.onMessage = function (origin, message) {
    _logger["default"].debug('Received signaling message from ' + origin + ': ' + message);

    var data = JSON.parse(message);

    if (data.type === 'chat-closed') {
      if (channels.has(origin)) {
        getOrCreateChannel(origin, false).onMessage(data);
        channels["delete"](origin);
      }

      return;
    }

    if (self.allowedRemoteIds.indexOf(origin) >= 0) {
      getOrCreateChannel(origin, false).onMessage(data);
    } else {
      sendSignalingMessage(origin, 'chat-closed', ErrorModule.errors.P2P_CLIENT_DENIED);
    }
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

    return Promise.resolve(getOrCreateChannel(remoteId, true).publish(stream));
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

    return Promise.resolve(getOrCreateChannel(remoteId, true).send(message));
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

  var sendSignalingMessage = function sendSignalingMessage(remoteId, type, message) {
    var msg = {
      type: type
    };

    if (message) {
      msg.data = message;
    }

    return signaling.send(remoteId, JSON.stringify(msg))["catch"](function (e) {
      if (typeof e === 'number') {
        throw ErrorModule.getErrorByCode(e);
      }
    });
  };

  var getOrCreateChannel = function getOrCreateChannel(remoteId, isInitializer) {
    if (!channels.has(remoteId)) {
      // Construct an signaling sender/receiver for P2PPeerConnection.
      var signalingForChannel = Object.create(_event.EventDispatcher);
      signalingForChannel.sendSignalingMessage = sendSignalingMessage;
      var pcc = new _peerconnectionChannel["default"](config, myId, remoteId, signalingForChannel, isInitializer);
      pcc.addEventListener('streamadded', function (streamEvent) {
        self.dispatchEvent(streamEvent);
      });
      pcc.addEventListener('messagereceived', function (messageEvent) {
        self.dispatchEvent(messageEvent);
      });
      pcc.addEventListener('ended', function () {
        channels["delete"](remoteId);
      });
      channels.set(remoteId, pcc);
    }

    return channels.get(remoteId);
  };
};

var _default = P2PClient;
exports["default"] = _default;

},{"../base/event.js":26,"../base/logger.js":28,"./error.js":48,"./peerconnection-channel.js":51,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11}],51:[function(require,module,exports){
// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0
// This file doesn't have public APIs.

/* eslint-disable valid-jsdoc */

/* eslint-disable require-jsdoc */

/* global Event, Map, Promise, RTCIceCandidate, RTCSessionDescription,
   RTCPeerConnection, navigator */
'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
 * @desc A P2PPeerConnectionChannel handles all interactions between this endpoint and a remote endpoint.
 * @memberOf Owt.P2P
 * @private
 */

var P2PPeerConnectionChannel = /*#__PURE__*/function (_EventDispatcher) {
  (0, _inherits2["default"])(P2PPeerConnectionChannel, _EventDispatcher);

  var _super2 = _createSuper(P2PPeerConnectionChannel);

  // |signaling| is an object has a method |sendSignalingMessage|.

  /* eslint-disable-next-line require-jsdoc */
  function P2PPeerConnectionChannel(config, localId, remoteId, signaling, isInitializer) {
    var _this2;

    (0, _classCallCheck2["default"])(this, P2PPeerConnectionChannel);
    _this2 = _super2.call(this);
    _this2._config = config;
    _this2._localId = localId;
    _this2._remoteId = remoteId;
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
    _this2._remoteSideSupportsPlanB = true;
    _this2._remoteSideSupportsUnifiedPlan = true;
    _this2._remoteSideIgnoresDataChannelAcks = false;
    _this2._remoteIceCandidates = [];
    _this2._dataChannels = new Map(); // Key is data channel's label, value is a RTCDataChannel.

    _this2._pendingMessages = [];
    _this2._dataSeq = 1; // Sequence number for data channel messages.

    _this2._sendDataPromises = new Map(); // Key is data sequence number, value is an object has |resolve| and |reject|.

    _this2._addedTrackIds = []; // Tracks that have been added after receiving remote SDP but before connection is established. Draining these messages when ICE connection state is connected.

    _this2._isCaller = true;
    _this2._infoSent = false;
    _this2._disposed = false;

    _this2._createPeerConnection();

    if (isInitializer) {
      _this2._sendSignalingMessage(SignalingType.CLOSED);
    }

    _this2._sendSignalingMessage(SignalingType.UA, sysInfo);

    return _this2;
  }
  /**
   * @function publish
   * @desc Publish a stream to the remote endpoint.
   * @private
   */


  (0, _createClass2["default"])(P2PPeerConnectionChannel, [{
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
          // Replace |addStream| with PeerConnection.addTrack when all browsers are ready.
          var _iterator = _createForOfIteratorHelper(stream.mediaStream.getTracks()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var track = _step.value;

              _this3._pc.addTrack(track, stream.mediaStream);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          _this3._onNegotiationneeded();

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
      return this._signaling.sendSignalingMessage(this._remoteId, SignalingType.SDP, sdp);
    }
  }, {
    key: "_sendSignalingMessage",
    value: function _sendSignalingMessage(type, message) {
      return this._signaling.sendSignalingMessage(this._remoteId, type, message);
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

          // It could be a problem if there is a track published with different MediaStreams.
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

                  _this6._publishingStreams.splice(targetStreamIndex, 1);

                  var publication = new _publication.Publication(id, function () {
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
      var _iterator3 = _createForOfIteratorHelper(ids),
          _step3;

      try {
        var _loop2 = function _loop2() {
          var id = _step3.value;

          // It could be a problem if there is a track published with different MediaStreams.
          _this7._publishedStreamTracks.forEach(function (mediaTrackIds, mediaStreamId) {
            for (var i = 0; i < mediaTrackIds.length; i++) {
              if (mediaTrackIds[i] === id) {
                mediaTrackIds.splice(i, 1);
              }
            }
          });
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
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
      var _iterator4 = _createForOfIteratorHelper(data),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var info = _step4.value;

          this._remoteTrackSourceInfo.set(info.id, info.source);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
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

      sdp.sdp = this._setRtpSenderOptions(sdp.sdp, this._config); // Firefox only has one codec in answer, which does not truly reflect its
      // decoding capability. So we set codec preference to remote offer, and let
      // Firefox choose its preferred codec.
      // Reference: https://bugzilla.mozilla.org/show_bug.cgi?id=814227.

      if (Utils.isFirefox()) {
        sdp.sdp = this._setCodecOrder(sdp.sdp);
      }

      var sessionDescription = new RTCSessionDescription(sdp);

      this._pc.setRemoteDescription(sessionDescription).then(function () {
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

      this._pc.setRemoteDescription(new RTCSessionDescription(sessionDescription)).then(function () {
        _logger["default"].debug('Set remote descripiton successfully.');

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

      var _iterator5 = _createForOfIteratorHelper(event.streams),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var stream = _step5.value;

          if (!this._remoteStreamInfo.has(stream.id)) {
            _logger["default"].warning('Missing stream info.');

            return;
          }

          if (!this._remoteStreamInfo.get(stream.id).stream) {
            this._setStreamToRemoteStreamInfo(stream);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
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
      // This is intented to be executed when onnegotiationneeded event is fired.
      // However, onnegotiationneeded may fire mutiple times when more than one
      // track is added/removed. So we manually execute this function after
      // adding/removing track and creating data channel.
      _logger["default"].debug('On negotiation needed.');

      if (this._pc.signalingState === 'stable') {
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
    key: "_isUnifiedPlan",
    value: function _isUnifiedPlan() {
      if (Utils.isFirefox()) {
        return true;
      }

      var pc = new RTCPeerConnection({
        sdpSemantics: 'unified-plan'
      });
      return pc.getConfiguration() && pc.getConfiguration().sdpSemantics === 'plan-b';
    }
  }, {
    key: "_createPeerConnection",
    value: function _createPeerConnection() {
      var _this10 = this;

      var pcConfiguration = this._config.rtcConfiguration || {};

      if (Utils.isChrome()) {
        pcConfiguration.sdpSemantics = 'unified-plan';
      }

      this._pc = new RTCPeerConnection(pcConfiguration); // Firefox 59 implemented addTransceiver. However, mid in SDP will differ from track's ID in this case. And transceiver's mid is null.

      if (typeof this._pc.addTransceiver === 'function' && Utils.isSafari()) {
        this._pc.addTransceiver('audio');

        this._pc.addTransceiver('video');
      }

      if (!this._isUnifiedPlan() && !Utils.isSafari()) {
        this._pc.onaddstream = function (event) {
          // TODO: Legacy API, should be removed when all UAs implemented WebRTC 1.0.
          _this10._onRemoteStreamAdded.apply(_this10, [event]);
        };

        this._pc.onremovestream = function (event) {
          _this10._onRemoteStreamRemoved.apply(_this10, [event]);
        };
      } else {
        this._pc.ontrack = function (event) {
          _this10._onRemoteTrackAdded.apply(_this10, [event]);
        };
      }

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
      /*
      this._pc.oniceChannelStatechange = function(event) {
        _onIceChannelStateChange(peer, event);
      };
       = function() {
        onNegotiationneeded(peers[peer.id]);
      };
       //DataChannel
      this._pc.ondatachannel = function(event) {
        Logger.debug(myId + ': On data channel');
        // Save remote created data channel.
        if (!peer.dataChannels[event.channel.label]) {
          peer.dataChannels[event.channel.label] = event.channel;
          Logger.debug('Save remote created data channel.');
        }
        bindEventsToDataChannel(event.channel, peer);
      };*/

    }
  }, {
    key: "_drainPendingStreams",
    value: function _drainPendingStreams() {
      var negotiationNeeded = false;

      _logger["default"].debug('Draining pending streams.');

      if (this._pc && this._pc.signalingState === 'stable') {
        _logger["default"].debug('Peer connection is ready for draining pending streams.');

        for (var i = 0; i < this._pendingStreams.length; i++) {
          var stream = this._pendingStreams[i]; // OnNegotiationNeeded event will be triggered immediately after adding stream to PeerConnection in Firefox.
          // And OnNegotiationNeeded handler will execute drainPendingStreams. To avoid add the same stream multiple times,
          // shift it from pending stream list before adding it to PeerConnection.

          this._pendingStreams.shift();

          if (!stream.mediaStream) {
            continue;
          }

          var _iterator6 = _createForOfIteratorHelper(stream.mediaStream.getTracks()),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var track = _step6.value;

              this._pc.addTrack(track, stream.mediaStream);

              negotiationNeeded = true;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          _logger["default"].debug('Added stream to peer connection.');

          this._publishingStreams.push(stream);
        }

        this._pendingStreams.length = 0;

        for (var j = 0; j < this._pendingUnpublishStreams.length; j++) {
          if (!this._pendingUnpublishStreams[j].mediaStream) {
            continue;
          }

          this._pc.removeStream(this._pendingUnpublishStreams[j].mediaStream);

          negotiationNeeded = true;

          this._unpublishPromises.get(this._pendingUnpublishStreams[j].mediaStream.id).resolve();

          this._publishedStreams["delete"](this._pendingUnpublishStreams[j]);

          _logger["default"].debug('Remove stream.');
        }

        this._pendingUnpublishStreams.length = 0;
      }

      if (negotiationNeeded) {
        this._onNegotiationneeded();
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
      } else if (this._pc && !dc) {
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
        this._remoteSideSupportsPlanB = false;
        this._remoteSideSupportsUnifiedPlan = true;
      } else {
        // Remote side is iOS/Android/C++ which uses Google's WebRTC stack.
        this._remoteSideSupportsRemoveStream = true;
        this._remoteSideSupportsPlanB = true;
        this._remoteSideSupportsUnifiedPlan = false;
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
      this._isCaller = true;
      var localDesc;

      this._pc.createOffer().then(function (desc) {
        desc.sdp = _this11._setRtpReceiverOptions(desc.sdp);
        localDesc = desc;

        if (_this11._pc.signalingState === 'stable') {
          return _this11._pc.setLocalDescription(desc).then(function () {
            return _this11._sendSdp(localDesc);
          });
        }
      })["catch"](function (e) {
        _logger["default"].error(e.message + ' Please check your codec settings.');

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
      this._isCaller = false;
      var localDesc;

      this._pc.createAnswer().then(function (desc) {
        desc.sdp = _this12._setRtpReceiverOptions(desc.sdp);
        localDesc = desc;

        _this12._logCurrentAndPendingLocalDescription();

        return _this12._pc.setLocalDescription(desc);
      }).then(function () {
        return _this12._sendSdp(localDesc);
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

      this._onNegotiationneeded();
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

      var _iterator7 = _createForOfIteratorHelper(this._remoteStreamInfo),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _step7$value = (0, _slicedToArray2["default"])(_step7.value, 2),

          /* id */
          info = _step7$value[1];

          if (!info.stream || !info.stream.mediaStream) {
            continue;
          }

          var _iterator8 = _createForOfIteratorHelper(info.stream.mediaStream.getTracks()),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var track = _step8.value;

              if (mediaStreamTrack === track) {
                streams.push(info.stream.mediaStream);
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return streams;
    }
  }, {
    key: "_areAllTracksEnded",
    value: function _areAllTracksEnded(mediaStream) {
      var _iterator9 = _createForOfIteratorHelper(mediaStream.getTracks()),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var track = _step9.value;

          if (track.readyState === 'live') {
            return false;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
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

      var _iterator10 = _createForOfIteratorHelper(this._dataChannels),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _step10$value = (0, _slicedToArray2["default"])(_step10.value, 2),

          /* label */
          dc = _step10$value[1];

          dc.close();
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      this._dataChannels.clear();

      if (this._pc && this._pc.iceConnectionState !== 'closed') {
        this._pc.close();
      }

      var _iterator11 = _createForOfIteratorHelper(this._publishPromises),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _step11$value = (0, _slicedToArray2["default"])(_step11.value, 2),

          /* id */
          promise = _step11$value[1];

          promise.reject(promiseError);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      this._publishPromises.clear();

      var _iterator12 = _createForOfIteratorHelper(this._unpublishPromises),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var _step12$value = (0, _slicedToArray2["default"])(_step12.value, 2),

          /* id */
          _promise = _step12$value[1];

          _promise.reject(promiseError);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      this._unpublishPromises.clear();

      var _iterator13 = _createForOfIteratorHelper(this._sendDataPromises),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _step13$value = (0, _slicedToArray2["default"])(_step13.value, 2),

          /* id */
          _promise2 = _step13$value[1];

          _promise2.reject(promiseError);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
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
        var _iterator14 = _createForOfIteratorHelper(this._remoteStreamInfo),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _step14$value = (0, _slicedToArray2["default"])(_step14.value, 2),

            /* id */
            info = _step14$value[1];

            if (info.mediaStream) {
              var streamEvent = new StreamModule.StreamEvent('streamadded', {
                stream: info.stream
              });

              if (this._isUnifiedPlan()) {
                var _iterator15 = _createForOfIteratorHelper(info.mediaStream.getTracks()),
                    _step15;

                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var track = _step15.value;
                    track.addEventListener('ended', function (event) {
                      var mediaStreams = _this15._getStreamByTrack(event.target);

                      var _iterator16 = _createForOfIteratorHelper(mediaStreams),
                          _step16;

                      try {
                        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                          var mediaStream = _step16.value;

                          if (_this15._areAllTracksEnded(mediaStream)) {
                            _this15._onRemoteStreamRemoved({
                              stream: mediaStream
                            });
                          }
                        }
                      } catch (err) {
                        _iterator16.e(err);
                      } finally {
                        _iterator16.f();
                      }
                    });
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
              }

              this._sendSignalingMessage(SignalingType.TRACKS_ADDED, info.trackIds);

              this._remoteStreamInfo.get(info.mediaStream.id).mediaStream = null;
              this.dispatchEvent(streamEvent);
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
    }
  }]);
  return P2PPeerConnectionChannel;
}(_event.EventDispatcher);

var _default = P2PPeerConnectionChannel;
exports["default"] = _default;

},{"../base/event.js":26,"../base/logger.js":28,"../base/publication.js":31,"../base/sdputils.js":32,"../base/stream.js":33,"../base/utils.js":35,"./error.js":48,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11,"@babel/runtime/helpers/possibleConstructorReturn":16,"@babel/runtime/helpers/slicedToArray":18,"@babel/runtime/helpers/typeof":19,"@babel/runtime/helpers/wrapNativeSuper":21}]},{},[47])(47)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVGdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsInNyYy9zZGsvYmFzZS9iYXNlNjQuanMiLCJzcmMvc2RrL2Jhc2UvY29kZWMuanMiLCJzcmMvc2RrL2Jhc2UvZXZlbnQuanMiLCJzcmMvc2RrL2Jhc2UvZXhwb3J0LmpzIiwic3JjL3Nkay9iYXNlL2xvZ2dlci5qcyIsInNyYy9zZGsvYmFzZS9tZWRpYWZvcm1hdC5qcyIsInNyYy9zZGsvYmFzZS9tZWRpYXN0cmVhbS1mYWN0b3J5LmpzIiwic3JjL3Nkay9iYXNlL3B1YmxpY2F0aW9uLmpzIiwic3JjL3Nkay9iYXNlL3NkcHV0aWxzLmpzIiwic3JjL3Nkay9iYXNlL3N0cmVhbS5qcyIsInNyYy9zZGsvYmFzZS90cmFuc3BvcnQuanMiLCJzcmMvc2RrL2Jhc2UvdXRpbHMuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvY2hhbm5lbC5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9jbGllbnQuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvZXJyb3IuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvZXhwb3J0LmpzIiwic3JjL3Nkay9jb25mZXJlbmNlL2luZm8uanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvbWl4ZWRzdHJlYW0uanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvcGFydGljaXBhbnQuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvcXVpY2Nvbm5lY3Rpb24uanMiLCJzcmMvc2RrL2NvbmZlcmVuY2Uvc2lnbmFsaW5nLmpzIiwic3JjL3Nkay9jb25mZXJlbmNlL3N0cmVhbXV0aWxzLmpzIiwic3JjL3Nkay9jb25mZXJlbmNlL3N1YnNjcmlwdGlvbi5qcyIsInNyYy9zZGsvZXhwb3J0LmpzIiwic3JjL3Nkay9wMnAvZXJyb3IuanMiLCJzcmMvc2RrL3AycC9leHBvcnQuanMiLCJzcmMvc2RrL3AycC9wMnBjbGllbnQuanMiLCJzcmMvc2RrL3AycC9wZWVyY29ubmVjdGlvbi1jaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzV1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQUNPLElBQU0sTUFBTSxHQUFJLFlBQVc7QUFDaEMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUF0QjtBQUNBLE1BQUksU0FBSjtBQUNBLE1BQUksV0FBSjtBQUVBLE1BQUksQ0FBSjtBQUVBLE1BQU0sV0FBVyxHQUFHLENBQ2xCLEdBRGtCLEVBQ2IsR0FEYSxFQUNS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LFdBQXhCLENBQUosRUFBMEM7QUFDeEMsNEJBQUEsT0FBSSxDQUFDLHNCQUFMLENBQTRCO0FBQUMsOEJBQUEsTUFBTSxFQUFFO0FBQVQsNkJBQTVCO0FBQ0Q7QUFDRjtBQU53QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTzFDLHFCQVBEO0FBUUQ7QUFWd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVcxQjs7QUFDRCxtQkFBSyxxQkFBTCxDQUEyQixhQUFhLENBQUMsWUFBekMsRUFBdUQsSUFBSSxDQUFDLFFBQTVEOztBQUNBLG1CQUFLLGlCQUFMLENBQXVCLEdBQXZCLENBQTJCLElBQUksQ0FBQyxXQUFMLENBQWlCLEVBQTVDLEVBQWdELFdBQWhELEdBQThELElBQTlEO0FBQ0EsbUJBQUssYUFBTCxDQUFtQixXQUFuQjtBQUNEO0FBQ0Y7QUF0QjhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1QmhEO0FBQ0Y7OztFQXBoQ29DLHNCOztlQXVoQ3hCLHdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gcmVxdWlyZShcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0XCIpO1xuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0OyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVGdW5jdGlvbjsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxudmFyIGlzTmF0aXZlRnVuY3Rpb24gPSByZXF1aXJlKFwiLi9pc05hdGl2ZUZ1bmN0aW9uXCIpO1xuXG52YXIgY29uc3RydWN0ID0gcmVxdWlyZShcIi4vY29uc3RydWN0XCIpO1xuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF93cmFwTmF0aXZlU3VwZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLy8gTUlUIExpY2Vuc2Vcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTIgVW5pdmVyc2lkYWQgUG9saXTDqWNuaWNhIGRlIE1hZHJpZFxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuLy8gU09GVFdBUkUuXG5cbi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLy8gVGhpcyBmaWxlIGlzIGJvcnJvd2VkIGZyb20gbHluY2tpYS9saWNvZGUgd2l0aCBzb21lIG1vZGlmaWNhdGlvbnMuXG5cbi8qIGdsb2JhbCB1bmVzY2FwZSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgY29uc3QgQmFzZTY0ID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBFTkRfT0ZfSU5QVVQgPSAtMTtcbiAgbGV0IGJhc2U2NFN0cjtcbiAgbGV0IGJhc2U2NENvdW50O1xuXG4gIGxldCBpO1xuXG4gIGNvbnN0IGJhc2U2NENoYXJzID0gW1xuICAgICdBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLFxuICAgICdJJywgJ0onLCAnSycsICdMJywgJ00nLCAnTicsICdPJywgJ1AnLFxuICAgICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJywgJ1gnLFxuICAgICdZJywgJ1onLCAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLFxuICAgICdnJywgJ2gnLCAnaScsICdqJywgJ2snLCAnbCcsICdtJywgJ24nLFxuICAgICdvJywgJ3AnLCAncScsICdyJywgJ3MnLCAndCcsICd1JywgJ3YnLFxuICAgICd3JywgJ3gnLCAneScsICd6JywgJzAnLCAnMScsICcyJywgJzMnLFxuICAgICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcrJywgJy8nLFxuICBdO1xuXG4gIGNvbnN0IHJldmVyc2VCYXNlNjRDaGFycyA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBiYXNlNjRDaGFycy5sZW5ndGg7IGkgPSBpICsgMSkge1xuICAgIHJldmVyc2VCYXNlNjRDaGFyc1tiYXNlNjRDaGFyc1tpXV0gPSBpO1xuICB9XG5cbiAgY29uc3Qgc2V0QmFzZTY0U3RyID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgYmFzZTY0U3RyID0gc3RyO1xuICAgIGJhc2U2NENvdW50ID0gMDtcbiAgfTtcblxuICBjb25zdCByZWFkQmFzZTY0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFiYXNlNjRTdHIpIHtcbiAgICAgIHJldHVybiBFTkRfT0ZfSU5QVVQ7XG4gICAgfVxuICAgIGlmIChiYXNlNjRDb3VudCA+PSBiYXNlNjRTdHIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gRU5EX09GX0lOUFVUO1xuICAgIH1cbiAgICBjb25zdCBjID0gYmFzZTY0U3RyLmNoYXJDb2RlQXQoYmFzZTY0Q291bnQpICYgMHhmZjtcbiAgICBiYXNlNjRDb3VudCA9IGJhc2U2NENvdW50ICsgMTtcbiAgICByZXR1cm4gYztcbiAgfTtcblxuICBjb25zdCBlbmNvZGVCYXNlNjQgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBkb25lO1xuICAgIHNldEJhc2U2NFN0cihzdHIpO1xuICAgIHJlc3VsdCA9ICcnO1xuICAgIGNvbnN0IGluQnVmZmVyID0gbmV3IEFycmF5KDMpO1xuICAgIGRvbmUgPSBmYWxzZTtcbiAgICB3aGlsZSAoIWRvbmUgJiYgKGluQnVmZmVyWzBdID0gcmVhZEJhc2U2NCgpKSAhPT0gRU5EX09GX0lOUFVUKSB7XG4gICAgICBpbkJ1ZmZlclsxXSA9IHJlYWRCYXNlNjQoKTtcbiAgICAgIGluQnVmZmVyWzJdID0gcmVhZEJhc2U2NCgpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKGJhc2U2NENoYXJzW2luQnVmZmVyWzBdID4+IDJdKTtcbiAgICAgIGlmIChpbkJ1ZmZlclsxXSAhPT0gRU5EX09GX0lOUFVUKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIChiYXNlNjRDaGFyc1soKGluQnVmZmVyWzBdIDw8IDQpICYgMHgzMCkgfCAoXG4gICAgICAgICAgaW5CdWZmZXJbMV0gPj4gNCldKTtcbiAgICAgICAgaWYgKGluQnVmZmVyWzJdICE9PSBFTkRfT0ZfSU5QVVQpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAoYmFzZTY0Q2hhcnNbKChpbkJ1ZmZlclsxXSA8PCAyKSAmIDB4M2MpIHwgKFxuICAgICAgICAgICAgaW5CdWZmZXJbMl0gPj4gNildKTtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAoYmFzZTY0Q2hhcnNbaW5CdWZmZXJbMl0gJiAweDNGXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKGJhc2U2NENoYXJzWygoaW5CdWZmZXJbMV0gPDwgMikgJiAweDNjKV0pO1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICgnPScpO1xuICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAoYmFzZTY0Q2hhcnNbKChpbkJ1ZmZlclswXSA8PCA0KSAmIDB4MzApXSk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICgnPScpO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAoJz0nKTtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgcmVhZFJldmVyc2VCYXNlNjQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWJhc2U2NFN0cikge1xuICAgICAgcmV0dXJuIEVORF9PRl9JTlBVVDtcbiAgICB9XG4gICAgd2hpbGUgKHRydWUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICAgIGlmIChiYXNlNjRDb3VudCA+PSBiYXNlNjRTdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBFTkRfT0ZfSU5QVVQ7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0Q2hhcmFjdGVyID0gYmFzZTY0U3RyLmNoYXJBdChiYXNlNjRDb3VudCk7XG4gICAgICBiYXNlNjRDb3VudCA9IGJhc2U2NENvdW50ICsgMTtcbiAgICAgIGlmIChyZXZlcnNlQmFzZTY0Q2hhcnNbbmV4dENoYXJhY3Rlcl0pIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2VCYXNlNjRDaGFyc1tuZXh0Q2hhcmFjdGVyXTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2hhcmFjdGVyID09PSAnQScpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG50b3MgPSBmdW5jdGlvbihuKSB7XG4gICAgbiA9IG4udG9TdHJpbmcoMTYpO1xuICAgIGlmIChuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbiA9ICcwJyArIG47XG4gICAgfVxuICAgIG4gPSAnJScgKyBuO1xuICAgIHJldHVybiB1bmVzY2FwZShuKTtcbiAgfTtcblxuICBjb25zdCBkZWNvZGVCYXNlNjQgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBkb25lO1xuICAgIHNldEJhc2U2NFN0cihzdHIpO1xuICAgIHJlc3VsdCA9ICcnO1xuICAgIGNvbnN0IGluQnVmZmVyID0gbmV3IEFycmF5KDQpO1xuICAgIGRvbmUgPSBmYWxzZTtcbiAgICB3aGlsZSAoIWRvbmUgJiYgKGluQnVmZmVyWzBdID0gcmVhZFJldmVyc2VCYXNlNjQoKSkgIT09IEVORF9PRl9JTlBVVCAmJlxuICAgICAgKGluQnVmZmVyWzFdID0gcmVhZFJldmVyc2VCYXNlNjQoKSkgIT09IEVORF9PRl9JTlBVVCkge1xuICAgICAgaW5CdWZmZXJbMl0gPSByZWFkUmV2ZXJzZUJhc2U2NCgpO1xuICAgICAgaW5CdWZmZXJbM10gPSByZWFkUmV2ZXJzZUJhc2U2NCgpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgbnRvcygoKChpbkJ1ZmZlclswXSA8PCAyKSAmIDB4ZmYpIHwgaW5CdWZmZXJbMV0gPj5cbiAgICAgICAgNCkpO1xuICAgICAgaWYgKGluQnVmZmVyWzJdICE9PSBFTkRfT0ZfSU5QVVQpIHtcbiAgICAgICAgcmVzdWx0ICs9IG50b3MoKCgoaW5CdWZmZXJbMV0gPDwgNCkgJiAweGZmKSB8IGluQnVmZmVyWzJdID4+IDIpKTtcbiAgICAgICAgaWYgKGluQnVmZmVyWzNdICE9PSBFTkRfT0ZfSU5QVVQpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBudG9zKCgoKGluQnVmZmVyWzJdIDw8IDYpICYgMHhmZikgfCBpbkJ1ZmZlcltcbiAgICAgICAgICAgICAgM10pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBlbmNvZGVCYXNlNjQ6IGVuY29kZUJhc2U2NCxcbiAgICBkZWNvZGVCYXNlNjQ6IGRlY29kZUJhc2U2NCxcbiAgfTtcbn0oKSk7XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAY2xhc3MgQXVkaW9Db2RlY1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIEF1ZGlvIGNvZGVjIGVudW1lcmF0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgQXVkaW9Db2RlYyA9IHtcbiAgUENNVTogJ3BjbXUnLFxuICBQQ01BOiAncGNtYScsXG4gIE9QVVM6ICdvcHVzJyxcbiAgRzcyMjogJ2c3MjInLFxuICBJU0FDOiAnaVNBQycsXG4gIElMQkM6ICdpTEJDJyxcbiAgQUFDOiAnYWFjJyxcbiAgQUMzOiAnYWMzJyxcbiAgTkVMTFlNT1NFUjogJ25lbGx5bW9zZXInLFxufTtcbi8qKlxuICogQGNsYXNzIEF1ZGlvQ29kZWNQYXJhbWV0ZXJzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgQ29kZWMgcGFyYW1ldGVycyBmb3IgYW4gYXVkaW8gdHJhY2suXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBdWRpb0NvZGVjUGFyYW1ldGVycyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGNoYW5uZWxDb3VudCwgY2xvY2tSYXRlKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBuYW1lXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgTmFtZSBvZiBhIGNvZGVjLiBQbGVhc2UgYSB2YWx1ZSBpbiBPd3QuQmFzZS5BdWRpb0NvZGVjLiBIb3dldmVyLFxuICAgICAqIHNvbWUgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IGFsbCB0aGUgdmFsdWVzIGluIE93dC5CYXNlLkF1ZGlvQ29kZWMuXG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBjaGFubmVsQ291bnRcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9Db2RlY1BhcmFtZXRlcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBOdW1iZXJzIG9mIGNoYW5uZWxzIGZvciBhbiBhdWRpbyB0cmFjay5cbiAgICAgKi9cbiAgICB0aGlzLmNoYW5uZWxDb3VudCA9IGNoYW5uZWxDb3VudDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBjbG9ja1JhdGVcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9Db2RlY1BhcmFtZXRlcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBUaGUgY29kZWMgY2xvY2sgcmF0ZSBleHByZXNzZWQgaW4gSGVydHouXG4gICAgICovXG4gICAgdGhpcy5jbG9ja1JhdGUgPSBjbG9ja1JhdGU7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgQXVkaW9FbmNvZGluZ1BhcmFtZXRlcnNcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBFbmNvZGluZyBwYXJhbWV0ZXJzIGZvciBzZW5kaW5nIGFuIGF1ZGlvIHRyYWNrLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgQXVkaW9FbmNvZGluZ1BhcmFtZXRlcnMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlYywgbWF4Qml0cmF0ZSkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5BdWRpb0NvZGVjUGFyYW1ldGVyc30gY29kZWNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9FbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjID0gY29kZWM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gbWF4Qml0cmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb0VuY29kaW5nUGFyYW1ldGVyc1xuICAgICAqIEBkZXNjIE1heCBiaXRyYXRlIGV4cHJlc3NlZCBpbiBrYnBzLlxuICAgICAqL1xuICAgIHRoaXMubWF4Qml0cmF0ZSA9IG1heEJpdHJhdGU7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9Db2RlY1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFZpZGVvIGNvZGVjIGVudW1lcmF0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgVmlkZW9Db2RlYyA9IHtcbiAgVlA4OiAndnA4JyxcbiAgVlA5OiAndnA5JyxcbiAgSDI2NDogJ2gyNjQnLFxuICBIMjY1OiAnaDI2NScsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBWaWRlb0NvZGVjUGFyYW1ldGVyc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIENvZGVjIHBhcmFtZXRlcnMgZm9yIGEgdmlkZW8gdHJhY2suXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb0NvZGVjUGFyYW1ldGVycyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByb2ZpbGUpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9Db2RlY1BhcmFtZXRlcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBOYW1lIG9mIGEgY29kZWMuUGxlYXNlIGEgdmFsdWUgaW4gT3d0LkJhc2UuQXVkaW9Db2RlYy5Ib3dldmVyLFxuICAgICAgIHNvbWUgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IGFsbCB0aGUgdmFsdWVzIGluIE93dC5CYXNlLkF1ZGlvQ29kZWMuXG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/c3RyaW5nfSBwcm9maWxlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvQ29kZWNQYXJhbWV0ZXJzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgVGhlIHByb2ZpbGUgb2YgYSBjb2RlYy4gUHJvZmlsZSBtYXkgbm90IGFwcGx5IHRvIGFsbCBjb2RlY3MuXG4gICAgICovXG4gICAgdGhpcy5wcm9maWxlID0gcHJvZmlsZTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBWaWRlb0VuY29kaW5nUGFyYW1ldGVyc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIEVuY29kaW5nIHBhcmFtZXRlcnMgZm9yIHNlbmRpbmcgYSB2aWRlbyB0cmFjay5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFZpZGVvRW5jb2RpbmdQYXJhbWV0ZXJzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoY29kZWMsIG1heEJpdHJhdGUpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuVmlkZW9Db2RlY1BhcmFtZXRlcnN9IGNvZGVjXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvRW5jb2RpbmdQYXJhbWV0ZXJzXG4gICAgICovXG4gICAgdGhpcy5jb2RlYyA9IGNvZGVjO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IG1heEJpdHJhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9FbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgKiBAZGVzYyBNYXggYml0cmF0ZSBleHByZXNzZWQgaW4ga2Jwcy5cbiAgICAgKi9cbiAgICB0aGlzLm1heEJpdHJhdGUgPSBtYXhCaXRyYXRlO1xuICB9XG59XG4iLCIvLyBNSVQgTGljZW5zZVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxMiBVbml2ZXJzaWRhZCBQb2xpdMOpY25pY2EgZGUgTWFkcmlkXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4vLyBTT0ZUV0FSRS5cblxuLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vLyBUaGlzIGZpbGUgaXMgYm9ycm93ZWQgZnJvbSBseW5ja2lhL2xpY29kZSB3aXRoIHNvbWUgbW9kaWZpY2F0aW9ucy5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBFdmVudERpc3BhdGNoZXJcbiAqIEBjbGFzc0Rlc2MgQSBzaGltIGZvciBFdmVudFRhcmdldC4gTWlnaHQgYmUgY2hhbmdlZCB0byBFdmVudFRhcmdldCBsYXRlci5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgRXZlbnREaXNwYXRjaGVyID0gZnVuY3Rpb24oKSB7XG4gIC8vIFByaXZhdGUgdmFyc1xuICBjb25zdCBzcGVjID0ge307XG4gIHNwZWMuZGlzcGF0Y2hlciA9IHt9O1xuICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnMgPSB7fTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJcbiAgICogQGRlc2MgVGhpcyBmdW5jdGlvbiByZWdpc3RlcnMgYSBjYWxsYmFjayBmdW5jdGlvbiBhcyBhIGhhbmRsZXIgZm9yIHRoZVxuICAgKiBjb3JyZXNwb25kaW5nIGV2ZW50LiBJdCdzIHNob3J0ZW5lZCBmb3JtIGlzIG9uKGV2ZW50VHlwZSwgbGlzdGVuZXIpLiBTZWVcbiAgICogdGhlIGV2ZW50IGRlc2NyaXB0aW9uIGluIHRoZSBmb2xsb3dpbmcgdGFibGUuXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgRXZlbnQgc3RyaW5nLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvbi5cbiAgICovXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50VHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0gPSBbXTtcbiAgICB9XG4gICAgc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyXG4gICAqIEBkZXNjIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXIuXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgRXZlbnQgc3RyaW5nLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvbi5cbiAgICovXG4gIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50VHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoIXNwZWMuZGlzcGF0Y2hlci5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0uaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjbGVhckV2ZW50TGlzdGVuZXJcbiAgICogQGRlc2MgVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFsbCBldmVudCBsaXN0ZW5lcnMgZm9yIG9uZSB0eXBlLlxuICAgKiBAaW5zdGFuY2VcbiAgICogQG1lbWJlcm9mIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIEV2ZW50IHN0cmluZy5cbiAgICovXG4gIHRoaXMuY2xlYXJFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0gPSBbXTtcbiAgfTtcblxuICAvLyBJdCBkaXNwYXRjaCBhIG5ldyBldmVudCB0byB0aGUgZXZlbnQgbGlzdGVuZXJzLCBiYXNlZCBvbiB0aGUgdHlwZVxuICAvLyBvZiBldmVudC4gQWxsIGV2ZW50cyBhcmUgaW50ZW5kZWQgdG8gYmUgTGljb2RlRXZlbnRzLlxuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50LnR5cGVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNwZWMuZGlzcGF0Y2hlci5ldmVudExpc3RlbmVyc1tldmVudC50eXBlXS5tYXAoZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50KTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbi8qKlxuICogQGNsYXNzIE93dEV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIE93dEV2ZW50IHJlcHJlc2VudHMgYSBnZW5lcmljIEV2ZW50IGluIHRoZSBsaWJyYXJ5LlxuICogQG1lbWJlcm9mIE93dC5CYXNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBPd3RFdmVudCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIE1lc3NhZ2VFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBNZXNzYWdlRXZlbnQgcmVwcmVzZW50cyBhIG1lc3NhZ2UgRXZlbnQgaW4gdGhlIGxpYnJhcnkuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2VFdmVudCBleHRlbmRzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaW5pdCkge1xuICAgIHN1cGVyKHR5cGUpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gb3JpZ2luXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lc3NhZ2VFdmVudFxuICAgICAqIEBkZXNjIElEIG9mIHRoZSByZW1vdGUgZW5kcG9pbnQgd2hvIHB1Ymxpc2hlZCB0aGlzIHN0cmVhbS5cbiAgICAgKi9cbiAgICB0aGlzLm9yaWdpbiA9IGluaXQub3JpZ2luO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5NZXNzYWdlRXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLm1lc3NhZ2UgPSBpbml0Lm1lc3NhZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSB0b1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5NZXNzYWdlRXZlbnRcbiAgICAgKiBAZGVzYyBWYWx1ZXMgY291bGQgYmUgXCJhbGxcIiwgXCJtZVwiIGluIGNvbmZlcmVuY2UgbW9kZSwgb3IgdW5kZWZpbmVkIGluXG4gICAgICogUDJQIG1vZGUuXG4gICAgICovXG4gICAgdGhpcy50byA9IGluaXQudG87XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgRXJyb3JFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBFcnJvckV2ZW50IHJlcHJlc2VudHMgYW4gZXJyb3IgRXZlbnQgaW4gdGhlIGxpYnJhcnkuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEVycm9yRXZlbnQgZXh0ZW5kcyBPd3RFdmVudCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGluaXQpIHtcbiAgICBzdXBlcih0eXBlKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtFcnJvcn0gZXJyb3JcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuRXJyb3JFdmVudFxuICAgICAqL1xuICAgIHRoaXMuZXJyb3IgPSBpbml0LmVycm9yO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIE11dGVFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBNdXRlRXZlbnQgcmVwcmVzZW50cyBhIG11dGUgb3IgdW5tdXRlIGV2ZW50LlxuICogQG1lbWJlcm9mIE93dC5CYXNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBNdXRlRXZlbnQgZXh0ZW5kcyBPd3RFdmVudCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGluaXQpIHtcbiAgICBzdXBlcih0eXBlKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5UcmFja0tpbmR9IGtpbmRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuTXV0ZUV2ZW50XG4gICAgICovXG4gICAgdGhpcy5raW5kID0gaW5pdC5raW5kO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0ICogZnJvbSAnLi9tZWRpYXN0cmVhbS1mYWN0b3J5LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vc3RyZWFtLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vbWVkaWFmb3JtYXQuanMnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc3BvcnQuanMnO1xuIiwiLy8gTUlUIExpY2Vuc2Vcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTIgVW5pdmVyc2lkYWQgUG9saXTDqWNuaWNhIGRlIE1hZHJpZFxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuLy8gU09GVFdBUkUuXG5cbi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLy8gVGhpcyBmaWxlIGlzIGJvcnJvd2VkIGZyb20gbHluY2tpYS9saWNvZGUgd2l0aCBzb21lIG1vZGlmaWNhdGlvbnMuXG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKlxuICogQVBJIHRvIHdyaXRlIGxvZ3MgYmFzZWQgb24gdHJhZGl0aW9uYWwgbG9nZ2luZyBtZWNoYW5pc21zOiBkZWJ1ZywgdHJhY2UsXG4gKiBpbmZvLCB3YXJuaW5nLCBlcnJvclxuICovXG5jb25zdCBMb2dnZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IERFQlVHID0gMDtcbiAgY29uc3QgVFJBQ0UgPSAxO1xuICBjb25zdCBJTkZPID0gMjtcbiAgY29uc3QgV0FSTklORyA9IDM7XG4gIGNvbnN0IEVSUk9SID0gNDtcbiAgY29uc3QgTk9ORSA9IDU7XG5cbiAgY29uc3Qgbm9PcCA9IGZ1bmN0aW9uKCkge307XG5cbiAgLy8gfHRoYXR8IGlzIHRoZSBvYmplY3QgdG8gYmUgcmV0dXJuZWQuXG4gIGNvbnN0IHRoYXQgPSB7XG4gICAgREVCVUc6IERFQlVHLFxuICAgIFRSQUNFOiBUUkFDRSxcbiAgICBJTkZPOiBJTkZPLFxuICAgIFdBUk5JTkc6IFdBUk5JTkcsXG4gICAgRVJST1I6IEVSUk9SLFxuICAgIE5PTkU6IE5PTkUsXG4gIH07XG5cbiAgdGhhdC5sb2cgPSAoLi4uYXJncykgPT4ge1xuICAgIHdpbmRvdy5jb25zb2xlLmxvZygobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSwgLi4uYXJncyk7XG4gIH07XG5cbiAgY29uc3QgYmluZFR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuY29uc29sZVt0eXBlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlW3R5cGVdKChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLCAuLi5hcmdzKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGF0LmxvZztcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0TG9nTGV2ZWwgPSBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmIChsZXZlbCA8PSBERUJVRykge1xuICAgICAgdGhhdC5kZWJ1ZyA9IGJpbmRUeXBlKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LmRlYnVnID0gbm9PcDtcbiAgICB9XG4gICAgaWYgKGxldmVsIDw9IFRSQUNFKSB7XG4gICAgICB0aGF0LnRyYWNlID0gYmluZFR5cGUoJ3RyYWNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQudHJhY2UgPSBub09wO1xuICAgIH1cbiAgICBpZiAobGV2ZWwgPD0gSU5GTykge1xuICAgICAgdGhhdC5pbmZvID0gYmluZFR5cGUoJ2luZm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5pbmZvID0gbm9PcDtcbiAgICB9XG4gICAgaWYgKGxldmVsIDw9IFdBUk5JTkcpIHtcbiAgICAgIHRoYXQud2FybmluZyA9IGJpbmRUeXBlKCd3YXJuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQud2FybmluZyA9IG5vT3A7XG4gICAgfVxuICAgIGlmIChsZXZlbCA8PSBFUlJPUikge1xuICAgICAgdGhhdC5lcnJvciA9IGJpbmRUeXBlKCdlcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LmVycm9yID0gbm9PcDtcbiAgICB9XG4gIH07XG5cbiAgc2V0TG9nTGV2ZWwoREVCVUcpOyAvLyBEZWZhdWx0IGxldmVsIGlzIGRlYnVnLlxuXG4gIHRoYXQuc2V0TG9nTGV2ZWwgPSBzZXRMb2dMZXZlbDtcblxuICByZXR1cm4gdGhhdDtcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dlcjtcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAY2xhc3MgQXVkaW9Tb3VyY2VJbmZvXG4gKiBAY2xhc3NEZXNjIFNvdXJjZSBpbmZvIGFib3V0IGFuIGF1ZGlvIHRyYWNrLiBWYWx1ZXM6ICdtaWMnLCAnc2NyZWVuLWNhc3QnLFxuICogJ2ZpbGUnLCAnbWl4ZWQnLlxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAcmVhZG9ubHlcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBBdWRpb1NvdXJjZUluZm8gPSB7XG4gIE1JQzogJ21pYycsXG4gIFNDUkVFTkNBU1Q6ICdzY3JlZW4tY2FzdCcsXG4gIEZJTEU6ICdmaWxlJyxcbiAgTUlYRUQ6ICdtaXhlZCcsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBWaWRlb1NvdXJjZUluZm9cbiAqIEBjbGFzc0Rlc2MgU291cmNlIGluZm8gYWJvdXQgYSB2aWRlbyB0cmFjay4gVmFsdWVzOiAnY2FtZXJhJywgJ3NjcmVlbi1jYXN0JyxcbiAqICdmaWxlJywgJ21peGVkJy5cbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQHJlYWRvbmx5XG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgVmlkZW9Tb3VyY2VJbmZvID0ge1xuICBDQU1FUkE6ICdjYW1lcmEnLFxuICBTQ1JFRU5DQVNUOiAnc2NyZWVuLWNhc3QnLFxuICBGSUxFOiAnZmlsZScsXG4gIE1JWEVEOiAnbWl4ZWQnLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgVHJhY2tLaW5kXG4gKiBAY2xhc3NEZXNjIEtpbmQgb2YgYSB0cmFjay4gVmFsdWVzOiAnYXVkaW8nIGZvciBhdWRpbyB0cmFjaywgJ3ZpZGVvJyBmb3JcbiAqIHZpZGVvIHRyYWNrLCAnYXYnIGZvciBib3RoIGF1ZGlvIGFuZCB2aWRlbyB0cmFja3MuXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEByZWFkb25seVxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFRyYWNrS2luZCA9IHtcbiAgLyoqXG4gICAqIEF1ZGlvIHRyYWNrcy5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBBVURJTzogJ2F1ZGlvJyxcbiAgLyoqXG4gICAqIFZpZGVvIHRyYWNrcy5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBWSURFTzogJ3ZpZGVvJyxcbiAgLyoqXG4gICAqIEJvdGggYXVkaW8gYW5kIHZpZGVvIHRyYWNrcy5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBBVURJT19BTkRfVklERU86ICdhdicsXG59O1xuLyoqXG4gKiBAY2xhc3MgUmVzb2x1dGlvblxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFRoZSBSZXNvbHV0aW9uIGRlZmluZXMgdGhlIHNpemUgb2YgYSByZWN0YW5nbGUuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICovXG5leHBvcnQgY2xhc3MgUmVzb2x1dGlvbiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IHdpZHRoXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlJlc29sdXRpb25cbiAgICAgKi9cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUmVzb2x1dGlvblxuICAgICAqL1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBQcm9taXNlLCBuYXZpZ2F0b3IgKi9cblxuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgKiBhcyBNZWRpYUZvcm1hdE1vZHVsZSBmcm9tICcuL21lZGlhZm9ybWF0LmpzJztcblxuLyoqXG4gKiBAY2xhc3MgQXVkaW9UcmFja0NvbnN0cmFpbnRzXG4gKiBAY2xhc3NEZXNjIENvbnN0cmFpbnRzIGZvciBjcmVhdGluZyBhbiBhdWRpbyBNZWRpYVN0cmVhbVRyYWNrLlxuICogQG1lbWJlcm9mIE93dC5CYXNlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7T3d0LkJhc2UuQXVkaW9Tb3VyY2VJbmZvfSBzb3VyY2UgU291cmNlIGluZm8gb2YgdGhpcyBhdWRpbyB0cmFjay5cbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvVHJhY2tDb25zdHJhaW50cyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHNvdXJjZSkge1xuICAgIGlmICghT2JqZWN0LnZhbHVlcyhNZWRpYUZvcm1hdE1vZHVsZS5BdWRpb1NvdXJjZUluZm8pXG4gICAgICAgIC5zb21lKCh2KSA9PiB2ID09PSBzb3VyY2UpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHNvdXJjZS4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBzb3VyY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9UcmFja0NvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgVmFsdWVzIGNvdWxkIGJlIFwibWljXCIsIFwic2NyZWVuLWNhc3RcIiwgXCJmaWxlXCIgb3IgXCJtaXhlZFwiLlxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gZGV2aWNlSWRcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9UcmFja0NvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgRG8gbm90IHByb3ZpZGUgZGV2aWNlSWQgaWYgc291cmNlIGlzIG5vdCBcIm1pY1wiLlxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBzZWUgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL21lZGlhY2FwdHVyZS1tYWluLyNkZWYtY29uc3RyYWludC1kZXZpY2VJZFxuICAgICAqL1xuICAgIHRoaXMuZGV2aWNlSWQgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9UcmFja0NvbnN0cmFpbnRzXG4gKiBAY2xhc3NEZXNjIENvbnN0cmFpbnRzIGZvciBjcmVhdGluZyBhIHZpZGVvIE1lZGlhU3RyZWFtVHJhY2suXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPd3QuQmFzZS5WaWRlb1NvdXJjZUluZm99IHNvdXJjZSBTb3VyY2UgaW5mbyBvZiB0aGlzIHZpZGVvIHRyYWNrLlxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9UcmFja0NvbnN0cmFpbnRzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3Ioc291cmNlKSB7XG4gICAgaWYgKCFPYmplY3QudmFsdWVzKE1lZGlhRm9ybWF0TW9kdWxlLlZpZGVvU291cmNlSW5mbylcbiAgICAgICAgLnNvbWUoKHYpID0+IHYgPT09IHNvdXJjZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgc291cmNlLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHNvdXJjZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBWYWx1ZXMgY291bGQgYmUgXCJjYW1lcmFcIiwgXCJzY3JlZW4tY2FzdFwiLCBcImZpbGVcIiBvciBcIm1peGVkXCIuXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBkZXZpY2VJZFxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBEbyBub3QgcHJvdmlkZSBkZXZpY2VJZCBpZiBzb3VyY2UgaXMgbm90IFwiY2FtZXJhXCIuXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHNlZSBodHRwczovL3czYy5naXRodWIuaW8vbWVkaWFjYXB0dXJlLW1haW4vI2RlZi1jb25zdHJhaW50LWRldmljZUlkXG4gICAgICovXG5cbiAgICB0aGlzLmRldmljZUlkID0gdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuUmVzb2x1dGlvbn0gcmVzb2x1dGlvblxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IGZyYW1lUmF0ZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLmZyYW1lUmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuLyoqXG4gKiBAY2xhc3MgU3RyZWFtQ29uc3RyYWludHNcbiAqIEBjbGFzc0Rlc2MgQ29uc3RyYWludHMgZm9yIGNyZWF0aW5nIGEgTWVkaWFTdHJlYW0gZnJvbSBzY3JlZW4gbWljIGFuZCBjYW1lcmEuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHs/T3d0LkJhc2UuQXVkaW9UcmFja0NvbnN0cmFpbnRzfSBhdWRpb0NvbnN0cmFpbnRzXG4gKiBAcGFyYW0gez9Pd3QuQmFzZS5WaWRlb1RyYWNrQ29uc3RyYWludHN9IHZpZGVvQ29uc3RyYWludHNcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbUNvbnN0cmFpbnRzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoYXVkaW9Db25zdHJhaW50cyA9IGZhbHNlLCB2aWRlb0NvbnN0cmFpbnRzID0gZmFsc2UpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5NZWRpYVN0cmVhbVRyYWNrRGV2aWNlQ29uc3RyYWludHNGb3JBdWRpb30gYXVkaW9cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuTWVkaWFTdHJlYW1EZXZpY2VDb25zdHJhaW50c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRoaXMuYXVkaW8gPSBhdWRpb0NvbnN0cmFpbnRzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLk1lZGlhU3RyZWFtVHJhY2tEZXZpY2VDb25zdHJhaW50c0ZvclZpZGVvfSBWaWRlb1xuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5NZWRpYVN0cmVhbURldmljZUNvbnN0cmFpbnRzXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy52aWRlbyA9IHZpZGVvQ29uc3RyYWludHM7XG4gIH1cbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmZ1bmN0aW9uIGlzVmlkZW9Db25zdHJhaW5zRm9yU2NyZWVuQ2FzdChjb25zdHJhaW50cykge1xuICByZXR1cm4gKHR5cGVvZiBjb25zdHJhaW50cy52aWRlbyA9PT0gJ29iamVjdCcgJiYgY29uc3RyYWludHMudmlkZW8uc291cmNlID09PVxuICAgICAgTWVkaWFGb3JtYXRNb2R1bGUuVmlkZW9Tb3VyY2VJbmZvLlNDUkVFTkNBU1QpO1xufVxuXG4vKipcbiAqIEBjbGFzcyBNZWRpYVN0cmVhbUZhY3RvcnlcbiAqIEBjbGFzc0Rlc2MgQSBmYWN0b3J5IHRvIGNyZWF0ZSBNZWRpYVN0cmVhbS4gWW91IGNhbiBhbHNvIGNyZWF0ZSBNZWRpYVN0cmVhbVxuICogYnkgeW91cnNlbGYuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqL1xuZXhwb3J0IGNsYXNzIE1lZGlhU3RyZWFtRmFjdG9yeSB7XG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gY3JlYXRlTWVkaWFTdHJlYW1cbiAgICogQHN0YXRpY1xuICAgKiBAZGVzYyBDcmVhdGUgYSBNZWRpYVN0cmVhbSB3aXRoIGdpdmVuIGNvbnN0cmFpbnRzLiBJZiB5b3Ugd2FudCB0byBjcmVhdGUgYVxuICAgKiBNZWRpYVN0cmVhbSBmb3Igc2NyZWVuIGNhc3QsIHBsZWFzZSBtYWtlIHN1cmUgYm90aCBhdWRpbyBhbmQgdmlkZW8ncyBzb3VyY2VcbiAgICogYXJlIFwic2NyZWVuLWNhc3RcIi5cbiAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lZGlhU3RyZWFtRmFjdG9yeVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE1lZGlhU3RyZWFtLCBFcnJvcj59IFJldHVybiBhIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZFxuICAgKiB3aGVuIHN0cmVhbSBpcyBzdWNjZXNzZnVsbHkgY3JlYXRlZCwgb3IgcmVqZWN0ZWQgaWYgb25lIG9mIHRoZSBmb2xsb3dpbmdcbiAgICogZXJyb3IgaGFwcGVuZWQ6XG4gICAqIC0gT25lIG9yIG1vcmUgcGFyYW1ldGVycyBjYW5ub3QgYmUgc2F0aXNmaWVkLlxuICAgKiAtIFNwZWNpZmllZCBkZXZpY2UgaXMgYnVzeS5cbiAgICogLSBDYW5ub3Qgb2J0YWluIG5lY2Vzc2FyeSBwZXJtaXNzaW9uIG9yIG9wZXJhdGlvbiBpcyBjYW5jZWxlZCBieSB1c2VyLlxuICAgKiAtIFZpZGVvIHNvdXJjZSBpcyBzY3JlZW4gY2FzdCwgd2hpbGUgYXVkaW8gc291cmNlIGlzIG5vdC5cbiAgICogLSBBdWRpbyBzb3VyY2UgaXMgc2NyZWVuIGNhc3QsIHdoaWxlIHZpZGVvIHNvdXJjZSBpcyBkaXNhYmxlZC5cbiAgICogQHBhcmFtIHtPd3QuQmFzZS5TdHJlYW1Db25zdHJhaW50c30gY29uc3RyYWludHNcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVNZWRpYVN0cmVhbShjb25zdHJhaW50cykge1xuICAgIGlmICh0eXBlb2YgY29uc3RyYWludHMgIT09ICdvYmplY3QnIHx8XG4gICAgICAgICghY29uc3RyYWludHMuYXVkaW8gJiYgIWNvbnN0cmFpbnRzLnZpZGVvKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29uc3RyYWlucycpKTtcbiAgICB9XG4gICAgaWYgKCFpc1ZpZGVvQ29uc3RyYWluc0ZvclNjcmVlbkNhc3QoY29uc3RyYWludHMpICYmXG4gICAgICAgICh0eXBlb2YgY29uc3RyYWludHMuYXVkaW8gPT09ICdvYmplY3QnKSAmJlxuICAgICAgICBjb25zdHJhaW50cy5hdWRpby5zb3VyY2UgPT09XG4gICAgICAgICAgICBNZWRpYUZvcm1hdE1vZHVsZS5BdWRpb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgIG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBzaGFyZSBzY3JlZW4gd2l0aG91dCB2aWRlby4nKSk7XG4gICAgfVxuICAgIGlmIChpc1ZpZGVvQ29uc3RyYWluc0ZvclNjcmVlbkNhc3QoY29uc3RyYWludHMpICYmXG4gICAgICAgIHR5cGVvZiBjb25zdHJhaW50cy5hdWRpbyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgY29uc3RyYWludHMuYXVkaW8uc291cmNlICE9PVxuICAgICAgICAgICAgTWVkaWFGb3JtYXRNb2R1bGUuQXVkaW9Tb3VyY2VJbmZvLlNDUkVFTkNBU1QpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICdDYW5ub3QgY2FwdHVyZSB2aWRlbyBmcm9tIHNjcmVlbiBjYXN0IHdoaWxlIGNhcHR1cmUgYXVkaW8gZnJvbSdcbiAgICAgICAgICArICcgb3RoZXIgc291cmNlLicpKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBhbmQgY29udmVydCBjb25zdHJhaW50cy5cbiAgICBpZiAoIWNvbnN0cmFpbnRzLmF1ZGlvICYmICFjb25zdHJhaW50cy52aWRlbykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgJ0F0IGxlYXN0IG9uZSBvZiBhdWRpbyBhbmQgdmlkZW8gbXVzdCBiZSByZXF1ZXN0ZWQuJykpO1xuICAgIH1cbiAgICBjb25zdCBtZWRpYUNvbnN0cmFpbnRzID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgaWYgKHR5cGVvZiBjb25zdHJhaW50cy5hdWRpbyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgY29uc3RyYWludHMuYXVkaW8uc291cmNlID09PSBNZWRpYUZvcm1hdE1vZHVsZS5BdWRpb1NvdXJjZUluZm8uTUlDKSB7XG4gICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgICBpZiAodXRpbHMuaXNFZGdlKCkpIHtcbiAgICAgICAgbWVkaWFDb25zdHJhaW50cy5hdWRpby5kZXZpY2VJZCA9IGNvbnN0cmFpbnRzLmF1ZGlvLmRldmljZUlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVkaWFDb25zdHJhaW50cy5hdWRpby5kZXZpY2VJZCA9IHtcbiAgICAgICAgICBleGFjdDogY29uc3RyYWludHMuYXVkaW8uZGV2aWNlSWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb25zdHJhaW50cy5hdWRpby5zb3VyY2UgPT09XG4gICAgICAgICAgTWVkaWFGb3JtYXRNb2R1bGUuQXVkaW9Tb3VyY2VJbmZvLlNDUkVFTkNBU1QpIHtcbiAgICAgICAgbWVkaWFDb25zdHJhaW50cy5hdWRpbyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvID0gY29uc3RyYWludHMuYXVkaW87XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29uc3RyYWludHMudmlkZW8gPT09ICdvYmplY3QnKSB7XG4gICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnN0cmFpbnRzLnZpZGVvLmZyYW1lUmF0ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby5mcmFtZVJhdGUgPSBjb25zdHJhaW50cy52aWRlby5mcmFtZVJhdGU7XG4gICAgICB9XG4gICAgICBpZiAoY29uc3RyYWludHMudmlkZW8ucmVzb2x1dGlvbiAmJlxuICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLnJlc29sdXRpb24ud2lkdGggJiZcbiAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uLmhlaWdodCkge1xuICAgICAgICBpZiAoY29uc3RyYWludHMudmlkZW8uc291cmNlID09PVxuICAgICAgICAgICAgICBNZWRpYUZvcm1hdE1vZHVsZS5WaWRlb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCkge1xuICAgICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8ud2lkdGggPSBjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uLndpZHRoO1xuICAgICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8uaGVpZ2h0ID0gY29uc3RyYWludHMudmlkZW8ucmVzb2x1dGlvbi5oZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby53aWR0aCA9IE9iamVjdC5jcmVhdGUoe30pO1xuICAgICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8ud2lkdGguZXhhY3QgPVxuICAgICAgICAgICAgY29uc3RyYWludHMudmlkZW8ucmVzb2x1dGlvbi53aWR0aDtcbiAgICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvLmhlaWdodCA9IE9iamVjdC5jcmVhdGUoe30pO1xuICAgICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8uaGVpZ2h0LmV4YWN0ID1cbiAgICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLnJlc29sdXRpb24uaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkID09PSAnc3RyaW5nJykge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkID0ge2V4YWN0OiBjb25zdHJhaW50cy52aWRlby5kZXZpY2VJZH07XG4gICAgICB9XG4gICAgICBpZiAodXRpbHMuaXNGaXJlZm94KCkgJiZcbiAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5zb3VyY2UgPT09XG4gICAgICAgICAgICAgIE1lZGlhRm9ybWF0TW9kdWxlLlZpZGVvU291cmNlSW5mby5TQ1JFRU5DQVNUKSB7XG4gICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8ubWVkaWFTb3VyY2UgPSAnc2NyZWVuJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzLnZpZGVvO1xuICAgIH1cblxuICAgIGlmIChpc1ZpZGVvQ29uc3RyYWluc0ZvclNjcmVlbkNhc3QoY29uc3RyYWludHMpKSB7XG4gICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXREaXNwbGF5TWVkaWEobWVkaWFDb25zdHJhaW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShtZWRpYUNvbnN0cmFpbnRzKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyfSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcblxuLyoqXG4gKiBAY2xhc3MgQXVkaW9QdWJsaWNhdGlvblNldHRpbmdzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgVGhlIGF1ZGlvIHNldHRpbmdzIG9mIGEgcHVibGljYXRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3Mge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlYykge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5BdWRpb0NvZGVjUGFyYW1ldGVyc30gY29kZWNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5jb2RlYyA9IGNvZGVjO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvUHVibGljYXRpb25TZXR0aW5nc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFRoZSB2aWRlbyBzZXR0aW5ncyBvZiBhIHB1YmxpY2F0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoY29kZWMsIHJlc29sdXRpb24sIGZyYW1lUmF0ZSxcbiAgICAgIGJpdHJhdGUsIGtleUZyYW1lSW50ZXJ2YWwsIHJpZCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5WaWRlb0NvZGVjUGFyYW1ldGVyc30gY29kZWNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5jb2RlYz1jb2RlYyxcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuUmVzb2x1dGlvbn0gcmVzb2x1dGlvblxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdXRpb249cmVzb2x1dGlvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBmcmFtZVJhdGVzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGNsYXNzRGVzYyBGcmFtZXMgcGVyIHNlY29uZC5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5mcmFtZVJhdGU9ZnJhbWVSYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGJpdHJhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5iaXRyYXRlPWJpdHJhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0ga2V5RnJhbWVJbnRlcnZhbHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAY2xhc3NEZXNjIFRoZSB0aW1lIGludGVydmFsIGJldHdlZW4ga2V5IGZyYW1lcy4gVW5pdDogc2Vjb25kLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmtleUZyYW1lSW50ZXJ2YWw9a2V5RnJhbWVJbnRlcnZhbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSByaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAY2xhc3NEZXNjIFJlc3RyaWN0aW9uIGlkZW50aWZpZXIgdG8gaWRlbnRpZnkgdGhlIFJUUCBTdHJlYW1zIHdpdGhpbiBhbiBSVFAgc2Vzc2lvbi5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5yaWQ9cmlkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFB1YmxpY2F0aW9uU2V0dGluZ3NcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBUaGUgc2V0dGluZ3Mgb2YgYSBwdWJsaWNhdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFB1YmxpY2F0aW9uU2V0dGluZ3Mge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpbywgdmlkZW8pIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5BdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3NbXX0gYXVkaW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25TZXR0aW5nc1xuICAgICAqL1xuICAgIHRoaXMuYXVkaW89YXVkaW87XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzW119IHZpZGVvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLnZpZGVvPXZpZGVvO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFB1YmxpY2F0aW9uXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBQdWJsaWNhdGlvbiByZXByZXNlbnRzIGEgc2VuZGVyIGZvciBwdWJsaXNoaW5nIGEgc3RyZWFtLiBJdFxuICogaGFuZGxlcyB0aGUgYWN0aW9ucyBvbiBhIExvY2FsU3RyZWFtIHB1Ymxpc2hlZCB0byBhIGNvbmZlcmVuY2UuXG4gKlxuICogRXZlbnRzOlxuICpcbiAqIHwgRXZlbnQgTmFtZSAgICAgIHwgQXJndW1lbnQgVHlwZSAgICB8IEZpcmVkIHdoZW4gICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tfCAtLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGVuZGVkICAgICAgICAgICB8IEV2ZW50ICAgICAgICAgICAgfCBQdWJsaWNhdGlvbiBpcyBlbmRlZC4gfFxuICogfCBlcnJvciAgICAgICAgICAgfCBFcnJvckV2ZW50ICAgICAgIHwgQW4gZXJyb3Igb2NjdXJyZWQgb24gdGhlIHB1YmxpY2F0aW9uLiB8XG4gKiB8IG11dGUgICAgICAgICAgICB8IE11dGVFdmVudCAgICAgICAgfCBQdWJsaWNhdGlvbiBpcyBtdXRlZC4gQ2xpZW50IHN0b3BwZWQgc2VuZGluZyBhdWRpbyBhbmQvb3IgdmlkZW8gZGF0YSB0byByZW1vdGUgZW5kcG9pbnQuIHxcbiAqIHwgdW5tdXRlICAgICAgICAgIHwgTXV0ZUV2ZW50ICAgICAgICB8IFB1YmxpY2F0aW9uIGlzIHVubXV0ZWQuIENsaWVudCBjb250aW51ZWQgc2VuZGluZyBhdWRpbyBhbmQvb3IgdmlkZW8gZGF0YSB0byByZW1vdGUgZW5kcG9pbnQuIHxcbiAqXG4gKiBgZW5kZWRgIGV2ZW50IG1heSBub3QgYmUgZmlyZWQgb24gU2FmYXJpIGFmdGVyIGNhbGxpbmcgYFB1YmxpY2F0aW9uLnN0b3AoKWAuXG4gKlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgUHVibGljYXRpb24gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihpZCwgc3RvcCwgZ2V0U3RhdHMsIG11dGUsIHVubXV0ZSkge1xuICAgIHN1cGVyKCk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaWNhdGlvblxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGlkID8gaWQgOiBVdGlscy5jcmVhdGVVdWlkKCksXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIHN0b3BcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBTdG9wIGNlcnRhaW4gcHVibGljYXRpb24uIE9uY2UgYSBzdWJzY3JpcHRpb24gaXMgc3RvcHBlZCwgaXQgY2Fubm90XG4gICAgICogYmUgcmVjb3ZlcmVkLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaWNhdGlvblxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5zdG9wID0gc3RvcDtcbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gZ2V0U3RhdHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBHZXQgc3RhdHMgb2YgdW5kZXJseWluZyBQZWVyQ29ubmVjdGlvbi5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSVENTdGF0c1JlcG9ydCwgRXJyb3I+fVxuICAgICAqL1xuICAgIHRoaXMuZ2V0U3RhdHMgPSBnZXRTdGF0cztcbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gbXV0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIFN0b3Agc2VuZGluZyBkYXRhIHRvIHJlbW90ZSBlbmRwb2ludC5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25cbiAgICAgKiBAcGFyYW0ge093dC5CYXNlLlRyYWNrS2luZCB9IGtpbmQgS2luZCBvZiB0cmFja3MgdG8gYmUgbXV0ZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5kZWZpbmVkLCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy5tdXRlID0gbXV0ZTtcbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gdW5tdXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgQ29udGludWUgc2VuZGluZyBkYXRhIHRvIHJlbW90ZSBlbmRwb2ludC5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25cbiAgICAgKiBAcGFyYW0ge093dC5CYXNlLlRyYWNrS2luZCB9IGtpbmQgS2luZCBvZiB0cmFja3MgdG8gYmUgdW5tdXRlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQsIEVycm9yPn1cbiAgICAgKi9cbiAgICB0aGlzLnVubXV0ZSA9IHVubXV0ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBQdWJsaXNoT3B0aW9uc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFB1Ymxpc2hPcHRpb25zIGRlZmluZXMgb3B0aW9ucyBmb3IgcHVibGlzaGluZyBhXG4gKiBPd3QuQmFzZS5Mb2NhbFN0cmVhbS5cbiAqL1xuZXhwb3J0IGNsYXNzIFB1Ymxpc2hPcHRpb25zIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoYXVkaW8sIHZpZGVvLCB0cmFuc3BvcnQpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/QXJyYXk8T3d0LkJhc2UuQXVkaW9FbmNvZGluZ1BhcmFtZXRlcnM+IHwgP0FycmF5PFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycz59IGF1ZGlvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1Ymxpc2hPcHRpb25zXG4gICAgICogQGRlc2MgUGFyYW1ldGVycyBmb3IgYXVkaW8gUnRwU2VuZGVyLiBQdWJsaXNoaW5nIHdpdGggUlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzIGlzIGFuIGV4cGVyaW1lbnRhbCBmZWF0dXJlLiBJdCBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cbiAgICAgKi9cbiAgICB0aGlzLmF1ZGlvID0gYXVkaW87XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P0FycmF5PE93dC5CYXNlLlZpZGVvRW5jb2RpbmdQYXJhbWV0ZXJzPiB8ID9BcnJheTxSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnM+fSB2aWRlb1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaXNoT3B0aW9uc1xuICAgICAqIEBkZXNjIFBhcmFtZXRlcnMgZm9yIHZpZGVvIFJ0cFNlbmRlci4gUHVibGlzaGluZyB3aXRoIFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycyBpcyBhbiBleHBlcmltZW50YWwgZmVhdHVyZS4gSXQgaXMgc3ViamVjdCB0byBjaGFuZ2UuXG4gICAgICovXG4gICAgdGhpcy52aWRlbyA9IHZpZGVvO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5UcmFuc3BvcnRDb25zdHJhaW50c30gdHJhbnNwb3J0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1Ymxpc2hPcHRpb25zXG4gICAgICovXG4gICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gIH1cbn1cbiIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE0IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuXG4vKiBNb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZXNlIG9wdGlvbnMgYXQganNoaW50LmNvbS9kb2NzL29wdGlvbnMgKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyogZ2xvYmFscyAgYWRhcHRlciwgdHJhY2UgKi9cbi8qIGV4cG9ydGVkIHNldENvZGVjUGFyYW0sIGljZUNhbmRpZGF0ZVR5cGUsIGZvcm1hdFR5cGVQcmVmZXJlbmNlLFxuICAgbWF5YmVTZXRPcHVzT3B0aW9ucywgbWF5YmVQcmVmZXJBdWRpb1JlY2VpdmVDb2RlYyxcbiAgIG1heWJlUHJlZmVyQXVkaW9TZW5kQ29kZWMsIG1heWJlU2V0QXVkaW9SZWNlaXZlQml0UmF0ZSxcbiAgIG1heWJlU2V0QXVkaW9TZW5kQml0UmF0ZSwgbWF5YmVQcmVmZXJWaWRlb1JlY2VpdmVDb2RlYyxcbiAgIG1heWJlUHJlZmVyVmlkZW9TZW5kQ29kZWMsIG1heWJlU2V0VmlkZW9SZWNlaXZlQml0UmF0ZSxcbiAgIG1heWJlU2V0VmlkZW9TZW5kQml0UmF0ZSwgbWF5YmVTZXRWaWRlb1NlbmRJbml0aWFsQml0UmF0ZSxcbiAgIG1heWJlUmVtb3ZlVmlkZW9GZWMsIG1lcmdlQ29uc3RyYWludHMsIHJlbW92ZUNvZGVjUGFyYW0qL1xuXG4vKiBUaGlzIGZpbGUgaXMgYm9ycm93ZWQgZnJvbSBhcHBydGMgd2l0aCBzb21lIG1vZGlmaWNhdGlvbnMuICovXG4vKiBDb21taXQgaGFzaDogYzZhZjBjMjVlOWFmNTI3ZjcxYjNhY2RkNmJmYTEzODlkNzc4ZjdiZCArIFBSIDUzMCAqL1xuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyLmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBtZXJnZUNvbnN0cmFpbnRzKGNvbnMxLCBjb25zMikge1xuICBpZiAoIWNvbnMxIHx8ICFjb25zMikge1xuICAgIHJldHVybiBjb25zMSB8fCBjb25zMjtcbiAgfVxuICBjb25zdCBtZXJnZWQgPSBjb25zMTtcbiAgZm9yIChjb25zdCBrZXkgaW4gY29uczIpIHtcbiAgICBtZXJnZWRba2V5XSA9IGNvbnMyW2tleV07XG4gIH1cbiAgcmV0dXJuIG1lcmdlZDtcbn1cblxuZnVuY3Rpb24gaWNlQ2FuZGlkYXRlVHlwZShjYW5kaWRhdGVTdHIpIHtcbiAgcmV0dXJuIGNhbmRpZGF0ZVN0ci5zcGxpdCgnICcpWzddO1xufVxuXG4vLyBUdXJucyB0aGUgbG9jYWwgdHlwZSBwcmVmZXJlbmNlIGludG8gYSBodW1hbi1yZWFkYWJsZSBzdHJpbmcuXG4vLyBOb3RlIHRoYXQgdGhpcyBtYXBwaW5nIGlzIGJyb3dzZXItc3BlY2lmaWMuXG5mdW5jdGlvbiBmb3JtYXRUeXBlUHJlZmVyZW5jZShwcmVmKSB7XG4gIGlmIChhZGFwdGVyLmJyb3dzZXJEZXRhaWxzLmJyb3dzZXIgPT09ICdjaHJvbWUnKSB7XG4gICAgc3dpdGNoIChwcmVmKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiAnVFVSTi9UTFMnO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gJ1RVUk4vVENQJztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuICdUVVJOL1VEUCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWRhcHRlci5icm93c2VyRGV0YWlscy5icm93c2VyID09PSAnZmlyZWZveCcpIHtcbiAgICBzd2l0Y2ggKHByZWYpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuICdUVVJOL1RDUCc7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHJldHVybiAnVFVSTi9VRFAnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gbWF5YmVTZXRPcHVzT3B0aW9ucyhzZHAsIHBhcmFtcykge1xuICAvLyBTZXQgT3B1cyBpbiBTdGVyZW8sIGlmIHN0ZXJlbyBpcyB0cnVlLCB1bnNldCBpdCwgaWYgc3RlcmVvIGlzIGZhbHNlLCBhbmRcbiAgLy8gZG8gbm90aGluZyBpZiBvdGhlcndpc2UuXG4gIGlmIChwYXJhbXMub3B1c1N0ZXJlbyA9PT0gJ3RydWUnKSB7XG4gICAgc2RwID0gc2V0Q29kZWNQYXJhbShzZHAsICdvcHVzLzQ4MDAwJywgJ3N0ZXJlbycsICcxJyk7XG4gIH0gZWxzZSBpZiAocGFyYW1zLm9wdXNTdGVyZW8gPT09ICdmYWxzZScpIHtcbiAgICBzZHAgPSByZW1vdmVDb2RlY1BhcmFtKHNkcCwgJ29wdXMvNDgwMDAnLCAnc3RlcmVvJyk7XG4gIH1cblxuICAvLyBTZXQgT3B1cyBGRUMsIGlmIG9wdXNmZWMgaXMgdHJ1ZSwgdW5zZXQgaXQsIGlmIG9wdXNmZWMgaXMgZmFsc2UsIGFuZFxuICAvLyBkbyBub3RoaW5nIGlmIG90aGVyd2lzZS5cbiAgaWYgKHBhcmFtcy5vcHVzRmVjID09PSAndHJ1ZScpIHtcbiAgICBzZHAgPSBzZXRDb2RlY1BhcmFtKHNkcCwgJ29wdXMvNDgwMDAnLCAndXNlaW5iYW5kZmVjJywgJzEnKTtcbiAgfSBlbHNlIGlmIChwYXJhbXMub3B1c0ZlYyA9PT0gJ2ZhbHNlJykge1xuICAgIHNkcCA9IHJlbW92ZUNvZGVjUGFyYW0oc2RwLCAnb3B1cy80ODAwMCcsICd1c2VpbmJhbmRmZWMnKTtcbiAgfVxuXG4gIC8vIFNldCBPcHVzIERUWCwgaWYgb3B1c2R0eCBpcyB0cnVlLCB1bnNldCBpdCwgaWYgb3B1c2R0eCBpcyBmYWxzZSwgYW5kXG4gIC8vIGRvIG5vdGhpbmcgaWYgb3RoZXJ3aXNlLlxuICBpZiAocGFyYW1zLm9wdXNEdHggPT09ICd0cnVlJykge1xuICAgIHNkcCA9IHNldENvZGVjUGFyYW0oc2RwLCAnb3B1cy80ODAwMCcsICd1c2VkdHgnLCAnMScpO1xuICB9IGVsc2UgaWYgKHBhcmFtcy5vcHVzRHR4ID09PSAnZmFsc2UnKSB7XG4gICAgc2RwID0gcmVtb3ZlQ29kZWNQYXJhbShzZHAsICdvcHVzLzQ4MDAwJywgJ3VzZWR0eCcpO1xuICB9XG5cbiAgLy8gU2V0IE9wdXMgbWF4cGxheWJhY2tyYXRlLCBpZiByZXF1ZXN0ZWQuXG4gIGlmIChwYXJhbXMub3B1c01heFBicikge1xuICAgIHNkcCA9IHNldENvZGVjUGFyYW0oXG4gICAgICAgIHNkcCwgJ29wdXMvNDgwMDAnLCAnbWF4cGxheWJhY2tyYXRlJywgcGFyYW1zLm9wdXNNYXhQYnIpO1xuICB9XG4gIHJldHVybiBzZHA7XG59XG5cbmZ1bmN0aW9uIG1heWJlU2V0QXVkaW9TZW5kQml0UmF0ZShzZHAsIHBhcmFtcykge1xuICBpZiAoIXBhcmFtcy5hdWRpb1NlbmRCaXRyYXRlKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBMb2dnZXIuZGVidWcoJ1ByZWZlciBhdWRpbyBzZW5kIGJpdHJhdGU6ICcgKyBwYXJhbXMuYXVkaW9TZW5kQml0cmF0ZSk7XG4gIHJldHVybiBwcmVmZXJCaXRSYXRlKHNkcCwgcGFyYW1zLmF1ZGlvU2VuZEJpdHJhdGUsICdhdWRpbycpO1xufVxuXG5mdW5jdGlvbiBtYXliZVNldEF1ZGlvUmVjZWl2ZUJpdFJhdGUoc2RwLCBwYXJhbXMpIHtcbiAgaWYgKCFwYXJhbXMuYXVkaW9SZWN2Qml0cmF0ZSkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgTG9nZ2VyLmRlYnVnKCdQcmVmZXIgYXVkaW8gcmVjZWl2ZSBiaXRyYXRlOiAnICsgcGFyYW1zLmF1ZGlvUmVjdkJpdHJhdGUpO1xuICByZXR1cm4gcHJlZmVyQml0UmF0ZShzZHAsIHBhcmFtcy5hdWRpb1JlY3ZCaXRyYXRlLCAnYXVkaW8nKTtcbn1cblxuZnVuY3Rpb24gbWF5YmVTZXRWaWRlb1NlbmRCaXRSYXRlKHNkcCwgcGFyYW1zKSB7XG4gIGlmICghcGFyYW1zLnZpZGVvU2VuZEJpdHJhdGUpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIExvZ2dlci5kZWJ1ZygnUHJlZmVyIHZpZGVvIHNlbmQgYml0cmF0ZTogJyArIHBhcmFtcy52aWRlb1NlbmRCaXRyYXRlKTtcbiAgcmV0dXJuIHByZWZlckJpdFJhdGUoc2RwLCBwYXJhbXMudmlkZW9TZW5kQml0cmF0ZSwgJ3ZpZGVvJyk7XG59XG5cbmZ1bmN0aW9uIG1heWJlU2V0VmlkZW9SZWNlaXZlQml0UmF0ZShzZHAsIHBhcmFtcykge1xuICBpZiAoIXBhcmFtcy52aWRlb1JlY3ZCaXRyYXRlKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBMb2dnZXIuZGVidWcoJ1ByZWZlciB2aWRlbyByZWNlaXZlIGJpdHJhdGU6ICcgKyBwYXJhbXMudmlkZW9SZWN2Qml0cmF0ZSk7XG4gIHJldHVybiBwcmVmZXJCaXRSYXRlKHNkcCwgcGFyYW1zLnZpZGVvUmVjdkJpdHJhdGUsICd2aWRlbycpO1xufVxuXG4vLyBBZGQgYSBiPUFTOmJpdHJhdGUgbGluZSB0byB0aGUgbT1tZWRpYVR5cGUgc2VjdGlvbi5cbmZ1bmN0aW9uIHByZWZlckJpdFJhdGUoc2RwLCBiaXRyYXRlLCBtZWRpYVR5cGUpIHtcbiAgY29uc3Qgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuXG4gIC8vIEZpbmQgbSBsaW5lIGZvciB0aGUgZ2l2ZW4gbWVkaWFUeXBlLlxuICBjb25zdCBtTGluZUluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdtPScsIG1lZGlhVHlwZSk7XG4gIGlmIChtTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdGYWlsZWQgdG8gYWRkIGJhbmR3aWR0aCBsaW5lIHRvIHNkcCwgYXMgbm8gbS1saW5lIGZvdW5kJyk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIC8vIEZpbmQgbmV4dCBtLWxpbmUgaWYgYW55LlxuICBsZXQgbmV4dE1MaW5lSW5kZXggPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIG1MaW5lSW5kZXggKyAxLCAtMSwgJ209Jyk7XG4gIGlmIChuZXh0TUxpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIG5leHRNTGluZUluZGV4ID0gc2RwTGluZXMubGVuZ3RoO1xuICB9XG5cbiAgLy8gRmluZCBjLWxpbmUgY29ycmVzcG9uZGluZyB0byB0aGUgbS1saW5lLlxuICBjb25zdCBjTGluZUluZGV4ID0gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBtTGluZUluZGV4ICsgMSxcbiAgICAgIG5leHRNTGluZUluZGV4LCAnYz0nKTtcbiAgaWYgKGNMaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0ZhaWxlZCB0byBhZGQgYmFuZHdpZHRoIGxpbmUgdG8gc2RwLCBhcyBubyBjLWxpbmUgZm91bmQnKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYmFuZHdpZHRoIGxpbmUgYWxyZWFkeSBleGlzdHMgYmV0d2VlbiBjLWxpbmUgYW5kIG5leHQgbS1saW5lLlxuICBjb25zdCBiTGluZUluZGV4ID0gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBjTGluZUluZGV4ICsgMSxcbiAgICAgIG5leHRNTGluZUluZGV4LCAnYj1BUycpO1xuICBpZiAoYkxpbmVJbmRleCkge1xuICAgIHNkcExpbmVzLnNwbGljZShiTGluZUluZGV4LCAxKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgYiAoYmFuZHdpZHRoKSBzZHAgbGluZS5cbiAgY29uc3QgYndMaW5lID0gJ2I9QVM6JyArIGJpdHJhdGU7XG4gIC8vIEFzIHBlciBSRkMgNDU2NiwgdGhlIGIgbGluZSBzaG91bGQgZm9sbG93IGFmdGVyIGMtbGluZS5cbiAgc2RwTGluZXMuc3BsaWNlKGNMaW5lSW5kZXggKyAxLCAwLCBid0xpbmUpO1xuICBzZHAgPSBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcbiAgcmV0dXJuIHNkcDtcbn1cblxuLy8gQWRkIGFuIGE9Zm10cDogeC1nb29nbGUtbWluLWJpdHJhdGU9a2JwcyBsaW5lLCBpZiB2aWRlb1NlbmRJbml0aWFsQml0cmF0ZVxuLy8gaXMgc3BlY2lmaWVkLiBXZSdsbCBhbHNvIGFkZCBhIHgtZ29vZ2xlLW1pbi1iaXRyYXRlIHZhbHVlLCBzaW5jZSB0aGUgbWF4XG4vLyBtdXN0IGJlID49IHRoZSBtaW4uXG5mdW5jdGlvbiBtYXliZVNldFZpZGVvU2VuZEluaXRpYWxCaXRSYXRlKHNkcCwgcGFyYW1zKSB7XG4gIGxldCBpbml0aWFsQml0cmF0ZSA9IHBhcnNlSW50KHBhcmFtcy52aWRlb1NlbmRJbml0aWFsQml0cmF0ZSk7XG4gIGlmICghaW5pdGlhbEJpdHJhdGUpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgLy8gVmFsaWRhdGUgdGhlIGluaXRpYWwgYml0cmF0ZSB2YWx1ZS5cbiAgbGV0IG1heEJpdHJhdGUgPSBwYXJzZUludChpbml0aWFsQml0cmF0ZSk7XG4gIGNvbnN0IGJpdHJhdGUgPSBwYXJzZUludChwYXJhbXMudmlkZW9TZW5kQml0cmF0ZSk7XG4gIGlmIChiaXRyYXRlKSB7XG4gICAgaWYgKGluaXRpYWxCaXRyYXRlID4gYml0cmF0ZSkge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdDbGFtcGluZyBpbml0aWFsIGJpdHJhdGUgdG8gbWF4IGJpdHJhdGUgb2YgJyArIGJpdHJhdGUgKyAnIGticHMuJyk7XG4gICAgICBpbml0aWFsQml0cmF0ZSA9IGJpdHJhdGU7XG4gICAgICBwYXJhbXMudmlkZW9TZW5kSW5pdGlhbEJpdHJhdGUgPSBpbml0aWFsQml0cmF0ZTtcbiAgICB9XG4gICAgbWF4Qml0cmF0ZSA9IGJpdHJhdGU7XG4gIH1cblxuICBjb25zdCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG5cbiAgLy8gU2VhcmNoIGZvciBtIGxpbmUuXG4gIGNvbnN0IG1MaW5lSW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ209JywgJ3ZpZGVvJyk7XG4gIGlmIChtTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdGYWlsZWQgdG8gZmluZCB2aWRlbyBtLWxpbmUnKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIC8vIEZpZ3VyZSBvdXQgdGhlIGZpcnN0IGNvZGVjIHBheWxvYWQgdHlwZSBvbiB0aGUgbT12aWRlbyBTRFAgbGluZS5cbiAgY29uc3QgdmlkZW9NTGluZSA9IHNkcExpbmVzW21MaW5lSW5kZXhdO1xuICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgnbT12aWRlb1xcXFxzXFxcXGQrXFxcXHNbQS1aL10rXFxcXHMnKTtcbiAgY29uc3Qgc2VuZFBheWxvYWRUeXBlID0gdmlkZW9NTGluZS5zcGxpdChwYXR0ZXJuKVsxXS5zcGxpdCgnICcpWzBdO1xuICBjb25zdCBmbXRwTGluZSA9IHNkcExpbmVzW2ZpbmRMaW5lKHNkcExpbmVzLCAnYT1ydHBtYXAnLCBzZW5kUGF5bG9hZFR5cGUpXTtcbiAgY29uc3QgY29kZWNOYW1lID0gZm10cExpbmUuc3BsaXQoJ2E9cnRwbWFwOicgK1xuICAgICAgc2VuZFBheWxvYWRUeXBlKVsxXS5zcGxpdCgnLycpWzBdO1xuXG4gIC8vIFVzZSBjb2RlYyBmcm9tIHBhcmFtcyBpZiBzcGVjaWZpZWQgdmlhIFVSTCBwYXJhbSwgb3RoZXJ3aXNlIHVzZSBmcm9tIFNEUC5cbiAgY29uc3QgY29kZWMgPSBwYXJhbXMudmlkZW9TZW5kQ29kZWMgfHwgY29kZWNOYW1lO1xuICBzZHAgPSBzZXRDb2RlY1BhcmFtKHNkcCwgY29kZWMsICd4LWdvb2dsZS1taW4tYml0cmF0ZScsXG4gICAgICBwYXJhbXMudmlkZW9TZW5kSW5pdGlhbEJpdHJhdGUudG9TdHJpbmcoKSk7XG4gIHNkcCA9IHNldENvZGVjUGFyYW0oc2RwLCBjb2RlYywgJ3gtZ29vZ2xlLW1heC1iaXRyYXRlJyxcbiAgICAgIG1heEJpdHJhdGUudG9TdHJpbmcoKSk7XG5cbiAgcmV0dXJuIHNkcDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUGF5bG9hZFR5cGVGcm9tTWxpbmUobUxpbmUsIHBheWxvYWRUeXBlKSB7XG4gIG1MaW5lID0gbUxpbmUuc3BsaXQoJyAnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtTGluZS5sZW5ndGg7ICsraSkge1xuICAgIGlmIChtTGluZVtpXSA9PT0gcGF5bG9hZFR5cGUudG9TdHJpbmcoKSkge1xuICAgICAgbUxpbmUuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbUxpbmUuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDb2RlY0J5TmFtZShzZHBMaW5lcywgY29kZWMpIHtcbiAgY29uc3QgaW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ2E9cnRwbWFwJywgY29kZWMpO1xuICBpZiAoaW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwTGluZXM7XG4gIH1cbiAgY29uc3QgcGF5bG9hZFR5cGUgPSBnZXRDb2RlY1BheWxvYWRUeXBlRnJvbUxpbmUoc2RwTGluZXNbaW5kZXhdKTtcbiAgc2RwTGluZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAvLyBTZWFyY2ggZm9yIHRoZSB2aWRlbyBtPSBsaW5lIGFuZCByZW1vdmUgdGhlIGNvZGVjLlxuICBjb25zdCBtTGluZUluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdtPScsICd2aWRlbycpO1xuICBpZiAobUxpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHBMaW5lcztcbiAgfVxuICBzZHBMaW5lc1ttTGluZUluZGV4XSA9IHJlbW92ZVBheWxvYWRUeXBlRnJvbU1saW5lKHNkcExpbmVzW21MaW5lSW5kZXhdLFxuICAgICAgcGF5bG9hZFR5cGUpO1xuICByZXR1cm4gc2RwTGluZXM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvZGVjQnlQYXlsb2FkVHlwZShzZHBMaW5lcywgcGF5bG9hZFR5cGUpIHtcbiAgY29uc3QgaW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ2E9cnRwbWFwJywgcGF5bG9hZFR5cGUudG9TdHJpbmcoKSk7XG4gIGlmIChpbmRleCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHBMaW5lcztcbiAgfVxuICBzZHBMaW5lcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIC8vIFNlYXJjaCBmb3IgdGhlIHZpZGVvIG09IGxpbmUgYW5kIHJlbW92ZSB0aGUgY29kZWMuXG4gIGNvbnN0IG1MaW5lSW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ209JywgJ3ZpZGVvJyk7XG4gIGlmIChtTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcExpbmVzO1xuICB9XG4gIHNkcExpbmVzW21MaW5lSW5kZXhdID0gcmVtb3ZlUGF5bG9hZFR5cGVGcm9tTWxpbmUoc2RwTGluZXNbbUxpbmVJbmRleF0sXG4gICAgICBwYXlsb2FkVHlwZSk7XG4gIHJldHVybiBzZHBMaW5lcztcbn1cblxuZnVuY3Rpb24gbWF5YmVSZW1vdmVWaWRlb0ZlYyhzZHAsIHBhcmFtcykge1xuICBpZiAocGFyYW1zLnZpZGVvRmVjICE9PSAnZmFsc2UnKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIGxldCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG5cbiAgbGV0IGluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdhPXJ0cG1hcCcsICdyZWQnKTtcbiAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBjb25zdCByZWRQYXlsb2FkVHlwZSA9IGdldENvZGVjUGF5bG9hZFR5cGVGcm9tTGluZShzZHBMaW5lc1tpbmRleF0pO1xuICBzZHBMaW5lcyA9IHJlbW92ZUNvZGVjQnlQYXlsb2FkVHlwZShzZHBMaW5lcywgcmVkUGF5bG9hZFR5cGUpO1xuXG4gIHNkcExpbmVzID0gcmVtb3ZlQ29kZWNCeU5hbWUoc2RwTGluZXMsICd1bHBmZWMnKTtcblxuICAvLyBSZW1vdmUgZm10cCBsaW5lcyBhc3NvY2lhdGVkIHdpdGggcmVkIGNvZGVjLlxuICBpbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1mbXRwJywgcmVkUGF5bG9hZFR5cGUudG9TdHJpbmcoKSk7XG4gIGlmIChpbmRleCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgY29uc3QgZm10cExpbmUgPSBwYXJzZUZtdHBMaW5lKHNkcExpbmVzW2luZGV4XSk7XG4gIGNvbnN0IHJ0eFBheWxvYWRUeXBlID0gZm10cExpbmUucHQ7XG4gIGlmIChydHhQYXlsb2FkVHlwZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgc2RwTGluZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICBzZHBMaW5lcyA9IHJlbW92ZUNvZGVjQnlQYXlsb2FkVHlwZShzZHBMaW5lcywgcnR4UGF5bG9hZFR5cGUpO1xuICByZXR1cm4gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XG59XG5cbi8vIFByb21vdGVzIHxhdWRpb1NlbmRDb2RlY3wgdG8gYmUgdGhlIGZpcnN0IGluIHRoZSBtPWF1ZGlvIGxpbmUsIGlmIHNldC5cbmZ1bmN0aW9uIG1heWJlUHJlZmVyQXVkaW9TZW5kQ29kZWMoc2RwLCBwYXJhbXMpIHtcbiAgcmV0dXJuIG1heWJlUHJlZmVyQ29kZWMoc2RwLCAnYXVkaW8nLCAnc2VuZCcsIHBhcmFtcy5hdWRpb1NlbmRDb2RlYyk7XG59XG5cbi8vIFByb21vdGVzIHxhdWRpb1JlY3ZDb2RlY3wgdG8gYmUgdGhlIGZpcnN0IGluIHRoZSBtPWF1ZGlvIGxpbmUsIGlmIHNldC5cbmZ1bmN0aW9uIG1heWJlUHJlZmVyQXVkaW9SZWNlaXZlQ29kZWMoc2RwLCBwYXJhbXMpIHtcbiAgcmV0dXJuIG1heWJlUHJlZmVyQ29kZWMoc2RwLCAnYXVkaW8nLCAncmVjZWl2ZScsIHBhcmFtcy5hdWRpb1JlY3ZDb2RlYyk7XG59XG5cbi8vIFByb21vdGVzIHx2aWRlb1NlbmRDb2RlY3wgdG8gYmUgdGhlIGZpcnN0IGluIHRoZSBtPWF1ZGlvIGxpbmUsIGlmIHNldC5cbmZ1bmN0aW9uIG1heWJlUHJlZmVyVmlkZW9TZW5kQ29kZWMoc2RwLCBwYXJhbXMpIHtcbiAgcmV0dXJuIG1heWJlUHJlZmVyQ29kZWMoc2RwLCAndmlkZW8nLCAnc2VuZCcsIHBhcmFtcy52aWRlb1NlbmRDb2RlYyk7XG59XG5cbi8vIFByb21vdGVzIHx2aWRlb1JlY3ZDb2RlY3wgdG8gYmUgdGhlIGZpcnN0IGluIHRoZSBtPWF1ZGlvIGxpbmUsIGlmIHNldC5cbmZ1bmN0aW9uIG1heWJlUHJlZmVyVmlkZW9SZWNlaXZlQ29kZWMoc2RwLCBwYXJhbXMpIHtcbiAgcmV0dXJuIG1heWJlUHJlZmVyQ29kZWMoc2RwLCAndmlkZW8nLCAncmVjZWl2ZScsIHBhcmFtcy52aWRlb1JlY3ZDb2RlYyk7XG59XG5cbi8vIFNldHMgfGNvZGVjfCBhcyB0aGUgZGVmYXVsdCB8dHlwZXwgY29kZWMgaWYgaXQncyBwcmVzZW50LlxuLy8gVGhlIGZvcm1hdCBvZiB8Y29kZWN8IGlzICdOQU1FL1JBVEUnLCBlLmcuICdvcHVzLzQ4MDAwJy5cbmZ1bmN0aW9uIG1heWJlUHJlZmVyQ29kZWMoc2RwLCB0eXBlLCBkaXIsIGNvZGVjKSB7XG4gIGNvbnN0IHN0ciA9IHR5cGUgKyAnICcgKyBkaXIgKyAnIGNvZGVjJztcbiAgaWYgKCFjb2RlYykge1xuICAgIExvZ2dlci5kZWJ1ZygnTm8gcHJlZmVyZW5jZSBvbiAnICsgc3RyICsgJy4nKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgTG9nZ2VyLmRlYnVnKCdQcmVmZXIgJyArIHN0ciArICc6ICcgKyBjb2RlYyk7XG5cbiAgY29uc3Qgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuXG4gIC8vIFNlYXJjaCBmb3IgbSBsaW5lLlxuICBjb25zdCBtTGluZUluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdtPScsIHR5cGUpO1xuICBpZiAobUxpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICAvLyBJZiB0aGUgY29kZWMgaXMgYXZhaWxhYmxlLCBzZXQgaXQgYXMgdGhlIGRlZmF1bHQgaW4gbSBsaW5lLlxuICBsZXQgcGF5bG9hZCA9IG51bGw7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2RwTGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbmRleCA9IGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgaSwgLTEsICdhPXJ0cG1hcCcsIGNvZGVjKTtcbiAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcbiAgICAgIHBheWxvYWQgPSBnZXRDb2RlY1BheWxvYWRUeXBlRnJvbUxpbmUoc2RwTGluZXNbaW5kZXhdKTtcbiAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgIHNkcExpbmVzW21MaW5lSW5kZXhdID0gc2V0RGVmYXVsdENvZGVjKHNkcExpbmVzW21MaW5lSW5kZXhdLCBwYXlsb2FkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZHAgPSBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcbiAgcmV0dXJuIHNkcDtcbn1cblxuLy8gU2V0IGZtdHAgcGFyYW0gdG8gc3BlY2lmaWMgY29kZWMgaW4gU0RQLiBJZiBwYXJhbSBkb2VzIG5vdCBleGlzdHMsIGFkZCBpdC5cbmZ1bmN0aW9uIHNldENvZGVjUGFyYW0oc2RwLCBjb2RlYywgcGFyYW0sIHZhbHVlLCBtaWQpIHtcbiAgbGV0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcbiAgbGV0IGhlYWRMaW5lcyA9IG51bGw7XG4gIGxldCB0YWlsTGluZXMgPSBudWxsO1xuICBpZiAodHlwZW9mIG1pZCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtaWRSYW5nZSA9IGZpbmRNTGluZVJhbmdlV2l0aE1JRChzZHBMaW5lcywgbWlkKTtcbiAgICBpZiAobWlkUmFuZ2UpIHtcbiAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gbWlkUmFuZ2U7XG4gICAgICBoZWFkTGluZXMgPSBzZHBMaW5lcy5zbGljZSgwLCBzdGFydCk7XG4gICAgICB0YWlsTGluZXMgPSBzZHBMaW5lcy5zbGljZShlbmQpO1xuICAgICAgc2RwTGluZXMgPSBzZHBMaW5lcy5zbGljZShzdGFydCwgZW5kKTtcbiAgICB9XG4gIH1cblxuICAvLyBTRFBzIHNlbnQgZnJvbSBNQ1UgdXNlIFxcbiBhcyBsaW5lIGJyZWFrLlxuICBpZiAoc2RwTGluZXMubGVuZ3RoIDw9IDEpIHtcbiAgICBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxuJyk7XG4gIH1cblxuICBjb25zdCBmbXRwTGluZUluZGV4ID0gZmluZEZtdHBMaW5lKHNkcExpbmVzLCBjb2RlYyk7XG5cbiAgbGV0IGZtdHBPYmogPSB7fTtcbiAgaWYgKGZtdHBMaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICBjb25zdCBpbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1ydHBtYXAnLCBjb2RlYyk7XG4gICAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gc2RwO1xuICAgIH1cbiAgICBjb25zdCBwYXlsb2FkID0gZ2V0Q29kZWNQYXlsb2FkVHlwZUZyb21MaW5lKHNkcExpbmVzW2luZGV4XSk7XG4gICAgZm10cE9iai5wdCA9IHBheWxvYWQudG9TdHJpbmcoKTtcbiAgICBmbXRwT2JqLnBhcmFtcyA9IHt9O1xuICAgIGZtdHBPYmoucGFyYW1zW3BhcmFtXSA9IHZhbHVlO1xuICAgIHNkcExpbmVzLnNwbGljZShpbmRleCArIDEsIDAsIHdyaXRlRm10cExpbmUoZm10cE9iaikpO1xuICB9IGVsc2Uge1xuICAgIGZtdHBPYmogPSBwYXJzZUZtdHBMaW5lKHNkcExpbmVzW2ZtdHBMaW5lSW5kZXhdKTtcbiAgICBmbXRwT2JqLnBhcmFtc1twYXJhbV0gPSB2YWx1ZTtcbiAgICBzZHBMaW5lc1tmbXRwTGluZUluZGV4XSA9IHdyaXRlRm10cExpbmUoZm10cE9iaik7XG4gIH1cblxuICBpZiAoaGVhZExpbmVzKSB7XG4gICAgc2RwTGluZXMgPSBoZWFkTGluZXMuY29uY2F0KHNkcExpbmVzKS5jb25jYXQodGFpbExpbmVzKTtcbiAgfVxuICBzZHAgPSBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcbiAgcmV0dXJuIHNkcDtcbn1cblxuLy8gUmVtb3ZlIGZtdHAgcGFyYW0gaWYgaXQgZXhpc3RzLlxuZnVuY3Rpb24gcmVtb3ZlQ29kZWNQYXJhbShzZHAsIGNvZGVjLCBwYXJhbSkge1xuICBjb25zdCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG5cbiAgY29uc3QgZm10cExpbmVJbmRleCA9IGZpbmRGbXRwTGluZShzZHBMaW5lcywgY29kZWMpO1xuICBpZiAoZm10cExpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBjb25zdCBtYXAgPSBwYXJzZUZtdHBMaW5lKHNkcExpbmVzW2ZtdHBMaW5lSW5kZXhdKTtcbiAgZGVsZXRlIG1hcC5wYXJhbXNbcGFyYW1dO1xuXG4gIGNvbnN0IG5ld0xpbmUgPSB3cml0ZUZtdHBMaW5lKG1hcCk7XG4gIGlmIChuZXdMaW5lID09PSBudWxsKSB7XG4gICAgc2RwTGluZXMuc3BsaWNlKGZtdHBMaW5lSW5kZXgsIDEpO1xuICB9IGVsc2Uge1xuICAgIHNkcExpbmVzW2ZtdHBMaW5lSW5kZXhdID0gbmV3TGluZTtcbiAgfVxuXG4gIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuICByZXR1cm4gc2RwO1xufVxuXG4vLyBTcGxpdCBhbiBmbXRwIGxpbmUgaW50byBhbiBvYmplY3QgaW5jbHVkaW5nICdwdCcgYW5kICdwYXJhbXMnLlxuZnVuY3Rpb24gcGFyc2VGbXRwTGluZShmbXRwTGluZSkge1xuICBjb25zdCBmbXRwT2JqID0ge307XG4gIGNvbnN0IHNwYWNlUG9zID0gZm10cExpbmUuaW5kZXhPZignICcpO1xuICBjb25zdCBrZXlWYWx1ZXMgPSBmbXRwTGluZS5zdWJzdHJpbmcoc3BhY2VQb3MgKyAxKS5zcGxpdCgnOycpO1xuXG4gIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKCdhPWZtdHA6KFxcXFxkKyknKTtcbiAgY29uc3QgcmVzdWx0ID0gZm10cExpbmUubWF0Y2gocGF0dGVybik7XG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA9PT0gMikge1xuICAgIGZtdHBPYmoucHQgPSByZXN1bHRbMV07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlWYWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBwYWlyID0ga2V5VmFsdWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgaWYgKHBhaXIubGVuZ3RoID09PSAyKSB7XG4gICAgICBwYXJhbXNbcGFpclswXV0gPSBwYWlyWzFdO1xuICAgIH1cbiAgfVxuICBmbXRwT2JqLnBhcmFtcyA9IHBhcmFtcztcblxuICByZXR1cm4gZm10cE9iajtcbn1cblxuLy8gR2VuZXJhdGUgYW4gZm10cCBsaW5lIGZyb20gYW4gb2JqZWN0IGluY2x1ZGluZyAncHQnIGFuZCAncGFyYW1zJy5cbmZ1bmN0aW9uIHdyaXRlRm10cExpbmUoZm10cE9iaikge1xuICBpZiAoIWZtdHBPYmouaGFzT3duUHJvcGVydHkoJ3B0JykgfHwgIWZtdHBPYmouaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgcHQgPSBmbXRwT2JqLnB0O1xuICBjb25zdCBwYXJhbXMgPSBmbXRwT2JqLnBhcmFtcztcbiAgY29uc3Qga2V5VmFsdWVzID0gW107XG4gIGxldCBpID0gMDtcbiAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XG4gICAga2V5VmFsdWVzW2ldID0ga2V5ICsgJz0nICsgcGFyYW1zW2tleV07XG4gICAgKytpO1xuICB9XG4gIGlmIChpID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuICdhPWZtdHA6JyArIHB0LnRvU3RyaW5nKCkgKyAnICcgKyBrZXlWYWx1ZXMuam9pbignOycpO1xufVxuXG4vLyBGaW5kIGZtdHAgYXR0cmlidXRlIGZvciB8Y29kZWN8IGluIHxzZHBMaW5lc3wuXG5mdW5jdGlvbiBmaW5kRm10cExpbmUoc2RwTGluZXMsIGNvZGVjKSB7XG4gIC8vIEZpbmQgcGF5bG9hZCBvZiBjb2RlYy5cbiAgY29uc3QgcGF5bG9hZCA9IGdldENvZGVjUGF5bG9hZFR5cGUoc2RwTGluZXMsIGNvZGVjKTtcbiAgLy8gRmluZCB0aGUgcGF5bG9hZCBpbiBmbXRwIGxpbmUuXG4gIHJldHVybiBwYXlsb2FkID8gZmluZExpbmUoc2RwTGluZXMsICdhPWZtdHA6JyArIHBheWxvYWQudG9TdHJpbmcoKSkgOiBudWxsO1xufVxuXG4vLyBGaW5kIHRoZSBsaW5lIGluIHNkcExpbmVzIHRoYXQgc3RhcnRzIHdpdGggfHByZWZpeHwsIGFuZCwgaWYgc3BlY2lmaWVkLFxuLy8gY29udGFpbnMgfHN1YnN0cnwgKGNhc2UtaW5zZW5zaXRpdmUgc2VhcmNoKS5cbmZ1bmN0aW9uIGZpbmRMaW5lKHNkcExpbmVzLCBwcmVmaXgsIHN1YnN0cikge1xuICByZXR1cm4gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCAwLCAtMSwgcHJlZml4LCBzdWJzdHIpO1xufVxuXG4vLyBGaW5kIHRoZSBsaW5lIGluIHNkcExpbmVzW3N0YXJ0TGluZS4uLmVuZExpbmUgLSAxXSB0aGF0IHN0YXJ0cyB3aXRoIHxwcmVmaXh8XG4vLyBhbmQsIGlmIHNwZWNpZmllZCwgY29udGFpbnMgfHN1YnN0cnwgKGNhc2UtaW5zZW5zaXRpdmUgc2VhcmNoKS5cbmZ1bmN0aW9uIGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgc3RhcnRMaW5lLCBlbmRMaW5lLCBwcmVmaXgsIHN1YnN0cikge1xuICBjb25zdCByZWFsRW5kTGluZSA9IGVuZExpbmUgIT09IC0xID8gZW5kTGluZSA6IHNkcExpbmVzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0TGluZTsgaSA8IHJlYWxFbmRMaW5lOyArK2kpIHtcbiAgICBpZiAoc2RwTGluZXNbaV0uaW5kZXhPZihwcmVmaXgpID09PSAwKSB7XG4gICAgICBpZiAoIXN1YnN0ciB8fFxuICAgICAgICAgIHNkcExpbmVzW2ldLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdWJzdHIudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gR2V0cyB0aGUgY29kZWMgcGF5bG9hZCB0eXBlIGZyb20gc2RwIGxpbmVzLlxuZnVuY3Rpb24gZ2V0Q29kZWNQYXlsb2FkVHlwZShzZHBMaW5lcywgY29kZWMpIHtcbiAgY29uc3QgaW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ2E9cnRwbWFwJywgY29kZWMpO1xuICByZXR1cm4gaW5kZXggPyBnZXRDb2RlY1BheWxvYWRUeXBlRnJvbUxpbmUoc2RwTGluZXNbaW5kZXhdKSA6IG51bGw7XG59XG5cbi8vIEdldHMgdGhlIGNvZGVjIHBheWxvYWQgdHlwZSBmcm9tIGFuIGE9cnRwbWFwOlggbGluZS5cbmZ1bmN0aW9uIGdldENvZGVjUGF5bG9hZFR5cGVGcm9tTGluZShzZHBMaW5lKSB7XG4gIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKCdhPXJ0cG1hcDooXFxcXGQrKSBbYS16QS1aMC05LV0rXFxcXC9cXFxcZCsnKTtcbiAgY29uc3QgcmVzdWx0ID0gc2RwTGluZS5tYXRjaChwYXR0ZXJuKTtcbiAgcmV0dXJuIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA9PT0gMikgPyByZXN1bHRbMV0gOiBudWxsO1xufVxuXG4vLyBSZXR1cm5zIGEgbmV3IG09IGxpbmUgd2l0aCB0aGUgc3BlY2lmaWVkIGNvZGVjIGFzIHRoZSBmaXJzdCBvbmUuXG5mdW5jdGlvbiBzZXREZWZhdWx0Q29kZWMobUxpbmUsIHBheWxvYWQpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBtTGluZS5zcGxpdCgnICcpO1xuXG4gIC8vIEp1c3QgY29weSB0aGUgZmlyc3QgdGhyZWUgcGFyYW1ldGVyczsgY29kZWMgb3JkZXIgc3RhcnRzIG9uIGZvdXJ0aC5cbiAgY29uc3QgbmV3TGluZSA9IGVsZW1lbnRzLnNsaWNlKDAsIDMpO1xuXG4gIC8vIFB1dCB0YXJnZXQgcGF5bG9hZCBmaXJzdCBhbmQgY29weSBpbiB0aGUgcmVzdC5cbiAgbmV3TGluZS5wdXNoKHBheWxvYWQpO1xuICBmb3IgKGxldCBpID0gMzsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnRzW2ldICE9PSBwYXlsb2FkKSB7XG4gICAgICBuZXdMaW5lLnB1c2goZWxlbWVudHNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3TGluZS5qb2luKCcgJyk7XG59XG5cbi8qIEJlbG93IGFyZSBuZXdseSBhZGRlZCBmdW5jdGlvbnMgKi9cblxuLy8gRm9sbG93aW5nIGNvZGVjcyB3aWxsIG5vdCBiZSByZW1vdmVkIGZyb20gU0RQIGV2ZW50IHRoZXkgYXJlIG5vdCBpbiB0aGVcbi8vIHVzZXItc3BlY2lmaWVkIGNvZGVjIGxpc3QuXG5jb25zdCBhdWRpb0NvZGVjQWxsb3dMaXN0ID0gWydDTicsICd0ZWxlcGhvbmUtZXZlbnQnXTtcbmNvbnN0IHZpZGVvQ29kZWNBbGxvd0xpc3QgPSBbJ3JlZCcsICd1bHBmZWMnLCAnZmxleGZlYyddO1xuXG4vLyBSZXR1cm5zIGEgbmV3IG09IGxpbmUgd2l0aCB0aGUgc3BlY2lmaWVkIGNvZGVjIG9yZGVyLlxuZnVuY3Rpb24gc2V0Q29kZWNPcmRlcihtTGluZSwgcGF5bG9hZHMpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBtTGluZS5zcGxpdCgnICcpO1xuXG4gIC8vIEp1c3QgY29weSB0aGUgZmlyc3QgdGhyZWUgcGFyYW1ldGVyczsgY29kZWMgb3JkZXIgc3RhcnRzIG9uIGZvdXJ0aC5cbiAgbGV0IG5ld0xpbmUgPSBlbGVtZW50cy5zbGljZSgwLCAzKTtcblxuICAvLyBDb25jYXQgcGF5bG9hZCB0eXBlcy5cbiAgbmV3TGluZSA9IG5ld0xpbmUuY29uY2F0KHBheWxvYWRzKTtcblxuICByZXR1cm4gbmV3TGluZS5qb2luKCcgJyk7XG59XG5cbi8vIEFwcGVuZCBSVFggcGF5bG9hZHMgZm9yIGV4aXN0aW5nIHBheWxvYWRzLlxuZnVuY3Rpb24gYXBwZW5kUnR4UGF5bG9hZHMoc2RwTGluZXMsIHBheWxvYWRzKSB7XG4gIGZvciAoY29uc3QgcGF5bG9hZCBvZiBwYXlsb2Fkcykge1xuICAgIGNvbnN0IGluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdhPWZtdHAnLCAnYXB0PScgKyBwYXlsb2FkKTtcbiAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZtdHBMaW5lID0gcGFyc2VGbXRwTGluZShzZHBMaW5lc1tpbmRleF0pO1xuICAgICAgcGF5bG9hZHMucHVzaChmbXRwTGluZS5wdCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwYXlsb2Fkcztcbn1cblxuLy8gUmVtb3ZlIGEgY29kZWMgd2l0aCBhbGwgaXRzIGFzc29jaWF0ZWQgYSBsaW5lcy5cbmZ1bmN0aW9uIHJlbW92ZUNvZGVjRnJhbUFMaW5lKHNkcExpbmVzLCBwYXlsb2FkKSB7XG4gIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKCdhPShydHBtYXB8cnRjcC1mYnxmbXRwKTonK3BheWxvYWQrJ1xcXFxzJyk7XG4gIGZvciAobGV0IGk9c2RwTGluZXMubGVuZ3RoLTE7IGk+MDsgaS0tKSB7XG4gICAgaWYgKHNkcExpbmVzW2ldLm1hdGNoKHBhdHRlcm4pKSB7XG4gICAgICBzZHBMaW5lcy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzZHBMaW5lcztcbn1cblxuLy8gRmluZCBtLWxpbmUgYW5kIG5leHQgbS1saW5lIHdpdGggZ2l2ZSBtaWQsIHJldHVybiB7IHN0YXJ0LCBlbmQgfS5cbmZ1bmN0aW9uIGZpbmRNTGluZVJhbmdlV2l0aE1JRChzZHBMaW5lcywgbWlkKSB7XG4gIGNvbnN0IG1pZExpbmUgPSAnYT1taWQ6JyArIG1pZDtcbiAgbGV0IG1pZEluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsIG1pZExpbmUpO1xuICAvLyBDb21wYXJlIHRoZSB3aG9sZSBsaW5lIHNpbmNlIGZpbmRMaW5lIG9ubHkgY29tcGFyZXMgcHJlZml4XG4gIHdoaWxlIChtaWRJbmRleCA+PSAwICYmIHNkcExpbmVzW21pZEluZGV4XSAhPT0gbWlkTGluZSkge1xuICAgIG1pZEluZGV4ID0gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBtaWRJbmRleCwgLTEsIG1pZExpbmUpO1xuICB9XG4gIGlmIChtaWRJbmRleCA+PSAwKSB7XG4gICAgLy8gRm91bmQgbWF0Y2hlZCBhPW1pZCBsaW5lXG4gICAgY29uc3QgbmV4dE1MaW5lSW5kZXggPSAoZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBtaWRJbmRleCwgLTEsICdtPScpXG4gICAgICAgIHx8IC0xKTtcbiAgICBsZXQgbUxpbmVJbmRleCA9IC0xO1xuICAgIGZvciAobGV0IGkgPSBtaWRJbmRleDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmIChzZHBMaW5lc1tpXS5pbmRleE9mKCdtPScpID49IDApIHtcbiAgICAgICAgbUxpbmVJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobUxpbmVJbmRleCA+PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogbUxpbmVJbmRleCxcbiAgICAgICAgZW5kOiBuZXh0TUxpbmVJbmRleFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIFJlb3JkZXIgY29kZWNzIGluIG0tbGluZSBhY2NvcmRpbmcgdGhlIG9yZGVyIG9mIHxjb2RlY3N8LiBSZW1vdmUgY29kZWNzIGZyb21cbi8vIG0tbGluZSBpZiBpdCBpcyBub3QgcHJlc2VudCBpbiB8Y29kZWNzfFxuLy8gQXBwbGllZCBvbiBzcGVjaWZpYyBtLWxpbmUgaWYgbWlkIGlzIHByZXNlbnRlZFxuLy8gVGhlIGZvcm1hdCBvZiB8Y29kZWN8IGlzICdOQU1FL1JBVEUnLCBlLmcuICdvcHVzLzQ4MDAwJy5cbmV4cG9ydCBmdW5jdGlvbiByZW9yZGVyQ29kZWNzKHNkcCwgdHlwZSwgY29kZWNzLCBtaWQpIHtcbiAgaWYgKCFjb2RlY3MgfHwgY29kZWNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBjb2RlY3MgPSB0eXBlID09PSAnYXVkaW8nID8gY29kZWNzLmNvbmNhdChhdWRpb0NvZGVjQWxsb3dMaXN0KSA6IGNvZGVjcy5jb25jYXQoXG4gICAgICB2aWRlb0NvZGVjQWxsb3dMaXN0KTtcblxuICBsZXQgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuICBsZXQgaGVhZExpbmVzID0gbnVsbDtcbiAgbGV0IHRhaWxMaW5lcyA9IG51bGw7XG4gIGlmICh0eXBlb2YgbWlkID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1pZFJhbmdlID0gZmluZE1MaW5lUmFuZ2VXaXRoTUlEKHNkcExpbmVzLCBtaWQpO1xuICAgIGlmIChtaWRSYW5nZSkge1xuICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBtaWRSYW5nZTtcbiAgICAgIGhlYWRMaW5lcyA9IHNkcExpbmVzLnNsaWNlKDAsIHN0YXJ0KTtcbiAgICAgIHRhaWxMaW5lcyA9IHNkcExpbmVzLnNsaWNlKGVuZCk7XG4gICAgICBzZHBMaW5lcyA9IHNkcExpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNlYXJjaCBmb3IgbSBsaW5lLlxuICBjb25zdCBtTGluZUluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdtPScsIHR5cGUpO1xuICBpZiAobUxpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBjb25zdCBvcmlnaW5QYXlsb2FkcyA9IHNkcExpbmVzW21MaW5lSW5kZXhdLnNwbGl0KCcgJyk7XG4gIG9yaWdpblBheWxvYWRzLnNwbGljZSgwLCAzKTtcblxuICAvLyBJZiB0aGUgY29kZWMgaXMgYXZhaWxhYmxlLCBzZXQgaXQgYXMgdGhlIGRlZmF1bHQgaW4gbSBsaW5lLlxuICBsZXQgcGF5bG9hZHMgPSBbXTtcbiAgZm9yIChjb25zdCBjb2RlYyBvZiBjb2RlY3MpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNkcExpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgaSwgLTEsICdhPXJ0cG1hcCcsIGNvZGVjKTtcbiAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gZ2V0Q29kZWNQYXlsb2FkVHlwZUZyb21MaW5lKHNkcExpbmVzW2luZGV4XSk7XG4gICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgcGF5bG9hZHMucHVzaChwYXlsb2FkKTtcbiAgICAgICAgICBpID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGF5bG9hZHMgPSBhcHBlbmRSdHhQYXlsb2FkcyhzZHBMaW5lcywgcGF5bG9hZHMpO1xuICBzZHBMaW5lc1ttTGluZUluZGV4XSA9IHNldENvZGVjT3JkZXIoc2RwTGluZXNbbUxpbmVJbmRleF0sIHBheWxvYWRzKTtcblxuICAvLyBSZW1vdmUgYSBsaW5lcy5cbiAgZm9yIChjb25zdCBwYXlsb2FkIG9mIG9yaWdpblBheWxvYWRzKSB7XG4gICAgaWYgKHBheWxvYWRzLmluZGV4T2YocGF5bG9hZCk9PT0tMSkge1xuICAgICAgc2RwTGluZXMgPSByZW1vdmVDb2RlY0ZyYW1BTGluZShzZHBMaW5lcywgcGF5bG9hZCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGhlYWRMaW5lcykge1xuICAgIHNkcExpbmVzID0gaGVhZExpbmVzLmNvbmNhdChzZHBMaW5lcykuY29uY2F0KHRhaWxMaW5lcyk7XG4gIH1cbiAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XG4gIHJldHVybiBzZHA7XG59XG5cbi8vIEFkZCBsZWdhY3kgc2ltdWxjYXN0LlxuZXhwb3J0IGZ1bmN0aW9uIGFkZExlZ2FjeVNpbXVsY2FzdChzZHAsIHR5cGUsIG51bVN0cmVhbXMsIG1pZCkge1xuICBpZiAoIW51bVN0cmVhbXMgfHwgIShudW1TdHJlYW1zID4gMSkpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgbGV0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcbiAgbGV0IGhlYWRMaW5lcyA9IG51bGw7XG4gIGxldCB0YWlsTGluZXMgPSBudWxsO1xuICBpZiAodHlwZW9mIG1pZCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtaWRSYW5nZSA9IGZpbmRNTGluZVJhbmdlV2l0aE1JRChzZHBMaW5lcywgbWlkKTtcbiAgICBpZiAobWlkUmFuZ2UpIHtcbiAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gbWlkUmFuZ2U7XG4gICAgICBoZWFkTGluZXMgPSBzZHBMaW5lcy5zbGljZSgwLCBzdGFydCk7XG4gICAgICB0YWlsTGluZXMgPSBzZHBMaW5lcy5zbGljZShlbmQpO1xuICAgICAgc2RwTGluZXMgPSBzZHBMaW5lcy5zbGljZShzdGFydCwgZW5kKTtcbiAgICB9XG4gIH1cblxuICAvLyBTZWFyY2ggZm9yIG0gbGluZS5cbiAgY29uc3QgbUxpbmVTdGFydCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCB0eXBlKTtcbiAgaWYgKG1MaW5lU3RhcnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIGxldCBtTGluZUVuZCA9IGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgbUxpbmVTdGFydCArIDEsIC0xLCAnbT0nKTtcbiAgaWYgKG1MaW5lRW5kID09PSBudWxsKSB7XG4gICAgbUxpbmVFbmQgPSBzZHBMaW5lcy5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBzc3JjR2V0dGVyID0gKGxpbmUpID0+IHtcbiAgICBjb25zdCBwYXJ0cyA9IGxpbmUuc3BsaXQoJyAnKTtcbiAgICBjb25zdCBzc3JjID0gcGFydHNbMF0uc3BsaXQoJzonKVsxXTtcbiAgICByZXR1cm4gc3NyYztcbiAgfTtcblxuICAvLyBQcm9jZXNzIHNzcmMgbGluZXMgZnJvbSBtTGluZUluZGV4LlxuICBjb25zdCByZW1vdmVzID0gbmV3IFNldCgpO1xuICBjb25zdCBzc3JjcyA9IG5ldyBTZXQoKTtcbiAgY29uc3QgZ3NzcmNzID0gbmV3IFNldCgpO1xuICBjb25zdCBzaW1MaW5lcyA9IFtdO1xuICBjb25zdCBzaW1Hcm91cExpbmVzID0gW107XG4gIGxldCBpID0gbUxpbmVTdGFydCArIDE7XG4gIHdoaWxlIChpIDwgbUxpbmVFbmQpIHtcbiAgICBjb25zdCBsaW5lID0gc2RwTGluZXNbaV07XG4gICAgaWYgKGxpbmUgPT09ICcnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGxpbmUuaW5kZXhPZignYT1zc3JjOicpID4gLTEpIHtcbiAgICAgIGNvbnN0IHNzcmMgPSBzc3JjR2V0dGVyKHNkcExpbmVzW2ldKTtcbiAgICAgIHNzcmNzLmFkZChzc3JjKTtcbiAgICAgIGlmIChsaW5lLmluZGV4T2YoJ2NuYW1lJykgPiAtMSB8fCBsaW5lLmluZGV4T2YoJ21zaWQnKSA+IC0xKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgbnVtU3RyZWFtczsgaisrKSB7XG4gICAgICAgICAgY29uc3QgbnNzcmMgPSAocGFyc2VJbnQoc3NyYykgKyBqKSArICcnO1xuICAgICAgICAgIHNpbUxpbmVzLnB1c2gobGluZS5yZXBsYWNlKHNzcmMsIG5zc3JjKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZXMuYWRkKGxpbmUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGluZS5pbmRleE9mKCdhPXNzcmMtZ3JvdXA6RklEJykgPiAtMSkge1xuICAgICAgY29uc3QgcGFydHMgPSBsaW5lLnNwbGl0KCcgJyk7XG4gICAgICBnc3NyY3MuYWRkKHBhcnRzWzJdKTtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgbnVtU3RyZWFtczsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5zc3JjMSA9IChwYXJzZUludChwYXJ0c1sxXSkgKyBqKSArICcnO1xuICAgICAgICBjb25zdCBuc3NyYzIgPSAocGFyc2VJbnQocGFydHNbMl0pICsgaikgKyAnJztcbiAgICAgICAgc2ltR3JvdXBMaW5lcy5wdXNoKFxuICAgICAgICAgIGxpbmUucmVwbGFjZShwYXJ0c1sxXSwgbnNzcmMxKS5yZXBsYWNlKHBhcnRzWzJdLCBuc3NyYzIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaSsrO1xuICB9XG5cbiAgY29uc3QgaW5zZXJ0UG9zID0gaTtcbiAgc3NyY3MuZm9yRWFjaChzc3JjID0+IHtcbiAgICBpZiAoIWdzc3Jjcy5oYXMoc3NyYykpIHtcbiAgICAgIGxldCBncm91cExpbmUgPSAnYT1zc3JjLWdyb3VwOlNJTSc7XG4gICAgICBncm91cExpbmUgPSBncm91cExpbmUgKyAnICcgKyBzc3JjO1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBudW1TdHJlYW1zOyBqKyspIHtcbiAgICAgICAgZ3JvdXBMaW5lID0gZ3JvdXBMaW5lICsgJyAnICsgKHBhcnNlSW50KHNzcmMpICsgaik7XG4gICAgICB9XG4gICAgICBzaW1Hcm91cExpbmVzLnB1c2goZ3JvdXBMaW5lKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNpbUxpbmVzLnNvcnQoKTtcbiAgLy8gSW5zZXJ0IHNpbXVsY2FzdCBzc3JjIGxpbmVzLlxuICBzZHBMaW5lcy5zcGxpY2UoaW5zZXJ0UG9zLCAwLCAuLi5zaW1Hcm91cExpbmVzKTtcbiAgc2RwTGluZXMuc3BsaWNlKGluc2VydFBvcywgMCwgLi4uc2ltTGluZXMpO1xuICBzZHBMaW5lcyA9IHNkcExpbmVzLmZpbHRlcihsaW5lID0+ICFyZW1vdmVzLmhhcyhsaW5lKSk7XG5cbiAgaWYgKGhlYWRMaW5lcykge1xuICAgIHNkcExpbmVzID0gaGVhZExpbmVzLmNvbmNhdChzZHBMaW5lcykuY29uY2F0KHRhaWxMaW5lcyk7XG4gIH1cbiAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XG4gIHJldHVybiBzZHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNYXhCaXRyYXRlKHNkcCwgZW5jb2RpbmdQYXJhbWV0ZXJzTGlzdCwgbWlkKSB7XG4gIGZvciAoY29uc3QgZW5jb2RpbmdQYXJhbWV0ZXJzIG9mIGVuY29kaW5nUGFyYW1ldGVyc0xpc3QpIHtcbiAgICBpZiAoZW5jb2RpbmdQYXJhbWV0ZXJzLm1heEJpdHJhdGUpIHtcbiAgICAgIHNkcCA9IHNldENvZGVjUGFyYW0oXG4gICAgICAgICAgc2RwLCBlbmNvZGluZ1BhcmFtZXRlcnMuY29kZWMubmFtZSwgJ3gtZ29vZ2xlLW1heC1iaXRyYXRlJyxcbiAgICAgICAgICAoZW5jb2RpbmdQYXJhbWV0ZXJzLm1heEJpdHJhdGUpLnRvU3RyaW5nKCksIG1pZCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzZHA7XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBNZWRpYVN0cmVhbSwgU2VuZFN0cmVhbSwgQmlkaXJlY3Rpb25hbFN0cmVhbSAqL1xuXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyLCBPd3RFdmVudH0gZnJvbSAnLi9ldmVudC5qcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5mdW5jdGlvbiBpc0FsbG93ZWRWYWx1ZShvYmosIGFsbG93ZWRWYWx1ZXMpIHtcbiAgcmV0dXJuIChhbGxvd2VkVmFsdWVzLnNvbWUoKGVsZSkgPT4ge1xuICAgIHJldHVybiBlbGUgPT09IG9iajtcbiAgfSkpO1xufVxuLyoqXG4gKiBAY2xhc3MgU3RyZWFtU291cmNlSW5mb1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIEluZm9ybWF0aW9uIG9mIGEgc3RyZWFtJ3Mgc291cmNlLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZGVzY3JpcHRpb24gQXVkaW8gc291cmNlIGluZm8gb3IgdmlkZW8gc291cmNlIGluZm8gY291bGQgYmUgdW5kZWZpbmVkIGlmXG4gKiBhIHN0cmVhbSBkb2VzIG5vdCBoYXZlIGF1ZGlvL3ZpZGVvIHRyYWNrLlxuICogQHBhcmFtIHs/c3RyaW5nfSBhdWRpb1NvdXJjZUluZm8gQXVkaW8gc291cmNlIGluZm8uIEFjY2VwdGVkIHZhbHVlcyBhcmU6XG4gKiBcIm1pY1wiLCBcInNjcmVlbi1jYXN0XCIsIFwiZmlsZVwiLCBcIm1peGVkXCIgb3IgdW5kZWZpbmVkLlxuICogQHBhcmFtIHs/c3RyaW5nfSB2aWRlb1NvdXJjZUluZm8gVmlkZW8gc291cmNlIGluZm8uIEFjY2VwdGVkIHZhbHVlcyBhcmU6XG4gKiBcImNhbWVyYVwiLCBcInNjcmVlbi1jYXN0XCIsIFwiZmlsZVwiLCBcIm1peGVkXCIgb3IgdW5kZWZpbmVkLlxuICogQHBhcmFtIHtib29sZWFufSBkYXRhU291cmNlSW5mbyBJbmRpY2F0ZXMgd2hldGhlciBpdCBpcyBkYXRhLiBBY2NlcHRlZCB2YWx1ZXNcbiAqIGFyZSBib29sZWFuLlxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtU291cmNlSW5mbyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGF1ZGlvU291cmNlSW5mbywgdmlkZW9Tb3VyY2VJbmZvLCBkYXRhU291cmNlSW5mbykge1xuICAgIGlmICghaXNBbGxvd2VkVmFsdWUoYXVkaW9Tb3VyY2VJbmZvLCBbdW5kZWZpbmVkLCAnbWljJywgJ3NjcmVlbi1jYXN0JyxcbiAgICAgICdmaWxlJywgJ21peGVkJ10pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvcnJlY3QgdmFsdWUgZm9yIGF1ZGlvU291cmNlSW5mbycpO1xuICAgIH1cbiAgICBpZiAoIWlzQWxsb3dlZFZhbHVlKHZpZGVvU291cmNlSW5mbywgW3VuZGVmaW5lZCwgJ2NhbWVyYScsICdzY3JlZW4tY2FzdCcsXG4gICAgICAnZmlsZScsICdlbmNvZGVkLWZpbGUnLCAncmF3LWZpbGUnLCAnbWl4ZWQnXSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29ycmVjdCB2YWx1ZSBmb3IgdmlkZW9Tb3VyY2VJbmZvJyk7XG4gICAgfVxuICAgIHRoaXMuYXVkaW8gPSBhdWRpb1NvdXJjZUluZm87XG4gICAgdGhpcy52aWRlbyA9IHZpZGVvU291cmNlSW5mbztcbiAgICB0aGlzLmRhdGEgPSBkYXRhU291cmNlSW5mbztcbiAgfVxufVxuLyoqXG4gKiBAY2xhc3MgU3RyZWFtXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgQmFzZSBjbGFzcyBvZiBzdHJlYW1zLlxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW0gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihzdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICgoc3RyZWFtICYmICEoc3RyZWFtIGluc3RhbmNlb2YgTWVkaWFTdHJlYW0pICYmXG4gICAgICAgICAhKHN0cmVhbSBpbnN0YW5jZW9mIFNlbmRTdHJlYW0pICYmXG4gICAgICAgICAhKHN0cmVhbSBpbnN0YW5jZW9mIEJpZGlyZWN0aW9uYWxTdHJlYW0pKSB8fFxuICAgICAgICAodHlwZW9mIHNvdXJjZUluZm8gIT09ICdvYmplY3QnKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBzdHJlYW0gb3Igc291cmNlSW5mby4nKTtcbiAgICB9XG4gICAgaWYgKHN0cmVhbSAmJiAoc3RyZWFtIGluc3RhbmNlb2YgTWVkaWFTdHJlYW0pICYmXG4gICAgICAgICgoc3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoID4gMCAmJiAhc291cmNlSW5mby5hdWRpbykgfHxcbiAgICAgICAgIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCA+IDAgJiYgIXNvdXJjZUluZm8udmlkZW8pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNaXNzaW5nIGF1ZGlvIHNvdXJjZSBpbmZvIG9yIHZpZGVvIHNvdXJjZSBpbmZvLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbVxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYWNhcHR1cmUtc3RyZWFtcy8jbWVkaWFzdHJlYW18TWVkaWFTdHJlYW0gQVBJIG9mIE1lZGlhIENhcHR1cmUgYW5kIFN0cmVhbXN9LlxuICAgICAqIEBkZXNjIFRoaXMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBzdHJlYW0gaW5zdGVhZC5cbiAgICAgKi9cbiAgICBpZiAoc3RyZWFtIGluc3RhbmNlb2YgTWVkaWFTdHJlYW0pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVkaWFTdHJlYW0nLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogc3RyZWFtLFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge01lZGlhU3RyZWFtIHwgU2VuZFN0cmVhbSB8IEJpZGlyZWN0aW9uYWxTdHJlYW0gfCB1bmRlZmluZWR9IHN0cmVhbVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5TdHJlYW1cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFjYXB0dXJlLXN0cmVhbXMvI21lZGlhc3RyZWFtfE1lZGlhU3RyZWFtIEFQSSBvZiBNZWRpYSBDYXB0dXJlIGFuZCBTdHJlYW1zfVxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd2ljZy5naXRodWIuaW8vd2ViLXRyYW5zcG9ydC8gV2ViVHJhbnNwb3J0fS5cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3N0cmVhbScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBzdHJlYW0sXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuU3RyZWFtU291cmNlSW5mb30gc291cmNlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbVxuICAgICAqIEBkZXNjIFNvdXJjZSBpbmZvIG9mIGEgc3RyZWFtLlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VJbmZvLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge29iamVjdH0gYXR0cmlidXRlc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5TdHJlYW1cbiAgICAgKiBAZGVzYyBDdXN0b20gYXR0cmlidXRlcyBvZiBhIHN0cmVhbS5cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2F0dHJpYnV0ZXMnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogYXR0cmlidXRlcyxcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBAY2xhc3MgTG9jYWxTdHJlYW1cbiAqIEBjbGFzc0Rlc2MgU3RyZWFtIGNhcHR1cmVkIGZyb20gY3VycmVudCBlbmRwb2ludC5cbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuU3RyZWFtXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IHN0cmVhbSBVbmRlcmx5aW5nIE1lZGlhU3RyZWFtLlxuICogQHBhcmFtIHtPd3QuQmFzZS5TdHJlYW1Tb3VyY2VJbmZvfSBzb3VyY2VJbmZvIEluZm9ybWF0aW9uIGFib3V0IHN0cmVhbSdzXG4gKiBzb3VyY2UuXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyBDdXN0b20gYXR0cmlidXRlcyBvZiB0aGUgc3RyZWFtLlxuICovXG5leHBvcnQgY2xhc3MgTG9jYWxTdHJlYW0gZXh0ZW5kcyBTdHJlYW0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihzdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIXN0cmVhbSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU3RyZWFtIGNhbm5vdCBiZSBudWxsLicpO1xuICAgIH1cbiAgICBzdXBlcihzdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuTG9jYWxTdHJlYW1cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBVdGlscy5jcmVhdGVVdWlkKCksXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogQGNsYXNzIFJlbW90ZVN0cmVhbVxuICogQGNsYXNzRGVzYyBTdHJlYW0gc2VudCBmcm9tIGEgcmVtb3RlIGVuZHBvaW50LlxuICogRXZlbnRzOlxuICpcbiAqIHwgRXZlbnQgTmFtZSAgICAgIHwgQXJndW1lbnQgVHlwZSAgICB8IEZpcmVkIHdoZW4gICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBlbmRlZCAgICAgICAgICAgfCBFdmVudCAgICAgICAgICAgIHwgU3RyZWFtIGlzIG5vIGxvbmdlciBhdmFpbGFibGUgb24gc2VydmVyIHNpZGUuICAgfFxuICogfCB1cGRhdGVkICAgICAgICAgfCBFdmVudCAgICAgICAgICAgIHwgU3RyZWFtIGlzIHVwZGF0ZWQuIHxcbiAqXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBleHRlbmRzIE93dC5CYXNlLlN0cmVhbVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgUmVtb3RlU3RyZWFtIGV4dGVuZHMgU3RyZWFtIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoaWQsIG9yaWdpbiwgc3RyZWFtLCBzb3VyY2VJbmZvLCBhdHRyaWJ1dGVzKSB7XG4gICAgc3VwZXIoc3RyZWFtLCBzb3VyY2VJbmZvLCBhdHRyaWJ1dGVzKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlJlbW90ZVN0cmVhbVxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGlkID8gaWQgOiBVdGlscy5jcmVhdGVVdWlkKCksXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBvcmlnaW5cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUmVtb3RlU3RyZWFtXG4gICAgICogQGRlc2MgSUQgb2YgdGhlIHJlbW90ZSBlbmRwb2ludCB3aG8gcHVibGlzaGVkIHRoaXMgc3RyZWFtLlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnb3JpZ2luJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBvcmlnaW4sXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuUHVibGljYXRpb25TZXR0aW5nc30gc2V0dGluZ3NcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUmVtb3RlU3RyZWFtXG4gICAgICogQGRlc2MgT3JpZ2luYWwgc2V0dGluZ3MgZm9yIHB1Ymxpc2hpbmcgdGhpcyBzdHJlYW0uIFRoaXMgcHJvcGVydHkgaXMgb25seVxuICAgICAqIHZhbGlkIGluIGNvbmZlcmVuY2UgbW9kZS5cbiAgICAgKi9cbiAgICB0aGlzLnNldHRpbmdzID0gdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvbkNhcGFiaWxpdGllc30gZXh0cmFDYXBhYmlsaXRpZXNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUmVtb3RlU3RyZWFtXG4gICAgICogQGRlc2MgRXh0cmEgY2FwYWJpbGl0aWVzIHJlbW90ZSBlbmRwb2ludCBwcm92aWRlcyBmb3Igc3Vic2NyaXB0aW9uLiBFeHRyYVxuICAgICAqIGNhcGFiaWxpdGllcyBkb24ndCBpbmNsdWRlIG9yaWdpbmFsIHNldHRpbmdzLiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgdmFsaWRcbiAgICAgKiBpbiBjb25mZXJlbmNlIG1vZGUuXG4gICAgICovXG4gICAgdGhpcy5leHRyYUNhcGFiaWxpdGllcyA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBTdHJlYW1FdmVudFxuICogQGNsYXNzRGVzYyBFdmVudCBmb3IgU3RyZWFtLlxuICogQGV4dGVuZHMgT3d0LkJhc2UuT3d0RXZlbnRcbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtRXZlbnQgZXh0ZW5kcyBPd3RFdmVudCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGluaXQpIHtcbiAgICBzdXBlcih0eXBlKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5TdHJlYW19IHN0cmVhbVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5TdHJlYW1FdmVudFxuICAgICAqL1xuICAgIHRoaXMuc3RyZWFtID0gaW5pdC5zdHJlYW07XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMjA+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBUcmFuc3BvcnRUeXBlXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgVHJhbnNwb3J0IHR5cGUgZW51bWVyYXRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBUcmFuc3BvcnRUeXBlID0ge1xuICBRVUlDOiAncXVpYycsXG4gIFdFQlJUQzogJ3dlYnJ0YycsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBUcmFuc3BvcnRDb25zdHJhaW50c1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFJlcHJlc2VudHMgdGhlIHRyYW5zcG9ydCBjb25zdHJhaW50cyBmb3IgcHVibGljYXRpb24gYW5kXG4gKiBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc3BvcnRDb25zdHJhaW50cyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGlkKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPE93dC5CYXNlLlRyYW5zcG9ydFR5cGU+fSB0eXBlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlRyYW5zcG9ydENvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgVHJhbnNwb3J0IHR5cGUgZm9yIHB1YmxpY2F0aW9uIGFuZCBzdWJzY3JpcHRpb24uXG4gICAgICovXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5UcmFuc3BvcnRDb25zdHJhaW50c1xuICAgICAqIEBkZXNjIFRyYW5zcG9ydCBJRC4gVW5kZWZpbmVkIHRyYW5zcG9ydCBJRCByZXN1bHRzIHNlcnZlciB0byBhc3NpZ24gYSBuZXdcbiAgICAgKiBvbmUuIEl0IHNob3VsZCBhbHdheXMgYmUgdW5kZWZpbmVkIGlmIHRyYW5zcG9ydCB0eXBlIGlzIHdlYnJ0YyBzaW5jZSB0aGVcbiAgICAgKiB3ZWJydGMgYWdlbnQgb2YgT1dUIHNlcnZlciBkb2Vzbid0IHN1cHBvcnQgbXVsdGlwbGUgdHJhbnNjZWl2ZXJzIG9uIGFcbiAgICAgKiBzaW5nbGUgUGVlckNvbm5lY3Rpb24uXG4gICAgICovXG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFRyYW5zcG9ydFNldHRpbmdzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgUmVwcmVzZW50cyB0aGUgdHJhbnNwb3J0IHNldHRpbmdzIGZvciBwdWJsaWNhdGlvbiBhbmRcbiAqIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zcG9ydFNldHRpbmdzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaWQpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48T3d0LkJhc2UuVHJhbnNwb3J0VHlwZT59IHR5cGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVHJhbnNwb3J0Q29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBUcmFuc3BvcnQgdHlwZSBmb3IgcHVibGljYXRpb24gYW5kIHN1YnNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVHJhbnNwb3J0Q29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBUcmFuc3BvcnQgSUQuXG4gICAgICovXG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBuYXZpZ2F0b3IsIHdpbmRvdyAqL1xuXG4ndXNlIHN0cmljdCc7XG5jb25zdCBzZGtWZXJzaW9uID0gJzUuMCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gaXNGaXJlZm94KCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goJ0ZpcmVmb3gnKSAhPT0gbnVsbDtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gaXNDaHJvbWUoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgnQ2hyb21lJykgIT09IG51bGw7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICByZXR1cm4gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWRnZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLihcXGQrKSQvKSAhPT0gbnVsbDtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXVpZCgpIHtcbiAgcmV0dXJuICd4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG4gICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XG4gICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICB9KTtcbn1cblxuLy8gUmV0dXJucyBzeXN0ZW0gaW5mb3JtYXRpb24uXG4vLyBGb3JtYXQ6IHtzZGs6e3ZlcnNpb246KiosIHR5cGU6Kip9LCBydW50aW1lOnt2ZXJzaW9uOioqLCBuYW1lOioqfSwgb3M6e3ZlcnNpb246KiosIG5hbWU6Kip9fTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gc3lzSW5mbygpIHtcbiAgY29uc3QgaW5mbyA9IE9iamVjdC5jcmVhdGUoe30pO1xuICBpbmZvLnNkayA9IHtcbiAgICB2ZXJzaW9uOiBzZGtWZXJzaW9uLFxuICAgIHR5cGU6ICdKYXZhU2NyaXB0JyxcbiAgfTtcbiAgLy8gUnVudGltZSBpbmZvLlxuICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBjb25zdCBmaXJlZm94UmVnZXggPSAvRmlyZWZveFxcLyhbMC05Ll0rKS87XG4gIGNvbnN0IGNocm9tZVJlZ2V4ID0gL0Nocm9tZVxcLyhbMC05Ll0rKS87XG4gIGNvbnN0IGVkZ2VSZWdleCA9IC9FZGdlXFwvKFswLTkuXSspLztcbiAgY29uc3Qgc2FmYXJpVmVyc2lvblJlZ2V4ID0gL1ZlcnNpb25cXC8oWzAtOS5dKykgU2FmYXJpLztcbiAgbGV0IHJlc3VsdCA9IGNocm9tZVJlZ2V4LmV4ZWModXNlckFnZW50KTtcbiAgaWYgKHJlc3VsdCkge1xuICAgIGluZm8ucnVudGltZSA9IHtcbiAgICAgIG5hbWU6ICdDaHJvbWUnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gZmlyZWZveFJlZ2V4LmV4ZWModXNlckFnZW50KSkge1xuICAgIGluZm8ucnVudGltZSA9IHtcbiAgICAgIG5hbWU6ICdGaXJlZm94JyxcbiAgICAgIHZlcnNpb246IHJlc3VsdFsxXSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHJlc3VsdCA9IGVkZ2VSZWdleC5leGVjKHVzZXJBZ2VudCkpIHtcbiAgICBpbmZvLnJ1bnRpbWUgPSB7XG4gICAgICBuYW1lOiAnRWRnZScsXG4gICAgICB2ZXJzaW9uOiByZXN1bHRbMV0sXG4gICAgfTtcbiAgfSBlbHNlIGlmIChpc1NhZmFyaSgpKSB7XG4gICAgcmVzdWx0ID0gc2FmYXJpVmVyc2lvblJlZ2V4LmV4ZWModXNlckFnZW50KTtcbiAgICBpbmZvLnJ1bnRpbWUgPSB7XG4gICAgICBuYW1lOiAnU2FmYXJpJyxcbiAgICB9O1xuICAgIGluZm8ucnVudGltZS52ZXJzaW9uID0gcmVzdWx0ID8gcmVzdWx0WzFdIDogJ1Vua25vd24nO1xuICB9IGVsc2Uge1xuICAgIGluZm8ucnVudGltZSA9IHtcbiAgICAgIG5hbWU6ICdVbmtub3duJyxcbiAgICAgIHZlcnNpb246ICdVbmtub3duJyxcbiAgICB9O1xuICB9XG4gIC8vIE9TIGluZm8uXG4gIGNvbnN0IHdpbmRvd3NSZWdleCA9IC9XaW5kb3dzIE5UIChbMC05Ll0rKS87XG4gIGNvbnN0IG1hY1JlZ2V4ID0gL0ludGVsIE1hYyBPUyBYIChbMC05Xy5dKykvO1xuICBjb25zdCBpUGhvbmVSZWdleCA9IC9pUGhvbmUgT1MgKFswLTlfLl0rKS87XG4gIGNvbnN0IGxpbnV4UmVnZXggPSAvWDExOyBMaW51eC87XG4gIGNvbnN0IGFuZHJvaWRSZWdleCA9IC9BbmRyb2lkKCAoWzAtOS5dKykpPy87XG4gIGNvbnN0IGNocm9taXVtT3NSZWdleCA9IC9Dck9TLztcbiAgaWYgKHJlc3VsdCA9IHdpbmRvd3NSZWdleC5leGVjKHVzZXJBZ2VudCkpIHtcbiAgICBpbmZvLm9zID0ge1xuICAgICAgbmFtZTogJ1dpbmRvd3MgTlQnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gbWFjUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdNYWMgT1MgWCcsXG4gICAgICB2ZXJzaW9uOiByZXN1bHRbMV0ucmVwbGFjZSgvXy9nLCAnLicpLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gaVBob25lUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdpUGhvbmUgT1MnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdLnJlcGxhY2UoL18vZywgJy4nKSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHJlc3VsdCA9IGxpbnV4UmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdMaW51eCcsXG4gICAgICB2ZXJzaW9uOiAnVW5rbm93bicsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChyZXN1bHQgPSBhbmRyb2lkUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdBbmRyb2lkJyxcbiAgICAgIHZlcnNpb246IHJlc3VsdFsxXSB8fCAnVW5rbm93bicsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChyZXN1bHQgPSBjaHJvbWl1bU9zUmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdDaHJvbWUgT1MnLFxuICAgICAgdmVyc2lvbjogJ1Vua25vd24nLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgaW5mby5vcyA9IHtcbiAgICAgIG5hbWU6ICdVbmtub3duJyxcbiAgICAgIHZlcnNpb246ICdVbmtub3duJyxcbiAgICB9O1xuICB9XG4gIGluZm8uY2FwYWJpbGl0aWVzID0ge1xuICAgIGNvbnRpbnVhbEljZUdhdGhlcmluZzogZmFsc2UsXG4gICAgdW5pZmllZFBsYW46IHRydWUsXG4gICAgc3RyZWFtUmVtb3ZhYmxlOiBpbmZvLnJ1bnRpbWUubmFtZSAhPT0gJ0ZpcmVmb3gnLFxuICAgIGlnbm9yZURhdGFDaGFubmVsQWNrczogdHJ1ZSxcbiAgfTtcbiAgcmV0dXJuIGluZm87XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MgKi9cbi8qIGdsb2JhbCBNYXAsIFByb21pc2UsIHNldFRpbWVvdXQsIFJUQ1BlZXJDb25uZWN0aW9uICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1xuICBFdmVudERpc3BhdGNoZXIsXG4gIE1lc3NhZ2VFdmVudCxcbiAgT3d0RXZlbnQsXG4gIEVycm9yRXZlbnQsXG4gIE11dGVFdmVudCxcbn0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5pbXBvcnQge1RyYWNrS2luZH0gZnJvbSAnLi4vYmFzZS9tZWRpYWZvcm1hdC5qcyc7XG5pbXBvcnQge1B1YmxpY2F0aW9ufSBmcm9tICcuLi9iYXNlL3B1YmxpY2F0aW9uLmpzJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuL3N1YnNjcmlwdGlvbi5qcyc7XG5pbXBvcnQge0NvbmZlcmVuY2VFcnJvcn0gZnJvbSAnLi9lcnJvci5qcyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi9iYXNlL3V0aWxzLmpzJztcbmltcG9ydCAqIGFzIFNkcFV0aWxzIGZyb20gJy4uL2Jhc2Uvc2RwdXRpbHMuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb25mZXJlbmNlUGVlckNvbm5lY3Rpb25DaGFubmVsXG4gKiBAY2xhc3NEZXNjIEEgY2hhbm5lbCBmb3IgYSBjb25uZWN0aW9uIGJldHdlZW4gY2xpZW50IGFuZCBjb25mZXJlbmNlIHNlcnZlci5cbiAqIEN1cnJlbnRseSwgb25seSBvbmUgc3RyZWFtIGNvdWxkIGJlIHRyYW5taXR0ZWQgaW4gYSBjaGFubmVsLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZlcmVuY2VQZWVyQ29ubmVjdGlvbkNoYW5uZWwgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb25maWcsIHNpZ25hbGluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX3ZpZGVvQ29kZWNzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX29wdGlvbnMgPSBudWxsO1xuICAgIHRoaXMuX3ZpZGVvQ29kZWNzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3NpZ25hbGluZyA9IHNpZ25hbGluZztcbiAgICB0aGlzLl9wYyA9IG51bGw7XG4gICAgdGhpcy5faW50ZXJuYWxJZCA9IG51bGw7IC8vIEl0J3MgcHVibGljYXRpb24gSUQgb3Igc3Vic2NyaXB0aW9uIElELlxuICAgIHRoaXMuX3BlbmRpbmdDYW5kaWRhdGVzID0gW107XG4gICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMgPSBuZXcgTWFwKCk7IC8vIGludGVybmFsSWQgPT4geyByZXNvbHZlLCByZWplY3QgfVxuICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gaW50ZXJuYWxJZCA9PiB7IHJlc29sdmUsIHJlamVjdCB9XG4gICAgdGhpcy5fc3Vic2NyaWJlZFN0cmVhbXMgPSBuZXcgTWFwKCk7IC8vIGludGVuYWxJZCA9PiBSZW1vdGVTdHJlYW1cbiAgICB0aGlzLl9wdWJsaWNhdGlvbnMgPSBuZXcgTWFwKCk7IC8vIFB1YmxpY2F0aW9uSWQgPT4gUHVibGljYXRpb25cbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gbmV3IE1hcCgpOyAvLyBTdWJzY3JpcHRpb25JZCA9PiBTdWJzY3JpcHRpb25cbiAgICB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzID0gbmV3IE1hcCgpOyAvLyBpbnRlcm5hbElkID0+IHsgaWQsIHRyYW5zY2VpdmVyczogW1RyYW5zY2VpdmVyXSB9XG4gICAgdGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzID0gbmV3IE1hcCgpOyAvLyBpbnRlcm5hbElkID0+IHsgaWQsIHRyYW5zY2VpdmVyczogW1RyYW5zY2VpdmVyXSB9XG4gICAgdGhpcy5fcmV2ZXJzZUlkTWFwID0gbmV3IE1hcCgpOyAvLyBQdWJsaWNhdGlvbklkIHx8IFN1YnNjcmlwdGlvbklkID0+IGludGVybmFsSWRcbiAgICAvLyBUaW1lciBmb3IgUGVlckNvbm5lY3Rpb24gZGlzY29ubmVjdGVkLiBXaWxsIHN0b3AgY29ubmVjdGlvbiBhZnRlciB0aW1lci5cbiAgICB0aGlzLl9kaXNjb25uZWN0VGltZXIgPSBudWxsO1xuICAgIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5fc3RvcHBlZCA9IGZhbHNlO1xuICAgIC8vIENoYW5uZWwgSUQgYXNzaWduZWQgYnkgY29uZmVyZW5jZVxuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICAgIC8vIFVzZWQgdG8gY3JlYXRlIGludGVybmFsIElEIGZvciBwdWJsaWNhdGlvbi9zdWJzY3JpcHRpb25cbiAgICB0aGlzLl9pbnRlcm5hbENvdW50ID0gMDtcbiAgICB0aGlzLl9zZHBQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGhpcy5fc2RwUmVzb2x2ZXJNYXAgPSBuZXcgTWFwKCk7IC8vIGludGVybmFsSWQgPT4ge2ZpbmlzaCwgcmVzb2x2ZSwgcmVqZWN0fVxuICAgIHRoaXMuX3NkcFJlc29sdmVycyA9IFtdOyAvLyBbe2ZpbmlzaCwgcmVzb2x2ZSwgcmVqZWN0fV1cbiAgICB0aGlzLl9zZHBSZXNvbHZlTnVtID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gb25NZXNzYWdlXG4gICAqIEBkZXNjIFJlY2VpdmVkIGEgbWVzc2FnZSBmcm9tIGNvbmZlcmVuY2UgcG9ydGFsLiBEZWZpbmVkIGluIGNsaWVudC1zZXJ2ZXJcbiAgICogcHJvdG9jb2wuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBub3RpZmljYXRpb24gTm90aWZpY2F0aW9uIHR5cGUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlIE1lc3NhZ2UgcmVjZWl2ZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBvbk1lc3NhZ2Uobm90aWZpY2F0aW9uLCBtZXNzYWdlKSB7XG4gICAgc3dpdGNoIChub3RpZmljYXRpb24pIHtcbiAgICAgIGNhc2UgJ3Byb2dyZXNzJzpcbiAgICAgICAgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSAnc29hYycpIHtcbiAgICAgICAgICB0aGlzLl9zZHBIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5zdGF0dXMgPT09ICdyZWFkeScpIHtcbiAgICAgICAgICB0aGlzLl9yZWFkeUhhbmRsZXIobWVzc2FnZS5zZXNzaW9uSWQpO1xuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgdGhpcy5fZXJyb3JIYW5kbGVyKG1lc3NhZ2Uuc2Vzc2lvbklkLCBtZXNzYWdlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyZWFtJzpcbiAgICAgICAgdGhpcy5fb25TdHJlYW1FdmVudChtZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBMb2dnZXIud2FybmluZygnVW5rbm93biBub3RpZmljYXRpb24gZnJvbSBNQ1UuJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcHVibGlzaChzdHJlYW0sIG9wdGlvbnMsIHZpZGVvQ29kZWNzKSB7XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ0Nvbm5lY3Rpb24gY2xvc2VkJyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGF1ZGlvOiAhIXN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCxcbiAgICAgICAgdmlkZW86ICEhc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ09wdGlvbnMgc2hvdWxkIGJlIGFuIG9iamVjdC4nKSk7XG4gICAgfVxuICAgIGlmICgodGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy5hdWRpbykgJiZcbiAgICAgICAgIHRoaXMuX2lzT3d0RW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pKSB8fFxuICAgICAgICAodGhpcy5faXNPd3RFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy5hdWRpbykgJiZcbiAgICAgICAgIHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgJ01peGluZyBSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnMgYW5kICcgK1xuICAgICAgICAgICdBdWRpb0VuY29kaW5nUGFyYW1ldGVycy9WaWRlb0VuY29kaW5nUGFyYW1ldGVycyBpcyBub3QgYWxsb3dlZC4nKSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmF1ZGlvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMuYXVkaW8gPSAhIXN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudmlkZW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy52aWRlbyA9ICEhc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoKCEhb3B0aW9ucy5hdWRpbyAmJiAhc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoKSB8fFxuICAgICAgICAoISFvcHRpb25zLnZpZGVvICYmICFzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnb3B0aW9ucy5hdWRpby92aWRlbyBpcyBpbmNvbnNpc3RlbnQgd2l0aCB0cmFja3MgcHJlc2VudGVkIGluIHRoZSAnICtcbiAgICAgICAgICAnTWVkaWFTdHJlYW0uJ1xuICAgICAgKSk7XG4gICAgfVxuICAgIGlmICgob3B0aW9ucy5hdWRpbyA9PT0gZmFsc2UgfHwgb3B0aW9ucy5hdWRpbyA9PT0gbnVsbCkgJiZcbiAgICAgIChvcHRpb25zLnZpZGVvID09PSBmYWxzZSB8fCBvcHRpb25zLnZpZGVvID09PSBudWxsKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgJ0Nhbm5vdCBwdWJsaXNoIGEgc3RyZWFtIHdpdGhvdXQgYXVkaW8gYW5kIHZpZGVvLicpKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1ZGlvID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMuYXVkaW8pKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ29wdGlvbnMuYXVkaW8gc2hvdWxkIGJlIGEgYm9vbGVhbiBvciBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlcnMgb2Ygb3B0aW9ucy5hdWRpbykge1xuICAgICAgICBpZiAoIXBhcmFtZXRlcnMuY29kZWMgfHwgdHlwZW9mIHBhcmFtZXRlcnMuY29kZWMubmFtZSAhPT0gJ3N0cmluZycgfHwgKFxuICAgICAgICAgIHBhcmFtZXRlcnMubWF4Qml0cmF0ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwYXJhbWV0ZXJzLm1heEJpdHJhdGVcbiAgICAgICAgICAhPT0gJ251bWJlcicpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICdvcHRpb25zLmF1ZGlvIGhhcyBpbmNvcnJlY3QgcGFyYW1ldGVycy4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnZpZGVvID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvcHRpb25zLnZpZGVvKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgJ29wdGlvbnMudmlkZW8gc2hvdWxkIGJlIGEgYm9vbGVhbiBvciBhbiBhcnJheS4nKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc093dEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSkge1xuICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXJzIG9mIG9wdGlvbnMudmlkZW8pIHtcbiAgICAgICAgaWYgKCFwYXJhbWV0ZXJzLmNvZGVjIHx8IHR5cGVvZiBwYXJhbWV0ZXJzLmNvZGVjLm5hbWUgIT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgKFxuICAgICAgICAgICAgcGFyYW1ldGVycy5tYXhCaXRyYXRlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBhcmFtZXRlcnNcbiAgICAgICAgICAgICAgICAubWF4Qml0cmF0ZSAhPT1cbiAgICAgICAgICAgICdudW1iZXInKSB8fCAocGFyYW1ldGVycy5jb2RlYy5wcm9maWxlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwYXJhbWV0ZXJzLmNvZGVjLnByb2ZpbGUgIT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAnb3B0aW9ucy52aWRlbyBoYXMgaW5jb3JyZWN0IHBhcmFtZXRlcnMuJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG1lZGlhT3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuX2NyZWF0ZVBlZXJDb25uZWN0aW9uKCk7XG4gICAgaWYgKHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCA+IDAgJiYgb3B0aW9ucy5hdWRpbyAhPT1cbiAgICAgIGZhbHNlICYmIG9wdGlvbnMuYXVkaW8gIT09IG51bGwpIHtcbiAgICAgIGlmIChzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICAgJ1B1Ymxpc2hpbmcgYSBzdHJlYW0gd2l0aCBtdWx0aXBsZSBhdWRpbyB0cmFja3MgaXMgbm90IGZ1bGx5J1xuICAgICAgICAgICAgKyAnIHN1cHBvcnRlZC4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXVkaW8gIT09ICdib29sZWFuJyAmJiB0eXBlb2Ygb3B0aW9ucy5hdWRpbyAhPT1cbiAgICAgICAgJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgICAnVHlwZSBvZiBhdWRpbyBvcHRpb25zIHNob3VsZCBiZSBib29sZWFuIG9yIGFuIG9iamVjdC4nXG4gICAgICAgICkpO1xuICAgICAgfVxuICAgICAgbWVkaWFPcHRpb25zLmF1ZGlvID0ge307XG4gICAgICBtZWRpYU9wdGlvbnMuYXVkaW8uc291cmNlID0gc3RyZWFtLnNvdXJjZS5hdWRpbztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVkaWFPcHRpb25zLmF1ZGlvID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPiAwICYmIG9wdGlvbnMudmlkZW8gIT09XG4gICAgICBmYWxzZSAmJiBvcHRpb25zLnZpZGVvICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoID4gMSkge1xuICAgICAgICBMb2dnZXIud2FybmluZyhcbiAgICAgICAgICAgICdQdWJsaXNoaW5nIGEgc3RyZWFtIHdpdGggbXVsdGlwbGUgdmlkZW8gdHJhY2tzIGlzIG5vdCBmdWxseSAnXG4gICAgICAgICAgICArICdzdXBwb3J0ZWQuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgbWVkaWFPcHRpb25zLnZpZGVvID0ge307XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8uc291cmNlID0gc3RyZWFtLnNvdXJjZS52aWRlbztcbiAgICAgIGNvbnN0IHRyYWNrU2V0dGluZ3MgPSBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXVxuICAgICAgICAgIC5nZXRTZXR0aW5ncygpO1xuICAgICAgbWVkaWFPcHRpb25zLnZpZGVvLnBhcmFtZXRlcnMgPSB7XG4gICAgICAgIHJlc29sdXRpb246IHtcbiAgICAgICAgICB3aWR0aDogdHJhY2tTZXR0aW5ncy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRyYWNrU2V0dGluZ3MuaGVpZ2h0LFxuICAgICAgICB9LFxuICAgICAgICBmcmFtZXJhdGU6IHRyYWNrU2V0dGluZ3MuZnJhbWVSYXRlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVkaWFPcHRpb25zLnZpZGVvID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJuYWxJZCA9IHRoaXMuX2NyZWF0ZUludGVybmFsSWQoKTtcbiAgICAvLyBXYWl0aW5nIGZvciBwcmV2aW91cyBTRFAgbmVnb3RpYXRpb24gaWYgbmVlZGVkXG4gICAgYXdhaXQgdGhpcy5fY2hhaW5TZHBQcm9taXNlKGludGVybmFsSWQpO1xuXG4gICAgY29uc3Qgb2ZmZXJPcHRpb25zID0ge307XG4gICAgY29uc3QgdHJhbnNjZWl2ZXJzID0gW107XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9wYy5hZGRUcmFuc2NlaXZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gfGRpcmVjdGlvbnwgc2VlbXMgbm90IHdvcmtpbmcgb24gU2FmYXJpLlxuICAgICAgaWYgKG1lZGlhT3B0aW9ucy5hdWRpbyAmJiBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggPlxuICAgICAgICAwKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zY2VpdmVySW5pdCA9IHtcbiAgICAgICAgICBkaXJlY3Rpb246ICdzZW5kb25seScsXG4gICAgICAgICAgc3RyZWFtczogW3N0cmVhbS5tZWRpYVN0cmVhbV0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLmF1ZGlvKSkge1xuICAgICAgICAgIHRyYW5zY2VpdmVySW5pdC5zZW5kRW5jb2RpbmdzID0gb3B0aW9ucy5hdWRpbztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0cmFuc2NlaXZlciA9IHRoaXMuX3BjLmFkZFRyYW5zY2VpdmVyKFxuICAgICAgICAgICAgc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF0sXG4gICAgICAgICAgICB0cmFuc2NlaXZlckluaXQpO1xuICAgICAgICB0cmFuc2NlaXZlcnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2F1ZGlvJyxcbiAgICAgICAgICB0cmFuc2NlaXZlcixcbiAgICAgICAgICBzb3VyY2U6IG1lZGlhT3B0aW9ucy5hdWRpby5zb3VyY2UsXG4gICAgICAgICAgb3B0aW9uOiB7YXVkaW86IG9wdGlvbnMuYXVkaW99LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoVXRpbHMuaXNGaXJlZm94KCkpIHtcbiAgICAgICAgICAvLyBGaXJlZm94IGRvZXMgbm90IHN1cHBvcnQgZW5jb2RpbmdzIHNldHRpbmcgaW4gYWRkVHJhbnNjZWl2ZXIuXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHRyYW5zY2VpdmVyLnNlbmRlci5nZXRQYXJhbWV0ZXJzKCk7XG4gICAgICAgICAgcGFyYW1ldGVycy5lbmNvZGluZ3MgPSB0cmFuc2NlaXZlckluaXQuc2VuZEVuY29kaW5ncztcbiAgICAgICAgICBhd2FpdCB0cmFuc2NlaXZlci5zZW5kZXIuc2V0UGFyYW1ldGVycyhwYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhT3B0aW9ucy52aWRlbyAmJiBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPlxuICAgICAgICAwKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zY2VpdmVySW5pdCA9IHtcbiAgICAgICAgICBkaXJlY3Rpb246ICdzZW5kb25seScsXG4gICAgICAgICAgc3RyZWFtczogW3N0cmVhbS5tZWRpYVN0cmVhbV0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSkge1xuICAgICAgICAgIHRyYW5zY2VpdmVySW5pdC5zZW5kRW5jb2RpbmdzID0gb3B0aW9ucy52aWRlbztcbiAgICAgICAgICB0aGlzLl92aWRlb0NvZGVjcyA9IHZpZGVvQ29kZWNzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyYW5zY2VpdmVyID0gdGhpcy5fcGMuYWRkVHJhbnNjZWl2ZXIoXG4gICAgICAgICAgICBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXSxcbiAgICAgICAgICAgIHRyYW5zY2VpdmVySW5pdCk7XG4gICAgICAgIHRyYW5zY2VpdmVycy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAndmlkZW8nLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLFxuICAgICAgICAgIHNvdXJjZTogbWVkaWFPcHRpb25zLnZpZGVvLnNvdXJjZSxcbiAgICAgICAgICBvcHRpb246IHt2aWRlbzogb3B0aW9ucy52aWRlb30sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChVdGlscy5pc0ZpcmVmb3goKSkge1xuICAgICAgICAgIC8vIEZpcmVmb3ggZG9lcyBub3Qgc3VwcG9ydCBlbmNvZGluZ3Mgc2V0dGluZyBpbiBhZGRUcmFuc2NlaXZlci5cbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gdHJhbnNjZWl2ZXIuc2VuZGVyLmdldFBhcmFtZXRlcnMoKTtcbiAgICAgICAgICBwYXJhbWV0ZXJzLmVuY29kaW5ncyA9IHRyYW5zY2VpdmVySW5pdC5zZW5kRW5jb2RpbmdzO1xuICAgICAgICAgIGF3YWl0IHRyYW5zY2VpdmVyLnNlbmRlci5zZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNob3VsZCBub3QgcmVhY2ggaGVyZVxuICAgICAgaWYgKG1lZGlhT3B0aW9ucy5hdWRpbyAmJlxuICAgICAgICAgIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCB0cmFjayBvZiBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKSkge1xuICAgICAgICAgIHRoaXMuX3BjLmFkZFRyYWNrKHRyYWNrLCBzdHJlYW0ubWVkaWFTdHJlYW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWFPcHRpb25zLnZpZGVvICYmXG4gICAgICAgICAgc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpKSB7XG4gICAgICAgICAgdGhpcy5fcGMuYWRkVHJhY2sodHJhY2ssIHN0cmVhbS5tZWRpYVN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZUF1ZGlvID0gZmFsc2U7XG4gICAgICBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLnNldChpbnRlcm5hbElkLCB7dHJhbnNjZWl2ZXJzfSk7XG5cbiAgICBsZXQgbG9jYWxEZXNjO1xuICAgIHRoaXMuX3BjLmNyZWF0ZU9mZmVyKG9mZmVyT3B0aW9ucykudGhlbigoZGVzYykgPT4ge1xuICAgICAgbG9jYWxEZXNjID0gZGVzYztcbiAgICAgIHJldHVybiB0aGlzLl9wYy5zZXRMb2NhbERlc2NyaXB0aW9uKGRlc2MpO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgdHJhY2tPcHRpb25zID0gW107XG4gICAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaCgoe3R5cGUsIHRyYW5zY2VpdmVyLCBzb3VyY2V9KSA9PiB7XG4gICAgICAgIHRyYWNrT3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIG1pZDogdHJhbnNjZWl2ZXIubWlkLFxuICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3B1Ymxpc2gnLCB7XG4gICAgICAgIG1lZGlhOiB7dHJhY2tzOiB0cmFja09wdGlvbnN9LFxuICAgICAgICBhdHRyaWJ1dGVzOiBzdHJlYW0uYXR0cmlidXRlcyxcbiAgICAgICAgdHJhbnNwb3J0OiB7aWQ6IHRoaXMuX2lkLCB0eXBlOiAnd2VicnRjJ30sXG4gICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAvLyBTZW5kIFNEUCBldmVuIHdoZW4gZmFpbGVkIHRvIGdldCBBbnN3ZXIuXG4gICAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc29hYycsIHtcbiAgICAgICAgICBpZDogdGhpcy5faWQsXG4gICAgICAgICAgc2lnbmFsaW5nOiBsb2NhbERlc2MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfSk7XG4gICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgcHVibGljYXRpb25JZCA9IGRhdGEuaWQ7XG4gICAgICBjb25zdCBtZXNzYWdlRXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KCdpZCcsIHtcbiAgICAgICAgbWVzc2FnZTogcHVibGljYXRpb25JZCxcbiAgICAgICAgb3JpZ2luOiB0aGlzLl9yZW1vdGVJZCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG1lc3NhZ2VFdmVudCk7XG5cbiAgICAgIHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpLmlkID0gcHVibGljYXRpb25JZDtcbiAgICAgIHRoaXMuX3JldmVyc2VJZE1hcC5zZXQocHVibGljYXRpb25JZCwgaW50ZXJuYWxJZCk7XG5cbiAgICAgIGlmICh0aGlzLl9pZCAmJiB0aGlzLl9pZCAhPT0gZGF0YS50cmFuc3BvcnRJZCkge1xuICAgICAgICBMb2dnZXIud2FybmluZygnU2VydmVyIHJldHVybnMgY29uZmxpY3QgSUQ6ICcgKyBkYXRhLnRyYW5zcG9ydElkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lkID0gZGF0YS50cmFuc3BvcnRJZDtcblxuICAgICAgLy8gTW9kaWZ5IGxvY2FsIFNEUCBiZWZvcmUgc2VuZGluZ1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXJzLmZvckVhY2goKHt0eXBlLCB0cmFuc2NlaXZlciwgb3B0aW9ufSkgPT4ge1xuICAgICAgICAgIGxvY2FsRGVzYy5zZHAgPSB0aGlzLl9zZXRSdHBSZWNlaXZlck9wdGlvbnMoXG4gICAgICAgICAgICAgIGxvY2FsRGVzYy5zZHAsIG9wdGlvbiwgdHJhbnNjZWl2ZXIubWlkKTtcbiAgICAgICAgICBsb2NhbERlc2Muc2RwID0gdGhpcy5fc2V0UnRwU2VuZGVyT3B0aW9ucyhcbiAgICAgICAgICAgICAgbG9jYWxEZXNjLnNkcCwgb3B0aW9uLCB0cmFuc2NlaXZlci5taWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc29hYycsIHtcbiAgICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgICBzaWduYWxpbmc6IGxvY2FsRGVzYyxcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBMb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgb2ZmZXIgb3Igc2V0IFNEUC4gTWVzc2FnZTogJ1xuICAgICAgICAgICsgZS5tZXNzYWdlKTtcbiAgICAgIGlmICh0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKS5pZCkge1xuICAgICAgICB0aGlzLl91bnB1Ymxpc2goaW50ZXJuYWxJZCk7XG4gICAgICAgIHRoaXMuX3JlamVjdFByb21pc2UoZSk7XG4gICAgICAgIHRoaXMuX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl91bnB1Ymxpc2goaW50ZXJuYWxJZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gLmNhdGNoKChlKSA9PiB7XG4gICAgLy8gICB0aGlzLl91bnB1Ymxpc2goaW50ZXJuYWxJZCk7XG4gICAgLy8gICB0aGlzLl9yZWplY3RQcm9taXNlKGUpO1xuICAgIC8vICAgdGhpcy5fZmlyZUVuZGVkRXZlbnRPblB1YmxpY2F0aW9uT3JTdWJzY3JpcHRpb24oKTtcbiAgICAvLyB9KTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fcHVibGlzaFByb21pc2VzLnNldChpbnRlcm5hbElkLCB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzdWJzY3JpYmUoc3RyZWFtLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ0Nvbm5lY3Rpb24gY2xvc2VkJyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGF1ZGlvOiAhIXN0cmVhbS5zZXR0aW5ncy5hdWRpbyxcbiAgICAgICAgdmlkZW86ICEhc3RyZWFtLnNldHRpbmdzLnZpZGVvLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ09wdGlvbnMgc2hvdWxkIGJlIGFuIG9iamVjdC4nKSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmF1ZGlvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMuYXVkaW8gPSAhIXN0cmVhbS5zZXR0aW5ncy5hdWRpbztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudmlkZW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy52aWRlbyA9ICEhc3RyZWFtLnNldHRpbmdzLnZpZGVvO1xuICAgIH1cbiAgICBpZiAoKG9wdGlvbnMuYXVkaW8gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy5hdWRpbyAhPT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuYXVkaW8gIT09ICdib29sZWFuJyAmJiBvcHRpb25zLmF1ZGlvICE9PSBudWxsKSB8fCAoXG4gICAgICBvcHRpb25zLnZpZGVvICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbnMudmlkZW8gIT09ICdvYmplY3QnICYmXG4gICAgICAgIHR5cGVvZiBvcHRpb25zLnZpZGVvICE9PSAnYm9vbGVhbicgJiYgb3B0aW9ucy52aWRlbyAhPT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9wdGlvbnMgdHlwZS4nKSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmF1ZGlvICYmICFzdHJlYW0uc2V0dGluZ3MuYXVkaW8gfHwgKG9wdGlvbnMudmlkZW8gJiZcbiAgICAgICAgIXN0cmVhbS5zZXR0aW5ncy52aWRlbykpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdvcHRpb25zLmF1ZGlvL3ZpZGVvIGNhbm5vdCBiZSB0cnVlIG9yIGFuIG9iamVjdCBpZiB0aGVyZSBpcyBubyAnXG4gICAgICAgICAgKyAnYXVkaW8vdmlkZW8gdHJhY2sgaW4gcmVtb3RlIHN0cmVhbS4nXG4gICAgICApKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYXVkaW8gPT09IGZhbHNlICYmIG9wdGlvbnMudmlkZW8gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnQ2Fubm90IHN1YnNjcmliZSBhIHN0cmVhbSB3aXRob3V0IGF1ZGlvIGFuZCB2aWRlby4nKSk7XG4gICAgfVxuICAgIGNvbnN0IG1lZGlhT3B0aW9ucyA9IHt9O1xuICAgIGlmIChvcHRpb25zLmF1ZGlvKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXVkaW8gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShvcHRpb25zLmF1ZGlvLmNvZGVjcykpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYXVkaW8uY29kZWNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAnQXVkaW8gY29kZWMgY2Fubm90IGJlIGFuIGVtcHR5IGFycmF5LicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWVkaWFPcHRpb25zLmF1ZGlvID0ge307XG4gICAgICBtZWRpYU9wdGlvbnMuYXVkaW8uZnJvbSA9IHN0cmVhbS5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVkaWFPcHRpb25zLmF1ZGlvID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnZpZGVvKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMudmlkZW8gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShvcHRpb25zLnZpZGVvLmNvZGVjcykpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMudmlkZW8uY29kZWNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAnVmlkZW8gY29kZWMgY2Fubm90IGJlIGFuIGVtcHR5IGFycmF5LicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWVkaWFPcHRpb25zLnZpZGVvID0ge307XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8uZnJvbSA9IHN0cmVhbS5pZDtcbiAgICAgIGlmIChvcHRpb25zLnZpZGVvLnJlc29sdXRpb24gfHwgb3B0aW9ucy52aWRlby5mcmFtZVJhdGUgfHwgKG9wdGlvbnMudmlkZW9cbiAgICAgICAgICAuYml0cmF0ZU11bHRpcGxpZXIgJiYgb3B0aW9ucy52aWRlby5iaXRyYXRlTXVsdGlwbGllciAhPT0gMSkgfHxcbiAgICAgICAgb3B0aW9ucy52aWRlby5rZXlGcmFtZUludGVydmFsKSB7XG4gICAgICAgIG1lZGlhT3B0aW9ucy52aWRlby5wYXJhbWV0ZXJzID0ge1xuICAgICAgICAgIHJlc29sdXRpb246IG9wdGlvbnMudmlkZW8ucmVzb2x1dGlvbixcbiAgICAgICAgICBmcmFtZXJhdGU6IG9wdGlvbnMudmlkZW8uZnJhbWVSYXRlLFxuICAgICAgICAgIGJpdHJhdGU6IG9wdGlvbnMudmlkZW8uYml0cmF0ZU11bHRpcGxpZXIgPyAneCdcbiAgICAgICAgICAgICAgKyBvcHRpb25zLnZpZGVvLmJpdHJhdGVNdWx0aXBsaWVyLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAga2V5RnJhbWVJbnRlcnZhbDogb3B0aW9ucy52aWRlby5rZXlGcmFtZUludGVydmFsLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMudmlkZW8ucmlkKSB7XG4gICAgICAgIC8vIFVzZSByaWQgbWF0Y2hlZCB0cmFjayBJRCBhcyBmcm9tIGlmIHBvc3NpYmxlXG4gICAgICAgIGNvbnN0IG1hdGNoZWRTZXR0aW5nID0gc3RyZWFtLnNldHRpbmdzLnZpZGVvXG4gICAgICAgICAgICAuZmluZCgodmlkZW8pID0+IHZpZGVvLnJpZCA9PT0gb3B0aW9ucy52aWRlby5yaWQpO1xuICAgICAgICBpZiAobWF0Y2hlZFNldHRpbmcgJiYgbWF0Y2hlZFNldHRpbmcuX3RyYWNrSWQpIHtcbiAgICAgICAgICBtZWRpYU9wdGlvbnMudmlkZW8uZnJvbSA9IG1hdGNoZWRTZXR0aW5nLl90cmFja0lkO1xuICAgICAgICAgIC8vIElnbm9yZSBvdGhlciBzZXR0aW5ncyB3aGVuIFJJRCBzZXQuXG4gICAgICAgICAgZGVsZXRlIG1lZGlhT3B0aW9ucy52aWRlby5wYXJhbWV0ZXJzO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudmlkZW8gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcm5hbElkID0gdGhpcy5fY3JlYXRlSW50ZXJuYWxJZCgpO1xuICAgIC8vIFdhaXRpbmcgZm9yIHByZXZpb3VzIFNEUCBuZWdvdGlhdGlvbiBpZiBuZWVkZWRcbiAgICBhd2FpdCB0aGlzLl9jaGFpblNkcFByb21pc2UoaW50ZXJuYWxJZCk7XG5cbiAgICBjb25zdCBvZmZlck9wdGlvbnMgPSB7fTtcbiAgICBjb25zdCB0cmFuc2NlaXZlcnMgPSBbXTtcbiAgICB0aGlzLl9jcmVhdGVQZWVyQ29ubmVjdGlvbigpO1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcGMuYWRkVHJhbnNjZWl2ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIHxkaXJlY3Rpb258IHNlZW1zIG5vdCB3b3JraW5nIG9uIFNhZmFyaS5cbiAgICAgIGlmIChtZWRpYU9wdGlvbnMuYXVkaW8pIHtcbiAgICAgICAgY29uc3QgdHJhbnNjZWl2ZXIgPSB0aGlzLl9wYy5hZGRUcmFuc2NlaXZlcihcbiAgICAgICAgICAgICdhdWRpbycsIHtkaXJlY3Rpb246ICdyZWN2b25seSd9KTtcbiAgICAgICAgdHJhbnNjZWl2ZXJzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdhdWRpbycsXG4gICAgICAgICAgdHJhbnNjZWl2ZXIsXG4gICAgICAgICAgZnJvbTogbWVkaWFPcHRpb25zLmF1ZGlvLmZyb20sXG4gICAgICAgICAgb3B0aW9uOiB7YXVkaW86IG9wdGlvbnMuYXVkaW99LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYU9wdGlvbnMudmlkZW8pIHtcbiAgICAgICAgY29uc3QgdHJhbnNjZWl2ZXIgPSB0aGlzLl9wYy5hZGRUcmFuc2NlaXZlcihcbiAgICAgICAgICAgICd2aWRlbycsIHtkaXJlY3Rpb246ICdyZWN2b25seSd9KTtcbiAgICAgICAgdHJhbnNjZWl2ZXJzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICd2aWRlbycsXG4gICAgICAgICAgdHJhbnNjZWl2ZXIsXG4gICAgICAgICAgZnJvbTogbWVkaWFPcHRpb25zLnZpZGVvLmZyb20sXG4gICAgICAgICAgcGFyYW1ldGVyczogbWVkaWFPcHRpb25zLnZpZGVvLnBhcmFtZXRlcnMsXG4gICAgICAgICAgb3B0aW9uOiB7dmlkZW86IG9wdGlvbnMudmlkZW99LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gPSAhIW9wdGlvbnMuYXVkaW87XG4gICAgICBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbyA9ICEhb3B0aW9ucy52aWRlbztcbiAgICB9XG4gICAgdGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzLnNldChpbnRlcm5hbElkLCB7dHJhbnNjZWl2ZXJzfSk7XG4gICAgdGhpcy5fc3Vic2NyaWJlZFN0cmVhbXMuc2V0KGludGVybmFsSWQsIHN0cmVhbSk7XG5cbiAgICBsZXQgbG9jYWxEZXNjO1xuICAgIHRoaXMuX3BjLmNyZWF0ZU9mZmVyKG9mZmVyT3B0aW9ucykudGhlbigoZGVzYykgPT4ge1xuICAgICAgbG9jYWxEZXNjID0gZGVzYztcbiAgICAgIHJldHVybiB0aGlzLl9wYy5zZXRMb2NhbERlc2NyaXB0aW9uKGRlc2MpXG4gICAgICAgICAgLmNhdGNoKChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignU2V0IGxvY2FsIGRlc2NyaXB0aW9uIGZhaWxlZC4gTWVzc2FnZTogJyArXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKSk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIExvZ2dlci5lcnJvcignQ3JlYXRlIG9mZmVyIGZhaWxlZC4gRXJyb3IgaW5mbzogJyArIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIGVycm9yKSk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHRyYWNrT3B0aW9ucyA9IFtdO1xuICAgICAgdHJhbnNjZWl2ZXJzLmZvckVhY2goKHt0eXBlLCB0cmFuc2NlaXZlciwgZnJvbSwgcGFyYW1ldGVycywgb3B0aW9ufSkgPT4ge1xuICAgICAgICB0cmFja09wdGlvbnMucHVzaCh7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBtaWQ6IHRyYW5zY2VpdmVyLm1pZCxcbiAgICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzdWJzY3JpYmUnLCB7XG4gICAgICAgIG1lZGlhOiB7dHJhY2tzOiB0cmFja09wdGlvbnN9LFxuICAgICAgICB0cmFuc3BvcnQ6IHtpZDogdGhpcy5faWQsIHR5cGU6ICd3ZWJydGMnfSxcbiAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIC8vIFNlbmQgU0RQIGV2ZW4gd2hlbiBmYWlsZWQgdG8gZ2V0IEFuc3dlci5cbiAgICAgICAgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzb2FjJywge1xuICAgICAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgICAgICBzaWduYWxpbmc6IGxvY2FsRGVzYyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9KTtcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb25JZCA9IGRhdGEuaWQ7XG4gICAgICBjb25zdCBtZXNzYWdlRXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KCdpZCcsIHtcbiAgICAgICAgbWVzc2FnZTogc3Vic2NyaXB0aW9uSWQsXG4gICAgICAgIG9yaWdpbjogdGhpcy5fcmVtb3RlSWQsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChtZXNzYWdlRXZlbnQpO1xuXG4gICAgICB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpLmlkID0gc3Vic2NyaXB0aW9uSWQ7XG4gICAgICB0aGlzLl9yZXZlcnNlSWRNYXAuc2V0KHN1YnNjcmlwdGlvbklkLCBpbnRlcm5hbElkKTtcbiAgICAgIGlmICh0aGlzLl9pZCAmJiB0aGlzLl9pZCAhPT0gZGF0YS50cmFuc3BvcnRJZCkge1xuICAgICAgICBMb2dnZXIud2FybmluZygnU2VydmVyIHJldHVybnMgY29uZmxpY3QgSUQ6ICcgKyBkYXRhLnRyYW5zcG9ydElkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lkID0gZGF0YS50cmFuc3BvcnRJZDtcblxuICAgICAgLy8gTW9kaWZ5IGxvY2FsIFNEUCBiZWZvcmUgc2VuZGluZ1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXJzLmZvckVhY2goKHt0eXBlLCB0cmFuc2NlaXZlciwgb3B0aW9ufSkgPT4ge1xuICAgICAgICAgIGxvY2FsRGVzYy5zZHAgPSB0aGlzLl9zZXRSdHBSZWNlaXZlck9wdGlvbnMoXG4gICAgICAgICAgICAgIGxvY2FsRGVzYy5zZHAsIG9wdGlvbiwgdHJhbnNjZWl2ZXIubWlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3NvYWMnLCB7XG4gICAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgICAgc2lnbmFsaW5nOiBsb2NhbERlc2MsXG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIG9mZmVyIG9yIHNldCBTRFAuIE1lc3NhZ2U6ICdcbiAgICAgICAgICArIGUubWVzc2FnZSk7XG4gICAgICBpZiAodGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKS5pZCkge1xuICAgICAgICB0aGlzLl91bnN1YnNjcmliZShpbnRlcm5hbElkKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0UHJvbWlzZShlKTtcbiAgICAgICAgdGhpcy5fZmlyZUVuZGVkRXZlbnRPblB1YmxpY2F0aW9uT3JTdWJzY3JpcHRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKGludGVybmFsSWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5zZXQoaW50ZXJuYWxJZCwge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3BjICYmIHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlICE9PSAnY2xvc2VkJykge1xuICAgICAgdGhpcy5fcGMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBfY2hhaW5TZHBQcm9taXNlKGludGVybmFsSWQpIHtcbiAgICBjb25zdCBwcmlvciA9IHRoaXMuX3NkcFByb21pc2U7XG4gICAgY29uc3QgbmVnb3RpYXRpb25UaW1lb3V0ID0gMTAwMDA7XG4gICAgdGhpcy5fc2RwUHJvbWlzZSA9IHByaW9yLnRoZW4oXG4gICAgICAgICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNvbHZlciA9IHtmaW5pc2g6IGZhbHNlLCByZXNvbHZlLCByZWplY3R9O1xuICAgICAgICAgIHRoaXMuX3NkcFJlc29sdmVycy5wdXNoKHJlc29sdmVyKTtcbiAgICAgICAgICB0aGlzLl9zZHBSZXNvbHZlck1hcC5zZXQoaW50ZXJuYWxJZCwgcmVzb2x2ZXIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KCdUaW1lb3V0IHRvIGdldCBTRFAgYW5zd2VyJyksXG4gICAgICAgICAgICAgIG5lZ290aWF0aW9uVGltZW91dCk7XG4gICAgICAgIH0pKTtcbiAgICByZXR1cm4gcHJpb3IuY2F0Y2goKGUpPT57XG4gICAgICAvL1xuICAgIH0pO1xuICB9XG5cbiAgX25leHRTZHBQcm9taXNlKCkge1xuICAgIGxldCByZXQgPSBmYWxzZTtcbiAgICAvLyBTa2lwIHRoZSBmaW5pc2hlZCBzZHAgcHJvbWlzZVxuICAgIHdoaWxlICh0aGlzLl9zZHBSZXNvbHZlTnVtIDwgdGhpcy5fc2RwUmVzb2x2ZXJzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcmVzb2x2ZXIgPSB0aGlzLl9zZHBSZXNvbHZlcnNbdGhpcy5fc2RwUmVzb2x2ZU51bV07XG4gICAgICB0aGlzLl9zZHBSZXNvbHZlTnVtKys7XG4gICAgICBpZiAoIXJlc29sdmVyLmZpbmlzaCkge1xuICAgICAgICByZXNvbHZlci5yZXNvbHZlKCk7XG4gICAgICAgIHJlc29sdmVyLmZpbmlzaCA9IHRydWU7XG4gICAgICAgIHJldCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBfY3JlYXRlSW50ZXJuYWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJuYWxDb3VudCsrO1xuICB9XG5cbiAgX3VucHVibGlzaChpbnRlcm5hbElkKSB7XG4gICAgaWYgKHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICBjb25zdCB7aWQsIHRyYW5zY2VpdmVyc30gPSB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKTtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3VucHVibGlzaCcsIHtpZH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ01DVSByZXR1cm5zIG5lZ2F0aXZlIGFjayBmb3IgdW5wdWJsaXNoaW5nLCAnICsgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmV2ZXJzZUlkTWFwLmRlbGV0ZShpZCk7XG4gICAgICB9XG4gICAgICAvLyBDbGVhbiB0cmFuc2NlaXZlclxuICAgICAgdHJhbnNjZWl2ZXJzLmZvckVhY2goKHt0cmFuc2NlaXZlcn0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlID09PSAnc3RhYmxlJykge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLnNlbmRlci5yZXBsYWNlVHJhY2sobnVsbCk7XG4gICAgICAgICAgdGhpcy5fcGMucmVtb3ZlVHJhY2sodHJhbnNjZWl2ZXIuc2VuZGVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9wdWJsaXNoVHJhbnNjZWl2ZXJzLmRlbGV0ZShpbnRlcm5hbElkKTtcbiAgICAgIC8vIEZpcmUgZW5kZWQgZXZlbnRcbiAgICAgIGlmICh0aGlzLl9wdWJsaWNhdGlvbnMuaGFzKGlkKSkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBPd3RFdmVudCgnZW5kZWQnKTtcbiAgICAgICAgdGhpcy5fcHVibGljYXRpb25zLmdldChpZCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIHRoaXMuX3B1YmxpY2F0aW9ucy5kZWxldGUoaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ludmFsaWQgcHVibGljYXRpb24gdG8gdW5wdWJsaXNoOiAnICsgaWQpO1xuICAgICAgICBpZiAodGhpcy5fcHVibGlzaFByb21pc2VzLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5nZXQoaW50ZXJuYWxJZCkucmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgQ29uZmVyZW5jZUVycm9yKCdGYWlsZWQgdG8gcHVibGlzaCcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3NkcFJlc29sdmVyTWFwLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgICBjb25zdCByZXNvbHZlciA9IHRoaXMuX3NkcFJlc29sdmVyTWFwLmdldChpbnRlcm5hbElkKTtcbiAgICAgICAgaWYgKCFyZXNvbHZlci5maW5pc2gpIHtcbiAgICAgICAgICByZXNvbHZlci5yZXNvbHZlKCk7XG4gICAgICAgICAgcmVzb2x2ZXIuZmluaXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZHBSZXNvbHZlck1hcC5kZWxldGUoaW50ZXJuYWxJZCk7XG4gICAgICB9XG4gICAgICAvLyBDcmVhdGUgb2ZmZXIsIHNldCBsb2NhbCBhbmQgcmVtb3RlIGRlc2NyaXB0aW9uXG4gICAgfVxuICB9XG5cbiAgX3Vuc3Vic2NyaWJlKGludGVybmFsSWQpIHtcbiAgICBpZiAodGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgY29uc3Qge2lkLCB0cmFuc2NlaXZlcnN9ID0gdGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKTtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3Vuc3Vic2NyaWJlJywge2lkfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICBMb2dnZXIud2FybmluZyhcbiAgICAgICAgICAgICAgICAgICdNQ1UgcmV0dXJucyBuZWdhdGl2ZSBhY2sgZm9yIHVuc3Vic2NyaWJpbmcsICcgKyBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gQ2xlYW4gdHJhbnNjZWl2ZXJcbiAgICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKCh7dHJhbnNjZWl2ZXJ9KSA9PiB7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlY2VpdmVyLnRyYWNrLnN0b3AoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzLmRlbGV0ZShpbnRlcm5hbElkKTtcbiAgICAgIC8vIEZpcmUgZW5kZWQgZXZlbnRcbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb25zLmhhcyhpZCkpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgT3d0RXZlbnQoJ2VuZGVkJyk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZ2V0KGlkKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5kZWxldGUoaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ludmFsaWQgc3Vic2NyaXB0aW9uIHRvIHVuc3Vic2NyaWJlOiAnICsgaWQpO1xuICAgICAgICBpZiAodGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuZ2V0KGludGVybmFsSWQpLnJlamVjdChcbiAgICAgICAgICAgICAgbmV3IENvbmZlcmVuY2VFcnJvcignRmFpbGVkIHRvIHN1YnNjcmliZScpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gQ2xlYXIgbWVkaWEgc3RyZWFtXG4gICAgICBpZiAodGhpcy5fc3Vic2NyaWJlZFN0cmVhbXMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZWRTdHJlYW1zLmdldChpbnRlcm5hbElkKS5tZWRpYVN0cmVhbSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZWRTdHJlYW1zLmRlbGV0ZShpbnRlcm5hbElkKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9zZHBSZXNvbHZlck1hcC5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSB0aGlzLl9zZHBSZXNvbHZlck1hcC5nZXQoaW50ZXJuYWxJZCk7XG4gICAgICAgIGlmICghcmVzb2x2ZXIuZmluaXNoKSB7XG4gICAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZSgpO1xuICAgICAgICAgIHJlc29sdmVyLmZpbmlzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2RwUmVzb2x2ZXJNYXAuZGVsZXRlKGludGVybmFsSWQpO1xuICAgICAgfVxuICAgICAgLy8gRGlzYWJsZSBtZWRpYSBpbiByZW1vdGUgU0RQXG4gICAgICAvLyBTZXQgcmVtb3RlRGVzY3JpcHRpb24gYW5kIHNldCBsb2NhbERlc2NyaXB0aW9uXG4gICAgfVxuICB9XG5cbiAgX211dGVPclVubXV0ZShzZXNzaW9uSWQsIGlzTXV0ZSwgaXNQdWIsIHRyYWNrS2luZCkge1xuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGlzUHViID8gJ3N0cmVhbS1jb250cm9sJyA6XG4gICAgICAnc3Vic2NyaXB0aW9uLWNvbnRyb2wnO1xuICAgIGNvbnN0IG9wZXJhdGlvbiA9IGlzTXV0ZSA/ICdwYXVzZScgOiAncGxheSc7XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZShldmVudE5hbWUsIHtcbiAgICAgIGlkOiBzZXNzaW9uSWQsXG4gICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcbiAgICAgIGRhdGE6IHRyYWNrS2luZCxcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGlmICghaXNQdWIpIHtcbiAgICAgICAgY29uc3QgbXV0ZUV2ZW50TmFtZSA9IGlzTXV0ZSA/ICdtdXRlJyA6ICd1bm11dGUnO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmdldChzZXNzaW9uSWQpLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgTXV0ZUV2ZW50KG11dGVFdmVudE5hbWUsIHtraW5kOiB0cmFja0tpbmR9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfYXBwbHlPcHRpb25zKHNlc3Npb25JZCwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdGlvbnMudmlkZW8gIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnT3B0aW9ucyBzaG91bGQgYmUgYW4gb2JqZWN0LicpKTtcbiAgICB9XG4gICAgY29uc3QgdmlkZW9PcHRpb25zID0ge307XG4gICAgdmlkZW9PcHRpb25zLnJlc29sdXRpb24gPSBvcHRpb25zLnZpZGVvLnJlc29sdXRpb247XG4gICAgdmlkZW9PcHRpb25zLmZyYW1lcmF0ZSA9IG9wdGlvbnMudmlkZW8uZnJhbWVSYXRlO1xuICAgIHZpZGVvT3B0aW9ucy5iaXRyYXRlID0gb3B0aW9ucy52aWRlby5iaXRyYXRlTXVsdGlwbGllciA/ICd4JyArIG9wdGlvbnMudmlkZW9cbiAgICAgICAgLmJpdHJhdGVNdWx0aXBsaWVyXG4gICAgICAgIC50b1N0cmluZygpIDogdW5kZWZpbmVkO1xuICAgIHZpZGVvT3B0aW9ucy5rZXlGcmFtZUludGVydmFsID0gb3B0aW9ucy52aWRlby5rZXlGcmFtZUludGVydmFsO1xuICAgIHJldHVybiB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3N1YnNjcmlwdGlvbi1jb250cm9sJywge1xuICAgICAgaWQ6IHNlc3Npb25JZCxcbiAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHZpZGVvOiB7cGFyYW1ldGVyczogdmlkZW9PcHRpb25zfSxcbiAgICAgIH0sXG4gICAgfSkudGhlbigpO1xuICB9XG5cbiAgX29uUmVtb3RlU3RyZWFtQWRkZWQoZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ1JlbW90ZSBzdHJlYW0gYWRkZWQuJyk7XG4gICAgbGV0IGZpbmQgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IFtpbnRlcm5hbElkLCBzdWJdIG9mIHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycykge1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uSWQgPSBzdWIuaWQ7XG4gICAgICBpZiAoc3ViLnRyYW5zY2VpdmVycy5maW5kKCh0KSA9PiB0LnRyYW5zY2VpdmVyID09PSBldmVudC50cmFuc2NlaXZlcikpIHtcbiAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZWRTdHJlYW0gPSB0aGlzLl9zdWJzY3JpYmVkU3RyZWFtcy5nZXQoaW50ZXJuYWxJZCk7XG4gICAgICAgIGlmICghc3Vic2NyaWJlZFN0cmVhbS5tZWRpYVN0cmVhbSkge1xuICAgICAgICAgIHRoaXMuX3N1YnNjcmliZWRTdHJlYW1zLmdldChpbnRlcm5hbElkKS5tZWRpYVN0cmVhbSA9XG4gICAgICAgICAgICAgIGV2ZW50LnN0cmVhbXNbMF07XG4gICAgICAgICAgLy8gUmVzb2x2ZSBzdWJzY3JpcHRpb24gaWYgcmVhZHkgaGFuZGxlciBoYXMgYmVlbiBjYWxsZWRcbiAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLl9zdWJzY3JpcHRpb25zLmdldChzdWJzY3JpcHRpb25JZCk7XG4gICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuZ2V0KGludGVybmFsSWQpLnJlc29sdmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQWRkIHRyYWNrIHRvIHRoZSBleGlzdGluZyBzdHJlYW1cbiAgICAgICAgICBzdWJzY3JpYmVkU3RyZWFtLm1lZGlhU3RyZWFtLmFkZFRyYWNrKGV2ZW50LnRyYWNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpbmQpIHtcbiAgICAgIC8vIFRoaXMgaXMgbm90IGV4cGVjdGVkIHBhdGguIEhvd2V2ZXIsIHRoaXMgaXMgZ29pbmcgdG8gaGFwcGVuIG9uIFNhZmFyaVxuICAgICAgLy8gYmVjYXVzZSBpdCBkb2VzIG5vdCBzdXBwb3J0IHNldHRpbmcgZGlyZWN0aW9uIG9mIHRyYW5zY2VpdmVyLlxuICAgICAgTG9nZ2VyLndhcm5pbmcoJ1JlY2VpdmVkIHJlbW90ZSBzdHJlYW0gd2l0aG91dCBzdWJzY3JpcHRpb24uJyk7XG4gICAgfVxuICB9XG5cbiAgX29uTG9jYWxJY2VDYW5kaWRhdGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XG4gICAgICBpZiAodGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgIT09ICdzdGFibGUnKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdDYW5kaWRhdGVzLnB1c2goZXZlbnQuY2FuZGlkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlbmRDYW5kaWRhdGUoZXZlbnQuY2FuZGlkYXRlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdFbXB0eSBjYW5kaWRhdGUuJyk7XG4gICAgfVxuICB9XG5cbiAgX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCkge1xuICAgIGlmICh0aGlzLl9lbmRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9lbmRlZCA9IHRydWU7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgT3d0RXZlbnQoJ2VuZGVkJyk7XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHB1YmxpY2F0aW9uXSBvZiB0aGlzLl9wdWJsaWNhdGlvbnMpIHtcbiAgICAgIHB1YmxpY2F0aW9uLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgcHVibGljYXRpb24uc3RvcCgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgc3Vic2NyaXB0aW9uXSBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWJzY3JpcHRpb24uZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICBzdWJzY3JpcHRpb24uc3RvcCgpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIF9yZWplY3RQcm9taXNlKGVycm9yKSB7XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgZXJyb3IgPSBuZXcgQ29uZmVyZW5jZUVycm9yKCdDb25uZWN0aW9uIGZhaWxlZCBvciBjbG9zZWQuJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYyAmJiB0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgIT09ICdjbG9zZWQnKSB7XG4gICAgICB0aGlzLl9wYy5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFJlamVjdGluZyBhbGwgY29ycmVzcG9uZGluZyBwcm9taXNlcyBpZiBwdWJsaXNoaW5nIGFuZCBzdWJzY3JpYmluZyBpcyBvbmdvaW5nLlxuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBwcm9taXNlXSBvZiB0aGlzLl9wdWJsaXNoUHJvbWlzZXMpIHtcbiAgICAgIHByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5fcHVibGlzaFByb21pc2VzLmNsZWFyKCk7XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHByb21pc2VdIG9mIHRoaXMuX3N1YnNjcmliZVByb21pc2VzKSB7XG4gICAgICBwcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmNsZWFyKCk7XG4gIH1cblxuICBfb25JY2VDb25uZWN0aW9uU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50IHx8ICFldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgTG9nZ2VyLmRlYnVnKCdJQ0UgY29ubmVjdGlvbiBzdGF0ZSBjaGFuZ2VkIHRvICcgK1xuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZSk7XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY2xvc2VkJyB8fFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoJ2Nvbm5lY3Rpb24gZmFpbGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmlyZSBlbmRlZCBldmVudCBpZiBwdWJsaWNhdGlvbiBvciBzdWJzY3JpcHRpb24gZXhpc3RzLlxuICAgICAgICB0aGlzLl9maXJlRW5kZWRFdmVudE9uUHVibGljYXRpb25PclN1YnNjcmlwdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9vbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZShldmVudCkge1xuICAgIGlmICh0aGlzLl9wYy5jb25uZWN0aW9uU3RhdGUgPT09ICdjbG9zZWQnIHx8XG4gICAgICAgIHRoaXMuX3BjLmNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgIGlmICh0aGlzLl9wYy5jb25uZWN0aW9uU3RhdGUgPT09ICdmYWlsZWQnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKCdjb25uZWN0aW9uIGZhaWxlZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZpcmUgZW5kZWQgZXZlbnQgaWYgcHVibGljYXRpb24gb3Igc3Vic2NyaXB0aW9uIGV4aXN0cy5cbiAgICAgICAgdGhpcy5fZmlyZUVuZGVkRXZlbnRPblB1YmxpY2F0aW9uT3JTdWJzY3JpcHRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfc2VuZENhbmRpZGF0ZShjYW5kaWRhdGUpIHtcbiAgICB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3NvYWMnLCB7XG4gICAgICBpZDogdGhpcy5faWQsXG4gICAgICBzaWduYWxpbmc6IHtcbiAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZScsXG4gICAgICAgIGNhbmRpZGF0ZToge1xuICAgICAgICAgIGNhbmRpZGF0ZTogJ2E9JyArIGNhbmRpZGF0ZS5jYW5kaWRhdGUsXG4gICAgICAgICAgc2RwTWlkOiBjYW5kaWRhdGUuc2RwTWlkLFxuICAgICAgICAgIHNkcE1MaW5lSW5kZXg6IGNhbmRpZGF0ZS5zZHBNTGluZUluZGV4LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVQZWVyQ29ubmVjdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcGMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwY0NvbmZpZ3VyYXRpb24gPSB0aGlzLl9jb25maWcucnRjQ29uZmlndXJhdGlvbiB8fCB7fTtcbiAgICBpZiAoVXRpbHMuaXNDaHJvbWUoKSkge1xuICAgICAgcGNDb25maWd1cmF0aW9uLnNkcFNlbWFudGljcyA9ICd1bmlmaWVkLXBsYW4nO1xuICAgICAgcGNDb25maWd1cmF0aW9uLmJ1bmRsZVBvbGljeSA9ICdtYXgtYnVuZGxlJztcbiAgICB9XG4gICAgdGhpcy5fcGMgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24ocGNDb25maWd1cmF0aW9uKTtcbiAgICB0aGlzLl9wYy5vbmljZWNhbmRpZGF0ZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25Mb2NhbEljZUNhbmRpZGF0ZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIHRoaXMuX3BjLm9udHJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uUmVtb3RlU3RyZWFtQWRkZWQuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICB0aGlzLl9wYy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25JY2VDb25uZWN0aW9uU3RhdGVDaGFuZ2UuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICB0aGlzLl9wYy5vbmNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25Db25uZWN0aW9uU3RhdGVDaGFuZ2UuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgfVxuXG4gIF9nZXRTdGF0cygpIHtcbiAgICBpZiAodGhpcy5fcGMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wYy5nZXRTdGF0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnUGVlckNvbm5lY3Rpb24gaXMgbm90IGF2YWlsYWJsZS4nKSk7XG4gICAgfVxuICB9XG5cbiAgX3JlYWR5SGFuZGxlcihzZXNzaW9uSWQpIHtcbiAgICBjb25zdCBpbnRlcm5hbElkID0gdGhpcy5fcmV2ZXJzZUlkTWFwLmdldChzZXNzaW9uSWQpO1xuICAgIGlmICh0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oc2Vzc2lvbklkLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKGludGVybmFsSWQpO1xuICAgICAgfSwgKCkgPT4gdGhpcy5fZ2V0U3RhdHMoKSxcbiAgICAgICh0cmFja0tpbmQpID0+IHRoaXMuX211dGVPclVubXV0ZShzZXNzaW9uSWQsIHRydWUsIGZhbHNlLCB0cmFja0tpbmQpLFxuICAgICAgKHRyYWNrS2luZCkgPT4gdGhpcy5fbXV0ZU9yVW5tdXRlKHNlc3Npb25JZCwgZmFsc2UsIGZhbHNlLCB0cmFja0tpbmQpLFxuICAgICAgKG9wdGlvbnMpID0+IHRoaXMuX2FwcGx5T3B0aW9ucyhzZXNzaW9uSWQsIG9wdGlvbnMpKTtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuc2V0KHNlc3Npb25JZCwgc3Vic2NyaXB0aW9uKTtcbiAgICAgIC8vIEZpcmUgc3Vic2NyaXB0aW9uJ3MgZW5kZWQgZXZlbnQgd2hlbiBhc3NvY2lhdGVkIHN0cmVhbSBpcyBlbmRlZC5cbiAgICAgIHRoaXMuX3N1YnNjcmliZWRTdHJlYW1zLmdldChpbnRlcm5hbElkKS5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbnMuaGFzKHNlc3Npb25JZCkpIHtcbiAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmdldChzZXNzaW9uSWQpLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICdlbmRlZCcsIG5ldyBPd3RFdmVudCgnZW5kZWQnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gUmVzb2x2ZSBzdWJzY3JpcHRpb24gaWYgbWVkaWFTdHJlYW0gaXMgcmVhZHlcbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpYmVkU3RyZWFtcy5nZXQoaW50ZXJuYWxJZCkubWVkaWFTdHJlYW0pIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuZ2V0KGludGVybmFsSWQpLnJlc29sdmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgIGNvbnN0IHB1YmxpY2F0aW9uID0gbmV3IFB1YmxpY2F0aW9uKHNlc3Npb25JZCwgKCkgPT4ge1xuICAgICAgICB0aGlzLl91bnB1Ymxpc2goaW50ZXJuYWxJZCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH0sICgpID0+IHRoaXMuX2dldFN0YXRzKCksXG4gICAgICAodHJhY2tLaW5kKSA9PiB0aGlzLl9tdXRlT3JVbm11dGUoc2Vzc2lvbklkLCB0cnVlLCB0cnVlLCB0cmFja0tpbmQpLFxuICAgICAgKHRyYWNrS2luZCkgPT4gdGhpcy5fbXV0ZU9yVW5tdXRlKHNlc3Npb25JZCwgZmFsc2UsIHRydWUsIHRyYWNrS2luZCkpO1xuICAgICAgdGhpcy5fcHVibGljYXRpb25zLnNldChzZXNzaW9uSWQsIHB1YmxpY2F0aW9uKTtcbiAgICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5nZXQoaW50ZXJuYWxJZCkucmVzb2x2ZShwdWJsaWNhdGlvbik7XG4gICAgICAvLyBEbyBub3QgZmlyZSBwdWJsaWNhdGlvbidzIGVuZGVkIGV2ZW50IHdoZW4gYXNzb2NpYXRlZCBzdHJlYW0gaXMgZW5kZWQuXG4gICAgICAvLyBJdCBtYXkgc3RpbGwgc2VuZGluZyBzaWxlbmNlIG9yIGJsYWNrIGZyYW1lcy5cbiAgICAgIC8vIFJlZmVyIHRvIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJydGMtcGMvI3J0Y3J0cHNlbmRlci1pbnRlcmZhY2UuXG4gICAgfSBlbHNlIGlmICghc2Vzc2lvbklkKSB7XG4gICAgICAvLyBDaGFubmVsIHJlYWR5XG4gICAgfVxuICB9XG5cbiAgX3NkcEhhbmRsZXIoc2RwKSB7XG4gICAgaWYgKHNkcC50eXBlID09PSAnYW5zd2VyJykge1xuICAgICAgdGhpcy5fcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oc2RwKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdDYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiB0aGlzLl9wZW5kaW5nQ2FuZGlkYXRlcykge1xuICAgICAgICAgICAgdGhpcy5fc2VuZENhbmRpZGF0ZShjYW5kaWRhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIExvZ2dlci5lcnJvcignU2V0IHJlbW90ZSBkZXNjcmlwdGlvbiBmYWlsZWQ6ICcgKyBlcnJvcik7XG4gICAgICAgIHRoaXMuX3JlamVjdFByb21pc2UoZXJyb3IpO1xuICAgICAgICB0aGlzLl9maXJlRW5kZWRFdmVudE9uUHVibGljYXRpb25PclN1YnNjcmlwdGlvbigpO1xuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fbmV4dFNkcFByb21pc2UoKSkge1xuICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdVbmV4cGVjdGVkIFNEUCBwcm9taXNlIHN0YXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9lcnJvckhhbmRsZXIoc2Vzc2lvbklkLCBlcnJvck1lc3NhZ2UpIHtcbiAgICBpZiAoIXNlc3Npb25JZCkge1xuICAgICAgLy8gVHJhbnNwb3J0IGVycm9yXG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvLyBGaXJlIGVycm9yIGV2ZW50IG9uIHB1YmxpY2F0aW9uIG9yIHN1YnNjcmlwdGlvblxuICAgIGNvbnN0IGVycm9yRXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICBlcnJvcjogbmV3IENvbmZlcmVuY2VFcnJvcihlcnJvck1lc3NhZ2UpLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLl9wdWJsaWNhdGlvbnMuaGFzKHNlc3Npb25JZCkpIHtcbiAgICAgIHRoaXMuX3B1YmxpY2F0aW9ucy5nZXQoc2Vzc2lvbklkKS5kaXNwYXRjaEV2ZW50KGVycm9yRXZlbnQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9ucy5oYXMoc2Vzc2lvbklkKSkge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5nZXQoc2Vzc2lvbklkKS5kaXNwYXRjaEV2ZW50KGVycm9yRXZlbnQpO1xuICAgIH1cbiAgICAvLyBTdG9wIHB1YmxpY2F0aW9uIG9yIHN1YnNjcmlwdGlvblxuICAgIGNvbnN0IGludGVybmFsSWQgPSB0aGlzLl9yZXZlcnNlSWRNYXAuZ2V0KHNlc3Npb25JZCk7XG4gICAgaWYgKHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICB0aGlzLl91bnB1Ymxpc2goaW50ZXJuYWxJZCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZShpbnRlcm5hbElkKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlRXJyb3IoZXJyb3JNZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQ29uZmVyZW5jZUVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVycm9yRXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHB1YmxpY2F0aW9uXSBvZiB0aGlzLl9wdWJsaWNhdGlvbnMpIHtcbiAgICAgIHB1YmxpY2F0aW9uLmRpc3BhdGNoRXZlbnQoZXJyb3JFdmVudCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBzdWJzY3JpcHRpb25dIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5kaXNwYXRjaEV2ZW50KGVycm9yRXZlbnQpO1xuICAgIH1cbiAgICAvLyBGaXJlIGVuZGVkIGV2ZW50IHdoZW4gZXJyb3Igb2NjdXJlZFxuICAgIHRoaXMuX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCk7XG4gIH1cblxuICBfc2V0Q29kZWNPcmRlcihzZHAsIG9wdGlvbnMsIG1pZCkge1xuICAgIGlmIChvcHRpb25zLmF1ZGlvKSB7XG4gICAgICBpZiAob3B0aW9ucy5hdWRpby5jb2RlY3MpIHtcbiAgICAgICAgY29uc3QgYXVkaW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbShvcHRpb25zLmF1ZGlvLmNvZGVjcywgKGNvZGVjKSA9PlxuICAgICAgICAgIGNvZGVjLm5hbWUpO1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ2F1ZGlvJywgYXVkaW9Db2RlY05hbWVzLCBtaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXVkaW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbShvcHRpb25zLmF1ZGlvLFxuICAgICAgICAgICAgKGVuY29kaW5nUGFyYW1ldGVycykgPT4gZW5jb2RpbmdQYXJhbWV0ZXJzLmNvZGVjLm5hbWUpO1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ2F1ZGlvJywgYXVkaW9Db2RlY05hbWVzLCBtaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy52aWRlbykge1xuICAgICAgaWYgKG9wdGlvbnMudmlkZW8uY29kZWNzKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvQ29kZWNOYW1lcyA9IEFycmF5LmZyb20ob3B0aW9ucy52aWRlby5jb2RlY3MsIChjb2RlYykgPT5cbiAgICAgICAgICBjb2RlYy5uYW1lKTtcbiAgICAgICAgc2RwID0gU2RwVXRpbHMucmVvcmRlckNvZGVjcyhzZHAsICd2aWRlbycsIHZpZGVvQ29kZWNOYW1lcywgbWlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZpZGVvQ29kZWNOYW1lcyA9IEFycmF5LmZyb20ob3B0aW9ucy52aWRlbyxcbiAgICAgICAgICAgIChlbmNvZGluZ1BhcmFtZXRlcnMpID0+IGVuY29kaW5nUGFyYW1ldGVycy5jb2RlYy5uYW1lKTtcbiAgICAgICAgc2RwID0gU2RwVXRpbHMucmVvcmRlckNvZGVjcyhzZHAsICd2aWRlbycsIHZpZGVvQ29kZWNOYW1lcywgbWlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIF9zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucywgbWlkKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1ZGlvID09PSAnb2JqZWN0Jykge1xuICAgICAgc2RwID0gU2RwVXRpbHMuc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMuYXVkaW8sIG1pZCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy52aWRlbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNkcCA9IFNkcFV0aWxzLnNldE1heEJpdHJhdGUoc2RwLCBvcHRpb25zLnZpZGVvLCBtaWQpO1xuICAgIH1cbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX3NldFJ0cFNlbmRlck9wdGlvbnMoc2RwLCBvcHRpb25zLCBtaWQpIHtcbiAgICAvLyBTRFAgbXVnbGluZyBpcyBkZXByZWNhdGVkLCBtb3ZpbmcgdG8gYHNldFBhcmFtZXRlcnNgLlxuICAgIGlmICh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLmF1ZGlvKSB8fFxuICAgICAgICB0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSkge1xuICAgICAgcmV0dXJuIHNkcDtcbiAgICB9XG4gICAgc2RwID0gdGhpcy5fc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMsIG1pZCk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIF9zZXRSdHBSZWNlaXZlck9wdGlvbnMoc2RwLCBvcHRpb25zLCBtaWQpIHtcbiAgICAvLyBBZGQgbGVnYWN5IHNpbXVsY2FzdCBpbiBTRFAgZm9yIHNhZmFyaS5cbiAgICBpZiAodGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykgJiYgVXRpbHMuaXNTYWZhcmkoKSkge1xuICAgICAgaWYgKG9wdGlvbnMudmlkZW8ubGVuZ3RoID4gMSkge1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5hZGRMZWdhY3lTaW11bGNhc3QoXG4gICAgICAgICAgICBzZHAsICd2aWRlbycsIG9wdGlvbnMudmlkZW8ubGVuZ3RoLCBtaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIF92aWRlb0NvZGVjcyBpcyBhIHdvcmthcm91bmQgZm9yIHNldHRpbmcgdmlkZW8gY29kZWNzLiBJdCB3aWxsIGJlIG1vdmVkIHRvIFJUQ1J0cFNlbmRQYXJhbWV0ZXJzLlxuICAgIGlmICh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSAmJiB0aGlzLl92aWRlb0NvZGVjcykge1xuICAgICAgc2RwID0gU2RwVXRpbHMucmVvcmRlckNvZGVjcyhzZHAsICd2aWRlbycsIHRoaXMuX3ZpZGVvQ29kZWNzLCBtaWQpO1xuICAgICAgcmV0dXJuIHNkcDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMuYXVkaW8pIHx8XG4gICAgICAgIHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pKSB7XG4gICAgICByZXR1cm4gc2RwO1xuICAgIH1cbiAgICBzZHAgPSB0aGlzLl9zZXRDb2RlY09yZGVyKHNkcCwgb3B0aW9ucywgbWlkKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgLy8gSGFuZGxlIHN0cmVhbSBldmVudCBzZW50IGZyb20gTUNVLiBTb21lIHN0cmVhbSBldmVudHMgc2hvdWxkIGJlIHB1YmxpY2F0aW9uXG4gIC8vIGV2ZW50IG9yIHN1YnNjcmlwdGlvbiBldmVudC4gSXQgd2lsbCBiZSBoYW5kbGVkIGhlcmUuXG4gIF9vblN0cmVhbUV2ZW50KG1lc3NhZ2UpIHtcbiAgICBjb25zdCBldmVudFRhcmdldHMgPSBbXTtcbiAgICBpZiAodGhpcy5fcHVibGljYXRpb25zLmhhcyhtZXNzYWdlLmlkKSkge1xuICAgICAgZXZlbnRUYXJnZXRzLnB1c2godGhpcy5fcHVibGljYXRpb25zLmdldChtZXNzYWdlLmlkKSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgW2ludGVybmFsSWQsIHN1YnNjcmliZWRTdHJlYW1dIG9mIHRoaXMuX3N1YnNjcmliZWRTdHJlYW1zKSB7XG4gICAgICBpZiAobWVzc2FnZS5pZCA9PT0gc3Vic2NyaWJlZFN0cmVhbS5pZCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25JZCA9IHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycy5nZXQoaW50ZXJuYWxJZCkuaWQ7XG4gICAgICAgIGV2ZW50VGFyZ2V0cy5wdXNoKHRoaXMuX3N1YnNjcmlwdGlvbnMuZ2V0KHN1YnNjcmlwdGlvbklkKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZXZlbnRUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdHJhY2tLaW5kO1xuICAgIGlmIChtZXNzYWdlLmRhdGEuZmllbGQgPT09ICdhdWRpby5zdGF0dXMnKSB7XG4gICAgICB0cmFja0tpbmQgPSBUcmFja0tpbmQuQVVESU87XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmRhdGEuZmllbGQgPT09ICd2aWRlby5zdGF0dXMnKSB7XG4gICAgICB0cmFja0tpbmQgPSBUcmFja0tpbmQuVklERU87XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdJbnZhbGlkIGRhdGEgZmllbGQgZm9yIHN0cmVhbSB1cGRhdGUgaW5mby4nKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZGF0YS52YWx1ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIGV2ZW50VGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+XG4gICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBNdXRlRXZlbnQoJ3VubXV0ZScsIHtraW5kOiB0cmFja0tpbmR9KSkpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5kYXRhLnZhbHVlID09PSAnaW5hY3RpdmUnKSB7XG4gICAgICBldmVudFRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PlxuICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgTXV0ZUV2ZW50KCdtdXRlJywge2tpbmQ6IHRyYWNrS2luZH0pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdJbnZhbGlkIGRhdGEgdmFsdWUgZm9yIHN0cmVhbSB1cGRhdGUgaW5mby4nKTtcbiAgICB9XG4gIH1cblxuICBfaXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob2JqKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gT25seSBjaGVjayB0aGUgZmlyc3Qgb25lLlxuICAgIGNvbnN0IHBhcmFtID0gb2JqWzBdO1xuICAgIHJldHVybiBwYXJhbS5jb2RlY1BheWxvYWRUeXBlIHx8IHBhcmFtLmR0eCB8fCBwYXJhbS5hY3RpdmUgfHxcbiAgICAgICAgcGFyYW0ucHRpbWUgfHwgcGFyYW0ubWF4RnJhbWVyYXRlIHx8IHBhcmFtLnNjYWxlUmVzb2x1dGlvbkRvd25CeSB8fFxuICAgICAgICBwYXJhbS5yaWQ7XG4gIH1cblxuICBfaXNPd3RFbmNvZGluZ1BhcmFtZXRlcnMob2JqKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gT25seSBjaGVjayB0aGUgZmlyc3Qgb25lLlxuICAgIGNvbnN0IHBhcmFtID0gb2JqWzBdO1xuICAgIHJldHVybiAhIXBhcmFtLmNvZGVjO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBNYXAsIFByb21pc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBFdmVudE1vZHVsZSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7U2lvU2lnbmFsaW5nIGFzIFNpZ25hbGluZ30gZnJvbSAnLi9zaWduYWxpbmcuanMnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnLi4vYmFzZS9iYXNlNjQuanMnO1xuaW1wb3J0IHtDb25mZXJlbmNlRXJyb3J9IGZyb20gJy4vZXJyb3IuanMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vYmFzZS91dGlscy5qcyc7XG5pbXBvcnQgKiBhcyBTdHJlYW1Nb2R1bGUgZnJvbSAnLi4vYmFzZS9zdHJlYW0uanMnO1xuaW1wb3J0IHtQYXJ0aWNpcGFudH0gZnJvbSAnLi9wYXJ0aWNpcGFudC5qcyc7XG5pbXBvcnQge0NvbmZlcmVuY2VJbmZvfSBmcm9tICcuL2luZm8uanMnO1xuaW1wb3J0IHtDb25mZXJlbmNlUGVlckNvbm5lY3Rpb25DaGFubmVsfSBmcm9tICcuL2NoYW5uZWwuanMnO1xuaW1wb3J0IHtRdWljQ29ubmVjdGlvbn0gZnJvbSAnLi9xdWljY29ubmVjdGlvbi5qcyc7XG5pbXBvcnQge1JlbW90ZU1peGVkU3RyZWFtLCBBY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnQsIExheW91dENoYW5nZUV2ZW50fVxuICBmcm9tICcuL21peGVkc3RyZWFtLmpzJztcbmltcG9ydCAqIGFzIFN0cmVhbVV0aWxzTW9kdWxlIGZyb20gJy4vc3RyZWFtdXRpbHMuanMnO1xuXG5jb25zdCBTaWduYWxpbmdTdGF0ZSA9IHtcbiAgUkVBRFk6IDEsXG4gIENPTk5FQ1RJTkc6IDIsXG4gIENPTk5FQ1RFRDogMyxcbn07XG5cbmNvbnN0IHByb3RvY29sVmVyc2lvbiA9ICcxLjInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSB2YWxpZC1qc2RvYyAqL1xuLyoqXG4gKiBAY2xhc3MgUGFydGljaXBhbnRFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBQYXJ0aWNpcGFudEV2ZW50IHJlcHJlc2VudHMgYSBwYXJ0aWNpcGFudCBldmVudC5cbiAgIEBleHRlbmRzIE93dC5CYXNlLk93dEV2ZW50XG4gKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUGFydGljaXBhbnRFdmVudCA9IGZ1bmN0aW9uKHR5cGUsIGluaXQpIHtcbiAgY29uc3QgdGhhdCA9IG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCh0eXBlLCBpbml0KTtcbiAgLyoqXG4gICAqIEBtZW1iZXIge093dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50fSBwYXJ0aWNpcGFudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50RXZlbnRcbiAgICovXG4gIHRoYXQucGFydGljaXBhbnQgPSBpbml0LnBhcnRpY2lwYW50O1xuICByZXR1cm4gdGhhdDtcbn07XG4vKiBlc2xpbnQtZW5hYmxlIHZhbGlkLWpzZG9jICovXG5cbi8qKlxuICogQGNsYXNzIENvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uXG4gKiBAY2xhc3NEZXNjIENvbmZpZ3VyYXRpb24gZm9yIENvbmZlcmVuY2VDbGllbnQuXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuY2xhc3MgQ29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb24geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9SVENDb25maWd1cmF0aW9ufSBydGNDb25maWd1cmF0aW9uXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uXG4gICAgICogQGRlc2MgSXQgd2lsbCBiZSB1c2VkIGZvciBjcmVhdGluZyBQZWVyQ29ubmVjdGlvbi5cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvd2VicnRjLyNydGNjb25maWd1cmF0aW9uLWRpY3Rpb25hcnl8UlRDQ29uZmlndXJhdGlvbiBEaWN0aW9uYXJ5IG9mIFdlYlJUQyAxLjB9LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogLy8gRm9sbG93aW5nIG9iamVjdCBjYW4gYmUgc2V0IHRvIGNvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uLnJ0Y0NvbmZpZ3VyYXRpb24uXG4gICAgICoge1xuICAgICAqICAgaWNlU2VydmVyczogW3tcbiAgICAgKiAgICAgIHVybHM6IFwic3R1bjpleGFtcGxlLmNvbTozNDc4XCJcbiAgICAgKiAgIH0sIHtcbiAgICAgKiAgICAgdXJsczogW1xuICAgICAqICAgICAgIFwidHVybjpleGFtcGxlLmNvbTozNDc4P3RyYW5zcG9ydD11ZHBcIixcbiAgICAgKiAgICAgICBcInR1cm46ZXhhbXBsZS5jb206MzQ3OD90cmFuc3BvcnQ9dGNwXCJcbiAgICAgKiAgICAgXSxcbiAgICAgKiAgICAgIGNyZWRlbnRpYWw6IFwicGFzc3dvcmRcIixcbiAgICAgKiAgICAgIHVzZXJuYW1lOiBcInVzZXJuYW1lXCJcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICovXG4gICAgdGhpcy5ydGNDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P1dlYlRyYW5zcG9ydE9wdGlvbnN9IHdlYlRyYW5zcG9ydENvbmZpZ3VyYXRpb25cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb25cbiAgICAgKiBAZGVzYyBJdCB3aWxsIGJlIHVzZWQgZm9yIGNyZWF0aW5nIFdlYlRyYW5zcG9ydC5cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vd2VidHJhbnNwb3J0LyNkaWN0ZGVmLXdlYnRyYW5zcG9ydG9wdGlvbnN8V2ViVHJhbnNwb3J0T3B0aW9ucyBvZiBXZWJUcmFuc3BvcnR9LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogLy8gRm9sbG93aW5nIG9iamVjdCBjYW4gYmUgc2V0IHRvIGNvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uLndlYlRyYW5zcG9ydENvbmZpZ3VyYXRpb24uXG4gICAgICoge1xuICAgICAqICAgc2VydmVyQ2VydGlmaWNhdGVGaW5nZXJwcmludHM6IFt7XG4gICAgICogICAgIHZhbHVlOlxuICAgICAqICAgICAgICAgJzAwOjExOjIyOjMzOjQ0OjU1OjY2Ojc3Ojg4Ojk5OkFBOkJCOkNDOkREOkVFOkZGOjAwOjExOjIyOjMzOjQ0OjU1OjY2Ojc3Ojg4Ojk5OkFBOkJCOkNDOkREOkVFOkZGJyxcbiAgICAgKiAgICAgYWxnb3JpdGhtOiAnc2hhLTI1NicsXG4gICAgICogICB9XSxcbiAgICAgKiB9XG4gICAgICovXG4gICAgdGhpcy53ZWJUcmFuc3BvcnRDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIENvbmZlcmVuY2VDbGllbnRcbiAqIEBjbGFzc2Rlc2MgVGhlIENvbmZlcmVuY2VDbGllbnQgaGFuZGxlcyBQZWVyQ29ubmVjdGlvbnMgYmV0d2VlbiBjbGllbnQgYW5kIHNlcnZlci4gRm9yIGNvbmZlcmVuY2UgY29udHJvbGxpbmcsIHBsZWFzZSByZWZlciB0byBSRVNUIEFQSSBndWlkZS5cbiAqIEV2ZW50czpcbiAqXG4gKiB8IEV2ZW50IE5hbWUgICAgICAgICAgICB8IEFyZ3VtZW50IFR5cGUgICAgICAgICAgICAgICAgICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IHN0cmVhbWFkZGVkICAgICAgICAgICB8IE93dC5CYXNlLlN0cmVhbUV2ZW50ICAgICAgICAgICAgIHwgQSBuZXcgc3RyZWFtIGlzIGF2YWlsYWJsZSBpbiB0aGUgY29uZmVyZW5jZS4gfFxuICogfCBwYXJ0aWNpcGFudGpvaW5lZCAgICAgfCBPd3QuQ29uZmVyZW5jZS5QYXJ0aWNpcGFudEV2ZW50ICB8IEEgbmV3IHBhcnRpY2lwYW50IGpvaW5lZCB0aGUgY29uZmVyZW5jZS4gfFxuICogfCBtZXNzYWdlcmVjZWl2ZWQgICAgICAgfCBPd3QuQmFzZS5NZXNzYWdlRXZlbnQgICAgICAgICAgICB8IEEgbmV3IG1lc3NhZ2UgaXMgcmVjZWl2ZWQuIHxcbiAqIHwgc2VydmVyZGlzY29ubmVjdGVkICAgIHwgT3d0LkJhc2UuT3d0RXZlbnQgICAgICAgICAgICAgICAgfCBEaXNjb25uZWN0ZWQgZnJvbSBjb25mZXJlbmNlIHNlcnZlci4gfFxuICpcbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7P093dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRDb25maWd1cmF0aW9uIH0gY29uZmlnIENvbmZpZ3VyYXRpb24gZm9yIENvbmZlcmVuY2VDbGllbnQuXG4gKiBAcGFyYW0gez9Pd3QuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmcgfSBzaWduYWxpbmdJbXBsIFNpZ25hbGluZyBjaGFubmVsIGltcGxlbWVudGF0aW9uIGZvciBDb25mZXJlbmNlQ2xpZW50LiBTREsgdXNlcyBkZWZhdWx0IHNpZ25hbGluZyBjaGFubmVsIGltcGxlbWVudGF0aW9uIGlmIHRoaXMgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZC4gQ3VycmVudGx5LCBhIFNvY2tldC5JTyBzaWduYWxpbmcgY2hhbm5lbCBpbXBsZW1lbnRhdGlvbiB3YXMgcHJvdmlkZWQgYXMgaWNzLmNvbmZlcmVuY2UuU2lvU2lnbmFsaW5nLiBIb3dldmVyLCBpdCBpcyBub3QgcmVjb21tZW5kZWQgdG8gZGlyZWN0bHkgYWNjZXNzIHNpZ25hbGluZyBjaGFubmVsIG9yIGN1c3RvbWl6ZSBzaWduYWxpbmcgY2hhbm5lbCBmb3IgQ29uZmVyZW5jZUNsaWVudCBhcyB0aGlzIHRpbWUuXG4gKi9cbmV4cG9ydCBjb25zdCBDb25mZXJlbmNlQ2xpZW50ID0gZnVuY3Rpb24oY29uZmlnLCBzaWduYWxpbmdJbXBsKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcgRXZlbnRNb2R1bGUuRXZlbnREaXNwYXRjaGVyKCkpO1xuICBjb25maWcgPSBjb25maWcgfHwge307XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuICBsZXQgc2lnbmFsaW5nU3RhdGUgPSBTaWduYWxpbmdTdGF0ZS5SRUFEWTtcbiAgY29uc3Qgc2lnbmFsaW5nID0gc2lnbmFsaW5nSW1wbCA/IHNpZ25hbGluZ0ltcGwgOiAobmV3IFNpZ25hbGluZygpKTtcbiAgbGV0IG1lO1xuICBsZXQgcm9vbTtcbiAgY29uc3QgcmVtb3RlU3RyZWFtcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHN0cmVhbSBJRCwgdmFsdWUgaXMgYSBSZW1vdGVTdHJlYW0uXG4gIGNvbnN0IHBhcnRpY2lwYW50cyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHBhcnRpY2lwYW50IElELCB2YWx1ZSBpcyBhIFBhcnRpY2lwYW50IG9iamVjdC5cbiAgY29uc3QgcHVibGlzaENoYW5uZWxzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgTWVkaWFTdHJlYW0ncyBJRCwgdmFsdWUgaXMgcGMgY2hhbm5lbC5cbiAgY29uc3QgY2hhbm5lbHMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBjaGFubmVsJ3MgaW50ZXJuYWwgSUQsIHZhbHVlIGlzIGNoYW5uZWwuXG4gIGxldCBtYWluQ2hhbm5lbCA9IG51bGw7IC8vIE1haW4gcGMgY2hhbm5lbCBmb3IgdGhlIGNsaWVudCBhcyBzaW5nbGUgcGMgaXMgZGVmYXVsdC5cbiAgbGV0IHF1aWNUcmFuc3BvcnRDaGFubmVsO1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gb25TaWduYWxpbmdNZXNzYWdlXG4gICAqIEBkZXNjIFJlY2VpdmVkIGEgbWVzc2FnZSBmcm9tIGNvbmZlcmVuY2UgcG9ydGFsLiBEZWZpbmVkIGluIGNsaWVudC1zZXJ2ZXIgcHJvdG9jb2wuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBub3RpZmljYXRpb24gTm90aWZpY2F0aW9uIHR5cGUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIERhdGEgcmVjZWl2ZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBvblNpZ25hbGluZ01lc3NhZ2Uobm90aWZpY2F0aW9uLCBkYXRhKSB7XG4gICAgaWYgKG5vdGlmaWNhdGlvbiA9PT0gJ3NvYWMnIHx8IG5vdGlmaWNhdGlvbiA9PT0gJ3Byb2dyZXNzJykge1xuICAgICAgaWYgKGNoYW5uZWxzLmhhcyhkYXRhLmlkKSkge1xuICAgICAgICBjaGFubmVscy5nZXQoZGF0YS5pZCkub25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgZGF0YSk7XG4gICAgICB9IGVsc2UgaWYgKHF1aWNUcmFuc3BvcnRDaGFubmVsICYmIHF1aWNUcmFuc3BvcnRDaGFubmVsXG4gICAgICAgICAgLmhhc0NvbnRlbnRTZXNzaW9uSWQoZGF0YS5pZCkpIHtcbiAgICAgICAgcXVpY1RyYW5zcG9ydENoYW5uZWwub25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgYSBjaGFubmVsIGZvciBpbmNvbWluZyBkYXRhLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobm90aWZpY2F0aW9uID09PSAnc3RyZWFtJykge1xuICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnYWRkJykge1xuICAgICAgICBmaXJlU3RyZWFtQWRkZWQoZGF0YS5kYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdGF0dXMgPT09ICdyZW1vdmUnKSB7XG4gICAgICAgIGZpcmVTdHJlYW1SZW1vdmVkKGRhdGEpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgLy8gQnJvYWRjYXN0IGF1ZGlvL3ZpZGVvIHVwZGF0ZSBzdGF0dXMgdG8gY2hhbm5lbCBzbyBzcGVjaWZpYyBldmVudHMgY2FuIGJlIGZpcmVkIG9uIHB1YmxpY2F0aW9uIG9yIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgaWYgKGRhdGEuZGF0YS5maWVsZCA9PT0gJ2F1ZGlvLnN0YXR1cycgfHwgZGF0YS5kYXRhLmZpZWxkID09PVxuICAgICAgICAgICd2aWRlby5zdGF0dXMnKSB7XG4gICAgICAgICAgY2hhbm5lbHMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgYy5vbk1lc3NhZ2Uobm90aWZpY2F0aW9uLCBkYXRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmRhdGEuZmllbGQgPT09ICdhY3RpdmVJbnB1dCcpIHtcbiAgICAgICAgICBmaXJlQWN0aXZlQXVkaW9JbnB1dENoYW5nZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmRhdGEuZmllbGQgPT09ICd2aWRlby5sYXlvdXQnKSB7XG4gICAgICAgICAgZmlyZUxheW91dENoYW5nZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmRhdGEuZmllbGQgPT09ICcuJykge1xuICAgICAgICAgIHVwZGF0ZVJlbW90ZVN0cmVhbShkYXRhLmRhdGEudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdVbmtub3duIHN0cmVhbSBldmVudCBmcm9tIE1DVS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm90aWZpY2F0aW9uID09PSAndGV4dCcpIHtcbiAgICAgIGZpcmVNZXNzYWdlUmVjZWl2ZWQoZGF0YSk7XG4gICAgfSBlbHNlIGlmIChub3RpZmljYXRpb24gPT09ICdwYXJ0aWNpcGFudCcpIHtcbiAgICAgIGZpcmVQYXJ0aWNpcGFudEV2ZW50KGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHNpZ25hbGluZy5hZGRFdmVudExpc3RlbmVyKCdkYXRhJywgKGV2ZW50KSA9PiB7XG4gICAgb25TaWduYWxpbmdNZXNzYWdlKGV2ZW50Lm1lc3NhZ2Uubm90aWZpY2F0aW9uLCBldmVudC5tZXNzYWdlLmRhdGEpO1xuICB9KTtcblxuICBzaWduYWxpbmcuYWRkRXZlbnRMaXN0ZW5lcignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICBjbGVhbigpO1xuICAgIHNpZ25hbGluZ1N0YXRlID0gU2lnbmFsaW5nU3RhdGUuUkVBRFk7XG4gICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnc2VydmVyZGlzY29ubmVjdGVkJykpO1xuICB9KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBmaXJlUGFydGljaXBhbnRFdmVudChkYXRhKSB7XG4gICAgaWYgKGRhdGEuYWN0aW9uID09PSAnam9pbicpIHtcbiAgICAgIGRhdGEgPSBkYXRhLmRhdGE7XG4gICAgICBjb25zdCBwYXJ0aWNpcGFudCA9IG5ldyBQYXJ0aWNpcGFudChkYXRhLmlkLCBkYXRhLnJvbGUsIGRhdGEudXNlcik7XG4gICAgICBwYXJ0aWNpcGFudHMuc2V0KGRhdGEuaWQsIHBhcnRpY2lwYW50KTtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IFBhcnRpY2lwYW50RXZlbnQoXG4gICAgICAgICAgJ3BhcnRpY2lwYW50am9pbmVkJywge3BhcnRpY2lwYW50OiBwYXJ0aWNpcGFudH0pO1xuICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKGRhdGEuYWN0aW9uID09PSAnbGVhdmUnKSB7XG4gICAgICBjb25zdCBwYXJ0aWNpcGFudElkID0gZGF0YS5kYXRhO1xuICAgICAgaWYgKCFwYXJ0aWNpcGFudHMuaGFzKHBhcnRpY2lwYW50SWQpKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICAgJ1JlY2VpdmVkIGxlYXZlIG1lc3NhZ2UgZnJvbSBNQ1UgZm9yIGFuIHVua25vd24gcGFydGljaXBhbnQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50ID0gcGFydGljaXBhbnRzLmdldChwYXJ0aWNpcGFudElkKTtcbiAgICAgIHBhcnRpY2lwYW50cy5kZWxldGUocGFydGljaXBhbnRJZCk7XG4gICAgICBwYXJ0aWNpcGFudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnbGVmdCcpKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBmaXJlTWVzc2FnZVJlY2VpdmVkKGRhdGEpIHtcbiAgICBjb25zdCBtZXNzYWdlRXZlbnQgPSBuZXcgRXZlbnRNb2R1bGUuTWVzc2FnZUV2ZW50KCdtZXNzYWdlcmVjZWl2ZWQnLCB7XG4gICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXG4gICAgICBvcmlnaW46IGRhdGEuZnJvbSxcbiAgICAgIHRvOiBkYXRhLnRvLFxuICAgIH0pO1xuICAgIHNlbGYuZGlzcGF0Y2hFdmVudChtZXNzYWdlRXZlbnQpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gZmlyZVN0cmVhbUFkZGVkKGluZm8pIHtcbiAgICBjb25zdCBzdHJlYW0gPSBjcmVhdGVSZW1vdGVTdHJlYW0oaW5mbyk7XG4gICAgcmVtb3RlU3RyZWFtcy5zZXQoc3RyZWFtLmlkLCBzdHJlYW0pO1xuICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IFN0cmVhbU1vZHVsZS5TdHJlYW1FdmVudCgnc3RyZWFtYWRkZWQnLCB7XG4gICAgICBzdHJlYW06IHN0cmVhbSxcbiAgICB9KTtcbiAgICBzZWxmLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gZmlyZVN0cmVhbVJlbW92ZWQoaW5mbykge1xuICAgIGlmICghcmVtb3RlU3RyZWFtcy5oYXMoaW5mby5pZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzcGVjaWZpYyByZW1vdGUgc3RyZWFtLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHJlYW0gPSByZW1vdGVTdHJlYW1zLmdldChpbmZvLmlkKTtcbiAgICBjb25zdCBzdHJlYW1FdmVudCA9IG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnZW5kZWQnKTtcbiAgICByZW1vdGVTdHJlYW1zLmRlbGV0ZShzdHJlYW0uaWQpO1xuICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KHN0cmVhbUV2ZW50KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGZpcmVBY3RpdmVBdWRpb0lucHV0Q2hhbmdlKGluZm8pIHtcbiAgICBpZiAoIXJlbW90ZVN0cmVhbXMuaGFzKGluZm8uaWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgc3BlY2lmaWMgcmVtb3RlIHN0cmVhbS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyZWFtID0gcmVtb3RlU3RyZWFtcy5nZXQoaW5mby5pZCk7XG4gICAgY29uc3Qgc3RyZWFtRXZlbnQgPSBuZXcgQWN0aXZlQXVkaW9JbnB1dENoYW5nZUV2ZW50KFxuICAgICAgICAnYWN0aXZlYXVkaW9pbnB1dGNoYW5nZScsIHtcbiAgICAgICAgICBhY3RpdmVBdWRpb0lucHV0U3RyZWFtSWQ6IGluZm8uZGF0YS52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgc3RyZWFtLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gZmlyZUxheW91dENoYW5nZShpbmZvKSB7XG4gICAgaWYgKCFyZW1vdGVTdHJlYW1zLmhhcyhpbmZvLmlkKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Nhbm5vdCBmaW5kIHNwZWNpZmljIHJlbW90ZSBzdHJlYW0uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0cmVhbSA9IHJlbW90ZVN0cmVhbXMuZ2V0KGluZm8uaWQpO1xuICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IExheW91dENoYW5nZUV2ZW50KFxuICAgICAgICAnbGF5b3V0Y2hhbmdlJywge1xuICAgICAgICAgIGxheW91dDogaW5mby5kYXRhLnZhbHVlLFxuICAgICAgICB9KTtcbiAgICBzdHJlYW0uZGlzcGF0Y2hFdmVudChzdHJlYW1FdmVudCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiB1cGRhdGVSZW1vdGVTdHJlYW0oc3RyZWFtSW5mbykge1xuICAgIGlmICghcmVtb3RlU3RyZWFtcy5oYXMoc3RyZWFtSW5mby5pZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzcGVjaWZpYyByZW1vdGUgc3RyZWFtLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHJlYW0gPSByZW1vdGVTdHJlYW1zLmdldChzdHJlYW1JbmZvLmlkKTtcbiAgICBzdHJlYW0uc2V0dGluZ3MgPSBTdHJlYW1VdGlsc01vZHVsZS5jb252ZXJ0VG9QdWJsaWNhdGlvblNldHRpbmdzKHN0cmVhbUluZm9cbiAgICAgICAgLm1lZGlhKTtcbiAgICBzdHJlYW0uZXh0cmFDYXBhYmlsaXRpZXMgPSBTdHJlYW1VdGlsc01vZHVsZVxuICAgICAgICAuY29udmVydFRvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzKFxuICAgICAgICAgICAgc3RyZWFtSW5mby5tZWRpYSk7XG4gICAgY29uc3Qgc3RyZWFtRXZlbnQgPSBuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ3VwZGF0ZWQnKTtcbiAgICBzdHJlYW0uZGlzcGF0Y2hFdmVudChzdHJlYW1FdmVudCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBjcmVhdGVSZW1vdGVTdHJlYW0oc3RyZWFtSW5mbykge1xuICAgIGlmIChzdHJlYW1JbmZvLnR5cGUgPT09ICdtaXhlZCcpIHtcbiAgICAgIHJldHVybiBuZXcgUmVtb3RlTWl4ZWRTdHJlYW0oc3RyZWFtSW5mbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBhdWRpb1NvdXJjZUluZm87IGxldCB2aWRlb1NvdXJjZUluZm87XG4gICAgICBjb25zdCBhdWRpb1RyYWNrID0gc3RyZWFtSW5mby5tZWRpYS50cmFja3NcbiAgICAgICAgICAuZmluZCgodCkgPT4gdC50eXBlID09PSAnYXVkaW8nKTtcbiAgICAgIGNvbnN0IHZpZGVvVHJhY2sgPSBzdHJlYW1JbmZvLm1lZGlhLnRyYWNrc1xuICAgICAgICAgIC5maW5kKCh0KSA9PiB0LnR5cGUgPT09ICd2aWRlbycpO1xuICAgICAgaWYgKGF1ZGlvVHJhY2spIHtcbiAgICAgICAgYXVkaW9Tb3VyY2VJbmZvID0gYXVkaW9UcmFjay5zb3VyY2U7XG4gICAgICB9XG4gICAgICBpZiAodmlkZW9UcmFjaykge1xuICAgICAgICB2aWRlb1NvdXJjZUluZm8gPSB2aWRlb1RyYWNrLnNvdXJjZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VJbmZvID0gc3RyZWFtSW5mby5kYXRhO1xuICAgICAgY29uc3Qgc3RyZWFtID0gbmV3IFN0cmVhbU1vZHVsZS5SZW1vdGVTdHJlYW0oc3RyZWFtSW5mby5pZCxcbiAgICAgICAgICBzdHJlYW1JbmZvLmluZm8ub3duZXIsIHVuZGVmaW5lZCwgbmV3IFN0cmVhbU1vZHVsZS5TdHJlYW1Tb3VyY2VJbmZvKFxuICAgICAgICAgICAgICBhdWRpb1NvdXJjZUluZm8sIHZpZGVvU291cmNlSW5mbywgZGF0YVNvdXJjZUluZm8pLCBzdHJlYW1JbmZvLmluZm9cbiAgICAgICAgICAgICAgLmF0dHJpYnV0ZXMpO1xuICAgICAgc3RyZWFtLnNldHRpbmdzID0gU3RyZWFtVXRpbHNNb2R1bGUuY29udmVydFRvUHVibGljYXRpb25TZXR0aW5ncyhcbiAgICAgICAgICBzdHJlYW1JbmZvLm1lZGlhKTtcbiAgICAgIHN0cmVhbS5leHRyYUNhcGFiaWxpdGllcyA9IFN0cmVhbVV0aWxzTW9kdWxlXG4gICAgICAgICAgLmNvbnZlcnRUb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyhcbiAgICAgICAgICAgICAgc3RyZWFtSW5mby5tZWRpYSk7XG4gICAgICByZXR1cm4gc3RyZWFtO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIHNlbmRTaWduYWxpbmdNZXNzYWdlKHR5cGUsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gc2lnbmFsaW5nLnNlbmQodHlwZSwgbWVzc2FnZSk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBjcmVhdGVTaWduYWxpbmdGb3JDaGFubmVsKCkge1xuICAgIC8vIENvbnN0cnVjdCBhbiBzaWduYWxpbmcgc2VuZGVyL3JlY2VpdmVyIGZvciBDb25mZXJlbmNlUGVlckNvbm5lY3Rpb24uXG4gICAgY29uc3Qgc2lnbmFsaW5nRm9yQ2hhbm5lbCA9IE9iamVjdC5jcmVhdGUoRXZlbnRNb2R1bGUuRXZlbnREaXNwYXRjaGVyKTtcbiAgICBzaWduYWxpbmdGb3JDaGFubmVsLnNlbmRTaWduYWxpbmdNZXNzYWdlID0gc2VuZFNpZ25hbGluZ01lc3NhZ2U7XG4gICAgcmV0dXJuIHNpZ25hbGluZ0ZvckNoYW5uZWw7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBjcmVhdGVQZWVyQ29ubmVjdGlvbkNoYW5uZWwodHJhbnNwb3J0KSB7XG4gICAgY29uc3Qgc2lnbmFsaW5nRm9yQ2hhbm5lbCA9IGNyZWF0ZVNpZ25hbGluZ0ZvckNoYW5uZWwoKTtcbiAgICBjb25zdCBjaGFubmVsID1cbiAgICAgICAgbmV3IENvbmZlcmVuY2VQZWVyQ29ubmVjdGlvbkNoYW5uZWwoY29uZmlnLCBzaWduYWxpbmdGb3JDaGFubmVsKTtcbiAgICBjaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lkJywgKG1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFjaGFubmVscy5oYXMobWVzc2FnZUV2ZW50Lm1lc3NhZ2UpKSB7XG4gICAgICAgIGNoYW5uZWxzLnNldChtZXNzYWdlRXZlbnQubWVzc2FnZSwgY2hhbm5lbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2dnZXIud2FybmluZygnQ2hhbm5lbCBhbHJlYWR5IGV4aXN0cycsIG1lc3NhZ2VFdmVudC5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2hhbm5lbDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGNsZWFuKCkge1xuICAgIHBhcnRpY2lwYW50cy5jbGVhcigpO1xuICAgIHJlbW90ZVN0cmVhbXMuY2xlYXIoKTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaW5mbycsIHtcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIGdldDogKCkgPT4ge1xuICAgICAgaWYgKCFyb29tKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBDb25mZXJlbmNlSW5mbyhyb29tLmlkLCBBcnJheS5mcm9tKHBhcnRpY2lwYW50cywgKHgpID0+IHhbXG4gICAgICAgICAgMV0pLCBBcnJheS5mcm9tKHJlbW90ZVN0cmVhbXMsICh4KSA9PiB4WzFdKSwgbWUpO1xuICAgIH0sXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gam9pblxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgSm9pbiBhIGNvbmZlcmVuY2UuXG4gICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q29uZmVyZW5jZUluZm8sIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIGN1cnJlbnQgY29uZmVyZW5jZSdzIGluZm9ybWF0aW9uIGlmIHN1Y2Nlc3NmdWxseSBqb2luIHRoZSBjb25mZXJlbmNlLiBPciByZXR1cm4gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggYSBuZXdseSBjcmVhdGVkIE93dC5FcnJvciBpZiBmYWlsZWQgdG8gam9pbiB0aGUgY29uZmVyZW5jZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuU3RyaW5nIFRva2VuIGlzIGlzc3VlZCBieSBjb25mZXJlbmNlIHNlcnZlcihudXZlKS5cbiAgICovXG4gIHRoaXMuam9pbiA9IGZ1bmN0aW9uKHRva2VuU3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gSlNPTi5wYXJzZShCYXNlNjQuZGVjb2RlQmFzZTY0KHRva2VuU3RyaW5nKSk7XG4gICAgICBjb25zdCBpc1NlY3VyZWQgPSAodG9rZW4uc2VjdXJlID09PSB0cnVlKTtcbiAgICAgIGxldCBob3N0ID0gdG9rZW4uaG9zdDtcbiAgICAgIGlmICh0eXBlb2YgaG9zdCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoJ0ludmFsaWQgaG9zdC4nKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChob3N0LmluZGV4T2YoJ2h0dHAnKSA9PT0gLTEpIHtcbiAgICAgICAgaG9zdCA9IGlzU2VjdXJlZCA/ICgnaHR0cHM6Ly8nICsgaG9zdCkgOiAoJ2h0dHA6Ly8nICsgaG9zdCk7XG4gICAgICB9XG4gICAgICBpZiAoc2lnbmFsaW5nU3RhdGUgIT09IFNpZ25hbGluZ1N0YXRlLlJFQURZKSB7XG4gICAgICAgIHJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKCdjb25uZWN0aW9uIHN0YXRlIGludmFsaWQnKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2lnbmFsaW5nU3RhdGUgPSBTaWduYWxpbmdTdGF0ZS5DT05ORUNUSU5HO1xuXG4gICAgICBjb25zdCBsb2dpbkluZm8gPSB7XG4gICAgICAgIHRva2VuOiB0b2tlblN0cmluZyxcbiAgICAgICAgdXNlckFnZW50OiBVdGlscy5zeXNJbmZvKCksXG4gICAgICAgIHByb3RvY29sOiBwcm90b2NvbFZlcnNpb24sXG4gICAgICB9O1xuXG4gICAgICBzaWduYWxpbmcuY29ubmVjdChob3N0LCBpc1NlY3VyZWQsIGxvZ2luSW5mbykudGhlbigocmVzcCkgPT4ge1xuICAgICAgICBzaWduYWxpbmdTdGF0ZSA9IFNpZ25hbGluZ1N0YXRlLkNPTk5FQ1RFRDtcbiAgICAgICAgcm9vbSA9IHJlc3Aucm9vbTtcbiAgICAgICAgaWYgKHJvb20uc3RyZWFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBzdCBvZiByb29tLnN0cmVhbXMpIHtcbiAgICAgICAgICAgIGlmIChzdC50eXBlID09PSAnbWl4ZWQnKSB7XG4gICAgICAgICAgICAgIHN0LnZpZXdwb3J0ID0gc3QuaW5mby5sYWJlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbW90ZVN0cmVhbXMuc2V0KHN0LmlkLCBjcmVhdGVSZW1vdGVTdHJlYW0oc3QpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3Aucm9vbSAmJiByZXNwLnJvb20ucGFydGljaXBhbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcmVzcC5yb29tLnBhcnRpY2lwYW50cykge1xuICAgICAgICAgICAgcGFydGljaXBhbnRzLnNldChwLmlkLCBuZXcgUGFydGljaXBhbnQocC5pZCwgcC5yb2xlLCBwLnVzZXIpKTtcbiAgICAgICAgICAgIGlmIChwLmlkID09PSByZXNwLmlkKSB7XG4gICAgICAgICAgICAgIG1lID0gcGFydGljaXBhbnRzLmdldChwLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBRdWljVHJhbnNwb3J0ID09PSAnZnVuY3Rpb24nICYmIHRva2VuLndlYlRyYW5zcG9ydFVybCkge1xuICAgICAgICAgIHF1aWNUcmFuc3BvcnRDaGFubmVsID0gbmV3IFF1aWNDb25uZWN0aW9uKFxuICAgICAgICAgICAgICB0b2tlbi53ZWJUcmFuc3BvcnRVcmwsIHJlc3Aud2ViVHJhbnNwb3J0VG9rZW4sXG4gICAgICAgICAgICAgIGNyZWF0ZVNpZ25hbGluZ0ZvckNoYW5uZWwoKSwgY29uZmlnLndlYlRyYW5zcG9ydENvbmZpZ3VyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUobmV3IENvbmZlcmVuY2VJbmZvKHJlc3Aucm9vbS5pZCwgQXJyYXkuZnJvbShwYXJ0aWNpcGFudHNcbiAgICAgICAgICAgIC52YWx1ZXMoKSksIEFycmF5LmZyb20ocmVtb3RlU3RyZWFtcy52YWx1ZXMoKSksIG1lKSk7XG4gICAgICB9LCAoZSkgPT4ge1xuICAgICAgICBzaWduYWxpbmdTdGF0ZSA9IFNpZ25hbGluZ1N0YXRlLlJFQURZO1xuICAgICAgICByZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHB1Ymxpc2hcbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFB1Ymxpc2ggYSBMb2NhbFN0cmVhbSB0byBjb25mZXJlbmNlIHNlcnZlci4gT3RoZXIgcGFydGljaXBhbnRzIHdpbGwgYmUgYWJsZSB0byBzdWJzY3JpYmUgdGhpcyBzdHJlYW0gd2hlbiBpdCBpcyBzdWNjZXNzZnVsbHkgcHVibGlzaGVkLlxuICAgKiBAcGFyYW0ge093dC5CYXNlLkxvY2FsU3RyZWFtfSBzdHJlYW0gVGhlIHN0cmVhbSB0byBiZSBwdWJsaXNoZWQuXG4gICAqIEBwYXJhbSB7T3d0LkJhc2UuUHVibGlzaE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcHVibGljYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHZpZGVvQ29kZWNzIFZpZGVvIGNvZGVjIG5hbWVzIGZvciBwdWJsaXNoaW5nLiBWYWxpZCB2YWx1ZXMgYXJlICdWUDgnLCAnVlA5JyBhbmQgJ0gyNjQnLiBUaGlzIHBhcmFtZXRlciBvbmx5IHZhbGlkIHdoZW4gb3B0aW9ucy52aWRlbyBpcyBSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnMuIFB1Ymxpc2hpbmcgd2l0aCBSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnMgaXMgYW4gZXhwZXJpbWVudGFsIGZlYXR1cmUuIFRoaXMgcGFyYW1ldGVyIGlzIHN1YmplY3QgdG8gY2hhbmdlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFB1YmxpY2F0aW9uLCBFcnJvcj59IFJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBQdWJsaWNhdGlvbiBvbmNlIHNwZWNpZmljIHN0cmVhbSBpcyBzdWNjZXNzZnVsbHkgcHVibGlzaGVkLCBvciByZWplY3RlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBFcnJvciBpZiBzdHJlYW0gaXMgaW52YWxpZCBvciBvcHRpb25zIGNhbm5vdCBiZSBzYXRpc2ZpZWQuIFN1Y2Nlc3NmdWxseSBwdWJsaXNoZWQgbWVhbnMgUGVlckNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQgYW5kIHNlcnZlciBpcyBhYmxlIHRvIHByb2Nlc3MgbWVkaWEgZGF0YS5cbiAgICovXG4gIHRoaXMucHVibGlzaCA9IGZ1bmN0aW9uKHN0cmVhbSwgb3B0aW9ucywgdmlkZW9Db2RlY3MpIHtcbiAgICBpZiAoIShzdHJlYW0gaW5zdGFuY2VvZiBTdHJlYW1Nb2R1bGUuTG9jYWxTdHJlYW0pKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcignSW52YWxpZCBzdHJlYW0uJykpO1xuICAgIH1cbiAgICBpZiAoc3RyZWFtLnNvdXJjZS5kYXRhKSB7XG4gICAgICByZXR1cm4gcXVpY1RyYW5zcG9ydENoYW5uZWwucHVibGlzaChzdHJlYW0pO1xuICAgIH1cbiAgICBpZiAocHVibGlzaENoYW5uZWxzLmhhcyhzdHJlYW0ubWVkaWFTdHJlYW0uaWQpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnQ2Fubm90IHB1Ymxpc2ggYSBwdWJsaXNoZWQgc3RyZWFtLicpKTtcbiAgICB9XG4gICAgaWYgKCFtYWluQ2hhbm5lbCkge1xuICAgICAgbWFpbkNoYW5uZWwgPSBjcmVhdGVQZWVyQ29ubmVjdGlvbkNoYW5uZWwoKTtcbiAgICAgIG1haW5DaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICBtYWluQ2hhbm5lbCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1haW5DaGFubmVsLnB1Ymxpc2goc3RyZWFtLCBvcHRpb25zLCB2aWRlb0NvZGVjcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzdWJzY3JpYmVcbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFN1YnNjcmliZSBhIFJlbW90ZVN0cmVhbSBmcm9tIGNvbmZlcmVuY2Ugc2VydmVyLlxuICAgKiBAcGFyYW0ge093dC5CYXNlLlJlbW90ZVN0cmVhbX0gc3RyZWFtIFRoZSBzdHJlYW0gdG8gYmUgc3Vic2NyaWJlZC5cbiAgICogQHBhcmFtIHtPd3QuQ29uZmVyZW5jZS5TdWJzY3JpYmVPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHN1YnNjcmlwdGlvbi5cbiAgICogQHJldHVybiB7UHJvbWlzZTxTdWJzY3JpcHRpb24sIEVycm9yPn0gUmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGggYSBuZXdseSBjcmVhdGVkIFN1YnNjcmlwdGlvbiBvbmNlIHNwZWNpZmljIHN0cmVhbSBpcyBzdWNjZXNzZnVsbHkgc3Vic2NyaWJlZCwgb3IgcmVqZWN0ZWQgd2l0aCBhIG5ld2x5IGNyZWF0ZWQgRXJyb3IgaWYgc3RyZWFtIGlzIGludmFsaWQgb3Igb3B0aW9ucyBjYW5ub3QgYmUgc2F0aXNmaWVkLiBTdWNjZXNzZnVsbHkgc3Vic2NyaWJlZCBtZWFucyBQZWVyQ29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZCBhbmQgc2VydmVyIHdhcyBzdGFydGVkIHRvIHNlbmQgbWVkaWEgZGF0YS5cbiAgICovXG4gIHRoaXMuc3Vic2NyaWJlID0gZnVuY3Rpb24oc3RyZWFtLCBvcHRpb25zKSB7XG4gICAgaWYgKCEoc3RyZWFtIGluc3RhbmNlb2YgU3RyZWFtTW9kdWxlLlJlbW90ZVN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKCdJbnZhbGlkIHN0cmVhbS4nKSk7XG4gICAgfVxuICAgIGlmIChzdHJlYW0uc291cmNlLmRhdGEpIHtcbiAgICAgIGlmIChzdHJlYW0uc291cmNlLmF1ZGlvIHx8IHN0cmVhbS5zb3VyY2UudmlkZW8pIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCBzb3VyY2UgaW5mby4gQSByZW1vdGUgc3RyZWFtIGlzIGVpdGhlciBhIGRhdGEgc3RyZWFtIG9yICcgK1xuICAgICAgICAgICAgJ2EgbWVkaWEgc3RyZWFtLicpKTtcbiAgICAgIH1cbiAgICAgIGlmIChxdWljVHJhbnNwb3J0Q2hhbm5lbCkge1xuICAgICAgICByZXR1cm4gcXVpY1RyYW5zcG9ydENoYW5uZWwuc3Vic2NyaWJlKHN0cmVhbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignV2ViVHJhbnNwb3J0IGlzIG5vdCBzdXBwb3J0ZWQuJykpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW1haW5DaGFubmVsKSB7XG4gICAgICBtYWluQ2hhbm5lbCA9IGNyZWF0ZVBlZXJDb25uZWN0aW9uQ2hhbm5lbCgpO1xuICAgICAgbWFpbkNoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgIG1haW5DaGFubmVsID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFpbkNoYW5uZWwuc3Vic2NyaWJlKHN0cmVhbSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzZW5kXG4gICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBTZW5kIGEgdGV4dCBtZXNzYWdlIHRvIGEgcGFydGljaXBhbnQgb3IgYWxsIHBhcnRpY2lwYW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgTWVzc2FnZSB0byBiZSBzZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFydGljaXBhbnRJZCBSZWNlaXZlciBvZiB0aGlzIG1lc3NhZ2UuIE1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIGFsbCBwYXJ0aWNpcGFudHMgaWYgcGFydGljaXBhbnRJZCBpcyB1bmRlZmluZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZCwgRXJyb3I+fSBSZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2hlbiBjb25mZXJlbmNlIHNlcnZlciByZWNlaXZlZCBjZXJ0YWluIG1lc3NhZ2UuXG4gICAqL1xuICB0aGlzLnNlbmQgPSBmdW5jdGlvbihtZXNzYWdlLCBwYXJ0aWNpcGFudElkKSB7XG4gICAgaWYgKHBhcnRpY2lwYW50SWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFydGljaXBhbnRJZCA9ICdhbGwnO1xuICAgIH1cbiAgICByZXR1cm4gc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3RleHQnLCB7dG86IHBhcnRpY2lwYW50SWQsIG1lc3NhZ2U6IG1lc3NhZ2V9KTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGxlYXZlXG4gICAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBMZWF2ZSBhIGNvbmZlcmVuY2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZCwgRXJyb3I+fSBSZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCB1bmRlZmluZWQgb25jZSB0aGUgY29ubmVjdGlvbiBpcyBkaXNjb25uZWN0ZWQuXG4gICAqL1xuICB0aGlzLmxlYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNpZ25hbGluZy5kaXNjb25uZWN0KCkudGhlbigoKSA9PiB7XG4gICAgICBjbGVhbigpO1xuICAgICAgc2lnbmFsaW5nU3RhdGUgPSBTaWduYWxpbmdTdGF0ZS5SRUFEWTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGNyZWF0ZVNlbmRTdHJlYW1cbiAgICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIENyZWF0ZSBhbiBvdXRnb2luZyBzdHJlYW0uIE9ubHkgYXZhaWxhYmxlIHdoZW4gV2ViVHJhbnNwb3J0IGlzIHN1cHBvcnRlZCBieSB1c2VyJ3MgYnJvd3Nlci5cbiAgICogQHJldHVybiB7UHJvbWlzZTxTZW5kU3RyZWFtLCBFcnJvcj59IFJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCB3aXRoIGEgU2VuZFN0cmVhbSBvbmNlIHN0cmVhbSBpcyBjcmVhdGVkLlxuICAgKi9cbiAgaWYgKFF1aWNDb25uZWN0aW9uKSB7XG4gICAgdGhpcy5jcmVhdGVTZW5kU3RyZWFtID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXF1aWNUcmFuc3BvcnRDaGFubmVsKSB7XG4gICAgICAgIC8vIFRyeSB0byBjcmVhdGUgYSBuZXcgb25lIG9yIGNvbnNpZGVyIGl0IGFzIGNsb3NlZD9cbiAgICAgICAgdGhyb3cgbmV3IENvbmZlcmVuY2VFcnJvcignTm8gUVVJQyBjb25uZWN0aW9uIGF2YWlsYWJsZS4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWljVHJhbnNwb3J0Q2hhbm5lbC5jcmVhdGVTZW5kU3RyZWFtKCk7XG4gICAgfTtcbiAgfVxufTtcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBDb25mZXJlbmNlRXJyb3JcbiAqIEBjbGFzc0Rlc2MgVGhlIENvbmZlcmVuY2VFcnJvciBvYmplY3QgcmVwcmVzZW50cyBhbiBlcnJvciBpbiBjb25mZXJlbmNlIG1vZGUuXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZlcmVuY2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHtDb25mZXJlbmNlQ2xpZW50fSBmcm9tICcuL2NsaWVudC5qcyc7XG5leHBvcnQge1Npb1NpZ25hbGluZ30gZnJvbSAnLi9zaWduYWxpbmcuanMnO1xuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGNsYXNzIENvbmZlcmVuY2VJbmZvXG4gKiBAY2xhc3NEZXNjIEluZm9ybWF0aW9uIGZvciBhIGNvbmZlcmVuY2UuXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZlcmVuY2VJbmZvIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoaWQsIHBhcnRpY2lwYW50cywgcmVtb3RlU3RyZWFtcywgbXlJbmZvKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlSW5mb1xuICAgICAqIEBkZXNjIENvbmZlcmVuY2UgSUQuXG4gICAgICovXG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FycmF5PE93dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50Pn0gcGFydGljaXBhbnRzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VJbmZvXG4gICAgICogQGRlc2MgUGFydGljaXBhbnRzIGluIHRoZSBjb25mZXJlbmNlLlxuICAgICAqL1xuICAgIHRoaXMucGFydGljaXBhbnRzID0gcGFydGljaXBhbnRzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FycmF5PE93dC5CYXNlLlJlbW90ZVN0cmVhbT59IHJlbW90ZVN0cmVhbXNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUluZm9cbiAgICAgKiBAZGVzYyBTdHJlYW1zIHB1Ymxpc2hlZCBieSBwYXJ0aWNpcGFudHMuIEl0IGFsc28gaW5jbHVkZXMgc3RyZWFtcyBwdWJsaXNoZWQgYnkgY3VycmVudCB1c2VyLlxuICAgICAqL1xuICAgIHRoaXMucmVtb3RlU3RyZWFtcyA9IHJlbW90ZVN0cmVhbXM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuUGFydGljaXBhbnR9IHNlbGZcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUluZm9cbiAgICAgKi9cbiAgICB0aGlzLnNlbGYgPSBteUluZm87XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBTdHJlYW1Nb2R1bGUgZnJvbSAnLi4vYmFzZS9zdHJlYW0uanMnO1xuaW1wb3J0ICogYXMgU3RyZWFtVXRpbHNNb2R1bGUgZnJvbSAnLi9zdHJlYW11dGlscy5qcyc7XG5pbXBvcnQge093dEV2ZW50fSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVtb3RlTWl4ZWRTdHJlYW1cbiAqIEBjbGFzc0Rlc2MgTWl4ZWQgc3RyZWFtIGZyb20gY29uZmVyZW5jZSBzZXJ2ZXIuXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgICAgICAgIHwgQXJndW1lbnQgVHlwZSAgICB8IEZpcmVkIHdoZW4gICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBhY3RpdmVhdWRpb2lucHV0Y2hhbmdlIHwgRXZlbnQgICAgICAgICAgICB8IEF1ZGlvIGFjdGl2ZW5lc3Mgb2YgaW5wdXQgc3RyZWFtIChvZiB0aGUgbWl4ZWQgc3RyZWFtKSBpcyBjaGFuZ2VkLiB8XG4gKiB8IGxheW91dGNoYW5nZSAgICAgICAgICAgfCBFdmVudCAgICAgICAgICAgIHwgVmlkZW8ncyBsYXlvdXQgaGFzIGJlZW4gY2hhbmdlZC4gSXQgdXN1YWxseSBoYXBwZW5zIHdoZW4gYSBuZXcgdmlkZW8gaXMgbWl4ZWQgaW50byB0aGUgdGFyZ2V0IG1peGVkIHN0cmVhbSBvciBhbiBleGlzdGluZyB2aWRlbyBoYXMgYmVlbiByZW1vdmVkIGZyb20gbWl4ZWQgc3RyZWFtLiB8XG4gKlxuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5SZW1vdGVTdHJlYW1cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFJlbW90ZU1peGVkU3RyZWFtIGV4dGVuZHMgU3RyZWFtTW9kdWxlLlJlbW90ZVN0cmVhbSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGluZm8pIHtcbiAgICBpZiAoaW5mby50eXBlICE9PSAnbWl4ZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOb3QgYSBtaXhlZCBzdHJlYW0nKTtcbiAgICB9XG4gICAgc3VwZXIoaW5mby5pZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG5ldyBTdHJlYW1Nb2R1bGUuU3RyZWFtU291cmNlSW5mbyhcbiAgICAgICAgJ21peGVkJywgJ21peGVkJykpO1xuXG4gICAgdGhpcy5zZXR0aW5ncyA9IFN0cmVhbVV0aWxzTW9kdWxlLmNvbnZlcnRUb1B1YmxpY2F0aW9uU2V0dGluZ3MoaW5mby5tZWRpYSk7XG5cbiAgICB0aGlzLmV4dHJhQ2FwYWJpbGl0aWVzID1cbiAgICAgICAgU3RyZWFtVXRpbHNNb2R1bGUuY29udmVydFRvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzKGluZm8ubWVkaWEpO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIEFjdGl2ZUF1ZGlvSW5wdXRDaGFuZ2VFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBBY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnQgcmVwcmVzZW50cyBhbiBhY3RpdmUgYXVkaW8gaW5wdXQgY2hhbmdlIGV2ZW50LlxuICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnQgZXh0ZW5kcyBPd3RFdmVudCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGluaXQpIHtcbiAgICBzdXBlcih0eXBlKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGFjdGl2ZUF1ZGlvSW5wdXRTdHJlYW1JZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5BY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnRcbiAgICAgKiBAZGVzYyBUaGUgSUQgb2YgaW5wdXQgc3RyZWFtKG9mIHRoZSBtaXhlZCBzdHJlYW0pIHdob3NlIGF1ZGlvIGlzIGFjdGl2ZS5cbiAgICAgKi9cbiAgICB0aGlzLmFjdGl2ZUF1ZGlvSW5wdXRTdHJlYW1JZCA9IGluaXQuYWN0aXZlQXVkaW9JbnB1dFN0cmVhbUlkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIExheW91dENoYW5nZUV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIExheW91dENoYW5nZUV2ZW50IHJlcHJlc2VudHMgYW4gdmlkZW8gbGF5b3V0IGNoYW5nZSBldmVudC5cbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgTGF5b3V0Q2hhbmdlRXZlbnQgZXh0ZW5kcyBPd3RFdmVudCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGluaXQpIHtcbiAgICBzdXBlcih0eXBlKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtvYmplY3R9IGxheW91dFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5MYXlvdXRDaGFuZ2VFdmVudFxuICAgICAqIEBkZXNjIEN1cnJlbnQgdmlkZW8ncyBsYXlvdXQuIEl0J3MgYW4gYXJyYXkgb2YgbWFwIHdoaWNoIG1hcHMgZWFjaCBzdHJlYW0gdG8gYSByZWdpb24uXG4gICAgICovXG4gICAgdGhpcy5sYXlvdXQgPSBpbml0LmxheW91dDtcbiAgfVxufVxuXG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCAqIGFzIEV2ZW50TW9kdWxlIGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGNsYXNzIFBhcnRpY2lwYW50XG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgVGhlIFBhcnRpY2lwYW50IGRlZmluZXMgYSBwYXJ0aWNpcGFudCBpbiBhIGNvbmZlcmVuY2UuXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgfCBBcmd1bWVudCBUeXBlICAgICAgfCBGaXJlZCB3aGVuICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGxlZnQgICAgICAgICAgICB8IE93dC5CYXNlLk93dEV2ZW50ICB8IFRoZSBwYXJ0aWNpcGFudCBsZWZ0IHRoZSBjb25mZXJlbmNlLiB8XG4gKlxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJ0aWNpcGFudCBleHRlbmRzIEV2ZW50TW9kdWxlLkV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGlkLCByb2xlLCB1c2VySWQpIHtcbiAgICBzdXBlcigpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuUGFydGljaXBhbnRcbiAgICAgKiBAZGVzYyBUaGUgSUQgb2YgdGhlIHBhcnRpY2lwYW50LiBJdCB2YXJpZXMgd2hlbiBhIHNpbmdsZSB1c2VyIGpvaW4gZGlmZmVyZW50IGNvbmZlcmVuY2VzLlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGlkLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gcm9sZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5QYXJ0aWNpcGFudFxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncm9sZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogcm9sZSxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHVzZXJJZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5QYXJ0aWNpcGFudFxuICAgICAqIEBkZXNjIFRoZSB1c2VyIElEIG9mIHRoZSBwYXJ0aWNpcGFudC4gSXQgY2FuIGJlIGludGVncmF0ZWQgaW50byBleGlzdGluZyBhY2NvdW50IG1hbmFnZW1lbnQgc3lzdGVtLlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndXNlcklkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB1c2VySWQsXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYyAqL1xuLyogZ2xvYmFsIFByb21pc2UsIE1hcCwgUXVpY1RyYW5zcG9ydCwgVWludDhBcnJheSwgVWludDMyQXJyYXksIFRleHRFbmNvZGVyICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5pbXBvcnQge1B1YmxpY2F0aW9ufSBmcm9tICcuLi9iYXNlL3B1YmxpY2F0aW9uLmpzJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuL3N1YnNjcmlwdGlvbi5qcyc7XG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnLi4vYmFzZS9iYXNlNjQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBRdWljQ29ubmVjdGlvblxuICogQGNsYXNzRGVzYyBBIGNoYW5uZWwgZm9yIGEgUVVJQyB0cmFuc3BvcnQgYmV0d2VlbiBjbGllbnQgYW5kIGNvbmZlcmVuY2VcbiAqIHNlcnZlci5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWljQ29ubmVjdGlvbiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGB0b2tlblN0cmluZ2AgaXMgYSBiYXNlNjQgc3RyaW5nIG9mIHRoZSB0b2tlbiBvYmplY3QuIEl0J3MgaW4gdGhlIHJldHVyblxuICAvLyB2YWx1ZSBvZiBgQ29uZmVyZW5jZUNsaWVudC5qb2luYC5cbiAgY29uc3RydWN0b3IodXJsLCB0b2tlblN0cmluZywgc2lnbmFsaW5nLCB3ZWJUcmFuc3BvcnRPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl90b2tlbiA9IEpTT04ucGFyc2UoQmFzZTY0LmRlY29kZUJhc2U2NCh0b2tlblN0cmluZykpO1xuICAgIHRoaXMuX3NpZ25hbGluZyA9IHNpZ25hbGluZztcbiAgICB0aGlzLl9lbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3F1aWNTdHJlYW1zID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgcHVibGljYXRpb24gb3Igc3Vic2NyaXB0aW9uIElELlxuICAgIHRoaXMuX3F1aWNUcmFuc3BvcnQgPSBuZXcgUXVpY1RyYW5zcG9ydCh1cmwsIHdlYlRyYW5zcG9ydE9wdGlvbnMpO1xuICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgc3Vic2NyaXB0aW9uIElELlxuICAgIHRoaXMuX3RyYW5zcG9ydElkID0gdGhpcy5fdG9rZW4udHJhbnNwb3J0SWQ7XG4gICAgdGhpcy5faW5pdCgpO1xuICAgIHRoaXMuX2F1dGhlbnRpY2F0ZSh0b2tlblN0cmluZyk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIG9uTWVzc2FnZVxuICAgKiBAZGVzYyBSZWNlaXZlZCBhIG1lc3NhZ2UgZnJvbSBjb25mZXJlbmNlIHBvcnRhbC4gRGVmaW5lZCBpbiBjbGllbnQtc2VydmVyXG4gICAqIHByb3RvY29sLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbiB0eXBlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSBNZXNzYWdlIHJlY2VpdmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgb25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgbWVzc2FnZSkge1xuICAgIHN3aXRjaCAobm90aWZpY2F0aW9uKSB7XG4gICAgICBjYXNlICdwcm9ncmVzcyc6XG4gICAgICAgIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3NvYWMnKSB7XG4gICAgICAgICAgdGhpcy5fc29hY0hhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3JlYWR5Jykge1xuICAgICAgICAgIHRoaXMuX3JlYWR5SGFuZGxlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgdGhpcy5fZXJyb3JIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJlYW0nOlxuICAgICAgICB0aGlzLl9vblN0cmVhbUV2ZW50KG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdVbmtub3duIG5vdGlmaWNhdGlvbiBmcm9tIE1DVS4nKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfaW5pdCgpIHtcbiAgICBjb25zdCByZWNlaXZlU3RyZWFtUmVhZGVyID1cbiAgICAgICAgdGhpcy5fcXVpY1RyYW5zcG9ydC5yZWNlaXZlU3RyZWFtcygpLmdldFJlYWRlcigpO1xuICAgIExvZ2dlci5pbmZvKCdSZWFkZXI6ICcgKyByZWNlaXZlU3RyZWFtUmVhZGVyKTtcbiAgICBsZXQgcmVjZWl2aW5nRG9uZSA9IGZhbHNlO1xuICAgIHdoaWxlICghcmVjZWl2aW5nRG9uZSkge1xuICAgICAgY29uc3Qge3ZhbHVlOiByZWNlaXZlU3RyZWFtLCBkb25lOiByZWFkaW5nUmVjZWl2ZVN0cmVhbXNEb25lfSA9XG4gICAgICAgICAgYXdhaXQgcmVjZWl2ZVN0cmVhbVJlYWRlci5yZWFkKCk7XG4gICAgICBMb2dnZXIuaW5mbygnTmV3IHN0cmVhbSByZWNlaXZlZCcpO1xuICAgICAgaWYgKHJlYWRpbmdSZWNlaXZlU3RyZWFtc0RvbmUpIHtcbiAgICAgICAgcmVjZWl2aW5nRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgY2h1bmtSZWFkZXIgPSByZWNlaXZlU3RyZWFtLnJlYWRhYmxlLmdldFJlYWRlcigpO1xuICAgICAgY29uc3Qge3ZhbHVlOiB1dWlkLCBkb25lOiByZWFkaW5nQ2h1bmtzRG9uZX0gPSBhd2FpdCBjaHVua1JlYWRlci5yZWFkKCk7XG4gICAgICBpZiAocmVhZGluZ0NodW5rc0RvbmUpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKCdTdHJlYW0gY2xvc2VkIHVuZXhwZWN0ZWRseS4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHV1aWQubGVuZ3RoICE9IDE2KSB7XG4gICAgICAgIExvZ2dlci5lcnJvcignVW5leHBlY3RlZCBsZW5ndGggZm9yIFVVSUQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNodW5rUmVhZGVyLnJlbGVhc2VMb2NrKCk7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb25JZCA9IHRoaXMuX3VpbnQ4QXJyYXlUb1V1aWQodXVpZCk7XG4gICAgICB0aGlzLl9xdWljU3RyZWFtcy5zZXQoc3Vic2NyaXB0aW9uSWQsIHJlY2VpdmVTdHJlYW0pO1xuICAgICAgaWYgKHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmhhcyhzdWJzY3JpcHRpb25JZCkpIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID1cbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb25JZCwgcmVjZWl2ZVN0cmVhbSk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmdldChzdWJzY3JpcHRpb25JZCkucmVzb2x2ZShzdWJzY3JpcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVTdWJzY3JpcHRpb24oaWQsIHJlY2VpdmVTdHJlYW0pIHtcbiAgICAvLyBUT0RPOiBJbmNvbXBsZXRlIHN1YnNjcmlwdGlvbi5cbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKGlkLCAoKSA9PiB7XG4gICAgICByZWNlaXZlU3RyZWFtLmFib3J0UmVhZGluZygpO1xuICAgIH0pO1xuICAgIHN1YnNjcmlwdGlvbi5zdHJlYW0gPSByZWNlaXZlU3RyZWFtO1xuICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gIH1cblxuICBhc3luYyBfYXV0aGVudGljYXRlKHRva2VuKSB7XG4gICAgYXdhaXQgdGhpcy5fcXVpY1RyYW5zcG9ydC5yZWFkeTtcbiAgICBjb25zdCBxdWljU3RyZWFtID0gYXdhaXQgdGhpcy5fcXVpY1RyYW5zcG9ydC5jcmVhdGVCaWRpcmVjdGlvbmFsU3RyZWFtKCk7XG4gICAgY29uc3QgY2h1bmtSZWFkZXIgPSBxdWljU3RyZWFtLnJlYWRhYmxlLmdldFJlYWRlcigpO1xuICAgIGNvbnN0IHdyaXRlciA9IHF1aWNTdHJlYW0ud3JpdGFibGUuZ2V0V3JpdGVyKCk7XG4gICAgYXdhaXQgd3JpdGVyLnJlYWR5O1xuICAgIC8vIDEyOCBiaXQgb2YgemVybyBpbmRpY2F0ZXMgdGhpcyBpcyBhIHN0cmVhbSBmb3Igc2lnbmFsaW5nLlxuICAgIHdyaXRlci53cml0ZShuZXcgVWludDhBcnJheSgxNikpO1xuICAgIC8vIFNlbmQgdG9rZW4gYXMgZGVzY3JpYmVkIGluXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2VicnRjLXRvb2xraXQvb3d0LXNlcnZlci9ibG9iLzIwZThhYWQyMTZjYzQ0NjA5NWY2M2M0MDkzMzljMzRjN2VlNzcwZWUvZG9jL2Rlc2lnbi9xdWljLXRyYW5zcG9ydC1wYXlsb2FkLWZvcm1hdC5tZC5cbiAgICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgY29uc3QgZW5jb2RlZFRva2VuID0gZW5jb2Rlci5lbmNvZGUodG9rZW4pO1xuICAgIHdyaXRlci53cml0ZShVaW50MzJBcnJheS5vZihlbmNvZGVkVG9rZW4ubGVuZ3RoKSk7XG4gICAgd3JpdGVyLndyaXRlKGVuY29kZWRUb2tlbik7XG4gICAgLy8gU2VydmVyIHJldHVybnMgdHJhbnNwb3J0IElEIGFzIGFuIGFjay4gSWdub3JlIGl0IGhlcmUuXG4gICAgYXdhaXQgY2h1bmtSZWFkZXIucmVhZCgpO1xuICAgIExvZ2dlci5pbmZvKCdBdXRoZW50aWNhdGlvbiBzdWNjZXNzLicpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlU2VuZFN0cmVhbSgpIHtcbiAgICBhd2FpdCB0aGlzLl9xdWljVHJhbnNwb3J0LnJlYWR5O1xuICAgIGNvbnN0IHF1aWNTdHJlYW0gPSBhd2FpdCB0aGlzLl9xdWljVHJhbnNwb3J0LmNyZWF0ZVNlbmRTdHJlYW0oKTtcbiAgICByZXR1cm4gcXVpY1N0cmVhbTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVNlbmRTdHJlYW0xKHNlc3Npb25JZCkge1xuICAgIExvZ2dlci5pbmZvKCdDcmVhdGUgc3RyZWFtLicpO1xuICAgIGF3YWl0IHRoaXMuX3F1aWNUcmFuc3BvcnQucmVhZHk7XG4gICAgLy8gVE9ETzogUG90ZW50aWFsIGZhaWx1cmUgYmVjYXVzZSBvZiBwdWJsaWNhdGlvbiBzdHJlYW0gaXMgY3JlYXRlZCBmYXN0ZXJcbiAgICAvLyB0aGFuIHNpZ25hbGluZyBzdHJlYW0oY3JlYXRlZCBieSB0aGUgMXN0IGNhbGwgdG8gaW5pdGlhdGVQdWJsaWNhdGlvbikuXG4gICAgY29uc3QgcHVibGljYXRpb25JZCA9IGF3YWl0IHRoaXMuX2luaXRpYXRlUHVibGljYXRpb24oKTtcbiAgICBjb25zdCBxdWljU3RyZWFtID0gYXdhaXQgdGhpcy5fcXVpY1RyYW5zcG9ydC5jcmVhdGVTZW5kU3RyZWFtKCk7XG4gICAgY29uc3Qgd3JpdGVyID0gcXVpY1N0cmVhbS53cml0YWJsZS5nZXRXcml0ZXIoKTtcbiAgICBhd2FpdCB3cml0ZXIucmVhZHk7XG4gICAgd3JpdGVyLndyaXRlKHRoaXMuX3V1aWRUb1VpbnQ4QXJyYXkocHVibGljYXRpb25JZCkpO1xuICAgIHdyaXRlci5yZWxlYXNlTG9jaygpO1xuICAgIHRoaXMuX3F1aWNTdHJlYW1zLnNldChwdWJsaWNhdGlvbklkLCBxdWljU3RyZWFtKTtcbiAgICByZXR1cm4gcXVpY1N0cmVhbTtcbiAgfVxuXG4gIGFzeW5jIHB1Ymxpc2goc3RyZWFtKSB7XG4gICAgLy8gVE9ETzogQXZvaWQgYSBzdHJlYW0gdG8gYmUgcHVibGlzaGVkIHR3aWNlLiBUaGUgZmlyc3QgMTYgYml0IGRhdGEgc2VuZCB0b1xuICAgIC8vIHNlcnZlciBtdXN0IGJlIGl0J3MgcHVibGljYXRpb24gSUQuXG4gICAgLy8gVE9ETzogUG90ZW50aWFsIGZhaWx1cmUgYmVjYXVzZSBvZiBwdWJsaWNhdGlvbiBzdHJlYW0gaXMgY3JlYXRlZCBmYXN0ZXJcbiAgICAvLyB0aGFuIHNpZ25hbGluZyBzdHJlYW0oY3JlYXRlZCBieSB0aGUgMXN0IGNhbGwgdG8gaW5pdGlhdGVQdWJsaWNhdGlvbikuXG4gICAgY29uc3QgcHVibGljYXRpb25JZCA9IGF3YWl0IHRoaXMuX2luaXRpYXRlUHVibGljYXRpb24oKTtcbiAgICBjb25zdCBxdWljU3RyZWFtID0gc3RyZWFtLnN0cmVhbTtcbiAgICBjb25zdCB3cml0ZXIgPSBxdWljU3RyZWFtLndyaXRhYmxlLmdldFdyaXRlcigpO1xuICAgIGF3YWl0IHdyaXRlci5yZWFkeTtcbiAgICB3cml0ZXIud3JpdGUodGhpcy5fdXVpZFRvVWludDhBcnJheShwdWJsaWNhdGlvbklkKSk7XG4gICAgd3JpdGVyLnJlbGVhc2VMb2NrKCk7XG4gICAgTG9nZ2VyLmluZm8oJ3B1Ymxpc2ggaWQnKTtcbiAgICB0aGlzLl9xdWljU3RyZWFtcy5zZXQocHVibGljYXRpb25JZCwgcXVpY1N0cmVhbSk7XG4gICAgY29uc3QgcHVibGljYXRpb24gPSBuZXcgUHVibGljYXRpb24ocHVibGljYXRpb25JZCwgKCkgPT4ge1xuICAgICAgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCd1bnB1Ymxpc2gnLCB7aWQ6IHB1YmxpY2F0aW9ufSlcbiAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdNQ1UgcmV0dXJucyBuZWdhdGl2ZSBhY2sgZm9yIHVucHVibGlzaGluZywgJyArIGUpO1xuICAgICAgICAgIH0pO1xuICAgIH0gLyogVE9ETzogZ2V0U3RhdHMsIG11dGUsIHVubXV0ZSBpcyBub3QgaW1wbGVtZW50ZWQgKi8pO1xuICAgIHJldHVybiBwdWJsaWNhdGlvbjtcbiAgfVxuXG4gIGhhc0NvbnRlbnRTZXNzaW9uSWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVpY1N0cmVhbXMuaGFzKGlkKTtcbiAgfVxuXG4gIF91dWlkVG9VaW50OEFycmF5KHV1aWRTdHJpbmcpIHtcbiAgICBpZiAodXVpZFN0cmluZy5sZW5ndGggIT0gMzIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29ycmVjdCBVVUlELicpO1xuICAgIH1cbiAgICBjb25zdCB1dWlkQXJyYXkgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICB1dWlkQXJyYXlbaV0gPSBwYXJzZUludCh1dWlkU3RyaW5nLnN1YnN0cmluZyhpICogMiwgaSAqIDIgKyAyKSwgMTYpO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZEFycmF5O1xuICB9XG5cbiAgX3VpbnQ4QXJyYXlUb1V1aWQodXVpZEJ5dGVzKSB7XG4gICAgbGV0IHMgPSAnJztcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB1dWlkQnl0ZXMpIHtcbiAgICAgIGNvbnN0IHN0ciA9IGhleC50b1N0cmluZygxNik7XG4gICAgICBzICs9IHN0ci5wYWRTdGFydCgyLCAnMCcpO1xuICAgIH1cbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIHN1YnNjcmliZShzdHJlYW0pIHtcbiAgICBjb25zdCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fc2lnbmFsaW5nXG4gICAgICAgICAgLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICBtZWRpYTogbnVsbCxcbiAgICAgICAgICAgIGRhdGE6IHtmcm9tOiBzdHJlYW0uaWR9LFxuICAgICAgICAgICAgdHJhbnNwb3J0OiB7dHlwZTogJ3F1aWMnLCBpZDogdGhpcy5fdHJhbnNwb3J0SWR9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9xdWljU3RyZWFtcy5oYXMoZGF0YS5pZCkpIHtcbiAgICAgICAgICAgICAgLy8gUVVJQyBzdHJlYW0gY3JlYXRlZCBiZWZvcmUgc2lnbmFsaW5nIHJldHVybnMuXG4gICAgICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuX2NyZWF0ZVN1YnNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgIGRhdGEuaWQsIHRoaXMuX3F1aWNTdHJlYW1zLmdldChkYXRhLmlkKSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3F1aWNTdHJlYW1zLnNldChkYXRhLmlkLCBudWxsKTtcbiAgICAgICAgICAgICAgLy8gUVVJQyBzdHJlYW0gaXMgbm90IGNyZWF0ZWQgeWV0LCByZXNvbHZlIHByb21pc2UgYWZ0ZXIgZ2V0dGluZ1xuICAgICAgICAgICAgICAvLyBRVUlDIHN0cmVhbS5cbiAgICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuc2V0KFxuICAgICAgICAgICAgICAgICAgZGF0YS5pZCwge3Jlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHA7XG4gIH1cblxuICBfcmVhZEFuZFByaW50KCkge1xuICAgIHRoaXMuX3F1aWNTdHJlYW1zWzBdLndhaXRGb3JSZWFkYWJsZSg1KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl9xdWljU3RyZWFtc1swXS5yZWFkQnVmZmVyZWRBbW91bnQpO1xuICAgICAgdGhpcy5fcXVpY1N0cmVhbXNbMF0ucmVhZEludG8oZGF0YSk7XG4gICAgICBMb2dnZXIuaW5mbygnUmVhZCBkYXRhOiAnICsgZGF0YSk7XG4gICAgICB0aGlzLl9yZWFkQW5kUHJpbnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9pbml0aWF0ZVB1YmxpY2F0aW9uKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3B1Ymxpc2gnLCB7XG4gICAgICBtZWRpYTogbnVsbCxcbiAgICAgIGRhdGE6IHRydWUsXG4gICAgICB0cmFuc3BvcnQ6IHt0eXBlOiAncXVpYycsIGlkOiB0aGlzLl90cmFuc3BvcnRJZH0sXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX3RyYW5zcG9ydElkICE9PSBkYXRhLnRyYW5zcG9ydElkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zcG9ydCBJRCBub3QgbWF0Y2guJyk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLmlkO1xuICB9XG5cbiAgX3JlYWR5SGFuZGxlcigpIHtcbiAgICAvLyBSZWFkeSBtZXNzYWdlIGZyb20gc2VydmVyIGlzIHVzZWxlc3MgZm9yIFF1aWNTdHJlYW0gc2luY2UgUXVpY1N0cmVhbSBoYXNcbiAgICAvLyBpdHMgb3duIHN0YXR1cy4gRG8gbm90aGluZyBoZXJlLlxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGdsb2JhbCBpbywgUHJvbWlzZSwgc2V0VGltZW91dCwgY2xlYXJUaW1lb3V0ICovXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCAqIGFzIEV2ZW50TW9kdWxlIGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuaW1wb3J0IHtDb25mZXJlbmNlRXJyb3J9IGZyb20gJy4vZXJyb3IuanMnO1xuaW1wb3J0IHtCYXNlNjR9IGZyb20gJy4uL2Jhc2UvYmFzZTY0LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWNvbm5lY3Rpb25BdHRlbXB0cyA9IDEwO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2Uoc3RhdHVzLCBkYXRhLCByZXNvbHZlLCByZWplY3QpIHtcbiAgaWYgKHN0YXR1cyA9PT0gJ29rJyB8fCBzdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgIHJlc29sdmUoZGF0YSk7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgcmVqZWN0KGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIExvZ2dlci5lcnJvcignTUNVIHJldHVybnMgdW5rbm93biBhY2suJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgU2lvU2lnbmFsaW5nXG4gKiBAY2xhc3NkZXNjIFNvY2tldC5JTyBzaWduYWxpbmcgY2hhbm5lbCBmb3IgQ29uZmVyZW5jZUNsaWVudC4gSXQgaXMgbm90IHJlY29tbWVuZGVkIHRvIGRpcmVjdGx5IGFjY2VzcyB0aGlzIGNsYXNzLlxuICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgU2lvU2lnbmFsaW5nIGV4dGVuZHMgRXZlbnRNb2R1bGUuRXZlbnREaXNwYXRjaGVyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zb2NrZXQgPSBudWxsO1xuICAgIHRoaXMuX2xvZ2dlZEluID0gZmFsc2U7XG4gICAgdGhpcy5fcmVjb25uZWN0VGltZXMgPSAwO1xuICAgIHRoaXMuX3JlY29ubmVjdGlvblRpY2tldCA9IG51bGw7XG4gICAgdGhpcy5fcmVmcmVzaFJlY29ubmVjdGlvblRpY2tldCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGNvbm5lY3RcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIENvbm5lY3QgdG8gYSBwb3J0YWwuXG4gICAqIEBtZW1iZXJvZiBPbXMuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QsIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIHRoZSBkYXRhIHJldHVybmVkIGJ5IHBvcnRhbCBpZiBzdWNjZXNzZnVsbHkgbG9nZ2VkIGluLiBPciByZXR1cm4gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggYSBuZXdseSBjcmVhdGVkIE9tcy5FcnJvciBpZiBmYWlsZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBob3N0IEhvc3Qgb2YgdGhlIHBvcnRhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGlzU2VjdXJlZCBJcyBzZWN1cmUgY29ubmVjdGlvbiBvciBub3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2dpbkluZm8gSW5mb21hdGlvbiByZXF1aXJlZCBmb3IgbG9nZ2luZyBpbi5cbiAgICogQHByaXZhdGUuXG4gICAqL1xuICBjb25uZWN0KGhvc3QsIGlzU2VjdXJlZCwgbG9naW5JbmZvKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgICdyZWNvbm5lY3Rpb24nOiB0cnVlLFxuICAgICAgICAncmVjb25uZWN0aW9uQXR0ZW1wdHMnOiByZWNvbm5lY3Rpb25BdHRlbXB0cyxcbiAgICAgICAgJ2ZvcmNlIG5ldyBjb25uZWN0aW9uJzogdHJ1ZSxcbiAgICAgIH07XG4gICAgICB0aGlzLl9zb2NrZXQgPSBpbyhob3N0LCBvcHRzKTtcbiAgICAgIFsncGFydGljaXBhbnQnLCAndGV4dCcsICdzdHJlYW0nLCAncHJvZ3Jlc3MnXS5mb3JFYWNoKChcbiAgICAgICAgICBub3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgdGhpcy5fc29ja2V0Lm9uKG5vdGlmaWNhdGlvbiwgKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50TW9kdWxlLk1lc3NhZ2VFdmVudCgnZGF0YScsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uOiBub3RpZmljYXRpb24sXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NvY2tldC5vbigncmVjb25uZWN0aW5nJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RUaW1lcysrO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zb2NrZXQub24oJ3JlY29ubmVjdF9mYWlsZWQnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3RUaW1lcyA+PSByZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ2Rpc2Nvbm5lY3QnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc29ja2V0Lm9uKCdjb25uZWN0X2Vycm9yJywgKGUpID0+IHtcbiAgICAgICAgcmVqZWN0KGBjb25uZWN0X2Vycm9yOiR7aG9zdH1gKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc29ja2V0Lm9uKCdkcm9wJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RUaW1lcyA9IHJlY29ubmVjdGlvbkF0dGVtcHRzO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NsZWFyUmVjb25uZWN0aW9uVGFzaygpO1xuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0VGltZXMgPj0gcmVjb25uZWN0aW9uQXR0ZW1wdHMpIHtcbiAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ2Rpc2Nvbm5lY3QnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc29ja2V0LmVtaXQoJ2xvZ2luJywgbG9naW5JbmZvLCAoc3RhdHVzLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdvaycpIHtcbiAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fb25SZWNvbm5lY3Rpb25UaWNrZXQoZGF0YS5yZWNvbm5lY3Rpb25UaWNrZXQpO1xuICAgICAgICAgIHRoaXMuX3NvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHJlLWxvZ2luIHdpdGggcmVjb25uZWN0aW9uIHRpY2tldC5cbiAgICAgICAgICAgIHRoaXMuX3NvY2tldC5lbWl0KCdyZWxvZ2luJywgdGhpcy5fcmVjb25uZWN0aW9uVGlja2V0LCAoc3RhdHVzLFxuICAgICAgICAgICAgICAgIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ29rJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdFRpbWVzID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLl9vblJlY29ubmVjdGlvblRpY2tldChkYXRhKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50TW9kdWxlLk93dEV2ZW50KCdkaXNjb25uZWN0JykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVSZXNwb25zZShzdGF0dXMsIGRhdGEsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZGlzY29ubmVjdFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgRGlzY29ubmVjdCBmcm9tIGEgcG9ydGFsLlxuICAgKiBAbWVtYmVyb2YgT21zLkNvbmZlcmVuY2UuU2lvU2lnbmFsaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LCBFcnJvcj59IFJldHVybiBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCB0aGUgZGF0YSByZXR1cm5lZCBieSBwb3J0YWwgaWYgc3VjY2Vzc2Z1bGx5IGRpc2Nvbm5lY3RlZC4gT3IgcmV0dXJuIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBPbXMuRXJyb3IgaWYgZmFpbGVkLlxuICAgKiBAcHJpdmF0ZS5cbiAgICovXG4gIGRpc2Nvbm5lY3QoKSB7XG4gICAgaWYgKCF0aGlzLl9zb2NrZXQgfHwgdGhpcy5fc29ja2V0LmRpc2Nvbm5lY3RlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgJ1BvcnRhbCBpcyBub3QgY29ubmVjdGVkLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3NvY2tldC5lbWl0KCdsb2dvdXQnLCAoc3RhdHVzLCBkYXRhKSA9PiB7XG4gICAgICAgIC8vIE1heGltaXplIHRoZSByZWNvbm5lY3QgdGltZXMgdG8gZGlzYWJsZSByZWNvbm5lY3Rpb24uXG4gICAgICAgIHRoaXMuX3JlY29ubmVjdFRpbWVzID0gcmVjb25uZWN0aW9uQXR0ZW1wdHM7XG4gICAgICAgIHRoaXMuX3NvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgICAgIGhhbmRsZVJlc3BvbnNlKHN0YXR1cywgZGF0YSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzZW5kXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBTZW5kIGRhdGEgdG8gcG9ydGFsLlxuICAgKiBAbWVtYmVyb2YgT21zLkNvbmZlcmVuY2UuU2lvU2lnbmFsaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LCBFcnJvcj59IFJldHVybiBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCB0aGUgZGF0YSByZXR1cm5lZCBieSBwb3J0YWwuIE9yIHJldHVybiBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBhIG5ld2x5IGNyZWF0ZWQgT21zLkVycm9yIGlmIGZhaWxlZCB0byBzZW5kIHRoZSBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdE5hbWUgTmFtZSBkZWZpbmVkIGluIGNsaWVudC1zZXJ2ZXIgcHJvdG9jb2wuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0RGF0YSBEYXRhIGZvcm1hdCBpcyBkZWZpbmVkIGluIGNsaWVudC1zZXJ2ZXIgcHJvdG9jb2wuXG4gICAqIEBwcml2YXRlLlxuICAgKi9cbiAgc2VuZChyZXF1ZXN0TmFtZSwgcmVxdWVzdERhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fc29ja2V0LmVtaXQocmVxdWVzdE5hbWUsIHJlcXVlc3REYXRhLCAoc3RhdHVzLCBkYXRhKSA9PiB7XG4gICAgICAgIGhhbmRsZVJlc3BvbnNlKHN0YXR1cywgZGF0YSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfb25SZWNvbm5lY3Rpb25UaWNrZXRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFBhcnNlIHJlY29ubmVjdGlvbiB0aWNrZXQgYW5kIHNjaGVkdWxlIHRpY2tldCByZWZyZXNoaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGlja2V0U3RyaW5nIFJlY29ubmVjdGlvbiB0aWNrZXQuXG4gICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmdcbiAgICogQHByaXZhdGUuXG4gICAqL1xuICBfb25SZWNvbm5lY3Rpb25UaWNrZXQodGlja2V0U3RyaW5nKSB7XG4gICAgdGhpcy5fcmVjb25uZWN0aW9uVGlja2V0ID0gdGlja2V0U3RyaW5nO1xuICAgIGNvbnN0IHRpY2tldCA9IEpTT04ucGFyc2UoQmFzZTY0LmRlY29kZUJhc2U2NCh0aWNrZXRTdHJpbmcpKTtcbiAgICAvLyBSZWZyZXNoIHRpY2tldCAxIG1pbiBvciAxMCBzZWNvbmRzIGJlZm9yZSBpdCBleHBpcmVzLlxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzSW5PbmVNaW51dGUgPSA2MCAqIDEwMDA7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzSW5UZW5TZWNvbmRzID0gMTAgKiAxMDAwO1xuICAgIGlmICh0aWNrZXQubm90QWZ0ZXIgPD0gbm93IC0gbWlsbGlzZWNvbmRzSW5UZW5TZWNvbmRzKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnUmVjb25uZWN0aW9uIHRpY2tldCBleHBpcmVzIHRvbyBzb29uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcmVmcmVzaEFmdGVyID0gdGlja2V0Lm5vdEFmdGVyIC0gbm93IC0gbWlsbGlzZWNvbmRzSW5PbmVNaW51dGU7XG4gICAgaWYgKHJlZnJlc2hBZnRlciA8IDApIHtcbiAgICAgIHJlZnJlc2hBZnRlciA9IHRpY2tldC5ub3RBZnRlciAtIG5vdyAtIG1pbGxpc2Vjb25kc0luVGVuU2Vjb25kcztcbiAgICB9XG4gICAgdGhpcy5fY2xlYXJSZWNvbm5lY3Rpb25UYXNrKCk7XG4gICAgdGhpcy5fcmVmcmVzaFJlY29ubmVjdGlvblRpY2tldCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fc29ja2V0LmVtaXQoJ3JlZnJlc2hSZWNvbm5lY3Rpb25UaWNrZXQnLCAoc3RhdHVzLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgIT09ICdvaycpIHtcbiAgICAgICAgICBMb2dnZXIud2FybmluZygnRmFpbGVkIHRvIHJlZnJlc2ggcmVjb25uZWN0aW9uIHRpY2tldC4nKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb25SZWNvbm5lY3Rpb25UaWNrZXQoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9LCByZWZyZXNoQWZ0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfY2xlYXJSZWNvbm5lY3Rpb25UYXNrXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBTdG9wIHRyeWluZyB0byByZWZyZXNoIHJlY29ubmVjdGlvbiB0aWNrZXQuXG4gICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmdcbiAgICogQHByaXZhdGUuXG4gICAqL1xuICBfY2xlYXJSZWNvbm5lY3Rpb25UYXNrKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZWZyZXNoUmVjb25uZWN0aW9uVGlja2V0KTtcbiAgICB0aGlzLl9yZWZyZXNoUmVjb25uZWN0aW9uVGlja2V0ID0gbnVsbDtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vLyBUaGlzIGZpbGUgZG9lc24ndCBoYXZlIHB1YmxpYyBBUElzLlxuLyogZXNsaW50LWRpc2FibGUgdmFsaWQtanNkb2MgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBQdWJsaWNhdGlvbk1vZHVsZSBmcm9tICcuLi9iYXNlL3B1YmxpY2F0aW9uLmpzJztcbmltcG9ydCAqIGFzIE1lZGlhRm9ybWF0TW9kdWxlIGZyb20gJy4uL2Jhc2UvbWVkaWFmb3JtYXQuanMnO1xuaW1wb3J0ICogYXMgQ29kZWNNb2R1bGUgZnJvbSAnLi4vYmFzZS9jb2RlYy5qcyc7XG5pbXBvcnQgKiBhcyBTdWJzY3JpcHRpb25Nb2R1bGUgZnJvbSAnLi9zdWJzY3JpcHRpb24uanMnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5cbi8qKlxuICogQGZ1bmN0aW9uIGV4dHJhY3RCaXRyYXRlTXVsdGlwbGllclxuICogQGRlc2MgRXh0cmFjdCBiaXRyYXRlIG11bHRpcGxpZXIgZnJvbSBhIHN0cmluZyBsaWtlIFwieDAuMlwiLlxuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QsIEVycm9yPn0gVGhlIGZsb2F0IG51bWJlciBhZnRlciBcInhcIi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RCaXRyYXRlTXVsdGlwbGllcihpbnB1dCkge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyB8fCAhaW5wdXQuc3RhcnRzV2l0aCgneCcpKSB7XG4gICAgTG9nZ2VyLndhcm5pbmcoJ0ludmFsaWQgYml0cmF0ZSBtdWx0aXBsaWVyIGlucHV0LicpO1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdChpbnB1dC5yZXBsYWNlKC9eeC8sICcnKSk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5mdW5jdGlvbiBzb3J0TnVtYmVycyh4LCB5KSB7XG4gIHJldHVybiB4IC0geTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmZ1bmN0aW9uIHNvcnRSZXNvbHV0aW9ucyh4LCB5KSB7XG4gIGlmICh4LndpZHRoICE9PSB5LndpZHRoKSB7XG4gICAgcmV0dXJuIHgud2lkdGggLSB5LndpZHRoO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4LmhlaWdodCAtIHkuaGVpZ2h0O1xuICB9XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uIGNvbnZlcnRUb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAqIEBkZXNjIENvbnZlcnQgbWVkaWFJbmZvIHJlY2VpdmVkIGZyb20gc2VydmVyIHRvIFB1YmxpY2F0aW9uU2V0dGluZ3MuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvUHVibGljYXRpb25TZXR0aW5ncyhtZWRpYUluZm8pIHtcbiAgY29uc3QgYXVkaW8gPSBbXTtcbiAgY29uc3QgdmlkZW8gPSBbXTtcbiAgbGV0IGF1ZGlvQ29kZWM7XG4gIGxldCB2aWRlb0NvZGVjO1xuICBsZXQgcmVzb2x1dGlvbjtcbiAgbGV0IGZyYW1lcmF0ZTtcbiAgbGV0IGJpdHJhdGU7XG4gIGxldCBrZXlGcmFtZUludGVydmFsO1xuICBsZXQgcmlkO1xuICBmb3IgKGNvbnN0IHRyYWNrIG9mIG1lZGlhSW5mby50cmFja3MpIHtcbiAgICBpZiAodHJhY2sudHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgaWYgKHRyYWNrLmZvcm1hdCkge1xuICAgICAgICBhdWRpb0NvZGVjID0gbmV3IENvZGVjTW9kdWxlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgdHJhY2suZm9ybWF0LmNvZGVjLCB0cmFjay5mb3JtYXQuY2hhbm5lbE51bSxcbiAgICAgICAgICAgIHRyYWNrLmZvcm1hdC5zYW1wbGVSYXRlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGF1ZGlvUHVibGljYXRpb25TZXR0aW5ncyA9XG4gICAgICAgICAgbmV3IFB1YmxpY2F0aW9uTW9kdWxlLkF1ZGlvUHVibGljYXRpb25TZXR0aW5ncyhhdWRpb0NvZGVjKTtcbiAgICAgIGF1ZGlvUHVibGljYXRpb25TZXR0aW5ncy5fdHJhY2tJZCA9IHRyYWNrLmlkO1xuICAgICAgYXVkaW8ucHVzaChhdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3MpO1xuICAgIH0gZWxzZSBpZiAodHJhY2sudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgaWYgKHRyYWNrLmZvcm1hdCkge1xuICAgICAgICB2aWRlb0NvZGVjID0gbmV3IENvZGVjTW9kdWxlLlZpZGVvQ29kZWNQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgdHJhY2suZm9ybWF0LmNvZGVjLCB0cmFjay5mb3JtYXQucHJvZmlsZSk7XG4gICAgICB9XG4gICAgICBpZiAodHJhY2sucGFyYW1ldGVycykge1xuICAgICAgICBpZiAodHJhY2sucGFyYW1ldGVycy5yZXNvbHV0aW9uKSB7XG4gICAgICAgICAgcmVzb2x1dGlvbiA9IG5ldyBNZWRpYUZvcm1hdE1vZHVsZS5SZXNvbHV0aW9uKFxuICAgICAgICAgICAgICB0cmFjay5wYXJhbWV0ZXJzLnJlc29sdXRpb24ud2lkdGgsXG4gICAgICAgICAgICAgIHRyYWNrLnBhcmFtZXRlcnMucmVzb2x1dGlvbi5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGZyYW1lcmF0ZSA9IHRyYWNrLnBhcmFtZXRlcnMuZnJhbWVyYXRlO1xuICAgICAgICBiaXRyYXRlID0gdHJhY2sucGFyYW1ldGVycy5iaXRyYXRlICogMTAwMDtcbiAgICAgICAga2V5RnJhbWVJbnRlcnZhbCA9IHRyYWNrLnBhcmFtZXRlcnMua2V5RnJhbWVJbnRlcnZhbDtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFjay5yaWQpIHtcbiAgICAgICAgcmlkID0gdHJhY2sucmlkO1xuICAgICAgfVxuICAgICAgY29uc3QgdmlkZW9QdWJsaWNhdGlvblNldHRpbmdzID1cbiAgICAgICAgICBuZXcgUHVibGljYXRpb25Nb2R1bGUuVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzKFxuICAgICAgICAgICAgICB2aWRlb0NvZGVjLCByZXNvbHV0aW9uLCBmcmFtZXJhdGUsIGJpdHJhdGUsXG4gICAgICAgICAgICAgIGtleUZyYW1lSW50ZXJ2YWwsIHJpZCk7XG4gICAgICB2aWRlb1B1YmxpY2F0aW9uU2V0dGluZ3MuX3RyYWNrSWQgPSB0cmFjay5pZDtcbiAgICAgIHZpZGVvLnB1c2godmlkZW9QdWJsaWNhdGlvblNldHRpbmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFB1YmxpY2F0aW9uTW9kdWxlLlB1YmxpY2F0aW9uU2V0dGluZ3MoYXVkaW8sIHZpZGVvKTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb24gY29udmVydFRvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gKiBAZGVzYyBDb252ZXJ0IG1lZGlhSW5mbyByZWNlaXZlZCBmcm9tIHNlcnZlciB0byBTdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzKG1lZGlhSW5mbykge1xuICBsZXQgYXVkaW87XG4gIGxldCB2aWRlbztcblxuICBmb3IgKGNvbnN0IHRyYWNrIG9mIG1lZGlhSW5mby50cmFja3MpIHtcbiAgICBpZiAodHJhY2sudHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgY29uc3QgYXVkaW9Db2RlY3MgPSBbXTtcbiAgICAgIGlmICh0cmFjay5vcHRpb25hbCAmJiB0cmFjay5vcHRpb25hbC5mb3JtYXQpIHtcbiAgICAgICAgZm9yIChjb25zdCBhdWRpb0NvZGVjSW5mbyBvZiB0cmFjay5vcHRpb25hbC5mb3JtYXQpIHtcbiAgICAgICAgICBjb25zdCBhdWRpb0NvZGVjID0gbmV3IENvZGVjTW9kdWxlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgICBhdWRpb0NvZGVjSW5mby5jb2RlYywgYXVkaW9Db2RlY0luZm8uY2hhbm5lbE51bSxcbiAgICAgICAgICAgICAgYXVkaW9Db2RlY0luZm8uc2FtcGxlUmF0ZSk7XG4gICAgICAgICAgYXVkaW9Db2RlY3MucHVzaChhdWRpb0NvZGVjKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXVkaW9Db2RlY3Muc29ydCgpO1xuICAgICAgYXVkaW8gPSBuZXcgU3Vic2NyaXB0aW9uTW9kdWxlLkF1ZGlvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzKGF1ZGlvQ29kZWNzKTtcbiAgICB9IGVsc2UgaWYgKHRyYWNrLnR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgIGNvbnN0IHZpZGVvQ29kZWNzID0gW107XG4gICAgICBpZiAodHJhY2sub3B0aW9uYWwgJiYgdHJhY2sub3B0aW9uYWwuZm9ybWF0KSB7XG4gICAgICAgIGZvciAoY29uc3QgdmlkZW9Db2RlY0luZm8gb2YgdHJhY2sub3B0aW9uYWwuZm9ybWF0KSB7XG4gICAgICAgICAgY29uc3QgdmlkZW9Db2RlYyA9IG5ldyBDb2RlY01vZHVsZS5WaWRlb0NvZGVjUGFyYW1ldGVycyhcbiAgICAgICAgICAgICAgdmlkZW9Db2RlY0luZm8uY29kZWMsIHZpZGVvQ29kZWNJbmZvLnByb2ZpbGUpO1xuICAgICAgICAgIHZpZGVvQ29kZWNzLnB1c2godmlkZW9Db2RlYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZpZGVvQ29kZWNzLnNvcnQoKTtcbiAgICAgIGNvbnN0IHJlc29sdXRpb25zID0gQXJyYXkuZnJvbShcbiAgICAgICAgICB0cmFjay5vcHRpb25hbC5wYXJhbWV0ZXJzLnJlc29sdXRpb24sXG4gICAgICAgICAgKHIpID0+IG5ldyBNZWRpYUZvcm1hdE1vZHVsZS5SZXNvbHV0aW9uKHIud2lkdGgsIHIuaGVpZ2h0KSk7XG4gICAgICByZXNvbHV0aW9ucy5zb3J0KHNvcnRSZXNvbHV0aW9ucyk7XG4gICAgICBjb25zdCBiaXRyYXRlcyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgdHJhY2sub3B0aW9uYWwucGFyYW1ldGVycy5iaXRyYXRlLFxuICAgICAgICAgIChiaXRyYXRlKSA9PiBleHRyYWN0Qml0cmF0ZU11bHRpcGxpZXIoYml0cmF0ZSkpO1xuICAgICAgYml0cmF0ZXMucHVzaCgxLjApO1xuICAgICAgYml0cmF0ZXMuc29ydChzb3J0TnVtYmVycyk7XG4gICAgICBjb25zdCBmcmFtZVJhdGVzID0gSlNPTi5wYXJzZShcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0cmFjay5vcHRpb25hbC5wYXJhbWV0ZXJzLmZyYW1lcmF0ZSkpO1xuICAgICAgZnJhbWVSYXRlcy5zb3J0KHNvcnROdW1iZXJzKTtcbiAgICAgIGNvbnN0IGtleUZyYW1lSW50ZXJ2YWxzID0gSlNPTi5wYXJzZShcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0cmFjay5vcHRpb25hbC5wYXJhbWV0ZXJzLmtleUZyYW1lSW50ZXJ2YWwpKTtcbiAgICAgIGtleUZyYW1lSW50ZXJ2YWxzLnNvcnQoc29ydE51bWJlcnMpO1xuICAgICAgdmlkZW8gPSBuZXcgU3Vic2NyaXB0aW9uTW9kdWxlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzKFxuICAgICAgICAgIHZpZGVvQ29kZWNzLCByZXNvbHV0aW9ucywgZnJhbWVSYXRlcywgYml0cmF0ZXMsIGtleUZyYW1lSW50ZXJ2YWxzKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb25Nb2R1bGUuU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzKGF1ZGlvLCB2aWRlbyk7XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBBdWRpb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFJlcHJlc2VudHMgdGhlIGF1ZGlvIGNhcGFiaWxpdHkgZm9yIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoY29kZWNzKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPE93dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzPn0gY29kZWNzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkF1ZGlvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5jb2RlY3MgPSBjb2RlY3M7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSB2aWRlbyBjYXBhYmlsaXR5IGZvciBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjcywgcmVzb2x1dGlvbnMsIGZyYW1lUmF0ZXMsIGJpdHJhdGVNdWx0aXBsaWVycyxcbiAgICAgIGtleUZyYW1lSW50ZXJ2YWxzKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPE93dC5CYXNlLlZpZGVvQ29kZWNQYXJhbWV0ZXJzPn0gY29kZWNzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5jb2RlY3MgPSBjb2RlY3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPE93dC5CYXNlLlJlc29sdXRpb24+fSByZXNvbHV0aW9uc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbnMgPSByZXNvbHV0aW9ucztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48bnVtYmVyPn0gZnJhbWVSYXRlc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMuZnJhbWVSYXRlcyA9IGZyYW1lUmF0ZXM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPG51bWJlcj59IGJpdHJhdGVNdWx0aXBsaWVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMuYml0cmF0ZU11bHRpcGxpZXJzID0gYml0cmF0ZU11bHRpcGxpZXJzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FycmF5LjxudW1iZXI+fSBrZXlGcmFtZUludGVydmFsc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMua2V5RnJhbWVJbnRlcnZhbHMgPSBrZXlGcmFtZUludGVydmFscztcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBTdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSBjYXBhYmlsaXR5IGZvciBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpbywgdmlkZW8pIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkNvbmZlcmVuY2UuQXVkaW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXN9IGF1ZGlvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMuYXVkaW8gPSBhdWRpbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXN9IHZpZGVvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICAgICAqL1xuICAgIHRoaXMudmlkZW8gPSB2aWRlbztcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBBdWRpb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgUmVwcmVzZW50cyB0aGUgYXVkaW8gY29uc3RyYWludHMgZm9yIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvU3Vic2NyaXB0aW9uQ29uc3RyYWludHMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlY3MpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/QXJyYXkuPE93dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzPn0gY29kZWNzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkF1ZGlvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBDb2RlY3MgYWNjZXB0ZWQuIElmIG5vbmUgb2YgYGNvZGVjc2Agc3VwcG9ydGVkIGJ5IGJvdGggc2lkZXMsIGNvbm5lY3Rpb24gZmFpbHMuIExlYXZlIGl0IHVuZGVmaW5lZCB3aWxsIHVzZSBhbGwgcG9zc2libGUgY29kZWNzLlxuICAgICAqL1xuICAgIHRoaXMuY29kZWNzID0gY29kZWNzO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSB2aWRlbyBjb25zdHJhaW50cyBmb3Igc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50cyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjcywgcmVzb2x1dGlvbiwgZnJhbWVSYXRlLCBiaXRyYXRlTXVsdGlwbGllcixcbiAgICAgIGtleUZyYW1lSW50ZXJ2YWwsIHJpZCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9BcnJheS48T3d0LkJhc2UuVmlkZW9Db2RlY1BhcmFtZXRlcnM+fSBjb2RlY3NcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIENvZGVjcyBhY2NlcHRlZC4gSWYgbm9uZSBvZiBgY29kZWNzYCBzdXBwb3J0ZWQgYnkgYm90aCBzaWRlcywgY29ubmVjdGlvbiBmYWlscy4gTGVhdmUgaXQgdW5kZWZpbmVkIHdpbGwgdXNlIGFsbCBwb3NzaWJsZSBjb2RlY3MuXG4gICAgICovXG4gICAgdGhpcy5jb2RlY3MgPSBjb2RlY3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLlJlc29sdXRpb259IHJlc29sdXRpb25cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIE9ubHkgcmVzb2x1dGlvbnMgbGlzdGVkIGluIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IHJlc29sdXRpb247XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gZnJhbWVSYXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBPbmx5IGZyYW1lUmF0ZXMgbGlzdGVkIGluIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMuZnJhbWVSYXRlID0gZnJhbWVSYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGJpdHJhdGVNdWx0aXBsaWVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBPbmx5IGJpdHJhdGVNdWx0aXBsaWVycyBsaXN0ZWQgaW4gT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5iaXRyYXRlTXVsdGlwbGllciA9IGJpdHJhdGVNdWx0aXBsaWVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGtleUZyYW1lSW50ZXJ2YWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIE9ubHkga2V5RnJhbWVJbnRlcnZhbHMgbGlzdGVkIGluIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMua2V5RnJhbWVJbnRlcnZhbCA9IGtleUZyYW1lSW50ZXJ2YWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBSZXN0cmljdGlvbiBpZGVudGlmaWVyIHRvIGlkZW50aWZ5IHRoZSBSVFAgU3RyZWFtcyB3aXRoaW4gYW4gUlRQIHNlc3Npb24uIFdoZW4gcmlkIGlzIHNwZWNpZmllZCwgb3RoZXIgY29uc3RyYWludHMgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqL1xuICAgIHRoaXMucmlkID0gcmlkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFN1YnNjcmliZU9wdGlvbnNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBTdWJzY3JpYmVPcHRpb25zIGRlZmluZXMgb3B0aW9ucyBmb3Igc3Vic2NyaWJpbmcgYSBPd3QuQmFzZS5SZW1vdGVTdHJlYW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVPcHRpb25zIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoYXVkaW8sIHZpZGVvLCB0cmFuc3BvcnQpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkNvbmZlcmVuY2UuQXVkaW9TdWJzY3JpcHRpb25Db25zdHJhaW50c30gYXVkaW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaWJlT3B0aW9uc1xuICAgICAqL1xuICAgIHRoaXMuYXVkaW8gPSBhdWRpbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c30gdmlkZW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaWJlT3B0aW9uc1xuICAgICAqL1xuICAgIHRoaXMudmlkZW8gPSB2aWRlbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuVHJhbnNwb3J0Q29uc3RyYWludHN9IHRyYW5zcG9ydFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpYmVPcHRpb25zXG4gICAgICovXG4gICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIGRlZmluZXMgb3B0aW9ucyBmb3IgdXBkYXRpbmcgYSBzdWJzY3JpcHRpb24ncyB2aWRlbyBwYXJ0LlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLlJlc29sdXRpb259IHJlc29sdXRpb25cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gICAgICogQGRlc2MgT25seSByZXNvbHV0aW9ucyBsaXN0ZWQgaW4gVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9uID0gdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGZyYW1lUmF0ZXNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gICAgICogQGRlc2MgT25seSBmcmFtZVJhdGVzIGxpc3RlZCBpbiBWaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyBhcmUgYWxsb3dlZC5cbiAgICAgKi9cbiAgICB0aGlzLmZyYW1lUmF0ZSA9IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBiaXRyYXRlTXVsdGlwbGllcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gICAgICogQGRlc2MgT25seSBiaXRyYXRlTXVsdGlwbGllcnMgbGlzdGVkIGluIFZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMuYml0cmF0ZU11bHRpcGxpZXJzID0gdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGtleUZyYW1lSW50ZXJ2YWxzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9uc1xuICAgICAqIEBkZXNjIE9ubHkga2V5RnJhbWVJbnRlcnZhbHMgbGlzdGVkIGluIFZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMua2V5RnJhbWVJbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBTdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9ucyBkZWZpbmVzIG9wdGlvbnMgZm9yIHVwZGF0aW5nIGEgc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9ucyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9WaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnN9IHZpZGVvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAgICAgKi9cbiAgICB0aGlzLnZpZGVvID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvblxuICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFN1YnNjcmlwdGlvbiBpcyBhIHJlY2VpdmVyIGZvciByZWNlaXZpbmcgYSBzdHJlYW0uXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgfCBBcmd1bWVudCBUeXBlICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgZW5kZWQgICAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFN1YnNjcmlwdGlvbiBpcyBlbmRlZC4gfFxuICogfCBlcnJvciAgICAgICAgICAgfCBFcnJvckV2ZW50ICAgICAgIHwgQW4gZXJyb3Igb2NjdXJyZWQgb24gdGhlIHN1YnNjcmlwdGlvbi4gfFxuICogfCBtdXRlICAgICAgICAgICAgfCBNdXRlRXZlbnQgICAgICAgIHwgUHVibGljYXRpb24gaXMgbXV0ZWQuIFJlbW90ZSBzaWRlIHN0b3BwZWQgc2VuZGluZyBhdWRpbyBhbmQvb3IgdmlkZW8gZGF0YS4gfFxuICogfCB1bm11dGUgICAgICAgICAgfCBNdXRlRXZlbnQgICAgICAgIHwgUHVibGljYXRpb24gaXMgdW5tdXRlZC4gUmVtb3RlIHNpZGUgY29udGludWVkIHNlbmRpbmcgYXVkaW8gYW5kL29yIHZpZGVvIGRhdGEuIHxcbiAqXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvbiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGlkLCBzdG9wLCBnZXRTdGF0cywgbXV0ZSwgdW5tdXRlLCBhcHBseU9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghaWQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lEIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBpZCxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gc3RvcFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIFN0b3AgY2VydGFpbiBzdWJzY3JpcHRpb24uIE9uY2UgYSBzdWJzY3JpcHRpb24gaXMgc3RvcHBlZCwgaXQgY2Fubm90IGJlIHJlY292ZXJlZC5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uXG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLnN0b3AgPSBzdG9wO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBnZXRTdGF0c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIEdldCBzdGF0cyBvZiB1bmRlcmx5aW5nIFBlZXJDb25uZWN0aW9uLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSVENTdGF0c1JlcG9ydCwgRXJyb3I+fVxuICAgICAqL1xuICAgIHRoaXMuZ2V0U3RhdHMgPSBnZXRTdGF0cztcbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gbXV0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIFN0b3AgcmVldmluZyBkYXRhIGZyb20gcmVtb3RlIGVuZHBvaW50LlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge093dC5CYXNlLlRyYWNrS2luZCB9IGtpbmQgS2luZCBvZiB0cmFja3MgdG8gYmUgbXV0ZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5kZWZpbmVkLCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy5tdXRlID0gbXV0ZTtcbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gdW5tdXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgQ29udGludWUgcmVldmluZyBkYXRhIGZyb20gcmVtb3RlIGVuZHBvaW50LlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge093dC5CYXNlLlRyYWNrS2luZCB9IGtpbmQgS2luZCBvZiB0cmFja3MgdG8gYmUgdW5tdXRlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQsIEVycm9yPn1cbiAgICAgKi9cbiAgICB0aGlzLnVubXV0ZSA9IHVubXV0ZTtcbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gYXBwbHlPcHRpb25zXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgVXBkYXRlIHN1YnNjcmlwdGlvbiB3aXRoIGdpdmVuIG9wdGlvbnMuXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7T3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9ucyB9IG9wdGlvbnMgU3Vic2NyaXB0aW9uIHVwZGF0ZSBvcHRpb25zLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZCwgRXJyb3I+fVxuICAgICAqL1xuICAgIHRoaXMuYXBwbHlPcHRpb25zID0gYXBwbHlPcHRpb25zO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgYmFzZSBmcm9tICcuL2Jhc2UvZXhwb3J0LmpzJztcbmltcG9ydCAqIGFzIHAycCBmcm9tICcuL3AycC9leHBvcnQuanMnO1xuaW1wb3J0ICogYXMgY29uZmVyZW5jZSBmcm9tICcuL2NvbmZlcmVuY2UvZXhwb3J0LmpzJztcblxuLyoqXG4gKiBCYXNlIG9iamVjdHMgZm9yIGJvdGggUDJQIGFuZCBjb25mZXJlbmNlLlxuICogQG5hbWVzcGFjZSBPd3QuQmFzZVxuICovXG5leHBvcnQgY29uc3QgQmFzZSA9IGJhc2U7XG5cbi8qKlxuICogUDJQIFdlYlJUQyBjb25uZWN0aW9ucy5cbiAqIEBuYW1lc3BhY2UgT3d0LlAyUFxuICovXG5leHBvcnQgY29uc3QgUDJQID0gcDJwO1xuXG4vKipcbiAqIFdlYlJUQyBjb25uZWN0aW9ucyB3aXRoIGNvbmZlcmVuY2Ugc2VydmVyLlxuICogQG5hbWVzcGFjZSBPd3QuQ29uZmVyZW5jZVxuICovXG5leHBvcnQgY29uc3QgQ29uZmVyZW5jZSA9IGNvbmZlcmVuY2U7XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGNvbnN0IGVycm9ycyA9IHtcbiAgLy8gMjEwMC0yOTk5IGZvciBQMlAgZXJyb3JzXG4gIC8vIDIxMDAtMjE5OSBmb3IgY29ubmVjdGlvbiBlcnJvcnNcbiAgLy8gMjEwMC0yMTA5IGZvciBzZXJ2ZXIgZXJyb3JzXG4gIFAyUF9DT05OX1NFUlZFUl9VTktOT1dOOiB7XG4gICAgY29kZTogMjEwMCxcbiAgICBtZXNzYWdlOiAnU2VydmVyIHVua25vd24gZXJyb3IuJyxcbiAgfSxcbiAgUDJQX0NPTk5fU0VSVkVSX1VOQVZBSUxBQkxFOiB7XG4gICAgY29kZTogMjEwMSxcbiAgICBtZXNzYWdlOiAnU2VydmVyIGlzIHVuYXZhbGlhYmxlLicsXG4gIH0sXG4gIFAyUF9DT05OX1NFUlZFUl9CVVNZOiB7XG4gICAgY29kZTogMjEwMixcbiAgICBtZXNzYWdlOiAnU2VydmVyIGlzIHRvbyBidXN5LicsXG4gIH0sXG4gIFAyUF9DT05OX1NFUlZFUl9OT1RfU1VQUE9SVEVEOiB7XG4gICAgY29kZTogMjEwMyxcbiAgICBtZXNzYWdlOiAnTWV0aG9kIGhhcyBub3QgYmVlbiBzdXBwb3J0ZWQgYnkgc2VydmVyLicsXG4gIH0sXG4gIC8vIDIxMTAtMjExOSBmb3IgY2xpZW50IGVycm9yc1xuICBQMlBfQ09OTl9DTElFTlRfVU5LTk9XTjoge1xuICAgIGNvZGU6IDIxMTAsXG4gICAgbWVzc2FnZTogJ0NsaWVudCB1bmtub3duIGVycm9yLicsXG4gIH0sXG4gIFAyUF9DT05OX0NMSUVOVF9OT1RfSU5JVElBTElaRUQ6IHtcbiAgICBjb2RlOiAyMTExLFxuICAgIG1lc3NhZ2U6ICdDb25uZWN0aW9uIGlzIG5vdCBpbml0aWFsaXplZC4nLFxuICB9LFxuICAvLyAyMTIwLTIxMjkgZm9yIGF1dGhlbnRpY2F0aW9uIGVycm9yc1xuICBQMlBfQ09OTl9BVVRIX1VOS05PV046IHtcbiAgICBjb2RlOiAyMTIwLFxuICAgIG1lc3NhZ2U6ICdBdXRoZW50aWNhdGlvbiB1bmtub3duIGVycm9yLicsXG4gIH0sXG4gIFAyUF9DT05OX0FVVEhfRkFJTEVEOiB7XG4gICAgY29kZTogMjEyMSxcbiAgICBtZXNzYWdlOiAnV3JvbmcgdXNlcm5hbWUgb3IgdG9rZW4uJyxcbiAgfSxcbiAgLy8gMjIwMC0yMjk5IGZvciBtZXNzYWdlIHRyYW5zcG9ydCBlcnJvcnNcbiAgUDJQX01FU1NBR0lOR19UQVJHRVRfVU5SRUFDSEFCTEU6IHtcbiAgICBjb2RlOiAyMjAxLFxuICAgIG1lc3NhZ2U6ICdSZW1vdGUgdXNlciBjYW5ub3QgYmUgcmVhY2hlZC4nLFxuICB9LFxuICBQMlBfQ0xJRU5UX0RFTklFRDoge1xuICAgIGNvZGU6IDIyMDIsXG4gICAgbWVzc2FnZTogJ1VzZXIgaXMgZGVuaWVkLicsXG4gIH0sXG4gIC8vIDIzMDEtMjM5OSBmb3IgY2hhdCByb29tIGVycm9yc1xuICAvLyAyNDAxLTI0OTkgZm9yIGNsaWVudCBlcnJvcnNcbiAgUDJQX0NMSUVOVF9VTktOT1dOOiB7XG4gICAgY29kZTogMjQwMCxcbiAgICBtZXNzYWdlOiAnVW5rbm93biBlcnJvcnMuJyxcbiAgfSxcbiAgUDJQX0NMSUVOVF9VTlNVUFBPUlRFRF9NRVRIT0Q6IHtcbiAgICBjb2RlOiAyNDAxLFxuICAgIG1lc3NhZ2U6ICdUaGlzIG1ldGhvZCBpcyB1bnN1cHBvcnRlZCBpbiBjdXJyZW50IGJyb3dzZXIuJyxcbiAgfSxcbiAgUDJQX0NMSUVOVF9JTExFR0FMX0FSR1VNRU5UOiB7XG4gICAgY29kZTogMjQwMixcbiAgICBtZXNzYWdlOiAnSWxsZWdhbCBhcmd1bWVudC4nLFxuICB9LFxuICBQMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEU6IHtcbiAgICBjb2RlOiAyNDAzLFxuICAgIG1lc3NhZ2U6ICdJbnZhbGlkIHBlZXIgc3RhdGUuJyxcbiAgfSxcbiAgUDJQX0NMSUVOVF9OT1RfQUxMT1dFRDoge1xuICAgIGNvZGU6IDI0MDQsXG4gICAgbWVzc2FnZTogJ1JlbW90ZSB1c2VyIGlzIG5vdCBhbGxvd2VkLicsXG4gIH0sXG4gIC8vIDI1MDEtMjU5OSBmb3IgV2ViUlRDIGVycm9zLlxuICBQMlBfV0VCUlRDX1VOS05PV046IHtcbiAgICBjb2RlOiAyNTAwLFxuICAgIG1lc3NhZ2U6ICdXZWJSVEMgZXJyb3IuJyxcbiAgfSxcbiAgUDJQX1dFQlJUQ19TRFA6IHtcbiAgICBjb2RlOiAyNTAyLFxuICAgIG1lc3NhZ2U6ICdTRFAgZXJyb3IuJyxcbiAgfSxcbn07XG5cbi8qKlxuICogQGZ1bmN0aW9uIGdldEVycm9yQnlDb2RlXG4gKiBAZGVzYyBHZXQgZXJyb3Igb2JqZWN0IGJ5IGVycm9yIGNvZGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JDb2RlIEVycm9yIGNvZGUuXG4gKiBAcmV0dXJuIHtPd3QuUDJQLkVycm9yfSBFcnJvciBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvckJ5Q29kZShlcnJvckNvZGUpIHtcbiAgY29uc3QgY29kZUVycm9yTWFwID0ge1xuICAgIDIxMDA6IGVycm9ycy5QMlBfQ09OTl9TRVJWRVJfVU5LTk9XTixcbiAgICAyMTAxOiBlcnJvcnMuUDJQX0NPTk5fU0VSVkVSX1VOQVZBSUxBQkxFLFxuICAgIDIxMDI6IGVycm9ycy5QMlBfQ09OTl9TRVJWRVJfQlVTWSxcbiAgICAyMTAzOiBlcnJvcnMuUDJQX0NPTk5fU0VSVkVSX05PVF9TVVBQT1JURUQsXG4gICAgMjExMDogZXJyb3JzLlAyUF9DT05OX0NMSUVOVF9VTktOT1dOLFxuICAgIDIxMTE6IGVycm9ycy5QMlBfQ09OTl9DTElFTlRfTk9UX0lOSVRJQUxJWkVELFxuICAgIDIxMjA6IGVycm9ycy5QMlBfQ09OTl9BVVRIX1VOS05PV04sXG4gICAgMjEyMTogZXJyb3JzLlAyUF9DT05OX0FVVEhfRkFJTEVELFxuICAgIDIyMDE6IGVycm9ycy5QMlBfTUVTU0FHSU5HX1RBUkdFVF9VTlJFQUNIQUJMRSxcbiAgICAyNDAwOiBlcnJvcnMuUDJQX0NMSUVOVF9VTktOT1dOLFxuICAgIDI0MDE6IGVycm9ycy5QMlBfQ0xJRU5UX1VOU1VQUE9SVEVEX01FVEhPRCxcbiAgICAyNDAyOiBlcnJvcnMuUDJQX0NMSUVOVF9JTExFR0FMX0FSR1VNRU5ULFxuICAgIDI0MDM6IGVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUsXG4gICAgMjQwNDogZXJyb3JzLlAyUF9DTElFTlRfTk9UX0FMTE9XRUQsXG4gICAgMjUwMDogZXJyb3JzLlAyUF9XRUJSVENfVU5LTk9XTixcbiAgICAyNTAxOiBlcnJvcnMuUDJQX1dFQlJUQ19TRFAsXG4gIH07XG4gIHJldHVybiBjb2RlRXJyb3JNYXBbZXJyb3JDb2RlXTtcbn1cblxuLyoqXG4gKiBAY2xhc3MgUDJQRXJyb3JcbiAqIEBjbGFzc0Rlc2MgVGhlIFAyUEVycm9yIG9iamVjdCByZXByZXNlbnRzIGFuIGVycm9yIGluIFAyUCBtb2RlLlxuICogQG1lbWJlck9mIE93dC5QMlBcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFAyUEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihlcnJvciwgbWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIGlmICh0eXBlb2YgZXJyb3IgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLmNvZGUgPSBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2RlID0gZXJyb3IuY29kZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQge2RlZmF1bHQgYXMgUDJQQ2xpZW50fSBmcm9tICcuL3AycGNsaWVudC5qcyc7XG5leHBvcnQge1AyUEVycm9yfSBmcm9tICcuL2Vycm9yLmpzJztcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZ2xvYmFsIE1hcCwgUHJvbWlzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyLCBPd3RFdmVudH0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5pbXBvcnQgKiBhcyBFcnJvck1vZHVsZSBmcm9tICcuL2Vycm9yLmpzJztcbmltcG9ydCBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWwgZnJvbSAnLi9wZWVyY29ubmVjdGlvbi1jaGFubmVsLmpzJztcblxuY29uc3QgQ29ubmVjdGlvblN0YXRlID0ge1xuICBSRUFEWTogMSxcbiAgQ09OTkVDVElORzogMixcbiAgQ09OTkVDVEVEOiAzLFxufTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8qKlxuICogQGNsYXNzIFAyUENsaWVudENvbmZpZ3VyYXRpb25cbiAqIEBjbGFzc0Rlc2MgQ29uZmlndXJhdGlvbiBmb3IgUDJQQ2xpZW50LlxuICogQG1lbWJlck9mIE93dC5QMlBcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUDJQQ2xpZW50Q29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAvKipcbiAgICogQG1lbWJlciB7P0FycmF5PE93dC5CYXNlLkF1ZGlvRW5jb2RpbmdQYXJhbWV0ZXJzPn0gYXVkaW9FbmNvZGluZ1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgRW5jb2RpbmcgcGFyYW1ldGVycyBmb3IgcHVibGlzaGluZyBhdWRpbyB0cmFja3MuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudENvbmZpZ3VyYXRpb25cbiAgICovXG4gIHRoaXMuYXVkaW9FbmNvZGluZyA9IHVuZGVmaW5lZDtcbiAgLyoqXG4gICAqIEBtZW1iZXIgez9BcnJheTxPd3QuQmFzZS5WaWRlb0VuY29kaW5nUGFyYW1ldGVycz59IHZpZGVvRW5jb2RpbmdcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIEVuY29kaW5nIHBhcmFtZXRlcnMgZm9yIHB1Ymxpc2hpbmcgdmlkZW8gdHJhY2tzLlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRDb25maWd1cmF0aW9uXG4gICAqL1xuICB0aGlzLnZpZGVvRW5jb2RpbmcgPSB1bmRlZmluZWQ7XG4gIC8qKlxuICAgKiBAbWVtYmVyIHs/UlRDQ29uZmlndXJhdGlvbn0gcnRjQ29uZmlndXJhdGlvblxuICAgKiBAaW5zdGFuY2VcbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50Q29uZmlndXJhdGlvblxuICAgKiBAZGVzYyBJdCB3aWxsIGJlIHVzZWQgZm9yIGNyZWF0aW5nIFBlZXJDb25uZWN0aW9uLlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvd2VicnRjLyNydGNjb25maWd1cmF0aW9uLWRpY3Rpb25hcnl8UlRDQ29uZmlndXJhdGlvbiBEaWN0aW9uYXJ5IG9mIFdlYlJUQyAxLjB9LlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBGb2xsb3dpbmcgb2JqZWN0IGNhbiBiZSBzZXQgdG8gcDJwQ2xpZW50Q29uZmlndXJhdGlvbi5ydGNDb25maWd1cmF0aW9uLlxuICAgKiB7XG4gICAqICAgaWNlU2VydmVyczogW3tcbiAgICogICAgICB1cmxzOiBcInN0dW46ZXhhbXBsZS5jb206MzQ3OFwiXG4gICAqICAgfSwge1xuICAgKiAgICAgdXJsczogW1xuICAgKiAgICAgICBcInR1cm46ZXhhbXBsZS5jb206MzQ3OD90cmFuc3BvcnQ9dWRwXCIsXG4gICAqICAgICAgIFwidHVybjpleGFtcGxlLmNvbTozNDc4P3RyYW5zcG9ydD10Y3BcIlxuICAgKiAgICAgXSxcbiAgICogICAgICBjcmVkZW50aWFsOiBcInBhc3N3b3JkXCIsXG4gICAqICAgICAgdXNlcm5hbWU6IFwidXNlcm5hbWVcIlxuICAgKiAgIH1cbiAgICogfVxuICAgKi9cbiAgdGhpcy5ydGNDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xufTtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAY2xhc3MgUDJQQ2xpZW50XG4gKiBAY2xhc3NEZXNjIFRoZSBQMlBDbGllbnQgaGFuZGxlcyBQZWVyQ29ubmVjdGlvbnMgYmV0d2VlbiBkaWZmZXJlbnQgY2xpZW50cy5cbiAqIEV2ZW50czpcbiAqXG4gKiB8IEV2ZW50IE5hbWUgICAgICAgICAgICB8IEFyZ3VtZW50IFR5cGUgICAgfCBGaXJlZCB3aGVuICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBzdHJlYW1hZGRlZCAgICAgICAgICAgfCBTdHJlYW1FdmVudCAgICAgIHwgQSBuZXcgc3RyZWFtIGlzIHNlbnQgZnJvbSByZW1vdGUgZW5kcG9pbnQuIHxcbiAqIHwgbWVzc2FnZXJlY2VpdmVkICAgICAgIHwgTWVzc2FnZUV2ZW50ICAgICB8IEEgbmV3IG1lc3NhZ2UgaXMgcmVjZWl2ZWQuIHxcbiAqIHwgc2VydmVyZGlzY29ubmVjdGVkICAgIHwgT3d0RXZlbnQgICAgICAgICB8IERpc2Nvbm5lY3RlZCBmcm9tIHNpZ25hbGluZyBzZXJ2ZXIuIHxcbiAqXG4gKiBAbWVtYmVyb2YgT3d0LlAyUFxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7P093dC5QMlAuUDJQQ2xpZW50Q29uZmlndXJhdGlvbiB9IGNvbmZpZ3VyYXRpb24gQ29uZmlndXJhdGlvbiBmb3IgT3d0LlAyUC5QMlBDbGllbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gc2lnbmFsaW5nQ2hhbm5lbCBBIGNoYW5uZWwgZm9yIHNlbmRpbmcgYW5kIHJlY2VpdmluZyBzaWduYWxpbmcgbWVzc2FnZXMuXG4gKi9cbmNvbnN0IFAyUENsaWVudCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24sIHNpZ25hbGluZ0NoYW5uZWwpIHtcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldyBFdmVudERpc3BhdGNoZXIoKSk7XG4gIGNvbnN0IGNvbmZpZyA9IGNvbmZpZ3VyYXRpb247XG4gIGNvbnN0IHNpZ25hbGluZyA9IHNpZ25hbGluZ0NoYW5uZWw7XG4gIGNvbnN0IGNoYW5uZWxzID0gbmV3IE1hcCgpOyAvLyBNYXAgb2YgUGVlckNvbm5lY3Rpb25DaGFubmVscy5cbiAgY29uc3Qgc2VsZj10aGlzO1xuICBsZXQgc3RhdGUgPSBDb25uZWN0aW9uU3RhdGUuUkVBRFk7XG4gIGxldCBteUlkO1xuXG4gIHNpZ25hbGluZy5vbk1lc3NhZ2UgPSBmdW5jdGlvbihvcmlnaW4sIG1lc3NhZ2UpIHtcbiAgICBMb2dnZXIuZGVidWcoJ1JlY2VpdmVkIHNpZ25hbGluZyBtZXNzYWdlIGZyb20gJyArIG9yaWdpbiArICc6ICcgKyBtZXNzYWdlKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcbiAgICBpZiAoZGF0YS50eXBlID09PSAnY2hhdC1jbG9zZWQnKSB7XG4gICAgICBpZiAoY2hhbm5lbHMuaGFzKG9yaWdpbikpIHtcbiAgICAgICAgZ2V0T3JDcmVhdGVDaGFubmVsKG9yaWdpbiwgZmFsc2UpLm9uTWVzc2FnZShkYXRhKTtcbiAgICAgICAgY2hhbm5lbHMuZGVsZXRlKG9yaWdpbik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZWxmLmFsbG93ZWRSZW1vdGVJZHMuaW5kZXhPZihvcmlnaW4pID49IDApIHtcbiAgICAgIGdldE9yQ3JlYXRlQ2hhbm5lbChvcmlnaW4sIGZhbHNlKS5vbk1lc3NhZ2UoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbmRTaWduYWxpbmdNZXNzYWdlKG9yaWdpbiwgJ2NoYXQtY2xvc2VkJyxcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9ERU5JRUQpO1xuICAgIH1cbiAgfTtcblxuICBzaWduYWxpbmcub25TZXJ2ZXJEaXNjb25uZWN0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZSA9IENvbm5lY3Rpb25TdGF0ZS5SRUFEWTtcbiAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IE93dEV2ZW50KCdzZXJ2ZXJkaXNjb25uZWN0ZWQnKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXIge2FycmF5fSBhbGxvd2VkUmVtb3RlSWRzXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgT25seSBhbGxvd2VkIHJlbW90ZSBlbmRwb2ludCBJRHMgYXJlIGFibGUgdG8gcHVibGlzaCBzdHJlYW0gb3Igc2VuZCBtZXNzYWdlIHRvIGN1cnJlbnQgZW5kcG9pbnQuIFJlbW92aW5nIGFuIElEIGZyb20gYWxsb3dlZFJlbW90ZUlkcyBkb2VzIHN0b3AgZXhpc3RpbmcgY29ubmVjdGlvbiB3aXRoIGNlcnRhaW4gZW5kcG9pbnQuIFBsZWFzZSBjYWxsIHN0b3AgdG8gc3RvcCB0aGUgUGVlckNvbm5lY3Rpb24uXG4gICAqL1xuICB0aGlzLmFsbG93ZWRSZW1vdGVJZHM9W107XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjb25uZWN0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBDb25uZWN0IHRvIHNpZ25hbGluZyBzZXJ2ZXIuIFNpbmNlIHNpZ25hbGluZyBjYW4gYmUgY3VzdG9taXplZCwgdGhpcyBtZXRob2QgZG9lcyBub3QgZGVmaW5lIGhvdyBhIHRva2VuIGxvb2tzIGxpa2UuIFNESyBwYXNzZXMgdG9rZW4gdG8gc2lnbmFsaW5nIGNoYW5uZWwgd2l0aG91dCBjaGFuZ2VzLlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIEEgdG9rZW4gZm9yIGNvbm5lY3RpbmcgdG8gc2lnbmFsaW5nIHNlcnZlci4gVGhlIGZvcm1hdCBvZiB0aGlzIHRva2VuIGRlcGVuZHMgb24gc2lnbmFsaW5nIHNlcnZlcidzIHJlcXVpcmVtZW50LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPG9iamVjdCwgRXJyb3I+fSBJdCByZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIGFuIG9iamVjdCByZXR1cm5lZCBieSBzaWduYWxpbmcgY2hhbm5lbCBvbmNlIHNpZ25hbGluZyBjaGFubmVsIHJlcG9ydHMgY29ubmVjdGlvbiBoYXMgYmVlbiBlc3RhYmxpc2hlZC5cbiAgICovXG4gIHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgaWYgKHN0YXRlID09PSBDb25uZWN0aW9uU3RhdGUuUkVBRFkpIHtcbiAgICAgIHN0YXRlID0gQ29ubmVjdGlvblN0YXRlLkNPTk5FQ1RJTkc7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdJbnZhbGlkIGNvbm5lY3Rpb24gc3RhdGU6ICcgKyBzdGF0ZSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNpZ25hbGluZy5jb25uZWN0KHRva2VuKS50aGVuKChpZCkgPT4ge1xuICAgICAgICBteUlkID0gaWQ7XG4gICAgICAgIHN0YXRlID0gQ29ubmVjdGlvblN0YXRlLkNPTk5FQ1RFRDtcbiAgICAgICAgcmVzb2x2ZShteUlkKTtcbiAgICAgIH0sIChlcnJDb2RlKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoRXJyb3JNb2R1bGUuZ2V0RXJyb3JCeUNvZGUoXG4gICAgICAgICAgICBlcnJDb2RlKSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBkaXNjb25uZWN0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBEaXNjb25uZWN0IGZyb20gdGhlIHNpZ25hbGluZyBjaGFubmVsLiBJdCBzdG9wcyBhbGwgZXhpc3Rpbmcgc2Vzc2lvbnMgd2l0aCByZW1vdGUgZW5kcG9pbnRzLlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRcbiAgICovXG4gIHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChzdGF0ZSA9PSBDb25uZWN0aW9uU3RhdGUuUkVBRFkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCk9PntcbiAgICAgIGNoYW5uZWwuc3RvcCgpO1xuICAgIH0pO1xuICAgIGNoYW5uZWxzLmNsZWFyKCk7XG4gICAgc2lnbmFsaW5nLmRpc2Nvbm5lY3QoKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHB1Ymxpc2hcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFB1Ymxpc2ggYSBzdHJlYW0gdG8gYSByZW1vdGUgZW5kcG9pbnQuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlSWQgUmVtb3RlIGVuZHBvaW50J3MgSUQuXG4gICAqIEBwYXJhbSB7T3d0LkJhc2UuTG9jYWxTdHJlYW19IHN0cmVhbSBBbiBPd3QuQmFzZS5Mb2NhbFN0cmVhbSB0byBiZSBwdWJsaXNoZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8T3d0LkJhc2UuUHVibGljYXRpb24sIEVycm9yPn0gQSBwcm9taXNlZCB0aGF0IHJlc29sdmVzIHdoZW4gcmVtb3RlIHNpZGUgcmVjZWl2ZWQgdGhlIGNlcnRhaW4gc3RyZWFtLiBIb3dldmVyLCByZW1vdGUgZW5kcG9pbnQgbWF5IG5vdCBkaXNwbGF5IHRoaXMgc3RyZWFtLCBvciBpZ25vcmUgaXQuXG4gICAqL1xuICB0aGlzLnB1Ymxpc2ggPSBmdW5jdGlvbihyZW1vdGVJZCwgc3RyZWFtKSB7XG4gICAgaWYgKHN0YXRlICE9PSBDb25uZWN0aW9uU3RhdGUuQ09OTkVDVEVEKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUsXG4gICAgICAgICAgJ1AyUCBDbGllbnQgaXMgbm90IGNvbm5lY3RlZCB0byBzaWduYWxpbmcgY2hhbm5lbC4nKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFsbG93ZWRSZW1vdGVJZHMuaW5kZXhPZihyZW1vdGVJZCkgPCAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX05PVF9BTExPV0VEKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0T3JDcmVhdGVDaGFubmVsKHJlbW90ZUlkLCB0cnVlKS5wdWJsaXNoKHN0cmVhbSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc2VuZFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgU2VuZCBhIG1lc3NhZ2UgdG8gcmVtb3RlIGVuZHBvaW50LlxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlbW90ZUlkIFJlbW90ZSBlbmRwb2ludCdzIElELlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBNZXNzYWdlIHRvIGJlIHNlbnQuIEl0IHNob3VsZCBiZSBhIHN0cmluZy5cbiAgICogQHJldHVybiB7UHJvbWlzZTx1bmRlZmluZWQsIEVycm9yPn0gSXQgcmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgd2hlbiByZW1vdGUgZW5kcG9pbnQgcmVjZWl2ZWQgY2VydGFpbiBtZXNzYWdlLlxuICAgKi9cbiAgdGhpcy5zZW5kPWZ1bmN0aW9uKHJlbW90ZUlkLCBtZXNzYWdlKSB7XG4gICAgaWYgKHN0YXRlICE9PSBDb25uZWN0aW9uU3RhdGUuQ09OTkVDVEVEKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUsXG4gICAgICAgICAgJ1AyUCBDbGllbnQgaXMgbm90IGNvbm5lY3RlZCB0byBzaWduYWxpbmcgY2hhbm5lbC4nKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFsbG93ZWRSZW1vdGVJZHMuaW5kZXhPZihyZW1vdGVJZCkgPCAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX05PVF9BTExPV0VEKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0T3JDcmVhdGVDaGFubmVsKHJlbW90ZUlkLCB0cnVlKS5zZW5kKG1lc3NhZ2UpKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHN0b3BcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIENsZWFuIGFsbCByZXNvdXJjZXMgYXNzb2NpYXRlZCB3aXRoIGdpdmVuIHJlbW90ZSBlbmRwb2ludC4gSXQgbWF5IGluY2x1ZGUgUlRDUGVlckNvbm5lY3Rpb24sIFJUQ1J0cFRyYW5zY2VpdmVyIGFuZCBSVENEYXRhQ2hhbm5lbC4gSXQgc3RpbGwgcG9zc2libGUgdG8gcHVibGlzaCBhIHN0cmVhbSwgb3Igc2VuZCBhIG1lc3NhZ2UgdG8gZ2l2ZW4gcmVtb3RlIGVuZHBvaW50IGFmdGVyIHN0b3AuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlSWQgUmVtb3RlIGVuZHBvaW50J3MgSUQuXG4gICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICovXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKHJlbW90ZUlkKSB7XG4gICAgaWYgKCFjaGFubmVscy5oYXMocmVtb3RlSWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZyhcbiAgICAgICAgICAnTm8gUGVlckNvbm5lY3Rpb24gYmV0d2VlbiBjdXJyZW50IGVuZHBvaW50IGFuZCBzcGVjaWZpYyByZW1vdGUgJyArXG4gICAgICAgICAgJ2VuZHBvaW50LidcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNoYW5uZWxzLmdldChyZW1vdGVJZCkuc3RvcCgpO1xuICAgIGNoYW5uZWxzLmRlbGV0ZShyZW1vdGVJZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBnZXRTdGF0c1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgR2V0IHN0YXRzIG9mIHVuZGVybHlpbmcgUGVlckNvbm5lY3Rpb24uXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlSWQgUmVtb3RlIGVuZHBvaW50J3MgSUQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UlRDU3RhdHNSZXBvcnQsIEVycm9yPn0gSXQgcmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCBhbiBSVENTdGF0c1JlcG9ydCBvciByZWplY3Qgd2l0aCBhbiBFcnJvciBpZiB0aGVyZSBpcyBubyBjb25uZWN0aW9uIHdpdGggc3BlY2lmaWMgdXNlci5cbiAgICovXG4gIHRoaXMuZ2V0U3RhdHMgPSBmdW5jdGlvbihyZW1vdGVJZCkge1xuICAgIGlmICghY2hhbm5lbHMuaGFzKHJlbW90ZUlkKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFLFxuICAgICAgICAgICdObyBQZWVyQ29ubmVjdGlvbiBiZXR3ZWVuIGN1cnJlbnQgZW5kcG9pbnQgYW5kIHNwZWNpZmljIHJlbW90ZSAnICtcbiAgICAgICAgICAnZW5kcG9pbnQuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbm5lbHMuZ2V0KHJlbW90ZUlkKS5nZXRTdGF0cygpO1xuICB9O1xuXG4gIGNvbnN0IHNlbmRTaWduYWxpbmdNZXNzYWdlID0gZnVuY3Rpb24ocmVtb3RlSWQsIHR5cGUsIG1lc3NhZ2UpIHtcbiAgICBjb25zdCBtc2cgPSB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgIH07XG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIG1zZy5kYXRhID0gbWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIHNpZ25hbGluZy5zZW5kKHJlbW90ZUlkLCBKU09OLnN0cmluZ2lmeShtc2cpKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBlID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBFcnJvck1vZHVsZS5nZXRFcnJvckJ5Q29kZShlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRPckNyZWF0ZUNoYW5uZWwgPSBmdW5jdGlvbihyZW1vdGVJZCwgaXNJbml0aWFsaXplcikge1xuICAgIGlmICghY2hhbm5lbHMuaGFzKHJlbW90ZUlkKSkge1xuICAgICAgLy8gQ29uc3RydWN0IGFuIHNpZ25hbGluZyBzZW5kZXIvcmVjZWl2ZXIgZm9yIFAyUFBlZXJDb25uZWN0aW9uLlxuICAgICAgY29uc3Qgc2lnbmFsaW5nRm9yQ2hhbm5lbCA9IE9iamVjdC5jcmVhdGUoRXZlbnREaXNwYXRjaGVyKTtcbiAgICAgIHNpZ25hbGluZ0ZvckNoYW5uZWwuc2VuZFNpZ25hbGluZ01lc3NhZ2UgPSBzZW5kU2lnbmFsaW5nTWVzc2FnZTtcbiAgICAgIGNvbnN0IHBjYyA9IG5ldyBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWwoY29uZmlnLCBteUlkLCByZW1vdGVJZCxcbiAgICAgICAgICBzaWduYWxpbmdGb3JDaGFubmVsLCBpc0luaXRpYWxpemVyKTtcbiAgICAgIHBjYy5hZGRFdmVudExpc3RlbmVyKCdzdHJlYW1hZGRlZCcsIChzdHJlYW1FdmVudCk9PntcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KHN0cmVhbUV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgcGNjLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2VyZWNlaXZlZCcsIChtZXNzYWdlRXZlbnQpPT57XG4gICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChtZXNzYWdlRXZlbnQpO1xuICAgICAgfSk7XG4gICAgICBwY2MuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKT0+e1xuICAgICAgICBjaGFubmVscy5kZWxldGUocmVtb3RlSWQpO1xuICAgICAgfSk7XG4gICAgICBjaGFubmVscy5zZXQocmVtb3RlSWQsIHBjYyk7XG4gICAgfVxuICAgIHJldHVybiBjaGFubmVscy5nZXQocmVtb3RlSWQpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUDJQQ2xpZW50O1xuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vLyBUaGlzIGZpbGUgZG9lc24ndCBoYXZlIHB1YmxpYyBBUElzLlxuLyogZXNsaW50LWRpc2FibGUgdmFsaWQtanNkb2MgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MgKi9cbi8qIGdsb2JhbCBFdmVudCwgTWFwLCBQcm9taXNlLCBSVENJY2VDYW5kaWRhdGUsIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbixcbiAgIFJUQ1BlZXJDb25uZWN0aW9uLCBuYXZpZ2F0b3IgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyLCBNZXNzYWdlRXZlbnQsIE93dEV2ZW50fSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7UHVibGljYXRpb259IGZyb20gJy4uL2Jhc2UvcHVibGljYXRpb24uanMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vYmFzZS91dGlscy5qcyc7XG5pbXBvcnQgKiBhcyBFcnJvck1vZHVsZSBmcm9tICcuL2Vycm9yLmpzJztcbmltcG9ydCAqIGFzIFN0cmVhbU1vZHVsZSBmcm9tICcuLi9iYXNlL3N0cmVhbS5qcyc7XG5pbXBvcnQgKiBhcyBTZHBVdGlscyBmcm9tICcuLi9iYXNlL3NkcHV0aWxzLmpzJztcblxuLyoqXG4gKiBAY2xhc3MgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsRXZlbnRcbiAqIEBkZXNjIEV2ZW50IGZvciBTdHJlYW0uXG4gKiBAbWVtYmVyT2YgT3d0LlAyUFxuICogQHByaXZhdGVcbiAqICovXG5leHBvcnQgY2xhc3MgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jICovXG4gIGNvbnN0cnVjdG9yKGluaXQpIHtcbiAgICBzdXBlcihpbml0KTtcbiAgICB0aGlzLnN0cmVhbSA9IGluaXQuc3RyZWFtO1xuICB9XG59XG5cbmNvbnN0IERhdGFDaGFubmVsTGFiZWwgPSB7XG4gIE1FU1NBR0U6ICdtZXNzYWdlJyxcbiAgRklMRTogJ2ZpbGUnLFxufTtcblxuY29uc3QgU2lnbmFsaW5nVHlwZSA9IHtcbiAgREVOSUVEOiAnY2hhdC1kZW5pZWQnLFxuICBDTE9TRUQ6ICdjaGF0LWNsb3NlZCcsXG4gIE5FR09USUFUSU9OX05FRURFRDogJ2NoYXQtbmVnb3RpYXRpb24tbmVlZGVkJyxcbiAgVFJBQ0tfU09VUkNFUzogJ2NoYXQtdHJhY2stc291cmNlcycsXG4gIFNUUkVBTV9JTkZPOiAnY2hhdC1zdHJlYW0taW5mbycsXG4gIFNEUDogJ2NoYXQtc2lnbmFsJyxcbiAgVFJBQ0tTX0FEREVEOiAnY2hhdC10cmFja3MtYWRkZWQnLFxuICBUUkFDS1NfUkVNT1ZFRDogJ2NoYXQtdHJhY2tzLXJlbW92ZWQnLFxuICBEQVRBX1JFQ0VJVkVEOiAnY2hhdC1kYXRhLXJlY2VpdmVkJyxcbiAgVUE6ICdjaGF0LXVhJyxcbn07XG5cbmNvbnN0IHN5c0luZm8gPSBVdGlscy5zeXNJbmZvKCk7XG5cbi8qKlxuICogQGNsYXNzIFAyUFBlZXJDb25uZWN0aW9uQ2hhbm5lbFxuICogQGRlc2MgQSBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWwgaGFuZGxlcyBhbGwgaW50ZXJhY3Rpb25zIGJldHdlZW4gdGhpcyBlbmRwb2ludCBhbmQgYSByZW1vdGUgZW5kcG9pbnQuXG4gKiBAbWVtYmVyT2YgT3d0LlAyUFxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgLy8gfHNpZ25hbGluZ3wgaXMgYW4gb2JqZWN0IGhhcyBhIG1ldGhvZCB8c2VuZFNpZ25hbGluZ01lc3NhZ2V8LlxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvYyAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcsIGxvY2FsSWQsIHJlbW90ZUlkLCBzaWduYWxpbmcsIGlzSW5pdGlhbGl6ZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9sb2NhbElkID0gbG9jYWxJZDtcbiAgICB0aGlzLl9yZW1vdGVJZCA9IHJlbW90ZUlkO1xuICAgIHRoaXMuX3NpZ25hbGluZyA9IHNpZ25hbGluZztcbiAgICB0aGlzLl9wYyA9IG51bGw7XG4gICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHN0cmVhbXMgcHVibGlzaGVkLCB2YWx1ZSBpcyBpdHMgcHVibGljYXRpb24uXG4gICAgdGhpcy5fcGVuZGluZ1N0cmVhbXMgPSBbXTsgLy8gU3RyZWFtcyBnb2luZyB0byBiZSBhZGRlZCB0byBQZWVyQ29ubmVjdGlvbi5cbiAgICB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtcyA9IFtdOyAvLyBTdHJlYW1zIGhhdmUgYmVlbiBhZGRlZCB0byBQZWVyQ29ubmVjdGlvbiwgYnV0IGRvZXMgbm90IHJlY2VpdmUgYWNrIGZyb20gcmVtb3RlIHNpZGUuXG4gICAgdGhpcy5fcGVuZGluZ1VucHVibGlzaFN0cmVhbXMgPSBbXTsgLy8gU3RyZWFtcyBnb2luZyB0byBiZSByZW1vdmVkLlxuICAgIC8vIEtleSBpcyBNZWRpYVN0cmVhbSdzIElELCB2YWx1ZSBpcyBhbiBvYmplY3Qge3NvdXJjZTp7YXVkaW86c3RyaW5nLCB2aWRlbzpzdHJpbmd9LCBhdHRyaWJ1dGVzOiBvYmplY3QsIHN0cmVhbTogUmVtb3RlU3RyZWFtLCBtZWRpYVN0cmVhbTogTWVkaWFTdHJlYW19LiBgc3RyZWFtYCBhbmQgYG1lZGlhU3RyZWFtYCB3aWxsIGJlIHNldCB3aGVuIGB0cmFja2AgZXZlbnQgaXMgZmlyZWQgb24gYFJUQ1BlZXJDb25uZWN0aW9uYC4gYG1lZGlhU3RyZWFtYCB3aWxsIGJlIGBudWxsYCBhZnRlciBgc3RyZWFtYWRkZWRgIGV2ZW50IGlzIGZpcmVkIG9uIGBQMlBDbGllbnRgLiBPdGhlciBwcm9wZXJ0ZXMgd2lsbCBiZSBzZXQgdXBvbiBgU1RSRUFNX0lORk9gIGV2ZW50IGZyb20gc2lnbmFsaW5nIGNoYW5uZWwuXG4gICAgdGhpcy5fcmVtb3RlU3RyZWFtSW5mbyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLl9yZW1vdGVTdHJlYW1zID0gW107XG4gICAgdGhpcy5fcmVtb3RlVHJhY2tTb3VyY2VJbmZvID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgTWVkaWFTdHJlYW1UcmFjaydzIElELCB2YWx1ZSBpcyBzb3VyY2UgaW5mby5cbiAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBNZWRpYVN0cmVhbSdzIElELCB2YWx1ZSBpcyBhbiBvYmplY3QgaGFzIHxyZXNvbHZlfCBhbmQgfHJlamVjdHwuXG4gICAgdGhpcy5fdW5wdWJsaXNoUHJvbWlzZXMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBNZWRpYVN0cmVhbSdzIElELCB2YWx1ZSBpcyBhbiBvYmplY3QgaGFzIHxyZXNvbHZlfCBhbmQgfHJlamVjdHwuXG4gICAgdGhpcy5fcHVibGlzaGluZ1N0cmVhbVRyYWNrcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIE1lZGlhU3RyZWFtJ3MgSUQsIHZhbHVlIGlzIGFuIGFycmF5IG9mIHRoZSBJRCBvZiBpdHMgTWVkaWFTdHJlYW1UcmFja3MgdGhhdCBoYXZlbid0IGJlZW4gYWNrZWQuXG4gICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtVHJhY2tzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgTWVkaWFTdHJlYW0ncyBJRCwgdmFsdWUgaXMgYW4gYXJyYXkgb2YgdGhlIElEIG9mIGl0cyBNZWRpYVN0cmVhbVRyYWNrcyB0aGF0IGhhdmVuJ3QgYmVlbiByZW1vdmVkLlxuICAgIHRoaXMuX2lzTmVnb3RpYXRpb25OZWVkZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9yZW1vdGVTaWRlU3VwcG9ydHNSZW1vdmVTdHJlYW0gPSB0cnVlO1xuICAgIHRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1BsYW5CID0gdHJ1ZTtcbiAgICB0aGlzLl9yZW1vdGVTaWRlU3VwcG9ydHNVbmlmaWVkUGxhbiA9IHRydWU7XG4gICAgdGhpcy5fcmVtb3RlU2lkZUlnbm9yZXNEYXRhQ2hhbm5lbEFja3MgPSBmYWxzZTtcbiAgICB0aGlzLl9yZW1vdGVJY2VDYW5kaWRhdGVzID0gW107XG4gICAgdGhpcy5fZGF0YUNoYW5uZWxzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgZGF0YSBjaGFubmVsJ3MgbGFiZWwsIHZhbHVlIGlzIGEgUlRDRGF0YUNoYW5uZWwuXG4gICAgdGhpcy5fcGVuZGluZ01lc3NhZ2VzID0gW107XG4gICAgdGhpcy5fZGF0YVNlcSA9IDE7IC8vIFNlcXVlbmNlIG51bWJlciBmb3IgZGF0YSBjaGFubmVsIG1lc3NhZ2VzLlxuICAgIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBkYXRhIHNlcXVlbmNlIG51bWJlciwgdmFsdWUgaXMgYW4gb2JqZWN0IGhhcyB8cmVzb2x2ZXwgYW5kIHxyZWplY3R8LlxuICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMgPSBbXTsgLy8gVHJhY2tzIHRoYXQgaGF2ZSBiZWVuIGFkZGVkIGFmdGVyIHJlY2VpdmluZyByZW1vdGUgU0RQIGJ1dCBiZWZvcmUgY29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZC4gRHJhaW5pbmcgdGhlc2UgbWVzc2FnZXMgd2hlbiBJQ0UgY29ubmVjdGlvbiBzdGF0ZSBpcyBjb25uZWN0ZWQuXG4gICAgdGhpcy5faXNDYWxsZXIgPSB0cnVlO1xuICAgIHRoaXMuX2luZm9TZW50ID0gZmFsc2U7XG4gICAgdGhpcy5fZGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jcmVhdGVQZWVyQ29ubmVjdGlvbigpO1xuICAgIGlmIChpc0luaXRpYWxpemVyKSB7XG4gICAgICB0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLkNMT1NFRCk7XG4gICAgfVxuICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuVUEsIHN5c0luZm8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBwdWJsaXNoXG4gICAqIEBkZXNjIFB1Ymxpc2ggYSBzdHJlYW0gdG8gdGhlIHJlbW90ZSBlbmRwb2ludC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHB1Ymxpc2goc3RyZWFtKSB7XG4gICAgaWYgKCEoc3RyZWFtIGluc3RhbmNlb2YgU3RyZWFtTW9kdWxlLkxvY2FsU3RyZWFtKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgc3RyZWFtLicpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuaGFzKHN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSUxMRUdBTF9BUkdVTUVOVCxcbiAgICAgICAgICAnRHVwbGljYXRlZCBzdHJlYW0uJykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXJlQWxsVHJhY2tzRW5kZWQoc3RyZWFtLm1lZGlhU3RyZWFtKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFLFxuICAgICAgICAgICdBbGwgdHJhY2tzIGFyZSBlbmRlZC4nKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zZW5kU3RyZWFtSW5mbyhzdHJlYW0pLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gUmVwbGFjZSB8YWRkU3RyZWFtfCB3aXRoIFBlZXJDb25uZWN0aW9uLmFkZFRyYWNrIHdoZW4gYWxsIGJyb3dzZXJzIGFyZSByZWFkeS5cbiAgICAgICAgZm9yIChjb25zdCB0cmFjayBvZiBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkpIHtcbiAgICAgICAgICB0aGlzLl9wYy5hZGRUcmFjayh0cmFjaywgc3RyZWFtLm1lZGlhU3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vbk5lZ290aWF0aW9ubmVlZGVkKCk7XG4gICAgICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgY29uc3QgdHJhY2tJZHMgPSBBcnJheS5mcm9tKHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRUcmFja3MoKSxcbiAgICAgICAgICAgICh0cmFjaykgPT4gdHJhY2suaWQpO1xuICAgICAgICB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtVHJhY2tzLnNldChzdHJlYW0ubWVkaWFTdHJlYW0uaWQsXG4gICAgICAgICAgICB0cmFja0lkcyk7XG4gICAgICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5zZXQoc3RyZWFtLm1lZGlhU3RyZWFtLmlkLCB7XG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc2VuZFxuICAgKiBAZGVzYyBTZW5kIGEgbWVzc2FnZSB0byB0aGUgcmVtb3RlIGVuZHBvaW50LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2VuZChtZXNzYWdlKSB7XG4gICAgaWYgKCEodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWVzc2FnZS4nKSk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpZDogdGhpcy5fZGF0YVNlcSsrLFxuICAgICAgZGF0YTogbWVzc2FnZSxcbiAgICB9O1xuICAgIGlmICghdGhpcy5fZGF0YUNoYW5uZWxzLmhhcyhEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpKSB7XG4gICAgICB0aGlzLl9jcmVhdGVEYXRhQ2hhbm5lbChEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpO1xuICAgIH1cblxuICAgIGNvbnN0IGRjID0gdGhpcy5fZGF0YUNoYW5uZWxzLmdldChEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpO1xuICAgIGlmIChkYy5yZWFkeVN0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIHRoaXMuX2RhdGFDaGFubmVscy5nZXQoRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKVxuICAgICAgICAgIC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGVuZGluZ01lc3NhZ2VzLnB1c2goZGF0YSk7XG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLl9zZW5kRGF0YVByb21pc2VzLnNldChkYXRhLmlkLCB7XG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc3RvcFxuICAgKiBAZGVzYyBTdG9wIHRoZSBjb25uZWN0aW9uIHdpdGggcmVtb3RlIGVuZHBvaW50LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RvcCgpIHtcbiAgICB0aGlzLl9zdG9wKHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGdldFN0YXRzXG4gICAqIEBkZXNjIEdldCBzdGF0cyBmb3IgYSBzcGVjaWZpYyBNZWRpYVN0cmVhbS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFN0YXRzKG1lZGlhU3RyZWFtKSB7XG4gICAgaWYgKHRoaXMuX3BjKSB7XG4gICAgICBpZiAobWVkaWFTdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGMuZ2V0U3RhdHMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRyYWNrc1N0YXRzUmVwb3J0cyA9IFtdO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW21lZGlhU3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goKHRyYWNrKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZ2V0U3RhdHModHJhY2ssIHRyYWNrc1N0YXRzUmVwb3J0cyk7XG4gICAgICAgIH0pXSkudGhlbihcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRyYWNrc1N0YXRzUmVwb3J0cyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSkpO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRTdGF0cyhtZWRpYVN0cmVhbVRyYWNrLCByZXBvcnRzUmVzdWx0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3BjLmdldFN0YXRzKG1lZGlhU3RyZWFtVHJhY2spLnRoZW4oXG4gICAgICAgIChzdGF0c1JlcG9ydCkgPT4ge1xuICAgICAgICAgIHJlcG9ydHNSZXN1bHQucHVzaChzdGF0c1JlcG9ydCk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBvbk1lc3NhZ2VcbiAgICogQGRlc2MgVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IFAyUENsaWVudCB3aGVuIHRoZXJlIGlzIG5ldyBzaWduYWxpbmcgbWVzc2FnZSBhcnJpdmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICB0aGlzLl9TaWduYWxpbmdNZXNzc2FnZUhhbmRsZXIobWVzc2FnZSk7XG4gIH1cblxuICBfc2VuZFNkcChzZHApIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKFxuICAgICAgICB0aGlzLl9yZW1vdGVJZCwgU2lnbmFsaW5nVHlwZS5TRFAsIHNkcCk7XG4gIH1cblxuICBfc2VuZFNpZ25hbGluZ01lc3NhZ2UodHlwZSwgbWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UodGhpcy5fcmVtb3RlSWQsIHR5cGUsIG1lc3NhZ2UpO1xuICB9XG5cbiAgX1NpZ25hbGluZ01lc3NzYWdlSGFuZGxlcihtZXNzYWdlKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdDaGFubmVsIHJlY2VpdmVkIG1lc3NhZ2U6ICcgKyBtZXNzYWdlKTtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLlVBOlxuICAgICAgICB0aGlzLl9oYW5kbGVSZW1vdGVDYXBhYmlsaXR5KG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLlRSQUNLX1NPVVJDRVM6XG4gICAgICAgIHRoaXMuX3RyYWNrU291cmNlc0hhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuU1RSRUFNX0lORk86XG4gICAgICAgIHRoaXMuX3N0cmVhbUluZm9IYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLlNEUDpcbiAgICAgICAgdGhpcy5fc2RwSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2lnbmFsaW5nVHlwZS5UUkFDS1NfQURERUQ6XG4gICAgICAgIHRoaXMuX3RyYWNrc0FkZGVkSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2lnbmFsaW5nVHlwZS5UUkFDS1NfUkVNT1ZFRDpcbiAgICAgICAgdGhpcy5fdHJhY2tzUmVtb3ZlZEhhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuREFUQV9SRUNFSVZFRDpcbiAgICAgICAgdGhpcy5fZGF0YVJlY2VpdmVkSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2lnbmFsaW5nVHlwZS5DTE9TRUQ6XG4gICAgICAgIHRoaXMuX2NoYXRDbG9zZWRIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgTG9nZ2VyLmVycm9yKCdJbnZhbGlkIHNpZ25hbGluZyBtZXNzYWdlIHJlY2VpdmVkLiBUeXBlOiAnICtcbiAgICAgICAgICAgIG1lc3NhZ2UudHlwZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfdHJhY2tzQWRkZWRIYW5kbGVyXG4gICAqIEBkZXNjIEhhbmRsZSB0cmFjayBhZGRlZCBldmVudCBmcm9tIHJlbW90ZSBzaWRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3RyYWNrc0FkZGVkSGFuZGxlcihpZHMpIHtcbiAgICAvLyBDdXJyZW50bHksIHxpZHN8IGNvbnRhaW5zIGFsbCB0cmFjayBJRHMgb2YgYSBNZWRpYVN0cmVhbS4gRm9sbG93aW5nIGFsZ29yaXRobSBhbHNvIGhhbmRsZXMgfGlkc3wgaXMgYSBwYXJ0IG9mIGEgTWVkaWFTdHJlYW0ncyB0cmFja3MuXG4gICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHtcbiAgICAgIC8vIEl0IGNvdWxkIGJlIGEgcHJvYmxlbSBpZiB0aGVyZSBpcyBhIHRyYWNrIHB1Ymxpc2hlZCB3aXRoIGRpZmZlcmVudCBNZWRpYVN0cmVhbXMuXG4gICAgICB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtVHJhY2tzLmZvckVhY2goKG1lZGlhVHJhY2tJZHMsIG1lZGlhU3RyZWFtSWQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZWRpYVRyYWNrSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG1lZGlhVHJhY2tJZHNbaV0gPT09IGlkKSB7XG4gICAgICAgICAgICAvLyBNb3ZlIHRoaXMgdHJhY2sgZnJvbSBwdWJsaXNoaW5nIHRyYWNrcyB0byBwdWJsaXNoZWQgdHJhY2tzLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9wdWJsaXNoZWRTdHJlYW1UcmFja3MuaGFzKG1lZGlhU3RyZWFtSWQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbVRyYWNrcy5zZXQobWVkaWFTdHJlYW1JZCwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtVHJhY2tzLmdldChtZWRpYVN0cmVhbUlkKS5wdXNoKFxuICAgICAgICAgICAgICAgIG1lZGlhVHJhY2tJZHNbaV0pO1xuICAgICAgICAgICAgbWVkaWFUcmFja0lkcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFJlc29sdmluZyBjZXJ0YWluIHB1Ymxpc2ggcHJvbWlzZSB3aGVuIHJlbW90ZSBlbmRwb2ludCByZWNlaXZlZCBhbGwgdHJhY2tzIG9mIGEgTWVkaWFTdHJlYW0uXG4gICAgICAgICAgaWYgKG1lZGlhVHJhY2tJZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcHVibGlzaFByb21pc2VzLmhhcyhtZWRpYVN0cmVhbUlkKSkge1xuICAgICAgICAgICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgdGhlIHByb21pc2UgZm9yIHB1Ymxpc2hpbmcgJyArXG4gICAgICAgICAgICAgICAgbWVkaWFTdHJlYW1JZCk7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RyZWFtSW5kZXggPSB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQubWVkaWFTdHJlYW0uaWQgPT0gbWVkaWFTdHJlYW1JZCk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJlYW0gPSB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtc1t0YXJnZXRTdHJlYW1JbmRleF07XG4gICAgICAgICAgICB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtcy5zcGxpY2UodGFyZ2V0U3RyZWFtSW5kZXgsIDEpO1xuICAgICAgICAgICAgY29uc3QgcHVibGljYXRpb24gPSBuZXcgUHVibGljYXRpb24oXG4gICAgICAgICAgICAgICAgaWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3VucHVibGlzaCh0YXJnZXRTdHJlYW0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwdWJsaWNhdGlvbi5kaXNwYXRjaEV2ZW50KG5ldyBPd3RFdmVudCgnZW5kZWQnKSk7XG4gICAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBVc2UgZGVidWcgbW9kZSBiZWNhdXNlIHRoaXMgZXJyb3IgdXN1YWxseSBkb2Vzbid0IGJsb2NrIHN0b3BwaW5nIGEgcHVibGljYXRpb24uXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICdTb21ldGhpbmcgd3JvbmcgaGFwcGVuZWQgZHVyaW5nIHN0b3BwaW5nIGEgJytcbiAgICAgICAgICAgICAgICAgICAgICAgICdwdWJsaWNhdGlvbi4gJyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0U3RyZWFtIHx8ICF0YXJnZXRTdHJlYW0ubWVkaWFTdHJlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnUHVibGljYXRpb24gaXMgbm90IGF2YWlsYWJsZS4nKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGF0cyh0YXJnZXRTdHJlYW0ubWVkaWFTdHJlYW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtcy5zZXQodGFyZ2V0U3RyZWFtLCBwdWJsaWNhdGlvbik7XG4gICAgICAgICAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuZ2V0KG1lZGlhU3RyZWFtSWQpLnJlc29sdmUocHVibGljYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5fcHVibGlzaFByb21pc2VzLmRlbGV0ZShtZWRpYVN0cmVhbUlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX3RyYWNrc1JlbW92ZWRIYW5kbGVyXG4gICAqIEBkZXNjIEhhbmRsZSB0cmFjayByZW1vdmVkIGV2ZW50IGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdHJhY2tzUmVtb3ZlZEhhbmRsZXIoaWRzKSB7XG4gICAgLy8gQ3VycmVudGx5LCB8aWRzfCBjb250YWlucyBhbGwgdHJhY2sgSURzIG9mIGEgTWVkaWFTdHJlYW0uIEZvbGxvd2luZyBhbGdvcml0aG0gYWxzbyBoYW5kbGVzIHxpZHN8IGlzIGEgcGFydCBvZiBhIE1lZGlhU3RyZWFtJ3MgdHJhY2tzLlxuICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XG4gICAgICAvLyBJdCBjb3VsZCBiZSBhIHByb2JsZW0gaWYgdGhlcmUgaXMgYSB0cmFjayBwdWJsaXNoZWQgd2l0aCBkaWZmZXJlbnQgTWVkaWFTdHJlYW1zLlxuICAgICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtVHJhY2tzLmZvckVhY2goKG1lZGlhVHJhY2tJZHMsIG1lZGlhU3RyZWFtSWQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZWRpYVRyYWNrSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG1lZGlhVHJhY2tJZHNbaV0gPT09IGlkKSB7XG4gICAgICAgICAgICBtZWRpYVRyYWNrSWRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gX2RhdGFSZWNlaXZlZEhhbmRsZXJcbiAgICogQGRlc2MgSGFuZGxlIGRhdGEgcmVjZWl2ZWQgZXZlbnQgZnJvbSByZW1vdGUgc2lkZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9kYXRhUmVjZWl2ZWRIYW5kbGVyKGlkKSB7XG4gICAgaWYgKCF0aGlzLl9zZW5kRGF0YVByb21pc2VzLmhhcyhpZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdSZWNlaXZlZCB1bmtub3duIGRhdGEgcmVjZWl2ZWQgbWVzc2FnZS4gSUQ6ICcgKyBpZCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMuZ2V0KGlkKS5yZXNvbHZlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfc2RwSGFuZGxlclxuICAgKiBAZGVzYyBIYW5kbGUgU0RQIHJlY2VpdmVkIGV2ZW50IGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2RwSGFuZGxlcihzZHApIHtcbiAgICBpZiAoc2RwLnR5cGUgPT09ICdvZmZlcicpIHtcbiAgICAgIHRoaXMuX29uT2ZmZXIoc2RwKTtcbiAgICB9IGVsc2UgaWYgKHNkcC50eXBlID09PSAnYW5zd2VyJykge1xuICAgICAgdGhpcy5fb25BbnN3ZXIoc2RwKTtcbiAgICB9IGVsc2UgaWYgKHNkcC50eXBlID09PSAnY2FuZGlkYXRlcycpIHtcbiAgICAgIHRoaXMuX29uUmVtb3RlSWNlQ2FuZGlkYXRlKHNkcCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfdHJhY2tTb3VyY2VzSGFuZGxlclxuICAgKiBAZGVzYyBSZWNlaXZlZCB0cmFjayBzb3VyY2UgaW5mb3JtYXRpb24gZnJvbSByZW1vdGUgc2lkZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF90cmFja1NvdXJjZXNIYW5kbGVyKGRhdGEpIHtcbiAgICBmb3IgKGNvbnN0IGluZm8gb2YgZGF0YSkge1xuICAgICAgdGhpcy5fcmVtb3RlVHJhY2tTb3VyY2VJbmZvLnNldChpbmZvLmlkLCBpbmZvLnNvdXJjZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfc3RyZWFtSW5mb0hhbmRsZXJcbiAgICogQGRlc2MgUmVjZWl2ZWQgc3RyZWFtIGluZm9ybWF0aW9uIGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc3RyZWFtSW5mb0hhbmRsZXIoZGF0YSkge1xuICAgIGlmICghZGF0YSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ1VuZXhwZWN0ZWQgc3RyZWFtIGluZm8uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uc2V0KGRhdGEuaWQsIHtcbiAgICAgIHNvdXJjZTogZGF0YS5zb3VyY2UsXG4gICAgICBhdHRyaWJ1dGVzOiBkYXRhLmF0dHJpYnV0ZXMsXG4gICAgICBzdHJlYW06IG51bGwsXG4gICAgICBtZWRpYVN0cmVhbTogbnVsbCxcbiAgICAgIHRyYWNrSWRzOiBkYXRhLnRyYWNrcywgLy8gVHJhY2sgSURzIG1heSBub3QgbWF0Y2ggYXQgc2VuZGVyIGFuZCByZWNlaXZlciBzaWRlcy4gS2VlcCBpdCBmb3IgbGVnYWN5IHBvcnBvc2VzLlxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfY2hhdENsb3NlZEhhbmRsZXJcbiAgICogQGRlc2MgUmVjZWl2ZWQgY2hhdCBjbG9zZWQgZXZlbnQgZnJvbSByZW1vdGUgc2lkZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jaGF0Q2xvc2VkSGFuZGxlcihkYXRhKSB7XG4gICAgdGhpcy5fZGlzcG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuX3N0b3AoZGF0YSwgZmFsc2UpO1xuICB9XG5cbiAgX29uT2ZmZXIoc2RwKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdBYm91dCB0byBzZXQgcmVtb3RlIGRlc2NyaXB0aW9uLiBTaWduYWxpbmcgc3RhdGU6ICcgK1xuICAgICAgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUpO1xuICAgIHNkcC5zZHAgPSB0aGlzLl9zZXRSdHBTZW5kZXJPcHRpb25zKHNkcC5zZHAsIHRoaXMuX2NvbmZpZyk7XG4gICAgLy8gRmlyZWZveCBvbmx5IGhhcyBvbmUgY29kZWMgaW4gYW5zd2VyLCB3aGljaCBkb2VzIG5vdCB0cnVseSByZWZsZWN0IGl0c1xuICAgIC8vIGRlY29kaW5nIGNhcGFiaWxpdHkuIFNvIHdlIHNldCBjb2RlYyBwcmVmZXJlbmNlIHRvIHJlbW90ZSBvZmZlciwgYW5kIGxldFxuICAgIC8vIEZpcmVmb3ggY2hvb3NlIGl0cyBwcmVmZXJyZWQgY29kZWMuXG4gICAgLy8gUmVmZXJlbmNlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04MTQyMjcuXG4gICAgaWYgKFV0aWxzLmlzRmlyZWZveCgpKSB7XG4gICAgICBzZHAuc2RwID0gdGhpcy5fc2V0Q29kZWNPcmRlcihzZHAuc2RwKTtcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbkRlc2NyaXB0aW9uID0gbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihzZHApO1xuICAgIHRoaXMuX3BjLnNldFJlbW90ZURlc2NyaXB0aW9uKHNlc3Npb25EZXNjcmlwdGlvbikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9jcmVhdGVBbmRTZW5kQW5zd2VyKCk7XG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICBMb2dnZXIuZGVidWcoJ1NldCByZW1vdGUgZGVzY3JpcHRpb24gZmFpbGVkLiBNZXNzYWdlOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdG9wKGVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vbkFuc3dlcihzZHApIHtcbiAgICBMb2dnZXIuZGVidWcoJ0Fib3V0IHRvIHNldCByZW1vdGUgZGVzY3JpcHRpb24uIFNpZ25hbGluZyBzdGF0ZTogJyArXG4gICAgICB0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSk7XG4gICAgc2RwLnNkcCA9IHRoaXMuX3NldFJ0cFNlbmRlck9wdGlvbnMoc2RwLnNkcCwgdGhpcy5fY29uZmlnKTtcbiAgICBjb25zdCBzZXNzaW9uRGVzY3JpcHRpb24gPSBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHNkcCk7XG4gICAgdGhpcy5fcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihcbiAgICAgICAgc2Vzc2lvbkRlc2NyaXB0aW9uKSkudGhlbigoKSA9PiB7XG4gICAgICBMb2dnZXIuZGVidWcoJ1NldCByZW1vdGUgZGVzY3JpcGl0b24gc3VjY2Vzc2Z1bGx5LicpO1xuICAgICAgdGhpcy5fZHJhaW5QZW5kaW5nTWVzc2FnZXMoKTtcbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnU2V0IHJlbW90ZSBkZXNjcmlwdGlvbiBmYWlsZWQuIE1lc3NhZ2U6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHRoaXMuX3N0b3AoZXJyb3IsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uTG9jYWxJY2VDYW5kaWRhdGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XG4gICAgICB0aGlzLl9zZW5kU2RwKHtcbiAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZXMnLFxuICAgICAgICBjYW5kaWRhdGU6IGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUsXG4gICAgICAgIHNkcE1pZDogZXZlbnQuY2FuZGlkYXRlLnNkcE1pZCxcbiAgICAgICAgc2RwTUxpbmVJbmRleDogZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXgsXG4gICAgICB9KS5jYXRjaCgoZSk9PntcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ZhaWxlZCB0byBzZW5kIGNhbmRpZGF0ZS4nKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0VtcHR5IGNhbmRpZGF0ZS4nKTtcbiAgICB9XG4gIH1cblxuICBfb25SZW1vdGVUcmFja0FkZGVkKGV2ZW50KSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdSZW1vdGUgdHJhY2sgYWRkZWQuJyk7XG4gICAgZm9yIChjb25zdCBzdHJlYW0gb2YgZXZlbnQuc3RyZWFtcykge1xuICAgICAgaWYgKCF0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmhhcyhzdHJlYW0uaWQpKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdNaXNzaW5nIHN0cmVhbSBpbmZvLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KHN0cmVhbS5pZCkuc3RyZWFtKSB7XG4gICAgICAgIHRoaXMuX3NldFN0cmVhbVRvUmVtb3RlU3RyZWFtSW5mbyhzdHJlYW0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29ubmVjdGVkJyB8fFxuICAgICAgIHRoaXMuX3BjLmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgIHRoaXMuX2NoZWNrSWNlQ29ubmVjdGlvblN0YXRlQW5kRmlyZUV2ZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMuY29uY2F0KGV2ZW50LnRyYWNrLmlkKTtcbiAgICB9XG4gIH1cblxuICBfb25SZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xuICAgIExvZ2dlci5kZWJ1ZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcbiAgICBpZiAoIXRoaXMuX3JlbW90ZVN0cmVhbUluZm8uaGFzKGV2ZW50LnN0cmVhbS5pZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzb3VyY2UgaW5mbyBmb3Igc3RyZWFtICcgKyBldmVudC5zdHJlYW0uaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29ubmVjdGVkJyB8fFxuICAgICAgdGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29tcGxldGVkJykge1xuICAgICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5UUkFDS1NfQURERUQsXG4gICAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoZXZlbnQuc3RyZWFtLmlkKS50cmFja0lkcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMgPSB0aGlzLl9hZGRlZFRyYWNrSWRzLmNvbmNhdChcbiAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChldmVudC5zdHJlYW0uaWQpLnRyYWNrSWRzKTtcbiAgICB9XG4gICAgY29uc3QgYXVkaW9UcmFja1NvdXJjZSA9IHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KGV2ZW50LnN0cmVhbS5pZClcbiAgICAgICAgLnNvdXJjZS5hdWRpbztcbiAgICBjb25zdCB2aWRlb1RyYWNrU291cmNlID0gdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoZXZlbnQuc3RyZWFtLmlkKVxuICAgICAgICAuc291cmNlLnZpZGVvO1xuICAgIGNvbnN0IHNvdXJjZUluZm8gPSBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbVNvdXJjZUluZm8oYXVkaW9UcmFja1NvdXJjZSxcbiAgICAgICAgdmlkZW9UcmFja1NvdXJjZSk7XG4gICAgaWYgKFV0aWxzLmlzU2FmYXJpKCkpIHtcbiAgICAgIGlmICghc291cmNlSW5mby5hdWRpbykge1xuICAgICAgICBldmVudC5zdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5mb3JFYWNoKCh0cmFjaykgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0cmVhbS5yZW1vdmVUcmFjayh0cmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFzb3VyY2VJbmZvLnZpZGVvKSB7XG4gICAgICAgIGV2ZW50LnN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmZvckVhY2goKHRyYWNrKSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RyZWFtLnJlbW92ZVRyYWNrKHRyYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChldmVudC5zdHJlYW0uaWQpLmF0dHJpYnV0ZXM7XG4gICAgY29uc3Qgc3RyZWFtID0gbmV3IFN0cmVhbU1vZHVsZS5SZW1vdGVTdHJlYW0odW5kZWZpbmVkLCB0aGlzLl9yZW1vdGVJZCxcbiAgICAgICAgZXZlbnQuc3RyZWFtLCBzb3VyY2VJbmZvLCBhdHRyaWJ1dGVzKTtcbiAgICBpZiAoc3RyZWFtKSB7XG4gICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IFN0cmVhbU1vZHVsZS5TdHJlYW1FdmVudCgnc3RyZWFtYWRkZWQnLCB7XG4gICAgICAgIHN0cmVhbTogc3RyZWFtLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9vblJlbW90ZVN0cmVhbVJlbW92ZWQoZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ1JlbW90ZSBzdHJlYW0gcmVtb3ZlZC4nKTtcbiAgICBjb25zdCBpID0gdGhpcy5fcmVtb3RlU3RyZWFtcy5maW5kSW5kZXgoKHMpID0+IHtcbiAgICAgIHJldHVybiBzLm1lZGlhU3RyZWFtLmlkID09PSBldmVudC5zdHJlYW0uaWQ7XG4gICAgfSk7XG4gICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9yZW1vdGVTdHJlYW1zW2ldO1xuICAgICAgdGhpcy5fc3RyZWFtUmVtb3ZlZChzdHJlYW0pO1xuICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtcy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgX29uTmVnb3RpYXRpb25uZWVkZWQoKSB7XG4gICAgLy8gVGhpcyBpcyBpbnRlbnRlZCB0byBiZSBleGVjdXRlZCB3aGVuIG9ubmVnb3RpYXRpb25uZWVkZWQgZXZlbnQgaXMgZmlyZWQuXG4gICAgLy8gSG93ZXZlciwgb25uZWdvdGlhdGlvbm5lZWRlZCBtYXkgZmlyZSBtdXRpcGxlIHRpbWVzIHdoZW4gbW9yZSB0aGFuIG9uZVxuICAgIC8vIHRyYWNrIGlzIGFkZGVkL3JlbW92ZWQuIFNvIHdlIG1hbnVhbGx5IGV4ZWN1dGUgdGhpcyBmdW5jdGlvbiBhZnRlclxuICAgIC8vIGFkZGluZy9yZW1vdmluZyB0cmFjayBhbmQgY3JlYXRpbmcgZGF0YSBjaGFubmVsLlxuICAgIExvZ2dlci5kZWJ1ZygnT24gbmVnb3RpYXRpb24gbmVlZGVkLicpO1xuXG4gICAgaWYgKHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlID09PSAnc3RhYmxlJykge1xuICAgICAgdGhpcy5fZG9OZWdvdGlhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXNOZWdvdGlhdGlvbk5lZWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX29uUmVtb3RlSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZUluZm8pIHtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBuZXcgUlRDSWNlQ2FuZGlkYXRlKHtcbiAgICAgIGNhbmRpZGF0ZTogY2FuZGlkYXRlSW5mby5jYW5kaWRhdGUsXG4gICAgICBzZHBNaWQ6IGNhbmRpZGF0ZUluZm8uc2RwTWlkLFxuICAgICAgc2RwTUxpbmVJbmRleDogY2FuZGlkYXRlSW5mby5zZHBNTGluZUluZGV4LFxuICAgIH0pO1xuICAgIGlmICh0aGlzLl9wYy5yZW1vdGVEZXNjcmlwdGlvbiAmJiB0aGlzLl9wYy5yZW1vdGVEZXNjcmlwdGlvbi5zZHAgIT09ICcnKSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0FkZCByZW1vdGUgaWNlIGNhbmRpZGF0ZXMuJyk7XG4gICAgICB0aGlzLl9wYy5hZGRJY2VDYW5kaWRhdGUoY2FuZGlkYXRlKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Vycm9yIHByb2Nlc3NpbmcgSUNFIGNhbmRpZGF0ZTogJyArIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0NhY2hlIHJlbW90ZSBpY2UgY2FuZGlkYXRlcy4nKTtcbiAgICAgIHRoaXMuX3JlbW90ZUljZUNhbmRpZGF0ZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIF9vblNpZ25hbGluZ1N0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdTaWduYWxpbmcgc3RhdGUgY2hhbmdlZDogJyArIHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlKTtcbiAgICBpZiAodGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgPT09ICdoYXZlLXJlbW90ZS1vZmZlcicgfHxcbiAgICAgICAgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgPT09ICdzdGFibGUnKSB7XG4gICAgICB0aGlzLl9kcmFpblBlbmRpbmdSZW1vdGVJY2VDYW5kaWRhdGVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ3N0YWJsZScpIHtcbiAgICAgIHRoaXMuX25lZ290aWF0aW5nID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5faXNOZWdvdGlhdGlvbk5lZWRlZCkge1xuICAgICAgICB0aGlzLl9vbk5lZ290aWF0aW9ubmVlZGVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kcmFpblBlbmRpbmdTdHJlYW1zKCk7XG4gICAgICAgIHRoaXMuX2RyYWluUGVuZGluZ01lc3NhZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX29uSWNlQ29ubmVjdGlvblN0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY2xvc2VkJyB8fFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfV0VCUlRDX1VOS05PV04sXG4gICAgICAgICAgJ0lDRSBjb25uZWN0aW9uIGZhaWxlZCBvciBjbG9zZWQuJyk7XG4gICAgICB0aGlzLl9zdG9wKGVycm9yLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29ubmVjdGVkJyB8fFxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICB0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLlRSQUNLU19BRERFRCxcbiAgICAgICAgICB0aGlzLl9hZGRlZFRyYWNrSWRzKTtcbiAgICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMgPSBbXTtcbiAgICAgIHRoaXMuX2NoZWNrSWNlQ29ubmVjdGlvblN0YXRlQW5kRmlyZUV2ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgX29uRGF0YUNoYW5uZWxNZXNzYWdlKGV2ZW50KSB7XG4gICAgY29uc3QgbWVzc2FnZT1KU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgIGlmICghdGhpcy5fcmVtb3RlU2lkZUlnbm9yZXNEYXRhQ2hhbm5lbEFja3MpIHtcbiAgICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuREFUQV9SRUNFSVZFRCwgbWVzc2FnZS5pZCk7XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2VFdmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoJ21lc3NhZ2VyZWNlaXZlZCcsIHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UuZGF0YSxcbiAgICAgIG9yaWdpbjogdGhpcy5fcmVtb3RlSWQsXG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG1lc3NhZ2VFdmVudCk7XG4gIH1cblxuICBfb25EYXRhQ2hhbm5lbE9wZW4oZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0RhdGEgQ2hhbm5lbCBpcyBvcGVuZWQuJyk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5sYWJlbCA9PT0gRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0RhdGEgY2hhbm5lbCBmb3IgbWVzc2FnZXMgaXMgb3BlbmVkLicpO1xuICAgICAgdGhpcy5fZHJhaW5QZW5kaW5nTWVzc2FnZXMoKTtcbiAgICB9XG4gIH1cblxuICBfb25EYXRhQ2hhbm5lbENsb3NlKGV2ZW50KSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdEYXRhIENoYW5uZWwgaXMgY2xvc2VkLicpO1xuICB9XG5cbiAgX3N0cmVhbVJlbW92ZWQoc3RyZWFtKSB7XG4gICAgaWYgKCF0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmhhcyhzdHJlYW0ubWVkaWFTdHJlYW0uaWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgc3RyZWFtIGluZm8uJyk7XG4gICAgfVxuICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuVFJBQ0tTX1JFTU9WRUQsXG4gICAgICAgIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KHN0cmVhbS5tZWRpYVN0cmVhbS5pZCkudHJhY2tJZHMpO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE93dEV2ZW50KCdlbmRlZCcpO1xuICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIF9pc1VuaWZpZWRQbGFuKCkge1xuICAgIGlmIChVdGlscy5pc0ZpcmVmb3goKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHBjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKHtcbiAgICAgIHNkcFNlbWFudGljczogJ3VuaWZpZWQtcGxhbicsXG4gICAgfSk7XG4gICAgcmV0dXJuIChwYy5nZXRDb25maWd1cmF0aW9uKCkgJiYgcGMuZ2V0Q29uZmlndXJhdGlvbigpLnNkcFNlbWFudGljcyA9PT1cbiAgICAgICdwbGFuLWInKTtcbiAgfVxuXG4gIF9jcmVhdGVQZWVyQ29ubmVjdGlvbigpIHtcbiAgICBjb25zdCBwY0NvbmZpZ3VyYXRpb24gPSB0aGlzLl9jb25maWcucnRjQ29uZmlndXJhdGlvbiB8fCB7fTtcbiAgICBpZiAoVXRpbHMuaXNDaHJvbWUoKSkge1xuICAgICAgcGNDb25maWd1cmF0aW9uLnNkcFNlbWFudGljcyA9ICd1bmlmaWVkLXBsYW4nO1xuICAgIH1cbiAgICB0aGlzLl9wYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZ3VyYXRpb24pO1xuICAgIC8vIEZpcmVmb3ggNTkgaW1wbGVtZW50ZWQgYWRkVHJhbnNjZWl2ZXIuIEhvd2V2ZXIsIG1pZCBpbiBTRFAgd2lsbCBkaWZmZXIgZnJvbSB0cmFjaydzIElEIGluIHRoaXMgY2FzZS4gQW5kIHRyYW5zY2VpdmVyJ3MgbWlkIGlzIG51bGwuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9wYy5hZGRUcmFuc2NlaXZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBVdGlscy5pc1NhZmFyaSgpKSB7XG4gICAgICB0aGlzLl9wYy5hZGRUcmFuc2NlaXZlcignYXVkaW8nKTtcbiAgICAgIHRoaXMuX3BjLmFkZFRyYW5zY2VpdmVyKCd2aWRlbycpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2lzVW5pZmllZFBsYW4oKSAmJiAhVXRpbHMuaXNTYWZhcmkoKSkge1xuICAgICAgdGhpcy5fcGMub25hZGRzdHJlYW0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gVE9ETzogTGVnYWN5IEFQSSwgc2hvdWxkIGJlIHJlbW92ZWQgd2hlbiBhbGwgVUFzIGltcGxlbWVudGVkIFdlYlJUQyAxLjAuXG4gICAgICAgIHRoaXMuX29uUmVtb3RlU3RyZWFtQWRkZWQuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcGMub25yZW1vdmVzdHJlYW0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5fb25SZW1vdGVTdHJlYW1SZW1vdmVkLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGMub250cmFjayA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLl9vblJlbW90ZVRyYWNrQWRkZWQuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLl9wYy5vbmljZWNhbmRpZGF0ZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25Mb2NhbEljZUNhbmRpZGF0ZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIHRoaXMuX3BjLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uU2lnbmFsaW5nU3RhdGVDaGFuZ2UuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICB0aGlzLl9wYy5vbmRhdGFjaGFubmVsID0gKGV2ZW50KSA9PiB7XG4gICAgICBMb2dnZXIuZGVidWcoJ09uIGRhdGEgY2hhbm5lbC4nKTtcbiAgICAgIC8vIFNhdmUgcmVtb3RlIGNyZWF0ZWQgZGF0YSBjaGFubmVsLlxuICAgICAgaWYgKCF0aGlzLl9kYXRhQ2hhbm5lbHMuaGFzKGV2ZW50LmNoYW5uZWwubGFiZWwpKSB7XG4gICAgICAgIHRoaXMuX2RhdGFDaGFubmVscy5zZXQoZXZlbnQuY2hhbm5lbC5sYWJlbCwgZXZlbnQuY2hhbm5lbCk7XG4gICAgICAgIExvZ2dlci5kZWJ1ZygnU2F2ZSByZW1vdGUgY3JlYXRlZCBkYXRhIGNoYW5uZWwuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9iaW5kRXZlbnRzVG9EYXRhQ2hhbm5lbChldmVudC5jaGFubmVsKTtcbiAgICB9O1xuICAgIHRoaXMuX3BjLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkljZUNvbm5lY3Rpb25TdGF0ZUNoYW5nZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIC8qXG4gICAgdGhpcy5fcGMub25pY2VDaGFubmVsU3RhdGVjaGFuZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgX29uSWNlQ2hhbm5lbFN0YXRlQ2hhbmdlKHBlZXIsIGV2ZW50KTtcbiAgICB9O1xuICAgICA9IGZ1bmN0aW9uKCkge1xuICAgICAgb25OZWdvdGlhdGlvbm5lZWRlZChwZWVyc1twZWVyLmlkXSk7XG4gICAgfTtcblxuICAgIC8vRGF0YUNoYW5uZWxcbiAgICB0aGlzLl9wYy5vbmRhdGFjaGFubmVsID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIExvZ2dlci5kZWJ1ZyhteUlkICsgJzogT24gZGF0YSBjaGFubmVsJyk7XG4gICAgICAvLyBTYXZlIHJlbW90ZSBjcmVhdGVkIGRhdGEgY2hhbm5lbC5cbiAgICAgIGlmICghcGVlci5kYXRhQ2hhbm5lbHNbZXZlbnQuY2hhbm5lbC5sYWJlbF0pIHtcbiAgICAgICAgcGVlci5kYXRhQ2hhbm5lbHNbZXZlbnQuY2hhbm5lbC5sYWJlbF0gPSBldmVudC5jaGFubmVsO1xuICAgICAgICBMb2dnZXIuZGVidWcoJ1NhdmUgcmVtb3RlIGNyZWF0ZWQgZGF0YSBjaGFubmVsLicpO1xuICAgICAgfVxuICAgICAgYmluZEV2ZW50c1RvRGF0YUNoYW5uZWwoZXZlbnQuY2hhbm5lbCwgcGVlcik7XG4gICAgfTsqL1xuICB9XG5cbiAgX2RyYWluUGVuZGluZ1N0cmVhbXMoKSB7XG4gICAgbGV0IG5lZ290aWF0aW9uTmVlZGVkID0gZmFsc2U7XG4gICAgTG9nZ2VyLmRlYnVnKCdEcmFpbmluZyBwZW5kaW5nIHN0cmVhbXMuJyk7XG4gICAgaWYgKHRoaXMuX3BjICYmIHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlID09PSAnc3RhYmxlJykge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdQZWVyIGNvbm5lY3Rpb24gaXMgcmVhZHkgZm9yIGRyYWluaW5nIHBlbmRpbmcgc3RyZWFtcy4nKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGVuZGluZ1N0cmVhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fcGVuZGluZ1N0cmVhbXNbaV07XG4gICAgICAgIC8vIE9uTmVnb3RpYXRpb25OZWVkZWQgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgYWRkaW5nIHN0cmVhbSB0byBQZWVyQ29ubmVjdGlvbiBpbiBGaXJlZm94LlxuICAgICAgICAvLyBBbmQgT25OZWdvdGlhdGlvbk5lZWRlZCBoYW5kbGVyIHdpbGwgZXhlY3V0ZSBkcmFpblBlbmRpbmdTdHJlYW1zLiBUbyBhdm9pZCBhZGQgdGhlIHNhbWUgc3RyZWFtIG11bHRpcGxlIHRpbWVzLFxuICAgICAgICAvLyBzaGlmdCBpdCBmcm9tIHBlbmRpbmcgc3RyZWFtIGxpc3QgYmVmb3JlIGFkZGluZyBpdCB0byBQZWVyQ29ubmVjdGlvbi5cbiAgICAgICAgdGhpcy5fcGVuZGluZ1N0cmVhbXMuc2hpZnQoKTtcbiAgICAgICAgaWYgKCFzdHJlYW0ubWVkaWFTdHJlYW0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRUcmFja3MoKSkge1xuICAgICAgICAgIHRoaXMuX3BjLmFkZFRyYWNrKHRyYWNrLCBzdHJlYW0ubWVkaWFTdHJlYW0pO1xuICAgICAgICAgIG5lZ290aWF0aW9uTmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBMb2dnZXIuZGVidWcoJ0FkZGVkIHN0cmVhbSB0byBwZWVyIGNvbm5lY3Rpb24uJyk7XG4gICAgICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BlbmRpbmdTdHJlYW1zLmxlbmd0aCA9IDA7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX3BlbmRpbmdVbnB1Ymxpc2hTdHJlYW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICghdGhpcy5fcGVuZGluZ1VucHVibGlzaFN0cmVhbXNbal0ubWVkaWFTdHJlYW0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYy5yZW1vdmVTdHJlYW0odGhpcy5fcGVuZGluZ1VucHVibGlzaFN0cmVhbXNbal0ubWVkaWFTdHJlYW0pO1xuICAgICAgICBuZWdvdGlhdGlvbk5lZWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3VucHVibGlzaFByb21pc2VzLmdldChcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdVbnB1Ymxpc2hTdHJlYW1zW2pdLm1lZGlhU3RyZWFtLmlkKS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuZGVsZXRlKHRoaXMuX3BlbmRpbmdVbnB1Ymxpc2hTdHJlYW1zW2pdKTtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKCdSZW1vdmUgc3RyZWFtLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcGVuZGluZ1VucHVibGlzaFN0cmVhbXMubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgaWYgKG5lZ290aWF0aW9uTmVlZGVkKSB7XG4gICAgICB0aGlzLl9vbk5lZ290aWF0aW9ubmVlZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgX2RyYWluUGVuZGluZ1JlbW90ZUljZUNhbmRpZGF0ZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9yZW1vdGVJY2VDYW5kaWRhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0FkZCBjYW5kaWRhdGUnKTtcbiAgICAgIHRoaXMuX3BjLmFkZEljZUNhbmRpZGF0ZSh0aGlzLl9yZW1vdGVJY2VDYW5kaWRhdGVzW2ldKS5jYXRjaCgoZXJyb3IpPT57XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdFcnJvciBwcm9jZXNzaW5nIElDRSBjYW5kaWRhdGU6ICcrZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX3JlbW90ZUljZUNhbmRpZGF0ZXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIF9kcmFpblBlbmRpbmdNZXNzYWdlcygpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0RyYWluaW5nIHBlbmRpbmcgbWVzc2FnZXMuJyk7XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdNZXNzYWdlcy5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkYyA9IHRoaXMuX2RhdGFDaGFubmVscy5nZXQoRGF0YUNoYW5uZWxMYWJlbC5NRVNTQUdFKTtcbiAgICBpZiAoZGMgJiYgZGMucmVhZHlTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3BlbmRpbmdNZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBMb2dnZXIuZGVidWcoXG4gICAgICAgICAgICAnU2VuZGluZyBtZXNzYWdlIHZpYSBkYXRhIGNoYW5uZWw6ICcgKyB0aGlzLl9wZW5kaW5nTWVzc2FnZXNbaV0pO1xuICAgICAgICBkYy5zZW5kKEpTT04uc3RyaW5naWZ5KHRoaXMuX3BlbmRpbmdNZXNzYWdlc1tpXSkpO1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSB0aGlzLl9wZW5kaW5nTWVzc2FnZXNbaV0uaWQ7XG4gICAgICAgIGlmICh0aGlzLl9zZW5kRGF0YVByb21pc2VzLmhhcyhtZXNzYWdlSWQpKSB7XG4gICAgICAgICAgdGhpcy5fc2VuZERhdGFQcm9taXNlcy5nZXQobWVzc2FnZUlkKS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX3BlbmRpbmdNZXNzYWdlcy5sZW5ndGggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fcGMgJiYgIWRjKSB7XG4gICAgICB0aGlzLl9jcmVhdGVEYXRhQ2hhbm5lbChEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpO1xuICAgIH1cbiAgfVxuXG4gIF9zZW5kU3RyZWFtSW5mbyhzdHJlYW0pIHtcbiAgICBpZiAoIXN0cmVhbSB8fCAhc3RyZWFtLm1lZGlhU3RyZWFtKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lMTEVHQUxfQVJHVU1FTlQpO1xuICAgIH1cbiAgICBjb25zdCBpbmZvID0gW107XG4gICAgc3RyZWFtLm1lZGlhU3RyZWFtLmdldFRyYWNrcygpLm1hcCgodHJhY2spID0+IHtcbiAgICAgIGluZm8ucHVzaCh7XG4gICAgICAgIGlkOiB0cmFjay5pZCxcbiAgICAgICAgc291cmNlOiBzdHJlYW0uc291cmNlW3RyYWNrLmtpbmRdLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFt0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLlRSQUNLX1NPVVJDRVMsXG4gICAgICAgIGluZm8pLFxuICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuU1RSRUFNX0lORk8sIHtcbiAgICAgIGlkOiBzdHJlYW0ubWVkaWFTdHJlYW0uaWQsXG4gICAgICBhdHRyaWJ1dGVzOiBzdHJlYW0uYXR0cmlidXRlcyxcbiAgICAgIC8vIFRyYWNrIElEcyBtYXkgbm90IG1hdGNoIGF0IHNlbmRlciBhbmQgcmVjZWl2ZXIgc2lkZXMuXG4gICAgICB0cmFja3M6IEFycmF5LmZyb20oaW5mbywgKGl0ZW0pID0+IGl0ZW0uaWQpLFxuICAgICAgLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yIFNhZmFyaS4gUGxlYXNlIHVzZSB0cmFjay1zb3VyY2VzIGlmIHBvc3NpYmxlLlxuICAgICAgc291cmNlOiBzdHJlYW0uc291cmNlLFxuICAgIH0pLFxuICAgIF0pO1xuICB9XG5cbiAgX2hhbmRsZVJlbW90ZUNhcGFiaWxpdHkodWEpIHtcbiAgICBpZiAodWEuc2RrICYmIHVhLnNkayAmJiB1YS5zZGsudHlwZSA9PT0gJ0phdmFTY3JpcHQnICYmIHVhLnJ1bnRpbWUgJiZcbiAgICAgICAgdWEucnVudGltZS5uYW1lID09PSAnRmlyZWZveCcpIHtcbiAgICAgIHRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1JlbW92ZVN0cmVhbSA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVtb3RlU2lkZVN1cHBvcnRzUGxhbkIgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1VuaWZpZWRQbGFuID0gdHJ1ZTtcbiAgICB9IGVsc2UgeyAvLyBSZW1vdGUgc2lkZSBpcyBpT1MvQW5kcm9pZC9DKysgd2hpY2ggdXNlcyBHb29nbGUncyBXZWJSVEMgc3RhY2suXG4gICAgICB0aGlzLl9yZW1vdGVTaWRlU3VwcG9ydHNSZW1vdmVTdHJlYW0gPSB0cnVlO1xuICAgICAgdGhpcy5fcmVtb3RlU2lkZVN1cHBvcnRzUGxhbkIgPSB0cnVlO1xuICAgICAgdGhpcy5fcmVtb3RlU2lkZVN1cHBvcnRzVW5pZmllZFBsYW4gPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHVhLmNhcGFiaWxpdGllcykge1xuICAgICAgdGhpcy5fcmVtb3RlU2lkZUlnbm9yZXNEYXRhQ2hhbm5lbEFja3MgPVxuICAgICAgICAgIHVhLmNhcGFiaWxpdGllcy5pZ25vcmVEYXRhQ2hhbm5lbEFja3M7XG4gICAgfVxuICB9XG5cbiAgX2RvTmVnb3RpYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZUFuZFNlbmRPZmZlcigpO1xuICB9XG5cbiAgX3NldENvZGVjT3JkZXIoc2RwKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hdWRpb0VuY29kaW5ncykge1xuICAgICAgY29uc3QgYXVkaW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbSh0aGlzLl9jb25maWcuYXVkaW9FbmNvZGluZ3MsXG4gICAgICAgICAgKGVuY29kaW5nUGFyYW1ldGVycykgPT4gZW5jb2RpbmdQYXJhbWV0ZXJzLmNvZGVjLm5hbWUpO1xuICAgICAgc2RwID0gU2RwVXRpbHMucmVvcmRlckNvZGVjcyhzZHAsICdhdWRpbycsIGF1ZGlvQ29kZWNOYW1lcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb25maWcudmlkZW9FbmNvZGluZ3MpIHtcbiAgICAgIGNvbnN0IHZpZGVvQ29kZWNOYW1lcyA9IEFycmF5LmZyb20odGhpcy5fY29uZmlnLnZpZGVvRW5jb2RpbmdzLFxuICAgICAgICAgIChlbmNvZGluZ1BhcmFtZXRlcnMpID0+IGVuY29kaW5nUGFyYW1ldGVycy5jb2RlYy5uYW1lKTtcbiAgICAgIHNkcCA9IFNkcFV0aWxzLnJlb3JkZXJDb2RlY3Moc2RwLCAndmlkZW8nLCB2aWRlb0NvZGVjTmFtZXMpO1xuICAgIH1cbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX3NldE1heEJpdHJhdGUoc2RwLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1ZGlvRW5jb2RpbmdzID09PSAnb2JqZWN0Jykge1xuICAgICAgc2RwID0gU2RwVXRpbHMuc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMuYXVkaW9FbmNvZGluZ3MpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudmlkZW9FbmNvZGluZ3MgPT09ICdvYmplY3QnKSB7XG4gICAgICBzZHAgPSBTZHBVdGlscy5zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucy52aWRlb0VuY29kaW5ncyk7XG4gICAgfVxuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBfc2V0UnRwU2VuZGVyT3B0aW9ucyhzZHAsIG9wdGlvbnMpIHtcbiAgICBzZHAgPSB0aGlzLl9zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIF9zZXRSdHBSZWNlaXZlck9wdGlvbnMoc2RwKSB7XG4gICAgc2RwID0gdGhpcy5fc2V0Q29kZWNPcmRlcihzZHApO1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBfY3JlYXRlQW5kU2VuZE9mZmVyKCkge1xuICAgIGlmICghdGhpcy5fcGMpIHtcbiAgICAgIExvZ2dlci5lcnJvcignUGVlciBjb25uZWN0aW9uIGhhdmUgbm90IGJlZW4gY3JlYXRlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faXNOZWdvdGlhdGlvbk5lZWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2lzQ2FsbGVyID0gdHJ1ZTtcbiAgICBsZXQgbG9jYWxEZXNjO1xuICAgIHRoaXMuX3BjLmNyZWF0ZU9mZmVyKCkudGhlbigoZGVzYykgPT4ge1xuICAgICAgZGVzYy5zZHAgPSB0aGlzLl9zZXRSdHBSZWNlaXZlck9wdGlvbnMoZGVzYy5zZHApO1xuICAgICAgbG9jYWxEZXNjID0gZGVzYztcbiAgICAgIGlmICh0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ3N0YWJsZScpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BjLnNldExvY2FsRGVzY3JpcHRpb24oZGVzYykudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbmRTZHAobG9jYWxEZXNjKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIExvZ2dlci5lcnJvcihlLm1lc3NhZ2UgKyAnIFBsZWFzZSBjaGVjayB5b3VyIGNvZGVjIHNldHRpbmdzLicpO1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9XRUJSVENfU0RQLFxuICAgICAgICAgIGUubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdG9wKGVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVBbmRTZW5kQW5zd2VyKCkge1xuICAgIHRoaXMuX2RyYWluUGVuZGluZ1N0cmVhbXMoKTtcbiAgICB0aGlzLl9pc05lZ290aWF0aW9uTmVlZGVkID0gZmFsc2U7XG4gICAgdGhpcy5faXNDYWxsZXIgPSBmYWxzZTtcbiAgICBsZXQgbG9jYWxEZXNjO1xuICAgIHRoaXMuX3BjLmNyZWF0ZUFuc3dlcigpLnRoZW4oKGRlc2MpID0+IHtcbiAgICAgIGRlc2Muc2RwID0gdGhpcy5fc2V0UnRwUmVjZWl2ZXJPcHRpb25zKGRlc2Muc2RwKTtcbiAgICAgIGxvY2FsRGVzYz1kZXNjO1xuICAgICAgdGhpcy5fbG9nQ3VycmVudEFuZFBlbmRpbmdMb2NhbERlc2NyaXB0aW9uKCk7XG4gICAgICByZXR1cm4gdGhpcy5fcGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjKTtcbiAgICB9KS50aGVuKCgpPT57XG4gICAgICByZXR1cm4gdGhpcy5fc2VuZFNkcChsb2NhbERlc2MpO1xuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBMb2dnZXIuZXJyb3IoZS5tZXNzYWdlICsgJyBQbGVhc2UgY2hlY2sgeW91ciBjb2RlYyBzZXR0aW5ncy4nKTtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKEVycm9yTW9kdWxlLmVycm9ycy5QMlBfV0VCUlRDX1NEUCxcbiAgICAgICAgICBlLm1lc3NhZ2UpO1xuICAgICAgdGhpcy5fc3RvcChlcnJvciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBfbG9nQ3VycmVudEFuZFBlbmRpbmdMb2NhbERlc2NyaXB0aW9uKCkge1xuICAgIExvZ2dlci5pbmZvKCdDdXJyZW50IGRlc2NyaXB0aW9uOiAnICsgdGhpcy5fcGMuY3VycmVudExvY2FsRGVzY3JpcHRpb24pO1xuICAgIExvZ2dlci5pbmZvKCdQZW5kaW5nIGRlc2NyaXB0aW9uOiAnICsgdGhpcy5fcGMucGVuZGluZ0xvY2FsRGVzY3JpcHRpb24pO1xuICB9XG5cbiAgX2dldEFuZERlbGV0ZVRyYWNrU291cmNlSW5mbyh0cmFja3MpIHtcbiAgICBpZiAodHJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRyYWNrSWQgPSB0cmFja3NbMF0uaWQ7XG4gICAgICBpZiAodGhpcy5fcmVtb3RlVHJhY2tTb3VyY2VJbmZvLmhhcyh0cmFja0lkKSkge1xuICAgICAgICBjb25zdCBzb3VyY2VJbmZvID0gdGhpcy5fcmVtb3RlVHJhY2tTb3VyY2VJbmZvLmdldCh0cmFja0lkKTtcbiAgICAgICAgdGhpcy5fcmVtb3RlVHJhY2tTb3VyY2VJbmZvLmRlbGV0ZSh0cmFja0lkKTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgc291cmNlIGluZm8gZm9yICcgKyB0cmFja0lkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfdW5wdWJsaXNoKHN0cmVhbSkge1xuICAgIGlmIChuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhIHx8ICF0aGlzLl9yZW1vdGVTaWRlU3VwcG9ydHNSZW1vdmVTdHJlYW0pIHtcbiAgICAgIC8vIEFjdHVhbGx5IHVucHVibGlzaCBpcyBzdXBwb3J0ZWQuIEl0IGlzIGEgbGl0dGxlIGJpdCBjb21wbGV4IHNpbmNlXG4gICAgICAvLyBGaXJlZm94IGltcGxlbWVudGVkIFdlYlJUQyBzcGVjIHdoaWxlIENocm9tZSBpbXBsZW1lbnRlZCBhbiBvbGQgQVBJLlxuICAgICAgTG9nZ2VyLmVycm9yKFxuICAgICAgICAgICdTdG9wcGluZyBhIHB1YmxpY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgb24gRmlyZWZveC4gUGxlYXNlIHVzZSAnICtcbiAgICAgICAgICAnUDJQQ2xpZW50LnN0b3AoKSB0byBzdG9wIHRoZSBjb25uZWN0aW9uIHdpdGggcmVtb3RlIGVuZHBvaW50LidcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX1VOU1VQUE9SVEVEX01FVEhPRCkpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuaGFzKHN0cmVhbSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSUxMRUdBTF9BUkdVTUVOVCkpO1xuICAgIH1cbiAgICB0aGlzLl9wZW5kaW5nVW5wdWJsaXNoU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3VucHVibGlzaFByb21pc2VzLnNldChzdHJlYW0ubWVkaWFTdHJlYW0uaWQsIHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2RyYWluUGVuZGluZ1N0cmVhbXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSB8X3BjfCBpcyBhdmFpbGFibGUgYmVmb3JlIGNhbGxpbmcgdGhpcyBtZXRob2QuXG4gIF9jcmVhdGVEYXRhQ2hhbm5lbChsYWJlbCkge1xuICAgIGlmICh0aGlzLl9kYXRhQ2hhbm5lbHMuaGFzKGxhYmVsKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0RhdGEgY2hhbm5lbCBsYWJlbGVkICcrIGxhYmVsKycgYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fcGMpIHtcbiAgICAgIExvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAnUGVlckNvbm5lY3Rpb24gaXMgbm90IGF2YWlsYWJsZSBiZWZvcmUgY3JlYXRpbmcgRGF0YUNoYW5uZWwuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIExvZ2dlci5kZWJ1ZygnQ3JlYXRlIGRhdGEgY2hhbm5lbC4nKTtcbiAgICBjb25zdCBkYyA9IHRoaXMuX3BjLmNyZWF0ZURhdGFDaGFubmVsKGxhYmVsKTtcbiAgICB0aGlzLl9iaW5kRXZlbnRzVG9EYXRhQ2hhbm5lbChkYyk7XG4gICAgdGhpcy5fZGF0YUNoYW5uZWxzLnNldChEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UsIGRjKTtcbiAgICB0aGlzLl9vbk5lZ290aWF0aW9ubmVlZGVkKCk7XG4gIH1cblxuICBfYmluZEV2ZW50c1RvRGF0YUNoYW5uZWwoZGMpIHtcbiAgICBkYy5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uRGF0YUNoYW5uZWxNZXNzYWdlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgZGMub25vcGVuID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkRhdGFDaGFubmVsT3Blbi5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIGRjLm9uY2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uRGF0YUNoYW5uZWxDbG9zZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIGRjLm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnRGF0YSBDaGFubmVsIEVycm9yOiAnICsgZXZlbnQpO1xuICAgIH07XG4gIH1cblxuICAvLyBSZXR1cm5zIGFsbCBNZWRpYVN0cmVhbXMgaXQgYmVsb25ncyB0by5cbiAgX2dldFN0cmVhbUJ5VHJhY2sobWVkaWFTdHJlYW1UcmFjaykge1xuICAgIGNvbnN0IHN0cmVhbXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgaW5mb10gb2YgdGhpcy5fcmVtb3RlU3RyZWFtSW5mbykge1xuICAgICAgaWYgKCFpbmZvLnN0cmVhbSB8fCAhaW5mby5zdHJlYW0ubWVkaWFTdHJlYW0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIGluZm8uc3RyZWFtLm1lZGlhU3RyZWFtLmdldFRyYWNrcygpKSB7XG4gICAgICAgIGlmIChtZWRpYVN0cmVhbVRyYWNrID09PSB0cmFjaykge1xuICAgICAgICAgIHN0cmVhbXMucHVzaChpbmZvLnN0cmVhbS5tZWRpYVN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cmVhbXM7XG4gIH1cblxuICBfYXJlQWxsVHJhY2tzRW5kZWQobWVkaWFTdHJlYW0pIHtcbiAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIG1lZGlhU3RyZWFtLmdldFRyYWNrcygpKSB7XG4gICAgICBpZiAodHJhY2sucmVhZHlTdGF0ZSA9PT0gJ2xpdmUnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfc3RvcChlcnJvciwgbm90aWZ5UmVtb3RlKSB7XG4gICAgbGV0IHByb21pc2VFcnJvciA9IGVycm9yO1xuICAgIGlmICghcHJvbWlzZUVycm9yKSB7XG4gICAgICBwcm9taXNlRXJyb3IgPSBuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfVU5LTk9XTik7XG4gICAgfVxuICAgIGZvciAoY29uc3QgWy8qIGxhYmVsICovLCBkY10gb2YgdGhpcy5fZGF0YUNoYW5uZWxzKSB7XG4gICAgICBkYy5jbG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLl9kYXRhQ2hhbm5lbHMuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5fcGMgJiYgdGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlICE9PSAnY2xvc2VkJykge1xuICAgICAgdGhpcy5fcGMuY2xvc2UoKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHByb21pc2VdIG9mIHRoaXMuX3B1Ymxpc2hQcm9taXNlcykge1xuICAgICAgcHJvbWlzZS5yZWplY3QocHJvbWlzZUVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5fcHVibGlzaFByb21pc2VzLmNsZWFyKCk7XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHByb21pc2VdIG9mIHRoaXMuX3VucHVibGlzaFByb21pc2VzKSB7XG4gICAgICBwcm9taXNlLnJlamVjdChwcm9taXNlRXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLl91bnB1Ymxpc2hQcm9taXNlcy5jbGVhcigpO1xuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBwcm9taXNlXSBvZiB0aGlzLl9zZW5kRGF0YVByb21pc2VzKSB7XG4gICAgICBwcm9taXNlLnJlamVjdChwcm9taXNlRXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLl9zZW5kRGF0YVByb21pc2VzLmNsZWFyKCk7XG4gICAgLy8gRmlyZSBlbmRlZCBldmVudCBpZiBwdWJsaWNhdGlvbiBvciByZW1vdGUgc3RyZWFtIGV4aXN0cy5cbiAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1zLmZvckVhY2goKHB1YmxpY2F0aW9uKSA9PiB7XG4gICAgICBwdWJsaWNhdGlvbi5kaXNwYXRjaEV2ZW50KG5ldyBPd3RFdmVudCgnZW5kZWQnKSk7XG4gICAgfSk7XG4gICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtcy5jbGVhcigpO1xuICAgIHRoaXMuX3JlbW90ZVN0cmVhbXMuZm9yRWFjaCgoc3RyZWFtKSA9PiB7XG4gICAgICBzdHJlYW0uZGlzcGF0Y2hFdmVudChuZXcgT3d0RXZlbnQoJ2VuZGVkJykpO1xuICAgIH0pO1xuICAgIHRoaXMuX3JlbW90ZVN0cmVhbXMgPSBbXTtcbiAgICBpZiAoIXRoaXMuX2Rpc3Bvc2VkKSB7XG4gICAgICBpZiAobm90aWZ5UmVtb3RlKSB7XG4gICAgICAgIGxldCBzZW5kRXJyb3I7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHNlbmRFcnJvciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAvLyBBdm9pZCB0byBsZWFrIGRldGFpbGVkIGVycm9yIHRvIHJlbW90ZSBzaWRlLlxuICAgICAgICAgIHNlbmRFcnJvci5tZXNzYWdlID0gJ0Vycm9yIGhhcHBlbmVkIGF0IHJlbW90ZSBzaWRlLic7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5DTE9TRUQsIHNlbmRFcnJvcikuY2F0Y2goXG4gICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIHNlbmQgY2xvc2UuJyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnZW5kZWQnKSk7XG4gICAgfVxuICB9XG5cbiAgX3NldFN0cmVhbVRvUmVtb3RlU3RyZWFtSW5mbyhtZWRpYVN0cmVhbSkge1xuICAgIGNvbnN0IGluZm8gPSB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChtZWRpYVN0cmVhbS5pZCk7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGluZm8uYXR0cmlidXRlcztcbiAgICBjb25zdCBzb3VyY2VJbmZvID0gbmV3IFN0cmVhbU1vZHVsZS5TdHJlYW1Tb3VyY2VJbmZvKHRoaXMuX3JlbW90ZVN0cmVhbUluZm9cbiAgICAgICAgLmdldChtZWRpYVN0cmVhbS5pZCkuc291cmNlLmF1ZGlvLCB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChcbiAgICAgICAgbWVkaWFTdHJlYW0uaWQpXG4gICAgICAgIC5zb3VyY2UudmlkZW8pO1xuICAgIGluZm8uc3RyZWFtID0gbmV3IFN0cmVhbU1vZHVsZS5SZW1vdGVTdHJlYW0oXG4gICAgICAgIHVuZGVmaW5lZCwgdGhpcy5fcmVtb3RlSWQsIG1lZGlhU3RyZWFtLFxuICAgICAgICBzb3VyY2VJbmZvLCBhdHRyaWJ1dGVzKTtcbiAgICBpbmZvLm1lZGlhU3RyZWFtID0gbWVkaWFTdHJlYW07XG4gICAgY29uc3Qgc3RyZWFtID0gaW5mby5zdHJlYW07XG4gICAgaWYgKHN0cmVhbSkge1xuICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdGYWlsZWQgdG8gY3JlYXRlIFJlbW90ZVN0cmVhbS4nKTtcbiAgICB9XG4gIH1cblxuICBfY2hlY2tJY2VDb25uZWN0aW9uU3RhdGVBbmRGaXJlRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX3BjLmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2Nvbm5lY3RlZCcgfHxcbiAgICAgICAgdGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29tcGxldGVkJykge1xuICAgICAgZm9yIChjb25zdCBbLyogaWQgKi8sIGluZm9dIG9mIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8pIHtcbiAgICAgICAgaWYgKGluZm8ubWVkaWFTdHJlYW0pIHtcbiAgICAgICAgICBjb25zdCBzdHJlYW1FdmVudCA9IG5ldyBTdHJlYW1Nb2R1bGUuU3RyZWFtRXZlbnQoJ3N0cmVhbWFkZGVkJywge1xuICAgICAgICAgICAgc3RyZWFtOiBpbmZvLnN0cmVhbSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodGhpcy5faXNVbmlmaWVkUGxhbigpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIGluZm8ubWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkpIHtcbiAgICAgICAgICAgICAgdHJhY2suYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZWRpYVN0cmVhbXMgPSB0aGlzLl9nZXRTdHJlYW1CeVRyYWNrKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBtZWRpYVN0cmVhbSBvZiBtZWRpYVN0cmVhbXMpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hcmVBbGxUcmFja3NFbmRlZChtZWRpYVN0cmVhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25SZW1vdGVTdHJlYW1SZW1vdmVkKHtzdHJlYW06IG1lZGlhU3RyZWFtfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5UUkFDS1NfQURERUQsIGluZm8udHJhY2tJZHMpO1xuICAgICAgICAgIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KGluZm8ubWVkaWFTdHJlYW0uaWQpLm1lZGlhU3RyZWFtID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFAyUFBlZXJDb25uZWN0aW9uQ2hhbm5lbDtcbiJdfQ==
