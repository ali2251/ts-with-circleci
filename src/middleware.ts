import { json, urlencoded } from 'body-parser'
import compression = require('compression')
import cors = require('cors')
import morgan = require('morgan')

export default [
  morgan('dev', {
    skip: () => process.env.NODE_ENV === 'test'
  }),
  compression(),
  cors({
    credentials: true,
    origin: true
  }),
  urlencoded({
    extended: true
  }),
  json()
]
