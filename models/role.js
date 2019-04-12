const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Roles = new Schema({
    name: {
    	type: String
    }
});

module.exports = mongoose.model('Roles', Roles);