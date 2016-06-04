import express from 'express'
import * as config from './config'
import path from 'path'

const app = express()

// middlewares
import bodyParser from 'body-parser'
import compression from 'compression'
import logger from 'morgan'

// page modules
import home from './home'

app
  .set('view engine', 'jade')

app
  .use(logger('dev'))
  .use(compression())
  .use(express.static(path.resolve(__dirname, '../public')))
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/', home.router)

app.listen(config.PORT, (err) => {
    if (err) throw err
    else console.log(`Server started on port: ${ config.PORT }`)
  })

export default app
