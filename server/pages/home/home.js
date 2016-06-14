const router = require('express').Router()
const db = require('../../config').db

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

    res.render('home', {
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
    res.render('home', {
      posts: result,
      preview: false
    })
  })
})

module.exports.router = router
