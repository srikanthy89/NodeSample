const { MongoClient } = require('mongodb');
const pool=require('./exportConn');

pool.getPool().then(async (pool) => {
    let result1 = await pool.request(


    console.dir(result1)
}).catch((e) => {
    console.error(e);
})