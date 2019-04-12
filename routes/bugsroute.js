const express = require('express');
const router = express.Router();
const BugsController = require('../controllers/bugcontroller.js')

router.get('/bugs', BugsController.index);
router.get('/bugs/:bug_id', BugsController.get);
router.post('/bug/add', BugsController.add);
router.put('/bugs/:bug_id', BugsController.update);
router.delete('/bugs/:bug_id', BugsController.delete);

module.exports = router;