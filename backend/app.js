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
var app = express();
var server = require('http').Server(app)
var io = require('socket.io')(server)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// var cors = require('cors')

// var corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200
// }

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
// app.use(cors(corsOptions))

app.post('/bible-card', function (request, response) {
  let search = request.body.search
  MongoClient.connect(mongoUrl, {useNewUrlParser: true}, function (err, mongodb){
    if (err) throw err;
    const DB = mongodb.db('platform')
    if (search == "" || search == "undefined") {
      DB.collection('bibleCard').find({}).toArray(function (err, result) {
        if (err) throw err;
        response.send(result)
      })
    } else {
      DB.collection('bibleCard').find({tag: new RegExp(search, 'i')}).toArray(function (err, result) {
        if (err) throw err;
        response.send(result)
      })
    }
  })
})

server.listen(6508, function (){
  console.log('Server running port 6508')
})
MongoClient.connect(mongoUrl,{ useNewUrlParser: true }, function (err, mongodb) {
  if (err) throw err;
  const DB = mongodb.db('platform')
  io.on('connection', function (socket) {
    socket.emit('connect', 'ok')
    socket.on('bible_card_data_req', function (data) {
      DB.collection('bibleCard').find({}).toArray(function (err, result) {
        if (err) throw err;
        socket.emit('bibleCard', result)
      })
    })
  })
})
