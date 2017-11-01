import controllers from '../controllers';
import verifyToken from '../helpers/verifyToken';

export default (app) => {
  // API route for users to create account
  app.post('/api/v1/users/', controllers.users.createUser);

  // API routes for users to authenticate user
  app.post('/api/v1/users/signin/', controllers.users.authenticateUser);

  // API route to request for new password
  app.post('/api/v1/users/request-password', controllers.users.passwordRequest);

  // API route to reset password
  app.post('/api/v1/users/reset-password/:hash',

    controllers.users.updatePassword);

  // API route that allow users create broadcast groups
  app.post('/api/v1/groups/', verifyToken, controllers.groups.createGroup);

  // API route that allow users add/remove other users to/from groups
  app.post('/api/v1/groups/:id/user/', verifyToken,

    controllers.groupUsers.addOrRemoveUser);

  // API route that allows a logged in user post messages to created groups
  app.post('/api/v1/groups/:id/message/', verifyToken,

    controllers.messages.createMessage);

  // API route that allows a logged in user retrieve messages from group
  app.get('/api/v1/groups/:id/messages/', verifyToken,

    controllers.groups.findMessages);

  // API route that returns current logged in user and their group(s)
  app.get('/api/v1/users/me/', verifyToken, controllers.users.fetchCurrentUser);

  // API route for search
  app.get('/api/v1/search/:group/:query/:page', verifyToken,

    controllers.users.searchUsers);

  // This should always go last
  app.all('/*', (req, res) => res.status(404).send({
    error: 'Route not found',
    status: 404
  }));
};
