const express = require('express');
const app = express();

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