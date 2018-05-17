'use strict'
exports.__esModule = true
var express = require('express')
var api_1 = require('./api')
var middleware_1 = require('./middleware')
var app = express()
app.set('x-powered-by', false)
app.set('json spaces', 2)
app.use(middleware_1['default'])
app.use(api_1['default'])
exports['default'] = app
