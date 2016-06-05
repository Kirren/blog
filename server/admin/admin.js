import express from 'express'
import { db } from '../config'
import path from 'path'

export const router = express.Router()

router.get('/', (req, res) => {
  res.render(path.resolve(__dirname, 'views/index.jsx'))
})
