const router = require('express').Router();
const controller = require('../controllers/userscontroller')

router
    .route('/')
    .get(controller.fetchAllUsers)
    .post(controller.createUser)

router
    .route('/:id')
    .get(controller.getUserById)





module.exports = router;