const express = require('express');
const socketio = require('socket.io');
const port = 7777;
const app = express(port);
const io = socketio(app);

