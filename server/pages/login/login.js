const router = require('express').Router()
const passport = require('passport')

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', passport.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/login'
}))

module.exports.router = router
