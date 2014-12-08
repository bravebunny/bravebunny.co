var Hapi = require('hapi');

var port = process.env.BRAVEBUNNY_PORT || 8000;
var server = new Hapi.Server('0.0.0.0', port);

server.route({
  method: '*',
  path: '/{path*}',
  handler: {
    directory: {
      path: './public/',
      listing: false,
      redirectToSlash: true
    }
  }
});

server.start(function() {
  console.log('Server started at: ' + server.info.uri);
});
