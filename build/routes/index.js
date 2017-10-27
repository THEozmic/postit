'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _controllers = require('../controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  // API routes for users to create accounts and login to the application
  app.post('/api/v1/users/', _controllers2.default.users.createUser);
  app.post('/api/v1/users/signin/', _controllers2.default.users.authenticateUser);
  // API route to request for new password
  app.post('/api/v1/users/request-password', _controllers2.default.users.passwordRequest);
  // API route to reset password
  app.post('/api/v1/users/reset-password/:hash', _controllers2.default.users.updatePassword);
  var token = void 0;
  app.use(function (req, res, next) {
    token = req.headers['x-access-token'];
    _jsonwebtoken2.default.verify(token, process.env.JWT_TOKEN || 'SECRET', function (err, decoded) {
      if (err) {
        res.status(401).send({
          error: { message: 'user not authenticated, invalid access token' }
        });
        return;
      }
      // if everything is good, save to request for use in other routes
      req.decoded = decoded;
      next();
    });
  });

  // API route to get list of all users
  app.get('/api/v1/users/', _controllers2.default.users.fetchAllUsers);

  // API route that allow users create broadcast groups
  app.post('/api/v1/groups/', _controllers2.default.groups.createGroup);

  // API route that allow users add/remove other users to/from groups
  app.post('/api/v1/groups/:id/user/', _controllers2.default.groupUsers.addOrRemoveUser);

  // API route to get list of all groups
  app.get('/api/v1/groups/:id', _controllers2.default.groups.fetchGroups);

  // API route that allows a logged in user post messages to created groups
  app.post('/api/v1/groups/:id/message/', _controllers2.default.messages.createMessage);

  // API route that allows a logged in user retrieve messages from group
  app.get('/api/v1/groups/:id/messages/', _controllers2.default.groups.findMessages);

  // API route that returns current logged in user and their group(s)
  app.get('/api/v1/users/me/', _controllers2.default.users.fetchCurrentUser);

  // API route for search
  app.get('/api/v1/search/:group/:query/:page', _controllers2.default.users.searchUsers);

  // This should always go last
  app.all('/*', function (req, res) {
    return res.status(404).send({
      error: 'Route not found',
      status: 404
    });
  });
};
//# sourceMappingURL=index.js.map