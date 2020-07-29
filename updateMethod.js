var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: {name: "shivani", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery,newvalues,(err,res)=>{
    if (err) throw err;
    console.log(res.result.nModified)
    console.log("1 document updated");
    db.close();
  });

});