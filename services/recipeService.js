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

const updateRecipe = async (id, data) => {
  const recipe = await Recipe.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });

  if (!recipe) {
    throw new Error('Recipe not found');
  }

  return recipe;
};

module.exports = {
  createRecipe,
  getAllRecipes,
  updateRecipe
};