const http = require('http');
const fs = require('fs').promises;

http
  .createServer(async (req, res) => {
    const data = await fs.readFile('./server2.html');
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
    res.end(data);
  })
  .listen(8081);
