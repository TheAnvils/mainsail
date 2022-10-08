const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://thebob:${process.env.DBPASS}@cluster0.q6uiocn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log("database authentication success");
exports.client = client;