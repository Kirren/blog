const router = require('express').Router()
const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')

router.get('/', (req, res) => {
  res.render('contact')
})

router.post('/sendletter', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const subject = req.body.subject
  const text = req.body.message
  res.redirect('back')
  // to be continued.
})

module.exports.router = router
