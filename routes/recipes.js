const express = require('express');
const router = express.Router();

const db = require('../data/db-helper');

//@ROUTE        GET /api/recipes
//@DESC         gets all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await db.getRecipes();

    res.status(200).json(recipes);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

//@ROUTE        GET /api/recipes/:id/shoppingList
//@DESC         gets shopping list for specific recipe
router.get('/:id/shoppingList', async (req, res) => {
  const { id } = req.params;
  try {
    const ingredientList = await db.getShoppingList(id);

    if (!ingredientList[0]) {
      res.status(404).json({ msg: 'Recipe was not found' });
    }

    res.status(200).json(ingredientList);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

//@ROUTE        GET /api/recipes/:id/instructions
//@DESC         gets instructions for specific recipe
router.get('/:id/instructions', async (req, res) => {
  const { id } = req.params;
  try {
    const instructions = await db.getInstructions(id);

    if (!instructions[0]) {
      res.status(404).json({ msg: 'Recipe was not found' });
    }

    res.status(200).json(instructions);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

//@ROUTE        GET /api/ingredients/:id/recipes
//@DESC         gets all recipes that use a single ingredient

module.exports = router;
