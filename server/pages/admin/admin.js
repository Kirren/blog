import express from 'express'
import { db } from '../../config'
import verify from '../../functionality/verification'
import path from 'path'

export const router = express.Router()

router.get('/', verify.isAuth(), (req, res) => {
  res.render('admin')
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})
