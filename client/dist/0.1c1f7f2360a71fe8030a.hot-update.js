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

var _reactRedux = __webpack_require__(19);

var _scrollToElement = __webpack_require__(298);

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

var _sendMessage = __webpack_require__(126);

var _sendMessage2 = _interopRequireDefault(_sendMessage);

var _loadMessages2 = __webpack_require__(76);

var _loadMessages3 = _interopRequireDefault(_loadMessages2);

var _api = __webpack_require__(16);

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
      message_error: '',
      selectedGroup: {},
      sendStatus: 'SEND'
    };
    _this.send = _this.send.bind(_this);
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
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var id = location.href.split('/')[location.href.split('/').length - 1];
      (0, _api2.default)(null, '/api/groups/' + id, 'GET').then(function (result) {
        _this2.setState({ selectedGroup: result });
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
      var _this3 = this;

      e.preventDefault();
      var content = this.content,
          priority = this.priority;

      content = content.value.trim();
      priority = priority.value.trim();
      var readBy = [];
      if (content === '' || priority === '') {
        this.setState({ sendStatus: 'SEND...' });
        this.setState({ message_error: 'Error: Message has no priority, sender or content' });
        return;
      }
      var newMessageBody = 'message=' + content + '&from_user=' + JSON.parse(this.props.user).data.username + '\n    &priority=' + priority + '&to_group=' + this.state.selectedGroup.id;
      (0, _api2.default)(newMessageBody, '/api/groups/' + this.state.selectedGroup.id + '/message', 'POST').then(function (response) {
        _this3.setState({ sendStatus: 'SEND' });
        var newMessage = {
          id: response.id,
          message: content,
          from_user: JSON.parse(_this3.props.user).data.username,
          priority: priority.toLowerCase()
        };
        _this3.props.loadMessages(_this3.props.messages.concat([newMessage]));
      });
      this.content.value = '';
      this.scrollPane();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

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
            if (_this4.props.messages.length - 1 === n) {
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
                    '@',
                    message.from_user
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'message-type ' + message.priority.toLowerCase() },
                    message.priority.toLowerCase()
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  message.message
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
                _this4.content = input;
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
                    _this4.priority = input;
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
                { disabled: this.state.loa, className: 'btn btn-primary', onClick: this.send },
                this.state.sendStatus
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
    },
    loadMessages: function loadMessages(allMessages) {
      return dispatch((0, _loadMessages3.default)(allMessages));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9zZW5kTWVzc2FnZS5qcz84OTZhIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanM/MWI4YyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1jbG9uZS9pbmRleC5qcz8wZWM1Iiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXJhZi9pbmRleC5qcz9hZmRhIiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXR3ZWVuL2luZGV4LmpzPzU3ZjIiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtdHdlZW4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcz85ZjM2Iiwid2VicGFjazovLy8uL34vZWFzZS1jb21wb25lbnQvaW5kZXguanM/OTNmNCIsIndlYnBhY2s6Ly8vLi9+L3Njcm9sbC10by1lbGVtZW50L2luZGV4LmpzP2IwOWUiLCJ3ZWJwYWNrOi8vLy4vfi9zY3JvbGwtdG8vaW5kZXguanM/NDMwNCIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC10eXBlL2luZGV4LmpzPzZmNTYiXSwibmFtZXMiOlsic2VuZE1lc3NhZ2UiLCJuZXdNZXNzYWdlIiwidHlwZSIsIk1lc3NhZ2VzIiwicHJvcHMiLCJzdGF0ZSIsIm1lc3NhZ2VfZXJyb3IiLCJzZWxlY3RlZEdyb3VwIiwic2VuZFN0YXR1cyIsInNlbmQiLCJiaW5kIiwib2Zmc2V0IiwiZWFzZSIsImR1cmF0aW9uIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImxlbmd0aCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsInNjcm9sbFBhbmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwicHJpb3JpdHkiLCJ2YWx1ZSIsInRyaW0iLCJyZWFkQnkiLCJuZXdNZXNzYWdlQm9keSIsIkpTT04iLCJwYXJzZSIsInVzZXIiLCJkYXRhIiwidXNlcm5hbWUiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJmcm9tX3VzZXIiLCJ0b0xvd2VyQ2FzZSIsImxvYWRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwiY29uY2F0IiwibiIsIm1hcCIsInNlY29uZENsYXNzIiwiaW5wdXQiLCJsb2EiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWxsTWVzc2FnZXMiLCJyZXF1aXJlIiwiXyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjbG9uZSIsIm9iaiIsImNvcHkiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsIkFycmF5IiwiaSIsImwiLCJmbGFncyIsIm11bHRpbGluZSIsImdsb2JhbCIsImlnbm9yZUNhc2UiLCJSZWdFeHAiLCJzb3VyY2UiLCJEYXRlIiwiZ2V0VGltZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZhbGxiYWNrIiwicHJldiIsImZuIiwiY3VyciIsIm1zIiwiTWF0aCIsIm1heCIsInJlcSIsInNldFRpbWVvdXQiLCJjYW5jZWwiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJjYWxsIiwiRW1pdHRlciIsIlR3ZWVuIiwiX2Zyb20iLCJwcm90b3R5cGUiLCJyZXNldCIsImlzQXJyYXkiLCJfY3VyciIsIl9kb25lIiwiX3N0YXJ0Iiwibm93IiwidG8iLCJfdG8iLCJfZHVyYXRpb24iLCJUeXBlRXJyb3IiLCJfZWFzZSIsInN0b3AiLCJzdG9wcGVkIiwiZW1pdCIsInN0ZXAiLCJkZWx0YSIsImRvbmUiLCJfdXBkYXRlIiwiZnJvbSIsInAiLCJrIiwidXBkYXRlIiwiYXJndW1lbnRzIiwibWl4aW4iLCJvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIl9jYWxsYmFja3MiLCJwdXNoIiwib25jZSIsIm9mZiIsImFwcGx5IiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwiY2IiLCJzcGxpY2UiLCJhcmdzIiwic2xpY2UiLCJsZW4iLCJsaXN0ZW5lcnMiLCJoYXNMaXN0ZW5lcnMiLCJsaW5lYXIiLCJpblF1YWQiLCJvdXRRdWFkIiwiaW5PdXRRdWFkIiwiaW5DdWJlIiwib3V0Q3ViZSIsImluT3V0Q3ViZSIsImluUXVhcnQiLCJvdXRRdWFydCIsImluT3V0UXVhcnQiLCJpblF1aW50Iiwib3V0UXVpbnQiLCJpbk91dFF1aW50IiwiaW5TaW5lIiwiY29zIiwiUEkiLCJvdXRTaW5lIiwic2luIiwiaW5PdXRTaW5lIiwiaW5FeHBvIiwicG93Iiwib3V0RXhwbyIsImluT3V0RXhwbyIsImluQ2lyYyIsInNxcnQiLCJvdXRDaXJjIiwiaW5PdXRDaXJjIiwiaW5CYWNrIiwicyIsIm91dEJhY2siLCJpbk91dEJhY2siLCJpbkJvdW5jZSIsIm91dEJvdW5jZSIsImluT3V0Qm91bmNlIiwic2Nyb2xsIiwiY2FsY3VsYXRlU2Nyb2xsT2Zmc2V0IiwiZWxlbSIsImFkZGl0aW9uYWxPZmZzZXQiLCJhbGlnbm1lbnQiLCJib2R5IiwiZG9jdW1lbnQiLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50IiwiZWxlbVJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRIZWlnaHQiLCJkb2N1bWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsInNjcm9sbFBvc2l0aW9uIiwiYm90dG9tIiwiaGVpZ2h0IiwidG9wIiwibWF4U2Nyb2xsUG9zaXRpb24iLCJtaW4iLCJwYWdlWU9mZnNldCIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yIiwiYWxpZ24iLCJyYWYiLCJzY3JvbGxUbyIsIngiLCJ5Iiwic3RhcnQiLCJ0d2VlbiIsImxlZnQiLCJvIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInRvU3RyaW5nIiwiT2JqZWN0IiwidmFsIiwidW5kZWZpbmVkIiwibm9kZVR5cGUiLCJ2YWx1ZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxVQUFELEVBQWdCO0FBQ2xDLFNBQU87QUFDTEMsVUFBTSxjQUREO0FBRUxEO0FBRkssR0FBUDtBQUlELENBTEQ7O2tCQU9lRCxXOzs7Ozs7Ozs7Ozs7Ozs7O0FDUGY7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1HLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxxQkFBZSxFQURKO0FBRVhDLHFCQUFlLEVBRko7QUFHWEMsa0JBQVk7QUFIRCxLQUFiO0FBS0EsVUFBS0MsSUFBTCxHQUFZLE1BQUtBLElBQUwsQ0FBVUMsSUFBVixPQUFaO0FBUGlCO0FBUWxCOzs7O2lDQUVZO0FBQ1gscUNBQWdCLFNBQWhCLEVBQTJCO0FBQ3pCQyxnQkFBUSxDQUFDLEVBRGdCO0FBRXpCQyxjQUFNLFNBRm1CO0FBR3pCQyxrQkFBVTtBQUhlLE9BQTNCO0FBS0Q7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTUMsS0FBS0MsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCRixTQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJDLE1BQXpCLEdBQWtDLENBQTNELENBQVg7QUFDQSx5QkFBSSxJQUFKLG1CQUF5QkosRUFBekIsRUFBK0IsS0FBL0IsRUFDQ0ssSUFERCxDQUNNLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixlQUFLQyxRQUFMLENBQWMsRUFBRWQsZUFBZWEsTUFBakIsRUFBZDtBQUNELE9BSEQ7QUFJRDs7O3dDQUVtQjtBQUNsQixXQUFLRSxVQUFMO0FBQ0Q7Ozt5QkFFSUMs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V0FBUCxJQUFzQjdCLFNBQVNFLGVBQVQsQ0FBeUI0QixVQUF2RDtBQUNBLFNBQU8sRUFBRWxCLEtBQUtVLENBQVAsRUFBVUcsTUFBTUosQ0FBaEIsRUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ2pFRDs7OztBQUlBLElBQUlVLFdBQVdDLE9BQU9wSCxTQUFQLENBQWlCbUgsUUFBaEM7O0FBRUE7Ozs7Ozs7O0FBUUEzSixPQUFPQyxPQUFQLEdBQWlCLFVBQVM0SixHQUFULEVBQWE7QUFDNUIsVUFBUUYsU0FBU3ZILElBQVQsQ0FBY3lILEdBQWQsQ0FBUjtBQUNFLFNBQUssZUFBTDtBQUFzQixhQUFPLE1BQVA7QUFDdEIsU0FBSyxpQkFBTDtBQUF3QixhQUFPLFFBQVA7QUFDeEIsU0FBSyxvQkFBTDtBQUEyQixhQUFPLFdBQVA7QUFDM0IsU0FBSyxnQkFBTDtBQUF1QixhQUFPLE9BQVA7QUFDdkIsU0FBSyxnQkFBTDtBQUF1QixhQUFPLE9BQVA7QUFMekI7O0FBUUEsTUFBSUEsUUFBUSxJQUFaLEVBQWtCLE9BQU8sTUFBUDtBQUNsQixNQUFJQSxRQUFRQyxTQUFaLEVBQXVCLE9BQU8sV0FBUDtBQUN2QixNQUFJRCxRQUFRQSxHQUFaLEVBQWlCLE9BQU8sS0FBUDtBQUNqQixNQUFJQSxPQUFPQSxJQUFJRSxRQUFKLEtBQWlCLENBQTVCLEVBQStCLE9BQU8sU0FBUDs7QUFFL0JGLFFBQU1BLElBQUlHLE9BQUosR0FDRkgsSUFBSUcsT0FBSixFQURFLEdBRUZKLE9BQU9wSCxTQUFQLENBQWlCd0gsT0FBakIsQ0FBeUJ4RixLQUF6QixDQUErQnFGLEdBQS9CLENBRko7O0FBSUEsZ0JBQWNBLEdBQWQseUNBQWNBLEdBQWQ7QUFDRCxDQW5CRCxDIiwiZmlsZSI6IjAuMWMxZjdmMjM2MGE3MWZlODAzMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlbmRNZXNzYWdlID0gKG5ld01lc3NhZ2UpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnU0VORF9NRVNTQUdFJyxcbiAgICBuZXdNZXNzYWdlXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZW5kTWVzc2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9hY3Rpb25zL3NlbmRNZXNzYWdlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc2Nyb2xsVG9FbGVtZW50IGZyb20gJ3Njcm9sbC10by1lbGVtZW50JztcbmltcG9ydCBzZW5kTWVzc2FnZSBmcm9tICcuLi8uLi9hY3Rpb25zL3NlbmRNZXNzYWdlJztcbmltcG9ydCBsb2FkTWVzc2FnZXMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2FkTWVzc2FnZXMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VfZXJyb3I6ICcnLFxuICAgICAgc2VsZWN0ZWRHcm91cDoge30sXG4gICAgICBzZW5kU3RhdHVzOiAnU0VORCdcbiAgICB9O1xuICAgIHRoaXMuc2VuZCA9IHRoaXMuc2VuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2Nyb2xsUGFuZSgpIHtcbiAgICBzY3JvbGxUb0VsZW1lbnQoJy5zZWNvbmQnLCB7XG4gICAgICBvZmZzZXQ6IC02MCxcbiAgICAgIGVhc2U6ICdpbi1leHBvJyxcbiAgICAgIGR1cmF0aW9uOiA5MDBcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKVtsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJykubGVuZ3RoIC0gMV07XG4gICAgYXBpKG51bGwsIGAvYXBpL2dyb3Vwcy8ke2lkfWAsICdHRVQnKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiByZXN1bHQgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNjcm9sbFBhbmUoKTtcbiAgfVxuXG4gIHNlbmQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgeyBjb250ZW50LCBwcmlvcml0eSB9ID0gdGhpcztcbiAgICBjb250ZW50ID0gY29udGVudC52YWx1ZS50cmltKCk7XG4gICAgcHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgcmVhZEJ5ID0gW107XG4gICAgaWYgKGNvbnRlbnQgPT09ICcnIHx8IHByaW9yaXR5ID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRTdGF0dXM6ICdTRU5ELi4uJyB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlX2Vycm9yOiAnRXJyb3I6IE1lc3NhZ2UgaGFzIG5vIHByaW9yaXR5LCBzZW5kZXIgb3IgY29udGVudCcgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld01lc3NhZ2VCb2R5ID1cbiAgICBgbWVzc2FnZT0ke2NvbnRlbnR9JmZyb21fdXNlcj0ke0pTT04ucGFyc2UodGhpcy5wcm9wcy51c2VyKS5kYXRhLnVzZXJuYW1lfVxuICAgICZwcmlvcml0eT0ke3ByaW9yaXR5fSZ0b19ncm91cD0ke3RoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5pZH1gO1xuICAgIGFwaShuZXdNZXNzYWdlQm9keSwgYC9hcGkvZ3JvdXBzLyR7dGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmlkfS9tZXNzYWdlYCwgJ1BPU1QnKS50aGVuKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kU3RhdHVzOiAnU0VORCcgfSk7XG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XG4gICAgICAgICAgaWQ6IHJlc3BvbnNlLmlkLFxuICAgICAgICAgIG1lc3NhZ2U6IGNvbnRlbnQsXG4gICAgICAgICAgZnJvbV91c2VyOiBKU09OLnBhcnNlKHRoaXMucHJvcHMudXNlcikuZGF0YS51c2VybmFtZSxcbiAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkudG9Mb3dlckNhc2UoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyh0aGlzLnByb3BzLm1lc3NhZ2VzLmNvbmNhdChbbmV3TWVzc2FnZV0pKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuY29udGVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMuc2Nyb2xsUGFuZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBuID0gMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sLW1kLTcgY29sLWxnLTlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIG4gKz0gMTtcbiAgICAgICAgICAgIGxldCBzZWNvbmRDbGFzcyA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoIC0gMSA9PT0gbikge1xuICAgICAgICAgICAgICBzZWNvbmRDbGFzcyA9ICcgc2Vjb25kJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlY29uZENsYXNzID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lc3NhZ2UtY29udGFpbmVyJHtzZWNvbmRDbGFzc31gfSBrZXk9e21lc3NhZ2UuaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVzc2VuZ2VyXCI+QHttZXNzYWdlLmZyb21fdXNlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG1lc3NhZ2UtdHlwZSAke21lc3NhZ2UucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZS5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIHttZXNzYWdlLnJlYWRCeS5sZW5ndGggPT09IDAgPyAnJyA6XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtcmVhZC1saXN0XCI+UmVhZCBieTogPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS5yZWFkQnkuam9pbignLCAnKX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctbWVzc2FnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcGwtMCBwci0wIHBiLTJcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm94XCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuY29udGVudCA9IGlucHV0OyB9fT48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwbC0wIHByLTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LWxldmVsXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJyb3dzZXItZGVmYXVsdFwiIHJlZj17KGlucHV0KSA9PiB7IHRoaXMucHJpb3JpdHkgPSBpbnB1dDsgfX0+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9ybWFsXCI+Tm9ybWFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVXJnZW50XCI+VXJnZW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ3JpdGljYWxcIj5Dcml0aWNhbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPjxidXR0b24gZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNlbmR9Pnt0aGlzLnN0YXRlLnNlbmRTdGF0dXN9PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlckRhdGFcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlbmQ6IG5ld01lc3NhZ2UgPT4gZGlzcGF0Y2goc2VuZE1lc3NhZ2UobmV3TWVzc2FnZSkpLFxuICAgIGxvYWRNZXNzYWdlczogYWxsTWVzc2FnZXMgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKGFsbE1lc3NhZ2VzKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lc3NhZ2VzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanMiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHR5cGU7XG50cnkge1xuICB0eXBlID0gcmVxdWlyZSgnY29tcG9uZW50LXR5cGUnKTtcbn0gY2F0Y2ggKF8pIHtcbiAgdHlwZSA9IHJlcXVpcmUoJ3R5cGUnKTtcbn1cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xuXG4vKipcbiAqIENsb25lcyBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IGFueSBvYmplY3RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY2xvbmUob2JqKXtcbiAgc3dpdGNoICh0eXBlKG9iaikpIHtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgdmFyIGNvcHkgPSB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY29weVtrZXldID0gY2xvbmUob2JqW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29weTtcblxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHZhciBjb3B5ID0gbmV3IEFycmF5KG9iai5sZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvcHlbaV0gPSBjbG9uZShvYmpbaV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvcHk7XG5cbiAgICBjYXNlICdyZWdleHAnOlxuICAgICAgLy8gZnJvbSBtaWxsZXJtZWRlaXJvcy9hbWQtdXRpbHMgLSBNSVRcbiAgICAgIHZhciBmbGFncyA9ICcnO1xuICAgICAgZmxhZ3MgKz0gb2JqLm11bHRpbGluZSA/ICdtJyA6ICcnO1xuICAgICAgZmxhZ3MgKz0gb2JqLmdsb2JhbCA/ICdnJyA6ICcnO1xuICAgICAgZmxhZ3MgKz0gb2JqLmlnbm9yZUNhc2UgPyAnaScgOiAnJztcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKG9iai5zb3VyY2UsIGZsYWdzKTtcblxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIG5ldyBEYXRlKG9iai5nZXRUaW1lKCkpO1xuXG4gICAgZGVmYXVsdDogLy8gc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4sIOKAplxuICAgICAgcmV0dXJuIG9iajtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtY2xvbmUvaW5kZXguanMiLCIvKipcbiAqIEV4cG9zZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKClgLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IGZhbGxiYWNrO1xuXG4vKipcbiAqIEZhbGxiYWNrIGltcGxlbWVudGF0aW9uLlxuICovXG5cbnZhciBwcmV2ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5mdW5jdGlvbiBmYWxsYmFjayhmbikge1xuICB2YXIgY3VyciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB2YXIgbXMgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyIC0gcHJldikpO1xuICB2YXIgcmVxID0gc2V0VGltZW91dChmbiwgbXMpO1xuICBwcmV2ID0gY3VycjtcbiAgcmV0dXJuIHJlcTtcbn1cblxuLyoqXG4gKiBDYW5jZWwuXG4gKi9cblxudmFyIGNhbmNlbCA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy5jbGVhclRpbWVvdXQ7XG5cbmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oaWQpe1xuICBjYW5jZWwuY2FsbCh3aW5kb3csIGlkKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC1yYWYvaW5kZXguanMiLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2VtaXR0ZXInKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJ2Nsb25lJyk7XG52YXIgdHlwZSA9IHJlcXVpcmUoJ3R5cGUnKTtcbnZhciBlYXNlID0gcmVxdWlyZSgnZWFzZScpO1xuXG4vKipcbiAqIEV4cG9zZSBgVHdlZW5gLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgVHdlZW5gIHdpdGggYG9iamAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9ialxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBUd2VlbihvYmopIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFR3ZWVuKSkgcmV0dXJuIG5ldyBUd2VlbihvYmopO1xuICB0aGlzLl9mcm9tID0gb2JqO1xuICB0aGlzLmVhc2UoJ2xpbmVhcicpO1xuICB0aGlzLmR1cmF0aW9uKDUwMCk7XG59XG5cbi8qKlxuICogTWl4aW4gZW1pdHRlci5cbiAqL1xuXG5FbWl0dGVyKFR3ZWVuLnByb3RvdHlwZSk7XG5cbi8qKlxuICogUmVzZXQgdGhlIHR3ZWVuLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5pc0FycmF5ID0gJ2FycmF5JyA9PT0gdHlwZSh0aGlzLl9mcm9tKTtcbiAgdGhpcy5fY3VyciA9IGNsb25lKHRoaXMuX2Zyb20pO1xuICB0aGlzLl9kb25lID0gZmFsc2U7XG4gIHRoaXMuX3N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFR3ZWVuIHRvIGBvYmpgIGFuZCByZXNldCBpbnRlcm5hbCBzdGF0ZS5cbiAqXG4gKiAgICB0d2Vlbi50byh7IHg6IDUwLCB5OiAxMDAgfSlcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqXG4gKiBAcmV0dXJuIHtUd2Vlbn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUudG8gPSBmdW5jdGlvbihvYmope1xuICB0aGlzLnJlc2V0KCk7XG4gIHRoaXMuX3RvID0gb2JqO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGR1cmF0aW9uIHRvIGBtc2AgWzUwMF0uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtUd2Vlbn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbihtcyl7XG4gIHRoaXMuX2R1cmF0aW9uID0gbXM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgZWFzaW5nIGZ1bmN0aW9uIHRvIGBmbmAuXG4gKlxuICogICAgdHdlZW4uZWFzZSgnaW4tb3V0LXNpbmUnKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBmblxuICogQHJldHVybiB7VHdlZW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS5lYXNlID0gZnVuY3Rpb24oZm4pe1xuICBmbiA9ICdmdW5jdGlvbicgPT0gdHlwZW9mIGZuID8gZm4gOiBlYXNlW2ZuXTtcbiAgaWYgKCFmbikgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBlYXNpbmcgZnVuY3Rpb24nKTtcbiAgdGhpcy5fZWFzZSA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3RvcCB0aGUgdHdlZW4gYW5kIGltbWVkaWF0ZWx5IGVtaXQgXCJzdG9wXCIgYW5kIFwiZW5kXCIuXG4gKlxuICogQHJldHVybiB7VHdlZW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgdGhpcy5fZG9uZSA9IHRydWU7XG4gIHRoaXMuZW1pdCgnc3RvcCcpO1xuICB0aGlzLmVtaXQoJ2VuZCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUGVyZm9ybSBhIHN0ZXAuXG4gKlxuICogQHJldHVybiB7VHdlZW59IHNlbGZcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblR3ZWVuLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuX2RvbmUpIHJldHVybjtcblxuICAvLyBkdXJhdGlvblxuICB2YXIgZHVyYXRpb24gPSB0aGlzLl9kdXJhdGlvbjtcbiAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gIHZhciBkZWx0YSA9IG5vdyAtIHRoaXMuX3N0YXJ0O1xuICB2YXIgZG9uZSA9IGRlbHRhID49IGR1cmF0aW9uO1xuXG4gIC8vIGNvbXBsZXRlXG4gIGlmIChkb25lKSB7XG4gICAgdGhpcy5fZnJvbSA9IHRoaXMuX3RvO1xuICAgIHRoaXMuX3VwZGF0ZSh0aGlzLl90byk7XG4gICAgdGhpcy5fZG9uZSA9IHRydWU7XG4gICAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHR3ZWVuXG4gIHZhciBmcm9tID0gdGhpcy5fZnJvbTtcbiAgdmFyIHRvID0gdGhpcy5fdG87XG4gIHZhciBjdXJyID0gdGhpcy5fY3VycjtcbiAgdmFyIGZuID0gdGhpcy5fZWFzZTtcbiAgdmFyIHAgPSAobm93IC0gdGhpcy5fc3RhcnQpIC8gZHVyYXRpb247XG4gIHZhciBuID0gZm4ocCk7XG5cbiAgLy8gYXJyYXlcbiAgaWYgKHRoaXMuaXNBcnJheSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJvbS5sZW5ndGg7ICsraSkge1xuICAgICAgY3VycltpXSA9IGZyb21baV0gKyAodG9baV0gLSBmcm9tW2ldKSAqIG47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlKGN1cnIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gb2JqZWNoXG4gIGZvciAodmFyIGsgaW4gZnJvbSkge1xuICAgIGN1cnJba10gPSBmcm9tW2tdICsgKHRvW2tdIC0gZnJvbVtrXSkgKiBuO1xuICB9XG5cbiAgdGhpcy5fdXBkYXRlKGN1cnIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHVwZGF0ZSBmdW5jdGlvbiB0byBgZm5gIG9yXG4gKiB3aGVuIG5vIGFyZ3VtZW50IGlzIGdpdmVuIHRoaXMgcGVyZm9ybXNcbiAqIGEgXCJzdGVwXCIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1R3ZWVufSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihmbil7XG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLnN0ZXAoKTtcbiAgdGhpcy5fdXBkYXRlID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC10d2Vlbi9pbmRleC5qcyIsIlxuLyoqXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufTtcblxuLyoqXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSlcbiAgICAucHVzaChmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIGZ1bmN0aW9uIG9uKCkge1xuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIG9uLmZuID0gZm47XG4gIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgLy8gYWxsXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxuICB2YXIgY2I7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XG5cbiAgaWYgKGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LXR3ZWVuL34vY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJcbi8vIGVhc2luZyBmdW5jdGlvbnMgZnJvbSBcIlR3ZWVuLmpzXCJcblxuZXhwb3J0cy5saW5lYXIgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG47XG59O1xuXG5leHBvcnRzLmluUXVhZCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqIG47XG59O1xuXG5leHBvcnRzLm91dFF1YWQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiAoMiAtIG4pO1xufTtcblxuZXhwb3J0cy5pbk91dFF1YWQgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyO1xuICBpZiAobiA8IDEpIHJldHVybiAwLjUgKiBuICogbjtcbiAgcmV0dXJuIC0gMC41ICogKC0tbiAqIChuIC0gMikgLSAxKTtcbn07XG5cbmV4cG9ydHMuaW5DdWJlID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogbiAqIG47XG59O1xuXG5leHBvcnRzLm91dEN1YmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIC0tbiAqIG4gKiBuICsgMTtcbn07XG5cbmV4cG9ydHMuaW5PdXRDdWJlID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMjtcbiAgaWYgKG4gPCAxKSByZXR1cm4gMC41ICogbiAqIG4gKiBuO1xuICByZXR1cm4gMC41ICogKChuIC09IDIgKSAqIG4gKiBuICsgMik7XG59O1xuXG5leHBvcnRzLmluUXVhcnQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiBuICogbiAqIG47XG59O1xuXG5leHBvcnRzLm91dFF1YXJ0ID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxIC0gKC0tbiAqIG4gKiBuICogbik7XG59O1xuXG5leHBvcnRzLmluT3V0UXVhcnQgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyO1xuICBpZiAobiA8IDEpIHJldHVybiAwLjUgKiBuICogbiAqIG4gKiBuO1xuICByZXR1cm4gLTAuNSAqICgobiAtPSAyKSAqIG4gKiBuICogbiAtIDIpO1xufTtcblxuZXhwb3J0cy5pblF1aW50ID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogbiAqIG4gKiBuICogbjtcbn1cblxuZXhwb3J0cy5vdXRRdWludCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gLS1uICogbiAqIG4gKiBuICogbiArIDE7XG59XG5cbmV4cG9ydHMuaW5PdXRRdWludCA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDI7XG4gIGlmIChuIDwgMSkgcmV0dXJuIDAuNSAqIG4gKiBuICogbiAqIG4gKiBuO1xuICByZXR1cm4gMC41ICogKChuIC09IDIpICogbiAqIG4gKiBuICogbiArIDIpO1xufTtcblxuZXhwb3J0cy5pblNpbmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDEgLSBNYXRoLmNvcyhuICogTWF0aC5QSSAvIDIgKTtcbn07XG5cbmV4cG9ydHMub3V0U2luZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gTWF0aC5zaW4obiAqIE1hdGguUEkgLyAyKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRTaW5lID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIG4pKTtcbn07XG5cbmV4cG9ydHMuaW5FeHBvID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAwID09IG4gPyAwIDogTWF0aC5wb3coMTAyNCwgbiAtIDEpO1xufTtcblxuZXhwb3J0cy5vdXRFeHBvID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxID09IG4gPyBuIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIG4pO1xufTtcblxuZXhwb3J0cy5pbk91dEV4cG8gPSBmdW5jdGlvbihuKXtcbiAgaWYgKDAgPT0gbikgcmV0dXJuIDA7XG4gIGlmICgxID09IG4pIHJldHVybiAxO1xuICBpZiAoKG4gKj0gMikgPCAxKSByZXR1cm4gLjUgKiBNYXRoLnBvdygxMDI0LCBuIC0gMSk7XG4gIHJldHVybiAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKG4gLSAxKSkgKyAyKTtcbn07XG5cbmV4cG9ydHMuaW5DaXJjID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBuICogbik7XG59O1xuXG5leHBvcnRzLm91dENpcmMgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gKC0tbiAqIG4pKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRDaXJjID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMlxuICBpZiAobiA8IDEpIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gbiAqIG4pIC0gMSk7XG4gIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAobiAtPSAyKSAqIG4pICsgMSk7XG59O1xuXG5leHBvcnRzLmluQmFjayA9IGZ1bmN0aW9uKG4pe1xuICB2YXIgcyA9IDEuNzAxNTg7XG4gIHJldHVybiBuICogbiAqICgoIHMgKyAxICkgKiBuIC0gcyk7XG59O1xuXG5leHBvcnRzLm91dEJhY2sgPSBmdW5jdGlvbihuKXtcbiAgdmFyIHMgPSAxLjcwMTU4O1xuICByZXR1cm4gLS1uICogbiAqICgocyArIDEpICogbiArIHMpICsgMTtcbn07XG5cbmV4cG9ydHMuaW5PdXRCYWNrID0gZnVuY3Rpb24obil7XG4gIHZhciBzID0gMS43MDE1OCAqIDEuNTI1O1xuICBpZiAoICggbiAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqICggbiAqIG4gKiAoICggcyArIDEgKSAqIG4gLSBzICkgKTtcbiAgcmV0dXJuIDAuNSAqICggKCBuIC09IDIgKSAqIG4gKiAoICggcyArIDEgKSAqIG4gKyBzICkgKyAyICk7XG59O1xuXG5leHBvcnRzLmluQm91bmNlID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxIC0gZXhwb3J0cy5vdXRCb3VuY2UoMSAtIG4pO1xufTtcblxuZXhwb3J0cy5vdXRCb3VuY2UgPSBmdW5jdGlvbihuKXtcbiAgaWYgKCBuIDwgKCAxIC8gMi43NSApICkge1xuICAgIHJldHVybiA3LjU2MjUgKiBuICogbjtcbiAgfSBlbHNlIGlmICggbiA8ICggMiAvIDIuNzUgKSApIHtcbiAgICByZXR1cm4gNy41NjI1ICogKCBuIC09ICggMS41IC8gMi43NSApICkgKiBuICsgMC43NTtcbiAgfSBlbHNlIGlmICggbiA8ICggMi41IC8gMi43NSApICkge1xuICAgIHJldHVybiA3LjU2MjUgKiAoIG4gLT0gKCAyLjI1IC8gMi43NSApICkgKiBuICsgMC45Mzc1O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA3LjU2MjUgKiAoIG4gLT0gKCAyLjYyNSAvIDIuNzUgKSApICogbiArIDAuOTg0Mzc1O1xuICB9XG59O1xuXG5leHBvcnRzLmluT3V0Qm91bmNlID0gZnVuY3Rpb24obil7XG4gIGlmIChuIDwgLjUpIHJldHVybiBleHBvcnRzLmluQm91bmNlKG4gKiAyKSAqIC41O1xuICByZXR1cm4gZXhwb3J0cy5vdXRCb3VuY2UobiAqIDIgLSAxKSAqIC41ICsgLjU7XG59O1xuXG4vLyBhbGlhc2VzXG5cbmV4cG9ydHNbJ2luLXF1YWQnXSA9IGV4cG9ydHMuaW5RdWFkO1xuZXhwb3J0c1snb3V0LXF1YWQnXSA9IGV4cG9ydHMub3V0UXVhZDtcbmV4cG9ydHNbJ2luLW91dC1xdWFkJ10gPSBleHBvcnRzLmluT3V0UXVhZDtcbmV4cG9ydHNbJ2luLWN1YmUnXSA9IGV4cG9ydHMuaW5DdWJlO1xuZXhwb3J0c1snb3V0LWN1YmUnXSA9IGV4cG9ydHMub3V0Q3ViZTtcbmV4cG9ydHNbJ2luLW91dC1jdWJlJ10gPSBleHBvcnRzLmluT3V0Q3ViZTtcbmV4cG9ydHNbJ2luLXF1YXJ0J10gPSBleHBvcnRzLmluUXVhcnQ7XG5leHBvcnRzWydvdXQtcXVhcnQnXSA9IGV4cG9ydHMub3V0UXVhcnQ7XG5leHBvcnRzWydpbi1vdXQtcXVhcnQnXSA9IGV4cG9ydHMuaW5PdXRRdWFydDtcbmV4cG9ydHNbJ2luLXF1aW50J10gPSBleHBvcnRzLmluUXVpbnQ7XG5leHBvcnRzWydvdXQtcXVpbnQnXSA9IGV4cG9ydHMub3V0UXVpbnQ7XG5leHBvcnRzWydpbi1vdXQtcXVpbnQnXSA9IGV4cG9ydHMuaW5PdXRRdWludDtcbmV4cG9ydHNbJ2luLXNpbmUnXSA9IGV4cG9ydHMuaW5TaW5lO1xuZXhwb3J0c1snb3V0LXNpbmUnXSA9IGV4cG9ydHMub3V0U2luZTtcbmV4cG9ydHNbJ2luLW91dC1zaW5lJ10gPSBleHBvcnRzLmluT3V0U2luZTtcbmV4cG9ydHNbJ2luLWV4cG8nXSA9IGV4cG9ydHMuaW5FeHBvO1xuZXhwb3J0c1snb3V0LWV4cG8nXSA9IGV4cG9ydHMub3V0RXhwbztcbmV4cG9ydHNbJ2luLW91dC1leHBvJ10gPSBleHBvcnRzLmluT3V0RXhwbztcbmV4cG9ydHNbJ2luLWNpcmMnXSA9IGV4cG9ydHMuaW5DaXJjO1xuZXhwb3J0c1snb3V0LWNpcmMnXSA9IGV4cG9ydHMub3V0Q2lyYztcbmV4cG9ydHNbJ2luLW91dC1jaXJjJ10gPSBleHBvcnRzLmluT3V0Q2lyYztcbmV4cG9ydHNbJ2luLWJhY2snXSA9IGV4cG9ydHMuaW5CYWNrO1xuZXhwb3J0c1snb3V0LWJhY2snXSA9IGV4cG9ydHMub3V0QmFjaztcbmV4cG9ydHNbJ2luLW91dC1iYWNrJ10gPSBleHBvcnRzLmluT3V0QmFjaztcbmV4cG9ydHNbJ2luLWJvdW5jZSddID0gZXhwb3J0cy5pbkJvdW5jZTtcbmV4cG9ydHNbJ291dC1ib3VuY2UnXSA9IGV4cG9ydHMub3V0Qm91bmNlO1xuZXhwb3J0c1snaW4tb3V0LWJvdW5jZSddID0gZXhwb3J0cy5pbk91dEJvdW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZWFzZS1jb21wb25lbnQvaW5kZXguanMiLCJ2YXIgc2Nyb2xsID0gcmVxdWlyZSgnc2Nyb2xsLXRvJyk7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVNjcm9sbE9mZnNldChlbGVtLCBhZGRpdGlvbmFsT2Zmc2V0LCBhbGlnbm1lbnQpIHtcbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICB2YXIgZWxlbVJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgY2xpZW50SGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciBkb2N1bWVudEhlaWdodCA9IE1hdGgubWF4KCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCApO1xuXG4gIGFkZGl0aW9uYWxPZmZzZXQgPSBhZGRpdGlvbmFsT2Zmc2V0IHx8IDA7XG5cbiAgdmFyIHNjcm9sbFBvc2l0aW9uO1xuICBpZiAoYWxpZ25tZW50ID09PSAnYm90dG9tJykge1xuICAgIHNjcm9sbFBvc2l0aW9uID0gZWxlbVJlY3QuYm90dG9tIC0gY2xpZW50SGVpZ2h0O1xuICB9IGVsc2UgaWYgKGFsaWdubWVudCA9PT0gJ21pZGRsZScpIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IGVsZW1SZWN0LmJvdHRvbSAtIGNsaWVudEhlaWdodCAvIDIgLSBlbGVtUmVjdC5oZWlnaHQgLyAyO1xuICB9IGVsc2UgeyAvLyB0b3AgYW5kIGRlZmF1bHRcbiAgICBzY3JvbGxQb3NpdGlvbiA9IGVsZW1SZWN0LnRvcDtcbiAgfVxuXG4gIHZhciBtYXhTY3JvbGxQb3NpdGlvbiA9IGRvY3VtZW50SGVpZ2h0IC0gY2xpZW50SGVpZ2h0O1xuICByZXR1cm4gTWF0aC5taW4oc2Nyb2xsUG9zaXRpb24gKyBhZGRpdGlvbmFsT2Zmc2V0ICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgbWF4U2Nyb2xsUG9zaXRpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgaWYgKGVsZW0pIHJldHVybiBzY3JvbGwoMCwgY2FsY3VsYXRlU2Nyb2xsT2Zmc2V0KGVsZW0sIG9wdGlvbnMub2Zmc2V0LCBvcHRpb25zLmFsaWduKSwgb3B0aW9ucyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zY3JvbGwtdG8tZWxlbWVudC9pbmRleC5qcyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgVHdlZW4gPSByZXF1aXJlKCd0d2VlbicpO1xudmFyIHJhZiA9IHJlcXVpcmUoJ3JhZicpO1xuXG4vKipcbiAqIEV4cG9zZSBgc2Nyb2xsVG9gLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gc2Nyb2xsVG87XG5cbi8qKlxuICogU2Nyb2xsIHRvIGAoeCwgeSlgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gKiBAcGFyYW0ge051bWJlcn0geVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzY3JvbGxUbyh4LCB5LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIHN0YXJ0IHBvc2l0aW9uXG4gIHZhciBzdGFydCA9IHNjcm9sbCgpO1xuXG4gIC8vIHNldHVwIHR3ZWVuXG4gIHZhciB0d2VlbiA9IFR3ZWVuKHN0YXJ0KVxuICAgIC5lYXNlKG9wdGlvbnMuZWFzZSB8fCAnb3V0LWNpcmMnKVxuICAgIC50byh7IHRvcDogeSwgbGVmdDogeCB9KVxuICAgIC5kdXJhdGlvbihvcHRpb25zLmR1cmF0aW9uIHx8IDEwMDApO1xuXG4gIC8vIHNjcm9sbFxuICB0d2Vlbi51cGRhdGUoZnVuY3Rpb24obyl7XG4gICAgd2luZG93LnNjcm9sbFRvKG8ubGVmdCB8IDAsIG8udG9wIHwgMCk7XG4gIH0pO1xuXG4gIC8vIGhhbmRsZSBlbmRcbiAgdHdlZW4ub24oJ2VuZCcsIGZ1bmN0aW9uKCl7XG4gICAgYW5pbWF0ZSA9IGZ1bmN0aW9uKCl7fTtcbiAgfSk7XG5cbiAgLy8gYW5pbWF0ZVxuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIHJhZihhbmltYXRlKTtcbiAgICB0d2Vlbi51cGRhdGUoKTtcbiAgfVxuXG4gIGFuaW1hdGUoKTtcbiAgXG4gIHJldHVybiB0d2Vlbjtcbn1cblxuLyoqXG4gKiBSZXR1cm4gc2Nyb2xsIHBvc2l0aW9uLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgdmFyIHkgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgdmFyIHggPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gIHJldHVybiB7IHRvcDogeSwgbGVmdDogeCB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zY3JvbGwtdG8vaW5kZXguanMiLCIvKipcbiAqIHRvU3RyaW5nIHJlZi5cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFJldHVybiB0aGUgdHlwZSBvZiBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwpe1xuICBzd2l0Y2ggKHRvU3RyaW5nLmNhbGwodmFsKSkge1xuICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOiByZXR1cm4gJ2RhdGUnO1xuICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6IHJldHVybiAncmVnZXhwJztcbiAgICBjYXNlICdbb2JqZWN0IEFyZ3VtZW50c10nOiByZXR1cm4gJ2FyZ3VtZW50cyc7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheV0nOiByZXR1cm4gJ2FycmF5JztcbiAgICBjYXNlICdbb2JqZWN0IEVycm9yXSc6IHJldHVybiAnZXJyb3InO1xuICB9XG5cbiAgaWYgKHZhbCA9PT0gbnVsbCkgcmV0dXJuICdudWxsJztcbiAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIGlmICh2YWwgIT09IHZhbCkgcmV0dXJuICduYW4nO1xuICBpZiAodmFsICYmIHZhbC5ub2RlVHlwZSA9PT0gMSkgcmV0dXJuICdlbGVtZW50JztcblxuICB2YWwgPSB2YWwudmFsdWVPZlxuICAgID8gdmFsLnZhbHVlT2YoKVxuICAgIDogT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mLmFwcGx5KHZhbClcblxuICByZXR1cm4gdHlwZW9mIHZhbDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC10eXBlL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==