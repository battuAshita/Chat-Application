const path = require('path');
const express = require('express');
const socketio = require('socket.io');

const formatMessage = require('./utils/messages');

//Setup the app
const PORT = 3000;
const app = express();
const server = app.listen(PORT, function (err) {
    if (err) {
        console.log("There is an error in setting up the server");
    }
    console.log("Server listening to port" + "" + ":" + PORT);
});

//Setup the socket
const io = socketio(server);

//Set the static folder
app.use(express.static('frontend'));

//Get request to the frontpage
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/frontend/frontPage.html"));
});

io.on('connection', function (socket) {
    console.log("New websocket connection...");

    socket.emit('message', formatMessage('Chat Bot', 'Welcome to my chat application!'));

    //Notify when a user connects
    socket.broadcast.emit('message', formatMessage('Chat Bot', 'A user has joined the room'));

    //Client disconnects
    socket.on('disconnect', function() {
        io.emit('message', formatMessage('Chat Bot', 'A user has left the room'));
    });

    //Capture the message from the client
    socket.on('message', function(message) {
        io.emit('message', formatMessage('user', message));
    });
    
});
  


