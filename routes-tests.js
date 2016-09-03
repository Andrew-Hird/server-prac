var test = require ('tape')
var routes = require('./routes')

test('routes.home responds with index.html', function (t) {
  var res = { sendFile: sendFile }
  //actual
  routes.home(null, res)
  //actual
  function sendFile (file) {
    t.equals(file, __dirname + '/index.html')
    t.end()
  }
})
