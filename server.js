const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();

// Connect Database
connectDB();

// Initialize 
const app = express();

// Middleware
app.use(express.json());

// Routes 
app.use('/api', recipeRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('My first API');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});