const net = require('net');
const port = 3000;
const server = net.createServer();
server.listen(port, () => {
  console.log(`Server connected on port ${port}`)
});


// communicate with the client ////

server.on("close", (client) => {
  console.log('New client connected');
  client.write('Hello server, from me the client! 😊')

});
