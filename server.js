
// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
var app = express();
var PORT = 8080;

// Sets up the Express App to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Requires api and html routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Starts the server to begin listening
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});
