const port = 3000;
const net = require('net');

var server = net.createServer(function(client){
    console.log('Client connected');
    client.write('Hello');
    client.on('data', function(data){
        console.log(data.toString());
    });
    client.on('end',function(){
        console.log('Client disconnected');
    });
});
server.listen(port, function(){
    console.log('Server listening for connections');
});
