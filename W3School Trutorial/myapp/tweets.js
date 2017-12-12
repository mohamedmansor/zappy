var Twitter = require('twitter-node-client').Twitter;

var error = function(err, response, body){
    console.log('ERROR [%s]', err);
};

var success = function(data){
    console.log('Data [%s]', data);
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
twitter.getHomeTimeline({count: '10'}, error, success); // return home fimeline.
