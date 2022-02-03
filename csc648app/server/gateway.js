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

// front end proxy
const frontEndHost = process.env.FRONT_END_HOST || 'http://localhost:3000';
console.log(`Front end proxies to: ${frontEndHost}`);
app.all('/*', (req, res) => {
  // for frontend
  apiProxy.web(req, res, { target: frontEndHost });
});

appServer.listen(4000);
console.log('Gateway started');