import express from 'express';
import logger from 'morgan';
import path from 'path';
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
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/dist/*', (req, res) => {
  res.sendFile(path.join(__dirname, `../client/${req.originalUrl}`));
});

app.get('api/v1/*', (req, res) => res.status(404).send({
  message: 'Route not found',
}));
app.post('api/v1/*', (req, res) => res.status(404).send({
  message: 'Route not found',
}));

routes(app);

module.exports = app;
