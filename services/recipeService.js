const Recipe = require('../models/recipeModel');

const createRecipe = async (data) => {
  if (data.cookingTime <= 0) {
    throw new Error('Cooking time must be a positive number');
  }

  const recipe = await Recipe.create(data);
  return recipe;
};

const getAllRecipes = async () => {
  return await Recipe.find();
};

module.exports = {
  createRecipe,
  getAllRecipes
};