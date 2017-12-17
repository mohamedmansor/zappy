const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

// app.get('/', (req, res) => res.send('hello world'));
// app.get('/', (req, res) => res.send('slack'))

var elack_env = require('./env_slack');
var Slack = require('slack-node');
var Twit = require('twit');
var tw_env = require('./env_twitter');

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

app.get('/', function(req, res,){
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
            console.log('Not the right message');
            res.send('Not the right message');
          }
        });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
// app.listen(3000, () => console.log('Example app listening on port 3000!'))
