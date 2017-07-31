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

var _scrollToElement = __webpack_require__(299);

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

var _sendMessage = __webpack_require__(126);

var _sendMessage2 = _interopRequireDefault(_sendMessage);

var _api = __webpack_require__(26);

var _api2 = _interopRequireDefault(_api);

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
      priority = priority.value.trim().to;
      var readBy = [];
      if (content === '' || from === '' || priority === '') {
        this.setState({ message_error: 'Error: Message has no priority, sender or content' });
        return;
      }
      var newMessage = 'message=' + content + '&from_user=' + JSON.parse(this.props.user).data.id + '\n    &priority=' + priority + '&to_group=' + this.props.selectedGroup.id;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
      (0, _api2.default)(newMessage, '/api/groups/' + this.props.selectedGroup.id + '/message', 'POST', headers).then(function (response) {
        console.log(response);
      });
      this.content.value = '';
      this.scrollPane();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var n = 0;
      console.log('MESSAGES::::::: ', this.props.messages);
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
    user: state.userData,
    selectedGroup: state.selectedGroup
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

/***/ 146:
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

/***/ 147:
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

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var Emitter = __webpack_require__(149);
var clone = __webpack_require__(146);
var type = __webpack_require__(46);
var ease = __webpack_require__(151);

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

/***/ 149:
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

/***/ 151:
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

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var scroll = __webpack_require__(300);

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

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var Tween = __webpack_require__(148);
var raf = __webpack_require__(147);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9zZW5kTWVzc2FnZS5qcz84OTZhIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanM/MWI4YyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1jbG9uZS9pbmRleC5qcz8wZWM1Iiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXJhZi9pbmRleC5qcz9hZmRhIiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXR3ZWVuL2luZGV4LmpzPzU3ZjIiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtdHdlZW4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcz85ZjM2Iiwid2VicGFjazovLy8uL34vZWFzZS1jb21wb25lbnQvaW5kZXguanM/OTNmNCIsIndlYnBhY2s6Ly8vLi9+L3Njcm9sbC10by1lbGVtZW50L2luZGV4LmpzP2IwOWUiLCJ3ZWJwYWNrOi8vLy4vfi9zY3JvbGwtdG8vaW5kZXguanM/NDMwNCIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC10eXBlL2luZGV4LmpzPzZmNTYiXSwibmFtZXMiOlsic2VuZE1lc3NhZ2UiLCJuZXdNZXNzYWdlIiwidHlwZSIsIk1lc3NhZ2VzIiwicHJvcHMiLCJzdGF0ZSIsIm1lc3NhZ2VfZXJyb3IiLCJzZW5kIiwiYmluZCIsInNjcm9sbFBhbmUiLCJvZmZzZXQiLCJlYXNlIiwiZHVyYXRpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwiZnJvbSIsInByaW9yaXR5IiwidmFsdWUiLCJ0cmltIiwidG8iLCJyZWFkQnkiLCJzZXRTdGF0ZSIsIkpTT04iLCJwYXJzZSIsInVzZXIiLCJkYXRhIiwiaWQiLCJzZWxlY3RlZEdyb3VwIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJuIiwibWVzc2FnZXMiLCJtYXAiLCJtZXNzYWdlIiwic2Vjb25kQ2xhc3MiLCJsZW5ndGgiLCJqb2luIiwiaW5wdXQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicmVxdWlyZSIsIl8iLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xvbmUiLCJvYmoiLCJjb3B5Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJBcnJheSIsImkiLCJsIiwiZmxhZ3MiLCJtdWx0aWxpbmUiLCJnbG9iYWwiLCJpZ25vcmVDYXNlIiwiUmVnRXhwIiwic291cmNlIiwiRGF0ZSIsImdldFRpbWUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmYWxsYmFjayIsInByZXYiLCJmbiIsImN1cnIiLCJtcyIsIk1hdGgiLCJtYXgiLCJyZXEiLCJzZXRUaW1lb3V0IiwiY2FuY2VsIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiY2FsbCIsIkVtaXR0ZXIiLCJUd2VlbiIsIl9mcm9tIiwicHJvdG90eXBlIiwicmVzZXQiLCJpc0FycmF5IiwiX2N1cnIiLCJfZG9uZSIsIl9zdGFydCIsIm5vdyIsIl90byIsIl9kdXJhdGlvbiIsIlR5cGVFcnJvciIsIl9lYXNlIiwic3RvcCIsInN0b3BwZWQiLCJlbWl0Iiwic3RlcCIsImRlbHRhIiwiZG9uZSIsIl91cGRhdGUiLCJwIiwiayIsInVwZGF0ZSIsImFyZ3VtZW50cyIsIm1peGluIiwib24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJfY2FsbGJhY2tzIiwicHVzaCIsIm9uY2UiLCJvZmYiLCJhcHBseSIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrcyIsImNiIiwic3BsaWNlIiwiYXJncyIsInNsaWNlIiwibGVuIiwibGlzdGVuZXJzIiwiaGFzTGlzdGVuZXJzIiwibGluZWFyIiwiaW5RdWFkIiwib3V0UXVhZCIsImluT3V0UXVhZCIsImluQ3ViZSIsIm91dEN1YmUiLCJpbk91dEN1YmUiLCJpblF1YXJ0Iiwib3V0UXVhcnQiLCJpbk91dFF1YXJ0IiwiaW5RdWludCIsIm91dFF1aW50IiwiaW5PdXRRdWludCIsImluU2luZSIsImNvcyIsIlBJIiwib3V0U2luZSIsInNpbiIsImluT3V0U2luZSIsImluRXhwbyIsInBvdyIsIm91dEV4cG8iLCJpbk91dEV4cG8iLCJpbkNpcmMiLCJzcXJ0Iiwib3V0Q2lyYyIsImluT3V0Q2lyYyIsImluQmFjayIsInMiLCJvdXRCYWNrIiwiaW5PdXRCYWNrIiwiaW5Cb3VuY2UiLCJvdXRCb3VuY2UiLCJpbk91dEJvdW5jZSIsInNjcm9sbCIsImNhbGN1bGF0ZVNjcm9sbE9mZnNldCIsImVsZW0iLCJhZGRpdGlvbmFsT2Zmc2V0IiwiYWxpZ25tZW50IiwiYm9keSIsImRvY3VtZW50IiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsImVsZW1SZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50SGVpZ2h0IiwiZG9jdW1lbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxQb3NpdGlvbiIsImJvdHRvbSIsImhlaWdodCIsInRvcCIsIm1heFNjcm9sbFBvc2l0aW9uIiwibWluIiwicGFnZVlPZmZzZXQiLCJvcHRpb25zIiwicXVlcnlTZWxlY3RvciIsImFsaWduIiwicmFmIiwic2Nyb2xsVG8iLCJ4IiwieSIsInN0YXJ0IiwidHdlZW4iLCJsZWZ0IiwibyIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJwYWdlWE9mZnNldCIsInNjcm9sbExlZnQiLCJ0b1N0cmluZyIsIk9iamVjdCIsInZhbCIsInVu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QUFMO0FBQXNCLGFBQU8sTUFBUDtBQUN0QixTQUFLLGlCQUFMO0FBQXdCLGFBQU8sUUFBUDtBQUN4QixTQUFLLG9CQUFMO0FBQTJCLGFBQU8sV0FBUDtBQUMzQixTQUFLLGdCQUFMO0FBQXVCLGFBQU8sT0FBUDtBQUN2QixTQUFLLGdCQUFMO0FBQXVCLGFBQU8sT0FBUDtBQUx6Qjs7QUFRQSxNQUFJQSxRQUFRLElBQVosRUFBa0IsT0FBTyxNQUFQO0FBQ2xCLE1BQUlBLFFBQVFDLFNBQVosRUFBdUIsT0FBTyxXQUFQO0FBQ3ZCLE1BQUlELFFBQVFBLEdBQVosRUFBaUIsT0FBTyxLQUFQO0FBQ2pCLE1BQUlBLE9BQU9BLElBQUlFLFFBQUosS0FBaUIsQ0FBNUIsRUFBK0IsT0FBTyxTQUFQOztBQUUvQkYsUUFBTUEsSUFBSUcsT0FBSixHQUNGSCxJQUFJRyxPQUFKLEVBREUsR0FFRkosT0FBT2xILFNBQVAsQ0FBaUJzSCxPQUFqQixDQUF5QnhGLEtBQXpCLENBQStCcUYsR0FBL0IsQ0FGSjs7QUFJQSxnQkFBY0EsR0FBZCx5Q0FBY0EsR0FBZDtBQUNELENBbkJELEMiLCJmaWxlIjoiMC40ZTI5MWYyMjJlNWRiYTM1M2RkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VuZE1lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTRU5EX01FU1NBR0UnLFxuICAgIG5ld01lc3NhZ2VcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FjdGlvbnMvc2VuZE1lc3NhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzY3JvbGxUb0VsZW1lbnQgZnJvbSAnc2Nyb2xsLXRvLWVsZW1lbnQnO1xuaW1wb3J0IHNlbmRNZXNzYWdlIGZyb20gJy4uLy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2UnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VfZXJyb3I6ICcnXG4gICAgfTtcbiAgICB0aGlzLnNlbmQgPSB0aGlzLnNlbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNjcm9sbFBhbmUgPSB0aGlzLnNjcm9sbFBhbmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNjcm9sbFBhbmUoKSB7XG4gICAgc2Nyb2xsVG9FbGVtZW50KCcuc2Vjb25kJywge1xuICAgICAgb2Zmc2V0OiAtNjAsXG4gICAgICBlYXNlOiAnaW4tZXhwbycsXG4gICAgICBkdXJhdGlvbjogOTAwXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNjcm9sbFBhbmUoKTtcbiAgfVxuXG4gIHNlbmQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgeyBjb250ZW50LCBmcm9tLCBwcmlvcml0eSB9ID0gdGhpcztcbiAgICBjb250ZW50ID0gY29udGVudC52YWx1ZS50cmltKCk7XG4gICAgZnJvbSA9ICdAbWljaGFlbCc7XG4gICAgcHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZS50cmltKCkudG87XG4gICAgY29uc3QgcmVhZEJ5ID0gW107XG4gICAgaWYgKGNvbnRlbnQgPT09ICcnIHx8IGZyb20gPT09ICcnIHx8IHByaW9yaXR5ID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VfZXJyb3I6ICdFcnJvcjogTWVzc2FnZSBoYXMgbm8gcHJpb3JpdHksIHNlbmRlciBvciBjb250ZW50JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3TWVzc2FnZSA9XG4gICAgYG1lc3NhZ2U9JHtjb250ZW50fSZmcm9tX3VzZXI9JHtKU09OLnBhcnNlKHRoaXMucHJvcHMudXNlcikuZGF0YS5pZH1cbiAgICAmcHJpb3JpdHk9JHtwcmlvcml0eX0mdG9fZ3JvdXA9JHt0aGlzLnByb3BzLnNlbGVjdGVkR3JvdXAuaWR9YDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKS50b2tlbik7XG4gICAgYXBpKG5ld01lc3NhZ2UsIGAvYXBpL2dyb3Vwcy8ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH0vbWVzc2FnZWAsICdQT1NUJywgaGVhZGVycykudGhlbihcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLmNvbnRlbnQudmFsdWUgPSAnJztcbiAgICB0aGlzLnNjcm9sbFBhbmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbiA9IDA7XG4gICAgY29uc29sZS5sb2coJ01FU1NBR0VTOjo6Ojo6OiAnLCB0aGlzLnByb3BzLm1lc3NhZ2VzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sLW1kLTcgY29sLWxnLTlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIG4gKz0gMTtcbiAgICAgICAgICAgIGxldCBzZWNvbmRDbGFzcyA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoIC0gMSA9PT0gbikge1xuICAgICAgICAgICAgICBzZWNvbmRDbGFzcyA9ICcgc2Vjb25kJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlY29uZENsYXNzID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lc3NhZ2UtY29udGFpbmVyJHtzZWNvbmRDbGFzc31gfSBrZXk9e21lc3NhZ2UuaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVzc2VuZ2VyXCI+e21lc3NhZ2UuZnJvbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG1lc3NhZ2UtdHlwZSAke21lc3NhZ2UucHJpb3JpdHl9YH0+e21lc3NhZ2UucHJpb3JpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PnttZXNzYWdlLmNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS5yZWFkQnkubGVuZ3RoID09PSAwID8gJycgOlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLXJlYWQtbGlzdFwiPlJlYWQgYnk6IDxzcGFuPlxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UucmVhZEJ5LmpvaW4oJywgJyl9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctbWVzc2FnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcGwtMCBwci0wIHBiLTJcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm94XCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuY29udGVudCA9IGlucHV0OyB9fT48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwbC0wIHByLTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LWxldmVsXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJyb3dzZXItZGVmYXVsdFwiIHJlZj17KGlucHV0KSA9PiB7IHRoaXMucHJpb3JpdHkgPSBpbnB1dDsgfX0+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9ybWFsXCI+Tm9ybWFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVXJnZW50XCI+VXJnZW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ3JpdGljYWxcIj5Dcml0aWNhbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5zZW5kfT5TZW5kPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlckRhdGEsXG4gICAgc2VsZWN0ZWRHcm91cDogc3RhdGUuc2VsZWN0ZWRHcm91cFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VuZDogbmV3TWVzc2FnZSA9PiBkaXNwYXRjaChzZW5kTWVzc2FnZShuZXdNZXNzYWdlKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lc3NhZ2VzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanMiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHR5cGU7XG50cnkge1xuICB0eXBlID0gcmVxdWlyZSgnY29tcG9uZW50LXR5cGUnKTtcbn0gY2F0Y2ggKF8pIHtcbiAgdHlwZSA9IHJlcXVpcmUoJ3R5cGUnKTtcbn1cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xuXG4vKipcbiAqIENsb25lcyBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IGFueSBvYmplY3RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY2xvbmUob2JqKXtcbiAgc3dpdGNoICh0eXBlKG9iaikpIHtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgdmFyIGNvcHkgPSB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY29weVtrZXldID0gY2xvbmUob2JqW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29weTtcblxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHZhciBjb3B5ID0gbmV3IEFycmF5KG9iai5sZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvcHlbaV0gPSBjbG9uZShvYmpbaV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvcHk7XG5cbiAgICBjYXNlICdyZWdleHAnOlxuICAgICAgLy8gZnJvbSBtaWxsZXJtZWRlaXJvcy9hbWQtdXRpbHMgLSBNSVRcbiAgICAgIHZhciBmbGFncyA9ICcnO1xuICAgICAgZmxhZ3MgKz0gb2JqLm11bHRpbGluZSA/ICdtJyA6ICcnO1xuICAgICAgZmxhZ3MgKz0gb2JqLmdsb2JhbCA/ICdnJyA6ICcnO1xuICAgICAgZmxhZ3MgKz0gb2JqLmlnbm9yZUNhc2UgPyAnaScgOiAnJztcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKG9iai5zb3VyY2UsIGZsYWdzKTtcblxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIG5ldyBEYXRlKG9iai5nZXRUaW1lKCkpO1xuXG4gICAgZGVmYXVsdDogLy8gc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4sIOKAplxuICAgICAgcmV0dXJuIG9iajtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtY2xvbmUvaW5kZXguanMiLCIvKipcbiAqIEV4cG9zZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKClgLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IGZhbGxiYWNrO1xuXG4vKipcbiAqIEZhbGxiYWNrIGltcGxlbWVudGF0aW9uLlxuICovXG5cbnZhciBwcmV2ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5mdW5jdGlvbiBmYWxsYmFjayhmbikge1xuICB2YXIgY3VyciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB2YXIgbXMgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyIC0gcHJldikpO1xuICB2YXIgcmVxID0gc2V0VGltZW91dChmbiwgbXMpO1xuICBwcmV2ID0gY3VycjtcbiAgcmV0dXJuIHJlcTtcbn1cblxuLyoqXG4gKiBDYW5jZWwuXG4gKi9cblxudmFyIGNhbmNlbCA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy5jbGVhclRpbWVvdXQ7XG5cbmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oaWQpe1xuICBjYW5jZWwuY2FsbCh3aW5kb3csIGlkKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC1yYWYvaW5kZXguanMiLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2VtaXR0ZXInKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJ2Nsb25lJyk7XG52YXIgdHlwZSA9IHJlcXVpcmUoJ3R5cGUnKTtcbnZhciBlYXNlID0gcmVxdWlyZSgnZWFzZScpO1xuXG4vKipcbiAqIEV4cG9zZSBgVHdlZW5gLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgVHdlZW5gIHdpdGggYG9iamAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9ialxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBUd2VlbihvYmopIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFR3ZWVuKSkgcmV0dXJuIG5ldyBUd2VlbihvYmopO1xuICB0aGlzLl9mcm9tID0gb2JqO1xuICB0aGlzLmVhc2UoJ2xpbmVhcicpO1xuICB0aGlzLmR1cmF0aW9uKDUwMCk7XG59XG5cbi8qKlxuICogTWl4aW4gZW1pdHRlci5cbiAqL1xuXG5FbWl0dGVyKFR3ZWVuLnByb3RvdHlwZSk7XG5cbi8qKlxuICogUmVzZXQgdGhlIHR3ZWVuLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5pc0FycmF5ID0gJ2FycmF5JyA9PT0gdHlwZSh0aGlzLl9mcm9tKTtcbiAgdGhpcy5fY3VyciA9IGNsb25lKHRoaXMuX2Zyb20pO1xuICB0aGlzLl9kb25lID0gZmFsc2U7XG4gIHRoaXMuX3N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFR3ZWVuIHRvIGBvYmpgIGFuZCByZXNldCBpbnRlcm5hbCBzdGF0ZS5cbiAqXG4gKiAgICB0d2Vlbi50byh7IHg6IDUwLCB5OiAxMDAgfSlcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqXG4gKiBAcmV0dXJuIHtUd2Vlbn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUudG8gPSBmdW5jdGlvbihvYmope1xuICB0aGlzLnJlc2V0KCk7XG4gIHRoaXMuX3RvID0gb2JqO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGR1cmF0aW9uIHRvIGBtc2AgWzUwMF0uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtUd2Vlbn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbihtcyl7XG4gIHRoaXMuX2R1cmF0aW9uID0gbXM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgZWFzaW5nIGZ1bmN0aW9uIHRvIGBmbmAuXG4gKlxuICogICAgdHdlZW4uZWFzZSgnaW4tb3V0LXNpbmUnKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBmblxuICogQHJldHVybiB7VHdlZW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS5lYXNlID0gZnVuY3Rpb24oZm4pe1xuICBmbiA9ICdmdW5jdGlvbicgPT0gdHlwZW9mIGZuID8gZm4gOiBlYXNlW2ZuXTtcbiAgaWYgKCFmbikgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBlYXNpbmcgZnVuY3Rpb24nKTtcbiAgdGhpcy5fZWFzZSA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3RvcCB0aGUgdHdlZW4gYW5kIGltbWVkaWF0ZWx5IGVtaXQgXCJzdG9wXCIgYW5kIFwiZW5kXCIuXG4gKlxuICogQHJldHVybiB7VHdlZW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgdGhpcy5fZG9uZSA9IHRydWU7XG4gIHRoaXMuZW1pdCgnc3RvcCcpO1xuICB0aGlzLmVtaXQoJ2VuZCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUGVyZm9ybSBhIHN0ZXAuXG4gKlxuICogQHJldHVybiB7VHdlZW59IHNlbGZcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblR3ZWVuLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuX2RvbmUpIHJldHVybjtcblxuICAvLyBkdXJhdGlvblxuICB2YXIgZHVyYXRpb24gPSB0aGlzLl9kdXJhdGlvbjtcbiAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gIHZhciBkZWx0YSA9IG5vdyAtIHRoaXMuX3N0YXJ0O1xuICB2YXIgZG9uZSA9IGRlbHRhID49IGR1cmF0aW9uO1xuXG4gIC8vIGNvbXBsZXRlXG4gIGlmIChkb25lKSB7XG4gICAgdGhpcy5fZnJvbSA9IHRoaXMuX3RvO1xuICAgIHRoaXMuX3VwZGF0ZSh0aGlzLl90byk7XG4gICAgdGhpcy5fZG9uZSA9IHRydWU7XG4gICAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHR3ZWVuXG4gIHZhciBmcm9tID0gdGhpcy5fZnJvbTtcbiAgdmFyIHRvID0gdGhpcy5fdG87XG4gIHZhciBjdXJyID0gdGhpcy5fY3VycjtcbiAgdmFyIGZuID0gdGhpcy5fZWFzZTtcbiAgdmFyIHAgPSAobm93IC0gdGhpcy5fc3RhcnQpIC8gZHVyYXRpb247XG4gIHZhciBuID0gZm4ocCk7XG5cbiAgLy8gYXJyYXlcbiAgaWYgKHRoaXMuaXNBcnJheSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJvbS5sZW5ndGg7ICsraSkge1xuICAgICAgY3VycltpXSA9IGZyb21baV0gKyAodG9baV0gLSBmcm9tW2ldKSAqIG47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlKGN1cnIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gb2JqZWNoXG4gIGZvciAodmFyIGsgaW4gZnJvbSkge1xuICAgIGN1cnJba10gPSBmcm9tW2tdICsgKHRvW2tdIC0gZnJvbVtrXSkgKiBuO1xuICB9XG5cbiAgdGhpcy5fdXBkYXRlKGN1cnIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHVwZGF0ZSBmdW5jdGlvbiB0byBgZm5gIG9yXG4gKiB3aGVuIG5vIGFyZ3VtZW50IGlzIGdpdmVuIHRoaXMgcGVyZm9ybXNcbiAqIGEgXCJzdGVwXCIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1R3ZWVufSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihmbil7XG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLnN0ZXAoKTtcbiAgdGhpcy5fdXBkYXRlID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC10d2Vlbi9pbmRleC5qcyIsIlxuLyoqXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufTtcblxuLyoqXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSlcbiAgICAucHVzaChmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIGZ1bmN0aW9uIG9uKCkge1xuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIG9uLmZuID0gZm47XG4gIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgLy8gYWxsXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxuICB2YXIgY2I7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XG5cbiAgaWYgKGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LXR3ZWVuL34vY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJcbi8vIGVhc2luZyBmdW5jdGlvbnMgZnJvbSBcIlR3ZWVuLmpzXCJcblxuZXhwb3J0cy5saW5lYXIgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG47XG59O1xuXG5leHBvcnRzLmluUXVhZCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqIG47XG59O1xuXG5leHBvcnRzLm91dFF1YWQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiAoMiAtIG4pO1xufTtcblxuZXhwb3J0cy5pbk91dFF1YWQgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyO1xuICBpZiAobiA8IDEpIHJldHVybiAwLjUgKiBuICogbjtcbiAgcmV0dXJuIC0gMC41ICogKC0tbiAqIChuIC0gMikgLSAxKTtcbn07XG5cbmV4cG9ydHMuaW5DdWJlID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogbiAqIG47XG59O1xuXG5leHBvcnRzLm91dEN1YmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIC0tbiAqIG4gKiBuICsgMTtcbn07XG5cbmV4cG9ydHMuaW5PdXRDdWJlID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMjtcbiAgaWYgKG4gPCAxKSByZXR1cm4gMC41ICogbiAqIG4gKiBuO1xuICByZXR1cm4gMC41ICogKChuIC09IDIgKSAqIG4gKiBuICsgMik7XG59O1xuXG5leHBvcnRzLmluUXVhcnQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiBuICogbiAqIG47XG59O1xuXG5leHBvcnRzLm91dFF1YXJ0ID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxIC0gKC0tbiAqIG4gKiBuICogbik7XG59O1xuXG5leHBvcnRzLmluT3V0UXVhcnQgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyO1xuICBpZiAobiA8IDEpIHJldHVybiAwLjUgKiBuICogbiAqIG4gKiBuO1xuICByZXR1cm4gLTAuNSAqICgobiAtPSAyKSAqIG4gKiBuICogbiAtIDIpO1xufTtcblxuZXhwb3J0cy5pblF1aW50ID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogbiAqIG4gKiBuICogbjtcbn1cblxuZXhwb3J0cy5vdXRRdWludCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gLS1uICogbiAqIG4gKiBuICogbiArIDE7XG59XG5cbmV4cG9ydHMuaW5PdXRRdWludCA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDI7XG4gIGlmIChuIDwgMSkgcmV0dXJuIDAuNSAqIG4gKiBuICogbiAqIG4gKiBuO1xuICByZXR1cm4gMC41ICogKChuIC09IDIpICogbiAqIG4gKiBuICogbiArIDIpO1xufTtcblxuZXhwb3J0cy5pblNpbmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDEgLSBNYXRoLmNvcyhuICogTWF0aC5QSSAvIDIgKTtcbn07XG5cbmV4cG9ydHMub3V0U2luZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gTWF0aC5zaW4obiAqIE1hdGguUEkgLyAyKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRTaW5lID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIG4pKTtcbn07XG5cbmV4cG9ydHMuaW5FeHBvID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAwID09IG4gPyAwIDogTWF0aC5wb3coMTAyNCwgbiAtIDEpO1xufTtcblxuZXhwb3J0cy5vdXRFeHBvID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxID09IG4gPyBuIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIG4pO1xufTtcblxuZXhwb3J0cy5pbk91dEV4cG8gPSBmdW5jdGlvbihuKXtcbiAgaWYgKDAgPT0gbikgcmV0dXJuIDA7XG4gIGlmICgxID09IG4pIHJldHVybiAxO1xuICBpZiAoKG4gKj0gMikgPCAxKSByZXR1cm4gLjUgKiBNYXRoLnBvdygxMDI0LCBuIC0gMSk7XG4gIHJldHVybiAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKG4gLSAxKSkgKyAyKTtcbn07XG5cbmV4cG9ydHMuaW5DaXJjID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBuICogbik7XG59O1xuXG5leHBvcnRzLm91dENpcmMgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gKC0tbiAqIG4pKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRDaXJjID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMlxuICBpZiAobiA8IDEpIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gbiAqIG4pIC0gMSk7XG4gIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAobiAtPSAyKSAqIG4pICsgMSk7XG59O1xuXG5leHBvcnRzLmluQmFjayA9IGZ1bmN0aW9uKG4pe1xuICB2YXIgcyA9IDEuNzAxNTg7XG4gIHJldHVybiBuICogbiAqICgoIHMgKyAxICkgKiBuIC0gcyk7XG59O1xuXG5leHBvcnRzLm91dEJhY2sgPSBmdW5jdGlvbihuKXtcbiAgdmFyIHMgPSAxLjcwMTU4O1xuICByZXR1cm4gLS1uICogbiAqICgocyArIDEpICogbiArIHMpICsgMTtcbn07XG5cbmV4cG9ydHMuaW5PdXRCYWNrID0gZnVuY3Rpb24obil7XG4gIHZhciBzID0gMS43MDE1OCAqIDEuNTI1O1xuICBpZiAoICggbiAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqICggbiAqIG4gKiAoICggcyArIDEgKSAqIG4gLSBzICkgKTtcbiAgcmV0dXJuIDAuNSAqICggKCBuIC09IDIgKSAqIG4gKiAoICggcyArIDEgKSAqIG4gKyBzICkgKyAyICk7XG59O1xuXG5leHBvcnRzLmluQm91bmNlID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxIC0gZXhwb3J0cy5vdXRCb3VuY2UoMSAtIG4pO1xufTtcblxuZXhwb3J0cy5vdXRCb3VuY2UgPSBmdW5jdGlvbihuKXtcbiAgaWYgKCBuIDwgKCAxIC8gMi43NSApICkge1xuICAgIHJldHVybiA3LjU2MjUgKiBuICogbjtcbiAgfSBlbHNlIGlmICggbiA8ICggMiAvIDIuNzUgKSApIHtcbiAgICByZXR1cm4gNy41NjI1ICogKCBuIC09ICggMS41IC8gMi43NSApICkgKiBuICsgMC43NTtcbiAgfSBlbHNlIGlmICggbiA8ICggMi41IC8gMi43NSApICkge1xuICAgIHJldHVybiA3LjU2MjUgKiAoIG4gLT0gKCAyLjI1IC8gMi43NSApICkgKiBuICsgMC45Mzc1O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA3LjU2MjUgKiAoIG4gLT0gKCAyLjYyNSAvIDIuNzUgKSApICogbiArIDAuOTg0Mzc1O1xuICB9XG59O1xuXG5leHBvcnRzLmluT3V0Qm91bmNlID0gZnVuY3Rpb24obil7XG4gIGlmIChuIDwgLjUpIHJldHVybiBleHBvcnRzLmluQm91bmNlKG4gKiAyKSAqIC41O1xuICByZXR1cm4gZXhwb3J0cy5vdXRCb3VuY2UobiAqIDIgLSAxKSAqIC41ICsgLjU7XG59O1xuXG4vLyBhbGlhc2VzXG5cbmV4cG9ydHNbJ2luLXF1YWQnXSA9IGV4cG9ydHMuaW5RdWFkO1xuZXhwb3J0c1snb3V0LXF1YWQnXSA9IGV4cG9ydHMub3V0UXVhZDtcbmV4cG9ydHNbJ2luLW91dC1xdWFkJ10gPSBleHBvcnRzLmluT3V0UXVhZDtcbmV4cG9ydHNbJ2luLWN1YmUnXSA9IGV4cG9ydHMuaW5DdWJlO1xuZXhwb3J0c1snb3V0LWN1YmUnXSA9IGV4cG9ydHMub3V0Q3ViZTtcbmV4cG9ydHNbJ2luLW91dC1jdWJlJ10gPSBleHBvcnRzLmluT3V0Q3ViZTtcbmV4cG9ydHNbJ2luLXF1YXJ0J10gPSBleHBvcnRzLmluUXVhcnQ7XG5leHBvcnRzWydvdXQtcXVhcnQnXSA9IGV4cG9ydHMub3V0UXVhcnQ7XG5leHBvcnRzWydpbi1vdXQtcXVhcnQnXSA9IGV4cG9ydHMuaW5PdXRRdWFydDtcbmV4cG9ydHNbJ2luLXF1aW50J10gPSBleHBvcnRzLmluUXVpbnQ7XG5leHBvcnRzWydvdXQtcXVpbnQnXSA9IGV4cG9ydHMub3V0UXVpbnQ7XG5leHBvcnRzWydpbi1vdXQtcXVpbnQnXSA9IGV4cG9ydHMuaW5PdXRRdWludDtcbmV4cG9ydHNbJ2luLXNpbmUnXSA9IGV4cG9ydHMuaW5TaW5lO1xuZXhwb3J0c1snb3V0LXNpbmUnXSA9IGV4cG9ydHMub3V0U2luZTtcbmV4cG9ydHNbJ2luLW91dC1zaW5lJ10gPSBleHBvcnRzLmluT3V0U2luZTtcbmV4cG9ydHNbJ2luLWV4cG8nXSA9IGV4cG9ydHMuaW5FeHBvO1xuZXhwb3J0c1snb3V0LWV4cG8nXSA9IGV4cG9ydHMub3V0RXhwbztcbmV4cG9ydHNbJ2luLW91dC1leHBvJ10gPSBleHBvcnRzLmluT3V0RXhwbztcbmV4cG9ydHNbJ2luLWNpcmMnXSA9IGV4cG9ydHMuaW5DaXJjO1xuZXhwb3J0c1snb3V0LWNpcmMnXSA9IGV4cG9ydHMub3V0Q2lyYztcbmV4cG9ydHNbJ2luLW91dC1jaXJjJ10gPSBleHBvcnRzLmluT3V0Q2lyYztcbmV4cG9ydHNbJ2luLWJhY2snXSA9IGV4cG9ydHMuaW5CYWNrO1xuZXhwb3J0c1snb3V0LWJhY2snXSA9IGV4cG9ydHMub3V0QmFjaztcbmV4cG9ydHNbJ2luLW91dC1iYWNrJ10gPSBleHBvcnRzLmluT3V0QmFjaztcbmV4cG9ydHNbJ2luLWJvdW5jZSddID0gZXhwb3J0cy5pbkJvdW5jZTtcbmV4cG9ydHNbJ291dC1ib3VuY2UnXSA9IGV4cG9ydHMub3V0Qm91bmNlO1xuZXhwb3J0c1snaW4tb3V0LWJvdW5jZSddID0gZXhwb3J0cy5pbk91dEJvdW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZWFzZS1jb21wb25lbnQvaW5kZXguanMiLCJ2YXIgc2Nyb2xsID0gcmVxdWlyZSgnc2Nyb2xsLXRvJyk7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVNjcm9sbE9mZnNldChlbGVtLCBhZGRpdGlvbmFsT2Zmc2V0LCBhbGlnbm1lbnQpIHtcbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICB2YXIgZWxlbVJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgY2xpZW50SGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciBkb2N1bWVudEhlaWdodCA9IE1hdGgubWF4KCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCApO1xuXG4gIGFkZGl0aW9uYWxPZmZzZXQgPSBhZGRpdGlvbmFsT2Zmc2V0IHx8IDA7XG5cbiAgdmFyIHNjcm9sbFBvc2l0aW9uO1xuICBpZiAoYWxpZ25tZW50ID09PSAnYm90dG9tJykge1xuICAgIHNjcm9sbFBvc2l0aW9uID0gZWxlbVJlY3QuYm90dG9tIC0gY2xpZW50SGVpZ2h0O1xuICB9IGVsc2UgaWYgKGFsaWdubWVudCA9PT0gJ21pZGRsZScpIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IGVsZW1SZWN0LmJvdHRvbSAtIGNsaWVudEhlaWdodCAvIDIgLSBlbGVtUmVjdC5oZWlnaHQgLyAyO1xuICB9IGVsc2UgeyAvLyB0b3AgYW5kIGRlZmF1bHRcbiAgICBzY3JvbGxQb3NpdGlvbiA9IGVsZW1SZWN0LnRvcDtcbiAgfVxuXG4gIHZhciBtYXhTY3JvbGxQb3NpdGlvbiA9IGRvY3VtZW50SGVpZ2h0IC0gY2xpZW50SGVpZ2h0O1xuICByZXR1cm4gTWF0aC5taW4oc2Nyb2xsUG9zaXRpb24gKyBhZGRpdGlvbmFsT2Zmc2V0ICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgbWF4U2Nyb2xsUG9zaXRpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgaWYgKGVsZW0pIHJldHVybiBzY3JvbGwoMCwgY2FsY3VsYXRlU2Nyb2xsT2Zmc2V0KGVsZW0sIG9wdGlvbnMub2Zmc2V0LCBvcHRpb25zLmFsaWduKSwgb3B0aW9ucyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zY3JvbGwtdG8tZWxlbWVudC9pbmRleC5qcyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgVHdlZW4gPSByZXF1aXJlKCd0d2VlbicpO1xudmFyIHJhZiA9IHJlcXVpcmUoJ3JhZicpO1xuXG4vKipcbiAqIEV4cG9zZSBgc2Nyb2xsVG9gLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gc2Nyb2xsVG87XG5cbi8qKlxuICogU2Nyb2xsIHRvIGAoeCwgeSlgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gKiBAcGFyYW0ge051bWJlcn0geVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzY3JvbGxUbyh4LCB5LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIHN0YXJ0IHBvc2l0aW9uXG4gIHZhciBzdGFydCA9IHNjcm9sbCgpO1xuXG4gIC8vIHNldHVwIHR3ZWVuXG4gIHZhciB0d2VlbiA9IFR3ZWVuKHN0YXJ0KVxuICAgIC5lYXNlKG9wdGlvbnMuZWFzZSB8fCAnb3V0LWNpcmMnKVxuICAgIC50byh7IHRvcDogeSwgbGVmdDogeCB9KVxuICAgIC5kdXJhdGlvbihvcHRpb25zLmR1cmF0aW9uIHx8IDEwMDApO1xuXG4gIC8vIHNjcm9sbFxuICB0d2Vlbi51cGRhdGUoZnVuY3Rpb24obyl7XG4gICAgd2luZG93LnNjcm9sbFRvKG8ubGVmdCB8IDAsIG8udG9wIHwgMCk7XG4gIH0pO1xuXG4gIC8vIGhhbmRsZSBlbmRcbiAgdHdlZW4ub24oJ2VuZCcsIGZ1bmN0aW9uKCl7XG4gICAgYW5pbWF0ZSA9IGZ1bmN0aW9uKCl7fTtcbiAgfSk7XG5cbiAgLy8gYW5pbWF0ZVxuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIHJhZihhbmltYXRlKTtcbiAgICB0d2Vlbi51cGRhdGUoKTtcbiAgfVxuXG4gIGFuaW1hdGUoKTtcbiAgXG4gIHJldHVybiB0d2Vlbjtcbn1cblxuLyoqXG4gKiBSZXR1cm4gc2Nyb2xsIHBvc2l0aW9uLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgdmFyIHkgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgdmFyIHggPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gIHJldHVybiB7IHRvcDogeSwgbGVmdDogeCB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zY3JvbGwtdG8vaW5kZXguanMiLCIvKipcbiAqIHRvU3RyaW5nIHJlZi5cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFJldHVybiB0aGUgdHlwZSBvZiBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwpe1xuICBzd2l0Y2ggKHRvU3RyaW5nLmNhbGwodmFsKSkge1xuICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOiByZXR1cm4gJ2RhdGUnO1xuICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6IHJldHVybiAncmVnZXhwJztcbiAgICBjYXNlICdbb2JqZWN0IEFyZ3VtZW50c10nOiByZXR1cm4gJ2FyZ3VtZW50cyc7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheV0nOiByZXR1cm4gJ2FycmF5JztcbiAgICBjYXNlICdbb2JqZWN0IEVycm9yXSc6IHJldHVybiAnZXJyb3InO1xuICB9XG5cbiAgaWYgKHZhbCA9PT0gbnVsbCkgcmV0dXJuICdudWxsJztcbiAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIGlmICh2YWwgIT09IHZhbCkgcmV0dXJuICduYW4nO1xuICBpZiAodmFsICYmIHZhbC5ub2RlVHlwZSA9PT0gMSkgcmV0dXJuICdlbGVtZW50JztcblxuICB2YWwgPSB2YWwudmFsdWVPZlxuICAgID8gdmFsLnZhbHVlT2YoKVxuICAgIDogT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mLmFwcGx5KHZhbClcblxuICByZXR1cm4gdHlwZW9mIHZhbDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC10eXBlL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==