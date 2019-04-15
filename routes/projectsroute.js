const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/projectcontroller.js')

router.get('/projects', ProjectsController.index);
router.get('/projects/:pro_id', ProjectsController.get);
router.post('/project/add', ProjectsController.store);
router.put('/projects/:pro_id', ProjectsController.update);
router.delete('/projects/:pro_id', ProjectsController.delete);

module.exports = router;