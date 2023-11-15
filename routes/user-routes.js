const router = require('express').Router();
const controller = require('../controllers/usersController')

router
    .route('/')
    .get(controller.fetchAllUsers)
    .post(controller.createUser)

router
    .route('/:id')
    .get(controller.getUserById)


module.exports = router;