var Twitter = require('twitter-node-client').Twitter;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/zappy";

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
var tweets = twitter.getHomeTimeline({count: '1'}, error, success); // return home fimeline.

// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     db.collection("zapppy").insertMany(tweets, function(err, res){
//         if (err) throw err;
//         console.log("Collection Created and tweets stored !");
//         db.close();
//     });
// });
MongoClient.connect(url, function(err, database){
    const mydb = database.db('mydb');
    mydb.collection('tweets');
    mydb.close();
});