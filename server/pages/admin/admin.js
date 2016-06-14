const router = require('express').Router()
const db = require('../../config').db
const verify = require('../../functionality/verification')

router.get('/', verify.isAuth(), (req, res) => {
  res.render('admin')
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports.router = router
