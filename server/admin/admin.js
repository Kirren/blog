import express from 'express'
import { db } from '../config'
import path from 'path'

export const router = express.Router()

// dashboard panel
router.get('/', (req, res) => {
  res.render(path.resolve(__dirname, 'views/dashboard/index.jade'))
})

// posts panel
router.get('/posts', (req, res) => {
  const query = `SELECT * FROM posts`
  db.query(query, (err, result) => {
    res.render(path.resolve(__dirname, 'views/posts/index.jade'), {
      posts: result.reverse()
    })
  })
})
