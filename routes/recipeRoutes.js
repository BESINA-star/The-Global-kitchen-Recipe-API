const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/recipes', recipeController.createRecipe);

router.get('/recipes', recipeController.getRecipes);
module.exports = router;