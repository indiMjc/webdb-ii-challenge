const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('API up and running boooiii');
});

module.exports = server;
