/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('projects').del();
    await knex('projects').insert([
        {
            company_name: 'Bluth Construction',
            location: 'Toronto',
            duration: 30,
            description: 'Building model homes for a new development.',
            manager_id: 4,
            carpenters_needed: 5,
            electricians_needed: 3,
            plumbers_needed: 2,
            operators_needed: 4,
            safety_needed: 1,
        },
        {
            company_name: 'Bluth Real Estate',
            location: 'Vancouver',
            duration: 45,
            description: 'Renovating commercial properties.',
            manager_id: 4,
            carpenters_needed: 8,
            electricians_needed: 5,
            plumbers_needed: 3,
            operators_needed: 6,
            safety_needed: 2,
        },
    ]);
};