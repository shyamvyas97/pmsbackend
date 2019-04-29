const express = require('express');
const router = express.Router();
const PermissionsController = require('../controllers/permissioncontroller.js')

router.get('/permissions', PermissionsController.index);
router.get('/permissions/:permission_id', PermissionsController.get);
router.post('/permission/add', PermissionsController.add);
router.put('/permissions/:permission_id', PermissionsController.update);
router.delete('/permissions/:permission_id', PermissionsController.delete);

module.exports = router;