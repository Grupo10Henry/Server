//Evelyn
require('dotenv').config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const passport = require('passport');
require('./passport-setup');
const server = express();
const session = require('express-session');

server.use(morgan("dev"));
server.use(express.json());
server.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,
  }));
server.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true
}));
server.use(passport.initialize());
server.use(passport.session());
server.use(router);

module.exports = server;
