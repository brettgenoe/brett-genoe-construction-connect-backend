const router = require('express').Router();
const controller = require('../controllers/projectsController')

router
    .route('/')
    .get(controller.getAllProjects)
    .post(controller.createProject)

router
    .route('/:id')
    .get(controller.getProjectById);


module.exports = router;