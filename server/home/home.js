import express from 'express'
import { db } from '../config'
import path from 'path'

export const router = express.Router()

router.get('/', (req, res) => {
  const query = `SELECT * FROM posts`
  db.query(query, (err, result) => {
    res.render(path.resolve(__dirname, 'views/index.jade'), {
      posts: result.reverse()
    })
  })
})
