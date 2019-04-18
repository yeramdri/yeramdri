require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const card = require('./routes/card');
const life = require('./routes/life');
const bible = require('./routes/bible');

const app = express();
const port = process.env.PORT || 6508;

var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
app.use(redirectToHTTPS([/13.209.190.90/]));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerOption = require('./swagger');
const swaggerSpec = swaggerJSDoc(swaggerOption);
const swaggerUI = require('swagger-ui-express');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'views', 'favicon.ico')));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(() => console.log('Successfully connected to mongodb'))
.catch(e => console.error(e));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/card', card);
app.use('/bible', bible);
app.use('/life', life);

app.listen(port, function (){
  console.log(`Server running port ${port}`)
})
