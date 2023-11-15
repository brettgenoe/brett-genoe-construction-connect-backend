/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id').primary();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('email').unique().notNullable();
        table.string('address');
        table.string('city');
        table.string('province');
        table.string('trade');
        table.string('role').notNullable();
    });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
