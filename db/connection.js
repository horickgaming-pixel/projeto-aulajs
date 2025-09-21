import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

  const pool  = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  })

  pool.getConnection()
    .then(() => console.log("Conexão ok!"))
    .catch((err) => console.log('Erro de conexão:', err))

export default pool