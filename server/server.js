const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

const isProd = process.env.NODE_ENV === 'prod';

const options = isProd ? {
  key: fs.readFileSync('/etc/letsencrypt/live/easyprivacy.co.in/privkey.pem', 'utf8'), 
  cert: fs.readFileSync('/etc/letsencrypt/live/easyprivacy.co.in/fullchain.pem', 'utf8')
} : null;

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

if (isProd) {
  https.createServer(options, app).listen(port, host, () => {
    console.log(`Server (prod) is running on https://${host}:${port}`);
  });
} else {
  http.createServer(app).listen(port, host, () => {
    console.log(`Server (dev) is running on http://${host}:${port}`);
  });
}