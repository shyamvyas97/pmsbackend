const express = require('express');
const router = express.Router();
const TasksController = require('../controllers/taskcontroller.js')

router.get('/tasks', TasksController.index);
router.get('/tasks/:task_id', TasksController.get);
router.post('/task/add', TasksController.add);
router.put('/tasks/:task_id', TasksController.update);
router.delete('/tasks/:task_id', TasksController.delete);

module.exports = router;