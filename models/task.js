const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Task = new Schema({
    task_name: String,
    of_project: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    users_assigned: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Task', Task);