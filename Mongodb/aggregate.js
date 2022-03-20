const funOne = () => {
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // Database Name
    const dbName = 'student';

    async function main() {                                          // create collection one orders
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const Createcollection = db.collection('Orders');
        console.log('Found documents =>', Createcollection);
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}
//funOne();
 
const funTwo = () => {                                                    // create collection two products
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // Database Name
    const dbName = 'student';

    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const Createcollection = db.collection('Products');
        console.log('Found documents =>', Createcollection);
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}
//funTwo();
const funThree = () => {                                                      // insert in orders
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // Database Name
    const dbName = 'student';

    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('Orders');
        const insertResult = await collection.insertOne
            ({ _Id: 1, Product_id: 154, Status: 1});
        console.log('Found documents =>', insertResult);
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}
//funThree();
const funFour = () => {                                                       //insert in products
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // Database Name
    const dbName = 'student';

    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('Products');
        const insertResult = await collection.insertMany
            ([{ _id: 154, name: 'Chocolate Heaven' },
            { _id: 155, name: 'Tasty Lemons' },
            { _id: 156, name: 'Vanilla Dreams'}]);
        console.log('Found documents =>', insertResult);
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}
//funFour();

const funFive= () => {                                                        // read orders
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // Database Name
    const dbName = 'student';
    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('Orders');
        const filteredDocs = await collection.find({}).toArray();
        console.log('Found documents =>', filteredDocs);
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}
//funFive();

const funSix= () => {                                                        // read Products
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // Database Name
    const dbName = 'student';
    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('Products');
        const filteredDocs = await collection.find({}).toArray();
        console.log('Found documents =>', filteredDocs);
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}
//funSix();

const funSeven= () => {                                                        // read Products
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // Database Name
    const dbName = 'student';
    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('Products');
        const filteredDocs = await collection.aggregate([
            { $lookup:
               {
                 from: 'Products',
                 localField: 'Product_id',
                 foreignField: '_id',
                 as: 'Orderdetails'
               }
             }])
        .toArray();
        console.log('Found documents =>', filteredDocs);
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}
funSeven();