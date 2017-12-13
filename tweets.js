/**
 This tweets.js file for user time line of FictionFone twitter account
 username: fiction_fone
 password: adminuser
*/

var Twitter = require('twitter-node-client').Twitter;

var error = function(err, response, body){
    console.log('ERROR [%s]', err);
};

var success = function(data){
    console.log(data)
    // for (var i=0; i<data.lenght; i++){
    //     console.log('Data [%s]', data[i]);
    // }
};


//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": "VRfs5d3Mifdp3w3kDhlHDruMT",
    "consumerSecret": "xRmQflKlKniXh8zX0728Nz4xOfJGibzHTHE7Udjt3Z0jn4cPCP",
    "accessToken": "937716455554125825-LwiqsafHPDE3fIHH6z5OTSZUNdrVsgq",
    "accessTokenSecret": "OuXlBV00UxouNhoHXILqCU3NAVVDhBJ3icPbqiV3NXvmE",
    "callBackUrl": ""
};

var twitter = new Twitter(config);

// var parameters = {
//     q: 'node',
//     count : 2
// }

var tweets = twitter.getUserTimeline({ screen_name: 'FictionFone', count: '1'}, error, success);

// twitter.getReTweetsOfMe({ count: '1'}, error, success);
// twitter.getSearch(parameters, errorCallback, successCallback);
// // var tweets = twitter.getHomeTimeline({count: '1'}, error, success); // return home fimeline.
// twitter.getReTweetsOfMe({ count: '1'}, error, success);

