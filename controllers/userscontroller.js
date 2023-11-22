const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const knex = require('knex')(require("../knexfile.js"));

const getAllUsers = async (_req, res) => {
    try {
        const users = await knex('users');
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createUser = async (req, res) => {
    const { first_name, last_name, password, email, role } = req.body;

    try {
        const hashedPassword = bcrypt.hashSync(password);

        const newUser = await knex('users').insert({
            first_name,
            last_name,
            // password,
            password: hashedPassword,
            email,
            role,
        });
        console.log(newUser)

        res.json({ user_id: newUser[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const registerUser = async (req, res) => {
    const { first_name, last_name, email, password, role } = req.body;

    if (!first_name || !last_name || !email || !password || !role) {
        return res.status(400).send("Please enter the required fields.");
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
        const newUser = await knex('users').insert({
            first_name,
            last_name,
            password: hashedPassword,
            email,
            role,
        });
        console.log(req.body)

        res.status(201).json({ user_id: newUser[0] });
    } catch (error) {
        console.error(error);
        res.status(400).send("Failed registration");
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Please enter the required fields");
    }
    try {
        const user = await knex('users').where('email', email).first();

        console.log('User:', user);

        if (!user || !bcrypt.compareSync(password, user.password)) {
            console.log('Password Comparison Result:', bcrypt.compareSync(password, user.password));

            return res.status(401).json({ error: "Invalid email or password line 79" });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_KEY,
            { expiresIn: "24h" }
        );

        console.log('Generated Token:', token);

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'The error is coming from ~line 76 in users controllers' });
    }
};

const getCurrentUserInfo = async (req, res) => {
    // If there is no auth header provided
    if (!req.headers.authorization) {
        return res.status(401).send("Please login");
    }

    // Parse the bearer token
    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(" ")[1];

    // Verify the token
    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);

        // Respond with the appropriate user data
        const user = await knex('users').where('email', decoded.email).first();

        if (!user) {
            return res.status(401).send("Invalid auth token");
        }

        delete user.password;
        res.json(user);
    } catch (error) {
        return res.status(401).send("Invalid auth token");
    }
};

module.exports = {
    createUser,
    registerUser,
    loginUser,
    getCurrentUserInfo,
    getAllUsers,
};

