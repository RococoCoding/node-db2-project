
exports.up = function(knex) {
  return knex.schema.createTable('cars3', tbl => {
		tbl.increments();
		tbl.text('make', 128).notNullable();
    tbl.integer('vin').unique().notNullable();
    tbl.text('model', 128).notNullable();
    tbl.integer('mileage').notNullable();
    tbl.text('transmission', 128);
    tbl.text('title', 128);
	})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
