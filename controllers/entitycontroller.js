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
exports.add = (req, res) =>{
	let entity = new Entity(req.body);
    //add
	console.log(entity);
    entity.save()
        .then(entity => {
            res.status(200).json({'entity': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
};

exports.update = (req, res) =>{
	let entity_id = req.params.entity_id;
    Entity.findOneAndUpdate({_id: entity_id},{$set: req.body}, {new: true,useFindAndModify:false}, (err, entity) => {
        if(err)
            res.json(err);
        else
            res.json(entity);
    });
};

exports.delete = (req, res) =>{
	let entity_id = req.params.entity_id;
	Entity.findOneAndRemove({
		_id:entity_id
},{
	useFindAndModify:false
},(err,user) =>      {
	  if (err)
            res.json(err);
        else
            res.json(entity);
    });
};

exports.get = (req, res) =>{
	let entityId = req.params.entity_id;
	Entity.findById(entityId,(err, item)=>{
		if(!err){
			res.json(item);
		}else{
			res.json(err);
		}
	});
};
