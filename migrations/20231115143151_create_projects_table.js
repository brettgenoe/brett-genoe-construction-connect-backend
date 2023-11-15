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
        table.integer('manager_id')
            .unsigned()
            .references('users.user_id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        // table.integer('manager_id').unsigned();
        // table.foreign('manager_id').references('user_id').inTable('users');
        table.integer('carpenters_needed').notNullable();
        table.integer('electricians_needed').notNullable();
        table.integer('plumbers_needed').notNullable();
        table.integer('operators_needed').notNullable();
        table.integer('safety_needed').notNullable();
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('projects')
};