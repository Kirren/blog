import express from 'express'
import { db } from '../config'
import path from 'path'

export const router = express.Router()

router.get('/', (req, res) => {
  const query = `SELECT * FROM posts`
  db.query(query, (err, result) => {
    res.render(path.resolve(__dirname, 'views/index.jsx'), {
      posts: result.reverse(),
      preview: true
    })
  })
})

router.get('/:post', (req, res) => {
  const id = req.params.post
  const query = `SELECT * FROM posts WHERE id=${db.escape(id)}`
  db.query(query, (err, result) => {
    res.render(path.resolve(__dirname, 'views/index.jsx'), {
      posts: result,
      preview: false
    })
  })
})
