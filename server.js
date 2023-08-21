const express = require('express');
const path = require('path');
const axios = require('axios'); // Import Axios for making HTTP requests
const app = express();
const port = 3000;

// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, 'build')));

// API route to serve Pokemon data as JSON
app.get('/api/pokemon', (req, res) => {
  // Make an HTTP request to the Pokemon API
  axios.get('http://localhost:3000/api/pokemon-data')
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch Pokemon data' });
    });
});

// Catch-all route for serving your React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
