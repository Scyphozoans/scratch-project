const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//---------IMPORT CONTROLLERS--------//
const userController = require('./controllers/userController.js');
const cookieController = require('./controllers/cookieController.js');
const sessionController = require('./controllers/sessionController.js');

// import socket io listeners
const handleSocketIO = require('./socketIO.js');


//-----------MONGO DB CONNECTION STRING---------//
// mongo uri stored in .env file, must configure to string
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
mongoose.set('strictQuery', false);

const app = express();
const server = http.Server(app);
app.use(cookieParser());

// import PORT from .env file
const PORT = process.env.PORT || 8080; 


// Serve static files in the /dist folder
app.use('/', express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res) => res.sendFile(__dirname, '../dist/index.html'));

// configure sockey.IO server
const io = socketIO(server, {
  pingTimeout: 1000, // how many ms without a ping packet to consider the connection closed
  pingInterval: 3000, // how many ms before sending a new ping packet
});

// SET UP ROUTES FOR LOGIN AND SIGNUP
app.post('/signup', 
  userController.createNewUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
  return res.status(200).redirect('/'); // home page or profile page? 
  // possibly route through frontend so just send status and user info
});

app.post('/login', 
  userController.verifyUser,
  cookieController.setSSIDCookie,
  (req, res) => {
  return res.status(200).redirect('/'); // maybe redirect to user profile page
  // send user associated data from DB
});

//SET UP ROUTE FOR LOGOUT
// Need to check if this idea works 
app.delete('/logout',
  sessionController.endSession,
  (req, res) => {
    res.status(200).send('Successful logout.');
  });


// SET UP UNKNOWN ROUTES

app.use('*', (_req, res)=> {
  res.status(404).send('Not Found');
});

// SET UP GLOBAL ERROR HANDLER
app.use((err, _req, res, _next) => {
  console.log(err);
  res.status(500).send({ err });
});

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