const http = require('http')


 const server = http.createServer((req, res) => {
    console.log(req.url,req.method)
 if(req.url=='/hai')
   return res.end('hai')

  res.end('Hello!');
  });
  
  server.listen(3000, () => {
  console.log('Server started on localhost:3000!');
  })