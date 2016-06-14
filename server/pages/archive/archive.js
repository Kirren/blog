const router = require('express').Router()
const { db } = require('../../config')

router.get('/', (req, res) => {
  const query = `SELECT * FROM posts`
  db.query(query, (err, result) => {
    if (err) throw err
    else {
      let data = result.reverse()
      res.render('archive', {
        data
      })
    }
  })
})

router.get('/categories/:category', (req, res) => {
  let category = req.params.category
  const query = `SELECT * FROM posts WHERE action = ${db.escape(category)}`
  db.query(query, (err, result) => {
    if (err) throw err
    else {
      let data = result.reverse()
      res.render('posts', {
        posts: data,
        preview: true
      })
    }
  })
})

router.get('/latest/:id', (req, res) => {
  let id = req.params.id
  const query = `SELECT * FROM posts WHERE id = ${db.escape(id)}`
  db.query(query, (err, result) => {
    if (err) throw err
    else {
      let data = result.reverse()
      res.render('posts', {
        posts: data,
        preview: true
      })
    }
  })
})

router.get('/month/:date', (req, res) => {
 let date = req.params.date.split(' ')
 let month = date[0]
 let year = date[1]
 let target
 switch (month) {
   case 'january': {target = `1/${year}`}; break;
   case 'february': {target = `2/${year}`}; break;
   case 'march': {target = `3/${year}`}; break;
   case 'april': { target = `4/${year}` }; break;
   case 'may': { target = `5/${year}` }; break;
   case 'june': {target = `6/${year}`}; break;
   case 'july': {target = `7/${year}`}; break;
   case 'august': {target = `8/${year}`}; break;
   case 'september':{ target = `9/${year}`}; break;
   case 'october': {target = `10/${year}`}; break;
   case 'november': {target = `11/${year}`}; break;
   case 'december': {target = `12/${year}`}; break;
 }
 const query = `SELECT * FROM posts WHERE altdate = ${db.escape(target)}`
 db.query(query, (err, result) => {
   if (err) throw err
   else {
     let data = result.reverse()
     res.render('posts', {
       posts: data,
       preview: true
     })
   }
 })
})

module.exports.router = router
