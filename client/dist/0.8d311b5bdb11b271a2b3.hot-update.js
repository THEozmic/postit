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

var _scrollToElement = __webpack_require__(298);

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

var _sendMessage = __webpack_require__(126);

var _sendMessage2 = _interopRequireDefault(_sendMessage);

var _helpers = __webpack_require__(321);

var _helpers2 = _interopRequireDefault(_helpers);

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
      var newMessage = 'content=' + content + '&from=' + this.s + ', priority';

      this.content.value = '';
      this.scrollPane();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
            if (_this2.props.messages.length - 1 === n) {
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
                _this2.content = input;
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
                    _this2.priority = input;
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

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.userData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    send: function send(newMessage) {
      return dispatch((0, _sendMessage2.default)(newMessage));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Messages);

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

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9zZW5kTWVzc2FnZS5qcz84OTZhIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanM/MWI4YyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1jbG9uZS9pbmRleC5qcz8wZWM1Iiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXJhZi9pbmRleC5qcz9hZmRhIiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXR3ZWVuL2luZGV4LmpzPzU3ZjIiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtdHdlZW4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcz85ZjM2Iiwid2VicGFjazovLy8uL34vZWFzZS1jb21wb25lbnQvaW5kZXguanM/OTNmNCIsIndlYnBhY2s6Ly8vLi9+L3Njcm9sbC10by1lbGVtZW50L2luZGV4LmpzP2IwOWUiLCJ3ZWJwYWNrOi8vLy4vfi9zY3JvbGwtdG8vaW5kZXguanM/NDMwNCIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC10eXBlL2luZGV4LmpzPzZmNTYiXSwibmFtZXMiOlsic2VuZE1lc3NhZ2UiLCJuZXdNZXNzYWdlIiwidHlwZSIsIk1lc3NhZ2VzIiwicHJvcHMiLCJzdGF0ZSIsIm1lc3NhZ2VfZXJyb3IiLCJzZW5kIiwiYmluZCIsInNjcm9sbFBhbmUiLCJvZmZzZXQiLCJlYXNlIiwiZHVyYXRpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwiZnJvbSIsInByaW9yaXR5IiwidmFsdWUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJyZWFkQnkiLCJzZXRTdGF0ZSIsInMiLCJuIiwibWVzc2FnZXMiLCJtYXAiLCJtZXNzYWdlIiwic2Vjb25kQ2xhc3MiLCJsZW5ndGgiLCJpZCIsImpvaW4iLCJpbnB1dCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXIiLCJ1c2VyRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicmVxdWlyZSIsIl8iLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xvbmUiLCJvYmoiLCJjb3B5Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJBcnJheSIsImkiLCJsIiwiZmxhZ3MiLCJtdWx0aWxpbmUiLCJnbG9iYWwiLCJpZ25vcmVDYXNlIiwiUmVnRXhwIiwic291cmNlIiwiRGF0ZSIsImdldFRpbWUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmYWxsYmFjayIsInByZXYiLCJmbiIsImN1cnIiLCJtcyIsIk1hdGgiLCJtYXgiLCJyZXEiLCJzZXRUaW1lb3V0IiwiY2FuY2VsIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiY2FsbCIsIkVtaXR0ZXIiLCJUd2VlbiIsIl9mcm9tIiwicHJvdG90eXBlIiwicmVzZXQiLCJpc0FycmF5IiwiX2N1cnIiLCJfZG9uZSIsIl9zdGFydCIsIm5vdyIsInRvIiwiX3RvIiwiX2R1cmF0aW9uIiwiVHlwZUVycm9yIiwiX2Vhc2UiLCJzdG9wIiwic3RvcHBlZCIsImVtaXQiLCJzdGVwIiwiZGVsdGEiLCJkb25lIiwiX3VwZGF0ZSIsInAiLCJrIiwidXBkYXRlIiwiYXJndW1lbnRzIiwibWl4aW4iLCJvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIl9jYWxsYmFja3MiLCJwdXNoIiwib25jZSIsIm9mZiIsImFwcGx5IiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwiY2IiLCJzcGxpY2UiLCJhcmdzIiwic2xpY2UiLCJsZW4iLCJsaXN0ZW5lcnMiLCJoYXNMaXN0ZW5lcnMiLCJsaW5lYXIiLCJpblF1YWQiLCJvdXRRdWFkIiwiaW5PdXRRdWFkIiwiaW5DdWJlIiwib3V0Q3ViZSIsImluT3V0Q3ViZSIsImluUXVhcnQiLCJvdXRRdWFydCIsImluT3V0UXVhcnQiLCJpblF1aW50Iiwib3V0UXVpbnQiLCJpbk91dFF1aW50IiwiaW5TaW5lIiwiY29zIiwiUEkiLCJvdXRTaW5lIiwic2luIiwiaW5PdXRTaW5lIiwiaW5FeHBvIiwicG93Iiwib3V0RXhwbyIsImluT3V0RXhwbyIsImluQ2lyYyIsInNxcnQiLCJvdXRDaXJjIiwiaW5PdXRDaXJjIiwiaW5CYWNrIiwib3V0QmFjayIsImluT3V0QmFjayIsImluQm91bmNlIiwib3V0Qm91bmNlIiwiaW5PdXRCb3VuY2UiLCJzY3JvbGwiLCJjYWxjdWxhdGVTY3JvbGxPZmZzZXQiLCJlbGVtIiwiYWRkaXRpb25hbE9mZnNldCIsImFsaWdubWVudCIsImJvZHkiLCJkb2N1bWVudCIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJlbGVtUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudEhlaWdodCIsImRvY3VtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsUG9zaXRpb24iLCJib3R0b20iLCJoZWlnaHQiLCJ0b3AiLCJtYXhTY3JvbGxQb3NpdGlvbiIsIm1pbiIsInBhZ2VZT2Zmc2V0Iiwib3B0aW9ucyIsInF1ZXJ5U2VsZWN0b3IiLCJhbGlnbiIsInJhZiIsInNjcm9sbFRvIiwieCIsInkiLCJzdGFydCIsInR3ZWVuIiwibGVmdCIsIm8iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwicGFnZVhPZmZzZXQiLCJzY3JvbGxMZWZ0IiwidG9TdHJpbmciLCJPYmplY3QiLCJ2YWwiLCJ1bmRlZmluZWQiLCJub2RlVHlwZSIsInZhbHVlT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLFVBQUQsRUFBZ0I7QUFDbEMsU0FBTztBQUNMQyxVQUFNLGNB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QUNBLFNBQU8sRUFBRWxCLEtBQUtVLENBQVAsRUFBVUcsTUFBTUosQ0FBaEIsRUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVEOzs7O0FBSUEsSUFBSVUsV0FBV0MsT0FBT2xILFNBQVAsQ0FBaUJpSCxRQUFoQzs7QUFFQTs7Ozs7Ozs7QUFRQXpKLE9BQU9DLE9BQVAsR0FBaUIsVUFBUzBKLEdBQVQsRUFBYTtBQUM1QixVQUFRRixTQUFTckgsSUFBVCxDQUFjdUgsR0FBZCxDQUFSO0FBQ0UsU0FBSyxlQUFMO0FBQXNCLGFBQU8sTUFBUDtBQUN0QixTQUFLLGlCQUFMO0FBQXdCLGFBQU8sUUFBUDtBQUN4QixTQUFLLG9CQUFMO0FBQTJCLGFBQU8sV0FBUDtBQUMzQixTQUFLLGdCQUFMO0FBQXVCLGFBQU8sT0FBUDtBQUN2QixTQUFLLGdCQUFMO0FBQXVCLGFBQU8sT0FBUDtBQUx6Qjs7QUFRQSxNQUFJQSxRQUFRLElBQVosRUFBa0IsT0FBTyxNQUFQO0FBQ2xCLE1BQUlBLFFBQVFDLFNBQVosRUFBdUIsT0FBTyxXQUFQO0FBQ3ZCLE1BQUlELFFBQVFBLEdBQVosRUFBaUIsT0FBTyxLQUFQO0FBQ2pCLE1BQUlBLE9BQU9BLElBQUlFLFFBQUosS0FBaUIsQ0FBNUIsRUFBK0IsT0FBTyxTQUFQOztBQUUvQkYsUUFBTUEsSUFBSUcsT0FBSixHQUNGSCxJQUFJRyxPQUFKLEVBREUsR0FFRkosT0FBT2xILFNBQVAsQ0FBaUJzSCxPQUFqQixDQUF5QnZGLEtBQXpCLENBQStCb0YsR0FBL0IsQ0FGSjs7QUFJQSxnQkFBY0EsR0FBZCx5Q0FBY0EsR0FBZDtBQUNELENBbkJELEMiLCJmaWxlIjoiMC44ZDMxMWI1YmRiMTFiMjcxYTJiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VuZE1lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTRU5EX01FU1NBR0UnLFxuICAgIG5ld01lc3NhZ2VcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FjdGlvbnMvc2VuZE1lc3NhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzY3JvbGxUb0VsZW1lbnQgZnJvbSAnc2Nyb2xsLXRvLWVsZW1lbnQnO1xuaW1wb3J0IHNlbmRNZXNzYWdlIGZyb20gJy4uLy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2UnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzJztcblxuY2xhc3MgTWVzc2FnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZV9lcnJvcjogJydcbiAgICB9O1xuICAgIHRoaXMuc2VuZCA9IHRoaXMuc2VuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2Nyb2xsUGFuZSA9IHRoaXMuc2Nyb2xsUGFuZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2Nyb2xsUGFuZSgpIHtcbiAgICBzY3JvbGxUb0VsZW1lbnQoJy5zZWNvbmQnLCB7XG4gICAgICBvZmZzZXQ6IC02MCxcbiAgICAgIGVhc2U6ICdpbi1leHBvJyxcbiAgICAgIGR1cmF0aW9uOiA5MDBcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2Nyb2xsUGFuZSgpO1xuICB9XG5cbiAgc2VuZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB7IGNvbnRlbnQsIGZyb20sIHByaW9yaXR5IH0gPSB0aGlzO1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnZhbHVlLnRyaW0oKTtcbiAgICBmcm9tID0gJ0BtaWNoYWVsJztcbiAgICBwcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHJlYWRCeSA9IFtdO1xuICAgIGlmIChjb250ZW50ID09PSAnJyB8fCBmcm9tID09PSAnJyB8fCBwcmlvcml0eSA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlX2Vycm9yOiAnRXJyb3I6IE1lc3NhZ2UgaGFzIG5vIHByaW9yaXR5LCBzZW5kZXIgb3IgY29udGVudCcgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld01lc3NhZ2UgPSBgY29udGVudD0ke2NvbnRlbnR9JmZyb209JHt0aGlzLnN9LCBwcmlvcml0eWA7XG5cbiAgICB0aGlzLmNvbnRlbnQudmFsdWUgPSAnJztcbiAgICB0aGlzLnNjcm9sbFBhbmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbiA9IDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50IGFsaWduLXRvcCBwbC0wIGNvbC1tZC03IGNvbC1sZy05XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAgICB7IHRoaXMucHJvcHMubWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBuICs9IDE7XG4gICAgICAgICAgICBsZXQgc2Vjb25kQ2xhc3MgPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aCAtIDEgPT09IG4pIHtcbiAgICAgICAgICAgICAgc2Vjb25kQ2xhc3MgPSAnIHNlY29uZCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWNvbmRDbGFzcyA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZXNzYWdlLWNvbnRhaW5lciR7c2Vjb25kQ2xhc3N9YH0ga2V5PXttZXNzYWdlLmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NlbmdlclwiPnttZXNzYWdlLmZyb219PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BtZXNzYWdlLXR5cGUgJHttZXNzYWdlLnByaW9yaXR5fWB9PnttZXNzYWdlLnByaW9yaXR5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZS5jb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UucmVhZEJ5Lmxlbmd0aCA9PT0gMCA/ICcnIDpcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1yZWFkLWxpc3RcIj5SZWFkIGJ5OiA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnJlYWRCeS5qb2luKCcsICcpfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHBsLTAgcHItMCBwYi0yXCI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJtZXNzYWdlLWJveFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmNvbnRlbnQgPSBpbnB1dDsgfX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcGwtMCBwci0wXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1sZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJicm93c2VyLWRlZmF1bHRcIiByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnByaW9yaXR5ID0gaW5wdXQ7IH19PlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vcm1hbFwiPk5vcm1hbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVyZ2VudFwiPlVyZ2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNyaXRpY2FsXCI+Q3JpdGljYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuc2VuZH0+U2VuZDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kOiBuZXdNZXNzYWdlID0+IGRpc3BhdGNoKHNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWVzc2FnZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9tZXNzYWdlcy5qcyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgdHlwZTtcbnRyeSB7XG4gIHR5cGUgPSByZXF1aXJlKCdjb21wb25lbnQtdHlwZScpO1xufSBjYXRjaCAoXykge1xuICB0eXBlID0gcmVxdWlyZSgndHlwZScpO1xufVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG5cbi8qKlxuICogQ2xvbmVzIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gYW55IG9iamVjdFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZShvYmope1xuICBzd2l0Y2ggKHR5cGUob2JqKSkge1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB2YXIgY29weSA9IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjb3B5W2tleV0gPSBjbG9uZShvYmpba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3B5O1xuXG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgdmFyIGNvcHkgPSBuZXcgQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29weVtpXSA9IGNsb25lKG9ialtpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29weTtcblxuICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAvLyBmcm9tIG1pbGxlcm1lZGVpcm9zL2FtZC11dGlscyAtIE1JVFxuICAgICAgdmFyIGZsYWdzID0gJyc7XG4gICAgICBmbGFncyArPSBvYmoubXVsdGlsaW5lID8gJ20nIDogJyc7XG4gICAgICBmbGFncyArPSBvYmouZ2xvYmFsID8gJ2cnIDogJyc7XG4gICAgICBmbGFncyArPSBvYmouaWdub3JlQ2FzZSA/ICdpJyA6ICcnO1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAob2JqLnNvdXJjZSwgZmxhZ3MpO1xuXG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gbmV3IERhdGUob2JqLmdldFRpbWUoKSk7XG5cbiAgICBkZWZhdWx0OiAvLyBzdHJpbmcsIG51bWJlciwgYm9vbGVhbiwg4oCmXG4gICAgICByZXR1cm4gb2JqO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC1jbG9uZS9pbmRleC5qcyIsIi8qKlxuICogRXhwb3NlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKWAuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgZmFsbGJhY2s7XG5cbi8qKlxuICogRmFsbGJhY2sgaW1wbGVtZW50YXRpb24uXG4gKi9cblxudmFyIHByZXYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbmZ1bmN0aW9uIGZhbGxiYWNrKGZuKSB7XG4gIHZhciBjdXJyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHZhciBtcyA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnIgLSBwcmV2KSk7XG4gIHZhciByZXEgPSBzZXRUaW1lb3V0KGZuLCBtcyk7XG4gIHByZXYgPSBjdXJyO1xuICByZXR1cm4gcmVxO1xufVxuXG4vKipcbiAqIENhbmNlbC5cbiAqL1xuXG52YXIgY2FuY2VsID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93LmNsZWFyVGltZW91dDtcblxuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbihpZCl7XG4gIGNhbmNlbC5jYWxsKHdpbmRvdywgaWQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LXJhZi9pbmRleC5qcyIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnY2xvbmUnKTtcbnZhciB0eXBlID0gcmVxdWlyZSgndHlwZScpO1xudmFyIGVhc2UgPSByZXF1aXJlKCdlYXNlJyk7XG5cbi8qKlxuICogRXhwb3NlIGBUd2VlbmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBUd2VlbmAgd2l0aCBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFR3ZWVuKG9iaikge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVHdlZW4pKSByZXR1cm4gbmV3IFR3ZWVuKG9iaik7XG4gIHRoaXMuX2Zyb20gPSBvYmo7XG4gIHRoaXMuZWFzZSgnbGluZWFyJyk7XG4gIHRoaXMuZHVyYXRpb24oNTAwKTtcbn1cblxuLyoqXG4gKiBNaXhpbiBlbWl0dGVyLlxuICovXG5cbkVtaXR0ZXIoVHdlZW4ucHJvdG90eXBlKTtcblxuLyoqXG4gKiBSZXNldCB0aGUgdHdlZW4uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLmlzQXJyYXkgPSAnYXJyYXknID09PSB0eXBlKHRoaXMuX2Zyb20pO1xuICB0aGlzLl9jdXJyID0gY2xvbmUodGhpcy5fZnJvbSk7XG4gIHRoaXMuX2RvbmUgPSBmYWxzZTtcbiAgdGhpcy5fc3RhcnQgPSBEYXRlLm5vdygpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVHdlZW4gdG8gYG9iamAgYW5kIHJlc2V0IGludGVybmFsIHN0YXRlLlxuICpcbiAqICAgIHR3ZWVuLnRvKHsgeDogNTAsIHk6IDEwMCB9KVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmpcbiAqIEByZXR1cm4ge1R3ZWVufSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKG9iail7XG4gIHRoaXMucmVzZXQoKTtcbiAgdGhpcy5fdG8gPSBvYmo7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgZHVyYXRpb24gdG8gYG1zYCBbNTAwXS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1R3ZWVufSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKG1zKXtcbiAgdGhpcy5fZHVyYXRpb24gPSBtcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBlYXNpbmcgZnVuY3Rpb24gdG8gYGZuYC5cbiAqXG4gKiAgICB0d2Vlbi5lYXNlKCdpbi1vdXQtc2luZScpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtUd2Vlbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLmVhc2UgPSBmdW5jdGlvbihmbil7XG4gIGZuID0gJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZm4gPyBmbiA6IGVhc2VbZm5dO1xuICBpZiAoIWZuKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIGVhc2luZyBmdW5jdGlvbicpO1xuICB0aGlzLl9lYXNlID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTdG9wIHRoZSB0d2VlbiBhbmQgaW1tZWRpYXRlbHkgZW1pdCBcInN0b3BcIiBhbmQgXCJlbmRcIi5cbiAqXG4gKiBAcmV0dXJuIHtUd2Vlbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpe1xuICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICB0aGlzLl9kb25lID0gdHJ1ZTtcbiAgdGhpcy5lbWl0KCdzdG9wJyk7XG4gIHRoaXMuZW1pdCgnZW5kJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBQZXJmb3JtIGEgc3RlcC5cbiAqXG4gKiBAcmV0dXJuIHtUd2Vlbn0gc2VsZlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbigpe1xuICBpZiAodGhpcy5fZG9uZSkgcmV0dXJuO1xuXG4gIC8vIGR1cmF0aW9uXG4gIHZhciBkdXJhdGlvbiA9IHRoaXMuX2R1cmF0aW9uO1xuICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgdmFyIGRlbHRhID0gbm93IC0gdGhpcy5fc3RhcnQ7XG4gIHZhciBkb25lID0gZGVsdGEgPj0gZHVyYXRpb247XG5cbiAgLy8gY29tcGxldGVcbiAgaWYgKGRvbmUpIHtcbiAgICB0aGlzLl9mcm9tID0gdGhpcy5fdG87XG4gICAgdGhpcy5fdXBkYXRlKHRoaXMuX3RvKTtcbiAgICB0aGlzLl9kb25lID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXQoJ2VuZCcpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdHdlZW5cbiAgdmFyIGZyb20gPSB0aGlzLl9mcm9tO1xuICB2YXIgdG8gPSB0aGlzLl90bztcbiAgdmFyIGN1cnIgPSB0aGlzLl9jdXJyO1xuICB2YXIgZm4gPSB0aGlzLl9lYXNlO1xuICB2YXIgcCA9IChub3cgLSB0aGlzLl9zdGFydCkgLyBkdXJhdGlvbjtcbiAgdmFyIG4gPSBmbihwKTtcblxuICAvLyBhcnJheVxuICBpZiAodGhpcy5pc0FycmF5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcm9tLmxlbmd0aDsgKytpKSB7XG4gICAgICBjdXJyW2ldID0gZnJvbVtpXSArICh0b1tpXSAtIGZyb21baV0pICogbjtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGUoY3Vycik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBvYmplY2hcbiAgZm9yICh2YXIgayBpbiBmcm9tKSB7XG4gICAgY3VycltrXSA9IGZyb21ba10gKyAodG9ba10gLSBmcm9tW2tdKSAqIG47XG4gIH1cblxuICB0aGlzLl91cGRhdGUoY3Vycik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgdXBkYXRlIGZ1bmN0aW9uIHRvIGBmbmAgb3JcbiAqIHdoZW4gbm8gYXJndW1lbnQgaXMgZ2l2ZW4gdGhpcyBwZXJmb3Jtc1xuICogYSBcInN0ZXBcIi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7VHdlZW59IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGZuKXtcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuc3RlcCgpO1xuICB0aGlzLl91cGRhdGUgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LXR3ZWVuL2luZGV4LmpzIiwiXG4vKipcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59O1xuXG4vKipcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub24gPVxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxuICAgIC5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgZnVuY3Rpb24gb24oKSB7XG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgb24uZm4gPSBmbjtcbiAgdGhpcy5vbihldmVudCwgb24pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICAvLyBhbGxcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcblxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gIHZhciBjYjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge01peGVkfSAuLi5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcblxuICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtdHdlZW4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIlxuLy8gZWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFwiVHdlZW4uanNcIlxuXG5leHBvcnRzLmxpbmVhciA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbjtcbn07XG5cbmV4cG9ydHMuaW5RdWFkID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogbjtcbn07XG5cbmV4cG9ydHMub3V0UXVhZCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqICgyIC0gbik7XG59O1xuXG5leHBvcnRzLmluT3V0UXVhZCA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDI7XG4gIGlmIChuIDwgMSkgcmV0dXJuIDAuNSAqIG4gKiBuO1xuICByZXR1cm4gLSAwLjUgKiAoLS1uICogKG4gLSAyKSAtIDEpO1xufTtcblxuZXhwb3J0cy5pbkN1YmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiBuICogbjtcbn07XG5cbmV4cG9ydHMub3V0Q3ViZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gLS1uICogbiAqIG4gKyAxO1xufTtcblxuZXhwb3J0cy5pbk91dEN1YmUgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyO1xuICBpZiAobiA8IDEpIHJldHVybiAwLjUgKiBuICogbiAqIG47XG4gIHJldHVybiAwLjUgKiAoKG4gLT0gMiApICogbiAqIG4gKyAyKTtcbn07XG5cbmV4cG9ydHMuaW5RdWFydCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqIG4gKiBuICogbjtcbn07XG5cbmV4cG9ydHMub3V0UXVhcnQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDEgLSAoLS1uICogbiAqIG4gKiBuKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRRdWFydCA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDI7XG4gIGlmIChuIDwgMSkgcmV0dXJuIDAuNSAqIG4gKiBuICogbiAqIG47XG4gIHJldHVybiAtMC41ICogKChuIC09IDIpICogbiAqIG4gKiBuIC0gMik7XG59O1xuXG5leHBvcnRzLmluUXVpbnQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiBuICogbiAqIG4gKiBuO1xufVxuXG5leHBvcnRzLm91dFF1aW50ID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAtLW4gKiBuICogbiAqIG4gKiBuICsgMTtcbn1cblxuZXhwb3J0cy5pbk91dFF1aW50ID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMjtcbiAgaWYgKG4gPCAxKSByZXR1cm4gMC41ICogbiAqIG4gKiBuICogbiAqIG47XG4gIHJldHVybiAwLjUgKiAoKG4gLT0gMikgKiBuICogbiAqIG4gKiBuICsgMik7XG59O1xuXG5leHBvcnRzLmluU2luZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSAtIE1hdGguY29zKG4gKiBNYXRoLlBJIC8gMiApO1xufTtcblxuZXhwb3J0cy5vdXRTaW5lID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBNYXRoLnNpbihuICogTWF0aC5QSSAvIDIpO1xufTtcblxuZXhwb3J0cy5pbk91dFNpbmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogbikpO1xufTtcblxuZXhwb3J0cy5pbkV4cG8gPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDAgPT0gbiA/IDAgOiBNYXRoLnBvdygxMDI0LCBuIC0gMSk7XG59O1xuXG5leHBvcnRzLm91dEV4cG8gPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDEgPT0gbiA/IG4gOiAxIC0gTWF0aC5wb3coMiwgLTEwICogbik7XG59O1xuXG5leHBvcnRzLmluT3V0RXhwbyA9IGZ1bmN0aW9uKG4pe1xuICBpZiAoMCA9PSBuKSByZXR1cm4gMDtcbiAgaWYgKDEgPT0gbikgcmV0dXJuIDE7XG4gIGlmICgobiAqPSAyKSA8IDEpIHJldHVybiAuNSAqIE1hdGgucG93KDEwMjQsIG4gLSAxKTtcbiAgcmV0dXJuIC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAobiAtIDEpKSArIDIpO1xufTtcblxuZXhwb3J0cy5pbkNpcmMgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIG4gKiBuKTtcbn07XG5cbmV4cG9ydHMub3V0Q2lyYyA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAoLS1uICogbikpO1xufTtcblxuZXhwb3J0cy5pbk91dENpcmMgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyXG4gIGlmIChuIDwgMSkgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSBuICogbikgLSAxKTtcbiAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtIChuIC09IDIpICogbikgKyAxKTtcbn07XG5cbmV4cG9ydHMuaW5CYWNrID0gZnVuY3Rpb24obil7XG4gIHZhciBzID0gMS43MDE1ODtcbiAgcmV0dXJuIG4gKiBuICogKCggcyArIDEgKSAqIG4gLSBzKTtcbn07XG5cbmV4cG9ydHMub3V0QmFjayA9IGZ1bmN0aW9uKG4pe1xuICB2YXIgcyA9IDEuNzAxNTg7XG4gIHJldHVybiAtLW4gKiBuICogKChzICsgMSkgKiBuICsgcykgKyAxO1xufTtcblxuZXhwb3J0cy5pbk91dEJhY2sgPSBmdW5jdGlvbihuKXtcbiAgdmFyIHMgPSAxLjcwMTU4ICogMS41MjU7XG4gIGlmICggKCBuICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogKCBuICogbiAqICggKCBzICsgMSApICogbiAtIHMgKSApO1xuICByZXR1cm4gMC41ICogKCAoIG4gLT0gMiApICogbiAqICggKCBzICsgMSApICogbiArIHMgKSArIDIgKTtcbn07XG5cbmV4cG9ydHMuaW5Cb3VuY2UgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDEgLSBleHBvcnRzLm91dEJvdW5jZSgxIC0gbik7XG59O1xuXG5leHBvcnRzLm91dEJvdW5jZSA9IGZ1bmN0aW9uKG4pe1xuICBpZiAoIG4gPCAoIDEgLyAyLjc1ICkgKSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqIG4gKiBuO1xuICB9IGVsc2UgaWYgKCBuIDwgKCAyIC8gMi43NSApICkge1xuICAgIHJldHVybiA3LjU2MjUgKiAoIG4gLT0gKCAxLjUgLyAyLjc1ICkgKSAqIG4gKyAwLjc1O1xuICB9IGVsc2UgaWYgKCBuIDwgKCAyLjUgLyAyLjc1ICkgKSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqICggbiAtPSAoIDIuMjUgLyAyLjc1ICkgKSAqIG4gKyAwLjkzNzU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqICggbiAtPSAoIDIuNjI1IC8gMi43NSApICkgKiBuICsgMC45ODQzNzU7XG4gIH1cbn07XG5cbmV4cG9ydHMuaW5PdXRCb3VuY2UgPSBmdW5jdGlvbihuKXtcbiAgaWYgKG4gPCAuNSkgcmV0dXJuIGV4cG9ydHMuaW5Cb3VuY2UobiAqIDIpICogLjU7XG4gIHJldHVybiBleHBvcnRzLm91dEJvdW5jZShuICogMiAtIDEpICogLjUgKyAuNTtcbn07XG5cbi8vIGFsaWFzZXNcblxuZXhwb3J0c1snaW4tcXVhZCddID0gZXhwb3J0cy5pblF1YWQ7XG5leHBvcnRzWydvdXQtcXVhZCddID0gZXhwb3J0cy5vdXRRdWFkO1xuZXhwb3J0c1snaW4tb3V0LXF1YWQnXSA9IGV4cG9ydHMuaW5PdXRRdWFkO1xuZXhwb3J0c1snaW4tY3ViZSddID0gZXhwb3J0cy5pbkN1YmU7XG5leHBvcnRzWydvdXQtY3ViZSddID0gZXhwb3J0cy5vdXRDdWJlO1xuZXhwb3J0c1snaW4tb3V0LWN1YmUnXSA9IGV4cG9ydHMuaW5PdXRDdWJlO1xuZXhwb3J0c1snaW4tcXVhcnQnXSA9IGV4cG9ydHMuaW5RdWFydDtcbmV4cG9ydHNbJ291dC1xdWFydCddID0gZXhwb3J0cy5vdXRRdWFydDtcbmV4cG9ydHNbJ2luLW91dC1xdWFydCddID0gZXhwb3J0cy5pbk91dFF1YXJ0O1xuZXhwb3J0c1snaW4tcXVpbnQnXSA9IGV4cG9ydHMuaW5RdWludDtcbmV4cG9ydHNbJ291dC1xdWludCddID0gZXhwb3J0cy5vdXRRdWludDtcbmV4cG9ydHNbJ2luLW91dC1xdWludCddID0gZXhwb3J0cy5pbk91dFF1aW50O1xuZXhwb3J0c1snaW4tc2luZSddID0gZXhwb3J0cy5pblNpbmU7XG5leHBvcnRzWydvdXQtc2luZSddID0gZXhwb3J0cy5vdXRTaW5lO1xuZXhwb3J0c1snaW4tb3V0LXNpbmUnXSA9IGV4cG9ydHMuaW5PdXRTaW5lO1xuZXhwb3J0c1snaW4tZXhwbyddID0gZXhwb3J0cy5pbkV4cG87XG5leHBvcnRzWydvdXQtZXhwbyddID0gZXhwb3J0cy5vdXRFeHBvO1xuZXhwb3J0c1snaW4tb3V0LWV4cG8nXSA9IGV4cG9ydHMuaW5PdXRFeHBvO1xuZXhwb3J0c1snaW4tY2lyYyddID0gZXhwb3J0cy5pbkNpcmM7XG5leHBvcnRzWydvdXQtY2lyYyddID0gZXhwb3J0cy5vdXRDaXJjO1xuZXhwb3J0c1snaW4tb3V0LWNpcmMnXSA9IGV4cG9ydHMuaW5PdXRDaXJjO1xuZXhwb3J0c1snaW4tYmFjayddID0gZXhwb3J0cy5pbkJhY2s7XG5leHBvcnRzWydvdXQtYmFjayddID0gZXhwb3J0cy5vdXRCYWNrO1xuZXhwb3J0c1snaW4tb3V0LWJhY2snXSA9IGV4cG9ydHMuaW5PdXRCYWNrO1xuZXhwb3J0c1snaW4tYm91bmNlJ10gPSBleHBvcnRzLmluQm91bmNlO1xuZXhwb3J0c1snb3V0LWJvdW5jZSddID0gZXhwb3J0cy5vdXRCb3VuY2U7XG5leHBvcnRzWydpbi1vdXQtYm91bmNlJ10gPSBleHBvcnRzLmluT3V0Qm91bmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9lYXNlLWNvbXBvbmVudC9pbmRleC5qcyIsInZhciBzY3JvbGwgPSByZXF1aXJlKCdzY3JvbGwtdG8nKTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlU2Nyb2xsT2Zmc2V0KGVsZW0sIGFkZGl0aW9uYWxPZmZzZXQsIGFsaWdubWVudCkge1xuICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIHZhciBlbGVtUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBjbGllbnRIZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIGRvY3VtZW50SGVpZ2h0ID0gTWF0aC5tYXgoIGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sLmNsaWVudEhlaWdodCwgaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwub2Zmc2V0SGVpZ2h0ICk7XG5cbiAgYWRkaXRpb25hbE9mZnNldCA9IGFkZGl0aW9uYWxPZmZzZXQgfHwgMDtcblxuICB2YXIgc2Nyb2xsUG9zaXRpb247XG4gIGlmIChhbGlnbm1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgc2Nyb2xsUG9zaXRpb24gPSBlbGVtUmVjdC5ib3R0b20gLSBjbGllbnRIZWlnaHQ7XG4gIH0gZWxzZSBpZiAoYWxpZ25tZW50ID09PSAnbWlkZGxlJykge1xuICAgIHNjcm9sbFBvc2l0aW9uID0gZWxlbVJlY3QuYm90dG9tIC0gY2xpZW50SGVpZ2h0IC8gMiAtIGVsZW1SZWN0LmhlaWdodCAvIDI7XG4gIH0gZWxzZSB7IC8vIHRvcCBhbmQgZGVmYXVsdFxuICAgIHNjcm9sbFBvc2l0aW9uID0gZWxlbVJlY3QudG9wO1xuICB9XG5cbiAgdmFyIG1heFNjcm9sbFBvc2l0aW9uID0gZG9jdW1lbnRIZWlnaHQgLSBjbGllbnRIZWlnaHQ7XG4gIHJldHVybiBNYXRoLm1pbihzY3JvbGxQb3NpdGlvbiArIGFkZGl0aW9uYWxPZmZzZXQgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICAgICAgICBtYXhTY3JvbGxQb3NpdGlvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW0sIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICBpZiAoZWxlbSkgcmV0dXJuIHNjcm9sbCgwLCBjYWxjdWxhdGVTY3JvbGxPZmZzZXQoZWxlbSwgb3B0aW9ucy5vZmZzZXQsIG9wdGlvbnMuYWxpZ24pLCBvcHRpb25zKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Njcm9sbC10by1lbGVtZW50L2luZGV4LmpzIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBUd2VlbiA9IHJlcXVpcmUoJ3R3ZWVuJyk7XG52YXIgcmFmID0gcmVxdWlyZSgncmFmJyk7XG5cbi8qKlxuICogRXhwb3NlIGBzY3JvbGxUb2AuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGxUbztcblxuLyoqXG4gKiBTY3JvbGwgdG8gYCh4LCB5KWAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHNjcm9sbFRvKHgsIHksIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gc3RhcnQgcG9zaXRpb25cbiAgdmFyIHN0YXJ0ID0gc2Nyb2xsKCk7XG5cbiAgLy8gc2V0dXAgdHdlZW5cbiAgdmFyIHR3ZWVuID0gVHdlZW4oc3RhcnQpXG4gICAgLmVhc2Uob3B0aW9ucy5lYXNlIHx8ICdvdXQtY2lyYycpXG4gICAgLnRvKHsgdG9wOiB5LCBsZWZ0OiB4IH0pXG4gICAgLmR1cmF0aW9uKG9wdGlvbnMuZHVyYXRpb24gfHwgMTAwMCk7XG5cbiAgLy8gc2Nyb2xsXG4gIHR3ZWVuLnVwZGF0ZShmdW5jdGlvbihvKXtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oby5sZWZ0IHwgMCwgby50b3AgfCAwKTtcbiAgfSk7XG5cbiAgLy8gaGFuZGxlIGVuZFxuICB0d2Vlbi5vbignZW5kJywgZnVuY3Rpb24oKXtcbiAgICBhbmltYXRlID0gZnVuY3Rpb24oKXt9O1xuICB9KTtcblxuICAvLyBhbmltYXRlXG4gIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgcmFmKGFuaW1hdGUpO1xuICAgIHR3ZWVuLnVwZGF0ZSgpO1xuICB9XG5cbiAgYW5pbWF0ZSgpO1xuICBcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG4vKipcbiAqIFJldHVybiBzY3JvbGwgcG9zaXRpb24uXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2Nyb2xsKCkge1xuICB2YXIgeSA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICB2YXIgeCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgcmV0dXJuIHsgdG9wOiB5LCBsZWZ0OiB4IH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Njcm9sbC10by9pbmRleC5qcyIsIi8qKlxuICogdG9TdHJpbmcgcmVmLlxuICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogUmV0dXJuIHRoZSB0eXBlIG9mIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCl7XG4gIHN3aXRjaCAodG9TdHJpbmcuY2FsbCh2YWwpKSB7XG4gICAgY2FzZSAnW29iamVjdCBEYXRlXSc6IHJldHVybiAnZGF0ZSc7XG4gICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzogcmV0dXJuICdyZWdleHAnO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJndW1lbnRzXSc6IHJldHVybiAnYXJndW1lbnRzJztcbiAgICBjYXNlICdbb2JqZWN0IEFycmF5XSc6IHJldHVybiAnYXJyYXknO1xuICAgIGNhc2UgJ1tvYmplY3QgRXJyb3JdJzogcmV0dXJuICdlcnJvcic7XG4gIH1cblxuICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuICBpZiAodmFsID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJztcbiAgaWYgKHZhbCAhPT0gdmFsKSByZXR1cm4gJ25hbic7XG4gIGlmICh2YWwgJiYgdmFsLm5vZGVUeXBlID09PSAxKSByZXR1cm4gJ2VsZW1lbnQnO1xuXG4gIHZhbCA9IHZhbC52YWx1ZU9mXG4gICAgPyB2YWwudmFsdWVPZigpXG4gICAgOiBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YuYXBwbHkodmFsKVxuXG4gIHJldHVybiB0eXBlb2YgdmFsO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LXR5cGUvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9