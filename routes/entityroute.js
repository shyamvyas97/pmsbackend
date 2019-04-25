const express = require('express');
const router = express.Router();
const EntitiesController = require('../controllers/entitycontroller.js')

router.get('/entities', EntitiesController.index);
router.get('/entities/:entity_id', EntitiesController.get);
router.post('/entity/add', EntitiesController.add);
router.put('/entities/:entity_id', EntitiesController.update);
router.delete('/entities/:entity_id', EntitiesController.delete);

module.exports = router;