import mysql from 'mysql'

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'kowa4ogg',
  database: 'blog'
})

export const PORT = process.env.PORT || 8080
