var User = require('../models/user');
const mongoose = require('mongoose');

exports.index = (req, res) =>{
	User.find((err, project) => {
        if (err)
            console.log(err);
        else
            res.json(project);
    });
};

exports.add = (req, res) =>{
	let user = new Project(req.body);
    //add
    user.save()
        .then(user => {
            res.status(200).json({'user': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
};

exports.update = (req, res) =>{
	let user_id = req.params.user_id;
    User.findOneAndUpdate({_id: user_id},{$set: req.body}, (err, user) => {
        if (err)
            res.json(err);
        else
            res.json(user);
    });
};

exports.delete = (req, res) =>{
	let user_id = req.params.user_id;
    User.findByIdAndRemove({_id: user_id}, (err, user) => {
        if (err)
            res.json(err);
        else
            res.json(user);
            res.json('Remove successfully');
    });
};

exports.get = (req, res) =>{
	let userId = req.params.user_id;
	Users.findById(userId,(err, item)=>{
		if(!err){
			res.json(item);
		}else{
			res.json(err);
		}
	}).populate('users');
};

exports.login = (req, res) =>{
	Users.findOne({name: req.body.name},(err, item)=>{
		if(!err){
			if(item){
				res.json({'message':'success'});
			}else{
				res.json({'message':'fail'});				
			}
		}else{
			res.json(err);
		}
	})
};