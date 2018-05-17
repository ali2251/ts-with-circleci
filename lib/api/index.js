'use strict'
exports.__esModule = true
var express_1 = require('express')
var auth_1 = require('./auth')
var profile_1 = require('./profile')
var root_1 = require('./root')
var router = express_1.Router()
auth_1['default'](router.route('/auth'))
profile_1['default'](router.route('/profile'))
root_1['default'](router.route('/'))
exports['default'] = router
