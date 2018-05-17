'use strict'
exports.__esModule = true
function sendMessage(req, res) {
  res.send('You look nice.')
}
exports['default'] = function(route) {
  route.get(sendMessage)
}
