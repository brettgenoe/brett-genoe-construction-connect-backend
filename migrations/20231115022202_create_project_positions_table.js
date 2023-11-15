/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('project_positions', function (table) {
        table.integer('project_id').unsigned().notNullable();
        table.integer('position_id').unsigned().notNullable();
        table.integer('positions_needed').notNullable();
        table.primary(['project_id', 'position_id']);
        table.foreign('project_id').references('project_id').inTable('projects');
        table.foreign('position_id').references('position_id').inTable('positions');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('project_positions');
};
