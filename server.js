const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();

// Connect Database
connectDB();

// Initialize app FIRST
const app = express();

// Middleware
app.use(express.json());

// Routes (AFTER app is created)
app.use('/api', recipeRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('My API is working 🚀');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});