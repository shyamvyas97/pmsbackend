const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Project = new Schema({
    title: String,
    desc: String,
    multiple_users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    start_date: String,
    end_date: String
});

module.exports = mongoose.model('Project', Project);
