const db = require('./db-config');

function getRecipes() {
  return db.select('*').from('recipes');
}

function getShoppingList(recipe_id) {
  //should return a list of all ingredients and quantities for a given recipe
  return db('recipe_ingredients')
    .join('recipes', 'recipe_ingredients.recipe_id', 'recipes.id')
    .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
    .select(
      'recipes.recipe_name as Recipe',
      'ingredients.ingredient_name as Ingredient',
      'recipe_ingredients.ingredient_quantity as Quantity'
    )
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  //should return a list of step by step instructions for preparing a recipe
  return db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .select('instructions.id as id', 'recipes.recipe_name as Recipe', 'steps')
    .where({ recipe_id })
    .orderBy('id', 'asc');
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
