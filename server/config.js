import mysql from 'mysql'

export const PORT = process.env.PORT || 8080

// SET CONNECTION TO YOUR MAIN DATABASE WITH YOUR CONFIG
export const db = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database'
})

/*
YOU NEED TO CREATE TABLE 'posts' in DATABASE 'main_database' WITH COLUMNS:

id TINYTEXT
title TINYTEXT
text TEXT
action TINYTEXT
date TINYTEXT
video TINYTEXT
quote TINYTEXT
picture TINYTEXT
hashtags TINYTEXT
gallery JSON

*/

// SET CONNECTION THAT HANDLES USER SESSION
// NO NEED TO CREATE TABLE, IT WILL ADD IT BY SELF
export const dbSession = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database'
})

// SET CONNECTION TO DATABASE THAT HANDLES USER ACCOUNTS
export const dbUsers = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database'
})

/*
YOU NEED TO CREATE TABLE 'users' IN DATABASE 'user_database' WITH COLUMNS:

id INT primary key auto_increment
username VARCHAR(100) unique
password VARCHAR(100)

*/
