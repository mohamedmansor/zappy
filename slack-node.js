var env = require('./env_slack');
var Slack = require('slack-node');

apiToken = env.API_TOKEN;


slack = new Slack(apiToken);

// listen to #general channel for 'go' message.
slack.api('channels.history', {
  channel: 'C89F8BSUV',
  count: 1,
}, function(err, response){
    if (err) throw err;
    var text = response['messages'][0]['text'];
    if(text === 'go'){
      console.log('Activated')
    }
    else{
      console.log('Not the right message');
    }
  });







// slack.api("users.list", function(err, response) {
// //   console.log(response);
// });

// slack.api('chat.postMessage', {
//   text:'hello from nodejs',
//   channel:'#general'
// }, function(err, response){
//   console.log(response);
// });

// webhookUri = "https://hooks.slack.com/services/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";
// slack = new Slack();
// slack.setWebhook(webhookUri);

// slack.webhook({
//     channel: "#general",
//     username: "bot",
//     text: "My Job is activate after hearing 'go' keyword."
//     },function(err, response) {
//         console.log(response);
// });

