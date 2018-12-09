var express = require('express');
var path = require('path');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://yeramdri.com:27017/platform"

router.post('/', function (request, response) {
  let search = request.body.search
  MongoClient.connect(mongoUrl, {useNewUrlParser: true}, function (err, mongodb){
    if (err) throw err;
    const DB = mongodb.db('platform')
    if (search == "" || search == "undefined") {
      DB.collection('lifeCard').find({}).toArray(function (err, result) {
        if (err) throw err;
        response.send(result)
      })
    } else {
      DB.collection('lifeCard').find({tag: new RegExp(search, 'i')}).toArray(function (err, result) {
        if (err) throw err;
        response.send(result)
      })
    }
  })
})
router.get('/result', function (request, response) {
  let search = request.query.search
  MongoClient.connect(mongoUrl, {useNewUrlParser: true}, function (err, mongodb){
    if (err) throw err;
    const DB = mongodb.db('platform')
    search = search.trim()
    if (search == "" || search == "undefined") {
      response.send("Not Contents")
    } else {
      DB.collection('lifeCard').find({tag: new RegExp(search, 'i')}).toArray(function (err, result) {
        if (err) throw err;
        response.send(result)
      })
    }
  })
})
router.get('/result/:id', function (request, response) {
  let card_id = parseInt(request.params.id);
  MongoClient.connect(mongoUrl, {useNewUrlParser: true}, function (err, mongodb){
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('lifeCard').find({id: card_id}).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})

module.exports = router;