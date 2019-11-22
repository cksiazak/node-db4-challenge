exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, steps: 'Add cocoa powder to a cup' },
        { recipe_id: 1, steps: 'Add milk to cup' },
        { recipe_id: 1, steps: 'Stir milk and cocoa' },
        { recipe_id: 1, steps: 'Heat in microwave' },
        { recipe_id: 2, steps: 'Boil macaroni noodles in water' },
        { recipe_id: 2, steps: 'Once boiled, strain the contents' },
        {
          recipe_id: 2,
          steps: 'Add milk and cheese to the still hot macaroni'
        },
        { recipe_id: 2, steps: 'Stir contents till reaching desired coverage' },
        { recipe_id: 3, steps: 'Flatten dough into disk shape' },
        { recipe_id: 3, steps: 'Spread marinara into a layer on top of dough' },
        { recipe_id: 3, steps: 'Add cheese to desired coverage' },
        { recipe_id: 3, steps: 'Add peperonis on top' },
        { recipe_id: 3, steps: 'Heat in oven for 15 mins at 425 degrees' },
        {
          recipe_id: 4,
          steps: 'Add spaghetti noodles to boiling water, then strain'
        },
        {
          recipe_id: 4,
          steps: 'Heat meatballs in oven at 375 degrees for 10 minutes'
        },
        { recipe_id: 4, steps: 'Heat marinara sauce in separate pan' },
        {
          recipe_id: 4,
          steps: 'Add cooked meatballs to sauce and keep heat on low'
        },
        { recipe_id: 4, steps: 'combine ingredients and serve' }
      ]);
    });
};
