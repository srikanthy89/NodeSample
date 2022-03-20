const sql = require('mssql');
const pool = require('./exportConn');

// pool.getPool().then(async (pool) => {
//     let result1 = await pool.request()
//     .input('id', sql.Int, 1)
//     .query('select * from Fruits')
    
//     console.dir(result1)
// }).catch((e) => {
//     console.error(e);
// });

pool.getPool().then(async (pool) => {
    let result1 = await pool.request()
    .input('id', sql.Int, 2)
    .query('select * from Fruits')
    console.dir(result1)
}).catch((e) => {
    console.error(e);
})