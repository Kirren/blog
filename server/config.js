const mysql = require('mysql')

// SET CONNECTION TO YOUR DATABASE FOR AUTO SETTING DATABASE/TABLES
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password'
})

connection.connect()
connection.query(`create database if not exists blogDB`, (err, res) => {if (err) throw err})
connection.query('use blogDB', (err, res) => {if (err) throw err})
connection.query(`create table if not exists posts (id TINYTEXT, title TINYTEXT, text TEXT, date TINYTEXT, altdate TINYTEXT, action TINYTEXT, picture TINYTEXT, gallery JSON, video TINYTEXT, quote TINYTEXT, hashtags TINYTEXT)`, (err, res) => {if (err) throw err})
connection.query(`create table if not exists users (id INT primary key auto_increment, username VARCHAR(100) unique, password VARCHAR(100))`, (err, res) => { if (err) throw err })

// PLEASE SET ADMIN USERNAME AND PASSWORD
connection.query(`INSERT IGNORE INTO users (username, password) VALUES ('admin', 'password')`)
connection.end()

// SET CONNECTION TO YOUR MAIN DATABASE WITH YOUR CONFIG
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'blogDB'
})

module.exports.PORT = process.env.PORT || 8080
module.exports.db = db
