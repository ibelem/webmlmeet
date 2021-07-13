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

    if (stream && !(stream instanceof MediaStream) && !(typeof SendStream === 'function' && stream instanceof SendStream) && !(typeof BidirectionalStream === 'function' && stream instanceof BidirectionalStream) || (0, _typeof2["default"])(sourceInfo) !== 'object') {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVGdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsInNyYy9zZGsvYmFzZS9iYXNlNjQuanMiLCJzcmMvc2RrL2Jhc2UvY29kZWMuanMiLCJzcmMvc2RrL2Jhc2UvZXZlbnQuanMiLCJzcmMvc2RrL2Jhc2UvZXhwb3J0LmpzIiwic3JjL3Nkay9iYXNlL2xvZ2dlci5qcyIsInNyYy9zZGsvYmFzZS9tZWRpYWZvcm1hdC5qcyIsInNyYy9zZGsvYmFzZS9tZWRpYXN0cmVhbS1mYWN0b3J5LmpzIiwic3JjL3Nkay9iYXNlL3B1YmxpY2F0aW9uLmpzIiwic3JjL3Nkay9iYXNlL3NkcHV0aWxzLmpzIiwic3JjL3Nkay9iYXNlL3N0cmVhbS5qcyIsInNyYy9zZGsvYmFzZS90cmFuc3BvcnQuanMiLCJzcmMvc2RrL2Jhc2UvdXRpbHMuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvY2hhbm5lbC5qcyIsInNyYy9zZGsvY29uZmVyZW5jZS9jbGllbnQuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvZXJyb3IuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvZXhwb3J0LmpzIiwic3JjL3Nkay9jb25mZXJlbmNlL2luZm8uanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvbWl4ZWRzdHJlYW0uanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvcGFydGljaXBhbnQuanMiLCJzcmMvc2RrL2NvbmZlcmVuY2UvcXVpY2Nvbm5lY3Rpb24uanMiLCJzcmMvc2RrL2NvbmZlcmVuY2Uvc2lnbmFsaW5nLmpzIiwic3JjL3Nkay9jb25mZXJlbmNlL3N0cmVhbXV0aWxzLmpzIiwic3JjL3Nkay9jb25mZXJlbmNlL3N1YnNjcmlwdGlvbi5qcyIsInNyYy9zZGsvZXhwb3J0LmpzIiwic3JjL3Nkay9wMnAvZXJyb3IuanMiLCJzcmMvc2RrL3AycC9leHBvcnQuanMiLCJzcmMvc2RrL3AycC9wMnBjbGllbnQuanMiLCJzcmMvc2RrL3AycC9wZWVyY29ubmVjdGlvbi1jaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzV1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQUNPLElBQU0sTUFBTSxHQUFJLFlBQVc7QUFDaEMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUF0QjtBQUNBLE1BQUksU0FBSjtBQUNBLE1BQUksV0FBSjtBQUVBLE1BQUksQ0FBSjtBQUVBLE1BQU0sV0FBVyxHQUFHLENBQ2xCLEdBRGtCLEVBQ2IsR0FEYSxFQUNS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LFNBQWpCLEVBREs7QUFBQTs7QUFBQTtBQUN6Qiw0RUFBa0Q7QUFBQSx3QkFBdkMsS0FBdUM7QUFDaEQsb0JBQUEsS0FBSyxDQUFDLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUMsS0FBRCxFQUFXO0FBQ3pDLDBCQUFNLFlBQVksR0FBRyxPQUFJLENBQUMsaUJBQUwsQ0FBdUIsS0FBSyxDQUFDLE1BQTdCLENBQXJCOztBQUR5QyxtRUFFZixZQUZlO0FBQUE7O0FBQUE7QUFFekMsa0ZBQXdDO0FBQUEsOEJBQTdCLFdBQTZCOztBQUN0Qyw4QkFBSSxPQUFJLENBQUMsa0JBQUwsQ0FBd0IsV0FBeEIsQ0FBSixFQUEwQztBQUN4Qyw0QkFBQSxPQUFJLENBQUMsc0JBQUwsQ0FBNEI7QUFBQyw4QkFBQSxNQUFNLEVBQUU7QUFBVCw2QkFBNUI7QUFDRDtBQUNGO0FBTndDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPMUMscUJBUEQ7QUFRRDtBQVZ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVzFCOztBQUNELG1CQUFLLHFCQUFMLENBQTJCLGFBQWEsQ0FBQyxZQUF6QyxFQUF1RCxJQUFJLENBQUMsUUFBNUQ7O0FBQ0EsbUJBQUssaUJBQUwsQ0FBdUIsR0FBdkIsQ0FBMkIsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsRUFBNUMsRUFBZ0QsV0FBaEQsR0FBOEQsSUFBOUQ7QUFDQSxtQkFBSyxhQUFMLENBQW1CLFdBQW5CO0FBQ0Q7QUFDRjtBQXRCOEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCaEQ7QUFDRjs7O0VBcGhDb0Msc0I7O2VBdWhDeEIsd0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3RcIik7XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3Q7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZUZ1bmN0aW9uOyIsImZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgaXNOYXRpdmVGdW5jdGlvbiA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlRnVuY3Rpb25cIik7XG5cbnZhciBjb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3RcIik7XG5cbmZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcblxuICBtb2R1bGUuZXhwb3J0cyA9IF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFpc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3dyYXBOYXRpdmVTdXBlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvLyBNSVQgTGljZW5zZVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxMiBVbml2ZXJzaWRhZCBQb2xpdMOpY25pY2EgZGUgTWFkcmlkXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4vLyBTT0ZUV0FSRS5cblxuLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vLyBUaGlzIGZpbGUgaXMgYm9ycm93ZWQgZnJvbSBseW5ja2lhL2xpY29kZSB3aXRoIHNvbWUgbW9kaWZpY2F0aW9ucy5cblxuLyogZ2xvYmFsIHVuZXNjYXBlKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCBjb25zdCBCYXNlNjQgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IEVORF9PRl9JTlBVVCA9IC0xO1xuICBsZXQgYmFzZTY0U3RyO1xuICBsZXQgYmFzZTY0Q291bnQ7XG5cbiAgbGV0IGk7XG5cbiAgY29uc3QgYmFzZTY0Q2hhcnMgPSBbXG4gICAgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsXG4gICAgJ0knLCAnSicsICdLJywgJ0wnLCAnTScsICdOJywgJ08nLCAnUCcsXG4gICAgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsXG4gICAgJ1knLCAnWicsICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsXG4gICAgJ2cnLCAnaCcsICdpJywgJ2onLCAnaycsICdsJywgJ20nLCAnbicsXG4gICAgJ28nLCAncCcsICdxJywgJ3InLCAncycsICd0JywgJ3UnLCAndicsXG4gICAgJ3cnLCAneCcsICd5JywgJ3onLCAnMCcsICcxJywgJzInLCAnMycsXG4gICAgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJysnLCAnLycsXG4gIF07XG5cbiAgY29uc3QgcmV2ZXJzZUJhc2U2NENoYXJzID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IGJhc2U2NENoYXJzLmxlbmd0aDsgaSA9IGkgKyAxKSB7XG4gICAgcmV2ZXJzZUJhc2U2NENoYXJzW2Jhc2U2NENoYXJzW2ldXSA9IGk7XG4gIH1cblxuICBjb25zdCBzZXRCYXNlNjRTdHIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBiYXNlNjRTdHIgPSBzdHI7XG4gICAgYmFzZTY0Q291bnQgPSAwO1xuICB9O1xuXG4gIGNvbnN0IHJlYWRCYXNlNjQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWJhc2U2NFN0cikge1xuICAgICAgcmV0dXJuIEVORF9PRl9JTlBVVDtcbiAgICB9XG4gICAgaWYgKGJhc2U2NENvdW50ID49IGJhc2U2NFN0ci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBFTkRfT0ZfSU5QVVQ7XG4gICAgfVxuICAgIGNvbnN0IGMgPSBiYXNlNjRTdHIuY2hhckNvZGVBdChiYXNlNjRDb3VudCkgJiAweGZmO1xuICAgIGJhc2U2NENvdW50ID0gYmFzZTY0Q291bnQgKyAxO1xuICAgIHJldHVybiBjO1xuICB9O1xuXG4gIGNvbnN0IGVuY29kZUJhc2U2NCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGRvbmU7XG4gICAgc2V0QmFzZTY0U3RyKHN0cik7XG4gICAgcmVzdWx0ID0gJyc7XG4gICAgY29uc3QgaW5CdWZmZXIgPSBuZXcgQXJyYXkoMyk7XG4gICAgZG9uZSA9IGZhbHNlO1xuICAgIHdoaWxlICghZG9uZSAmJiAoaW5CdWZmZXJbMF0gPSByZWFkQmFzZTY0KCkpICE9PSBFTkRfT0ZfSU5QVVQpIHtcbiAgICAgIGluQnVmZmVyWzFdID0gcmVhZEJhc2U2NCgpO1xuICAgICAgaW5CdWZmZXJbMl0gPSByZWFkQmFzZTY0KCk7XG4gICAgICByZXN1bHQgPSByZXN1bHQgKyAoYmFzZTY0Q2hhcnNbaW5CdWZmZXJbMF0gPj4gMl0pO1xuICAgICAgaWYgKGluQnVmZmVyWzFdICE9PSBFTkRfT0ZfSU5QVVQpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKGJhc2U2NENoYXJzWygoaW5CdWZmZXJbMF0gPDwgNCkgJiAweDMwKSB8IChcbiAgICAgICAgICBpbkJ1ZmZlclsxXSA+PiA0KV0pO1xuICAgICAgICBpZiAoaW5CdWZmZXJbMl0gIT09IEVORF9PRl9JTlBVVCkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIChiYXNlNjRDaGFyc1soKGluQnVmZmVyWzFdIDw8IDIpICYgMHgzYykgfCAoXG4gICAgICAgICAgICBpbkJ1ZmZlclsyXSA+PiA2KV0pO1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIChiYXNlNjRDaGFyc1tpbkJ1ZmZlclsyXSAmIDB4M0ZdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAoYmFzZTY0Q2hhcnNbKChpbkJ1ZmZlclsxXSA8PCAyKSAmIDB4M2MpXSk7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKCc9Jyk7XG4gICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIChiYXNlNjRDaGFyc1soKGluQnVmZmVyWzBdIDw8IDQpICYgMHgzMCldKTtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKCc9Jyk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICgnPScpO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCByZWFkUmV2ZXJzZUJhc2U2NCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghYmFzZTY0U3RyKSB7XG4gICAgICByZXR1cm4gRU5EX09GX0lOUFVUO1xuICAgIH1cbiAgICB3aGlsZSAodHJ1ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgaWYgKGJhc2U2NENvdW50ID49IGJhc2U2NFN0ci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIEVORF9PRl9JTlBVVDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5leHRDaGFyYWN0ZXIgPSBiYXNlNjRTdHIuY2hhckF0KGJhc2U2NENvdW50KTtcbiAgICAgIGJhc2U2NENvdW50ID0gYmFzZTY0Q291bnQgKyAxO1xuICAgICAgaWYgKHJldmVyc2VCYXNlNjRDaGFyc1tuZXh0Q2hhcmFjdGVyXSkge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZUJhc2U2NENoYXJzW25leHRDaGFyYWN0ZXJdO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDaGFyYWN0ZXIgPT09ICdBJykge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbnRvcyA9IGZ1bmN0aW9uKG4pIHtcbiAgICBuID0gbi50b1N0cmluZygxNik7XG4gICAgaWYgKG4ubGVuZ3RoID09PSAxKSB7XG4gICAgICBuID0gJzAnICsgbjtcbiAgICB9XG4gICAgbiA9ICclJyArIG47XG4gICAgcmV0dXJuIHVuZXNjYXBlKG4pO1xuICB9O1xuXG4gIGNvbnN0IGRlY29kZUJhc2U2NCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGRvbmU7XG4gICAgc2V0QmFzZTY0U3RyKHN0cik7XG4gICAgcmVzdWx0ID0gJyc7XG4gICAgY29uc3QgaW5CdWZmZXIgPSBuZXcgQXJyYXkoNCk7XG4gICAgZG9uZSA9IGZhbHNlO1xuICAgIHdoaWxlICghZG9uZSAmJiAoaW5CdWZmZXJbMF0gPSByZWFkUmV2ZXJzZUJhc2U2NCgpKSAhPT0gRU5EX09GX0lOUFVUICYmXG4gICAgICAoaW5CdWZmZXJbMV0gPSByZWFkUmV2ZXJzZUJhc2U2NCgpKSAhPT0gRU5EX09GX0lOUFVUKSB7XG4gICAgICBpbkJ1ZmZlclsyXSA9IHJlYWRSZXZlcnNlQmFzZTY0KCk7XG4gICAgICBpbkJ1ZmZlclszXSA9IHJlYWRSZXZlcnNlQmFzZTY0KCk7XG4gICAgICByZXN1bHQgPSByZXN1bHQgKyBudG9zKCgoKGluQnVmZmVyWzBdIDw8IDIpICYgMHhmZikgfCBpbkJ1ZmZlclsxXSA+PlxuICAgICAgICA0KSk7XG4gICAgICBpZiAoaW5CdWZmZXJbMl0gIT09IEVORF9PRl9JTlBVVCkge1xuICAgICAgICByZXN1bHQgKz0gbnRvcygoKChpbkJ1ZmZlclsxXSA8PCA0KSAmIDB4ZmYpIHwgaW5CdWZmZXJbMl0gPj4gMikpO1xuICAgICAgICBpZiAoaW5CdWZmZXJbM10gIT09IEVORF9PRl9JTlBVVCkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIG50b3MoKCgoaW5CdWZmZXJbMl0gPDwgNikgJiAweGZmKSB8IGluQnVmZmVyW1xuICAgICAgICAgICAgICAzXSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGVuY29kZUJhc2U2NDogZW5jb2RlQmFzZTY0LFxuICAgIGRlY29kZUJhc2U2NDogZGVjb2RlQmFzZTY0LFxuICB9O1xufSgpKTtcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBBdWRpb0NvZGVjXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgQXVkaW8gY29kZWMgZW51bWVyYXRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBBdWRpb0NvZGVjID0ge1xuICBQQ01VOiAncGNtdScsXG4gIFBDTUE6ICdwY21hJyxcbiAgT1BVUzogJ29wdXMnLFxuICBHNzIyOiAnZzcyMicsXG4gIElTQUM6ICdpU0FDJyxcbiAgSUxCQzogJ2lMQkMnLFxuICBBQUM6ICdhYWMnLFxuICBBQzM6ICdhYzMnLFxuICBORUxMWU1PU0VSOiAnbmVsbHltb3NlcicsXG59O1xuLyoqXG4gKiBAY2xhc3MgQXVkaW9Db2RlY1BhcmFtZXRlcnNcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBDb2RlYyBwYXJhbWV0ZXJzIGZvciBhbiBhdWRpbyB0cmFjay5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvQ29kZWNQYXJhbWV0ZXJzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IobmFtZSwgY2hhbm5lbENvdW50LCBjbG9ja1JhdGUpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuQXVkaW9Db2RlY1BhcmFtZXRlcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBOYW1lIG9mIGEgY29kZWMuIFBsZWFzZSBhIHZhbHVlIGluIE93dC5CYXNlLkF1ZGlvQ29kZWMuIEhvd2V2ZXIsXG4gICAgICogc29tZSBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgYWxsIHRoZSB2YWx1ZXMgaW4gT3d0LkJhc2UuQXVkaW9Db2RlYy5cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGNoYW5uZWxDb3VudFxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb0NvZGVjUGFyYW1ldGVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIE51bWJlcnMgb2YgY2hhbm5lbHMgZm9yIGFuIGF1ZGlvIHRyYWNrLlxuICAgICAqL1xuICAgIHRoaXMuY2hhbm5lbENvdW50ID0gY2hhbm5lbENvdW50O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGNsb2NrUmF0ZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb0NvZGVjUGFyYW1ldGVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIFRoZSBjb2RlYyBjbG9jayByYXRlIGV4cHJlc3NlZCBpbiBIZXJ0ei5cbiAgICAgKi9cbiAgICB0aGlzLmNsb2NrUmF0ZSA9IGNsb2NrUmF0ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBBdWRpb0VuY29kaW5nUGFyYW1ldGVyc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIEVuY29kaW5nIHBhcmFtZXRlcnMgZm9yIHNlbmRpbmcgYW4gYXVkaW8gdHJhY2suXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBdWRpb0VuY29kaW5nUGFyYW1ldGVycyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjLCBtYXhCaXRyYXRlKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzfSBjb2RlY1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb0VuY29kaW5nUGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHRoaXMuY29kZWMgPSBjb2RlYztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBtYXhCaXRyYXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLkF1ZGlvRW5jb2RpbmdQYXJhbWV0ZXJzXG4gICAgICogQGRlc2MgTWF4IGJpdHJhdGUgZXhwcmVzc2VkIGluIGticHMuXG4gICAgICovXG4gICAgdGhpcy5tYXhCaXRyYXRlID0gbWF4Qml0cmF0ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBWaWRlb0NvZGVjXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgVmlkZW8gY29kZWMgZW51bWVyYXRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBWaWRlb0NvZGVjID0ge1xuICBWUDg6ICd2cDgnLFxuICBWUDk6ICd2cDknLFxuICBIMjY0OiAnaDI2NCcsXG4gIEgyNjU6ICdoMjY1Jyxcbn07XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvQ29kZWNQYXJhbWV0ZXJzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgQ29kZWMgcGFyYW1ldGVycyBmb3IgYSB2aWRlbyB0cmFjay5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFZpZGVvQ29kZWNQYXJhbWV0ZXJzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IobmFtZSwgcHJvZmlsZSkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gbmFtZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb0NvZGVjUGFyYW1ldGVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIE5hbWUgb2YgYSBjb2RlYy5QbGVhc2UgYSB2YWx1ZSBpbiBPd3QuQmFzZS5BdWRpb0NvZGVjLkhvd2V2ZXIsXG4gICAgICAgc29tZSBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgYWxsIHRoZSB2YWx1ZXMgaW4gT3d0LkJhc2UuQXVkaW9Db2RlYy5cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9zdHJpbmd9IHByb2ZpbGVcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9Db2RlY1BhcmFtZXRlcnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBUaGUgcHJvZmlsZSBvZiBhIGNvZGVjLiBQcm9maWxlIG1heSBub3QgYXBwbHkgdG8gYWxsIGNvZGVjcy5cbiAgICAgKi9cbiAgICB0aGlzLnByb2ZpbGUgPSBwcm9maWxlO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvRW5jb2RpbmdQYXJhbWV0ZXJzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgRW5jb2RpbmcgcGFyYW1ldGVycyBmb3Igc2VuZGluZyBhIHZpZGVvIHRyYWNrLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVmlkZW9FbmNvZGluZ1BhcmFtZXRlcnMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlYywgbWF4Qml0cmF0ZSkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5WaWRlb0NvZGVjUGFyYW1ldGVyc30gY29kZWNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVmlkZW9FbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjID0gY29kZWM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gbWF4Qml0cmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb0VuY29kaW5nUGFyYW1ldGVyc1xuICAgICAqIEBkZXNjIE1heCBiaXRyYXRlIGV4cHJlc3NlZCBpbiBrYnBzLlxuICAgICAqL1xuICAgIHRoaXMubWF4Qml0cmF0ZSA9IG1heEJpdHJhdGU7XG4gIH1cbn1cbiIsIi8vIE1JVCBMaWNlbnNlXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDEyIFVuaXZlcnNpZGFkIFBvbGl0w6ljbmljYSBkZSBNYWRyaWRcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbi8vIFNPRlRXQVJFLlxuXG4vLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8vIFRoaXMgZmlsZSBpcyBib3Jyb3dlZCBmcm9tIGx5bmNraWEvbGljb2RlIHdpdGggc29tZSBtb2RpZmljYXRpb25zLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGNsYXNzIEV2ZW50RGlzcGF0Y2hlclxuICogQGNsYXNzRGVzYyBBIHNoaW0gZm9yIEV2ZW50VGFyZ2V0LiBNaWdodCBiZSBjaGFuZ2VkIHRvIEV2ZW50VGFyZ2V0IGxhdGVyLlxuICogQG1lbWJlcm9mIE93dC5CYXNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBFdmVudERpc3BhdGNoZXIgPSBmdW5jdGlvbigpIHtcbiAgLy8gUHJpdmF0ZSB2YXJzXG4gIGNvbnN0IHNwZWMgPSB7fTtcbiAgc3BlYy5kaXNwYXRjaGVyID0ge307XG4gIHNwZWMuZGlzcGF0Y2hlci5ldmVudExpc3RlbmVycyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclxuICAgKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIHJlZ2lzdGVycyBhIGNhbGxiYWNrIGZ1bmN0aW9uIGFzIGEgaGFuZGxlciBmb3IgdGhlXG4gICAqIGNvcnJlc3BvbmRpbmcgZXZlbnQuIEl0J3Mgc2hvcnRlbmVkIGZvcm0gaXMgb24oZXZlbnRUeXBlLCBsaXN0ZW5lcikuIFNlZVxuICAgKiB0aGUgZXZlbnQgZGVzY3JpcHRpb24gaW4gdGhlIGZvbGxvd2luZyB0YWJsZS5cbiAgICogQGluc3RhbmNlXG4gICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBFdmVudCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgdGhpcy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnRUeXBlLCBsaXN0ZW5lcikge1xuICAgIGlmIChzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9IFtdO1xuICAgIH1cbiAgICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICogQGRlc2MgVGhpcyBmdW5jdGlvbiByZW1vdmVzIGEgcmVnaXN0ZXJlZCBldmVudCBsaXN0ZW5lci5cbiAgICogQGluc3RhbmNlXG4gICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBFdmVudCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnRUeXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGNsZWFyRXZlbnRMaXN0ZW5lclxuICAgKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYWxsIGV2ZW50IGxpc3RlbmVycyBmb3Igb25lIHR5cGUuXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgRXZlbnQgc3RyaW5nLlxuICAgKi9cbiAgdGhpcy5jbGVhckV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudFR5cGUpIHtcbiAgICBzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9IFtdO1xuICB9O1xuXG4gIC8vIEl0IGRpc3BhdGNoIGEgbmV3IGV2ZW50IHRvIHRoZSBldmVudCBsaXN0ZW5lcnMsIGJhc2VkIG9uIHRoZSB0eXBlXG4gIC8vIG9mIGV2ZW50LiBBbGwgZXZlbnRzIGFyZSBpbnRlbmRlZCB0byBiZSBMaWNvZGVFdmVudHMuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCFzcGVjLmRpc3BhdGNoZXIuZXZlbnRMaXN0ZW5lcnNbZXZlbnQudHlwZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3BlYy5kaXNwYXRjaGVyLmV2ZW50TGlzdGVuZXJzW2V2ZW50LnR5cGVdLm1hcChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9O1xufTtcblxuLyoqXG4gKiBAY2xhc3MgT3d0RXZlbnRcbiAqIEBjbGFzc0Rlc2MgQ2xhc3MgT3d0RXZlbnQgcmVwcmVzZW50cyBhIGdlbmVyaWMgRXZlbnQgaW4gdGhlIGxpYnJhcnkuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgTWVzc2FnZUV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIE1lc3NhZ2VFdmVudCByZXByZXNlbnRzIGEgbWVzc2FnZSBFdmVudCBpbiB0aGUgbGlicmFyeS5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZUV2ZW50IGV4dGVuZHMgT3d0RXZlbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpbml0KSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBvcmlnaW5cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuTWVzc2FnZUV2ZW50XG4gICAgICogQGRlc2MgSUQgb2YgdGhlIHJlbW90ZSBlbmRwb2ludCB3aG8gcHVibGlzaGVkIHRoaXMgc3RyZWFtLlxuICAgICAqL1xuICAgIHRoaXMub3JpZ2luID0gaW5pdC5vcmlnaW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lc3NhZ2VFdmVudFxuICAgICAqL1xuICAgIHRoaXMubWVzc2FnZSA9IGluaXQubWVzc2FnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHRvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lc3NhZ2VFdmVudFxuICAgICAqIEBkZXNjIFZhbHVlcyBjb3VsZCBiZSBcImFsbFwiLCBcIm1lXCIgaW4gY29uZmVyZW5jZSBtb2RlLCBvciB1bmRlZmluZWQgaW5cbiAgICAgKiBQMlAgbW9kZS5cbiAgICAgKi9cbiAgICB0aGlzLnRvID0gaW5pdC50bztcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBFcnJvckV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIEVycm9yRXZlbnQgcmVwcmVzZW50cyBhbiBlcnJvciBFdmVudCBpbiB0aGUgbGlicmFyeS5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgRXJyb3JFdmVudCBleHRlbmRzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaW5pdCkge1xuICAgIHN1cGVyKHR5cGUpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Vycm9yfSBlcnJvclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5FcnJvckV2ZW50XG4gICAgICovXG4gICAgdGhpcy5lcnJvciA9IGluaXQuZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgTXV0ZUV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIE11dGVFdmVudCByZXByZXNlbnRzIGEgbXV0ZSBvciB1bm11dGUgZXZlbnQuXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIE11dGVFdmVudCBleHRlbmRzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaW5pdCkge1xuICAgIHN1cGVyKHR5cGUpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlRyYWNrS2luZH0ga2luZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5NdXRlRXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLmtpbmQgPSBpbml0LmtpbmQ7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgKiBmcm9tICcuL21lZGlhc3RyZWFtLWZhY3RvcnkuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0uanMnO1xuZXhwb3J0ICogZnJvbSAnLi9tZWRpYWZvcm1hdC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zcG9ydC5qcyc7XG4iLCIvLyBNSVQgTGljZW5zZVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxMiBVbml2ZXJzaWRhZCBQb2xpdMOpY25pY2EgZGUgTWFkcmlkXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4vLyBTT0ZUV0FSRS5cblxuLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vLyBUaGlzIGZpbGUgaXMgYm9ycm93ZWQgZnJvbSBseW5ja2lhL2xpY29kZSB3aXRoIHNvbWUgbW9kaWZpY2F0aW9ucy5cblxuLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qXG4gKiBBUEkgdG8gd3JpdGUgbG9ncyBiYXNlZCBvbiB0cmFkaXRpb25hbCBsb2dnaW5nIG1lY2hhbmlzbXM6IGRlYnVnLCB0cmFjZSxcbiAqIGluZm8sIHdhcm5pbmcsIGVycm9yXG4gKi9cbmNvbnN0IExvZ2dlciA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgREVCVUcgPSAwO1xuICBjb25zdCBUUkFDRSA9IDE7XG4gIGNvbnN0IElORk8gPSAyO1xuICBjb25zdCBXQVJOSU5HID0gMztcbiAgY29uc3QgRVJST1IgPSA0O1xuICBjb25zdCBOT05FID0gNTtcblxuICBjb25zdCBub09wID0gZnVuY3Rpb24oKSB7fTtcblxuICAvLyB8dGhhdHwgaXMgdGhlIG9iamVjdCB0byBiZSByZXR1cm5lZC5cbiAgY29uc3QgdGhhdCA9IHtcbiAgICBERUJVRzogREVCVUcsXG4gICAgVFJBQ0U6IFRSQUNFLFxuICAgIElORk86IElORk8sXG4gICAgV0FSTklORzogV0FSTklORyxcbiAgICBFUlJPUjogRVJST1IsXG4gICAgTk9ORTogTk9ORSxcbiAgfTtcblxuICB0aGF0LmxvZyA9ICguLi5hcmdzKSA9PiB7XG4gICAgd2luZG93LmNvbnNvbGUubG9nKChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLCAuLi5hcmdzKTtcbiAgfTtcblxuICBjb25zdCBiaW5kVHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5jb25zb2xlW3R5cGVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgd2luZG93LmNvbnNvbGVbdHlwZV0oKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCksIC4uLmFyZ3MpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoYXQubG9nO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRMb2dMZXZlbCA9IGZ1bmN0aW9uKGxldmVsKSB7XG4gICAgaWYgKGxldmVsIDw9IERFQlVHKSB7XG4gICAgICB0aGF0LmRlYnVnID0gYmluZFR5cGUoJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuZGVidWcgPSBub09wO1xuICAgIH1cbiAgICBpZiAobGV2ZWwgPD0gVFJBQ0UpIHtcbiAgICAgIHRoYXQudHJhY2UgPSBiaW5kVHlwZSgndHJhY2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC50cmFjZSA9IG5vT3A7XG4gICAgfVxuICAgIGlmIChsZXZlbCA8PSBJTkZPKSB7XG4gICAgICB0aGF0LmluZm8gPSBiaW5kVHlwZSgnaW5mbycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LmluZm8gPSBub09wO1xuICAgIH1cbiAgICBpZiAobGV2ZWwgPD0gV0FSTklORykge1xuICAgICAgdGhhdC53YXJuaW5nID0gYmluZFR5cGUoJ3dhcm4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC53YXJuaW5nID0gbm9PcDtcbiAgICB9XG4gICAgaWYgKGxldmVsIDw9IEVSUk9SKSB7XG4gICAgICB0aGF0LmVycm9yID0gYmluZFR5cGUoJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuZXJyb3IgPSBub09wO1xuICAgIH1cbiAgfTtcblxuICBzZXRMb2dMZXZlbChERUJVRyk7IC8vIERlZmF1bHQgbGV2ZWwgaXMgZGVidWcuXG5cbiAgdGhhdC5zZXRMb2dMZXZlbCA9IHNldExvZ0xldmVsO1xuXG4gIHJldHVybiB0aGF0O1xufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyO1xuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG4vKipcbiAqIEBjbGFzcyBBdWRpb1NvdXJjZUluZm9cbiAqIEBjbGFzc0Rlc2MgU291cmNlIGluZm8gYWJvdXQgYW4gYXVkaW8gdHJhY2suIFZhbHVlczogJ21pYycsICdzY3JlZW4tY2FzdCcsXG4gKiAnZmlsZScsICdtaXhlZCcuXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEByZWFkb25seVxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEF1ZGlvU291cmNlSW5mbyA9IHtcbiAgTUlDOiAnbWljJyxcbiAgU0NSRUVOQ0FTVDogJ3NjcmVlbi1jYXN0JyxcbiAgRklMRTogJ2ZpbGUnLFxuICBNSVhFRDogJ21peGVkJyxcbn07XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvU291cmNlSW5mb1xuICogQGNsYXNzRGVzYyBTb3VyY2UgaW5mbyBhYm91dCBhIHZpZGVvIHRyYWNrLiBWYWx1ZXM6ICdjYW1lcmEnLCAnc2NyZWVuLWNhc3QnLFxuICogJ2ZpbGUnLCAnbWl4ZWQnLlxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAcmVhZG9ubHlcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBWaWRlb1NvdXJjZUluZm8gPSB7XG4gIENBTUVSQTogJ2NhbWVyYScsXG4gIFNDUkVFTkNBU1Q6ICdzY3JlZW4tY2FzdCcsXG4gIEZJTEU6ICdmaWxlJyxcbiAgTUlYRUQ6ICdtaXhlZCcsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBUcmFja0tpbmRcbiAqIEBjbGFzc0Rlc2MgS2luZCBvZiBhIHRyYWNrLiBWYWx1ZXM6ICdhdWRpbycgZm9yIGF1ZGlvIHRyYWNrLCAndmlkZW8nIGZvclxuICogdmlkZW8gdHJhY2ssICdhdicgZm9yIGJvdGggYXVkaW8gYW5kIHZpZGVvIHRyYWNrcy5cbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQHJlYWRvbmx5XG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgVHJhY2tLaW5kID0ge1xuICAvKipcbiAgICogQXVkaW8gdHJhY2tzLlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEFVRElPOiAnYXVkaW8nLFxuICAvKipcbiAgICogVmlkZW8gdHJhY2tzLlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIFZJREVPOiAndmlkZW8nLFxuICAvKipcbiAgICogQm90aCBhdWRpbyBhbmQgdmlkZW8gdHJhY2tzLlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEFVRElPX0FORF9WSURFTzogJ2F2Jyxcbn07XG4vKipcbiAqIEBjbGFzcyBSZXNvbHV0aW9uXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgVGhlIFJlc29sdXRpb24gZGVmaW5lcyB0aGUgc2l6ZSBvZiBhIHJlY3RhbmdsZS5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNvbHV0aW9uIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gd2lkdGhcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUmVzb2x1dGlvblxuICAgICAqL1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5SZXNvbHV0aW9uXG4gICAgICovXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZ2xvYmFsIFByb21pc2UsIG5hdmlnYXRvciAqL1xuXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCAqIGFzIE1lZGlhRm9ybWF0TW9kdWxlIGZyb20gJy4vbWVkaWFmb3JtYXQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBBdWRpb1RyYWNrQ29uc3RyYWludHNcbiAqIEBjbGFzc0Rlc2MgQ29uc3RyYWludHMgZm9yIGNyZWF0aW5nIGFuIGF1ZGlvIE1lZGlhU3RyZWFtVHJhY2suXG4gKiBAbWVtYmVyb2YgT3d0LkJhc2VcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPd3QuQmFzZS5BdWRpb1NvdXJjZUluZm99IHNvdXJjZSBTb3VyY2UgaW5mbyBvZiB0aGlzIGF1ZGlvIHRyYWNrLlxuICovXG5leHBvcnQgY2xhc3MgQXVkaW9UcmFja0NvbnN0cmFpbnRzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3Ioc291cmNlKSB7XG4gICAgaWYgKCFPYmplY3QudmFsdWVzKE1lZGlhRm9ybWF0TW9kdWxlLkF1ZGlvU291cmNlSW5mbylcbiAgICAgICAgLnNvbWUoKHYpID0+IHYgPT09IHNvdXJjZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgc291cmNlLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHNvdXJjZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBWYWx1ZXMgY291bGQgYmUgXCJtaWNcIiwgXCJzY3JlZW4tY2FzdFwiLCBcImZpbGVcIiBvciBcIm1peGVkXCIuXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBkZXZpY2VJZFxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb1RyYWNrQ29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBEbyBub3QgcHJvdmlkZSBkZXZpY2VJZCBpZiBzb3VyY2UgaXMgbm90IFwibWljXCIuXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHNlZSBodHRwczovL3czYy5naXRodWIuaW8vbWVkaWFjYXB0dXJlLW1haW4vI2RlZi1jb25zdHJhaW50LWRldmljZUlkXG4gICAgICovXG4gICAgdGhpcy5kZXZpY2VJZCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBWaWRlb1RyYWNrQ29uc3RyYWludHNcbiAqIEBjbGFzc0Rlc2MgQ29uc3RyYWludHMgZm9yIGNyZWF0aW5nIGEgdmlkZW8gTWVkaWFTdHJlYW1UcmFjay5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge093dC5CYXNlLlZpZGVvU291cmNlSW5mb30gc291cmNlIFNvdXJjZSBpbmZvIG9mIHRoaXMgdmlkZW8gdHJhY2suXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1RyYWNrQ29uc3RyYWludHMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihzb3VyY2UpIHtcbiAgICBpZiAoIU9iamVjdC52YWx1ZXMoTWVkaWFGb3JtYXRNb2R1bGUuVmlkZW9Tb3VyY2VJbmZvKVxuICAgICAgICAuc29tZSgodikgPT4gdiA9PT0gc291cmNlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBzb3VyY2UuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gc291cmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c1xuICAgICAqIEBkZXNjIFZhbHVlcyBjb3VsZCBiZSBcImNhbWVyYVwiLCBcInNjcmVlbi1jYXN0XCIsIFwiZmlsZVwiIG9yIFwibWl4ZWRcIi5cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGRldmljZUlkXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c1xuICAgICAqIEBkZXNjIERvIG5vdCBwcm92aWRlIGRldmljZUlkIGlmIHNvdXJjZSBpcyBub3QgXCJjYW1lcmFcIi5cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAc2VlIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9tZWRpYWNhcHR1cmUtbWFpbi8jZGVmLWNvbnN0cmFpbnQtZGV2aWNlSWRcbiAgICAgKi9cblxuICAgIHRoaXMuZGV2aWNlSWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5SZXNvbHV0aW9ufSByZXNvbHV0aW9uXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gZnJhbWVSYXRlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRoaXMuZnJhbWVSYXRlID0gdW5kZWZpbmVkO1xuICB9XG59XG4vKipcbiAqIEBjbGFzcyBTdHJlYW1Db25zdHJhaW50c1xuICogQGNsYXNzRGVzYyBDb25zdHJhaW50cyBmb3IgY3JlYXRpbmcgYSBNZWRpYVN0cmVhbSBmcm9tIHNjcmVlbiBtaWMgYW5kIGNhbWVyYS5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gez9Pd3QuQmFzZS5BdWRpb1RyYWNrQ29uc3RyYWludHN9IGF1ZGlvQ29uc3RyYWludHNcbiAqIEBwYXJhbSB7P093dC5CYXNlLlZpZGVvVHJhY2tDb25zdHJhaW50c30gdmlkZW9Db25zdHJhaW50c1xuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtQ29uc3RyYWludHMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnN0cmFpbnRzID0gZmFsc2UsIHZpZGVvQ29uc3RyYWludHMgPSBmYWxzZSkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLk1lZGlhU3RyZWFtVHJhY2tEZXZpY2VDb25zdHJhaW50c0ZvckF1ZGlvfSBhdWRpb1xuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5NZWRpYVN0cmVhbURldmljZUNvbnN0cmFpbnRzXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy5hdWRpbyA9IGF1ZGlvQ29uc3RyYWludHM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkJhc2UuTWVkaWFTdHJlYW1UcmFja0RldmljZUNvbnN0cmFpbnRzRm9yVmlkZW99IFZpZGVvXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLk1lZGlhU3RyZWFtRGV2aWNlQ29uc3RyYWludHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLnZpZGVvID0gdmlkZW9Db25zdHJhaW50cztcbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gaXNWaWRlb0NvbnN0cmFpbnNGb3JTY3JlZW5DYXN0KGNvbnN0cmFpbnRzKSB7XG4gIHJldHVybiAodHlwZW9mIGNvbnN0cmFpbnRzLnZpZGVvID09PSAnb2JqZWN0JyAmJiBjb25zdHJhaW50cy52aWRlby5zb3VyY2UgPT09XG4gICAgICBNZWRpYUZvcm1hdE1vZHVsZS5WaWRlb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCk7XG59XG5cbi8qKlxuICogQGNsYXNzIE1lZGlhU3RyZWFtRmFjdG9yeVxuICogQGNsYXNzRGVzYyBBIGZhY3RvcnkgdG8gY3JlYXRlIE1lZGlhU3RyZWFtLiBZb3UgY2FuIGFsc28gY3JlYXRlIE1lZGlhU3RyZWFtXG4gKiBieSB5b3Vyc2VsZi5cbiAqIEBtZW1iZXJvZiBPd3QuQmFzZVxuICovXG5leHBvcnQgY2xhc3MgTWVkaWFTdHJlYW1GYWN0b3J5IHtcbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVNZWRpYVN0cmVhbVxuICAgKiBAc3RhdGljXG4gICAqIEBkZXNjIENyZWF0ZSBhIE1lZGlhU3RyZWFtIHdpdGggZ2l2ZW4gY29uc3RyYWludHMuIElmIHlvdSB3YW50IHRvIGNyZWF0ZSBhXG4gICAqIE1lZGlhU3RyZWFtIGZvciBzY3JlZW4gY2FzdCwgcGxlYXNlIG1ha2Ugc3VyZSBib3RoIGF1ZGlvIGFuZCB2aWRlbydzIHNvdXJjZVxuICAgKiBhcmUgXCJzY3JlZW4tY2FzdFwiLlxuICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuTWVkaWFTdHJlYW1GYWN0b3J5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8TWVkaWFTdHJlYW0sIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkXG4gICAqIHdoZW4gc3RyZWFtIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLCBvciByZWplY3RlZCBpZiBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgKiBlcnJvciBoYXBwZW5lZDpcbiAgICogLSBPbmUgb3IgbW9yZSBwYXJhbWV0ZXJzIGNhbm5vdCBiZSBzYXRpc2ZpZWQuXG4gICAqIC0gU3BlY2lmaWVkIGRldmljZSBpcyBidXN5LlxuICAgKiAtIENhbm5vdCBvYnRhaW4gbmVjZXNzYXJ5IHBlcm1pc3Npb24gb3Igb3BlcmF0aW9uIGlzIGNhbmNlbGVkIGJ5IHVzZXIuXG4gICAqIC0gVmlkZW8gc291cmNlIGlzIHNjcmVlbiBjYXN0LCB3aGlsZSBhdWRpbyBzb3VyY2UgaXMgbm90LlxuICAgKiAtIEF1ZGlvIHNvdXJjZSBpcyBzY3JlZW4gY2FzdCwgd2hpbGUgdmlkZW8gc291cmNlIGlzIGRpc2FibGVkLlxuICAgKiBAcGFyYW0ge093dC5CYXNlLlN0cmVhbUNvbnN0cmFpbnRzfSBjb25zdHJhaW50c1xuICAgKi9cbiAgc3RhdGljIGNyZWF0ZU1lZGlhU3RyZWFtKGNvbnN0cmFpbnRzKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zdHJhaW50cyAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgKCFjb25zdHJhaW50cy5hdWRpbyAmJiAhY29uc3RyYWludHMudmlkZW8pKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignSW52YWxpZCBjb25zdHJhaW5zJykpO1xuICAgIH1cbiAgICBpZiAoIWlzVmlkZW9Db25zdHJhaW5zRm9yU2NyZWVuQ2FzdChjb25zdHJhaW50cykgJiZcbiAgICAgICAgKHR5cGVvZiBjb25zdHJhaW50cy5hdWRpbyA9PT0gJ29iamVjdCcpICYmXG4gICAgICAgIGNvbnN0cmFpbnRzLmF1ZGlvLnNvdXJjZSA9PT1cbiAgICAgICAgICAgIE1lZGlhRm9ybWF0TW9kdWxlLkF1ZGlvU291cmNlSW5mby5TQ1JFRU5DQVNUKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgbmV3IFR5cGVFcnJvcignQ2Fubm90IHNoYXJlIHNjcmVlbiB3aXRob3V0IHZpZGVvLicpKTtcbiAgICB9XG4gICAgaWYgKGlzVmlkZW9Db25zdHJhaW5zRm9yU2NyZWVuQ2FzdChjb25zdHJhaW50cykgJiZcbiAgICAgICAgdHlwZW9mIGNvbnN0cmFpbnRzLmF1ZGlvID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBjb25zdHJhaW50cy5hdWRpby5zb3VyY2UgIT09XG4gICAgICAgICAgICBNZWRpYUZvcm1hdE1vZHVsZS5BdWRpb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgJ0Nhbm5vdCBjYXB0dXJlIHZpZGVvIGZyb20gc2NyZWVuIGNhc3Qgd2hpbGUgY2FwdHVyZSBhdWRpbyBmcm9tJ1xuICAgICAgICAgICsgJyBvdGhlciBzb3VyY2UuJykpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGFuZCBjb252ZXJ0IGNvbnN0cmFpbnRzLlxuICAgIGlmICghY29uc3RyYWludHMuYXVkaW8gJiYgIWNvbnN0cmFpbnRzLnZpZGVvKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAnQXQgbGVhc3Qgb25lIG9mIGF1ZGlvIGFuZCB2aWRlbyBtdXN0IGJlIHJlcXVlc3RlZC4nKSk7XG4gICAgfVxuICAgIGNvbnN0IG1lZGlhQ29uc3RyYWludHMgPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgICBpZiAodHlwZW9mIGNvbnN0cmFpbnRzLmF1ZGlvID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBjb25zdHJhaW50cy5hdWRpby5zb3VyY2UgPT09IE1lZGlhRm9ybWF0TW9kdWxlLkF1ZGlvU291cmNlSW5mby5NSUMpIHtcbiAgICAgIG1lZGlhQ29uc3RyYWludHMuYXVkaW8gPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgICAgIGlmICh1dGlscy5pc0VkZ2UoKSkge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvLmRldmljZUlkID0gY29uc3RyYWludHMuYXVkaW8uZGV2aWNlSWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvLmRldmljZUlkID0ge1xuICAgICAgICAgIGV4YWN0OiBjb25zdHJhaW50cy5hdWRpby5kZXZpY2VJZCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnN0cmFpbnRzLmF1ZGlvLnNvdXJjZSA9PT1cbiAgICAgICAgICBNZWRpYUZvcm1hdE1vZHVsZS5BdWRpb1NvdXJjZUluZm8uU0NSRUVOQ0FTVCkge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLmF1ZGlvID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lZGlhQ29uc3RyYWludHMuYXVkaW8gPSBjb25zdHJhaW50cy5hdWRpbztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb25zdHJhaW50cy52aWRlbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8gPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc3RyYWludHMudmlkZW8uZnJhbWVSYXRlID09PSAnbnVtYmVyJykge1xuICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvLmZyYW1lUmF0ZSA9IGNvbnN0cmFpbnRzLnZpZGVvLmZyYW1lUmF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uICYmXG4gICAgICAgICAgY29uc3RyYWludHMudmlkZW8ucmVzb2x1dGlvbi53aWR0aCAmJlxuICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLnJlc29sdXRpb24uaGVpZ2h0KSB7XG4gICAgICAgIGlmIChjb25zdHJhaW50cy52aWRlby5zb3VyY2UgPT09XG4gICAgICAgICAgICAgIE1lZGlhRm9ybWF0TW9kdWxlLlZpZGVvU291cmNlSW5mby5TQ1JFRU5DQVNUKSB7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby53aWR0aCA9IGNvbnN0cmFpbnRzLnZpZGVvLnJlc29sdXRpb24ud2lkdGg7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby5oZWlnaHQgPSBjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uLmhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvLndpZHRoID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby53aWR0aC5leGFjdCA9XG4gICAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5yZXNvbHV0aW9uLndpZHRoO1xuICAgICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8uaGVpZ2h0ID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby5oZWlnaHQuZXhhY3QgPVxuICAgICAgICAgICAgY29uc3RyYWludHMudmlkZW8ucmVzb2x1dGlvbi5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1lZGlhQ29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPSB7ZXhhY3Q6IGNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkfTtcbiAgICAgIH1cbiAgICAgIGlmICh1dGlscy5pc0ZpcmVmb3goKSAmJlxuICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLnNvdXJjZSA9PT1cbiAgICAgICAgICAgICAgTWVkaWFGb3JtYXRNb2R1bGUuVmlkZW9Tb3VyY2VJbmZvLlNDUkVFTkNBU1QpIHtcbiAgICAgICAgbWVkaWFDb25zdHJhaW50cy52aWRlby5tZWRpYVNvdXJjZSA9ICdzY3JlZW4nO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYUNvbnN0cmFpbnRzLnZpZGVvID0gY29uc3RyYWludHMudmlkZW87XG4gICAgfVxuXG4gICAgaWYgKGlzVmlkZW9Db25zdHJhaW5zRm9yU2NyZWVuQ2FzdChjb25zdHJhaW50cykpIHtcbiAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldERpc3BsYXlNZWRpYShtZWRpYUNvbnN0cmFpbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKG1lZGlhQ29uc3RyYWludHMpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBBdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBUaGUgYXVkaW8gc2V0dGluZ3Mgb2YgYSBwdWJsaWNhdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvUHVibGljYXRpb25TZXR0aW5ncyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLkF1ZGlvQ29kZWNQYXJhbWV0ZXJzfSBjb2RlY1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5BdWRpb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjID0gY29kZWM7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9QdWJsaWNhdGlvblNldHRpbmdzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgVGhlIHZpZGVvIHNldHRpbmdzIG9mIGEgcHVibGljYXRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3Mge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlYywgcmVzb2x1dGlvbiwgZnJhbWVSYXRlLFxuICAgICAgYml0cmF0ZSwga2V5RnJhbWVJbnRlcnZhbCwgcmlkKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLlZpZGVvQ29kZWNQYXJhbWV0ZXJzfSBjb2RlY1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjPWNvZGVjLFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5SZXNvbHV0aW9ufSByZXNvbHV0aW9uXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvUHVibGljYXRpb25TZXR0aW5nc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbj1yZXNvbHV0aW9uO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGZyYW1lUmF0ZXNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAY2xhc3NEZXNjIEZyYW1lcyBwZXIgc2Vjb25kLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmZyYW1lUmF0ZT1mcmFtZVJhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gYml0cmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLmJpdHJhdGU9Yml0cmF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBrZXlGcmFtZUludGVydmFsc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBjbGFzc0Rlc2MgVGhlIHRpbWUgaW50ZXJ2YWwgYmV0d2VlbiBrZXkgZnJhbWVzLiBVbml0OiBzZWNvbmQuXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlZpZGVvUHVibGljYXRpb25TZXR0aW5nc1xuICAgICAqL1xuICAgIHRoaXMua2V5RnJhbWVJbnRlcnZhbD1rZXlGcmFtZUludGVydmFsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IHJpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBjbGFzc0Rlc2MgUmVzdHJpY3Rpb24gaWRlbnRpZmllciB0byBpZGVudGlmeSB0aGUgUlRQIFN0cmVhbXMgd2l0aGluIGFuIFJUUCBzZXNzaW9uLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NcbiAgICAgKi9cbiAgICB0aGlzLnJpZD1yaWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgUHVibGljYXRpb25TZXR0aW5nc1xuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFRoZSBzZXR0aW5ncyBvZiBhIHB1YmxpY2F0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgUHVibGljYXRpb25TZXR0aW5ncyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGF1ZGlvLCB2aWRlbykge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLkF1ZGlvUHVibGljYXRpb25TZXR0aW5nc1tdfSBhdWRpb1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaWNhdGlvblNldHRpbmdzXG4gICAgICovXG4gICAgdGhpcy5hdWRpbz1hdWRpbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3NbXX0gdmlkZW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGljYXRpb25TZXR0aW5nc1xuICAgICAqL1xuICAgIHRoaXMudmlkZW89dmlkZW87XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgUHVibGljYXRpb25cbiAqIEBleHRlbmRzIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAY2xhc3NEZXNjIFB1YmxpY2F0aW9uIHJlcHJlc2VudHMgYSBzZW5kZXIgZm9yIHB1Ymxpc2hpbmcgYSBzdHJlYW0uIEl0XG4gKiBoYW5kbGVzIHRoZSBhY3Rpb25zIG9uIGEgTG9jYWxTdHJlYW0gcHVibGlzaGVkIHRvIGEgY29uZmVyZW5jZS5cbiAqXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgfCBBcmd1bWVudCBUeXBlICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgZW5kZWQgICAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFB1YmxpY2F0aW9uIGlzIGVuZGVkLiB8XG4gKiB8IGVycm9yICAgICAgICAgICB8IEVycm9yRXZlbnQgICAgICAgfCBBbiBlcnJvciBvY2N1cnJlZCBvbiB0aGUgcHVibGljYXRpb24uIHxcbiAqIHwgbXV0ZSAgICAgICAgICAgIHwgTXV0ZUV2ZW50ICAgICAgICB8IFB1YmxpY2F0aW9uIGlzIG11dGVkLiBDbGllbnQgc3RvcHBlZCBzZW5kaW5nIGF1ZGlvIGFuZC9vciB2aWRlbyBkYXRhIHRvIHJlbW90ZSBlbmRwb2ludC4gfFxuICogfCB1bm11dGUgICAgICAgICAgfCBNdXRlRXZlbnQgICAgICAgIHwgUHVibGljYXRpb24gaXMgdW5tdXRlZC4gQ2xpZW50IGNvbnRpbnVlZCBzZW5kaW5nIGF1ZGlvIGFuZC9vciB2aWRlbyBkYXRhIHRvIHJlbW90ZSBlbmRwb2ludC4gfFxuICpcbiAqIGBlbmRlZGAgZXZlbnQgbWF5IG5vdCBiZSBmaXJlZCBvbiBTYWZhcmkgYWZ0ZXIgY2FsbGluZyBgUHVibGljYXRpb24uc3RvcCgpYC5cbiAqXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBQdWJsaWNhdGlvbiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGlkLCBzdG9wLCBnZXRTdGF0cywgbXV0ZSwgdW5tdXRlKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uXG4gICAgICovXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdpZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogaWQgPyBpZCA6IFV0aWxzLmNyZWF0ZVV1aWQoKSxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gc3RvcFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIFN0b3AgY2VydGFpbiBwdWJsaWNhdGlvbi4gT25jZSBhIHN1YnNjcmlwdGlvbiBpcyBzdG9wcGVkLCBpdCBjYW5ub3RcbiAgICAgKiBiZSByZWNvdmVyZWQuXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1YmxpY2F0aW9uXG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLnN0b3AgPSBzdG9wO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBnZXRTdGF0c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjIEdldCBzdGF0cyBvZiB1bmRlcmx5aW5nIFBlZXJDb25uZWN0aW9uLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaWNhdGlvblxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJUQ1N0YXRzUmVwb3J0LCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy5nZXRTdGF0cyA9IGdldFN0YXRzO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBtdXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgU3RvcCBzZW5kaW5nIGRhdGEgdG8gcmVtb3RlIGVuZHBvaW50LlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaWNhdGlvblxuICAgICAqIEBwYXJhbSB7T3d0LkJhc2UuVHJhY2tLaW5kIH0ga2luZCBLaW5kIG9mIHRyYWNrcyB0byBiZSBtdXRlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQsIEVycm9yPn1cbiAgICAgKi9cbiAgICB0aGlzLm11dGUgPSBtdXRlO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiB1bm11dGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBDb250aW51ZSBzZW5kaW5nIGRhdGEgdG8gcmVtb3RlIGVuZHBvaW50LlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5QdWJsaWNhdGlvblxuICAgICAqIEBwYXJhbSB7T3d0LkJhc2UuVHJhY2tLaW5kIH0ga2luZCBLaW5kIG9mIHRyYWNrcyB0byBiZSB1bm11dGVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZCwgRXJyb3I+fVxuICAgICAqL1xuICAgIHRoaXMudW5tdXRlID0gdW5tdXRlO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFB1Ymxpc2hPcHRpb25zXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgUHVibGlzaE9wdGlvbnMgZGVmaW5lcyBvcHRpb25zIGZvciBwdWJsaXNoaW5nIGFcbiAqIE93dC5CYXNlLkxvY2FsU3RyZWFtLlxuICovXG5leHBvcnQgY2xhc3MgUHVibGlzaE9wdGlvbnMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpbywgdmlkZW8sIHRyYW5zcG9ydCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9BcnJheTxPd3QuQmFzZS5BdWRpb0VuY29kaW5nUGFyYW1ldGVycz4gfCA/QXJyYXk8UlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzPn0gYXVkaW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGlzaE9wdGlvbnNcbiAgICAgKiBAZGVzYyBQYXJhbWV0ZXJzIGZvciBhdWRpbyBSdHBTZW5kZXIuIFB1Ymxpc2hpbmcgd2l0aCBSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnMgaXMgYW4gZXhwZXJpbWVudGFsIGZlYXR1cmUuIEl0IGlzIHN1YmplY3QgdG8gY2hhbmdlLlxuICAgICAqL1xuICAgIHRoaXMuYXVkaW8gPSBhdWRpbztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/QXJyYXk8T3d0LkJhc2UuVmlkZW9FbmNvZGluZ1BhcmFtZXRlcnM+IHwgP0FycmF5PFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycz59IHZpZGVvXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlB1Ymxpc2hPcHRpb25zXG4gICAgICogQGRlc2MgUGFyYW1ldGVycyBmb3IgdmlkZW8gUnRwU2VuZGVyLiBQdWJsaXNoaW5nIHdpdGggUlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzIGlzIGFuIGV4cGVyaW1lbnRhbCBmZWF0dXJlLiBJdCBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cbiAgICAgKi9cbiAgICB0aGlzLnZpZGVvID0gdmlkZW87XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P093dC5CYXNlLlRyYW5zcG9ydENvbnN0cmFpbnRzfSB0cmFuc3BvcnRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUHVibGlzaE9wdGlvbnNcbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgfVxufVxuIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTQgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG5cbi8qIE1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlc2Ugb3B0aW9ucyBhdCBqc2hpbnQuY29tL2RvY3Mvb3B0aW9ucyAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKiBnbG9iYWxzICBhZGFwdGVyLCB0cmFjZSAqL1xuLyogZXhwb3J0ZWQgc2V0Q29kZWNQYXJhbSwgaWNlQ2FuZGlkYXRlVHlwZSwgZm9ybWF0VHlwZVByZWZlcmVuY2UsXG4gICBtYXliZVNldE9wdXNPcHRpb25zLCBtYXliZVByZWZlckF1ZGlvUmVjZWl2ZUNvZGVjLFxuICAgbWF5YmVQcmVmZXJBdWRpb1NlbmRDb2RlYywgbWF5YmVTZXRBdWRpb1JlY2VpdmVCaXRSYXRlLFxuICAgbWF5YmVTZXRBdWRpb1NlbmRCaXRSYXRlLCBtYXliZVByZWZlclZpZGVvUmVjZWl2ZUNvZGVjLFxuICAgbWF5YmVQcmVmZXJWaWRlb1NlbmRDb2RlYywgbWF5YmVTZXRWaWRlb1JlY2VpdmVCaXRSYXRlLFxuICAgbWF5YmVTZXRWaWRlb1NlbmRCaXRSYXRlLCBtYXliZVNldFZpZGVvU2VuZEluaXRpYWxCaXRSYXRlLFxuICAgbWF5YmVSZW1vdmVWaWRlb0ZlYywgbWVyZ2VDb25zdHJhaW50cywgcmVtb3ZlQ29kZWNQYXJhbSovXG5cbi8qIFRoaXMgZmlsZSBpcyBib3Jyb3dlZCBmcm9tIGFwcHJ0YyB3aXRoIHNvbWUgbW9kaWZpY2F0aW9ucy4gKi9cbi8qIENvbW1pdCBoYXNoOiBjNmFmMGMyNWU5YWY1MjdmNzFiM2FjZGQ2YmZhMTM4OWQ3NzhmN2JkICsgUFIgNTMwICovXG5cbmltcG9ydCBMb2dnZXIgZnJvbSAnLi9sb2dnZXIuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG1lcmdlQ29uc3RyYWludHMoY29uczEsIGNvbnMyKSB7XG4gIGlmICghY29uczEgfHwgIWNvbnMyKSB7XG4gICAgcmV0dXJuIGNvbnMxIHx8IGNvbnMyO1xuICB9XG4gIGNvbnN0IG1lcmdlZCA9IGNvbnMxO1xuICBmb3IgKGNvbnN0IGtleSBpbiBjb25zMikge1xuICAgIG1lcmdlZFtrZXldID0gY29uczJba2V5XTtcbiAgfVxuICByZXR1cm4gbWVyZ2VkO1xufVxuXG5mdW5jdGlvbiBpY2VDYW5kaWRhdGVUeXBlKGNhbmRpZGF0ZVN0cikge1xuICByZXR1cm4gY2FuZGlkYXRlU3RyLnNwbGl0KCcgJylbN107XG59XG5cbi8vIFR1cm5zIHRoZSBsb2NhbCB0eXBlIHByZWZlcmVuY2UgaW50byBhIGh1bWFuLXJlYWRhYmxlIHN0cmluZy5cbi8vIE5vdGUgdGhhdCB0aGlzIG1hcHBpbmcgaXMgYnJvd3Nlci1zcGVjaWZpYy5cbmZ1bmN0aW9uIGZvcm1hdFR5cGVQcmVmZXJlbmNlKHByZWYpIHtcbiAgaWYgKGFkYXB0ZXIuYnJvd3NlckRldGFpbHMuYnJvd3NlciA9PT0gJ2Nocm9tZScpIHtcbiAgICBzd2l0Y2ggKHByZWYpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuICdUVVJOL1RMUyc7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAnVFVSTi9UQ1AnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gJ1RVUk4vVURQJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhZGFwdGVyLmJyb3dzZXJEZXRhaWxzLmJyb3dzZXIgPT09ICdmaXJlZm94Jykge1xuICAgIHN3aXRjaCAocHJlZikge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gJ1RVUk4vVENQJztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcmV0dXJuICdUVVJOL1VEUCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBtYXliZVNldE9wdXNPcHRpb25zKHNkcCwgcGFyYW1zKSB7XG4gIC8vIFNldCBPcHVzIGluIFN0ZXJlbywgaWYgc3RlcmVvIGlzIHRydWUsIHVuc2V0IGl0LCBpZiBzdGVyZW8gaXMgZmFsc2UsIGFuZFxuICAvLyBkbyBub3RoaW5nIGlmIG90aGVyd2lzZS5cbiAgaWYgKHBhcmFtcy5vcHVzU3RlcmVvID09PSAndHJ1ZScpIHtcbiAgICBzZHAgPSBzZXRDb2RlY1BhcmFtKHNkcCwgJ29wdXMvNDgwMDAnLCAnc3RlcmVvJywgJzEnKTtcbiAgfSBlbHNlIGlmIChwYXJhbXMub3B1c1N0ZXJlbyA9PT0gJ2ZhbHNlJykge1xuICAgIHNkcCA9IHJlbW92ZUNvZGVjUGFyYW0oc2RwLCAnb3B1cy80ODAwMCcsICdzdGVyZW8nKTtcbiAgfVxuXG4gIC8vIFNldCBPcHVzIEZFQywgaWYgb3B1c2ZlYyBpcyB0cnVlLCB1bnNldCBpdCwgaWYgb3B1c2ZlYyBpcyBmYWxzZSwgYW5kXG4gIC8vIGRvIG5vdGhpbmcgaWYgb3RoZXJ3aXNlLlxuICBpZiAocGFyYW1zLm9wdXNGZWMgPT09ICd0cnVlJykge1xuICAgIHNkcCA9IHNldENvZGVjUGFyYW0oc2RwLCAnb3B1cy80ODAwMCcsICd1c2VpbmJhbmRmZWMnLCAnMScpO1xuICB9IGVsc2UgaWYgKHBhcmFtcy5vcHVzRmVjID09PSAnZmFsc2UnKSB7XG4gICAgc2RwID0gcmVtb3ZlQ29kZWNQYXJhbShzZHAsICdvcHVzLzQ4MDAwJywgJ3VzZWluYmFuZGZlYycpO1xuICB9XG5cbiAgLy8gU2V0IE9wdXMgRFRYLCBpZiBvcHVzZHR4IGlzIHRydWUsIHVuc2V0IGl0LCBpZiBvcHVzZHR4IGlzIGZhbHNlLCBhbmRcbiAgLy8gZG8gbm90aGluZyBpZiBvdGhlcndpc2UuXG4gIGlmIChwYXJhbXMub3B1c0R0eCA9PT0gJ3RydWUnKSB7XG4gICAgc2RwID0gc2V0Q29kZWNQYXJhbShzZHAsICdvcHVzLzQ4MDAwJywgJ3VzZWR0eCcsICcxJyk7XG4gIH0gZWxzZSBpZiAocGFyYW1zLm9wdXNEdHggPT09ICdmYWxzZScpIHtcbiAgICBzZHAgPSByZW1vdmVDb2RlY1BhcmFtKHNkcCwgJ29wdXMvNDgwMDAnLCAndXNlZHR4Jyk7XG4gIH1cblxuICAvLyBTZXQgT3B1cyBtYXhwbGF5YmFja3JhdGUsIGlmIHJlcXVlc3RlZC5cbiAgaWYgKHBhcmFtcy5vcHVzTWF4UGJyKSB7XG4gICAgc2RwID0gc2V0Q29kZWNQYXJhbShcbiAgICAgICAgc2RwLCAnb3B1cy80ODAwMCcsICdtYXhwbGF5YmFja3JhdGUnLCBwYXJhbXMub3B1c01heFBicik7XG4gIH1cbiAgcmV0dXJuIHNkcDtcbn1cblxuZnVuY3Rpb24gbWF5YmVTZXRBdWRpb1NlbmRCaXRSYXRlKHNkcCwgcGFyYW1zKSB7XG4gIGlmICghcGFyYW1zLmF1ZGlvU2VuZEJpdHJhdGUpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIExvZ2dlci5kZWJ1ZygnUHJlZmVyIGF1ZGlvIHNlbmQgYml0cmF0ZTogJyArIHBhcmFtcy5hdWRpb1NlbmRCaXRyYXRlKTtcbiAgcmV0dXJuIHByZWZlckJpdFJhdGUoc2RwLCBwYXJhbXMuYXVkaW9TZW5kQml0cmF0ZSwgJ2F1ZGlvJyk7XG59XG5cbmZ1bmN0aW9uIG1heWJlU2V0QXVkaW9SZWNlaXZlQml0UmF0ZShzZHAsIHBhcmFtcykge1xuICBpZiAoIXBhcmFtcy5hdWRpb1JlY3ZCaXRyYXRlKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBMb2dnZXIuZGVidWcoJ1ByZWZlciBhdWRpbyByZWNlaXZlIGJpdHJhdGU6ICcgKyBwYXJhbXMuYXVkaW9SZWN2Qml0cmF0ZSk7XG4gIHJldHVybiBwcmVmZXJCaXRSYXRlKHNkcCwgcGFyYW1zLmF1ZGlvUmVjdkJpdHJhdGUsICdhdWRpbycpO1xufVxuXG5mdW5jdGlvbiBtYXliZVNldFZpZGVvU2VuZEJpdFJhdGUoc2RwLCBwYXJhbXMpIHtcbiAgaWYgKCFwYXJhbXMudmlkZW9TZW5kQml0cmF0ZSkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgTG9nZ2VyLmRlYnVnKCdQcmVmZXIgdmlkZW8gc2VuZCBiaXRyYXRlOiAnICsgcGFyYW1zLnZpZGVvU2VuZEJpdHJhdGUpO1xuICByZXR1cm4gcHJlZmVyQml0UmF0ZShzZHAsIHBhcmFtcy52aWRlb1NlbmRCaXRyYXRlLCAndmlkZW8nKTtcbn1cblxuZnVuY3Rpb24gbWF5YmVTZXRWaWRlb1JlY2VpdmVCaXRSYXRlKHNkcCwgcGFyYW1zKSB7XG4gIGlmICghcGFyYW1zLnZpZGVvUmVjdkJpdHJhdGUpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIExvZ2dlci5kZWJ1ZygnUHJlZmVyIHZpZGVvIHJlY2VpdmUgYml0cmF0ZTogJyArIHBhcmFtcy52aWRlb1JlY3ZCaXRyYXRlKTtcbiAgcmV0dXJuIHByZWZlckJpdFJhdGUoc2RwLCBwYXJhbXMudmlkZW9SZWN2Qml0cmF0ZSwgJ3ZpZGVvJyk7XG59XG5cbi8vIEFkZCBhIGI9QVM6Yml0cmF0ZSBsaW5lIHRvIHRoZSBtPW1lZGlhVHlwZSBzZWN0aW9uLlxuZnVuY3Rpb24gcHJlZmVyQml0UmF0ZShzZHAsIGJpdHJhdGUsIG1lZGlhVHlwZSkge1xuICBjb25zdCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG5cbiAgLy8gRmluZCBtIGxpbmUgZm9yIHRoZSBnaXZlbiBtZWRpYVR5cGUuXG4gIGNvbnN0IG1MaW5lSW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ209JywgbWVkaWFUeXBlKTtcbiAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0ZhaWxlZCB0byBhZGQgYmFuZHdpZHRoIGxpbmUgdG8gc2RwLCBhcyBubyBtLWxpbmUgZm91bmQnKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgLy8gRmluZCBuZXh0IG0tbGluZSBpZiBhbnkuXG4gIGxldCBuZXh0TUxpbmVJbmRleCA9IGZpbmRMaW5lSW5SYW5nZShzZHBMaW5lcywgbUxpbmVJbmRleCArIDEsIC0xLCAnbT0nKTtcbiAgaWYgKG5leHRNTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgbmV4dE1MaW5lSW5kZXggPSBzZHBMaW5lcy5sZW5ndGg7XG4gIH1cblxuICAvLyBGaW5kIGMtbGluZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBtLWxpbmUuXG4gIGNvbnN0IGNMaW5lSW5kZXggPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIG1MaW5lSW5kZXggKyAxLFxuICAgICAgbmV4dE1MaW5lSW5kZXgsICdjPScpO1xuICBpZiAoY0xpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIExvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGFkZCBiYW5kd2lkdGggbGluZSB0byBzZHAsIGFzIG5vIGMtbGluZSBmb3VuZCcpO1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICAvLyBDaGVjayBpZiBiYW5kd2lkdGggbGluZSBhbHJlYWR5IGV4aXN0cyBiZXR3ZWVuIGMtbGluZSBhbmQgbmV4dCBtLWxpbmUuXG4gIGNvbnN0IGJMaW5lSW5kZXggPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIGNMaW5lSW5kZXggKyAxLFxuICAgICAgbmV4dE1MaW5lSW5kZXgsICdiPUFTJyk7XG4gIGlmIChiTGluZUluZGV4KSB7XG4gICAgc2RwTGluZXMuc3BsaWNlKGJMaW5lSW5kZXgsIDEpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSBiIChiYW5kd2lkdGgpIHNkcCBsaW5lLlxuICBjb25zdCBid0xpbmUgPSAnYj1BUzonICsgYml0cmF0ZTtcbiAgLy8gQXMgcGVyIFJGQyA0NTY2LCB0aGUgYiBsaW5lIHNob3VsZCBmb2xsb3cgYWZ0ZXIgYy1saW5lLlxuICBzZHBMaW5lcy5zcGxpY2UoY0xpbmVJbmRleCArIDEsIDAsIGJ3TGluZSk7XG4gIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuICByZXR1cm4gc2RwO1xufVxuXG4vLyBBZGQgYW4gYT1mbXRwOiB4LWdvb2dsZS1taW4tYml0cmF0ZT1rYnBzIGxpbmUsIGlmIHZpZGVvU2VuZEluaXRpYWxCaXRyYXRlXG4vLyBpcyBzcGVjaWZpZWQuIFdlJ2xsIGFsc28gYWRkIGEgeC1nb29nbGUtbWluLWJpdHJhdGUgdmFsdWUsIHNpbmNlIHRoZSBtYXhcbi8vIG11c3QgYmUgPj0gdGhlIG1pbi5cbmZ1bmN0aW9uIG1heWJlU2V0VmlkZW9TZW5kSW5pdGlhbEJpdFJhdGUoc2RwLCBwYXJhbXMpIHtcbiAgbGV0IGluaXRpYWxCaXRyYXRlID0gcGFyc2VJbnQocGFyYW1zLnZpZGVvU2VuZEluaXRpYWxCaXRyYXRlKTtcbiAgaWYgKCFpbml0aWFsQml0cmF0ZSkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICAvLyBWYWxpZGF0ZSB0aGUgaW5pdGlhbCBiaXRyYXRlIHZhbHVlLlxuICBsZXQgbWF4Qml0cmF0ZSA9IHBhcnNlSW50KGluaXRpYWxCaXRyYXRlKTtcbiAgY29uc3QgYml0cmF0ZSA9IHBhcnNlSW50KHBhcmFtcy52aWRlb1NlbmRCaXRyYXRlKTtcbiAgaWYgKGJpdHJhdGUpIHtcbiAgICBpZiAoaW5pdGlhbEJpdHJhdGUgPiBiaXRyYXRlKSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0NsYW1waW5nIGluaXRpYWwgYml0cmF0ZSB0byBtYXggYml0cmF0ZSBvZiAnICsgYml0cmF0ZSArICcga2Jwcy4nKTtcbiAgICAgIGluaXRpYWxCaXRyYXRlID0gYml0cmF0ZTtcbiAgICAgIHBhcmFtcy52aWRlb1NlbmRJbml0aWFsQml0cmF0ZSA9IGluaXRpYWxCaXRyYXRlO1xuICAgIH1cbiAgICBtYXhCaXRyYXRlID0gYml0cmF0ZTtcbiAgfVxuXG4gIGNvbnN0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcblxuICAvLyBTZWFyY2ggZm9yIG0gbGluZS5cbiAgY29uc3QgbUxpbmVJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCAndmlkZW8nKTtcbiAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0ZhaWxlZCB0byBmaW5kIHZpZGVvIG0tbGluZScpO1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgLy8gRmlndXJlIG91dCB0aGUgZmlyc3QgY29kZWMgcGF5bG9hZCB0eXBlIG9uIHRoZSBtPXZpZGVvIFNEUCBsaW5lLlxuICBjb25zdCB2aWRlb01MaW5lID0gc2RwTGluZXNbbUxpbmVJbmRleF07XG4gIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKCdtPXZpZGVvXFxcXHNcXFxcZCtcXFxcc1tBLVovXStcXFxccycpO1xuICBjb25zdCBzZW5kUGF5bG9hZFR5cGUgPSB2aWRlb01MaW5lLnNwbGl0KHBhdHRlcm4pWzFdLnNwbGl0KCcgJylbMF07XG4gIGNvbnN0IGZtdHBMaW5lID0gc2RwTGluZXNbZmluZExpbmUoc2RwTGluZXMsICdhPXJ0cG1hcCcsIHNlbmRQYXlsb2FkVHlwZSldO1xuICBjb25zdCBjb2RlY05hbWUgPSBmbXRwTGluZS5zcGxpdCgnYT1ydHBtYXA6JyArXG4gICAgICBzZW5kUGF5bG9hZFR5cGUpWzFdLnNwbGl0KCcvJylbMF07XG5cbiAgLy8gVXNlIGNvZGVjIGZyb20gcGFyYW1zIGlmIHNwZWNpZmllZCB2aWEgVVJMIHBhcmFtLCBvdGhlcndpc2UgdXNlIGZyb20gU0RQLlxuICBjb25zdCBjb2RlYyA9IHBhcmFtcy52aWRlb1NlbmRDb2RlYyB8fCBjb2RlY05hbWU7XG4gIHNkcCA9IHNldENvZGVjUGFyYW0oc2RwLCBjb2RlYywgJ3gtZ29vZ2xlLW1pbi1iaXRyYXRlJyxcbiAgICAgIHBhcmFtcy52aWRlb1NlbmRJbml0aWFsQml0cmF0ZS50b1N0cmluZygpKTtcbiAgc2RwID0gc2V0Q29kZWNQYXJhbShzZHAsIGNvZGVjLCAneC1nb29nbGUtbWF4LWJpdHJhdGUnLFxuICAgICAgbWF4Qml0cmF0ZS50b1N0cmluZygpKTtcblxuICByZXR1cm4gc2RwO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQYXlsb2FkVHlwZUZyb21NbGluZShtTGluZSwgcGF5bG9hZFR5cGUpIHtcbiAgbUxpbmUgPSBtTGluZS5zcGxpdCgnICcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1MaW5lLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKG1MaW5lW2ldID09PSBwYXlsb2FkVHlwZS50b1N0cmluZygpKSB7XG4gICAgICBtTGluZS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtTGluZS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvZGVjQnlOYW1lKHNkcExpbmVzLCBjb2RlYykge1xuICBjb25zdCBpbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1ydHBtYXAnLCBjb2RlYyk7XG4gIGlmIChpbmRleCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHBMaW5lcztcbiAgfVxuICBjb25zdCBwYXlsb2FkVHlwZSA9IGdldENvZGVjUGF5bG9hZFR5cGVGcm9tTGluZShzZHBMaW5lc1tpbmRleF0pO1xuICBzZHBMaW5lcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIC8vIFNlYXJjaCBmb3IgdGhlIHZpZGVvIG09IGxpbmUgYW5kIHJlbW92ZSB0aGUgY29kZWMuXG4gIGNvbnN0IG1MaW5lSW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ209JywgJ3ZpZGVvJyk7XG4gIGlmIChtTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcExpbmVzO1xuICB9XG4gIHNkcExpbmVzW21MaW5lSW5kZXhdID0gcmVtb3ZlUGF5bG9hZFR5cGVGcm9tTWxpbmUoc2RwTGluZXNbbUxpbmVJbmRleF0sXG4gICAgICBwYXlsb2FkVHlwZSk7XG4gIHJldHVybiBzZHBMaW5lcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ29kZWNCeVBheWxvYWRUeXBlKHNkcExpbmVzLCBwYXlsb2FkVHlwZSkge1xuICBjb25zdCBpbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1ydHBtYXAnLCBwYXlsb2FkVHlwZS50b1N0cmluZygpKTtcbiAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcExpbmVzO1xuICB9XG4gIHNkcExpbmVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgLy8gU2VhcmNoIGZvciB0aGUgdmlkZW8gbT0gbGluZSBhbmQgcmVtb3ZlIHRoZSBjb2RlYy5cbiAgY29uc3QgbUxpbmVJbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnbT0nLCAndmlkZW8nKTtcbiAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwTGluZXM7XG4gIH1cbiAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSByZW1vdmVQYXlsb2FkVHlwZUZyb21NbGluZShzZHBMaW5lc1ttTGluZUluZGV4XSxcbiAgICAgIHBheWxvYWRUeXBlKTtcbiAgcmV0dXJuIHNkcExpbmVzO1xufVxuXG5mdW5jdGlvbiBtYXliZVJlbW92ZVZpZGVvRmVjKHNkcCwgcGFyYW1zKSB7XG4gIGlmIChwYXJhbXMudmlkZW9GZWMgIT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgbGV0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcblxuICBsZXQgaW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ2E9cnRwbWFwJywgJ3JlZCcpO1xuICBpZiAoaW5kZXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gc2RwO1xuICB9XG4gIGNvbnN0IHJlZFBheWxvYWRUeXBlID0gZ2V0Q29kZWNQYXlsb2FkVHlwZUZyb21MaW5lKHNkcExpbmVzW2luZGV4XSk7XG4gIHNkcExpbmVzID0gcmVtb3ZlQ29kZWNCeVBheWxvYWRUeXBlKHNkcExpbmVzLCByZWRQYXlsb2FkVHlwZSk7XG5cbiAgc2RwTGluZXMgPSByZW1vdmVDb2RlY0J5TmFtZShzZHBMaW5lcywgJ3VscGZlYycpO1xuXG4gIC8vIFJlbW92ZSBmbXRwIGxpbmVzIGFzc29jaWF0ZWQgd2l0aCByZWQgY29kZWMuXG4gIGluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdhPWZtdHAnLCByZWRQYXlsb2FkVHlwZS50b1N0cmluZygpKTtcbiAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBjb25zdCBmbXRwTGluZSA9IHBhcnNlRm10cExpbmUoc2RwTGluZXNbaW5kZXhdKTtcbiAgY29uc3QgcnR4UGF5bG9hZFR5cGUgPSBmbXRwTGluZS5wdDtcbiAgaWYgKHJ0eFBheWxvYWRUeXBlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuICBzZHBMaW5lcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIHNkcExpbmVzID0gcmVtb3ZlQ29kZWNCeVBheWxvYWRUeXBlKHNkcExpbmVzLCBydHhQYXlsb2FkVHlwZSk7XG4gIHJldHVybiBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcbn1cblxuLy8gUHJvbW90ZXMgfGF1ZGlvU2VuZENvZGVjfCB0byBiZSB0aGUgZmlyc3QgaW4gdGhlIG09YXVkaW8gbGluZSwgaWYgc2V0LlxuZnVuY3Rpb24gbWF5YmVQcmVmZXJBdWRpb1NlbmRDb2RlYyhzZHAsIHBhcmFtcykge1xuICByZXR1cm4gbWF5YmVQcmVmZXJDb2RlYyhzZHAsICdhdWRpbycsICdzZW5kJywgcGFyYW1zLmF1ZGlvU2VuZENvZGVjKTtcbn1cblxuLy8gUHJvbW90ZXMgfGF1ZGlvUmVjdkNvZGVjfCB0byBiZSB0aGUgZmlyc3QgaW4gdGhlIG09YXVkaW8gbGluZSwgaWYgc2V0LlxuZnVuY3Rpb24gbWF5YmVQcmVmZXJBdWRpb1JlY2VpdmVDb2RlYyhzZHAsIHBhcmFtcykge1xuICByZXR1cm4gbWF5YmVQcmVmZXJDb2RlYyhzZHAsICdhdWRpbycsICdyZWNlaXZlJywgcGFyYW1zLmF1ZGlvUmVjdkNvZGVjKTtcbn1cblxuLy8gUHJvbW90ZXMgfHZpZGVvU2VuZENvZGVjfCB0byBiZSB0aGUgZmlyc3QgaW4gdGhlIG09YXVkaW8gbGluZSwgaWYgc2V0LlxuZnVuY3Rpb24gbWF5YmVQcmVmZXJWaWRlb1NlbmRDb2RlYyhzZHAsIHBhcmFtcykge1xuICByZXR1cm4gbWF5YmVQcmVmZXJDb2RlYyhzZHAsICd2aWRlbycsICdzZW5kJywgcGFyYW1zLnZpZGVvU2VuZENvZGVjKTtcbn1cblxuLy8gUHJvbW90ZXMgfHZpZGVvUmVjdkNvZGVjfCB0byBiZSB0aGUgZmlyc3QgaW4gdGhlIG09YXVkaW8gbGluZSwgaWYgc2V0LlxuZnVuY3Rpb24gbWF5YmVQcmVmZXJWaWRlb1JlY2VpdmVDb2RlYyhzZHAsIHBhcmFtcykge1xuICByZXR1cm4gbWF5YmVQcmVmZXJDb2RlYyhzZHAsICd2aWRlbycsICdyZWNlaXZlJywgcGFyYW1zLnZpZGVvUmVjdkNvZGVjKTtcbn1cblxuLy8gU2V0cyB8Y29kZWN8IGFzIHRoZSBkZWZhdWx0IHx0eXBlfCBjb2RlYyBpZiBpdCdzIHByZXNlbnQuXG4vLyBUaGUgZm9ybWF0IG9mIHxjb2RlY3wgaXMgJ05BTUUvUkFURScsIGUuZy4gJ29wdXMvNDgwMDAnLlxuZnVuY3Rpb24gbWF5YmVQcmVmZXJDb2RlYyhzZHAsIHR5cGUsIGRpciwgY29kZWMpIHtcbiAgY29uc3Qgc3RyID0gdHlwZSArICcgJyArIGRpciArICcgY29kZWMnO1xuICBpZiAoIWNvZGVjKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdObyBwcmVmZXJlbmNlIG9uICcgKyBzdHIgKyAnLicpO1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBMb2dnZXIuZGVidWcoJ1ByZWZlciAnICsgc3RyICsgJzogJyArIGNvZGVjKTtcblxuICBjb25zdCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG5cbiAgLy8gU2VhcmNoIGZvciBtIGxpbmUuXG4gIGNvbnN0IG1MaW5lSW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ209JywgdHlwZSk7XG4gIGlmIChtTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIC8vIElmIHRoZSBjb2RlYyBpcyBhdmFpbGFibGUsIHNldCBpdCBhcyB0aGUgZGVmYXVsdCBpbiBtIGxpbmUuXG4gIGxldCBwYXlsb2FkID0gbnVsbDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZHBMaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGluZGV4ID0gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBpLCAtMSwgJ2E9cnRwbWFwJywgY29kZWMpO1xuICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgcGF5bG9hZCA9IGdldENvZGVjUGF5bG9hZFR5cGVGcm9tTGluZShzZHBMaW5lc1tpbmRleF0pO1xuICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSBzZXREZWZhdWx0Q29kZWMoc2RwTGluZXNbbUxpbmVJbmRleF0sIHBheWxvYWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuICByZXR1cm4gc2RwO1xufVxuXG4vLyBTZXQgZm10cCBwYXJhbSB0byBzcGVjaWZpYyBjb2RlYyBpbiBTRFAuIElmIHBhcmFtIGRvZXMgbm90IGV4aXN0cywgYWRkIGl0LlxuZnVuY3Rpb24gc2V0Q29kZWNQYXJhbShzZHAsIGNvZGVjLCBwYXJhbSwgdmFsdWUsIG1pZCkge1xuICBsZXQgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuICBsZXQgaGVhZExpbmVzID0gbnVsbDtcbiAgbGV0IHRhaWxMaW5lcyA9IG51bGw7XG4gIGlmICh0eXBlb2YgbWlkID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1pZFJhbmdlID0gZmluZE1MaW5lUmFuZ2VXaXRoTUlEKHNkcExpbmVzLCBtaWQpO1xuICAgIGlmIChtaWRSYW5nZSkge1xuICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBtaWRSYW5nZTtcbiAgICAgIGhlYWRMaW5lcyA9IHNkcExpbmVzLnNsaWNlKDAsIHN0YXJ0KTtcbiAgICAgIHRhaWxMaW5lcyA9IHNkcExpbmVzLnNsaWNlKGVuZCk7XG4gICAgICBzZHBMaW5lcyA9IHNkcExpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNEUHMgc2VudCBmcm9tIE1DVSB1c2UgXFxuIGFzIGxpbmUgYnJlYWsuXG4gIGlmIChzZHBMaW5lcy5sZW5ndGggPD0gMSkge1xuICAgIHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXG4nKTtcbiAgfVxuXG4gIGNvbnN0IGZtdHBMaW5lSW5kZXggPSBmaW5kRm10cExpbmUoc2RwTGluZXMsIGNvZGVjKTtcblxuICBsZXQgZm10cE9iaiA9IHt9O1xuICBpZiAoZm10cExpbmVJbmRleCA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGluZGV4ID0gZmluZExpbmUoc2RwTGluZXMsICdhPXJ0cG1hcCcsIGNvZGVjKTtcbiAgICBpZiAoaW5kZXggPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBzZHA7XG4gICAgfVxuICAgIGNvbnN0IHBheWxvYWQgPSBnZXRDb2RlY1BheWxvYWRUeXBlRnJvbUxpbmUoc2RwTGluZXNbaW5kZXhdKTtcbiAgICBmbXRwT2JqLnB0ID0gcGF5bG9hZC50b1N0cmluZygpO1xuICAgIGZtdHBPYmoucGFyYW1zID0ge307XG4gICAgZm10cE9iai5wYXJhbXNbcGFyYW1dID0gdmFsdWU7XG4gICAgc2RwTGluZXMuc3BsaWNlKGluZGV4ICsgMSwgMCwgd3JpdGVGbXRwTGluZShmbXRwT2JqKSk7XG4gIH0gZWxzZSB7XG4gICAgZm10cE9iaiA9IHBhcnNlRm10cExpbmUoc2RwTGluZXNbZm10cExpbmVJbmRleF0pO1xuICAgIGZtdHBPYmoucGFyYW1zW3BhcmFtXSA9IHZhbHVlO1xuICAgIHNkcExpbmVzW2ZtdHBMaW5lSW5kZXhdID0gd3JpdGVGbXRwTGluZShmbXRwT2JqKTtcbiAgfVxuXG4gIGlmIChoZWFkTGluZXMpIHtcbiAgICBzZHBMaW5lcyA9IGhlYWRMaW5lcy5jb25jYXQoc2RwTGluZXMpLmNvbmNhdCh0YWlsTGluZXMpO1xuICB9XG4gIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuICByZXR1cm4gc2RwO1xufVxuXG4vLyBSZW1vdmUgZm10cCBwYXJhbSBpZiBpdCBleGlzdHMuXG5mdW5jdGlvbiByZW1vdmVDb2RlY1BhcmFtKHNkcCwgY29kZWMsIHBhcmFtKSB7XG4gIGNvbnN0IHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcblxuICBjb25zdCBmbXRwTGluZUluZGV4ID0gZmluZEZtdHBMaW5lKHNkcExpbmVzLCBjb2RlYyk7XG4gIGlmIChmbXRwTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIGNvbnN0IG1hcCA9IHBhcnNlRm10cExpbmUoc2RwTGluZXNbZm10cExpbmVJbmRleF0pO1xuICBkZWxldGUgbWFwLnBhcmFtc1twYXJhbV07XG5cbiAgY29uc3QgbmV3TGluZSA9IHdyaXRlRm10cExpbmUobWFwKTtcbiAgaWYgKG5ld0xpbmUgPT09IG51bGwpIHtcbiAgICBzZHBMaW5lcy5zcGxpY2UoZm10cExpbmVJbmRleCwgMSk7XG4gIH0gZWxzZSB7XG4gICAgc2RwTGluZXNbZm10cExpbmVJbmRleF0gPSBuZXdMaW5lO1xuICB9XG5cbiAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XG4gIHJldHVybiBzZHA7XG59XG5cbi8vIFNwbGl0IGFuIGZtdHAgbGluZSBpbnRvIGFuIG9iamVjdCBpbmNsdWRpbmcgJ3B0JyBhbmQgJ3BhcmFtcycuXG5mdW5jdGlvbiBwYXJzZUZtdHBMaW5lKGZtdHBMaW5lKSB7XG4gIGNvbnN0IGZtdHBPYmogPSB7fTtcbiAgY29uc3Qgc3BhY2VQb3MgPSBmbXRwTGluZS5pbmRleE9mKCcgJyk7XG4gIGNvbnN0IGtleVZhbHVlcyA9IGZtdHBMaW5lLnN1YnN0cmluZyhzcGFjZVBvcyArIDEpLnNwbGl0KCc7Jyk7XG5cbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ2E9Zm10cDooXFxcXGQrKScpO1xuICBjb25zdCByZXN1bHQgPSBmbXRwTGluZS5tYXRjaChwYXR0ZXJuKTtcbiAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID09PSAyKSB7XG4gICAgZm10cE9iai5wdCA9IHJlc3VsdFsxXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHBhcmFtcyA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleVZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHBhaXIgPSBrZXlWYWx1ZXNbaV0uc3BsaXQoJz0nKTtcbiAgICBpZiAocGFpci5sZW5ndGggPT09IDIpIHtcbiAgICAgIHBhcmFtc1twYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgfVxuICB9XG4gIGZtdHBPYmoucGFyYW1zID0gcGFyYW1zO1xuXG4gIHJldHVybiBmbXRwT2JqO1xufVxuXG4vLyBHZW5lcmF0ZSBhbiBmbXRwIGxpbmUgZnJvbSBhbiBvYmplY3QgaW5jbHVkaW5nICdwdCcgYW5kICdwYXJhbXMnLlxuZnVuY3Rpb24gd3JpdGVGbXRwTGluZShmbXRwT2JqKSB7XG4gIGlmICghZm10cE9iai5oYXNPd25Qcm9wZXJ0eSgncHQnKSB8fCAhZm10cE9iai5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBwdCA9IGZtdHBPYmoucHQ7XG4gIGNvbnN0IHBhcmFtcyA9IGZtdHBPYmoucGFyYW1zO1xuICBjb25zdCBrZXlWYWx1ZXMgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcbiAgICBrZXlWYWx1ZXNbaV0gPSBrZXkgKyAnPScgKyBwYXJhbXNba2V5XTtcbiAgICArK2k7XG4gIH1cbiAgaWYgKGkgPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gJ2E9Zm10cDonICsgcHQudG9TdHJpbmcoKSArICcgJyArIGtleVZhbHVlcy5qb2luKCc7Jyk7XG59XG5cbi8vIEZpbmQgZm10cCBhdHRyaWJ1dGUgZm9yIHxjb2RlY3wgaW4gfHNkcExpbmVzfC5cbmZ1bmN0aW9uIGZpbmRGbXRwTGluZShzZHBMaW5lcywgY29kZWMpIHtcbiAgLy8gRmluZCBwYXlsb2FkIG9mIGNvZGVjLlxuICBjb25zdCBwYXlsb2FkID0gZ2V0Q29kZWNQYXlsb2FkVHlwZShzZHBMaW5lcywgY29kZWMpO1xuICAvLyBGaW5kIHRoZSBwYXlsb2FkIGluIGZtdHAgbGluZS5cbiAgcmV0dXJuIHBheWxvYWQgPyBmaW5kTGluZShzZHBMaW5lcywgJ2E9Zm10cDonICsgcGF5bG9hZC50b1N0cmluZygpKSA6IG51bGw7XG59XG5cbi8vIEZpbmQgdGhlIGxpbmUgaW4gc2RwTGluZXMgdGhhdCBzdGFydHMgd2l0aCB8cHJlZml4fCwgYW5kLCBpZiBzcGVjaWZpZWQsXG4vLyBjb250YWlucyB8c3Vic3RyfCAoY2FzZS1pbnNlbnNpdGl2ZSBzZWFyY2gpLlxuZnVuY3Rpb24gZmluZExpbmUoc2RwTGluZXMsIHByZWZpeCwgc3Vic3RyKSB7XG4gIHJldHVybiBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIDAsIC0xLCBwcmVmaXgsIHN1YnN0cik7XG59XG5cbi8vIEZpbmQgdGhlIGxpbmUgaW4gc2RwTGluZXNbc3RhcnRMaW5lLi4uZW5kTGluZSAtIDFdIHRoYXQgc3RhcnRzIHdpdGggfHByZWZpeHxcbi8vIGFuZCwgaWYgc3BlY2lmaWVkLCBjb250YWlucyB8c3Vic3RyfCAoY2FzZS1pbnNlbnNpdGl2ZSBzZWFyY2gpLlxuZnVuY3Rpb24gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBzdGFydExpbmUsIGVuZExpbmUsIHByZWZpeCwgc3Vic3RyKSB7XG4gIGNvbnN0IHJlYWxFbmRMaW5lID0gZW5kTGluZSAhPT0gLTEgPyBlbmRMaW5lIDogc2RwTGluZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gc3RhcnRMaW5lOyBpIDwgcmVhbEVuZExpbmU7ICsraSkge1xuICAgIGlmIChzZHBMaW5lc1tpXS5pbmRleE9mKHByZWZpeCkgPT09IDApIHtcbiAgICAgIGlmICghc3Vic3RyIHx8XG4gICAgICAgICAgc2RwTGluZXNbaV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHN1YnN0ci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBHZXRzIHRoZSBjb2RlYyBwYXlsb2FkIHR5cGUgZnJvbSBzZHAgbGluZXMuXG5mdW5jdGlvbiBnZXRDb2RlY1BheWxvYWRUeXBlKHNkcExpbmVzLCBjb2RlYykge1xuICBjb25zdCBpbmRleCA9IGZpbmRMaW5lKHNkcExpbmVzLCAnYT1ydHBtYXAnLCBjb2RlYyk7XG4gIHJldHVybiBpbmRleCA/IGdldENvZGVjUGF5bG9hZFR5cGVGcm9tTGluZShzZHBMaW5lc1tpbmRleF0pIDogbnVsbDtcbn1cblxuLy8gR2V0cyB0aGUgY29kZWMgcGF5bG9hZCB0eXBlIGZyb20gYW4gYT1ydHBtYXA6WCBsaW5lLlxuZnVuY3Rpb24gZ2V0Q29kZWNQYXlsb2FkVHlwZUZyb21MaW5lKHNkcExpbmUpIHtcbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ2E9cnRwbWFwOihcXFxcZCspIFthLXpBLVowLTktXStcXFxcL1xcXFxkKycpO1xuICBjb25zdCByZXN1bHQgPSBzZHBMaW5lLm1hdGNoKHBhdHRlcm4pO1xuICByZXR1cm4gKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID09PSAyKSA/IHJlc3VsdFsxXSA6IG51bGw7XG59XG5cbi8vIFJldHVybnMgYSBuZXcgbT0gbGluZSB3aXRoIHRoZSBzcGVjaWZpZWQgY29kZWMgYXMgdGhlIGZpcnN0IG9uZS5cbmZ1bmN0aW9uIHNldERlZmF1bHRDb2RlYyhtTGluZSwgcGF5bG9hZCkge1xuICBjb25zdCBlbGVtZW50cyA9IG1MaW5lLnNwbGl0KCcgJyk7XG5cbiAgLy8gSnVzdCBjb3B5IHRoZSBmaXJzdCB0aHJlZSBwYXJhbWV0ZXJzOyBjb2RlYyBvcmRlciBzdGFydHMgb24gZm91cnRoLlxuICBjb25zdCBuZXdMaW5lID0gZWxlbWVudHMuc2xpY2UoMCwgMyk7XG5cbiAgLy8gUHV0IHRhcmdldCBwYXlsb2FkIGZpcnN0IGFuZCBjb3B5IGluIHRoZSByZXN0LlxuICBuZXdMaW5lLnB1c2gocGF5bG9hZCk7XG4gIGZvciAobGV0IGkgPSAzOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudHNbaV0gIT09IHBheWxvYWQpIHtcbiAgICAgIG5ld0xpbmUucHVzaChlbGVtZW50c1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdMaW5lLmpvaW4oJyAnKTtcbn1cblxuLyogQmVsb3cgYXJlIG5ld2x5IGFkZGVkIGZ1bmN0aW9ucyAqL1xuXG4vLyBGb2xsb3dpbmcgY29kZWNzIHdpbGwgbm90IGJlIHJlbW92ZWQgZnJvbSBTRFAgZXZlbnQgdGhleSBhcmUgbm90IGluIHRoZVxuLy8gdXNlci1zcGVjaWZpZWQgY29kZWMgbGlzdC5cbmNvbnN0IGF1ZGlvQ29kZWNBbGxvd0xpc3QgPSBbJ0NOJywgJ3RlbGVwaG9uZS1ldmVudCddO1xuY29uc3QgdmlkZW9Db2RlY0FsbG93TGlzdCA9IFsncmVkJywgJ3VscGZlYycsICdmbGV4ZmVjJ107XG5cbi8vIFJldHVybnMgYSBuZXcgbT0gbGluZSB3aXRoIHRoZSBzcGVjaWZpZWQgY29kZWMgb3JkZXIuXG5mdW5jdGlvbiBzZXRDb2RlY09yZGVyKG1MaW5lLCBwYXlsb2Fkcykge1xuICBjb25zdCBlbGVtZW50cyA9IG1MaW5lLnNwbGl0KCcgJyk7XG5cbiAgLy8gSnVzdCBjb3B5IHRoZSBmaXJzdCB0aHJlZSBwYXJhbWV0ZXJzOyBjb2RlYyBvcmRlciBzdGFydHMgb24gZm91cnRoLlxuICBsZXQgbmV3TGluZSA9IGVsZW1lbnRzLnNsaWNlKDAsIDMpO1xuXG4gIC8vIENvbmNhdCBwYXlsb2FkIHR5cGVzLlxuICBuZXdMaW5lID0gbmV3TGluZS5jb25jYXQocGF5bG9hZHMpO1xuXG4gIHJldHVybiBuZXdMaW5lLmpvaW4oJyAnKTtcbn1cblxuLy8gQXBwZW5kIFJUWCBwYXlsb2FkcyBmb3IgZXhpc3RpbmcgcGF5bG9hZHMuXG5mdW5jdGlvbiBhcHBlbmRSdHhQYXlsb2FkcyhzZHBMaW5lcywgcGF5bG9hZHMpIHtcbiAgZm9yIChjb25zdCBwYXlsb2FkIG9mIHBheWxvYWRzKSB7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ2E9Zm10cCcsICdhcHQ9JyArIHBheWxvYWQpO1xuICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZm10cExpbmUgPSBwYXJzZUZtdHBMaW5lKHNkcExpbmVzW2luZGV4XSk7XG4gICAgICBwYXlsb2Fkcy5wdXNoKGZtdHBMaW5lLnB0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBheWxvYWRzO1xufVxuXG4vLyBSZW1vdmUgYSBjb2RlYyB3aXRoIGFsbCBpdHMgYXNzb2NpYXRlZCBhIGxpbmVzLlxuZnVuY3Rpb24gcmVtb3ZlQ29kZWNGcmFtQUxpbmUoc2RwTGluZXMsIHBheWxvYWQpIHtcbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ2E9KHJ0cG1hcHxydGNwLWZifGZtdHApOicrcGF5bG9hZCsnXFxcXHMnKTtcbiAgZm9yIChsZXQgaT1zZHBMaW5lcy5sZW5ndGgtMTsgaT4wOyBpLS0pIHtcbiAgICBpZiAoc2RwTGluZXNbaV0ubWF0Y2gocGF0dGVybikpIHtcbiAgICAgIHNkcExpbmVzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNkcExpbmVzO1xufVxuXG4vLyBGaW5kIG0tbGluZSBhbmQgbmV4dCBtLWxpbmUgd2l0aCBnaXZlIG1pZCwgcmV0dXJuIHsgc3RhcnQsIGVuZCB9LlxuZnVuY3Rpb24gZmluZE1MaW5lUmFuZ2VXaXRoTUlEKHNkcExpbmVzLCBtaWQpIHtcbiAgY29uc3QgbWlkTGluZSA9ICdhPW1pZDonICsgbWlkO1xuICBsZXQgbWlkSW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgbWlkTGluZSk7XG4gIC8vIENvbXBhcmUgdGhlIHdob2xlIGxpbmUgc2luY2UgZmluZExpbmUgb25seSBjb21wYXJlcyBwcmVmaXhcbiAgd2hpbGUgKG1pZEluZGV4ID49IDAgJiYgc2RwTGluZXNbbWlkSW5kZXhdICE9PSBtaWRMaW5lKSB7XG4gICAgbWlkSW5kZXggPSBmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIG1pZEluZGV4LCAtMSwgbWlkTGluZSk7XG4gIH1cbiAgaWYgKG1pZEluZGV4ID49IDApIHtcbiAgICAvLyBGb3VuZCBtYXRjaGVkIGE9bWlkIGxpbmVcbiAgICBjb25zdCBuZXh0TUxpbmVJbmRleCA9IChmaW5kTGluZUluUmFuZ2Uoc2RwTGluZXMsIG1pZEluZGV4LCAtMSwgJ209JylcbiAgICAgICAgfHwgLTEpO1xuICAgIGxldCBtTGluZUluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgaSA9IG1pZEluZGV4OyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKHNkcExpbmVzW2ldLmluZGV4T2YoJ209JykgPj0gMCkge1xuICAgICAgICBtTGluZUluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtTGluZUluZGV4ID49IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBtTGluZUluZGV4LFxuICAgICAgICBlbmQ6IG5leHRNTGluZUluZGV4XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gUmVvcmRlciBjb2RlY3MgaW4gbS1saW5lIGFjY29yZGluZyB0aGUgb3JkZXIgb2YgfGNvZGVjc3wuIFJlbW92ZSBjb2RlY3MgZnJvbVxuLy8gbS1saW5lIGlmIGl0IGlzIG5vdCBwcmVzZW50IGluIHxjb2RlY3N8XG4vLyBBcHBsaWVkIG9uIHNwZWNpZmljIG0tbGluZSBpZiBtaWQgaXMgcHJlc2VudGVkXG4vLyBUaGUgZm9ybWF0IG9mIHxjb2RlY3wgaXMgJ05BTUUvUkFURScsIGUuZy4gJ29wdXMvNDgwMDAnLlxuZXhwb3J0IGZ1bmN0aW9uIHJlb3JkZXJDb2RlY3Moc2RwLCB0eXBlLCBjb2RlY3MsIG1pZCkge1xuICBpZiAoIWNvZGVjcyB8fCBjb2RlY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIGNvZGVjcyA9IHR5cGUgPT09ICdhdWRpbycgPyBjb2RlY3MuY29uY2F0KGF1ZGlvQ29kZWNBbGxvd0xpc3QpIDogY29kZWNzLmNvbmNhdChcbiAgICAgIHZpZGVvQ29kZWNBbGxvd0xpc3QpO1xuXG4gIGxldCBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XG4gIGxldCBoZWFkTGluZXMgPSBudWxsO1xuICBsZXQgdGFpbExpbmVzID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBtaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbWlkUmFuZ2UgPSBmaW5kTUxpbmVSYW5nZVdpdGhNSUQoc2RwTGluZXMsIG1pZCk7XG4gICAgaWYgKG1pZFJhbmdlKSB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IG1pZFJhbmdlO1xuICAgICAgaGVhZExpbmVzID0gc2RwTGluZXMuc2xpY2UoMCwgc3RhcnQpO1xuICAgICAgdGFpbExpbmVzID0gc2RwTGluZXMuc2xpY2UoZW5kKTtcbiAgICAgIHNkcExpbmVzID0gc2RwTGluZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2VhcmNoIGZvciBtIGxpbmUuXG4gIGNvbnN0IG1MaW5lSW5kZXggPSBmaW5kTGluZShzZHBMaW5lcywgJ209JywgdHlwZSk7XG4gIGlmIChtTGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIGNvbnN0IG9yaWdpblBheWxvYWRzID0gc2RwTGluZXNbbUxpbmVJbmRleF0uc3BsaXQoJyAnKTtcbiAgb3JpZ2luUGF5bG9hZHMuc3BsaWNlKDAsIDMpO1xuXG4gIC8vIElmIHRoZSBjb2RlYyBpcyBhdmFpbGFibGUsIHNldCBpdCBhcyB0aGUgZGVmYXVsdCBpbiBtIGxpbmUuXG4gIGxldCBwYXlsb2FkcyA9IFtdO1xuICBmb3IgKGNvbnN0IGNvZGVjIG9mIGNvZGVjcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2RwTGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBpLCAtMSwgJ2E9cnRwbWFwJywgY29kZWMpO1xuICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBnZXRDb2RlY1BheWxvYWRUeXBlRnJvbUxpbmUoc2RwTGluZXNbaW5kZXhdKTtcbiAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICBwYXlsb2Fkcy5wdXNoKHBheWxvYWQpO1xuICAgICAgICAgIGkgPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwYXlsb2FkcyA9IGFwcGVuZFJ0eFBheWxvYWRzKHNkcExpbmVzLCBwYXlsb2Fkcyk7XG4gIHNkcExpbmVzW21MaW5lSW5kZXhdID0gc2V0Q29kZWNPcmRlcihzZHBMaW5lc1ttTGluZUluZGV4XSwgcGF5bG9hZHMpO1xuXG4gIC8vIFJlbW92ZSBhIGxpbmVzLlxuICBmb3IgKGNvbnN0IHBheWxvYWQgb2Ygb3JpZ2luUGF5bG9hZHMpIHtcbiAgICBpZiAocGF5bG9hZHMuaW5kZXhPZihwYXlsb2FkKT09PS0xKSB7XG4gICAgICBzZHBMaW5lcyA9IHJlbW92ZUNvZGVjRnJhbUFMaW5lKHNkcExpbmVzLCBwYXlsb2FkKTtcbiAgICB9XG4gIH1cblxuICBpZiAoaGVhZExpbmVzKSB7XG4gICAgc2RwTGluZXMgPSBoZWFkTGluZXMuY29uY2F0KHNkcExpbmVzKS5jb25jYXQodGFpbExpbmVzKTtcbiAgfVxuICBzZHAgPSBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcbiAgcmV0dXJuIHNkcDtcbn1cblxuLy8gQWRkIGxlZ2FjeSBzaW11bGNhc3QuXG5leHBvcnQgZnVuY3Rpb24gYWRkTGVnYWN5U2ltdWxjYXN0KHNkcCwgdHlwZSwgbnVtU3RyZWFtcywgbWlkKSB7XG4gIGlmICghbnVtU3RyZWFtcyB8fCAhKG51bVN0cmVhbXMgPiAxKSkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBsZXQgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuICBsZXQgaGVhZExpbmVzID0gbnVsbDtcbiAgbGV0IHRhaWxMaW5lcyA9IG51bGw7XG4gIGlmICh0eXBlb2YgbWlkID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1pZFJhbmdlID0gZmluZE1MaW5lUmFuZ2VXaXRoTUlEKHNkcExpbmVzLCBtaWQpO1xuICAgIGlmIChtaWRSYW5nZSkge1xuICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBtaWRSYW5nZTtcbiAgICAgIGhlYWRMaW5lcyA9IHNkcExpbmVzLnNsaWNlKDAsIHN0YXJ0KTtcbiAgICAgIHRhaWxMaW5lcyA9IHNkcExpbmVzLnNsaWNlKGVuZCk7XG4gICAgICBzZHBMaW5lcyA9IHNkcExpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNlYXJjaCBmb3IgbSBsaW5lLlxuICBjb25zdCBtTGluZVN0YXJ0ID0gZmluZExpbmUoc2RwTGluZXMsICdtPScsIHR5cGUpO1xuICBpZiAobUxpbmVTdGFydCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzZHA7XG4gIH1cbiAgbGV0IG1MaW5lRW5kID0gZmluZExpbmVJblJhbmdlKHNkcExpbmVzLCBtTGluZVN0YXJ0ICsgMSwgLTEsICdtPScpO1xuICBpZiAobUxpbmVFbmQgPT09IG51bGwpIHtcbiAgICBtTGluZUVuZCA9IHNkcExpbmVzLmxlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IHNzcmNHZXR0ZXIgPSAobGluZSkgPT4ge1xuICAgIGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdCgnICcpO1xuICAgIGNvbnN0IHNzcmMgPSBwYXJ0c1swXS5zcGxpdCgnOicpWzFdO1xuICAgIHJldHVybiBzc3JjO1xuICB9O1xuXG4gIC8vIFByb2Nlc3Mgc3NyYyBsaW5lcyBmcm9tIG1MaW5lSW5kZXguXG4gIGNvbnN0IHJlbW92ZXMgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHNzcmNzID0gbmV3IFNldCgpO1xuICBjb25zdCBnc3NyY3MgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHNpbUxpbmVzID0gW107XG4gIGNvbnN0IHNpbUdyb3VwTGluZXMgPSBbXTtcbiAgbGV0IGkgPSBtTGluZVN0YXJ0ICsgMTtcbiAgd2hpbGUgKGkgPCBtTGluZUVuZCkge1xuICAgIGNvbnN0IGxpbmUgPSBzZHBMaW5lc1tpXTtcbiAgICBpZiAobGluZSA9PT0gJycpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAobGluZS5pbmRleE9mKCdhPXNzcmM6JykgPiAtMSkge1xuICAgICAgY29uc3Qgc3NyYyA9IHNzcmNHZXR0ZXIoc2RwTGluZXNbaV0pO1xuICAgICAgc3NyY3MuYWRkKHNzcmMpO1xuICAgICAgaWYgKGxpbmUuaW5kZXhPZignY25hbWUnKSA+IC0xIHx8IGxpbmUuaW5kZXhPZignbXNpZCcpID4gLTEpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBudW1TdHJlYW1zOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBuc3NyYyA9IChwYXJzZUludChzc3JjKSArIGopICsgJyc7XG4gICAgICAgICAgc2ltTGluZXMucHVzaChsaW5lLnJlcGxhY2Uoc3NyYywgbnNzcmMpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3Zlcy5hZGQobGluZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsaW5lLmluZGV4T2YoJ2E9c3NyYy1ncm91cDpGSUQnKSA+IC0xKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGxpbmUuc3BsaXQoJyAnKTtcbiAgICAgIGdzc3Jjcy5hZGQocGFydHNbMl0pO1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBudW1TdHJlYW1zOyBqKyspIHtcbiAgICAgICAgY29uc3QgbnNzcmMxID0gKHBhcnNlSW50KHBhcnRzWzFdKSArIGopICsgJyc7XG4gICAgICAgIGNvbnN0IG5zc3JjMiA9IChwYXJzZUludChwYXJ0c1syXSkgKyBqKSArICcnO1xuICAgICAgICBzaW1Hcm91cExpbmVzLnB1c2goXG4gICAgICAgICAgbGluZS5yZXBsYWNlKHBhcnRzWzFdLCBuc3NyYzEpLnJlcGxhY2UocGFydHNbMl0sIG5zc3JjMikpO1xuICAgICAgfVxuICAgIH1cbiAgICBpKys7XG4gIH1cblxuICBjb25zdCBpbnNlcnRQb3MgPSBpO1xuICBzc3Jjcy5mb3JFYWNoKHNzcmMgPT4ge1xuICAgIGlmICghZ3NzcmNzLmhhcyhzc3JjKSkge1xuICAgICAgbGV0IGdyb3VwTGluZSA9ICdhPXNzcmMtZ3JvdXA6U0lNJztcbiAgICAgIGdyb3VwTGluZSA9IGdyb3VwTGluZSArICcgJyArIHNzcmM7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IG51bVN0cmVhbXM7IGorKykge1xuICAgICAgICBncm91cExpbmUgPSBncm91cExpbmUgKyAnICcgKyAocGFyc2VJbnQoc3NyYykgKyBqKTtcbiAgICAgIH1cbiAgICAgIHNpbUdyb3VwTGluZXMucHVzaChncm91cExpbmUpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2ltTGluZXMuc29ydCgpO1xuICAvLyBJbnNlcnQgc2ltdWxjYXN0IHNzcmMgbGluZXMuXG4gIHNkcExpbmVzLnNwbGljZShpbnNlcnRQb3MsIDAsIC4uLnNpbUdyb3VwTGluZXMpO1xuICBzZHBMaW5lcy5zcGxpY2UoaW5zZXJ0UG9zLCAwLCAuLi5zaW1MaW5lcyk7XG4gIHNkcExpbmVzID0gc2RwTGluZXMuZmlsdGVyKGxpbmUgPT4gIXJlbW92ZXMuaGFzKGxpbmUpKTtcblxuICBpZiAoaGVhZExpbmVzKSB7XG4gICAgc2RwTGluZXMgPSBoZWFkTGluZXMuY29uY2F0KHNkcExpbmVzKS5jb25jYXQodGFpbExpbmVzKTtcbiAgfVxuICBzZHAgPSBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcbiAgcmV0dXJuIHNkcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1heEJpdHJhdGUoc2RwLCBlbmNvZGluZ1BhcmFtZXRlcnNMaXN0LCBtaWQpIHtcbiAgZm9yIChjb25zdCBlbmNvZGluZ1BhcmFtZXRlcnMgb2YgZW5jb2RpbmdQYXJhbWV0ZXJzTGlzdCkge1xuICAgIGlmIChlbmNvZGluZ1BhcmFtZXRlcnMubWF4Qml0cmF0ZSkge1xuICAgICAgc2RwID0gc2V0Q29kZWNQYXJhbShcbiAgICAgICAgICBzZHAsIGVuY29kaW5nUGFyYW1ldGVycy5jb2RlYy5uYW1lLCAneC1nb29nbGUtbWF4LWJpdHJhdGUnLFxuICAgICAgICAgIChlbmNvZGluZ1BhcmFtZXRlcnMubWF4Qml0cmF0ZSkudG9TdHJpbmcoKSwgbWlkKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNkcDtcbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZ2xvYmFsIE1lZGlhU3RyZWFtLCBTZW5kU3RyZWFtLCBCaWRpcmVjdGlvbmFsU3RyZWFtICovXG5cbid1c2Ugc3RyaWN0JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtFdmVudERpc3BhdGNoZXIsIE93dEV2ZW50fSBmcm9tICcuL2V2ZW50LmpzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmZ1bmN0aW9uIGlzQWxsb3dlZFZhbHVlKG9iaiwgYWxsb3dlZFZhbHVlcykge1xuICByZXR1cm4gKGFsbG93ZWRWYWx1ZXMuc29tZSgoZWxlKSA9PiB7XG4gICAgcmV0dXJuIGVsZSA9PT0gb2JqO1xuICB9KSk7XG59XG4vKipcbiAqIEBjbGFzcyBTdHJlYW1Tb3VyY2VJbmZvXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgSW5mb3JtYXRpb24gb2YgYSBzdHJlYW0ncyBzb3VyY2UuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBkZXNjcmlwdGlvbiBBdWRpbyBzb3VyY2UgaW5mbyBvciB2aWRlbyBzb3VyY2UgaW5mbyBjb3VsZCBiZSB1bmRlZmluZWQgaWZcbiAqIGEgc3RyZWFtIGRvZXMgbm90IGhhdmUgYXVkaW8vdmlkZW8gdHJhY2suXG4gKiBAcGFyYW0gez9zdHJpbmd9IGF1ZGlvU291cmNlSW5mbyBBdWRpbyBzb3VyY2UgaW5mby4gQWNjZXB0ZWQgdmFsdWVzIGFyZTpcbiAqIFwibWljXCIsIFwic2NyZWVuLWNhc3RcIiwgXCJmaWxlXCIsIFwibWl4ZWRcIiBvciB1bmRlZmluZWQuXG4gKiBAcGFyYW0gez9zdHJpbmd9IHZpZGVvU291cmNlSW5mbyBWaWRlbyBzb3VyY2UgaW5mby4gQWNjZXB0ZWQgdmFsdWVzIGFyZTpcbiAqIFwiY2FtZXJhXCIsIFwic2NyZWVuLWNhc3RcIiwgXCJmaWxlXCIsIFwibWl4ZWRcIiBvciB1bmRlZmluZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRhdGFTb3VyY2VJbmZvIEluZGljYXRlcyB3aGV0aGVyIGl0IGlzIGRhdGEuIEFjY2VwdGVkIHZhbHVlc1xuICogYXJlIGJvb2xlYW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1Tb3VyY2VJbmZvIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoYXVkaW9Tb3VyY2VJbmZvLCB2aWRlb1NvdXJjZUluZm8sIGRhdGFTb3VyY2VJbmZvKSB7XG4gICAgaWYgKCFpc0FsbG93ZWRWYWx1ZShhdWRpb1NvdXJjZUluZm8sIFt1bmRlZmluZWQsICdtaWMnLCAnc2NyZWVuLWNhc3QnLFxuICAgICAgJ2ZpbGUnLCAnbWl4ZWQnXSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29ycmVjdCB2YWx1ZSBmb3IgYXVkaW9Tb3VyY2VJbmZvJyk7XG4gICAgfVxuICAgIGlmICghaXNBbGxvd2VkVmFsdWUodmlkZW9Tb3VyY2VJbmZvLCBbdW5kZWZpbmVkLCAnY2FtZXJhJywgJ3NjcmVlbi1jYXN0JyxcbiAgICAgICdmaWxlJywgJ2VuY29kZWQtZmlsZScsICdyYXctZmlsZScsICdtaXhlZCddKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb3JyZWN0IHZhbHVlIGZvciB2aWRlb1NvdXJjZUluZm8nKTtcbiAgICB9XG4gICAgdGhpcy5hdWRpbyA9IGF1ZGlvU291cmNlSW5mbztcbiAgICB0aGlzLnZpZGVvID0gdmlkZW9Tb3VyY2VJbmZvO1xuICAgIHRoaXMuZGF0YSA9IGRhdGFTb3VyY2VJbmZvO1xuICB9XG59XG4vKipcbiAqIEBjbGFzcyBTdHJlYW1cbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBCYXNlIGNsYXNzIG9mIHN0cmVhbXMuXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbSBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHN0cmVhbSwgc291cmNlSW5mbywgYXR0cmlidXRlcykge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKChzdHJlYW0gJiYgIShzdHJlYW0gaW5zdGFuY2VvZiBNZWRpYVN0cmVhbSkgJiZcbiAgICAgICAgICEodHlwZW9mIFNlbmRTdHJlYW0gPT09ICdmdW5jdGlvbicgJiYgc3RyZWFtIGluc3RhbmNlb2YgU2VuZFN0cmVhbSkgJiZcbiAgICAgICAgICEodHlwZW9mIEJpZGlyZWN0aW9uYWxTdHJlYW0gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgc3RyZWFtIGluc3RhbmNlb2YgQmlkaXJlY3Rpb25hbFN0cmVhbSkpIHx8XG4gICAgICAgICh0eXBlb2Ygc291cmNlSW5mbyAhPT0gJ29iamVjdCcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHN0cmVhbSBvciBzb3VyY2VJbmZvLicpO1xuICAgIH1cbiAgICBpZiAoc3RyZWFtICYmIChzdHJlYW0gaW5zdGFuY2VvZiBNZWRpYVN0cmVhbSkgJiZcbiAgICAgICAgKChzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggPiAwICYmICFzb3VyY2VJbmZvLmF1ZGlvKSB8fFxuICAgICAgICAgc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoID4gMCAmJiAhc291cmNlSW5mby52aWRlbykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ01pc3NpbmcgYXVkaW8gc291cmNlIGluZm8gb3IgdmlkZW8gc291cmNlIGluZm8uJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9NZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW1cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuU3RyZWFtXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhY2FwdHVyZS1zdHJlYW1zLyNtZWRpYXN0cmVhbXxNZWRpYVN0cmVhbSBBUEkgb2YgTWVkaWEgQ2FwdHVyZSBhbmQgU3RyZWFtc30uXG4gICAgICogQGRlc2MgVGhpcyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIHN0cmVhbSBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGlmIChzdHJlYW0gaW5zdGFuY2VvZiBNZWRpYVN0cmVhbSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdtZWRpYVN0cmVhbScsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBzdHJlYW0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7TWVkaWFTdHJlYW0gfCBTZW5kU3RyZWFtIHwgQmlkaXJlY3Rpb25hbFN0cmVhbSB8IHVuZGVmaW5lZH0gc3RyZWFtXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbVxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYWNhcHR1cmUtc3RyZWFtcy8jbWVkaWFzdHJlYW18TWVkaWFTdHJlYW0gQVBJIG9mIE1lZGlhIENhcHR1cmUgYW5kIFN0cmVhbXN9XG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93aWNnLmdpdGh1Yi5pby93ZWItdHJhbnNwb3J0LyBXZWJUcmFuc3BvcnR9LlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc3RyZWFtJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHN0cmVhbSxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5TdHJlYW1Tb3VyY2VJbmZvfSBzb3VyY2VcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuU3RyZWFtXG4gICAgICogQGRlc2MgU291cmNlIGluZm8gb2YgYSBzdHJlYW0uXG4gICAgICovXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZUluZm8sXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7b2JqZWN0fSBhdHRyaWJ1dGVzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbVxuICAgICAqIEBkZXNjIEN1c3RvbSBhdHRyaWJ1dGVzIG9mIGEgc3RyZWFtLlxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYXR0cmlidXRlcycsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLFxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEBjbGFzcyBMb2NhbFN0cmVhbVxuICogQGNsYXNzRGVzYyBTdHJlYW0gY2FwdHVyZWQgZnJvbSBjdXJyZW50IGVuZHBvaW50LlxuICogQG1lbWJlck9mIE93dC5CYXNlXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5TdHJlYW1cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gc3RyZWFtIFVuZGVybHlpbmcgTWVkaWFTdHJlYW0uXG4gKiBAcGFyYW0ge093dC5CYXNlLlN0cmVhbVNvdXJjZUluZm99IHNvdXJjZUluZm8gSW5mb3JtYXRpb24gYWJvdXQgc3RyZWFtJ3NcbiAqIHNvdXJjZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIEN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoZSBzdHJlYW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2NhbFN0cmVhbSBleHRlbmRzIFN0cmVhbSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKHN0cmVhbSwgc291cmNlSW5mbywgYXR0cmlidXRlcykge1xuICAgIGlmICghc3RyZWFtKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdHJlYW0gY2Fubm90IGJlIG51bGwuJyk7XG4gICAgfVxuICAgIHN1cGVyKHN0cmVhbSwgc291cmNlSW5mbywgYXR0cmlidXRlcyk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5Mb2NhbFN0cmVhbVxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IFV0aWxzLmNyZWF0ZVV1aWQoKSxcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBAY2xhc3MgUmVtb3RlU3RyZWFtXG4gKiBAY2xhc3NEZXNjIFN0cmVhbSBzZW50IGZyb20gYSByZW1vdGUgZW5kcG9pbnQuXG4gKiBFdmVudHM6XG4gKlxuICogfCBFdmVudCBOYW1lICAgICAgfCBBcmd1bWVudCBUeXBlICAgIHwgRmlyZWQgd2hlbiAgICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGVuZGVkICAgICAgICAgICB8IEV2ZW50ICAgICAgICAgICAgfCBTdHJlYW0gaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSBvbiBzZXJ2ZXIgc2lkZS4gICB8XG4gKiB8IHVwZGF0ZWQgICAgICAgICB8IEV2ZW50ICAgICAgICAgICAgfCBTdHJlYW0gaXMgdXBkYXRlZC4gfFxuICpcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuU3RyZWFtXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdGVTdHJlYW0gZXh0ZW5kcyBTdHJlYW0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihpZCwgb3JpZ2luLCBzdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpIHtcbiAgICBzdXBlcihzdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuUmVtb3RlU3RyZWFtXG4gICAgICovXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdpZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogaWQgPyBpZCA6IFV0aWxzLmNyZWF0ZVV1aWQoKSxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG9yaWdpblxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5SZW1vdGVTdHJlYW1cbiAgICAgKiBAZGVzYyBJRCBvZiB0aGUgcmVtb3RlIGVuZHBvaW50IHdobyBwdWJsaXNoZWQgdGhpcyBzdHJlYW0uXG4gICAgICovXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdvcmlnaW4nLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IG9yaWdpbixcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPd3QuQmFzZS5QdWJsaWNhdGlvblNldHRpbmdzfSBzZXR0aW5nc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5SZW1vdGVTdHJlYW1cbiAgICAgKiBAZGVzYyBPcmlnaW5hbCBzZXR0aW5ncyBmb3IgcHVibGlzaGluZyB0aGlzIHN0cmVhbS4gVGhpcyBwcm9wZXJ0eSBpcyBvbmx5XG4gICAgICogdmFsaWQgaW4gY29uZmVyZW5jZSBtb2RlLlxuICAgICAqL1xuICAgIHRoaXMuc2V0dGluZ3MgPSB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzfSBleHRyYUNhcGFiaWxpdGllc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5SZW1vdGVTdHJlYW1cbiAgICAgKiBAZGVzYyBFeHRyYSBjYXBhYmlsaXRpZXMgcmVtb3RlIGVuZHBvaW50IHByb3ZpZGVzIGZvciBzdWJzY3JpcHRpb24uIEV4dHJhXG4gICAgICogY2FwYWJpbGl0aWVzIGRvbid0IGluY2x1ZGUgb3JpZ2luYWwgc2V0dGluZ3MuIFRoaXMgcHJvcGVydHkgaXMgb25seSB2YWxpZFxuICAgICAqIGluIGNvbmZlcmVuY2UgbW9kZS5cbiAgICAgKi9cbiAgICB0aGlzLmV4dHJhQ2FwYWJpbGl0aWVzID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFN0cmVhbUV2ZW50XG4gKiBAY2xhc3NEZXNjIEV2ZW50IGZvciBTdHJlYW0uXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5Pd3RFdmVudFxuICogQG1lbWJlcm9mIE93dC5CYXNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1FdmVudCBleHRlbmRzIE93dEV2ZW50IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaW5pdCkge1xuICAgIHN1cGVyKHR5cGUpO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlN0cmVhbX0gc3RyZWFtXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlN0cmVhbUV2ZW50XG4gICAgICovXG4gICAgdGhpcy5zdHJlYW0gPSBpbml0LnN0cmVhbTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAyMD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGNsYXNzIFRyYW5zcG9ydFR5cGVcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBUcmFuc3BvcnQgdHlwZSBlbnVtZXJhdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IFRyYW5zcG9ydFR5cGUgPSB7XG4gIFFVSUM6ICdxdWljJyxcbiAgV0VCUlRDOiAnd2VicnRjJyxcbn07XG5cbi8qKlxuICogQGNsYXNzIFRyYW5zcG9ydENvbnN0cmFpbnRzXG4gKiBAbWVtYmVyT2YgT3d0LkJhc2VcbiAqIEBjbGFzc0Rlc2MgUmVwcmVzZW50cyB0aGUgdHJhbnNwb3J0IGNvbnN0cmFpbnRzIGZvciBwdWJsaWNhdGlvbiBhbmRcbiAqIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zcG9ydENvbnN0cmFpbnRzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IodHlwZSwgaWQpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48T3d0LkJhc2UuVHJhbnNwb3J0VHlwZT59IHR5cGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkJhc2UuVHJhbnNwb3J0Q29uc3RyYWludHNcbiAgICAgKiBAZGVzYyBUcmFuc3BvcnQgdHlwZSBmb3IgcHVibGljYXRpb24gYW5kIHN1YnNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9zdHJpbmd9IGlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5CYXNlLlRyYW5zcG9ydENvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgVHJhbnNwb3J0IElELiBVbmRlZmluZWQgdHJhbnNwb3J0IElEIHJlc3VsdHMgc2VydmVyIHRvIGFzc2lnbiBhIG5ld1xuICAgICAqIG9uZS4gSXQgc2hvdWxkIGFsd2F5cyBiZSB1bmRlZmluZWQgaWYgdHJhbnNwb3J0IHR5cGUgaXMgd2VicnRjIHNpbmNlIHRoZVxuICAgICAqIHdlYnJ0YyBhZ2VudCBvZiBPV1Qgc2VydmVyIGRvZXNuJ3Qgc3VwcG9ydCBtdWx0aXBsZSB0cmFuc2NlaXZlcnMgb24gYVxuICAgICAqIHNpbmdsZSBQZWVyQ29ubmVjdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVHJhbnNwb3J0U2V0dGluZ3NcbiAqIEBtZW1iZXJPZiBPd3QuQmFzZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSB0cmFuc3BvcnQgc2V0dGluZ3MgZm9yIHB1YmxpY2F0aW9uIGFuZFxuICogc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNwb3J0U2V0dGluZ3Mge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpZCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FycmF5LjxPd3QuQmFzZS5UcmFuc3BvcnRUeXBlPn0gdHlwZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5UcmFuc3BvcnRDb25zdHJhaW50c1xuICAgICAqIEBkZXNjIFRyYW5zcG9ydCB0eXBlIGZvciBwdWJsaWNhdGlvbiBhbmQgc3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQmFzZS5UcmFuc3BvcnRDb25zdHJhaW50c1xuICAgICAqIEBkZXNjIFRyYW5zcG9ydCBJRC5cbiAgICAgKi9cbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZ2xvYmFsIG5hdmlnYXRvciwgd2luZG93ICovXG5cbid1c2Ugc3RyaWN0JztcbmNvbnN0IHNka1ZlcnNpb24gPSAnNS4wJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmV4cG9ydCBmdW5jdGlvbiBpc0ZpcmVmb3goKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgnRmlyZWZveCcpICE9PSBudWxsO1xufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmV4cG9ydCBmdW5jdGlvbiBpc0Nocm9tZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKCdDaHJvbWUnKSAhPT0gbnVsbDtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gIHJldHVybiAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG5leHBvcnQgZnVuY3Rpb24gaXNFZGdlKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykuKFxcZCspJC8pICE9PSBudWxsO1xufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVdWlkKCkge1xuICByZXR1cm4gJ3h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcbiAgICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDtcbiAgICBjb25zdCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcbiAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gIH0pO1xufVxuXG4vLyBSZXR1cm5zIHN5c3RlbSBpbmZvcm1hdGlvbi5cbi8vIEZvcm1hdDoge3Nkazp7dmVyc2lvbjoqKiwgdHlwZToqKn0sIHJ1bnRpbWU6e3ZlcnNpb246KiosIG5hbWU6Kip9LCBvczp7dmVyc2lvbjoqKiwgbmFtZToqKn19O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmV4cG9ydCBmdW5jdGlvbiBzeXNJbmZvKCkge1xuICBjb25zdCBpbmZvID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gIGluZm8uc2RrID0ge1xuICAgIHZlcnNpb246IHNka1ZlcnNpb24sXG4gICAgdHlwZTogJ0phdmFTY3JpcHQnLFxuICB9O1xuICAvLyBSdW50aW1lIGluZm8uXG4gIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGNvbnN0IGZpcmVmb3hSZWdleCA9IC9GaXJlZm94XFwvKFswLTkuXSspLztcbiAgY29uc3QgY2hyb21lUmVnZXggPSAvQ2hyb21lXFwvKFswLTkuXSspLztcbiAgY29uc3QgZWRnZVJlZ2V4ID0gL0VkZ2VcXC8oWzAtOS5dKykvO1xuICBjb25zdCBzYWZhcmlWZXJzaW9uUmVnZXggPSAvVmVyc2lvblxcLyhbMC05Ll0rKSBTYWZhcmkvO1xuICBsZXQgcmVzdWx0ID0gY2hyb21lUmVnZXguZXhlYyh1c2VyQWdlbnQpO1xuICBpZiAocmVzdWx0KSB7XG4gICAgaW5mby5ydW50aW1lID0ge1xuICAgICAgbmFtZTogJ0Nocm9tZScsXG4gICAgICB2ZXJzaW9uOiByZXN1bHRbMV0sXG4gICAgfTtcbiAgfSBlbHNlIGlmIChyZXN1bHQgPSBmaXJlZm94UmVnZXguZXhlYyh1c2VyQWdlbnQpKSB7XG4gICAgaW5mby5ydW50aW1lID0ge1xuICAgICAgbmFtZTogJ0ZpcmVmb3gnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gZWRnZVJlZ2V4LmV4ZWModXNlckFnZW50KSkge1xuICAgIGluZm8ucnVudGltZSA9IHtcbiAgICAgIG5hbWU6ICdFZGdlJyxcbiAgICAgIHZlcnNpb246IHJlc3VsdFsxXSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKGlzU2FmYXJpKCkpIHtcbiAgICByZXN1bHQgPSBzYWZhcmlWZXJzaW9uUmVnZXguZXhlYyh1c2VyQWdlbnQpO1xuICAgIGluZm8ucnVudGltZSA9IHtcbiAgICAgIG5hbWU6ICdTYWZhcmknLFxuICAgIH07XG4gICAgaW5mby5ydW50aW1lLnZlcnNpb24gPSByZXN1bHQgPyByZXN1bHRbMV0gOiAnVW5rbm93bic7XG4gIH0gZWxzZSB7XG4gICAgaW5mby5ydW50aW1lID0ge1xuICAgICAgbmFtZTogJ1Vua25vd24nLFxuICAgICAgdmVyc2lvbjogJ1Vua25vd24nLFxuICAgIH07XG4gIH1cbiAgLy8gT1MgaW5mby5cbiAgY29uc3Qgd2luZG93c1JlZ2V4ID0gL1dpbmRvd3MgTlQgKFswLTkuXSspLztcbiAgY29uc3QgbWFjUmVnZXggPSAvSW50ZWwgTWFjIE9TIFggKFswLTlfLl0rKS87XG4gIGNvbnN0IGlQaG9uZVJlZ2V4ID0gL2lQaG9uZSBPUyAoWzAtOV8uXSspLztcbiAgY29uc3QgbGludXhSZWdleCA9IC9YMTE7IExpbnV4LztcbiAgY29uc3QgYW5kcm9pZFJlZ2V4ID0gL0FuZHJvaWQoIChbMC05Ll0rKSk/LztcbiAgY29uc3QgY2hyb21pdW1Pc1JlZ2V4ID0gL0NyT1MvO1xuICBpZiAocmVzdWx0ID0gd2luZG93c1JlZ2V4LmV4ZWModXNlckFnZW50KSkge1xuICAgIGluZm8ub3MgPSB7XG4gICAgICBuYW1lOiAnV2luZG93cyBOVCcsXG4gICAgICB2ZXJzaW9uOiByZXN1bHRbMV0sXG4gICAgfTtcbiAgfSBlbHNlIGlmIChyZXN1bHQgPSBtYWNSZWdleC5leGVjKHVzZXJBZ2VudCkpIHtcbiAgICBpbmZvLm9zID0ge1xuICAgICAgbmFtZTogJ01hYyBPUyBYJyxcbiAgICAgIHZlcnNpb246IHJlc3VsdFsxXS5yZXBsYWNlKC9fL2csICcuJyksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChyZXN1bHQgPSBpUGhvbmVSZWdleC5leGVjKHVzZXJBZ2VudCkpIHtcbiAgICBpbmZvLm9zID0ge1xuICAgICAgbmFtZTogJ2lQaG9uZSBPUycsXG4gICAgICB2ZXJzaW9uOiByZXN1bHRbMV0ucmVwbGFjZSgvXy9nLCAnLicpLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocmVzdWx0ID0gbGludXhSZWdleC5leGVjKHVzZXJBZ2VudCkpIHtcbiAgICBpbmZvLm9zID0ge1xuICAgICAgbmFtZTogJ0xpbnV4JyxcbiAgICAgIHZlcnNpb246ICdVbmtub3duJyxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHJlc3VsdCA9IGFuZHJvaWRSZWdleC5leGVjKHVzZXJBZ2VudCkpIHtcbiAgICBpbmZvLm9zID0ge1xuICAgICAgbmFtZTogJ0FuZHJvaWQnLFxuICAgICAgdmVyc2lvbjogcmVzdWx0WzFdIHx8ICdVbmtub3duJyxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHJlc3VsdCA9IGNocm9taXVtT3NSZWdleC5leGVjKHVzZXJBZ2VudCkpIHtcbiAgICBpbmZvLm9zID0ge1xuICAgICAgbmFtZTogJ0Nocm9tZSBPUycsXG4gICAgICB2ZXJzaW9uOiAnVW5rbm93bicsXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBpbmZvLm9zID0ge1xuICAgICAgbmFtZTogJ1Vua25vd24nLFxuICAgICAgdmVyc2lvbjogJ1Vua25vd24nLFxuICAgIH07XG4gIH1cbiAgaW5mby5jYXBhYmlsaXRpZXMgPSB7XG4gICAgY29udGludWFsSWNlR2F0aGVyaW5nOiBmYWxzZSxcbiAgICB1bmlmaWVkUGxhbjogdHJ1ZSxcbiAgICBzdHJlYW1SZW1vdmFibGU6IGluZm8ucnVudGltZS5uYW1lICE9PSAnRmlyZWZveCcsXG4gICAgaWdub3JlRGF0YUNoYW5uZWxBY2tzOiB0cnVlLFxuICB9O1xuICByZXR1cm4gaW5mbztcbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYyAqL1xuLyogZ2xvYmFsIE1hcCwgUHJvbWlzZSwgc2V0VGltZW91dCwgUlRDUGVlckNvbm5lY3Rpb24gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCB7XG4gIEV2ZW50RGlzcGF0Y2hlcixcbiAgTWVzc2FnZUV2ZW50LFxuICBPd3RFdmVudCxcbiAgRXJyb3JFdmVudCxcbiAgTXV0ZUV2ZW50LFxufSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7VHJhY2tLaW5kfSBmcm9tICcuLi9iYXNlL21lZGlhZm9ybWF0LmpzJztcbmltcG9ydCB7UHVibGljYXRpb259IGZyb20gJy4uL2Jhc2UvcHVibGljYXRpb24uanMnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4vc3Vic2NyaXB0aW9uLmpzJztcbmltcG9ydCB7Q29uZmVyZW5jZUVycm9yfSBmcm9tICcuL2Vycm9yLmpzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4uL2Jhc2UvdXRpbHMuanMnO1xuaW1wb3J0ICogYXMgU2RwVXRpbHMgZnJvbSAnLi4vYmFzZS9zZHB1dGlscy5qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvbmZlcmVuY2VQZWVyQ29ubmVjdGlvbkNoYW5uZWxcbiAqIEBjbGFzc0Rlc2MgQSBjaGFubmVsIGZvciBhIGNvbm5lY3Rpb24gYmV0d2VlbiBjbGllbnQgYW5kIGNvbmZlcmVuY2Ugc2VydmVyLlxuICogQ3VycmVudGx5LCBvbmx5IG9uZSBzdHJlYW0gY291bGQgYmUgdHJhbm1pdHRlZCBpbiBhIGNoYW5uZWwuXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgQ29uZmVyZW5jZVBlZXJDb25uZWN0aW9uQ2hhbm5lbCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgc2lnbmFsaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fdmlkZW9Db2RlY3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fb3B0aW9ucyA9IG51bGw7XG4gICAgdGhpcy5fdmlkZW9Db2RlY3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2lnbmFsaW5nID0gc2lnbmFsaW5nO1xuICAgIHRoaXMuX3BjID0gbnVsbDtcbiAgICB0aGlzLl9pbnRlcm5hbElkID0gbnVsbDsgLy8gSXQncyBwdWJsaWNhdGlvbiBJRCBvciBzdWJzY3JpcHRpb24gSUQuXG4gICAgdGhpcy5fcGVuZGluZ0NhbmRpZGF0ZXMgPSBbXTtcbiAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gaW50ZXJuYWxJZCA9PiB7IHJlc29sdmUsIHJlamVjdCB9XG4gICAgdGhpcy5fcHVibGlzaFByb21pc2VzID0gbmV3IE1hcCgpOyAvLyBpbnRlcm5hbElkID0+IHsgcmVzb2x2ZSwgcmVqZWN0IH1cbiAgICB0aGlzLl9zdWJzY3JpYmVkU3RyZWFtcyA9IG5ldyBNYXAoKTsgLy8gaW50ZW5hbElkID0+IFJlbW90ZVN0cmVhbVxuICAgIHRoaXMuX3B1YmxpY2F0aW9ucyA9IG5ldyBNYXAoKTsgLy8gUHVibGljYXRpb25JZCA9PiBQdWJsaWNhdGlvblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBuZXcgTWFwKCk7IC8vIFN1YnNjcmlwdGlvbklkID0+IFN1YnNjcmlwdGlvblxuICAgIHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMgPSBuZXcgTWFwKCk7IC8vIGludGVybmFsSWQgPT4geyBpZCwgdHJhbnNjZWl2ZXJzOiBbVHJhbnNjZWl2ZXJdIH1cbiAgICB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMgPSBuZXcgTWFwKCk7IC8vIGludGVybmFsSWQgPT4geyBpZCwgdHJhbnNjZWl2ZXJzOiBbVHJhbnNjZWl2ZXJdIH1cbiAgICB0aGlzLl9yZXZlcnNlSWRNYXAgPSBuZXcgTWFwKCk7IC8vIFB1YmxpY2F0aW9uSWQgfHwgU3Vic2NyaXB0aW9uSWQgPT4gaW50ZXJuYWxJZFxuICAgIC8vIFRpbWVyIGZvciBQZWVyQ29ubmVjdGlvbiBkaXNjb25uZWN0ZWQuIFdpbGwgc3RvcCBjb25uZWN0aW9uIGFmdGVyIHRpbWVyLlxuICAgIHRoaXMuX2Rpc2Nvbm5lY3RUaW1lciA9IG51bGw7XG4gICAgdGhpcy5fZW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdG9wcGVkID0gZmFsc2U7XG4gICAgLy8gQ2hhbm5lbCBJRCBhc3NpZ25lZCBieSBjb25mZXJlbmNlXG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gICAgLy8gVXNlZCB0byBjcmVhdGUgaW50ZXJuYWwgSUQgZm9yIHB1YmxpY2F0aW9uL3N1YnNjcmlwdGlvblxuICAgIHRoaXMuX2ludGVybmFsQ291bnQgPSAwO1xuICAgIHRoaXMuX3NkcFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLl9zZHBSZXNvbHZlck1hcCA9IG5ldyBNYXAoKTsgLy8gaW50ZXJuYWxJZCA9PiB7ZmluaXNoLCByZXNvbHZlLCByZWplY3R9XG4gICAgdGhpcy5fc2RwUmVzb2x2ZXJzID0gW107IC8vIFt7ZmluaXNoLCByZXNvbHZlLCByZWplY3R9XVxuICAgIHRoaXMuX3NkcFJlc29sdmVOdW0gPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBvbk1lc3NhZ2VcbiAgICogQGRlc2MgUmVjZWl2ZWQgYSBtZXNzYWdlIGZyb20gY29uZmVyZW5jZSBwb3J0YWwuIERlZmluZWQgaW4gY2xpZW50LXNlcnZlclxuICAgKiBwcm90b2NvbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5vdGlmaWNhdGlvbiBOb3RpZmljYXRpb24gdHlwZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG1lc3NhZ2UgTWVzc2FnZSByZWNlaXZlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIG9uTWVzc2FnZShub3RpZmljYXRpb24sIG1lc3NhZ2UpIHtcbiAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbikge1xuICAgICAgY2FzZSAncHJvZ3Jlc3MnOlxuICAgICAgICBpZiAobWVzc2FnZS5zdGF0dXMgPT09ICdzb2FjJykge1xuICAgICAgICAgIHRoaXMuX3NkcEhhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3JlYWR5Jykge1xuICAgICAgICAgIHRoaXMuX3JlYWR5SGFuZGxlcihtZXNzYWdlLnNlc3Npb25JZCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICB0aGlzLl9lcnJvckhhbmRsZXIobWVzc2FnZS5zZXNzaW9uSWQsIG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJlYW0nOlxuICAgICAgICB0aGlzLl9vblN0cmVhbUV2ZW50KG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdVbmtub3duIG5vdGlmaWNhdGlvbiBmcm9tIE1DVS4nKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBwdWJsaXNoKHN0cmVhbSwgb3B0aW9ucywgdmlkZW9Db2RlY3MpIHtcbiAgICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnQ29ubmVjdGlvbiBjbG9zZWQnKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYXVkaW86ICEhc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoLFxuICAgICAgICB2aWRlbzogISFzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGgsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignT3B0aW9ucyBzaG91bGQgYmUgYW4gb2JqZWN0LicpKTtcbiAgICB9XG4gICAgaWYgKCh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLmF1ZGlvKSAmJlxuICAgICAgICAgdGhpcy5faXNPd3RFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykpIHx8XG4gICAgICAgICh0aGlzLl9pc093dEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLmF1ZGlvKSAmJlxuICAgICAgICAgdGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnTWl4aW5nIFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycyBhbmQgJyArXG4gICAgICAgICAgJ0F1ZGlvRW5jb2RpbmdQYXJhbWV0ZXJzL1ZpZGVvRW5jb2RpbmdQYXJhbWV0ZXJzIGlzIG5vdCBhbGxvd2VkLicpKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYXVkaW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy5hdWRpbyA9ICEhc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy52aWRlbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25zLnZpZGVvID0gISFzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGg7XG4gICAgfVxuICAgIGlmICgoISFvcHRpb25zLmF1ZGlvICYmICFzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGgpIHx8XG4gICAgICAgICghIW9wdGlvbnMudmlkZW8gJiYgIXN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdvcHRpb25zLmF1ZGlvL3ZpZGVvIGlzIGluY29uc2lzdGVudCB3aXRoIHRyYWNrcyBwcmVzZW50ZWQgaW4gdGhlICcgK1xuICAgICAgICAgICdNZWRpYVN0cmVhbS4nXG4gICAgICApKTtcbiAgICB9XG4gICAgaWYgKChvcHRpb25zLmF1ZGlvID09PSBmYWxzZSB8fCBvcHRpb25zLmF1ZGlvID09PSBudWxsKSAmJlxuICAgICAgKG9wdGlvbnMudmlkZW8gPT09IGZhbHNlIHx8IG9wdGlvbnMudmlkZW8gPT09IG51bGwpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnQ2Fubm90IHB1Ymxpc2ggYSBzdHJlYW0gd2l0aG91dCBhdWRpbyBhbmQgdmlkZW8uJykpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXVkaW8gPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5hdWRpbykpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnb3B0aW9ucy5hdWRpbyBzaG91bGQgYmUgYSBib29sZWFuIG9yIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgcGFyYW1ldGVycyBvZiBvcHRpb25zLmF1ZGlvKSB7XG4gICAgICAgIGlmICghcGFyYW1ldGVycy5jb2RlYyB8fCB0eXBlb2YgcGFyYW1ldGVycy5jb2RlYy5uYW1lICE9PSAnc3RyaW5nJyB8fCAoXG4gICAgICAgICAgcGFyYW1ldGVycy5tYXhCaXRyYXRlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBhcmFtZXRlcnMubWF4Qml0cmF0ZVxuICAgICAgICAgICE9PSAnbnVtYmVyJykpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgJ29wdGlvbnMuYXVkaW8gaGFzIGluY29ycmVjdCBwYXJhbWV0ZXJzLicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudmlkZW8gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KG9wdGlvbnMudmlkZW8pKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAnb3B0aW9ucy52aWRlbyBzaG91bGQgYmUgYSBib29sZWFuIG9yIGFuIGFycmF5LicpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzT3d0RW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pKSB7XG4gICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlcnMgb2Ygb3B0aW9ucy52aWRlbykge1xuICAgICAgICBpZiAoIXBhcmFtZXRlcnMuY29kZWMgfHwgdHlwZW9mIHBhcmFtZXRlcnMuY29kZWMubmFtZSAhPT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAoXG4gICAgICAgICAgICBwYXJhbWV0ZXJzLm1heEJpdHJhdGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcGFyYW1ldGVyc1xuICAgICAgICAgICAgICAgIC5tYXhCaXRyYXRlICE9PVxuICAgICAgICAgICAgJ251bWJlcicpIHx8IChwYXJhbWV0ZXJzLmNvZGVjLnByb2ZpbGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgdHlwZW9mIHBhcmFtZXRlcnMuY29kZWMucHJvZmlsZSAhPT0gJ3N0cmluZycpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICdvcHRpb25zLnZpZGVvIGhhcyBpbmNvcnJlY3QgcGFyYW1ldGVycy4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbWVkaWFPcHRpb25zID0ge307XG4gICAgdGhpcy5fY3JlYXRlUGVlckNvbm5lY3Rpb24oKTtcbiAgICBpZiAoc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoID4gMCAmJiBvcHRpb25zLmF1ZGlvICE9PVxuICAgICAgZmFsc2UgJiYgb3B0aW9ucy5hdWRpbyAhPT0gbnVsbCkge1xuICAgICAgaWYgKHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoXG4gICAgICAgICAgICAnUHVibGlzaGluZyBhIHN0cmVhbSB3aXRoIG11bHRpcGxlIGF1ZGlvIHRyYWNrcyBpcyBub3QgZnVsbHknXG4gICAgICAgICAgICArICcgc3VwcG9ydGVkLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hdWRpbyAhPT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiBvcHRpb25zLmF1ZGlvICE9PVxuICAgICAgICAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAgICdUeXBlIG9mIGF1ZGlvIG9wdGlvbnMgc2hvdWxkIGJlIGJvb2xlYW4gb3IgYW4gb2JqZWN0LidcbiAgICAgICAgKSk7XG4gICAgICB9XG4gICAgICBtZWRpYU9wdGlvbnMuYXVkaW8gPSB7fTtcbiAgICAgIG1lZGlhT3B0aW9ucy5hdWRpby5zb3VyY2UgPSBzdHJlYW0uc291cmNlLmF1ZGlvO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYU9wdGlvbnMuYXVkaW8gPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCA+IDAgJiYgb3B0aW9ucy52aWRlbyAhPT1cbiAgICAgIGZhbHNlICYmIG9wdGlvbnMudmlkZW8gIT09IG51bGwpIHtcbiAgICAgIGlmIChzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICAgJ1B1Ymxpc2hpbmcgYSBzdHJlYW0gd2l0aCBtdWx0aXBsZSB2aWRlbyB0cmFja3MgaXMgbm90IGZ1bGx5ICdcbiAgICAgICAgICAgICsgJ3N1cHBvcnRlZC4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8gPSB7fTtcbiAgICAgIG1lZGlhT3B0aW9ucy52aWRlby5zb3VyY2UgPSBzdHJlYW0uc291cmNlLnZpZGVvO1xuICAgICAgY29uc3QgdHJhY2tTZXR0aW5ncyA9IHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdXG4gICAgICAgICAgLmdldFNldHRpbmdzKCk7XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8ucGFyYW1ldGVycyA9IHtcbiAgICAgICAgcmVzb2x1dGlvbjoge1xuICAgICAgICAgIHdpZHRoOiB0cmFja1NldHRpbmdzLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdHJhY2tTZXR0aW5ncy5oZWlnaHQsXG4gICAgICAgIH0sXG4gICAgICAgIGZyYW1lcmF0ZTogdHJhY2tTZXR0aW5ncy5mcmFtZVJhdGUsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcm5hbElkID0gdGhpcy5fY3JlYXRlSW50ZXJuYWxJZCgpO1xuICAgIC8vIFdhaXRpbmcgZm9yIHByZXZpb3VzIFNEUCBuZWdvdGlhdGlvbiBpZiBuZWVkZWRcbiAgICBhd2FpdCB0aGlzLl9jaGFpblNkcFByb21pc2UoaW50ZXJuYWxJZCk7XG5cbiAgICBjb25zdCBvZmZlck9wdGlvbnMgPSB7fTtcbiAgICBjb25zdCB0cmFuc2NlaXZlcnMgPSBbXTtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3BjLmFkZFRyYW5zY2VpdmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyB8ZGlyZWN0aW9ufCBzZWVtcyBub3Qgd29ya2luZyBvbiBTYWZhcmkuXG4gICAgICBpZiAobWVkaWFPcHRpb25zLmF1ZGlvICYmIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCA+XG4gICAgICAgIDApIHtcbiAgICAgICAgY29uc3QgdHJhbnNjZWl2ZXJJbml0ID0ge1xuICAgICAgICAgIGRpcmVjdGlvbjogJ3NlbmRvbmx5JyxcbiAgICAgICAgICBzdHJlYW1zOiBbc3RyZWFtLm1lZGlhU3RyZWFtXSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMuYXVkaW8pKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXJJbml0LnNlbmRFbmNvZGluZ3MgPSBvcHRpb25zLmF1ZGlvO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyYW5zY2VpdmVyID0gdGhpcy5fcGMuYWRkVHJhbnNjZWl2ZXIoXG4gICAgICAgICAgICBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXSxcbiAgICAgICAgICAgIHRyYW5zY2VpdmVySW5pdCk7XG4gICAgICAgIHRyYW5zY2VpdmVycy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnYXVkaW8nLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLFxuICAgICAgICAgIHNvdXJjZTogbWVkaWFPcHRpb25zLmF1ZGlvLnNvdXJjZSxcbiAgICAgICAgICBvcHRpb246IHthdWRpbzogb3B0aW9ucy5hdWRpb30sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChVdGlscy5pc0ZpcmVmb3goKSkge1xuICAgICAgICAgIC8vIEZpcmVmb3ggZG9lcyBub3Qgc3VwcG9ydCBlbmNvZGluZ3Mgc2V0dGluZyBpbiBhZGRUcmFuc2NlaXZlci5cbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gdHJhbnNjZWl2ZXIuc2VuZGVyLmdldFBhcmFtZXRlcnMoKTtcbiAgICAgICAgICBwYXJhbWV0ZXJzLmVuY29kaW5ncyA9IHRyYW5zY2VpdmVySW5pdC5zZW5kRW5jb2RpbmdzO1xuICAgICAgICAgIGF3YWl0IHRyYW5zY2VpdmVyLnNlbmRlci5zZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWFPcHRpb25zLnZpZGVvICYmIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCA+XG4gICAgICAgIDApIHtcbiAgICAgICAgY29uc3QgdHJhbnNjZWl2ZXJJbml0ID0ge1xuICAgICAgICAgIGRpcmVjdGlvbjogJ3NlbmRvbmx5JyxcbiAgICAgICAgICBzdHJlYW1zOiBbc3RyZWFtLm1lZGlhU3RyZWFtXSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXJJbml0LnNlbmRFbmNvZGluZ3MgPSBvcHRpb25zLnZpZGVvO1xuICAgICAgICAgIHRoaXMuX3ZpZGVvQ29kZWNzID0gdmlkZW9Db2RlY3M7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHJhbnNjZWl2ZXIgPSB0aGlzLl9wYy5hZGRUcmFuc2NlaXZlcihcbiAgICAgICAgICAgIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLFxuICAgICAgICAgICAgdHJhbnNjZWl2ZXJJbml0KTtcbiAgICAgICAgdHJhbnNjZWl2ZXJzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICd2aWRlbycsXG4gICAgICAgICAgdHJhbnNjZWl2ZXIsXG4gICAgICAgICAgc291cmNlOiBtZWRpYU9wdGlvbnMudmlkZW8uc291cmNlLFxuICAgICAgICAgIG9wdGlvbjoge3ZpZGVvOiBvcHRpb25zLnZpZGVvfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKFV0aWxzLmlzRmlyZWZveCgpKSB7XG4gICAgICAgICAgLy8gRmlyZWZveCBkb2VzIG5vdCBzdXBwb3J0IGVuY29kaW5ncyBzZXR0aW5nIGluIGFkZFRyYW5zY2VpdmVyLlxuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB0cmFuc2NlaXZlci5zZW5kZXIuZ2V0UGFyYW1ldGVycygpO1xuICAgICAgICAgIHBhcmFtZXRlcnMuZW5jb2RpbmdzID0gdHJhbnNjZWl2ZXJJbml0LnNlbmRFbmNvZGluZ3M7XG4gICAgICAgICAgYXdhaXQgdHJhbnNjZWl2ZXIuc2VuZGVyLnNldFBhcmFtZXRlcnMocGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2hvdWxkIG5vdCByZWFjaCBoZXJlXG4gICAgICBpZiAobWVkaWFPcHRpb25zLmF1ZGlvICYmXG4gICAgICAgICAgc3RyZWFtLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpKSB7XG4gICAgICAgICAgdGhpcy5fcGMuYWRkVHJhY2sodHJhY2ssIHN0cmVhbS5tZWRpYVN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYU9wdGlvbnMudmlkZW8gJiZcbiAgICAgICAgICBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2Ygc3RyZWFtLm1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkpIHtcbiAgICAgICAgICB0aGlzLl9wYy5hZGRUcmFjayh0cmFjaywgc3RyZWFtLm1lZGlhU3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gPSBmYWxzZTtcbiAgICAgIG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuc2V0KGludGVybmFsSWQsIHt0cmFuc2NlaXZlcnN9KTtcblxuICAgIGxldCBsb2NhbERlc2M7XG4gICAgdGhpcy5fcGMuY3JlYXRlT2ZmZXIob2ZmZXJPcHRpb25zKS50aGVuKChkZXNjKSA9PiB7XG4gICAgICBsb2NhbERlc2MgPSBkZXNjO1xuICAgICAgcmV0dXJuIHRoaXMuX3BjLnNldExvY2FsRGVzY3JpcHRpb24oZGVzYyk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCB0cmFja09wdGlvbnMgPSBbXTtcbiAgICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKCh7dHlwZSwgdHJhbnNjZWl2ZXIsIHNvdXJjZX0pID0+IHtcbiAgICAgICAgdHJhY2tPcHRpb25zLnB1c2goe1xuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgbWlkOiB0cmFuc2NlaXZlci5taWQsXG4gICAgICAgICAgc291cmNlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgncHVibGlzaCcsIHtcbiAgICAgICAgbWVkaWE6IHt0cmFja3M6IHRyYWNrT3B0aW9uc30sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHN0cmVhbS5hdHRyaWJ1dGVzLFxuICAgICAgICB0cmFuc3BvcnQ6IHtpZDogdGhpcy5faWQsIHR5cGU6ICd3ZWJydGMnfSxcbiAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIC8vIFNlbmQgU0RQIGV2ZW4gd2hlbiBmYWlsZWQgdG8gZ2V0IEFuc3dlci5cbiAgICAgICAgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzb2FjJywge1xuICAgICAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgICAgICBzaWduYWxpbmc6IGxvY2FsRGVzYyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9KTtcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBwdWJsaWNhdGlvbklkID0gZGF0YS5pZDtcbiAgICAgIGNvbnN0IG1lc3NhZ2VFdmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoJ2lkJywge1xuICAgICAgICBtZXNzYWdlOiBwdWJsaWNhdGlvbklkLFxuICAgICAgICBvcmlnaW46IHRoaXMuX3JlbW90ZUlkLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobWVzc2FnZUV2ZW50KTtcblxuICAgICAgdGhpcy5fcHVibGlzaFRyYW5zY2VpdmVycy5nZXQoaW50ZXJuYWxJZCkuaWQgPSBwdWJsaWNhdGlvbklkO1xuICAgICAgdGhpcy5fcmV2ZXJzZUlkTWFwLnNldChwdWJsaWNhdGlvbklkLCBpbnRlcm5hbElkKTtcblxuICAgICAgaWYgKHRoaXMuX2lkICYmIHRoaXMuX2lkICE9PSBkYXRhLnRyYW5zcG9ydElkKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdTZXJ2ZXIgcmV0dXJucyBjb25mbGljdCBJRDogJyArIGRhdGEudHJhbnNwb3J0SWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5faWQgPSBkYXRhLnRyYW5zcG9ydElkO1xuXG4gICAgICAvLyBNb2RpZnkgbG9jYWwgU0RQIGJlZm9yZSBzZW5kaW5nXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaCgoe3R5cGUsIHRyYW5zY2VpdmVyLCBvcHRpb259KSA9PiB7XG4gICAgICAgICAgbG9jYWxEZXNjLnNkcCA9IHRoaXMuX3NldFJ0cFJlY2VpdmVyT3B0aW9ucyhcbiAgICAgICAgICAgICAgbG9jYWxEZXNjLnNkcCwgb3B0aW9uLCB0cmFuc2NlaXZlci5taWQpO1xuICAgICAgICAgIGxvY2FsRGVzYy5zZHAgPSB0aGlzLl9zZXRSdHBTZW5kZXJPcHRpb25zKFxuICAgICAgICAgICAgICBsb2NhbERlc2Muc2RwLCBvcHRpb24sIHRyYW5zY2VpdmVyLm1pZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdzb2FjJywge1xuICAgICAgICBpZDogdGhpcy5faWQsXG4gICAgICAgIHNpZ25hbGluZzogbG9jYWxEZXNjLFxuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIExvZ2dlci5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBvZmZlciBvciBzZXQgU0RQLiBNZXNzYWdlOiAnXG4gICAgICAgICAgKyBlLm1lc3NhZ2UpO1xuICAgICAgaWYgKHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpLmlkKSB7XG4gICAgICAgIHRoaXMuX3VucHVibGlzaChpbnRlcm5hbElkKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0UHJvbWlzZShlKTtcbiAgICAgICAgdGhpcy5fZmlyZUVuZGVkRXZlbnRPblB1YmxpY2F0aW9uT3JTdWJzY3JpcHRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3VucHVibGlzaChpbnRlcm5hbElkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyAuY2F0Y2goKGUpID0+IHtcbiAgICAvLyAgIHRoaXMuX3VucHVibGlzaChpbnRlcm5hbElkKTtcbiAgICAvLyAgIHRoaXMuX3JlamVjdFByb21pc2UoZSk7XG4gICAgLy8gICB0aGlzLl9maXJlRW5kZWRFdmVudE9uUHVibGljYXRpb25PclN1YnNjcmlwdGlvbigpO1xuICAgIC8vIH0pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuc2V0KGludGVybmFsSWQsIHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHN1YnNjcmliZShzdHJlYW0sIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnQ29ubmVjdGlvbiBjbG9zZWQnKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYXVkaW86ICEhc3RyZWFtLnNldHRpbmdzLmF1ZGlvLFxuICAgICAgICB2aWRlbzogISFzdHJlYW0uc2V0dGluZ3MudmlkZW8sXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignT3B0aW9ucyBzaG91bGQgYmUgYW4gb2JqZWN0LicpKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYXVkaW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy5hdWRpbyA9ICEhc3RyZWFtLnNldHRpbmdzLmF1ZGlvO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy52aWRlbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25zLnZpZGVvID0gISFzdHJlYW0uc2V0dGluZ3MudmlkZW87XG4gICAgfVxuICAgIGlmICgob3B0aW9ucy5hdWRpbyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zLmF1ZGlvICE9PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5hdWRpbyAhPT0gJ2Jvb2xlYW4nICYmIG9wdGlvbnMuYXVkaW8gIT09IG51bGwpIHx8IChcbiAgICAgIG9wdGlvbnMudmlkZW8gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy52aWRlbyAhPT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMudmlkZW8gIT09ICdib29sZWFuJyAmJiBvcHRpb25zLnZpZGVvICE9PSBudWxsKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3B0aW9ucyB0eXBlLicpKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYXVkaW8gJiYgIXN0cmVhbS5zZXR0aW5ncy5hdWRpbyB8fCAob3B0aW9ucy52aWRlbyAmJlxuICAgICAgICAhc3RyZWFtLnNldHRpbmdzLnZpZGVvKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgJ29wdGlvbnMuYXVkaW8vdmlkZW8gY2Fubm90IGJlIHRydWUgb3IgYW4gb2JqZWN0IGlmIHRoZXJlIGlzIG5vICdcbiAgICAgICAgICArICdhdWRpby92aWRlbyB0cmFjayBpbiByZW1vdGUgc3RyZWFtLidcbiAgICAgICkpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5hdWRpbyA9PT0gZmFsc2UgJiYgb3B0aW9ucy52aWRlbyA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdDYW5ub3Qgc3Vic2NyaWJlIGEgc3RyZWFtIHdpdGhvdXQgYXVkaW8gYW5kIHZpZGVvLicpKTtcbiAgICB9XG4gICAgY29uc3QgbWVkaWFPcHRpb25zID0ge307XG4gICAgaWYgKG9wdGlvbnMuYXVkaW8pIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hdWRpbyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICBBcnJheS5pc0FycmF5KG9wdGlvbnMuYXVkaW8uY29kZWNzKSkge1xuICAgICAgICBpZiAob3B0aW9ucy5hdWRpby5jb2RlY3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICdBdWRpbyBjb2RlYyBjYW5ub3QgYmUgYW4gZW1wdHkgYXJyYXkuJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtZWRpYU9wdGlvbnMuYXVkaW8gPSB7fTtcbiAgICAgIG1lZGlhT3B0aW9ucy5hdWRpby5mcm9tID0gc3RyZWFtLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYU9wdGlvbnMuYXVkaW8gPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudmlkZW8pIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy52aWRlbyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICBBcnJheS5pc0FycmF5KG9wdGlvbnMudmlkZW8uY29kZWNzKSkge1xuICAgICAgICBpZiAob3B0aW9ucy52aWRlby5jb2RlY3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICdWaWRlbyBjb2RlYyBjYW5ub3QgYmUgYW4gZW1wdHkgYXJyYXkuJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtZWRpYU9wdGlvbnMudmlkZW8gPSB7fTtcbiAgICAgIG1lZGlhT3B0aW9ucy52aWRlby5mcm9tID0gc3RyZWFtLmlkO1xuICAgICAgaWYgKG9wdGlvbnMudmlkZW8ucmVzb2x1dGlvbiB8fCBvcHRpb25zLnZpZGVvLmZyYW1lUmF0ZSB8fCAob3B0aW9ucy52aWRlb1xuICAgICAgICAgIC5iaXRyYXRlTXVsdGlwbGllciAmJiBvcHRpb25zLnZpZGVvLmJpdHJhdGVNdWx0aXBsaWVyICE9PSAxKSB8fFxuICAgICAgICBvcHRpb25zLnZpZGVvLmtleUZyYW1lSW50ZXJ2YWwpIHtcbiAgICAgICAgbWVkaWFPcHRpb25zLnZpZGVvLnBhcmFtZXRlcnMgPSB7XG4gICAgICAgICAgcmVzb2x1dGlvbjogb3B0aW9ucy52aWRlby5yZXNvbHV0aW9uLFxuICAgICAgICAgIGZyYW1lcmF0ZTogb3B0aW9ucy52aWRlby5mcmFtZVJhdGUsXG4gICAgICAgICAgYml0cmF0ZTogb3B0aW9ucy52aWRlby5iaXRyYXRlTXVsdGlwbGllciA/ICd4J1xuICAgICAgICAgICAgICArIG9wdGlvbnMudmlkZW8uYml0cmF0ZU11bHRpcGxpZXIudG9TdHJpbmcoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBrZXlGcmFtZUludGVydmFsOiBvcHRpb25zLnZpZGVvLmtleUZyYW1lSW50ZXJ2YWwsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy52aWRlby5yaWQpIHtcbiAgICAgICAgLy8gVXNlIHJpZCBtYXRjaGVkIHRyYWNrIElEIGFzIGZyb20gaWYgcG9zc2libGVcbiAgICAgICAgY29uc3QgbWF0Y2hlZFNldHRpbmcgPSBzdHJlYW0uc2V0dGluZ3MudmlkZW9cbiAgICAgICAgICAgIC5maW5kKCh2aWRlbykgPT4gdmlkZW8ucmlkID09PSBvcHRpb25zLnZpZGVvLnJpZCk7XG4gICAgICAgIGlmIChtYXRjaGVkU2V0dGluZyAmJiBtYXRjaGVkU2V0dGluZy5fdHJhY2tJZCkge1xuICAgICAgICAgIG1lZGlhT3B0aW9ucy52aWRlby5mcm9tID0gbWF0Y2hlZFNldHRpbmcuX3RyYWNrSWQ7XG4gICAgICAgICAgLy8gSWdub3JlIG90aGVyIHNldHRpbmdzIHdoZW4gUklEIHNldC5cbiAgICAgICAgICBkZWxldGUgbWVkaWFPcHRpb25zLnZpZGVvLnBhcmFtZXRlcnM7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy52aWRlbyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lZGlhT3B0aW9ucy52aWRlbyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVybmFsSWQgPSB0aGlzLl9jcmVhdGVJbnRlcm5hbElkKCk7XG4gICAgLy8gV2FpdGluZyBmb3IgcHJldmlvdXMgU0RQIG5lZ290aWF0aW9uIGlmIG5lZWRlZFxuICAgIGF3YWl0IHRoaXMuX2NoYWluU2RwUHJvbWlzZShpbnRlcm5hbElkKTtcblxuICAgIGNvbnN0IG9mZmVyT3B0aW9ucyA9IHt9O1xuICAgIGNvbnN0IHRyYW5zY2VpdmVycyA9IFtdO1xuICAgIHRoaXMuX2NyZWF0ZVBlZXJDb25uZWN0aW9uKCk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9wYy5hZGRUcmFuc2NlaXZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gfGRpcmVjdGlvbnwgc2VlbXMgbm90IHdvcmtpbmcgb24gU2FmYXJpLlxuICAgICAgaWYgKG1lZGlhT3B0aW9ucy5hdWRpbykge1xuICAgICAgICBjb25zdCB0cmFuc2NlaXZlciA9IHRoaXMuX3BjLmFkZFRyYW5zY2VpdmVyKFxuICAgICAgICAgICAgJ2F1ZGlvJywge2RpcmVjdGlvbjogJ3JlY3Zvbmx5J30pO1xuICAgICAgICB0cmFuc2NlaXZlcnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2F1ZGlvJyxcbiAgICAgICAgICB0cmFuc2NlaXZlcixcbiAgICAgICAgICBmcm9tOiBtZWRpYU9wdGlvbnMuYXVkaW8uZnJvbSxcbiAgICAgICAgICBvcHRpb246IHthdWRpbzogb3B0aW9ucy5hdWRpb30sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKG1lZGlhT3B0aW9ucy52aWRlbykge1xuICAgICAgICBjb25zdCB0cmFuc2NlaXZlciA9IHRoaXMuX3BjLmFkZFRyYW5zY2VpdmVyKFxuICAgICAgICAgICAgJ3ZpZGVvJywge2RpcmVjdGlvbjogJ3JlY3Zvbmx5J30pO1xuICAgICAgICB0cmFuc2NlaXZlcnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3ZpZGVvJyxcbiAgICAgICAgICB0cmFuc2NlaXZlcixcbiAgICAgICAgICBmcm9tOiBtZWRpYU9wdGlvbnMudmlkZW8uZnJvbSxcbiAgICAgICAgICBwYXJhbWV0ZXJzOiBtZWRpYU9wdGlvbnMudmlkZW8ucGFyYW1ldGVycyxcbiAgICAgICAgICBvcHRpb246IHt2aWRlbzogb3B0aW9ucy52aWRlb30sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9ICEhb3B0aW9ucy5hdWRpbztcbiAgICAgIG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvID0gISFvcHRpb25zLnZpZGVvO1xuICAgIH1cbiAgICB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuc2V0KGludGVybmFsSWQsIHt0cmFuc2NlaXZlcnN9KTtcbiAgICB0aGlzLl9zdWJzY3JpYmVkU3RyZWFtcy5zZXQoaW50ZXJuYWxJZCwgc3RyZWFtKTtcblxuICAgIGxldCBsb2NhbERlc2M7XG4gICAgdGhpcy5fcGMuY3JlYXRlT2ZmZXIob2ZmZXJPcHRpb25zKS50aGVuKChkZXNjKSA9PiB7XG4gICAgICBsb2NhbERlc2MgPSBkZXNjO1xuICAgICAgcmV0dXJuIHRoaXMuX3BjLnNldExvY2FsRGVzY3JpcHRpb24oZGVzYylcbiAgICAgICAgICAuY2F0Y2goKGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdTZXQgbG9jYWwgZGVzY3JpcHRpb24gZmFpbGVkLiBNZXNzYWdlOiAnICtcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShlcnJvck1lc3NhZ2UpKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yTWVzc2FnZTtcbiAgICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgTG9nZ2VyLmVycm9yKCdDcmVhdGUgb2ZmZXIgZmFpbGVkLiBFcnJvciBpbmZvOiAnICsgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgZXJyb3IpKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgdHJhY2tPcHRpb25zID0gW107XG4gICAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaCgoe3R5cGUsIHRyYW5zY2VpdmVyLCBmcm9tLCBwYXJhbWV0ZXJzLCBvcHRpb259KSA9PiB7XG4gICAgICAgIHRyYWNrT3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIG1pZDogdHJhbnNjZWl2ZXIubWlkLFxuICAgICAgICAgIGZyb206IGZyb20sXG4gICAgICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVycyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3N1YnNjcmliZScsIHtcbiAgICAgICAgbWVkaWE6IHt0cmFja3M6IHRyYWNrT3B0aW9uc30sXG4gICAgICAgIHRyYW5zcG9ydDoge2lkOiB0aGlzLl9pZCwgdHlwZTogJ3dlYnJ0Yyd9LFxuICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgLy8gU2VuZCBTRFAgZXZlbiB3aGVuIGZhaWxlZCB0byBnZXQgQW5zd2VyLlxuICAgICAgICB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoJ3NvYWMnLCB7XG4gICAgICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgICAgIHNpZ25hbGluZzogbG9jYWxEZXNjLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pO1xuICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbklkID0gZGF0YS5pZDtcbiAgICAgIGNvbnN0IG1lc3NhZ2VFdmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoJ2lkJywge1xuICAgICAgICBtZXNzYWdlOiBzdWJzY3JpcHRpb25JZCxcbiAgICAgICAgb3JpZ2luOiB0aGlzLl9yZW1vdGVJZCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG1lc3NhZ2VFdmVudCk7XG5cbiAgICAgIHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycy5nZXQoaW50ZXJuYWxJZCkuaWQgPSBzdWJzY3JpcHRpb25JZDtcbiAgICAgIHRoaXMuX3JldmVyc2VJZE1hcC5zZXQoc3Vic2NyaXB0aW9uSWQsIGludGVybmFsSWQpO1xuICAgICAgaWYgKHRoaXMuX2lkICYmIHRoaXMuX2lkICE9PSBkYXRhLnRyYW5zcG9ydElkKSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdTZXJ2ZXIgcmV0dXJucyBjb25mbGljdCBJRDogJyArIGRhdGEudHJhbnNwb3J0SWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5faWQgPSBkYXRhLnRyYW5zcG9ydElkO1xuXG4gICAgICAvLyBNb2RpZnkgbG9jYWwgU0RQIGJlZm9yZSBzZW5kaW5nXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaCgoe3R5cGUsIHRyYW5zY2VpdmVyLCBvcHRpb259KSA9PiB7XG4gICAgICAgICAgbG9jYWxEZXNjLnNkcCA9IHRoaXMuX3NldFJ0cFJlY2VpdmVyT3B0aW9ucyhcbiAgICAgICAgICAgICAgbG9jYWxEZXNjLnNkcCwgb3B0aW9uLCB0cmFuc2NlaXZlci5taWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc29hYycsIHtcbiAgICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgICBzaWduYWxpbmc6IGxvY2FsRGVzYyxcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBMb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgb2ZmZXIgb3Igc2V0IFNEUC4gTWVzc2FnZTogJ1xuICAgICAgICAgICsgZS5tZXNzYWdlKTtcbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpLmlkKSB7XG4gICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKGludGVybmFsSWQpO1xuICAgICAgICB0aGlzLl9yZWplY3RQcm9taXNlKGUpO1xuICAgICAgICB0aGlzLl9maXJlRW5kZWRFdmVudE9uUHVibGljYXRpb25PclN1YnNjcmlwdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoaW50ZXJuYWxJZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzLnNldChpbnRlcm5hbElkLCB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5fcGMgJiYgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgIT09ICdjbG9zZWQnKSB7XG4gICAgICB0aGlzLl9wYy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGFpblNkcFByb21pc2UoaW50ZXJuYWxJZCkge1xuICAgIGNvbnN0IHByaW9yID0gdGhpcy5fc2RwUHJvbWlzZTtcbiAgICBjb25zdCBuZWdvdGlhdGlvblRpbWVvdXQgPSAxMDAwMDtcbiAgICB0aGlzLl9zZHBQcm9taXNlID0gcHJpb3IudGhlbihcbiAgICAgICAgKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVyID0ge2ZpbmlzaDogZmFsc2UsIHJlc29sdmUsIHJlamVjdH07XG4gICAgICAgICAgdGhpcy5fc2RwUmVzb2x2ZXJzLnB1c2gocmVzb2x2ZXIpO1xuICAgICAgICAgIHRoaXMuX3NkcFJlc29sdmVyTWFwLnNldChpbnRlcm5hbElkLCByZXNvbHZlcik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZWplY3QoJ1RpbWVvdXQgdG8gZ2V0IFNEUCBhbnN3ZXInKSxcbiAgICAgICAgICAgICAgbmVnb3RpYXRpb25UaW1lb3V0KTtcbiAgICAgICAgfSkpO1xuICAgIHJldHVybiBwcmlvci5jYXRjaCgoZSk9PntcbiAgICAgIC8vXG4gICAgfSk7XG4gIH1cblxuICBfbmV4dFNkcFByb21pc2UoKSB7XG4gICAgbGV0IHJldCA9IGZhbHNlO1xuICAgIC8vIFNraXAgdGhlIGZpbmlzaGVkIHNkcCBwcm9taXNlXG4gICAgd2hpbGUgKHRoaXMuX3NkcFJlc29sdmVOdW0gPCB0aGlzLl9zZHBSZXNvbHZlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCByZXNvbHZlciA9IHRoaXMuX3NkcFJlc29sdmVyc1t0aGlzLl9zZHBSZXNvbHZlTnVtXTtcbiAgICAgIHRoaXMuX3NkcFJlc29sdmVOdW0rKztcbiAgICAgIGlmICghcmVzb2x2ZXIuZmluaXNoKSB7XG4gICAgICAgIHJlc29sdmVyLnJlc29sdmUoKTtcbiAgICAgICAgcmVzb2x2ZXIuZmluaXNoID0gdHJ1ZTtcbiAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIF9jcmVhdGVJbnRlcm5hbElkKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcm5hbENvdW50Kys7XG4gIH1cblxuICBfdW5wdWJsaXNoKGludGVybmFsSWQpIHtcbiAgICBpZiAodGhpcy5fcHVibGlzaFRyYW5zY2VpdmVycy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgIGNvbnN0IHtpZCwgdHJhbnNjZWl2ZXJzfSA9IHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpO1xuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgndW5wdWJsaXNoJywge2lkfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICBMb2dnZXIud2FybmluZygnTUNVIHJldHVybnMgbmVnYXRpdmUgYWNrIGZvciB1bnB1Ymxpc2hpbmcsICcgKyBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZXZlcnNlSWRNYXAuZGVsZXRlKGlkKTtcbiAgICAgIH1cbiAgICAgIC8vIENsZWFuIHRyYW5zY2VpdmVyXG4gICAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaCgoe3RyYW5zY2VpdmVyfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgPT09ICdzdGFibGUnKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuc2VuZGVyLnJlcGxhY2VUcmFjayhudWxsKTtcbiAgICAgICAgICB0aGlzLl9wYy5yZW1vdmVUcmFjayh0cmFuc2NlaXZlci5zZW5kZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3B1Ymxpc2hUcmFuc2NlaXZlcnMuZGVsZXRlKGludGVybmFsSWQpO1xuICAgICAgLy8gRmlyZSBlbmRlZCBldmVudFxuICAgICAgaWYgKHRoaXMuX3B1YmxpY2F0aW9ucy5oYXMoaWQpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IE93dEV2ZW50KCdlbmRlZCcpO1xuICAgICAgICB0aGlzLl9wdWJsaWNhdGlvbnMuZ2V0KGlkKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5fcHVibGljYXRpb25zLmRlbGV0ZShpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2dnZXIud2FybmluZygnSW52YWxpZCBwdWJsaWNhdGlvbiB0byB1bnB1Ymxpc2g6ICcgKyBpZCk7XG4gICAgICAgIGlmICh0aGlzLl9wdWJsaXNoUHJvbWlzZXMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICAgICAgdGhpcy5fcHVibGlzaFByb21pc2VzLmdldChpbnRlcm5hbElkKS5yZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBDb25mZXJlbmNlRXJyb3IoJ0ZhaWxlZCB0byBwdWJsaXNoJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fc2RwUmVzb2x2ZXJNYXAuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICAgIGNvbnN0IHJlc29sdmVyID0gdGhpcy5fc2RwUmVzb2x2ZXJNYXAuZ2V0KGludGVybmFsSWQpO1xuICAgICAgICBpZiAoIXJlc29sdmVyLmZpbmlzaCkge1xuICAgICAgICAgIHJlc29sdmVyLnJlc29sdmUoKTtcbiAgICAgICAgICByZXNvbHZlci5maW5pc2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NkcFJlc29sdmVyTWFwLmRlbGV0ZShpbnRlcm5hbElkKTtcbiAgICAgIH1cbiAgICAgIC8vIENyZWF0ZSBvZmZlciwgc2V0IGxvY2FsIGFuZCByZW1vdGUgZGVzY3JpcHRpb25cbiAgICB9XG4gIH1cblxuICBfdW5zdWJzY3JpYmUoaW50ZXJuYWxJZCkge1xuICAgIGlmICh0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuaGFzKGludGVybmFsSWQpKSB7XG4gICAgICBjb25zdCB7aWQsIHRyYW5zY2VpdmVyc30gPSB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuZ2V0KGludGVybmFsSWQpO1xuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgndW5zdWJzY3JpYmUnLCB7aWR9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgIExvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICAgICAgICAgJ01DVSByZXR1cm5zIG5lZ2F0aXZlIGFjayBmb3IgdW5zdWJzY3JpYmluZywgJyArIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBDbGVhbiB0cmFuc2NlaXZlclxuICAgICAgdHJhbnNjZWl2ZXJzLmZvckVhY2goKHt0cmFuc2NlaXZlcn0pID0+IHtcbiAgICAgICAgdHJhbnNjZWl2ZXIucmVjZWl2ZXIudHJhY2suc3RvcCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVUcmFuc2NlaXZlcnMuZGVsZXRlKGludGVybmFsSWQpO1xuICAgICAgLy8gRmlyZSBlbmRlZCBldmVudFxuICAgICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbnMuaGFzKGlkKSkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBPd3RFdmVudCgnZW5kZWQnKTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5nZXQoaWQpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmRlbGV0ZShpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2dnZXIud2FybmluZygnSW52YWxpZCBzdWJzY3JpcHRpb24gdG8gdW5zdWJzY3JpYmU6ICcgKyBpZCk7XG4gICAgICAgIGlmICh0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5nZXQoaW50ZXJuYWxJZCkucmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgQ29uZmVyZW5jZUVycm9yKCdGYWlsZWQgdG8gc3Vic2NyaWJlJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBDbGVhciBtZWRpYSBzdHJlYW1cbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpYmVkU3RyZWFtcy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlZFN0cmVhbXMuZ2V0KGludGVybmFsSWQpLm1lZGlhU3RyZWFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlZFN0cmVhbXMuZGVsZXRlKGludGVybmFsSWQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3NkcFJlc29sdmVyTWFwLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgICBjb25zdCByZXNvbHZlciA9IHRoaXMuX3NkcFJlc29sdmVyTWFwLmdldChpbnRlcm5hbElkKTtcbiAgICAgICAgaWYgKCFyZXNvbHZlci5maW5pc2gpIHtcbiAgICAgICAgICByZXNvbHZlci5yZXNvbHZlKCk7XG4gICAgICAgICAgcmVzb2x2ZXIuZmluaXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZHBSZXNvbHZlck1hcC5kZWxldGUoaW50ZXJuYWxJZCk7XG4gICAgICB9XG4gICAgICAvLyBEaXNhYmxlIG1lZGlhIGluIHJlbW90ZSBTRFBcbiAgICAgIC8vIFNldCByZW1vdGVEZXNjcmlwdGlvbiBhbmQgc2V0IGxvY2FsRGVzY3JpcHRpb25cbiAgICB9XG4gIH1cblxuICBfbXV0ZU9yVW5tdXRlKHNlc3Npb25JZCwgaXNNdXRlLCBpc1B1YiwgdHJhY2tLaW5kKSB7XG4gICAgY29uc3QgZXZlbnROYW1lID0gaXNQdWIgPyAnc3RyZWFtLWNvbnRyb2wnIDpcbiAgICAgICdzdWJzY3JpcHRpb24tY29udHJvbCc7XG4gICAgY29uc3Qgb3BlcmF0aW9uID0gaXNNdXRlID8gJ3BhdXNlJyA6ICdwbGF5JztcbiAgICByZXR1cm4gdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKGV2ZW50TmFtZSwge1xuICAgICAgaWQ6IHNlc3Npb25JZCxcbiAgICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uLFxuICAgICAgZGF0YTogdHJhY2tLaW5kLFxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKCFpc1B1Yikge1xuICAgICAgICBjb25zdCBtdXRlRXZlbnROYW1lID0gaXNNdXRlID8gJ211dGUnIDogJ3VubXV0ZSc7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZ2V0KHNlc3Npb25JZCkuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBNdXRlRXZlbnQobXV0ZUV2ZW50TmFtZSwge2tpbmQ6IHRyYWNrS2luZH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9hcHBseU9wdGlvbnMoc2Vzc2lvbklkLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0aW9ucy52aWRlbyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdPcHRpb25zIHNob3VsZCBiZSBhbiBvYmplY3QuJykpO1xuICAgIH1cbiAgICBjb25zdCB2aWRlb09wdGlvbnMgPSB7fTtcbiAgICB2aWRlb09wdGlvbnMucmVzb2x1dGlvbiA9IG9wdGlvbnMudmlkZW8ucmVzb2x1dGlvbjtcbiAgICB2aWRlb09wdGlvbnMuZnJhbWVyYXRlID0gb3B0aW9ucy52aWRlby5mcmFtZVJhdGU7XG4gICAgdmlkZW9PcHRpb25zLmJpdHJhdGUgPSBvcHRpb25zLnZpZGVvLmJpdHJhdGVNdWx0aXBsaWVyID8gJ3gnICsgb3B0aW9ucy52aWRlb1xuICAgICAgICAuYml0cmF0ZU11bHRpcGxpZXJcbiAgICAgICAgLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQ7XG4gICAgdmlkZW9PcHRpb25zLmtleUZyYW1lSW50ZXJ2YWwgPSBvcHRpb25zLnZpZGVvLmtleUZyYW1lSW50ZXJ2YWw7XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc3Vic2NyaXB0aW9uLWNvbnRyb2wnLCB7XG4gICAgICBpZDogc2Vzc2lvbklkLFxuICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdmlkZW86IHtwYXJhbWV0ZXJzOiB2aWRlb09wdGlvbnN9LFxuICAgICAgfSxcbiAgICB9KS50aGVuKCk7XG4gIH1cblxuICBfb25SZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xuICAgIExvZ2dlci5kZWJ1ZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcbiAgICBsZXQgZmluZCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgW2ludGVybmFsSWQsIHN1Yl0gb2YgdGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzKSB7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb25JZCA9IHN1Yi5pZDtcbiAgICAgIGlmIChzdWIudHJhbnNjZWl2ZXJzLmZpbmQoKHQpID0+IHQudHJhbnNjZWl2ZXIgPT09IGV2ZW50LnRyYW5zY2VpdmVyKSkge1xuICAgICAgICBmaW5kID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlZFN0cmVhbSA9IHRoaXMuX3N1YnNjcmliZWRTdHJlYW1zLmdldChpbnRlcm5hbElkKTtcbiAgICAgICAgaWYgKCFzdWJzY3JpYmVkU3RyZWFtLm1lZGlhU3RyZWFtKSB7XG4gICAgICAgICAgdGhpcy5fc3Vic2NyaWJlZFN0cmVhbXMuZ2V0KGludGVybmFsSWQpLm1lZGlhU3RyZWFtID1cbiAgICAgICAgICAgICAgZXZlbnQuc3RyZWFtc1swXTtcbiAgICAgICAgICAvLyBSZXNvbHZlIHN1YnNjcmlwdGlvbiBpZiByZWFkeSBoYW5kbGVyIGhhcyBiZWVuIGNhbGxlZFxuICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuX3N1YnNjcmlwdGlvbnMuZ2V0KHN1YnNjcmlwdGlvbklkKTtcbiAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5nZXQoaW50ZXJuYWxJZCkucmVzb2x2ZShzdWJzY3JpcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBZGQgdHJhY2sgdG8gdGhlIGV4aXN0aW5nIHN0cmVhbVxuICAgICAgICAgIHN1YnNjcmliZWRTdHJlYW0ubWVkaWFTdHJlYW0uYWRkVHJhY2soZXZlbnQudHJhY2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZmluZCkge1xuICAgICAgLy8gVGhpcyBpcyBub3QgZXhwZWN0ZWQgcGF0aC4gSG93ZXZlciwgdGhpcyBpcyBnb2luZyB0byBoYXBwZW4gb24gU2FmYXJpXG4gICAgICAvLyBiZWNhdXNlIGl0IGRvZXMgbm90IHN1cHBvcnQgc2V0dGluZyBkaXJlY3Rpb24gb2YgdHJhbnNjZWl2ZXIuXG4gICAgICBMb2dnZXIud2FybmluZygnUmVjZWl2ZWQgcmVtb3RlIHN0cmVhbSB3aXRob3V0IHN1YnNjcmlwdGlvbi4nKTtcbiAgICB9XG4gIH1cblxuICBfb25Mb2NhbEljZUNhbmRpZGF0ZShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAgIGlmICh0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSAhPT0gJ3N0YWJsZScpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ0NhbmRpZGF0ZXMucHVzaChldmVudC5jYW5kaWRhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2VuZENhbmRpZGF0ZShldmVudC5jYW5kaWRhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ0VtcHR5IGNhbmRpZGF0ZS4nKTtcbiAgICB9XG4gIH1cblxuICBfZmlyZUVuZGVkRXZlbnRPblB1YmxpY2F0aW9uT3JTdWJzY3JpcHRpb24oKSB7XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2VuZGVkID0gdHJ1ZTtcbiAgICBjb25zdCBldmVudCA9IG5ldyBPd3RFdmVudCgnZW5kZWQnKTtcbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHVibGljYXRpb25dIG9mIHRoaXMuX3B1YmxpY2F0aW9ucykge1xuICAgICAgcHVibGljYXRpb24uZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICBwdWJsaWNhdGlvbi5zdG9wKCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBzdWJzY3JpcHRpb25dIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIHN1YnNjcmlwdGlvbi5zdG9wKCk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgX3JlamVjdFByb21pc2UoZXJyb3IpIHtcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBlcnJvciA9IG5ldyBDb25mZXJlbmNlRXJyb3IoJ0Nvbm5lY3Rpb24gZmFpbGVkIG9yIGNsb3NlZC4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BjICYmIHRoaXMuX3BjLmljZUNvbm5lY3Rpb25TdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcbiAgICAgIHRoaXMuX3BjLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gUmVqZWN0aW5nIGFsbCBjb3JyZXNwb25kaW5nIHByb21pc2VzIGlmIHB1Ymxpc2hpbmcgYW5kIHN1YnNjcmliaW5nIGlzIG9uZ29pbmcuXG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHByb21pc2VdIG9mIHRoaXMuX3B1Ymxpc2hQcm9taXNlcykge1xuICAgICAgcHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuY2xlYXIoKTtcbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHJvbWlzZV0gb2YgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMpIHtcbiAgICAgIHByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5fc3Vic2NyaWJlUHJvbWlzZXMuY2xlYXIoKTtcbiAgfVxuXG4gIF9vbkljZUNvbm5lY3Rpb25TdGF0ZUNoYW5nZShldmVudCkge1xuICAgIGlmICghZXZlbnQgfHwgIWV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBMb2dnZXIuZGVidWcoJ0lDRSBjb25uZWN0aW9uIHN0YXRlIGNoYW5nZWQgdG8gJyArXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlKTtcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjbG9zZWQnIHx8XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnZmFpbGVkJykge1xuICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnZmFpbGVkJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcignY29ubmVjdGlvbiBmYWlsZWQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGaXJlIGVuZGVkIGV2ZW50IGlmIHB1YmxpY2F0aW9uIG9yIHN1YnNjcmlwdGlvbiBleGlzdHMuXG4gICAgICAgIHRoaXMuX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX29uQ29ubmVjdGlvblN0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX3BjLmNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2Nsb3NlZCcgfHxcbiAgICAgICAgdGhpcy5fcGMuY29ubmVjdGlvblN0YXRlID09PSAnZmFpbGVkJykge1xuICAgICAgaWYgKHRoaXMuX3BjLmNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoJ2Nvbm5lY3Rpb24gZmFpbGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmlyZSBlbmRlZCBldmVudCBpZiBwdWJsaWNhdGlvbiBvciBzdWJzY3JpcHRpb24gZXhpc3RzLlxuICAgICAgICB0aGlzLl9maXJlRW5kZWRFdmVudE9uUHVibGljYXRpb25PclN1YnNjcmlwdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9zZW5kQ2FuZGlkYXRlKGNhbmRpZGF0ZSkge1xuICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc29hYycsIHtcbiAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgIHNpZ25hbGluZzoge1xuICAgICAgICB0eXBlOiAnY2FuZGlkYXRlJyxcbiAgICAgICAgY2FuZGlkYXRlOiB7XG4gICAgICAgICAgY2FuZGlkYXRlOiAnYT0nICsgY2FuZGlkYXRlLmNhbmRpZGF0ZSxcbiAgICAgICAgICBzZHBNaWQ6IGNhbmRpZGF0ZS5zZHBNaWQsXG4gICAgICAgICAgc2RwTUxpbmVJbmRleDogY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXgsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgX2NyZWF0ZVBlZXJDb25uZWN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9wYykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBjQ29uZmlndXJhdGlvbiA9IHRoaXMuX2NvbmZpZy5ydGNDb25maWd1cmF0aW9uIHx8IHt9O1xuICAgIGlmIChVdGlscy5pc0Nocm9tZSgpKSB7XG4gICAgICBwY0NvbmZpZ3VyYXRpb24uc2RwU2VtYW50aWNzID0gJ3VuaWZpZWQtcGxhbic7XG4gICAgICBwY0NvbmZpZ3VyYXRpb24uYnVuZGxlUG9saWN5ID0gJ21heC1idW5kbGUnO1xuICAgIH1cbiAgICB0aGlzLl9wYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZ3VyYXRpb24pO1xuICAgIHRoaXMuX3BjLm9uaWNlY2FuZGlkYXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkxvY2FsSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgdGhpcy5fcGMub250cmFjayA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25SZW1vdGVTdHJlYW1BZGRlZC5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIHRoaXMuX3BjLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkljZUNvbm5lY3Rpb25TdGF0ZUNoYW5nZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIHRoaXMuX3BjLm9uY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICB9XG5cbiAgX2dldFN0YXRzKCkge1xuICAgIGlmICh0aGlzLl9wYykge1xuICAgICAgcmV0dXJuIHRoaXMuX3BjLmdldFN0YXRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQ29uZmVyZW5jZUVycm9yKFxuICAgICAgICAgICdQZWVyQ29ubmVjdGlvbiBpcyBub3QgYXZhaWxhYmxlLicpKTtcbiAgICB9XG4gIH1cblxuICBfcmVhZHlIYW5kbGVyKHNlc3Npb25JZCkge1xuICAgIGNvbnN0IGludGVybmFsSWQgPSB0aGlzLl9yZXZlcnNlSWRNYXAuZ2V0KHNlc3Npb25JZCk7XG4gICAgaWYgKHRoaXMuX3N1YnNjcmliZVByb21pc2VzLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbihzZXNzaW9uSWQsICgpID0+IHtcbiAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoaW50ZXJuYWxJZCk7XG4gICAgICB9LCAoKSA9PiB0aGlzLl9nZXRTdGF0cygpLFxuICAgICAgKHRyYWNrS2luZCkgPT4gdGhpcy5fbXV0ZU9yVW5tdXRlKHNlc3Npb25JZCwgdHJ1ZSwgZmFsc2UsIHRyYWNrS2luZCksXG4gICAgICAodHJhY2tLaW5kKSA9PiB0aGlzLl9tdXRlT3JVbm11dGUoc2Vzc2lvbklkLCBmYWxzZSwgZmFsc2UsIHRyYWNrS2luZCksXG4gICAgICAob3B0aW9ucykgPT4gdGhpcy5fYXBwbHlPcHRpb25zKHNlc3Npb25JZCwgb3B0aW9ucykpO1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5zZXQoc2Vzc2lvbklkLCBzdWJzY3JpcHRpb24pO1xuICAgICAgLy8gRmlyZSBzdWJzY3JpcHRpb24ncyBlbmRlZCBldmVudCB3aGVuIGFzc29jaWF0ZWQgc3RyZWFtIGlzIGVuZGVkLlxuICAgICAgdGhpcy5fc3Vic2NyaWJlZFN0cmVhbXMuZ2V0KGludGVybmFsSWQpLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9ucy5oYXMoc2Vzc2lvbklkKSkge1xuICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZ2V0KHNlc3Npb25JZCkuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgJ2VuZGVkJywgbmV3IE93dEV2ZW50KCdlbmRlZCcpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBSZXNvbHZlIHN1YnNjcmlwdGlvbiBpZiBtZWRpYVN0cmVhbSBpcyByZWFkeVxuICAgICAgaWYgKHRoaXMuX3N1YnNjcmliZWRTdHJlYW1zLmdldChpbnRlcm5hbElkKS5tZWRpYVN0cmVhbSkge1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5nZXQoaW50ZXJuYWxJZCkucmVzb2x2ZShzdWJzY3JpcHRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fcHVibGlzaFByb21pc2VzLmhhcyhpbnRlcm5hbElkKSkge1xuICAgICAgY29uc3QgcHVibGljYXRpb24gPSBuZXcgUHVibGljYXRpb24oc2Vzc2lvbklkLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VucHVibGlzaChpbnRlcm5hbElkKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfSwgKCkgPT4gdGhpcy5fZ2V0U3RhdHMoKSxcbiAgICAgICh0cmFja0tpbmQpID0+IHRoaXMuX211dGVPclVubXV0ZShzZXNzaW9uSWQsIHRydWUsIHRydWUsIHRyYWNrS2luZCksXG4gICAgICAodHJhY2tLaW5kKSA9PiB0aGlzLl9tdXRlT3JVbm11dGUoc2Vzc2lvbklkLCBmYWxzZSwgdHJ1ZSwgdHJhY2tLaW5kKSk7XG4gICAgICB0aGlzLl9wdWJsaWNhdGlvbnMuc2V0KHNlc3Npb25JZCwgcHVibGljYXRpb24pO1xuICAgICAgdGhpcy5fcHVibGlzaFByb21pc2VzLmdldChpbnRlcm5hbElkKS5yZXNvbHZlKHB1YmxpY2F0aW9uKTtcbiAgICAgIC8vIERvIG5vdCBmaXJlIHB1YmxpY2F0aW9uJ3MgZW5kZWQgZXZlbnQgd2hlbiBhc3NvY2lhdGVkIHN0cmVhbSBpcyBlbmRlZC5cbiAgICAgIC8vIEl0IG1heSBzdGlsbCBzZW5kaW5nIHNpbGVuY2Ugb3IgYmxhY2sgZnJhbWVzLlxuICAgICAgLy8gUmVmZXIgdG8gaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYnJ0Yy1wYy8jcnRjcnRwc2VuZGVyLWludGVyZmFjZS5cbiAgICB9IGVsc2UgaWYgKCFzZXNzaW9uSWQpIHtcbiAgICAgIC8vIENoYW5uZWwgcmVhZHlcbiAgICB9XG4gIH1cblxuICBfc2RwSGFuZGxlcihzZHApIHtcbiAgICBpZiAoc2RwLnR5cGUgPT09ICdhbnN3ZXInKSB7XG4gICAgICB0aGlzLl9wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihzZHApLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcGVuZGluZ0NhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHRoaXMuX3BlbmRpbmdDYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICB0aGlzLl9zZW5kQ2FuZGlkYXRlKGNhbmRpZGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKCdTZXQgcmVtb3RlIGRlc2NyaXB0aW9uIGZhaWxlZDogJyArIGVycm9yKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0UHJvbWlzZShlcnJvcik7XG4gICAgICAgIHRoaXMuX2ZpcmVFbmRlZEV2ZW50T25QdWJsaWNhdGlvbk9yU3Vic2NyaXB0aW9uKCk7XG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9uZXh0U2RwUHJvbWlzZSgpKSB7XG4gICAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ1VuZXhwZWN0ZWQgU0RQIHByb21pc2Ugc3RhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX2Vycm9ySGFuZGxlcihzZXNzaW9uSWQsIGVycm9yTWVzc2FnZSkge1xuICAgIGlmICghc2Vzc2lvbklkKSB7XG4gICAgICAvLyBUcmFuc3BvcnQgZXJyb3JcbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8vIEZpcmUgZXJyb3IgZXZlbnQgb24gcHVibGljYXRpb24gb3Igc3Vic2NyaXB0aW9uXG4gICAgY29uc3QgZXJyb3JFdmVudCA9IG5ldyBFcnJvckV2ZW50KCdlcnJvcicsIHtcbiAgICAgIGVycm9yOiBuZXcgQ29uZmVyZW5jZUVycm9yKGVycm9yTWVzc2FnZSksXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX3B1YmxpY2F0aW9ucy5oYXMoc2Vzc2lvbklkKSkge1xuICAgICAgdGhpcy5fcHVibGljYXRpb25zLmdldChzZXNzaW9uSWQpLmRpc3BhdGNoRXZlbnQoZXJyb3JFdmVudCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb25zLmhhcyhzZXNzaW9uSWQpKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmdldChzZXNzaW9uSWQpLmRpc3BhdGNoRXZlbnQoZXJyb3JFdmVudCk7XG4gICAgfVxuICAgIC8vIFN0b3AgcHVibGljYXRpb24gb3Igc3Vic2NyaXB0aW9uXG4gICAgY29uc3QgaW50ZXJuYWxJZCA9IHRoaXMuX3JldmVyc2VJZE1hcC5nZXQoc2Vzc2lvbklkKTtcbiAgICBpZiAodGhpcy5fcHVibGlzaFRyYW5zY2VpdmVycy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgIHRoaXMuX3VucHVibGlzaChpbnRlcm5hbElkKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N1YnNjcmliZVRyYW5zY2VpdmVycy5oYXMoaW50ZXJuYWxJZCkpIHtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKGludGVybmFsSWQpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVFcnJvcihlcnJvck1lc3NhZ2UpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBDb25mZXJlbmNlRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZXJyb3JFdmVudCA9IG5ldyBFcnJvckV2ZW50KCdlcnJvcicsIHtcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICB9KTtcbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHVibGljYXRpb25dIG9mIHRoaXMuX3B1YmxpY2F0aW9ucykge1xuICAgICAgcHVibGljYXRpb24uZGlzcGF0Y2hFdmVudChlcnJvckV2ZW50KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHN1YnNjcmlwdGlvbl0gb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3Vic2NyaXB0aW9uLmRpc3BhdGNoRXZlbnQoZXJyb3JFdmVudCk7XG4gICAgfVxuICAgIC8vIEZpcmUgZW5kZWQgZXZlbnQgd2hlbiBlcnJvciBvY2N1cmVkXG4gICAgdGhpcy5fZmlyZUVuZGVkRXZlbnRPblB1YmxpY2F0aW9uT3JTdWJzY3JpcHRpb24oKTtcbiAgfVxuXG4gIF9zZXRDb2RlY09yZGVyKHNkcCwgb3B0aW9ucywgbWlkKSB7XG4gICAgaWYgKG9wdGlvbnMuYXVkaW8pIHtcbiAgICAgIGlmIChvcHRpb25zLmF1ZGlvLmNvZGVjcykge1xuICAgICAgICBjb25zdCBhdWRpb0NvZGVjTmFtZXMgPSBBcnJheS5mcm9tKG9wdGlvbnMuYXVkaW8uY29kZWNzLCAoY29kZWMpID0+XG4gICAgICAgICAgY29kZWMubmFtZSk7XG4gICAgICAgIHNkcCA9IFNkcFV0aWxzLnJlb3JkZXJDb2RlY3Moc2RwLCAnYXVkaW8nLCBhdWRpb0NvZGVjTmFtZXMsIG1pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhdWRpb0NvZGVjTmFtZXMgPSBBcnJheS5mcm9tKG9wdGlvbnMuYXVkaW8sXG4gICAgICAgICAgICAoZW5jb2RpbmdQYXJhbWV0ZXJzKSA9PiBlbmNvZGluZ1BhcmFtZXRlcnMuY29kZWMubmFtZSk7XG4gICAgICAgIHNkcCA9IFNkcFV0aWxzLnJlb3JkZXJDb2RlY3Moc2RwLCAnYXVkaW8nLCBhdWRpb0NvZGVjTmFtZXMsIG1pZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnZpZGVvKSB7XG4gICAgICBpZiAob3B0aW9ucy52aWRlby5jb2RlY3MpIHtcbiAgICAgICAgY29uc3QgdmlkZW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbShvcHRpb25zLnZpZGVvLmNvZGVjcywgKGNvZGVjKSA9PlxuICAgICAgICAgIGNvZGVjLm5hbWUpO1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ3ZpZGVvJywgdmlkZW9Db2RlY05hbWVzLCBtaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmlkZW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbShvcHRpb25zLnZpZGVvLFxuICAgICAgICAgICAgKGVuY29kaW5nUGFyYW1ldGVycykgPT4gZW5jb2RpbmdQYXJhbWV0ZXJzLmNvZGVjLm5hbWUpO1xuICAgICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ3ZpZGVvJywgdmlkZW9Db2RlY05hbWVzLCBtaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX3NldE1heEJpdHJhdGUoc2RwLCBvcHRpb25zLCBtaWQpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXVkaW8gPT09ICdvYmplY3QnKSB7XG4gICAgICBzZHAgPSBTZHBVdGlscy5zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucy5hdWRpbywgbWlkKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnZpZGVvID09PSAnb2JqZWN0Jykge1xuICAgICAgc2RwID0gU2RwVXRpbHMuc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMudmlkZW8sIG1pZCk7XG4gICAgfVxuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBfc2V0UnRwU2VuZGVyT3B0aW9ucyhzZHAsIG9wdGlvbnMsIG1pZCkge1xuICAgIC8vIFNEUCBtdWdsaW5nIGlzIGRlcHJlY2F0ZWQsIG1vdmluZyB0byBgc2V0UGFyYW1ldGVyc2AuXG4gICAgaWYgKHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMuYXVkaW8pIHx8XG4gICAgICAgIHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pKSB7XG4gICAgICByZXR1cm4gc2RwO1xuICAgIH1cbiAgICBzZHAgPSB0aGlzLl9zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucywgbWlkKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX3NldFJ0cFJlY2VpdmVyT3B0aW9ucyhzZHAsIG9wdGlvbnMsIG1pZCkge1xuICAgIC8vIEFkZCBsZWdhY3kgc2ltdWxjYXN0IGluIFNEUCBmb3Igc2FmYXJpLlxuICAgIGlmICh0aGlzLl9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvcHRpb25zLnZpZGVvKSAmJiBVdGlscy5pc1NhZmFyaSgpKSB7XG4gICAgICBpZiAob3B0aW9ucy52aWRlby5sZW5ndGggPiAxKSB7XG4gICAgICAgIHNkcCA9IFNkcFV0aWxzLmFkZExlZ2FjeVNpbXVsY2FzdChcbiAgICAgICAgICAgIHNkcCwgJ3ZpZGVvJywgb3B0aW9ucy52aWRlby5sZW5ndGgsIG1pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gX3ZpZGVvQ29kZWNzIGlzIGEgd29ya2Fyb3VuZCBmb3Igc2V0dGluZyB2aWRlbyBjb2RlY3MuIEl0IHdpbGwgYmUgbW92ZWQgdG8gUlRDUnRwU2VuZFBhcmFtZXRlcnMuXG4gICAgaWYgKHRoaXMuX2lzUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG9wdGlvbnMudmlkZW8pICYmIHRoaXMuX3ZpZGVvQ29kZWNzKSB7XG4gICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ3ZpZGVvJywgdGhpcy5fdmlkZW9Db2RlY3MsIG1pZCk7XG4gICAgICByZXR1cm4gc2RwO1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy5hdWRpbykgfHxcbiAgICAgICAgdGhpcy5faXNSdHBFbmNvZGluZ1BhcmFtZXRlcnMob3B0aW9ucy52aWRlbykpIHtcbiAgICAgIHJldHVybiBzZHA7XG4gICAgfVxuICAgIHNkcCA9IHRoaXMuX3NldENvZGVjT3JkZXIoc2RwLCBvcHRpb25zLCBtaWQpO1xuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICAvLyBIYW5kbGUgc3RyZWFtIGV2ZW50IHNlbnQgZnJvbSBNQ1UuIFNvbWUgc3RyZWFtIGV2ZW50cyBzaG91bGQgYmUgcHVibGljYXRpb25cbiAgLy8gZXZlbnQgb3Igc3Vic2NyaXB0aW9uIGV2ZW50LiBJdCB3aWxsIGJlIGhhbmRsZWQgaGVyZS5cbiAgX29uU3RyZWFtRXZlbnQobWVzc2FnZSkge1xuICAgIGNvbnN0IGV2ZW50VGFyZ2V0cyA9IFtdO1xuICAgIGlmICh0aGlzLl9wdWJsaWNhdGlvbnMuaGFzKG1lc3NhZ2UuaWQpKSB7XG4gICAgICBldmVudFRhcmdldHMucHVzaCh0aGlzLl9wdWJsaWNhdGlvbnMuZ2V0KG1lc3NhZ2UuaWQpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbaW50ZXJuYWxJZCwgc3Vic2NyaWJlZFN0cmVhbV0gb2YgdGhpcy5fc3Vic2NyaWJlZFN0cmVhbXMpIHtcbiAgICAgIGlmIChtZXNzYWdlLmlkID09PSBzdWJzY3JpYmVkU3RyZWFtLmlkKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbklkID0gdGhpcy5fc3Vic2NyaWJlVHJhbnNjZWl2ZXJzLmdldChpbnRlcm5hbElkKS5pZDtcbiAgICAgICAgZXZlbnRUYXJnZXRzLnB1c2godGhpcy5fc3Vic2NyaXB0aW9ucy5nZXQoc3Vic2NyaXB0aW9uSWQpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFldmVudFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB0cmFja0tpbmQ7XG4gICAgaWYgKG1lc3NhZ2UuZGF0YS5maWVsZCA9PT0gJ2F1ZGlvLnN0YXR1cycpIHtcbiAgICAgIHRyYWNrS2luZCA9IFRyYWNrS2luZC5BVURJTztcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuZGF0YS5maWVsZCA9PT0gJ3ZpZGVvLnN0YXR1cycpIHtcbiAgICAgIHRyYWNrS2luZCA9IFRyYWNrS2luZC5WSURFTztcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ludmFsaWQgZGF0YSBmaWVsZCBmb3Igc3RyZWFtIHVwZGF0ZSBpbmZvLicpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5kYXRhLnZhbHVlID09PSAnYWN0aXZlJykge1xuICAgICAgZXZlbnRUYXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT5cbiAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IE11dGVFdmVudCgndW5tdXRlJywge2tpbmQ6IHRyYWNrS2luZH0pKSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmRhdGEudmFsdWUgPT09ICdpbmFjdGl2ZScpIHtcbiAgICAgIGV2ZW50VGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+XG4gICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBNdXRlRXZlbnQoJ211dGUnLCB7a2luZDogdHJhY2tLaW5kfSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ludmFsaWQgZGF0YSB2YWx1ZSBmb3Igc3RyZWFtIHVwZGF0ZSBpbmZvLicpO1xuICAgIH1cbiAgfVxuXG4gIF9pc1J0cEVuY29kaW5nUGFyYW1ldGVycyhvYmopIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBPbmx5IGNoZWNrIHRoZSBmaXJzdCBvbmUuXG4gICAgY29uc3QgcGFyYW0gPSBvYmpbMF07XG4gICAgcmV0dXJuIHBhcmFtLmNvZGVjUGF5bG9hZFR5cGUgfHwgcGFyYW0uZHR4IHx8IHBhcmFtLmFjdGl2ZSB8fFxuICAgICAgICBwYXJhbS5wdGltZSB8fCBwYXJhbS5tYXhGcmFtZXJhdGUgfHwgcGFyYW0uc2NhbGVSZXNvbHV0aW9uRG93bkJ5IHx8XG4gICAgICAgIHBhcmFtLnJpZDtcbiAgfVxuXG4gIF9pc093dEVuY29kaW5nUGFyYW1ldGVycyhvYmopIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBPbmx5IGNoZWNrIHRoZSBmaXJzdCBvbmUuXG4gICAgY29uc3QgcGFyYW0gPSBvYmpbMF07XG4gICAgcmV0dXJuICEhcGFyYW0uY29kZWM7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZ2xvYmFsIE1hcCwgUHJvbWlzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIEV2ZW50TW9kdWxlIGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuaW1wb3J0IHtTaW9TaWduYWxpbmcgYXMgU2lnbmFsaW5nfSBmcm9tICcuL3NpZ25hbGluZy5qcyc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcbmltcG9ydCB7QmFzZTY0fSBmcm9tICcuLi9iYXNlL2Jhc2U2NC5qcyc7XG5pbXBvcnQge0NvbmZlcmVuY2VFcnJvcn0gZnJvbSAnLi9lcnJvci5qcyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi9iYXNlL3V0aWxzLmpzJztcbmltcG9ydCAqIGFzIFN0cmVhbU1vZHVsZSBmcm9tICcuLi9iYXNlL3N0cmVhbS5qcyc7XG5pbXBvcnQge1BhcnRpY2lwYW50fSBmcm9tICcuL3BhcnRpY2lwYW50LmpzJztcbmltcG9ydCB7Q29uZmVyZW5jZUluZm99IGZyb20gJy4vaW5mby5qcyc7XG5pbXBvcnQge0NvbmZlcmVuY2VQZWVyQ29ubmVjdGlvbkNoYW5uZWx9IGZyb20gJy4vY2hhbm5lbC5qcyc7XG5pbXBvcnQge1F1aWNDb25uZWN0aW9ufSBmcm9tICcuL3F1aWNjb25uZWN0aW9uLmpzJztcbmltcG9ydCB7UmVtb3RlTWl4ZWRTdHJlYW0sIEFjdGl2ZUF1ZGlvSW5wdXRDaGFuZ2VFdmVudCwgTGF5b3V0Q2hhbmdlRXZlbnR9XG4gIGZyb20gJy4vbWl4ZWRzdHJlYW0uanMnO1xuaW1wb3J0ICogYXMgU3RyZWFtVXRpbHNNb2R1bGUgZnJvbSAnLi9zdHJlYW11dGlscy5qcyc7XG5cbmNvbnN0IFNpZ25hbGluZ1N0YXRlID0ge1xuICBSRUFEWTogMSxcbiAgQ09OTkVDVElORzogMixcbiAgQ09OTkVDVEVEOiAzLFxufTtcblxuY29uc3QgcHJvdG9jb2xWZXJzaW9uID0gJzEuMic7XG5cbi8qIGVzbGludC1kaXNhYmxlIHZhbGlkLWpzZG9jICovXG4vKipcbiAqIEBjbGFzcyBQYXJ0aWNpcGFudEV2ZW50XG4gKiBAY2xhc3NEZXNjIENsYXNzIFBhcnRpY2lwYW50RXZlbnQgcmVwcmVzZW50cyBhIHBhcnRpY2lwYW50IGV2ZW50LlxuICAgQGV4dGVuZHMgT3d0LkJhc2UuT3d0RXZlbnRcbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5jb25zdCBQYXJ0aWNpcGFudEV2ZW50ID0gZnVuY3Rpb24odHlwZSwgaW5pdCkge1xuICBjb25zdCB0aGF0ID0gbmV3IEV2ZW50TW9kdWxlLk93dEV2ZW50KHR5cGUsIGluaXQpO1xuICAvKipcbiAgICogQG1lbWJlciB7T3d0LkNvbmZlcmVuY2UuUGFydGljaXBhbnR9IHBhcnRpY2lwYW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuUGFydGljaXBhbnRFdmVudFxuICAgKi9cbiAgdGhhdC5wYXJ0aWNpcGFudCA9IGluaXQucGFydGljaXBhbnQ7XG4gIHJldHVybiB0aGF0O1xufTtcbi8qIGVzbGludC1lbmFibGUgdmFsaWQtanNkb2MgKi9cblxuLyoqXG4gKiBAY2xhc3MgQ29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb25cbiAqIEBjbGFzc0Rlc2MgQ29uZmlndXJhdGlvbiBmb3IgQ29uZmVyZW5jZUNsaWVudC5cbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBDb25mZXJlbmNlQ2xpZW50Q29uZmlndXJhdGlvbiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P1JUQ0NvbmZpZ3VyYXRpb259IHJ0Y0NvbmZpZ3VyYXRpb25cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb25cbiAgICAgKiBAZGVzYyBJdCB3aWxsIGJlIHVzZWQgZm9yIGNyZWF0aW5nIFBlZXJDb25uZWN0aW9uLlxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93ZWJydGMvI3J0Y2NvbmZpZ3VyYXRpb24tZGljdGlvbmFyeXxSVENDb25maWd1cmF0aW9uIERpY3Rpb25hcnkgb2YgV2ViUlRDIDEuMH0uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvLyBGb2xsb3dpbmcgb2JqZWN0IGNhbiBiZSBzZXQgdG8gY29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb24ucnRjQ29uZmlndXJhdGlvbi5cbiAgICAgKiB7XG4gICAgICogICBpY2VTZXJ2ZXJzOiBbe1xuICAgICAqICAgICAgdXJsczogXCJzdHVuOmV4YW1wbGUuY29tOjM0NzhcIlxuICAgICAqICAgfSwge1xuICAgICAqICAgICB1cmxzOiBbXG4gICAgICogICAgICAgXCJ0dXJuOmV4YW1wbGUuY29tOjM0Nzg/dHJhbnNwb3J0PXVkcFwiLFxuICAgICAqICAgICAgIFwidHVybjpleGFtcGxlLmNvbTozNDc4P3RyYW5zcG9ydD10Y3BcIlxuICAgICAqICAgICBdLFxuICAgICAqICAgICAgY3JlZGVudGlhbDogXCJwYXNzd29yZFwiLFxuICAgICAqICAgICAgdXNlcm5hbWU6IFwidXNlcm5hbWVcIlxuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKi9cbiAgICB0aGlzLnJ0Y0NvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/V2ViVHJhbnNwb3J0T3B0aW9uc30gd2ViVHJhbnNwb3J0Q29uZmlndXJhdGlvblxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50Q29uZmlndXJhdGlvblxuICAgICAqIEBkZXNjIEl0IHdpbGwgYmUgdXNlZCBmb3IgY3JlYXRpbmcgV2ViVHJhbnNwb3J0LlxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJ0cmFuc3BvcnQvI2RpY3RkZWYtd2VidHJhbnNwb3J0b3B0aW9uc3xXZWJUcmFuc3BvcnRPcHRpb25zIG9mIFdlYlRyYW5zcG9ydH0uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvLyBGb2xsb3dpbmcgb2JqZWN0IGNhbiBiZSBzZXQgdG8gY29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb24ud2ViVHJhbnNwb3J0Q29uZmlndXJhdGlvbi5cbiAgICAgKiB7XG4gICAgICogICBzZXJ2ZXJDZXJ0aWZpY2F0ZUZpbmdlcnByaW50czogW3tcbiAgICAgKiAgICAgdmFsdWU6XG4gICAgICogICAgICAgICAnMDA6MTE6MjI6MzM6NDQ6NTU6NjY6Nzc6ODg6OTk6QUE6QkI6Q0M6REQ6RUU6RkY6MDA6MTE6MjI6MzM6NDQ6NTU6NjY6Nzc6ODg6OTk6QUE6QkI6Q0M6REQ6RUU6RkYnLFxuICAgICAqICAgICBhbGdvcml0aG06ICdzaGEtMjU2JyxcbiAgICAgKiAgIH1dLFxuICAgICAqIH1cbiAgICAgKi9cbiAgICB0aGlzLndlYlRyYW5zcG9ydENvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgQ29uZmVyZW5jZUNsaWVudFxuICogQGNsYXNzZGVzYyBUaGUgQ29uZmVyZW5jZUNsaWVudCBoYW5kbGVzIFBlZXJDb25uZWN0aW9ucyBiZXR3ZWVuIGNsaWVudCBhbmQgc2VydmVyLiBGb3IgY29uZmVyZW5jZSBjb250cm9sbGluZywgcGxlYXNlIHJlZmVyIHRvIFJFU1QgQVBJIGd1aWRlLlxuICogRXZlbnRzOlxuICpcbiAqIHwgRXZlbnQgTmFtZSAgICAgICAgICAgIHwgQXJndW1lbnQgVHlwZSAgICAgICAgICAgICAgICAgICAgfCBGaXJlZCB3aGVuICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgc3RyZWFtYWRkZWQgICAgICAgICAgIHwgT3d0LkJhc2UuU3RyZWFtRXZlbnQgICAgICAgICAgICAgfCBBIG5ldyBzdHJlYW0gaXMgYXZhaWxhYmxlIGluIHRoZSBjb25mZXJlbmNlLiB8XG4gKiB8IHBhcnRpY2lwYW50am9pbmVkICAgICB8IE93dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50RXZlbnQgIHwgQSBuZXcgcGFydGljaXBhbnQgam9pbmVkIHRoZSBjb25mZXJlbmNlLiB8XG4gKiB8IG1lc3NhZ2VyZWNlaXZlZCAgICAgICB8IE93dC5CYXNlLk1lc3NhZ2VFdmVudCAgICAgICAgICAgIHwgQSBuZXcgbWVzc2FnZSBpcyByZWNlaXZlZC4gfFxuICogfCBzZXJ2ZXJkaXNjb25uZWN0ZWQgICAgfCBPd3QuQmFzZS5Pd3RFdmVudCAgICAgICAgICAgICAgICB8IERpc2Nvbm5lY3RlZCBmcm9tIGNvbmZlcmVuY2Ugc2VydmVyLiB8XG4gKlxuICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHs/T3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudENvbmZpZ3VyYXRpb24gfSBjb25maWcgQ29uZmlndXJhdGlvbiBmb3IgQ29uZmVyZW5jZUNsaWVudC5cbiAqIEBwYXJhbSB7P093dC5Db25mZXJlbmNlLlNpb1NpZ25hbGluZyB9IHNpZ25hbGluZ0ltcGwgU2lnbmFsaW5nIGNoYW5uZWwgaW1wbGVtZW50YXRpb24gZm9yIENvbmZlcmVuY2VDbGllbnQuIFNESyB1c2VzIGRlZmF1bHQgc2lnbmFsaW5nIGNoYW5uZWwgaW1wbGVtZW50YXRpb24gaWYgdGhpcyBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLiBDdXJyZW50bHksIGEgU29ja2V0LklPIHNpZ25hbGluZyBjaGFubmVsIGltcGxlbWVudGF0aW9uIHdhcyBwcm92aWRlZCBhcyBpY3MuY29uZmVyZW5jZS5TaW9TaWduYWxpbmcuIEhvd2V2ZXIsIGl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBkaXJlY3RseSBhY2Nlc3Mgc2lnbmFsaW5nIGNoYW5uZWwgb3IgY3VzdG9taXplIHNpZ25hbGluZyBjaGFubmVsIGZvciBDb25mZXJlbmNlQ2xpZW50IGFzIHRoaXMgdGltZS5cbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZlcmVuY2VDbGllbnQgPSBmdW5jdGlvbihjb25maWcsIHNpZ25hbGluZ0ltcGwpIHtcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldyBFdmVudE1vZHVsZS5FdmVudERpc3BhdGNoZXIoKSk7XG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIGxldCBzaWduYWxpbmdTdGF0ZSA9IFNpZ25hbGluZ1N0YXRlLlJFQURZO1xuICBjb25zdCBzaWduYWxpbmcgPSBzaWduYWxpbmdJbXBsID8gc2lnbmFsaW5nSW1wbCA6IChuZXcgU2lnbmFsaW5nKCkpO1xuICBsZXQgbWU7XG4gIGxldCByb29tO1xuICBjb25zdCByZW1vdGVTdHJlYW1zID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgc3RyZWFtIElELCB2YWx1ZSBpcyBhIFJlbW90ZVN0cmVhbS5cbiAgY29uc3QgcGFydGljaXBhbnRzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgcGFydGljaXBhbnQgSUQsIHZhbHVlIGlzIGEgUGFydGljaXBhbnQgb2JqZWN0LlxuICBjb25zdCBwdWJsaXNoQ2hhbm5lbHMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBNZWRpYVN0cmVhbSdzIElELCB2YWx1ZSBpcyBwYyBjaGFubmVsLlxuICBjb25zdCBjaGFubmVscyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIGNoYW5uZWwncyBpbnRlcm5hbCBJRCwgdmFsdWUgaXMgY2hhbm5lbC5cbiAgbGV0IG1haW5DaGFubmVsID0gbnVsbDsgLy8gTWFpbiBwYyBjaGFubmVsIGZvciB0aGUgY2xpZW50IGFzIHNpbmdsZSBwYyBpcyBkZWZhdWx0LlxuICBsZXQgcXVpY1RyYW5zcG9ydENoYW5uZWw7XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBvblNpZ25hbGluZ01lc3NhZ2VcbiAgICogQGRlc2MgUmVjZWl2ZWQgYSBtZXNzYWdlIGZyb20gY29uZmVyZW5jZSBwb3J0YWwuIERlZmluZWQgaW4gY2xpZW50LXNlcnZlciBwcm90b2NvbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5vdGlmaWNhdGlvbiBOb3RpZmljYXRpb24gdHlwZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgRGF0YSByZWNlaXZlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIG9uU2lnbmFsaW5nTWVzc2FnZShub3RpZmljYXRpb24sIGRhdGEpIHtcbiAgICBpZiAobm90aWZpY2F0aW9uID09PSAnc29hYycgfHwgbm90aWZpY2F0aW9uID09PSAncHJvZ3Jlc3MnKSB7XG4gICAgICBpZiAoY2hhbm5lbHMuaGFzKGRhdGEuaWQpKSB7XG4gICAgICAgIGNoYW5uZWxzLmdldChkYXRhLmlkKS5vbk1lc3NhZ2Uobm90aWZpY2F0aW9uLCBkYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAocXVpY1RyYW5zcG9ydENoYW5uZWwgJiYgcXVpY1RyYW5zcG9ydENoYW5uZWxcbiAgICAgICAgICAuaGFzQ29udGVudFNlc3Npb25JZChkYXRhLmlkKSkge1xuICAgICAgICBxdWljVHJhbnNwb3J0Q2hhbm5lbC5vbk1lc3NhZ2Uobm90aWZpY2F0aW9uLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBhIGNoYW5uZWwgZm9yIGluY29taW5nIGRhdGEuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChub3RpZmljYXRpb24gPT09ICdzdHJlYW0nKSB7XG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdhZGQnKSB7XG4gICAgICAgIGZpcmVTdHJlYW1BZGRlZChkYXRhLmRhdGEpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgZmlyZVN0cmVhbVJlbW92ZWQoZGF0YSk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEuc3RhdHVzID09PSAndXBkYXRlJykge1xuICAgICAgICAvLyBCcm9hZGNhc3QgYXVkaW8vdmlkZW8gdXBkYXRlIHN0YXR1cyB0byBjaGFubmVsIHNvIHNwZWNpZmljIGV2ZW50cyBjYW4gYmUgZmlyZWQgb24gcHVibGljYXRpb24gb3Igc3Vic2NyaXB0aW9uLlxuICAgICAgICBpZiAoZGF0YS5kYXRhLmZpZWxkID09PSAnYXVkaW8uc3RhdHVzJyB8fCBkYXRhLmRhdGEuZmllbGQgPT09XG4gICAgICAgICAgJ3ZpZGVvLnN0YXR1cycpIHtcbiAgICAgICAgICBjaGFubmVscy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICBjLm9uTWVzc2FnZShub3RpZmljYXRpb24sIGRhdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZGF0YS5maWVsZCA9PT0gJ2FjdGl2ZUlucHV0Jykge1xuICAgICAgICAgIGZpcmVBY3RpdmVBdWRpb0lucHV0Q2hhbmdlKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZGF0YS5maWVsZCA9PT0gJ3ZpZGVvLmxheW91dCcpIHtcbiAgICAgICAgICBmaXJlTGF5b3V0Q2hhbmdlKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZGF0YS5maWVsZCA9PT0gJy4nKSB7XG4gICAgICAgICAgdXBkYXRlUmVtb3RlU3RyZWFtKGRhdGEuZGF0YS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ1Vua25vd24gc3RyZWFtIGV2ZW50IGZyb20gTUNVLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub3RpZmljYXRpb24gPT09ICd0ZXh0Jykge1xuICAgICAgZmlyZU1lc3NhZ2VSZWNlaXZlZChkYXRhKTtcbiAgICB9IGVsc2UgaWYgKG5vdGlmaWNhdGlvbiA9PT0gJ3BhcnRpY2lwYW50Jykge1xuICAgICAgZmlyZVBhcnRpY2lwYW50RXZlbnQoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgc2lnbmFsaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2RhdGEnLCAoZXZlbnQpID0+IHtcbiAgICBvblNpZ25hbGluZ01lc3NhZ2UoZXZlbnQubWVzc2FnZS5ub3RpZmljYXRpb24sIGV2ZW50Lm1lc3NhZ2UuZGF0YSk7XG4gIH0pO1xuXG4gIHNpZ25hbGluZy5hZGRFdmVudExpc3RlbmVyKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgIGNsZWFuKCk7XG4gICAgc2lnbmFsaW5nU3RhdGUgPSBTaWduYWxpbmdTdGF0ZS5SRUFEWTtcbiAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50TW9kdWxlLk93dEV2ZW50KCdzZXJ2ZXJkaXNjb25uZWN0ZWQnKSk7XG4gIH0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGZpcmVQYXJ0aWNpcGFudEV2ZW50KGRhdGEpIHtcbiAgICBpZiAoZGF0YS5hY3Rpb24gPT09ICdqb2luJykge1xuICAgICAgZGF0YSA9IGRhdGEuZGF0YTtcbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50ID0gbmV3IFBhcnRpY2lwYW50KGRhdGEuaWQsIGRhdGEucm9sZSwgZGF0YS51c2VyKTtcbiAgICAgIHBhcnRpY2lwYW50cy5zZXQoZGF0YS5pZCwgcGFydGljaXBhbnQpO1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgUGFydGljaXBhbnRFdmVudChcbiAgICAgICAgICAncGFydGljaXBhbnRqb2luZWQnLCB7cGFydGljaXBhbnQ6IHBhcnRpY2lwYW50fSk7XG4gICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5hY3Rpb24gPT09ICdsZWF2ZScpIHtcbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50SWQgPSBkYXRhLmRhdGE7XG4gICAgICBpZiAoIXBhcnRpY2lwYW50cy5oYXMocGFydGljaXBhbnRJZCkpIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoXG4gICAgICAgICAgICAnUmVjZWl2ZWQgbGVhdmUgbWVzc2FnZSBmcm9tIE1DVSBmb3IgYW4gdW5rbm93biBwYXJ0aWNpcGFudC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFydGljaXBhbnQgPSBwYXJ0aWNpcGFudHMuZ2V0KHBhcnRpY2lwYW50SWQpO1xuICAgICAgcGFydGljaXBhbnRzLmRlbGV0ZShwYXJ0aWNpcGFudElkKTtcbiAgICAgIHBhcnRpY2lwYW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50TW9kdWxlLk93dEV2ZW50KCdsZWZ0JykpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGZpcmVNZXNzYWdlUmVjZWl2ZWQoZGF0YSkge1xuICAgIGNvbnN0IG1lc3NhZ2VFdmVudCA9IG5ldyBFdmVudE1vZHVsZS5NZXNzYWdlRXZlbnQoJ21lc3NhZ2VyZWNlaXZlZCcsIHtcbiAgICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcbiAgICAgIG9yaWdpbjogZGF0YS5mcm9tLFxuICAgICAgdG86IGRhdGEudG8sXG4gICAgfSk7XG4gICAgc2VsZi5kaXNwYXRjaEV2ZW50KG1lc3NhZ2VFdmVudCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBmaXJlU3RyZWFtQWRkZWQoaW5mbykge1xuICAgIGNvbnN0IHN0cmVhbSA9IGNyZWF0ZVJlbW90ZVN0cmVhbShpbmZvKTtcbiAgICByZW1vdGVTdHJlYW1zLnNldChzdHJlYW0uaWQsIHN0cmVhbSk7XG4gICAgY29uc3Qgc3RyZWFtRXZlbnQgPSBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbUV2ZW50KCdzdHJlYW1hZGRlZCcsIHtcbiAgICAgIHN0cmVhbTogc3RyZWFtLFxuICAgIH0pO1xuICAgIHNlbGYuZGlzcGF0Y2hFdmVudChzdHJlYW1FdmVudCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBmaXJlU3RyZWFtUmVtb3ZlZChpbmZvKSB7XG4gICAgaWYgKCFyZW1vdGVTdHJlYW1zLmhhcyhpbmZvLmlkKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Nhbm5vdCBmaW5kIHNwZWNpZmljIHJlbW90ZSBzdHJlYW0uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0cmVhbSA9IHJlbW90ZVN0cmVhbXMuZ2V0KGluZm8uaWQpO1xuICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IEV2ZW50TW9kdWxlLk93dEV2ZW50KCdlbmRlZCcpO1xuICAgIHJlbW90ZVN0cmVhbXMuZGVsZXRlKHN0cmVhbS5pZCk7XG4gICAgc3RyZWFtLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gZmlyZUFjdGl2ZUF1ZGlvSW5wdXRDaGFuZ2UoaW5mbykge1xuICAgIGlmICghcmVtb3RlU3RyZWFtcy5oYXMoaW5mby5pZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzcGVjaWZpYyByZW1vdGUgc3RyZWFtLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHJlYW0gPSByZW1vdGVTdHJlYW1zLmdldChpbmZvLmlkKTtcbiAgICBjb25zdCBzdHJlYW1FdmVudCA9IG5ldyBBY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnQoXG4gICAgICAgICdhY3RpdmVhdWRpb2lucHV0Y2hhbmdlJywge1xuICAgICAgICAgIGFjdGl2ZUF1ZGlvSW5wdXRTdHJlYW1JZDogaW5mby5kYXRhLnZhbHVlLFxuICAgICAgICB9KTtcbiAgICBzdHJlYW0uZGlzcGF0Y2hFdmVudChzdHJlYW1FdmVudCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBmdW5jdGlvbiBmaXJlTGF5b3V0Q2hhbmdlKGluZm8pIHtcbiAgICBpZiAoIXJlbW90ZVN0cmVhbXMuaGFzKGluZm8uaWQpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnQ2Fubm90IGZpbmQgc3BlY2lmaWMgcmVtb3RlIHN0cmVhbS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyZWFtID0gcmVtb3RlU3RyZWFtcy5nZXQoaW5mby5pZCk7XG4gICAgY29uc3Qgc3RyZWFtRXZlbnQgPSBuZXcgTGF5b3V0Q2hhbmdlRXZlbnQoXG4gICAgICAgICdsYXlvdXRjaGFuZ2UnLCB7XG4gICAgICAgICAgbGF5b3V0OiBpbmZvLmRhdGEudmFsdWUsXG4gICAgICAgIH0pO1xuICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KHN0cmVhbUV2ZW50KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIHVwZGF0ZVJlbW90ZVN0cmVhbShzdHJlYW1JbmZvKSB7XG4gICAgaWYgKCFyZW1vdGVTdHJlYW1zLmhhcyhzdHJlYW1JbmZvLmlkKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Nhbm5vdCBmaW5kIHNwZWNpZmljIHJlbW90ZSBzdHJlYW0uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0cmVhbSA9IHJlbW90ZVN0cmVhbXMuZ2V0KHN0cmVhbUluZm8uaWQpO1xuICAgIHN0cmVhbS5zZXR0aW5ncyA9IFN0cmVhbVV0aWxzTW9kdWxlLmNvbnZlcnRUb1B1YmxpY2F0aW9uU2V0dGluZ3Moc3RyZWFtSW5mb1xuICAgICAgICAubWVkaWEpO1xuICAgIHN0cmVhbS5leHRyYUNhcGFiaWxpdGllcyA9IFN0cmVhbVV0aWxzTW9kdWxlXG4gICAgICAgIC5jb252ZXJ0VG9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMoXG4gICAgICAgICAgICBzdHJlYW1JbmZvLm1lZGlhKTtcbiAgICBjb25zdCBzdHJlYW1FdmVudCA9IG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgndXBkYXRlZCcpO1xuICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KHN0cmVhbUV2ZW50KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlbW90ZVN0cmVhbShzdHJlYW1JbmZvKSB7XG4gICAgaWYgKHN0cmVhbUluZm8udHlwZSA9PT0gJ21peGVkJykge1xuICAgICAgcmV0dXJuIG5ldyBSZW1vdGVNaXhlZFN0cmVhbShzdHJlYW1JbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGF1ZGlvU291cmNlSW5mbzsgbGV0IHZpZGVvU291cmNlSW5mbztcbiAgICAgIGNvbnN0IGF1ZGlvVHJhY2sgPSBzdHJlYW1JbmZvLm1lZGlhLnRyYWNrc1xuICAgICAgICAgIC5maW5kKCh0KSA9PiB0LnR5cGUgPT09ICdhdWRpbycpO1xuICAgICAgY29uc3QgdmlkZW9UcmFjayA9IHN0cmVhbUluZm8ubWVkaWEudHJhY2tzXG4gICAgICAgICAgLmZpbmQoKHQpID0+IHQudHlwZSA9PT0gJ3ZpZGVvJyk7XG4gICAgICBpZiAoYXVkaW9UcmFjaykge1xuICAgICAgICBhdWRpb1NvdXJjZUluZm8gPSBhdWRpb1RyYWNrLnNvdXJjZTtcbiAgICAgIH1cbiAgICAgIGlmICh2aWRlb1RyYWNrKSB7XG4gICAgICAgIHZpZGVvU291cmNlSW5mbyA9IHZpZGVvVHJhY2suc291cmNlO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YVNvdXJjZUluZm8gPSBzdHJlYW1JbmZvLmRhdGE7XG4gICAgICBjb25zdCBzdHJlYW0gPSBuZXcgU3RyZWFtTW9kdWxlLlJlbW90ZVN0cmVhbShzdHJlYW1JbmZvLmlkLFxuICAgICAgICAgIHN0cmVhbUluZm8uaW5mby5vd25lciwgdW5kZWZpbmVkLCBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbVNvdXJjZUluZm8oXG4gICAgICAgICAgICAgIGF1ZGlvU291cmNlSW5mbywgdmlkZW9Tb3VyY2VJbmZvLCBkYXRhU291cmNlSW5mbyksIHN0cmVhbUluZm8uaW5mb1xuICAgICAgICAgICAgICAuYXR0cmlidXRlcyk7XG4gICAgICBzdHJlYW0uc2V0dGluZ3MgPSBTdHJlYW1VdGlsc01vZHVsZS5jb252ZXJ0VG9QdWJsaWNhdGlvblNldHRpbmdzKFxuICAgICAgICAgIHN0cmVhbUluZm8ubWVkaWEpO1xuICAgICAgc3RyZWFtLmV4dHJhQ2FwYWJpbGl0aWVzID0gU3RyZWFtVXRpbHNNb2R1bGVcbiAgICAgICAgICAuY29udmVydFRvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzKFxuICAgICAgICAgICAgICBzdHJlYW1JbmZvLm1lZGlhKTtcbiAgICAgIHJldHVybiBzdHJlYW07XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gc2VuZFNpZ25hbGluZ01lc3NhZ2UodHlwZSwgbWVzc2FnZSkge1xuICAgIHJldHVybiBzaWduYWxpbmcuc2VuZCh0eXBlLCBtZXNzYWdlKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGNyZWF0ZVNpZ25hbGluZ0ZvckNoYW5uZWwoKSB7XG4gICAgLy8gQ29uc3RydWN0IGFuIHNpZ25hbGluZyBzZW5kZXIvcmVjZWl2ZXIgZm9yIENvbmZlcmVuY2VQZWVyQ29ubmVjdGlvbi5cbiAgICBjb25zdCBzaWduYWxpbmdGb3JDaGFubmVsID0gT2JqZWN0LmNyZWF0ZShFdmVudE1vZHVsZS5FdmVudERpc3BhdGNoZXIpO1xuICAgIHNpZ25hbGluZ0ZvckNoYW5uZWwuc2VuZFNpZ25hbGluZ01lc3NhZ2UgPSBzZW5kU2lnbmFsaW5nTWVzc2FnZTtcbiAgICByZXR1cm4gc2lnbmFsaW5nRm9yQ2hhbm5lbDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGNyZWF0ZVBlZXJDb25uZWN0aW9uQ2hhbm5lbCh0cmFuc3BvcnQpIHtcbiAgICBjb25zdCBzaWduYWxpbmdGb3JDaGFubmVsID0gY3JlYXRlU2lnbmFsaW5nRm9yQ2hhbm5lbCgpO1xuICAgIGNvbnN0IGNoYW5uZWwgPVxuICAgICAgICBuZXcgQ29uZmVyZW5jZVBlZXJDb25uZWN0aW9uQ2hhbm5lbChjb25maWcsIHNpZ25hbGluZ0ZvckNoYW5uZWwpO1xuICAgIGNoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignaWQnLCAobWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWNoYW5uZWxzLmhhcyhtZXNzYWdlRXZlbnQubWVzc2FnZSkpIHtcbiAgICAgICAgY2hhbm5lbHMuc2V0KG1lc3NhZ2VFdmVudC5tZXNzYWdlLCBjaGFubmVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdDaGFubmVsIGFscmVhZHkgZXhpc3RzJywgbWVzc2FnZUV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjaGFubmVsO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgZnVuY3Rpb24gY2xlYW4oKSB7XG4gICAgcGFydGljaXBhbnRzLmNsZWFyKCk7XG4gICAgcmVtb3RlU3RyZWFtcy5jbGVhcigpO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdpbmZvJywge1xuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgZ2V0OiAoKSA9PiB7XG4gICAgICBpZiAoIXJvb20pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IENvbmZlcmVuY2VJbmZvKHJvb20uaWQsIEFycmF5LmZyb20ocGFydGljaXBhbnRzLCAoeCkgPT4geFtcbiAgICAgICAgICAxXSksIEFycmF5LmZyb20ocmVtb3RlU3RyZWFtcywgKHgpID0+IHhbMV0pLCBtZSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBqb2luXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBKb2luIGEgY29uZmVyZW5jZS5cbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VDbGllbnRcbiAgICogQHJldHVybiB7UHJvbWlzZTxDb25mZXJlbmNlSW5mbywgRXJyb3I+fSBSZXR1cm4gYSBwcm9taXNlIHJlc29sdmVkIHdpdGggY3VycmVudCBjb25mZXJlbmNlJ3MgaW5mb3JtYXRpb24gaWYgc3VjY2Vzc2Z1bGx5IGpvaW4gdGhlIGNvbmZlcmVuY2UuIE9yIHJldHVybiBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBhIG5ld2x5IGNyZWF0ZWQgT3d0LkVycm9yIGlmIGZhaWxlZCB0byBqb2luIHRoZSBjb25mZXJlbmNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9rZW5TdHJpbmcgVG9rZW4gaXMgaXNzdWVkIGJ5IGNvbmZlcmVuY2Ugc2VydmVyKG51dmUpLlxuICAgKi9cbiAgdGhpcy5qb2luID0gZnVuY3Rpb24odG9rZW5TdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSBKU09OLnBhcnNlKEJhc2U2NC5kZWNvZGVCYXNlNjQodG9rZW5TdHJpbmcpKTtcbiAgICAgIGNvbnN0IGlzU2VjdXJlZCA9ICh0b2tlbi5zZWN1cmUgPT09IHRydWUpO1xuICAgICAgbGV0IGhvc3QgPSB0b2tlbi5ob3N0O1xuICAgICAgaWYgKHR5cGVvZiBob3N0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcignSW52YWxpZCBob3N0LicpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGhvc3QuaW5kZXhPZignaHR0cCcpID09PSAtMSkge1xuICAgICAgICBob3N0ID0gaXNTZWN1cmVkID8gKCdodHRwczovLycgKyBob3N0KSA6ICgnaHR0cDovLycgKyBob3N0KTtcbiAgICAgIH1cbiAgICAgIGlmIChzaWduYWxpbmdTdGF0ZSAhPT0gU2lnbmFsaW5nU3RhdGUuUkVBRFkpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoJ2Nvbm5lY3Rpb24gc3RhdGUgaW52YWxpZCcpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzaWduYWxpbmdTdGF0ZSA9IFNpZ25hbGluZ1N0YXRlLkNPTk5FQ1RJTkc7XG5cbiAgICAgIGNvbnN0IGxvZ2luSW5mbyA9IHtcbiAgICAgICAgdG9rZW46IHRva2VuU3RyaW5nLFxuICAgICAgICB1c2VyQWdlbnQ6IFV0aWxzLnN5c0luZm8oKSxcbiAgICAgICAgcHJvdG9jb2w6IHByb3RvY29sVmVyc2lvbixcbiAgICAgIH07XG5cbiAgICAgIHNpZ25hbGluZy5jb25uZWN0KGhvc3QsIGlzU2VjdXJlZCwgbG9naW5JbmZvKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIHNpZ25hbGluZ1N0YXRlID0gU2lnbmFsaW5nU3RhdGUuQ09OTkVDVEVEO1xuICAgICAgICByb29tID0gcmVzcC5yb29tO1xuICAgICAgICBpZiAocm9vbS5zdHJlYW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHN0IG9mIHJvb20uc3RyZWFtcykge1xuICAgICAgICAgICAgaWYgKHN0LnR5cGUgPT09ICdtaXhlZCcpIHtcbiAgICAgICAgICAgICAgc3Qudmlld3BvcnQgPSBzdC5pbmZvLmxhYmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3RlU3RyZWFtcy5zZXQoc3QuaWQsIGNyZWF0ZVJlbW90ZVN0cmVhbShzdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcC5yb29tICYmIHJlc3Aucm9vbS5wYXJ0aWNpcGFudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvciAoY29uc3QgcCBvZiByZXNwLnJvb20ucGFydGljaXBhbnRzKSB7XG4gICAgICAgICAgICBwYXJ0aWNpcGFudHMuc2V0KHAuaWQsIG5ldyBQYXJ0aWNpcGFudChwLmlkLCBwLnJvbGUsIHAudXNlcikpO1xuICAgICAgICAgICAgaWYgKHAuaWQgPT09IHJlc3AuaWQpIHtcbiAgICAgICAgICAgICAgbWUgPSBwYXJ0aWNpcGFudHMuZ2V0KHAuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIFdlYlRyYW5zcG9ydCA9PT0gJ2Z1bmN0aW9uJyAmJiB0b2tlbi53ZWJUcmFuc3BvcnRVcmwpIHtcbiAgICAgICAgICBxdWljVHJhbnNwb3J0Q2hhbm5lbCA9IG5ldyBRdWljQ29ubmVjdGlvbihcbiAgICAgICAgICAgICAgdG9rZW4ud2ViVHJhbnNwb3J0VXJsLCByZXNwLndlYlRyYW5zcG9ydFRva2VuLFxuICAgICAgICAgICAgICBjcmVhdGVTaWduYWxpbmdGb3JDaGFubmVsKCksIGNvbmZpZy53ZWJUcmFuc3BvcnRDb25maWd1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25mZXJlbmNlSW5mbyA9IG5ldyBDb25mZXJlbmNlSW5mbyhcbiAgICAgICAgICAgIHJlc3Aucm9vbS5pZCwgQXJyYXkuZnJvbShwYXJ0aWNpcGFudHMudmFsdWVzKCkpLFxuICAgICAgICAgICAgQXJyYXkuZnJvbShyZW1vdGVTdHJlYW1zLnZhbHVlcygpKSwgbWUpO1xuICAgICAgICBpZiAocXVpY1RyYW5zcG9ydENoYW5uZWwpIHtcbiAgICAgICAgICBxdWljVHJhbnNwb3J0Q2hhbm5lbC5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGNvbmZlcmVuY2VJbmZvKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGNvbmZlcmVuY2VJbmZvKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgc2lnbmFsaW5nU3RhdGUgPSBTaWduYWxpbmdTdGF0ZS5SRUFEWTtcbiAgICAgICAgcmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBwdWJsaXNoXG4gICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBQdWJsaXNoIGEgTG9jYWxTdHJlYW0gdG8gY29uZmVyZW5jZSBzZXJ2ZXIuIE90aGVyIHBhcnRpY2lwYW50cyB3aWxsIGJlIGFibGUgdG8gc3Vic2NyaWJlIHRoaXMgc3RyZWFtIHdoZW4gaXQgaXMgc3VjY2Vzc2Z1bGx5IHB1Ymxpc2hlZC5cbiAgICogQHBhcmFtIHtPd3QuQmFzZS5Mb2NhbFN0cmVhbX0gc3RyZWFtIFRoZSBzdHJlYW0gdG8gYmUgcHVibGlzaGVkLlxuICAgKiBAcGFyYW0ge093dC5CYXNlLlB1Ymxpc2hPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHB1YmxpY2F0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB2aWRlb0NvZGVjcyBWaWRlbyBjb2RlYyBuYW1lcyBmb3IgcHVibGlzaGluZy4gVmFsaWQgdmFsdWVzIGFyZSAnVlA4JywgJ1ZQOScgYW5kICdIMjY0Jy4gVGhpcyBwYXJhbWV0ZXIgb25seSB2YWxpZCB3aGVuIG9wdGlvbnMudmlkZW8gaXMgUlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzLiBQdWJsaXNoaW5nIHdpdGggUlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzIGlzIGFuIGV4cGVyaW1lbnRhbCBmZWF0dXJlLiBUaGlzIHBhcmFtZXRlciBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxQdWJsaWNhdGlvbiwgRXJyb3I+fSBSZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBhIG5ld2x5IGNyZWF0ZWQgUHVibGljYXRpb24gb25jZSBzcGVjaWZpYyBzdHJlYW0gaXMgc3VjY2Vzc2Z1bGx5IHB1Ymxpc2hlZCwgb3IgcmVqZWN0ZWQgd2l0aCBhIG5ld2x5IGNyZWF0ZWQgRXJyb3IgaWYgc3RyZWFtIGlzIGludmFsaWQgb3Igb3B0aW9ucyBjYW5ub3QgYmUgc2F0aXNmaWVkLiBTdWNjZXNzZnVsbHkgcHVibGlzaGVkIG1lYW5zIFBlZXJDb25uZWN0aW9uIGlzIGVzdGFibGlzaGVkIGFuZCBzZXJ2ZXIgaXMgYWJsZSB0byBwcm9jZXNzIG1lZGlhIGRhdGEuXG4gICAqL1xuICB0aGlzLnB1Ymxpc2ggPSBmdW5jdGlvbihzdHJlYW0sIG9wdGlvbnMsIHZpZGVvQ29kZWNzKSB7XG4gICAgaWYgKCEoc3RyZWFtIGluc3RhbmNlb2YgU3RyZWFtTW9kdWxlLkxvY2FsU3RyZWFtKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoJ0ludmFsaWQgc3RyZWFtLicpKTtcbiAgICB9XG4gICAgaWYgKHN0cmVhbS5zb3VyY2UuZGF0YSkge1xuICAgICAgcmV0dXJuIHF1aWNUcmFuc3BvcnRDaGFubmVsLnB1Ymxpc2goc3RyZWFtKTtcbiAgICB9XG4gICAgaWYgKHB1Ymxpc2hDaGFubmVscy5oYXMoc3RyZWFtLm1lZGlhU3RyZWFtLmlkKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBDb25mZXJlbmNlRXJyb3IoXG4gICAgICAgICAgJ0Nhbm5vdCBwdWJsaXNoIGEgcHVibGlzaGVkIHN0cmVhbS4nKSk7XG4gICAgfVxuICAgIGlmICghbWFpbkNoYW5uZWwpIHtcbiAgICAgIG1haW5DaGFubmVsID0gY3JlYXRlUGVlckNvbm5lY3Rpb25DaGFubmVsKCk7XG4gICAgICBtYWluQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgbWFpbkNoYW5uZWwgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYWluQ2hhbm5lbC5wdWJsaXNoKHN0cmVhbSwgb3B0aW9ucywgdmlkZW9Db2RlY3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc3Vic2NyaWJlXG4gICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBTdWJzY3JpYmUgYSBSZW1vdGVTdHJlYW0gZnJvbSBjb25mZXJlbmNlIHNlcnZlci5cbiAgICogQHBhcmFtIHtPd3QuQmFzZS5SZW1vdGVTdHJlYW19IHN0cmVhbSBUaGUgc3RyZWFtIHRvIGJlIHN1YnNjcmliZWQuXG4gICAqIEBwYXJhbSB7T3d0LkNvbmZlcmVuY2UuU3Vic2NyaWJlT3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBzdWJzY3JpcHRpb24uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8U3Vic2NyaXB0aW9uLCBFcnJvcj59IFJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBTdWJzY3JpcHRpb24gb25jZSBzcGVjaWZpYyBzdHJlYW0gaXMgc3VjY2Vzc2Z1bGx5IHN1YnNjcmliZWQsIG9yIHJlamVjdGVkIHdpdGggYSBuZXdseSBjcmVhdGVkIEVycm9yIGlmIHN0cmVhbSBpcyBpbnZhbGlkIG9yIG9wdGlvbnMgY2Fubm90IGJlIHNhdGlzZmllZC4gU3VjY2Vzc2Z1bGx5IHN1YnNjcmliZWQgbWVhbnMgUGVlckNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQgYW5kIHNlcnZlciB3YXMgc3RhcnRlZCB0byBzZW5kIG1lZGlhIGRhdGEuXG4gICAqL1xuICB0aGlzLnN1YnNjcmliZSA9IGZ1bmN0aW9uKHN0cmVhbSwgb3B0aW9ucykge1xuICAgIGlmICghKHN0cmVhbSBpbnN0YW5jZW9mIFN0cmVhbU1vZHVsZS5SZW1vdGVTdHJlYW0pKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcignSW52YWxpZCBzdHJlYW0uJykpO1xuICAgIH1cbiAgICBpZiAoc3RyZWFtLnNvdXJjZS5kYXRhKSB7XG4gICAgICBpZiAoc3RyZWFtLnNvdXJjZS5hdWRpbyB8fCBzdHJlYW0uc291cmNlLnZpZGVvKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgc291cmNlIGluZm8uIEEgcmVtb3RlIHN0cmVhbSBpcyBlaXRoZXIgYSBkYXRhIHN0cmVhbSBvciAnICtcbiAgICAgICAgICAgICdhIG1lZGlhIHN0cmVhbS4nKSk7XG4gICAgICB9XG4gICAgICBpZiAocXVpY1RyYW5zcG9ydENoYW5uZWwpIHtcbiAgICAgICAgcmV0dXJuIHF1aWNUcmFuc3BvcnRDaGFubmVsLnN1YnNjcmliZShzdHJlYW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ1dlYlRyYW5zcG9ydCBpcyBub3Qgc3VwcG9ydGVkLicpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFtYWluQ2hhbm5lbCkge1xuICAgICAgbWFpbkNoYW5uZWwgPSBjcmVhdGVQZWVyQ29ubmVjdGlvbkNoYW5uZWwoKTtcbiAgICAgIG1haW5DaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICBtYWluQ2hhbm5lbCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1haW5DaGFubmVsLnN1YnNjcmliZShzdHJlYW0sIG9wdGlvbnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc2VuZFxuICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgU2VuZCBhIHRleHQgbWVzc2FnZSB0byBhIHBhcnRpY2lwYW50IG9yIGFsbCBwYXJ0aWNpcGFudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIE1lc3NhZ2UgdG8gYmUgc2VudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcnRpY2lwYW50SWQgUmVjZWl2ZXIgb2YgdGhpcyBtZXNzYWdlLiBNZXNzYWdlIHdpbGwgYmUgc2VudCB0byBhbGwgcGFydGljaXBhbnRzIGlmIHBhcnRpY2lwYW50SWQgaXMgdW5kZWZpbmVkLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQsIEVycm9yPn0gUmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdoZW4gY29uZmVyZW5jZSBzZXJ2ZXIgcmVjZWl2ZWQgY2VydGFpbiBtZXNzYWdlLlxuICAgKi9cbiAgdGhpcy5zZW5kID0gZnVuY3Rpb24obWVzc2FnZSwgcGFydGljaXBhbnRJZCkge1xuICAgIGlmIChwYXJ0aWNpcGFudElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcnRpY2lwYW50SWQgPSAnYWxsJztcbiAgICB9XG4gICAgcmV0dXJuIHNlbmRTaWduYWxpbmdNZXNzYWdlKCd0ZXh0Jywge3RvOiBwYXJ0aWNpcGFudElkLCBtZXNzYWdlOiBtZXNzYWdlfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBsZWF2ZVxuICAgKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUNsaWVudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgTGVhdmUgYSBjb25mZXJlbmNlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQsIEVycm9yPn0gUmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGggdW5kZWZpbmVkIG9uY2UgdGhlIGNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGVkLlxuICAgKi9cbiAgdGhpcy5sZWF2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzaWduYWxpbmcuZGlzY29ubmVjdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgY2xlYW4oKTtcbiAgICAgIHNpZ25hbGluZ1N0YXRlID0gU2lnbmFsaW5nU3RhdGUuUkVBRFk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVTZW5kU3RyZWFtXG4gICAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlQ2xpZW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBDcmVhdGUgYW4gb3V0Z29pbmcgc3RyZWFtLiBPbmx5IGF2YWlsYWJsZSB3aGVuIFdlYlRyYW5zcG9ydCBpcyBzdXBwb3J0ZWQgYnkgdXNlcidzIGJyb3dzZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8U2VuZFN0cmVhbSwgRXJyb3I+fSBSZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBhIFNlbmRTdHJlYW0gb25jZSBzdHJlYW0gaXMgY3JlYXRlZC5cbiAgICovXG4gIGlmIChRdWljQ29ubmVjdGlvbikge1xuICAgIHRoaXMuY3JlYXRlU2VuZFN0cmVhbSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFxdWljVHJhbnNwb3J0Q2hhbm5lbCkge1xuICAgICAgICAvLyBUcnkgdG8gY3JlYXRlIGEgbmV3IG9uZSBvciBjb25zaWRlciBpdCBhcyBjbG9zZWQ/XG4gICAgICAgIHRocm93IG5ldyBDb25mZXJlbmNlRXJyb3IoJ05vIFFVSUMgY29ubmVjdGlvbiBhdmFpbGFibGUuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcXVpY1RyYW5zcG9ydENoYW5uZWwuY3JlYXRlU2VuZFN0cmVhbSgpO1xuICAgIH07XG4gIH1cbn07XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAY2xhc3MgQ29uZmVyZW5jZUVycm9yXG4gKiBAY2xhc3NEZXNjIFRoZSBDb25mZXJlbmNlRXJyb3Igb2JqZWN0IHJlcHJlc2VudHMgYW4gZXJyb3IgaW4gY29uZmVyZW5jZSBtb2RlLlxuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25mZXJlbmNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7Q29uZmVyZW5jZUNsaWVudH0gZnJvbSAnLi9jbGllbnQuanMnO1xuZXhwb3J0IHtTaW9TaWduYWxpbmd9IGZyb20gJy4vc2lnbmFsaW5nLmpzJztcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBDb25mZXJlbmNlSW5mb1xuICogQGNsYXNzRGVzYyBJbmZvcm1hdGlvbiBmb3IgYSBjb25mZXJlbmNlLlxuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25mZXJlbmNlSW5mbyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGlkLCBwYXJ0aWNpcGFudHMsIHJlbW90ZVN0cmVhbXMsIG15SW5mbykge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQ29uZmVyZW5jZUluZm9cbiAgICAgKiBAZGVzYyBDb25mZXJlbmNlIElELlxuICAgICAqL1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheTxPd3QuQ29uZmVyZW5jZS5QYXJ0aWNpcGFudD59IHBhcnRpY2lwYW50c1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5Db25mZXJlbmNlSW5mb1xuICAgICAqIEBkZXNjIFBhcnRpY2lwYW50cyBpbiB0aGUgY29uZmVyZW5jZS5cbiAgICAgKi9cbiAgICB0aGlzLnBhcnRpY2lwYW50cyA9IHBhcnRpY2lwYW50cztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheTxPd3QuQmFzZS5SZW1vdGVTdHJlYW0+fSByZW1vdGVTdHJlYW1zXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VJbmZvXG4gICAgICogQGRlc2MgU3RyZWFtcyBwdWJsaXNoZWQgYnkgcGFydGljaXBhbnRzLiBJdCBhbHNvIGluY2x1ZGVzIHN0cmVhbXMgcHVibGlzaGVkIGJ5IGN1cnJlbnQgdXNlci5cbiAgICAgKi9cbiAgICB0aGlzLnJlbW90ZVN0cmVhbXMgPSByZW1vdGVTdHJlYW1zO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge093dC5CYXNlLlBhcnRpY2lwYW50fSBzZWxmXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLkNvbmZlcmVuY2VJbmZvXG4gICAgICovXG4gICAgdGhpcy5zZWxmID0gbXlJbmZvO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgU3RyZWFtTW9kdWxlIGZyb20gJy4uL2Jhc2Uvc3RyZWFtLmpzJztcbmltcG9ydCAqIGFzIFN0cmVhbVV0aWxzTW9kdWxlIGZyb20gJy4vc3RyZWFtdXRpbHMuanMnO1xuaW1wb3J0IHtPd3RFdmVudH0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlbW90ZU1peGVkU3RyZWFtXG4gKiBAY2xhc3NEZXNjIE1peGVkIHN0cmVhbSBmcm9tIGNvbmZlcmVuY2Ugc2VydmVyLlxuICogRXZlbnRzOlxuICpcbiAqIHwgRXZlbnQgTmFtZSAgICAgICAgICAgICB8IEFyZ3VtZW50IFR5cGUgICAgfCBGaXJlZCB3aGVuICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYWN0aXZlYXVkaW9pbnB1dGNoYW5nZSB8IEV2ZW50ICAgICAgICAgICAgfCBBdWRpbyBhY3RpdmVuZXNzIG9mIGlucHV0IHN0cmVhbSAob2YgdGhlIG1peGVkIHN0cmVhbSkgaXMgY2hhbmdlZC4gfFxuICogfCBsYXlvdXRjaGFuZ2UgICAgICAgICAgIHwgRXZlbnQgICAgICAgICAgICB8IFZpZGVvJ3MgbGF5b3V0IGhhcyBiZWVuIGNoYW5nZWQuIEl0IHVzdWFsbHkgaGFwcGVucyB3aGVuIGEgbmV3IHZpZGVvIGlzIG1peGVkIGludG8gdGhlIHRhcmdldCBtaXhlZCBzdHJlYW0gb3IgYW4gZXhpc3RpbmcgdmlkZW8gaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIG1peGVkIHN0cmVhbS4gfFxuICpcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuUmVtb3RlU3RyZWFtXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdGVNaXhlZFN0cmVhbSBleHRlbmRzIFN0cmVhbU1vZHVsZS5SZW1vdGVTdHJlYW0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihpbmZvKSB7XG4gICAgaWYgKGluZm8udHlwZSAhPT0gJ21peGVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTm90IGEgbWl4ZWQgc3RyZWFtJyk7XG4gICAgfVxuICAgIHN1cGVyKGluZm8uaWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbVNvdXJjZUluZm8oXG4gICAgICAgICdtaXhlZCcsICdtaXhlZCcpKTtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSBTdHJlYW1VdGlsc01vZHVsZS5jb252ZXJ0VG9QdWJsaWNhdGlvblNldHRpbmdzKGluZm8ubWVkaWEpO1xuXG4gICAgdGhpcy5leHRyYUNhcGFiaWxpdGllcyA9XG4gICAgICAgIFN0cmVhbVV0aWxzTW9kdWxlLmNvbnZlcnRUb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyhpbmZvLm1lZGlhKTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBBY3RpdmVBdWRpb0lucHV0Q2hhbmdlRXZlbnRcbiAqIEBjbGFzc0Rlc2MgQ2xhc3MgQWN0aXZlQXVkaW9JbnB1dENoYW5nZUV2ZW50IHJlcHJlc2VudHMgYW4gYWN0aXZlIGF1ZGlvIGlucHV0IGNoYW5nZSBldmVudC5cbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgQWN0aXZlQXVkaW9JbnB1dENoYW5nZUV2ZW50IGV4dGVuZHMgT3d0RXZlbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpbml0KSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBhY3RpdmVBdWRpb0lucHV0U3RyZWFtSWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQWN0aXZlQXVkaW9JbnB1dENoYW5nZUV2ZW50XG4gICAgICogQGRlc2MgVGhlIElEIG9mIGlucHV0IHN0cmVhbShvZiB0aGUgbWl4ZWQgc3RyZWFtKSB3aG9zZSBhdWRpbyBpcyBhY3RpdmUuXG4gICAgICovXG4gICAgdGhpcy5hY3RpdmVBdWRpb0lucHV0U3RyZWFtSWQgPSBpbml0LmFjdGl2ZUF1ZGlvSW5wdXRTdHJlYW1JZDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBMYXlvdXRDaGFuZ2VFdmVudFxuICogQGNsYXNzRGVzYyBDbGFzcyBMYXlvdXRDaGFuZ2VFdmVudCByZXByZXNlbnRzIGFuIHZpZGVvIGxheW91dCBjaGFuZ2UgZXZlbnQuXG4gKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIExheW91dENoYW5nZUV2ZW50IGV4dGVuZHMgT3d0RXZlbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpbml0KSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7b2JqZWN0fSBsYXlvdXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuTGF5b3V0Q2hhbmdlRXZlbnRcbiAgICAgKiBAZGVzYyBDdXJyZW50IHZpZGVvJ3MgbGF5b3V0LiBJdCdzIGFuIGFycmF5IG9mIG1hcCB3aGljaCBtYXBzIGVhY2ggc3RyZWFtIHRvIGEgcmVnaW9uLlxuICAgICAqL1xuICAgIHRoaXMubGF5b3V0ID0gaW5pdC5sYXlvdXQ7XG4gIH1cbn1cblxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgKiBhcyBFdmVudE1vZHVsZSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBQYXJ0aWNpcGFudFxuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFRoZSBQYXJ0aWNpcGFudCBkZWZpbmVzIGEgcGFydGljaXBhbnQgaW4gYSBjb25mZXJlbmNlLlxuICogRXZlbnRzOlxuICpcbiAqIHwgRXZlbnQgTmFtZSAgICAgIHwgQXJndW1lbnQgVHlwZSAgICAgIHwgRmlyZWQgd2hlbiAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBsZWZ0ICAgICAgICAgICAgfCBPd3QuQmFzZS5Pd3RFdmVudCAgfCBUaGUgcGFydGljaXBhbnQgbGVmdCB0aGUgY29uZmVyZW5jZS4gfFxuICpcbiAqIEBleHRlbmRzIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgUGFydGljaXBhbnQgZXh0ZW5kcyBFdmVudE1vZHVsZS5FdmVudERpc3BhdGNoZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihpZCwgcm9sZSwgdXNlcklkKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlBhcnRpY2lwYW50XG4gICAgICogQGRlc2MgVGhlIElEIG9mIHRoZSBwYXJ0aWNpcGFudC4gSXQgdmFyaWVzIHdoZW4gYSBzaW5nbGUgdXNlciBqb2luIGRpZmZlcmVudCBjb25mZXJlbmNlcy5cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBpZCxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHJvbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuUGFydGljaXBhbnRcbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3JvbGUnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHJvbGUsXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSB1c2VySWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuUGFydGljaXBhbnRcbiAgICAgKiBAZGVzYyBUaGUgdXNlciBJRCBvZiB0aGUgcGFydGljaXBhbnQuIEl0IGNhbiBiZSBpbnRlZ3JhdGVkIGludG8gZXhpc3RpbmcgYWNjb3VudCBtYW5hZ2VtZW50IHN5c3RlbS5cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3VzZXJJZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdXNlcklkLFxuICAgIH0pO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MgKi9cbi8qIGdsb2JhbCBQcm9taXNlLCBNYXAsIFdlYlRyYW5zcG9ydCwgVWludDhBcnJheSwgVWludDMyQXJyYXksIFRleHRFbmNvZGVyICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5pbXBvcnQge1B1YmxpY2F0aW9ufSBmcm9tICcuLi9iYXNlL3B1YmxpY2F0aW9uLmpzJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuL3N1YnNjcmlwdGlvbi5qcyc7XG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnLi4vYmFzZS9iYXNlNjQuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBRdWljQ29ubmVjdGlvblxuICogQGNsYXNzRGVzYyBBIGNoYW5uZWwgZm9yIGEgUVVJQyB0cmFuc3BvcnQgYmV0d2VlbiBjbGllbnQgYW5kIGNvbmZlcmVuY2VcbiAqIHNlcnZlci5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWljQ29ubmVjdGlvbiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGB0b2tlblN0cmluZ2AgaXMgYSBiYXNlNjQgc3RyaW5nIG9mIHRoZSB0b2tlbiBvYmplY3QuIEl0J3MgaW4gdGhlIHJldHVyblxuICAvLyB2YWx1ZSBvZiBgQ29uZmVyZW5jZUNsaWVudC5qb2luYC5cbiAgY29uc3RydWN0b3IodXJsLCB0b2tlblN0cmluZywgc2lnbmFsaW5nLCB3ZWJUcmFuc3BvcnRPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl90b2tlblN0cmluZyA9IHRva2VuU3RyaW5nO1xuICAgIHRoaXMuX3Rva2VuID0gSlNPTi5wYXJzZShCYXNlNjQuZGVjb2RlQmFzZTY0KHRva2VuU3RyaW5nKSk7XG4gICAgdGhpcy5fc2lnbmFsaW5nID0gc2lnbmFsaW5nO1xuICAgIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcXVpY1N0cmVhbXMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBwdWJsaWNhdGlvbiBvciBzdWJzY3JpcHRpb24gSUQuXG4gICAgdGhpcy5fcXVpY1RyYW5zcG9ydCA9IG5ldyBXZWJUcmFuc3BvcnQodXJsLCB3ZWJUcmFuc3BvcnRPcHRpb25zKTtcbiAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIHN1YnNjcmlwdGlvbiBJRC5cbiAgICB0aGlzLl90cmFuc3BvcnRJZCA9IHRoaXMuX3Rva2VuLnRyYW5zcG9ydElkO1xuICAgIHRoaXMuX2luaXRSZWNlaXZlU3RyZWFtUmVhZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIG9uTWVzc2FnZVxuICAgKiBAZGVzYyBSZWNlaXZlZCBhIG1lc3NhZ2UgZnJvbSBjb25mZXJlbmNlIHBvcnRhbC4gRGVmaW5lZCBpbiBjbGllbnQtc2VydmVyXG4gICAqIHByb3RvY29sLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbiB0eXBlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSBNZXNzYWdlIHJlY2VpdmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgb25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgbWVzc2FnZSkge1xuICAgIHN3aXRjaCAobm90aWZpY2F0aW9uKSB7XG4gICAgICBjYXNlICdwcm9ncmVzcyc6XG4gICAgICAgIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3NvYWMnKSB7XG4gICAgICAgICAgdGhpcy5fc29hY0hhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3JlYWR5Jykge1xuICAgICAgICAgIHRoaXMuX3JlYWR5SGFuZGxlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgdGhpcy5fZXJyb3JIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJlYW0nOlxuICAgICAgICB0aGlzLl9vblN0cmVhbUV2ZW50KG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdVbmtub3duIG5vdGlmaWNhdGlvbiBmcm9tIE1DVS4nKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBpbml0KCkge1xuICAgIGF3YWl0IHRoaXMuX2F1dGhlbnRpY2F0ZSh0aGlzLl90b2tlblN0cmluZyk7XG4gIH1cblxuICBhc3luYyBfaW5pdFJlY2VpdmVTdHJlYW1SZWFkZXIoKSB7XG4gICAgY29uc3QgcmVjZWl2ZVN0cmVhbVJlYWRlciA9XG4gICAgICAgIHRoaXMuX3F1aWNUcmFuc3BvcnQuaW5jb21pbmdCaWRpcmVjdGlvbmFsU3RyZWFtcy5nZXRSZWFkZXIoKTtcbiAgICBMb2dnZXIuaW5mbygnUmVhZGVyOiAnICsgcmVjZWl2ZVN0cmVhbVJlYWRlcik7XG4gICAgbGV0IHJlY2VpdmluZ0RvbmUgPSBmYWxzZTtcbiAgICB3aGlsZSAoIXJlY2VpdmluZ0RvbmUpIHtcbiAgICAgIGNvbnN0IHt2YWx1ZTogcmVjZWl2ZVN0cmVhbSwgZG9uZTogcmVhZGluZ1JlY2VpdmVTdHJlYW1zRG9uZX0gPVxuICAgICAgICAgIGF3YWl0IHJlY2VpdmVTdHJlYW1SZWFkZXIucmVhZCgpO1xuICAgICAgTG9nZ2VyLmluZm8oJ05ldyBzdHJlYW0gcmVjZWl2ZWQnKTtcbiAgICAgIGlmIChyZWFkaW5nUmVjZWl2ZVN0cmVhbXNEb25lKSB7XG4gICAgICAgIHJlY2VpdmluZ0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNodW5rUmVhZGVyID0gcmVjZWl2ZVN0cmVhbS5yZWFkYWJsZS5nZXRSZWFkZXIoKTtcbiAgICAgIGNvbnN0IHt2YWx1ZTogdXVpZCwgZG9uZTogcmVhZGluZ0NodW5rc0RvbmV9ID0gYXdhaXQgY2h1bmtSZWFkZXIucmVhZCgpO1xuICAgICAgaWYgKHJlYWRpbmdDaHVua3NEb25lKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcignU3RyZWFtIGNsb3NlZCB1bmV4cGVjdGVkbHkuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh1dWlkLmxlbmd0aCAhPSAxNikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoJ1VuZXhwZWN0ZWQgbGVuZ3RoIGZvciBVVUlELicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjaHVua1JlYWRlci5yZWxlYXNlTG9jaygpO1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uSWQgPSB0aGlzLl91aW50OEFycmF5VG9VdWlkKHV1aWQpO1xuICAgICAgdGhpcy5fcXVpY1N0cmVhbXMuc2V0KHN1YnNjcmlwdGlvbklkLCByZWNlaXZlU3RyZWFtKTtcbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5oYXMoc3Vic2NyaXB0aW9uSWQpKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uSWQsIHJlY2VpdmVTdHJlYW0pO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVQcm9taXNlcy5nZXQoc3Vic2NyaXB0aW9uSWQpLnJlc29sdmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY3JlYXRlU3Vic2NyaXB0aW9uKGlkLCByZWNlaXZlU3RyZWFtKSB7XG4gICAgLy8gVE9ETzogSW5jb21wbGV0ZSBzdWJzY3JpcHRpb24uXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbihpZCwgKCkgPT4ge1xuICAgICAgcmVjZWl2ZVN0cmVhbS5hYm9ydFJlYWRpbmcoKTtcbiAgICB9KTtcbiAgICBzdWJzY3JpcHRpb24uc3RyZWFtID0gcmVjZWl2ZVN0cmVhbTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICB9XG5cbiAgYXN5bmMgX2F1dGhlbnRpY2F0ZSh0b2tlbikge1xuICAgIGF3YWl0IHRoaXMuX3F1aWNUcmFuc3BvcnQucmVhZHk7XG4gICAgY29uc3QgcXVpY1N0cmVhbSA9IGF3YWl0IHRoaXMuX3F1aWNUcmFuc3BvcnQuY3JlYXRlQmlkaXJlY3Rpb25hbFN0cmVhbSgpO1xuICAgIGNvbnN0IGNodW5rUmVhZGVyID0gcXVpY1N0cmVhbS5yZWFkYWJsZS5nZXRSZWFkZXIoKTtcbiAgICBjb25zdCB3cml0ZXIgPSBxdWljU3RyZWFtLndyaXRhYmxlLmdldFdyaXRlcigpO1xuICAgIGF3YWl0IHdyaXRlci5yZWFkeTtcbiAgICAvLyAxMjggYml0IG9mIHplcm8gaW5kaWNhdGVzIHRoaXMgaXMgYSBzdHJlYW0gZm9yIHNpZ25hbGluZy5cbiAgICB3cml0ZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoMTYpKTtcbiAgICAvLyBTZW5kIHRva2VuIGFzIGRlc2NyaWJlZCBpblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdlYnJ0Yy10b29sa2l0L293dC1zZXJ2ZXIvYmxvYi8yMGU4YWFkMjE2Y2M0NDYwOTVmNjNjNDA5MzM5YzM0YzdlZTc3MGVlL2RvYy9kZXNpZ24vcXVpYy10cmFuc3BvcnQtcGF5bG9hZC1mb3JtYXQubWQuXG4gICAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgIGNvbnN0IGVuY29kZWRUb2tlbiA9IGVuY29kZXIuZW5jb2RlKHRva2VuKTtcbiAgICB3cml0ZXIud3JpdGUoVWludDMyQXJyYXkub2YoZW5jb2RlZFRva2VuLmxlbmd0aCkpO1xuICAgIHdyaXRlci53cml0ZShlbmNvZGVkVG9rZW4pO1xuICAgIC8vIFNlcnZlciByZXR1cm5zIHRyYW5zcG9ydCBJRCBhcyBhbiBhY2suIElnbm9yZSBpdCBoZXJlLlxuICAgIGF3YWl0IGNodW5rUmVhZGVyLnJlYWQoKTtcbiAgICBMb2dnZXIuaW5mbygnQXV0aGVudGljYXRpb24gc3VjY2Vzcy4nKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVNlbmRTdHJlYW0oKSB7XG4gICAgYXdhaXQgdGhpcy5fcXVpY1RyYW5zcG9ydC5yZWFkeTtcbiAgICBjb25zdCBxdWljU3RyZWFtID0gYXdhaXQgdGhpcy5fcXVpY1RyYW5zcG9ydC5jcmVhdGVCaWRpcmVjdGlvbmFsU3RyZWFtKCk7XG4gICAgcmV0dXJuIHF1aWNTdHJlYW07XG4gIH1cblxuICBhc3luYyBjcmVhdGVTZW5kU3RyZWFtMShzZXNzaW9uSWQpIHtcbiAgICBMb2dnZXIuaW5mbygnQ3JlYXRlIHN0cmVhbS4nKTtcbiAgICBhd2FpdCB0aGlzLl9xdWljVHJhbnNwb3J0LnJlYWR5O1xuICAgIC8vIFRPRE86IFBvdGVudGlhbCBmYWlsdXJlIGJlY2F1c2Ugb2YgcHVibGljYXRpb24gc3RyZWFtIGlzIGNyZWF0ZWQgZmFzdGVyXG4gICAgLy8gdGhhbiBzaWduYWxpbmcgc3RyZWFtKGNyZWF0ZWQgYnkgdGhlIDFzdCBjYWxsIHRvIGluaXRpYXRlUHVibGljYXRpb24pLlxuICAgIGNvbnN0IHB1YmxpY2F0aW9uSWQgPSBhd2FpdCB0aGlzLl9pbml0aWF0ZVB1YmxpY2F0aW9uKCk7XG4gICAgY29uc3QgcXVpY1N0cmVhbSA9IGF3YWl0IHRoaXMuX3F1aWNUcmFuc3BvcnQuY3JlYXRlU2VuZFN0cmVhbSgpO1xuICAgIGNvbnN0IHdyaXRlciA9IHF1aWNTdHJlYW0ud3JpdGFibGUuZ2V0V3JpdGVyKCk7XG4gICAgYXdhaXQgd3JpdGVyLnJlYWR5O1xuICAgIHdyaXRlci53cml0ZSh0aGlzLl91dWlkVG9VaW50OEFycmF5KHB1YmxpY2F0aW9uSWQpKTtcbiAgICB3cml0ZXIucmVsZWFzZUxvY2soKTtcbiAgICB0aGlzLl9xdWljU3RyZWFtcy5zZXQocHVibGljYXRpb25JZCwgcXVpY1N0cmVhbSk7XG4gICAgcmV0dXJuIHF1aWNTdHJlYW07XG4gIH1cblxuICBhc3luYyBwdWJsaXNoKHN0cmVhbSkge1xuICAgIC8vIFRPRE86IEF2b2lkIGEgc3RyZWFtIHRvIGJlIHB1Ymxpc2hlZCB0d2ljZS4gVGhlIGZpcnN0IDE2IGJpdCBkYXRhIHNlbmQgdG9cbiAgICAvLyBzZXJ2ZXIgbXVzdCBiZSBpdCdzIHB1YmxpY2F0aW9uIElELlxuICAgIC8vIFRPRE86IFBvdGVudGlhbCBmYWlsdXJlIGJlY2F1c2Ugb2YgcHVibGljYXRpb24gc3RyZWFtIGlzIGNyZWF0ZWQgZmFzdGVyXG4gICAgLy8gdGhhbiBzaWduYWxpbmcgc3RyZWFtKGNyZWF0ZWQgYnkgdGhlIDFzdCBjYWxsIHRvIGluaXRpYXRlUHVibGljYXRpb24pLlxuICAgIGNvbnN0IHB1YmxpY2F0aW9uSWQgPSBhd2FpdCB0aGlzLl9pbml0aWF0ZVB1YmxpY2F0aW9uKCk7XG4gICAgY29uc3QgcXVpY1N0cmVhbSA9IHN0cmVhbS5zdHJlYW07XG4gICAgY29uc3Qgd3JpdGVyID0gcXVpY1N0cmVhbS53cml0YWJsZS5nZXRXcml0ZXIoKTtcbiAgICBhd2FpdCB3cml0ZXIucmVhZHk7XG4gICAgd3JpdGVyLndyaXRlKHRoaXMuX3V1aWRUb1VpbnQ4QXJyYXkocHVibGljYXRpb25JZCkpO1xuICAgIHdyaXRlci5yZWxlYXNlTG9jaygpO1xuICAgIExvZ2dlci5pbmZvKCdwdWJsaXNoIGlkJyk7XG4gICAgdGhpcy5fcXVpY1N0cmVhbXMuc2V0KHB1YmxpY2F0aW9uSWQsIHF1aWNTdHJlYW0pO1xuICAgIGNvbnN0IHB1YmxpY2F0aW9uID0gbmV3IFB1YmxpY2F0aW9uKHB1YmxpY2F0aW9uSWQsICgpID0+IHtcbiAgICAgIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSgndW5wdWJsaXNoJywge2lkOiBwdWJsaWNhdGlvbn0pXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBMb2dnZXIud2FybmluZygnTUNVIHJldHVybnMgbmVnYXRpdmUgYWNrIGZvciB1bnB1Ymxpc2hpbmcsICcgKyBlKTtcbiAgICAgICAgICB9KTtcbiAgICB9IC8qIFRPRE86IGdldFN0YXRzLCBtdXRlLCB1bm11dGUgaXMgbm90IGltcGxlbWVudGVkICovKTtcbiAgICByZXR1cm4gcHVibGljYXRpb247XG4gIH1cblxuICBoYXNDb250ZW50U2Vzc2lvbklkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1aWNTdHJlYW1zLmhhcyhpZCk7XG4gIH1cblxuICBfdXVpZFRvVWludDhBcnJheSh1dWlkU3RyaW5nKSB7XG4gICAgaWYgKHV1aWRTdHJpbmcubGVuZ3RoICE9IDMyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvcnJlY3QgVVVJRC4nKTtcbiAgICB9XG4gICAgY29uc3QgdXVpZEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgdXVpZEFycmF5W2ldID0gcGFyc2VJbnQodXVpZFN0cmluZy5zdWJzdHJpbmcoaSAqIDIsIGkgKiAyICsgMiksIDE2KTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWRBcnJheTtcbiAgfVxuXG4gIF91aW50OEFycmF5VG9VdWlkKHV1aWRCeXRlcykge1xuICAgIGxldCBzID0gJyc7XG4gICAgZm9yIChjb25zdCBoZXggb2YgdXVpZEJ5dGVzKSB7XG4gICAgICBjb25zdCBzdHIgPSBoZXgudG9TdHJpbmcoMTYpO1xuICAgICAgcyArPSBzdHIucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICBzdWJzY3JpYmUoc3RyZWFtKSB7XG4gICAgY29uc3QgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3NpZ25hbGluZ1xuICAgICAgICAgIC5zZW5kU2lnbmFsaW5nTWVzc2FnZSgnc3Vic2NyaWJlJywge1xuICAgICAgICAgICAgbWVkaWE6IG51bGwsXG4gICAgICAgICAgICBkYXRhOiB7ZnJvbTogc3RyZWFtLmlkfSxcbiAgICAgICAgICAgIHRyYW5zcG9ydDoge3R5cGU6ICdxdWljJywgaWQ6IHRoaXMuX3RyYW5zcG9ydElkfSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcXVpY1N0cmVhbXMuaGFzKGRhdGEuaWQpKSB7XG4gICAgICAgICAgICAgIC8vIFFVSUMgc3RyZWFtIGNyZWF0ZWQgYmVmb3JlIHNpZ25hbGluZyByZXR1cm5zLlxuICAgICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLl9jcmVhdGVTdWJzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICBkYXRhLmlkLCB0aGlzLl9xdWljU3RyZWFtcy5nZXQoZGF0YS5pZCkpO1xuICAgICAgICAgICAgICByZXNvbHZlKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9xdWljU3RyZWFtcy5zZXQoZGF0YS5pZCwgbnVsbCk7XG4gICAgICAgICAgICAgIC8vIFFVSUMgc3RyZWFtIGlzIG5vdCBjcmVhdGVkIHlldCwgcmVzb2x2ZSBwcm9taXNlIGFmdGVyIGdldHRpbmdcbiAgICAgICAgICAgICAgLy8gUVVJQyBzdHJlYW0uXG4gICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZVByb21pc2VzLnNldChcbiAgICAgICAgICAgICAgICAgIGRhdGEuaWQsIHtyZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwO1xuICB9XG5cbiAgX3JlYWRBbmRQcmludCgpIHtcbiAgICB0aGlzLl9xdWljU3RyZWFtc1swXS53YWl0Rm9yUmVhZGFibGUoNSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fcXVpY1N0cmVhbXNbMF0ucmVhZEJ1ZmZlcmVkQW1vdW50KTtcbiAgICAgIHRoaXMuX3F1aWNTdHJlYW1zWzBdLnJlYWRJbnRvKGRhdGEpO1xuICAgICAgTG9nZ2VyLmluZm8oJ1JlYWQgZGF0YTogJyArIGRhdGEpO1xuICAgICAgdGhpcy5fcmVhZEFuZFByaW50KCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBfaW5pdGlhdGVQdWJsaWNhdGlvbigpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fc2lnbmFsaW5nLnNlbmRTaWduYWxpbmdNZXNzYWdlKCdwdWJsaXNoJywge1xuICAgICAgbWVkaWE6IG51bGwsXG4gICAgICBkYXRhOiB0cnVlLFxuICAgICAgdHJhbnNwb3J0OiB7dHlwZTogJ3F1aWMnLCBpZDogdGhpcy5fdHJhbnNwb3J0SWR9LFxuICAgIH0pO1xuICAgIGlmICh0aGlzLl90cmFuc3BvcnRJZCAhPT0gZGF0YS50cmFuc3BvcnRJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmFuc3BvcnQgSUQgbm90IG1hdGNoLicpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5pZDtcbiAgfVxuXG4gIF9yZWFkeUhhbmRsZXIoKSB7XG4gICAgLy8gUmVhZHkgbWVzc2FnZSBmcm9tIHNlcnZlciBpcyB1c2VsZXNzIGZvciBRdWljU3RyZWFtIHNpbmNlIFF1aWNTdHJlYW0gaGFzXG4gICAgLy8gaXRzIG93biBzdGF0dXMuIERvIG5vdGhpbmcgaGVyZS5cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vKiBnbG9iYWwgaW8sIFByb21pc2UsIHNldFRpbWVvdXQsIGNsZWFyVGltZW91dCAqL1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9iYXNlL2xvZ2dlci5qcyc7XG5pbXBvcnQgKiBhcyBFdmVudE1vZHVsZSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCB7Q29uZmVyZW5jZUVycm9yfSBmcm9tICcuL2Vycm9yLmpzJztcbmltcG9ydCB7QmFzZTY0fSBmcm9tICcuLi9iYXNlL2Jhc2U2NC5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVjb25uZWN0aW9uQXR0ZW1wdHMgPSAxMDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHN0YXR1cywgZGF0YSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGlmIChzdGF0dXMgPT09ICdvaycgfHwgc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICByZXNvbHZlKGRhdGEpO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIHJlamVjdChkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICBMb2dnZXIuZXJyb3IoJ01DVSByZXR1cm5zIHVua25vd24gYWNrLicpO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFNpb1NpZ25hbGluZ1xuICogQGNsYXNzZGVzYyBTb2NrZXQuSU8gc2lnbmFsaW5nIGNoYW5uZWwgZm9yIENvbmZlcmVuY2VDbGllbnQuIEl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBkaXJlY3RseSBhY2Nlc3MgdGhpcyBjbGFzcy5cbiAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZVxuICogQGV4dGVuZHMgT3d0LkJhc2UuRXZlbnREaXNwYXRjaGVyXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFNpb1NpZ25hbGluZyBleHRlbmRzIEV2ZW50TW9kdWxlLkV2ZW50RGlzcGF0Y2hlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc29ja2V0ID0gbnVsbDtcbiAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xuICAgIHRoaXMuX3JlY29ubmVjdFRpbWVzID0gMDtcbiAgICB0aGlzLl9yZWNvbm5lY3Rpb25UaWNrZXQgPSBudWxsO1xuICAgIHRoaXMuX3JlZnJlc2hSZWNvbm5lY3Rpb25UaWNrZXQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjb25uZWN0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBDb25uZWN0IHRvIGEgcG9ydGFsLlxuICAgKiBAbWVtYmVyb2YgT21zLkNvbmZlcmVuY2UuU2lvU2lnbmFsaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LCBFcnJvcj59IFJldHVybiBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCB0aGUgZGF0YSByZXR1cm5lZCBieSBwb3J0YWwgaWYgc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbi4gT3IgcmV0dXJuIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBPbXMuRXJyb3IgaWYgZmFpbGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdCBIb3N0IG9mIHRoZSBwb3J0YWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpc1NlY3VyZWQgSXMgc2VjdXJlIGNvbm5lY3Rpb24gb3Igbm90LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9naW5JbmZvIEluZm9ybWF0aW9uIHJlcXVpcmVkIGZvciBsb2dnaW5nIGluLlxuICAgKiBAcHJpdmF0ZS5cbiAgICovXG4gIGNvbm5lY3QoaG9zdCwgaXNTZWN1cmVkLCBsb2dpbkluZm8pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgJ3JlY29ubmVjdGlvbic6IHRydWUsXG4gICAgICAgICdyZWNvbm5lY3Rpb25BdHRlbXB0cyc6IHJlY29ubmVjdGlvbkF0dGVtcHRzLFxuICAgICAgICAnZm9yY2UgbmV3IGNvbm5lY3Rpb24nOiB0cnVlLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX3NvY2tldCA9IGlvKGhvc3QsIG9wdHMpO1xuICAgICAgWydwYXJ0aWNpcGFudCcsICd0ZXh0JywgJ3N0cmVhbScsICdwcm9ncmVzcyddLmZvckVhY2goKFxuICAgICAgICAgIG5vdGlmaWNhdGlvbikgPT4ge1xuICAgICAgICB0aGlzLl9zb2NrZXQub24obm90aWZpY2F0aW9uLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRNb2R1bGUuTWVzc2FnZUV2ZW50KCdkYXRhJywge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICBub3RpZmljYXRpb246IG5vdGlmaWNhdGlvbixcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc29ja2V0Lm9uKCdyZWNvbm5lY3RpbmcnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdFRpbWVzKys7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NvY2tldC5vbigncmVjb25uZWN0X2ZhaWxlZCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdFRpbWVzID49IHJlY29ubmVjdGlvbkF0dGVtcHRzKSB7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnZGlzY29ubmVjdCcpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9zb2NrZXQub24oJ2Nvbm5lY3RfZXJyb3InLCAoZSkgPT4ge1xuICAgICAgICByZWplY3QoYGNvbm5lY3RfZXJyb3I6JHtob3N0fWApO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zb2NrZXQub24oJ2Ryb3AnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdFRpbWVzID0gcmVjb25uZWN0aW9uQXR0ZW1wdHM7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2xlYXJSZWNvbm5lY3Rpb25UYXNrKCk7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3RUaW1lcyA+PSByZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudE1vZHVsZS5Pd3RFdmVudCgnZGlzY29ubmVjdCcpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9zb2NrZXQuZW1pdCgnbG9naW4nLCBsb2dpbkluZm8sIChzdGF0dXMsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ29rJykge1xuICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9vblJlY29ubmVjdGlvblRpY2tldChkYXRhLnJlY29ubmVjdGlvblRpY2tldCk7XG4gICAgICAgICAgdGhpcy5fc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gcmUtbG9naW4gd2l0aCByZWNvbm5lY3Rpb24gdGlja2V0LlxuICAgICAgICAgICAgdGhpcy5fc29ja2V0LmVtaXQoJ3JlbG9naW4nLCB0aGlzLl9yZWNvbm5lY3Rpb25UaWNrZXQsIChzdGF0dXMsXG4gICAgICAgICAgICAgICAgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0VGltZXMgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX29uUmVjb25uZWN0aW9uVGlja2V0KGRhdGEpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnRNb2R1bGUuT3d0RXZlbnQoJ2Rpc2Nvbm5lY3QnKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZVJlc3BvbnNlKHN0YXR1cywgZGF0YSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBkaXNjb25uZWN0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBEaXNjb25uZWN0IGZyb20gYSBwb3J0YWwuXG4gICAqIEBtZW1iZXJvZiBPbXMuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QsIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIHRoZSBkYXRhIHJldHVybmVkIGJ5IHBvcnRhbCBpZiBzdWNjZXNzZnVsbHkgZGlzY29ubmVjdGVkLiBPciByZXR1cm4gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggYSBuZXdseSBjcmVhdGVkIE9tcy5FcnJvciBpZiBmYWlsZWQuXG4gICAqIEBwcml2YXRlLlxuICAgKi9cbiAgZGlzY29ubmVjdCgpIHtcbiAgICBpZiAoIXRoaXMuX3NvY2tldCB8fCB0aGlzLl9zb2NrZXQuZGlzY29ubmVjdGVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IENvbmZlcmVuY2VFcnJvcihcbiAgICAgICAgICAnUG9ydGFsIGlzIG5vdCBjb25uZWN0ZWQuJykpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fc29ja2V0LmVtaXQoJ2xvZ291dCcsIChzdGF0dXMsIGRhdGEpID0+IHtcbiAgICAgICAgLy8gTWF4aW1pemUgdGhlIHJlY29ubmVjdCB0aW1lcyB0byBkaXNhYmxlIHJlY29ubmVjdGlvbi5cbiAgICAgICAgdGhpcy5fcmVjb25uZWN0VGltZXMgPSByZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgICAgICAgdGhpcy5fc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaGFuZGxlUmVzcG9uc2Uoc3RhdHVzLCBkYXRhLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHNlbmRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFNlbmQgZGF0YSB0byBwb3J0YWwuXG4gICAqIEBtZW1iZXJvZiBPbXMuQ29uZmVyZW5jZS5TaW9TaWduYWxpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QsIEVycm9yPn0gUmV0dXJuIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIHRoZSBkYXRhIHJldHVybmVkIGJ5IHBvcnRhbC4gT3IgcmV0dXJuIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIGEgbmV3bHkgY3JlYXRlZCBPbXMuRXJyb3IgaWYgZmFpbGVkIHRvIHNlbmQgdGhlIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0TmFtZSBOYW1lIGRlZmluZWQgaW4gY2xpZW50LXNlcnZlciBwcm90b2NvbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3REYXRhIERhdGEgZm9ybWF0IGlzIGRlZmluZWQgaW4gY2xpZW50LXNlcnZlciBwcm90b2NvbC5cbiAgICogQHByaXZhdGUuXG4gICAqL1xuICBzZW5kKHJlcXVlc3ROYW1lLCByZXF1ZXN0RGF0YSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9zb2NrZXQuZW1pdChyZXF1ZXN0TmFtZSwgcmVxdWVzdERhdGEsIChzdGF0dXMsIGRhdGEpID0+IHtcbiAgICAgICAgaGFuZGxlUmVzcG9uc2Uoc3RhdHVzLCBkYXRhLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF9vblJlY29ubmVjdGlvblRpY2tldFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgUGFyc2UgcmVjb25uZWN0aW9uIHRpY2tldCBhbmQgc2NoZWR1bGUgdGlja2V0IHJlZnJlc2hpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aWNrZXRTdHJpbmcgUmVjb25uZWN0aW9uIHRpY2tldC5cbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlNpb1NpZ25hbGluZ1xuICAgKiBAcHJpdmF0ZS5cbiAgICovXG4gIF9vblJlY29ubmVjdGlvblRpY2tldCh0aWNrZXRTdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvbm5lY3Rpb25UaWNrZXQgPSB0aWNrZXRTdHJpbmc7XG4gICAgY29uc3QgdGlja2V0ID0gSlNPTi5wYXJzZShCYXNlNjQuZGVjb2RlQmFzZTY0KHRpY2tldFN0cmluZykpO1xuICAgIC8vIFJlZnJlc2ggdGlja2V0IDEgbWluIG9yIDEwIHNlY29uZHMgYmVmb3JlIGl0IGV4cGlyZXMuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBtaWxsaXNlY29uZHNJbk9uZU1pbnV0ZSA9IDYwICogMTAwMDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHNJblRlblNlY29uZHMgPSAxMCAqIDEwMDA7XG4gICAgaWYgKHRpY2tldC5ub3RBZnRlciA8PSBub3cgLSBtaWxsaXNlY29uZHNJblRlblNlY29uZHMpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdSZWNvbm5lY3Rpb24gdGlja2V0IGV4cGlyZXMgdG9vIHNvb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByZWZyZXNoQWZ0ZXIgPSB0aWNrZXQubm90QWZ0ZXIgLSBub3cgLSBtaWxsaXNlY29uZHNJbk9uZU1pbnV0ZTtcbiAgICBpZiAocmVmcmVzaEFmdGVyIDwgMCkge1xuICAgICAgcmVmcmVzaEFmdGVyID0gdGlja2V0Lm5vdEFmdGVyIC0gbm93IC0gbWlsbGlzZWNvbmRzSW5UZW5TZWNvbmRzO1xuICAgIH1cbiAgICB0aGlzLl9jbGVhclJlY29ubmVjdGlvblRhc2soKTtcbiAgICB0aGlzLl9yZWZyZXNoUmVjb25uZWN0aW9uVGlja2V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zb2NrZXQuZW1pdCgncmVmcmVzaFJlY29ubmVjdGlvblRpY2tldCcsIChzdGF0dXMsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gJ29rJykge1xuICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdGYWlsZWQgdG8gcmVmcmVzaCByZWNvbm5lY3Rpb24gdGlja2V0LicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vblJlY29ubmVjdGlvblRpY2tldChkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0sIHJlZnJlc2hBZnRlcik7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF9jbGVhclJlY29ubmVjdGlvblRhc2tcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIFN0b3AgdHJ5aW5nIHRvIHJlZnJlc2ggcmVjb25uZWN0aW9uIHRpY2tldC5cbiAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlNpb1NpZ25hbGluZ1xuICAgKiBAcHJpdmF0ZS5cbiAgICovXG4gIF9jbGVhclJlY29ubmVjdGlvblRhc2soKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3JlZnJlc2hSZWNvbm5lY3Rpb25UaWNrZXQpO1xuICAgIHRoaXMuX3JlZnJlc2hSZWNvbm5lY3Rpb25UaWNrZXQgPSBudWxsO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8vIFRoaXMgZmlsZSBkb2Vzbid0IGhhdmUgcHVibGljIEFQSXMuXG4vKiBlc2xpbnQtZGlzYWJsZSB2YWxpZC1qc2RvYyAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIFB1YmxpY2F0aW9uTW9kdWxlIGZyb20gJy4uL2Jhc2UvcHVibGljYXRpb24uanMnO1xuaW1wb3J0ICogYXMgTWVkaWFGb3JtYXRNb2R1bGUgZnJvbSAnLi4vYmFzZS9tZWRpYWZvcm1hdC5qcyc7XG5pbXBvcnQgKiBhcyBDb2RlY01vZHVsZSBmcm9tICcuLi9iYXNlL2NvZGVjLmpzJztcbmltcG9ydCAqIGFzIFN1YnNjcmlwdGlvbk1vZHVsZSBmcm9tICcuL3N1YnNjcmlwdGlvbi5qcyc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2Jhc2UvbG9nZ2VyLmpzJztcblxuLyoqXG4gKiBAZnVuY3Rpb24gZXh0cmFjdEJpdHJhdGVNdWx0aXBsaWVyXG4gKiBAZGVzYyBFeHRyYWN0IGJpdHJhdGUgbXVsdGlwbGllciBmcm9tIGEgc3RyaW5nIGxpa2UgXCJ4MC4yXCIuXG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdCwgRXJyb3I+fSBUaGUgZmxvYXQgbnVtYmVyIGFmdGVyIFwieFwiLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdEJpdHJhdGVNdWx0aXBsaWVyKGlucHV0KSB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnIHx8ICFpbnB1dC5zdGFydHNXaXRoKCd4JykpIHtcbiAgICBMb2dnZXIud2FybmluZygnSW52YWxpZCBiaXRyYXRlIG11bHRpcGxpZXIgaW5wdXQuJyk7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KGlucHV0LnJlcGxhY2UoL154LywgJycpKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmZ1bmN0aW9uIHNvcnROdW1iZXJzKHgsIHkpIHtcbiAgcmV0dXJuIHggLSB5O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gc29ydFJlc29sdXRpb25zKHgsIHkpIHtcbiAgaWYgKHgud2lkdGggIT09IHkud2lkdGgpIHtcbiAgICByZXR1cm4geC53aWR0aCAtIHkud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHguaGVpZ2h0IC0geS5oZWlnaHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAZnVuY3Rpb24gY29udmVydFRvUHVibGljYXRpb25TZXR0aW5nc1xuICogQGRlc2MgQ29udmVydCBtZWRpYUluZm8gcmVjZWl2ZWQgZnJvbSBzZXJ2ZXIgdG8gUHVibGljYXRpb25TZXR0aW5ncy5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9QdWJsaWNhdGlvblNldHRpbmdzKG1lZGlhSW5mbykge1xuICBjb25zdCBhdWRpbyA9IFtdO1xuICBjb25zdCB2aWRlbyA9IFtdO1xuICBsZXQgYXVkaW9Db2RlYztcbiAgbGV0IHZpZGVvQ29kZWM7XG4gIGxldCByZXNvbHV0aW9uO1xuICBsZXQgZnJhbWVyYXRlO1xuICBsZXQgYml0cmF0ZTtcbiAgbGV0IGtleUZyYW1lSW50ZXJ2YWw7XG4gIGxldCByaWQ7XG4gIGZvciAoY29uc3QgdHJhY2sgb2YgbWVkaWFJbmZvLnRyYWNrcykge1xuICAgIGlmICh0cmFjay50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICBpZiAodHJhY2suZm9ybWF0KSB7XG4gICAgICAgIGF1ZGlvQ29kZWMgPSBuZXcgQ29kZWNNb2R1bGUuQXVkaW9Db2RlY1BhcmFtZXRlcnMoXG4gICAgICAgICAgICB0cmFjay5mb3JtYXQuY29kZWMsIHRyYWNrLmZvcm1hdC5jaGFubmVsTnVtLFxuICAgICAgICAgICAgdHJhY2suZm9ybWF0LnNhbXBsZVJhdGUpO1xuICAgICAgfVxuICAgICAgY29uc3QgYXVkaW9QdWJsaWNhdGlvblNldHRpbmdzID1cbiAgICAgICAgICBuZXcgUHVibGljYXRpb25Nb2R1bGUuQXVkaW9QdWJsaWNhdGlvblNldHRpbmdzKGF1ZGlvQ29kZWMpO1xuICAgICAgYXVkaW9QdWJsaWNhdGlvblNldHRpbmdzLl90cmFja0lkID0gdHJhY2suaWQ7XG4gICAgICBhdWRpby5wdXNoKGF1ZGlvUHVibGljYXRpb25TZXR0aW5ncyk7XG4gICAgfSBlbHNlIGlmICh0cmFjay50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICBpZiAodHJhY2suZm9ybWF0KSB7XG4gICAgICAgIHZpZGVvQ29kZWMgPSBuZXcgQ29kZWNNb2R1bGUuVmlkZW9Db2RlY1BhcmFtZXRlcnMoXG4gICAgICAgICAgICB0cmFjay5mb3JtYXQuY29kZWMsIHRyYWNrLmZvcm1hdC5wcm9maWxlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFjay5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICh0cmFjay5wYXJhbWV0ZXJzLnJlc29sdXRpb24pIHtcbiAgICAgICAgICByZXNvbHV0aW9uID0gbmV3IE1lZGlhRm9ybWF0TW9kdWxlLlJlc29sdXRpb24oXG4gICAgICAgICAgICAgIHRyYWNrLnBhcmFtZXRlcnMucmVzb2x1dGlvbi53aWR0aCxcbiAgICAgICAgICAgICAgdHJhY2sucGFyYW1ldGVycy5yZXNvbHV0aW9uLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZnJhbWVyYXRlID0gdHJhY2sucGFyYW1ldGVycy5mcmFtZXJhdGU7XG4gICAgICAgIGJpdHJhdGUgPSB0cmFjay5wYXJhbWV0ZXJzLmJpdHJhdGUgKiAxMDAwO1xuICAgICAgICBrZXlGcmFtZUludGVydmFsID0gdHJhY2sucGFyYW1ldGVycy5rZXlGcmFtZUludGVydmFsO1xuICAgICAgfVxuICAgICAgaWYgKHRyYWNrLnJpZCkge1xuICAgICAgICByaWQgPSB0cmFjay5yaWQ7XG4gICAgICB9XG4gICAgICBjb25zdCB2aWRlb1B1YmxpY2F0aW9uU2V0dGluZ3MgPVxuICAgICAgICAgIG5ldyBQdWJsaWNhdGlvbk1vZHVsZS5WaWRlb1B1YmxpY2F0aW9uU2V0dGluZ3MoXG4gICAgICAgICAgICAgIHZpZGVvQ29kZWMsIHJlc29sdXRpb24sIGZyYW1lcmF0ZSwgYml0cmF0ZSxcbiAgICAgICAgICAgICAga2V5RnJhbWVJbnRlcnZhbCwgcmlkKTtcbiAgICAgIHZpZGVvUHVibGljYXRpb25TZXR0aW5ncy5fdHJhY2tJZCA9IHRyYWNrLmlkO1xuICAgICAgdmlkZW8ucHVzaCh2aWRlb1B1YmxpY2F0aW9uU2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgUHVibGljYXRpb25Nb2R1bGUuUHVibGljYXRpb25TZXR0aW5ncyhhdWRpbywgdmlkZW8pO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvbiBjb252ZXJ0VG9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAqIEBkZXNjIENvbnZlcnQgbWVkaWFJbmZvIHJlY2VpdmVkIGZyb20gc2VydmVyIHRvIFN1YnNjcmlwdGlvbkNhcGFiaWxpdGllcy5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMobWVkaWFJbmZvKSB7XG4gIGxldCBhdWRpbztcbiAgbGV0IHZpZGVvO1xuXG4gIGZvciAoY29uc3QgdHJhY2sgb2YgbWVkaWFJbmZvLnRyYWNrcykge1xuICAgIGlmICh0cmFjay50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICBjb25zdCBhdWRpb0NvZGVjcyA9IFtdO1xuICAgICAgaWYgKHRyYWNrLm9wdGlvbmFsICYmIHRyYWNrLm9wdGlvbmFsLmZvcm1hdCkge1xuICAgICAgICBmb3IgKGNvbnN0IGF1ZGlvQ29kZWNJbmZvIG9mIHRyYWNrLm9wdGlvbmFsLmZvcm1hdCkge1xuICAgICAgICAgIGNvbnN0IGF1ZGlvQ29kZWMgPSBuZXcgQ29kZWNNb2R1bGUuQXVkaW9Db2RlY1BhcmFtZXRlcnMoXG4gICAgICAgICAgICAgIGF1ZGlvQ29kZWNJbmZvLmNvZGVjLCBhdWRpb0NvZGVjSW5mby5jaGFubmVsTnVtLFxuICAgICAgICAgICAgICBhdWRpb0NvZGVjSW5mby5zYW1wbGVSYXRlKTtcbiAgICAgICAgICBhdWRpb0NvZGVjcy5wdXNoKGF1ZGlvQ29kZWMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdWRpb0NvZGVjcy5zb3J0KCk7XG4gICAgICBhdWRpbyA9IG5ldyBTdWJzY3JpcHRpb25Nb2R1bGUuQXVkaW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMoYXVkaW9Db2RlY3MpO1xuICAgIH0gZWxzZSBpZiAodHJhY2sudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgY29uc3QgdmlkZW9Db2RlY3MgPSBbXTtcbiAgICAgIGlmICh0cmFjay5vcHRpb25hbCAmJiB0cmFjay5vcHRpb25hbC5mb3JtYXQpIHtcbiAgICAgICAgZm9yIChjb25zdCB2aWRlb0NvZGVjSW5mbyBvZiB0cmFjay5vcHRpb25hbC5mb3JtYXQpIHtcbiAgICAgICAgICBjb25zdCB2aWRlb0NvZGVjID0gbmV3IENvZGVjTW9kdWxlLlZpZGVvQ29kZWNQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgICB2aWRlb0NvZGVjSW5mby5jb2RlYywgdmlkZW9Db2RlY0luZm8ucHJvZmlsZSk7XG4gICAgICAgICAgdmlkZW9Db2RlY3MucHVzaCh2aWRlb0NvZGVjKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmlkZW9Db2RlY3Muc29ydCgpO1xuICAgICAgY29uc3QgcmVzb2x1dGlvbnMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgIHRyYWNrLm9wdGlvbmFsLnBhcmFtZXRlcnMucmVzb2x1dGlvbixcbiAgICAgICAgICAocikgPT4gbmV3IE1lZGlhRm9ybWF0TW9kdWxlLlJlc29sdXRpb24oci53aWR0aCwgci5oZWlnaHQpKTtcbiAgICAgIHJlc29sdXRpb25zLnNvcnQoc29ydFJlc29sdXRpb25zKTtcbiAgICAgIGNvbnN0IGJpdHJhdGVzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICB0cmFjay5vcHRpb25hbC5wYXJhbWV0ZXJzLmJpdHJhdGUsXG4gICAgICAgICAgKGJpdHJhdGUpID0+IGV4dHJhY3RCaXRyYXRlTXVsdGlwbGllcihiaXRyYXRlKSk7XG4gICAgICBiaXRyYXRlcy5wdXNoKDEuMCk7XG4gICAgICBiaXRyYXRlcy5zb3J0KHNvcnROdW1iZXJzKTtcbiAgICAgIGNvbnN0IGZyYW1lUmF0ZXMgPSBKU09OLnBhcnNlKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRyYWNrLm9wdGlvbmFsLnBhcmFtZXRlcnMuZnJhbWVyYXRlKSk7XG4gICAgICBmcmFtZVJhdGVzLnNvcnQoc29ydE51bWJlcnMpO1xuICAgICAgY29uc3Qga2V5RnJhbWVJbnRlcnZhbHMgPSBKU09OLnBhcnNlKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRyYWNrLm9wdGlvbmFsLnBhcmFtZXRlcnMua2V5RnJhbWVJbnRlcnZhbCkpO1xuICAgICAga2V5RnJhbWVJbnRlcnZhbHMuc29ydChzb3J0TnVtYmVycyk7XG4gICAgICB2aWRlbyA9IG5ldyBTdWJzY3JpcHRpb25Nb2R1bGUuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMoXG4gICAgICAgICAgdmlkZW9Db2RlY3MsIHJlc29sdXRpb25zLCBmcmFtZVJhdGVzLCBiaXRyYXRlcywga2V5RnJhbWVJbnRlcnZhbHMpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbk1vZHVsZS5TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMoYXVkaW8sIHZpZGVvKTtcbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnLi4vYmFzZS9ldmVudC5qcyc7XG5cbi8qKlxuICogQGNsYXNzIEF1ZGlvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gKiBAbWVtYmVyT2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgUmVwcmVzZW50cyB0aGUgYXVkaW8gY2FwYWJpbGl0eSBmb3Igc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgQXVkaW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3Rvcihjb2RlY3MpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48T3d0LkJhc2UuQXVkaW9Db2RlY1BhcmFtZXRlcnM+fSBjb2RlY3NcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQXVkaW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjcyA9IGNvZGVjcztcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBWaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFJlcHJlc2VudHMgdGhlIHZpZGVvIGNhcGFiaWxpdHkgZm9yIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoY29kZWNzLCByZXNvbHV0aW9ucywgZnJhbWVSYXRlcywgYml0cmF0ZU11bHRpcGxpZXJzLFxuICAgICAga2V5RnJhbWVJbnRlcnZhbHMpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48T3d0LkJhc2UuVmlkZW9Db2RlY1BhcmFtZXRlcnM+fSBjb2RlY3NcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXNcbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjcyA9IGNvZGVjcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48T3d0LkJhc2UuUmVzb2x1dGlvbj59IHJlc29sdXRpb25zXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9ucyA9IHJlc29sdXRpb25zO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FycmF5LjxudW1iZXI+fSBmcmFtZVJhdGVzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5mcmFtZVJhdGVzID0gZnJhbWVSYXRlcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBcnJheS48bnVtYmVyPn0gYml0cmF0ZU11bHRpcGxpZXJzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5iaXRyYXRlTXVsdGlwbGllcnMgPSBiaXRyYXRlTXVsdGlwbGllcnM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QXJyYXkuPG51bWJlcj59IGtleUZyYW1lSW50ZXJ2YWxzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5rZXlGcmFtZUludGVydmFscyA9IGtleUZyYW1lSW50ZXJ2YWxzO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvbkNhcGFiaWxpdGllc1xuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFJlcHJlc2VudHMgdGhlIGNhcGFiaWxpdHkgZm9yIHN1YnNjcmlwdGlvbi5cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGF1ZGlvLCB2aWRlbykge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQ29uZmVyZW5jZS5BdWRpb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc30gYXVkaW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy5hdWRpbyA9IGF1ZGlvO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllc30gdmlkZW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgdGhpcy52aWRlbyA9IHZpZGVvO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIEF1ZGlvU3Vic2NyaXB0aW9uQ29uc3RyYWludHNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBSZXByZXNlbnRzIHRoZSBhdWRpbyBjb25zdHJhaW50cyBmb3Igc3Vic2NyaXB0aW9uLlxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgQXVkaW9TdWJzY3JpcHRpb25Db25zdHJhaW50cyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGNvZGVjcykge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9BcnJheS48T3d0LkJhc2UuQXVkaW9Db2RlY1BhcmFtZXRlcnM+fSBjb2RlY3NcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuQXVkaW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIENvZGVjcyBhY2NlcHRlZC4gSWYgbm9uZSBvZiBgY29kZWNzYCBzdXBwb3J0ZWQgYnkgYm90aCBzaWRlcywgY29ubmVjdGlvbiBmYWlscy4gTGVhdmUgaXQgdW5kZWZpbmVkIHdpbGwgdXNlIGFsbCBwb3NzaWJsZSBjb2RlY3MuXG4gICAgICovXG4gICAgdGhpcy5jb2RlY3MgPSBjb2RlY3M7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFJlcHJlc2VudHMgdGhlIHZpZGVvIGNvbnN0cmFpbnRzIGZvciBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoY29kZWNzLCByZXNvbHV0aW9uLCBmcmFtZVJhdGUsIGJpdHJhdGVNdWx0aXBsaWVyLFxuICAgICAga2V5RnJhbWVJbnRlcnZhbCwgcmlkKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P0FycmF5LjxPd3QuQmFzZS5WaWRlb0NvZGVjUGFyYW1ldGVycz59IGNvZGVjc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgQ29kZWNzIGFjY2VwdGVkLiBJZiBub25lIG9mIGBjb2RlY3NgIHN1cHBvcnRlZCBieSBib3RoIHNpZGVzLCBjb25uZWN0aW9uIGZhaWxzLiBMZWF2ZSBpdCB1bmRlZmluZWQgd2lsbCB1c2UgYWxsIHBvc3NpYmxlIGNvZGVjcy5cbiAgICAgKi9cbiAgICB0aGlzLmNvZGVjcyA9IGNvZGVjcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuUmVzb2x1dGlvbn0gcmVzb2x1dGlvblxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgT25seSByZXNvbHV0aW9ucyBsaXN0ZWQgaW4gT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9uID0gcmVzb2x1dGlvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSBmcmFtZVJhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIE9ubHkgZnJhbWVSYXRlcyBsaXN0ZWQgaW4gT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5mcmFtZVJhdGUgPSBmcmFtZVJhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gYml0cmF0ZU11bHRpcGxpZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIE9ubHkgYml0cmF0ZU11bHRpcGxpZXJzIGxpc3RlZCBpbiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyBhcmUgYWxsb3dlZC5cbiAgICAgKi9cbiAgICB0aGlzLmJpdHJhdGVNdWx0aXBsaWVyID0gYml0cmF0ZU11bHRpcGxpZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0ga2V5RnJhbWVJbnRlcnZhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzXG4gICAgICogQGRlc2MgT25seSBrZXlGcmFtZUludGVydmFscyBsaXN0ZWQgaW4gT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5rZXlGcmFtZUludGVydmFsID0ga2V5RnJhbWVJbnRlcnZhbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/bnVtYmVyfSByaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25Db25zdHJhaW50c1xuICAgICAqIEBkZXNjIFJlc3RyaWN0aW9uIGlkZW50aWZpZXIgdG8gaWRlbnRpZnkgdGhlIFJUUCBTdHJlYW1zIHdpdGhpbiBhbiBSVFAgc2Vzc2lvbi4gV2hlbiByaWQgaXMgc3BlY2lmaWVkLCBvdGhlciBjb25zdHJhaW50cyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICovXG4gICAgdGhpcy5yaWQgPSByaWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgU3Vic2NyaWJlT3B0aW9uc1xuICogQG1lbWJlck9mIE93dC5Db25mZXJlbmNlXG4gKiBAY2xhc3NEZXNjIFN1YnNjcmliZU9wdGlvbnMgZGVmaW5lcyBvcHRpb25zIGZvciBzdWJzY3JpYmluZyBhIE93dC5CYXNlLlJlbW90ZVN0cmVhbS5cbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmliZU9wdGlvbnMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcihhdWRpbywgdmlkZW8sIHRyYW5zcG9ydCkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQ29uZmVyZW5jZS5BdWRpb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzfSBhdWRpb1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpYmVPcHRpb25zXG4gICAgICovXG4gICAgdGhpcy5hdWRpbyA9IGF1ZGlvO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvbkNvbnN0cmFpbnRzfSB2aWRlb1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpYmVPcHRpb25zXG4gICAgICovXG4gICAgdGhpcy52aWRlbyA9IHZpZGVvO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9Pd3QuQmFzZS5UcmFuc3BvcnRDb25zdHJhaW50c30gdHJhbnNwb3J0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmliZU9wdGlvbnNcbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBWaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBWaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnMgZGVmaW5lcyBvcHRpb25zIGZvciB1cGRhdGluZyBhIHN1YnNjcmlwdGlvbidzIHZpZGVvIHBhcnQuXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnMge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHs/T3d0LkJhc2UuUmVzb2x1dGlvbn0gcmVzb2x1dGlvblxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAgICAgKiBAZGVzYyBPbmx5IHJlc29sdXRpb25zIGxpc3RlZCBpbiBWaWRlb1N1YnNjcmlwdGlvbkNhcGFiaWxpdGllcyBhcmUgYWxsb3dlZC5cbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0gZnJhbWVSYXRlc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAgICAgKiBAZGVzYyBPbmx5IGZyYW1lUmF0ZXMgbGlzdGVkIGluIFZpZGVvU3Vic2NyaXB0aW9uQ2FwYWJpbGl0aWVzIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIHRoaXMuZnJhbWVSYXRlID0gdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIgez9udW1iZXJ9IGJpdHJhdGVNdWx0aXBsaWVyc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5WaWRlb1N1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAgICAgKiBAZGVzYyBPbmx5IGJpdHJhdGVNdWx0aXBsaWVycyBsaXN0ZWQgaW4gVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5iaXRyYXRlTXVsdGlwbGllcnMgPSB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P251bWJlcn0ga2V5RnJhbWVJbnRlcnZhbHNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuVmlkZW9TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zXG4gICAgICogQGRlc2MgT25seSBrZXlGcmFtZUludGVydmFscyBsaXN0ZWQgaW4gVmlkZW9TdWJzY3JpcHRpb25DYXBhYmlsaXRpZXMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgdGhpcy5rZXlGcmFtZUludGVydmFsID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvblVwZGF0ZU9wdGlvbnNcbiAqIEBtZW1iZXJPZiBPd3QuQ29uZmVyZW5jZVxuICogQGNsYXNzRGVzYyBTdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIGRlZmluZXMgb3B0aW9ucyBmb3IgdXBkYXRpbmcgYSBzdWJzY3JpcHRpb24uXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7P1ZpZGVvU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9uc30gdmlkZW9cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uVXBkYXRlT3B0aW9uc1xuICAgICAqL1xuICAgIHRoaXMudmlkZW8gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgU3Vic2NyaXB0aW9uXG4gKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2VcbiAqIEBjbGFzc0Rlc2MgU3Vic2NyaXB0aW9uIGlzIGEgcmVjZWl2ZXIgZm9yIHJlY2VpdmluZyBhIHN0cmVhbS5cbiAqIEV2ZW50czpcbiAqXG4gKiB8IEV2ZW50IE5hbWUgICAgICB8IEFyZ3VtZW50IFR5cGUgICAgfCBGaXJlZCB3aGVuICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBlbmRlZCAgICAgICAgICAgfCBFdmVudCAgICAgICAgICAgIHwgU3Vic2NyaXB0aW9uIGlzIGVuZGVkLiB8XG4gKiB8IGVycm9yICAgICAgICAgICB8IEVycm9yRXZlbnQgICAgICAgfCBBbiBlcnJvciBvY2N1cnJlZCBvbiB0aGUgc3Vic2NyaXB0aW9uLiB8XG4gKiB8IG11dGUgICAgICAgICAgICB8IE11dGVFdmVudCAgICAgICAgfCBQdWJsaWNhdGlvbiBpcyBtdXRlZC4gUmVtb3RlIHNpZGUgc3RvcHBlZCBzZW5kaW5nIGF1ZGlvIGFuZC9vciB2aWRlbyBkYXRhLiB8XG4gKiB8IHVubXV0ZSAgICAgICAgICB8IE11dGVFdmVudCAgICAgICAgfCBQdWJsaWNhdGlvbiBpcyB1bm11dGVkLiBSZW1vdGUgc2lkZSBjb250aW51ZWQgc2VuZGluZyBhdWRpbyBhbmQvb3IgdmlkZW8gZGF0YS4gfFxuICpcbiAqIEBleHRlbmRzIE93dC5CYXNlLkV2ZW50RGlzcGF0Y2hlclxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgY29uc3RydWN0b3IoaWQsIHN0b3AsIGdldFN0YXRzLCBtdXRlLCB1bm11dGUsIGFwcGx5T3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKCFpZCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSUQgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGlkLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBzdG9wXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgU3RvcCBjZXJ0YWluIHN1YnNjcmlwdGlvbi4gT25jZSBhIHN1YnNjcmlwdGlvbiBpcyBzdG9wcGVkLCBpdCBjYW5ub3QgYmUgcmVjb3ZlcmVkLlxuICAgICAqIEBtZW1iZXJvZiBPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuc3RvcCA9IHN0b3A7XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGdldFN0YXRzXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgR2V0IHN0YXRzIG9mIHVuZGVybHlpbmcgUGVlckNvbm5lY3Rpb24uXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJUQ1N0YXRzUmVwb3J0LCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy5nZXRTdGF0cyA9IGdldFN0YXRzO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBtdXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2MgU3RvcCByZWV2aW5nIGRhdGEgZnJvbSByZW1vdGUgZW5kcG9pbnQuXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7T3d0LkJhc2UuVHJhY2tLaW5kIH0ga2luZCBLaW5kIG9mIHRyYWNrcyB0byBiZSBtdXRlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQsIEVycm9yPn1cbiAgICAgKi9cbiAgICB0aGlzLm11dGUgPSBtdXRlO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiB1bm11dGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBDb250aW51ZSByZWV2aW5nIGRhdGEgZnJvbSByZW1vdGUgZW5kcG9pbnQuXG4gICAgICogQG1lbWJlcm9mIE93dC5Db25mZXJlbmNlLlN1YnNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7T3d0LkJhc2UuVHJhY2tLaW5kIH0ga2luZCBLaW5kIG9mIHRyYWNrcyB0byBiZSB1bm11dGVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZCwgRXJyb3I+fVxuICAgICAqL1xuICAgIHRoaXMudW5tdXRlID0gdW5tdXRlO1xuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBhcHBseU9wdGlvbnNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzYyBVcGRhdGUgc3Vic2NyaXB0aW9uIHdpdGggZ2l2ZW4gb3B0aW9ucy5cbiAgICAgKiBAbWVtYmVyb2YgT3d0LkNvbmZlcmVuY2UuU3Vic2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtPd3QuQ29uZmVyZW5jZS5TdWJzY3JpcHRpb25VcGRhdGVPcHRpb25zIH0gb3B0aW9ucyBTdWJzY3JpcHRpb24gdXBkYXRlIG9wdGlvbnMuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5kZWZpbmVkLCBFcnJvcj59XG4gICAgICovXG4gICAgdGhpcy5hcHBseU9wdGlvbnMgPSBhcHBseU9wdGlvbnM7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vYmFzZS9leHBvcnQuanMnO1xuaW1wb3J0ICogYXMgcDJwIGZyb20gJy4vcDJwL2V4cG9ydC5qcyc7XG5pbXBvcnQgKiBhcyBjb25mZXJlbmNlIGZyb20gJy4vY29uZmVyZW5jZS9leHBvcnQuanMnO1xuXG4vKipcbiAqIEJhc2Ugb2JqZWN0cyBmb3IgYm90aCBQMlAgYW5kIGNvbmZlcmVuY2UuXG4gKiBAbmFtZXNwYWNlIE93dC5CYXNlXG4gKi9cbmV4cG9ydCBjb25zdCBCYXNlID0gYmFzZTtcblxuLyoqXG4gKiBQMlAgV2ViUlRDIGNvbm5lY3Rpb25zLlxuICogQG5hbWVzcGFjZSBPd3QuUDJQXG4gKi9cbmV4cG9ydCBjb25zdCBQMlAgPSBwMnA7XG5cbi8qKlxuICogV2ViUlRDIGNvbm5lY3Rpb25zIHdpdGggY29uZmVyZW5jZSBzZXJ2ZXIuXG4gKiBAbmFtZXNwYWNlIE93dC5Db25mZXJlbmNlXG4gKi9cbmV4cG9ydCBjb25zdCBDb25mZXJlbmNlID0gY29uZmVyZW5jZTtcbiIsIi8vIENvcHlyaWdodCAoQykgPDIwMTg+IEludGVsIENvcnBvcmF0aW9uXG4vL1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY29uc3QgZXJyb3JzID0ge1xuICAvLyAyMTAwLTI5OTkgZm9yIFAyUCBlcnJvcnNcbiAgLy8gMjEwMC0yMTk5IGZvciBjb25uZWN0aW9uIGVycm9yc1xuICAvLyAyMTAwLTIxMDkgZm9yIHNlcnZlciBlcnJvcnNcbiAgUDJQX0NPTk5fU0VSVkVSX1VOS05PV046IHtcbiAgICBjb2RlOiAyMTAwLFxuICAgIG1lc3NhZ2U6ICdTZXJ2ZXIgdW5rbm93biBlcnJvci4nLFxuICB9LFxuICBQMlBfQ09OTl9TRVJWRVJfVU5BVkFJTEFCTEU6IHtcbiAgICBjb2RlOiAyMTAxLFxuICAgIG1lc3NhZ2U6ICdTZXJ2ZXIgaXMgdW5hdmFsaWFibGUuJyxcbiAgfSxcbiAgUDJQX0NPTk5fU0VSVkVSX0JVU1k6IHtcbiAgICBjb2RlOiAyMTAyLFxuICAgIG1lc3NhZ2U6ICdTZXJ2ZXIgaXMgdG9vIGJ1c3kuJyxcbiAgfSxcbiAgUDJQX0NPTk5fU0VSVkVSX05PVF9TVVBQT1JURUQ6IHtcbiAgICBjb2RlOiAyMTAzLFxuICAgIG1lc3NhZ2U6ICdNZXRob2QgaGFzIG5vdCBiZWVuIHN1cHBvcnRlZCBieSBzZXJ2ZXIuJyxcbiAgfSxcbiAgLy8gMjExMC0yMTE5IGZvciBjbGllbnQgZXJyb3JzXG4gIFAyUF9DT05OX0NMSUVOVF9VTktOT1dOOiB7XG4gICAgY29kZTogMjExMCxcbiAgICBtZXNzYWdlOiAnQ2xpZW50IHVua25vd24gZXJyb3IuJyxcbiAgfSxcbiAgUDJQX0NPTk5fQ0xJRU5UX05PVF9JTklUSUFMSVpFRDoge1xuICAgIGNvZGU6IDIxMTEsXG4gICAgbWVzc2FnZTogJ0Nvbm5lY3Rpb24gaXMgbm90IGluaXRpYWxpemVkLicsXG4gIH0sXG4gIC8vIDIxMjAtMjEyOSBmb3IgYXV0aGVudGljYXRpb24gZXJyb3JzXG4gIFAyUF9DT05OX0FVVEhfVU5LTk9XTjoge1xuICAgIGNvZGU6IDIxMjAsXG4gICAgbWVzc2FnZTogJ0F1dGhlbnRpY2F0aW9uIHVua25vd24gZXJyb3IuJyxcbiAgfSxcbiAgUDJQX0NPTk5fQVVUSF9GQUlMRUQ6IHtcbiAgICBjb2RlOiAyMTIxLFxuICAgIG1lc3NhZ2U6ICdXcm9uZyB1c2VybmFtZSBvciB0b2tlbi4nLFxuICB9LFxuICAvLyAyMjAwLTIyOTkgZm9yIG1lc3NhZ2UgdHJhbnNwb3J0IGVycm9yc1xuICBQMlBfTUVTU0FHSU5HX1RBUkdFVF9VTlJFQUNIQUJMRToge1xuICAgIGNvZGU6IDIyMDEsXG4gICAgbWVzc2FnZTogJ1JlbW90ZSB1c2VyIGNhbm5vdCBiZSByZWFjaGVkLicsXG4gIH0sXG4gIFAyUF9DTElFTlRfREVOSUVEOiB7XG4gICAgY29kZTogMjIwMixcbiAgICBtZXNzYWdlOiAnVXNlciBpcyBkZW5pZWQuJyxcbiAgfSxcbiAgLy8gMjMwMS0yMzk5IGZvciBjaGF0IHJvb20gZXJyb3JzXG4gIC8vIDI0MDEtMjQ5OSBmb3IgY2xpZW50IGVycm9yc1xuICBQMlBfQ0xJRU5UX1VOS05PV046IHtcbiAgICBjb2RlOiAyNDAwLFxuICAgIG1lc3NhZ2U6ICdVbmtub3duIGVycm9ycy4nLFxuICB9LFxuICBQMlBfQ0xJRU5UX1VOU1VQUE9SVEVEX01FVEhPRDoge1xuICAgIGNvZGU6IDI0MDEsXG4gICAgbWVzc2FnZTogJ1RoaXMgbWV0aG9kIGlzIHVuc3VwcG9ydGVkIGluIGN1cnJlbnQgYnJvd3Nlci4nLFxuICB9LFxuICBQMlBfQ0xJRU5UX0lMTEVHQUxfQVJHVU1FTlQ6IHtcbiAgICBjb2RlOiAyNDAyLFxuICAgIG1lc3NhZ2U6ICdJbGxlZ2FsIGFyZ3VtZW50LicsXG4gIH0sXG4gIFAyUF9DTElFTlRfSU5WQUxJRF9TVEFURToge1xuICAgIGNvZGU6IDI0MDMsXG4gICAgbWVzc2FnZTogJ0ludmFsaWQgcGVlciBzdGF0ZS4nLFxuICB9LFxuICBQMlBfQ0xJRU5UX05PVF9BTExPV0VEOiB7XG4gICAgY29kZTogMjQwNCxcbiAgICBtZXNzYWdlOiAnUmVtb3RlIHVzZXIgaXMgbm90IGFsbG93ZWQuJyxcbiAgfSxcbiAgLy8gMjUwMS0yNTk5IGZvciBXZWJSVEMgZXJyb3MuXG4gIFAyUF9XRUJSVENfVU5LTk9XTjoge1xuICAgIGNvZGU6IDI1MDAsXG4gICAgbWVzc2FnZTogJ1dlYlJUQyBlcnJvci4nLFxuICB9LFxuICBQMlBfV0VCUlRDX1NEUDoge1xuICAgIGNvZGU6IDI1MDIsXG4gICAgbWVzc2FnZTogJ1NEUCBlcnJvci4nLFxuICB9LFxufTtcblxuLyoqXG4gKiBAZnVuY3Rpb24gZ2V0RXJyb3JCeUNvZGVcbiAqIEBkZXNjIEdldCBlcnJvciBvYmplY3QgYnkgZXJyb3IgY29kZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvckNvZGUgRXJyb3IgY29kZS5cbiAqIEByZXR1cm4ge093dC5QMlAuRXJyb3J9IEVycm9yIG9iamVjdFxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yQnlDb2RlKGVycm9yQ29kZSkge1xuICBjb25zdCBjb2RlRXJyb3JNYXAgPSB7XG4gICAgMjEwMDogZXJyb3JzLlAyUF9DT05OX1NFUlZFUl9VTktOT1dOLFxuICAgIDIxMDE6IGVycm9ycy5QMlBfQ09OTl9TRVJWRVJfVU5BVkFJTEFCTEUsXG4gICAgMjEwMjogZXJyb3JzLlAyUF9DT05OX1NFUlZFUl9CVVNZLFxuICAgIDIxMDM6IGVycm9ycy5QMlBfQ09OTl9TRVJWRVJfTk9UX1NVUFBPUlRFRCxcbiAgICAyMTEwOiBlcnJvcnMuUDJQX0NPTk5fQ0xJRU5UX1VOS05PV04sXG4gICAgMjExMTogZXJyb3JzLlAyUF9DT05OX0NMSUVOVF9OT1RfSU5JVElBTElaRUQsXG4gICAgMjEyMDogZXJyb3JzLlAyUF9DT05OX0FVVEhfVU5LTk9XTixcbiAgICAyMTIxOiBlcnJvcnMuUDJQX0NPTk5fQVVUSF9GQUlMRUQsXG4gICAgMjIwMTogZXJyb3JzLlAyUF9NRVNTQUdJTkdfVEFSR0VUX1VOUkVBQ0hBQkxFLFxuICAgIDI0MDA6IGVycm9ycy5QMlBfQ0xJRU5UX1VOS05PV04sXG4gICAgMjQwMTogZXJyb3JzLlAyUF9DTElFTlRfVU5TVVBQT1JURURfTUVUSE9ELFxuICAgIDI0MDI6IGVycm9ycy5QMlBfQ0xJRU5UX0lMTEVHQUxfQVJHVU1FTlQsXG4gICAgMjQwMzogZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSxcbiAgICAyNDA0OiBlcnJvcnMuUDJQX0NMSUVOVF9OT1RfQUxMT1dFRCxcbiAgICAyNTAwOiBlcnJvcnMuUDJQX1dFQlJUQ19VTktOT1dOLFxuICAgIDI1MDE6IGVycm9ycy5QMlBfV0VCUlRDX1NEUCxcbiAgfTtcbiAgcmV0dXJuIGNvZGVFcnJvck1hcFtlcnJvckNvZGVdO1xufVxuXG4vKipcbiAqIEBjbGFzcyBQMlBFcnJvclxuICogQGNsYXNzRGVzYyBUaGUgUDJQRXJyb3Igb2JqZWN0IHJlcHJlc2VudHMgYW4gZXJyb3IgaW4gUDJQIG1vZGUuXG4gKiBAbWVtYmVyT2YgT3d0LlAyUFxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY2xhc3MgUDJQRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGNvbnN0cnVjdG9yKGVycm9yLCBtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuY29kZSA9IGVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvZGUgPSBlcnJvci5jb2RlO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBQMlBDbGllbnR9IGZyb20gJy4vcDJwY2xpZW50LmpzJztcbmV4cG9ydCB7UDJQRXJyb3J9IGZyb20gJy4vZXJyb3IuanMnO1xuIiwiLy8gQ29weXJpZ2h0IChDKSA8MjAxOD4gSW50ZWwgQ29ycG9yYXRpb25cbi8vXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vKiBnbG9iYWwgTWFwLCBQcm9taXNlICovXG5cbid1c2Ugc3RyaWN0JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vYmFzZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtFdmVudERpc3BhdGNoZXIsIE93dEV2ZW50fSBmcm9tICcuLi9iYXNlL2V2ZW50LmpzJztcbmltcG9ydCAqIGFzIEVycm9yTW9kdWxlIGZyb20gJy4vZXJyb3IuanMnO1xuaW1wb3J0IFAyUFBlZXJDb25uZWN0aW9uQ2hhbm5lbCBmcm9tICcuL3BlZXJjb25uZWN0aW9uLWNoYW5uZWwuanMnO1xuXG5jb25zdCBDb25uZWN0aW9uU3RhdGUgPSB7XG4gIFJFQURZOiAxLFxuICBDT05ORUNUSU5HOiAyLFxuICBDT05ORUNURUQ6IDMsXG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLyoqXG4gKiBAY2xhc3MgUDJQQ2xpZW50Q29uZmlndXJhdGlvblxuICogQGNsYXNzRGVzYyBDb25maWd1cmF0aW9uIGZvciBQMlBDbGllbnQuXG4gKiBAbWVtYmVyT2YgT3d0LlAyUFxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5jb25zdCBQMlBDbGllbnRDb25maWd1cmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gIC8qKlxuICAgKiBAbWVtYmVyIHs/QXJyYXk8T3d0LkJhc2UuQXVkaW9FbmNvZGluZ1BhcmFtZXRlcnM+fSBhdWRpb0VuY29kaW5nXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBFbmNvZGluZyBwYXJhbWV0ZXJzIGZvciBwdWJsaXNoaW5nIGF1ZGlvIHRyYWNrcy5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50Q29uZmlndXJhdGlvblxuICAgKi9cbiAgdGhpcy5hdWRpb0VuY29kaW5nID0gdW5kZWZpbmVkO1xuICAvKipcbiAgICogQG1lbWJlciB7P0FycmF5PE93dC5CYXNlLlZpZGVvRW5jb2RpbmdQYXJhbWV0ZXJzPn0gdmlkZW9FbmNvZGluZ1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgRW5jb2RpbmcgcGFyYW1ldGVycyBmb3IgcHVibGlzaGluZyB2aWRlbyB0cmFja3MuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudENvbmZpZ3VyYXRpb25cbiAgICovXG4gIHRoaXMudmlkZW9FbmNvZGluZyA9IHVuZGVmaW5lZDtcbiAgLyoqXG4gICAqIEBtZW1iZXIgez9SVENDb25maWd1cmF0aW9ufSBydGNDb25maWd1cmF0aW9uXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgT3d0LlAyUC5QMlBDbGllbnRDb25maWd1cmF0aW9uXG4gICAqIEBkZXNjIEl0IHdpbGwgYmUgdXNlZCBmb3IgY3JlYXRpbmcgUGVlckNvbm5lY3Rpb24uXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93ZWJydGMvI3J0Y2NvbmZpZ3VyYXRpb24tZGljdGlvbmFyeXxSVENDb25maWd1cmF0aW9uIERpY3Rpb25hcnkgb2YgV2ViUlRDIDEuMH0uXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIEZvbGxvd2luZyBvYmplY3QgY2FuIGJlIHNldCB0byBwMnBDbGllbnRDb25maWd1cmF0aW9uLnJ0Y0NvbmZpZ3VyYXRpb24uXG4gICAqIHtcbiAgICogICBpY2VTZXJ2ZXJzOiBbe1xuICAgKiAgICAgIHVybHM6IFwic3R1bjpleGFtcGxlLmNvbTozNDc4XCJcbiAgICogICB9LCB7XG4gICAqICAgICB1cmxzOiBbXG4gICAqICAgICAgIFwidHVybjpleGFtcGxlLmNvbTozNDc4P3RyYW5zcG9ydD11ZHBcIixcbiAgICogICAgICAgXCJ0dXJuOmV4YW1wbGUuY29tOjM0Nzg/dHJhbnNwb3J0PXRjcFwiXG4gICAqICAgICBdLFxuICAgKiAgICAgIGNyZWRlbnRpYWw6IFwicGFzc3dvcmRcIixcbiAgICogICAgICB1c2VybmFtZTogXCJ1c2VybmFtZVwiXG4gICAqICAgfVxuICAgKiB9XG4gICAqL1xuICB0aGlzLnJ0Y0NvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG59O1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEBjbGFzcyBQMlBDbGllbnRcbiAqIEBjbGFzc0Rlc2MgVGhlIFAyUENsaWVudCBoYW5kbGVzIFBlZXJDb25uZWN0aW9ucyBiZXR3ZWVuIGRpZmZlcmVudCBjbGllbnRzLlxuICogRXZlbnRzOlxuICpcbiAqIHwgRXZlbnQgTmFtZSAgICAgICAgICAgIHwgQXJndW1lbnQgVHlwZSAgICB8IEZpcmVkIHdoZW4gICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IHN0cmVhbWFkZGVkICAgICAgICAgICB8IFN0cmVhbUV2ZW50ICAgICAgfCBBIG5ldyBzdHJlYW0gaXMgc2VudCBmcm9tIHJlbW90ZSBlbmRwb2ludC4gfFxuICogfCBtZXNzYWdlcmVjZWl2ZWQgICAgICAgfCBNZXNzYWdlRXZlbnQgICAgIHwgQSBuZXcgbWVzc2FnZSBpcyByZWNlaXZlZC4gfFxuICogfCBzZXJ2ZXJkaXNjb25uZWN0ZWQgICAgfCBPd3RFdmVudCAgICAgICAgIHwgRGlzY29ubmVjdGVkIGZyb20gc2lnbmFsaW5nIHNlcnZlci4gfFxuICpcbiAqIEBtZW1iZXJvZiBPd3QuUDJQXG4gKiBAZXh0ZW5kcyBPd3QuQmFzZS5FdmVudERpc3BhdGNoZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHs/T3d0LlAyUC5QMlBDbGllbnRDb25maWd1cmF0aW9uIH0gY29uZmlndXJhdGlvbiBDb25maWd1cmF0aW9uIGZvciBPd3QuUDJQLlAyUENsaWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzaWduYWxpbmdDaGFubmVsIEEgY2hhbm5lbCBmb3Igc2VuZGluZyBhbmQgcmVjZWl2aW5nIHNpZ25hbGluZyBtZXNzYWdlcy5cbiAqL1xuY29uc3QgUDJQQ2xpZW50ID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbiwgc2lnbmFsaW5nQ2hhbm5lbCkge1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3IEV2ZW50RGlzcGF0Y2hlcigpKTtcbiAgY29uc3QgY29uZmlnID0gY29uZmlndXJhdGlvbjtcbiAgY29uc3Qgc2lnbmFsaW5nID0gc2lnbmFsaW5nQ2hhbm5lbDtcbiAgY29uc3QgY2hhbm5lbHMgPSBuZXcgTWFwKCk7IC8vIE1hcCBvZiBQZWVyQ29ubmVjdGlvbkNoYW5uZWxzLlxuICBjb25zdCBzZWxmPXRoaXM7XG4gIGxldCBzdGF0ZSA9IENvbm5lY3Rpb25TdGF0ZS5SRUFEWTtcbiAgbGV0IG15SWQ7XG5cbiAgc2lnbmFsaW5nLm9uTWVzc2FnZSA9IGZ1bmN0aW9uKG9yaWdpbiwgbWVzc2FnZSkge1xuICAgIExvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgc2lnbmFsaW5nIG1lc3NhZ2UgZnJvbSAnICsgb3JpZ2luICsgJzogJyArIG1lc3NhZ2UpO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xuICAgIGlmIChkYXRhLnR5cGUgPT09ICdjaGF0LWNsb3NlZCcpIHtcbiAgICAgIGlmIChjaGFubmVscy5oYXMob3JpZ2luKSkge1xuICAgICAgICBnZXRPckNyZWF0ZUNoYW5uZWwob3JpZ2luLCBmYWxzZSkub25NZXNzYWdlKGRhdGEpO1xuICAgICAgICBjaGFubmVscy5kZWxldGUob3JpZ2luKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNlbGYuYWxsb3dlZFJlbW90ZUlkcy5pbmRleE9mKG9yaWdpbikgPj0gMCkge1xuICAgICAgZ2V0T3JDcmVhdGVDaGFubmVsKG9yaWdpbiwgZmFsc2UpLm9uTWVzc2FnZShkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VuZFNpZ25hbGluZ01lc3NhZ2Uob3JpZ2luLCAnY2hhdC1jbG9zZWQnLFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0RFTklFRCk7XG4gICAgfVxuICB9O1xuXG4gIHNpZ25hbGluZy5vblNlcnZlckRpc2Nvbm5lY3RlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlID0gQ29ubmVjdGlvblN0YXRlLlJFQURZO1xuICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgT3d0RXZlbnQoJ3NlcnZlcmRpc2Nvbm5lY3RlZCcpKTtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlciB7YXJyYXl9IGFsbG93ZWRSZW1vdGVJZHNcbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBPbmx5IGFsbG93ZWQgcmVtb3RlIGVuZHBvaW50IElEcyBhcmUgYWJsZSB0byBwdWJsaXNoIHN0cmVhbSBvciBzZW5kIG1lc3NhZ2UgdG8gY3VycmVudCBlbmRwb2ludC4gUmVtb3ZpbmcgYW4gSUQgZnJvbSBhbGxvd2VkUmVtb3RlSWRzIGRvZXMgc3RvcCBleGlzdGluZyBjb25uZWN0aW9uIHdpdGggY2VydGFpbiBlbmRwb2ludC4gUGxlYXNlIGNhbGwgc3RvcCB0byBzdG9wIHRoZSBQZWVyQ29ubmVjdGlvbi5cbiAgICovXG4gIHRoaXMuYWxsb3dlZFJlbW90ZUlkcz1bXTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGNvbm5lY3RcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIENvbm5lY3QgdG8gc2lnbmFsaW5nIHNlcnZlci4gU2luY2Ugc2lnbmFsaW5nIGNhbiBiZSBjdXN0b21pemVkLCB0aGlzIG1ldGhvZCBkb2VzIG5vdCBkZWZpbmUgaG93IGEgdG9rZW4gbG9va3MgbGlrZS4gU0RLIHBhc3NlcyB0b2tlbiB0byBzaWduYWxpbmcgY2hhbm5lbCB3aXRob3V0IGNoYW5nZXMuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9rZW4gQSB0b2tlbiBmb3IgY29ubmVjdGluZyB0byBzaWduYWxpbmcgc2VydmVyLiBUaGUgZm9ybWF0IG9mIHRoaXMgdG9rZW4gZGVwZW5kcyBvbiBzaWduYWxpbmcgc2VydmVyJ3MgcmVxdWlyZW1lbnQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8b2JqZWN0LCBFcnJvcj59IEl0IHJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHdpdGggYW4gb2JqZWN0IHJldHVybmVkIGJ5IHNpZ25hbGluZyBjaGFubmVsIG9uY2Ugc2lnbmFsaW5nIGNoYW5uZWwgcmVwb3J0cyBjb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkLlxuICAgKi9cbiAgdGhpcy5jb25uZWN0ID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgICBpZiAoc3RhdGUgPT09IENvbm5lY3Rpb25TdGF0ZS5SRUFEWSkge1xuICAgICAgc3RhdGUgPSBDb25uZWN0aW9uU3RhdGUuQ09OTkVDVElORztcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ludmFsaWQgY29ubmVjdGlvbiBzdGF0ZTogJyArIHN0YXRlKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2lnbmFsaW5nLmNvbm5lY3QodG9rZW4pLnRoZW4oKGlkKSA9PiB7XG4gICAgICAgIG15SWQgPSBpZDtcbiAgICAgICAgc3RhdGUgPSBDb25uZWN0aW9uU3RhdGUuQ09OTkVDVEVEO1xuICAgICAgICByZXNvbHZlKG15SWQpO1xuICAgICAgfSwgKGVyckNvZGUpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihFcnJvck1vZHVsZS5nZXRFcnJvckJ5Q29kZShcbiAgICAgICAgICAgIGVyckNvZGUpKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGRpc2Nvbm5lY3RcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjIERpc2Nvbm5lY3QgZnJvbSB0aGUgc2lnbmFsaW5nIGNoYW5uZWwuIEl0IHN0b3BzIGFsbCBleGlzdGluZyBzZXNzaW9ucyB3aXRoIHJlbW90ZSBlbmRwb2ludHMuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKi9cbiAgdGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHN0YXRlID09IENvbm5lY3Rpb25TdGF0ZS5SRUFEWSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaGFubmVscy5mb3JFYWNoKChjaGFubmVsKT0+e1xuICAgICAgY2hhbm5lbC5zdG9wKCk7XG4gICAgfSk7XG4gICAgY2hhbm5lbHMuY2xlYXIoKTtcbiAgICBzaWduYWxpbmcuZGlzY29ubmVjdCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcHVibGlzaFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgUHVibGlzaCBhIHN0cmVhbSB0byBhIHJlbW90ZSBlbmRwb2ludC5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZW1vdGVJZCBSZW1vdGUgZW5kcG9pbnQncyBJRC5cbiAgICogQHBhcmFtIHtPd3QuQmFzZS5Mb2NhbFN0cmVhbX0gc3RyZWFtIEFuIE93dC5CYXNlLkxvY2FsU3RyZWFtIHRvIGJlIHB1Ymxpc2hlZC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxPd3QuQmFzZS5QdWJsaWNhdGlvbiwgRXJyb3I+fSBBIHByb21pc2VkIHRoYXQgcmVzb2x2ZXMgd2hlbiByZW1vdGUgc2lkZSByZWNlaXZlZCB0aGUgY2VydGFpbiBzdHJlYW0uIEhvd2V2ZXIsIHJlbW90ZSBlbmRwb2ludCBtYXkgbm90IGRpc3BsYXkgdGhpcyBzdHJlYW0sIG9yIGlnbm9yZSBpdC5cbiAgICovXG4gIHRoaXMucHVibGlzaCA9IGZ1bmN0aW9uKHJlbW90ZUlkLCBzdHJlYW0pIHtcbiAgICBpZiAoc3RhdGUgIT09IENvbm5lY3Rpb25TdGF0ZS5DT05ORUNURUQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSxcbiAgICAgICAgICAnUDJQIENsaWVudCBpcyBub3QgY29ubmVjdGVkIHRvIHNpZ25hbGluZyBjaGFubmVsLicpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWxsb3dlZFJlbW90ZUlkcy5pbmRleE9mKHJlbW90ZUlkKSA8IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfTk9UX0FMTE9XRUQpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShnZXRPckNyZWF0ZUNoYW5uZWwocmVtb3RlSWQsIHRydWUpLnB1Ymxpc2goc3RyZWFtKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzZW5kXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBTZW5kIGEgbWVzc2FnZSB0byByZW1vdGUgZW5kcG9pbnQuXG4gICAqIEBtZW1iZXJvZiBPd3QuUDJQLlAyUENsaWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlSWQgUmVtb3RlIGVuZHBvaW50J3MgSUQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIE1lc3NhZ2UgdG8gYmUgc2VudC4gSXQgc2hvdWxkIGJlIGEgc3RyaW5nLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHVuZGVmaW5lZCwgRXJyb3I+fSBJdCByZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB3aGVuIHJlbW90ZSBlbmRwb2ludCByZWNlaXZlZCBjZXJ0YWluIG1lc3NhZ2UuXG4gICAqL1xuICB0aGlzLnNlbmQ9ZnVuY3Rpb24ocmVtb3RlSWQsIG1lc3NhZ2UpIHtcbiAgICBpZiAoc3RhdGUgIT09IENvbm5lY3Rpb25TdGF0ZS5DT05ORUNURUQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSxcbiAgICAgICAgICAnUDJQIENsaWVudCBpcyBub3QgY29ubmVjdGVkIHRvIHNpZ25hbGluZyBjaGFubmVsLicpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWxsb3dlZFJlbW90ZUlkcy5pbmRleE9mKHJlbW90ZUlkKSA8IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfTk9UX0FMTE9XRUQpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShnZXRPckNyZWF0ZUNoYW5uZWwocmVtb3RlSWQsIHRydWUpLnNlbmQobWVzc2FnZSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc3RvcFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2MgQ2xlYW4gYWxsIHJlc291cmNlcyBhc3NvY2lhdGVkIHdpdGggZ2l2ZW4gcmVtb3RlIGVuZHBvaW50LiBJdCBtYXkgaW5jbHVkZSBSVENQZWVyQ29ubmVjdGlvbiwgUlRDUnRwVHJhbnNjZWl2ZXIgYW5kIFJUQ0RhdGFDaGFubmVsLiBJdCBzdGlsbCBwb3NzaWJsZSB0byBwdWJsaXNoIGEgc3RyZWFtLCBvciBzZW5kIGEgbWVzc2FnZSB0byBnaXZlbiByZW1vdGUgZW5kcG9pbnQgYWZ0ZXIgc3RvcC5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZW1vdGVJZCBSZW1vdGUgZW5kcG9pbnQncyBJRC5cbiAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgKi9cbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24ocmVtb3RlSWQpIHtcbiAgICBpZiAoIWNoYW5uZWxzLmhhcyhyZW1vdGVJZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICdObyBQZWVyQ29ubmVjdGlvbiBiZXR3ZWVuIGN1cnJlbnQgZW5kcG9pbnQgYW5kIHNwZWNpZmljIHJlbW90ZSAnICtcbiAgICAgICAgICAnZW5kcG9pbnQuJ1xuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hhbm5lbHMuZ2V0KHJlbW90ZUlkKS5zdG9wKCk7XG4gICAgY2hhbm5lbHMuZGVsZXRlKHJlbW90ZUlkKTtcbiAgfTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGdldFN0YXRzXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzYyBHZXQgc3RhdHMgb2YgdW5kZXJseWluZyBQZWVyQ29ubmVjdGlvbi5cbiAgICogQG1lbWJlcm9mIE93dC5QMlAuUDJQQ2xpZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZW1vdGVJZCBSZW1vdGUgZW5kcG9pbnQncyBJRC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSVENTdGF0c1JlcG9ydCwgRXJyb3I+fSBJdCByZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIGFuIFJUQ1N0YXRzUmVwb3J0IG9yIHJlamVjdCB3aXRoIGFuIEVycm9yIGlmIHRoZXJlIGlzIG5vIGNvbm5lY3Rpb24gd2l0aCBzcGVjaWZpYyB1c2VyLlxuICAgKi9cbiAgdGhpcy5nZXRTdGF0cyA9IGZ1bmN0aW9uKHJlbW90ZUlkKSB7XG4gICAgaWYgKCFjaGFubmVscy5oYXMocmVtb3RlSWQpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUsXG4gICAgICAgICAgJ05vIFBlZXJDb25uZWN0aW9uIGJldHdlZW4gY3VycmVudCBlbmRwb2ludCBhbmQgc3BlY2lmaWMgcmVtb3RlICcgK1xuICAgICAgICAgICdlbmRwb2ludC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFubmVscy5nZXQocmVtb3RlSWQpLmdldFN0YXRzKCk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZFNpZ25hbGluZ01lc3NhZ2UgPSBmdW5jdGlvbihyZW1vdGVJZCwgdHlwZSwgbWVzc2FnZSkge1xuICAgIGNvbnN0IG1zZyA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgfTtcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgbXNnLmRhdGEgPSBtZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4gc2lnbmFsaW5nLnNlbmQocmVtb3RlSWQsIEpTT04uc3RyaW5naWZ5KG1zZykpLmNhdGNoKChlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRocm93IEVycm9yTW9kdWxlLmdldEVycm9yQnlDb2RlKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldE9yQ3JlYXRlQ2hhbm5lbCA9IGZ1bmN0aW9uKHJlbW90ZUlkLCBpc0luaXRpYWxpemVyKSB7XG4gICAgaWYgKCFjaGFubmVscy5oYXMocmVtb3RlSWQpKSB7XG4gICAgICAvLyBDb25zdHJ1Y3QgYW4gc2lnbmFsaW5nIHNlbmRlci9yZWNlaXZlciBmb3IgUDJQUGVlckNvbm5lY3Rpb24uXG4gICAgICBjb25zdCBzaWduYWxpbmdGb3JDaGFubmVsID0gT2JqZWN0LmNyZWF0ZShFdmVudERpc3BhdGNoZXIpO1xuICAgICAgc2lnbmFsaW5nRm9yQ2hhbm5lbC5zZW5kU2lnbmFsaW5nTWVzc2FnZSA9IHNlbmRTaWduYWxpbmdNZXNzYWdlO1xuICAgICAgY29uc3QgcGNjID0gbmV3IFAyUFBlZXJDb25uZWN0aW9uQ2hhbm5lbChjb25maWcsIG15SWQsIHJlbW90ZUlkLFxuICAgICAgICAgIHNpZ25hbGluZ0ZvckNoYW5uZWwsIGlzSW5pdGlhbGl6ZXIpO1xuICAgICAgcGNjLmFkZEV2ZW50TGlzdGVuZXIoJ3N0cmVhbWFkZGVkJywgKHN0cmVhbUV2ZW50KT0+e1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoc3RyZWFtRXZlbnQpO1xuICAgICAgfSk7XG4gICAgICBwY2MuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZXJlY2VpdmVkJywgKG1lc3NhZ2VFdmVudCk9PntcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG1lc3NhZ2VFdmVudCk7XG4gICAgICB9KTtcbiAgICAgIHBjYy5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpPT57XG4gICAgICAgIGNoYW5uZWxzLmRlbGV0ZShyZW1vdGVJZCk7XG4gICAgICB9KTtcbiAgICAgIGNoYW5uZWxzLnNldChyZW1vdGVJZCwgcGNjKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5uZWxzLmdldChyZW1vdGVJZCk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQMlBDbGllbnQ7XG4iLCIvLyBDb3B5cmlnaHQgKEMpIDwyMDE4PiBJbnRlbCBDb3Jwb3JhdGlvblxuLy9cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8vIFRoaXMgZmlsZSBkb2Vzbid0IGhhdmUgcHVibGljIEFQSXMuXG4vKiBlc2xpbnQtZGlzYWJsZSB2YWxpZC1qc2RvYyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYyAqL1xuLyogZ2xvYmFsIEV2ZW50LCBNYXAsIFByb21pc2UsIFJUQ0ljZUNhbmRpZGF0ZSwgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLFxuICAgUlRDUGVlckNvbm5lY3Rpb24sIG5hdmlnYXRvciAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vYmFzZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtFdmVudERpc3BhdGNoZXIsIE1lc3NhZ2VFdmVudCwgT3d0RXZlbnR9IGZyb20gJy4uL2Jhc2UvZXZlbnQuanMnO1xuaW1wb3J0IHtQdWJsaWNhdGlvbn0gZnJvbSAnLi4vYmFzZS9wdWJsaWNhdGlvbi5qcyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi9iYXNlL3V0aWxzLmpzJztcbmltcG9ydCAqIGFzIEVycm9yTW9kdWxlIGZyb20gJy4vZXJyb3IuanMnO1xuaW1wb3J0ICogYXMgU3RyZWFtTW9kdWxlIGZyb20gJy4uL2Jhc2Uvc3RyZWFtLmpzJztcbmltcG9ydCAqIGFzIFNkcFV0aWxzIGZyb20gJy4uL2Jhc2Uvc2RwdXRpbHMuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWxFdmVudFxuICogQGRlc2MgRXZlbnQgZm9yIFN0cmVhbS5cbiAqIEBtZW1iZXJPZiBPd3QuUDJQXG4gKiBAcHJpdmF0ZVxuICogKi9cbmV4cG9ydCBjbGFzcyBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWxFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2MgKi9cbiAgY29uc3RydWN0b3IoaW5pdCkge1xuICAgIHN1cGVyKGluaXQpO1xuICAgIHRoaXMuc3RyZWFtID0gaW5pdC5zdHJlYW07XG4gIH1cbn1cblxuY29uc3QgRGF0YUNoYW5uZWxMYWJlbCA9IHtcbiAgTUVTU0FHRTogJ21lc3NhZ2UnLFxuICBGSUxFOiAnZmlsZScsXG59O1xuXG5jb25zdCBTaWduYWxpbmdUeXBlID0ge1xuICBERU5JRUQ6ICdjaGF0LWRlbmllZCcsXG4gIENMT1NFRDogJ2NoYXQtY2xvc2VkJyxcbiAgTkVHT1RJQVRJT05fTkVFREVEOiAnY2hhdC1uZWdvdGlhdGlvbi1uZWVkZWQnLFxuICBUUkFDS19TT1VSQ0VTOiAnY2hhdC10cmFjay1zb3VyY2VzJyxcbiAgU1RSRUFNX0lORk86ICdjaGF0LXN0cmVhbS1pbmZvJyxcbiAgU0RQOiAnY2hhdC1zaWduYWwnLFxuICBUUkFDS1NfQURERUQ6ICdjaGF0LXRyYWNrcy1hZGRlZCcsXG4gIFRSQUNLU19SRU1PVkVEOiAnY2hhdC10cmFja3MtcmVtb3ZlZCcsXG4gIERBVEFfUkVDRUlWRUQ6ICdjaGF0LWRhdGEtcmVjZWl2ZWQnLFxuICBVQTogJ2NoYXQtdWEnLFxufTtcblxuY29uc3Qgc3lzSW5mbyA9IFV0aWxzLnN5c0luZm8oKTtcblxuLyoqXG4gKiBAY2xhc3MgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsXG4gKiBAZGVzYyBBIFAyUFBlZXJDb25uZWN0aW9uQ2hhbm5lbCBoYW5kbGVzIGFsbCBpbnRlcmFjdGlvbnMgYmV0d2VlbiB0aGlzIGVuZHBvaW50IGFuZCBhIHJlbW90ZSBlbmRwb2ludC5cbiAqIEBtZW1iZXJPZiBPd3QuUDJQXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBQMlBQZWVyQ29ubmVjdGlvbkNoYW5uZWwgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAvLyB8c2lnbmFsaW5nfCBpcyBhbiBvYmplY3QgaGFzIGEgbWV0aG9kIHxzZW5kU2lnbmFsaW5nTWVzc2FnZXwuXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgbG9jYWxJZCwgcmVtb3RlSWQsIHNpZ25hbGluZywgaXNJbml0aWFsaXplcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2xvY2FsSWQgPSBsb2NhbElkO1xuICAgIHRoaXMuX3JlbW90ZUlkID0gcmVtb3RlSWQ7XG4gICAgdGhpcy5fc2lnbmFsaW5nID0gc2lnbmFsaW5nO1xuICAgIHRoaXMuX3BjID0gbnVsbDtcbiAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1zID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgc3RyZWFtcyBwdWJsaXNoZWQsIHZhbHVlIGlzIGl0cyBwdWJsaWNhdGlvbi5cbiAgICB0aGlzLl9wZW5kaW5nU3RyZWFtcyA9IFtdOyAvLyBTdHJlYW1zIGdvaW5nIHRvIGJlIGFkZGVkIHRvIFBlZXJDb25uZWN0aW9uLlxuICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zID0gW107IC8vIFN0cmVhbXMgaGF2ZSBiZWVuIGFkZGVkIHRvIFBlZXJDb25uZWN0aW9uLCBidXQgZG9lcyBub3QgcmVjZWl2ZSBhY2sgZnJvbSByZW1vdGUgc2lkZS5cbiAgICB0aGlzLl9wZW5kaW5nVW5wdWJsaXNoU3RyZWFtcyA9IFtdOyAvLyBTdHJlYW1zIGdvaW5nIHRvIGJlIHJlbW92ZWQuXG4gICAgLy8gS2V5IGlzIE1lZGlhU3RyZWFtJ3MgSUQsIHZhbHVlIGlzIGFuIG9iamVjdCB7c291cmNlOnthdWRpbzpzdHJpbmcsIHZpZGVvOnN0cmluZ30sIGF0dHJpYnV0ZXM6IG9iamVjdCwgc3RyZWFtOiBSZW1vdGVTdHJlYW0sIG1lZGlhU3RyZWFtOiBNZWRpYVN0cmVhbX0uIGBzdHJlYW1gIGFuZCBgbWVkaWFTdHJlYW1gIHdpbGwgYmUgc2V0IHdoZW4gYHRyYWNrYCBldmVudCBpcyBmaXJlZCBvbiBgUlRDUGVlckNvbm5lY3Rpb25gLiBgbWVkaWFTdHJlYW1gIHdpbGwgYmUgYG51bGxgIGFmdGVyIGBzdHJlYW1hZGRlZGAgZXZlbnQgaXMgZmlyZWQgb24gYFAyUENsaWVudGAuIE90aGVyIHByb3BlcnRlcyB3aWxsIGJlIHNldCB1cG9uIGBTVFJFQU1fSU5GT2AgZXZlbnQgZnJvbSBzaWduYWxpbmcgY2hhbm5lbC5cbiAgICB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuX3JlbW90ZVN0cmVhbXMgPSBbXTtcbiAgICB0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8gPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBNZWRpYVN0cmVhbVRyYWNrJ3MgSUQsIHZhbHVlIGlzIHNvdXJjZSBpbmZvLlxuICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIE1lZGlhU3RyZWFtJ3MgSUQsIHZhbHVlIGlzIGFuIG9iamVjdCBoYXMgfHJlc29sdmV8IGFuZCB8cmVqZWN0fC5cbiAgICB0aGlzLl91bnB1Ymxpc2hQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIE1lZGlhU3RyZWFtJ3MgSUQsIHZhbHVlIGlzIGFuIG9iamVjdCBoYXMgfHJlc29sdmV8IGFuZCB8cmVqZWN0fC5cbiAgICB0aGlzLl9wdWJsaXNoaW5nU3RyZWFtVHJhY2tzID0gbmV3IE1hcCgpOyAvLyBLZXkgaXMgTWVkaWFTdHJlYW0ncyBJRCwgdmFsdWUgaXMgYW4gYXJyYXkgb2YgdGhlIElEIG9mIGl0cyBNZWRpYVN0cmVhbVRyYWNrcyB0aGF0IGhhdmVuJ3QgYmVlbiBhY2tlZC5cbiAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1UcmFja3MgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBNZWRpYVN0cmVhbSdzIElELCB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0aGUgSUQgb2YgaXRzIE1lZGlhU3RyZWFtVHJhY2tzIHRoYXQgaGF2ZW4ndCBiZWVuIHJlbW92ZWQuXG4gICAgdGhpcy5faXNOZWdvdGlhdGlvbk5lZWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1JlbW92ZVN0cmVhbSA9IHRydWU7XG4gICAgdGhpcy5fcmVtb3RlU2lkZVN1cHBvcnRzUGxhbkIgPSB0cnVlO1xuICAgIHRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1VuaWZpZWRQbGFuID0gdHJ1ZTtcbiAgICB0aGlzLl9yZW1vdGVTaWRlSWdub3Jlc0RhdGFDaGFubmVsQWNrcyA9IGZhbHNlO1xuICAgIHRoaXMuX3JlbW90ZUljZUNhbmRpZGF0ZXMgPSBbXTtcbiAgICB0aGlzLl9kYXRhQ2hhbm5lbHMgPSBuZXcgTWFwKCk7IC8vIEtleSBpcyBkYXRhIGNoYW5uZWwncyBsYWJlbCwgdmFsdWUgaXMgYSBSVENEYXRhQ2hhbm5lbC5cbiAgICB0aGlzLl9wZW5kaW5nTWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLl9kYXRhU2VxID0gMTsgLy8gU2VxdWVuY2UgbnVtYmVyIGZvciBkYXRhIGNoYW5uZWwgbWVzc2FnZXMuXG4gICAgdGhpcy5fc2VuZERhdGFQcm9taXNlcyA9IG5ldyBNYXAoKTsgLy8gS2V5IGlzIGRhdGEgc2VxdWVuY2UgbnVtYmVyLCB2YWx1ZSBpcyBhbiBvYmplY3QgaGFzIHxyZXNvbHZlfCBhbmQgfHJlamVjdHwuXG4gICAgdGhpcy5fYWRkZWRUcmFja0lkcyA9IFtdOyAvLyBUcmFja3MgdGhhdCBoYXZlIGJlZW4gYWRkZWQgYWZ0ZXIgcmVjZWl2aW5nIHJlbW90ZSBTRFAgYnV0IGJlZm9yZSBjb25uZWN0aW9uIGlzIGVzdGFibGlzaGVkLiBEcmFpbmluZyB0aGVzZSBtZXNzYWdlcyB3aGVuIElDRSBjb25uZWN0aW9uIHN0YXRlIGlzIGNvbm5lY3RlZC5cbiAgICB0aGlzLl9pc0NhbGxlciA9IHRydWU7XG4gICAgdGhpcy5faW5mb1NlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9kaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NyZWF0ZVBlZXJDb25uZWN0aW9uKCk7XG4gICAgaWYgKGlzSW5pdGlhbGl6ZXIpIHtcbiAgICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuQ0xPU0VEKTtcbiAgICB9XG4gICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5VQSwgc3lzSW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHB1Ymxpc2hcbiAgICogQGRlc2MgUHVibGlzaCBhIHN0cmVhbSB0byB0aGUgcmVtb3RlIGVuZHBvaW50LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHVibGlzaChzdHJlYW0pIHtcbiAgICBpZiAoIShzdHJlYW0gaW5zdGFuY2VvZiBTdHJlYW1Nb2R1bGUuTG9jYWxTdHJlYW0pKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignSW52YWxpZCBzdHJlYW0uJykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHVibGlzaGVkU3RyZWFtcy5oYXMoc3RyZWFtKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTExFR0FMX0FSR1VNRU5ULFxuICAgICAgICAgICdEdXBsaWNhdGVkIHN0cmVhbS4nKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hcmVBbGxUcmFja3NFbmRlZChzdHJlYW0ubWVkaWFTdHJlYW0pKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgIEVycm9yTW9kdWxlLmVycm9ycy5QMlBfQ0xJRU5UX0lOVkFMSURfU1RBVEUsXG4gICAgICAgICAgJ0FsbCB0cmFja3MgYXJlIGVuZGVkLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3NlbmRTdHJlYW1JbmZvKHN0cmVhbSkudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBSZXBsYWNlIHxhZGRTdHJlYW18IHdpdGggUGVlckNvbm5lY3Rpb24uYWRkVHJhY2sgd2hlbiBhbGwgYnJvd3NlcnMgYXJlIHJlYWR5LlxuICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHN0cmVhbS5tZWRpYVN0cmVhbS5nZXRUcmFja3MoKSkge1xuICAgICAgICAgIHRoaXMuX3BjLmFkZFRyYWNrKHRyYWNrLCBzdHJlYW0ubWVkaWFTdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uTmVnb3RpYXRpb25uZWVkZWQoKTtcbiAgICAgICAgdGhpcy5fcHVibGlzaGluZ1N0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgICBjb25zdCB0cmFja0lkcyA9IEFycmF5LmZyb20oc3RyZWFtLm1lZGlhU3RyZWFtLmdldFRyYWNrcygpLFxuICAgICAgICAgICAgKHRyYWNrKSA9PiB0cmFjay5pZCk7XG4gICAgICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1UcmFja3Muc2V0KHN0cmVhbS5tZWRpYVN0cmVhbS5pZCxcbiAgICAgICAgICAgIHRyYWNrSWRzKTtcbiAgICAgICAgdGhpcy5fcHVibGlzaFByb21pc2VzLnNldChzdHJlYW0ubWVkaWFTdHJlYW0uaWQsIHtcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzZW5kXG4gICAqIEBkZXNjIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSByZW1vdGUgZW5kcG9pbnQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZW5kKG1lc3NhZ2UpIHtcbiAgICBpZiAoISh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignSW52YWxpZCBtZXNzYWdlLicpKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGlkOiB0aGlzLl9kYXRhU2VxKyssXG4gICAgICBkYXRhOiBtZXNzYWdlLFxuICAgIH07XG4gICAgaWYgKCF0aGlzLl9kYXRhQ2hhbm5lbHMuaGFzKERhdGFDaGFubmVsTGFiZWwuTUVTU0FHRSkpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZURhdGFDaGFubmVsKERhdGFDaGFubmVsTGFiZWwuTUVTU0FHRSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGMgPSB0aGlzLl9kYXRhQ2hhbm5lbHMuZ2V0KERhdGFDaGFubmVsTGFiZWwuTUVTU0FHRSk7XG4gICAgaWYgKGRjLnJlYWR5U3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgdGhpcy5fZGF0YUNoYW5uZWxzLmdldChEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpXG4gICAgICAgICAgLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wZW5kaW5nTWVzc2FnZXMucHVzaChkYXRhKTtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMuc2V0KGRhdGEuaWQsIHtcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzdG9wXG4gICAqIEBkZXNjIFN0b3AgdGhlIGNvbm5lY3Rpb24gd2l0aCByZW1vdGUgZW5kcG9pbnQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdG9wKCkge1xuICAgIHRoaXMuX3N0b3AodW5kZWZpbmVkLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZ2V0U3RhdHNcbiAgICogQGRlc2MgR2V0IHN0YXRzIGZvciBhIHNwZWNpZmljIE1lZGlhU3RyZWFtLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0U3RhdHMobWVkaWFTdHJlYW0pIHtcbiAgICBpZiAodGhpcy5fcGMpIHtcbiAgICAgIGlmIChtZWRpYVN0cmVhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYy5nZXRTdGF0cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHJhY2tzU3RhdHNSZXBvcnRzID0gW107XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbbWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCgodHJhY2spID0+IHtcbiAgICAgICAgICB0aGlzLl9nZXRTdGF0cyh0cmFjaywgdHJhY2tzU3RhdHNSZXBvcnRzKTtcbiAgICAgICAgfSldKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJhY2tzU3RhdHNSZXBvcnRzKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTlZBTElEX1NUQVRFKSk7XG4gICAgfVxuICB9XG5cbiAgX2dldFN0YXRzKG1lZGlhU3RyZWFtVHJhY2ssIHJlcG9ydHNSZXN1bHQpIHtcbiAgICByZXR1cm4gdGhpcy5fcGMuZ2V0U3RhdHMobWVkaWFTdHJlYW1UcmFjaykudGhlbihcbiAgICAgICAgKHN0YXRzUmVwb3J0KSA9PiB7XG4gICAgICAgICAgcmVwb3J0c1Jlc3VsdC5wdXNoKHN0YXRzUmVwb3J0KTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIG9uTWVzc2FnZVxuICAgKiBAZGVzYyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgUDJQQ2xpZW50IHdoZW4gdGhlcmUgaXMgbmV3IHNpZ25hbGluZyBtZXNzYWdlIGFycml2ZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBvbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHRoaXMuX1NpZ25hbGluZ01lc3NzYWdlSGFuZGxlcihtZXNzYWdlKTtcbiAgfVxuXG4gIF9zZW5kU2RwKHNkcCkge1xuICAgIHJldHVybiB0aGlzLl9zaWduYWxpbmcuc2VuZFNpZ25hbGluZ01lc3NhZ2UoXG4gICAgICAgIHRoaXMuX3JlbW90ZUlkLCBTaWduYWxpbmdUeXBlLlNEUCwgc2RwKTtcbiAgfVxuXG4gIF9zZW5kU2lnbmFsaW5nTWVzc2FnZSh0eXBlLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25hbGluZy5zZW5kU2lnbmFsaW5nTWVzc2FnZSh0aGlzLl9yZW1vdGVJZCwgdHlwZSwgbWVzc2FnZSk7XG4gIH1cblxuICBfU2lnbmFsaW5nTWVzc3NhZ2VIYW5kbGVyKG1lc3NhZ2UpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0NoYW5uZWwgcmVjZWl2ZWQgbWVzc2FnZTogJyArIG1lc3NhZ2UpO1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuVUE6XG4gICAgICAgIHRoaXMuX2hhbmRsZVJlbW90ZUNhcGFiaWxpdHkobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuVFJBQ0tfU09VUkNFUzpcbiAgICAgICAgdGhpcy5fdHJhY2tTb3VyY2VzSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2lnbmFsaW5nVHlwZS5TVFJFQU1fSU5GTzpcbiAgICAgICAgdGhpcy5fc3RyZWFtSW5mb0hhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNpZ25hbGluZ1R5cGUuU0RQOlxuICAgICAgICB0aGlzLl9zZHBIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLlRSQUNLU19BRERFRDpcbiAgICAgICAgdGhpcy5fdHJhY2tzQWRkZWRIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLlRSQUNLU19SRU1PVkVEOlxuICAgICAgICB0aGlzLl90cmFja3NSZW1vdmVkSGFuZGxlcihtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2lnbmFsaW5nVHlwZS5EQVRBX1JFQ0VJVkVEOlxuICAgICAgICB0aGlzLl9kYXRhUmVjZWl2ZWRIYW5kbGVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTaWduYWxpbmdUeXBlLkNMT1NFRDpcbiAgICAgICAgdGhpcy5fY2hhdENsb3NlZEhhbmRsZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBMb2dnZXIuZXJyb3IoJ0ludmFsaWQgc2lnbmFsaW5nIG1lc3NhZ2UgcmVjZWl2ZWQuIFR5cGU6ICcgK1xuICAgICAgICAgICAgbWVzc2FnZS50eXBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF90cmFja3NBZGRlZEhhbmRsZXJcbiAgICogQGRlc2MgSGFuZGxlIHRyYWNrIGFkZGVkIGV2ZW50IGZyb20gcmVtb3RlIHNpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdHJhY2tzQWRkZWRIYW5kbGVyKGlkcykge1xuICAgIC8vIEN1cnJlbnRseSwgfGlkc3wgY29udGFpbnMgYWxsIHRyYWNrIElEcyBvZiBhIE1lZGlhU3RyZWFtLiBGb2xsb3dpbmcgYWxnb3JpdGhtIGFsc28gaGFuZGxlcyB8aWRzfCBpcyBhIHBhcnQgb2YgYSBNZWRpYVN0cmVhbSdzIHRyYWNrcy5cbiAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgLy8gSXQgY291bGQgYmUgYSBwcm9ibGVtIGlmIHRoZXJlIGlzIGEgdHJhY2sgcHVibGlzaGVkIHdpdGggZGlmZmVyZW50IE1lZGlhU3RyZWFtcy5cbiAgICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1UcmFja3MuZm9yRWFjaCgobWVkaWFUcmFja0lkcywgbWVkaWFTdHJlYW1JZCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lZGlhVHJhY2tJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobWVkaWFUcmFja0lkc1tpXSA9PT0gaWQpIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdGhpcyB0cmFjayBmcm9tIHB1Ymxpc2hpbmcgdHJhY2tzIHRvIHB1Ymxpc2hlZCB0cmFja3MuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3B1Ymxpc2hlZFN0cmVhbVRyYWNrcy5oYXMobWVkaWFTdHJlYW1JZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtVHJhY2tzLnNldChtZWRpYVN0cmVhbUlkLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1UcmFja3MuZ2V0KG1lZGlhU3RyZWFtSWQpLnB1c2goXG4gICAgICAgICAgICAgICAgbWVkaWFUcmFja0lkc1tpXSk7XG4gICAgICAgICAgICBtZWRpYVRyYWNrSWRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUmVzb2x2aW5nIGNlcnRhaW4gcHVibGlzaCBwcm9taXNlIHdoZW4gcmVtb3RlIGVuZHBvaW50IHJlY2VpdmVkIGFsbCB0cmFja3Mgb2YgYSBNZWRpYVN0cmVhbS5cbiAgICAgICAgICBpZiAobWVkaWFUcmFja0lkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9wdWJsaXNoUHJvbWlzZXMuaGFzKG1lZGlhU3RyZWFtSWQpKSB7XG4gICAgICAgICAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCB0aGUgcHJvbWlzZSBmb3IgcHVibGlzaGluZyAnICtcbiAgICAgICAgICAgICAgICBtZWRpYVN0cmVhbUlkKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJlYW1JbmRleCA9IHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5tZWRpYVN0cmVhbS5pZCA9PSBtZWRpYVN0cmVhbUlkKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmVhbSA9IHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zW3RhcmdldFN0cmVhbUluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hpbmdTdHJlYW1zLnNwbGljZSh0YXJnZXRTdHJlYW1JbmRleCwgMSk7XG4gICAgICAgICAgICBjb25zdCBwdWJsaWNhdGlvbiA9IG5ldyBQdWJsaWNhdGlvbihcbiAgICAgICAgICAgICAgICBpZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fdW5wdWJsaXNoKHRhcmdldFN0cmVhbSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY2F0aW9uLmRpc3BhdGNoRXZlbnQobmV3IE93dEV2ZW50KCdlbmRlZCcpKTtcbiAgICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIFVzZSBkZWJ1ZyBtb2RlIGJlY2F1c2UgdGhpcyBlcnJvciB1c3VhbGx5IGRvZXNuJ3QgYmxvY2sgc3RvcHBpbmcgYSBwdWJsaWNhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1NvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCBkdXJpbmcgc3RvcHBpbmcgYSAnK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3B1YmxpY2F0aW9uLiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRTdHJlYW0gfHwgIXRhcmdldFN0cmVhbS5tZWRpYVN0cmVhbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yTW9kdWxlLlAyUEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSU5WQUxJRF9TVEFURSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdQdWJsaWNhdGlvbiBpcyBub3QgYXZhaWxhYmxlLicpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0YXRzKHRhcmdldFN0cmVhbS5tZWRpYVN0cmVhbSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1zLnNldCh0YXJnZXRTdHJlYW0sIHB1YmxpY2F0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hQcm9taXNlcy5nZXQobWVkaWFTdHJlYW1JZCkucmVzb2x2ZShwdWJsaWNhdGlvbik7XG4gICAgICAgICAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuZGVsZXRlKG1lZGlhU3RyZWFtSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfdHJhY2tzUmVtb3ZlZEhhbmRsZXJcbiAgICogQGRlc2MgSGFuZGxlIHRyYWNrIHJlbW92ZWQgZXZlbnQgZnJvbSByZW1vdGUgc2lkZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF90cmFja3NSZW1vdmVkSGFuZGxlcihpZHMpIHtcbiAgICAvLyBDdXJyZW50bHksIHxpZHN8IGNvbnRhaW5zIGFsbCB0cmFjayBJRHMgb2YgYSBNZWRpYVN0cmVhbS4gRm9sbG93aW5nIGFsZ29yaXRobSBhbHNvIGhhbmRsZXMgfGlkc3wgaXMgYSBwYXJ0IG9mIGEgTWVkaWFTdHJlYW0ncyB0cmFja3MuXG4gICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHtcbiAgICAgIC8vIEl0IGNvdWxkIGJlIGEgcHJvYmxlbSBpZiB0aGVyZSBpcyBhIHRyYWNrIHB1Ymxpc2hlZCB3aXRoIGRpZmZlcmVudCBNZWRpYVN0cmVhbXMuXG4gICAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1UcmFja3MuZm9yRWFjaCgobWVkaWFUcmFja0lkcywgbWVkaWFTdHJlYW1JZCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lZGlhVHJhY2tJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobWVkaWFUcmFja0lkc1tpXSA9PT0gaWQpIHtcbiAgICAgICAgICAgIG1lZGlhVHJhY2tJZHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBfZGF0YVJlY2VpdmVkSGFuZGxlclxuICAgKiBAZGVzYyBIYW5kbGUgZGF0YSByZWNlaXZlZCBldmVudCBmcm9tIHJlbW90ZSBzaWRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2RhdGFSZWNlaXZlZEhhbmRsZXIoaWQpIHtcbiAgICBpZiAoIXRoaXMuX3NlbmREYXRhUHJvbWlzZXMuaGFzKGlkKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ1JlY2VpdmVkIHVua25vd24gZGF0YSByZWNlaXZlZCBtZXNzYWdlLiBJRDogJyArIGlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VuZERhdGFQcm9taXNlcy5nZXQoaWQpLnJlc29sdmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF9zZHBIYW5kbGVyXG4gICAqIEBkZXNjIEhhbmRsZSBTRFAgcmVjZWl2ZWQgZXZlbnQgZnJvbSByZW1vdGUgc2lkZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZHBIYW5kbGVyKHNkcCkge1xuICAgIGlmIChzZHAudHlwZSA9PT0gJ29mZmVyJykge1xuICAgICAgdGhpcy5fb25PZmZlcihzZHApO1xuICAgIH0gZWxzZSBpZiAoc2RwLnR5cGUgPT09ICdhbnN3ZXInKSB7XG4gICAgICB0aGlzLl9vbkFuc3dlcihzZHApO1xuICAgIH0gZWxzZSBpZiAoc2RwLnR5cGUgPT09ICdjYW5kaWRhdGVzJykge1xuICAgICAgdGhpcy5fb25SZW1vdGVJY2VDYW5kaWRhdGUoc2RwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF90cmFja1NvdXJjZXNIYW5kbGVyXG4gICAqIEBkZXNjIFJlY2VpdmVkIHRyYWNrIHNvdXJjZSBpbmZvcm1hdGlvbiBmcm9tIHJlbW90ZSBzaWRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3RyYWNrU291cmNlc0hhbmRsZXIoZGF0YSkge1xuICAgIGZvciAoY29uc3QgaW5mbyBvZiBkYXRhKSB7XG4gICAgICB0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8uc2V0KGluZm8uaWQsIGluZm8uc291cmNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF9zdHJlYW1JbmZvSGFuZGxlclxuICAgKiBAZGVzYyBSZWNlaXZlZCBzdHJlYW0gaW5mb3JtYXRpb24gZnJvbSByZW1vdGUgc2lkZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zdHJlYW1JbmZvSGFuZGxlcihkYXRhKSB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnVW5leHBlY3RlZCBzdHJlYW0gaW5mby4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5zZXQoZGF0YS5pZCwge1xuICAgICAgc291cmNlOiBkYXRhLnNvdXJjZSxcbiAgICAgIGF0dHJpYnV0ZXM6IGRhdGEuYXR0cmlidXRlcyxcbiAgICAgIHN0cmVhbTogbnVsbCxcbiAgICAgIG1lZGlhU3RyZWFtOiBudWxsLFxuICAgICAgdHJhY2tJZHM6IGRhdGEudHJhY2tzLCAvLyBUcmFjayBJRHMgbWF5IG5vdCBtYXRjaCBhdCBzZW5kZXIgYW5kIHJlY2VpdmVyIHNpZGVzLiBLZWVwIGl0IGZvciBsZWdhY3kgcG9ycG9zZXMuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIF9jaGF0Q2xvc2VkSGFuZGxlclxuICAgKiBAZGVzYyBSZWNlaXZlZCBjaGF0IGNsb3NlZCBldmVudCBmcm9tIHJlbW90ZSBzaWRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NoYXRDbG9zZWRIYW5kbGVyKGRhdGEpIHtcbiAgICB0aGlzLl9kaXNwb3NlZCA9IHRydWU7XG4gICAgdGhpcy5fc3RvcChkYXRhLCBmYWxzZSk7XG4gIH1cblxuICBfb25PZmZlcihzZHApIHtcbiAgICBMb2dnZXIuZGVidWcoJ0Fib3V0IHRvIHNldCByZW1vdGUgZGVzY3JpcHRpb24uIFNpZ25hbGluZyBzdGF0ZTogJyArXG4gICAgICB0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSk7XG4gICAgc2RwLnNkcCA9IHRoaXMuX3NldFJ0cFNlbmRlck9wdGlvbnMoc2RwLnNkcCwgdGhpcy5fY29uZmlnKTtcbiAgICAvLyBGaXJlZm94IG9ubHkgaGFzIG9uZSBjb2RlYyBpbiBhbnN3ZXIsIHdoaWNoIGRvZXMgbm90IHRydWx5IHJlZmxlY3QgaXRzXG4gICAgLy8gZGVjb2RpbmcgY2FwYWJpbGl0eS4gU28gd2Ugc2V0IGNvZGVjIHByZWZlcmVuY2UgdG8gcmVtb3RlIG9mZmVyLCBhbmQgbGV0XG4gICAgLy8gRmlyZWZveCBjaG9vc2UgaXRzIHByZWZlcnJlZCBjb2RlYy5cbiAgICAvLyBSZWZlcmVuY2U6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTgxNDIyNy5cbiAgICBpZiAoVXRpbHMuaXNGaXJlZm94KCkpIHtcbiAgICAgIHNkcC5zZHAgPSB0aGlzLl9zZXRDb2RlY09yZGVyKHNkcC5zZHApO1xuICAgIH1cbiAgICBjb25zdCBzZXNzaW9uRGVzY3JpcHRpb24gPSBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHNkcCk7XG4gICAgdGhpcy5fcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oc2Vzc2lvbkRlc2NyaXB0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NyZWF0ZUFuZFNlbmRBbnN3ZXIoKTtcbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnU2V0IHJlbW90ZSBkZXNjcmlwdGlvbiBmYWlsZWQuIE1lc3NhZ2U6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHRoaXMuX3N0b3AoZXJyb3IsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uQW5zd2VyKHNkcCkge1xuICAgIExvZ2dlci5kZWJ1ZygnQWJvdXQgdG8gc2V0IHJlbW90ZSBkZXNjcmlwdGlvbi4gU2lnbmFsaW5nIHN0YXRlOiAnICtcbiAgICAgIHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlKTtcbiAgICBzZHAuc2RwID0gdGhpcy5fc2V0UnRwU2VuZGVyT3B0aW9ucyhzZHAuc2RwLCB0aGlzLl9jb25maWcpO1xuICAgIGNvbnN0IHNlc3Npb25EZXNjcmlwdGlvbiA9IG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oc2RwKTtcbiAgICB0aGlzLl9wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKFxuICAgICAgICBzZXNzaW9uRGVzY3JpcHRpb24pKS50aGVuKCgpID0+IHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnU2V0IHJlbW90ZSBkZXNjcmlwaXRvbiBzdWNjZXNzZnVsbHkuJyk7XG4gICAgICB0aGlzLl9kcmFpblBlbmRpbmdNZXNzYWdlcygpO1xuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdTZXQgcmVtb3RlIGRlc2NyaXB0aW9uIGZhaWxlZC4gTWVzc2FnZTogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgdGhpcy5fc3RvcChlcnJvciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBfb25Mb2NhbEljZUNhbmRpZGF0ZShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAgIHRoaXMuX3NlbmRTZHAoe1xuICAgICAgICB0eXBlOiAnY2FuZGlkYXRlcycsXG4gICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSxcbiAgICAgICAgc2RwTWlkOiBldmVudC5jYW5kaWRhdGUuc2RwTWlkLFxuICAgICAgICBzZHBNTGluZUluZGV4OiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCxcbiAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICBMb2dnZXIud2FybmluZygnRmFpbGVkIHRvIHNlbmQgY2FuZGlkYXRlLicpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnRW1wdHkgY2FuZGlkYXRlLicpO1xuICAgIH1cbiAgfVxuXG4gIF9vblJlbW90ZVRyYWNrQWRkZWQoZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ1JlbW90ZSB0cmFjayBhZGRlZC4nKTtcbiAgICBmb3IgKGNvbnN0IHN0cmVhbSBvZiBldmVudC5zdHJlYW1zKSB7XG4gICAgICBpZiAoIXRoaXMuX3JlbW90ZVN0cmVhbUluZm8uaGFzKHN0cmVhbS5pZCkpIHtcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ01pc3Npbmcgc3RyZWFtIGluZm8uJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoc3RyZWFtLmlkKS5zdHJlYW0pIHtcbiAgICAgICAgdGhpcy5fc2V0U3RyZWFtVG9SZW1vdGVTdHJlYW1JbmZvKHN0cmVhbSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb25uZWN0ZWQnIHx8XG4gICAgICAgdGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29tcGxldGVkJykge1xuICAgICAgdGhpcy5fY2hlY2tJY2VDb25uZWN0aW9uU3RhdGVBbmRGaXJlRXZlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWRkZWRUcmFja0lkcy5jb25jYXQoZXZlbnQudHJhY2suaWQpO1xuICAgIH1cbiAgfVxuXG4gIF9vblJlbW90ZVN0cmVhbUFkZGVkKGV2ZW50KSB7XG4gICAgTG9nZ2VyLmRlYnVnKCdSZW1vdGUgc3RyZWFtIGFkZGVkLicpO1xuICAgIGlmICghdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5oYXMoZXZlbnQuc3RyZWFtLmlkKSkge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Nhbm5vdCBmaW5kIHNvdXJjZSBpbmZvIGZvciBzdHJlYW0gJyArIGV2ZW50LnN0cmVhbS5pZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb25uZWN0ZWQnIHx8XG4gICAgICB0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICB0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLlRSQUNLU19BRERFRCxcbiAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChldmVudC5zdHJlYW0uaWQpLnRyYWNrSWRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWRkZWRUcmFja0lkcyA9IHRoaXMuX2FkZGVkVHJhY2tJZHMuY29uY2F0KFxuICAgICAgICAgIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KGV2ZW50LnN0cmVhbS5pZCkudHJhY2tJZHMpO1xuICAgIH1cbiAgICBjb25zdCBhdWRpb1RyYWNrU291cmNlID0gdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoZXZlbnQuc3RyZWFtLmlkKVxuICAgICAgICAuc291cmNlLmF1ZGlvO1xuICAgIGNvbnN0IHZpZGVvVHJhY2tTb3VyY2UgPSB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvLmdldChldmVudC5zdHJlYW0uaWQpXG4gICAgICAgIC5zb3VyY2UudmlkZW87XG4gICAgY29uc3Qgc291cmNlSW5mbyA9IG5ldyBTdHJlYW1Nb2R1bGUuU3RyZWFtU291cmNlSW5mbyhhdWRpb1RyYWNrU291cmNlLFxuICAgICAgICB2aWRlb1RyYWNrU291cmNlKTtcbiAgICBpZiAoVXRpbHMuaXNTYWZhcmkoKSkge1xuICAgICAgaWYgKCFzb3VyY2VJbmZvLmF1ZGlvKSB7XG4gICAgICAgIGV2ZW50LnN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2goKHRyYWNrKSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RyZWFtLnJlbW92ZVRyYWNrKHRyYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoIXNvdXJjZUluZm8udmlkZW8pIHtcbiAgICAgICAgZXZlbnQuc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkuZm9yRWFjaCgodHJhY2spID0+IHtcbiAgICAgICAgICBldmVudC5zdHJlYW0ucmVtb3ZlVHJhY2sodHJhY2spO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KGV2ZW50LnN0cmVhbS5pZCkuYXR0cmlidXRlcztcbiAgICBjb25zdCBzdHJlYW0gPSBuZXcgU3RyZWFtTW9kdWxlLlJlbW90ZVN0cmVhbSh1bmRlZmluZWQsIHRoaXMuX3JlbW90ZUlkLFxuICAgICAgICBldmVudC5zdHJlYW0sIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpO1xuICAgIGlmIChzdHJlYW0pIHtcbiAgICAgIHRoaXMuX3JlbW90ZVN0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgY29uc3Qgc3RyZWFtRXZlbnQgPSBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbUV2ZW50KCdzdHJlYW1hZGRlZCcsIHtcbiAgICAgICAgc3RyZWFtOiBzdHJlYW0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChzdHJlYW1FdmVudCk7XG4gICAgfVxuICB9XG5cbiAgX29uUmVtb3RlU3RyZWFtUmVtb3ZlZChldmVudCkge1xuICAgIExvZ2dlci5kZWJ1ZygnUmVtb3RlIHN0cmVhbSByZW1vdmVkLicpO1xuICAgIGNvbnN0IGkgPSB0aGlzLl9yZW1vdGVTdHJlYW1zLmZpbmRJbmRleCgocykgPT4ge1xuICAgICAgcmV0dXJuIHMubWVkaWFTdHJlYW0uaWQgPT09IGV2ZW50LnN0cmVhbS5pZDtcbiAgICB9KTtcbiAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX3JlbW90ZVN0cmVhbXNbaV07XG4gICAgICB0aGlzLl9zdHJlYW1SZW1vdmVkKHN0cmVhbSk7XG4gICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICBfb25OZWdvdGlhdGlvbm5lZWRlZCgpIHtcbiAgICAvLyBUaGlzIGlzIGludGVudGVkIHRvIGJlIGV4ZWN1dGVkIHdoZW4gb25uZWdvdGlhdGlvbm5lZWRlZCBldmVudCBpcyBmaXJlZC5cbiAgICAvLyBIb3dldmVyLCBvbm5lZ290aWF0aW9ubmVlZGVkIG1heSBmaXJlIG11dGlwbGUgdGltZXMgd2hlbiBtb3JlIHRoYW4gb25lXG4gICAgLy8gdHJhY2sgaXMgYWRkZWQvcmVtb3ZlZC4gU28gd2UgbWFudWFsbHkgZXhlY3V0ZSB0aGlzIGZ1bmN0aW9uIGFmdGVyXG4gICAgLy8gYWRkaW5nL3JlbW92aW5nIHRyYWNrIGFuZCBjcmVhdGluZyBkYXRhIGNoYW5uZWwuXG4gICAgTG9nZ2VyLmRlYnVnKCdPbiBuZWdvdGlhdGlvbiBuZWVkZWQuJyk7XG5cbiAgICBpZiAodGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgPT09ICdzdGFibGUnKSB7XG4gICAgICB0aGlzLl9kb05lZ290aWF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pc05lZ290aWF0aW9uTmVlZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfb25SZW1vdGVJY2VDYW5kaWRhdGUoY2FuZGlkYXRlSW5mbykge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IG5ldyBSVENJY2VDYW5kaWRhdGUoe1xuICAgICAgY2FuZGlkYXRlOiBjYW5kaWRhdGVJbmZvLmNhbmRpZGF0ZSxcbiAgICAgIHNkcE1pZDogY2FuZGlkYXRlSW5mby5zZHBNaWQsXG4gICAgICBzZHBNTGluZUluZGV4OiBjYW5kaWRhdGVJbmZvLnNkcE1MaW5lSW5kZXgsXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX3BjLnJlbW90ZURlc2NyaXB0aW9uICYmIHRoaXMuX3BjLnJlbW90ZURlc2NyaXB0aW9uLnNkcCAhPT0gJycpIHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnQWRkIHJlbW90ZSBpY2UgY2FuZGlkYXRlcy4nKTtcbiAgICAgIHRoaXMuX3BjLmFkZEljZUNhbmRpZGF0ZShjYW5kaWRhdGUpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBMb2dnZXIud2FybmluZygnRXJyb3IgcHJvY2Vzc2luZyBJQ0UgY2FuZGlkYXRlOiAnICsgZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnQ2FjaGUgcmVtb3RlIGljZSBjYW5kaWRhdGVzLicpO1xuICAgICAgdGhpcy5fcmVtb3RlSWNlQ2FuZGlkYXRlcy5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgX29uU2lnbmFsaW5nU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ1NpZ25hbGluZyBzdGF0ZSBjaGFuZ2VkOiAnICsgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUpO1xuICAgIGlmICh0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ2hhdmUtcmVtb3RlLW9mZmVyJyB8fFxuICAgICAgICB0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ3N0YWJsZScpIHtcbiAgICAgIHRoaXMuX2RyYWluUGVuZGluZ1JlbW90ZUljZUNhbmRpZGF0ZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlID09PSAnc3RhYmxlJykge1xuICAgICAgdGhpcy5fbmVnb3RpYXRpbmcgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLl9pc05lZ290aWF0aW9uTmVlZGVkKSB7XG4gICAgICAgIHRoaXMuX29uTmVnb3RpYXRpb25uZWVkZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2RyYWluUGVuZGluZ1N0cmVhbXMoKTtcbiAgICAgICAgdGhpcy5fZHJhaW5QZW5kaW5nTWVzc2FnZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25JY2VDb25uZWN0aW9uU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjbG9zZWQnIHx8XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnZmFpbGVkJykge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9XRUJSVENfVU5LTk9XTixcbiAgICAgICAgICAnSUNFIGNvbm5lY3Rpb24gZmFpbGVkIG9yIGNsb3NlZC4nKTtcbiAgICAgIHRoaXMuX3N0b3AoZXJyb3IsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb25uZWN0ZWQnIHx8XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgIHRoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuVFJBQ0tTX0FEREVELFxuICAgICAgICAgIHRoaXMuX2FkZGVkVHJhY2tJZHMpO1xuICAgICAgdGhpcy5fYWRkZWRUcmFja0lkcyA9IFtdO1xuICAgICAgdGhpcy5fY2hlY2tJY2VDb25uZWN0aW9uU3RhdGVBbmRGaXJlRXZlbnQoKTtcbiAgICB9XG4gIH1cblxuICBfb25EYXRhQ2hhbm5lbE1lc3NhZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBtZXNzYWdlPUpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgaWYgKCF0aGlzLl9yZW1vdGVTaWRlSWdub3Jlc0RhdGFDaGFubmVsQWNrcykge1xuICAgICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5EQVRBX1JFQ0VJVkVELCBtZXNzYWdlLmlkKTtcbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZUV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudCgnbWVzc2FnZXJlY2VpdmVkJywge1xuICAgICAgbWVzc2FnZTogbWVzc2FnZS5kYXRhLFxuICAgICAgb3JpZ2luOiB0aGlzLl9yZW1vdGVJZCxcbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobWVzc2FnZUV2ZW50KTtcbiAgfVxuXG4gIF9vbkRhdGFDaGFubmVsT3BlbihldmVudCkge1xuICAgIExvZ2dlci5kZWJ1ZygnRGF0YSBDaGFubmVsIGlzIG9wZW5lZC4nKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmxhYmVsID09PSBEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpIHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnRGF0YSBjaGFubmVsIGZvciBtZXNzYWdlcyBpcyBvcGVuZWQuJyk7XG4gICAgICB0aGlzLl9kcmFpblBlbmRpbmdNZXNzYWdlcygpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkRhdGFDaGFubmVsQ2xvc2UoZXZlbnQpIHtcbiAgICBMb2dnZXIuZGVidWcoJ0RhdGEgQ2hhbm5lbCBpcyBjbG9zZWQuJyk7XG4gIH1cblxuICBfc3RyZWFtUmVtb3ZlZChzdHJlYW0pIHtcbiAgICBpZiAoIXRoaXMuX3JlbW90ZVN0cmVhbUluZm8uaGFzKHN0cmVhbS5tZWRpYVN0cmVhbS5pZCkpIHtcbiAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzdHJlYW0gaW5mby4nKTtcbiAgICB9XG4gICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5UUkFDS1NfUkVNT1ZFRCxcbiAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoc3RyZWFtLm1lZGlhU3RyZWFtLmlkKS50cmFja0lkcyk7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgT3d0RXZlbnQoJ2VuZGVkJyk7XG4gICAgc3RyZWFtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgX2lzVW5pZmllZFBsYW4oKSB7XG4gICAgaWYgKFV0aWxzLmlzRmlyZWZveCgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgcGMgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24oe1xuICAgICAgc2RwU2VtYW50aWNzOiAndW5pZmllZC1wbGFuJyxcbiAgICB9KTtcbiAgICByZXR1cm4gKHBjLmdldENvbmZpZ3VyYXRpb24oKSAmJiBwYy5nZXRDb25maWd1cmF0aW9uKCkuc2RwU2VtYW50aWNzID09PVxuICAgICAgJ3BsYW4tYicpO1xuICB9XG5cbiAgX2NyZWF0ZVBlZXJDb25uZWN0aW9uKCkge1xuICAgIGNvbnN0IHBjQ29uZmlndXJhdGlvbiA9IHRoaXMuX2NvbmZpZy5ydGNDb25maWd1cmF0aW9uIHx8IHt9O1xuICAgIGlmIChVdGlscy5pc0Nocm9tZSgpKSB7XG4gICAgICBwY0NvbmZpZ3VyYXRpb24uc2RwU2VtYW50aWNzID0gJ3VuaWZpZWQtcGxhbic7XG4gICAgfVxuICAgIHRoaXMuX3BjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlndXJhdGlvbik7XG4gICAgLy8gRmlyZWZveCA1OSBpbXBsZW1lbnRlZCBhZGRUcmFuc2NlaXZlci4gSG93ZXZlciwgbWlkIGluIFNEUCB3aWxsIGRpZmZlciBmcm9tIHRyYWNrJ3MgSUQgaW4gdGhpcyBjYXNlLiBBbmQgdHJhbnNjZWl2ZXIncyBtaWQgaXMgbnVsbC5cbiAgICBpZiAodHlwZW9mIHRoaXMuX3BjLmFkZFRyYW5zY2VpdmVyID09PSAnZnVuY3Rpb24nICYmIFV0aWxzLmlzU2FmYXJpKCkpIHtcbiAgICAgIHRoaXMuX3BjLmFkZFRyYW5zY2VpdmVyKCdhdWRpbycpO1xuICAgICAgdGhpcy5fcGMuYWRkVHJhbnNjZWl2ZXIoJ3ZpZGVvJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5faXNVbmlmaWVkUGxhbigpICYmICFVdGlscy5pc1NhZmFyaSgpKSB7XG4gICAgICB0aGlzLl9wYy5vbmFkZHN0cmVhbSA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBMZWdhY3kgQVBJLCBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIGFsbCBVQXMgaW1wbGVtZW50ZWQgV2ViUlRDIDEuMC5cbiAgICAgICAgdGhpcy5fb25SZW1vdGVTdHJlYW1BZGRlZC5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9wYy5vbnJlbW92ZXN0cmVhbSA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLl9vblJlbW90ZVN0cmVhbVJlbW92ZWQuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wYy5vbnRyYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX29uUmVtb3RlVHJhY2tBZGRlZC5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuX3BjLm9uaWNlY2FuZGlkYXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9vbkxvY2FsSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgdGhpcy5fcGMub25zaWduYWxpbmdzdGF0ZWNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25TaWduYWxpbmdTdGF0ZUNoYW5nZS5hcHBseSh0aGlzLCBbZXZlbnRdKTtcbiAgICB9O1xuICAgIHRoaXMuX3BjLm9uZGF0YWNoYW5uZWwgPSAoZXZlbnQpID0+IHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnT24gZGF0YSBjaGFubmVsLicpO1xuICAgICAgLy8gU2F2ZSByZW1vdGUgY3JlYXRlZCBkYXRhIGNoYW5uZWwuXG4gICAgICBpZiAoIXRoaXMuX2RhdGFDaGFubmVscy5oYXMoZXZlbnQuY2hhbm5lbC5sYWJlbCkpIHtcbiAgICAgICAgdGhpcy5fZGF0YUNoYW5uZWxzLnNldChldmVudC5jaGFubmVsLmxhYmVsLCBldmVudC5jaGFubmVsKTtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKCdTYXZlIHJlbW90ZSBjcmVhdGVkIGRhdGEgY2hhbm5lbC4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2JpbmRFdmVudHNUb0RhdGFDaGFubmVsKGV2ZW50LmNoYW5uZWwpO1xuICAgIH07XG4gICAgdGhpcy5fcGMub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uSWNlQ29ubmVjdGlvblN0YXRlQ2hhbmdlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgLypcbiAgICB0aGlzLl9wYy5vbmljZUNoYW5uZWxTdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBfb25JY2VDaGFubmVsU3RhdGVDaGFuZ2UocGVlciwgZXZlbnQpO1xuICAgIH07XG4gICAgID0gZnVuY3Rpb24oKSB7XG4gICAgICBvbk5lZ290aWF0aW9ubmVlZGVkKHBlZXJzW3BlZXIuaWRdKTtcbiAgICB9O1xuXG4gICAgLy9EYXRhQ2hhbm5lbFxuICAgIHRoaXMuX3BjLm9uZGF0YWNoYW5uZWwgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgTG9nZ2VyLmRlYnVnKG15SWQgKyAnOiBPbiBkYXRhIGNoYW5uZWwnKTtcbiAgICAgIC8vIFNhdmUgcmVtb3RlIGNyZWF0ZWQgZGF0YSBjaGFubmVsLlxuICAgICAgaWYgKCFwZWVyLmRhdGFDaGFubmVsc1tldmVudC5jaGFubmVsLmxhYmVsXSkge1xuICAgICAgICBwZWVyLmRhdGFDaGFubmVsc1tldmVudC5jaGFubmVsLmxhYmVsXSA9IGV2ZW50LmNoYW5uZWw7XG4gICAgICAgIExvZ2dlci5kZWJ1ZygnU2F2ZSByZW1vdGUgY3JlYXRlZCBkYXRhIGNoYW5uZWwuJyk7XG4gICAgICB9XG4gICAgICBiaW5kRXZlbnRzVG9EYXRhQ2hhbm5lbChldmVudC5jaGFubmVsLCBwZWVyKTtcbiAgICB9OyovXG4gIH1cblxuICBfZHJhaW5QZW5kaW5nU3RyZWFtcygpIHtcbiAgICBsZXQgbmVnb3RpYXRpb25OZWVkZWQgPSBmYWxzZTtcbiAgICBMb2dnZXIuZGVidWcoJ0RyYWluaW5nIHBlbmRpbmcgc3RyZWFtcy4nKTtcbiAgICBpZiAodGhpcy5fcGMgJiYgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUgPT09ICdzdGFibGUnKSB7XG4gICAgICBMb2dnZXIuZGVidWcoJ1BlZXIgY29ubmVjdGlvbiBpcyByZWFkeSBmb3IgZHJhaW5pbmcgcGVuZGluZyBzdHJlYW1zLicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wZW5kaW5nU3RyZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9wZW5kaW5nU3RyZWFtc1tpXTtcbiAgICAgICAgLy8gT25OZWdvdGlhdGlvbk5lZWRlZCBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCBpbW1lZGlhdGVseSBhZnRlciBhZGRpbmcgc3RyZWFtIHRvIFBlZXJDb25uZWN0aW9uIGluIEZpcmVmb3guXG4gICAgICAgIC8vIEFuZCBPbk5lZ290aWF0aW9uTmVlZGVkIGhhbmRsZXIgd2lsbCBleGVjdXRlIGRyYWluUGVuZGluZ1N0cmVhbXMuIFRvIGF2b2lkIGFkZCB0aGUgc2FtZSBzdHJlYW0gbXVsdGlwbGUgdGltZXMsXG4gICAgICAgIC8vIHNoaWZ0IGl0IGZyb20gcGVuZGluZyBzdHJlYW0gbGlzdCBiZWZvcmUgYWRkaW5nIGl0IHRvIFBlZXJDb25uZWN0aW9uLlxuICAgICAgICB0aGlzLl9wZW5kaW5nU3RyZWFtcy5zaGlmdCgpO1xuICAgICAgICBpZiAoIXN0cmVhbS5tZWRpYVN0cmVhbSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2Ygc3RyZWFtLm1lZGlhU3RyZWFtLmdldFRyYWNrcygpKSB7XG4gICAgICAgICAgdGhpcy5fcGMuYWRkVHJhY2sodHJhY2ssIHN0cmVhbS5tZWRpYVN0cmVhbSk7XG4gICAgICAgICAgbmVnb3RpYXRpb25OZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIExvZ2dlci5kZWJ1ZygnQWRkZWQgc3RyZWFtIHRvIHBlZXIgY29ubmVjdGlvbi4nKTtcbiAgICAgICAgdGhpcy5fcHVibGlzaGluZ1N0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fcGVuZGluZ1N0cmVhbXMubGVuZ3RoID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fcGVuZGluZ1VucHVibGlzaFN0cmVhbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wZW5kaW5nVW5wdWJsaXNoU3RyZWFtc1tqXS5tZWRpYVN0cmVhbSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BjLnJlbW92ZVN0cmVhbSh0aGlzLl9wZW5kaW5nVW5wdWJsaXNoU3RyZWFtc1tqXS5tZWRpYVN0cmVhbSk7XG4gICAgICAgIG5lZ290aWF0aW9uTmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdW5wdWJsaXNoUHJvbWlzZXMuZ2V0KFxuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1VucHVibGlzaFN0cmVhbXNbal0ubWVkaWFTdHJlYW0uaWQpLnJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5fcHVibGlzaGVkU3RyZWFtcy5kZWxldGUodGhpcy5fcGVuZGluZ1VucHVibGlzaFN0cmVhbXNbal0pO1xuICAgICAgICBMb2dnZXIuZGVidWcoJ1JlbW92ZSBzdHJlYW0uJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9wZW5kaW5nVW5wdWJsaXNoU3RyZWFtcy5sZW5ndGggPSAwO1xuICAgIH1cbiAgICBpZiAobmVnb3RpYXRpb25OZWVkZWQpIHtcbiAgICAgIHRoaXMuX29uTmVnb3RpYXRpb25uZWVkZWQoKTtcbiAgICB9XG4gIH1cblxuICBfZHJhaW5QZW5kaW5nUmVtb3RlSWNlQ2FuZGlkYXRlcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3JlbW90ZUljZUNhbmRpZGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIExvZ2dlci5kZWJ1ZygnQWRkIGNhbmRpZGF0ZScpO1xuICAgICAgdGhpcy5fcGMuYWRkSWNlQ2FuZGlkYXRlKHRoaXMuX3JlbW90ZUljZUNhbmRpZGF0ZXNbaV0pLmNhdGNoKChlcnJvcik9PntcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoJ0Vycm9yIHByb2Nlc3NpbmcgSUNFIGNhbmRpZGF0ZTogJytlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fcmVtb3RlSWNlQ2FuZGlkYXRlcy5sZW5ndGggPSAwO1xuICB9XG5cbiAgX2RyYWluUGVuZGluZ01lc3NhZ2VzKCkge1xuICAgIExvZ2dlci5kZWJ1ZygnRHJhaW5pbmcgcGVuZGluZyBtZXNzYWdlcy4nKTtcbiAgICBpZiAodGhpcy5fcGVuZGluZ01lc3NhZ2VzLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRjID0gdGhpcy5fZGF0YUNoYW5uZWxzLmdldChEYXRhQ2hhbm5lbExhYmVsLk1FU1NBR0UpO1xuICAgIGlmIChkYyAmJiBkYy5yZWFkeVN0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGVuZGluZ01lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgICdTZW5kaW5nIG1lc3NhZ2UgdmlhIGRhdGEgY2hhbm5lbDogJyArIHRoaXMuX3BlbmRpbmdNZXNzYWdlc1tpXSk7XG4gICAgICAgIGRjLnNlbmQoSlNPTi5zdHJpbmdpZnkodGhpcy5fcGVuZGluZ01lc3NhZ2VzW2ldKSk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IHRoaXMuX3BlbmRpbmdNZXNzYWdlc1tpXS5pZDtcbiAgICAgICAgaWYgKHRoaXMuX3NlbmREYXRhUHJvbWlzZXMuaGFzKG1lc3NhZ2VJZCkpIHtcbiAgICAgICAgICB0aGlzLl9zZW5kRGF0YVByb21pc2VzLmdldChtZXNzYWdlSWQpLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fcGVuZGluZ01lc3NhZ2VzLmxlbmd0aCA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9wYyAmJiAhZGMpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZURhdGFDaGFubmVsKERhdGFDaGFubmVsTGFiZWwuTUVTU0FHRSk7XG4gICAgfVxuICB9XG5cbiAgX3NlbmRTdHJlYW1JbmZvKHN0cmVhbSkge1xuICAgIGlmICghc3RyZWFtIHx8ICFzdHJlYW0ubWVkaWFTdHJlYW0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfSUxMRUdBTF9BUkdVTUVOVCk7XG4gICAgfVxuICAgIGNvbnN0IGluZm8gPSBbXTtcbiAgICBzdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkubWFwKCh0cmFjaykgPT4ge1xuICAgICAgaW5mby5wdXNoKHtcbiAgICAgICAgaWQ6IHRyYWNrLmlkLFxuICAgICAgICBzb3VyY2U6IHN0cmVhbS5zb3VyY2VbdHJhY2sua2luZF0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3RoaXMuX3NlbmRTaWduYWxpbmdNZXNzYWdlKFNpZ25hbGluZ1R5cGUuVFJBQ0tfU09VUkNFUyxcbiAgICAgICAgaW5mbyksXG4gICAgdGhpcy5fc2VuZFNpZ25hbGluZ01lc3NhZ2UoU2lnbmFsaW5nVHlwZS5TVFJFQU1fSU5GTywge1xuICAgICAgaWQ6IHN0cmVhbS5tZWRpYVN0cmVhbS5pZCxcbiAgICAgIGF0dHJpYnV0ZXM6IHN0cmVhbS5hdHRyaWJ1dGVzLFxuICAgICAgLy8gVHJhY2sgSURzIG1heSBub3QgbWF0Y2ggYXQgc2VuZGVyIGFuZCByZWNlaXZlciBzaWRlcy5cbiAgICAgIHRyYWNrczogQXJyYXkuZnJvbShpbmZvLCAoaXRlbSkgPT4gaXRlbS5pZCksXG4gICAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCBmb3IgU2FmYXJpLiBQbGVhc2UgdXNlIHRyYWNrLXNvdXJjZXMgaWYgcG9zc2libGUuXG4gICAgICBzb3VyY2U6IHN0cmVhbS5zb3VyY2UsXG4gICAgfSksXG4gICAgXSk7XG4gIH1cblxuICBfaGFuZGxlUmVtb3RlQ2FwYWJpbGl0eSh1YSkge1xuICAgIGlmICh1YS5zZGsgJiYgdWEuc2RrICYmIHVhLnNkay50eXBlID09PSAnSmF2YVNjcmlwdCcgJiYgdWEucnVudGltZSAmJlxuICAgICAgICB1YS5ydW50aW1lLm5hbWUgPT09ICdGaXJlZm94Jykge1xuICAgICAgdGhpcy5fcmVtb3RlU2lkZVN1cHBvcnRzUmVtb3ZlU3RyZWFtID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZW1vdGVTaWRlU3VwcG9ydHNQbGFuQiA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVtb3RlU2lkZVN1cHBvcnRzVW5pZmllZFBsYW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7IC8vIFJlbW90ZSBzaWRlIGlzIGlPUy9BbmRyb2lkL0MrKyB3aGljaCB1c2VzIEdvb2dsZSdzIFdlYlJUQyBzdGFjay5cbiAgICAgIHRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1JlbW92ZVN0cmVhbSA9IHRydWU7XG4gICAgICB0aGlzLl9yZW1vdGVTaWRlU3VwcG9ydHNQbGFuQiA9IHRydWU7XG4gICAgICB0aGlzLl9yZW1vdGVTaWRlU3VwcG9ydHNVbmlmaWVkUGxhbiA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodWEuY2FwYWJpbGl0aWVzKSB7XG4gICAgICB0aGlzLl9yZW1vdGVTaWRlSWdub3Jlc0RhdGFDaGFubmVsQWNrcyA9XG4gICAgICAgICAgdWEuY2FwYWJpbGl0aWVzLmlnbm9yZURhdGFDaGFubmVsQWNrcztcbiAgICB9XG4gIH1cblxuICBfZG9OZWdvdGlhdGUoKSB7XG4gICAgdGhpcy5fY3JlYXRlQW5kU2VuZE9mZmVyKCk7XG4gIH1cblxuICBfc2V0Q29kZWNPcmRlcihzZHApIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmF1ZGlvRW5jb2RpbmdzKSB7XG4gICAgICBjb25zdCBhdWRpb0NvZGVjTmFtZXMgPSBBcnJheS5mcm9tKHRoaXMuX2NvbmZpZy5hdWRpb0VuY29kaW5ncyxcbiAgICAgICAgICAoZW5jb2RpbmdQYXJhbWV0ZXJzKSA9PiBlbmNvZGluZ1BhcmFtZXRlcnMuY29kZWMubmFtZSk7XG4gICAgICBzZHAgPSBTZHBVdGlscy5yZW9yZGVyQ29kZWNzKHNkcCwgJ2F1ZGlvJywgYXVkaW9Db2RlY05hbWVzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbmZpZy52aWRlb0VuY29kaW5ncykge1xuICAgICAgY29uc3QgdmlkZW9Db2RlY05hbWVzID0gQXJyYXkuZnJvbSh0aGlzLl9jb25maWcudmlkZW9FbmNvZGluZ3MsXG4gICAgICAgICAgKGVuY29kaW5nUGFyYW1ldGVycykgPT4gZW5jb2RpbmdQYXJhbWV0ZXJzLmNvZGVjLm5hbWUpO1xuICAgICAgc2RwID0gU2RwVXRpbHMucmVvcmRlckNvZGVjcyhzZHAsICd2aWRlbycsIHZpZGVvQ29kZWNOYW1lcyk7XG4gICAgfVxuICAgIHJldHVybiBzZHA7XG4gIH1cblxuICBfc2V0TWF4Qml0cmF0ZShzZHAsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXVkaW9FbmNvZGluZ3MgPT09ICdvYmplY3QnKSB7XG4gICAgICBzZHAgPSBTZHBVdGlscy5zZXRNYXhCaXRyYXRlKHNkcCwgb3B0aW9ucy5hdWRpb0VuY29kaW5ncyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy52aWRlb0VuY29kaW5ncyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNkcCA9IFNkcFV0aWxzLnNldE1heEJpdHJhdGUoc2RwLCBvcHRpb25zLnZpZGVvRW5jb2RpbmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIF9zZXRSdHBTZW5kZXJPcHRpb25zKHNkcCwgb3B0aW9ucykge1xuICAgIHNkcCA9IHRoaXMuX3NldE1heEJpdHJhdGUoc2RwLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc2RwO1xuICB9XG5cbiAgX3NldFJ0cFJlY2VpdmVyT3B0aW9ucyhzZHApIHtcbiAgICBzZHAgPSB0aGlzLl9zZXRDb2RlY09yZGVyKHNkcCk7XG4gICAgcmV0dXJuIHNkcDtcbiAgfVxuXG4gIF9jcmVhdGVBbmRTZW5kT2ZmZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9wYykge1xuICAgICAgTG9nZ2VyLmVycm9yKCdQZWVyIGNvbm5lY3Rpb24gaGF2ZSBub3QgYmVlbiBjcmVhdGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pc05lZ290aWF0aW9uTmVlZGVkID0gZmFsc2U7XG4gICAgdGhpcy5faXNDYWxsZXIgPSB0cnVlO1xuICAgIGxldCBsb2NhbERlc2M7XG4gICAgdGhpcy5fcGMuY3JlYXRlT2ZmZXIoKS50aGVuKChkZXNjKSA9PiB7XG4gICAgICBkZXNjLnNkcCA9IHRoaXMuX3NldFJ0cFJlY2VpdmVyT3B0aW9ucyhkZXNjLnNkcCk7XG4gICAgICBsb2NhbERlc2MgPSBkZXNjO1xuICAgICAgaWYgKHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlID09PSAnc3RhYmxlJykge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjKS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2VuZFNkcChsb2NhbERlc2MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKGUubWVzc2FnZSArICcgUGxlYXNlIGNoZWNrIHlvdXIgY29kZWMgc2V0dGluZ3MuJyk7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihFcnJvck1vZHVsZS5lcnJvcnMuUDJQX1dFQlJUQ19TRFAsXG4gICAgICAgICAgZS5tZXNzYWdlKTtcbiAgICAgIHRoaXMuX3N0b3AoZXJyb3IsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX2NyZWF0ZUFuZFNlbmRBbnN3ZXIoKSB7XG4gICAgdGhpcy5fZHJhaW5QZW5kaW5nU3RyZWFtcygpO1xuICAgIHRoaXMuX2lzTmVnb3RpYXRpb25OZWVkZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0NhbGxlciA9IGZhbHNlO1xuICAgIGxldCBsb2NhbERlc2M7XG4gICAgdGhpcy5fcGMuY3JlYXRlQW5zd2VyKCkudGhlbigoZGVzYykgPT4ge1xuICAgICAgZGVzYy5zZHAgPSB0aGlzLl9zZXRSdHBSZWNlaXZlck9wdGlvbnMoZGVzYy5zZHApO1xuICAgICAgbG9jYWxEZXNjPWRlc2M7XG4gICAgICB0aGlzLl9sb2dDdXJyZW50QW5kUGVuZGluZ0xvY2FsRGVzY3JpcHRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzLl9wYy5zZXRMb2NhbERlc2NyaXB0aW9uKGRlc2MpO1xuICAgIH0pLnRoZW4oKCk9PntcbiAgICAgIHJldHVybiB0aGlzLl9zZW5kU2RwKGxvY2FsRGVzYyk7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIExvZ2dlci5lcnJvcihlLm1lc3NhZ2UgKyAnIFBsZWFzZSBjaGVjayB5b3VyIGNvZGVjIHNldHRpbmdzLicpO1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9XRUJSVENfU0RQLFxuICAgICAgICAgIGUubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdG9wKGVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9sb2dDdXJyZW50QW5kUGVuZGluZ0xvY2FsRGVzY3JpcHRpb24oKSB7XG4gICAgTG9nZ2VyLmluZm8oJ0N1cnJlbnQgZGVzY3JpcHRpb246ICcgKyB0aGlzLl9wYy5jdXJyZW50TG9jYWxEZXNjcmlwdGlvbik7XG4gICAgTG9nZ2VyLmluZm8oJ1BlbmRpbmcgZGVzY3JpcHRpb246ICcgKyB0aGlzLl9wYy5wZW5kaW5nTG9jYWxEZXNjcmlwdGlvbik7XG4gIH1cblxuICBfZ2V0QW5kRGVsZXRlVHJhY2tTb3VyY2VJbmZvKHRyYWNrcykge1xuICAgIGlmICh0cmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdHJhY2tJZCA9IHRyYWNrc1swXS5pZDtcbiAgICAgIGlmICh0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8uaGFzKHRyYWNrSWQpKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZUluZm8gPSB0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8uZ2V0KHRyYWNrSWQpO1xuICAgICAgICB0aGlzLl9yZW1vdGVUcmFja1NvdXJjZUluZm8uZGVsZXRlKHRyYWNrSWQpO1xuICAgICAgICByZXR1cm4gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdDYW5ub3QgZmluZCBzb3VyY2UgaW5mbyBmb3IgJyArIHRyYWNrSWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF91bnB1Ymxpc2goc3RyZWFtKSB7XG4gICAgaWYgKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHwgIXRoaXMuX3JlbW90ZVNpZGVTdXBwb3J0c1JlbW92ZVN0cmVhbSkge1xuICAgICAgLy8gQWN0dWFsbHkgdW5wdWJsaXNoIGlzIHN1cHBvcnRlZC4gSXQgaXMgYSBsaXR0bGUgYml0IGNvbXBsZXggc2luY2VcbiAgICAgIC8vIEZpcmVmb3ggaW1wbGVtZW50ZWQgV2ViUlRDIHNwZWMgd2hpbGUgQ2hyb21lIGltcGxlbWVudGVkIGFuIG9sZCBBUEkuXG4gICAgICBMb2dnZXIuZXJyb3IoXG4gICAgICAgICAgJ1N0b3BwaW5nIGEgcHVibGljYXRpb24gaXMgbm90IHN1cHBvcnRlZCBvbiBGaXJlZm94LiBQbGVhc2UgdXNlICcgK1xuICAgICAgICAgICdQMlBDbGllbnQuc3RvcCgpIHRvIHN0b3AgdGhlIGNvbm5lY3Rpb24gd2l0aCByZW1vdGUgZW5kcG9pbnQuJ1xuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JNb2R1bGUuUDJQRXJyb3IoXG4gICAgICAgICAgRXJyb3JNb2R1bGUuZXJyb3JzLlAyUF9DTElFTlRfVU5TVVBQT1JURURfTUVUSE9EKSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fcHVibGlzaGVkU3RyZWFtcy5oYXMoc3RyZWFtKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9JTExFR0FMX0FSR1VNRU5UKSk7XG4gICAgfVxuICAgIHRoaXMuX3BlbmRpbmdVbnB1Ymxpc2hTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fdW5wdWJsaXNoUHJvbWlzZXMuc2V0KHN0cmVhbS5tZWRpYVN0cmVhbS5pZCwge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fZHJhaW5QZW5kaW5nU3RyZWFtcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTWFrZSBzdXJlIHxfcGN8IGlzIGF2YWlsYWJsZSBiZWZvcmUgY2FsbGluZyB0aGlzIG1ldGhvZC5cbiAgX2NyZWF0ZURhdGFDaGFubmVsKGxhYmVsKSB7XG4gICAgaWYgKHRoaXMuX2RhdGFDaGFubmVscy5oYXMobGFiZWwpKSB7XG4gICAgICBMb2dnZXIud2FybmluZygnRGF0YSBjaGFubmVsIGxhYmVsZWQgJysgbGFiZWwrJyBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9wYykge1xuICAgICAgTG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICdQZWVyQ29ubmVjdGlvbiBpcyBub3QgYXZhaWxhYmxlIGJlZm9yZSBjcmVhdGluZyBEYXRhQ2hhbm5lbC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgTG9nZ2VyLmRlYnVnKCdDcmVhdGUgZGF0YSBjaGFubmVsLicpO1xuICAgIGNvbnN0IGRjID0gdGhpcy5fcGMuY3JlYXRlRGF0YUNoYW5uZWwobGFiZWwpO1xuICAgIHRoaXMuX2JpbmRFdmVudHNUb0RhdGFDaGFubmVsKGRjKTtcbiAgICB0aGlzLl9kYXRhQ2hhbm5lbHMuc2V0KERhdGFDaGFubmVsTGFiZWwuTUVTU0FHRSwgZGMpO1xuICAgIHRoaXMuX29uTmVnb3RpYXRpb25uZWVkZWQoKTtcbiAgfVxuXG4gIF9iaW5kRXZlbnRzVG9EYXRhQ2hhbm5lbChkYykge1xuICAgIGRjLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25EYXRhQ2hhbm5lbE1lc3NhZ2UuYXBwbHkodGhpcywgW2V2ZW50XSk7XG4gICAgfTtcbiAgICBkYy5vbm9wZW4gPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX29uRGF0YUNoYW5uZWxPcGVuLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgZGMub25jbG9zZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fb25EYXRhQ2hhbm5lbENsb3NlLmFwcGx5KHRoaXMsIFtldmVudF0pO1xuICAgIH07XG4gICAgZGMub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgTG9nZ2VyLmRlYnVnKCdEYXRhIENoYW5uZWwgRXJyb3I6ICcgKyBldmVudCk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYWxsIE1lZGlhU3RyZWFtcyBpdCBiZWxvbmdzIHRvLlxuICBfZ2V0U3RyZWFtQnlUcmFjayhtZWRpYVN0cmVhbVRyYWNrKSB7XG4gICAgY29uc3Qgc3RyZWFtcyA9IFtdO1xuICAgIGZvciAoY29uc3QgWy8qIGlkICovLCBpbmZvXSBvZiB0aGlzLl9yZW1vdGVTdHJlYW1JbmZvKSB7XG4gICAgICBpZiAoIWluZm8uc3RyZWFtIHx8ICFpbmZvLnN0cmVhbS5tZWRpYVN0cmVhbSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgdHJhY2sgb2YgaW5mby5zdHJlYW0ubWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkpIHtcbiAgICAgICAgaWYgKG1lZGlhU3RyZWFtVHJhY2sgPT09IHRyYWNrKSB7XG4gICAgICAgICAgc3RyZWFtcy5wdXNoKGluZm8uc3RyZWFtLm1lZGlhU3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyZWFtcztcbiAgfVxuXG4gIF9hcmVBbGxUcmFja3NFbmRlZChtZWRpYVN0cmVhbSkge1xuICAgIGZvciAoY29uc3QgdHJhY2sgb2YgbWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkpIHtcbiAgICAgIGlmICh0cmFjay5yZWFkeVN0YXRlID09PSAnbGl2ZScpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF9zdG9wKGVycm9yLCBub3RpZnlSZW1vdGUpIHtcbiAgICBsZXQgcHJvbWlzZUVycm9yID0gZXJyb3I7XG4gICAgaWYgKCFwcm9taXNlRXJyb3IpIHtcbiAgICAgIHByb21pc2VFcnJvciA9IG5ldyBFcnJvck1vZHVsZS5QMlBFcnJvcihcbiAgICAgICAgICBFcnJvck1vZHVsZS5lcnJvcnMuUDJQX0NMSUVOVF9VTktOT1dOKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbLyogbGFiZWwgKi8sIGRjXSBvZiB0aGlzLl9kYXRhQ2hhbm5lbHMpIHtcbiAgICAgIGRjLmNsb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGFDaGFubmVscy5jbGVhcigpO1xuICAgIGlmICh0aGlzLl9wYyAmJiB0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgIT09ICdjbG9zZWQnKSB7XG4gICAgICB0aGlzLl9wYy5jbG9zZSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHJvbWlzZV0gb2YgdGhpcy5fcHVibGlzaFByb21pc2VzKSB7XG4gICAgICBwcm9taXNlLnJlamVjdChwcm9taXNlRXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLl9wdWJsaXNoUHJvbWlzZXMuY2xlYXIoKTtcbiAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgcHJvbWlzZV0gb2YgdGhpcy5fdW5wdWJsaXNoUHJvbWlzZXMpIHtcbiAgICAgIHByb21pc2UucmVqZWN0KHByb21pc2VFcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX3VucHVibGlzaFByb21pc2VzLmNsZWFyKCk7XG4gICAgZm9yIChjb25zdCBbLyogaWQgKi8sIHByb21pc2VdIG9mIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMpIHtcbiAgICAgIHByb21pc2UucmVqZWN0KHByb21pc2VFcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX3NlbmREYXRhUHJvbWlzZXMuY2xlYXIoKTtcbiAgICAvLyBGaXJlIGVuZGVkIGV2ZW50IGlmIHB1YmxpY2F0aW9uIG9yIHJlbW90ZSBzdHJlYW0gZXhpc3RzLlxuICAgIHRoaXMuX3B1Ymxpc2hlZFN0cmVhbXMuZm9yRWFjaCgocHVibGljYXRpb24pID0+IHtcbiAgICAgIHB1YmxpY2F0aW9uLmRpc3BhdGNoRXZlbnQobmV3IE93dEV2ZW50KCdlbmRlZCcpKTtcbiAgICB9KTtcbiAgICB0aGlzLl9wdWJsaXNoZWRTdHJlYW1zLmNsZWFyKCk7XG4gICAgdGhpcy5fcmVtb3RlU3RyZWFtcy5mb3JFYWNoKChzdHJlYW0pID0+IHtcbiAgICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KG5ldyBPd3RFdmVudCgnZW5kZWQnKSk7XG4gICAgfSk7XG4gICAgdGhpcy5fcmVtb3RlU3RyZWFtcyA9IFtdO1xuICAgIGlmICghdGhpcy5fZGlzcG9zZWQpIHtcbiAgICAgIGlmIChub3RpZnlSZW1vdGUpIHtcbiAgICAgICAgbGV0IHNlbmRFcnJvcjtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgc2VuZEVycm9yID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgIC8vIEF2b2lkIHRvIGxlYWsgZGV0YWlsZWQgZXJyb3IgdG8gcmVtb3RlIHNpZGUuXG4gICAgICAgICAgc2VuZEVycm9yLm1lc3NhZ2UgPSAnRXJyb3IgaGFwcGVuZWQgYXQgcmVtb3RlIHNpZGUuJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLkNMT1NFRCwgc2VuZEVycm9yKS5jYXRjaChcbiAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKCdGYWlsZWQgdG8gc2VuZCBjbG9zZS4nICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdlbmRlZCcpKTtcbiAgICB9XG4gIH1cblxuICBfc2V0U3RyZWFtVG9SZW1vdGVTdHJlYW1JbmZvKG1lZGlhU3RyZWFtKSB7XG4gICAgY29uc3QgaW5mbyA9IHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KG1lZGlhU3RyZWFtLmlkKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gaW5mby5hdHRyaWJ1dGVzO1xuICAgIGNvbnN0IHNvdXJjZUluZm8gPSBuZXcgU3RyZWFtTW9kdWxlLlN0cmVhbVNvdXJjZUluZm8odGhpcy5fcmVtb3RlU3RyZWFtSW5mb1xuICAgICAgICAuZ2V0KG1lZGlhU3RyZWFtLmlkKS5zb3VyY2UuYXVkaW8sIHRoaXMuX3JlbW90ZVN0cmVhbUluZm8uZ2V0KFxuICAgICAgICBtZWRpYVN0cmVhbS5pZClcbiAgICAgICAgLnNvdXJjZS52aWRlbyk7XG4gICAgaW5mby5zdHJlYW0gPSBuZXcgU3RyZWFtTW9kdWxlLlJlbW90ZVN0cmVhbShcbiAgICAgICAgdW5kZWZpbmVkLCB0aGlzLl9yZW1vdGVJZCwgbWVkaWFTdHJlYW0sXG4gICAgICAgIHNvdXJjZUluZm8sIGF0dHJpYnV0ZXMpO1xuICAgIGluZm8ubWVkaWFTdHJlYW0gPSBtZWRpYVN0cmVhbTtcbiAgICBjb25zdCBzdHJlYW0gPSBpbmZvLnN0cmVhbTtcbiAgICBpZiAoc3RyZWFtKSB7XG4gICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nZ2VyLndhcm5pbmcoJ0ZhaWxlZCB0byBjcmVhdGUgUmVtb3RlU3RyZWFtLicpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGVja0ljZUNvbm5lY3Rpb25TdGF0ZUFuZEZpcmVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5fcGMuaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29ubmVjdGVkJyB8fFxuICAgICAgICB0aGlzLl9wYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICBmb3IgKGNvbnN0IFsvKiBpZCAqLywgaW5mb10gb2YgdGhpcy5fcmVtb3RlU3RyZWFtSW5mbykge1xuICAgICAgICBpZiAoaW5mby5tZWRpYVN0cmVhbSkge1xuICAgICAgICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gbmV3IFN0cmVhbU1vZHVsZS5TdHJlYW1FdmVudCgnc3RyZWFtYWRkZWQnLCB7XG4gICAgICAgICAgICBzdHJlYW06IGluZm8uc3RyZWFtLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh0aGlzLl9pc1VuaWZpZWRQbGFuKCkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2YgaW5mby5tZWRpYVN0cmVhbS5nZXRUcmFja3MoKSkge1xuICAgICAgICAgICAgICB0cmFjay5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhU3RyZWFtcyA9IHRoaXMuX2dldFN0cmVhbUJ5VHJhY2soZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG1lZGlhU3RyZWFtIG9mIG1lZGlhU3RyZWFtcykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FyZUFsbFRyYWNrc0VuZGVkKG1lZGlhU3RyZWFtKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblJlbW90ZVN0cmVhbVJlbW92ZWQoe3N0cmVhbTogbWVkaWFTdHJlYW19KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9zZW5kU2lnbmFsaW5nTWVzc2FnZShTaWduYWxpbmdUeXBlLlRSQUNLU19BRERFRCwgaW5mby50cmFja0lkcyk7XG4gICAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtSW5mby5nZXQoaW5mby5tZWRpYVN0cmVhbS5pZCkubWVkaWFTdHJlYW0gPSBudWxsO1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChzdHJlYW1FdmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUDJQUGVlckNvbm5lY3Rpb25DaGFubmVsO1xuIl19
