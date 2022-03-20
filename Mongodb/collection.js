const funOne = () => {
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // Database Name
    const dbName = 'student';

    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const Createcollection = db.collection('Customers');
        console.log('Found documents =>', Createcollection);
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}
//funOne();

const funTwo = () => {
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // Database Name
    const dbName = 'student';

    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('Customers');
        const insertResult = await collection.insertMany
            ([{ Id: 1, Name: 'Rahul', Age: 25, Department: 'IT' },
            { iD: 2, Name: 'Sachin', Age: 28, Department: 'CS' },
            { iD: 3, Name: 'Saurabh', Age: 27, Department: 'Mechanical' },
            { iD: 4, Name: 'Nilesh', Age: 26, Department: 'CS' },
            { iD: 4, Name: 'Yuvraj', Age: 27, Department: 'IT' },
            { iD: 5, Name: 'Shubham', Age: 23, Department: 'EC' },
            { iD: 6, Name: 'Seema', Age: 22, Department: 'IT' },
            { iD: 7, Name: 'Megha', Age: 21, Department: 'IT' },
            { iD: 8, Name: 'Megha', Age: 21, Department: 'IT' },
            { iD: 9, Name: 'Poojs', Age: 20, Department: 'BCA' },
            { Id: 10, Name: 'Srikanth', Age: 24, Department: 'BCA' }]);
        console.log('Found documents =>', insertResult);
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}
//funTwo();

const funThree= () => {
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // Database Name
    const dbName = 'student';
    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('Customers');
        const filteredDocs = await collection.find({}).toArray();
        console.log('Found documents =>', filteredDocs);
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}
funThree();

const funFour= () => {
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // Database Name
    const dbName = 'student';
    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('Customers');
        const updateResult = await collection.updateOne({ Name:'Rahul',Age:25,Department:'IT' }, 
        { $set: { Name:'Neeraj',Age:27,Department:'BBA' } });
        console.log('Updated documents =>', updateResult);        
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}
//funFour();

const funFive= () => {
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // Database Name
    const dbName = 'student';
    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('Customers');
        const deleteResult = await collection.deleteOne({ Name:'Megha'});      
        console.log('delete one  =>', deleteResult);        
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}
//funFive();