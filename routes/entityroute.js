const express = require('express');
const router = express.Router();
const EntitiesController = require('../controllers/entitycontroller.js')

router.get('/entities', EntitiesController.index);
router.get('/entities/:entity_id', EntitiesController.get);
