var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var authenticate = require('./authenticate');

// data base connection
var DBconfig = require('./config/dbconfig')
mongoose.Promise = global.Promise;
mongoose.connect(DBconfig.url);

var db = mongoose.connection;

db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('connected to db server successfully');
});
// database connection done

var routes = require('./routes/index');
var plinthRoutes = require('./routes/plinth/index');
var plinthUser = require('./routes/plinth/user');
var plinthEvents = require('./routes/plinth/event');
var plinthResults = require('./routes/plinth/form');
var plinthPayment = require('./routes/plinth/payment');
var plinthCryptex = require('./routes/plinth/cryptex');

var app = express();

//passport

app.use(passport.initialize());

// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use('*/js', express.static(path.join(__dirname, 'public/js')))
app.use('*/css', express.static(path.join(__dirname, 'public/css')))
app.use('*/media', express.static(path.join(__dirname, 'public/media')))
app.use('*/font', express.static(path.join(__dirname, 'public/font')))


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/work/plinth', plinthRoutes);
app.use('/work/plinth/user', plinthUser);
app.use('/work/plinth/events', plinthEvents);
app.use('/work/plinth/results', plinthResults);
app.use('/work/plinth/payment', plinthPayment);
app.use('/work/plinth/cryptex', plinthCryptex);

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
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// // production error handler
// // no stacktraces leaked to user
if (app.get('env') === 'production') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      // res.render('error', {
      //   message: err.message,
      //   error: {}
      // });
      res.redirect('/');
    });
}

module.exports = app;
