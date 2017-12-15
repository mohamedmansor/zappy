var express = require('express');

/** routes */
var routes = require('./routes/index.js');

/** express instance */
var app = express();

app.use('/', routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = app;