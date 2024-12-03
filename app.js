const express = require('express');
const app = express();

// Define a port
const PORT = 3000;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World! This is a simple Node.js application.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
