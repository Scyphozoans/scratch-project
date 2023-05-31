const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

// import socket io listeners
const handleSocketIO = require('./socketIO.js');


//-----------MONGO DB CONNECTION STRING---------//
// mongo uri stored in .env file, must configure to string
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
mongoose.set('strictQuery', false);

const app = express();
const server = http.Server(app);

// import PORT from .env file
const PORT = process.env.PORT || 8080; 


// Serve static files in the /dist folder
app.use('/', express.static(path.join(__dirname, '../dist')));
//redirect to enable client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// configure sockey.IO server
const io = socketIO(server, {
  pingTimeout: 1000, // how many ms without a ping packet to consider the connection closed
  pingInterval: 3000, // how many ms before sending a new ping packet
});

// SET UP ROUTES FOR LOGIN AND SIGNUP

// SET UP UNKNOWN ROUTES

// SET UP GLOBAL ERROR HANDLER


// start app with mongoose connection, server, and socket listeners
const start = async() => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to Database');
    handleSocketIO(io);
    server.listen(PORT, () => {
      console.log('App listening on PORT ' + PORT);
    });
  } catch(error) {
    console.log(error.message);
  }
};
start();