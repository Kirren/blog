const router = require('express').Router()
const nodemailer = require('nodemailer')
// const smtpTransport = require('nodemailer-smtp-transport')

router.get('/', (req, res) => {
  res.render('contact')
})

router.post('/sendletter', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const subject = req.body.subject
  const text = req.body.message
  // const transporter = nodemailer.createTransport(smtpTransport({
  //   secure: false,
  //   port: 465
  // }))
  // transporter.sendMail({
  //   from: email,
  //   to: 'a.pavlov.sch@gmail.com',
  //   subject: subject,
  //   text: text
  // }, (err, response) => {
  //   if (err) throw err
  //   else res.redirect('back')
  // })
  // transporter.verify(function(error, success) {
  //  if (error) {
  //       console.log(error);
  //  } else {
  //       console.log('Server is ready to take our messages');
  //  }
  // });
  res.redirect('back')
  // to be continued
})

module.exports.router = router
