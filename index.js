// server.js
const http = require('http');
const url = require('url');
const homePageText = "This is the home page";

const members = require('./members');   

const usersData = require('./users');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(homePageText);
  } else if (parsedUrl.pathname === '/about') {
    const responseJson = {
      Status: 'success',
      Message: 'response success',
      Description: 'Exercise #03',
      Date: new Date().toISOString(),
      Data: members.getMembers()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseJson, null, 2));
  } else if (parsedUrl.pathname === '/users') {
    const responseJson = {
      Status: 'success',
      Message: 'response success',
      Description: 'User data from external API',
      Date: new Date().toISOString(),
      Data: usersData
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseJson, null, 2));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});