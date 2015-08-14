var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var fs = require('fs')
  var html = new buffer.toString(fs.readFileSync("index.html"))
  response.send(html)
  //response.send("hello world, i guess")
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
