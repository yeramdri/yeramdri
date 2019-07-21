const express = require('express');
const formidable = require('formidable');
const AWS = require('aws-sdk');
const aws_data = require('../../invisible/data.json')
AWS.config.update(aws_data)
const router = express.Router();
const card = require('../../models/card');
const sortById = { id: -1 }

const life = require('./life')
const bible = require('./bible')
const result = require('./result')

router.use('/life', life)
router.use('/bible', bible)
router.use('/result', result)

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
    response.send(cards);
  });
})

/**
 * /card:
 *   post:
 *     summary: 카드 추가
 *     tags: [Card]
 *     parameters:
 *     responses:
 *       200:
 *         description: 성공
 *       400:
 *         description: 나쁜 요청, 요청을 수정하여 보내시오
 *       500:
 *         description: 서버에러
 */

router.post('/', function (request, response) {
  const form = new formidable.IncomingForm();
  form.multiples = true;
  form.parse(request, function (err, fields, files) {
    if (err) throw err;
    if (fields.type == 'life' || fields.type == 'bible') {
      card.find({}).sort(sortById).then((cards) => {
        fields.id = cards[0].id + 1;
        let flag = 0;
        cards.forEach(function (card) {
          if (flag == 0 && card.type == fields.type) {
            fields.typeId = card.typeId + 1;
            flag = 1; 
          }
        })
        if (files.image.length === undefined) {
          let s3 = new AWS.S3();
          let params = {};
          fields.multiMedia = [];
          if (fields.type == 'life') {
            params = {
              Bucket: `yramdri/life/life-${fields.typeId}`,
              Key: files.image.name,
              ACL: 'public-read',
              Body: require('fs').createReadStream(files.image._writeStream.path)
            }
            let multiMedia = {};
            multiMedia['type'] = 'img';
            multiMedia['url'] = `${aws_data['s3_domain']}/life/life-${fields.typeId}/${files.image.name}`
            fields.multiMedia.push(multiMedia);
            s3.upload(params, function(err, data) {
              let result = '';
              if (err) {
                result = 'Fail';
                throw err;
              } else result = 'Success'
            })
          } else {
            let s3 = new AWS.S3();
            let params = {};
            fields.multiMedia = [];
            params = {
              Bucket: `yramdri/bible/bible-${fields.typeId}`,
              Key: files.image.name,
              ACL: 'public-read',
              Body: require('fs').createReadStream(files.image._writeStream.path)
            }
            let multiMedia = {};
            multiMedia['type'] = 'img';
            multiMedia['url'] = `${aws_data['s3_domain']}/bible/bible-${fields.typeId}/${files.image.name}`
            fields.multiMedia.push(multiMedia);
            s3.upload(params, function(err, data) {
              let result = '';
              if (err) {
                result = 'Fail';
                throw err;
              } else result = 'Success'
            })
          } 
        } else {
          let s3 = new AWS.S3();
          fields.multiMedia = [];
          for (let i = 0; i< files.image.length;i++) {
            let params = {}
            if (fields.type == 'life') {
              params = {
                Bucket: `yramdri/life/life-${fields.typeId}`,
                Key: files.image[i].name,
                ACL: 'public-read',
                Body: require('fs').createReadStream(files.image[i]._writeStream.path)
              }
              let multiMedia = {};
              multiMedia['type'] = 'img';
              multiMedia['url'] = `${aws_data['s3_domain']}/life/life-${fields.typeId}/${files.image[i].name}`
              fields.multiMedia.push(multiMedia);
              s3.upload(params, function(err, data) {
                let result = '';
                if (err) {
                  result = 'Fail';
                  throw err;
                } else result = 'Success';
              })
            } else {
              params = {
                Bucket: `yramdri/bible/bible-${fields.typeId}`,
                Key: files.image[i].name,
                ACL: 'public-read',
                Body: require('fs').createReadStream(files.image[i]._writeStream.path)
              }
              let multiMedia = {};
              multiMedia['type'] = 'img';
              multiMedia['url'] = `${aws_data['s3_domain']}/bible/bible-${fields.typeId}/${files.image[i].name}`
              fields.multiMedia.push(multiMedia);
              s3.upload(params, function(err, data) {
                let result = '';
                if (err) {
                  result = 'Fail';
                  throw err;
                } else result = 'Success';
              })
            }
          }
        }
      }).catch(() => {
        response.sendStatus(500)
      })
    } else if (fields.type == 'ministry') {
      response.sendStatus(400);
    } else {
      response.sendStatus(500);
    }
  })
})

/**
 * /card:
 *   patch:
 *     summary: 카드 수정
 *     tags: [Card]
 *     parameters:
 *     responses:
 *       200:
 *         description: 성공
 *       400:
 *         description: 나쁜 요청, 요청을 수정하여 보내시오
 *       500:
 *         description: 서버에러
 */

router.patch('/', function (request, response) {
  let body = request.body;
  const form = new formidable.IncomingForm();
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

/**
 * @swagger
 * /card:
 *   delete:
 *     summary: 카드 삭제
 *     tags: [Card]
 *     parameters:
 *     responses:
 *       200:
 *         description: 성공
 *       400:
 *         description: 나쁜 요청, 요청을 수정하여 보내시오
 *       500:
 *         description: 서버에러
 */
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
    response.sendStatus(400);
  } else {
    response.sendStatus(500);
  }
})

module.exports = router;