const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    name: String,
    email: String,
    role: [{ type: Schema.Types.ObjectId, ref: 'Roles' }]
});

module.exports = mongoose.model('User', User);