'use strict';

require('dotenv').config();

// This will be our application entry. We'll setup our server here.
var http = require('http');
var app = require('../../app'); // The express app we just created

var port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

var server = http.createServer(app);
server.listen(port);
//# sourceMappingURL=index.js.map