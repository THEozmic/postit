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
      var newMessageBody = 'message=' + content + '&from_user=' + JSON.parse(this.props.user).data.username + '&priority=' + priority + '&to_group=' + this.state.selectedGroup.id;
      (0, _api2.default)(newMessageBody, '/api/groups/' + this.state.selectedGroup.id + '/message', 'POST').then(function (response) {
        _this3.setState({ sendStatus: 'SEND' });
        var newMessage = {
          id: response.id,
          message: content,
          from_user: JSON.parse(_this3.props.user).data.username,
          priority: priority.toLowerCase(),
          readBy: readBy
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
                ),
                message.readBy === '' && message.readBy.length === 0 ? '' : _react2.default.createElement(
                  'div',
                  { className: 'message-read-list' },
                  'Read by: ',
                  _react2.default.createElement(
                    'span',
                    null,
                    message.readBy.split(',').map(function (username) {
                      return '@' + username + ',';
                    }).join(',').split()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9zZW5kTWVzc2FnZS5qcz84OTZhIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanM/MWI4YyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1jbG9uZS9pbmRleC5qcz8wZWM1Iiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXJhZi9pbmRleC5qcz9hZmRhIiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXR3ZWVuL2luZGV4LmpzPzU3ZjIiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtdHdlZW4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcz85ZjM2Iiwid2VicGFjazovLy8uL34vZWFzZS1jb21wb25lbnQvaW5kZXguanM/OTNmNCIsIndlYnBhY2s6Ly8vLi9+L3Njcm9sbC10by1lbGVtZW50L2luZGV4LmpzP2IwOWUiLCJ3ZWJwYWNrOi8vLy4vfi9zY3JvbGwtdG8vaW5kZXguanM/NDMwNCIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC10eXBlL2luZGV4LmpzPzZmNTYiXSwibmFtZXMiOlsic2VuZE1lc3NhZ2UiLCJuZXdNZXNzYWdlIiwidHlwZSIsIk1lc3NhZ2VzIiwicHJvcHMiLCJzdGF0ZSIsIm1lc3NhZ2VfZXJyb3IiLCJzZWxlY3RlZEdyb3VwIiwic2VuZFN0YXR1cyIsInNlbmQiLCJiaW5kIiwib2Zmc2V0IiwiZWFzZSIsImR1cmF0aW9uIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImxlbmd0aCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsInNjcm9sbFBhbmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwicHJpb3JpdHkiLCJ2YWx1ZSIsInRyaW0iLCJyZWFkQnkiLCJuZXdNZXNzYWdlQm9keSIsIkpTT04iLCJwYXJzZSIsInVzZXIiLCJkYXRhIiwidXNlcm5hbWUiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJmcm9tX3VzZXIiLCJ0b0xvd2VyQ2FzZSIsImxvYWRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwiY29uY2F0IiwibiIsIm1hcCIsInNlY29uZENsYXNzIiwiam9pbiIsImlucHV0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFsbE1lc3NhZ2VzIiwicmVxdWlyZSIsIl8iLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xvbmUiLCJvYmoiLCJjb3B5Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJBcnJheSIsImkiLCJsIiwiZmxhZ3MiLCJtdWx0aWxpbmUiLCJnbG9iYWwiLCJpZ25vcmVDYXNlIiwiUmVnRXhwIiwic291cmNlIiwiRGF0ZSIsImdldFRpbWUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmYWxsYmFjayIsInByZXYiLCJmbiIsImN1cnIiLCJtcyIsIk1hdGgiLCJtYXgiLCJyZXEiLCJzZXRUaW1lb3V0IiwiY2FuY2VsIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiY2FsbCIsIkVtaXR0ZXIiLCJUd2VlbiIsIl9mcm9tIiwicHJvdG90eXBlIiwicmVzZXQiLCJpc0FycmF5IiwiX2N1cnIiLCJfZG9uZSIsIl9zdGFydCIsIm5vdyIsInRvIiwiX3RvIiwiX2R1cmF0aW9uIiwiVHlwZUVycm9yIiwiX2Vhc2UiLCJzdG9wIiwic3RvcHBlZCIsImVtaXQiLCJzdGVwIiwiZGVsdGEiLCJkb25lIiwiX3VwZGF0ZSIsImZyb20iLCJwIiwiayIsInVwZGF0ZSIsImFyZ3VtZW50cyIsIm1peGluIiwib24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJfY2FsbGJhY2tzIiwicHVzaCIsIm9uY2UiLCJvZmYiLCJhcHBseSIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrcyIsImNiIiwic3BsaWNlIiwiYXJncyIsInNsaWNlIiwibGVuIiwibGlzdGVuZXJzIiwiaGFzTGlzdGVuZXJzIiwibGluZWFyIiwiaW5RdWFkIiwib3V0UXVhZCIsImluT3V0UXVhZCIsImluQ3ViZSIsIm91dEN1YmUiLCJpbk91dEN1YmUiLCJpblF1YXJ0Iiwib3V0UXVhcnQiLCJpbk91dFF1YXJ0IiwiaW5RdWludCIsIm91dFF1aW50IiwiaW5PdXRRdWludCIsImluU2luZSIsImNvcyIsIlBJIiwib3V0U2luZSIsInNpbiIsImluT3V0U2luZSIsImluRXhwbyIsInBvdyIsIm91dEV4cG8iLCJpbk91dEV4cG8iLCJpbkNpcmMiLCJzcXJ0Iiwib3V0Q2lyYyIsImluT3V0Q2lyYyIsImluQmFjayIsInMiLCJvdXRCYWNrIiwiaW5PdXRCYWNrIiwiaW5Cb3VuY2UiLCJvdXRCb3VuY2UiLCJpbk91dEJvdW5jZSIsInNjcm9sbCIsImNhbGN1bGF0ZVNjcm9sbE9mZnNldCIsImVsZW0iLCJhZGRpdGlvbmFsT2Zmc2V0IiwiYWxpZ25tZW50IiwiYm9keSIsImRvY3VtZW50IiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsImVsZW1SZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50SGVpZ2h0IiwiZG9jdW1lbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxQb3NpdGlvbiIsImJvdHRvbSIsImhlaWdodCIsInRvcCIsIm1heFNjcm9sbFBvc2l0aW9uIiwibWluIiwicGFnZVlPZmZzZXQiLCJvcHRpb25zIiwicXVlcnlTZWxlY3RvciIsImFsaWduIiwicmFmIiwic2Nyb2xsVG8iLCJ4IiwieSIsInN0YXJ0IiwidHdlZW4iLCJsZWZ0IiwibyIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJwYWdlWE9mZnNldCIsInNjcm9sbExlZnQiLCJ0b1N0cmluZyIsIk9iamVjdCIsInZhbCIsInVuZGVmaW5lZCIsIm5vZGVUeXBlIiwidmFsdWVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNsQyxTQUFPO0FBQ0xDLFVBQU0sY0FERDtBQUVMRDtBQUZLLEdBQVA7QUFJRCxDQUxEOztrQkFPZUQsVzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BmOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNRyxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMscUJBQWUsRUFESjtBQUVYQyxxQkFBZSxFQUZKO0FBR1hDLGtCQUFZO0FBSEQsS0FBYjtBQUtBLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVDLElBQVYsT0FBWjtBQVBpQjtBQVFsQjs7OztpQ0FFWTtBQUNYLHFDQUFnQixTQUFoQixFQUEyQjtBQUN6QkMsZ0JBQVEsQ0FBQyxFQURnQjtBQUV6QkMsY0FBTSxTQUZtQjtBQUd6QkMsa0JBQVU7QUFIZSxPQUEzQjtBQUtEOzs7eUNBRW9CO0FBQUE7O0FBQ25CLFVBQU1DLEtBQUtDLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QkYsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCQyxNQUF6QixHQUFrQyxDQUEzRCxDQUFYO0FBQ0EseUJBQUksSUFBSixtQkFBeUJKLEVBQXpCLEVBQStCLEtBQS9CLEVBQ0NLLElBREQsQ0FDTSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsZUFBS0MsUUFBTCxDQUFjLEVBQUVkLGVBQWVhLE1BQWpCLEVBQWQ7QUFDRCxPQUhEO0FBSUEseUJBQUksRUFBSixtQkFBdUJOLEVBQXZCLFlBQWtDLE1BQWxDO0FB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LE1BQUlBLE9BQU9BLElBQUlFLFFBQUosS0FBaUIsQ0FBNUIsRUFBK0IsT0FBTyxTQUFQOztBQUUvQkYsUUFBTUEsSUFBSUcsT0FBSixHQUNGSCxJQUFJRyxPQUFKLEVBREUsR0FFRkosT0FBT3BILFNBQVAsQ0FBaUJ3SCxPQUFqQixDQUF5QnhGLEtBQXpCLENBQStCcUYsR0FBL0IsQ0FGSjs7QUFJQSxnQkFBY0EsR0FBZCx5Q0FBY0EsR0FBZDtBQUNELENBbkJELEMiLCJmaWxlIjoiMC4zNzMyZTUzNmE4ZDJkZWRmMDA1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VuZE1lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTRU5EX01FU1NBR0UnLFxuICAgIG5ld01lc3NhZ2VcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FjdGlvbnMvc2VuZE1lc3NhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzY3JvbGxUb0VsZW1lbnQgZnJvbSAnc2Nyb2xsLXRvLWVsZW1lbnQnO1xuaW1wb3J0IHNlbmRNZXNzYWdlIGZyb20gJy4uLy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2UnO1xuaW1wb3J0IGxvYWRNZXNzYWdlcyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvYWRNZXNzYWdlcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgTWVzc2FnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZV9lcnJvcjogJycsXG4gICAgICBzZWxlY3RlZEdyb3VwOiB7fSxcbiAgICAgIHNlbmRTdGF0dXM6ICdTRU5EJ1xuICAgIH07XG4gICAgdGhpcy5zZW5kID0gdGhpcy5zZW5kLmJpbmQodGhpcyk7XG4gIH1cblxuICBzY3JvbGxQYW5lKCkge1xuICAgIHNjcm9sbFRvRWxlbWVudCgnLnNlY29uZCcsIHtcbiAgICAgIG9mZnNldDogLTYwLFxuICAgICAgZWFzZTogJ2luLWV4cG8nLFxuICAgICAgZHVyYXRpb246IDkwMFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGlkID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpW2xvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5sZW5ndGggLSAxXTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHJlc3VsdCB9KTtcbiAgICB9KTtcbiAgICBhcGkoJycsIGAvYXBpL2dyb3Vwcy8ke2lkfS9yZWFkYCwgJ1BPU1QnKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2Nyb2xsUGFuZSgpO1xuICB9XG5cbiAgc2VuZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB7IGNvbnRlbnQsIHByaW9yaXR5IH0gPSB0aGlzO1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnZhbHVlLnRyaW0oKTtcbiAgICBwcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCByZWFkQnkgPSAnJztcbiAgICBpZiAoY29udGVudCA9PT0gJycgfHwgcHJpb3JpdHkgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZV9lcnJvcjogJ0Vycm9yOiBNZXNzYWdlIGhhcyBubyBwcmlvcml0eSwgc2VuZGVyIG9yIGNvbnRlbnQnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kU3RhdHVzOiAnU0VORC4uLicgfSk7XG4gICAgY29uc3QgbmV3TWVzc2FnZUJvZHkgPVxuICAgIGBtZXNzYWdlPSR7Y29udGVudH0mZnJvbV91c2VyPSR7SlNPTi5wYXJzZSh0aGlzLnByb3BzLnVzZXIpLmRhdGEudXNlcm5hbWV9JnByaW9yaXR5PSR7cHJpb3JpdHl9JnRvX2dyb3VwPSR7dGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmlkfWA7XG4gICAgYXBpKG5ld01lc3NhZ2VCb2R5LCBgL2FwaS9ncm91cHMvJHt0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuaWR9L21lc3NhZ2VgLCAnUE9TVCcpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRTdGF0dXM6ICdTRU5EJyB9KTtcbiAgICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgICAgICBpZDogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgbWVzc2FnZTogY29udGVudCxcbiAgICAgICAgICBmcm9tX3VzZXI6IEpTT04ucGFyc2UodGhpcy5wcm9wcy51c2VyKS5kYXRhLnVzZXJuYW1lLFxuICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIHJlYWRCeVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyh0aGlzLnByb3BzLm1lc3NhZ2VzLmNvbmNhdChbbmV3TWVzc2FnZV0pKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuY29udGVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMuc2Nyb2xsUGFuZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBuID0gMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sLW1kLTcgY29sLWxnLTlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIG4gKz0gMTtcbiAgICAgICAgICAgIGxldCBzZWNvbmRDbGFzcyA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoIC0gMSA9PT0gbikge1xuICAgICAgICAgICAgICBzZWNvbmRDbGFzcyA9ICcgc2Vjb25kJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlY29uZENsYXNzID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lc3NhZ2UtY29udGFpbmVyJHtzZWNvbmRDbGFzc31gfSBrZXk9e21lc3NhZ2UuaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVzc2VuZ2VyXCI+QHttZXNzYWdlLmZyb21fdXNlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG1lc3NhZ2UtdHlwZSAke21lc3NhZ2UucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZS5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgIHsgbWVzc2FnZS5yZWFkQnkgPT09ICcnICYmIG1lc3NhZ2UucmVhZEJ5Lmxlbmd0aCA9PT0gMCA/ICcnIDpcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1yZWFkLWxpc3RcIj5SZWFkIGJ5OiA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnJlYWRCeS5zcGxpdCgnLCcpLm1hcCh1c2VybmFtZSA9PiBgQCR7dXNlcm5hbWV9LGApLmpvaW4oJywnKS5zcGxpdCgpfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHBsLTAgcHItMCBwYi0yXCI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJtZXNzYWdlLWJveFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmNvbnRlbnQgPSBpbnB1dDsgfX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcGwtMCBwci0wXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1sZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJicm93c2VyLWRlZmF1bHRcIiByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnByaW9yaXR5ID0gaW5wdXQ7IH19PlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vcm1hbFwiPk5vcm1hbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVyZ2VudFwiPlVyZ2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNyaXRpY2FsXCI+Q3JpdGljYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj48YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnNlbmRTdGF0dXMgPT09ICdTRU5ELi4uJ30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5zZW5kfT57dGhpcy5zdGF0ZS5zZW5kU3RhdHVzfTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kOiBuZXdNZXNzYWdlID0+IGRpc3BhdGNoKHNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpKSxcbiAgICBsb2FkTWVzc2FnZXM6IGFsbE1lc3NhZ2VzID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcyhhbGxNZXNzYWdlcykpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNZXNzYWdlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL21lc3NhZ2VzLmpzIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB0eXBlO1xudHJ5IHtcbiAgdHlwZSA9IHJlcXVpcmUoJ2NvbXBvbmVudC10eXBlJyk7XG59IGNhdGNoIChfKSB7XG4gIHR5cGUgPSByZXF1aXJlKCd0eXBlJyk7XG59XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcblxuLyoqXG4gKiBDbG9uZXMgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBhbnkgb2JqZWN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNsb25lKG9iail7XG4gIHN3aXRjaCAodHlwZShvYmopKSB7XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHZhciBjb3B5ID0ge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGNvcHlba2V5XSA9IGNsb25lKG9ialtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvcHk7XG5cbiAgICBjYXNlICdhcnJheSc6XG4gICAgICB2YXIgY29weSA9IG5ldyBBcnJheShvYmoubGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb3B5W2ldID0gY2xvbmUob2JqW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3B5O1xuXG4gICAgY2FzZSAncmVnZXhwJzpcbiAgICAgIC8vIGZyb20gbWlsbGVybWVkZWlyb3MvYW1kLXV0aWxzIC0gTUlUXG4gICAgICB2YXIgZmxhZ3MgPSAnJztcbiAgICAgIGZsYWdzICs9IG9iai5tdWx0aWxpbmUgPyAnbScgOiAnJztcbiAgICAgIGZsYWdzICs9IG9iai5nbG9iYWwgPyAnZycgOiAnJztcbiAgICAgIGZsYWdzICs9IG9iai5pZ25vcmVDYXNlID8gJ2knIDogJyc7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChvYmouc291cmNlLCBmbGFncyk7XG5cbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiBuZXcgRGF0ZShvYmouZ2V0VGltZSgpKTtcblxuICAgIGRlZmF1bHQ6IC8vIHN0cmluZywgbnVtYmVyLCBib29sZWFuLCDigKZcbiAgICAgIHJldHVybiBvYmo7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LWNsb25lL2luZGV4LmpzIiwiLyoqXG4gKiBFeHBvc2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZSgpYC5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCBmYWxsYmFjaztcblxuLyoqXG4gKiBGYWxsYmFjayBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuXG52YXIgcHJldiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuZnVuY3Rpb24gZmFsbGJhY2soZm4pIHtcbiAgdmFyIGN1cnIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgdmFyIG1zID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyciAtIHByZXYpKTtcbiAgdmFyIHJlcSA9IHNldFRpbWVvdXQoZm4sIG1zKTtcbiAgcHJldiA9IGN1cnI7XG4gIHJldHVybiByZXE7XG59XG5cbi8qKlxuICogQ2FuY2VsLlxuICovXG5cbnZhciBjYW5jZWwgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cuY2xlYXJUaW1lb3V0O1xuXG5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKGlkKXtcbiAgY2FuY2VsLmNhbGwod2luZG93LCBpZCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtcmFmL2luZGV4LmpzIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgY2xvbmUgPSByZXF1aXJlKCdjbG9uZScpO1xudmFyIHR5cGUgPSByZXF1aXJlKCd0eXBlJyk7XG52YXIgZWFzZSA9IHJlcXVpcmUoJ2Vhc2UnKTtcblxuLyoqXG4gKiBFeHBvc2UgYFR3ZWVuYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFR3ZWVuYCB3aXRoIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gVHdlZW4ob2JqKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUd2VlbikpIHJldHVybiBuZXcgVHdlZW4ob2JqKTtcbiAgdGhpcy5fZnJvbSA9IG9iajtcbiAgdGhpcy5lYXNlKCdsaW5lYXInKTtcbiAgdGhpcy5kdXJhdGlvbig1MDApO1xufVxuXG4vKipcbiAqIE1peGluIGVtaXR0ZXIuXG4gKi9cblxuRW1pdHRlcihUd2Vlbi5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFJlc2V0IHRoZSB0d2Vlbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuaXNBcnJheSA9ICdhcnJheScgPT09IHR5cGUodGhpcy5fZnJvbSk7XG4gIHRoaXMuX2N1cnIgPSBjbG9uZSh0aGlzLl9mcm9tKTtcbiAgdGhpcy5fZG9uZSA9IGZhbHNlO1xuICB0aGlzLl9zdGFydCA9IERhdGUubm93KCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUd2VlbiB0byBgb2JqYCBhbmQgcmVzZXQgaW50ZXJuYWwgc3RhdGUuXG4gKlxuICogICAgdHdlZW4udG8oeyB4OiA1MCwgeTogMTAwIH0pXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9ialxuICogQHJldHVybiB7VHdlZW59IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ob2JqKXtcbiAgdGhpcy5yZXNldCgpO1xuICB0aGlzLl90byA9IG9iajtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBkdXJhdGlvbiB0byBgbXNgIFs1MDBdLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7VHdlZW59IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24obXMpe1xuICB0aGlzLl9kdXJhdGlvbiA9IG1zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGVhc2luZyBmdW5jdGlvbiB0byBgZm5gLlxuICpcbiAqICAgIHR3ZWVuLmVhc2UoJ2luLW91dC1zaW5lJylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1R3ZWVufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUuZWFzZSA9IGZ1bmN0aW9uKGZuKXtcbiAgZm4gPSAnZnVuY3Rpb24nID09IHR5cGVvZiBmbiA/IGZuIDogZWFzZVtmbl07XG4gIGlmICghZm4pIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgZWFzaW5nIGZ1bmN0aW9uJyk7XG4gIHRoaXMuX2Vhc2UgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN0b3AgdGhlIHR3ZWVuIGFuZCBpbW1lZGlhdGVseSBlbWl0IFwic3RvcFwiIGFuZCBcImVuZFwiLlxuICpcbiAqIEByZXR1cm4ge1R3ZWVufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuc3RvcHBlZCA9IHRydWU7XG4gIHRoaXMuX2RvbmUgPSB0cnVlO1xuICB0aGlzLmVtaXQoJ3N0b3AnKTtcbiAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFBlcmZvcm0gYSBzdGVwLlxuICpcbiAqIEByZXR1cm4ge1R3ZWVufSBzZWxmXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKCl7XG4gIGlmICh0aGlzLl9kb25lKSByZXR1cm47XG5cbiAgLy8gZHVyYXRpb25cbiAgdmFyIGR1cmF0aW9uID0gdGhpcy5fZHVyYXRpb247XG4gIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICB2YXIgZGVsdGEgPSBub3cgLSB0aGlzLl9zdGFydDtcbiAgdmFyIGRvbmUgPSBkZWx0YSA+PSBkdXJhdGlvbjtcblxuICAvLyBjb21wbGV0ZVxuICBpZiAoZG9uZSkge1xuICAgIHRoaXMuX2Zyb20gPSB0aGlzLl90bztcbiAgICB0aGlzLl91cGRhdGUodGhpcy5fdG8pO1xuICAgIHRoaXMuX2RvbmUgPSB0cnVlO1xuICAgIHRoaXMuZW1pdCgnZW5kJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyB0d2VlblxuICB2YXIgZnJvbSA9IHRoaXMuX2Zyb207XG4gIHZhciB0byA9IHRoaXMuX3RvO1xuICB2YXIgY3VyciA9IHRoaXMuX2N1cnI7XG4gIHZhciBmbiA9IHRoaXMuX2Vhc2U7XG4gIHZhciBwID0gKG5vdyAtIHRoaXMuX3N0YXJ0KSAvIGR1cmF0aW9uO1xuICB2YXIgbiA9IGZuKHApO1xuXG4gIC8vIGFycmF5XG4gIGlmICh0aGlzLmlzQXJyYXkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyb20ubGVuZ3RoOyArK2kpIHtcbiAgICAgIGN1cnJbaV0gPSBmcm9tW2ldICsgKHRvW2ldIC0gZnJvbVtpXSkgKiBuO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZShjdXJyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIG9iamVjaFxuICBmb3IgKHZhciBrIGluIGZyb20pIHtcbiAgICBjdXJyW2tdID0gZnJvbVtrXSArICh0b1trXSAtIGZyb21ba10pICogbjtcbiAgfVxuXG4gIHRoaXMuX3VwZGF0ZShjdXJyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB1cGRhdGUgZnVuY3Rpb24gdG8gYGZuYCBvclxuICogd2hlbiBubyBhcmd1bWVudCBpcyBnaXZlbiB0aGlzIHBlcmZvcm1zXG4gKiBhIFwic3RlcFwiLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtUd2Vlbn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZm4pe1xuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5zdGVwKCk7XG4gIHRoaXMuX3VwZGF0ZSA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtdHdlZW4vaW5kZXguanMiLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICBmdW5jdGlvbiBvbigpIHtcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC10d2Vlbi9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwiXG4vLyBlYXNpbmcgZnVuY3Rpb25zIGZyb20gXCJUd2Vlbi5qc1wiXG5cbmV4cG9ydHMubGluZWFyID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuO1xufTtcblxuZXhwb3J0cy5pblF1YWQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiBuO1xufTtcblxuZXhwb3J0cy5vdXRRdWFkID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogKDIgLSBuKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRRdWFkID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMjtcbiAgaWYgKG4gPCAxKSByZXR1cm4gMC41ICogbiAqIG47XG4gIHJldHVybiAtIDAuNSAqICgtLW4gKiAobiAtIDIpIC0gMSk7XG59O1xuXG5leHBvcnRzLmluQ3ViZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqIG4gKiBuO1xufTtcblxuZXhwb3J0cy5vdXRDdWJlID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAtLW4gKiBuICogbiArIDE7XG59O1xuXG5leHBvcnRzLmluT3V0Q3ViZSA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDI7XG4gIGlmIChuIDwgMSkgcmV0dXJuIDAuNSAqIG4gKiBuICogbjtcbiAgcmV0dXJuIDAuNSAqICgobiAtPSAyICkgKiBuICogbiArIDIpO1xufTtcblxuZXhwb3J0cy5pblF1YXJ0ID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogbiAqIG4gKiBuO1xufTtcblxuZXhwb3J0cy5vdXRRdWFydCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSAtICgtLW4gKiBuICogbiAqIG4pO1xufTtcblxuZXhwb3J0cy5pbk91dFF1YXJ0ID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMjtcbiAgaWYgKG4gPCAxKSByZXR1cm4gMC41ICogbiAqIG4gKiBuICogbjtcbiAgcmV0dXJuIC0wLjUgKiAoKG4gLT0gMikgKiBuICogbiAqIG4gLSAyKTtcbn07XG5cbmV4cG9ydHMuaW5RdWludCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqIG4gKiBuICogbiAqIG47XG59XG5cbmV4cG9ydHMub3V0UXVpbnQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIC0tbiAqIG4gKiBuICogbiAqIG4gKyAxO1xufVxuXG5leHBvcnRzLmluT3V0UXVpbnQgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyO1xuICBpZiAobiA8IDEpIHJldHVybiAwLjUgKiBuICogbiAqIG4gKiBuICogbjtcbiAgcmV0dXJuIDAuNSAqICgobiAtPSAyKSAqIG4gKiBuICogbiAqIG4gKyAyKTtcbn07XG5cbmV4cG9ydHMuaW5TaW5lID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxIC0gTWF0aC5jb3MobiAqIE1hdGguUEkgLyAyICk7XG59O1xuXG5leHBvcnRzLm91dFNpbmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIE1hdGguc2luKG4gKiBNYXRoLlBJIC8gMik7XG59O1xuXG5leHBvcnRzLmluT3V0U2luZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBuKSk7XG59O1xuXG5leHBvcnRzLmluRXhwbyA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMCA9PSBuID8gMCA6IE1hdGgucG93KDEwMjQsIG4gLSAxKTtcbn07XG5cbmV4cG9ydHMub3V0RXhwbyA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSA9PSBuID8gbiA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiBuKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRFeHBvID0gZnVuY3Rpb24obil7XG4gIGlmICgwID09IG4pIHJldHVybiAwO1xuICBpZiAoMSA9PSBuKSByZXR1cm4gMTtcbiAgaWYgKChuICo9IDIpIDwgMSkgcmV0dXJuIC41ICogTWF0aC5wb3coMTAyNCwgbiAtIDEpO1xuICByZXR1cm4gLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIChuIC0gMSkpICsgMik7XG59O1xuXG5leHBvcnRzLmluQ2lyYyA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gbiAqIG4pO1xufTtcblxuZXhwb3J0cy5vdXRDaXJjID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtICgtLW4gKiBuKSk7XG59O1xuXG5leHBvcnRzLmluT3V0Q2lyYyA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDJcbiAgaWYgKG4gPCAxKSByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIG4gKiBuKSAtIDEpO1xuICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKG4gLT0gMikgKiBuKSArIDEpO1xufTtcblxuZXhwb3J0cy5pbkJhY2sgPSBmdW5jdGlvbihuKXtcbiAgdmFyIHMgPSAxLjcwMTU4O1xuICByZXR1cm4gbiAqIG4gKiAoKCBzICsgMSApICogbiAtIHMpO1xufTtcblxuZXhwb3J0cy5vdXRCYWNrID0gZnVuY3Rpb24obil7XG4gIHZhciBzID0gMS43MDE1ODtcbiAgcmV0dXJuIC0tbiAqIG4gKiAoKHMgKyAxKSAqIG4gKyBzKSArIDE7XG59O1xuXG5leHBvcnRzLmluT3V0QmFjayA9IGZ1bmN0aW9uKG4pe1xuICB2YXIgcyA9IDEuNzAxNTggKiAxLjUyNTtcbiAgaWYgKCAoIG4gKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiAoIG4gKiBuICogKCAoIHMgKyAxICkgKiBuIC0gcyApICk7XG4gIHJldHVybiAwLjUgKiAoICggbiAtPSAyICkgKiBuICogKCAoIHMgKyAxICkgKiBuICsgcyApICsgMiApO1xufTtcblxuZXhwb3J0cy5pbkJvdW5jZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSAtIGV4cG9ydHMub3V0Qm91bmNlKDEgLSBuKTtcbn07XG5cbmV4cG9ydHMub3V0Qm91bmNlID0gZnVuY3Rpb24obil7XG4gIGlmICggbiA8ICggMSAvIDIuNzUgKSApIHtcbiAgICByZXR1cm4gNy41NjI1ICogbiAqIG47XG4gIH0gZWxzZSBpZiAoIG4gPCAoIDIgLyAyLjc1ICkgKSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqICggbiAtPSAoIDEuNSAvIDIuNzUgKSApICogbiArIDAuNzU7XG4gIH0gZWxzZSBpZiAoIG4gPCAoIDIuNSAvIDIuNzUgKSApIHtcbiAgICByZXR1cm4gNy41NjI1ICogKCBuIC09ICggMi4yNSAvIDIuNzUgKSApICogbiArIDAuOTM3NTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gNy41NjI1ICogKCBuIC09ICggMi42MjUgLyAyLjc1ICkgKSAqIG4gKyAwLjk4NDM3NTtcbiAgfVxufTtcblxuZXhwb3J0cy5pbk91dEJvdW5jZSA9IGZ1bmN0aW9uKG4pe1xuICBpZiAobiA8IC41KSByZXR1cm4gZXhwb3J0cy5pbkJvdW5jZShuICogMikgKiAuNTtcbiAgcmV0dXJuIGV4cG9ydHMub3V0Qm91bmNlKG4gKiAyIC0gMSkgKiAuNSArIC41O1xufTtcblxuLy8gYWxpYXNlc1xuXG5leHBvcnRzWydpbi1xdWFkJ10gPSBleHBvcnRzLmluUXVhZDtcbmV4cG9ydHNbJ291dC1xdWFkJ10gPSBleHBvcnRzLm91dFF1YWQ7XG5leHBvcnRzWydpbi1vdXQtcXVhZCddID0gZXhwb3J0cy5pbk91dFF1YWQ7XG5leHBvcnRzWydpbi1jdWJlJ10gPSBleHBvcnRzLmluQ3ViZTtcbmV4cG9ydHNbJ291dC1jdWJlJ10gPSBleHBvcnRzLm91dEN1YmU7XG5leHBvcnRzWydpbi1vdXQtY3ViZSddID0gZXhwb3J0cy5pbk91dEN1YmU7XG5leHBvcnRzWydpbi1xdWFydCddID0gZXhwb3J0cy5pblF1YXJ0O1xuZXhwb3J0c1snb3V0LXF1YXJ0J10gPSBleHBvcnRzLm91dFF1YXJ0O1xuZXhwb3J0c1snaW4tb3V0LXF1YXJ0J10gPSBleHBvcnRzLmluT3V0UXVhcnQ7XG5leHBvcnRzWydpbi1xdWludCddID0gZXhwb3J0cy5pblF1aW50O1xuZXhwb3J0c1snb3V0LXF1aW50J10gPSBleHBvcnRzLm91dFF1aW50O1xuZXhwb3J0c1snaW4tb3V0LXF1aW50J10gPSBleHBvcnRzLmluT3V0UXVpbnQ7XG5leHBvcnRzWydpbi1zaW5lJ10gPSBleHBvcnRzLmluU2luZTtcbmV4cG9ydHNbJ291dC1zaW5lJ10gPSBleHBvcnRzLm91dFNpbmU7XG5leHBvcnRzWydpbi1vdXQtc2luZSddID0gZXhwb3J0cy5pbk91dFNpbmU7XG5leHBvcnRzWydpbi1leHBvJ10gPSBleHBvcnRzLmluRXhwbztcbmV4cG9ydHNbJ291dC1leHBvJ10gPSBleHBvcnRzLm91dEV4cG87XG5leHBvcnRzWydpbi1vdXQtZXhwbyddID0gZXhwb3J0cy5pbk91dEV4cG87XG5leHBvcnRzWydpbi1jaXJjJ10gPSBleHBvcnRzLmluQ2lyYztcbmV4cG9ydHNbJ291dC1jaXJjJ10gPSBleHBvcnRzLm91dENpcmM7XG5leHBvcnRzWydpbi1vdXQtY2lyYyddID0gZXhwb3J0cy5pbk91dENpcmM7XG5leHBvcnRzWydpbi1iYWNrJ10gPSBleHBvcnRzLmluQmFjaztcbmV4cG9ydHNbJ291dC1iYWNrJ10gPSBleHBvcnRzLm91dEJhY2s7XG5leHBvcnRzWydpbi1vdXQtYmFjayddID0gZXhwb3J0cy5pbk91dEJhY2s7XG5leHBvcnRzWydpbi1ib3VuY2UnXSA9IGV4cG9ydHMuaW5Cb3VuY2U7XG5leHBvcnRzWydvdXQtYm91bmNlJ10gPSBleHBvcnRzLm91dEJvdW5jZTtcbmV4cG9ydHNbJ2luLW91dC1ib3VuY2UnXSA9IGV4cG9ydHMuaW5PdXRCb3VuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2Vhc2UtY29tcG9uZW50L2luZGV4LmpzIiwidmFyIHNjcm9sbCA9IHJlcXVpcmUoJ3Njcm9sbC10bycpO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVTY3JvbGxPZmZzZXQoZWxlbSwgYWRkaXRpb25hbE9mZnNldCwgYWxpZ25tZW50KSB7XG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgdmFyIGVsZW1SZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIGNsaWVudEhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgZG9jdW1lbnRIZWlnaHQgPSBNYXRoLm1heCggYm9keS5zY3JvbGxIZWlnaHQsIGJvZHkub2Zmc2V0SGVpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5vZmZzZXRIZWlnaHQgKTtcblxuICBhZGRpdGlvbmFsT2Zmc2V0ID0gYWRkaXRpb25hbE9mZnNldCB8fCAwO1xuXG4gIHZhciBzY3JvbGxQb3NpdGlvbjtcbiAgaWYgKGFsaWdubWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IGVsZW1SZWN0LmJvdHRvbSAtIGNsaWVudEhlaWdodDtcbiAgfSBlbHNlIGlmIChhbGlnbm1lbnQgPT09ICdtaWRkbGUnKSB7XG4gICAgc2Nyb2xsUG9zaXRpb24gPSBlbGVtUmVjdC5ib3R0b20gLSBjbGllbnRIZWlnaHQgLyAyIC0gZWxlbVJlY3QuaGVpZ2h0IC8gMjtcbiAgfSBlbHNlIHsgLy8gdG9wIGFuZCBkZWZhdWx0XG4gICAgc2Nyb2xsUG9zaXRpb24gPSBlbGVtUmVjdC50b3A7XG4gIH1cblxuICB2YXIgbWF4U2Nyb2xsUG9zaXRpb24gPSBkb2N1bWVudEhlaWdodCAtIGNsaWVudEhlaWdodDtcbiAgcmV0dXJuIE1hdGgubWluKHNjcm9sbFBvc2l0aW9uICsgYWRkaXRpb25hbE9mZnNldCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgICAgICAgIG1heFNjcm9sbFBvc2l0aW9uKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gIGlmIChlbGVtKSByZXR1cm4gc2Nyb2xsKDAsIGNhbGN1bGF0ZVNjcm9sbE9mZnNldChlbGVtLCBvcHRpb25zLm9mZnNldCwgb3B0aW9ucy5hbGlnbiksIG9wdGlvbnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2Nyb2xsLXRvLWVsZW1lbnQvaW5kZXguanMiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIFR3ZWVuID0gcmVxdWlyZSgndHdlZW4nKTtcbnZhciByYWYgPSByZXF1aXJlKCdyYWYnKTtcblxuLyoqXG4gKiBFeHBvc2UgYHNjcm9sbFRvYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbFRvO1xuXG4vKipcbiAqIFNjcm9sbCB0byBgKHgsIHkpYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geFxuICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc2Nyb2xsVG8oeCwgeSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBzdGFydCBwb3NpdGlvblxuICB2YXIgc3RhcnQgPSBzY3JvbGwoKTtcblxuICAvLyBzZXR1cCB0d2VlblxuICB2YXIgdHdlZW4gPSBUd2VlbihzdGFydClcbiAgICAuZWFzZShvcHRpb25zLmVhc2UgfHwgJ291dC1jaXJjJylcbiAgICAudG8oeyB0b3A6IHksIGxlZnQ6IHggfSlcbiAgICAuZHVyYXRpb24ob3B0aW9ucy5kdXJhdGlvbiB8fCAxMDAwKTtcblxuICAvLyBzY3JvbGxcbiAgdHdlZW4udXBkYXRlKGZ1bmN0aW9uKG8pe1xuICAgIHdpbmRvdy5zY3JvbGxUbyhvLmxlZnQgfCAwLCBvLnRvcCB8IDApO1xuICB9KTtcblxuICAvLyBoYW5kbGUgZW5kXG4gIHR3ZWVuLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIGFuaW1hdGUgPSBmdW5jdGlvbigpe307XG4gIH0pO1xuXG4gIC8vIGFuaW1hdGVcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICByYWYoYW5pbWF0ZSk7XG4gICAgdHdlZW4udXBkYXRlKCk7XG4gIH1cblxuICBhbmltYXRlKCk7XG4gIFxuICByZXR1cm4gdHdlZW47XG59XG5cbi8qKlxuICogUmV0dXJuIHNjcm9sbCBwb3NpdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzY3JvbGwoKSB7XG4gIHZhciB5ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIHZhciB4ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICByZXR1cm4geyB0b3A6IHksIGxlZnQ6IHggfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2Nyb2xsLXRvL2luZGV4LmpzIiwiLyoqXG4gKiB0b1N0cmluZyByZWYuXG4gKi9cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIHR5cGUgb2YgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsKXtcbiAgc3dpdGNoICh0b1N0cmluZy5jYWxsKHZhbCkpIHtcbiAgICBjYXNlICdbb2JqZWN0IERhdGVdJzogcmV0dXJuICdkYXRlJztcbiAgICBjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOiByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgY2FzZSAnW29iamVjdCBBcmd1bWVudHNdJzogcmV0dXJuICdhcmd1bWVudHMnO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJyYXldJzogcmV0dXJuICdhcnJheSc7XG4gICAgY2FzZSAnW29iamVjdCBFcnJvcl0nOiByZXR1cm4gJ2Vycm9yJztcbiAgfVxuXG4gIGlmICh2YWwgPT09IG51bGwpIHJldHVybiAnbnVsbCc7XG4gIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICBpZiAodmFsICE9PSB2YWwpIHJldHVybiAnbmFuJztcbiAgaWYgKHZhbCAmJiB2YWwubm9kZVR5cGUgPT09IDEpIHJldHVybiAnZWxlbWVudCc7XG5cbiAgdmFsID0gdmFsLnZhbHVlT2ZcbiAgICA/IHZhbC52YWx1ZU9mKClcbiAgICA6IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZi5hcHBseSh2YWwpXG5cbiAgcmV0dXJuIHR5cGVvZiB2YWw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtdHlwZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=