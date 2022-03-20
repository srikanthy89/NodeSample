const sql = require('mssql');
const pool = require('./exportConn');

const funOne = () => {
    pool.getPool().then(async (pool) => {
        let result = await pool.request()
            .query(`Create Table Village(Id int,vName varchar(50),vAge varchar(50))`)
        console.dir(result)
    }).catch((e) => {
        console.error(e);
    })
}
//funOne();
const funTwo = () => {
    pool.getPool().then(async (pool) => {
        let result1 = await pool.request()
            .query(`select * from Village`)
        console.dir(result1)
    }).catch((e) => {
        console.error(e);
    })
}
funTwo();
const funThree = () => {
    pool.getPool().then(async (pool) => {
        let result2 = await pool.request()
            .input('Id' ,sql.Int,1)
            .input('vName' ,sql.VarChar,'Bijalpur')
            .input('vAge' ,sql.VarChar,'60')
            .query(`INSERT INTO Village Values(@Id,@vName,@vAge)`)
        console.dir(result2)
    }).catch((e) => {
        console.error(e);
    })
}
//funThree();