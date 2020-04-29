exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .string('recipe_name', 255)
        .notNullable()
        .unique();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('ingredient_name', 255)
        .notNullable()
        .unique();
    })
    .createTable('recipe_ingredients', tbl => {
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.float('ingredient_quantity').notNullable();

      tbl.primary(['recipe_id', 'ingredient_id']);
    })
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('NO ACTION')
        .onUpdate('CASCADE');

      tbl.string('steps', 255).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
