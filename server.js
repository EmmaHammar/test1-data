const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(cors({
  origin: 'https://test1-data.vercel.app/', // Specify the allowed origin(s) of requests
  methods: ['GET', 'POST'], // Specify the allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed request headers
}));

app.get('/api', (req, res) => {
    // Read the JSON file
    const jsonData = require('./api/test1-data.json');
    // Send the JSON data as the response
    res.json(jsonData);
  });
  const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//command start server: node server.js
//e an Express server with a single API endpoint /api that serves the content of a JSON file 
//test1-data.json located in the api folder. When a GET request is made to /api, 
// the server reads the JSON file and sends its contents as the response.