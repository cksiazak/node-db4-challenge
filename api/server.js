const express = require('express');
const server = express();

const helmet = require('helmet');

// init middleware
server.use(helmet());
server.use(express.json({ extended: false }));

// Routes
server.use('/api/recipes', require('../routes/recipes'));

server.get('/', (req, res) => {
  res.status(418).send('Server Started');
});

module.exports = server;
