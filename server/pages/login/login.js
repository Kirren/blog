import express from 'express'
import passport from 'passport'
import path from 'path'

export const router = express.Router()

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', passport.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/login'
}))
