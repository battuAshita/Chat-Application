const path = require('path');
const express = require('express');
const socket = require('socket.io');

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
const io = socket(server);

//Set the static folder
app.use(express.static('frontend'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/frontend/frontPage.html"));
});

io.on('connection', function (socket) {
    console.log("New websocket connection...");
})



