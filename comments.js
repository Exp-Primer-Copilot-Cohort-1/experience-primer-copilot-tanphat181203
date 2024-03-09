// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Create a route for GET requests to /comments
app.get('/comments', (req, res) => {
  res.json({ comments: [] });
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});