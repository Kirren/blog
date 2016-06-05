import express from 'express'
import { db } from '../config'
import path from 'path'

export const router = express.Router()

router.get('/getposts', (req, res) => {
  const query = `SELECT * FROM posts`
  db.query(query, (err, result) => {
    res.send(result)
  })
})

router.get('/getposts/:id', (req, res) => {
  const id = req.params.id
  const query = `SELECT * FROM posts WHERE id=${db.escape(id)}`
  db.query(query, (err, result) => {
    res.send(result)
  })
})
