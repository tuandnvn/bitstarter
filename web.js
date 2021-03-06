var express = require('express');
var fs = require('fs');

var buffer = new Buffer( fs.readFileSync('index.html') );
var str = buffer.toString('utf8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(str);
});

var buffer2 = new Buffer( fs.readFileSync('demo.html'));
var demo = buffer2.toString('utf8');

app.get('/demo', function(request, response) {
  response.send(demo);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
