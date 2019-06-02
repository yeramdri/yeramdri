var express = require('express');
var path = require('path');
var router = express.Router();
const card = require('../../../models/card');
const sortById = { id: -1 }

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
router.get('/', function (request, response) {
    card.find({type: 'bible'})
    .sort(sortById).then((cards) => {
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
  router.get('/result', function (request, response) {
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
   * /card/bible/:id:
   *   get:
   *     summary: 특정 id의 말씀 카드 리스트 불러오기
   *     tags: [Card]
   *     parameters:
   *     responses:
   *       200:
   *         description: 성공
   */
  router.get('/:id', function (request, response) {
    card.find({type: 'bible', typeId: Number(request.params.id)})
    .then((cards) => {
      response.send(cards)
    })
  })

module.exports = router;