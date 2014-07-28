var Hapi = require('hapi'),
	server = new Hapi.Server('162.243.0.129', 80);

server.route([
	{ method: '*', 	path: '/{path*}', handler: { directory: { path: './public/', listing: false, redirectToSlash: true } } }
]);
server.start();

console.log('Server up');
