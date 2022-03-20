const sql = require('mssql');
const pool = require('./exportConn');

const funOne = () => {
    pool.getPool().then(async (pool) => {
        let result2 = await pool.request()
            .input('id', sql.Int, 2)
            // .query('create table Colleage(ID int,Name varchar(50),Age int,Fees int);')
            .query('select * FROM Vegetables')
        console.dir(result2)
    }).catch((e) => {
        console.error(e);
    })
    pool.getPool().then(async (pool) => {
        let result3 = await pool.request()
            .input('VegName', sql.VarChar, 'Cabage')
            .query('DELETE FROM Vegetables where VegName=@VegName;')
        console.dir(result3)
    }).catch((e) => {
        console.error(e);
    })
}
funOne();

const funTwo = () => {
    pool.getPool().then(async (pool) => {
        let result4 = await pool.request()
        .input('Veg_ID', sql.Int, 5)
        .input('VegName', sql.VarChar, 'juice')
        .input('VegPrice', sql.VarChar, '3000')
        .query('Update Vegetables SET VegName=@VegName,VegPrice=@VegPrice where Veg_ID=@Veg_ID;')
        console.dir(result4)
    }).catch((e) => {
        console.error(e);
    })

    pool.getPool().then(async (pool) => {
    let result5 = await pool.request()
    .input('Veg_ID', sql.Int, 15)
    .input('VegName', sql.VarChar, 'Coria')
    .input('VegPrice', sql.VarChar, '1500')
    .query(`INSERT INTO Vegetables Values (@Veg_ID,@VegName,@VegPrice) WAITFOR DELAY '00:00:02'`)
     console.dir(result5)
     }).catch((e) => {
     console.error(e);
    })
}
//funTwo();