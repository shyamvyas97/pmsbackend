var User = require('../models/user');
const mongoose = require('mongoose');
var Role = require('../models/role');

exports.index = (req, res) =>{
	User.find().populate('role_name').exec((err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
};

exports.add = (req, res) =>{
	let user = new User(req.body);
    //add
	console.log(user);
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
    User.findOneAndUpdate({_id: user_id},{$set: req.body}, {new: true,useFindAndModify:false}, (err, user) => {
        if(err)
            res.json(err);
        else
            res.json(user);
    });
};

exports.delete = (req, res) =>{
	let user_id = req.params.user_id;
	User.findOneAndRemove({
		_id:user_id
},{
	useFindAndModify:false
},(err,user) =>      {
	  if (err)
            res.json(err);
        else
            res.json(user);
    });
};

exports.get = (req, res) =>{
	let userId = req.params.user_id;
	User.findById(userId,(err, item)=>{
		if(!err){
			res.json(item);
		}else{
			res.json(err);
		}
	});
};

exports.login = (req, res) =>{
	User.findOne({email: req.body.email},(err, item)=>{
		if(!err){
			if(item){
				res.json({'message':'success'});
			}else{
				res.json({'message':'fail'});				
			}
		}else{
			res.json(err);
		}
	}).populate('role_name');
};
