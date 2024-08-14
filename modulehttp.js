// Import the http module
const http = require('http');


// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200,{'content-Type':'text/plain'})
  res.write('Hi welcome!')
});

// Make the server listen on the specified port
server.listen(3000, () => {
  console.log("server is running on the port 3000")
});
