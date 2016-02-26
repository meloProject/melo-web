(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\json\\stringify.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\json\\stringify.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\create.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\object\\create.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\define-property.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\object\\define-property.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\get-prototype-of.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\object\\get-prototype-of.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\keys.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\object\\keys.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\set-prototype-of.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\object\\set-prototype-of.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\promise.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\promise.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\symbol.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\symbol\\index.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\classCallCheck.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\createClass.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
},{"../core-js/object/define-property":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\define-property.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\inherits.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\create.js","../core-js/object/set-prototype-of":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\set-prototype-of.js","../helpers/typeof":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\typeof.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\possibleConstructorReturn.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\typeof.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\typeof.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof _Symbol !== "undefined" && obj.constructor === _Symbol ? "symbol" : typeof obj; }

exports.default = function (obj) {
  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\symbol.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\json\\stringify.js":[function(require,module,exports){
var core = require('../../modules/$.core');
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
};
},{"../../modules/$.core":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.core.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\object\\create.js":[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\object\\define-property.js":[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\object\\get-prototype-of.js":[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/$.core').Object.getPrototypeOf;
},{"../../modules/$.core":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.core.js","../../modules/es6.object.get-prototype-of":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.object.get-prototype-of.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\object\\keys.js":[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.core.js","../../modules/es6.object.keys":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.object.keys.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\object\\set-prototype-of.js":[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.core.js","../../modules/es6.object.set-prototype-of":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.object.set-prototype-of.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\promise.js":[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.core.js","../modules/es6.object.to-string":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.object.to-string.js","../modules/es6.promise":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.promise.js","../modules/es6.string.iterator":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.string.iterator.js","../modules/web.dom.iterable":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\web.dom.iterable.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\fn\\symbol\\index.js":[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.core.js","../../modules/es6.object.to-string":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.object.to-string.js","../../modules/es6.symbol":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.symbol.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.a-function.js":[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.add-to-unscopables.js":[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.an-object.js":[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.is-object.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.classof.js":[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , TAG = require('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.cof.js","./$.wks":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.wks.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.cof.js":[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.core.js":[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.ctx.js":[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.a-function.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.defined.js":[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.descriptors.js":[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.fails.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.dom-create.js":[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.global.js","./$.is-object":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.is-object.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.enum-keys.js":[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.export.js":[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , ctx       = require('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.core.js","./$.ctx":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.ctx.js","./$.global":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.global.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.fails.js":[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.for-of.js":[function(require,module,exports){
var ctx         = require('./$.ctx')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , anObject    = require('./$.an-object')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.an-object.js","./$.ctx":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.ctx.js","./$.is-array-iter":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.is-array-iter.js","./$.iter-call":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iter-call.js","./$.to-length":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-length.js","./core.get-iterator-method":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\core.get-iterator-method.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.get-names.js":[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js","./$.to-iobject":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-iobject.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.global.js":[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.has.js":[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.hide.js":[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js","./$.descriptors":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.descriptors.js","./$.property-desc":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.property-desc.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.html.js":[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.global.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.invoke.js":[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iobject.js":[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.cof.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.is-array-iter.js":[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./$.iterators')
  , ITERATOR   = require('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iterators.js","./$.wks":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.wks.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.is-array.js":[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.cof.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.is-object.js":[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iter-call.js":[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./$.an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./$.an-object":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.an-object.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iter-create.js":[function(require,module,exports){
'use strict';
var $              = require('./$')
  , descriptor     = require('./$.property-desc')
  , setToStringTag = require('./$.set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js","./$.hide":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.hide.js","./$.property-desc":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.property-desc.js","./$.set-to-string-tag":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.set-to-string-tag.js","./$.wks":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.wks.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iter-define.js":[function(require,module,exports){
'use strict';
var LIBRARY        = require('./$.library')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , hide           = require('./$.hide')
  , has            = require('./$.has')
  , Iterators      = require('./$.iterators')
  , $iterCreate    = require('./$.iter-create')
  , setToStringTag = require('./$.set-to-string-tag')
  , getProto       = require('./$').getProto
  , ITERATOR       = require('./$.wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js","./$.export":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.export.js","./$.has":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.has.js","./$.hide":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.hide.js","./$.iter-create":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iter-create.js","./$.iterators":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iterators.js","./$.library":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.library.js","./$.redefine":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.redefine.js","./$.set-to-string-tag":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.set-to-string-tag.js","./$.wks":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.wks.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iter-detect.js":[function(require,module,exports){
var ITERATOR     = require('./$.wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.wks.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iter-step.js":[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iterators.js":[function(require,module,exports){
module.exports = {};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js":[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.keyof.js":[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js","./$.to-iobject":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-iobject.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.library.js":[function(require,module,exports){
module.exports = true;
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.microtask.js":[function(require,module,exports){
var global    = require('./$.global')
  , macrotask = require('./$.task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./$.cof')(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};
},{"./$.cof":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.cof.js","./$.global":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.global.js","./$.task":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.task.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.object-sap.js":[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./$.export')
  , core    = require('./$.core')
  , fails   = require('./$.fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.core.js","./$.export":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.export.js","./$.fails":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.fails.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.property-desc.js":[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.redefine-all.js":[function(require,module,exports){
var redefine = require('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.redefine.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.redefine.js":[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.hide.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.same-value.js":[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.set-proto.js":[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js","./$.an-object":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.an-object.js","./$.ctx":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.ctx.js","./$.is-object":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.is-object.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.set-species.js":[function(require,module,exports){
'use strict';
var core        = require('./$.core')
  , $           = require('./$')
  , DESCRIPTORS = require('./$.descriptors')
  , SPECIES     = require('./$.wks')('species');

module.exports = function(KEY){
  var C = core[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js","./$.core":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.core.js","./$.descriptors":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.descriptors.js","./$.wks":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.wks.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.set-to-string-tag.js":[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js","./$.has":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.has.js","./$.wks":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.wks.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.shared.js":[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.global.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.species-constructor.js":[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./$.an-object')
  , aFunction = require('./$.a-function')
  , SPECIES   = require('./$.wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./$.a-function":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.a-function.js","./$.an-object":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.an-object.js","./$.wks":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.wks.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.strict-new.js":[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.string-at.js":[function(require,module,exports){
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.defined.js","./$.to-integer":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-integer.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.task.js":[function(require,module,exports){
var ctx                = require('./$.ctx')
  , invoke             = require('./$.invoke')
  , html               = require('./$.html')
  , cel                = require('./$.dom-create')
  , global             = require('./$.global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./$.cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$.cof":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.cof.js","./$.ctx":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.ctx.js","./$.dom-create":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.dom-create.js","./$.global":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.global.js","./$.html":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.html.js","./$.invoke":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.invoke.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-integer.js":[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-iobject.js":[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.defined.js","./$.iobject":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iobject.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-length.js":[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-integer.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-object.js":[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.defined.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.uid.js":[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.wks.js":[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.global.js","./$.shared":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.shared.js","./$.uid":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.uid.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\core.get-iterator-method.js":[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.classof.js","./$.core":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.core.js","./$.iterators":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iterators.js","./$.wks":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.wks.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.array.iterator.js":[function(require,module,exports){
'use strict';
var addToUnscopables = require('./$.add-to-unscopables')
  , step             = require('./$.iter-step')
  , Iterators        = require('./$.iterators')
  , toIObject        = require('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./$.add-to-unscopables":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.add-to-unscopables.js","./$.iter-define":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iter-define.js","./$.iter-step":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iter-step.js","./$.iterators":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iterators.js","./$.to-iobject":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-iobject.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.object.get-prototype-of.js":[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./$.object-sap":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.object-sap.js","./$.to-object":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-object.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.object.keys.js":[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.object-sap.js","./$.to-object":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-object.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.object.set-prototype-of.js":[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.export.js","./$.set-proto":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.set-proto.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.object.to-string.js":[function(require,module,exports){

},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.promise.js":[function(require,module,exports){
'use strict';
var $          = require('./$')
  , LIBRARY    = require('./$.library')
  , global     = require('./$.global')
  , ctx        = require('./$.ctx')
  , classof    = require('./$.classof')
  , $export    = require('./$.export')
  , isObject   = require('./$.is-object')
  , anObject   = require('./$.an-object')
  , aFunction  = require('./$.a-function')
  , strictNew  = require('./$.strict-new')
  , forOf      = require('./$.for-of')
  , setProto   = require('./$.set-proto').set
  , same       = require('./$.same-value')
  , SPECIES    = require('./$.wks')('species')
  , speciesConstructor = require('./$.species-constructor')
  , asap       = require('./$.microtask')
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , Wrapper;

var testResolve = function(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
};

var USE_NATIVE = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && require('./$.descriptors')){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve),
  this.reject  = aFunction(reject)
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  require('./$.redefine-all')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability(speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
require('./$.set-to-string-tag')(P, PROMISE);
require('./$.set-species')(PROMISE);
Wrapper = require('./$.core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js","./$.a-function":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.a-function.js","./$.an-object":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.an-object.js","./$.classof":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.classof.js","./$.core":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.core.js","./$.ctx":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.ctx.js","./$.descriptors":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.descriptors.js","./$.export":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.export.js","./$.for-of":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.for-of.js","./$.global":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.global.js","./$.is-object":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.is-object.js","./$.iter-detect":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iter-detect.js","./$.library":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.library.js","./$.microtask":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.microtask.js","./$.redefine-all":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.redefine-all.js","./$.same-value":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.same-value.js","./$.set-proto":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.set-proto.js","./$.set-species":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.set-species.js","./$.set-to-string-tag":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.set-to-string-tag.js","./$.species-constructor":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.species-constructor.js","./$.strict-new":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.strict-new.js","./$.wks":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.wks.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.string.iterator.js":[function(require,module,exports){
'use strict';
var $at  = require('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iter-define.js","./$.string-at":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.string-at.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.symbol.js":[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , DESCRIPTORS    = require('./$.descriptors')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , $fails         = require('./$.fails')
  , shared         = require('./$.shared')
  , setToStringTag = require('./$.set-to-string-tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , isArray        = require('./$.is-array')
  , anObject       = require('./$.an-object')
  , toIObject      = require('./$.to-iobject')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./$.library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./$":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.js","./$.an-object":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.an-object.js","./$.descriptors":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.descriptors.js","./$.enum-keys":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.enum-keys.js","./$.export":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.export.js","./$.fails":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.fails.js","./$.get-names":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.get-names.js","./$.global":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.global.js","./$.has":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.has.js","./$.is-array":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.is-array.js","./$.keyof":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.keyof.js","./$.library":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.library.js","./$.property-desc":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.property-desc.js","./$.redefine":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.redefine.js","./$.set-to-string-tag":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.set-to-string-tag.js","./$.shared":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.shared.js","./$.to-iobject":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.to-iobject.js","./$.uid":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.uid.js","./$.wks":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.wks.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\web.dom.iterable.js":[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\$.iterators.js","./es6.array.iterator":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\core-js\\library\\modules\\es6.array.iterator.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\underscore\\underscore.js":[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\controller\\desktopCn.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DesktopCn = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dispositiveCn = require("./dispositiveCn");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DesktopCn = exports.DesktopCn = function (_DispositiveCn) {
    (0, _inherits3.default)(DesktopCn, _DispositiveCn);

    function DesktopCn() {
        (0, _classCallCheck3.default)(this, DesktopCn);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DesktopCn).call(this));
    }

    (0, _createClass3.default)(DesktopCn, [{
        key: "set",
        value: function set(container, element) {
            this.container = container;
            this.element = element;
            this.element.className = "circlesOn";
            if (element.tagName === "CANVAS") this.graphics.set(element);
        }
    }, {
        key: "create",
        value: function create(container, element) {
            /*
            METHOD FOR TEST
            */
            this.container = container;
            this.element = element;
            if (element.tagName === "CANVAS") this.graphics.set(element);
        }
        /* EVENTS */

    }, {
        key: "ONMOUSEUP",
        value: function ONMOUSEUP(eve) {
            // desattach event for mouse move
            this.captureEvents = false;
            this.stop();
        }
    }, {
        key: "ONMOUSEDOWN",
        value: function ONMOUSEDOWN(event) {
            var self = this;
            this.captureEvents = true;
            // center element on center of mouse pointer
            this.element.style.top = event.y - this.ch / 2 + "px";
            this.element.style.left = event.x - this.cx / 2 + "px";
            this.element.className = "circlesOn";
            // set first impact sector.
            this.y = event.y;
            this.x = event.x;
            function handleEvent(event) {
                if (self.captureEvents) self.ONMOUSEMOVE.call(self, event);else self.container.removeEventListener("mousemove", handleEvent);
            }
            // attach event for mouse move
            this.container.addEventListener("mousemove", handleEvent);
            this.start();
        }
    }, {
        key: "ONMOUSEMOVE",
        value: function ONMOUSEMOVE(event) {
            // when the mouse is in movement.
            this.controls(this.element, event);
            // circle mechanics
            this.movement(this.element, event);
            // set position.
            this.y = event.y;
            this.x = event.x;
        }
    }]);
    return DesktopCn;
}(_dispositiveCn.DispositiveCn);

},{"./dispositiveCn":"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\controller\\dispositiveCn.ts","babel-runtime/core-js/object/get-prototype-of":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\get-prototype-of.js","babel-runtime/helpers/classCallCheck":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\createClass.js","babel-runtime/helpers/inherits":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\inherits.js","babel-runtime/helpers/possibleConstructorReturn":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\possibleConstructorReturn.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\controller\\dispositiveCn.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DispositiveCn = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _melo = require("../melo");

var _graphs = require("./res/graphs");

var _store = require("./res/store");

var _store2 = _interopRequireDefault(_store);

var _Sockets = require("../resources/Sockets");

var _Sockets2 = _interopRequireDefault(_Sockets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DispositiveCn = exports.DispositiveCn = function (_Melo) {
    (0, _inherits3.default)(DispositiveCn, _Melo);

    function DispositiveCn() {
        (0, _classCallCheck3.default)(this, DispositiveCn);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DispositiveCn).call(this));

        _this.cx = 240;
        _this.ch = 240;
        _this.borderBottomTolerance = 220;
        _this.borderRightTolerence = 220;
        _this.returns = 50;
        // Caution: these methods are called whenever the class is instanced.
        _this.graphics = new _graphs.Graphics();
        _Sockets2.default.socketOnMessages(function (message) {
            console.log(message);
        });
        // suscribge to channel for this controllers. deberia ir con el id del controller harcodeado con controller
        _Sockets2.default.socketSuscribeToChannel("controller").then(function (message) {
            console.log(message);
        }).catch(function (message) {
            console.error(message);
        });
        return _this;
    }

    (0, _createClass3.default)(DispositiveCn, [{
        key: "start",
        value: function start() {
            this.graphics.start();
        }
    }, {
        key: "stop",
        value: function stop() {
            this.graphics.stop();
        }
    }, {
        key: "movement",
        value: function movement(element, event) {
            /*
            set actions when the circle is in motion.
            */
            var actualY = event.y - this.y + element.offsetTop;
            var actualX = event.x - this.x + element.offsetLeft;
            // store position.
            _store2.default.MOVEMENT(actualY, actualX);
            // inform position.
            _Sockets2.default.comuPosition({
                brodcastChannel: "screen",
                positionX: _store2.default.controllerPy,
                positionY: _store2.default.controllerPx
            }).then(function (message) {
                console.log(message);
            }).catch(function (message) {
                console.error(message);
            });
            // set position in DOM.
            element.style.top = actualY + "px";
            element.style.left = actualX + "px";
        }
    }, {
        key: "controls",
        value: function controls(element, eve) {
            var eY = element.offsetTop,
                eX = element.offsetLeft;
        }
    }]);
    return DispositiveCn;
}(_melo.Melo);

},{"../melo":"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\melo.ts","../resources/Sockets":"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\resources\\Sockets.ts","./res/graphs":"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\controller\\res\\graphs.ts","./res/store":"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\controller\\res\\store.ts","babel-runtime/core-js/object/get-prototype-of":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\get-prototype-of.js","babel-runtime/helpers/classCallCheck":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\createClass.js","babel-runtime/helpers/inherits":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\inherits.js","babel-runtime/helpers/possibleConstructorReturn":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\possibleConstructorReturn.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\controller\\res\\graphs.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Graphics = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Graphics = exports.Graphics = function () {
    function Graphics() {
        (0, _classCallCheck3.default)(this, Graphics);
    }

    (0, _createClass3.default)(Graphics, [{
        key: "set",
        value: function set(element) {
            var circleSet = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            /*
            set initial props of the circles controller.
            */
            this.render = element.getContext("2d");
            this.cw = element.width = 240;
            this.ch = element.height = 240;
            this.animationSpeed = 6;
            this.loopCount = 0;
            this.circle = {
                x: circleSet.x || this.cw / 2,
                y: circleSet.y || this.ch / 2,
                radius: circleSet.radius || 90,
                angleStart: circleSet.angleStart || 170,
                angleEnd: circleSet.angleEnd || 90,
                hue: circleSet.hue || 450,
                thickness: circleSet.thickness || 35,
                bgColor: "#4c8efe",
                rotation: 0
            };
            this.circleInverse = {
                x: circleSet.x || this.cw / 2,
                y: circleSet.y || this.ch / 2,
                radius: circleSet.radius || 90,
                angleStart: circleSet.angleStart || 170,
                angleEnd: circleSet.angleEnd || 90,
                hue: circleSet.hue || 450,
                thickness: circleSet.thickness || 35,
                bgColor: "#ffc31c",
                rotation: 180
            };
            // aspect props.
            this.render.lineCap = "round";
        }
    }, {
        key: "start",
        value: function start() {
            /*
            this function start the circular animation loop
            */
            // this.circleInterval = requestAnimationFrame(eve => this.start());
            this.loop();
        }
    }, {
        key: "stop",
        value: function stop() {
            cancelAnimationFrame(this.circleInterval);
            this.render.clearRect(0, 0, this.cw, this.ch);
        }
    }, {
        key: "loop",
        value: function loop() {
            this.clear();
            this.renderSemiCircleOne();
            this.renderSemiCircleTwo();
            this.graphsControls();
        }
    }, {
        key: "graphsControls",
        value: function graphsControls() {
            if (typeof this.onLoop === "function") this.onLoop(this.loopCount++);
        }
    }, {
        key: "rand",
        value: function rand(a, b) {
            return ~ ~(Math.random() * (b - a + 1) + a);
        }
    }, {
        key: "dToR",
        value: function dToR(degrees) {
            return degrees * (Math.PI / 180);
        }
    }, {
        key: "renderSemiCircleOne",
        value: function renderSemiCircleOne() {
            this.render.save();
            this.render.translate(this.circle.x, this.circle.y);
            this.render.rotate(this.dToR(this.circle.rotation));
            this.render.beginPath();
            this.render.arc(0, 0, this.circle.radius, this.dToR(this.circle.angleStart), this.dToR(this.circle.angleEnd), true);
            this.render.lineWidth = this.circle.thickness;
            this.render.strokeStyle = this.circle.bgColor;
            this.render.stroke();
            this.render.restore();
        }
    }, {
        key: "renderSemiCircleTwo",
        value: function renderSemiCircleTwo() {
            this.render.save();
            this.render.translate(this.circleInverse.x, this.circleInverse.y);
            this.render.rotate(this.dToR(this.circleInverse.rotation));
            this.render.beginPath();
            this.render.arc(0, 0, this.circleInverse.radius, this.dToR(this.circleInverse.angleStart), this.dToR(this.circleInverse.angleEnd), true);
            this.render.lineWidth = this.circleInverse.thickness;
            this.render.strokeStyle = this.circleInverse.bgColor;
            this.render.stroke();
            this.render.restore();
        }
    }, {
        key: "clear",
        value: function clear() {
            this.render.globalCompositeOperation = "destination-out";
            this.render.fillRect(0, 0, this.cw, this.ch);
            this.render.globalCompositeOperation = "lighter";
        }
    }, {
        key: "elasticControl",
        value: function elasticControl(event) {
            var top = event.y,
                left = event.x;
            // if (top | left > this.actualPositon) console.log()
            // elastic control movement.
        }
    }]);
    return Graphics;
}();

},{"babel-runtime/helpers/classCallCheck":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\controller\\res\\store.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _farm = require("../../resources/farm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = function (_Farm) {
    (0, _inherits3.default)(Store, _Farm);

    function Store() {
        (0, _classCallCheck3.default)(this, Store);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Store).call(this));
        //this.watch([
        //    {
        //        watch: "controllerPy",
        //        action: this.MOVE
        //    },
        //    {
        //        watch: "controllerPx",
        //        action: this.MOVE2
        //    }
        //]);
    }

    (0, _createClass3.default)(Store, [{
        key: "MOVEMENT",
        value: function MOVEMENT(y, x) {
            this.controllerPy = y;
            this.controllerPx = x;
        }
    }]);
    return Store;
}(_farm.Farm);

exports.default = new Store();

},{"../../resources/farm":"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\resources\\farm.ts","babel-runtime/core-js/object/get-prototype-of":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\get-prototype-of.js","babel-runtime/helpers/classCallCheck":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\createClass.js","babel-runtime/helpers/inherits":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\inherits.js","babel-runtime/helpers/possibleConstructorReturn":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\possibleConstructorReturn.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\melo.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Melo = exports.Dispositives = undefined;

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dispositives = exports.Dispositives = function Dispositives() {
    (0, _classCallCheck3.default)(this, Dispositives);
};

var Melo = exports.Melo = function () {
    function Melo() {
        (0, _classCallCheck3.default)(this, Melo);
    }

    (0, _createClass3.default)(Melo, [{
        key: "error",
        value: function error(group, message) {
            Bragi.log(group, message);
            throw Error(message);
        }
    }]);
    return Melo;
}();

},{"babel-runtime/helpers/classCallCheck":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\resources\\Sockets.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _comunication = require("./comunication");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sockets = function (_Comunication) {
    (0, _inherits3.default)(Sockets, _Comunication);

    function Sockets() {
        (0, _classCallCheck3.default)(this, Sockets);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Sockets).call(this));

        _this.socket = window.sails.socket;
        _this.socketurl = "http://localhost:1337";
        _this.urls = {
            updateposition: "/controllers/position",
            suscribe: "/channels/sus"
        };
        return _this;
    }

    (0, _createClass3.default)(Sockets, [{
        key: "findChannel",
        value: function findChannel() {}
    }, {
        key: "comuPosition",
        value: function comuPosition(params, url) {
            var _this2 = this;

            /*
            * METODO PARA COMUNICAR AL SCREEN, LA POSICION DEL ELEMENTO.
            nota: en el request deberia ir el id del screen - hacodeado con por ahora con "screen"
            */
            url = url || this.urls.updateposition;
            return new _promise2.default(function (resolve, reject) {
                _this2.socket.post(url, params, function (res, JWR) {
                    // deberia controlar el error en esta parte.
                    if (!JWR.error) resolve(res);else reject(JWR);
                });
            });
        }
    }, {
        key: "socketOnMessages",
        value: function socketOnMessages(call) {
            /*
            * METODO SETEAR LAS ACCIONES QUE SE EMITIRAN CUANDO SE RECIBA UN MENSAJE.
            */
            this.socket.on('message', function (message) {
                call(message);
            });
        }
    }, {
        key: "socketSuscribeToChannel",
        value: function socketSuscribeToChannel(room, url) {
            var _this3 = this;

            /*
            * METODO PARA SUSCRIBIR EL CLIENTE AL CHANNEL DE WEBSCOKETS.
            */
            url = url || this.urls.suscribe;
            return new _promise2.default(function (resolve, reject) {
                _this3.socket.post(url, { room: room }, function (res, JWR) {
                    // deberia controlar el error en esta parte.
                    if (!JWR.error) resolve(res);else reject(JWR.error);
                });
            });
        }
    }]);
    return Sockets;
}(_comunication.Comunication);

exports.default = new Sockets();

},{"./comunication":"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\resources\\comunication.ts","babel-runtime/core-js/object/get-prototype-of":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\get-prototype-of.js","babel-runtime/core-js/promise":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\promise.js","babel-runtime/helpers/classCallCheck":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\createClass.js","babel-runtime/helpers/inherits":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\inherits.js","babel-runtime/helpers/possibleConstructorReturn":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\possibleConstructorReturn.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\resources\\comunication.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Comunication = undefined;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/// <reference path="../typings/whatwg-fetch/whatwg-fetch" />

var Comunication = exports.Comunication = function () {
    function Comunication() {
        (0, _classCallCheck3.default)(this, Comunication);

        this.url = "http://localhost:1337";
        this.dispositive = "controller";
    }

    (0, _createClass3.default)(Comunication, [{
        key: "fetcher",
        value: function fetcher(request) {
            var reqConstructor = {};
            // set defaut request props.
            request.controller = request.controller !== undefined ? "/" + request.controller : "";
            request.action = request.action !== undefined ? "/" + request.action : "";
            // check props for send in request body
            if (request.mode) reqConstructor.mode = request.mode; // default - cors 
            if (request.method) reqConstructor.method = request.method; // VERBS POST GET DELETE PUT...
            if (request.headers) reqConstructor.headers = request.headers;
            if (request.cache) reqConstructor.cache = request.cache; // default disabled
            if (request.values !== undefined && (0, _typeof3.default)(request.values) === "object") reqConstructor.values = (0, _stringify2.default)(request.values); // request body in JSON
            return fetch(this.url + request.controller + request.action, reqConstructor);
        }
    }, {
        key: "createRequest",
        value: function createRequest(actionType, values) {
            // prepare the request
            var promise = undefined;
            if (actionType == "updateposition") {
                return this.fetcher({
                    mode: "cors",
                    method: "PUT",
                    controller: "channels",
                    action: values.channel,
                    values: values
                });
            }
            return promise = new _promise2.default(function (resolve, reject) {
                reject("Fetch request error the action type dont exist");
            });
        }
    }, {
        key: "request",
        value: function request(actionType, values) {
            return this.createRequest(actionType, values);
        }
    }]);
    return Comunication;
}();

exports.default = new Comunication();

},{"babel-runtime/core-js/json/stringify":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\json\\stringify.js","babel-runtime/core-js/promise":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\promise.js","babel-runtime/helpers/classCallCheck":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\createClass.js","babel-runtime/helpers/typeof":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\typeof.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\resources\\farm.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Farm = undefined;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _underscore = require("underscore");

var _ = _interopRequireWildcard(_underscore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Farm = exports.Farm = function () {
    function Farm() {
        (0, _classCallCheck3.default)(this, Farm);
    }

    (0, _createClass3.default)(Farm, [{
        key: "watch",
        value: function watch(watchers) {
            Object.observe(this, function (changes) {
                _.each(changes, function (mutated, key) {
                    if ((0, _keys2.default)(watchers).length) {
                        _.each(watchers, function (watchObj, key) {
                            if (mutated.name === watchObj.watch) {
                                if (typeof watchObj.action === "function") {
                                    // se ejecuta la funcion asignada al observador
                                    watchObj.action(mutated.object[mutated.name]);
                                }
                            }
                        });
                    }
                });
            });
        }
    }]);
    return Farm;
}();

},{"babel-runtime/core-js/object/keys":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\keys.js","babel-runtime/helpers/classCallCheck":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\createClass.js","underscore":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\underscore\\underscore.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\meloCn.ts":[function(require,module,exports){
"use strict";

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _desktopCn = require("./melcore/melcore/controller/desktopCn");

var _tests = require("./tests/tests");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* SET TESTS*/
_tests.Tests.setGlobals();
var controllers = controllers || {},
    controllersID = 0;
addEventListener('load', function () {
    var element = document.createElement("canvas"),
        main = document.getElementById("controllerContainer");
    /* SET EVENTS */
    main.addEventListener("mouseup", function (event) {
        controllers[controllersID].ONMOUSEUP(event);
        main.removeChild(element);
        delete controllers[controllersID];
        console.log("controllers: " + (0, _keys2.default)(controllers).length);
    });
    main.addEventListener("mousedown", function (event) {
        controllersID++;
        controllers[controllersID] = new _desktopCn.DesktopCn();
        controllers[controllersID]["set"](main, element);
        main.appendChild(element);
        controllers[controllersID].ONMOUSEDOWN(event);
        console.log("controllers: " + (0, _keys2.default)(controllers).length);
    });
});

},{"./melcore/melcore/controller/desktopCn":"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\controller\\desktopCn.ts","./tests/tests":"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\tests\\tests.ts","babel-runtime/core-js/object/keys":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\core-js\\object\\keys.js"}],"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\tests\\tests.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tests = undefined;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _desktopCn = require("../melcore/melcore/controller/desktopCn");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tests = exports.Tests = function () {
    function Tests() {
        (0, _classCallCheck3.default)(this, Tests);
    }

    (0, _createClass3.default)(Tests, null, [{
        key: "setGlobals",
        value: function setGlobals() {
            window.createController = function (classElement, container) {
                var element = document.createElement("canvas"),
                    main = document.querySelector(".con__st_mid"),
                    controller = undefined;
                classElement = classElement || "circlesOn";
                var elementContainer = document.createElement("div");
                element.className = classElement;
                element.id = "canvasTest";
                elementContainer.className = "circleContainer";
                controller = new _desktopCn.DesktopCn();
                controller.create(main, element);
                controller.start();
                elementContainer.appendChild(element);
                main.appendChild(elementContainer);
                console.log("created new controller");
                return element;
            };
            window.removeController = function (container) {
                var elements = document.querySelectorAll(".circleContainer"),
                    main = document.querySelector(".con__st_mid");
                try {
                    for (var h in elements) {
                        if ((0, _typeof3.default)(elements[h]) === "object") main.removeChild(elements[h]);
                    }
                } catch (err) {
                    return "something's wrong " + err;
                }
                return "All controllers removed";
            };
        }
    }]);
    return Tests;
}();

},{"../melcore/melcore/controller/desktopCn":"D:\\APIS\\melo\\webserver\\melo\\melo\\public\\melcore\\melcore\\controller\\desktopCn.ts","babel-runtime/helpers/classCallCheck":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\createClass.js","babel-runtime/helpers/typeof":"D:\\APIS\\melo\\webserver\\melo\\melo\\node_modules\\babel-runtime\\helpers\\typeof.js"}]},{},["D:\\APIS\\melo\\webserver\\melo\\melo\\public\\meloCn.ts"])


//# sourceMappingURL=melocn.js.map
