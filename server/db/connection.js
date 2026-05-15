import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config()

const pool = mysql.createPool({
    host:process.env.DB_HOST || 'localhost',
    user:process.env.DB_USER || 'root',
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME || 'shoppy'
})

//DB connection Test
pool.getConnection()
    .then(conn=>console.log('DB 연동 성공 ✅')) //성공
    .catch(err=>console.log('DB 연동 실패 ❎'))//실패

export default pool;