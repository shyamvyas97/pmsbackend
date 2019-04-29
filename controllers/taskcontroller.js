var Task = require('../models/task');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    Task.find().populate('of_project').populate('users_assigned').exec((err, task) => {
        if (err)
            console.log(err);
        else
            res.json(task);
    });
};

exports.add = (req, res) => {
    let task = new Task(req.body);
    //add
    task.save()
        .then(task => {
            res.status(200).json({
                'task': 'Added successfully'
            });
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
};

exports.update = (req, res) => {
    let task_id = req.params.task_id;
    Task.findOneAndUpdate({
        _id: task_id
    }, {
        $set: req.body
    }, (err, task) => {
        if (err)
            res.json(err);
        else
            res.json(task);
    });
};


exports.delete = (req, res) => {
    let task_id = req.params.task_id;
    Task.findOneAndRemove({
        _id: task_id
    }, {
        useFindAndModify: false
    }, (err, task) => {
        if (err)
            res.json(err);
        else
            res.json(task);
    });
};


exports.get = (req, res) => {
    let TaskId = req.params.task_id;
    Task.findById(TaskId, (err, item) => {
        if (!err) {
            res.json(item);
        } else {
            res.json(err);
        }
    }).populate('of_project').populate('users_assigned');
};