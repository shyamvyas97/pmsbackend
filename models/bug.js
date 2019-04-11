const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Bug = new Schema({
    bug_name: {
    	type: String
    },
    of_project: {
        type: String
    },
    users_assigned: {
        type: String
    }
});

module.exports = mongoose.model('Bug', Bug);