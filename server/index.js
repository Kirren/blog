const express = require('express')
const jsx = require('express-react-views')
const config = require('./config')
const { resolve } = require('path')

const app = express()

// middlewares
const compression = require('compression')
const bodyParser = require('body-parser')
const logger = require('morgan')
const passport = require('passport')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)

// page modules
const home = require('./pages/home')
const admin = require('./pages/admin')
const login = require('./pages/login')
const search = require('./pages/search')
const archive = require('./pages/archive')

// other modules
const api = require('./functionality/api')
const verify = require('./functionality/verification')

app.set('views', resolve(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', jsx.createEngine())

app.use(logger('dev'))
app.use(compression({level: 9}))
app.use(express.static(resolve(__dirname, '../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
verify.init(app)
app
  .use(session({
    store: new MySQLStore({
      createDatabaseTable: true,
      schema: {
        tableName: 'sessions',
        columnNames: {
          session_id: 'session_id',
          expires: 'expires',
          data: 'data'
        }
      }
    }, config.db),
    secret: 'session_cookie_secret',
    resave: true,
    saveUninitialized: false
  }))
  .use(passport.initialize())
  .use(passport.session())

app
  .use('/admin', admin.router)
  .use('/api', api.router)
  .use('/login', login.router)
  .use('/search', search.router)
  .use('/archive', archive.router)
  .use('/', home.router)

app.listen(config.PORT, (err) => {
    if (err) throw err
    else console.log(`Server started on port: ${ config.PORT }`)
  })

module.exports = app
