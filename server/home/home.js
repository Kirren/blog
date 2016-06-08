import express from 'express'
import { db } from '../config'
import path from 'path'

export const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/1')
})

router.get('/:page', (req, res) => {
  const page = req.params.page - 1
  const query = `SELECT * FROM posts`
  db.query(query, (err, result) => {

    const posts = page * 5
    const postsLeft = result.length - ((page + 1) * 5)
    result = result.reverse().slice(posts, posts + 5)

    res.render(path.resolve(__dirname, 'views/index.jsx'), {
      posts: result,
      page: page + 1,
      preview: true,
      nextPosts: postsLeft
    })
  })
})

router.get('/:page/:id', (req, res) => {
  const id = req.params.id
  const query = `SELECT * FROM posts WHERE id=${db.escape(id)}`
  db.query(query, (err, result) => {
    res.render(path.resolve(__dirname, 'views/index.jsx'), {
      posts: result,
      preview: false
    })
  })
})
