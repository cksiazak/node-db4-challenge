exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, ingredient_name: 'Cocoa Powder' },
        { id: 2, ingredient_name: 'Milk' },
        { id: 3, ingredient_name: 'Macaroni Noodles' },
        { id: 4, ingredient_name: 'Spaghetti Noodles' },
        { id: 5, ingredient_name: 'Meatballs' },
        { id: 6, ingredient_name: 'Marinara' },
        { id: 7, ingredient_name: 'Cheese' },
        { id: 8, ingredient_name: 'Pepperoni' },
        { id: 9, ingredient_name: 'Dough' }
      ]);
    });
};
