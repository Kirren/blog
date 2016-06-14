const mysql = require('mysql').createPool

module.exports.PORT = process.env.PORT || 8080

// SET CONNECTION TO YOUR MAIN DATABASE WITH YOUR CONFIG
module.exports.db = mysql({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'blog'
})

// SET CONNECTION THAT HANDLES USER SESSION
// NO NEED TO CREATE TABLE, IT WILL ADD IT BY SELF
module.exports.dbSession = mysql({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'users'
})

// SET CONNECTION TO DATABASE THAT HANDLES USER ACCOUNTS
module.exports.dbUsers = mysql({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'users'
})
