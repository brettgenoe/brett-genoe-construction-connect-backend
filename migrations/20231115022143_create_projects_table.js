/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('projects', function (table) {
        table.increments('project_id').primary();
        table.string('company_name').notNullable();
        table.string('location').notNullable();
        table.integer('duration').notNullable();
        table.text('description');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('projects');
};
