import mysql from 'mysql'


// SET CONNECTION TO YOUR DATABASE WITH YOUR CONFIG
export const db = mysql.createPool({
  host: 'sss',
  user: 'user',
  password: 'password',
  database: 'database'
})

/*
YOU NEED TO CREATE TABLE 'posts' WITH COLUMNS:

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

export const PORT = process.env.PORT || 8080
