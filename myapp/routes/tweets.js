var express = require('express');
var router = express.Router();

var Twit = require('twit');

var T = new Twit({
    consumer_key:'VRfs5d3Mifdp3w3kDhlHDruMT',
    consumer_secret:'xRmQflKlKniXh8zX0728Nz4xOfJGibzHTHE7Udjt3Z0jn4cPCP',
    access_token:'937716455554125825-LwiqsafHPDE3fIHH6z5OTSZUNdrVsgq',
    access_token_secret:'OuXlBV00UxouNhoHXILqCU3NAVVDhBJ3icPbqiV3NXvmE',
});

// gettigng tweets:
var param = {
    q: 'node',
    count: 1
};

router.get('/', function(req, res, next){
    var tweets = T.get('search/tweets', param, function(err, data, response){
        // console.log(data.statuses[0].text);
        // res.send(data.statuses[0].text)
        res.render('tweet', {tweet: data.statuses[0].text})
    });
});
module.exports = router;