import express from 'express'
import jsx from 'express-react-views'
import * as config from './config'
import path from 'path'

const app = express()

// middlewares
import bodyParser from 'body-parser'
import compression from 'compression'
import logger from 'morgan'

// page modules
import home from './home'
import admin from './admin'
import api from './api'

app.set('views', [
  path.resolve(__dirname, 'home/views'),
  path.resolve(__dirname, 'admin/views')
])
app.set('view engine', 'jsx')
app.engine('jsx', jsx.createEngine())

app
  .use(logger('dev'))
  .use(compression())
  .use(express.static(path.resolve(__dirname, '../public')))
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/', home.router)
  .use('/admin', admin.router)
  .use('/api', api.router)

app.listen(config.PORT, (err) => {
    if (err) throw err
    else console.log(`Server started on port: ${ config.PORT }`)
  })

export default app
