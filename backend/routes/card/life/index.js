var express = require('express');
var path = require('path');
var router = express.Router();
const card = require('../../../models/card');
const sortById = { id: -1 }

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
router.get('/', function (request, response) {
    card.find({type: 'life'})
    .sort(sortById).then((cards) =>{
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
  router.get('/result', function (request, response) {
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
  
  /**
   * @swagger
   * /card/life/:id:
   *   get:
   *     summary: 특정 id의 삶 카드 전체 리스트 불러오기
   *     tags: [Card]
   *     parameters:
   *     responses:
   *       200:
   *         description: 성공
   */
  router.get('/:id', function (request, response) {
    card.find({type: 'life', typeId: Number(request.params.id)})
    .then((cards) => {
      response.send(cards)
    })
  })

module.exports = router;