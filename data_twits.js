/**
Fetch tweets
*/
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
var tweets = T.get('search/tweets', param, function(err, data, response){
    console.log(data.statuses[0].text);
});
/**
Create a mongo collection and store tweets.
*/
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Database Name
const dbName = 'myproject';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    // console.log(tweets)
    const db = client.db(dbName);
    insertDocuments(db, function() {
      client.close();
    });
  });

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([{tweet: tweets}], function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      assert.equal(1, result.ops.length);
      console.log("Inserted 1 documents into the collection");
      callback(result);
    });
}
