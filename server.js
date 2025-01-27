const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("hello world printed");
    res.send('Hello, World!'); // Respond with "Hello, World!" when a GET request is made to the root URL ('/') of the server 
});
    
    app.listen(5000, () => { // Start the server on port 3000 when the application is ready 
    console.log('Server is running on port 3000');
});
