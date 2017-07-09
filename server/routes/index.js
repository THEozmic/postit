import jwt from 'jsonwebtoken';
import controllers from '../controllers';

export default (app) => {
  app.use((req, res, next) => {
    // exclude these url from this middleware
    if (req.originalUrl === '/api/user/signin/' || req.originalUrl === '/api/user/signup/') {
      next();
    } else {
      const token = req.body.token || req.query.token || req.headers['x-access-token'];
      jwt.verify(token, 'secret', (err, decoded) => {
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
    }
  });

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the PostIT API',
  }));

  app.post('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the PostIT API'
  }));

  // API routes for users to create accounts and login to the application
  app.post('/api/user/signup', controllers.users.create);
  app.post('/api/user/signin', controllers.users.auth);

  // API route to get list of all users
  app.get('/api/user', controllers.users.fetch);

  // API route that allow users create broadcast groups
  app.post('/api/group/', controllers.groups.create);

  // API route to get list of all groups
  app.get('/api/group/', controllers.groups.fetch);

  // API route that allow users add other users to groups
  app.post('/api/group/:id/user', controllers.groupUsers.addUser);

  // API route that allows a logged in user post messages to created groups
  app.post('/api/group/:id/message', controllers.messages.create);

  // API route that allows a logged in user retrieve messages from group
  app.get('/api/group/:id/messages', controllers.groups.messages);
};
