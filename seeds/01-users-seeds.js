/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('users').del();
    await knex('users').insert([
        {
            first_name: 'Michael',
            last_name: 'Bluth',
            password: 'password1',
            email: 'michael.bluth@example.com',
            role: 'Worker',
        },
        {
            first_name: 'George Michael',
            last_name: 'Bluth',
            password: 'password2',
            email: 'george.michael@example.com',
            role: 'Worker',
        },
        {
            first_name: 'Lucille',
            last_name: 'Bluth',
            password: 'password3',
            email: 'lucille.bluth@example.com',
            role: 'Employer',
        },
        {
            first_name: 'Tobias',
            last_name: 'Funke',
            password: 'password4',
            email: 'tobias.funke@example.com',
            role: 'Worker',
        },
        {
            first_name: 'Gob',
            last_name: 'Bluth',
            password: 'password5',
            email: 'gob.bluth@example.com',
            role: 'Worker',
        },
        {
            first_name: 'Buster',
            last_name: 'Bluth',
            password: 'password6',
            email: 'buster.bluth@example.com',
            role: 'Worker',
        },
        {
            first_name: 'Maebe',
            last_name: 'Funke',
            password: 'password7',
            email: 'maebe.funke@example.com',
            role: 'Worker',
        },
        {
            first_name: 'Oscar',
            last_name: 'Bluth',
            password: 'password8',
            email: 'oscar.bluth@example.com',
            role: 'Worker',
        },
        {
            first_name: 'Stanley',
            last_name: 'Sitwell',
            password: 'password9',
            email: 'stanley.sitwell@example.com',
            role: 'Employer',
        },
        {
            first_name: 'Kitty',
            last_name: 'Sanchez',
            password: 'password10',
            email: 'kitty@example.com',
            role: 'Employer',
        },
    ]);
};