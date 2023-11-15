/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('users').del();
    await knex('users').insert([
        {
            username: 'michaelbluth',
            password: 'password1',
            email: 'michael.bluth@example.com',
            address: '123 Main St',
            city: 'Toronto',
            province: 'Ontario',
            trade: 'Carpenter',
            role: 'worker',
        },
        {
            username: 'georgemichael',
            password: 'password2',
            email: 'george.michael@example.com',
            address: '456 Maple Ave',
            city: 'Vancouver',
            province: 'British Columbia',
            trade: 'Labour',
            role: 'worker',
        },
        {
            username: 'lucillebluth',
            password: 'password3',
            email: 'lucille.bluth@example.com',
            address: '789 Oak St',
            city: 'Montreal',
            province: 'Quebec',
            trade: 'Employer',
            role: 'employer',
        },
        {
            username: 'tobiasfunke',
            password: 'password4',
            email: 'tobias.funke@example.com',
            address: '101 Pine St',
            city: 'Calgary',
            province: 'Alberta',
            trade: 'Plumber',
            role: 'worker',
        },
        {
            username: 'gobbluth',
            password: 'password5',
            email: 'gob.bluth@example.com',
            address: '202 Cedar St',
            city: 'Ottawa',
            province: 'Ontario',
            trade: 'Carpenter',
            role: 'worker',
        },
    ]);
};