'use strict'
exports.__esModule = true
var body_parser_1 = require('body-parser')
var compression = require('compression')
var cors = require('cors')
var morgan = require('morgan')
exports['default'] = [
  morgan('dev', {
    skip: function() {
      return process.env.NODE_ENV === 'test'
    }
  }),
  compression(),
  cors({
    credentials: true,
    origin: true
  }),
  body_parser_1.urlencoded({
    extended: true
  }),
  body_parser_1.json()
]
