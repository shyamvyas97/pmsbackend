var Bug = require('../models/bug');
const mongoose = require('mongoose');

exports.index = (req, res) =>{
	Bug.find().populate('of_project').populate('users_assigned').exec((err, bug) => {
        if (err)
            console.log(err);
        else
            res.json(bug);
    });
};

exports.add = (req, res) =>{
	let bug = new Bug(req.body);
    //add
    bug.save()
        .then(bug => {
            res.status(200).json({'bug': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
};

exports.update = (req, res) =>{
	let bug_id = req.params.bug_id;
    Bug.findOneAndUpdate({_id: bug_id},{$set: req.body}, (err, bug) => {
        if (err)
            res.json(err);
        else
            res.json(bug);
    });
};


exports.delete = (req, res) =>{
	let bug_id = req.params.bug_id;
	Bug.findOneAndRemove({
		_id:bug_id
},{
	useFindAndModify:false
},(err,bug) =>      {
	  if (err)
            res.json(err);
        else
            res.json(bug);
    });
};


exports.get = (req, res) =>{
	let BugId = req.params.bug_id;
	Bug.findById(BugId,(err, item)=>{
		if(!err){
			res.json(item);
		}else{
			res.json(err);
		}
	}).populate('Bugs');
};
