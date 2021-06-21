const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, function(err) {
    if(err) {
        console.log("There is an error in setting up the server");
    }
    console.log("Server listening to port" + "" + ":" + PORT);
})


