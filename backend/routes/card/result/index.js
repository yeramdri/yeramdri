var express = require('express');
var path = require('path');
var router = express.Router();
const card = require('../../../models/card');
const sortById = { id: -1 }

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

router.get('/', function (request, response) {
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
  
router.get('/tag', function (request, response){
  const search = request.query.search.trim();
  if (search == "" || search == undefined) {
    response.sendStatus(400)
  } else {
    card.find({
      tag: new RegExp(search, 'i')
    }).sort(sortById).then((cards) => {
      let dic = {};
      for(let i=0; i<cards.length; i++) {
        let key = String(i);
        dic[key] = cards[i].tag;
      }
      response.send(JSON.stringify(dic))
    })
  }
})


module.exports = router;