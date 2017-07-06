const usersController = require('../controllers').users;
const groupsController = require('../controllers').groups;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the PostIT API',
  }));

  app.post('/api/user/signup', usersController.create);
  app.post('/api/user/signin', usersController.auth);
  app.get('/api/user', usersController.fetch);
  app.post('/api/group/', groupsController.create);
  app.get('/api/group/', groupsController.fetch);
  // app.post('/api/group/:id/user', groupsController.addUser);
  // app.post('/api/group/:id/message', groupsController.message);
  // app.post('/api/group/:id/messages', groupsController.messages);
};
