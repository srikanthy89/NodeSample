const sql = require('mssql')
const sqlConfig = {
    user: 'root',
    password: '7808',
    database: 'Customers',
    server: 'LENOVO',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}
const connectFun = async () => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  await sql.connect(sqlConfig)
 // const result = await sql.query(`select * from Vegetables`)
  const result = await sql.query(`select * from Fruits`)

  //const result1 = await sql.query(`INSERT INTO Vegetables(Veg_ID,VegName,VegPrice)Values(6,'Coriander',300)`)
  //const result2 = await sql.query(`INSERT INTO Fruits(Veg_ID,FruitName,FruitPrice)Values(6,'Orange',400)`)

  console.dir(result)
 } catch (err) {
  // ... error checks
  console.log(err);
 }
}
connectFun();