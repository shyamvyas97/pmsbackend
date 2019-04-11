const express = require('express');
const router = express.Router();
const BugsController = require('../controllers/bugcontroller.js')

router.get('/', BugsController.index);
router.get('/:bug_id', BugsController.get);
router.post('/', BugsController.add);
router.put('/:bug_id', BugsController.update);
router.delete('/:bug_id', BugsController.delete);

module.exports = router;