const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Bug = new Schema({
    bug_name: String,
    of_project: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    users_assigned: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Bug', Bug);