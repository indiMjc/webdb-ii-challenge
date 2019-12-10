const express = require('express');

const server = express();

const carsRouter = require('./api/carsRouter');

server.use(express.json());

server.get('/', (req, res) => {
  res.send('API up and running boooiii');
});

module.exports = server;
