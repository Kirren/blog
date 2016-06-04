import mysql from 'mysql'

export const db = mysql.createPool({
  host: 'localhost',
  user: 'pavlovsch',
  password: 'kowa4ogg',
  database: 'blog'
})

export const PORT = process.env.PORT || 8080
