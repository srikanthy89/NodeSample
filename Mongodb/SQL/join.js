const sql = require('mssql');
const pool = require('./exportConn');

const funOne = () => {
    pool.getPool().then(async (pool) => {
        let result = await pool.request()
            .query(`Create Table Course(c_Id int,cName varchar(50),fDay varchar(50),cTime varchar(50))`)
        console.dir(result)
    }).catch((e) => {
        console.error(e);                 // create table 1
    })
}
//funOne();

const funTwo = () => {                             // create table 2
    pool.getPool().then(async (pool) => {
        let result1 = await pool.request()
            .query(`Create Table Fees(f_Id int,Tfees int,fDay varchar(50),Dfees varchar(50))`)
        console.dir(result1)
    }).catch((e) => {
        console.error(e);
    })
}
//funTwo();

const funThree = () => {                                      // insert in table 1 
    pool.getPool().then(async (pool) => {
        let result2 = await pool.request()
            .input('c_ID', sql.Int, 5)
            .input('cName', sql.VarChar, 'nodejs')
            .input('fDay', sql.VarChar, 'Thursday')
            .input('cTime', sql.VarChar, '8 AM')
            .query(`INSERT INTO Course Values(@c_Id,@cName,@fDay,@cTime)`)
        console.dir(result2)
    }).catch((e) => {
        console.error(e);
    })
}
//funThree();

const funFour = () => {                                          // read table 1 
    pool.getPool().then(async (pool) => {
        let result3 = await pool.request()
            .input('c_ID', sql.Int, 1)
            .query(`select * from Course`)
        console.dir(result3)
    }).catch((e) => {
        console.error(e);
    })
}
funFour();

const funFive = () => {                                               // insert in table 2
    pool.getPool().then(async (pool) => {
        let result4 = await pool.request()
            .input('f_Id', sql.Int, 5)
            .input('Tfees', sql.Int, 60000)
            .input('fDay', sql.VarChar, 'Saterday')
            .input('Dfees', sql.VarChar, '10 AM')
            .query(`INSERT INTO Fees Values(@f_Id,@Tfees,@fDay,@Dfees)`)
        console.dir(result4)
    }).catch((e) => {
        console.error(e);
    })
}
//funFive();

const funSix = () => {                                                       // read table 2
    pool.getPool().then(async (pool) => {
        let result5 = await pool.request()
            .input('f_Id', sql.Int, 1)
            .query(`select * from Fees`)
        console.dir(result5)
    }).catch((e) => {
        console.error(e);
    })
}
//funSix();

const funSeven = () => {                                                         // INNER JOIN 
    pool.getPool().then(async (pool) => {
        let result6 = await pool.request()
            .input('c_Id', sql.Int, 1)
            //.input('f_Id', sql.Int, 1)
            .query(`SELECT * FROM Course INNER JOIN Fees ON Course.c_Id=Fees.f_Id;`)
        console.dir(result6)
    }).catch((e) => {
        console.error(e);
    })
}
//funSeven();


const funEight = () => {                                                         // Left Join 
    pool.getPool().then(async (pool) => {
        let result7 = await pool.request()
            .input('c_Id', sql.Int, 1)
            .query(`SELECT * FROM Course LEFT OUTER JOIN Fees ON Course.c_Id=Fees.f_Id;`)
        console.dir(result7)
    }).catch((e) => {
        console.error(e);
    })
}
funEight();