var Twit = require('twit');


var T = new Twit({
    consumer_key:'VRfs5d3Mifdp3w3kDhlHDruMT',
    consumer_secret:'xRmQflKlKniXh8zX0728Nz4xOfJGibzHTHE7Udjt3Z0jn4cPCP',
    access_token:'937716455554125825-LwiqsafHPDE3fIHH6z5OTSZUNdrVsgq',
    access_token_secret:'OuXlBV00UxouNhoHXILqCU3NAVVDhBJ3icPbqiV3NXvmE',
});

// gettigng tweets:
var param = {
    q: 'mongo',
    count: 1
};
T.get('search/tweets', param, function(err, data, response){
    console.log(data.statuses[0].text);
});

// module.exports = T;

// posting tweet
// var tweet_param = { status: 'Hello From Elemnts office' };
// T.post('statuses/update', tweet_param,function(err, data, response){
//     console.log(data.text)
// });

// var stream = T.stream('statuses/filter', {track: 'mongo'})
// stream.on('tweet', function(tweet){
//     console.log(tweet);
// });