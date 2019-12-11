exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl
      .string('vin', 30)
      .notNullable()
      .unique();
    tbl.string('make', 20).notNullable();
    tbl.string('model', 20).notNullable();
    tbl.string('mileage', 7).notNullable();
    tbl.string('transmission', 10);
    tbl.string('titleStatus', 10);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
