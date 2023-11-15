const knex = require('knex')(require("../knexfile.js"));

const fetchAllUsers = async (_req, res) => {
    try {
        const users = await knex("users");
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await knex('users').where('user_id', id).first();
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createUser = async (req, res) => {
    const { username, password, email, address, city, province, trade } = req.body;

    try {
        const newUser = await knex('users').insert({
            username,
            password,
            email,
            address,
            city,
            province,
            trade,
        });

        res.json({ user_id: newUser[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {

    fetchAllUsers,
    getUserById,
    createUser,
};