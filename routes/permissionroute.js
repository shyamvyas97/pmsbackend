const express = require('express');
const router = express.Router();
const PermissionsController = require('../controllers/permissioncontroller.js')

router.get('/permissions', PermissionsController.index);
router.get('/permissions/:permission_id', PermissionsController.get);
