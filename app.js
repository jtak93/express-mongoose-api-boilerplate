var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);

var api = require('./routes/api-route');
var auth = require('./routes/auth-route');
var config = require('./config');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Connect to MongoDB
mongoose.connect(config.mongo.url)
console.log(`Connected to: ${config.mongo.url}`)
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(session({
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  secret: '342080a8c387b069a0d5dfac5ac89b58',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', auth);
app.use('/api/v1', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log(err)
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


module.exports = app;
