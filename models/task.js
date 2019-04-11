const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Task = new Schema({
    task_name: {
    	type: String
    },
    of_project: {
        type: String
    },
    users_assigned: {
        type: String
    }
});

module.exports = mongoose.model('Task', Task);