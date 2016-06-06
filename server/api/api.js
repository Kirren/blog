import express from 'express'
import uuid from 'node-uuid'
import { db } from '../config'
import path from 'path'

export const router = express.Router()

router.get('/getposts', (req, res) => {
  const query = `SELECT * FROM posts`
  db.query(query, (err, result) => {
    res.send(result)
  })
})

router.get('/getposts/:id', (req, res) => {
  const id = req.params.id
  const query = `SELECT * FROM posts WHERE id=${db.escape(id)}`
  db.query(query, (err, result) => {
    res.send(result)
  })
})

router.post('/addpost', (req, res) => {
  const body = {
    id: uuid.v1(),
    title: (req.body.title) ? req.body.title : null,
    text: (req.body.text) ? req.body.text : null,
    action: (req.body.action) ? req.body.action : null,
    date: (req.body.date) ? req.body.date : null,
    video: (req.body.video) ? req.body.video : null,
    quote: (req.body.quote) ? req.body.quote : null,
    picture: (req.body.picture) ? req.body.picture : null,
    hashtags: (req.body.hashtags) ? req.body.hashtags : null
  }
  const query =
  `
  INSERT INTO posts (id, title, text, action, date, video, quote, picture, hashtags)
  VALUES (${db.escape(body.id)}, ${db.escape(body.title)}, ${db.escape(body.text)}, ${db.escape(body.action)}, ${db.escape(body.date)}, ${db.escape(body.video)}, ${db.escape(body.quote)}, ${db.escape(body.picture)}, ${db.escape(body.hashtags)})
  `

  db.query(query, (err, result) => {
    if (err) throw err
    res.end()
  })
})
