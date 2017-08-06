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
      (0, _api2.default)('', '/api/groups/' + id + '/read', 'POST').then(function (result) {
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
      var readBy = '';
      readBy = readBy.split(',').map(function (id) {
        return parseInt(id, 10);
      });
      if (content === '' || priority === '') {
        this.setState({ message_error: 'Error: Message has no priority, sender or content' });
        return;
      }

      this.setState({ sendStatus: 'SEND...' });
      var newMessageBody = 'message=' + content + '&from_user=' + JSON.parse(this.props.user).data.username + '\n    &priority=' + priority + '&to_group=' + this.state.selectedGroup.id;
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
                      return '@' + username;
                    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9zZW5kTWVzc2FnZS5qcz84OTZhIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanM/MWI4YyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1jbG9uZS9pbmRleC5qcz8wZWM1Iiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXJhZi9pbmRleC5qcz9hZmRhIiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXR3ZWVuL2luZGV4LmpzPzU3ZjIiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtdHdlZW4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcz85ZjM2Iiwid2VicGFjazovLy8uL34vZWFzZS1jb21wb25lbnQvaW5kZXguanM/OTNmNCIsIndlYnBhY2s6Ly8vLi9+L3Njcm9sbC10by1lbGVtZW50L2luZGV4LmpzP2IwOWUiLCJ3ZWJwYWNrOi8vLy4vfi9zY3JvbGwtdG8vaW5kZXguanM/NDMwNCIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC10eXBlL2luZGV4LmpzPzZmNTYiXSwibmFtZXMiOlsic2VuZE1lc3NhZ2UiLCJuZXdNZXNzYWdlIiwidHlwZSIsIk1lc3NhZ2VzIiwicHJvcHMiLCJzdGF0ZSIsIm1lc3NhZ2VfZXJyb3IiLCJzZWxlY3RlZEdyb3VwIiwic2VuZFN0YXR1cyIsInNlbmQiLCJiaW5kIiwib2Zmc2V0IiwiZWFzZSIsImR1cmF0aW9uIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImxlbmd0aCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsInNjcm9sbFBhbmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwicHJpb3JpdHkiLCJ2YWx1ZSIsInRyaW0iLCJyZWFkQnkiLCJtYXAiLCJwYXJzZUludCIsIm5ld01lc3NhZ2VCb2R5IiwiSlNPTiIsInBhcnNlIiwidXNlciIsImRhdGEiLCJ1c2VybmFtZSIsInJlc3BvbnNlIiwibWVzc2FnZSIsImZyb21fdXNlciIsInRvTG93ZXJDYXNlIiwibG9hZE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJjb25jYXQiLCJuIiwic2Vjb25kQ2xhc3MiLCJpbnB1dCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXJEYXRhIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhbGxNZXNzYWdlcyIsInJlcXVpcmUiLCJfIiwibW9kdWxlIiwiZXhwb3J0cyIsImNsb25lIiwib2JqIiwiY29weSIsImtleSIsImhhc093blByb3BlcnR5IiwiQXJyYXkiLCJpIiwibCIsImZsYWdzIiwibXVsdGlsaW5lIiwiZ2xvYmFsIiwiaWdub3JlQ2FzZSIsIlJlZ0V4cCIsInNvdXJjZSIsIkRhdGUiLCJnZXRUaW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZmFsbGJhY2siLCJwcmV2IiwiZm4iLCJjdXJyIiwibXMiLCJNYXRoIiwibWF4IiwicmVxIiwic2V0VGltZW91dCIsImNhbmNlbCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsImNhbGwiLCJFbWl0dGVyIiwiVHdlZW4iLCJfZnJvbSIsInByb3RvdHlwZSIsInJlc2V0IiwiaXNBcnJheSIsIl9jdXJyIiwiX2RvbmUiLCJfc3RhcnQiLCJub3ciLCJ0byIsIl90byIsIl9kdXJhdGlvbiIsIlR5cGVFcnJvciIsIl9lYXNlIiwic3RvcCIsInN0b3BwZWQiLCJlbWl0Iiwic3RlcCIsImRlbHRhIiwiZG9uZSIsIl91cGRhdGUiLCJmcm9tIiwicCIsImsiLCJ1cGRhdGUiLCJhcmd1bWVudHMiLCJtaXhpbiIsIm9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiX2NhbGxiYWNrcyIsInB1c2giLCJvbmNlIiwib2ZmIiwiYXBwbHkiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYWxsYmFja3MiLCJjYiIsInNwbGljZSIsImFyZ3MiLCJzbGljZSIsImxlbiIsImxpc3RlbmVycyIsImhhc0xpc3RlbmVycyIsImxpbmVhciIsImluUXVhZCIsIm91dFF1YWQiLCJpbk91dFF1YWQiLCJpbkN1YmUiLCJvdXRDdWJlIiwiaW5PdXRDdWJlIiwiaW5RdWFydCIsIm91dFF1YXJ0IiwiaW5PdXRRdWFydCIsImluUXVpbnQiLCJvdXRRdWludCIsImluT3V0UXVpbnQiLCJpblNpbmUiLCJjb3MiLCJQSSIsIm91dFNpbmUiLCJzaW4iLCJpbk91dFNpbmUiLCJpbkV4cG8iLCJwb3ciLCJvdXRFeHBvIiwiaW5PdXRFeHBvIiwiaW5DaXJjIiwic3FydCIsIm91dENpcmMiLCJpbk91dENpcmMiLCJpbkJhY2siLCJzIiwib3V0QmFjayIsImluT3V0QmFjayIsImluQm91bmNlIiwib3V0Qm91bmNlIiwiaW5PdXRCb3VuY2UiLCJzY3JvbGwiLCJjYWxjdWxhdGVTY3JvbGxPZmZzZXQiLCJlbGVtIiwiYWRkaXRpb25hbE9mZnNldCIsImFsaWdubWVudCIsImJvZHkiLCJkb2N1bWVudCIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJlbGVtUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudEhlaWdodCIsImRvY3VtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsUG9zaXRpb24iLCJib3R0b20iLCJoZWlnaHQiLCJ0b3AiLCJtYXhTY3JvbGxQb3NpdGlvbiIsIm1pbiIsInBhZ2VZT2Zmc2V0Iiwib3B0aW9ucyIsInF1ZXJ5U2VsZWN0b3IiLCJhbGlnbiIsInJhZiIsInNjcm9sbFRvIiwieCIsInkiLCJzdGFydCIsInR3ZWVuIiwibGVmdCIsIm8iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwicGFnZVhPZmZzZXQiLCJzY3JvbGxMZWZ0IiwidG9TdHJpbmciLCJPYmplY3QiLCJ2YWwiLCJ1bmRlZmluZWQiLCJub2RlVHlwZSIsInZhbHVlT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLFVBQUQsRUFBZ0I7QUFDbEMsU0FBTztBQUNMQyxVQUFNLGNBREQ7QUFFTEQ7QUFGSyxHQUFQO0FBSUQsQ0FMRDs7a0JBT2VELFc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQZjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUcsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlLEVBREo7QUFFWEMscUJBQWUsRUFGSjtBQUdYQyxrQkFBWTtBQUhELEtBQWI7QUFLQSxVQUFLQyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVQyxJQUFWLE9BQVo7QUFQaUI7QUFRbEI7Ozs7aUNBRVk7QUFDWCxxQ0FBZ0IsU0FBaEIsRUFBMkI7QUFDekJDLGdCQUFRLENBQUMsRUFEZ0I7QUFFekJDLGNBQU0sU0FGbUI7QUFHekJDLGtCQUFVO0FBSGUsT0FBM0I7QUFLRDs7O3lDQUVvQjtBQUFBOztBQUNuQixVQUFNQyxLQUFLQyxTQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJGLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QkMsTUFBekIsR0FBa0MsQ0FBM0QsQ0FBWDtBQUNBLHlCQUFJLElBQUosbUJBQXlCSixFQUF6QixFQUErQixLQUEvQixFQUNDSyxJQURELENBQ00sVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCLGVBQUtDLFFBQUwsQ0FBYyxFQUFFZCxlQUFlYSxNQUFqQixFQUFkO0FBQ0QsT0FIRDtBQUlBLHlCQUFJLEVBQUosbUJBQXVCTixFQUF2QixZQUFrQyxNQUFs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LFNBQUssZ0JBQUw7QUFBdUIsYUFBTyxPQUFQO0FBTHpCOztBQVFBLE1BQUlBLFFBQVEsSUFBWixFQUFrQixPQUFPLE1BQVA7QUFDbEIsTUFBSUEsUUFBUUMsU0FBWixFQUF1QixPQUFPLFdBQVA7QUFDdkIsTUFBSUQsUUFBUUEsR0FBWixFQUFpQixPQUFPLEtBQVA7QUFDakIsTUFBSUEsT0FBT0EsSUFBSUUsUUFBSixLQUFpQixDQUE1QixFQUErQixPQUFPLFNBQVA7O0FBRS9CRixRQUFNQSxJQUFJRyxPQUFKLEdBQ0ZILElBQUlHLE9BQUosRUFERSxHQUVGSixPQUFPcEgsU0FBUCxDQUFpQndILE9BQWpCLENBQXlCeEYsS0FBekIsQ0FBK0JxRixHQUEvQixDQUZKOztBQUlBLGdCQUFjQSxHQUFkLHlDQUFjQSxHQUFkO0FBQ0QsQ0FuQkQsQyIsImZpbGUiOiIwLmIwMTJhZTY3MGEwYWNkZGZlNWUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZW5kTWVzc2FnZSA9IChuZXdNZXNzYWdlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1NFTkRfTUVTU0FHRScsXG4gICAgbmV3TWVzc2FnZVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VuZE1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvYWN0aW9ucy9zZW5kTWVzc2FnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHNjcm9sbFRvRWxlbWVudCBmcm9tICdzY3JvbGwtdG8tZWxlbWVudCc7XG5pbXBvcnQgc2VuZE1lc3NhZ2UgZnJvbSAnLi4vLi4vYWN0aW9ucy9zZW5kTWVzc2FnZSc7XG5pbXBvcnQgbG9hZE1lc3NhZ2VzIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9hZE1lc3NhZ2VzJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZXNzYWdlX2Vycm9yOiAnJyxcbiAgICAgIHNlbGVjdGVkR3JvdXA6IHt9LFxuICAgICAgc2VuZFN0YXR1czogJ1NFTkQnXG4gICAgfTtcbiAgICB0aGlzLnNlbmQgPSB0aGlzLnNlbmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNjcm9sbFBhbmUoKSB7XG4gICAgc2Nyb2xsVG9FbGVtZW50KCcuc2Vjb25kJywge1xuICAgICAgb2Zmc2V0OiAtNjAsXG4gICAgICBlYXNlOiAnaW4tZXhwbycsXG4gICAgICBkdXJhdGlvbjogOTAwXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgaWQgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJylbbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpLmxlbmd0aCAtIDFdO1xuICAgIGFwaShudWxsLCBgL2FwaS9ncm91cHMvJHtpZH1gLCAnR0VUJylcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRHcm91cDogcmVzdWx0IH0pO1xuICAgIH0pO1xuICAgIGFwaSgnJywgYC9hcGkvZ3JvdXBzLyR7aWR9L3JlYWRgLCAnUE9TVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHJlc3VsdCB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2Nyb2xsUGFuZSgpO1xuICB9XG5cbiAgc2VuZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB7IGNvbnRlbnQsIHByaW9yaXR5IH0gPSB0aGlzO1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnZhbHVlLnRyaW0oKTtcbiAgICBwcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlLnRyaW0oKTtcbiAgICBsZXQgcmVhZEJ5ID0gJyc7XG4gICAgcmVhZEJ5ID0gcmVhZEJ5LnNwbGl0KCcsJykubWFwKGlkID0+IHBhcnNlSW50KGlkLCAxMCkpO1xuICAgIGlmIChjb250ZW50ID09PSAnJyB8fCBwcmlvcml0eSA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlX2Vycm9yOiAnRXJyb3I6IE1lc3NhZ2UgaGFzIG5vIHByaW9yaXR5LCBzZW5kZXIgb3IgY29udGVudCcgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRTdGF0dXM6ICdTRU5ELi4uJyB9KTtcbiAgICBjb25zdCBuZXdNZXNzYWdlQm9keSA9XG4gICAgYG1lc3NhZ2U9JHtjb250ZW50fSZmcm9tX3VzZXI9JHtKU09OLnBhcnNlKHRoaXMucHJvcHMudXNlcikuZGF0YS51c2VybmFtZX1cbiAgICAmcHJpb3JpdHk9JHtwcmlvcml0eX0mdG9fZ3JvdXA9JHt0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuaWR9YDtcbiAgICBhcGkobmV3TWVzc2FnZUJvZHksIGAvYXBpL2dyb3Vwcy8ke3RoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5pZH0vbWVzc2FnZWAsICdQT1NUJykudGhlbihcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VuZFN0YXR1czogJ1NFTkQnIH0pO1xuICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xuICAgICAgICAgIGlkOiByZXNwb25zZS5pZCxcbiAgICAgICAgICBtZXNzYWdlOiBjb250ZW50LFxuICAgICAgICAgIGZyb21fdXNlcjogSlNPTi5wYXJzZSh0aGlzLnByb3BzLnVzZXIpLmRhdGEudXNlcm5hbWUsXG4gICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgcmVhZEJ5XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHJvcHMubG9hZE1lc3NhZ2VzKHRoaXMucHJvcHMubWVzc2FnZXMuY29uY2F0KFtuZXdNZXNzYWdlXSkpO1xuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5jb250ZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5zY3JvbGxQYW5lKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG4gPSAwO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudCBhbGlnbi10b3AgcGwtMCBjb2wtbWQtNyBjb2wtbGctOVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLm1lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgbiArPSAxO1xuICAgICAgICAgICAgbGV0IHNlY29uZENsYXNzID0gJyc7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGggLSAxID09PSBuKSB7XG4gICAgICAgICAgICAgIHNlY29uZENsYXNzID0gJyBzZWNvbmQnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2Vjb25kQ2xhc3MgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWVzc2FnZS1jb250YWluZXIke3NlY29uZENsYXNzfWB9IGtleT17bWVzc2FnZS5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZXNzZW5nZXJcIj5Ae21lc3NhZ2UuZnJvbV91c2VyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbWVzc2FnZS10eXBlICR7bWVzc2FnZS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnByaW9yaXR5LnRvTG93ZXJDYXNlKCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PnttZXNzYWdlLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgeyBtZXNzYWdlLnJlYWRCeSA9PT0gJycgJiYgbWVzc2FnZS5yZWFkQnkubGVuZ3RoID09PSAwID8gJycgOlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLXJlYWQtbGlzdFwiPlJlYWQgYnk6IDxzcGFuPlxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UucmVhZEJ5LnNwbGl0KCcsJykubWFwKHVzZXJuYW1lID0+IGBAJHt1c2VybmFtZX1gKX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwbC0wIHByLTAgcGItMlwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibWVzc2FnZS1ib3hcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5jb250ZW50ID0gaW5wdXQ7IH19PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHBsLTAgcHItMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktbGV2ZWxcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiYnJvd3Nlci1kZWZhdWx0XCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wcmlvcml0eSA9IGlucHV0OyB9fT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb3JtYWxcIj5Ob3JtYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVcmdlbnRcIj5VcmdlbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDcml0aWNhbFwiPkNyaXRpY2FsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+PGJ1dHRvbiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zZW5kU3RhdHVzID09PSAnU0VORC4uLid9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuc2VuZH0+e3RoaXMuc3RhdGUuc2VuZFN0YXR1c308L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyRGF0YVxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VuZDogbmV3TWVzc2FnZSA9PiBkaXNwYXRjaChzZW5kTWVzc2FnZShuZXdNZXNzYWdlKSksXG4gICAgbG9hZE1lc3NhZ2VzOiBhbGxNZXNzYWdlcyA9PiBkaXNwYXRjaChsb2FkTWVzc2FnZXMoYWxsTWVzc2FnZXMpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWVzc2FnZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9tZXNzYWdlcy5qcyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgdHlwZTtcbnRyeSB7XG4gIHR5cGUgPSByZXF1aXJlKCdjb21wb25lbnQtdHlwZScpO1xufSBjYXRjaCAoXykge1xuICB0eXBlID0gcmVxdWlyZSgndHlwZScpO1xufVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG5cbi8qKlxuICogQ2xvbmVzIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gYW55IG9iamVjdFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZShvYmope1xuICBzd2l0Y2ggKHR5cGUob2JqKSkge1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB2YXIgY29weSA9IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjb3B5W2tleV0gPSBjbG9uZShvYmpba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3B5O1xuXG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgdmFyIGNvcHkgPSBuZXcgQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29weVtpXSA9IGNsb25lKG9ialtpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29weTtcblxuICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAvLyBmcm9tIG1pbGxlcm1lZGVpcm9zL2FtZC11dGlscyAtIE1JVFxuICAgICAgdmFyIGZsYWdzID0gJyc7XG4gICAgICBmbGFncyArPSBvYmoubXVsdGlsaW5lID8gJ20nIDogJyc7XG4gICAgICBmbGFncyArPSBvYmouZ2xvYmFsID8gJ2cnIDogJyc7XG4gICAgICBmbGFncyArPSBvYmouaWdub3JlQ2FzZSA/ICdpJyA6ICcnO1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAob2JqLnNvdXJjZSwgZmxhZ3MpO1xuXG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gbmV3IERhdGUob2JqLmdldFRpbWUoKSk7XG5cbiAgICBkZWZhdWx0OiAvLyBzdHJpbmcsIG51bWJlciwgYm9vbGVhbiwg4oCmXG4gICAgICByZXR1cm4gb2JqO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC1jbG9uZS9pbmRleC5qcyIsIi8qKlxuICogRXhwb3NlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKWAuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgZmFsbGJhY2s7XG5cbi8qKlxuICogRmFsbGJhY2sgaW1wbGVtZW50YXRpb24uXG4gKi9cblxudmFyIHByZXYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbmZ1bmN0aW9uIGZhbGxiYWNrKGZuKSB7XG4gIHZhciBjdXJyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHZhciBtcyA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnIgLSBwcmV2KSk7XG4gIHZhciByZXEgPSBzZXRUaW1lb3V0KGZuLCBtcyk7XG4gIHByZXYgPSBjdXJyO1xuICByZXR1cm4gcmVxO1xufVxuXG4vKipcbiAqIENhbmNlbC5cbiAqL1xuXG52YXIgY2FuY2VsID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93LmNsZWFyVGltZW91dDtcblxuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbihpZCl7XG4gIGNhbmNlbC5jYWxsKHdpbmRvdywgaWQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LXJhZi9pbmRleC5qcyIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnY2xvbmUnKTtcbnZhciB0eXBlID0gcmVxdWlyZSgndHlwZScpO1xudmFyIGVhc2UgPSByZXF1aXJlKCdlYXNlJyk7XG5cbi8qKlxuICogRXhwb3NlIGBUd2VlbmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBUd2VlbmAgd2l0aCBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFR3ZWVuKG9iaikge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVHdlZW4pKSByZXR1cm4gbmV3IFR3ZWVuKG9iaik7XG4gIHRoaXMuX2Zyb20gPSBvYmo7XG4gIHRoaXMuZWFzZSgnbGluZWFyJyk7XG4gIHRoaXMuZHVyYXRpb24oNTAwKTtcbn1cblxuLyoqXG4gKiBNaXhpbiBlbWl0dGVyLlxuICovXG5cbkVtaXR0ZXIoVHdlZW4ucHJvdG90eXBlKTtcblxuLyoqXG4gKiBSZXNldCB0aGUgdHdlZW4uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLmlzQXJyYXkgPSAnYXJyYXknID09PSB0eXBlKHRoaXMuX2Zyb20pO1xuICB0aGlzLl9jdXJyID0gY2xvbmUodGhpcy5fZnJvbSk7XG4gIHRoaXMuX2RvbmUgPSBmYWxzZTtcbiAgdGhpcy5fc3RhcnQgPSBEYXRlLm5vdygpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVHdlZW4gdG8gYG9iamAgYW5kIHJlc2V0IGludGVybmFsIHN0YXRlLlxuICpcbiAqICAgIHR3ZWVuLnRvKHsgeDogNTAsIHk6IDEwMCB9KVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmpcbiAqIEByZXR1cm4ge1R3ZWVufSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKG9iail7XG4gIHRoaXMucmVzZXQoKTtcbiAgdGhpcy5fdG8gPSBvYmo7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgZHVyYXRpb24gdG8gYG1zYCBbNTAwXS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1R3ZWVufSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKG1zKXtcbiAgdGhpcy5fZHVyYXRpb24gPSBtcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBlYXNpbmcgZnVuY3Rpb24gdG8gYGZuYC5cbiAqXG4gKiAgICB0d2Vlbi5lYXNlKCdpbi1vdXQtc2luZScpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtUd2Vlbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLmVhc2UgPSBmdW5jdGlvbihmbil7XG4gIGZuID0gJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZm4gPyBmbiA6IGVhc2VbZm5dO1xuICBpZiAoIWZuKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIGVhc2luZyBmdW5jdGlvbicpO1xuICB0aGlzLl9lYXNlID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTdG9wIHRoZSB0d2VlbiBhbmQgaW1tZWRpYXRlbHkgZW1pdCBcInN0b3BcIiBhbmQgXCJlbmRcIi5cbiAqXG4gKiBAcmV0dXJuIHtUd2Vlbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpe1xuICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICB0aGlzLl9kb25lID0gdHJ1ZTtcbiAgdGhpcy5lbWl0KCdzdG9wJyk7XG4gIHRoaXMuZW1pdCgnZW5kJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBQZXJmb3JtIGEgc3RlcC5cbiAqXG4gKiBAcmV0dXJuIHtUd2Vlbn0gc2VsZlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbigpe1xuICBpZiAodGhpcy5fZG9uZSkgcmV0dXJuO1xuXG4gIC8vIGR1cmF0aW9uXG4gIHZhciBkdXJhdGlvbiA9IHRoaXMuX2R1cmF0aW9uO1xuICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgdmFyIGRlbHRhID0gbm93IC0gdGhpcy5fc3RhcnQ7XG4gIHZhciBkb25lID0gZGVsdGEgPj0gZHVyYXRpb247XG5cbiAgLy8gY29tcGxldGVcbiAgaWYgKGRvbmUpIHtcbiAgICB0aGlzLl9mcm9tID0gdGhpcy5fdG87XG4gICAgdGhpcy5fdXBkYXRlKHRoaXMuX3RvKTtcbiAgICB0aGlzLl9kb25lID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXQoJ2VuZCcpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdHdlZW5cbiAgdmFyIGZyb20gPSB0aGlzLl9mcm9tO1xuICB2YXIgdG8gPSB0aGlzLl90bztcbiAgdmFyIGN1cnIgPSB0aGlzLl9jdXJyO1xuICB2YXIgZm4gPSB0aGlzLl9lYXNlO1xuICB2YXIgcCA9IChub3cgLSB0aGlzLl9zdGFydCkgLyBkdXJhdGlvbjtcbiAgdmFyIG4gPSBmbihwKTtcblxuICAvLyBhcnJheVxuICBpZiAodGhpcy5pc0FycmF5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcm9tLmxlbmd0aDsgKytpKSB7XG4gICAgICBjdXJyW2ldID0gZnJvbVtpXSArICh0b1tpXSAtIGZyb21baV0pICogbjtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGUoY3Vycik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBvYmplY2hcbiAgZm9yICh2YXIgayBpbiBmcm9tKSB7XG4gICAgY3VycltrXSA9IGZyb21ba10gKyAodG9ba10gLSBmcm9tW2tdKSAqIG47XG4gIH1cblxuICB0aGlzLl91cGRhdGUoY3Vycik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgdXBkYXRlIGZ1bmN0aW9uIHRvIGBmbmAgb3JcbiAqIHdoZW4gbm8gYXJndW1lbnQgaXMgZ2l2ZW4gdGhpcyBwZXJmb3Jtc1xuICogYSBcInN0ZXBcIi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7VHdlZW59IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGZuKXtcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuc3RlcCgpO1xuICB0aGlzLl91cGRhdGUgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LXR3ZWVuL2luZGV4LmpzIiwiXG4vKipcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59O1xuXG4vKipcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub24gPVxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxuICAgIC5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgZnVuY3Rpb24gb24oKSB7XG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgb24uZm4gPSBmbjtcbiAgdGhpcy5vbihldmVudCwgb24pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICAvLyBhbGxcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcblxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gIHZhciBjYjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge01peGVkfSAuLi5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcblxuICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtdHdlZW4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIlxuLy8gZWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFwiVHdlZW4uanNcIlxuXG5leHBvcnRzLmxpbmVhciA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbjtcbn07XG5cbmV4cG9ydHMuaW5RdWFkID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogbjtcbn07XG5cbmV4cG9ydHMub3V0UXVhZCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqICgyIC0gbik7XG59O1xuXG5leHBvcnRzLmluT3V0UXVhZCA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDI7XG4gIGlmIChuIDwgMSkgcmV0dXJuIDAuNSAqIG4gKiBuO1xuICByZXR1cm4gLSAwLjUgKiAoLS1uICogKG4gLSAyKSAtIDEpO1xufTtcblxuZXhwb3J0cy5pbkN1YmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiBuICogbjtcbn07XG5cbmV4cG9ydHMub3V0Q3ViZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gLS1uICogbiAqIG4gKyAxO1xufTtcblxuZXhwb3J0cy5pbk91dEN1YmUgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyO1xuICBpZiAobiA8IDEpIHJldHVybiAwLjUgKiBuICogbiAqIG47XG4gIHJldHVybiAwLjUgKiAoKG4gLT0gMiApICogbiAqIG4gKyAyKTtcbn07XG5cbmV4cG9ydHMuaW5RdWFydCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqIG4gKiBuICogbjtcbn07XG5cbmV4cG9ydHMub3V0UXVhcnQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDEgLSAoLS1uICogbiAqIG4gKiBuKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRRdWFydCA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDI7XG4gIGlmIChuIDwgMSkgcmV0dXJuIDAuNSAqIG4gKiBuICogbiAqIG47XG4gIHJldHVybiAtMC41ICogKChuIC09IDIpICogbiAqIG4gKiBuIC0gMik7XG59O1xuXG5leHBvcnRzLmluUXVpbnQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiBuICogbiAqIG4gKiBuO1xufVxuXG5leHBvcnRzLm91dFF1aW50ID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAtLW4gKiBuICogbiAqIG4gKiBuICsgMTtcbn1cblxuZXhwb3J0cy5pbk91dFF1aW50ID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMjtcbiAgaWYgKG4gPCAxKSByZXR1cm4gMC41ICogbiAqIG4gKiBuICogbiAqIG47XG4gIHJldHVybiAwLjUgKiAoKG4gLT0gMikgKiBuICogbiAqIG4gKiBuICsgMik7XG59O1xuXG5leHBvcnRzLmluU2luZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSAtIE1hdGguY29zKG4gKiBNYXRoLlBJIC8gMiApO1xufTtcblxuZXhwb3J0cy5vdXRTaW5lID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBNYXRoLnNpbihuICogTWF0aC5QSSAvIDIpO1xufTtcblxuZXhwb3J0cy5pbk91dFNpbmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogbikpO1xufTtcblxuZXhwb3J0cy5pbkV4cG8gPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDAgPT0gbiA/IDAgOiBNYXRoLnBvdygxMDI0LCBuIC0gMSk7XG59O1xuXG5leHBvcnRzLm91dEV4cG8gPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDEgPT0gbiA/IG4gOiAxIC0gTWF0aC5wb3coMiwgLTEwICogbik7XG59O1xuXG5leHBvcnRzLmluT3V0RXhwbyA9IGZ1bmN0aW9uKG4pe1xuICBpZiAoMCA9PSBuKSByZXR1cm4gMDtcbiAgaWYgKDEgPT0gbikgcmV0dXJuIDE7XG4gIGlmICgobiAqPSAyKSA8IDEpIHJldHVybiAuNSAqIE1hdGgucG93KDEwMjQsIG4gLSAxKTtcbiAgcmV0dXJuIC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAobiAtIDEpKSArIDIpO1xufTtcblxuZXhwb3J0cy5pbkNpcmMgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIG4gKiBuKTtcbn07XG5cbmV4cG9ydHMub3V0Q2lyYyA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAoLS1uICogbikpO1xufTtcblxuZXhwb3J0cy5pbk91dENpcmMgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyXG4gIGlmIChuIDwgMSkgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSBuICogbikgLSAxKTtcbiAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtIChuIC09IDIpICogbikgKyAxKTtcbn07XG5cbmV4cG9ydHMuaW5CYWNrID0gZnVuY3Rpb24obil7XG4gIHZhciBzID0gMS43MDE1ODtcbiAgcmV0dXJuIG4gKiBuICogKCggcyArIDEgKSAqIG4gLSBzKTtcbn07XG5cbmV4cG9ydHMub3V0QmFjayA9IGZ1bmN0aW9uKG4pe1xuICB2YXIgcyA9IDEuNzAxNTg7XG4gIHJldHVybiAtLW4gKiBuICogKChzICsgMSkgKiBuICsgcykgKyAxO1xufTtcblxuZXhwb3J0cy5pbk91dEJhY2sgPSBmdW5jdGlvbihuKXtcbiAgdmFyIHMgPSAxLjcwMTU4ICogMS41MjU7XG4gIGlmICggKCBuICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogKCBuICogbiAqICggKCBzICsgMSApICogbiAtIHMgKSApO1xuICByZXR1cm4gMC41ICogKCAoIG4gLT0gMiApICogbiAqICggKCBzICsgMSApICogbiArIHMgKSArIDIgKTtcbn07XG5cbmV4cG9ydHMuaW5Cb3VuY2UgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIDEgLSBleHBvcnRzLm91dEJvdW5jZSgxIC0gbik7XG59O1xuXG5leHBvcnRzLm91dEJvdW5jZSA9IGZ1bmN0aW9uKG4pe1xuICBpZiAoIG4gPCAoIDEgLyAyLjc1ICkgKSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqIG4gKiBuO1xuICB9IGVsc2UgaWYgKCBuIDwgKCAyIC8gMi43NSApICkge1xuICAgIHJldHVybiA3LjU2MjUgKiAoIG4gLT0gKCAxLjUgLyAyLjc1ICkgKSAqIG4gKyAwLjc1O1xuICB9IGVsc2UgaWYgKCBuIDwgKCAyLjUgLyAyLjc1ICkgKSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqICggbiAtPSAoIDIuMjUgLyAyLjc1ICkgKSAqIG4gKyAwLjkzNzU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqICggbiAtPSAoIDIuNjI1IC8gMi43NSApICkgKiBuICsgMC45ODQzNzU7XG4gIH1cbn07XG5cbmV4cG9ydHMuaW5PdXRCb3VuY2UgPSBmdW5jdGlvbihuKXtcbiAgaWYgKG4gPCAuNSkgcmV0dXJuIGV4cG9ydHMuaW5Cb3VuY2UobiAqIDIpICogLjU7XG4gIHJldHVybiBleHBvcnRzLm91dEJvdW5jZShuICogMiAtIDEpICogLjUgKyAuNTtcbn07XG5cbi8vIGFsaWFzZXNcblxuZXhwb3J0c1snaW4tcXVhZCddID0gZXhwb3J0cy5pblF1YWQ7XG5leHBvcnRzWydvdXQtcXVhZCddID0gZXhwb3J0cy5vdXRRdWFkO1xuZXhwb3J0c1snaW4tb3V0LXF1YWQnXSA9IGV4cG9ydHMuaW5PdXRRdWFkO1xuZXhwb3J0c1snaW4tY3ViZSddID0gZXhwb3J0cy5pbkN1YmU7XG5leHBvcnRzWydvdXQtY3ViZSddID0gZXhwb3J0cy5vdXRDdWJlO1xuZXhwb3J0c1snaW4tb3V0LWN1YmUnXSA9IGV4cG9ydHMuaW5PdXRDdWJlO1xuZXhwb3J0c1snaW4tcXVhcnQnXSA9IGV4cG9ydHMuaW5RdWFydDtcbmV4cG9ydHNbJ291dC1xdWFydCddID0gZXhwb3J0cy5vdXRRdWFydDtcbmV4cG9ydHNbJ2luLW91dC1xdWFydCddID0gZXhwb3J0cy5pbk91dFF1YXJ0O1xuZXhwb3J0c1snaW4tcXVpbnQnXSA9IGV4cG9ydHMuaW5RdWludDtcbmV4cG9ydHNbJ291dC1xdWludCddID0gZXhwb3J0cy5vdXRRdWludDtcbmV4cG9ydHNbJ2luLW91dC1xdWludCddID0gZXhwb3J0cy5pbk91dFF1aW50O1xuZXhwb3J0c1snaW4tc2luZSddID0gZXhwb3J0cy5pblNpbmU7XG5leHBvcnRzWydvdXQtc2luZSddID0gZXhwb3J0cy5vdXRTaW5lO1xuZXhwb3J0c1snaW4tb3V0LXNpbmUnXSA9IGV4cG9ydHMuaW5PdXRTaW5lO1xuZXhwb3J0c1snaW4tZXhwbyddID0gZXhwb3J0cy5pbkV4cG87XG5leHBvcnRzWydvdXQtZXhwbyddID0gZXhwb3J0cy5vdXRFeHBvO1xuZXhwb3J0c1snaW4tb3V0LWV4cG8nXSA9IGV4cG9ydHMuaW5PdXRFeHBvO1xuZXhwb3J0c1snaW4tY2lyYyddID0gZXhwb3J0cy5pbkNpcmM7XG5leHBvcnRzWydvdXQtY2lyYyddID0gZXhwb3J0cy5vdXRDaXJjO1xuZXhwb3J0c1snaW4tb3V0LWNpcmMnXSA9IGV4cG9ydHMuaW5PdXRDaXJjO1xuZXhwb3J0c1snaW4tYmFjayddID0gZXhwb3J0cy5pbkJhY2s7XG5leHBvcnRzWydvdXQtYmFjayddID0gZXhwb3J0cy5vdXRCYWNrO1xuZXhwb3J0c1snaW4tb3V0LWJhY2snXSA9IGV4cG9ydHMuaW5PdXRCYWNrO1xuZXhwb3J0c1snaW4tYm91bmNlJ10gPSBleHBvcnRzLmluQm91bmNlO1xuZXhwb3J0c1snb3V0LWJvdW5jZSddID0gZXhwb3J0cy5vdXRCb3VuY2U7XG5leHBvcnRzWydpbi1vdXQtYm91bmNlJ10gPSBleHBvcnRzLmluT3V0Qm91bmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9lYXNlLWNvbXBvbmVudC9pbmRleC5qcyIsInZhciBzY3JvbGwgPSByZXF1aXJlKCdzY3JvbGwtdG8nKTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlU2Nyb2xsT2Zmc2V0KGVsZW0sIGFkZGl0aW9uYWxPZmZzZXQsIGFsaWdubWVudCkge1xuICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIHZhciBlbGVtUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBjbGllbnRIZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIGRvY3VtZW50SGVpZ2h0ID0gTWF0aC5tYXgoIGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sLmNsaWVudEhlaWdodCwgaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwub2Zmc2V0SGVpZ2h0ICk7XG5cbiAgYWRkaXRpb25hbE9mZnNldCA9IGFkZGl0aW9uYWxPZmZzZXQgfHwgMDtcblxuICB2YXIgc2Nyb2xsUG9zaXRpb247XG4gIGlmIChhbGlnbm1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgc2Nyb2xsUG9zaXRpb24gPSBlbGVtUmVjdC5ib3R0b20gLSBjbGllbnRIZWlnaHQ7XG4gIH0gZWxzZSBpZiAoYWxpZ25tZW50ID09PSAnbWlkZGxlJykge1xuICAgIHNjcm9sbFBvc2l0aW9uID0gZWxlbVJlY3QuYm90dG9tIC0gY2xpZW50SGVpZ2h0IC8gMiAtIGVsZW1SZWN0LmhlaWdodCAvIDI7XG4gIH0gZWxzZSB7IC8vIHRvcCBhbmQgZGVmYXVsdFxuICAgIHNjcm9sbFBvc2l0aW9uID0gZWxlbVJlY3QudG9wO1xuICB9XG5cbiAgdmFyIG1heFNjcm9sbFBvc2l0aW9uID0gZG9jdW1lbnRIZWlnaHQgLSBjbGllbnRIZWlnaHQ7XG4gIHJldHVybiBNYXRoLm1pbihzY3JvbGxQb3NpdGlvbiArIGFkZGl0aW9uYWxPZmZzZXQgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICAgICAgICBtYXhTY3JvbGxQb3NpdGlvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW0sIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICBpZiAoZWxlbSkgcmV0dXJuIHNjcm9sbCgwLCBjYWxjdWxhdGVTY3JvbGxPZmZzZXQoZWxlbSwgb3B0aW9ucy5vZmZzZXQsIG9wdGlvbnMuYWxpZ24pLCBvcHRpb25zKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Njcm9sbC10by1lbGVtZW50L2luZGV4LmpzIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBUd2VlbiA9IHJlcXVpcmUoJ3R3ZWVuJyk7XG52YXIgcmFmID0gcmVxdWlyZSgncmFmJyk7XG5cbi8qKlxuICogRXhwb3NlIGBzY3JvbGxUb2AuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGxUbztcblxuLyoqXG4gKiBTY3JvbGwgdG8gYCh4LCB5KWAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHNjcm9sbFRvKHgsIHksIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gc3RhcnQgcG9zaXRpb25cbiAgdmFyIHN0YXJ0ID0gc2Nyb2xsKCk7XG5cbiAgLy8gc2V0dXAgdHdlZW5cbiAgdmFyIHR3ZWVuID0gVHdlZW4oc3RhcnQpXG4gICAgLmVhc2Uob3B0aW9ucy5lYXNlIHx8ICdvdXQtY2lyYycpXG4gICAgLnRvKHsgdG9wOiB5LCBsZWZ0OiB4IH0pXG4gICAgLmR1cmF0aW9uKG9wdGlvbnMuZHVyYXRpb24gfHwgMTAwMCk7XG5cbiAgLy8gc2Nyb2xsXG4gIHR3ZWVuLnVwZGF0ZShmdW5jdGlvbihvKXtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oby5sZWZ0IHwgMCwgby50b3AgfCAwKTtcbiAgfSk7XG5cbiAgLy8gaGFuZGxlIGVuZFxuICB0d2Vlbi5vbignZW5kJywgZnVuY3Rpb24oKXtcbiAgICBhbmltYXRlID0gZnVuY3Rpb24oKXt9O1xuICB9KTtcblxuICAvLyBhbmltYXRlXG4gIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgcmFmKGFuaW1hdGUpO1xuICAgIHR3ZWVuLnVwZGF0ZSgpO1xuICB9XG5cbiAgYW5pbWF0ZSgpO1xuICBcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG4vKipcbiAqIFJldHVybiBzY3JvbGwgcG9zaXRpb24uXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2Nyb2xsKCkge1xuICB2YXIgeSA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICB2YXIgeCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgcmV0dXJuIHsgdG9wOiB5LCBsZWZ0OiB4IH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Njcm9sbC10by9pbmRleC5qcyIsIi8qKlxuICogdG9TdHJpbmcgcmVmLlxuICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogUmV0dXJuIHRoZSB0eXBlIG9mIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCl7XG4gIHN3aXRjaCAodG9TdHJpbmcuY2FsbCh2YWwpKSB7XG4gICAgY2FzZSAnW29iamVjdCBEYXRlXSc6IHJldHVybiAnZGF0ZSc7XG4gICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzogcmV0dXJuICdyZWdleHAnO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJndW1lbnRzXSc6IHJldHVybiAnYXJndW1lbnRzJztcbiAgICBjYXNlICdbb2JqZWN0IEFycmF5XSc6IHJldHVybiAnYXJyYXknO1xuICAgIGNhc2UgJ1tvYmplY3QgRXJyb3JdJzogcmV0dXJuICdlcnJvcic7XG4gIH1cblxuICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuICBpZiAodmFsID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJztcbiAgaWYgKHZhbCAhPT0gdmFsKSByZXR1cm4gJ25hbic7XG4gIGlmICh2YWwgJiYgdmFsLm5vZGVUeXBlID09PSAxKSByZXR1cm4gJ2VsZW1lbnQnO1xuXG4gIHZhbCA9IHZhbC52YWx1ZU9mXG4gICAgPyB2YWwudmFsdWVPZigpXG4gICAgOiBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YuYXBwbHkodmFsKVxuXG4gIHJldHVybiB0eXBlb2YgdmFsO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LXR5cGUvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9