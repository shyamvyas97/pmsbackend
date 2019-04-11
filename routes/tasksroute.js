const express = require('express');
const router = express.Router();
const TasksController = require('../controllers/taskcontroller.js')

router.get('/', TasksController.index);
router.get('/:task_id', TasksController.get);
router.post('/', TasksController.add);
router.put('/:task_id', TasksController.update);
router.delete('/:task_id', TasksController.delete);

module.exports = router;