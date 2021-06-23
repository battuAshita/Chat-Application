const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('frontend'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/frontend/frontPage.html"));
});

app.listen(PORT, function (err) {
    if (err) {
        console.log("There is an error in setting up the server");
    }
    console.log("Server listening to port" + "" + ":" + PORT);
});

