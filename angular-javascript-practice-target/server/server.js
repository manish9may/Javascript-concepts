var express = require('../../node_modules/express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    errorhandler = require('errorhandler'),
    csrf = require('csurf'),
    routes = require('./routes'),
    //services = require('./routes/routes'),
    app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(session({
    secret: 'angular-javascript-practice-target',
    saveUninitialized: true,
    resave: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// parse various different custom JSON types as JSON 
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));
app.use(errorhandler());
app.use(csrf());


app.use(function (req, res, next) {
    var csrf = req.csrfToken();
    res.cookie('XSRF-TOKEN', csrf);
    res.locals._csrf = csrf;
    console.log(1)
    next();
});
var csrfProtection = csrf({ cookie: true })
/*app.get('/',csrfProtection, routes.index);
var baseUrl = '/api/services';
app.use(baseUrl , services);
app.get('*',csrfProtection, routes.index);*/


app.listen(8085, function () {
    console.log("'Angular JS Practice Target' Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});