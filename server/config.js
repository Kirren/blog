import mysql from 'mysql'

export const PORT = process.env.PORT || 8080

// SET CONNECTION TO YOUR MAIN DATABASE WITH YOUR CONFIG
export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'blog'
})

// SET CONNECTION THAT HANDLES USER SESSION
// NO NEED TO CREATE TABLE, IT WILL ADD IT BY SELF
export const dbSession = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'users'
})

// SET CONNECTION TO DATABASE THAT HANDLES USER ACCOUNTS
export const dbUsers = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'users'
})
