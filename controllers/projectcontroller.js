const Project = require('../models/project');
const mongoose = require('mongoose');

exports.index = (req, res) => {
	Project.find((err, project) => {
        if (err)
            console.log(err);
        else
            res.json(project);
    });
};


exports.store = (req, res) => {
	let project = new Project(req.body);
    //add
    project.save()
        .then(project => {
            res.status(200).json({'project': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
};

exports.update = (req, res) => {
	let pro_id = req.params.pro_id;
    Project.findOneAndUpdate({_id: pro_id},{$set: req.body}, (err, project) => {
        if (err)
            res.json(err);
        else
            res.json(project);
    });
};

exports.delete = (req, res) => {
	let pro_id = req.params.pro_id;
    Project.findByIdAndRemove({_id: pro_id}, (err, project) => {
        if (err)
            res.json(err);
        else
            res.json(project);
            res.json('Remove successfully');
    });
};

exports.get = (req, res) => {
	let projectId = req.params.pro_id;
	Projects.findById(projectId, (err, item) => {
		if (!err) {
			res.json(item);
		} else {
			res.json(err);
		}
	}).populate('users');
};