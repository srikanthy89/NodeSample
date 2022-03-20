const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'student';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('Employee');
    const filteredDocs = await collection.find({}).toArray();
    //const insertDocs= await collection.insertOne({ item:'mobile',qty:'60'});
    //const insertResult = await collection.insertMany([{ item:'bottle',qty:30}, { item: 'watch',qty:40}, { item:'plugins', qty:'60'}]);
    //console.log('Inserted documents =>', insertResult);
    //const deleteResult = await collection.deleteMany({ item:'plugins'});
    //console.log('Deleted documents =>', deleteResult);
    //const indexName = await collection.createIndex({ qty:40 });
    //console.log('index name =', indexName);
    console.log('Found documents filtered  =>', filteredDocs);

    // the following code examples can be pasted here...
    return 'done.';
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());