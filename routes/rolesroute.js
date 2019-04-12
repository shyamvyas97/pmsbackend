const express = require('express');
const router = express.Router();
const RolesController = require('../controllers/rolecontroller');

router.get('/roles', RolesController.index);

module.exports = router;