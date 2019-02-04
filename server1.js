var WebSocketServer = require('ws').Server
var s = new WebSocketServer({ port: 5000 });

s.on('connection', function (ws) {
ws.on('message', function (message) {
console.log("received:"+ message);

s.clients.forEach(function e(client){
	client.send(message);
});
ws.send(message);
});
ws.on('close',function(){
	console.log("I lost a client");
});

});