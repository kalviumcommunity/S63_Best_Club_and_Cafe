const express = require('express');
const app = express();

app.get('/Ping', (req, res) => {
    // console.log("pong");
    res.send('Pong'); // Respond with "Hello, World!" when a GET request is made to the root URL ('/') of the server 
});
    
    app.listen(3000, () => { // Start the server on port 3000 when the application is ready 
    console.log('Server is running on port 3000');
});
