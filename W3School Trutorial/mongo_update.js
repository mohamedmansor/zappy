var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var myquery = { address: /^S/ };
    var newvalues = { $set: { address: "Canyon 123" } };
    db.collection("customers").updateMany(myquery, newvalues, function(err, res){
        if (err) throw err;
        console.log(res.result.nModified, "1 Document update: ");
        db.close();
    });
});