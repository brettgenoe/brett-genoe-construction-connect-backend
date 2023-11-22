const router = require('express').Router();
const controller = require('../controllers/usersController')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// router
//     .route('/')
//     .get(controller.fetchAllUsers)
//     .post(controller.createUser)

// router
//     .route('/:id')
//     .get(controller.getUserById)
router.get("/register", controller.getAllUsers)
router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);
router.get("/current", controller.getCurrentUserInfo);


module.exports = router;

