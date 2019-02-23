const express = require('express');
const router = express.Router();
const card = require('../models/card');
const sortById = { id: -1 }

/**
 * @swagger
 * /card:
 *   get:
 *     summary: 전체 카드 리스트 불러오기
 *     tags: [Card]
 *     parameters:
 *     responses:
 *       200:
 *         description: 성공
 */
router.get('/', function (request, response) {
  card.find({}).sort(sortById).then((cards) => {
    response.send(cards)
  });
})

router.post('/', function (request, response) {
  const body = request.body;
  let cardInsert = new card(body, false);
  cardInsert.save().then(()=>{
    response.sendStatus(200);
  });
})

/**
 * @swagger
 * /card/result:
 *   get:
 *     summary: 태그 검색 카드 리스트 불러오기
 *     tags: [Card]
 *     parameters:
 *     responses:
 *       200:
 *         description: 성공
 */
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

/**
 * @swagger
 * /card/bible:
 *   get:
 *     summary: 말씀 카드 전체 리스트 불러오기
 *     tags: [Card]
 *     parameters:
 *     responses:
 *       200:
 *         description: 성공
 */
router.get('/bible', function (request, response) {
  card.find({type: 'bible'})
  .sort(sortById).then((cards) => {
    response.send(cards)
  })
})

router.get('/bible/:id', function (request, response) {
  card.find({type: 'bible', typeId: Number(request.params.id)})
  .then((cards) => {
    response.send(cards)
  })
})

/**
 * @swagger
 * /card/bible/result:
 *   get:
 *     summary: 태그 검색 말씀 카드 리스트 불러오기
 *     tags: [Card]
 *     parameters:
 *     responses:
 *       200:
 *         description: 성공
 */
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

/**
 * @swagger
 * /card/life:
 *   get:
 *     summary: 삶 카드 전체 리스트 불러오기
 *     tags: [Card]
 *     parameters:
 *     responses:
 *       200:
 *         description: 성공
 */
router.get('/life', function (request, response) {
  card.find({type: 'life'})
  .sort(sortById).then((cards) =>{
    response.send(cards)
  })
})


router.get('/life/:id', function (request, response) {
  card.find({type: 'life', typeId: Number(request.params.id)})
  .then((cards) => {
    response.send(cards)
  })
})

/**
 * @swagger
 * /card/life/result:
 *   get:
 *     summary: 태그 검색 삶 카드 리스트 불러오기
 *     tags: [Card]
 *     parameters:
 *     responses:
 *       200:
 *         description: 성공
 */
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