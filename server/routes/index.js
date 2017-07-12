import jwt from 'jsonwebtoken';
import controllers from '../controllers';

export default (app) => {
  // API routes for users to create accounts and login to the application
  app.post('/api/users/signup/', controllers.users.create);
  app.post('/api/users/signin/', controllers.users.auth);
  let token;
  app.use((req, res, next) => {
    token = req.body.token || req.query.token || req.headers['x-access-token'];
    jwt.verify(token, 'Armageddon', (err, decoded) => {
      if (err) {
        res.status(401).send({
          message: 'user not authenticated, invalid access token'
        });
        return;
      }
      // if everything is good, save to request for use in other routes
      req.decoded = decoded;
      next();
    });
  });

  app.all('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the PostIT API',
  }));

  // API route to get list of all users
  app.get('/api/users/', controllers.users.fetch);

  // API route that allow users create broadcast groups
  app.post('/api/groups/', controllers.groups.create);

  // API route to get list of all groups
  app.get('/api/groups/', controllers.groups.fetch);

  // API route to get list of all users in a group
  app.get('/api/group/:id', controllers.groups.fetchMembers);

  // API route that allow users add other users to groups
  app.post('/api/groups/:id/user/', controllers.groupUsers.addUser);

  // API route that allows a logged in user post messages to created groups
  app.post('/api/groups/:id/message/', controllers.messages.create);

  // API route that allows a logged in user retrieve messages from group
  app.get('/api/groups/:id/messages/', controllers.groups.messages);
};
