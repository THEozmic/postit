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

var _scrollToElement = __webpack_require__(299);

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

var _sendMessage = __webpack_require__(126);

var _sendMessage2 = _interopRequireDefault(_sendMessage);

var _loadMessages = __webpack_require__(76);

var _loadMessages2 = _interopRequireDefault(_loadMessages);

var _api = __webpack_require__(13);

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
      (0, _api2.default)('', '/api/groups/' + id + '/read', 'POST');
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
      var readBy = '';
      if (content === '' || priority === '') {
        this.setState({ message_error: 'Error: Message has no priority, sender or content' });
        return;
      }

      this.setState({ sendStatus: 'SEND...' });
      var newMessageBody = 'message=' + content + '&priority=' + priority + '&to_group=' + this.state.selectedGroup.id;
      (0, _api2.default)(newMessageBody, '/api/groups/' + this.state.selectedGroup.id + '/message', 'POST').then(function (response) {
        _this3.setState({ sendStatus: 'SEND' });
        var newMessage = {
          id: response.id,
          message: content,
          from_user: JSON.parse(_this3.props.user).data.username,
          priority: priority.toLowerCase(),
          readBy: readBy
        };
        var newMessages = _this3.props.messages.concat([newMessage]);
        _this3.props.loadMessages(newMessages);
        console.log('NEW MESSAGE:::::', newMessage);
        console.log('ALL MESSAGES:::::', newMessages);
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
                ),
                message.readBy === '' && message.readBy.length === 0 ? '' : _react2.default.createElement(
                  'div',
                  { className: 'message-read-list' },
                  'Read by: ',
                  _react2.default.createElement(
                    'span',
                    null,
                    '@',
                    message.readBy.split(',').join(', @')
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
                { disabled: this.state.sendStatus === 'SEND...', className: 'btn btn-primary', onClick: this.send },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9zZW5kTWVzc2FnZS5qcz84OTZhIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanM/MWI4YyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1jbG9uZS9pbmRleC5qcz8wZWM1Iiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXJhZi9pbmRleC5qcz9hZmRhIiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXR3ZWVuL2luZGV4LmpzPzU3ZjIiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtdHdlZW4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcz85ZjM2Iiwid2VicGFjazovLy8uL34vZWFzZS1jb21wb25lbnQvaW5kZXguanM/OTNmNCIsIndlYnBhY2s6Ly8vLi9+L3Njcm9sbC10by1lbGVtZW50L2luZGV4LmpzP2IwOWUiLCJ3ZWJwYWNrOi8vLy4vfi9zY3JvbGwtdG8vaW5kZXguanM/NDMwNCIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC10eXBlL2luZGV4LmpzPzZmNTYiXSwibmFtZXMiOlsic2VuZE1lc3NhZ2UiLCJuZXdNZXNzYWdlIiwidHlwZSIsIk1lc3NhZ2VzIiwicHJvcHMiLCJzdGF0ZSIsIm1lc3NhZ2VfZXJyb3IiLCJzZWxlY3RlZEdyb3VwIiwic2VuZFN0YXR1cyIsInNlbmQiLCJiaW5kIiwib2Zmc2V0IiwiZWFzZSIsImR1cmF0aW9uIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImxlbmd0aCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsInNjcm9sbFBhbmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwicHJpb3JpdHkiLCJ2YWx1ZSIsInRyaW0iLCJyZWFkQnkiLCJuZXdNZXNzYWdlQm9keSIsInJlc3BvbnNlIiwibWVzc2FnZSIsImZyb21fdXNlciIsIkpTT04iLCJwYXJzZSIsInVzZXIiLCJkYXRhIiwidXNlcm5hbWUiLCJ0b0xvd2VyQ2FzZSIsIm5ld01lc3NhZ2VzIiwibWVzc2FnZXMiLCJjb25jYXQiLCJsb2FkTWVzc2FnZXMiLCJjb25zb2xlIiwibG9nIiwibiIsIm1hcCIsInNlY29uZENsYXNzIiwiam9pbiIsImlucHV0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInJlcXVpcmUiLCJfIiwibW9kdWxlIiwiZXhwb3J0cyIsImNsb25lIiwib2JqIiwiY29weSIsImtleSIsImhhc093blByb3BlcnR5IiwiQXJyYXkiLCJpIiwibCIsImZsYWdzIiwibXVsdGlsaW5lIiwiZ2xvYmFsIiwiaWdub3JlQ2FzZSIsIlJlZ0V4cCIsInNvdXJjZSIsIkRhdGUiLCJnZXRUaW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZmFsbGJhY2siLCJwcmV2IiwiZm4iLCJjdXJyIiwibXMiLCJNYXRoIiwibWF4IiwicmVxIiwic2V0VGltZW91dCIsImNhbmNlbCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsImNhbGwiLCJFbWl0dGVyIiwiVHdlZW4iLCJfZnJvbSIsInByb3RvdHlwZSIsInJlc2V0IiwiaXNBcnJheSIsIl9jdXJyIiwiX2RvbmUiLCJfc3RhcnQiLCJub3ciLCJ0byIsIl90byIsIl9kdXJhdGlvbiIsIlR5cGVFcnJvciIsIl9lYXNlIiwic3RvcCIsInN0b3BwZWQiLCJlbWl0Iiwic3RlcCIsImRlbHRhIiwiZG9uZSIsIl91cGRhdGUiLCJmcm9tIiwicCIsImsiLCJ1cGRhdGUiLCJhcmd1bWVudHMiLCJtaXhpbiIsIm9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiX2NhbGxiYWNrcyIsInB1c2giLCJvbmNlIiwib2ZmIiwiYXBwbHkiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYWxsYmFja3MiLCJjYiIsInNwbGljZSIsImFyZ3MiLCJzbGljZSIsImxlbiIsImxpc3RlbmVycyIsImhhc0xpc3RlbmVycyIsImxpbmVhciIsImluUXVhZCIsIm91dFF1YWQiLCJpbk91dFF1YWQiLCJpbkN1YmUiLCJvdXRDdWJlIiwiaW5PdXRDdWJlIiwiaW5RdWFydCIsIm91dFF1YXJ0IiwiaW5PdXRRdWFydCIsImluUXVpbnQiLCJvdXRRdWludCIsImluT3V0UXVpbnQiLCJpblNpbmUiLCJjb3MiLCJQSSIsIm91dFNpbmUiLCJzaW4iLCJpbk91dFNpbmUiLCJpbkV4cG8iLCJwb3ciLCJvdXRFeHBvIiwiaW5PdXRFeHBvIiwiaW5DaXJjIiwic3FydCIsIm91dENpcmMiLCJpbk91dENpcmMiLCJpbkJhY2siLCJzIiwib3V0QmFjayIsImluT3V0QmFjayIsImluQm91bmNlIiwib3V0Qm91bmNlIiwiaW5PdXRCb3VuY2UiLCJzY3JvbGwiLCJjYWxjdWxhdGVTY3JvbGxPZmZzZXQiLCJlbGVtIiwiYWRkaXRpb25hbE9mZnNldCIsImFsaWdubWVudCIsImJvZHkiLCJkb2N1bWVudCIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJlbGVtUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudEhlaWdodCIsImRvY3VtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsUG9zaXRpb24iLCJib3R0b20iLCJoZWlnaHQiLCJ0b3AiLCJtYXhTY3JvbGxQb3NpdGlvbiIsIm1pbiIsInBhZ2VZT2Zmc2V0Iiwib3B0aW9ucyIsInF1ZXJ5U2VsZWN0b3IiLCJhbGlnbiIsInJhZiIsInNjcm9sbFRvIiwieCIsInkiLCJzdGFydCIsInR3ZWVuIiwibGVmdCIsIm8iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwicGFnZVhPZmZzZXQiLCJzY3JvbGxMZWZ0IiwidG9TdHJpbmciLCJPYmplY3QiLCJ2YWwiLCJ1bmRlZmluZWQiLCJub2RlVHlwZSIsInZhbHVlT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLFVBQUQsRUFBZ0I7QUFDbEMsU0FBTztBQUNMQyxVQUFNLGNBREQ7QUFFTEQ7QUFGSyxHQUFQO0FBSUQsQ0FMRDs7a0JBT2VELFc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQZjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUcsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlLEVBREo7QUFFWEMscUJBQWUsRUFGSjtBQUdYQyxrQkFBWTtBQUhELEtBQWI7QUFLQSxVQUFLQyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVQyxJQUFWLE9BQVo7QUFQaUI7QUFRbEI7Ozs7aUNBRVk7QUFDWCxxQ0FBZ0IsU0FBaEIsRUFBMkI7QUFDekJDLGdCQUFRLENBQUMsRUFEZ0I7QUFFekJDLGNBQU0sU0FGbUI7QUFHekJDLGtCQUFVO0FBSGUsT0FBM0I7QUFLRDs7O3lDQUVvQjtBQUFBOztBQUNuQixVQUFNQyxLQUFLQyxTQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJGLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QkMsTUFBekIsR0FBa0MsQ0FBM0QsQ0FBWDtBQUNBLHlCQUFJLElBQUosbUJBQXlCSixFQUF6QixFQUErQixLQUEvQixFQUNDSyxJQURELENBQ00sVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCLGVBQUtDLFFBQUwsQ0FBYyxFQUFFZCxlQUFlYSxNQUFqQixFQUFkO0FBQ0QsT0FIRDtBQUlBLHlCQUFJLEVBQUosbUJBQXVCTixFQUF2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SixHQUNGSCxJQUFJRyxPQUFKLEVBREUsR0FFRkosT0FBT3BILFNBQVAsQ0FBaUJ3SCxPQUFqQixDQUF5QnhGLEtBQXpCLENBQStCcUYsR0FBL0IsQ0FGSjs7QUFJQSxnQkFBY0EsR0FBZCx5Q0FBY0EsR0FBZDtBQUNELENBbkJELEMiLCJmaWxlIjoiMC5iMDE2ZjA4NGIzOTE0YjdmZjk3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VuZE1lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTRU5EX01FU1NBR0UnLFxuICAgIG5ld01lc3NhZ2VcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FjdGlvbnMvc2VuZE1lc3NhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzY3JvbGxUb0VsZW1lbnQgZnJvbSAnc2Nyb2xsLXRvLWVsZW1lbnQnO1xuaW1wb3J0IHNlbmRNZXNzYWdlIGZyb20gJy4uLy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2UnO1xuaW1wb3J0IGxvYWRNZXNzYWdlcyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvYWRNZXNzYWdlcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgTWVzc2FnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZV9lcnJvcjogJycsXG4gICAgICBzZWxlY3RlZEdyb3VwOiB7fSxcbiAgICAgIHNlbmRTdGF0dXM6ICdTRU5EJ1xuICAgIH07XG4gICAgdGhpcy5zZW5kID0gdGhpcy5zZW5kLmJpbmQodGhpcyk7XG4gIH1cblxuICBzY3JvbGxQYW5lKCkge1xuICAgIHNjcm9sbFRvRWxlbWVudCgnLnNlY29uZCcsIHtcbiAgICAgIG9mZnNldDogLTYwLFxuICAgICAgZWFzZTogJ2luLWV4cG8nLFxuICAgICAgZHVyYXRpb246IDkwMFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGlkID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpW2xvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5sZW5ndGggLSAxXTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHJlc3VsdCB9KTtcbiAgICB9KTtcbiAgICBhcGkoJycsIGAvYXBpL2dyb3Vwcy8ke2lkfS9yZWFkYCwgJ1BPU1QnKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2Nyb2xsUGFuZSgpO1xuICB9XG5cbiAgc2VuZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB7IGNvbnRlbnQsIHByaW9yaXR5IH0gPSB0aGlzO1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnZhbHVlLnRyaW0oKTtcbiAgICBwcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCByZWFkQnkgPSAnJztcbiAgICBpZiAoY29udGVudCA9PT0gJycgfHwgcHJpb3JpdHkgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZV9lcnJvcjogJ0Vycm9yOiBNZXNzYWdlIGhhcyBubyBwcmlvcml0eSwgc2VuZGVyIG9yIGNvbnRlbnQnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kU3RhdHVzOiAnU0VORC4uLicgfSk7XG4gICAgY29uc3QgbmV3TWVzc2FnZUJvZHkgPVxuICAgIGBtZXNzYWdlPSR7Y29udGVudH0mcHJpb3JpdHk9JHtwcmlvcml0eX0mdG9fZ3JvdXA9JHt0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuaWR9YDtcbiAgICBhcGkobmV3TWVzc2FnZUJvZHksIGAvYXBpL2dyb3Vwcy8ke3RoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5pZH0vbWVzc2FnZWAsXG4gICAgJ1BPU1QnKS50aGVuKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kU3RhdHVzOiAnU0VORCcgfSk7XG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XG4gICAgICAgICAgaWQ6IHJlc3BvbnNlLmlkLFxuICAgICAgICAgIG1lc3NhZ2U6IGNvbnRlbnQsXG4gICAgICAgICAgZnJvbV91c2VyOiBKU09OLnBhcnNlKHRoaXMucHJvcHMudXNlcikuZGF0YS51c2VybmFtZSxcbiAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICByZWFkQnlcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3TWVzc2FnZXMgPSB0aGlzLnByb3BzLm1lc3NhZ2VzLmNvbmNhdChbbmV3TWVzc2FnZV0pO1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyhuZXdNZXNzYWdlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdORVcgTUVTU0FHRTo6Ojo6JywgbmV3TWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBTEwgTUVTU0FHRVM6Ojo6OicsIG5ld01lc3NhZ2VzKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuY29udGVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMuc2Nyb2xsUGFuZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBuID0gMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sLW1kLTcgY29sLWxnLTlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIG4gKz0gMTtcbiAgICAgICAgICAgIGxldCBzZWNvbmRDbGFzcyA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoIC0gMSA9PT0gbikge1xuICAgICAgICAgICAgICBzZWNvbmRDbGFzcyA9ICcgc2Vjb25kJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlY29uZENsYXNzID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lc3NhZ2UtY29udGFpbmVyJHtzZWNvbmRDbGFzc31gfSBrZXk9e21lc3NhZ2UuaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVzc2VuZ2VyXCI+QHttZXNzYWdlLmZyb21fdXNlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG1lc3NhZ2UtdHlwZSAke21lc3NhZ2UucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZS5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgIHsgbWVzc2FnZS5yZWFkQnkgPT09ICcnICYmIG1lc3NhZ2UucmVhZEJ5Lmxlbmd0aCA9PT0gMCA/ICcnIDpcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1yZWFkLWxpc3RcIj5SZWFkIGJ5OiA8c3Bhbj5AXG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS5yZWFkQnkuc3BsaXQoJywnKS5qb2luKCcsIEAnKX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwbC0wIHByLTAgcGItMlwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibWVzc2FnZS1ib3hcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5jb250ZW50ID0gaW5wdXQ7IH19PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHBsLTAgcHItMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaW9yaXR5LWxldmVsXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJicm93c2VyLWRlZmF1bHRcIiByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnByaW9yaXR5ID0gaW5wdXQ7IH19PlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vcm1hbFwiPk5vcm1hbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVyZ2VudFwiPlVyZ2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNyaXRpY2FsXCI+Q3JpdGljYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj48YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnNlbmRTdGF0dXMgPT09ICdTRU5ELi4uJ30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5zZW5kfT57dGhpcy5zdGF0ZS5zZW5kU3RhdHVzfTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kOiBuZXdNZXNzYWdlID0+IGRpc3BhdGNoKHNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lc3NhZ2VzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanMiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHR5cGU7XG50cnkge1xuICB0eXBlID0gcmVxdWlyZSgnY29tcG9uZW50LXR5cGUnKTtcbn0gY2F0Y2ggKF8pIHtcbiAgdHlwZSA9IHJlcXVpcmUoJ3R5cGUnKTtcbn1cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xuXG4vKipcbiAqIENsb25lcyBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IGFueSBvYmplY3RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY2xvbmUob2JqKXtcbiAgc3dpdGNoICh0eXBlKG9iaikpIHtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgdmFyIGNvcHkgPSB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY29weVtrZXldID0gY2xvbmUob2JqW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29weTtcblxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHZhciBjb3B5ID0gbmV3IEFycmF5KG9iai5sZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvcHlbaV0gPSBjbG9uZShvYmpbaV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvcHk7XG5cbiAgICBjYXNlICdyZWdleHAnOlxuICAgICAgLy8gZnJvbSBtaWxsZXJtZWRlaXJvcy9hbWQtdXRpbHMgLSBNSVRcbiAgICAgIHZhciBmbGFncyA9ICcnO1xuICAgICAgZmxhZ3MgKz0gb2JqLm11bHRpbGluZSA/ICdtJyA6ICcnO1xuICAgICAgZmxhZ3MgKz0gb2JqLmdsb2JhbCA/ICdnJyA6ICcnO1xuICAgICAgZmxhZ3MgKz0gb2JqLmlnbm9yZUNhc2UgPyAnaScgOiAnJztcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKG9iai5zb3VyY2UsIGZsYWdzKTtcblxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIG5ldyBEYXRlKG9iai5nZXRUaW1lKCkpO1xuXG4gICAgZGVmYXVsdDogLy8gc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4sIOKAplxuICAgICAgcmV0dXJuIG9iajtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtY2xvbmUvaW5kZXguanMiLCIvKipcbiAqIEV4cG9zZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKClgLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IGZhbGxiYWNrO1xuXG4vKipcbiAqIEZhbGxiYWNrIGltcGxlbWVudGF0aW9uLlxuICovXG5cbnZhciBwcmV2ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5mdW5jdGlvbiBmYWxsYmFjayhmbikge1xuICB2YXIgY3VyciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB2YXIgbXMgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyIC0gcHJldikpO1xuICB2YXIgcmVxID0gc2V0VGltZW91dChmbiwgbXMpO1xuICBwcmV2ID0gY3VycjtcbiAgcmV0dXJuIHJlcTtcbn1cblxuLyoqXG4gKiBDYW5jZWwuXG4gKi9cblxudmFyIGNhbmNlbCA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy5jbGVhclRpbWVvdXQ7XG5cbmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oaWQpe1xuICBjYW5jZWwuY2FsbCh3aW5kb3csIGlkKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC1yYWYvaW5kZXguanMiLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2VtaXR0ZXInKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJ2Nsb25lJyk7XG52YXIgdHlwZSA9IHJlcXVpcmUoJ3R5cGUnKTtcbnZhciBlYXNlID0gcmVxdWlyZSgnZWFzZScpO1xuXG4vKipcbiAqIEV4cG9zZSBgVHdlZW5gLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgVHdlZW5gIHdpdGggYG9iamAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9ialxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBUd2VlbihvYmopIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFR3ZWVuKSkgcmV0dXJuIG5ldyBUd2VlbihvYmopO1xuICB0aGlzLl9mcm9tID0gb2JqO1xuICB0aGlzLmVhc2UoJ2xpbmVhcicpO1xuICB0aGlzLmR1cmF0aW9uKDUwMCk7XG59XG5cbi8qKlxuICogTWl4aW4gZW1pdHRlci5cbiAqL1xuXG5FbWl0dGVyKFR3ZWVuLnByb3RvdHlwZSk7XG5cbi8qKlxuICogUmVzZXQgdGhlIHR3ZWVuLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5pc0FycmF5ID0gJ2FycmF5JyA9PT0gdHlwZSh0aGlzLl9mcm9tKTtcbiAgdGhpcy5fY3VyciA9IGNsb25lKHRoaXMuX2Zyb20pO1xuICB0aGlzLl9kb25lID0gZmFsc2U7XG4gIHRoaXMuX3N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFR3ZWVuIHRvIGBvYmpgIGFuZCByZXNldCBpbnRlcm5hbCBzdGF0ZS5cbiAqXG4gKiAgICB0d2Vlbi50byh7IHg6IDUwLCB5OiAxMDAgfSlcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqXG4gKiBAcmV0dXJuIHtUd2Vlbn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUudG8gPSBmdW5jdGlvbihvYmope1xuICB0aGlzLnJlc2V0KCk7XG4gIHRoaXMuX3RvID0gb2JqO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGR1cmF0aW9uIHRvIGBtc2AgWzUwMF0uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtUd2Vlbn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbihtcyl7XG4gIHRoaXMuX2R1cmF0aW9uID0gbXM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgZWFzaW5nIGZ1bmN0aW9uIHRvIGBmbmAuXG4gKlxuICogICAgdHdlZW4uZWFzZSgnaW4tb3V0LXNpbmUnKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBmblxuICogQHJldHVybiB7VHdlZW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS5lYXNlID0gZnVuY3Rpb24oZm4pe1xuICBmbiA9ICdmdW5jdGlvbicgPT0gdHlwZW9mIGZuID8gZm4gOiBlYXNlW2ZuXTtcbiAgaWYgKCFmbikgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBlYXNpbmcgZnVuY3Rpb24nKTtcbiAgdGhpcy5fZWFzZSA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3RvcCB0aGUgdHdlZW4gYW5kIGltbWVkaWF0ZWx5IGVtaXQgXCJzdG9wXCIgYW5kIFwiZW5kXCIuXG4gKlxuICogQHJldHVybiB7VHdlZW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgdGhpcy5fZG9uZSA9IHRydWU7XG4gIHRoaXMuZW1pdCgnc3RvcCcpO1xuICB0aGlzLmVtaXQoJ2VuZCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUGVyZm9ybSBhIHN0ZXAuXG4gKlxuICogQHJldHVybiB7VHdlZW59IHNlbGZcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblR3ZWVuLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuX2RvbmUpIHJldHVybjtcblxuICAvLyBkdXJhdGlvblxuICB2YXIgZHVyYXRpb24gPSB0aGlzLl9kdXJhdGlvbjtcbiAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gIHZhciBkZWx0YSA9IG5vdyAtIHRoaXMuX3N0YXJ0O1xuICB2YXIgZG9uZSA9IGRlbHRhID49IGR1cmF0aW9uO1xuXG4gIC8vIGNvbXBsZXRlXG4gIGlmIChkb25lKSB7XG4gICAgdGhpcy5fZnJvbSA9IHRoaXMuX3RvO1xuICAgIHRoaXMuX3VwZGF0ZSh0aGlzLl90byk7XG4gICAgdGhpcy5fZG9uZSA9IHRydWU7XG4gICAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHR3ZWVuXG4gIHZhciBmcm9tID0gdGhpcy5fZnJvbTtcbiAgdmFyIHRvID0gdGhpcy5fdG87XG4gIHZhciBjdXJyID0gdGhpcy5fY3VycjtcbiAgdmFyIGZuID0gdGhpcy5fZWFzZTtcbiAgdmFyIHAgPSAobm93IC0gdGhpcy5fc3RhcnQpIC8gZHVyYXRpb247XG4gIHZhciBuID0gZm4ocCk7XG5cbiAgLy8gYXJyYXlcbiAgaWYgKHRoaXMuaXNBcnJheSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJvbS5sZW5ndGg7ICsraSkge1xuICAgICAgY3VycltpXSA9IGZyb21baV0gKyAodG9baV0gLSBmcm9tW2ldKSAqIG47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlKGN1cnIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gb2JqZWNoXG4gIGZvciAodmFyIGsgaW4gZnJvbSkge1xuICAgIGN1cnJba10gPSBmcm9tW2tdICsgKHRvW2tdIC0gZnJvbVtrXSkgKiBuO1xuICB9XG5cbiAgdGhpcy5fdXBkYXRlKGN1cnIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHVwZGF0ZSBmdW5jdGlvbiB0byBgZm5gIG9yXG4gKiB3aGVuIG5vIGFyZ3VtZW50IGlzIGdpdmVuIHRoaXMgcGVyZm9ybXNcbiAqIGEgXCJzdGVwXCIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1R3ZWVufSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihmbil7XG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLnN0ZXAoKTtcbiAgdGhpcy5fdXBkYXRlID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC10d2Vlbi9pbmRleC5qcyIsIlxuLyoqXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufTtcblxuLyoqXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSlcbiAgICAucHVzaChmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIGZ1bmN0aW9uIG9uKCkge1xuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIG9uLmZuID0gZm47XG4gIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgLy8gYWxsXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxuICB2YXIgY2I7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XG5cbiAgaWYgKGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LXR3ZWVuL34vY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJcbi8vIGVhc2luZyBmdW5jdGlvbnMgZnJvbSBcIlR3ZWVuLmpzXCJcblxuZXhwb3J0cy5saW5lYXIgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG47XG59O1xuXG5leHBvcnRzLmluUXVhZCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqIG47XG59O1xuXG5leHBvcnRzLm91dFF1YWQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiAoMiAtIG4pO1xufTtcblxuZXhwb3J0cy5pbk91dFF1YWQgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyO1xuICBpZiAobiA8IDEpIHJldHVybiAwLjUgKiBuICogbjtcbiAgcmV0dXJuIC0gMC41ICogKC0tbiAqIChuIC0gMikgLSAxKTtcbn07XG5cbmV4cG9ydHMuaW5DdWJlID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogbiAqIG47XG59O1xuXG5leHBvcnRzLm91dEN1YmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIC0tbiAqIG4gKiBuICsgMTtcbn07XG5cbmV4cG9ydHMuaW5PdXRDdWJlID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMjtcbiAgaWYgKG4gPCAxKSByZXR1cm4gMC41ICogbiAqIG4gKiBuO1xuICByZXR1cm4gMC41ICogKChuIC09IDIgKSAqIG4gKiBuICsgMik7XG59O1xuXG5leHBvcnRzLmluUXVhcnQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiBuICogbiAqIG47XG59O1xuXG5leHBvcnRzLm91dFF1YXJ0ID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxIC0gKC0tbiAqIG4gKiBuICogbik7XG59O1xuXG5leHBvcnRzLmluT3V0UXVhcnQgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyO1xuICBpZiAobiA8IDEpIHJldHVybiAwLjUgKiBuICogbiAqIG4gKiBuO1xuICByZXR1cm4gLTAuNSAqICgobiAtPSAyKSAqIG4gKiBuICogbiAtIDIpO1xufTtcblxuZXhwb3J0cy5pblF1aW50ID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogbiAqIG4gKiBuICogbjtcbn1cblxuZXhwb3J0cy5vdXRRdWludCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gLS1uICogbiAqIG4gKiBuICogbiArIDE7XG59XG5cbmV4cG9ydHMuaW5PdXRRdWludCA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDI7XG4gIGlmIChuIDwgMSkgcmV0dXJuIDAuNSAqIG4gKiBuICogbiAqIG4gKiBuO1xuICByZXR1cm4gMC41ICogKChuIC09IDIpICogbiAqIG4gKiBuICogbiArIDIpO1xufTtcblxuZXhwb3J0cy5pblNpbmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDEgLSBNYXRoLmNvcyhuICogTWF0aC5QSSAvIDIgKTtcbn07XG5cbmV4cG9ydHMub3V0U2luZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gTWF0aC5zaW4obiAqIE1hdGguUEkgLyAyKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRTaW5lID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIG4pKTtcbn07XG5cbmV4cG9ydHMuaW5FeHBvID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAwID09IG4gPyAwIDogTWF0aC5wb3coMTAyNCwgbiAtIDEpO1xufTtcblxuZXhwb3J0cy5vdXRFeHBvID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxID09IG4gPyBuIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIG4pO1xufTtcblxuZXhwb3J0cy5pbk91dEV4cG8gPSBmdW5jdGlvbihuKXtcbiAgaWYgKDAgPT0gbikgcmV0dXJuIDA7XG4gIGlmICgxID09IG4pIHJldHVybiAxO1xuICBpZiAoKG4gKj0gMikgPCAxKSByZXR1cm4gLjUgKiBNYXRoLnBvdygxMDI0LCBuIC0gMSk7XG4gIHJldHVybiAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKG4gLSAxKSkgKyAyKTtcbn07XG5cbmV4cG9ydHMuaW5DaXJjID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBuICogbik7XG59O1xuXG5leHBvcnRzLm91dENpcmMgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gKC0tbiAqIG4pKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRDaXJjID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMlxuICBpZiAobiA8IDEpIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gbiAqIG4pIC0gMSk7XG4gIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAobiAtPSAyKSAqIG4pICsgMSk7XG59O1xuXG5leHBvcnRzLmluQmFjayA9IGZ1bmN0aW9uKG4pe1xuICB2YXIgcyA9IDEuNzAxNTg7XG4gIHJldHVybiBuICogbiAqICgoIHMgKyAxICkgKiBuIC0gcyk7XG59O1xuXG5leHBvcnRzLm91dEJhY2sgPSBmdW5jdGlvbihuKXtcbiAgdmFyIHMgPSAxLjcwMTU4O1xuICByZXR1cm4gLS1uICogbiAqICgocyArIDEpICogbiArIHMpICsgMTtcbn07XG5cbmV4cG9ydHMuaW5PdXRCYWNrID0gZnVuY3Rpb24obil7XG4gIHZhciBzID0gMS43MDE1OCAqIDEuNTI1O1xuICBpZiAoICggbiAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqICggbiAqIG4gKiAoICggcyArIDEgKSAqIG4gLSBzICkgKTtcbiAgcmV0dXJuIDAuNSAqICggKCBuIC09IDIgKSAqIG4gKiAoICggcyArIDEgKSAqIG4gKyBzICkgKyAyICk7XG59O1xuXG5leHBvcnRzLmluQm91bmNlID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxIC0gZXhwb3J0cy5vdXRCb3VuY2UoMSAtIG4pO1xufTtcblxuZXhwb3J0cy5vdXRCb3VuY2UgPSBmdW5jdGlvbihuKXtcbiAgaWYgKCBuIDwgKCAxIC8gMi43NSApICkge1xuICAgIHJldHVybiA3LjU2MjUgKiBuICogbjtcbiAgfSBlbHNlIGlmICggbiA8ICggMiAvIDIuNzUgKSApIHtcbiAgICByZXR1cm4gNy41NjI1ICogKCBuIC09ICggMS41IC8gMi43NSApICkgKiBuICsgMC43NTtcbiAgfSBlbHNlIGlmICggbiA8ICggMi41IC8gMi43NSApICkge1xuICAgIHJldHVybiA3LjU2MjUgKiAoIG4gLT0gKCAyLjI1IC8gMi43NSApICkgKiBuICsgMC45Mzc1O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA3LjU2MjUgKiAoIG4gLT0gKCAyLjYyNSAvIDIuNzUgKSApICogbiArIDAuOTg0Mzc1O1xuICB9XG59O1xuXG5leHBvcnRzLmluT3V0Qm91bmNlID0gZnVuY3Rpb24obil7XG4gIGlmIChuIDwgLjUpIHJldHVybiBleHBvcnRzLmluQm91bmNlKG4gKiAyKSAqIC41O1xuICByZXR1cm4gZXhwb3J0cy5vdXRCb3VuY2UobiAqIDIgLSAxKSAqIC41ICsgLjU7XG59O1xuXG4vLyBhbGlhc2VzXG5cbmV4cG9ydHNbJ2luLXF1YWQnXSA9IGV4cG9ydHMuaW5RdWFkO1xuZXhwb3J0c1snb3V0LXF1YWQnXSA9IGV4cG9ydHMub3V0UXVhZDtcbmV4cG9ydHNbJ2luLW91dC1xdWFkJ10gPSBleHBvcnRzLmluT3V0UXVhZDtcbmV4cG9ydHNbJ2luLWN1YmUnXSA9IGV4cG9ydHMuaW5DdWJlO1xuZXhwb3J0c1snb3V0LWN1YmUnXSA9IGV4cG9ydHMub3V0Q3ViZTtcbmV4cG9ydHNbJ2luLW91dC1jdWJlJ10gPSBleHBvcnRzLmluT3V0Q3ViZTtcbmV4cG9ydHNbJ2luLXF1YXJ0J10gPSBleHBvcnRzLmluUXVhcnQ7XG5leHBvcnRzWydvdXQtcXVhcnQnXSA9IGV4cG9ydHMub3V0UXVhcnQ7XG5leHBvcnRzWydpbi1vdXQtcXVhcnQnXSA9IGV4cG9ydHMuaW5PdXRRdWFydDtcbmV4cG9ydHNbJ2luLXF1aW50J10gPSBleHBvcnRzLmluUXVpbnQ7XG5leHBvcnRzWydvdXQtcXVpbnQnXSA9IGV4cG9ydHMub3V0UXVpbnQ7XG5leHBvcnRzWydpbi1vdXQtcXVpbnQnXSA9IGV4cG9ydHMuaW5PdXRRdWludDtcbmV4cG9ydHNbJ2luLXNpbmUnXSA9IGV4cG9ydHMuaW5TaW5lO1xuZXhwb3J0c1snb3V0LXNpbmUnXSA9IGV4cG9ydHMub3V0U2luZTtcbmV4cG9ydHNbJ2luLW91dC1zaW5lJ10gPSBleHBvcnRzLmluT3V0U2luZTtcbmV4cG9ydHNbJ2luLWV4cG8nXSA9IGV4cG9ydHMuaW5FeHBvO1xuZXhwb3J0c1snb3V0LWV4cG8nXSA9IGV4cG9ydHMub3V0RXhwbztcbmV4cG9ydHNbJ2luLW91dC1leHBvJ10gPSBleHBvcnRzLmluT3V0RXhwbztcbmV4cG9ydHNbJ2luLWNpcmMnXSA9IGV4cG9ydHMuaW5DaXJjO1xuZXhwb3J0c1snb3V0LWNpcmMnXSA9IGV4cG9ydHMub3V0Q2lyYztcbmV4cG9ydHNbJ2luLW91dC1jaXJjJ10gPSBleHBvcnRzLmluT3V0Q2lyYztcbmV4cG9ydHNbJ2luLWJhY2snXSA9IGV4cG9ydHMuaW5CYWNrO1xuZXhwb3J0c1snb3V0LWJhY2snXSA9IGV4cG9ydHMub3V0QmFjaztcbmV4cG9ydHNbJ2luLW91dC1iYWNrJ10gPSBleHBvcnRzLmluT3V0QmFjaztcbmV4cG9ydHNbJ2luLWJvdW5jZSddID0gZXhwb3J0cy5pbkJvdW5jZTtcbmV4cG9ydHNbJ291dC1ib3VuY2UnXSA9IGV4cG9ydHMub3V0Qm91bmNlO1xuZXhwb3J0c1snaW4tb3V0LWJvdW5jZSddID0gZXhwb3J0cy5pbk91dEJvdW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZWFzZS1jb21wb25lbnQvaW5kZXguanMiLCJ2YXIgc2Nyb2xsID0gcmVxdWlyZSgnc2Nyb2xsLXRvJyk7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVNjcm9sbE9mZnNldChlbGVtLCBhZGRpdGlvbmFsT2Zmc2V0LCBhbGlnbm1lbnQpIHtcbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICB2YXIgZWxlbVJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgY2xpZW50SGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciBkb2N1bWVudEhlaWdodCA9IE1hdGgubWF4KCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCApO1xuXG4gIGFkZGl0aW9uYWxPZmZzZXQgPSBhZGRpdGlvbmFsT2Zmc2V0IHx8IDA7XG5cbiAgdmFyIHNjcm9sbFBvc2l0aW9uO1xuICBpZiAoYWxpZ25tZW50ID09PSAnYm90dG9tJykge1xuICAgIHNjcm9sbFBvc2l0aW9uID0gZWxlbVJlY3QuYm90dG9tIC0gY2xpZW50SGVpZ2h0O1xuICB9IGVsc2UgaWYgKGFsaWdubWVudCA9PT0gJ21pZGRsZScpIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IGVsZW1SZWN0LmJvdHRvbSAtIGNsaWVudEhlaWdodCAvIDIgLSBlbGVtUmVjdC5oZWlnaHQgLyAyO1xuICB9IGVsc2UgeyAvLyB0b3AgYW5kIGRlZmF1bHRcbiAgICBzY3JvbGxQb3NpdGlvbiA9IGVsZW1SZWN0LnRvcDtcbiAgfVxuXG4gIHZhciBtYXhTY3JvbGxQb3NpdGlvbiA9IGRvY3VtZW50SGVpZ2h0IC0gY2xpZW50SGVpZ2h0O1xuICByZXR1cm4gTWF0aC5taW4oc2Nyb2xsUG9zaXRpb24gKyBhZGRpdGlvbmFsT2Zmc2V0ICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgbWF4U2Nyb2xsUG9zaXRpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgaWYgKGVsZW0pIHJldHVybiBzY3JvbGwoMCwgY2FsY3VsYXRlU2Nyb2xsT2Zmc2V0KGVsZW0sIG9wdGlvbnMub2Zmc2V0LCBvcHRpb25zLmFsaWduKSwgb3B0aW9ucyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zY3JvbGwtdG8tZWxlbWVudC9pbmRleC5qcyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgVHdlZW4gPSByZXF1aXJlKCd0d2VlbicpO1xudmFyIHJhZiA9IHJlcXVpcmUoJ3JhZicpO1xuXG4vKipcbiAqIEV4cG9zZSBgc2Nyb2xsVG9gLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gc2Nyb2xsVG87XG5cbi8qKlxuICogU2Nyb2xsIHRvIGAoeCwgeSlgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gKiBAcGFyYW0ge051bWJlcn0geVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzY3JvbGxUbyh4LCB5LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIHN0YXJ0IHBvc2l0aW9uXG4gIHZhciBzdGFydCA9IHNjcm9sbCgpO1xuXG4gIC8vIHNldHVwIHR3ZWVuXG4gIHZhciB0d2VlbiA9IFR3ZWVuKHN0YXJ0KVxuICAgIC5lYXNlKG9wdGlvbnMuZWFzZSB8fCAnb3V0LWNpcmMnKVxuICAgIC50byh7IHRvcDogeSwgbGVmdDogeCB9KVxuICAgIC5kdXJhdGlvbihvcHRpb25zLmR1cmF0aW9uIHx8IDEwMDApO1xuXG4gIC8vIHNjcm9sbFxuICB0d2Vlbi51cGRhdGUoZnVuY3Rpb24obyl7XG4gICAgd2luZG93LnNjcm9sbFRvKG8ubGVmdCB8IDAsIG8udG9wIHwgMCk7XG4gIH0pO1xuXG4gIC8vIGhhbmRsZSBlbmRcbiAgdHdlZW4ub24oJ2VuZCcsIGZ1bmN0aW9uKCl7XG4gICAgYW5pbWF0ZSA9IGZ1bmN0aW9uKCl7fTtcbiAgfSk7XG5cbiAgLy8gYW5pbWF0ZVxuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIHJhZihhbmltYXRlKTtcbiAgICB0d2Vlbi51cGRhdGUoKTtcbiAgfVxuXG4gIGFuaW1hdGUoKTtcbiAgXG4gIHJldHVybiB0d2Vlbjtcbn1cblxuLyoqXG4gKiBSZXR1cm4gc2Nyb2xsIHBvc2l0aW9uLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgdmFyIHkgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgdmFyIHggPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gIHJldHVybiB7IHRvcDogeSwgbGVmdDogeCB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zY3JvbGwtdG8vaW5kZXguanMiLCIvKipcbiAqIHRvU3RyaW5nIHJlZi5cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFJldHVybiB0aGUgdHlwZSBvZiBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwpe1xuICBzd2l0Y2ggKHRvU3RyaW5nLmNhbGwodmFsKSkge1xuICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOiByZXR1cm4gJ2RhdGUnO1xuICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6IHJldHVybiAncmVnZXhwJztcbiAgICBjYXNlICdbb2JqZWN0IEFyZ3VtZW50c10nOiByZXR1cm4gJ2FyZ3VtZW50cyc7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheV0nOiByZXR1cm4gJ2FycmF5JztcbiAgICBjYXNlICdbb2JqZWN0IEVycm9yXSc6IHJldHVybiAnZXJyb3InO1xuICB9XG5cbiAgaWYgKHZhbCA9PT0gbnVsbCkgcmV0dXJuICdudWxsJztcbiAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIGlmICh2YWwgIT09IHZhbCkgcmV0dXJuICduYW4nO1xuICBpZiAodmFsICYmIHZhbC5ub2RlVHlwZSA9PT0gMSkgcmV0dXJuICdlbGVtZW50JztcblxuICB2YWwgPSB2YWwudmFsdWVPZlxuICAgID8gdmFsLnZhbHVlT2YoKVxuICAgIDogT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mLmFwcGx5KHZhbClcblxuICByZXR1cm4gdHlwZW9mIHZhbDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC10eXBlL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==