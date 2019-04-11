const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/usercontroller.js')

router.get('/', UsersController.index);
router.get('/:user_id', UsersController.get);
router.post('/', UsersController.add);
router.post('/login', UsersController.login);
router.put('/:user_id', UsersController.update);
router.delete('/:user_id', UsersController.delete);

module.exports = router;