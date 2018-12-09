var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://yeramdri.com:27017/platform"
var path = require('path');
var fs = require('fs')
var favicon = require('serve-favicon')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var bibleCard = require('./routes/bibleCard');
var lifeCard = require('./routes/lifeCard')
var app = express();
var server = require('http').Server(app)
var io = require('socket.io')(server)
// var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
// app.use(redirectToHTTPS([/13.209.190.90/]));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(require('connect-history-api-fallback')())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'views', 'favicon.ico')))
app.use('/', index);
app.use('/bible-card', bibleCard);
app.use('/life-card', lifeCard);


server.listen(6508, function (){
  console.log('Server running port 6508')
})
