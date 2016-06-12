import passport from 'passport'
import passportLocal from 'passport-local'
import { dbUsers } from '../config'

const LocalStrategy = passportLocal.Strategy

function findUser(username, cb) {
  const query = `SELECT * FROM users WHERE username = ${dbUsers.escape(username)}`
  dbUsers.query(query, (err, result) => {
    if (err) throw err
    const user = result[0]
    if (user && username === user.username) {
      return cb(null, user)
    } else if (!user) {
      return cb(null)
    }
  })
}

passport.serializeUser((user, cb) => {
  cb(null, user.username)
})

passport.deserializeUser((username, cb) => {
  findUser(username, cb)
})

export function init() {
  passport.use( new LocalStrategy((username, password, done) => {
    findUser(username, (err, user) => {
      if (err) return done(err)
      if (!user) return done(null, false)
      if (password !== user.password) return done(null, false)
      return done(null, user)
    })
  }))
}

export function isAuth() {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    } else res.redirect('/login')
  }
}
