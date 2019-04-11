//Dependencies
var express	 	= require('express');
var router 		= express.Router();

//Models
var User = require('../models/user');
var Entity = require('../models/entity');
var Role = require('../models/role');
var Project = require('../models/project');
var Permission = require('../models/permission');
 
//Routes
router.get('/',function(req, res)  {
    res.json({'aa':'bb'})
});

//Routes - Project Routes
router.get('/projects',function(req, res)  {
    //list
    Project.find((err, project) => {
        if (err)
            console.log(err);
        else
            res.json(project);
    });
});

router.post('project/add',function(req, res) {
    let project = new Project(req.body);
    //add
    project.save()
        .then(project => {
            res.status(200).json({'project': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.post('/project/edit/:id',function(req, res)  {
    let pro_id = req.params._id;
    Project.findOneAndUpdate({pro_id},{$set: req.body}, (err, project) => {
        if (err)
            res.json(err);
        else
            res.json(project);
    });
});

router.post('/project/del/:id',function(req,res)
{
    let pro_id = req.params._id;
    Project.findByIdAndRemove({pro_id}, (err, project) => {
        if (err)
            res.json(err);
        else
            res.json(project);
            res.json('Remove successfully');
    });
});

//Routes - User Routes
router.post('user/add',function(req, res) {
    let user = new Project(req.body);
    //add
    user.save()
        .then(user => {
            res.status(200).json({'user': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});


module.exports =  router;
