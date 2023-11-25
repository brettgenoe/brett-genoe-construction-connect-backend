const router = require('express').Router();
const controller = require('../controllers/usersController')

const { verifyToken } = require('../controllers/usersController');

router.get("/register", controller.getAllUsers)
router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);
router.get("/current", verifyToken, controller.getCurrentUserInfo);


module.exports = router;

