var express = require('express');
var app = express();

var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
var port = 3000;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
// app.use(passport.initialize());
// app.use(passport.session());

const Projects = require('./routes/projectsroute');
app.use('/',Projects);

const Users = require('./routes/usersroute');
app.use('/',Users);

const Tasks = require('./routes/tasksroute');
app.use('/',Tasks);

const Bugs = require('./routes/bugsroute');
app.use('/',Bugs);

const Roles = require('./routes/rolesroute');
app.use('/',Roles);

const Entities = require('./routes/entityroute');
app.use('/',Entities);

const Permissions = require('./routes/permissionroute');
app.use('/',Permissions);

//Connection String
mongoose.connect('mongodb://localhost:27017/pms');

var connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

// app.use('/', routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
