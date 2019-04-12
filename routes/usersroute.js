const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/usercontroller.js')

router.get('/users', UsersController.index);
router.get('/users/:user_id', UsersController.get);
router.post('/user/add', UsersController.add);
router.post('/login', UsersController.login);
router.put('/users/:user_id', UsersController.update);
router.delete('/users/:user_id', UsersController.delete);

module.exports = router;