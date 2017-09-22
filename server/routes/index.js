import jwt from 'jsonwebtoken';
import controllers from '../controllers';

export default (app) => {
  // API routes for users to create accounts and login to the application
  app.post('/api/v1/users/', controllers.users.createUser);
  app.post('/api/v1/users/signin/', controllers.users.authenticateUser);
  // API route to request for new password
  app.post('/api/v1/users/request-password', controllers.users.passwordRequest);
  // API route to reset password
  app.post('/api/v1/users/reset-password/:hash', controllers.users.updatePassword);
  let token;
  app.use((req, res, next) => {
    token = req.headers['x-access-token'];
    jwt.verify(token, process.env.JWT_TOKEN || 'SECRET', (err, decoded) => {
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
  app.get('/api/v1/users/', controllers.users.fetchAllUsers);

  // API route that allow users create broadcast groups
  app.post('/api/v1/groups/', controllers.groups.createGroup);

  // API route that allow users add/remove other users to/from groups
  app.post('/api/v1/groups/:id/user/', controllers.groupUsers.addOrRemoveUser);

  // API route to get list of all groups
  app.get('/api/v1/groups/:id', controllers.groups.fetchGroups);

  // API route that allows a logged in user post messages to created groups
  app.post('/api/v1/groups/:id/message/', controllers.messages.createMessage);

  // API route that allows a logged in user retrieve messages from group
  app.get('/api/v1/groups/:id/messages/', controllers.groups.findMessages);

  // API route that returns current logged in user and their group(s)
  app.get('/api/v1/users/me/', controllers.users.fetchCurrentUser);

  // API route for search
  app.get('/api/v1/search/:group/:term/:page', controllers.users.searchUsers);

  // This should always go last
  app.all('/*', (req, res) => res.status(404).send({
    error: 'Route not found',
    status: 404
  }));
};
