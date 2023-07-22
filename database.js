import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })
// const Pool = new Pool({
//     user:process.env.POSTGRES_USER,
//     host: process.env.POSTGRES_HOST,
//     database:process.env.POSTGRES_DATABASE,
//     password:process.env.POSTGRES_PASSWORD,
//     port:5431,
// })


Pool.connect((err) => {
    if (err) throw err;
    console.log('Connect to postgresSql successfully');
})

module.exports = Pool