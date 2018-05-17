'use strict'
exports.__esModule = true
function getProfile(req, res) {
  res.jsonp({ name: 'Joe Blogs' })
}
exports['default'] = function(route) {
  route.get(getProfile)
}
