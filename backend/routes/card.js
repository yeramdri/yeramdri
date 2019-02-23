const express = require('express');
const router = express.Router();
const card = require('../models/card');
const sortById = { id: -1 }

router.get('/', function (request, response){
  card.find({}).sort(sortById).then((cards) => {
    response.send(cards)
  });
})

router.get('/result', function (request, response) {
  const search = request.query.search.trim();
  if (search == "" || search == undefined) {
    response.sendStatus(404)
  } else {
    card.find({tag: new RegExp(search, 'i')})
    .sort(sortById).then((cards) => {
      response.send(cards)
    })
  }
})

router.get('/bible', function (request, response) {
  card.find({type: 'bible'})
  .sort(sortById).then((cards) => {
    response.send(cards)
  })
})

router.get('/bible/result', function (request, response) {
  const search = request.query.search.trim();
  if (search == "" || search == undefined) {
    response.sendStatus(404)
  } else {
    card.find({type: 'bible', tag: new RegExp(search, 'i')})
    .sort(sortById).then((cards) => {
      response.send(cards)
    })
  }
})

router.get('/life', function (request, response) {
  card.find({type: 'life'})
  .sort(sortById).then((cards) =>{
    response.send(cards)
  })
})

router.get('/life/result', function (request, response) {
  const search = request.query.search.trim();
  if (search == "" || search == undefined) {
    response.sendStatus(404)
  } else {
    card.find({type: 'life', tag: new RegExp(search, 'i')})
    .sort(sortById).then((cards) => {
      response.send(cards)
    })
  }
})
module.exports = router;