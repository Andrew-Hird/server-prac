var test = require ('tape')
var routes = require('./routes')

test('routes.index responds with Hello World', function (t) {
  var res = { send: send }
//actual
  routes.index(null, res)
//expected
  function send (msg) {
    t.equals(msg, '<h1>Hello world</h1>')
    t.end()
  }
})
