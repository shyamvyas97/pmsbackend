const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Project = new Schema({
    title: {
    	type: String
    },
    desc: {
        type: String
    },
    multiple_users: {
        type: String
    },
    start_date: {
        type: String
    },
    end_date: {
        type: String
    }
});

module.exports = mongoose.model('Project', Project);