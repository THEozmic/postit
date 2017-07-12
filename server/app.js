import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that
// sends back a welcome message in JSON format.
routes(app);

app.get('*', (req, res) => res.status(404).send({
  message: 'Route not found',
}));
app.post('*', (req, res) => res.status(404).send({
  message: 'Route not found',
}));

module.exports = app;
