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
            password: hashedPassword,
            email,
            role,
        });
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

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ error: "Invalid email or password line 79 user controller" });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_KEY,
            { expiresIn: "24h" }
        );
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'The error is coming from ~line 76 in users controllers' });
    }
};
const verifyToken = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send("Please login line 99 of controllers");
    }

    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);
        req.user = decoded;

        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        return res.status(401).send("Invalid auth token");
    }
};

const getCurrentUserInfo = async (req, res) => {
    if (!req.headers.authorization) {
        return res.status(401).send("Please login");
    }

    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);
        const user = await knex('users').where('email', decoded.email).first();

        if (!user) {
            return res.status(401).send("Invalid auth token");
        }
        delete user.password;
        res.json(user);
    } catch (error) {
        console.error("Error verifying token:", error);
        return res.status(401).send("Invalid auth token");
    }
};

module.exports = {
    createUser,
    registerUser,
    loginUser,
    getCurrentUserInfo,
    getAllUsers,
    verifyToken
};

