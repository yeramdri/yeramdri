const express = require('express');
const formidable = require('formidable');
const AWS = require('aws-sdk');
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
  let body = request.body;
  const form = new formidable.IncomingForm();
  if (body.type == 'life' || body.type == 'bible') {
    card.find({}).sort(sortById).then((cards) =>{
      body.id = cards[0].id + 1;
      let flag = 0;
      cards.forEach(function (card) {
        if (flag == 0 && card.type == body.type) {
          body.typeId = card.typeId + 1;
          flag = 1;
        } 
      })
      let cardInsert = new card(body, false);
      cardInsert.save().then(()=>{
        response.sendStatus(200);
      });
    }).catch(() => {
      response.sendStatus(500)
    })
  } else if (body.type == 'ministry') {
    response.sendStatus(400);
  } else {
    response.sendStatus(500);
  }

  // form.parse(request, function (err, fields, files) {
  //   if (err) throw err;

  //   if (files.userfile.name !== '') {
  //     let s3 = new AWS.S3()
  //     let params = {
  //       Bucket: 'yramdri',
  //       Key: files.userfile.name,
  //       ACL: 'public-read',
  //       Body: require('fs').createReadStream(files.userfile.path)
  //     }
  //     s3.upload(params, function(err, data) {
  //       let result = ''
  //       if (err) {
  //         result = 'Fail';
  //         throw err;
  //       }
  //       else result = 'Success';
  //       response.send(result);
  //     })
  //   }
  // });
})

router.patch('/', function (request, response) {
  let body = request.body;
  if (body.type == 'life' || body.type == 'bible') {
    card.findOneAndUpdate(
      {id: body.id},
      body
    ).then(() => {
      response.sendStatus(200);
    }).catch(() => {
      response.sendStatus(500);
    })
  } else if(body.type == 'ministry') {
    response.sendStatus(400);
  } else {
    response.sendStatus(500);
  }
})

router.delete('/', function (request, response) {
  let body = request.body;
  if (body.type == 'life' || body.type == 'bible') {
    card.findOneAndRemove({
      id: body.id
    }).then(() => {
      response.sendStatus(200);
    }).catch(() => {
      response.sendStatus(500);
    })
  } else if(body.type == 'ministry') {
    response.sendStatus(400)
  } else {
    response.sendStatus(500)
  }
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
 * /card/bible/:id:
 *   get:
 *     summary: 특정 id의 말씀 카드 리스트 불러오기
 *     tags: [Card]
 *     parameters:
 *     responses:
 *       200:
 *         description: 성공
 */
router.get('/bible/:id', function (request, response) {
  card.find({type: 'bible', typeId: Number(request.params.id)})
  .then((cards) => {
    response.send(cards)
  })
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
router.get('/life/:id', function (request, response) {
  card.find({type: 'life', typeId: Number(request.params.id)})
  .then((cards) => {
    response.send(cards)
  })
})

module.exports = router;