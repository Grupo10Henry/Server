//Evelyn
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const passport = require('passport');
require('./passport-setup');
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(router);
server.use(passport.initialize());
server.use(passport.session());

module.exports = server;
