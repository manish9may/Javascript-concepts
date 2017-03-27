'use strict';
var express = require('../../node_modules/express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    errorhandler = require('errorhandler'),
    fs          = require('fs'),
    csrf = require('csurf'),
    app = express();
app.use(session({
    secret: 'javascript-data-sctructure-problems',
    saveUninitialized: true,
    resave: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// parse various different custom JSON types as JSON 
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));
app.use(errorhandler());
app.use(csrf());

//Would normally copy necessary scripts into src folder (via grunt/gulp) but serving
//node_modules directly to keep everything as simple as possible
app.use('/node_modules', express.static(__dirname + '/../../node_modules'));

app.use(function (req, res, next) {
    var csrf = req.csrfToken();
    res.cookie('XSRF-TOKEN', csrf);
    res.locals._csrf = csrf;
    next();
});

// redirect all others to the index (HTML5 history)
app.all('/*', function(req, res) {
    res.sendFile('index.html',{root : __dirname + '/../'});
});
app.listen(8085, function () {
    console.log("'Data Structure Practice Target' Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

//Open browser
var opn = require('opn');

/*opn('http://localhost:8085').then(() => {
    console.log('Browser closed.');
});*/
