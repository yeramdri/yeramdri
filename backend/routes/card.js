const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://yeramdri.com:27017/platform"

router.get('/result', function (request, response) {
    let search = request.query.search;
    MongoClient.connect(mongoUrl, {useNewUrlParser: true}, function (err, mongodb){
        if (err) throw err;
        const DB = mongodb.db('platform');
        const mySort = { created_at: -1 }
        search = search.trim();
        if (search == "" || search == "undefined") {
            DB.collection('card').find({}).sort(mySort).toArray(function (err, result) {
                if (err) throw err;
                response.send(result)
            })
            // response.send("Not Contents")
        } else {
            DB.collection('card').find({tag: new RegExp(search, 'i')}).sort(mySort).toArray(function (err, result) {
                if (err) throw err;
                response.send(result)
            })
        }
    })
});

router.get('/result/:id', function (request, response) {
    let card_id = parseInt(request.params.id);
    MongoClient.connect(mongoUrl, {useNewUrlParser: true}, function (err, mongodb){
        if (err) throw err;
        const DB = mongodb.db('platform')
        const mySort = { created_at: -1}
        DB.collection('card').find({id: card_id}).sort(mySort).toArray(function (err, result) {
            if (err) throw err;
            response.send(result)
        })
    })
})

module.exports = router;