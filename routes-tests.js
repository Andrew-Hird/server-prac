var test = require ('tape')
var routes = require('./routes')

test('routes.webapps response includes a querystring parameter', function (t) {
  var res = { send: send }
  var req = { query: {name: 'Andrew' } }
  //actual
  routes.webapps(req, res)
  //expected
  function send (msg) {
    t.equals(msg, 'Andrew is building web apps')
    t.end()
  }
})
