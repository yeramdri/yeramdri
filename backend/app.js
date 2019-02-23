require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const bibleCard = require('./routes/bibleCard');
const card = require('./routes/card');
const lifeCard = require('./routes/lifeCard');

const app = express();
const port = process.env.PORT || 6508;

// var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
// app.use(redirectToHTTPS([/13.209.190.90/]));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'views', 'favicon.ico')));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(() => console.log('Successfully connected to mongodb'))
.catch(e => console.error(e));

app.use('/', index);
app.use('/card', card);

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerOption = require('./swagger');
const swaggerSpec = swaggerJSDoc(swaggerOption);
const swaggerUI = require('swagger-ui-express');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

app.listen(port, function (){
  console.log(`Server running port ${port}`)
})
