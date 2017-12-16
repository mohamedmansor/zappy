//** fetch tweets from twitter. */
var Twit = require('twit');
var tw_env = require('../routes/env_twitter');

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

var tweets = T.get('search/tweets', param, function(err, data, response){
    // console.log(data.statuses[0].text);
});

/** Create a mongo collection and store tweets. */
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
// insert tweets to db
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