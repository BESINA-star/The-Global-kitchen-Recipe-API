const recipeService = require('../services/recipeService');

const createRecipe = async (req, res) => {
  try {
    const recipe = await recipeService.createRecipe(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createRecipe
};