const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('users').del();
    const saltRounds = 10

    await knex('users').insert([
        {
            first_name: 'Michael',
            last_name: 'Bluth',
            password: await bcrypt.hash('password1', saltRounds),
            email: 'michael.bluth@example.com',
            role: 'Worker',
        },
        {
            first_name: 'George Michael',
            last_name: 'Bluth',
            password: await bcrypt.hash('password2', saltRounds),
            email: 'george.michael@example.com',
            role: 'Worker',
        },
        {
            first_name: 'Lucille',
            last_name: 'Bluth',
            password: await bcrypt.hash('password3', saltRounds),
            email: 'lucille.bluth@example.com',
            role: 'Employer',
        },
        {
            first_name: 'Tobias',
            last_name: 'Funke',
            password: await bcrypt.hash('password4', saltRounds),
            email: 'tobias.funke@example.com',
            role: 'Worker',
        },
        {
            first_name: 'Gob',
            last_name: 'Bluth',
            password: await bcrypt.hash('password5', saltRounds),
            email: 'gob.bluth@example.com',
            role: 'Worker',
        },
        {
            first_name: 'Buster',
            last_name: 'Bluth',
            password: await bcrypt.hash('password6', saltRounds),
            email: 'buster.bluth@example.com',
            role: 'Worker',
        },
        {
            first_name: 'Maebe',
            last_name: 'Funke',
            password: await bcrypt.hash('password7', saltRounds),
            email: 'maebe.funke@example.com',
            role: 'Worker',
        },
        {
            first_name: 'Oscar',
            last_name: 'Bluth',
            password: await bcrypt.hash('password8', saltRounds),
            email: 'oscar.bluth@example.com',
            role: 'Worker',
        },
        {
            first_name: 'Stanley',
            last_name: 'Sitwell',
            password: await bcrypt.hash('password9', saltRounds),
            email: 'stanley.sitwell@example.com',
            role: 'Employer',
        },
        {
            first_name: 'Kitty',
            last_name: 'Sanchez',
            password: await bcrypt.hash('password10', saltRounds),
            email: 'kitty@example.com',
            role: 'Employer',
        },
    ]);
};