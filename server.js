const express = require('express');
const server = express();
//rputes
server.use(express.json());

module.exports = server;