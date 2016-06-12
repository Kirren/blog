import express from 'express'
import passport from 'passport'
import path from 'path'

export const router = express.Router()

router.get('/', (req, res) => {
  res.render(path.resolve(__dirname, 'views/index.jsx'))
})

router.post('/', passport.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/login'
}))
