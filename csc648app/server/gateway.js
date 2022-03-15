const express = require('express');
const server = require('http');
const httpProxy = require('http-proxy');

const app = express();
const appServer = server.createServer(app);
const apiProxy = httpProxy.createProxyServer(app);

apiProxy.on('error', (err, req, res) => {
  console.log(err);
  res.status(500).send('Proxy down :(');
});

// // front end proxy
// const frontEndHost = process.env.FRONT_END_HOST || 'http://localhost:3000';
// console.log(`Front end proxies to: ${frontEndHost}`);
// app.all('/*', (req, res) => {
//   // for frontend
//   apiProxy.web(req, res, { target: frontEndHost });
// });

// for todo!!
const todoHost = process.env.TODO_HOST || 'http://localhost:4001';    
console.log(`todo end proxies to: ${todoHost}`);  
app.all('/api/todo*', (req, res) => {         
  apiProxy.web(req, res, { target: todoHost });  
});

const usersHost = process.env.USERS_HOST || 'http://localhost:4003';    
console.log(`todo end proxies to: ${usersHost}`);  
app.all('/api/todo*', (req, res) => {         
  apiProxy.web(req, res, { target: usersHost });  
});

appServer.listen(4000);
console.log('Gateway started');