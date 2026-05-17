const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

// Connect Database
connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('My first API');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});