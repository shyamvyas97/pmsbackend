const Permission = require('../models/permission');
const mongoose = require('mongoose');

exports.index = (req, res) =>{
	Permission.find().populate('role').populate('entity').exec((err, permission) => {
        if (err)
            console.log(err);
        else
            res.json(permission);
    });
};
