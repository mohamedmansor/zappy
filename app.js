const express = require('express');

const app = express();

// app.get('/', (req, res) => res.send('hello world'));
// app.get('/', (req, res) => res.send('slack'))

var env = require('./env_slack');
var Slack = require('slack-node');
var Twit = require('twit');

apiToken = env.API_TOKEN;
slack = new Slack(apiToken);

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

app.listen(3000, () => console.log('Example app listening on port 3000!'))
