var express = require('express')
var fs = require('fs')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(epxress.static(__dirnmame + '/public'))

app.get('/', function(request, response) {
    var buffer = new Buffer(fs.readFileSync("index.html"))
    response.send(buffer)
})

app.listen(app.get('port'), function() {
    console.log('Node app is running at localhost:" + app.get('port'))
})
