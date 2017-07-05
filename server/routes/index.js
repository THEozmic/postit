const userController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the PostIT API',
  }));

  app.post('/api/users', userController.create);
};
