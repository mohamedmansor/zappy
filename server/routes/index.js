var express = require('express');

var router = express.Router();

var elack_env = require('./env_slack');
var Slack = require('slack-node');
var Twit = require('twit');
var tw_env = require('./env_twitter');


router.get('/', function(req, res, next) {
    res.send('Hello, World!');
});

// router.get('/tweet', fetchTweets);
router.get('/slack', listenToSlack);


/** Listen to slack and fetch tweet */
function listenToSlack(req, res){
    apiToken = elack_env.API_TOKEN;
    slack = new Slack(apiToken);

    var T = new Twit({
        consumer_key: tw_env.consumer_key,
        consumer_secret: tw_env.consumer_secret,
        access_token: tw_env.access_token,
        access_token_secret: tw_env.access_token_secret,
    });
    
    // gettigng tweets:
    var param = {
        q: 'mongo',
        count: 1
    };

    slack.api('channels.history', {
        channel: 'C89F8BSUV',
        count: 1,
    }, function(err, response){
        if (err) throw err;
        var text = response['messages'][0]['text'];
        if(text === 'go'){
            console.log('Activated');
            T.get('search/tweets', param, function(err, data, response){
                console.log(data.statuses[0].text);
                res.send(data.statuses[0].text);
            });
        }
        else{
            res.send('Not the right message');
        }
    });
};

module.exports = router;