const Entity = require('../models/entity');
const mongoose = require('mongoose');

exports.index = (req, res) => {
	Entity.find((err, entity) => {
        if (err)
            console.log(err);
        else
            res.json(entity);
    });
};
