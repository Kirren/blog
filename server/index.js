import express from 'express'
import jsx from 'express-react-views'
import * as config from './config'
import path from 'path'

const app = express()

// middlewares
import compression from 'compression'
import bodyParser from 'body-parser'
import logger from 'morgan'
import passport from 'passport'
import session from 'express-session'
import sessionMySQL from 'express-mysql-session'
const MySQLStore = sessionMySQL(session)

// page modules
import home from './pages/home'
import admin from './pages/admin'
import login from './pages/login'
import search from './pages/search'

// other modules
import api from './functionality/api'
import authentication from './functionality/verification'

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', jsx.createEngine())

app.use(logger('dev'))
app.use(compression({level: 9}))
app.use(express.static(path.resolve(__dirname, '../public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
authentication.init(app)
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
    }, config.dbSession),
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
  .use('/', home.router)

app.listen(config.PORT, (err) => {
    if (err) throw err
    else console.log(`Server started on port: ${ config.PORT }`)
  })

export default app
