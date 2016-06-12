import express from 'express'
import { db } from '../config'
import path from 'path'
import authentication from '../authentication'

export const router = express.Router()

router.get('/', authentication.isAuth(), (req, res) => {
  res.render(path.resolve(__dirname, 'views/index.jsx'))
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})
