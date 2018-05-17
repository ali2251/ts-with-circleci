'use strict'
exports.__esModule = true
var debug_1 = require('debug')
var app_1 = require('./app')
var HOST = process.env.HOST || 'localhost'
var PORT = process.env.PORT || '3000'
app_1['default'].listen(parseInt(PORT, 10), HOST, function() {
  debug_1['default']('server')('running at http://' + HOST + ':' + PORT)
})
