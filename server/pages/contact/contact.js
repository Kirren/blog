const router = require('express').Router()
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

router.get('/', (req, res) => {
  res.render('contact')
})

router.post('/sendletter', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const subject = req.body.subject
  const text = req.body.message

  const transporter = nodemailer.createTransport(smtpTransport({
    port: 25
  }))

  transporter.sendMail({
    from: email,
    to: 'email@email.com',
    subject: subject,
    text: text
  }, (err, response) => {
    if (err) throw err
    else {
      res.redirect('/')
    }
  })
})

module.exports.router = router
