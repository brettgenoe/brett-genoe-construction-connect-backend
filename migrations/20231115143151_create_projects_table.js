/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('projects', function (table) {
        table.increments('project_id').primary();
        table.string('company_name').notNullable();
        table.integer('duration').notNullable();
        table.text('description');
        table.integer('manager_id')
            .unsigned()
            .references('users.user_id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('carpenters_needed').notNullable();
        table.text('carpenters_description');
        table.integer('electricians_needed').notNullable();
        table.text('electricians_description');
        table.integer('plumbers_needed').notNullable();
        table.text('plumbers_description');
        table.integer('operators_needed').notNullable();
        table.text('operators_description');
        table.integer('labours_needed').notNullable();
        table.text('labours_description');
        table.integer('safety_needed').notNullable();
        table.text('safety_description');
        table.json('geo_data');
        table.string('email');
        table.string('telephone');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('projects');
};