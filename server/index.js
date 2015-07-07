var http = require('http'),
    Radar = require('radar').server,
    configuration = require('radar').configurator.load({persistence: true}),
    Api = require('radar').api,
    port = 8000,
    httpServer = http.createServer(function(req, res) {
      res.end('wat?');
    });

Api.attach(httpServer);

var radar = new Radar();

radar.attach(httpServer, configuration);

console.log('listening on port ' + port);
httpServer.listen(port);