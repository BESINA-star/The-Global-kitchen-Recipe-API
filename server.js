const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('My First API');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});