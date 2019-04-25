const Permission = require('../models/permission');
const mongoose = require('mongoose');
const Role = require('../models/role');

exports.index = (req, res) => {
	Permission.find().populate('role').populate('entity').exec((err, permission) => {
		if (err)
			console.log(err);
		else
			res.json(permission);
	});
};

exports.get = (req, res) => {
	let permissionId = req.params.permission_id;
	Permission.findById(permissionId).populate('role').populate('entity').exec(function (err, data) {
		if (err) return handleError(err);

		async.forEach(data, function (role, callback) {
			Role.populate(role.role_name, function (err, output) {
				if (err) throw err;
				// else res.json(output);
				callback();
			});
		}, function (err) {
			res.json(data);
		});

	});
}

exports.add = (req, res) => {
	let permission = new Permission(req.body);
	//add
	console.log(permission);
	permission.save()
		.then(permission => {
			res.status(200).json({
				'permission': 'Added successfully'
			});
		})
		.catch(err => {
			res.status(400).send('Failed to create new record');
		});
};

exports.update = (req, res) => {
	let permission_id = req.params.permission_id;
	Permission.findOneAndUpdate({
		_id: permission_id
	}, {
		$set: req.body
	}, {
		new: true,
		useFindAndModify: false
	}, (err, permission) => {
		if (err)
			res.json(err);
		else
			res.json(permission);
	});
};

exports.delete = (req, res) => {
	let permission_id = req.params.permission_id;
	Entity.findOneAndRemove({
		_id: permission_id
	}, {
		useFindAndModify: false
	}, (err, permission) => {
		if (err)
			res.json(err);
		else
			res.json(permission);
	});
};
