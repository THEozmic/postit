const usersController = require('../controllers').users;
const groupsController = require('../controllers').groups;
const messageController = require('../controllers').messages;
const readMessagesController = require('../controllers').readMessages;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the PostIT API',
  }));

  // API routes for users to create accounts and login to the application
  app.post('/api/user/signup', usersController.create);
  app.post('/api/user/signin', usersController.auth);

  // API route to get list of all users
  app.get('/api/user', usersController.fetch);

  // API route that allow users create broadcast groups
  app.post('/api/group/new', groupsController.create);

  // API route to get list of all groups
  app.get('/api/group/', groupsController.fetch);

  // API route that allow users add other users to groups
  app.post('/api/group/:id/add/:user_id', groupsController.addUser);

  // API route that allows a logged in user post messages to created groups
  app.post('/api/group/:id/message', messageController.create);

  // API route that allows a logged in user retrieve messages from group
  app.get('/api/group/:id/messages', groupsController.messages);

  // API route that marks messages as read
  app.post('/api/group/:id/messages', readMessagesController.create);
};
