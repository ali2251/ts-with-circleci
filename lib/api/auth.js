'use strict'
exports.__esModule = true
function session(req, res) {
  res.jsonp({ code: 200 })
}
function login(req, res) {
  res.jsonp({ code: 200 })
}
function logout(req, res) {
  res.jsonp({ code: 200 })
}
exports['default'] = function(route) {
  route.get(session)
  route.post(login)
  route['delete'](logout)
}
