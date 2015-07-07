var static = require('node-static'),
	http = require('http'),
	file = new static.Server('./public');

http.createServer(function (request, response) {
  
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();

}).listen(8000);