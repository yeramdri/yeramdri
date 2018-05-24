var express = require('express');
var path = require('path');
var fs = require('fs')
var favicon = require('serve-favicon')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var app = express();
app.use(require('connect-history-api-fallback')())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'views', 'favicon.ico')))

app.use('/', index);

app.listen(6508, function (){
  console.log('Server running port 6508')
})
