// Import the Express framework
const express = require('express');
// Create an instance of an Express application
const app = express();
// Define the port number the server
const port = 3000;

// Define a route for HTTP GET requests to the root URL ('/')
app.get('/', (req, res) => {
  // Send 'Hello World!' as a response to the client
  res.send('Hello World!');
});

// Start the server and listen on the defined port
app.listen(port, () => {
  // Log a message when the server starts successfully
  console.log(`Server running at http://localhost:${port}`);
});
