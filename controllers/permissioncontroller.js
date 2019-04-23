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
exports.get = (req, res) =>{
	let permissionId = req.params.permission_id;
	Permission.findById(permissionId,(err, permission)=>{
		if(!err){
			res.json(permission);
		}else{
			res.json(err);
		}
	});
};
