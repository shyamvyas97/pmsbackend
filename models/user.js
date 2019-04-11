const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    name: {
    	type: String
    },
    email: {
        type: String
    },
    role: {
    	type: String
    }
});

module.exports = mongoose.model('User', User);