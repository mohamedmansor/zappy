/**
listen to slack hot word "go" Then run the tweets.js file to fetch tweets.
*/
var webClient = require('@slack/client').WebClient;
var env = require('./env_slack');
console.log(env);

// var token = '3QLwUqyTdZ7tPxaqMXKsEOBZ';
var web = new webClient(env);

web.channels.list(function(err, info){
    if (err){
        console.log("Error", err);
    }
    else{
        for (var i in info.channels){
            console.log(info.channels[i].name);
        }
    }
});