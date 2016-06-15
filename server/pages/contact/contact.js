const router = require('express').Router()
const nodemailer = require('nodemailer')

router.get('/', (req, res) => {
  res.render('contact')
})

router.post('/sendletter', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const subject = req.body.subject
  const text = req.body.message

  // make it work
})

module.exports.router = router
