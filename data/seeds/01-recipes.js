exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, recipe_name: 'Hot Chocolate' },
        { id: 2, recipe_name: 'Mac & Cheese' },
        { id: 3, recipe_name: 'Pizza' },
        { id: 4, recipe_name: 'Spaghetti' }
      ]);
    });
};
