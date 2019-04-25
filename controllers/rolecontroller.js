const Role = require('../models/role');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    Role.find((err, role) => {
        if (err)
            console.log(err);
        else
            res.json(role);
    });
};