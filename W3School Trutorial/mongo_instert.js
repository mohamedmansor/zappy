var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
// insert one
// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     var myobj = {name:"mohamed", address: "Cairo"};
//     db.collection("customers").insertOne(myobj, function(err, res){
//         if (err) throw err;
//         console.log('1 document inserted.');
//         db.close();
//     });
// });

// insert many
MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
    ];
    db.collection("customers").insertMany(myobj, function(err, res){
        if(err) throw err;
        console.log('Number of documents inserted : ' + res.insertedCount);
        // console.log(res.insertedCount)
        db.close();
    });
});
