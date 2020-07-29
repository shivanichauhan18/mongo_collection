var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// first method
 
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("shivani_details");
//     dbo.collection("post").drop((err,delOK )=>{
//         if (err) throw err;
//         if (delOK) console.log("Collection deleted");
//         db.close();
//     })
// })

// second method dropCollection()
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("shivani_details");
    dbo.dropCollection("empDetails",(err,del_option)=>{
        if (err) throw err;
        if (del_option) console.log("empDetail deleted");
        db.close();
    })

})