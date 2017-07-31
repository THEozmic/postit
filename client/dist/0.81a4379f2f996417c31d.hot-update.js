webpackHotUpdate(0,{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sendMessage = function sendMessage(newMessage) {
  return {
    type: 'SEND_MESSAGE',
    newMessage: newMessage
  };
};

exports.default = sendMessage;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(16);

__webpack_require__(305);

var _scrollToElement = __webpack_require__(298);

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

var _sendMessage = __webpack_require__(126);

var _sendMessage2 = _interopRequireDefault(_sendMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messages = function (_React$Component) {
  _inherits(Messages, _React$Component);

  function Messages(props) {
    _classCallCheck(this, Messages);

    var _this = _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this, props));

    _this.state = {
      message_error: ''
    };
    _this.send = _this.send.bind(_this);
    _this.scrollPane = _this.scrollPane.bind(_this);
    return _this;
  }

  _createClass(Messages, [{
    key: 'scrollPane',
    value: function scrollPane() {
      (0, _scrollToElement2.default)('.second', {
        offset: -60,
        ease: 'in-expo',
        duration: 900
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollPane();
    }
  }, {
    key: 'send',
    value: function send(e) {
      var _this2 = this;

      e.preventDefault();
      var content = this.content,
          from = this.from,
          priority = this.priority;

      content = content.value.trim();
      from = '@michael';
      priority = priority.value.trim().toLowerCase();
      var readBy = [];
      if (content === '' || from === '' || priority === '') {
        this.setState({ message_error: 'Error: Message has no priority, sender or content' });
        return;
      }
      var newMessage = { id: id, content: content, from: from, priority: priority, readBy: readBy };
      fetch('http://localhost:8000/api/users').then(function (response) {
        console.log(response, '==============>>>>');
        if (response.body.status === 200) {
          _this2.props.send(newMessage);
        }
      });

      this.content.value = '';
      this.scrollPane();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var n = 0;
      return _react2.default.createElement(
        'div',
        { className: 'page-content align-top pl-0 col-md-7 col-lg-9' },
        _react2.default.createElement(
          'div',
          { className: 'messages' },
          this.props.messages.map(function (message) {
            n += 1;
            var secondClass = '';
            if (_this3.props.messages.length - 1 === n) {
              secondClass = ' second';
            } else {
              secondClass = '';
            }
            return _react2.default.createElement(
              'div',
              { className: 'message-container' + secondClass, key: message.id },
              _react2.default.createElement(
                'div',
                { className: 'message' },
                _react2.default.createElement(
                  'div',
                  { className: 'message-details' },
                  _react2.default.createElement(
                    'span',
                    { className: 'messenger' },
                    message.from
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'message-type ' + message.priority },
                    message.priority
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  message.content
                ),
                message.readBy.length === 0 ? '' : _react2.default.createElement(
                  'div',
                  { className: 'message-read-list' },
                  'Read by: ',
                  _react2.default.createElement(
                    'span',
                    null,
                    message.readBy.join(', ')
                  )
                )
              )
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'new-message' },
          _react2.default.createElement(
            'div',
            { className: 'col-12 pl-0 pr-0 pb-2' },
            _react2.default.createElement('textarea', { className: 'message-box', placeholder: 'Type your message...',
              ref: function ref(input) {
                _this3.content = input;
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-12 pl-0 pr-0' },
            _react2.default.createElement(
              'div',
              { className: 'priority-level' },
              _react2.default.createElement(
                'select',
                { className: 'browser-default', ref: function ref(input) {
                    _this3.priority = input;
                  } },
                _react2.default.createElement(
                  'option',
                  { value: 'Normal' },
                  'Normal'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Urgent' },
                  'Urgent'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Critical' },
                  'Critical'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'right' },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-primary', onClick: this.send },
                'Send'
              )
            )
          )
        )
      );
    }
  }]);

  return Messages;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    send: function send(newMessage) {
      return dispatch((0, _sendMessage2.default)(newMessage));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Messages);

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var type;
try {
  type = __webpack_require__(46);
} catch (_) {
  type = __webpack_require__(46);
}

/**
 * Module exports.
 */

module.exports = clone;

/**
 * Clones objects.
 *
 * @param {Mixed} any object
 * @api public
 */

function clone(obj) {
  switch (type(obj)) {
    case 'object':
      var copy = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = clone(obj[key]);
        }
      }
      return copy;

    case 'array':
      var copy = new Array(obj.length);
      for (var i = 0, l = obj.length; i < l; i++) {
        copy[i] = clone(obj[i]);
      }
      return copy;

    case 'regexp':
      // from millermedeiros/amd-utils - MIT
      var flags = '';
      flags += obj.multiline ? 'm' : '';
      flags += obj.global ? 'g' : '';
      flags += obj.ignoreCase ? 'i' : '';
      return new RegExp(obj.source, flags);

    case 'date':
      return new Date(obj.getTime());

    default:
      // string, number, boolean, …
      return obj;
  }
}

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `requestAnimationFrame()`.
 */

exports = module.exports = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || fallback;

/**
 * Fallback implementation.
 */

var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

/**
 * Cancel.
 */

var cancel = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.clearTimeout;

exports.cancel = function (id) {
  cancel.call(window, id);
};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var Emitter = __webpack_require__(148);
var clone = __webpack_require__(145);
var type = __webpack_require__(46);
var ease = __webpack_require__(150);

/**
 * Expose `Tween`.
 */

module.exports = Tween;

/**
 * Initialize a new `Tween` with `obj`.
 *
 * @param {Object|Array} obj
 * @api public
 */

function Tween(obj) {
  if (!(this instanceof Tween)) return new Tween(obj);
  this._from = obj;
  this.ease('linear');
  this.duration(500);
}

/**
 * Mixin emitter.
 */

Emitter(Tween.prototype);

/**
 * Reset the tween.
 *
 * @api public
 */

Tween.prototype.reset = function () {
  this.isArray = 'array' === type(this._from);
  this._curr = clone(this._from);
  this._done = false;
  this._start = Date.now();
  return this;
};

/**
 * Tween to `obj` and reset internal state.
 *
 *    tween.to({ x: 50, y: 100 })
 *
 * @param {Object|Array} obj
 * @return {Tween} self
 * @api public
 */

Tween.prototype.to = function (obj) {
  this.reset();
  this._to = obj;
  return this;
};

/**
 * Set duration to `ms` [500].
 *
 * @param {Number} ms
 * @return {Tween} self
 * @api public
 */

Tween.prototype.duration = function (ms) {
  this._duration = ms;
  return this;
};

/**
 * Set easing function to `fn`.
 *
 *    tween.ease('in-out-sine')
 *
 * @param {String|Function} fn
 * @return {Tween}
 * @api public
 */

Tween.prototype.ease = function (fn) {
  fn = 'function' == typeof fn ? fn : ease[fn];
  if (!fn) throw new TypeError('invalid easing function');
  this._ease = fn;
  return this;
};

/**
 * Stop the tween and immediately emit "stop" and "end".
 *
 * @return {Tween}
 * @api public
 */

Tween.prototype.stop = function () {
  this.stopped = true;
  this._done = true;
  this.emit('stop');
  this.emit('end');
  return this;
};

/**
 * Perform a step.
 *
 * @return {Tween} self
 * @api private
 */

Tween.prototype.step = function () {
  if (this._done) return;

  // duration
  var duration = this._duration;
  var now = Date.now();
  var delta = now - this._start;
  var done = delta >= duration;

  // complete
  if (done) {
    this._from = this._to;
    this._update(this._to);
    this._done = true;
    this.emit('end');
    return this;
  }

  // tween
  var from = this._from;
  var to = this._to;
  var curr = this._curr;
  var fn = this._ease;
  var p = (now - this._start) / duration;
  var n = fn(p);

  // array
  if (this.isArray) {
    for (var i = 0; i < from.length; ++i) {
      curr[i] = from[i] + (to[i] - from[i]) * n;
    }

    this._update(curr);
    return this;
  }

  // objech
  for (var k in from) {
    curr[k] = from[k] + (to[k] - from[k]) * n;
  }

  this._update(curr);
  return this;
};

/**
 * Set update function to `fn` or
 * when no argument is given this performs
 * a "step".
 *
 * @param {Function} fn
 * @return {Tween} self
 * @api public
 */

Tween.prototype.update = function (fn) {
  if (0 == arguments.length) return this.step();
  this._update = fn;
  return this;
};

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// easing functions from "Tween.js"

exports.linear = function (n) {
  return n;
};

exports.inQuad = function (n) {
  return n * n;
};

exports.outQuad = function (n) {
  return n * (2 - n);
};

exports.inOutQuad = function (n) {
  n *= 2;
  if (n < 1) return 0.5 * n * n;
  return -0.5 * (--n * (n - 2) - 1);
};

exports.inCube = function (n) {
  return n * n * n;
};

exports.outCube = function (n) {
  return --n * n * n + 1;
};

exports.inOutCube = function (n) {
  n *= 2;
  if (n < 1) return 0.5 * n * n * n;
  return 0.5 * ((n -= 2) * n * n + 2);
};

exports.inQuart = function (n) {
  return n * n * n * n;
};

exports.outQuart = function (n) {
  return 1 - --n * n * n * n;
};

exports.inOutQuart = function (n) {
  n *= 2;
  if (n < 1) return 0.5 * n * n * n * n;
  return -0.5 * ((n -= 2) * n * n * n - 2);
};

exports.inQuint = function (n) {
  return n * n * n * n * n;
};

exports.outQuint = function (n) {
  return --n * n * n * n * n + 1;
};

exports.inOutQuint = function (n) {
  n *= 2;
  if (n < 1) return 0.5 * n * n * n * n * n;
  return 0.5 * ((n -= 2) * n * n * n * n + 2);
};

exports.inSine = function (n) {
  return 1 - Math.cos(n * Math.PI / 2);
};

exports.outSine = function (n) {
  return Math.sin(n * Math.PI / 2);
};

exports.inOutSine = function (n) {
  return .5 * (1 - Math.cos(Math.PI * n));
};

exports.inExpo = function (n) {
  return 0 == n ? 0 : Math.pow(1024, n - 1);
};

exports.outExpo = function (n) {
  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
};

exports.inOutExpo = function (n) {
  if (0 == n) return 0;
  if (1 == n) return 1;
  if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
  return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
};

exports.inCirc = function (n) {
  return 1 - Math.sqrt(1 - n * n);
};

exports.outCirc = function (n) {
  return Math.sqrt(1 - --n * n);
};

exports.inOutCirc = function (n) {
  n *= 2;
  if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
};

exports.inBack = function (n) {
  var s = 1.70158;
  return n * n * ((s + 1) * n - s);
};

exports.outBack = function (n) {
  var s = 1.70158;
  return --n * n * ((s + 1) * n + s) + 1;
};

exports.inOutBack = function (n) {
  var s = 1.70158 * 1.525;
  if ((n *= 2) < 1) return 0.5 * (n * n * ((s + 1) * n - s));
  return 0.5 * ((n -= 2) * n * ((s + 1) * n + s) + 2);
};

exports.inBounce = function (n) {
  return 1 - exports.outBounce(1 - n);
};

exports.outBounce = function (n) {
  if (n < 1 / 2.75) {
    return 7.5625 * n * n;
  } else if (n < 2 / 2.75) {
    return 7.5625 * (n -= 1.5 / 2.75) * n + 0.75;
  } else if (n < 2.5 / 2.75) {
    return 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375;
  } else {
    return 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
  }
};

exports.inOutBounce = function (n) {
  if (n < .5) return exports.inBounce(n * 2) * .5;
  return exports.outBounce(n * 2 - 1) * .5 + .5;
};

// aliases

exports['in-quad'] = exports.inQuad;
exports['out-quad'] = exports.outQuad;
exports['in-out-quad'] = exports.inOutQuad;
exports['in-cube'] = exports.inCube;
exports['out-cube'] = exports.outCube;
exports['in-out-cube'] = exports.inOutCube;
exports['in-quart'] = exports.inQuart;
exports['out-quart'] = exports.outQuart;
exports['in-out-quart'] = exports.inOutQuart;
exports['in-quint'] = exports.inQuint;
exports['out-quint'] = exports.outQuint;
exports['in-out-quint'] = exports.inOutQuint;
exports['in-sine'] = exports.inSine;
exports['out-sine'] = exports.outSine;
exports['in-out-sine'] = exports.inOutSine;
exports['in-expo'] = exports.inExpo;
exports['out-expo'] = exports.outExpo;
exports['in-out-expo'] = exports.inOutExpo;
exports['in-circ'] = exports.inCirc;
exports['out-circ'] = exports.outCirc;
exports['in-out-circ'] = exports.inOutCirc;
exports['in-back'] = exports.inBack;
exports['out-back'] = exports.outBack;
exports['in-out-back'] = exports.inOutBack;
exports['in-bounce'] = exports.inBounce;
exports['out-bounce'] = exports.outBounce;
exports['in-out-bounce'] = exports.inOutBounce;

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var scroll = __webpack_require__(299);

function calculateScrollOffset(elem, additionalOffset, alignment) {
  var body = document.body,
      html = document.documentElement;

  var elemRect = elem.getBoundingClientRect();
  var clientHeight = html.clientHeight;
  var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  additionalOffset = additionalOffset || 0;

  var scrollPosition;
  if (alignment === 'bottom') {
    scrollPosition = elemRect.bottom - clientHeight;
  } else if (alignment === 'middle') {
    scrollPosition = elemRect.bottom - clientHeight / 2 - elemRect.height / 2;
  } else {
    // top and default
    scrollPosition = elemRect.top;
  }

  var maxScrollPosition = documentHeight - clientHeight;
  return Math.min(scrollPosition + additionalOffset + window.pageYOffset, maxScrollPosition);
}

module.exports = function (elem, options) {
  options = options || {};
  if (typeof elem === 'string') elem = document.querySelector(elem);
  if (elem) return scroll(0, calculateScrollOffset(elem, options.offset, options.align), options);
};

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var Tween = __webpack_require__(147);
var raf = __webpack_require__(146);

/**
 * Expose `scrollTo`.
 */

module.exports = scrollTo;

/**
 * Scroll to `(x, y)`.
 *
 * @param {Number} x
 * @param {Number} y
 * @api public
 */

function scrollTo(x, y, options) {
  options = options || {};

  // start position
  var start = scroll();

  // setup tween
  var tween = Tween(start).ease(options.ease || 'out-circ').to({ top: y, left: x }).duration(options.duration || 1000);

  // scroll
  tween.update(function (o) {
    window.scrollTo(o.left | 0, o.top | 0);
  });

  // handle end
  tween.on('end', function () {
    animate = function animate() {};
  });

  // animate
  function animate() {
    raf(animate);
    tween.update();
  }

  animate();

  return tween;
}

/**
 * Return scroll position.
 *
 * @return {Object}
 * @api private
 */

function scroll() {
  var y = window.pageYOffset || document.documentElement.scrollTop;
  var x = window.pageXOffset || document.documentElement.scrollLeft;
  return { top: y, left: x };
}

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (self) {
  'use strict';

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === undefined, value: value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, { body: this._bodyInit });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function (val) {
  switch (toString.call(val)) {
    case '[object Date]':
      return 'date';
    case '[object RegExp]':
      return 'regexp';
    case '[object Arguments]':
      return 'arguments';
    case '[object Array]':
      return 'array';
    case '[object Error]':
      return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val);

  return typeof val === 'undefined' ? 'undefined' : _typeof(val);
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9zZW5kTWVzc2FnZS5qcz84OTZhIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanM/MWI4YyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1jbG9uZS9pbmRleC5qcz8wZWM1Iiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXJhZi9pbmRleC5qcz9hZmRhIiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXR3ZWVuL2luZGV4LmpzPzU3ZjIiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtdHdlZW4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcz85ZjM2Iiwid2VicGFjazovLy8uL34vZWFzZS1jb21wb25lbnQvaW5kZXguanM/OTNmNCIsIndlYnBhY2s6Ly8vLi9+L3Njcm9sbC10by1lbGVtZW50L2luZGV4LmpzP2IwOWUiLCJ3ZWJwYWNrOi8vLy4vfi9zY3JvbGwtdG8vaW5kZXguanM/NDMwNCIsIndlYnBhY2s6Ly8vLi9+L3doYXR3Zy1mZXRjaC9mZXRjaC5qcz8xYzIwIiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXR5cGUvaW5kZXguanM/NmY1NiJdLCJuYW1lcyI6WyJzZW5kTWVzc2FnZSIsIm5ld01lc3NhZ2UiLCJ0eXBlIiwiTWVzc2FnZXMiLCJwcm9wcyIsInN0YXRlIiwibWVzc2FnZV9lcnJvciIsInNlbmQiLCJiaW5kIiwic2Nyb2xsUGFuZSIsIm9mZnNldCIsImVhc2UiLCJkdXJhdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRlbnQiLCJmcm9tIiwicHJpb3JpdHkiLCJ2YWx1ZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInJlYWRCeSIsInNldFN0YXRlIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJib2R5Iiwic3RhdHVzIiwibiIsIm1lc3NhZ2VzIiwibWFwIiwibWVzc2FnZSIsInNlY29uZENsYXNzIiwibGVuZ3RoIiwiam9pbiIsImlucHV0IiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJyZXF1aXJlIiwiXyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjbG9uZSIsIm9iaiIsImNvcHkiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsIkFycmF5IiwiaSIsImwiLCJmbGFncyIsIm11bHRpbGluZSIsImdsb2JhbCIsImlnbm9yZUNhc2UiLCJSZWdFeHAiLCJzb3VyY2UiLCJEYXRlIiwiZ2V0VGltZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZhbGxiYWNrIiwicHJldiIsImZuIiwiY3VyciIsIm1zIiwiTWF0aCIsIm1heCIsInJlcSIsInNldFRpbWVvdXQiLCJjYW5jZWwiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJjYWxsIiwiRW1pdHRlciIsIlR3ZWVuIiwiX2Zyb20iLCJwcm90b3R5cGUiLCJyZXNldCIsImlzQXJyYXkiLCJfY3VyciIsIl9kb25lIiwiX3N0YXJ0Iiwibm93IiwidG8iLCJfdG8iLCJfZHVyYXRpb24iLCJUeXBlRXJyb3IiLCJfZWFzZSIsInN0b3AiLCJzdG9wcGVkIiwiZW1pdCIsInN0ZXAiLCJkZWx0YSIsImRvbmUiLCJfdXBkYXRlIiwicCIsImsiLCJ1cGRhdGUiLCJhcmd1bWVudHMiLCJtaXhpbiIsIm9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiX2NhbGxiYWNrcyIsInB1c2giLCJvbmNlIiwib2ZmIiwiYXBwbHkiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYWxsYmFja3MiLCJjYiIsInNwbGljZSIsImFyZ3MiLCJzbGljZSIsImxlbiIsImxpc3RlbmVycyIsImhhc0xpc3RlbmVycyIsImxpbmVhciIsImluUXVhZCIsIm91dFF1YWQiLCJpbk91dFF1YWQiLCJpbkN1YmUiLCJvdXRDdWJlIiwiaW5PdXRDdWJlIiwiaW5RdWFydCIsIm91dFF1YXJ0IiwiaW5PdXRRdWFydCIsImluUXVpbnQiLCJvdXRRdWludCIsImluT3V0UXVpbnQiLCJpblNpbmUiLCJjb3MiLCJQSSIsIm91dFNpbmUiLCJzaW4iLCJpbk91dFNpbmUiLCJpbkV4cG8iLCJwb3ciLCJvdXRFeHBvIiwiaW5PdXRFeHBvIiwiaW5DaXJjIiwic3FydCIsIm91dENpcmMiLCJpbk91dENpcmMiLCJpbkJhY2siLCJzIiwib3V0QmFjayIsImluT3V0QmFjayIsImluQm91bmNlIiwib3V0Qm91bmNlIiwiaW5PdXRCb3VuY2UiLCJzY3JvbGwiLCJjYWxjdWxhdGVTY3JvbGxPZmZzZXQiLCJlbGVtIiwiYWRkaXRpb25hbE9mZnNldCIsImFsaWdubWVudCIsImRvY3VtZW50IiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsImVsZW1SZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50SGVpZ2h0IiwiZG9jdW1lbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxQb3NpdGlvbiIsImJvdHRvbSIsImhlaWdodCIsInRvcCIsIm1heFNjcm9sbFBvc2l0aW9uIiwibWluIiwicGFnZVlPZmZzZXQiLCJvcHRpb25zIiwicXVlcnlTZWxlY3RvciIsImFsaWduIiwicmFmIiwic2Nyb2xsVG8iLCJ4IiwieSIsInN0YXJ0IiwidHdlZW4iLCJsZWZ0IiwibyIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJwYWdlWE9mZnNldCIsInNjcm9sbExlZnQiLCJzZWxmIiwic3VwcG9ydCIsInNlYXJjaFBhcmFtcyIsIml0ZXJhYmxlIiwiU3ltYm9sIiwiYmxvYiIsIkJsb2IiLCJmb3JtRGF0YSIsImFycmF5QnVmZmVyIiwidmlld0NsYXNzZXMiLCJpc0RhdGFWaWV3IiwiRGF0YVZpZXciLCJpc1Byb3RvdHlwZU9mIiwiaXNBcnJheUJ1ZmZlclZpZXciLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsImluZGV4T2YiLCJPYmplY3QiLCJ0b1N0cmluZyIsIm5vcm1hbGl6ZU5hbWUiLCJuYW1lIiwiU3RyaW5nIiwidGVzdCIsIm5vcm1hbGl6ZVZhbHVlIiwiaXRlcmF0b3JGb3IiLCJpdGVtcyIsIml0ZXJhdG9yIiwibmV4dCIsInNoaWZ0IiwidW5kZWZpbmVkIiwiSGVhZGVycyIsImhlYWRlcnMiLCJmb3JFYWNoIiwiYXBwZW5kIiwiaGVhZGVyIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm9sZFZhbHVlIiwiZ2V0IiwiaGFzIiwic2V0IiwiY2FsbGJhY2siLCJ0aGlzQXJnIiwia2V5cyIsInZhbHVlcyIsImVudHJpZXMiLCJjb25zdW1lZCIsImJvZHlVc2VkIiwiUHJvbWlzZSIsInJlamVjdCIsImZpbGVSZWFkZXJSZWFkeSIsInJlYWRlciIsInJlc29sdmUiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiZXJyb3IiLCJyZWFkQmxvYkFzQXJyYXlCdWZmZXIiLCJGaWxlUmVhZGVyIiwicHJvbWlzZSIsInJlYWRBc0FycmF5QnVmZmVyIiwicmVhZEJsb2JBc1RleHQiLCJyZWFkQXNUZXh0IiwicmVhZEFycmF5QnVmZmVyQXNUZXh0IiwiYnVmIiwidmlldyIsIlVpbnQ4QXJyYXkiLCJjaGFycyIsImZyb21DaGFyQ29kZSIsImJ1ZmZlckNsb25lIiwiYnl0ZUxlbmd0aCIsImJ1ZmZlciIsIkJvZHkiLCJfaW5pdEJvZHkiLCJfYm9keUluaXQiLCJfYm9keVRleHQiLCJfYm9keUJsb2IiLCJGb3JtRGF0YSIsIl9ib2R5Rm9ybURhdGEiLCJVUkxTZWFyY2hQYXJhbXMiLCJfYm9keUFycmF5QnVmZmVyIiwiRXJyb3IiLCJyZWplY3RlZCIsInRleHQiLCJkZWNvZGUiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwibWV0aG9kcyIsIm5vcm1hbGl6ZU1ldGhvZCIsIm1ldGhvZCIsInVwY2FzZWQiLCJ0b1VwcGVyQ2FzZSIsIlJlcXVlc3QiLCJ1cmwiLCJjcmVkZW50aWFscyIsIm1vZGUiLCJyZWZlcnJlciIsImZvcm0iLCJzcGxpdCIsImJ5dGVzIiwicmVwbGFjZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlSGVhZGVycyIsInJhd0hlYWRlcnMiLCJsaW5lIiwicGFydHMiLCJSZXNwb25zZSIsImJvZHlJbml0Iiwib2siLCJzdGF0dXNUZXh0IiwicmVkaXJlY3RTdGF0dXNlcyIsInJlZGlyZWN0IiwiUmFuZ2VFcnJvciIsImxvY2F0aW9uIiwiaW5pdCIsInJlcXVlc3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlVVJMIiwicmVzcG9uc2VUZXh0Iiwib250aW1lb3V0Iiwib3BlbiIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInNldFJlcXVlc3RIZWFkZXIiLCJwb2x5ZmlsbCIsInZhbCIsIm5vZGVUeXBlIiwidmFsdWVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNsQyxTQUFPO0FBQ0xDLFVBQU0sY0FERDtBQUVMRDtBQUZLLEdBQVA7QUFJRCxDQUxEOztrQkFPZUQsVzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BmOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1HLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxxQkFBZTtBQURKLEtBQWI7QUFHQSxVQUFLQyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVQyxJQUFWLE9BQVo7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLE9BQWxCO0FBTmlCO0FBT2xCOzs7O2lDQUVZO0FB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O0FBQXdCLGFBQU8sUUFBUDtBQUN4QixTQUFLLG9CQUFMO0FBQTJCLGFBQU8sV0FBUDtBQUMzQixTQUFLLGdCQUFMO0FBQXVCLGFBQU8sT0FBUDtBQUN2QixTQUFLLGdCQUFMO0FBQXVCLGFBQU8sT0FBUDtBQUx6Qjs7QUFRQSxNQUFJQSxRQUFRLElBQVosRUFBa0IsT0FBTyxNQUFQO0FBQ2xCLE1BQUlBLFFBQVFsRyxTQUFaLEVBQXVCLE9BQU8sV0FBUDtBQUN2QixNQUFJa0csUUFBUUEsR0FBWixFQUFpQixPQUFPLEtBQVA7QUFDakIsTUFBSUEsT0FBT0EsSUFBSUMsUUFBSixLQUFpQixDQUE1QixFQUErQixPQUFPLFNBQVA7O0FBRS9CRCxRQUFNQSxJQUFJRSxPQUFKLEdBQ0ZGLElBQUlFLE9BQUosRUFERSxHQUVGaEgsT0FBT2xJLFNBQVAsQ0FBaUJrUCxPQUFqQixDQUF5Qm5OLEtBQXpCLENBQStCaU4sR0FBL0IsQ0FGSjs7QUFJQSxnQkFBY0EsR0FBZCx5Q0FBY0EsR0FBZDtBQUNELENBbkJELEMiLCJmaWxlIjoiMC44MWE0Mzc5ZjJmOTk2NDE3YzMxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VuZE1lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTRU5EX01FU1NBR0UnLFxuICAgIG5ld01lc3NhZ2VcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FjdGlvbnMvc2VuZE1lc3NhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAnd2hhdHdnLWZldGNoJztcbmltcG9ydCBzY3JvbGxUb0VsZW1lbnQgZnJvbSAnc2Nyb2xsLXRvLWVsZW1lbnQnO1xuaW1wb3J0IHNlbmRNZXNzYWdlIGZyb20gJy4uLy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2UnO1xuXG5jbGFzcyBNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZXNzYWdlX2Vycm9yOiAnJ1xuICAgIH07XG4gICAgdGhpcy5zZW5kID0gdGhpcy5zZW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zY3JvbGxQYW5lID0gdGhpcy5zY3JvbGxQYW5lLmJpbmQodGhpcyk7XG4gIH1cblxuICBzY3JvbGxQYW5lKCkge1xuICAgIHNjcm9sbFRvRWxlbWVudCgnLnNlY29uZCcsIHtcbiAgICAgIG9mZnNldDogLTYwLFxuICAgICAgZWFzZTogJ2luLWV4cG8nLFxuICAgICAgZHVyYXRpb246IDkwMFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zY3JvbGxQYW5lKCk7XG4gIH1cblxuICBzZW5kKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHsgY29udGVudCwgZnJvbSwgcHJpb3JpdHkgfSA9IHRoaXM7XG4gICAgY29udGVudCA9IGNvbnRlbnQudmFsdWUudHJpbSgpO1xuICAgIGZyb20gPSAnQG1pY2hhZWwnO1xuICAgIHByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgcmVhZEJ5ID0gW107XG4gICAgaWYgKGNvbnRlbnQgPT09ICcnIHx8IGZyb20gPT09ICcnIHx8IHByaW9yaXR5ID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VfZXJyb3I6ICdFcnJvcjogTWVzc2FnZSBoYXMgbm8gcHJpb3JpdHksIHNlbmRlciBvciBjb250ZW50JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3TWVzc2FnZSA9IHsgaWQsIGNvbnRlbnQsIGZyb20sIHByaW9yaXR5LCByZWFkQnkgfTtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VycycpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgJz09PT09PT09PT09PT09Pj4+PicpO1xuICAgICAgaWYgKHJlc3BvbnNlLmJvZHkuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zZW5kKG5ld01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jb250ZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5zY3JvbGxQYW5lKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG4gPSAwO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudCBhbGlnbi10b3AgcGwtMCBjb2wtbWQtNyBjb2wtbGctOVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLm1lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgbiArPSAxO1xuICAgICAgICAgICAgbGV0IHNlY29uZENsYXNzID0gJyc7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGggLSAxID09PSBuKSB7XG4gICAgICAgICAgICAgIHNlY29uZENsYXNzID0gJyBzZWNvbmQnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2Vjb25kQ2xhc3MgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWVzc2FnZS1jb250YWluZXIke3NlY29uZENsYXNzfWB9IGtleT17bWVzc2FnZS5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZXNzZW5nZXJcIj57bWVzc2FnZS5mcm9tfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbWVzc2FnZS10eXBlICR7bWVzc2FnZS5wcmlvcml0eX1gfT57bWVzc2FnZS5wcmlvcml0eX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e21lc3NhZ2UuY29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnJlYWRCeS5sZW5ndGggPT09IDAgPyAnJyA6XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtcmVhZC1saXN0XCI+UmVhZCBieTogPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS5yZWFkQnkuam9pbignLCAnKX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwbC0wIHByLTAgcGItMlwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibWVzc2FnZS1ib3hcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5jb250ZW50ID0gaW5wdXQ7IH19PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHBsLTAgcHItMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktbGV2ZWxcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiYnJvd3Nlci1kZWZhdWx0XCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wcmlvcml0eSA9IGlucHV0OyB9fT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb3JtYWxcIj5Ob3JtYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVcmdlbnRcIj5VcmdlbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDcml0aWNhbFwiPkNyaXRpY2FsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNlbmR9PlNlbmQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VuZDogbmV3TWVzc2FnZSA9PiBkaXNwYXRjaChzZW5kTWVzc2FnZShuZXdNZXNzYWdlKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShNZXNzYWdlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL21lc3NhZ2VzLmpzIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB0eXBlO1xudHJ5IHtcbiAgdHlwZSA9IHJlcXVpcmUoJ2NvbXBvbmVudC10eXBlJyk7XG59IGNhdGNoIChfKSB7XG4gIHR5cGUgPSByZXF1aXJlKCd0eXBlJyk7XG59XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcblxuLyoqXG4gKiBDbG9uZXMgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBhbnkgb2JqZWN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNsb25lKG9iail7XG4gIHN3aXRjaCAodHlwZShvYmopKSB7XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHZhciBjb3B5ID0ge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGNvcHlba2V5XSA9IGNsb25lKG9ialtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvcHk7XG5cbiAgICBjYXNlICdhcnJheSc6XG4gICAgICB2YXIgY29weSA9IG5ldyBBcnJheShvYmoubGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb3B5W2ldID0gY2xvbmUob2JqW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3B5O1xuXG4gICAgY2FzZSAncmVnZXhwJzpcbiAgICAgIC8vIGZyb20gbWlsbGVybWVkZWlyb3MvYW1kLXV0aWxzIC0gTUlUXG4gICAgICB2YXIgZmxhZ3MgPSAnJztcbiAgICAgIGZsYWdzICs9IG9iai5tdWx0aWxpbmUgPyAnbScgOiAnJztcbiAgICAgIGZsYWdzICs9IG9iai5nbG9iYWwgPyAnZycgOiAnJztcbiAgICAgIGZsYWdzICs9IG9iai5pZ25vcmVDYXNlID8gJ2knIDogJyc7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChvYmouc291cmNlLCBmbGFncyk7XG5cbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiBuZXcgRGF0ZShvYmouZ2V0VGltZSgpKTtcblxuICAgIGRlZmF1bHQ6IC8vIHN0cmluZywgbnVtYmVyLCBib29sZWFuLCDigKZcbiAgICAgIHJldHVybiBvYmo7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LWNsb25lL2luZGV4LmpzIiwiLyoqXG4gKiBFeHBvc2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZSgpYC5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCBmYWxsYmFjaztcblxuLyoqXG4gKiBGYWxsYmFjayBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuXG52YXIgcHJldiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuZnVuY3Rpb24gZmFsbGJhY2soZm4pIHtcbiAgdmFyIGN1cnIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgdmFyIG1zID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyciAtIHByZXYpKTtcbiAgdmFyIHJlcSA9IHNldFRpbWVvdXQoZm4sIG1zKTtcbiAgcHJldiA9IGN1cnI7XG4gIHJldHVybiByZXE7XG59XG5cbi8qKlxuICogQ2FuY2VsLlxuICovXG5cbnZhciBjYW5jZWwgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cuY2xlYXJUaW1lb3V0O1xuXG5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKGlkKXtcbiAgY2FuY2VsLmNhbGwod2luZG93LCBpZCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtcmFmL2luZGV4LmpzIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgY2xvbmUgPSByZXF1aXJlKCdjbG9uZScpO1xudmFyIHR5cGUgPSByZXF1aXJlKCd0eXBlJyk7XG52YXIgZWFzZSA9IHJlcXVpcmUoJ2Vhc2UnKTtcblxuLyoqXG4gKiBFeHBvc2UgYFR3ZWVuYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFR3ZWVuYCB3aXRoIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gVHdlZW4ob2JqKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUd2VlbikpIHJldHVybiBuZXcgVHdlZW4ob2JqKTtcbiAgdGhpcy5fZnJvbSA9IG9iajtcbiAgdGhpcy5lYXNlKCdsaW5lYXInKTtcbiAgdGhpcy5kdXJhdGlvbig1MDApO1xufVxuXG4vKipcbiAqIE1peGluIGVtaXR0ZXIuXG4gKi9cblxuRW1pdHRlcihUd2Vlbi5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFJlc2V0IHRoZSB0d2Vlbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuaXNBcnJheSA9ICdhcnJheScgPT09IHR5cGUodGhpcy5fZnJvbSk7XG4gIHRoaXMuX2N1cnIgPSBjbG9uZSh0aGlzLl9mcm9tKTtcbiAgdGhpcy5fZG9uZSA9IGZhbHNlO1xuICB0aGlzLl9zdGFydCA9IERhdGUubm93KCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUd2VlbiB0byBgb2JqYCBhbmQgcmVzZXQgaW50ZXJuYWwgc3RhdGUuXG4gKlxuICogICAgdHdlZW4udG8oeyB4OiA1MCwgeTogMTAwIH0pXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9ialxuICogQHJldHVybiB7VHdlZW59IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ob2JqKXtcbiAgdGhpcy5yZXNldCgpO1xuICB0aGlzLl90byA9IG9iajtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBkdXJhdGlvbiB0byBgbXNgIFs1MDBdLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7VHdlZW59IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24obXMpe1xuICB0aGlzLl9kdXJhdGlvbiA9IG1zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGVhc2luZyBmdW5jdGlvbiB0byBgZm5gLlxuICpcbiAqICAgIHR3ZWVuLmVhc2UoJ2luLW91dC1zaW5lJylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1R3ZWVufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUuZWFzZSA9IGZ1bmN0aW9uKGZuKXtcbiAgZm4gPSAnZnVuY3Rpb24nID09IHR5cGVvZiBmbiA/IGZuIDogZWFzZVtmbl07XG4gIGlmICghZm4pIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgZWFzaW5nIGZ1bmN0aW9uJyk7XG4gIHRoaXMuX2Vhc2UgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN0b3AgdGhlIHR3ZWVuIGFuZCBpbW1lZGlhdGVseSBlbWl0IFwic3RvcFwiIGFuZCBcImVuZFwiLlxuICpcbiAqIEByZXR1cm4ge1R3ZWVufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuc3RvcHBlZCA9IHRydWU7XG4gIHRoaXMuX2RvbmUgPSB0cnVlO1xuICB0aGlzLmVtaXQoJ3N0b3AnKTtcbiAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFBlcmZvcm0gYSBzdGVwLlxuICpcbiAqIEByZXR1cm4ge1R3ZWVufSBzZWxmXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKCl7XG4gIGlmICh0aGlzLl9kb25lKSByZXR1cm47XG5cbiAgLy8gZHVyYXRpb25cbiAgdmFyIGR1cmF0aW9uID0gdGhpcy5fZHVyYXRpb247XG4gIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICB2YXIgZGVsdGEgPSBub3cgLSB0aGlzLl9zdGFydDtcbiAgdmFyIGRvbmUgPSBkZWx0YSA+PSBkdXJhdGlvbjtcblxuICAvLyBjb21wbGV0ZVxuICBpZiAoZG9uZSkge1xuICAgIHRoaXMuX2Zyb20gPSB0aGlzLl90bztcbiAgICB0aGlzLl91cGRhdGUodGhpcy5fdG8pO1xuICAgIHRoaXMuX2RvbmUgPSB0cnVlO1xuICAgIHRoaXMuZW1pdCgnZW5kJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyB0d2VlblxuICB2YXIgZnJvbSA9IHRoaXMuX2Zyb207XG4gIHZhciB0byA9IHRoaXMuX3RvO1xuICB2YXIgY3VyciA9IHRoaXMuX2N1cnI7XG4gIHZhciBmbiA9IHRoaXMuX2Vhc2U7XG4gIHZhciBwID0gKG5vdyAtIHRoaXMuX3N0YXJ0KSAvIGR1cmF0aW9uO1xuICB2YXIgbiA9IGZuKHApO1xuXG4gIC8vIGFycmF5XG4gIGlmICh0aGlzLmlzQXJyYXkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyb20ubGVuZ3RoOyArK2kpIHtcbiAgICAgIGN1cnJbaV0gPSBmcm9tW2ldICsgKHRvW2ldIC0gZnJvbVtpXSkgKiBuO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZShjdXJyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIG9iamVjaFxuICBmb3IgKHZhciBrIGluIGZyb20pIHtcbiAgICBjdXJyW2tdID0gZnJvbVtrXSArICh0b1trXSAtIGZyb21ba10pICogbjtcbiAgfVxuXG4gIHRoaXMuX3VwZGF0ZShjdXJyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB1cGRhdGUgZnVuY3Rpb24gdG8gYGZuYCBvclxuICogd2hlbiBubyBhcmd1bWVudCBpcyBnaXZlbiB0aGlzIHBlcmZvcm1zXG4gKiBhIFwic3RlcFwiLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtUd2Vlbn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZm4pe1xuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5zdGVwKCk7XG4gIHRoaXMuX3VwZGF0ZSA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtdHdlZW4vaW5kZXguanMiLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICBmdW5jdGlvbiBvbigpIHtcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC10d2Vlbi9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwiXG4vLyBlYXNpbmcgZnVuY3Rpb25zIGZyb20gXCJUd2Vlbi5qc1wiXG5cbmV4cG9ydHMubGluZWFyID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuO1xufTtcblxuZXhwb3J0cy5pblF1YWQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiBuO1xufTtcblxuZXhwb3J0cy5vdXRRdWFkID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogKDIgLSBuKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRRdWFkID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMjtcbiAgaWYgKG4gPCAxKSByZXR1cm4gMC41ICogbiAqIG47XG4gIHJldHVybiAtIDAuNSAqICgtLW4gKiAobiAtIDIpIC0gMSk7XG59O1xuXG5leHBvcnRzLmluQ3ViZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqIG4gKiBuO1xufTtcblxuZXhwb3J0cy5vdXRDdWJlID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAtLW4gKiBuICogbiArIDE7XG59O1xuXG5leHBvcnRzLmluT3V0Q3ViZSA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDI7XG4gIGlmIChuIDwgMSkgcmV0dXJuIDAuNSAqIG4gKiBuICogbjtcbiAgcmV0dXJuIDAuNSAqICgobiAtPSAyICkgKiBuICogbiArIDIpO1xufTtcblxuZXhwb3J0cy5pblF1YXJ0ID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogbiAqIG4gKiBuO1xufTtcblxuZXhwb3J0cy5vdXRRdWFydCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSAtICgtLW4gKiBuICogbiAqIG4pO1xufTtcblxuZXhwb3J0cy5pbk91dFF1YXJ0ID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMjtcbiAgaWYgKG4gPCAxKSByZXR1cm4gMC41ICogbiAqIG4gKiBuICogbjtcbiAgcmV0dXJuIC0wLjUgKiAoKG4gLT0gMikgKiBuICogbiAqIG4gLSAyKTtcbn07XG5cbmV4cG9ydHMuaW5RdWludCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqIG4gKiBuICogbiAqIG47XG59XG5cbmV4cG9ydHMub3V0UXVpbnQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIC0tbiAqIG4gKiBuICogbiAqIG4gKyAxO1xufVxuXG5leHBvcnRzLmluT3V0UXVpbnQgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyO1xuICBpZiAobiA8IDEpIHJldHVybiAwLjUgKiBuICogbiAqIG4gKiBuICogbjtcbiAgcmV0dXJuIDAuNSAqICgobiAtPSAyKSAqIG4gKiBuICogbiAqIG4gKyAyKTtcbn07XG5cbmV4cG9ydHMuaW5TaW5lID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxIC0gTWF0aC5jb3MobiAqIE1hdGguUEkgLyAyICk7XG59O1xuXG5leHBvcnRzLm91dFNpbmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIE1hdGguc2luKG4gKiBNYXRoLlBJIC8gMik7XG59O1xuXG5leHBvcnRzLmluT3V0U2luZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBuKSk7XG59O1xuXG5leHBvcnRzLmluRXhwbyA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMCA9PSBuID8gMCA6IE1hdGgucG93KDEwMjQsIG4gLSAxKTtcbn07XG5cbmV4cG9ydHMub3V0RXhwbyA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSA9PSBuID8gbiA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiBuKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRFeHBvID0gZnVuY3Rpb24obil7XG4gIGlmICgwID09IG4pIHJldHVybiAwO1xuICBpZiAoMSA9PSBuKSByZXR1cm4gMTtcbiAgaWYgKChuICo9IDIpIDwgMSkgcmV0dXJuIC41ICogTWF0aC5wb3coMTAyNCwgbiAtIDEpO1xuICByZXR1cm4gLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIChuIC0gMSkpICsgMik7XG59O1xuXG5leHBvcnRzLmluQ2lyYyA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gbiAqIG4pO1xufTtcblxuZXhwb3J0cy5vdXRDaXJjID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtICgtLW4gKiBuKSk7XG59O1xuXG5leHBvcnRzLmluT3V0Q2lyYyA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDJcbiAgaWYgKG4gPCAxKSByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIG4gKiBuKSAtIDEpO1xuICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKG4gLT0gMikgKiBuKSArIDEpO1xufTtcblxuZXhwb3J0cy5pbkJhY2sgPSBmdW5jdGlvbihuKXtcbiAgdmFyIHMgPSAxLjcwMTU4O1xuICByZXR1cm4gbiAqIG4gKiAoKCBzICsgMSApICogbiAtIHMpO1xufTtcblxuZXhwb3J0cy5vdXRCYWNrID0gZnVuY3Rpb24obil7XG4gIHZhciBzID0gMS43MDE1ODtcbiAgcmV0dXJuIC0tbiAqIG4gKiAoKHMgKyAxKSAqIG4gKyBzKSArIDE7XG59O1xuXG5leHBvcnRzLmluT3V0QmFjayA9IGZ1bmN0aW9uKG4pe1xuICB2YXIgcyA9IDEuNzAxNTggKiAxLjUyNTtcbiAgaWYgKCAoIG4gKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiAoIG4gKiBuICogKCAoIHMgKyAxICkgKiBuIC0gcyApICk7XG4gIHJldHVybiAwLjUgKiAoICggbiAtPSAyICkgKiBuICogKCAoIHMgKyAxICkgKiBuICsgcyApICsgMiApO1xufTtcblxuZXhwb3J0cy5pbkJvdW5jZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSAtIGV4cG9ydHMub3V0Qm91bmNlKDEgLSBuKTtcbn07XG5cbmV4cG9ydHMub3V0Qm91bmNlID0gZnVuY3Rpb24obil7XG4gIGlmICggbiA8ICggMSAvIDIuNzUgKSApIHtcbiAgICByZXR1cm4gNy41NjI1ICogbiAqIG47XG4gIH0gZWxzZSBpZiAoIG4gPCAoIDIgLyAyLjc1ICkgKSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqICggbiAtPSAoIDEuNSAvIDIuNzUgKSApICogbiArIDAuNzU7XG4gIH0gZWxzZSBpZiAoIG4gPCAoIDIuNSAvIDIuNzUgKSApIHtcbiAgICByZXR1cm4gNy41NjI1ICogKCBuIC09ICggMi4yNSAvIDIuNzUgKSApICogbiArIDAuOTM3NTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gNy41NjI1ICogKCBuIC09ICggMi42MjUgLyAyLjc1ICkgKSAqIG4gKyAwLjk4NDM3NTtcbiAgfVxufTtcblxuZXhwb3J0cy5pbk91dEJvdW5jZSA9IGZ1bmN0aW9uKG4pe1xuICBpZiAobiA8IC41KSByZXR1cm4gZXhwb3J0cy5pbkJvdW5jZShuICogMikgKiAuNTtcbiAgcmV0dXJuIGV4cG9ydHMub3V0Qm91bmNlKG4gKiAyIC0gMSkgKiAuNSArIC41O1xufTtcblxuLy8gYWxpYXNlc1xuXG5leHBvcnRzWydpbi1xdWFkJ10gPSBleHBvcnRzLmluUXVhZDtcbmV4cG9ydHNbJ291dC1xdWFkJ10gPSBleHBvcnRzLm91dFF1YWQ7XG5leHBvcnRzWydpbi1vdXQtcXVhZCddID0gZXhwb3J0cy5pbk91dFF1YWQ7XG5leHBvcnRzWydpbi1jdWJlJ10gPSBleHBvcnRzLmluQ3ViZTtcbmV4cG9ydHNbJ291dC1jdWJlJ10gPSBleHBvcnRzLm91dEN1YmU7XG5leHBvcnRzWydpbi1vdXQtY3ViZSddID0gZXhwb3J0cy5pbk91dEN1YmU7XG5leHBvcnRzWydpbi1xdWFydCddID0gZXhwb3J0cy5pblF1YXJ0O1xuZXhwb3J0c1snb3V0LXF1YXJ0J10gPSBleHBvcnRzLm91dFF1YXJ0O1xuZXhwb3J0c1snaW4tb3V0LXF1YXJ0J10gPSBleHBvcnRzLmluT3V0UXVhcnQ7XG5leHBvcnRzWydpbi1xdWludCddID0gZXhwb3J0cy5pblF1aW50O1xuZXhwb3J0c1snb3V0LXF1aW50J10gPSBleHBvcnRzLm91dFF1aW50O1xuZXhwb3J0c1snaW4tb3V0LXF1aW50J10gPSBleHBvcnRzLmluT3V0UXVpbnQ7XG5leHBvcnRzWydpbi1zaW5lJ10gPSBleHBvcnRzLmluU2luZTtcbmV4cG9ydHNbJ291dC1zaW5lJ10gPSBleHBvcnRzLm91dFNpbmU7XG5leHBvcnRzWydpbi1vdXQtc2luZSddID0gZXhwb3J0cy5pbk91dFNpbmU7XG5leHBvcnRzWydpbi1leHBvJ10gPSBleHBvcnRzLmluRXhwbztcbmV4cG9ydHNbJ291dC1leHBvJ10gPSBleHBvcnRzLm91dEV4cG87XG5leHBvcnRzWydpbi1vdXQtZXhwbyddID0gZXhwb3J0cy5pbk91dEV4cG87XG5leHBvcnRzWydpbi1jaXJjJ10gPSBleHBvcnRzLmluQ2lyYztcbmV4cG9ydHNbJ291dC1jaXJjJ10gPSBleHBvcnRzLm91dENpcmM7XG5leHBvcnRzWydpbi1vdXQtY2lyYyddID0gZXhwb3J0cy5pbk91dENpcmM7XG5leHBvcnRzWydpbi1iYWNrJ10gPSBleHBvcnRzLmluQmFjaztcbmV4cG9ydHNbJ291dC1iYWNrJ10gPSBleHBvcnRzLm91dEJhY2s7XG5leHBvcnRzWydpbi1vdXQtYmFjayddID0gZXhwb3J0cy5pbk91dEJhY2s7XG5leHBvcnRzWydpbi1ib3VuY2UnXSA9IGV4cG9ydHMuaW5Cb3VuY2U7XG5leHBvcnRzWydvdXQtYm91bmNlJ10gPSBleHBvcnRzLm91dEJvdW5jZTtcbmV4cG9ydHNbJ2luLW91dC1ib3VuY2UnXSA9IGV4cG9ydHMuaW5PdXRCb3VuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2Vhc2UtY29tcG9uZW50L2luZGV4LmpzIiwidmFyIHNjcm9sbCA9IHJlcXVpcmUoJ3Njcm9sbC10bycpO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVTY3JvbGxPZmZzZXQoZWxlbSwgYWRkaXRpb25hbE9mZnNldCwgYWxpZ25tZW50KSB7XG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgdmFyIGVsZW1SZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIGNsaWVudEhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgZG9jdW1lbnRIZWlnaHQgPSBNYXRoLm1heCggYm9keS5zY3JvbGxIZWlnaHQsIGJvZHkub2Zmc2V0SGVpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5vZmZzZXRIZWlnaHQgKTtcblxuICBhZGRpdGlvbmFsT2Zmc2V0ID0gYWRkaXRpb25hbE9mZnNldCB8fCAwO1xuXG4gIHZhciBzY3JvbGxQb3NpdGlvbjtcbiAgaWYgKGFsaWdubWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IGVsZW1SZWN0LmJvdHRvbSAtIGNsaWVudEhlaWdodDtcbiAgfSBlbHNlIGlmIChhbGlnbm1lbnQgPT09ICdtaWRkbGUnKSB7XG4gICAgc2Nyb2xsUG9zaXRpb24gPSBlbGVtUmVjdC5ib3R0b20gLSBjbGllbnRIZWlnaHQgLyAyIC0gZWxlbVJlY3QuaGVpZ2h0IC8gMjtcbiAgfSBlbHNlIHsgLy8gdG9wIGFuZCBkZWZhdWx0XG4gICAgc2Nyb2xsUG9zaXRpb24gPSBlbGVtUmVjdC50b3A7XG4gIH1cblxuICB2YXIgbWF4U2Nyb2xsUG9zaXRpb24gPSBkb2N1bWVudEhlaWdodCAtIGNsaWVudEhlaWdodDtcbiAgcmV0dXJuIE1hdGgubWluKHNjcm9sbFBvc2l0aW9uICsgYWRkaXRpb25hbE9mZnNldCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgICAgICAgIG1heFNjcm9sbFBvc2l0aW9uKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gIGlmIChlbGVtKSByZXR1cm4gc2Nyb2xsKDAsIGNhbGN1bGF0ZVNjcm9sbE9mZnNldChlbGVtLCBvcHRpb25zLm9mZnNldCwgb3B0aW9ucy5hbGlnbiksIG9wdGlvbnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2Nyb2xsLXRvLWVsZW1lbnQvaW5kZXguanMiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIFR3ZWVuID0gcmVxdWlyZSgndHdlZW4nKTtcbnZhciByYWYgPSByZXF1aXJlKCdyYWYnKTtcblxuLyoqXG4gKiBFeHBvc2UgYHNjcm9sbFRvYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbFRvO1xuXG4vKipcbiAqIFNjcm9sbCB0byBgKHgsIHkpYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geFxuICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc2Nyb2xsVG8oeCwgeSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBzdGFydCBwb3NpdGlvblxuICB2YXIgc3RhcnQgPSBzY3JvbGwoKTtcblxuICAvLyBzZXR1cCB0d2VlblxuICB2YXIgdHdlZW4gPSBUd2VlbihzdGFydClcbiAgICAuZWFzZShvcHRpb25zLmVhc2UgfHwgJ291dC1jaXJjJylcbiAgICAudG8oeyB0b3A6IHksIGxlZnQ6IHggfSlcbiAgICAuZHVyYXRpb24ob3B0aW9ucy5kdXJhdGlvbiB8fCAxMDAwKTtcblxuICAvLyBzY3JvbGxcbiAgdHdlZW4udXBkYXRlKGZ1bmN0aW9uKG8pe1xuICAgIHdpbmRvdy5zY3JvbGxUbyhvLmxlZnQgfCAwLCBvLnRvcCB8IDApO1xuICB9KTtcblxuICAvLyBoYW5kbGUgZW5kXG4gIHR3ZWVuLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIGFuaW1hdGUgPSBmdW5jdGlvbigpe307XG4gIH0pO1xuXG4gIC8vIGFuaW1hdGVcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICByYWYoYW5pbWF0ZSk7XG4gICAgdHdlZW4udXBkYXRlKCk7XG4gIH1cblxuICBhbmltYXRlKCk7XG4gIFxuICByZXR1cm4gdHdlZW47XG59XG5cbi8qKlxuICogUmV0dXJuIHNjcm9sbCBwb3NpdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzY3JvbGwoKSB7XG4gIHZhciB5ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIHZhciB4ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICByZXR1cm4geyB0b3A6IHksIGxlZnQ6IHggfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2Nyb2xsLXRvL2luZGV4LmpzIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwiLyoqXG4gKiB0b1N0cmluZyByZWYuXG4gKi9cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIHR5cGUgb2YgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsKXtcbiAgc3dpdGNoICh0b1N0cmluZy5jYWxsKHZhbCkpIHtcbiAgICBjYXNlICdbb2JqZWN0IERhdGVdJzogcmV0dXJuICdkYXRlJztcbiAgICBjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOiByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgY2FzZSAnW29iamVjdCBBcmd1bWVudHNdJzogcmV0dXJuICdhcmd1bWVudHMnO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJyYXldJzogcmV0dXJuICdhcnJheSc7XG4gICAgY2FzZSAnW29iamVjdCBFcnJvcl0nOiByZXR1cm4gJ2Vycm9yJztcbiAgfVxuXG4gIGlmICh2YWwgPT09IG51bGwpIHJldHVybiAnbnVsbCc7XG4gIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICBpZiAodmFsICE9PSB2YWwpIHJldHVybiAnbmFuJztcbiAgaWYgKHZhbCAmJiB2YWwubm9kZVR5cGUgPT09IDEpIHJldHVybiAnZWxlbWVudCc7XG5cbiAgdmFsID0gdmFsLnZhbHVlT2ZcbiAgICA/IHZhbC52YWx1ZU9mKClcbiAgICA6IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZi5hcHBseSh2YWwpXG5cbiAgcmV0dXJuIHR5cGVvZiB2YWw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtdHlwZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=