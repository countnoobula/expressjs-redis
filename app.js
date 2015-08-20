var express = require('express');
var app = express();

var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('Redis connected.');
});

app.get('/', function(req, res) {
	var key = Math.random() * 1000;
	client.set(key, Math.random() * 1000);
	client.get(key, function(err, reply) {
    	res.send(reply);
	});
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Redis test listening on port %s', port);
});
