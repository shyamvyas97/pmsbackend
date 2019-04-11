const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/projectcontroller.js')

router.get('/', ProjectsController.index);
router.get('/:pro_id', ProjectsController.get);
router.post('/', ProjectsController.store);
router.put('/:pro_id', ProjectsController.update);
router.delete('/:pro_id', ProjectsController.delete);

module.exports = router;